import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["switch", "hiddenInput"]

  toggle() {
    if (!this.hasSwitchTarget) return

    const isChecked = this.switchTarget.getAttribute("aria-checked") === "true"
    const nextState = !isChecked

    this.switchTarget.setAttribute("aria-checked", nextState.toString())
    this.switchTarget.classList.toggle("ui-toggle__switch--checked", nextState)

    if (this.hasHiddenInputTarget) {
      this.hiddenInputTarget.value = nextState.toString()
    }
  }
}
