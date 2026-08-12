# frozen_string_literal: true

module Ui
  module Syncfusion
    class DialogComponent < Ui::BaseComponent
      def initialize(title: nil, visible: false, width: "24rem", html_options: {})
        @title = title
        @visible = !!visible
        @width = width
        @html_options = html_options
      end

      def call
        tag.div(
          **merged_html_options(
            class: class_names("e-dialog", "ej2-dialog-component", ("e-popup-open" if @visible)),
            data: {
              controller: "ej2-dialog",
              ej2_dialog_visible_value: @visible
            }
          )
        ) do
          safe_join([
            render_header,
            (tag.div(content, class: "e-dlg-content") if content.present?)
          ].compact)
        end
      end

      private

      def render_header
        return if @title.blank?

        tag.div(class: "e-dlg-header-content") do
          tag.div(@title, class: "e-dlg-header")
        end
      end
    end
  end
end
