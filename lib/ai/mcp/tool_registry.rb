# frozen_string_literal: true

require "singleton"

module Ai
  module Mcp
    class ToolRegistry
      include Singleton

      def initialize
        @tools = {}
      end

      def register(name:, permission: nil, risk: "read", confirmation_required: false, tenant_scoped: true, description: nil, &block)
        tool_name = name.to_s
        @tools[tool_name] = {
          name: tool_name,
          permission: permission,
          risk: risk.to_s,
          confirmation_required: confirmation_required,
          tenant_scoped: tenant_scoped,
          description: description,
          handler: block
        }
      end

      def fetch(name)
        @tools[name.to_s]
      end

      def authorized?(name, user = Current.user)
        tool = fetch(name)
        return false unless tool
        return true if tool[:permission].blank?

        if user.respond_to?(:has_permission?)
          user.has_permission?(tool[:permission])
        else
          true
        end
      end

      def all_tools
        @tools.values
      end
    end
  end
end
