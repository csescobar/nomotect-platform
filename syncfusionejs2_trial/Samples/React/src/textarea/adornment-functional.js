"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var sample_base_1 = require("../common/sample-base");
var property_pane_1 = require("../common/property-pane");
var ej2_react_inputs_1 = require("@syncfusion/ej2-react-inputs");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
require("./sample.css");
var Adornments = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var textareaObj = (0, react_1.useRef)(null);
    var horizontalFlowChange = function (args) {
        textareaObj.current.adornmentFlow = args.value;
        textareaObj.current.appendTemplate = '<span class="e-input-separator"></span><span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span>';
    };
    var verticalFlowChange = function (args) {
        textareaObj.current.adornmentFlow = args.value;
        textareaObj.current.appendTemplate = '<span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span><span class="e-input-separator"></span>';
    };
    var horizontalOrentChange = function (args) {
        textareaObj.current.adornmentOrientation = args.value;
        textareaObj.current.appendTemplate = '<span class="e-input-separator"></span><span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span>';
    };
    var verticalOrentChange = function (args) {
        textareaObj.current.adornmentOrientation = args.value;
        textareaObj.current.appendTemplate = '<span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span><span class="e-input-separator"></span>';
    };
    var prependTemplate = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("span", { className: "e-icons e-bold" }),
            React.createElement("span", { className: "e-input-separator" }),
            React.createElement("span", { className: "e-icons e-italic" }),
            React.createElement("span", { className: "e-input-separator" })));
    };
    var appendTemplate = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("span", { className: "e-input-separator" }),
            React.createElement("span", { className: "e-icons e-save" }),
            React.createElement("span", { className: "e-input-separator" }),
            React.createElement("span", { className: "e-icons e-trash" })));
    };
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: 'control-section' },
            React.createElement("div", { className: "col-lg-8 multiline" },
                React.createElement("div", { className: "content-wrapper" },
                    React.createElement("div", { className: "multiline-row" },
                        React.createElement(ej2_react_inputs_1.TextAreaComponent, { cssClass: 'e-outline', placeholder: "Edit the Textarea", floatLabelType: "Auto", prependTemplate: prependTemplate, appendTemplate: appendTemplate })))),
            React.createElement("div", { className: "col-lg-4 property-section" },
                React.createElement(property_pane_1.PropertyPane, { title: 'Properties' },
                    React.createElement("table", { id: "property", title: "Properties", className: "multiline-property" },
                        React.createElement("tbody", null,
                            React.createElement("tr", null,
                                React.createElement("td", { className: "left-side" }, "Flow Direction"),
                                React.createElement("td", null,
                                    React.createElement("div", null,
                                        React.createElement(ej2_react_buttons_1.RadioButtonComponent, { value: 'Horizontal', name: "flow", checked: true, change: horizontalFlowChange }),
                                        React.createElement(ej2_react_buttons_1.RadioButtonComponent, { value: 'Vertical', name: "flow", change: verticalFlowChange })))),
                            React.createElement("tr", null,
                                React.createElement("td", { className: "left-side" }, "Orientation Direction"),
                                React.createElement("td", null,
                                    React.createElement("div", null,
                                        React.createElement(ej2_react_buttons_1.RadioButtonComponent, { value: 'Horizontal', name: "orientation", checked: true, change: horizontalOrentChange }),
                                        React.createElement(ej2_react_buttons_1.RadioButtonComponent, { value: 'Vertical', name: "orientation", change: verticalOrentChange }))))))))),
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
exports.default = Adornments;
