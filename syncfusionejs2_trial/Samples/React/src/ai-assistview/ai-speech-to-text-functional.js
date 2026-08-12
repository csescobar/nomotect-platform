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
require("./ai-speech-to-text.css");
var ej2_react_interactive_chat_1 = require("@syncfusion/ej2-react-interactive-chat");
var sample_base_1 = require("../common/sample-base");
var ai_service_1 = require("../common/ai-service");
var react_1 = require("react");
var SpeechToText = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var aiAssistViewObj = (0, react_1.useRef)(null);
    var abortControllerRef = (0, react_1.useRef)();
    var toolbarSettings = {
        items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
        itemClicked: function (args) { return toolbarItemClicked(args); }
    };
    var footerToolbarSettings = {
        toolbarPosition: 'Bottom',
        items: [
            { iconCss: 'e-icons e-assist-send', align: 'Right' },
            { iconCss: 'e-icons e-assist-attachment-icon', align: 'Left', tooltip: 'Attach File' },
            { iconCss: 'e-icons e-assist-speech-to-text', align: 'Left' }
        ]
    };
    var enableAttachments = true;
    var attachmentSettings = {
        saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove'
    };
    var speechToTextSettings = {
        enable: true
    };
    var bannerTemplate = function () {
        return (React.createElement("div", { className: "banner-info" },
            React.createElement("div", { className: "e-icons e-listen-icon" }),
            React.createElement("h3", null, "Speech To Text"),
            React.createElement("i", null, "Click the below mic-button to convert your voice to text.")));
    };
    var onPromptRequest = function (args) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!((_a = args === null || args === void 0 ? void 0 : args.prompt) === null || _a === void 0 ? void 0 : _a.trim()) || !aiAssistViewObj.current)
                        return [2 /*return*/];
                    abortControllerRef.current = new AbortController();
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, ai_service_1.getAIResponse)(args, abortControllerRef.current)];
                case 2:
                    response = _b.sent();
                    if (response && typeof response === 'string') {
                        aiAssistViewObj.current.addPromptResponse(response);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _b.sent();
                    console.error('Error getting AI response:', error_1);
                    aiAssistViewObj.current.addPromptResponse('For real-time prompt processing, connect the AI AssistView control to your preferred AI service.');
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var toolbarItemClicked = function (args) {
        if (args.item.iconCss === 'e-icons e-refresh') {
            aiAssistViewObj.current.prompts = [];
        }
    };
    var stopRespondingClick = function () {
        var _a;
        (_a = abortControllerRef.current) === null || _a === void 0 ? void 0 : _a.abort();
    };
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: "control-section" },
            React.createElement("div", { className: "integration-speech-to-text-assist-section" },
                React.createElement(ej2_react_interactive_chat_1.AIAssistViewComponent, { id: "aiAssistView", ref: aiAssistViewObj, promptRequest: onPromptRequest, bannerTemplate: bannerTemplate, toolbarSettings: toolbarSettings, footerToolbarSettings: footerToolbarSettings, attachmentSettings: attachmentSettings, enableAttachments: enableAttachments, enableStreaming: true, speechToTextSettings: speechToTextSettings, stopRespondingClick: stopRespondingClick }))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null,
                "This sample demonstrates the integration of ",
                React.createElement("code", null, "Speech-to-Text"),
                " functionality with the AI AssistView component. It allows users to convert spoken input into text using the device's microphone and the browser's ",
                React.createElement("code", null, "SpeechRecognition"),
                " API.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null,
                "In this example, the AI AssistView component is integrated with the built-in ",
                React.createElement("code", null, "SpeechToText"),
                " component to enable voice-based interaction."),
            React.createElement("p", null, "The sample demonstrates the following features:"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    "The ",
                    React.createElement("code", null, "footerToolbarSettings"),
                    " to customize the footer options with speech to text, attachments and a send icon."),
                React.createElement("li", null,
                    "The ",
                    React.createElement("code", null, "speechToTextSettings"),
                    " adds the speech to text button at the footer to captures voice input and transcribes it into text."),
                React.createElement("li", null,
                    "The ",
                    React.createElement("code", null, "attachmentSettings"),
                    " to allow file uploads for the attached files."),
                React.createElement("li", null,
                    "The ",
                    React.createElement("code", null, "toolbarSettings"),
                    " adds a right-aligned ",
                    React.createElement("code", null, "Refresh"),
                    " button to clear previous prompts."),
                React.createElement("li", null,
                    "Responses are streamed dynamically using the ",
                    React.createElement("code", null, "addPromptResponse"),
                    " method for a real-time experience."),
                React.createElement("li", null,
                    "Markdown content in the response is rendered using the ",
                    React.createElement("code", null, "Marked"),
                    " plugin.")))));
};
exports.default = SpeechToText;
