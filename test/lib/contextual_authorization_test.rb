# frozen_string_literal: true

require "test_helper"
require "contextual_authorization"

class ContextualAuthorizationTest < ActiveSupport::TestCase
  setup do
    PermissionRegistry.seed_database!
    @organization = Organization.create!(name: "Acme Corp", slug: "acme-#{SecureRandom.hex(4)}")
    @owner = User.create!(email_address: "owner-#{SecureRandom.hex(4)}@example.com", password: "Password123!")
    @member_user = User.create!(email_address: "member-#{SecureRandom.hex(4)}@example.com", password: "Password123!")

    @owner_membership = Membership.create!(organization: @organization, user: @owner, role: "owner")
    @member_membership = Membership.create!(organization: @organization, user: @member_user, role: "member")

    @customer = Customer.create!(organization: @organization, name: "Sensitive Client")
  end

  test "evaluates true when user possesses RBAC permission and required security clearance" do
    result = ContextualAuthorization.evaluate(
      user: @owner,
      membership: @owner_membership,
      record: @customer,
      permission_key: "customers.read"
    )

    assert result.authorized?
  end

  test "evaluates false and records security event when user lacks security clearance for restricted data" do
    # Create custom role with only standard permission for customers.read
    role = Role.create!(organization: @organization, key: "basic_reader", name: "Basic Reader")
    role.permissions << Permission.find_by!(key: "customers.read")
    @member_membership.update!(role_record: role)

    # Classify customer as restricted data
    @customer.define_singleton_method(:data_classification) { "restricted" }

    assert_difference "DomainEvent.count", 1 do
      result = ContextualAuthorization.evaluate(
        user: @member_user,
        membership: @member_membership,
        record: @customer,
        permission_key: "customers.read"
      )

      assert_not result.authorized?
      assert_equal "security.contextual_denial", DomainEvent.last.event_type
    end
  end

  test "evaluates false when RBAC baseline fails" do
    role = Role.create!(organization: @organization, key: "empty_role", name: "Empty Role")
    @member_membership.update!(role_record: role)

    result = ContextualAuthorization.evaluate(
      user: @member_user,
      membership: @member_membership,
      record: @customer,
      permission_key: "customers.read"
    )

    assert_not result.authorized?
  end
end
