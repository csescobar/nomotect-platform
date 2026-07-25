class LocalePreferencesController < ApplicationController
  def update
    locale = params.require(:locale)

    unless Localization::SupportedLocales.include?(locale)
      redirect_back fallback_location: root_path, alert: I18n.t("localization.unsupported")
      return
    end

    Current.user.update!(locale: locale)
    redirect_back fallback_location: root_path, notice: I18n.t("localization.updated", locale: Localization::SupportedLocales.fetch(locale).label)
  end
end
