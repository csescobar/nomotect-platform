# Epic Roadmap

## Traceability model

Vision → Epics → Capabilities → Modules → Issues → Pull Requests → Releases.

Each implementation issue should identify the epic, capability, quality dimensions and public contracts it advances.

## Epic 0 — Project Foundation

**Objective:** establish the project's constitution, legal identity and engineering governance.

- Apache License 2.0 and NOTICE
- AI-native positioning
- Engineering Constitution
- Architecture principles, dependency rules and ubiquitous language
- Modular monolith and Rails authentication ADRs
- AI contracts and repository-native context
- Quality model and Definition of Done
- Documentation and RFC standards
- Security disclosure and supply-chain policy
- CODEOWNERS and protected pull-request workflow
- Platform maturity model and engineering decision tree

**Exit criteria:** foundation documents are merged, internally consistent and linked from the README. Remaining technical version decisions may be finalized immediately before scaffolding.

## Epic 1 — Platform Core

**Objective:** produce an executable, production-conscious Rails foundation.

- Confirm supported Ruby, Rails and PostgreSQL versions
- Scaffold Rails with PostgreSQL
- Add Hotwire and ViewComponent
- Use first-party Rails authentication
- Add authorization contracts
- Add request context, health checks, structured logging and error handling
- Add developer commands and CI security pipeline

## Epic 2 — Design System and Internationalization

- Design token compiler
- Light, dark and system themes
- Typography, icons and layouts
- Form builder and core inputs
- Buttons, cards, alerts, badges, dialogs and navigation
- Component showcase
- English and Brazilian Portuguese locales
- Accessibility verification baseline

## Epic 3 — Grid Engine

- Grid DSL
- Type, operator, parser and formatter registries
- Query AST and validation
- Active Record and Arel adapters
- Tabulator adapter
- HTML and Turbo fallback
- Saved views, export and column personalization

## Epic 4 — Domain Framework and Reference Application

- Operations, queries, policies and domain events
- Rich domain model conventions
- Reference Customers capability
- CRUD with grid, audit, authorization and i18n
- Optimistic locking and conflict UI
- System and security tests

## Epic 5 — Enterprise Services

- Audit and observability
- Background jobs and idempotency
- Notifications
- Files
- Imports and exports
- Workflow and state transitions
- Integrations, webhooks and feature flags

## Epic 6 — Multi-Tenant Platform

- Tenant isolation and context
- Tenant permissions, themes and localization
- Tenant-safe jobs, files, exports and audit
- Cross-tenant leakage tests

## Epic 7 — Security and Privacy

- Privacy and LGPD workflows
- Secure headers and CSP
- Rate limiting and abuse controls
- Secrets and key management
- Dependency, SBOM and provenance automation
- Threat models and security test suites

## Epic 8 — AI-Native Infrastructure

- Module AI contexts
- Generated architecture manifest
- Dependency graph and drift detection
- Agent playbook validation
- Repository readiness reports
- Architecture and documentation consistency checks

## Epic 9 — Distribution and Enterprise Extensions

- Extract proven modules into versioned gems where justified
- Compatibility and upgrade tooling
- Automated changelogs and releases
- Separate commercial enterprise repository and integration contracts

## Release targets

- `v0.1.0`: executable platform core
- `v0.2.0`: design system and i18n baseline
- `v0.3.0`: grid engine baseline
- `v0.4.0`: reference application and domain framework
- `v1.0.0`: stable documented contracts with upgrade policy and production evidence