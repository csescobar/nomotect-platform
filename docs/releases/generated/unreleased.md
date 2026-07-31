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

## Affected contracts

- `commercial-readiness`
- `community-edition`
- `diagnostic-redaction`
- `disaster-recovery-policy`
- `operational-backup-manifest`
- `operational-health-snapshot`
- `operational-readiness`
- `resilience-certification-report`
- `restore-certification`
- `restore-execution`
- `restore-plan`
- `support-bundle-manifest`
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
- **Privacy — 126-operational-readiness-contracts:** Operational evidence contains platform metadata and artifact references without persisted credentials.
- **Privacy — 127-restore-certification:** Certification uses credential-free metadata and temporary component media.
- **Privacy — 128-diagnostic-support-bundles:** Bundles minimize collected data, redact sensitive values and email addresses, and never upload automatically.
- **Privacy — 129-operational-health:** Health snapshots contain operational metadata without tenant data, credentials or automatic telemetry.
- **Privacy — 133-support-identifiers:** Support and customer identifiers are opt-in, contain no personal data and are removed when support is disabled.
- **Privacy — 134-opt-in-telemetry:** Telemetry is disabled by default, requires explicit category consent and reports removed field names without their values.
