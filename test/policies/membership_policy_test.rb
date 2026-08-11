# frozen_string_literal: true

require "test_helper"

class MembershipPolicyTest < ActiveSupport::TestCase
  setup do
    @organization = Organization.create!(name: "Acme Corp", slug: "acme-#{SecureRandom.hex(4)}")
    @user = User.create!(email_address: "carol-#{SecureRandom.hex(4)}@example.com", password: "Password123!")
    @target_user = User.create!(email_address: "target-#{SecureRandom.hex(4)}@example.com", password: "Password123!")
    @membership = Membership.create!(organization: @organization, user: @user, role: "member")
    @target_membership = Membership.create!(organization: @organization, user: @target_user, role: "member")
  end

  test "permits managing roles when user possesses members.manage_roles permission" do
    role = Role.create!(organization: @organization, key: "manager", name: "Manager")
    role.permissions << Permission.find_or_create_by!(key: "members.manage_roles") do |p|
      entry = PermissionRegistry.fetch("members.manage_roles")
      p.name = entry.name
      p.category = entry.owning_capability
      p.owning_capability = entry.owning_capability
      p.description = entry.description
      p.security_classification = entry.security_classification
      p.default_availability = entry.default_availability
      p.version = entry.version
    end
    @membership.update!(role_record: role)

    policy = MembershipPolicy.new(@user, @target_membership)

    assert policy.show?
    assert policy.create?
    assert policy.update?
    assert policy.destroy?
  end

  test "denies managing roles when user lacks members.manage_roles permission" do
    role = Role.create!(organization: @organization, key: "guest", name: "Guest")
    @membership.update!(role_record: role)

    policy = MembershipPolicy.new(@user, @target_membership)

    assert_not policy.show?
    assert_not policy.create?
    assert_not policy.update?
    assert_not policy.destroy?
  end
end
