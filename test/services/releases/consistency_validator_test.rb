# frozen_string_literal: true

require "test_helper"
require "digest"

module Releases
  class ConsistencyValidatorTest < ActiveSupport::TestCase
    test "accepts evidence bound to one canonical version" do
      assert evidence_report.ready?
    end

    test "reports stable findings for inconsistent evidence" do
      report = evidence_report(tag: "v0.8.0", provenance_version: "0.8.0")

      assert_not report.ready?
      assert_equal %w[provenance_version_mismatch tag_version_mismatch],
        report.findings.pluck(:code).sort
    end

    test "requires matching component and property versions in each sbom" do
      application_sbom = sbom("0.9.0")
      application_sbom.dig("metadata", "properties").last["value"] = "0.8.0"
      report = evidence_report(application_sbom:)

      assert_includes report.findings.pluck(:code), "application_sbom_version_mismatch"
    end

    private

    def evidence_report(tag: "v0.9.0", provenance_version: "0.9.0", application_sbom: sbom("0.9.0"))
      compatibility = {
        "schema_version" => 1,
        "source_version" => "0.8.0",
        "platform_version" => "0.9.0",
        "contracts" => {}
      }
      metadata = {
        "target_version" => "0.9.0",
        "compatibility_digest" => Digest::SHA256.hexdigest(CanonicalJson.generate(compatibility))
      }
      ConsistencyValidator.new(
        version: "0.9.0",
        tag:,
        release_metadata: metadata,
        release_notes: "# 0.9.0 Release Notes\n",
        compatibility:,
        application_sbom:,
        container_sbom: sbom("0.9.0"),
        packaging_manifest: {
          "source" => { "version" => "0.9.0" },
          "image" => {
            "labels" => { "org.opencontainers.image.version" => "0.9.0" }
          }
        },
        provenance: {
          "predicate" => {
            "buildDefinition" => {
              "externalParameters" => { "platform_version" => provenance_version }
            }
          }
        }
      ).call
    end

    def sbom(version)
      {
        "metadata" => {
          "component" => { "version" => version },
          "properties" => [
            { "name" => "source.commit", "value" => "abc123" },
            { "name" => "platform.version", "value" => version }
          ]
        }
      }
    end
  end
end
