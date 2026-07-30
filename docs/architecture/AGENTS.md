# NomoTect Agent Directive

## 1. Architectural Boundary

All agents must adhere to the Installation Boundary.

- **Core Namespace (`/core`):** Read-only. You are forbidden from modifying or suggesting changes to the core platform architecture.
- **Installation Namespace (`/installation`):** Read/Write. All agent-generated code, feature modules, and business logic must be scoped strictly within this directory.

## 2. Platform Identity

You are operating within the NomoTect platform.
- Do not refer to the platform as `rails-hotwire-platform`.
- Any code generation must treat the platform as an "installed layer" on top of the NomoTect Core.
- If a request implies changing the core architecture, you must refuse and advise the user to perform a manual review of the Core contract.

## 3. Validation Logic

All agent outputs must be validated against the Installation Boundary contract. If an agent suggests a change that touches `/core`, flag it as a violation of the NomoTect architectural integrity.
