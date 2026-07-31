# Unreleased Release Notes

- Current released version: `0.9.0`
- Required release impact: `minor`

## Changes

### Added

- Define credential-free backup manifests and ordered restore plans for Epic 9 operational readiness. (`126-operational-readiness-contracts`)
- Certify production-like restore procedures with fail-closed safety, checksum and verification gates. (`127-restore-certification`)
- Add local redacted diagnostic support bundles with allowlisted collectors, checksums and size limits. (`128-diagnostic-support-bundles`)
- Expose aggregated operational health signals for installation, deployment, jobs, storage and integrations. (`129-operational-health`)
- Define operator-owned disaster recovery objectives, scenarios, approval gates and runbook guidance. (`130-disaster-recovery-policy`)
- Certify restart, replacement, backup, restore and degraded-dependency resilience scenarios. (`131-resilience-certification`)
- Add neutral community edition and entitlement abstractions that isolate optional commercial providers. (`132-neutral-entitlements`)
- Add privacy-safe installation, customer and support identifiers with explicit rotation and disablement. (`133-support-identifiers`)
- Add disabled-by-default telemetry contracts with explicit category consent and transparent redaction. (`134-opt-in-telemetry`)
- Add explicit time-bounded diagnostic support consent and operator-reviewed share plans. (`135-support-consent`)
- Certify that optional commercial integrations cannot disable essential community capabilities. (`136-commercial-readiness-certification`)
- Govern operational documentation ownership, source dependencies and review freshness through Repository Intelligence. (`140-documentation-governance`)
- Certify every Epic 9 phase and cross-cutting contract through an executable fail-closed completion gate. (`141-epic-9-final-certification`)
- Define strict Epic 10 validation-plan, finding and certification contracts with fail-closed release-blocker rules. (`144-epic-10-validation-contracts`)
- Define the supported-environment matrix and measurable release thresholds for Epic 10. (`145-epic-10-release-thresholds`)
- Add deterministic review-only planning for Epic 10 release candidates. (`146-epic-10-rc-preparation`)
- Add a deterministic fail-closed foundation for the Epic 10 representative application. (`148-epic-10-representative-app-foundation`)
- Certify the representative Light/Dark, bilingual and governed grid journey. (`149-epic-10-design-i18n-grid-journey`)
- Certify the representative domain lifecycle and tenant-safe enterprise-services journey. (`150-epic-10-domain-services-journey`)
- Certify tenant isolation, community fallback and the sample-extension lifecycle. (`151-epic-10-multitenant-extension-journey`)

### Documentation

- Publish a certified operator handbook spanning administration, installation, deployment, upgrades, recovery and extensions. (`137-operator-guides`)
- Define supported compatibility matrices, lifecycle policy and operational diagrams. (`138-compatibility-lifecycle-documentation`)
- Add continuously tested extension, upgrade and backup manifest examples. (`139-tested-operational-examples`)
- Reconcile the README with the complete Epic 0 through Epic 9 delivery history and current platform contracts. (`142-readme-epic-history`)
- Define the dependency-ordered Epic 10 framework validation and release-readiness plan. (`143-epic-10-planning`)
- Define the governed architecture and public-contract boundary for the Epic 10 representative application. (`147-epic-10-representative-app-architecture`)

## Affected contracts

- `commercial-readiness`
- `commercial-readiness-certification`
- `community-edition`
- `diagnostic-redaction`
- `disaster-recovery-policy`
- `documentation-governance`
- `epic-10-rc-plan`
- `epic-10-release-baseline`
- `epic-10-validation`
- `epic-9-certification`
- `extensions`
- `operational-backup-manifest`
- `operational-health-snapshot`
- `operational-readiness`
- `releases`
- `repository-intelligence`
- `representative-application`
- `resilience-certification-report`
- `restore-certification`
- `restore-execution`
- `restore-plan`
- `support-bundle-manifest`
- `support-consent`
- `support-identity`
- `telemetry-policy`

## Cross-cutting assessments

