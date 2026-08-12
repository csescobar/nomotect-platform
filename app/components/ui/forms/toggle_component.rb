# frozen_string_literal: true

module Ui
  module Forms
    class ToggleComponent < Ui::BaseComponent
      def initialize(name:, label:, checked: false, disabled: false, html_options: {})
        raise ArgumentError, "name must not be blank" if name.blank?
        raise ArgumentError, "label must not be blank" if label.blank?

        @name = name
        @label = label
        @checked = !!checked
        @disabled = !!disabled
        @html_options = html_options
      end

      def call
        tag.div(
          **merged_html_options(
            class: class_names("ui-toggle", ("ui-toggle--disabled" if @disabled)),
            data: { controller: "toggle" }
          )
        ) do
          safe_join([
            tag.input(
              type: "hidden",
              name: @name,
              value: @checked.to_s,
              data: { toggle_target: "hiddenInput" }
            ),
            tag.button(
              type: "button",
              role: "switch",
              aria: { checked: @checked, label: @label },
              disabled: @disabled,
              class: class_names("ui-toggle__switch", ("ui-toggle__switch--checked" if @checked)),
              data: {
                toggle_target: "switch",
                action: "click->toggle#toggle"
              }
            ) do
              tag.span(class: "ui-toggle__thumb")
            end,
            tag.span(@label, class: "ui-toggle__label")
          ])
        end
      end
    end
  end
end
