# Container Packaging Baseline

Epic 9 Phase 2 begins with a supported Docker and Podman-compatible container contract.

## Profiles

- `compose.yaml` is the development profile. It builds the application, starts PostgreSQL 18, mounts the source tree and preserves database, bundle, uploaded-file and installation-state volumes.
- `compose.production.yaml` is the production-like profile. It runs the final non-root image with a read-only root filesystem, explicit temporary filesystems and persistent volumes only for PostgreSQL, uploaded files and installation state.

Both files use standard Compose syntax and may be executed with Docker Compose or Podman Compose.

## Image contract

The multi-stage `Dockerfile`:

- pins the supported Ruby baseline;
- installs build dependencies only in the build stage;
- precompiles assets during image construction;
- runs as the unprivileged `rails` user;
- exposes port 3000;
- includes a `/health` container health check;
- declares writable runtime boundaries under `tmp`, `log`, `storage` and `var/installation`.

## Required production environment

- `DATABASE_URL` using the `postgres` or `postgresql` scheme;
- `SECRET_KEY_BASE` containing at least 64 characters.

The entrypoint validates required configuration before Rails starts. Validation reports variable names and structural errors but never prints credential values.

Database preparation is disabled by default. Set `CONTAINER_PREPARE_DATABASE=true` only for a deployment topology where one controlled application instance is responsible for `rails db:prepare`.

## Development

```bash
docker compose up --build
```

The same profile can be started with Podman Compose where available.

## Production-like validation

Provide secrets through the deployment environment rather than committing an `.env` file:

```bash
POSTGRES_PASSWORD=replace-me \
DATABASE_URL=postgresql://rails_runtime:replace-me@postgres:5432/nomotect_production \
SECRET_KEY_BASE="$(ruby -rsecurerandom -e 'print SecureRandom.hex(64)')" \
docker compose -f compose.production.yaml up --build
```

Production orchestration, published OCI tags, provenance attestations, Dev Containers and hosted deployment profiles remain subsequent Phase 2 slices.
