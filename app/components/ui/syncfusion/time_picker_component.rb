# frozen_string_literal: true

module Ui
  module Syncfusion
    class TimePickerComponent < Ui::BaseComponent
      def initialize(name:, label: nil, value: nil, placeholder: nil, step: 30, disabled: false, input_id: nil, help_text: nil, errors: [], html_options: {})
        @name = name
        @label = label
        @value = value
        @placeholder = placeholder || "Select Time"
        @step = step.to_i
        @disabled = !!disabled
        @input_id = input_id || "ej2_timepicker_#{SecureRandom.hex(4)}"
        @help_text = help_text
        @errors = Array(errors)
        @html_options = html_options
      end

      def call
        tag.div(
          **merged_html_options(
            class: class_names("ui-field", "ej2-form-group", ("ui-field--invalid" if @errors.any?)),
            data: {
              controller: "ej2-timepicker",
              ej2_timepicker_placeholder_value: @placeholder,
              ej2_timepicker_step_value: @step
            }
          )
        ) do
          safe_join([
            label_markup,
            tag.input(
              type: "text",
              id: @input_id,
              name: @name,
              value: @value,
              disabled: (@disabled ? "disabled" : nil)
            ),
            help_markup,
            error_markup
          ].compact)
        end
      end

      private

      def label_markup
        return if @label.blank?

        tag.label(@label, for: @input_id, class: "ej2-form-group__label")
      end

      def help_markup
        return if @help_text.blank?

        tag.p(@help_text, class: "ej2-form-group__help")
      end

      def error_markup
        return if @errors.empty?

        tag.ul(class: "ui-field__errors") { safe_join(@errors.map { |err| tag.li(err) }) }
      end
    end
  end
end
