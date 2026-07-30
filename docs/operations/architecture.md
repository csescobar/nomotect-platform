# Operational Readiness Architecture

Epic 9 Phase 7 begins with credential-free contracts for complete backup sets
and explicit restore plans. This baseline describes evidence and ordering; it
does not execute provider commands or claim that a restore has been certified.

## Backup set

An operational backup manifest binds one source revision and installation state
to exactly four checksum-protected components:

1. PostgreSQL;
2. persistent files;
3. generated configuration;
4. installation metadata.

Provider references identify operator-controlled storage without embedding
credentials, tokens, private keys or provider secrets. Backup media remains
outside the repository and outside application persistence.

## Restore plan

A restore plan references one backup manifest and declares ordered,
dependency-aware steps. Each step names the component, the intended provider
adapter action and whether operator confirmation is required.

Restore execution is intentionally unavailable in this slice. A later Phase 7
task must introduce reviewed provider adapters, maintenance and concurrency
safety, production-like restore execution, and evidence capture.

## Verification boundary

Every restore plan declares verification for:

- database schema;
- installation contract;
- generated artifacts;
- application health.

Future certification must fail closed when a component, checksum, dependency or
required verification result is unavailable.

## Security and privacy

Both contracts reject secret-bearing fields. They contain operational metadata
and storage references only. Providers are responsible for encryption,
retention, access control and deletion of backup media.

## Compatibility

The contracts start at schema version 1. Changes that remove fields, component
kinds or verification requirements require a new schema version and migration
guidance. Existing upgrade backup evidence remains valid for upgrade safety but
does not by itself prove that a complete Phase 7 backup set is restorable.
