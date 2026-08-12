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
var ej2_react_interactive_chat_1 = require("@syncfusion/ej2-react-interactive-chat");
var sample_base_1 = require("../common/sample-base");
var ai_service_1 = require("../common/ai-service");
var data = require("./promptResponseData.json");
var ej2_react_charts_1 = require("@syncfusion/ej2-react-charts");
require("./ai-overview.css");
// Inject AssistThinking module for thinking support
ej2_react_interactive_chat_1.AIAssistView.Inject(ej2_react_interactive_chat_1.AssistThinking);
var ChartTemplate = function (args) { return (React.createElement(ej2_react_charts_1.ChartComponent, { id: "overviewChart", primaryXAxis: {
        valueType: 'Category'
    }, primaryYAxis: {
        minimum: 0,
        maximum: 100,
        interval: 20,
        labelFormat: '{value}°F',
        majorGridLines: { width: 1 }
    }, chartArea: { border: { width: 0 } }, tooltip: { enable: true, enableHighlight: true }, legendSettings: { enableHighlight: true, visible: false }, width: "700px", height: "300px", title: "Weather Data" },
    React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.ColumnSeries, ej2_react_charts_1.SplineSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Legend, ej2_react_charts_1.Tooltip, ej2_react_charts_1.Selection, ej2_react_charts_1.Highlight] }),
    React.createElement(ej2_react_charts_1.AxesDirective, null,
        React.createElement(ej2_react_charts_1.AxisDirective, { majorGridLines: { width: 0 }, rowIndex: 0, opposedPosition: true, lineStyle: { width: 0 }, minimum: 24, maximum: 34, interval: 2, name: "yAxis", labelFormat: "{value}\u00B0C", majorTickLines: { width: 0 } })),
    React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
        React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: args.columnData, xName: "x", yName: "y", name: "Germany", type: "Column", marker: { visible: true, height: 7, width: 7 } }),
        React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: args.splineData, xName: "x", yName: "y", width: 2, name: "Japan", type: "Spline", yAxisName: "yAxis", marker: { visible: true, width: 7, height: 7, isFilled: true } })))); };
