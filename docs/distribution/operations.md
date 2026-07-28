# Controlled Distribution Operations

The first controlled publication is the `v0.8.0` prerelease. Run this sequence
only after the complete Phase 6 pull-request stack is merged, the selected
commit is the current `main`, required CI is green and the `release` environment
requires maintainer approval.

## Repository prerequisites

1. Confirm `VERSION` is `0.8.0` and the versioned files under
   `docs/releases/0.8.0` are approved.
2. Confirm the successful `main` CI run produced `packaging-evidence` and the
   commit-addressable multi-platform GHCR image.
3. Confirm the GitHub `release` environment has required reviewers.
4. Record the current `main` SHA, successful CI run identifier and immutable
   multi-platform image digest.

Private enterprise repositories, credentials and artifacts are never inputs to
this process.

## Prepare and inspect

Dispatch `Prepare Distribution` on `main` with the approved SHA and CI run
identifier. The read-only workflow verifies both identities, assembles the
versioned release documents and packaging evidence, validates canonical version
and commit consistency, writes checksums and uploads `distribution-bundle`.

Dispatch `Observe Distribution` with the same approved SHA, successful
`Prepare Distribution` run identifier and immutable image digest. The read-only
workflow uploads `distribution-verification-input` containing the approved
bundle and normalized credential-free channel observations. Download that
artifact and run:

```sh
bin/distribution inspect \
  --manifest distribution-manifest.json \
  --release-metadata release-metadata.json \
  --compatibility artifacts/compatibility.json \
  --channel-state github-release-state.json \
  --channel-state ghcr-state.json \
  --repository OWNER/REPOSITORY \
  --source-branch main \
  --source-commit APPROVED_SHA

bin/distribution preflight \
  --manifest distribution-manifest.json \
  --release-metadata release-metadata.json \
  --compatibility artifacts/compatibility.json \
  --channel-state github-release-state.json \
  --channel-state ghcr-state.json \
  --repository OWNER/REPOSITORY \
  --source-branch main \
  --source-commit APPROVED_SHA
```

Both channels must be `absent`. Stop on blockers, unavailable observations,
partial state or replay.

## Publish

Dispatch `Publish GitHub Release` with the approved SHA and the successful
`Prepare Distribution` run identifier. Review and approve its protected
`release` job. After it succeeds, dispatch `Promote GHCR Release` with the same
SHA, bundle run identifier and immutable image digest, then approve that job.

Do not move existing tags, rebuild the image, publish `latest`, delete a partial
publication or retry blindly. A one-channel success is forward-recovery work
and requires a fresh observation before continuing.

## Verify and retain evidence

After both publications succeed, dispatch `Observe Distribution` again with the
same inputs. Run `Verify Distribution` with the approved SHA, the successful
post-publication observation run identifier and immutable digest. The verifier
accepts evidence only from a successful `Observe Distribution` run for current
`main`. Retain:

- the distribution manifest and checksummed artifact bundle;
- the successful source CI and bundle-preparation run identifiers;
- GitHub artifact attestations;
- the immutable GitHub Release URL and GHCR digest;
- `distribution-publication-evidence`;
- environment approval and operator review records.

The phase is operationally complete only after this evidence reports
`published`. A green pull request certifies the mechanism but does not claim
that public channel state exists.
