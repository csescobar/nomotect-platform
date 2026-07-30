# Services AI Context

> Generated artifact. Source changes must be followed by regeneration.

## Responsibilities

- test: Services::Distributions::ChannelObserver, Services::Distributions::ChannelState, Services::Distributions::GhcrPromotionPlan, Services::Distributions::GithubReleasePlan, Services::Distributions::Inspector, Services::Distributions::Manifest, Services::Distributions::Verifier, Services::EnterpriseServices, Services::Extensions::Catalog, Services::Extensions::CompatibilityPlanner, Services::Extensions::ComponentResolver, Services::Extensions::Configuration, Services::Extensions::ExtensionReadinessPlaybook, Services::Extensions::Inspector, Services::Extensions::InstalledState, Services::Extensions::Lifecycle, Services::Extensions::Loader, Services::Extensions::Manifest, Services::Extensions::Registry, Services::Installation::DatabaseConfiguration, Services::Installation::DatabaseProvisioner, Services::Installation::RuntimeDatabaseConfiguration, Services::Installation::StateMachine, Services::Releases::ChangeFragment, Services::Releases::ConsistencyValidator, Services::Releases::NotesGenerator, Services::Releases::Preparation, Services::Releases::PullRequestValidator, Services::Releases::ReleaseReadinessPlaybook, Services::SecurityPrivacy, Services::Upgrades::BackupAndMaintenance, Services::Upgrades::Executor, Services::Upgrades::Inspector, Services::Upgrades::InstalledStateDetector, Services::Upgrades::Manifest, Services::Upgrades::Planner, Services::Upgrades::PostUpgradeVerifier, Services::Upgrades::RecoveryAdvisor, Services::Upgrades::Version

## Source paths

- `test/services/distributions/channel_observer_test.rb`
- `test/services/distributions/channel_state_test.rb`
- `test/services/distributions/ghcr_promotion_plan_test.rb`
- `test/services/distributions/github_release_plan_test.rb`
- `test/services/distributions/inspector_test.rb`
- `test/services/distributions/manifest_test.rb`
- `test/services/distributions/verifier_test.rb`
- `test/services/enterprise_services_test.rb`
- `test/services/extensions/catalog_test.rb`
- `test/services/extensions/compatibility_planner_test.rb`
- `test/services/extensions/component_resolver_test.rb`
- `test/services/extensions/configuration_test.rb`
- `test/services/extensions/extension_readiness_playbook_test.rb`
- `test/services/extensions/inspector_test.rb`
- `test/services/extensions/installed_state_test.rb`
- `test/services/extensions/lifecycle_test.rb`
- `test/services/extensions/loader_test.rb`
- `test/services/extensions/manifest_test.rb`
- `test/services/extensions/registry_test.rb`
- `test/services/installation/database_configuration_test.rb`
- `test/services/installation/database_provisioner_test.rb`
- `test/services/installation/runtime_database_configuration_test.rb`
- `test/services/installation/state_machine_test.rb`
- `test/services/releases/change_fragment_test.rb`
- `test/services/releases/consistency_validator_test.rb`
- `test/services/releases/notes_generator_test.rb`
- `test/services/releases/preparation_test.rb`
- `test/services/releases/pull_request_validator_test.rb`
- `test/services/releases/release_readiness_playbook_test.rb`
- `test/services/security_privacy_test.rb`
- `test/services/upgrades/backup_and_maintenance_test.rb`
- `test/services/upgrades/executor_test.rb`
- `test/services/upgrades/inspector_test.rb`
- `test/services/upgrades/installed_state_detector_test.rb`
- `test/services/upgrades/manifest_test.rb`
- `test/services/upgrades/planner_test.rb`
- `test/services/upgrades/post_upgrade_verifier_test.rb`
- `test/services/upgrades/recovery_advisor_test.rb`
- `test/services/upgrades/version_test.rb`

## Relationships

- `document:Distribution::Ghcr` —TESTED_BY→ `test:Services::Distributions::GhcrPromotionPlan`
- `test:Services::Distributions::Inspector` —TESTED_BY→ `test:Services::Extensions::Inspector`
- `component:Marketing::Lifecycle` —TESTED_BY→ `test:Services::Extensions::Lifecycle`
- `test:Services::Distributions::Manifest` —TESTED_BY→ `test:Services::Extensions::Manifest`
- `test:Services::Extensions::Configuration` —TESTED_BY→ `test:Services::Installation::DatabaseConfiguration`
- `test:Services::Extensions::Configuration` —TESTED_BY→ `test:Services::Installation::RuntimeDatabaseConfiguration`
- `test:Services::Installation::DatabaseConfiguration` —TESTED_BY→ `test:Services::Installation::RuntimeDatabaseConfiguration`
- `document:Releases::Consistency` —TESTED_BY→ `test:Services::Releases::ConsistencyValidator`
- `test:Services::Distributions::Inspector` —TESTED_BY→ `test:Services::Upgrades::Inspector`
- `test:Services::Extensions::Inspector` —TESTED_BY→ `test:Services::Upgrades::Inspector`
- `test:Services::Extensions::InstalledState` —TESTED_BY→ `test:Services::Upgrades::InstalledStateDetector`
- `test:Services::Distributions::Manifest` —TESTED_BY→ `test:Services::Upgrades::Manifest`
- `test:Services::Extensions::Manifest` —TESTED_BY→ `test:Services::Upgrades::Manifest`
- `test:Services::Distributions::Verifier` —TESTED_BY→ `test:Services::Upgrades::PostUpgradeVerifier`
- `test:Lib::Platform::Version` —TESTED_BY→ `test:Services::Upgrades::Version`

## Contract

No dedicated machine-readable contract is currently registered.

## Change checklist

- Run impact analysis for affected nodes.
- Preserve security, privacy and tenant invariants.
- Update required tests and public contracts.
- Regenerate repository intelligence artifacts.
