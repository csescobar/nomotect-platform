import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input", "hiddenInput", "dropdown"]

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
    if (this.hasDropdownTarget) {
      this.dropdownTarget.classList.toggle("ui-time-picker__dropdown--open")
    }
  }

  close() {
    if (this.hasDropdownTarget) {
      this.dropdownTarget.classList.remove("ui-time-picker__dropdown--open")
    }
  }

  select(event) {
    const opt = event.currentTarget
    const val = opt.dataset.value
    const label = opt.textContent.trim()

    if (this.hasHiddenInputTarget) this.hiddenInputTarget.value = val
    if (this.hasInputTarget) this.inputTarget.value = label

    this.close()
  }
}
