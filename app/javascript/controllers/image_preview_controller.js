import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input", "preview", "img"]

  connect() {
    this._updatePreview()
  }

  change() {
    this._updatePreview()
  }

  _updatePreview() {
    const file = this.inputTarget.files && this.inputTarget.files[0]
    if (file) {
      const url = URL.createObjectURL(file)
      this.imgTarget.src = url
      this.imgTarget.alt = file.name
      this.previewTarget.classList.remove("ui-image-preview--hidden")
    }
  }
}
