# frozen_string_literal: true

require "test_helper"
require "assurance/runner"

class AssuranceRunnerTest < ActiveSupport::TestCase
  test "loads assurance control contracts and reports PASS status" do
    runner = Assurance::Runner.new(controls_path: "docs/assurance/controls")
    results = runner.run

    assert_not_empty results
    assert results.all? { |r| r[:status] == "PASS" }
  end

  test "returns required domains in assurance summary" do
    runner = Assurance::Runner.new(controls_path: "docs/assurance/controls")
    summary = runner.domain_summary

    required_domains = [
      "Authentication",
      "Authorization",
      "Tenant Isolation",
      "Audit Integrity",
      "Secure Configuration",
      "Secrets",
      "Supply Chain"
    ]

    required_domains.each do |domain|
      assert summary.key?(domain), "Expected domain summary to include #{domain}"
      assert_equal "PASS", summary[domain]
    end
  end
end
