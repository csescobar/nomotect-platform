# NomoTect Platform Evolution Roadmap

## Purpose

This roadmap defines the post-`v1.0.0` evolution of the NomoTect Platform.

The foundational roadmap establishes the platform core, design system, domain framework,
enterprise services, multi-tenancy, security and privacy baseline, repository intelligence,
distribution, installation, extensions, operational readiness and stable-release validation.

This roadmap focuses on the next stage of the platform:

- expanding enterprise application capabilities;
- strengthening authorization and governance;
- evolving the design system;
- increasing security assurance and traceable evidence;
- improving auditability and compliance support;
- introducing a governed, tenant-aware AI assistant platform.

The goal is not to add features indiscriminately. Post-1.0 evolution should preserve the
platform's existing architectural principles and continue to favor explicit contracts,
fail-closed behavior, deterministic evidence and repository-native governance.

---

## Traceability Model

Vision → Epics → Capabilities → Modules → Issues → Pull Requests → Releases.

Each implementation issue and pull request should identify:

- the owning epic;
- the capability being advanced;
- affected quality dimensions;
- public contracts;
- security impact;
- required evidence;
- compatibility impact.

---

## Guiding Principles

- Secure by default.
- Fail closed.
- Multi-tenant by design.
- Accessible by default.
- Observable by default.
- Auditable by default.
- Evidence over claims.
- Provider-neutral where practical.
- AI-readable and repository-native.
- Explicit public contracts.
- Backward compatible where practical.
- Least privilege.
- No direct bypass of domain or authorization boundaries.
- Human authority remains explicit for sensitive operations.

---

# Evolution Discovery — Post-1.0 Capability Assessment

**Status:** ✅ Completed

## Objective

Perform a structured capability and gap assessment before committing to the full
post-1.0 implementation sequence.

The discovery phase must identify which capabilities already exist, where current
contracts are insufficient and which proposed improvements provide the highest
strategic value.

## Completed Discovery Artifacts

- [Capability Inventory](discovery/capability-inventory.md)
- [Gap Analysis](discovery/gap-analysis.md)
- [Prioritization Matrix](discovery/prioritization-matrix.md)
- [Discovery Report](discovery/post-1-0-discovery-report.md)

## Assessment Areas

- Identity and authorization.
- Role and permission management.
- Design system coverage.
- Security assurance.
- Common Criteria alignment.
- Audit and evidence integrity.
- Enterprise governance.
- AI assistant capabilities.
- Observability.
- Developer experience.
- Workflow and approvals.
- Performance and scalability.
- Extension ecosystem.
- Federated identity.
- API and integration boundaries.

## Required Outputs

- current capability inventory;
- architecture gap analysis;
- security gap analysis;
- UX and component gap analysis;
- Common Criteria assurance mapping;
- AI capability gap analysis;
- proposed epic boundaries;
- dependency graph;
- prioritization matrix;
- implementation candidates and explicit deferrals.

## Prioritization Model

Candidate capabilities should be evaluated against:

| Dimension | Score |
| --- | --- |
| Strategic value | 1–5 |
| Security impact | 1–5 |
| Enterprise value | 1–5 |
| Developer value | 1–5 |
| Product differentiation | 1–5 |
| Implementation cost | 1–5 |
| Architectural risk | 1–5 |
| Compatibility impact | 1–5 |

Discovery results may refine epic order, scope and dependency boundaries before
implementation begins.

---

# Epic 11 — Identity, Authorization & Access Governance

**Status:** ⏳ Planned

## Objective

Evolve the current membership and role model into a configurable authorization
platform that supports granular, tenant-aware permissions while preserving the
existing multi-tenant security boundary.

## Phase 1 — Persistent RBAC Model

Introduce configurable roles and permissions.

### Core Concepts

- `Role`
- `Permission`
- `RolePermission`
- tenant-scoped role assignment
- configurable application roles
- protected system roles

Example permissions:

```text
customers.read
customers.create
customers.update
customers.delete

members.read
members.invite
members.manage_roles

reports.read
reports.export

audit.read
audit.export
```

## Phase 2 — Permission Registry

Permissions MUST be declared by application/platform code and MUST NOT exist only
as arbitrary database strings.

The registry should define:

- canonical permission identifier;
- owning capability;
- description;
- security classification;
- default availability;
- compatibility/version information.

Database configuration assigns registered permissions but does not define new
platform permissions implicitly.

Unknown permissions MUST fail closed.

## Phase 3 — Permission-Aware Application Behavior

Authorization should be consistently enforced across:

- policies;
- domain operations;
- queries;
- UI elements;
- exports;
- background operations;
- AI tools.

Permission-aware UI behavior MUST never replace server-side authorization.

## Phase 4 — Advanced Policy Context

After the RBAC baseline is stable, evaluate contextual authorization using resource,
tenant and request attributes.

Potential future dimensions include:

- resource ownership;
- data classification;
- environment;
- organizational policy;
- workflow state;
- contextual restrictions.

ABAC or broader policy-based authorization SHOULD NOT be introduced until the
persistent RBAC model and its evidence are stable.

## Security Requirements

- deny by default;
- no implicit privilege escalation;
- tenant-specific removals remain authoritative;
- final-owner protections remain enforced;
- privilege changes are auditable;
- cross-tenant authorization regression tests are mandatory.

---

# Epic 12 — Design System 2.0

**Status:** ⏳ Planned

## Objective

Expand the current design-system foundation into a broader enterprise component
library without weakening accessibility, theming, determinism or public component
contracts.

## Component Families

### Data & Enterprise

- enhanced data table capabilities;
- tree view;
- tree grid;
- timeline;
- activity feed;
- Kanban;
- charts;
- KPI and metric components;
- description lists;
- property/detail grids.

### Navigation

- tabs;
- breadcrumbs;
- pagination;
- stepper;
- command palette;
- context menu;
- advanced sidebar navigation.

### Input

- combobox;
- autocomplete;
- date picker;
- date-range picker;
- time picker;
- file upload;
- tag input;
- multi-select;
- search input.

### Feedback

- toast system;
- skeleton;
- progress indicators;
- empty states;
- tooltip;
- popover;
- status indicators.

### Identity

- avatar;
- avatar group;
- user menu;
- role badge;
- permission indicator.

## Component Definition of Done

A component is not complete merely because it renders.

Each production component should provide:

```text
Component
 ├── Public API contract
 ├── Design tokens
 ├── Light/Dark support
 ├── Accessibility contract
 ├── Keyboard interaction
 ├── i18n behavior
 ├── Responsive behavior
 ├── Hotwire behavior
 ├── Showcase documentation
 ├── Unit tests
 ├── System tests
 └── Repository Intelligence metadata
```

## Quality Requirements

- WCAG-oriented accessible defaults;
- deterministic token integration;
- no implicit framework-specific JavaScript dependency without an explicit contract;
- keyboard and focus behavior tested;
- stable Light/Dark semantics;
- responsive behavior documented;
- component contract changes governed by compatibility policy.

---

# Epic 13 — Security Assurance Engineering

**Status:** ⏳ Planned

## Objective

Create an explicit security-assurance model for the platform and align its security
engineering practices with the current Common Criteria / ISO/IEC 15408 family
without making unsupported certification claims.

The target is alignment and evidence engineering, not automatic certification.

## Phase 1 — Security Scope and Assets

Define:

- evaluated platform scope;
- trusted boundaries;
- protected assets;
- security assumptions;
- threat actors;
- operating environment assumptions.

Potential protected assets include:

- credentials;
- tenant data;
- authorization policy;
- configuration;
- secrets;
- audit records;
- files;
- release and installation evidence;
- AI conversation and tool context where applicable.

## Phase 2 — Threats and Security Objectives

Establish traceability:

```text
Asset
  ↓
Threat
  ↓
Security Objective
  ↓
Requirement
```

Security objectives should cover areas such as:

- authentication;
- authorization;
- tenant isolation;
- audit integrity;
- configuration protection;
- secrets handling;
- secure installation;
- update and recovery;
- supply-chain integrity;
- privacy;
- AI-assisted access boundaries.

## Phase 3 — Common Criteria Mapping

Map appropriate platform controls and assurance activities to the current
Common Criteria / ISO/IEC 15408 structure.

The repository MUST distinguish:

- internal alignment;
- security-functional mapping;
- assurance evidence;
- formal external certification.

Documentation MUST NOT claim Common Criteria certification unless an applicable
external evaluation has completed.

## Phase 4 — Security Evidence Contracts

Each security control should support traceability from requirement to executable
evidence.

Example:

```text
Threat
  ↓
Security Objective
  ↓
Security Requirement
  ↓
Architecture Decision
  ↓
Implementation
  ↓
Test
  ↓
Evidence
```

---

# Epic 14 — Continuous Assurance & Evidence

**Status:** ⏳ Planned

## Objective

Generalize the evidence-oriented engineering practices already established by the
platform into reusable, continuously verifiable assurance capabilities.

## Assurance Control Contract

Introduce a machine-readable assurance-control contract capable of representing:

- control identifier;
- objective;
- implementation ownership;
- related architecture decisions;
- related modules;
- tests;
- evidence artifacts;
- standards mappings;
- freshness requirements;
- required approvals.

Example:

```yaml
id: AUTH-TENANT-001

objective:
  prevent_cross_tenant_access

implementation:
  - app/policies/
  - app/models/concerns/

tests:
  - test/security/tenant_isolation_test.rb

evidence:
  - tenant-isolation-certification.json
```

## Assurance Verification

Provide an executable assurance entry point conceptually equivalent to:

```text
bin/nomotect assurance
```

Potential output:

```text
Authentication              PASS
Authorization               PASS
Tenant Isolation            PASS
Audit Integrity             PASS
Secure Configuration        PASS
Secrets                     PASS
Privacy                     PASS
Dependencies                PASS
Supply Chain                PASS
Backup & Recovery           PASS
Accessibility               PASS
```

A `PASS` result MUST be supported by current evidence rather than static declarations.

## Evidence Graph

Repository Intelligence should be able to trace:

```text
Requirement
  ↓
Security Objective
  ↓
Architecture
  ↓
Implementation
  ↓
Tests
  ↓
Evidence
  ↓
Release
```

## Evidence Freshness

Evidence SHOULD include:

- source commit;
- generation timestamp;
- contract version;
- implementation references;
- test references;
- checksum or digest where appropriate;
- expiry or freshness rules;
- environment metadata when relevant.

Missing or stale mandatory evidence MUST fail closed.

---

# Epic 15 — Governance & Audit Platform

**Status:** ⏳ Planned

## Objective

Expand the platform's governance and audit capabilities into reusable enterprise
controls while improving integrity, policy management and evidence export.

## Phase 1 — Administrative Governance

Evaluate reusable policy capabilities for:

- organization settings;
- security policies;
- session policies;
- authentication policies;
- data-retention policies;
- audit-retention policies;
- export policies;
- file policies;
- integration policies;
- AI policies.

## Phase 2 — Audit Event Taxonomy

Standardize audit-event families such as:

```text
identity.*
authorization.*
tenant.*
data.*
configuration.*
security.*
integration.*
ai.*
system.*
```

Audit records should capture appropriate context including:

- actor;
- organization;
- action;
- target;
- correlation/request identifiers;
- result;
- timestamp;
- channel/source;
- relevant before/after state where safe.

## Phase 3 — Tamper-Evident Audit

Evaluate tamper-evident audit mechanisms that make unauthorized modification
detectable.

Potential mechanisms include:

