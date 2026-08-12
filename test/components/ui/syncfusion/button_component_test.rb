# frozen_string_literal: true

require "test_helper"

module Ui
  module Syncfusion
    class ButtonComponentTest < ViewComponent::TestCase
      test "renders Syncfusion Button with ej2-button controller" do
        render_inline Ui::Syncfusion::ButtonComponent.new(
          text: "Submit Action",
          primary: true,
          type: "submit"
        )

        assert_selector "div[data-controller='ej2-button']"
        assert_selector "button[type='submit'].e-btn.e-primary", text: "Submit Action"
      end

      test "supports disabled state" do
        render_inline Ui::Syncfusion::ButtonComponent.new(
          text: "Disabled Action",
          disabled: true
        )

        assert_selector "button[disabled].e-btn"
      end
    end
  end
end
