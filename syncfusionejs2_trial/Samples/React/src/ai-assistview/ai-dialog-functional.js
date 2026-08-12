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
require("./ai-dialog.css");
var ej2_react_interactive_chat_1 = require("@syncfusion/ej2-react-interactive-chat");
var ej2_react_popups_1 = require("@syncfusion/ej2-react-popups");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var ej2_react_layouts_1 = require("@syncfusion/ej2-react-layouts");
var ai_service_1 = require("../common/ai-service");
var data = require("./promptResponseData.json");
var Dialog = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var assistInstance = (0, react_1.useRef)(null);
    var dialogInstance = (0, react_1.useRef)(null);
    var abortControllerRef = (0, react_1.useRef)();
    var promptsData = [
        {
            response: "Ask Questions, to better understand how your prompt interacts with AI-generated or default data responses..!"
        }
    ];
    var prompts = data["defaultPromptResponseData"];
    var suggestion = data["defaultSuggestions"];
    var bannerTemplate = "<div class=\"banner-content\">\n        <div class=\"e-icons e-assistview-icon\"></div>\n        <h3>AI Assistance</h3>\n        <i>To get started, provide input or choose a suggestion.</i>\n    </div>";
    var leftContent = function () {
        return (React.createElement("div", { className: "assist-left-content" },
            React.createElement("div", { className: "header" }, "Quick Notes"),
            React.createElement("hr", null),
            React.createElement("div", { className: "content e-card" },
                React.createElement("div", { className: "note-title" },
                    React.createElement("div", { className: "heading" }, "Planning and Requirements"),
                    React.createElement("div", { className: "sub-heading" }, "Outline the process of gathering input from stakeholders")),
                React.createElement("div", { className: "note-title e-skeleton e-skeleton-text" },
                    React.createElement("div", { className: "heading" }, "Meeting with Stakeholders"),
                    React.createElement("div", { className: "sub-heading" }, "Discuss strategies for conducting productive meetings with stakeholders")),
                React.createElement("div", { className: "note-title" },
                    React.createElement("div", { className: "heading" }, "Risk Management and Problem-Solving"),
                    React.createElement("div", { className: "sub-heading" }, "Offer tips on how to proactively manage challenges, including regular")),
                React.createElement("div", { className: "note-title" },
                    React.createElement("div", { className: "heading e-skeleton e-skeleton-text" }),
                    React.createElement("div", { className: "sub-heading e-skeleton e-skeleton-text" })),
                React.createElement("div", { className: "note-title" },
                    React.createElement("div", { className: "heading e-skeleton e-skeleton-text" })))));
    };
    var rightContent = function () {
        return (React.createElement("div", { className: "right-content" },
            React.createElement("div", { className: "heading" }, "Meeting with Stakeholders"),
            React.createElement("hr", null),
            React.createElement("div", { className: "date-info" }, "Tuesday, August 27, 2024"),
            React.createElement("div", { className: "content e-card", contentEditable: true, suppressContentEditableWarning: true },
                React.createElement("i", null,
                    React.createElement("mark", null, "(Open AI Assist, generate a response, and click 'Copy' from the toolbar item to get it updated here.)")),
                "Discuss strategies for conducting productive meetings with stakeholders. ",
                React.createElement("br", null),
                "Highlight the significance of setting clear agendas, defining outcomes, and maintaining open communication. ",
                React.createElement("br", null))));
    };
    var toolbarItemClicked = function (args) {
        if (args.item.iconCss === 'e-icons e-close') {
            dialogInstance.current.hide();
        }
        if (args.item.iconCss === 'e-icons e-assist-copy') {
            var targetElem = document.querySelector('.right-content .content');
            var response = assistInstance.current.prompts[args.dataIndex].response;
            if (targetElem) {
                targetElem.innerHTML += response + '<br />';
                dialogInstance.current.hide();
            }
        }
    };
    var assistViewToolbarSettings = {
        itemClicked: toolbarItemClicked,
        items: [{ iconCss: 'e-icons e-close', align: 'Right' }]
    };
    var responseToolbarsettings = {
        itemClicked: toolbarItemClicked
    };
    var fabClicked = function () {
        dialogInstance.current.show();
    };
    var promptRequest = function (args) { return __awaiter(void 0, void 0, void 0, function () {
        var foundPrompt, response, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    abortControllerRef.current = new AbortController();
                    foundPrompt = prompts.find(function (promptObj) { return promptObj.prompt === args.prompt; });
                    if (!foundPrompt) return [3 /*break*/, 1];
                    _a = foundPrompt.response;
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, (0, ai_service_1.getAIResponse)(args, abortControllerRef.current)];
                case 2:
                    _a = _b.sent();
                    _b.label = 3;
                case 3:
                    response = _a;
                    assistInstance.current.addPromptResponse(response);
                    assistInstance.current.promptSuggestions = (foundPrompt === null || foundPrompt === void 0 ? void 0 : foundPrompt.suggestions) || suggestion;
                    return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: "control-section" },
            React.createElement("div", { className: "dialog-aiassistview" },
                React.createElement(ej2_react_layouts_1.SplitterComponent, { id: "splitter", height: '600px' },
                    React.createElement(ej2_react_layouts_1.PanesDirective, null,
                        React.createElement(ej2_react_layouts_1.PaneDirective, { size: '22%', resizable: false, content: leftContent }),
                        React.createElement(ej2_react_layouts_1.PaneDirective, { size: '78%', resizable: false, content: rightContent })))),
            React.createElement(ej2_react_popups_1.DialogComponent, { id: "dialogElem", width: '440px', height: '100%', ref: dialogInstance, visible: false, target: '.dialog-aiassistview', cssClass: 'custom-dialog' },
                React.createElement(ej2_react_interactive_chat_1.AIAssistViewComponent, { id: "aiAssistView", ref: assistInstance, cssClass: 'custom-aiassistview', promptSuggestions: suggestion, enableStreaming: true, promptRequest: promptRequest, bannerTemplate: bannerTemplate, toolbarSettings: assistViewToolbarSettings, responseToolbarSettings: responseToolbarsettings })),
            React.createElement(ej2_react_buttons_1.FabComponent, { id: "fabElem", iconCss: 'e-icons e-assistview-icon', content: 'AI Assist', target: '.dialog-aiassistview', onClick: fabClicked })),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null,
                "This example showcases the integration of AI AssistView within the Syncfusion",
                React.createElement("sup", null, "\u00AE"),
                " dialog component, allowing you to display generated responses in the notes view.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null,
                "In this example, the AI AssistView is shown inside a dialog component, which opens with a floating action button (FAB) click. It uses predefined  ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview#promptsuggestions" }, "promptSuggestions"),
                " that are displayed based on user configuration and a custom toolbar item as a close icon to close the dialog. The  ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview#promptrequest" }, "promptRequest"),
                " event finds matching prompts and displays the responses."))));
};
exports.default = Dialog;
