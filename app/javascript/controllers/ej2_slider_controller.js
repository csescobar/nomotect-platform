import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["slider", "hiddenInput", "display"]
  static values = { min: Number, max: Number, step: Number, value: Number, disabled: Boolean }

  connect() {
    if (this.hasDisplayTarget) {
      this.displayTarget.textContent = this.valueValue.toString()
    }
  }
}
