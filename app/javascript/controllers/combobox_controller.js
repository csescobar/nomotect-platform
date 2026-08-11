import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input", "hiddenInput", "listbox"]

  connect() {
    this.boundClose = this.closeOnOutsideClick.bind(this)
    document.addEventListener("click", this.boundClose)
  }

  disconnect() {
    document.removeEventListener("click", this.boundClose)
  }

  open() {
    this.inputTarget.setAttribute("aria-expanded", "true")
    this.listboxTarget.classList.add("ui-combobox__listbox--open")
  }

  close() {
    this.inputTarget.setAttribute("aria-expanded", "false")
    this.listboxTarget.classList.remove("ui-combobox__listbox--open")
  }

  closeOnOutsideClick(event) {
    if (!this.element.contains(event.target)) {
      this.close()
    }
  }

  filter() {
    this.open()
    const query = this.inputTarget.value.toLowerCase().trim()
    const options = this.listboxTarget.querySelectorAll("[role='option']")

    options.forEach(opt => {
      const label = opt.textContent.toLowerCase()
      opt.hidden = query !== "" && !label.includes(query)
    })
  }

  select(event) {
    const selectedOpt = event.currentTarget
    const val = selectedOpt.dataset.value
    const label = selectedOpt.textContent.trim()

    this.hiddenInputTarget.value = val
    this.inputTarget.value = label

    this.listboxTarget.querySelectorAll("[role='option']").forEach(opt => {
      const isSelected = opt === selectedOpt
      opt.setAttribute("aria-selected", isSelected)
      opt.classList.toggle("ui-combobox__option--selected", isSelected)
    })

    this.close()
  }

  navigate(event) {
    const visibleOptions = [...this.listboxTarget.querySelectorAll("[role='option']:not([hidden])")]
    if (!visibleOptions.length) return

    const focused = document.activeElement
    const currentIndex = visibleOptions.indexOf(focused)

    if (event.key === "ArrowDown") {
      event.preventDefault()
      this.open()
      visibleOptions[(currentIndex + 1) % visibleOptions.length]?.focus()
    } else if (event.key === "ArrowUp") {
      event.preventDefault()
      visibleOptions[(currentIndex - 1 + visibleOptions.length) % visibleOptions.length]?.focus()
    } else if (event.key === "Escape") {
      this.close()
    }
  }
}
