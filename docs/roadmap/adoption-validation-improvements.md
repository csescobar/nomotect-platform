# Adoption Validation Improvement Roadmap

## Status

Planned. This document is intentionally independent from the authoritative Epic
roadmap and does not change Epic 10 phase status or sequencing.

## Purpose

Turn the findings from the first independent Service Desk Lite adoption pilot
into a focused improvement program before a second unfamiliar contributor or AI
agent attempts the same journey.

The first pilot proved that a useful multi-tenant application can be built on
NomoTect, but it also exposed gaps in MCP onboarding, repository-native
discovery, shared-contract guidance, evidence integrity, extension and file
validation, browser coverage, Grid Engine presentation and page-level component
composition.

## Evidence source

The initial evidence comes from the independent pilot repository:

- repository: `csescobar/nomotect-pilot-project`;
- branch: `agent/manual-adoption-validation`;
- application: Service Desk Lite;
- automated outcome: `PASSED_WITH_FINDINGS`;
- operator-observed outcome: core functional journeys passed locally;
- manual screen-reader review remains pending;
- visual findings were observed by the operator but were not supplied to the
  pilot agent and therefore are not yet represented in its evidence catalog.

This roadmap treats the pilot as discovery evidence. Pilot claims must not be
copied into NomoTect certification without same-commit, reproducible evidence.

## Improvement principles

1. **MCP before broad repository reading.** An AI agent must establish and prove
   Repository Intelligence access before it performs general code discovery.
2. **Restart is an explicit operator gate.** Writing a client configuration does
   not make MCP available to an already-running assistant process.
3. **Usage evidence over configuration claims.** A valid `.mcp.json` is not
   sufficient; the agent must list and invoke MCP resources and tools.
4. **Read-only by default.** MCP configuration must never grant repository writes
   unless the operator explicitly opts in.
5. **No silent fallback.** If MCP cannot be loaded after restart, the adoption
   journey is blocked or downgraded and the reason is recorded.
6. **Public contracts before shared-core edits.** Application work should use
   documented registration points and extensions before modifying cross-cutting
   platform files.
7. **Executable evidence.** Security, isolation, attachments, extensions,
   performance and AI-readiness claims require reproducible tests or reports.
8. **Human evidence stays human.** Screen-reader, visual-quality and provider
   observations are recorded separately from automated certification.
9. **Findings improve the platform.** A failed or blocked journey is valid
   evidence and must not be rewritten into a passing claim.

## Finding inventory

| ID | Finding | Initial classification | Target workstream |
| --- | --- | --- | --- |
| AV-001 | `pg_isready` dependency is not discovered cleanly during setup | Low / usability | Onboarding |
| AV-002 | Repository Intelligence regeneration is learned after stale-artifact failure | Documentation | Onboarding |
| AV-003 | Grid documentation references `:enum` while the registry accepts other types | Documentation / contract drift | Grid Engine |
| AV-004 | Notification jobs require explicit recipient membership and role validation | High / security | Tenant safety |
| AV-005 | An apparent extension can bypass the actual discovery and lifecycle runtime | Medium / contract evidence | Extensions |
| AV-006 | Attachment claims require controller, policy and cross-tenant download evidence | High / security | Files |
| AV-007 | Performance claims lacked a reproducible benchmark and declared fixture | Medium / evidence | Performance |
| AV-008 | MCP configuration used a developer-specific path and enabled writes by default | High / security and AI readiness | MCP-first bootstrap |
| AV-009 | Configuring MCP inside an active assistant session did not make the assistant use it | High / AI readiness | MCP-first bootstrap |
| AV-010 | Evidence declared zero undocumented steps while the journal recorded several | High / evidence integrity | Certification |
| AV-011 | Shared authorization, membership and grid files were changed without sufficiently clear boundary guidance | Medium / governance | Public contracts |
| AV-012 | RackTest was described as browser-level system coverage | Medium / evidence integrity | Browser certification |
| AV-013 | Grid presentation is functionally usable but below enterprise UX expectations | Medium / usability | Grid UX |
| AV-014 | Form, detail, lifecycle, assignment and audit compositions lack production-ready page patterns | Medium / usability | Design System |
| AV-015 | Pilot UI retained the legacy Rails Hotwire Platform identity | Low / identity | Application shell |
| AV-016 | Visual findings were not available to the pilot agent and were absent from its reports | Documentation / evidence | Revalidation |

## Phase 0 — Application Starter and MCP-first agent bootstrap

