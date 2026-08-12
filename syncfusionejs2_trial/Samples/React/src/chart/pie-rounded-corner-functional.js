"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var sample_base_1 = require("../common/sample-base");
var ej2_base_1 = require("@syncfusion/ej2-base");
var ej2_react_charts_1 = require("@syncfusion/ej2-react-charts");
var theme_color_1 = require("./theme-color");
var chartData = [
    { x: 'Android', y: 45.49, text: 'Android: 45.49%' },
    { x: 'Windows', y: 25.35, text: 'Windows: 25.35%' },
    { x: 'iOS', y: 18.26, text: 'iOS: 18.26%' },
    { x: 'macOS', y: 5.06, text: 'macOS: 5.06%' },
    { x: 'Linux', y: 1.48, text: 'Linux: 1.48%' },
    { x: 'Others', y: 4.36, text: 'Others: 4.36%' }
];
var onPointRender = function (args) {
    (0, theme_color_1.roundedCornnerPointRender)(args);
};
var SAMPLE_CSS = "\n    .control-fluid {\n        padding: 0px !important;\n    }\n    .pie-chart {\n        align: center;\n    }\n";
var PieCornerRadius = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var onChartLoad = function (args) {
        document.getElementById('pie-chart').setAttribute('title', '');
    };
    var load = function (args) {
        (0, theme_color_1.loadAccumulationChartTheme)(args);
    };
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("style", null, SAMPLE_CSS),
        React.createElement("div", { className: 'control-section row' },
            React.createElement(ej2_react_charts_1.AccumulationChartComponent, { id: 'pie-chart', title: 'Global Operating System Usage Share - 2024', subTitle: 'Source: wikipedia.org', load: load.bind(_this), style: { textAlign: 'center' }, legendSettings: { visible: false }, enableAnimation: true, enableBorderOnMouseMove: false, tooltip: { enable: true, header: '', format: '<b>${point.x}</b><br>Operating System Usage: <b>${point.y}%</b>', enableHighlight: true }, loaded: onChartLoad.bind(_this), pointRender: onPointRender.bind(_this) },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.AccumulationLegend, ej2_react_charts_1.PieSeries, ej2_react_charts_1.AccumulationTooltip, ej2_react_charts_1.AccumulationDataLabel, ej2_react_charts_1.AccumulationAnnotation] }),
                React.createElement(ej2_react_charts_1.AccumulationSeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.AccumulationSeriesDirective, { dataSource: chartData, name: 'Project', xName: 'x', yName: 'y', type: 'Pie', radius: ej2_base_1.Browser.isDevice ? '25%' : '70%', explode: false, startAngle: 120, innerRadius: '50%', dataLabel: {
                            visible: true,
                            position: 'Outside',
                            name: 'text',
                            font: { size: '12px', fontWeight: '600' },
                            connectorStyle: { length: '20px', type: 'Curve' }
                        }, borderRadius: 8, border: { width: 0.5, color: 'white' } })))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This sample demonstrates the global usage share of operating systems across all platforms in 2024 using a donut chart with rounded corners.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null,
                "In this example, you can see how to render and configure a donut chart with customized corners for each slice. By specifying a value for ",
                React.createElement("code", null, "borderRadius"),
                ", you can create rounded corners for each slice, giving the chart a modern and polished look."),
            React.createElement("p", null,
                React.createElement("code", null, "Tooltips"),
                " are enabled in this example. To see the tooltip in action, hover over a slice or tap on it in touch-enabled devices."),
            React.createElement("p", null,
                "More information about the donut series can be found in this ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/documentation/accumulation-chart/pie-dough-nut/#doughnut-chart", "aria-label": "Navigate to the documentation for Doughnut Chart in TypeScript Accumulation Chart control" }, "documentation section"),
                "."))));
};
exports.default = PieCornerRadius;
