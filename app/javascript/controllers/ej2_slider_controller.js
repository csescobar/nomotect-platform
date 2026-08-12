import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["slider", "display"]
  static values = { min: Number, max: Number, step: Number, value: Number, disabled: Boolean }

  connect() {
    this.update()
  }

  update() {
    if (!this.hasSliderTarget) return

    const val = Number(this.sliderTarget.value)
    const min = this.hasMinValue ? this.minValue : Number(this.sliderTarget.min || 0)
    const max = this.hasMaxValue ? this.maxValue : Number(this.sliderTarget.max || 100)
    const pct = ((val - min) / (max - min)) * 100

    this.sliderTarget.style.setProperty("--slider-pct", `${pct}%`)

    if (this.hasDisplayTarget) {
      this.displayTarget.textContent = val.toString()
    }
  }
}
