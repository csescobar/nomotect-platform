import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input", "startHidden", "endHidden"]

  selectPreset(event) {
    const preset = event.currentTarget.dataset.preset
    const now = new Date()
    let startDate, endDate

    if (preset === "7_days") {
      endDate = new Date(now)
      startDate = new Date(now)
      startDate.setDate(now.getDate() - 7)
    } else if (preset === "this_month") {
      startDate = new Date(now.getFullYear(), now.getMonth(), 1)
      endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0)
    }

    if (startDate && endDate) {
      const startStr = startDate.toISOString().split("T")[0]
      const endStr = endDate.toISOString().split("T")[0]

      if (this.hasStartHiddenTarget) this.startHiddenTarget.value = startStr
      if (this.hasEndHiddenTarget) this.endHiddenTarget.value = endStr
      if (this.hasInputTarget) this.inputTarget.value = `${startStr} – ${endStr}`
    }
  }
}
