# Engineering Playbook: Consistent UX and Accessibility (a11y)

This manual defines design, interface, accessibility (a11y), and internationalization (i18n) guidelines for the NomoTect platform. It guides developers and AI agents in creating visual components while adhering to the **Theme Contract** and **AI Principles**.

---

## 1. UI Philosophy in NomoTect

NomoTect UI is guided by three principles:
* **Hotwire-First:** Dynamic behavior uses server-rendered HTML fragments (HTML-over-the-wire) via Turbo Drive, Turbo Frames, Turbo Streams, and Stimulus JS.
* **Accessibility by Default (a11y-by-default):** Dynamic interfaces MUST be inclusive. Components are built accessible from inception.
* **Semantic Encapsulation:** `ViewComponent` guarantees visual encapsulation, semantic HTML markup, and testable UI logic.

---

## 2. Theme Contract

NomoTect enforces strict visual presentation rules:

* **Two Supported Themes:** Strictly **Light** and **Dark** themes.
* **Safe Fallback & Normalization:** Any invalid, null, missing, or legacy theme preference automatically normalizes to default **Light** theme.
* **Design Tokens:** Hardcoded colors (e.g., `#000` or `text-black`) are forbidden. Use semantic tokens (e.g., `text-primary`, `bg-canvas`) to ensure required contrast in both modes.

---

## 3. Native Accessibility (a11y)

### 3.1. Semantic HTML Over ARIA
* Prefer native semantic HTML tags (`<button>`, `<nav>`, `<main>`, `<header>`, `<article>`) over neutral tags (`<div>`, `<span>`) with simulated ARIA roles.
* Use ARIA attributes only when native HTML is insufficient to describe dynamic behavior.

### 3.2. Keyboard Navigation and Visible Focus
* Interactive interfaces MUST be fully operable via keyboard alone (`Tab`, `Enter`, `Space`, Arrow keys).
* Never hide or neutralize focus indicators (`:focus`, `:focus-visible`). Focus rings MUST be high-contrast and clear.
* Modals and dialogs MUST implement focus trapping and return focus to the trigger element upon closure.

### 3.3. Dynamic Updates with Turbo
When injecting HTML via Turbo Streams or updating Turbo Frames:
* **Focus Management:** Ensure dynamic insertions do not reset scroll position or lose active keyboard focus.
* **Live Announcements:** Dynamic alerts, errors, and real-time updates MUST be announced to screen readers using `aria-live="polite"` or `aria-live="assertive"`.

---

## 4. Internationalization (i18n)

NomoTect supports **English (`en`)** and **Brazilian Portuguese (`pt-BR`)**:

* **No Hardcoded User-Facing Text:** All user-facing strings MUST use i18n keys (`t('.key')` or `I18n.t(...)`).
* **Localized Formats:** Dates, currencies, numbers, and timezones MUST reflect the active user locale.
* **Translation Completeness:** Every new i18n key MUST be populated in both `config/locales/en.yml` and `config/locales/pt-BR.yml`.

---

## 5. Development with ViewComponent and Hotwire

### Example: Dynamic Accessible Alert Component

```ruby
# app/components/notification_component.rb
class NotificationComponent < ViewComponent::Base
  attr_reader :type, :message

  def initialize(type: :info, message:)
    @type = type
    @message = message
  end

  def alert_class
    case type
    when :success then "bg-green-100 text-green-900 border-green-500"
    when :error   then "bg-red-100 text-red-900 border-red-500"
    else               "bg-blue-100 text-blue-900 border-blue-500"
    end
  end
end
```

```html
<!-- app/components/notification_component.html.erb -->
<div class="border-l-4 p-4 <%= alert_class %>" 
     role="alert" 
     aria-live="assertive" 
     id="live-notification"
     tabindex="-1">
  <div class="flex">
    <div class="ml-3">
      <p class="text-sm font-medium">
        <%= message %>
      </p>
    </div>
  </div>
</div>
```

---

## 6. UX & Accessibility Audit Checklist

Before opening a PR, verify:

- [ ] **HTML Semantics:** Does HTML use native semantic tags instead of styled `<div>` elements?
- [ ] **Keyboard Operability:** Can all interactive actions be performed via keyboard?
- [ ] **Theme Contract:** Does the component render with sufficient contrast in both Light and Dark themes?
- [ ] **i18n Integration:** Are all user-visible strings localized in `en.yml` and `pt-BR.yml`?
- [ ] **Turbo Focus:** Do dynamic Turbo updates manage focus predictably without disorienting the user?
