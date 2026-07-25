module Ui
  class ButtonComponent < ApplicationComponent
    def initialize(label:, href: nil, variant: :primary, type: :button)
      @label = label
      @href = href
      @variant = variant
      @type = type
    end

    def call
      classes = "button button--#{@variant}"

      if @href
        link_to @label, @href, class: classes
      else
        tag.button @label, class: classes, type: @type
      end
    end
  end
end
