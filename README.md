# NomoTect

**Build with structure. Evolve with confidence.**

NomoTect is an open-source, AI-native, enterprise-ready governed application platform for building secure, accessible and maintainable applications with Ruby on Rails and Hotwire.

The Apache-licensed community platform provides a complete application foundation. Optional commercial services and extensions may integrate through explicit contracts without disabling or replacing essential community functionality.

## What NomoTect provides

- **Governed architecture:** explicit module boundaries, executable contracts, engineering playbooks and repository-native documentation.
- **Application foundation:** authentication, deny-by-default authorization, multi-tenancy, auditability, background work, files, workflows, integrations and feature flags.
- **Secure operations:** privacy workflows, CSP and security headers, abuse controls, secret validation, SBOMs, provenance and security automation.
- **User experience:** Hotwire and ViewComponent, accessibility and internationalization in English and Brazilian Portuguese.
- **Theme contract:** exactly two user-selectable themes—Light and Dark. Missing, invalid and legacy `system` preferences normalize to Light.
- **Repository Intelligence:** deterministic architecture evidence, impact analysis, health and readiness reporting, executable playbooks and a read-only-by-default MCP server.
- **Distribution and lifecycle:** protected first-run installation, containers, deployment profiles, upgrade and recovery contracts, release automation, extensions, operational readiness and certification.

Read the [platform vision](VISION.md), [platform architecture](docs/architecture/platform-architecture.md) and [Engineering Constitution](ENGINEERING_CONSTITUTION.md).

## Release and maturity

The current project version is **v0.9.0**. Epics 0 through 9 are complete and Epic 9 is executable-certified, but v0.9.0 remains a pre-stable release.

Epic 10 is the next delivery stage. It owns representative application validation, release candidates and the stable `v1.0.0` gate. See the [authoritative roadmap](docs/roadmap/roadmap.md) and [Epic 9 certification](docs/certifications/epic-9.md).

## Runtime baseline

- Ruby 4.0.5
- Rails 8.1.3.1
- PostgreSQL 18
- Hotwire: Turbo and Stimulus
- ViewComponent
- Importmap and Propshaft
- Minitest
- Brakeman, bundler-audit and RuboCop

## Quick start

### Docker Compose

Docker Compose is the shortest supported path for local evaluation:

```bash
docker compose up --build
```

Open `http://localhost:3000`. The development profile enables the protected first-run installation flow and starts PostgreSQL 18.

### Local Ruby and PostgreSQL

Install Ruby 4.0.5 and PostgreSQL 18, then run:

```bash
bash bin/setup
bash bin/dev
```

For a new installation managed by the interactive wizard:

```bash
INSTALLATION_ENABLED=true \
PGHOST=127.0.0.1 \
PGUSER=postgres \
PGPASSWORD=postgres \
bash bin/setup

INSTALLATION_ENABLED=true \
PGHOST=127.0.0.1 \
PGUSER=postgres \
PGPASSWORD=postgres \
bash bin/dev
```

Open `http://localhost:3000` and follow the protected wizard. It configures appearance, provisions and verifies the database, creates the global platform administrator and initial organization owner, records completion evidence and closes installer access after completion.

Do not use example or default credentials in deployed environments. Production installation requires an operator-provided bootstrap token and secret configuration.

### Verify the repository

Run the complete local verification pipeline:

```bash
bash bin/ci
```

Run the focused Epic 9 certification:

```bash
ruby bin/epic-9-certify
```

## Supported distribution paths

New product repositories start from the versioned, cross-platform
[Application Starter](docs/distribution/application-starter.md), not by cloning
the NomoTect contributor repository.

