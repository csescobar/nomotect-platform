# ADR 0008: Acceptance Criteria and Release Gate for v1.0.0 GA Release

**Status:** Accepted  
**Date:** 2026-08-10  
**Author:** NomoTect Creator / Gemini Notebook

---

## 1. Context and Problem

The **NomoTect** platform is approaching its first major stability milestone: the **v1.0.0 GA** release. As an AI-native platform governed by architecture contracts, NomoTect commits to providing enterprise-ready, accessible, and secure software under the motto *"Build with structure. Evolve with confidence."*.

To ensure this commitment is never diluted during future updates and to give enterprise adopters maximum confidence, a rigorous, automated, and transparent certification process is required. A mechanism must prevent architectural drift, security vulnerabilities, and accessibility defects before any distribution archive is signed and published.

## 2. Decision

We decide to establish a strict **5-Phase Release Gate** as the official standard for NomoTect v1.0.0 GA qualification and publication. No stable version shall be published without 100% compliance across all criteria defined in this document.

The executable Release Gate pipeline is structured as follows:

### Phase 1: Governance & Metadata Traceability
* **Action:** Increment global platform version to `1.0.0` in core configuration files.
* **Documentation:** Generate official release governance documents under `docs/releases/1.0.0/` (Release Notes, Migration Guide, Change Declaration, SBOM, and Validation Report).
* **AI Metadata:** Update Repository Intelligence metadata and create historical change fragment `changes/207-v1-0-0-release-gate.yml` so AI agents consuming context via MCP recognize release boundaries.

### Phase 2: Cross-Cutting Quality Certification (Epic 10 Phase 6)
* **Accessibility (WCAG 2.1 AA):** Zero critical violations in `ViewComponent` and Hotwire views. Zero keyboard traps and correct focus management in Turbo Stream updates.
* **Security (SAST):** Full Brakeman and Semgrep scan with zero high/critical findings.
* **Performance & Efficiency:** Strict verification against N+1 queries and API/rendering p50/p95 latency budget enforcement.
* **Multi-Tenant Isolation:** Fail-closed cross-tenant leak protection ensuring tenant data is never exposed under any error condition.

### Phase 3: Public Contract Freeze & Consistency (Epic 10 Phase 7)
* **API Freeze:** Final freeze and cataloging of public framework route and method signatures.
* **Automated Validator:** Mandatory execution of `Releases::ConsistencyValidator` ensuring 100% alignment among Git version tags, SBOM manifests, build provenance attestations, and Release Notes.

### Phase 4: GitHub Release & OCI Promotion (Epic 10 Phase 8)
* **Artifact Generation:** Execute `prepare-distribution.yml` to package `.tar.gz` and `.zip` archives with `SHA256SUMS` checksums.
* **Cryptographic Attestation:** Publish via `publish-github-release.yml` using **OIDC (OpenID Connect)** authentication to attest `v1.0.0` provenance.
* **Container Registry:** Promote certified OCI image to `ghcr.io/csescobar/nomotect-platform:1.0.0` and update `latest` tag.

### Phase 5: Standalone Clean Directory Validation (GA Certification)
* **Isolated Environment:** Extract official `.tar.gz` distribution package into `/tmp/clean-bootstrap-v1-0-0`.
* **Bootstrap Verification:** Execute automated installer and run full unit, integration, and system test suite in isolated directory.
* **Approval:** Official release is declared only when local initialization executes cleanly with 100% green tests.

---

## 3. Consequences

### Positive
* **Maximum Enterprise Confidence:** Enterprise adopters have cryptographic assurance of SAST scans, accessibility compliance, and multi-tenant safety.
* **AI Synchronization:** Updated metadata ensures AI agents consuming context via MCP interact accurately with stable v1.0.0 code.
* **Supply-Chain Security:** OIDC attestations prevent unauthorized code injection into official releases.
* **Developer Experience (DX):** Clean directory bootstrap verification guarantees seamless onboarding.

### Negative
* **Release Pipeline Execution Time:** Comprehensive standalone verification and accessibility scans add execution time to release workflows.
* **Tooling Maintenance:** Requires ongoing maintenance of `Releases::ConsistencyValidator` and Release Gate scripts.

---

## 4. References

* **`v1-0-0-release-gate.md`:** Executable release gate roadmap.
* **`roadmap.md`:** Master engineering roadmap.
* **`AI_PRINCIPLES.md`:** Ethical and technical principles for AI-assisted development.
* **`AGENTS.md` / `docs/playbooks/ai-mcp-operations.md`:** Rules for AI agents and MCP integration.
