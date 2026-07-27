# Epic 9 Phase 1 — Completion Record

**Status:** ✅ Baseline complete

Epic 9 Phase 1 delivered the protected, resumable first-run installation and provisioning baseline through PRs #37–#42.

## Delivered capabilities

- Reusable installation namespace, wizard registry, explicit state machine and environment-specific state stores.
- Installation gate that redirects normal requests while preserving health checks and protected setup routes.
- Expiring production bootstrap token, CSRF protection, filtered parameters and exclusive execution locking.
- Appearance and branding configuration for application name, logos, favicon, locales and canonical design-token YAML.
- Safe YAML parsing with aliases disabled, strict validation and deterministic atomic generation of JSON, CSS and frozen Ruby artifacts.
- Light and dark previews and production policy for disabling full token editing while retaining permitted branding fields.
- PostgreSQL connectivity testing through a temporary connection independent of the application Active Record pool.
- Request-scoped administrative credentials that are not persisted in installation state, progress events or runtime secret output.
- Idempotent database and runtime-role provisioning with validated identifiers and ownership reconciliation.
- Pluggable secret-store contract with an atomic local environment-file adapter and restrictive file permissions.
- Structured, bounded and secret-free provisioning and migration progress evidence.
- Isolated runtime-database migration execution, schema verification and database-backed installation evidence.
- Initial global `platform_admin` assignment stored separately from tenant memberships.
- Initial organization creation and organization-scoped `owner` membership for the first user.
- Terminal local and database completion evidence, installer closure and bootstrap-session invalidation.
- Repository Intelligence schemas and documentation for installation state, appearance, database provisioning, migrations and platform-administrator completion.
- Green CI certification for each focused delivery, ending with PR #42 CI run #239.

## Authority model

The first user receives two independent assignments:

1. `PlatformRole(role: "platform_admin")` for global platform authority.
2. `Membership(role: "owner")` for the initial organization only.

Tenant owners do not automatically receive platform-wide authority.

## Accepted deferrals

The following items remain planned work and do not block the completed Phase 1 baseline:

- automatic opening of the installer URL from the development launcher;
- self-hosted font upload, approved external stylesheet and CDN font workflows;
- generated `@font-face` and preload declarations;
- font licensing acknowledgement, integrity and performance policy enforcement;
- operator-managed secret-store adapters and deployment restart handoff;
- live Turbo progress streaming;
- broader clean-install and production-like packaging certification scenarios;
- authentication follow-ups for email verification, email-change reconfirmation and resend controls.

Some of these items naturally belong to Phase 2 packaging, Phase 7 operational readiness or later design-system evolution rather than the first-run baseline.

## Delivery evidence

- PR #37 — Epic 9 planning and architecture.
- PR #38 — installation framework foundation.
- PR #39 — appearance and branding wizard.
- PR #40 — database connectivity and provisioning.
- PR #41 — migration orchestration and database evidence.
- PR #42 — global platform administrator, initial tenant and terminal completion.

## Next planned phase

Epic 9 Phase 2 — Packaging and Distribution:

- supported Docker and Podman Compose profiles;
- non-root OCI image baseline;
- persistence and health boundaries;
- Dev Container and Codespaces configuration;
- environment and secret validation before boot;
- reproducible packaging linked to source, SBOM and provenance evidence.
