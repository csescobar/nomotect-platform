# frozen_string_literal: true

module Ui
  module Syncfusion
    class TreeViewComponent < Ui::BaseComponent
      def initialize(nodes: [], html_options: {})
        @nodes = Array(nodes)
        @html_options = html_options
      end

      def call
        tag.div(
          **merged_html_options(
            class: "e-treeview ej2-treeview-component",
            data: {
              controller: "ej2-treeview",
              ej2_treeview_nodes_value: @nodes.to_json
            }
          )
        ) do
          tag.ul(class: "e-list-parent e-ul") do
            safe_join(@nodes.map { |node| render_tree_node(node) })
          end
        end
      end

      private

      def render_tree_node(node)
        text = node[:text] || node["text"]
        children = node[:children] || node["children"] || []
        expanded = node[:expanded] || node["expanded"]

        tag.li(class: class_names("e-list-item", ("e-expanded" if expanded))) do
          safe_join([
            tag.div(class: "e-fullrow"),
            tag.div(class: "e-text-content") do
              safe_join([
                (children.any? ? tag.div(class: "e-icons e-icon-collapsible") : nil),
                tag.span(text, class: "e-list-text")
              ].compact)
            end,
            (children.any? ? tag.ul(class: "e-list-parent e-ul") { safe_join(children.map { |c| render_tree_node(c) }) } : nil)
          ].compact)
        end
      end
    end
  end
end
