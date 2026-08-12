import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input", "hiddenInput", "calendar", "grid"]
  static values = { min: String, max: String }

  connect() {
    const val = this.hasInputTarget ? this.inputTarget.value : null
    const parsed = val ? new Date(val + "T00:00:00") : new Date()
    this.currentDate = isNaN(parsed.getTime()) ? new Date() : parsed
    this.viewYear = this.currentDate.getFullYear()
    this.viewMonth = this.currentDate.getMonth()
    this.selectedStr = val || ""

    this.boundClose = (e) => {
      if (!this.element.contains(e.target)) this.close()
    }
    document.addEventListener("click", this.boundClose)
    this.renderCalendar()
  }

  disconnect() {
    document.removeEventListener("click", this.boundClose)
  }

  open() {
    if (this.hasCalendarTarget) {
      this.renderCalendar()
      this.calendarTarget.classList.add("ui-date-picker__calendar--open")
    }
  }

  close() {
    if (this.hasCalendarTarget) {
      this.calendarTarget.classList.remove("ui-date-picker__calendar--open")
    }
  }

  prevMonth(e) {
    if (e) e.stopPropagation()
    this.viewMonth--
    if (this.viewMonth < 0) {
      this.viewMonth = 11
      this.viewYear--
    }
    this.renderCalendar()
  }

  nextMonth(e) {
    if (e) e.stopPropagation()
    this.viewMonth++
    if (this.viewMonth > 11) {
      this.viewMonth = 0
      this.viewYear++
    }
    this.renderCalendar()
  }

  selectDay(e) {
    e.stopPropagation()
    const dayStr = e.currentTarget.dataset.date
    if (!dayStr) return

    this.selectedStr = dayStr
    if (this.hasHiddenInputTarget) this.hiddenInputTarget.value = dayStr
    if (this.hasInputTarget) this.inputTarget.value = dayStr
    this.close()
  }

  renderCalendar() {
    if (!this.hasCalendarTarget) return

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]

    const firstDay = new Date(this.viewYear, this.viewMonth, 1).getDay()
    const daysInMonth = new Date(this.viewYear, this.viewMonth + 1, 0).getDate()

    let html = `
      <div class="ui-date-picker__header">
        <button type="button" class="ui-date-picker__nav-btn" data-action="click->date-picker#prevMonth">&larr;</button>
        <span class="ui-date-picker__month-title">${monthNames[this.viewMonth]} ${this.viewYear}</span>
        <button type="button" class="ui-date-picker__nav-btn" data-action="click->date-picker#nextMonth">&rarr;</button>
      </div>
      <div class="ui-date-picker__weekdays">
        ${dayNames.map(d => `<span class="ui-date-picker__weekday">${d}</span>`).join("")}
      </div>
      <div class="ui-date-picker__days">
    `

    for (let i = 0; i < firstDay; i++) {
      html += `<span class="ui-date-picker__day ui-date-picker__day--empty"></span>`
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const monthStr = String(this.viewMonth + 1).padStart(2, "0")
      const dayPad = String(d).padStart(2, "0")
      const dateStr = `${this.viewYear}-${monthStr}-${dayPad}`
      const isSelected = dateStr === this.selectedStr
      const isToday = dateStr === new Date().toISOString().split("T")[0]

      let cls = "ui-date-picker__day"
      if (isSelected) cls += " ui-date-picker__day--selected"
      if (isToday) cls += " ui-date-picker__day--today"

      html += `<button type="button" class="${cls}" data-date="${dateStr}" data-action="click->date-picker#selectDay">${d}</button>`
    }

    html += `</div>`
    this.calendarTarget.innerHTML = html
  }
}
