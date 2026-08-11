# frozen_string_literal: true

module Ui
  class AvatarComponent < BaseComponent
    SIZES = %i[xs sm md lg xl].freeze
    STATUSES = %i[online away busy offline].freeze

    STATUS_LABELS = {
      online: "Online",
      away: "Away",
      busy: "Busy",
      offline: "Offline"
    }.freeze

    def initialize(name: nil, src: nil, alt: nil, size: :md, status: nil, html_options: {})
      @name = name
      @src = src
      @alt = alt || name
      @size = size.to_sym
      @status = status&.to_sym
      @html_options = html_options

      validate_option!(:size, @size, SIZES)
      validate_option!(:status, @status, STATUSES) if @status
    end

    def call
      tag.div(
        **merged_html_options(
          class: class_names("avatar", "avatar--#{@size}"),
          role: @src ? nil : "img",
          aria: { label: @src ? nil : @name }.compact
        ).compact
      ) do
        safe_join([ render_image_or_initials, render_status ].compact)
      end
    end

    private

    def render_image_or_initials
      if @src.present?
        tag.img(src: @src, alt: @alt, class: "avatar__image")
      else
        tag.span(initials, class: "avatar__initials", aria: { hidden: true })
      end
    end

    def render_status
      return unless @status

      tag.span(
        "",
        class: "avatar__status avatar__status--#{@status}",
        aria: { label: STATUS_LABELS[@status] }
      )
    end

    def initials
      return "" if @name.blank?

      parts = @name.split
      if parts.size >= 2
        "#{parts.first[0]}#{parts.last[0]}".upcase
      else
        parts.first[0].upcase
      end
    end
  end
end
