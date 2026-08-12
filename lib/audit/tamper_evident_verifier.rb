# frozen_string_literal: true

require "digest"
require "json"

module Audit
  class TamperEvidentVerifier
    # Note: Tamper-evident mechanisms make unauthorized modification detectable;
    # they MUST NOT be described as tamper-proof.

    class << self
      def chain_event(event_type:, actor:, action:, target: nil, previous_digest: "0" * 64, timestamp: nil)
        ts = timestamp || Time.now.utc.iso8601
        canonical_payload = compute_canonical_payload(
          event_type: event_type,
          actor: actor,
          action: action,
          target: target,
          timestamp: ts
        )

        event_digest = compute_event_digest(canonical_payload, previous_digest)

        {
          event_type: event_type,
          actor: actor,
          action: action,
          target: target,
          timestamp: ts,
          previous_digest: previous_digest,
          canonical_payload: canonical_payload,
          event_digest: event_digest
        }
      end

      def verify(events)
        return { valid: true, tampered_index: -1 } if events.empty?

        events.each_with_index do |evt, idx|
          prev_digest = idx.zero? ? (evt[:previous_digest] || "0" * 64) : events[idx - 1][:event_digest]

          recalculated_payload = compute_canonical_payload(
            event_type: evt[:event_type],
            actor: evt[:actor],
            action: evt[:action],
            target: evt[:target],
            timestamp: evt[:timestamp]
          )

          recalculated_digest = compute_event_digest(recalculated_payload, prev_digest)

          if recalculated_digest != evt[:event_digest]
            return { valid: false, tampered_index: idx, error: "Digest mismatch at index #{idx}" }
          end
        end

        { valid: true, tampered_index: -1 }
      end

      private

      def compute_canonical_payload(event_type:, actor:, action:, target:, timestamp:)
        Digest::SHA256.hexdigest("#{event_type}|#{actor}|#{action}|#{target}|#{timestamp}")
      end

      def compute_event_digest(canonical_payload, previous_digest)
        Digest::SHA256.hexdigest("#{previous_digest}|#{canonical_payload}")
      end
    end
  end
end
