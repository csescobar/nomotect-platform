# frozen_string_literal: true

require "audit/event_logger"

module Ai
  module Mcp
    class ActionExecutor
      def initialize(tool_registry: ToolRegistry.instance)
        @tool_registry = tool_registry
      end

      def execute(tool_name:, params: {}, confirmed: false)
        tool = @tool_registry.fetch(tool_name)
        raise ArgumentError, "Unregistered tool '#{tool_name}'" unless tool

        unless @tool_registry.authorized?(tool_name)
          raise SecurityError, "Unauthorized tool execution for '#{tool_name}'"
        end

        if tool[:confirmation_required] && !confirmed
          return {
            status: "PUDING_CONFIRMATION",
            tool_name: tool_name,
            params: params,
            message: "Action '#{tool_name}' requires explicit user confirmation before execution."
          }
        end

        result = tool[:handler].call(params)

        Audit::EventLogger.log(
          event_type: "ai.action.executed",
          actor: Current.user&.id || "ai_assistant",
          organization_id: Current.organization&.id,
          action: tool_name,
          result: "success",
          after_state: { risk: tool[:risk], params: params }
        )

        {
          status: "EXECUTED",
          tool_name: tool_name,
          result: result
        }
      end
    end
  end
end
