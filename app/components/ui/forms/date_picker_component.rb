# frozen_string_literal: true

module Ui
  module Forms
    class DatePickerComponent < Ui::BaseComponent
      def initialize(name:, value: nil, placeholder: "Select date...", min: nil, max: nil, html_options: {})
        raise ArgumentError, "name must not be blank" if name.blank?

        @name = name
        @value = value
        @placeholder = placeholder
        @min = min
        @max = max
        @html_options = html_options
      end

      def call
        data_attrs = {
          controller: "date-picker",
          date_picker_min_value: @min,
          date_picker_max_value: @max
        }.compact

        tag.div(
          **merged_html_options(
            class: "ui-date-picker",
            data: data_attrs
          )
        ) do
          safe_join([
            tag.input(type: "hidden", name: @name, value: @value, data: { date_picker_target: "hiddenInput" }),
            tag.input(
              type: "text",
              value: @value,
              placeholder: @placeholder,
              class: "ui-date-picker__input",
              data: {
                date_picker_target: "input",
                action: "focus->date-picker#open click->date-picker#open"
              }
            ),
            render_calendar_dialog
          ])
        end
      end

      private

      def render_calendar_dialog
        tag.div(
          role: "dialog",
          aria: { label: "Calendar" },
          class: "ui-date-picker__calendar",
          data: { date_picker_target: "calendar" }
        ) do
          tag.div(class: "ui-date-picker__calendar-grid", data: { date_picker_target: "grid" })
        end
      end
    end
  end
end
