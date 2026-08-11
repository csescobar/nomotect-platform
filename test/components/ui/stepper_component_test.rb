# frozen_string_literal: true

require "test_helper"

class Ui::StepperComponentTest < ViewComponent::TestCase
  def default_steps
    [
      { id: "account", label: "Account", description: "Set up your account" },
      { id: "organization", label: "Organization", description: "Configure your org" },
      { id: "invite", label: "Invite", description: "Invite your team" }
    ]
  end

  test "renders all steps" do
    render_inline Ui::StepperComponent.new(steps: default_steps, current_step: "organization")

    assert_selector ".stepper"
    assert_selector ".stepper__step", count: 3
  end

  test "completed steps have correct state class" do
    render_inline Ui::StepperComponent.new(steps: default_steps, current_step: "organization")

    assert_selector ".stepper__step--completed", count: 1
    assert_selector ".stepper__step--active", count: 1
    assert_selector ".stepper__step--pending", count: 1
  end

  test "renders step labels and descriptions" do
    render_inline Ui::StepperComponent.new(steps: default_steps, current_step: "account")

    assert_text "Account"
    assert_text "Set up your account"
  end

  test "current step has aria-current=step" do
    render_inline Ui::StepperComponent.new(steps: default_steps, current_step: "organization")

    assert_selector "[aria-current='step']", text: "Organization"
  end

  test "completed steps expose aria-label with completed state" do
    render_inline Ui::StepperComponent.new(steps: default_steps, current_step: "organization")

    assert_selector "[aria-label*='completed']"
  end

  test "step number shown for pending steps, checkmark for completed" do
    render_inline Ui::StepperComponent.new(steps: default_steps, current_step: "organization")

    assert_selector ".stepper__step-icon--completed"
    assert_selector ".stepper__step-number"
  end

  test "attaches Stimulus data-controller for optional JS interactivity" do
    render_inline Ui::StepperComponent.new(steps: default_steps, current_step: "account")

    assert_selector "[data-controller='stepper']"
  end

  test "raises ArgumentError for empty steps" do
    assert_raises(ArgumentError) do
      Ui::StepperComponent.new(steps: [], current_step: "none")
    end
  end

  test "raises ArgumentError when current_step does not match any step id" do
    assert_raises(ArgumentError) do
      Ui::StepperComponent.new(steps: default_steps, current_step: "nonexistent")
    end
  end
end
