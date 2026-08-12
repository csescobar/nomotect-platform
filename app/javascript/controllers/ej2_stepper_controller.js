import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { activeStep: Number, steps: Array }

  connect() {
    // Syncfusion Stepper instance initialization
  }
}
