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
exports.SmartUMLSequenceDiagram = void 0;
var React = require("react");
var sample_base_1 = require("../common/sample-base");
var ai_text_to_umlSequenceDiagram_1 = require("./ai-text-to-umlSequenceDiagram");
/* custom code start*/
var ai_toast_1 = require("../common/ai-toast");
/* custom code end*/
var SmartUMLSequenceDiagram = /** @class */ (function (_super) {
    __extends(SmartUMLSequenceDiagram, _super);
    function SmartUMLSequenceDiagram() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SmartUMLSequenceDiagram.prototype.render = function () {
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement(ai_text_to_umlSequenceDiagram_1.default, null)),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This demo sample showcases the creation of a dynamic uml sequence diagram using the React Diagram component with the assistance of AI. The AI-powered diagram features nodes and connectors arranged in a uml sequence layout, designed to visually organize and represent ideas and concepts. This sample is ideal for brainstorming, organizing thoughts, and visually mapping out complex information."),
                React.createElement("p", null,
                    "To explore this and more Syncfusion React Smart AI integrations locally, check out our ",
                    React.createElement("a", { target: '_blank', href: 'https://github.com/syncfusion/smart-ai-samples/tree/master/react/', "aria-label": "Navigate to explore the syncfusion React AI Demos repository" }, "GitHub repository"),
                    ".")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null, "This sample leverages a specialized AI prompt, allowing users to generate the content of the diagram by submitting a prompt to OpenAI. The AI's response is parsed and transformed into nodes and connectors, visually representing the generated ideas or concepts in a uml sequence diagram format. Users can also manually add child nodes using user handles to further expand and customize the uml sequence diagram, creating an interactive and personalized experience.")),
            React.createElement(ai_toast_1.default, null)));
    };
    return SmartUMLSequenceDiagram;
}(sample_base_1.SampleBase));
exports.SmartUMLSequenceDiagram = SmartUMLSequenceDiagram;
