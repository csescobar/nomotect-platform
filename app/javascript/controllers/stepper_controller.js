import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["step"]
  static values = { current: String }

  connect() {
    this.updateSteps()
  }

  goTo(event) {
    const stepId = event.currentTarget.dataset.stepperStepId
    if (stepId) {
      this.currentValue = stepId
      this.updateSteps()
      this.dispatch("changed", { detail: { step: stepId } })
    }
  }

  updateSteps() {
    const stepIds = this.stepTargets.map(s => s.dataset.stepperStepId)
    const currentIndex = stepIds.indexOf(this.currentValue)

    this.stepTargets.forEach((step, index) => {
      step.classList.remove("stepper__step--completed", "stepper__step--active", "stepper__step--pending")
      if (index < currentIndex) {
        step.classList.add("stepper__step--completed")
        step.removeAttribute("aria-current")
      } else if (index === currentIndex) {
        step.classList.add("stepper__step--active")
        step.setAttribute("aria-current", "step")
      } else {
        step.classList.add("stepper__step--pending")
        step.removeAttribute("aria-current")
      }
    })
  }
}
