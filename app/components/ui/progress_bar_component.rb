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

      tag.div(
        **merged_html_options(
          class: class_names("progress-bar", "progress-bar--#{@size}", ("progress-bar--indeterminate" if @indeterminate)),
          role: "progressbar",
          aria: aria_opts.compact
        )
      ) do
        safe_join([
          render_fill,
          render_label
        ].compact)
      end
    end

    private

    def render_fill
      style = @indeterminate ? nil : "width: #{@value}%"
      tag.div(class: "progress-bar__fill", style: style)
    end

    def render_label
      display_text = @label || ("#{@value}%" if @show_label)
      return if display_text.blank?

      tag.span(display_text, class: "progress-bar__label")
    end
  end
end
