import { Controller } from "@hotwired/stimulus";
import { Toast } from "@syncfusion/ej2-notifications";

export default class extends Controller {
  static values = {
    title:   { type: String, default: "" },
    content: { type: String, default: "" },
    type:    { type: String, default: "info" },
    timeout: { type: Number, default: 4000 }
  };

  connect() {
    this.#init();
  }

  disconnect() {
    if (!this.element.isConnected && this.toast) {
      this.toast.destroy();
      this.toast = null;
    }
  }

  showSuccess(event) {
    const msg = event?.params?.message || event?.currentTarget?.dataset?.ej2ToastMessageParam || "Operation successful!";
    this.show("Success", msg, "success");
  }

  showError(event) {
    const msg = event?.params?.message || event?.currentTarget?.dataset?.ej2ToastMessageParam || "An error occurred!";
    this.show("Error", msg, "danger");
  }

  showWarning(event) {
    const msg = event?.params?.message || event?.currentTarget?.dataset?.ej2ToastMessageParam || "Warning alert!";
    this.show("Warning", msg, "warning");
  }

  showInfo(event) {
    const msg = event?.params?.message || event?.currentTarget?.dataset?.ej2ToastMessageParam || "Information note";
    this.show("Info", msg, "info");
  }

  show(title, content, type = "info") {
    if (!this.toast) {
      const containerDiv = this.element.querySelector(".ej2-toast-container") || this.element;
      this.toast = new Toast({
        position: { X: "Right", Y: "Top" },
        timeOut: this.timeoutValue
      });
      this.toast.appendTo(containerDiv);
    }

    this.toast.show({
      title: title || this.titleValue,
      content: content || this.contentValue,
      cssClass: `e-toast-${type}`,
      timeOut: this.timeoutValue
    });
  }

  #init() {
    if (this.titleValue || this.contentValue) {
      this.show(this.titleValue, this.contentValue, this.typeValue);
    }
  }
}
