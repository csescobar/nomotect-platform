import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input", "startHidden", "endHidden", "calendar"]

  connect() {
    this.boundClose = (e) => {
      if (!this.element.contains(e.target)) this.close()
    }
    document.addEventListener("click", this.boundClose)
    const now = new Date()
    this.viewYear = now.getFullYear()
    this.viewMonth = now.getMonth()
    this.startDate = this.hasStartHiddenTarget ? this.startHiddenTarget.value : null
    this.endDate = this.hasEndHiddenTarget ? this.endHiddenTarget.value : null
    this.lang = document.documentElement.lang || "pt-BR"
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

    if (!this.startDate || (this.startDate && this.endDate)) {
      this.startDate = dayStr
      this.endDate = null
    } else if (this.startDate && !this.endDate) {
      if (dayStr < this.startDate) {
        this.endDate = this.startDate
        this.startDate = dayStr
      } else {
        this.endDate = dayStr
      }
      this.applyRange()
      this.close()
    }
    this.renderCalendar()
  }

  selectPreset(event) {
    event.stopPropagation()
    const preset = event.currentTarget.dataset.preset
    const now = new Date()
    let start, end

    if (preset === "7_days") {
      end = new Date(now)
      start = new Date(now)
      start.setDate(now.getDate() - 7)
    } else if (preset === "this_month") {
      start = new Date(now.getFullYear(), now.getMonth(), 1)
      end = new Date(now.getFullYear(), now.getMonth() + 1, 0)
    }

    if (start && end) {
      this.startDate = start.toISOString().split("T")[0]
      this.endDate = end.toISOString().split("T")[0]
      this.applyRange()
      this.close()
    }
  }

  formatLocalDate(isoStr) {
    if (!isoStr) return ""
    const [y, m, d] = isoStr.split("-").map(Number)
    const dt = new Date(y, m - 1, d)
    return new Intl.DateTimeFormat(this.lang, { day: "2-digit", month: "2-digit", year: "numeric" }).format(dt)
  }

  applyRange() {
    if (this.hasStartHiddenTarget) this.startHiddenTarget.value = this.startDate || ""
    if (this.hasEndHiddenTarget) this.endHiddenTarget.value = this.endDate || ""
    if (this.hasInputTarget && this.startDate && this.endDate) {
      const startFmt = this.formatLocalDate(this.startDate)
      const endFmt = this.formatLocalDate(this.endDate)
      this.inputTarget.value = `${startFmt} – ${endFmt}`
    }
  }

  renderCalendar() {
    if (!this.hasCalendarTarget) return

    const sampleDate = new Date(this.viewYear, this.viewMonth, 1)
    const monthTitle = new Intl.DateTimeFormat(this.lang, { month: "long", year: "numeric" }).format(sampleDate)

    const dayFormatter = new Intl.DateTimeFormat(this.lang, { weekday: "narrow" })
    const dayNames = [0, 1, 2, 3, 4, 5, 6].map(d => {
      const temp = new Date(2026, 7, 2 + d)
      return dayFormatter.format(temp)
    })

    const firstDay = new Date(this.viewYear, this.viewMonth, 1).getDay()
    const daysInMonth = new Date(this.viewYear, this.viewMonth + 1, 0).getDate()

    let html = `
      <div class="ui-date-picker__presets">
        <button type="button" class="ui-date-picker__preset-btn" data-preset="7_days" data-action="click->date-range-picker#selectPreset">7 dias</button>
        <button type="button" class="ui-date-picker__preset-btn" data-preset="this_month" data-action="click->date-range-picker#selectPreset">Este mês</button>
      </div>
      <div class="ui-date-picker__header">
        <button type="button" class="ui-date-picker__nav-btn" data-action="click->date-range-picker#prevMonth">&larr;</button>
        <span class="ui-date-picker__month-title">${monthTitle}</span>
        <button type="button" class="ui-date-picker__nav-btn" data-action="click->date-range-picker#nextMonth">&rarr;</button>
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

      const isStart = dateStr === this.startDate
      const isEnd = dateStr === this.endDate
      const inRange = this.startDate && this.endDate && dateStr > this.startDate && dateStr < this.endDate

      let cls = "ui-date-picker__day"
      if (isStart || isEnd) cls += " ui-date-picker__day--selected"
      if (inRange) cls += " ui-date-picker__day--in-range"

      html += `<button type="button" class="${cls}" data-date="${dateStr}" data-action="click->date-range-picker#selectDay">${d}</button>`
    }

    html += `</div>`
    this.calendarTarget.innerHTML = html
  }
}
