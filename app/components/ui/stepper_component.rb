# frozen_string_literal: true

module Ui
  class StepperComponent < BaseComponent
    STATES = %w[completed active pending].freeze

    def initialize(steps:, current_step:, html_options: {})
      raise ArgumentError, "steps must not be empty" if steps.blank?

      step_ids = steps.map { |s| s[:id].to_s }
      raise ArgumentError, "current_step '#{current_step}' not found in steps" unless step_ids.include?(current_step.to_s)

      @steps = steps
      @current_step = current_step.to_s
      @html_options = html_options
    end

    def call
      tag.ol(
        **merged_html_options(class: "stepper", data: { controller: "stepper" })
      ) do
        current_index = @steps.index { |s| s[:id].to_s == @current_step }
        safe_join(@steps.each_with_index.map { |step, idx| render_step(step, idx, current_index) })
      end
    end

    private

    def render_step(step, index, current_index)
      state = step_state(index, current_index)
      is_current = state == "active"

      tag.li(
        class: "stepper__step stepper__step--#{state}",
        aria: {
          current: is_current ? "step" : nil,
          label: step_aria_label(step, state)
        }.compact
      ) do
        safe_join([ render_step_icon(step, state, index, current_index), render_step_content(step) ])
      end
    end

    def step_state(index, current_index)
      if index < current_index
        "completed"
      elsif index == current_index
        "active"
      else
        "pending"
      end
    end

    def step_aria_label(step, state)
      "#{step[:label]} — #{state}"
    end

    def render_step_icon(step, state, index, current_index)
      if state == "completed"
        tag.span("✓", class: "stepper__step-icon stepper__step-icon--completed", aria: { hidden: true })
      else
        tag.span((index + 1).to_s, class: "stepper__step-number", aria: { hidden: true })
      end
    end

    def render_step_content(step)
      tag.div(class: "stepper__step-content") do
        safe_join([
          tag.span(step[:label], class: "stepper__step-label"),
          (tag.span(step[:description], class: "stepper__step-description") if step[:description].present?)
        ].compact)
      end
    end
  end
end
