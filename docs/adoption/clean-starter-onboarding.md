# Clean Application Starter Onboarding

This checklist validates a generated Application Starter in a controlled local
environment. Public GitHub Release download validation belongs to Phase 8.

## Prerequisites

- Git;
- Ruby and Bundler versions declared by the starter;
- PostgreSQL 18, or Docker Desktop/Compose;
- Antigravity CLI for the currently certified MCP journey.

`pg_isready` is provided by PostgreSQL client packages. Its absence no longer
causes an unexplained setup path: `bin/setup` reports that preflight was skipped
and still attempts the configured `DATABASE_URL`.

For a container-managed database, start the supported Compose profile before
running setup. Windows development should use Docker Desktop or WSL2 unless a
native Windows runtime is certified separately.

## Controlled journey

1. Generate the starter outside the source repository.
2. Extract TAR.GZ on Linux/macOS or ZIP on Windows.
3. Run the appropriate `nomotect-init` launcher.
4. Confirm a new `.git` directory and `config/nomotect/adoption.json` exist.
5. Configure the database and run `bin/setup`.
6. Generate Repository Intelligence when source or governed documentation has
   changed: `ruby bin/repository-intelligence generate`.
7. Validate it with `ruby bin/repository-intelligence validate`.
8. Follow `MCP_BOOTSTRAP.md`, restart Antigravity CLI and prove client-side MCP
   use before broad repository discovery.

Repository Intelligence generation is required after initialization, after
changes to architecture metadata or governed documentation, and whenever
validation reports drift. It is not necessary before every application command.

## Common failures

| Symptom | Required action |
| --- | --- |
| `pg_isready` missing | Install PostgreSQL client tools or use Docker/WSL2; verify `DATABASE_URL` |
| PostgreSQL unreachable | Start the configured service and confirm host and port |
| `db:prepare` fails | Inspect the configured connection; do not bypass database errors |
| Repository Intelligence drift | Regenerate and validate before MCP restart |
| MCP absent after configuration | Fully restart Antigravity CLI and inspect `/mcp` |
| Initialization already completed | Do not rerun or delete adoption metadata; review the existing product identity |

The controlled journey validates setup artifacts and documentation. It is not
the independent Phase 8 adoption pilot. It is not the independent Phase 8
adoption pilot, which remains a separate public-release exercise.
