# frozen_string_literal: true

module ApplicationLayout
  MODES = %i[platform_default application_custom blank].freeze

  class Config
    attr_reader :mode, :custom_navigation_items, :template_path

    def initialize(
      mode: :platform_default,
      showcases_enabled: true,
      custom_navigation_items: [],
      template_path: nil
    )
      mode_sym = mode.to_sym
      unless MODES.include?(mode_sym)
        raise ArgumentError, "Invalid layout mode: #{mode}. Must be one of #{MODES.inspect}"
      end

      @mode = mode_sym
      @showcases_enabled = showcases_enabled
      @custom_navigation_items = Array(custom_navigation_items).freeze
      @template_path = template_path
    end

    def showcases_enabled?
      return false if ENV["NOMOTECT_SHOWCASES_ENABLED"] == "false"

      @showcases_enabled
    end

    def blank?
      mode == :blank
    end

    def custom?
      mode == :application_custom
    end
  end

  class << self
    def config
      @config ||= load_config
    end

    def configure
      config_builder = ConfigBuilder.new
      yield(config_builder) if block_given?
      @config = config_builder.build
    end

    def reset!
      @config = nil
    end

    private

    def load_config
      config_file = Rails.root.join("application/config/layout.rb")
      if File.exist?(config_file)
        load config_file
      end
      @config || Config.new
    end
  end

  class ConfigBuilder
    attr_accessor :mode, :showcases_enabled, :custom_navigation_items, :template_path

    def initialize
      @mode = :platform_default
      @showcases_enabled = true
      @custom_navigation_items = []
      @template_path = nil
    end

    def build
      Config.new(
        mode: mode,
        showcases_enabled: showcases_enabled,
        custom_navigation_items: custom_navigation_items,
        template_path: template_path
      )
    end
  end
end
