# frozen_string_literal: true

require "test_helper"

module Ui
  module Syncfusion
    class InputGroupComponentTest < ViewComponent::TestCase
      test "renders Syncfusion InputGroup with prefix and suffix" do
        render_inline Ui::Syncfusion::InputGroupComponent.new(
          name: "price",
          value: "100",
          prefix: "R$",
          suffix: ",00",
          label: "Price Value"
        )

        assert_selector "div.ui-field[data-controller='ej2-input-group']"
        assert_selector "span.e-input-group-icon.e-input-group-prefix", text: "R$"
        assert_selector "input[name='price'][value='100']"
        assert_selector "span.e-input-group-icon.e-input-group-suffix", text: ",00"
      end
    end
  end
end
