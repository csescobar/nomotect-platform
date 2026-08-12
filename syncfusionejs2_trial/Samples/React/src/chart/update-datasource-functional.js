"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.pointRender = void 0;
/**
 * Sample for Update DataSource.
 */
var React = require("react");
var react_1 = require("react");
var ej2_react_charts_1 = require("@syncfusion/ej2-react-charts");
var ej2_base_1 = require("@syncfusion/ej2-base");
var sample_base_1 = require("../common/sample-base");
var SAMPLE_CSS = "\n    .control-fluid {\n        padding: 0px !important;\n    }";
var data = [
    { x: 'Jewellery', y: 20 },
    { x: 'Shoes', y: 15 },
    { x: 'Footwear', y: 13 },
    { x: 'Pet Services', y: 23 },
    { x: 'Business Clothing', y: 10 },
    { x: 'Office Supplies', y: 8 },
    { x: 'Food', y: 11 }
];
var theme_color_1 = require("./theme-color");
var pointRender = function (args) {
    var selectedTheme = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'material';
    if (selectedTheme && selectedTheme.indexOf('fabric') > -1) {
        args.fill = theme_color_1.fabricColors[args.point.index % 10];
    }
    else if (selectedTheme === 'material') {
        args.fill = theme_color_1.materialColors[args.point.index % 10];
    }
    else if (selectedTheme === 'highcontrast') {
        args.fill = theme_color_1.highContrastColors[args.point.index % 10];
    }
    else {
        args.fill = theme_color_1.bootstrapColors[args.point.index % 10];
    }
};
exports.pointRender = pointRender;
var UpdateDataSource = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var load = function (args) {
        var selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        setInterval(function () {
            var newData = data.map(function (item) {
                var min = 10;
                var max = 90;
                var value = Math.floor(Math.random() * (max - min + 1)) + min;
                return { x: item.x, y: value };
            });
            if (args.chart.visibleSeries.length > 0) {
                args.chart.series[0].setData(newData);
            }
        }, 2500);
    };
    var axisRangeCalculated = function (args) {
        if (args.axis.name === 'primaryYAxis') {
            args.maximum = args.maximum > 100 ? 100 : args.maximum;
            if (args.maximum > 90) {
                args.interval = 20;
            }
        }
    };
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("style", null, SAMPLE_CSS),
        React.createElement("div", { className: 'control-section' },
            React.createElement(ej2_react_charts_1.ChartComponent, { id: 'charts', style: { textAlign: "center" }, primaryXAxis: { valueType: 'Category', labelStyle: { size: ej2_base_1.Browser.isDevice ? '11px' : '12px' }, majorGridLines: { width: 0 } }, primaryYAxis: {
                    title: 'Sales in percentage', labelFormat: '{value}%', interval: 10, lineStyle: { width: 0 }, majorTickLines: { width: 0 }
                }, chartArea: { border: { width: 0 } }, load: load.bind(_this), width: ej2_base_1.Browser.isDevice ? '100%' : '75%', title: 'Sales by product', pointRender: exports.pointRender, axisRangeCalculated: axisRangeCalculated.bind(_this) },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.ColumnSeries, ej2_react_charts_1.DataLabel, ej2_react_charts_1.Category] }),
                React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: data, xName: 'x', yName: 'y', type: 'Column', cornerRadius: { topLeft: ej2_base_1.Browser.isDevice ? 10 : 15, topRight: ej2_base_1.Browser.isDevice ? 10 : 15 }, columnWidth: 0.5 })))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This sample demonstrates how the data source for the chart can dynamically update with random values at a set interval.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null,
                "In this example, you can see how to render and configure a column chart that displays sales data, with each entry featuring the product name and the corresponding sales percentage. Additionally, the chart can dynamically update with random values using the ",
                React.createElement("code", null, "setData"),
                " method."),
            React.createElement("p", null,
                React.createElement("b", null, "Injecting Module")),
            React.createElement("p", null,
                "Chart component features are segregated into individual feature-wise modules. To use the column series, we need to inject the",
                React.createElement("code", null, "ColumnSeries"),
                " module using ",
                React.createElement("code", null, "Chart.Inject(ColumnSeries)"),
                " method."),
            React.createElement("p", null,
                "More information on the column series can be found in this",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/chart/chart-types/column", "aria-label": "Navigate to the documentation for Column Chart in React Chart control" }, "documentation section"),
                "."))));
};
exports.default = UpdateDataSource;
