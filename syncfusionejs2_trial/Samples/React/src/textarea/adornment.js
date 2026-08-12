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
var property_pane_1 = require("../common/property-pane");
var ej2_react_inputs_1 = require("@syncfusion/ej2-react-inputs");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var sample_base_1 = require("../common/sample-base");
require("./sample.css");
var Adornments = /** @class */ (function (_super) {
    __extends(Adornments, _super);
    function Adornments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Adornments.prototype.horizontalFlowChange = function (args) {
        this.textareaObj.adornmentFlow = args.value;
        this.textareaObj.appendTemplate = '<span class="e-input-separator"></span><span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span>';
    };
    Adornments.prototype.verticalFlowChange = function (args) {
        this.textareaObj.adornmentFlow = args.value;
        this.textareaObj.appendTemplate = '<span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span><span class="e-input-separator"></span>';
    };
    Adornments.prototype.horizontalOrentChange = function (args) {
        this.textareaObj.adornmentOrientation = args.value;
        this.textareaObj.appendTemplate = '<span class="e-input-separator"></span><span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span>';
    };
    Adornments.prototype.verticalOrentChange = function (args) {
        this.textareaObj.adornmentOrientation = args.value;
        this.textareaObj.appendTemplate = '<span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span><span class="e-input-separator"></span>';
    };
    Adornments.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement("div", { className: "col-lg-8 control-section multiline" },
                    React.createElement("div", { className: "content-wrapper" },
                        React.createElement("div", { className: "multiline-row" },
                            React.createElement(ej2_react_inputs_1.TextAreaComponent, { ref: function (scope) { _this.textareaObj = scope; }, cssClass: 'e-outline', placeholder: "Edit the Textarea", floatLabelType: "Auto", prependTemplate: this.prependTemplate, appendTemplate: this.appendTemplate })))),
                React.createElement("div", { className: "col-lg-4 property-section" },
                    React.createElement(property_pane_1.PropertyPane, { title: 'Properties' },
                        React.createElement("table", { id: "property", title: "Properties", className: "multiline-property" },
                            React.createElement("tbody", null,
                                React.createElement("tr", null,
                                    React.createElement("td", { className: "left-side" }, "Flow Direction"),
                                    React.createElement("td", null,
                                        React.createElement("div", null,
                                            React.createElement(ej2_react_buttons_1.RadioButtonComponent, { value: 'Horizontal', name: "flow", checked: true, change: this.horizontalFlowChange }),
                                            React.createElement(ej2_react_buttons_1.RadioButtonComponent, { value: 'Vertical', name: "flow", change: this.verticalFlowChange })))),
                                React.createElement("tr", null,
                                    React.createElement("td", { className: "left-side" }, "Orientation Direction"),
                                    React.createElement("td", null,
                                        React.createElement("div", null,
                                            React.createElement(ej2_react_buttons_1.RadioButtonComponent, { value: 'Horizontal', name: "orientation", checked: true, change: this.horizontalOrentChange }),
                                            React.createElement(ej2_react_buttons_1.RadioButtonComponent, { value: 'Vertical', name: "orientation", change: this.verticalOrentChange }))))))))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This example demonstrates the adornments enhance a textarea with prefix/suffix elements, icons, text, or buttons that provide context or quick actions. Flow and orientation can be configured for horizontal or vertical layouts.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "This sample showcases TextArea adornments using ",
                    React.createElement("code", null, "prependTemplate"),
                    " and ",
                    React.createElement("code", null, "appendTemplate"),
                    " to add bold/italic (prefix) and save/delete (suffix) icons. Radio buttons let you switch ",
                    React.createElement("code", null, "adornmentFlow"),
                    " and ",
                    React.createElement("code", null, "adornmentOrientation"),
                    " between Horizontal and Vertical, and the layout updates dynamically via dataBind."))));
    };
    Adornments.prototype.prependTemplate = function () {
        return (React.createElement("div", null,
            React.createElement("span", { className: "e-icons e-bold" }),
            React.createElement("span", { className: "e-input-separator" }),
            React.createElement("span", { className: "e-icons e-italic" }),
            React.createElement("span", { className: "e-input-separator" })));
    };
    Adornments.prototype.appendTemplate = function () {
        return (React.createElement("div", null,
            React.createElement("span", { className: "e-input-separator" }),
            React.createElement("span", { className: "e-icons e-save" }),
            React.createElement("span", { className: "e-input-separator" }),
            React.createElement("span", { className: "e-icons e-trash" })));
    };
    return Adornments;
}(sample_base_1.SampleBase));
exports.Adornments = Adornments;
