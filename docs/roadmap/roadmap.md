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

### Post-baseline refinement

This refinement does not reopen the delivered `v0.2.0` baseline.

- [x] Make YAML the canonical, human-authored source for design-system settings and tokens.
- [x] Load YAML through a safe parser with aliases disabled.
- [x] Validate normalized token data against a strict, versioned schema before generation.
- [x] Treat JSON as a deterministic generated interoperability artifact rather than a hand-edited source.
- [x] Generate browser-facing CSS custom properties and server-facing frozen Ruby structures from the same validated token model.
- [x] Add CI drift checks so generated JSON, CSS and Ruby outputs cannot diverge from the YAML source.

**Delivered architecture:** YAML authoring source → safe loading and schema validation → normalized token model → deterministic JSON, CSS and frozen Ruby outputs.

**Delivery evidence:** Epic 2 design-token refinement PR.

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

## Epic 8 — AI Platform and Repository Intelligence

**Status:** ✅ Complete

**Objective:** transform the repository into a self-describing, provider-neutral AI engineering platform that exposes code intelligence, architecture, governance, security, privacy, tenancy and delivery knowledge through deterministic artifacts, executable playbooks and an MCP server.

**Architectural boundary:** the platform owns the normalized governance and architecture graph, not a duplicate general-purpose source-code parser. Structural code intelligence is supplied through replaceable providers such as Codebase Memory and GitNexus. See ADR `docs/architecture/decisions/0003-federated-repository-intelligence.md`.

### Wave 1 — Repository Intelligence Foundation

- [x] Repository scanner and extractor framework
- [x] Provider-neutral `CodeGraphProvider` contract
- [x] Codebase Memory adapter
- [x] GitNexus adapter
- [x] Provider capability, availability and version detection
- [x] Normalized repository metadata and stable identifiers
- [x] Source and provider provenance metadata
- [x] Indexed commit SHA and freshness tracking
- [x] Bounded incremental local refresh for changed source paths
- [x] Clean deterministic regeneration for CI

### Wave 2 — Federated Knowledge Graph

- [x] Unified normalized graph schema for structural and governance knowledge
- [x] Platform extraction for models, controllers, jobs, policies, components, tests and documents
- [x] Provider extension points for additional symbols, routes, services, views and call relationships
- [x] Governance relationships for contracts, playbooks, documentation, tests and invariants
- [x] Security, privacy and tenant-invariant discovery through machine-readable contracts
- [x] Stable node and edge types with source metadata
- [x] Recursive dependency traversal and bounded graph queries
- [x] Cross-layer impact-analysis engine
- [x] Graph diff support and changed-impact reporting
- [x] Orphan, broken-reference and invalid-edge validation

### Wave 3 — Graph Storage and Distribution

- [x] Provider-native indexes treated as replaceable disposable caches
- [x] Local normalized SQLite query store
- [x] Transactional full and source-scoped node and edge replacement
- [x] Deterministic committed architectural graph snapshot
- [x] JSON and JSON-LD exports
- [x] Mermaid and Graphviz DOT exports
- [x] Snapshot hashes and schema-version metadata
- [x] CI artifacts for repository intelligence evidence
- [x] Drift detection between generated source artifacts, normalized snapshots and committed evidence

### Wave 4 — Machine-Readable Contracts

- [x] Versioned module contracts
- [x] Ownership, dependency and invariant contracts
- [x] Security and privacy contracts
- [x] Tenant-boundary contracts
- [x] Required test and documentation declarations
- [x] Versioned contract schemas
- [x] Contract structure validation
- [x] Public façade and capability contracts for Repository Intelligence

### Wave 5 — Generated AI Artifacts

- [x] Generated architecture and repository manifests
- [x] Generated global and per-module AI contexts
- [x] Generated architecture and module documentation
- [x] Generated dependency and impact reports
- [x] Generated Mermaid architecture diagrams
- [x] Generated repository readiness and documentation-quality reports
- [x] Architecture, documentation and AI-context consistency checks
- [x] SHA-256 checksums and deterministic regeneration verification

### Wave 6 — Executable Playbook Engine

- [x] Versioned, cross-vendor playbook specification
- [x] Typed inputs and placeholder interpolation
- [x] Deterministic stages, timeouts, retries and completion gates
- [x] Feature implementation and bug-fix playbooks
- [x] Refactoring and security-review playbooks
- [x] Release-readiness playbook
- [x] Validation and repository-readiness execution paths
- [x] Structured per-step execution evidence and lifecycle events
- [x] Safe execution boundaries with no arbitrary shell, SQL or Ruby evaluation

### Wave 7 — MCP Server Module

#### Resources

- [x] Repository and architecture manifests
- [x] Normalized graph, capabilities and statistics
- [x] Machine-readable contracts
- [x] AI contexts and generated architecture documentation
- [x] Executable playbooks
- [x] Readiness, health, freshness and audit reports

#### Tools

- [x] Repository and symbol search
- [x] Module, contract and playbook descriptions
- [x] Dependency paths and bounded graph queries
- [x] Cross-layer impact analysis
- [x] Architecture, graph, contract, context and repository validation
- [x] Manifest, graph, AI-context and documentation generation behind explicit write capabilities
- [x] Bounded executable playbook runs and execution status
- [x] Repository health, remediation and readiness reporting

#### Prompts

- [x] Feature implementation
- [x] Bug investigation and correction
- [x] Security review
- [x] Refactoring
- [x] Release preparation and repository readiness

