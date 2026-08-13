# frozen_string_literal: true

module Ui
  module Syncfusion
    class FieldComponent < Ui::BaseComponent
      def initialize(
        label: nil,
        required: false,
        hint: nil,
        errors: [],
        html_options: {}
      )
        @label = label
        @required = !!required
        @hint = hint
        @errors = Array(errors)
        @html_options = html_options
      end

      def call
        tag.div(
          **merged_html_options(
            class: class_names("ej2-field", ("ej2-field--invalid" if @errors.present?))
          )
        ) do
          safe_join([
            label_markup,
            content,
            hint_markup,
            errors_markup
          ].compact)
        end
      end

      private

      def label_markup
        return if @label.blank?

        text = @required ? "#{@label} *" : @label
        tag.label(text, class: "ej2-field__label")
      end

      def hint_markup
        return if @hint.blank?

        tag.span(@hint, class: "ej2-field__hint")
      end

      def errors_markup
        return if @errors.blank?

        tag.div(class: "ej2-field__errors") do
          safe_join(@errors.map { |err| tag.span(err, class: "ej2-field__error") })
        end
      end
    end
  end
end
