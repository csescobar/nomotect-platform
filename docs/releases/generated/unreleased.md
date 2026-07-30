# Unreleased Release Notes

- Current released version: `0.9.0`
- Required release impact: `minor`

## Changes

### Added

- Define credential-free backup manifests and ordered restore plans for Epic 9 operational readiness. (`126-operational-readiness-contracts`)

## Affected contracts

- `operational-backup-manifest`
- `operational-readiness`
- `restore-plan`

## Cross-cutting assessments

- **Security — 126-operational-readiness-contracts:** Backup and restore evidence rejects credential, password, secret, token and private-key fields.
- **Privacy — 126-operational-readiness-contracts:** Operational evidence contains platform metadata and artifact references without persisted credentials.
