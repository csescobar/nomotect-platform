# Epic 10 Release Candidate Preparation

## Purpose

The RC planner creates a deterministic, review-only plan for
`v1.0.0-rc.N`. It does not change `VERSION`, create a tag, build or publish
artifacts, open a release, or grant approval.

The stable release preparation command remains separate and continues to reject
pre-release targets.

## Inputs

- an Epic 10 target matching `1.0.0-rc.N`, where N starts at 1;
- the exact 40-character lowercase source commit;
- the current `0.9.0` VERSION baseline;
- the governed Epic 10 release baseline;
- the current changelog and active change fragments.

## Deterministic output

The plan records:

- source and target versions, tag and exact commit;
- SHA-256 digests for the release baseline, changelog and normalized fragments;
- sorted fragment identifiers;
- required release, compatibility, SBOM, packaging, provenance and Epic 10
  validation evidence;
- an unapproved protected environment;
- publication flags fixed to false.

Repeated planning against unchanged inputs produces identical output.

## Safety boundary

Planning is deliberately unable to publish. The output schema requires:

- `status: review_required`;
- `approval.required: true`;
- `approval.approved: false`;
- `publication.allowed: false`;
- no tag or artifact publication.

Later tasks may prepare versioned RC artifacts and observe protected publication,
but only explicit human approval may cross the publication boundary.

## Usage

```bash
ruby bin/epic-10-rc-plan \
  --target-version 1.0.0-rc.1 \
  --source-commit 0123456789abcdef0123456789abcdef01234567
```

The command emits JSON to standard output and does not write repository state.
