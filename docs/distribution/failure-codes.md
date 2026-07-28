# Distribution Statuses and Failure Codes

## Publication statuses

- `planned` — the manifest is valid but remote readiness is not established.
- `preflight_ready` — local and remote read-only checks have no blockers.
- `publishing` — an approved mutating workflow is active.
- `partially_published` — at least one channel changed before a later failure.
- `published` — all channel writes completed.
- `verification_failed` — publication completed but evidence does not verify.
- `recovery_required` — automated continuation is unsafe.

## Stable blocker codes

- `manifest_invalid` — the distribution manifest violates its versioned
  contract.
- `unsupported_channel` — a channel is outside the supported baseline.
- `approval_required` — the protected release environment has not approved the
  operation.
- `source_not_main` — the source commit is not the approved `main` commit.
- `release_metadata_mismatch` — release metadata does not match the manifest.
- `tag_conflict` — the tag exists at a different commit.
- `release_conflict` — an incompatible GitHub Release already exists.
- `image_source_missing` — the commit-addressable GHCR image is unavailable.
- `artifact_missing` — a required artifact is absent.
- `artifact_digest_mismatch` — downloaded content does not match its checksum.
- `evidence_incomplete` — publication evidence omits a required relationship.
- `channel_partial` — remote channel state is incomplete.
- `remote_state_unavailable` — a required read-only remote observation failed.
- `publication_replay` — the immutable release was already verified.

Messages may include stable identifiers, versions and digests. They must not
include credentials, authorization headers, secret values or proprietary
artifact contents.