- canonical event payloads;
- event digests;
- chained previous-event digests;
- HMAC or signing where justified;
- periodic integrity checkpoints;
- externally stored verification evidence.

Tamper-evident MUST NOT be described as tamper-proof.

A stronger model may use:

```text
Audit Event
   ├── canonical payload
   ├── previous digest
   ├── event digest
   └── timestamp
           ↓
     Integrity checkpoint
           ↓
     External evidence
```

## Phase 4 — Audit Evidence Export

Provide deterministic evidence exports containing, where appropriate:

```text
audit-evidence/
 ├── events.json
 ├── manifest.json
 ├── checksums.txt
 ├── metadata.json
 └── provenance/
```

Export behavior must respect:

- tenant isolation;
- permissions;
- privacy;
- retention policies;
- redaction requirements.

---

# Epic 16 — AI Assistant Platform

**Status:** ⏳ Planned

## Objective

Provide NomoTect applications with a secure, tenant-aware and provider-neutral
conversational AI assistant that operates through existing application capabilities
and never exceeds the authenticated user's authority.

The initial scope is an assistant used by application users.

Engineering-agent governance for Codex, Antigravity, OpenCode or similar development
agents is explicitly out of scope for the initial epic.

## Core Principles

- AI operates with the current user's authority.
- AI never bypasses application authorization.
- AI never bypasses tenant boundaries.
- AI never accesses the database directly.
- Application capabilities are exposed through controlled tools.
- Read-only behavior is preferred by default.
- Mutating actions require explicit policy and confirmation where configured.
- AI providers remain replaceable.
- AI activity is observable and auditable.
- Conversation data follows explicit privacy and retention policies.
- Secrets and credentials are never exposed to the model.
- MCP is the preferred interaction boundary between the assistant runtime and
  application capabilities.
- Skills define reusable procedures; tools define atomic executable capabilities.

---

## Phase 1 — Provider-Neutral AI Runtime

Create the foundational runtime for:

- provider abstraction;
- model resolution;
- streaming responses;
- structured output where supported;
- tool-use capability detection;
- usage accounting;
- error normalization;
- provider health reporting.

Application code SHOULD depend on a NomoTect AI abstraction rather than a
provider-specific client.

### Tenant-Resolvable Configuration Requirement

AI runtime configuration MUST be tenant-resolvable and provider-neutral.

The initial implementation MAY resolve all tenants to the platform default
configuration.

Conceptual flow:

```text
AI Request
    ↓
Current Organization
    ↓
AI Configuration Resolver
    ↓
Resolved Configuration
    ├── provider
    ├── model
    ├── capability metadata
    ├── usage limits
    └── credential reference
    ↓
Provider Adapter
```

The initial release does not require provider or model customization per tenant.

Future evolution may introduce:

- provider per tenant;
- model per tenant;
- Bring Your Own Key (BYOK);
- tenant-specific budgets;
- provider allowlists;
- data-governance restrictions;
- fail-closed tenant AI policies.

The architecture MUST NOT assume that one global provider/model will always serve
all tenants.

---

## Phase 2 — MCP Application Gateway

Use MCP as the assistant-facing boundary for application context and capabilities.

Conceptual architecture:

```text
User
  ↓
AI Assistant
  ↓
LLM
  ↓
MCP Client
  ↓
NomoTect MCP Application Gateway
  ├── Resources
  ├── Tools
  └── Prompts / Skill exposure
  ↓
Application Capabilities
  ↓
Authorization / Tenant / Domain
```

MCP does not replace the domain layer.

MCP tools MUST adapt existing application operations and queries rather than access
Active Record models directly.

Required properties:

- current-user propagation;
- current-tenant propagation;
- authorization enforcement;
- tool input validation;
- output minimization;
- audit integration;
- read-only baseline.

---

## Phase 3 — MCP Resources

Expose safe contextual resources such as:

```text
nomotect://current-user
nomotect://current-organization
nomotect://current-context
nomotect://current-resource
nomotect://application
nomotect://permissions
```

