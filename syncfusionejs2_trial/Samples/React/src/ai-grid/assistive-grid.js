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
exports.AssistiveGrid = void 0;
var React = require("react");
var sample_base_1 = require("../common/sample-base");
var sample_base_2 = require("../common/sample-base");
var ai_assistive_grid_1 = require("./frontend/ai-assistive-grid");
/* custom code start*/
var ai_toast_1 = require("../common/ai-toast");
/* custom code end*/
var AssistiveGrid = /** @class */ (function (_super) {
    __extends(AssistiveGrid, _super);
    function AssistiveGrid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AssistiveGrid.prototype.componentDidMount = function () {
        (0, sample_base_2.updateAISampleSection)();
    };
    AssistiveGrid.prototype.render = function () {
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement(ai_assistive_grid_1.AIAssistiveGrid, null)),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null,
                    "This demo showcases the ",
                    React.createElement("b", null, "Syncfusion React DataGrid component"),
                    ", enhanced with conversational capabilities through the integrated Syncfusion React AI AssistView component. Grid data operations, such as sorting, filtering, paging and grouping, can be performed using natural language input, offering a streamlined alternative to traditional UI interactions."),
                React.createElement("p", null,
                    "To explore this and more Syncfusion React Smart AI integrations locally, check out our ",
                    React.createElement("a", { target: '_blank', href: 'https://github.com/syncfusion/smart-ai-samples/tree/master/react/src/ai-components/grid/assistive-grid', "aria-label": "Navigate to explore the syncfusion React AI Demos repository" }, "GitHub repository"),
                    ".")),
            React.createElement("div", { id: 'description' },
                React.createElement("p", null, "The Syncfusion React AI AssistView component is embedded directly within the grid interface, enabling intelligent prompt processing, contextual suggestions, and adaptive responses. This integration streamlines data management in the grid, making the process faster and intuitive, especially when working with complex datasets and adaptable workflows."),
                React.createElement("p", null,
                    "Looking for the full React Data Grid component overview, features, pricing, and documentation? Visit our",
                    React.createElement("a", { target: "_blank", href: "https://www.syncfusion.com/react-components/react-data-grid" }, " React Data Grid component"),
                    " page.")),
            React.createElement(ai_toast_1.default, null)));
    };
    return AssistiveGrid;
}(sample_base_1.SampleBase));
exports.AssistiveGrid = AssistiveGrid;
