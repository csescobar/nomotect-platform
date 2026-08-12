# frozen_string_literal: true

require "test_helper"

class Ui::SkeletonComponentTest < ViewComponent::TestCase
  test "renders text skeleton variant by default" do
    render_inline Ui::SkeletonComponent.new

    assert_selector ".skeleton.skeleton--text"
    assert_selector "[aria-hidden='true']"
  end

  test "renders avatar skeleton variant" do
    render_inline Ui::SkeletonComponent.new(variant: :avatar)

    assert_selector ".skeleton.skeleton--avatar"
  end

  test "renders rect skeleton variant with custom height and width" do
    render_inline Ui::SkeletonComponent.new(variant: :rect, width: "100px", height: "200px")

    assert_selector ".skeleton.skeleton--rect[data-skeleton-width-value='100px'][data-skeleton-height-value='200px']"
  end

  test "renders multi-line text skeleton when lines parameter is passed" do
    render_inline Ui::SkeletonComponent.new(variant: :text, lines: 3)

    assert_selector ".skeleton-group"
    assert_selector ".skeleton.skeleton--text", count: 3
  end

  test "renders card skeleton preset" do
    render_inline Ui::SkeletonComponent.new(variant: :card)

    assert_selector ".skeleton-card"
    assert_selector ".skeleton--avatar"
    assert_selector ".skeleton--text"
  end

  test "raises ArgumentError for unsupported variant" do
    assert_raises(ArgumentError) do
      Ui::SkeletonComponent.new(variant: :invalid_variant)
    end
  end
end
