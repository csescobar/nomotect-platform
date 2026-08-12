# frozen_string_literal: true

require "test_helper"

module Ui
  module Syncfusion
    class GridComponentTest < ViewComponent::TestCase
      test "renders Syncfusion Enterprise Grid container with ej2-grid controller" do
        columns = [
          { field: "id", headerText: "ID", width: 80 },
          { field: "name", headerText: "Name", width: 200 }
        ]

        render_inline Ui::Syncfusion::GridComponent.new(
          columns: columns,
          data_url: "/api/v1/users"
        )

        assert_selector "div.ej2-grid-container[data-controller='ej2-grid']"
      end
    end
  end
end
