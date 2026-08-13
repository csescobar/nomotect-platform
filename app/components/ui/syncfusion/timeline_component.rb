# frozen_string_literal: true

module Ui
  module Syncfusion
    class TimelineComponent < Ui::BaseComponent
      def initialize(
        events: [],
        html_options: {}
      )
        @events = Array(events)
        @html_options = html_options
      end

      def call
        tag.div(**merged_html_options(class: "ej2-timeline")) do
          safe_join(
            @events.map do |evt|
              status_class = "ej2-timeline__item--#{evt[:status] || 'info'}"
              tag.div(class: class_names("ej2-timeline__item", status_class)) do
                safe_join([
                  tag.div(class: "ej2-timeline__bullet"),
                  tag.div(class: "ej2-timeline__content") do
                    safe_join([
                      tag.div(class: "ej2-timeline__header") do
                        safe_join([
                          tag.span(evt[:title], class: "ej2-timeline__title"),
                          (evt[:timestamp].present? ? tag.span(evt[:timestamp], class: "ej2-timeline__timestamp") : nil)
                        ].compact)
                      end,
                      (evt[:description].present? ? tag.p(evt[:description], class: "ej2-timeline__desc") : nil)
                    ].compact)
                  end
                ])
              end
            end
          )
        end
      end
    end
  end
end
