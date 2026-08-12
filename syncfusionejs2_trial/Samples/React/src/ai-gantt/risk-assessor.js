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
exports.SmartRiskAssessor = void 0;
var React = require("react");
var sample_base_1 = require("../common/sample-base");
var SmartRiskAssessor = /** @class */ (function (_super) {
    __extends(SmartRiskAssessor, _super);
    function SmartRiskAssessor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SmartRiskAssessor.prototype.render = function () {
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement("img", { src: 'src/ai-gantt/images/risk-assessor.gif', width: '100%', alt: "Showcase Text to MindMap Gif", height: '100%' })),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates how to identify tasks at risk based on their duration and dependencies within the React Gantt Chart. Tasks that are determined to be critical are highlighted by dynamically changing their taskbar colors, making it easy to visualize potential risks in your project timeline."),
                React.createElement("p", null,
                    "To explore this and more Syncfusion React Smart AI integrations locally, check out our ",
                    React.createElement("a", { target: '_blank', href: '', "aria-label": "Navigate to explore the syncfusion React AI Demos repository" }, "GitHub repository"),
                    ".")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null, "This action identifies tasks that are at risk by analyzing their duration and dependencies, then highlights these tasks by applying distinctive colors to their taskbars."))));
    };
    return SmartRiskAssessor;
}(sample_base_1.SampleBase));
exports.SmartRiskAssessor = SmartRiskAssessor;
