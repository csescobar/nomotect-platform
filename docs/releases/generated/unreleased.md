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

## Affected contracts

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

## Cross-cutting assessments

- **Security — 126-operational-readiness-contracts:** Backup and restore evidence rejects credential, password, secret, token and private-key fields.
- **Security — 127-restore-certification:** Restore execution requires maintenance mode, drained work, operator confirmation and valid component checksums.
- **Security — 128-diagnostic-support-bundles:** Diagnostic output is fail-closed, allowlisted, size bounded, checksum-bound and written with restricted permissions.
- **Security — 129-operational-health:** Providers are time bounded and return redacted stable findings without raw exception messages.
- **Security — 130-disaster-recovery-policy:** Restore and return to service remain human-approved.
- **Security — 131-resilience-certification:** Fault injection is restricted to temporary production-like fixtures.
- **Privacy — 126-operational-readiness-contracts:** Operational evidence contains platform metadata and artifact references without persisted credentials.
- **Privacy — 127-restore-certification:** Certification uses credential-free metadata and temporary component media.
- **Privacy — 128-diagnostic-support-bundles:** Bundles minimize collected data, redact sensitive values and email addresses, and never upload automatically.
- **Privacy — 129-operational-health:** Health snapshots contain operational metadata without tenant data, credentials or automatic telemetry.
