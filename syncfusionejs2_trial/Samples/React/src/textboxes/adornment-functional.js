"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var sample_base_1 = require("../common/sample-base");
var ej2_react_inputs_1 = require("@syncfusion/ej2-react-inputs");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
require("./sample.css");
var Adornments = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var appendTextboxObj = (0, react_1.useRef)(null);
    var iconTextboxObj = (0, react_1.useRef)(null);
    var prependTemplate = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { value: 'Mr.', dataSource: ['Mr.', 'Mrs.'], width: '65px' })));
    };
    var appendTemplate = function () {
        var handleClick = function (e) {
            var textIcon = e.target;
            if (textIcon) {
                if (appendTextboxObj.current.type === 'text') {
                    appendTextboxObj.current.type = 'Password';
                    textIcon.className = 'e-icons e-eye-slash';
                }
                else {
                    appendTextboxObj.current.type = 'text';
                    textIcon.className = 'e-icons e-eye';
                }
            }
        };
        return (React.createElement(React.Fragment, null,
            React.createElement("span", { className: "e-input-separator" }),
            React.createElement("span", { id: "text-icon", className: "e-icons e-eye", onClick: handleClick })));
    };
    var prependIconTemplate = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("span", { className: "e-icons e-user" }),
            React.createElement("span", { className: "e-input-separator" })));
    };
    var appendIconTemplate = function () {
        var handleDeleteClick = function () {
            iconTextboxObj.current.value = '';
        };
        return (React.createElement(React.Fragment, null,
            React.createElement("span", null, ".com"),
            React.createElement("span", { className: "e-input-separator" }),
            React.createElement("span", { className: "e-icons e-trash", onClick: handleDeleteClick })));
    };
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: 'col-lg-12 control-section adornment-textbox' },
            React.createElement("div", { className: "content-wrapper sample-icon" },
                React.createElement("div", { className: "row" },
                    React.createElement(ej2_react_inputs_1.TextBoxComponent, { placeholder: "Enter your Name", cssClass: "e-prepend-textbox", floatLabelType: "Auto", prependTemplate: prependTemplate })),
                React.createElement("div", { className: "row" },
                    React.createElement(ej2_react_inputs_1.TextBoxComponent, { ref: appendTextboxObj, placeholder: "Password", cssClass: "e-outline", floatLabelType: "Auto", appendTemplate: appendTemplate })),
                React.createElement("div", { className: "row" },
                    React.createElement(ej2_react_inputs_1.TextBoxComponent, { ref: iconTextboxObj, placeholder: "Enter the Mail Address", cssClass: "e-outline e-icon-textbox", floatLabelType: "Auto", prependTemplate: prependIconTemplate, appendTemplate: appendIconTemplate })))),
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
exports.default = Adornments;
