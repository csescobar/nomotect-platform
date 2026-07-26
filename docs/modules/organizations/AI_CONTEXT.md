# Organizations AI Context

## Purpose

Organizations are the platform's workspace and tenancy boundary. Users gain access only through memberships.

## Owned paths

- `app/models/organization.rb`
- `app/models/membership.rb`
- `app/controllers/organizations_controller.rb`
- `app/policies/organization_policy.rb`
- `app/views/organizations/**`
- organization and membership migrations, tests, and locale files

## Invariants

1. Every organization creator receives an owner membership in the same transaction.
2. Organization queries exposed to users are scoped through memberships.
3. Membership roles are `owner`, `admin`, or `member`.
4. Owners may delete organizations; owners and administrators may edit them.
5. A user without a membership cannot view the organization.
6. Slugs are stable identifiers generated at creation; renaming does not change them.
7. Visible copy is localized in English and Brazilian Portuguese.
8. Future invitations must create or activate memberships without bypassing role validation.

## Current boundary

This slice establishes organization CRUD and direct memberships. Invitations, member management, ownership transfer, active-organization selection, and organization-scoped product records belong in subsequent focused changes.
