# frozen_string_literal: true

module Ui
  module Syncfusion
    class ProgressBarComponent < Ui::BaseComponent
      def initialize(value: 0, label: nil, html_options: {})
        @value = value.to_i.clamp(0, 100)
        @label = label
        @html_options = html_options
      end

      def call
        tag.div(
          **merged_html_options(
            class: "ej2-progressbar-wrapper",
            data: {
              controller: "ej2-progressbar",
              ej2_progressbar_value_value: @value
            }
          )
        ) do
          safe_join([
            label_markup,
            tag.div(class: "e-progressbar-container") do
              tag.div(
                class: "e-progressbar-fill",
                data: {
                  controller: "progress-bar",
                  progress_bar_value_value: @value
                }
              )
            end
          ].compact)
        end
      end

      private

      def label_markup
        return if @label.blank?

        tag.div(class: "ej2-progressbar__header") do
          safe_join([
            tag.label(@label, class: "ej2-progressbar__label"),
            tag.span("#{@value}%", class: "ej2-progressbar__value")
          ])
        end
      end
    end
  end
end
