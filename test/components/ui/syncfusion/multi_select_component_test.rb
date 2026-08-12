# frozen_string_literal: true

require "test_helper"

module Ui
  module Syncfusion
    class MultiSelectComponentTest < ViewComponent::TestCase
      test "renders Syncfusion MultiSelect with ej2-multiselect controller" do
        options = [
          { text: "Critical", value: "critical" },
          { text: "High", value: "high" }
        ]

        render_inline Ui::Syncfusion::MultiSelectComponent.new(
          name: "severity",
          label: "Risk Levels",
          options: options
        )

        assert_selector "div.ui-field[data-controller='ej2-multiselect']"
        assert_selector "label", text: "Risk Levels"
        assert_selector "input"
      end
    end
  end
end