Resources should expose only context required by the assistant.

Potential contextual data includes:

- authenticated user identity;
- current organization;
- locale;
- current application route/resource;
- safe resource metadata;
- available permissions;
- relevant application metadata.

Resources MUST respect:

- tenant isolation;
- data minimization;
- current-user authorization;
- privacy policies.

---

## Phase 4 — Governed MCP Tools

Introduce a tool registry representing atomic application capabilities.

Examples:

```text
customers.search
customers.show
customers.create
customers.update

contracts.search
contracts.show

tickets.search
tickets.create

reports.generate
```

Tools should be backed by existing application capabilities.

Preferred flow:

```text
LLM
 ↓
MCP Tool
 ↓
Application Query / Operation
 ↓
Authorization Policy
 ↓
Tenant Boundary
 ↓
Domain
```

Direct database access from AI tools is prohibited.

### Tool Metadata

Tools should support metadata such as:

```yaml
name: customers.update

permission:
  customers.update

risk:
  write

confirmation:
  required

tenant_scoped:
  true
```

The server, not the model, is authoritative for permission decisions.

---

## Phase 5 — Skills Framework

Introduce reusable application procedures using a `SKILL.md`-style contract.

Skills define how the assistant should perform a task using one or more available
tools.

Tools answer:

> What can the assistant execute?

Skills answer:

> How should the assistant perform a specific task?

Conceptual relationship:

```text
Skill
  ↓ uses
Tools
  ↓ execute
Application Capabilities
```

### Skill Structure

Example:

```text
skills/
├── customer-renewal-analysis/
│   ├── SKILL.md
│   └── references/
│
├── ticket-triage/
│   └── SKILL.md
│
└── compliance-summary/
    ├── SKILL.md
    └── references/
```

A skill contract may declare:

- name;
- description;
- instructions;
- required tools;
- required permissions;
- read/write classification;
- confirmation requirements;
- references;
- output expectations;
- version.

Example:

```yaml
name: customer-renewal-analysis

permissions:
  - customers.read
  - contracts.read

tools:
  - customers.search
  - contracts.search
```

Skills MUST NOT bypass tool-level authorization.

A skill may be unavailable when the current user does not possess required
permissions.

### Platform and Application Skills

Two levels should be supported:

#### Platform Skills

Reusable capabilities provided by NomoTect, for example:

- summarize-record;
- explain-current-page;
- search-audit;
- analyze-activity;
- generate-report.

#### Application Skills

Domain-specific skills defined by applications built on NomoTect.

Examples:

```text
resident-ticket-triage
contract-renewal-analysis
risk-assessment-summary
compliance-evidence-review
```

---

## Phase 6 — Governed AI Actions

After the read-only baseline is stable, allow explicitly registered mutating tools.

Example:

```text
User request
    ↓
Skill / Tool selection
    ↓
Validate arguments
    ↓
Authorize current user
    ↓
Confirmation policy
    ↓
Domain operation
    ↓
Audit
    ↓
Result
```

Initial policy categories may be intentionally simple:

```text
Read
  → automatic

Low-risk write
  → confirmation required

Sensitive write
  → explicit restrictive policy

Critical operation
  → unavailable to AI
```

Examples:

```text
customers.read             AUTO
customers.create           CONFIRM
customers.update           CONFIRM
customers.delete           DENY
roles.manage               DENY
security.settings.update   DENY
```

The initial epic does not require a generalized autonomous-agent risk engine.

---

## Phase 7 — AI Assistant User Interface

Provide a reusable assistant experience in the NomoTect Design System.

Potential capabilities:

- assistant side panel;
- streaming responses;
- conversation list/history;
- context awareness;
- current-page awareness;
- referenced resources;
- tool execution status;
- action confirmation;
- skill discovery;
- retry and failure states;
- mobile/responsive behavior;
- keyboard accessibility.

The assistant may receive safe page context such as:

```text
current_resource:
  type: Customer
  id: 123
```

