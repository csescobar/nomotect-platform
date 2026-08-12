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
var data = require("./promptResponseData.json");
require("./chatgpt-ui.css");
var ej2_react_interactive_chat_1 = require("@syncfusion/ej2-react-interactive-chat");
var ej2_react_navigations_1 = require("@syncfusion/ej2-react-navigations");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var ej2_react_notifications_1 = require("@syncfusion/ej2-react-notifications");
var ej2_react_lists_1 = require("@syncfusion/ej2-react-lists");
var ai_services_1 = require("./ai-services");
var marked_1 = require("marked");
var sample_base_1 = require("../common/sample-base");
var AIAssistant = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    // References to Syncfusion components for imperative interactions
    var aiAssistViewRef = (0, react_1.useRef)(null);
    var sidebarRef = (0, react_1.useRef)(null);
    var toastRef = (0, react_1.useRef)(null);
    var convListRef = (0, react_1.useRef)(null);
    var utilListRef = (0, react_1.useRef)(null);
    var aiToastRef = (0, react_1.useRef)(null);
    var assistantResponses = data.assistantResponses || [];
    var assistantSuggestions = data.assistantSuggestions || [];
    // Local state for tracking selected conversations and layout behaviour
    var _a = (0, react_1.useState)(''), selectedConvId = _a[0], setSelectedConvId = _a[1];
    var _b = (0, react_1.useState)(false), isFirstPrompt = _b[0], setIsFirstPrompt = _b[1];
    var _c = (0, react_1.useState)(false), isMobile = _c[0], setIsMobile = _c[1];
    var _d = (0, react_1.useState)([]), convListData = _d[0], setConvListData = _d[1];
    // Azure OpenAI configuration values (pre-populated for demo purposes)
    var azureApiKey = (0, react_1.useState)('')[0];
    var azureEndpoint = (0, react_1.useState)('')[0];
    var azureDeployment = (0, react_1.useState)('')[0];
    var azureApiVersion = (0, react_1.useState)('')[0];
    // Static utility items displayed in the left-side navigation
    var leftpanelistData = [
        { text: 'New chat', class: 'e-icons e-rename', id: 'new-chat' },
        { text: 'Search chat', class: 'e-icons e-search' },
        { text: 'Library', class: 'e-icons e-reading-view' },
        { text: 'New project', class: 'e-icons e-add-notes' }
    ];
    // Banner template shown when there is no active conversation
    var bannerTemplate = "\n    <div class=\"banner-content e-no-content\">\n      <div class=\"e-icons e-assistview-icon\"></div>\n      <h3 class=\"ai-assist-banner-subtitle\">Hello, I'm Your Digital Assistant!</h3>\n    </div>\n  ";
    (0, react_1.useEffect)(function () {
        var _a;
        // Initialize local storage, populate default list data, and set up responsive sidebar behaviour
        checkInitialLocalStorage();
        setConvListData(getLeftPaneData());
        setSidebarConfig();
        var onResize = function () {
            var mobile = window.innerWidth <= 680;
            if (mobile !== isMobile)
                setSidebarConfig();
            setIsMobile(mobile);
        };
        window.addEventListener('resize', onResize, { passive: true });
        // Initial toast to highlight available AI demos
        (_a = aiToastRef.current) === null || _a === void 0 ? void 0 : _a.show({
            content: "<div class=\"ai-toast-content\"><div class=\"ai-toast-title\">Explore AI Demos</div><span>You can now explore our <strong>AI Demos</strong> with limited AI token usage. Additionally, you can try out our <strong>Syncfusion AI Assistview samples</strong> locally by using your own API key</span></div>",
        });
        return function () { return window.removeEventListener('resize', onResize); };
    }, []);
    (0, react_1.useEffect)(function () {
        var _a;
        // Attach delete button handler to each conversation list item
        var host = (_a = convListRef.current) === null || _a === void 0 ? void 0 : _a.element;
        if (!host)
            return;
        var clickHandler = function (e) {
            var target = e.target;
            var btn = target === null || target === void 0 ? void 0 : target.closest('.delete-btn');
            if (!btn)
                return;
            e.preventDefault();
            e.stopPropagation();
            var li = btn.closest('li');
            var item = convListRef.current.getItemData(li);
            var app = JSON.parse(localStorage.getItem('aiassist-view') || '{}');
            delete app[String(item.id)];
            localStorage.setItem('aiassist-view', JSON.stringify(app));
            var ds = convListRef.current.dataSource.filter(function (d) { return d.id !== item.id; });
            convListRef.current.dataSource = ds;
            convListRef.current.dataBind();
            setConvListData(ds);
            if (selectedConvId === item.id) {
                setSelectedConvId('');
                if (aiAssistViewRef.current) {
                    aiAssistViewRef.current.prompts = [];
                    aiAssistViewRef.current.promptSuggestions = assistantSuggestions;
                }
                updateBannerStyle();
            }
        };
        host.addEventListener('click', clickHandler);
        return function () { return host.removeEventListener('click', clickHandler); };
    }, [convListData, selectedConvId, assistantSuggestions]);
    var getDate = function () { return Date.now(); };
    var checkInitialLocalStorage = function (isClear) {
        if (isClear === void 0) { isClear = false; }
        // Ensure the local storage structure exists for conversation persistence
        if (isClear || !localStorage.getItem('aiassist-view')) {
            localStorage.setItem('aiassist-view', JSON.stringify({}));
        }
    };
    var getLeftPaneData = function () {
        // Build ListView data objects from persisted conversation metadata
        var appData = JSON.parse(localStorage.getItem('aiassist-view') || '{}');
        var keys = Object.keys(appData);
        var items = [];
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            var numericKey = parseInt(key, 10);
            var convData = appData[key];
            if (convData) {
                var name_1 = (convData.name || '').split('\n')[0];
                items.push({
                    text: name_1,
                    id: numericKey,
                    numericId: numericKey
                });
            }
        }
        items.sort(function (a, b) { return b.numericId - a.numericId; });
        return items;
    };
    var refreshConversationList = function () {
        // Recompute and update the sidebar chat list from storage
        setConvListData(getLeftPaneData());
    };
    var setSidebarConfig = function () {
        // Toggle sidebar mode based on screen size, providing responsive behaviour
        var mobile = window.innerWidth <= 680;
        setIsMobile(mobile);
        if (!sidebarRef.current)
            return;
        var sidebar = sidebarRef.current;
        sidebar.enableDock = false;
        sidebar.type = mobile ? 'Over' : 'Push';
        sidebar.showBackdrop = mobile;
        sidebar.dataBind();
        setTimeout(function () { return (mobile ? sidebar.hide() : sidebar.show()); }, 100);
    };
    var updateBannerStyle = function () {
        var _a;
        // Show or hide the introductory banner depending on conversation history
        var bannerElem = document.querySelector('.banner-content');
        if (!bannerElem)
            return;
        var prompts = ((_a = aiAssistViewRef.current) === null || _a === void 0 ? void 0 : _a.prompts) || [];
        bannerElem.style.display = prompts.length > 0 ? 'none' : 'block';
    };
    var updateAIAssistViewData = function (id) {
        // Load saved prompts and suggestions when a conversation is selected
        if (!aiAssistViewRef.current)
            return;
        if (id) {
            var appData = JSON.parse(localStorage.getItem('aiassist-view') || '{}');
            var convData = appData[String(id)];
            if (convData) {
                aiAssistViewRef.current.prompts = convData.prompts || [];
                aiAssistViewRef.current.promptSuggestions = convData.promptSuggestions || assistantSuggestions;
            }
        }
        else {
            aiAssistViewRef.current.prompts = [];
            aiAssistViewRef.current.promptSuggestions = assistantSuggestions;
        }
    };
    var loadNewAIAssist = function () {
        var _a, _b;
        // Reset the chat view without creating a new conversation entry
        setSelectedConvId('');
        setIsFirstPrompt(true);
        if (aiAssistViewRef.current) {
            aiAssistViewRef.current.prompts = [];
            aiAssistViewRef.current.promptSuggestions = assistantSuggestions;
        }
        updateBannerStyle();
        // Deselect any selected conversation
        var sel = (_b = (_a = convListRef.current) === null || _a === void 0 ? void 0 : _a.getSelectedItems) === null || _b === void 0 ? void 0 : _b.call(_a);
        if (sel && sel.item) {
            convListRef.current.unselectItem(sel.item);
        }
    };
    var checkAndUpdateLocalStorage = function (prompt) {
        var _a, _b, _c, _d;
        // Persist conversation state, creating new entries on the first prompt
        var appData = JSON.parse(localStorage.getItem('aiassist-view') || '{}');
        var curConvDate = getDate();
        var prompts = [];
        var orgPrompts = ((_a = aiAssistViewRef.current) === null || _a === void 0 ? void 0 : _a.prompts) || [];
        for (var i = 0; i < orgPrompts.length; i++) {
            prompts.push({
                prompt: orgPrompts[i].prompt || '',
                response: orgPrompts[i].response || ''
            });
        }
        var pSuggestions = [];
        var orgPSuggestions = ((_b = aiAssistViewRef.current) === null || _b === void 0 ? void 0 : _b.promptSuggestions) || [];
        for (var j = 0; j < orgPSuggestions.length; j++) {
            pSuggestions.push(orgPSuggestions[j]);
        }
        if (selectedConvId) {
            var convData = appData[String(selectedConvId)];
            if (convData) {
                var ds = (_c = convListRef.current) === null || _c === void 0 ? void 0 : _c.dataSource;
                if (ds) {
                    for (var k = 0; k < ds.length; k++) {
                        var item = ds[k];
                        if (item && item.id === selectedConvId) {
                            item.text = convData.name;
                            break;
                        }
                    }
                    (_d = convListRef.current) === null || _d === void 0 ? void 0 : _d.dataBind();
                }
                convData.prompts = prompts;
                convData.promptSuggestions = pSuggestions;
                localStorage.setItem('aiassist-view', JSON.stringify(appData));
            }
        }
        else {
            // Create conversation ONLY after first prompt is sent
            var newId = String(curConvDate);
            setSelectedConvId(newId);
            var convData = {
                name: prompt,
                prompts: prompts,
                promptSuggestions: pSuggestions
            };
            appData[newId] = convData;
            localStorage.setItem('aiassist-view', JSON.stringify(appData));
            refreshConversationList();
            setTimeout(function () { var _a; return (_a = convListRef.current) === null || _a === void 0 ? void 0 : _a.selectItem({ index: 0 }); }, 0);
        }
    };
    var updateConversationName = function (prompt) {
        // Update conversation title after the first prompt if needed
        if (isFirstPrompt && selectedConvId) {
            var app = JSON.parse(localStorage.getItem('aiassist-view') || '{}');
            var convData = app[String(selectedConvId)];
            setIsFirstPrompt(false);
            localStorage.setItem('aiassist-view', JSON.stringify(app));
            refreshConversationList();
        }
    };
    var execute = function (prompt) { return __awaiter(void 0, void 0, void 0, function () {
        var finalResult_1, fallback;
        var _a;
        return __generator(this, function (_b) {
            // Main prompt handler: clears suggestions, fetches response, and updates storage/UI
            updateBannerStyle();
            try {
                aiAssistViewRef.current && (aiAssistViewRef.current.promptSuggestions = []);
                finalResult_1 = [];
                setTimeout(function () {
                    var suggestionsObj = assistantResponses.find(function (resp) { return resp.prompt === prompt; });
                    var suggestionResult = suggestionsObj ? suggestionsObj.suggestions || assistantSuggestions : assistantSuggestions;
                    for (var i = 0; i < suggestionResult.length; i++) {
                        if (suggestionResult[i]) {
                            finalResult_1.push(suggestionResult[i].replace('- ', '').replace('* ', '').trim());
                        }
                    }
                }, 1000);
                setTimeout(function () { return __awaiter(void 0, void 0, void 0, function () {
                    var text;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, ai_services_1.getAzureOpenAIAssist)({
                                    messages: prompt,
                                })];
                            case 1:
                                text = _b.sent();
                                (_a = aiAssistViewRef.current) === null || _a === void 0 ? void 0 : _a.addPromptResponse(marked_1.marked.parse(text));
                                if (aiAssistViewRef.current)
                                    aiAssistViewRef.current.promptSuggestions = finalResult_1;
                                checkAndUpdateLocalStorage(prompt);
                                updateConversationName(prompt);
                                return [2 /*return*/];
                        }
                    });
                }); }, 1000);
            }
            catch (_c) {
                fallback = "⚠️ Something went wrong while connecting to the OpenAI service. Please check your API key.";
                (_a = aiAssistViewRef.current) === null || _a === void 0 ? void 0 : _a.addPromptResponse(fallback);
                aiAssistViewRef.current && (aiAssistViewRef.current.promptSuggestions = []);
                updateConversationName(prompt);
            }
            return [2 /*return*/];
        });
    }); };
    var onConvSelect = function (args) {
        // Handle selection of a saved conversation in the sidebar
        if (args.isInteracted) {
            var data_1 = args.data;
            setSelectedConvId(data_1.id);
            updateAIAssistViewData(data_1.id);
            updateBannerStyle();
        }
    };
    // UPDATED: Do not create a conversation on New chat; only reset state
    var onUtilSelect = function (args) {
        var _a, _b, _c;
        // Deselect any selected conversation item (matches TS behavior)
        var sel = (_b = (_a = convListRef.current) === null || _a === void 0 ? void 0 : _a.getSelectedItems) === null || _b === void 0 ? void 0 : _b.call(_a);
        if (sel && sel.item) {
            convListRef.current.unselectItem(sel.item);
        }
        var data = args.data;
        if (data && data.id === 'new-chat') {
            loadNewAIAssist();
        }
        else if (data) {
            (_c = toastRef.current) === null || _c === void 0 ? void 0 : _c.show({
                content: "<div class=\"toast-content\"><span><b>".concat(data.text, "</b> clicked</span></div>")
            });
        }
    };
    var onSidebarOpen = function () {
        document.getElementById('close').style.display = "none";
    };
    var onSidebarClose = function () {
        setTimeout(function () {
            document.getElementById('close').style.display = 'block';
        }, 300);
    };
    var attachmentSettings = {
        saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove'
    };
    return (React.createElement("div", { className: "control-pane" },
        React.createElement("div", { className: "control-section" },
            React.createElement("div", null,
                React.createElement("div", { id: "chatgpt" },
                    React.createElement("div", null,
                        React.createElement("div", { className: "ai-assist-header" },
                            React.createElement(ej2_react_buttons_1.ButtonComponent, { id: "close", title: "Expand Navigation", iconCss: "e-icons e-menu", cssClass: "e-flat", onClick: function () { var _a; return (_a = sidebarRef.current) === null || _a === void 0 ? void 0 : _a.toggle(); } })),
                        React.createElement(ej2_react_interactive_chat_1.AIAssistViewComponent, { id: "aiAssistView", ref: aiAssistViewRef, promptSuggestions: assistantSuggestions, enableAttachments: true, attachmentSettings: attachmentSettings, promptRequest: function (args) {
                                updateBannerStyle();
                                execute(args.prompt);
                            }, bannerTemplate: bannerTemplate, showHeader: false, width: "auto" }))))),
        React.createElement(ej2_react_navigations_1.SidebarComponent, { ref: sidebarRef, width: "250px", target: "#chatgpt", type: "Push", enableDock: false, enableGestures: false, showBackdrop: false, open: onSidebarOpen, close: onSidebarClose, className: "left-content" },
            React.createElement("div", { style: { overflow: 'auto' } },
                React.createElement("div", { className: "assistantToolbar" },
                    React.createElement("div", { className: "header-left" },
                        React.createElement("span", { id: "icon-assist", className: "header-icon e-icons e-assistview-icon" }),
                        React.createElement("span", { className: "header-title" }, "AI Assist")),
                    React.createElement(ej2_react_buttons_1.ButtonComponent, { id: "toggle-btn-close", title: "Collapse Navigation", cssClass: "e-flat", iconCss: isMobile ? 'e-icons e-close' : 'e-icons e-menu', onClick: function () {
                            var _a;
                            var el = document.getElementById('close');
                            (_a = sidebarRef.current) === null || _a === void 0 ? void 0 : _a.toggle();
                        } })),
                React.createElement(ej2_react_lists_1.ListViewComponent, { id: "left-pane-listview", ref: utilListRef, dataSource: leftpanelistData, template: '<div class="e-list-wrapper"><span class="${class}"></span><span class="e-list-content">${text}</span></div>', select: onUtilSelect }),
                React.createElement("div", { className: "assistant-sidebar-content", style: { marginTop: 10, height: 235 } },
                    React.createElement("div", { className: "header-conversation" }, "Chats"),
                    React.createElement(ej2_react_lists_1.ListViewComponent, { id: "assistant-listview-grp", ref: convListRef, dataSource: convListData, fields: { id: 'id', text: 'text' }, template: '<div class="e-text-content"><span class="e-list-text">${text}</span><span class="e-icons e-trash delete-btn" title="Delete Conversation"></span></div>', select: onConvSelect })),
                React.createElement("div", { className: "sign-in" },
                    React.createElement("span", { className: "e-icons e-user" }),
                    React.createElement("span", { className: "user-name" }, "User"),
                    React.createElement(ej2_react_buttons_1.ButtonComponent, { id: "upgrade" }, "Upgrade")))),
        React.createElement(ej2_react_notifications_1.ToastComponent, { id: "toast", ref: toastRef, position: { X: 'Right', Y: 'Top' }, timeOut: 1500, showCloseButton: true, target: ".e-views" }),
        React.createElement(ej2_react_notifications_1.ToastComponent, { id: "ai-toast", ref: aiToastRef, position: { X: 'Right', Y: 'Top' }, timeOut: 3000, showCloseButton: true, target: ".e-view" }),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This sample demonstrates a AI chat assistant with conversation management. Users can create new conversations and receive AI-generated responses with relevant suggestions.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null, "The AI AssistView component in this example showcases integration of an AI usage with conversation history management which include's:"),
            React.createElement("ul", null,
                React.createElement("li", null, "Sidebar with organized conversation history"),
                React.createElement("li", null, "New Chat action to start a fresh conversation"),
                React.createElement("li", null,
                    "Customizable banner interface using ",
                    React.createElement("code", null, "bannerTemplate"),
                    " for guidance messages"),
                React.createElement("li", null,
                    "Intelligent follow-up suggestions after each responses via ",
                    React.createElement("code", null, "promptSuggestions")),
                React.createElement("li", null, "Attachment with configurable upload endpoints"),
                React.createElement("li", null, "LocalStorage persistence for prompts and suggestions to retain history across sessions"),
                React.createElement("li", null, "Responsive sidebar behavior with toggle buttons for desktop and mobile"),
                React.createElement("li", null, "Toast notifications for non-chat sidebar actions")))));
};
exports.default = AIAssistant;
