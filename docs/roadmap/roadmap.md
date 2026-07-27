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
- [x] Define semantic typography roles for body, headings and code, including role-specific line heights.
- [x] Preserve `font.family.sans` as a temporary compatibility alias for `font.family.body`.
- [x] Migrate framework styles so controls inherit body typography, headings use the heading role and code-like elements use the monospace role.

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

## Epic 9 — Distribution, Installation and Enterprise Extensions

**Status:** 🚧 In progress — Phase 1

**Objective:** transform the repository from a developer-oriented source project into a distributable, installable, upgradeable and professionally extensible platform while preserving a complete Apache-licensed community core.

### Cross-cutting — Installation and Upgrade Contracts

**Objective:** define machine-readable operational contracts that remain stable across installation, deployment and upgrade workflows.

**Capabilities:**

- [ ] Version installation-state, setup-configuration, design-system, deployment-manifest, installed-capability and upgrade-history schemas.
- [ ] Store metadata required for validation without persisting administrative credentials or runtime secrets.
- [ ] Define compatibility, migration and deprecation rules for operational contract versions.
- [ ] Publish schemas and examples for humans, automation and external deployment tooling.
- [ ] Register installation, upgrade and deployment contracts in the Repository Intelligence graph.
- [ ] Validate contract structure, references, supported versions, drift and required evidence through Repository Intelligence and CI.

**Deliverables:** versioned schemas, example manifests, validation rules, Repository Intelligence nodes and edges, CI evidence and compatibility documentation.

**Definition of Done:** installation, upgrade and deployment artifacts have versioned schemas; invalid or stale contracts fail validation; secrets are excluded by contract; and Repository Intelligence can describe, locate and validate the artifacts.

### Phase 1 — First-Run Installation and Provisioning

**Objective:** provide a secure, resumable first-run experience that configures appearance, provisions PostgreSQL, creates the initial platform owner and permanently closes the installer after completion.

**Capabilities:**

- [ ] Implement a reusable wizard engine, installation namespace, step registry and explicit state machine suitable for future upgrade, recovery and maintenance flows.
- [ ] Detect incomplete installation independently for development and production environments.
- [ ] Redirect normal application requests to the active installation step while preserving health checks, required assets and protected installation routes.
- [ ] Open the local installation URL from the development launcher when the operating environment supports it.
- [ ] Protect production setup with a one-time expiring bootstrap token, rate limiting, secure cookies, CSRF protection, strict log redaction and a single concurrent installation lock.
- [ ] Import, export, edit and validate canonical design-system YAML tokens in development installations.
- [ ] Configure body, heading and monospace font families, fallback stacks, role-specific weights and live previews for headings, body copy, controls, grids and code.
- [ ] Validate required font weights and safe fallback stacks.
- [ ] Preview light, dark and system themes and apply generated design-system artifacts immediately after saving appearance settings.
- [ ] Configure application name, logo, compact logo, favicon, default locale and supported locales.
- [ ] Support system stacks, self-hosted assets, approved external stylesheets and deployment-managed CDN font URLs.
- [ ] Generate validated `@font-face` and preload declarations for enabled self-hosted fonts.
- [ ] Enforce font file type, size, integrity, CSP, privacy, licensing acknowledgement and performance policies.
- [ ] Allow production deployments to disable full token editing while retaining explicitly permitted branding fields.
- [ ] Test PostgreSQL connectivity through a temporary administrative connection independent of the application Active Record database.
- [ ] Collect maintenance database, host, port, SSL mode and temporary administrative credentials without persisting or logging them.
- [ ] Provision the application database and owner role with validated identifiers and minimum required privileges.
- [ ] Preserve an extension point for separate database-owner or migrator and runtime application roles.
- [ ] Close the administrative connection and clear administrative credentials from process memory immediately after provisioning.
- [ ] Persist only application database credentials through a pluggable secret-store contract for local dotenv files, Rails credentials, container secrets or operator-managed environment variables.
- [ ] Stream structured provisioning, migration and recovery progress without exposing connection strings, passwords or bootstrap tokens.
- [ ] Make role creation, database creation, ownership assignment, secret persistence and migrations idempotent and resumable.
- [ ] Run migrations with the application or migration role and verify the resulting schema.
- [ ] Create the initial platform owner with name, email, password, password confirmation, locale and time zone.
- [ ] Create the initial organization and owner membership required by the multi-tenant contract.
- [ ] Record pre-database state in an environment-specific local marker and post-migration state in a database-backed installation record.
- [ ] Require local and database completion evidence so deleting one file cannot reopen an initialized production wizard.
- [ ] Permanently invalidate the bootstrap token and deny installation routes after successful completion.
- [ ] Provide safe retry, manual-intervention and recovery states for interrupted provisioning.
- [ ] Add clean-install, interrupted-install, concurrent-attempt, credential-redaction, traversal, replay and production-like system tests.
- [ ] Record email-address verification, email-change reconfirmation and resend controls as post-baseline authentication work; trust the bootstrap owner through the protected installation process.