This enables contextual requests such as:

> Summarize this customer.

without requiring the user to restate the current resource.

---

## Phase 8 — Usage, Governance & Assurance

Introduce operational governance around AI use.

### Usage

Track appropriate metadata including:

- organization;
- user;
- provider;
- model;
- input/output usage;
- duration;
- tool calls;
- skill executions;
- errors;
- estimated cost where available.

### Configuration

Potential platform controls:

- AI enabled/disabled;
- allowed providers;
- allowed models;
- request limits;
- usage budgets;
- conversation retention;
- enabled tools;
- enabled skills.

### Conversation History vs Audit

Conversation history and audit evidence MUST remain separate concepts.

Conversation history may contain:

```text
User: list overdue contracts
Assistant: I found 15...
```

and be governed by retention/privacy policy.

Audit records should capture operational facts such as:

```text
actor: current-user
channel: ai_assistant
action: contracts.search
organization: current-organization
decision: allowed
result: success
```

When an AI-mediated write succeeds, the authenticated user remains the actor while
the channel identifies AI mediation.

Example:

```text
Action: ticket.created
Actor: current user
Channel: ai_assistant
```

### Privacy

AI governance must address:

- conversation retention;
- data minimization;
- provider disclosure;
- sensitive-data handling;
- tenant-specific policy compatibility;
- redaction;
- export/deletion where applicable.

### Assurance

AI assurance evidence should include:

- authorization tests;
- tenant-isolation tests;
- tool schema validation;
- denied-operation tests;
- prompt/tool injection resistance where practical;
- secret exposure prevention;
- provider failure handling;
- audit evidence;
- retention-policy behavior.

---

# Candidate Evolution Areas

The following areas remain candidates for future epics and are not committed by
this roadmap until discovery and prioritization are complete:

- Advanced Observability.
- Workflow & Approval Engine 2.0.
- Performance & Scalability.
- Developer Experience & Generators.
- Extension Ecosystem.
- Extension Marketplace.
- External Identity Providers.
- SSO / OIDC / SAML.
- WebAuthn / Passkeys.
- API Platform.
- Data Classification.
- Advanced Backup.
- Disaster Recovery.
- Additional secret-store providers.
- Tenant-specific AI providers and models.
- Bring Your Own AI Key.
- AI data-residency and provider-policy controls.

---

# Initial Dependency Order

The initial expected dependency direction is:

```text
Evolution Discovery
        ↓
Epic 11 — Identity, Authorization & Access Governance
        ↓
Epic 12 — Design System 2.0

Epic 11
   └──────────────┐
                  ▼
Epic 13 — Security Assurance Engineering
                  ↓
Epic 14 — Continuous Assurance & Evidence
                  ↓
Epic 15 — Governance & Audit Platform
                  ↓
Epic 16 — AI Assistant Platform
```

Parallel delivery may be allowed where contracts and dependencies are explicit.

Epic 16 should consume, rather than reimplement:

- authorization from Epic 11;
- UI primitives from Epic 12;
- assurance concepts from Epic 13;
- evidence infrastructure from Epic 14;
- audit and governance from Epic 15.

---

# Evolution Vision

The post-1.0 evolution should move NomoTect from:

```text
Enterprise Application Framework
```

toward:

```text
Evidence-Driven Engineering Platform
for Secure Enterprise Applications
```

The platform should increasingly connect:

```text
Feature
  ↓
Policy
  ↓
Authorization
  ↓
Implementation
  ↓
Test
  ↓
Audit
  ↓
Evidence
```

AI capabilities should follow the same architecture rather than creating a parallel
security model.

For the AI assistant specifically:

```text
Context via MCP Resources
          ↓
Capability via MCP Tools
          ↓
Expertise via Skills
          ↓
Authorization / Tenant / Domain
          ↓
Audit and Evidence
```

This roadmap intentionally favors a small number of coherent, evidence-backed
platform capabilities over broad feature accumulation.
