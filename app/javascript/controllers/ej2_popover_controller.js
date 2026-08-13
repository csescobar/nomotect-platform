import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["box"];

  toggle(event) {
    if (event) event.preventDefault();
    if (this.hasBoxTarget) {
      this.boxTarget.classList.toggle("hidden");
    }
  }
}
