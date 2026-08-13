# frozen_string_literal: true

module Ui
  module Syncfusion
    class BadgeComponent < Ui::BaseComponent
      def initialize(
        text:,
        variant: :primary,
        size: :md,
        html_options: {}
      )
        @text = text
        @variant = variant
        @size = size
        @html_options = html_options
      end

      def call
        tag.span(
          @text,
          **merged_html_options(
            class: class_names(
              "ej2-badge",
              "ej2-badge--#{@variant}",
              "ej2-badge--#{@size}"
            )
          )
        )
      end
    end
  end
end
