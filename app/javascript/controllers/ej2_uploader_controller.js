import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { multiple: Boolean, allowedExtensions: String }

  connect() {
    // Syncfusion Uploader instance initialization
  }
}
