# frozen_string_literal: true

require "test_helper"

class CustomerPolicyTest < ActiveSupport::TestCase
  setup do
    @organization = Organization.create!(name: "Acme Corp", slug: "acme-#{SecureRandom.hex(4)}")
    @user = User.create!(email_address: "alice-#{SecureRandom.hex(4)}@example.com", password: "Password123!")
    @membership = Membership.create!(organization: @organization, user: @user, role: "member")
    @customer = Customer.create!(organization: @organization, name: "Big Corp")
  end

  test "permits show when membership has customers.read permission" do
    role = Role.create!(organization: @organization, key: "reader", name: "Reader")
    role.permissions << Permission.find_or_create_by!(key: "customers.read") do |p|
      entry = PermissionRegistry.fetch("customers.read")
      p.name = entry.name
      p.category = entry.owning_capability
      p.owning_capability = entry.owning_capability
      p.description = entry.description
      p.security_classification = entry.security_classification
      p.default_availability = entry.default_availability
      p.version = entry.version
    end
    @membership.update!(role_record: role)

    policy = CustomerPolicy.new(@user, @customer)

    assert policy.show?
    assert_not policy.create?
    assert_not policy.update?
    assert_not policy.destroy?
  end

  test "denies all actions when membership lacks customer permissions" do
    role = Role.create!(organization: @organization, key: "empty", name: "Empty Role")
    @membership.update!(role_record: role)

    policy = CustomerPolicy.new(@user, @customer)

    assert_not policy.show?
    assert_not policy.create?
    assert_not policy.update?
    assert_not policy.destroy?
  end

  test "permits write operations when membership has specific write permissions" do
    role = Role.create!(organization: @organization, key: "creator", name: "Creator")
    role.permissions << Permission.find_or_create_by!(key: "customers.create") do |p|
      entry = PermissionRegistry.fetch("customers.create")
      p.name = entry.name
      p.category = entry.owning_capability
      p.owning_capability = entry.owning_capability
      p.description = entry.description
      p.security_classification = entry.security_classification
      p.default_availability = entry.default_availability
      p.version = entry.version
    end
    @membership.update!(role_record: role)

    policy = CustomerPolicy.new(@user, @customer)

    assert policy.create?
    assert_not policy.show?
    assert_not policy.update?
    assert_not policy.destroy?
  end
end
