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

**Exit criteria:** satisfied.

## Epic 1 — Platform Core

**Status:** ✅ Complete

- [x] Supported Ruby, Rails and PostgreSQL baseline
- [x] Rails scaffold with PostgreSQL
- [x] Hotwire and ViewComponent
- [x] First-party Rails authentication
- [x] Authorization contracts
- [x] Request context, health checks, structured logging and error handling
- [x] Developer commands and CI security pipeline

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
- [x] Canonical safe YAML token source
- [x] Strict versioned schema validation
- [x] Deterministic JSON, CSS and frozen Ruby generation
- [x] Generated-artifact drift checks
- [x] Semantic typography roles for body, headings and code

**Delivery evidence:** PRs #5 through #10 and the Epic 2 design-token refinement PR.

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

## Epic 4 — Domain Framework and Reference Application

**Status:** ✅ Complete

- [x] Operations, queries, policies and domain events
- [x] Rich domain model conventions
- [x] Reference Customers capability
- [x] CRUD with grid, audit, authorization and i18n
- [x] Optimistic locking and conflict UI
- [x] System and security tests

**Delivery evidence:** PR #15.

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

## Epic 6 — Multi-Tenant Platform

**Status:** ✅ Complete

- [x] Organization workspace model
- [x] Membership-based access boundary
- [x] Owner, administrator and member roles
- [x] Organization authorization policies
- [x] Invitations and signed invitation acceptance
- [x] Role administration, member removal and final-owner protection
- [x] Active tenant context and tenant selection
- [x] Tenant isolation guarantees across domain queries
- [x] Tenant-specific permissions, themes and localization
- [x] Tenant-safe Enterprise Services
- [x] Cross-tenant leakage tests
- [x] Ownership-transfer workflow

**Delivery evidence:** PRs #11, #12, #20 and #22.

## Epic 7 — Security and Privacy

**Status:** ✅ Complete

- [x] Privacy and LGPD workflows
- [x] Secure headers and CSP
- [x] Rate limiting and abuse controls
- [x] Secrets and key management
- [x] Dependency, SBOM and provenance automation
- [x] Threat models and security test suites

**Delivery evidence:** PR #21.

## Epic 8 — AI Platform and Repository Intelligence

**Status:** ✅ Complete

**Objective:** transform the repository into a self-describing, provider-neutral AI engineering platform.

- [x] Repository scanner and provider-neutral structural intelligence adapters
- [x] Normalized governance and architecture graph
- [x] Transactional SQLite query store and deterministic snapshots
- [x] Versioned machine-readable contracts
- [x] Generated manifests, AI contexts, documentation and diagrams
- [x] Executable playbook engine
- [x] Read-only-by-default MCP server
- [x] Repository health, readiness, freshness and remediation reporting
- [x] Clean-worktree generation and certification in CI
- [x] Provider failure, recovery, incremental-equivalence and security regression tests

**Delivery evidence:** PRs #24 and #26 through #31; PR #33 delivered final stabilization and certification.

**Exit criteria:** satisfied with the accepted provider and remote-transport boundaries documented in the Epic 8 architecture records.

## Epic 9 — Distribution, Installation and Enterprise Extensions

**Status:** 🚧 In progress — Phase 6 distribution contracts

**Objective:** transform the repository from a developer-oriented source project into a distributable, installable, upgradeable and professionally extensible platform while preserving a complete Apache-licensed community core.

### Cross-cutting — Installation and Upgrade Contracts

**Status:** ◐ Partially delivered

- [x] Version installation-state and setup-configuration contracts used by Phase 1.
- [x] Exclude administrative credentials and runtime secrets from persisted installation metadata.
- [x] Publish installation schemas and operator documentation.
- [x] Register and validate Phase 1 installation contracts through Repository Intelligence and CI.
- [x] Define shared compatibility, migration and deprecation rules for installation, deployment and upgrade contract versions.
- [x] Complete and certify the upgrade-history and upgrade-recovery schemas.
- [x] Validate cross-contract references, supported versions and operational evidence for Phases 1–3.
- [ ] Complete deployment-manifest and installed-capability schemas in their owning later phases.
- [ ] Extend cross-contract validation and operational evidence across the remaining Epic 9 phases.

