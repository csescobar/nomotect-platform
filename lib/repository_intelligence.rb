# frozen_string_literal: true

require_relative "repository_intelligence/query_engine"
require_relative "repository_intelligence/capability_registry"
require_relative "repository_intelligence/event_bus"

module RepositoryIntelligence
  class << self
    def configure(graph:, contracts:, playbooks:, manifest: nil, readiness: nil, generator: nil, validator: nil, event_bus: EventBus.new)
      @graph = graph
      @contracts = contracts
      @playbooks = playbooks
      @manifest = manifest
      @readiness_report = readiness
      @generator = generator
      @validator = validator
      @event_bus = event_bus
      @query_engine = QueryEngine.new(graph:, contracts:, playbooks:)
      register_default_capabilities
      self
    end

    def configured?
      !@query_engine.nil?
    end

    def graph
      require_configuration!
      @graph
    end

    def manifest
      require_configuration!
      @manifest
    end

    def contracts
      require_configuration!
      @contracts
    end

    def playbooks
      require_configuration!
      @playbooks
    end

    def capabilities
      require_configuration!
      @capability_registry.to_h
    end

    def capability(name)
      require_configuration!
      @capability_registry.fetch(name)
    end

    def describe_module(identifier)
      query_engine.describe(identifier)
    end

    def search(query: nil, type: nil, limit: 50)
      query_engine.search(query:, type:, limit:)
    end

    def impact_analysis(identifier, depth: 2)
      query_engine.impact_analysis(identifier, depth:)
    end

    def dependency_path(from:, to:, max_depth: 6)
      query_engine.dependency_path(from:, to:, max_depth:)
    end

    def contract(identifier)
      query_engine.contract(identifier)
    end

    def playbook(identifier)
      query_engine.playbook(identifier)
    end

    def invariants(kind: nil)
      query_engine.invariants(kind:)
    end

    def statistics
      query_engine.statistics
    end

    def generate!
      require_configuration!
      raise "generation is unavailable" unless @generator

      result = @generator.write
      event_bus.publish(:artifacts_generated, files: result.files.keys, quality: result.quality)
      result
    end

    def validate!
      require_configuration!
      findings = @validator ? Array(@validator.call) : []
      event_bus.publish(:validation_completed, findings:)
      findings
    end

    def readiness
      require_configuration!
      @readiness_report
    end

    def subscribe(event, callable = nil, &block)
      require_configuration!
      event_bus.subscribe(event, callable, &block)
    end

    def publish(event, payload = {})
      require_configuration!
      event_bus.publish(event, payload)
    end

    private

    attr_reader :query_engine, :event_bus

    def register_default_capabilities
      @capability_registry = CapabilityRegistry.new
        .register(:graph, description: "Normalized repository graph queries", public_methods: %i[graph search describe_module impact_analysis dependency_path statistics])
        .register(:contracts, description: "Machine-readable module and invariant contracts", public_methods: %i[contracts contract invariants])
        .register(:playbooks, description: "Versioned cross-vendor engineering playbooks", public_methods: %i[playbooks playbook])
        .register(:generation, description: "Deterministic AI artifact generation", public_methods: %i[generate!])
        .register(:validation, description: "Repository intelligence drift and quality validation", public_methods: %i[validate! readiness])
        .register(:events, description: "Internal repository intelligence lifecycle events", public_methods: %i[subscribe publish])
    end

    def require_configuration!
      raise "RepositoryIntelligence is not configured" unless configured?
    end
  end
end
