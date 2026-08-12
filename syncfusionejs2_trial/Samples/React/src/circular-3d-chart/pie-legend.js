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
exports.PieWithLegend = exports.data1 = void 0;
/**
 * Sample for Bar series
 */
var React = require("react");
var ej2_react_charts_1 = require("@syncfusion/ej2-react-charts");
var ej2_base_1 = require("@syncfusion/ej2-base");
var sample_base_1 = require("../common/sample-base");
exports.data1 = [{ 'x': 'Internet Explorer', y: 6.12, },
    { 'x': 'Chrome', y: 57.28, },
    { 'x': 'Safari', y: 4.73, },
    { 'x': 'QQ', y: 5.96, },
    { 'x': 'UC Browser', y: 4.37, },
    { 'x': 'Edge', y: 7.48, },
    { 'x': 'Others', y: 14.06, }];
var SAMPLE_CSS = "\n    .control-fluid {\n\t\tpadding: 0px !important;\n    }";
/**
 * Bar sample
 */
var PieWithLegend = /** @class */ (function (_super) {
    __extends(PieWithLegend, _super);
    function PieWithLegend() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PieWithLegend.prototype.render = function () {
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("style", null, SAMPLE_CSS),
            React.createElement("div", { className: 'control-section' },
                React.createElement("div", null,
                    React.createElement(ej2_react_charts_1.Circular3DComponent, { id: 'charts', style: { textAlign: "center" }, legendSettings: {
                            visible: true,
                            enableHighlight: true,
                            position: ej2_base_1.Browser.isDevice ? 'Bottom' : 'Right',
                        }, highlightMode: 'Point', tilt: -35, enableRotation: true, load: this.load.bind(this), title: 'Berlin 2023 Special Olympics Gold Medals', loaded: this.onChartLoad.bind(this), tooltip: { enable: true, format: '<b>${point.x}</b><br>Browser Share: <b>${point.y}%</b>', header: "" } },
                        React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.PieSeries3D, ej2_react_charts_1.Circular3DDataLabel, ej2_react_charts_1.Circular3DLegend, ej2_react_charts_1.Circular3DTooltip, ej2_react_charts_1.Circular3DHighlight] }),
                        React.createElement(ej2_react_charts_1.Circular3DSeriesCollectionDirective, null,
                            React.createElement(ej2_react_charts_1.Circular3DSeriesDirective, { dataSource: exports.data1, xName: 'x', yName: 'y', explode: true, innerRadius: '43%', explodeOffset: '10%', radius: '80%', dataLabel: {
                                    visible: true, position: 'Inside', template: '${point.y}%',
                                    font: { fontWeight: '600', color: '#ffffff' }, name: 'y', connectorStyle: { length: '20px' }
                                } }))))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample shows statistics on expenditure made in a year using the donut chart with legends shown at the right side of the chart.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "In this example, you can see how to render a doughnut chart with legends. You can use ",
                    React.createElement("code", null, "Radius"),
                    " and InnerRadius properties to render the doughnut."),
                React.createElement("p", null,
                    React.createElement("b", null, "Injecting Module")),
                React.createElement("p", null,
                    "Circular3D Chart component features are segregated into individual feature-wise modules. To use legend, we need to Inject ",
                    React.createElement("code", null, "Circular3DLegend"),
                    " module into ",
                    React.createElement("code", null, "services"),
                    "."))));
    };
    PieWithLegend.prototype.onChartLoad = function (args) {
        var chart = document.getElementById('charts');
        chart.setAttribute('title', '');
    };
    ;
    PieWithLegend.prototype.load = function (args) {
        var selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).
            replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast');
    };
    ;
    return PieWithLegend;
}(sample_base_1.SampleBase));
exports.PieWithLegend = PieWithLegend;
