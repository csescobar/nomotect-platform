# ADR-0012: Design Token Architecture

## Status

Accepted

## Context

The design system needs themeable, application-neutral values that can be consumed by Rails views, ViewComponents and progressive-enhancement JavaScript without coupling components to product branding.

## Decision

Store canonical design tokens as flat JSON maps under `config/design_tokens`. Separate shared structural tokens from light and dark semantic color tokens. Generate committed CSS custom properties through `DesignTokens::Compiler` and verify generated output in CI.

Theme preference supports `system`, `light` and `dark`. Explicit choices are stored in browser local storage and applied before stylesheets load to prevent a flash of the wrong theme. System mode remains the default and requires no JavaScript for correct rendering.

## Consequences

- Light and dark themes must expose identical semantic keys.
- Components consume semantic CSS variables and do not hard-code brand colors.
- Generated CSS is committed for transparent review and asset-pipeline simplicity.
- Tenant and application overrides can later provide a controlled token layer without changing component contracts.
