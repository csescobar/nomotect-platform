# ADR 0011 — CSS Strategy

## Status

Accepted

## Context

The platform requires themeable, portable components without coupling the design system to a proprietary UI framework.

## Decision

Use native CSS backed by generated design tokens and CSS custom properties. Propshaft is the initial asset pipeline. Component styles consume semantic tokens rather than hard-coded product branding.

## Consequences

- Light and dark themes share one component implementation.
- Applications may replace token values without rewriting components.
- The full token compiler and showcase are delivered in Epic 2.
