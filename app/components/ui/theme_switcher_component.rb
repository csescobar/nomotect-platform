module Ui
  class ThemeSwitcherComponent < ApplicationComponent
    OPTIONS = %w[system light dark].freeze

    def call
      tag.div(data: { controller: "theme" }, class: "theme-switcher") do
        safe_join([
          tag.label(I18n.t("theme.label"), for: "theme-preference", class: "theme-switcher__label"),
          tag.select(
            options_for_select(OPTIONS.map { |theme| [ I18n.t("theme.#{theme}"), theme ] }),
            id: "theme-preference",
            class: "theme-switcher__select",
            data: { theme_target: "select", action: "theme#change" }
          )
        ])
      end
    end
  end
end