#### Security and transport

- [x] Stdio transport for local clients
- [x] Versioned MCP schemas and capability discovery
- [x] Read-only operation by default
- [x] Explicit capability flag for generated-file writes
- [x] Repository-root path allowlisting and traversal protection
- [x] Output limits, request budgets and execution timeouts
- [x] Structured audit records and lifecycle events for tool execution
- [x] End-to-end MCP protocol certification
- [x] Remote transport explicitly deferred until authenticated authorization and deployment contracts are defined

### Wave 8 — AI Readiness Pipeline

- [x] Architecture, graph and generated-artifact drift detection
- [x] Graph freshness and commit synchronization validation
- [x] Contract and playbook structure validation
- [x] Documentation and AI-context drift detection
- [x] Playbook completion-gate validation
- [x] Generated artifact reproducibility checks
- [x] Typed repository health and readiness quality gate
- [x] Clean-worktree generation, validation and MCP certification in CI
- [x] Provider failure, recovery, incremental-equivalence and security regression tests
- [x] Final GitHub Actions certification run #195 fully green

### Accepted boundaries and deferrals

- A general-purpose parser, complete language-level call graph and provider-native index are intentionally delegated to replaceable external providers.
- Remote MCP transport remains deferred until authentication, authorization, deployment and operational contracts are designed.
- Comprehensive public-API semantic-version breaking-change analysis, specialized i18n/design-system validators and broader multi-agent product workflows are outside the Epic 8 baseline. They may be considered in a separate future product or Repository Intelligence roadmap and do not redefine Epic 9.

**Target architecture:** source repository → external structural code-graph provider plus platform scanners → normalized governance graph → SQLite query store and deterministic committed snapshots → canonical `RepositoryIntelligence` façade → CLI, CI, generated documentation and MCP resources, tools and prompts.

**Delivery evidence:** PRs #24 and #26 through #31 implemented the Repository Intelligence platform in focused phases; PR #33 added final stabilization and certification.

**Quality evidence:** provider independence; deterministic manifests, graph snapshots and AI artifacts; source and commit provenance; transactional SQLite refresh; bounded semantic queries; read-only-by-default MCP capabilities; executable playbook security boundaries; typed validators and health aggregation; clean-worktree certification; provider failure and recovery tests; incremental/full-rebuild equivalence; traversal and request-budget regressions; SBOM evidence; and fully green CI run #195.

**Exit criteria:** satisfied. Provider-specific indexes are replaceable and disposable; the normalized governance graph can be regenerated from source; MCP resources, tools and prompts operate through shared application services; generated artifacts match a clean CI rebuild; accepted deferrals are recorded; and the final certification run is fully green.

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

### First-Run Installation and Provisioning

- [ ] Detect incomplete installation independently for development and production.
- [ ] Open the local installation URL automatically from the development launcher when practical.
- [ ] Redirect all non-health and non-asset application requests to the active installation step until completion.
- [ ] Protect production setup with a one-time, expiring bootstrap token, rate limiting and one concurrent installation session.
- [ ] Import, export and validate the canonical design-system YAML configuration.
- [ ] Provide structured token editing, light/dark/system preview and immediate application of newly generated design-system artifacts.
- [ ] Configure the application name, default and supported locales, full logo, compact logo and favicon.
- [ ] Allow production deployments to disable the complete token editor while optionally retaining limited branding configuration.
- [ ] Test the PostgreSQL administrative connection without using the primary Active Record connection.
- [ ] Provision the application database and owner role through a temporary direct PostgreSQL connection.
- [ ] Support an optional least-privilege split between database migration ownership and application runtime access.
- [ ] Never persist PostgreSQL administrative credentials and clear them after the temporary connection closes.
- [ ] Redact database passwords, bootstrap tokens and connection strings from logs, audit events and error reports.
- [ ] Persist only application database credentials through a pluggable secret-store contract suitable for local files, Rails credentials, container secrets or operator-managed environment variables.
- [ ] Stream structured provisioning and migration progress to the browser through Turbo Streams.
- [ ] Make role creation, database creation, ownership assignment, secret persistence and migrations idempotent and resumable.
- [ ] Verify the migrated schema before allowing initial account creation.
- [ ] Create the initial platform owner with name, email, password confirmation, locale and time zone.
- [ ] Create the initial organization and owner membership atomically when required by the tenant contract.
- [ ] Persist an environment-specific local installation marker before database availability and a database-backed installation record after migrations.
- [ ] Require both local and database state checks so deleting one marker cannot reopen a completed production wizard.
- [ ] Permanently disable installation routes and invalidate the bootstrap token after successful completion.
- [ ] Provide retryable, manual-action and security-sensitive failure states with recovery guidance.
- [ ] Add clean-install, interrupted-resume, concurrency, credential-redaction, route-lockout and production-like system tests.
- [ ] Document email-address verification, email-change reconfirmation and resend controls as post-baseline authentication work; the bootstrap owner remains trusted by the protected installation process.

**First-run exit criteria:** a clean development checkout and production-like deployment can reach the login screen through the wizard; generated branding artifacts are deterministic; PostgreSQL administration credentials are never persisted or logged; interrupted provisioning resumes safely; the first platform owner can authenticate; concurrent or repeated setup is denied; and deleting only the local marker cannot reopen an initialized production system.

**Exit criteria:** release engineering, first-run installation, distribution and enterprise-extension capabilities are implemented and CI is green. Completing Epic 9 does not authorize a stable `v1.0.0` release.

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
