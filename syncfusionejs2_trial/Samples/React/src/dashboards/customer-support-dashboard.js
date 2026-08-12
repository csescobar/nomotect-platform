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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerSupportDashboard = exports.items = void 0;
var React = require("react");
var sample_base_1 = require("../common/sample-base");
var CustomerSupportData = require("./customer-support-dashboard.json");
var ej2_react_navigations_1 = require("@syncfusion/ej2-react-navigations");
var ej2_react_layouts_1 = require("@syncfusion/ej2-react-layouts");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var ej2_react_calendars_1 = require("@syncfusion/ej2-react-calendars");
require("./customer-support-dashboard.css");
var ej2_react_charts_1 = require("@syncfusion/ej2-react-charts");
var ej2_react_circulargauge_1 = require("@syncfusion/ej2-react-circulargauge");
var ej2_react_grids_1 = require("@syncfusion/ej2-react-grids");
var ej2_react_popups_1 = require("@syncfusion/ej2-react-popups");
require("./dashboard-bold-icon.css");
require("./dashboard-light-icon.css");
var SupportData = CustomerSupportData;
exports.items = [
    { id: 'support', text: 'Support Traffic', iconCss: 'e-icons e-chart' },
    { id: 'monitoring', text: 'Support Monitoring', iconCss: 'e-icons e-agenda-date-range' },
    { id: 'satisfaction', text: 'Customer Satisfaction', iconCss: 'e-icons e-people' },
];
var SLA_THRESHOLDS = {
    responseHours: 4,
    resolutionHours: 48,
};
var CustomerSupportDashboard = /** @class */ (function (_super) {
    __extends(CustomerSupportDashboard, _super);
    function CustomerSupportDashboard(props) {
        var _this = _super.call(this, props) || this;
        _this.cellSpacing = [10, 10];
        _this.yrStart2025 = new Date(2025, 0, 1, 0, 0, 0, 0);
        _this.yrEnd2025 = new Date(2025, 11, 31, 23, 59, 59, 999);
        _this.TOOLBAR_HEIGHT = 50;
        _this.DOCK_SIZE = 60;
        _this.OPEN_WIDTH = 240;
        _this.dateRangeRef = React.createRef();
        _this.menuToggleIntent = false;
        // Replace your existing flattenTickets with this:
        _this.flattenTickets = function (data) {
            var flattened = [];
            // Guard: data must be a plain object
            if (!data || typeof data !== 'object')
                return flattened;
            for (var _i = 0, _a = Object.keys(data); _i < _a.length; _i++) {
                var m = _a[_i];
                var monthVal = data[m];
                if (Array.isArray(monthVal)) {
                    flattened.push.apply(flattened, monthVal);
                    continue;
                }
                if (monthVal && typeof monthVal === 'object') {
                    // Handle possible nested shapes e.g. { "January": { tickets: Ticket[] } }
                    var candidates = ['tickets', 'Tickets', 'data', 'items'];
                    for (var _b = 0, candidates_1 = candidates; _b < candidates_1.length; _b++) {
                        var key = candidates_1[_b];
                        var maybe = monthVal[key];
                        if (Array.isArray(maybe)) {
                            flattened.push.apply(flattened, maybe);
                            break;
                        }
                    }
                    continue;
                }
            }
            return flattened;
        };
        _this.getAllTickets = function () {
            return _this.allTicketsFlat;
        };
        _this.resizeTimer = null;
        _this.listenersAttached = false;
        _this.refreshCurrent = function () {
            if (_this.resizeTimer)
                clearTimeout(_this.resizeTimer);
            _this.resizeTimer = setTimeout(function () {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
                var id = _this.state.selectedId;
                switch (id) {
                    case 'support':
                        (_a = _this.trafficRef.current) === null || _a === void 0 ? void 0 : _a.refresh();
                        (_b = _this.pieRef.current) === null || _b === void 0 ? void 0 : _b.refresh();
                        (_c = _this.barRef.current) === null || _c === void 0 ? void 0 : _c.refresh();
                        (_d = _this.comboRef.current) === null || _d === void 0 ? void 0 : _d.refresh();
                        (_e = _this.timeRef.current) === null || _e === void 0 ? void 0 : _e.refresh();
                        break;
                    case 'monitoring':
                        (_f = _this.monitoringRef.current) === null || _f === void 0 ? void 0 : _f.refresh();
                        (_g = _this.slaComplianceRef.current) === null || _g === void 0 ? void 0 : _g.refresh();
                        (_h = _this.breachBreakRef.current) === null || _h === void 0 ? void 0 : _h.refresh();
                        (_j = _this.monTotalsRef.current) === null || _j === void 0 ? void 0 : _j.refresh();
                        (_k = _this.monTimeRef.current) === null || _k === void 0 ? void 0 : _k.refresh();
                        break;
                    case 'satisfaction':
                        (_l = _this.csatRef.current) === null || _l === void 0 ? void 0 : _l.refresh();
                        (_m = _this.csatGaugeRef.current) === null || _m === void 0 ? void 0 : _m.refresh();
                        (_o = _this.surveyDonutRef.current) === null || _o === void 0 ? void 0 : _o.refresh();
                        (_p = _this.surveyGridRef.current) === null || _p === void 0 ? void 0 : _p.refresh();
                        break;
                }
            }, 500);
        };
        _this.attachListenersOnce = function () {
            if (_this.listenersAttached)
                return;
            var onResize = function () { return _this.refreshCurrent(); };
            var onToggle = function () { return _this.refreshCurrent(); };
            window.addEventListener('resize', onResize);
            window.addEventListener('sidebar-toggled', onToggle);
            _this.listenersAttached = true;
        };
        _this.onTrafficCreated = function () {
            _this.attachListenersOnce();
            setTimeout(function () { var _a; (_a = _this.trafficRef.current) === null || _a === void 0 ? void 0 : _a.refresh(); }, 500);
        };
        _this.onMonitoringCreated = function () {
            _this.attachListenersOnce();
            setTimeout(function () { var _a; (_a = _this.monitoringRef.current) === null || _a === void 0 ? void 0 : _a.refresh(); }, 500);
        };
        _this.onCsatCreated = function () {
            _this.attachListenersOnce();
            setTimeout(function () { var _a; (_a = _this.csatRef.current) === null || _a === void 0 ? void 0 : _a.refresh(); }, 500);
        };
        _this.handleNavClick = function (id) {
            _this.setState({ selectedId: id });
        };
        _this.getPieData = function (by) {
            var _a;
            // base counts
            var data = _this.groupCount(by);
            // Merge Reopen into Open when grouping by Status
            if (by === 'Status') {
                var acc = new Map();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var _b = data_1[_i], x = _b.x, y = _b.y;
                    var key = /re\s*-?\s*open/i.test(x) ? 'Open' : x; // Reopen/Re-open -> Open
                    acc.set(key, ((_a = acc.get(key)) !== null && _a !== void 0 ? _a : 0) + (y !== null && y !== void 0 ? y : 0));
                }
                data = Array.from(acc.entries())
                    .map(function (_a) {
                    var x = _a[0], y = _a[1];
                    return ({ x: x, y: y });
                })
                    .sort(function (a, b) { return b.y - a.y; });
            }
            // Format legend as "Label (count)"
            var colors = ['#42C2FF', '#1363DF', '#1F4690', '#E8AA42', '#6643B5', '#AD6C80'];
            return data.map(function (d, i) { return ({
                // keep original for reference if needed
                original: d.x,
                x: "".concat(d.x, " (").concat(d.y.toLocaleString(), ")"),
                y: d.y,
                color: colors[i % colors.length]
            }); });
        };
        _this.getBarData = function (by) {
            var rawData = _this.groupCount(by);
            var modernColors = ['#1363DF'];
            return rawData.map(function (item, index) { return (__assign(__assign({}, item), { color: modernColors[index % modernColors.length] })); });
        };
        // Replace your existing getComboData with this version
        _this.getComboData = function (by) {
            // existing aggregation
            var raw = _this.groupCreatedClosed(by);
            return raw.map(function (d) { return (__assign({}, d)); });
        };
        _this.getTimeData = function (grain) { return _this.groupByTime(grain); };
        /* ----------------- Per-panel “local state” (no React setState) ----------------- */
        _this.pieGroupBy = 'Status';
        _this.barGroupBy = 'Type of Request';
        _this.comboGroupBy = 'Type of Request';
        _this.timeGrain = 'Hour';
        // Monitoring (dashboard2) local selections
        _this.monTotalsBy = 'Type of Request';
        _this.monTimeGrain = 'Date';
        /* ----------------- Chart refs (for imperative refresh) ----------------- */
        _this.pieRef = React.createRef();
        _this.barRef = React.createRef();
        _this.comboRef = React.createRef();
        _this.timeRef = React.createRef();
        // Dashboard2 refs
        _this.slaComplianceRef = React.createRef();
        _this.breachBreakRef = React.createRef();
        _this.monTotalsRef = React.createRef();
        _this.monTimeRef = React.createRef();
        // Refs for dashboard3
        _this.csatGaugeRef = React.createRef();
        _this.surveyDonutRef = React.createRef();
        _this.surveyGridRef = React.createRef();
        /* ----------------- HEADER templates ----------------- */
        _this.renderPieHeader = function () { return (React.createElement("div", { className: "customer-panel-header" },
            React.createElement("div", { className: "customer-panel-title" }, "Tickets Created"),
            React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { value: _this.pieGroupBy, dataSource: ['Status', 'Priority'], width: 160, popupHeight: "220px", change: function (e) {
                    _this.pieGroupBy = e.value;
                    var data = _this.getPieData(_this.pieGroupBy);
                    var inst = _this.pieRef.current;
                    if (inst) {
                        inst.series[0].dataSource = data;
                        inst.refresh();
                    }
                } }))); };
        _this.renderBarHeader = function () { return (React.createElement("div", { className: "customer-panel-header" },
            React.createElement("div", { className: "customer-panel-title" }, "Tickets Created"),
            React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { value: _this.barGroupBy, dataSource: ['Type of Request', 'Source'], width: 180, change: function (e) {
                    var _a;
                    _this.barGroupBy = e.value;
                    var inst = _this.barRef.current;
                    if (inst) {
                        inst.primaryXAxis = __assign({}, ((_a = inst.primaryXAxis) !== null && _a !== void 0 ? _a : {}));
                        inst.series[0].dataSource = _this.getBarData(_this.barGroupBy);
                        inst.refresh();
                    }
                } }))); };
        _this.renderComboHeader = function () { return (React.createElement("div", { className: "customer-panel-header" },
            React.createElement("div", { className: "customer-panel-title" }, "Tickets Created vs Closed"),
            React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { value: _this.comboGroupBy, dataSource: ['Type of Request', 'Priority', 'Source'], width: 220, change: function (e) {
                    var _a, _b;
                    _this.comboGroupBy = e.value;
                    var inst = _this.comboRef.current;
                    if (inst) {
                        var base = _this.getComboData(_this.comboGroupBy)
                            .sort(function (a, b) { return b.created - a.created; }); // sort by Created desc
                        var data = base.map(function (d) { return (__assign(__assign({}, d), { createdNeg: -d.created })); });
                        var max = Math.max.apply(Math, base.map(function (d) { return Math.max(d.created, d.closed); })) || 1;
                        inst.primaryXAxis = __assign({}, ((_a = inst.primaryXAxis) !== null && _a !== void 0 ? _a : {}));
                        inst.primaryYAxis = __assign(__assign({}, ((_b = inst.primaryYAxis) !== null && _b !== void 0 ? _b : {})), { minimum: -max * 1.15, maximum: max * 1.15, interval: Math.ceil(max / 5) });
                        inst.series[0].dataSource = data;
                        inst.series[1].dataSource = data;
                        inst.series[0].enableSideBySidePlacement = false;
                        inst.series[1].enableSideBySidePlacement = false;
                        inst.refresh();
                    }
                } }))); };
        _this.renderTimeHeader = function () { return (React.createElement("div", { className: "customer-panel-header" },
            React.createElement("div", { className: "customer-panel-title" }, "Tickets Created vs Closed Over Time"),
            React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { dataSource: ['Hour', 'Date', 'Week', 'Month', 'Year'], value: _this.timeGrain, width: 140, change: function (e) {
                    var _a;
                    _this.timeGrain = e.value;
                    var inst = _this.timeRef.current;
                    if (inst) {
                        var data = _this.getTimeData(_this.timeGrain);
                        inst.primaryXAxis = __assign({}, ((_a = inst.primaryXAxis) !== null && _a !== void 0 ? _a : {}));
                        inst.series[0].dataSource = data; // Created
                        inst.series[1].dataSource = data; // Closed
                        // rebind axis label formatter for new grain
                        inst.axisLabelRender = _this.axisLabelFormatterFor(_this.timeGrain);
                        inst.refresh();
                    }
                } }))); };
        // ----- Dashboard2 headers
        _this.renderSlaComplianceHeader = function () { return (React.createElement("div", { className: "customer-panel-header" },
            React.createElement("div", { className: "kpi-title" }, "SLA Compliance Breakdown"))); };
        _this.renderSlaBreachHeader = function () { return (React.createElement("div", { className: "customer-panel-header" },
            React.createElement("div", { className: "kpi-title" }, "SLA Breach Breakdown"))); };
        _this.renderTotalsHeader = function () { return (React.createElement("div", { className: "customer-panel-header" },
            React.createElement("div", { className: "customer-panel-title" }, "SLA Achieved vs Breached Tickets"),
            React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { dataSource: ['Type of Request', 'Priority', 'Source'], value: _this.monTotalsBy, width: 160, change: function (e) {
                    var _a;
                    _this.monTotalsBy = e.value;
                    var inst = _this.monTotalsRef.current;
                    if (inst) {
                        var data = _this.getTotalsByDimension(_this.monTotalsBy);
                        inst.primaryXAxis = __assign({}, ((_a = inst.primaryXAxis) !== null && _a !== void 0 ? _a : {}));
                        inst.series[0].dataSource = data; // Total
                        inst.series[1].dataSource = data; // Achieved
                        inst.series[2].dataSource = data; // Breached
                        inst.refresh();
                    }
                } }))); };
        _this.renderMonTimeHeader = function () { return (React.createElement("div", { className: "customer-panel-header" },
            React.createElement("div", { className: "customer-panel-title" }, "SLA Achieved vs Breached Over Time"),
            "  ",
            React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { dataSource: ['Date', 'Week', 'Month', 'Year'], value: _this.monTimeGrain, width: 160, change: function (e) {
                    var _a;
                    _this.monTimeGrain = e.value;
                    var inst = _this.monTimeRef.current;
                    if (inst) {
                        var data = _this.getSlaByTimeData(_this.monTimeGrain);
                        inst.primaryXAxis = __assign({}, ((_a = inst.primaryXAxis) !== null && _a !== void 0 ? _a : {}));
                        inst.series[0].dataSource = data; // Achieved
                        inst.series[1].dataSource = data; // Breaches
                        inst.axisLabelRender = _this.axisLabelFormatterFor(_this.monTimeGrain);
                        inst.refresh();
                    }
                } }))); };
        _this.headerWithTooltip = function (label) {
            return function () { return (React.createElement("div", { title: label, style: { display: 'inline-block', cursor: 'default' } }, label)); };
        };
        /* ----------------- CONTENT templates ----------------- */
        _this.renderPieContent = function () {
            var onTextRender = function (args) {
                var _a, _b;
                var pct = (_b = (_a = args) === null || _a === void 0 ? void 0 : _a.point) === null || _b === void 0 ? void 0 : _b.percentage;
                if (pct != null)
                    args.text = "".concat(pct.toFixed(0), "%"); // percentage only
            };
            return (React.createElement("div", { className: "customer-chart-wrap" },
                React.createElement(ej2_react_charts_1.AccumulationChartComponent, { ref: _this.pieRef, enableSmartLabels: true, enableBorderOnMouseMove: true, enableAnimation: true, tooltip: {
                        enable: true,
                        header: '<b>Total Ticket Created</b>',
                        format: '<b>${point.x}</b> : <b>${point.percentage}%</b> (<b>${point.y}</b>)'
                    }, legendSettings: { visible: true, position: 'Bottom' }, width: "100%", height: "100%", textRender: onTextRender, load: _this.accumulationLoad.bind(_this) },
                    React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.AccumulationLegend, ej2_react_charts_1.PieSeries, ej2_react_charts_1.AccumulationTooltip, ej2_react_charts_1.AccumulationDataLabel] }),
                    React.createElement(ej2_react_charts_1.AccumulationSeriesCollectionDirective, null,
                        React.createElement(ej2_react_charts_1.AccumulationSeriesDirective, { type: "Pie", dataSource: _this.getPieData(_this.pieGroupBy), xName: "x", yName: "y", radius: "70%", dataLabel: {
                                visible: true,
                                position: 'Outside',
                                connectorStyle: { length: '8px' },
                            }, pointColorMapping: "color", animation: { enable: false } })))));
        };
        _this.renderBarContent = function () { return (React.createElement("div", { className: "customer-chart-wrap", style: { padding: 8 } },
            React.createElement(ej2_react_charts_1.ChartComponent, { ref: _this.barRef, primaryXAxis: {
                    valueType: 'Category',
                    labelIntersectAction: 'Wrap',
                    majorGridLines: { width: 0 },
                    lineStyle: { width: 0 }
                }, primaryYAxis: {
                    labelFormat: 'n0',
                    lineStyle: { width: 0 },
                    majorGridLines: { width: 0 }
                }, tooltip: { enable: true }, chartArea: { border: { width: 0 } }, width: "100%", height: "100%", load: _this.Chartload.bind(_this) },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.ColumnSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Tooltip, ej2_react_charts_1.DataLabel] }),
                React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: _this.getBarData(_this.barGroupBy), xName: "x", yName: "y", type: "Column", cornerRadius: { topLeft: 4, topRight: 4, bottomLeft: 4, bottomRight: 4 }, marker: {
                            dataLabel: { visible: true, position: 'Top', font: { color: '#fff', fontWeight: '800', size: '11px' } }
                        }, fill: '#42C2FF', animation: { enable: false } }))))); };
        _this.renderComboContent = function () {
            var base = _this.getComboData(_this.comboGroupBy)
                .sort(function (a, b) { return b.created - a.created; });
            var data = base.map(function (d) { return (__assign(__assign({}, d), { createdNeg: -d.created })); });
            var max = Math.max.apply(Math, base.map(function (d) { return Math.max(d.created, d.closed); })) || 1;
            var onAxisLabel = function (args) {
                if (args.axis.name === 'primaryYAxis') {
                    var n = Number(String(args.text).replace(/,/g, ''));
                    if (!isNaN(n))
                        args.text = Math.abs(n).toLocaleString();
                }
            };
            var onTextRender = function (args) {
                var n = Number(String(args.text).replace(/,/g, ''));
                if (!isNaN(n))
                    args.text = Math.abs(n).toLocaleString();
            };
            var onTooltipRender = function (args) {
                var _a, _b, _c, _d;
                var x = (_b = (_a = args.point) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : '';
                var y = Math.abs(((_d = (_c = args.point) === null || _c === void 0 ? void 0 : _c.y) !== null && _d !== void 0 ? _d : 0));
                args.text = "<b>".concat(x, "</b>: <b>").concat(y.toLocaleString(), "</b>");
            };
            return (React.createElement("div", { className: "customer-chart-wrap", style: { padding: 8 } },
                React.createElement(ej2_react_charts_1.ChartComponent, { ref: _this.comboRef, primaryXAxis: { valueType: 'Category', majorGridLines: { width: 0 } }, primaryYAxis: {
                        labelFormat: 'n0',
                        lineStyle: { width: 0 },
                        majorGridLines: { width: 0 },
                        minimum: -max * 1.15,
                        maximum: max * 1.15,
                        interval: Math.ceil(max / 5),
                        opposedPosition: true
                    }, tooltip: { enable: true }, tooltipRender: onTooltipRender, legendSettings: { visible: true, position: 'Bottom' }, width: "100%", height: "100%", chartArea: { border: { width: 0 } }, axisLabelRender: onAxisLabel, textRender: onTextRender, enableSideBySidePlacement: false, load: _this.Chartload.bind(_this) },
                    React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.BarSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Tooltip, ej2_react_charts_1.DataLabel, ej2_react_charts_1.Legend] }),
                    React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                        React.createElement(ej2_react_charts_1.SeriesDirective, { name: "Tickets Created", dataSource: data, xName: "x", yName: "createdNeg", type: "Bar", fill: "#1363DF", columnWidth: 0.7, marker: { dataLabel: { visible: true, position: 'Top', font: { color: '#fff', size: '12px', fontWeight: '600' } } }, animation: { enable: false } }),
                        React.createElement(ej2_react_charts_1.SeriesDirective, { name: "Tickets Closed", dataSource: data, xName: "x", yName: "closed", type: "Bar", fill: "#E8AA42", columnWidth: 0.7, marker: { dataLabel: { visible: true, position: 'Top', font: { color: '#000', size: '12px', fontWeight: '600' } } }, animation: { enable: false } })))));
        };
        _this.renderTimeContent = function () {
            return (React.createElement("div", { className: "customer-chart-wrap", style: { padding: 8 } },
                React.createElement(ej2_react_charts_1.ChartComponent, { ref: _this.timeRef, primaryXAxis: { valueType: 'Category', majorGridLines: { width: 0 }, labelIntersectAction: 'Rotate90', labelRotation: 90 }, primaryYAxis: { labelFormat: 'n0', lineStyle: { width: 0 } }, tooltip: { enable: true }, legendSettings: { visible: true, position: 'Bottom' }, width: "100%", height: "100%", chartArea: { border: { width: 0 } }, axisLabelRender: _this.axisLabelFormatterFor(_this.timeGrain), load: _this.Chartload.bind(_this) },
                    React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.ColumnSeries, ej2_react_charts_1.LineSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Tooltip, ej2_react_charts_1.DataLabel, ej2_react_charts_1.Legend] }),
                    React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                        React.createElement(ej2_react_charts_1.SeriesDirective, { name: "Total Ticket Created", dataSource: _this.getTimeData(_this.timeGrain), xName: "x", yName: "created", type: "Column", fill: "#3FD1CB", cornerRadius: { topLeft: 10, topRight: 10 }, columnSpacing: 0.15, animation: { enable: false } }),
                        React.createElement(ej2_react_charts_1.SeriesDirective, { name: "Total Ticket Closed", dataSource: _this.getTimeData(_this.timeGrain), xName: "x", yName: "closed", type: "Column", fill: "#6643B5", cornerRadius: { topLeft: 10, topRight: 10 }, columnSpacing: 0.15, animation: { enable: false } })))));
        };
        // ----- Dashboard2 contents
        _this.renderSlaComplianceContent = function () {
            var onTextRender = function (args) {
                var _a, _b;
                var pct = (_b = (_a = args) === null || _a === void 0 ? void 0 : _a.point) === null || _b === void 0 ? void 0 : _b.percentage;
                if (pct != null)
                    args.text = "".concat(pct.toFixed(0), "%"); // percentage only
            };
            var applied = _this.slaSummary().applied;
            var centerTpl = "\n      <div style=\"text-align:center;line-height:1.2\">\n        <div style=\"font-size:18px;font-weight:700\">".concat(applied.toLocaleString(), "</div>\n        <div style=\"font-size:12px;color:#6b7280\">SLA Applied Tickets</div>\n      </div>\n    ");
            return (React.createElement("div", { className: "customer-chart-wrap" },
                React.createElement(ej2_react_charts_1.AccumulationChartComponent, { ref: _this.slaComplianceRef, legendSettings: { visible: true, position: 'Top' }, tooltip: { enable: true }, width: "100%", height: "100%", textRender: onTextRender, annotations: [{
                            content: centerTpl,
                            region: 'Series',
                            coordinateUnits: 'Pixel',
                            x: '50%', y: '50%'
                        }], load: _this.accumulationLoad.bind(_this) },
                    React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.AccumulationLegend, ej2_react_charts_1.PieSeries, ej2_react_charts_1.AccumulationTooltip, ej2_react_charts_1.AccumulationDataLabel, ej2_react_charts_1.AccumulationAnnotation] }),
                    React.createElement(ej2_react_charts_1.AccumulationSeriesCollectionDirective, null,
                        React.createElement(ej2_react_charts_1.AccumulationSeriesDirective, { dataSource: _this.getSlaComplianceData().map(function (d, i) { return (__assign(__assign({}, d), { color: ['#3FD1CB', '#6643B5'][i] })); }), xName: "x", yName: "y", type: "Pie", innerRadius: "65%", dataLabel: { visible: true, position: 'Outside', connectorStyle: { length: '8px' } }, pointColorMapping: "color", animation: { enable: false }, borderRadius: 10, border: { width: 4, color: '#ffffff' } })))));
        };
        _this.renderSlaBreachContent = function () {
            var onTextRender = function (args) {
                var _a, _b;
                var pct = (_b = (_a = args) === null || _a === void 0 ? void 0 : _a.point) === null || _b === void 0 ? void 0 : _b.percentage;
                if (pct != null)
                    args.text = "".concat(pct.toFixed(0), "%"); // percentage only
            };
            // Use normalized breach total (same as Compliance)
            var s = _this.slaSummary();
            var targetBreached = _this.normalizeBreachesForRange(s.applied, s.breached).breached;
            var centerTpl = "\n      <div style=\"text-align:center\">\n        <div style=\"font-size:18px;font-weight:700\">".concat(targetBreached.toLocaleString(), "</div>\n        <div style=\"font-size:12px;color:#6b7280\">SLA Breaches</div>\n      </div>\n    ");
            return (React.createElement("div", { className: "customer-chart-wrap" },
                React.createElement(ej2_react_charts_1.AccumulationChartComponent, { ref: _this.breachBreakRef, legendSettings: { visible: true, position: 'Top' }, tooltip: { enable: true }, width: "100%", height: "100%", textRender: onTextRender, annotations: [{
                            content: centerTpl,
                            region: 'Series',
                            coordinateUnits: 'Pixel',
                            x: '50%', y: '50%'
                        }], load: _this.accumulationLoad.bind(_this) },
                    React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.AccumulationLegend, ej2_react_charts_1.PieSeries, ej2_react_charts_1.AccumulationTooltip, ej2_react_charts_1.AccumulationDataLabel, ej2_react_charts_1.AccumulationAnnotation] }),
                    React.createElement(ej2_react_charts_1.AccumulationSeriesCollectionDirective, null,
                        React.createElement(ej2_react_charts_1.AccumulationSeriesDirective, { dataSource: _this.getSlaBreachBreakdown().map(function (d, i) { return (__assign(__assign({}, d), { color: ['#42C2FF', '#1363DF'][i] // Response, Resolution
                             })); }), xName: "x", yName: "y", innerRadius: "65%", type: "Pie", dataLabel: { visible: true, position: 'Outside', connectorStyle: { length: '8px' } }, pointColorMapping: "color", animation: { enable: false }, borderRadius: 10, border: { width: 4, color: '#ffffff' } })))));
        };
        _this.renderTotalsContent = function () {
            var data = _this.getTotalsByDimension(_this.monTotalsBy);
            return (React.createElement("div", { className: "customer-chart-wrap", style: { padding: 8 } },
                React.createElement(ej2_react_charts_1.ChartComponent, { ref: _this.monTotalsRef, primaryXAxis: { valueType: 'Category', majorGridLines: { width: 0 } }, primaryYAxis: { labelFormat: 'n0', lineStyle: { width: 0 } }, tooltip: { enable: true }, width: "100%", height: "100%", chartArea: { border: { width: 0 } }, legendSettings: { visible: true, position: 'Bottom' }, load: _this.Chartload.bind(_this) },
                    React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.ColumnSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Tooltip, ej2_react_charts_1.DataLabel, ej2_react_charts_1.Legend] }),
                    React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                        React.createElement(ej2_react_charts_1.SeriesDirective, { name: "SLA Total Tickets", dataSource: data, xName: "x", yName: "total", type: "Column", fill: "#1F4690", cornerRadius: { topLeft: 10, topRight: 10 }, columnSpacing: 0.15, marker: {
                                visible: true,
                                width: 8, height: 8,
                                shape: 'Circle',
                                dataLabel: { visible: true, position: 'Outer', font: { color: '#000', fontWeight: '800', size: '11px' } }
                            }, animation: { enable: false } }),
                        React.createElement(ej2_react_charts_1.SeriesDirective, { name: "SLA Achieved Tickets", dataSource: data, xName: "x", yName: "achieved", type: "Column", fill: "#3FD1CB", cornerRadius: { topLeft: 10, topRight: 10 }, columnSpacing: 0.15, marker: {
                                visible: true,
                                width: 8, height: 8,
                                shape: 'Triangle',
                                dataLabel: { visible: true, position: 'Outer', font: { color: '#000', fontWeight: '800', size: '11px' } }
                            }, animation: { enable: false } }),
                        React.createElement(ej2_react_charts_1.SeriesDirective, { name: "SLA Breached Tickets", dataSource: data, xName: "x", yName: "breached", type: "Column", fill: "#1363DF", cornerRadius: { topLeft: 10, topRight: 10 }, columnSpacing: 0.15, marker: {
                                visible: true,
                                width: 8, height: 8,
                                shape: 'Diamond',
                                dataLabel: { visible: true, position: 'Outer', font: { color: '#000', fontWeight: '800', size: '11px' } }
                            }, animation: { enable: false } })))));
        };
        _this.renderMonTimeContent = function () {
            var data = _this.getSlaByTimeData(_this.monTimeGrain);
            return (React.createElement("div", { className: "customer-chart-wrap", style: { padding: 8 } },
                React.createElement(ej2_react_charts_1.ChartComponent, { ref: _this.monTimeRef, primaryXAxis: { valueType: 'Category', majorGridLines: { width: 0 }, labelIntersectAction: 'Rotate90', labelRotation: 90 }, primaryYAxis: { labelFormat: 'n0', lineStyle: { width: 0 } }, tooltip: { enable: true }, width: "100%", height: "100%", chartArea: { border: { width: 0 } }, legendSettings: { visible: true, position: 'Bottom' }, axisLabelRender: _this.axisLabelFormatterFor(_this.monTimeGrain), load: _this.Chartload.bind(_this) },
                    React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.ColumnSeries, ej2_react_charts_1.LineSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Tooltip, ej2_react_charts_1.DataLabel, ej2_react_charts_1.Legend] }),
                    React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                        React.createElement(ej2_react_charts_1.SeriesDirective, { name: "SLA Achieved Tickets", dataSource: data, xName: "x", yName: "achieved", type: "Column", fill: "#E8AA42", cornerRadius: { topLeft: 10, topRight: 10 }, columnSpacing: 0.15, animation: { enable: false } }),
                        React.createElement(ej2_react_charts_1.SeriesDirective, { name: "SLA Breached Tickets", dataSource: data, xName: "x", yName: "breached", type: "Line", marker: { visible: true }, fill: "#1F4690", animation: { enable: false } })))));
        };
        // --- update KPI card to support inline badge ---
        _this.kpiCard = function (items) { return function () {
            var _a;
            var _b, _c;
            var c = (_c = (_b = items[0]) === null || _b === void 0 ? void 0 : _b.color) !== null && _c !== void 0 ? _c : '#6e57ec';
            var tint = _this.toRGBA(c, 0.08);
            return (React.createElement("div", { className: "support-kpi-card kpi-card--tinted", style: (_a = {}, _a['--kpi-color'] = c, _a['--kpi-tint'] = tint, _a) }, items.map(function (it, idx) {
                var _a;
                var tip = "<div class=\"kpi-tooltip\"><div class=\"kpi-tip-desc\">".concat(it.description, "</div></div>");
                return (React.createElement(React.Fragment, { key: idx },
                    React.createElement("div", { className: "kpi-item" },
                        React.createElement("div", { className: "support-kpi-label" },
                            React.createElement("span", { className: "kpi-title-text" }, it.title),
                            React.createElement(ej2_react_popups_1.TooltipComponent, { position: "TopCenter", showTipPointer: true, opensOn: "Hover", cssClass: "kpi-tip", content: tip, width: 300 },
                                React.createElement("div", { className: "exclamation-container" },
                                    React.createElement("span", { className: "e-icons e-circle-info kpi-info-icon" })))),
                        React.createElement("div", { className: "kpi-value" },
                            React.createElement("span", { className: "kpi-value-primary", style: { color: (_a = it.color) !== null && _a !== void 0 ? _a : c } }, it.valuePrimary)),
                        it.valueBadge && (function () {
                            var parts = String(it.valueBadge.text).split(/\s+vs\s+/i);
                            var delta = parts[0];
                            var vsTail = parts[1];
                            var icon = it.valueBadge.trend === 'up' ? '▲' : it.valueBadge.trend === 'down' ? '▼' : '■';
                            return (React.createElement("div", { className: "kpi-badge-line" },
                                React.createElement("span", { className: "kpi-badge-delta kpi-badge--".concat(it.valueBadge.trend) },
                                    React.createElement("span", { className: "kpi-badge-icon" }, icon),
                                    delta),
                                vsTail && React.createElement("span", { className: "kpi-badge-vs" },
                                    "vs ",
                                    vsTail)));
                        })(),
                        it.valueMeta && React.createElement("div", { className: "kpi-value-meta" }, it.valueMeta)),
                    idx !== items.length - 1 && React.createElement("div", { className: "kpi-divider", "aria-hidden": "true" })));
            })));
        }; };
        _this.applyRange = function (r) { return _this.setState({ dateRange: _this.clampTo2025(r) }); };
        _this.renderGlobalFilters = function () {
            var _a = _this.state, platform = _a.platform, dateRange = _a.dateRange;
            return (React.createElement("div", { className: "cs-toolbar-right" },
                React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { placeholder: "Platform", dataSource: ['All Platform', 'React', 'Angular', 'Vue', 'JavaScript', 'TypeScript'], value: platform, change: function (e) { return _this.setState({ platform: e.value }); }, width: 160 }),
                React.createElement(ej2_react_calendars_1.DateRangePickerComponent, { ref: _this.dateRangeRef, placeholder: "Select date range (2025)", startDate: dateRange.startDate, endDate: dateRange.endDate, min: _this.yrStart2025, max: _this.yrEnd2025, strictMode: true, allowEdit: false, showClearButton: false, format: "MMM dd, yyyy", presets: _this.get2025Presets(), change: function (e) { return _this.applyRange({ startDate: e.startDate, endDate: e.endDate }); }, width: 250 })));
        };
        _this.renderHeader = function (title) { return (React.createElement("div", { className: "e-card cs-toolbar" },
            React.createElement("div", { className: "cs-toolbar-left" },
                React.createElement("h4", { className: "cs-title" }, title)),
            _this.renderGlobalFilters())); };
        // Dashboard 1 (Overview) with title + platform + date range and responsive panels
        _this.dashboard1 = function () {
            var kpis = _this.kpiData();
            var cmp = _this.kpiComparisons();
            return (React.createElement("div", { className: "Container" },
                _this.renderHeader('Support Traffic'),
                React.createElement(ej2_react_layouts_1.DashboardLayoutComponent, { ref: _this.trafficRef, id: "traffic_dashboard", style: { height: '85vh', width: '100%' }, columns: 8, cellAspectRatio: 90 / 100, cellSpacing: _this.cellSpacing, allowResizing: false, allowDragging: false, mediaQuery: "(max-width:950px)", created: _this.onTrafficCreated },
                    React.createElement(ej2_react_layouts_1.PanelsDirective, null,
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 0, col: 0, content: _this.kpiCard([{
                                    title: 'Tickets Created',
                                    description: 'The number of tickets created during the specified time period.',
                                    valuePrimary: kpis.created.toLocaleString(),
                                    valueBadge: cmp.created,
                                    color: '#6643B5'
                                }]), cssClass: "kpi-panel" }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 0, col: 2, content: _this.kpiCard([{
                                    title: 'Tickets Reopened',
                                    description: 'The number of tickets that were created during the specified time period and were reopened at least once.',
                                    valuePrimary: kpis.reopened.toLocaleString(),
                                    valueBadge: cmp.reopened,
                                    color: '#1363DF'
                                }]), cssClass: "kpi-panel" }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 0, col: 4, content: _this.kpiCard([{
                                    title: 'Tickets Unresolved',
                                    description: 'The number of tickets with the Open, Progress and Hold status categories during the specified time period.',
                                    valuePrimary: kpis.unresolved.toLocaleString(),
                                    valueBadge: cmp.unresolved,
                                    color: '#E8AA42'
                                }]), cssClass: "kpi-panel" }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 0, col: 6, content: _this.kpiCard([{
                                    title: 'Tickets Resolved',
                                    description: 'The number of tickets with the Resolved and Closed status category during the specified time period.',
                                    valuePrimary: kpis.resolved.toLocaleString(),
                                    valueBadge: cmp.resolved,
                                    color: '#3FD1CB'
                                }]), cssClass: "kpi-panel" }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 4, sizeY: 3, row: 1, col: 0, header: _this.renderPieHeader, content: _this.renderPieContent }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 4, sizeY: 3, row: 1, col: 4, header: _this.renderBarHeader, content: _this.renderBarContent }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 8, sizeY: 3, row: 4, col: 0, header: _this.renderComboHeader, content: _this.renderComboContent }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 8, sizeY: 3, row: 7, col: 0, header: _this.renderTimeHeader, content: _this.renderTimeContent })))));
        };
        // ----- Data providers for Dashboard 2 panels
        _this.getSlaComplianceData = function () {
            var s = _this.slaSummary();
            var norm = _this.normalizeBreachesForRange(s.applied, s.breached);
            return [
                { x: "SLA Achieved (".concat(norm.achieved.toLocaleString(), ")"), y: norm.achieved },
                { x: "SLA Breached (".concat(norm.breached.toLocaleString(), ")"), y: norm.breached }
            ];
        };
        _this.getSlaBreachBreakdown = function () {
            var tickets = _this.filterByGlobal(_this.getAllTickets()).filter(function (t) { return _this.isSlaApplied(t); });
            var responseOnly = 0, resolutionOnly = 0, both = 0;
            for (var _i = 0, tickets_1 = tickets; _i < tickets_1.length; _i++) {
                var t = tickets_1[_i];
                var rb = _this.isResponseBreached(t);
                var rz = _this.isResolutionBreached(t);
                if (rb && rz)
                    both += 1;
                else if (rb)
                    responseOnly += 1;
                else if (rz)
                    resolutionOnly += 1;
            }
            // Distribute "both" proportionally to singles (no fixed bias)
            var singles = responseOnly + resolutionOnly;
            var respRaw = responseOnly, resoRaw = resolutionOnly;
            if (both > 0) {
                if (singles === 0) {
                    var addResp = Math.floor(both / 2);
                    respRaw += addResp;
                    resoRaw += both - addResp;
                }
                else {
                    var respShare = (responseOnly / singles) * both;
                    var resoShare = (resolutionOnly / singles) * both;
                    var addResp = Math.floor(respShare);
                    var addReso = Math.floor(resoShare);
                    var rem = both - (addResp + addReso);
                    var fracResp = respShare - addResp;
                    var fracReso = resoShare - addReso;
                    var order = fracReso >= fracResp ? ['reso', 'resp'] : ['resp', 'reso'];
                    var i = 0;
                    while (rem-- > 0) {
                        if (order[i++ % 2] === 'resp')
                            addResp++;
                        else
                            addReso++;
                    }
                    respRaw += addResp;
                    resoRaw += addReso;
                }
            }
            // Match Compliance donut total
            var s = _this.slaSummary();
            var targetBreached = _this.normalizeBreachesForRange(s.applied, s.breached).breached;
            var sum = respRaw + resoRaw;
            var respFinal = respRaw, resoFinal = resoRaw;
            if (sum !== targetBreached) {
                if (targetBreached <= 0 || sum <= 0) {
                    respFinal = 0;
                    resoFinal = 0;
                }
                else {
                    var exactResp = (respRaw / sum) * targetBreached;
                    var exactReso = (resoRaw / sum) * targetBreached;
                    respFinal = Math.floor(exactResp);
                    resoFinal = Math.floor(exactReso);
                    var rem = targetBreached - (respFinal + resoFinal);
                    var fracResp = exactResp - respFinal;
                    var fracReso = exactReso - resoFinal;
                    var order = fracReso >= fracResp ? ['reso', 'resp'] : ['resp', 'reso'];
                    var i = 0;
                    while (rem-- > 0) {
                        if (order[i++ % 2] === 'resp')
                            respFinal++;
                        else
                            resoFinal++;
                    }
                }
            }
            // ONLY show both slices if BOTH raw counts exist; otherwise show real distribution
            if (targetBreached >= 2 && respRaw > 0 && resoRaw > 0) {
                if (respFinal === 0) {
                    respFinal = 1;
                    resoFinal = Math.max(0, targetBreached - 1);
                }
                if (resoFinal === 0) {
                    resoFinal = 1;
                    respFinal = Math.max(0, targetBreached - 1);
                }
            }
            return [
                { x: "Response Breaches (".concat(respFinal.toLocaleString(), ")"), y: respFinal },
                { x: "Resolution Breaches (".concat(resoFinal.toLocaleString(), ")"), y: resoFinal },
            ];
        };
        _this.getTotalsByDimension = function (by) {
            var _a, _b;
            var tickets = _this.filterByGlobal(_this.getAllTickets());
            // Prepare raw per-bucket totals and breaches (unique breach per ticket)
            var field = by === 'Type of Request' ? 'TypeOfRequest' : by;
            var groups = new Map();
            for (var _i = 0, tickets_2 = tickets; _i < tickets_2.length; _i++) {
                var t = tickets_2[_i];
                if (!_this.isSlaApplied(t))
                    continue;
                var key = ((_a = t[field]) !== null && _a !== void 0 ? _a : 'Unknown');
                var g = (_b = groups.get(key)) !== null && _b !== void 0 ? _b : { total: 0, breachedRaw: 0 };
                g.total += 1;
                var isBreached = _this.isResponseBreached(t) || _this.isResolutionBreached(t);
                if (isBreached)
                    g.breachedRaw += 1;
                groups.set(key, g);
            }
            // Global normalized breaches (from donut logic)
            var s = _this.slaSummary();
            var norm = _this.normalizeBreachesForRange(s.applied, s.breached);
            var rows = Array.from(groups.entries()).map(function (_a) {
                var key = _a[0], v = _a[1];
                return ({
                    key: key,
                    total: v.total, breachedRaw: v.breachedRaw
                });
            });
            var apportioned = _this.apportionBreachesToBuckets(rows, norm.breached)
                .map(function (r) { return ({ x: r.key, total: r.total, achieved: r.achieved, breached: r.breached }); });
            // Sort to keep UX consistent
            if (by === 'Priority') {
                var order_1 = ['Low', 'Medium', 'High', 'Critical'];
                var rank_1 = function (val) {
                    var i = order_1.findIndex(function (o) { return o.toLowerCase() === String(val).toLowerCase(); });
                    return i === -1 ? order_1.length : i;
                };
                return apportioned.sort(function (a, b) { return rank_1(a.x) - rank_1(b.x); });
            }
            else {
                return apportioned.sort(function (a, b) { return b.total - a.total; });
            }
        };
        _this.getSlaByTimeData = function (grain) {
            var _a;
            var tickets = _this.filterByGlobal(_this.getAllTickets());
            var map = new Map();
            var keyFromDate = function (d) {
                switch (grain) {
                    case 'Hour': return "".concat(d.getHours().toString().padStart(2, '0'), ":00");
                    case 'Date': {
                        var yy = d.getFullYear();
                        var mm = String(d.getMonth() + 1).padStart(2, '0');
                        var dd = String(d.getDate()).padStart(2, '0');
                        return "".concat(yy, "-").concat(mm, "-").concat(dd);
                    }
                    case 'Week': {
                        var local = new Date(d.getFullYear(), d.getMonth(), d.getDate());
                        var dayNum = (local.getDay() + 6) % 7;
                        var thursday = new Date(local);
                        thursday.setDate(local.getDate() - dayNum + 3);
                        var firstJan = new Date(thursday.getFullYear(), 0, 1);
                        var weekNo = Math.floor(((thursday.getTime() - firstJan.getTime()) / 86400000 + firstJan.getDay() + 1) / 7) + 1;
                        return "W".concat(weekNo, "-").concat(thursday.getFullYear());
                    }
                    case 'Month': {
                        var yy = d.getFullYear();
                        var mm = String(d.getMonth() + 1).padStart(2, '0');
                        return "".concat(yy, "-").concat(mm);
                    }
                    case 'Year': return "".concat(d.getFullYear());
                    default: {
                        var yy = d.getFullYear();
                        var mm = String(d.getMonth() + 1).padStart(2, '0');
                        var dd = String(d.getDate()).padStart(2, '0');
                        return "".concat(yy, "-").concat(mm, "-").concat(dd);
                    }
                }
            };
            for (var _i = 0, tickets_3 = tickets; _i < tickets_3.length; _i++) {
                var t = tickets_3[_i];
                if (!_this.isSlaApplied(t))
                    continue;
                var created = new Date(t.CreatedOn);
                var k = keyFromDate(created);
                var b = (_a = map.get(k)) !== null && _a !== void 0 ? _a : { total: 0, breachedRaw: 0 };
                b.total += 1;
                var isBreached = _this.isResponseBreached(t) || _this.isResolutionBreached(t);
                if (isBreached)
                    b.breachedRaw += 1;
                map.set(k, b);
            }
            // Global normalized breaches (same as donut)
            var s = _this.slaSummary();
            var norm = _this.normalizeBreachesForRange(s.applied, s.breached);
            // Build rows, apportion globally, keep sortable key
            var rows = Array.from(map.entries()).map(function (_a) {
                var x = _a[0], v = _a[1];
                return ({ key: x, total: v.total, breachedRaw: v.breachedRaw });
            });
            var apportioned = _this.apportionBreachesToBuckets(rows, norm.breached);
            var withSort = apportioned.map(function (r) {
                var sortKey = r.key;
                if (/^\d{2}:\d{2}$/.test(r.key))
                    sortKey = r.key;
                else if (/^\d{4}-\d{2}-\d{2}$/.test(r.key))
                    sortKey = r.key;
                else if (/^\d{4}-\d{2}$/.test(r.key))
                    sortKey = "".concat(r.key, "-01");
                else if (/^\d{4}$/.test(r.key))
                    sortKey = "".concat(r.key, "-01-01");
                else if (/^W\d{1,2}-\d{4}$/.test(r.key)) {
                    var _a = r.key.split('-'), w = _a[0], y = _a[1];
                    var week = Number(w.replace('W', ''));
                    var year = Number(y);
                    var d = new Date(year, 0, 1 + (week - 1) * 7);
                    sortKey = d.toISOString().slice(0, 10);
                }
                return { x: r.key, achieved: r.achieved, breached: r.breached, sortKey: sortKey };
            });
            withSort.sort(function (a, b) { return a.sortKey.localeCompare(b.sortKey); });
            return withSort.map(function (p) { return ({ x: p.x, achieved: p.achieved, breached: p.breached }); });
        };
        _this.refreshActiveDashboard = function () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
            var id = _this.state.selectedId;
            switch (id) {
                case 'support':
                    (_a = _this.trafficRef.current) === null || _a === void 0 ? void 0 : _a.refresh();
                    (_b = _this.pieRef.current) === null || _b === void 0 ? void 0 : _b.refresh();
                    (_c = _this.barRef.current) === null || _c === void 0 ? void 0 : _c.refresh();
                    (_d = _this.comboRef.current) === null || _d === void 0 ? void 0 : _d.refresh();
                    (_e = _this.timeRef.current) === null || _e === void 0 ? void 0 : _e.refresh();
                    break;
                case 'monitoring':
                    (_f = _this.monitoringRef.current) === null || _f === void 0 ? void 0 : _f.refresh();
                    (_g = _this.slaComplianceRef.current) === null || _g === void 0 ? void 0 : _g.refresh();
                    (_h = _this.breachBreakRef.current) === null || _h === void 0 ? void 0 : _h.refresh();
                    (_j = _this.monTotalsRef.current) === null || _j === void 0 ? void 0 : _j.refresh();
                    (_k = _this.monTimeRef.current) === null || _k === void 0 ? void 0 : _k.refresh();
                    break;
                case 'satisfaction':
                    (_l = _this.csatRef.current) === null || _l === void 0 ? void 0 : _l.refresh();
                    (_m = _this.csatGaugeRef.current) === null || _m === void 0 ? void 0 : _m.refresh();
                    (_o = _this.surveyDonutRef.current) === null || _o === void 0 ? void 0 : _o.refresh();
                    (_p = _this.surveyGridRef.current) === null || _p === void 0 ? void 0 : _p.refresh();
                    break;
            }
        };
        // Dashboard 2 (Support Monitoring)
        _this.dashboard2 = function () {
            var kpi = _this.kpiAverages();
            return (React.createElement("div", { className: "Container" },
                _this.renderHeader('Support Monitoring'),
                React.createElement(ej2_react_layouts_1.DashboardLayoutComponent, { ref: _this.monitoringRef, id: "monitoring_dashboard", style: { height: '85vh', width: '100%', zIndex: 1 }, columns: 8, cellAspectRatio: 90 / 100, cellSpacing: _this.cellSpacing, allowResizing: false, allowDragging: false, mediaQuery: "(max-width:950px)", created: _this.onMonitoringCreated },
                    React.createElement(ej2_react_layouts_1.PanelsDirective, null,
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 0, col: 0, content: _this.kpiCard([
                                {
                                    title: 'Avg First Response Time',
                                    description: 'The average time taken by an agent to provide the first response to a customer.',
                                    valuePrimary: kpi.avgFRT_HM,
                                    color: '#42C2FF'
                                }
                            ]), cssClass: "kpi-panel" }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 0, col: 2, content: _this.kpiCard([
                                {
                                    title: 'Avg Agent Response Time',
                                    description: 'The average time taken by an agent to respond to a customer.',
                                    valuePrimary: kpi.avgRT_HM,
                                    color: '#6643B5'
                                }
                            ]), cssClass: "kpi-panel" }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 0, col: 4, content: _this.kpiCard([
                                {
                                    title: 'Avg Resolution Time',
                                    description: 'The average time taken by an agent to resolve or close a ticket.', valuePrimary: kpi.avgRZT3_HM,
                                    color: '#1363DF'
                                }
                            ]), cssClass: "kpi-panel" }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 0, col: 6, content: _this.kpiCard([
                                {
                                    title: 'First Contact Resolution',
                                    description: 'First Contact Resolution (FCR) is the percentage of tickets solved or closed by an agent on the first reply.',
                                    valuePrimary: "".concat(kpi.fcrPct.toFixed(1), "%"),
                                    valueMeta: "(".concat(kpi.fcrYes, " out of ").concat(kpi.fcrBase, ")"),
                                    color: '#3FD1CB'
                                }
                            ]), cssClass: "kpi-panel" }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 4, sizeY: 3, row: 1, col: 0, header: _this.renderSlaComplianceHeader, content: _this.renderSlaComplianceContent, cssClass: "sla-pie-panel" }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 4, sizeY: 3, row: 1, col: 4, header: _this.renderSlaBreachHeader, content: _this.renderSlaBreachContent, cssClass: "sla-donut-panel" }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 8, sizeY: 3, row: 4, col: 0, header: _this.renderTotalsHeader, content: _this.renderTotalsContent }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 8, sizeY: 3, row: 7, col: 0, header: _this.renderMonTimeHeader, content: _this.renderMonTimeContent })))));
        };
        _this.normalizePct3 = function (counts) {
            var total = counts.reduce(function (s, n) { return s + n; }, 0);
            if (!total)
                return [0, 0, 0];
            var scale = 10; // 1 decimal => 10 units
            var exactUnits = counts.map(function (c) { return (c * 100 * scale) / total; }); // percentages in units
            var floorUnits = exactUnits.map(function (u) { return Math.floor(u); });
            var remaining = 100 * scale - floorUnits.reduce(function (s, u) { return s + u; }, 0); // integer units to distribute
            // Indices sorted by largest fractional part
            var order = [0, 1, 2].sort(function (a, b) { return (exactUnits[b] - Math.floor(exactUnits[b])) - (exactUnits[a] - Math.floor(exactUnits[a])); });
            var i = 0;
            while (remaining > 0) {
                floorUnits[order[i % 3]] += 1;
                remaining--;
                i++;
            }
            return floorUnits.map(function (u) { return u / scale; });
        };
        // ----- Dashboard3 headers -----
        _this.renderCsatHeader = function () { return (React.createElement("div", { className: "kpi-header" },
            React.createElement("div", { className: "kpi-title" }, "Customer Satisfaction Score"))); };
        _this.renderSurveyResponseHeader = function () { return (React.createElement("div", { className: "kpi-header" },
            React.createElement("div", { className: "kpi-title" }, "Survey Response Rate"))); };
        _this.renderSurveyGridHeader = function () { return (React.createElement("div", { className: "customer-panel-header" },
            React.createElement("div", { className: "kpi-title" }, "Survey Details"))); };
        // ----- Dashboard3 contents -----
        _this.renderCsatContent = function () {
            var s = _this.surveyStats();
            var v = +s.csat.toFixed(1);
            var vText = v.toFixed(1) + '%';
            var tooltipTpl = "<div style=\"font-size:14px;background:#fff;padding:6px 10px;color:#595959;border:1px solid #e8e8e8;border-radius:4px\">Current CSAT: ".concat(vText, "</div>");
            var annotationTpl = "<div style=\"font-size:18px;font-weight:600;font-family:inherit;color:#2E7D32\">".concat(vText, "</div>");
            return (React.createElement("div", { className: "gauge-center" },
                React.createElement(ej2_react_circulargauge_1.CircularGaugeComponent, { ref: _this.csatGaugeRef, background: "transparent", width: "100%", height: "100%", centerX: "50%", centerY: "70%", allowMargin: false, tooltip: { enable: true, template: tooltipTpl }, legendSettings: { visible: true, position: 'Bottom', width: '70%', textStyle: { fontFamily: 'inherit', size: '12px' } }, load: _this.Gaugeload.bind(_this) },
                    React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_circulargauge_1.Annotations, ej2_react_circulargauge_1.GaugeTooltip, ej2_react_circulargauge_1.Legend] }),
                    React.createElement(ej2_react_circulargauge_1.AxesDirective, null,
                        React.createElement(ej2_react_circulargauge_1.AxisDirective, { startAngle: 270, endAngle: 90, radius: "100%", minimum: 0, maximum: 100, majorTicks: { width: 1.5, height: 12, interval: 20, offset: 30 }, minorTicks: { width: 0 }, lineStyle: { width: 0 }, labelStyle: { position: 'Outside', offset: -40, font: { size: '12px', fontFamily: 'inherit' } } },
                            React.createElement(ej2_react_circulargauge_1.AnnotationsDirective, null,
                                React.createElement(ej2_react_circulargauge_1.AnnotationDirective, { content: annotationTpl, angle: 0, radius: "-10%", zIndex: "1" })),
                            React.createElement(ej2_react_circulargauge_1.PointersDirective, null,
                                React.createElement(ej2_react_circulargauge_1.PointerDirective, { value: v, radius: "70%", pointerWidth: 6, needleEndWidth: 3, cap: { radius: 8, border: { width: 2 } }, color: "#424242" })),
                            React.createElement(ej2_react_circulargauge_1.RangesDirective, null,
                                React.createElement(ej2_react_circulargauge_1.RangeDirective, { start: 0, end: 20, radius: "82%", color: "#FF3B30", startWidth: 40, endWidth: 40, legendText: "Poor" }),
                                React.createElement(ej2_react_circulargauge_1.RangeDirective, { start: 20, end: 50, radius: "82%", color: "#EFA006", startWidth: 40, endWidth: 40, legendText: "Satisfied" }),
                                React.createElement(ej2_react_circulargauge_1.RangeDirective, { start: 50, end: 80, radius: "82%", color: "#FFE700", startWidth: 40, endWidth: 40, legendText: "Good" }),
                                React.createElement(ej2_react_circulargauge_1.RangeDirective, { start: 80, end: 100, radius: "82%", color: "#1DC060", startWidth: 40, endWidth: 40, legendText: "Excellent" })))))));
        };
        _this.renderSurveyResponseContent = function () {
            var s = _this.surveyStats();
            var rateText = "".concat(s.responseRate.toFixed(1), "%");
            // Show percentage in data labels (like renderSlaComplianceContent)
            var onTextRender = function (args) {
                var _a, _b;
                var pct = (_b = (_a = args) === null || _a === void 0 ? void 0 : _a.point) === null || _b === void 0 ? void 0 : _b.percentage;
                if (pct != null)
                    args.text = "".concat(pct.toFixed(0), "%");
            };
            return (React.createElement("div", { className: "customer-chart-wrap" },
                React.createElement(ej2_react_charts_1.AccumulationChartComponent, { ref: _this.surveyDonutRef, legendSettings: { visible: true, position: 'Top' }, tooltip: { enable: true }, width: "100%", height: "100%", textRender: onTextRender, annotations: [{
                            content: "<div style=\"text-align:center\"><div style=\"font-size:16px;font-weight:700\">".concat(rateText, "</div><div style=\"font-size:12px;color:#6b7280\">Response Rate</div></div>"),
                            region: 'Series',
                            coordinateUnits: 'Pixel',
                            x: '50%', y: '50%'
                        }], load: _this.accumulationLoad.bind(_this) },
                    React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.AccumulationLegend, ej2_react_charts_1.PieSeries, ej2_react_charts_1.AccumulationTooltip, ej2_react_charts_1.AccumulationDataLabel, ej2_react_charts_1.AccumulationAnnotation] }),
                    React.createElement(ej2_react_charts_1.AccumulationSeriesCollectionDirective, null,
                        React.createElement(ej2_react_charts_1.AccumulationSeriesDirective, { dataSource: _this.getSurveyDonutData(), xName: "x", yName: "y", innerRadius: "70%", type: "Pie", dataLabel: {
                                visible: true,
                                position: 'Outside',
                                connectorStyle: { length: '8px' }
                            }, pointColorMapping: "color", animation: { enable: false }, borderRadius: 10, border: { width: 4, color: '#ffffff' } })))));
        };
        _this.toolbarItem = ['ExcelExport', 'PdfExport', 'ColumnChooser'];
        _this.toolbarClick = function (args) {
            var _a;
            switch (args.item.id) {
                case 'surveyDetails_pdfexport': {
                    var grid = _this.surveyGridRef.current;
                    if (!grid)
                        return;
                    // Start from current columns and drop RatedOn for PDF
                    var exportCols = grid.getColumns().filter(function (c) { return c.field !== 'RatedOn'; });
                    // Optional: tighten widths to keep all columns on one page
                    var widthOverrides_1 = {
                        TicketId: 90,
                        Subject: 250,
                        Platform: 90,
                        Rating: 80,
                        RatedBy: 110,
                        Feedback: 350
                    };
                    exportCols.forEach(function (c) {
                        var w = widthOverrides_1[c.field];
                        if (w)
                            c.width = w;
                    });
                    // Use fitToPage so columns don’t spill to a second page
                    grid.pdfExport({
                        fileName: "SurveyDetails.pdf",
                        pageOrientation: 'Landscape',
                        pageSize: 'A4',
                        columns: exportCols,
                        // @ts-ignore supported at runtime to scale columns to page width
                        fitToPage: true
                    });
                    break;
                }
                case 'surveyDetails_excelexport':
                    (_a = _this.surveyGridRef.current) === null || _a === void 0 ? void 0 : _a.excelExport();
                    break;
            }
        };
        _this.onSurveyCellInfo = function (args) {
            var _a, _b, _c, _d;
            if (((_a = args === null || args === void 0 ? void 0 : args.column) === null || _a === void 0 ? void 0 : _a.field) !== 'Feedback')
                return;
            var cell = args === null || args === void 0 ? void 0 : args.cell;
            var txt = String((_c = (_b = args === null || args === void 0 ? void 0 : args.data) === null || _b === void 0 ? void 0 : _b.Feedback) !== null && _c !== void 0 ? _c : '').trim();
            if (cell && typeof cell.setAttribute === 'function') {
                if (txt)
                    cell.setAttribute('title', txt);
                else
                    (_d = cell.removeAttribute) === null || _d === void 0 ? void 0 : _d.call(cell, 'title');
            }
        };
        _this.renderSurveyGridContent = function () {
            var data = _this.getSurveyGridData();
            return (React.createElement("div", { className: "grid-wrap", style: { height: '100%' } },
                React.createElement(ej2_react_grids_1.GridComponent, { id: 'surveyDetails', ref: _this.surveyGridRef, dataSource: data, gridLines: 'Both', allowResizing: true, allowPaging: true, allowSorting: true, allowFiltering: true, showColumnChooser: true, height: "100%", pageSettings: { pageSize: 12 }, filterSettings: { type: 'Menu' }, toolbar: _this.toolbarItem, allowExcelExport: true, allowPdfExport: true, toolbarClick: _this.toolbarClick, queryCellInfo: _this.onSurveyCellInfo },
                    React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_grids_1.Page, ej2_react_grids_1.Toolbar, ej2_react_grids_1.Sort, ej2_react_grids_1.Filter, ej2_react_grids_1.ColumnChooser, ej2_react_grids_1.ExcelExport, ej2_react_grids_1.PdfExport, ej2_react_grids_1.Resize] }),
                    React.createElement(ej2_react_grids_1.ColumnsDirective, null,
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "TicketId", headerText: "Ticket ID", headerTemplate: _this.headerWithTooltip("Ticket ID"), width: "120", textAlign: "Left" }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Subject", headerText: "Subject", headerTemplate: _this.headerWithTooltip("Subject"), width: "370", textAlign: "Left" }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Platform", headerText: "Platform", headerTemplate: _this.headerWithTooltip("Platform"), width: "120" }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Rating", headerText: "Rating", headerTemplate: _this.headerWithTooltip("Rating"), width: "120" }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "RatedOn", headerText: "Rated On", headerTemplate: _this.headerWithTooltip("Rated On"), width: "190", type: "datetime", format: "MMM dd, yyyy hh:mm a" }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "RatedBy", headerText: "Rated By", headerTemplate: _this.headerWithTooltip("Rated By"), width: "160" }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Feedback", headerText: "Feedback", headerTemplate: _this.headerWithTooltip("Feedback"), width: "280" })))));
        };
        _this.dashboard3 = function () {
            var s = _this.surveyStats();
            return (React.createElement("div", { className: "Container" },
                _this.renderHeader('Customer Satisfaction'),
                React.createElement(ej2_react_layouts_1.DashboardLayoutComponent, { ref: _this.csatRef, id: "dashboard_csat", style: { height: '85vh', width: '100%' }, columns: 8, cellAspectRatio: 90 / 100, cellSpacing: _this.cellSpacing, allowResizing: false, allowDragging: false, mediaQuery: "(max-width:950px)", created: _this.onCsatCreated },
                    React.createElement(ej2_react_layouts_1.PanelsDirective, null,
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 0, col: 0, content: _this.kpiCard([
                                {
                                    title: 'Positive',
                                    description: 'Share and count of positive ratings in the selected range.',
                                    valuePrimary: "".concat(s.posPct.toFixed(1), "%"),
                                    valueMeta: "(".concat(s.positive.toLocaleString(), " Ratings)"),
                                    color: '#1DC060'
                                }
                            ]), cssClass: "kpi-panel" }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 0, col: 2, content: _this.kpiCard([
                                {
                                    title: 'Neutral',
                                    description: 'Share and count of neutral ratings in the selected range.',
                                    valuePrimary: "".concat(s.neuPct.toFixed(1), "%"),
                                    valueMeta: "(".concat(s.neutral.toLocaleString(), " Ratings)"),
                                    color: '#EFA006'
                                }
                            ]), cssClass: "kpi-panel" }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 0, col: 4, content: _this.kpiCard([
                                {
                                    title: 'Negative',
                                    description: 'Share and count of negative ratings in the selected range.',
                                    valuePrimary: "".concat(s.negPct.toFixed(1), "%"),
                                    valueMeta: "(".concat(s.negative.toLocaleString(), " Ratings)"),
                                    color: '#FF3B30'
                                }
                            ]), cssClass: "kpi-panel" }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 0, col: 6, content: _this.kpiCard([
                                {
                                    title: 'Survey Sent',
                                    description: 'Total number of satisfaction surveys sent.',
                                    valuePrimary: s.sent.toLocaleString(),
                                    color: '#6643B5'
                                }
                            ]), cssClass: "kpi-panel" }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 4, sizeY: 3, row: 1, col: 0, header: _this.renderCsatHeader, content: _this.renderCsatContent }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 4, sizeY: 3, row: 1, col: 4, header: _this.renderSurveyResponseHeader, content: _this.renderSurveyResponseContent }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 8, sizeY: 4, row: 4, col: 0, header: _this.renderSurveyGridHeader, content: _this.renderSurveyGridContent })))));
        };
        _this.renderDashboard = function () {
            var selectedId = _this.state.selectedId;
            switch (selectedId) {
                case 'support': return _this.dashboard1();
                case 'monitoring': return _this.dashboard2();
                case 'satisfaction': return _this.dashboard3();
                default: return _this.dashboard1();
            }
        };
        _this.toolbarTitleTemplate = function () { return (React.createElement("span", { className: "customer-header-title" }, "Customer Support Dashboard")); };
        _this.onSidebarCreated = function () {
            if (_this.sidebarRef.current) {
                _this.sidebarRef.current.hide(); // ensure hidden
            }
        };
        _this.onToolbarClicked = function (args) {
            if (args.item.tooltipText === 'Menu') {
                var sb = _this.sidebarRef.current;
                if (!sb)
                    return;
                if (sb.isOpen) {
                    sb.hide();
                }
                else {
                    // Only allow opens initiated from the Menu button
                    _this.menuToggleIntent = true;
                    sb.show();
                }
            }
        };
        _this.notifyResize = function () { return window.dispatchEvent(new Event('sidebar-toggled')); };
        _this.onSidebarOpen = function () {
            var _a;
            // Block unintended opens (e.g., DevTools resize)
            if (!_this.menuToggleIntent) {
                (_a = _this.sidebarRef.current) === null || _a === void 0 ? void 0 : _a.hide();
                return;
            }
            _this.menuToggleIntent = false;
            setTimeout(_this.notifyResize, 400);
            _this.setState({ isDocked: false });
            setTimeout(function () { return _this.refreshActiveDashboard(); }, 500);
        };
        _this.onSidebarClose = function () {
            // Clear any stale intent
            _this.menuToggleIntent = false;
            setTimeout(_this.notifyResize, 400);
            _this.setState({ isDocked: true });
            setTimeout(function () {
                _this.refreshActiveDashboard();
            }, 700);
        };
        _this.isLightIconTheme = function () {
            var _a;
            var cls = (((_a = document.body) === null || _a === void 0 ? void 0 : _a.className) || '').toLowerCase();
            var hash = (location.hash.split('/')[1] || '').toLowerCase();
            var key = cls || hash;
            return /(bootstrap5_3|fluent2-highcontrast|fluent2|fluent)(-dark)?/.test(key);
        };
        _this.icon = function (name) {
            return "".concat(_this.isLightIconTheme() ? 'sf-dashboard-light' : 'sf-dashboard-bold', "-").concat(name);
        };
        _this.state = {
            selectedId: 'support',
            platform: 'All Platform',
            dateRange: {
                startDate: new Date(2025, 8, 1),
                endDate: new Date(2025, 8, 30) // Sep 30, 2025
            },
            pieGroupBy: 'Status',
            lineGroupBy: 'Type of Request',
            comboGroupBy: 'Priority',
            columnGroupBy: 'Hour',
            isDocked: true
        };
        _this.sidebarRef = React.createRef();
        _this.trafficRef = React.createRef();
        _this.monitoringRef = React.createRef();
        _this.csatRef = React.createRef();
        _this.supportData = (SupportData !== null && SupportData !== void 0 ? SupportData : {});
        _this.allTicketsFlat = _this.flattenTickets(_this.supportData);
        return _this;
    }
    CustomerSupportDashboard.prototype.filterByGlobal = function (tickets) {
        var _a = this.state, platform = _a.platform, dateRange = _a.dateRange;
        var filtered = tickets;
        if (platform && platform !== 'All Platform') {
            filtered = filtered.filter(function (t) { var _a; return ((_a = t.Platform) !== null && _a !== void 0 ? _a : '').toLowerCase() === platform.toLowerCase(); });
        }
        if (dateRange.startDate && dateRange.endDate) {
            var start_1 = dateRange.startDate.getTime();
            var end_1 = new Date(dateRange.endDate.getFullYear(), dateRange.endDate.getMonth(), dateRange.endDate.getDate(), 23, 59, 59, 999).getTime();
            filtered = filtered.filter(function (t) {
                var created = new Date(t.CreatedOn).getTime();
                return created >= start_1 && created <= end_1;
            });
        }
        return filtered;
    };
    // KPIs
    CustomerSupportDashboard.prototype.kpiData = function () {
        var tickets = this.filterByGlobal(this.getAllTickets());
        var created = tickets.length;
        var resolved = tickets.filter(function (t) { return t.ResolutionTime; }).length;
        var reopened = tickets.filter(function (t) { return t.Status === 'Reopen'; }).length;
        var unresolved = tickets.filter(function (t) { return !t.ResolutionTime; }).length;
        return { created: created, resolved: resolved, reopened: reopened, unresolved: unresolved };
    };
    // Grouping helpers
    CustomerSupportDashboard.prototype.safeField = function (ticket, by) {
        var _a, _b, _c, _d;
        switch (by) {
            case 'Status': return (_a = ticket.Status) !== null && _a !== void 0 ? _a : 'Unknown';
            case 'Priority': return (_b = ticket.Priority) !== null && _b !== void 0 ? _b : 'Unknown';
            case 'Source': return (_c = ticket.Source) !== null && _c !== void 0 ? _c : 'Unknown';
            case 'Type of Request': return (_d = ticket.TypeOfRequest) !== null && _d !== void 0 ? _d : 'Unknown';
            default: return 'Unknown';
        }
    };
    CustomerSupportDashboard.prototype.groupCount = function (by) {
        var _this = this;
        var tickets = this.filterByGlobal(this.getAllTickets());
        var map = new Map();
        tickets.forEach(function (t) {
            var _a;
            var key = _this.safeField(t, by);
            map.set(key, ((_a = map.get(key)) !== null && _a !== void 0 ? _a : 0) + 1);
        });
        return Array.from(map.entries()).map(function (_a) {
            var k = _a[0], v = _a[1];
            return ({ x: k, y: v });
        }).sort(function (a, b) { return b.y - a.y; });
    };
    CustomerSupportDashboard.prototype.groupCreatedClosed = function (by) {
        var _this = this;
        var tickets = this.filterByGlobal(this.getAllTickets());
        var map = new Map();
        tickets.forEach(function (t) {
            var _a;
            var key = _this.safeField(t, by);
            var bucket = (_a = map.get(key)) !== null && _a !== void 0 ? _a : { created: 0, closed: 0 };
            bucket.created += 1;
            if (t.ResolutionTime)
                bucket.closed += 1;
            map.set(key, bucket);
        });
        return Array.from(map.entries()).map(function (_a) {
            var k = _a[0], v = _a[1];
            return (__assign({ x: k }, v));
        }).sort(function (a, b) { return b.created - a.created; });
    };
    CustomerSupportDashboard.prototype.groupByTime = function (grain) {
        var tickets = this.filterByGlobal(this.getAllTickets());
        // Clamp to selected date range (inclusive)
        var dateRange = this.state.dateRange;
        var hasRange = !!dateRange.startDate && !!dateRange.endDate;
        var startMs = hasRange ? new Date(dateRange.startDate).setHours(0, 0, 0, 0) : -Infinity;
        var endMs = hasRange
            ? new Date(dateRange.endDate).setHours(23, 59, 59, 999)
            : Infinity;
        var inRange = function (d) {
            var t = d.getTime();
            return t >= startMs && t <= endMs;
        };
        var map = new Map();
        var keyFromDate = function (d) {
            // Use local date parts to avoid UTC/day-shift issues (toISOString() uses UTC)
            switch (grain) {
                case 'Hour': return "".concat(d.getHours().toString().padStart(2, '0'), ":00");
                case 'Date': {
                    var yy = d.getFullYear();
                    var mm = String(d.getMonth() + 1).padStart(2, '0');
                    var dd = String(d.getDate()).padStart(2, '0');
                    return "".concat(yy, "-").concat(mm, "-").concat(dd);
                }
                case 'Week': {
                    // ISO week id using local date -> W##-YYYY
                    var local = new Date(d.getFullYear(), d.getMonth(), d.getDate());
                    // ISO week number (Mon-based)
                    var dayNum = (local.getDay() + 6) % 7; // 0..6 where 0 => Monday
                    var thursday = new Date(local);
                    thursday.setDate(local.getDate() - dayNum + 3);
                    var firstJan = new Date(thursday.getFullYear(), 0, 1);
                    var weekNo = Math.floor(((thursday.getTime() - firstJan.getTime()) / 86400000 + firstJan.getDay() + 1) / 7) + 1;
                    return "W".concat(weekNo, "-").concat(thursday.getFullYear());
                }
                case 'Month': {
                    var yy = d.getFullYear();
                    var mm = String(d.getMonth() + 1).padStart(2, '0');
                    return "".concat(yy, "-").concat(mm);
                }
                case 'Year': return "".concat(d.getFullYear());
                default: {
                    var yy = d.getFullYear();
                    var mm = String(d.getMonth() + 1).padStart(2, '0');
                    var dd = String(d.getDate()).padStart(2, '0');
                    return "".concat(yy, "-").concat(mm, "-").concat(dd);
                }
            }
        };
        tickets.forEach(function (t) {
            var _a, _b;
            var created = new Date(t.CreatedOn);
            if (inRange(created)) {
                var ck = keyFromDate(created);
                var cBucket = (_a = map.get(ck)) !== null && _a !== void 0 ? _a : { created: 0, closed: 0 };
                cBucket.created += 1;
                map.set(ck, cBucket);
            }
            if (t.ResolutionTime) {
                var resolved = new Date(t.ResolutionTime);
                if (inRange(resolved)) { // <-- clamp closed to range
                    var rk = keyFromDate(resolved);
                    var rBucket = (_b = map.get(rk)) !== null && _b !== void 0 ? _b : { created: 0, closed: 0 };
                    rBucket.closed += 1;
                    map.set(rk, rBucket); // only create bucket if in range
                }
            }
        });
        var entries = Array.from(map.entries());
        var parsed = entries.map(function (_a) {
            var x = _a[0], v = _a[1];
            var sortKey = x;
            if (/^\d{2}:\d{2}$/.test(x))
                sortKey = x; // Hour
            else if (/^\d{4}-\d{2}-\d{2}$/.test(x))
                sortKey = x;
            else if (/^\d{4}-\d{2}$/.test(x))
                sortKey = "".concat(x, "-01");
            else if (/^\d{4}$/.test(x))
                sortKey = "".concat(x, "-01-01");
            else if (/^W\d{1,2}-\d{4}$/.test(x)) {
                var _b = x.split('-'), w = _b[0], y = _b[1];
                var week = Number(w.replace('W', ''));
                var year = Number(y);
                var d = new Date(year, 0, 1 + (week - 1) * 7);
                sortKey = d.toISOString().slice(0, 10);
            }
            return __assign(__assign({ x: x }, v), { sortKey: sortKey });
        });
        parsed.sort(function (a, b) { return a.sortKey.localeCompare(b.sortKey); });
        return parsed.map(function (p) { return ({ x: p.x, created: p.created, closed: p.closed }); });
    };
    CustomerSupportDashboard.prototype.accumulationLoad = function (args) {
        var _a;
        var selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
        args.accumulation.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").
            replace(/light/i, "Light").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        var isDark = /dark/i.test(selectedTheme)
            || /dark/i.test(String(selectedTheme))
            || /high-?contrast/i.test(selectedTheme)
            || /high-?contrast/i.test(String(selectedTheme));
        if (isDark && Array.isArray((_a = args.accumulation) === null || _a === void 0 ? void 0 : _a.series)) {
            args.accumulation.series.forEach(function (s) {
                var _a, _b;
                var width = (_b = (_a = s === null || s === void 0 ? void 0 : s.border) === null || _a === void 0 ? void 0 : _a.width) !== null && _b !== void 0 ? _b : 1;
                s.border = { color: '#000000', width: width };
            });
        }
    };
    ;
    CustomerSupportDashboard.prototype.Chartload = function (args) {
        var selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/contrast/i, 'Contrast').replace(/-dark/i, "Dark");
        if (selectedTheme === 'highcontrast') {
            args.chart.series[0].marker.dataLabel.fill = '#000000';
            args.chart.series[1].marker.dataLabel.fill = '#000000';
        }
    };
    ;
    CustomerSupportDashboard.prototype.Gaugeload = function (args) {
        // custom code start
        var selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.gauge.theme = ((selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/-high/i, 'High').replace(/contrast/i, 'Contrast').replace(/5.3/i, '5'));
        // custom code end
    };
    ;
    CustomerSupportDashboard.prototype.formatHourLabel = function (hhmm) {
        var h = hhmm.split(':').map(Number)[0];
        var h12 = ((h + 11) % 12) + 1;
        var ampm = h < 12 ? 'AM' : 'PM';
        return "".concat(h12, " ").concat(ampm);
    };
    CustomerSupportDashboard.prototype.formatDateLabel = function (iso) {
        var d = new Date(iso);
        return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }); // Jan 1
    };
    // expects W##-YYYY (ISO week id) -> display Sun–Sat range
    CustomerSupportDashboard.prototype.formatWeekRangeSunSat = function (weekId) {
        var _a = weekId.split('-'), wStr = _a[0], yStr = _a[1];
        var w = parseInt(wStr.replace('W', ''), 10);
        var y = parseInt(yStr, 10);
        var jan4 = new Date(Date.UTC(y, 0, 4));
        var day = jan4.getUTCDay() || 7; // 1..7
        var week1Mon = new Date(jan4);
        week1Mon.setUTCDate(jan4.getUTCDate() - day + 1);
        var mon = new Date(week1Mon);
        mon.setUTCDate(week1Mon.getUTCDate() + (w - 1) * 7);
        var sun = new Date(mon);
        sun.setUTCDate(mon.getUTCDate() - 1);
        var sat = new Date(sun);
        sat.setUTCDate(sun.getUTCDate() + 6);
        var s = sun.toLocaleDateString('en-US', { month: 'short', day: '2-digit' });
        var e = sat.toLocaleDateString('en-US', { month: 'short', day: '2-digit' });
        return "".concat(s, " - ").concat(e);
    };
    CustomerSupportDashboard.prototype.formatMonthLabel = function (ym) {
        var _a = ym.split('-').map(Number), y = _a[0], m = _a[1];
        var d = new Date(y, m - 1, 1);
        return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }); // Jan 2025
    };
    CustomerSupportDashboard.prototype.axisLabelFormatterFor = function (grain) {
        var _this = this;
        return function (args) {
            var txt = String(args.text);
            switch (grain) {
                case 'Hour':
                    if (/^\d{2}:\d{2}$/.test(txt))
                        args.text = _this.formatHourLabel(txt);
                    break;
                case 'Date':
                    if (/^\d{4}-\d{2}-\d{2}$/.test(txt))
                        args.text = _this.formatDateLabel(txt);
                    break;
                case 'Week':
                    if (/^W\d{1,2}-\d{4}$/.test(txt))
                        args.text = _this.formatWeekRangeSunSat(txt);
                    break;
                case 'Month':
                    if (/^\d{4}-\d{2}$/.test(txt))
                        args.text = _this.formatMonthLabel(txt);
                    break;
                default:
                    break;
            }
        };
    };
    CustomerSupportDashboard.prototype.toRGBA = function (hex, alpha) {
        if (alpha === void 0) { alpha = 0.08; }
        var m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex.trim());
        if (!m)
            return "rgba(110,87,236,".concat(alpha, ")");
        var r = parseInt(m[1], 16), g = parseInt(m[2], 16), b = parseInt(m[3], 16);
        return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(alpha, ")");
    };
    // ---- Range + KPI comparison helpers ----
    CustomerSupportDashboard.prototype.daysInclusive = function (r) {
        if (!r.startDate || !r.endDate)
            return 0;
        var s = new Date(r.startDate);
        s.setHours(0, 0, 0, 0);
        var e = new Date(r.endDate);
        e.setHours(0, 0, 0, 0);
        return Math.round((e.getTime() - s.getTime()) / 86400000) + 1;
    };
    CustomerSupportDashboard.prototype.isFullMonthRange = function (r) {
        if (!r.startDate || !r.endDate)
            return false;
        var s = new Date(r.startDate);
        var e = new Date(r.endDate);
        var lastDay = new Date(s.getFullYear(), s.getMonth() + 1, 0).getDate();
        return s.getDate() === 1 &&
            e.getDate() === lastDay &&
            s.getMonth() === e.getMonth() &&
            s.getFullYear() === e.getFullYear();
    };
    CustomerSupportDashboard.prototype.shiftRangeBack = function (r, days) {
        if (!r.startDate || !r.endDate)
            return { startDate: null, endDate: null };
        var s = new Date(r.startDate);
        s.setDate(s.getDate() - days);
        var e = new Date(r.endDate);
        e.setDate(e.getDate() - days);
        return { startDate: s, endDate: e };
    };
    CustomerSupportDashboard.prototype.previousAlignedRange = function (r) {
        var len = this.daysInclusive(r);
        if (len === 1)
            return { prev: this.shiftRangeBack(r, 1), label: 'vs Yesterday' };
        if (this.isFullMonthRange(r)) {
            var s = new Date(r.startDate);
            var prevMonthStart = new Date(s.getFullYear(), s.getMonth() - 1, 1);
            var prevMonthEnd = new Date(s.getFullYear(), s.getMonth(), 0);
            return { prev: { startDate: prevMonthStart, endDate: prevMonthEnd }, label: 'vs Last Month' };
        }
        if (len === 7)
            return { prev: this.shiftRangeBack(r, 7), label: 'vs Last Week' };
        return { prev: this.shiftRangeBack(r, Math.max(1, len)), label: 'vs Previous Period' };
    };
    CustomerSupportDashboard.prototype.filterByPlatformAndRange = function (all, r) {
        var platform = this.state.platform;
        var list = all;
        if (platform && platform !== 'All Platform') {
            list = list.filter(function (t) { var _a; return ((_a = t.Platform) !== null && _a !== void 0 ? _a : '').toLowerCase() === platform.toLowerCase(); });
        }
        if (!r.startDate || !r.endDate)
            return list;
        var start = new Date(r.startDate);
        start.setHours(0, 0, 0, 0);
        var end = new Date(r.endDate);
        end.setHours(23, 59, 59, 999);
        return list.filter(function (t) {
            var c = new Date(t.CreatedOn).getTime();
            return c >= start.getTime() && c <= end.getTime();
        });
    };
    CustomerSupportDashboard.prototype.kpiCountsForRange = function (r) {
        var set = this.filterByPlatformAndRange(this.getAllTickets(), r);
        var created = set.length;
        var resolved = set.filter(function (t) { return t.ResolutionTime; }).length;
        var unresolved = Math.max(0, created - resolved);
        var reopened = set.filter(function (t) { return t.Status === 'Reopen'; }).length;
        return { created: created, resolved: resolved, unresolved: unresolved, reopened: reopened };
    };
    CustomerSupportDashboard.prototype.makeCountBadge = function (curr, prev, label) {
        var diff = curr - prev;
        if (diff === 0)
            return { text: "0 ".concat(label), trend: 'flat' };
        return {
            text: "".concat(diff > 0 ? '+' : '').concat(diff, " ").concat(label),
            trend: diff > 0 ? 'up' : 'down'
        };
    };
    CustomerSupportDashboard.prototype.kpiComparisons = function () {
        var range = this.state.dateRange;
        var _a = this.previousAlignedRange(range), prev = _a.prev, label = _a.label;
        var cur = this.kpiCountsForRange(range);
        var old = this.kpiCountsForRange(prev);
        return {
            created: this.makeCountBadge(cur.created, old.created, label),
            resolved: this.makeCountBadge(cur.resolved, old.resolved, label),
            unresolved: this.makeCountBadge(cur.unresolved, old.unresolved, label),
            reopened: this.makeCountBadge(cur.reopened, old.reopened, label),
        };
    };
    // 2025 limits
    CustomerSupportDashboard.prototype.eom = function (y, m) { return new Date(y, m + 1, 0, 23, 59, 59, 999); };
    CustomerSupportDashboard.prototype.monthRange2025 = function (m) {
        return { startDate: new Date(2025, m, 1, 0, 0, 0, 0), endDate: this.eom(2025, m) };
    };
    CustomerSupportDashboard.prototype.clampTo2025 = function (r) {
        var s = r.startDate ? new Date(r.startDate) : this.yrStart2025;
        var e = r.endDate ? new Date(r.endDate) : this.yrEnd2025;
        var start = new Date(Math.max(this.yrStart2025.getTime(), new Date(s.setHours(0, 0, 0, 0)).getTime()));
        var end = new Date(Math.min(this.yrEnd2025.getTime(), new Date(e.setHours(23, 59, 59, 999)).getTime()));
        return { startDate: start, endDate: end };
    };
    // Presets inside the DateRangePicker (Custom Range appears last automatically)
    CustomerSupportDashboard.prototype.get2025Presets = function () {
        var _this = this;
        return __spreadArray(__spreadArray([], Array.from({ length: 12 }, function (_, m) {
            var mr = _this.monthRange2025(m);
            var label = new Date(2025, m, 1).toLocaleString(undefined, { month: 'short', year: 'numeric' });
            return { label: label, start: mr.startDate, end: mr.endDate };
        }), true), [
            { label: 'Year (2025)', start: this.yrStart2025, end: this.yrEnd2025 },
        ], false);
    };
    // ---- Dashboard2 palettes (soft, readable)
    CustomerSupportDashboard.prototype.parseDate = function (d) {
        if (!d)
            return null;
        var dt = new Date(d);
        return isNaN(dt.getTime()) ? null : dt; // guard invalid strings like "null"
    };
    CustomerSupportDashboard.prototype.msBetween = function (from, to) {
        var a = this.parseDate(from);
        var b = this.parseDate(to);
        if (!a || !b)
            return null;
        var ms = b.getTime() - a.getTime();
        return ms >= 0 ? ms : null; // skip negatives (bad data)
    };
    CustomerSupportDashboard.prototype.fmtHM = function (ms) {
        if (ms == null || ms < 0)
            return '0m';
        var totalMins = Math.round(ms / 60000);
        var h = Math.floor(totalMins / 60);
        var m = totalMins % 60;
        return "".concat(h, "h ").concat(m, "m");
    };
    // Average of millisecond durations; returns null when no data
    CustomerSupportDashboard.prototype.averageMs = function (values) {
        var arr = (values !== null && values !== void 0 ? values : []).filter(function (v) { return Number.isFinite(v) && v >= 0; });
        if (arr.length === 0)
            return null;
        var sum = arr.reduce(function (a, b) { return a + b; }, 0);
        return Math.round(sum / arr.length);
    };
    CustomerSupportDashboard.prototype.kpiAverages = function () {
        var _a, _b, _c, _d;
        // use current filters + selected date range
        var range = this.state.dateRange;
        var tickets = this.filterByPlatformAndRange(this.getAllTickets(), range);
        var frt = [];
        var rt = [];
        var rzt = [];
        // FCR: base = resolved tickets; yes = resolved on first contact
        var fcrYes = 0;
        var fcrBase = 0;
        for (var _i = 0, tickets_4 = tickets; _i < tickets_4.length; _i++) {
            var t = tickets_4[_i];
            var fr = this.msBetween(t.CreatedOn, t.FirstResponseTime);
            if (fr != null)
                frt.push(fr);
            var resp = this.msBetween(t.CreatedOn, t.ResponseTime);
            if (resp != null)
                rt.push(resp);
            var endForResolution = (_c = (_b = (_a = t.ResolutionTime) !== null && _a !== void 0 ? _a : t.ResponseTime) !== null && _b !== void 0 ? _b : t.FirstResponseTime) !== null && _c !== void 0 ? _c : null;
            var res = this.msBetween(t.CreatedOn, endForResolution);
            if (res != null)
                rzt.push(res);
            if (t.ResolutionTime) {
                fcrBase += 1;
                var fcrVal = String((_d = t.FirstContactResolution) !== null && _d !== void 0 ? _d : '').toLowerCase();
                if (fcrVal === 'yes' || fcrVal === 'true')
                    fcrYes += 1;
            }
        }
        var avgFRTms = this.averageMs(frt);
        var avgRTms = this.averageMs(rt);
        var avgRZTms = this.averageMs(rzt);
        var avgFRT_HM = this.fmtHM(avgFRTms);
        var avgRT_HM = this.fmtHM(avgRTms);
        var avgRZT3_HM = this.fmtHM(avgRZTms != null ? avgRZTms * 4 : null);
        return {
            avgFRT_HM: avgFRT_HM,
            avgRT_HM: avgRT_HM,
            avgRZT3_HM: avgRZT3_HM,
            fcrPct: fcrBase ? (fcrYes / fcrBase) * 100 : 0,
            fcrYes: fcrYes,
            fcrBase: fcrBase
        };
    };
    // ----- SLA helpers
    CustomerSupportDashboard.prototype.isSlaApplied = function (t) {
        var _a;
        return ((_a = t.SlaApplied) !== null && _a !== void 0 ? _a : 'No') === 'Yes';
    };
    CustomerSupportDashboard.prototype.isResponseBreached = function (t) {
        if (!this.isSlaApplied(t))
            return false;
        var ms = this.msBetween(t.CreatedOn, t.FirstResponseTime);
        // No first response yet counts as breach for response SLA
        return ms == null || ms > SLA_THRESHOLDS.responseHours * 3600000;
    };
    CustomerSupportDashboard.prototype.isResolutionBreached = function (t) {
        var _a;
        if (!this.isSlaApplied(t))
            return false;
        // Count as breach if resolved after SLA OR still unresolved and already over SLA
        var endIso = (_a = t.ResolutionTime) !== null && _a !== void 0 ? _a : new Date().toISOString();
        var elapsed = this.msBetween(t.CreatedOn, endIso);
        var limitMs = SLA_THRESHOLDS.resolutionHours * 3600000; // hours -> ms
        return (elapsed !== null && elapsed !== void 0 ? elapsed : 0) > limitMs;
    };
    CustomerSupportDashboard.prototype.slaSummary = function () {
        var _this = this;
        var tickets = this.filterByGlobal(this.getAllTickets()).filter(function (t) { return _this.isSlaApplied(t); });
        var applied = tickets.length;
        var responseBreaches = 0;
        var resolutionBreaches = 0;
        var breachedUnique = 0;
        for (var _i = 0, tickets_5 = tickets; _i < tickets_5.length; _i++) {
            var t = tickets_5[_i];
            var rb = this.isResponseBreached(t);
            var rz = this.isResolutionBreached(t);
            if (rb)
                responseBreaches += 1;
            if (rz)
                resolutionBreaches += 1;
            if (rb || rz)
                breachedUnique += 1;
        }
        var achieved = Math.max(0, applied - breachedUnique);
        return { applied: applied, achieved: achieved, breached: breachedUnique, responseBreaches: responseBreaches, resolutionBreaches: resolutionBreaches };
    };
    CustomerSupportDashboard.prototype.normalizeBreachesForRange = function (total, breached) {
        var T = Math.max(0, Number(total) || 0);
        var b = Math.max(0, Math.min(Number(breached) || 0, T));
        // Use real breach counts; only adjust when breaches would equal/exceed achieved
        var rawAchieved = T - b;
        if (T > 0 && b >= rawAchieved) {
            // Minimal adjustment: make achieved higher by 1-3% (varies by total size)
            var margin = Math.max(1, Math.ceil(T * 0.0009)); // 1% margin or at least 1 ticket
            b = Math.max(0, rawAchieved - margin); // achieved = T - b will be higher by margin
        }
        var a = Math.max(0, T - b);
        return { achieved: a, breached: b };
    };
    ;
    CustomerSupportDashboard.prototype.apportionBreachesToBuckets = function (rows, globalBreached) {
        var target = Math.max(0, Math.floor(globalBreached));
        var sumRaw = rows.reduce(function (s, r) { return s + Math.max(0, r.breachedRaw); }, 0);
        if (target === 0 || sumRaw === 0) {
            return rows.map(function (r) { return (__assign(__assign({}, r), { breached: 0, achieved: r.total })); });
        }
        var exacts = rows.map(function (r) { return (Math.max(0, r.breachedRaw) / sumRaw) * target; });
        var floors = exacts.map(Math.floor);
        var remain = target - floors.reduce(function (s, v) { return s + v; }, 0);
        var order = exacts
            .map(function (e, i) { return ({ i: i, frac: e - floors[i] }); })
            .sort(function (a, b) { return b.frac - a.frac; })
            .map(function (o) { return o.i; });
        var capped = floors.slice();
        var k = 0;
        while (remain > 0) {
            var i = order[k++ % order.length];
            var cap = rows[i].total;
            if (capped[i] < cap) {
                capped[i] += 1;
                remain -= 1;
            }
            // Fallback to distribute to anyone with room
            if (k > order.length * 4 && remain > 0) {
                for (var j = 0; j < capped.length && remain > 0; j++) {
                    var room = rows[j].total - capped[j];
                    if (room > 0) {
                        capped[j] += 1;
                        remain -= 1;
                    }
                }
                k = 0;
            }
        }
        // Final clamp and compute achieved
        return rows.map(function (r, i) {
            var breached = Math.min(Math.max(0, capped[i]), r.total);
            return __assign(__assign({}, r), { breached: breached, achieved: Math.max(0, r.total - breached) });
        });
    };
    ;
    // --- Survey / CSAT helpers ---
    CustomerSupportDashboard.prototype.surveyStats = function () {
        var tickets = this.filterByGlobal(this.getAllTickets());
        var sent = tickets.filter(function (t) { return t.SurveySent === 'Yes'; }).length;
        var responded = tickets.filter(function (t) { return t.SurveyResponded === 'Yes' && t.Rating && t.Rating !== 'No'; });
        var positive = tickets.filter(function (t) { return t.Rating === 'Positive'; }).length;
        var neutral = tickets.filter(function (t) { return t.Rating === 'Neutral'; }).length;
        var negative = tickets.filter(function (t) { return t.Rating === 'Negative'; }).length;
        var _a = this.normalizePct3([positive, neutral, negative]), posPct = _a[0], neuPct = _a[1], negPct = _a[2];
        var csat = posPct; // CSAT = Positive % of responses
        var responseRate = sent ? (responded.length / sent) * 100 : 0;
        return {
            sent: sent,
            responded: responded.length,
            positive: positive,
            neutral: neutral,
            negative: negative,
            posPct: posPct,
            neuPct: neuPct,
            negPct: negPct,
            csat: csat,
            responseRate: responseRate
        };
    };
    CustomerSupportDashboard.prototype.getSurveyDonutData = function () {
        var s = this.surveyStats();
        var notResponded = Math.max(0, s.sent - s.responded);
        return [
            // Put counts into legend text (x) like SLA compliance
            { x: "Responded (".concat(s.responded.toLocaleString(), ")"), y: s.responded, color: '#E8AA42' },
            { x: "Not Responded (".concat(notResponded.toLocaleString(), ")"), y: notResponded, color: '#1363DF' }
        ];
    };
    CustomerSupportDashboard.prototype.getSurveyGridData = function () {
        var tickets = this.filterByGlobal(this.getAllTickets())
            .filter(function (t) { return t.SurveyResponded === 'Yes'; }); // responded only
        return tickets.map(function (t) {
            var _a, _b;
            return ({
                TicketId: t.TicketId,
                Subject: t.Subject,
                Platform: t.Platform,
                RatedOn: new Date((_b = (_a = t.ResolutionTime) !== null && _a !== void 0 ? _a : t.ResponseTime) !== null && _b !== void 0 ? _b : t.CreatedOn),
                Rating: t.Rating,
                RatedBy: t.Requester,
                Feedback: t.Feedback
            });
        });
    };
    CustomerSupportDashboard.prototype.withTooltip = function (title, node) {
        return (React.createElement(ej2_react_popups_1.TooltipComponent, { content: title, position: this.state.isDocked ? 'RightCenter' : 'BottomCenter', openDelay: 250, closeDelay: 0, showTipPointer: true }, node));
    };
    CustomerSupportDashboard.prototype.render = function () {
        var _this = this;
        var isActive = function (id) { return (_this.state.selectedId === id ? 'active' : ''); };
        return (React.createElement("div", { className: "support-dashboard" },
            React.createElement("div", { className: "control-section" },
                React.createElement("div", { className: "col-lg-12 col-sm-12 col-md-12", id: "customer-dashboard_sidebar_section" },
                    React.createElement(ej2_react_navigations_1.ToolbarComponent, { cssClass: "support-app-toolbar", id: "dockToolbar", height: "".concat(this.TOOLBAR_HEIGHT, "px"), clicked: this.onToolbarClicked },
                        React.createElement(ej2_react_navigations_1.ItemsDirective, null,
                            React.createElement(ej2_react_navigations_1.ItemDirective, { prefixIcon: "e-menu", tooltipText: "Menu" }),
                            React.createElement(ej2_react_navigations_1.ItemDirective, { align: "Left", template: this.toolbarTitleTemplate }))),
                    React.createElement("div", { className: "cs-workarea" },
                        React.createElement(ej2_react_navigations_1.SidebarComponent, { ref: this.sidebarRef, id: 'customer_support-sidebar', className: "cs-sidebar", type: "Push", target: ".cs-content", created: this.onSidebarCreated, open: this.onSidebarOpen, close: this.onSidebarClose, enableDock: true, enableGestures: false, closeOnDocumentClick: false, width: "".concat(this.OPEN_WIDTH, "px"), dockSize: "".concat(this.DOCK_SIZE, "px") },
                            React.createElement("div", { className: "sidebar-content" },
                                this.withTooltip('Support Traffic', React.createElement("div", { className: "customer-nav-item ".concat(isActive('support')), onClick: function () { return _this.handleNavClick('support'); } },
                                    React.createElement("span", { className: "e-icons e-chart", "aria-hidden": "true" }),
                                    React.createElement("span", { className: "customer-nav-text" }, "Support Traffic"))),
                                this.withTooltip('Support Monitoring', React.createElement("div", { className: "customer-nav-item ".concat(isActive('monitoring')), onClick: function () { return _this.handleNavClick('monitoring'); } },
                                    React.createElement("span", { className: this.icon('monitoring'), "aria-hidden": "true" }),
                                    React.createElement("span", { className: "customer-nav-text" }, "Support Monitoring"))),
                                this.withTooltip('Customer Satisfaction', React.createElement("div", { className: "customer-nav-item ".concat(isActive('satisfaction')), onClick: function () { return _this.handleNavClick('satisfaction'); } },
                                    React.createElement("span", { className: this.icon('feedback'), "aria-hidden": "true" }),
                                    React.createElement("span", { className: "customer-nav-text" }, "Customer Satisfaction"))))),
                        React.createElement("div", { className: "cs-content" },
                            React.createElement("div", { className: "app-customer-support-page", style: { padding: '16px', background: '#ffffff' } }, this.renderDashboard()))))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "The Customer Support Dashboard provides a real\u2011time view of ticket flow, SLA performance, and customer satisfaction. With quick filters and interactive visualizations, teams can monitor workload, spot bottlenecks, and make fast, informed decisions to improve support quality and customer experience."))));
    };
    return CustomerSupportDashboard;
}(sample_base_1.SampleBase));
exports.CustomerSupportDashboard = CustomerSupportDashboard;
