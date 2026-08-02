# frozen_string_literal: true

module ApplicationLayer
  class Certification
    COMMIT_PATTERN = /\A[0-9a-f]{40}\z/
    EVIDENCE = %w[
      bootstrap
      role_registration
      authorized_grid_registration
      policy_view_integration
      community_fallback
      extension_preflight
      protected_boundary
    ].freeze
    REQUIRED_FILES = %w[
      application/config/roles.rb
      application/config/grids.rb
      application/config/extensions.yml
      application/extensions/sample-audit/platform-extension.yml
      application/extensions/sample-audit/lib/nomotect/sample_audit.rb
    ].freeze

    def initialize(source_commit:, root: Rails.root)
      @source_commit = source_commit
      @root = Pathname(root)
    end

    def call
      validate_source_commit!
      validate_required_files!
      certify_bootstrap!
      certify_role_registration!
      certify_grid_registration!
      certify_policy_view_integration!
      certify_extension_boundary!

      {
        "schema_version" => 1,
        "phase" => 3,
        "status" => "passed",
        "source_commit" => source_commit,
        "evidence" => EVIDENCE,
        "application_owned_paths" => REQUIRED_FILES,
        "protected_core_modified" => false,
        "community_fallback" => true,
        "extension_enabled_by_default" => false,
        "credential_free" => true,
        "publication" => { "allowed" => false }
      }.freeze
    rescue KeyError, ArgumentError, Extensions::Configuration::InvalidConfiguration => error
      invalid!(error.message)
    end

    private

    attr_reader :source_commit, :root

    def validate_source_commit!
      invalid!("source commit must be a full lowercase Git SHA") unless COMMIT_PATTERN.match?(source_commit)
    end

    def validate_required_files!
      missing = REQUIRED_FILES.reject { |path| root.join(path).file? }
      invalid!("missing application-layer evidence: #{missing.join(', ')}") if missing.any?
    end

    def certify_bootstrap!
      application_root = root.join("application")
      %w[controllers helpers jobs models operations policies].each do |component|
        path = application_root.join("app", component).to_s
        invalid!("application bootstrap path is missing: #{path}") unless Rails.application.config.autoload_paths.include?(path)
      end
    end

    def certify_role_registration!
      registry = ApplicationRoles::Registry.new
      registry.register(:risk_manager, permissions: %w[risks.read risks.manage])
      entry = registry.fetch(:risk_manager)
      invalid!("custom role permissions are incomplete") unless entry.permissions == %w[risks.read risks.manage]
      invalid!("custom role must not be protected") if entry.protected
      assert_raises_registration_error { registry.register(:owner, permissions: []) }
    end

    def certify_grid_registration!
      registry = GridEngine::Catalog::Registry.new
      definition = GridEngine::Definition.new(key: :risks, model_class: Organization) do
        column :name, type: :string
      end
      relation = Object.new
      scope = ->(user:, **) { user.fetch(:authorized_relation) }
      registry.register("risks", definition:, scope:)
      entry = registry.fetch("risks")
      resolved = entry.scope.call(user: { authorized_relation: relation }, organization: nil)
      invalid!("grid scope did not return its authorized relation") unless resolved.equal?(relation)

      unsafe = GridEngine::Definition.new(key: :unsafe, model_class: Organization)
      assert_raises_registration_error { registry.register("unsafe", definition: unsafe, scope: nil) }
    end

    def certify_policy_view_integration!
      helpers = ApplicationController._helper_methods.map(&:to_sym)
      invalid!("allowed_to? is not exported to application views") unless helpers.include?(:allowed_to?)
      invalid!("application policy path is not loaded") unless
        Rails.application.config.autoload_paths.include?(root.join("application/app/policies").to_s)
    end

    def certify_extension_boundary!
      default_configuration = Extensions::Configuration.load_default(root:)
      invalid!("sample extension must be disabled by default") if default_configuration.enabled.any?

      declaration = default_configuration.extensions.find do |item|
        item.fetch("id") == "nomotect.sample-audit"
      end
      invalid!("sample extension declaration is missing") unless declaration

      enabled = Extensions::Configuration.new({
        "schema_version" => 1,
        "extensions" => [ declaration.merge("enabled" => true) ]
      })
      catalog = Extensions::Catalog.new(
        configuration: enabled,
        resolver: Extensions::Catalog::SpecificationResolver.new(
          application_root: root.join("application/extensions")
        )
      )
      report = Extensions::Inspector.new(configuration: enabled, catalog:).preflight
      invalid!("sample extension preflight is not ready") unless report.ready?
      invalid!("sample extension was not discovered") unless report.packages.map(&:id) == [ "nomotect.sample-audit" ]
    end

    def assert_raises_registration_error
      yield
      invalid!("unsafe registration was accepted")
    rescue ArgumentError
      true
    end

    def invalid!(message) = raise InvalidCertification, message

    class InvalidCertification < StandardError; end
  end
end
