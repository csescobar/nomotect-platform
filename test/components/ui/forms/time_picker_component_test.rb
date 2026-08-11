# frozen_string_literal: true

require "test_helper"

class Ui::Forms::TimePickerComponentTest < ViewComponent::TestCase
  test "renders time picker input and hidden field" do
    render_inline Ui::Forms::TimePickerComponent.new(name: "meeting_time", value: "14:30")

    assert_selector ".ui-time-picker[data-controller='time-picker']"
    assert_selector "input[type='hidden'][name='meeting_time'][value='14:30']", visible: false
    assert_selector "input[type='text'].ui-time-picker__input"
  end

  test "renders dropdown with time slots" do
    render_inline Ui::Forms::TimePickerComponent.new(name: "meeting_time", step: 30)

    assert_selector ".ui-time-picker__dropdown[role='listbox']"
    assert_selector "[role='option']", text: "09:00"
    assert_selector "[role='option']", text: "14:30"
  end

  test "supports 12-hour format display" do
    render_inline Ui::Forms::TimePickerComponent.new(name: "meeting_time", format_12h: true, value: "14:30")

    assert_selector "input[type='text'].ui-time-picker__input"
  end

  test "raises ArgumentError when name is blank" do
    assert_raises(ArgumentError) do
      Ui::Forms::TimePickerComponent.new(name: "")
    end
  end
end
