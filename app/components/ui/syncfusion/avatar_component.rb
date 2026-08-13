# frozen_string_literal: true

module Ui
  module Syncfusion
    class AvatarComponent < Ui::BaseComponent
      def initialize(
        initials: nil,
        src: nil,
        size: :md,
        shape: :circle,
        html_options: {}
      )
        @initials = initials
        @src = src
        @size = size
        @shape = shape
        @html_options = html_options
      end

      def call
        tag.div(
          **merged_html_options(
            class: class_names(
              "ej2-avatar",
              "ej2-avatar--#{@size}",
              "ej2-avatar--#{@shape}"
            )
          )
        ) do
          if @src.present?
            tag.img(src: @src, alt: "Avatar", class: "ej2-avatar__img")
          else
            tag.span(@initials, class: "ej2-avatar__text")
          end
        end
      end
    end
  end
end
