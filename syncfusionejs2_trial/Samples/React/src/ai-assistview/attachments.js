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
exports.Attachments = void 0;
var React = require("react");
var ej2_react_interactive_chat_1 = require("@syncfusion/ej2-react-interactive-chat");
var sample_base_1 = require("../common/sample-base");
var data = require("./promptResponseData.json");
require("./attachments.css");
var Attachments = /** @class */ (function (_super) {
    __extends(Attachments, _super);
    function Attachments() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.promptsData = [
            {
                response: "Ask Questions, to better understand how your prompt interacts with AI-generated or default data responses..!"
            }
        ];
        _this.prompts = data["defaultPromptResponseData"];
        _this.suggestion = data["defaultSuggestions"];
        _this.toolbarItemClicked = function (args) {
            if (args.item.iconCss === 'e-icons e-refresh') {
                _this.assistInstance.prompts = [];
                _this.assistInstance.promptSuggestions = _this.suggestion;
            }
        };
        _this.assistViewToolbarSettings = {
            items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
            itemClicked: _this.toolbarItemClicked
        };
        _this.bannerTemplate = "<div class=\"banner-content\">\n    <div class=\"e-icons e-assistview-icon\"></div>\n    <h3>AI Assistance</h3>\n    <i>Type your message or attach files to get started.</i>\n  </div>";
        _this.attachmentSettings = {
            saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save',
            removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove'
        };
        _this.promptRequest = function (args) {
            setTimeout(function () {
                var foundPrompt = _this.prompts.find(function (promptObj) { return promptObj.prompt === args.prompt; });
                var defaultResponse = 'For real-time prompt processing, connect the AI AssistView control to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
                _this.assistInstance.addPromptResponse(foundPrompt ? foundPrompt.response : defaultResponse);
                _this.assistInstance.promptSuggestions = (foundPrompt === null || foundPrompt === void 0 ? void 0 : foundPrompt.suggestions) || _this.suggestion;
            }, 2000);
        };
        return _this;
    }
    Attachments.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: "control-section" },
                React.createElement("div", { className: "attachment-aiassistview" },
                    React.createElement(ej2_react_interactive_chat_1.AIAssistViewComponent, { id: "aiAssistView", toolbarSettings: this.assistViewToolbarSettings, bannerTemplate: this.bannerTemplate, promptSuggestions: this.suggestion, enableStreaming: true, enableAttachments: true, attachmentSettings: this.attachmentSettings, promptRequest: this.promptRequest, ref: function (aiassistView) { return (_this.assistInstance = aiassistView); } }))),
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
    return Attachments;
}(sample_base_1.SampleBase));
exports.Attachments = Attachments;
