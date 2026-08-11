# frozen_string_literal: true

class PermissionRegistry
  Entry = Data.define(
    :key,
    :name,
    :owning_capability,
    :description,
    :security_classification,
    :default_availability,
    :version
  )

  KEY_FORMAT = /\A[a-z][a-z0-9_]*\.[a-z][a-z0-9_]*\z/
  SECURITY_CLASSIFICATIONS = %w[standard sensitive critical].freeze
  DEFAULT_AVAILABILITIES = %w[all admin_only owner_only].freeze

  class << self
    def registry
      @registry ||= default_permissions
    end

    def registered?(key)
      registry.key?(key.to_s)
    end

    def fetch(key)
      registry.fetch(key.to_s)
    rescue KeyError
      raise ArgumentError, "Unknown permission: #{key}"
    end

    def all_keys
      registry.keys.freeze
    end

    def entries
      registry.values.freeze
    end

    def seed_database!
      entries.each do |entry|
        permission = Permission.find_or_initialize_by(key: entry.key)
        permission.name = entry.name
        permission.category = entry.owning_capability
        permission.description = entry.description
        permission.owning_capability = entry.owning_capability
        permission.security_classification = entry.security_classification
        permission.default_availability = entry.default_availability
        permission.version = entry.version
        permission.save!
      end
    end

    private

    def default_permissions
      list = [
        Entry.new("customers.read", "Read Customers", "customers", "Allows viewing customer records", "standard", "all", "1.0.0"),
        Entry.new("customers.create", "Create Customers", "customers", "Allows creating new customers", "standard", "all", "1.0.0"),
        Entry.new("customers.update", "Update Customers", "customers", "Allows editing customer details", "standard", "all", "1.0.0"),
        Entry.new("customers.delete", "Delete Customers", "customers", "Allows deleting customer records", "sensitive", "admin_only", "1.0.0"),

        Entry.new("members.read", "Read Members", "members", "Allows viewing organization members", "standard", "all", "1.0.0"),
        Entry.new("members.invite", "Invite Members", "members", "Allows inviting new members", "sensitive", "admin_only", "1.0.0"),
        Entry.new("members.manage_roles", "Manage Member Roles", "members", "Allows managing roles and permissions", "critical", "admin_only", "1.0.0"),

        Entry.new("reports.read", "Read Reports", "reports", "Allows viewing analytics and reports", "standard", "all", "1.0.0"),
        Entry.new("reports.export", "Export Reports", "reports", "Allows exporting reports", "sensitive", "all", "1.0.0"),

        Entry.new("audit.read", "Read Audit Logs", "audit", "Allows viewing system audit logs", "sensitive", "admin_only", "1.0.0"),
        Entry.new("audit.export", "Export Audit Logs", "audit", "Allows exporting audit log evidence", "critical", "owner_only", "1.0.0"),

        Entry.new("security.read", "Read Security Settings", "security", "Allows viewing security configuration", "sensitive", "admin_only", "1.0.0"),
        Entry.new("security.manage", "Manage Security Settings", "security", "Allows configuring tenant security policies", "critical", "owner_only", "1.0.0"),

        Entry.new("settings.read", "Read Settings", "settings", "Allows viewing organization settings", "standard", "all", "1.0.0"),
        Entry.new("settings.manage", "Manage Settings", "settings", "Allows modifying organization settings", "sensitive", "admin_only", "1.0.0")
      ]
      list.each_with_object({}) { |entry, hash| hash[entry.key] = entry }.freeze
    end
  end
end
