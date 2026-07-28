# GHCR Semantic Promotion

Release publication promotes the existing commit-addressable multi-platform
image. It does not rebuild an image from a tag, release branch or downloaded
source archive.

`bin/ghcr-promote plan` derives all identities from the active repository,
approved source commit, manifest version and immutable `sha256` digest. For
`0.8.0`, the only destination tags are `0.8.0` and `0.8`. The pre-stable
baseline never creates `latest`.

`apply` is restricted to GitHub Actions on the current `main` commit and the
protected `release` environment. It verifies both the `sha-SHORT_COMMIT` source
tag and digest-qualified image, rejects any existing semantic destination and
uses `docker buildx imagetools create` to copy the existing manifest. Each
resulting tag must resolve to the same immutable digest.

The workflow has `packages: write` and `contents: read`. It receives no
enterprise credentials and cannot access proprietary extension artifacts.
Conflicting tags are never moved or deleted automatically.
