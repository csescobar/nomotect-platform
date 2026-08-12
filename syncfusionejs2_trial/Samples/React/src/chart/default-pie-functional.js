"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.data1 = void 0;
var React = require("react");
var react_1 = require("react");
var sample_base_1 = require("../common/sample-base");
var ej2_base_1 = require("@syncfusion/ej2-base");
var ej2_react_charts_1 = require("@syncfusion/ej2-react-charts");
var theme_color_1 = require("./theme-color");
exports.data1 = [
    { 'x': 'Coal', y: 34.4, text: 'Coal: 34.4%' },
    { 'x': 'Natural Gas', y: 22.1, text: 'Natural Gas: 22.1%' },
    { 'x': 'Hydro', y: 14.4, text: 'Hydro: 14.4%' },
    { 'x': 'Nuclear', y: 9.0, text: 'Nuclear: 9.0%' },
    { 'x': 'Wind', y: 8.1, text: 'Wind: 8.1%' },
    { 'x': 'Others', y: 12.0, text: 'Others: 12.0%' }
];
var SAMPLE_CSS = "\n    .control-fluid {\n        padding: 0px !important;\n    }\n    .pie-chart {\n        align :center\n    }";
var Pie = function () {
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
            React.createElement(ej2_react_charts_1.AccumulationChartComponent, { id: 'pie-chart', title: 'Global Electricity Generation by Source - 2024', subTitle: 'Source: wikipedia.org', load: load.bind(_this), legendSettings: { visible: false }, enableAnimation: true, enableBorderOnMouseMove: false, tooltip: { enable: true, format: '<b>${point.x}</b><br>Percentage: <b>${point.y}%</b>', header: "", enableHighlight: true }, loaded: onChartLoad.bind(_this) },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.AccumulationLegend, ej2_react_charts_1.PieSeries, ej2_react_charts_1.AccumulationTooltip, ej2_react_charts_1.AccumulationDataLabel] }),
                React.createElement(ej2_react_charts_1.AccumulationSeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.AccumulationSeriesDirective, { dataSource: exports.data1, name: 'Browser', xName: 'x', yName: 'y', borderRadius: 3, innerRadius: '0%', explode: true, explodeOffset: '10%', explodeIndex: 0, startAngle: ej2_base_1.Browser.isDevice ? 70 : 30, border: { color: '#FFFFFF', width: 1 }, dataLabel: { visible: true, position: 'Outside', name: 'text', font: { size: ej2_base_1.Browser.isDevice ? '8px' : '12px', fontWeight: '600' }, connectorStyle: { length: ej2_base_1.Browser.isDevice ? '10px' : '20px', type: 'Curve' } }, radius: ej2_base_1.Browser.isDevice ? '40%' : '60%' })))),
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
exports.default = Pie;
