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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var sample_base_1 = require("../common/sample-base");
var ej2_react_richtexteditor_1 = require("@syncfusion/ej2-react-richtexteditor");
var react_1 = require("react");
var ai_service_1 = require("../common/ai-service");
var ai_toast_1 = require("../common/ai-toast");
function AIAssistantEditor() {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var editorRef = (0, react_1.useRef)(null);
    var toolbarSettings = {
        items: ['AICommands', 'AIQuery', '|', 'Bold', 'Italic', 'Underline', 'StrikeThrough', '|', 'Alignments', 'Formats', 'OrderedList',
            'UnorderedList', 'CheckList', 'CodeBlock', 'Blockquote', 'CreateLink', 'Image', 'CreateTable', '|', 'SourceCode', '|', 'Undo', 'Redo']
    };
    var quickToolbarSettings = {
        text: ['AICommands', 'AIQuery', '|', 'Bold', 'Italic', 'Underline', 'StrikeThrough', 'Fontcolor', 'BackgroundColor', '|', 'Unorderedlist', 'Orderedlist']
    };
    var aiAssistantSettings = {
        popupWidth: '550px'
    };
    var userID;
    var abortController;
    function onAIAssistantPromptRequest(args) {
        var e_1, _a;
        return __awaiter(this, void 0, void 0, function () {
            var response, errorData, stream, fullText, _b, _c, chunk, e_1_1, error_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, (0, ai_service_1.getUserID)()];
                    case 1:
                        userID = _d.sent();
                        _d.label = 2;
                    case 2:
                        _d.trys.push([2, 18, , 19]);
                        abortController = new AbortController();
                        return [4 /*yield*/, fetch(ai_service_1.AI_SERVICE_URL + '/api/stream', {
                                method: 'POST',
                                headers: {
                                    "Content-Type": 'application/json',
                                    "Authorization": this.userID
                                },
                                body: JSON.stringify({ message: args.prompt + (args.text) }),
                                signal: abortController.signal
                            })];
                    case 3:
                        response = _d.sent();
                        if (!!response.ok) return [3 /*break*/, 5];
                        return [4 /*yield*/, response.json()];
                    case 4:
                        errorData = _d.sent();
                        throw new Error(errorData.error || "HTTP Error ".concat(response.status));
                    case 5:
                        stream = response.body.pipeThrough(new TextDecoderStream());
                        fullText = '';
                        _d.label = 6;
                    case 6:
                        _d.trys.push([6, 11, 12, 17]);
                        _b = __asyncValues(stream);
                        _d.label = 7;
                    case 7: return [4 /*yield*/, _b.next()];
                    case 8:
                        if (!(_c = _d.sent(), !_c.done)) return [3 /*break*/, 10];
                        chunk = _c.value;
                        fullText += chunk;
                        editorRef.current.addAIPromptResponse(fullText, false);
                        _d.label = 9;
                    case 9: return [3 /*break*/, 7];
                    case 10: return [3 /*break*/, 17];
                    case 11:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 17];
                    case 12:
                        _d.trys.push([12, , 15, 16]);
                        if (!(_c && !_c.done && (_a = _b.return))) return [3 /*break*/, 14];
                        return [4 /*yield*/, _a.call(_b)];
                    case 13:
                        _d.sent();
                        _d.label = 14;
                    case 14: return [3 /*break*/, 16];
                    case 15:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 16: return [7 /*endfinally*/];
                    case 17:
                        editorRef.current.addAIPromptResponse(fullText, true); // Final update
                        return [3 /*break*/, 19];
                    case 18:
                        error_1 = _d.sent();
                        if (error_1.name === 'AbortError') {
                            console.log('AI Request aborted by user.');
                            return [2 /*return*/];
                        }
                        else if (error_1.message.includes('token limit')) {
                            editorRef.current.addAIPromptResponse(error_1.message, false);
                            editorRef.current.addAIPromptResponse(error_1.message, true);
                            document.querySelector('.banner-message').innerHTML = error_1.message;
                            document.querySelector('.sb-header1').classList.remove('sb-hide');
                        }
                        else {
                            console.error('There was a problem with your fetch operation:', error_1);
                        }
                        return [3 /*break*/, 19];
                    case 19: return [2 /*return*/];
                }
            });
        });
    }
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: "control-section" },
            React.createElement(ej2_react_richtexteditor_1.RichTextEditorComponent, { id: 'editor', ref: editorRef, toolbarSettings: toolbarSettings, quickToolbarSettings: quickToolbarSettings, aiAssistantSettings: aiAssistantSettings, aiAssistantPromptRequest: onAIAssistantPromptRequest },
                React.createElement("p", null,
                    React.createElement("strong", null, "Editing and Improving")),
                React.createElement("p", null, "In today's competitive landscape, effective marketing focuses on building lasting customer relationships rather than just selling products. Brands are expected to provide personalized experiences through data analytics and consumer insights. As expectations evolve, marketers must stay agile and proactive in their strategies."),
                React.createElement("p", null,
                    React.createElement("strong", null, "Tone and style")),
                React.createElement("p", null, "Agile methodologies are essential in modern project management, particularly in software development. They enable teams to adapt quickly and deliver greater customer value through iterative processes and collaboration. Successful Agile implementation requires fostering a culture of adaptability, trust, and shared ownership."),
                React.createElement("p", null,
                    React.createElement("strong", null, "Grammar")),
                React.createElement("p", null, "Strong leadership is more than directing a team\u2014it's about inspiring people toward a common vision. Effective leaders cultivate transparency, empathy, and accountability within their organizations. They empower others by encouraging autonomy and providing opportunities for growth. In times of uncertainty or rapid change, it's the leaders who stay grounded and lead with clarity who build the most resilient and high-performing teams."),
                React.createElement("p", null,
                    React.createElement("strong", null, "Summarization, simplification, or elaboration")),
                React.createElement("p", null, "Strong leadership inspires a team toward a shared vision while promoting transparency, empathy, and accountability. Effective leaders empower others through autonomy and growth. In times of uncertainty or change, clear leaders build resilient, high-performing teams."),
                React.createElement(ej2_react_richtexteditor_1.Inject, { services: [ej2_react_richtexteditor_1.AIAssistant, ej2_react_richtexteditor_1.Toolbar, ej2_react_richtexteditor_1.HtmlEditor, ej2_react_richtexteditor_1.QuickToolbar, ej2_react_richtexteditor_1.Image, ej2_react_richtexteditor_1.Table, ej2_react_richtexteditor_1.Link, ej2_react_richtexteditor_1.PasteCleanup, ej2_react_richtexteditor_1.CodeBlock] }))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "The AI Assistant feature provides a user interface such as an AssistView inside a popup, nested dropdown with predefined prompts, and a toolbar button for interacting with an AI model.")),
        React.createElement("div", { id: 'description' },
            React.createElement("p", null,
                "The ",
                React.createElement("b", null, "AI Assistant"),
                " feature provides a predefined user interface for integrating AI capabilities into the Rich Text Editor, enabling users to create, edit, and enhance content more efficiently."),
            React.createElement("ul", null,
                React.createElement("li", null,
                    "The AI Assistant can be accessed via the keyboard shortcut (",
                    React.createElement("code", null, "Alt + Enter or \u2325 + Enter"),
                    ") or toolbar."),
                React.createElement("li", null,
                    "The ",
                    React.createElement("b", null, "AI Commands"),
                    " menu provides a predefined list of prompts useful for performing common content-related actions such as improving, shortening, elaborating, simplifying, summarizing, and checking grammar."),
                React.createElement("li", null,
                    "The ",
                    React.createElement("b", null, "AI Query "),
                    "button helps to open the AI Assistant with the flexibility to provide a user defined prompt when processing the content.")),
            React.createElement("p", null, "In this sample the AI Assistant feature is enabled by "),
            React.createElement("ul", null,
                React.createElement("li", null,
                    "Injecting the ",
                    React.createElement("code", null, "AIAssistant"),
                    " Service in to the Component ",
                    React.createElement("code", null, "providers"),
                    " section."),
                React.createElement("li", null,
                    "Adding the ",
                    React.createElement("code", null, "AICommands"),
                    ", ",
                    React.createElement("code", null, "AIQuery"),
                    " into the ",
                    React.createElement("code", null, "toolbarSettings"),
                    " items property.")),
            React.createElement("p", null,
                React.createElement("b", null, "Processing of the Prompt:")),
            React.createElement("ul", null,
                React.createElement("li", null,
                    "When a prompt is executed the ",
                    React.createElement("code", null, "aiAssistantPromptRequest"),
                    " event is triggered, followed by a",
                    React.createElement("code", null, "fetch"),
                    " request to the backend service to process the query."),
                React.createElement("li", null,
                    "The response from the LLM is streamed back into the editor\u2019s Assistant view using the",
                    React.createElement("code", null, "addAIPromptResponse"),
                    " public method."),
                React.createElement("li", null,
                    "When the Stop Responding button is clicked the streaming process is cancelled by setting the",
                    React.createElement("code", null, "stopStreaming"),
                    " boolean to false.")),
            React.createElement("p", null,
                React.createElement("b", null, "Injectible Modules:")),
            React.createElement("p", null,
                "The AI Assistant feature is built as an injectable module to be modular and then tree-shaken and opted in only when needed. It can be used by injecting the module in the",
                " ",
                React.createElement("code", null, "Inject"),
                " component.",
                React.createElement("br", null),
                "For example: The ",
                React.createElement("code", null, "AIAssistant"),
                " service can be injected by using the ",
                React.createElement("code", null, "Inject"),
                "component with the services array:")),
        React.createElement(ai_toast_1.default, null)));
}
exports.default = AIAssistantEditor;
