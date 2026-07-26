# Grid Engine AI Context

## Purpose

The Grid Engine provides a framework-neutral, server-authoritative contract for defining columns, parsing untrusted query input, applying safe Active Record/Arel queries, and presenting equivalent Tabulator and HTML/Turbo experiences.

## Owned paths

- `app/lib/grid_engine/**`
- `app/models/grid_saved_view.rb`
- grid migrations, controllers, components, locale files, and tests

## Invariants

1. Only columns declared in a `GridEngine::Definition` may be filtered, sorted, formatted, personalized, or exported.
2. Operators, types, parsers, and formatters are registry entries with explicit keys.
3. Untrusted parameters are parsed into an immutable query AST before reaching Active Record or Arel.
4. Sort directions and pagination are allowlisted and bounded.
5. SQL fragments never come directly from request parameters.
6. Tabulator is an adapter, not the source of business rules.
7. HTML and Turbo fallbacks expose the same data and authorization boundary.
8. Saved views belong to a user and grid key; consumers must scope them to the current user.
9. Exports reuse the validated definition and query AST.
10. Public behavior is covered by tests and localized where visible to users.

## Current implementation sequence

The first slice establishes the DSL, registries, immutable query AST, Active Record/Arel adapter, Tabulator response contract, HTML fallback, and baseline tests. Persistence for saved views, exports, and end-user column personalization follows on the same Epic 3 branch.
