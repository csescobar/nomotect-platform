# frozen_string_literal: true

module Ui
  module Syncfusion
    class SliderComponent < Ui::BaseComponent
      def initialize(name:, label:, value: 0, min: 0, max: 100, step: 1, disabled: false, input_id: nil, html_options: {})
        @name = name
        @label = label
        @value = value.to_i
        @min = min.to_i
        @max = max.to_i
        @step = step.to_i
        @disabled = !!disabled
        @input_id = input_id || "ej2_slider_#{SecureRandom.hex(4)}"
        @html_options = html_options
      end

      def call
        tag.div(
          **merged_html_options(
            class: "ui-field ej2-slider-field",
            data: {
              controller: "ej2-slider",
              ej2_slider_min_value: @min,
              ej2_slider_max_value: @max,
              ej2_slider_step_value: @step,
              ej2_slider_value_value: @value,
              ej2_slider_disabled_value: @disabled
            }
          )
        ) do
          safe_join([
            tag.div(class: "ej2-slider__header") do
              safe_join([
                tag.label(@label, for: @input_id, class: "ej2-slider__label"),
                tag.span(@value, class: "ej2-slider__value", data: { ej2_slider_target: "display" })
              ])
            end,
            tag.div(class: "ej2-slider__track-container") do
              tag.input(
                type: "range",
                id: @input_id,
                name: @name,
                value: @value,
                min: @min,
                max: @max,
                step: @step,
                disabled: (@disabled ? "disabled" : nil),
                class: "e-control e-slider ui-slider",
                data: {
                  ej2_slider_target: "slider",
                  action: "input->ej2-slider#update"
                }
              )
            end
          ])
        end
      end
    end
  end
end
