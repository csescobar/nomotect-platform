# Release Engineering Architecture

Epic 9 Phase 4 makes release preparation deterministic and reviewable. The root
`VERSION` file is the canonical platform version. It starts at `0.8.0`, the
completed Epic 8 baseline, while Epic 9 changes accumulate as change fragments
toward `0.9.0`.

Every behavior-changing pull request records normalized release impact in a
versioned YAML fragment under `changes/`. The strict contract is defined by
[`change-fragment.schema.json`](../contracts/change-fragment.schema.json).
Fragments identify the changelog category, semantic-version impact, affected
contracts, migration and upgrade actions, and security, privacy, and
accessibility assessments.

The Release contract workflow validates every pull request. Application,
configuration, workflow, and executable-tool changes require a fragment whose
identifier begins with the pull request number. Documentation and test-only
changes are exempt. Contract and database-migration changes require explicit
contract and migration impact. Validation compares the pull request head with
its actual base branch, including stacked pull requests.

`bin/release-notes generate` renders `CHANGELOG.md` and the documents under
`docs/releases/generated/`. `bin/release-notes verify` fails when committed
outputs are missing or stale. Ordering and grouping depend only on normalized
fragment content, so regeneration is deterministic.

`bin/release prepare TARGET_VERSION` is read-only and prints the proposed
release-preparation plan. The explicit `--apply` flag updates `VERSION`,
archives every consumed fragment under `changes/archive/TARGET_VERSION/`,
creates versioned release, migration and upgrade notes, and records normalized
release metadata with a fragment digest. The command then regenerates the
unreleased documents from the remaining active fragment set.

The manually dispatched `Prepare release` workflow runs the Repository
Intelligence `release_readiness` playbook, applies the deterministic plan on a
new branch, verifies generated documents, and opens a draft pull request for
maintainer review. Its permissions are limited to repository content and pull
requests. It has no tag, GitHub Release, registry, deployment or signing step.

Preparation also writes versioned compatibility data and binds its digest into
the release metadata. Application and container SBOMs, packaging manifests and
OCI image labels now carry the canonical platform version.

`bin/release-consistency RELEASE_EVIDENCE_JSON` is a read-only, fail-closed
validation command. The evidence manifest names repository-local files for the
versioned metadata, release notes, compatibility data, application and
container SBOMs, packaging manifest and provenance statement. The command
requires the tag, every embedded version and the compatibility digest to agree.
It emits a versioned JSON report with stable finding codes and never publishes
or changes release state. See
[`consistency.md`](consistency.md) for the operator procedure.

Repository Intelligence owns release-governance relationships and exposes the
release-readiness playbook. Deterministic Ruby and shell commands remain the
authority for validation and generation. MCP and external graph providers are
optional, read-only consumers and cannot merge, tag, or publish a release.

Phase 4 prepares release evidence only. Tags, GitHub Releases, and release-image
publication belong to Epic 9 Phase 6. The stable `v1.0.0` release remains gated
by Epic 10.
