# frozen_string_literal: true

require "test_helper"

module Ui
  module Syncfusion
    class StepperComponentTest < ViewComponent::TestCase
      test "renders Syncfusion Stepper with ej2-stepper controller" do
        steps = [
          { label: "Step 1", icon: "e-icons e-user" },
          { label: "Step 2", icon: "e-icons e-settings" }
        ]

        render_inline Ui::Syncfusion::StepperComponent.new(
          steps: steps,
          active_step: 0
        )

        assert_selector "nav.ui-stepper[data-controller='ej2-stepper']"
        assert_selector "ol.e-stepper"
      end
    end
  end
end