### Phase 1 — First-Run Installation and Provisioning

**Status:** ✅ Complete — delivered baseline

**Objective:** provide a secure, resumable first-run experience that configures appearance, provisions PostgreSQL, creates the initial global platform administrator and initial tenant, and permanently closes the installer after completion.

#### Delivered capabilities

- [x] Reusable installation namespace, wizard engine, step registry and explicit state machine.
- [x] Environment-specific installation-state detection and resumable local state.
- [x] Installation gate redirecting normal requests while preserving health endpoints and required installer routes.
- [x] Expiring bootstrap-token protection, secure session handling, CSRF protection, log filtering and exclusive execution locking.
- [x] Canonical design-system YAML import, editing, validation, deterministic generation and export where environment policy permits.
- [x] Light and dark design previews and immediate application of regenerated artifacts.
- [x] Application name, logo, compact logo, favicon, default locale and supported-locale configuration.
- [x] Production policy allowing branding while disabling full token editing by default.
- [x] Temporary PostgreSQL administrative connectivity testing outside the application Active Record connection.
- [x] Request-scoped collection of maintenance database, host, port, SSL mode and administrative credentials without persistence or progress leakage.
- [x] Validated and idempotent application role and database provisioning.
- [x] Pluggable secret-store contract with atomic local environment-file implementation and restrictive permissions.
- [x] Structured, bounded and credential-free provisioning and migration progress records.
- [x] Isolated migration execution against the provisioned runtime database.
- [x] Required-schema verification and database-backed installation evidence.
- [x] Initial user creation with normalized email and BCrypt password hashing.
- [x] Dedicated global `platform_admin` authority stored independently from tenant memberships.
- [x] Initial organization creation and organization-scoped `owner` membership for the first administrator.
- [x] Idempotent reconciliation of user, platform role, organization and owner membership.
- [x] Terminal local and database-backed completion evidence.
- [x] Bootstrap installation-session invalidation and denial of installer access after completion.
- [x] Safe retry paths for provisioning and migration failures.
- [x] Regression coverage for wizard rendering, state progression, credentials, CSRF, concurrency-sensitive state isolation and completion closure.

#### Authority model

The first account receives two separate assignments:

1. `PlatformRole(role: "platform_admin")` for global platform administration and future tenant management.
2. `Membership(role: "owner")` scoped only to the initial organization.

Organization owners do not automatically receive platform-wide authority.

#### Delivery evidence

- PR #37 — installation architecture and planning.
- PR #38 — installer foundation, state machine, gate and bootstrap protection.
- PR #39 — appearance and branding wizard.
- PR #40 — PostgreSQL connectivity and idempotent provisioning.
- PR #41 — migration orchestration and database-backed evidence.
- PR #42 — global platform administrator, initial tenant ownership and terminal completion.
- Final Phase 1 CI certification: run #239 fully green.

#### Accepted deferrals

The following items are not part of the completed Phase 1 baseline and remain future work:

- development-launcher browser opening;
- self-hosted font upload and delivery workflows;
- approved external stylesheet and deployment-managed CDN font providers;
- generated `@font-face` and preload declarations;
- font integrity, licensing acknowledgement and performance-policy automation;
- operator-managed secret-store adapters and production restart handoff;
- live Turbo progress streaming;
- broader production-like packaging and end-to-end installation certification;
- post-baseline email verification, email-change reconfirmation and resend controls.

**Phase 1 exit criteria:** satisfied for the delivered baseline. The protected wizard configures appearance, provisions PostgreSQL, runs and verifies migrations, creates the global platform administrator and initial tenant ownership, records completion evidence, blocks replay, and passes the merged CI gate.

### Phase 2 — Packaging and Distribution

**Status:** ✅ Complete

**Objective:** provide supported, repeatable ways to start and deploy the platform without requiring intimate Rails repository knowledge.

