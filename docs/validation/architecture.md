# Epic 10 Validation Architecture

## Purpose

Epic 10 validates NomoTect as an adoptable framework. The validation system
records plans, findings and certification evidence as strict, versioned,
credential-free contracts.

This baseline defines evidence structure and release-blocker behavior. It does
not publish a release candidate or claim that any Epic 10 phase is certified.

## Contracts

- `epic-10-validation-plan.schema.json` assigns phases, owners, objectives and
  required evidence.
- `epic-10-finding.schema.json` records severity, state, remediation,
  evidence and optional risk acceptance.
- `epic-10-certification.schema.json` binds phase and finding summaries to a
  full source commit.
- `epic-10-release-baseline.schema.json` defines supported environments and
  measurable quality thresholds.
- `epic-10-rc-plan.schema.json` defines deterministic review-only candidate
  preparation.

The Ruby validator enforces semantic rules that JSON Schema alone cannot
express reliably, including unique identifiers and release-blocker policy.

Read the [release baseline](release-baseline.md) for the current matrix, support
levels, thresholds and manual validation boundary. The
[RC preparation guide](rc-preparation.md) documents the review-only candidate
plan, and the [threat model](threat-model.md) records its trust boundaries.

## Finding policy

| Severity | May remain open for passing certification? | May be accepted? |
| --- | --- | --- |
| Critical | No | No |
| High | No | No |
| Medium | Yes, but certification policy may still block | Yes, with approval and expiry |
| Low | Yes, but certification policy may still block | Yes, with approval and expiry |

Acceptance is not an informal label. It requires an owner, rationale, approver,
approval timestamp and later expiry timestamp. A waiver is forbidden for open
or resolved findings.

## Certification behavior

A report with status `passed` requires every recorded phase to be complete and
contains no unresolved critical or high finding. Reports are bound to a full
40-character Git commit so later certification can aggregate same-commit
source, artifacts, SBOM, provenance and operational evidence.

The schemas deliberately permit `failed` and `blocked` reports with
incomplete evidence. Unknown state is recorded explicitly and never interpreted
as success.

## Security and privacy boundaries

Validation evidence contains stable identifiers and artifact references, not
credentials, personal data or raw production payloads. Contract objects reject
unknown fields to reduce accidental disclosure. Future collectors must redact
evidence before it reaches these contracts.

## Validation

Run the focused contract suite with:

```bash
bash bin/epic-10-contract-certify
```

The command validates JSON syntax and executes semantic contract tests. Full
repository CI remains authoritative.
