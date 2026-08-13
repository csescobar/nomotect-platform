import { Controller } from "@hotwired/stimulus";
import { MultiSelect } from "@syncfusion/ej2-dropdowns";

export default class extends Controller {
  static targets = ["input"];

  connect() {
    this.#init();
  }

  disconnect() {
    if (!this.element.isConnected && this.multiselect) {
      this.multiselect.destroy();
      this.multiselect = null;
    }
  }

  #init() {
    if (this.multiselect) return;

    const input = this.hasInputTarget ? this.inputTarget : (this.element.querySelector("input") || this.element);
    const rawData = input.dataset.ej2TagInputDataSourceValue;
    const rawValues = input.dataset.ej2TagInputValuesValue;

    let dataSource = [];
    let values = [];

    if (rawData) {
      try { dataSource = JSON.parse(rawData); } catch (_e) { dataSource = []; }
    }
    if (rawValues) {
      try { values = JSON.parse(rawValues); } catch (_e) { values = []; }
    }

    this.multiselect = new MultiSelect({
      dataSource: dataSource,
      value: values,
      mode: "Box",
      placeholder: input.placeholder || "Add tags...",
      allowCustom: true,
      change: (args) => {
        this.element.dispatchEvent(new CustomEvent("ej2-tag-input:change", {
          bubbles: true,
          detail: { value: args.value }
        }));
      }
    });

    this.multiselect.appendTo(input);
  }
}
