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
var ai_service_1 = require("../common/ai-service");
require("./ai-thinking.css");
var ej2_react_interactive_chat_1 = require("@syncfusion/ej2-react-interactive-chat");
ej2_react_interactive_chat_1.AIAssistView.Inject(ej2_react_interactive_chat_1.AssistThinking);
var Thinking = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var bannerTemplate = "<div class=\"banner-content\">\n        <div class=\"e-icons e-brain\"></div>\n        <h3>\uD83D\uDCAD Thinking Support</h3>\n        <i>Break down complex problems and think through decisions.</i>\n    </div>";
    var promptSuggestions = [
        'Build a modern dashboard for my business',
        'Create a login page with validation',
        'Make a task management board'
    ];
    var assistInstance = (0, react_1.useRef)(null);
    var promptRequest = function (args) { return __awaiter(void 0, void 0, void 0, function () {
        var assistView, partialThinkingBlocks, finalThinkingBlocks, userID, abortController, requestBody, response, errorData, result, responseText, error_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    assistView = assistInstance.current;
                    partialThinkingBlocks = {
                        blockType: 'thinking',
                        title: 'Thinking',
                        collapsible: true,
                        collapsed: true,
                        isActive: true,
                        stages: [
                            {
                                status: 'inprogress',
                                content: 'Analyzing your request to deliver the most relevant response'
                            }
                        ]
                    };
                    finalThinkingBlocks = {
                        blockType: 'thinking',
                        title: 'Thinking',
                        collapsible: true,
                        collapsed: true,
                        isActive: false,
                        stages: [
                            {
                                status: 'completed',
                                content: 'Completed analysis and generated the most relevant response'
                            }
                        ]
                    };
                    // STEP 1: show initial thinking
                    assistView.addPromptResponse({ blocks: [partialThinkingBlocks] }, false);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 7, , 8]);
                    return [4 /*yield*/, (0, ai_service_1.getUserID)()];
                case 2:
                    userID = _b.sent();
                    if (!userID)
                        return [2 /*return*/];
                    abortController = new AbortController();
                    requestBody = {
                        visitorId: userID,
                        messages: {
                            messages: [
                                { role: 'system', content: 'You are a helpful assistant.' },
                                { role: 'user', content: args.prompt }
                            ]
                        },
                        reasoning: {
                            effort: 'medium',
                            summary: 'concise'
                        }
                    };
                    return [4 /*yield*/, fetch(ai_service_1.AI_SERVICE_URL + '/api/chat', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(requestBody),
                            signal: abortController.signal
                        })];
                case 3:
                    response = _b.sent();
                    if (!!response.ok) return [3 /*break*/, 5];
                    return [4 /*yield*/, response.json()];
                case 4:
                    errorData = _b.sent();
                    throw new Error(errorData.error || "HTTP Error ".concat(response.status));
                case 5: return [4 /*yield*/, response.json()];
                case 6:
                    result = _b.sent();
                    responseText = '';
                    if (result === null || result === void 0 ? void 0 : result.response) {
                        responseText = result.response.replace('END_INSERTION', '');
                    }
                    assistView.addPromptResponse({
                        blocks: [finalThinkingBlocks],
                        response: responseText || 'We could not reach the AI service; please try again later.'
                    });
                    return [3 /*break*/, 8];
                case 7:
                    error_1 = _b.sent();
                    if ((error_1 === null || error_1 === void 0 ? void 0 : error_1.name) === 'AbortError')
                        return [2 /*return*/];
                    if ((_a = error_1 === null || error_1 === void 0 ? void 0 : error_1.message) === null || _a === void 0 ? void 0 : _a.includes('token limit')) {
                        assistView.addPromptResponse({ response: error_1.message });
                    }
                    assistView.addPromptResponse({
                        response: 'We could not reach the AI service; please try again later.'
                    });
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: "control-section" },
            React.createElement("div", { className: "thinking-aiassistview" },
                React.createElement(ej2_react_interactive_chat_1.AIAssistViewComponent, { id: "aiAssistView", bannerTemplate: bannerTemplate, promptSuggestions: promptSuggestions, promptRequest: promptRequest, enableStreaming: true, ref: assistInstance }))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This sample demonstrates the thinking support of the AI AssistView control.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null,
                "In this example, the ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview#bannertemplate" }, "bannerTemplate"),
                " customizes the banner content with a brain icon, and ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview#promptsuggestions" }, "promptSuggestions"),
                " provides AI prompt suggestions. The ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview#promptrequest" }, "promptRequest"),
                " handles prompt requests and demonstrates progressive thinking blocks with multiple stages showing the AI's reasoning process through different steps like understanding, component selection, layout design, and finalization."))));
};
exports.default = Thinking;
