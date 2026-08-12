"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var ej2_react_interactive_chat_1 = require("@syncfusion/ej2-react-interactive-chat");
var sample_base_1 = require("../common/sample-base");
var base_1 = require("@syncfusion/ej2/base");
var ej2_react_charts_1 = require("@syncfusion/ej2-react-charts");
var ej2_react_grids_1 = require("@syncfusion/ej2-react-grids");
var data = require("./promptResponseData.json");
require("./generative-ui.css");
var GenerativeUI = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var generativeSuggestions = data["generativeSuggestions"];
    var chartBlockData = data["chartBlockData"];
    var cardBlockData = data["cardBlockData"];
    var gridBlockData = data["gridBlockData"];
    var promptsData = data["promptsData"];
    var assistInstance = (0, react_1.useRef)(null);
    var toolbarItemClicked = function (args) {
        if (args.item.iconCss === 'e-icons e-refresh') {
            assistInstance.current.prompts = [];
            assistInstance.current.promptSuggestions = generativeSuggestions;
        }
    };
    var assistViewToolbarSettings = {
        items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
        itemClicked: toolbarItemClicked
    };
    var bannerTemplate = "<div class=\"banner-content\">\n    <div class=\"e-icons e-assistview-icon\"></div>\n    <h3>AI Assistance Generative UI</h3>\n    <i>Render interactive tools such as weather cards, charts, data grids etc directly inside AI responses.</i>\n  </div>";
    var ChartTemplate = function (args) { return (React.createElement(ej2_react_charts_1.ChartComponent, { id: "generativeChart", primaryXAxis: {
            title: 'Years',
            interval: base_1.Browser.isDevice ? 2 : 1,
            labelIntersectAction: 'Rotate45',
            valueType: 'Category',
            majorGridLines: { width: 0 },
            minorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 },
            lineStyle: { width: 0 },
        }, primaryYAxis: {
            title: 'Growth (in Billion)',
            minimum: -3,
            maximum: 3,
            interval: 1,
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
            majorGridLines: { width: 1 },
            minorGridLines: { width: 1 },
            minorTickLines: { width: 0 },
            labelFormat: '{value}B',
        }, chartArea: { border: { width: 0 } }, tooltip: { enable: true, enableHighlight: true }, legendSettings: { enableHighlight: true }, width: "100%", height: "300px", title: "Annual Growth GDP in France" },
        React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.LineSeries, ej2_react_charts_1.DateTime, ej2_react_charts_1.Legend, ej2_react_charts_1.Tooltip, ej2_react_charts_1.StackingColumnSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Selection, ej2_react_charts_1.Highlight] }),
        React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
            React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: args.privateConsumptionData, xName: "x", yName: "y", name: "Private Consumption", type: "StackingColumn" }),
            React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: args.governmentConsumptionData, xName: "x", yName: "y", name: "Government Consumption", type: "StackingColumn" }),
            React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: args.investmentData, xName: "x", yName: "y", name: "Investment", type: "StackingColumn" }),
            React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: args.foreignTradeData, xName: "x", yName: "y", name: "Net Foreign Trade", type: "StackingColumn" }),
            React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: args.gdpData, xName: "x", yName: "y", name: "GDP", width: 2, marker: { visible: true, width: 7, height: 7 }, type: "Line" })))); };
    var GridTemplate = function (args) { return (React.createElement(ej2_react_grids_1.GridComponent, { dataSource: args.gridData, allowPaging: false, pageSettings: { pageSize: 8 }, width: "100%" },
        React.createElement(ej2_react_grids_1.ColumnsDirective, null,
            React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Region", headerText: "Region", width: 150, textAlign: "Center" }),
            React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Sales", headerText: "Sales %", width: 120, textAlign: "Center" }),
            React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Growth", headerText: "Growth %", width: 120, textAlign: "Center" }),
            React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Status", headerText: "Status", width: 130, textAlign: "Center" })),
        React.createElement(ej2_react_grids_1.Inject, { services: [ej2_react_grids_1.Page] }))); };
    var registerToolUIs = function () {
        assistInstance.current.registerToolUI({
            toolName: 'weather-card',
            template: "<div tabindex=\"0\" class=\"e-card\" id=\"weather_card\" role=\"button\">\n                        <div class=\"e-card-header\">\n                            <div class=\"e-card-header-caption\">\n                                <div class=\"e-card-header-title\">Today</div>\n                                <div class=\"e-card-sub-title\"> New York - Scattered Showers.</div>\n                            </div>\n                        </div>\n                        <div class=\"e-card-header weather_report\">\n                            <div class=\"e-card-header-image\"></div>\n                            <div class=\"e-card-header-caption\">\n                                <div class=\"e-card-header-title\">1\u00BA / -4\u00BA</div>\n                                <div class=\"e-card-sub-title\">Chance for snow: 100%</div>\n                            </div>\n                        </div>\n                    </div>"
        });
        assistInstance.current.registerToolUI({
            toolName: 'chart-tool',
            template: ChartTemplate,
        });
        assistInstance.current.registerToolUI({
            toolName: 'sales-grid',
            template: GridTemplate,
        });
    };
    var onCreated = function () {
        registerToolUIs();
        assistInstance.current.prompts = promptsData;
    };
    var promptRequest = function (args) {
        setTimeout(function () {
            if (args.prompt === 'What is the weather in New York?') {
                assistInstance.current.addPromptResponse({ blocks: cardBlockData });
            }
            else if (args.prompt === "What are France's GDP growth trends?") {
                assistInstance.current.addPromptResponse({ blocks: chartBlockData });
            }
            else if (args.prompt === 'How do smartphone sales perform across regions?') {
                assistInstance.current.addPromptResponse({ blocks: gridBlockData });
            }
            else {
                var response = "For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.";
                assistInstance.current.addPromptResponse(response);
            }
        }, 1000);
    };
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: "control-section" },
            React.createElement("div", { className: "generative-aiassistview" },
                React.createElement(ej2_react_interactive_chat_1.AIAssistViewComponent, { id: "aiAssistView", bannerTemplate: bannerTemplate, promptSuggestionsHeader: "Suggested Prompts", promptSuggestions: generativeSuggestions, enableStreaming: true, showClearButton: true, toolbarSettings: assistViewToolbarSettings, promptRequest: promptRequest, created: onCreated, ref: assistInstance }))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This sample demonstrates rendering interactive UI tools like weather cards, charts, and grids within AI responses for enhanced data visualization.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null, "This sample demonstrates registering custom UI tools like weather cards, charts, and grids in responses."),
            React.createElement("ul", null,
                React.createElement("li", null,
                    "The ",
                    React.createElement("code", null, "addPromptResponse"),
                    " method adds AI responses to the AIAssistView by accepting a blocks array that defines content structure. Tools are registered using ",
                    React.createElement("code", null, "registerToolUI()"),
                    ", which defines a template and handler function for rendering."),
                React.createElement("li", null,
                    "Tool registration - Three registered tools deliver rich content: ",
                    React.createElement("code", null, "weather-card"),
                    " for forecast displays, ",
                    React.createElement("code", null, "chart-tool"),
                    " for GDP growth visualization, and ",
                    React.createElement("code", null, "sales-grid"),
                    " for regional performance data."),
                React.createElement("li", null,
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview#bannertemplate" }, "bannerTemplate"),
                    " - Customizes the initial banner content with icon and heading."),
                React.createElement("li", null,
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview#promptsuggestions" }, "promptSuggestions"),
                    " - Provides predefined prompts for weather forecasts, sales analysis, and economic trend data."),
                React.createElement("li", null,
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview#promptrequest" }, "promptRequest"),
                    " - Handles prompt execution and dynamically renders custom tools."),
                React.createElement("li", null,
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview#enablestreaming" }, "enableStreaming"),
                    " - Enables real-time response streaming with simulated delay.")))));
};
exports.default = GenerativeUI;
