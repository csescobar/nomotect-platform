# Unreleased Release Notes

- Current released version: `0.9.0`
- Required release impact: `minor`

## Changes

### Added

- Define credential-free backup manifests and ordered restore plans for Epic 9 operational readiness. (`126-operational-readiness-contracts`)
- Certify production-like restore procedures with fail-closed safety, checksum and verification gates. (`127-restore-certification`)

## Affected contracts

- `operational-backup-manifest`
- `operational-readiness`
- `restore-certification`
- `restore-execution`
- `restore-plan`

## Cross-cutting assessments

- **Security — 126-operational-readiness-contracts:** Backup and restore evidence rejects credential, password, secret, token and private-key fields.
- **Security — 127-restore-certification:** Restore execution requires maintenance mode, drained work, operator confirmation and valid component checksums.
- **Privacy — 126-operational-readiness-contracts:** Operational evidence contains platform metadata and artifact references without persisted credentials.
- **Privacy — 127-restore-certification:** Certification uses credential-free metadata and temporary component media.
