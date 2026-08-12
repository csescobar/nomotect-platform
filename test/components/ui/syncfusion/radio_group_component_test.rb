# frozen_string_literal: true

require "test_helper"

module Ui
  module Syncfusion
    class RadioGroupComponentTest < ViewComponent::TestCase
      test "renders Syncfusion RadioGroup fieldset with ej2-radio controller" do
        options = [
          { label: "Option A", value: "a", checked: true },
          { label: "Option B", value: "b" }
        ]

        render_inline Ui::Syncfusion::RadioGroupComponent.new(
          name: "choice",
          legend: "Select Option",
          options: options,
          input_id: "syncfusion_radio"
        )

        assert_selector "fieldset.ui-radio-group[data-controller='ej2-radio']"
        assert_selector "legend", text: "Select Option"
        assert_selector "input[type='radio'][name='choice'][value='a'][checked='checked']"
        assert_selector "input[type='radio'][name='choice'][value='b']"
        assert_selector "label.e-radio-wrapper", count: 2
      end
    end
  end
end
