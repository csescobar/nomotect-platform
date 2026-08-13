import { Controller } from "@hotwired/stimulus";
import { Tooltip } from "@syncfusion/ej2-popups";

export default class extends Controller {
  static values = {
    content:  { type: String, default: "" },
    position: { type: String, default: "TopCenter" }
  };

  connect() {
    this.#init();
  }

  disconnect() {
    if (!this.element.isConnected && this.tooltip) {
      this.tooltip.destroy();
      this.tooltip = null;
    }
  }

  #init() {
    if (this.tooltip) return;

    const targetElement = this.element.querySelector("button, a, input, select, textarea, .button") || this.element;

    // Wrap content in a DOM Element node to bypass Syncfusion's string template compiler (eval/new Function) for CSP compliance
    const contentNode = document.createElement("span");
    contentNode.className = "ej2-tooltip__content-node";
    contentNode.textContent = this.contentValue;

    this.tooltip = new Tooltip({
      content: contentNode,
      position: this.positionValue,
      opensOn: "Hover"
    });

    this.tooltip.appendTo(targetElement);
  }
}
