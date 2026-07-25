# ADR 0008 — Supported Runtime Versions

## Status

Accepted

## Context

Epic 1 requires a reproducible, supportable runtime baseline for the first executable platform release.

## Decision

The initial baseline is Ruby 4.0.5, Rails 8.1.3 and PostgreSQL 18.4. Applications should remain on the latest security and bug-fix release within these selected major and minor lines.

## Consequences

- The platform can use the Rails 8.1 authentication and local CI capabilities.
- CI and local tooling target PostgreSQL 18.
- Version changes require dependency checks, test evidence and an ADR update.
