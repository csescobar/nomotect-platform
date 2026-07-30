import { Controller } from "@hotwired/stimulus"

const STORAGE_KEY = "nomotect-theme"
const ALLOWED_THEMES = ["system", "light", "dark"]

export default class extends Controller {
  static targets = ["select"]

  connect() {
    const preference = localStorage.getItem(STORAGE_KEY) || "system"
    this.apply(preference)
    if (this.hasSelectTarget) this.selectTarget.value = preference
  }

  change(event) {
    this.apply(event.target.value)
  }

  apply(preference) {
    const theme = ALLOWED_THEMES.includes(preference) ? preference : "system"
    localStorage.setItem(STORAGE_KEY, theme)

    if (theme === "system") {
      document.documentElement.removeAttribute("data-theme")
    } else {
      document.documentElement.dataset.theme = theme
    }
  }
}
