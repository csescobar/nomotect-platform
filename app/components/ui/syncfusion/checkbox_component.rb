# frozen_string_literal: true

module Ui
  module Syncfusion
    class CheckboxComponent < Ui::BaseComponent
      def initialize(name:, label:, checked: false, disabled: false, input_id: nil, help_text: nil, errors: [], html_options: {})
        @name = name
        @label = label
        @checked = !!checked
        @disabled = !!disabled
        @input_id = input_id || "ej2_checkbox_#{SecureRandom.hex(4)}"
        @help_text = help_text
        @errors = Array(errors)
        @html_options = html_options
      end

      def call
        wrapper_classes = class_names(
          "ui-field",
          "ui-checkbox-field",
          ("ui-checkbox-field--disabled" if @disabled),
          ("ui-field--invalid" if @errors.any?)
        )

        tag.div(
          **merged_html_options(
            class: wrapper_classes,
            data: { controller: "ej2-checkbox" }
          )
        ) do
          safe_join([
            tag.input(
              type: "hidden",
              name: @name,
              value: @checked.to_s,
              data: { ej2_checkbox_target: "hiddenInput" }
            ),
            tag.input(
              type: "checkbox",
              id: @input_id,
              class: "e-checkbox",
              checked: (@checked ? "checked" : nil),
              disabled: (@disabled ? "disabled" : nil),
              data: {
                ej2_checkbox_target: "checkbox",
                action: "change->ej2-checkbox#handleChange"
              }
            ),
            tag.label(for: @input_id, class: "e-checkbox-wrapper") { tag.span(@label, class: "e-label") },
            help_markup,
            error_markup
          ].compact)
        end
      end

      private

      def help_markup
        return if @help_text.blank?

        tag.p(@help_text, class: "ui-field__help")
      end

      def error_markup
        return if @errors.empty?

        tag.ul(class: "ui-field__errors") { safe_join(@errors.map { |err| tag.li(err) }) }
      end
    end
  end
end