- **Security — 126-operational-readiness-contracts:** Backup and restore evidence rejects credential, password, secret, token and private-key fields.
- **Security — 127-restore-certification:** Restore execution requires maintenance mode, drained work, operator confirmation and valid component checksums.
- **Security — 128-diagnostic-support-bundles:** Diagnostic output is fail-closed, allowlisted, size bounded, checksum-bound and written with restricted permissions.
- **Security — 129-operational-health:** Providers are time bounded and return redacted stable findings without raw exception messages.
- **Security — 130-disaster-recovery-policy:** Restore and return to service remain human-approved.
- **Security — 131-resilience-certification:** Fault injection is restricted to temporary production-like fixtures.
- **Security — 132-neutral-entitlements:** Unknown or failing providers never grant optional capabilities or disable community capabilities.
- **Security — 133-support-identifiers:** Identity documents reject unknown fields and require opaque random UUIDs.
- **Security — 134-opt-in-telemetry:** Fixed category allowlists remove arbitrary fields and the core defines no automatic sender.
- **Security — 135-support-consent:** Diagnostic sharing is scope limited, expires, revokes immediately and requires operator upload.
- **Security — 136-commercial-readiness-certification:** Provider failures and unknown capabilities remain fail-closed without affecting community capabilities.
- **Security — 140-documentation-governance:** Bounded paths and explicit ownership prevent untracked or path-escaping documentation entries.
- **Security — 141-epic-9-final-certification:** Certification fails closed when required gates, evidence or authoritative roadmap completion are missing.
- **Security — 144-epic-10-validation-contracts:** Critical and high findings cannot be accepted, unknown fields are rejected and passing certification fails closed on blockers.
- **Security — 145-epic-10-release-thresholds:** Release thresholds require zero unresolved critical or high findings and explicit supply-chain evidence.
- **Security — 146-epic-10-rc-preparation:** RC planning binds inputs to a full commit and cannot approve, tag or publish its own output.
- **Security — 147-epic-10-representative-app-architecture:** The fixture forbids undocumented internals, protected-core modification, credentials, production data and automatic publication.
- **Security — 148-epic-10-representative-app-foundation:** The foundation rejects cross-tenant assignments, forbidden dependencies, undocumented contracts and unknown fields.
- **Security — 149-epic-10-design-i18n-grid-journey:** Grid operators are allowlisted per column and exports must remain credential-free.
- **Security — 150-epic-10-domain-services-journey:** Policy-protected transitions, tenant-scoped services, checksums and fail-closed validation prevent bypass.
- **Security — 151-epic-10-multitenant-extension-journey:** Cross-tenant access is denied, roles are least-privileged and extension failures remain isolated.
- **Privacy — 126-operational-readiness-contracts:** Operational evidence contains platform metadata and artifact references without persisted credentials.
- **Privacy — 127-restore-certification:** Certification uses credential-free metadata and temporary component media.
- **Privacy — 128-diagnostic-support-bundles:** Bundles minimize collected data, redact sensitive values and email addresses, and never upload automatically.
- **Privacy — 129-operational-health:** Health snapshots contain operational metadata without tenant data, credentials or automatic telemetry.
- **Privacy — 133-support-identifiers:** Support and customer identifiers are opt-in, contain no personal data and are removed when support is disabled.
- **Privacy — 134-opt-in-telemetry:** Telemetry is disabled by default, requires explicit category consent and reports removed field names without their values.
- **Privacy — 135-support-consent:** Consent is separate from telemetry and permits only redacted allowlisted artifacts.
- **Privacy — 136-commercial-readiness-certification:** Certification verifies support is absent and telemetry is disabled in the community baseline.
- **Privacy — 144-epic-10-validation-contracts:** Validation evidence is limited to stable identifiers and artifact references without credentials or personal data.
- **Privacy — 145-epic-10-release-thresholds:** Privacy thresholds reject secret-bearing evidence and unapproved personal-data flows.
- **Privacy — 147-epic-10-representative-app-architecture:** Representative evidence is deterministic, credential-free and contains no personal data.
- **Privacy — 148-epic-10-representative-app-foundation:** Fixture evidence must be deterministic, credential-free and personal-data-free.
- **Privacy — 149-epic-10-design-i18n-grid-journey:** Journey evidence records contract outcomes without tenant payloads or credentials.
- **Privacy — 150-epic-10-domain-services-journey:** Evidence is limited to governed outcomes without tenant payloads or credentials.
- **Privacy — 151-epic-10-multitenant-extension-journey:** Tenant-isolation evidence excludes tenant payloads and credentials.
- **Accessibility — 145-epic-10-release-thresholds:** Accessibility requires zero critical automated violations, zero keyboard blockers and manual screen-reader approval.
- **Accessibility — 147-epic-10-representative-app-architecture:** The architecture requires Light/Dark, bilingual and manual screen-reader review journeys.
- **Accessibility — 148-epic-10-representative-app-foundation:** The foundation requires both Light/Dark themes and English/Brazilian Portuguese fixtures for later journeys.
- **Accessibility — 149-epic-10-design-i18n-grid-journey:** The journey requires explicit Light/Dark rendering and bilingual labels while manual screen-reader review remains required.
