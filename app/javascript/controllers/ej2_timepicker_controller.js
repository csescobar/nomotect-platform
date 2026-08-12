import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { placeholder: String, step: Number }

  connect() {
    // Syncfusion TimePicker instance initialization
  }
}
