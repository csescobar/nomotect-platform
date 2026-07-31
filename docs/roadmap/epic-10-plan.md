# Epic 10 — Framework Validation and Release Readiness

## Purpose

Epic 10 validates that NomoTect can be adopted as a framework rather than only
certified as its own source repository. It must prove that unfamiliar
application teams can create, customize, operate and upgrade representative
applications through documented public contracts.

Epic 10 is the sole gate for release candidates and the stable `v1.0.0`
release. Completing Epic 9 does not satisfy this gate.

## Outcomes

Epic 10 must produce evidence that:

1. a representative application can be created without private maintainer
   knowledge or direct modification of protected platform internals;
2. installation, customization, domain development, multi-tenancy and
   operational services work together through supported contracts;
3. an installed representative application can upgrade between release
   candidates with verified recovery guidance;
4. production-like deployment, jobs, files, exports, observability, backup and
   restore operate as documented;
5. accessibility, security, privacy, performance, compatibility and tenant
   isolation meet explicit release thresholds;
6. release-blocking findings are resolved or explicitly accepted through a
   recorded human decision;
7. public contracts, support boundaries, compatibility policy and deprecation
   process are approved before `v1.0.0`.

## Scope boundaries

### In scope

- pre-1.0 release-candidate preparation and publication;
- a repository-owned representative application or fixture;
- documented creation, installation, customization, deployment and upgrade
  journeys;
- production-like and adversarial validation;
- measurable release criteria and machine-readable evidence;
- remediation tracking and public-contract freeze;
- final Epic 10 and stable-release certification.

### Out of scope

- feature expansion unrelated to a validation finding;
- mandatory dependence on NomoTect commercial services;
- automatic publication of a stable release without human approval;
- claims about environments or providers outside the supported matrix;
- replacing application-specific product acceptance testing;
- guaranteeing compatibility for undocumented internal APIs.

## Delivery principles

- **Evidence over claims:** every completed criterion references executable,
  reviewable or operator-observed evidence.
- **Public contracts only:** the representative application must not rely on
  undocumented internal hooks.
- **Community-complete:** validation succeeds with optional commercial
  providers unavailable.
- **Production-like, not production-destructive:** infrastructure journeys use
  controlled fixtures and non-production data.
- **Fail closed:** missing evidence cannot be interpreted as success.
- **Human release authority:** RC and stable publication remain protected,
  explicitly approved actions.
- **One focused PR per task:** implementation follows dependency-ready branches,
  PR-numbered change fragments and complete CI.

## Phase 1 — Validation architecture and RC baseline

### Objective

Define the validation system, evidence schemas, supported environment matrix and
release thresholds before testing the framework.

### Deliverables

- Epic 10 validation architecture and threat model;
- machine-readable validation-plan, finding and certification schemas;
- severity, ownership, waiver, expiry and remediation rules;
- supported environment and browser matrix;
- measurable accessibility, security, privacy, performance and compatibility
  thresholds;
- `v1.0.0-rc.1` preparation criteria;
- Repository Intelligence ownership and freshness registration.

### Exit criteria

- schemas and thresholds are versioned and validated;
- every later phase maps to required evidence;
- waivers require owner, rationale, expiry and human approval;
- critical and high-severity blockers cannot be silently waived;
- RC preparation is reproducible and does not publish automatically.

## Phase 2 — Representative application

### Objective

Build a realistic application using only documented NomoTect contracts and
extension points.

**Architecture baseline:** delivered by PR #147. The governed service-request
workspace fixture, public-contract allowlist, forbidden dependencies, evidence
boundary and required manual reviews are defined before implementation.

**Foundation:** delivered by PR #148. Deterministic two-tenant fixture data,
public-dependency validation, cross-tenant assignment rejection and evidence
minimization are executable prerequisites for the capability journeys.

**Design, i18n and grid journey:** delivered by PR #149. Explicit Light/Dark,
English/Brazilian Portuguese, typed grid operators, deterministic saved views
and credential-free CSV export are governed and tested.

**Domain and services journey:** delivered by PR #150. Policy-protected lifecycle
transitions, queries, domain events, idempotent jobs, tenant-safe notifications
and files, checksums, audit evidence and default-off flags are tested.

