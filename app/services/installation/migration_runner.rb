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
      schema_migration = ActiveRecord::SchemaMigration.new(Connection.connection_pool)
      context = ActiveRecord::MigrationContext.new(Rails.root.join("db/migrate"), schema_migration)
      begin
        context.migrate
      rescue ActiveRecord::StatementInvalid => error
        raise unless all_required_tables_exist? && error.message.include?("already exists")
      end
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

    def all_required_tables_exist?
      REQUIRED_TABLES.all? { |table| Connection.connection.data_source_exists?(table) }
    end

    def verify_schema!
      missing = REQUIRED_TABLES.reject { |table| Connection.connection.data_source_exists?(table) }
      raise VerificationError, "Provisioned database is missing required schema objects" if missing.any?
    end

    def record_evidence!
      connection = Connection.connection
      now = connection.quote(Time.current.utc)
      environment = connection.quote(Rails.env)
      schema_migration = ActiveRecord::SchemaMigration.new(Connection.connection_pool)
      version = connection.quote(ActiveRecord::MigrationContext.new(Rails.root.join("db/migrate"), schema_migration).current_version.to_s)
      connection.execute(<<~SQL.squish)
        INSERT INTO installation_records (environment, contract_version, schema_version, status, created_at, updated_at)
        VALUES (#{environment}, 1, #{version}, 'migrated', #{now}, #{now})
      SQL
    end

    class VerificationError < StandardError; end
  end
end
