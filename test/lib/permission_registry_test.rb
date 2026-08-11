# frozen_string_literal: true

require "test_helper"
require "permission_registry"

class PermissionRegistryTest < ActiveSupport::TestCase
  test "all registered permissions have valid metadata schemas and classifications" do
    PermissionRegistry.entries.each do |entry|
      assert_match PermissionRegistry::KEY_FORMAT, entry.key
      assert_presence entry.name
      assert_presence entry.owning_capability
      assert_presence entry.description
      assert_includes PermissionRegistry::SECURITY_CLASSIFICATIONS, entry.security_classification
      assert_includes PermissionRegistry::DEFAULT_AVAILABILITIES, entry.default_availability
      assert_presence entry.version
    end
  end

  test "seed_database! creates and synchronizes database permission records with metadata" do
    PermissionRegistry.seed_database!

    permission = Permission.find_by!(key: "customers.read")
    assert_equal "customers", permission.owning_capability
    assert_equal "standard", permission.security_classification
    assert_equal "all", permission.default_availability
    assert_equal "1.0.0", permission.version

    critical_permission = Permission.find_by!(key: "members.manage_roles")
    assert_equal "members", critical_permission.owning_capability
    assert_equal "critical", critical_permission.security_classification
    assert_equal "admin_only", critical_permission.default_availability
  end

  test "unknown permissions fail closed" do
    assert_not PermissionRegistry.registered?("invalid.permission_key")
    assert_raise(ArgumentError) do
      PermissionRegistry.fetch("invalid.permission_key")
    end
  end

  private

  def assert_presence(value)
    assert value.present?, "Expected value to be present, got: #{value.inspect}"
  end
end
