"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var sample_base_1 = require("../common/sample-base");
var ej2_react_inputs_1 = require("@syncfusion/ej2-react-inputs");
require("./sample.css");
var Adornments = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var prependTemplate = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("span", { className: "e-icons e-user" }),
            React.createElement("span", { className: "e-input-separator" })));
    };
    var appendTemplate = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("span", { className: "e-input-separator" }),
            React.createElement("span", { className: "e-icons e-send" })));
    };
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: "control-section" },
            React.createElement("div", { className: "content-wrapper" },
                React.createElement("div", { className: "mask-row" },
                    React.createElement(ej2_react_inputs_1.MaskedTextBoxComponent, { mask: '000-000-0000', promptChar: '#', cssClass: 'e-prepend-mask', placeholder: 'Enter phone number', floatLabelType: 'Auto', prependTemplate: prependTemplate, appendTemplate: appendTemplate })))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null,
                "This example highlights adornment support in the Syncfusion MaskedTextBox. Adornments let you place custom elements before or after the masked input by using the ",
                React.createElement("code", null, "prependTemplate"),
                " and ",
                React.createElement("code", null, "appendTemplate"),
                " properties such as prefixes, suffix labels, or action icons to provide context, guide entry, and offer quick actions, while preserving mask validation and float label behavior.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null, "This sample illustrates adornment integration in the Syncfusion MaskedTextBox via a prepended user icon and a appended send icon."))));
};
exports.default = Adornments;