**Deliverables:** installation architecture and security documentation; wizard and state-machine contracts; appearance, database and owner steps; secret-store and progress contracts; installation records; development launcher integration; recovery guidance; and certification evidence.

**Dependencies:** Epic 2 design-token pipeline, Epic 6 multi-tenant ownership contracts, Epic 7 security controls and Epic 8 Repository Intelligence validation.

**Definition of Done:** clean development and production-like deployments reach login through the protected wizard; appearance artifacts are deterministic; PostgreSQL is provisioned without retaining administrative credentials; migrations and owner creation resume safely; concurrent or replayed setup is blocked; completed installations cannot reopen the wizard; and security, recovery and end-to-end tests are green.

**Deferred typography evolution:** token references, composite typography objects, responsive or fluid type scales, variable-font axes, per-component overrides and tenant-specific font assets remain future extensions unless required by the first-run implementation.

### Phase 2 — Packaging and Distribution

**Objective:** provide supported, repeatable ways to start and deploy the platform without requiring intimate Rails repository knowledge.

**Capabilities:**

- [ ] Define supported Docker and Podman Compose development and production profiles.
- [ ] Publish versioned OCI images with non-root execution, health checks and explicit persistence boundaries.
- [ ] Provide Dev Container and Codespaces configurations.
- [ ] Document and validate deployment profiles for Kamal and selected hosted platforms where maintainable.
- [ ] Validate required environment variables, secrets, writable paths and external service dependencies before boot.
- [ ] Keep packaging outputs reproducible and linked to source, SBOM and provenance metadata.

**Deliverables:** container definitions, compose profiles, development-container configuration, deployment examples, environment contract and packaging certification.

**Dependencies:** Phase 1 installation contracts and Phase 4 canonical version metadata.

**Definition of Done:** a clean environment can start a supported development or production-like distribution using published commands; images are versioned, non-root and reproducible; persistent data survives replacement; and packaging tests are green.

### Phase 3 — Upgrade Framework

**Objective:** make supported upgrades observable, repeatable and recoverable rather than undocumented migration events.

**Capabilities:**

- [ ] Introduce versioned upgrade manifests and compatibility checks.
- [ ] Reuse the wizard engine for upgrade and recovery flows.
- [ ] Detect source version, target version, required migrations, contract changes and operator actions.
- [ ] Require pre-upgrade backups and verify backup evidence where supported.
- [ ] Execute database, configuration and generated-artifact migrations with structured progress.
- [ ] Record upgrade history and post-upgrade validation evidence.
- [ ] Produce rollback or forward-recovery guidance for non-reversible changes.

**Deliverables:** upgrade contract, planner, runner, history model, recovery guide, compatibility matrix and upgrade certification fixtures.

**Dependencies:** Phase 1 wizard and operational contracts, Phase 4 release metadata and Phase 7 backup validation.

**Definition of Done:** at least one representative supported-version upgrade succeeds from planning through validation; interrupted upgrades resume or fail safely; history and evidence are recorded; and incompatibilities are explained before destructive work begins.

### Phase 4 — Release Engineering

**Objective:** establish one deterministic source of truth for versioning, change impact, changelogs, release notes and release artifacts.

**Capabilities:**

- [ ] Establish a root `VERSION` file as the canonical released project version.
- [ ] Add per-PR YAML change fragments with `none`, `patch`, `minor` or `major` release impact.
- [ ] Require release-impact declarations and validate fragment structure in CI.
- [ ] Generate and maintain `CHANGELOG.md` from accepted fragments using Added, Changed, Deprecated, Removed, Fixed and Security sections.
- [ ] Reconstruct historical changelog entries from merged pull requests and release evidence.
- [ ] Generate GitHub release notes, migration notes and upgrade guidance from normalized release metadata.
- [ ] Add release preparation automation that updates `VERSION`, consumes fragments, updates documentation and opens a release pull request.
- [ ] Verify consistency among `VERSION`, Git tags, release notes, compatibility data, SBOM and provenance metadata.
- [ ] Detect public-contract and operational-contract changes that require release-impact escalation.

**Deliverables:** version contract, change-fragment schema, changelog, release preparation workflow, release-evidence manifest and Repository Intelligence release queries.

**Dependencies:** Epic 8 Repository Intelligence and the cross-cutting operational contracts.

**Definition of Done:** one command or workflow prepares a deterministic release pull request; CI rejects inconsistent version and release evidence; generated notes and changelog agree; and release metadata is queryable through Repository Intelligence.

### Phase 5 — Enterprise Extension Platform

**Objective:** allow separately licensed enterprise capabilities to integrate without forking, weakening or removing essential community functionality.

**Capabilities:**

