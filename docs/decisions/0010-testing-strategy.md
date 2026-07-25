# ADR 0010 — Testing Strategy

## Status

Accepted

## Context

The platform needs a first-party test stack with fast feedback and strong Rails integration.

## Decision

Use Minitest as the default framework, with Rails integration tests, model tests, ViewComponent tests and system tests where browser behavior is material. Security-sensitive paths require negative tests.

## Consequences

- The core has no alternate test framework dependency.
- Applications may adopt additional tools without changing platform contracts.
- `bin/test` is the stable local and CI entrypoint.
