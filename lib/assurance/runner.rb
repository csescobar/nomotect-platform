# frozen_string_literal: true

require "yaml"
require_relative "freshness_checker"

module Assurance
  class Runner
    DEFAULT_DOMAINS = [
      "Authentication",
      "Authorization",
      "Tenant Isolation",
      "Audit Integrity",
      "Secure Configuration",
      "Secrets",
      "Supply Chain"
    ].freeze

    def initialize(controls_path: "docs/assurance/controls")
      @controls_path = Rails.root.join(controls_path)
    end

    def run
      controls.map do |control|
        verify_control(control)
      end
    end

    def domain_summary
      results = run
      summary = {}

      DEFAULT_DOMAINS.each do |domain|
        domain_results = results.select { |r| r[:domain] == domain }
        if domain_results.empty?
          summary[domain] = "PASS"
        else
          summary[domain] = domain_results.all? { |r| r[:status] == "PASS" } ? "PASS" : "FAIL"
        end
      end

      summary
    end

    def evidence_graph
      results = run
      results.map do |r|
        {
          id: r[:id],
          domain: r[:domain],
          status: r[:status],
          pipeline: [
            "Requirement (#{r[:id]})",
            "Objective (#{r[:objective]})",
            "Implementation (#{r[:implementation]&.join(', ')})",
            "Tests (#{r[:tests]&.join(', ')})",
            "Evidence (#{r[:evidence]&.join(', ')})",
            "Release (bin/release-contract-certify)"
          ]
        }
      end
    end

    private

    def controls
      Dir.glob(File.join(@controls_path, "*.yml")).map do |file|
        YAML.safe_load(File.read(file), symbolize_names: true)
      end
    end

    def verify_control(control)
      max_age = control.dig(:freshness_requirements, :max_age_days) || 30

      impl_exists = control[:implementation]&.all? { |path| File.exist?(Rails.root.join(path)) }
      test_exists = control[:tests]&.all? { |path| File.exist?(Rails.root.join(path)) }
      evidence_valid = control[:evidence]&.all? do |path|
        checker = FreshnessChecker.new(file_path: path, max_age_days: max_age)
        checker.fresh?
      end

      status = (impl_exists && test_exists && evidence_valid) ? "PASS" : "FAIL"

      {
        id: control[:id],
        domain: control[:domain],
        objective: control[:objective],
        implementation: control[:implementation],
        tests: control[:tests],
        evidence: control[:evidence],
        status: status,
        impl_valid: impl_exists,
        tests_valid: test_exists,
        evidence_valid: evidence_valid
      }
    end
  end
end
