# Epic Roadmap

## Traceability model

Vision → Epics → Capabilities → Modules → Issues → Pull Requests → Releases.

Each implementation issue and pull request should identify the epic, capability, quality dimensions and public contracts it advances.

## Status legend

- ✅ Complete: the current exit criteria and planned baseline are delivered.
- 🚧 In progress: active implementation is underway.
- ◐ Partially delivered: some capabilities are delivered, including work completed ahead of roadmap sequence.
- ⏳ Planned: implementation has not started.

Roadmap sequence remains authoritative even when a later capability is delivered early. Early delivery is recorded under its canonical epic and does not change the next planned epic automatically.

## Epic 0 — Project Foundation

**Status:** ✅ Complete

**Objective:** establish the project's constitution, legal identity and engineering governance.

- [x] Apache License 2.0 and NOTICE
- [x] AI-native positioning
- [x] Engineering Constitution
- [x] Architecture principles, dependency rules and ubiquitous language
- [x] Modular monolith and Rails authentication ADRs
- [x] AI contracts and repository-native context
- [x] Quality model and Definition of Done
- [x] Documentation and RFC standards
- [x] Security disclosure and supply-chain policy
- [x] CODEOWNERS and protected pull-request workflow
- [x] Platform maturity model and engineering decision tree

**Exit criteria:** foundation documents are merged, internally consistent and linked from the README. Remaining technical version decisions may be finalized immediately before scaffolding.

## Epic 1 — Platform Core

**Status:** ✅ Complete

**Objective:** produce an executable, production-conscious Rails foundation.

- [x] Confirm supported Ruby, Rails and PostgreSQL versions
- [x] Scaffold Rails with PostgreSQL
- [x] Add Hotwire and ViewComponent
- [x] Use first-party Rails authentication
- [x] Add authorization contracts
- [x] Add request context, health checks, structured logging and error handling
- [x] Add developer commands and CI security pipeline

**Delivery evidence:** PR #4.

## Epic 2 — Design System and Internationalization

**Status:** ✅ Complete

- [x] Design token compiler
- [x] Light, dark and system themes
- [x] Typography, icons and layouts
- [x] Form builder and core inputs
- [x] Buttons, cards, alerts, badges, dialogs and navigation
- [x] Component showcase
- [x] English and Brazilian Portuguese locales
- [x] Accessibility verification baseline

**Delivery evidence:** PRs #5 through #10.

## Epic 3 — Grid Engine

**Status:** ✅ Complete

- [x] Grid DSL
- [x] Type, operator, parser and formatter registries
- [x] Query AST and validation
- [x] Active Record and Arel adapters
- [x] Tabulator adapter
- [x] HTML and Turbo fallback
- [x] Saved views, export and column personalization

**Delivery evidence:** PR #14.

**Target release:** `v0.3.0` baseline delivered.

## Epic 4 — Domain Framework and Reference Application

**Status:** ✅ Complete

- [x] Operations, queries, policies and domain events
- [x] Rich domain model conventions
- [x] Reference Customers capability
- [x] CRUD with grid, audit, authorization and i18n
- [x] Optimistic locking and conflict UI
- [x] System and security tests

**Delivery evidence:** PR #15.

**Target release:** `v0.4.0` baseline delivered.

## Epic 5 — Enterprise Services

**Status:** ✅ Complete

- [x] Audit and observability
- [x] Background jobs and idempotency
- [x] Notifications
- [x] Files
- [x] Imports and exports
- [x] Workflow and state transitions
- [x] Integrations, webhooks and feature flags

**Delivery evidence:** Epic 5 stacked draft PR.

**Quality evidence:** tenant-scoped service contracts, safe webhook delivery, encrypted webhook secrets, deterministic exports, tracked imports, structured instrumentation, AI context, and automated tests.

## Epic 6 — Multi-Tenant Platform

**Status:** ◐ Partially delivered ahead of sequence — next implementation epic

### Delivered

- [x] Organization workspace model
- [x] Membership-based access boundary
- [x] Owner, administrator and member roles
- [x] Organization authorization policies
- [x] Invitations and signed invitation acceptance
- [x] Pending invitation revocation
- [x] Role administration and member removal
- [x] Final-owner protection
- [x] English and Brazilian Portuguese organization administration copy

**Delivery evidence:** PRs #11 and #12.

### Remaining

- [ ] Active tenant context and tenant selection
- [ ] Tenant isolation guarantees across domain queries
- [ ] Tenant-specific permissions, themes and localization
- [ ] Tenant-safe background jobs, files, exports and audit
- [ ] Cross-tenant leakage tests
- [ ] Ownership-transfer workflow and confirmation

The early organization and membership delivery does not mark Epic 6 complete.

## Epic 7 — Security and Privacy

**Status:** ⏳ Planned

- [ ] Privacy and LGPD workflows
- [ ] Secure headers and CSP
- [ ] Rate limiting and abuse controls
- [ ] Secrets and key management
- [ ] Dependency, SBOM and provenance automation
- [ ] Threat models and security test suites

## Epic 8 — AI-Native Infrastructure

**Status:** ◐ Partially delivered

- [x] Initial module AI contexts
- [ ] Generated architecture manifest
- [ ] Dependency graph and drift detection
- [ ] Agent playbook validation
- [ ] Repository readiness reports
- [ ] Architecture and documentation consistency checks

## Epic 9 — Distribution and Enterprise Extensions

**Status:** ⏳ Planned

- [ ] Extract proven modules into versioned gems where justified
- [ ] Compatibility and upgrade tooling
- [ ] Automated changelogs and releases
- [ ] Separate commercial enterprise repository and integration contracts

## Release targets

- ✅ `v0.1.0`: executable platform core baseline delivered
- ✅ `v0.2.0`: design system and i18n baseline delivered
- ✅ `v0.3.0`: grid engine baseline delivered
- ✅ `v0.4.0`: reference application and domain framework baseline delivered
- ⏳ `v1.0.0`: stable documented contracts with upgrade policy and production evidence
