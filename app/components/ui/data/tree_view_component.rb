# frozen_string_literal: true

module Ui
  module Data
    class TreeViewComponent < Ui::BaseComponent
      def initialize(nodes:, html_options: {})
        raise ArgumentError, "nodes must not be empty" if nodes.blank?

        @nodes = nodes
        @html_options = html_options
      end

      def call
        tag.ul(
          **merged_html_options(
            class: "tree-view",
            role: "tree",
            data: { controller: "tree-view" }
          )
        ) do
          safe_join(@nodes.map { |node| render_node(node) })
        end
      end

      private

      def render_node(node)
        has_children = node[:children].present?

        tag.li(
          role: "treeitem",
          class: "tree-view__item",
          aria: { expanded: has_children ? false : nil }.compact
        ) do
          safe_join([
            tag.div(class: "tree-view__label-row") do
              safe_join([
                (tag.button("▶", type: "button", class: "tree-view__toggle", data: { action: "click->tree-view#toggle" }) if has_children),
                tag.span(node[:label], class: "tree-view__label")
              ].compact)
            end,
            (render_children(node[:children]) if has_children)
          ].compact)
        end
      end

      def render_children(children)
        tag.ul(
          role: "group",
          class: "tree-view__group tree-view__group--hidden"
        ) do
          safe_join(children.map { |child| render_node(child) })
        end
      end
    end
  end
end
