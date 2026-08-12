# frozen_string_literal: true

module Ui
  module Syncfusion
    class DateRangePickerComponent < Ui::BaseComponent
      def initialize(start_name:, end_name:, label: nil, start_value: nil, end_value: nil, placeholder: nil, format: nil, disabled: false, input_id: nil, help_text: nil, errors: [], html_options: {})
        @start_name = start_name
        @end_name = end_name
        @label = label
        @start_value = start_value
        @end_value = end_value
        @placeholder = placeholder || "Select Date Range"
        @format = format || (I18n.locale == :"pt-BR" ? "dd/MM/yyyy" : "MM/dd/yyyy")
        @disabled = !!disabled
        @input_id = input_id || "ej2_daterangepicker_#{SecureRandom.hex(4)}"
        @help_text = help_text
        @errors = Array(errors)
        @html_options = html_options
      end

      def call
        tag.div(
          **merged_html_options(
            class: class_names("ui-field", "ej2-form-group", ("ui-field--invalid" if @errors.any?)),
            data: {
              controller: "ej2-daterangepicker",
              ej2_daterangepicker_placeholder_value: @placeholder,
              ej2_daterangepicker_format_value: @format
            }
          )
        ) do
          safe_join([
            label_markup,
            tag.input(
              type: "hidden",
              name: @start_name,
              value: @start_value,
              data: { ej2_daterangepicker_target: "startHidden" }
            ),
            tag.input(
              type: "hidden",
              name: @end_name,
              value: @end_value,
              data: { ej2_daterangepicker_target: "endHidden" }
            ),
            tag.input(
              type: "text",
              id: @input_id,
              disabled: (@disabled ? "disabled" : nil),
              data: { ej2_daterangepicker_target: "rangeInput" }
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