var Overview = function () {
    var overviewPromptResponseData = data["overviewPromptResponseData"];
    var overviewSuggestions = data["overviewSuggestions"];
    var assistInstance = (0, react_1.useRef)(null);
    var abortControllerRef = (0, react_1.useRef)();
    var registerToolUIs = function () {
        if (!assistInstance.current)
            return;
        assistInstance.current.registerToolUI({
            toolName: 'weather-chart',
            template: ChartTemplate,
        });
    };
    var onCreated = function () {
        (0, sample_base_1.updateSampleSection)();
        registerToolUIs();
        // Set default prompts after tools are registered
        var defaultPrompts = [
            {
                prompt: 'How does the weather vary throughout the week in Germany and Japan?',
                blocks: [
                    {
                        blockType: 'thinking',
                        title: 'Thinking',
                        collapsible: true,
                        collapsed: true,
                        isActive: false,
                        stages: [
                            {
                                iconCss: 'e-icons e-search',
                                status: 'completed',
                                content: 'Searching for weather data from external sources and retrieving weekly forecasts for both Germany and Japan.',
                                editableContext: [
                                    { name: 'Query Type', value: 'Weather Analysis', type: 'Variable' }
                                ]
                            }
                        ]
                    },
                    {
                        blockType: 'text',
                        content: '**Weekly Weather Overview**<p>The chart below shows temperature variations across the week. The column series represents daily temperature highs, while the spline series reflects a smoother trend of average temperatures.</p>'
                    },
                    {
                        blockType: 'tool',
                        toolName: 'weather-chart',
                        props: {
                            columnData: [
                                { x: 'Sun', y: 35 }, { x: 'Mon', y: 40 },
                                { x: 'Tue', y: 80 }, { x: 'Wed', y: 70 }, { x: 'Thu', y: 65 }, { x: 'Fri', y: 55 },
                                { x: 'Sat', y: 50 }
                            ],
                            splineData: [
                                { x: 'Sun', y: 30 }, { x: 'Mon', y: 28 },
                                { x: 'Tue', y: 29 }, { x: 'Wed', y: 30 }, { x: 'Thu', y: 33 }, { x: 'Fri', y: 32 },
                                { x: 'Sat', y: 34 }
                            ]
                        }
                    },
                    {
                        blockType: 'text',
                        content: '**Key Insights:** The bar values indicate a sharp temperature spike on Tuesday and Wednesday, suggesting very hot conditions mid-week. Meanwhile, the spline line shows a relatively stable average temperature trend throughout the week. This difference highlights short-term heat surges compared to overall steady climatic conditions.'
                    }
                ]
            }
        ];
        assistInstance.current.prompts = defaultPrompts;
    };
    var toolbarItemClicked = function (args) {
        if (args.item.iconCss === 'e-icons e-refresh') {
            assistInstance.current.prompts = [];
        }
    };
    var assistViewToolbarSettings = {
        items: [{ iconCss: 'e-icons e-refresh', align: 'Right', tooltip: 'Start new chat' }],
        itemClicked: toolbarItemClicked
    };
    var footerToolbarSettings = {
        toolbarPosition: 'Bottom',
        items: [
            { iconCss: 'e-icons e-assist-send', align: 'Right' },
            { iconCss: 'e-icons e-assist-attachment-icon', align: 'Left', tooltip: 'Attach File' },
            { iconCss: 'e-icons e-assist-speech-to-text', align: 'Left' }
        ]
    };
    var responseToolbarSettings = {
        items: [
            { type: 'Button', iconCss: 'e-icons e-assist-copy', tooltip: 'Copy' },
            { type: 'Button', iconCss: 'e-icons e-assist-like', tooltip: 'Like' },
            { type: 'Button', iconCss: 'e-icons e-assist-dislike', tooltip: 'Need Improvement' },
            { type: 'Button', iconCss: 'e-icons e-assist-audio', tooltip: 'Read Aloud' },
            { type: 'Button', iconCss: 'e-icons e-assist-regenerate', tooltip: 'Regenerate' }
        ]
    };
    var attachmentSettings = {
        saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove'
    };
    var bannerTemplate = "<div class=\"banner-content\">\n    <div class=\"e-icons e-assistview-icon\"></div>\n    <i>Ask anything. Create faster. Work smarter with AI.</i>\n  </div>";
    var speechToTextSettings = {
        enable: true
    };
    var getRandomResponse = function (regeneratedResponses) {
        if (Array.isArray(regeneratedResponses)) {
            return regeneratedResponses[Math.floor(Math.random() * regeneratedResponses.length)];
        }
        return regeneratedResponses;
    };
    var promptRequest = function (args) { return __awaiter(void 0, void 0, void 0, function () {
        var foundPrompt, responseHtml, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    abortControllerRef.current = new AbortController();
                    foundPrompt = (overviewPromptResponseData || []).find(function (p) { return p.prompt === args.prompt; });
                    if (!foundPrompt) return [3 /*break*/, 1];
                    _a = (foundPrompt.regeneratedResponses
                        ? getRandomResponse(foundPrompt.regeneratedResponses)
                        : foundPrompt.response);
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, (0, ai_service_1.getAIResponse)(args, abortControllerRef.current)];
                case 2:
                    _a = _b.sent();
                    _b.label = 3;
                case 3:
                    responseHtml = _a;
                    assistInstance.current.addPromptResponse(responseHtml);
                    assistInstance.current.promptSuggestions = (foundPrompt === null || foundPrompt === void 0 ? void 0 : foundPrompt.suggestions) || overviewSuggestions || [];
                    return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: "control-section" },
            React.createElement("div", { className: "overview-aiassistview" },
                React.createElement(ej2_react_interactive_chat_1.AIAssistViewComponent, { id: "aiAssistView", enableStreaming: true, promptSuggestions: overviewSuggestions, toolbarSettings: assistViewToolbarSettings, footerToolbarSettings: footerToolbarSettings, responseToolbarSettings: responseToolbarSettings, enableAttachments: true, attachmentSettings: attachmentSettings, speechToTextSettings: speechToTextSettings, bannerTemplate: bannerTemplate, promptRequest: promptRequest, created: onCreated, ref: assistInstance }))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This sample demonstrates an Overview UI that integrates streaming responses, generative UI responses, thinking workflow visualization, file attachments, speech-to-text input, text-to-speech playback and regenerate controls.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null, "The Overview sample composes multiple features from other samples into a single, reusable layout:"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement("code", null, "Generative UI"),
                    " for rendering structured AI responses including text, and tools in a conversational layout."),
                React.createElement("li", null,
                    React.createElement("code", null, "Thinking blocks"),
                    " to visualize AI workflow stages such as searching, processing, analyzing, and summarizing in real time."),
                React.createElement("li", null,
                    React.createElement("code", null, "Streaming"),
                    " responses rendered in real time using ",
                    React.createElement("code", null, "addPromptResponse"),
                    "."),
                React.createElement("li", null,
                    React.createElement("code", null, "File attachments"),
                    " via the built-in ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview#attachmentsettings" }, "attachmentSettings"),
                    "."),
                React.createElement("li", null,
                    React.createElement("code", null, "Speech-to-text"),
                    " voice input using the browser ",
                    React.createElement("code", null, "SpeechRecognition"),
                    " via ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview#speechtotextsettings" }, "speechToTextSettings"),
                    "."),
                React.createElement("li", null,
                    React.createElement("code", null, "Text-to-speech"),
                    " playback using the ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview#responsetoolbarsettings" }, "responseToolbarSettings"),
                    " audio control."),
                React.createElement("li", null,
                    React.createElement("code", null, "Regenerate"),
                    " control to retry AI responses for a selected prompt.")))));
};
exports.default = Overview;
