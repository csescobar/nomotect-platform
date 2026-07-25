# Contribution Boundaries

Repository areas are classified by modification risk. The classification applies equally to human-authored and AI-assisted changes.

## Standard

Routine changes following documented extension points.

Examples:

- New translations
- New showcase examples
- New application modules using established generators
- Tests for existing public behavior

Required evidence: relevant tests and documentation updates.

## Review required

Changes that affect shared contracts or cross-cutting behavior.

Examples:

- Shared ViewComponents
- Grid types, operators and adapters
- Authorization policies
- Tenant scoping
- Logging and audit infrastructure
- Public configuration formats

Required evidence: tests, security and privacy assessment, compatibility assessment and maintainer review.

## Architecture review required

Changes that alter platform boundaries or foundational guarantees.

Examples:

- Authentication and session handling
- Cryptography and secret management
- Domain transaction boundaries
- Dependency direction
- Architecture manifest schema
- Module public APIs
- Data retention and deletion behavior
- Generated-code templates

Required evidence: ADR, threat analysis, migration or rollback plan and maintainer approval.

## Generated

Generated files must not be edited manually unless their generator explicitly supports it. Generated files must contain a header identifying the source generator where appropriate.

## Prohibited without explicit authorization

- Disabling security controls to make tests pass
- Bypassing tenant scope or authorization
- Logging secrets or unnecessary personal data
- Executing client-provided SQL or constant names
- Adding hidden network calls or telemetry
- Introducing proprietary dependencies as mandatory platform infrastructure
- Direct commits to `main`

## Pull request declaration

Every pull request should state:

- Which boundary level applies
- Whether AI assistance was used
- Which contracts changed
- Security, privacy and accessibility impact
- Validation performed
