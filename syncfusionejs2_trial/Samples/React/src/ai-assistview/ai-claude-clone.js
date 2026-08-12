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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClaudeClone = void 0;
var React = require("react");
var ej2_react_interactive_chat_1 = require("@syncfusion/ej2-react-interactive-chat");
var ej2_buttons_1 = require("@syncfusion/ej2-buttons");
var ej2_buttons_2 = require("@syncfusion/ej2-buttons");
var ej2_splitbuttons_1 = require("@syncfusion/ej2-splitbuttons");
var sample_base_1 = require("../common/sample-base");
var ai_service_1 = require("../common/ai-service");
var data = require("./promptResponseData.json");
require("./ai-claude-clone.css");
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
        _this.promptRequest = function (args) { return __awaiter(_this, void 0, void 0, function () {
            var foundPrompt, response, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.isFirstPrompt && this.claudeContainer) {
                            this.claudeContainer.classList.remove('middle-footer');
                            this.claudeContainer.classList.add('bottom-footer');
                            this.isFirstPrompt = false;
                        }
                        this.abortController = new AbortController();
                        foundPrompt = this.prompts.find(function (p) { return p.prompt === args.prompt; });
                        if (!foundPrompt) return [3 /*break*/, 1];
                        _a = foundPrompt.response;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, (0, ai_service_1.getAIResponse)(args, this.abortController)];
                    case 2:
                        _a = _b.sent();
                        _b.label = 3;
                    case 3:
                        response = _a;
                        this.assistInstance.addPromptResponse(response);
                        return [2 /*return*/];
                }
            });
        }); };
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
