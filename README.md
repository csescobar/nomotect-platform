# Rails Hotwire Platform

An **AI-Native Enterprise Engineering Platform** for building secure, governed, accessible and maintainable business applications with Ruby on Rails, Hotwire, ViewComponent, PostgreSQL and open-source tooling.

## Vision

This project is not only a starter template. It is a reusable application platform that standardizes architecture, design systems, internationalization, advanced grids, security, governance, observability and developer experience.

AI-native means the repository is intentionally structured so humans and coding agents can understand, extend and validate it safely without depending on undocumented knowledge, proprietary memory tooling or a specific AI vendor. Human accountability and review remain mandatory.

Read the [platform vision](VISION.md) and [Engineering Constitution](ENGINEERING_CONSTITUTION.md).

## Core principles

- AI-native and repository-self-describing
- Enterprise-ready from the first implementation
- Frameworks as adapters rather than architecture
- Secure and private by default
- Server-rendered HTML with progressive enhancement
- Rich domain models without coupling domain logic to Turbo
- Modular monolith before distributed architecture
- Open-source community core under Apache License 2.0
- Design tokens instead of hard-coded styling
- Internationalization and accessibility from the first feature
- Auditable operations and explicit governance

## Runtime baseline

- Ruby 4.0.5
- Rails 8.1.3
- PostgreSQL 18.4
- First-party Rails authentication
- Hotwire: Turbo and Stimulus
- ViewComponent
- Importmap and Propshaft
- Minitest
- Brakeman, bundler-audit and RuboCop

## Quick start

Prerequisites are Ruby 4.0.5 and PostgreSQL 18.

```bash
bash bin/setup
bash bin/dev
```

Create the first user through the Rails console; the project intentionally ships without default credentials:

```bash
ruby bin/rails console
User.create!(
  email_address: "admin@example.com",
  password: "replace-with-a-long-password",
  password_confirmation: "replace-with-a-long-password"
)
```

Run the complete local verification pipeline with:

```bash
bash bin/ci
```

## Platform core contracts

- First-party session authentication and password reset
- Deny-by-default authorization policy contract
- Request-scoped identity and correlation context
- Database-aware health endpoint at `/health`
- Structured JSON logging option
- Nonce-based CSP, secure response headers, secure cookies and scoped request throttling
- Tenant-safe privacy export, anonymization, processing preferences and retention policies
- Production secret validation, redaction rules and rotation runbooks
- Deterministic CycloneDX SBOM and checksum generation in CI
- ViewComponent base and first UI component
- English and Brazilian Portuguese locale baseline
- Stable developer commands under `bin/`
- GitHub Actions quality and security pipeline

Read the [Platform Core AI Context](docs/modules/platform-core/AI_CONTEXT.md) and [Security and Privacy AI Context](docs/modules/security-privacy/AI_CONTEXT.md) for invariants, review boundaries and known limitations.

## Repository Intelligence

Epic 8 adds a provider-neutral Repository Intelligence platform over the source repository. The platform owns a normalized governance graph while replaceable integrations such as Codebase Memory and GitNexus may supply structural code intelligence.

The canonical `RepositoryIntelligence` API powers:

- deterministic manifests, graph snapshots, checksums, AI contexts and architecture reports;
- a normalized SQLite graph store with bounded incremental refresh and drift detection;
- machine-readable module contracts and executable engineering playbooks;
- semantic repository queries, impact analysis and dependency traversal;
- a read-only-by-default stdio MCP server with resources, tools, prompts, auditing, limits and explicit write capabilities;
- typed validators, repository health, remediation guidance and readiness reporting;
- clean-worktree certification covering deterministic regeneration, MCP journeys, provider failures, incremental equivalence and security boundaries.

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

## Current development status

