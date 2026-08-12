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
exports.Orientation = void 0;
/** Orientation sample for Sankey  */
var React = require("react");
var ej2_react_charts_1 = require("@syncfusion/ej2-react-charts");
var sample_base_1 = require("../common/sample-base");
var theme_color_1 = require("./theme-color");
var base_1 = require("@syncfusion/ej2/base");
var SAMPLE_CSS = "\n  .control-fluid { padding: 0 !important; }\n  #sankey-orientation { text-align: center; }\n";
var nodes = [
    { id: 'Transportation' },
    { id: 'Industry' },
    { id: 'Commercial' },
    { id: 'Residential' },
    { id: 'Agriculture' },
    { id: 'Road (Cars/Trucks)' },
    { id: 'Aviation & Other Transport' },
    { id: 'Direct Emissions' },
    { id: 'Indirect Electricity Use' },
    { id: 'Atmosphere (Gross Emissions)' }
];
var links = [
    { sourceId: 'Transportation', targetId: 'Road (Cars/Trucks)', value: 1482 },
    { sourceId: 'Transportation', targetId: 'Aviation & Other Transport', value: 326 },
    { sourceId: 'Industry', targetId: 'Direct Emissions', value: 1416 },
    { sourceId: 'Industry', targetId: 'Indirect Electricity Use', value: 457 },
    { sourceId: 'Commercial', targetId: 'Indirect Electricity Use', value: 600 },
    { sourceId: 'Residential', targetId: 'Indirect Electricity Use', value: 500 },
    { sourceId: 'Agriculture', targetId: 'Direct Emissions', value: 664 },
    { sourceId: 'Road (Cars/Trucks)', targetId: 'Atmosphere (Gross Emissions)', value: 1482 },
    { sourceId: 'Aviation & Other Transport', targetId: 'Atmosphere (Gross Emissions)', value: 326 },
    { sourceId: 'Direct Emissions', targetId: 'Atmosphere (Gross Emissions)', value: 2080 },
    { sourceId: 'Indirect Electricity Use', targetId: 'Atmosphere (Gross Emissions)', value: 1557 }
];
var Orientation = /** @class */ (function (_super) {
    __extends(Orientation, _super);
    function Orientation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onLoaded = function () {
            var element = document.getElementById('sankey-orientation');
            if (element)
                element.setAttribute('title', '');
        };
        _this.load = function (args) {
            (0, theme_color_1.loadSankeyChartTheme)(args);
        };
        return _this;
    }
    Orientation.prototype.render = function () {
        return (React.createElement("div", { className: "control-pane" },
            React.createElement("style", null, SAMPLE_CSS),
            React.createElement("div", { className: "control-section" },
                React.createElement(ej2_react_charts_1.SankeyComponent, { id: "sankey-orientation", width: "90%", height: "650", title: base_1.Browser.isDevice ? 'U.S. Greenhouse Gas Emissions' : 'U.S. Greenhouse Gas Emissions by Economic Sector (2022)', subTitle: 'Source: EPA 2022 GHG Inventory', orientation: "Vertical", linkStyle: { opacity: 0.5, curvature: 0.55, colorType: 'Source' }, nodeStyle: { width: 30, padding: 8, opacity: 1, stroke: 'transparent' }, labelSettings: { visible: base_1.Browser.isDevice ? false : true }, legendSettings: { visible: base_1.Browser.isDevice ? false : true, position: 'Right', margin: { left: 100 } }, tooltip: { enable: true, nodeTemplate: '${name}: ${value} MMT CO₂e', linkTemplate: base_1.Browser.isDevice ? '${start.name}: ${start.out} MMT CO₂e → <br/> ${target.name}: ${target.in} MMT CO₂e' : '${start.name}: ${start.out} MMT CO₂e → ${target.name}: ${target.in} MMT CO₂e' }, load: this.load, loaded: this.onLoaded },
                    React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.SankeyTooltip, ej2_react_charts_1.SankeyLegend, ej2_react_charts_1.SankeyHighlight, ej2_react_charts_1.SankeyExport] }),
                    React.createElement(ej2_react_charts_1.SankeyNodesCollectionDirective, null, nodes.map(function (node) { return (React.createElement(ej2_react_charts_1.SankeyNodeDirective, { key: node.id, id: node.id, color: node.color })); })),
                    React.createElement(ej2_react_charts_1.SankeyLinksCollectionDirective, null, links.map(function (link, i) { return (React.createElement(ej2_react_charts_1.SankeyLinkDirective, { key: "".concat(link.sourceId, "-").concat(link.targetId, "-").concat(i), sourceId: link.sourceId, targetId: link.targetId, value: link.value })); })))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "Explore U.S. greenhouse gas emissions by economic sector (2022) in a vertical Sankey chart measured in MMT CO\u2082e (million metric tons of CO\u2082 equivalent). Trace top\u2011to\u2011bottom flows from sectors\u2014Transportation, Industry, Commercial, Residential, and Agriculture\u2014through direct and indirect electricity use to total atmospheric emissions.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null, "This vertical Sankey chart visualizes U.S. GHG emissions in MMT CO\u2082e, showing how sector sources split into road, aviation, direct emissions, and indirect electricity use before reaching total atmospheric emissions. Hover or tap nodes and links to see precise MMT CO\u2082e values and relationships."),
                React.createElement("p", null,
                    React.createElement("strong", null, "Key features:")),
                React.createElement("ul", null,
                    React.createElement("li", null, "Break down emissions by sector and pathway (direct vs. indirect electricity)"),
                    React.createElement("li", null, "Follow top\u2011to\u2011bottom flows to the atmosphere for clear attribution"),
                    React.createElement("li", null, "Interactive tooltips reveal exact MMT CO\u2082e values per node and link")))));
    };
    return Orientation;
}(sample_base_1.SampleBase));
exports.Orientation = Orientation;
exports.default = Orientation;
