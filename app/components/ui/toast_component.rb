# frozen_string_literal: true

module Ui
  class ToastComponent < BaseComponent
    TYPES = %i[notice success alert danger info warning].freeze

    TYPE_VARIANT_MAP = {
      notice: "success",
      success: "success",
      alert: "danger",
      danger: "danger",
      info: "info",
      warning: "warning"
    }.freeze

    def initialize(message:, type: :notice, duration: 4000, html_options: {})
      @message = message
      @type = type.to_sym
      @duration = duration
      @html_options = html_options

      validate_option!(:type, @type, TYPES)
      @variant = TYPE_VARIANT_MAP.fetch(@type, "info")
    end

    def call
      role = @variant == "danger" ? "alert" : "status"

      tag.div(
        **merged_html_options(
          class: class_names("toast", "toast--#{@variant}"),
          role: role,
          data: {
            controller: "toast",
            toast_duration_value: @duration
          }
        )
      ) do
        safe_join([
          tag.span(@message, class: "toast__message"),
          render_dismiss_button
        ])
      end
    end

    private

    def render_dismiss_button
      tag.button(
        "×",
        type: "button",
        class: "toast__dismiss",
        aria: { label: "Dismiss notification" },
        data: { action: "click->toast#dismiss" }
      )
    end
  end
end
