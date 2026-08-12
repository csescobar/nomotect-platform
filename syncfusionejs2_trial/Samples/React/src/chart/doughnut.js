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
exports.AccumulationDoughnut = exports.data1 = void 0;
var React = require("react");
var sample_base_1 = require("../common/sample-base");
var ej2_react_charts_1 = require("@syncfusion/ej2-react-charts");
var ej2_base_1 = require("@syncfusion/ej2-base");
exports.data1 = [
    { x: 'Chrome', y: 63.5, text: 'Chrome: 63.5%' },
    { x: 'Safari', y: 25.0, text: 'Safari: 25.0%' },
    { x: 'Samsung Internet', y: 6.0, text: 'Samsung Internet: 6.0%' },
    { x: 'UC Browser', y: 2.5, text: 'UC Browser: 2.5%' },
    { x: 'Opera', y: 1.5, text: 'Opera: 1.5%' },
    { x: 'Others', y: 1.5, text: 'Others: 1.5%' }
];
var AccumulationDoughnut = /** @class */ (function (_super) {
    __extends(AccumulationDoughnut, _super);
    function AccumulationDoughnut() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccumulationDoughnut.prototype.render = function () {
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement(ej2_react_charts_1.AccumulationChartComponent, { id: "pie-chart", load: this.load.bind(this), loaded: this.onChartLoad.bind(this), enableBorderOnMouseMove: false, tooltip: { enable: true, format: '<b>${point.x}</b><br>Browser Share: <b>${point.y}%</b>', header: "", enableHighlight: true }, legendSettings: { visible: false } },
                    React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.PieSeries, ej2_react_charts_1.AccumulationDataLabel, ej2_react_charts_1.AccumulationAnnotation] }),
                    React.createElement(ej2_react_charts_1.AccumulationSeriesCollectionDirective, null,
                        React.createElement(ej2_react_charts_1.AccumulationSeriesDirective, { dataSource: exports.data1, xName: 'x', yName: 'y', name: 'Project', innerRadius: '65%', border: { color: '#ffffff', width: 1 }, explode: false, borderRadius: 3, startAngle: ej2_base_1.Browser.isDevice ? 70 : 60, dataLabel: { visible: true, position: 'Outside', name: 'text', font: { size: ej2_base_1.Browser.isDevice ? '8px' : '12px', fontWeight: '600' }, connectorStyle: { length: ej2_base_1.Browser.isDevice ? '10px' : '20px', type: 'Curve' } }, radius: ej2_base_1.Browser.isDevice ? '40%' : '70%' })),
                    React.createElement(ej2_react_charts_1.AccumulationAnnotationsDirective, null,
                        React.createElement(ej2_react_charts_1.AccumulationAnnotationDirective, { content: ej2_base_1.Browser.isDevice ? '<div style="font-size:7px;font-weight:600" id="annotation">Mobile<br> Browser <br> Statistics <br>2024</div>' : '<div style="font-size:15px;font-weight:600" id="annotation">Mobile<br> Browser <br> Statistics <br>2024</div>', region: 'Series', x: '50%', y: '50%' })))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This React donut chart example visualizes mobile browser statistics. Data labels and the center label provide information about the data in the series.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "In this example, you can see how to render and configure a donut chart. To create a donut in the pie series, we use the ",
                    React.createElement("code", null, "innerRadius"),
                    " property. The ",
                    React.createElement("code", null, "centerLabel"),
                    " property allows you to specify the default text that will be rendered in the center. You can also customize the text that will render when the mouse pointer is hovered over one of the donut slices using the ",
                    React.createElement("code", null, "hoverTextFormat"),
                    " property."),
                React.createElement("p", null, " Tooltip is enabled in this example. To see the tooltip in action, hover a point or tap a point in touch enabled devices."),
                React.createElement("p", null,
                    React.createElement("b", null, "Injecting Module")),
                React.createElement("p", null,
                    "The Charts component\u2019s features are segregated into individual feature modules. To use pie chart, we need to inject ",
                    React.createElement("code", null, "PieSeries"),
                    " module into ",
                    React.createElement("code", null, "services"),
                    "."),
                React.createElement("p", null,
                    "More information about the donut series can be found in this ",
                    React.createElement("a", { target: "_blank", href: "http://ej2.syncfusion.com/react/documentation/accumulation-chart/pie-dough-nut/", "aria-label": "Navigate to the documentation for Donut Chart in React accumulation Chart component" }, "documentation section"),
                    "."))));
    };
    AccumulationDoughnut.prototype.onChartLoad = function (args) {
        document.getElementById('pie-chart').setAttribute('title', '');
    };
    ;
    AccumulationDoughnut.prototype.load = function (args) {
        var selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
        args.accumulation.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").
            replace(/light/i, "Light").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
    };
    ;
    return AccumulationDoughnut;
}(sample_base_1.SampleBase));
exports.AccumulationDoughnut = AccumulationDoughnut;
