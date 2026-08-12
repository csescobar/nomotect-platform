"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var ej2_react_charts_1 = require("@syncfusion/ej2-react-charts");
var ej2_base_1 = require("@syncfusion/ej2-base");
var sample_base_1 = require("../common/sample-base");
var theme_color_1 = require("./theme-color");
// Data
var olympicsGoldData = [
    { Country: 'USA', Count: 40 },
    { Country: 'China', Count: 40 },
    { Country: 'Great Britain', Count: 14 },
    { Country: 'France', Count: 16 },
    { Country: 'Australia', Count: 18 },
    { Country: 'Japan', Count: 20 },
    { Country: 'Italy', Count: 12 },
    { Country: 'Netherlands', Count: 15 },
    { Country: 'Germany', Count: 12 },
    { Country: 'South Korea', Count: 13 }
];
var olympicsSilverData = [
    { Country: 'USA', Count: 44 },
    { Country: 'China', Count: 27 },
    { Country: 'Great Britain', Count: 22 },
    { Country: 'France', Count: 26 },
    { Country: 'Australia', Count: 19 },
    { Country: 'Japan', Count: 12 },
    { Country: 'Italy', Count: 13 },
    { Country: 'Netherlands', Count: 7 },
    { Country: 'Germany', Count: 13 },
    { Country: 'South Korea', Count: 9 }
];
var olympicsBronzeData = [
    { Country: 'USA', Count: 42 },
    { Country: 'China', Count: 24 },
    { Country: 'Great Britain', Count: 29 },
    { Country: 'France', Count: 22 },
    { Country: 'Australia', Count: 16 },
    { Country: 'Japan', Count: 13 },
    { Country: 'Italy', Count: 15 },
    { Country: 'Netherlands', Count: 12 },
    { Country: 'Germany', Count: 8 },
    { Country: 'South Korea', Count: 10 }
];
var content = '<img style="margin-top:15px;height:150px;width:240px;opacity:0.5" src="src/chart/images/medals.png" alt="Medals" />';
var SAMPLE_CSS = "\n  .control-section { padding: 0 !important; }\n  .light-bg {\n    color: #000000;\n  }\n  .dark-bg {\n    color: #ffffff;\n  }\n";
var AxisLabelTemplateFunctional = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var axisLabeltemplate = '<div id="labelTemplate" class="light-bg" style="display:flex;align-items:center;gap:8px;border-radius:3px;width:130px;justify-content:space-between;">' +
        '<div style="display:flex;align-items:center;gap:6px;flex:1;min-width:0;">' +
        '<span style="font-size:12px;width:18px;text-align:right;display:inline-block;">${(value + 1)}.</span>' +
        '<span style="font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${label}</span>' +
        '</div>' +
        '<img src="src/chart/images/labelTemplate/${label}.png" alt="${label} flag" width="22" height="22" style="border-radius:50%" />' +
        '</div>';
    var onChartLoad = function (args) {
        var selectedTheme = (0, theme_color_1.loadChartTheme)(args);
        var isDark = selectedTheme.includes('Dark') || selectedTheme.includes('HighContrast');
        var labels = document.querySelectorAll('#labelTemplate');
        for (var i = 0; i < labels.length; i++) {
            var element = labels[i];
            element.classList.remove('dark-bg');
            element.classList.remove('light-bg');
            element.classList.add(isDark ? 'dark-bg' : 'light-bg');
        }
    };
    var load = function (args) {
        (0, theme_color_1.loadChartTheme)(args);
    };
    return (React.createElement("div", { className: "control-pane" },
        React.createElement("style", null, SAMPLE_CSS),
        React.createElement("div", { className: "control-section" },
            React.createElement(ej2_react_charts_1.ChartComponent, { id: "container", style: { textAlign: 'center' }, load: load.bind(_this), loaded: onChartLoad.bind(_this), title: "Olympic medal standings 2024", subTitle: 'Source: www.olympics.com', titleStyle: { textOverflow: 'Wrap' }, subTitleStyle: { textOverflow: 'Wrap' }, width: ej2_base_1.Browser.isDevice ? '100%' : '75%', legendSettings: { visible: true }, isTransposed: true, chartArea: { border: { width: 0 } }, tooltip: { enable: true }, primaryXAxis: {
                    valueType: 'Category',
                    majorGridLines: { width: 0 }, lineStyle: { width: 0 },
                    majorTickLines: { width: 0 }, isInversed: true,
                    labelTemplate: axisLabeltemplate
                }, primaryYAxis: { visible: false, maximum: 130 } },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.StackingColumnSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Legend, ej2_react_charts_1.Tooltip, ej2_react_charts_1.DataLabel, ej2_react_charts_1.ChartAnnotation] }),
                React.createElement(ej2_react_charts_1.AnnotationsDirective, null,
                    React.createElement(ej2_react_charts_1.AnnotationDirective, { content: content, coordinateUnits: "Point", x: "Netherlands", y: "110" })),
                React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: olympicsGoldData, xName: "Country", yName: "Count", type: "StackingColumn", name: "Gold", fill: "#FFD700", legendShape: "Rectangle", marker: { dataLabel: { visible: true, position: 'Middle' } } }),
                    React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: olympicsSilverData, xName: "Country", yName: "Count", type: "StackingColumn", name: "Silver", fill: "#C0C0C0", legendShape: "Rectangle", marker: { dataLabel: { visible: true, position: 'Middle' } } }),
                    React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: olympicsBronzeData, xName: "Country", yName: "Count", type: "StackingColumn", name: "Bronze", fill: "#CD7F32", legendShape: "Rectangle", marker: { dataLabel: { visible: true, position: 'Middle' } } })))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This sample shows the 2024 Olympic medal standings for the top 10 countries using a stacked Column chart. The x-axis uses label templates to display each country\u2019s rank and name (with flag), enabling quick comparison of Gold, Silver, and Bronze totals.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null,
                "Use the axis label template feature to customize axis labels via the ",
                React.createElement("code", null, "labelTemplate"),
                " property on the chart axis. Templates can include HTML markup, conditional styling, and embedded icons or images (for example, country flags). This sample binds rank and country to the template while the series plot medal counts."),
            React.createElement("p", null,
                "More information on axis labels can be found in this",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/chart/axis-labels/", style: { marginLeft: 4 } }, "documentation section"),
                "."))));
};
exports.default = AxisLabelTemplateFunctional;
