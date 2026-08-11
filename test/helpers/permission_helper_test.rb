# frozen_string_literal: true

require "test_helper"

class PermissionHelperTest < ActionView::TestCase
  setup do
    PermissionRegistry.seed_database!
    @organization = Organization.create!(name: "Acme Corp", slug: "acme-#{SecureRandom.hex(4)}")
    @user = User.create!(email_address: "bob-#{SecureRandom.hex(4)}@example.com", password: "Password123!")
    @membership = Membership.create!(organization: @organization, user: @user, role: "member")
    @customer = Customer.create!(organization: @organization, name: "Confidential Co")
  end

  test "permitted_for_user? returns true when membership possesses permission" do
    role = Role.create!(organization: @organization, key: "exporter", name: "Exporter")
    role.permissions << Permission.find_by!(key: "reports.export")
    @membership.update!(role_record: role)

    assert permitted_for_user?("reports.export", user: @user, organization: @organization)
    assert_not permitted_for_user?("audit.export", user: @user, organization: @organization)
  end

  test "permitted_for_user? fails closed for unauthenticated users or unregistered permissions" do
    assert_not permitted_for_user?("reports.export", user: nil, organization: @organization)
    assert_not permitted_for_user?("unknown.permission", user: @user, organization: @organization)
  end

  test "contextually_permitted_for_user? evaluates contextual security constraints" do
    role = Role.create!(organization: @organization, key: "reader", name: "Reader")
    role.permissions << Permission.find_by!(key: "customers.read")
    @membership.update!(role_record: role)

    assert contextually_permitted_for_user?("customers.read", user: @user, organization: @organization, record: @customer)

    @customer.define_singleton_method(:data_classification) { "restricted" }
    assert_not contextually_permitted_for_user?("customers.read", user: @user, organization: @organization, record: @customer)
  end
end
