# frozen_string_literal: true

module Ui
  class SkeletonComponent < BaseComponent
    VARIANTS = %i[text avatar circle rect card].freeze

    def initialize(variant: :text, width: nil, height: nil, lines: 1, html_options: {})
      @variant = variant.to_sym
      @width = width
      @height = height
      @lines = lines
      @html_options = html_options

      validate_option!(:variant, @variant, VARIANTS)
    end

    def call
      if @variant == :card
        render_card_preset
      elsif @lines > 1
        render_multi_lines
      else
        render_single_skeleton
      end
    end

    private

    def render_single_skeleton
      style = [
        ("width: #{@width}" if @width),
        ("height: #{@height}" if @height)
      ].compact.join("; ").presence

      tag.div(
        **merged_html_options(
          class: class_names("skeleton", "skeleton--#{@variant}"),
          style: style,
          aria: { hidden: true }
        ).compact
      )
    end

    def render_multi_lines
      tag.div(class: "skeleton-group") do
        safe_join(Array.new(@lines) { render_single_skeleton })
      end
    end

    def render_card_preset
      tag.div(class: "skeleton-card") do
        safe_join([
          render(Ui::SkeletonComponent.new(variant: :avatar)),
          tag.div(class: "skeleton-card__body") do
            safe_join([
              render(Ui::SkeletonComponent.new(variant: :text, width: "60%")),
              render(Ui::SkeletonComponent.new(variant: :text, width: "90%"))
            ])
          end
        ])
      end
    end
  end
end
