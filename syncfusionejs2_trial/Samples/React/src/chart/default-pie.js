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
exports.Pie = exports.data1 = void 0;
/**
 * Sample for Pie chart
 */
var React = require("react");
var sample_base_1 = require("../common/sample-base");
var ej2_react_charts_1 = require("@syncfusion/ej2-react-charts");
var base_1 = require("@syncfusion/ej2/base");
exports.data1 = [
    { 'x': 'Coal', y: 34.4, text: 'Coal: 34.4%' },
    { 'x': 'Natural Gas', y: 22.1, text: 'Natural Gas: 22.1%' },
    { 'x': 'Hydro', y: 14.4, text: 'Hydro: 14.4%' },
    { 'x': 'Nuclear', y: 9.0, text: 'Nuclear: 9.0%' },
    { 'x': 'Wind', y: 8.1, text: 'Wind: 8.1%' },
    { 'x': 'Others', y: 12.0, text: 'Others: 12.0%' }
];
var SAMPLE_CSS = "\n    .control-fluid {\n        padding: 0px !important;\n    }\n        .pie-chart {\n            align :center\n        }";
var Pie = /** @class */ (function (_super) {
    __extends(Pie, _super);
    function Pie() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pie.prototype.render = function () {
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("style", null, SAMPLE_CSS),
            React.createElement("div", { className: 'control-section row' },
                React.createElement(ej2_react_charts_1.AccumulationChartComponent, { id: 'pie-chart', title: 'Global Electricity Generation by Source - 2024', subTitle: 'Source: wikipedia.org', load: this.load.bind(this), legendSettings: { visible: false }, enableAnimation: true, enableBorderOnMouseMove: false, tooltip: { enable: true, format: '<b>${point.x}</b><br>Percentage: <b>${point.y}%</b>', header: "", enableHighlight: true }, loaded: this.onChartLoad.bind(this) },
                    React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.AccumulationLegend, ej2_react_charts_1.PieSeries, ej2_react_charts_1.AccumulationTooltip, ej2_react_charts_1.AccumulationDataLabel] }),
                    React.createElement(ej2_react_charts_1.AccumulationSeriesCollectionDirective, null,
                        React.createElement(ej2_react_charts_1.AccumulationSeriesDirective, { dataSource: exports.data1, name: 'Browser', xName: 'x', yName: 'y', borderRadius: 3, innerRadius: '0%', explode: true, explodeOffset: '10%', explodeIndex: 0, startAngle: base_1.Browser.isDevice ? 70 : 30, border: { color: '#FFFFFF', width: 1 }, dataLabel: { visible: true, position: 'Outside', name: 'text', font: { size: base_1.Browser.isDevice ? '8px' : '12px', fontWeight: '600' }, connectorStyle: { length: base_1.Browser.isDevice ? '10px' : '20px', type: 'Curve' } }, radius: base_1.Browser.isDevice ? '40%' : '60%' })))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This React Pie Chart example demonstrates a pie chart for global electricity generation. Datalabels show information about the points.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    " In this example, you can see how to render and configure a pie chart. The pie chart is a circular graphic, which is ideal for displaying categories as a proportion or a percentage of the whole. The radius of the pie chart can be customized using the ",
                    React.createElement("code", null, "Radius"),
                    " property."),
                React.createElement("p", null, " Tooltip is enabled in this example. To see the tooltip in action, hover a point or tap a point in touch enabled devices."),
                React.createElement("p", null,
                    React.createElement("b", null, "Injecting Module")),
                React.createElement("p", null,
                    "Accumulation Chart component features are segregated into individual feature-wise modules. To use pie chart, we need to inject ",
                    React.createElement("code", null, "PieSeries"),
                    " module into ",
                    React.createElement("code", null, "services"),
                    "."),
                React.createElement("p", null,
                    "More information on the pie series can be found in this ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/accumulation-chart/pie-dough-nut/#pie-chart", "aria-label": "Navigate to the documentation for Pie Chart in React Accumulation Chart component" }, "documentation section"),
                    "."))));
    };
    Pie.prototype.onChartLoad = function (args) {
        document.getElementById('pie-chart').setAttribute('title', '');
    };
    ;
    Pie.prototype.load = function (args) {
        var selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
        args.accumulation.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").
            replace(/light/i, "Light").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
    };
    ;
    return Pie;
}(sample_base_1.SampleBase));
exports.Pie = Pie;
