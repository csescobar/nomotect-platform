# frozen_string_literal: true

require "singleton"

module Governance
  class PolicyRegistry
    include Singleton

    ALLOWED_DOMAINS = %w[
      organization_settings
      security_policies
      session_policies
      authentication_policies
      data_retention_policies
      audit_retention_policies
      export_policies
      file_policies
      integration_policies
      ai_policies
    ].freeze

    def initialize
      @policies = {}
      seed_defaults
    end

    def register(domain, rules = {})
      domain_str = domain.to_s
      unless ALLOWED_DOMAINS.include?(domain_str)
        raise ArgumentError, "Domain '#{domain}' is not in approved governance domain list"
      end

      @policies[domain_str] = { enabled: true, rules: rules, registered_at: Time.now.utc.iso8601 }
    end

    def fetch(domain)
      domain_str = domain.to_s
      unless ALLOWED_DOMAINS.include?(domain_str)
        raise ArgumentError, "Domain '#{domain}' is not in approved governance domain list"
      end

      @policies[domain_str]
    end

    def all_domains
      ALLOWED_DOMAINS
    end

    private

    def seed_defaults
      ALLOWED_DOMAINS.each do |domain|
        @policies[domain] = {
          enabled: true,
          rules: { default_policy: "strict_enforcement" },
          registered_at: Time.now.utc.iso8601
        }
      end
    end
  end
end
