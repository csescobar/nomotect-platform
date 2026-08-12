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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
require("./ai-models.css");
var sample_base_1 = require("../common/sample-base");
var ej2_react_interactive_chat_1 = require("@syncfusion/ej2-react-interactive-chat");
var ej2_react_navigations_1 = require("@syncfusion/ej2-react-navigations");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var ej2_react_lists_1 = require("@syncfusion/ej2-react-lists");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var ej2_react_notifications_1 = require("@syncfusion/ej2-react-notifications");
var marked_1 = require("marked");
var ai_service_1 = require("../common/ai-service");
var data = require("./promptResponseData.json");
var promptResponseData = data.defaultPromptResponseData || data;
var AIAssistModels = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var aiAssistRef = (0, react_1.useRef)(null);
    var sidebarRef = (0, react_1.useRef)(null);
    var toastRef = (0, react_1.useRef)(null);
    var listRef = (0, react_1.useRef)(null);
    var _a = (0, react_1.useState)(false), isMobile = _a[0], setIsMobile = _a[1];
    var _b = (0, react_1.useState)(false), enableDock = _b[0], setEnableDock = _b[1];
    var dockSize = (0, react_1.useState)('50px')[0];
    var enableGestures = (0, react_1.useState)(false)[0];
    var _c = (0, react_1.useState)('Push'), sidebarType = _c[0], setSidebarType = _c[1];
    var _d = (0, react_1.useState)(false), showBackdrop = _d[0], setShowBackdrop = _d[1];
    var _e = (0, react_1.useState)(false), closeOnDocumentClick = _e[0], setCloseOnDocumentClick = _e[1];
    var _f = (0, react_1.useState)(false), stopStreaming = _f[0], setStopStreaming = _f[1];
    var showHeader = (0, react_1.useState)(false)[0];
    var suggestions = (0, react_1.useState)([
        'What are the best tools for organizing tasks?',
        'How can I maintain work-life balance?'
    ])[0];
    var _g = (0, react_1.useState)([]), listData = _g[0], setListData = _g[1];
    var _h = (0, react_1.useState)(null), selectedConvId = _h[0], setSelectedConvId = _h[1];
    var _j = (0, react_1.useState)('openai'), selectedModel = _j[0], setSelectedModel = _j[1];
    var selectedConvIdRef = (0, react_1.useRef)(null);
    var abortControllerRef = (0, react_1.useRef)();
    var attachmentSettings = {
        saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove'
    };
    var footerToolbarSettings = {
        toolbarPosition: 'Bottom'
    };
    // Ensures the base object for storing conversations exists in localStorage.
    var ensureStore = function () {
        if (!localStorage.getItem('aiassist-model')) {
            localStorage.setItem('aiassist-model', JSON.stringify({}));
        }
    };
    // Retrieves and formats conversation metadata for sidebar listing.
    var getLeftPaneData = function () {
        var appData = JSON.parse(localStorage.getItem('aiassist-model') || '{}');
        return Object.keys(appData)
            .map(function (k) { return ({ id: k, num: parseInt(k, 10) }); })
            .filter(function (x) { return !isNaN(x.num); })
            .sort(function (a, b) { return b.num - a.num; })
            .map(function (x) {
            var conv = appData[x.id];
            var name = (conv === null || conv === void 0 ? void 0 : conv.name) ? String(conv.name).split('\n')[0] : 'Untitled Conversation';
            return { id: x.id, text: name };
        });
    };
    (0, react_1.useEffect)(function () {
        selectedConvIdRef.current = selectedConvId;
    }, [selectedConvId]);
    // Refreshes the conversation list UI with the latest localStorage data.
    var refreshConversationList = function () {
        var next = getLeftPaneData();
        setListData(next);
        setTimeout(function () {
            if (listRef.current) {
                listRef.current.dataSource = next;
                listRef.current.dataBind();
            }
        }, 0);
    };
    // Calculates the next incrementing conversation identifier.
    var getNextConvId = function () {
        var appData = JSON.parse(localStorage.getItem('aiassist-model') || '{}');
        var ids = Object.keys(appData).map(function (k) { return parseInt(k, 10); }).filter(function (v) { return !isNaN(v); });
        var maxId = ids.length ? Math.max.apply(Math, ids) : 0;
        return String(maxId + 1);
    };
    // Creates a new conversation entry in localStorage and returns its ID.
    var createNewConversation = function () {
        var newId = getNextConvId();
        var appData = JSON.parse(localStorage.getItem('aiassist-model') || '{}');
        appData[newId] = {
            name: 'New Conversation',
            prompts: [],
            promptSuggestions: __spreadArray([], suggestions, true)
        };
        localStorage.setItem('aiassist-model', JSON.stringify(appData));
        refreshConversationList();
        return newId;
    };
    // Updates the display name of a conversation once the first prompt is known.
    var updateConversationName = function (prompt, convId) {
        var _a;
        var id = (_a = convId !== null && convId !== void 0 ? convId : selectedConvId) !== null && _a !== void 0 ? _a : undefined;
        if (!id)
            return;
        var appData = JSON.parse(localStorage.getItem('aiassist-model') || '{}');
        var conv = appData[id];
        if (conv && (conv.name === 'New Conversation' || !conv.name)) {
            conv.name = (prompt.slice(0, 40).trim() || 'Untitled Conversation');
            localStorage.setItem('aiassist-model', JSON.stringify(appData));
            refreshConversationList();
        }
    };
    // Saves the current prompt/response history into localStorage for persistence.
    var checkAndUpdateLocalStorage = function () {
        var _a;
        if (!selectedConvId)
            return;
        var appData = JSON.parse(localStorage.getItem('aiassist-model') || '{}');
        var prompts = ((_a = aiAssistRef.current) === null || _a === void 0 ? void 0 : _a.prompts) || [];
        if (!appData[selectedConvId])
            return;
        appData[selectedConvId].prompts = prompts.map(function (p) { return ({
            prompt: p.prompt || '',
            response: p.response || ''
        }); });
        localStorage.setItem('aiassist-model', JSON.stringify(appData));
    };
    // Loads stored prompts and suggestions into the Assist View for a conversation.
    var updateAIAssistViewData = function (id) {
        var _a, _b;
        if (!aiAssistRef.current)
            return;
        aiAssistRef.current.prompts = [];
        aiAssistRef.current.promptSuggestions = suggestions;
        if (id) {
            var appData = JSON.parse(localStorage.getItem('aiassist-model') || '{}');
            var conv = appData[id];
            if (conv) {
                aiAssistRef.current.prompts = conv.prompts || [];
                aiAssistRef.current.promptSuggestions = conv.promptSuggestions || suggestions;
            }
        }
        (_b = (_a = aiAssistRef.current).dataBind) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    // Configures the sidebar layout to be responsive across device sizes.
    var applySidebarConfig = function () {
        var mobile = window.innerWidth <= 680;
        setIsMobile(mobile);
        if (sidebarRef.current) {
            var s = sidebarRef.current;
            s.enableDock = false;
            if (mobile) {
                setSidebarType('Over');
                setShowBackdrop(true);
                setCloseOnDocumentClick(true);
                s.type = 'Over';
                s.showBackdrop = true;
                s.closeOnDocumentClick = true;
                s.hide();
            }
            else {
                setSidebarType('Push');
                setShowBackdrop(false);
                setCloseOnDocumentClick(false);
                s.type = 'Push';
                s.showBackdrop = false;
                s.closeOnDocumentClick = false;
                s.show();
            }
            s.dataBind();
        }
    };
    (0, react_1.useEffect)(function () {
        ensureStore();
        refreshConversationList();
        applySidebarConfig();
        var onResize = function () { return applySidebarConfig(); };
        window.addEventListener('resize', onResize);
        if (listData.length === 0) {
            loadNewAIAssist();
        }
        else if (!selectedConvId && listData[0]) {
            onItemSelect(listData[0]);
        }
        return function () {
            window.removeEventListener('resize', onResize);
        };
    }, []);
    // Toggles the visibility of the sidebar in response to user actions.
    var toggleSidebar = function () {
        var _a;
        (_a = sidebarRef.current) === null || _a === void 0 ? void 0 : _a.toggle();
    };
    // Hides the sidebar when the close button is triggered.
    var closeSidebar = function () {
        var _a;
        (_a = sidebarRef.current) === null || _a === void 0 ? void 0 : _a.hide();
    };
    // Handles selection of a conversation from the left pane list.
    var onItemSelect = function (item) {
        var _a, _b;
        setSelectedConvId(item.id);
        updateAIAssistViewData(item.id);
        if (isMobile && ((_a = sidebarRef.current) === null || _a === void 0 ? void 0 : _a.isOpen)) {
            (_b = sidebarRef.current) === null || _b === void 0 ? void 0 : _b.toggle();
        }
    };
    // Deletes a conversation and manages active selection fallback logic.
    var deleteConversation = function (convId, e) {
        e.stopPropagation();
        e.preventDefault();
        var appData = JSON.parse(localStorage.getItem('aiassist-model') || '{}');
        delete appData[convId];
        localStorage.setItem('aiassist-model', JSON.stringify(appData));
        refreshConversationList();
        if (selectedConvId === convId) {
            var next = getLeftPaneData();
            if (next.length > 0)
                onItemSelect(next[0]);
            else
                loadNewAIAssist();
        }
    };
    // Clears the active conversation data and resets the Assist View.
    var loadNewAIAssist = function () {
        var _a, _b;
        setSelectedConvId(null);
        selectedConvIdRef.current = null;
        if (aiAssistRef.current) {
            aiAssistRef.current.prompts = [];
            aiAssistRef.current.promptSuggestions = suggestions;
            (_b = (_a = aiAssistRef.current).dataBind) === null || _b === void 0 ? void 0 : _b.call(_a);
        }
    };
    // Responds to AI model selection changes and displays contextual feedback.
    var onModelChange = function (args) {
        var _a, _b;
        var value = (args === null || args === void 0 ? void 0 : args.value) || 'openai';
        setSelectedModel(value);
        var models = [
            { id: 'gemini', name: 'Gemini 2.5 Flash' },
            { id: 'deepseek', name: 'DeepSeek-R1' },
            { id: 'openai', name: 'GPT-4o-mini(Azure)' }
        ];
        var modelName = ((_a = models.find(function (m) { return m.id === value; })) === null || _a === void 0 ? void 0 : _a.name) || 'the selected model';
        (_b = toastRef.current) === null || _b === void 0 ? void 0 : _b.show({
            content: "<div class=\"toast-content\"><span class=\"e-icons e-magic-wand\"> </span> <span>You are using <b>".concat(modelName, "</b> with standard access</span></div>")
        });
    };
    // Flags streaming to stop when the user clicks the stop button.
    var stopRespondingClick = function () {
        setStopStreaming(true);
    };
    // Streams AI response text character-by-character to emulate live typing.
    var streamAIResponse = function (fullResponse) { return __awaiter(void 0, void 0, void 0, function () {
        var streamed, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    streamed = '';
                    if (!(fullResponse && aiAssistRef.current)) return [3 /*break*/, 3];
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < fullResponse.length && !stopStreaming)) return [3 /*break*/, 3];
                    streamed += fullResponse[i++];
                    aiAssistRef.current.addPromptResponse(marked_1.marked.parse(streamed), false);
                    aiAssistRef.current.scrollToBottom();
                    return [4 /*yield*/, new Promise(function (res) { return setTimeout(res, 10); })];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/, streamed];
            }
        });
    }); };
    // Routes prompt handling to the appropriate model service while managing state.
    var promptRequest = function (args) { return __awaiter(void 0, void 0, void 0, function () {
        var convId, response, _a;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!args.prompt || !args.prompt.trim())
                        return [2 /*return*/];
                    convId = selectedConvIdRef.current;
                    if (!convId) {
                        convId = createNewConversation();
                        setSelectedConvId(convId);
                        selectedConvIdRef.current = convId;
                    }
                    updateConversationName(args.prompt, convId);
                    abortControllerRef.current = new AbortController();
                    if (!(selectedModel === 'openai')) return [3 /*break*/, 2];
                    return [4 /*yield*/, (0, ai_service_1.getAIResponse)(args, abortControllerRef.current)];
                case 1:
                    _a = _c.sent();
                    return [3 /*break*/, 3];
                case 2:
                    _a = '⚠️ Something went wrong while connecting to the AI service. Please check your API key.';
                    _c.label = 3;
                case 3:
                    response = _a;
                    (_b = aiAssistRef.current) === null || _b === void 0 ? void 0 : _b.addPromptResponse(response);
                    checkAndUpdateLocalStorage();
                    return [2 /*return*/];
            }
        });
    }); };
    // Renders the Assist View banner that greets the user.
    var bannerTemplate = function () { return (React.createElement("div", { className: "banner-content e-no-content" },
        React.createElement("div", { className: "e-icons e-assistview-icon" }),
        React.createElement("h3", { className: "ai-assist-banner-subtitle" }, "How can I help you today?"))); };
    // Provides the template for rendering conversation items in the sidebar list.
    var listItemTemplate = function (data) { return (React.createElement("div", { className: "e-text-content", onClick: function () { return onItemSelect({ id: data.id, text: data.text }); }, title: data.text },
        React.createElement("span", { className: "e-list-text" }, data.text),
        React.createElement("span", { className: "delete-icon e-icons e-trash", title: "Delete Conversation", onClick: function (e) { return deleteConversation(data.id, e); } }))); };
    var models = [
        { id: 'gemini', name: 'Gemini 2.5 Flash' },
        { id: 'deepseek', name: 'DeepSeek-R1' },
        { id: 'openai', name: 'GPT-4o-mini(Azure)' }
    ];
    return (React.createElement("div", { className: "control-pane" },
        React.createElement("div", { className: "control-section" },
            React.createElement("div", { className: "ai-models" },
                React.createElement(ej2_react_interactive_chat_1.AIAssistViewComponent, { id: "aiAssistView", ref: function (inst) { return (aiAssistRef.current = inst); }, bannerTemplate: bannerTemplate, enableAttachments: true, attachmentSettings: attachmentSettings, promptSuggestions: suggestions, promptRequest: promptRequest, showHeader: showHeader, enableStreaming: true, stopRespondingClick: stopRespondingClick, width: "auto", footerToolbarSettings: footerToolbarSettings },
                    React.createElement("div", { className: "ai-assist-header" },
                        React.createElement(ej2_react_buttons_1.ButtonComponent, { id: "close", iconCss: "e-icons e-menu", onClick: toggleSidebar }),
                        React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { id: "ai-model-dropdown", dataSource: models, fields: { text: 'name', value: 'id' }, value: selectedModel, change: onModelChange, popupHeight: "200px", width: "200px" })))),
            React.createElement(ej2_react_navigations_1.SidebarComponent, { id: "assistantSidebar", ref: function (inst) { return (sidebarRef.current = inst); }, target: ".ai-models", width: "250px", position: "Left", enableDock: enableDock, dockSize: dockSize, enableGestures: enableGestures, type: sidebarType, showBackdrop: showBackdrop, closeOnDocumentClick: closeOnDocumentClick },
                React.createElement("div", { className: "assistant-sidebar-header" },
                    React.createElement("div", { className: "header-left" },
                        React.createElement("span", { id: "icon-assist", className: "header-icon e-icons e-assistview-icon" }),
                        React.createElement("span", { className: "header-title" }, "AI Assist")),
                    React.createElement(ej2_react_buttons_1.ButtonComponent, { id: "close", cssClass: "e-flat", iconCss: "e-icons e-close", onClick: closeSidebar })),
                React.createElement("div", { className: "assistant-sidebar-content" },
                    React.createElement(ej2_react_buttons_1.ButtonComponent, { cssClass: "new-thread-btn", iconCss: "e-icons e-plus", onClick: loadNewAIAssist }, "New Thread"),
                    React.createElement(ej2_react_lists_1.ListViewComponent, { id: "conversation-list", ref: function (inst) { return (listRef.current = inst); }, dataSource: listData, template: listItemTemplate }))),
            React.createElement(ej2_react_notifications_1.ToastComponent, { ref: function (inst) { return (toastRef.current = inst); }, position: { X: 'right', Y: 'Top' }, target: ".e-views", timeOut: 1500, showCloseButton: true })),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null,
                "This example demonstrates the ",
                React.createElement("strong", null, "AI AssistView"),
                " designed to integrate multiple AI models:",
                React.createElement("code", null, "Azure OpenAI"),
                ", ",
                React.createElement("code", null, "Gemini"),
                " and ",
                React.createElement("code", null, "DeepSeek"),
                ".")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null,
                "In this example, the ",
                React.createElement("strong", null, "AI AssistView"),
                " with a responsive sidebar, AI models dropdown and Markdown streaming to deliver an AI-powered chat interface."),
            React.createElement("ul", null,
                React.createElement("li", null, "Switch between providers (Azure OpenAI, Gemini and DeepSeek) via a dropdown menu, with toast notifications confirming selection."),
                React.createElement("li", null, "Enter your API key(s) to enable live, dynamic responses from the selected provider."),
                React.createElement("li", null,
                    "Stream AI responses with auto-scroll and rich Markdown rendering using ",
                    React.createElement("code", null, "marked"),
                    "."),
                React.createElement("li", null, "Create, select, and delete conversations with conversations stored in the localStorage.")))));
};
exports.default = AIAssistModels;
