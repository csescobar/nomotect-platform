# frozen_string_literal: true

require "test_helper"

module Ui
  module Syncfusion
    class ToggleComponentTest < ViewComponent::TestCase
      test "renders Syncfusion Switch container with ej2-switch controller" do
        render_inline Ui::Syncfusion::ToggleComponent.new(
          name: "notifications",
          label: "Enable Notifications",
          checked: true,
          input_id: "syncfusion_notifications"
        )

        assert_selector "div.ui-field[data-controller='ej2-switch']"
        assert_selector "input[type='hidden'][name='notifications'][value='true']", visible: false
        assert_selector "input[type='checkbox'].e-switch#syncfusion_notifications[checked='checked']"
        assert_selector "label.ej2-toggle__label", text: "Enable Notifications"
      end

      test "validates required parameters" do
        assert_raises(ArgumentError) { Ui::Syncfusion::ToggleComponent.new(name: "", label: "Test") }
        assert_raises(ArgumentError) { Ui::Syncfusion::ToggleComponent.new(name: "test", label: "") }
      end
    end
  end
end
