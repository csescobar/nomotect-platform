import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { value: Number }

  connect() {
    this.element.style.width = `${this.valueValue}%`
  }
}
