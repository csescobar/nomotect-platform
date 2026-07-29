module ApplicationHelper
  # Returns the configured platform name from the Installation AppearanceStore.
  # Falls back to the I18n key "application.name" if the store is unavailable
  # (e.g. before first-run installation completes).
  # The result is memoized per request via @_platform_name.
  def platform_name
    @_platform_name ||= begin
      Installation::AppearanceStore.new.read["application_name"].presence
    rescue StandardError
      nil
    end || I18n.t("application.name")
  end
end
