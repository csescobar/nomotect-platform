# frozen_string_literal: true

require "test_helper"

class Ui::UserMenuComponentTest < ViewComponent::TestCase
  def links
    [
      { label: "Profile", href: "/profile" },
      { label: "Settings", href: "/settings" },
      { label: "Sign out", href: "/logout", method: :delete }
    ]
  end

  test "renders user menu trigger with avatar and name" do
    render_inline Ui::UserMenuComponent.new(name: "Alice Ferreira", role: "admin", links: links)

    assert_selector ".user-menu"
    assert_selector ".user-menu__trigger"
    assert_selector ".user-menu__trigger .avatar", text: "AF"
    assert_selector ".user-menu__name", text: "Alice Ferreira"
  end

  test "renders role badge inside user menu header" do
    render_inline Ui::UserMenuComponent.new(name: "Alice Ferreira", role: "admin", links: links)

    assert_selector ".user-menu .role-badge.role-badge--admin", text: "Admin"
  end

  test "renders dropdown links list" do
    render_inline Ui::UserMenuComponent.new(name: "Alice Ferreira", links: links)

    assert_selector ".user-menu__dropdown[role='menu']"
    assert_selector "a[role='menuitem'][href='/profile']", text: "Profile"
    assert_selector "a[role='menuitem'][href='/settings']", text: "Settings"
    assert_selector "a[role='menuitem'][href='/logout']", text: "Sign out"
  end

  test "attaches user menu stimulus controller" do
    render_inline Ui::UserMenuComponent.new(name: "Alice Ferreira", links: links)

    assert_selector "[data-controller='user-menu']"
  end

  test "raises ArgumentError when name is blank" do
    assert_raises(ArgumentError) do
      Ui::UserMenuComponent.new(name: "", links: links)
    end
  end
end
