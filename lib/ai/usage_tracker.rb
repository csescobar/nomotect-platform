# frozen_string_literal: true

require "audit/event_logger"

module Ai
  class UsageTracker
    class << self
      def track(provider:, model:, prompt_tokens:, completion_tokens:, organization_id: nil)
        total_tokens = prompt_tokens.to_i + completion_tokens.to_i

        Audit::EventLogger.log(
          event_type: "ai.request.completed",
          actor: "ai_runtime",
          organization_id: organization_id,
          action: "ai_completion",
          target: "#{provider}:#{model}",
          result: "success",
          after_state: {
            prompt_tokens: prompt_tokens,
            completion_tokens: completion_tokens,
            total_tokens: total_tokens
          }
        )

        {
          provider: provider,
          model: model,
          prompt_tokens: prompt_tokens,
          completion_tokens: completion_tokens,
          total_tokens: total_tokens
        }
      end
    end
  end
end
