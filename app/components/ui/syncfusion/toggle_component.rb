# frozen_string_literal: true

module Ui
  module Syncfusion
    class ToggleComponent < Ui::BaseComponent
      def initialize(name:, label:, checked: false, disabled: false, input_id: nil, html_options: {})
        raise ArgumentError, "name must not be blank" if name.blank?
        raise ArgumentError, "label must not be blank" if label.blank?

        @name = name
        @label = label
        @checked = !!checked
        @disabled = !!disabled
        @input_id = input_id || "ej2_switch_#{SecureRandom.hex(4)}"
        @html_options = html_options
      end

      def call
        wrapper_classes = class_names(
          "ui-field",
          "ej2-toggle-wrapper",
          ("ej2-toggle--disabled" if @disabled)
        )

        tag.div(
          **merged_html_options(
            class: wrapper_classes,
            data: { controller: "ej2-switch" }
          )
        ) do
          safe_join([
            tag.input(
              type: "hidden",
              name: @name,
              value: @checked.to_s,
              data: { ej2_switch_target: "hiddenInput" }
            ),
            tag.div(class: "ej2-toggle-control") do
              safe_join([
                tag.input(
                  type: "checkbox",
                  id: @input_id,
                  class: "e-switch",
                  checked: (@checked ? "checked" : nil),
                  disabled: (@disabled ? "disabled" : nil),
                  data: {
                    ej2_switch_target: "switch",
                    action: "change->ej2-switch#handleChange"
                  }
                ),
                tag.label(@label, for: @input_id, class: "ej2-toggle__label")
              ])
            end
          ])
        end
      end
    end
  end
end