### Objective

Publish a product-ready Application Starter and make MCP configuration, process
restart and verified Repository Intelligence use a mandatory precondition for
AI-assisted repository discovery. Product teams adopt the generated starter;
they do not clone the NomoTect development repository.

### Application Starter distribution

The NomoTect development repository remains the contributor surface. CI must
generate a separate, versioned Application Starter from a declarative allowlist
so platform history and institutional material cannot drift into adopted
products. A manually maintained copy of the application tree is prohibited.

Each release must provide:

- `nomotect-starter-vX.Y.Z.tar.gz` for Linux and macOS;
- `nomotect-starter-vX.Y.Z.zip` for Windows;
- `SHA256SUMS` and a machine-readable starter manifest;
- a shared Ruby initializer with thin POSIX and PowerShell launchers;
- provenance containing the NomoTect version and source commit without retaining
  the platform repository's Git history.

The starter must preserve runtime, governance, security, accessibility, i18n,
upgrade, Repository Intelligence and MCP contracts. It must exclude NomoTect
roadmaps, historical change fragments, platform marketing, contributor-only
release workflows and other institutional material that does not belong to the
new product.

Initialization collects product name, organization and repository identity,
creates product-owned metadata and starts a new changelog lineage. It must not
perform a global replacement of the NomoTect name because platform provenance,
compatibility identifiers, licensing and technical contracts remain valid.

The starter and initializer are certified on Ubuntu, macOS and Windows. Windows
certification covers ZIP extraction, PowerShell initialization, Git setup and
the Antigravity CLI MCP bootstrap. Full application runtime support on Windows
uses the separately documented Docker Desktop or WSL2 paths unless native
Windows runtime certification is added explicitly.

### Initial certification target

Phase 0 initially targets Antigravity CLI (`agy`). Its workspace-local
configuration is `.agents/mcp_config.json`. Antigravity IDE and all other clients
remain `UNVERIFIED` until their own two-session journey is executed and approved.
Configuration-format similarity is not certification evidence.

### Required bootstrap surface

Provide a minimal, highly discoverable root-level entrypoint that can be read
before general project analysis. It should direct the agent to:

1. inspect only the MCP bootstrap instructions and portable client template;
2. install or verify runtime prerequisites;
3. generate and validate Repository Intelligence artifacts;
4. configure the current AI client with a repository-relative,
   shell-independent stdio command;
5. keep `MCP_ALLOW_WRITES=false`;
6. run an executable local MCP handshake certification;
7. report that client configuration has changed;
8. ask the operator to restart or reload the assistant service;
9. stop and wait rather than continuing with conventional repository reading.

Possible artifacts include:

- `MCP_BOOTSTRAP.md` at the repository root;
- `docs/ai/mcp-setup.md`;
- portable `.agents/mcp_config.json` for Antigravity CLI and a safe generic
  `.mcp.json` fallback;
- `bin/mcp-setup-certify`;
- client-specific examples clearly marked as verified or unverified.

### Two-session protocol

#### Session A — Bootstrap only

The agent may inspect the minimum files required to configure MCP. It must not
perform broad architecture or implementation analysis.

Required outcome:

- portable configuration written or confirmed;
- no absolute developer path;
- no credentials;
- writes disabled;
- protocol harness passes;
- operator receives an explicit restart request;
- agent pauses.

#### Operator gate

The operator restarts or reloads the assistant/client so the MCP server can be
discovered by the new process.

This is a mandatory human action. The agent must not claim that editing a config
file dynamically enabled tools in the current process.

#### Session B — MCP verification before discovery

After restart, the agent must first:

1. list the MCP servers visible to the client;
2. list NomoTect MCP resources;
3. list NomoTect MCP tools;
4. execute at least one repository statistics query;
5. describe at least one module;
6. retrieve at least one public contract or playbook;
7. perform one bounded impact analysis;
8. record tool names, results and failures in machine-readable evidence.

Only after those steps pass may the agent inspect the wider repository and begin
implementation.

### Fail-closed behavior

- If the MCP server is absent after restart, stop and provide troubleshooting.
- If resources or tools cannot be listed, mark MCP onboarding `BLOCKED`.
- If the agent continues without MCP, record a protocol deviation and do not
  claim MCP-assisted adoption.
- If the client cannot reload MCP dynamically, require a new session.
- A shell execution of the MCP server is not proof that the AI client used MCP.

### Exit criteria

