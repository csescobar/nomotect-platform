import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["panel"]

  connect() {
    this.boundClose = (e) => {
      if (!this.element.contains(e.target)) this.close()
    }
    document.addEventListener("click", this.boundClose)
  }

  disconnect() {
    document.removeEventListener("click", this.boundClose)
  }

  toggle() {
    const isOpen = this.panelTarget.classList.toggle("popover__panel--open")
    this.element.querySelector(".popover__trigger")?.setAttribute("aria-expanded", isOpen)
  }

  close() {
    this.panelTarget.classList.remove("popover__panel--open")
    this.element.querySelector(".popover__trigger")?.setAttribute("aria-expanded", "false")
  }
}
