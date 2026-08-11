# frozen_string_literal: true

require "test_helper"

class Ui::Forms::DatePickerComponentTest < ViewComponent::TestCase
  test "renders date picker input and hidden field" do
    render_inline Ui::Forms::DatePickerComponent.new(name: "birth_date", value: "2026-08-15")

    assert_selector ".ui-date-picker[data-controller='date-picker']"
    assert_selector "input[type='hidden'][name='birth_date'][value='2026-08-15']", visible: false
    assert_selector "input[type='text'].ui-date-picker__input"
  end

  test "accepts placeholder and min/max constraints" do
    render_inline Ui::Forms::DatePickerComponent.new(
      name: "event_date",
      placeholder: "Select date",
      min: "2026-01-01",
      max: "2026-12-31"
    )

    assert_selector "input[placeholder='Select date']"
    assert_selector "[data-date-picker-min-value='2026-01-01']"
    assert_selector "[data-date-picker-max-value='2026-12-31']"
  end

  test "renders calendar popover container" do
    render_inline Ui::Forms::DatePickerComponent.new(name: "start_date")

    assert_selector ".ui-date-picker__calendar[role='dialog']"
  end

  test "raises ArgumentError when name is blank" do
    assert_raises(ArgumentError) do
      Ui::Forms::DatePickerComponent.new(name: "")
    end
  end
end
