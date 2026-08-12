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
exports.LineLayout = exports.monthlyTrafficData = exports.annualMilkProduction = void 0;
/**
 * Sample of Line Series with Layout
 */
var React = require("react");
var ej2_react_layouts_1 = require("@syncfusion/ej2-react-layouts");
var ej2_react_charts_1 = require("@syncfusion/ej2-react-charts");
var sample_base_1 = require("../common/sample-base");
exports.annualMilkProduction = [
    { year: "2018", indiaProduction: 520, name: '520 units' },
    { year: "2019", indiaProduction: 540, name: '540 units' },
    { year: "2020", indiaProduction: 530, name: '530 units' },
    { year: "2021", indiaProduction: 550, name: '550 units' },
    { year: "2022", indiaProduction: 540, name: '540 units' },
    { year: "2023", indiaProduction: 560, name: '560 units' }
];
exports.monthlyTrafficData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
];
var SAMPLE_CSS = "\n    .control-fluid {\n        padding: 0px !important;\n    }\n    .title {\n        font-size: 16px;\n        font-weight: bold;\n    }\n    .template {\n        height: 100%;\n        width: 100%;\n    }";
var argument;
var LineLayout = /** @class */ (function (_super) {
    __extends(LineLayout, _super);
    function LineLayout() {
        var _this = _super.call(this, argument) || this;
        _this.cellSpacing = [15, 15];
        return _this;
    }
    LineLayout.prototype.lineTemplate = function () {
        return (React.createElement("div", { className: "template" },
            React.createElement(ej2_react_charts_1.ChartComponent, { id: "charts1", primaryXAxis: { valueType: 'Category', edgeLabelPlacement: 'Shift', majorGridLines: { width: 0 }, majorTickLines: { width: 0 } }, load: this.load.bind(this), primaryYAxis: { rangePadding: 'None', minimum: 500, maximum: 580, interval: 20, lineStyle: { width: 0 }, majorTickLines: { width: 0 }, minorTickLines: { width: 0 }, labelStyle: { color: 'transparent' } }, chartArea: { border: { width: 0 } }, tooltip: { enable: true, shared: true, format: 'Year: <b>${point.x}</b><br/>Production: <b>${point.y} units</b>', header: '' }, title: "Milk Production Over the Years", subTitle: "Yearly data from 2018 to 2023", titleStyle: { textAlignment: 'Near', position: 'Bottom' }, subTitleStyle: { textAlignment: 'Near' } },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.LineSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Tooltip, ej2_react_charts_1.Highlight] }),
                React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: exports.annualMilkProduction, xName: "year", yName: "indiaProduction", width: 2, type: "Line" })))));
    };
    LineLayout.prototype.line1Template = function () {
        return (React.createElement("div", { className: "template" },
            React.createElement(ej2_react_charts_1.ChartComponent, { id: "charts2", primaryXAxis: { valueType: 'Category', edgeLabelPlacement: 'Shift', majorGridLines: { width: 0 }, majorTickLines: { width: 0 } }, load: this.load.bind(this), primaryYAxis: { rangePadding: 'None', minimum: 500, maximum: 580, interval: 20, lineStyle: { width: 0 }, majorTickLines: { width: 0 }, minorTickLines: { width: 0 }, labelStyle: { color: 'transparent' } }, chartArea: { border: { width: 0 } }, tooltip: { enable: true, shared: true, format: 'Year: <b>${point.x}</b><br/>Production: <b>${point.y} units</b>', header: '' }, title: "Milk Production Over the Years", subTitle: "Yearly data from 2018 to 2023", titleStyle: { textAlignment: 'Near', position: 'Bottom' }, subTitleStyle: { textAlignment: 'Near' } },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.LineSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Tooltip, ej2_react_charts_1.Highlight] }),
                React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: exports.annualMilkProduction, xName: "year", yName: "indiaProduction", width: 2, type: "Line", dashArray: '5,5' })))));
    };
    LineLayout.prototype.line2Template = function () {
        return (React.createElement("div", { className: "template" },
            React.createElement(ej2_react_charts_1.ChartComponent, { id: "charts3", primaryXAxis: { valueType: 'Category', edgeLabelPlacement: 'Shift', majorGridLines: { width: 0 }, majorTickLines: { width: 0 } }, load: this.load.bind(this), primaryYAxis: { rangePadding: 'None', minimum: 500, maximum: 580, interval: 20, lineStyle: { width: 0 }, majorTickLines: { width: 0 }, minorTickLines: { width: 0 }, labelStyle: { color: 'transparent' } }, chartArea: { border: { width: 0 } }, tooltip: { enable: true, shared: true, format: 'Year: <b>${point.x}</b><br/>Production: <b>${point.y} units</b>', header: '' }, title: "Milk Production Over the Years", subTitle: "Yearly data from 2018 to 2023", titleStyle: { textAlignment: 'Near', position: 'Bottom' }, subTitleStyle: { textAlignment: 'Near' } },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.LineSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Tooltip, ej2_react_charts_1.Highlight] }),
                React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: exports.annualMilkProduction, xName: "year", yName: "indiaProduction", width: 2, marker: { visible: true, width: 6, height: 6, isFilled: true }, type: "Line" })))));
    };
    LineLayout.prototype.line3Template = function () {
        return (React.createElement("div", { className: "template" },
            React.createElement(ej2_react_charts_1.ChartComponent, { id: "charts4", primaryXAxis: { valueType: 'Category', edgeLabelPlacement: 'Shift', majorGridLines: { width: 0 }, majorTickLines: { width: 0 } }, load: this.load.bind(this), primaryYAxis: { rangePadding: 'None', minimum: 500, maximum: 580, interval: 20, lineStyle: { width: 0 }, majorTickLines: { width: 0 }, minorTickLines: { width: 0 }, labelStyle: { color: 'transparent' } }, chartArea: { border: { width: 0 } }, tooltip: { enable: true, shared: true, format: 'Year: <b>${point.x}</b><br/>Production: <b>${point.y} units</b>', header: '' }, title: "Milk Production Over the Years", subTitle: "Yearly data from 2018 to 2023", titleStyle: { textAlignment: 'Near', position: 'Bottom' }, subTitleStyle: { textAlignment: 'Near' } },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.LineSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Tooltip, ej2_react_charts_1.Highlight] }),
                React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: exports.annualMilkProduction, xName: "year", yName: "indiaProduction", width: 2, marker: { visible: true, width: 8, height: 8, shape: 'Triangle', isFilled: true }, type: "Line" })))));
    };
    LineLayout.prototype.line4Template = function () {
        return (React.createElement("div", { className: "template" },
            React.createElement(ej2_react_charts_1.ChartComponent, { id: "charts5", primaryXAxis: { valueType: 'Category', edgeLabelPlacement: 'Shift', majorGridLines: { width: 0 }, majorTickLines: { width: 0 } }, load: this.load.bind(this), primaryYAxis: { rangePadding: 'None', minimum: 500, maximum: 580, interval: 20, lineStyle: { width: 0 }, majorTickLines: { width: 0 }, minorTickLines: { width: 0 }, labelStyle: { color: 'transparent' } }, chartArea: { border: { width: 0 } }, tooltip: { enable: true, shared: true, format: 'Year: <b>${point.x}</b><br/>Production: <b>${point.y} units</b>', header: '' }, title: "Milk Production Over the Years", subTitle: "Yearly data from 2018 to 2023", titleStyle: { textAlignment: 'Near', position: 'Bottom' }, subTitleStyle: { textAlignment: 'Near' }, pointRender: this.pointRender.bind(this) },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.LineSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Tooltip, ej2_react_charts_1.Highlight] }),
                React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: exports.annualMilkProduction, xName: "year", yName: "indiaProduction", width: 2, fill: "green", marker: { visible: true, width: 10, height: 10, border: { width: 0 } }, type: "Line" })))));
    };
    LineLayout.prototype.line5Template = function () {
        return (React.createElement("div", { className: "template" },
            React.createElement(ej2_react_charts_1.ChartComponent, { id: "charts6", primaryXAxis: { valueType: 'Category', edgeLabelPlacement: 'Shift', majorGridLines: { width: 0 }, majorTickLines: { width: 0 } }, load: this.load.bind(this), primaryYAxis: { rangePadding: 'None', minimum: 500, maximum: 580, interval: 20, lineStyle: { width: 0 }, majorTickLines: { width: 0 }, minorTickLines: { width: 0 }, labelStyle: { color: 'transparent' } }, chartArea: { border: { width: 0 } }, tooltip: { enable: true, shared: true, format: 'Year: <b>${point.x}</b><br/>Production: <b>${point.y} units</b>', header: '' }, title: "Milk Production Over the Years", subTitle: "Yearly data from 2018 to 2023", titleStyle: { textAlignment: 'Near', position: 'Bottom' }, subTitleStyle: { textAlignment: 'Near' } },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.LineSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Tooltip, ej2_react_charts_1.Highlight, ej2_react_charts_1.DataLabel] }),
                React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: exports.annualMilkProduction, xName: "year", yName: "indiaProduction", width: 2, marker: { visible: true, width: 6, height: 6, isFilled: true, dataLabel: { visible: true } }, type: "Line" })))));
    };
    LineLayout.prototype.line6Template = function () {
        return (React.createElement("div", { className: "template" },
            React.createElement(ej2_react_charts_1.ChartComponent, { id: "charts7", primaryXAxis: { valueType: 'Category', edgeLabelPlacement: 'Shift', majorGridLines: { width: 0 }, majorTickLines: { width: 0 } }, load: this.load.bind(this), primaryYAxis: { rangePadding: 'None', minimum: 500, maximum: 580, interval: 20, lineStyle: { width: 0 }, majorTickLines: { width: 0 }, minorTickLines: { width: 0 }, labelStyle: { color: 'transparent' } }, chartArea: { border: { width: 0 } }, tooltip: { enable: true, shared: true, format: 'Year: <b>${point.x}</b><br/>Production: <b>${point.y} units</b>', header: '' }, title: "Milk Production Over the Years", subTitle: "Yearly data from 2018 to 2023", titleStyle: { textAlignment: 'Near', position: 'Bottom' }, subTitleStyle: { textAlignment: 'Near' } },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.LineSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Tooltip, ej2_react_charts_1.Highlight, ej2_react_charts_1.DataLabel] }),
                React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: exports.annualMilkProduction, xName: "year", yName: "indiaProduction", width: 2, marker: { visible: true, width: 6, height: 6, isFilled: true, dataLabel: { visible: true, name: 'name', enableRotation: true, angle: -45 } }, type: "Line" })))));
    };
    LineLayout.prototype.line7Template = function () {
        return (React.createElement("div", { className: "template" },
            React.createElement(ej2_react_charts_1.ChartComponent, { id: "charts8", primaryXAxis: { valueType: 'Category', edgeLabelPlacement: 'Shift', majorGridLines: { width: 0 }, majorTickLines: { width: 0 } }, load: this.load.bind(this), primaryYAxis: { rangePadding: 'None', minimum: 50, maximum: 350, interval: 60, lineStyle: { width: 0 }, majorTickLines: { width: 0 }, minorTickLines: { width: 0 }, labelStyle: { color: 'transparent' } }, chartArea: { border: { width: 0 } }, tooltip: { enable: true, shared: true, header: '' }, title: "Monthly Traffic Analysis", subTitle: "Desktop vs Mobile", titleStyle: { textAlignment: 'Near', position: 'Bottom' }, subTitleStyle: { textAlignment: 'Near' }, legendSettings: { visible: false } },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.LineSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Tooltip, ej2_react_charts_1.Highlight, ej2_react_charts_1.Legend] }),
                React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: exports.monthlyTrafficData, xName: "month", yName: "desktop", name: "Desktop Traffic", width: 2, marker: { visible: true, width: 6, height: 6, isFilled: true }, type: "Line" }),
                    React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: exports.monthlyTrafficData, xName: "month", yName: "mobile", name: "Mobile Traffic", width: 2, marker: { visible: true, width: 6, height: 6, isFilled: true }, type: "Line" })))));
    };
    LineLayout.prototype.render = function () {
        return (React.createElement("div", { className: "control-section" },
            React.createElement("style", null, SAMPLE_CSS),
            React.createElement(ej2_react_layouts_1.DashboardLayoutComponent, { cellSpacing: this.cellSpacing, cellAspectRatio: 0.8, columns: 3 },
                React.createElement(ej2_react_layouts_1.PanelsDirective, null,
                    React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 1, sizeY: 1, row: 0, col: 0, content: this.lineTemplate.bind(this), header: '<div class="title" id="header1";>Line Chart</div>' }),
                    React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 1, sizeY: 1, row: 0, col: 1, content: this.line1Template.bind(this), header: '<div class="title" id="header1";>Dashed Line Chart</div>' }),
                    React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 1, sizeY: 1, row: 0, col: 2, content: this.line2Template.bind(this), header: '<div class="title" id="header1";>Line chart with Marker</div>' }),
                    React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 1, sizeY: 1, row: 1, col: 0, content: this.line3Template.bind(this), header: '<div class="title" id="header1";>Line Chart with Different Marker Shape</div>' }),
                    React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 1, sizeY: 1, row: 1, col: 1, content: this.line4Template.bind(this), header: '<div class="title" id="header1";>Line Chart with Marker Customization</div>' }),
                    React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 1, sizeY: 1, row: 1, col: 2, content: this.line5Template.bind(this), header: '<div class="title" id="header1";>Line Chart with Data Labels</div>' }),
                    React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 1, sizeY: 1, row: 2, col: 0, content: this.line6Template.bind(this), header: '<div class="title" id="header1";>Line Chart with Data Label Customization</div>' }),
                    React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 2, col: 1, content: this.line7Template.bind(this), header: '<div class="title" id="header1";>Line chart with Multiple Data Series</div>' }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This React Line Layout Chart example illustrates annual milk production and monthly traffic data for desktop and mobile devices using the default line series in the chart.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "In this example, you can see how to render and configure line-type charts with layouts. You can use the ",
                    React.createElement("code", null, "dashArray"),
                    ", ",
                    React.createElement("code", null, "width"),
                    ", and ",
                    React.createElement("code", null, "fill"),
                    " properties to customize the line. The ",
                    React.createElement("code", null, "marker"),
                    " and ",
                    React.createElement("code", null, "dataLabel"),
                    " options are used to represent individual data points and their values."),
                React.createElement("p", null,
                    "Tooltips are enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices. The ",
                    React.createElement("code", null, "enableHighlight"),
                    " property in the tooltip allows the corresponding series to be highlighted when a data point is hovered over."),
                React.createElement("p", null,
                    React.createElement("b", null, "Injecting Module")),
                React.createElement("p", null,
                    "Chart component features are segregated into individual feature-wise modules. To use line series, we need to inject ",
                    React.createElement("code", null, "LineSeries"),
                    " module into ",
                    React.createElement("code", null, "services"),
                    "."),
                React.createElement("p", null,
                    "More information on the line series can be found in this ",
                    React.createElement("a", { target: "_blank", href: "http://ej2.syncfusion.com/react/documentation/chart/chart-types/#line-charts", "aria-label": "Navigate to the documentation for Line Chart in React Chart component" }, "documentation section"),
                    "."))));
    };
    LineLayout.prototype.load = function (args) {
        var selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Tailwind3';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).
            replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
    };
    ;
    LineLayout.prototype.pointRender = function (args) {
        var colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];
        if (args.point.index >= 0 && args.point.index < colors.length) {
            args.fill = colors[args.point.index];
        }
    };
    ;
    return LineLayout;
}(sample_base_1.SampleBase));
exports.LineLayout = LineLayout;
