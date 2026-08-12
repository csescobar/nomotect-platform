# frozen_string_literal: true

module Ui
  class ProgressBarComponent < BaseComponent
    SIZES = %i[sm md lg].freeze

    def initialize(value: 0, indeterminate: false, size: :md, show_label: false, label: nil, html_options: {})
      @raw_value = value.to_i
      @value = @raw_value.clamp(0, 100)
      @indeterminate = indeterminate
      @size = size.to_sym
      @show_label = show_label
      @label = label
      @html_options = html_options

      validate_option!(:size, @size, SIZES)
    end

    def call
      aria_opts = if @indeterminate
        { label: @label || "Loading..." }
      else
        { valuenow: @value, valuemin: 0, valuemax: 100, label: @label }
      end

      tag.div(class: "progress-bar-wrapper") do
        safe_join([
          render_header,
          tag.div(
            **merged_html_options(
              class: class_names("progress-bar", "progress-bar--#{@size}", ("progress-bar--indeterminate" if @indeterminate)),
              role: "progressbar",
              aria: aria_opts.compact
            )
          ) do
            render_fill
          end
        ].compact)
      end
    end

    private

    def render_header
      return if @label.blank? && !@show_label

      tag.div(class: "progress-bar__header") do
        safe_join([
          (@label.present? ? tag.span(@label, class: "progress-bar__label") : (@show_label ? tag.span("#{@value}%", class: "progress-bar__label") : nil)),
          ((@show_label && @label.present?) ? tag.span("#{@value}%", class: "progress-bar__value") : nil)
        ].compact)
      end
    end

    def render_fill
      return tag.div(class: "progress-bar__fill") if @indeterminate

      tag.div(
        class: "progress-bar__fill",
        data: {
          controller: "progress-bar",
          progress_bar_value_value: @value
        }
      )
    end
  end
end
