# ADR 0006 — Start as a Modular Monolith

## Status

Accepted

## Context

The platform will contain many enterprise capabilities, but their operational and reuse boundaries are not yet proven.

## Decision

Implement the platform as a modular Rails monolith with explicit module contracts and inward-pointing dependencies. Extract gems or services only after boundaries have demonstrated stability and a concrete reuse or deployment need.

## Consequences

Development and operation remain simple during early phases. Module ownership, cross-module contracts and dependency rules must be enforced to prevent the monolith from becoming unstructured.