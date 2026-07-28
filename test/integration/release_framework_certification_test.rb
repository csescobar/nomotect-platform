# frozen_string_literal: true

require "test_helper"

class ReleaseFrameworkCertificationTest < ActiveSupport::TestCase
  test "prepares and certifies a production-like release evidence set" do
    Dir.mktmpdir do |directory|
      copy_release_inputs(directory)
      Releases::Preparation.new(target_version: "0.9.0", root: directory).apply!
      release_root = Pathname(directory).join("docs/releases/0.9.0")
      compatibility = JSON.parse(release_root.join("compatibility.json").read)

      report = Releases::ConsistencyValidator.new(
        version: File.read(File.join(directory, "VERSION")).strip,
        tag: "v0.9.0",
        release_metadata: JSON.parse(release_root.join("release-metadata.json").read),
        release_notes: release_root.join("release-notes.md").read,
        compatibility:,
        application_sbom: sbom("application"),
        container_sbom: sbom("container"),
        packaging_manifest: packaging_manifest,
        provenance:
      ).call

      assert report.ready?, report.findings.inspect
      assert_raises(Releases::Preparation::InvalidPreparation) do
        Releases::Preparation.new(target_version: "0.9.0", root: directory).apply!
      end
    end
  end

  private

  def copy_release_inputs(directory)
    FileUtils.mkdir_p(File.join(directory, "changes"))
    FileUtils.cp(Rails.root.join("VERSION"), File.join(directory, "VERSION"))
    Rails.root.glob("changes/*.yml").each do |fragment|
      FileUtils.cp(fragment, File.join(directory, "changes", fragment.basename))
    end
  end

  def sbom(type)
    {
      "metadata" => {
        "component" => { "type" => type, "version" => "0.9.0" },
        "properties" => [ { "name" => "platform.version", "value" => "0.9.0" } ]
      }
    }
  end

  def packaging_manifest
    {
      "source" => { "version" => "0.9.0" },
      "image" => {
        "labels" => { "org.opencontainers.image.version" => "0.9.0" }
      }
    }
  end

  def provenance
    {
      "predicate" => {
        "buildDefinition" => {
          "externalParameters" => { "platform_version" => "0.9.0" }
        }
      }
    }
  end
end
