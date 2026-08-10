# frozen_string_literal: true

require "test_helper"

class V1ReleaseCandidateTest < ActiveSupport::TestCase
  test "VERSION file specifies valid 1.0.0-rc.1 release candidate format" do
    version_path = Rails.root.join("VERSION")
    assert File.exist?(version_path), "VERSION file must exist"

    version = File.read(version_path).strip
    assert_equal "1.0.0-rc.1", version
  end

  test "release candidate roadmap is registered in docs/roadmap" do
    roadmap_path = Rails.root.join("docs/roadmap/v1-0-0-rc1-release-gate.md")
    assert File.exist?(roadmap_path), "v1-0-0-rc1-release-gate.md roadmap must exist"

    content = File.read(roadmap_path)
    assert_includes content, "Release Gate v1.0.0-rc.1"
    assert_includes content, "Phase 1"
    assert_includes content, "Phase 2"
    assert_includes content, "Phase 3"
    assert_includes content, "Phase 4"
  end

  test "application starter builder creates certified 1.0.0-rc.1 tar.gz and zip archives with SHA256SUMS" do
    commit = `git rev-parse HEAD`.strip
    Dir.mktmpdir("v1-rc1-bundle-test-") do |dir|
      result = ApplicationStarter::Builder.new(
        root: Rails.root,
        output: dir,
        version: "1.0.0-rc.1",
        source_commit: commit
      ).build!

      assert_equal "ready", result.fetch(:status)
      assert_equal "1.0.0-rc.1", result.fetch(:version)

      tar_path = Pathname.new(result.fetch(:tar))
      zip_path = Pathname.new(result.fetch(:zip))
      checksums_path = Pathname.new(dir).join("SHA256SUMS")

      assert File.exist?(tar_path)
      assert File.exist?(zip_path)
      assert File.exist?(checksums_path)

      checksums_content = File.read(checksums_path)
      tar_hash = Digest::SHA256.file(tar_path).hexdigest
      zip_hash = Digest::SHA256.file(zip_path).hexdigest

      assert_includes checksums_content, "#{tar_hash}  #{tar_path.basename}"
      assert_includes checksums_content, "#{zip_hash}  #{zip_path.basename}"
    end
  end
end
