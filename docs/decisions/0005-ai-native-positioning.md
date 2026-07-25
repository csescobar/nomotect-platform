# ADR 0005 — Position the Platform as AI-Native

## Status

Accepted

## Context

AI-assisted development is central to the platform, but contributors may not have external memory systems, knowledge graphs or proprietary agent tooling.

## Decision

Position Rails Hotwire Platform as an **AI-Native Enterprise Engineering Platform**. Repository-native documentation, module contracts, architecture manifests and playbooks remain the portable source of truth. External tools may enrich this context but are never required.

## Consequences

Public modules must become self-describing. AI-generated contributions remain subject to human accountability, tests, security review and governance. Marketing must not imply autonomous correctness or compliance.