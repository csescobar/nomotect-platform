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
    var iconNumericObj = (0, react_1.useRef)(null);
    var prepenNumericObj = (0, react_1.useRef)(null);
    var appendNumericObj = (0, react_1.useRef)(null);
    var onPriceChange = function () {
        appendNumericObj.current.value = prepenNumericObj.current.value * 5;
    };
    var onKgChange = function () {
        prepenNumericObj.current.value = appendNumericObj.current.value / 5;
    };
    var prependTemplate = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("span", { className: "e-icons e-menu" }),
            React.createElement("span", { className: "e-input-separator" }),
            React.createElement("span", { className: "e-icons e-search" }),
            React.createElement("span", { className: "e-input-separator" })));
    };
    var appendTemplate = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("span", null, "kg")));
    };
    var prependIconTemplate = function () {
        var handleResetClick = function () {
            iconNumericObj.current.value = null;
        };
        return (React.createElement(React.Fragment, null,
            React.createElement("span", { className: "e-icons e-reset", title: "Reset", onClick: handleResetClick }),
            React.createElement("span", { className: "e-input-separator" })));
    };
    var appendIconTemplate = function () {
        var handleSubractClick = function () {
            iconNumericObj.current.value = iconNumericObj.current.value - 1;
        };
        var handlePlusClick = function () {
            iconNumericObj.current.value = iconNumericObj.current.value + 1;
        };
        return (React.createElement(React.Fragment, null,
            React.createElement("span", { className: "e-input-separator" }),
            React.createElement("span", { className: "e-icons e-horizontal-line", onClick: handleSubractClick }),
            React.createElement("span", { className: "e-input-separator" }),
            React.createElement("span", { className: "e-icons e-plus", onClick: handlePlusClick })));
    };
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: "col-lg-12 control-section" },
            React.createElement("div", { className: "content-wrapper sample-numeric-icon" },
                React.createElement("div", { className: "row custom-margin" },
                    React.createElement(ej2_react_inputs_1.NumericTextBoxComponent, { ref: prepenNumericObj, floatLabelType: 'Auto', cssClass: 'e-prepend-numeric', value: 1, placeholder: 'Enter the price', prependTemplate: prependTemplate, change: onPriceChange })),
                React.createElement("div", { className: "row custom-margin" },
                    React.createElement(ej2_react_inputs_1.NumericTextBoxComponent, { ref: appendNumericObj, floatLabelType: 'Auto', step: 1, value: 5, placeholder: 'Enter the kg', appendTemplate: appendTemplate, change: onKgChange })),
                React.createElement("div", { className: "row custom-margin-row" },
                    React.createElement(ej2_react_inputs_1.NumericTextBoxComponent, { ref: iconNumericObj, floatLabelType: 'Auto', placeholder: 'Enter the Number', value: 10, showSpinButton: false, prependTemplate: prependIconTemplate, appendTemplate: appendIconTemplate })))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null,
                "This example highlights adornment support in the Syncfusion Numeric TextBox. Adornments let you place custom elements before or after the input by using the ",
                React.createElement("code", null, "prependTemplate"),
                " and ",
                React.createElement("code", null, "appendTemplate"),
                " properties of Numeric Textbox such as currency symbols, unit labels or action icons to provide context, trigger actions, and improve input clarity and efficiency.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null, "This sample demonstrates adornment support in the Syncfusion Numeric TextBox by adding custom elements or icons before and after the input. It includes prepended menu and search icons for price, an appended \u201Ckg\u201D label, and icon actions to reset, decrement, or increment values, with the first two fields synchronized."))));
};
exports.default = Adornments;
