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
var sample_base_1 = require("../common/sample-base");
require("./ai-assistant.css");
var ej2_react_interactive_chat_1 = require("@syncfusion/ej2-react-interactive-chat");
var data = require("./promptResponseData.json");
var ej2_react_splitbuttons_1 = require("@syncfusion/ej2-react-splitbuttons");
var ej2_react_lists_1 = require("@syncfusion/ej2-react-lists");
var ej2_react_navigations_1 = require("@syncfusion/ej2-react-navigations");
var AIAssistant = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var _a = (0, react_1.useState)(""), selectedConvId = _a[0], setSelectedConvId = _a[1];
    var _b = (0, react_1.useState)(false), isFirstPrompt = _b[0], setIsFirstPrompt = _b[1];
    var _c = (0, react_1.useState)([]), listData = _c[0], setListData = _c[1];
    var aiAssistViewRef = (0, react_1.useRef)(null);
    var sidebarRef = (0, react_1.useRef)(null);
    var listViewRef = (0, react_1.useRef)(null);
    var assistantResponses = data["assistantResponses"];
    var suggestion = data["assistantSuggestions"];
    // AIAssistView toolbar settings
    var toolbarSettings = {
        items: [
            { type: 'Input', template: '<button id="ddMenu"></button>', align: 'Right' }
        ]
    };
    var attachmentSettings = {
        saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove'
    };
    // ListView fields settings
    var listViewFields = {
        groupBy: 'category',
        id: 'id',
        text: 'text'
    };
    // Banner template for AIAssistView
    var bannerTemplate = "\n            <div class=\"banner-content e-no-content\">\n                <div class=\"e-icons e-assistview-icon\"></div>\n                <h3>AI Assistance</h3>\n                <div class=\"ai-assist-banner-subtitle\">Hello, I'm Your Digital Assistant!</div>\n            </div>\n        ";
    // Initialize components and load data
    (0, react_1.useEffect)(function () {
        checkInitialLocalStorage();
    }, []);
    // Templates
    var listTemplate = function (data) {
        return (React.createElement("div", { className: "chat-item" },
            React.createElement("div", { className: "chat-title" }, data.text)));
    };
    // AIAssistView created event handler
    var created = function () {
        new ej2_react_splitbuttons_1.DropDownButton({
            content: 'Profile',
            items: [
                { text: 'Settings', iconCss: 'e-icons e-settings' },
                { separator: true },
                { text: 'Log out', iconCss: 'e-icons e-export' }
            ],
            iconCss: 'e-icons e-user',
            cssClass: 'sign-in-button',
        }, '#ddMenu');
    };
    // ListView item selected event handler
    var onListViewSelect = function (args) {
        if (args.isInteracted) {
            setSelectedConvId(args.data.id);
            updateAIAssistViewData(args.data.id);
            updateBannerStyle();
        }
    };
    // Reset button click handler
    var handleReset = function () {
        listViewRef.current.dataSource = [];
        listViewRef.current.dataBind();
        localStorage.setItem('aiassist-view', JSON.stringify({}));
        setSelectedConvId("");
        aiAssistViewRef.current.prompts = [];
        aiAssistViewRef.current.promptSuggestions = suggestion;
        updateBannerStyle();
    };
    // Get current date
    var getDate = function () {
        return Date.now();
    };
    // Format date
    var getDateFormat = function (date) {
        var today = new Date(date);
        var yyyy = today.getFullYear();
        var mm = today.getMonth() + 1; // Months start at 0!
        var dd = today.getDate();
        if (dd < 10)
            dd = '0' + dd;
        if (mm < 10)
            mm = '0' + mm;
        return dd + '/' + mm + '/' + yyyy;
    };
    // Get category for grouping
    var getCategory = function (key) {
        var today = getDateFormat(Date.now());
        var date = getDateFormat(key);
        return date === today ? "Today" : "Previous days";
    };
    // Check and initialize localStorage
    var checkInitialLocalStorage = function (isClear) {
        if (isClear === void 0) { isClear = false; }
        var aiAssistView = localStorage.getItem('aiassist-view');
        if (!aiAssistView || isClear) {
            var data_1 = {};
            localStorage.setItem('aiassist-view', JSON.stringify(data_1));
        }
        refreshConversationList();
    };
    // Update banner style based on content
    var updateBannerStyle = function () {
        var _a, _b;
        var bannerElem = document.querySelector('.banner-content');
        if ((_b = (_a = aiAssistViewRef.current) === null || _a === void 0 ? void 0 : _a.prompts) === null || _b === void 0 ? void 0 : _b.length) {
            bannerElem.classList.remove('e-no-content');
        }
        else {
            bannerElem.classList.add('e-no-content');
        }
    };
    // Check and update localStorage
    var checkAndUpdateLocalStorage = function (prompt) {
        var _a;
        var aiAssistView = localStorage.getItem('aiassist-view');
        var appData = JSON.parse(aiAssistView || '{}');
        var curConvDate = getDate();
        var prompts = [];
        var aiAssistViewInst = aiAssistViewRef.current;
        var orgPrompts = aiAssistViewInst.prompts || [];
        for (var i = 0; i < orgPrompts.length; i++) {
            var tPrompt = {
                prompt: orgPrompts[i].prompt || "",
                response: orgPrompts[i].response || ""
            };
            prompts.push(tPrompt);
        }
        var pSuggestions = [];
        var orgPSuggestions = (aiAssistViewInst === null || aiAssistViewInst === void 0 ? void 0 : aiAssistViewInst.promptSuggestions) || [];
        for (var j = 0; j < orgPSuggestions.length; j++) {
            pSuggestions.push(orgPSuggestions[j]);
        }
        if (selectedConvId) {
            var convData = appData[selectedConvId];
            if (convData && convData.name === convData.name) {
                var dataSource = (_a = listViewRef.current) === null || _a === void 0 ? void 0 : _a.dataSource;
                if (dataSource) {
                    for (var k = 0; k < dataSource.length; k++) {
                        var item = dataSource[k];
                        if (item && item.id === selectedConvId) {
                            item.text = convData.name;
                            break;
                        }
                    }
                }
                if (listViewRef.current) {
                    listViewRef.current.dataBind();
                }
            }
            convData.prompts = prompts;
            convData.promptSuggestions = pSuggestions;
            localStorage.setItem('aiassist-view', JSON.stringify(appData));
        }
        else {
            var newConvId = curConvDate.toString();
            setSelectedConvId(newConvId);
            var convData = {
                name: prompt,
                prompts: prompts,
                promptSuggestions: pSuggestions
            };
            appData[newConvId] = convData;
            localStorage.setItem('aiassist-view', JSON.stringify(appData));
            refreshConversationList();
            if (listViewRef.current) {
                listViewRef.current.selectItem({ index: 0 });
            }
        }
    };
    // Update conversation name
    var updateConversationName = function (prompt) {
        if (isFirstPrompt && selectedConvId) {
            var aiAssistView = JSON.parse(localStorage.getItem('aiassist-view') || '{}');
            var convData = aiAssistView[selectedConvId];
            if ((convData === null || convData === void 0 ? void 0 : convData.name) === "New Conversation") {
                convData.name = prompt.slice(0, 40).trim();
                localStorage.setItem('aiassist-view', JSON.stringify(aiAssistView));
                refreshConversationList();
            }
            setIsFirstPrompt(false);
        }
    };
    // Get data for left pane (conversation list)
    var getLeftPaneData = function () {
        var today = getDateFormat(Date.now());
        var aiAssistView = localStorage.getItem('aiassist-view');
        var appData = JSON.parse(aiAssistView || '{}');
        var keys = Object.keys(appData);
        // Create array of items with their numeric IDs for proper sorting
        var items = [];
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            var numericKey = parseInt(key);
            var convData = appData[key];
            if (convData && convData.name) {
                var name_1 = convData.name.split('\n')[0];
                items.push({
                    text: name_1,
                    id: key,
                    numericId: numericKey,
                    category: getCategory(numericKey),
                    time: getDateFormat(numericKey)
                });
            }
        }
        items.sort(function (a, b) { return b.numericId - a.numericId; });
        return items;
    };
    // Refresh conversation list
    var refreshConversationList = function () {
        var listData = getLeftPaneData();
        setListData(listData);
        listViewRef.current.dataSource = listData;
        listViewRef.current.dataBind();
    };
    // Update AIAssistView data
    var updateAIAssistViewData = function (id) {
        if (id && aiAssistViewRef.current) {
            var aiAssistView = localStorage.getItem('aiassist-view');
            var appData = JSON.parse(aiAssistView || '{}');
            var convData = appData[id];
            aiAssistViewRef.current.prompts = convData.prompts;
            aiAssistViewRef.current.promptSuggestions = convData.promptSuggestions;
        }
        else {
            aiAssistViewRef.current.prompts = [];
            aiAssistViewRef.current.promptSuggestions = suggestion;
        }
    };
    // Load new AI Assist conversation
    var loadNewAIAssist = function () {
        setSelectedConvId("");
        setIsFirstPrompt(true);
        if (listData.length !== 0) {
            aiAssistViewRef.current.prompts = [];
            aiAssistViewRef.current.promptSuggestions = suggestion;
        }
        var curConvDate = getDate().toString();
        var aiAssistView = localStorage.getItem('aiassist-view');
        var appData = JSON.parse(aiAssistView || '{}');
        var convData = {
            name: "New Conversation",
            prompts: [],
            promptSuggestions: suggestion
        };
        appData[curConvDate] = convData;
        localStorage.setItem('aiassist-view', JSON.stringify(appData));
        refreshConversationList();
        setSelectedConvId(curConvDate);
        if (listViewRef.current) {
            listViewRef.current.selectItem({ id: curConvDate });
        }
        updateBannerStyle();
    };
    // Get AI response
    var getResult = function (prompt) { return __awaiter(void 0, void 0, void 0, function () {
        var responseObj, result;
        return __generator(this, function (_a) {
            responseObj = assistantResponses.find(function (resp) { return resp.prompt === prompt; });
            result = responseObj.response;
            return [2 /*return*/, result];
        });
    }); };
    // Execute prompt
    var execute = function (prompt) { return __awaiter(void 0, void 0, void 0, function () {
        var timeoutId_1, finalResult_1, result;
        return __generator(this, function (_a) {
            try {
                timeoutId_1 = setTimeout(function () {
                    var _a;
                    (_a = aiAssistViewRef.current) === null || _a === void 0 ? void 0 : _a.addPromptResponse("I apologize, but I'm experiencing some difficulty processing your request at this moment, which might be due to the complexity of your query or a technical limitation on my end, so I would greatly appreciate it if you could rephrase your question or provide additional context that might help me better understand what you're looking for.");
                    updateConversationName(prompt);
                }, 2000);
                aiAssistViewRef.current.promptSuggestions = [];
                finalResult_1 = [];
                result = "";
                setTimeout(function () { return __awaiter(void 0, void 0, void 0, function () {
                    var suggestionsObj, suggestionResult, i;
                    return __generator(this, function (_a) {
                        suggestionsObj = assistantResponses.find(function (resp) { return resp.prompt === prompt; });
                        suggestionResult = suggestionsObj
                            ? suggestionsObj.suggestions || suggestion
                            : suggestion;
                        for (i = 0; i < suggestionResult.length; i++) {
                            if (suggestionResult[i]) {
                                finalResult_1.push(suggestionResult[i].replace("- ", "").replace("* ", "").trim());
                            }
                        }
                        return [2 /*return*/];
                    });
                }); }, 1000);
                setTimeout(function () { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, getResult(prompt)];
                            case 1:
                                result = _a.sent();
                                aiAssistViewRef.current.addPromptResponse(result);
                                aiAssistViewRef.current.promptSuggestions = finalResult_1;
                                updateBannerStyle();
                                checkAndUpdateLocalStorage(prompt);
                                updateConversationName(prompt);
                                clearTimeout(timeoutId_1);
                                return [2 /*return*/];
                        }
                    });
                }); }, 1000);
            }
            catch (error) {
                if (aiAssistViewRef.current) {
                    aiAssistViewRef.current.addPromptResponse("I apologize, but I'm experiencing some difficulty processing your request at this moment, which might be due to the complexity of your query or a technical limitation on my end, so I would greatly appreciate it if you could rephrase your question or provide additional context that might help me better understand what you're looking for.");
                    aiAssistViewRef.current.promptSuggestions = [];
                }
                updateConversationName(prompt);
            }
            if (!listData || listData.length === 0) {
                loadNewAIAssist();
            }
            return [2 /*return*/];
        });
    }); };
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: "control-section" },
            React.createElement("div", null,
                React.createElement("div", { className: "ai-assistant" },
                    React.createElement(ej2_react_interactive_chat_1.AIAssistViewComponent, { id: "aiAssistView", ref: aiAssistViewRef, promptSuggestions: suggestion, toolbarSettings: toolbarSettings, enableAttachments: true, attachmentSettings: attachmentSettings, promptRequest: function (args) { return execute(args.prompt); }, bannerTemplate: bannerTemplate, created: created })))),
        React.createElement(ej2_react_navigations_1.SidebarComponent, { id: "assistantSidebar", ref: sidebarRef, width: "260px", target: ".ai-assistant", position: "Left", enableDock: true, dockSize: "75px", enableGestures: false },
            React.createElement("div", { className: "assistant-sidebar-header" },
                React.createElement(ej2_react_navigations_1.ToolbarComponent, { id: "assistantToolbar" },
                    React.createElement(ej2_react_navigations_1.ItemsDirective, null,
                        React.createElement(ej2_react_navigations_1.ItemDirective, { prefixIcon: "e-icons e-assistview-icon", tooltipText: "Ai-Assistant" }),
                        React.createElement(ej2_react_navigations_1.ItemDirective, { prefixIcon: "e-icons e-menu", tooltipText: "Toggle sidebar", align: "Right", click: function () { var _a; return (_a = sidebarRef.current) === null || _a === void 0 ? void 0 : _a.toggle(); } }),
                        React.createElement(ej2_react_navigations_1.ItemDirective, { prefixIcon: "e-icons e-rename", tooltipText: "Start new chat", align: "Right", cssClass: "new-chat-button", click: loadNewAIAssist })))),
            React.createElement("div", { className: "assistant-sidebar-content" },
                React.createElement("div", { className: "assistant-listview-option", tabIndex: 1 },
                    React.createElement("div", { className: "e-icons e-multiple-comment" }),
                    React.createElement("div", { className: "header-conversation" }, "Chat Conversations"),
                    React.createElement("span", { className: "e-icons e-refresh", title: "Reset", id: "resetButton", onClick: handleReset })),
                React.createElement(ej2_react_lists_1.ListViewComponent, { id: "assistant-listview-grp", ref: listViewRef, dataSource: listData, fields: listViewFields, template: listTemplate, select: onListViewSelect }))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This sample demonstrates an AI chat assistant with conversation management. Users can create new conversations and receive AI-generated responses with relevant suggestions.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null, "The AI AssistView component in this example showcases integration of an AI assistant with conversation history management which includes:"),
            React.createElement("ul", null,
                React.createElement("li", null, "Sidebar with organized conversation history, categorized by date (Today and Previous days)"),
                React.createElement("li", null,
                    "Customizable banner interface using ",
                    React.createElement("code", null, "bannerTemplate"),
                    " for guidance messages"),
                React.createElement("li", null,
                    "Intelligent follow-up suggestions after each response via ",
                    React.createElement("code", null, "promptSuggestions")),
                React.createElement("li", null, "Local storage integration for persisting conversation history across sessions"),
                React.createElement("li", null, "Toolbar with convenient actions: new chat, toggle sidebar, and user profile")),
            React.createElement("p", null, "This example demonstrates how to build an AI assistant interface with conversation management, providing users with a seamless and productive AI interaction experience."))));
};
exports.default = AIAssistant;
