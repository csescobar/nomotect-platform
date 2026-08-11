# frozen_string_literal: true

module Ui
  class PermissionIndicatorComponent < BaseComponent
    LOCK_ICON = "🔒"

    def initialize(permission:, granted:, label: nil, html_options: {})
      @permission = permission
      @granted = granted
      @label = label || permission
      @html_options = html_options
    end

    def call
      tag.span(
        **merged_html_options(
          class: class_names("permission-indicator", state_class),
          aria: { label: aria_label },
          data: { tooltip: @label }
        )
      ) do
        tag.span(LOCK_ICON, class: "permission-indicator__icon", aria: { hidden: true })
      end
    end

    private

    def state_class
      @granted ? "permission-indicator--granted" : "permission-indicator--denied"
    end

    def aria_label
      if @granted
        "Permission granted: #{@permission}"
      else
        "Permission required: #{@permission}"
      end
    end
  end
end
