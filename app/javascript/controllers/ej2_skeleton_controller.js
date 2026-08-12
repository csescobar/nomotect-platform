import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { width: String, height: String }

  connect() {
    if (this.hasWidthValue && this.widthValue) {
      this.element.style.width = this.widthValue
    }
    if (this.hasHeightValue && this.heightValue) {
      this.element.style.height = this.heightValue
    }
  }
}
