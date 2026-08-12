"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countryData = exports.regionData = void 0;
var React = require("react");
var react_1 = require("react");
var sample_base_1 = require("../common/sample-base");
var ej2_react_charts_1 = require("@syncfusion/ej2-react-charts");
var theme_color_1 = require("./theme-color");
var ej2_base_1 = require("@syncfusion/ej2-base");
var regionColors = {
    'South Asia': '#1f4e8c',
    'Middle East': '#7a3b8f',
    'S.E. Asia': '#e91e63',
    'Africa': '#f4c20d',
    'Others': '#66a99c'
};
exports.regionData = [
    { x: 'South Asia', y: 55.85, color: regionColors['South Asia'], text: ej2_base_1.Browser.isDevice ? 'SA' : 'South Asia' },
    { x: 'Middle East', y: 16.15, color: regionColors['Middle East'], text: ej2_base_1.Browser.isDevice ? 'ME' : 'Middle East' },
    { x: 'S.E. Asia', y: 7.36, color: regionColors['S.E. Asia'], text: ej2_base_1.Browser.isDevice ? 'SEA' : 'S.E. Asia' },
    { x: 'Africa', y: 11.25, color: regionColors['Africa'], text: ej2_base_1.Browser.isDevice ? 'AF' : 'Africa' },
    { x: 'Others', y: 9.39, color: regionColors['Others'], text: ej2_base_1.Browser.isDevice ? 'Others' : 'Others' }
];
exports.countryData = [
    { x: 'India', y: 21.8, color: regionColors['South Asia'], text: ej2_base_1.Browser.isDevice ? 'IND' : 'India' },
    { x: 'Bangladesh', y: 12.5, color: regionColors['South Asia'], text: ej2_base_1.Browser.isDevice ? 'BGD' : 'Bangladesh' },
    { x: 'Nepal', y: 12.5, color: regionColors['South Asia'], text: ej2_base_1.Browser.isDevice ? 'NPL' : 'Nepal' },
    { x: 'Pakistan', y: 4.7, color: regionColors['South Asia'], text: ej2_base_1.Browser.isDevice ? 'PAK' : 'Pakistan' },
    { x: 'Sri Lanka', y: 4.35, color: regionColors['South Asia'], text: ej2_base_1.Browser.isDevice ? 'LKA' : 'Sri Lanka' },
    { x: 'Qatar', y: 10.5, color: regionColors['Middle East'], text: ej2_base_1.Browser.isDevice ? 'QAT' : 'Qatar' },
    { x: 'Iran', y: 1.0, color: regionColors['Middle East'], text: ej2_base_1.Browser.isDevice ? 'IRN' : 'Iran' },
    { x: 'Jordan', y: 1.6, color: regionColors['Middle East'], text: ej2_base_1.Browser.isDevice ? 'JOR' : 'Jordan' },
    { x: 'Syria', y: 1.8, color: regionColors['Middle East'], text: ej2_base_1.Browser.isDevice ? 'SYR' : 'Syria' },
    { x: 'Lebanon', y: 1.25, color: regionColors['Middle East'], text: ej2_base_1.Browser.isDevice ? 'LBN' : 'Lebanon' },
    { x: 'Philippines', y: 7.36, color: regionColors['S.E. Asia'], text: ej2_base_1.Browser.isDevice ? 'PHL' : 'Philippines' },
    { x: 'Sudan', y: 1.9, color: regionColors['Africa'], text: ej2_base_1.Browser.isDevice ? 'SDN' : 'Sudan' },
    { x: 'Egypt', y: 9.35, color: regionColors['Africa'], text: ej2_base_1.Browser.isDevice ? 'EGY' : 'Egypt' },
    { x: 'Others', y: 9.39, color: regionColors['Others'], text: ej2_base_1.Browser.isDevice ? 'Others' : 'Others' }
];
var NestedDonut = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var load = function (args) {
        (0, theme_color_1.loadAccumulationChartTheme)(args);
    };
    var onChartLoad = function (args) {
        document.getElementById('container').setAttribute('title', '');
    };
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: 'control-section' },
            React.createElement(ej2_react_charts_1.AccumulationChartComponent, { id: "container", load: load, loaded: onChartLoad, enableBorderOnMouseMove: false, title: 'The Population of Qatar by Nationality', tooltip: {
                    enable: true,
                    format: '<b>${point.x}</b><br/>Population: <b>${point.y}%</b>',
                    textStyle: { fontWeight: 'bold' }
                }, legendSettings: { visible: true, mappingKey: 'x' }, centerLabel: {
                    text: 'Qatar Population<br><b>3.1 Million</b>',
                    textStyle: { size: '12px', fontWeight: 'bold' }
                } },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.PieSeries, ej2_react_charts_1.AccumulationLegend, ej2_react_charts_1.AccumulationTooltip, ej2_react_charts_1.AccumulationDataLabel] }),
                React.createElement(ej2_react_charts_1.AccumulationSeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.AccumulationSeriesDirective, { dataSource: exports.countryData, type: 'Pie', xName: 'x', yName: 'y', pointColorMapping: 'color', radius: '90%', innerRadius: '75%', border: { color: '#fff', width: 2 }, dataLabel: {
                            visible: true,
                            name: 'text',
                            position: 'Outside'
                        }, animation: { enable: false } }),
                    React.createElement(ej2_react_charts_1.AccumulationSeriesDirective, { dataSource: exports.regionData, type: 'Pie', xName: 'x', yName: 'y', pointColorMapping: 'color', radius: '67%', innerRadius: '35%', border: { color: '#fff', width: 2 }, dataLabel: {
                            visible: true,
                            name: 'text',
                            position: 'Inside'
                        }, animation: { enable: false } })))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This nested donut chart example demonstrates how to visualize the population of Qatar by nationality using multiple pie series. The outer ring represents individual countries, while the inner ring shows regional distribution with consistent color grouping.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null, "In this example, multiple pie series are used to display hierarchical data in concentric rings. This approach makes it easy to compare nationality-level population distribution alongside broader regional groupings within Qatar."),
            React.createElement("p", null,
                "The ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/accumulationseries/#radius", "aria-label": "Navigate to the API for radius in React accumulation chart" },
                    React.createElement("code", null, "radius")),
                " and",
                ' ',
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/accumulationseries/#innerradius", "aria-label": "Navigate to the API for innerRadius in React accumulation chart" },
                    React.createElement("code", null, "innerRadius")),
                " properties control the size and thickness of each ring, enabling the nested donut appearance. The",
                ' ',
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/accumulationseries/#pointcolormapping", "aria-label": "Navigate to the API for pointColorMapping in React accumulation chart" },
                    React.createElement("code", null, "pointColorMapping")),
                " property ensures that countries and their corresponding regions share the same color for visual consistency."),
            React.createElement("p", null,
                "The ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/tooltipsettings#enable" },
                    React.createElement("code", null, "Tooltip")),
                " feature is enabled to provide additional information. Hover over a segment (or tap on touch devices) to view the nationality and its population share percentage."),
            React.createElement("p", null,
                React.createElement("b", null, "Injecting Module")),
            React.createElement("p", null,
                "The Charts component's features are segregated into individual feature modules. To use pie series, we need to inject the ",
                React.createElement("code", null, "PieSeries"),
                " module into ",
                React.createElement("code", null, "services"),
                "."),
            React.createElement("p", null,
                "For more details about rendering multiple pie series, refer the ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/accumulation-chart/pie-dough-nut/#multiple-pie-series", "aria-label": "Navigate to the documentation for Multiple Pie Series in React Accumulation Chart control" }, "documentation section"),
                "."))));
};
exports.default = NestedDonut;
