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
exports.Candle = void 0;
/**
 * Sample for Candle Series
 */
var React = require("react");
var ej2_react_charts_1 = require("@syncfusion/ej2-react-charts");
var sample_base_1 = require("../common/sample-base");
var ej2_base_1 = require("@syncfusion/ej2-base");
var value = 180;
var getData = function () {
    var series = [];
    var point;
    for (var i = 0; i < 30; i++) {
        var change = void 0;
        if (i < 10 && !(i === 3 || i === 4 || i === 7)) {
            change = -(Math.random() * 10);
        }
        else if ((i >= 10 || i === 3 || i === 4 || i === 7 || i === 23 || i === 24 || i === 27) && i < 20 && !(i === 13 || i === 14 || i === 17)) {
            change = (Math.random() * 10);
        }
        else if ((i >= 20 || i === 13 || i === 14 || i === 17) && !(i === 23 || i === 24 || i === 27)) {
            change = -(Math.random() * 10);
        }
        else {
            change = 0;
        }
        value = value + change;
        value += Math.random() * 0.1;
        if (value > 240) {
            value = 240;
        }
        if (value < 140) {
            value = 140;
        }
        var open_1 = value + Math.round(Math.random() * 12);
        var low = Math.min(value, open_1) - Math.round(Math.random() * 8);
        var high = Math.max(value, open_1) + Math.round(Math.random() * 14);
        point = {
            x: new Date(2000, 5, 2, 2, 0, i),
            close: value,
            open: open_1,
            low: low,
            high: high
        };
        series.push(point);
    }
    return { series: series };
};
var data = getData().series;
var incVal = 0;
var updateVal = data.length;
var pointAdded = false;
var SAMPLE_CSS = "\n    .control-fluid {\n\t\tpadding: 0px !important;\n    }";
/**
 * Candle sample
 */
var Candle = /** @class */ (function (_super) {
    __extends(Candle, _super);
    function Candle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Candle.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("style", null, SAMPLE_CSS),
            React.createElement("div", { className: 'control-section' },
                React.createElement("div", { className: "row" },
                    React.createElement(ej2_react_charts_1.ChartComponent, { id: 'stock', ref: function (chart) { return _this.chartInstance = chart; }, style: { textAlign: "center" }, load: this.load.bind(this), primaryXAxis: { valueType: 'DateTime', interval: 4, crosshairTooltip: { enable: true }, edgeLabelPlacement: ej2_base_1.Browser.isDevice ? 'None' : 'Shift', majorGridLines: { width: 0 } }, primaryYAxis: { interval: 20, minimum: 120, opposedPosition: true, lineStyle: { width: 0 }, crosshairTooltip: { enable: true }, majorGridLines: { width: 1 }, majorTickLines: { width: 0 } }, width: ej2_base_1.Browser.isDevice ? '100%' : '90%', chartArea: { border: { width: 0 } }, title: "AAPL Historical", crosshair: { enable: true, dashArray: '5,5' }, pointRender: this.pointRender.bind(this), axisRangeCalculated: this.axisRangeCalculated.bind(this) },
                        React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.CandleSeries, ej2_react_charts_1.StripLine, ej2_react_charts_1.Category, ej2_react_charts_1.Tooltip, ej2_react_charts_1.DateTime, ej2_react_charts_1.Zoom, ej2_react_charts_1.ColumnSeries, ej2_react_charts_1.Logarithmic, ej2_react_charts_1.Crosshair, ej2_react_charts_1.ChartAnnotation, ej2_react_charts_1.LastValueLabel] }),
                        React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                            React.createElement(ej2_react_charts_1.SeriesDirective, { type: 'Candle', bearFillColor: '#2ecd71', bullFillColor: '#e74c3d', dataSource: data, columnWidth: 0.4, xName: 'x', low: 'low', high: 'high', open: 'open', close: 'close', lastValueLabel: { enable: true, background: 'red', dashArray: '3,2', lineWidth: 0.5, font: { size: '10px' } } }))))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample visualizes the animation in the candle chart when existing data is updated or new data is added.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null, "In this example, you can see how to render and configure the candlestick series to display data that updates every second and adds new data every five seconds. The chart demonstrates how to set up a last value label that follows the latest data."),
                React.createElement("p", null,
                    React.createElement("b", null, "Injecting Module")),
                React.createElement("p", null,
                    "Chart component features are segregated into individual feature-wise modules. To use the candle series, we need to inject",
                    React.createElement("code", null, "CandleSeries"),
                    " module using ",
                    React.createElement("code", null, "Chart.Inject(CandleSeries)"),
                    " method."),
                React.createElement("p", null,
                    "More information on the candle series can be found in this",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/chart/financial-types/#candle", "aria-label": "Navigate to the documentation for Candle Chart in React Chart control" }, "documentation section"),
                    "."))));
    };
    Candle.prototype.axisRangeCalculated = function (args) {
        if (args.axis.name === 'primaryXAxis') {
            var lastPoint = args.axis.series[0].points[args.axis.series[0].points.length - 1].x;
            args.maximum = new Date(Number(lastPoint)).getTime() + 2500;
            var firstPoint = args.axis.series[0].points[0].x;
            args.minimum = new Date(Number(firstPoint)).getTime() + 500;
        }
    };
    ;
    Candle.prototype.load = function (args) {
        var selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).
            replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        setInterval(function () {
            var newData1 = [];
            pointAdded = true;
            for (var i = 0; i < args.chart.series[0].dataSource.length; i++) {
                newData1.push(Object.assign({}, args.chart.series[0].dataSource[i]));
            }
            if (newData1.length > 0) {
                var lastIndex = newData1.length - 1;
                var previousClose = newData1[lastIndex].close;
                newData1[lastIndex].close += (Math.random() < 0.5 ? 1 : -1) * Math.random() * 5;
                newData1[lastIndex].close = Math.min(Math.min(Math.max(newData1[lastIndex].close, newData1[lastIndex].low + 5), newData1[lastIndex].high - 5), newData1[lastIndex].open - 2);
                if (previousClose === newData1[lastIndex].close) {
                    newData1[lastIndex].close -= 1;
                }
            }
            if (incVal < 10) {
                if (args.chart.series.length > 0) {
                    args.chart.series[0].setData(newData1);
                    incVal++;
                }
            }
            else {
                var change = (Math.random() < 0.49 ? 1 : -1) * Math.random() * 10;
                value += change;
                if (value > 200) {
                    value = 200;
                }
                else if (value < 160) {
                    value = 160;
                }
                value += Math.random() * 0.1;
                var open_2 = value + Math.round(Math.random() * 12);
                var low = Math.min(value, open_2) - Math.round(Math.random() * 8);
                var high = Math.max(value, open_2) + Math.round(Math.random() * 15);
                if (args.chart.series.length > 0) {
                    args.chart.series[0].addPoint({ x: new Date(2000, 5, 2, 2, 0, updateVal), high: high, low: low, open: open_2, close: value });
                }
                incVal = 0;
                updateVal++;
            }
        }, 1000);
    };
    ;
    Candle.prototype.pointRender = function (args) {
        args.series.lastValueLabel.background = args.fill;
    };
    return Candle;
}(sample_base_1.SampleBase));
exports.Candle = Candle;
