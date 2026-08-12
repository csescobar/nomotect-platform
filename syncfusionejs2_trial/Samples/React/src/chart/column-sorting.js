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
var React = require("react");
var ej2_react_charts_1 = require("@syncfusion/ej2-react-charts");
var ej2_base_1 = require("@syncfusion/ej2-base");
var theme_color_1 = require("./theme-color");
var SAMPLE_CSS = "\n  .control-fluid {\n    padding: 0px !important;\n  }\n";
var labelRender = function (args) {
    var selectedTheme = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
    if (selectedTheme && selectedTheme.indexOf('fabric') > -1) {
        args.fill = theme_color_1.fabricColors[args.point.index % 10];
    }
    else if (selectedTheme === 'material') {
        args.fill = theme_color_1.materialColors[args.point.index % 10];
    }
    else if (selectedTheme === 'highcontrast') {
        args.fill = theme_color_1.highContrastColors[args.point.index % 10];
    }
    else if (selectedTheme === 'fluent2') {
        args.fill = theme_color_1.fluent2Colors[args.point.index % 10];
    }
    else if (selectedTheme === 'fluent2-dark') {
        args.fill = theme_color_1.fluent2DarkColors[args.point.index % 10];
    }
    else {
        args.fill = theme_color_1.bootstrapColors[args.point.index % 10];
    }
};
var updatedData = [
    { x: 'Inida', y: 97.21 },
    { x: 'France', y: 95.21 },
    { x: 'Indonesia', y: 62.74 },
    { x: 'Iceland', y: 61.71 },
    { x: 'United States', y: 57.97 },
    { x: 'Greece', y: 57.51 },
    { x: 'Iran', y: 55.31 },
    { x: 'Canada', y: 48.76 },
    { x: 'Finland', y: 48.50 },
    { x: 'Brazil', y: 45.13 },
];
var updatedData2 = [
    { x: 'Inida', y: 102.54 },
    { x: 'France', y: 90.76 },
    { x: 'Indonesia', y: 64.61 },
    { x: 'Iceland', y: 70.95 },
    { x: 'United States', y: 61.52 },
    { x: 'Greece', y: 49.03 },
    { x: 'Iran', y: 33.05 },
    { x: 'Canada', y: 59.83 },
    { x: 'Finland', y: 43.13 },
    { x: 'Brazil', y: 55.56 },
];
var updatedData3 = [
    { x: 'Inida', y: 99.33 },
    { x: 'France', y: 94.50 },
    { x: 'Indonesia', y: 64.86 },
    { x: 'Iceland', y: 77.86 },
    { x: 'United States', y: 62.14 },
    { x: 'Greece', y: 47.73 },
    { x: 'Iran', y: 39.97 },
    { x: 'Canada', y: 66.53 },
    { x: 'Finland', y: 43.15 },
    { x: 'Brazil', y: 50.02 }
];
var updatedData4 = [
    { x: 'Inida', y: 98.85 },
    { x: 'France', y: 101.11 },
    { x: 'Indonesia', y: 60.72 },
    { x: 'Iceland', y: 71.09 },
    { x: 'United States', y: 60.97 },
    { x: 'Greece', y: 52.07 },
    { x: 'Iran', y: 37.99 },
    { x: 'Canada', y: 58.35 },
    { x: 'Finland', y: 43.41 },
    { x: 'Brazil', y: 58.61 }
];
var updatedData5 = [
    { x: 'Inida', y: 100.02 },
    { x: 'France', y: 100.55 },
    { x: 'Indonesia', y: 62.84 },
    { x: 'Iceland', y: 89.05 },
    { x: 'United States', y: 59.46 },
    { x: 'Greece', y: 54.04 },
    { x: 'Iran', y: 42.58 },
    { x: 'Canada', y: 59.90 },
    { x: 'Finland', y: 46.18 },
    { x: 'Brazil', y: 65.06 }
];
var updatedData6 = [
    { x: 'Inida', y: 102.54 },
    { x: 'France', y: 103.56 },
    { x: 'Indonesia', y: 60.23 },
    { x: 'Iceland', y: 94.00 },
    { x: 'United States', y: 59.39 },
    { x: 'Greece', y: 50.11 },
    { x: 'Iran', y: 34.23 },
    { x: 'Canada', y: 60.40 },
    { x: 'Finland', y: 44.73 },
    { x: 'Brazil', y: 50.04 }
];
var updatedData7 = [
    { x: 'Inida', y: 98.84 },
    { x: 'France', y: 101.95 },
    { x: 'Indonesia', y: 60.86 },
    { x: 'Iceland', y: 89.51 },
    { x: 'United States', y: 58.26 },
    { x: 'Greece', y: 53.20 },
    { x: 'Iran', y: 34.28 },
    { x: 'Canada', y: 57.22 },
    { x: 'Finland', y: 42.99 },
    { x: 'Brazil', y: 51.68 }
];
var updatedData8 = [
    { x: 'Inida', y: 100.41 },
    { x: 'France', y: 108.54 },
    { x: 'Indonesia', y: 56.44 },
    { x: 'Iceland', y: 107.98 },
    { x: 'United States', y: 57.75 },
    { x: 'Greece', y: 56.34 },
    { x: 'Iran', y: 35.53 },
    { x: 'Canada', y: 57.49 },
    { x: 'Finland', y: 43.32 },
    { x: 'Brazil', y: 64.56 }
];
var updatedData9 = [
    { x: 'Inida', y: 104.45 },
    { x: 'France', y: 102.07 },
    { x: 'Indonesia', y: 61.19 },
    { x: 'Iceland', y: 97.05 },
    { x: 'United States', y: 59.53 },
    { x: 'Greece', y: 55.61 },
    { x: 'Iran', y: 41.84 },
    { x: 'Canada', y: 64.13 },
    { x: 'Finland', y: 43.69 },
    { x: 'Brazil', y: 64.73 }
];
var updatedData10 = [
    { x: 'Inida', y: 111.84 },
    { x: 'France', y: 95.53 },
    { x: 'Indonesia', y: 55.15 },
    { x: 'Iceland', y: 85.79 },
    { x: 'United States', y: 59.53 },
    { x: 'Greece', y: 58.93 },
    { x: 'Iran', y: 46.53 },
    { x: 'Canada', y: 59.52 },
    { x: 'Finland', y: 45.67 },
    { x: 'Brazil', y: 67.84 }
];
var UpdateColumnDataSource = /** @class */ (function (_super) {
    __extends(UpdateColumnDataSource, _super);
    function UpdateColumnDataSource() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.yearIndex = 2;
        _this.updateClearInterval = function () {
            if (_this.intervalId) {
                clearInterval(_this.intervalId);
                _this.intervalId = null;
            }
        };
        _this.load = function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
            _this.updateClearInterval();
            _this.intervalId = setInterval(function () {
                var container = document.getElementById('data-sorting-container');
                if (container && container.id === args.chart.element.id) {
                    var newData = (eval('updatedData' + _this.yearIndex) || []).map(function (item) {
                        return { x: item.x, y: item.y };
                    });
                    if (_this.chart.series.length > 0) {
                        var newSource = (0, ej2_react_charts_1.sort)(newData, ['y'], true);
                        _this.chart.series[0].setData(newSource, 1400);
                    }
                    _this.yearIndex = _this.yearIndex < 10 ? _this.yearIndex + 1 : 2;
                }
                else {
                    _this.updateClearInterval();
                }
            }, 2000);
        };
        _this.axisRangeCalculated = function (args) {
            if (args.axis.name === 'primaryYAxis') {
                if (args.maximum > 120) {
                    args.interval = 30;
                }
                else {
                    args.interval = 20;
                }
            }
        };
        return _this;
    }
    UpdateColumnDataSource.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("style", null, SAMPLE_CSS),
            React.createElement("div", { className: 'control-section row' },
                React.createElement(ej2_react_charts_1.ChartComponent, { id: 'data-sorting-container', style: { textAlign: 'center' }, ref: function (chart) { return _this.chart = chart; }, primaryXAxis: {
                        valueType: 'Category',
                        majorGridLines: { width: 0 },
                        border: { width: 0 },
                        lineStyle: { width: 0 },
                        majorTickLines: { width: 0 },
                        labelRotation: 90
                    }, primaryYAxis: {
                        interval: 20,
                        title: 'Nitrogen Fertilizer Use (kg/ha)',
                        labelFormat: '{value}',
                        border: { width: 0 },
                        lineStyle: { width: 0 },
                        majorTickLines: { width: 0 }
                    }, chartArea: { border: { width: 0 } }, title: 'Nitrogen Fertilizer Use per Hectare of Cropland', pointRender: labelRender, width: ej2_base_1.Browser.isDevice ? '100%' : '75%', load: this.load, axisRangeCalculated: this.axisRangeCalculated },
                    React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.ColumnSeries, ej2_react_charts_1.Category, ej2_react_charts_1.DataLabel] }),
                    React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                        React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: updatedData, xName: 'x', yName: 'y', type: 'Column', animation: { enable: true }, marker: { visible: false, dataLabel: { visible: true, position: 'Top', format: '{value}', font: { color: '#ffffff' } } }, cornerRadius: { topLeft: 5, topRight: 5 }, columnWidth: 0.7 })))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This example demonstrates the nitrogen fertilizer use per hectare of cropland using a column chart. The chart updates periodically to show different data sets.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null, "In this example, you can see how to render and configure a column chart. The chart updates its data dynamically based on intervals."))));
    };
    return UpdateColumnDataSource;
}(React.Component));
exports.default = UpdateColumnDataSource;
