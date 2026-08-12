import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["switch", "hiddenInput"]

  handleChange() {
    if (this.hasSwitchTarget && this.hasHiddenInputTarget) {
      this.hiddenInputTarget.value = this.switchTarget.checked.toString()
    }
  }
}
