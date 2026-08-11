import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input", "container", "hiddenContainer"]

  add(event) {
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault()
      const val = this.inputTarget.value.trim().replace(/,/g, "")
      if (val) {
        this.appendTag(val)
        this.inputTarget.value = ""
      }
    } else if (event.key === "Backspace" && this.inputTarget.value === "") {
      const lastTag = this.containerTarget.querySelector(".ui-tag-input__tag:last-of-type")
      if (lastTag) {
        const removeBtn = lastTag.querySelector(".ui-tag-input__remove")
        if (removeBtn) removeBtn.click()
      }
    }
  }

  appendTag(val) {
    const inputName = this.element.querySelector("input[type='hidden']")?.name || "tags[]"

    // Append hidden input
    const hidden = document.createElement("input")
    hidden.type = "hidden"
    hidden.name = inputName
    hidden.value = val
    this.hiddenContainerTarget.appendChild(hidden)

    // Append visual tag chip
    const tagEl = document.createElement("span")
    tagEl.className = "ui-tag-input__tag"
    tagEl.innerHTML = `<span class="ui-tag-input__tag-label">${this.escapeHtml(val)}</span>
      <button type="button" class="ui-tag-input__remove" aria-label="Remove tag ${this.escapeHtml(val)}">×</button>`

    tagEl.querySelector(".ui-tag-input__remove").addEventListener("click", () => {
      hidden.remove()
      tagEl.remove()
    })

    this.containerTarget.insertBefore(tagEl, this.inputTarget)
  }

  remove(event) {
    const btn = event.currentTarget
    const val = btn.dataset.value
    const tagEl = btn.closest(".ui-tag-input__tag")

    if (tagEl) tagEl.remove()

    if (val) {
      const hiddenInputs = this.hiddenContainerTarget.querySelectorAll("input[type='hidden']")
      hiddenInputs.forEach(input => {
        if (input.value === val) input.remove()
      })
    }
  }

  escapeHtml(str) {
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
  }
}
