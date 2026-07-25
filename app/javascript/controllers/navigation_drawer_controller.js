import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["drawer", "toggle"]

  connect() {
    this.element.classList.add("application-shell--enhanced")
    this.mediaQuery = window.matchMedia("(max-width: 48rem)")
    this.boundEscape = this.handleEscape.bind(this)
    document.addEventListener("keydown", this.boundEscape)
    if (this.mediaQuery.matches) this.close(false)
  }

  disconnect() {
    document.removeEventListener("keydown", this.boundEscape)
  }

  toggle() {
    this.drawerTarget.hidden ? this.open() : this.close()
  }

  open() {
    this.drawerTarget.hidden = false
    this.toggleTarget.setAttribute("aria-expanded", "true")
  }

  close(returnFocus = true) {
    this.drawerTarget.hidden = true
    this.toggleTarget.setAttribute("aria-expanded", "false")
    if (returnFocus) this.toggleTarget.focus()
  }

  handleEscape(event) {
    if (event.key === "Escape" && !this.drawerTarget.hidden) this.close()
  }
}