- [ ] Define community and enterprise repository boundaries.
- [ ] Introduce extension, capability and dependency contracts.
- [ ] Validate compatible platform and extension versions before loading.
- [ ] Provide explicit registration hooks instead of monkey patches or implicit constant replacement.
- [ ] Isolate extension configuration, migrations, routes, assets and documentation.
- [ ] Define fail-closed behavior when an extension is missing, incompatible or invalid.
- [ ] Extract proven community modules into versioned gems only where independent distribution is justified.

**Deliverables:** extension API, capability registry integration, compatibility contract, example extension, enterprise repository contract and isolation tests.

**Dependencies:** Phase 3 compatibility tooling and Phase 4 canonical versioning.

**Definition of Done:** an example external extension can register and operate through documented contracts without modifying community source; incompatible extensions are rejected safely; and the community edition remains complete and testable independently.

### Phase 6 — Distribution Channels

**Objective:** publish verified release artifacts through supported channels with consistent identity and provenance.

**Capabilities:**

- [ ] Publish GitHub Releases and GHCR images from approved release metadata.
- [ ] Evaluate Docker Hub, RubyGems and Helm distribution only for artifacts with clear support and ownership contracts.
- [ ] Sign or attest release artifacts where supported.
- [ ] Publish checksums, SBOMs, provenance, compatibility data and upgrade notes beside each release.
- [ ] Verify channel contents against the canonical release-evidence manifest.

**Deliverables:** channel workflows, signed or attested artifacts, release index and verification documentation.

**Dependencies:** Phases 2 and 4.

**Definition of Done:** approved releases publish identical versioned artifacts and evidence to every supported channel; channel drift is detected; and consumers can verify artifact origin and integrity.

### Phase 7 — Operational Readiness

**Objective:** provide operators with tested backup, restore, diagnostics, observability and support workflows.

**Capabilities:**

- [ ] Define backup and restore contracts for PostgreSQL, uploaded files, generated configuration and installation metadata.
- [ ] Validate restore procedures in production-like environments.
- [ ] Provide diagnostic and support bundles with mandatory secret and personal-data redaction.
- [ ] Expose installation, deployment, job, storage and integration health signals.
- [ ] Document disaster-recovery objectives, failure modes and manual interventions.
- [ ] Test rolling replacement, restart, backup, restore and degraded-dependency scenarios.

**Deliverables:** operator runbooks, backup and restore tooling, support-bundle contract, health dashboard inputs and operational certification evidence.

**Dependencies:** Phases 1–3 and existing observability, privacy and security contracts.

**Definition of Done:** a production-like deployment can be backed up, destroyed and restored using documented workflows; diagnostics omit secrets and protected data; failure modes are observable; and recovery tests are green.

### Phase 8 — Commercial Readiness

**Objective:** prepare neutral extension points for commercial operation without embedding proprietary policy in the community core.

**Capabilities:**

- [ ] Define edition and entitlement abstractions without hard-coding a licensing vendor.
- [ ] Define customer, support and installation identifiers with privacy and rotation rules.
- [ ] Provide opt-in telemetry contracts with transparent collection, redaction and disablement behavior.
- [ ] Define enterprise support metadata and diagnostic consent boundaries.
- [ ] Ensure unavailable commercial services never disable essential community functionality.

**Deliverables:** edition contract, entitlement interface, telemetry contract, privacy documentation and no-license community-mode tests.

**Dependencies:** Phase 5 extension boundaries and Phase 7 operational diagnostics.

**Definition of Done:** commercial integrations can consume stable neutral contracts externally; community operation requires no license service; telemetry is opt-in and inspectable; and privacy and security reviews are complete.

### Phase 9 — Documentation and Operator Guides

**Objective:** make installation, deployment, operation, extension and upgrade workflows usable without undocumented maintainer knowledge.

**Capabilities:**

- [ ] Publish administrator, installation, deployment, upgrade, recovery, operator and enterprise-extension guides.
- [ ] Document supported environments, compatibility matrices and lifecycle policies.
- [ ] Provide architecture, state-machine, sequence, security and recovery diagrams for operational flows.
- [ ] Add copy-pasteable examples that are continuously tested where practical.
- [ ] Connect every operational contract and guide to Repository Intelligence ownership and freshness checks.

**Deliverables:** complete operational documentation set, tested examples, diagrams, troubleshooting index and documentation-readiness evidence.

**Dependencies:** documentation follows the contracts and evidence delivered by Phases 1–8.

**Definition of Done:** a new operator can install, deploy, upgrade, recover and diagnose a supported environment using published documentation; examples match current behavior; and Repository Intelligence reports no release-blocking documentation drift.

**Epic 9 exit criteria:** all nine phases and cross-cutting contracts satisfy their Definitions of Done; installation, packaging, upgrades, releases, extensions, distribution and operations are supported by green production-like certification; Repository Intelligence validates operational contracts and manifests; and CI is green. Completing Epic 9 does not authorize a stable `v1.0.0` release.

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
