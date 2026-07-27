module Installation
  class MigrationRunner
    REQUIRED_TABLES = %w[users organizations memberships platform_roles installation_records].freeze

    Connection = Class.new(ActiveRecord::Base) do
      self.abstract_class = true
    end

    def initialize(configuration: RuntimeDatabaseConfiguration.new, progress: ProgressStore.new)
      @configuration = configuration
      @progress = progress
    end

    def run!
      progress.publish(event: :migrations, status: :started, message: "Preparing provisioned database migrations")
      Connection.establish_connection(configuration.to_h)
      context = ActiveRecord::MigrationContext.new(Rails.root.join("db/migrate"), Connection.connection.schema_migration)
      context.migrate
      verify_schema!
      record_evidence!
      progress.publish(event: :migrations, status: :completed, message: "Database migrations and schema verification completed")
      Result.new(context.current_version, REQUIRED_TABLES)
    rescue StandardError
      progress.publish(event: :migrations, status: :failed, message: "Database migrations failed")
      raise
    ensure
      Connection.remove_connection
    end

    Result = Data.define(:schema_version, :verified_tables)

    private

    attr_reader :configuration, :progress

    def verify_schema!
      missing = REQUIRED_TABLES.reject { |table| Connection.connection.data_source_exists?(table) }
      raise VerificationError, "Provisioned database is missing required schema objects" if missing.any?
    end

    def record_evidence!
      connection = Connection.connection
      now = connection.quote(Time.current.utc)
      environment = connection.quote(Rails.env)
      version = connection.quote(ActiveRecord::MigrationContext.new(Rails.root.join("db/migrate"), connection.schema_migration).current_version.to_s)
      connection.execute(<<~SQL.squish)
        INSERT INTO installation_records (environment, contract_version, schema_version, status, created_at, updated_at)
        VALUES (#{environment}, 1, #{version}, 'migrated', #{now}, #{now})
      SQL
    end

    class VerificationError < StandardError; end
  end
end
