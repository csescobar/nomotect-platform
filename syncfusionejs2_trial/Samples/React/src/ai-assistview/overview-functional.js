"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var ej2_react_interactive_chat_1 = require("@syncfusion/ej2-react-interactive-chat");
var sample_base_1 = require("../common/sample-base");
var data = require("./promptResponseData.json");
var ej2_react_charts_1 = require("@syncfusion/ej2-react-charts");
require("./overview.css");
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
    React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.ColumnSeries, ej2_react_charts_1.SplineSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Legend, ej2_react_charts_1.Tooltip] }),
    React.createElement(ej2_react_charts_1.AxesDirective, null,
        React.createElement(ej2_react_charts_1.AxisDirective, { majorGridLines: { width: 0 }, rowIndex: 0, opposedPosition: true, lineStyle: { width: 0 }, minimum: 24, maximum: 34, interval: 2, name: "yAxis", labelFormat: "{value}\u00B0C", majorTickLines: { width: 0 } })),
    React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
        React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: args.columnData, xName: "x", yName: "y", name: "Germany", type: "Column", marker: { visible: true, height: 7, width: 7 } }),
        React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: args.splineData, xName: "x", yName: "y", width: 2, name: "Japan", type: "Spline", yAxisName: "yAxis", marker: { visible: true, width: 7, height: 7, isFilled: true } })))); };
var Overview = function () {
    var overviewPromptResponseData = data["overviewPromptResponseData"];
    var overviewSuggestions = data["overviewSuggestions"];
    var assistInstance = (0, react_1.useRef)(null);
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
    var promptRequest = function (args) {
        setTimeout(function () {
            var foundPrompt = overviewPromptResponseData.find(function (p) { return p.prompt === args.prompt; });
            var defaultResponse = 'For real-time prompt processing, connect the AI AssistView control to your preferred AI service or provide sample responses in `promptResponseData.json`.';
            var responseHtml = foundPrompt
                ? (foundPrompt.regeneratedResponses
                    ? getRandomResponse(foundPrompt.regeneratedResponses)
                    : foundPrompt.response)
                : defaultResponse;
            assistInstance.current.addPromptResponse(responseHtml);
            assistInstance.current.promptSuggestions = (foundPrompt === null || foundPrompt === void 0 ? void 0 : foundPrompt.suggestions) || overviewSuggestions;
        }, 2000);
    };
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
