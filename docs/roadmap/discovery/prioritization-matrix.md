# Post-1.0 Prioritization Matrix & Epic Boundaries

## Overview

This prioritization matrix evaluates all post-1.0 candidate epics across the 8 required scoring dimensions (scored from 1 to 5, where 5 represents highest value or risk/cost).

---

## Evaluation Matrix

| Area / Epic | Strategic Value | Security Impact | Enterprise Value | Developer Value | Product Differentiation | Implementation Cost | Architectural Risk | Compatibility Impact | Total Score | Priority Order |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Epic 11: Identity, Auth & Access Governance** | 5 | 5 | 5 | 4 | 4 | 3 | 2 | 2 | **30** | 1 |
| **Epic 12: Design System 2.0** | 4 | 2 | 4 | 5 | 5 | 3 | 2 | 1 | **26** | 2 |
| **Epic 13: Security Assurance Engineering** | 5 | 5 | 5 | 3 | 4 | 3 | 3 | 1 | **29** | 3 |
| **Epic 14: Continuous Assurance & Evidence** | 4 | 5 | 5 | 4 | 5 | 3 | 2 | 1 | **29** | 4 |
| **Epic 15: Governance & Audit Platform** | 5 | 4 | 5 | 3 | 4 | 3 | 2 | 1 | **27** | 5 |
| **Epic 16: AI Assistant Platform** | 5 | 4 | 5 | 4 | 5 | 4 | 3 | 2 | **28** | 6 |
| **Federated Identity (SSO/SAML/OIDC)** | 4 | 3 | 5 | 2 | 3 | 3 | 2 | 1 | **23** | Deferred |
| **Advanced Observability & Tracing** | 3 | 2 | 3 | 4 | 2 | 3 | 2 | 1 | **20** | Deferred |
| **Workflow & Approval Engine 2.0** | 3 | 2 | 4 | 3 | 3 | 4 | 3 | 1 | **23** | Deferred |
| **Dynamic Extension Marketplace** | 3 | 2 | 3 | 4 | 4 | 5 | 4 | 2 | **27** | Deferred |

---

## Implementation Candidates

The following epics are approved for post-1.0 sequential execution based on their architectural dependencies:

1. **Epic 11 — Identity, Authorization & Access Governance:** Essential foundation for tenant-scoped custom roles and code-backed permission registry.
2. **Epic 12 — Design System 2.0:** Enterprise UI component expansion, WCAG compliance, and Hotwire integration.
3. **Epic 13 — Security Assurance Engineering:** Formal security scope, threat modeling, and Common Criteria mapping.
4. **Epic 14 — Continuous Assurance & Evidence:** Reusable evidence graph and continuous `bin/nomotect assurance` verification.
5. **Epic 15 — Governance & Audit Platform:** Administrative policies and tamper-evident audit log exports.
6. **Epic 16 — AI Assistant Platform:** Governed AI runtime, tenant-aware MCP gateway, and skill execution framework.

---

## Explicit Deferrals

The following capability areas are explicitly deferred until Epics 11–16 reach full certification:

- **Federated Identity (SSO / SAML 2.0 / OIDC):** Deferred until persistent RBAC (Epic 11) is completed so SSO roles can map directly to registered platform permissions.
- **Advanced Observability & Tracing:** Deferred until audit event taxonomy (Epic 15) is established.
- **Workflow & Approval Engine 2.0:** Deferred until permission policies and governance rules are in place.
- **Dynamic Extension Marketplace:** Deferred due to high architectural risk and dependency on stable core contracts.
- **Public API & Key Management Platform:** Deferred post-Epic 16.

---

## Dependency Graph

```text
Evolution Discovery (Completed)
        ↓
Epic 11 — Identity, Authorization & Access Governance
        ↓
Epic 12 — Design System 2.0
        ↓
Epic 13 — Security Assurance Engineering
        ↓
Epic 14 — Continuous Assurance & Evidence
        ↓
Epic 15 — Governance & Audit Platform
        ↓
Epic 16 — AI Assistant Platform
```
