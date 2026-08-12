---
name: search-audit
description: Queries and analyzes tenant-scoped audit trail and event logs
permissions:
  - audit.read
tools:
  - audit.search
  - nomotect://current-organization
---
# Search Audit Skill

## Purpose
Enables the assistant to query, filter, and summarize audit events for compliance, security investigation, and activity tracking.

## Execution Workflow
1. **Verify Tenant Boundary**: Read `nomotect://current-organization` to confirm organization context.
2. **Execute Audit Query**: Call `audit.search` using user-specified criteria (actor, event family, date range, action).
3. **Analyze & Format Results**:
   - Display event timeline sorted chronologically.
   - Highlight event family (`identity.*`, `authorization.*`, `tenant.*`, `data.*`, `security.*`, `ai.*`).
   - Flag anomalous patterns or failed authentication/authorization attempts.

## Constraints
- Scope queries strictly to the active tenant.
- Format timestamps in UTC ISO8601.
