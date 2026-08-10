# Roadmap — Release Gate v1.0.0 GA & Production Distribution

This roadmap defines the executable plan for the **General Availability Release Gate `v1.0.0`**, cross-cutting quality certification (Epic 10 Phases 6–8), public contract freeze, OIDC-attested GitHub Release publication, rebuild-free GHCR container image promotion, and clean directory end-to-end verification.

---

## Vision & Goals

Certify and publish the stable **`v1.0.0` General Availability (GA)** release of NomoTect. This milestone locks public APIs, enforces zero critical quality/security/accessibility defects, publishes OIDC-attested distribution archives (`.tar.gz` and `.zip`) and OCI container images (`ghcr.io/csescobar/nomotect-platform:1.0.0`), and verifies standalone bootstrap execution in an isolated directory.

---

## Phase 1 — Version Bump `1.0.0` & Governance Baseline

### Objectives
- Increment platform `VERSION` from `1.0.0-rc.1` to `1.0.0`.
- Create change fragment `changes/207-v1-0-0-release-gate.yml`.
- Generate versioned release documents under `docs/releases/1.0.0/` (`release-metadata.json`, `compatibility.json`, `release-notes.md`, `migration-notes.md`, `upgrade-notes.md`).
- Update repository intelligence manifests and architecture contexts.

### Deliverables
1. Updated `VERSION` file containing `1.0.0`.
2. Change fragment `changes/207-v1-0-0-release-gate.yml`.
3. Generated release governance documents under `docs/releases/1.0.0/`.
4. Certified version bump unit tests in `V1ReleaseCandidateTest`.

### Certification status

Completed. Platform `VERSION` incremented to `1.0.0`. Versioned release governance documents generated under `docs/releases/1.0.0/`. Change fragment created in `changes/208-phase1-v1-0-0-release-docs.yml`. Certified in `V1ReleaseCandidateTest` and `Releases::ConsistencyValidator`.


---

## Phase 2 — Cross-Cutting Quality Certification (Epic 10 Phase 6)

### Objectives
- **Accessibility:** Verify zero critical WCAG 2.1 AA violations, keyboard focus traps, or screen-reader regressions across all core components and custom layouts.
- **Security:** Certify zero high/critical SAST findings (Brakeman / Semgrep) and zero unauthenticated route access.
- **Performance & Queries:** Validate p50/p95 request latency thresholds and N+1 query budget assertions.
- **Multi-Tenant Isolation:** Verify 100% fail-closed cross-tenant access enforcement across domain models, files, exports, and notifications.

### Deliverables
1. Automated system and integration test suite execution with 100% green status.
2. Verified security, accessibility, and performance benchmark evidence.
3. Zero unresolved quality blocker findings recorded in governance manifests.

### Certification status

Completed. Cross-cutting quality certified in `V1QualityCertificationTest`: zero high/critical SAST findings, fail-closed multi-tenant query isolation, theme contract normalizer fallback, and query budget budget assertions for domain operations.


---

## Phase 3 — Public Contract Freeze & Documentation Governance (Epic 10 Phase 7)

### Objectives
- Freeze public platform contracts (Operations, Queries, Policies, Domain Events, Grid DSL, and Extension Hooks).
- Validate document governance integrity and zero stale AI contexts or schema drift (`bin/repository-intelligence generate`).
- Run `Releases::ConsistencyValidator` to verify perfect alignment between version tags, SBOMs, provenance, release notes, and compatibility digests.

### Deliverables
1. Frozen public contract manifest and schema validation report.
2. 100% consistent release evidence report from `Releases::ConsistencyValidator`.
3. Clean documentation governance check in `bin/ci`.

### Certification status

Planned.

---

## Phase 4 — GitHub Release Publication & GHCR Image Promotion (Epic 10 Phase 8)

### Objectives
- Push the approved `main` commit SHA to GitHub.
- Trigger `prepare-distribution.yml` to generate the certified `.tar.gz` and `.zip` distribution archives and SHA256SUMS.
- Trigger `publish-github-release.yml` to publish immutable GitHub Release `v1.0.0` with OIDC build provenance.
- Trigger rebuild-free GHCR OCI image promotion for `ghcr.io/csescobar/nomotect-platform:1.0.0` and `ghcr.io/csescobar/nomotect-platform:latest`.

### Deliverables
1. Official GitHub Release `v1.0.0` at `https://github.com/csescobar/nomotect-platform/releases/tag/v1.0.0`.
2. OIDC-attested `.tar.gz` and `.zip` Application Starter distribution packages.
3. Promoted `v1.0.0` OCI image published on GitHub Container Registry (GHCR).

### Certification status

Planned.

---

## Phase 5 — Clean Directory Bootstrap & Final GA Certification

### Objectives
- Download the published `v1.0.0` `nomotect-starter.tar.gz` package into `/tmp/clean-bootstrap-v1-0-0`.
- Extract the archive, execute `bin/setup`, and run standalone verification.
- Verify 100% green build and test execution without relying on platform development history.
- Mark all phases as completed in `docs/roadmap/v1-0-0-release-gate.md` and update `docs/roadmap/roadmap.md`.

### Deliverables
1. Clean directory extraction and setup execution log.
2. 100% green test execution report on fresh Application Starter.
3. Final GA Certification summary presented to maintainers.

### Certification status

Planned.
