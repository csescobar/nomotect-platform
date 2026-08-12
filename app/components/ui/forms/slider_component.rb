# frozen_string_literal: true

module Ui
  module Forms
    class SliderComponent < Ui::BaseComponent
      def initialize(name:, value: 50, min: 0, max: 100, step: 1, label: nil, disabled: false, html_options: {})
        raise ArgumentError, "name must not be blank" if name.blank?

        @name = name
        @value = value.to_i
        @min = min.to_i
        @max = max.to_i
        @step = step.to_i
        @label = label
        @disabled = !!disabled
        @html_options = html_options
      end

      def call
        tag.div(
          **merged_html_options(
            class: class_names("ui-slider", ("ui-slider--disabled" if @disabled)),
            data: { controller: "slider" }
          )
        ) do
          safe_join([
            render_header,
            tag.input(
              type: "range",
              name: @name,
              value: @value,
              min: @min,
              max: @max,
              step: @step,
              disabled: @disabled,
              aria: { label: @label || @name.to_s.humanize },
              class: "ui-slider__input",
              data: {
                slider_target: "input",
                action: "input->slider#update"
              }
            )
          ].compact)
        end
      end

      private

      def render_header
        tag.div(class: "ui-slider__header") do
          safe_join([
            (@label.present? ? tag.span(@label, class: "ui-slider__label") : nil),
            tag.span(@value.to_s, class: "ui-slider__value", data: { slider_target: "display" })
          ].compact)
        end
      end
    end
  end
end
