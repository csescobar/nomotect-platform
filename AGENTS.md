# Agent Instructions

These instructions define how agents work in this repository. All AI-assisted contributions must also comply with [AI_PRINCIPLES.md](AI_PRINCIPLES.md).

## Branch and pull request workflow

- Never commit directly to `main`.
- Create a focused branch using the `agent/<description>` naming pattern.
- Keep changes limited to the approved scope.
- Open a draft pull request unless the user explicitly requests a ready-for-review pull request.
- Use English for repository content, comments, commit messages, issues and pull requests.

## Architecture

- Keep domain logic independent of Rails controllers, Turbo and HTML.
- Controllers call application operations.
- State changes use explicit domain methods.
- Never bypass authorization or tenant scoping.
- Never construct SQL from client-provided identifiers.
- Preserve module boundaries and avoid speculative abstractions.

## Required validation

Before completing a change, run the future project entrypoint:

```bash
bin/ci
```

Until application code exists, verify Markdown, JSON, internal links and configuration examples manually.

## Documentation

- Add or update an ADR for significant decisions.
- Update the module catalog when introducing a capability.
- Document security, privacy, accessibility and migration impact.
- Add i18n keys for all user-facing text.
- Do not document behavior that has not been implemented or formally planned.

## Security

- Do not log secrets, tokens, passwords or unnecessary personal data.
- Use server-side whitelists for grid fields and operators.
- Ensure tenant scope is applied before user-controlled query options.
- Treat uploads, exports, integrations and rich text as security-sensitive surfaces.

## Completion report

When finishing work, summarize:

- Branch and pull request.
- Files and behavior changed.
- Validation performed.
- Known limitations or follow-up work.
