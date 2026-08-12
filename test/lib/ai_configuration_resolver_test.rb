# frozen_string_literal: true

require "test_helper"
require "ai/configuration_resolver"

class AiConfigurationResolverTest < ActiveSupport::TestCase
  test "resolves default provider when no tenant override is present" do
    resolver = Ai::ConfigurationResolver.new
    config = resolver.resolve_for(nil)

    assert_equal "null", config[:provider]
    assert_not_nil config[:model]
  end

  test "instantiates provider instance from configuration" do
    resolver = Ai::ConfigurationResolver.new
    provider = resolver.build_provider(provider: "open_router", api_key: "key_123", model: "deepseek/deepseek-r1")

    assert_equal "open_router", provider.name
    assert_equal "deepseek/deepseek-r1", provider.model
  end
end
