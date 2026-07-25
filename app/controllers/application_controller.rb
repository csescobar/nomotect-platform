class ApplicationController < ActionController::Base
  include Authentication
  include Authorization

  helper LocalizationHelper

  before_action :set_request_context
  around_action :switch_localization

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  rescue_from ApplicationPolicy::NotAuthorizedError, with: :render_forbidden

  private

  def set_request_context
    Current.request_id = request.request_id
    Current.correlation_id = request.headers["X-Correlation-ID"].presence || request.request_id
  end

  def switch_localization(&action)
    locale = resolved_locale
    time_zone = Current.user&.time_zone.presence || Localization::SupportedLocales.fetch(locale).time_zone

    I18n.with_locale(locale) do
      Time.use_zone(time_zone) do
        Current.locale = locale
        action.call
      end
    end
  end

  def resolved_locale
    requested = params[:locale].presence
    return requested if Localization::SupportedLocales.include?(requested)

    preferred = Current.user&.locale.presence
    return preferred if Localization::SupportedLocales.include?(preferred)

    Localization::SupportedLocales.default.code
  end

  def render_not_found
    render plain: I18n.t("errors.not_found"), status: :not_found
  end

  def render_forbidden
    render plain: I18n.t("errors.forbidden"), status: :forbidden
  end
end
