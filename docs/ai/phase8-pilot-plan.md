# Phase 8 — Second Independent Adoption Pilot Plan & Protocol

This document defines the execution plan, isolation rules, workspace setup, and operator protocol for **Phase 8: Second Independent Adoption Pilot** as specified in [`docs/roadmap/adoption-validation-improvements.md`](../roadmap/adoption-validation-improvements.md).

## Objectives

Phase 8 validates that an unfamiliar developer or AI assistant, starting in a fresh workspace with zero institutional knowledge or previous handoff context, can clone the NomoTect repository, configure MCP tools, and build a fully functional, tenant-safe application under `/application`.

---

## Workspace Setup & Git Workflow

1. **Clean Directory Initialization:**
   - The pilot must be executed in a **completely new, empty directory**.
   - Clone the platform repository:
     ```bash
     git clone https://github.com/csescobar/nomotect-platform.git nomotect-pilot-app
     cd nomotect-pilot-app
     ```

2. **Branch Hygiene:**
   - Base branch must be `main`.
   - Development occurs exclusively on a focused feature branch: `agent/phase8-independent-pilot`.
   - No direct commits to `main`.
   - Submit a Draft Pull Request (`gh pr create --draft`) targeting `main` only after full validation.

---

## Isolation & Protocol Rules

1. **Clean Session & Workspace:**
   - The pilot must be executed in a **new assistant conversation**.
   - No prior conversation history, prompt snippets, or handoffs are provided.

2. **Two-Session MCP Protocol:**
   - **Session A (Bootstrap):** The assistant inspects only MCP configuration rules, runs `bin/mcp-setup-certify`, requests operator restart, and pauses.
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

To launch Phase 8 in a new clean session:

1. **Setup Clean Directory:**
   ```bash
   mkdir -p ~/Projects/nomotect-pilot-app
   cd ~/Projects/nomotect-pilot-app
   git clone https://github.com/csescobar/nomotect-platform.git .
   ```

2. **Open a new conversation window** in your AI assistant targeting `~/Projects/nomotect-pilot-app`.

3. **Provide the initial prompt for Session A:**
   ```text
   Você é um engenheiro de software especialista assumindo este repositório recém-clonado em um diretório zerado como um assistente de IA totalmente novo, sem nenhum contexto anterior.

   Estamos iniciando a FASE 8 — Segundo Piloto Independente de Adoção do NomoTect.

   Diretrizes Obrigatórias da Sessão A (Protocolo de Duas Sessões - Fase 0):
   1. Verifique se a branch atual é `main` e crie a branch de trabalho `agent/phase8-independent-pilot`.
   2. Execute o comando `bin/mcp-setup-certify` para verificar e certificar as configurações dos servidores MCP.
   3. Garanta que o arquivo de configuração MCP esteja limpo.
   4. Solicite explicitamente que o operador (eu) reinicie/recarregue esta sessão do assistente.
   5. PAUSE imediatamente após fazer a solicitação de reinicialização.
   ```

4. **Perform the Operator Restart:**
   - Reload/restart the assistant session.

5. **Provide the prompt for Session B:**
   ```text
   Sessão reiniciada com sucesso na branch `agent/phase8-independent-pilot`!

   Diretrizes Obrigatórias da Sessão B (Descoberta MCP + Implementação + Draft PR):
   1. DESCOBERTA MCP OBRIGATÓRIA:
      - Consulte as ferramentas MCP ativas (`nomotect-repository-intelligence`, `gitnexus`, `codebase-memory-mcp`, `context7`) antes de inspecionar arquivos arbitrariamente.
   2. ESCOPO DA APLICAÇÃO (/application):
      - Construa o módulo de aplicação em `/application` (ex: `ProjectManagement`).
      - Implemente isolamento por Tenant, UI com NomoTect Design Tokens / EJ2, Data Grid, Jobs em background e anexos.
      - Construa a suíte de system tests automatizados (`bin/rails test:system`).
   3. VALIDAÇÃO & DRAFT PR:
      - Rode o pipeline `bin/ci` até obter 100% de aprovação.
      - Solicite aprovação do operador para comitar na branch `agent/phase8-independent-pilot` e abrir o Draft PR para a `main` via `gh pr create --draft`.
   ```
