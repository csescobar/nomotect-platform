# frozen_string_literal: true

require "test_helper"

class MembershipTest < ActiveSupport::TestCase
  setup do
    PermissionRegistry.seed_database!
    @organization = Organization.create!(name: "Acme Corp", slug: "acme-#{SecureRandom.hex(4)}")
    @user = User.create!(email_address: "alice-#{SecureRandom.hex(4)}@example.com", password: "Password123!")
    @membership = Membership.create!(organization: @organization, user: @user, role: "owner")
  end

  test "automatically links protected system role on creation" do
    assert_not_nil @membership.role_record
    assert_equal "owner", @membership.role_record.key
    assert @membership.role_record.protected?
    assert @membership.permitted?("customers.read")
    assert @membership.permitted?("members.manage_roles")
  end

  test "permitted? returns false when role_record is nil" do
    @membership.update_column(:role_id, nil)
    @membership.reload

    assert_nil @membership.role_record
    assert_not @membership.permitted?("customers.read")
    assert_not @membership.permitted?("members.manage_roles")
  end

  test "permitted? delegates strictly to role_record when custom role_record is assigned" do
    role = Role.create!(organization: @organization, key: "custom_reader", name: "Custom Reader")
    role.permissions << Permission.find_by!(key: "customers.read")
    @membership.update!(role_record: role)

    assert @membership.permitted?("customers.read")
    assert_not @membership.permitted?("customers.create")
    assert_not @membership.permitted?("members.manage_roles")
  end
end
