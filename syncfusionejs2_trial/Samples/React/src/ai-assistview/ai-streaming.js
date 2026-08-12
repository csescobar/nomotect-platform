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
exports.Streaming = void 0;
var React = require("react");
require("./ai-streaming.css");
var ej2_react_interactive_chat_1 = require("@syncfusion/ej2-react-interactive-chat");
var data = require("./promptResponseData.json");
var sample_base_1 = require("../common/sample-base");
var ai_service_1 = require("../common/ai-service");
var Streaming = /** @class */ (function (_super) {
    __extends(Streaming, _super);
    function Streaming() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bannerTemplate = "<div class=\"banner-content\">\n        <div class=\"e-icons e-assistview-icon\"></div>\n        <h3>AI Assistance</h3>\n        <i>To get started, provide input or choose a suggestion.</i>\n    </div>";
        _this.prompts = data["streamingPromptResponseData"];
        _this.suggestion = data["streamingSuggestions"];
        _this.toolbarItemClicked = function (args) {
            if (args.item.iconCss === 'e-icons e-refresh') {
                _this.streamingAIAssistView.prompts = [];
                _this.streamingAIAssistView.promptSuggestions = _this.suggestion;
            }
        };
        _this.assistViewToolbarSettings = {
            items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
            itemClicked: _this.toolbarItemClicked
        };
        _this.onPromptRequest = function (args) { return __awaiter(_this, void 0, void 0, function () {
            var streamingResponse, response, aiResponse, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.abortController = new AbortController();
                        streamingResponse = this.prompts.find(function (data) { return data.prompt === args.prompt; });
                        response = "For real-time prompt processing, connect the AI AssistView control to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.";
                        if (!streamingResponse) return [3 /*break*/, 1];
                        response = streamingResponse.response;
                        return [3 /*break*/, 4];
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, (0, ai_service_1.getAIResponse)(args, this.abortController)];
                    case 2:
                        aiResponse = _a.sent();
                        if (aiResponse && typeof aiResponse === 'string') {
                            response = aiResponse;
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.error('Error getting AI response:', error_1);
                        return [3 /*break*/, 4];
                    case 4:
                        this.streamingAIAssistView.addPromptResponse(response, true);
                        this.streamingAIAssistView.promptSuggestions = (streamingResponse === null || streamingResponse === void 0 ? void 0 : streamingResponse.suggestions) || this.suggestion;
                        return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    Streaming.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: "control-section" },
                React.createElement("div", { className: "stream-aiassistview" },
                    React.createElement(ej2_react_interactive_chat_1.AIAssistViewComponent, { id: "streamAssistView", ref: function (aiassistView) { return (_this.streamingAIAssistView = aiassistView); }, enableStreaming: true, promptSuggestions: this.suggestion, toolbarSettings: this.assistViewToolbarSettings, promptRequest: this.onPromptRequest, bannerTemplate: this.bannerTemplate }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null,
                    "This sample demonstrates the streaming response update in the ",
                    React.createElement("code", null, "AI AssistView"),
                    " component.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    " In this example, the ",
                    React.createElement("code", null, "AI AssistView"),
                    " component dynamically updates responses in a streaming manner using the  ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview#addpromptresponse" }, "addPromptResponse"),
                    " method, while the  ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview#scrolltobottom" }, "scrollToBottom"),
                    " method ensures automatic scrolling. The  ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview#bannertemplate" }, "bannerTemplate"),
                    " allows customization of the banner content, and  ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview#toolbarsettings" }, "toolbarSettings"),
                    " enables custom toolbar items, including a right-aligned Refresh button. Additionally,  ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview#promptsuggestions" }, "promptSuggestions"),
                    " offers AI-generated prompt suggestions, while  ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview#promptrequest" }, "promptRequest"),
                    " processes prompt requests when triggered."),
                React.createElement("p", null,
                    "This implementation provides an interactive AI chat experience with real-time streaming updates, enhanced by built-in Markdown-to-HTML conversion using the syncfusion ",
                    React.createElement("code", null, "MarkdownConverter"),
                    "."))));
    };
    return Streaming;
}(sample_base_1.SampleBase));
exports.Streaming = Streaming;
