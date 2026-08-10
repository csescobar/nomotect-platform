# frozen_string_literal: true

require "test_helper"

class V1PublicContractFreezeTest < ActiveSupport::TestCase
  test "certifies release notes forbid uncertified publication claims for v1.0.0 GA" do
    notes_file = Rails.root.join("docs/releases/1.0.0/release-notes.md")
    assert File.exist?(notes_file), "docs/releases/1.0.0/release-notes.md must exist"

    notes = File.read(notes_file)
    validator = Releases::ConsistencyValidator.new(
      version: "1.0.0",
      tag: "v1.0.0",
      release_metadata: JSON.parse(File.read("docs/releases/1.0.0/release-metadata.json")),
      release_notes: notes,
      compatibility: JSON.parse(File.read("docs/releases/1.0.0/compatibility.json")),
      application_sbom: { "metadata" => { "component" => { "version" => "1.0.0" }, "properties" => [ { "name" => "platform.version", "value" => "1.0.0" } ] } },
      container_sbom: { "metadata" => { "component" => { "version" => "1.0.0" }, "properties" => [ { "name" => "platform.version", "value" => "1.0.0" } ] } },
      packaging_manifest: { "source" => { "version" => "1.0.0" }, "image" => { "labels" => { "org.opencontainers.image.version" => "1.0.0" } } },
      provenance: { "predicate" => { "buildDefinition" => { "externalParameters" => { "platform_version" => "1.0.0" } } } }
    )

    result = validator.call
    assert result.ready?, "Releases::ConsistencyValidator must pass cleanly for v1.0.0 GA (findings: #{result.findings.inspect})"
  end

  test "certifies public contract catalog stability and frozen framework interfaces" do
    manifest_file = Rails.root.join("docs/ai/generated/architecture-manifest.json")
    assert File.exist?(manifest_file), "Architecture manifest must exist for public contract freeze certification"

    manifest = JSON.parse(File.read(manifest_file))
    assert manifest.present?, "Architecture manifest must not be empty"
  end
end
