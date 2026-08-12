"use strict";
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
/** Print & Export sample for Sankey */
var React = require("react");
var ej2_react_charts_1 = require("@syncfusion/ej2-react-charts");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var sample_base_1 = require("../common/sample-base");
var theme_color_1 = require("./theme-color");
var base_1 = require("@syncfusion/ej2/base");
var SAMPLE_CSS = "\n  .control-fluid { padding: 0 !important; }\n  #sankey-print-export { text-align: center; }\n\n  .e-export-icon::before { content: '\\e728'; }\n  .e-print-icon::before  { content: '\\e75d'; }\n  .e-view.tailwind .e-print-icon::before,\n  .e-view.tailwind-dark .e-print-icon::before,\n  .e-view.tailwind3 .e-print-icon::before,\n  .e-view.tailwind3-dark .e-print-icon::before { content: '\\e75d'; }\n  .e-view.tailwind3 .e-export-icon::before,\n  .e-view.tailwind3-dark .e-export-icon::before { content: '\\e7bf'; }\n  .e-view.fluent .e-export-icon::before,\n  .e-view.fluent-dark .e-export-icon::before,\n  .e-view.fluent2 .e-export-icon::before,\n  .e-view.fluent2-dark .e-export-icon::before,\n  .e-view.fluent2-highcontrast .e-export-icon::before,\n  .e-view.material3 .e-export-icon::before,\n  .e-view.material3-dark .e-export-icon::before,\n  .e-view.bootstrap5_3 .e-export-icon::before,\n  .e-view.bootstrap5_3-dark .e-export-icon::before { content: '\\e72e'; }\n  .e-view.fluent .e-print-icon::before,\n  .e-view.fluent-dark .e-print-icon::before,\n  .e-view.fluent2 .e-print-icon::before,\n  .e-view.fluent2-dark .e-print-icon::before,\n  .e-view.fluent2-highcontrast .e-print-icon::before,\n  .e-view.material3 .e-print-icon::before,\n  .e-view.material3-dark .e-print-icon::before,\n  .e-view.bootstrap5_3 .e-print-icon::before,\n  .e-view.bootstrap5_3-dark .e-print-icon::before { content: '\\e75d'; }\n\n  .chart-toolbar {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    gap: 10px;\n    padding: 6px 0;\n  }\n  .toolbar-btn {\n    display: inline-flex;\n    align-items: center;\n    gap: 6px;\n    border-radius: 4px;\n    font-weight: 600;\n    letter-spacing: .3px;\n    padding: 6px 14px;\n    cursor: pointer;\n    border: 1px solid transparent;\n    outline: none;\n    transition: all 0.2s ease;\n  }\n  .toolbar-btn--print {\n    background-color: #FFFFFF !important;\n    color: #000000DE !important;\n    border: 1px solid #D1D5DB !important;\n  }\n  .toolbar-btn--print:hover { background-color: #F3F4F6 !important; }\n  .toolbar-btn--print:focus,\n  .toolbar-btn--print:focus-visible {\n    outline: 2px solid #E3165B;\n    outline-offset: 2px;\n  }\n  .toolbar-btn--export {\n    background-color: #E3165B !important;\n    color: #FFFFFF !important;\n    border: 1px solid #E3165B !important;\n  }\n  .toolbar-btn--export:hover { background-color: #C4134F !important; }\n  .toolbar-btn--export:focus,\n  .toolbar-btn--export:focus-visible {\n    outline: 2px solid #E3165B;\n    outline-offset: 2px;\n  }\n\n  .chart-shell {\n    display: flex;\n    flex-direction: row;\n    align-items: stretch;\n    width: 100%;\n    overflow: hidden;\n    border: 1px solid #E5E7EB;\n    border-radius: 4px;\n  }\n  .chart-shell.mobile-panel-open .export-panel {\n    flex: 0 0 100% !important;\n    width: 100% !important;\n    border-left: none !important;\n    box-shadow: none !important;\n  }\n  .chart-host {\n    flex: 1 1 auto;\n    min-width: 0;\n    transition: flex-basis .25s ease-out;\n  }\n\n  .export-panel {\n    flex: 0 0 0px;\n    overflow: hidden;\n    background: transparent;\n    border-left: 0px solid #E5E7EB;\n    transition: flex-basis .25s ease-out, border-left .25s ease-out;\n    display: flex;\n    flex-direction: column;\n    box-sizing: border-box;\n  }\n  .with-panel .export-panel {\n    flex: 0 0 300px;\n    border-left: 1px solid #E5E7EB;\n    box-shadow: -2px 0 8px rgba(0,0,0,.07);\n    overflow: visible;\n  }\n\n  .panel-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 14px 16px 10px 16px;\n    border-bottom: 1px solid #E5E7EB;\n    white-space: nowrap;\n  }\n  .panel-header-left { display: flex; align-items: center; gap: 8px; }\n  .panel-header-icon { font-size: 16px; }\n  .panel-title { font-size: 15px; font-weight: 600; }\n  .panel-close {\n    background: transparent;\n    border: none;\n    cursor: pointer;\n    padding: 2px 4px;\n    color: #6B7280;\n    font-size: 16px;\n    display: flex;\n    align-items: center;\n    outline: none;\n    transition: all 0.2s ease;\n  }\n  .panel-close:hover { color: #111827; }\n  .panel-close:focus,\n  .panel-close:focus-visible {\n    outline: 2px solid #E3165B;\n    outline-offset: 2px;\n  }\n\n  .panel-body {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    padding: 16px 16px 0 16px;\n    white-space: nowrap;\n  }\n  .panel-label { font-size: 12px; margin-bottom: 2px; }\n\n  .panel-input {\n    width: 100%;\n    box-sizing: border-box;\n    border: none !important;\n    border-bottom: 1px solid #9CA3AF !important;\n    border-radius: 0 !important;\n    outline: none !important;\n    padding: 4px 0 6px 0;\n    background: transparent;\n    font-size: 14px;\n    color: inherit;\n  }\n  .panel-input:focus { border-bottom: 2px solid #E3165B !important; }\n\n  .export-panel .e-ddl.e-input-group,\n  .export-panel .e-ddl.e-input-group.e-control-wrapper {\n    border: none !important;\n    border-bottom: 1px solid #9CA3AF !important;\n    border-radius: 0 !important;\n    box-shadow: none !important;\n    background: transparent !important;\n  }\n  .export-panel .e-ddl.e-input-group:focus-within,\n  .export-panel .e-ddl.e-input-group.e-control-wrapper:focus-within {\n    border-bottom: 2px solid #E3165B !important;\n  }\n  .export-panel .e-input-group::before,\n  .export-panel .e-input-group::after { display: none !important; }\n\n  .panel-footer {\n    display: flex;\n    justify-content: space-between;\n    gap: 10px;\n    padding-top: 20px;\n    border-top: 0px !important;\n  }\n  .panel-action-btn {\n    flex: 1;\n    background: transparent !important;\n    border: none !important;\n    font-weight: 600;\n    font-size: 15px;\n    letter-spacing: .5px;\n    padding: 6px 0;\n    cursor: pointer;\n    border-radius: 0;\n    outline: none;\n    transition: all 0.2s ease;\n  }\n  .panel-action-btn:focus,\n  .panel-action-btn:focus-visible {\n    outline: 2px solid #E3165B;\n    outline-offset: 2px;\n  }\n  .btn-text {\n    padding: 0;\n    display: inline;\n    line-height: 20px; \n  }\n  .panel-action-btn--export { color: #E3165B !important; }\n  .panel-action-btn--export:hover { color: #C4134F !important; }\n  .panel-action-btn--cancel { color: #6B7280 !important; }\n  .panel-action-btn--cancel:hover { color: #111827 !important; }\n";
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
function PrintExport() {
    React.useEffect(function () { (0, sample_base_1.updateSampleSection)(); }, []);
    var sankeyRef = React.useRef(null);
    var formatRef = React.useRef(null);
    var chartShellRef = React.useRef(null);
    var chartHostRef = React.useRef(null);
    var exportPanelRef = React.useRef(null);
    var fileNameInputRef = React.useRef(null);
    var _a = React.useState('Sankey'), fileName = _a[0], setFileName = _a[1]; // default (Capital S)
    var _b = React.useState(false), isPanelOpen = _b[0], setIsPanelOpen = _b[1];
    var originalSvgWidthRef = React.useRef(null);
    var resizeObserverRef = React.useRef(null);
    var getSankeySvg = React.useCallback(function () {
        var _a;
        var byId = document.getElementById('sankey-print-export_svg');
        if (byId instanceof SVGSVGElement)
            return byId;
        var root = (_a = sankeyRef.current) === null || _a === void 0 ? void 0 : _a.element;
        if (root) {
            var inside = root.querySelector('svg');
            if (inside instanceof SVGSVGElement)
                return inside;
        }
        var bySelector = document.querySelector('svg#sankey-print-export_svg');
        if (bySelector instanceof SVGSVGElement)
            return bySelector;
        return null;
    }, []);
    var refreshChart = React.useCallback(function () {
        var _a;
        var sankey = sankeyRef.current;
        if (!sankey)
            return;
        var animation = sankey.animation;
        if (animation) {
            animation.enable = false;
        }
        (_a = sankey.refresh) === null || _a === void 0 ? void 0 : _a.call(sankey);
        if (animation) {
            animation.enable = true;
        }
    }, []);
    var handlePanelKeydown = React.useCallback(function (event) {
        if (event.key === 'Escape') {
            event.preventDefault();
            setIsPanelOpen(false);
        }
    }, []);
    var resizeSankeySvg = React.useCallback(function () {
        var svg = getSankeySvg();
        var host = chartHostRef.current;
        if (!svg || !host)
            return;
        var newWidth = host.offsetWidth;
        if (!newWidth)
            return;
        if (originalSvgWidthRef.current == null) {
            var widthAttribute = svg.getAttribute('width');
            originalSvgWidthRef.current = widthAttribute ? parseFloat(widthAttribute) : svg.getBoundingClientRect().width;
        }
        var heightAttribute = svg.getAttribute('height');
        var svgHeight = heightAttribute
            ? Math.max(1, parseFloat(heightAttribute))
            : Math.max(1, svg.getBoundingClientRect().height);
        svg.setAttribute('width', String(newWidth));
        svg.setAttribute('viewBox', "0 0 ".concat(newWidth, " ").concat(svgHeight));
        svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
        var sankeyHost = document.getElementById('sankey-print-export');
        if (sankeyHost)
            sankeyHost.style.width = "".concat(newWidth, "px");
    }, [getSankeySvg]);
    var onLoaded = React.useCallback(function () {
        var element = document.getElementById('sankey-print-export');
        if (element)
            element.setAttribute('title', '');
        setTimeout(resizeSankeySvg, 0);
    }, [resizeSankeySvg]);
    React.useEffect(function () {
        if (chartHostRef.current && 'ResizeObserver' in window) {
            var reSizeObserver_1 = new ResizeObserver(function () { return resizeSankeySvg(); });
            resizeObserverRef.current = reSizeObserver_1;
            reSizeObserver_1.observe(chartHostRef.current);
            return function () {
                reSizeObserver_1.disconnect();
                resizeObserverRef.current = null;
            };
        }
        return;
    }, [resizeSankeySvg]);
    React.useEffect(function () {
        var panel = exportPanelRef.current;
        if (!panel)
            return;
        if (isPanelOpen) {
            panel.removeAttribute('inert');
            document.addEventListener('keydown', handlePanelKeydown);
            requestAnimationFrame(function () {
                var _a;
                (_a = fileNameInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
            });
            setTimeout(function () {
                resizeSankeySvg();
                refreshChart();
            }, 250);
        }
        else {
            panel.setAttribute('inert', '');
            document.removeEventListener('keydown', handlePanelKeydown);
            var exportButton = document.querySelector('.toolbar-btn--export');
            exportButton === null || exportButton === void 0 ? void 0 : exportButton.focus();
            setTimeout(function () {
                resizeSankeySvg();
                refreshChart();
            }, 250);
        }
        return function () {
            document.removeEventListener('keydown', handlePanelKeydown);
        };
    }, [isPanelOpen, handlePanelKeydown, refreshChart, resizeSankeySvg]);
    var handleExport = React.useCallback(function () {
        var _a;
        var type = (((_a = formatRef.current) === null || _a === void 0 ? void 0 : _a.value) || 'JPEG');
        var safeName = (fileName || 'Sankey').trim();
        var doExport = function () {
            var _a, _b;
            var element = (_a = sankeyRef.current) === null || _a === void 0 ? void 0 : _a.element;
            var rect = element === null || element === void 0 ? void 0 : element.getBoundingClientRect();
            var scale = Math.max(2, Math.min(3, window.devicePixelRatio || 1));
            var exportW = rect ? Math.round(rect.width * scale) : undefined;
            var exportH = rect ? Math.round(rect.height * scale) : undefined;
            (_b = sankeyRef.current) === null || _b === void 0 ? void 0 : _b.export(type, safeName);
        };
        if (base_1.Browser.isDevice && isPanelOpen) {
            setIsPanelOpen(false);
            requestAnimationFrame(function () {
                resizeSankeySvg();
                doExport();
            });
        }
        else {
            resizeSankeySvg();
            doExport();
            setIsPanelOpen(false);
        }
    }, [fileName, isPanelOpen, resizeSankeySvg]);
    var handlePrint = React.useCallback(function () {
        var _a;
        (_a = sankeyRef.current) === null || _a === void 0 ? void 0 : _a.print();
    }, []);
    return (React.createElement("div", { className: "control-pane" },
        React.createElement("style", null, SAMPLE_CSS),
        React.createElement("div", { className: "chart-toolbar", role: "toolbar", "aria-label": "Chart actions" },
            React.createElement("button", { className: "toolbar-btn toolbar-btn--print", onClick: handlePrint, onKeyDown: function (e) {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        handlePrint();
                    }
                } },
                React.createElement("span", { className: "e-icons e-print-icon" }),
                React.createElement("span", { className: "btn-text" }, "PRINT")),
            React.createElement("button", { className: "toolbar-btn toolbar-btn--export", onClick: function () { return setIsPanelOpen(true); }, onKeyDown: function (e) {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        setIsPanelOpen(true);
                    }
                } },
                React.createElement("span", { className: "e-icons e-export-icon" }),
                React.createElement("span", { className: "btn-text" }, "EXPORT"))),
        React.createElement("div", { id: "chartShell", ref: chartShellRef, className: "chart-shell ".concat(isPanelOpen ? 'with-panel' : '', " ").concat(base_1.Browser.isDevice && isPanelOpen ? 'mobile-panel-open' : '') },
            React.createElement("div", { id: "chartHost", ref: chartHostRef, className: "chart-host", style: { display: base_1.Browser.isDevice && isPanelOpen ? 'none' : undefined } },
                React.createElement(ej2_react_charts_1.SankeyComponent, { id: "sankey-print-export", ref: sankeyRef, width: "95%", height: "450", title: "Supply Chain Management", subTitle: "Source: OECD\u2011ITF Global Freight Data", enableRtl: false, orientation: "Horizontal", background: "transparent", margin: { left: 20, right: 20, top: 20, bottom: 20 }, border: { color: '#E0E0E0', width: 0 }, linkStyle: { opacity: 0.4, curvature: 0.5, colorType: 'Source' }, labelSettings: { visible: base_1.Browser.isDevice ? false : true }, tooltip: {
                        enable: true,
                        nodeTemplate: '${name}: ${value}k shipments',
                        linkTemplate: base_1.Browser.isDevice ? '${start.name}: ${start.out}k → <br/> ${target.name}: ${target.in}k shipments' : '${start.name}: ${start.out}k → ${target.name}: ${target.in}k shipments'
                    }, legendSettings: { visible: true }, load: theme_color_1.loadSankeyChartTheme, loaded: onLoaded },
                    React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.SankeyTooltip, ej2_react_charts_1.SankeyLegend, ej2_react_charts_1.SankeyHighlight, ej2_react_charts_1.SankeyExport] }),
                    React.createElement(ej2_react_charts_1.SankeyNodesCollectionDirective, null, nodes.map(function (node) { return React.createElement(ej2_react_charts_1.SankeyNodeDirective, { key: node.id, id: node.id }); })),
                    React.createElement(ej2_react_charts_1.SankeyLinksCollectionDirective, null, links.map(function (link, i) { return (React.createElement(ej2_react_charts_1.SankeyLinkDirective, __assign({ key: "".concat(link.sourceId, "-").concat(link.targetId, "-").concat(i) }, link))); })))),
            React.createElement("aside", { id: "exportPanel", ref: exportPanelRef, className: "export-panel", "aria-hidden": !isPanelOpen },
                React.createElement("div", { className: "panel-header" },
                    React.createElement("span", { className: "panel-header-left" },
                        React.createElement("span", { className: "e-icons e-export-icon panel-header-icon" }),
                        React.createElement("span", { className: "panel-title" }, "Export")),
                    React.createElement("button", { className: "panel-close", "aria-label": "Close export panel", onClick: function () { return setIsPanelOpen(false); }, onKeyDown: function (e) {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                setIsPanelOpen(false);
                            }
                        } },
                        React.createElement("span", { className: "e-icons e-close" }))),
                React.createElement("div", { className: "panel-body" },
                    React.createElement("label", { className: "panel-label", htmlFor: "expFileName" }, "File Name:"),
                    React.createElement("input", { id: "expFileName", ref: fileNameInputRef, className: "panel-input", type: "text", value: fileName, placeholder: "Input Text", onChange: function (element) { return setFileName(element.target.value); }, onKeyDown: function (e) {
                            if (e.key === 'Escape') {
                                e.preventDefault();
                                setIsPanelOpen(false);
                            }
                        } }),
                    React.createElement("label", { className: "panel-label", htmlFor: "fileTypeDropdown" }, "File Type:"),
                    React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { id: "fileTypeDropdown", ref: formatRef, dataSource: ['JPEG', 'PNG', 'SVG', 'PDF'], value: 'JPEG', width: '100%' }),
                    React.createElement("div", { className: "panel-footer", style: { background: 'transparent' } },
                        React.createElement("button", { className: "panel-action-btn panel-action-btn--export", onClick: handleExport, onKeyDown: function (e) {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    handleExport();
                                }
                            } }, "EXPORT"),
                        React.createElement("button", { className: "panel-action-btn panel-action-btn--cancel", onClick: function () { return setIsPanelOpen(false); }, onKeyDown: function (e) {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    setIsPanelOpen(false);
                                }
                            } }, "CANCEL"))))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "Explore supply chain flows with a Sankey chart using illustrative values in thousand shipments (k). It maps product categories to transport modes, world regions, and delivery status. Use built\u2011in print and export options (JPEG, PNG, SVG, PDF) to share or download the chart.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null, "This Sankey visualizes shipments (k) from product categories through Air, Ground, and Sea to regions and final status (Delivered, Delayed, In Transit). Hover or tap nodes and links to see precise shipment counts."),
            React.createElement("p", null,
                React.createElement("strong", null, "Key features:")),
            React.createElement("ul", null,
                React.createElement("li", null, "End\u2011to\u2011end flow from category \u2192 mode \u2192 region \u2192 status"),
                React.createElement("li", null, "Export to JPEG, PNG, SVG, or PDF, and print directly"),
                React.createElement("li", null, "Interactive tooltips showing values in thousand shipments")))));
}
exports.default = PrintExport;
