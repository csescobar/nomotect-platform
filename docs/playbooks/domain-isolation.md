# Engineering Playbook: Domain Isolation and Modular Boundaries

This playbook defines architecture guidelines, implementation patterns, and automated governance to ensure NomoTect's business domain remains pure, isolated, and decoupled from external delivery mechanisms.

---

## 1. Isolation Philosophy: The Modular Monolith

NomoTect is structured as a **Modular Monolith**. While executing under a single Rails application process, it is logically segmented into modules with explicit boundaries and public contracts.

### Golden Rule
> **Business domain logic MUST be completely agnostic of how it is delivered to the outside world.**

Domain logic (business rules, calculations, policies) MUST NOT depend on Rails Controllers, Turbo Streams, HTML, background jobs, or HTTP requests. It MUST be pure Ruby and testable in isolation.

---

## 2. Contribution Boundaries: Core vs. Product

To prevent codebase degradation over time, the repository strictly separates platform infrastructure from product code:

### Work Directories
* **Platform Core (`app/`, `config/`, `lib/`):** Contains shared NomoTect platform capabilities (authentication, multi-tenant infrastructure, auditing, job engine). Edits here evolve the platform and require architectural review.
* **Product Code (`/application`):** All client-specific business rules MUST reside under `/application`. Product code consumes public platform contracts without mutating shared internals.

### AI Context & Metadata
Every module MUST maintain a local `AI_CONTEXT.md` defining:
1. Allowed module dependencies.
2. Public APIs and extension points.
3. Domain invariants guaranteed by the module.

---

## 3. Implementation Patterns (Zero Coupling)

### A. Lean Controllers & Application Operations
Rails Controllers route traffic. They receive HTTP parameters, invoke an **Application Operation**, and render the result.

```ruby
# ❌ POOR: Business logic leaking into controller
class RegistrationsController < ApplicationController
  def create
    @user = User.new(registration_params)
    @user.tenant = Current.tenant
    
    if @user.save
      AuditLog.log_event("user_registered", @user)
      UserMailer.welcome_email(@user).deliver_later
      redirect_to dashboard_path
    else
      render :new
    end
  end
end

#  GOOD: Controller delegates completely to a dedicated Operation
class RegistrationsController < ApplicationController
  def create
    operation = Users::RegisterUserOperation.new(
      params: registration_params,
      tenant: Current.tenant
    )

    if operation.call
      redirect_to dashboard_path
    else
      @errors = operation.errors
      render :new
    end
  end
end
```

### B. Explicit Domain Methods (Avoid Direct Mutation)
Never use generic persistence methods (`update`, `update_attribute`, `assign_attributes`) from outside the model to mutate business state. Expose explicit domain methods encapsulating state transition invariants.

```ruby
# ❌ POOR: Direct state mutation from controller or external operation
order.update(status: "paid", paid_at: Time.current)

#  GOOD: Explicit domain transition method encapsulating invariants
order.mark_as_paid!(payment_receipt)
```

---

## 4. Multi-Tenancy (Tenant Scoping) & Database

NomoTect multi-tenancy operates under **Deny-by-Default Security**:

1. **Strict Isolation:** Tenant scoping MUST be the first filter applied to any query. Never expose data for sorting, filtering, or exporting without applying tenant scope at the query root.
2. **Database Invariants:** Do not rely solely on Rails code for critical integrity rules. Use native PostgreSQL constraints (`CHECK constraints`, foreign keys, composite unique indexes with tenant ID) to make invalid states physically impossible in the database.

---

## 5. Automated Validation (Repository Intelligence)

NomoTect uses automated governance via **Repository Intelligence**:

```bash
# 1. Scans codebase and maps structures in local SQLite database
ruby bin/repository-intelligence generate

# 2. Validates for modular boundary violations or cyclic contracts
ruby bin/repository-intelligence validate

# 3. Reports overall repository structural health
ruby bin/repository-intelligence health
```

Any coupling violation detected by `validate` causes `bin/ci` to fail, preventing architectural drift before code merge.
