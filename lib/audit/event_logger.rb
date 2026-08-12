# frozen_string_literal: true

require "securerandom"
require "time"

module Audit
  class EventLogger
    ALLOWED_FAMILIES = %w[
      identity
      authorization
      tenant
      data
      configuration
      security
      integration
      ai
      system
    ].freeze

    class << self
      def valid_family?(family)
        ALLOWED_FAMILIES.include?(family.to_s)
      end

      def log(event_type:, actor:, organization_id: nil, action:, target: nil, result: "success", channel: "system", before_state: nil, after_state: nil)
        family = event_type.to_s.split(".").first
        unless valid_family?(family)
          raise ArgumentError, "Invalid audit event family '#{family}' for event_type '#{event_type}'"
        end

        event = {
          event_id: SecureRandom.uuid,
          event_type: event_type,
          family: family,
          actor: actor,
          organization_id: organization_id || Current.organization&.id,
          action: action,
          target: target,
          request_id: Current.request_id || SecureRandom.hex(8),
          result: result,
          timestamp: Time.now.utc.iso8601,
          channel: channel,
          before_state: before_state,
          after_state: after_state
        }

        persist(event)
        event
      end

      private

      def persist(event)
        Rails.logger.info("[AUDIT_EVENT] #{event.to_json}")
      end
    end
  end
end
