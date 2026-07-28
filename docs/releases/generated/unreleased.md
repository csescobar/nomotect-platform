# Unreleased Release Notes

- Current released version: `0.8.0`
- Required release impact: `minor`

## Changes

### Added

- Establish the canonical platform version and release change-fragment contracts. (`56-release-foundation`)
- Enforce normalized release-impact declarations for pull requests. (`57-release-fragment-ci`)
- Generate deterministic changelog, release, migration, and upgrade notes. (`58-release-notes`)

## Affected contracts

- `change-fragment`
- `changelog`
- `platform-version`
- `release-notes`
- `release-readiness`

## Cross-cutting assessments

- **Security — 56-release-foundation:** Release metadata remains repository-local and contains no credentials.
- **Security — 57-release-fragment-ci:** Validation uses bounded git arguments and reads repository metadata only.
- **Security — 58-release-notes:** Generated notes contain normalized repository metadata and no secrets.
