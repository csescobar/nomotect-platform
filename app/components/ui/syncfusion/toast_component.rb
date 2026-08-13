# frozen_string_literal: true

module Ui
  module Syncfusion
    class ToastComponent < Ui::BaseComponent
      def initialize(
        title: nil,
        message: nil,
        type: :info,
        timeout: 4000,
        target_id: nil,
        html_options: {}
      )
        @title = title
        @message = message
        @type = type
        @timeout = timeout
        @target_id = target_id || "ej2_toast_#{SecureRandom.hex(4)}"
        @html_options = html_options
      end

      def call
        tag.div(
          id: @target_id,
          **merged_html_options(
            class: "ui-field ej2-toast-wrapper",
            data: {
              controller: "ej2-toast",
              ej2_toast_title_value: @title,
              ej2_toast_content_value: @message,
              ej2_toast_type_value: @type.to_s,
              ej2_toast_timeout_value: @timeout
            }
          )
        )
      end
    end
  end
end
