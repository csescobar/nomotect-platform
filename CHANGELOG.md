# Changelog

All notable platform changes are generated from versioned change fragments.

## Unreleased

Required release impact: `minor`.

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
- Certify the enterprise extension platform and publish lifecycle guides. (`66-extension-certification`)
- Define versioned distribution contracts and supported channel policy. (`67-distribution-contracts`)
- Add read-only distribution inspection and publication preflight. (`68-distribution-preflight`)
- Add protected immutable GitHub Release publication. (`69-github-release-publication`)
- Promote existing multi-platform images to semantic GHCR tags. (`70-ghcr-semantic-promotion`)
- Attest release artifacts and verify canonical publication evidence. (`71-distribution-evidence`)
- Certify deterministic distribution preparation and the controlled publication playbook. (`72-distribution-certification`)

### Fixed

- Prioritize user preferred locale over organization default locale in ApplicationController resolved_locale (#100). (`101-user-locale-precedence`)
- Produce credential-free channel observations for controlled distribution verification. (`73-distribution-observation`)
- Resolve developer bootstrap, Ruby patch version constraint and script execution frictions (#74). (`75-developer-bootstrap-frictions`)
- Bypass ExtensionGate readiness check in Installation::BaseController during First-Run Wizard (#79). (`80-installation-extension-gate-fix`)
- Make installation state transitions idempotent in StepsController and add style-src to CSP nonce directives (#81). (`82-installation-idempotent-transitions`)
- Use 303 See Other redirects in StepsController test_database for Turbo 8 form compatibility (#83). (`84-installation-turbo-redirects`)
- Fix Rails 8.1 SchemaMigration compatibility in MigrationRunner (#85). (`86-installation-migration-runner-fix`)
- Handle pre-existing database tables gracefully in MigrationRunner and use 303 See Other redirect in StepsController (#87). (`88-installation-duplicate-table-resilience`)
- Use DatabaseTasks.with_temporary_connection in MigrationRunner to target provisioned database (#89). (`90-installation-target-db-connection`)
- Add runtime_database initializer so ActiveRecord::Base connects to provisioned database (#92). (`93-runtime-database-initializer`)
- Replace inline event handler in LocaleSwitcherComponent with auto-submit Stimulus controller for strict CSP compliance (#94). (`95-locale-switcher-csp-fix`)
- Use 303 See Other redirect in LocalePreferencesController update for Turbo 8 form compatibility (#96). (`97-locale-preference-turbo-redirect`)
- Enforce HTTP 303 See Other status on all form redirects across platform controllers for Turbo 8 compatibility (#98). (`99-global-turbo-303-redirects`)

### Documentation

- Clarify interactive web installation wizard flow and CLI setup options in Quick Start documentation (#77). (`102-docs-clarify-installation-wizard`)
- Add validation findings documentation and bug report issue template (#74). (`76-validation-findings-docs`)

## 0.8.0

- Completed the Epic 8 AI Platform and Repository Intelligence baseline.
