# frozen_string_literal: true

class PermissionRegistry
  Entry = Data.define(:key, :name, :category, :description)
  KEY_FORMAT = /\A[a-z][a-z0-9_]*\.[a-z][a-z0-9_]*\z/

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
        Permission.find_or_create_by!(key: entry.key) do |p|
          p.name = entry.name
          p.category = entry.category
          p.description = entry.description
        end
      end
    end

    private

    def default_permissions
      list = [
        Entry.new("customers.read", "Read Customers", "customers", "Allows viewing customer records"),
        Entry.new("customers.create", "Create Customers", "customers", "Allows creating new customers"),
        Entry.new("customers.update", "Update Customers", "customers", "Allows editing customer details"),
        Entry.new("customers.delete", "Delete Customers", "customers", "Allows deleting customer records"),

        Entry.new("members.read", "Read Members", "members", "Allows viewing organization members"),
        Entry.new("members.invite", "Invite Members", "members", "Allows inviting new members"),
        Entry.new("members.manage_roles", "Manage Member Roles", "members", "Allows managing roles and permissions"),

        Entry.new("reports.read", "Read Reports", "reports", "Allows viewing analytics and reports"),
        Entry.new("reports.export", "Export Reports", "reports", "Allows exporting reports"),

        Entry.new("audit.read", "Read Audit Logs", "audit", "Allows viewing system audit logs"),
        Entry.new("audit.export", "Export Audit Logs", "audit", "Allows exporting audit log evidence")
      ]
      list.index_by(&:key).freeze
    end
  end
end
