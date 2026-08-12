# frozen_string_literal: true

module Ui
  module Syncfusion
    class CardComponent < Ui::BaseComponent
      def initialize(title: nil, description: nil, html_options: {})
        @title = title
        @description = description
        @html_options = html_options
      end

      def call
        tag.div(
          **merged_html_options(
            class: "e-card ej2-card-component",
            data: { controller: "ej2-card" }
          )
        ) do
          safe_join([
            render_header,
            (tag.div(content, class: "e-card-content") if content.present?)
          ].compact)
        end
      end

      private

      def render_header
        return if @title.blank? && @description.blank?

        tag.div(class: "e-card-header") do
          tag.div(class: "e-card-header-caption") do
            safe_join([
              (@title.present? ? tag.div(@title, class: "e-card-header-title") : nil),
              (@description.present? ? tag.div(@description, class: "e-card-sub-title") : nil)
            ].compact)
          end
        end
      end
    end
  end
end
