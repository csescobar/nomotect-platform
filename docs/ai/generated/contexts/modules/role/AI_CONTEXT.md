# Role AI Context

> Generated artifact. Source changes must be followed by regeneration.

## Responsibilities

- model: Role
- policy: Role

## Source paths

- `app/models/role.rb`
- `app/policies/role_policy.rb`

## Relationships

- `model:Role` —DOCUMENTED_BY→ `document:Architecture::Decisions::0006-seal-application-role-and-grid-registries`
- `policy:Role` —DOCUMENTED_BY→ `document:Architecture::Decisions::0006-seal-application-role-and-grid-registries`
- `model:Role` —TESTED_BY→ `test:Models::PlatformRole`
- `policy:Role` —TESTED_BY→ `test:Models::PlatformRole`
- `model:Role` —TESTED_BY→ `test:Models::Role`
- `policy:Role` —TESTED_BY→ `test:Models::Role`
- `model:Role` —TESTED_BY→ `test:Operations::Roles`
- `policy:Role` —TESTED_BY→ `test:Operations::Roles`

## Contract

No dedicated machine-readable contract is currently registered.

## Change checklist

- Run impact analysis for affected nodes.
- Preserve security, privacy and tenant invariants.
- Update required tests and public contracts.
- Regenerate repository intelligence artifacts.
