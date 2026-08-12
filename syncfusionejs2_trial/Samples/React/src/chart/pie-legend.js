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
exports.Doughnut = exports.data1 = void 0;
var React = require("react");
var sample_base_1 = require("../common/sample-base");
var ej2_react_charts_1 = require("@syncfusion/ej2-react-charts");
var ej2_base_1 = require("@syncfusion/ej2-base");
exports.data1 = [
    { 'x': 'China', y: 35, text: '35%' },
    { 'x': 'India', y: 30, text: '30%' },
    { 'x': 'USA', y: 10.7, text: '10.7%' },
    { 'x': 'Indonesia', y: 7, text: '7%' },
    { 'x': 'Brazil', y: 5.3, text: '5.3%' },
    { 'x': 'Others', y: 12, text: '12%' },
];
var content = ej2_base_1.Browser.isDevice ? " " : "<div style='font-Weight:600;font-size:14px'>Internet Users <br> by Country<br>2025</div>";
var SAMPLE_CSS = "\n    .control-fluid {\n        padding: 0px !important;\n    }\n        .pie-chart2 {\n            align :center\n        }";
var Doughnut = /** @class */ (function (_super) {
    __extends(Doughnut, _super);
    function Doughnut() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Doughnut.prototype.render = function () {
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("style", null, SAMPLE_CSS),
            React.createElement("div", { className: 'control-section' },
                React.createElement(ej2_react_charts_1.AccumulationChartComponent, { id: 'pie-chart2', load: this.load.bind(this), legendSettings: { visible: true, toggleVisibility: false, position: 'Bottom', textWrap: 'Wrap' }, enableBorderOnMouseMove: false, selectionMode: 'Point', tooltip: { enable: true, format: '<b>${point.x}</b><br>Percentage: <b>${point.y}%</b>', header: "", enableHighlight: true } },
                    React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.AccumulationLegend, ej2_react_charts_1.PieSeries, ej2_react_charts_1.AccumulationDataLabel, ej2_react_charts_1.AccumulationTooltip, ej2_react_charts_1.AccumulationSelection, ej2_react_charts_1.Selection, ej2_react_charts_1.ChartAnnotation, ej2_react_charts_1.AccumulationAnnotation] }),
                    React.createElement(ej2_react_charts_1.AccumulationSeriesCollectionDirective, null,
                        React.createElement(ej2_react_charts_1.AccumulationSeriesDirective, { dataSource: exports.data1, xName: 'x', yName: 'y', innerRadius: '50%', borderRadius: 3, border: { width: 1, color: '#ffffff' }, dataLabel: { visible: false } })),
                    React.createElement(ej2_react_charts_1.AccumulationAnnotationsDirective, null,
                        React.createElement(ej2_react_charts_1.AccumulationAnnotationDirective, { content: content, region: "Series", x: "50%", y: "50%" })))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample shows statistics on internet usage by country using the donut chart with legends shown at the bottom of the chart.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    " In this example, you can see how to render a donut chart with legends. You can use ",
                    React.createElement("code", null, "Radius"),
                    " and ",
                    React.createElement("code", null, "InnerRadius"),
                    " properties to render the donut."),
                React.createElement("p", null,
                    React.createElement("b", null, "Injecting Module")),
                React.createElement("p", null,
                    "Accumulation Chart component features are segregated into individual feature-wise modules.To use pie chart, you need to inject ",
                    React.createElement("code", null, "AccumulationLegend"),
                    " into ",
                    React.createElement("code", null, "services"),
                    "."),
                React.createElement("p", null,
                    "More information about the pie series can be found in this ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/accumulation-chart/legend", "aria-label": "Navigate to the documentation for Legend in React Accumulation Chart component" }, "documentation section"),
                    "."))));
    };
    Doughnut.prototype.load = function (args) {
        var selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
        args.accumulation.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").
            replace(/light/i, "Light").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
    };
    ;
    return Doughnut;
}(sample_base_1.SampleBase));
exports.Doughnut = Doughnut;
