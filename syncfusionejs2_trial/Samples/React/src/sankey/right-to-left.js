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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RightToLeft = void 0;
/** Right-to-Left sample for Sankey */
var React = require("react");
var ej2_react_charts_1 = require("@syncfusion/ej2-react-charts");
var sample_base_1 = require("../common/sample-base");
var theme_color_1 = require("./theme-color");
var base_1 = require("@syncfusion/ej2/base");
var SAMPLE_CSS = "\n  .control-fluid { padding: 0 !important; }\n  #sankey-right-to-left { text-align: center; }\n";
var nodes = [
    { id: 'Books' },
    { id: 'Clothing' },
    { id: 'Electronics' },
    { id: 'Furniture' },
    { id: 'Jewelry' },
    { id: 'Toys' },
    { id: 'Air' },
    { id: 'Ground' },
    { id: 'Sea' },
    { id: 'Asia' },
    { id: 'Europe' },
    { id: 'North America' },
    { id: 'South America' },
    { id: 'Delayed' },
    { id: 'Delivered' },
    { id: 'In Transit' }
];
var links = [
    { sourceId: 'Books', targetId: 'Air', value: 18 },
    { sourceId: 'Books', targetId: 'Ground', value: 12 },
    { sourceId: 'Clothing', targetId: 'Air', value: 25 },
    { sourceId: 'Clothing', targetId: 'Ground', value: 15 },
    { sourceId: 'Clothing', targetId: 'Sea', value: 20 },
    { sourceId: 'Electronics', targetId: 'Air', value: 35 },
    { sourceId: 'Electronics', targetId: 'Ground', value: 22 },
    { sourceId: 'Electronics', targetId: 'Sea', value: 18 },
    { sourceId: 'Furniture', targetId: 'Ground', value: 28 },
    { sourceId: 'Furniture', targetId: 'Sea', value: 25 },
    { sourceId: 'Jewelry', targetId: 'Air', value: 12 },
    { sourceId: 'Jewelry', targetId: 'Ground', value: 8 },
    { sourceId: 'Toys', targetId: 'Ground', value: 15 },
    { sourceId: 'Toys', targetId: 'Sea', value: 22 },
    { sourceId: 'Air', targetId: 'Asia', value: 40 },
    { sourceId: 'Air', targetId: 'Europe', value: 30 },
    { sourceId: 'Air', targetId: 'North America', value: 20 },
    { sourceId: 'Ground', targetId: 'Europe', value: 35 },
    { sourceId: 'Ground', targetId: 'North America', value: 30 },
    { sourceId: 'Ground', targetId: 'South America', value: 15 },
    { sourceId: 'Ground', targetId: 'Asia', value: 20 },
    { sourceId: 'Sea', targetId: 'Asia', value: 25 },
    { sourceId: 'Sea', targetId: 'Europe', value: 15 },
    { sourceId: 'Sea', targetId: 'North America', value: 30 },
    { sourceId: 'Sea', targetId: 'South America', value: 15 },
    { sourceId: 'Asia', targetId: 'Delayed', value: 35 },
    { sourceId: 'Asia', targetId: 'Delivered', value: 40 },
    { sourceId: 'Asia', targetId: 'In Transit', value: 10 },
    { sourceId: 'Europe', targetId: 'Delivered', value: 65 },
    { sourceId: 'Europe', targetId: 'In Transit', value: 15 },
    { sourceId: 'North America', targetId: 'Delivered', value: 50 },
    { sourceId: 'North America', targetId: 'In Transit', value: 30 },
    { sourceId: 'South America', targetId: 'Delayed', value: 10 },
    { sourceId: 'South America', targetId: 'In Transit', value: 20 }
];
var RightToLeft = /** @class */ (function (_super) {
    __extends(RightToLeft, _super);
    function RightToLeft() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onLoaded = function () {
            var element = document.getElementById('sankey-right-to-left');
            if (element)
                element.setAttribute('title', '');
        };
        _this.load = function (args) {
            (0, theme_color_1.loadSankeyChartTheme)(args);
        };
        return _this;
    }
    RightToLeft.prototype.render = function () {
        return (React.createElement("div", { className: "control-pane" },
            React.createElement("style", null, SAMPLE_CSS),
            React.createElement("div", { className: "control-section" },
                React.createElement(ej2_react_charts_1.SankeyComponent, { id: "sankey-right-to-left", width: "95%", height: "450", title: 'Supply Chain Management', subTitle: 'Source: OECD\u2011ITF Global Freight Data', enableRtl: true, orientation: "Horizontal", background: "transparent", margin: { left: 20, right: 20, top: 20, bottom: 20 }, border: { color: '#E0E0E0', width: 0 }, linkStyle: { opacity: 0.4, curvature: 0.5, colorType: 'Source' }, labelSettings: { visible: base_1.Browser.isDevice ? false : true }, tooltip: { enable: true, sankeyNodeTemplate: '${name}: ${value}k shipments', sankeyLinkTemplate: base_1.Browser.isDevice ? '${start.name}: ${start.out}k <br/> → ${target.name}: ${target.in}k shipments' : '${start.name}: ${start.out}k → ${target.name}: ${target.in}k shipments' }, legendSettings: { visible: true }, load: this.load, loaded: this.onLoaded },
                    React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.SankeyTooltip, ej2_react_charts_1.SankeyLegend, ej2_react_charts_1.SankeyHighlight, ej2_react_charts_1.SankeyExport] }),
                    React.createElement(ej2_react_charts_1.SankeyNodesCollectionDirective, null, nodes.map(function (node) { return (React.createElement(ej2_react_charts_1.SankeyNodeDirective, { key: node.id, id: node.id, color: node.color })); })),
                    React.createElement(ej2_react_charts_1.SankeyLinksCollectionDirective, null, links.map(function (link, i) { return (React.createElement(ej2_react_charts_1.SankeyLinkDirective, __assign({ key: "".concat(link.sourceId, "-").concat(link.targetId, "-").concat(i) }, link))); })))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "Explore supply chain flows with a right\u2011to\u2011left (RTL) Sankey chart using illustrative values in thousand shipments (k). It maps product categories to transport modes, world regions, and delivery status, with flow direction and labels aligned for RTL reading.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null, "This RTL Sankey visualizes shipments (k) from product categories through Air, Ground, and Sea to regions and final status (Delivered, Delayed, In Transit). Hover or tap nodes and links to see precise shipment counts; the layout supports right\u2011to\u2011left interfaces."),
                React.createElement("p", null,
                    React.createElement("strong", null, "Key features:")),
                React.createElement("ul", null,
                    React.createElement("li", null, "Right\u2011to\u2011left rendering for localized UIs"),
                    React.createElement("li", null, "End\u2011to\u2011end flow from category \u2192 mode \u2192 region \u2192 status"),
                    React.createElement("li", null, "Interactive tooltips showing values in thousand shipments")))));
    };
    return RightToLeft;
}(sample_base_1.SampleBase));
exports.RightToLeft = RightToLeft;
exports.default = RightToLeft;
