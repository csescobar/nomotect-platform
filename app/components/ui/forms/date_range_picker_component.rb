# frozen_string_literal: true

module Ui
  module Forms
    class DateRangePickerComponent < Ui::BaseComponent
      def initialize(start_name:, end_name:, start_value: nil, end_value: nil, placeholder: "Select date range...", presets: false, html_options: {})
        raise ArgumentError, "start_name must not be blank" if start_name.blank?
        raise ArgumentError, "end_name must not be blank" if end_name.blank?

        @start_name = start_name
        @end_name = end_name
        @start_value = start_value
        @end_value = end_value
        @placeholder = placeholder
        @presets = presets
        @html_options = html_options
      end

      def call
        display_val = [ @start_value, @end_value ].compact.join(" – ")

        tag.div(
          **merged_html_options(
            class: "ui-date-range-picker",
            data: { controller: "date-range-picker" }
          )
        ) do
          safe_join([
            tag.input(type: "hidden", name: @start_name, value: @start_value, data: { date_range_picker_target: "startHidden" }),
            tag.input(type: "hidden", name: @end_name, value: @end_value, data: { date_range_picker_target: "endHidden" }),
            tag.input(
              type: "text",
              value: display_val,
              placeholder: @placeholder,
              class: "ui-date-range-picker__input",
              data: {
                date_range_picker_target: "input",
                action: "click->date-range-picker#open"
              }
            ),
            (render_presets if @presets)
          ].compact)
        end
      end

      private

      def render_presets
        tag.div(class: "ui-date-range-picker__presets") do
          safe_join([
            tag.button("Last 7 days", type: "button", data: { action: "click->date-range-picker#selectPreset", preset: "7_days" }),
            tag.button("This month", type: "button", data: { action: "click->date-range-picker#selectPreset", preset: "this_month" })
          ])
        end
      end
    end
  end
end
