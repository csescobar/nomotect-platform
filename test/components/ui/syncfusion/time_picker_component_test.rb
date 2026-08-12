# frozen_string_literal: true

require "test_helper"

module Ui
  module Syncfusion
    class TimePickerComponentTest < ViewComponent::TestCase
      test "renders Syncfusion TimePicker with ej2-timepicker controller" do
        render_inline Ui::Syncfusion::TimePickerComponent.new(
          name: "meeting_time",
          label: "Meeting Time",
          value: "09:00"
        )

        assert_selector "div.ui-field[data-controller='ej2-timepicker']"
        assert_selector "label", text: "Meeting Time"
        assert_selector "input[name='meeting_time']"
      end
    end
  end
end
