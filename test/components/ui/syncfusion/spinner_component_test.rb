# frozen_string_literal: true

require "test_helper"

module Ui
  module Syncfusion
    class SpinnerComponentTest < ViewComponent::TestCase
      test "renders spinner container with label and size" do
        render_inline(SpinnerComponent.new(
          label: "Loading records...",
          size: "medium"
        ))

        assert_selector ".ej2-spinner-wrapper[data-controller='ej2-spinner']"
        assert_selector "[data-ej2-spinner-label-value='Loading records...']"
      end
    end
  end
end
