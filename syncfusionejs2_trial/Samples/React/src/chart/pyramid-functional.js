"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.data1 = void 0;
var React = require("react");
var react_1 = require("react");
var sample_base_1 = require("../common/sample-base");
var ej2_base_1 = require("@syncfusion/ej2-base");
var ej2_react_charts_1 = require("@syncfusion/ej2-react-charts");
var theme_color_1 = require("./theme-color");
exports.data1 = [
    { x: 'Oils', y: 2, text: 'Oils: 2%' },
    { x: 'Protein', y: 10, text: 'Protein: 10%' },
    { x: 'Fruits', y: 15, text: 'Fruits: 15%' },
    { x: 'Dairy', y: 23, text: 'Dairy: 23%' },
    { x: 'Vegetables', y: 23, text: 'Vegetables: 23%' },
    { x: 'Grains', y: 27, text: 'Grains: 27%' }
];
var SAMPLE_CSS = "\n    .control-fluid {\n        padding: 0px !important;\n    }\n    .pyramid-chart {\n        align :center\n    }";
var Pyramid = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var onChartLoad = function (args) {
        document.getElementById('pyramid-chart').setAttribute('title', '');
    };
    var load = function (args) {
        (0, theme_color_1.loadAccumulationChartTheme)(args);
    };
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("style", null, SAMPLE_CSS),
        React.createElement("div", { className: 'control-section' },
            React.createElement(ej2_react_charts_1.AccumulationChartComponent, { legendSettings: { visible: false }, id: 'pyramid-chart', ref: function (pyramid) { return pyramid = pyramid; }, title: 'Food Consumption Pyramid', subTitle: 'Source: wikipedia.org', load: load.bind(_this), tooltip: { enable: true, format: '${point.x}: <b>${point.y}% of Daily Intake </b>', header: '', enableHighlight: true }, loaded: onChartLoad.bind(_this) },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.AccumulationDataLabel, ej2_react_charts_1.AccumulationTooltip, ej2_react_charts_1.PyramidSeries, ej2_react_charts_1.AccumulationSelection, ej2_react_charts_1.AccumulationLegend] }),
                React.createElement(ej2_react_charts_1.AccumulationSeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.AccumulationSeriesDirective, { dataSource: exports.data1, xName: 'x', yName: 'y', name: 'Food', type: 'Pyramid', width: '45%', height: '80%', neckWidth: '15%', gapRatio: 0.03, explode: false, dataLabel: { visible: true, name: 'text', position: 'Outside', connectorStyle: { length: ej2_base_1.Browser.isDevice ? '10px' : '20px' }, font: { size: ej2_base_1.Browser.isDevice ? '7px' : '12px', fontWeight: '600' } } })))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This React Pyramid Chart visualizes food comparison data by using pyramid series.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null,
                "In this example, you can see how to render and configure a pyramid chart. This chart is shaped like a triangle, with lines dividing it into sections of varying widths. Depending on the Y coordinate, the width indicates a level of hierarchy among other categories. The ",
                React.createElement("code", null, "DataLabel"),
                "  represents individual data and its value."),
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
exports.default = Pyramid;
