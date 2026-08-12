"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Sample for Crosshair in chart
 */
var React = require("react");
var react_1 = require("react");
var sample_base_1 = require("../common/sample-base");
var ej2_react_charts_1 = require("@syncfusion/ej2-react-charts");
var ej2_base_1 = require("@syncfusion/ej2-base");
var CrosshairSnap = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var onChartLoad = function (args) {
        var chart = document.getElementById('charts');
        chart.setAttribute('title', '');
    };
    var load = function (args) {
        var selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).
            replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
    };
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: 'control-section' },
            React.createElement(ej2_react_charts_1.ChartComponent, { id: 'charts', style: { textAlign: "center" }, primaryXAxis: {
                    interval: 1,
                    crosshairTooltip: { enable: true },
                    majorGridLines: { width: 0 },
                    majorTickLines: { width: 0 },
                    lineStyle: { width: 0 },
                    title: 'Year'
                }, load: load.bind(_this), primaryYAxis: {
                    title: "Price (24 Karat per Ounce)",
                    labelFormat: '${value}',
                    crosshairTooltip: { enable: true },
                    minimum: 1000,
                    majorTickLines: { width: 0 },
                    lineStyle: { width: 0 }
                }, chartArea: { border: { width: 0 } }, width: ej2_base_1.Browser.isDevice ? '100%' : '75%', title: 'Historical Gold Prices in USA: 2015 to 2024', loaded: onChartLoad.bind(_this), tooltip: { enable: false, shared: false }, crosshair: { enable: true, snapToData: true, dashArray: '5,5' }, legendSettings: { visible: false } },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.LineSeries, ej2_react_charts_1.DateTime, ej2_react_charts_1.Legend, ej2_react_charts_1.Crosshair] }),
                React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: [
                            { x: 2015, y: 1160.06 },
                            { x: 2016, y: 1250.74 },
                            { x: 2017, y: 1257.12 },
                            { x: 2018, y: 1268.93 },
                            { x: 2019, y: 1393.34 },
                            { x: 2020, y: 1770.35 },
                            { x: 2021, y: 1798.53 },
                            { x: 2022, y: 1800.79 },
                            { x: 2023, y: 1923.48 },
                            { x: 2024, y: 2003.10 }
                        ], xName: 'x', yName: 'y', name: 'India', type: 'Line', width: 2, marker: { visible: true, isFilled: true }, animation: { enable: false } })))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This sample demonstrates the crosshair with snap-to-data functionality in charts. Hover over the chart or tap on it in touch-enabled devices to view the crosshair and its tooltip snapping directly to the nearest data point.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null,
                "The crosshair in charts helps users examine data values with precision by using a vertical and horizontal line. When the ",
                React.createElement("code", null, "snapToData"),
                " property is enabled, the crosshair aligns directly to the nearest data point, making it easy to pinpoint exact values on hover or tap."),
            React.createElement("p", null,
                "Enable this feature by setting ",
                React.createElement("code", null, "snapToData: true"),
                " in the ",
                React.createElement("code", null, "crosshair"),
                " configuration."),
            React.createElement("p", null,
                React.createElement("b", null, "Injecting Module")),
            React.createElement("p", null,
                "Chart component features are segregated into individual feature-wise modules. To use Crosshair, we need to inject",
                React.createElement("code", null, "Crosshair"),
                " module into ",
                React.createElement("code", null, "services"),
                "."),
            React.createElement("p", null,
                "More information on the Crosshair can be found in this \u00A0",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/chart/cross-hair-and-track-ball/", "aria-label": "Navigate to the documentation for Crosshair in React Chart component" }, "documentation section"),
                "."))));
};
exports.default = CrosshairSnap;
