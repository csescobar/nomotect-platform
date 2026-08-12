# frozen_string_literal: true

require "test_helper"
require "governance/policy_registry"

class GovernancePolicyRegistryTest < ActiveSupport::TestCase
  test "registers and retrieves default policies across 10 domains" do
    registry = Governance::PolicyRegistry.instance

    domains = %w[
      organization_settings
      security_policies
      session_policies
      authentication_policies
      data_retention_policies
      audit_retention_policies
      export_policies
      file_policies
      integration_policies
      ai_policies
    ]

    domains.each do |domain|
      policy = registry.fetch(domain)
      assert_not_nil policy, "Expected policy for domain #{domain}"
      assert policy.key?(:enabled), "Expected policy to specify :enabled flag"
    end
  end

  test "prevents registration of unapproved policy domains" do
    registry = Governance::PolicyRegistry.instance

    assert_raises(ArgumentError) do
      registry.register("invalid_domain", { enabled: true })
    end
  end
end
