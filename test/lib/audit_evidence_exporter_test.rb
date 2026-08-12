# frozen_string_literal: true

require "test_helper"
require "audit/evidence_exporter"

class AuditEvidenceExporterTest < ActiveSupport::TestCase
  test "exports audit evidence package with mandatory files and checksums" do
    target_dir = Rails.root.join("tmp/audit_export_test_#{Time.now.to_i}")

    events = [
      {
        event_id: "evt_1",
        event_type: "identity.login.success",
        actor: "user_1",
        timestamp: Time.now.utc.iso8601
      }
    ]

    exporter = Audit::EvidenceExporter.new(events: events, output_dir: target_dir)
    manifest = exporter.export

    assert File.exist?(File.join(target_dir, "events.json"))
    assert File.exist?(File.join(target_dir, "manifest.json"))
    assert File.exist?(File.join(target_dir, "checksums.txt"))
    assert File.exist?(File.join(target_dir, "metadata.json"))

    assert_equal 1, manifest[:event_count]
    assert_not_nil manifest[:sha256]
  ensure
    FileUtils.rm_rf(target_dir) if File.exist?(target_dir)
  end
end
