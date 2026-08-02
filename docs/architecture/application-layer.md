# Application Layer

ADR 0005 assigns product-specific source to `/application`. This document describes the implemented Rails bootstrap. It does not define role, grid or extension registration; those remain separate Phase 3 contracts.

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

## Starter and CI

The Application Starter includes the tracked skeleton so a newly initialized private repository has the boundary before product development begins. Empty directories use `.keep` files and can be replaced by product source over time.

The default CI entrypoint reaches application tests through `bin/test`. A product must not introduce a separate test command that bypasses platform security, release or Repository Intelligence checks.

## Not yet implemented

Application-owned role and Grid Engine registration, policy/view examples and the real sample extension are delivered by later Phase 3 changes. Applications must not edit shared registries as a temporary substitute.
