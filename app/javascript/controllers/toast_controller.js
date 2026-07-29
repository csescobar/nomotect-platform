import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { duration: { type: Number, default: 4000 } }

  connect() {
    this._timer = setTimeout(() => this.dismiss(), this.durationValue)
  }

  disconnect() {
    clearTimeout(this._timer)
  }

  dismiss() {
    this.element.classList.add("toast--dismissing")
    this.element.addEventListener("animationend", () => this.element.remove(), { once: true })
  }
}
