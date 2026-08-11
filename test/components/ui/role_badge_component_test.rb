# frozen_string_literal: true

require "test_helper"

class Ui::RoleBadgeComponentTest < ViewComponent::TestCase
  test "renders owner role with teal variant" do
    render_inline Ui::RoleBadgeComponent.new(role: "owner")

    assert_selector ".role-badge.role-badge--owner", text: "Owner"
  end

  test "renders admin role with blue variant" do
    render_inline Ui::RoleBadgeComponent.new(role: "admin")

    assert_selector ".role-badge.role-badge--admin", text: "Admin"
  end

  test "renders member role with slate variant" do
    render_inline Ui::RoleBadgeComponent.new(role: "member")

    assert_selector ".role-badge.role-badge--member", text: "Member"
  end

  test "renders custom role with purple variant" do
    render_inline Ui::RoleBadgeComponent.new(role: "billing_admin", label: "Billing Admin")

    assert_selector ".role-badge.role-badge--custom", text: "Billing Admin"
  end

  test "uses role key as label when no label provided for custom roles" do
    render_inline Ui::RoleBadgeComponent.new(role: "billing_admin")

    assert_selector ".role-badge.role-badge--custom", text: "Billing Admin"
  end

  test "renders with correct aria-label for screen readers" do
    render_inline Ui::RoleBadgeComponent.new(role: "owner")

    assert_selector "[aria-label='Role: Owner']"
  end

  test "accepts a Role ActiveRecord object" do
    role = Role.new(key: "owner", name: "Owner")
    render_inline Ui::RoleBadgeComponent.new(role: role)

    assert_selector ".role-badge.role-badge--owner", text: "Owner"
  end

  test "accepts size small" do
    render_inline Ui::RoleBadgeComponent.new(role: "member", size: :small)

    assert_selector ".role-badge.role-badge--small"
  end
end
