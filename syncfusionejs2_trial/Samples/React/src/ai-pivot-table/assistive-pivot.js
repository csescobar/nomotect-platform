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
exports.AssistivePivot = void 0;
var React = require("react");
var sample_base_1 = require("../common/sample-base");
var sample_base_2 = require("../common/sample-base");
var ai_assistive_pivot_1 = require("./frontend/ai-assistive-pivot");
/* custom code start*/
var ai_toast_1 = require("../common/ai-toast");
/* custom code end*/
var AssistivePivot = /** @class */ (function (_super) {
    __extends(AssistivePivot, _super);
    function AssistivePivot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AssistivePivot.prototype.componentDidMount = function () {
        (0, sample_base_2.updateAISampleSection)();
    };
    AssistivePivot.prototype.render = function () {
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement(ai_assistive_pivot_1.AIAssistivePivot, null)),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null,
                    "This demo showcases the ",
                    React.createElement("strong", null, "Syncfusion React Pivot Table"),
                    " enhanced with our ",
                    React.createElement("strong", null, "Syncfusion React AI AssistView"),
                    ", allowing you to perform complex data operations using natural language. Streamline your workflow by asking the component to sort, filter, drill down, add calculated fields, or apply conditional formatting\u2014bypassing traditional UI interactions for faster analysis."),
                React.createElement("p", null,
                    "To explore more ",
                    React.createElement("strong", null, "Syncfusion React Smart AI"),
                    " integrations locally, check out our ",
                    React.createElement("a", { href: "https://github.com/syncfusion/smart-ai-samples/tree/master/react", target: "_blank", rel: "noopener noreferrer", "aria-label": "Open the Syncfusion Smart AI samples GitHub repository for React in a new tab" }, " React AI Demos on GitHub "),
                    ".")),
            React.createElement("div", { id: 'description' },
                React.createElement("p", null,
                    "The ",
                    React.createElement("strong", null, "Syncfusion React AI AssistView"),
                    " component is embedded directly within the Pivot Table interface, transforming data analysis. Through intelligent prompt processing, this integration empowers users to conversationally manage and visualize complex data faster than ever before."),
                React.createElement("p", null, "Key capabilities include:"),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement("strong", null, "Manage Pivot Fields:"),
                        " Use natural language to set rows, columns, values, and filters."),
                    React.createElement("li", null,
                        React.createElement("strong", null, "Advanced Filtering:"),
                        " Apply member, label, and value-based filters with simple commands."),
                    React.createElement("li", null,
                        React.createElement("strong", null, "Dynamic Sorting:"),
                        " Configure both standard and value-based sorting on the fly."),
                    React.createElement("li", null,
                        React.createElement("strong", null, "Data Views:"),
                        " Expand or collapse fields, including individual drilled members."),
                    React.createElement("li", null,
                        React.createElement("strong", null, "Calculated Fields:"),
                        " Define custom fields and formulas without complex syntax."),
                    React.createElement("li", null,
                        React.createElement("strong", null, "Totals and Formatting:"),
                        " Toggle grand totals and subtotals, and manage conditional formatting rules."),
                    React.createElement("li", null,
                        React.createElement("strong", null, "Chart Integration:"),
                        " Switch chart types while keeping display options synchronized.")),
                React.createElement("p", null,
                    "By combining ",
                    React.createElement("strong", null, "conversational AI"),
                    " with the Pivot Table\u2019s multidimensional analysis, this solution simplifies workflows, making interactive reporting more intuitive, powerful, and highly adaptable.")),
            React.createElement(ai_toast_1.default, null)));
    };
    return AssistivePivot;
}(sample_base_1.SampleBase));
exports.AssistivePivot = AssistivePivot;
