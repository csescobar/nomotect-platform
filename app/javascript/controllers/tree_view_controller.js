import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  toggle(event) {
    const btn = event.currentTarget
    const item = btn.closest(".tree-view__item")
    const group = item?.querySelector(".tree-view__group")

    if (group) {
      const isHidden = group.classList.toggle("tree-view__group--hidden")
      item.setAttribute("aria-expanded", !isHidden)
      btn.textContent = isHidden ? "▶" : "▼"
    }
  }
}
