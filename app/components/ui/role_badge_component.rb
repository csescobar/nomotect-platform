# frozen_string_literal: true

module Ui
  class RoleBadgeComponent < BaseComponent
    SIZES = %i[small medium].freeze

    CANONICAL_ROLES = %w[owner admin member].freeze
    ROLE_VARIANT_MAP = {
      "owner" => "owner",
      "admin" => "admin",
      "member" => "member"
    }.freeze

    def initialize(role:, label: nil, size: :medium, html_options: {})
      @size = size.to_sym
      @html_options = html_options

      validate_option!(:size, @size, SIZES)

      # Accept either a Role AR object or a plain string key
      if role.is_a?(String) || role.is_a?(Symbol)
        @key = role.to_s
        @label = label || humanize_key(@key)
      else
        @key = role.key.to_s
        @label = label || role.name.presence || humanize_key(@key)
      end

      @variant = ROLE_VARIANT_MAP.fetch(@key, "custom")
    end

    def call
      tag.span(
        @label,
        **merged_html_options(
          class: class_names("role-badge", "role-badge--#{@variant}", "role-badge--#{@size}"),
          aria: { label: "Role: #{@label}" }
        )
      )
    end

    private

    def humanize_key(key)
      key.tr("_", " ").split.map(&:capitalize).join(" ")
    end
  end
end
