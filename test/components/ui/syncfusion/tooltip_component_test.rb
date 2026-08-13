# frozen_string_literal: true

require "test_helper"

module Ui
  module Syncfusion
    class TooltipComponentTest < ViewComponent::TestCase
      test "renders tooltip wrapper with target content and message" do
        render_inline(TooltipComponent.new(
          message: "Click to refresh data",
          position: "TopCenter"
        )) { "<button type='button'>Refresh</button>".html_safe }

        assert_selector ".ej2-tooltip-wrapper[data-controller='ej2-tooltip']"
        assert_selector "[data-ej2-tooltip-content-value='Click to refresh data']"
        assert_selector "button", text: "Refresh"
      end
    end
  end
end
