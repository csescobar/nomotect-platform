"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.data1 = void 0;
/**
 * Sample for Bar series
 */
var React = require("react");
var react_1 = require("react");
var ej2_react_charts_1 = require("@syncfusion/ej2-react-charts");
var ej2_base_1 = require("@syncfusion/ej2-base");
var sample_base_1 = require("../common/sample-base");
exports.data1 = [
    { 'x': 'Germany', y: 79, text: 'Germany: 79' },
    { 'x': 'China', y: 56, text: 'China: 56' },
    { 'x': 'Great Britain', y: 49, text: 'Great Britain: 49' },
    { 'x': 'Canada', y: 46, text: 'Canada: 46' },
    { 'x': 'India', y: 41, text: 'India: 41' },
    { 'x': 'Hong Kong', y: 39, text: 'Hong Kong: 39' },
    { 'x': 'Belgium', y: 34, text: 'Belgium: 34' },
    { 'x': 'United States', y: 32, text: 'United States: 32' },
    { 'x': 'Hungary', y: 30, text: 'Hungary: 30' },
    { 'x': 'Bangladesh', y: 25, text: 'Bangladesh: 25' },
];
var SAMPLE_CSS = "\n    .control-fluid {\n        padding: 0px !important;\n    }";
/**
 * Donut sample
 */
var PieSeries = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var onChartLoad = function (args) {
        var chart = document.getElementById('charts');
        chart.setAttribute('title', '');
    };
    var load = function (args) {
        var selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast');
    };
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("style", null, SAMPLE_CSS),
        React.createElement("div", { className: 'control-section' },
            React.createElement("div", null,
                React.createElement(ej2_react_charts_1.Circular3DComponent, { id: 'charts', style: { textAlign: "center" }, legendSettings: { visible: false }, highlightMode: 'Point', tilt: -30, enableRotation: true, load: load.bind(_this), title: 'Berlin 2023 Special Olympics Gold Medals', loaded: onChartLoad.bind(_this), tooltip: { enable: true, format: "<b>${point.x}</b><br> Gold Medals: <b>${point.y}</b>", header: "" } },
                    React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.PieSeries3D, ej2_react_charts_1.Circular3DDataLabel, ej2_react_charts_1.Circular3DLegend, ej2_react_charts_1.Circular3DTooltip, ej2_react_charts_1.Circular3DHighlight] }),
                    React.createElement(ej2_react_charts_1.Circular3DSeriesCollectionDirective, null,
                        React.createElement(ej2_react_charts_1.Circular3DSeriesDirective, { dataSource: exports.data1, xName: 'x', yName: 'y', explode: true, innerRadius: '0%', radius: ej2_base_1.Browser.isDevice ? '45%' : '80%', dataLabel: { visible: true, position: 'Outside', name: 'text', font: { fontWeight: '600' }, connectorStyle: { length: ej2_base_1.Browser.isDevice ? '20px' : '40px' } } }))))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This sample compares countries Berlin 2023 Special Olympics Gold Medals using various radius in a pie series.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null,
                "In this example, you can see how to render a doughnut chart with different radius. You can use the ",
                React.createElement("code", null, "Radius"),
                " mapping property to achieve this feature. ",
                React.createElement("code", null, "DataLabels"),
                " are used to represent individual data and its values. In addition, the sample shows how to change the order of legends for the doughnut chart by using the ",
                React.createElement("code", null, "Reverse"),
                " property."),
            React.createElement("p", null,
                React.createElement("b", null, "Injecting Module")),
            React.createElement("p", null,
                "The Circular3D Chart component\u2019s features are segregated into individual feature modules. To use the pie series feature, we need to inject ",
                React.createElement("code", null, "PieSeries3D"),
                " module into ",
                React.createElement("code", null, "services"),
                "."))));
};
exports.default = PieSeries;
