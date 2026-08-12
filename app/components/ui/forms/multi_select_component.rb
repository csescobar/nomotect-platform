# frozen_string_literal: true

module Ui
  module Forms
    class MultiSelectComponent < Ui::BaseComponent
      def initialize(name:, options:, selected: [], placeholder: "Select options...", html_options: {})
        raise ArgumentError, "options must not be empty" if options.blank?

        @name = name
        @options = options
        @selected = Array(selected).map(&:to_s)
        @placeholder = placeholder
        @html_options = html_options
      end

      def call
        tag.div(
          **merged_html_options(
            class: "ui-multi-select",
            data: { controller: "multi-select" }
          )
        ) do
          safe_join([
            render_hidden_inputs,
            render_trigger_box,
            render_dropdown
          ])
        end
      end

      private

      def render_hidden_inputs
        tag.div(data: { multi_select_target: "hiddenContainer" }) do
          safe_join(@selected.map { |val| tag.input(type: "hidden", name: "#{@name}[]", value: val) })
        end
      end

      def render_trigger_box
        selected_options = @options.select { |opt| @selected.include?(opt[:value].to_s) }

        tag.div(
          class: "ui-multi-select__trigger",
          data: { action: "click->multi-select#toggle" }
        ) do
          safe_join([
            render_chips(selected_options),
            (tag.span(@placeholder, class: "ui-multi-select__placeholder") if selected_options.empty?)
          ].compact)
        end
      end

      def render_chips(selected_options)
        return if selected_options.empty?

        tag.div(class: "ui-multi-select__chips") do
          safe_join(selected_options.map { |opt| render_chip(opt) })
        end
      end

      def render_chip(opt)
        tag.span(class: "ui-multi-select__chip") do
          safe_join([
            tag.span(opt[:label], class: "ui-multi-select__chip-label"),
            tag.input(
              type: "text",
              placeholder: @placeholder,
              aria: { label: @placeholder || "Select multiple options" },
              class: "ui-multi-select__input",
              data: {
                multi_select_target: "input",
                action: "focus->multi-select#open click->multi-select#open input->multi-select#filter"
              }
            ),
            tag.button(
              "×",
              type: "button",
              class: "ui-multi-select__chip-remove",
              aria: { label: "Remove #{opt[:label]}" },
              data: { action: "click->multi-select#remove", value: opt[:value].to_s }
            )
          ])
        end
      end

      def render_dropdown
        tag.ul(
          role: "listbox",
          class: "ui-multi-select__dropdown",
          data: { multi_select_target: "dropdown" }
        ) do
          safe_join(@options.map { |opt| render_option(opt) })
        end
      end

      def render_option(opt)
        val = opt[:value].to_s
        is_selected = @selected.include?(val)

        tag.li(
          opt[:label],
          role: "option",
          class: class_names("ui-multi-select__option", ("ui-multi-select__option--selected" if is_selected)),
          aria: { selected: is_selected },
          data: {
            value: val,
            action: "click->multi-select#select"
          }
        )
      end
    end
  end
end