- generated Application Starter contains portable setup guidance;
- TAR.GZ and ZIP starters contain equivalent, manifest-approved content;
- initialization creates a product-owned repository without NomoTect's Git
  history or institutional documentation;
- starter initialization and MCP bootstrap are certified on Linux/macOS and
  Windows;
- an unfamiliar operator can configure a supported client;
- assistant restart is explicitly requested and observed;
- the restarted assistant invokes MCP before broad repository reading;
- evidence names the resources and tools actually used;
- read-only enforcement is certified;
- no personal path, credential or implicit write permission exists.

## Phase 1 — Clean-starter onboarding and documentation alignment

### Scope

- document PostgreSQL client prerequisites and Docker-only alternatives;
- make `bin/setup` handle missing `pg_isready` intentionally;
- explain when Repository Intelligence generation is required;
- align Grid Engine examples with the implemented type registry;
- document notification payloads and policy/view integration;
- add a clean-starter adoption checklist and common failure modes.

### Exit criteria

A controlled validation downloads a published Application Starter, initializes
a new private Git repository and completes setup without requiring
implementation-internal discovery or recovery from unexplained failures. This
validation certifies the setup artifacts and harness; it is not the second
independent adoption pilot.

## Phase 2 — Tenant-safe application contracts

### Scope

- publish a reusable recipient-membership validation pattern for jobs;
- certify agent assignment and notification tenant boundaries;
- document safe tenant-first lookup ordering;
- certify attachment association, controller authorization and downloads;
- add adversarial examples for route, identifier, job and export manipulation;
- ensure rejected operations leave no partial idempotency or audit state.

### Exit criteria

Cross-tenant requests, assignments, notifications, attachments and exports fail
closed through documented application-level contracts.

## Phase 3 — Application extension and registration surfaces

### Architecture prerequisite

ADR 0005 establishes `/application` as the product-owned layer and separates it from the first-run `Installation` namespace. Runtime bootstrap and registration surfaces must be reviewed and implemented before the representative application treats this boundary as available.

### Scope

- provide application-owned role registration where feasible;
- provide application-owned Grid Engine registration;
- document policy/view helper integration without undocumented shared-core edits;
- create a continuously tested sample extension using actual discovery,
  compatibility, loading, failure isolation and disablement;
- distinguish community fallback from extension-provided behavior;
- define when a shared-core modification requires architecture review;
- create and certify the `/application` bootstrap, ownership and dependency boundary.

### Exit criteria

A representative application adds roles, grids, policies and one extension
without editing protected internals, or the required review boundary is explicit
before the edit occurs.

### Certification status

Completed. The executable application-layer certification aggregates the
bootstrap, role, authorized-grid, policy/view, community-fallback and extension
preflight contracts without enabling product behavior in the starter defaults.

## Phase 4 — Token integrity and Grid Engine enterprise UX

### Phase 4A — Design-token integrity and theme substitution

Before visual evidence is accepted, certify that the shared design system is
actually controlled by its canonical tokens rather than merely resembling the
default NomoTect theme.

Scope:

- remove public system-theme behavior so the supported selector remains Light
  and Dark only;
- inventory color, typography, spacing, radius, shadow and control-size usage;
- replace unjustified presentation literals with semantic tokens;
- explicitly model fixed-canvas and decorative values that must remain stable
  across Light and Dark;
- reject new stylesheet color literals in CI;
- compile a deliberately different certification palette in tests and prove
  that token substitution changes the generated theme contract;
- review the authenticated shell, installer, Component Showcase, public pages
  and Grid Engine composition against the substituted tokens.

Exit criteria:

The public runtime exposes only Light and Dark, non-generated stylesheets pass
the token-consumption audit, and a certification-token substitution reaches
every representative surface without application-specific CSS repairs.

### Phase 4B — Grid Engine enterprise UX

### Scope

- toolbar with search, filters, export and active-filter indicators;
- typed per-column filter controls;
- visible sort state;
- pagination and result counts;
- saved-view discovery and management;
- column visibility, ordering and width preferences;
- semantic priority and status badges;
- truncation and accessible full-value disclosure;
- row actions and selection patterns;
- loading, empty, error and degraded states;
- responsive behavior and keyboard navigation;
- Light/Dark and bilingual visual certification.

### Exit criteria

The default grid composition is usable without application-specific CSS,
exposes the underlying Grid Engine capabilities and meets accessibility and
responsive-layout thresholds.

## Phase 5 — Design System page compositions

### Scope

Create or improve reusable components and complete page patterns for:

