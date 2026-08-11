# frozen_string_literal: true

require "test_helper"
require "assurance/freshness_checker"

class AssuranceFreshnessCheckerTest < ActiveSupport::TestCase
  test "validates existing file within freshness limit as fresh" do
    temp_file = Rails.root.join("tmp/test_freshness_fresh.json")
    File.write(temp_file, '{"status": "ok"}')

    checker = Assurance::FreshnessChecker.new(file_path: temp_file, max_age_days: 30)
    assert checker.fresh?
    assert_equal "FRESH", checker.status
  ensure
    File.delete(temp_file) if File.exist?(temp_file)
  end

  test "returns STALE for missing file" do
    checker = Assurance::FreshnessChecker.new(file_path: "tmp/non_existent_file.json", max_age_days: 30)
    assert_not checker.fresh?
    assert_equal "STALE", checker.status
  end

  test "computes SHA256 digest of file" do
    temp_file = Rails.root.join("tmp/test_freshness_hash.json")
    File.write(temp_file, '{"data": "test"}')

    checker = Assurance::FreshnessChecker.new(file_path: temp_file, max_age_days: 30)
    assert_not_nil checker.sha256_digest
    assert_equal 64, checker.sha256_digest.length
  ensure
    File.delete(temp_file) if File.exist?(temp_file)
  end
end
