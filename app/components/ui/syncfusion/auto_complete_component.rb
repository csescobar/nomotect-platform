# frozen_string_literal: true

module Ui
  module Syncfusion
    class AutoCompleteComponent < Ui::BaseComponent
      def initialize(
        name:,
        value: nil,
        data_source: [],
        url: nil,
        placeholder: nil,
        aria_label: nil,
        min_length: 1,
        disabled: false,
        input_id: nil,
        html_options: {}
      )
        @name = name
        @value = value
        @data_source = data_source
        @url = url
        @placeholder = placeholder || "Search..."
        @aria_label = aria_label || @placeholder || @name
        @min_length = min_length
        @disabled = !!disabled
        @input_id = input_id || "ej2_autocomplete_#{SecureRandom.hex(4)}"
        @html_options = html_options
      end

      def call
        tag.div(
          **merged_html_options(
            class: "ui-field ej2-autocomplete-wrapper",
            data: { controller: "ej2-autocomplete" }
          )
        ) do
          tag.input(
            type: "text",
            id: @input_id,
            name: @name,
            value: @value,
            placeholder: @placeholder,
            aria: { label: @aria_label },
            disabled: (@disabled ? "disabled" : nil),
            class: "e-control e-autocomplete e-input",
            data: {
              ej2_autocomplete_target: "input",
              ej2_autocomplete_data_source_value: (@data_source.to_json if @data_source.present?),
              ej2_autocomplete_url_value: @url,
              ej2_autocomplete_min_length_value: @min_length
            }.compact
          )
        end
      end
    end
  end
end
