# frozen_string_literal: true

require "fileutils"
require "json"
require "digest"

module Audit
  class EvidenceExporter
    def initialize(events:, output_dir: nil)
      @events = events
      @output_dir = output_dir ? Pathname.new(output_dir) : Rails.root.join("tmp/audit-evidence-#{Time.now.to_i}")
    end

    def export
      FileUtils.mkdir_p(@output_dir)

      events_json = File.join(@output_dir, "events.json")
      manifest_json = File.join(@output_dir, "manifest.json")
      checksums_txt = File.join(@output_dir, "checksums.txt")
      metadata_json = File.join(@output_dir, "metadata.json")

      File.write(events_json, JSON.pretty_generate(@events))

      events_digest = Digest::SHA256.file(events_json).hexdigest

      metadata = {
        exported_at: Time.now.utc.iso8601,
        organization_id: Current.organization&.id,
        event_count: @events.length,
        platform_version: Platform::Version.current
      }
      File.write(metadata_json, JSON.pretty_generate(metadata))

      checksums = [
        "#{events_digest}  events.json",
        "#{Digest::SHA256.file(metadata_json).hexdigest}  metadata.json"
      ]
      File.write(checksums_txt, checksums.join("\n") + "\n")

      manifest = {
        exported_at: metadata[:exported_at],
        event_count: @events.length,
        sha256: events_digest,
        files: %w[events.json manifest.json checksums.txt metadata.json]
      }
      File.write(manifest_json, JSON.pretty_generate(manifest))

      manifest
    end
  end
end
