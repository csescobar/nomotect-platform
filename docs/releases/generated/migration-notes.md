# Unreleased Migration Notes

- **215-epic-11-persistent-rbac-phase-1:** Introduces roles, permissions, and role_permissions tables, and adds role_id to memberships table.
- **216-epic-11-permission-registry-phase-2:** Adds owning_capability, security_classification, default_availability, and version columns to permissions table.
- **218-epic-11-system-roles-backfill:** Seeds protected system roles (owner, admin, member) with canonical permissions and backfills existing memberships.
