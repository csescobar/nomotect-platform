# BUG-003: Missing PostgreSQL Service Check in bin/setup

## Description
When running `bash bin/setup` on a environment where PostgreSQL 18 is not active or listening on localhost:5432, the setup script fails during `db:prepare` without a clear pre-flight diagnostic message explaining that PostgreSQL is unreachable.

## Environment
- **OS / Platform:** Linux x86_64
- **Services:** PostgreSQL 18

## Steps to Reproduce
1. Stop any local PostgreSQL service / container.
2. Run `bash bin/setup`.
3. Observe failure during database setup step.

## Expected Behavior
`bin/setup` should perform a fast pre-flight check for PostgreSQL availability (e.g. via `pg_isready` or socket check) and output a clear remediation message if PostgreSQL is not running.

## Actual Behavior / Error Logs
Connection refused error during ActiveRecord database connection phase without explicit guidance on starting PostgreSQL or container services.

## Proposed Fix
Add a pre-flight health check step in `bin/setup` verifying PostgreSQL connectivity before attempting `bin/rails db:prepare`.
