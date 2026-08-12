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
exports.ChartLegendTemplate = void 0;
var React = require("react");
var ej2_react_charts_1 = require("@syncfusion/ej2-react-charts");
var ej2_base_1 = require("@syncfusion/ej2-base");
var sample_base_1 = require("../common/sample-base");
var theme_color_1 = require("./theme-color");
var MedalData = [
    { Country: 'Argentina', Gold: 22, Silver: 27, Bronze: 31 },
    { Country: 'Austria', Gold: 22, Silver: 35, Bronze: 44 },
    { Country: 'Ethiopia', Gold: 24, Silver: 16, Bronze: 22 },
    { Country: 'Iran', Gold: 27, Silver: 29, Bronze: 32 },
    { Country: 'India', Gold: 10, Silver: 10, Bronze: 21 }
];
var legendTemplate = '<div style="display:flex;align-items:center;gap:' + (ej2_base_1.Browser.isDevice ? '1px' : '8px') + ';opacity:1;">' +
    '<img src="" width="20" height="20" />' +
    '<span style="font-size:' + (ej2_base_1.Browser.isDevice ? '9px' : '14px') + ';"></span>' +
    '</div>';
var SAMPLE_CSS = "\n    .control-fluid { padding: 0px !important; }\n";
var ChartLegendTemplate = /** @class */ (function (_super) {
    __extends(ChartLegendTemplate, _super);
    function ChartLegendTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChartLegendTemplate.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("style", null, SAMPLE_CSS),
            React.createElement("div", { className: 'control-section' },
                React.createElement(ej2_react_charts_1.ChartComponent, { id: 'legendTemplate', ref: function (chart) { return _this.chartInstance = chart; }, style: { textAlign: 'center' }, primaryXAxis: {
                        valueType: 'Category',
                        labelPlacement: 'OnTicks',
                        edgeLabelPlacement: 'Shift',
                        majorGridLines: { width: 0 }
                    }, chartArea: { border: { width: 0 } }, primaryYAxis: {
                        interval: 10,
                        minimum: 0,
                        maximum: 50,
                        title: 'Medal Count',
                        lineStyle: { width: 0 },
                        majorTickLines: { width: 0 }
                    }, tooltip: {
                        enable: true,
                        header: '<b>${point.x}</b>',
                        format: '${series.name} Medals : <b>${point.y}</b>'
                    }, title: 'All-Time Summer Olympic Medal Count by Country', subTitle: 'Source: Wikipedia.org', legendSettings: {
                        visible: true,
                        position: 'Right',
                        template: legendTemplate
                    }, legendRender: this.legendRender.bind(this), load: this.load.bind(this), loaded: this.loaded.bind(this), width: ej2_base_1.Browser.isDevice ? '100%' : '75%' },
                    React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.ColumnSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Tooltip, ej2_react_charts_1.Legend] }),
                    React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                        React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: MedalData, xName: 'Country', yName: 'Gold', name: 'Gold', type: 'Column', columnSpacing: 0.1, animation: { enable: false } }),
                        React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: MedalData, xName: 'Country', yName: 'Silver', name: 'Silver', type: 'Column', columnSpacing: 0.1, animation: { enable: false } }),
                        React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: MedalData, xName: 'Country', yName: 'Bronze', name: 'Bronze', type: 'Column', columnSpacing: 0.1, animation: { enable: false } })))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates customizable legend templates using all-time Summer Olympic medal data. It displays Gold, Silver, and Bronze medal counts for five countries \u2014 Argentina, Austria, Ethiopia, Iran, and India. Each legend entry features a medal icon rendered through a custom legend template to enhance visual clarity and data interpretation.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "This sample shows how to render and configure a custom legend template in a Column chart. The legend items are customized using the ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/chart/legendSettings/#template", "aria-label": "Navigate to the documentation for template in LegendSettings in the EJ2 Chart control" },
                        React.createElement("code", null, "template")),
                    " property of",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/chart/legendSettings/", "aria-label": "Navigate to the documentation for LegendSettings in the EJ2 Chart control" },
                        " ",
                        React.createElement("code", null, "legendSettings")),
                    ", which allows embedding custom HTML content such as medal images and styled text into each legend item."),
                React.createElement("p", null,
                    "The ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/chart/#legendrender", "aria-label": "Navigate to the documentation for legendRender event in EJ2 Chart control" },
                        React.createElement("code", null, "legendRender")),
                    " event is used to dynamically update the template content for each series \u2014 setting the medal icon image and label text per series."),
                React.createElement("p", null,
                    React.createElement("code", null, "Tooltip"),
                    " is enabled in this example. To see a tooltip in action, hover over or tap on the chart."),
                React.createElement("p", null,
                    React.createElement("b", null, "Injecting Module")),
                React.createElement("p", null,
                    "Chart component features are segregated into individual feature-wise modules. To use column series, we need to inject ",
                    React.createElement("code", null, "ColumnSeries"),
                    ", ",
                    React.createElement("code", null, "Category"),
                    ", ",
                    React.createElement("code", null, "Tooltip"),
                    ", and ",
                    React.createElement("code", null, "Legend"),
                    " modules into ",
                    React.createElement("code", null, "services"),
                    "."),
                React.createElement("p", null,
                    "More information on chart legends can be found in the ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/chart/legend", "aria-label": "Navigate to the documentation for Legend in TypeScript Chart control" }, "documentation"),
                    "."))));
    };
    ChartLegendTemplate.prototype.legendRender = function (args) {
        var chart = this.chartInstance;
        var matchedSeries = chart && chart.series
            ? chart.series.find(function (s) { return s.name === args.text; })
            : null;
        var opacity = matchedSeries && !matchedSeries.visible ? '0.5' : '1';
        args.template = args.template
            .replace('opacity:1;', 'opacity:' + opacity + ';')
            .replace('src=""', 'src="src/chart/images/' + args.text.toLowerCase() + '-medal.png"')
            .replace('font-size:', 'color:' + args.fill + ';font-weight:bold;font-size:')
            .replace('></span>', '>' + args.text + '</span>');
    };
    ChartLegendTemplate.prototype.load = function (args) {
        (0, theme_color_1.loadChartTheme)(args);
    };
    ChartLegendTemplate.prototype.loaded = function (args) {
        var chart = document.getElementById('legendTemplate');
        chart.setAttribute('title', '');
    };
    ;
    return ChartLegendTemplate;
}(sample_base_1.SampleBase));
exports.ChartLegendTemplate = ChartLegendTemplate;
