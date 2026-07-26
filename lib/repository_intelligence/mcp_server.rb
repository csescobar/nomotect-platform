# frozen_string_literal: true

require "json"

module RepositoryIntelligence
  class McpServer
    PROTOCOL_VERSION = "2025-06-18"

    def initialize(manifest:, graph:, contracts:, playbooks:, readiness:, input: $stdin, output: $stdout)
      @manifest = manifest
      @graph = graph
      @contracts = contracts
      @playbooks = playbooks
      @readiness = readiness
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
      result = case request.fetch("method")
               when "initialize" then initialize_result
               when "resources/list" then { resources: resources }
               when "resources/read" then read_resource(request.dig("params", "uri"))
               when "tools/list" then { tools: tools }
               when "tools/call" then call_tool(request.fetch("params"))
               when "prompts/list" then { prompts: playbooks.map { |item| { name: item.fetch("id"), description: item.fetch("title") } } }
               when "prompts/get" then { description: "Executable repository playbook", messages: [{ role: "user", content: { type: "text", text: YAML.dump(fetch_playbook(request.dig("params", "name"))) } }] }
               else return error_response(request["id"], -32601, "Method not found")
               end
      { jsonrpc: "2.0", id: request["id"], result: result }
    rescue KeyError, ArgumentError => error
      error_response(request["id"], -32602, error.message)
    rescue StandardError => error
      error_response(request["id"], -32603, error.message)
    end

    private

    attr_reader :manifest, :graph, :contracts, :playbooks, :readiness, :input, :output

    def initialize_result
      { protocolVersion: PROTOCOL_VERSION, serverInfo: { name: "rails-hotwire-platform", version: "1.0" }, capabilities: { resources: {}, tools: {}, prompts: {} } }
    end

    def resources
      %w[platform://manifest platform://graph platform://contracts platform://readiness].map { |uri| { uri:, name: uri.delete_prefix("platform://") } }
    end

    def read_resource(uri)
      payload = case uri
                when "platform://manifest" then manifest
                when "platform://graph" then graph.to_h
                when "platform://contracts" then contracts
                when "platform://readiness" then readiness
                else raise ArgumentError, "Unknown resource"
                end
      { contents: [{ uri:, mimeType: "application/json", text: JSON.pretty_generate(payload) }] }
    end

    def tools
      [
        { name: "describe_node", description: "Describe one graph node", inputSchema: object_schema("id") },
        { name: "impact_analysis", description: "Traverse bounded graph impact", inputSchema: object_schema("id", depth: { type: "integer", minimum: 1, maximum: 5 }) },
        { name: "readiness_report", description: "Return repository readiness", inputSchema: { type: "object", additionalProperties: false } }
      ]
    end

    def call_tool(params)
      arguments = params.fetch("arguments", {})
      payload = case params.fetch("name")
                when "describe_node" then graph.nodes.fetch(arguments.fetch("id")).to_h
                when "impact_analysis" then graph.impact(arguments.fetch("id"), depth: [arguments.fetch("depth", 2).to_i, 5].min).map(&:to_h)
                when "readiness_report" then readiness
                else raise ArgumentError, "Unknown tool"
                end
      { content: [{ type: "text", text: JSON.pretty_generate(payload) }] }
    end

    def object_schema(required, **properties)
      { type: "object", properties: { required => { type: "string" } }.merge(properties), required: [required], additionalProperties: false }
    end

    def fetch_playbook(name)
      playbooks.find { |playbook| playbook.fetch("id") == name } || raise(ArgumentError, "Unknown prompt")
    end

    def error_response(id, code, message)
      { jsonrpc: "2.0", id:, error: { code:, message: } }
    end
  end
end
