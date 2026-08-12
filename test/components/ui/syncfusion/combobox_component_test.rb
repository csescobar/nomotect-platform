# frozen_string_literal: true

require "test_helper"

module Ui
  module Syncfusion
    class ComboboxComponentTest < ViewComponent::TestCase
      test "renders Syncfusion Combobox with ej2-dropdown controller" do
        options = [
          { text: "Active", value: "active" },
          { text: "Inactive", value: "inactive" }
        ]

        render_inline Ui::Syncfusion::ComboboxComponent.new(
          name: "status",
          label: "Account Status",
          options: options
        )

        assert_selector "div.ui-field[data-controller='ej2-dropdown']"
        assert_selector "label", text: "Account Status"
        assert_selector "input"
      end
    end
  end
end
