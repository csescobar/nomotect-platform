# frozen_string_literal: true

require "test_helper"
require "tmpdir"
require "zip"
require_relative "../../lib/application_starter"

class ApplicationStarterTest < ActiveSupport::TestCase
  ROOT = Pathname(__dir__).join("../..").expand_path

  test "contract excludes institutional history and preserves adoption capabilities" do
    contract = YAML.safe_load(ROOT.join("config/distributions/application_starter.yml").read)
    serialized = contract.fetch("include").join("\n")

    assert_includes serialized, "bin/**"
    assert_includes serialized, ".agents/**"
    refute_includes serialized, "docs/roadmap/**"
    refute_includes serialized, "changes/**"
  end

  test "builder creates equivalent portable archives with provenance" do
    Dir.mktmpdir("nomotect-starter-test-") do |directory|
      result = ApplicationStarter::Builder.new(
        root: ROOT, output: directory, version: "0.9.0", source_commit: "a" * 40
      ).build!

      assert_equal "ready", result.fetch(:status)
      assert File.file?(result.fetch(:tar))
      assert File.file?(result.fetch(:zip))
      assert File.file?(File.join(directory, "SHA256SUMS"))

      entries = Zip::File.open(result.fetch(:zip), &:entries).map(&:name)
      assert entries.any? { |entry| entry.end_with?("/.mcp.json") }
      assert entries.any? { |entry| entry.end_with?("/bin/nomotect-init.ps1") }
      assert entries.any? { |entry| entry.end_with?("/application-starter-manifest.json") }
      refute entries.any? { |entry| entry.include?("docs/roadmap/") }
      refute entries.any? { |entry| entry.include?("changes/") }
      refute entries.any? { |entry| entry.include?("NomoTect_Social_Preview") }
    end
  end
end
