# frozen_string_literal: true

module Ui
  module Syncfusion
    class BreadcrumbComponent < Ui::BaseComponent
      def initialize(
        items: [],
        separator: "/",
        html_options: {}
      )
        @items = Array(items)
        @separator = separator
        @html_options = html_options
      end

      def call
        tag.nav(
          aria: { label: "Breadcrumb" },
          **merged_html_options(class: "ej2-breadcrumb")
        ) do
          tag.ol(class: "ej2-breadcrumb__list") do
            safe_join(
              @items.each_with_index.map do |item, idx|
                tag.li(class: "ej2-breadcrumb__item") do
                  safe_join([
                    (idx.positive? ? tag.span(@separator, class: "ej2-breadcrumb__separator") : nil),
                    render_item(item)
                  ].compact)
                end
              end
            )
          end
        end
      end

      private

      def render_item(item)
        if item[:active] || item[:url].blank?
          tag.span(item[:text], class: "ej2-breadcrumb__active", aria: { current: ("page" if item[:active]) })
        else
          tag.a(item[:text], href: item[:url], class: "ej2-breadcrumb__link")
        end
      end
    end
  end
end
