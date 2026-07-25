# Roadmap

## Phase 0 — Repository and architecture

- Establish documentation structure
- Select license
- Define contribution model
- Confirm supported Ruby, Rails and PostgreSQL versions
- Create initial ADR set

## Phase 1 — Rails foundation

- Scaffold Rails application
- Configure PostgreSQL
- Add Hotwire and ViewComponent
- Add authentication and session management
- Add authorization
- Add structured logging and error handling
- Configure CI and security scanning

## Phase 2 — Design system and i18n

- Implement design token compiler
- Implement light, dark and system themes
- Create form builder and core inputs
- Create buttons, cards, alerts, badges, modal and navigation
- Create component showcase
- Add `pt-BR` and `en`

## Phase 3 — Grid subsystem

- Implement type and operator registries
- Implement query AST, validation and Arel adapter
- Implement Tabulator adapter
- Implement HTML/Turbo fallback
- Implement saved views, export and column configuration

## Phase 4 — Reference CRUD

- Implement customers module
- Demonstrate rich domain operations
- Add policies, audit, i18n and grid
- Add optimistic locking
- Add system and security tests

## Phase 5 — Enterprise capabilities

- Multi-tenancy
- Privacy and LGPD module
- Workflows
- Notifications
- Files
- Imports and exports
- Integrations and webhooks
- Feature flags

## Phase 6 — Distribution and upgrades

- Extract stable platform modules into gems
- Define compatibility policy
- Automate changelogs and releases
- Publish upgrade guides
