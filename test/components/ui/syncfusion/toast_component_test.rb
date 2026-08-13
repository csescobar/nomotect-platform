# frozen_string_literal: true

require "test_helper"

module Ui
  module Syncfusion
    class ToastComponentTest < ViewComponent::TestCase
      test "renders toast component with title and type" do
        render_inline(ToastComponent.new(
          title: "Operation Successful",
          message: "The record has been updated.",
          type: :success,
          timeout: 4000
        ))

        assert_selector ".ui-field.ej2-toast-wrapper[data-controller='ej2-toast']"
        assert_selector "div[data-ej2-toast-title-value='Operation Successful']"
        assert_selector "div[data-ej2-toast-type-value='success']"
      end
    end
  end
end
