# frozen_string_literal: true

require "test_helper"
require "ai/mcp/action_executor"
require "ai/mcp/tool_registry"

class AiActionExecutorTest < ActiveSupport::TestCase
  test "requires confirmation for mutating write actions when confirmation_required is true" do
    registry = Ai::Mcp::ToolRegistry.instance
    registry.register(
      name: "tickets.create",
      permission: "tickets.create",
      risk: "write",
      confirmation_required: true
    ) do |params|
      { ticket_id: 101, title: params[:title] }
    end

    executor = Ai::Mcp::ActionExecutor.new(tool_registry: registry)

    # Without confirmation
    result_pending = executor.execute(tool_name: "tickets.create", params: { title: "Bug" }, confirmed: false)
    assert_equal "PUDING_CONFIRMATION", result_pending[:status]

    # With confirmation
    result_confirmed = executor.execute(tool_name: "tickets.create", params: { title: "Bug" }, confirmed: true)
    assert_equal "EXECUTED", result_confirmed[:status]
    assert_equal 101, result_confirmed[:result][:ticket_id]
  end
end
