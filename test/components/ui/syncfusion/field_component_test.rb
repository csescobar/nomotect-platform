# frozen_string_literal: true

require "test_helper"

module Ui
  module Syncfusion
    class FieldComponentTest < ViewComponent::TestCase
      test "renders field wrapper with label, hint, and required indicator" do
        render_inline(FieldComponent.new(
          label: "Username",
          required: true,
          hint: "Must be at least 3 characters"
        )) { "<input type='text' />".html_safe }

        assert_selector ".ej2-field"
        assert_selector "label.ej2-field__label", text: "Username *"
        assert_selector ".ej2-field__hint", text: "Must be at least 3 characters"
        assert_selector "input"
      end

      test "renders error messages when errors are present" do
        render_inline(FieldComponent.new(
          label: "Email",
          errors: [ "can't be blank", "is invalid" ]
        )) { "<input type='text' />".html_safe }

        assert_selector ".ej2-field.ej2-field--invalid"
        assert_selector ".ej2-field__errors .ej2-field__error", text: "can't be blank"
        assert_selector ".ej2-field__errors .ej2-field__error", text: "is invalid"
      end
    end
  end
end
