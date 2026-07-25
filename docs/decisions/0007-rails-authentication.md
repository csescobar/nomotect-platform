# ADR 0007 — Use First-Party Rails Authentication

## Status

Accepted

## Context

The platform needs a maintainable authentication baseline with minimal external dependency risk and strong alignment with Rails conventions.

## Decision

Use the first-party Rails authentication generator as the initial authentication foundation. Build platform-specific session governance, authorization, tenant context, audit, MFA and external identity integrations around explicit contracts.

## Consequences

Authentication code remains visible, conventional and easier for maintainers and agents to inspect. Advanced identity capabilities will require deliberate implementation rather than relying on a large authentication framework. Authentication and authorization remain separate concerns.