- [x] Define supported Docker and Podman Compose development and production profiles.
- [x] Publish versioned OCI images with non-root execution, health checks and explicit persistence boundaries.
- [x] Provide Dev Container and Codespaces configurations.
- [x] Document and validate private VPS deployment through Kamal.
- [x] Document and validate a selected hosted-platform profile through Render.com.
- [x] Validate required environment variables, secrets, writable paths and external service dependencies before boot.
- [x] Keep packaging outputs reproducible and linked to source, SBOM and provenance metadata.

**Delivery evidence:** PR #44 delivered the container and Compose baseline; PR #45 added Dev Container and Codespaces support; PR #46 added the Kamal deployment profile and certification; PR #47 added private VPS operational preflight and the Render.com Blueprint profile; PR #48 added the committed dependency lock and reproducible OCI packaging certification; PR #49 adds repository-derived OCI identity and certified multi-platform GHCR publication.

**Deliverables:** container definitions, compose profiles, development-container configuration, deployment examples, environment contract and packaging certification.

**Definition of Done:** a clean environment can start a supported development or production-like distribution using published commands; images are versioned, non-root and reproducible; persistent data survives replacement; and packaging tests are green.

### Phase 3 — Upgrade Framework

**Status:** ✅ Complete

- [x] Versioned upgrade manifests and compatibility checks.
- [x] Reuse the wizard engine concepts for locked, resumable upgrade flows.
- [x] Detect source version, target version, migrations, contract changes and operator actions.
- [x] Require and verify pre-upgrade backup evidence where supported.
- [x] Run registered database, configuration and generated-artifact operations with structured progress.
- [x] Record upgrade history and post-upgrade validation evidence.
- [x] Produce rollback or forward-recovery guidance.

**Delivery evidence:** PRs #50–#52 deliver contracts, preflight, backup evidence and maintenance safety. PR #53 adds the exclusive, resumable registered-operation execution engine. PR #54 adds post-upgrade verification, manifest-digest history and replay prevention. PR #55 adds deterministic recovery classification, operator guidance, rollback boundaries and end-to-end upgrade certification.

### Phase 4 — Release Engineering

**Status:** ✅ Complete

- [x] Establish a root `VERSION` file as the canonical released project version.
- [x] Add per-PR YAML change fragments with release-impact declarations.
- [x] Validate release-impact declarations in CI.
- [x] Generate and maintain `CHANGELOG.md`.
- [x] Generate release, migration and upgrade notes from normalized metadata.
- [x] Automate deterministic release-preparation pull requests.
- [x] Verify consistency among version, tags, release notes, compatibility data, SBOM and provenance.

**Delivery evidence:** PRs #56–#60 establish the canonical version and change fragments, enforce release impact, generate release documents, automate draft release-preparation pull requests, and certify cross-artifact version consistency.

### Phase 5 — Enterprise Extension Platform

**Status:** ✅ Complete

- [x] Define community and enterprise repository boundaries.
- [x] Introduce extension, capability and dependency contracts.
- [x] Validate compatible platform and extension versions before loading.
- [x] Provide explicit registration hooks instead of monkey patches.
- [x] Isolate extension configuration, migrations, routes, assets and documentation.
- [x] Define fail-closed behavior for missing or incompatible extensions.

**Delivery evidence:** PRs #61–#65 establish the community boundary,
versioned package contracts, read-only compatibility preflight, deterministic
registration and loading, component isolation, upgrade-state observations and
fail-closed runtime readiness. PR #66 adds the production-like fixture,
adversarial and extension-free certification matrix, Repository Intelligence
evidence and the author, installation, deployment, upgrade, recovery and
operator lifecycle guides.

### Phase 6 — Distribution Channels

**Status:** 🚧 In progress

- [x] Define versioned distribution-manifest, channel-state and
  publication-evidence contracts.
- [x] Inspect approved release inputs and channel observations through a
  read-only fail-closed preflight.
- [x] Add protected, immutable GitHub Release publication from a certified
  artifact bundle.

