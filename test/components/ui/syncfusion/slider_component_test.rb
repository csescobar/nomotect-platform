# frozen_string_literal: true

require "test_helper"

module Ui
  module Syncfusion
    class SliderComponentTest < ViewComponent::TestCase
      test "renders Syncfusion Slider container with ej2-slider controller" do
        render_inline Ui::Syncfusion::SliderComponent.new(
          name: "volume",
          label: "Volume Control",
          value: 75,
          min: 0,
          max: 100,
          step: 5,
          input_id: "syncfusion_volume"
        )

        assert_selector "div.ui-field[data-controller='ej2-slider']"
        assert_selector "label.ej2-slider__label", text: "Volume Control"
        assert_selector "span.ej2-slider__value", text: "75"
        assert_selector "input[type='range'][name='volume'][value='75'][data-ej2-slider-target='slider']"
      end
    end
  end
end
