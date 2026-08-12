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
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
require("./sample.css");
var Adornments = /** @class */ (function (_super) {
    __extends(Adornments, _super);
    function Adornments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Adornments.prototype.priceChange = function () {
        this.appendNumericObj.value = this.prependNumericObj.value * 5;
    };
    Adornments.prototype.kgChange = function () {
        this.prependNumericObj.value = this.appendNumericObj.value / 5;
    };
    Adornments.prototype.handleResetClick = function () {
        this.iconNumericObj.value = 0;
    };
    Adornments.prototype.handleSubractClick = function () {
        this.iconNumericObj.value = this.iconNumericObj.value - 1;
    };
    Adornments.prototype.handlePlusClick = function () {
        this.iconNumericObj.value = this.iconNumericObj.value + 1;
    };
    Adornments.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: "col-lg-12 control-section" },
                React.createElement("div", { className: "content-wrapper sample-numeric-icon" },
                    React.createElement("div", { className: "row custom-margin" },
                        React.createElement(ej2_react_inputs_1.NumericTextBoxComponent, { ref: function (scope) { _this.prependNumericObj = scope; }, floatLabelType: 'Auto', cssClass: 'e-prepend-numeric', value: 1, placeholder: 'Enter the price', prependTemplate: this.prependTemplate, change: this.priceChange })),
                    React.createElement("div", { className: "row custom-margin" },
                        React.createElement(ej2_react_inputs_1.NumericTextBoxComponent, { ref: function (scope) { _this.appendNumericObj = scope; }, floatLabelType: 'Auto', cssClass: 'e-outline', step: 1, value: 5, placeholder: 'Enter the kg', appendTemplate: this.appendTemplate, change: this.kgChange })),
                    React.createElement("div", { className: "row custom-margin-row" },
                        React.createElement(ej2_react_inputs_1.NumericTextBoxComponent, { ref: function (scope) { _this.iconNumericObj = scope; }, floatLabelType: 'Auto', cssClass: 'e-filled', placeholder: 'Enter the Number', value: 10, showSpinButton: false, prependTemplate: this.prependIconTemplate, appendTemplate: this.appendIconTemplate })))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null,
                    "This example highlights adornment support in the Syncfusion Numeric TextBox. Adornments let you place custom elements before or after the input by using the ",
                    React.createElement("code", null, "prependTemplate"),
                    " and ",
                    React.createElement("code", null, "appendTemplate"),
                    " properties of Numeric Textbox such as currency symbols, unit labels, dropdowns, or action icons to provide context, trigger actions, and improve input clarity and efficiency.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null, "This sample demonstrates adornment support in the Syncfusion Numeric TextBox by adding custom elements or icons before and after the input. It includes a prepended currency dropdown for price, an appended \u201Ckg\u201D label, and icon actions to reset, decrement, or increment values, with the first two fields synchronized."))));
    };
    Adornments.prototype.prependTemplate = function () {
        return (React.createElement("div", null,
            React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { value: '$', dataSource: ['$', '€', '₹'], width: '60px' })));
    };
    Adornments.prototype.appendTemplate = function () {
        return (React.createElement("div", null,
            React.createElement("span", null, "kg")));
    };
    Adornments.prototype.prependIconTemplate = function () {
        return (React.createElement("div", null,
            React.createElement("span", { className: "e-icons e-reset", title: "Reset", onClick: this.handleResetClick }),
            React.createElement("span", { className: "e-input-separator" })));
    };
    Adornments.prototype.appendIconTemplate = function () {
        return (React.createElement("div", null,
            React.createElement("span", { className: "e-input-separator" }),
            React.createElement("span", { className: "e-icons e-horizontal-line", onClick: this.handleSubractClick }),
            React.createElement("span", { className: "e-input-separator" }),
            React.createElement("span", { className: "e-icons e-plus", onClick: this.handlePlusClick })));
    };
    return Adornments;
}(sample_base_1.SampleBase));
exports.Adornments = Adornments;
