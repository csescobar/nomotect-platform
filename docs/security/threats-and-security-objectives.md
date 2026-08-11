# Threats, Security Objectives, and Security Functional Requirements

## 1. Governance and ISO/IEC 15408 Alignment

This specification establishes the 4-tier security assurance traceability matrix for the NomoTect platform:

$$\text{Asset (AST.)} \longrightarrow \text{Threat (T.)} \longrightarrow \text{Security Objective (O.)} \longrightarrow \text{Security Functional Requirement (SFR.)}$$

It aligns with the **ISO/IEC 15408 / Common Criteria (ASE_OBJ, ASE_REQ)** assurance family constructs for security target definitions.

---

## 2. Security Assurance Traceability Matrix (11 Core Domains)

### 2.1 Domain 1: Authentication

| Asset | Threat | Security Objective | Security Functional Requirement (SFR) |
|---|---|---|---|
| `AST.CREDENTIALS` | **T.BRUTE_FORCE**: Password guessing or credential stuffing attacks | **O.AUTHENTICATION**: Ensure only verified identity owners establish application sessions | **SFR.AUTH_ARGON2**: Passwords must be hashed using Argon2/BCrypt with mandatory cost factor.<br>**SFR.AUTH_SESSION**: Session tokens must use cryptographically secure random values with strict timeout. |

---

### 2.2 Domain 2: Authorization

| Asset | Threat | Security Objective | Security Functional Requirement (SFR) |
|---|---|---|---|
| `AST.AUTHZ_POLICY` | **T.PRIVILEGE_ESCALATION**: User performing unauthorized domain operations | **O.AUTHORIZATION**: Enforce Role-Based Access Control (RBAC) on all non-public endpoints | **SFR.AUTHZ_RBAC**: Enforce server-side capability verification before executing domain actions.<br>**SFR.AUTHZ_HELPER**: Integrate `PermissionHelper` and `PermissionIndicatorComponent` across UI surfaces. |

---

### 2.3 Domain 3: Tenant Isolation

| Asset | Threat | Security Objective | Security Functional Requirement (SFR) |
|---|---|---|---|
| `AST.TENANT_DATA` | **T.CROSS_TENANT_LEAK**: Tenant user accessing or mutating data of another organization | **O.TENANT_ISOLATION**: Guarantee complete logical isolation of tenant boundaries | **SFR.TENANT_ROW_SCOPE**: All database operations MUST filter via active `Current.tenant` scope.<br>**SFR.TENANT_TEST**: Automated cross-tenant authorization regression suite MUST pass on every build. |

---

### 2.4 Domain 4: Audit Integrity

| Asset | Threat | Security Objective | Security Functional Requirement (SFR) |
|---|---|---|---|
| `AST.AUDIT_LOGS` | **T.AUDIT_TAMPERING**: Malicious actor modifying or deleting system audit records | **O.AUDIT_INTEGRITY**: Maintain tamper-evident, append-only records of security events | **SFR.AUDIT_APPEND_ONLY**: Audit entries must be written to append-only storage.<br>**SFR.AUDIT_EVIDENCE**: System releases must generate cryptographically verified evidence manifests (`bin/release-contract-certify`). |

---

### 2.5 Domain 5: Configuration Protection

| Asset | Threat | Security Objective | Security Functional Requirement (SFR) |
|---|---|---|---|
| `AST.CONFIG` | **T.CONFIG_TAMPERING**: Unauthorized alteration of runtime platform parameters | **O.CONFIG_PROTECTION**: Ensure platform configurations are sealed and validated at boot | **SFR.CONFIG_IMMUTABLE**: Sealed registry patterns (`ConfigurationRegistry`) MUST prevent runtime monkey-patching.<br>**SFR.CONFIG_VALIDATION**: Invalid configurations MUST abort startup immediately. |

---

### 2.6 Domain 6: Secrets Handling

| Asset | Threat | Security Objective | Security Functional Requirement (SFR) |
|---|---|---|---|
| `AST.SECRETS` | **T.SECRET_EXPOSURE**: Leaking API keys, passwords, or tokens in source code or logs | **O.SECRETS_HANDLING**: Protect infrastructure secrets against disclosure or hardcoding | **SFR.SECRET_ENV_ONLY**: Secrets MUST be injected via environment variables or secret stores.<br>**SFR.SECRET_LOG_FILTER**: Sensitive fields MUST be redacted from application logs. |

---

### 2.7 Domain 7: Secure Installation

| Asset | Threat | Security Objective | Security Functional Requirement (SFR) |
|---|---|---|---|
| `AST.CONFIG` | **T.CORRUPTED_INSTALL**: Installing platform with insecure default states | **O.SECURE_INSTALL**: Ensure first-run setup creates hardened initial configuration | **SFR.INSTALL_VERIFY**: Installation process MUST enforce mandatory admin credentials and secret generation before serving traffic. |

---

### 2.8 Domain 8: Update and Recovery

| Asset | Threat | Security Objective | Security Functional Requirement (SFR) |
|---|---|---|---|
| `AST.TENANT_DATA` | **T.MIGRATION_CORRUPTION**: System updates causing data corruption or privilege regressions | **O.UPDATE_RECOVERY**: Ensure safe, atomic database migrations and update verification | **SFR.UPDATE_MIGRATION_CHECK**: Schema migrations MUST execute within transactional boundaries.<br>**SFR.UPDATE_ROLLBACK**: Database migration rollback paths MUST be tested. |

---

### 2.9 Domain 9: Supply-Chain Integrity

| Asset | Threat | Security Objective | Security Functional Requirement (SFR) |
|---|---|---|---|
| `AST.SECRETS` | **T.MALICIOUS_DEPENDENCY**: Vulnerable or compromised third-party gem or package | **O.SUPPLY_CHAIN**: Prevent supply-chain vulnerabilities from reaching production | **SFR.SUPPLY_SCANNER**: CI pipeline MUST execute automated vulnerability scanners (`bin/security`, Brakeman, Bundler Audit) blocking deployment on findings. |

---

### 2.10 Domain 10: Privacy and Data Protection

| Asset | Threat | Security Objective | Security Functional Requirement (SFR) |
|---|---|---|---|
| `AST.TENANT_DATA` | **T.PII_EXPOSURE**: Unnecessary collection or exposure of personally identifiable information | **O.PRIVACY**: Enforce data minimization and privacy by design | **SFR.PRIVACY_MINIMIZATION**: Collect only required PII fields.<br>**SFR.PRIVACY_EXPORT**: Support data portability and tenant export boundaries securely. |

---

### 2.11 Domain 11: AI-Assisted Access Boundaries

| Asset | Threat | Security Objective | Security Functional Requirement (SFR) |
|---|---|---|---|
| `AST.AI_CONTEXT` | **T.AI_PROMPT_INJECTION**: Prompt injection or context leakage via AI tools/sidecars | **O.AI_BOUNDARIES**: Restrict AI agents and MCP tools to authorized repository scopes | **SFR.AI_CONTEXT_SCOPING**: Subagents and tools MUST enforce read-only or explicit permission boundaries.<br>**SFR.AI_TOKEN_FILTER**: Secrets and credentials MUST NEVER be included in AI tool prompts. |
