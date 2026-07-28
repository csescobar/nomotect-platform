# ADR 0013 — Separate Enterprise Extensions from the Community Core

## Status

Accepted

## Context

The Apache-licensed community platform must remain complete and useful while
allowing separately licensed capabilities to integrate through stable,
reviewable contracts. Loading arbitrary Ruby packages without an explicit
boundary would make compatibility, upgrades and operational recovery
unreliable.

## Decision

The community repository owns the extension contracts, compatibility engine,
registration SDK, lifecycle controls, certification fixtures and operator
documentation. Actual enterprise capabilities are maintained in separate
repositories and distributed as independently versioned Ruby packages.

Extension packages must disable Bundler auto-require. The platform reads and
validates the package manifest before requiring its entrypoint. Extensions use
explicit registration hooks and may depend only on documented platform
contracts.

The community core never references enterprise constants, repositories,
credentials, license services or product identifiers. It remains fully
functional when no extension is configured.

Extensions are trusted in-process code, not a security sandbox. Package
approval, signing and distribution-channel verification are separate concerns
owned by later Epic 9 phases.

## Consequences

- Community functionality cannot be removed to force commercial adoption.
- Enterprise packages can evolve independently within declared compatibility.
- Missing or incompatible packages can be detected before their code executes.
- Installing, removing or replacing an extension requires a process restart.
- Hot loading and unloading Ruby code are unsupported.
- Entitlements and commercial licensing remain outside the extension contract.
