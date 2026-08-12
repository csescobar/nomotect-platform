# frozen_string_literal: true

require "test_helper"
require "ai/mcp/gateway"

class AiMcpGatewayTest < ActiveSupport::TestCase
  test "registers and executes MCP tool with current context propagation" do
    gateway = Ai::Mcp::Gateway.new

    gateway.register_tool(
      name: "echo_context",
      description: "Echoes active user and organization context"
    ) do |_params|
      {
        user: Current.user&.id || "guest",
        org: Current.organization&.id || "system"
      }
    end

    result = gateway.invoke_tool("echo_context", {})
    assert_equal "guest", result[:user]
    assert_equal "system", result[:org]
  end

  test "raises ArgumentError when invoking unregistered tool" do
    gateway = Ai::Mcp::Gateway.new

    assert_raises(ArgumentError) do
      gateway.invoke_tool("non_existent_tool", {})
    end
  end
end
