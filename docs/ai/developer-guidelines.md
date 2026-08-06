# NomoTect Developer Guidelines & Onboarding Friction Resolution Guide

This document provides definitive guidance on the 11 developer experience (DX) friction points identified during the Phase 8 independent adoption validation ([`docs/ai/phase8-pilot-plan.md`](phase8-pilot-plan.md)).

---

## 1. GridEngine Scope Signatures

When registering a grid scope lambda in `application/config/grids.rb`, the lambda signature **must** use keyword arguments and include `**` to tolerate extra parameters passed by the GridEngine catalog:

```ruby
# Correct
GridEngine::Catalog.register("service_requests",
  definition: definition,
  scope: ->(user:, organization:, **) {
    ServiceRequest.where(organization: organization)
  }
)
```

---

## 2. GridEngine Column Catalog

`GridEngine::Definition#columns` is stored as a `Hash` keyed by String column names (e.g. `definition.columns["status"]`), NOT as an `Array`. When inspecting or iterating columns programmatically:

```ruby
# Correct
definition.columns.each do |name, column|
  # name is String, column is GridEngine::Column
end
```

---

## 3. Ui::BadgeComponent Variants

`Ui::BadgeComponent` accepts strictly five variant symbols:

- `:neutral` — Default neutral badge
- `:primary` — Brand primary blue
- `:success` — Green success status
- `:warning` — Amber warning status
- `:danger` — Red error/destructive status

*Note: The `:info` variant is not supported. Use `:primary` or `:neutral` instead.*

---

## 4. Protected Core Model Associations

Core models (`Organization`, `User`, `Membership`) under `app/models/` are protected platform code. Application-owned models under `/application` must associate with organizations via explicit foreign keys without modifying the `Organization` class:

```ruby
# Correct (in application/models/service_request.rb)
class ServiceRequest < ApplicationRecord
  belongs_to :organization
end

# Usage:
ServiceRequest.new(organization: @organization, title: "Help")
```

---

## 5. Controller Index Authorization

Grid `index` actions must authorize tenant access explicitly on the organization before rendering data:

```ruby
def index
  authorize!(@organization, :show?)
  @grid = GridEngine::Catalog.render("service_requests", user: current_user, organization: @organization)
end
```

---

## 6. CSRF Token Rotation

Rails rotates the session cookie and authenticity token during authentication. In HTTP integration test flows:

```ruby
# Re-extract token after signing in
get new_session_path
token = Nokogiri::HTML(response.body).at_css("input[name='authenticity_token']")["value"]
post session_path, params: { authenticity_token: token, email_address: user.email_address, password: "password" }
```

---

## 7. Minitest Reserved Variable `@request`

In `ActionDispatch::IntegrationTest`, `@request` is a reserved instance variable for the Rack request object. Using `@request` for a domain model instance will silently corrupt URL helpers:

```ruby
# Incorrect: @request = ServiceRequest.create!(...)
# Correct:   @service_request = ServiceRequest.create!(...)
```

---

## 8. Organization Route Parameters

Organization routes (`organization_path(@organization)`) use the numeric primary key (`/organizations/63`) in URL helpers. Path helpers do not use organization slugs by default.

---

## 9. Controller `before_action` Filters

Always include custom member actions (e.g. `attach`, `transition`, `export`) in controller `set_resource` filters:

```ruby
before_action :set_service_request, only: [:show, :edit, :update, :destroy, :attach, :transition]
```

---

## 10. State Machine Transitions

Database schema defaults (e.g. `status: "open"`) apply upon initial `create`. State machine transition validations run during `update`. Verify initial states on build before testing transition paths.

---

## 11. Extension Runtime Registry

`Extensions::Runtime` seals registries post-boot. In test suites that test extensions dynamically:

```ruby
# Use in-memory configuration loading in tests
extension = Extensions::Loader.load_from_path(Rails.root.join("application/extensions/my_extension"))
assert extension.enabled?
```
