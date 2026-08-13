# Component Showcase and Accessibility Verification

## Purpose

The authenticated component showcase is the living reference for the platform design system. It displays representative variants, states, form controls, containers, feedback, and empty states using production components and semantic design tokens.

## Routes

- `GET /component_showcase` — Core baseline UI components showcase. Requires authentication and is linked from the application shell.
- `GET /ej2_showcase` — Enterprise Syncfusion EJ2 ViewComponents showcase (`Ui::Syncfusion::*`), organized into Form Controls, Dialogs, Cards, Enterprise Grid Engine, Buttons, Toasts, Loading Spinners, Overlays, and Data & Display components.

## Expectations

Every public visual component must have at least one representative state in the showcase. Variant additions should update the showcase in the same pull request. Visible copy remains localized in English and Brazilian Portuguese.

## Automated accessibility audit

`Accessibility::HtmlAudit` analyzes the fully rendered showcase HTML for both `/component_showcase` and `/ej2_showcase`. The integration test fails for:

- duplicate IDs;
- form controls without accessible labels;
- links or buttons without accessible names;
- broken `aria-labelledby`, `aria-describedby`, or `aria-controls` references;
- skipped heading levels.

The audit is intentionally deterministic and dependency-light. It complements, rather than replaces, browser testing (`bin/rails test:system`), keyboard review, screen-reader review, and color-contrast verification.

## Manual verification checklist

Review the showcase in light and dark themes, at desktop and mobile widths. Navigate using only the keyboard, confirm visible focus, operate the mobile drawer, inspect validation associations, and verify that meaning is not communicated by color alone.
