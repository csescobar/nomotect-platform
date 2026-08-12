import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["rangeInput", "startHidden", "endHidden"]
  static values = { placeholder: String, format: String }

  connect() {
    // Syncfusion DateRangePicker instance initialization
  }
}
