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

Repository Intelligence owns release-governance relationships and exposes the
release-readiness playbook. Deterministic Ruby and shell commands remain the
authority for validation and generation. MCP and external graph providers are
optional, read-only consumers and cannot merge, tag, or publish a release.

Phase 4 prepares release evidence only. Tags, GitHub Releases, and release-image
publication belong to Epic 9 Phase 6. The stable `v1.0.0` release remains gated
by Epic 10.
