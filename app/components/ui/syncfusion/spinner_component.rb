# frozen_string_literal: true

module Ui
  module Syncfusion
    class SpinnerComponent < Ui::BaseComponent
      def initialize(
        label: nil,
        size: "medium",
        auto_hide: 0,
        html_options: {}
      )
        @label = label
        @size = size
        @auto_hide = auto_hide.to_i
        @html_options = html_options
      end

      def call
        tag.div(
          **merged_html_options(
            class: "ej2-spinner-wrapper",
            data: {
              controller: "ej2-spinner",
              ej2_spinner_label_value: @label,
              ej2_spinner_size_value: @size,
              ej2_spinner_auto_hide_value: @auto_hide
            }
          )
        ) do
          if @label.present?
            tag.span(@label, class: "ej2-spinner__label")
          end
        end
      end
    end
  end
end
