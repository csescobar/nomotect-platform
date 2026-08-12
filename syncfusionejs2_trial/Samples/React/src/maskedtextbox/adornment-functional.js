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
    var maskTextboxObj = (0, react_1.useRef)(null);
    var dropdownObj = (0, react_1.useRef)(null);
    var _a = (0, react_1.useState)(''), customValue = _a[0], setCustomValue = _a[1];
    var blurHandler = function () {
        setCustomValue(dropdownObj.current.value + ' ' + maskTextboxObj.current.value);
    };
    var prependTemplate = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { ref: dropdownObj, value: '+91', dataSource: ['+91', '+1', '+44'], width: '60px' })));
    };
    var appendTemplate = function () {
        var sendClick = function () {
            setCustomValue(dropdownObj.current.value + ' ' + maskTextboxObj.current.value);
        };
        return (React.createElement(React.Fragment, null,
            React.createElement("span", { className: "e-input-separator" }),
            React.createElement("span", { id: "sendIcon", className: "e-icons e-send", onClick: sendClick })));
    };
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: "col-lg-8 control-section" },
            React.createElement("div", { className: "content-wrapper" },
                React.createElement("div", { className: "mask-row" },
                    React.createElement(ej2_react_inputs_1.MaskedTextBoxComponent, { ref: maskTextboxObj, mask: '000-000-0000', promptChar: '#', cssClass: 'e-prepend-mask', placeholder: 'Enter phone number', floatLabelType: 'Auto', prependTemplate: prependTemplate, appendTemplate: appendTemplate, blur: blurHandler })))),
        React.createElement("div", { className: "col-lg-4 property-section" },
            React.createElement(property_pane_1.PropertyPane, { title: 'Properties' },
                React.createElement("table", { id: "property", title: "Properties", className: "multiline-property" },
                    React.createElement("tbody", null,
                        React.createElement("tr", null,
                            React.createElement("td", { className: "left-side" }, "Phone number: "),
                            React.createElement("td", null,
                                React.createElement("span", { id: "maskvalue" }, customValue))))))),
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
exports.default = Adornments;
