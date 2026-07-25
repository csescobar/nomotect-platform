# Rails Hotwire Platform

An AI-First Enterprise Application Platform for building secure, governed, accessible and maintainable business applications with Ruby on Rails, Hotwire, ViewComponent, PostgreSQL and open-source tooling.

## Vision

This project is not intended to be only a starter template. It is a reusable application platform that standardizes architecture, design system, internationalization, advanced grids, security, governance, observability and developer experience.

AI-first means the repository is intentionally structured so humans and coding agents can understand, extend and validate it safely without depending on undocumented knowledge or a specific AI vendor. Human accountability and review remain mandatory.

Read the full [platform vision](VISION.md).

## Core principles

- Secure and private by default
- Server-rendered HTML with progressive enhancement
- Rich domain models without coupling domain logic to Turbo
- Modular monolith before distributed architecture
- Open-source dependencies by default
- Design tokens instead of hard-coded styling
- Internationalization from the first commit
- Auditable operations and explicit governance
- Machine-readable architecture contracts
- Agent-friendly conventions and executable documentation

## Planned stack

- Ruby on Rails
- Hotwire: Turbo and Stimulus
- ViewComponent
- PostgreSQL
- Tabulator as the first grid UI adapter
- Rails I18n
- Minitest or RSpec
- Capybara and Playwright
- Brakeman, bundler-audit and RuboCop
- OpenTelemetry-compatible observability

## Documentation

### Architecture

- [Platform vision](VISION.md)
- [Product vision](docs/architecture/product-vision.md)
- [Platform architecture](docs/architecture/platform-architecture.md)
- [Module catalog](docs/architecture/module-catalog.md)

### AI-first architecture

- [AI-first architecture overview](docs/ai/README.md)
- [Module contract specification](docs/ai/module-contract-specification.md)
- [Contribution boundaries](docs/ai/contribution-boundaries.md)
- [Architecture manifest schema](docs/ai/architecture-manifest.schema.json)
- [Agent command playbooks](docs/ai/commands/README.md)
- [AI-first roadmap](docs/ai/ai-first-roadmap.md)

### Platform capabilities

- [Design system](docs/design-system/overview.md)
- [Grid architecture](docs/grid/architecture.md)
- [Internationalization](docs/i18n/strategy.md)
- [Security baseline](docs/security/security-baseline.md)
- [Threat model](docs/security/threat-model.md)

### Governance and contribution

- [Governance model](docs/governance/governance-model.md)
- [Coding standards](docs/governance/coding-standards.md)
- [Contribution model](docs/governance/contribution-model.md)
- [Release process](docs/governance/release-process.md)
- [Versioning policy](docs/governance/versioning.md)
- [Privacy and LGPD](docs/governance/privacy-and-lgpd.md)
- [AI contribution principles](AI_PRINCIPLES.md)
- [Agent instructions](AGENTS.md)
- [Contributing guide](CONTRIBUTING.md)

### Delivery

- [Platform roadmap](docs/roadmap/roadmap.md)

## Contribution workflow

The `main` branch is protected. Changes should be developed on focused branches and submitted through pull requests. Squash merge is the preferred strategy for completed changes.

## Status

Documentation and architectural foundation in progress. Application code has not yet been scaffolded.

## License

License selection is pending. The intended direction is a permissive open-source license, subject to final review.
