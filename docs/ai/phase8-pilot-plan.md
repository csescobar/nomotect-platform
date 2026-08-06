# Phase 8 — Second Independent Adoption Pilot Plan & Protocol

This document defines the execution plan, isolation rules, workspace setup, and operator protocol for **Phase 8: Second Independent Adoption Pilot** as specified in [`docs/roadmap/adoption-validation-improvements.md`](../roadmap/adoption-validation-improvements.md).

## Objectives

Phase 8 validates that an unfamiliar developer or AI assistant, starting in a fresh workspace with zero institutional knowledge or previous handoff context, can clone the NomoTect template platform, re-bind to a **brand-new application repository**, configure MCP tools, and build a fully functional, tenant-safe application under `/application`.

---

## Workspace Setup & New Repository Workflow

1. **Clean Directory Initialization:**
   - The pilot must be executed in a **completely new, empty directory**.
   - Clone the starter platform template:
     ```bash
     mkdir -p ~/Projects/nomotect-pilot-app
     cd ~/Projects/nomotect-pilot-app
     git clone https://github.com/csescobar/nomotect-platform.git .
     ```

2. **New Remote Repository Re-binding:**
   - Do **NOT** commit or push to `csescobar/nomotect-platform`.
   - Create a **NEW application repository** on GitHub (e.g. via `gh repo create` or GitHub web UI):
     ```bash
     gh repo create nomotect-second-pilot-app --private --source=. --remote=origin --push
     ```
     *(Or update origin URL manually: `git remote set-url origin <new-repo-url>` and `git push -u origin main`)*.

3. **Branch Hygiene on New Repository:**
   - Base branch is `main` on the **NEW repository**.
   - Development occurs exclusively on a focused feature branch: `agent/phase8-independent-pilot`.
   - No direct commits to `main`.
   - Submit a Draft Pull Request (`gh pr create --draft`) targeting `main` on the NEW repository only after full validation.

---

## Isolation & Protocol Rules

1. **Clean Session & Workspace:**
   - The pilot must be executed in a **new assistant conversation**.
   - No prior conversation history, prompt snippets, or handoffs are provided.

2. **Two-Session MCP Protocol:**
   - **Session A (Bootstrap):** The assistant verifies repository remote binding, inspects MCP configuration rules, runs `bin/mcp-setup-certify`, requests operator restart, and pauses.
   - **Operator Gate:** The human operator reloads/restarts the assistant client.
   - **Session B (Discovery & Development):** The restarted assistant lists MCP tools (`nomotect-repository-intelligence`, `gitnexus`, `codebase-memory-mcp`, `context7`), runs repository intelligence queries, and confirms tool access *before* reading arbitrary codebase files.

3. **Application Domain Boundary:**
   - All domain logic, models, controllers, and components belong strictly under `/application`.
   - Protected platform internals (`app/`, `lib/`, `config/`, `docs/ai/`) must not be edited unless an architectural review boundary is explicitly triggered.

4. **Required Capability Verification:**
   - Domain operations & tenant isolation policies.
   - Component-based CRUD pages using NomoTect Design Tokens.
   - Data Grid Engine integration.
   - Async background jobs with tenant-safe membership checks.
   - File attachment handling & downloads.
   - One custom extension using `/application` registration surfaces.
   - Real-browser automated system test suite (`bin/rails test:system`).
   - Machine-readable readiness and evidence reports (`bin/release-contract-certify`).

---

## Operator Guide for Starting Phase 8

### Portuguese Instructions / Instruções em Português

1. **Configurar Diretório Zerado e Novo Repositório:**
   ```bash
   mkdir -p ~/Projects/nomotect-pilot-app
   cd ~/Projects/nomotect-pilot-app
   git clone https://github.com/csescobar/nomotect-platform.git .
   gh repo create nomotect-second-pilot-app --private --source=. --remote=origin --push
   ```

2. **Abrir uma nova janela de conversa** no assistente apontando para `~/Projects/nomotect-pilot-app`.

3. **Prompt da Sessão A (Configuração, Novo Repositório & Restart Gate):**
   ```text
   Você é um engenheiro de software especialista assumindo este repositório recém-clonado em um diretório zerado como um assistente de IA totalmente novo, sem nenhum contexto anterior.

   Estamos iniciando a FASE 8 — Segundo Piloto Independente de Adoção do NomoTect.

   Diretrizes Obrigatórias da Sessão A (Protocolo de Duas Sessões - Fase 0):
   1. Confirme que o repositório remoto `origin` está apontando para o NOVO repositório da aplicação (não para nomotect-platform).
   2. Verifique se a branch base é `main` e crie a branch de trabalho `agent/phase8-independent-pilot`.
   3. Execute o comando `bin/mcp-setup-certify` para verificar e certificar as configurações dos servidores MCP.
   4. Garanta que o arquivo de configuração MCP esteja limpo (sem caminhos absolutos locais nem credenciais).
   5. Solicite explicitamente que o operador (eu) reinicie/recarregue esta sessão do assistente.
   6. PAUSE imediatamente após fazer a solicitação de reinicialização.
   ```

