class LocalePreferencesController < ApplicationController
  def update
    locale = params.require(:locale)

    unless Localization::SupportedLocales.include?(locale)
      redirect_back fallback_location: root_path, status: :see_other, alert: I18n.t("localization.unsupported")
      return
    end

    Current.user.update!(locale: locale)
    locale_name = Localization::SupportedLocales.fetch(locale).label
    redirect_back fallback_location: root_path, status: :see_other, notice: I18n.t("localization.updated", locale_name: locale_name)
  end
end
