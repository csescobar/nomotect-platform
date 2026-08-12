# frozen_string_literal: true

require_relative "../base_provider"

module Ai
  module Providers
    class NullProvider < Ai::BaseProvider
      def initialize(model: "null-stub")
        super(name: "null_provider", model: model)
      end

      def complete(prompt:, options: {})
        {
          provider: @name,
          model: @model,
          text: "NullProvider response for: #{prompt}",
          usage: { prompt_tokens: prompt.length, completion_tokens: 10, total_tokens: prompt.length + 10 }
        }
      end

      def healthy?
        true
      end
    end
  end
end
