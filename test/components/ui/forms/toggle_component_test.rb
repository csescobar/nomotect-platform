# frozen_string_literal: true

require "test_helper"

class Ui::Forms::ToggleComponentTest < ViewComponent::TestCase
  test "renders toggle component with role switch and accessible label" do
    render_inline Ui::Forms::ToggleComponent.new(name: "notifications", label: "Enable notifications", checked: true)

    assert_selector ".ui-toggle[data-controller='toggle']"
    assert_selector "button.ui-toggle__switch[role='switch'][aria-checked='true']"
    assert_selector "input[type='hidden'][name='notifications'][value='true']", visible: false
    assert_selector ".ui-toggle__label", text: "Enable notifications"
  end

  test "renders unchecked toggle component" do
    render_inline Ui::Forms::ToggleComponent.new(name: "dark_mode", label: "Dark mode", checked: false)

    assert_selector "button.ui-toggle__switch[aria-checked='false']"
    assert_selector "input[type='hidden'][name='dark_mode'][value='false']", visible: false
  end

  test "raises ArgumentError when name or label is blank" do
    assert_raises(ArgumentError) do
      Ui::Forms::ToggleComponent.new(name: "", label: "Test")
    end
    assert_raises(ArgumentError) do
      Ui::Forms::ToggleComponent.new(name: "test", label: "")
    end
  end
end
