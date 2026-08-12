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
exports.GridAssistance = void 0;
var React = require("react");
var sample_base_1 = require("../common/sample-base");
var sample_base_2 = require("../common/sample-base");
var ai_grid_assistance_1 = require("./ai-grid-assistance");
/* custom code start*/
var ai_toast_1 = require("../common/ai-toast");
/* custom code end*/
var GridAssistance = /** @class */ (function (_super) {
    __extends(GridAssistance, _super);
    function GridAssistance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GridAssistance.prototype.componentDidMount = function () {
        (0, sample_base_2.updateAISampleSection)();
    };
    GridAssistance.prototype.render = function () {
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement(ai_grid_assistance_1.GridAIAssistance, null)),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null,
                    "This demo highlights the ",
                    React.createElement("b", null, "Syncfusion React DataGrid component"),
                    ", enhanced with conversational capabilities through the integrated ",
                    React.createElement("b", null, "Syncfusion React AI Assist View component"),
                    ". The grid data operations such as sorting, filtering, and searching can be performed using natural language input, offering a streamlined alternative to traditional UI interactions.")),
            React.createElement("div", { id: 'description' },
                React.createElement("p", null, "The Syncufusion React AI Assist View component is embedded directly within the grid interface, enabling intelligent prompt processing, contextual suggestions, and adaptive responses. This integration makes working with data in the grid easier, faster, and more natural, especially for handling complex datasets and enabling adaptable processes.")),
            React.createElement(ai_toast_1.default, null)));
    };
    return GridAssistance;
}(sample_base_1.SampleBase));
exports.GridAssistance = GridAssistance;
