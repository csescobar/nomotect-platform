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
exports.ClaudeClone = void 0;
var React = require("react");
var ej2_react_interactive_chat_1 = require("@syncfusion/ej2-react-interactive-chat");
var ej2_buttons_1 = require("@syncfusion/ej2-buttons");
var ej2_buttons_2 = require("@syncfusion/ej2-buttons");
var ej2_splitbuttons_1 = require("@syncfusion/ej2-splitbuttons");
var sample_base_1 = require("../common/sample-base");
var data = require("./promptResponseData.json");
require("./claude-clone.css");
var ClaudeClone = /** @class */ (function (_super) {
    __extends(ClaudeClone, _super);
    function ClaudeClone() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prompts = data["claudePromptResponseData"];
        _this.isFirstPrompt = true;
        _this.currentModel = 'Opus 4.6';
        _this.extendedThinkingEnabled = false;
        _this.bannerTemplate = "<div class=\"banner-content\">\n    <div class=\"claude-header\">\n      <img src=\"https://freepnglogo.com/images/all_img/claude-ai-icon-65aa.png\" alt=\"Claude\">\n      <h2>Golden hour thinking</h2>\n    </div>\n  </div>";
        _this.footerToolbarSettings = {
            toolbarPosition: 'Bottom',
            items: [
                { iconCss: 'e-icons e-assist-attachment-icon', align: 'Left' },
                { align: 'Right', template: '<button id="custombtn">Opus 4.6</button>' }
            ]
        };
        _this.attachmentSettings = {
            saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save',
            removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove'
        };
        // Mirrors the TS `created()` — runs after AIAssistView finishes rendering its DOM,
        // so the footer toolbar template button (#custombtn) is guaranteed to exist.
        _this.onAssistCreated = function () {
            _this.initializeModelDropdown();
        };
        _this.promptRequest = function (args) {
            if (_this.isFirstPrompt && _this.claudeContainer) {
                _this.claudeContainer.classList.remove('middle-footer');
                _this.claudeContainer.classList.add('bottom-footer');
                _this.isFirstPrompt = false;
            }
            setTimeout(function () {
                var foundPrompt = _this.prompts.find(function (p) { return p.prompt === args.prompt; });
                var response = foundPrompt
                    ? foundPrompt.response
                    : 'This is a placeholder Claude-style response. Connect to an LLM service for real output.';
                _this.assistInstance.addPromptResponse(response);
            }, 1200);
        };
        _this.initializeModelDropdown = function () {
            var items = [
                { text: 'Opus 4.6', description: 'Most capable for ambitious work' },
                { text: 'Sonnet 4.6', description: 'Most efficient for everyday tasks' },
                { text: 'Haiku 4.5', description: 'Fastest for quick answers' },
                { text: 'Extended thinking', description: 'Think longer for complex tasks', id: 'extended-thinking' }
            ];
            var btnElem = document.getElementById('custombtn');
            if (btnElem) {
                var dropdown = new ej2_splitbuttons_1.DropDownButton({
                    items: items,
                    cssClass: 'e-flat claude_model',
                    beforeItemRender: function (args) {
                        var item = args.item;
                        var contentHtml = "\n            <div class=\"model-content\">\n              <div class=\"model-name\">".concat(item.text, "</div>\n              <div class=\"model-description\">").concat(item.description, "</div>\n            </div>");
                        if (item.id === 'extended-thinking') {
                            contentHtml += "\n              <div class=\"toggle-container\">\n                <input type=\"checkbox\" class=\"extended-thinking-toggle\" id=\"extended-thinking-switch\" />\n              </div>";
                        }
                        args.element.innerHTML = "<div class=\"model-item\">".concat(contentHtml, "</div>");
                        if (_this.currentModel === item.text) {
                            args.element.classList.add('e-selected');
                        }
                    },
                    open: _this.onModelDropdownOpen,
                    select: function (args) {
                        _this.currentModel = args.item.text;
                        _this.modelDropdown.content = args.item.text;
                    }
                });
                dropdown.appendTo(btnElem);
                _this.modelDropdown = dropdown;
            }
        };
        _this.onModelDropdownOpen = function () {
            var toggleInput = document.getElementById('extended-thinking-switch');
            if (toggleInput && !toggleInput.classList.contains('e-switch')) {
                new ej2_buttons_2.Switch({
                    checked: _this.extendedThinkingEnabled,
                    change: function (args) { _this.extendedThinkingEnabled = args.checked; }
                }).appendTo(toggleInput);
                var toggleContainer = toggleInput.closest('.toggle-container');
                if (toggleContainer) {
                    toggleContainer.addEventListener('click', function (e) { return e.stopPropagation(); });
                }
            }
        };
        _this.initializeActionButtons = function () {
            var buttons = [
                { id: 'codeBtn', icon: 'e-icons e-code-view' },
                { id: 'writeBtn', icon: 'e-icons e-edit' },
                { id: 'choiceBtn', icon: 'e-icons e-stamp' },
                { id: 'learnBtn', icon: 'e-icons e-layers' },
                { id: 'lifeBtn', icon: 'e-icons e-activities' }
            ];
            buttons.forEach(function (btn) {
                var element = document.getElementById(btn.id);
                if (element)
                    new ej2_buttons_1.Button({ iconCss: btn.icon }).appendTo(element);
            });
        };
        return _this;
    }
    ClaudeClone.prototype.componentDidMount = function () {
        this.claudeContainer = document.getElementById('claudeContainer');
        if (this.claudeContainer) {
            this.claudeContainer.classList.add('middle-footer');
        }
        this.initializeActionButtons();
    };
    ClaudeClone.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: "control-section claude-clone" },
                React.createElement("div", { className: "claude-aiassist", id: "claudeContainer" },
                    React.createElement(ej2_react_interactive_chat_1.AIAssistViewComponent, { id: "claude_aiassistview", promptRequest: this.promptRequest, showHeader: false, promptPlaceholder: "How can i help you today?", enableAttachments: true, enableStreaming: true, bannerTemplate: this.bannerTemplate, footerToolbarSettings: this.footerToolbarSettings, attachmentSettings: this.attachmentSettings, created: this.onAssistCreated, ref: function (assist) { return (_this.assistInstance = assist); } }),
                    React.createElement("div", { id: "buttonsContainer", className: "claude-buttons-container" },
                        React.createElement("button", { id: "codeBtn" }, "Code"),
                        React.createElement("button", { id: "writeBtn" }, "Write"),
                        React.createElement("button", { id: "choiceBtn" }, "Claude's Choice"),
                        React.createElement("button", { id: "learnBtn" }, "Learn"),
                        React.createElement("button", { id: "lifeBtn" }, "Life stuff")))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates a Claude-inspired AI AssistView with file attachments and a configurable model selector for seamless branded conversational experiences.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null, "This sample demonstrates a branded Claude-inspired chat interface with model selection and attachments."),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        "Minimal header-less chat layout for distraction-free conversations using ",
                        React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview#showheader" }, "showHeader"),
                        "."),
                    React.createElement("li", null,
                        "Custom ",
                        React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview#bannertemplate" }, "bannerTemplate"),
                        " displaying branded Claude visuals and contextual messaging."),
                    React.createElement("li", null,
                        "Simulated AI response handling using the ",
                        React.createElement("code", null, "promptRequest"),
                        " callback."),
                    React.createElement("li", null,
                        "File attachment support via ",
                        React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview#attachmentsettings" }, "attachmentSettings"),
                        " with configurable save and remove endpoints."),
                    React.createElement("li", null,
                        "Footer toolbar customization with attachment actions and a model selector via ",
                        React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview#footertoolbarsettings" }, "footerToolbarSettings"),
                        "."),
                    React.createElement("li", null, "Dropdown-based AI model switching (Opus, Sonnet, Haiku, Extended thinking).")),
                React.createElement("p", null, "This example serves as a foundation for integrating real LLM services and building branded conversational interfaces with modular UI controls."))));
    };
    return ClaudeClone;
}(sample_base_1.SampleBase));
exports.ClaudeClone = ClaudeClone;
