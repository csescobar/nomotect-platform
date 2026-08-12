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
exports.SmartPredictiveScheduling = void 0;
var React = require("react");
var sample_base_1 = require("../common/sample-base");
var SmartPredictiveScheduling = /** @class */ (function (_super) {
    __extends(SmartPredictiveScheduling, _super);
    function SmartPredictiveScheduling() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SmartPredictiveScheduling.prototype.render = function () {
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement("img", { src: 'src/ai-gantt/images/predictive-scheduling.gif', width: '100%', alt: "Showcase Text to MindMap Gif", height: '100%' })),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates the predictive scheduling feature in the Syncfusion React Gantt Chart. It showcases how AI is utilized to forecast and schedule tasks based on historical data. The Gantt Chart displays taskbars with baselines, representing both the predicted schedule and the actual task timelines. The AI-driven prediction uses five years of historical task data alongside the current year's tasks to generate a comprehensive and accurate schedule, allowing users to visualize potential project timelines and adjust accordingly."),
                React.createElement("p", null,
                    "To explore this and more Syncfusion React Smart AI integrations locally, check out our ",
                    React.createElement("a", { target: '_blank', href: 'https://github.com/syncfusion/smart-ai-samples/tree/master/react/', "aria-label": "Navigate to explore the syncfusion React AI Demos repository" }, "GitHub repository"),
                    ".")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "This action predicts and generates a task schedule by analyzing five years of historical ",
                    React.createElement("strong", null, "TaskCollection"),
                    " data along with the current year's ",
                    React.createElement("strong", null, "TaskCollection"),
                    ". The AI model processes this data to forecast future tasks, creating a predictive task collection. This collection is then visualized on the Gantt Chart, with baselines indicating the predicted start and end dates of each task, allowing users to compare the projected schedule with the actual progress."))));
    };
    return SmartPredictiveScheduling;
}(sample_base_1.SampleBase));
exports.SmartPredictiveScheduling = SmartPredictiveScheduling;
