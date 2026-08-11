import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["tab", "panel"]

  select(event) {
    const selectedTab = event.currentTarget
    const panelId = selectedTab.getAttribute("aria-controls")

    this.tabTargets.forEach(tab => {
      const isSelected = tab === selectedTab
      tab.setAttribute("aria-selected", isSelected)
      tab.setAttribute("tabindex", isSelected ? "0" : "-1")
      tab.classList.toggle("tabs__tab--active", isSelected)
    })

    this.panelTargets.forEach(panel => {
      const isActive = panel.id === panelId
      panel.setAttribute("aria-hidden", !isActive)
      panel.classList.toggle("tabs__panel--active", isActive)
      panel.classList.toggle("tabs__panel--hidden", !isActive)
    })
  }

  navigate(event) {
    const tabs = this.tabTargets
    const currentIndex = tabs.indexOf(event.currentTarget)

    let nextIndex
    if (event.key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % tabs.length
    } else if (event.key === "ArrowLeft") {
      nextIndex = (currentIndex - 1 + tabs.length) % tabs.length
    } else if (event.key === "Home") {
      nextIndex = 0
    } else if (event.key === "End") {
      nextIndex = tabs.length - 1
    } else {
      return
    }

    event.preventDefault()
    tabs[nextIndex].focus()
    tabs[nextIndex].click()
  }
}
