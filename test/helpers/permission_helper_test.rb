# frozen_string_literal: true

require "test_helper"

class PermissionHelperTest < ActionView::TestCase
  setup do
    @organization = Organization.create!(name: "Acme Corp", slug: "acme-#{SecureRandom.hex(4)}")
    @user = User.create!(email_address: "bob-#{SecureRandom.hex(4)}@example.com", password: "Password123!")
    @membership = Membership.create!(organization: @organization, user: @user, role: "member")
  end

  test "permitted_for_user? returns true when membership possesses permission" do
    role = Role.create!(organization: @organization, key: "exporter", name: "Exporter")
    role.permissions << Permission.find_or_create_by!(key: "reports.export") do |p|
      entry = PermissionRegistry.fetch("reports.export")
      p.name = entry.name
      p.category = entry.owning_capability
      p.owning_capability = entry.owning_capability
      p.description = entry.description
      p.security_classification = entry.security_classification
      p.default_availability = entry.default_availability
      p.version = entry.version
    end
    @membership.update!(role_record: role)

    assert permitted_for_user?("reports.export", user: @user, organization: @organization)
    assert_not permitted_for_user?("audit.export", user: @user, organization: @organization)
  end

  test "permitted_for_user? fails closed for unauthenticated users or unregistered permissions" do
    assert_not permitted_for_user?("reports.export", user: nil, organization: @organization)
    assert_not permitted_for_user?("unknown.permission", user: @user, organization: @organization)
  end
end
