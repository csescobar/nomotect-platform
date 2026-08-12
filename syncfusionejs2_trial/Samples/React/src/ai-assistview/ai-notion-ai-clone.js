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
exports.NotionAIClone = void 0;
var React = require("react");
var ej2_react_interactive_chat_1 = require("@syncfusion/ej2-react-interactive-chat");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var ej2_buttons_1 = require("@syncfusion/ej2-buttons");
var ej2_react_popups_1 = require("@syncfusion/ej2-react-popups");
var ej2_splitbuttons_1 = require("@syncfusion/ej2-splitbuttons");
var ej2_react_navigations_1 = require("@syncfusion/ej2-react-navigations");
var ej2_react_notifications_1 = require("@syncfusion/ej2-react-notifications");
var sample_base_1 = require("../common/sample-base");
var ai_service_1 = require("../common/ai-service");
var data = require("./promptResponseData.json");
require("./ai-notion-ai-clone.css");
var NotionAIClone = /** @class */ (function (_super) {
    __extends(NotionAIClone, _super);
    function NotionAIClone() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.notionSuggestions = data["notionSuggestions"];
        _this.iconMapByIndex = data["iconMapByIndex"];
        _this.modelIcons = data["modelIcons"];
        _this.sessionChats = [];
        _this.activeSessionId = null;
        _this.isFirstSessionAdded = false;
        _this.webIconCheckedState = true;
        _this.editIconCheckedState = true;
        _this.currentMode = 'Sidebar';
        _this.lastActiveMode = 'Sidebar'; // tracks mode before hide, used by FAB to restore
        // Called by AIAssistViewComponent `created` event — mirrors TS `created()`
        _this.onAssistViewCreated = function () {
            var modelItems = [
                { text: 'Auto', iconCss: 'e-icons e-assistview-icon' },
                { text: 'Sonnet 4.6', iconCss: 'model-icon model-sonet' },
                { text: 'Opus 4.6', iconCss: 'model-icon model-opus' },
                { text: 'Gemini 3.1 Pro', iconCss: 'model-icon model-gemini' },
                { text: 'GPT 5.2', iconCss: 'model-icon model-gpt' }
            ];
            var currentModel = 'Auto';
            _this.modelDropdown = new ej2_splitbuttons_1.DropDownButton({
                items: modelItems,
                cssClass: 'e-caret-hide e-flat',
                iconCss: 'e-icons e-assistview-icon',
                beforeItemRender: function (args) {
                    var item = modelItems.find(function (m) { return m.text === args.item.text; });
                    var iconCss = item ? item.iconCss : '';
                    var isEIcon = iconCss.startsWith('e-icons');
                    args.element.innerHTML = "\n          <span class=\"".concat(iconCss, "\" style=\"margin-right:8px;vertical-align:middle;").concat(isEIcon ? 'margin-top:10px;display:inline-block;' : '', "\"></span>\n          <span>").concat(args.item.text, "</span>");
                    if (currentModel === args.item.text) {
                        args.element.classList.add('e-selected');
                    }
                },
                select: function (args) {
                    currentModel = args.item.text;
                    _this.modelDropdown.content = args.item.text;
                    _this.updateModelIcon(args.item.text);
                }
            });
            _this.modelDropdown.appendTo('#custombtn');
            // Settings dropdown
            var settingsItems = [
                { text: 'Can make changes', iconCss: 'e-icons e-edit', id: 'edit' },
                { text: 'Web access', iconCss: 'e-icons e-time-zone', id: 'web-access' },
                { text: 'Help Center', iconCss: 'e-icons e-reading-view', id: 'help-center' }
            ];
            _this.settingsDropdown = new ej2_splitbuttons_1.DropDownButton({
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
                open: _this.onSettingsDropdownCreated
            });
            _this.settingsDropdown.appendTo('#settings-icon');
            // Screen mode dropdown
            var screenTypes = [
                { text: 'Sidebar' },
                { text: 'Floating' },
                { separator: true },
                { text: 'Full screen' }
            ];
            _this.screenDropdown = new ej2_splitbuttons_1.DropDownButton({
                items: screenTypes,
                iconCss: 'e-icons e-resize',
                cssClass: 'e-caret-hide e-flat',
                beforeItemRender: function (args) {
                    if (_this.currentMode === args.item.text) {
                        args.element.classList.add('e-selected');
                    }
                },
                select: function (args) {
                    _this.moveAssistview(args.item.text);
                }
            });
            _this.screenDropdown.appendTo('#screen-resizer');
            // History dropdown
            _this.historyDropdown = new ej2_splitbuttons_1.DropDownButton({
                items: [{ text: 'No Chat History' }],
                iconCss: 'e-icons e-history',
                cssClass: 'e-caret-hide e-flat',
                beforeItemRender: function (args) {
                    if (_this.activeSessionId === args.item.id) {
                        args.element.classList.add('e-selected');
                    }
                },
                select: function (args) {
                    if (args.item.id) {
                        _this.loadSession(args.item.id);
                    }
                }
            });
            _this.historyDropdown.appendTo('#history-icon');
            // Initialize sidebar and move wrapper to it (matching JS behavior)
            if (_this.sidebarInstance) {
                _this.sidebarInstance.show();
                var wrapper = document.getElementById('assistviewWrapper');
                if (wrapper) {
                    _this.sidebarInstance.element.appendChild(wrapper);
                }
                _this.toggleIconClass('e-horizontal-line', 'e-chevron-right-double');
            }
        };
        _this.onSettingsDropdownCreated = function () {
            var settingsItems = [
                { text: 'Can make changes', id: 'edit' },
                { text: 'Web access', id: 'web-access' },
                { text: 'Help Center', id: 'help-center' }
            ];
            setTimeout(function () {
                settingsItems.forEach(function (item) {
                    if (item.text === 'Help Center')
                        return;
                    var isChecked = item.id === 'edit' ? _this.editIconCheckedState : _this.webIconCheckedState;
                    var switchElem = document.getElementById("settings-switch-".concat(item.id));
                    if (!switchElem)
                        return;
                    new ej2_buttons_1.Switch({
                        checked: isChecked,
                        change: function (args) { return _this.toggleSwitch(args, item.text); }
                    }).appendTo(switchElem);
                });
            }, 0);
        };
        _this.onPromptRequest = function (args) { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b;
            var _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (this.assistInstance)
                            this.assistInstance.promptSuggestions = [];
                        this.abortController = new AbortController();
                        args.prompt = 'Based on the following notes content:\n\n' + ((_c = document.querySelector('.notes-content')) === null || _c === void 0 ? void 0 : _c.textContent) + '\n\n---\n\nUser prompt: ' + args.prompt;
                        if (!this.assistInstance) return [3 /*break*/, 2];
                        _b = (_a = this.assistInstance).addPromptResponse;
                        return [4 /*yield*/, (0, ai_service_1.getAIResponse)(args, this.abortController)];
                    case 1:
                        _b.apply(_a, [_d.sent()]);
                        if (!this.isFirstSessionAdded && !this.activeSessionId) {
                            this.createNewSession(true);
                            this.isFirstSessionAdded = true;
                        }
                        this.assistInstance.promptSuggestions = [];
                        _d.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); };
        _this.toolbarItemClicked = function (args) {
            if (args.item.iconCss === 'e-icons e-edit-notes') {
                _this.createNewSession();
                if (_this.assistInstance) {
                    _this.assistInstance.promptSuggestions = _this.notionSuggestions;
                }
            }
            else if (args.item.iconCss === 'e-icons e-horizontal-line' ||
                args.item.iconCss === 'e-icons e-chevron-right-double') {
                // Move wrapper back to dialogElem before hiding
                var dialogElem = document.querySelector('#dialogElem');
                var wrapper = document.getElementById('assistviewWrapper');
                if (dialogElem && wrapper) {
                    dialogElem.appendChild(wrapper);
                }
                if (_this.sidebarInstance)
                    _this.sidebarInstance.hide();
                if (_this.dialogInstance)
                    _this.dialogInstance.hide();
                _this.toggleBackgroundState(true);
                // Preserve lastActiveMode so FAB can restore to the correct mode.
                // Reset currentMode to '' so moveAssistview's guard won't block re-entry on FAB click.
                _this.lastActiveMode = _this.currentMode || 'Sidebar';
                _this.currentMode = '';
                if (_this.fabInstance)
                    _this.fabInstance.element.style.display = '';
            }
            else if (args.item.iconCss === 'e-icons e-export') {
                if (_this.toastInstance)
                    _this.toastInstance.show();
            }
        };
        _this.footerToolbarItemClicked = function (args) {
            if (args.item.iconCss === 'e-icons e-edit' || args.item.iconCss === 'e-icons e-time-zone') {
                if (_this.settingsDropdown)
                    _this.settingsDropdown.toggle();
            }
        };
        _this.moveAssistview = function (mode) {
            if (!mode || _this.currentMode === mode)
                return;
            _this.lastActiveMode = mode;
            _this.currentMode = mode;
            var wrapper = document.getElementById('assistviewWrapper');
            var fs = document.getElementById('fullscreenContainer');
            if (_this.dialogInstance)
                _this.dialogInstance.hide();
            if (_this.sidebarInstance)
                _this.sidebarInstance.hide();
            if (fs)
                fs.style.display = 'none';
            switch (mode) {
                case 'Sidebar':
                    if (_this.sidebarInstance)
                        _this.sidebarInstance.show();
                    _this.toggleBackgroundState(true);
                    if (_this.sidebarInstance && wrapper)
                        _this.sidebarInstance.element.appendChild(wrapper);
                    _this.toggleIconClass('e-horizontal-line', 'e-chevron-right-double');
                    break;
                case 'Floating':
                    if (_this.dialogInstance)
                        _this.dialogInstance.show();
                    var dialogElem = document.querySelector('#dialogElem');
                    if (dialogElem && wrapper)
                        dialogElem.appendChild(wrapper);
                    _this.toggleBackgroundState(true);
                    _this.toggleIconClass('e-chevron-right-double', 'e-horizontal-line');
                    break;
                case 'Full screen':
                    if (fs && wrapper) {
                        fs.style.display = 'block';
                        fs.appendChild(wrapper);
                    }
                    _this.toggleBackgroundState(false);
                    _this.toggleIconClass('e-chevron-right-double', 'e-horizontal-line');
                    break;
            }
        };
        _this.toggleIconClass = function (selectorIconClass, replaceIconClass) {
            var _a;
            var icon = (_a = _this.assistInstance.toolbarHeader) === null || _a === void 0 ? void 0 : _a.querySelector(".".concat(selectorIconClass));
            if (icon) {
                icon.className = "e-icons ".concat(replaceIconClass);
            }
        };
        _this.toggleBackgroundState = function (show) {
            var notionContainer = document.querySelector('.notes-app-container');
            if (notionContainer) {
                show ? notionContainer.classList.remove('e-hidden') : notionContainer.classList.add('e-hidden');
            }
        };
        _this.toggleSwitch = function (args, text) {
            var _a, _b, _c, _d, _e, _f;
            var visibility = !args.checked;
            if (text === 'Can make changes') {
                _this.editIconCheckedState = !visibility;
                var editIcon = (_c = (_b = (_a = _this.assistInstance.footerToolbarEle) === null || _a === void 0 ? void 0 : _a.element) === null || _b === void 0 ? void 0 : _b.querySelector('.e-edit')) === null || _c === void 0 ? void 0 : _c.closest('.e-toolbar-item');
                if (editIcon)
                    visibility ? editIcon.classList.remove('e-hidden') : editIcon.classList.add('e-hidden');
            }
            else if (text === 'Web access') {
                _this.webIconCheckedState = !visibility;
                var webIcon = (_f = (_e = (_d = _this.assistInstance.footerToolbarEle) === null || _d === void 0 ? void 0 : _d.element) === null || _e === void 0 ? void 0 : _e.querySelector('.e-time-zone')) === null || _f === void 0 ? void 0 : _f.closest('.e-toolbar-item');
                if (webIcon)
                    visibility ? webIcon.classList.remove('e-hidden') : webIcon.classList.add('e-hidden');
            }
        };
        _this.suggestionItemContent = function (ctx) {
            var iconClass = _this.iconMapByIndex[ctx.index] || '';
            return (React.createElement("div", { className: "suggestion-item active" },
                React.createElement("span", { className: "".concat(iconClass, " suggestion-icon") }),
                React.createElement("span", { className: "assist-suggestion-content" }, ctx.promptSuggestion)));
        };
        _this.updateModelIcon = function (modelName) {
            if (_this.modelDropdown) {
                _this.modelDropdown.iconCss = "model-icon ".concat(_this.modelIcons[modelName]);
                _this.modelDropdown.dataBind();
            }
        };
        _this.persistActiveSession = function () {
            if (!_this.activeSessionId || !_this.assistInstance)
                return;
            var session = _this.sessionChats.find(function (s) { return s.id === _this.activeSessionId; });
            if (session)
                session.prompts = _this.assistInstance.prompts;
        };
        _this.createNewSession = function (isAuto) {
            var _a;
            if (isAuto === void 0) { isAuto = false; }
            var prompts = (_a = _this.assistInstance) === null || _a === void 0 ? void 0 : _a.prompts;
            if (!prompts || prompts.length === 0) {
                _this.activeSessionId = null;
                if (_this.assistInstance) {
                    _this.assistInstance.prompts = [];
                    _this.assistInstance.dataBind();
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
                _this.updateHistoryDropdown();
            }
            if (!isAuto) {
                _this.activeSessionId = null;
                if (_this.assistInstance) {
                    _this.assistInstance.prompts = [];
                    _this.assistInstance.dataBind();
                }
            }
        };
        _this.updateHistoryDropdown = function () {
            var items = _this.sessionChats.map(function (session) { return ({
                text: session.title.length > 30 ? session.title.substring(0, 30) + '...' : session.title,
                id: session.id
            }); });
            if (_this.historyDropdown) {
                _this.historyDropdown.items = items.length ? items : [{ text: 'No Chat History' }];
                _this.historyDropdown.dataBind();
            }
        };
        _this.ensureCurrentChatIsSaved = function () {
            var _a;
            var prompts = (_a = _this.assistInstance) === null || _a === void 0 ? void 0 : _a.prompts;
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
            _this.updateHistoryDropdown();
        };
        _this.loadSession = function (sessionId) {
            if (sessionId === _this.activeSessionId)
                return;
            _this.ensureCurrentChatIsSaved();
            var session = _this.sessionChats.find(function (s) { return s.id === sessionId; });
            if (!session || !_this.assistInstance)
                return;
            _this.activeSessionId = sessionId;
            _this.assistInstance.prompts = session.prompts;
            _this.assistInstance.promptSuggestions = [];
            _this.assistInstance.dataBind();
        };
        _this.bannerTemplate = "<div class=\"banner-content\">\n    <div class=\"e-icons e-assistview-icon\"></div>\n    <h3>How can I help you today ?</h3>\n  </div>";
        _this.assistViewToolbarSettings = {
            items: [
                { iconCss: 'e-icons e-export', align: 'Right', tooltip: 'Share Chat' },
                { align: 'Right', tooltip: 'Chat History', template: '<button id="history-icon"></button>' },
                { iconCss: 'e-icons e-edit-notes', align: 'Right', tooltip: 'Start New chat' },
                { align: 'Right', tooltip: 'Switch Chat Mode', template: '<button id="screen-resizer"></button>' },
                { iconCss: 'e-icons e-horizontal-line', align: 'Right', tooltip: 'Hide Chat' }
            ],
            itemClicked: _this.toolbarItemClicked
        };
        _this.footerToolbarSettings = {
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
            itemClick: _this.footerToolbarItemClicked
        };
        _this.responseToolbarSettings = {
            items: [
                { iconCss: 'e-icons e-assist-copy' },
                { iconCss: 'e-icons e-assist-like' },
                { iconCss: 'e-icons e-assist-dislike' },
                { iconCss: 'e-icons e-assist-audio' }
            ]
        };
        _this.attachmentSettings = {
            saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save',
            removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove'
        };
        _this.speechToTextSettings = { enable: true };
        return _this;
    }
    NotionAIClone.prototype.componentDidMount = function () {
        var _this = this;
        // FAB is hidden on mount — only shown when assistview is hidden
        if (this.fabInstance) {
            this.fabInstance.element.style.display = 'none';
            this.fabInstance.element.onclick = function () {
                _this.toggleBackgroundState(true);
                var modeToRestore = _this.lastActiveMode || 'Sidebar';
                // Clear currentMode so moveAssistview's guard doesn't block the restore
                _this.currentMode = '';
                _this.moveAssistview(modeToRestore);
                _this.fabInstance.element.style.display = 'none';
            };
        }
    };
    NotionAIClone.prototype.render = function () {
        var _this = this;
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
                React.createElement(ej2_react_popups_1.DialogComponent, { id: "dialogElem", target: ".notes-page", position: { X: 'right', Y: 0 }, animationSettings: { effect: 'FadeZoom' }, width: "500px", visible: false, cssClass: "custom-dialog", ref: function (dialog) { return (_this.dialogInstance = dialog); } },
                    React.createElement("div", { id: "assistviewWrapper", className: "notion-aiassistview" },
                        React.createElement(ej2_react_interactive_chat_1.AIAssistViewComponent, { id: "aiAssistView", promptSuggestions: this.notionSuggestions, promptSuggestionItemTemplate: this.suggestionItemContent, promptRequest: this.onPromptRequest, bannerTemplate: this.bannerTemplate, toolbarSettings: this.assistViewToolbarSettings, footerToolbarSettings: this.footerToolbarSettings, responseToolbarSettings: this.responseToolbarSettings, enableAttachments: true, enableStreaming: true, attachmentSettings: this.attachmentSettings, speechToTextSettings: this.speechToTextSettings, created: this.onAssistViewCreated, ref: function (assist) { return (_this.assistInstance = assist); } }))),
                React.createElement(ej2_react_navigations_1.SidebarComponent, { id: "notionSidebar", target: ".notes-page", width: "400px", position: "Right", animate: false, isOpen: false, ref: function (sidebar) { return (_this.sidebarInstance = sidebar); } }),
                React.createElement("div", { id: "fullscreenContainer" }),
                React.createElement(ej2_react_buttons_1.FabComponent, { id: "fabElem", iconCss: "e-icons e-magic-wand", target: ".notes-page", ref: function (fab) { return (_this.fabInstance = fab); } }),
                React.createElement("div", { id: "toastTarget" }),
                React.createElement(ej2_react_notifications_1.ToastComponent, { content: "Share chat option is clicked !", position: { X: 'Right', Y: 'Top' }, showCloseButton: true, ref: function (toast) { return (_this.toastInstance = toast); } })),
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
    return NotionAIClone;
}(sample_base_1.SampleBase));
exports.NotionAIClone = NotionAIClone;
