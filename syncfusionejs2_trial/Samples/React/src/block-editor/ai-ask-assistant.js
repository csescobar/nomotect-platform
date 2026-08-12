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
exports.AskAIAssistant = void 0;
var React = require("react");
var ej2_react_interactive_chat_1 = require("@syncfusion/ej2-react-interactive-chat");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var ej2_react_popups_1 = require("@syncfusion/ej2-react-popups");
var ej2_splitbuttons_1 = require("@syncfusion/ej2-splitbuttons");
var ej2_react_navigations_1 = require("@syncfusion/ej2-react-navigations");
var ej2_react_blockeditor_1 = require("@syncfusion/ej2-react-blockeditor");
var sample_base_1 = require("../common/sample-base");
var data = require("./blockData.json");
require("./ai-ask-assistant.css");
var ai_service_1 = require("../common/ai-service");
var ej2_markdown_converter_1 = require("@syncfusion/ej2-markdown-converter");
var AskAIAssistant = /** @class */ (function (_super) {
    __extends(AskAIAssistant, _super);
    function AskAIAssistant() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.assistInstance = React.createRef();
        _this.blockEditorInstance = React.createRef();
        _this.dialogInstance = React.createRef();
        _this.sidebarInstance = React.createRef();
        _this.fabInstance = React.createRef();
        _this.screenDropdownRef = null;
        _this.historyDropdownRef = null;
        _this.lastPromptWasTranslate = false;
        _this.sessionChats = [];
        _this.activeSessionId = null;
        _this.isFirstSessionAdded = false;
        _this.currentMode = 'Sidebar';
        _this.notionSuggestions = data["notionSuggestions"];
        _this.iconMapByIndex = data["iconMapByIndex"];
        _this.imageBlockSettings = {
            saveUrl: 'https://services.syncfusion.com/react/production/api/RichTextEditor/SaveFile',
            path: 'https://services.syncfusion.com/react/production/RichTextEditor/'
        };
        _this.toggleBackgroundState = function (show) {
            var editorContainer = document.querySelector('.ask-ai-editor-container');
            if (editorContainer) {
                show ? editorContainer.classList.remove('e-hidden') : editorContainer.classList.add('e-hidden');
            }
        };
        _this.toggleIconClass = function (selectorIconClass, replaceIconClass) {
            var _a, _b;
            var icon = (_b = (_a = _this.assistInstance.current) === null || _a === void 0 ? void 0 : _a.toolbarHeader) === null || _b === void 0 ? void 0 : _b.querySelector(".".concat(selectorIconClass));
            if (icon) {
                icon.className = "e-icons ".concat(replaceIconClass);
            }
        };
        _this.updateHistoryDropdown = function (sessions) {
            var items = sessions.map(function (session) { return ({
                text: session.title.length > 30 ? session.title.substring(0, 30) + '...' : session.title,
                id: session.id
            }); });
            if (_this.historyDropdownRef) {
                _this.historyDropdownRef.items = items.length ? items : [{ text: 'No Chat History' }];
                _this.historyDropdownRef.dataBind();
            }
        };
        _this.persistActiveSession = function () {
            if (!_this.activeSessionId || !_this.assistInstance.current)
                return;
            var session = _this.sessionChats.find(function (s) { return s.id === _this.activeSessionId; });
            if (session)
                session.prompts = _this.assistInstance.current.prompts;
        };
        _this.createNewSession = function (isAuto) {
            var _a;
            if (isAuto === void 0) { isAuto = false; }
            var prompts = (_a = _this.assistInstance.current) === null || _a === void 0 ? void 0 : _a.prompts;
            if (!prompts || prompts.length === 0) {
                _this.activeSessionId = null;
                if (_this.assistInstance.current) {
                    _this.assistInstance.current.prompts = [];
                    _this.assistInstance.current.dataBind();
                }
                return;
            }
            if (_this.activeSessionId) {
                _this.persistActiveSession();
            }
            else {
                var session = {
                    id: String(Date.now()),
                    title: prompts[0] ? prompts[0].prompt : 'New Chat',
                    prompts: prompts
                };
                _this.sessionChats.push(session);
                _this.activeSessionId = session.id;
                _this.updateHistoryDropdown(_this.sessionChats);
            }
            if (!isAuto) {
                _this.activeSessionId = null;
                if (_this.assistInstance.current) {
                    _this.assistInstance.current.prompts = [];
                    _this.assistInstance.current.dataBind();
                }
            }
        };
        _this.ensureCurrentChatIsSaved = function () {
            var _a;
            var prompts = (_a = _this.assistInstance.current) === null || _a === void 0 ? void 0 : _a.prompts;
            if (!prompts || prompts.length === 0)
                return;
            if (_this.activeSessionId) {
                _this.persistActiveSession();
                return;
            }
            var session = {
                id: String(Date.now()),
                title: prompts[0] ? prompts[0].prompt : 'New Chat',
                prompts: prompts
            };
            _this.sessionChats.push(session);
            _this.updateHistoryDropdown(_this.sessionChats);
        };
        _this.loadSession = function (sessionId) {
            if (sessionId === _this.activeSessionId)
                return;
            _this.ensureCurrentChatIsSaved();
            var session = _this.sessionChats.find(function (s) { return s.id === sessionId; });
            if (!session || !_this.assistInstance.current)
                return;
            _this.activeSessionId = sessionId;
            _this.assistInstance.current.prompts = session.prompts;
            _this.assistInstance.current.promptSuggestions = [];
            _this.assistInstance.current.dataBind();
        };
        _this.onPromptRequest = function (args) {
            if (_this.assistInstance.current)
                _this.assistInstance.current.promptSuggestions = [];
            (0, ai_service_1.getUserID)().then(function (userID) {
                try {
                    _this.abortController = new AbortController();
                    var contentToProcess = _this.blockEditorInstance.current.getDataAsHtml();
                    var isDocumentAction = _this.notionSuggestions.includes(args.prompt);
                    var isTranslatePage = args.prompt === 'Translate this page';
                    var isTranslationFollowUp_1 = _this.lastPromptWasTranslate && !isDocumentAction;
                    if (isTranslatePage) {
                        _this.lastPromptWasTranslate = true;
                    }
                    var messages = isTranslationFollowUp_1
                        ? [
                            {
                                role: 'system',
                                content: "\n        You are an assistant for a Block Editor application.\n        The user wants to translate the provided Block Editor HTML content HTML into a language they will specify.\n        Rules:\n        - If the user's input is a valid language name, translate ONLY the visible text inside the HTML tags into that language.\n        - Preserve ALL HTML tags, attributes, and structure exactly as-is.\n        - Do not translate tag names, attribute names, or attribute values.\n        - Return ONLY the translated HTML with no explanation or extra text.\n        - If the user's input is NOT a recognizable language, reply exactly: \"Please provide a valid language name to translate the document.\"\n                      "
                            },
                            {
                                role: 'user',
                                content: "\n        Translate the document into: ".concat(args.prompt, "\n\n        Document HTML:\n        ").concat(contentToProcess, "\n                      ")
                            }
                        ]
                        : isDocumentAction
                            ? [
                                {
                                    role: 'system',
                                    content: "\n        You are an assistant for a Block Editor application.\n        You must answer ONLY using the provided Block Editor HTML content.\n\n        Rules:\n        - Treat the provided HTML as the complete document.\n        - Do not use external knowledge.\n        - Do not invent missing information.\n        - Preserve the meaning of headings, lists, tables, quotes, and code blocks.\n        - If the document is empty, say:\n          \"The document is empty.\"\n        - If translation is requested without specifying a language, ask the user to specify the target language.\n        "
                                },
                                {
                                    role: 'user',
                                    content: "\n        Request:\n        ".concat(args.prompt, "\n\n        Document HTML:\n        ").concat(contentToProcess, "\n        ")
                                }
                            ]
                            : [
                                {
                                    role: 'user',
                                    content: args.prompt
                                }
                            ];
                    fetch(ai_service_1.AI_SERVICE_URL + '/api/chat', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            visitorId: userID,
                            messages: {
                                messages: messages
                            }
                        }),
                        signal: _this.abortController.signal
                    })
                        .then(function (response) {
                        if (!response.ok) {
                            return response.json().then(function (errorData) {
                                throw new Error(errorData.error || 'HTTP Error ' + response.status);
                            });
                        }
                        return response.json();
                    })
                        .then(function (result) {
                        if (result && result.response) {
                            var aiResponse = result.response.replace('END_INSERTION', '');
                            if (isTranslationFollowUp_1) {
                                var isInvalidLanguage = aiResponse.includes('Please provide a valid language name to translate the document.');
                                if (!isInvalidLanguage) {
                                    _this.lastPromptWasTranslate = false; // valid translation — reset
                                }
                            }
                            if (_this.assistInstance.current) {
                                _this.assistInstance.current.addPromptResponse(aiResponse);
                                if (!_this.isFirstSessionAdded && !_this.activeSessionId) {
                                    _this.createNewSession(true);
                                    _this.isFirstSessionAdded = true;
                                }
                                _this.assistInstance.current.promptSuggestions = [];
                            }
                        }
                    })
                        .catch(function (error) {
                        if (error.name === 'AbortError') {
                            return;
                        }
                        _this.lastPromptWasTranslate = false;
                        setTimeout(function () {
                            var fallbackResponse = 'We could not reach the AI service; please try again later.';
                            if (_this.assistInstance.current) {
                                _this.assistInstance.current.addPromptResponse(fallbackResponse);
                                if (!_this.isFirstSessionAdded && !_this.activeSessionId) {
                                    _this.createNewSession(true);
                                    _this.isFirstSessionAdded = true;
                                }
                                _this.assistInstance.current.promptSuggestions = [];
                            }
                        }, 1000);
                    });
                }
                catch (error) {
                    //catch error
                }
            });
        };
        _this.moveAssistview = function (mode) {
            _this.currentMode = mode;
            var wrapper = document.getElementById('assistviewWrapper');
            if (_this.dialogInstance.current.visible)
                _this.dialogInstance.current.hide();
            if (_this.sidebarInstance.current)
                _this.sidebarInstance.current.hide();
            switch (mode) {
                case 'Sidebar':
                    if (_this.sidebarInstance.current)
                        _this.sidebarInstance.current.show();
                    _this.toggleBackgroundState(true);
                    if (_this.sidebarInstance.current && wrapper)
                        _this.sidebarInstance.current.element.appendChild(wrapper);
                    _this.toggleIconClass('e-horizontal-line', 'e-chevron-right-double');
                    break;
                case 'Floating':
                    if (_this.dialogInstance.current)
                        _this.dialogInstance.current.show();
                    var dialogElem = document.querySelector('#dialogElem');
                    if (dialogElem && wrapper)
                        dialogElem.appendChild(wrapper);
                    _this.toggleBackgroundState(true);
                    _this.toggleIconClass('e-chevron-right-double', 'e-horizontal-line');
                    break;
            }
        };
        _this.onAssistViewCreated = function () {
            _this.screenDropdownRef = new ej2_splitbuttons_1.DropDownButton({
                items: [{ text: 'Sidebar' }, { text: 'Floating' }],
                cssClass: 'e-caret-hide e-flat',
                beforeItemRender: function (args) {
                    if (_this.currentMode === args.item.text)
                        args.element.classList.add('e-selected');
                },
                select: function (args) {
                    if (_this.currentMode = args.item.text)
                        return;
                    _this.moveAssistview(args.item.text);
                }
            });
            _this.screenDropdownRef.appendTo('.screen-resizer');
            _this.historyDropdownRef = new ej2_splitbuttons_1.DropDownButton({
                items: [{ text: 'No Chat History' }],
                cssClass: 'e-caret-hide e-flat',
                beforeItemRender: function (args) {
                    if (_this.activeSessionId === args.item.id)
                        args.element.classList.add('e-selected');
                },
                select: function (args) {
                    if (args.item.id)
                        _this.loadSession(args.item.id);
                }
            });
            _this.historyDropdownRef.appendTo('.history-icon');
        };
        _this.toolbarItemClicked = function (args) {
            if (args.item.iconCss === 'e-icons e-edit-notes') {
                _this.createNewSession();
                if (_this.assistInstance.current)
                    _this.assistInstance.current.promptSuggestions = _this.notionSuggestions;
            }
            else if (args.item.iconCss === 'e-icons e-horizontal-line') {
                // Move wrapper back to dialogElem before hiding
                var dialogElem = document.querySelector('#dialogElem');
                var wrapper = document.getElementById('assistviewWrapper');
                if (dialogElem && wrapper)
                    dialogElem.appendChild(wrapper);
                if (_this.sidebarInstance.current)
                    _this.sidebarInstance.current.hide();
                if (_this.dialogInstance.current)
                    _this.dialogInstance.current.hide();
                _this.toggleBackgroundState(true);
                if (_this.fabInstance.current)
                    _this.fabInstance.current.element.style.display = '';
            }
        };
        _this.responseToolbarItemClicked = function (args) {
            if (args.item.iconCss === 'e-icons e-block-add-icon') {
                var dataIndex = args.dataIndex;
                if (dataIndex !== undefined && dataIndex !== null && _this.assistInstance.current) {
                    var prompts = _this.assistInstance.current.prompts;
                    if (prompts && prompts[dataIndex]) {
                        var response = prompts[dataIndex].response || "We could not reach the AI service; please try again later.";
                        var currentPrompt = prompts[dataIndex].prompt;
                        var previousPrompt = dataIndex > 0 ? prompts[dataIndex - 1].prompt : '';
                        var isTranslationResponse = (previousPrompt === 'Translate this page' ||
                            /translate this page to/i.test(currentPrompt)) &&
                            !response.includes('Please provide a valid language name to translate the document.');
                        var htmlOutput = ej2_markdown_converter_1.MarkdownConverter.toHtml(response);
                        if (_this.blockEditorInstance.current) {
                            var blocks = _this.blockEditorInstance.current.parseHtmlToBlocks(htmlOutput);
                            _this.blockEditorInstance.current.renderBlocksFromJson(blocks, isTranslationResponse ? true : false);
                        }
                    }
                }
            }
        };
        _this.suggestionItemContent = function (ctx) {
            var iconClass = _this.iconMapByIndex[ctx.index] || '';
            return (React.createElement("div", { className: "suggestion-item active" },
                React.createElement("span", { className: "".concat(iconClass, " suggestion-icon") }),
                React.createElement("span", { className: "assist-suggestion-content" }, ctx.promptSuggestion)));
        };
        _this.bannerTemplate = "<div class=\"banner-content\">\n    <div class=\"e-icons e-assistview-icon\"></div>\n    <h3>How can I help you today ?</h3>\n  </div>";
        _this.assistViewToolbarSettings = {
            items: [
                { iconCss: 'e-icons e-history', align: 'Right', tooltip: 'Chat History', cssClass: 'history-icon' },
                { iconCss: 'e-icons e-edit-notes', align: 'Right', tooltip: 'Start New chat' },
                { iconCss: 'e-icons e-resize', align: 'Right', tooltip: 'Switch Chat Mode', cssClass: 'screen-resizer' },
                { iconCss: 'e-icons e-horizontal-line', align: 'Right', tooltip: 'Hide Chat' }
            ],
            itemClicked: _this.toolbarItemClicked
        };
        _this.footerToolbarSettings = {
            toolbarPosition: 'Bottom',
            items: [
                { iconCss: 'e-icons e-assist-attachment-icon', align: 'Left', tooltip: 'Attach File' },
                { iconCss: 'e-icons e-assist-speech-to-text', align: 'Right' },
                { iconCss: 'e-icons e-assist-send', align: 'Right' }
            ]
        };
        _this.responseToolbarSettings = {
            items: [
                { iconCss: 'e-icons e-assist-copy', tooltip: 'Copy response' },
                { iconCss: 'e-icons e-block-add-icon', tooltip: 'Insert into this page' },
                { iconCss: 'e-icons e-assist-like', tooltip: 'Like' },
                { iconCss: 'e-icons e-assist-dislike', tooltip: 'Need improvement' },
                { iconCss: 'e-icons e-assist-audio', tooltip: 'Read aloud' }
            ],
            itemClicked: _this.responseToolbarItemClicked
        };
        _this.attachmentSettings = {
            saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save',
            removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove'
        };
        _this.speechToTextSettings = { enable: true };
        return _this;
    }
    AskAIAssistant.prototype.componentDidMount = function () {
        var _this = this;
        if (this.fabInstance.current) {
            this.fabInstance.current.element.style.display = 'none';
            this.fabInstance.current.element.onclick = function () {
                _this.toggleBackgroundState(true);
                _this.moveAssistview(_this.currentMode);
                _this.fabInstance.current.element.style.display = 'none';
            };
        }
        var wrapper = document.getElementById('assistviewWrapper');
        if (this.sidebarInstance.current && wrapper)
            this.sidebarInstance.current.element.appendChild(wrapper);
        this.toggleIconClass('e-horizontal-line', 'e-chevron-right-double');
    };
    AskAIAssistant.prototype.componentWillUnmount = function () {
        if (this.abortController) {
            this.abortController.abort();
        }
    };
    AskAIAssistant.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-section' },
            React.createElement("div", { className: "ask-ai-editor e-card" },
                React.createElement("div", { className: "ask-ai-editor-container" },
                    React.createElement("div", { className: "ask-ai-editor-page" },
                        React.createElement("div", { className: "ask-ai-editor-content" },
                            React.createElement(ej2_react_blockeditor_1.BlockEditorComponent, { id: 'ask-ai-block-editor', height: "600px", blocks: data["askAssistantData"], users: data["users"], imageBlockSettings: this.imageBlockSettings, ref: this.blockEditorInstance })))),
                React.createElement(ej2_react_popups_1.DialogComponent, { id: "dialogElem", target: ".ask-ai-editor-page", position: { X: 'right', Y: '0' }, animationSettings: { effect: 'FadeZoom' }, width: "500px", visible: false, cssClass: "custom-dialog", ref: this.dialogInstance },
                    React.createElement("div", { id: "assistviewWrapper", className: "ask-ai-assistview" },
                        React.createElement(ej2_react_interactive_chat_1.AIAssistViewComponent, { id: "aiAssistView", enableStreaming: true, promptSuggestions: this.notionSuggestions, promptSuggestionItemTemplate: this.suggestionItemContent, promptRequest: this.onPromptRequest, bannerTemplate: this.bannerTemplate, toolbarSettings: this.assistViewToolbarSettings, footerToolbarSettings: this.footerToolbarSettings, responseToolbarSettings: this.responseToolbarSettings, enableAttachments: true, attachmentSettings: this.attachmentSettings, speechToTextSettings: this.speechToTextSettings, created: this.onAssistViewCreated, ref: this.assistInstance },
                            React.createElement(ej2_react_interactive_chat_1.ViewsDirective, null,
                                React.createElement(ej2_react_interactive_chat_1.ViewDirective, { type: 'Assist', name: 'New AI chat' }))))),
                React.createElement(ej2_react_navigations_1.SidebarComponent, { id: "askAiSidebar", target: ".ask-ai-editor-page", width: "400px", position: "Right", enableGestures: false, animate: false, isOpen: false, ref: this.sidebarInstance }),
                React.createElement(ej2_react_buttons_1.FabComponent, { id: "fabElem", iconCss: "e-icons e-magic-wand", target: ".ask-ai-editor-page", ref: function (fab) { return (_this.fabInstance = fab); } })),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates an AI AssistView integrated with Block Editor, that supports multiple chat display modes, chat history management, file attachments, and voice-based input and output interactions.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null, "This sample demonstrates a AI assistant integrated with Block Editor for enhanced content creation."),
                React.createElement("ul", null,
                    React.createElement("li", null, "Block Editor component for rich content editing with various block types."),
                    React.createElement("li", null, "Floating and sidebar chat modes with seamless view switching."),
                    React.createElement("li", null, "Prompt suggestions rendered using a custom item template with contextual icons."),
                    React.createElement("li", null, "Chat session creation, persistence, and history navigation."),
                    React.createElement("li", null, "File upload and removal support using configured attachment endpoints."),
                    React.createElement("li", null, "Response toolbar with copy, add, like, dislike, and audio options."),
                    React.createElement("li", null, "Speech-to-text input and text-to-speech playback for hands-free interaction."),
                    React.createElement("li", null, "Toolbar actions for starting new chats, hiding the assistant, and resizing views."),
                    React.createElement("li", null, "Floating action button (FAB) to restore the assistant when hidden.")))));
    };
    return AskAIAssistant;
}(sample_base_1.SampleBase));
exports.AskAIAssistant = AskAIAssistant;
