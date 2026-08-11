# frozen_string_literal: true

require "test_helper"

class RoleTest < ActiveSupport::TestCase
  setup do
    @organization = Organization.create!(name: "Test Org", slug: "test-org-#{SecureRandom.hex(4)}")
  end

  test "creates valid custom role scoped to organization" do
    role = Role.new(
      organization: @organization,
      key: "support_agent",
      name: "Support Agent",
      description: "Handles customer tickets and read-only support",
      protected: false
    )

    assert role.valid?
    assert role.save
    assert_equal @organization, role.organization
    assert_equal false, role.protected?
  end

  test "prevents creation of custom role with duplicate key within same organization" do
    Role.create!(
      organization: @organization,
      key: "analyst",
      name: "Data Analyst",
      protected: false
    )

    duplicate = Role.new(
      organization: @organization,
      key: "analyst",
      name: "Another Analyst",
      protected: false
    )

    assert_not duplicate.valid?
    assert_includes duplicate.errors[:key], "has already been taken"
  end

  test "prevents destruction of protected system role" do
    system_role = Role.create!(
      organization: nil,
      key: "system_admin",
      name: "System Administrator",
      protected: true
    )

    assert system_role.protected?
    assert_no_difference "Role.count" do
      assert_raise(ActiveRecord::RecordNotDestroyed) do
        system_role.destroy!
      end
    end
  end

  test "manages permissions through role_permissions" do
    role = Role.create!(
      organization: @organization,
      key: "reporter",
      name: "Reporter"
    )
    permission = Permission.find_or_create_by!(key: "reports.read") do |p|
      p.name = "Read Reports"
      p.category = "reports"
      p.owning_capability = "reports"
      p.security_classification = "standard"
      p.default_availability = "all"
      p.version = "1.0.0"
    end

    role.permissions << permission

    assert_includes role.permissions, permission
    assert role.permitted?("reports.read")
    assert_not role.permitted?("reports.export")
  end
end
