"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adornments = void 0;
var React = require("react");
var ej2_react_inputs_1 = require("@syncfusion/ej2-react-inputs");
var sample_base_1 = require("../common/sample-base");
var property_pane_1 = require("../common/property-pane");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
require("./sample.css");
var Adornments = /** @class */ (function (_super) {
    __extends(Adornments, _super);
    function Adornments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Adornments.prototype.blurHandler = function () {
        var valueSpan = document.querySelector('#maskvalue');
        valueSpan.textContent = this.dropdownObj.value + ' ' + this.maskedObj.value;
    };
    Adornments.prototype.handleSendClick = function () {
        var valueSpan = document.querySelector('#maskvalue');
        valueSpan.textContent = this.dropdownObj.value + ' ' + this.maskedObj.value;
    };
    Adornments.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: "col-lg-8 control-section" },
                React.createElement("div", { className: "content-wrapper" },
                    React.createElement("div", { className: "mask-row" },
                        React.createElement(ej2_react_inputs_1.MaskedTextBoxComponent, { ref: function (scope) { _this.maskedObj = scope; }, mask: '000-000-0000', promptChar: '#', cssClass: 'e-prepend-mask', placeholder: 'Enter phone number', floatLabelType: 'Auto', prependTemplate: this.prependTemplate, appendTemplate: this.appendTemplate, blur: this.blurHandler })))),
            React.createElement("div", { className: "col-lg-4 property-section" },
                React.createElement(property_pane_1.PropertyPane, { title: 'Properties' },
                    React.createElement("table", { id: "property", title: "Properties", className: "multiline-property" },
                        React.createElement("tbody", null,
                            React.createElement("tr", null,
                                React.createElement("td", { className: "left-side" }, "Phone number: "),
                                React.createElement("td", null,
                                    React.createElement("span", { id: "maskvalue" }))))))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null,
                    "This example highlights adornment support in the Syncfusion MaskedTextBox. Adornments let you place custom elements before or after the masked input by using the ",
                    React.createElement("code", null, "prependTemplate"),
                    " and ",
                    React.createElement("code", null, "appendTemplate"),
                    " properties such as prefixes, suffix labels, or action icons to provide context, guide entry, and offer quick actions, while preserving mask validation and float label behavior.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null, "This sample illustrates adornment integration in the Syncfusion MaskedTextBox via a prefixed country-code selector and a suffixed send icon. Country selection (+91, +1, +44) triggers reactive mask reconfiguration for the phone field, while preserving float-label state, input-validation invariants, and a consistent interaction model."))));
    };
    Adornments.prototype.prependTemplate = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { ref: function (scope) { _this.dropdownObj = scope; }, value: '+91', dataSource: ['+91', '+1', '+44'], width: '60px' })));
    };
    Adornments.prototype.appendTemplate = function () {
        return (React.createElement("div", null,
            React.createElement("span", { className: "e-input-separator" }),
            React.createElement("span", { id: "sendIcon", className: "e-icons e-send", onClick: this.handleSendClick })));
    };
    return Adornments;
}(sample_base_1.SampleBase));
exports.Adornments = Adornments;
