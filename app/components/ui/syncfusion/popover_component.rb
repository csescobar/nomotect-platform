# frozen_string_literal: true

module Ui
  module Syncfusion
    class PopoverComponent < Ui::BaseComponent
      def initialize(
        title: nil,
        trigger_text: "Open",
        position: "bottom-start",
        html_options: {}
      )
        @title = title
        @trigger_text = trigger_text
        @position = position
        @html_options = html_options
      end

      def call
        tag.div(
          **merged_html_options(
            class: "ej2-popover-wrapper",
            data: { controller: "ej2-popover" }
          )
        ) do
          safe_join([
            tag.button(
              @trigger_text,
              type: "button",
              class: "button button--secondary ej2-popover__trigger",
              data: { action: "click->ej2-popover#toggle" }
            ),
            tag.div(
              class: "ej2-popover__content-box hidden",
              data: { ej2_popover_target: "box" }
            ) do
              safe_join([
                (@title.present? ? tag.h4(@title, class: "ej2-popover__title") : nil),
                content
              ].compact)
            end
          ])
        end
      end
    end
  end
end
