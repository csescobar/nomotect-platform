# frozen_string_literal: true

module Ui
  module Syncfusion
    class TooltipComponent < Ui::BaseComponent
      def initialize(
        message:,
        position: "TopCenter",
        html_options: {}
      )
        @tooltip_message = message
        @position = position
        @html_options = html_options
      end

      def call
        tag.div(
          **merged_html_options(
            class: "ej2-tooltip-wrapper",
            data: {
              controller: "ej2-tooltip",
              ej2_tooltip_content_value: @tooltip_message,
              ej2_tooltip_position_value: @position
            }
          )
        ) do
          content
        end
      end
    end
  end
end
