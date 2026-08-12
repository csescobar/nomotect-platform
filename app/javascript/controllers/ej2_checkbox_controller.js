import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["checkbox", "hiddenInput"]

  handleChange() {
    if (this.hasCheckboxTarget && this.hasHiddenInputTarget) {
      this.hiddenInputTarget.value = this.checkboxTarget.checked.toString()
    }
  }
}
