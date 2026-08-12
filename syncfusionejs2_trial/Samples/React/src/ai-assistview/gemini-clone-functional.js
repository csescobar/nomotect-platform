"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var ej2_react_interactive_chat_1 = require("@syncfusion/ej2-react-interactive-chat");
var ej2_buttons_1 = require("@syncfusion/ej2-buttons");
var ej2_splitbuttons_1 = require("@syncfusion/ej2-splitbuttons");
var sample_base_1 = require("../common/sample-base");
var data = require("./promptResponseData.json");
require("./gemini-clone.css");
var GeminiClone = function () {
    var prompts = data["geminiPromptResponseData"];
    var assistInstance = (0, react_1.useRef)(null);
    var geminiContainer = (0, react_1.useRef)(null);
    var modelDropdown = (0, react_1.useRef)(null);
    var isFirstPrompt = (0, react_1.useRef)(true);
    var currentModel = (0, react_1.useRef)('Fast');
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
    var promptRequest = function (args) {
        if (isFirstPrompt.current && geminiContainer.current) {
            geminiContainer.current.classList.remove('middle-footer');
            geminiContainer.current.classList.add('bottom-footer');
            isFirstPrompt.current = false;
        }
        setTimeout(function () {
            var foundPrompt = prompts.find(function (p) { return p.prompt === args.prompt; });
            var response = foundPrompt
                ? foundPrompt.response
                : 'This is a placeholder Gemini-style response. Connect to an LLM service for real output.';
            if (assistInstance.current) {
                assistInstance.current.addPromptResponse(response);
                toggleButtons();
            }
        }, 1200);
    };
    var promptChanged = function () {
        toggleButtons();
    };
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: "control-section gemini-clone" },
            React.createElement("div", { className: "gemini-aiassist", id: "geminiContainer", ref: geminiContainer },
                React.createElement(ej2_react_interactive_chat_1.AIAssistViewComponent, { id: "gemini_aiassistview", promptRequest: promptRequest, promptChanged: promptChanged, showHeader: false, promptPlaceholder: "Ask Gemini", enableAttachments: true, speechToTextSettings: speechToTextSettings, bannerTemplate: "<div class=\"banner-content\"><div class=\"gemini-header\"><h3>Meet Gemini, your personal AI assistant</h3></div></div>", footerToolbarSettings: footerToolbarSettings, attachmentSettings: attachmentSettings, created: onAssistCreated, ref: assistInstance }),
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
