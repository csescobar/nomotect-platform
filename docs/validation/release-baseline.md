# Epic 10 Release Baseline

## Purpose

The release baseline defines the environments NomoTect currently claims and the
minimum evidence required for Epic 10 release decisions. It distinguishes
automated certification from documented or manual validation.

A listed environment is not automatically approved for `v1.0.0`. Later Epic
10 phases must produce the evidence named by each entry and metric.

## Support levels

| Level | Meaning |
| --- | --- |
| `certified` | A repository workflow or deterministic validator covers the declared baseline. |
| `documented` | A supported procedure exists, but the complete combination is not continuously exercised. |
| `manual` | Human validation is mandatory before a release claim. |

The `manual_required` flag remains explicit even for certified deployment
profiles because provider accounts, credentials and external infrastructure
cannot be reproduced safely by repository CI.

## Current environment matrix

| Area | Baseline | Level | Manual validation |
| --- | --- | --- | --- |
| Ruby | 4.0.5 | certified | no |
| Rails | 8.1.3.1 | certified | no |
| PostgreSQL | 18 | certified | no |
| Chromium | current | certified | no |
| Firefox | current | manual | yes |
| WebKit | current | manual | yes |
| Docker | current | certified | no |
| Podman | current | documented | yes |
| Compose | development and production | certified | no |
| Dev Container | current | certified | no |
| Kamal/private VPS | 2.12 profile | certified | yes |
| Render | Blueprint profile | certified | yes |

`current` means the version available in the declared validation environment
at the time evidence is generated. Reports must record the observed version;
they must not treat an unrecorded moving version as permanent compatibility.

## Quality thresholds

The machine-readable baseline owns the exact metric identifiers, comparators,
targets, units and evidence requirements. The initial policy requires:

- zero automated critical accessibility violations and keyboard blockers, plus
  manual screen-reader approval;
- zero unresolved critical or high security findings and successful dependency,
  SBOM and provenance checks;
- zero secret-bearing evidence or unapproved personal-data flows;
- initial request, query and background-job performance budgets;
- zero required compatibility-matrix failures and completed manual approvals;
- zero failed resilience scenarios and verified recovery;
- an AI-readiness journey with no undocumented context steps.

Performance budgets are initial validation thresholds, not universal production
service-level objectives. Phase 6 must measure them on declared fixtures and
infrastructure. Changes require a reviewed fragment and updated rationale.

## Fail-closed behavior

The `Epic10::ReleaseBaseline` validator rejects:

- missing Ruby, Rails or PostgreSQL entries;
- missing quality categories;
- unknown fields or unsupported support levels;
- duplicate environment or metric identifiers;
- manual support that does not require manual validation;
- empty evidence requirements;
- boolean targets with non-equality comparators.

A missing or invalid baseline blocks release certification.

## Validation

Run:

```bash
bash bin/epic-10-contract-certify
```

The focused command parses every Epic 10 schema and validates both the core
contracts and this release baseline.
