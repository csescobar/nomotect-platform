# frozen_string_literal: true

module Ui
  module Forms
    class DatePickerComponent < Ui::BaseComponent
      def initialize(name:, value: nil, placeholder: nil, min: nil, max: nil, html_options: {})
        raise ArgumentError, "name must not be blank" if name.blank?

        @name = name
        @value = value
        @placeholder = placeholder || I18n.t("showcase.examples.select_date", default: "Select date...")
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
            tag.input(type: "hidden", name: @name, value: iso_date_value, data: { date_picker_target: "hiddenInput" }),
            tag.input(
              type: "text",
              value: formatted_date_value,
              placeholder: @placeholder,
              aria: { label: @placeholder },
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

      def formatted_date_value
        return if @value.blank?

        parsed = parse_date(@value)
        return @value.to_s unless parsed

        I18n.l(parsed, format: :short)
      end

      def iso_date_value
        return if @value.blank?

        parsed = parse_date(@value)
        parsed ? parsed.iso8601 : @value.to_s
      end

      def parse_date(val)
        return val.to_date if val.is_a?(Date) || val.is_a?(Time)

        Date.parse(val.to_s)
      rescue ArgumentError, TypeError
        nil
      end

      def render_calendar_dialog
        tag.div(
          role: "dialog",
          aria: { label: "Calendar" },
          class: "ui-date-picker__calendar",
          data: { date_picker_target: "calendar" }
        )
      end
    end
  end
end
