import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { duration: Number }

  connect() {
    if (this.hasDurationValue && this.durationValue > 0) {
      this.timer = setTimeout(() => this.dismiss(), this.durationValue)
    }
  }

  disconnect() {
    if (this.timer) clearTimeout(this.timer)
  }

  dismiss() {
    this.element.classList.add("toast--dismissed")
    setTimeout(() => this.element.remove(), 150)
  }
}
