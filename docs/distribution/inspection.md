# Distribution Inspection and Preflight

Distribution inspection is read-only. It combines an approved distribution
manifest, prepared release metadata, compatibility data and versioned
observations for GitHub Releases and GHCR. It never creates a tag, release,
registry tag or attestation.

Use the release command:

```sh
bin/release publish inspect \
  --manifest tmp/distribution/manifest.json \
  --release-metadata docs/releases/0.8.0/release-metadata.json \
  --compatibility docs/releases/0.8.0/compatibility.json \
  --channel-state tmp/distribution/github-release-state.json \
  --channel-state tmp/distribution/ghcr-state.json \
  --repository OWNER/REPOSITORY

bin/release publish preflight \
  --manifest tmp/distribution/manifest.json \
  --release-metadata docs/releases/0.8.0/release-metadata.json \
  --compatibility docs/releases/0.8.0/compatibility.json \
  --channel-state tmp/distribution/github-release-state.json \
  --channel-state tmp/distribution/ghcr-state.json \
  --repository OWNER/REPOSITORY \
  --format json
```

`bin/distribution` exposes the same interface for automation. Repository, source
commit and source branch default to `GITHUB_REPOSITORY`, `GITHUB_SHA` and
`GITHUB_REF_NAME`. Local execution falls back to static `git` inspection for
commit and branch. Explicit options are available for production-like fixtures.

## Inspect versus preflight

`inspect` reports missing or unavailable remote observations as warnings so an
operator can examine incomplete evidence. It still blocks local version,
digest, repository, tag and source mismatches.

`preflight` treats every missing or unavailable required channel observation as
a blocker. It also blocks conflicting immutable objects, partial channel state
and replay of an already published release. A ready preflight still reports the
protected `release` environment approval as an operator action.

Exit status `2` means preflight is blocked or an input is invalid. Inspection
and ready preflight are state-free and repeatable.

## Channel observations

Channel-state JSON follows
[`channel-state.schema.json`](../contracts/channel-state.schema.json). The
baseline deliberately separates observation collection from policy evaluation.
Future provider adapters may collect GitHub state, but the deterministic engine
continues consuming the same credential-free contract.

Reports contain stable codes, identifiers and immutable references. They do not
contain authorization headers, workflow tokens, private package contents or
enterprise repository information.
