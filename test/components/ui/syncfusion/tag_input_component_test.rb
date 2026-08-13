# frozen_string_literal: true

require "test_helper"

module Ui
  module Syncfusion
    class TagInputComponentTest < ViewComponent::TestCase
      test "renders tag input control with values and dataset" do
        render_inline(TagInputComponent.new(
          name: "skills[]",
          values: %w[Ruby Rails],
          data_source: %w[Ruby Rails PostgreSQL Docker],
          placeholder: "Add skills..."
        ))

        assert_selector ".ui-field.ej2-tag-input-wrapper[data-controller='ej2-tag-input']"
        assert_selector "input[name='skills[]'][placeholder='Add skills...']"
      end
    end
  end
end
