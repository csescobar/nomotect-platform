# frozen_string_literal: true

require "securerandom"

module Ui
  class TooltipComponent < BaseComponent
    POSITIONS = %i[top bottom left right].freeze

    def initialize(text:, position: :top, html_options: {})
      raise ArgumentError, "text must not be blank" if text.blank?

      @text = text
      @position = position.to_sym
      @html_options = html_options
      @id = "tooltip-#{SecureRandom.hex(4)}"

      validate_option!(:position, @position, POSITIONS)
    end

    def call
      tag.span(
        **merged_html_options(
          class: "tooltip-wrapper",
          aria: { describedby: @id }
        )
      ) do
        safe_join([
          content,
          render_bubble
        ])
      end
    end

    private

    def render_bubble
      tag.span(
        @text,
        id: @id,
        role: "tooltip",
        class: class_names("tooltip-bubble", "tooltip-bubble--#{@position}")
      )
    end
  end
end
