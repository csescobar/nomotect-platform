# frozen_string_literal: true

require "audit/event_logger"

module Ai
  module Mcp
    class Gateway
      def initialize
        @tools = {}
      end

      def register_tool(name:, description: nil, &block)
        tool_name = name.to_s
        @tools[tool_name] = {
          name: tool_name,
          description: description,
          handler: block
        }
      end

      def invoke_tool(name, params = {})
        tool_name = name.to_s
        tool = @tools[tool_name]
        raise ArgumentError, "Unregistered MCP tool '#{tool_name}'" unless tool

        Audit::EventLogger.log(
          event_type: "ai.mcp.tool_invoked",
          actor: Current.user&.id || "ai_assistant",
          organization_id: Current.organization&.id,
          action: "invoke_tool",
          target: tool_name,
          result: "success"
        )

        tool[:handler].call(params)
      end

      def registered_tools
        @tools.values.map { |t| { name: t[:name], description: t[:description] } }
      end
    end
  end
end
