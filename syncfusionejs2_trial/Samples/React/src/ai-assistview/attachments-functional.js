"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var sample_base_1 = require("../common/sample-base");
require("./attachments.css");
var ej2_react_interactive_chat_1 = require("@syncfusion/ej2-react-interactive-chat");
var data = require("./promptResponseData.json");
var Attachments = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var promptsData = [
        {
            response: "Ask Questions, to better understand how your prompt interacts with AI-generated or default data responses..!"
        }
    ];
    var prompts = data["defaultPromptResponseData"];
    var suggestion = data["defaultSuggestions"];
    var toolbarItemClicked = function (args) {
        if (args.item.iconCss === 'e-icons e-refresh') {
            assistInstance.current.prompts = [];
            assistInstance.current.promptSuggestions = suggestion;
        }
    };
    var assistViewToolbarSettings = {
        items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
        itemClicked: toolbarItemClicked
    };
    var bannerTemplate = "<div class=\"banner-content\">\n        <div class=\"e-icons e-assistview-icon\"></div>\n        <h3>AI Assistance</h3>\n        <i>Type your message or attach files to get started.</i>\n    </div>";
    var attachmentSettings = {
        saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove'
    };
    var assistInstance = (0, react_1.useRef)(null);
    var promptRequest = function (args) {
        setTimeout(function () {
            var foundPrompt = prompts.find(function (promptObj) { return promptObj.prompt === args.prompt; });
            var defaultResponse = 'For real-time prompt processing, connect the AI AssistView control to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            assistInstance.current.addPromptResponse(foundPrompt ? foundPrompt.response : defaultResponse);
            assistInstance.current.promptSuggestions = (foundPrompt === null || foundPrompt === void 0 ? void 0 : foundPrompt.suggestions) || suggestion;
        }, 2000);
    };
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: "control-section" },
            React.createElement("div", { className: "attachment-aiassistview" },
                React.createElement(ej2_react_interactive_chat_1.AIAssistViewComponent, { id: "aiAssistView", promptSuggestions: suggestion, toolbarSettings: assistViewToolbarSettings, enableStreaming: true, promptRequest: promptRequest, ref: assistInstance, enableAttachments: true, attachmentSettings: attachmentSettings, bannerTemplate: bannerTemplate }))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This sample demonstrates how users can attach files while interacting with the AI AssistView. The control enables file uploads to enhance the context of conversations and responses.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null,
                "In this example, the ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview/#enableattachments" }, "enableAttachments"),
                " property is set to ",
                React.createElement("code", null, "true"),
                " to enable file attachments. By, using the ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview/#attachmentsettings" }, "attachmentSettings"),
                " configure the ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview/attachmentSettings/#saveurl" }, "saveUrl"),
                " and ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview/attachmentSettings/#removeurl" }, "removeUrl"),
                " to allow file uploads for the attached files. Additionally, the ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview/#bannertemplate" }, "bannerTemplate"),
                " customizes the banner message, and ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview/#toolbarsettings" }, "toolbarSettings"),
                " includes a right-aligned ",
                React.createElement("code", null, "Refresh"),
                " button. The ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview/#promptsuggestions" }, "promptSuggestions"),
                " feature offers suggested prompts, while ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview/#promptrequest" }, "promptRequest"),
                " handles user queries."))));
};
exports.default = Attachments;
