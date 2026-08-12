# frozen_string_literal: true

module Ui
  module Forms
    class FileUploadComponent < Ui::BaseComponent
      def initialize(name:, label: "Drop files here or click to upload", multiple: false, accept: nil, html_options: {})
        raise ArgumentError, "name must not be blank" if name.blank?

        @name = name
        @label = label
        @multiple = multiple
        @accept = accept
        @html_options = html_options
      end

      def call
        tag.div(
          **merged_html_options(
            class: "ui-file-upload",
            data: { controller: "file-upload" }
          )
        ) do
          safe_join([
            render_dropzone,
            tag.div(class: "ui-file-upload__preview-list", data: { file_upload_target: "previews" })
          ])
        end
      end

      private

      def render_dropzone
        tag.label(class: "ui-file-upload__dropzone") do
          safe_join([
            tag.input(
              type: "file",
              name: @name,
              multiple: @multiple,
              accept: @accept,
              aria: { label: @label },
              class: "ui-file-upload__input",
              data: {
                file_upload_target: "input",
                action: "change->file-upload#handleChange"
              }
            ),
            tag.span(@label, class: "ui-file-upload__label")
          ])
        end
      end
    end
  end
end
