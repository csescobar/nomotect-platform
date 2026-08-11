# Post-1.0 Gap Analysis

## Overview

This document presents a comprehensive architecture, security, UX, and AI gap analysis across all 15 assessment areas of the NomoTect Platform.

---

## Assessment Area Gap Details

### 1. Identity and Authorization
- **Gaps:** Current authorization relies on static organization membership checks (`admin`, `member`, `owner`).
- **Impact:** Enterprise tenants cannot define custom roles or assign granular access rights.
- **Required Remediation:** Introduce a persistent RBAC model with `Role`, `Permission`, and `RolePermission` models (Epic 11).

### 2. Role and Permission Management
- **Gaps:** Permissions are not registered in code as first-class entities.
- **Impact:** Potential for permission drift and unauthorized string manipulation in the database.
- **Required Remediation:** Build a code-backed Permission Registry ensuring unknown permissions fail closed (Epic 11 Phase 2).

### 3. Design System Coverage
- **Gaps:** Component library is limited to standard UI elements; complex data structures lack high-level components.
- **Impact:** Developers may reinvent complex components like Combobox, Tree Grid, or Activity Feed outside the design system.
- **Required Remediation:** Implement Design System 2.0 with expanded Data, Navigation, Input, Feedback, and AI UI component families (Epic 12).

### 4. Security Assurance
- **Gaps:** Security controls are verified through standalone scripts rather than a unified traceability graph from threat to evidence.
- **Impact:** Difficult to prove compliance to enterprise auditors without manual documentation assembly.
- **Required Remediation:** Define executable Security Assurance Engineering models and control contracts (Epic 13 & Epic 14).

### 5. Common Criteria Alignment
- **Gaps:** No explicit mapping of platform security functions to ISO/IEC 15408 / Common Criteria assurance classes.
- **Impact:** Certification gap when pitching to government and regulated enterprise clients.
- **Required Remediation:** Create formal Common Criteria assurance mapping for evaluated platform boundaries (Epic 13 Phase 3).

### 6. Audit and Evidence Integrity
- **Gaps:** Application logs do not guarantee cryptographic tamper-evidence or structured event taxonomy.
- **Impact:** Audit logs could be modified or deleted without detection.
- **Required Remediation:** Implement standardized audit event taxonomy and chained digest tamper-evident verification (Epic 15).

### 7. Enterprise Governance
- **Gaps:** Lack of centralized policy definitions for tenant security, session management, and data retention.
- **Impact:** Tenant administrators cannot enforce custom security compliance rules.
- **Required Remediation:** Build an Administrative Governance platform for organization policy enforcement (Epic 15 Phase 1).

### 8. AI Assistant Capabilities
- **Gaps:** No platform support for end-user conversational AI, provider abstraction, or safe application integration.
- **Impact:** Applications built on NomoTect cannot offer governed AI features without building custom integrations.
- **Required Remediation:** Implement AI Assistant Platform (Epic 16) with provider-neutral runtime, MCP Application Gateway, and Skills Framework.

### 9. Observability
- **Gaps:** Limited telemetry instrumentation across domain operations and background jobs.
- **Impact:** Operational visibility relies on raw log parsing.
- **Required Remediation:** Defer to Candidate Evolution phase after core assurance epics.

### 10. Developer Experience
- **Gaps:** Generators for domain models, operations, and policy contracts are manual.
- **Impact:** Slower developer onboarding and potential boilerplate inconsistency.
- **Required Remediation:** Address incrementally during design system and governance work.

### 11. Workflow and Approvals
- **Gaps:** Multi-step workflows require bespoke operation wiring.
- **Impact:** Complex business processes are hard to reuse.
- **Required Remediation:** Defer to Candidate Evolution phase.

### 12. Performance and Scalability
- **Gaps:** Query performance is unmonitored under heavy multi-tenant load.
- **Impact:** Scalability bottlenecks as tenant data grows.
- **Required Remediation:** Defer to Candidate Evolution phase.

### 13. Extension Ecosystem
- **Gaps:** Extension points are statically defined.
- **Impact:** Dynamic plugin extensions cannot be added at runtime.
- **Required Remediation:** Defer to Candidate Evolution phase.

### 14. Federated Identity
- **Gaps:** Absence of SAML 2.0 / OIDC enterprise single sign-on adapters.
- **Impact:** Enterprise clients requiring Okta/Azure AD SSO cannot integrate seamlessly.
- **Required Remediation:** Defer to Candidate Evolution phase (scheduled post-Epic 16).

### 15. API and Integration Boundaries
- **Gaps:** No external API key management or rate-limiting middleware for external integrations.
- **Impact:** Platform cannot safely expose public API endpoints to third-party developers.
- **Required Remediation:** Defer to Candidate Evolution phase.
