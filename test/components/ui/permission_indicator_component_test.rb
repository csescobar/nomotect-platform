# frozen_string_literal: true

require "test_helper"

class Ui::PermissionIndicatorComponentTest < ViewComponent::TestCase
  test "renders lock icon element" do
    render_inline Ui::PermissionIndicatorComponent.new(
      permission: "customers.read",
      granted: false
    )

    assert_selector ".permission-indicator"
    assert_selector ".permission-indicator__icon"
  end

  test "renders granted state with green modifier class when granted" do
    render_inline Ui::PermissionIndicatorComponent.new(
      permission: "customers.read",
      granted: true
    )

    assert_selector ".permission-indicator.permission-indicator--granted"
    assert_no_selector ".permission-indicator.permission-indicator--denied"
  end

  test "renders denied state with gray modifier class when not granted" do
    render_inline Ui::PermissionIndicatorComponent.new(
      permission: "customers.read",
      granted: false
    )

    assert_selector ".permission-indicator.permission-indicator--denied"
    assert_no_selector ".permission-indicator.permission-indicator--granted"
  end

  test "includes tooltip data attribute with permission key" do
    render_inline Ui::PermissionIndicatorComponent.new(
      permission: "customers.edit",
      granted: false
    )

    assert_selector "[data-tooltip='customers.edit']"
  end

  test "has descriptive aria-label for screen readers when granted" do
    render_inline Ui::PermissionIndicatorComponent.new(
      permission: "members.invite",
      granted: true
    )

    assert_selector "[aria-label='Permission granted: members.invite']"
  end

  test "has descriptive aria-label for screen readers when denied" do
    render_inline Ui::PermissionIndicatorComponent.new(
      permission: "members.invite",
      granted: false
    )

    assert_selector "[aria-label='Permission required: members.invite']"
  end

  test "icon element is hidden from assistive technology" do
    render_inline Ui::PermissionIndicatorComponent.new(
      permission: "customers.read",
      granted: true
    )

    assert_selector ".permission-indicator__icon[aria-hidden='true']"
  end

  test "accepts custom label override for tooltip" do
    render_inline Ui::PermissionIndicatorComponent.new(
      permission: "customers.read",
      granted: false,
      label: "Read Customers"
    )

    assert_selector "[data-tooltip='Read Customers']"
  end
end
