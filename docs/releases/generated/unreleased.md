# Unreleased Release Notes

- Current released version: `0.8.0`
- Required release impact: `minor`

## Changes

### Added

- Establish the canonical platform version and release change-fragment contracts. (`56-release-foundation`)
- Enforce normalized release-impact declarations for pull requests. (`57-release-fragment-ci`)
- Generate deterministic changelog, release, migration, and upgrade notes. (`58-release-notes`)
- Prepare deterministic, reviewable release pull requests. (`59-release-preparation`)
- Certify version consistency across release and supply-chain evidence. (`60-release-certification`)
- Define community boundaries and versioned external extension contracts. (`61-extension-contracts`)
- Add read-only extension discovery and compatibility preflight. (`62-extension-preflight`)
- Add trusted extension loading and explicit registration hooks. (`63-extension-loader`)
- Isolate extension components and integrate extension state with upgrade preflight. (`64-extension-components`)
- Add fail-closed extension lifecycle and readiness controls. (`65-extension-lifecycle`)

## Affected contracts

- `change-fragment`
- `changelog`
- `extension-compatibility`
- `extension-components`
- `extension-configuration`
- `extension-inspection`
- `extension-lifecycle`
- `extension-loader`
- `extension-manifest`
- `extension-registration`
- `extension-readiness`
- `health`
- `installed-platform-state`
- `platform-version`
- `release-compatibility`
- `release-consistency`
- `release-evidence`
- `release-metadata`
- `release-notes`
- `release-preparation`
- `release-readiness`
- `upgrade-preflight`

## Cross-cutting assessments

- **Security — 56-release-foundation:** Release metadata remains repository-local and contains no credentials.
- **Security — 57-release-fragment-ci:** Validation uses bounded git arguments and reads repository metadata only.
- **Security — 58-release-notes:** Generated notes contain normalized repository metadata and no secrets.
- **Security — 59-release-preparation:** Automation has bounded repository permissions and cannot publish releases or images.
- **Security — 60-release-certification:** Validation is read-only, bounds evidence paths, and reports no secret values.
- **Security — 61-extension-contracts:** Extension packages are declared trusted in-process code and are not loaded by this contract baseline.
- **Security — 62-extension-preflight:** Preflight reads installed package metadata without executing extension entrypoints or changing state.
- **Security — 63-extension-loader:** Only ready plans execute trusted entrypoints, and failures omit internal exception messages.
- **Security — 64-extension-components:** Real-path validation rejects component resources that escape an installed package root.
- **Security — 65-extension-lifecycle:** Required failures deny normal traffic and health output exposes only stable codes and extension identifiers.
