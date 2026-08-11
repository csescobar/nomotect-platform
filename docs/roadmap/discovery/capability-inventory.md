# Post-1.0 Capability Inventory

## Overview

This capability inventory provides a structured baseline assessment of the NomoTect `v1.0.0` platform state across all 15 roadmap assessment areas.

---

## 1. Identity and Authorization

- **Current State (`v1.0.0`):** Single-tenant and multi-tenant authentication via Devise/Warden with static membership roles (`owner`, `admin`, `member`). Policies enforced via ActionPolicy.
- **Capabilities Present:** Basic organization membership, role checks (`owner?`, `admin?`), tenant context propagation in requests and background jobs.
- **Limitations:** Roles are hardcoded; no database-backed custom roles; no fine-grained permission assignment.

---

## 2. Role and Permission Management

- **Current State (`v1.0.0`):** Role membership stored directly on `OrganizationMembership` model.
- **Capabilities Present:** Tenant scoping on memberships, basic ownership safeguards.
- **Limitations:** Lack of `Role`, `Permission`, and `RolePermission` models. No programmatic permission registry or tenant-scoped custom role assignments.

---

## 3. Design System Coverage

- **Current State (`v1.0.0`):** NomoTect Design System 1.0 components (Button, Modal, Card, Table, Form inputs, Badge, Alert) built on ViewComponent and Tailwind/CSS variables.
- **Capabilities Present:** Dark/Light mode tokens, keyboard navigation baseline, responsive layouts.
- **Limitations:** Missing advanced enterprise components such as Tree Grid, Activity Feed, Kanban, Command Palette, Stepper, Date-Range Picker, Combobox, and Assistant Side Panel.

---

## 4. Security Assurance

- **Current State (`v1.0.0`):** Automated security scanners (Brakeman, RuboCop Security, SBOM generation, checksum validation).
- **Capabilities Present:** CI security gate, dependency verification, fail-closed configuration guard.
- **Limitations:** Lack of structured security asset mapping, formal threat model traceability, and continuous security control evidence contracts.

---

## 5. Common Criteria Alignment

- **Current State (`v1.0.0`):** Informal alignment with basic security functional requirements (FAU_GEN, FIA_UAU, FDP_ACC).
- **Capabilities Present:** Security documentation and design rules.
- **Limitations:** No formal mapping matrix to ISO/IEC 15408 / Common Criteria assurance components (ADV, ATE, AGD, ALC).

---

## 6. Audit and Evidence Integrity

- **Current State (`v1.0.0`):** Basic application log events and static release evidence manifests.
- **Capabilities Present:** JSON schema validation for contract releases and repository intelligence snapshots.
- **Limitations:** Audit logs lack unified taxonomy, cryptographic digest chaining, or tamper-evident integrity verification.

---

## 7. Enterprise Governance

- **Current State (`v1.0.0`):** Administrative organization management and basic tenant settings.
- **Capabilities Present:** Explicit tenant boundaries, installation configuration state guard.
- **Limitations:** No centralized governance policy engine for authentication, session duration, retention, export controls, or AI usage boundaries.

---

## 8. AI Assistant Capabilities

- **Current State (`v1.0.0`):** Repository Intelligence MCP tools for development agents (inspecting code graph, contracts, playbooks).
- **Capabilities Present:** MCP server implementation for repository analysis.
- **Limitations:** No end-user AI assistant platform, provider-neutral runtime abstraction, tenant-aware AI configuration resolver, or application-facing MCP tool gateway.

---

## 9. Observability

- **Current State (`v1.0.0`):** Standard Rails logging, readiness health check endpoint (`bin/repository-intelligence health`).
- **Capabilities Present:** Basic health reporting and readiness check.
- **Limitations:** Missing structured open telemetry tracing, metric aggregation, and centralized audit/event streaming.

---

## 10. Developer Experience

- **Current State (`v1.0.0`):** Dev Container setup, repository intelligence CLI (`bin/repository-intelligence`), unified CI script (`bin/ci`).
- **Capabilities Present:** Local setup automation and design token checker.
- **Limitations:** Lack of domain module generators, automated contract scaffolding, and live visual component showcase tools.

---

## 11. Workflow and Approvals

- **Current State (`v1.0.0`):** Basic CRUD operations and synchronous application operations.
- **Capabilities Present:** Service objects / operation pattern for state mutations.
- **Limitations:** No multi-step approval engine, workflow state machine, or asynchronous task orchestration framework.

---

## 12. Performance and Scalability

- **Current State (`v1.0.0`):** PostgreSQL database indexes, basic caching headers.
- **Capabilities Present:** Optimized queries for default domain models.
- **Limitations:** No read-replica routing configuration, query caching layer for tenant permissions, or background job rate limiting.

---

## 13. Extension Ecosystem

- **Current State (`v1.0.0`):** Plugin architecture definition under `docs/extensions`.
- **Capabilities Present:** Modular structure for `/application` extensions.
- **Limitations:** No dynamic plugin loading mechanism, runtime hook registry, or sandboxed execution runtime.

---

## 14. Federated Identity

- **Current State (`v1.0.0`):** Password-based authentication and invitation links.
- **Capabilities Present:** Secure password hashing and token generation.
- **Limitations:** No SAML 2.0, OpenID Connect (OIDC), or Social SSO integration.

---

## 15. API and Integration Boundaries

- **Current State (`v1.0.0`):** Rails REST controllers and internal service contracts.
- **Capabilities Present:** Standard JSON responses and internal contract validation.
- **Limitations:** Missing public API versioning strategy, rate-limiting policy engine, and developer API key management.
