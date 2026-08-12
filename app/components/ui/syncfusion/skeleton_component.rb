# frozen_string_literal: true

module Ui
  module Syncfusion
    class SkeletonComponent < Ui::BaseComponent
      SHAPES = %i[text circle square rectangle].freeze

      def initialize(shape: :text, width: nil, height: nil, html_options: {})
        @shape = shape.to_sym
        @width = width
        @height = height
        @html_options = html_options
      end

      def call
        data_attrs = {
          controller: "ej2-skeleton"
        }.tap do |d|
          d[:skeleton_width_value] = @width if @width
          d[:skeleton_height_value] = @height if @height
        end

        tag.div(
          **merged_html_options(
            class: class_names("e-skeleton", "e-skeleton-#{@shape}"),
            data: data_attrs,
            aria: { hidden: true }
          )
        )
      end
    end
  end
end
