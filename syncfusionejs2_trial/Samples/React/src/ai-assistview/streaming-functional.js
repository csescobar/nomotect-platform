"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var sample_base_1 = require("../common/sample-base");
require("./streaming.css");
var ej2_react_interactive_chat_1 = require("@syncfusion/ej2-react-interactive-chat");
var data = require("./promptResponseData.json");
var Streaming = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var streamingAIAssistView = (0, react_1.useRef)(null);
    var bannerTemplate = "<div class=\"banner-content\">\n        <div class=\"e-icons e-assistview-icon\"></div>\n        <h3>AI Assistance</h3>\n        <i>To get started, provide input or choose a suggestion.</i>\n    </div>";
    var prompts = data["streamingPromptResponseData"];
    var suggestion = data["streamingSuggestions"];
    var toolbarItemClicked = function (args) {
        if (args.item.iconCss === 'e-icons e-refresh') {
            streamingAIAssistView.current.prompts = [];
            streamingAIAssistView.current.promptSuggestions = suggestion;
        }
    };
    var assistViewToolbarSettings = {
        items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
        itemClicked: toolbarItemClicked
    };
    var onPromptRequest = function (args) {
        var streamingResponse = prompts.find(function (data) { return data.prompt === args.prompt; });
        var defaultResponse = "For real-time prompt processing, connect the AI AssistView control to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.";
        if (streamingResponse) {
            streamingAIAssistView.current.addPromptResponse(streamingResponse.response, true);
            streamingAIAssistView.current.promptSuggestions = (streamingResponse === null || streamingResponse === void 0 ? void 0 : streamingResponse.suggestions) || suggestion;
        }
        else {
            streamingAIAssistView.current.addPromptResponse(defaultResponse, true);
            streamingAIAssistView.current.promptSuggestions = suggestion;
        }
    };
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: "control-section" },
            React.createElement("div", { className: "stream-aiassistview" },
                React.createElement(ej2_react_interactive_chat_1.AIAssistViewComponent, { id: "streamAssistView", ref: streamingAIAssistView, enableStreaming: true, promptSuggestions: suggestion, toolbarSettings: assistViewToolbarSettings, promptRequest: onPromptRequest, bannerTemplate: bannerTemplate }))),
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
exports.default = Streaming;
