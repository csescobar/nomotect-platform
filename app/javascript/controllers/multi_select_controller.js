import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["dropdown", "hiddenContainer", "chips"]

  connect() {
    this.boundClose = (e) => {
      if (!this.element.contains(e.target)) this.close()
    }
    document.addEventListener("click", this.boundClose)
  }

  disconnect() {
    document.removeEventListener("click", this.boundClose)
  }

  toggle() {
    this.dropdownTarget.classList.toggle("ui-multi-select__dropdown--open")
  }

  close() {
    this.dropdownTarget.classList.remove("ui-multi-select__dropdown--open")
  }

  select(event) {
    const opt = event.currentTarget
    const val = opt.dataset.value
    const label = opt.dataset.label || val
    const isSelected = opt.getAttribute("aria-selected") === "true"

    if (isSelected) {
      this.deselectValue(val, opt)
    } else {
      this.selectValue(val, label, opt)
    }
  }

  selectValue(val, label, opt) {
    opt.setAttribute("aria-selected", "true")
    opt.classList.add("ui-multi-select__option--selected")

    const hidden = document.createElement("input")
    hidden.type = "hidden"
    hidden.name = "showcase_tags[]"
    hidden.value = val
    this.hiddenContainerTarget.appendChild(hidden)

    if (this.hasChipsTarget) {
      const chip = document.createElement("span")
      chip.className = "ui-multi-select__chip"
      chip.innerHTML = `
        <span class="ui-multi-select__chip-label">${label}</span>
        <button type="button" class="ui-multi-select__chip-remove" aria-label="Remove ${label}" data-value="${val}" data-action="click->multi-select#remove">&times;</button>
      `
      this.chipsTarget.appendChild(chip)
    }
  }

  deselectValue(val, opt) {
    if (opt) {
      opt.setAttribute("aria-selected", "false")
      opt.classList.remove("ui-multi-select__option--selected")
    }

    const hidden = this.hiddenContainerTarget.querySelector(`input[value='${val}']`)
    if (hidden) hidden.remove()

    if (this.hasChipsTarget) {
      const chipBtn = this.chipsTarget.querySelector(`button[data-value='${val}']`)
      if (chipBtn) {
        chipBtn.closest(".ui-multi-select__chip")?.remove()
      }
    }
  }

  remove(event) {
    event.stopPropagation()
    const val = event.currentTarget.dataset.value
    const opt = this.dropdownTarget.querySelector(`[data-value='${val}']`)
    this.deselectValue(val, opt)
  }
}
