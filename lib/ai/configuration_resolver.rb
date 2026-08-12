# frozen_string_literal: true

require_relative "providers/null_provider"
require_relative "providers/open_router_adapter"
require_relative "providers/open_ai_adapter"
require_relative "providers/anthropic_adapter"
require_relative "providers/gemini_adapter"
require_relative "providers/ollama_adapter"

module Ai
  class ConfigurationResolver
    DEFAULT_CONFIG = {
      provider: "null",
      model: "null-stub"
    }.freeze

    def resolve_for(organization)
      # Future: resolve organization tenant AI configuration overrides
      DEFAULT_CONFIG
    end

    def build_provider(provider:, api_key: nil, model: nil, endpoint: nil)
      case provider.to_s
      when "open_router"
        Ai::Providers::OpenRouterAdapter.new(api_key: api_key, model: model || "openrouter/auto")
      when "open_ai"
        Ai::Providers::OpenAiAdapter.new(api_key: api_key, model: model || "gpt-4o")
      when "anthropic"
        Ai::Providers::AnthropicAdapter.new(api_key: api_key, model: model || "claude-3-5-sonnet")
      when "gemini"
        Ai::Providers::GeminiAdapter.new(api_key: api_key, model: model || "gemini-1.5-flash")
      when "ollama"
        Ai::Providers::OllamaAdapter.new(endpoint: endpoint || "http://localhost:11434", model: model || "llama3")
      else
        Ai::Providers::NullProvider.new(model: model || "null-stub")
      end
    end
  end
end
