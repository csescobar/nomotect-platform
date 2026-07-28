# Distribution Architecture

Epic 9 Phase 6 turns approved release evidence into immutable, independently
verifiable distribution records. Release preparation remains owned by the
release-engineering contract. Distribution begins only after that contract
reports a consistent version, tag, source commit, notes, compatibility data,
SBOMs, packaging manifest and provenance statement.

The baseline supports exactly two public channels:

1. GitHub Releases for release notes and downloadable evidence.
2. GitHub Container Registry for the multi-platform OCI image.

Repository identity is resolved from the GitHub repository executing the
workflow. Distribution contracts must therefore work in a fork or derived
repository without retaining the original repository owner or package name.

## Contract flow

An approved distribution manifest binds the semantic version, `vVERSION` tag,
source commit, release-metadata digest and compatibility digest. It also
declares the complete artifact set and the two supported channels. Publication
evidence records immutable channel references and artifact checksums without
credentials or workflow tokens. Channel-state observations provide the
read-only input used by inspection and verification.

The release image is never rebuilt while publishing a release. A later Phase 6
slice must locate the existing commit-addressable multi-platform image and
promote that exact manifest to semantic tags. This preserves the source,
packaging, SBOM and provenance relationship established in earlier phases.

## Authority boundary

Repository Intelligence owns relationships, invariants and freshness checks.
Deterministic Ruby and shell commands remain the authority for parsing,
planning and verification. The existing `release_readiness` playbook may
coordinate read-only readiness checks, but it cannot merge, tag or publish.

Publication will require explicit approval through a protected GitHub
environment named `release`. This contract baseline has read-only workflow
permissions and performs no publication.

## Community and enterprise separation

Public distribution contains only the Apache-licensed community platform.
Platform workflows do not access the private enterprise repository, receive its
credentials or publish proprietary extension packages. Enterprise extensions
may consume the public version, image and compatibility contracts through an
independent release process.

## Recovery

Published immutable objects are not overwritten or deleted automatically.
Before the first channel changes, publication must fail closed on any blocker.
If one channel succeeds and a later channel fails, the state becomes
`partially_published`, execution stops for operator review and recovery resumes
forward from verified evidence.
