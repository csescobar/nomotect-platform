import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input", "hiddenInput", "calendar"]
  static values = { min: String, max: String }

  connect() {
    const val = this.hasHiddenInputTarget && this.hiddenInputTarget.value ? this.hiddenInputTarget.value : null
    const parsed = val ? new Date(val + "T00:00:00") : new Date()
    this.currentDate = isNaN(parsed.getTime()) ? new Date() : parsed
    this.viewYear = this.currentDate.getFullYear()
    this.viewMonth = this.currentDate.getMonth()
    this.selectedIso = val || ""
    this.lang = document.documentElement.lang || "pt-BR"

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
    const isoStr = e.currentTarget.dataset.date
    if (!isoStr) return

    const [y, m, d] = isoStr.split("-").map(Number)
    const formatted = this.formatLocalDate(y, m - 1, d)

    this.selectedIso = isoStr
    if (this.hasHiddenInputTarget) this.hiddenInputTarget.value = isoStr
    if (this.hasInputTarget) this.inputTarget.value = formatted
    this.close()
  }

  formatLocalDate(year, monthIndex, day) {
    const dt = new Date(year, monthIndex, day)
    return new Intl.DateTimeFormat(this.lang, { day: "2-digit", month: "2-digit", year: "numeric" }).format(dt)
  }

  renderCalendar() {
    if (!this.hasCalendarTarget) return

    const sampleDate = new Date(this.viewYear, this.viewMonth, 1)
    const monthTitle = new Intl.DateTimeFormat(this.lang, { month: "long", year: "numeric" }).format(sampleDate)

    const dayFormatter = new Intl.DateTimeFormat(this.lang, { weekday: "narrow" })
    const dayNames = [0, 1, 2, 3, 4, 5, 6].map(d => {
      const temp = new Date(2026, 7, 2 + d) // Aug 2, 2026 is Sunday
      return dayFormatter.format(temp)
    })

    const firstDay = new Date(this.viewYear, this.viewMonth, 1).getDay()
    const daysInMonth = new Date(this.viewYear, this.viewMonth + 1, 0).getDate()

    let html = `
      <div class="ui-date-picker__header">
        <button type="button" class="ui-date-picker__nav-btn" data-action="click->date-picker#prevMonth">&larr;</button>
        <span class="ui-date-picker__month-title">${monthTitle}</span>
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
      const isSelected = dateStr === this.selectedIso
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
