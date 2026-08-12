import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input", "display"]

  connect() {
    this.update()
  }

  update() {
    if (this.hasInputTarget) {
      const val = parseFloat(this.inputTarget.value)
      const min = parseFloat(this.inputTarget.min) || 0
      const max = parseFloat(this.inputTarget.max) || 100
      const pct = max > min ? ((val - min) / (max - min)) * 100 : 0

      this.inputTarget.style.setProperty("--slider-pct", `${pct}%`)

      if (this.hasDisplayTarget) {
        this.displayTarget.textContent = this.inputTarget.value
      }
    }
  }
}
