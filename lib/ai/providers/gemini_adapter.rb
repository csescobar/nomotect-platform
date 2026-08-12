# frozen_string_literal: true

require_relative "../base_provider"

module Ai
  module Providers
    class GeminiAdapter < Ai::BaseProvider
      def initialize(api_key: nil, model: "gemini-1.5-flash")
        super(name: "gemini", model: model)
        @api_key = api_key || ENV["GEMINI_API_KEY"]
      end

      def complete(prompt:, options: {})
        {
          provider: @name,
          model: @model,
          text: "Gemini[#{@model}] response for: #{prompt}",
          usage: { prompt_tokens: prompt.length, completion_tokens: 15, total_tokens: prompt.length + 15 }
        }
      end

      def healthy?
        @api_key.present? || Rails.env.test?
      end
    end
  end
end
