# Unreleased Release Notes

- Current released version: `0.8.0`
- Required release impact: `minor`

## Changes

### Added

- Improve UX and layout of the First-Run Installation Wizard screens (#78):
- Dedicated wizard layout with 5-step visual stepper
- Toast notification system (Stimulus) replacing inline flash banners
- Terminal-style installation progress log component
- Branding upload fields (logo, compact logo, favicon) with Stimulus preview
- Trademark display mode selector (name / image / both)
- platform_name helper reads AppearanceStore instead of hardcoded locale key
- Component showcase: typography, color swatches, and spacing scale sections
- 14 new design tokens (shadows, xxl sizes, radius-full, warning colors, transitions)
- application.css fully tokenized — no hardcoded pixel values remaining
 (`104-improve-installation-wizard-ux`)
- Update design tokens specification with Instrument Sans typography, IBM Plex Mono, new badge/risk/active color tokens, and extended font size and space scales (2xl, 3xl). (`109-install-custom-design-tokens`)
- Support trademark display modes (name_only, image_only, image_and_name) in wizard and application headers via platform_brand_tag helper, and improve DesignTokens::Compiler error messaging for partial YAML documents.
 (`110-support-trademark-image-mode-in-headers`)
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
- Defer default database provisioning in bin/setup and bin/container-entrypoint when INSTALLATION_ENABLED is active (#91). (`103-setup-defer-database-provisioning`)
- Disable active_record.migration_error in development when INSTALLATION_ENABLED is active so CheckPending middleware does not query a non-existent database before the wizard creates it. (`105-disable-migration-check-during-installation`)
- Fix Turbo redirects and CSP image previews in First-Run Installation Wizard:
- Added status: :see_other (303) across all wizard form action redirects so Turbo 8 follows step transitions
- Updated CSP img_src to include :blob directive and switched image_preview_controller to FileReader data URLs
 (`107-fix-wizard-redirection-and-csp-previews`)
- Permit logo, compact_logo, and favicon in Installation::StepsController#appearance_attributes to eliminate unpermitted parameters warnings during appearance updates. (`108-permit-branding-attributes-in-steps-controller`)
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

## Affected contracts

- `artifact-attestation`
- `authentication`
- `bootstrap-scripts`
- `change-fragment`
- `changelog`
- `customer-management`
- `design-system`
- `developer-experience`
- `distribution-approval`
- `distribution-artifact-bundle`
- `distribution-bundle-preparation`
- `distribution-certification`
- `distribution-channel-state`
- `distribution-ghcr-promotion`
- `distribution-github-release`
- `distribution-image-identity`
- `distribution-inspection`
- `distribution-manifest`
- `distribution-operations`
- `distribution-preflight`
- `distribution-verification`
- `extension-certification`
- `extension-compatibility`
- `extension-components`
- `extension-configuration`
- `extension-documentation`
- `extension-inspection`
- `extension-lifecycle`
- `extension-loader`
- `extension-manifest`
- `extension-readiness`
- `extension-registration`
- `grid-engine`
- `health`
- `installation`
- `installation-wizard`
- `installed-platform-state`
- `localization`
- `organization-management`
- `platform-version`
- `publication-evidence`
- `release-compatibility`
- `release-consistency`
- `release-evidence`
- `release-metadata`
- `release-notes`
- `release-preparation`
- `release-publication-cli`
- `release-readiness`
- `repository-intelligence`
- `tenant-selection`
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
- **Security — 66-extension-certification:** Certification covers fail-closed loading, bounded real paths and secret-safe failure evidence.
- **Security — 67-distribution-contracts:** The contract baseline is read-only, credential-free and excludes private enterprise artifacts.
- **Security — 68-distribution-preflight:** Preflight is read-only, fail-closed and consumes credential-free channel observations.
- **Security — 69-github-release-publication:** Publication is restricted to an approved main commit and the protected release environment.
- **Security — 70-ghcr-semantic-promotion:** Promotion is digest-bound, rebuild-free and excludes latest before the stable release gate.
- **Security — 71-distribution-evidence:** Verification is secret-free and artifact attestations bind the public bundle to the approved workflow.
- **Security — 72-distribution-certification:** Preparation consumes successful same-commit main evidence and performs no channel mutation.
- **Security — 73-distribution-observation:** Observation uses read-only repository and package permissions and never persists credentials.
- **Security — 75-developer-bootstrap-frictions:** Executable permissions on scripts and pre-flight PostgreSQL diagnostics enforce safe defaults.
- **Security — 80-installation-extension-gate-fix:** Bypasses extension readiness filter only for installation wizard controllers when installation is enabled.
- **Security — 82-installation-idempotent-transitions:** Adds style-src to CSP nonce directives to support Turbo inline styles cleanly.
- **Security — 95-locale-switcher-csp-fix:** Complies with strict CSP script-src directives by eliminating inline event handlers.
- **Accessibility — 104-improve-installation-wizard-ux:** Stepper uses semantic nav/aria-label. Toast region uses aria-live polite. Image previews have descriptive alt text.
- **Accessibility — 105-disable-migration-check-during-installation:** Reviewed with no additional action.
- **Accessibility — 107-fix-wizard-redirection-and-csp-previews:** Reviewed with no additional action.
- **Accessibility — 108-permit-branding-attributes-in-steps-controller:** Reviewed with no additional action.
- **Accessibility — 109-install-custom-design-tokens:** Reviewed with no additional action.
- **Accessibility — 110-support-trademark-image-mode-in-headers:** Logo images rendered with descriptive alt text based on platform_name.
