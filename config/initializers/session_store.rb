Rails.application.config.session_store(
  :cookie_store,
  key: "_rails_hotwire_platform_session",
  secure: Rails.env.production?,
  httponly: true,
  same_site: :lax
)
