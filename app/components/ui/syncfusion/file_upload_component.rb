# frozen_string_literal: true

module Ui
  module Syncfusion
    class FileUploadComponent < Ui::BaseComponent
      def initialize(name:, label: nil, multiple: false, allowed_extensions: nil, disabled: false, input_id: nil, help_text: nil, errors: [], html_options: {})
        @name = name
        @label = label
        @multiple = !!multiple
        @allowed_extensions = allowed_extensions
        @disabled = !!disabled
        @input_id = input_id || "ej2_uploader_#{SecureRandom.hex(4)}"
        @help_text = help_text
        @errors = Array(errors)
        @html_options = html_options
      end

      def call
        tag.div(
          **merged_html_options(
            class: class_names("ui-field", "ej2-uploader-wrapper", ("ui-field--invalid" if @errors.any?)),
            data: {
              controller: "ej2-uploader",
              ej2_uploader_multiple_value: @multiple,
              ej2_uploader_allowed_extensions_value: @allowed_extensions
            }
          )
        ) do
          safe_join([
            label_markup,
            tag.input(
              type: "file",
              id: @input_id,
              name: @name,
              multiple: (@multiple ? "multiple" : nil),
              disabled: (@disabled ? "disabled" : nil)
            ),
            help_markup,
            error_markup
          ].compact)
        end
      end

      private

      def label_markup
        return if @label.blank?

        tag.label(@label, for: @input_id, class: "ej2-form-group__label")
      end

      def help_markup
        return if @help_text.blank?

        tag.p(@help_text, class: "ej2-form-group__help")
      end

      def error_markup
        return if @errors.empty?

        tag.ul(class: "ui-field__errors") { safe_join(@errors.map { |err| tag.li(err) }) }
      end
    end
  end
end
