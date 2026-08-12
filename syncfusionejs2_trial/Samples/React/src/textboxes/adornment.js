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
    Adornments.prototype.handleClick = function (e) {
        var textIcon = e.target;
        if (textIcon) {
            if (this.appendTextboxObj.type === 'text') {
                this.appendTextboxObj.type = 'Password';
                textIcon.className = 'e-icons e-eye-slash';
            }
            else {
                this.appendTextboxObj.type = 'text';
                textIcon.className = 'e-icons e-eye';
            }
        }
    };
    Adornments.prototype.handleDeleteClick = function () {
        this.iconTextboxObj.value = '';
    };
    Adornments.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'col-lg-12 control-section adornment-textbox' },
                React.createElement("div", { className: "content-wrapper sample-icon" },
                    React.createElement("div", { className: "row" },
                        React.createElement(ej2_react_inputs_1.TextBoxComponent, { placeholder: "Enter your Name", cssClass: "e-prepend-textbox", floatLabelType: "Auto", prependTemplate: this.prependTemplate })),
                    React.createElement("div", { className: "row" },
                        React.createElement(ej2_react_inputs_1.TextBoxComponent, { ref: function (scope) { _this.appendTextboxObj = scope; }, placeholder: "Password", cssClass: "e-outline", floatLabelType: "Auto", appendTemplate: this.appendTemplate })),
                    React.createElement("div", { className: "row" },
                        React.createElement(ej2_react_inputs_1.TextBoxComponent, { ref: function (scope) { _this.iconTextboxObj = scope; }, placeholder: "Enter the Mail Address", cssClass: "e-outline e-icon-textbox", floatLabelType: "Auto", prependTemplate: this.prependIconTemplate, appendTemplate: this.appendIconTemplate })))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null,
                    " This example demonstrates the adornment capabilities of the Syncfusion TextBox component. Adornments are custom elements that can be added by using the ",
                    React.createElement("code", null, "prependTemplate"),
                    " and ",
                    React.createElement("code", null, "appendTemplate"),
                    " properties of the textbox to provide additional functionality or visual cues. This feature allows for enhanced user interaction, such as a dropdown for prefixes or clickable icons to toggle password visibility or clear input.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null, "This sample demonstrates the adornment feature of the Syncfusion React TextBox, showcasing how to integrate custom elements or icons at both the beginning and end of the input field"),
                React.createElement("ul", null,
                    React.createElement("li", null, "The first textbox illustrates a prepended dropdown for selecting titles (Mr., Mrs.)."),
                    React.createElement("li", null, "The second textbox features an appended eye icon, allowing users to toggle password visibility."),
                    React.createElement("li", null, "The third textbox combines a prepended user icon with an appended \".com\" text and a trash icon that clears the input when clicked.")),
                React.createElement("p", null, "These examples highlight the flexibility and enhanced user experience provided by TextBox adornments."))));
    };
    Adornments.prototype.prependTemplate = function () {
        return (React.createElement("div", null,
            React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { value: 'Mr.', dataSource: ['Mr.', 'Mrs.'], width: '65px' })));
    };
    Adornments.prototype.appendTemplate = function () {
        return (React.createElement("div", null,
            React.createElement("span", { className: "e-input-separator" }),
            React.createElement("span", { id: "text-icon", className: "e-icons e-eye", onClick: this.handleClick })));
    };
    Adornments.prototype.prependIconTemplate = function () {
        return (React.createElement("div", null,
            React.createElement("span", { className: "e-icons e-user" }),
            React.createElement("span", { className: "e-input-separator" })));
    };
    Adornments.prototype.appendIconTemplate = function () {
        return (React.createElement("div", null,
            React.createElement("span", null, ".com"),
            React.createElement("span", { className: "e-input-separator" }),
            React.createElement("span", { className: "e-icons e-trash", onClick: this.handleDeleteClick })));
    };
    return Adornments;
}(sample_base_1.SampleBase));
exports.Adornments = Adornments;
