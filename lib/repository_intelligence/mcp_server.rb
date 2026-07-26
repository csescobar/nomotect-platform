# frozen_string_literal: true

require "json"
require "yaml"

module RepositoryIntelligence
  class McpServer
    PROTOCOL_VERSION = "2025-06-18"

    def initialize(intelligence: RepositoryIntelligence, playbooks:, input: $stdin, output: $stdout)
      @intelligence = intelligence
      @playbooks = playbooks
      @input = input
      @output = output
    end

    def run
      input.each_line do |line|
        request = JSON.parse(line)
        output.puts(JSON.generate(handle(request)))
        output.flush
      rescue JSON::ParserError => error
        output.puts(JSON.generate(error_response(nil, -32700, error.message)))
      end
    end

    def handle(request)
      result =
        case request.fetch("method")
        when "initialize" then initialize_result
        when "resources/list" then { resources: resources }
        when "resources/read" then read_resource(request.dig("params", "uri"))
        when "tools/list" then { tools: tools }
        when "tools/call" then call_tool(request.fetch("params"))
        when "prompts/list"
          { prompts: playbooks.map { |item| { name: item.fetch("id"), description: item.fetch("title") } } }
        when "prompts/get"
          {
            description: "Executable repository playbook",
            messages: [ { role: "user", content: { type: "text", text: YAML.dump(intelligence.playbook(request.dig("params", "name"))) } } ]
          }
        else
          return error_response(request["id"], -32601, "Method not found")
        end
      { jsonrpc: "2.0", id: request["id"], result: result }
    rescue KeyError, ArgumentError => error
      error_response(request["id"], -32602, error.message)
    rescue StandardError => error
      error_response(request["id"], -32603, error.message)
    end

    private

    attr_reader :intelligence, :playbooks, :input, :output

    def initialize_result
      {
        protocolVersion: PROTOCOL_VERSION,
        serverInfo: { name: "rails-hotwire-platform", version: "1.0" },
        capabilities: { resources: {}, tools: {}, prompts: {} }
      }
    end

    def resources
      %w[platform://manifest platform://graph platform://capabilities platform://readiness].map do |uri|
        { uri:, name: uri.delete_prefix("platform://") }
      end
    end

    def read_resource(uri)
      payload =
        case uri
        when "platform://manifest" then intelligence.manifest
        when "platform://graph" then intelligence.graph.to_h
        when "platform://capabilities" then intelligence.capabilities
        when "platform://readiness" then intelligence.readiness
        else raise ArgumentError, "Unknown resource"
        end
      { contents: [ { uri:, mimeType: "application/json", text: JSON.pretty_generate(payload) } ] }
    end

    def tools
      [
        { name: "describe_module", description: "Describe one repository node or module", inputSchema: object_schema("id") },
        { name: "search", description: "Search normalized repository nodes", inputSchema: search_schema },
        { name: "impact_analysis", description: "Traverse bounded cross-layer impact", inputSchema: object_schema("id", depth: { type: "integer", minimum: 1, maximum: 5 }) },
        { name: "dependency_path", description: "Find a directed dependency path", inputSchema: dependency_schema },
        { name: "graph_statistics", description: "Return normalized graph statistics", inputSchema: empty_schema },
        { name: "readiness_report", description: "Return repository readiness", inputSchema: empty_schema }
      ]
    end

    def call_tool(params)
      arguments = params.fetch("arguments", {})
      payload =
        case params.fetch("name")
        when "describe_module" then intelligence.describe_module(arguments.fetch("id"))
        when "search" then intelligence.search(query: arguments["query"], type: arguments["type"], limit: arguments.fetch("limit", 50))
        when "impact_analysis" then intelligence.impact_analysis(arguments.fetch("id"), depth: arguments.fetch("depth", 2))
        when "dependency_path" then intelligence.dependency_path(from: arguments.fetch("from"), to: arguments.fetch("to"), max_depth: arguments.fetch("max_depth", 6))
        when "graph_statistics" then intelligence.statistics
        when "readiness_report" then intelligence.readiness
        else raise ArgumentError, "Unknown tool"
        end
      { content: [ { type: "text", text: JSON.pretty_generate(payload) } ] }
    end

    def object_schema(required, **properties)
      { type: "object", properties: { required => { type: "string" } }.merge(properties), required: [ required ], additionalProperties: false }
    end

    def search_schema
      {
        type: "object",
        properties: { query: { type: "string" }, type: { type: "string" }, limit: { type: "integer", minimum: 1, maximum: 200 } },
        additionalProperties: false
      }
    end

    def dependency_schema
      {
        type: "object",
        properties: { from: { type: "string" }, to: { type: "string" }, max_depth: { type: "integer", minimum: 1, maximum: 10 } },
        required: %w[from to],
        additionalProperties: false
      }
    end

    def empty_schema
      { type: "object", additionalProperties: false }
    end

    def error_response(id, code, message)
      { jsonrpc: "2.0", id:, error: { code:, message: } }
    end
  end
end
