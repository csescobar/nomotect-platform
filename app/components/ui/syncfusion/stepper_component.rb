# frozen_string_literal: true

module Ui
  module Syncfusion
    class StepperComponent < Ui::BaseComponent
      def initialize(steps: [], active_step: 0, html_options: {})
        @steps = Array(steps)
        @active_step = active_step.to_i
        @html_options = html_options
      end

      def call
        tag.nav(
          **merged_html_options(
            class: "ui-stepper ej2-stepper-wrapper",
            data: {
              controller: "ej2-stepper",
              ej2_stepper_active_step_value: @active_step,
              ej2_stepper_steps_value: @steps.to_json
            }
          )
        ) do
          tag.ol(class: "e-stepper") do
            safe_join(@steps.each_with_index.map { |s, idx| render_step(s, idx) })
          end
        end
      end

      private

      def render_step(step, index)
        label = step[:label] || step["label"]
        icon = step[:icon] || step["icon"]
        is_active = index == @active_step
        is_completed = index < @active_step

        step_classes = class_names(
          "e-step",
          ("e-step-active" if is_active),
          ("e-step-completed" if is_completed)
        )

        tag.li(class: step_classes) do
          safe_join([
            tag.span(class: "e-step-indicator") do
              (icon.present? ? tag.span(class: icon) : tag.span(index + 1))
            end,
            tag.span(label, class: "e-step-label")
          ])
        end
      end
    end
  end
end
