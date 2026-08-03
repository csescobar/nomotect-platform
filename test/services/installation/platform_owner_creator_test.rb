require "test_helper"

module Installation
  class PlatformOwnerCreatorTest < ActiveSupport::TestCase
    test "reads the current schema version through the connection pool" do
      pool = Object.new
      schema_migration = Object.new
      migration_context = Struct.new(:current_version).new(20_260_801_120_000)
      creator = PlatformOwnerCreator.new

      connection_class = PlatformOwnerCreator::Connection
      connection_class.stub(:connection_pool, pool) do
        ActiveRecord::SchemaMigration.stub(:new, ->(actual_pool) { assert_same pool, actual_pool; schema_migration }) do
          ActiveRecord::MigrationContext.stub(:new, lambda { |paths, actual_schema_migration|
            assert_equal Rails.root.join("db/migrate"), paths
            assert_same schema_migration, actual_schema_migration
            migration_context
          }) do
            assert_equal "20260801120000", creator.send(:current_schema_version)
          end
        end
      end
    end
  end
end
