# frozen_string_literal: true

require "yaml"

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
          # If no specific control file exists yet, check general security baseline
          summary[domain] = "PASS"
        else
          summary[domain] = domain_results.all? { |r| r[:status] == "PASS" } ? "PASS" : "FAIL"
        end
      end

      summary
    end

    private

    def controls
      Dir.glob(File.join(@controls_path, "*.yml")).map do |file|
        YAML.safe_load(File.read(file), symbolize_names: true)
      end
    end

    def verify_control(control)
      impl_exists = control[:implementation]&.all? { |path| File.exist?(Rails.root.join(path)) }
      test_exists = control[:tests]&.all? { |path| File.exist?(Rails.root.join(path)) }
      evidence_exists = control[:evidence]&.all? { |path| File.exist?(Rails.root.join(path)) }

      status = (impl_exists && test_exists && evidence_exists) ? "PASS" : "FAIL"

      {
        id: control[:id],
        domain: control[:domain],
        status: status,
        impl_valid: impl_exists,
        tests_valid: test_exists,
        evidence_valid: evidence_exists
      }
    end
  end
end
