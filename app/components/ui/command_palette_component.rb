# frozen_string_literal: true

module Ui
  class CommandPaletteComponent < BaseComponent
    def initialize(items:, placeholder: "Search commands…", html_options: {})
      raise ArgumentError, "items must not be empty" if items.blank?

      @items = items
      @placeholder = placeholder
      @html_options = html_options
    end

    def call
      safe_join([ render_trigger, render_dialog ])
    end

    private

    def render_trigger
      tag.button(
        class: "command-palette__trigger",
        aria: { label: "Open command palette" },
        data: { action: "click->command-palette#open" }
      ) do
        safe_join([
          tag.span("Search…", class: "command-palette__trigger-label"),
          tag.span(class: "command-palette__trigger-hint") do
            safe_join([
              tag.kbd("⌘", class: "command-palette__kbd"),
              tag.kbd("K", class: "command-palette__kbd")
            ])
          end
        ])
      end
    end

    def render_dialog
      tag.dialog(
        class: "command-palette",
        aria: { label: "Command palette", modal: true },
        data: {
          controller: "command-palette",
          "command-palette-items-value": items_json
        }
      ) do
        safe_join([ render_search_input, render_results ])
      end
    end

    def render_search_input
      tag.div(class: "command-palette__search") do
        tag.input(
          type: "search",
          role: "combobox",
          placeholder: @placeholder,
          class: "command-palette__input",
          aria: {
            label: "Search commands",
            autocomplete: "list",
            controls: "command-palette-results",
            expanded: false
          },
          data: {
            command_palette_target: "input",
            action: "input->command-palette#filter keydown->command-palette#navigate"
          }
        )
      end
    end

    def render_results
      tag.ul(
        id: "command-palette-results",
        role: "listbox",
        class: "command-palette__results",
        data: { command_palette_target: "results" }
      ) do
        grouped_items.flat_map do |group, group_items|
          [
            tag.li(group, class: "command-palette__group-label", role: "presentation"),
            *group_items.map { |item| render_item(item) }
          ]
        end.then { |nodes| safe_join(nodes) }
      end
    end

    def render_item(item)
      tag.li(
        role: "option",
        class: "command-palette__item",
        data: { keywords: item[:keywords].to_s }
      ) do
        link_to(item[:label], item[:href], class: "command-palette__item-link")
      end
    end

    def grouped_items
      @items.group_by { |item| item[:group].to_s }
    end

    def items_json
      @items.to_json
    end
  end
end