- form fields, textarea, select, help text and error summaries;
- primary/secondary/destructive action groups;
- description lists and metadata panels;
- status and priority badges;
- breadcrumbs and back navigation;
- lifecycle action menus and confirmation dialogs;
- agent/member selection;
- attachment presentation and download;
- localized audit timeline;
- Index, New, Edit and Show page compositions.

Update the Component Showcase with realistic CRUD compositions rather than only
isolated controls.

### Exit criteria

An unfamiliar contributor can assemble coherent CRUD pages from documented
components without raw browser controls, inline styles or application-specific
layout invention.

## Phase 6 — Browser, accessibility and visual evidence

### Scope

- replace RackTest-only browser claims with supported real-browser automation;
- automate the primary Chromium journey;
- classify Firefox and WebKit as automated, manual or unverified accurately;
- certify headings, landmarks, labels, tables, errors and live announcements;
- provide an operator checklist for Orca, NVDA and VoiceOver where applicable;
- record keyboard, focus, Light/Dark and locale observations separately;
- accept operator screenshots as governed evidence when provided;
- ensure screenshots are not inferred or claimed when they were not supplied.

### Exit criteria

Automated and manual evidence are clearly separated, the supported browser
matrix is honest and screen-reader results are attached to a named environment.

## Phase 7 — Reproducible evidence and certification integrity

### Scope

- bind upstream, implementation and evidence-report commits separately;
- prevent stale evidence after follow-up commits;
- require exact commands, exit codes and artifact paths;
- provide deterministic performance fixtures and p50/p95 measurements;
- certify exported row counts and query budgets;
- distinguish local execution from GitHub Actions;
- reject contradictory journal, finding and final-outcome fields;
- forbid the word “published” until an external deployment actually exists.

### Exit criteria

A machine-readable report cannot pass when its narrative, findings, commit
binding or execution evidence contradicts the repository state.

## Phase 8 — Second independent adoption pilot

### Preconditions

Phases 0 through 7 must be merged and certified before the second pilot begins.

Unlike the controlled validation performed during Phases 0 through 7, Phase 8
requires a new unfamiliar contributor or assistant, a new conversation and a new
application repository. Only Phase 8 may claim a second independent adoption
outcome.

### Isolation rules

- use a new repository and new assistant conversation;
- provide no previous handoff or undocumented context;
- begin with the Phase 0 MCP-only bootstrap;
- require the operator restart gate;
- confirm MCP tool use before project discovery;
- use a different bounded application domain;
- do not provide the first pilot’s implementation;
- preserve all failures and friction as evidence.

### Suggested validation

The second pilot should cover:

- installation;
- MCP-assisted discovery;
- domain operations and policies;
- multi-tenancy;
- Grid Engine and export;
- background work;
- files;
- one real extension;
- component-based CRUD UI;
- real-browser automation;
- security, performance and evidence generation;
- manual operator review.

### Exit criteria

- no undocumented context is required;
- MCP is demonstrably used from the start;
- public contracts avoid protected-core modification;
- required automated checks pass;
- human-required checks are accurately pending or approved;
- no unresolved critical or high finding exists;
- final evidence is bound to the exact tested commit.

## Operator responsibilities

| Gate | Operator action |
| --- | --- |
| MCP client reload | Restart or reload the assistant after configuration |
| MCP discovery confirmation | Confirm the restarted session exposes the expected server |
| Visual review | Supply screenshots or record that none were provided |
| Accessibility | Perform the selected screen-reader and visual-focus journeys |
| External deployment | Approve credentials, provider resources and publication |
| Residual risk | Review any eligible finding acceptance |
| Final pilot decision | Approve the evidence meaning, not merely a green command |

## Definition of ready for the next pilot

The next independent pilot may start only when:

- the MCP-first two-session protocol is documented and certified;
- onboarding contradictions are resolved;
- tenant-safe job and file patterns are reusable;
- extension and application registration surfaces are documented;
- Grid Engine and page compositions meet the agreed UX baseline;
- real-browser evidence exists;
- evidence consistency checks are executable;
- all roadmap changes are merged with green CI;
- the operator explicitly authorizes the new pilot.

## Relationship to the authoritative roadmap

This improvement roadmap is a bounded post-pilot workstream. It must remain a
separate document and must not add phases, completion claims or checkboxes to
`docs/roadmap/roadmap.md` or `docs/roadmap/epic-10-plan.md` unless a later
human-approved planning decision explicitly promotes an item.
