# frozen_string_literal: true

require "pathname"

class EvolutionDiscovery
  REQUIRED_ARTIFACTS = %w[
    capability-inventory.md
    gap-analysis.md
    prioritization-matrix.md
    post-1-0-discovery-report.md
  ].freeze

  ASSESSMENT_AREAS = [
    "Identity and authorization",
    "Role and permission management",
    "Design system coverage",
    "Security assurance",
    "Common Criteria alignment",
    "Audit and evidence integrity",
    "Enterprise governance",
    "AI assistant capabilities",
    "Observability",
    "Developer experience",
    "Workflow and approvals",
    "Performance and scalability",
    "Extension ecosystem",
    "Federated identity",
    "API and integration boundaries"
  ].freeze

  SCORING_DIMENSIONS = [
    "Strategic value",
    "Security impact",
    "Enterprise value",
    "Developer value",
    "Product differentiation",
    "Implementation cost",
    "Architectural risk",
    "Compatibility impact"
  ].freeze

  attr_reader :repository_path

  def initialize(repository_path: Rails.root)
    @repository_path = Pathname.new(repository_path)
  end

  def discovery_directory
    repository_path.join("docs/roadmap/discovery")
  end

  def roadmap_path
    repository_path.join("docs/roadmap/platform-evolution-roadmap.md")
  end

  def validate_artifacts
    findings = []
    unless discovery_directory.directory?
      return [ "Discovery directory missing at docs/roadmap/discovery" ]
    end

    REQUIRED_ARTIFACTS.each do |filename|
      path = discovery_directory.join(filename)
      unless path.file?
        findings << "Missing required discovery artifact: docs/roadmap/discovery/#{filename}"
      end
    end
    findings
  end

  def validate_assessment_areas
    findings = validate_artifacts
    return findings unless findings.empty?

    inventory_text = discovery_directory.join("capability-inventory.md").read
    gap_text = discovery_directory.join("gap-analysis.md").read

    ASSESSMENT_AREAS.each do |area|
      unless inventory_text.downcase.include?(area.downcase)
        findings << "Capability inventory missing assessment area: #{area}"
      end
      unless gap_text.downcase.include?(area.downcase)
        findings << "Gap analysis missing assessment area: #{area}"
      end
    end
    findings
  end

  def validate_prioritization_matrix
    findings = validate_artifacts
    return findings unless findings.empty?

    matrix_text = discovery_directory.join("prioritization-matrix.md").read

    SCORING_DIMENSIONS.each do |dimension|
      unless matrix_text.downcase.include?(dimension.downcase)
        findings << "Prioritization matrix missing scoring dimension: #{dimension}"
      end
    end

    unless matrix_text.include?("Explicit Deferrals")
      findings << "Prioritization matrix missing section: Explicit Deferrals"
    end

    unless matrix_text.include?("Implementation Candidates")
      findings << "Prioritization matrix missing section: Implementation Candidates"
    end

    findings
  end

  def validate_roadmap_integration
    findings = []
    unless roadmap_path.file?
      return [ "Roadmap missing at docs/roadmap/platform-evolution-roadmap.md" ]
    end

    roadmap_text = roadmap_path.read

    unless roadmap_text.include?("Status:** ✅ Completed") || roadmap_text.include?("Status:** Completed")
      findings << "platform-evolution-roadmap.md does not mark Evolution Discovery as Completed"
    end

    REQUIRED_ARTIFACTS.each do |filename|
      unless roadmap_text.include?("discovery/#{filename}")
        findings << "platform-evolution-roadmap.md does not link to discovery/#{filename}"
      end
    end

    findings
  end
end
