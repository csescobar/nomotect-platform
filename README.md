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
- CSP, secure cookies and request throttling baseline
- ViewComponent base and first UI component
- English and Brazilian Portuguese locale baseline
- Stable developer commands under `bin/`
- GitHub Actions quality and security pipeline

Read the [Platform Core AI Context](docs/modules/platform-core/AI_CONTEXT.md) for invariants, review boundaries and known limitations.

## Current development status

- ✅ Epics 0–6 are complete, covering project foundation, platform core, design system and internationalization, grid engine, domain framework and reference application, Enterprise Services, and the Multi-Tenant Platform.
- 🚧 Epic 7 — Security and Privacy is in progress. Draft PR #21 currently contains the implementation gap audit; its roadmap capabilities remain incomplete until code, security-focused tests and final green CI evidence are delivered.
- ◐ Epic 8 — AI-Native Infrastructure is partially delivered through the initial module AI contexts.
- ⏳ Epics 9 and 10 remain planned for distribution, release engineering, framework validation and stable-release readiness.

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

### AI-native architecture

- [AI architecture overview](docs/ai/README.md)
- [Module contract specification](docs/ai/module-contract-specification.md)
- [Contribution boundaries](docs/ai/contribution-boundaries.md)
- [Architecture manifest schema](docs/ai/architecture-manifest.schema.json)
- [Agent command playbooks](docs/ai/commands/README.md)
- [AI-native roadmap](docs/ai/ai-first-roadmap.md)
- [AI contribution principles](AI_PRINCIPLES.md)
- [Agent instructions](AGENTS.md)

### Platform capabilities

- [Design system](docs/design-system/overview.md)
- [Grid architecture](docs/grid/architecture.md)
- [Internationalization](docs/i18n/strategy.md)
- [Security baseline](docs/security/security-baseline.md)
- [Threat model](docs/security/threat-model.md)

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
