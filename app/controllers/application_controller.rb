class ApplicationController < ActionController::Base
  include Authentication
  include Authorization

  before_action :set_request_context
  around_action :switch_locale

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  rescue_from ApplicationPolicy::NotAuthorizedError, with: :render_forbidden

  private

  def set_request_context
    Current.request_id = request.request_id
    Current.correlation_id = request.headers["X-Correlation-ID"].presence || request.request_id
    Current.locale = I18n.locale
  end

  def switch_locale(&action)
    locale = params[:locale].presence || Current.user&.locale.presence || I18n.default_locale
    I18n.with_locale(locale, &action)
  end

  def render_not_found
    render plain: I18n.t("errors.not_found"), status: :not_found
  end

  def render_forbidden
    render plain: I18n.t("errors.forbidden"), status: :forbidden
  end
end
