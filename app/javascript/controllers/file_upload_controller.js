import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input", "previews"]

  handleChange() {
    const files = Array.from(this.inputTarget.files || [])
    if (!this.hasPreviewsTarget) return

    this.previewsTarget.innerHTML = files.map(file => `
      <div class="ui-file-upload__preview-item">
        <span class="ui-file-upload__preview-name">${this.escapeHtml(file.name)}</span>
        <span class="ui-file-upload__preview-size">${this.formatSize(file.size)}</span>
      </div>
    `).join("")
  }

  formatSize(bytes) {
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  }

  escapeHtml(str) {
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
  }
}
