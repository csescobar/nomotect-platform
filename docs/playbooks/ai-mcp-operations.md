# Engineering Playbook: AI Operations and MCP Integration

This playbook defines operational standards, communication protocols, and governance rules for AI agent interaction with the **NomoTect** codebase. It implements `AI_PRINCIPLES.md` and `AGENTS.md`, serving as instructions for developers integrating AI and for autonomous agents operating directly on the repository.

The operational motto is: **"AI-native, human-governed, local-first."**

---

## 1. "MCP-First" Philosophy and Context Architecture

NomoTect is engineered natively for AI. The codebase is structured to provide deterministic, structured, noise-free context to LLMs.

* **Repository Intelligence:** Instead of relying on proprietary indexers or third-party tools, NomoTect uses native scanning to generate metadata in a local SQLite store.
* **Model Context Protocol (MCP):** The platform exposes a read-only MCP server allowing intelligent agents to query structure, dependency graphs, and module boundaries in a safe, standardized manner.

---

## 2. Setup and Initialization (Bootstrap)

Before an AI agent interacts with the repository, it must complete the certified initialization workflow.

### Native MCP Server
Start the server locally using the repository CLI:

```bash
ruby bin/repository-intelligence mcp
```

* **Communication:** Standard Input/Output (`stdio`).
* **Security:** Operates strictly **read-only by default**. Agents consume architectural context, read documentation, schemas, and contracts, while code changes occur via isolated filesystem write operations (validated by CI).

### Antigravity CLI (`agy`) Integration
The recommended tool for local agent coupling is **Antigravity CLI (`agy`)**.
1. The developer configures the local `agy` manifest to target the NomoTect MCP binary.
2. The agent inherits local governance rules and native instructions prior to taking action.

---

## 3. Branch and Pull Request Workflow for Agents

Agents MUST follow the lifecycle defined in `AGENTS.md`:

1. **Never commit directly to `main`.**
2. **Focused Branch Naming:**
   * AI-generated branches MUST use the `agent/` prefix.
   * *Example:* `agent/auth-tenant-scoping-fix`
3. **Repository Language:** All AI-generated content (commit messages, code comments, documentation, PR discussions) MUST be written in **English** (en).
4. **Draft Pull Request:**
   * Open PRs in **Draft** mode by default.
   * Transition to "Ready for Review" ONLY after completing automated verification and writing the Completion Report.

---

## 4. Context Discovery and Contribution Boundaries

Before modifying a platform module, agents MUST perform self-discovery:

### Step-by-Step Discovery Protocol:
1. **Read Module `AI_CONTEXT.md`:** Inspect high-level context, boundaries, and public contracts.
2. **Consult ADRs (Architecture Decision Records):** Understand architectural decisions and historical context.
3. **Identify Contribution Boundaries:** Read `docs/ai/contribution-boundaries.md` to identify allowed modification scope.
4. **Canonical Test Analysis:** Inspect module test files to understand intended behavior and executable contracts.

### Contribution Modes:
* **Platform Contribution:** Edits to shared core (`app/`, `config/`, `lib/`) are restricted and MUST evolve NomoTect foundations while preserving public contracts.
* **Application Development:** Product logic MUST reside strictly under `/application`, consuming platform public contracts without mutating platform internals.

---

## 5. Automated Validation and Quality Gate

No change is eligible for review without passing the local quality gate:

```bash
bin/ci
```

This command validates:
* Unit, integration, and system test suites.
* `repository-intelligence` validators for modular boundary and contract integrity.
* Security and multi-tenant regression suites.
* Markdown, JSON formatting, internal link consistency, and i18n translations.

---

## 6. Agent Completion Report

Upon completing a development cycle, agents MUST record findings in the PR description:

```markdown
### 🤖 Completion Report

* **Branch / Pull Request:** `agent/branch-name`
* **Files & Behavior Changed:** [Detailed list of modified files and added/fixed behavior]
* **Contracts Affected:** [Specify affected module contracts or boundaries]
* **Validation Performed:** [Evidence of successful `bin/ci` execution and test results]
* **Limitations & Follow-up Work:** [Known limitations and suggested follow-up technical tasks]
```

---

## 7. Human Reviewer Guidelines

When reviewing AI-assisted Pull Requests, maintainers MUST verify:
1. **No Feature Creep:** The PR addresses the exact issue without speculative additions.
2. **Zero Hallucinations:** Third-party APIs, constants, or Rails methods exist and are verified.
3. **Boundary Preservation:** Modular boundaries and cyclic dependencies are respected.
4. **Security & Tenant Scoping:** Explicit tenant scoping and authorization are applied before queries or exports.
