---
name: Bug report
about: Create a report to help us improve and fix an issue
---

# Issue 001: dx: enhance developer bootstrap and script execution portability

## Problem
During initial validation of the platform across non-containerized developer host environments and AI agent execution environments, three bootstrapping frictions were identified:

1. **Ruby Version Constraint (BUG-001):** `Gemfile` explicitly pins `ruby "4.0.5"`, causing immediate `exit status 18` failures on developer machines running Ruby 4.0.6.
2. **Executable Permissions (BUG-002):** Scripts in `bin/` (such as `bin/ci`) lack executable file permissions (`+x`) tracked in Git, triggering `Permission denied` (exit status 126).
3. **Pre-flight Service Diagnostics (BUG-003):** `bin/setup` does not perform a fast pre-flight check for PostgreSQL 18 service availability, leading to connection failures without clear remediation guidance.

## Proposed Solution

- [ ] **Relax Ruby Patch Version:** Update `Gemfile` constraint to `ruby "~> 4.0.5"` to allow compatible patch updates (4.0.6+).
- [ ] **Set Executable Bits:** Run `chmod +x bin/*` and commit permission changes to Git.
- [ ] **Add Pre-flight Health Check in `bin/setup`:** Add a check for PostgreSQL connectivity (e.g. `pg_isready`) with clear diagnostic output before `bin/rails db:prepare`.

## Domain & Architecture Impact
Developer experience and CI/CD script execution. No runtime application domain impact.

## Security & Privacy Impact
None.

## Acceptance Criteria
- `bin/ci` executes successfully on host environments running Ruby 4.0.6.
- All scripts in `bin/` run directly without requiring explicit `bash` prefix.
- `bin/setup` provides human-readable remediation guidance when PostgreSQL is unreachable.
