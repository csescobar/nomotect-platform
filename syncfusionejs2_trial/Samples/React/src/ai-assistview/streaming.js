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
exports.Streaming = void 0;
var React = require("react");
require("./streaming.css");
var ej2_react_interactive_chat_1 = require("@syncfusion/ej2-react-interactive-chat");
var data = require("./promptResponseData.json");
var sample_base_1 = require("../common/sample-base");
var Streaming = /** @class */ (function (_super) {
    __extends(Streaming, _super);
    function Streaming() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bannerTemplate = "<div class=\"banner-content\">\n        <div class=\"e-icons e-assistview-icon\"></div>\n        <h3>AI Assistance</h3>\n        <i>To get started, provide input or choose a suggestion.</i>\n    </div>";
        _this.prompts = data["streamingPromptResponseData"];
        _this.suggestion = data["streamingSuggestions"];
        _this.toolbarItemClicked = function (args) {
            if (args.item.iconCss === 'e-icons e-refresh') {
                _this.streamingAIAssistView.prompts = [];
                _this.streamingAIAssistView.promptSuggestions = _this.suggestion;
            }
        };
        _this.assistViewToolbarSettings = {
            items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
            itemClicked: _this.toolbarItemClicked
        };
        _this.onPromptRequest = function (args) {
            var streamingResponse = _this.prompts.find(function (data) { return data.prompt === args.prompt; });
            var defaultResponse = "For real-time prompt processing, connect the AI AssistView control to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.";
            if (streamingResponse) {
                _this.streamingAIAssistView.addPromptResponse(streamingResponse.response, true);
                _this.streamingAIAssistView.promptSuggestions = (streamingResponse === null || streamingResponse === void 0 ? void 0 : streamingResponse.suggestions) || _this.suggestion;
            }
            else {
                _this.streamingAIAssistView.addPromptResponse(defaultResponse, true);
                _this.streamingAIAssistView.promptSuggestions = _this.suggestion;
            }
        };
        return _this;
    }
    Streaming.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: "control-section" },
                React.createElement("div", { className: "stream-aiassistview" },
                    React.createElement(ej2_react_interactive_chat_1.AIAssistViewComponent, { id: "streamAssistView", ref: function (aiassistView) { return (_this.streamingAIAssistView = aiassistView); }, enableStreaming: true, promptSuggestions: this.suggestion, toolbarSettings: this.assistViewToolbarSettings, promptRequest: this.onPromptRequest, bannerTemplate: this.bannerTemplate }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null,
                    "This sample demonstrates the streaming response update in the ",
                    React.createElement("code", null, "AI AssistView"),
                    " component.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    " In this example, the ",
                    React.createElement("code", null, "AI AssistView"),
                    " component dynamically updates responses in a streaming manner using the  ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview#addpromptresponse" }, "addPromptResponse"),
                    " method, while the  ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview#scrolltobottom" }, "scrollToBottom"),
                    " method ensures automatic scrolling. The  ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview#bannertemplate" }, "bannerTemplate"),
                    " allows customization of the banner content, and  ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview#toolbarsettings" }, "toolbarSettings"),
                    " enables custom toolbar items, including a right-aligned Refresh button. Additionally,  ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview#promptsuggestions" }, "promptSuggestions"),
                    " offers AI-generated prompt suggestions, while  ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview#promptrequest" }, "promptRequest"),
                    " processes prompt requests when triggered."),
                React.createElement("p", null,
                    "This implementation provides an interactive AI chat experience with real-time streaming updates, enhanced by built-in Markdown-to-HTML conversion using the syncfusion ",
                    React.createElement("code", null, "MarkdownConverter"),
                    "."))));
    };
    return Streaming;
}(sample_base_1.SampleBase));
exports.Streaming = Streaming;
