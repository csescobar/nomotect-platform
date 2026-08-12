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
exports.Grouping = exports.data1 = void 0;
var React = require("react");
var sample_base_1 = require("../common/sample-base");
var property_pane_1 = require("../common/property-pane");
var ej2_react_charts_1 = require("@syncfusion/ej2-react-charts");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var base_1 = require("@syncfusion/ej2/base");
exports.data1 = [
    { x: 'China', y: 40, text: 'China: 40' },
    { x: 'Japan', y: 20, text: base_1.Browser.isDevice ? 'Japan:<br> 20' : 'Japan: 20' },
    { x: 'Australia', y: 18, text: base_1.Browser.isDevice ? 'Australia:<br> 18' : 'Australia: 18' },
    { x: 'France', y: 16, text: 'France: 16' },
    { x: 'Netherlands', y: 15, text: 'Netherlands: 15' },
    { x: 'Great Britain', y: 14, text: 'Great Britain: 14' },
    { x: 'South Korea', y: 13, text: 'South Korea: 13' },
    { x: 'Germany', y: 12, text: base_1.Browser.isDevice ? 'Germany:<br> 12' : 'Germany: 12' },
    { x: 'Italy', y: 12, text: base_1.Browser.isDevice ? 'Italy:<br> 12' : 'Italy: 12' },
    { x: 'Canada', y: 9, text: base_1.Browser.isDevice ? 'CA: 9' : 'Canada: 9' },
    { x: 'Hungary', y: 6, text: base_1.Browser.isDevice ? 'HU: 6' : 'Hungary: 6' },
    { x: 'Spain', y: 5, text: 'Spain: 5' },
    { x: 'Kenya', y: 4, text: 'Kenya: 4' },
    { x: 'Brazil', y: 3, text: 'Brazil: 3' }
];
var Grouping = /** @class */ (function (_super) {
    __extends(Grouping, _super);
    function Grouping() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.radius = base_1.Browser.isDevice ? '40%' : '55%';
        _this.droplist = [
            { value: 'Point' },
            { value: 'Value' }
        ];
        return _this;
    }
    Grouping.prototype.change = function () {
        this.pie.series[0].groupMode = this.dropElement.value;
        var currentValue = this.dropElement.value === 'Point' ? 9 : 8;
        this.pie.series[0].groupTo = currentValue.toString();
        this.pie.series[0].animation.enable = false;
        document.getElementById('clubtext').innerHTML = currentValue.toString();
        this.slider.value = currentValue.toString();
        this.pie.removeSvg();
        this.pie.refreshSeries();
        this.pie.refreshChart();
    };
    ;
    Grouping.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section row' },
                React.createElement("div", { className: 'col-lg-9' },
                    React.createElement(ej2_react_charts_1.AccumulationChartComponent, { id: 'pie-chart', ref: function (pie) { return _this.pie = pie; }, title: 'Summer Olympic 2024 - Gold Medals', subTitle: 'Source: wikipedia.org', load: this.load.bind(this), tooltip: { enable: true, header: "", format: "<b>${point.x}</b><br> Gold Medals: <b>${point.y}</b>", enableHighlight: true }, legendSettings: { visible: false }, enableSmartLabels: true, loaded: this.onChartLoad.bind(this), enableBorderOnMouseMove: false },
                        React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.AccumulationLegend, ej2_react_charts_1.PieSeries, ej2_react_charts_1.AccumulationTooltip, ej2_react_charts_1.AccumulationDataLabel] }),
                        React.createElement(ej2_react_charts_1.AccumulationSeriesCollectionDirective, null,
                            React.createElement(ej2_react_charts_1.AccumulationSeriesDirective, { dataSource: exports.data1, xName: 'x', yName: 'y', name: 'Summer Olympics', animation: { enable: true }, explode: true, radius: this.radius, groupTo: '9', groupMode: 'Point', startAngle: -20, endAngle: 340, innerRadius: '0%', borderRadius: 3, border: { width: 1, color: '#ffffff' }, dataLabel: { visible: true, name: 'text', position: 'Outside', connectorStyle: { type: 'Curve', length: base_1.Browser.isDevice ? '10px' : '20px' }, font: { size: base_1.Browser.isDevice ? '8px' : '13px', fontWeight: '600' } } })))),
                React.createElement("div", { className: 'col-lg-3 property-section' },
                    React.createElement(property_pane_1.PropertyPane, { title: 'Properties' },
                        React.createElement("table", { id: 'property', title: 'Properties', className: 'property-panel-table', style: { width: '100%' } },
                            React.createElement("tbody", null,
                                React.createElement("tr", { style: { height: '50px' } },
                                    React.createElement("td", { style: { width: '50%' } },
                                        React.createElement("div", null, "Mode: ")),
                                    React.createElement("td", { style: { padding: 10, width: '50%' } },
                                        React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { width: 120, id: "modes", change: this.change.bind(this), ref: function (d) { return _this.dropElement = d; }, dataSource: this.droplist, fields: { text: 'value', value: 'value' }, value: "Point" }))),
                                React.createElement("tr", { style: { height: '50px' } },
                                    React.createElement("td", { style: { width: '60%' } },
                                        React.createElement("div", { id: "groupValue" },
                                            "Group To:",
                                            React.createElement("p", { id: "clubtext", style: { fontWeight: 'normal' } }, "9"))),
                                    React.createElement("td", { style: { width: '40%' } },
                                        React.createElement("div", null,
                                            React.createElement("input", { type: "range", name: "clubvalue", onChange: this.onClubvalue.bind(this), ref: function (slider) { return _this.slider = slider; }, defaultValue: "9", min: "0", max: "27", id: "clubvalue", style: { marginLeft: '-5px' }, "aria-labelledby": "Slider" }))))))))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample shows the gold medal count scored by each country at the summer olympic 2024 games, along with the pie series grouping functionality.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "In this example, you can see how to group points based on count and values. The slice can be grouped based on the number of points by specifying the ",
                    React.createElement("code", null, "GroupMode"),
                    " to Point. For example, if the ",
                    React.createElement("code", null, "GroupTo"),
                    " property is set to 10, the chart will display the first 10 points and the remaining entries from the collection will be grouped as a single point. The slice can also be grouped based on values by specifying the ",
                    React.createElement("code", null, "GroupMode"),
                    " to Value. For example, if the ",
                    React.createElement("code", null, "GroupTo"),
                    " is set to 10, the first 10 points with a lower value will be grouped together and shown as a single point while the others as a slice."),
                React.createElement("p", null,
                    " A ",
                    React.createElement("code", null, "Tooltip"),
                    " is enabled in this example. To see the tooltip in action, hover over a point or tap on a point in touch-enabled devices."),
                React.createElement("p", null,
                    "More information on the grouping in pie series can be found in this ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/accumulation-chart/grouping", "aria-label": "Navigate to the documentation for Grouping in React Accumulation Chart component" }, "documentation section"),
                    "."))));
    };
    Grouping.prototype.onChartLoad = function (args) {
        document.getElementById('pie-chart').setAttribute('title', '');
    };
    ;
    Grouping.prototype.onClubvalue = function (e) {
        var clubvalue = document.getElementById('clubvalue').value;
        this.pie.series[0].groupTo = clubvalue;
        this.pie.series[0].animation.enable = false;
        document.getElementById('clubtext').innerHTML = clubvalue;
        this.pie.removeSvg();
        this.pie.refreshSeries();
        this.pie.refreshChart();
    };
    ;
    Grouping.prototype.load = function (args) {
        var selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
        args.accumulation.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast');
    };
    ;
    return Grouping;
}(sample_base_1.SampleBase));
exports.Grouping = Grouping;
