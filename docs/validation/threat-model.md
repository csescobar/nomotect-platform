# Epic 10 Validation Threat Model

## Scope

This threat model covers validation plans, findings, release thresholds,
certification evidence and release-candidate planning. It does not authorize or
model the protected publication implementation itself.

## Assets

- source commit identity;
- release and compatibility metadata;
- validation findings and approvals;
- environment matrix and quality thresholds;
- SBOM, provenance, packaging and operational evidence;
- maintainer release authority.

## Trust boundaries

1. Repository inputs enter strict validators.
2. CI generates or verifies deterministic evidence.
3. Human reviewers approve eligible residual risk and publication.
4. Protected GitHub environments control external release actions.
5. Public channels are observations, not sources of canonical truth.

## Threats and controls

| Threat | Impact | Control |
| --- | --- | --- |
| Evidence from another commit | Incorrect release claim | Full commit binding and same-commit certification |
| Unknown or injected fields | Hidden behavior or disclosure | Exact-key validation and versioned schemas |
| Critical risk accepted silently | Unsafe release decision | Critical/high acceptance prohibited |
| Permanent residual-risk waiver | Stale risk hidden indefinitely | Named approver and mandatory expiry |
| Threshold removed or weakened | False readiness | Required categories, reviewable baseline and change fragment |
| Unsupported environment claimed | Compatibility failure | Explicit support levels and evidence paths |
| Secret or personal data in evidence | Disclosure | Credential-free contracts, redaction thresholds and governed collectors |
| RC plan changes repository state | Unreviewed release mutation | Read-only planner and tests for fixed publication flags |
| Tag or artifact published during planning | Bypass of protected release | No publication API, token or write step in RC planning |
| Mutable or partial source identity | Non-reproducible release | Full lowercase 40-character Git SHA required |
| Missing evidence interpreted as success | False certification | Fail-closed validation and explicit blocked state |
| External provider failure grants capability | Community or entitlement bypass | Existing fail-closed community and commercial-readiness contracts |

## Human approval boundary

Automation may assemble, validate and report evidence. It cannot approve its own
waiver, declare a protected publication approved, create a release tag or merge
a pull request. Maintainers review the exact source commit and evidence before
any protected publication action.

## Residual risks

- Manual browser, assistive-technology and provider checks can be incomplete or
  inconsistent; the release baseline records them as required approvals.
- Performance results depend on declared fixtures and infrastructure; reports
  must record their environment.
- A compromised maintainer or repository credential remains an organizational
  risk addressed by protected environments, least privilege and review policy.

These residual risks must become governed findings when observed. They are never
implicit exceptions to the release gate.
