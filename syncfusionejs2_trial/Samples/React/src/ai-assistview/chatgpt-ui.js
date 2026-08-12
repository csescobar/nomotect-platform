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
exports.AIAssistant = void 0;
var React = require("react");
var react_1 = require("react");
var sample_base_1 = require("../common/sample-base");
require("./chatgpt-ui.css");
var data = require("./promptResponseData.json");
var ej2_react_interactive_chat_1 = require("@syncfusion/ej2-react-interactive-chat");
var ej2_react_navigations_1 = require("@syncfusion/ej2-react-navigations");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var ej2_react_notifications_1 = require("@syncfusion/ej2-react-notifications");
var ej2_react_lists_1 = require("@syncfusion/ej2-react-lists");
var ai_services_1 = require("./ai-services");
var marked_1 = require("marked");
var AIAssistant = /** @class */ (function (_super) {
    __extends(AIAssistant, _super);
    function AIAssistant() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Refs for manipulating Syncfusion components directly
        _this.aiAssistViewRef = (0, react_1.createRef)();
        _this.sidebarRef = (0, react_1.createRef)();
        _this.toastRef = (0, react_1.createRef)();
        _this.convListRef = (0, react_1.createRef)();
        _this.utilListRef = (0, react_1.createRef)();
        _this.aiToastRef = (0, react_1.createRef)();
        _this.assistantResponses = data.assistantResponses || [];
        _this.assistantSuggestions = data.assistantSuggestions || [];
        // Conversation selection and layout state
        _this.state = {
            selectedConvId: '',
            isFirstPrompt: false,
            isMobile: false,
            convListData: []
        };
        // Azure OpenAI configuration used by the execute handler
        _this.azureApiKey = 'FiTq9VefhNpb0f0VGMgvs9msBGPaM6h6VrdJQ1FnwbvPqLgixXxuJQQJ99AKACYeBjFXJ3w3AAABACOGopNw';
        _this.azureEndpoint = 'https://azure-testresource.openai.azure.com';
        _this.azureDeployment = 'gpt-4o-mini';
        _this.azureApiVersion = '2024-07-01-preview';
        // Sidebar utility options shown above the conversation list
        _this.leftpanelistData = [
            { text: 'New chat', class: 'e-icons e-rename', id: 'new-chat' },
            { text: 'Search chat', class: 'e-icons e-search' },
            { text: 'Library', class: 'e-icons e-reading-view' },
            { text: 'New project', class: 'e-icons e-add-notes' }
        ];
        // Static banner rendered when no prompts exist in the current conversation
        _this.bannerTemplate = "\n    <div class=\"banner-content e-no-content\">\n      <div class=\"e-icons e-assistview-icon\"></div>\n      <h3 class=\"ai-assist-banner-subtitle\">Hello, I'm Your Digital Assistant!</h3>\n    </div>\n  ";
        // Upload endpoints for attachments within the chat interface
        _this.attachmentSettings = {
            saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save',
            removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove'
        };
        _this.handleResize = function () {
            // React to window size changes and recompute sidebar mode
            var mobile = window.innerWidth <= 680;
            if (mobile !== _this.state.isMobile)
                _this.setSidebarConfig();
            _this.setState({ isMobile: mobile });
        };
        _this.onConvDeleteClick = function (e) {
            // Remove a conversation when the trash icon is clicked
            var target = e.target;
            var btn = target === null || target === void 0 ? void 0 : target.closest('.delete-btn');
            if (!btn)
                return;
            e.preventDefault();
            e.stopPropagation();
            var convList = _this.convListRef.current;
            var li = btn.closest('li');
            var item = convList.getItemData(li);
            var app = JSON.parse(localStorage.getItem('aiassist-view') || '{}');
            delete app[String(item.id)];
            localStorage.setItem('aiassist-view', JSON.stringify(app));
            var ds = convList.dataSource.filter(function (d) { return d.id !== item.id; });
            convList.dataSource = ds;
            convList.dataBind();
            _this.setState({ convListData: ds });
            if (_this.state.selectedConvId === item.id) {
                _this.setState({ selectedConvId: '' });
                var ai = _this.aiAssistViewRef.current;
                if (ai) {
                    ai.prompts = [];
                    ai.promptSuggestions = _this.assistantSuggestions;
                }
                _this.updateBannerStyle();
            }
        };
        _this.getDate = function () { return Date.now(); };
        _this.checkInitialLocalStorage = function (isClear) {
            if (isClear === void 0) { isClear = false; }
            // Seed storage for conversation history if missing or explicitly cleared
            if (isClear || !localStorage.getItem('aiassist-view')) {
                localStorage.setItem('aiassist-view', JSON.stringify({}));
            }
        };
        _this.getLeftPaneData = function () {
            // Convert persisted conversation map into ListView-compatible items
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
        _this.refreshConversationList = function () {
            // Reload sidebar conversation entries from storage
            _this.setState({ convListData: _this.getLeftPaneData() });
        };
        _this.setSidebarConfig = function () {
            // Switch sidebar mode between push/over and maintain state.isMobile
            var mobile = window.innerWidth <= 680;
            var sidebar = _this.sidebarRef.current;
            if (!sidebar) {
                _this.setState({ isMobile: mobile });
                return;
            }
            sidebar.enableDock = false;
            sidebar.type = mobile ? 'Over' : 'Push';
            sidebar.showBackdrop = mobile;
            sidebar.dataBind();
            setTimeout(function () { return (mobile ? sidebar.hide() : sidebar.show()); }, 100);
            _this.setState({ isMobile: mobile });
        };
        _this.updateBannerStyle = function () {
            var _a;
            // Toggle the welcome banner visibility based on prompt history
            var bannerElem = document.querySelector('.banner-content');
            if (!bannerElem)
                return;
            var prompts = ((_a = _this.aiAssistViewRef.current) === null || _a === void 0 ? void 0 : _a.prompts) || [];
            bannerElem.style.display = prompts.length > 0 ? 'none' : 'block';
        };
        _this.updateAIAssistViewData = function (id) {
            // Load prompts and suggestions into the AI view when conversation changes
            var ai = _this.aiAssistViewRef.current;
            if (!ai)
                return;
            if (id) {
                var appData = JSON.parse(localStorage.getItem('aiassist-view') || '{}');
                var convData = appData[String(id)];
                if (convData) {
                    ai.prompts = convData.prompts || [];
                    ai.promptSuggestions = convData.promptSuggestions || _this.assistantSuggestions;
                }
            }
            else {
                ai.prompts = [];
                ai.promptSuggestions = _this.assistantSuggestions;
            }
        };
        _this.loadNewAIAssist = function () {
            // Only reset UI and mark first prompt. Do not create storage/list entry here.
            var ai = _this.aiAssistViewRef.current;
            _this.setState({ selectedConvId: '', isFirstPrompt: true }, function () {
                var _a, _b;
                if (ai) {
                    ai.prompts = [];
                    ai.promptSuggestions = _this.assistantSuggestions;
                }
                _this.updateBannerStyle();
                // Deselect any selected conversation item
                var sel = (_b = (_a = _this.convListRef.current) === null || _a === void 0 ? void 0 : _a.getSelectedItems) === null || _b === void 0 ? void 0 : _b.call(_a);
                if (sel && sel.item) {
                    _this.convListRef.current.unselectItem(sel.item);
                }
            });
        };
        _this.checkAndUpdateLocalStorage = function (prompt) {
            var _a, _b;
            // Persist conversation data, creating a new entry after the first prompt
            var appData = JSON.parse(localStorage.getItem('aiassist-view') || '{}');
            var curConvDate = _this.getDate();
            var ai = _this.aiAssistViewRef.current;
            var prompts = [];
            var orgPrompts = (ai === null || ai === void 0 ? void 0 : ai.prompts) || [];
            for (var i = 0; i < orgPrompts.length; i++) {
                prompts.push({
                    prompt: orgPrompts[i].prompt || '',
                    response: orgPrompts[i].response || ''
                });
            }
            var pSuggestions = [];
            var orgPSuggestions = (ai === null || ai === void 0 ? void 0 : ai.promptSuggestions) || [];
            for (var j = 0; j < orgPSuggestions.length; j++) {
                pSuggestions.push(orgPSuggestions[j]);
            }
            if (_this.state.selectedConvId) {
                var convData = appData[String(_this.state.selectedConvId)];
                if (convData) {
                    var ds = (_a = _this.convListRef.current) === null || _a === void 0 ? void 0 : _a.dataSource;
                    if (ds) {
                        for (var k = 0; k < ds.length; k++) {
                            var item = ds[k];
                            if (item && item.id === _this.state.selectedConvId) {
                                item.text = convData.name;
                                break;
                            }
                        }
                        (_b = _this.convListRef.current) === null || _b === void 0 ? void 0 : _b.dataBind();
                    }
                    convData.prompts = prompts;
                    convData.promptSuggestions = pSuggestions;
                    localStorage.setItem('aiassist-view', JSON.stringify(appData));
                }
            }
            else {
                // Create conversation ONLY after first prompt is sent
                var newId = String(curConvDate);
                var convData = {
                    name: prompt,
                    prompts: prompts,
                    promptSuggestions: pSuggestions
                };
                appData[newId] = convData;
                localStorage.setItem('aiassist-view', JSON.stringify(appData));
                _this.setState({ selectedConvId: newId }, function () {
                    _this.refreshConversationList();
                    setTimeout(function () { var _a; return (_a = _this.convListRef.current) === null || _a === void 0 ? void 0 : _a.selectItem({ index: 0 }); }, 0);
                });
            }
        };
        _this.updateConversationName = function (prompt) {
            // Reset first prompt flag and refresh list after initial prompt storage
            if (_this.state.isFirstPrompt && _this.state.selectedConvId) {
                _this.setState({ isFirstPrompt: false }, function () {
                    var app = JSON.parse(localStorage.getItem('aiassist-view') || '{}');
                    localStorage.setItem('aiassist-view', JSON.stringify(app));
                    _this.refreshConversationList();
                });
            }
        };
        _this.execute = function (prompt) { return __awaiter(_this, void 0, void 0, function () {
            var ai, finalResult_1, fallback;
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                // Primary message handler: clears suggestions, fetches response, and persists state
                this.updateBannerStyle();
                try {
                    ai = this.aiAssistViewRef.current;
                    if (ai)
                        ai.promptSuggestions = [];
                    finalResult_1 = [];
                    setTimeout(function () {
                        var suggestionsObj = _this.assistantResponses.find(function (resp) { return resp.prompt === prompt; });
                        var suggestionResult = suggestionsObj ? suggestionsObj.suggestions || _this.assistantSuggestions : _this.assistantSuggestions;
                        for (var i = 0; i < suggestionResult.length; i++) {
                            if (suggestionResult[i]) {
                                finalResult_1.push(suggestionResult[i].replace('- ', '').replace('* ', '').trim());
                            }
                        }
                    }, 1000);
                    setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                        var text;
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4 /*yield*/, (0, ai_services_1.getAzureOpenAIAssist)({
                                        messages: prompt,
                                    })];
                                case 1:
                                    text = _b.sent();
                                    (_a = this.aiAssistViewRef.current) === null || _a === void 0 ? void 0 : _a.addPromptResponse(marked_1.marked.parse(text));
                                    if (this.aiAssistViewRef.current)
                                        this.aiAssistViewRef.current.promptSuggestions = finalResult_1;
                                    this.checkAndUpdateLocalStorage(prompt);
                                    this.updateConversationName(prompt);
                                    return [2 /*return*/];
                            }
                        });
                    }); }, 1000);
                }
                catch (_c) {
                    fallback = "⚠️ Something went wrong while connecting to the OpenAI service. Please check your API key.";
                    (_a = this.aiAssistViewRef.current) === null || _a === void 0 ? void 0 : _a.addPromptResponse(fallback);
                    if (this.aiAssistViewRef.current)
                        this.aiAssistViewRef.current.promptSuggestions = [];
                    this.updateConversationName(prompt);
                }
                return [2 /*return*/];
            });
        }); };
        _this.onConvSelect = function (args) {
            // Load stored conversation when a user selects it in the ListView
            if (args.isInteracted) {
                var data_1 = args.data;
                _this.setState({ selectedConvId: data_1.id }, function () {
                    _this.updateAIAssistViewData(data_1.id);
                    _this.updateBannerStyle();
                });
            }
        };
        _this.onUtilSelect = function (args) {
            var _a, _b, _c;
            // Handle interactions with the utility menu (New Chat, Search, etc.)
            // Deselect any selected conversation item
            var sel = (_b = (_a = _this.convListRef.current) === null || _a === void 0 ? void 0 : _a.getSelectedItems) === null || _b === void 0 ? void 0 : _b.call(_a);
            if (sel && sel.item) {
                _this.convListRef.current.unselectItem(sel.item);
            }
            var data = args.data;
            if (data && data.id === 'new-chat') {
                _this.loadNewAIAssist(); // Only reset UI; do not touch storage or list
            }
            else if (data) {
                (_c = _this.toastRef.current) === null || _c === void 0 ? void 0 : _c.show({
                    content: "<div class=\"toast-content\"><span><b>".concat(data.text, "</b> clicked</span></div>")
                });
            }
        };
        _this.onSidebarOpen = function () {
            document.getElementById('close').style.display = "none";
        };
        _this.onSidebarClose = function () {
            setTimeout(function () {
                document.getElementById('close').style.display = 'block';
            }, 300);
        };
        return _this;
    }
    AIAssistant.prototype.componentDidMount = function () {
        var _this = this;
        // Ensure local storage entry exists and prime conversation list data
        this.checkInitialLocalStorage();
        this.setState({ convListData: this.getLeftPaneData() }, function () {
            var _a;
            // attach delete handler for conversation list
            var host = (_a = _this.convListRef.current) === null || _a === void 0 ? void 0 : _a.element;
            if (host) {
                host.addEventListener('click', _this.onConvDeleteClick);
            }
        });
        // Configure responsive sidebar behaviour and handle layout changes
        this.setSidebarConfig();
        window.addEventListener('resize', this.handleResize, { passive: true });
        // Show initial informational toast about AI demo capabilities
        this.aiToastRef.current.show({
            content: "<div class=\"ai-toast-content\"><div class=\"ai-toast-title\">Explore AI Demos</div><span>You can now explore our <strong>AI Demos</strong> with limited AI token usage. Additionally, you can try out our <strong>Syncfusion AI Assistview samples</strong> locally by using your own API key</span></div>",
        });
    };
    AIAssistant.prototype.componentWillUnmount = function () {
        var _a;
        // Clean up event listeners attached during mount
        window.removeEventListener('resize', this.handleResize);
        var host = (_a = this.convListRef.current) === null || _a === void 0 ? void 0 : _a.element;
        if (host)
            host.removeEventListener('click', this.onConvDeleteClick);
    };
    AIAssistant.prototype.render = function () {
        var _this = this;
        var _a = this.state, isMobile = _a.isMobile, convListData = _a.convListData;
        return (React.createElement("div", { className: "control-pane" },
            React.createElement("div", { className: "control-section" },
                React.createElement("div", null,
                    React.createElement("div", { id: "chatgpt" },
                        React.createElement("div", null,
                            React.createElement("div", { className: "ai-assist-header" },
                                React.createElement(ej2_react_buttons_1.ButtonComponent, { id: "close", title: "Expand Navigation", iconCss: "e-icons e-menu", cssClass: "e-flat", onClick: function () { var _a; return (_a = _this.sidebarRef.current) === null || _a === void 0 ? void 0 : _a.toggle(); } })),
                            React.createElement(ej2_react_interactive_chat_1.AIAssistViewComponent, { id: "aiAssistView", ref: this.aiAssistViewRef, promptSuggestions: this.assistantSuggestions, enableAttachments: true, attachmentSettings: this.attachmentSettings, promptRequest: function (args) {
                                    _this.updateBannerStyle();
                                    _this.execute(args.prompt);
                                }, bannerTemplate: this.bannerTemplate, showHeader: false, width: "auto" }))))),
            React.createElement(ej2_react_navigations_1.SidebarComponent, { ref: this.sidebarRef, width: "250px", target: "#chatgpt", type: "Push", enableDock: false, enableGestures: false, showBackdrop: false, className: "left-content", open: this.onSidebarOpen, close: this.onSidebarClose },
                React.createElement("div", { style: { overflow: 'auto' } },
                    React.createElement("div", { className: "assistantToolbar" },
                        React.createElement("div", { className: "header-left" },
                            React.createElement("span", { id: "icon-assist", className: "header-icon e-icons e-assistview-icon" }),
                            React.createElement("span", { className: "header-title" }, "AI Assist")),
                        React.createElement(ej2_react_buttons_1.ButtonComponent, { id: "toggle-btn-close", title: "Collapse Navigation", cssClass: "e-flat", iconCss: isMobile ? 'e-icons e-close' : 'e-icons e-menu', onClick: function () { var _a; return (_a = _this.sidebarRef.current) === null || _a === void 0 ? void 0 : _a.toggle(); } })),
                    React.createElement(ej2_react_lists_1.ListViewComponent, { id: "left-pane-listview", ref: this.utilListRef, dataSource: this.leftpanelistData, template: '<div class="e-list-wrapper"><span class="${class}"></span><span class="e-list-content">${text}</span></div>', select: this.onUtilSelect }),
                    React.createElement("div", { className: "assistant-sidebar-content", style: { marginTop: 10, height: 235 } },
                        React.createElement("div", { className: "header-conversation" }, "Chats"),
                        React.createElement(ej2_react_lists_1.ListViewComponent, { id: "assistant-listview-grp", ref: this.convListRef, dataSource: convListData, fields: { id: 'id', text: 'text' }, template: '<div class="e-text-content"><span class="e-list-text">${text}</span><span class="e-icons e-trash delete-btn" title="Delete Conversation"></span></div>', select: this.onConvSelect })),
                    React.createElement("div", { className: "sign-in" },
                        React.createElement("span", { className: "e-icons e-user" }),
                        React.createElement("span", { className: "user-name" }, "User"),
                        React.createElement(ej2_react_buttons_1.ButtonComponent, { id: "upgrade" }, "Upgrade")))),
            React.createElement(ej2_react_notifications_1.ToastComponent, { id: "toast", ref: this.toastRef, position: { X: 'Right', Y: 'Top' }, timeOut: 1500, showCloseButton: true, target: ".e-views" }),
            React.createElement(ej2_react_notifications_1.ToastComponent, { id: "ai-toast", ref: this.aiToastRef, position: { X: 'Right', Y: 'Top' }, timeOut: 3000, showCloseButton: true, target: ".e-view" }),
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
    return AIAssistant;
}(sample_base_1.SampleBase));
exports.AIAssistant = AIAssistant;
