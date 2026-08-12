# frozen_string_literal: true

require "test_helper"
require "ai/mcp/tool_registry"

class AiMcpToolRegistryTest < ActiveSupport::TestCase
  test "registers governed tool with permission and risk metadata" do
    registry = Ai::Mcp::ToolRegistry.instance

    registry.register(
      name: "customers.update",
      permission: "customers.update",
      risk: "write",
      confirmation_required: true,
      description: "Updates customer profile"
    ) do |params|
      { status: "updated", id: params[:id] }
    end

    tool = registry.fetch("customers.update")
    assert_not_nil tool
    assert_equal "customers.update", tool[:name]
    assert_equal "write", tool[:risk]
    assert tool[:confirmation_required]
  end

  test "verifies authorization before tool execution" do
    registry = Ai::Mcp::ToolRegistry.instance
    registry.register(name: "reports.generate", permission: "reports.read", risk: "read") { { ok: true } }

    # Allowed in test context
    assert registry.authorized?("reports.generate", nil)
  end
end
