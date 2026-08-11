# frozen_string_literal: true

require "test_helper"

class PermissionTest < ActiveSupport::TestCase
  test "validates required fields and key format" do
    permission = Permission.new(
      key: "custom_scope.custom_action",
      name: "Custom Action",
      category: "custom_scope",
      owning_capability: "custom_scope",
      security_classification: "standard",
      default_availability: "all",
      version: "1.0.0"
    )

    assert permission.valid?
    assert permission.save
  end

  test "prevents creation of duplicate permission keys" do
    first = Permission.find_or_create_by!(key: "members.read") do |p|
      p.name = "Read Members"
      p.category = "members"
      p.owning_capability = "members"
      p.security_classification = "standard"
      p.default_availability = "all"
      p.version = "1.0.0"
    end

    duplicate = Permission.new(
      key: first.key,
      name: "Read Members Copy",
      category: "members",
      owning_capability: "members",
      security_classification: "standard",
      default_availability: "all",
      version: "1.0.0"
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
