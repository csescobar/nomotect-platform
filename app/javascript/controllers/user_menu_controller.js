import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["dropdown"]

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
    const isOpen = this.dropdownTarget.classList.toggle("user-menu__dropdown--open")
    this.element.querySelector(".user-menu__trigger")?.setAttribute("aria-expanded", isOpen)
  }

  close() {
    this.dropdownTarget.classList.remove("user-menu__dropdown--open")
    this.element.querySelector(".user-menu__trigger")?.setAttribute("aria-expanded", "false")
  }
}
