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
define(["require", "exports", "../common/culture-loader", "@syncfusion/ej2-interactive-chat", "@syncfusion/ej2/navigations", "@syncfusion/ej2/splitbuttons", "@syncfusion/ej2/lists", "./promptResponseData"], function (require, exports, culture_loader_1, ej2_interactive_chat_1, navigations_1, splitbuttons_1, lists_1, promptResponseData_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    window.default = function () {
        (0, culture_loader_1.loadCultureFiles)();
        var API_KEY = "Your API key";
        var model = "Your AI model";
        function GetResult(prompt) {
            return __awaiter(this, void 0, void 0, function () {
                var responseObj, result;
                return __generator(this, function (_a) {
                    responseObj = promptResponseData_1.assistantResponses.find(function (resp) { return resp.prompt === prompt; });
                    result = responseObj ? responseObj.response : "I apologize, but I'm experiencing some difficulty processing your request at this moment, which might be due to the complexity of your query or a technical limitation on my end, so I would greatly appreciate it if you could rephrase your question or provide additional context that might help me better understand what you're looking for.";
                    return [2, result];
                });
            });
        }
        var selectedConvId = "";
        var isFirstPrompt = false;
        var aiAssistViewInst = new ej2_interactive_chat_1.AIAssistView({
            promptSuggestions: promptResponseData_1.assistantSuggestions,
            promptRequest: function (args) {
                execute(args.prompt);
            },
            bannerTemplate: "#bannerContent",
            toolbarSettings: {
                items: [
                    { type: 'Input', template: '<button id="ddMenu"></button>', align: 'Right' }
                ]
            },
            enableAttachments: true,
            attachmentSettings: {
                saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
                removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
            }
        });
        aiAssistViewInst.appendTo('#aiAssistView');
        var sideObj = new navigations_1.Sidebar({
            width: "260px",
            target: ".ai-assistant",
            position: 'Left',
            enableDock: true,
            dockSize: "75px",
            enableGestures: false
        });
        sideObj.appendTo("#assistantSidebar");
        new splitbuttons_1.DropDownButton({
            content: 'Profile',
            items: [
                { text: 'Settings', iconCss: 'e-icons e-settings' },
                { separator: true },
                { text: 'Log out', iconCss: 'e-icons e-export' }
            ],
            iconCss: 'e-icons e-user',
            cssClass: 'sign-in-button',
        }, '#ddMenu');
        var toolbarObj = new navigations_1.Toolbar({
            overflowMode: 'Popup',
            items: [
                {
                    prefixIcon: 'e-icons e-assistview-icon', tooltipText: 'Ai-Assistant',
                },
                {
                    prefixIcon: 'e-icons e-menu', tooltipText: 'Toggle sidebar', align: 'Right',
                    click: function () {
                        sideObj.toggle();
                    }
                },
                {
                    prefixIcon: 'e-icons e-rename', tooltipText: 'Start new chat', align: 'Right',
                    click: function () {
                        loadNewAIAssist();
                    },
                    cssClass: 'new-chat-button'
                },
            ],
        });
        toolbarObj.appendTo('#assistantToolbar');
        var listData = getLeftPaneData();
        var grpListObj = new lists_1.ListView({
            dataSource: listData,
            fields: { groupBy: 'category', id: 'id', text: 'text' },
            template: '<div class="chat-item"><div class="chat-title">${text}</div></div>',
            select: function (args) {
                if (args.event) {
                    selectedConvId = args.data.id;
                    updateAIAssistViewData(args.data.id);
                    updateBannerStyle();
                }
            }
        });
        grpListObj.appendTo('#assistant-listview-grp');
        InitializingApp();
        function getDate() {
            return Date.now();
        }
        function getDateFormat(date) {
            var today = new Date(date);
            var yyyy = today.getFullYear();
            var mm = today.getMonth() + 1;
            var dd = today.getDate();
            if (dd < 10)
                dd = '0' + dd;
            if (mm < 10)
                mm = '0' + mm;
            return dd + '/' + mm + '/' + yyyy;
        }
        function getCategory(today, key) {
            var date = getDateFormat(key);
            if (date == today) {
                return "Today";
            }
            else {
                return "Previous days";
            }
        }
        function checkInitialLocalStorage(isClear) {
            var aiAssistView = localStorage.getItem('aiassist-view');
            if (!aiAssistView || isClear) {
                var data = {};
                localStorage.setItem('aiassist-view', JSON.stringify(data));
            }
        }
        function checkAndUpdateLocalStorage(prompt) {
            var aiAssistView = localStorage.getItem('aiassist-view');
            var appData = JSON.parse(aiAssistView);
            var curConvDate = getDate();
            var prompts = [];
            var orgPrompts = aiAssistViewInst.prompts;
            for (var i = 0; i < orgPrompts.length; i++) {
                var tPrompt = {
                    prompt: orgPrompts[i].prompt || "",
                    response: orgPrompts[i].response || ""
                };
                prompts.push(tPrompt);
            }
            var pSuggestions = [];
            var orgPSuggestions = aiAssistViewInst.promptSuggestions;
            for (var j = 0; j < orgPSuggestions.length; j++) {
                pSuggestions.push(orgPSuggestions[j]);
            }
            if (selectedConvId) {
                var convData = appData[selectedConvId];
                if (convData.name === convData.name) {
                    var dataSource = grpListObj.dataSource;
                    if (dataSource) {
                        for (var k = 0; k < dataSource.length; k++) {
                            var item = dataSource[k];
                            if (item && item.id === selectedConvId) {
                                item.text = convData.name;
                                break;
                            }
                        }
                    }
                    grpListObj.dataBind();
                }
                convData.prompts = prompts;
                convData.promptSuggestions = pSuggestions;
                localStorage.setItem('aiassist-view', JSON.stringify(appData));
            }
            else {
                selectedConvId = curConvDate.toString();
                var convData = {
                    name: prompt,
                    prompts: prompts,
                    promptSuggestions: pSuggestions
                };
                appData[curConvDate] = convData;
                localStorage.setItem('aiassist-view', JSON.stringify(appData));
                refreshConversationList();
                var itemToSelect = 0;
                grpListObj.selectItem(itemToSelect);
            }
        }
        function getLeftPaneData() {
            var today = getDateFormat(Date.now());
            var aiAssistView = localStorage.getItem('aiassist-view');
            var appData = JSON.parse(aiAssistView);
            var keys = Object.keys(appData);
            var items = [];
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var numericKey = parseInt(key);
                var convData = appData[key];
                var name_1 = convData.name.split('\n')[0];
                items.push({
                    text: name_1,
                    id: numericKey,
                    numericId: numericKey,
                    category: getCategory(today, numericKey),
                    time: getDateFormat(numericKey)
                });
            }
            items.sort(function (a, b) {
                return b.numericId - a.numericId;
            });
            return items;
        }
        function updateBannerStyle() {
            var bannerElem = document.querySelector('.banner-content');
            if (aiAssistViewInst.prompts && aiAssistViewInst.prompts.length) {
                bannerElem.classList.remove('e-no-content');
            }
            else {
                bannerElem.classList.add('e-no-content');
            }
        }
        function updateConversationName(prompt) {
            if (isFirstPrompt && selectedConvId) {
                var aiAssistView = JSON.parse(localStorage.getItem('aiassist-view'));
                var convData = aiAssistView[selectedConvId];
                if ((convData === null || convData === void 0 ? void 0 : convData.name) === "New Conversation") {
                    convData.name = prompt.slice(0, 40).trim();
                    localStorage.setItem('aiassist-view', JSON.stringify(aiAssistView));
                    var dataSource = grpListObj.dataSource;
                    var listItem = dataSource.find(function (item) { return item.id === selectedConvId; });
                    if (listItem) {
                        listItem.text = convData.name;
                        grpListObj.dataBind();
                    }
                    refreshConversationList();
                }
                isFirstPrompt = false;
            }
        }
        function refreshConversationList() {
            var listData = getLeftPaneData();
            grpListObj.dataSource = listData;
            grpListObj.dataBind();
        }
        function updateAIAssistViewData(id) {
            if (id) {
                var aiAssistView = localStorage.getItem('aiassist-view');
                var appData = JSON.parse(aiAssistView);
                var convData = appData[id.toString()];
                aiAssistViewInst.prompts = convData.prompts;
                aiAssistViewInst.promptSuggestions = convData.promptSuggestions;
            }
            else {
                aiAssistViewInst.prompts = [];
                aiAssistViewInst.promptSuggestions = promptResponseData_1.assistantSuggestions;
            }
        }
        function loadNewAIAssist() {
            selectedConvId = "";
            isFirstPrompt = true;
            var dataSource = grpListObj.dataSource;
            if (dataSource.length !== 0) {
                aiAssistViewInst.prompts = [];
                aiAssistViewInst.promptSuggestions = promptResponseData_1.assistantSuggestions;
            }
            var curConvDate = getDate();
            var aiAssistView = localStorage.getItem('aiassist-view');
            var appData = JSON.parse(aiAssistView);
            var convData = {
                name: "New Conversation",
                prompts: [],
                promptSuggestions: promptResponseData_1.assistantSuggestions
            };
            appData[curConvDate] = convData;
            localStorage.setItem('aiassist-view', JSON.stringify(appData));
            refreshConversationList();
            selectedConvId = curConvDate.toString();
            var itemToSelect = { id: curConvDate };
            grpListObj.selectItem(itemToSelect);
            updateBannerStyle();
        }
        function InitializingApp() {
            checkInitialLocalStorage();
            var resetButton = document.getElementById('resetButton');
            if (resetButton) {
                resetButton.addEventListener('click', function () {
                    grpListObj.dataSource = [];
                    grpListObj.dataBind();
                    localStorage.setItem('aiassist-view', JSON.stringify({}));
                    selectedConvId = "";
                    aiAssistViewInst.prompts = [];
                    aiAssistViewInst.promptSuggestions = promptResponseData_1.assistantSuggestions;
                    updateBannerStyle();
                });
            }
        }
        function execute(prompt) {
            return __awaiter(this, void 0, void 0, function () {
                var finalResult, result, dataSource;
                var _this = this;
                return __generator(this, function (_a) {
                    try {
                        aiAssistViewInst.promptSuggestions = [];
                        finalResult = [];
                        result = "";
                        setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                            var suggestionsObj, suggestionResult, i;
                            return __generator(this, function (_a) {
                                suggestionsObj = promptResponseData_1.assistantResponses.find(function (resp) { return resp.prompt === prompt; });
                                suggestionResult = suggestionsObj ? suggestionsObj.suggestions || promptResponseData_1.assistantSuggestions : promptResponseData_1.assistantSuggestions;
                                for (i = 0; i < suggestionResult.length; i++) {
                                    if (suggestionResult[i]) {
                                        finalResult.push(suggestionResult[i].replace("- ", "").replace("* ", "").trim());
                                    }
                                }
                                return [2];
                            });
                        }); }, 1000);
                        setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4, GetResult(prompt)];
                                    case 1:
                                        result = _a.sent();
                                        aiAssistViewInst.addPromptResponse(result);
                                        aiAssistViewInst.promptSuggestions = finalResult;
                                        updateBannerStyle();
                                        checkAndUpdateLocalStorage(prompt);
                                        updateConversationName(prompt);
                                        return [2];
                                }
                            });
                        }); }, 1000);
                    }
                    catch (error) {
                        result = error;
                        aiAssistViewInst.addPromptResponse("I apologize, but I'm experiencing some difficulty processing your request at this moment, which might be due to the complexity of your query or a technical limitation on my end, so I would greatly appreciate it if you could rephrase your question or provide additional context that might help me better understand what you're looking for.");
                        aiAssistViewInst.promptSuggestions = [];
                        updateConversationName(prompt);
                    }
                    dataSource = grpListObj.dataSource;
                    if (!dataSource || dataSource.length === 0) {
                        loadNewAIAssist();
                        return [2];
                    }
                    return [2];
                });
            });
        }
    };
});
