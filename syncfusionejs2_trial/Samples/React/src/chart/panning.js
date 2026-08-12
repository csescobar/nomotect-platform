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
exports.UpdateDataSource = void 0;
var React = require("react");
var ej2_react_charts_1 = require("@syncfusion/ej2-react-charts");
var ej2_base_1 = require("@syncfusion/ej2-base");
var sample_base_1 = require("../common/sample-base");
var SAMPLE_CSS = "\n#control-container {\n    padding: 0px !important;\n}\n\n#button-container {\n    padding: 5px;\n    width: 65%;\n    background-color: rgb(237, 236, 236);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-radius: 10px;\n}\n\n.custom-button {\n    flex-grow: 1;\n    flex-basis: 0;\n    height: 35%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border: none;\n    border-radius: 5px;\n    justify-content: center;\n    background-color: rgb(237, 236, 236);\n    cursor: pointer;\n    transition: background-color 0.3s, box-shadow 0.3s;\n    position: relative;\n}\n\n.custom-button:not(:last-child):not(.active)::after {\n    content: \"\";\n    position: absolute;\n    top: 50%;\n    right: 0;\n    transform: translateY(-50%);\n    width: 1px;\n    height: 80%;\n    background-color: rgba(0, 0, 0, 0.2);\n}\n\n.custom-button.no-line::after {\n    display: none;\n}\n\n.custom-button img {\n    width: 30px;\n    height: 30px;\n}\n\n.custom-button:hover {\n    background-color: #dbdada;\n}\n\n.day,\n.temp {\n    font-size: 13px;\n}\n\n.custom-button.active {\n    background-color: white !important;\n    box-shadow: 0 0 0 2px rgb(237, 236, 236);\n    z-index: 2;\n}\n";
var chartData = [
    { x: 1, xValue: '1 am', y: 20 }, { x: 2, xValue: '4 am', y: 20 }, { x: 3, xValue: '7 am', y: 20 },
    { x: 4, xValue: '10 am', y: 21 }, { x: 5, xValue: '1 pm', y: 21 }, { x: 6, xValue: '4 pm', y: 24 },
    { x: 7, xValue: '1 am', y: 19 }, { x: 8, xValue: '4 am', y: 20 }, { x: 9, xValue: '7 am', y: 20 },
    { x: 10, xValue: '10 am', y: 21 }, { x: 11, xValue: '1 pm', y: 24 }, { x: 12, xValue: '4 pm', y: 24 },
    { x: 13, xValue: '1 am', y: 21 }, { x: 14, xValue: '4 am', y: 21 }, { x: 15, xValue: '7 am', y: 21 },
    { x: 16, xValue: '10 am', y: 22 }, { x: 17, xValue: '1 pm', y: 23 }, { x: 18, xValue: '4 pm', y: 24 },
    { x: 19, xValue: '1 am', y: 20 }, { x: 20, xValue: '4 am', y: 19 }, { x: 21, xValue: '7 am', y: 19 },
    { x: 22, xValue: '10 am', y: 18 }, { x: 23, xValue: '1 pm', y: 19 }, { x: 24, xValue: '4 pm', y: 19 },
    { x: 25, xValue: '1 am', y: 16 }, { x: 26, xValue: '4 am', y: 15 }, { x: 27, xValue: '7 am', y: 14 },
    { x: 28, xValue: '10 am', y: 15 }, { x: 29, xValue: '1 pm', y: 16 }, { x: 30, xValue: '4 pm', y: 18 }
];
var UpdateDataSource = /** @class */ (function (_super) {
    __extends(UpdateDataSource, _super);
    function UpdateDataSource() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.chartInstance = null;
        _this.image = 'sunny_image';
        _this.count = 25;
        _this.day = 'Friday';
        return _this;
    }
    UpdateDataSource.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane', style: { textAlign: "center" } },
            React.createElement("style", null, SAMPLE_CSS),
            React.createElement("div", { className: 'control-section', style: { textAlign: "center" } },
                React.createElement(ej2_react_charts_1.ChartComponent, { id: 'container', style: { textAlign: "center" }, ref: function (chart) { return _this.chartInstance = chart; }, primaryXAxis: {
                        interval: 1,
                        zoomFactor: 0.2,
                        zoomPosition: 0,
                        majorGridLines: { width: 0 },
                        labelFormat: 'xValue',
                        enableAutoIntervalOnZooming: false,
                        labelPlacement: 'BetweenTicks'
                    }, primaryYAxis: {
                        majorGridLines: { width: 0 },
                        visible: false
                    }, titleStyle: { textAlignment: 'Far', size: '20px' }, chartArea: { border: { width: 0 } }, load: this.load.bind(this), height: '60%', width: ej2_base_1.Browser.isDevice ? '100%' : '75%', title: 'USA, Texas', axisLabelRender: this.axisLabelRender.bind(this), annotationRender: this.annotationRender.bind(this) },
                    React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.SplineAreaSeries, ej2_react_charts_1.DataLabel, ej2_react_charts_1.Category, ej2_react_charts_1.ChartAnnotation] }),
                    React.createElement(ej2_react_charts_1.AnnotationsDirective, null,
                        React.createElement(ej2_react_charts_1.AnnotationDirective, { content: '<div id="chart_image"><img src="src/chart/images/cloudy.png" alt="Cloud Picture" style="width: 41px; height: 41px"/></div>', coordinateUnits: 'Pixel', region: 'Chart', x: '10%', y: '15%' }),
                        React.createElement(ej2_react_charts_1.AnnotationDirective, { content: '<div id="days" style="font-size: 11px;">Friday, 01:00 am</div>', coordinateUnits: 'Pixel', region: 'Chart', x: '90%', y: '15%' })),
                    React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                        React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: chartData, xName: 'x', yName: 'y', opacity: 0.5, width: 2, border: { width: 2 }, type: 'SplineArea', marker: { visible: false, dataLabel: { visible: true } } })))),
            React.createElement("div", { id: "button-container", style: { textAlign: "center" } },
                React.createElement("button", { id: "friday", className: "custom-button", onClick: function () { return _this.updateChart('friday', 'sunny_image', 24, 'Friday', 0, 0.2); } },
                    React.createElement("div", { className: "day" }, "Fri"),
                    React.createElement("img", { src: "src/chart/images/sunny_image.png", alt: "Friday" }),
                    React.createElement("div", { className: "temp" }, "24\u00B0C - 19\u00B0C")),
                React.createElement("button", { id: "saturday", className: "custom-button", onClick: function () { return _this.updateChart('saturday', 'sunny_image', 20, 'Saturday', 0.1, 0.3); } },
                    React.createElement("div", { className: "day" }, "Sat"),
                    React.createElement("img", { src: "src/chart/images/sunny_image.png", alt: "Saturday" }),
                    React.createElement("div", { className: "temp" }, "20\u00B0C - 25\u00B0C")),
                React.createElement("button", { id: "sunday", className: "custom-button", onClick: function () { return _this.updateChart('sunday', 'cloudy', 18, 'Sunday', 0.2, 0.4); } },
                    React.createElement("div", { className: "day" }, "Sun"),
                    React.createElement("img", { src: "src/chart/images/cloudy.png", alt: "Sunday" }),
                    React.createElement("div", { className: "temp" }, "18\u00B0C - 24\u00B0C")),
                React.createElement("button", { id: "monday", className: "custom-button", onClick: function () { return _this.updateChart('monday', 'cloudy', 14, 'Monday', 0.3, 0.5); } },
                    React.createElement("div", { className: "day" }, "Mon"),
                    React.createElement("img", { src: "src/chart/images/cloudy.png", alt: "Monday" }),
                    React.createElement("div", { className: "temp" }, "14\u00B0C - 19\u00B0C")),
                React.createElement("button", { id: "tuesday", className: "custom-button", onClick: function () { return _this.updateChart('tuesday', 'rainy', 14, 'Tuesday', 0.4, 0.6); } },
                    React.createElement("div", { className: "day" }, "Tue"),
                    React.createElement("img", { src: "src/chart/images/rainy.png", alt: "Tuesday" }),
                    React.createElement("div", { className: "temp" }, "14\u00B0C - 19\u00B0C")))));
    };
    UpdateDataSource.prototype.updateChart = function (buttonId, img, tempCount, chartDay, zoomPos, zoomFactor) {
        this.image = img;
        this.count = tempCount;
        this.day = chartDay;
        if (this.chartInstance) {
            this.chartInstance.primaryXAxis.zoomPosition = zoomPos;
            this.chartInstance.primaryXAxis.zoomFactor = zoomFactor;
            this.chartInstance.refresh();
        }
        document.querySelectorAll('.custom-button').forEach(function (button) { return button.classList.remove('active'); });
        var selectedButton = document.getElementById(buttonId);
        selectedButton.classList.add('active');
    };
    UpdateDataSource.prototype.load = function (args) {
        var selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
    };
    UpdateDataSource.prototype.annotationRender = function (args) {
        if (args.content.id === 'container_Annotation_0') {
            args.content.innerHTML = "<div id=\"chart_cloud\" align=\"center\"><img src=\"src/chart/images/".concat(this.image, ".png\" alt=\"Cloud Picture\" style=\"width: 41px; height: 41px\"/><b align=\"center\" style=\"font-size: 23px\">").concat(this.count, "</b><b>\u00B0C | </b><b>\u00B0F</b></div>");
        }
        else {
            args.content.innerHTML = "<div id=\"days\" style=\"font-size: 8px;\">".concat(this.day, ", 01:00 am</div>");
        }
    };
    UpdateDataSource.prototype.axisLabelRender = function (args) {
        if (args.axis.name === 'primaryXAxis') {
            args.text = chartData[args.value - 1]['xValue'];
        }
    };
    return UpdateDataSource;
}(sample_base_1.SampleBase));
exports.UpdateDataSource = UpdateDataSource;
