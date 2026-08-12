# frozen_string_literal: true

module Ui
  module Syncfusion
    class RadioGroupComponent < Ui::BaseComponent
      def initialize(name:, legend:, options:, input_id: nil, help_text: nil, errors: [], required: false, html_options: {})
        @name = name
        @legend = legend
        @options = Array(options)
        @input_id = input_id || "ej2_radio_#{SecureRandom.hex(4)}"
        @help_text = help_text
        @errors = Array(errors)
        @required = required
        @html_options = html_options
      end

      def call
        tag.fieldset(
          **merged_html_options(
            class: class_names("ui-field", "ui-radio-group", ("ui-field--invalid" if @errors.any?)),
            data: { controller: "ej2-radio" }
          )
        ) do
          safe_join([
            tag.legend(class: "ui-field__label") { safe_join([ @legend, required_markup ].compact, " ") },
            tag.div(class: "ui-radio-group__options") do
              safe_join(@options.each_with_index.map { |opt, idx| render_radio_option(opt, idx) })
            end,
            help_markup,
            error_markup
          ].compact)
        end
      end

      private

      def render_radio_option(option, index)
        opt_id = "#{@input_id}_#{index}"
        opt_value = option[:value] || option["value"]
        opt_label = option[:label] || option["label"]
        opt_checked = !!(option[:checked] || option["checked"])
        opt_disabled = !!(option[:disabled] || option["disabled"])

        tag.label(for: opt_id, class: "ui-radio-option e-radio-wrapper") do
          safe_join([
            tag.input(
              type: "radio",
              id: opt_id,
              name: @name,
              value: opt_value,
              class: "e-radio",
              checked: (opt_checked ? "checked" : nil),
              disabled: (opt_disabled ? "disabled" : nil)
            ),
            tag.span(class: "e-frame"),
            tag.span(opt_label, class: "e-label")
          ])
        end
      end

      def required_markup
        return unless @required

        tag.span("*", class: "ui-field__required", aria: { hidden: true })
      end

      def help_markup
        return if @help_text.blank?

        tag.p(@help_text, class: "ui-field__help")
      end

      def error_markup
        return if @errors.empty?

        tag.ul(class: "ui-field__errors") { safe_join(@errors.map { |err| tag.li(err) }) }
      end
    end
  end
end
