# Lib AI Context

> Generated artifact. Source changes must be followed by regeneration.

## Responsibilities

- test: Lib::ContainerEnvironmentValidator, Lib::DesignTokens::Compiler, Lib::GridEngine::Query, Lib::Localization::SupportedLocales, Lib::Platform::Version, Lib::RepositoryIntelligence, Lib::RepositoryIntelligenceAiArtifact, Lib::RepositoryIntelligenceHealth, Lib::RepositoryIntelligencePlaybookExecutor, Lib::RepositoryIntelligenceStorage

## Source paths

- `test/lib/container_environment_validator_test.rb`
- `test/lib/design_tokens/compiler_test.rb`
- `test/lib/grid_engine/query_test.rb`
- `test/lib/localization/supported_locales_test.rb`
- `test/lib/platform/version_test.rb`
- `test/lib/repository_intelligence_ai_artifact_test.rb`
- `test/lib/repository_intelligence_health_test.rb`
- `test/lib/repository_intelligence_playbook_executor_test.rb`
- `test/lib/repository_intelligence_storage_test.rb`
- `test/lib/repository_intelligence_test.rb`

## Relationships

- `document:Design-system::Localization` —TESTED_BY→ `test:Lib::Localization::SupportedLocales`
- `controller:Health` —TESTED_BY→ `test:Lib::RepositoryIntelligenceHealth`
- `test:Lib::Platform::Version` —TESTED_BY→ `test:Services::Upgrades::Version`

## Contract

No dedicated machine-readable contract is currently registered.

## Change checklist

- Run impact analysis for affected nodes.
- Preserve security, privacy and tenant invariants.
- Update required tests and public contracts.
- Regenerate repository intelligence artifacts.
