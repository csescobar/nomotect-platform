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
require("./ai-attachments.css");
var ej2_react_interactive_chat_1 = require("@syncfusion/ej2-react-interactive-chat");
var ai_service_1 = require("../common/ai-service");
var data = require("./promptResponseData.json");
var Attachments = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var promptsData = [
        {
            response: "Ask Questions, to better understand how your prompt interacts with AI-generated or default data responses..!"
        }
    ];
    var prompts = data["defaultPromptResponseData"];
    var suggestion = data["defaultSuggestions"];
    var toolbarItemClicked = function (args) {
        if (args.item.iconCss === 'e-icons e-refresh') {
            assistInstance.current.prompts = [];
            assistInstance.current.promptSuggestions = suggestion;
        }
    };
    var assistViewToolbarSettings = {
        items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
        itemClicked: toolbarItemClicked
    };
    var bannerTemplate = "<div class=\"banner-content\">\n        <div class=\"e-icons e-assistview-icon\"></div>\n        <h3>AI Assistance</h3>\n        <i>Type your message or attach files to get started.</i>\n    </div>";
    var attachmentSettings = {
        saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove'
    };
    var assistInstance = (0, react_1.useRef)(null);
    var abortControllerRef = (0, react_1.useRef)();
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
            React.createElement("div", { className: "attachment-aiassistview" },
                React.createElement(ej2_react_interactive_chat_1.AIAssistViewComponent, { id: "aiAssistView", promptSuggestions: suggestion, toolbarSettings: assistViewToolbarSettings, enableStreaming: true, promptRequest: promptRequest, ref: assistInstance, enableAttachments: true, attachmentSettings: attachmentSettings, bannerTemplate: bannerTemplate }))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This sample demonstrates how users can attach files while interacting with the AI AssistView. The control enables file uploads to enhance the context of conversations and responses.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null,
                "In this example, the ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview/#enableattachments" }, "enableAttachments"),
                " property is set to ",
                React.createElement("code", null, "true"),
                " to enable file attachments. By, using the ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview/#attachmentsettings" }, "attachmentSettings"),
                " configure the ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview/attachmentSettings/#saveurl" }, "saveUrl"),
                " and ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview/attachmentSettings/#removeurl" }, "removeUrl"),
                " to allow file uploads for the attached files. Additionally, the ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview/#bannertemplate" }, "bannerTemplate"),
                " customizes the banner message, and ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview/#toolbarsettings" }, "toolbarSettings"),
                " includes a right-aligned ",
                React.createElement("code", null, "Refresh"),
                " button. The ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview/#promptsuggestions" }, "promptSuggestions"),
                " feature offers suggested prompts, while ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview/#promptrequest" }, "promptRequest"),
                " handles user queries."))));
};
exports.default = Attachments;
