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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarWithGradient = exports.chartData = void 0;
/**
 * Sample for Bar series
 */
var React = require("react");
var ej2_react_charts_1 = require("@syncfusion/ej2-react-charts");
var ej2_base_1 = require("@syncfusion/ej2-base");
var sample_base_1 = require("../common/sample-base");
var theme_color_1 = require("./theme-color");
exports.chartData = [
    { Company: 'Tata Motors', Revenue: 52.9 },
    { Company: 'State Bank of India', Revenue: 71.8 },
    { Company: 'Oil and Natural Gas Corporation', Revenue: 77.5 },
    { Company: 'Indian Oil Corporation', Revenue: 93.8 },
    { Company: 'Life Insurance Corporation of India', Revenue: 98.0 },
    { Company: 'Reliance Industries', Revenue: 108.8 }
];
var SAMPLE_CSS = "\n    .control-fluid {\n        padding: 0px !important;\n    }";
/**
 * Bar sample
 */
var BarWithGradient = /** @class */ (function (_super) {
    __extends(BarWithGradient, _super);
    function BarWithGradient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BarWithGradient.prototype.render = function () {
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("style", null, SAMPLE_CSS),
            React.createElement("div", { className: 'control-section' },
                React.createElement("div", null,
                    React.createElement(ej2_react_charts_1.ChartComponent, { id: 'charts', style: { textAlign: "center" }, legendSettings: { visible: false }, primaryXAxis: { valueType: 'Category', majorGridLines: { width: 1 }, majorTickLines: { width: 0 }, lineStyle: { width: 0 }, edgeLabelPlacement: 'Shift', enableWrap: true, maximumLabelWidth: 100 }, primaryYAxis: { visible: false }, chartArea: { border: { width: 0 } }, load: this.load.bind(this), loaded: this.onChartLoad.bind(this), width: ej2_base_1.Browser.isDevice ? '100%' : '90%', title: 'Leading Revenue Drivers in India: 2024 Rankings', subTitle: 'Source: Wikipedia (Forbes 2024) | Revenue in USD Billions', tooltip: { enable: true, format: '${point.x}: <b>${point.y} B</b>' } },
                        React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.BarSeries, ej2_react_charts_1.DataLabel, ej2_react_charts_1.Category, ej2_react_charts_1.Legend, ej2_react_charts_1.Tooltip, ej2_react_charts_1.Highlight] }),
                        React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                            React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: exports.chartData, xName: 'Company', yName: 'Revenue', type: 'Bar', columnWidth: 0.75, columnSpacing: 0.25, cornerRadius: { topLeft: 10, bottomRight: 10, topRight: 10, bottomLeft: 10 }, linearGradient: { x1: 0, y1: 0, x2: 1, y2: 0,
                                    gradientColorStop: [
                                        { color: '#1a9fd4', offset: 0, opacity: 1 },
                                        { color: '#9b4dca', offset: 50, opacity: 1 },
                                        { color: '#f95d8f', offset: 100, opacity: 1 }
                                    ]
                                }, marker: { dataLabel: { visible: true, position: 'Outer', format: '{value} B' } } }))))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This example visualizes the top revenue-generating companies in India for 2024. A horizontal bar chart with a left-to-right color gradient is used to highlight each company's revenue in USD Billions. Company names appear on the left axis, and revenue values are displayed at the end of each bar. Companies are ordered by revenue to emphasize ranking and relative contribution. Compare bar lengths to quickly identify the top contributors among India's leading corporations.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "In this example, you can see how to render and configure a horizontal bar chart with a linear gradient fill using the",
                    React.createElement("code", null, "linearGradient"),
                    " property of the series. The gradient is applied horizontally from left to right with multiple color stops to create smooth color transitions across all bars, visually emphasizing the revenue comparison."),
                React.createElement("p", null,
                    React.createElement("code", null, "Tooltip"),
                    " is enabled in this example. To see the tooltip in action, hover over a bar or tap on a bar on touch-enabled devices."),
                React.createElement("p", null,
                    React.createElement("b", null, "Injecting Module")),
                React.createElement("p", null,
                    "Chart component features are segregated into individual feature-wise modules. To use bar series, inject the",
                    React.createElement("code", null, "BarSeries"),
                    " module into ",
                    React.createElement("code", null, "services"),
                    "."),
                React.createElement("p", null,
                    "More information on the bar series can be found in this ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/chart/chart-types/bar", "aria-label": "Navigate to the documentation for Bar Chart in ASP.NET Core Chart component" }, "documentation section"),
                    "."))));
    };
    BarWithGradient.prototype.load = function (args) {
        (0, theme_color_1.loadChartTheme)(args);
    };
    ;
    BarWithGradient.prototype.onChartLoad = function (args) {
        var chart = document.getElementById('charts');
        chart.setAttribute('title', '');
    };
    ;
    return BarWithGradient;
}(sample_base_1.SampleBase));
exports.BarWithGradient = BarWithGradient;
