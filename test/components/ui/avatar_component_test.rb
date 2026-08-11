# frozen_string_literal: true

require "test_helper"

class Ui::AvatarComponentTest < ViewComponent::TestCase
  test "renders image when src is provided" do
    render_inline Ui::AvatarComponent.new(src: "/photos/alice.jpg", alt: "Alice")

    assert_selector "img.avatar__image[src='/photos/alice.jpg'][alt='Alice']"
  end

  test "renders initials fallback when src is nil" do
    render_inline Ui::AvatarComponent.new(name: "Alice Ferreira")

    assert_selector ".avatar__initials", text: "AF"
    assert_no_selector "img"
  end

  test "renders single initial when only one name part given" do
    render_inline Ui::AvatarComponent.new(name: "Alice")

    assert_selector ".avatar__initials", text: "A"
  end

  test "default size is md" do
    render_inline Ui::AvatarComponent.new(name: "Alice")

    assert_selector ".avatar.avatar--md"
  end

  test "accepts all valid sizes" do
    %i[xs sm md lg xl].each do |size|
      render_inline Ui::AvatarComponent.new(name: "Alice", size: size)
      assert_selector ".avatar.avatar--#{size}"
    end
  end

  test "renders online status indicator" do
    render_inline Ui::AvatarComponent.new(name: "Alice", status: :online)

    assert_selector ".avatar__status.avatar__status--online"
    assert_selector "[aria-label='Online']"
  end

  test "renders away status indicator" do
    render_inline Ui::AvatarComponent.new(name: "Alice", status: :away)

    assert_selector ".avatar__status.avatar__status--away"
    assert_selector "[aria-label='Away']"
  end

  test "renders busy status indicator" do
    render_inline Ui::AvatarComponent.new(name: "Alice", status: :busy)

    assert_selector ".avatar__status.avatar__status--busy"
  end

  test "renders offline status indicator" do
    render_inline Ui::AvatarComponent.new(name: "Alice", status: :offline)

    assert_selector ".avatar__status.avatar__status--offline"
  end

  test "no status indicator when status is nil" do
    render_inline Ui::AvatarComponent.new(name: "Alice")

    assert_no_selector ".avatar__status"
  end

  test "raises ArgumentError for invalid size" do
    assert_raises(ArgumentError) do
      Ui::AvatarComponent.new(name: "Alice", size: :gigantic)
    end
  end

  test "raises ArgumentError for invalid status" do
    assert_raises(ArgumentError) do
      Ui::AvatarComponent.new(name: "Alice", status: :invisible)
    end
  end

  test "has role=img with aria-label when no src" do
    render_inline Ui::AvatarComponent.new(name: "Bob Smith")

    assert_selector ".avatar[role='img'][aria-label='Bob Smith']"
  end
end
