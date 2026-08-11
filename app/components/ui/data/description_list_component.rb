# frozen_string_literal: true

module Ui
  module Data
    class DescriptionListComponent < Ui::BaseComponent
      ALLOWED_COLUMNS = [ 1, 2, 3 ].freeze

      def initialize(items:, columns: 1, html_options: {})
        raise ArgumentError, "items must not be empty" if items.blank?

        @items = items
        @columns = columns.to_i
        @html_options = html_options

        validate_option!(:columns, @columns, ALLOWED_COLUMNS)
      end

      def call
        tag.dl(
          **merged_html_options(
            class: class_names("description-list", "description-list--cols-#{@columns}")
          )
        ) do
          safe_join(@items.map { |item| render_item(item) })
        end
      end

      private

      def render_item(item)
        tag.div(class: "description-list__item") do
          safe_join([
            tag.dt(item[:term], class: "description-list__term"),
            tag.dd(item[:details], class: "description-list__details")
          ])
        end
      end
    end
  end
end
