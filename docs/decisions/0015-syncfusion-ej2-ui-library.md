# ADR 0015 — Syncfusion EJ2 as the UI Component Library

**Status:** Accepted
**Date:** 2026-08-04

## Context

NomoTect has a `GridEngine` with a secure server-side query pipeline (validation,
tenant scope, whitelisted operators). The frontend rendering layer used Tabulator
as the grid adapter, as initially described in `docs/grid/architecture.md`.

The product roadmap requires enterprise-grade grid capabilities that Tabulator
does not provide out of the box: contextual filter menus, column grouping, a
built-in column chooser, native CSV/Excel export, and TreeGrid support for
hierarchical datasets. Implementing those features on top of Tabulator would
require extensive custom development that is difficult to maintain and to keep
accessible.

ADR-0009 establishes Stimulus as the mechanism for third-party UI adapters, and
ADR-0011 requires the design system to remain driven by native CSS custom
properties and design tokens. Any incoming library must be compatible with both
decisions.

## Decision

Adopt Syncfusion EJ2 JavaScript (native ESM packages) as the primary UI
component library for grids and interactive filters. The integration uses:

- **Importmap + Propshaft** to serve assets without a bundler, preserving ADR-0009.
- **Stimulus `ej2-grid-controller`** as the third-party UI adapter, keeping EJ2
  as a replaceable presentation concern.
- **`GridEngine::SyncfusionAdapter`** as the server-side JSON serializer,
  compatible with the EJ2 Custom Data Binding protocol (`{ result:, count: }`).
- **Fluent2 theme** overridden through the NomoTect design tokens CSS custom
  properties, preserving ADR-0011 and ADR-0012.
- **`TabulatorAdapter` retained** as the mandatory accessible HTML fallback
  required by `docs/grid/architecture.md` and served via `<noscript>` and the
  existing HTML response path.

The Syncfusion license key is managed exclusively through the environment
variable `SYNCFUSION_LICENSE_KEY` and is never committed to source control.

First-iteration packages: `ej2-base`, `ej2-data`, `ej2-grids`, `ej2-inputs`,
`ej2-dropdowns`, `ej2-calendars`, `ej2-buttons`, `ej2-popups`.

Assets are extracted selectively from the offline zip into `vendor/javascript/syncfusion/`
(ESM JS) and `vendor/assets/syncfusion/` (CSS themes) using `bin/extract_syncfusion_assets`.
The zip itself is not committed; it is excluded via `.gitignore`.

## Consequences

- A commercial Syncfusion license is required for production. The 7-day trial
  key must be replaced before any merge to `main`.
- The HTML/Turbo fallback is preserved for accessibility, automated tests,
  printing, and graceful degradation without JavaScript.
- `GridEngine` retains its internal versioned JSON API; the frontend adapter is
  replaceable without touching the query pipeline.
- Repository intelligence artifacts (`AI_CONTEXT.md`, `architecture.md`) must be
  regenerated via `generate_artifacts` after implementation lands, because the
  contexts validator already reports stale artifacts at the time of this ADR.
- ADR-0009 remains valid: EJ2 is a third-party UI adapter wired through Stimulus;
  it does not replace Importmap or Turbo as the central JS stack.
- Expanding to additional EJ2 packages (Scheduler, Kanban, TreeGrid) does not
  require a new ADR — only `importmap.rb`, `vendor/` updates, and a `CHANGELOG.md`
  entry.

## References

- [ADR-0009 — JavaScript Strategy](0009-javascript-strategy.md)
- [ADR-0011 — CSS Strategy](0011-css-strategy.md)
- [ADR-0012 — Design Token Architecture](0012-design-token-architecture.md)
- [Grid Architecture](../grid/architecture.md)
- [Syncfusion EJ2 Documentation](https://ej2.syncfusion.com/javascript/documentation/introduction)
