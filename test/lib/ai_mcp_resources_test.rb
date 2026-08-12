# frozen_string_literal: true

require "test_helper"
require "ai/mcp/resources"

class AiMcpResourcesTest < ActiveSupport::TestCase
  test "reads nomotect://current-user resource" do
    provider = Ai::Mcp::Resources.new
    res = provider.read("nomotect://current-user")

    assert_equal "nomotect://current-user", res[:uri]
    assert_not_nil res[:content]
  end

  test "reads nomotect://current-organization resource" do
    provider = Ai::Mcp::Resources.new
    res = provider.read("nomotect://current-organization")

    assert_equal "nomotect://current-organization", res[:uri]
    assert_not_nil res[:content]
  end

  test "reads nomotect://current-context resource" do
    provider = Ai::Mcp::Resources.new
    res = provider.read("nomotect://current-context")

    assert_equal "nomotect://current-context", res[:uri]
    assert_not_nil res[:content][:locale]
  end

  test "reads nomotect://permissions resource" do
    provider = Ai::Mcp::Resources.new
    res = provider.read("nomotect://permissions")

    assert_equal "nomotect://permissions", res[:uri]
    assert_kind_of Array, res[:content][:permissions]
  end

  test "raises ArgumentError for invalid nomotect URI" do
    provider = Ai::Mcp::Resources.new

    assert_raises(ArgumentError) do
      provider.read("nomotect://invalid-resource")
    end
  end
end
