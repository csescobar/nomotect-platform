import { Controller } from "@hotwired/stimulus";
import { TextBox } from "@syncfusion/ej2-inputs";

export default class extends Controller {
  static values = {
    placeholder: { type: String, default: "" },
    value:       { type: String, default: "" },
    readonly:    { type: Boolean, default: false }
  };

  connect() {
    this.#init();
  }

  disconnect() {
    if (!this.element.isConnected && this.textbox) {
      this.textbox.destroy();
      this.textbox = null;
    }
  }

  #init() {
    if (this.textbox) return;

    const input = this.element.querySelector("input") || this.element;

    this.textbox = new TextBox({
      placeholder:   this.placeholderValue,
      value:         this.valueValue,
      readonly:      this.readonlyValue,
      floatLabelType: "Auto"
    });

    this.textbox.appendTo(input);
  }
}
