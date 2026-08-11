# frozen_string_literal: true

require "test_helper"

class RolesOperationsTest < ActiveSupport::TestCase
  setup do
    @organization = Organization.create!(name: "Test Org", slug: "test-org-#{SecureRandom.hex(4)}")
    @user = User.create!(email_address: "user-#{SecureRandom.hex(4)}@example.com", password: "Password123!")
    @membership = Membership.create!(organization: @organization, user: @user, role: "member")
  end

  test "Roles::Create operation creates a new role with assigned permissions" do
    result = Roles::Create.new(
      organization: @organization,
      actor: @user,
      params: {
        key: "billing_admin",
        name: "Billing Admin",
        description: "Manages billing and invoices",
        permission_keys: [ "reports.read", "reports.export" ]
      }
    ).call

    assert result.success?
    role = result.role
    assert_equal "billing_admin", role.key
    assert_equal @organization, role.organization
    assert_equal 2, role.permissions.count
    assert role.permitted?("reports.read")
    assert role.permitted?("reports.export")
  end

  test "Roles::Create fails closed if unknown permissions are passed" do
    result = Roles::Create.new(
      organization: @organization,
      actor: @user,
      params: {
        key: "invalid_role",
        name: "Invalid Role",
        permission_keys: [ "fake.unknown_permission" ]
      }
    ).call

    assert_not result.success?
    assert_includes result.errors, "Unknown permission: fake.unknown_permission"
  end

  test "Roles::Assign operation assigns persistent role to membership" do
    role = Role.create!(
      organization: @organization,
      key: "auditor",
      name: "Auditor"
    )
    permission = Permission.create!(
      key: "audit.read",
      name: "Read Audit Logs",
      category: "audit"
    )
    role.permissions << permission

    result = Roles::Assign.new(
      organization: @organization,
      actor: @user,
      membership: @membership,
      role: role
    ).call

    assert result.success?
    assert_equal role, @membership.reload.role_record
    assert @membership.permitted?("audit.read")
  end
end
