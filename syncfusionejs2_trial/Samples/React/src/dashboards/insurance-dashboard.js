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
exports.InsuranceDashboard = void 0;
var React = require("react");
var sample_base_1 = require("../common/sample-base");
var ej2_react_layouts_1 = require("@syncfusion/ej2-react-layouts");
var InsuranceDatasource = require("./insurance-datasource.json");
var ej2_react_navigations_1 = require("@syncfusion/ej2-react-navigations");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var ej2_react_charts_1 = require("@syncfusion/ej2-react-charts");
var ej2_react_grids_1 = require("@syncfusion/ej2-react-grids");
var ej2_react_circulargauge_1 = require("@syncfusion/ej2-react-circulargauge");
var ej2_react_maps_1 = require("@syncfusion/ej2-react-maps");
var ej2_react_kanban_1 = require("@syncfusion/ej2-react-kanban");
var ej2_react_inputs_1 = require("@syncfusion/ej2-react-inputs");
var ej2_react_navigations_2 = require("@syncfusion/ej2-react-navigations");
var ej2_base_1 = require("@syncfusion/ej2-base");
var ej2_react_popups_1 = require("@syncfusion/ej2-react-popups");
require("./insurance-dashboard.css");
require("./dashboard-bold-icon.css");
require("./dashboard-light-icon.css");
var InsuranceData = InsuranceDatasource;
ej2_react_dropdowns_1.MultiSelectComponent.Inject(ej2_react_dropdowns_1.CheckBoxSelection);
(0, ej2_base_1.setCulture)('en');
(0, ej2_base_1.setCurrencyCode)('USD');
var POLICY_TYPES = ['Travel', 'Home', 'Life', 'Health', 'Disability'];
var ALLOWED_YEARS = [2025, 2024, 2023, 2022];
var pieThemePalette = ["#CE9461", "#DC3535", "#F8CA7E", "#FF7000", "#CDA310", "#FFB200", "#FF4949"];
var donutPaletteColors = ["#CD104D", "#C55300", "#FFB200", "#E8AA42", "#FF4949", "#CDA310", "#FF7000", "#C55300"];
var mapPaletteColors = ["#FF4949", "#CE9461", "#FF7000", "#CD104D", "#FFB200", "#C55300"];
var sparklinePalette = ["#05B3DA", "#E77A16", "#9204EA", "#6200EE", "#B1212D", "#82C100"];
// Reusable delta badge (green up, red down)
var getBadgeStyle = function (tone) {
    var base = {
        fontSize: 12,
        fontWeight: 700,
        padding: '2px 8px',
        borderRadius: 999,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        border: '1px solid #E2E8F0'
    };
    return tone === 'good'
        ? __assign(__assign({}, base), { background: '#ECFDF5', color: '#065F46', borderColor: '#A7F3D0' }) : __assign(__assign({}, base), { background: '#FEF2F2', color: '#991B1B', borderColor: '#FECACA' });
};
var DeltaBadge = function (_a) {
    var delta = _a.delta, _b = _a.goodWhenUp, goodWhenUp = _b === void 0 ? true : _b;
    if (!delta || delta.pct == null || delta.prevYear == null)
        return null;
    var up = delta.diff >= 0;
    var good = goodWhenUp ? up : !up;
    var icon = up ? '▲' : '▼';
    var text = "".concat(up ? '+' : '-').concat(Math.abs(delta.pct).toFixed(1), "% vs ").concat(delta.prevYear);
    return (React.createElement("span", { style: getBadgeStyle(good ? 'good' : 'bad') },
        React.createElement("span", { style: { marginRight: 4 } }, icon),
        React.createElement("span", null, text)));
};
var onChartLoad = function (args) {
    var _a, _b;
    var selectedTheme = location.hash.split('/')[1] || 'Material';
    var themeForChart = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1))
        .replace(/contrast/i, 'Contrast')
        .replace(/-dark/i, 'Dark');
    args.chart.theme = themeForChart;
    if (selectedTheme.toLowerCase() === 'highcontrast') {
        var series = args.chart.series;
        if (Array.isArray(series) && series.length) {
            var s0 = series[0];
            var s1 = series[1];
            if ((_a = s0 === null || s0 === void 0 ? void 0 : s0.marker) === null || _a === void 0 ? void 0 : _a.dataLabel)
                s0.marker.dataLabel.fill = '#000000';
            if ((_b = s1 === null || s1 === void 0 ? void 0 : s1.marker) === null || _b === void 0 ? void 0 : _b.dataLabel)
                s1.marker.dataLabel.fill = '#000000';
        }
    }
};
var onAccumulationLoad = function (args) {
    var _a;
    var themeKey = location.hash.split('/')[1] || 'Material';
    var selectedTheme = (themeKey.charAt(0).toUpperCase() + themeKey.slice(1))
        .replace(/-dark/i, 'Dark')
        .replace(/contrast/i, 'Contrast')
        .replace(/-highContrast/i, 'HighContrast');
    args.accumulation.theme = selectedTheme;
    var isDark = /dark/i.test(themeKey)
        || /dark/i.test(String(selectedTheme))
        || /high-?contrast/i.test(themeKey)
        || /high-?contrast/i.test(String(selectedTheme));
    if (isDark && Array.isArray((_a = args.accumulation) === null || _a === void 0 ? void 0 : _a.series)) {
        args.accumulation.series.forEach(function (s) {
            var _a, _b;
            var width = (_b = (_a = s === null || s === void 0 ? void 0 : s.border) === null || _a === void 0 ? void 0 : _a.width) !== null && _b !== void 0 ? _b : 1;
            s.border = { color: '#000000', width: width };
        });
    }
};
var Mapload = function (args) {
    var selectedTheme = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.maps.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/contrast/i, 'Contrast').replace(/-dark/i, "Dark").replace(/-highContrast/i, 'HighContrast');
};
var onGaugeLoad = function (args) {
    var selectedTheme = location.hash.split('/')[1] || 'Material';
    var computed = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1))
        .replace(/-dark/i, 'Dark')
        .replace(/-high/i, 'High')
        .replace(/contrast/i, 'Contrast')
        .replace(/5\.3/i, '5');
    if (args && args.gauge) {
        args.gauge.theme = computed;
    }
};
var headerWithTooltip = function (label) {
    return function () { return (React.createElement("div", { title: label, style: { display: 'inline-block', cursor: 'default' } }, label)); };
};
// Global compact currency formatter (USD)
var currencyCompact = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    compactDisplay: 'short',
    maximumFractionDigits: 1
});
var fmtCurrency = function (n) { return currencyCompact.format(Number(n || 0)); };
var Dashboard1 = function (_a) {
    var selectedYears = _a.selectedYears, onChangeYears = _a.onChangeYears;
    var OverviewRef = React.useRef(null);
    var ProfitvsExpenseRef = React.useRef(null);
    var AssuredAmountRef = React.useRef(null);
    var APERef = React.useRef(null);
    var PolicyRatioRef = React.useRef(null);
    var PolicyHolderRef = React.useRef(null);
    var ReferralRef = React.useRef(null);
    var PoliciesSoldRef = React.useRef(null);
    var yearOptions = React.useMemo(function () { return ALLOWED_YEARS.map(function (y) { return ({ id: String(y), year: String(y) }); }); }, []);
    var currentYearOverview = React.useMemo(function () { return (selectedYears.length ? Math.max.apply(Math, selectedYears) : ALLOWED_YEARS[0]); }, [selectedYears]);
    var onYearChange = function (e) {
        var v = Number(e === null || e === void 0 ? void 0 : e.value);
        if (Number.isFinite(v))
            onChangeYears([v]);
    };
    React.useEffect(function () {
        var timer;
        var refreshAll = function () {
            clearTimeout(timer);
            timer = setTimeout(function () {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                (_a = OverviewRef.current) === null || _a === void 0 ? void 0 : _a.refresh();
                (_b = ProfitvsExpenseRef.current) === null || _b === void 0 ? void 0 : _b.refresh();
                (_c = AssuredAmountRef.current) === null || _c === void 0 ? void 0 : _c.refresh();
                (_d = APERef.current) === null || _d === void 0 ? void 0 : _d.refresh();
                (_e = PolicyRatioRef.current) === null || _e === void 0 ? void 0 : _e.refresh();
                (_f = PolicyHolderRef.current) === null || _f === void 0 ? void 0 : _f.refresh();
                (_g = ReferralRef.current) === null || _g === void 0 ? void 0 : _g.refresh();
                (_h = PoliciesSoldRef.current) === null || _h === void 0 ? void 0 : _h.refresh();
            }, 500);
        };
        window.addEventListener('sidebar-toggled', refreshAll);
        window.addEventListener('resize', refreshAll);
        return function () {
            window.removeEventListener('sidebar-toggled', refreshAll);
            window.removeEventListener('resize', refreshAll);
            clearTimeout(timer);
        };
    }, []);
    // KPIs computed from selected years
    var kpis = React.useMemo(function () {
        var data = InsuranceData.overview; // source: default-datasource.json
        var rows = data.filter(function (r) { return selectedYears.includes(r.year); });
        var policiesSold = rows.length;
        var assuredAmount = rows.reduce(function (sum, r) { var _a; return sum + ((_a = r.AssuredAmount) !== null && _a !== void 0 ? _a : 0); }, 0);
        var totalAmount = rows.reduce(function (sum, r) { var _a; return sum + ((_a = r.TotalAmount) !== null && _a !== void 0 ? _a : 0); }, 0);
        return { policiesSold: policiesSold, assuredAmount: assuredAmount, totalAmount: totalAmount };
    }, [selectedYears]);
    var onCurrencyAxisLabel = function (args) {
        var _a;
        if (((_a = args === null || args === void 0 ? void 0 : args.axis) === null || _a === void 0 ? void 0 : _a.orientation) === 'Vertical') {
            args.text = fmtCurrency(Number(args.value || 0));
        }
    };
    var onNumericAxisLabel = React.useCallback(function (args) {
        var _a;
        if (((_a = args === null || args === void 0 ? void 0 : args.axis) === null || _a === void 0 ? void 0 : _a.valueType) !== 'Category') {
            args.text = fmtCurrency(Number(args.value || 0));
        }
    }, []);
    var onCurrencyTooltip = function (args) {
        var _a, _b, _c, _d, _e, _f;
        var y = Number((_b = (_a = args === null || args === void 0 ? void 0 : args.point) === null || _a === void 0 ? void 0 : _a.y) !== null && _b !== void 0 ? _b : 0);
        var x = String((_d = (_c = args === null || args === void 0 ? void 0 : args.point) === null || _c === void 0 ? void 0 : _c.x) !== null && _d !== void 0 ? _d : '');
        var series = String((_f = (_e = args === null || args === void 0 ? void 0 : args.series) === null || _e === void 0 ? void 0 : _e.name) !== null && _f !== void 0 ? _f : '');
        args.text = series ? "".concat(x, " : ").concat(fmtCurrency(y)) : "".concat(x, ": ").concat(fmtCurrency(y));
    };
    var onCurrencyDataLabel = React.useCallback(function (args) {
        var _a, _b, _c;
        var val = Number((_c = (_b = (_a = args === null || args === void 0 ? void 0 : args.point) === null || _a === void 0 ? void 0 : _a.y) !== null && _b !== void 0 ? _b : args === null || args === void 0 ? void 0 : args.text) !== null && _c !== void 0 ? _c : 0);
        args.text = currencyCompact.format(val);
    }, [currencyCompact]);
    var fmtKpi = function (n) { return fmtCurrency(n); };
    var onCreated = function (e) {
        setTimeout(function () {
            var _a;
            (_a = OverviewRef.current) === null || _a === void 0 ? void 0 : _a.refresh();
        }, 500);
    };
    var PoliciesSold = function () {
        var data = React.useMemo(function () {
            var _a, _b;
            var overviewdata = (_a = InsuranceData.overview) !== null && _a !== void 0 ? _a : [];
            var counts = new Map();
            for (var _i = 0, overviewdata_1 = overviewdata; _i < overviewdata_1.length; _i++) {
                var row = overviewdata_1[_i];
                var y = Number((_b = row.year) !== null && _b !== void 0 ? _b : row.Year);
                if (!Number.isFinite(y))
                    continue;
                counts.set(y, (counts.get(y) || 0) + 1);
            }
            var years = Array.from(counts.keys()).sort(function (a, b) { return a - b; });
            return years.map(function (y) { return ({ x: String(y), y: counts.get(y) || 0 }); });
        }, []);
        return (React.createElement("div", { className: "kpi-totalcard" },
            React.createElement("div", { className: "spark-header" },
                React.createElement("div", { className: "insurance-label" }, "Policies Sold"),
                React.createElement("div", { className: "insurance-card-value" }, kpis.policiesSold.toLocaleString())),
            React.createElement("div", { className: "spark-content", style: { width: '50%', height: '50%' } },
                React.createElement("div", { style: { marginTop: 8, width: '100%' } },
                    React.createElement(ej2_react_charts_1.SparklineComponent, { id: "policies-sold-sparkline", ref: PoliciesSoldRef, type: "Line", dataSource: data, xName: "x", yName: "y", valueType: "Category", width: "100%", height: "55px", lineWidth: 2, fill: "#05B3DA", markerSettings: { visible: ['All'], size: 2, fill: '#05B3DA' }, tooltipSettings: { visible: true, format: 'Year: ${x}<br/>Policies: ${y}' } },
                        React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.SparklineTooltip] }))))));
    };
    var _b = React.useMemo(function () {
        var _a;
        var overviewdata = (_a = InsuranceData.overview) !== null && _a !== void 0 ? _a : [];
        var yearsSel = Array.isArray(selectedYears) ? selectedYears : [];
        if (!overviewdata.length || !yearsSel.length)
            return { assuredDelta: undefined, totalAmountDelta: undefined, avgPremiumDelta: undefined };
        var currentYear = Math.max.apply(Math, yearsSel);
        var prevYear = currentYear - 1;
        var sumFor = function (yr, key) {
            return overviewdata.reduce(function (s, r) { var _a; return (Number((_a = r.year) !== null && _a !== void 0 ? _a : r.Year) === yr ? s + (Number(r[key]) || 0) : s); }, 0);
        };
        var countFor = function (yr) { return overviewdata.reduce(function (s, r) { var _a; return (Number((_a = r.year) !== null && _a !== void 0 ? _a : r.Year) === yr ? s + 1 : s); }, 0); };
        var currAssured = sumFor(currentYear, 'AssuredAmount');
        var prevAssured = sumFor(prevYear, 'AssuredAmount');
        var assuredDiff = currAssured - prevAssured;
        var assuredPct = prevAssured ? (assuredDiff / prevAssured) * 100 : undefined;
        var currTotal = sumFor(currentYear, 'TotalAmount');
        var prevTotal = sumFor(prevYear, 'TotalAmount');
        var totalDiff = currTotal - prevTotal;
        var totalPct = prevTotal ? (totalDiff / prevTotal) * 100 : undefined;
        var currCount = countFor(currentYear);
        var prevCount = countFor(prevYear);
        var currAvg = currCount ? currTotal / currCount : 0;
        var prevAvg = prevCount ? prevTotal / prevCount : 0;
        var avgDiff = currAvg - prevAvg;
        var avgPct = prevAvg ? (avgDiff / prevAvg) * 100 : undefined;
        return {
            assuredDelta: { diff: assuredDiff, pct: assuredPct, prevYear: prevYear },
            totalAmountDelta: { diff: totalDiff, pct: totalPct, prevYear: prevYear },
            avgPremiumDelta: { diff: avgDiff, pct: avgPct, prevYear: prevYear }
        };
    }, [selectedYears]), assuredDelta = _b.assuredDelta, totalAmountDelta = _b.totalAmountDelta, avgPremiumDelta = _b.avgPremiumDelta;
    var AssuredAmount = function () { return (React.createElement("div", { className: "insurance-card" },
        React.createElement("div", { className: "insurance-label" }, "Assured Amount"),
        React.createElement("div", { className: "e-card-content kpi-card-content" },
            React.createElement("div", { style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 } },
                React.createElement("div", { className: "insurance-card-value" }, fmtKpi(kpis.assuredAmount)),
                React.createElement(DeltaBadge, { delta: assuredDelta }))))); };
    var TotalAmount = function () { return (React.createElement("div", { className: "insurance-card" },
        React.createElement("div", { className: "insurance-label" }, "Total Premium Amount"),
        React.createElement("div", { className: "e-card-content kpi-card-content" },
            React.createElement("div", { style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 } },
                React.createElement("div", { className: "insurance-card-value" }, fmtKpi(kpis.totalAmount)),
                React.createElement(DeltaBadge, { delta: totalAmountDelta }))))); };
    var AverageAmount = function () { return (React.createElement("div", { className: "insurance-card" },
        React.createElement("div", { className: "insurance-label" }, "Average Premium Amount"),
        React.createElement("div", { className: "e-card-content kpi-card-content" },
            React.createElement("div", { style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 } },
                React.createElement("div", { className: "insurance-card-value" }, fmtKpi(kpis.policiesSold ? (kpis.totalAmount / kpis.policiesSold) : 0)),
                React.createElement(DeltaBadge, { delta: avgPremiumDelta }))))); };
    var policyRateData = React.useMemo(function () {
        var _a;
        var policydata = (_a = InsuranceData.policydata) !== null && _a !== void 0 ? _a : [];
        if (!policydata.length)
            return [];
        var currentYear = selectedYears.length ? Math.max.apply(Math, selectedYears) : undefined;
        if (!currentYear)
            return [];
        var rows = policydata.filter(function (r) { var _a; return ((_a = r.year) !== null && _a !== void 0 ? _a : r.Year) === currentYear; });
        if (!rows.length)
            return [];
        var getNum = function (r, keys) {
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var k = keys_1[_i];
                var value = r === null || r === void 0 ? void 0 : r[k];
                if (typeof value === 'number' && Number.isFinite(value))
                    return value;
                if (typeof value === 'string' && value.trim() !== '' && Number.isFinite(+value))
                    return +value;
            }
            return undefined;
        };
        var renewalSum = 0;
        var lapseSum = 0;
        var n = 0;
        for (var _i = 0, rows_1 = rows; _i < rows_1.length; _i++) {
            var r = rows_1[_i];
            var renewal = getNum(r, ['RenewalRate', 'renewalRate', 'renewal']);
            var lapse = getNum(r, ['LapseRate', 'lapseRate', 'lapse']);
            var renewalrate = typeof renewal === 'number' ? renewal : (typeof lapse === 'number' ? 100 - lapse : undefined);
            var lapserate = typeof lapse === 'number' ? lapse : (typeof renewal === 'number' ? 100 - renewal : undefined);
            if (typeof renewalrate === 'number' && typeof lapserate === 'number') {
                renewalSum += renewalrate;
                lapseSum += lapserate;
                n++;
            }
        }
        if (n === 0)
            return [];
        var renewalAvg = +(renewalSum / n).toFixed(2);
        var lapseAvg = +(lapseSum / n).toFixed(2);
        return [
            { x: 'Renewal Rate', y: renewalAvg, text: "".concat(renewalAvg, "%") },
            { x: 'Lapse Rate', y: lapseAvg, text: "".concat(lapseAvg, "%") }
        ];
    }, [selectedYears]);
    var onPercentageTextRender = function (args) {
        var _a, _b;
        var pct = (_b = (_a = args) === null || _a === void 0 ? void 0 : _a.point) === null || _b === void 0 ? void 0 : _b.percentage;
        if (pct != null)
            args.text = "".concat(pct.toFixed(2), "%"); // percentage only
    };
    var PolicyRatePieChart = function () { return (React.createElement("div", { style: { height: '100%', width: '100%' } }, policyRateData.length === 0 ? (React.createElement("div", { style: { padding: 12 } }, "No policy rate data for the selected year.")) : (React.createElement(ej2_react_charts_1.AccumulationChartComponent, { id: 'policyratio-chart', ref: PolicyRatioRef, legendSettings: { visible: true, position: 'Bottom' }, enableAnimation: true, tooltip: { enable: true, format: '<b>${point.x}</b><br>Percentage: <b>${point.percentage}%</b>', header: '', enableHighlight: true }, load: onAccumulationLoad, textRender: onPercentageTextRender, enableSmartLabels: true },
        React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.AccumulationLegend, ej2_react_charts_1.PieSeries, ej2_react_charts_1.AccumulationTooltip, ej2_react_charts_1.AccumulationDataLabel] }),
        React.createElement(ej2_react_charts_1.AccumulationSeriesCollectionDirective, null,
            React.createElement(ej2_react_charts_1.AccumulationSeriesDirective, { dataSource: policyRateData, xName: 'x', yName: 'y', radius: '70%', border: { color: '#FFFFFF', width: 1 }, dataLabel: { visible: true, position: 'Outside', name: 'text' }, explode: true, explodeIndex: 0, explodeOffset: '10%', palettes: pieThemePalette, animation: { enable: false } })))))); };
    var profitExpenseData = React.useMemo(function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var policydata = (_a = InsuranceData.policydata) !== null && _a !== void 0 ? _a : [];
        if (!policydata.length)
            return [];
        var currentYear = selectedYears.length ? Math.max.apply(Math, selectedYears) : undefined;
        if (!currentYear)
            return [];
        var toNum = function (value) {
            if (typeof value === 'number' && Number.isFinite(value))
                return value;
            if (typeof value === 'string' && value.trim() !== '' && Number.isFinite(+value))
                return +value;
            return 0;
        };
        var rows = policydata.filter(function (r) { var _a; return ((_a = r.year) !== null && _a !== void 0 ? _a : r.Year) === currentYear; });
        var byType = new Map();
        for (var _i = 0, POLICY_TYPES_1 = POLICY_TYPES; _i < POLICY_TYPES_1.length; _i++) {
            var t = POLICY_TYPES_1[_i];
            byType.set(t, { policy: t, profit: 0, expense: 0 });
        }
        var addFromColumns = function (acc, t, row) {
            var tl = t.toLowerCase();
            var candidatesProfit = [
                "".concat(t, "Profit"),
                "".concat(t, "_Profit"),
                "Profit".concat(t),
                "".concat(t, "GrossProfit"),
                "".concat(tl, "Profit"),
                "".concat(tl, "_profit"),
                "profit_".concat(tl),
                "grossProfit_".concat(tl)
            ];
            var candidatesExpense = [
                "".concat(t, "Expense"),
                "".concat(t, "_Expense"),
                "Expense".concat(t),
                "".concat(t, "OperationalExpense"),
                "".concat(tl, "Expense"),
                "".concat(tl, "_expense"),
                "expense_".concat(tl),
                "operationalExpense_".concat(tl),
                "opEx_".concat(tl)
            ];
            var profit = candidatesProfit.reduce(function (s, k) { return s + toNum(row === null || row === void 0 ? void 0 : row[k]); }, 0);
            var expense = candidatesExpense.reduce(function (s, k) { return s + toNum(row === null || row === void 0 ? void 0 : row[k]); }, 0);
            acc.profit += profit;
            acc.expense += expense;
        };
        var _loop_1 = function (r) {
            var rowTypeRaw = (_d = (_c = (_b = r.PolicyType) !== null && _b !== void 0 ? _b : r.policyType) !== null && _c !== void 0 ? _c : r.type) !== null && _d !== void 0 ? _d : r.policy;
            var rowType = typeof rowTypeRaw === 'string'
                ? rowTypeRaw.trim().toLowerCase()
                : undefined;
            if (rowType) {
                var matched = POLICY_TYPES.find(function (t) { return t.toLowerCase() === rowType; });
                if (matched) {
                    var acc = byType.get(matched);
                    acc.profit += toNum((_g = (_f = (_e = r.Profit) !== null && _e !== void 0 ? _e : r.profit) !== null && _f !== void 0 ? _f : r.GrossProfit) !== null && _g !== void 0 ? _g : r.grossProfit);
                    acc.expense += toNum((_l = (_k = (_j = (_h = r.Expense) !== null && _h !== void 0 ? _h : r.expense) !== null && _j !== void 0 ? _j : r.OperationalExpense) !== null && _k !== void 0 ? _k : r.operationalExpense) !== null && _l !== void 0 ? _l : r.opEx);
                }
            }
            for (var _o = 0, POLICY_TYPES_2 = POLICY_TYPES; _o < POLICY_TYPES_2.length; _o++) {
                var t = POLICY_TYPES_2[_o];
                var acc = byType.get(t);
                addFromColumns(acc, t, r);
            }
        };
        for (var _m = 0, rows_2 = rows; _m < rows_2.length; _m++) {
            var r = rows_2[_m];
            _loop_1(r);
        }
        return Array.from(byType.values());
    }, [selectedYears]);
    var ProfitVsExpenseChart = function () { return (React.createElement("div", { style: { width: '100%', height: '100%', padding: 8 } }, profitExpenseData.length === 0 ? (React.createElement("div", { style: { padding: 12 } }, "No profit/expense data for the selected year.")) : (React.createElement(ej2_react_charts_1.ChartComponent, { id: "profit-expense-chart", ref: ProfitvsExpenseRef, primaryXAxis: {
            valueType: 'Category',
            majorGridLines: { width: 0 },
            labelIntersectAction: 'Trim'
        }, primaryYAxis: {
            labelFormat: '${value}',
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 }
        }, chartArea: { border: { width: 0 } }, legendSettings: { visible: true, position: 'Bottom' }, tooltip: { enable: true }, axisLabelRender: onCurrencyAxisLabel, tooltipRender: onCurrencyTooltip, textRender: onCurrencyDataLabel, load: onChartLoad, width: "100%", height: "100%" },
        React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.StackingColumnSeries, ej2_react_charts_1.ColumnSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Legend, ej2_react_charts_1.Tooltip, ej2_react_charts_1.DataLabel] }),
        React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
            React.createElement(ej2_react_charts_1.SeriesDirective, { type: "Column", name: "Profit", dataSource: profitExpenseData, xName: "policy", yName: "profit", columnSpacing: 0.2, marker: { visible: true, dataLabel: { visible: true } }, fill: '#FF7000', animation: { enable: false } }),
            React.createElement(ej2_react_charts_1.SeriesDirective, { type: "Column", name: "Expense", dataSource: profitExpenseData, xName: "policy", yName: "expense", columnSpacing: 0.2, marker: { visible: true, dataLabel: { visible: true } }, fill: '#FFB200', animation: { enable: false } })))))); };
    var AssuredAmountByPolicyTypeChart = function () {
        // Drilldown state for Gender donut
        var _a = React.useState({ open: false }), genderDrill = _a[0], setGenderDrill = _a[1];
        // Gender donut data (from overview or fallback genderdata) for selected policy and years
        var genderDonutData = React.useMemo(function () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
            if (!genderDrill.policy)
                return [];
            var overview = (_a = InsuranceData.overview) !== null && _a !== void 0 ? _a : [];
            if (!overview.length || !selectedYears.length)
                return [];
            var norm = function (s) { return String(s !== null && s !== void 0 ? s : '').trim().toLowerCase(); };
            var wanted = norm(genderDrill.policy);
            var male = 0, female = 0;
            for (var _i = 0, overview_1 = overview; _i < overview_1.length; _i++) {
                var r = overview_1[_i];
                var y = Number((_b = r.year) !== null && _b !== void 0 ? _b : r.Year);
                if (!selectedYears.includes(y))
                    continue;
                var pt = norm((_e = (_d = (_c = r.PolicyType) !== null && _c !== void 0 ? _c : r.policyType) !== null && _d !== void 0 ? _d : r.type) !== null && _e !== void 0 ? _e : r.policy);
                if (pt !== wanted)
                    continue;
                var gRaw = (_m = (_l = (_k = (_j = (_h = (_g = (_f = r.HolderGender) !== null && _f !== void 0 ? _f : r.holderGender) !== null && _g !== void 0 ? _g : r.PolicyHolderGender) !== null && _h !== void 0 ? _h : r.policyHolderGender) !== null && _j !== void 0 ? _j : r.Gender) !== null && _k !== void 0 ? _k : r.gender) !== null && _l !== void 0 ? _l : r.Sex) !== null && _m !== void 0 ? _m : r.sex;
                var g = norm(gRaw);
                if (g.startsWith('m'))
                    male++;
                else if (g.startsWith('f'))
                    female++;
            }
            return __spreadArray(__spreadArray([], (male > 0 ? [{ x: 'Male', y: male, text: String(male) }] : []), true), (female > 0 ? [{ x: 'Female', y: female, text: String(female) }] : []), true);
        }, [genderDrill.policy, selectedYears]);
        var assuredByPolicyTypeData = React.useMemo(function () {
            var _a, _b;
            var overview = (_a = InsuranceData.overview) !== null && _a !== void 0 ? _a : [];
            if (!overview.length || !selectedYears.length)
                return [];
            var sums = new Map();
            for (var _i = 0, POLICY_TYPES_3 = POLICY_TYPES; _i < POLICY_TYPES_3.length; _i++) {
                var t = POLICY_TYPES_3[_i];
                sums.set(t, 0);
            }
            var _loop_2 = function (r) {
                if (!selectedYears.includes(r.year))
                    return "continue";
                var raw = ((_b = r.PolicyType) !== null && _b !== void 0 ? _b : '').toString().trim().toLowerCase();
                var match = POLICY_TYPES.find(function (t) { return t.toLowerCase() === raw; });
                if (!match)
                    return "continue";
                var amt = Number(r.AssuredAmount) || 0;
                sums.set(match, (sums.get(match) || 0) + amt);
            };
            for (var _c = 0, overview_2 = overview; _c < overview_2.length; _c++) {
                var r = overview_2[_c];
                _loop_2(r);
            }
            return Array.from(sums.entries()).map(function (_a) {
                var policy = _a[0], amount = _a[1];
                return ({ policy: policy, amount: amount });
            });
        }, [selectedYears]);
        var onBack = React.useCallback(function () { return setGenderDrill({ open: false }); }, []);
        var onAssuredChartClick = React.useCallback(function (args) {
            var _a, _b, _c, _d;
            var targetId = String((_d = (_a = args === null || args === void 0 ? void 0 : args.target) !== null && _a !== void 0 ? _a : (_c = (_b = args === null || args === void 0 ? void 0 : args.event) === null || _b === void 0 ? void 0 : _b.target) === null || _c === void 0 ? void 0 : _c.id) !== null && _d !== void 0 ? _d : '');
            if (!targetId)
                return;
            var policy = '';
            if (targetId.includes('_AxisLabel_')) {
                var el = document.getElementById(targetId);
                policy = ((el === null || el === void 0 ? void 0 : el.textContent) || '').trim();
            }
            if (!policy && targetId.includes('_Series_0_Point_')) {
                var m = targetId.match(/_Series_0_Point_(\d+)/);
                var idx = m ? parseInt(m[1], 10) : -1;
                if (idx >= 0 && assuredByPolicyTypeData[idx]) {
                    policy = assuredByPolicyTypeData[idx].policy;
                }
            }
            if (policy)
                setGenderDrill({ open: true, policy: policy });
        }, [assuredByPolicyTypeData]);
        return (React.createElement("div", { style: { width: '100%', height: '100%', padding: 8 } },
            genderDrill.open && (React.createElement("div", { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: 10 } },
                React.createElement("div", { style: { fontWeight: 600, fontSize: 14, color: '#475569' } },
                    "Policy Holder Gender \u2014 ",
                    genderDrill.policy),
                React.createElement("button", { onClick: onBack, className: "e-btn e-outline e-small" }, "Back"))),
            !genderDrill.open ? (assuredByPolicyTypeData.length === 0 ? (React.createElement("div", { style: { padding: 12 } }, "No assured amount data for the selected year(s).")) : (React.createElement(ej2_react_charts_1.ChartComponent, { id: "assured-by-type-chart", ref: AssuredAmountRef, primaryXAxis: {
                    valueType: 'Category',
                    majorGridLines: { width: 0 },
                    labelIntersectAction: 'Trim'
                }, primaryYAxis: {
                    labelFormat: '${value}',
                    lineStyle: { width: 0 },
                    majorTickLines: { width: 0 }
                }, chartArea: { border: { width: 0 } }, legendSettings: { visible: false }, tooltip: { enable: true }, axisLabelRender: onCurrencyAxisLabel, tooltipRender: onCurrencyTooltip, textRender: onCurrencyDataLabel, load: onChartLoad, pointClick: function (args) {
                    var _a, _b;
                    var policy = String((_b = (_a = args === null || args === void 0 ? void 0 : args.point) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : '').trim();
                    if (policy)
                        setGenderDrill({ open: true, policy: policy });
                }, chartMouseClick: onAssuredChartClick, width: "100%", height: "100%" },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.ColumnSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Legend, ej2_react_charts_1.Tooltip, ej2_react_charts_1.DataLabel] }),
                React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.SeriesDirective, { type: "Column", name: "Assured Amount", dataSource: assuredByPolicyTypeData, xName: "policy", yName: "amount", columnSpacing: 0.2, cornerRadius: { topLeft: 4, topRight: 4 }, fill: "#f6b67a", marker: { visible: true, dataLabel: { visible: true } }, animation: { enable: false } }))))) : (
            // Drilldown view: donut (Male/Female only)
            React.createElement(React.Fragment, null, genderDonutData.length === 0 ? (React.createElement("div", { style: { padding: 12 } }, "No gender data found.")) : (React.createElement("div", { style: { width: '100%', height: '90%' } },
                React.createElement(ej2_react_charts_1.AccumulationChartComponent, { id: "gender-donut-inline", legendSettings: { visible: true, position: 'Bottom' }, enableAnimation: true, load: onAccumulationLoad, tooltip: { enable: true, format: '<b>${point.x}</b><br/>Count: <b>${point.y}</b>', header: '' } },
                    React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.AccumulationLegend, ej2_react_charts_1.PieSeries, ej2_react_charts_1.AccumulationTooltip, ej2_react_charts_1.AccumulationDataLabel] }),
                    React.createElement(ej2_react_charts_1.AccumulationSeriesCollectionDirective, null,
                        React.createElement(ej2_react_charts_1.AccumulationSeriesDirective, { dataSource: genderDonutData, xName: 'x', yName: 'y', innerRadius: '60%', radius: '70%', dataLabel: { visible: true, position: 'Outside', name: 'text' }, borderRadius: 10, border: { width: 4, color: '#ffffff' }, palettes: donutPaletteColors, animation: { enable: false } })))))))));
    };
    var ageDistributionData = React.useMemo(function () {
        var _a;
        var overviewdata = (_a = InsuranceData.overview) !== null && _a !== void 0 ? _a : [];
        if (!overviewdata.length)
            return [];
        var rows = overviewdata;
        var hasYear = rows.some(function (r) { var _a; return typeof ((_a = r.year) !== null && _a !== void 0 ? _a : r.Year) !== 'undefined'; });
        if (hasYear && Array.isArray(selectedYears) && selectedYears.length) {
            rows = rows.filter(function (r) { var _a; return selectedYears.includes(Number((_a = r.year) !== null && _a !== void 0 ? _a : r.Year)); });
        }
        var buckets = [
            { label: '18-24', min: 18, max: 24, count: 0 },
            { label: '25-34', min: 25, max: 34, count: 0 },
            { label: '35-44', min: 35, max: 44, count: 0 },
            { label: '45-54', min: 45, max: 54, count: 0 },
            { label: '55-64', min: 55, max: 64, count: 0 },
            { label: 'Over65', min: 65, max: Infinity, count: 0 }
        ];
        var getAge = function (r) {
            var keys = ['PolicyHolderAge', 'policyHolderAge', 'HolderAge', 'holderAge', 'Age', 'age'];
            for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
                var k = keys_2[_i];
                var v = r === null || r === void 0 ? void 0 : r[k];
                var n = typeof v === 'number' ? v : (typeof v === 'string' ? parseInt(v, 10) : NaN);
                if (Number.isFinite(n))
                    return n;
            }
            return undefined;
        };
        var _loop_3 = function (r) {
            var age = getAge(r);
            if (!Number.isFinite(age))
                return "continue";
            var b = buckets.find(function (bk) { return age >= bk.min && age <= bk.max; });
            if (b)
                b.count++;
        };
        for (var _i = 0, rows_3 = rows; _i < rows_3.length; _i++) {
            var r = rows_3[_i];
            _loop_3(r);
        }
        return buckets
            .filter(function (b) { return b.count > 0; })
            .map(function (b) { return ({ x: b.label, y: b.count, text: String(b.count) }); });
    }, [selectedYears]);
    var PolicyHolderAgePie = function () { return (React.createElement("div", { style: { height: '100%', width: '100%' } }, ageDistributionData.length === 0 ? (React.createElement("div", { style: { padding: 12 } }, "No age data available.")) : (React.createElement(ej2_react_charts_1.AccumulationChartComponent, { id: 'policyholder-age-pie', ref: PolicyHolderRef, legendSettings: { visible: true, position: 'Bottom' }, enableAnimation: true, load: onAccumulationLoad, tooltip: { enable: true, format: '<b>${point.x}</b><br>Count: <b>${point.y}</b>', header: '' } },
        React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.AccumulationLegend, ej2_react_charts_1.PieSeries, ej2_react_charts_1.AccumulationTooltip, ej2_react_charts_1.AccumulationDataLabel] }),
        React.createElement(ej2_react_charts_1.AccumulationSeriesCollectionDirective, null,
            React.createElement(ej2_react_charts_1.AccumulationSeriesDirective, { dataSource: ageDistributionData, xName: 'x', yName: 'y', radius: '70%', dataLabel: { visible: true, position: 'Outside', name: 'text' }, palettes: pieThemePalette, animation: { enable: false } })))))); };
    var apeChannelData = React.useMemo(function () {
        var _a, _b, _c, _d;
        var policydata = (_a = InsuranceData.policydata) !== null && _a !== void 0 ? _a : [];
        if (!policydata.length)
            return [];
        var currentYear = selectedYears.length ? Math.max.apply(Math, selectedYears) : undefined;
        var row = currentYear
            ? policydata.find(function (r) { var _a; return ((_a = r.year) !== null && _a !== void 0 ? _a : r.Year) === currentYear; })
            : undefined;
        if (!row)
            return [];
        var toNum = function (v) {
            return typeof v === 'number' && Number.isFinite(v) ? v :
                (typeof v === 'string' && v.trim() && Number.isFinite(+v) ? +v : 0);
        };
        return [
            { channel: 'Bancassurance', value: toNum((_b = row.Bancassurance) !== null && _b !== void 0 ? _b : row.bancassurance) },
            { channel: 'Brokers', value: toNum((_c = row.Brokers) !== null && _c !== void 0 ? _c : row.brokers) },
            { channel: 'Agent', value: toNum((_d = row.Agent) !== null && _d !== void 0 ? _d : row.agent) }
        ];
    }, [selectedYears]);
    var AnnualPremiumEquivalentChart = function () {
        return (React.createElement("div", { style: { width: '100%', height: '100%', padding: 8 } }, apeChannelData.length === 0 ? (React.createElement("div", { style: { padding: 12 } }, "No channel data for the selected year.")) : (React.createElement(ej2_react_charts_1.ChartComponent, { id: "ape-channel-chart", ref: APERef, primaryXAxis: {
                valueType: 'Category',
                majorGridLines: { width: 0 },
                labelIntersectAction: 'Trim'
            }, primaryYAxis: {
                lineStyle: { width: 0 },
                majorTickLines: { width: 0 }
            }, legendSettings: { visible: false }, tooltip: { enable: true }, chartArea: { border: { width: 0 } }, axisLabelRender: onNumericAxisLabel, tooltipRender: onCurrencyTooltip, textRender: onCurrencyDataLabel, load: onChartLoad, width: "100%", height: "100%" },
            React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.BarSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Legend, ej2_react_charts_1.Tooltip, ej2_react_charts_1.DataLabel] }),
            React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                React.createElement(ej2_react_charts_1.SeriesDirective, { type: "Bar", name: "APE", dataSource: apeChannelData, xName: "channel", yName: "value", columnSpacing: 0.2, cornerRadius: { topLeft: 4, topRight: 4 }, marker: { visible: true, dataLabel: { visible: true } }, fill: '#FF4949', animation: { enable: false } }))))));
    };
    // Referral distribution (from overview, filtered by selectedYears)
    var referralData = React.useMemo(function () {
        var _a, _b, _c;
        var overviewdata = (_a = InsuranceData.overview) !== null && _a !== void 0 ? _a : [];
        if (!overviewdata.length)
            return [];
        var categories = [
            'Customer Referral',
            'Agents & brokers',
            'Healthcare providers',
            'Travel partner',
            'Financial Institute',
            'Corporate partnership'
        ];
        var normMap = new Map(categories.map(function (c) { return [c.toLowerCase(), c]; }));
        var counts = new Map(categories.map(function (c) { return [c, 0]; }));
        var rows = overviewdata;
        if (Array.isArray(selectedYears) && selectedYears.length) {
            rows = rows.filter(function (r) { var _a; return selectedYears.includes(Number((_a = r.year) !== null && _a !== void 0 ? _a : r.Year)); });
        }
        for (var _i = 0, rows_4 = rows; _i < rows_4.length; _i++) {
            var r = rows_4[_i];
            var raw = String((_c = (_b = r === null || r === void 0 ? void 0 : r.Referral) !== null && _b !== void 0 ? _b : r === null || r === void 0 ? void 0 : r.referral) !== null && _c !== void 0 ? _c : '').trim();
            if (!raw)
                continue;
            var key = normMap.get(raw.toLowerCase());
            if (!key)
                continue;
            counts.set(key, (counts.get(key) || 0) + 1);
        }
        return Array.from(counts.entries()).map(function (_a) {
            var x = _a[0], y = _a[1];
            return ({ x: x, y: y, text: String(y) });
        });
    }, [selectedYears]);
    var ReferralResourceDonut = function () { return (React.createElement("div", { style: { height: '100%', width: '100%' } }, referralData.length === 0 ? (React.createElement("div", { style: { padding: 12 } }, "No referral data for the selected year(s).")) : (React.createElement(ej2_react_charts_1.AccumulationChartComponent, { id: 'referral-donut', ref: ReferralRef, legendSettings: { visible: true, position: 'Bottom' }, enableAnimation: true, load: onAccumulationLoad, tooltip: { enable: true, format: '<b>${point.x}</b><br>Count: <b>${point.y}</b>', header: '' } },
        React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.AccumulationLegend, ej2_react_charts_1.PieSeries, ej2_react_charts_1.AccumulationTooltip, ej2_react_charts_1.AccumulationDataLabel] }),
        React.createElement(ej2_react_charts_1.AccumulationSeriesCollectionDirective, null,
            React.createElement(ej2_react_charts_1.AccumulationSeriesDirective, { dataSource: referralData, xName: 'x', yName: 'y', innerRadius: '60%', radius: '70%', dataLabel: { visible: true, position: 'Outside', name: 'text' }, borderRadius: 10, border: { width: 4, color: '#ffffff' }, explode: true, explodeIndex: 0, explodeOffset: '8%', palettes: donutPaletteColors, animation: { enable: false } })))))); };
    return (React.createElement("div", { className: "Container" },
        React.createElement("div", { className: "e-card insurance-toolbar" },
            React.createElement("div", { className: "insurance-toolbar-left" },
                React.createElement("h4", { className: "insurance-title" }, "Overview")),
            React.createElement("div", { className: "insurance-toolbar-right", style: { display: 'flex', gap: 10 } },
                React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { id: "yearDropOverview", placeholder: "Select year", dataSource: yearOptions, fields: { text: 'year', value: 'id' }, value: currentYearOverview != null ? String(currentYearOverview) : undefined, change: onYearChange, width: 160 }))),
        React.createElement(ej2_react_layouts_1.DashboardLayoutComponent, { id: "dashboard_performance", ref: OverviewRef, style: { height: '85vh', width: '100%', zIndex: 1 }, columns: 8, cellAspectRatio: 90 / 100, cellSpacing: [10, 10], allowResizing: false, allowDragging: false, mediaQuery: "(max-width:950px)", created: onCreated },
            React.createElement(ej2_react_layouts_1.PanelsDirective, null,
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 0, col: 0, content: PoliciesSold }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 0, col: 2, content: AssuredAmount }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 0, col: 4, content: TotalAmount }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 0, col: 6, content: AverageAmount }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 3, sizeY: 3, row: 1, col: 0, header: "<div>Renewal vs Lapse Rate</div>", content: PolicyRatePieChart }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 5, sizeY: 3, row: 1, col: 4, header: "<div>Profit vs Expense by Policy Type</div>", content: ProfitVsExpenseChart }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 5, sizeY: 3, row: 4, col: 0, header: "<div>Assured Amount by Policy Type </div>", content: AssuredAmountByPolicyTypeChart }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 3, sizeY: 3, row: 4, col: 5, header: "<div>Policy Holder Age</div>", content: PolicyHolderAgePie }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 3, sizeY: 3, row: 8, col: 0, header: "<div>Referral Resource</div>", content: ReferralResourceDonut }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 5, sizeY: 3, row: 8, col: 3, header: "<div>Annual Premium Equivalent by Channel</div>", content: AnnualPremiumEquivalentChart })))));
};
var Dashboard2 = function (_a) {
    var selectedYears = _a.selectedYears, onChangeYears = _a.onChangeYears, selectedPolicyTypes = _a.selectedPolicyTypes, onChangePolicyTypes = _a.onChangePolicyTypes;
    var ClaimAnalysisRef = React.useRef(null);
    var DeniedRef = React.useRef(null);
    var ClaimAmountComparisonRef = React.useRef(null);
    var KanbanRef = React.useRef(null);
    var RecordsMapRef = React.useRef(null);
    var ClaimSeverityRef = React.useRef(null);
    var gridRef = React.useRef(null);
    var TotalclaimRef = React.useRef(null);
    var POLICY_TYPES_FILTER = ['Health', 'Life', 'Home', 'Travel', 'Disability'];
    // Build available years from claimdata dynamically
    var yearOptions = React.useMemo(function () {
        return ALLOWED_YEARS.map(function (y) { return ({ id: String(y), label: String(y) }); });
    }, []);
    var currentYearClaim = React.useMemo(function () { var _a; return (selectedYears.length ? Math.max.apply(Math, selectedYears) : Number((_a = yearOptions[0]) === null || _a === void 0 ? void 0 : _a.id)); }, [selectedYears, yearOptions]);
    var policyTypeOptions = React.useMemo(function () { return __spreadArray([{ id: 'All', name: 'All Policy Types' }], POLICY_TYPES_FILTER.map(function (t) { return ({ id: t, name: t }); }), true); }, []);
    var selectedPolicyTypeValue = React.useMemo(function () {
        if (!selectedPolicyTypes.length)
            return 'All';
        var lower = new Set(selectedPolicyTypes.map(function (s) { return s.toLowerCase(); }));
        var isAll = POLICY_TYPES_FILTER.every(function (t) { return lower.has(t.toLowerCase()); });
        return isAll ? 'All' : selectedPolicyTypes[0];
    }, [selectedPolicyTypes]);
    var onPolicyTypeChange = function (e) {
        var _a;
        var val = String((_a = e === null || e === void 0 ? void 0 : e.value) !== null && _a !== void 0 ? _a : 'All');
        onChangePolicyTypes(val === 'All' ? [] : [val]); // [] => no filter (all)
        applySortTrigger.current = true;
    };
    var onYearChange = function (e) {
        var value = Number(e === null || e === void 0 ? void 0 : e.value);
        if (Number.isFinite(value))
            onChangeYears([value]);
        applySortTrigger.current = true;
    };
    React.useEffect(function () {
        var timer;
        var refreshAll = function () {
            clearTimeout(timer);
            timer = setTimeout(function () {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                (_a = ClaimAnalysisRef.current) === null || _a === void 0 ? void 0 : _a.refresh();
                (_b = DeniedRef.current) === null || _b === void 0 ? void 0 : _b.refresh();
                (_c = ClaimAmountComparisonRef.current) === null || _c === void 0 ? void 0 : _c.refresh();
                (_d = KanbanRef.current) === null || _d === void 0 ? void 0 : _d.refresh();
                (_e = RecordsMapRef.current) === null || _e === void 0 ? void 0 : _e.refresh();
                (_f = ClaimSeverityRef.current) === null || _f === void 0 ? void 0 : _f.refresh();
                (_g = gridRef.current) === null || _g === void 0 ? void 0 : _g.refresh();
                (_h = TotalclaimRef.current) === null || _h === void 0 ? void 0 : _h.refresh();
            }, 500);
        };
        window.addEventListener('sidebar-toggled', refreshAll);
        window.addEventListener('resize', refreshAll);
        return function () {
            window.removeEventListener('sidebar-toggled', refreshAll);
            window.removeEventListener('resize', refreshAll);
            clearTimeout(timer);
        };
    }, []);
    var kpis = React.useMemo(function () {
        var _a;
        var claims = (_a = InsuranceData.claimdata) !== null && _a !== void 0 ? _a : [];
        var typesLower = selectedPolicyTypes.map(function (t) { return t.toString().toLowerCase(); });
        var rows = claims.filter(function (r) {
            var _a, _b, _c;
            var year = Number((_a = r.year) !== null && _a !== void 0 ? _a : r.Year);
            if (!selectedYears.includes(year))
                return false;
            var pType = ((_c = (_b = r.PolicyType) !== null && _b !== void 0 ? _b : r.policyType) !== null && _c !== void 0 ? _c : '').toString().toLowerCase();
            return typesLower.length === 0 ? true : typesLower.includes(pType);
        });
        var totalClaims = rows.length;
        var totalClaimAmount = rows.reduce(function (sum, r) { return sum + (Number(r.ClaimAmount) || 0); }, 0);
        return { totalClaims: totalClaims, totalClaimAmount: totalClaimAmount };
    }, [selectedPolicyTypes, selectedYears]);
    var totalClaimsSparkByYear = React.useMemo(function () {
        var _a, _b, _c;
        var claims = (_a = InsuranceData.claimdata) !== null && _a !== void 0 ? _a : [];
        var types = new Set(selectedPolicyTypes.map(function (t) { return t.toLowerCase(); }));
        var useType = types.size > 0;
        var getYear = function (r) {
            var _a, _b, _c, _d, _e, _f;
            var year = Number((_c = (_b = (_a = r.year) !== null && _a !== void 0 ? _a : r.Year) !== null && _b !== void 0 ? _b : r.claimYear) !== null && _c !== void 0 ? _c : r.ClaimYear);
            if (Number.isFinite(year))
                return year;
            var ds = (_f = (_e = (_d = r.ClaimDate) !== null && _d !== void 0 ? _d : r.claimDate) !== null && _e !== void 0 ? _e : r.Date) !== null && _f !== void 0 ? _f : r.date;
            if (!ds)
                return undefined;
            var d = new Date(ds);
            return Number.isNaN(d.getTime()) ? undefined : d.getFullYear();
        };
        var counts = new Map(ALLOWED_YEARS.map(function (y) { return [y, 0]; }));
        for (var _i = 0, claims_1 = claims; _i < claims_1.length; _i++) {
            var r = claims_1[_i];
            var y = getYear(r);
            if (!Number.isFinite(y) || !ALLOWED_YEARS.includes(y))
                continue;
            if (useType) {
                var pt = String((_c = (_b = r.PolicyType) !== null && _b !== void 0 ? _b : r.policyType) !== null && _c !== void 0 ? _c : '').toLowerCase();
                if (!types.has(pt))
                    continue;
            }
            counts.set(y, (counts.get(y) || 0) + 1);
        }
        return __spreadArray([], ALLOWED_YEARS, true).sort().map(function (y) { return ({ x: String(y), y: counts.get(y) || 0 }); });
    }, [selectedPolicyTypes]);
    var onCreated = function (e) {
        setTimeout(function () {
            var _a;
            (_a = ClaimAnalysisRef.current) === null || _a === void 0 ? void 0 : _a.refresh();
        }, 500);
    };
    var TotalClaims = function () { return (React.createElement("div", { className: "kpi-totalcard" },
        React.createElement("div", { className: "spark-header" },
            React.createElement("div", { className: "insurance-label" }, "Total Claims"),
            React.createElement("div", { className: "insurance-totalvalue" }, kpis.totalClaims.toLocaleString())),
        React.createElement("div", { className: "spark-content", style: { width: '50%', height: '50%' } },
            React.createElement("div", { style: { marginTop: 8, width: '100%' } },
                React.createElement(ej2_react_charts_1.SparklineComponent, { id: "total-claims-spark", ref: TotalclaimRef, type: "Pie", dataSource: totalClaimsSparkByYear, xName: "x", yName: "y", valueType: "Category", width: "100%", height: "55px", lineWidth: 2, palette: sparklinePalette, tooltipSettings: { visible: true, format: 'Year: ${x}<br/>Claims: ${y}' } },
                    React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.SparklineTooltip] })))))); };
    var approvalStats = React.useMemo(function () {
        var _a, _b, _c, _d, _e, _f, _g;
        var claims = (_a = InsuranceData.claimdata) !== null && _a !== void 0 ? _a : [];
        if (!claims.length || !selectedYears.length)
            return { approvedCount: 0, totalCount: 0, rate: 0 };
        var years = new Set(selectedYears);
        var types = new Set(selectedPolicyTypes.map(function (t) { return t.toLowerCase(); }));
        var useType = types.size > 0;
        var isApproved = function (v) {
            var s = String(v !== null && v !== void 0 ? v : '').toLowerCase();
            return ['approved', 'accept', 'accepted', 'paid', 'paid out', 'payout', 'settled'].some(function (k) { return s.includes(k); });
        };
        var approved = 0, total = 0;
        for (var _i = 0, claims_2 = claims; _i < claims_2.length; _i++) {
            var r = claims_2[_i];
            var y = Number((_b = r.year) !== null && _b !== void 0 ? _b : r.Year);
            if (!years.has(y))
                continue;
            var pt = String((_d = (_c = r.PolicyType) !== null && _c !== void 0 ? _c : r.policyType) !== null && _d !== void 0 ? _d : '').toLowerCase();
            if (useType && !types.has(pt))
                continue;
            total += 1;
            if (isApproved((_g = (_f = (_e = r.ClaimStatus) !== null && _e !== void 0 ? _e : r.claimStatus) !== null && _f !== void 0 ? _f : r.Status) !== null && _g !== void 0 ? _g : r.status))
                approved += 1;
        }
        var rate = total ? (approved / total) * 100 : 0;
        return { approvedCount: approved, totalCount: total, rate: rate };
    }, [selectedYears, selectedPolicyTypes]);
    var _b = React.useMemo(function () {
        var _a;
        var claims = (_a = InsuranceData.claimdata) !== null && _a !== void 0 ? _a : [];
        var yearsSel = Array.isArray(selectedYears) ? selectedYears : [];
        if (!claims.length || !yearsSel.length)
            return { totalClaimDelta: undefined, avgClaimDelta: undefined, approvalRateDelta: undefined };
        var currentYear = Math.max.apply(Math, yearsSel);
        var prevYear = currentYear - 1;
        var typesLower = new Set(selectedPolicyTypes.map(function (t) { return t.toLowerCase(); }));
        var useType = typesLower.size > 0;
        var toNum = function (v) { return (typeof v === 'number' && Number.isFinite(v)) ? v :
            (typeof v === 'string' && v.trim() && Number.isFinite(+v) ? +v : 0); };
        var isApproved = function (v) {
            var s = String(v !== null && v !== void 0 ? v : '').toLowerCase();
            return ['approved', 'accept', 'accepted', 'paid', 'paid out', 'payout', 'settled'].some(function (k) { return s.includes(k); });
        };
        var rowsFor = function (yr) { return claims.filter(function (r) {
            var _a, _b, _c;
            var y = Number((_a = r.year) !== null && _a !== void 0 ? _a : r.Year);
            if (y !== yr)
                return false;
            if (!useType)
                return true;
            var pt = String((_c = (_b = r.PolicyType) !== null && _b !== void 0 ? _b : r.policyType) !== null && _c !== void 0 ? _c : '').toLowerCase();
            return typesLower.has(pt);
        }); };
        // totals
        var currRows = rowsFor(currentYear);
        var prevRows = rowsFor(prevYear);
        var currTotal = currRows.reduce(function (s, r) { var _a; return s + toNum((_a = r.ClaimAmount) !== null && _a !== void 0 ? _a : r.amount); }, 0);
        var prevTotal = prevRows.reduce(function (s, r) { var _a; return s + toNum((_a = r.ClaimAmount) !== null && _a !== void 0 ? _a : r.amount); }, 0);
        var totalDiff = currTotal - prevTotal;
        var totalPct = prevTotal ? (totalDiff / prevTotal) * 100 : undefined;
        // averages
        var currAvg = currRows.length ? currTotal / currRows.length : 0;
        var prevAvg = prevRows.length ? prevTotal / prevRows.length : 0;
        var avgDiff = currAvg - prevAvg;
        var avgPct = prevAvg ? (avgDiff / prevAvg) * 100 : undefined;
        // approval rates
        var currApproved = currRows.reduce(function (n, r) { var _a, _b, _c; return n + (isApproved((_c = (_b = (_a = r.ClaimStatus) !== null && _a !== void 0 ? _a : r.claimStatus) !== null && _b !== void 0 ? _b : r.Status) !== null && _c !== void 0 ? _c : r.status) ? 1 : 0); }, 0);
        var prevApproved = prevRows.reduce(function (n, r) { var _a, _b, _c; return n + (isApproved((_c = (_b = (_a = r.ClaimStatus) !== null && _a !== void 0 ? _a : r.claimStatus) !== null && _b !== void 0 ? _b : r.Status) !== null && _c !== void 0 ? _c : r.status) ? 1 : 0); }, 0);
        var currRate = currRows.length ? (currApproved / currRows.length) * 100 : 0;
        var prevRate = prevRows.length ? (prevApproved / prevRows.length) * 100 : 0;
        var rateDiff = currRate - prevRate;
        var ratePct = prevRate ? (rateDiff / prevRate) * 100 : undefined;
        return {
            totalClaimDelta: { diff: totalDiff, pct: totalPct, prevYear: prevYear },
            avgClaimDelta: { diff: avgDiff, pct: avgPct, prevYear: prevYear },
            approvalRateDelta: { diff: rateDiff, pct: ratePct, prevYear: prevYear }
        };
    }, [selectedYears, selectedPolicyTypes]), totalClaimDelta = _b.totalClaimDelta, avgClaimDelta = _b.avgClaimDelta, approvalRateDelta = _b.approvalRateDelta;
    var TotalClaimAmount = function () { return (React.createElement("div", { className: "insurance-card" },
        React.createElement("div", { className: "insurance-label" }, "Total Claim Amount"),
        React.createElement("div", { className: "e-card-content kpi-card-content" },
            React.createElement("div", { style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 } },
                React.createElement("div", { className: "insurance-card-value" }, fmtCurrency(kpis.totalClaimAmount)),
                React.createElement(DeltaBadge, { delta: totalClaimDelta }))))); };
    var AverageClaimAmount = function () { return (React.createElement("div", { className: "insurance-card" },
        React.createElement("div", { className: "insurance-label" }, "Average Claim Amount"),
        React.createElement("div", { className: "e-card-content kpi-card-content" },
            React.createElement("div", { style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 } },
                React.createElement("div", { className: "insurance-card-value" }, fmtCurrency(kpis.totalClaims ? (kpis.totalClaimAmount / kpis.totalClaims) : 0)),
                React.createElement(DeltaBadge, { delta: avgClaimDelta }))))); };
    var ClaimApprovalRate = function () { return (React.createElement("div", { className: "insurance-card" },
        React.createElement("div", { className: "insurance-label" }, "Claim Approval Rate"),
        React.createElement("div", { className: "e-card-content kpi-card-content" },
            React.createElement("div", { style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 } },
                React.createElement("div", { className: "insurance-card-value" }, approvalStats.totalCount ? "".concat(approvalStats.rate.toFixed(1), "%") : '0%'),
                React.createElement(DeltaBadge, { delta: approvalRateDelta }))))); };
    var _c = React.useMemo(function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var claims = (_a = InsuranceData.claimdata) !== null && _a !== void 0 ? _a : [];
        if (!claims.length || !selectedYears.length) {
            return { paidOutSeries: [], deniedSeries: [], totalClaimsSeries: [], yAmountMax: 0, yCountMax: 0 };
        }
        // Helpers
        var toNum = function (v) {
            return typeof v === 'number' && Number.isFinite(v) ? v :
                (typeof v === 'string' && v.trim() && Number.isFinite(+v) ? +v : 0);
        };
        var getYear = function (r) {
            var _a, _b, _c, _d, _e, _f;
            var y = Number((_c = (_b = (_a = r.year) !== null && _a !== void 0 ? _a : r.Year) !== null && _b !== void 0 ? _b : r.claimYear) !== null && _c !== void 0 ? _c : r.ClaimYear);
            if (Number.isFinite(y))
                return y;
            var dateStr = (_f = (_e = (_d = r.ClaimDate) !== null && _d !== void 0 ? _d : r.claimDate) !== null && _e !== void 0 ? _e : r.Date) !== null && _f !== void 0 ? _f : r.date;
            if (dateStr) {
                var d = new Date(dateStr);
                if (!Number.isNaN(d.getTime()))
                    return d.getFullYear();
            }
            return undefined;
        };
        var normType = function (v) {
            var s = String(v !== null && v !== void 0 ? v : '').trim().toLowerCase();
            if (!s)
                return undefined;
            // map common aliases to your filter set
            if (s.includes('health'))
                return 'health';
            if (s.includes('life'))
                return 'life';
            if (s.includes('home'))
                return 'home';
            if (s.includes('travel'))
                return 'travel';
            if (s.includes('disab'))
                return 'disability';
            return s;
        };
        var statusGroup = function (v) {
            var s = String(v !== null && v !== void 0 ? v : '').trim().toLowerCase();
            if (['approved', 'accept', 'accepted', 'paid', 'paid out', 'payout', 'settled'].some(function (k) { return s.includes(k); }))
                return 'paid';
            if (['rejected', 'denied', 'declined'].some(function (k) { return s.includes(k); }))
                return 'denied';
            return undefined;
        };
        var typesLower = new Set(selectedPolicyTypes.map(function (t) { return t.toLowerCase(); }));
        var useTypeFilter = typesLower.size > 0;
        // Aggregate by year for selected types
        var agg = new Map();
        for (var _i = 0, selectedYears_1 = selectedYears; _i < selectedYears_1.length; _i++) {
            var y = selectedYears_1[_i];
            agg.set(y, { paid: 0, denied: 0, totalCount: 0 });
        }
        for (var _o = 0, claims_3 = claims; _o < claims_3.length; _o++) {
            var r = claims_3[_o];
            var y = getYear(r);
            if (!Number.isFinite(y) || !selectedYears.includes(y))
                continue;
            var ptype = normType((_d = (_c = (_b = r.PolicyType) !== null && _b !== void 0 ? _b : r.policyType) !== null && _c !== void 0 ? _c : r.Type) !== null && _d !== void 0 ? _d : r.policy);
            if (useTypeFilter && (!ptype || !typesLower.has(ptype)))
                continue;
            var amt = toNum((_j = (_h = (_g = (_f = (_e = r.ClaimAmount) !== null && _e !== void 0 ? _e : r.claimAmount) !== null && _f !== void 0 ? _f : r.Amount) !== null && _g !== void 0 ? _g : r.amount) !== null && _h !== void 0 ? _h : r.PayoutAmount) !== null && _j !== void 0 ? _j : r.payoutAmount);
            var grp = statusGroup((_m = (_l = (_k = r.ClaimStatus) !== null && _k !== void 0 ? _k : r.claimStatus) !== null && _l !== void 0 ? _l : r.Status) !== null && _m !== void 0 ? _m : r.status);
            var rec = agg.get(y);
            if (!rec)
                continue;
            if (grp === 'paid')
                rec.paid += amt;
            else if (grp === 'denied')
                rec.denied += amt;
            rec.totalCount += 1; // counts all statuses
        }
        var years = Array.from(agg.keys()).sort(function (a, b) { return a - b; });
        var paidOutSeries = years.map(function (y) { return ({ x: String(y), y: agg.get(y).paid }); });
        var deniedSeries = years.map(function (y) { return ({ x: String(y), y: agg.get(y).denied }); });
        var totalClaimsSeries = years.map(function (y) { return ({ x: String(y), y: agg.get(y).totalCount }); });
        var yAmountMax = Math.max.apply(Math, __spreadArray([0], years.map(function (y) { return Math.max(agg.get(y).paid, agg.get(y).denied); }), false));
        var yCountMax = Math.max.apply(Math, __spreadArray([0], years.map(function (y) { return agg.get(y).totalCount; }), false));
        return { paidOutSeries: paidOutSeries, deniedSeries: deniedSeries, totalClaimsSeries: totalClaimsSeries, yAmountMax: yAmountMax, yCountMax: yCountMax };
    }, [selectedYears, selectedPolicyTypes]), paidOutSeries = _c.paidOutSeries, deniedSeries = _c.deniedSeries, totalClaimsSeries = _c.totalClaimsSeries, yAmountMax = _c.yAmountMax, yCountMax = _c.yCountMax;
    var paidDeniedPieData = React.useMemo(function () {
        var paid = paidOutSeries.reduce(function (s, p) { return s + Number(p.y || 0); }, 0);
        var denied = deniedSeries.reduce(function (s, p) { return s + Number(p.y || 0); }, 0);
        return [
            { x: 'Paid Out', y: paid, text: fmtCurrency(paid) },
            { x: 'Denied', y: denied, text: fmtCurrency(denied) }
        ].filter(function (d) { return d.y > 0; });
    }, [paidOutSeries, deniedSeries]);
    var DeniedChart = function () { return (React.createElement("div", { style: { height: '100%', width: '100%' } }, paidDeniedPieData.length === 0 ? (React.createElement("div", { style: { padding: 12 } }, "No paid/denied data for the selected filters.")) : (React.createElement(ej2_react_charts_1.AccumulationChartComponent, { id: "paid-denied-pie", ref: DeniedRef, legendSettings: { visible: true, position: 'Bottom' }, enableAnimation: true, tooltip: { enable: true, header: '' }, load: onAccumulationLoad, tooltipRender: function (args) {
            var _a, _b, _c, _d;
            var x = String((_b = (_a = args === null || args === void 0 ? void 0 : args.point) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : '');
            var y = Number((_d = (_c = args === null || args === void 0 ? void 0 : args.point) === null || _c === void 0 ? void 0 : _c.y) !== null && _d !== void 0 ? _d : 0);
            args.text = "".concat(x, "<br/>Amount: <b>").concat(fmtCurrency(y), "</b>");
        } },
        React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.AccumulationLegend, ej2_react_charts_1.PieSeries, ej2_react_charts_1.AccumulationTooltip, ej2_react_charts_1.AccumulationDataLabel] }),
        React.createElement(ej2_react_charts_1.AccumulationSeriesCollectionDirective, null,
            React.createElement(ej2_react_charts_1.AccumulationSeriesDirective, { dataSource: paidDeniedPieData, xName: "x", yName: "y", radius: "70%", dataLabel: { visible: true, position: 'Outside', name: 'text' }, border: { color: '#FFFFFF', width: 1 }, palettes: pieThemePalette, animation: { enable: false } })))))); };
    React.useEffect(function () {
        var time = setTimeout(function () { var _a; return (_a = KanbanRef.current) === null || _a === void 0 ? void 0 : _a.refresh(); }, 0);
        return function () { return clearTimeout(time); };
    }, []);
    React.useEffect(function () {
        var _a;
        (_a = KanbanRef.current) === null || _a === void 0 ? void 0 : _a.refresh();
    }, [selectedYears, selectedPolicyTypes]);
    function toTitle(s) {
        var t = (s || '').toLowerCase();
        if (t.includes('health'))
            return 'Health';
        if (t.includes('life'))
            return 'Life';
        if (t.includes('home'))
            return 'Home';
        if (t.includes('travel'))
            return 'Travel';
        if (t.includes('disab'))
            return 'Disability';
        return s || '';
    }
    var resolveYear = function (r, idx) {
        var _a, _b, _c, _d;
        var y = Number((_a = r.year) !== null && _a !== void 0 ? _a : r.Year);
        if (Number.isFinite(y))
            return y;
        var ds = (_d = (_c = (_b = r.ClaimDate) !== null && _b !== void 0 ? _b : r.claimDate) !== null && _c !== void 0 ? _c : r.Date) !== null && _d !== void 0 ? _d : r.date;
        if (ds) {
            var d = new Date(ds);
            if (!Number.isNaN(d.getTime()))
                return d.getFullYear();
        }
        var pool = [2025, 2024, 2023, 2022];
        return pool[idx % pool.length];
    };
    // Infer policy type if missing (from ClaimReason keywords)
    function inferPolicyType(r) {
        var _a, _b, _c, _d;
        var raw = String((_b = (_a = r.PolicyType) !== null && _a !== void 0 ? _a : r.policyType) !== null && _b !== void 0 ? _b : '').toLowerCase();
        if (raw.includes('health'))
            return 'Health';
        if (raw.includes('life'))
            return 'Life';
        if (raw.includes('home'))
            return 'Home';
        if (raw.includes('travel'))
            return 'Travel';
        if (raw.includes('disab'))
            return 'Disability';
        var reason = String((_d = (_c = r.ClaimReason) !== null && _c !== void 0 ? _c : r.reason) !== null && _d !== void 0 ? _d : '').toLowerCase();
        if (/(medical|bills|pre-existing)/.test(reason))
            return 'Health';
        if (/(life)/.test(reason))
            return 'Life';
        if (/(property|damage|home)/.test(reason))
            return 'Home';
        if (/(travel)/.test(reason))
            return 'Travel';
        if (/(disability)/.test(reason))
            return 'Disability';
        return 'Health';
    }
    // Map ClaimReason to a status when ClaimStatus is missing
    var toKanbanStatus = function (v, reason) {
        var s = String(v !== null && v !== void 0 ? v : '').toLowerCase();
        if (['approved', 'accept', 'accepted', 'paid', 'paid out', 'payout', 'settled'].some(function (k) { return s.includes(k); }))
            return 'Approved';
        if (['rejected', 'denied', 'declined'].some(function (k) { return s.includes(k); }))
            return 'Rejected';
        if (['in progress', 'inprogress', 'pending', 'under review', 'processing'].some(function (k) { return s.includes(k); }))
            return 'Inprogress';
        var r = String(reason !== null && reason !== void 0 ? reason : '').toLowerCase();
        if (/(valid|eligibility met|coverage confirmed|assessed|verified)/.test(r))
            return 'Approved';
        if (/(exclusion|lapsed|pre-existing|insufficient|after deadline)/.test(r))
            return 'Rejected';
        if (/(awaiting|pending|underwriter|review)/.test(r))
            return 'Inprogress';
        return 'Inprogress';
    };
    var kanbanData = React.useMemo(function () {
        var _a;
        var claims = (_a = InsuranceData.claimdata) !== null && _a !== void 0 ? _a : [];
        var types = new Set(selectedPolicyTypes.map(function (t) { return t.toLowerCase(); }));
        var useType = types.size > 0;
        return claims
            .map(function (r, idx) {
            var _a, _b, _c, _d, _e, _f;
            var yearNum = resolveYear(r, idx);
            var policyType = toTitle(inferPolicyType(r));
            var status = toKanbanStatus((_c = (_b = (_a = r.ClaimStatus) !== null && _a !== void 0 ? _a : r.claimStatus) !== null && _b !== void 0 ? _b : r.Status) !== null && _c !== void 0 ? _c : r.status, (_d = r.ClaimReason) !== null && _d !== void 0 ? _d : r.reason);
            var id = Number(r.id) || idx + 1;
            return {
                Id: id,
                year: String(yearNum),
                Status: status,
                PolicyType: policyType,
                ClaimReason: String((_f = (_e = r.ClaimReason) !== null && _e !== void 0 ? _e : r.reason) !== null && _f !== void 0 ? _f : '')
            };
        })
            .filter(function (row) { return selectedYears.map(String).includes(row.year); }) // year filter (string)
            .filter(function (row) { return !useType || types.has(row.PolicyType.toLowerCase()); }) // policy type filter
            .filter(function (row) { return !!row.Status; });
    }, [selectedYears, selectedPolicyTypes]);
    var kanbanCardTemplate = function (props) {
        var policyClass = function (name) {
            var s = String(name || '').toLowerCase();
            if (s.includes('health'))
                return 'ins-policy--health';
            if (s.includes('life'))
                return 'ins-policy--life';
            if (s.includes('home'))
                return 'ins-policy--home';
            if (s.includes('travel'))
                return 'ins-policy--travel';
            if (s.includes('disab'))
                return 'ins-policy--disability';
            return '';
        };
        var cls = "kanban-card ".concat(policyClass(props === null || props === void 0 ? void 0 : props.PolicyType));
        return (React.createElement("div", { className: cls },
            React.createElement("div", { className: "insurance-kanban-row" },
                React.createElement("span", { className: "insurance-kanban-id" },
                    "#", props === null || props === void 0 ? void 0 :
                    props.Id),
                React.createElement("span", { className: "insurance-kanban-type" }, props === null || props === void 0 ? void 0 : props.PolicyType)),
            React.createElement("div", { className: "insurance-kanban-reason" }, props === null || props === void 0 ? void 0 : props.ClaimReason)));
    };
    var onKanbanDialogOpen = function (args) {
        // Block the edit/add dialog
        if (args.requestType === 'Edit' || args.requestType === 'Add') {
            args.cancel = true;
        }
    };
    var onCardDoubleClick = function (args) { args.cancel = true; };
    var ClaimStatusKanban = function () { return (React.createElement("div", { style: { height: '100%', width: '100%', display: 'flex', flexDirection: 'column', minHeight: 0, marginTop: '10px' } }, kanbanData.length === 0 ? (React.createElement("div", { style: { padding: 12 } }, "No claims for the selected filters.")) : (React.createElement("div", { className: 'claimstatus-kanban', style: { flex: 1, overflow: 'hidden', minHeight: 0 } },
        React.createElement(ej2_react_kanban_1.KanbanComponent, { ref: KanbanRef, id: "claim-status-kanban", key: "kanban-".concat(selectedYears.join(','), "-").concat(selectedPolicyTypes.join(',')), keyField: "Status", dataSource: kanbanData, allowDragAndDrop: false, height: "100%", width: "100%", cardSettings: {
                showHeader: false,
                template: kanbanCardTemplate
            }, dialogOpen: onKanbanDialogOpen, cardDoubleClick: onCardDoubleClick },
            React.createElement(ej2_react_kanban_1.ColumnsDirective, null,
                React.createElement(ej2_react_kanban_1.ColumnDirective, { headerText: "Approved", keyField: "Approved", allowToggle: true }),
                React.createElement(ej2_react_kanban_1.ColumnDirective, { headerText: "In Progress", keyField: "Inprogress", allowToggle: true }),
                React.createElement(ej2_react_kanban_1.ColumnDirective, { headerText: "Rejected", keyField: "Rejected", allowToggle: true }))))))); };
    var ClaimAmountComparisonChart = function () {
        var _a;
        var claims = (_a = InsuranceData.claimdata) !== null && _a !== void 0 ? _a : [];
        var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var toNum = function (value) {
            return typeof value === 'number' && Number.isFinite(value) ? value :
                (typeof value === 'string' && value.trim() && Number.isFinite(+value) ? +value : 0);
        };
        var getYear = function (r) {
            var _a, _b, _c, _d, _e, _f;
            var y = Number((_c = (_b = (_a = r.year) !== null && _a !== void 0 ? _a : r.Year) !== null && _b !== void 0 ? _b : r.claimYear) !== null && _c !== void 0 ? _c : r.ClaimYear);
            if (Number.isFinite(y))
                return y;
            var ds = (_f = (_e = (_d = r.ClaimDate) !== null && _d !== void 0 ? _d : r.claimDate) !== null && _e !== void 0 ? _e : r.Date) !== null && _f !== void 0 ? _f : r.date;
            if (!ds)
                return undefined;
            var d = new Date(ds);
            return Number.isNaN(d.getTime()) ? undefined : d.getFullYear();
        };
        var getMonth = function (r, idx) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            var mNum = Number((_c = (_b = (_a = r.month) !== null && _a !== void 0 ? _a : r.Month) !== null && _b !== void 0 ? _b : r.monthIndex) !== null && _c !== void 0 ? _c : r.MonthIndex);
            if (Number.isFinite(mNum) && mNum >= 1 && mNum <= 12)
                return mNum;
            var ds = (_f = (_e = (_d = r.ClaimDate) !== null && _d !== void 0 ? _d : r.claimDate) !== null && _e !== void 0 ? _e : r.Date) !== null && _f !== void 0 ? _f : r.date;
            if (ds) {
                var d = new Date(ds);
                if (!Number.isNaN(d.getTime()))
                    return (d.getMonth() + 1);
            }
            var mStr = String((_j = (_h = (_g = r.MonthName) !== null && _g !== void 0 ? _g : r.monthName) !== null && _h !== void 0 ? _h : r.Month) !== null && _j !== void 0 ? _j : '').toLowerCase();
            var mIdx = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'].indexOf(mStr.slice(0, 3));
            if (mIdx >= 0)
                return mIdx + 1;
            return (idx % 12) + 1;
        };
        // filters
        var yearsSel = Array.isArray(selectedYears) && selectedYears.length ? selectedYears : [];
        var currentYear = yearsSel.length ? Math.max.apply(Math, yearsSel) : undefined;
        var prevYear = currentYear ? currentYear - 1 : undefined;
        var typesLower = new Set(selectedPolicyTypes.map(function (t) { return t.toLowerCase(); }));
        var useType = typesLower.size > 0;
        // build monthly totals for a given year
        var monthlyFor = function (yr) {
            var totals = Array.from({ length: 12 }, function () { return 0; });
            if (!yr)
                return totals;
            claims.forEach(function (r, idx) {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j;
                var y = getYear(r);
                if (y !== yr)
                    return;
                if (useType) {
                    var pt = String((_d = (_c = (_b = (_a = r.PolicyType) !== null && _a !== void 0 ? _a : r.policyType) !== null && _b !== void 0 ? _b : r.Type) !== null && _c !== void 0 ? _c : r.policy) !== null && _d !== void 0 ? _d : '').toLowerCase();
                    if (!typesLower.has(pt))
                        return;
                }
                var m = getMonth(r, idx); // 1..12
                var amt = toNum((_j = (_h = (_g = (_f = (_e = r.ClaimAmount) !== null && _e !== void 0 ? _e : r.claimAmount) !== null && _f !== void 0 ? _f : r.Amount) !== null && _g !== void 0 ? _g : r.amount) !== null && _h !== void 0 ? _h : r.PayoutAmount) !== null && _j !== void 0 ? _j : r.payoutAmount);
                if (m >= 1 && m <= 12)
                    totals[m - 1] += amt;
            });
            return totals;
        };
        var currMonthly = monthlyFor(currentYear);
        var prevMonthly = monthlyFor(prevYear);
        var currSeries = MONTHS.map(function (m, i) { return ({ x: m, y: currMonthly[i] || 0 }); });
        var prevSeries = MONTHS.map(function (m, i) { return ({ x: m, y: prevMonthly[i] || 0 }); });
        var hasCurrData = currSeries.some(function (p) { return p.y > 0; });
        var hasPrevData = prevYear != null && prevSeries.some(function (p) { return p.y > 0; });
        var onCurrencyAxisLabel = function (args) {
            var _a;
            if (((_a = args === null || args === void 0 ? void 0 : args.axis) === null || _a === void 0 ? void 0 : _a.valueType) !== 'Category') {
                args.text = fmtCurrency(Number(args.value || 0));
            }
        };
        var onMonthlyTooltip = function (args) {
            var _a, _b, _c, _d, _e, _f;
            var y = Number((_b = (_a = args === null || args === void 0 ? void 0 : args.point) === null || _a === void 0 ? void 0 : _a.y) !== null && _b !== void 0 ? _b : 0);
            var x = String((_d = (_c = args === null || args === void 0 ? void 0 : args.point) === null || _c === void 0 ? void 0 : _c.x) !== null && _d !== void 0 ? _d : '');
            var name = String((_f = (_e = args === null || args === void 0 ? void 0 : args.series) === null || _e === void 0 ? void 0 : _e.name) !== null && _f !== void 0 ? _f : '');
            args.text = "".concat(name, "<br/>").concat(x, " : ").concat(fmtCurrency(y));
        };
        if (!currentYear || (!hasCurrData && !hasPrevData)) {
            return React.createElement("div", { style: { padding: 12 } }, "No monthly claim amount data for the selected filters.");
        }
        return (React.createElement("div", { style: { width: '100%', height: '100%', padding: 8, boxSizing: 'border-box' } },
            React.createElement(ej2_react_charts_1.ChartComponent, { id: "claim-amount-monthly", ref: ClaimAmountComparisonRef, enableAnimation: false, primaryXAxis: {
                    valueType: 'Category',
                    majorGridLines: { width: 0 },
                    labelIntersectAction: 'Trim',
                    labelStyle: { size: '11px' }
                }, primaryYAxis: {
                    labelFormat: '${value}',
                    lineStyle: { width: 0 },
                    majorTickLines: { width: 0 },
                    minorTickLines: { width: 0 },
                    majorGridLines: { width: 0 }
                }, chartArea: { border: { width: 0 } }, legendSettings: { visible: true, position: 'Bottom' }, tooltip: { enable: true }, crosshair: { enable: true, lineType: 'Vertical' }, width: "100%", height: "100%", axisLabelRender: onCurrencyAxisLabel, tooltipRender: onMonthlyTooltip, load: onChartLoad },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.SplineAreaSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Tooltip, ej2_react_charts_1.Legend, ej2_react_charts_1.Crosshair] }),
                React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                    hasPrevData && (React.createElement(ej2_react_charts_1.SeriesDirective, { type: "SplineArea", dataSource: prevSeries, xName: "x", yName: "y", name: "".concat(prevYear, " Claim Amount"), opacity: 0.5, border: { width: 2, color: '#CDA310' }, fill: "#CDA310", marker: { visible: true, width: 6, height: 6, shape: 'Circle' }, animation: { enable: false } })),
                    hasCurrData && (React.createElement(ej2_react_charts_1.SeriesDirective, { type: "SplineArea", dataSource: currSeries, xName: "x", yName: "y", name: "".concat(currentYear, " Claim Amount"), opacity: 0.5, border: { width: 2, color: '#FF7000' }, fill: "#FF7000", marker: { visible: true, width: 6, height: 6, shape: 'Circle' }, animation: { enable: false } }))))));
    };
    var applySortTrigger = React.useRef(false);
    var claimGridData = React.useMemo(function () {
        var _a;
        var all = (_a = InsuranceData.claimdata) !== null && _a !== void 0 ? _a : [];
        var years = new Set(selectedYears);
        var types = new Set(selectedPolicyTypes.map(function (t) { return t.toLowerCase(); }));
        var useType = types.size > 0;
        return all
            .filter(function (r) { return years.has(Number(r.year)); })
            .filter(function (r) {
            var _a, _b;
            if (!useType)
                return true;
            var pt = String((_b = (_a = r.PolicyType) !== null && _a !== void 0 ? _a : r.policyType) !== null && _b !== void 0 ? _b : '').toLowerCase();
            return types.has(pt);
        })
            .map(function (r) {
            var _a, _b, _c, _d;
            return ({
                id: r.id,
                year: Number(r.year),
                ClaimDate: r.ClaimDate,
                PolicyType: toTitle((_b = (_a = r.PolicyType) !== null && _a !== void 0 ? _a : r.policyType) !== null && _b !== void 0 ? _b : ''),
                ClaimAmount: Number(r.ClaimAmount) || 0,
                ClaimStatus: String((_d = (_c = r.ClaimStatus) !== null && _c !== void 0 ? _c : r.claimStatus) !== null && _d !== void 0 ? _d : ''),
                Region: r.Region // <-- fix
            });
        });
    }, [selectedYears, selectedPolicyTypes]);
    var statusColors = {
        approved: '#2e7d32',
        rejected: '#c62828',
        'in progress': 'rgb(189, 126, 0)',
        inprogress: 'rgb(189, 126, 0)'
    };
    var queryCellInfo = function (args) {
        var _a, _b, _c;
        if (((_a = args.column) === null || _a === void 0 ? void 0 : _a.field) === 'ClaimStatus') {
            var raw = String((_c = (_b = args.data) === null || _b === void 0 ? void 0 : _b.ClaimStatus) !== null && _c !== void 0 ? _c : '').trim();
            var key = raw.toLowerCase();
            // map to badge variants
            var variant = key === 'approved' ? 'approved' :
                key === 'rejected' ? 'rejected' :
                    (key === 'in progress' || key === 'inprogress') ? 'progress' :
                        '';
            // center cell, remove default text color
            Object.assign(args.cell.style, { textAlign: 'center', color: 'inherit' });
            // inject badge
            var label = raw || '-';
            args.cell.innerHTML =
                "<span class=\"ins-badge ".concat(variant ? "ins-badge--".concat(variant) : '', "\" title=\"").concat(label, "\">").concat(label, "</span>");
        }
    };
    React.useEffect(function () {
        if (!applySortTrigger.current || !gridRef.current)
            return;
        gridRef.current.sortSettings = {
            columns: [
                { field: 'PolicyType', direction: 'Ascending' },
                { field: 'year', direction: 'Ascending' }
            ]
        };
        gridRef.current.refresh();
        applySortTrigger.current = false;
    }, [selectedPolicyTypes, selectedYears]);
    // const toolBarOptions = [
    //   { id: 'search', text: 'Search', align: 'Right' },
    //   { id: 'excel', text: 'Excel Export', align: 'Left' },
    //   { id: 'pdf', text: 'PDF Export', align: 'Left' },
    // ]
    var toolBarOptions = ['Search', 'ExcelExport', 'PdfExport'];
    function toolbarClick(args) {
        var _a, _b;
        switch (args.item.id) {
            case 'claimDetailsGrid_pdfexport':
                (_a = gridRef.current) === null || _a === void 0 ? void 0 : _a.pdfExport();
                break;
            case 'claimDetailsGrid_excelexport':
                (_b = gridRef.current) === null || _b === void 0 ? void 0 : _b.excelExport();
                break;
        }
    }
    var ClaimDetailsGrid = function () { return (React.createElement("div", { style: { width: '100%', height: '100%', padding: 8 } },
        React.createElement(ej2_react_grids_1.GridComponent, { ref: gridRef, id: 'claimDetailsGrid', dataSource: claimGridData, allowPaging: false, enableVirtualMaskRow: true, allowSorting: true, allowResizing: true, allowFiltering: true, allowMultiSorting: true, width: '100%', height: '100%', allowGrouping: true, allowExcelExport: true, allowPdfExport: true, toolbar: toolBarOptions, toolbarClick: toolbarClick, filterSettings: { type: 'Menu' }, queryCellInfo: queryCellInfo },
            React.createElement(ej2_react_grids_1.ColumnsDirective, null,
                React.createElement(ej2_react_grids_1.ColumnDirective, { field: "year", headerText: "Year", headerTemplate: headerWithTooltip("Year"), visible: false }),
                React.createElement(ej2_react_grids_1.ColumnDirective, { field: "id", headerText: "Id", headerTemplate: headerWithTooltip("Id"), width: "90", textAlign: "Right", isPrimaryKey: true }),
                React.createElement(ej2_react_grids_1.ColumnDirective, { field: "ClaimDate", headerText: "Claim Date", headerTemplate: headerWithTooltip("Claim Date"), width: "130", textAlign: "Right" }),
                React.createElement(ej2_react_grids_1.ColumnDirective, { field: "PolicyType", headerText: "Policy Type", headerTemplate: headerWithTooltip("Policy Type"), width: "130", textAlign: "Left" }),
                React.createElement(ej2_react_grids_1.ColumnDirective, { field: "ClaimAmount", headerText: "Claim Amount", headerTemplate: headerWithTooltip("Claim Amount"), width: "140", textAlign: "Right", format: "C0" }),
                React.createElement(ej2_react_grids_1.ColumnDirective, { field: "ClaimStatus", headerText: "Claim Status", headerTemplate: headerWithTooltip("Claim Status"), width: "140", textAlign: "Center" }),
                React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Region", headerText: "Region", headerTemplate: headerWithTooltip("Region"), width: "140", textAlign: "Left" })),
            React.createElement(ej2_react_grids_1.Inject, { services: [ej2_react_grids_1.Sort, ej2_react_grids_1.Page, ej2_react_grids_1.Filter, ej2_react_grids_1.Resize, ej2_react_grids_1.Group, ej2_react_grids_1.RowDD, ej2_react_grids_1.Toolbar, ej2_react_grids_1.ExcelExport, ej2_react_grids_1.PdfExport] })))); };
    // Regions we care about (normalized)
    var REGIONS = ['United States', 'Brazil', 'United Kingdom', 'Russia', 'China', 'India'];
    var normalizeRegion = function (v) {
        var s = String(v !== null && v !== void 0 ? v : '').trim().toLowerCase();
        if (!s)
            return undefined;
        if (s === 'north america' || s === 'united states' || s === 'usa' || s === 'united states of america')
            return 'United States';
        if (s === 'south america' || s === 'brazil' || s === 'argentina' || s === 'chile' || s === 'peru' || s === 'colombia')
            return 'Brazil';
        if (s.includes('united kingdom') || s === 'uk' || s === 'britain' || s === 'england')
            return 'United Kingdom';
        if (s === 'russia' || s === 'russian federation')
            return 'Russia';
        if (s === 'china' || s === 'prc')
            return 'China';
        if (s === 'india')
            return 'India';
        return undefined;
    };
    // Aggregate Claim Amount and Record Count by Region with filters
    var _d = React.useMemo(function () {
        var _a, _b, _c, _d, _e, _f;
        var claims = (_a = InsuranceData.claimdata) !== null && _a !== void 0 ? _a : [];
        var years = new Set(selectedYears);
        var types = new Set(selectedPolicyTypes.map(function (t) { return t.toLowerCase(); }));
        var useType = types.size > 0;
        var amountMap = new Map(REGIONS.map(function (r) { return [r, 0]; }));
        var countMap = new Map(REGIONS.map(function (r) { return [r, 0]; }));
        for (var _i = 0, claims_4 = claims; _i < claims_4.length; _i++) {
            var r = claims_4[_i];
            var y = Number((_b = r.year) !== null && _b !== void 0 ? _b : r.Year);
            if (!years.has(y))
                continue;
            var pt = String((_d = (_c = r.PolicyType) !== null && _c !== void 0 ? _c : r.policyType) !== null && _d !== void 0 ? _d : '').toLowerCase();
            if (useType && !types.has(pt))
                continue;
            var norm = normalizeRegion(r.Region);
            if (!norm)
                continue;
            var amt = Number((_f = (_e = r.ClaimAmount) !== null && _e !== void 0 ? _e : r.amount) !== null && _f !== void 0 ? _f : 0) || 0;
            amountMap.set(norm, (amountMap.get(norm) || 0) + amt);
            countMap.set(norm, (countMap.get(norm) || 0) + 1);
        }
        var amountByRegion = REGIONS
            .map(function (x) {
            var y = amountMap.get(x) || 0;
            return { x: x, y: y, text: fmtCurrency(y) };
        })
            .filter(function (d) { return d.y > 0; });
        var countByRegion = REGIONS
            .map(function (x) { return ({ x: x, y: countMap.get(x) || 0, text: String(countMap.get(x) || 0) }); })
            .filter(function (d) { return d.y > 0; });
        return { amountByRegion: amountByRegion, countByRegion: countByRegion };
    }, [selectedYears, selectedPolicyTypes]), amountByRegion = _d.amountByRegion, countByRegion = _d.countByRegion;
    var TotalRecordsByRegionMap = function () {
        var _a = React.useState(null), worldData = _a[0], setWorldData = _a[1];
        React.useEffect(function () {
            var alive = true;
            fetch('https://cdn.syncfusion.com/maps/map-data/world-map.json')
                .then(function (r) { return r.json(); })
                .then(function (d) { if (alive)
                setWorldData(d); })
                .catch(function () { return setWorldData(null); });
            return function () { alive = false; };
        }, []);
        React.useEffect(function () {
            var refresh = function () { var _a; return (_a = RecordsMapRef.current) === null || _a === void 0 ? void 0 : _a.refresh(); };
            var t = setTimeout(refresh, 0);
            window.addEventListener('resize', refresh);
            return function () { clearTimeout(t); window.removeEventListener('resize', refresh); };
        }, []);
        // shape aliases for world map join
        var shapeAliases = {
            'united states': ['United States'],
            'brazil': ['Brazil'],
            'united kingdom': ['United Kingdom'],
            'russia': ['Russia', 'Russian Federation'],
            'china': ['China'],
            'india': ['India']
        };
        // marker coordinates per country
        var countryCoords = function (country) {
            switch (country) {
                case 'United States': return { latitude: 39.8283, longitude: -98.5795 };
                case 'Brazil': return { latitude: -14.2350, longitude: -51.9253 };
                case 'United Kingdom': return { latitude: 55.3781, longitude: -3.4360 };
                case 'Russia': return { latitude: 61.5240, longitude: 105.3188 };
                case 'China': return { latitude: 35.8617, longitude: 104.1954 };
                case 'India': return { latitude: 20.5937, longitude: 78.9629 };
                default: return { latitude: 0, longitude: 0 };
            }
        };
        // Use already-computed, filter-respecting totals
        var amountByRegionMap = React.useMemo(function () {
            var m = new Map();
            amountByRegion.forEach(function (d) { return m.set(d.x, Number(d.y || 0)); });
            return m;
        }, [amountByRegion]);
        var allowedTooltipCountries = React.useMemo(function () { return new Set(['United States', 'Brazil', 'United Kingdom', 'Russia', 'China', 'India']); }, []);
        var onMapTooltipRender = React.useCallback(function (args) {
            var _a, _b, _c, _d, _e;
            var data = (_b = (_a = args === null || args === void 0 ? void 0 : args.options) === null || _a === void 0 ? void 0 : _a.data) !== null && _b !== void 0 ? _b : args === null || args === void 0 ? void 0 : args.data;
            if (!data) {
                args.cancel = true;
                return;
            }
            var country = String((_e = (_d = (_c = data.country) !== null && _c !== void 0 ? _c : data.region) !== null && _d !== void 0 ? _d : data.name) !== null && _e !== void 0 ? _e : '').trim();
            if (!allowedTooltipCountries.has(country)) {
                args.cancel = true;
            }
        }, [allowedTooltipCountries]);
        var regions = countByRegion
            .filter(function (d) { return Number(d.y) > 0; })
            .map(function (d) {
            var _a, _b;
            return ({
                country: d.x,
                value: Number(d.y),
                label: String(d.y),
                amount: (_a = amountByRegionMap.get(d.x)) !== null && _a !== void 0 ? _a : 0,
                amountText: fmtCurrency((_b = amountByRegionMap.get(d.x)) !== null && _b !== void 0 ? _b : 0)
            });
        });
        if (!worldData)
            return React.createElement("div", { style: { padding: 12 } }, "Loading map\u2026");
        if (!regions.length)
            return React.createElement("div", { style: { padding: 12 } }, "No records for the selected filters.");
        // expand to shape aliases for joining by shape name
        var mapData = regions.flatMap(function (r) {
            var _a;
            var aliases = (_a = shapeAliases[r.country.toLowerCase()]) !== null && _a !== void 0 ? _a : [];
            return aliases.map(function (name) { return (__assign({ name: name }, r)); });
        });
        // legend/color by country
        var colors = mapPaletteColors;
        var colorMapping = regions.map(function (r, i) { return ({
            value: r.country,
            color: colors[i % colors.length],
            label: "".concat(r.country, " - ").concat(r.amountText)
        }); });
        var markers = regions.map(function (r) { return (__assign(__assign({}, r), countryCoords(r.country))); });
        return (React.createElement("div", { className: "insurance-map-panel" },
            React.createElement(ej2_react_maps_1.MapsComponent, { ref: RecordsMapRef, id: "records-region-map", height: "100%", width: "100%", background: "transparent", tooltipDisplayMode: "MouseMove", legendSettings: { visible: true, position: 'Bottom', mode: 'Default' }, tooltipRender: onMapTooltipRender, load: Mapload },
                React.createElement(ej2_react_maps_1.Inject, { services: [ej2_react_maps_1.MapsTooltip, ej2_react_maps_1.Zoom, ej2_react_maps_1.Legend, ej2_react_maps_1.Selection, ej2_react_maps_1.Highlight] }),
                React.createElement(ej2_react_maps_1.LayersDirective, null,
                    React.createElement(ej2_react_maps_1.LayerDirective, { dataSource: mapData, shapeData: worldData, shapeDataPath: "name", shapePropertyPath: "name", shapeSettings: {
                            fill: '#E5E5E5',
                            colorValuePath: 'country',
                            colorMapping: colorMapping
                        }, tooltipSettings: {
                            visible: true,
                            valuePath: 'country',
                            format: '<b>${country}</b><br/>Records: <b>${value}</b><br/>Amount: <b>${amountText}</b>'
                        } },
                        React.createElement(ej2_react_maps_1.MarkersDirective, null,
                            React.createElement(ej2_react_maps_1.MarkerDirective, { visible: true, dataSource: markers, animationDuration: 0, template: '<div class="map-marker">${label}</div>' })))))));
    };
    // Claim Severity by Region = (Total Amount) / (Number of Claims)
    var _e = React.useMemo(function () {
        var amt = new Map(amountByRegion.map(function (d) { return [d.x, Number(d.y || 0)]; }));
        var cnt = new Map(countByRegion.map(function (d) { return [d.x, Number(d.y || 0)]; }));
        var rows = REGIONS.map(function (r) {
            var amount = amt.get(r) || 0;
            var count = cnt.get(r) || 0;
            var sev = count > 0 ? amount / count : 0;
            return { x: r, y: sev };
        }).filter(function (d) { return d.y > 0; });
        var max = Math.max.apply(Math, __spreadArray([0], rows.map(function (d) { return d.y; }), false));
        return { severityByRegion: rows, severityMax: max };
    }, [amountByRegion, countByRegion]), severityByRegion = _e.severityByRegion, severityMax = _e.severityMax;
    var ClaimSeverityByRegionChart = function () {
        var pieData = React.useMemo(function () { return severityByRegion.map(function (d) { return (__assign(__assign({}, d), { text: fmtCurrency(Number(d.y || 0)) })); }); }, [severityByRegion]);
        return (React.createElement("div", { style: { width: '100%', height: '100%' } }, pieData.length === 0 ? (React.createElement("div", { style: { padding: 12 } }, "No severity data for the selected filters.")) : (React.createElement(ej2_react_charts_1.AccumulationChartComponent, { id: "claim-severity-region-pie", ref: ClaimSeverityRef, legendSettings: { visible: true, position: 'Bottom' }, enableAnimation: true, load: onAccumulationLoad, tooltip: { enable: true, header: '' }, tooltipRender: function (args) {
                var _a, _b, _c, _d;
                var x = String((_b = (_a = args === null || args === void 0 ? void 0 : args.point) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : '');
                var y = Number((_d = (_c = args === null || args === void 0 ? void 0 : args.point) === null || _c === void 0 ? void 0 : _c.y) !== null && _d !== void 0 ? _d : 0);
                args.text = "".concat(x, "<br/>Severity: <b>").concat(fmtCurrency(y), "</b>");
            } },
            React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.AccumulationLegend, ej2_react_charts_1.PieSeries, ej2_react_charts_1.AccumulationTooltip, ej2_react_charts_1.AccumulationDataLabel] }),
            React.createElement(ej2_react_charts_1.AccumulationSeriesCollectionDirective, null,
                React.createElement(ej2_react_charts_1.AccumulationSeriesDirective, { dataSource: pieData, xName: "x", yName: "y", radius: "70%", dataLabel: { visible: true, position: 'Outside', name: 'text' }, border: { color: '#FFFFFF', width: 1 }, palettes: pieThemePalette, animation: { enable: false } }))))));
    };
    return (React.createElement("div", { className: "Container" },
        React.createElement("div", { className: "e-card insurance-toolbar" },
            React.createElement("div", { className: "insurance-toolbar-left" },
                React.createElement("h4", { className: "insurance-title" }, "Claim Analysis")),
            React.createElement("div", { className: "insurance-toolbar-right", style: { display: 'flex', gap: 10 } },
                React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { id: "policyTypeToolbar", dataSource: policyTypeOptions, fields: { text: 'name', value: 'id' }, placeholder: "Policy type", value: selectedPolicyTypeValue, change: onPolicyTypeChange, width: 200 }),
                React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { id: "yearToolbarClaim", dataSource: yearOptions, fields: { text: 'label', value: 'id' }, placeholder: "Select year", value: currentYearClaim != null ? String(currentYearClaim) : undefined, change: onYearChange, width: 160 }))),
        React.createElement(ej2_react_layouts_1.DashboardLayoutComponent, { id: "dashboard_performance", ref: ClaimAnalysisRef, style: { width: '100%', height: '100%', zIndex: 1 }, columns: 8, cellAspectRatio: 90 / 100, cellSpacing: [10, 10], allowResizing: false, allowDragging: false, mediaQuery: "(max-width:950px)", created: onCreated },
            React.createElement(ej2_react_layouts_1.PanelsDirective, null,
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 0, col: 0, content: TotalClaims }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 0, col: 2, content: TotalClaimAmount }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 0, col: 4, content: AverageClaimAmount }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 0, col: 6, content: ClaimApprovalRate }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 3, sizeY: 3, row: 1, col: 0, header: "<div>Claim Paid Out vs Denied</div>", content: DeniedChart }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 5, sizeY: 3, row: 1, col: 3, header: "<div>Claim Amount Comparison</div>", content: ClaimAmountComparisonChart }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 8, sizeY: 3, row: 4, col: 0, header: "<div>Claim Status</div>", content: ClaimStatusKanban }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 5, sizeY: 3, row: 9, col: 0, header: "<div>Total Amount and Records by Region</div>", content: TotalRecordsByRegionMap }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 3, sizeY: 3, row: 9, col: 5, header: "<div>Average Claim Cost by Region</div>", content: ClaimSeverityByRegionChart }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 8, sizeY: 3, row: 12, col: 0, header: "<div>Claim Details</div>", content: ClaimDetailsGrid })))));
};
var Dashboard3 = function (_a) {
    var selectedYears = _a.selectedYears, onChangeYears = _a.onChangeYears;
    var CustomerFeedbackRef = React.useRef(null);
    var NpsRef = React.useRef(null);
    var CrrRef = React.useRef(null);
    var ChannelFeedbackRef = React.useRef(null);
    var CustomerRatingRef = React.useRef(null);
    var gridInstance = React.useRef(null);
    var totalResponseRef = React.useRef(null);
    var YEAR_RANGE_CUSTOMER = [2025, 2024, 2023, 2022];
    var _b = React.useState(selectedYears.length ? selectedYears : (YEAR_RANGE_CUSTOMER.length ? [YEAR_RANGE_CUSTOMER[0]] : [])), selectedYearsCustomer = _b[0], setSelectedYearsCustomer = _b[1];
    var assignYearFromComment = React.useCallback(function (text, index) {
        var pool = YEAR_RANGE_CUSTOMER;
        var h = 5381;
        var s = String(text || '');
        for (var i = 0; i < s.length; i++) {
            h = ((h << 5) + h) + s.charCodeAt(i);
            h |= 0;
        }
        var idx = Math.abs(h + index) % pool.length;
        return pool[idx];
    }, []);
    var yearOptionsCustomer = React.useMemo(function () { return YEAR_RANGE_CUSTOMER.map(function (y) { return ({ id: String(y), label: String(y) }); }); }, []);
    var currentYearCustomer = React.useMemo(function () { return (selectedYears.length ? Math.max.apply(Math, selectedYears) : YEAR_RANGE_CUSTOMER[0]); }, [selectedYears]);
    React.useEffect(function () {
        setSelectedYearsCustomer(selectedYears);
    }, [selectedYears]);
    var onYearChangeToolbar = function (e) {
        var v = Number(e === null || e === void 0 ? void 0 : e.value);
        if (Number.isFinite(v)) {
            onChangeYears([v]);
            setSelectedYearsCustomer([v]);
        }
    };
    React.useEffect(function () {
        var timer;
        var refreshAll = function () {
            clearTimeout(timer);
            timer = setTimeout(function () {
                var _a, _b, _c, _d, _e, _f, _g;
                (_a = CustomerFeedbackRef.current) === null || _a === void 0 ? void 0 : _a.refresh();
                (_b = NpsRef.current) === null || _b === void 0 ? void 0 : _b.refresh();
                (_c = CrrRef.current) === null || _c === void 0 ? void 0 : _c.refresh();
                (_d = ChannelFeedbackRef.current) === null || _d === void 0 ? void 0 : _d.refresh();
                (_e = CustomerRatingRef.current) === null || _e === void 0 ? void 0 : _e.refresh();
                (_f = gridInstance.current) === null || _f === void 0 ? void 0 : _f.refresh();
                (_g = totalResponseRef.current) === null || _g === void 0 ? void 0 : _g.refresh();
            }, 500);
        };
        window.addEventListener('sidebar-toggled', refreshAll);
        window.addEventListener('resize', refreshAll);
        return function () {
            window.removeEventListener('sidebar-toggled', refreshAll);
            window.removeEventListener('resize', refreshAll);
            clearTimeout(timer);
        };
    }, []);
    // Total responses from SentimentAnalysis if present; fallback to count of comments
    var totalResponses = React.useMemo(function () {
        var _a, _b, _c, _d, _e, _f;
        var customerdata = (_a = InsuranceData.customerdata) !== null && _a !== void 0 ? _a : {};
        var rows = Array.isArray(customerdata === null || customerdata === void 0 ? void 0 : customerdata.SentimentAnalysis) ? customerdata.SentimentAnalysis : [];
        var years = new Set(selectedYearsCustomer);
        var toNum = function (v) {
            return typeof v === 'number' && Number.isFinite(v) ? v :
                (typeof v === 'string' && v.trim() && Number.isFinite(+v) ? +v : 0);
        };
        var getYear = function (r) {
            var _a, _b;
            var y = Number((_a = r.year) !== null && _a !== void 0 ? _a : r.Year);
            if (Number.isFinite(y))
                return y;
            var ds = (_b = r.Date) !== null && _b !== void 0 ? _b : r.date;
            if (!ds)
                return undefined;
            var d = new Date(ds);
            return Number.isNaN(d.getTime()) ? undefined : d.getFullYear();
        };
        if (Array.isArray(rows) && rows.length) {
            var total = 0;
            for (var _i = 0, rows_5 = rows; _i < rows_5.length; _i++) {
                var r = rows_5[_i];
                var y = getYear(r);
                if (!Number.isFinite(y) || !years.has(y))
                    continue;
                var hasBuckets = r.Positive != null || r.positive != null ||
                    r.Neutral != null || r.neutral != null ||
                    r.Negative != null || r.negative != null;
                if (hasBuckets) {
                    total += toNum((_b = r.Positive) !== null && _b !== void 0 ? _b : r.positive)
                        + toNum((_c = r.Neutral) !== null && _c !== void 0 ? _c : r.neutral)
                        + toNum((_d = r.Negative) !== null && _d !== void 0 ? _d : r.negative);
                }
                else {
                    total += toNum((_f = (_e = r.Count) !== null && _e !== void 0 ? _e : r.count) !== null && _f !== void 0 ? _f : 0);
                }
            }
            return total;
        }
        if (Array.isArray(customerdata)) {
            var total_1 = 0;
            customerdata.forEach(function (row, idx) {
                var _a, _b;
                var y = Number((_a = row === null || row === void 0 ? void 0 : row.Year) !== null && _a !== void 0 ? _a : row === null || row === void 0 ? void 0 : row.year);
                var yr = Number.isFinite(y) ? y : assignYearFromComment((_b = row === null || row === void 0 ? void 0 : row.Comment) !== null && _b !== void 0 ? _b : '', idx);
                if (years.has(yr))
                    total_1++;
            });
            return total_1;
        }
        return 0;
    }, [selectedYearsCustomer, assignYearFromComment]);
    var totalResponsesSparkByYear = React.useMemo(function () {
        var _a;
        var cd = (_a = InsuranceData.customerdata) !== null && _a !== void 0 ? _a : {};
        var rows = Array.isArray(cd === null || cd === void 0 ? void 0 : cd.SentimentAnalysis) ? cd.SentimentAnalysis
            : (Array.isArray(cd) ? cd : []);
        var getYear = function (r, idx) {
            var _a, _b, _c;
            var y = Number((_a = r === null || r === void 0 ? void 0 : r.Year) !== null && _a !== void 0 ? _a : r === null || r === void 0 ? void 0 : r.year);
            if (Number.isFinite(y))
                return y;
            var ds = (_b = r === null || r === void 0 ? void 0 : r.Date) !== null && _b !== void 0 ? _b : r === null || r === void 0 ? void 0 : r.date;
            if (ds) {
                var d = new Date(ds);
                if (!Number.isNaN(d.getFullYear()))
                    return d.getFullYear();
            }
            return assignYearFromComment(String((_c = r === null || r === void 0 ? void 0 : r.Comment) !== null && _c !== void 0 ? _c : ''), idx);
        };
        var toNum = function (v) {
            return typeof v === 'number' && Number.isFinite(v) ? v :
                (typeof v === 'string' && v.trim() && Number.isFinite(+v) ? +v : 0);
        };
        var counts = new Map(ALLOWED_YEARS.map(function (y) { return [y, 0]; }));
        rows.forEach(function (r, idx) {
            var _a, _b, _c;
            var y = getYear(r, idx);
            if (!ALLOWED_YEARS.includes(y))
                return;
            if ('Positive' in r || 'Neutral' in r || 'Negative' in r || 'positive' in r || 'neutral' in r || 'negative' in r) {
                var add = toNum((_a = r.Positive) !== null && _a !== void 0 ? _a : r.positive) + toNum((_b = r.Neutral) !== null && _b !== void 0 ? _b : r.neutral) + toNum((_c = r.Negative) !== null && _c !== void 0 ? _c : r.negative);
                counts.set(y, (counts.get(y) || 0) + add);
            }
            else {
                counts.set(y, (counts.get(y) || 0) + 1);
            }
        });
        return __spreadArray([], ALLOWED_YEARS, true).sort().map(function (y) { return ({ x: String(y), y: counts.get(y) || 0 }); });
    }, [assignYearFromComment]);
    var TotalResponsesCard = function () { return (React.createElement("div", { className: "kpi-totalcard" },
        React.createElement("div", { className: "spark-header" },
            React.createElement("div", { className: "insurance-label" }, "Total Responses"),
            React.createElement("div", { className: "insurance-totalvalue" }, totalResponses.toLocaleString())),
        React.createElement("div", { className: "spark-content", style: { width: '50%', height: '50%' } },
            React.createElement("div", null,
                React.createElement(ej2_react_charts_1.SparklineComponent, { id: "total-responses-spark", ref: totalResponseRef, type: "Column", dataSource: totalResponsesSparkByYear, xName: "x", yName: "y", valueType: "Category", width: "100%", height: "55px", fill: "#05B3DA", axisSettings: { minY: 130 }, tooltipSettings: { visible: true, format: 'Year: ${x}<br/>Responses: ${y}' } },
                    React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.SparklineTooltip] })))))); };
    // Average SatisfactionScore (%) for selected years 
    var avgSatisfaction = React.useMemo(function () {
        var rows = Array.isArray(InsuranceData.customerdata) ? InsuranceData.customerdata : [];
        if (!rows.length)
            return 0;
        var years = new Set(selectedYearsCustomer);
        var toNum = function (v) {
            return typeof v === 'number' && Number.isFinite(v) ? v :
                (typeof v === 'string' && v.trim() && Number.isFinite(+v) ? +v : NaN);
        };
        var resolveYear = function (row, idx) {
            var _a, _b, _c;
            var y = Number((_a = row === null || row === void 0 ? void 0 : row.Year) !== null && _a !== void 0 ? _a : row === null || row === void 0 ? void 0 : row.year);
            if (Number.isFinite(y))
                return y;
            var ds = (_b = row === null || row === void 0 ? void 0 : row.Date) !== null && _b !== void 0 ? _b : row === null || row === void 0 ? void 0 : row.date;
            if (ds) {
                var d = new Date(ds);
                if (!Number.isNaN(d.getFullYear()))
                    return d.getFullYear();
            }
            return assignYearFromComment(String((_c = row === null || row === void 0 ? void 0 : row.Comment) !== null && _c !== void 0 ? _c : ''), idx);
        };
        var sum = 0, n = 0;
        rows.forEach(function (r, idx) {
            var score = toNum(r === null || r === void 0 ? void 0 : r.SatisfactionScore);
            if (!Number.isFinite(score))
                return;
            var yr = resolveYear(r, idx);
            if (!years.has(yr))
                return;
            sum += Math.max(0, Math.min(100, score));
            n += 1;
        });
        return n ? (sum / n) : 0;
    }, [selectedYearsCustomer, assignYearFromComment]);
    // Delta for average satisfaction score (vs previous year)
    var satisfactionDelta = React.useMemo(function () {
        var rows = Array.isArray(InsuranceData.customerdata) ? InsuranceData.customerdata : [];
        if (!rows.length || !selectedYearsCustomer.length)
            return undefined;
        var currentYear = Math.max.apply(Math, selectedYearsCustomer);
        var prevYear = currentYear - 1;
        var toNum = function (value) {
            return typeof value === 'number' && Number.isFinite(value) ? value :
                (typeof value === 'string' && value.trim() && Number.isFinite(+value) ? +value : NaN);
        };
        var resolveYear = function (row, idx) {
            var _a, _b, _c;
            var y = Number((_a = row === null || row === void 0 ? void 0 : row.Year) !== null && _a !== void 0 ? _a : row === null || row === void 0 ? void 0 : row.year);
            if (Number.isFinite(y))
                return y;
            var ds = (_b = row === null || row === void 0 ? void 0 : row.Date) !== null && _b !== void 0 ? _b : row === null || row === void 0 ? void 0 : row.date;
            if (ds) {
                var d = new Date(ds);
                if (!Number.isNaN(d.getFullYear()))
                    return d.getFullYear();
            }
            return assignYearFromComment(String((_c = row === null || row === void 0 ? void 0 : row.Comment) !== null && _c !== void 0 ? _c : ''), idx);
        };
        var avgFor = function (yr) {
            var sum = 0, n = 0;
            rows.forEach(function (r, idx) {
                var score = toNum(r === null || r === void 0 ? void 0 : r.SatisfactionScore);
                if (!Number.isFinite(score))
                    return;
                var y = resolveYear(r, idx);
                if (y !== yr)
                    return;
                sum += Math.max(0, Math.min(100, score));
                n += 1;
            });
            return n ? (sum / n) : 0;
        };
        var curr = avgFor(currentYear);
        var prev = avgFor(prevYear);
        var diff = curr - prev;
        var pct = prev ? (diff / prev) * 100 : undefined;
        return { diff: diff, pct: pct, prevYear: prevYear };
    }, [selectedYearsCustomer, assignYearFromComment]);
    var SatisfactionScore = function () { return (React.createElement("div", { className: "insurance-card" },
        React.createElement("div", { className: "insurance-label" }, "Customer Satisfaction"),
        React.createElement("div", { className: "e-card-content kpi-card-content" },
            React.createElement("div", { style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 } },
                React.createElement("div", { className: "insurance-card-value" }, "".concat(avgSatisfaction.toFixed(0), "%")),
                React.createElement(DeltaBadge, { delta: satisfactionDelta }))))); };
    var sentiment = React.useMemo(function () {
        var rows = Array.isArray(InsuranceData.customerdata) ? InsuranceData.customerdata : [];
        if (!rows.length)
            return { positive: 0, neutral: 0, negative: 0, total: 0 };
        var years = new Set(selectedYearsCustomer);
        var toInt = function (v) {
            var n = typeof v === 'number' ? v : (typeof v === 'string' && v.trim() ? +v : NaN);
            if (!Number.isFinite(n))
                return undefined;
            var r = Math.round(n);
            return r >= 1 && r <= 5 ? r : undefined;
        };
        var resolveYear = function (row, idx) {
            var _a, _b, _c;
            var y = Number((_a = row === null || row === void 0 ? void 0 : row.Year) !== null && _a !== void 0 ? _a : row === null || row === void 0 ? void 0 : row.year);
            if (Number.isFinite(y))
                return y;
            var ds = (_b = row === null || row === void 0 ? void 0 : row.Date) !== null && _b !== void 0 ? _b : row === null || row === void 0 ? void 0 : row.date;
            if (ds) {
                var d = new Date(ds);
                if (!Number.isNaN(d.getFullYear()))
                    return d.getFullYear();
            }
            return assignYearFromComment(String((_c = row === null || row === void 0 ? void 0 : row.Comment) !== null && _c !== void 0 ? _c : ''), idx);
        };
        var positive = 0, neutral = 0, negative = 0, total = 0;
        rows.forEach(function (r, idx) {
            var _a;
            var yr = resolveYear(r, idx);
            if (!years.has(yr))
                return;
            var rating = toInt((_a = r === null || r === void 0 ? void 0 : r.Rating) !== null && _a !== void 0 ? _a : r === null || r === void 0 ? void 0 : r.rating);
            if (rating == null)
                return;
            if (rating >= 4)
                positive++;
            else if (rating === 3)
                neutral++;
            else
                negative++;
            total++;
        });
        return { positive: positive, neutral: neutral, negative: negative, total: total };
    }, [selectedYearsCustomer, assignYearFromComment]);
    var SentimentOverview = function () {
        var pct = function (n, d) { return d ? ((n / d) * 100) : 0; };
        var getPctClass = function (t) {
            var k = t.toLowerCase();
            if (k === 'positive')
                return 'sentiment-pct sentiment-pct--positive';
            if (k === 'neutral')
                return 'sentiment-pct sentiment-pct--neutral';
            return 'sentiment-pct sentiment-pct--negative';
        };
        var card = function (title, count, total, imgUrl) { return (React.createElement("div", { className: "sentiment-card" },
            React.createElement("div", { className: "sentiment-title" }, title),
            React.createElement("div", { className: "sentiment-overview" },
                React.createElement("img", { src: imgUrl, alt: "".concat(title, " trend"), className: "sentiment-img" }),
                React.createElement("div", { className: "sentiment-content" },
                    React.createElement("div", { className: getPctClass(title) },
                        pct(count, sentiment.total).toFixed(1),
                        "%"),
                    React.createElement("div", { className: "sentiment-rating" },
                        "Rating: ",
                        count.toLocaleString()))))); };
        return (React.createElement("div", { className: "sentiment-panel-center" },
            React.createElement("div", { className: "sentiment-row" },
                card('Positive', sentiment.positive, sentiment.total, 'https://storage.googleapis.com/cdn-bolddesk/agent-angular-app/images/light/positive-line-1.svg'),
                card('Neutral', sentiment.neutral, sentiment.total, 'https://storage.googleapis.com/cdn-bolddesk/agent-angular-app/images/light/neutral-line-1.svg'),
                card('Negative', sentiment.negative, sentiment.total, 'https://storage.googleapis.com/cdn-bolddesk/agent-angular-app/images/light/negative-line-1.svg'))));
    };
    var gaugeRows = React.useMemo(function () { return (Array.isArray(InsuranceData.gaugedata) ? InsuranceData.gaugedata : []); }, []);
    var currentCustomerYear = React.useMemo(function () { return (selectedYearsCustomer.length ? Math.max.apply(Math, selectedYearsCustomer) : undefined); }, [selectedYearsCustomer]);
    var getGaugeValue = React.useCallback(function (keys) {
        if (!gaugeRows.length || !currentCustomerYear)
            return undefined;
        var row = gaugeRows.find(function (r) { var _a; return Number((_a = r === null || r === void 0 ? void 0 : r.Year) !== null && _a !== void 0 ? _a : r === null || r === void 0 ? void 0 : r.year) === currentCustomerYear; });
        if (!row) {
            var idx = YEAR_RANGE_CUSTOMER.indexOf(currentCustomerYear);
            if (idx >= 0 && idx < gaugeRows.length)
                row = gaugeRows[idx];
            else
                row = gaugeRows[gaugeRows.length - 1]; // last known as fallback
        }
        if (!row)
            return undefined;
        for (var _i = 0, keys_3 = keys; _i < keys_3.length; _i++) {
            var k = keys_3[_i];
            var v = row[k];
            var n = typeof v === 'number' && Number.isFinite(v)
                ? v
                : (typeof v === 'string' && v.trim() && Number.isFinite(+v) ? +v : undefined);
            if (typeof n === 'number')
                return n;
        }
        return undefined;
    }, [gaugeRows, currentCustomerYear]);
    // Net Promoter Score gauge
    var NpsGauge = function () {
        var raw = getGaugeValue(['NPSGauge', 'NPS', 'NetPromoterScore', 'NPS_Score', 'NPSValue', 'NPSScore']);
        var value = typeof raw === 'number' ? raw : 0;
        if (value >= 0 && value <= 1)
            value = value * 100;
        value = Math.max(0, Math.min(100, value));
        var vText = value.toFixed(1);
        var tooltipTpl = "<div style=\"font-size:18px;background:white;width:170px;color:#595959;border:1px solid #e8e8e8\">Current Score: ".concat(vText, "</div>");
        var annotationTpl = "<div style=\"font-size:16px;margin-top:5px;font-family:inherit;\">".concat(vText, "</div>");
        return (React.createElement("div", { className: "gauge-center", style: { height: '100%', width: '100%' } },
            React.createElement(ej2_react_circulargauge_1.CircularGaugeComponent, { id: "nps-gauge", ref: NpsRef, background: "transparent", height: "100%", width: "100%", centerX: "50%", centerY: "70%", allowMargin: false, animationDuration: 2000, title: 'Net Promoter Score (NPS)', titleStyle: { size: '16px', fontWeight: '600' }, tooltip: { enable: true, template: tooltipTpl }, load: onGaugeLoad, legendSettings: { visible: false } },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_circulargauge_1.Annotations, ej2_react_circulargauge_1.GaugeTooltip, ej2_react_circulargauge_1.Legend] }),
                React.createElement(ej2_react_circulargauge_1.AxesDirective, null,
                    React.createElement(ej2_react_circulargauge_1.AxisDirective, { startAngle: 270, endAngle: 90, radius: "100%", minimum: 0, maximum: 100, majorTicks: { width: 1.5, height: 12, interval: 20, offset: 35 }, lineStyle: { width: 0 }, minorTicks: { width: 0 }, labelStyle: { font: { size: '14px', fontFamily: 'inherit' }, position: 'Outside', offset: -40 } },
                        React.createElement(ej2_react_circulargauge_1.AnnotationsDirective, null,
                            React.createElement(ej2_react_circulargauge_1.AnnotationDirective, { content: annotationTpl, angle: 0, radius: "-10%", zIndex: "1" })),
                        React.createElement(ej2_react_circulargauge_1.PointersDirective, null,
                            React.createElement(ej2_react_circulargauge_1.PointerDirective, { value: value, radius: "70%", pointerWidth: 5, needleEndWidth: 2, cap: { radius: 8, border: { width: 2 } }, animation: { enable: true, duration: 1000 } })),
                        React.createElement(ej2_react_circulargauge_1.RangesDirective, null,
                            React.createElement(ej2_react_circulargauge_1.RangeDirective, { start: 0, end: value, radius: "80%", color: "#FF7000", startWidth: 40, endWidth: 40 })))))));
    };
    // Customer Retention Rate gauge 
    var CrrGauge = function () {
        var raw = getGaugeValue(['CRRGauge', 'CustomerRetentionRate', 'CRR', 'CRRValue']);
        var v = typeof raw === 'number' ? raw : 0;
        if (v >= 0 && v <= 1)
            v = v * 100;
        v = Math.max(0, Math.min(100, v));
        var vText = v.toFixed(2);
        var tooltipTpl = "<div style=\"font-size:18px;background:white;width:180px;color:#595959;border:1px solid #e8e8e8\">Current Rate: ".concat(vText, "%</div>");
        var annotationTpl = "<div style=\"font-size:16px;margin-top:5px;font-family:inherit;\">".concat(v.toFixed(1), "%</div>");
        return (React.createElement("div", { className: "gauge-center", style: { height: '100%', width: '100%' } },
            React.createElement(ej2_react_circulargauge_1.CircularGaugeComponent, { id: "crr-gauge", ref: CrrRef, background: "transparent", height: "100%", width: "100%", centerX: "50%", centerY: "70%", allowMargin: false, animationDuration: 2000, title: 'Customer Retention Rate', titleStyle: { size: '16px', fontWeight: '600' }, tooltip: { enable: true, template: tooltipTpl }, load: onGaugeLoad, legendSettings: { visible: false } },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_circulargauge_1.Annotations, ej2_react_circulargauge_1.GaugeTooltip, ej2_react_circulargauge_1.Legend] }),
                React.createElement(ej2_react_circulargauge_1.AxesDirective, null,
                    React.createElement(ej2_react_circulargauge_1.AxisDirective, { startAngle: 270, endAngle: 90, radius: "100%", minimum: 0, maximum: 100, majorTicks: { width: 1.5, height: 12, interval: 20, offset: 35 }, lineStyle: { width: 0 }, minorTicks: { width: 0 }, labelStyle: { font: { size: '14px', fontFamily: 'inherit' }, position: 'Outside', offset: -40 } },
                        React.createElement(ej2_react_circulargauge_1.AnnotationsDirective, null,
                            React.createElement(ej2_react_circulargauge_1.AnnotationDirective, { content: annotationTpl, angle: 0, radius: "-10%", zIndex: "1" })),
                        React.createElement(ej2_react_circulargauge_1.PointersDirective, null,
                            React.createElement(ej2_react_circulargauge_1.PointerDirective, { value: v, radius: "70%", pointerWidth: 5, needleEndWidth: 2, cap: { radius: 8, border: { width: 2 } }, animation: { enable: true, duration: 1000 } })),
                        React.createElement(ej2_react_circulargauge_1.RangesDirective, null,
                            React.createElement(ej2_react_circulargauge_1.RangeDirective, { start: 0, end: v, radius: "80%", color: "#CE9461", startWidth: 40, endWidth: 40 })))))));
    };
    // --- Channel Feedback by Channel (Email, Phone, Social Media, Surveys, Agent, SMS) ---
    var channelFeedbackData = React.useMemo(function () {
        var rows = Array.isArray(InsuranceData.customerdata) ? InsuranceData.customerdata : [];
        if (!rows.length)
            return [];
        var years = new Set(selectedYearsCustomer);
        var resolveYear = function (row, idx) {
            var _a, _b, _c;
            var y = Number((_a = row === null || row === void 0 ? void 0 : row.Year) !== null && _a !== void 0 ? _a : row === null || row === void 0 ? void 0 : row.year);
            if (Number.isFinite(y))
                return y;
            var ds = (_b = row === null || row === void 0 ? void 0 : row.Date) !== null && _b !== void 0 ? _b : row === null || row === void 0 ? void 0 : row.date;
            if (ds) {
                var d = new Date(ds);
                if (!Number.isNaN(d.getTime()))
                    return d.getFullYear();
            }
            return assignYearFromComment(String((_c = row === null || row === void 0 ? void 0 : row.Comment) !== null && _c !== void 0 ? _c : ''), idx);
        };
        var CHANNELS = ['Email', 'Phone', 'Social Media', 'Surveys', 'Agent', 'SMS'];
        var counts = new Map(CHANNELS.map(function (c) { return [c, 0]; }));
        var normChannel = function (v) {
            var s = String(v !== null && v !== void 0 ? v : '').trim().toLowerCase();
            if (!s)
                return undefined;
            if (s.includes('email') || s.includes('e-mail') || s === 'mail')
                return 'Email';
            if (s.includes('phone') || s.includes('call') || s.includes('mobile'))
                return 'Phone';
            if (s.includes('social') || s.includes('twitter') || s.includes('facebook') || s.includes('instagram'))
                return 'Social Media';
            if (s.includes('survey') || s.includes('nps'))
                return 'Surveys';
            if (s.includes('agent'))
                return 'Agent';
            if (s.includes('sms') || s.includes('text') || s.includes('message'))
                return 'SMS';
            return undefined;
        };
        rows.forEach(function (r, idx) {
            var _a, _b, _c;
            var yr = resolveYear(r, idx);
            if (!years.has(yr))
                return;
            var ch = normChannel((_c = (_b = (_a = r === null || r === void 0 ? void 0 : r.FeedbackType) !== null && _a !== void 0 ? _a : r === null || r === void 0 ? void 0 : r.feedbackType) !== null && _b !== void 0 ? _b : r === null || r === void 0 ? void 0 : r.Channel) !== null && _c !== void 0 ? _c : r === null || r === void 0 ? void 0 : r.channel);
            if (ch)
                counts.set(ch, (counts.get(ch) || 0) + 1);
        });
        return ['Email', 'Phone', 'Social Media', 'Surveys', 'Agent', 'SMS']
            .map(function (x) { return ({ x: x, y: counts.get(x) || 0 }); });
    }, [selectedYearsCustomer, assignYearFromComment]);
    var ChannelFeedbackChart = function () {
        return (React.createElement("div", { style: { width: '100%', height: '100%', padding: 8 } }, channelFeedbackData.length === 0 ? (React.createElement("div", { style: { padding: 12 } }, "No channel feedback for the selected year(s).")) : (React.createElement(ej2_react_charts_1.ChartComponent, { id: "channel-feedback-chart", ref: ChannelFeedbackRef, primaryXAxis: {
                valueType: 'Category',
                majorGridLines: { width: 0 },
                labelIntersectAction: 'Trim'
            }, primaryYAxis: {
                lineStyle: { width: 0 },
                majorTickLines: { width: 0 }
            }, legendSettings: { visible: false }, tooltip: { enable: true, format: '${point.x}: <b>${point.y}</b>' }, chartArea: { border: { width: 0 } }, width: "100%", height: "100%", load: onChartLoad },
            React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.ColumnSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Legend, ej2_react_charts_1.Tooltip, ej2_react_charts_1.DataLabel] }),
            React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                React.createElement(ej2_react_charts_1.SeriesDirective, { type: "Column", dataSource: channelFeedbackData, xName: "x", yName: "y", columnSpacing: 0.2, marker: { visible: true, dataLabel: { visible: true } }, cornerRadius: { topLeft: 4, topRight: 4 }, fill: "#F8CA7E", animation: { enable: false } }))))));
    };
    // --- Customer Rating Analytics (Pie: ratings 1..5) ---
    var ratingPieData = React.useMemo(function () {
        var rows = Array.isArray(InsuranceData.customerdata) ? InsuranceData.customerdata : [];
        if (!rows.length)
            return [];
        var years = new Set(selectedYearsCustomer);
        var resolveYear = function (row, idx) {
            var _a, _b, _c;
            var y = Number((_a = row === null || row === void 0 ? void 0 : row.Year) !== null && _a !== void 0 ? _a : row === null || row === void 0 ? void 0 : row.year);
            if (Number.isFinite(y))
                return y;
            var ds = (_b = row === null || row === void 0 ? void 0 : row.Date) !== null && _b !== void 0 ? _b : row === null || row === void 0 ? void 0 : row.date;
            if (ds) {
                var d = new Date(ds);
                if (!Number.isNaN(d.getTime()))
                    return d.getFullYear();
            }
            return assignYearFromComment(String((_c = row === null || row === void 0 ? void 0 : row.Comment) !== null && _c !== void 0 ? _c : ''), idx);
        };
        var counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
        rows.forEach(function (r, idx) {
            var _a;
            var yr = resolveYear(r, idx);
            if (!years.has(yr))
                return;
            var raw = (_a = r === null || r === void 0 ? void 0 : r.Rating) !== null && _a !== void 0 ? _a : r === null || r === void 0 ? void 0 : r.rating;
            var n = typeof raw === 'number' ? raw : (typeof raw === 'string' ? parseInt(raw, 10) : NaN);
            if (Number.isFinite(n)) {
                var clamped = Math.max(1, Math.min(5, Math.round(n)));
                counts[clamped] += 1;
            }
        });
        // Legend uses point.x, so add the “Star(s)” suffix here
        return [1, 2, 3, 4, 5].map(function (k) { return ({
            x: "".concat(k, " star"),
            y: counts[k],
            text: String(counts[k])
        }); });
    }, [selectedYearsCustomer, assignYearFromComment]);
    var CustomerRatingPie = function () { return (React.createElement("div", { style: { height: '100%', width: '100%' } }, ratingPieData.every(function (d) { return d.y === 0; }) ? (React.createElement("div", { style: { padding: 12 } }, "No rating data for the selected year(s).")) : (React.createElement(ej2_react_charts_1.AccumulationChartComponent, { id: 'customer-rating-pie', ref: CustomerRatingRef, legendSettings: { visible: true, position: 'Bottom' }, enableAnimation: true, load: onAccumulationLoad, tooltip: { enable: true, format: '<b>Rating ${point.x}</b><br>Count: <b>${point.y}</b>', header: '' } },
        React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.AccumulationLegend, ej2_react_charts_1.PieSeries, ej2_react_charts_1.AccumulationTooltip, ej2_react_charts_1.AccumulationDataLabel] }),
        React.createElement(ej2_react_charts_1.AccumulationSeriesCollectionDirective, null,
            React.createElement(ej2_react_charts_1.AccumulationSeriesDirective, { dataSource: ratingPieData, xName: 'x', yName: 'y', innerRadius: '60%', radius: '70%', dataLabel: { visible: true, position: 'Outside', name: 'text' }, palettes: donutPaletteColors, animation: { enable: false }, borderRadius: 10, border: { width: 4, color: '#ffffff' } })))))); };
    // --- Feedback Details Grid ---
    var classifySentiment = React.useCallback(function (text) {
        var t = String(text || '').toLowerCase();
        if (!t)
            return 'Neutral';
        var posWords = ['good', 'satisfied', 'great', 'excellent', 'helpful', 'fast', 'easy', 'smooth', 'well', 'happy', 'transparent', 'clear', 'accurate', 'timely'];
        var negWords = ['poor', 'frustrating', 'disappointed', 'bad', 'slow', 'unhelpful', 'confusing', 'misleading', 'issue', 'issues', 'rejected', 'hard', 'delay', 'delayed', 'problem', 'problems', 'unresolved', 'unfair'];
        var pos = posWords.some(function (w) { return t.includes(w); });
        var neg = negWords.some(function (w) { return t.includes(w); });
        if (pos && !neg)
            return 'Positive';
        if (neg && !pos)
            return 'Negative';
        return 'Neutral';
    }, []);
    var normalizeSentiment = React.useCallback(function (v) {
        var s = String(v !== null && v !== void 0 ? v : '').trim().toLowerCase();
        if (!s)
            return undefined;
        if (['positive', 'pos', 'good', 'happy', 'excellent'].includes(s))
            return 'Positive';
        if (['negative', 'neg', 'bad', 'poor', 'unhappy'].includes(s))
            return 'Negative';
        if (['neutral', 'neu', 'mixed', 'average'].includes(s))
            return 'Neutral';
        return undefined;
    }, []);
    var feedbackGridData = React.useMemo(function () {
        var rows = Array.isArray(InsuranceData.customerdata) ? InsuranceData.customerdata : [];
        var years = new Set(selectedYearsCustomer);
        var data = [];
        var resolveYear = function (row, idx) {
            var _a, _b, _c;
            var y = Number((_a = row === null || row === void 0 ? void 0 : row.Year) !== null && _a !== void 0 ? _a : row === null || row === void 0 ? void 0 : row.year);
            if (Number.isFinite(y))
                return y;
            var ds = (_b = row === null || row === void 0 ? void 0 : row.Date) !== null && _b !== void 0 ? _b : row === null || row === void 0 ? void 0 : row.date;
            if (ds) {
                var d = new Date(ds);
                if (!Number.isNaN(d.getFullYear()))
                    return d.getFullYear();
            }
            return assignYearFromComment(String((_c = row === null || row === void 0 ? void 0 : row.Comment) !== null && _c !== void 0 ? _c : ''), idx);
        };
        rows.forEach(function (r, idx) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
            var yr = resolveYear(r, idx);
            if (!years.has(yr))
                return;
            var comment = String((_a = r === null || r === void 0 ? void 0 : r.Comment) !== null && _a !== void 0 ? _a : '');
            var dateStr = (_c = (_b = r === null || r === void 0 ? void 0 : r.Date) !== null && _b !== void 0 ? _b : r === null || r === void 0 ? void 0 : r.date) !== null && _c !== void 0 ? _c : '';
            var ft = String((_g = (_f = (_e = (_d = r === null || r === void 0 ? void 0 : r.FeedbackType) !== null && _d !== void 0 ? _d : r === null || r === void 0 ? void 0 : r.feedbackType) !== null && _e !== void 0 ? _e : r === null || r === void 0 ? void 0 : r.Channel) !== null && _f !== void 0 ? _f : r === null || r === void 0 ? void 0 : r.channel) !== null && _g !== void 0 ? _g : '');
            var ratingRaw = (_h = r === null || r === void 0 ? void 0 : r.Rating) !== null && _h !== void 0 ? _h : r === null || r === void 0 ? void 0 : r.rating;
            var rating = typeof ratingRaw === 'number'
                ? ratingRaw
                : (typeof ratingRaw === 'string' && ratingRaw.trim() && Number.isFinite(+ratingRaw) ? +ratingRaw : '');
            var sRaw = (_m = (_l = (_k = (_j = r['Sentiment Analysis']) !== null && _j !== void 0 ? _j : r === null || r === void 0 ? void 0 : r.SentimentAnalysis) !== null && _k !== void 0 ? _k : r === null || r === void 0 ? void 0 : r.sentimentAnalysis) !== null && _l !== void 0 ? _l : r === null || r === void 0 ? void 0 : r.Sentiment) !== null && _m !== void 0 ? _m : r === null || r === void 0 ? void 0 : r.sentiment;
            var sentiment = (_o = normalizeSentiment(sRaw)) !== null && _o !== void 0 ? _o : classifySentiment(comment);
            data.push({
                id: Number((_q = (_p = r === null || r === void 0 ? void 0 : r.Id) !== null && _p !== void 0 ? _p : r === null || r === void 0 ? void 0 : r.id) !== null && _q !== void 0 ? _q : idx + 1),
                year: yr,
                Date: String(dateStr || ''),
                FeedbackType: ft,
                Rating: rating,
                Sentiment: sentiment,
                Comment: comment
            });
        });
        return data;
    }, [selectedYearsCustomer, assignYearFromComment, normalizeSentiment, classifySentiment]);
    var onFeedbackCellStyle = function (args) {
        var _a, _b, _c, _d, _e, _f;
        if (((_a = args === null || args === void 0 ? void 0 : args.column) === null || _a === void 0 ? void 0 : _a.field) === 'Sentiment') {
            var s = String((_c = (_b = args === null || args === void 0 ? void 0 : args.data) === null || _b === void 0 ? void 0 : _b.Sentiment) !== null && _c !== void 0 ? _c : '').toLowerCase();
            var color = '';
            if (s === 'positive')
                color = '#2e7d32';
            else if (s === 'negative')
                color = '#c62828';
            else
                color = 'rgb(189, 126, 0)'; // neutral
            Object.assign(args.cell.style, { color: color, fontWeight: '700', textAlign: 'center' });
        }
        // Add tooltip for Comment column (content = comment text)
        if (((_d = args === null || args === void 0 ? void 0 : args.column) === null || _d === void 0 ? void 0 : _d.field) === 'Comment') {
            var txt = String((_f = (_e = args === null || args === void 0 ? void 0 : args.data) === null || _e === void 0 ? void 0 : _e.Comment) !== null && _f !== void 0 ? _f : '').trim();
            if (txt) {
                args.cell.setAttribute('title', txt);
            }
            else {
                args.cell.removeAttribute('title');
            }
        }
    };
    // Rating cell template
    var ratingTemplate = function (props) {
        var val = typeof (props === null || props === void 0 ? void 0 : props.Rating) === 'number' ? props.Rating : (Number(props === null || props === void 0 ? void 0 : props.Rating) || 0);
        return (React.createElement("div", { style: { display: 'flex', justifyContent: 'center' } },
            React.createElement(ej2_react_inputs_1.RatingComponent, { value: val, cssClass: "insurance-custom-rating", readOnly: true })));
    };
    function toolbarClick(args) {
        var _a, _b;
        switch (args.item.id) {
            case 'feedbackDetailsGrid_pdfexport':
                (_a = gridInstance.current) === null || _a === void 0 ? void 0 : _a.pdfExport();
                break;
            case 'feedbackDetailsGrid_excelexport':
                (_b = gridInstance.current) === null || _b === void 0 ? void 0 : _b.excelExport();
                break;
        }
    }
    var toolBarOptions = ['Search', 'ExcelExport', 'PdfExport'];
    var FeedbackDetailsGrid = function () { return (React.createElement("div", { style: { width: '100%', height: '100%', padding: 8 } },
        React.createElement(ej2_react_grids_1.GridComponent, { ref: gridInstance, id: 'feedbackDetailsGrid', dataSource: feedbackGridData, allowPaging: false, enableVirtualMaskRow: true, allowSorting: true, allowResizing: true, allowFiltering: true, allowMultiSorting: true, width: '100%', height: '100%', allowGrouping: true, allowExcelExport: true, allowPdfExport: true, toolbar: toolBarOptions, filterSettings: { type: 'Menu' }, queryCellInfo: onFeedbackCellStyle, toolbarClick: toolbarClick },
            React.createElement(ej2_react_grids_1.ColumnsDirective, null,
                React.createElement(ej2_react_grids_1.ColumnDirective, { field: "year", headerText: "Year", headerTemplate: headerWithTooltip("Year"), visible: false }),
                React.createElement(ej2_react_grids_1.ColumnDirective, { field: "id", headerText: "ID", headerTemplate: headerWithTooltip("ID"), width: "90", textAlign: "Right", isPrimaryKey: true }),
                React.createElement(ej2_react_grids_1.ColumnDirective, { field: "FeedbackType", headerText: "Feedback Type", headerTemplate: headerWithTooltip("Feedback Type"), width: "120", textAlign: "Left" }),
                React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Rating", headerText: "Rating", headerTemplate: headerWithTooltip("Rating"), width: "130", textAlign: "Center", template: ratingTemplate }),
                React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Sentiment", headerText: "Sentiment Analysis", headerTemplate: headerWithTooltip("Sentiment Analysis"), width: "150", textAlign: "Center" }),
                React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Comment", headerText: "Comment", headerTemplate: headerWithTooltip("Comment"), width: "300", textAlign: "Left" })),
            React.createElement(ej2_react_grids_1.Inject, { services: [ej2_react_grids_1.Sort, ej2_react_grids_1.Page, ej2_react_grids_1.Filter, ej2_react_grids_1.Resize, ej2_react_grids_1.Group, ej2_react_grids_1.RowDD, ej2_react_grids_1.Toolbar, ej2_react_grids_1.ExcelExport, ej2_react_grids_1.PdfExport] })))); };
    return (React.createElement("div", { className: "Container" },
        React.createElement("div", { className: "e-card insurance-toolbar" },
            React.createElement("div", { className: "insurance-toolbar-left" },
                React.createElement("h4", { className: "insurance-title" }, "Customer Feedback")),
            React.createElement("div", { className: "insurance-toolbar-right", style: { display: 'flex', gap: 10 } },
                React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { id: "yearToolbarCustomer", dataSource: yearOptionsCustomer, fields: { text: 'label', value: 'id' }, placeholder: "Select year", value: currentYearCustomer != null ? String(currentYearCustomer) : undefined, change: onYearChangeToolbar, width: 160 }))),
        React.createElement(ej2_react_layouts_1.DashboardLayoutComponent, { id: "dashboard_performance", ref: CustomerFeedbackRef, style: { width: '100%', zIndex: 1 }, columns: 8, cellAspectRatio: 90 / 100, cellSpacing: [10, 10], allowResizing: false, allowDragging: false, mediaQuery: "(max-width:950px)" },
            React.createElement(ej2_react_layouts_1.PanelsDirective, null,
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 0, col: 0, content: TotalResponsesCard }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 6, sizeY: 2, row: 0, col: 2, header: "<div>Sentiment Analysis</div>", content: SentimentOverview }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 1, col: 0, content: SatisfactionScore }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 4, sizeY: 2, row: 2, col: 0, content: NpsGauge }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 4, sizeY: 2, row: 2, col: 4, content: CrrGauge }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 5, sizeY: 3, row: 4, col: 0, header: "<div>Customer Feedback by Channel</div>", content: ChannelFeedbackChart }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 3, sizeY: 3, row: 4, col: 5, header: "<div>Customer Rating Analytics</div>", content: CustomerRatingPie }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 8, sizeY: 3, row: 7, col: 0, header: "<div>Feedback Details</div>", content: FeedbackDetailsGrid })))));
};
var InsuranceDashboard = /** @class */ (function (_super) {
    __extends(InsuranceDashboard, _super);
    function InsuranceDashboard(props) {
        var _this = _super.call(this, props) || this;
        _this.allowSidebarOpen = false;
        _this.TOOLBAR_HEIGHT = 50;
        _this.DOCK_SIZE = 60;
        _this.OPEN_WIDTH = 240;
        _this.titleTemplate = '<div class="dashboard-title">Insurance Dashboard</div>';
        _this.onToolbarClicked = function (args) {
            var _a;
            if (args.item.tooltipText === 'Menu') {
                // Only the Menu icon may open the sidebar
                _this.allowSidebarOpen = true;
                (_a = _this.sidebarRef.current) === null || _a === void 0 ? void 0 : _a.toggle();
            }
        };
        _this.onSidebarCreated = function () {
            if (_this.sidebarRef.current) {
                _this.sidebarRef.current.hide();
            }
        };
        _this.notifyResize = function () { return window.dispatchEvent(new Event('sidebar-toggled')); };
        _this.onSidebarOpen = function () {
            var _a;
            // Block any auto-open that wasn’t triggered by the Menu click
            if (!_this.allowSidebarOpen) {
                (_a = _this.sidebarRef.current) === null || _a === void 0 ? void 0 : _a.hide();
                return;
            }
            // Reset the flag immediately after a valid open
            _this.allowSidebarOpen = false;
            setTimeout(_this.notifyResize, 400);
            _this.setState({ isDocked: false });
            setTimeout(function () {
                var _a, _b, _c, _d;
                var el = document.getElementById('dashboard_default');
                (_d = (_c = (_b = (_a = el) === null || _a === void 0 ? void 0 : _a.ej2_instances) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.refresh) === null || _d === void 0 ? void 0 : _d.call(_c);
            }, 500);
        };
        _this.onSidebarClose = function () {
            // Ensure future opens require Menu click again
            _this.allowSidebarOpen = false;
            setTimeout(_this.notifyResize, 400);
            _this.setState({ isDocked: true });
            setTimeout(function () {
                var _a, _b, _c, _d;
                var el = document.getElementById('dashboard_default');
                (_d = (_c = (_b = (_a = el) === null || _a === void 0 ? void 0 : _a.ej2_instances) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.refresh) === null || _d === void 0 ? void 0 : _d.call(_c);
            }, 700);
        };
        _this.renderDashboard = function () {
            var _a, _b;
            var selectedId = (_b = (_a = _this === null || _this === void 0 ? void 0 : _this.state) === null || _a === void 0 ? void 0 : _a.selectedId) !== null && _b !== void 0 ? _b : 'overview';
            var years = _this.state.sharedYears;
            var onChangeYears = function (ys) { return _this.setState({ sharedYears: ys }); };
            switch (selectedId) {
                case 'overview':
                    return React.createElement(Dashboard1, { selectedYears: years, onChangeYears: onChangeYears });
                case 'cliam-analysis':
                    return (React.createElement(Dashboard2, { selectedYears: years, onChangeYears: onChangeYears, selectedPolicyTypes: _this.state.sharedPolicyTypes, onChangePolicyTypes: function (vals) { return _this.setState({ sharedPolicyTypes: vals }); } }));
                case 'customer':
                    return React.createElement(Dashboard3, { selectedYears: years, onChangeYears: onChangeYears });
                default:
                    return React.createElement(Dashboard1, { selectedYears: years, onChangeYears: onChangeYears });
            }
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
        _this.sidebarRef = React.createRef();
        var overviewdata = InsuranceData.overview;
        var policydata = InsuranceData.policydata;
        var fromOverview = Array.from(new Set((overviewdata !== null && overviewdata !== void 0 ? overviewdata : []).map(function (r) { var _a; return Number((_a = r.year) !== null && _a !== void 0 ? _a : r.Year); }).filter(Number.isFinite))).sort();
        var allYears = (fromOverview.length
            ? fromOverview
            : Array.from(new Set((policydata !== null && policydata !== void 0 ? policydata : []).map(function (r) { var _a; return Number((_a = r.year) !== null && _a !== void 0 ? _a : r.Year); }).filter(Number.isFinite))).sort());
        var availAllowed = allYears.filter(function (y) { return ALLOWED_YEARS.includes(y); });
        var latestYear = availAllowed.length ? Math.max.apply(Math, availAllowed) : ALLOWED_YEARS[0];
        _this.state = {
            selectedId: 'overview',
            sharedYears: latestYear != null ? [latestYear] : [],
            isDocked: false,
            sharedPolicyTypes: Array.from(POLICY_TYPES)
        };
        return _this;
    }
    InsuranceDashboard.prototype.withTooltip = function (title, node) {
        return (React.createElement(ej2_react_popups_1.TooltipComponent, { content: title, position: this.state.isDocked ? 'RightCenter' : 'BottomCenter', openDelay: 250, closeDelay: 0, showTipPointer: true }, node));
    };
    InsuranceDashboard.prototype.render = function () {
        var _this = this;
        var isActive = function (id) { return _this.state.selectedId === id ? 'active' : ''; };
        return (React.createElement("div", null,
            React.createElement("div", { className: 'control-section' },
                React.createElement("div", { className: "insurance-root" },
                    React.createElement("div", null,
                        React.createElement(ej2_react_navigations_2.ToolbarComponent, { cssClass: "insurance-dockToolbar", id: "insurance-dockToolbar", height: "".concat(this.TOOLBAR_HEIGHT, "px"), clicked: this.onToolbarClicked },
                            React.createElement(ej2_react_navigations_2.ItemsDirective, null,
                                React.createElement(ej2_react_navigations_2.ItemDirective, { prefixIcon: "e-menu", tooltipText: "Menu" }),
                                React.createElement(ej2_react_navigations_2.ItemDirective, { template: this.titleTemplate })))),
                    React.createElement("div", { className: "insurance-workarea" },
                        React.createElement(ej2_react_navigations_1.SidebarComponent, { id: "dockInsurancesidebar", ref: this.sidebarRef, enableDock: true, width: "".concat(this.OPEN_WIDTH, "px"), dockSize: "".concat(this.DOCK_SIZE, "px"), closeOnDocumentClick: false, enableGestures: false, className: "insurance-sidebar", type: "Push", target: ".insurance-content", open: this.onSidebarOpen, close: this.onSidebarClose, created: this.onSidebarCreated },
                            this.withTooltip('Overview', React.createElement("div", { className: "insurance-nav-item ".concat(isActive('overview')), onClick: function () { return _this.setState({ selectedId: 'overview' }); } },
                                React.createElement("span", { className: "e-icons e-home", "aria-hidden": "true" }),
                                React.createElement("span", { className: "insurance-nav-text" }, "Overview"))),
                            this.withTooltip('Claim Analysis', React.createElement("div", { className: "insurance-nav-item ".concat(isActive('cliam-analysis')), onClick: function () { return _this.setState({ selectedId: 'cliam-analysis' }); } },
                                React.createElement("span", { className: this.icon('claim-analysis'), "aria-hidden": "true" }),
                                React.createElement("span", { className: "insurance-nav-text" }, "Claim Analysis"))),
                            this.withTooltip('Customer Feedback', React.createElement("div", { className: "insurance-nav-item ".concat(isActive('customer')), onClick: function () { return _this.setState({ selectedId: 'customer' }); } },
                                React.createElement("span", { className: this.icon('feedback'), "aria-hidden": "true" }),
                                React.createElement("span", { className: "insurance-nav-text" }, "Customer Feedback")))),
                        React.createElement("div", { className: "insurance-content" },
                            React.createElement("div", { className: "insurance-page", style: { padding: '16px', background: '#ffffff' } }, this.renderDashboard()))))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "The Insurance Insights Dashboard provides a unified, interactive view of policy performance, claim analysis, and customer sentiment. It delivers real\u2011time KPIs (policies sold, assured amount, premium amount, total claims, total responses), drillable visualizations (Assured Amount by Policy), and deeper analysis through charts, a Kanban workflow, and a regional map component. The dashboard enables fast, data\u2011driven decisions by allowing users to filter insights by year and policy type, offering a clear and comprehensive understanding of portfolio health and customer behavior."))));
    };
    return InsuranceDashboard;
}(sample_base_1.SampleBase));
exports.InsuranceDashboard = InsuranceDashboard;
