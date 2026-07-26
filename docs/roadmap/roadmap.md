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

### Planned post-baseline refinement

This refinement does not reopen the delivered `v0.2.0` baseline. It improves the authoring and interoperability contract of the existing design-token compiler.

- [ ] Make YAML the canonical, human-authored source for design-system settings and tokens.
- [ ] Load YAML through a safe parser with aliases disabled unless explicitly required.
- [ ] Validate normalized token data against a strict schema before generation.
- [ ] Treat JSON as a deterministic generated interoperability artifact rather than a hand-edited source.
- [ ] Generate browser-facing CSS custom properties and server-facing frozen Ruby structures from the same validated token model.
- [ ] Add CI drift checks so generated JSON, CSS and Ruby outputs cannot diverge from the YAML source.

**Target architecture:** YAML authoring source → safe loading and schema validation → deterministic JSON, CSS and Ruby outputs.

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

**Delivery evidence:** PR #18.

**Quality evidence:** tenant-scoped service contracts, safe webhook delivery, encrypted webhook secrets, deterministic exports, tracked imports, structured instrumentation, AI context, and automated tests.

## Epic 6 — Multi-Tenant Platform

**Status:** ✅ Complete

- [x] Organization workspace model
- [x] Membership-based access boundary
- [x] Owner, administrator and member roles
- [x] Organization authorization policies
- [x] Invitations and signed invitation acceptance
- [x] Pending invitation revocation
- [x] Role administration and member removal
- [x] Final-owner protection
- [x] English and Brazilian Portuguese organization administration copy
- [x] Active tenant context and tenant selection
- [x] Tenant isolation guarantees across domain queries
- [x] Tenant-specific permissions, themes and localization
- [x] Tenant-safe background jobs, files, exports and audit
- [x] Cross-tenant leakage tests
- [x] Ownership-transfer workflow and confirmation

**Delivery evidence:** PRs #11, #12, #20 and #22.

**Quality evidence:** tenant-bound request context, persisted and authenticated tenant selection, fail-closed stale-membership handling, tenant-safe Enterprise Services, ownership-transfer safeguards, cross-tenant regression coverage, English and Brazilian Portuguese copy, Multi-Tenant AI context, architecture documentation, and a fully green final CI run for PR #22.

## Epic 7 — Security and Privacy

**Status:** ✅ Complete

- [x] Privacy and LGPD workflows
- [x] Secure headers and CSP
- [x] Rate limiting and abuse controls
- [x] Secrets and key management
- [x] Dependency, SBOM and provenance automation
- [x] Threat models and security test suites

**Delivery evidence:** PR #21.

**Quality evidence:** tenant-safe privacy request, export, anonymization, preference and retention contracts; nonce-based CSP and explicit security headers; hashed scoped throttles with retry metadata and instrumentation; production secret validation and redaction rules; deterministic CycloneDX SBOM and checksum artifacts tied to the source commit; repository and module threat models; security and privacy AI context; English and Brazilian Portuguese copy; automated regression tests; and fully green CI run #120 before the final traceability update.

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

- [ ] Establish a root `VERSION` file as the canonical released project version.
- [ ] Add per-PR YAML change fragments with `none`, `patch`, `minor` or `major` release impact.
- [ ] Require release-impact declarations and validate fragment structure in CI.
- [ ] Generate and maintain `CHANGELOG.md` from accepted change fragments using Added, Changed, Deprecated, Removed, Fixed and Security sections.
- [ ] Reconstruct the historical changelog from merged PRs and release evidence after the scheduled Epic 4–8 implementation pipeline is complete.
- [ ] Generate GitHub release notes from the same normalized release metadata.
- [ ] Add release preparation automation that updates `VERSION`, consumes fragments, updates the changelog and opens a release PR.
- [ ] Verify consistency between `VERSION`, Git tags, release notes, SBOM and provenance metadata.
- [ ] Extract proven modules into versioned gems where justified.
- [ ] Add compatibility and upgrade tooling.
- [ ] Separate commercial enterprise repository and integration contracts.

**Exit criteria:** release engineering and distribution capabilities are implemented and CI is green. Completing Epic 9 does not authorize a stable `v1.0.0` release.

## Epic 10 — Framework Validation and Release Readiness

**Status:** ⏳ Planned

- [ ] Publish one or more pre-1.0 release candidates, such as `v0.9.0` and `v1.0.0-rc.1`.
- [ ] Build at least one representative application from scratch using only the documented framework contracts.
- [ ] Upgrade an existing sample application across at least one framework release candidate.
- [ ] Validate installation, configuration, generators, design-system customization, grid usage, domain conventions, enterprise services and multi-tenant behavior.
- [ ] Exercise production-like deployment, background jobs, files, exports, observability, backup and recovery workflows.
- [ ] Run accessibility, security, privacy, performance, compatibility and cross-tenant leakage validation.
- [ ] Collect defects, usability gaps, missing documentation and migration friction discovered through real framework usage.
- [ ] Resolve or explicitly accept all release-blocking findings and publish validation evidence.
- [ ] Confirm public contracts, support policy, compatibility matrix, upgrade policy and deprecation process.

**`v1.0.0` release gate:** all Epic 10 validation evidence is complete; no unresolved critical or high-severity release blockers remain; the reference and validation applications can be created, operated and upgraded using published documentation; and the stable public contracts are approved.

## Release targets

- ✅ `v0.1.0`: executable platform core baseline delivered
- ✅ `v0.2.0`: design system and i18n baseline delivered
- ✅ `v0.3.0`: grid engine baseline delivered
- ✅ `v0.4.0`: reference application and domain framework baseline delivered
- ⏳ `v0.9.0`: feature-complete pre-release after Epic 9
- ⏳ `v1.0.0-rc.1`: validation candidate for Epic 10
- ⏳ `v1.0.0`: stable documented contracts released only after the Epic 10 validation gate passes
