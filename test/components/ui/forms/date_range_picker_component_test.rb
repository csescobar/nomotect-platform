# frozen_string_literal: true

require "test_helper"

class Ui::Forms::DateRangePickerComponentTest < ViewComponent::TestCase
  test "renders date range picker with start and end hidden fields" do
    render_inline Ui::Forms::DateRangePickerComponent.new(
      start_name: "start_date",
      end_name: "end_date",
      start_value: "2026-08-01",
      end_value: "2026-08-15"
    )

    assert_selector ".ui-date-range-picker[data-controller='date-range-picker']"
    assert_selector "input[type='hidden'][name='start_date'][value='2026-08-01']", visible: false
    assert_selector "input[type='hidden'][name='end_date'][value='2026-08-15']", visible: false
  end

  test "renders range display input" do
    render_inline Ui::Forms::DateRangePickerComponent.new(
      start_name: "start_date",
      end_name: "end_date",
      placeholder: "Select date range"
    )

    assert_selector "input.ui-date-range-picker__input[placeholder='Select date range']"
  end

  test "renders preset buttons when presets are enabled" do
    render_inline Ui::Forms::DateRangePickerComponent.new(
      start_name: "start_date",
      end_name: "end_date",
      presets: true
    )

    assert_selector ".ui-date-range-picker__presets"
    assert_selector "button", text: "Last 7 days"
    assert_selector "button", text: "This month"
  end

  test "raises ArgumentError when start_name or end_name is blank" do
    assert_raises(ArgumentError) do
      Ui::Forms::DateRangePickerComponent.new(start_name: "", end_name: "end_date")
    end
  end
end
