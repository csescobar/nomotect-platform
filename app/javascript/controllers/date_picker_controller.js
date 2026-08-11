import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input", "hiddenInput", "calendar", "grid"]
  static values = { min: String, max: String }

  connect() {
    this.boundClose = (e) => {
      if (!this.element.contains(e.target)) this.close()
    }
    document.addEventListener("click", this.boundClose)
  }

  disconnect() {
    document.removeEventListener("click", this.boundClose)
  }

  open() {
    if (this.hasCalendarTarget) {
      this.calendarTarget.classList.add("ui-date-picker__calendar--open")
    }
  }

  close() {
    if (this.hasCalendarTarget) {
      this.calendarTarget.classList.remove("ui-date-picker__calendar--open")
    }
  }

  selectDate(val) {
    if (this.hasHiddenInputTarget) this.hiddenInputTarget.value = val
    if (this.hasInputTarget) this.inputTarget.value = val
    this.close()
  }
}
