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
exports.AccumulationLegendTemplate = void 0;
/**
 * Accumulation Chart Legend Template sample
 */
var React = require("react");
var ej2_react_charts_1 = require("@syncfusion/ej2-react-charts");
var ej2_base_1 = require("@syncfusion/ej2-base");
var sample_base_1 = require("../common/sample-base");
var theme_color_1 = require("./theme-color");
var SAMPLE_CSS = "\n  .control-fluid { padding: 0px !important; }\n";
var data = [
    { x: 'United States', y: 29.55, image: 'United States', text: ej2_base_1.Browser.isDevice ? 'USA: 29.55%' : 'United States: 29.55%', description: '13.4M barrels per day', tooltip: '13.4M' },
    { x: 'Saudi Arabia', y: 23.83, image: 'Saudi Arabia', text: ej2_base_1.Browser.isDevice ? 'SAU: 23.83%' : 'Saudi Arabia: 23.83%', description: '10.8M barrels per day', tooltip: '10.8M' },
    { x: 'Russia', y: 23.69, image: 'Russia', text: ej2_base_1.Browser.isDevice ? 'RUS: 23.69%' : 'Russia: 23.69%', description: '10.8M barrels per day', tooltip: '10.8M' },
    { x: 'Canada', y: 12.12, image: 'Canada', text: ej2_base_1.Browser.isDevice ? 'CAN: 12.12%' : 'Canada: 12.12%', description: '5.5M barrels per day', tooltip: '5.5M' },
    { x: 'China', y: 10.83, image: 'China', text: ej2_base_1.Browser.isDevice ? 'CHN: 10.83%' : 'China: 10.83%', description: '4.9M barrels per day', tooltip: '4.9M' }
];
var legendTemplate = '<div class="legend-template" style="display:flex; align-items:flex-start; gap:' + (ej2_base_1.Browser.isDevice ? '6px' : '8px') + '; opacity:1; max-width:' + (ej2_base_1.Browser.isDevice ? '160px' : '280px') + '; box-sizing:border-box;">' +
    '<img class="e-legend-img" src="" width="' + (ej2_base_1.Browser.isDevice ? '24' : '36') + '" height="' + (ej2_base_1.Browser.isDevice ? '24' : '36') + '" style="flex:0 0 ' + (ej2_base_1.Browser.isDevice ? '24px' : '36px') + '; margin-top:' + (ej2_base_1.Browser.isDevice ? '0px' : '2px') + ';" />' +
    '<div style="display:flex; flex-direction:column; min-width:0; text-align:left;">' +
    '<span class="e-legend-label" style="font-weight:600; font-size:' + (ej2_base_1.Browser.isDevice ? '10px' : '13px') + '; color:LABEL_COLOR; line-height:' + (ej2_base_1.Browser.isDevice ? '12px' : '18px') + '; white-space:normal; overflow-wrap:break-word; word-break:break-word; max-width:' + (ej2_base_1.Browser.isDevice ? '130px' : '220px') + ';"></span>' +
    '<span class="e-legend-desc" style="font-size:' + (ej2_base_1.Browser.isDevice ? '10px' : '12px') + '; margin-top:' + (ej2_base_1.Browser.isDevice ? '0px' : '2px') + '; line-height:' + (ej2_base_1.Browser.isDevice ? '12px' : '15px') + '; white-space:normal; overflow-wrap:break-word; word-break:break-word; max-width:' + (ej2_base_1.Browser.isDevice ? '130px' : '220px') + ';"></span>' +
    '</div>' +
    '</div>';
