# frozen_string_literal: true

require "test_helper"
require "stringio"
require "tmpdir"
require_relative "../../lib/repository_intelligence/code_graph_provider"
require_relative "../../lib/repository_intelligence/providers/null_provider"
require_relative "../../lib/repository_intelligence/platform"
require_relative "../../lib/repository_intelligence/mcp_server"

class RepositoryIntelligenceTest < ActiveSupport::TestCase
  test "builds a deterministic governance graph and bounded impact result" do
    manifest = {
      files: [
        { path: "app/models/customer.rb", sha256: "a" * 64 },
        { path: "test/models/customer_test.rb", sha256: "b" * 64 },
        { path: "docs/customers.md", sha256: "c" * 64 }
      ]
    }
    provider = RepositoryIntelligence::Providers::NullProvider.new.index(repository_path: Rails.root, repository_commit: "abc")
    graph = RepositoryIntelligence::GovernanceScanner.new(repository_path: Rails.root, manifest:, provider_result: provider).scan

    assert graph.nodes.key?("model:Customer")
    assert graph.nodes.key?("test:Models::Customer")
    assert_operator graph.impact("model:Customer", depth: 2).size, :>=, 1
    assert_equal graph.to_h, graph.to_h
  end

  test "validates contracts and playbooks" do
    Dir.mktmpdir do |directory|
      contracts = File.join(directory, "contracts")
      playbooks = File.join(directory, "playbooks")
      FileUtils.mkdir_p([ contracts, playbooks ])
      File.write(File.join(contracts, "contract.yml"), YAML.dump(
        "id" => "test", "version" => 1, "owns" => [], "may_use" => [], "cannot_use" => [],
        "invariants" => [], "required_tests" => []
      ))
      File.write(File.join(playbooks, "playbook.yml"), YAML.dump(
        "id" => "review", "version" => 1, "title" => "Review", "inputs" => [], "steps" => [], "completion_gate" => []
      ))

      assert_empty RepositoryIntelligence::ContractRegistry.new(contracts).validate
      assert_empty RepositoryIntelligence::PlaybookRegistry.new(playbooks).validate
    end
  end

  test "serves MCP resources and bounded impact tools" do
    graph = RepositoryIntelligence::GovernanceGraph.new
    graph.add_node(RepositoryIntelligence::Node.new(id: "module:test", type: "module", name: "Test", path: nil, properties: {}))
    server = RepositoryIntelligence::McpServer.new(
      manifest: { files: [] }, graph:, contracts: [], playbooks: [], readiness: { status: "ready" },
      input: StringIO.new, output: StringIO.new
    )

    initialized = server.handle("jsonrpc" => "2.0", "id" => 1, "method" => "initialize")
    described = server.handle(
      "jsonrpc" => "2.0", "id" => 2, "method" => "tools/call",
      "params" => { "name" => "describe_node", "arguments" => { "id" => "module:test" } }
    )

    assert_equal "2025-06-18", initialized.dig(:result, :protocolVersion)
    assert_includes described.dig(:result, :content, 0, :text), "module:test"
  end
end
