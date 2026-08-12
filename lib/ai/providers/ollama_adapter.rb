# frozen_string_literal: true

require_relative "../base_provider"

module Ai
  module Providers
    class OllamaAdapter < Ai::BaseProvider
      attr_reader :endpoint

      def initialize(endpoint: "http://localhost:11434", model: "llama3")
        super(name: "ollama", model: model)
        @endpoint = endpoint
      end

      def complete(prompt:, options: {})
        {
          provider: @name,
          model: @model,
          endpoint: @endpoint,
          text: "Ollama[#{@model}] response for: #{prompt}",
          usage: { prompt_tokens: prompt.length, completion_tokens: 15, total_tokens: prompt.length + 15 }
        }
      end

      def healthy?
        true
      end
    end
  end
end
