# frozen_string_literal: true

module Ui
  module Syncfusion
    class InputGroupComponent < Ui::BaseComponent
      def initialize(name:, value: nil, prefix: nil, suffix: nil, label: nil, placeholder: nil, disabled: false, input_id: nil, html_options: {})
        @name = name
        @value = value
        @prefix = prefix
        @suffix = suffix
        @label = label
        @placeholder = placeholder || "Enter value"
        @disabled = !!disabled
        @input_id = input_id || "ej2_input_group_#{SecureRandom.hex(4)}"
        @html_options = html_options
      end

      def call
        tag.div(
          **merged_html_options(
            class: "ui-field ej2-form-group",
            data: {
              controller: "ej2-input-group",
              ej2_input_group_placeholder_value: @placeholder,
              ej2_input_group_value_value: @value.to_s
            }
          )
        ) do
          safe_join([
            (tag.label(@label, for: @input_id, class: "ej2-form-group__label") if @label.present?),
            tag.div(class: class_names("e-input-group", ("e-disabled" if @disabled))) do
              safe_join([
                prefix_markup,
                tag.input(
                  type: "text",
                  id: @input_id,
                  name: @name,
                  value: @value,
                  placeholder: @placeholder,
                  disabled: (@disabled ? "disabled" : nil),
                  class: "e-input",
                  data: { ej2_input_group_target: "input" }
                ),
                suffix_markup
              ].compact)
            end
          ].compact)
        end
      end

      private

      def prefix_markup
        return if @prefix.blank?

        tag.span(@prefix, class: "e-input-group-icon e-input-group-prefix")
      end

      def suffix_markup
        return if @suffix.blank?

        tag.span(@suffix, class: "e-input-group-icon e-input-group-suffix")
      end
    end
  end
end