var AccumulationLegendTemplate = /** @class */ (function (_super) {
    __extends(AccumulationLegendTemplate, _super);
    function AccumulationLegendTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccumulationLegendTemplate.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("style", null, SAMPLE_CSS),
            React.createElement("div", { className: 'control-section', style: { textAlign: 'center' } },
                React.createElement(ej2_react_charts_1.AccumulationChartComponent, { style: { textAlign: 'center' }, id: 'accumulationLegend', ref: function (chart) { return _this.chartInstance = chart; }, title: 'Top 5 Oil Producing Countries (2023)', subTitle: 'Source: Wikipedia.org', titleStyle: {
                        position: 'Custom',
                        x: ej2_base_1.Browser.isDevice ? 150 : 383,
                        y: 22.75
                    }, tooltip: {
                        enable: true,
                        header: '<b>${point.x}</b>',
                        format: 'Production: <b>${point.tooltip}</b> barrels/day'
                    }, enableBorderOnMouseMove: false, legendRender: this.legendRender.bind(this), load: this.load.bind(this), loaded: this.onChartLoad.bind(this), legendSettings: {
                        visible: true,
                        width: ej2_base_1.Browser.isDevice ? '35%' : '20%',
                        position: 'Right',
                        itemPadding: 15,
                        template: legendTemplate
                    }, width: ej2_base_1.Browser.isDevice ? '100%' : '75%' },
                    React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.PieSeries, ej2_react_charts_1.AccumulationDataLabel, ej2_react_charts_1.AccumulationLegend, ej2_react_charts_1.AccumulationTooltip] }),
                    React.createElement(ej2_react_charts_1.AccumulationSeriesCollectionDirective, null,
                        React.createElement(ej2_react_charts_1.AccumulationSeriesDirective, { dataSource: data, xName: 'x', yName: 'y', tooltipMappingName: 'tooltip', border: { color: '#ffffff', width: 1 }, radius: ej2_base_1.Browser.isDevice ? '65%' : '70%', innerRadius: '0%', animation: { enable: false }, type: 'Pie', dataLabel: {
                                visible: true,
                                position: ej2_base_1.Browser.isDevice ? 'Inside' : 'Outside',
                                name: ej2_base_1.Browser.isDevice ? '' : 'text',
                                format: ej2_base_1.Browser.isDevice ? '{value}%' : '',
                                enableRotation: ej2_base_1.Browser.isDevice ? true : false,
                                font: { size: ej2_base_1.Browser.isDevice ? '8px' : '12px', fontWeight: '600' },
                                connectorStyle: { type: 'Line' }
                            } })))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates custom legend templates in a pie chart visualizing the world's top 5 oil-producing countries \u2014 United States, Saudi Arabia, Russia, Canada, and China. Each pie segment reflects the percentage share of production, and the legend displays country flags and daily output in millions of barrels.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "This sample uses the ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/legendSettings/#template", "aria-label": "Navigate to the documentation for template in legendSettings in the EJ2 Accumulation Chart control" },
                        React.createElement("code", null, "template")),
                    " property of",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/legendSettings", "aria-label": "Navigate to the documentation for LegendSettings in the EJ2 Accumulation Chart control" },
                        " ",
                        React.createElement("code", null, "legendSettings")),
                    " to fully customize legend items. The ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/iacclegendrendereventargs", "aria-label": "Navigate to the documentation for legendRender event in the EJ2 Accumulation Chart control" },
                        React.createElement("code", null, "legendRender")),
                    " event dynamically injects country-specific data \u2014 including flag images, color-matched labels, and production volumes \u2014 into the legend template at render time."),
                React.createElement("p", null,
                    React.createElement("b", null, "Injecting Module")),
                React.createElement("p", null,
                    "Accumulation Chart component features are segregated into individual feature-wise modules. To use the legend and tooltip, inject ",
                    React.createElement("code", null, "AccumulationLegend"),
                    " and ",
                    React.createElement("code", null, "AccumulationTooltip"),
                    " into ",
                    React.createElement("code", null, "services"),
                    "."),
                React.createElement("p", null,
                    "More information on legend customization in accumulation charts can be found in the ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/accumulation-chart/legend/", "aria-label": "Navigate to the documentation for Legend in TypeScript Accumulation Chart control" }, "documentation"),
                    "."))));
    };
    AccumulationLegendTemplate.prototype.legendRender = function (args) {
        var matched = data.find(function (d) { return d.x === args.text; });
        var desc = matched ? matched.description : '';
        var chart = this.chartInstance;
        var matchedPoint = chart && chart.series && chart.series[0]
            ? chart.series[0].points.find(function (p) { return p.x === args.text; })
            : null;
        var opacity = matchedPoint && !matchedPoint.visible ? '0.5' : '1';
        args.template = args.template
            .replace('opacity:1;', 'opacity:' + opacity + ';')
            .replace('LABEL_COLOR', args.fill)
            .replace('src=""', 'src="src/chart/images/' + args.text + '.png"')
            .replace('></span>', '>' + args.text + '</span>')
            .replace(/<span class="e-legend-desc"([^>]*)><\/span>/, '<span class="e-legend-desc"$1>' + desc + '</span>');
    };
    AccumulationLegendTemplate.prototype.onChartLoad = function (args) {
        document.getElementById('accumulationLegend').setAttribute('title', '');
    };
    ;
    AccumulationLegendTemplate.prototype.load = function (args) {
        (0, theme_color_1.loadAccumulationChartTheme)(args);
    };
    return AccumulationLegendTemplate;
}(sample_base_1.SampleBase));
exports.AccumulationLegendTemplate = AccumulationLegendTemplate;
exports.default = AccumulationLegendTemplate;
