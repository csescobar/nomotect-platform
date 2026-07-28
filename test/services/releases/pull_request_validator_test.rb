# frozen_string_literal: true

require "test_helper"

module Releases
  class PullRequestValidatorTest < ActiveSupport::TestCase
    test "requires a matching fragment for release-relevant changes" do
      report = PullRequestValidator.new(
        changed_paths: [ "app/models/widget.rb" ],
        pull_request_number: 57
      ).call

      assert_not report.ready?
      assert_includes report.findings.pluck(:code), "change_fragment_missing"
      assert_includes report.findings.pluck(:code), "change_fragment_pr_mismatch"
    end

    test "allows documentation and test-only changes without a fragment" do
      report = PullRequestValidator.new(
        changed_paths: [ "docs/example.md", "test/models/example_test.rb" ],
        pull_request_number: 57
      ).call

      assert report.ready?
    end

    test "accepts a valid fragment matching the pull request" do
      report = PullRequestValidator.new(
        changed_paths: [
          "app/services/releases/pull_request_validator.rb",
          "changes/57-release-fragment-ci.yml"
        ],
        pull_request_number: 57
      ).call

      assert report.ready?, report.findings.inspect
    end

    test "requires explicit migration impact" do
      report = PullRequestValidator.new(
        changed_paths: [
          "db/migrate/20260728000000_change_widgets.rb",
          "changes/57-release-fragment-ci.yml"
        ],
        pull_request_number: 57
      ).call

      assert_includes report.findings.pluck(:code), "migration_impact_missing"
    end
  end
end
