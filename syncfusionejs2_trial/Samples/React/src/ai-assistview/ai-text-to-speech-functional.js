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
require("./ai-text-to-speech.css");
var ej2_react_interactive_chat_1 = require("@syncfusion/ej2-react-interactive-chat");
var sample_base_1 = require("../common/sample-base");
var ai_service_1 = require("../common/ai-service");
var react_1 = require("react");
var data = require("./promptResponseData.json");
var promptResponseData = data.defaultPromptResponseData || data;
var TextToSpeech = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var aiAssistViewObj = (0, react_1.useRef)(null);
    var abortControllerRef = (0, react_1.useRef)();
    var prompts = [
        {
            prompt: "What is AI?",
            response: "<div>AI stands for Artificial Intelligence, enabling machines to mimic human intelligence for tasks such as learning, problem-solving, and decision-making.</div>"
        }
    ];
    var toolbarSettings = {
        items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
        itemClicked: function (args) { return toolbarItemClicked(args); }
    };
    var responseToolbarSettings = {
        items: [
            { type: 'Button', iconCss: 'e-icons e-assist-copy', tooltip: 'Copy' },
            { type: 'Button', iconCss: 'e-icons e-assist-audio', tooltip: 'Read Aloud' },
            { type: 'Button', iconCss: 'e-icons e-assist-like', tooltip: 'Like' },
            { type: 'Button', iconCss: 'e-icons e-assist-dislike', tooltip: 'Need Improvement' },
        ]
    };
    var onPromptRequest = function (args) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_1;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!aiAssistViewObj.current)
                        return [2 /*return*/];
                    abortControllerRef.current = new AbortController();
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, ai_service_1.getAIResponse)(args, abortControllerRef.current)];
                case 2:
                    response = _c.sent();
                    if (response && typeof response === 'string') {
                        (_a = aiAssistViewObj.current) === null || _a === void 0 ? void 0 : _a.addPromptResponse(response, true);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _c.sent();
                    (_b = aiAssistViewObj.current) === null || _b === void 0 ? void 0 : _b.addPromptResponse('⚠️ Something went wrong. Please try again later.');
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var toolbarItemClicked = function (args) {
        var _a;
        if (args.item.iconCss === 'e-icons e-refresh') {
            aiAssistViewObj.current.prompts = [];
            (_a = abortControllerRef.current) === null || _a === void 0 ? void 0 : _a.abort();
        }
    };
    var stopRespondingClick = function () {
        var _a;
        (_a = abortControllerRef.current) === null || _a === void 0 ? void 0 : _a.abort();
    };
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: "control-section" },
            React.createElement("div", { className: "integration-texttospeech-section" },
                React.createElement(ej2_react_interactive_chat_1.AIAssistViewComponent, { id: "aiAssistView", ref: aiAssistViewObj, prompts: prompts, enableStreaming: true, promptRequest: onPromptRequest, toolbarSettings: toolbarSettings, responseToolbarSettings: responseToolbarSettings, stopRespondingClick: stopRespondingClick }))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null,
                "This sample demonstrates the integration of ",
                React.createElement("code", null, "Text-to-Speech"),
                " functionality with the AI AssistView component. It allows users to convert AI-generated responses into spoken audio using the browser's Web Speech API.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null,
                "In this example, the AI AssistView component is integrated with ",
                React.createElement("code", null, "Text-to-Speech"),
                " functionality to enable voice-based interaction with AI-generated responses."),
            React.createElement("p", null, "The sample demonstrates the following features:"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    "The ",
                    React.createElement("code", null, "responseToolbarSettings"),
                    " includes a custom ",
                    React.createElement("code", null, "Read Aloud"),
                    " button that extracts plain text from the AI response and uses the browser's ",
                    React.createElement("code", null, "SpeechSynthesis"),
                    " API to vocalize it."),
                React.createElement("li", null,
                    "The ",
                    React.createElement("code", null, "SpeechSynthesisUtterance"),
                    " interface is used to manage speech playback, including toggling between play and stop states."),
                React.createElement("li", null,
                    "The ",
                    React.createElement("code", null, "toolbarSettings"),
                    " adds a right-aligned ",
                    React.createElement("code", null, "Refresh"),
                    " button to clear previous prompts."),
                React.createElement("li", null,
                    "Responses are streamed dynamically using the ",
                    React.createElement("code", null, "addPromptResponse"),
                    " method, and the ",
                    React.createElement("code", null, "scrollToBottom"),
                    " method ensures the latest response is always visible."),
                React.createElement("li", null,
                    "Markdown content is rendered using the ",
                    React.createElement("code", null, "Marked"),
                    " plugin for rich formatting in AI responses.")))));
};
exports.default = TextToSpeech;
