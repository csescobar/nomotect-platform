# frozen_string_literal: true

module Ui
  module Forms
    class TimePickerComponent < Ui::BaseComponent
      def initialize(name:, value: nil, placeholder: "Select time...", step: 30, format_12h: false, html_options: {})
        raise ArgumentError, "name must not be blank" if name.blank?

        @name = name
        @value = value
        @placeholder = placeholder
        @step = step.to_i
        @format_12h = format_12h
        @html_options = html_options
      end

      def call
        tag.div(
          **merged_html_options(
            class: "ui-time-picker",
            data: { controller: "time-picker" }
          )
        ) do
          safe_join([
            tag.input(type: "hidden", name: @name, value: @value, data: { time_picker_target: "hiddenInput" }),
            tag.input(
              type: "text",
              value: @value,
              placeholder: @placeholder,
              class: "ui-time-picker__input",
              data: {
                time_picker_target: "input",
                action: "click->time-picker#toggle"
              }
            ),
            render_dropdown
          ])
        end
      end

      private

      def render_dropdown
        tag.ul(
          role: "listbox",
          class: "ui-time-picker__dropdown",
          data: { time_picker_target: "dropdown" }
        ) do
          safe_join(time_slots.map { |slot| render_slot(slot) })
        end
      end

      def render_slot(slot)
        val = slot[:value]
        is_selected = val == @value

        tag.li(
          slot[:label],
          role: "option",
          class: class_names("ui-time-picker__option", ("ui-time-picker__option--selected" if is_selected)),
          aria: { selected: is_selected },
          data: {
            value: val,
            action: "click->time-picker#select"
          }
        )
      end

      def time_slots
        slots = []
        minutes = 0
        while minutes < 24 * 60
          h = minutes / 60
          m = minutes % 60
          val_24 = format("%02d:%02d", h, m)
          label = @format_12h ? format_12h_str(h, m) : val_24
          slots << { value: val_24, label: label }
          minutes += @step
        end
        slots
      end

      def format_12h_str(h, m)
        period = h >= 12 ? "PM" : "AM"
        h12 = h % 12
        h12 = 12 if h12 == 0
        format("%02d:%02d %s", h12, m, period)
      end
    end
  end
end
