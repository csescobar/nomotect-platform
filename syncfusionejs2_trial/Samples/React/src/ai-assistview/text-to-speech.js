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
exports.TextToSpeech = void 0;
var React = require("react");
require("./text-to-speech.css");
var sample_base_1 = require("../common/sample-base");
var ej2_react_interactive_chat_1 = require("@syncfusion/ej2-react-interactive-chat");
var data = require("./promptResponseData.json");
var promptResponseData = data.defaultPromptResponseData || data;
var TextToSpeech = /** @class */ (function (_super) {
    __extends(TextToSpeech, _super);
    function TextToSpeech(props) {
        var _this = _super.call(this, props) || this;
        _this.stopStreaming = false;
        _this.prompts = [
            {
                prompt: "What is AI?",
                response: "<div>AI stands for Artificial Intelligence, enabling machines to mimic human intelligence for tasks such as learning, problem-solving, and decision-making.</div>"
            }
        ];
        _this.toolbarSettings = {
            items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
            itemClicked: function (args) { return _this.toolbarItemClicked(args); }
        };
        _this.responseToolbarSettings = {
            items: [
                { type: 'Button', iconCss: 'e-icons e-assist-copy', tooltip: 'Copy' },
                { type: 'Button', iconCss: 'e-icons e-assist-audio', tooltip: 'Read Aloud' },
                { type: 'Button', iconCss: 'e-icons e-assist-like', tooltip: 'Like' },
                { type: 'Button', iconCss: 'e-icons e-assist-dislike', tooltip: 'Need Improvement' },
            ]
        };
        _this.onPromptRequest = function (args) { return __awaiter(_this, void 0, void 0, function () {
            var randomResponse, fullResponse, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.stopStreaming = false;
                        if (!this.aiAssistViewObj)
                            return [2 /*return*/];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        // Simulate API call with 1.5s delay
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 1500); })];
                    case 2:
                        // Simulate API call with 1.5s delay
                        _a.sent();
                        randomResponse = promptResponseData[Math.floor(Math.random() * promptResponseData.length)];
                        fullResponse = randomResponse.response || 'This is a simulated response from the AI service.';
                        if (!this.stopStreaming) {
                            this.aiAssistViewObj.addPromptResponse(fullResponse);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.aiAssistViewObj.addPromptResponse('⚠️ Something went wrong. Please try again later.');
                        this.stopStreaming = true;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.toolbarItemClicked = function (args) {
            if (args.item.iconCss === 'e-icons e-refresh') {
                _this.aiAssistViewObj.prompts = [];
                _this.stopStreaming = true;
            }
        };
        _this.stopRespondingClick = function () {
            _this.stopStreaming = true;
        };
        return _this;
    }
    TextToSpeech.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: "control-section" },
                React.createElement("div", { className: "integration-texttospeech-section" },
                    React.createElement(ej2_react_interactive_chat_1.AIAssistViewComponent, { id: "aiAssistView", ref: function (assistview) { _this.aiAssistViewObj = assistview; }, prompts: this.prompts, promptRequest: this.onPromptRequest, enableStreaming: true, toolbarSettings: this.toolbarSettings, responseToolbarSettings: this.responseToolbarSettings, stopRespondingClick: this.stopRespondingClick }))),
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
    return TextToSpeech;
}(sample_base_1.SampleBase));
exports.TextToSpeech = TextToSpeech;
