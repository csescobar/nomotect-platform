"use strict";
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
var React = require("react");
var react_1 = require("react");
var ej2_react_interactive_chat_1 = require("@syncfusion/ej2-react-interactive-chat");
var ej2_buttons_1 = require("@syncfusion/ej2-buttons");
var ej2_splitbuttons_1 = require("@syncfusion/ej2-splitbuttons");
var sample_base_1 = require("../common/sample-base");
var ai_service_1 = require("../common/ai-service");
var data = require("./promptResponseData.json");
require("./ai-gemini-clone.css");
var GeminiClone = function () {
    var prompts = data["geminiPromptResponseData"];
    var assistInstance = (0, react_1.useRef)(null);
    var geminiContainer = (0, react_1.useRef)(null);
    var modelDropdown = (0, react_1.useRef)(null);
    var isFirstPrompt = (0, react_1.useRef)(true);
    var currentModel = (0, react_1.useRef)('Fast');
    var abortControllerRef = (0, react_1.useRef)();
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
        if (geminiContainer.current) {
            geminiContainer.current.classList.add('middle-footer');
        }
        initializeActionButtons();
    }, []);
    var footerToolbarSettings = {
        toolbarPosition: 'Bottom',
        items: [
            { iconCss: 'e-icons e-assist-attachment-icon', align: 'Left' },
            { align: 'Right', template: '<button id="custombtn">Fast</button>' },
            { iconCss: 'e-icons e-assist-speech-to-text', align: 'Right' }
        ]
    };
    var attachmentSettings = {
        saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove'
    };
    var speechToTextSettings = { enable: true };
    var toggleButtons = function () {
        var _a;
        if (!assistInstance.current)
            return;
        var sendBtn = (_a = assistInstance.current.element.querySelector('.e-assist-send')) === null || _a === void 0 ? void 0 : _a.parentElement;
        var audioBtn = assistInstance.current.element.querySelector('.e-assistview-speech-to-text');
        var hasPrompt = assistInstance.current.prompt &&
            assistInstance.current.prompt
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
    // Mirrors the TS `created()` — footer DOM is ready, #custombtn exists.
    var onAssistCreated = function () {
        initializeModelDropdown();
        toggleButtons();
    };
    var initializeModelDropdown = function () {
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
                    if (currentModel.current === item.text) {
                        args.element.classList.add('e-selected');
                    }
                },
                select: function (args) {
                    currentModel.current = args.item.text;
                    if (modelDropdown.current)
                        modelDropdown.current.content = args.item.text;
                }
            });
            dropdown.appendTo(btnElem);
            modelDropdown.current = dropdown;
        }
    };
    var initializeActionButtons = function () {
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
    var promptRequest = function (args) { return __awaiter(void 0, void 0, void 0, function () {
        var foundPrompt, response, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (isFirstPrompt.current && geminiContainer.current) {
                        geminiContainer.current.classList.remove('middle-footer');
                        geminiContainer.current.classList.add('bottom-footer');
                        isFirstPrompt.current = false;
                    }
                    abortControllerRef.current = new AbortController();
                    foundPrompt = prompts.find(function (p) { return p.prompt === args.prompt; });
                    if (!foundPrompt) return [3 /*break*/, 1];
                    _a = foundPrompt.response;
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, (0, ai_service_1.getAIResponse)(args, abortControllerRef.current)];
                case 2:
                    _a = _b.sent();
                    _b.label = 3;
                case 3:
                    response = _a;
                    if (assistInstance.current) {
                        assistInstance.current.addPromptResponse(response);
                        toggleButtons();
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var promptChanged = function () {
        toggleButtons();
    };
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: "control-section gemini-clone" },
            React.createElement("div", { className: "gemini-aiassist", id: "geminiContainer", ref: geminiContainer },
                React.createElement(ej2_react_interactive_chat_1.AIAssistViewComponent, { id: "gemini_aiassistview", promptRequest: promptRequest, promptChanged: promptChanged, showHeader: false, promptPlaceholder: "Ask Gemini", enableAttachments: true, enableStreaming: true, speechToTextSettings: speechToTextSettings, bannerTemplate: "<div class=\"banner-content\"><div class=\"gemini-header\"><h3>Meet Gemini, your personal AI assistant</h3></div></div>", footerToolbarSettings: footerToolbarSettings, attachmentSettings: attachmentSettings, created: onAssistCreated, ref: assistInstance }),
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
exports.default = GeminiClone;
