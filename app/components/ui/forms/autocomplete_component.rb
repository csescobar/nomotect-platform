# frozen_string_literal: true

module Ui
  module Forms
    class AutocompleteComponent < Ui::BaseComponent
      def initialize(name:, suggestions: nil, url: nil, placeholder: "Start typing...", value: nil, html_options: {})
        raise ArgumentError, "either suggestions or url must be provided" if suggestions.blank? && url.blank?

        @name = name
        @suggestions = suggestions || []
        @url = url
        @placeholder = placeholder
        @value = value
        @html_options = html_options
      end

      def call
        data_attrs = {
          controller: "autocomplete",
          autocomplete_suggestions_value: @suggestions.to_json
        }
        data_attrs[:autocomplete_url_value] = @url if @url.present?

        tag.div(
          **merged_html_options(
            class: "ui-autocomplete",
            data: data_attrs
          )
        ) do
          safe_join([
            tag.input(
              type: "text",
              name: @name,
              value: @value,
              placeholder: @placeholder,
              class: "ui-autocomplete__input",
              aria: { autocomplete: "list", expanded: false },
              data: {
                autocomplete_target: "input",
                action: "input->autocomplete#search keydown->autocomplete#navigate"
              }
            ),
            tag.ul(
              role: "listbox",
              class: "ui-autocomplete__results",
              data: { autocomplete_target: "results" }
            )
          ])
        end
      end
    end
  end
end
