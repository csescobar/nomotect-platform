# frozen_string_literal: true

module Ui
  module Forms
    class TagInputComponent < Ui::BaseComponent
      def initialize(name:, tags: [], placeholder: "Add a tag...", html_options: {})
        raise ArgumentError, "name must not be blank" if name.blank?

        @name = name
        @tags = Array(tags)
        @placeholder = placeholder
        @html_options = html_options
      end

      def call
        tag.div(
          **merged_html_options(
            class: "ui-tag-input",
            data: { controller: "tag-input" }
          )
        ) do
          safe_join([
            render_hidden_inputs,
            tag.div(class: "ui-tag-input__container", data: { tag_input_target: "container" }) do
              safe_join([
                *render_tags,
                render_field
              ])
            end
          ])
        end
      end

      private

      def render_hidden_inputs
        tag.div(data: { tag_input_target: "hiddenContainer" }) do
          safe_join(@tags.map { |tag_val| tag.input(type: "hidden", name: "#{@name}[]", value: tag_val) })
        end
      end

      def render_tags
        @tags.map { |tag_val| render_tag(tag_val) }
      end

      def render_tag(tag_val)
        tag.span(class: "ui-tag-input__tag") do
          safe_join([
            tag.span(tag_val, class: "ui-tag-input__tag-label"),
            tag.button(
              "×",
              type: "button",
              class: "ui-tag-input__remove",
              aria: { label: "Remove tag #{tag_val}" },
              data: { action: "click->tag-input#remove", value: tag_val }
            )
          ])
        end
      end

      def render_field
        tag.input(
          type: "text",
          placeholder: @placeholder,
          class: "ui-tag-input__field",
          data: {
            tag_input_target: "input",
            action: "keydown->tag-input#add"
          }
        )
      end
    end
  end
end
