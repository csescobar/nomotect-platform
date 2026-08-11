# frozen_string_literal: true

module Ui
  class ProgressSpinnerComponent < BaseComponent
    SIZES = %i[sm md lg].freeze

    def initialize(size: :md, label: "Loading", html_options: {})
      @size = size.to_sym
      @label = label
      @html_options = html_options

      validate_option!(:size, @size, SIZES)
    end

    def call
      tag.div(
        **merged_html_options(
          class: class_names("progress-spinner", "progress-spinner--#{@size}"),
          role: "progressbar",
          aria: { label: @label }
        )
      ) do
        svg_content
      end
    end

    private

    def svg_content
      tag.svg(
        class: "progress-spinner__circle",
        viewBox: "0 0 50 50",
        aria: { hidden: true }
      ) do
        tag.circle(
          class: "progress-spinner__path",
          cx: "25",
          cy: "25",
          r: "20",
          fill: "none",
          stroke_width: "5"
        )
      end
    end
  end
end
