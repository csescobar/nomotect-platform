class BackfillSystemRolesAndLinkMemberships < ActiveRecord::Migration[8.1]
  def up
    # Seed Permission records first
    PermissionRegistry.seed_database!

    # Create global protected system roles
    system_roles = {
      "owner" => { name: "Owner", description: "Full administrative and security control" },
      "admin" => { name: "Admin", description: "Administrative access to organization resources" },
      "member" => { name: "Member", description: "Standard member access" }
    }

    created_roles = {}
    system_roles.each do |key, attrs|
      role = Role.find_or_create_by!(key: key, organization_id: nil) do |r|
        r.name = attrs[:name]
        r.description = attrs[:description]
        r.protected = true
      end
      role.update!(protected: true)
      created_roles[key] = role
    end

    # Assign permissions to system roles based on default availabilities
    all_permissions = Permission.all.index_by(&:key)

    PermissionRegistry.entries.each do |entry|
      perm = all_permissions[entry.key]
      next unless perm

      # Owner gets all permissions
      created_roles["owner"].role_permissions.find_or_create_by!(permission: perm)

      # Admin gets all except owner_only
      if entry.default_availability != "owner_only"
        created_roles["admin"].role_permissions.find_or_create_by!(permission: perm)
      end

      # Member gets all with default_availability == "all"
      if entry.default_availability == "all"
        created_roles["member"].role_permissions.find_or_create_by!(permission: perm)
      end
    end

    # Backfill existing memberships with role_id IS NULL
    Membership.where(role_id: nil).find_each do |membership|
      system_role = created_roles[membership.role] || created_roles["member"]
      membership.update_column(:role_id, system_role.id)
    end
  end

  def down
    # No-op for data backfill
  end
end
