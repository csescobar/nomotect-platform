# frozen_string_literal: true

module Ui
  module Data
    class TimelineComponent < Ui::BaseComponent
      def initialize(events:, html_options: {})
        raise ArgumentError, "events must not be empty" if events.blank?

        @events = events
        @html_options = html_options
      end

      def call
        tag.ol(
          **merged_html_options(class: "timeline")
        ) do
          safe_join(@events.map { |event| render_item(event) })
        end
      end

      private

      def render_item(event)
        tag.li(class: "timeline__item") do
          safe_join([
            render_node(event),
            render_content(event)
          ])
        end
      end

      def render_node(event)
        tag.div(class: "timeline__node") do
          if event[:icon].present?
            tag.span(event[:icon], class: "timeline__node-icon")
          else
            tag.span(class: "timeline__node-dot")
          end
        end
      end

      def render_content(event)
        tag.div(class: "timeline__content") do
          safe_join([
            tag.div(class: "timeline__header") do
              safe_join([
                tag.span(event[:title], class: "timeline__title"),
                (tag.time(event[:timestamp], class: "timeline__timestamp") if event[:timestamp].present?)
              ].compact)
            end,
            (tag.p(event[:description], class: "timeline__description") if event[:description].present?)
          ].compact)
        end
      end
    end
  end
end
