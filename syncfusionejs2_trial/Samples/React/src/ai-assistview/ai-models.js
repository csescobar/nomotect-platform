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
var AIAssistModels = /** @class */ (function (_super) {
    __extends(AIAssistModels, _super);
    function AIAssistModels() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isMobile = false;
        _this.enableDock = false;
        _this.dockSize = '50px';
        _this.enableGestures = false;
        _this.sidebarType = 'Push';
        _this.showBackdrop = false;
        _this.closeOnDocumentClick = false;
        _this.stopStreaming = false;
        _this.showHeader = false;
        _this.suggestions = [
            'What are the best tools for organizing tasks?',
            'How can I maintain work-life balance?'
        ];
        _this.listData = [];
        _this.selectedConvId = null;
        _this.selectedModel = 'openai';
        _this.attachmentSettings = {
            saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save',
            removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove'
        };
        _this.footerToolbarSettings = {
            toolbarPosition: 'Bottom'
        };
        // Responds to window resize events by reapplying sidebar configuration.
        _this.onResize = function () {
            _this.applySidebarConfig();
        };
        // Toggles the sidebar open/close state.
        _this.toggleSidebar = function () {
            var _a;
            (_a = _this.sidebar) === null || _a === void 0 ? void 0 : _a.toggle();
        };
        // Closes the sidebar explicitly.
        _this.closeSidebar = function () {
            var _a;
            (_a = _this.sidebar) === null || _a === void 0 ? void 0 : _a.hide();
        };
        // Activates a conversation and loads its prompts in the Assist View.
        _this.onItemSelect = function (item) {
            var _a, _b;
            _this.selectedConvId = item.id;
            _this.updateAIAssistViewData(item.id);
            if (_this.isMobile && ((_a = _this.sidebar) === null || _a === void 0 ? void 0 : _a.isOpen)) {
                (_b = _this.sidebar) === null || _b === void 0 ? void 0 : _b.toggle();
            }
        };
        // Deletes a conversation and manages the fallback selection.
        _this.deleteConversation = function (convId, e) {
            e.stopPropagation();
            e.preventDefault();
            var appData = JSON.parse(localStorage.getItem('aiassist-model') || '{}');
            delete appData[convId];
            localStorage.setItem('aiassist-model', JSON.stringify(appData));
            _this.refreshConversationList();
            if (_this.selectedConvId === convId) {
                var next = _this.getLeftPaneData();
                if (next.length > 0)
                    _this.onItemSelect(next[0]);
                else
                    _this.loadNewAIAssist();
            }
        };
        // Clears the Assist View to start a brand-new conversation.
        _this.loadNewAIAssist = function () {
            var _a, _b;
            _this.selectedConvId = null;
            if (_this.aiAssist) {
                _this.aiAssist.prompts = [];
                _this.aiAssist.promptSuggestions = _this.suggestions;
                (_b = (_a = _this.aiAssist).dataBind) === null || _b === void 0 ? void 0 : _b.call(_a);
            }
        };
        // Handles model selection changes and shows contextual toast feedback.
        _this.onModelChange = function (args) {
            var _a, _b;
            var value = (args === null || args === void 0 ? void 0 : args.value) || 'openai';
            _this.selectedModel = value;
            var models = [
                { id: 'gemini', name: 'Gemini 2.5 Flash' },
                { id: 'deepseek', name: 'DeepSeek-R1' },
                { id: 'openai', name: 'GPT-4o-mini(Azure)' }
            ];
            var modelName = ((_a = models.find(function (m) { return m.id === value; })) === null || _a === void 0 ? void 0 : _a.name) || 'the selected model';
            (_b = _this.toast) === null || _b === void 0 ? void 0 : _b.show({
                content: "<div class=\"toast-content\"><span class=\"e-icons e-magic-wand\"> </span> <span>You are using <b>".concat(modelName, "</b> with standard access</span></div>")
            });
        };
        // Sets the stop flag when the user requests to halt streaming.
        _this.stopRespondingClick = function () {
            _this.stopStreaming = true;
        };
        _this.promptRequest = function (args) { return __awaiter(_this, void 0, void 0, function () {
            var convId, response, _a;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!args.prompt || !args.prompt.trim())
                            return [2 /*return*/];
                        convId = this.selectedConvId;
                        if (!convId) {
                            convId = this.createNewConversation();
                            this.selectedConvId = convId;
                        }
                        this.updateConversationName(args.prompt, convId);
                        this.abortController = new AbortController();
                        if (!(this.selectedModel === 'openai')) return [3 /*break*/, 2];
                        return [4 /*yield*/, (0, ai_service_1.getAIResponse)(args, this.abortController)];
                    case 1:
                        _a = _c.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = '⚠️ Something went wrong while connecting to the AI service. Please check your API key.';
                        _c.label = 3;
                    case 3:
                        response = _a;
                        (_b = this.aiAssist) === null || _b === void 0 ? void 0 : _b.addPromptResponse(response);
                        this.checkAndUpdateLocalStorage();
                        return [2 /*return*/];
                }
            });
        }); };
        // Renders the banner content displayed at the top of the Assist View.
        _this.bannerTemplate = function () { return (React.createElement("div", { className: "banner-content e-no-content" },
            React.createElement("div", { className: "e-icons e-assistview-icon" }),
            React.createElement("h3", { className: "ai-assist-banner-subtitle" }, "How can I help you today?"))); };
        // Renders each conversation item in the sidebar list with delete support.
        _this.listItemTemplate = function (data) { return (React.createElement("div", { className: "conversation-item", onClick: function () { return _this.onItemSelect({ id: data.id, text: data.text }); }, title: data.text || 'Untitled Conversation' },
            React.createElement("div", { className: "conversation-name" }, data.text || 'Untitled Conversation'),
            React.createElement("span", { className: "delete-icon e-icons e-trash", title: "Delete Conversation", onClick: function (e) { return _this.deleteConversation(data.id, e); } }))); };
        return _this;
    }
    // Handles initial setup once the component mounts.
    AIAssistModels.prototype.componentDidMount = function () {
        this.ensureStore();
        this.refreshConversationList();
        this.applySidebarConfig();
        window.addEventListener('resize', this.onResize);
        if (this.listData.length === 0) {
            this.loadNewAIAssist();
        }
        else if (!this.selectedConvId && this.listData[0]) {
            this.onItemSelect(this.listData[0]);
        }
    };
    // Cleans up listeners and shows the informational toast on unmount.
    AIAssistModels.prototype.componentWillUnmount = function () {
        window.removeEventListener('resize', this.onResize);
    };
    // Ensures the conversation storage structure exists in localStorage.
    AIAssistModels.prototype.ensureStore = function () {
        if (!localStorage.getItem('aiassist-model')) {
            localStorage.setItem('aiassist-model', JSON.stringify({}));
        }
    };
    // Retrieves and formats conversation summaries for the sidebar list.
    AIAssistModels.prototype.getLeftPaneData = function () {
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
    // Updates the ListView with the latest conversation data.
    AIAssistModels.prototype.refreshConversationList = function () {
        this.listData = this.getLeftPaneData();
        if (this.list) {
            this.list.dataSource = this.listData;
            this.list.dataBind();
        }
    };
    // Generates the next sequential conversation ID.
    AIAssistModels.prototype.getNextConvId = function () {
        var appData = JSON.parse(localStorage.getItem('aiassist-model') || '{}');
        var ids = Object.keys(appData).map(function (k) { return parseInt(k, 10); }).filter(function (v) { return !isNaN(v); });
        var maxId = ids.length ? Math.max.apply(Math, ids) : 0;
        return String(maxId + 1);
    };
    // Creates a new conversation entry in storage and returns its ID.
    AIAssistModels.prototype.createNewConversation = function () {
        var newId = this.getNextConvId();
        var appData = JSON.parse(localStorage.getItem('aiassist-model') || '{}');
        appData[newId] = {
            name: 'New Conversation',
            prompts: [],
            promptSuggestions: __spreadArray([], this.suggestions, true)
        };
        localStorage.setItem('aiassist-model', JSON.stringify(appData));
        this.refreshConversationList();
        return newId;
    };
    // Sets a human-readable conversation name based on the first prompt.
    AIAssistModels.prototype.updateConversationName = function (prompt, convId) {
        var _a;
        var id = (_a = convId !== null && convId !== void 0 ? convId : this.selectedConvId) !== null && _a !== void 0 ? _a : undefined;
        if (!id)
            return;
        var appData = JSON.parse(localStorage.getItem('aiassist-model') || '{}');
        var conv = appData[id];
        if (conv && (conv.name === 'New Conversation' || !conv.name)) {
            conv.name = (prompt.slice(0, 40).trim() || 'Untitled Conversation');
            localStorage.setItem('aiassist-model', JSON.stringify(appData));
            this.refreshConversationList();
        }
    };
    // Persists the current prompt/response history for the active conversation.
    AIAssistModels.prototype.checkAndUpdateLocalStorage = function () {
        var _a;
        if (!this.selectedConvId)
            return;
        var appData = JSON.parse(localStorage.getItem('aiassist-model') || '{}');
        var prompts = ((_a = this.aiAssist) === null || _a === void 0 ? void 0 : _a.prompts) || [];
        if (!appData[this.selectedConvId])
            return;
        appData[this.selectedConvId].prompts = prompts.map(function (p) { return ({
            prompt: p.prompt || '',
            response: p.response || ''
        }); });
        localStorage.setItem('aiassist-model', JSON.stringify(appData));
    };
    // Loads stored prompts and suggestions into the Assist View.
    AIAssistModels.prototype.updateAIAssistViewData = function (id) {
        var _a, _b;
        if (!this.aiAssist)
            return;
        this.aiAssist.prompts = [];
        this.aiAssist.promptSuggestions = this.suggestions;
        if (id) {
            var appData = JSON.parse(localStorage.getItem('aiassist-model') || '{}');
            var conv = appData[id];
            if (conv) {
                this.aiAssist.prompts = conv.prompts || [];
                this.aiAssist.promptSuggestions = conv.promptSuggestions || this.suggestions;
            }
        }
        (_b = (_a = this.aiAssist).dataBind) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    // Adjusts the sidebar behavior depending on viewport width.
    AIAssistModels.prototype.applySidebarConfig = function () {
        var mobile = window.innerWidth <= 680;
        this.isMobile = mobile;
        if (this.sidebar) {
            var s = this.sidebar;
            s.enableDock = false;
            if (mobile) {
                s.type = 'Over';
                s.showBackdrop = true;
                s.closeOnDocumentClick = true;
                s.hide();
            }
            else {
                s.type = 'Push';
                s.showBackdrop = false;
                s.closeOnDocumentClick = false;
                s.show();
            }
            s.dataBind();
        }
    };
    // Streams AI responses incrementally to simulate live typing.
    AIAssistModels.prototype.streamAIResponse = function (fullResponse) {
        return __awaiter(this, void 0, void 0, function () {
            var streamed, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        streamed = '';
                        if (!(fullResponse && this.aiAssist)) return [3 /*break*/, 3];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < fullResponse.length && !this.stopStreaming)) return [3 /*break*/, 3];
                        streamed += fullResponse[i++];
                        this.aiAssist.addPromptResponse(marked_1.marked.parse(streamed), false);
                        this.aiAssist.scrollToBottom();
                        return [4 /*yield*/, new Promise(function (res) { return setTimeout(res, 10); })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/, streamed];
                }
            });
        });
    };
    // Renders the main layout including the Assist View, sidebar, and toasts.
    AIAssistModels.prototype.render = function () {
        var _this = this;
        var models = [
            { id: 'gemini', name: 'Gemini 2.5 Flash' },
            { id: 'deepseek', name: 'DeepSeek-R1' },
            { id: 'openai', name: 'GPT-4o-mini(Azure)' }
        ];
        return (React.createElement("div", { className: "control-pane" },
            React.createElement("div", { className: "control-section" },
                React.createElement("div", { className: "ai-models" },
                    React.createElement(ej2_react_interactive_chat_1.AIAssistViewComponent, { id: "aiAssistView", ref: function (inst) { return (_this.aiAssist = inst); }, bannerTemplate: this.bannerTemplate, promptSuggestions: this.suggestions, promptRequest: this.promptRequest, showHeader: this.showHeader, enableStreaming: true, stopRespondingClick: this.stopRespondingClick, width: "auto", enableAttachments: true, attachmentSettings: this.attachmentSettings, footerToolbarSettings: this.footerToolbarSettings },
                        React.createElement("div", { className: "ai-assist-header" },
                            React.createElement(ej2_react_buttons_1.ButtonComponent, { id: "close", iconCss: "e-icons e-menu", onClick: this.toggleSidebar }),
                            React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { id: "ai-model-dropdown", dataSource: models, fields: { text: 'name', value: 'id' }, value: this.selectedModel, change: this.onModelChange, popupHeight: "200px" })))),
                React.createElement(ej2_react_navigations_1.SidebarComponent, { id: "assistantSidebar", ref: function (inst) { return (_this.sidebar = inst); }, target: ".ai-models", width: "250px", position: "Left", enableDock: this.enableDock, dockSize: this.dockSize, enableGestures: this.enableGestures, type: this.sidebarType, showBackdrop: this.showBackdrop, closeOnDocumentClick: this.closeOnDocumentClick },
                    React.createElement("div", { className: "assistant-sidebar-header" },
                        React.createElement("div", { className: "header-left" },
                            React.createElement("span", { id: "icon-assist", className: "header-icon e-icons e-assistview-icon" }),
                            React.createElement("span", { className: "header-title" }, "AI Assist")),
                        React.createElement(ej2_react_buttons_1.ButtonComponent, { id: "close", cssClass: "e-flat", iconCss: "e-icons e-close", onClick: this.closeSidebar })),
                    React.createElement("div", { className: "assistant-sidebar-content" },
                        React.createElement(ej2_react_buttons_1.ButtonComponent, { cssClass: "new-thread-btn", iconCss: "e-icons e-plus", onClick: this.loadNewAIAssist }, "New Thread"),
                        React.createElement(ej2_react_lists_1.ListViewComponent, { id: "conversation-list", ref: function (inst) { return (_this.list = inst); }, dataSource: this.listData, template: this.listItemTemplate }))),
                React.createElement(ej2_react_notifications_1.ToastComponent, { ref: function (inst) { return (_this.toast = inst); }, position: { X: 'right', Y: 'Top' }, target: ".e-views", timeOut: 1500, showCloseButton: true })),
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
    return AIAssistModels;
}(sample_base_1.SampleBase));
exports.default = AIAssistModels;
