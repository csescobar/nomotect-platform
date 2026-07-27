# Platform Owner and Installation Completion

The final Phase 1 installation step creates the first organization, user and owner membership in the provisioned application database.

## Inputs

- Organization name
- Owner email address
- Password and confirmation

Passwords are write-only request data. They are never written to local installation state, progress events or database installation metadata.

## Idempotency

The completion service normalizes and reuses the owner by email, reuses the organization by deterministic slug, and reconciles the membership to the `owner` role. Retrying the step does not create duplicate principals.

## Completion evidence

After the transaction succeeds, the latest environment installation record is updated to `completed` and records only the created user and organization identifiers. The local installation state then transitions from `platform_owner` to the terminal `completed` state.

## Security boundary

- Minimum password length is 12 characters.
- Password confirmation must match using constant-time comparison.
- Progress output contains no account credentials.
- Bootstrap session authorization is removed after completion.
- Completed installations bypass all installer routes through the existing installation gate.
