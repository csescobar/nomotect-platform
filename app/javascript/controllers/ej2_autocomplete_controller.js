import { Controller } from "@hotwired/stimulus";
import { AutoComplete } from "@syncfusion/ej2-dropdowns";

export default class extends Controller {
  static targets = ["input"];

  connect() {
    this.#init();
  }

  disconnect() {
    if (!this.element.isConnected && this.autocomplete) {
      this.autocomplete.destroy();
      this.autocomplete = null;
    }
  }

  #init() {
    if (this.autocomplete) return;

    const input = this.hasInputTarget ? this.inputTarget : (this.element.querySelector("input") || this.element);
    const rawData = input.dataset.ej2AutocompleteDataSourceValue;
    const minLength = parseInt(input.dataset.ej2AutocompleteMinLengthValue || "1", 10);

    let dataSource = [];
    if (rawData) {
      try {
        dataSource = JSON.parse(rawData);
      } catch (_e) {
        dataSource = [];
      }
    }

    this.autocomplete = new AutoComplete({
      dataSource: dataSource,
      placeholder: input.placeholder || "Search...",
      value: input.value || "",
      minLength: minLength,
      highlight: true,
      change: (args) => {
        this.element.dispatchEvent(new CustomEvent("ej2-autocomplete:change", {
          bubbles: true,
          detail: { value: args.value }
        }));
      }
    });

    this.autocomplete.appendTo(input);
  }
}
