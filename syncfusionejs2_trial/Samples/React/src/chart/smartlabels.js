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
exports.SmartLabels = exports.data1 = void 0;
var React = require("react");
var sample_base_1 = require("../common/sample-base");
var ej2_react_charts_1 = require("@syncfusion/ej2-react-charts");
var ej2_base_1 = require("@syncfusion/ej2-base");
var theme_color_1 = require("./theme-color");
exports.data1 = [
    { x: 'USA', y: 40, text: ej2_base_1.Browser.isDevice ? 'USA: 40' : 'United States of America: 40' },
    { x: 'China', y: 40, text: 'China: 40' },
    { x: 'Japan', y: 20, text: 'Japan: 20' },
    { x: 'Australia', y: 18, text: ej2_base_1.Browser.isDevice ? 'AU: 18' : 'Australia: 18' },
    { x: 'France', y: 16, text: 'France: 16' },
    { x: 'Netherlands', y: 15, text: ej2_base_1.Browser.isDevice ? 'NL: 15' : 'Netherlands: 15' },
    { x: 'Great Britain', y: 14, text: ej2_base_1.Browser.isDevice ? 'GB: 14' : 'Great Britain: 14' },
    { x: 'South Korea', y: 13, text: ej2_base_1.Browser.isDevice ? 'SK: 13' : 'South Korea: 13' },
    { x: 'Germany', y: 12, text: ej2_base_1.Browser.isDevice ? 'GE: 12' : 'Germany: 12' },
    { x: 'Italy', y: 12, text: 'Italy: 12' },
    { x: 'NewZealand', y: 10, text: ej2_base_1.Browser.isDevice ? 'NZ: 10' : 'New Zealand: 10' },
    { x: 'Canada', y: 9, text: ej2_base_1.Browser.isDevice ? 'CA: 9' : 'Canada: 9' },
    { x: 'Uzbekistan', y: 8, text: ej2_base_1.Browser.isDevice ? 'UZB: 8' : 'Uzbekistan: 8' },
    { x: 'Hungary', y: 6, text: ej2_base_1.Browser.isDevice ? 'HU: 6' : 'Hungary: 6' },
    { x: 'Kenya', y: 4, text: ej2_base_1.Browser.isDevice ? 'KE: 4' : 'Kenya: 4' },
    { x: 'Georgia', y: 3, text: ej2_base_1.Browser.isDevice ? 'GE: 3' : 'Georgia: 3' },
    { x: 'North Korea', y: 2, text: ej2_base_1.Browser.isDevice ? 'NK: 2' : 'North Korea: 2' },
    { x: 'South Africa', y: 2, text: ej2_base_1.Browser.isDevice ? 'HK: 2' : 'South Africa: 2' }
];
var SmartLabels = /** @class */ (function (_super) {
    __extends(SmartLabels, _super);
    function SmartLabels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SmartLabels.prototype.render = function () {
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement(ej2_react_charts_1.AccumulationChartComponent, { id: 'pie-chart', title: 'Summer Olympics 2024 - Gold Medals', subTitle: 'Source: wikipedia.org', tooltip: { enable: true, format: '<b>${point.x}</b><br> Gold Medals: <b>${point.y}</b>', enableHighlight: true, header: "" }, load: this.load.bind(this), enableBorderOnMouseMove: false, enableSmartLabels: true, legendSettings: { visible: false }, loaded: this.onChartLoad.bind(this) },
                    React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.AccumulationDataLabel, ej2_react_charts_1.AccumulationTooltip, ej2_react_charts_1.PieSeries] }),
                    React.createElement(ej2_react_charts_1.AccumulationSeriesCollectionDirective, null,
                        React.createElement(ej2_react_charts_1.AccumulationSeriesDirective, { dataSource: exports.data1, xName: 'x', yName: 'y', name: 'RIO', startAngle: 60, innerRadius: '0%', dataLabel: { visible: true, textWrap: ej2_base_1.Browser.isDevice ? 'Wrap' : 'Normal', position: 'Outside', connectorStyle: { length: ej2_base_1.Browser.isDevice ? '2px' : '20px', type: 'Curve' }, name: 'text', font: { size: ej2_base_1.Browser.isDevice ? '7px' : '12px', fontWeight: '600' } }, radius: ej2_base_1.Browser.isDevice ? '40%' : '65%' })))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample shows the gold medal count scored by each country at the summer olympics 2024 games using smart labels on the chart.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "In this example, you can see how the labels can be arranged smartly without overlapping. You can use the ",
                    React.createElement("code", null, "EnableSmartLabels"),
                    " property to enable or disable the support."),
                React.createElement("p", null,
                    React.createElement("code", null, "Tooltips"),
                    " are enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices."),
                React.createElement("p", { style: { fontWeight: 500 } }, " Injecting Module "),
                React.createElement("p", null,
                    " Accumulation chart component features are segregated into individual feature-wise modules. To use DataLabel, we need to inject ",
                    React.createElement("code", null, "AccumulationDataLabel"),
                    " into ",
                    React.createElement("code", null, "services"),
                    "."),
                React.createElement("p", null,
                    "More information on the smart labels can be found in this ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/accumulation-chart/data-label#smart-labels", "aria-label": "Navigate to the documentation for Smart Labels in React Accumulation Chart component" }, "documentation section"),
                    "."))));
    };
    SmartLabels.prototype.onChartLoad = function (args) {
        document.getElementById('pie-chart').setAttribute('title', '');
    };
    ;
    SmartLabels.prototype.load = function (args) {
        (0, theme_color_1.loadAccumulationChartTheme)(args);
    };
    ;
    return SmartLabels;
}(sample_base_1.SampleBase));
exports.SmartLabels = SmartLabels;
