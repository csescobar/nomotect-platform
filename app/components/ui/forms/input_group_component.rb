# frozen_string_literal: true

module Ui
  module Forms
    class InputGroupComponent < Ui::BaseComponent
      def initialize(name:, value: nil, prefix: nil, suffix: nil, placeholder: nil, label: nil, disabled: false, html_options: {})
        raise ArgumentError, "name must not be blank" if name.blank?

        @name = name
        @value = value
        @prefix = prefix
        @suffix = suffix
        @placeholder = placeholder
        @label = label
        @disabled = !!disabled
        @html_options = html_options
      end

      def call
        tag.div(
          **merged_html_options(
            class: "ui-input-group-wrapper"
          )
        ) do
          safe_join([
            (@label.present? ? tag.label(@label, class: "ui-input-group__label") : nil),
            tag.div(class: class_names("ui-input-group", ("ui-input-group--disabled" if @disabled))) do
              safe_join([
                (@prefix.present? ? tag.span(@prefix, class: "ui-input-group__prefix") : nil),
                tag.input(
                  type: "text",
                  name: @name,
                  value: @value,
                  placeholder: @placeholder,
                  disabled: @disabled,
                  aria: { label: @label || @name.to_s.humanize },
                  class: "ui-input-group__input"
                ),
                (@suffix.present? ? tag.span(@suffix, class: "ui-input-group__suffix") : nil)
              ].compact)
            end
          ].compact)
        end
      end
    end
  end
end
