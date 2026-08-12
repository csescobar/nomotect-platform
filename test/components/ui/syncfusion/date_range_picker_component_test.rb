# frozen_string_literal: true

require "test_helper"

module Ui
  module Syncfusion
    class DateRangePickerComponentTest < ViewComponent::TestCase
      test "renders Syncfusion DateRangePicker with ej2-daterangepicker controller" do
        render_inline Ui::Syncfusion::DateRangePickerComponent.new(
          start_name: "range_start",
          end_name: "range_end",
          label: "Audit Period"
        )

        assert_selector "div.ui-field[data-controller='ej2-daterangepicker']"
        assert_selector "label", text: "Audit Period"
        assert_selector "input[type='hidden'][name='range_start']", visible: false
        assert_selector "input[type='hidden'][name='range_end']", visible: false
      end
    end
  end
end
