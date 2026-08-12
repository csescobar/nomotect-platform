"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var sample_base_1 = require("../common/sample-base");
var property_pane_1 = require("../common/property-pane");
var ej2_react_inputs_1 = require("@syncfusion/ej2-react-inputs");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
require("./sample.css");
var Adornments = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var rows = 5;
    var cols = 250;
    var flowOrientationData = ['Horizontal', 'Vertical'];
    var orientOrientationData = ['Horizontal', 'Vertical'];
    var textareaObj = (0, react_1.useRef)(null);
    var handleflowOrientation = function (args) {
        textareaObj.current.adornmentFlow = args.value;
        textareaObj.current.appendTemplate = (args.value === 'Horizontal') ?
            '<span class="e-input-separator"></span><span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span>' :
            '<span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span><span class="e-input-separator"></span>';
        textareaObj.current.dataBind();
    };
    var handleOrientOrientation = function (args) {
        textareaObj.current.adornmentOrientation = args.value;
        textareaObj.current.appendTemplate = (args.value === 'Horizontal') ?
            '<span class="e-input-separator"></span><span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span>' :
            '<span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span><span class="e-input-separator"></span>';
        textareaObj.current.dataBind();
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
                React.createElement("div", { className: "content-wrapper content-wrapper-adornments" },
                    React.createElement("div", { className: "multiline-row e-textarea-adornments" },
                        React.createElement(ej2_react_inputs_1.TextAreaComponent, { ref: textareaObj, cssClass: 'e-outline', resizeMode: 'None', rows: rows, cols: cols, placeholder: "Add a comment", floatLabelType: "Auto", prependTemplate: prependTemplate, appendTemplate: appendTemplate })))),
            React.createElement("div", { className: "col-lg-4 property-section" },
                React.createElement(property_pane_1.PropertyPane, { title: 'Properties' },
                    React.createElement("table", { id: "property", title: "Properties", className: "multiline-property" },
                        React.createElement("tbody", null,
                            React.createElement("tr", null,
                                React.createElement("td", null, " Flow Direction "),
                                React.createElement("td", null,
                                    React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { dataSource: flowOrientationData, index: 0, change: handleflowOrientation, popupHeight: '200px' }))),
                            React.createElement("tr", null,
                                React.createElement("td", null, " Orientation Direction "),
                                React.createElement("td", null,
                                    React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { dataSource: orientOrientationData, index: 0, change: handleOrientOrientation, popupHeight: '200px' })))))))),
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
exports.default = Adornments;
