# frozen_string_literal: true

module Ui
  module Syncfusion
    class GridComponent < Ui::BaseComponent
      def initialize(columns: [], data_url: nil, items: [], allow_paging: true, allow_sorting: true, allow_filtering: true, html_options: {})
        @columns = Array(columns)
        @data_url = data_url
        @items = Array(items)
        @allow_paging = !!allow_paging
        @allow_sorting = !!allow_sorting
        @allow_filtering = !!allow_filtering
        @html_options = html_options
      end

      def call
        tag.div(
          **merged_html_options(
            class: "ej2-grid-container",
            data: {
              controller: "ej2-grid",
              ej2_grid_columns_value: @columns.to_json,
              ej2_grid_data_url_value: @data_url,
              ej2_grid_items_value: @items.to_json,
              ej2_grid_allow_paging_value: @allow_paging,
              ej2_grid_allow_sorting_value: @allow_sorting,
              ej2_grid_allow_filtering_value: @allow_filtering
            }
          )
        ) do
          tag.div(class: "ej2-grid-target")
        end
      end
    end
  end
end
