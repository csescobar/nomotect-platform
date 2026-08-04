// Registers the Syncfusion EJ2 license key before any EJ2 component is loaded.
// The key is injected server-side into window.SYNCFUSION_LICENSE_KEY by the
// application layout (config/initializers/syncfusion.rb → app/views/layouts/application.html.erb).
//
// This module must be imported once in application.js before any EJ2 import.
import { registerLicense } from "@syncfusion/ej2-base";

const key = window.SYNCFUSION_LICENSE_KEY || "";
if (key) {
  registerLicense(key);
}