### Required capability journey

- protected first-run installation and initial tenant;
- Light/Dark customization and English/Brazilian Portuguese localization;
- one non-trivial domain capability using operations, queries, policies and
  domain events;
- grid filtering, sorting, saved views and export;
- organization memberships, roles and tenant isolation;
- background work, notifications, files, imports or exports, workflow,
  integration/webhook behavior and feature flags;
- extension-free operation plus one explicitly registered sample extension;
- audit, health and diagnostic evidence.

### Deliverables

- deterministic representative-application fixture or repository;
- documented build journal that references only public contracts;
- executable setup and certification command;
- proof that protected platform internals were not modified;
- list of documentation gaps and framework friction findings.

### Exit criteria

A clean environment can create and operate the application from published
instructions, and CI reproduces the core journey without private context.

## Phase 3 — Release-candidate upgrade journey

### Objective

Prove that a representative installed application can move between at least two
pre-1.0 candidate states safely.

### Deliverables

- source and target RC fixtures;
- compatibility and upgrade manifests;
- pre-upgrade backup evidence;
- resumable upgrade execution;
- database, configuration and generated-artifact operations;
- post-upgrade verification and history;
- controlled failure injection with rollback or forward-recovery guidance;
- extension compatibility observations.

### Exit criteria

The upgrade succeeds in the normal path, resumes after an injected interruption,
rejects incompatible inputs, records evidence without secrets and provides
deterministic recovery guidance.

## Phase 4 — Functional framework certification

### Objective

Certify the documented application-development contracts as an integrated
system.

### Validation areas

- installation and configuration;
- design-system compilation and Light/Dark behavior;
- i18n and locale resolution;
- grid DSL, adapters and exports;
- domain operations, policies, events and optimistic locking;
- enterprise services;
- multi-tenant authorization and isolation;
- extension lifecycle and community-only fallback;
- Repository Intelligence generation, validation and impact analysis.

### Exit criteria

Each public capability has a representative journey, negative-path coverage and
traceable evidence. Findings are recorded rather than hidden in test output.

## Phase 5 — Production-like operations

### Objective

Operate the representative application through supported deployment and
recovery lifecycles.

### Validation areas

- supported container and deployment profiles;
- configuration and secret guards;
- process restart and application replacement;
- background jobs and idempotency;
- persistent files and exports;
- structured logs, audit records and operational health;
- redacted support bundles and explicit consent;
- backup, restore and disaster-recovery scenarios;
- degraded database, storage and integration dependencies.

### Exit criteria

Supported operational journeys are reproducible, credential-free evidence is
retained, persistent state survives replacement, and recovery returns the
application to a verified state.

## Phase 6 — Cross-cutting quality certification

### Objective

Measure the release candidate against explicit quality thresholds.

### Required certifications

- **Accessibility:** semantic structure, keyboard operation, focus, labels,
  announcements, contrast and supported browser journeys.
- **Security:** authorization, tenant isolation, CSP, abuse controls,
  dependencies, secrets, supply chain and adversarial inputs.
- **Privacy:** minimization, logging/redaction, retention and subject workflows.
- **Performance:** agreed request, query, rendering, job and export budgets
  measured on declared fixtures and infrastructure.
- **Compatibility:** supported Ruby, PostgreSQL, browser, container and
  deployment matrix.
- **Reliability:** retries, idempotency, restart, replacement and dependency
  degradation.
- **AI readiness:** an unfamiliar contributor or agent completes a bounded
  change using repository-native guidance.

### Exit criteria

All mandatory suites pass, measurements record their environment, and every
threshold breach becomes a governed finding.

## Phase 7 — Findings resolution and contract freeze

### Objective

Close validation findings and approve the public surface that `v1.0.0` will
stabilize.

### Deliverables

- consolidated finding inventory with severity, owner and status;
- remediation PRs and regression evidence;
- explicit, expiring acceptance records for eligible residual findings;
- public API and extension-contract inventory;
- compatibility, support, upgrade and deprecation policy approval;
- final documentation freshness and link certification;
- release notes and migration/upgrade guidance review.

### Exit criteria

