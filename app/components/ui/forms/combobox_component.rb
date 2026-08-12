# frozen_string_literal: true

module Ui
  module Forms
    class ComboboxComponent < Ui::BaseComponent
      def initialize(name:, options:, selected: nil, placeholder: "Select an option...", html_options: {})
        raise ArgumentError, "options must not be empty" if options.blank?

        @name = name
        @options = options
        @selected = selected.to_s
        @placeholder = placeholder
        @html_options = html_options
      end

      def call
        selected_option = @options.find { |opt| opt[:value].to_s == @selected }
        display_label = selected_option ? selected_option[:label] : ""

        tag.div(
          **merged_html_options(
            class: "ui-combobox",
            data: { controller: "combobox" }
          )
        ) do
          safe_join([
            tag.input(type: "hidden", name: @name, value: @selected, data: { combobox_target: "hiddenInput" }),
            render_visible_input(display_label),
            render_chevron_icon,
            render_listbox
          ])
        end
      end

      private

      def render_visible_input(display_label)
        tag.input(
          type: "text",
          role: "combobox",
          value: display_label,
          placeholder: @placeholder,
          aria: { label: @placeholder || "Select option", expanded: false, autocomplete: "list" },
          class: "ui-combobox__input",
          data: {
            combobox_target: "input",
            action: "focus->combobox#open input->combobox#filter keydown->combobox#navigate"
          }
        )
      end

      def render_chevron_icon
        tag.svg(
          class: "ui-combobox__chevron",
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        ) do
          tag.path(
            d: "M4 6L8 10L12 6",
            stroke: "currentColor",
            "stroke-width": "1.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          )
        end
      end

      def render_listbox
        tag.ul(
          role: "listbox",
          class: "ui-combobox__listbox",
          data: { combobox_target: "listbox" }
        ) do
          safe_join(@options.map { |option| render_option(option) })
        end
      end

      def render_option(option)
        val = option[:value].to_s
        is_selected = val == @selected

        tag.li(
          option[:label],
          role: "option",
          class: class_names("ui-combobox__option", ("ui-combobox__option--selected" if is_selected)),
          aria: { selected: is_selected },
          data: {
            value: val,
            action: "click->combobox#select"
          }
        )
      end
    end
  end
end
