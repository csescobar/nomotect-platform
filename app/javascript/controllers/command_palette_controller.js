import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input", "results"]
  static values = { items: Array }

  connect() {
    this.boundHandleKeydown = this.handleGlobalKeydown.bind(this)
    document.addEventListener("keydown", this.boundHandleKeydown)
  }

  disconnect() {
    document.removeEventListener("keydown", this.boundHandleKeydown)
  }

  // ── Open / Close ────────────────────────────────────────────────────────────

  open() {
    this.element.showModal()
    this.inputTarget.value = ""
    this.filter()
    this.inputTarget.focus()
  }

  close() {
    this.element.close()
  }

  // ── Filtering ───────────────────────────────────────────────────────────────

  filter() {
    const query = this.inputTarget.value.toLowerCase().trim()
    const items = this.resultsTarget.querySelectorAll("[role='option']")

    let visibleGroupLabels = new Set()

    items.forEach(item => {
      const keywords = (item.dataset.keywords || "").toLowerCase()
      const label = (item.textContent || "").toLowerCase()
      const matches = query === "" || label.includes(query) || keywords.includes(query)

      item.hidden = !matches
      if (matches) {
        // track which group this item belongs to
        let prev = item.previousElementSibling
        while (prev) {
          if (prev.classList.contains("command-palette__group-label")) {
            visibleGroupLabels.add(prev)
            break
          }
          prev = prev.previousElementSibling
        }
      }
    })

    // hide group labels that have no visible items
    this.resultsTarget.querySelectorAll(".command-palette__group-label").forEach(label => {
      label.hidden = !visibleGroupLabels.has(label)
    })

    this.inputTarget.setAttribute("aria-expanded", "true")
  }

  // ── Keyboard Navigation ──────────────────────────────────────────────────────

  navigate(event) {
    const items = [...this.resultsTarget.querySelectorAll("[role='option']:not([hidden]) a")]
    if (!items.length) return

    const focused = document.activeElement
    const currentIndex = items.indexOf(focused)

    if (event.key === "ArrowDown") {
      event.preventDefault()
      items[(currentIndex + 1) % items.length]?.focus()
    } else if (event.key === "ArrowUp") {
      event.preventDefault()
      items[(currentIndex - 1 + items.length) % items.length]?.focus()
    } else if (event.key === "Escape") {
      this.close()
    } else if (event.key === "Enter" && document.activeElement !== this.inputTarget) {
      document.activeElement?.click()
    }
  }

  handleGlobalKeydown(event) {
    const isMac = navigator.platform.toUpperCase().includes("MAC")
    const modifier = isMac ? event.metaKey : event.ctrlKey

    if (modifier && event.key.toLowerCase() === "k") {
      event.preventDefault()
      this.element.open ? this.close() : this.open()
    }
  }
}
