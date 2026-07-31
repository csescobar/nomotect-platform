# Representative Application Architecture

## Purpose

The Epic 10 representative application proves that an unfamiliar team can adopt
NomoTect through documented public contracts. It is a deterministic validation
fixture, not a second product and not a privileged copy of the platform.

The application models a small service-request workspace. Organizations receive
isolated request queues; members create and process requests; operators use
search, saved views, exports, notifications and audit evidence. This scope is
large enough to cross the framework boundaries without introducing unrelated
product features.

## Placement and dependency rule

The fixture lives under `test/fixtures/representative_application/`. Its
application code may depend only on contracts listed in
`config/epic_10/representative-application.yml`.

It must not:

- modify protected platform core files to make the journey pass;
- call private methods, undocumented constants or repository-only shortcuts;
- depend on commercial entitlement, telemetry, licensing or support services;
- read maintainer credentials or production data;
- publish a release candidate or stable release.

A later certification compares the fixture's changed paths and dependencies
against these rules. A violation becomes a governed Epic 10 finding and fails
the representative-application gate closed.

## Capability journey

| Stage | Public contract exercised | Required evidence |
| --- | --- | --- |
| Bootstrap | installation and configuration | completed installation state and initial tenant |
| Appearance | design tokens and themes | Light/Dark rendering and generated-artifact checks |
| Localization | locale resolution and i18n | English and Brazilian Portuguese journeys |
| Domain | operations, queries, policies and events | service-request lifecycle and negative paths |
| Data exploration | grid DSL and exports | filters, sorting, saved view and credential-free export |
| Services | jobs, notifications, files and workflow | idempotent execution and audit references |
| Tenancy | memberships and authorization | two-tenant isolation and denied cross-tenant access |
| Extensions | registered extension lifecycle | community-only path plus one sample extension |
| Operations | health and diagnostics | redacted, credential-free evidence |

## Fixture boundaries

The fixture uses deterministic identifiers, clocks and sample data. It creates
at least two organizations so isolation is observable. Generated evidence is
written below `tmp/epic_10/representative_application/` and is never committed.

External delivery is represented by controlled local adapters. Network calls,
real email, provider accounts and production credentials are forbidden in the
automated fixture.

## Evidence model

Each journey produces a stable identifier, result, source paths and artifact
references. Evidence contains no secrets, personal data or raw tenant payloads.
Failures are recorded as findings instead of being hidden by retries.

The final fixture certification will bind its evidence to a full source commit
and the supported environment declared by the Epic 10 release baseline.

## Human boundary

Automation certifies reproducibility and contract use. A maintainer still
reviews usability, the manual accessibility journey and whether the fixture is
representative before release approval. This architecture never grants
publication authority.
