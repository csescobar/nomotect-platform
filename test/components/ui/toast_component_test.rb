# frozen_string_literal: true

require "test_helper"

class Ui::ToastComponentTest < ViewComponent::TestCase
  test "renders toast with message and variant" do
    render_inline Ui::ToastComponent.new(message: "Operation completed successfully", type: :success)

    assert_selector ".toast.toast--success", text: "Operation completed successfully"
    assert_selector "[role='status']"
  end

  test "maps notice type to success variant" do
    render_inline Ui::ToastComponent.new(message: "Notice message", type: :notice)

    assert_selector ".toast.toast--success"
  end

  test "maps alert type to danger variant" do
    render_inline Ui::ToastComponent.new(message: "Alert message", type: :alert)

    assert_selector ".toast.toast--danger"
    assert_selector "[role='alert']"
  end

  test "accepts info and warning types" do
    render_inline Ui::ToastComponent.new(message: "Info message", type: :info)
    assert_selector ".toast.toast--info"

    render_inline Ui::ToastComponent.new(message: "Warning message", type: :warning)
    assert_selector ".toast.toast--warning"
  end

  test "attaches toast stimulus controller" do
    render_inline Ui::ToastComponent.new(message: "Auto dismiss test")

    assert_selector "[data-controller='toast']"
    assert_selector "[data-toast-duration-value='4000']"
  end

  test "allows custom duration" do
    render_inline Ui::ToastComponent.new(message: "Custom duration", duration: 2000)

    assert_selector "[data-toast-duration-value='2000']"
  end

  test "renders dismiss button" do
    render_inline Ui::ToastComponent.new(message: "Dismissable toast")

    assert_selector "button.toast__dismiss[aria-label='Dismiss notification']"
    assert_selector "button[data-action='click->toast#dismiss']"
  end

  test "raises ArgumentError for invalid toast type" do
    assert_raises(ArgumentError) do
      Ui::ToastComponent.new(message: "Invalid", type: :unknown_type)
    end
  end

  # ToastContainerComponent tests
  test "ToastContainerComponent renders toast region" do
    render_inline Ui::ToastContainerComponent.new

    assert_selector ".toast-region[role='region'][aria-label='Notifications']"
  end

  test "ToastContainerComponent renders flashes if provided" do
    flashes = { notice: "Saved successfully", alert: "Something failed" }
    render_inline Ui::ToastContainerComponent.new(flashes: flashes)

    assert_selector ".toast.toast--success", text: "Saved successfully"
    assert_selector ".toast.toast--danger", text: "Something failed"
  end
end
