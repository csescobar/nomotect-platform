# Engineering Playbook: Secure-by-Default Development

This manual defines engineering guidelines to ensure all code contributions written by human developers or AI agents adhere to NomoTect's **secure-by-default** and **fail-closed** security philosophy.

Security in NomoTect is built directly into operations, domain models, and interfaces.

---

## 1. The "Fail Closed" Principle

Any security check, permission evaluation, license check, or operational workflow MUST deny access by default upon error, missing parameters, or unexpected exceptions.

### Authorization Golden Rules:
* Undefined user role -> **Access Denied.**
* Unverified tenant scope -> **Access Denied.**
* Credential decode failure -> **Access Denied.**

---

## 2. Multi-Tenancy and Tenant Scoping

NomoTect operates a multi-tenant architecture with absolute tenant data isolation.

### Implementation Guidelines:
1. **Mandatory Prior Scoping:** Tenant filtering MUST be applied before sorting, filtering, exporting, or serializing data.
2. **Context Inheritance:** Controllers and operations MUST NOT read from global scope without verifying active tenant scope.
3. **Association Protection:** Query associated records through current tenant associations to prevent cross-tenant access.

```ruby
# ❌ INCORRECT: Cross-tenant risk if ID belongs to another tenant
def show
  @invoice = Invoice.find(params[:id])
  authorize! :read, @invoice
end

#  CORRECT: Scope applied at query root
def show
  @invoice = Current.tenant.invoices.find(params[:id])
  authorize_operation!(Invoices::Show, @invoice)
end
```

---

## 3. Injection Prevention & Query Validation

All external input MUST be treated as **untrusted**.

### Data Handling Rules:
* **No Dynamic SQL Construction:** Building SQL queries, file paths, system commands, or constant names from client-supplied parameters is forbidden.
* **Server-Side Whitelisting:** Dynamic data grids allowing custom filtering, sorting, or exports MUST enforce server-side whitelists for allowed fields and operators.

```ruby
# ❌ INCORRECT: Vulnerable to parameter injection
Invoice.order("#{params[:sort_by]} #{params[:direction]}")

#  CORRECT: Strict server-side whitelist validation
ALLOWED_SORT_FIELDS = %w[created_at total due_date].freeze
ALLOWED_DIRECTIONS = %w[asc desc].freeze

sort_field = ALLOWED_SORT_FIELDS.include?(params[:sort_by]) ? params[:sort_by] : 'created_at'
direction = ALLOWED_DIRECTIONS.include?(params[:direction]) ? params[:direction] : 'desc'

Current.tenant.invoices.order(sort_field => direction)
```

---

## 4. Log Hygiene & Data Leakage Protection

* **Filtered Parameters:** Credentials, API tokens, passwords, private keys, encryption payloads, and unnecessary PII MUST be masked.
* **Secure Traceability:** Log operational events using correlation IDs and audit trails without embedding sensitive payloads in plain text log lines.

---

## 5. High-Risk Surfaces

### A. File Uploads
* **MIME-Type Magic Byte Validation:** Never rely on user-supplied file extensions; validate file magic bytes server-side.
* **Storage Isolation:** Tenant files MUST be stored in segregated directories or logical buckets preventing cross-tenant URL access.

### B. Data Exports (CSV/XLSX)
* **CSV Injection Prevention:** User-supplied text fields (names, descriptions) starting with formula characters (`=`, `+`, `-`, `@`) MUST be sanitized before CSV export.

---

## 6. Threat Testing Pipeline

Modifications touching authentication, authorization, encryption, uploads, exports, or audit trails REQUIRE mandatory **threat test coverage**:

* Write test cases simulating explicit attack vectors (parameter injection, path traversal, cross-tenant data reads).
* Ensure `bin/ci` executes threat tests and verifies sensitive surfaces fail closed.