- [ ] Publish GitHub Releases and GHCR images from approved release metadata.
- [ ] Evaluate additional channels only where support and ownership are explicit.
- [ ] Sign or attest release artifacts where supported.
- [ ] Publish checksums, SBOMs, provenance, compatibility data and upgrade notes.
- [ ] Verify channel contents against canonical release evidence.

**Delivery evidence:** PR #67 establishes the supported-channel boundary,
repository-derived identity, immutable publication and recovery policy,
credential-free evidence contracts, Repository Intelligence ownership and
focused contract certification without publishing release state. PR #68 adds
read-only distribution inspection, fail-closed preflight, stable findings,
operator actions and human or JSON CLI reporting. PR #69 adds
checksum-verified artifact planning and a protected GitHub Release workflow
bound to the exact approved `main` commit.

### Phase 7 — Operational Readiness

**Status:** ⏳ Planned

- [ ] Define backup and restore contracts for PostgreSQL, files, generated configuration and installation metadata.
- [ ] Validate restore procedures in production-like environments.
- [ ] Provide redacted diagnostic and support bundles.
- [ ] Expose installation, deployment, job, storage and integration health signals.
- [ ] Document disaster-recovery objectives and manual interventions.
- [ ] Test restart, replacement, backup, restore and degraded-dependency scenarios.

### Phase 8 — Commercial Readiness

**Status:** ⏳ Planned

- [ ] Define neutral edition and entitlement abstractions.
- [ ] Define customer, support and installation identifiers with privacy and rotation rules.
- [ ] Provide opt-in telemetry contracts with transparent redaction and disablement.
- [ ] Define enterprise support metadata and diagnostic-consent boundaries.
- [ ] Ensure unavailable commercial services never disable essential community functionality.

### Phase 9 — Documentation and Operator Guides

**Status:** ⏳ Planned

- [ ] Publish administrator, installation, deployment, upgrade, recovery, operator and extension guides.
- [ ] Document supported environments, compatibility matrices and lifecycle policies.
- [ ] Provide architecture, state-machine, sequence, security and recovery diagrams.
- [ ] Add continuously tested examples where practical.
- [ ] Connect operational contracts and guides to Repository Intelligence ownership and freshness checks.

**Epic 9 exit criteria:** all phases and cross-cutting contracts satisfy their Definitions of Done; installation, packaging, upgrades, releases, extensions, distribution and operations are supported by green production-like certification; Repository Intelligence validates operational contracts and manifests; and CI is green. Completing Epic 9 does not authorize a stable `v1.0.0` release.

## Epic 10 — Framework Validation and Release Readiness

**Status:** ⏳ Planned

- [ ] Publish one or more pre-1.0 release candidates.
- [ ] Build at least one representative application using only documented framework contracts.
- [ ] Upgrade a sample application across at least one release candidate.
- [ ] Validate installation, configuration, design-system customization, grid usage, domain conventions, enterprise services and multi-tenant behavior.
- [ ] Exercise production-like deployment, jobs, files, exports, observability, backup and recovery.
- [ ] Run accessibility, security, privacy, performance, compatibility and cross-tenant leakage validation.
- [ ] Resolve or explicitly accept all release-blocking findings.
- [ ] Confirm public contracts, support policy, compatibility matrix, upgrade policy and deprecation process.

**`v1.0.0` release gate:** all Epic 10 validation evidence is complete; no unresolved critical or high-severity release blockers remain; representative applications can be created, operated and upgraded using published documentation; and stable public contracts are approved.

## Release targets

- ✅ `v0.1.0`: executable platform core baseline delivered
- ✅ `v0.2.0`: design system and i18n baseline delivered
- ✅ `v0.3.0`: grid engine baseline delivered
- ✅ `v0.4.0`: reference application and domain framework baseline delivered
- ⏳ `v0.9.0`: feature-complete pre-release after Epic 9
- ⏳ `v1.0.0-rc.1`: validation candidate for Epic 10
- ⏳ `v1.0.0`: stable documented contracts released only after the Epic 10 validation gate passes
