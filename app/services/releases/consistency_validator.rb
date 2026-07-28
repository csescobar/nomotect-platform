# frozen_string_literal: true

require "digest"
require "json"

module Releases
  class ConsistencyValidator
    def initialize(
      version:,
      tag:,
      release_metadata:,
      release_notes:,
      compatibility:,
      application_sbom:,
      container_sbom:,
      packaging_manifest:,
      provenance:
    )
      @version = Platform::Version.new(version).to_s
      @tag = tag
      @release_metadata = release_metadata
      @release_notes = release_notes
      @compatibility = compatibility
      @application_sbom = application_sbom
      @container_sbom = container_sbom
      @packaging_manifest = packaging_manifest
      @provenance = provenance
    end

    def call
      findings = []
      compare(findings, "tag_version_mismatch", "v#{version}", tag)
      compare(findings, "release_metadata_version_mismatch", version, dig(release_metadata, "target_version"))
      compare(findings, "compatibility_version_mismatch", version, dig(compatibility, "platform_version"))
      compare(findings, "release_notes_version_mismatch", true, release_notes.start_with?("# #{version} Release Notes"))
      compare(findings, "application_sbom_version_mismatch", version, sbom_version(application_sbom))
      compare(findings, "container_sbom_version_mismatch", version, sbom_version(container_sbom))
      compare(findings, "packaging_manifest_version_mismatch", version, dig(packaging_manifest, "source", "version"))
      compare(findings, "oci_label_version_mismatch", version, oci_version)
      compare(findings, "provenance_version_mismatch", version, provenance_version)
      compare(
        findings,
        "compatibility_digest_mismatch",
        dig(release_metadata, "compatibility_digest"),
        Digest::SHA256.hexdigest(CanonicalJson.generate(compatibility))
      )
      Report.new(findings)
    end

    private

    attr_reader :version, :tag, :release_metadata, :release_notes, :compatibility,
      :application_sbom, :container_sbom, :packaging_manifest, :provenance

    def sbom_version(sbom)
      component_version = dig(sbom, "metadata", "component", "version")
      property_version = Array(dig(sbom, "metadata", "properties")).find do |property|
        property.is_a?(Hash) && property["name"] == "platform.version"
      end&.fetch("value", nil)
      component_version == property_version ? component_version : nil
    end

    def oci_version
      dig(packaging_manifest, "image", "labels", "org.opencontainers.image.version")
    end

    def provenance_version
      dig(provenance, "predicate", "buildDefinition", "externalParameters", "platform_version")
    end

    def dig(value, *keys)
      keys.reduce(value) do |current, key|
        break unless current.is_a?(Hash)

        current[key]
      end
    end

    def compare(findings, code, expected, actual)
      return if expected == actual

      findings << {
        code: code,
        message: "Release evidence does not match canonical version",
        details: { expected: expected, actual: actual }
      }
    end

    class Report
      attr_reader :findings

      def initialize(findings)
        @findings = findings.freeze
      end

      def ready? = findings.empty?

      def to_h
        {
          schema_version: 1,
          status: ready? ? "ready" : "blocked",
          ready: ready?,
          findings: findings
        }
      end
    end
  end
end
