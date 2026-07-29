module Ui
  class LocaleSwitcherComponent < BaseComponent
    def initialize(current_locale:, action:, html_options: {})
      @current_locale = Localization::SupportedLocales.fetch(current_locale).code
      @action = action
      @html_options = html_options
    end

    def call
      form_with(url: @action, method: :patch, html: merged_html_options(class: "theme-switcher locale-switcher", data: { controller: "auto-submit" })) do |form|
        safe_join([
          form.label(:locale, I18n.t("localization.label"), class: "theme-switcher__label locale-switcher__label"),
          form.select(
            :locale,
            Localization::SupportedLocales.options,
            { selected: @current_locale },
            class: "theme-switcher__select locale-switcher__select",
            aria: { label: I18n.t("localization.label") },
            data: { action: "change->auto-submit#submit" }
          ),
          tag.noscript(form.submit(I18n.t("localization.apply"), class: "button button--secondary button--small"))
        ])
      end
    end
  end
end
