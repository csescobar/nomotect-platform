# Target of Evaluation (TOE) Scope and Security Assets Specification

## 1. Overview and Standards Alignment

This document defines the evaluated platform scope, trusted boundaries, threat actor taxonomy, security assumptions, and protected assets for the NomoTect platform.

It aligns NomoTect security engineering practices with the **ISO/IEC 15408 / Common Criteria (CC v3.1)** framework (specifically Security Target evaluation constructs: ASE_INT, ASE_ECD, ASE_REQ, ASE_TSS) without making uncertified third-party compliance claims.

---

## 2. Target of Evaluation (TOE) Scope

The Target of Evaluation (TOE) encompasses the core NomoTect multi-tenant enterprise application platform:

### 2.1 Included in TOE Scope
- **Application Core**: Rails application engine, controllers, domain operations, installation orchestrator.
- **Tenant Isolation Architecture**: Tenant context resolution, row-level tenant scoping, schema isolation boundaries.
- **Identity & Access Control Subsystem**: Authentication session management, RBAC enforcement (`PermissionHelper`, `PermissionIndicatorComponent`, role capabilities).
- **Native Design System**: Component framework (`Ui::*` ViewComponents, Stimulus controllers, design tokens).
- **Audit & Evidence Infrastructure**: Action auditing, release notes generation, contract certification framework (`bin/release-contract-certify`).
- **Repository Intelligence Pipeline**: Knowledge graph generators, architectural invariant validators.

### 2.2 Excluded from TOE Scope (Operational Environment)
- Underlying Linux OS kernel and physical server hardware.
- External PostgreSQL database process management (handled by managed database service or container runner).
- Web application firewall (WAF) or reverse proxy TLS termination layer (e.g., NGINX / Caddy).
- Third-party OAuth identity providers.

---

## 3. Trusted Boundaries

The NomoTect security architecture enforces distinct trusted boundaries:

```text
[ External / Untrusted ]
     │
     │ HTTPS / TLS (OE.TLS)
     ▼
[ Reverse Proxy / WAF ]
     │
     │ HTTP (Container Internal Network)
     ▼
┌─────────────────────────────────────────────────────────────┐
│ NomoTect Application Boundary (TOE)                         │
│                                                             │
│  ┌────────────────────────┐    ┌─────────────────────────┐  │
│  │ Identity & Auth        │    │ Domain Layer            │  │
│  │ Session Validation     │────│ Operations & Invariants │  │
│  └────────────────────────┘    └─────────────────────────┘  │
│               │                            │                │
│               ▼                            ▼                │
│  ┌───────────────────────────────────────────────────────┐  │
│  │ Tenant Scoping & Authorization Enforcement Boundary   │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────┬───────────────────────────────┘
                              │
                              │ Encrypted Connection / SQL
                              ▼
┌─────────────────────────────────────────────────────────────┐
│ PostgreSQL Data Store Boundary                              │
│ (Row-Level Security & Tenant Data Isolation)                │
└─────────────────────────────────────────────────────────────┘
```

### Boundary Rules:
1. **Client Boundary**: No security decision or authorization logic relies on client-side state or JS inputs.
2. **Tenant Boundary**: Every database query must pass through tenant-scoped ActiveRecord scopes before executing.
3. **Application Boundary**: Operations must validate inputs via whitelist enforcement prior to domain state mutation.

---

## 4. Protected Security Assets

NomoTect identifies and protects the following critical assets:

| Asset ID | Asset Name | Description | Sensitivity |
|---|---|---|---|
| **AST.CREDENTIALS** | User Credentials & Sessions | Password hashes (Argon2/BCrypt), session tokens, remember-me keys | **Critical** |
| **AST.TENANT_DATA** | Tenant Business Data | Organization records, customer data, domain entity state | **Critical** |
| **AST.AUTHZ_POLICY** | Authorization Policies | Role definitions, permissions mapping (`RolePermission`, `PermissionHelper`) | **Critical** |
| **AST.SECRETS** | Infrastructure Secrets | `SECRET_KEY_BASE`, database credentials, API integration tokens | **Critical** |
| **AST.AUDIT_LOGS** | Audit & Evidence Records | System audit logs, activity feeds, release contract verification evidence | **High** |
| **AST.FILE_UPLOADS** | Uploaded Documents & Assets | User-uploaded files, media assets, attachments | **High** |
| **AST.AI_CONTEXT** | AI Context & Prompts | Local LLM conversation transcripts, memory graphs, agent execution logs | **Medium** |
| **AST.CONFIG** | Application Configuration | System settings, feature flags, localized i18n keys | **Medium** |

---

## 5. Security Assumptions (A.*)

The security of the TOE relies on the following operational assumptions:

- **A.PHYSICAL**: The physical hardware hosting the application and database is protected against unauthorized physical access.
- **A.NETWORK**: Network traffic between the reverse proxy and the TOE is routed within a private, isolated container network.
- **A.ADMIN**: System administrators who manage environment secrets and infrastructure deployment are non-malicious and follow security best practices.
- **A.TLS**: External clients connect exclusively via TLS 1.2+ with valid X.509 certificates.

---

## 6. Threat Actor Taxonomy (TA.*)

NomoTect models the following threat actor profiles:

- **TA.ANONYMOUS**: Unauthenticated internet actor attempting unauthorized access, brute-force, or injection attacks.
- **TA.TENANT_MEMBER**: Authenticated user within a tenant attempting cross-tenant data access or vertical privilege escalation.
- **TA.INSIDER_ADMIN**: Malicious or compromised user with administrative access attempting audit tampering or data exfiltration.
- **TA.SUPPLY_CHAIN**: Compromised upstream Ruby gem or npm package dependency attempting remote code execution.

---

## 7. Operating Environment Assumptions (OE.*)

- **OE.CONTAINER_ISOLATION**: Containers execute with minimal Linux privileges and non-root users.
- **OE.DB_ENCRYPTION**: Storage volumes containing database files and backups are encrypted at rest (AES-256).
- **OE.DEPENDENCY_SCANNING**: Continuous integration executes static security vulnerability scanners (`bin/security`, Brakeman, Bundler Audit) on every build.
