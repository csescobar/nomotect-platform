# frozen_string_literal: true

require "test_helper"

module Ui
  module Syncfusion
    class CheckboxComponentTest < ViewComponent::TestCase
      test "renders Syncfusion Checkbox container with ej2-checkbox controller" do
        render_inline Ui::Syncfusion::CheckboxComponent.new(
          name: "terms",
          label: "Accept Terms",
          checked: true,
          input_id: "syncfusion_terms"
        )

        assert_selector "div.ui-field[data-controller='ej2-checkbox']"
        assert_selector "input[type='hidden'][name='terms'][value='true']", visible: false
        assert_selector "input[type='checkbox'].e-checkbox#syncfusion_terms[checked='checked']"
        assert_selector "label.e-checkbox-wrapper[for='syncfusion_terms']", text: "Accept Terms"
      end

      test "supports disabled state" do
        render_inline Ui::Syncfusion::CheckboxComponent.new(
          name: "terms",
          label: "Accept Terms",
          disabled: true
        )

        assert_selector "div.ui-field.ui-checkbox-field--disabled"
        assert_selector "input[type='checkbox'][disabled]"
      end
    end
  end
end
