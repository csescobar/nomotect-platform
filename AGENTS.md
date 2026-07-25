# Agent Instructions

## Architecture

- Keep domain logic independent of Rails controllers, Turbo and HTML.
- Controllers call application operations.
- State changes use explicit domain methods.
- Never bypass authorization or tenant scoping.
- Never construct SQL from client-provided identifiers.

## Required validation

Before completing a change, run the future project entrypoint:

```bash
bin/ci
```

Until application code exists, verify Markdown, JSON and links manually.

## Documentation

- Add or update an ADR for significant decisions.
- Update the module catalog when introducing a capability.
- Document security and privacy impact.
- Add i18n keys for all user-facing text.

## Security

- Do not log secrets, tokens, passwords or unnecessary personal data.
- Use server-side whitelists for grid fields and operators.
- Ensure tenant scope is applied before user-controlled query options.
