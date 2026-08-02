# Application Layer

ADR 0005 assigns product-specific source to `/application`. This document describes the implemented Rails bootstrap and the role and Grid Engine registration surfaces governed by ADR 0006.

## Loaded paths

NomoTect registers the following application-owned paths with Rails:

- `application/app/controllers`
- `application/app/helpers`
- `application/app/jobs`
- `application/app/models`
- `application/app/operations`
- `application/app/policies`
- `application/app/views`
- `application/config/initializers`
- `application/config/locales`
- `application/config/routes`
- `application/db/migrate`
- `application/test`

Ruby source directories participate in autoloading and eager loading. Views, initializers, locales and migrations use their native Rails path contracts. `bin/test` includes `application/test` in the default suite while preserving explicit test arguments.

## Routes

Product routes belong in `application/config/routes/application.rb`. The shared router calls `draw :application` only when that fixed file exists. Do not edit `config/routes.rb` to add product routes and do not load route files from user-controlled paths.

## Ownership

The `/application` directory owns product behavior. Shared platform code may expose registration and discovery contracts but must not reference product-specific constants. Product code may use public NomoTect operations, policies, components and registries.

Generic platform behavior remains in shared `app/`, `config/`, `lib/` and `test/` paths. File location is determined by ownership and reuse, not by whether AI assisted the contribution.

## Fixed registration files

Product roles are registered in `application/config/roles.rb`. Every custom role declares an explicit permission list. The protected `owner`, `admin` and `member` registrations cannot be replaced, and a custom role never receives administrative behavior implicitly.

Product grids are registered in `application/config/grids.rb`. A grid registration combines a `GridEngine::Definition` with a callable `scope`. The scope receives the authenticated `user` and active `organization` and must return an already-authorized relation. Registration fails when the scope is absent or when a protected key is replaced.

Both files load once during initialization from fixed paths. The registries are sealed immediately afterward, so application requests cannot mutate authorization or grid behavior at runtime.

## Policy and view integration

Application policies belong in `application/app/policies` and may ask the tenant membership for an explicit permission:

```ruby
class RiskPolicy < ApplicationPolicy
  def update?
    membership = record.organization.membership_for(user)
    membership&.admin? || membership&.permitted?("risks.manage")
  end
end
```

Controllers must continue to call `authorize!`. Application views may use the public `allowed_to?(record, query)` helper to present policy-consistent controls; hiding a control is not a substitute for controller authorization. Existing owner and administrator behavior remains explicit through `Membership#owner?` and `Membership#admin?`; registered permissions do not silently grant either status. Role labels belong in application locale files under `organizations.roles.<role_key>`.

## Starter and CI

The Application Starter includes the tracked skeleton so a newly initialized private repository has the boundary before product development begins. Empty directories use `.keep` files and can be replaced by product source over time.

The default CI entrypoint reaches application tests through `bin/test`. A product must not introduce a separate test command that bypasses platform security, release or Repository Intelligence checks.

## Not yet implemented

The continuously tested real sample extension and its failure-isolation and disablement behavior remain later Phase 3 work.