- [Download for Linux or macOS](https://github.com/csescobar/nomotect-platform/releases/latest/download/nomotect-starter.tar.gz)
- [Download for Windows](https://github.com/csescobar/nomotect-platform/releases/latest/download/nomotect-starter.zip)
- [Browse releases and checksums](https://github.com/csescobar/nomotect-platform/releases/latest)

The repository certifies these delivery profiles in CI:

- development and production [Docker Compose profiles](compose.yaml);
- [Dev Container and Codespaces](.devcontainer/devcontainer.json);
- [Kamal](docs/deployment/kamal.md) and [private VPS](docs/deployment/private-vps.md);
- [Render.com Blueprint](docs/deployment/render.md);
- versioned OCI images with SBOM, checksum and provenance evidence;
- GitHub Releases and GHCR publication from the same approved commit and immutable image digest.

The [operator handbook](docs/operators/handbook.md) is the starting point for installation, deployment, upgrades, recovery, extensions, releases and routine operation.

## Platform contracts

NomoTect keeps platform behavior explicit and testable:

- versioned installation state and secret-free setup metadata;
- resumable upgrade plans, compatibility checks, backup evidence, history and recovery guidance;
- deployment manifests, package profiles and operational evidence;
- stable external extension contracts and compatibility certification;
- neutral edition, entitlement and commercial-service interfaces;
- opt-in telemetry and explicit support-consent boundaries;
- backup, restore, redacted diagnostics, health and disaster-recovery certification;
- documentation ownership, freshness validation and continuously tested examples.

Repository Intelligence validates the relationships and freshness of these contracts. It does not require a proprietary AI provider.

## Repository Intelligence

AI agents beginning an adoption journey must first follow the
[MCP-first bootstrap](MCP_BOOTSTRAP.md). The initial certification target is
Antigravity CLI (`agy`), using a workspace-local, read-only configuration and a
mandatory client restart before repository discovery.

Useful commands include:

```bash
ruby bin/repository-intelligence generate
ruby bin/repository-intelligence validate
ruby bin/repository-intelligence health
ruby bin/repository-intelligence readiness
ruby bin/repository-intelligence query statistics
ruby bin/repository-intelligence playbook list
ruby bin/repository-intelligence mcp
```

The canonical `RepositoryIntelligence` API provides deterministic manifests and graph snapshots, a normalized SQLite graph store, semantic queries and impact analysis, machine-readable module contracts, health and readiness reporting, and a read-only-by-default stdio MCP server.

Read the [Repository Intelligence public API](docs/ai/repository-intelligence-api.md), [repository health guide](docs/ai/repository-health.md) and [Platform Core AI Context](docs/modules/platform-core/AI_CONTEXT.md).

## Delivery history

The roadmap and merged delivery evidence show the platform's progression from governance foundation to a distributable and operable product:

| Epic | Status | Delivered baseline | Primary evidence |
| --- | --- | --- | --- |
| **0 — Project Foundation** | ✅ Complete | Apache 2.0 identity, constitution, architecture and dependency rules, quality model, documentation governance, security disclosure and protected contribution workflow. | PR #3 |
| **1 — Platform Core** | ✅ Complete | Rails/PostgreSQL scaffold, Hotwire and ViewComponent, authentication, deny-by-default authorization, request context, health, logging and CI security pipeline. | PR #4 |
| **2 — Design System and i18n** | ✅ Complete | Compiled design tokens, typography, icons, layouts, form and navigation components, accessibility baseline, deterministic artifacts, English and Brazilian Portuguese. The current public selector contract is Light and Dark only. | PRs #5–#10 and later token/theme refinements |
| **3 — Grid Engine** | ✅ Complete | Grid DSL, registries, query AST, Active Record/Arel and Tabulator adapters, HTML/Turbo fallback, saved views, export and column personalization. | PR #14 |
| **4 — Domain Framework and Reference Application** | ✅ Complete | Operations, queries, policies, events, rich-domain conventions and a reference Customers capability with CRUD, audit, authorization, locking and system/security coverage. | PR #15 |
| **5 — Enterprise Services** | ✅ Complete | Audit and observability, background jobs and idempotency, notifications, files, imports/exports, workflows, integrations, webhooks and feature flags. | PR #18 |
| **6 — Multi-Tenant Platform** | ✅ Complete | Organizations, memberships and roles, invitations, tenant selection and context, isolation guarantees, tenant-safe services, ownership transfer and cross-tenant leakage tests. | PRs #11, #12, #20 and #22 |
| **7 — Security and Privacy** | ✅ Complete | Privacy and LGPD workflows, CSP and secure headers, throttling, secret/key management, dependency and supply-chain automation, SBOM/provenance and threat/security suites. | PR #21 |
| **8 — AI Platform and Repository Intelligence** | ✅ Complete | Provider-neutral repository scanning, governance graph and SQLite store, machine-readable contracts, generated evidence, playbooks, MCP, health/readiness and clean-worktree certification. | PRs #24, #26–#31 and #33–#34 |
| **9 — Distribution, Installation and Enterprise Extensions** | ✅ Complete | Protected installation, packaging and deployment, upgrades and recovery, release engineering and publication, extension contracts, operational/commercial readiness, operator documentation and executable final certification. | PRs #37–#141; [certification](docs/certifications/epic-9.md) |
| **10 — Framework Validation and Stable Release** | ⏳ Planned | Representative application validation, release candidates and the stable `v1.0.0` gate. | [Roadmap](docs/roadmap/roadmap.md) |

Epic 9 completion does not itself authorize a stable release. The executable certification deliberately preserves Epic 10 as the stable-release gate.

## Documentation

### Start here

- [Operator handbook](docs/operators/handbook.md)
- [Compatibility and lifecycle policy](docs/operators/compatibility-and-lifecycle.md)
- [Epic roadmap](docs/roadmap/roadmap.md)
- [Contributing guide](CONTRIBUTING.md)
- [Release process](docs/governance/release-process.md)
- [Versioning policy](docs/governance/versioning.md)

### Architecture and AI-native engineering

- [Platform vision](VISION.md)
- [Product vision](docs/architecture/product-vision.md)
- [Platform architecture](docs/architecture/platform-architecture.md)
- [Module catalog](docs/architecture/module-catalog.md)
- [Architecture principles](docs/architecture/architecture-principles.md)
- [Dependency rules](docs/architecture/dependency-rules.md)
- [AI architecture overview](docs/ai/README.md)
- [Module contract specification](docs/ai/module-contract-specification.md)
- [Contribution boundaries](docs/ai/contribution-boundaries.md)
- [Agent command playbooks](docs/ai/commands/README.md)
- [AI contribution principles](AI_PRINCIPLES.md)
- [Agent instructions](AGENTS.md)

### Platform, operations and extensions

- [Design system](docs/design-system/overview.md)
- [Grid architecture](docs/grid/architecture.md)
- [Internationalization](docs/i18n/strategy.md)
- [Security baseline](docs/security/security-baseline.md)
- [Threat model](docs/security/threat-model.md)
- [Security operations and rotation](docs/security/security-operations.md)
- [Extension architecture](docs/extensions/architecture.md)
- [Extension lifecycle guide](docs/extensions/lifecycle-guide.md)
- [Extension platform certification](docs/extensions/certification.md)
- [Epic 9 certification](docs/certifications/epic-9.md)

### Governance

- [Governance model](docs/governance/governance-model.md)
- [Definition of Done](docs/governance/definition-of-done.md)
- [Documentation standards](docs/governance/documentation-standards.md)
- [RFC process](docs/governance/rfc-process.md)
- [Platform maturity model](docs/governance/platform-maturity-model.md)
- [Coding standards](docs/governance/coding-standards.md)
- [Quality model](QUALITY.md)
- [Security policy](SECURITY.md)

## Repository strategy

The community platform is distributed under the [Apache License 2.0](LICENSE). Organizations may build compatible commercial services or extensions under their own terms, subject to the license and trademarks. NomoTect's planned product family may also provide separately licensed offerings through the same public extension, entitlement, support and telemetry boundaries.

## Contribution workflow

The `main` branch is protected. Develop one focused change per branch, submit it through a pull request and satisfy the repository's release, test, lint, security, Repository Intelligence and relevant packaging contracts. Squash merge is the preferred strategy.

## License

Licensed under the [Apache License, Version 2.0](LICENSE).
