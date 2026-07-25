class HealthController < ActionController::Base
  def show
    ActiveRecord::Base.connection.select_value("SELECT 1")

    render json: {
      status: "ok",
      service: "rails-hotwire-platform",
      version: ENV.fetch("APP_VERSION", "development"),
      timestamp: Time.current.utc.iso8601
    }
  rescue StandardError => error
    Rails.logger.error(
      event: "health_check.failed",
      error_class: error.class.name,
      request_id: request.request_id
    )

    render json: { status: "unavailable", request_id: request.request_id },
      status: :service_unavailable
  end
end
