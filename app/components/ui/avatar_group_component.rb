# frozen_string_literal: true

module Ui
  class AvatarGroupComponent < BaseComponent
    DEFAULT_MAX_VISIBLE = 4

    def initialize(avatars:, max_visible: DEFAULT_MAX_VISIBLE, size: :sm, html_options: {})
      raise ArgumentError, "avatars must not be empty" if avatars.blank?

      @avatars = avatars
      @max_visible = max_visible
      @size = size
      @html_options = html_options
    end

    def call
      tag.div(
        **merged_html_options(class: "avatar-group", role: "group")
      ) do
        safe_join([ render_visible_avatars, render_overflow ].compact)
      end
    end

    private

    def render_visible_avatars
      safe_join(@avatars.first(@max_visible).map { |attrs| render_avatar(attrs) })
    end

    def render_avatar(attrs)
      render Ui::AvatarComponent.new(**attrs.merge(size: @size))
    end

    def render_overflow
      overflow_count = @avatars.size - @max_visible
      return unless overflow_count > 0

      tag.span(
        "+#{overflow_count}",
        class: "avatar-group__overflow",
        aria: { label: "#{overflow_count} more members" }
      )
    end
  end
end
