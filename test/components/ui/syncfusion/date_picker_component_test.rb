# frozen_string_literal: true

require "test_helper"

module Ui
  module Syncfusion
    class DatePickerComponentTest < ViewComponent::TestCase
      test "renders Syncfusion DatePicker with ej2-datepicker controller" do
        render_inline Ui::Syncfusion::DatePickerComponent.new(
          name: "start_date",
          label: "Start Date",
          value: "2026-08-15",
          placeholder: "Select Date"
        )

        assert_selector "div.ui-field[data-controller='ej2-datepicker']"
        assert_selector "label", text: "Start Date"
        assert_selector "input[name='start_date']"
      end
    end
  end
end
