# Roadmap — Custom Layout, Navigation & DX Improvements

This roadmap defines the post-pilot platform improvements for NomoTect based on the findings from the Phase 8 independent adoption validation ([`docs/ai/phase8-pilot-plan.md`](../ai/phase8-pilot-plan.md)).

## Vision & Goals

Provide complete flexibility for application developers to define custom application layouts and navigation structures under `/application`, cleanly disable platform demo showcases in production, and resolve the 11 developer experience (DX) friction points identified during independent adoption.

---

## Phase A — Customizable Layout & Navigation System

### Objectives
- Expose declarative layout configuration in `application/config/layout.rb`.
- Support 3 distinct layout modes: `:platform_default`, `:application_custom`, and `:blank`.
- Allow applications under `/application` to provide a full custom layout template (`application/views/layouts/application.html.erb`).
- Add a toggle for platform demo showcases (`showcases_enabled`) with environment variable override (`NOMOTECT_SHOWCASES_ENABLED`).

### Deliverables
1. `ApplicationLayout` module and `ApplicationLayout::Config` service in `app/lib/application_layout.rb` reading `application/config/layout.rb`.
2. Updated `app/views/layouts/application.html.erb` supporting layout mode resolution, custom navigation items, and showcase toggling.
3. Example configuration file `application/config/layout.rb.example`.

### Certification status

Completed. Declarative layout configuration implemented in `app/lib/application_layout.rb` reading `application/config/layout.rb`. Modes `:platform_default`, `:application_custom`, and `:blank` supported in `app/views/layouts/application.html.erb`. Showcase toggle (`showcases_enabled`) and custom navigation registration certified in `ApplicationLayoutConfigTest` and `CustomLayoutTest`.

---

## Phase B — Developer Experience (DX) & Onboarding Friction Fixes

### Objectives
Document and resolve the 11 onboarding friction points identified in the Phase 8 evidence report (`FIND-2026-001` through step 11):

1. **Grid Scope Signature:** Document keyword arguments (`user:, organization:, **`) for `GridEngine::Catalog.scope_for`.
2. **Grid Column Catalog:** Clarify `GridEngine::Definition#columns` Hash indexing in developer guides.
3. **UI Badge Vocabulary:** Document exact valid variants (`neutral`, `primary`, `success`, `warning`, `danger`) in `Ui::BadgeComponent`.
4. **Organization Boundary:** Document building relations as `ServiceRequest.new(organization: @org)` instead of extending protected models.
5. **Index Authorization:** Clarify mandatory `authorize!(@organization, :show?)` in controller index actions.
6. **CSRF Session Token Rotation:** Document session token handling in integration test write flows.
7. **Minitest Variable Collision:** Warn against using `@request` instance variable in `ActionDispatch::IntegrationTest`.
8. **Organization Route Parameters:** Document numeric primary key usage in organization path helpers.
9. **Controller Before-Action Coverage:** Document member action lists in `set_resource` filters.
10. **State Machine Transitions:** Document initial default states and update-triggered transition validations.
11. **Extension Runtime Registry:** Document runtime capability resolution and in-memory test configuration patterns.

---

## Phase C — Application Starter Skeleton Documentation Sanitization

### Objectives
- Resolve the 12 pre-existing missing documentation file references in `config/ai/documentation.yml`.
- Ensure `bin/repository-intelligence validate` runs cleanly with 0 errors on fresh bootstrap skeletons.

---

## Phase D — Verification, Real-Browser Automation & Final Certification

### Objectives
- Build real-browser system tests (`test/system/custom_layout_system_test.rb`) verifying custom layouts, showcase toggles, and navigation rendering.
- Run `bin/ci` to certify 100% green build across all platform and application layers.
- Mark all phases as completed in `docs/roadmap/custom-layout-dx-improvements.md`.
