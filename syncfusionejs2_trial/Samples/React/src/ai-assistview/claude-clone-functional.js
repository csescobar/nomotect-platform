"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var ej2_react_interactive_chat_1 = require("@syncfusion/ej2-react-interactive-chat");
var ej2_buttons_1 = require("@syncfusion/ej2-buttons");
var ej2_splitbuttons_1 = require("@syncfusion/ej2-splitbuttons");
var sample_base_1 = require("../common/sample-base");
var data = require("./promptResponseData.json");
require("./claude-clone.css");
var ClaudeClone = function () {
    var prompts = data["claudePromptResponseData"];
    var assistInstance = (0, react_1.useRef)(null);
    var claudeContainer = (0, react_1.useRef)(null);
    var modelDropdown = (0, react_1.useRef)(null);
    var isFirstPrompt = (0, react_1.useRef)(true);
    var currentModel = (0, react_1.useRef)('Opus 4.6');
    var extendedThinkingEnabled = (0, react_1.useRef)(false);
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
        if (claudeContainer.current) {
            claudeContainer.current.classList.add('middle-footer');
        }
        initializeActionButtons();
    }, []);
    var footerToolbarSettings = {
        toolbarPosition: 'Bottom',
        items: [
            { iconCss: 'e-icons e-assist-attachment-icon', align: 'Left' },
            { align: 'Right', template: '<button id="custombtn">Opus 4.6</button>' }
        ]
    };
    var attachmentSettings = {
        saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove'
    };
    // Mirrors the TS `created()` — the footer toolbar DOM (including #custombtn) is
    // guaranteed to exist at this point, so we can safely appendTo it.
    var onAssistCreated = function () {
        initializeModelDropdown();
    };
    var onModelDropdownOpen = function () {
        var toggleInput = document.getElementById('extended-thinking-switch');
        if (toggleInput && !toggleInput.classList.contains('e-switch')) {
            new ej2_buttons_1.Switch({
                checked: extendedThinkingEnabled.current,
                change: function (args) { extendedThinkingEnabled.current = args.checked; }
            }).appendTo(toggleInput);
            var toggleContainer = toggleInput.closest('.toggle-container');
            if (toggleContainer) {
                toggleContainer.addEventListener('click', function (e) { return e.stopPropagation(); });
            }
        }
    };
    var initializeModelDropdown = function () {
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
                    if (currentModel.current === item.text) {
                        args.element.classList.add('e-selected');
                    }
                },
                open: onModelDropdownOpen,
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
    var promptRequest = function (args) {
        if (isFirstPrompt.current && claudeContainer.current) {
            claudeContainer.current.classList.remove('middle-footer');
            claudeContainer.current.classList.add('bottom-footer');
            isFirstPrompt.current = false;
        }
        setTimeout(function () {
            var foundPrompt = prompts.find(function (p) { return p.prompt === args.prompt; });
            var response = foundPrompt
                ? foundPrompt.response
                : 'This is a placeholder Claude-style response. Connect to an LLM service for real output.';
            if (assistInstance.current)
                assistInstance.current.addPromptResponse(response);
        }, 1200);
    };
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: "control-section claude-clone" },
            React.createElement("div", { className: "claude-aiassist", id: "claudeContainer", ref: claudeContainer },
                React.createElement(ej2_react_interactive_chat_1.AIAssistViewComponent, { id: "claude_aiassistview", promptRequest: promptRequest, showHeader: false, promptPlaceholder: "How can i help you today?", enableAttachments: true, enableStreaming: true, bannerTemplate: "<div class=\"banner-content\"><div class=\"claude-header\"><img src=\"https://freepnglogo.com/images/all_img/claude-ai-icon-65aa.png\" alt=\"Claude\"><h2>Golden hour thinking</h2></div></div>", footerToolbarSettings: footerToolbarSettings, attachmentSettings: attachmentSettings, created: onAssistCreated, ref: assistInstance }),
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
exports.default = ClaudeClone;
