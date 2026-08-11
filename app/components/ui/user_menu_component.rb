# frozen_string_literal: true

module Ui
  class UserMenuComponent < BaseComponent
    def initialize(name:, avatar_src: nil, role: nil, links: [], html_options: {})
      raise ArgumentError, "name must not be blank" if name.blank?

      @name = name
      @avatar_src = avatar_src
      @role = role
      @links = links
      @html_options = html_options
    end

    def call
      tag.div(
        **merged_html_options(
          class: "user-menu",
          data: { controller: "user-menu" }
        )
      ) do
        safe_join([
          render_trigger,
          render_dropdown
        ])
      end
    end

    private

    def render_trigger
      tag.button(
        type: "button",
        class: "user-menu__trigger",
        aria: { expanded: false, haspopup: "menu" },
        data: { action: "click->user-menu#toggle" }
      ) do
        safe_join([
          render(Ui::AvatarComponent.new(name: @name, src: @avatar_src, size: :sm)),
          tag.span(@name, class: "user-menu__name"),
          (render(Ui::RoleBadgeComponent.new(role: @role, size: :small)) if @role.present?)
        ].compact)
      end
    end

    def render_dropdown
      tag.div(
        role: "menu",
        class: "user-menu__dropdown",
        data: { user_menu_target: "dropdown" }
      ) do
        safe_join(@links.map { |link| render_link(link) })
      end
    end

    def render_link(link)
      link_to(
        link[:label],
        link[:href],
        role: "menuitem",
        class: "user-menu__link",
        data: (link[:method] ? { turbo_method: link[:method] } : {})
      )
    end
  end
end
