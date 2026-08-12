"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Default sample for Sankey (functional) */
var React = require("react");
var ej2_react_charts_1 = require("@syncfusion/ej2-react-charts");
var sample_base_1 = require("../common/sample-base");
var theme_color_1 = require("./theme-color");
var base_1 = require("@syncfusion/ej2/base");
var SAMPLE_CSS = "\n  .control-fluid { padding: 0 !important; }\n  #sankey-container { text-align: center; }\n";
function Default() {
    React.useEffect(function () { (0, sample_base_1.updateSampleSection)(); }, []);
    var nodes = [
        { id: 'Electricity Generation', offset: -120 },
        { id: 'Residential', offset: 38 },
        { id: 'Commercial', offset: 36 },
        { id: 'Industrial', offset: 34 },
        { id: 'Transportation', offset: 32 },
        { id: 'Rejected Energy', offset: -40 },
        { id: 'Energy Services' },
        { id: 'Solar' },
        { id: 'Nuclear' },
        { id: 'Wind' },
        { id: 'Geothermal' },
        { id: 'Natural Gas' },
        { id: 'Coal' },
        { id: 'Biomass' },
        { id: 'Petroleum', offset: -10 }
    ];
    var links = [
        { sourceId: 'Solar', targetId: 'Electricity Generation', value: 454 },
        { sourceId: 'Nuclear', targetId: 'Electricity Generation', value: 185 },
        { sourceId: 'Wind', targetId: 'Electricity Generation', value: 47.8 },
        { sourceId: 'Geothermal', targetId: 'Electricity Generation', value: 40 },
        { sourceId: 'Natural Gas', targetId: 'Electricity Generation', value: 800 },
        { sourceId: 'Coal', targetId: 'Electricity Generation', value: 28.7 },
        { sourceId: 'Biomass', targetId: 'Electricity Generation', value: 50 },
        { sourceId: 'Electricity Generation', targetId: 'Residential', value: 182 },
        { sourceId: 'Natural Gas', targetId: 'Residential', value: 400 },
        { sourceId: 'Petroleum', targetId: 'Residential', value: 50 },
        { sourceId: 'Electricity Generation', targetId: 'Commercial', value: 351 },
        { sourceId: 'Natural Gas', targetId: 'Commercial', value: 300 },
        { sourceId: 'Electricity Generation', targetId: 'Industrial', value: 641 },
        { sourceId: 'Natural Gas', targetId: 'Industrial', value: 786 },
        { sourceId: 'Biomass', targetId: 'Industrial', value: 563 },
        { sourceId: 'Petroleum', targetId: 'Industrial', value: 300 },
        { sourceId: 'Electricity Generation', targetId: 'Transportation', value: 20 },
        { sourceId: 'Natural Gas', targetId: 'Transportation', value: 51 },
        { sourceId: 'Biomass', targetId: 'Transportation', value: 71 },
        { sourceId: 'Petroleum', targetId: 'Transportation', value: 2486 },
        { sourceId: 'Residential', targetId: 'Rejected Energy', value: 432 },
        { sourceId: 'Commercial', targetId: 'Rejected Energy', value: 351 },
        { sourceId: 'Industrial', targetId: 'Rejected Energy', value: 972 },
        { sourceId: 'Transportation', targetId: 'Rejected Energy', value: 1920 },
        { sourceId: 'Residential', targetId: 'Energy Services', value: 200 },
        { sourceId: 'Commercial', targetId: 'Energy Services', value: 300 },
        { sourceId: 'Industrial', targetId: 'Energy Services', value: 755 },
        { sourceId: 'Transportation', targetId: 'Energy Services', value: 637 }
    ];
    var onLoaded = function () {
        var element = document.getElementById('sankey-container');
        if (element)
            element.setAttribute('title', '');
    };
    return (React.createElement("div", { className: "control-pane" },
        React.createElement("style", null, SAMPLE_CSS),
        React.createElement("div", { className: "control-section" },
            React.createElement(ej2_react_charts_1.SankeyComponent, { id: "sankey-container", width: "90%", height: base_1.Browser.isDevice ? "600" : "450", title: 'California Energy Consumption in 2023', subTitle: 'Source: Lawrence Livermore National Laboratory', linkStyle: { opacity: 0.6, curvature: 0.55, colorType: 'Source' }, labelSettings: { visible: base_1.Browser.isDevice ? false : true }, tooltip: { enable: true, nodeTemplate: '${name}: ${value} TBtu', linkTemplate: base_1.Browser.isDevice ? '${start.name}: ${start.out} TBtu → <br/> ${target.name}: ${target.in} TBtu' : '${start.name}: ${start.out} TBtu → ${target.name}: ${target.in} TBtu' }, legendSettings: { visible: true, position: 'Bottom', itemPadding: 8 }, load: theme_color_1.loadSankeyChartTheme, loaded: onLoaded },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.SankeyTooltip, ej2_react_charts_1.SankeyLegend, ej2_react_charts_1.SankeyHighlight, ej2_react_charts_1.SankeyExport] }),
                React.createElement(ej2_react_charts_1.SankeyNodesCollectionDirective, null, nodes.map(function (node) { return (React.createElement(ej2_react_charts_1.SankeyNodeDirective, { key: node.id, id: node.id, offset: node.offset })); })),
                React.createElement(ej2_react_charts_1.SankeyLinksCollectionDirective, null, links.map(function (link, i) { return (React.createElement(ej2_react_charts_1.SankeyLinkDirective, { key: "".concat(link.sourceId, "-").concat(link.targetId, "-").concat(i), sourceId: link.sourceId, targetId: link.targetId, value: link.value })); })))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "Explore California\u2019s 2023 energy consumption in TBtu (Trillion British Thermal Units) with an interactive Sankey chart based on Lawrence Livermore National Laboratory data. Follow energy flows from generation sources to Residential, Commercial, Industrial, and Transportation sectors, highlighting useful energy services versus rejected energy.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null, "This Sankey chart illustrates energy flow across sources, carriers, and usage sectors, with labeled nodes and interactive tooltips that reveal detailed link and value information."),
            React.createElement("strong", null, "Key features:"),
            React.createElement("ul", null,
                React.createElement("li", null, "Configure nodes to represent energy sources and consumption sectors"),
                React.createElement("li", null, "Define links to trace energy flow from generation through end use"),
                React.createElement("li", null, "Enable tooltips for exploring individual flow values and relationships"),
                React.createElement("li", null, "Hover over nodes or links for deeper insight into the energy distribution pattern")))));
}
exports.default = Default;
