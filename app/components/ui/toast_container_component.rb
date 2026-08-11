# frozen_string_literal: true

module Ui
  class ToastContainerComponent < BaseComponent
    def initialize(flashes: {}, html_options: {})
      @flashes = flashes || {}
      @html_options = html_options
    end

    def call
      tag.div(
        id: "toast-container",
        **merged_html_options(
          class: "toast-region",
          role: "region",
          aria: { label: "Notifications" }
        )
      ) do
        safe_join(render_flashes)
      end
    end

    private

    def render_flashes
      @flashes.filter_map do |type, message|
        next if message.blank?

        render Ui::ToastComponent.new(message: message, type: type)
      end
    end
  end
end
