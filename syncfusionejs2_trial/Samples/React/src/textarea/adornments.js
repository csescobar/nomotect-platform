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
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var sample_base_1 = require("../common/sample-base");
require("./sample.css");
var Adornments = /** @class */ (function (_super) {
    __extends(Adornments, _super);
    function Adornments() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rows = 5;
        _this.cols = 250;
        _this.flowOrientationData = ['Horizontal', 'Vertical'];
        _this.orientOrientationData = ['Horizontal', 'Vertical'];
        _this.handleflowOrientation = function (args) {
            _this.textareaObj.adornmentFlow = args.value;
            _this.textareaObj.appendTemplate = (args.value === 'Horizontal') ?
                '<span class="e-input-separator"></span><span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span>' :
                '<span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span><span class="e-input-separator"></span>';
            _this.textareaObj.dataBind();
        };
        _this.handleOrientOrientation = function (args) {
            _this.textareaObj.adornmentOrientation = args.value;
            _this.textareaObj.appendTemplate = (args.value === 'Horizontal') ?
                '<span class="e-input-separator"></span><span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span>' :
                '<span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span><span class="e-input-separator"></span>';
            _this.textareaObj.dataBind();
        };
        return _this;
    }
    Adornments.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement("div", { className: "col-lg-8 control-section multiline" },
                    React.createElement("div", { className: "content-wrapper" },
                        React.createElement("div", { className: "multiline-row e-textarea-adornments" },
                            React.createElement(ej2_react_inputs_1.TextAreaComponent, { ref: function (scope) { _this.textareaObj = scope; }, cssClass: 'e-outline', resizeMode: 'None', rows: this.rows, cols: this.cols, placeholder: "Add a comment", floatLabelType: "Auto", prependTemplate: this.prependTemplate, appendTemplate: this.appendTemplate })))),
                React.createElement("div", { className: "col-lg-4 property-section" },
                    React.createElement(property_pane_1.PropertyPane, { title: 'Properties' },
                        React.createElement("table", { id: "property", title: "Properties", className: "multiline-property" },
                            React.createElement("tbody", null,
                                React.createElement("tr", null,
                                    React.createElement("td", null, " Flow Direction "),
                                    React.createElement("td", null,
                                        React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { dataSource: this.flowOrientationData, index: 0, change: this.handleflowOrientation, popupHeight: '200px' }))),
                                React.createElement("tr", null,
                                    React.createElement("td", null, " Orientation Direction "),
                                    React.createElement("td", null,
                                        React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { dataSource: this.orientOrientationData, index: 0, change: this.handleOrientOrientation, popupHeight: '200px' })))))))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This example demonstrates the adornments enhance a textarea with prefix/suffix elements, icons, text, or buttons that provide context or quick actions. Flow and orientation can be configured for horizontal or vertical layouts.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "This sample showcases TextArea adornments using ",
                    React.createElement("code", null, "prependTemplate"),
                    " and ",
                    React.createElement("code", null, "appendTemplate"),
                    " to add bold/italic (prefix) and save/delete (suffix) icons. A DropDownList allows you to switch ",
                    React.createElement("code", null, "adornmentFlow"),
                    " and ",
                    React.createElement("code", null, "adornmentOrientation"),
                    " between Horizontal and Vertical, and the layout updates dynamically via dataBind whenever the selected option changes."))));
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
