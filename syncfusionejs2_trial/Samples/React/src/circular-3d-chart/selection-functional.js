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
    { 'x': 'Internet Explorer', y: 6.12, },
    { 'x': 'Chrome', y: 57.28, },
    { 'x': 'Safari', y: 4.73, },
    { 'x': 'QQ', y: 5.96, },
    { 'x': 'UC Browser', y: 4.37, },
    { 'x': 'Edge', y: 7.48, },
    { 'x': 'Others', y: 14.06, }
];
var SAMPLE_CSS = "\n    .control-fluid {\n        padding: 0px !important;\n    }";
/**
 * Donut sample
 */
var Selection = function () {
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
                React.createElement(ej2_react_charts_1.Circular3DComponent, { id: 'charts', style: { textAlign: "center" }, legendSettings: { visible: true, position: ej2_base_1.Browser.isDevice ? 'Bottom' : 'Right', }, selectionMode: 'Point', isMultiSelect: true, highlightMode: 'Point', tilt: -35, enableRotation: true, load: load.bind(_this), title: 'Browser Market Share', loaded: onChartLoad.bind(_this) },
                    React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.PieSeries3D, ej2_react_charts_1.Circular3DDataLabel, ej2_react_charts_1.Circular3DLegend, ej2_react_charts_1.Circular3DTooltip, ej2_react_charts_1.Circular3DHighlight, ej2_react_charts_1.Circular3DSelection] }),
                    React.createElement(ej2_react_charts_1.Circular3DSeriesCollectionDirective, null,
                        React.createElement(ej2_react_charts_1.Circular3DSeriesDirective, { dataSource: exports.data1, xName: 'x', yName: 'y', radius: '80%' }))))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This sample shows statistics on expenditure made in a year using the pie chart.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null,
                "In this example, you can see how to render a doughnut chart with legends. You can use ",
                React.createElement("code", null, "Radius"),
                " and InnerRadius properties to render the doughnut."),
            React.createElement("p", null,
                React.createElement("b", null, "Injecting Module")),
            React.createElement("p", null,
                "Circular3D Chart component features are segregated into individual feature-wise modules. To use selection, we need to Inject ",
                React.createElement("code", null, "Circular3DSelection"),
                " module into ",
                React.createElement("code", null, "services"),
                "."))));
};
exports.default = Selection;
