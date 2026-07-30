require_relative "boot"

require "rails/all"

Bundler.require(*Rails.groups)

module NomoTect
  class Application < Rails::Application
    config.load_defaults 8.1
    config.autoload_lib(ignore: %w[assets tasks])

    config.time_zone = "UTC"
    config.active_record.default_timezone = :utc
    config.i18n.available_locales = [ :en, :"pt-BR" ]
    config.i18n.default_locale = :en
    config.i18n.fallbacks = true

    config.generators.system_tests = nil
    config.action_controller.include_all_helpers = false

    config.filter_parameters += %i[
      password password_confirmation token secret authorization cookie
    ]
  end
end
