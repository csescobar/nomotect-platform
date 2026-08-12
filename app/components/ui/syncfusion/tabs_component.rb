# frozen_string_literal: true

module Ui
  module Syncfusion
    class TabsComponent < Ui::BaseComponent
      def initialize(items: [], active_tab: 0, html_options: {})
        @items = Array(items)
        @active_tab = active_tab.to_i
        @html_options = html_options
      end

      def call
        tag.div(
          **merged_html_options(
            class: "e-tab ej2-tab-component",
            data: {
              controller: "ej2-tab",
              ej2_tab_active_value: @active_tab
            }
          )
        ) do
          safe_join([
            tag.div(class: "e-tab-header") do
              safe_join(@items.each_with_index.map { |item, idx| render_tab_item(item, idx) })
            end,
            tag.div(class: "e-content") do
              safe_join(@items.each_with_index.map { |item, idx| render_tab_content(item, idx) })
            end
          ])
        end
      end

      private

      def render_tab_item(item, index)
        title = item[:title] || item["title"]
        is_active = index == @active_tab

        tag.div(class: class_names("e-toolbar-item", ("e-active" if is_active))) do
          tag.div(title, class: "e-tab-text")
        end
      end

      def render_tab_content(item, index)
        content_text = item[:content] || item["content"]
        is_active = index == @active_tab

        tag.div(content_text, class: class_names("e-item", ("e-active" if is_active)))
      end
    end
  end
end
