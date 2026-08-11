# Threat Model and Assurance Traceability

## 1. Governance and Standards

This threat model defines potential threat vectors, threat actor profiles, and security objectives for NomoTect.

For full ISO/IEC 15408 / Common Criteria (ASE_INT / ASE_ECD) alignment details, Target of Evaluation (TOE) scope, and operating environment assumptions, refer to [`assurance-scope-and-assets.md`](file:///home/cesar-escobar/Projects/NomoTect/docs/security/assurance-scope-and-assets.md).

---

## 2. Protected Assets

- **AST.CREDENTIALS**: Password hashes, session tokens, authentication secrets
- **AST.TENANT_DATA**: Multi-tenant business data, organization boundaries
- **AST.AUTHZ_POLICY**: Role permissions, tenant access control policies
- **AST.SECRETS**: Environment keys, integration API keys, database credentials
- **AST.AUDIT_LOGS**: System audit logs, activity feeds, release evidence
- **AST.FILE_UPLOADS**: User-uploaded documents and attachments
- **AST.AI_CONTEXT**: Agent memory transcripts and execution contexts

---

## 3. Threat Actors (TA.*)

- **TA.ANONYMOUS**: Unauthenticated internet attacker
- **TA.TENANT_MEMBER**: Authenticated tenant user attempting cross-tenant or privilege escalation
- **TA.INSIDER_ADMIN**: Privileged user attempting unauthorized exfiltration or audit tampering
- **TA.SUPPLY_CHAIN**: Malicious upstream dependency injection

---

## 4. Threat Vectors and Mitigations

| Threat Vector | Target Asset | Primary Mitigation Strategy |
|---|---|---|
| Account Takeover / Brute-Force | `AST.CREDENTIALS` | Password hashing (Argon2/BCrypt), rate-limiting, session expiration |
| Cross-Tenant Data Disclosure | `AST.TENANT_DATA` | Server-enforced tenant scoping (`Current.tenant`), ActiveRecord scope isolation |
| Broken Access Control | `AST.AUTHZ_POLICY` | `PermissionHelper` check before operation execution, explicit domain checks |
| Injection (SQL / XSS) | `AST.TENANT_DATA` | Parameterized SQL queries, ERB auto-escaping, CSP headers |
| Malicious File Upload | `AST.FILE_UPLOADS` | Whitelisted MIME types, non-executable storage, filename sanitization |
| Audit Tampering | `AST.AUDIT_LOGS` | Immutable audit log records, append-only structures |
| Supply Chain Compromise | `AST.SECRETS` | `bin/security` scanning (Brakeman, Bundler Audit), automated CI gates |

---

## 5. Required Review Points

Threat modeling must be revisited for:
- Introduction of new application modules or domains
- Third-party integration or API additions
- Authentication scheme modifications
- Sensitive data export/import capability updates
- Tenant isolation layer changes

