# frozen_string_literal: true

require "test_helper"

class PermissionTest < ActiveSupport::TestCase
  test "validates required fields and key format" do
    permission = Permission.new(
      key: "customers.read",
      name: "Read Customers",
      category: "customers"
    )

    assert permission.valid?
    assert permission.save
  end

  test "prevents creation of duplicate permission keys" do
    Permission.create!(
      key: "members.read",
      name: "Read Members",
      category: "members"
    )

    duplicate = Permission.new(
      key: "members.read",
      name: "Read Members Copy",
      category: "members"
    )

    assert_not duplicate.valid?
    assert_includes duplicate.errors[:key], "has already been taken"
  end

  test "verifies canonical permission registry synchronization and fail-closed validation" do
    registered_keys = PermissionRegistry.all_keys

    assert_includes registered_keys, "customers.read"
    assert_includes registered_keys, "members.manage_roles"

    assert PermissionRegistry.registered?("customers.read")
    assert_not PermissionRegistry.registered?("unknown.permission.fake")
  end
end
