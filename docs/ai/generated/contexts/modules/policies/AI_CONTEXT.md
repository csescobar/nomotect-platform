# Policies AI Context

> Generated artifact. Source changes must be followed by regeneration.

## Responsibilities

- test: Policies::CustomerPolicy, Policies::MembershipPolicy

## Source paths

- `test/policies/customer_policy_test.rb`
- `test/policies/membership_policy_test.rb`

## Relationships

- `model:Customer` —TESTED_BY→ `test:Policies::CustomerPolicy`
- `policy:Customer` —TESTED_BY→ `test:Policies::CustomerPolicy`
- `test:Models::Customer` —TESTED_BY→ `test:Policies::CustomerPolicy`
- `model:Membership` —TESTED_BY→ `test:Policies::MembershipPolicy`
- `policy:Membership` —TESTED_BY→ `test:Policies::MembershipPolicy`

## Contract

No dedicated machine-readable contract is currently registered.

## Change checklist

- Run impact analysis for affected nodes.
- Preserve security, privacy and tenant invariants.
- Update required tests and public contracts.
- Regenerate repository intelligence artifacts.
