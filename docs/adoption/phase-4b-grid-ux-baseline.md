# Phase 4B Grid Engine UX Baseline

## Status

Baseline defined. Implementation and certification remain pending.

## Purpose

This document defines the acceptance baseline for Phase 4B of the Adoption
Validation Improvement Roadmap. Phase 4B focuses on the default Grid Engine
composition and its enterprise UX behavior. It does not replace the Grid
Engine security contracts, and it does not claim browser or screen-reader
certification reserved for Phase 6.

The baseline is intentionally implementation-neutral. It records what the
default grid must make possible and how the result will be evaluated before
the work is split into implementation slices.

## Evidence boundary

- The current implementation is the source of truth for behavior.
- The Render visual-validation deployment is the reference environment for
  operator screenshots and responsive inspection.
- Operator-provided screenshots are human evidence and are not treated as
  automated certification.
- A missing screenshot or manual observation remains `pending`; it must not be
  inferred from a passing test.
- Phase 6 will provide the supported real-browser matrix and named
  screen-reader evidence.

## Representative surfaces

| Surface | Required viewports | Primary concerns |
| --- | --- | --- |
| Organizations grid | Desktop, tablet, mobile | Toolbar hierarchy, filters, saved views, export and result presentation |
| Customers index | Desktop, tablet, mobile | Table readability, value disclosure, row actions and narrow-width behavior |
| Grid controls and saved views | Desktop and mobile | Field grouping, focus order, validation, persistence feedback and responsive stacking |
| Grid fallback composition | Desktop and mobile | Equivalent data, authorization boundary and usable no-JavaScript/Turbo behavior |

## Viewport evidence profiles

The same representative data and user journey must be exercised at each
profile. The profiles are evidence targets, not a claim that a particular
browser has already been certified.

| Profile | Viewport | Evidence |
| --- | --- | --- |
| Desktop | 1440 × 900 | Full toolbar, table, pagination and saved-view composition |
| Tablet | 768 × 1024 | Control wrapping, table strategy and action discoverability |
| Mobile | 390 × 844 | Header, stacked controls, readable rows and intentional overflow only |
| Narrow mobile | 320 × 640 | Minimum supported layout, truncation and horizontal interaction review |

## Acceptance matrix

| ID | Requirement | Acceptance evidence | Status |
| --- | --- | --- | --- |
| 4B-GRID-001 | The toolbar exposes search, filters and export as a coherent group. | Component/request tests plus desktop and mobile screenshots. | Pending |
| 4B-GRID-002 | Active filters are visible, understandable and removable without rediscovering the form. | Filter-state test and visual evidence with at least two active filters. | Pending |
| 4B-GRID-003 | Filter controls are derived from the registered column type. | Type-to-editor matrix and parser/request coverage for string, integer, decimal, boolean, date and datetime. | Pending |
| 4B-GRID-004 | Sort state is visible and keyboard-operable. | Sort direction test, focus-order test and visual evidence for ascending and descending states. | Pending |
| 4B-GRID-005 | Pagination and result counts communicate the current result window. | Boundary tests for first, middle and last pages, including zero results. | Pending |
| 4B-GRID-006 | Export is discoverable and reuses the validated, authorized grid query. | Export request/security tests and evidence that the control remains available at mobile width. | Pending |
| 4B-GRID-007 | Saved views expose save, default, reuse and replacement behavior. | Persistence and authorization tests for user-owned views, plus success and validation feedback. | Pending |
| 4B-GRID-008 | Column visibility, ordering and width preferences are constrained to declared columns. | Definition-boundary tests and desktop/mobile preference evidence. | Pending |
| 4B-GRID-009 | Date-only, datetime, number and percentage values use the active locale intentionally. | English and Portuguese examples, including short date output for date-only fields. | Pending |
| 4B-GRID-010 | Long values are truncated without losing accessible full-value disclosure. | Cell rendering test and visual evidence for long names, emails and identifiers. | Pending |
| 4B-GRID-011 | Status and priority values use semantic badges and do not rely on color alone. | Light/Dark rendering evidence and non-color text or label assertions. | Pending |
| 4B-GRID-012 | Row actions and selection patterns remain discoverable and tenant-safe. | Authorization/request tests plus desktop and mobile action evidence. | Pending |
| 4B-GRID-013 | Loading, empty, error and degraded states are explicit and actionable. | State-component tests for message, retry and accessible announcement behavior. | Pending |
| 4B-GRID-014 | The grid remains usable at tablet, mobile and narrow-mobile widths. | Viewport evidence with no accidental clipping and an intentional overflow decision where required. | Pending |
| 4B-GRID-015 | Keyboard navigation remains coherent across toolbar, table, saved views and row actions. | Component/system keyboard checks; formal screen-reader evidence remains Phase 6. | Pending |
| 4B-GRID-016 | The grid supports Light and Dark themes and both supported UI locales. | Theme/locale screenshots and assertions for labels, controls and formatted values. | Pending |
| 4B-GRID-017 | Operational pages do not duplicate global language or theme selectors. | Settings placement check and page-level visual review. | Pending |
| 4B-GRID-018 | The HTML/Turbo fallback preserves the same data and authorization boundary as the enhanced adapter. | Adapter parity, authorization and no-JavaScript/Turbo request evidence. | Pending |

## Known observations carried into implementation

The following observations came from the operator's visual validation and are
recorded as work inputs, not as automated certification:

- the organizations grid already exposes filtering, sorting, visible-column
  selection, saved views and CSV export controls;
- mobile controls can become vertically dense and require deliberate grouping;
- narrow tables require an explicit decision between responsive cell layout,
  truncation with disclosure and bounded horizontal overflow;
- date-only values should use a short locale format such as `21/07/2026` or
  `07/21/2026`, while datetime values may retain date and time;
- button contrast must be reviewed in the actual rendered state, including
  visited and disabled states;
- language and theme selection belongs in Settings rather than in an
  operational grid view;
- the browser console must be reviewed separately from visual acceptance so
  resource-preload warnings are not confused with grid behavior.

## Exit criteria

Phase 4B may move to its evidence review only when:

1. every acceptance item is marked `passed`, `pending-human` or `blocked`;
2. no item is marked `passed` solely from an inferred screenshot or an
   implementation claim;
3. the representative grid composition works without application-specific
   CSS repairs;
4. type-specific filters, formatting, export and saved-view behavior remain
   bound to the existing server-authoritative contracts;
5. desktop, tablet, mobile and narrow-mobile evidence is attached or clearly
   recorded as pending;
6. Light/Dark and bilingual evidence covers the same representative journeys;
7. unresolved accessibility or security findings are routed to the relevant
   Phase 5 or Phase 6 workstream rather than silently accepted;
8. the final evidence is bound to the exact commit that was tested.

## Planned implementation slices

The baseline will be implemented through focused pull requests:

1. toolbar, active-filter and typed-filter composition;
2. sorting, pagination, result states and export presentation;
3. saved views and column preferences;
4. cell formatting, badges, disclosure and row actions;
5. responsive behavior and mobile evidence;
6. theme, locale and fallback parity validation;
7. final Phase 4B evidence review.

All repository documentation and acceptance evidence must remain in English.
Each implementation slice requires its own GitHub branch, matching change
fragment, green CI and review before the next slice begins.
