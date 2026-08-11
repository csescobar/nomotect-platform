# Common Criteria / ISO/IEC 15408 Security Functional Mapping

## 1. Governance and Compliance Claim Disclaimer

> [!IMPORTANT]
> **Formal Certification Disclaimer**: This document specifies internal architectural alignment and security-functional mapping to the ISO/IEC 15408 / Common Criteria (CC v3.1) standard. NomoTect **DOES NOT** claim formal third-party Common Criteria evaluation or EAL certification unless an accredited external evaluation laboratory has formally completed audit proceedings.

### 1.1 Four-Tier Compliance Governance Taxonomy
To maintain engineering rigor and avoid unsupported compliance claims, NomoTect distinguishes four evaluation tiers:

1. **Internal Alignment**: Architectural decisions designed to satisfy ISO/IEC 15408 principles.
2. **Security-Functional Mapping**: Correlation of platform security capabilities to CC Functional Classes (FAU, FDP, FIA, FMT, FPT).
3. **Assurance Evidence**: Executable, continuously verified artifacts and test suites demonstrating control operation.
4. **Formal External Certification**: Third-party laboratory evaluation report and certificate (None claimed).

---

## 2. Common Criteria Functional Class Mapping (ISO/IEC 15408)

### 2.1 Class FAU: Security Audit

| CC Family | Title | Platform Mechanism | Implementation & Evidence |
|---|---|---|---|
| **FAU_GEN.1** | Audit Data Generation | Activity auditing & evidence records | `app/components/ui/data/activity_feed_component.rb`, audit log models |
| **FAU_GEN.2** | User Identity Association | Actor attribution | `AST.AI_CONTEXT` and user session bindings |
| **FAU_STG.1** | Protected Audit Trail Storage | Append-only audit record integrity | Immutable database logging & `bin/release-contract-certify` |

---

### 2.2 Class FDP: User Data Protection

| CC Family | Title | Platform Mechanism | Implementation & Evidence |
|---|---|---|---|
| **FDP_ACC.1** | Subset Access Control | Multi-tenant row-level scope isolation | `Current.tenant`, ActiveRecord tenant scopes |
| **FDP_ACF.1** | Security Attribute-Based Access Control | Capabilities & RBAC permissions | `PermissionHelper`, `Ui::PermissionIndicatorComponent` |
| **FDP_SDI.2** | Stored Data Integrity Monitoring | Database migration integrity | Transactional migrations, `bin/rails db:migrate` verification |

---

### 2.3 Class FIA: Identification and Authentication

| CC Family | Title | Platform Mechanism | Implementation & Evidence |
|---|---|---|---|
| **FIA_UAU.2** | User Authentication Before Action | Mandatory session validation | Application controller authentication callbacks |
| **FIA_SOS.1** | Verification of Secrets | Password hashing & secret entropy | Argon2 / BCrypt credential hashing |
| **FIA_AFL.1** | Authentication Failure Handling | Rate limiting & brute-force throttling | Rack::Attack rate-limiting configuration |

---

### 2.4 Class FMT: Security Management

| CC Family | Title | Platform Mechanism | Implementation & Evidence |
|---|---|---|---|
| **FMT_SMR.1** | Security Roles | Role hierarchy & permissions | `Role`, `RolePermission`, `Ui::RoleBadgeComponent` |
| **FMT_MSA.1** | Management of Security Attributes | Admin configuration sealing | `ConfigurationRegistry` sealed registry pattern |

---

### 2.5 Class FPT: Protection of the TSF (Target Security Functions)

| CC Family | Title | Platform Mechanism | Implementation & Evidence |
|---|---|---|---|
| **FPT_FLS.1** | Failure with Preservation of Secure State | Exception handling & transaction rollback | Transactional boundaries, error fallback handling |
| **FPT_TSS.1** | Supply-Chain Vulnerability Protection | Security static analysis | `bin/security` (Brakeman, Bundler Audit) |
