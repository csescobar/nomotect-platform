import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input", "display"]

  update() {
    if (this.hasInputTarget && this.hasDisplayTarget) {
      this.displayTarget.textContent = this.inputTarget.value
    }
  }
}
