# frozen_string_literal: true

require "test_helper"

class Ui::Forms::SliderComponentTest < ViewComponent::TestCase
  test "renders slider component with range input and value display" do
    render_inline Ui::Forms::SliderComponent.new(name: "volume", value: 75, min: 0, max: 100, step: 5, label: "Volume")

    assert_selector ".ui-slider[data-controller='slider']"
    assert_selector "input[type='range'][name='volume'][value='75'][min='0'][max='100'][step='5']"
    assert_selector ".ui-slider__value", text: "75"
    assert_selector ".ui-slider__label", text: "Volume"
  end

  test "raises ArgumentError when name is blank" do
    assert_raises(ArgumentError) do
      Ui::Forms::SliderComponent.new(name: "", value: 50)
    end
  end
end
