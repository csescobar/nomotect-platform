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
exports.Drilldown = void 0;
var React = require("react");
var sample_base_1 = require("../common/sample-base");
var ej2_base_1 = require("@syncfusion/ej2-base");
var ej2_react_charts_1 = require("@syncfusion/ej2-react-charts");
var theme_color_1 = require("./theme-color");
var SAMPLE_CSS = "\n    #category:hover {\n        cursor: pointer;\n    }";
var Drilldown = /** @class */ (function (_super) {
    __extends(Drilldown, _super);
    function Drilldown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.data = [
            { x: 'Asia-Pacific', y: 45 }, { x: 'Europe', y: 25 }, { x: 'North America', y: 20 }, { x: 'Latin America', y: 7 },
            { x: 'Middle East & Africa', y: 3 }
        ];
        _this.AsiaPacific = [
            { x: 'China', y: 66.7 }, { x: 'Japan', y: 17.8 }, { x: 'India', y: 11.1 }, { x: 'South Korea', y: 3.3 }, { x: 'Others', y: 1.1 }
        ];
        _this.Europe = [
            { x: 'Germany', y: 32 }, { x: 'UK', y: 20 }, { x: 'France', y: 16 }, { x: 'Italy', y: 12 }, { x: 'Spain', y: 8 }, { x: 'Others', y: 12 }
        ];
        _this.NorthAmerica = [
            { x: 'USA', y: 75 }, { x: 'Canada', y: 15 }, { x: 'Mexico', y: 10 }
        ];
        _this.LatinAmerica = [
            { x: 'Brazil', y: 57.1 }, { x: 'Argentina', y: 21.4 }, { x: 'Chile', y: 14.3 }, { x: 'Others', y: 7.1 }
        ];
        _this.MiddleEastAfrica = [
            { x: 'South Africa', y: 33.3 }, { x: 'Egypt', y: 26.7 }, { x: 'UAE', y: 23.3 }, { x: 'Others', y: 16.7 }
        ];
        _this.dataLabel = {
            visible: true, position: 'Outside', enableRotation: false, connectorStyle: { type: 'Curve', length: ej2_base_1.Browser.isDevice ? '5%' : '10%' }, font: { fontWeight: '600', color: 'black', size: ej2_base_1.Browser.isDevice ? '6px' : '12px' }
        };
        _this.title = 'Automobile Sales by Region - 2023';
        _this.isparent = true;
        _this.visibility = 'hidden';
        return _this;
    }
    Drilldown.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("style", null, SAMPLE_CSS),
            React.createElement("div", { className: 'control-section' },
                React.createElement("div", { id: "link" },
                    React.createElement("a", { id: "category", onClick: this.onClick.bind(this), style: { visibility: this.visibility, display: 'inline-block' } }, "Sales by Category"),
                    React.createElement("p", { style: { visibility: this.visibility, display: 'inline-block' }, id: "symbol" }, "\u00A0>>\u00A0"),
                    React.createElement("p", { id: "text", style: { visibility: this.visibility, display: 'inline-block' } })),
                React.createElement(ej2_react_charts_1.AccumulationChartComponent, { id: 'pie-chart', ref: function (pie) { return _this.pie = pie; }, title: this.title, enableSmartLabels: false, subTitle: 'Source: wikipedia.org', legendSettings: { visible: false }, enableBorderOnMouseMove: false, tooltip: { enable: false, format: '${point.x} <br> ${point.y} %' }, chartMouseClick: this.onChartMouseClick.bind(this), textRender: this.onTextRender.bind(this), load: this.load.bind(this), loaded: this.onChartLoad.bind(this) },
                    React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.AccumulationDataLabel, ej2_react_charts_1.AccumulationTooltip, ej2_react_charts_1.PieSeries, ej2_react_charts_1.AccumulationAnnotation] }),
                    React.createElement(ej2_react_charts_1.AccumulationSeriesCollectionDirective, null,
                        React.createElement(ej2_react_charts_1.AccumulationSeriesDirective, { dataSource: this.data, xName: 'x', yName: 'y', name: 'Automobile Sales', dataLabel: this.dataLabel, radius: '70%', startAngle: -30, endAngle: 330, borderRadius: 3, border: { color: '#ffffff', width: 1 }, explode: false })))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates a drill down chart with a pie for automobiles sales by region. Selecting a category navigates to its sub-categories, where sales are further broken down by country.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    " In this example, you can see how to achieve the drilldown concept using a pie chart. Automobile sales are shown in different categories. By clicking each category, you can navigate to the next level, which shows the sales by categories made by each company. ",
                    React.createElement("code", null, "Datalabels"),
                    " are used in this sample to show information about the data points."),
                React.createElement("p", { style: { fontWeight: 500 } }, "Injecting Module"),
                React.createElement("p", null,
                    " Accumulation chart component features are segregated into individual feature-wise modules. To use datalabel, we need to inject DataLabel module ",
                    React.createElement("code", null, "AccumulationDataLabel"),
                    " into services "),
                React.createElement("p", null,
                    "More information on the pie series can be found in this \u00A0",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/accumulation-chart/pie-dough-nut/#pie-chart", "aria-label": "Navigate to the documentation for Pie Chart in React Accumulation Chart component" }, "documentation section"),
                    "."))));
    };
    Drilldown.prototype.onTextRender = function (args) {
        args.text = args.point.x + ' ' + args.point.y + '%';
    };
    Drilldown.prototype.onChartMouseClick = function (args) {
        var index = (0, ej2_react_charts_1.indexFinder)(args.target);
        if (this.isparent && document.getElementById('pie-chart_Series_' + index.series + '_Point_' + index.point)) {
            this.isparent = false;
            switch (index.point) {
                case 0:
                    this.pie.series[0].dataSource = this.AsiaPacific;
                    this.pie.title = 'Automobile Sales in the Asia-Pacific region';
                    document.getElementById('text').innerHTML = 'Asia-Pacific';
                    break;
                case 1:
                    this.pie.series[0].dataSource = this.Europe;
                    this.pie.title = 'Automobile Sales in the Europe region';
                    document.getElementById('text').innerHTML = 'Europe';
                    break;
                case 2:
                    this.pie.series[0].dataSource = this.NorthAmerica;
                    this.pie.title = 'Automobile Sales in the North America region';
                    document.getElementById('text').innerHTML = 'North America';
                    break;
                case 3:
                    this.pie.series[0].dataSource = this.LatinAmerica;
                    this.pie.title = 'Automobile Sales in the Latin America region';
                    document.getElementById('text').innerHTML = 'Latin America';
                    break;
                case 4:
                    this.pie.series[0].dataSource = this.MiddleEastAfrica;
                    this.pie.title = 'Automobile Sales in the Middle East & Africa region';
                    document.getElementById('text').innerHTML = 'Middle East & Africa';
                    break;
            }
            if (this.pie.theme === 'HighContrast' || this.pie.theme.indexOf('Dark') > -1) {
                this.pie.annotations = [{
                        content: '<div id= "white" style="cursor:pointer;padding:3px;width:30px; height:30px;"><img src="./src/chart/images/white.png" id="back" alt="White Icon"/><div>', region: 'Series', x: '50%', y: '50%'
                    }];
            }
            else {
                this.pie.annotations = [{
                        content: '<div id="back" style="cursor:pointer; padding: 3px; width: 30px; height: 30px;">' +
                            '<img src="./src/chart/images/back.png" id="imgback" alt="Back Icon"/>', region: 'Series', x: '50%', y: '50%'
                    }];
            }
            this.pie.series[0].innerRadius = '40%';
            this.pie.series[0].radius = '80%';
            this.pie.series[0].explode = false;
            this.pie.series[0].animation.enable = false;
            this.pie.series[0].dataLabel.connectorStyle.length = ej2_base_1.Browser.isDevice ? '5%' : '10%';
            this.pie.series[0].dataLabel.position = ej2_base_1.Browser.isDevice ? 'Inside' : 'Outside';
            this.pie.series[0].dataLabel.enableRotation = ej2_base_1.Browser.isDevice ? true : false;
            this.pie.series[0].dataLabel.font.color = '';
            this.pie.legendSettings.visible = false;
            this.pie.visibleSeries[0].explodeIndex = null;
            this.pie.enableSmartLabels = true;
            this.pie.refresh();
            this.visibility = 'visible';
            document.getElementById('category').style.visibility = 'visible';
            document.getElementById('symbol').style.visibility = 'visible';
            document.getElementById('text').style.visibility = 'visible';
        }
        if (args.target.indexOf('back') > -1) {
            this.hide(document.getElementById(args.target));
        }
    };
    Drilldown.prototype.onClick = function (e) {
        this.hide(e.target);
    };
    Drilldown.prototype.hide = function (target) {
        this.pie.series[0].dataSource = this.data;
        this.pie.series[0].innerRadius = '0%';
        this.pie.series[0].radius = '70%';
        this.pie.series[0].animation.enable = false;
        this.isparent = true;
        this.pie.series[0].explode = false;
        this.pie.annotations = [];
        this.pie.annotationModule['annotations'] = [];
        this.pie.series[0].dataLabel = this.dataLabel;
        this.pie.title = this.title;
        this.pie.legendSettings.visible = false;
        this.pie.enableSmartLabels = true;
        this.pie.refresh();
        target.style.visibility = 'hidden';
        this.visibility = 'hidden';
        document.getElementById('category').style.visibility = 'hidden';
        document.getElementById('symbol').style.visibility = 'hidden';
        document.getElementById('text').style.visibility = 'hidden';
    };
    Drilldown.prototype.onChartLoad = function (args) {
        document.getElementById('pie-chart').setAttribute('title', '');
    };
    Drilldown.prototype.load = function (args) {
        var selectedTheme = (0, theme_color_1.loadAccumulationChartTheme)(args);
        if (selectedTheme.indexOf('HighContrast') || selectedTheme.indexOf('Dark') > -1) {
            args.accumulation.series[0].dataLabel.font.color = "white";
            if (args.accumulation.annotations[0] && !this.isparent) {
                args.accumulation.annotations[0].content = '<div id= "white" style="cursor:pointer;padding:3px;width:30px; height:30px;"><img src="./src/chart/images/white.png" id="back" alt="White Icon"/><div>';
            }
        }
    };
    return Drilldown;
}(sample_base_1.SampleBase));
exports.Drilldown = Drilldown;
