# frozen_string_literal: true

require "test_helper"

class Ui::AvatarGroupComponentTest < ViewComponent::TestCase
  def avatars
    [
      { name: "Alice Ferreira" },
      { name: "Bob Santos" },
      { name: "Carla Lima" },
      { name: "David Souza" },
      { name: "Eva Costa" }
    ]
  end

  test "renders all avatars when count is within max_visible" do
    render_inline Ui::AvatarGroupComponent.new(avatars: avatars.first(3))

    assert_selector ".avatar", count: 3
    assert_no_selector ".avatar-group__overflow"
  end

  test "renders max_visible avatars plus overflow counter" do
    render_inline Ui::AvatarGroupComponent.new(avatars: avatars, max_visible: 3)

    assert_selector ".avatar", count: 3
    assert_selector ".avatar-group__overflow", text: "+2"
  end

  test "default max_visible is 4" do
    render_inline Ui::AvatarGroupComponent.new(avatars: avatars)

    assert_selector ".avatar", count: 4
    assert_selector ".avatar-group__overflow", text: "+1"
  end

  test "no overflow when exactly max_visible avatars" do
    render_inline Ui::AvatarGroupComponent.new(avatars: avatars.first(4), max_visible: 4)

    assert_selector ".avatar", count: 4
    assert_no_selector ".avatar-group__overflow"
  end

  test "renders group container with correct role" do
    render_inline Ui::AvatarGroupComponent.new(avatars: avatars.first(2))

    assert_selector ".avatar-group[role='group']"
  end

  test "overflow counter has aria-label describing hidden count" do
    render_inline Ui::AvatarGroupComponent.new(avatars: avatars, max_visible: 3)

    assert_selector "[aria-label='2 more members']"
  end

  test "renders with sm size by default" do
    render_inline Ui::AvatarGroupComponent.new(avatars: avatars.first(2))

    assert_selector ".avatar.avatar--sm", count: 2
  end

  test "raises ArgumentError when avatars are empty" do
    assert_raises(ArgumentError) do
      Ui::AvatarGroupComponent.new(avatars: [])
    end
  end
end
