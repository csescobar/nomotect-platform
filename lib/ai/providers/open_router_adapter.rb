# frozen_string_literal: true

require_relative "../base_provider"

module Ai
  module Providers
    class OpenRouterAdapter < Ai::BaseProvider
      attr_reader :api_key, :site_url, :site_name

      def initialize(api_key: nil, model: "openrouter/auto", site_url: "https://nomotect.platform", site_name: "NomoTect Platform")
        super(name: "open_router", model: model)
        @api_key = api_key || ENV["OPENROUTER_API_KEY"]
        @site_url = site_url
        @site_name = site_name
      end

      def complete(prompt:, options: {})
        # Returns formatted OpenRouter payload structure
        {
          provider: @name,
          model: @model,
          endpoint: "https://openrouter.ai/api/v1/chat/completions",
          headers: {
            "Authorization" => "Bearer #{@api_key}",
            "HTTP-Referer" => @site_url,
            "X-Title" => @site_name
          },
          text: "OpenRouter[#{@model}] response for: #{prompt}",
          usage: { prompt_tokens: prompt.length, completion_tokens: 15, total_tokens: prompt.length + 15 }
        }
      end

      def healthy?
        @api_key.present? || Rails.env.test?
      end
    end
  end
end
