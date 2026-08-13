# frozen_string_literal: true

module Ui
  module Syncfusion
    class TagInputComponent < Ui::BaseComponent
      def initialize(
        name:,
        values: [],
        data_source: [],
        placeholder: nil,
        aria_label: nil,
        disabled: false,
        input_id: nil,
        html_options: {}
      )
        @name = name
        @values = Array(values)
        @data_source = Array(data_source)
        @placeholder = placeholder || "Add tags..."
        @aria_label = aria_label || @placeholder || @name
        @disabled = !!disabled
        @input_id = input_id || "ej2_tag_input_#{SecureRandom.hex(4)}"
        @html_options = html_options
      end

      def call
        tag.div(
          **merged_html_options(
            class: "ui-field ej2-tag-input-wrapper",
            data: { controller: "ej2-tag-input" }
          )
        ) do
          tag.input(
            type: "text",
            id: @input_id,
            name: @name,
            placeholder: @placeholder,
            aria: { label: @aria_label },
            disabled: (@disabled ? "disabled" : nil),
            class: "e-control e-multiselect e-input",
            data: {
              ej2_tag_input_target: "input",
              ej2_tag_input_values_value: @values.to_json,
              ej2_tag_input_data_source_value: @data_source.to_json
            }
          )
        end
      end
    end
  end
end
