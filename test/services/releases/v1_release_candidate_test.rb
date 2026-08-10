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
end
