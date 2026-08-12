# frozen_string_literal: true

require "test_helper"

module Ui
  module Syncfusion
    class ProgressBarComponentTest < ViewComponent::TestCase
      test "renders Syncfusion ProgressBar with ej2-progressbar controller" do
        render_inline Ui::Syncfusion::ProgressBarComponent.new(
          value: 85,
          label: "Storage Used"
        )

        assert_selector "div.ej2-progressbar-wrapper[data-controller='ej2-progressbar']"
        assert_selector "label", text: "Storage Used"
      end
    end
  end
end
