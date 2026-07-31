# frozen_string_literal: true

module OperationalReadiness
  class DefaultDiagnosticCollectors
    CONFIGURATION_KEYS = %w[
      DATABASE_URL
      DEPLOYMENT_PROFILE
      INSTALLATION_ENABLED
      REDIS_URL
      SECRET_KEY_BASE
    ].freeze

    def initialize(installed_state: -> { Upgrades::InstalledStateDetector.new.call }, environment: ENV)
      @installed_state = installed_state
      @environment = environment
    end

    def registry
      DiagnosticCollectorRegistry.new
        .register("platform") { installed_state.call }
        .register("configuration") { configuration_presence }
    end

    private

    attr_reader :installed_state, :environment

    def configuration_presence
      {
        "keys" => CONFIGURATION_KEYS.to_h do |name|
          [ name, { "configured" => environment[name].present? } ]
        end
      }
    end
  end
end
