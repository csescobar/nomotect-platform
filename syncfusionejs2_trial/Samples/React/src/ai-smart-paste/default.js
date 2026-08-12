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
exports.Default = void 0;
var React = require("react");
var sample_base_1 = require("../common/sample-base");
var ai_default_1 = require("./ai-default");
/* custom code start*/
var ai_toast_1 = require("../common/ai-toast");
/* custom code end*/
var sample_base_2 = require("../common/sample-base");
var Default = /** @class */ (function (_super) {
    __extends(Default, _super);
    function Default() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Default.prototype.componentDidMount = function () {
        (0, sample_base_2.updateAISampleSection)();
    };
    Default.prototype.render = function () {
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement(ai_default_1.default, null)),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null,
                    "This example demonstrates how the ",
                    React.createElement("code", null, "SmartPasteButton"),
                    " component can automatically fill out forms using data from the user's clipboard."),
                React.createElement("p", null,
                    "To explore this and more Syncfusion React Smart AI integrations locally, check out our ",
                    React.createElement("a", { target: '_blank', href: 'https://github.com/syncfusion/smart-ai-samples/tree/master/react/ej2-react-ai-samples', "aria-label": "Navigate to explore the syncfusion React AI Demos repository" }, "GitHub repository"),
                    ".")),
            React.createElement("div", { id: 'description' },
                React.createElement("p", null, "In this example, clicking the Smart Paste button retrieves data from the clipboard and automatically fills in the form fields. This streamlines the data entry process by removing the need for manual input.")),
            React.createElement(ai_toast_1.default, null)));
    };
    return Default;
}(sample_base_1.SampleBase));
exports.Default = Default;
