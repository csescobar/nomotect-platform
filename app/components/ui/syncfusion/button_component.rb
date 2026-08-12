# frozen_string_literal: true

module Ui
  module Syncfusion
    class ButtonComponent < Ui::BaseComponent
      def initialize(text:, primary: false, disabled: false, type: "button", html_options: {})
        @text = text
        @primary = !!primary
        @disabled = !!disabled
        @type = type
        @html_options = html_options
      end

      def call
        btn_classes = class_names(
          "e-btn",
          ("e-primary" if @primary)
        )

        tag.div(
          **merged_html_options(
            class: "ej2-button-wrapper",
            data: {
              controller: "ej2-button",
              ej2_button_is_primary_value: @primary,
              ej2_button_disabled_value: @disabled
            }
          )
        ) do
          tag.button(
            @text,
            type: @type,
            disabled: (@disabled ? "disabled" : nil),
            class: btn_classes,
            data: { ej2_button_target: "button" }
          )
        end
      end
    end
  end
end