4. **Prompt da Sessão B (Descoberta MCP, Desenvolviemnto & Draft PR no Novo Repositório):**
   ```text
   Sessão reiniciada com sucesso na branch `agent/phase8-independent-pilot` do NOVO repositório!

   Diretrizes Obrigatórias da Sessão B (Descoberta MCP + Implementação + Draft PR):
   1. DESCOBERTA MCP OBRIGATÓRIA:
      - Consulte as ferramentas MCP ativas (`nomotect-repository-intelligence`, `gitnexus`, `codebase-memory-mcp`, `context7`) antes de inspecionar arquivos arbitrariamente.
   2. ESCOPO DA APLICAÇÃO (/application):
      - Construa o módulo de aplicação em `/application` (ex: `ProjectManagement`).
      - Implemente isolamento por Tenant, UI com NomoTect Design Tokens / EJ2, Data Grid, Jobs em background e anexos.
      - Construa a suíte de system tests automatizados em navegador real (`bin/rails test:system`).
   3. VALIDAÇÃO & DRAFT PR NO NOVO REPOSITÓRIO:
      - Siga o TDD (testes primeiro) e rode o pipeline `bin/ci` até obter 100% de aprovação.
      - Solicite aprovação do operador para comitar na branch `agent/phase8-independent-pilot` e abrir o Draft PR direcionado para a `main` DO NOVO REPOSITÓRIO via `gh pr create --draft`.
   ```

---

### English Instructions

1. **Setup Clean Directory & New Repository:**
   ```bash
   mkdir -p ~/Projects/nomotect-pilot-app
   cd ~/Projects/nomotect-pilot-app
   git clone https://github.com/csescobar/nomotect-platform.git .
   gh repo create nomotect-second-pilot-app --private --source=. --remote=origin --push
   ```

2. **Open a new conversation window** in your AI assistant pointing to `~/Projects/nomotect-pilot-app`.

3. **Session A Prompt (Setup, New Repo Binding & Reload Gate):**
   ```text
   You are an expert software engineer taking over this newly-cloned repository in a clean directory as a completely fresh AI assistant with zero prior context or history.

   We are launching PHASE 8 — Second Independent Adoption Pilot of NomoTect.

   Mandatory Session A Guidelines (Two-Session MCP Protocol - Phase 0):
   1. Confirm that the remote origin points to the NEW application repository (NOT nomotect-platform).
   2. Verify the base branch is `main` and create a dedicated work branch named `agent/phase8-independent-pilot`.
   3. Run `bin/mcp-setup-certify` to verify and certify the MCP server configuration.
   4. Ensure the MCP configuration file is clean (no local absolute paths or credentials).
   5. Explicitly request that the operator (me) reload/restart this assistant session.
   6. PAUSE immediately after making the reload request.
   ```

4. **Session B Prompt (MCP Discovery, Application & Draft PR on New Repo):**
   ```text
   Session successfully restarted on branch `agent/phase8-independent-pilot` of the NEW repository!

   Mandatory Session B Guidelines (MCP Discovery + Implementation + Draft PR):

   1. MANDATORY MCP DISCOVERY:
      - Before reading arbitrary codebase files or editing code, query the active MCP tools:
        * `nomotect-repository-intelligence` to inspect platform statistics and playbooks.
        * `gitnexus` and `codebase-memory-mcp` to map dependencies and public contracts.
        * `context7` if library documentation lookup is required.
      - Record which MCP tools were queried.

   2. APPLICATION DOMAIN SCOPE (/application):
      - Build a new domain application under `/application` (e.g. `ProjectManagement`).
      - Keep all domain logic strictly inside `/application` without modifying protected platform core files (`app/`, `lib/`, `config/`).
      - Requirements: Tenant-isolated data models and policies, CRUD UI built with NomoTect Design Tokens and EJ2 components (Forms, Buttons, Cards, Modals, Data Grid), tenant-scoped background jobs, and file attachment handling.
      - Build a real-browser automated system test suite (`bin/rails test:system`).

   3. VALIDATION & DRAFT PR SUBMISSION ON NEW REPOSITORY:
      - Follow strict TDD (tests first) and run `bin/ci` until 100% green.
      - Ask for operator approval before committing on `agent/phase8-independent-pilot` and opening a Draft PR targeting `main` ON THE NEW REPOSITORY via `gh pr create --draft`.
   ```
