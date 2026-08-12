"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
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
var AskAIAssistant = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
        // FAB click handler wired after mount
        if (fabInstance.current) {
            fabInstance.current.element.style.display = 'none';
            fabInstance.current.element.onclick = function () {
                toggleBackgroundState(true);
                moveAssistview(currentMode.current);
                fabInstance.current.element.style.display = 'none';
            };
        }
        var wrapper = document.getElementById('assistviewWrapper');
        if (sidebarInstance.current && wrapper)
            sidebarInstance.current.element.appendChild(wrapper);
        toggleIconClass('e-horizontal-line', 'e-chevron-right-double');
        return function () {
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            }
        };
    }, []);
    var notionSuggestions = data["notionSuggestions"];
    var iconMapByIndex = data["iconMapByIndex"];
    var abortControllerRef = React.useRef();
    var assistInstance = (0, react_1.useRef)(null);
    var blockEditorInstance = (0, react_1.useRef)(null);
    var dialogInstance = (0, react_1.useRef)(null);
    var sidebarInstance = (0, react_1.useRef)(null);
    var fabInstance = (0, react_1.useRef)(null);
    var lastPromptWasTranslate = (0, react_1.useRef)(false);
    // Vanilla Syncfusion dropdowns — same pattern as TS version
    var screenDropdownRef = (0, react_1.useRef)(null);
    var historyDropdownRef = (0, react_1.useRef)(null);
    // Mutable refs for state shared across callbacks (avoids stale closure issues)
    var sessionChats = (0, react_1.useRef)([]);
    var activeSessionId = (0, react_1.useRef)(null);
    var isFirstSessionAdded = (0, react_1.useRef)(false);
    var currentMode = (0, react_1.useRef)('Sidebar');
    var toggleBackgroundState = (0, react_1.useCallback)(function (show) {
        var editorContainer = document.querySelector('.ask-ai-editor-container');
        if (editorContainer) {
            show ? editorContainer.classList.remove('e-hidden') : editorContainer.classList.add('e-hidden');
        }
    }, []);
    var toggleIconClass = (0, react_1.useCallback)(function (selectorIconClass, replaceIconClass) {
        var _a, _b;
        var icon = (_b = (_a = assistInstance.current) === null || _a === void 0 ? void 0 : _a.toolbarHeader) === null || _b === void 0 ? void 0 : _b.querySelector(".".concat(selectorIconClass));
        if (icon) {
            icon.className = "e-icons ".concat(replaceIconClass);
        }
    }, []);
    var updateHistoryDropdown = (0, react_1.useCallback)(function (sessions) {
        var items = sessions.map(function (session) { return ({
            text: session.title.length > 30 ? session.title.substring(0, 30) + '...' : session.title,
            id: session.id
        }); });
        if (historyDropdownRef.current) {
            historyDropdownRef.current.items = items.length ? items : [{ text: 'No Chat History' }];
            historyDropdownRef.current.dataBind();
        }
    }, []);
    var persistActiveSession = (0, react_1.useCallback)(function () {
        if (!activeSessionId.current || !assistInstance.current)
            return;
        var session = sessionChats.current.find(function (s) { return s.id === activeSessionId.current; });
        if (session)
            session.prompts = assistInstance.current.prompts;
    }, []);
    var createNewSession = (0, react_1.useCallback)(function (isAuto) {
        var _a;
        if (isAuto === void 0) { isAuto = false; }
        var prompts = (_a = assistInstance.current) === null || _a === void 0 ? void 0 : _a.prompts;
        if (!prompts || prompts.length === 0) {
            activeSessionId.current = null;
            if (assistInstance.current) {
                assistInstance.current.prompts = [];
                assistInstance.current.dataBind();
            }
            return;
        }
        if (activeSessionId.current) {
            persistActiveSession();
        }
        else {
            var session = {
                id: String(Date.now()),
                title: prompts[0] ? prompts[0].prompt : 'New Chat',
                prompts: prompts
            };
            sessionChats.current.push(session);
            activeSessionId.current = session.id;
            updateHistoryDropdown(sessionChats.current);
        }
        if (!isAuto) {
            activeSessionId.current = null;
            if (assistInstance.current) {
                assistInstance.current.prompts = [];
                assistInstance.current.dataBind();
            }
        }
    }, [persistActiveSession, updateHistoryDropdown]);
    var ensureCurrentChatIsSaved = (0, react_1.useCallback)(function () {
        var _a;
        var prompts = (_a = assistInstance.current) === null || _a === void 0 ? void 0 : _a.prompts;
        if (!prompts || prompts.length === 0)
            return;
        if (activeSessionId.current) {
            persistActiveSession();
            return;
        }
        var session = {
            id: String(Date.now()),
            title: prompts[0] ? prompts[0].prompt : 'New Chat',
            prompts: prompts
        };
        sessionChats.current.push(session);
        updateHistoryDropdown(sessionChats.current);
    }, [persistActiveSession, updateHistoryDropdown]);
    var loadSession = (0, react_1.useCallback)(function (sessionId) {
        if (sessionId === activeSessionId.current)
            return;
        ensureCurrentChatIsSaved();
        var session = sessionChats.current.find(function (s) { return s.id === sessionId; });
        if (!session || !assistInstance.current)
            return;
        activeSessionId.current = sessionId;
        assistInstance.current.prompts = session.prompts;
        assistInstance.current.promptSuggestions = [];
        assistInstance.current.dataBind();
    }, [ensureCurrentChatIsSaved]);
    var onPromptRequest = (0, react_1.useCallback)(function (args) {
        if (assistInstance.current)
            assistInstance.current.promptSuggestions = [];
        (0, ai_service_1.getUserID)().then(function (userID) {
            try {
                abortControllerRef.current = new AbortController();
                var contentToProcess = blockEditorInstance.current.getDataAsHtml();
                var isDocumentAction = notionSuggestions.includes(args.prompt);
                var isTranslatePage = args.prompt === 'Translate this page';
                var isTranslationFollowUp_1 = lastPromptWasTranslate.current && !isDocumentAction;
                if (isTranslatePage) {
                    lastPromptWasTranslate.current = true;
                }
                var messages = isTranslationFollowUp_1
                    ? [
                        {
                            role: 'system',
                            content: "\n            You are an assistant for a Block Editor application.\n            The user wants to translate the provided Block Editor HTML content into a language they will specify.\n            Rules:\n            - If the user's input is a valid language name, translate ONLY the visible text inside the HTML tags into that language.\n            - Preserve ALL HTML tags, attributes, and structure exactly as-is.\n            - Do not translate tag names, attribute names, or attribute values.\n            - Return ONLY the translated HTML with no explanation or extra text.\n            - If the user's input is NOT a recognizable language, reply exactly: \"Please provide a valid language name to translate the document.\"\n                          "
                        },
                        {
                            role: 'user',
                            content: "\n            Translate the document into: ".concat(args.prompt, "\n\n            Document HTML:\n            ").concat(contentToProcess, "\n                ")
                        }
                    ]
                    : isDocumentAction
                        ? [
                            {
                                role: 'system',
                                content: "\n        You are an assistant for a Block Editor application.\n\n        You must answer ONLY using the provided Block Editor HTML content.\n\n        Rules:\n        - Treat the provided HTML as the complete document.\n        - Do not use external knowledge.\n        - Do not invent missing information.\n        - Preserve the meaning of headings, lists, tables, quotes, and code blocks.\n        - If the document is empty, say:\n          \"The document is empty.\"\n        - If translation is requested without specifying a language, ask the user to specify the target language.\n        "
                            },
                            {
                                role: 'user',
                                content: "\n        Request:\n        ".concat(args.prompt, "\n\n        Document HTML:\n        ").concat(contentToProcess, "\n        ")
                            }
                        ]
                        : [
                            {
                                role: 'system',
                                content: 'You are a helpful AI assistant.'
                            },
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
                    signal: abortControllerRef.current.signal
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
                                lastPromptWasTranslate.current = false;
                            }
                        }
                        if (assistInstance.current) {
                            assistInstance.current.addPromptResponse(aiResponse);
                            if (!isFirstSessionAdded.current && !activeSessionId.current) {
                                createNewSession(true);
                                isFirstSessionAdded.current = true;
                            }
                            assistInstance.current.promptSuggestions = [];
                        }
                    }
                })
                    .catch(function (error) {
                    if (error.name === 'AbortError') {
                        return;
                    }
                    lastPromptWasTranslate.current = false;
                    setTimeout(function () {
                        var fallbackResponse = 'We could not reach the AI service; please try again later.';
                        if (assistInstance.current) {
                            assistInstance.current.addPromptResponse(fallbackResponse);
                            if (!isFirstSessionAdded.current && !activeSessionId.current) {
                                createNewSession(true);
                                isFirstSessionAdded.current = true;
                            }
                            assistInstance.current.promptSuggestions = [];
                        }
                    }, 1000);
                });
            }
            catch (error) {
                //catch error
            }
        });
    }, [createNewSession]);
    var moveAssistview = (0, react_1.useCallback)(function (mode) {
        currentMode.current = mode;
        var wrapper = document.getElementById('assistviewWrapper');
        if (dialogInstance.current.visible)
            dialogInstance.current.hide();
        if (sidebarInstance.current)
            sidebarInstance.current.hide();
        switch (mode) {
            case 'Sidebar':
                if (sidebarInstance.current)
                    sidebarInstance.current.show();
                toggleBackgroundState(true);
                if (sidebarInstance.current && wrapper)
                    sidebarInstance.current.element.appendChild(wrapper);
                toggleIconClass('e-horizontal-line', 'e-chevron-right-double');
                break;
            case 'Floating':
                if (dialogInstance.current)
                    dialogInstance.current.show();
                var dialogElem = document.querySelector('#dialogElem');
                if (dialogElem && wrapper)
                    dialogElem.appendChild(wrapper);
                toggleBackgroundState(true);
                toggleIconClass('e-chevron-right-double', 'e-horizontal-line');
                break;
        }
    }, [toggleBackgroundState, toggleIconClass]);
    // Mirrors TS `created()` — initialize all imperative dropdowns once AIAssistView is ready
    var onAssistViewCreated = (0, react_1.useCallback)(function () {
        screenDropdownRef.current = new ej2_splitbuttons_1.DropDownButton({
            items: [{ text: 'Sidebar' }, { text: 'Floating' }],
            cssClass: 'e-caret-hide e-flat',
            beforeItemRender: function (args) {
                if (currentMode.current === args.item.text)
                    args.element.classList.add('e-selected');
            },
            select: function (args) {
                if (currentMode.current === args.item.text)
                    return;
                moveAssistview(args.item.text);
            }
        });
        screenDropdownRef.current.appendTo('.screen-resizer');
        historyDropdownRef.current = new ej2_splitbuttons_1.DropDownButton({
            items: [{ text: 'No Chat History' }],
            cssClass: 'e-caret-hide e-flat',
            beforeItemRender: function (args) {
                if (activeSessionId.current === args.item.id)
                    args.element.classList.add('e-selected');
            },
            select: function (args) {
                if (args.item.id)
                    loadSession(args.item.id);
            }
        });
        historyDropdownRef.current.appendTo('.history-icon');
    }, [moveAssistview, loadSession]);
    var toolbarItemClicked = (0, react_1.useCallback)(function (args) {
        if (args.item.iconCss === 'e-icons e-edit-notes') {
            createNewSession();
            if (assistInstance.current)
                assistInstance.current.promptSuggestions = notionSuggestions;
        }
        else if (args.item.iconCss === 'e-icons e-horizontal-line') {
            // Move wrapper back to dialogElem before hiding
            var dialogElem = document.querySelector('#dialogElem');
            var wrapper = document.getElementById('assistviewWrapper');
            if (dialogElem && wrapper)
                dialogElem.appendChild(wrapper);
            if (sidebarInstance.current)
                sidebarInstance.current.hide();
            if (dialogInstance.current)
                dialogInstance.current.hide();
            toggleBackgroundState(true);
            if (fabInstance.current)
                fabInstance.current.element.style.display = '';
        }
    }, [createNewSession, notionSuggestions, toggleBackgroundState]);
    var responseToolbarItemClicked = (0, react_1.useCallback)(function (args) {
        if (args.item.iconCss === 'e-icons e-block-add-icon') {
            var dataIndex = args.dataIndex;
            if (dataIndex !== undefined && dataIndex !== null && assistInstance.current) {
                var prompts = assistInstance.current.prompts;
                if (prompts && prompts[dataIndex]) {
                    var response = prompts[dataIndex].response || "We could not reach the AI service; please try again later.";
                    var currentPrompt = prompts[dataIndex].prompt;
                    var previousPrompt = dataIndex > 0 ? prompts[dataIndex - 1].prompt : '';
                    var isRecognizableLanguage = (previousPrompt === 'Translate this page' ||
                        /translate this page to\s+\w+/i.test(currentPrompt)) &&
                        !response.includes('Please provide a valid language name to translate the document.');
                    var htmlOutput = ej2_markdown_converter_1.MarkdownConverter.toHtml(response);
                    if (blockEditorInstance.current) {
                        var blocks = blockEditorInstance.current.parseHtmlToBlocks(htmlOutput);
                        blockEditorInstance.current.renderBlocksFromJson(blocks, isRecognizableLanguage ? true : false);
                    }
                }
            }
        }
    }, []);
    var suggestionItemContent = (0, react_1.useCallback)(function (ctx) {
        var iconClass = iconMapByIndex[ctx.index] || '';
        return (React.createElement("div", { className: "suggestion-item active" },
            React.createElement("span", { className: "".concat(iconClass, " suggestion-icon") }),
            React.createElement("span", { className: "assist-suggestion-content" }, ctx.promptSuggestion)));
    }, [iconMapByIndex]);
    var bannerTemplate = "<div class=\"banner-content\">\n    <div class=\"e-icons e-assistview-icon\"></div>\n    <h3>How can I help you today ?</h3>\n  </div>";
    var assistViewToolbarSettings = {
        items: [
            { iconCss: 'e-icons e-history', align: 'Right', tooltip: 'Chat History', cssClass: 'history-icon' },
            { iconCss: 'e-icons e-edit-notes', align: 'Right', tooltip: 'Start New chat' },
            { iconCss: 'e-icons e-resize', align: 'Right', tooltip: 'Switch Chat Mode', cssClass: 'screen-resizer' },
            { iconCss: 'e-icons e-horizontal-line', align: 'Right', tooltip: 'Hide Chat' }
        ],
        itemClicked: toolbarItemClicked
    };
    var footerToolbarSettings = {
        toolbarPosition: 'Bottom',
        items: [
            { iconCss: 'e-icons e-assist-attachment-icon', align: 'Left', tooltip: 'Attach File' },
            { iconCss: 'e-icons e-assist-speech-to-text', align: 'Right' },
            { iconCss: 'e-icons e-assist-send', align: 'Right' }
        ]
    };
    var responseToolbarSettings = {
        items: [
            { iconCss: 'e-icons e-assist-copy', tooltip: 'Copy response' },
            { iconCss: 'e-icons e-block-add-icon', tooltip: 'Insert into this page' },
            { iconCss: 'e-icons e-assist-like', tooltip: 'Like' },
            { iconCss: 'e-icons e-assist-dislike', tooltip: 'Need improvement' },
            { iconCss: 'e-icons e-assist-audio', tooltip: 'Read aloud' }
        ],
        itemClicked: responseToolbarItemClicked
    };
    var attachmentSettings = {
        saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove'
    };
    var speechToTextSettings = { enable: true };
    // BlockEditor settings
    var imageBlockSettings = {
        saveUrl: 'https://services.syncfusion.com/react/production/api/RichTextEditor/SaveFile',
        path: 'https://services.syncfusion.com/react/production/RichTextEditor/'
    };
    return (React.createElement("div", { className: 'control-section' },
        React.createElement("div", { className: "ask-ai-editor e-card" },
            React.createElement("div", { className: "ask-ai-editor-container" },
                React.createElement("div", { className: "ask-ai-editor-page" },
                    React.createElement("div", { className: "ask-ai-editor-content" },
                        React.createElement(ej2_react_blockeditor_1.BlockEditorComponent, { height: "600px", id: 'ask-ai-block-editor', blocks: data["askAssistantData"], users: data["users"], imageBlockSettings: imageBlockSettings, ref: blockEditorInstance })))),
            React.createElement(ej2_react_popups_1.DialogComponent, { id: "dialogElem", target: ".ask-ai-editor-page", position: { X: 'right', Y: '0' }, animationSettings: { effect: 'FadeZoom' }, width: "500px", visible: false, cssClass: "custom-dialog", ref: dialogInstance },
                React.createElement("div", { id: "assistviewWrapper", className: "ask-ai-assistview" },
                    React.createElement(ej2_react_interactive_chat_1.AIAssistViewComponent, { id: "aiAssistView", enableStreaming: true, promptSuggestions: notionSuggestions, promptSuggestionItemTemplate: suggestionItemContent, promptRequest: onPromptRequest, bannerTemplate: bannerTemplate, toolbarSettings: assistViewToolbarSettings, footerToolbarSettings: footerToolbarSettings, responseToolbarSettings: responseToolbarSettings, enableAttachments: true, attachmentSettings: attachmentSettings, speechToTextSettings: speechToTextSettings, created: onAssistViewCreated, ref: assistInstance },
                        React.createElement(ej2_react_interactive_chat_1.ViewsDirective, null,
                            React.createElement(ej2_react_interactive_chat_1.ViewDirective, { type: 'Assist', name: 'New AI chat' }))))),
            React.createElement(ej2_react_navigations_1.SidebarComponent, { id: "askAiSidebar", target: ".ask-ai-editor-page", width: "400px", position: "Right", enableGestures: false, animate: false, isOpen: false, ref: sidebarInstance }),
            React.createElement(ej2_react_buttons_1.FabComponent, { id: "fabElem", iconCss: "e-icons e-magic-wand", target: ".ask-ai-editor-page", ref: function (fab) { fabInstance.current = fab; } })),
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
exports.default = AskAIAssistant;
