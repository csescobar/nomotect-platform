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
exports.GeminiClone = void 0;
var React = require("react");
var ej2_react_interactive_chat_1 = require("@syncfusion/ej2-react-interactive-chat");
var ej2_buttons_1 = require("@syncfusion/ej2-buttons");
var ej2_splitbuttons_1 = require("@syncfusion/ej2-splitbuttons");
var sample_base_1 = require("../common/sample-base");
var data = require("./promptResponseData.json");
require("./gemini-clone.css");
var GeminiClone = /** @class */ (function (_super) {
    __extends(GeminiClone, _super);
    function GeminiClone() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prompts = data["geminiPromptResponseData"];
        _this.isFirstPrompt = true;
        _this.currentModel = 'Fast';
        _this.bannerTemplate = "<div class=\"banner-content\">\n    <div class=\"gemini-header\">\n      <h3>Meet Gemini, your personal AI assistant</h3>\n    </div>\n  </div>";
        _this.footerToolbarSettings = {
            toolbarPosition: 'Bottom',
            items: [
                { iconCss: 'e-icons e-assist-attachment-icon', align: 'Left' },
                { align: 'Right', template: '<button id="custombtn">Fast</button>' },
                { iconCss: 'e-icons e-assist-speech-to-text', align: 'Right' }
            ]
        };
        _this.attachmentSettings = {
            saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save',
            removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove'
        };
        _this.speechToTextSettings = { enable: true };
        // Mirrors the TS `created()` — footer DOM is ready, #custombtn exists.
        _this.onAssistCreated = function () {
            _this.initializeModelDropdown();
            _this.toggleButtons();
        };
        _this.promptRequest = function (args) {
            if (_this.isFirstPrompt && _this.geminiContainer) {
                _this.geminiContainer.classList.remove('middle-footer');
                _this.geminiContainer.classList.add('bottom-footer');
                _this.isFirstPrompt = false;
            }
            setTimeout(function () {
                var foundPrompt = _this.prompts.find(function (p) { return p.prompt === args.prompt; });
                var response = foundPrompt
                    ? foundPrompt.response
                    : 'This is a placeholder Gemini-style response. Connect to an LLM service for real output.';
                _this.assistInstance.addPromptResponse(response);
                _this.toggleButtons();
            }, 1200);
        };
        _this.promptChanged = function () {
            _this.toggleButtons();
        };
        _this.toggleButtons = function () {
            var _a;
            var sendBtn = (_a = _this.assistInstance.element.querySelector('.e-assist-send')) === null || _a === void 0 ? void 0 : _a.parentElement;
            var audioBtn = _this.assistInstance.element.querySelector('.e-assistview-speech-to-text');
            var hasPrompt = _this.assistInstance.prompt &&
                _this.assistInstance.prompt
                    .replace(/<br\s*\/?>/gi, '')
                    .replace(/&nbsp;/gi, '')
                    .replace(/\s+/g, '')
                    .trim();
            if (hasPrompt) {
                if (sendBtn)
                    sendBtn.style.display = 'block';
                if (audioBtn)
                    audioBtn.style.display = 'none';
            }
            else {
                if (sendBtn)
                    sendBtn.style.display = 'none';
                if (audioBtn)
                    audioBtn.style.display = 'block';
            }
        };
        _this.initializeModelDropdown = function () {
            var items = [
                { text: 'Fast', description: 'Answers quickly' },
                { text: 'Thinking', description: 'Solve complex problems' },
                { text: 'Pro', description: 'Advanced maths and code with 3.1 Pro' }
            ];
            var btnElem = document.getElementById('custombtn');
            if (btnElem) {
                var dropdown = new ej2_splitbuttons_1.DropDownButton({
                    items: items,
                    cssClass: 'e-flat gemini_model',
                    beforeItemRender: function (args) {
                        var item = args.item;
                        args.element.innerHTML = "\n            <div class=\"model-item\">\n              <div class=\"model-content\">\n                <div class=\"model-name\">".concat(item.text, "</div>\n                <div class=\"model-description\">").concat(item.description, "</div>\n              </div>\n            </div>");
                        if (_this.currentModel === item.text) {
                            args.element.classList.add('e-selected');
                        }
                    },
                    select: function (args) {
                        _this.currentModel = args.item.text;
                        _this.modelDropdown.content = args.item.text;
                    }
                });
                dropdown.appendTo(btnElem);
                _this.modelDropdown = dropdown;
            }
        };
        _this.initializeActionButtons = function () {
            var buttons = [
                { id: 'imgBtn', icon: 'e-icons e-image' },
                { id: 'iplBtn', icon: 'e-icons e-callout' },
                { id: 'musicBtn', icon: 'e-icons e-play' },
                { id: 'writeBtn', icon: '' }
            ];
            buttons.forEach(function (btn) {
                var element = document.getElementById(btn.id);
                if (element)
                    new ej2_buttons_1.Button({ iconCss: btn.icon }).appendTo(element);
            });
        };
        return _this;
    }
    GeminiClone.prototype.componentDidMount = function () {
        this.geminiContainer = document.getElementById('geminiContainer');
        if (this.geminiContainer) {
            this.geminiContainer.classList.add('middle-footer');
        }
        this.initializeActionButtons();
    };
    GeminiClone.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: "control-section gemini-clone" },
                React.createElement("div", { className: "gemini-aiassist", id: "geminiContainer" },
                    React.createElement(ej2_react_interactive_chat_1.AIAssistViewComponent, { id: "gemini_aiassistview", promptRequest: this.promptRequest, promptChanged: this.promptChanged, showHeader: false, promptPlaceholder: "Ask Gemini", enableAttachments: true, enableStreaming: true, speechToTextSettings: this.speechToTextSettings, bannerTemplate: this.bannerTemplate, footerToolbarSettings: this.footerToolbarSettings, attachmentSettings: this.attachmentSettings, created: this.onAssistCreated, ref: function (assist) { return (_this.assistInstance = assist); } }),
                    React.createElement("div", { id: "buttonsContainer", className: "gemini-buttons-container" },
                        React.createElement("button", { id: "imgBtn" }, "Create image"),
                        React.createElement("button", { id: "iplBtn" }, "Follow IPL"),
                        React.createElement("button", { id: "musicBtn" }, "Create Music"),
                        React.createElement("button", { id: "writeBtn" }, "Write anything")))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates a Gemini-inspired AI AssistView with voice input, file attachments, and a model selector for interactive assistant experiences.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null, "This sample demonstrates a branded Gemini-inspired chat interface with voice input and model selection."),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        "Minimal header-less chat layout for distraction-free conversations using ",
                        React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview#showheader" }, "showHeader"),
                        "."),
                    React.createElement("li", null,
                        "Custom ",
                        React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview#bannertemplate" }, "bannerTemplate"),
                        " displaying branded Gemini messaging."),
                    React.createElement("li", null,
                        "Simulated AI response handling using the ",
                        React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview#promptrequest" }, "promptRequest"),
                        " callback."),
                    React.createElement("li", null,
                        "File attachment support via ",
                        React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview#attachmentsettings" }, "attachmentSettings"),
                        " with configurable save and remove endpoints."),
                    React.createElement("li", null,
                        "Footer toolbar customization with attachment actions and a model selector via ",
                        React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview#footertoolbarsettings" }, "footerToolbarSettings"),
                        "."),
                    React.createElement("li", null,
                        React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview#speechtotextsettings" }, "Speech-to-text"),
                        " input for hands-free interaction."),
                    React.createElement("li", null,
                        "Dynamic button toggling using ",
                        React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview#promptchanged" }, "promptChanged"),
                        " to show/hide send and audio buttons."),
                    React.createElement("li", null, "Dropdown-based AI model switching (Fast, Thinking, Pro).")),
                React.createElement("p", null, "This example serves as a foundation for integrating real LLM services and building branded conversational interfaces with modular UI controls."))));
    };
    return GeminiClone;
}(sample_base_1.SampleBase));
exports.GeminiClone = GeminiClone;
