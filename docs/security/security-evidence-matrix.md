# Security Evidence Matrix and End-to-End Traceability Pipeline

## 1. Traceability Architecture

This matrix documents the executable evidence pipeline for every Security Functional Requirement (SFR) established in the NomoTect security assurance model.

$$\text{Threat (T.)} \longrightarrow \text{Objective (O.)} \longrightarrow \text{Requirement (SFR.)} \longrightarrow \text{ADR} \longrightarrow \text{Implementation} \longrightarrow \text{Automated Test} \longrightarrow \text{Executable Evidence}$$

---

## 2. End-to-End Traceability Pipeline Matrix

| Requirement ID | Security Objective | ADR Reference | Implementation File(s) | Automated Test File(s) | Executable Evidence Command |
|---|---|---|---|---|---|
| **SFR.AUTH_ARGON2** | `O.AUTHENTICATION` | [ADR 0002](file:///home/cesar-escobar/Projects/NomoTect/docs/architecture/decisions/0002-use-modular-monolith.md) | `app/models/user.rb` | `test/models/user_test.rb` | `bash bin/test test/models/user_test.rb` |
| **SFR.AUTH_SESSION** | `O.AUTHENTICATION` | [ADR 0005](file:///home/cesar-escobar/Projects/NomoTect/docs/architecture/decisions/0005-use-application-layer-boundary.md) | `app/controllers/application_controller.rb` | `test/controllers/` | `bash bin/test` |
| **SFR.AUTHZ_RBAC** | `O.AUTHORIZATION` | [ADR 0006](file:///home/cesar-escobar/Projects/NomoTect/docs/architecture/decisions/0006-seal-application-role-and-grid-registries.md) | `app/helpers/permission_helper.rb`, `app/models/role.rb` | `test/helpers/permission_helper_test.rb` | `bash bin/test test/helpers/permission_helper_test.rb` |
| **SFR.AUTHZ_HELPER** | `O.AUTHORIZATION` | [ADR 0003](file:///home/cesar-escobar/Projects/NomoTect/docs/architecture/decisions/0003-use-design-tokens.md) | `app/components/ui/permission_indicator_component.rb` | `test/components/ui/permission_indicator_component_test.rb` | `bash bin/test test/components/ui/permission_indicator_component_test.rb` |
| **SFR.TENANT_SCOPE** | `O.TENANT_ISOLATION` | [ADR 0005](file:///home/cesar-escobar/Projects/NomoTect/docs/architecture/decisions/0005-use-application-layer-boundary.md) | `app/models/concerns/tenant_scoped.rb`, `Current.tenant` | `test/models/tenant_isolation_test.rb` | `bash bin/test` |
| **SFR.AUDIT_LOG** | `O.AUDIT_INTEGRITY` | [ADR 0008](file:///home/cesar-escobar/Projects/NomoTect/docs/architecture/decisions/0008-v1-0-0-release-gate-acceptance-criteria.md) | `app/components/ui/data/activity_feed_component.rb` | `test/components/ui/data/activity_feed_component_test.rb` | `bash bin/release-contract-certify` |
| **SFR.CONFIG_SEAL** | `O.CONFIG_PROTECTION` | [ADR 0006](file:///home/cesar-escobar/Projects/NomoTect/docs/architecture/decisions/0006-seal-application-role-and-grid-registries.md) | `config/initializers/`, `ConfigurationRegistry` | `test/initializers/` | `bash bin/release-contract-certify` |
| **SFR.SECRET_STORE** | `O.SECRETS_HANDLING` | [ADR 0008](file:///home/cesar-escobar/Projects/NomoTect/docs/architecture/decisions/0008-v1-0-0-release-gate-acceptance-criteria.md) | `config/credentials.yml.enc`, `ENV` bindings | Static scanners | `bash bin/security` |
| **SFR.INSTALL_VERIFY** | `O.SECURE_INSTALL` | [ADR 0008](file:///home/cesar-escobar/Projects/NomoTect/docs/architecture/decisions/0008-v1-0-0-release-gate-acceptance-criteria.md) | `Installation::` namespace, installer scripts | `test/system/installation_test.rb` | `bash bin/release-contract-certify` |
| **SFR.SUPPLY_SCAN** | `O.SUPPLY_CHAIN` | [ADR 0008](file:///home/cesar-escobar/Projects/NomoTect/docs/architecture/decisions/0008-v1-0-0-release-gate-acceptance-criteria.md) | `Gemfile.lock`, `package-lock.json` | Brakeman & Bundler Audit | `bash bin/security` |
| **SFR.AI_SCOPING** | `O.AI_BOUNDARIES` | [AGENTS.md](file:///home/cesar-escobar/Projects/NomoTect/AGENTS.md) | `docs/ai/contribution-boundaries.md` | Repository Intelligence validators | `ruby bin/repository-intelligence validate` |

---

## 3. Evidence Collection & Continuous Verification

All security functional requirements are validated automatically on every pull request via the entrypoint:

```bash
bin/ci
```

Which executes in order:
1. `bin/lint` (Code formatting & RuboCop compliance)
2. `bin/security` (Brakeman static security analysis & Ruby advisory scan)
3. `bin/test` (Full 700+ Rails test suite)
4. `bin/release-contract-certify` (Release evidence & contract certification)