- ✅ Epics 0–8 are complete, covering project foundation, platform core, design system and internationalization, grid engine, domain framework and reference application, Enterprise Services, the Multi-Tenant Platform, Security and Privacy, and the AI Platform with Repository Intelligence.
- ⏳ Epic 9 — Distribution and Enterprise Extensions is the next planned epic, covering canonical versioning, change fragments, changelog and release automation, distribution, compatibility tooling and enterprise repository contracts.
- ⏳ Epic 10 remains planned for framework validation, release candidates and the stable `v1.0.0` release gate.

The [Epic roadmap](docs/roadmap/roadmap.md) is the canonical delivery status and traceability source.

## Documentation

### Foundation

- [Engineering Constitution](ENGINEERING_CONSTITUTION.md)
- [Architecture](ARCHITECTURE.md)
- [Quality model](QUALITY.md)
- [Security policy](SECURITY.md)
- [Apache License 2.0](LICENSE)

### Architecture

- [Platform vision](VISION.md)
- [Product vision](docs/architecture/product-vision.md)
- [Platform architecture](docs/architecture/platform-architecture.md)
- [Module catalog](docs/architecture/module-catalog.md)
- [Architecture principles](docs/architecture/architecture-principles.md)
- [Dependency rules](docs/architecture/dependency-rules.md)
- [Ubiquitous language](docs/architecture/ubiquitous-language.md)
- [Engineering decision tree](docs/architecture/engineering-decision-tree.md)
- [Federated Repository Intelligence ADR](docs/architecture/decisions/0003-federated-repository-intelligence.md)

### AI-native architecture

- [AI architecture overview](docs/ai/README.md)
- [Module contract specification](docs/ai/module-contract-specification.md)
- [Contribution boundaries](docs/ai/contribution-boundaries.md)
- [Architecture manifest schema](docs/ai/architecture-manifest.schema.json)
- [Agent command playbooks](docs/ai/commands/README.md)
- [Repository Intelligence public API](docs/ai/repository-intelligence-api.md)
- [Repository health and readiness](docs/ai/repository-health.md)
- [Epic 8 delivery evidence](docs/ai/epic-8-delivery-evidence.md)
- [AI-native roadmap](docs/ai/ai-first-roadmap.md)
- [AI contribution principles](AI_PRINCIPLES.md)
- [Agent instructions](AGENTS.md)

### Platform capabilities

- [Design system](docs/design-system/overview.md)
- [Grid architecture](docs/grid/architecture.md)
- [Internationalization](docs/i18n/strategy.md)
- [Security baseline](docs/security/security-baseline.md)
- [Threat model](docs/security/threat-model.md)
- [Epic 7 threat model](docs/security/epic-7-threat-model.md)
- [Security operations and rotation](docs/security/security-operations.md)
- [Security and Privacy AI Context](docs/modules/security-privacy/AI_CONTEXT.md)

### Governance and contribution

- [Governance model](docs/governance/governance-model.md)
- [Definition of Done](docs/governance/definition-of-done.md)
- [Documentation standards](docs/governance/documentation-standards.md)
- [RFC process](docs/governance/rfc-process.md)
- [Platform maturity model](docs/governance/platform-maturity-model.md)
- [Coding standards](docs/governance/coding-standards.md)
- [Contribution model](docs/governance/contribution-model.md)
- [Release process](docs/governance/release-process.md)
- [Versioning policy](docs/governance/versioning.md)
- [Privacy and LGPD](docs/governance/privacy-and-lgpd.md)
- [Contributing guide](CONTRIBUTING.md)

### Delivery

- [Epic roadmap](docs/roadmap/roadmap.md)

## Repository strategy

The community platform is distributed under Apache License 2.0. A future `rails-hotwire-enterprise` repository may provide separately licensed premium integrations and operational capabilities without removing essential functionality from the community core.

## Contribution workflow

The `main` branch is protected. Changes are developed on focused branches and submitted through pull requests. Squash merge is the preferred strategy.

## License

Licensed under the [Apache License, Version 2.0](LICENSE).
