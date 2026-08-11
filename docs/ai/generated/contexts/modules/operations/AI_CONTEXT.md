# Operations AI Context

> Generated artifact. Source changes must be followed by regeneration.

## Responsibilities

- test: Operations::CustomersOperations, Operations::Roles

## Source paths

- `test/operations/customers_operations_test.rb`
- `test/operations/roles_test.rb`

## Relationships

- `controller:Customers` —TESTED_BY→ `test:Operations::CustomersOperations`
- `model:Customer` —TESTED_BY→ `test:Operations::CustomersOperations`
- `policy:Customer` —TESTED_BY→ `test:Operations::CustomersOperations`
- `document:Distribution::Operations` —TESTED_BY→ `test:Operations::CustomersOperations`
- `document:Extensions::Operations` —TESTED_BY→ `test:Operations::CustomersOperations`
- `test:Models::Customer` —TESTED_BY→ `test:Operations::CustomersOperations`
- `model:Role` —TESTED_BY→ `test:Operations::Roles`
- `policy:Role` —TESTED_BY→ `test:Operations::Roles`
- `document:Distribution::Operations` —TESTED_BY→ `test:Operations::Roles`
- `document:Extensions::Operations` —TESTED_BY→ `test:Operations::Roles`
- `test:Models::Role` —TESTED_BY→ `test:Operations::Roles`

## Contract

No dedicated machine-readable contract is currently registered.

## Change checklist

- Run impact analysis for affected nodes.
- Preserve security, privacy and tenant invariants.
- Update required tests and public contracts.
- Regenerate repository intelligence artifacts.
