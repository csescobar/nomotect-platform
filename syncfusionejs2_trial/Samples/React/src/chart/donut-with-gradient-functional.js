"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradientDonutData = void 0;
var React = require("react");
var react_1 = require("react");
var sample_base_1 = require("../common/sample-base");
var ej2_react_charts_1 = require("@syncfusion/ej2-react-charts");
var theme_color_1 = require("./theme-color");
var ej2_base_1 = require("@syncfusion/ej2-base");
exports.GradientDonutData = [
    { Country: "Austria", Share: 38.03, DataLabelMappingName: "Austria: 38.03%" },
    { Country: "Belgium", Share: 33.7, DataLabelMappingName: "Belgium: 33.7%" },
    { Country: "Germany", Share: 31.27, DataLabelMappingName: "Germany: 31.27%" },
    { Country: "The Netherlands", Share: 29.71, DataLabelMappingName: "The Netherlands: 29.71%" },
    { Country: "Lithuania", Share: 27.72, DataLabelMappingName: "Lithuania: 27.72%" },
    { Country: "Czechia", Share: 27.37, DataLabelMappingName: "Czechia: 27.37%" },
    { Country: "Poland", Share: 22.1, DataLabelMappingName: "Poland: 22.1%" },
    { Country: "Ireland", Share: 18.87, DataLabelMappingName: "Ireland: 18.87%" },
    { Country: "Croatia", Share: 14.88, DataLabelMappingName: "Croatia: 14.88%" }
];
var baseColors = ['#39B9E6', '#2E79CF', '#4960CF', '#5E47C6', '#8A44C9', '#C24F86', '#D8584E', '#E07245', '#F09A4A'];
var AccumulationDoughnut = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var load = function (args) {
        (0, theme_color_1.loadAccumulationChartTheme)(args);
    };
    var onChartLoad = function (args) {
        document.getElementById('container').setAttribute('title', '');
    };
    var pointRender = function (args) {
        var idx = args.point.index;
        var base = baseColors[idx % baseColors.length];
        args.radialGradient = {
            cx: 0.5, cy: 0.5, fx: 0.5, fy: 0.5, r: 0.6,
            gradientColorStop: [
                { offset: 0, color: base, opacity: 1, brighten: 0.2, lighten: 0 },
                { offset: 45, color: base, opacity: 1, brighten: 0.1, lighten: 0 },
                { offset: 70, color: base, opacity: 1, brighten: 0, lighten: 0 },
                { offset: 85, color: base, opacity: 1, brighten: -0.1, lighten: 0 },
                { offset: 100, color: base, opacity: 1, brighten: -0.2, lighten: 0 }
            ]
        };
    };
    var legendRender = function (args) {
        var country = args.text;
        var dataPoint = exports.GradientDonutData.find(function (d) { return d.Country === country; });
        if (dataPoint) {
            args.text = dataPoint.DataLabelMappingName;
        }
    };
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: 'control-section' },
            React.createElement(ej2_react_charts_1.AccumulationChartComponent, { id: "container", load: load.bind(_this), loaded: onChartLoad.bind(_this), tooltip: { enable: true, header: '', format: '${point.x} : <b>${point.y}%</b>' }, legendSettings: { visible: true, position: 'Right' }, title: 'Share of E-commerce Orders by Country - 2025', subTitle: 'Source: Data provided by Eurostat European Statistics', titleStyle: { position: 'Custom', x: ej2_base_1.Browser.isDevice ? 120 : 370, y: 15 }, enableSmartLabels: true, pointRender: pointRender, legendRender: legendRender },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.PieSeries, ej2_react_charts_1.AccumulationDataLabel, ej2_react_charts_1.AccumulationAnnotation, ej2_react_charts_1.AccumulationLegend, ej2_react_charts_1.AccumulationTooltip] }),
                React.createElement(ej2_react_charts_1.AccumulationSeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.AccumulationSeriesDirective, { dataSource: exports.GradientDonutData, xName: 'Country', yName: 'Share', type: 'Pie', innerRadius: '65%', radius: '70%', name: 'Share by country', dataLabel: {
                            visible: true, name: 'DataLabelMappingName', position: 'Outside',
                            connectorStyle: { length: '10px' }, font: { size: '12px' }
                        }, legendShape: 'Rectangle' })))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This donut chart example shows the latest percentage share of e-commerce orders by country using a donut series with radial gradient fills. Data labels annotate each slice, and the legend on the right lists the exact percentages.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null,
                "In this example, you can see how to render and configure a donut chart with a gradient. To apply a gradient to each point in the pie series, we use the ",
                React.createElement("a", { href: "https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/iaccpointrendereventargs" }, "pointRender"),
                " event. Through this event, you can customize the color of each point in the donut chart."),
            React.createElement("p", null,
                React.createElement("code", null, "Tooltip"),
                " is enabled in this example. To see the tooltip in action, hover over a point or tap on a point in touch-enabled devices."),
            React.createElement("p", null,
                React.createElement("b", null, "Injecting Module")),
            React.createElement("p", null,
                "The Charts component's features are segregated into individual feature modules. To use pie chart, we need to inject ",
                React.createElement("code", null, "PieSeries"),
                " module into ",
                React.createElement("code", null, "services"),
                "."),
            React.createElement("p", null,
                "More information about the donut series can be found in this ",
                React.createElement("a", { target: "_blank", href: "http://ej2.syncfusion.com/react/documentation/accumulation-chart/pie-dough-nut/", "aria-label": "Navigate to the documentation for Donut Chart in React accumulation Chart component" }, "documentation section"),
                "."))));
};
exports.default = AccumulationDoughnut;
