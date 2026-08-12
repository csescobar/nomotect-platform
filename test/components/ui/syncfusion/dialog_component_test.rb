# frozen_string_literal: true

require "test_helper"

module Ui
  module Syncfusion
    class DialogComponentTest < ViewComponent::TestCase
      test "renders Syncfusion Dialog with ej2-dialog controller" do
        render_inline Ui::Syncfusion::DialogComponent.new(
          title: "Confirmation",
          visible: false
        ) do
          "Are you sure?"
        end

        assert_selector "div.e-dialog[data-controller='ej2-dialog']"
        assert_selector "div.e-dlg-header", text: "Confirmation"
        assert_selector "div.e-dlg-content", text: "Are you sure?"
      end
    end
  end
end
