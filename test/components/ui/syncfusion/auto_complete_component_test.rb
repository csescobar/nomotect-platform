# frozen_string_literal: true

require "test_helper"

module Ui
  module Syncfusion
    class AutoCompleteComponentTest < ViewComponent::TestCase
      test "renders auto complete input with correct attributes and dataset" do
        render_inline(AutoCompleteComponent.new(
          name: "country",
          value: "Brazil",
          data_source: %w[Brazil Argentina Chile],
          placeholder: "Search country...",
          min_length: 2
        ))

        assert_selector ".ui-field.ej2-autocomplete-wrapper[data-controller='ej2-autocomplete']"
        assert_selector "input.e-autocomplete[name='country'][value='Brazil'][placeholder='Search country...']"
        assert_selector "input[data-ej2-autocomplete-min-length-value='2']"
      end

      test "renders with remote url data source" do
        render_inline(AutoCompleteComponent.new(
          name: "user_id",
          url: "/api/v1/users/autocomplete",
          placeholder: "Find user..."
        ))

        assert_selector "input[data-ej2-autocomplete-url-value='/api/v1/users/autocomplete']"
      end
    end
  end
end
