# 0014 — Support GitHub Releases and GHCR as the Distribution Baseline

**Status:** Accepted
**Date:** 2026-07-28

## Context

Release preparation already produces canonical version, notes, compatibility,
SBOM, packaging and provenance evidence. The platform now needs public channels
whose identity, permissions, immutability and verification behavior can be
owned by the maintainers.

Supporting many registries before ownership and support policy exist would
multiply credentials, retention rules, failure modes and operator obligations.
Rebuilding containers during release would also break the relationship between
the image certified on `main` and the image delivered to operators.

## Decision

Epic 9 Phase 6 supports GitHub Releases and GHCR only. Both identities derive
from the repository executing the workflow. GitHub Releases carry deterministic
release assets. GHCR semantic tags promote the already certified
commit-addressable multi-platform image without rebuilding it.

Publication requires a protected `release` environment, immutable targets and
forward recovery after partial publication. Pre-stable releases do not publish
the `latest` image tag.

The public workflow distributes only the Apache-licensed community platform.
Private enterprise repositories and proprietary extension artifacts remain
outside its credentials, inputs and outputs.

## Consequences

- One approved commit can be compared across source, release assets and OCI
  digest.
- Forks and derived repositories keep their own release identity.
- Additional channels require a new ownership and architecture decision.
- Operators must treat partially published state as forward-recovery work.
- The first controlled `v0.8.0` publication remains a prerelease; `v0.9.0`
  remains reserved for Epic 9 completion.
