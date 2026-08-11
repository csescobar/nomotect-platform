# frozen_string_literal: true

require "test_helper"
require_relative "../../lib/evolution_discovery"

class EvolutionDiscoveryTest < ActiveSupport::TestCase
  setup do
    @discovery = EvolutionDiscovery.new(repository_path: Rails.root)
  end

  test "validates existence of discovery directory and required markdown artifacts" do
    findings = @discovery.validate_artifacts

    assert_empty findings, "Expected all post-1.0 discovery artifacts to exist and be valid, but found: #{findings.join(', ')}"
  end

  test "validates coverage of all 15 roadmap assessment areas across capability inventory and gap analysis" do
    findings = @discovery.validate_assessment_areas

    assert_empty findings, "Expected all 15 assessment areas to be documented, but found: #{findings.join(', ')}"
  end

  test "validates prioritization matrix dimensions and scoring structure" do
    findings = @discovery.validate_prioritization_matrix

    assert_empty findings, "Expected prioritization matrix to be structured with 1-5 scoring dimensions, but found: #{findings.join(', ')}"
  end

  test "validates that platform-evolution-roadmap.md links to discovery artifacts and marks status as completed" do
    findings = @discovery.validate_roadmap_integration

    assert_empty findings, "Expected roadmap integration to be valid, but found: #{findings.join(', ')}"
  end
end
