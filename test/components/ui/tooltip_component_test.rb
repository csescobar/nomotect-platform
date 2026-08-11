# frozen_string_literal: true

require "test_helper"

class Ui::TooltipComponentTest < ViewComponent::TestCase
  test "renders wrapper element with target content and tooltip bubble" do
    render_inline Ui::TooltipComponent.new(text: "Helpful hint") do
      "Hover me"
    end

    assert_selector ".tooltip-wrapper"
    assert_selector ".tooltip-bubble[role='tooltip']", text: "Helpful hint"
    assert_text "Hover me"
  end

  test "position defaults to top" do
    render_inline Ui::TooltipComponent.new(text: "Hint") do
      "Target"
    end

    assert_selector ".tooltip-bubble.tooltip-bubble--top"
  end

  test "supports positions top, bottom, left, right" do
    %i[top bottom left right].each do |pos|
      render_inline Ui::TooltipComponent.new(text: "Hint", position: pos) do
        "Target"
      end

      assert_selector ".tooltip-bubble.tooltip-bubble--#{pos}"
    end
  end

  test "links target element to tooltip bubble via aria-describedby" do
    render_inline Ui::TooltipComponent.new(text: "Explanation") do
      "Button"
    end

    assert_selector ".tooltip-wrapper[aria-describedby]"
    assert_selector ".tooltip-bubble[id]"
  end

  test "raises ArgumentError for invalid position" do
    assert_raises(ArgumentError) do
      Ui::TooltipComponent.new(text: "Hint", position: :diagonal) do
        "Target"
      end
    end
  end

  test "raises ArgumentError when text is blank" do
    assert_raises(ArgumentError) do
      Ui::TooltipComponent.new(text: "") do
        "Target"
      end
    end
  end
end
