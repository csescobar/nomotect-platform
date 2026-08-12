# frozen_string_literal: true

module Ui
  class PopoverComponent < BaseComponent
    renders_one :trigger_slot
    renders_one :body_slot

    PLACEMENTS = %i[top bottom left right].freeze

    def initialize(title: nil, placement: :bottom, html_options: {})
      @title = title
      @placement = placement.to_sym
      @html_options = html_options

      validate_option!(:placement, @placement, PLACEMENTS)
    end

    def call
      tag.div(
        **merged_html_options(
          class: "popover",
          data: { controller: "popover" }
        )
      ) do
        safe_join([
          render_trigger_slot,
          render_panel_slot
        ])
      end
    end

    private

    def render_trigger_slot
      tag.div(
        trigger_slot,
        class: "popover__trigger",
        aria: { expanded: false, haspopup: "dialog" },
        data: { action: "click->popover#toggle" }
      )
    end

    def render_panel_slot
      tag.div(
        role: "dialog",
        class: class_names("popover__panel", "popover__panel--#{@placement}"),
        data: { popover_target: "panel" }
      ) do
        safe_join([
          (tag.div(@title, class: "popover__title") if @title.present?),
          (tag.div(body_slot, class: "popover__body") if body_slot?)
        ].compact)
      end
    end
  end
end
