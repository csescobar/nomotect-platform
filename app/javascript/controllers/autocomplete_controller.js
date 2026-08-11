import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input", "results"]
  static values = { suggestions: Array, url: String }

  connect() {
    this.boundClose = (e) => {
      if (!this.element.contains(e.target)) this.close()
    }
    document.addEventListener("click", this.boundClose)
  }

  disconnect() {
    document.removeEventListener("click", this.boundClose)
  }

  search() {
    const query = this.inputTarget.value.trim().toLowerCase()
    if (!query) {
      this.close()
      return
    }

    if (this.hasUrlValue && this.urlValue) {
      this.fetchRemoteSuggestions(query)
    } else {
      const matches = (this.suggestionsValue || []).filter(item =>
        item.toLowerCase().includes(query)
      )
      this.renderResults(matches)
    }
  }

  async fetchRemoteSuggestions(query) {
    try {
      const response = await fetch(`${this.urlValue}?q=${encodeURIComponent(query)}`, {
        headers: { "Accept": "application/json" }
      })
      if (response.ok) {
        const data = await response.json()
        this.renderResults(Array.isArray(data) ? data : data.results || [])
      }
    } catch {
      // Gracefully ignore fetch failures
    }
  }

  renderResults(items) {
    if (!items.length) {
      this.close()
      return
    }

    this.resultsTarget.innerHTML = items.map(item =>
      `<li role="option" class="ui-autocomplete__option" tabindex="0">${this.escapeHtml(item)}</li>`
    ).join("")

    this.resultsTarget.querySelectorAll("[role='option']").forEach(opt => {
      opt.addEventListener("click", () => {
        this.inputTarget.value = opt.textContent
        this.close()
      })
    })

    this.inputTarget.setAttribute("aria-expanded", "true")
    this.resultsTarget.classList.add("ui-autocomplete__results--open")
  }

  close() {
    this.inputTarget.setAttribute("aria-expanded", "false")
    this.resultsTarget.classList.remove("ui-autocomplete__results--open")
  }

  navigate(event) {
    const items = [...this.resultsTarget.querySelectorAll("[role='option']")]
    if (!items.length) return

    const currentIndex = items.indexOf(document.activeElement)

    if (event.key === "ArrowDown") {
      event.preventDefault()
      items[(currentIndex + 1) % items.length]?.focus()
    } else if (event.key === "ArrowUp") {
      event.preventDefault()
      items[(currentIndex - 1 + items.length) % items.length]?.focus()
    } else if (event.key === "Escape") {
      this.close()
    }
  }

  escapeHtml(str) {
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
  }
}
