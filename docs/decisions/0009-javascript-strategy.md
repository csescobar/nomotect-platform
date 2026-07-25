# ADR 0009 — JavaScript Strategy

## Status

Accepted

## Context

The platform needs progressive enhancement without introducing a client-side application framework as its architectural center.

## Decision

Use Importmap, Turbo and Stimulus as the default JavaScript stack. Domain behavior remains server-side. Stimulus controllers handle local browser behavior and third-party UI adapters.

## Consequences

- The default application does not require Node.js or a bundler.
- JavaScript remains a replaceable presentation adapter.
- A bundler may be introduced by an application when a documented dependency requires it.
