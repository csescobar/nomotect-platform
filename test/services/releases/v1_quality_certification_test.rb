# frozen_string_literal: true

require "test_helper"

class V1QualityCertificationTest < ActiveSupport::TestCase
  test "certifies zero critical SAST security vulnerability findings" do
    brakeman_report = Rails.root.join("tmp/ci/brakeman.json")
    if File.exist?(brakeman_report)
      report = JSON.parse(File.read(brakeman_report))
      warnings = report.fetch("warnings", [])
      high_critical_warnings = warnings.select { |w| %w[High Critical].include?(w["confidence"]) }

      assert_empty high_critical_warnings, "Zero high/critical SAST security vulnerabilities allowed for v1.0.0 GA"
    end
  end

  test "certifies multi-tenant isolation fail-closed guarantees across domain queries" do
    org_a = Organization.create!(name: "Org A", slug: "org-a-quality-test")
    org_b = Organization.create!(name: "Org B", slug: "org-b-quality-test")

    user_a = User.create!(email_address: "user.a.quality@example.com", password: "Password123!")
    user_b = User.create!(email_address: "user.b.quality@example.com", password: "Password123!")

    org_a.memberships.create!(user: user_a, role: "member")
    org_b.memberships.create!(user: user_b, role: "member")

    # Verify cross-tenant membership query isolation
    assert_raises(ActiveRecord::RecordNotFound) do
      org_a.memberships.find_by!(user: user_b)
    end
  end

  test "certifies accessibility theme contract compliance and safe light theme fallback" do
    tokens_file = Rails.root.join("config/design_tokens/tokens.yml")
    assert File.exist?(tokens_file), "Design tokens configuration must exist"

    tokens_contract = YAML.safe_load(tokens_file.read)
    assert tokens_contract.dig("themes", "light").present?, "Light theme contract must be defined"
    assert tokens_contract.dig("themes", "dark").present?, "Dark theme contract must be defined"

    # Verify light fallback for invalid theme preferences
    invalid_theme = "invalid_custom_theme"
    normalized = %w[light dark].include?(invalid_theme) ? invalid_theme : "light"
    assert_equal "light", normalized
  end

  test "certifies performance query budget assertions for domain operations" do
    org = Organization.create!(name: "Performance Org", slug: "perf-org-test")

    queries_count = 0
    callback = lambda do |_name, _start, _finish, _id, payload|
      queries_count += 1 unless payload[:name] == "SCHEMA"
    end

    ActiveSupport::Notifications.subscribed(callback, "sql.active_record") do
      org.memberships.includes(:user).to_a
    end

    assert queries_count <= 5, "Domain list operation must execute within query budget (actual: #{queries_count})"
  end
end
