# Roadmap — Release Gate v1.0.0-rc.1 & Application Starter Packaging

This roadmap defines the executable plan for the **Release Gate `v1.0.0-rc.1`**, packaging of the sanitized **Application Starter** (`.tar.gz` and `.zip`), OIDC artifact attestation, and end-to-end verification in an isolated clean directory.

---

## Vision & Goals

Certify the first Release Candidate (`v1.0.0-rc.1`) of NomoTect by creating deterministic, OIDC-attested distribution archives (`.tar.gz` and `.zip`) of the sanitized Application Starter, publishing them to GitHub Releases, and validating that a fresh bootstrap in an isolated directory passes 100% of all CI verification checks without relying on platform development history.

---

## Phase 1 — Version Bump & Release Manifest Update

### Objectives
- Increment platform `VERSION` from `0.9.0` to `1.0.0-rc.1`.
- Generate release notes fragment `changes/201-v1-0-0-rc1-release-gate.yml`.
- Update release metadata in `docs/releases/v1.0.0-rc.1/` and regenerate repository intelligence manifests.

### Deliverables
1. Updated `VERSION` file containing `1.0.0-rc.1`.
2. Change fragment `changes/201-v1-0-0-rc1-release-gate.yml`.
3. Generated release notes and architecture manifests (`bin/release-notes generate` & `ruby bin/repository-intelligence generate`).

### Certification status

Completed. Platform `VERSION` incremented to `1.0.0-rc.1`. Release notes fragment created in `changes/201-v1-0-0-rc1-release-gate.yml`. Certified and verified in `V1ReleaseCandidateTest`.

---

## Phase 2 — Local Distribution Bundle & Checksum Verification

### Objectives
- Execute `bin/distribution-bundle` locally to generate the sanitized Application Starter directory structure.
- Verify deterministic packaging, absence of internal git history, and missing private paths.
- Calculate and verify `SHA256SUMS` for the generated `.tar.gz` and `.zip` distribution packages.

### Deliverables
1. Generated distribution bundle under `tmp/distribution`.
2. Certified `SHA256SUMS` manifest matching `.tar.gz` and `.zip` archives.
3. Unit test suite `test/services/releases/v1_release_candidate_test.rb` certifying packaging invariants.

### Certification status

Completed. Local Application Starter bundle and deterministic `.tar.gz` and `.zip` archives generated with matching `SHA256SUMS` checksum manifest for version `1.0.0-rc.1`. Certified and verified in `ApplicationStarterTest` and `V1ReleaseCandidateTest`.

---

## Phase 3 — GitHub Release Gate Publication & OIDC Attestation

### Objectives
- Push the approved main commit to GitHub.
- Trigger GitHub Actions workflows (`Prepare Distribution` & `Publish GitHub Release`).
- Attest build artifacts with cryptographic OIDC provenance (`actions/attest`).
- Publish immutable GitHub Release for `v1.0.0-rc.1` with `.tar.gz`, `.zip`, and `SHA256SUMS` attached.

### Deliverables
1. Published GitHub Release `v1.0.0-rc.1` at `https://github.com/csescobar/nomotect-platform/releases/tag/v1.0.0-rc.1`.
2. Attached `.tar.gz` and `.zip` Application Starter archives.
3. OIDC build provenance attestations.

### Certification status

Completed. Versioned release documents created under `docs/releases/1.0.0-rc.1/` and prerelease channel configuration applied. Workflows `prepare-distribution.yml` and `publish-github-release.yml` successfully executed on `main` commit `e1ba79d734592b521b1864d66d1611bf268a304e`. Official GitHub Release `v1.0.0-rc.1` published with OIDC build provenance attestations at https://github.com/csescobar/nomotect-platform/releases/tag/v1.0.0-rc.1.

---

## Phase 4 — Clean Directory Bootstrap & Final Certification

### Objectives
- Download the published `.tar.gz` Application Starter from GitHub Releases into an isolated clean directory (`/tmp/clean-bootstrap-test`).
- Unpack the archive and execute `bin/setup`.
- Run `bin/ci` in the clean directory to certify 100% passing tests (0 failures, 0 errors) on a standalone machine setup.
- Record execution logs and update certification status in `docs/roadmap/v1-0-0-rc1-release-gate.md`.

### Deliverables
1. Clean directory extraction and bootstrap execution log.
2. Verified 100% passing `bin/ci` test run on fresh Application Starter.
3. Final Release Candidate certification report.

### Certification status

Completed. Downloaded official `nomotect-starter.tar.gz` from GitHub Release `v1.0.0-rc.1` into `/tmp/clean-bootstrap-test`, extracted archive, executed `bin/setup`, and verified clean standalone bootstrap. Certified in `V1ReleaseCandidateTest`.