No unresolved critical or high-severity release blocker remains. Eligible
lower-severity findings are fixed or explicitly accepted. Public contracts and
lifecycle policies are approved and frozen for the stable candidate.

## Phase 8 — Final certification and stable-release gate

### Objective

Aggregate all Epic 10 evidence and determine whether the repository is eligible
for a human-approved `v1.0.0` publication.

### Deliverables

- machine-readable Epic 10 certification catalog;
- executable fail-closed certification command;
- same-commit binding among source, version, notes, artifacts, image digest,
  SBOM, provenance and validation evidence;
- release-candidate observation report;
- stable-release readiness report;
- operator checklist for protected publication and post-publication
  observation.

### Exit criteria

- every phase is complete and certified;
- representative applications can be created, operated and upgraded from
  published documentation;
- required CI and production-like validation are green;
- no critical or high blocker remains;
- stable public contracts are approved;
- a maintainer explicitly authorizes the protected `v1.0.0` publication.

The certification may declare readiness but must never publish or merge
automatically.

## Automation and manual responsibility

| Activity | Repository/Codex automation | Human or external action |
| --- | --- | --- |
| Schemas, fixtures, test harnesses and evidence generation | Implement and run | Review thresholds and evidence meaning |
| Representative application journeys | Build and certify deterministic paths | Product-level usability review |
| Accessibility checks | Automate semantic and interaction coverage | Manual screen-reader and visual review |
| Security and privacy | Static, dynamic and adversarial suites | Risk acceptance and policy approval |
| Performance | Execute repeatable benchmarks | Approve budgets and representative infrastructure |
| Deployment and recovery | Validate controlled production-like fixtures | Approve provider accounts, credentials and disruptive exercises |
| RC/stable artifacts | Prepare and verify same-commit evidence | Approve protected publication |
| Findings | Detect, classify and track | Accept residual risk where policy allows |
| Final certification | Aggregate and fail closed | Authorize `v1.0.0` |

## Dependency order

1. Phase 1 defines schemas, thresholds and the RC baseline.
2. Phase 2 supplies the representative application.
3. Phase 3 requires the representative application and at least two candidate
   states.
4. Phases 4 and 5 certify functional and operational journeys.
5. Phase 6 consumes evidence from the integrated application and operations.
6. Phase 7 resolves findings from every preceding phase.
7. Phase 8 aggregates only completed, current evidence.

Parallel work is allowed only where dependencies and evidence ownership are
explicit. Final certification always consumes merged, same-commit state.

## Proposed implementation sequence

Each line represents a focused branch and draft PR:

1. validation contracts and thresholds;
2. RC preparation baseline;
3. representative-application architecture;
4. representative-application foundation;
5. design system, i18n and grid journey;
6. domain and enterprise-services journey;
7. multi-tenant and extension journey;
8. representative-application certification;
9. RC upgrade fixtures and manifests;
10. resumable upgrade and recovery certification;
11. functional framework certification;
12. production-like deployment certification;
13. operational resilience and recovery certification;
14. accessibility certification;
15. security, privacy and tenant-isolation certification;
16. performance and compatibility certification;
17. AI-readiness contributor journey;
18. finding governance and remediation gate;
19. public-contract and lifecycle freeze;
20. final Epic 10 certification and stable-readiness report.

The sequence may be refined when Phase 1 measures the current repository, but a
later task must not bypass an unmet dependency or weaken the stable gate.

## Release gates

### `v1.0.0-rc.1`

- Phase 1 contracts and thresholds approved;
- candidate artifacts reproducibly prepared;
- no known critical release blocker;
- installation and basic representative-application smoke journey green;
- protected publication explicitly approved.

### Later release candidates

- representative application and upgrade evidence current;
- material findings and fixes reflected in candidate notes;
- cross-cutting certification rerun against the exact candidate commit.

### `v1.0.0`

- all eight phases complete;
- final Epic 10 certification green;
- no critical or high-severity blocker;
- public contracts and lifecycle policies approved;
- same-commit release evidence complete;
- explicit maintainer approval for protected publication.

## Epic completion

Epic 10 is complete only when the authoritative roadmap marks every phase
complete, executable certification validates the complete evidence catalog and
the stable-release readiness report is approved. Stable publication is a
separate protected action and may occur only after that decision.
