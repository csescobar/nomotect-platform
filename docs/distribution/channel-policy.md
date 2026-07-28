# Distribution Channel Policy

## Supported baseline

GitHub Releases and GitHub Container Registry are the only supported Phase 6
distribution channels. Adding Docker Hub, RubyGems, Homebrew, package
marketplaces or cloud marketplaces requires an identified owner, support
policy, credential boundary, retention policy and separate architecture
review.

## GitHub Releases

- The tag must be `vVERSION` and point to the approved `main` commit.
- A `0.x` publication is marked as a prerelease.
- Release assets must come from the deterministic artifact bundle.
- Existing tags and release assets are immutable and cannot be overwritten.
- Automatic GitHub source archives are convenience downloads, not certified
  release artifacts.

## GHCR

- The image namespace derives from the active repository.
- Semantic tags promote the existing commit-addressable image.
- Release publication must not rebuild the image.
- `linux/amd64` and `linux/arm64` are required.
- Pre-stable publications may use full and minor tags such as `0.8.0` and
  `0.8`.
- The moving `latest` tag is prohibited before the stable release gate.
- Verification uses the immutable multi-platform digest.

## Required artifacts

Every approved publication includes:

- release, migration and upgrade notes;
- release compatibility data;
- application and container SBOMs;
- packaging manifest;
- provenance statement;
- SHA-256 checksums.

The source commit, semantic version, tag, artifact digests and image digest must
be present in credential-free publication evidence.

## Approval and replay

Publication requires a maintainer-approved GitHub `release` environment.
Repeated inspection is safe and read-only. Repeating an already verified
publication is rejected as replay. A matching partial publication may only
resume the missing steps after operator review.
