import { Controller } from "@hotwired/stimulus";
import { createSpinner, showSpinner, hideSpinner } from "@syncfusion/ej2-popups";

export default class extends Controller {
  static values = {
    label:    { type: String, default: "" },
    size:     { type: String, default: "medium" },
    autoHide: { type: Number, default: 0 }
  };

  connect() {
    this.#init();
  }

  show() {
    showSpinner(this.element);
    if (this.autoHideValue > 0) {
      setTimeout(() => this.hide(), this.autoHideValue);
    }
  }

  hide() {
    hideSpinner(this.element);
  }

  #init() {
    const width = this.sizeValue === "small" ? "20px" : (this.sizeValue === "large" ? "48px" : "32px");
    createSpinner({
      target: this.element,
      label: this.labelValue,
      width: width
    });
    showSpinner(this.element);

    if (this.autoHideValue > 0) {
      setTimeout(() => this.hide(), this.autoHideValue);
    }
  }
}
