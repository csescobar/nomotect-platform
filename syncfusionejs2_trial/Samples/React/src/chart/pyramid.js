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
exports.Pyramid = exports.data1 = void 0;
var React = require("react");
var sample_base_1 = require("../common/sample-base");
var ej2_react_charts_1 = require("@syncfusion/ej2-react-charts");
var base_1 = require("@syncfusion/ej2/base");
exports.data1 = [
    { x: 'Oils', y: 2, text: 'Oils: 2%' },
    { x: 'Protein', y: 10, text: 'Protein: 10%' },
    { x: 'Fruits', y: 15, text: 'Fruits: 15%' },
    { x: 'Dairy', y: 23, text: 'Dairy: 23%' },
    { x: 'Vegetables', y: 23, text: 'Vegetables: 23%' },
    { x: 'Grains', y: 27, text: 'Grains: 27%' }
];
var SAMPLE_CSS = "\n    .control-fluid {\n        padding: 0px !important;\n    }\n        .pyramid-chart {\n            align :center\n        }";
var Pyramid = /** @class */ (function (_super) {
    __extends(Pyramid, _super);
    function Pyramid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pyramid.prototype.render = function () {
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("style", null, SAMPLE_CSS),
            React.createElement("div", { className: 'control-section' },
                React.createElement(ej2_react_charts_1.AccumulationChartComponent, { legendSettings: { visible: false }, id: 'pyramid-chart', ref: function (pyramid) { return pyramid = pyramid; }, title: 'Food Consumption Pyramid', subTitle: 'Source: wikipedia.org', load: this.load.bind(this), tooltip: { enable: true, format: '${point.x}: <b>${point.y}% of Daily Intake </b>', header: '', enableHighlight: true }, loaded: this.onChartLoad.bind(this) },
                    React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.AccumulationDataLabel, ej2_react_charts_1.AccumulationTooltip, ej2_react_charts_1.PyramidSeries, ej2_react_charts_1.AccumulationSelection, ej2_react_charts_1.AccumulationLegend] }),
                    React.createElement(ej2_react_charts_1.AccumulationSeriesCollectionDirective, null,
                        React.createElement(ej2_react_charts_1.AccumulationSeriesDirective, { dataSource: exports.data1, xName: 'x', yName: 'y', name: 'Food', type: 'Pyramid', width: '45%', height: '80%', neckWidth: '15%', gapRatio: 0.03, explode: false, dataLabel: { visible: true, name: 'text', position: 'Outside', connectorStyle: { length: base_1.Browser.isDevice ? '10px' : '20px' }, font: { size: base_1.Browser.isDevice ? '7px' : '12px', fontWeight: '600' } } })))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This React Pyramid Chart visualizes food comparison data by using pyramid series.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "In this example, you can see how to render and configure a pyramid chart. This chart is shaped like a triangle, with lines dividing it into sections of varying widths. Depending on the Y coordinate, the width indicates a level of hierarchy among other categories. The ",
                    React.createElement("code", null, "DataLabel"),
                    " represents individual data and its value."),
                React.createElement("p", null,
                    React.createElement("code", null, "Tooltips"),
                    " are enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices."),
                React.createElement("p", null,
                    React.createElement("b", null, "Injecting Module")),
                React.createElement("p", null,
                    "Chart component features are segregated into individual feature-wise modules. To use Pyramid series, we need to inject ",
                    React.createElement("code", null, "PyramidSeries"),
                    " module into ",
                    React.createElement("code", null, "services"),
                    "."),
                React.createElement("p", null,
                    "More information on the pyramid series can be found in this ",
                    React.createElement("a", { target: "_blank", href: "http://ej2.syncfusion.com/react/documentation/accumulation-chart/pyramid/", "aria-label": "Navigate to the documentation for Pyramid in React Accumulation Chart component" }, "documentation section"),
                    "."))));
    };
    Pyramid.prototype.onChartLoad = function (args) {
        document.getElementById('pyramid-chart').setAttribute('title', '');
    };
    ;
    Pyramid.prototype.load = function (args) {
        var selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
        args.accumulation.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
    };
    ;
    return Pyramid;
}(sample_base_1.SampleBase));
exports.Pyramid = Pyramid;
