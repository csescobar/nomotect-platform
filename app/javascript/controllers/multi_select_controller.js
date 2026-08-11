import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["dropdown", "hiddenContainer"]

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
    const isSelected = opt.getAttribute("aria-selected") === "true"

    if (isSelected) {
      this.deselectValue(val, opt)
    } else {
      this.selectValue(val, opt)
    }
  }

  selectValue(val, opt) {
    opt.setAttribute("aria-selected", "true")
    opt.classList.add("ui-multi-select__option--selected")

    const inputName = this.hiddenContainerTarget.querySelector("input[type='hidden']")?.name || "features[]"
    const hidden = document.createElement("input")
    hidden.type = "hidden"
    hidden.name = inputName
    hidden.value = val
    this.hiddenContainerTarget.appendChild(hidden)
  }

  deselectValue(val, opt) {
    if (opt) {
      opt.setAttribute("aria-selected", "false")
      opt.classList.remove("ui-multi-select__option--selected")
    }

    const hidden = this.hiddenContainerTarget.querySelector(`input[value='${val}']`)
    if (hidden) hidden.remove()
  }

  remove(event) {
    event.stopPropagation()
    const val = event.currentTarget.dataset.value
    const chip = event.currentTarget.closest(".ui-multi-select__chip")
    if (chip) chip.remove()

    const opt = this.dropdownTarget.querySelector(`[data-value='${val}']`)
    this.deselectValue(val, opt)
  }
}
