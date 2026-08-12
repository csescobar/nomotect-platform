"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var ej2_react_interactive_chat_1 = require("@syncfusion/ej2-react-interactive-chat");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var ej2_buttons_1 = require("@syncfusion/ej2-buttons");
var ej2_react_popups_1 = require("@syncfusion/ej2-react-popups");
var ej2_splitbuttons_1 = require("@syncfusion/ej2-splitbuttons");
var ej2_react_navigations_1 = require("@syncfusion/ej2-react-navigations");
var ej2_react_notifications_1 = require("@syncfusion/ej2-react-notifications");
var sample_base_1 = require("../common/sample-base");
var data = require("./promptResponseData.json");
require("./notion-ai-clone.css");
var NotionAIClone = function () {
    var notionSuggestions = data["notionSuggestions"];
    var iconMapByIndex = data["iconMapByIndex"];
    var modelIcons = data["modelIcons"];
    var assistInstance = (0, react_1.useRef)(null);
    var dialogInstance = (0, react_1.useRef)(null);
    var sidebarInstance = (0, react_1.useRef)(null);
    var toastInstance = (0, react_1.useRef)(null);
    var fabInstance = (0, react_1.useRef)(null);
    // Vanilla Syncfusion dropdowns — same pattern as TS version
    var modelDropdownRef = (0, react_1.useRef)(null);
    var settingsDropdownRef = (0, react_1.useRef)(null);
    var screenDropdownRef = (0, react_1.useRef)(null);
    var historyDropdownRef = (0, react_1.useRef)(null);
    // Mutable refs for state shared across callbacks (avoids stale closure issues)
    var sessionChats = (0, react_1.useRef)([]);
    var activeSessionId = (0, react_1.useRef)(null);
    var isFirstSessionAdded = (0, react_1.useRef)(false);
    var webIconCheckedState = (0, react_1.useRef)(true);
    var editIconCheckedState = (0, react_1.useRef)(true);
    var currentMode = (0, react_1.useRef)('Sidebar');
    var lastActiveMode = (0, react_1.useRef)('Sidebar'); // tracks mode before hide, used by FAB to restore
    var dialogOpenClose = (0, react_1.useCallback)(function () {
        if (dialogInstance.current) {
            dialogInstance.current.visible = !dialogInstance.current.visible;
        }
    }, []);
    var toggleBackgroundState = (0, react_1.useCallback)(function (show) {
        var notionContainer = document.querySelector('.notes-app-container');
        if (notionContainer) {
            show ? notionContainer.classList.remove('e-hidden') : notionContainer.classList.add('e-hidden');
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
        setTimeout(function () {
            var defaultResponse = 'For real-time prompt processing, connect the AI AssistView control to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            if (assistInstance.current) {
                assistInstance.current.addPromptResponse(defaultResponse);
                if (!isFirstSessionAdded.current && !activeSessionId.current) {
                    createNewSession(true);
                    isFirstSessionAdded.current = true;
                }
                assistInstance.current.promptSuggestions = [];
            }
        }, 2000);
    }, [createNewSession]);
    var moveAssistview = (0, react_1.useCallback)(function (mode) {
        if (!mode || currentMode.current === mode)
            return;
        lastActiveMode.current = mode;
        currentMode.current = mode;
        var wrapper = document.getElementById('assistviewWrapper');
        var fs = document.getElementById('fullscreenContainer');
        if (dialogInstance.current)
            dialogInstance.current.hide();
        if (sidebarInstance.current)
            sidebarInstance.current.hide();
        if (fs)
            fs.style.display = 'none';
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
            case 'Full screen':
                if (fs && wrapper) {
                    fs.style.display = 'block';
                    fs.appendChild(wrapper);
                }
                toggleBackgroundState(false);
                toggleIconClass('e-chevron-right-double', 'e-horizontal-line');
                break;
        }
    }, [toggleBackgroundState, toggleIconClass]);
    var toggleSwitch = (0, react_1.useCallback)(function (args, text) {
        var _a, _b, _c, _d, _e, _f;
        var visibility = !args.checked;
        if (text === 'Can make changes') {
            editIconCheckedState.current = !visibility;
            var editIcon = (_c = (_b = (_a = assistInstance.current.footerToolbarEle) === null || _a === void 0 ? void 0 : _a.element) === null || _b === void 0 ? void 0 : _b.querySelector('.e-edit')) === null || _c === void 0 ? void 0 : _c.closest('.e-toolbar-item');
            if (editIcon)
                visibility ? editIcon.classList.remove('e-hidden') : editIcon.classList.add('e-hidden');
        }
        else if (text === 'Web access') {
            webIconCheckedState.current = !visibility;
            var webIcon = (_f = (_e = (_d = assistInstance.current.footerToolbarEle) === null || _d === void 0 ? void 0 : _d.element) === null || _e === void 0 ? void 0 : _e.querySelector('.e-time-zone')) === null || _f === void 0 ? void 0 : _f.closest('.e-toolbar-item');
            if (webIcon)
                visibility ? webIcon.classList.remove('e-hidden') : webIcon.classList.add('e-hidden');
        }
    }, []);
    var onSettingsDropdownCreated = (0, react_1.useCallback)(function () {
        var settingsItems = [
            { text: 'Can make changes', id: 'edit' },
            { text: 'Web access', id: 'web-access' },
            { text: 'Help Center', id: 'help-center' }
        ];
        setTimeout(function () {
            settingsItems.forEach(function (item) {
                if (item.text === 'Help Center')
                    return;
                var isChecked = item.id === 'edit' ? editIconCheckedState.current : webIconCheckedState.current;
                var switchElem = document.getElementById("settings-switch-".concat(item.id));
                if (!switchElem)
                    return;
                new ej2_buttons_1.Switch({
                    checked: isChecked,
                    change: function (args) { return toggleSwitch(args, item.text); }
                }).appendTo(switchElem);
            });
        }, 50);
    }, [toggleSwitch]);
    var updateModelIcon = (0, react_1.useCallback)(function (modelName) {
        if (modelDropdownRef.current) {
            modelDropdownRef.current.iconCss = "model-icon ".concat(modelIcons[modelName]);
            modelDropdownRef.current.dataBind();
        }
    }, [modelIcons]);
    // Mirrors TS `created()` — initialize all imperative dropdowns once AIAssistView is ready
    var onAssistViewCreated = (0, react_1.useCallback)(function () {
        var modelItems = [
            { text: 'Auto', iconCss: 'e-icons e-assistview-icon' },
            { text: 'Sonnet 4.6', iconCss: 'model-icon model-sonet' },
            { text: 'Opus 4.6', iconCss: 'model-icon model-opus' },
            { text: 'Gemini 3.1 Pro', iconCss: 'model-icon model-gemini' },
            { text: 'GPT 5.2', iconCss: 'model-icon model-gpt' }
        ];
        var currentModelLabel = 'Auto';
        modelDropdownRef.current = new ej2_splitbuttons_1.DropDownButton({
            items: modelItems,
            cssClass: 'e-caret-hide e-flat',
            iconCss: 'e-icons e-assistview-icon',
            beforeItemRender: function (args) {
                var item = modelItems.find(function (m) { return m.text === args.item.text; });
                var iconCss = item ? item.iconCss : '';
                var isEIcon = iconCss.startsWith('e-icons');
                args.element.innerHTML = "\n          <span class=\"".concat(iconCss, "\" style=\"margin-right:8px;vertical-align:middle;").concat(isEIcon ? 'margin-top:10px;display:inline-block;' : '', "\"></span>\n          <span>").concat(args.item.text, "</span>");
                if (currentModelLabel === args.item.text) {
                    args.element.classList.add('e-selected');
                }
            },
            select: function (args) {
                currentModelLabel = args.item.text;
                modelDropdownRef.current.content = args.item.text;
                updateModelIcon(args.item.text);
            }
        });
        modelDropdownRef.current.appendTo('#custombtn');
        var settingsItems = [
            { text: 'Can make changes', iconCss: 'e-icons e-edit', id: 'edit' },
            { text: 'Web access', iconCss: 'e-icons e-time-zone', id: 'web-access' },
            { text: 'Help Center', iconCss: 'e-icons e-reading-view', id: 'help-center' }
        ];
        settingsDropdownRef.current = new ej2_splitbuttons_1.DropDownButton({
            items: settingsItems,
            iconCss: 'e-icons e-settings',
            cssClass: 'e-caret-hide e-flat',
            popupWidth: '230px',
            beforeItemRender: function (args) {
                var item = args.item;
                if (item.text === 'Help Center') {
                    args.element.innerHTML = "\n                    <div class=\"settings-item\">\n                      <span class=\"e-menu-icon ".concat(item.iconCss, "\"></span>\n                      <span class=\"settings-label\">").concat(item.text, "</span>\n                    </div>");
                    return;
                }
                args.element.innerHTML = "\n                  <div class=\"settings-item\">\n                    <span class=\"e-menu-icon ".concat(item.iconCss, "\"></span>\n                    <span class=\"settings-label\">").concat(item.text, "</span>\n                    <input type=\"checkbox\" class=\"settings-switch\" id=\"settings-switch-").concat(item.id, "\" />\n                  </div>");
            },
            open: onSettingsDropdownCreated
        });
        settingsDropdownRef.current.appendTo('#settings-icon');
        screenDropdownRef.current = new ej2_splitbuttons_1.DropDownButton({
            items: [{ text: 'Sidebar' }, { text: 'Floating' }, { separator: true }, { text: 'Full screen' }],
            iconCss: 'e-icons e-resize',
            cssClass: 'e-caret-hide e-flat',
            beforeItemRender: function (args) {
                if (currentMode.current === args.item.text)
                    args.element.classList.add('e-selected');
            },
            select: function (args) { return moveAssistview(args.item.text); }
        });
        screenDropdownRef.current.appendTo('#screen-resizer');
        historyDropdownRef.current = new ej2_splitbuttons_1.DropDownButton({
            items: [{ text: 'No Chat History' }],
            iconCss: 'e-icons e-history',
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
        historyDropdownRef.current.appendTo('#history-icon');
        // Initialize sidebar and move wrapper to it (matching JS behavior)
        if (sidebarInstance.current) {
            sidebarInstance.current.show();
            var wrapper = document.getElementById('assistviewWrapper');
            if (wrapper) {
                sidebarInstance.current.element.appendChild(wrapper);
            }
            toggleIconClass('e-horizontal-line', 'e-chevron-right-double');
        }
    }, [onSettingsDropdownCreated, updateModelIcon, moveAssistview, loadSession, toggleIconClass]);
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
        if (fabInstance.current) {
            // FAB is hidden on mount — only shown when assistview is hidden
            fabInstance.current.element.style.display = 'none';
            fabInstance.current.element.onclick = function () {
                toggleBackgroundState(true);
                var modeToRestore = lastActiveMode.current || 'Sidebar';
                // Temporarily clear currentMode so moveAssistview's guard doesn't block the restore
                currentMode.current = '';
                moveAssistview(modeToRestore);
                fabInstance.current.element.style.display = 'none';
            };
        }
    }, [moveAssistview, toggleBackgroundState]);
    var toolbarItemClicked = (0, react_1.useCallback)(function (args) {
        if (args.item.iconCss === 'e-icons e-edit-notes') {
            createNewSession();
            if (assistInstance.current)
                assistInstance.current.promptSuggestions = notionSuggestions;
        }
        else if (args.item.iconCss === 'e-icons e-horizontal-line' ||
            args.item.iconCss === 'e-icons e-chevron-right-double') {
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
            // Preserve lastActiveMode so the FAB can restore to the correct mode.
            // Reset currentMode to '' so moveAssistview's guard won't block re-entry on FAB click.
            lastActiveMode.current = currentMode.current || 'Sidebar';
            currentMode.current = '';
            if (fabInstance.current)
                fabInstance.current.element.style.display = '';
        }
        else if (args.item.iconCss === 'e-icons e-export') {
            if (toastInstance.current)
                toastInstance.current.show();
        }
    }, [createNewSession, notionSuggestions, toggleBackgroundState]);
    var footerToolbarItemClicked = (0, react_1.useCallback)(function (args) {
        if (args.item.iconCss === 'e-icons e-edit' || args.item.iconCss === 'e-icons e-time-zone') {
            if (settingsDropdownRef.current)
                settingsDropdownRef.current.toggle();
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
            { iconCss: 'e-icons e-export', align: 'Right', tooltip: 'Share Chat' },
            { align: 'Right', tooltip: 'Chat History', template: '<button id="history-icon"></button>' },
            { iconCss: 'e-icons e-edit-notes', align: 'Right', tooltip: 'Start New chat' },
            { align: 'Right', tooltip: 'Switch Chat Mode', template: '<button id="screen-resizer"></button>' },
            { iconCss: 'e-icons e-horizontal-line', align: 'Right', tooltip: 'Hide Chat' }
        ],
        itemClicked: toolbarItemClicked
    };
    var footerToolbarSettings = {
        toolbarPosition: 'Bottom',
        items: [
            { iconCss: 'e-icons e-assist-attachment-icon', align: 'Left', tooltip: 'Attach File' },
            { align: 'Left', tooltip: 'Settings', template: '<button id="settings-icon"></button>' },
            { iconCss: 'e-icons e-edit', align: 'Left', tooltip: 'Edit access', visible: false },
            { iconCss: 'e-icons e-time-zone', align: 'Left', tooltip: 'Web access', visible: false },
            { align: 'Right', text: 'Auto', template: '<button id="custombtn">Auto</button>' },
            { iconCss: 'e-icons e-assist-speech-to-text', align: 'Right' },
            { iconCss: 'e-icons e-assist-send', align: 'Right' }
        ],
        itemClick: footerToolbarItemClicked
    };
    var responseToolbarSettings = {
        items: [
            { iconCss: 'e-icons e-assist-copy' },
            { iconCss: 'e-icons e-assist-like' },
            { iconCss: 'e-icons e-assist-dislike' },
            { iconCss: 'e-icons e-assist-audio' }
        ]
    };
    var attachmentSettings = {
        saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove'
    };
    var speechToTextSettings = { enable: true };
    return (React.createElement("div", { className: 'control-section' },
        React.createElement("div", { className: "notion-like-ui e-card" },
            React.createElement("div", { className: "notes-app-container" },
                React.createElement("div", { className: "notes-page" },
                    React.createElement("header", { className: "notes-header" },
                        React.createElement("span", { className: "page-icon" }, "\uD83D\uDCD8"),
                        React.createElement("h1", { className: "page-title" }, "Product Planning Notes")),
                    React.createElement("section", { className: "notes-content" },
                        React.createElement("h3", null, "Project: Website Revamp"),
                        React.createElement("h4", null, "Objectives"),
                        React.createElement("ul", null,
                            React.createElement("li", null, "Improve page load performance"),
                            React.createElement("li", null, "Simplify navigation for end users"),
                            React.createElement("li", null, "Optimize mobile experience"),
                            React.createElement("li", null, "Increase accessibility compliance")),
                        React.createElement("h4", null, "Discussion Points"),
                        React.createElement("ul", null,
                            React.createElement("li", null, "Dashboard load time is slow on mobile devices"),
                            React.createElement("li", null, "Export and reporting options are difficult to locate"),
                            React.createElement("li", null, "Accessibility audit flagged missing ARIA labels")),
                        React.createElement("h4", null, "Ideas"),
                        React.createElement("ul", null,
                            React.createElement("li", null, "Introduce lazy loading for charts and grids"),
                            React.createElement("li", null, "Move advanced filters into a secondary panel"),
                            React.createElement("li", null, "Add keyboard navigation and screen reader support"))),
                    React.createElement("footer", { className: "notes-footer" },
                        React.createElement("span", { className: "hint-icon" }, "\u2728"),
                        React.createElement("span", { className: "hint-text" }, "Use AI Assist to summarize notes, generate tasks, or get insights.")))),
            React.createElement(ej2_react_popups_1.DialogComponent, { id: "dialogElem", target: ".notes-page", position: { X: 'right', Y: 0 }, animationSettings: { effect: 'FadeZoom' }, width: "500px", visible: false, cssClass: "custom-dialog", ref: dialogInstance },
                React.createElement("div", { id: "assistviewWrapper", className: "notion-aiassistview" },
                    React.createElement(ej2_react_interactive_chat_1.AIAssistViewComponent, { id: "aiAssistView", promptSuggestions: notionSuggestions, promptSuggestionItemTemplate: suggestionItemContent, promptRequest: onPromptRequest, bannerTemplate: bannerTemplate, toolbarSettings: assistViewToolbarSettings, footerToolbarSettings: footerToolbarSettings, responseToolbarSettings: responseToolbarSettings, enableAttachments: true, enableStreaming: true, attachmentSettings: attachmentSettings, speechToTextSettings: speechToTextSettings, created: onAssistViewCreated, ref: assistInstance },
                        React.createElement(ej2_react_interactive_chat_1.ViewsDirective, null,
                            React.createElement(ej2_react_interactive_chat_1.ViewDirective, { type: 'Assist', name: 'New AI chat' }))))),
            React.createElement(ej2_react_navigations_1.SidebarComponent, { id: "notionSidebar", target: ".notes-page", width: "400px", position: "Right", animate: false, isOpen: false, ref: sidebarInstance }),
            React.createElement("div", { id: "fullscreenContainer" }),
            React.createElement(ej2_react_buttons_1.FabComponent, { id: "fabElem", iconCss: "e-icons e-magic-wand", target: ".notes-page", ref: function (fab) { fabInstance.current = fab; } }),
            React.createElement("div", { id: "toastTarget" }),
            React.createElement(ej2_react_notifications_1.ToastComponent, { content: "Share chat option is clicked !", position: { X: 'Right', Y: 'Top' }, showCloseButton: true, ref: toastInstance })),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This sample demonstrates a configurable AI AssistView that supports multiple chat display modes, model selection, chat history management, file attachments, and voice-based input and output interactions.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null, "The AI AssistView sample showcases how an interactive assistant experience can be embedded and managed within different UI layouts while offering rich user controls and session persistence:"),
            React.createElement("ul", null,
                React.createElement("li", null, "Floating, sidebar, and full-screen chat modes with seamless view switching."),
                React.createElement("li", null, "Prompt suggestions rendered using a custom item template with contextual icons."),
                React.createElement("li", null, "Multiple AI model selection via a dropdown, with dynamic icon updates."),
                React.createElement("li", null, "Chat session creation, persistence, and history navigation."),
                React.createElement("li", null, "File upload and removal support using configured attachment endpoints."),
                React.createElement("li", null, "Speech-to-text input and text-to-speech playback for hands-free interaction."),
                React.createElement("li", null, "Toolbar actions for starting new chats, sharing conversations, hiding the assistant, and resizing views."),
                React.createElement("li", null, "Floating action button (FAB) to restore the assistant when hidden.")))));
};
exports.default = NotionAIClone;
