# frozen_string_literal: true

module Ui
  module Data
    class KpiCardComponent < Ui::BaseComponent
      TRENDS = %i[up down neutral].freeze

      def initialize(title:, value:, change: nil, trend: nil, icon: nil, html_options: {})
        raise ArgumentError, "title must not be blank" if title.blank?

        @title = title
        @value = value
        @change = change
        @trend = trend&.to_sym
        @icon = icon
        @html_options = html_options

        validate_option!(:trend, @trend, TRENDS) if @trend
      end

      def call
        tag.div(
          **merged_html_options(class: "kpi-card")
        ) do
          safe_join([
            render_header,
            render_value_section
          ])
        end
      end

      private

      def render_header
        tag.div(class: "kpi-card__header") do
          safe_join([
            tag.span(@title, class: "kpi-card__title"),
            (tag.span(@icon, class: "kpi-card__icon") if @icon.present?)
          ].compact)
        end
      end

      def render_value_section
        tag.div(class: "kpi-card__body") do
          safe_join([
            tag.span(@value, class: "kpi-card__value"),
            render_trend
          ].compact)
        end
      end

      def render_trend
        return if @change.blank? || @trend.nil?

        tag.span(
          @change,
          class: class_names("kpi-card__trend", "kpi-card__trend--#{@trend}")
        )
      end
    end
  end
end
