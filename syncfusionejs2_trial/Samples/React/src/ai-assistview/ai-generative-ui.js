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
exports.GenerativeUI = void 0;
var React = require("react");
var ej2_react_interactive_chat_1 = require("@syncfusion/ej2-react-interactive-chat");
var sample_base_1 = require("../common/sample-base");
var ej2_react_charts_1 = require("@syncfusion/ej2-react-charts");
var ej2_react_grids_1 = require("@syncfusion/ej2-react-grids");
var data = require("./promptResponseData.json");
var ai_service_1 = require("../common/ai-service");
require("./ai-generative-ui.css");
var GenerativeUI = /** @class */ (function (_super) {
    __extends(GenerativeUI, _super);
    function GenerativeUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.generativeSuggestions = data["generativeSuggestions"];
        _this.toolSystemPrompt = data["toolSystemPrompt"];
        _this.promptsData = data["promptsData"];
        _this.currentChartConfig = {};
        _this.currentGridConfig = {};
        _this.toolbarItemClicked = function (args) {
            if (args.item.iconCss === 'e-icons e-refresh') {
                _this.assistInstance.prompts = [];
                _this.assistInstance.promptSuggestions = _this.generativeSuggestions;
            }
        };
        _this.assistViewToolbarSettings = {
            items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
            itemClicked: _this.toolbarItemClicked
        };
        _this.bannerTemplate = "<div class=\"banner-content\">\n    <div class=\"e-icons e-assistview-icon\"></div>\n    <h3>AI Assistance Generative UI</h3>\n    <i>Render interactive tools such as weather cards, charts, data grids etc directly inside AI responses.</i>\n  </div>";
        _this.processChartConfig = function (args) {
            var chartConfig = {
                dataSource: args.dataSource || args.data || [],
                xField: args.xField || args.xName,
                yField: args.yField || args.yName,
                chartType: args.chartType || args.type || 'Line',
                title: args.title || '',
                xAxisTitle: args.xAxisTitle,
                yAxisTitle: args.yAxisTitle,
                enableTooltip: args.enableTooltip,
                enableLegend: args.enableLegend
            };
            if (chartConfig.chartType === 'Pie' || chartConfig.chartType === 'Doughnut') {
                chartConfig.chartType = 'Line';
            }
            _this.currentChartConfig = chartConfig;
        };
        _this.processGridConfig = function (args) {
            var data = args.data || [];
            var gridConfig = {
                data: data,
                columns: args.columns ||
                    (data.length
                        ? Object.keys(data[0]).map(function (field) { return ({
                            field: field,
                            headerText: field,
                            width: 150
                        }); })
                        : [])
            };
            _this.currentGridConfig = gridConfig;
        };
        // Matches the .ts pattern: register tools in `created`, then set prompts imperatively
        // so tools are always registered before prompts are rendered
        _this.onCreated = function () {
            _this.registerToolUIs();
            _this.assistInstance.prompts = _this.promptsData;
        };
        _this.promptRequest = function (args) { return __awaiter(_this, void 0, void 0, function () {
            var aiArgs, reply, jsonText, aiData, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        aiArgs = {
                            prompt: args.prompt,
                            systemPrompt: this.toolSystemPrompt
                        };
                        return [4 /*yield*/, (0, ai_service_1.getAIResponse)(aiArgs)];
                    case 1:
                        reply = _a.sent();
                        jsonText = reply.response || '{}';
                        aiData = JSON.parse(jsonText);
                        this.assistInstance.addPromptResponse({
                            blocks: aiData.blocks || [
                                {
                                    blockType: 'text',
                                    content: 'We could not reach the AI service; please try again later.'
                                }
                            ]
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.assistInstance.addPromptResponse({
                            blocks: [
                                {
                                    blockType: 'text',
                                    content: 'We could not reach the AI service; please try again later.'
                                }
                            ]
                        });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    GenerativeUI.prototype.registerToolUIs = function () {
        var _this = this;
        var WeatherTemplate = function (args) {
            var defaults = {
                location: 'Unknown Location',
                temperature: '--',
                condition: '--',
                humidity: '--',
                windSpeed: '--'
            };
            var data = Object.assign({}, defaults, args);
            return (React.createElement("div", { tabIndex: 0, className: "e-card", id: "weather_card", role: "button" },
                React.createElement("div", { className: "e-card-header" },
                    React.createElement("div", { className: "e-card-header-caption" },
                        React.createElement("div", { className: "e-card-header-title" }, data.location),
                        React.createElement("div", { className: "e-card-sub-title" }, data.condition))),
                React.createElement("div", { className: "e-card-header weather_report" },
                    React.createElement("div", { className: "e-card-header-image" }),
                    React.createElement("div", { className: "e-card-header-caption" },
                        React.createElement("div", { className: "e-card-header-title" }, data.temperature),
                        React.createElement("div", { className: "e-card-sub-title" },
                            "Humidity: ",
                            data.humidity),
                        React.createElement("div", { className: "e-card-sub-title" },
                            "Wind: ",
                            data.windSpeed)))));
        };
        this.assistInstance.registerToolUI({
            toolName: 'weather-card',
            template: WeatherTemplate,
        });
        var ChartTemplate = function (args) { return (React.createElement(ej2_react_charts_1.ChartComponent, { id: "generativeChart", primaryXAxis: {
                valueType: 'Category',
                title: _this.currentChartConfig.xAxisTitle ||
                    _this.currentChartConfig.xField,
                labelIntersectAction: 'Rotate45',
                majorGridLines: { width: 0 },
                minorGridLines: { width: 0 },
                majorTickLines: { width: 0 },
                minorTickLines: { width: 0 },
                lineStyle: { width: 0 }
            }, primaryYAxis: {
                title: _this.currentChartConfig.yAxisTitle ||
                    _this.currentChartConfig.yField,
                majorGridLines: { width: 1 },
                minorGridLines: { width: 1 },
                majorTickLines: { width: 0 },
                minorTickLines: { width: 0 },
                lineStyle: { width: 0 }
            }, tooltip: {
                enable: _this.currentChartConfig.enableTooltip !== false
            }, legendSettings: {
                visible: _this.currentChartConfig.enableLegend !== false
            }, chartArea: { border: { width: 0 } }, title: _this.currentChartConfig.title },
            React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.LineSeries, ej2_react_charts_1.DateTime, ej2_react_charts_1.Legend, ej2_react_charts_1.Tooltip, ej2_react_charts_1.StackingColumnSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Selection, ej2_react_charts_1.Highlight] }),
            React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: _this.currentChartConfig.dataSource, xName: _this.currentChartConfig.xField, yName: _this.currentChartConfig.yField, type: _this.currentChartConfig.chartType, marker: { visible: true } })))); };
        this.assistInstance.registerToolUI({
            toolName: 'chart-tool',
            template: ChartTemplate,
            handler: function (container, args) {
                _this.processChartConfig(args);
            }
        });
        var GridTemplate = function (args) {
            var _a;
            return (React.createElement(ej2_react_grids_1.GridComponent, { dataSource: _this.currentGridConfig.data, allowPaging: false, pageSettings: { pageSize: 8 }, width: "fit-content" },
                React.createElement(ej2_react_grids_1.ColumnsDirective, null, (_a = _this.currentGridConfig.columns) === null || _a === void 0 ? void 0 : _a.map(function (column, index) { return (React.createElement(ej2_react_grids_1.ColumnDirective, { key: index, field: column.field, headerText: column.headerText, width: column.width, textAlign: column.textAlign })); })),
                React.createElement(ej2_react_grids_1.Inject, { services: [ej2_react_grids_1.Page] })));
        };
        this.assistInstance.registerToolUI({
            toolName: 'sales-grid',
            template: GridTemplate,
            handler: function (container, args) {
                _this.processGridConfig(args);
            }
        });
    };
    GenerativeUI.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: "control-section" },
                React.createElement("div", { className: "generative-aiassistview" },
                    React.createElement(ej2_react_interactive_chat_1.AIAssistViewComponent, { id: "aiAssistView", bannerTemplate: this.bannerTemplate, promptSuggestionsHeader: "Suggested Prompts", promptSuggestions: this.generativeSuggestions, enableStreaming: true, showClearButton: true, toolbarSettings: this.assistViewToolbarSettings, promptRequest: this.promptRequest, created: this.onCreated, ref: function (aiassistView) { return (_this.assistInstance = aiassistView); } }))),
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
    return GenerativeUI;
}(sample_base_1.SampleBase));
exports.GenerativeUI = GenerativeUI;
