# frozen_string_literal: true

require "test_helper"
require "ai/base_provider"
require "ai/providers/null_provider"
require "ai/providers/open_router_adapter"
require "ai/providers/open_ai_adapter"
require "ai/providers/anthropic_adapter"
require "ai/providers/gemini_adapter"
require "ai/providers/ollama_adapter"

class AiProviderInterfaceTest < ActiveSupport::TestCase
  test "NullProvider returns deterministic response and healthy status" do
    provider = Ai::Providers::NullProvider.new
    assert provider.healthy?

    response = provider.complete(prompt: "Hello AI")
    assert_equal "NullProvider response for: Hello AI", response[:text]
    assert_equal "null_provider", response[:provider]
  end

  test "OpenRouterAdapter formats OpenAI-compatible payload and headers" do
    provider = Ai::Providers::OpenRouterAdapter.new(api_key: "test_key", model: "deepseek/deepseek-chat")
    assert_equal "open_router", provider.name
    assert_equal "deepseek/deepseek-chat", provider.model
  end

  test "OpenAiAdapter formats provider payload" do
    provider = Ai::Providers::OpenAiAdapter.new(api_key: "test_key", model: "gpt-4o")
    assert_equal "open_ai", provider.name
    assert_equal "gpt-4o", provider.model
  end

  test "AnthropicAdapter formats provider payload" do
    provider = Ai::Providers::AnthropicAdapter.new(api_key: "test_key", model: "claude-3-5-sonnet")
    assert_equal "anthropic", provider.name
    assert_equal "claude-3-5-sonnet", provider.model
  end

  test "GeminiAdapter formats provider payload" do
    provider = Ai::Providers::GeminiAdapter.new(api_key: "test_key", model: "gemini-1.5-pro")
    assert_equal "gemini", provider.name
    assert_equal "gemini-1.5-pro", provider.model
  end

  test "OllamaAdapter configures local endpoint" do
    provider = Ai::Providers::OllamaAdapter.new(endpoint: "http://localhost:11434", model: "llama3")
    assert_equal "ollama", provider.name
    assert_equal "llama3", provider.model
  end
end
