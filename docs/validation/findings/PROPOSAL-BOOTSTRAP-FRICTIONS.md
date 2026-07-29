# Issue Proposal: Resolve Developer Bootstrap & Script Execution Frictions

## Summary
Improve developer onboarding and AI agent execution reliability by addressing three friction points identified during initial platform setup and CI script execution.

## Proposed Changes / Objectives

1. **Ruby Version Constraint Tolerance (BUG-001)**:
   - Relax `ruby "4.0.5"` in `Gemfile` to `ruby "~> 4.0.5"` or allow compatible patch versions, avoiding immediate setup failures on patch upgrades (e.g. Ruby 4.0.6).

2. **Executable Permissions on `bin/` Scripts (BUG-002)**:
   - Ensure all scripts in `bin/` (`bin/ci`, `bin/setup`, `bin/dev`, etc.) have explicit executable file permissions (`chmod +x`) tracked in Git.

3. **Pre-flight Service Diagnostics in `bin/setup` (BUG-003)**:
   - Add a fast pre-flight check in `bin/setup` to verify PostgreSQL 18 availability before attempting database operations, printing clear remediation guidance if unreachable.

## Expected Impact
- Improves AI agent auto-execution success rate from 70% to 100% on standard environments.
- Enhances developer onboarding experience across non-containerized host environments.
