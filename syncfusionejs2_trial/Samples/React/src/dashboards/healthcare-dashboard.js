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
exports.HealthcareDashboard = exports.unCountries = exports.items = void 0;
var React = require("react");
var ej2_react_navigations_1 = require("@syncfusion/ej2-react-navigations");
var react_1 = require("react");
var ej2_react_layouts_1 = require("@syncfusion/ej2-react-layouts");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var ej2_react_navigations_2 = require("@syncfusion/ej2-react-navigations");
var ej2_react_charts_1 = require("@syncfusion/ej2-react-charts");
var ej2_react_grids_1 = require("@syncfusion/ej2-react-grids");
var ej2_react_inputs_1 = require("@syncfusion/ej2-react-inputs");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var ej2_react_circulargauge_1 = require("@syncfusion/ej2-react-circulargauge");
var ej2_react_lineargauge_1 = require("@syncfusion/ej2-react-lineargauge");
var ej2_react_maps_1 = require("@syncfusion/ej2-react-maps");
var sample_base_1 = require("../common/sample-base");
require("./healthcare-dashboard.css");
var HealthCareData = require("./healthcare-dashboard.json");
var ej2_react_popups_1 = require("@syncfusion/ej2-react-popups");
var HealthCare = HealthCareData;
exports.items = [
    { id: 'Overview', text: 'Overview Analysis', iconCss: 'e-icons e-home' },
    { id: 'Product-Performance', text: 'Product Performance', iconCss: 'e-icons e-chart' },
    { id: 'Regional-Insights', text: 'Regional and Channel', iconCss: 'e-icons e-location' },
    { id: 'Customer', text: 'Customer Analysis', iconCss: 'e-icons e-people' },
];
var formatCurrency = function (n) {
    return new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 2, notation: "compact" }).format(n !== null && n !== void 0 ? n : 0);
};
var onChartLoad = function (args) {
    var selectedTheme = location.hash.split('/')[1] || 'Material';
    var themeForChart = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1))
        .replace(/contrast/i, 'Contrast')
        .replace(/-dark/i, 'Dark');
    args.chart.theme = themeForChart;
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
var headerWithTooltip = function (label) {
    return function () { return (React.createElement("div", { title: label, style: { display: 'inline-block', cursor: 'default' } }, label)); };
};
var onCurrencyVerticalAxis = function (args) {
    var _a;
    if (((_a = args === null || args === void 0 ? void 0 : args.axis) === null || _a === void 0 ? void 0 : _a.orientation) === 'Vertical') {
        args.text = formatCurrency(Number(args.value || 0));
    }
};
var onCurrencyHorizontalAxis = function (args) {
    var _a;
    if (((_a = args === null || args === void 0 ? void 0 : args.axis) === null || _a === void 0 ? void 0 : _a.orientation) === 'Horizontal') {
        args.text = formatCurrency(Number(args.value || 0));
    }
};
var onLabelText = function (args) {
    var _a, _b;
    var y = (_b = (_a = args.point) === null || _a === void 0 ? void 0 : _a.y) !== null && _b !== void 0 ? _b : 0;
    args.text = formatCurrency(y);
};
var monthShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var numberFormatter = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });
var sparklinePalette = ["#05B3DA", "#E77A16", "#9204EA", "#6200EE", "#B1212D", "#82C100"];
var Dashboard1 = function (_a) {
    var selectedYear = _a.selectedYear, selectedMonth = _a.selectedMonth, onYearChange = _a.onYearChange, onMonthChange = _a.onMonthChange;
    var OverviewRef = React.useRef(null);
    var monthRef = (0, react_1.useRef)(null);
    var salesTrendChartRef = (0, react_1.useRef)(null);
    var breakdownChartRef = (0, react_1.useRef)(null);
    var departmentChartRef = (0, react_1.useRef)(null);
    var categoryChartRef = (0, react_1.useRef)(null);
    var topProductChartRef = (0, react_1.useRef)(null);
    var totalRevenueRef = (0, react_1.useRef)(null);
    var years = [2023, 2024, 2025];
    var months = [
        { text: 'All (Yearly)', value: 0 },
        { text: 'January', value: 1 },
        { text: 'February', value: 2 },
        { text: 'March', value: 3 },
        { text: 'April', value: 4 },
        { text: 'May', value: 5 },
        { text: 'June', value: 6 },
        { text: 'July', value: 7 },
        { text: 'August', value: 8 },
        { text: 'September', value: 9 },
        { text: 'October', value: 10 },
        { text: 'November', value: 11 },
        { text: 'December', value: 12 }
    ];
    React.useEffect(function () {
        var timer;
        var refreshAll = function () {
            clearTimeout(timer);
            timer = setTimeout(function () {
                var _a, _b, _c, _d, _e, _f, _g;
                (_a = OverviewRef.current) === null || _a === void 0 ? void 0 : _a.refresh();
                (_b = salesTrendChartRef.current) === null || _b === void 0 ? void 0 : _b.refresh();
                (_c = categoryChartRef.current) === null || _c === void 0 ? void 0 : _c.refresh();
                (_d = topProductChartRef.current) === null || _d === void 0 ? void 0 : _d.refresh();
                (_e = breakdownChartRef.current) === null || _e === void 0 ? void 0 : _e.refresh();
                (_f = departmentChartRef.current) === null || _f === void 0 ? void 0 : _f.refresh();
                (_g = totalRevenueRef.current) === null || _g === void 0 ? void 0 : _g.refresh();
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
    var onCreated = function (e) {
        var _a, _b;
        (_a = breakdownChartRef.current) === null || _a === void 0 ? void 0 : _a.refresh();
        (_b = departmentChartRef.current) === null || _b === void 0 ? void 0 : _b.refresh();
        setTimeout(function () {
            var _a;
            (_a = OverviewRef.current) === null || _a === void 0 ? void 0 : _a.refresh();
        }, 500);
    };
    // Data accessors
    var getTotalRevenue = function (year, month) {
        var _a;
        var rows = HealthCare.salesData.filter(function (r) { return r.Year === year; });
        if (month === 0)
            return rows.reduce(function (sum, r) { var _a; return sum + ((_a = r.TotalRevenue) !== null && _a !== void 0 ? _a : 0); }, 0);
        var row = rows.find(function (r) { return r.Month === month; });
        return (_a = row === null || row === void 0 ? void 0 : row.TotalRevenue) !== null && _a !== void 0 ? _a : 0;
    };
    var getTotalOrders = function (year, month) {
        var _a;
        var rows = HealthCare.salesData.filter(function (r) { return r.Year === year; });
        if (month === 0)
            return rows.reduce(function (sum, r) { var _a; return sum + ((_a = r.TotalOrder) !== null && _a !== void 0 ? _a : 0); }, 0);
        var row = rows.find(function (r) { return r.Month === month; });
        return (_a = row === null || row === void 0 ? void 0 : row.TotalOrder) !== null && _a !== void 0 ? _a : 0;
    };
    var getAveragePerOrder = function (year, month) {
        var _a;
        var rows = HealthCare.salesData.filter(function (r) { return r.Year === year; });
        if (month === 0) {
            var average = getTotalRevenue(year, month) / getTotalOrders(year, month);
            return average;
        }
        var row = rows.find(function (r) { return r.Month === month; });
        return (_a = row === null || row === void 0 ? void 0 : row.AvgPerOrder) !== null && _a !== void 0 ? _a : 0;
    };
    var getGrossProfit = function (year, month) {
        var _a;
        var rows = HealthCare.salesData.filter(function (r) { return r.Year === year; });
        if (month === 0)
            return rows.reduce(function (sum, r) { var _a; return sum + ((_a = r.GrossProfitUSD) !== null && _a !== void 0 ? _a : 0); }, 0);
        var row = rows.find(function (r) { return r.Month === month; });
        return (_a = row === null || row === void 0 ? void 0 : row.GrossProfitUSD) !== null && _a !== void 0 ? _a : 0;
    };
    var getNetProfit = function (year, month) {
        var _a;
        var rows = HealthCare.salesData.filter(function (r) { return r.Year === year; });
        if (month === 0)
            return rows.reduce(function (sum, r) { var _a; return sum + ((_a = r.NetProfitUSD) !== null && _a !== void 0 ? _a : 0); }, 0);
        var row = rows.find(function (r) { return r.Month === month; });
        return (_a = row === null || row === void 0 ? void 0 : row.NetProfitUSD) !== null && _a !== void 0 ? _a : 0;
    };
    var getOperationalExpense = function (year, month) {
        var _a;
        var rows = HealthCare.salesData.filter(function (r) { return r.Year === year; });
        if (month === 0)
            return rows.reduce(function (sum, r) { var _a; return sum + ((_a = r.OprExpenses) !== null && _a !== void 0 ? _a : 0); }, 0);
        var row = rows.find(function (r) { return r.Month === month; });
        return (_a = row === null || row === void 0 ? void 0 : row.OprExpenses) !== null && _a !== void 0 ? _a : 0;
    };
    var getCogs = function (year, month) {
        var _a;
        var rows = HealthCare.salesData.filter(function (r) { return r.Year === year; });
        if (month === 0)
            return rows.reduce(function (sum, r) { var _a; return sum + ((_a = r.cogsUSD) !== null && _a !== void 0 ? _a : 0); }, 0);
        var row = rows.find(function (r) { return r.Month === month; });
        return (_a = row === null || row === void 0 ? void 0 : row.cogsUSD) !== null && _a !== void 0 ? _a : 0;
    };
    var totalRevenueSpark = React.useMemo(function () {
        var YEARS = [2023, 2024, 2025];
        return YEARS.map(function (yy) { return ({ x: String(yy), y: getTotalRevenue(yy, 0) }); });
    }, []);
    var kpis = React.useMemo(function () {
        var y = selectedYear;
        var m = selectedMonth;
        return {
            totalRevenue: getTotalRevenue(y, m),
            totalOrder: getTotalOrders(y, m),
            avgPerOrder: Math.round(getAveragePerOrder(y, m)),
            grossProfit: getGrossProfit(y, m),
            netProfit: getNetProfit(y, m),
            opEx: getOperationalExpense(y, m),
            cogs: getCogs(y, m)
        };
    }, [selectedYear, selectedMonth]);
    var revenueGrowth = React.useMemo(function () {
        var previousYear = selectedYear - 1;
        var current = getTotalRevenue(selectedYear, selectedMonth);
        var previous = selectedMonth === 0 ? getTotalRevenue(previousYear, 0) : getTotalRevenue(previousYear, selectedMonth);
        if (!previous || previous <= 0)
            return { percentage: 0, positive: current >= 0, previousYear: previousYear };
        var percentage = ((current - previous) / previous) * 100;
        return { percentage: percentage, positive: percentage >= 0, previousYear: previousYear };
    }, [selectedYear, selectedMonth]);
    var orderGrowth = React.useMemo(function () {
        var previousYear = selectedYear - 1;
        var current = getTotalOrders(selectedYear, selectedMonth);
        var previous = selectedMonth === 0 ? getTotalOrders(previousYear, 0) : getTotalOrders(previousYear, selectedMonth);
        if (!previous || previous <= 0)
            return { percentage: 0, positive: current >= 0, previousYear: previousYear };
        var percentage = ((current - previous) / previous) * 100;
        return { percentage: percentage, positive: percentage >= 0, previousYear: previousYear };
    }, [selectedYear, selectedMonth]);
    var avgGrowth = React.useMemo(function () {
        var previousYear = selectedYear - 1;
        var current = getAveragePerOrder(selectedYear, selectedMonth);
        var previous = 0;
        if (selectedMonth === 0) {
            var prevTotalRev = getTotalRevenue(previousYear, 0);
            var prevTotalOrders = getTotalOrders(previousYear, 0);
            previous = prevTotalOrders ? prevTotalRev / prevTotalOrders : 0;
        }
        else {
            previous = getAveragePerOrder(previousYear, selectedMonth);
        }
        if (!previous || previous <= 0)
            return { percentage: 0, positive: current >= 0, previousYear: previousYear };
        var percentage = ((current - previous) / previous) * 100;
        return { percentage: percentage, positive: percentage >= 0, previousYear: previousYear };
    }, [selectedYear, selectedMonth]);
    var grossGrowth = React.useMemo(function () {
        var previousYear = selectedYear - 1;
        var current = getGrossProfit(selectedYear, selectedMonth);
        var previous = selectedMonth === 0 ? getGrossProfit(previousYear, 0) : getGrossProfit(previousYear, selectedMonth);
        if (!previous || previous <= 0)
            return { percentage: 0, positive: current >= 0, previousYear: previousYear };
        var percentage = ((current - previous) / previous) * 100;
        return { percentage: percentage, positive: percentage >= 0, previousYear: previousYear };
    }, [selectedYear, selectedMonth]);
    var cogsGrowth = React.useMemo(function () {
        var previousYear = selectedYear - 1;
        var current = getCogs(selectedYear, selectedMonth);
        var previous = selectedMonth === 0 ? getCogs(previousYear, 0) : getCogs(previousYear, selectedMonth);
        if (!previous || previous <= 0)
            return { percentage: 0, positive: current >= 0, previousYear: previousYear };
        var percentage = ((current - previous) / previous) * 100;
        return { percentage: percentage, positive: percentage >= 0, previousYear: previousYear };
    }, [selectedYear, selectedMonth]);
    var netGrowth = React.useMemo(function () {
        var previousYear = selectedYear - 1;
        var current = getNetProfit(selectedYear, selectedMonth);
        var previous = selectedMonth === 0 ? getNetProfit(previousYear, 0) : getNetProfit(previousYear, selectedMonth);
        if (!previous || previous <= 0)
            return { percentage: 0, positive: current >= 0, previousYear: previousYear };
        var percentage = ((current - previous) / previous) * 100;
        return { percentage: percentage, positive: percentage >= 0, previousYear: previousYear };
    }, [selectedYear, selectedMonth]);
    var opExGrowth = React.useMemo(function () {
        var previousYear = selectedYear - 1;
        var current = getOperationalExpense(selectedYear, selectedMonth);
        var previous = selectedMonth === 0 ? getOperationalExpense(previousYear, 0) : getOperationalExpense(previousYear, selectedMonth);
        if (!previous || previous <= 0)
            return { percentage: 0, positive: current >= 0, previousYear: previousYear };
        var percentage = ((current - previous) / previous) * 100;
        return { percentage: percentage, positive: percentage >= 0, previousYear: previousYear };
    }, [selectedYear, selectedMonth]);
    // KPI tiles
    var TotalRevenue = function () {
        var _a;
        return React.createElement("div", { className: "kpi-total-card" },
            React.createElement("div", { className: "spark-container" },
                React.createElement("div", { className: "card-label" }, "Total Revenue"),
                React.createElement("div", { className: "card-totalvalue" }, formatCurrency(kpis.totalRevenue)),
                React.createElement("div", { className: "growth-indicator" },
                    React.createElement("span", { style: { color: revenueGrowth.positive ? '#16a34a' : '#dc2626', fontWeight: 600 } },
                        revenueGrowth.positive ? '▲' : '▼',
                        " ",
                        Math.abs(revenueGrowth.percentage).toFixed(1),
                        "%"),
                    React.createElement("span", { className: "growth-indicator-label" },
                        "vs ",
                        selectedMonth === 0
                            ? revenueGrowth.previousYear
                            : "".concat((_a = months.find(function (m) { return m.value === selectedMonth; })) === null || _a === void 0 ? void 0 : _a.text, " ").concat(revenueGrowth.previousYear)))),
            React.createElement("div", { className: "spark-content" },
                React.createElement("div", null,
                    React.createElement(ej2_react_charts_1.SparklineComponent, { id: "total-responses-spark", ref: totalRevenueRef, type: "Pie", dataSource: totalRevenueSpark, xName: "x", yName: "y", valueType: "Category", width: "100%", height: "85px", lineWidth: 2, tooltipSettings: { visible: true, format: 'Year: ${x}<br/>Revenue: ${y}' }, palette: sparklinePalette },
                        React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.SparklineTooltip] })))));
    };
    var TotalOrder = function () {
        var _a;
        return React.createElement("div", { id: 'main-div' },
            React.createElement("div", { id: 'title-card' }, "Total Order"),
            React.createElement("div", { id: 'card-value' }, kpis.totalOrder),
            React.createElement("div", { className: "growth-indicator" },
                React.createElement("span", { style: { color: orderGrowth.positive ? '#16a34a' : '#dc2626', fontWeight: 600 } },
                    orderGrowth.positive ? '▲' : '▼',
                    " ",
                    Math.abs(orderGrowth.percentage).toFixed(1),
                    "%"),
                React.createElement("span", { className: "growth-indicator-label" },
                    "vs ",
                    selectedMonth === 0
                        ? orderGrowth.previousYear
                        : "".concat((_a = months.find(function (m) { return m.value === selectedMonth; })) === null || _a === void 0 ? void 0 : _a.text, " ").concat(orderGrowth.previousYear))));
    };
    var AveragePerOrder = function () {
        var _a;
        return React.createElement("div", { id: 'main-div' },
            React.createElement("div", { id: 'title-card' }, "Average Per Order"),
            React.createElement("div", { id: 'card-value' }, formatCurrency(kpis.avgPerOrder)),
            React.createElement("div", { className: "growth-indicator" },
                React.createElement("span", { style: { color: avgGrowth.positive ? '#16a34a' : '#dc2626', fontWeight: 600 } },
                    avgGrowth.positive ? '▲' : '▼',
                    " ",
                    Math.abs(avgGrowth.percentage).toFixed(1),
                    "%"),
                React.createElement("span", { className: "growth-indicator-label" },
                    "vs ",
                    selectedMonth === 0
                        ? avgGrowth.previousYear
                        : "".concat((_a = months.find(function (m) { return m.value === selectedMonth; })) === null || _a === void 0 ? void 0 : _a.text, " ").concat(avgGrowth.previousYear))));
    };
    var GrossProfit = function () {
        var _a;
        return React.createElement("div", { id: 'main-div' },
            React.createElement("div", { id: 'title-card' }, "Gross Profit"),
            React.createElement("div", { id: 'card-value' }, formatCurrency(kpis.grossProfit)),
            React.createElement("div", { className: "growth-indicator" },
                React.createElement("span", { style: { color: grossGrowth.positive ? '#16a34a' : '#dc2626', fontWeight: 600 } },
                    grossGrowth.positive ? '▲' : '▼',
                    " ",
                    Math.abs(grossGrowth.percentage).toFixed(1),
                    "%"),
                React.createElement("span", { className: "growth-indicator-label" },
                    "vs ",
                    selectedMonth === 0
                        ? grossGrowth.previousYear
                        : "".concat((_a = months.find(function (m) { return m.value === selectedMonth; })) === null || _a === void 0 ? void 0 : _a.text, " ").concat(grossGrowth.previousYear))));
    };
    var NetProfit = function () {
        var _a;
        return React.createElement("div", { id: 'main-div' },
            React.createElement("div", { id: 'title-card' }, "Net Profit"),
            React.createElement("div", { id: 'card-value' }, formatCurrency(kpis.netProfit)),
            React.createElement("div", { className: "growth-indicator" },
                React.createElement("span", { style: { color: netGrowth.positive ? '#16a34a' : '#dc2626', fontWeight: 600 } },
                    netGrowth.positive ? '▲' : '▼',
                    " ",
                    Math.abs(netGrowth.percentage).toFixed(1),
                    "%"),
                React.createElement("span", { className: "growth-indicator-label" },
                    "vs ",
                    selectedMonth === 0
                        ? netGrowth.previousYear
                        : "".concat((_a = months.find(function (m) { return m.value === selectedMonth; })) === null || _a === void 0 ? void 0 : _a.text, " ").concat(netGrowth.previousYear))));
    };
    var OperationalExpenses = function () {
        var _a;
        return React.createElement("div", { id: 'main-div' },
            React.createElement("div", { id: 'title-card' }, "Operational Expenses"),
            React.createElement("div", { id: 'card-value' }, formatCurrency(kpis.opEx)),
            React.createElement("div", { className: "growth-indicator" },
                React.createElement("span", { style: { color: opExGrowth.positive ? '#16a34a' : '#dc2626', fontWeight: 600 } },
                    opExGrowth.positive ? '▲' : '▼',
                    " ",
                    Math.abs(opExGrowth.percentage).toFixed(1),
                    "%"),
                React.createElement("span", { className: "growth-indicator-label" },
                    "vs ",
                    selectedMonth === 0
                        ? opExGrowth.previousYear
                        : "".concat((_a = months.find(function (m) { return m.value === selectedMonth; })) === null || _a === void 0 ? void 0 : _a.text, " ").concat(opExGrowth.previousYear))));
    };
    var Cogs = function () {
        var _a;
        return React.createElement("div", { id: 'main-div' },
            React.createElement("div", { id: 'title-card' }, "Cost of Goods Sold"),
            React.createElement("div", { id: 'card-value' }, formatCurrency(kpis.cogs)),
            React.createElement("div", { className: "growth-indicator" },
                React.createElement("span", { style: { color: cogsGrowth.positive ? '#16a34a' : '#dc2626', fontWeight: 600 } },
                    cogsGrowth.positive ? '▲' : '▼',
                    " ",
                    Math.abs(cogsGrowth.percentage).toFixed(1),
                    "%"),
                React.createElement("span", { className: "growth-indicator-label" },
                    "vs ",
                    selectedMonth === 0
                        ? cogsGrowth.previousYear
                        : "".concat((_a = months.find(function (m) { return m.value === selectedMonth; })) === null || _a === void 0 ? void 0 : _a.text, " ").concat(cogsGrowth.previousYear))));
    };
    // Filter content uses global handlers and values
    var filterContent = function () { return (React.createElement("div", { className: 'dropdown-filter' },
        React.createElement("div", { className: 'dropdown-minwidth' },
            React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { dataSource: years, value: selectedYear, placeholder: "Select year", change: onYearChange, popupHeight: "200px", width: 100 })),
        React.createElement("div", { className: 'dropdown-minwidth' },
            React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { ref: monthRef, dataSource: months, fields: { text: 'text', value: 'value' }, value: selectedMonth, placeholder: "Select month", change: onMonthChange, popupHeight: "240px", width: 140 })))); };
    var salesTrend = React.useCallback(function () {
        var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var buildSeries = function (year) {
            var rows = HealthCare.salesData.filter(function (r) { return Number(r.Year) === Number(year); });
            var byMonth = new Map();
            rows.forEach(function (r) {
                var _a, _b;
                var index = Number((_b = (_a = r.MonthIndex) !== null && _a !== void 0 ? _a : r.Month) !== null && _b !== void 0 ? _b : 0);
                if (index >= 1 && index <= 12)
                    byMonth.set(index, r);
            });
            return MONTHS.map(function (m, i) {
                var _a;
                var value = byMonth.get(i + 1);
                return { x: m, y: value ? Number((_a = value.TotalRevenue) !== null && _a !== void 0 ? _a : 0) : null };
            });
        };
        var previousYear = selectedYear - 1;
        var previousSeries = buildSeries(previousYear);
        var currentSeries = buildSeries(selectedYear);
        var hasPreviousData = previousSeries.some(function (p) { return p.y !== null; });
        var onTrendTooltip = function (args) {
            var _a, _b, _c, _d, _e, _f;
            var y = Number((_b = (_a = args === null || args === void 0 ? void 0 : args.point) === null || _a === void 0 ? void 0 : _a.y) !== null && _b !== void 0 ? _b : 0);
            var x = String((_d = (_c = args === null || args === void 0 ? void 0 : args.point) === null || _c === void 0 ? void 0 : _c.x) !== null && _d !== void 0 ? _d : '');
            var name = String((_f = (_e = args === null || args === void 0 ? void 0 : args.series) === null || _e === void 0 ? void 0 : _e.name) !== null && _f !== void 0 ? _f : '');
            args.text = "<b>".concat(name, "</b><br/>").concat(x, " : <b>").concat(formatCurrency(y), "</b>");
        };
        return (React.createElement("div", { className: 'layout-container' },
            React.createElement(ej2_react_charts_1.ChartComponent, { id: "sales-trend-spline-area", ref: salesTrendChartRef, enableAnimation: false, load: onChartLoad, primaryXAxis: {
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
                }, chartArea: { border: { width: 0 } }, legendSettings: { visible: true, position: 'Bottom' }, tooltip: { enable: true, header: '' }, tooltipRender: onTrendTooltip, crosshair: { enable: true, lineType: 'Vertical' }, width: "100%", height: "100%", axisLabelRender: onCurrencyVerticalAxis },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.SplineAreaSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Tooltip, ej2_react_charts_1.Legend, ej2_react_charts_1.Crosshair] }),
                React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                    hasPreviousData && (React.createElement(ej2_react_charts_1.SeriesDirective, { type: "SplineArea", dataSource: previousSeries, xName: "x", yName: "y", name: "".concat(previousYear, " Revenue"), opacity: 0.5, border: { width: 2, color: '#028A02' }, fill: "#028A02", marker: { visible: true, width: 7, height: 7, shape: 'Circle' }, animation: { enable: false } })),
                    React.createElement(ej2_react_charts_1.SeriesDirective, { type: "SplineArea", dataSource: currentSeries, xName: "x", yName: "y", name: "".concat(selectedYear, " Revenue"), opacity: 0.5, border: { width: 2, color: '#EFF48E' }, fill: "#EFF48E", marker: { visible: true, width: 8, height: 8, shape: 'Triangle' }, animation: { enable: false } })))));
    }, [selectedYear]);
    var RevenueBreakdown = function () {
        var roundTo2 = function (n) { return Math.round((n + Number.EPSILON) * 100) / 100; };
        var onTrendTooltip = function (args) {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            var x = String((_b = (_a = args === null || args === void 0 ? void 0 : args.point) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : '');
            var name = String((_d = (_c = args === null || args === void 0 ? void 0 : args.series) === null || _c === void 0 ? void 0 : _c.name) !== null && _d !== void 0 ? _d : '');
            var pct = Number((_f = (_e = args) === null || _e === void 0 ? void 0 : _e.point) === null || _f === void 0 ? void 0 : _f.percentage);
            var val = Number.isFinite(pct) ? pct : Number((_h = (_g = args === null || args === void 0 ? void 0 : args.point) === null || _g === void 0 ? void 0 : _g.y) !== null && _h !== void 0 ? _h : 0);
            args.text = "<b>".concat(name, "</b><br/>").concat(x, " : <b>").concat(val.toFixed(2), "%</b>");
        };
        var buildData = function () {
            var _a, _b, _c, _d;
            var rowsForYear = HealthCare.salesData.filter(function (r) { return r.Year === selectedYear; });
            if (!rowsForYear.length)
                return [];
            var values;
            if (selectedMonth === 0) {
                var count = rowsForYear.length;
                var sums = rowsForYear.reduce(function (acc, r) {
                    var _a, _b, _c, _d;
                    acc.COGSPct += (_a = r.COGSPct) !== null && _a !== void 0 ? _a : 0;
                    acc.TaxPct += (_b = r.TaxPct) !== null && _b !== void 0 ? _b : 0;
                    acc.OpExPct += (_c = r.OpExPct) !== null && _c !== void 0 ? _c : 0;
                    acc.NetProfitPct += (_d = r.NetProfitPct) !== null && _d !== void 0 ? _d : 0;
                    return acc;
                }, { COGSPct: 0, TaxPct: 0, OpExPct: 0, NetProfitPct: 0 });
                values = {
                    COGSPct: roundTo2(sums.COGSPct / count),
                    TaxPct: roundTo2(sums.TaxPct / count),
                    OpExPct: roundTo2(sums.OpExPct / count),
                    NetProfitPct: roundTo2(sums.NetProfitPct / count)
                };
            }
            else {
                var row = rowsForYear.find(function (r) { return r.Month === selectedMonth; });
                values = {
                    COGSPct: roundTo2((_a = row === null || row === void 0 ? void 0 : row.COGSPct) !== null && _a !== void 0 ? _a : 0),
                    TaxPct: roundTo2((_b = row === null || row === void 0 ? void 0 : row.TaxPct) !== null && _b !== void 0 ? _b : 0),
                    OpExPct: roundTo2((_c = row === null || row === void 0 ? void 0 : row.OpExPct) !== null && _c !== void 0 ? _c : 0),
                    NetProfitPct: roundTo2((_d = row === null || row === void 0 ? void 0 : row.NetProfitPct) !== null && _d !== void 0 ? _d : 0)
                };
            }
            var points = [
                { x: 'COGS', y: +values.COGSPct, color: '#028A02' },
                { x: 'Tax', y: +values.TaxPct, color: '#CDC733' },
                { x: 'OpEx', y: +values.OpExPct, color: '#14C38E' },
                { x: 'Net Profit', y: +values.NetProfitPct, color: '#77E4D4' }
            ].map(function (p) { return (__assign(__assign({}, p), { text: "".concat(p.y.toFixed(2), "%") })); });
            return points;
        };
        var data = buildData();
        var isYearly = selectedMonth === 0;
        var onPercentageTextRender = function (args) {
            var _a, _b;
            var pct = (_b = (_a = args) === null || _a === void 0 ? void 0 : _a.point) === null || _b === void 0 ? void 0 : _b.percentage;
            if (pct != null)
                args.text = "".concat(pct.toFixed(2), "%");
        };
        return (React.createElement("div", { style: { width: '100%', height: '100%', padding: 15, boxSizing: 'border-box' } },
            React.createElement(ej2_react_charts_1.AccumulationChartComponent, { id: "revenue-breakdown-donut", ref: breakdownChartRef, legendSettings: { visible: true, position: 'Bottom' }, tooltip: { enable: true }, tooltipRender: onTrendTooltip, enableSmartLabels: true, center: { x: '50%', y: '50%' }, width: "100%", height: "100%", load: onAccumulationLoad, textRender: onPercentageTextRender },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.PieSeries, ej2_react_charts_1.AccumulationLegend, ej2_react_charts_1.AccumulationTooltip, ej2_react_charts_1.AccumulationDataLabel] }),
                React.createElement(ej2_react_charts_1.AccumulationSeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.AccumulationSeriesDirective, { dataSource: data, xName: "x", yName: "y", pointColorMapping: "color", innerRadius: "50%" // makes it a donut
                        , startAngle: 0, endAngle: 360, explode: false, name: isYearly ? "Average ".concat(selectedYear) : "".concat(selectedYear, " - ").concat(months[selectedMonth].text), dataLabel: {
                            visible: true,
                            // Use the pre-formatted "text" field to avoid template issues
                            name: 'text',
                            position: 'Outside',
                            connectorStyle: { length: '10px', width: 1 },
                            border: { width: 0 }
                        }, animation: { enable: false }, borderRadius: 10, border: { width: 4, color: '#ffffff' } })))));
    };
    var RevenueByTopProduct = function () {
        var dataSource = HealthCare.ProductPerformance || [];
        if (!Array.isArray(dataSource) || dataSource.length === 0) {
            return React.createElement("div", { style: { padding: 15 } }, "No ProductPerformance data");
        }
        var getMonthShort = function (m) { return monthShort[Math.max(0, Math.min(11, m - 1))] || ''; };
        var monthName = selectedMonth === 0 ? null : monthShort[selectedMonth - 1];
        var revenueOfRow = function (r) {
            var _a, _b;
            var revenue = Number(r === null || r === void 0 ? void 0 : r.RevenueUSD);
            if (!isNaN(revenue) && isFinite(revenue))
                return revenue;
            var price = Number((_a = r === null || r === void 0 ? void 0 : r.FixedPriceUSD) !== null && _a !== void 0 ? _a : 0);
            var units = Number((_b = r === null || r === void 0 ? void 0 : r.UnitsSold) !== null && _b !== void 0 ? _b : 0);
            var total = price * units;
            return isNaN(total) || !isFinite(total) ? 0 : Math.round(total);
        };
        var buildData = function () {
            var yearRows = dataSource.filter(function (r) { return Number(r.Year) === Number(selectedYear); });
            if (!yearRows.length)
                return [];
            if (selectedMonth !== 0) {
                var monthRows = yearRows.filter(function (r) { return Number(r.Month) === Number(selectedMonth) && Number(r.RankInCategoryMonth) === 1; });
                var byCategory_1 = new Map();
                monthRows.forEach(function (r) {
                    var category = String(r.Category);
                    var currency = byCategory_1.get(category);
                    if (!currency || revenueOfRow(r) > revenueOfRow(currency))
                        byCategory_1.set(category, r);
                });
                var points = Array.from(byCategory_1.values()).map(function (r) { return ({
                    x: String(r.Category),
                    y: revenueOfRow(r),
                    product: String(r.Product),
                    month: Number(r.Month)
                }); });
                points.sort(function (a, b) { return a.x.localeCompare(b.x); });
                return points;
            }
            else {
                var rank1 = yearRows.filter(function (r) { return Number(r.RankInCategoryMonth) === 1; });
                var bestByCategory_1 = new Map();
                rank1.forEach(function (r) {
                    var category = String(r.Category);
                    var revenue = revenueOfRow(r);
                    var bestCategory = bestByCategory_1.get(category);
                    if (!bestCategory || revenue > bestCategory.revenue)
                        bestByCategory_1.set(category, { row: r, revenue: revenue });
                });
                var points = Array.from(bestByCategory_1.values()).map(function (_a) {
                    var row = _a.row, revenue = _a.revenue;
                    return ({
                        x: String(row.Category),
                        y: revenue,
                        product: String(row.Product),
                        month: Number(row.Month)
                    });
                });
                points.sort(function (a, b) { return a.x.localeCompare(b.x); });
                return points;
            }
        };
        var data = buildData();
        var onTooltip = function (args) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            var index = Number((_c = (_b = (_a = args) === null || _a === void 0 ? void 0 : _a.point) === null || _b === void 0 ? void 0 : _b.index) !== null && _c !== void 0 ? _c : -1);
            var data = (_e = (_d = args.series) === null || _d === void 0 ? void 0 : _d.dataSource) !== null && _e !== void 0 ? _e : [];
            var row = Array.isArray(data) && index >= 0 ? data[index] : null;
            var x = String((_f = row === null || row === void 0 ? void 0 : row.x) !== null && _f !== void 0 ? _f : '');
            var y = Number((_g = row === null || row === void 0 ? void 0 : row.y) !== null && _g !== void 0 ? _g : 0);
            var product = String((_h = row === null || row === void 0 ? void 0 : row.product) !== null && _h !== void 0 ? _h : '');
            var month = Number((_j = row === null || row === void 0 ? void 0 : row.month) !== null && _j !== void 0 ? _j : 0);
            var monthText = month ? " (".concat(getMonthShort(month), ")") : '';
            var seriesName = (_l = (_k = args.series) === null || _k === void 0 ? void 0 : _k.name) !== null && _l !== void 0 ? _l : '';
            args.text = "<b>".concat(seriesName, "</b><br/><b>").concat(x).concat(monthText, "</b><br/><b>").concat(product, ":</b> <b>").concat(formatCurrency(y), "</b>");
        };
        return (React.createElement("div", { className: 'layout-container' },
            React.createElement(ej2_react_charts_1.ChartComponent, { id: "top-product-revenue-line", ref: topProductChartRef, load: onChartLoad, axisLabelRender: onCurrencyVerticalAxis, primaryXAxis: {
                    valueType: 'Category',
                    majorGridLines: { width: 0 },
                    labelIntersectAction: 'Wrap',
                    labelStyle: { size: '11px' },
                }, primaryYAxis: {
                    labelFormat: 'c0',
                    lineStyle: { width: 0 },
                    majorTickLines: { width: 0 },
                    minorTickLines: { width: 0 },
                    majorGridLines: { width: 0 },
                }, chartArea: { border: { width: 0 } }, legendSettings: { visible: false }, tooltip: { enable: true, header: "" }, tooltipRender: onTooltip, width: "100%", height: "100%" },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.ColumnSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Tooltip, ej2_react_circulargauge_1.Legend] }),
                React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.SeriesDirective, { type: "Column", dataSource: data, xName: "x", yName: "y", name: selectedMonth === 0 ? "Top Product by Category (Best Month) \u2022 ".concat(selectedYear) : "".concat(selectedYear, " - ").concat(monthName), width: 3, marker: { visible: true, width: 8, height: 8 }, fill: '#14C38E', cornerRadius: { topLeft: 14, topRight: 14 }, animation: { enable: false } })))));
    };
    var RevenueByCategory = function () {
        var dataSource = HealthCare.categoryRevenue[0];
        var categoryKeys = Object.keys(dataSource).filter(function (k) { return k !== 'Id' && k !== 'Year' && k !== 'Month'; });
        var buildData = function () {
            var rowsForYear = HealthCare.categoryRevenue.filter(function (r) { return r.Year === selectedYear; });
            if (!rowsForYear.length)
                return [];
            if (selectedMonth === 0) {
                var monthsCount_1 = rowsForYear.length; // typically 12
                var sums_1 = {};
                categoryKeys.forEach(function (k) { return (sums_1[k] = 0); });
                rowsForYear.forEach(function (r) {
                    categoryKeys.forEach(function (k) {
                        var _a;
                        sums_1[k] += Number((_a = r[k]) !== null && _a !== void 0 ? _a : 0);
                    });
                });
                return categoryKeys.map(function (k) { return ({ x: k, y: sums_1[k] / monthsCount_1 }); }).sort(function (a, b) { return b.y - a.y; });
            }
            else {
                var row_1 = rowsForYear.find(function (r) { return r.Month === selectedMonth; });
                if (!row_1)
                    return [];
                return categoryKeys.map(function (k) { return ({ x: k, y: row_1[k] }); }).sort(function (a, b) { return b.y - a.y; });
            }
        };
        var data = buildData();
        var onTrendTooltip = function (args) {
            var _a, _b, _c, _d, _e, _f;
            var y = Number((_b = (_a = args === null || args === void 0 ? void 0 : args.point) === null || _a === void 0 ? void 0 : _a.y) !== null && _b !== void 0 ? _b : 0);
            var x = String((_d = (_c = args === null || args === void 0 ? void 0 : args.point) === null || _c === void 0 ? void 0 : _c.x) !== null && _d !== void 0 ? _d : '');
            var name = String((_f = (_e = args === null || args === void 0 ? void 0 : args.series) === null || _e === void 0 ? void 0 : _e.name) !== null && _f !== void 0 ? _f : '');
            args.text = "<b>".concat(x, "</b><br/>").concat(name, " : <b>").concat(formatCurrency(y), "</b>");
        };
        var onLabelText = function (args) {
            var _a, _b;
            var y = (_b = (_a = args.point) === null || _a === void 0 ? void 0 : _a.y) !== null && _b !== void 0 ? _b : 0;
            args.text = formatCurrency(y);
        };
        return (React.createElement("div", { className: "layout-container" },
            React.createElement(ej2_react_charts_1.ChartComponent, { id: "category-revenue-bar", ref: categoryChartRef, load: onChartLoad, axisLabelRender: onCurrencyHorizontalAxis, primaryXAxis: {
                    valueType: 'Category',
                    majorGridLines: { width: 0 },
                    labelIntersectAction: 'Trim',
                    labelStyle: { size: '11px' }
                }, primaryYAxis: {
                    labelFormat: 'c0',
                    lineStyle: { width: 0 },
                    majorTickLines: { width: 0 },
                    minorTickLines: { width: 0 },
                    majorGridLines: { width: 0 },
                }, chartArea: { border: { width: 0 } }, margin: { left: 10, right: 10, top: 10, bottom: 10 }, tooltip: { enable: true, shared: false }, textRender: onLabelText, legendSettings: { visible: false }, tooltipRender: onTrendTooltip, width: "100%", height: "100%" },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.BarSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Tooltip, ej2_react_charts_1.DataLabel, ej2_react_charts_1.Legend] }),
                React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.SeriesDirective, { type: "Bar", dataSource: data, xName: "x", yName: "y", name: selectedMonth === 0 ? "Average (".concat(selectedYear, ")") : "".concat(selectedYear, " - ").concat(months[selectedMonth].text), marker: { visible: true, width: 8, height: 8, dataLabel: { visible: true, position: 'Outer' } }, cornerRadius: { topLeft: 6, topRight: 6, bottomLeft: 6, bottomRight: 6 }, fill: "#E48900", opacity: 0.85, animation: { enable: false } })))));
    };
    var DepartmentRevenue = function () {
        var DEPT_KEYS = ['HospitalsUSD', 'PharmaciesUSD', 'DistributorsUSD', 'Self CareUSD', 'OthersUSD'];
        var departmentData = HealthCare.DepartmentRevenue || [];
        if (!departmentData.length) {
            return React.createElement("div", { style: { padding: 15 } }, "No department revenue data");
        }
        var monthName = selectedMonth === 0 ? null : monthShort[selectedMonth - 1];
        var roundTo2 = function (n) { return Math.round((n + Number.EPSILON) * 100) / 100; };
        var COLOR_BY_DEPT = {
            HospitalsUSD: "#E48900",
            PharmaciesUSD: "#028A02",
            DistributorsUSD: "#77E4D4",
            "Self CareUSD": "#14C38E",
            OthersUSD: "#F7EC09",
        };
        var buildData = function () {
            var rowsForYear = departmentData.filter(function (r) { return r.Year === selectedYear; });
            if (!rowsForYear.length)
                return [];
            if (selectedMonth === 0) {
                var count_1 = rowsForYear.length;
                var sums_2 = { HospitalsUSD: 0, PharmaciesUSD: 0, DistributorsUSD: 0, "Self CareUSD": 0, OthersUSD: 0 };
                rowsForYear.forEach(function (r) {
                    DEPT_KEYS.forEach(function (k) {
                        var _a;
                        sums_2[k] += Number((_a = r[k]) !== null && _a !== void 0 ? _a : 0);
                    });
                });
                return DEPT_KEYS.map(function (k) { return ({ x: k, y: roundTo2(sums_2[k] / count_1), color: COLOR_BY_DEPT[k] }); }).sort(function (a, b) { return b.y - a.y; });
            }
            else {
                var row_2 = rowsForYear.find(function (r) {
                    var m = r.Month;
                    return (typeof m === 'string' && m === monthName) || (typeof m === 'number' && m === selectedMonth);
                });
                if (!row_2)
                    return [];
                return DEPT_KEYS
                    .map(function (k) { var _a; return ({ x: k, y: roundTo2(Number((_a = row_2[k]) !== null && _a !== void 0 ? _a : 0)), color: COLOR_BY_DEPT[k] }); })
                    .sort(function (a, b) { return b.y - a.y; });
            }
        };
        var data = buildData();
        var isYearly = selectedMonth === 0;
        var onTextRender = function (args) {
            var _a, _b;
            var y = Number((_b = (_a = args.point) === null || _a === void 0 ? void 0 : _a.y) !== null && _b !== void 0 ? _b : 0);
            args.text = formatCurrency(y);
        };
        var onTooltipRender = function (args) {
            var _a, _b, _c, _d, _e, _f;
            var y = Number((_b = (_a = args.point) === null || _a === void 0 ? void 0 : _a.y) !== null && _b !== void 0 ? _b : 0);
            var x = String((_d = (_c = args.point) === null || _c === void 0 ? void 0 : _c.x) !== null && _d !== void 0 ? _d : '');
            var name = (_f = (_e = args.series) === null || _e === void 0 ? void 0 : _e.name) !== null && _f !== void 0 ? _f : '';
            args.text = "<b>".concat(name, "</b><br/>").concat(x, ": <b>").concat(formatCurrency(y), "</b>");
        };
        return (React.createElement("div", { style: { width: '100%', height: '100%', padding: 15, paddingTop: 0, boxSizing: 'border-box' } },
            React.createElement(ej2_react_charts_1.AccumulationChartComponent, { id: "department-revenue-pie", ref: departmentChartRef, load: onAccumulationLoad, legendSettings: { visible: true, position: 'Bottom' }, tooltip: { enable: true }, tooltipRender: onTooltipRender, textRender: onTextRender, enableSmartLabels: true, width: "100%", height: "100%" },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.PieSeries, ej2_react_charts_1.AccumulationLegend, ej2_react_charts_1.AccumulationTooltip, ej2_react_charts_1.AccumulationDataLabel] }),
                React.createElement(ej2_react_charts_1.AccumulationSeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.AccumulationSeriesDirective, { dataSource: data, xName: "x", yName: "y", pointColorMapping: "color", startAngle: 0, endAngle: 360, explode: false, name: isYearly ? "Average ".concat(selectedYear) : "".concat(selectedYear, " - ").concat(monthName), dataLabel: { visible: true, position: 'Outside', connectorStyle: { length: '10px', width: 1 } }, animation: { enable: false } })))));
    };
    return (React.createElement("div", { className: 'Container' },
        React.createElement("div", { className: 'e-card layout-header' },
            React.createElement("div", { className: 'layout-title' }, "Overview"),
            React.createElement("div", null, filterContent())),
        React.createElement("div", null,
            React.createElement(ej2_react_layouts_1.DashboardLayoutComponent, { ref: OverviewRef, id: "dashboard_default", style: { height: '85vh', width: '100%' }, columns: 8, cellAspectRatio: 90 / 100, cellSpacing: [10, 10], allowResizing: false, allowDragging: false, mediaQuery: 'max-width:950px', created: onCreated },
                React.createElement(ej2_react_layouts_1.PanelsDirective, null,
                    React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 0, col: 0, content: TotalRevenue }),
                    React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 0, col: 2, content: TotalOrder }),
                    React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 0, col: 4, content: AveragePerOrder }),
                    React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 0, col: 6, content: Cogs }),
                    React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 1, col: 0, content: NetProfit }),
                    React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 2, col: 0, content: GrossProfit }),
                    React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 3, col: 0, content: OperationalExpenses }),
                    React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 6, sizeY: 3, row: 1, col: 2, header: "<div>Sales Trend Analysis</div>", content: salesTrend }),
                    React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 4, sizeY: 3, row: 4, col: 0, header: "<div>Revenue Breakdown</div>", content: RevenueBreakdown }),
                    React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 4, sizeY: 3, row: 4, col: 4, header: "<div>Revenue by Top Products</div>", content: RevenueByTopProduct }),
                    React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 4, sizeY: 3, row: 7, col: 0, header: "<div>Revenue by Category</div>", content: RevenueByCategory }),
                    React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 4, sizeY: 3, row: 7, col: 4, header: "<div>Revenue by Department</div>", content: DepartmentRevenue }))))));
};
var Dashboard2 = function (_a) {
    var selectedYear = _a.selectedYear, selectedMonth = _a.selectedMonth, onYearChange = _a.onYearChange, onMonthChange = _a.onMonthChange;
    var monthRef = (0, react_1.useRef)(null);
    var gridInstance = (0, react_1.useRef)(null);
    var topSoldChartref = (0, react_1.useRef)(null);
    var leastSoldChartRef = (0, react_1.useRef)(null);
    var productRef = React.useRef(null);
    var categories = [
        "Wellness & Personal Care",
        "Home Healthcare Essentials",
        "Personal Protective Equipment (PPE)",
        "Baby & Mother Care",
        "Fitness & Monitoring",
        "Eye Care",
        "Dental Care"
    ];
    var years = [2023, 2024, 2025];
    var months = [
        { text: 'All (Yearly)', value: 0 },
        { text: 'January', value: 1 },
        { text: 'February', value: 2 },
        { text: 'March', value: 3 },
        { text: 'April', value: 4 },
        { text: 'May', value: 5 },
        { text: 'June', value: 6 },
        { text: 'July', value: 7 },
        { text: 'August', value: 8 },
        { text: 'September', value: 9 },
        { text: 'October', value: 10 },
        { text: 'November', value: 11 },
        { text: 'December', value: 12 }
    ];
    React.useEffect(function () {
        var timer;
        var refreshAll = function () {
            clearTimeout(timer);
            timer = setTimeout(function () {
                var _a, _b, _c, _d;
                (_a = productRef.current) === null || _a === void 0 ? void 0 : _a.refresh();
                (_b = gridInstance.current) === null || _b === void 0 ? void 0 : _b.refresh();
                (_c = topSoldChartref.current) === null || _c === void 0 ? void 0 : _c.refresh();
                (_d = leastSoldChartRef.current) === null || _d === void 0 ? void 0 : _d.refresh();
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
    var _b = (0, react_1.useState)(categories[0]), selectedCategory = _b[0], setSelectedCategory = _b[1];
    var categoryOptions = categories.map(function (c) { return ({ text: c, value: c }); });
    // Categories content: DropDown for categories (synchronous)
    var onCategoryChange = function (e) {
        var _a;
        var value = String((_a = e.value) !== null && _a !== void 0 ? _a : '');
        setSelectedCategory(value);
    };
    var totalRevenueForCategory = (0, react_1.useMemo)(function () {
        var _a;
        var rows = HealthCare.categoryRevenue || [];
        var rowsForYear = rows.filter(function (r) { return Number(r.Year) === Number(selectedYear); });
        if (!rowsForYear.length)
            return 0;
        if (selectedMonth === 0) {
            // Sum the selected category across all months in the selected year
            return rowsForYear.reduce(function (accumulation, row) {
                var _a;
                var value = Number((_a = row === null || row === void 0 ? void 0 : row[selectedCategory]) !== null && _a !== void 0 ? _a : 0);
                return accumulation + (isNaN(value) ? 0 : value);
            }, 0);
        }
        else {
            // Specific month value for the selected category
            var monthRow = rowsForYear.find(function (r) { return Number(r.Month) === Number(selectedMonth); });
            var value = Number((_a = monthRow === null || monthRow === void 0 ? void 0 : monthRow[selectedCategory]) !== null && _a !== void 0 ? _a : 0);
            return isNaN(value) ? 0 : value;
        }
    }, [selectedCategory, selectedYear, selectedMonth]);
    var totalUnitsSoldForCategory = (0, react_1.useMemo)(function () {
        var rows = HealthCare.ProductPerformance || [];
        var rowsForYearCategory = rows.filter(function (r) { return Number(r.Year) === Number(selectedYear) && String(r.Category) === String(selectedCategory); });
        if (!rowsForYearCategory.length)
            return 0;
        if (selectedMonth === 0) {
            // Sum across all months in the selected year
            return rowsForYearCategory.reduce(function (accumulation, r) { var _a; return accumulation + (Number((_a = r.UnitsSold) !== null && _a !== void 0 ? _a : 0) || 0); }, 0);
        }
        else {
            // Sum for specific month (there are multiple products per category)
            var monthRows = rowsForYearCategory.filter(function (r) { return Number(r.Month) === Number(selectedMonth); });
            return monthRows.reduce(function (accumulation, r) { var _a; return accumulation + (Number((_a = r.UnitsSold) !== null && _a !== void 0 ? _a : 0) || 0); }, 0);
        }
    }, [selectedCategory, selectedYear, selectedMonth]);
    var cogsByCategory = (0, react_1.useMemo)(function () {
        var data = HealthCare.salesDataByCategory || [];
        if (!Array.isArray(data) || data.length === 0)
            return 0;
        // Normalize COGS amount (USD) field
        var getCogs = function (r) {
            var _a, _b, _c, _d, _e;
            var v = Number((_e = (_d = (_c = (_b = (_a = r === null || r === void 0 ? void 0 : r.COGSUSD) !== null && _a !== void 0 ? _a : r === null || r === void 0 ? void 0 : r.CogsUSD) !== null && _b !== void 0 ? _b : r === null || r === void 0 ? void 0 : r.COGS_Usd) !== null && _c !== void 0 ? _c : r === null || r === void 0 ? void 0 : r.cogsUSD) !== null && _d !== void 0 ? _d : r === null || r === void 0 ? void 0 : r.COGS) !== null && _e !== void 0 ? _e : 0);
            return isNaN(v) || !isFinite(v) ? 0 : v;
        };
        // Filter by selected Year + Category
        var rowsForYearCat = data.filter(function (r) {
            return Number(r === null || r === void 0 ? void 0 : r.Year) === Number(selectedYear) &&
                String(r === null || r === void 0 ? void 0 : r.Category) === String(selectedCategory);
        });
        if (!rowsForYearCat.length)
            return 0;
        if (selectedMonth === 0) {
            // Sum COGS across all months in the selected year
            var sum = rowsForYearCat.reduce(function (accumulation, r) { return accumulation + getCogs(r); }, 0);
            return Math.round(sum);
        }
        // Specific month (accept numeric, short name, or MonthName)
        var mShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][Math.max(0, selectedMonth - 1)] || '';
        var row = rowsForYearCat.find(function (r) {
            return Number(r === null || r === void 0 ? void 0 : r.Month) === Number(selectedMonth) ||
                String(r === null || r === void 0 ? void 0 : r.Month).toLowerCase() === mShort.toLowerCase() ||
                String(r === null || r === void 0 ? void 0 : r.MonthName).toLowerCase() === mShort.toLowerCase();
        });
        return Math.round(getCogs(row || {}));
    }, [selectedCategory, selectedYear, selectedMonth]);
    var netProfitByCategory = (0, react_1.useMemo)(function () {
        var data = HealthCare.salesDataByCategory || [];
        if (!Array.isArray(data) || data.length === 0)
            return 0;
        // Normalize Net Profit (USD) field
        var getNetProfit = function (r) {
            var _a;
            var value = Number((_a = r === null || r === void 0 ? void 0 : r.Net_Profit) !== null && _a !== void 0 ? _a : 0);
            return isNaN(value) || !isFinite(value) ? 0 : value;
        };
        // Filter by selected Year + Category
        var rowsForYearCategory = data.filter(function (r) {
            return Number(r === null || r === void 0 ? void 0 : r.Year) === Number(selectedYear) &&
                String(r === null || r === void 0 ? void 0 : r.Category) === String(selectedCategory);
        });
        if (!rowsForYearCategory.length)
            return 0;
        if (selectedMonth === 0) {
            // Sum Net Profit across all months in the selected year
            var sum = rowsForYearCategory.reduce(function (accumulation, r) { return accumulation + getNetProfit(r); }, 0);
            return Math.round(sum);
        }
        // Specific month (accept numeric, short name, or MonthName)
        var monthShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][Math.max(0, selectedMonth - 1)] || '';
        var row = rowsForYearCategory.find(function (r) {
            return Number(r === null || r === void 0 ? void 0 : r.Month) === Number(selectedMonth) ||
                String(r === null || r === void 0 ? void 0 : r.Month).toLowerCase() === monthShort.toLowerCase() ||
                String(r === null || r === void 0 ? void 0 : r.MonthName).toLowerCase() === monthShort.toLowerCase();
        });
        return Math.round(getNetProfit(row || {}));
    }, [selectedCategory, selectedYear, selectedMonth]);
    var RevenueGrowth = (0, react_1.useMemo)(function () {
        var _a;
        var previousYear = Number(selectedYear) - 1;
        var rows = HealthCare.categoryRevenue || [];
        var rowspreviousYear = rows.filter(function (r) { return Number(r.Year) === previousYear; });
        var previousValue = 0;
        if (selectedMonth === 0) {
            previousValue = rowspreviousYear.reduce(function (accumulation, row) {
                var _a;
                var value = Number((_a = row === null || row === void 0 ? void 0 : row[selectedCategory]) !== null && _a !== void 0 ? _a : 0);
                return accumulation + (isNaN(value) ? 0 : value);
            }, 0);
        }
        else {
            var previousRow = rowspreviousYear.find(function (r) { return Number(r.Month) === Number(selectedMonth); });
            var value = Number((_a = previousRow === null || previousRow === void 0 ? void 0 : previousRow[selectedCategory]) !== null && _a !== void 0 ? _a : 0);
            previousValue = isNaN(value) ? 0 : value;
        }
        var currentValue = Number(totalRevenueForCategory) || 0;
        if (previousValue <= 0) {
            return { percentage: 0, positive: currentValue >= 0, previousYear: previousYear };
        }
        var percentage = ((currentValue - previousValue) / previousValue) * 100;
        return { percentage: percentage, positive: percentage >= 0, previousYear: previousYear };
    }, [selectedCategory, selectedYear, selectedMonth, totalRevenueForCategory]);
    var unitsSoldGrowth = (0, react_1.useMemo)(function () {
        var previousYear = Number(selectedYear) - 1;
        var rows = HealthCare.ProductPerformance || [];
        var rowspreviousYear = rows.filter(function (r) { return Number(r.Year) === previousYear && String(r.Category) === String(selectedCategory); });
        var previousValue = 0;
        if (selectedMonth === 0) {
            // Sum across all months for previous year
            previousValue = rowspreviousYear.reduce(function (accumulation, r) { var _a; return accumulation + (Number((_a = r.UnitsSold) !== null && _a !== void 0 ? _a : 0) || 0); }, 0);
        }
        else {
            // Sum for the same month in previous year
            var monthRowsPrevious = rowspreviousYear.filter(function (r) { return Number(r.Month) === Number(selectedMonth); });
            previousValue = monthRowsPrevious.reduce(function (accumulation, r) { var _a; return accumulation + (Number((_a = r.UnitsSold) !== null && _a !== void 0 ? _a : 0) || 0); }, 0);
        }
        var currentValue = Number(totalUnitsSoldForCategory) || 0;
        if (previousValue <= 0) {
            return { percentage: 0, positive: currentValue >= 0, previousYear: previousYear };
        }
        var percentage = ((currentValue - previousValue) / previousValue) * 100;
        return { percentage: percentage, positive: percentage >= 0, previousYear: previousYear };
    }, [selectedCategory, selectedYear, selectedMonth, totalUnitsSoldForCategory]);
    var categoryCOGSGrowth = (0, react_1.useMemo)(function () {
        var previousYear = Number(selectedYear) - 1;
        var rows = HealthCare.salesDataByCategory || [];
        var rowspreviousYear = rows.filter(function (r) { return Number(r.Year) === previousYear && String(r.Category) === String(selectedCategory); });
        var previousValue = 0;
        if (selectedMonth === 0) {
            // Sum across all months for previous year
            previousValue = rowspreviousYear.reduce(function (accumulation, r) { var _a; return accumulation + (Number((_a = r.COGS) !== null && _a !== void 0 ? _a : 0) || 0); }, 0);
        }
        else {
            // Sum for the same month in previous year
            var rowPreviousMonth = rowspreviousYear.filter(function (r) { return Number(r.Month) === Number(selectedMonth); });
            previousValue = rowPreviousMonth.reduce(function (accumulation, r) { var _a; return accumulation + (Number((_a = r.COGS) !== null && _a !== void 0 ? _a : 0) || 0); }, 0);
        }
        var currentValue = Number(cogsByCategory) || 0;
        if (previousValue <= 0) {
            return { percentage: 0, positive: currentValue >= 0, previousYear: previousYear };
        }
        var percentage = ((currentValue - previousValue) / previousValue) * 100;
        return { percentage: percentage, positive: percentage >= 0, previousYear: previousYear };
    }, [selectedCategory, selectedYear, selectedMonth, cogsByCategory]);
    var NetProfitGrowth = (0, react_1.useMemo)(function () {
        var previousYear = Number(selectedYear) - 1;
        var rows = HealthCare.salesDataByCategory || [];
        var rowspreviousYear = rows.filter(function (r) { return Number(r.Year) === previousYear && String(r.Category) === String(selectedCategory); });
        var previousValue = 0;
        if (selectedMonth === 0) {
            // Sum across all months for previous year
            previousValue = rowspreviousYear.reduce(function (accumulation, r) { var _a; return accumulation + (Number((_a = r.Net_Profit) !== null && _a !== void 0 ? _a : 0) || 0); }, 0);
        }
        else {
            // Sum for the same month in previous year
            var rowPreviousMonth = rowspreviousYear.filter(function (r) { return Number(r.Month) === Number(selectedMonth); });
            previousValue = rowPreviousMonth.reduce(function (accumulation, r) { var _a; return accumulation + (Number((_a = r.Net_Profit) !== null && _a !== void 0 ? _a : 0) || 0); }, 0);
        }
        var currentValue = Number(netProfitByCategory) || 0;
        if (previousValue <= 0) {
            return { percentage: 0, positive: currentValue >= 0, previousYear: previousYear };
        }
        var percentage = ((currentValue - previousValue) / previousValue) * 100;
        return { percentage: percentage, positive: percentage >= 0, previousYear: previousYear };
    }, [selectedCategory, selectedYear, selectedMonth, netProfitByCategory]);
    // KPI content functions (synchronous)
    var totalRevenueContent = function () {
        var _a;
        return (React.createElement("div", { id: "main-div" },
            React.createElement("div", { id: 'title-card' }, "Total Revenue"),
            React.createElement("div", { id: 'card-value' }, formatCurrency(totalRevenueForCategory)),
            React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 } },
                React.createElement("span", { style: {
                        color: RevenueGrowth.positive ? '#16a34a' : '#dc2626',
                        fontWeight: 600
                    } },
                    RevenueGrowth.positive ? '▲' : '▼',
                    " ",
                    Math.abs(RevenueGrowth.percentage).toFixed(1),
                    "%"),
                React.createElement("span", { style: { fontSize: 12, color: '#6b7280' } },
                    "vs ",
                    selectedMonth === 0
                        ? RevenueGrowth.previousYear
                        : "".concat((_a = months.find(function (m) { return m.value === selectedMonth; })) === null || _a === void 0 ? void 0 : _a.text, " ").concat(RevenueGrowth.previousYear)))));
    };
    var unitsSoldContent = function () {
        var _a;
        return (React.createElement("div", { id: "main-div" },
            React.createElement("div", { id: 'title-card' }, "Total Units Sold"),
            React.createElement("div", { id: 'card-value' }, numberFormatter.format(totalUnitsSoldForCategory)),
            React.createElement("div", { className: "growth-indicator" },
                React.createElement("span", { style: { color: unitsSoldGrowth.positive ? '#16a34a' : '#dc2626', fontWeight: 600 } },
                    unitsSoldGrowth.positive ? '▲' : '▼',
                    " ",
                    Math.abs(unitsSoldGrowth.percentage).toFixed(1),
                    "%"),
                React.createElement("span", { className: "growth-indicator-label" },
                    "vs ",
                    selectedMonth === 0
                        ? unitsSoldGrowth.previousYear
                        : "".concat((_a = months.find(function (m) { return m.value === selectedMonth; })) === null || _a === void 0 ? void 0 : _a.text, " ").concat(unitsSoldGrowth.previousYear)))));
    };
    var categoryCOGS = function () {
        var _a;
        return (React.createElement("div", { id: "main-div" },
            React.createElement("div", { id: 'title-card' }, "Category COGS"),
            React.createElement("div", { id: 'card-value' }, formatCurrency(cogsByCategory)),
            React.createElement("div", { className: "growth-indicator" },
                React.createElement("span", { style: { color: categoryCOGSGrowth.positive ? '#16a34a' : '#dc2626', fontWeight: 600 } },
                    categoryCOGSGrowth.positive ? '▲' : '▼',
                    " ",
                    Math.abs(categoryCOGSGrowth.percentage).toFixed(1),
                    "%"),
                React.createElement("span", { className: "growth-indicator-label" },
                    "vs ",
                    selectedMonth === 0
                        ? categoryCOGSGrowth.previousYear
                        : "".concat((_a = months.find(function (m) { return m.value === selectedMonth; })) === null || _a === void 0 ? void 0 : _a.text, " ").concat(categoryCOGSGrowth.previousYear)))));
    };
    var NetProftByCateogoryContent = function () {
        var _a;
        return (React.createElement("div", { id: "main-div" },
            React.createElement("div", { id: 'title-card' }, "Net Profit"),
            React.createElement("div", { id: 'card-value' }, formatCurrency(netProfitByCategory)),
            React.createElement("div", { className: "growth-indicator" },
                React.createElement("span", { style: { color: NetProfitGrowth.positive ? '#16a34a' : '#dc2626', fontWeight: 600 } },
                    NetProfitGrowth.positive ? '▲' : '▼',
                    " ",
                    Math.abs(NetProfitGrowth.percentage).toFixed(1),
                    "%"),
                React.createElement("span", { className: "growth-indicator-label" },
                    "vs ",
                    selectedMonth === 0
                        ? NetProfitGrowth.previousYear
                        : "".concat((_a = months.find(function (m) { return m.value === selectedMonth; })) === null || _a === void 0 ? void 0 : _a.text, " ").concat(NetProfitGrowth.previousYear)))));
    };
    // Filters content (year + month)
    var filterContent = function () { return (React.createElement("div", { className: "dropdown-filter" },
        React.createElement("div", { className: 'dropdown-minwidth' },
            React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { dataSource: categoryOptions, fields: { text: 'text', value: 'value' }, value: selectedCategory, placeholder: "Select category", change: onCategoryChange, popupHeight: "240px", width: "250px" })),
        React.createElement("div", { className: 'dropdown-minwidth' },
            React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { dataSource: years, value: selectedYear, placeholder: "Select year", change: onYearChange, popupHeight: "200px", width: 100 })),
        React.createElement("div", { className: 'dropdown-minwidth' },
            React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { ref: monthRef, dataSource: months, fields: { text: 'text', value: 'value' }, value: selectedMonth, placeholder: "Select month", change: onMonthChange, popupHeight: "240px", width: 140 })))); };
    var TopSoldContent = function () {
        var _a = (0, react_1.useState)(null), drillInfo = _a[0], setDrillInfo = _a[1];
        var drillPieRef = (0, react_1.useRef)(null);
        var onBarPointClick = function (args) {
            var _a, _b, _c;
            var point = args === null || args === void 0 ? void 0 : args.point;
            var dataSource = (_a = args === null || args === void 0 ? void 0 : args.series) === null || _a === void 0 ? void 0 : _a.dataSource;
            var index = Number((_b = point === null || point === void 0 ? void 0 : point.index) !== null && _b !== void 0 ? _b : -1);
            var row = Array.isArray(dataSource) && index >= 0 ? dataSource[index] : null;
            if (!row)
                return;
            var abandoned = Math.max(0, Math.min(100, Number((_c = row.abandoned) !== null && _c !== void 0 ? _c : 0)));
            var converted = Math.max(0, 100 - abandoned);
            setDrillInfo({ product: String(row.x), abandoned: abandoned, converted: converted });
        };
        var buildTop5Products = function () {
            var dataSource = HealthCare.ProductPerformance || [];
            var filteredDataSource = dataSource.filter(function (r) { return Number(r.Year) === Number(selectedYear) && String(r.Category) === String(selectedCategory); });
            if (!filteredDataSource.length)
                return [];
            // If month === 0: aggregate by product across all months in the year and pick top 5 by RevenueUSD
            if (selectedMonth === 0) {
                var byProduct_1 = new Map();
                filteredDataSource.forEach(function (r) {
                    var _a, _b, _c;
                    var key = String(r.Product);
                    var rev = Number((_a = r.RevenueUSD) !== null && _a !== void 0 ? _a : 0) || 0;
                    var units = Number((_b = r.UnitsSold) !== null && _b !== void 0 ? _b : 0) || 0;
                    var abandonedPercentage = Number((_c = r.AbandonedCartPercentage) !== null && _c !== void 0 ? _c : 0) || 0;
                    var current = byProduct_1.get(key);
                    if (current) {
                        current.y += rev;
                        current.unitsSold += units;
                        current.abandonedSum += abandonedPercentage;
                        current.count += 1;
                    }
                    else {
                        byProduct_1.set(key, { x: key, y: rev, unitsSold: units, abandonedSum: abandonedPercentage, count: 1 });
                    }
                });
                return Array.from(byProduct_1.values())
                    .map(function (p) { return ({ x: p.x, y: p.y ? Math.round(p.y) : 0, unitsSold: p.unitsSold, abandoned: p.count ? Math.round(p.abandonedSum / p.count) : 0 }); })
                    .sort(function (a, b) { return b.y - a.y; })
                    .slice(0, 5);
            }
            // Specific month: include only RankInCategoryMonth 1–5 (top 5 by rank)
            var monthRows = filteredDataSource.filter(function (r) { return Number(r.Month) === Number(selectedMonth); });
            var filtered = monthRows
                .filter(function (r) {
                var _a;
                var rank = Number((_a = r.RankInCategoryMonth) !== null && _a !== void 0 ? _a : 0);
                return rank >= 1 && rank <= 5;
            })
                .sort(function (a, b) { var _a, _b; return Number((_a = a.RankInCategoryMonth) !== null && _a !== void 0 ? _a : 999) - Number((_b = b.RankInCategoryMonth) !== null && _b !== void 0 ? _b : 999); });
            return filtered.map(function (r) {
                var _a, _b;
                return ({
                    x: String(r.Product),
                    y: (function () {
                        var _a, _b;
                        var revenue = Number(r.RevenueUSD);
                        if (!isNaN(revenue) && isFinite(revenue))
                            return revenue;
                        var price = Number((_a = r.FixedPriceUSD) !== null && _a !== void 0 ? _a : 0);
                        var units = Number((_b = r.UnitsSold) !== null && _b !== void 0 ? _b : 0);
                        var total = price * units;
                        return isNaN(total) || !isFinite(total) ? 0 : Math.round(total);
                    })(),
                    unitsSold: Number((_a = r.UnitsSold) !== null && _a !== void 0 ? _a : 0) || 0,
                    abandoned: Number((_b = r.AbandonedCartPercentage) !== null && _b !== void 0 ? _b : 0) || 0,
                });
            });
        };
        var onPercentageTextRender = function (args) {
            var _a, _b;
            var pct = (_b = (_a = args) === null || _a === void 0 ? void 0 : _a.point) === null || _b === void 0 ? void 0 : _b.percentage;
            if (pct != null)
                args.text = "".concat(pct.toFixed(0), "%"); // percentage only
        };
        var onTrendTooltip = function (args) {
            var _a, _b, _c, _d, _e, _f;
            var x = String((_b = (_a = args === null || args === void 0 ? void 0 : args.point) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : '');
            var pct = Number((_d = (_c = args) === null || _c === void 0 ? void 0 : _c.point) === null || _d === void 0 ? void 0 : _d.percentage);
            var val = Number.isFinite(pct) ? pct : Number((_f = (_e = args === null || args === void 0 ? void 0 : args.point) === null || _e === void 0 ? void 0 : _e.y) !== null && _f !== void 0 ? _f : 0);
            args.text = "".concat(x, " : <b>").concat(val.toFixed(2), "%</b>");
        };
        if (drillInfo) {
            var data_1 = [
                { x: 'Abandoned Cart', y: drillInfo.abandoned, color: '#EF5350', text: "".concat(drillInfo.abandoned.toFixed(0), "%") },
                { x: 'Converted Cart', y: drillInfo.converted, color: '#66BB6A', text: "".concat(drillInfo.converted.toFixed(0), "%") },
            ];
            return (React.createElement("div", { className: 'drilldown-layout-container' },
                React.createElement("div", { className: "button-container" },
                    React.createElement(ej2_react_buttons_1.ButtonComponent, { onClick: function () { return setDrillInfo(null); }, cssClass: "e-flat", content: "Back", style: { padding: '4px 10px', borderRadius: 6, border: '1px solid #e5e7eb', cursor: 'pointer' } }),
                    React.createElement("div", { className: "drilldown-label" },
                        drillInfo.product,
                        " \u2022 Abandoned vs Converted")),
                React.createElement("div", { style: { height: '100%', minHeight: 0 } },
                    React.createElement(ej2_react_charts_1.AccumulationChartComponent, { id: "top-product-drill-pie", load: onAccumulationLoad, ref: drillPieRef, legendSettings: { visible: true, position: 'Bottom' }, tooltip: { enable: true }, enableSmartLabels: true, width: "100%", height: "100%", enableAnimation: false, textRender: onPercentageTextRender, tooltipRender: onTrendTooltip },
                        React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.PieSeries, ej2_react_charts_1.AccumulationLegend, ej2_react_charts_1.AccumulationTooltip, ej2_react_charts_1.AccumulationDataLabel] }),
                        React.createElement(ej2_react_charts_1.AccumulationSeriesCollectionDirective, null,
                            React.createElement(ej2_react_charts_1.AccumulationSeriesDirective, { dataSource: data_1, xName: "x", yName: "y", pointColorMapping: "color", innerRadius: "45%", dataLabel: { visible: true, name: 'text', position: 'Outside', connectorStyle: { length: '10px', width: 1 } }, animation: { enable: false }, borderRadius: 10, border: { width: 4, color: '#ffffff' } }))))));
        }
        var data = buildTop5Products();
        var onXAxisClick = function (args) {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            var targetId = String((_d = (_a = args === null || args === void 0 ? void 0 : args.target) !== null && _a !== void 0 ? _a : (_c = (_b = args === null || args === void 0 ? void 0 : args.event) === null || _b === void 0 ? void 0 : _b.target) === null || _c === void 0 ? void 0 : _c.id) !== null && _d !== void 0 ? _d : '');
            if (!targetId)
                return;
            // Data source from chart ref (fallback to current render data)
            var dataSource = ((_g = (_f = (_e = topSoldChartref.current) === null || _e === void 0 ? void 0 : _e.series) === null || _f === void 0 ? void 0 : _f[0]) === null || _g === void 0 ? void 0 : _g.dataSource) || data;
            // Prefer index from axis label id to avoid trimmed text mismatches
            var row = null;
            if (targetId.includes('_AxisLabel_')) {
                var match = targetId.match(/_AxisLabel_(\d+)/);
                var index = match ? parseInt(match[1], 10) : -1;
                if (index >= 0 && Array.isArray(dataSource) && dataSource[index]) {
                    row = dataSource[index];
                }
                else {
                    // Fallback: match by label text if id parsing failed
                    var element = document.getElementById(targetId);
                    var labelText_1 = ((element === null || element === void 0 ? void 0 : element.textContent) || '').trim();
                    if (labelText_1 && Array.isArray(dataSource)) {
                        row = dataSource.find(function (p) { return String(p === null || p === void 0 ? void 0 : p.x) === labelText_1; }) || null;
                    }
                }
            }
            if (!row)
                return;
            var abandoned = Math.max(0, Math.min(100, Number((_h = row.abandoned) !== null && _h !== void 0 ? _h : 0)));
            var converted = Math.max(0, 100 - abandoned);
            setDrillInfo({ product: String(row.x), abandoned: abandoned, converted: converted });
        };
        var onTopTooltip = function (args) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            var y = Number((_b = (_a = args.point) === null || _a === void 0 ? void 0 : _a.y) !== null && _b !== void 0 ? _b : 0);
            var x = String((_d = (_c = args.point) === null || _c === void 0 ? void 0 : _c.x) !== null && _d !== void 0 ? _d : '');
            var index = Number((_f = (_e = args.point) === null || _e === void 0 ? void 0 : _e.index) !== null && _f !== void 0 ? _f : -1);
            var dataSource = (_h = (_g = args.series) === null || _g === void 0 ? void 0 : _g.dataSource) !== null && _h !== void 0 ? _h : [];
            var row = Array.isArray(dataSource) && index >= 0 ? dataSource[index] : null;
            var units = Number((_j = row === null || row === void 0 ? void 0 : row.unitsSold) !== null && _j !== void 0 ? _j : 0);
            var unitsText = isNaN(units) ? '' : " \u2022 Units Sold: ".concat(numberFormatter.format(units));
            args.text = "".concat(x, ": ").concat(formatCurrency(y)).concat(unitsText);
        };
        return (React.createElement("div", { className: 'layout-container' },
            React.createElement(ej2_react_charts_1.ChartComponent, { id: "top-sold-bar", ref: topSoldChartref, primaryXAxis: { valueType: 'Category', majorGridLines: { width: 0 }, labelIntersectAction: 'Trim', labelStyle: { size: '11px' } }, primaryYAxis: { majorGridLines: { width: 0 }, lineStyle: { width: 0 }, majorTickLines: { width: 0 }, minorTickLines: { width: 0 } }, chartArea: { border: { width: 0 } }, tooltip: { enable: true, header: '' }, tooltipRender: onTopTooltip, pointClick: onBarPointClick, textRender: onLabelText, width: "100%", height: "100%", enableAnimation: false, load: onChartLoad, chartMouseClick: onXAxisClick, axisLabelRender: onCurrencyHorizontalAxis, legendSettings: { visible: false } },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.BarSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Tooltip, ej2_react_charts_1.DataLabel, ej2_react_charts_1.Legend] }),
                React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.SeriesDirective, { type: "Bar", dataSource: data, xName: "x", yName: "y", marker: { visible: true, width: 8, height: 8, dataLabel: { visible: true, position: 'Outer' } }, cornerRadius: { topLeft: 6, topRight: 6, bottomLeft: 6, bottomRight: 6 }, opacity: 0.9, fill: '#14C38E', animation: { enable: false } })))));
    };
    var LeastSoldContent = function () {
        var _a = (0, react_1.useState)(null), leastDrillInfo = _a[0], setLeastDrillInfo = _a[1];
        var leastPieRef = (0, react_1.useRef)(null);
        var onLeastBarPointClick = function (args) {
            var _a, _b, _c;
            var point = args === null || args === void 0 ? void 0 : args.point;
            var dataSource = (_a = args === null || args === void 0 ? void 0 : args.series) === null || _a === void 0 ? void 0 : _a.dataSource;
            var index = Number((_b = point === null || point === void 0 ? void 0 : point.index) !== null && _b !== void 0 ? _b : -1);
            var row = Array.isArray(dataSource) && index >= 0 ? dataSource[index] : null;
            if (!row)
                return;
            var abandoned = Math.max(0, Math.min(100, Number((_c = row.abandoned) !== null && _c !== void 0 ? _c : 0)));
            var converted = Math.max(0, 100 - abandoned);
            setLeastDrillInfo({ product: String(row.x), abandoned: abandoned, converted: converted });
        };
        var buildLeast5Products = function () {
            var dataSource = HealthCare.ProductPerformance || [];
            var filteredDataSource = dataSource.filter(function (r) { return Number(r.Year) === Number(selectedYear) && String(r.Category) === String(selectedCategory); });
            if (!filteredDataSource.length)
                return [];
            // For month=0: aggregate by product across all months and pick bottom 5 by RevenueUSD
            if (selectedMonth === 0) {
                var byProduct_2 = new Map();
                filteredDataSource.forEach(function (r) {
                    var _a, _b, _c;
                    var product = String(r.Product);
                    var revenue = Number((_a = r.RevenueUSD) !== null && _a !== void 0 ? _a : 0) || 0;
                    var units = Number((_b = r.UnitsSold) !== null && _b !== void 0 ? _b : 0) || 0;
                    var abandonedPercentage = Number((_c = r.AbandonedCartPercentage) !== null && _c !== void 0 ? _c : 0) || 0;
                    var current = byProduct_2.get(product);
                    if (current) {
                        current.y += revenue;
                        current.unitsSold += units;
                        current.abandonedSum += abandonedPercentage;
                        current.count += 1;
                    }
                    else {
                        byProduct_2.set(product, { x: product, y: revenue, unitsSold: units, abandonedSum: abandonedPercentage, count: 1 });
                    }
                });
                return Array.from(byProduct_2.values())
                    .map(function (p) { return ({ x: p.x, y: p.y ? Math.round(p.y) : 0, unitsSold: p.unitsSold, abandoned: p.count ? Math.round(p.abandonedSum / p.count) : 0 }); })
                    .sort(function (a, b) { return a.y - b.y; })
                    .slice(0, 5);
            }
            // Specific month: include only RankInCategoryMonth 11–15 (least 5 by rank bucket)
            var monthRows = filteredDataSource.filter(function (r) { return Number(r.Month) === Number(selectedMonth); });
            var filtered = monthRows
                .filter(function (r) {
                var _a;
                var rank = Number((_a = r.RankInCategoryMonth) !== null && _a !== void 0 ? _a : 0);
                return rank >= 11 && rank <= 15;
            })
                .sort(function (a, b) { var _a, _b; return Number((_a = a.RankInCategoryMonth) !== null && _a !== void 0 ? _a : 999) - Number((_b = b.RankInCategoryMonth) !== null && _b !== void 0 ? _b : 999); });
            return filtered.map(function (r) {
                var _a, _b;
                return ({
                    x: String(r.Product),
                    y: (function () {
                        var _a, _b;
                        var revenue = Number(r.RevenueUSD);
                        if (!isNaN(revenue) && isFinite(revenue))
                            return revenue;
                        var price = Number((_a = r.FixedPriceUSD) !== null && _a !== void 0 ? _a : 0);
                        var units = Number((_b = r.UnitsSold) !== null && _b !== void 0 ? _b : 0);
                        var total = price * units;
                        return isNaN(total) || !isFinite(total) ? 0 : Math.round(total);
                    })(),
                    unitsSold: Number((_a = r.UnitsSold) !== null && _a !== void 0 ? _a : 0) || 0,
                    abandoned: Number((_b = r.AbandonedCartPercentage) !== null && _b !== void 0 ? _b : 0) || 0,
                });
            });
        };
        var onXAxisClick = function (args) {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            var targetId = String((_d = (_a = args === null || args === void 0 ? void 0 : args.target) !== null && _a !== void 0 ? _a : (_c = (_b = args === null || args === void 0 ? void 0 : args.event) === null || _b === void 0 ? void 0 : _b.target) === null || _c === void 0 ? void 0 : _c.id) !== null && _d !== void 0 ? _d : '');
            if (!targetId)
                return;
            // Data source from chart ref (fallback to current render data)
            var dataSource = ((_g = (_f = (_e = leastSoldChartRef.current) === null || _e === void 0 ? void 0 : _e.series) === null || _f === void 0 ? void 0 : _f[0]) === null || _g === void 0 ? void 0 : _g.dataSource) || data;
            // Prefer index from axis label id to avoid trimmed text mismatches
            var row = null;
            if (targetId.includes('_AxisLabel_')) {
                var match = targetId.match(/_AxisLabel_(\d+)/);
                var index = match ? parseInt(match[1], 10) : -1;
                if (index >= 0 && Array.isArray(dataSource) && dataSource[index]) {
                    row = dataSource[index];
                }
                else {
                    // Fallback: match by label text if id parsing failed
                    var element = document.getElementById(targetId);
                    var labelText_2 = ((element === null || element === void 0 ? void 0 : element.textContent) || '').trim();
                    if (labelText_2 && Array.isArray(dataSource)) {
                        row = dataSource.find(function (p) { return String(p === null || p === void 0 ? void 0 : p.x) === labelText_2; }) || null;
                    }
                }
            }
            if (!row)
                return;
            var abandoned = Math.max(0, Math.min(100, Number((_h = row.abandoned) !== null && _h !== void 0 ? _h : 0)));
            var converted = Math.max(0, 100 - abandoned);
            setLeastDrillInfo({ product: String(row.x), abandoned: abandoned, converted: converted });
        };
        var onPercentageTextRender = function (args) {
            var _a, _b;
            var pct = (_b = (_a = args) === null || _a === void 0 ? void 0 : _a.point) === null || _b === void 0 ? void 0 : _b.percentage;
            if (pct != null)
                args.text = "".concat(pct.toFixed(0), "%"); // percentage only
        };
        var onTrendTooltip = function (args) {
            var _a, _b, _c, _d, _e, _f;
            var x = String((_b = (_a = args === null || args === void 0 ? void 0 : args.point) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : '');
            var pct = Number((_d = (_c = args) === null || _c === void 0 ? void 0 : _c.point) === null || _d === void 0 ? void 0 : _d.percentage);
            var val = Number.isFinite(pct) ? pct : Number((_f = (_e = args === null || args === void 0 ? void 0 : args.point) === null || _e === void 0 ? void 0 : _e.y) !== null && _f !== void 0 ? _f : 0);
            args.text = "".concat(x, " : <b>").concat(val.toFixed(2), "%</b>");
        };
        if (leastDrillInfo) {
            var data_2 = [
                { x: 'Abandoned Cart', y: leastDrillInfo.abandoned, color: '#EF5350', text: "".concat(leastDrillInfo.abandoned.toFixed(0), "%") },
                { x: 'Converted Cart', y: leastDrillInfo.converted, color: '#66BB6A', text: "".concat(leastDrillInfo.converted.toFixed(0), "%") },
            ];
            return (React.createElement("div", { className: 'drilldown-layout-container' },
                React.createElement("div", { className: "button-container" },
                    React.createElement(ej2_react_buttons_1.ButtonComponent, { onClick: function () { return setLeastDrillInfo(null); }, cssClass: "e-flat", content: "Back", style: { padding: '4px 10px', borderRadius: 6, border: '1px solid #e5e7eb', cursor: 'pointer' } }),
                    React.createElement("div", { className: "drilldown-label" },
                        leastDrillInfo.product,
                        " \u2022 Abandoned vs Converted")),
                React.createElement("div", { style: { height: '100%', minHeight: 0 } },
                    React.createElement(ej2_react_charts_1.AccumulationChartComponent, { id: "least-product-drill-pie", load: onAccumulationLoad, ref: leastPieRef, legendSettings: { visible: true, position: 'Bottom' }, tooltip: { enable: true }, enableSmartLabels: true, width: "100%", height: "100%", enableAnimation: false, textRender: onPercentageTextRender, tooltipRender: onTrendTooltip },
                        React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.PieSeries, ej2_react_charts_1.AccumulationLegend, ej2_react_charts_1.AccumulationTooltip, ej2_react_charts_1.AccumulationDataLabel] }),
                        React.createElement(ej2_react_charts_1.AccumulationSeriesCollectionDirective, null,
                            React.createElement(ej2_react_charts_1.AccumulationSeriesDirective, { dataSource: data_2, xName: "x", yName: "y", pointColorMapping: "color", innerRadius: "60%", animation: { enable: false }, dataLabel: { visible: true, name: 'text', position: 'Outside', connectorStyle: { length: '10px', width: 1 } }, borderRadius: 10, border: { width: 4, color: '#ffffff' } }))))));
        }
        var data = buildLeast5Products();
        var onLeastTooltip = function (args) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            var x = String((_b = (_a = args.point) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : '');
            var revenue = Number((_d = (_c = args.point) === null || _c === void 0 ? void 0 : _c.y) !== null && _d !== void 0 ? _d : 0);
            var index = Number((_f = (_e = args.point) === null || _e === void 0 ? void 0 : _e.index) !== null && _f !== void 0 ? _f : -1);
            var dataSource = (_h = (_g = args.series) === null || _g === void 0 ? void 0 : _g.dataSource) !== null && _h !== void 0 ? _h : [];
            var row = Array.isArray(dataSource) && index >= 0 ? dataSource[index] : null;
            var units = Number((_j = row === null || row === void 0 ? void 0 : row.unitsSold) !== null && _j !== void 0 ? _j : 0);
            var unitsText = isNaN(units) ? '' : " \u2022 Units Sold: ".concat(numberFormatter.format(units));
            args.text = "".concat(x, ": ").concat(formatCurrency(revenue)).concat(unitsText);
        };
        return (React.createElement("div", { className: 'layout-container' },
            React.createElement(ej2_react_charts_1.ChartComponent, { id: "least-sold-column", ref: leastSoldChartRef, load: onChartLoad, primaryXAxis: { valueType: 'Category', majorGridLines: { width: 0 }, labelIntersectAction: 'Wrap', labelStyle: { size: '11px' } }, primaryYAxis: { majorGridLines: { width: 0 }, lineStyle: { width: 0 }, majorTickLines: { width: 0 }, minorTickLines: { width: 0 } }, chartArea: { border: { width: 0 } }, tooltip: { enable: true, header: '' }, tooltipRender: onLeastTooltip, pointClick: onLeastBarPointClick, textRender: onLabelText, width: "100%", height: "100%", enableAnimation: false, chartMouseClick: onXAxisClick, axisLabelRender: onCurrencyVerticalAxis, legendSettings: { visible: false } },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.ColumnSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Tooltip, ej2_react_charts_1.DataLabel, ej2_react_charts_1.Legend] }),
                React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.SeriesDirective, { type: "Column", dataSource: data, xName: "x", yName: "y", marker: { visible: true, width: 8, height: 8, dataLabel: { visible: true, position: 'Outer' } }, cornerRadius: { topLeft: 6, topRight: 6, bottomLeft: 6, bottomRight: 6 }, opacity: 0.9, fill: '#C5D8A4', animation: { enable: false } })))));
    };
    var productDetailsContent = function () {
        var dataSource = HealthCare.ProductPerformance || [];
        var monthName = function (n) { return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][Math.max(0, n - 1)] || ''; };
        // Build filtered rows based on selected filters
        var rows = dataSource.filter(function (r) {
            var matchesYear = Number(r.Year) === Number(selectedYear);
            var matchesCategory = String(r.Category) === String(selectedCategory);
            var matchesMonth = selectedMonth === 0 || Number(r.Month) === Number(selectedMonth);
            return matchesYear && matchesCategory && matchesMonth;
        }).map(function (r) {
            var _a, _b, _c, _d, _e, _f, _g;
            return ({
                MonthName: (_a = r.MonthName) !== null && _a !== void 0 ? _a : monthName(Number(r.Month) || 0),
                ProductID: r.ProductID,
                Product: r.Product,
                FixedPriceUSD: Number((_b = r.FixedPriceUSD) !== null && _b !== void 0 ? _b : 0),
                UnitsSold: Number((_c = r.UnitsSold) !== null && _c !== void 0 ? _c : 0),
                RevenueUSD: Number((_d = r.RevenueUSD) !== null && _d !== void 0 ? _d : (Number((_e = r.FixedPriceUSD) !== null && _e !== void 0 ? _e : 0) * Number((_f = r.UnitsSold) !== null && _f !== void 0 ? _f : 0))),
                Rating: Number((_g = r.Rating) !== null && _g !== void 0 ? _g : 0)
            });
        });
        // Sum for plain number
        var sumFooterTemplate = function (props) {
            var _a;
            return React.createElement("span", { style: { fontWeight: 600 } },
                "Total: ", (_a = props.Sum) === null || _a === void 0 ? void 0 :
                _a.toLocaleString());
        };
        // Sum for currency
        var currencySumFooterTemplate = function (props) {
            var value = Number(props.Sum || 0);
            return (React.createElement("span", { style: { fontWeight: 600 } },
                "Total: ",
                value.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })));
        };
        function toolbarClick(args) {
            var _a, _b;
            switch (args.item.id) {
                case 'productDetailsContent_pdfexport':
                    (_a = gridInstance.current) === null || _a === void 0 ? void 0 : _a.pdfExport();
                    break;
                case 'productDetailsContent_excelexport':
                    (_b = gridInstance.current) === null || _b === void 0 ? void 0 : _b.excelExport();
                    break;
            }
        }
        var ratingTemplate = function (props) { return (React.createElement("div", { className: 'rating' },
            React.createElement(ej2_react_inputs_1.RatingComponent, { cssClass: 'healthcare-custom-rating', value: Number((props === null || props === void 0 ? void 0 : props.Rating) || 0), readOnly: true }))); };
        var toolBarOptions = ['Search', 'ExcelExport', 'PdfExport'];
        return (React.createElement("div", { className: "layout-container" },
            React.createElement(ej2_react_grids_1.GridComponent, { ref: gridInstance, id: "productDetailsContent", dataSource: rows, allowPaging: false, enableVirtualMaskRow: true, allowSorting: true, allowResizing: true, allowFiltering: true, allowMultiSorting: true, width: '100%', height: '100%', allowGrouping: true, allowExcelExport: true, allowPdfExport: true, toolbar: toolBarOptions, toolbarClick: toolbarClick, filterSettings: { type: 'Menu' } },
                React.createElement(ej2_react_grids_1.ColumnsDirective, null,
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: "MonthName", headerText: "Month", headerTemplate: headerWithTooltip("Month"), width: 110, textAlign: "Left" }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: "ProductID", headerText: "Product ID", headerTemplate: headerWithTooltip("Product ID"), width: 130, textAlign: "Left" }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Product", headerText: "Product Name", headerTemplate: headerWithTooltip("Product Name"), minWidth: 160, width: 200, textAlign: "Left" }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: "FixedPriceUSD", headerText: "Fixed Price (USD)", headerTemplate: headerWithTooltip("Fixed Price (USD)"), textAlign: "Right", format: "C0", width: 170 }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: "UnitsSold", headerText: "Units Sold", headerTemplate: headerWithTooltip("Unit Sold"), textAlign: "Right", format: "N0", width: 120 }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: "RevenueUSD", headerText: "Revenue (USD)", headerTemplate: headerWithTooltip("Revenue (USD)"), textAlign: "Right", format: "C0", width: 150 }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { headerText: "Rating", headerTemplate: headerWithTooltip("Rating"), width: 140, template: ratingTemplate, textAlign: "Center" })),
                React.createElement(ej2_react_grids_1.AggregatesDirective, null,
                    React.createElement(ej2_react_grids_1.AggregateDirective, null,
                        React.createElement(ej2_react_grids_1.AggregateColumnsDirective, null,
                            React.createElement(ej2_react_grids_1.AggregateColumnDirective, { field: "UnitsSold", type: "Sum", footerTemplate: sumFooterTemplate }),
                            React.createElement(ej2_react_grids_1.AggregateColumnDirective, { field: "RevenueUSD", type: "Sum", footerTemplate: currencySumFooterTemplate })))),
                React.createElement(ej2_react_grids_1.Inject, { services: [ej2_react_grids_1.Page, ej2_react_grids_1.Sort, ej2_react_grids_1.Resize, ej2_react_grids_1.Filter, ej2_react_grids_1.Group, ej2_react_grids_1.RowDD, ej2_react_grids_1.Toolbar, ej2_react_grids_1.ExcelExport, ej2_react_grids_1.PdfExport, ej2_react_grids_1.Aggregate] }))));
    };
    return (React.createElement("div", { className: "Container" },
        React.createElement("div", { className: 'e-card layout-header' },
            React.createElement("div", { className: 'layout-title' }, "Product Performance Analysis"),
            React.createElement("div", null, filterContent())),
        React.createElement("div", null,
            React.createElement(ej2_react_layouts_1.DashboardLayoutComponent, { id: "dashboard_performance", ref: productRef, style: { height: '85vh', width: '100%', zIndex: 1 }, columns: 8, cellAspectRatio: 1, cellSpacing: [10, 10], allowResizing: false, allowDragging: false, mediaQuery: "(max-width:950px)" },
                React.createElement(ej2_react_layouts_1.PanelsDirective, null,
                    React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 0, col: 0, content: totalRevenueContent }),
                    React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 0, col: 2, content: unitsSoldContent }),
                    React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 0, col: 4, content: categoryCOGS }),
                    React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 0, col: 6, content: NetProftByCateogoryContent }),
                    React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 4, sizeY: 3, row: 1, col: 0, header: "<div>Top Sold Product</div>", content: TopSoldContent }),
                    React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 4, sizeY: 3, row: 1, col: 4, header: "<div>Least Sold Product</div>", content: LeastSoldContent }),
                    React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 8, sizeY: 4, row: 4, col: 0, header: "<div>Product Details - All Categories</div>", content: productDetailsContent }))))));
};
exports.unCountries = [
    { Country: 'India', Status: 'In-Active' },
    { Country: 'United States', Status: 'In-Active' },
    { Country: 'South Africa', Status: 'In-Active' },
    { Country: 'United Kingdom', Status: 'In-Active' },
    { Country: 'Australia', Status: 'In-Active' }
];
var Dashboard3 = function (_a) {
    var selectedYear = _a.selectedYear, selectedMonth = _a.selectedMonth, onYearChange = _a.onYearChange, onMonthChange = _a.onMonthChange;
    var monthRef = (0, react_1.useRef)(null);
    var categories = ["United States", "United Kingdom", "South Africa", "India", "Australia"];
    var _b = (0, react_1.useState)(categories[0]), selectedCountry = _b[0], setSelectedCountry = _b[1];
    var years = [2023, 2024, 2025];
    var categoryOptions = categories.map(function (c) { return ({ text: c, value: c }); });
    var mapRef = React.useRef(null);
    var regionRef = React.useRef(null);
    var ontimeGaugeRef = (0, react_1.useRef)(null);
    var defectChartref = (0, react_1.useRef)(null);
    var distributorChartRef = (0, react_1.useRef)(null);
    var SalesDistributionChartRef = (0, react_1.useRef)(null);
    var channelChartRef = (0, react_1.useRef)(null);
    React.useEffect(function () {
        var timer;
        var refreshAll = function () {
            clearTimeout(timer);
            timer = setTimeout(function () {
                var _a, _b, _c, _d, _e, _f, _g;
                (_a = regionRef.current) === null || _a === void 0 ? void 0 : _a.refresh();
                (_b = channelChartRef.current) === null || _b === void 0 ? void 0 : _b.refresh();
                (_c = SalesDistributionChartRef.current) === null || _c === void 0 ? void 0 : _c.refresh();
                (_d = distributorChartRef.current) === null || _d === void 0 ? void 0 : _d.refresh();
                (_e = defectChartref.current) === null || _e === void 0 ? void 0 : _e.refresh();
                (_f = ontimeGaugeRef.current) === null || _f === void 0 ? void 0 : _f.refresh();
                (_g = mapRef.current) === null || _g === void 0 ? void 0 : _g.refresh();
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
    var months = [
        { text: 'All (Yearly)', value: 0 },
        { text: 'January', value: 1 },
        { text: 'February', value: 2 },
        { text: 'March', value: 3 },
        { text: 'April', value: 4 },
        { text: 'May', value: 5 },
        { text: 'June', value: 6 },
        { text: 'July', value: 7 },
        { text: 'August', value: 8 },
        { text: 'September', value: 9 },
        { text: 'October', value: 10 },
        { text: 'November', value: 11 },
        { text: 'December', value: 12 }
    ];
    var filterContent = function () { return (React.createElement("div", { style: { display: 'flex', gap: 12, alignItems: 'center', paddingLeft: 12, paddingRight: 12 } },
        React.createElement("div", { className: 'dropdown-minwidth' },
            React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { dataSource: categoryOptions, fields: { text: 'text', value: 'value' }, value: selectedCountry, placeholder: "Select category", change: function (e) { var _a; return setSelectedCountry(String((_a = e.value) !== null && _a !== void 0 ? _a : categories[0])); }, popupHeight: "240px", width: 180 })),
        React.createElement("div", { className: 'dropdown-minwidth' },
            React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { dataSource: years, value: selectedYear, placeholder: "Select year", change: onYearChange, popupHeight: "200px", width: 100 })),
        React.createElement("div", { className: 'dropdown-minwidth' },
            React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { ref: monthRef, dataSource: months, fields: { text: 'text', value: 'value' }, value: selectedMonth, placeholder: "Select month", change: onMonthChange, popupHeight: "240px", width: 140 })))); };
    var Mapload = function (args) {
        var selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.maps.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/contrast/i, 'Contrast').replace(/-dark/i, "Dark").replace(/-highContrast/i, 'HighContrast');
    };
    var SalesByRegion = function () {
        // Regions available in data
        var regions = ['United States', 'United Kingdom', 'India', 'South Africa', 'Australia'];
        var getMonthShort = function (m) { return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][Math.max(0, m - 1)] || ''; };
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
        // Compute revenue per region for selected year/month
        var revenueByRegion = React.useMemo(function () {
            var dataSource = HealthCare.SalesByRegion || [];
            var rowsForYear = dataSource.filter(function (r) { return Number(r.Year) === Number(selectedYear); });
            var result = { 'United States': 0, 'United Kingdom': 0, 'India': 0, 'South Africa': 0, 'Australia': 0 };
            if (!rowsForYear.length)
                return result;
            if (selectedMonth === 0) {
                rowsForYear.forEach(function (r) {
                    regions.forEach(function (region) {
                        var _a;
                        var value = Number((_a = r[region]) !== null && _a !== void 0 ? _a : 0);
                        if (!isNaN(value) && isFinite(value))
                            result[region] += value;
                    });
                });
            }
            else {
                var monthShort_1 = getMonthShort(selectedMonth);
                var row_3 = rowsForYear.find(function (r) { return String(r.Month) === monthShort_1; });
                if (row_3) {
                    regions.forEach(function (region) {
                        var _a;
                        var value = Number((_a = row_3[region]) !== null && _a !== void 0 ? _a : 0);
                        result[region] = isNaN(value) || !isFinite(value) ? 0 : value;
                    });
                }
            }
            return result;
        }, [selectedYear, selectedMonth]);
        // Map 'region' label to shape name in world map
        var shapeNameByRegion = {
            'United States': 'United States',
            'United Kingdom': 'United Kingdom',
            'India': 'India',
            'Australia': 'Australia',
            'South Africa': 'South Africa'
        };
        // Build a quick lookup for tooltips: shapeName -> revenue
        var revenueByShape = React.useMemo(function () {
            var map = {};
            Object.entries(shapeNameByRegion).forEach(function (_a) {
                var _b;
                var region = _a[0], shape = _a[1];
                var revenue = (_b = revenueByRegion[region]) !== null && _b !== void 0 ? _b : 0;
                if (Array.isArray(shape)) {
                    shape.forEach(function (s) { map[s] = revenue; });
                }
                else if (shape) {
                    map[shape] = revenue;
                }
            });
            return map;
        }, [revenueByRegion]);
        var title = selectedMonth === 0 ? "All Months \u2022 ".concat(selectedYear) : "".concat(selectedYear, " - ").concat(getMonthShort(selectedMonth));
        var onTooltip = function (args) {
            var _a;
            var name = (args === null || args === void 0 ? void 0 : args.content);
            var revenue = (_a = revenueByShape[name]) !== null && _a !== void 0 ? _a : 0;
            args.content = ["<b>".concat(name, "</b><br/>").concat(title, "<br/>Revenue: <b>").concat(formatCurrency(revenue), "</b>")];
        };
        // Customize legend text to show: "<Country> - <Revenue>" and hide the inactive bucket
        var onLegendRendering = function (args) {
            var _a, _b, _c;
            var txt = String((_b = (_a = args === null || args === void 0 ? void 0 : args.legendText) !== null && _a !== void 0 ? _a : args === null || args === void 0 ? void 0 : args.text) !== null && _b !== void 0 ? _b : '').toLowerCase();
            if (txt.includes('in-active')) {
                args.cancel = true;
                return;
            }
            if (txt.includes('active')) {
                var revenue = Number((_c = revenueByRegion[selectedCountry]) !== null && _c !== void 0 ? _c : 0);
                var label = "".concat(selectedCountry, " - ").concat(formatCurrency(revenue));
                if ('legendText' in args)
                    args.legendText = label;
                if ('text' in args)
                    args.text = label;
            }
        };
        var mapDataSource = React.useMemo(function () {
            return exports.unCountries.map(function (row) { return (__assign(__assign({}, row), { Status: String(row.Country) === String(selectedCountry) ? 'Active' : 'In-Active' })); });
        }, [selectedCountry]);
        var mapKey = "".concat(selectedCountry, "-").concat(selectedYear, "-").concat(selectedMonth);
        return (React.createElement("div", { className: "map-container" }, !worldData ? (React.createElement("div", null, "Loading map\u2026")) : (React.createElement(ej2_react_maps_1.MapsComponent, { key: mapKey, ref: mapRef, id: "sales-by-region-map", height: '100%', width: '100%', background: "transparent", tooltipDisplayMode: "MouseMove", tooltipRender: onTooltip, legendSettings: { visible: true, position: 'Bottom' }, legendRendering: onLegendRendering, load: Mapload },
            React.createElement(ej2_react_maps_1.Inject, { services: [ej2_react_maps_1.MapsTooltip, ej2_react_maps_1.Zoom, ej2_react_maps_1.Legend, ej2_react_maps_1.Selection, ej2_react_maps_1.Highlight] }),
            React.createElement(ej2_react_maps_1.LayersDirective, null,
                React.createElement(ej2_react_maps_1.LayerDirective, { dataSource: mapDataSource, shapeData: worldData, shapeDataPath: "Country", shapePropertyPath: "name", shapeSettings: {
                        fill: '#E5E5E5',
                        colorMapping: [
                            {
                                value: 'In-Active',
                                color: '#E48900'
                            },
                            {
                                color: '#028A02',
                                value: 'Active'
                            }
                        ],
                        colorValuePath: 'Status'
                    }, tooltipSettings: { visible: true, valuePath: 'Country' } }))))));
    };
    var OnTimeDeliveryRate = function () {
        var getMonthShort = function (m) { return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][Math.max(0, m - 1)] || ''; };
        var value = React.useMemo(function () {
            var _a;
            var dataSource = HealthCare.SupplierAndDistributor || [];
            if (!Array.isArray(dataSource) || dataSource.length === 0)
                return 0;
            var byCountry = dataSource[0] || {};
            var rows = Array.isArray(byCountry === null || byCountry === void 0 ? void 0 : byCountry[selectedCountry]) ? byCountry[selectedCountry] : [];
            if (!rows.length)
                return 0;
            var rowsForYear = rows.filter(function (r) { return Number(r === null || r === void 0 ? void 0 : r.year) === Number(selectedYear); });
            if (!rowsForYear.length)
                return 0;
            if (selectedMonth === 0) {
                var sum = rowsForYear.reduce(function (accumulation, r) { var _a; return accumulation + (Number((_a = r === null || r === void 0 ? void 0 : r.on_time_rate) !== null && _a !== void 0 ? _a : 0) || 0); }, 0);
                var average = sum / rowsForYear.length;
                return Math.round(average);
            }
            else {
                var monthShort_2 = getMonthShort(selectedMonth);
                var row = rowsForYear.find(function (r) { return String(r === null || r === void 0 ? void 0 : r.month) === monthShort_2; });
                var value_1 = Number((_a = row === null || row === void 0 ? void 0 : row.on_time_rate) !== null && _a !== void 0 ? _a : 0);
                return isNaN(value_1) || !isFinite(value_1) ? 0 : value_1;
            }
        }, [selectedYear, selectedMonth, selectedCountry]);
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
        return (React.createElement("div", { className: 'layout-container' },
            React.createElement(ej2_react_lineargauge_1.LinearGaugeComponent, { id: "on-time-gauge", ref: ontimeGaugeRef, load: onGaugeLoad, orientation: "Horizontal", container: { width: 24, type: 'RoundedRectangle' }, width: '100%', height: '100%' },
                React.createElement(ej2_react_lineargauge_1.Inject, { services: [ej2_react_lineargauge_1.Annotations] }),
                React.createElement(ej2_react_lineargauge_1.AxesDirective, null,
                    React.createElement(ej2_react_lineargauge_1.AxisDirective, { minimum: 0, maximum: 100, labelStyle: { font: { size: '12px' } } },
                        React.createElement(ej2_react_lineargauge_1.RangesDirective, null,
                            React.createElement(ej2_react_lineargauge_1.RangeDirective, { start: 0, end: 70, color: "#FF3B30" }),
                            React.createElement(ej2_react_lineargauge_1.RangeDirective, { start: 70, end: 85, color: "#FFE700" }),
                            React.createElement(ej2_react_lineargauge_1.RangeDirective, { start: 85, end: 100, color: "#1DC060" })),
                        React.createElement(ej2_react_lineargauge_1.PointersDirective, null,
                            React.createElement(ej2_react_lineargauge_1.PointerDirective, { value: value, type: "Bar", color: "#4b88ae" })))),
                React.createElement(ej2_react_lineargauge_1.AnnotationsDirective, null,
                    React.createElement(ej2_react_lineargauge_1.AnnotationDirective, { content: "<div style=\"font-weight:600;font-size:16px;line-height:1;\">".concat(value, "%</div>"), x: 0, y: -15, zIndex: "1", horizontalAlignment: "Center", verticalAlignment: "Far" })))));
    };
    var DefectContent = function () {
        var suppliers = ['Supplier_1', 'Supplier_2', 'Supplier_3', 'Supplier_4', 'Supplier_5'];
        var getMonthShort = function (m) {
            return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][Math.max(0, m - 1)] || '';
        };
        var data = React.useMemo(function () {
            var dataSource = HealthCare.SupplierAndDistributor || [];
            var byCountry = dataSource[0] || {};
            var rows = Array.isArray(byCountry === null || byCountry === void 0 ? void 0 : byCountry[selectedCountry]) ? byCountry[selectedCountry] : [];
            if (!rows.length)
                return suppliers.map(function (s) { return ({ x: s, y: 0 }); });
            var rowsForYear = rows.filter(function (r) { return Number(r === null || r === void 0 ? void 0 : r.year) === Number(selectedYear); });
            if (!rowsForYear.length)
                return suppliers.map(function (s) { return ({ x: s, y: 0 }); });
            if (selectedMonth === 0) {
                // Average across all months in the selected year
                return suppliers.map(function (s) {
                    var sum = rowsForYear.reduce(function (accumulation, r) { var _a; return accumulation + (Number((_a = r === null || r === void 0 ? void 0 : r[s]) !== null && _a !== void 0 ? _a : 0) || 0); }, 0);
                    var average = rowsForYear.length ? sum / rowsForYear.length : 0;
                    return { x: s, y: Math.round(average) };
                });
            }
            else {
                var monthShort_3 = getMonthShort(selectedMonth);
                var row_4 = rowsForYear.find(function (r) { return String(r === null || r === void 0 ? void 0 : r.month) === monthShort_3; });
                return suppliers.map(function (s) { var _a; return ({ x: s, y: Number((_a = row_4 === null || row_4 === void 0 ? void 0 : row_4[s]) !== null && _a !== void 0 ? _a : 0) || 0 }); });
            }
        }, [selectedCountry, selectedYear, selectedMonth]);
        var onTooltip = function (args) {
            var _a, _b, _c, _d;
            var name = selectedMonth === 0 ? "All Months \u2022 ".concat(selectedYear) : "".concat(selectedYear, " - ").concat(getMonthShort(selectedMonth));
            var x = String((_b = (_a = args === null || args === void 0 ? void 0 : args.point) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : '');
            var y = Number((_d = (_c = args === null || args === void 0 ? void 0 : args.point) === null || _c === void 0 ? void 0 : _c.y) !== null && _d !== void 0 ? _d : 0);
            args.text = "<b>".concat(x, "</b><br/>").concat(name, "<br/>Defect: <b>").concat(y, "%</b>");
        };
        var onLabelText = function (args) {
            var _a, _b, _c;
            var y = Number((_c = (_b = (_a = args) === null || _a === void 0 ? void 0 : _a.point) === null || _b === void 0 ? void 0 : _b.y) !== null && _c !== void 0 ? _c : 0);
            args.text = "".concat(y, "%");
        };
        return (React.createElement("div", { className: 'layout-container' },
            React.createElement(ej2_react_charts_1.ChartComponent, { id: "defect-by-supplier", ref: defectChartref, load: onChartLoad, primaryXAxis: {
                    valueType: 'Category',
                    majorGridLines: { width: 2 },
                    labelIntersectAction: 'Rotate45',
                    labelStyle: { size: '11px' },
                }, primaryYAxis: {
                    title: 'Defect (%)',
                    labelFormat: '{value}%',
                    lineStyle: { width: 0 },
                    majorGridLines: { width: 2 },
                }, chartArea: { border: { width: 0 } }, tooltip: { enable: true, header: '' }, tooltipRender: onTooltip, textRender: onLabelText, width: "100%", height: "100%", enableAnimation: false, legendSettings: { visible: false } },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.PolarSeries, ej2_react_charts_1.BarSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Tooltip, ej2_react_charts_1.DataLabel, ej2_react_charts_1.Legend] }),
                React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.SeriesDirective, { type: "Polar", drawType: 'Column', dataSource: data, xName: "x", yName: "y", marker: { dataLabel: { visible: true, position: 'Outer', font: { size: '10px' } } }, columnSpacing: 0.2, fill: '#FED049', cornerRadius: { bottomRight: 10, topRight: 10 }, animation: { enable: false } })))));
    };
    var DistributorContent = function () {
        var DISTRIBUTORS = ['distributor 1', 'distributor 2', 'distributor 3', 'distributor 4', 'distributor 5'];
        var getMonthShort = function (m) { return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][Math.max(0, m - 1)] || ''; };
        var data = React.useMemo(function () {
            var src = HealthCare.SupplierAndDistributor || [];
            var byCountry = src[0] || {};
            var rows = Array.isArray(byCountry === null || byCountry === void 0 ? void 0 : byCountry[selectedCountry]) ? byCountry[selectedCountry] : [];
            if (!rows.length) {
                return {
                    share: DISTRIBUTORS.map(function (_, i) { return ({ x: "Distributor ".concat(i + 1), y: 0 }); }),
                    ontime: DISTRIBUTORS.map(function (_, i) { return ({ x: "Distributor ".concat(i + 1), y: 0 }); }),
                };
            }
            var rowsForYear = rows.filter(function (r) { return Number(r === null || r === void 0 ? void 0 : r.year) === Number(selectedYear); });
            if (!rowsForYear.length) {
                return {
                    share: DISTRIBUTORS.map(function (_, i) { return ({ x: "Distributor ".concat(i + 1), y: 0 }); }),
                    ontime: DISTRIBUTORS.map(function (_, i) { return ({ x: "Distributor ".concat(i + 1), y: 0 }); }),
                };
            }
            if (selectedMonth === 0) {
                // Average across all months in the selected year for each distributor metric
                var count_2 = rowsForYear.length;
                var share_1 = DISTRIBUTORS.map(function (key, i) {
                    var sum = rowsForYear.reduce(function (acc, r) { var _a, _b, _c; return acc + Number((_c = (_b = (_a = r === null || r === void 0 ? void 0 : r[key]) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.distributor_share_pct) !== null && _c !== void 0 ? _c : 0); }, 0);
                    var avg = count_2 ? Math.round((sum / count_2) * 100) / 100 : 0;
                    return { x: "Distributor ".concat(i + 1), y: Math.round(avg) };
                });
                var ontime_1 = DISTRIBUTORS.map(function (key, i) {
                    var sum = rowsForYear.reduce(function (acc, r) { var _a, _b, _c; return acc + Number((_c = (_b = (_a = r === null || r === void 0 ? void 0 : r[key]) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.on_time_contribution_pct) !== null && _c !== void 0 ? _c : 0); }, 0);
                    var avg = count_2 ? Math.round((sum / count_2) * 100) / 100 : 0;
                    return { x: "Distributor ".concat(i + 1), y: Math.round(avg) };
                });
                return { share: share_1, ontime: ontime_1 };
            }
            // Specific month
            var mShort = getMonthShort(selectedMonth);
            var row = rowsForYear.find(function (r) { return String(r === null || r === void 0 ? void 0 : r.month) === mShort; });
            if (!row) {
                return {
                    share: DISTRIBUTORS.map(function (_, i) { return ({ x: "Distributor ".concat(i + 1), y: 0 }); }),
                    ontime: DISTRIBUTORS.map(function (_, i) { return ({ x: "Distributor ".concat(i + 1), y: 0 }); }),
                };
            }
            var share = DISTRIBUTORS.map(function (key, i) {
                var _a, _b, _c;
                return ({
                    x: "Distributor ".concat(i + 1),
                    y: Number((_c = (_b = (_a = row === null || row === void 0 ? void 0 : row[key]) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.distributor_share_pct) !== null && _c !== void 0 ? _c : 0) || 0,
                });
            });
            var ontime = DISTRIBUTORS.map(function (key, i) {
                var _a, _b, _c;
                return ({
                    x: "Distributor ".concat(i + 1),
                    y: Number((_c = (_b = (_a = row === null || row === void 0 ? void 0 : row[key]) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.on_time_contribution_pct) !== null && _c !== void 0 ? _c : 0) || 0,
                });
            });
            return { share: share, ontime: ontime };
        }, [selectedCountry, selectedYear, selectedMonth]);
        var onTooltip = function (args) {
            var _a, _b, _c, _d, _e, _f;
            var x = String((_b = (_a = args.point) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : '');
            var y = Number((_d = (_c = args.point) === null || _c === void 0 ? void 0 : _c.y) !== null && _d !== void 0 ? _d : 0);
            var name = String((_f = (_e = args.series) === null || _e === void 0 ? void 0 : _e.name) !== null && _f !== void 0 ? _f : '');
            args.text = "<b>".concat(x, "</b><br/>").concat(name, ": <b>").concat(y, "%</b>");
        };
        var onLabelText = function (args) {
            var _a, _b, _c;
            var y = Number((_c = (_b = (_a = args) === null || _a === void 0 ? void 0 : _a.point) === null || _b === void 0 ? void 0 : _b.y) !== null && _c !== void 0 ? _c : 0);
            args.text = "".concat(y, "%");
        };
        return (React.createElement("div", { className: "layout-container" },
            React.createElement(ej2_react_charts_1.ChartComponent, { id: "distributor-analysis", ref: distributorChartRef, load: onChartLoad, primaryXAxis: {
                    valueType: 'Category',
                    labelIntersectAction: 'Rotate45',
                    labelStyle: { size: '11px' },
                    interval: 1
                }, primaryYAxis: {
                    labelFormat: '{value}%',
                    lineStyle: { width: 0 },
                    majorGridLines: { width: 2 },
                    labelStyle: { color: 'transparent' },
                }, chartArea: { border: { width: 0 } }, tooltip: { enable: true, enableHighlight: true, header: '' }, tooltipRender: onTooltip, textRender: onLabelText, width: "100%", height: "100%", legendSettings: { position: 'Bottom', visible: true } },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.ColumnSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Tooltip, ej2_react_charts_1.DataLabel, ej2_react_charts_1.Legend] }),
                React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.SeriesDirective, { type: "Column", name: "On-Time Contribution %", groupName: "Distributor", dataSource: data.ontime, xName: "x", yName: "y", fill: "#f7dfbbff", columnWidth: 0.7, columnSpacing: 0.15, marker: { dataLabel: { visible: true, position: 'Outer', font: { size: '10px' } } }, animation: { enable: false } }),
                    React.createElement(ej2_react_charts_1.SeriesDirective, { type: "Column", name: "Distributor Share %", groupName: "Distributor", dataSource: data.share, xName: "x", yName: "y", fill: "#14C38E", columnWidth: 0.35, columnSpacing: 0.15, marker: { dataLabel: { visible: true, position: 'Outer', font: { size: '10px' } } }, animation: { enable: false } })))));
    };
    var SalesDistribution = function () {
        var getMonthShort = function (m) { return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][Math.max(0, m - 1)] || ''; };
        var distributorColors = ['#EFF48E', '#E48900', '#CDC733', '#14C38E', '#028A02'];
        var ratingColorMap = {
            'Hospitals': distributorColors[0],
            'Pharmacies': distributorColors[1],
            'Self Care': distributorColors[2],
            'Distributors': distributorColors[3],
            'Others': distributorColors[4]
        };
        var data = React.useMemo(function () {
            var dataSource = HealthCare.SupplierAndDistributor || [];
            var byCountry = dataSource[0] || {};
            var rows = Array.isArray(byCountry === null || byCountry === void 0 ? void 0 : byCountry[selectedCountry]) ? byCountry[selectedCountry] : [];
            if (!rows.length)
                return [];
            var rowsForYear = rows.filter(function (r) { return Number(r === null || r === void 0 ? void 0 : r.year) === Number(selectedYear); });
            if (!rowsForYear.length)
                return [];
            var keys = ['hospital_usd', 'pharmacies_usd', 'selfcare_usd', 'distributor_usd', 'others_usd'];
            var labels = {
                hospital_usd: 'Hospitals',
                pharmacies_usd: 'Pharmacies',
                selfcare_usd: 'Self Care',
                distributor_usd: 'Distributors',
                others_usd: 'Others'
            };
            if (selectedMonth === 0) {
                var sums_3 = {
                    hospital_usd: 0,
                    pharmacies_usd: 0,
                    selfcare_usd: 0,
                    distributor_usd: 0,
                    others_usd: 0
                };
                rowsForYear.forEach(function (r) {
                    keys.forEach(function (k) {
                        var _a;
                        var value = Number((_a = r === null || r === void 0 ? void 0 : r[k]) !== null && _a !== void 0 ? _a : 0);
                        if (!isNaN(value) && isFinite(value))
                            sums_3[k] += value;
                    });
                });
                return keys.map(function (k) { return ({ x: labels[k], y: Math.round(sums_3[k]) }); });
            }
            else {
                var monthShort_4 = getMonthShort(selectedMonth);
                var row_5 = rowsForYear.find(function (r) { return String(r === null || r === void 0 ? void 0 : r.month) === monthShort_4; });
                if (!row_5)
                    return [];
                return keys.map(function (k) { var _a; return ({ x: labels[k], y: Number((_a = row_5 === null || row_5 === void 0 ? void 0 : row_5[k]) !== null && _a !== void 0 ? _a : 0) || 0 }); });
            }
        }, [selectedCountry, selectedYear, selectedMonth]);
        var coloredData = React.useMemo(function () {
            return (data || []).map(function (d) {
                var _a;
                return (__assign(__assign({}, d), { color: (_a = ratingColorMap[d.x]) !== null && _a !== void 0 ? _a : '#999999' }));
            });
        }, [data]);
        var onTooltip = function (args) {
            var _a, _b, _c, _d;
            var x = String((_b = (_a = args === null || args === void 0 ? void 0 : args.point) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : '');
            var y = Number((_d = (_c = args === null || args === void 0 ? void 0 : args.point) === null || _c === void 0 ? void 0 : _c.y) !== null && _d !== void 0 ? _d : 0);
            var title = selectedMonth === 0 ? "All Months \u2022 ".concat(selectedYear) : "".concat(selectedYear, " - ").concat(getMonthShort(selectedMonth));
            args.text = "<b>".concat(title, "</b><br/>").concat(x, ": <b>").concat(formatCurrency(y), "</b>");
        };
        var onLabelText = function (args) {
            var _a, _b;
            var y = Number((_b = (_a = args === null || args === void 0 ? void 0 : args.point) === null || _a === void 0 ? void 0 : _a.y) !== null && _b !== void 0 ? _b : 0);
            args.text = formatCurrency(y);
        };
        return (React.createElement("div", { className: 'layout-container' },
            React.createElement(ej2_react_charts_1.AccumulationChartComponent, { id: "sales-distribution-pie", load: onAccumulationLoad, ref: SalesDistributionChartRef, legendSettings: { visible: true, position: 'Bottom' }, tooltip: { enable: true }, tooltipRender: onTooltip, textRender: onLabelText, enableSmartLabels: true, center: { x: '50%', y: '50%' }, width: "100%", height: "100%" },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.PieSeries, ej2_react_charts_1.AccumulationLegend, ej2_react_charts_1.AccumulationTooltip, ej2_react_charts_1.AccumulationDataLabel] }),
                React.createElement(ej2_react_charts_1.AccumulationSeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.AccumulationSeriesDirective, { type: "Pie", dataSource: coloredData, xName: "x", yName: "y", startAngle: 0, endAngle: 360, explode: false, pointColorMapping: "color", dataLabel: { visible: true, name: 'x', position: 'Outside', connectorStyle: { length: '10px', width: 1 } }, animation: { enable: false } })))));
    };
    var ChannelContent = function () {
        var ChannelColors = ['#F7EC09', '#14C38E', '#CDC733', '#77E4D4', '#E48900', '#EFF48E'];
        var getMonthShort = function (m) { return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][Math.max(0, m - 1)] || ''; };
        var KEYS = ['Direct_visit', 'Instagram', 'Facebook', 'youtube', 'twitter', 'google_ads'];
        var LABELS = {
            Direct_visit: 'Direct Visit',
            Instagram: 'Instagram',
            Facebook: 'Facebook',
            youtube: 'YouTube',
            twitter: 'Twitter',
            google_ads: 'Google Ads'
        };
        // Fixed color mapping per channel label → color
        var channelColorMap = {
            'Direct Visit': ChannelColors[1],
            'Instagram': ChannelColors[0],
            'Facebook': ChannelColors[2],
            'YouTube': ChannelColors[3],
            'Twitter': ChannelColors[4],
            'Google Ads': ChannelColors[5],
        };
        var data = React.useMemo(function () {
            var dataSource = HealthCare.SupplierAndDistributor || [];
            var byCountry = dataSource[0] || {};
            var rows = Array.isArray(byCountry === null || byCountry === void 0 ? void 0 : byCountry[selectedCountry]) ? byCountry[selectedCountry] : [];
            if (!rows.length)
                return [];
            var rowsForYear = rows.filter(function (r) { return Number(r === null || r === void 0 ? void 0 : r.year) === Number(selectedYear); });
            if (!rowsForYear.length)
                return [];
            if (selectedMonth === 0) {
                var sums_4 = {
                    Direct_visit: 0,
                    Instagram: 0,
                    Facebook: 0,
                    youtube: 0,
                    twitter: 0,
                    google_ads: 0
                };
                rowsForYear.forEach(function (r) {
                    KEYS.forEach(function (k) {
                        var _a;
                        var value = Number((_a = r === null || r === void 0 ? void 0 : r[k]) !== null && _a !== void 0 ? _a : 0);
                        if (!isNaN(value) && isFinite(value))
                            sums_4[k] += value;
                    });
                });
                return KEYS.map(function (k) { return ({ x: LABELS[k], y: Math.round(sums_4[k]) }); });
            }
            else {
                var monthShort_5 = getMonthShort(selectedMonth);
                var row_6 = rowsForYear.find(function (r) { return String(r === null || r === void 0 ? void 0 : r.month) === monthShort_5; });
                if (!row_6)
                    return [];
                return KEYS.map(function (k) { var _a; return ({ x: LABELS[k], y: Number((_a = row_6 === null || row_6 === void 0 ? void 0 : row_6[k]) !== null && _a !== void 0 ? _a : 0) || 0 }); });
            }
        }, [selectedCountry, selectedYear, selectedMonth]);
        var coloredData = React.useMemo(function () {
            return (data || []).map(function (d) {
                var _a;
                return (__assign(__assign({}, d), { color: (_a = channelColorMap[d.x]) !== null && _a !== void 0 ? _a : '#9E9E9E' }));
            });
        }, [data]);
        var onTooltip = function (args) {
            var _a, _b, _c, _d;
            var x = String((_b = (_a = args === null || args === void 0 ? void 0 : args.point) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : '');
            var y = Number((_d = (_c = args === null || args === void 0 ? void 0 : args.point) === null || _c === void 0 ? void 0 : _c.y) !== null && _d !== void 0 ? _d : 0);
            var title = selectedMonth === 0
                ? "All Months \u2022 ".concat(selectedYear)
                : "".concat(selectedYear, " - ").concat(getMonthShort(selectedMonth));
            args.text = "<b>".concat(title, "</b><br/>").concat(x, ": <b>").concat(formatCurrency(y), "</b>");
        };
        var onLabelText = function (args) {
            var _a, _b;
            var y = Number((_b = (_a = args === null || args === void 0 ? void 0 : args.point) === null || _a === void 0 ? void 0 : _a.y) !== null && _b !== void 0 ? _b : 0);
            args.text = formatCurrency(y);
        };
        return (React.createElement("div", { className: 'layout-container' },
            React.createElement(ej2_react_charts_1.AccumulationChartComponent, { id: "channel-donut", ref: channelChartRef, load: onAccumulationLoad, legendSettings: { visible: true, position: 'Bottom' }, tooltip: { enable: true }, tooltipRender: onTooltip, textRender: onLabelText, enableSmartLabels: true, center: { x: '50%', y: '50%' }, width: "100%", height: "100%" },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.PieSeries, ej2_react_charts_1.AccumulationLegend, ej2_react_charts_1.AccumulationTooltip, ej2_react_charts_1.AccumulationDataLabel] }),
                React.createElement(ej2_react_charts_1.AccumulationSeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.AccumulationSeriesDirective, { type: "Pie", dataSource: coloredData, xName: "x", yName: "y", pointColorMapping: "color", innerRadius: "60%", startAngle: 0, endAngle: 360, explode: false, animation: { enable: false }, dataLabel: { visible: true, position: 'Outside', connectorStyle: { length: '10px', width: 1 } }, borderRadius: 10, border: { width: 4, color: '#ffffff' } })))));
    };
    return (React.createElement("div", { className: "Container" },
        React.createElement("div", { className: 'e-card layout-header' },
            React.createElement("div", { className: 'layout-title' }, "Regional and Channel Analysis"),
            React.createElement("div", null, filterContent())),
        React.createElement("div", null,
            React.createElement(ej2_react_layouts_1.DashboardLayoutComponent, { id: "dashboard_chart", ref: regionRef, style: { height: '85vh', width: '100%', zIndex: 1 }, columns: 8, cellAspectRatio: 1, cellSpacing: [10, 10], allowResizing: false, allowDragging: false, mediaQuery: "(max-width:950px)" },
                React.createElement(ej2_react_layouts_1.PanelsDirective, null,
                    React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 4, sizeY: 3, row: 0, col: 0, header: "<div>Sales by Channel</div>", content: ChannelContent }),
                    React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 4, sizeY: 2, row: 3, col: 4, header: "<div>On Time Delivery Analysis</div>", content: OnTimeDeliveryRate }),
                    React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 4, sizeY: 3, row: 3, col: 0, header: "<div>Supplier's Defect Analysis</div>", content: DefectContent }),
                    React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 4, sizeY: 3, row: 6, col: 4, header: "<div>Top Distributors</div>", content: DistributorContent }),
                    React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 4, sizeY: 3, row: 6, col: 0, header: "<div>Sales Distribution</div>", content: SalesDistribution }),
                    React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 4, sizeY: 4, row: 0, col: 4, header: "<div>Sales by Region</div>", content: SalesByRegion }))))));
};
var Dashboard4 = function (_a) {
    var selectedYear = _a.selectedYear, selectedMonth = _a.selectedMonth, onYearChange = _a.onYearChange, onMonthChange = _a.onMonthChange;
    var cellSpacing = [10, 10];
    var monthRef = (0, react_1.useRef)(null);
    var ratingRef = (0, react_1.useRef)(null);
    var paymentChartRef = (0, react_1.useRef)(null);
    var returnChartRef = (0, react_1.useRef)(null);
    var soldVsReturnChartRef = (0, react_1.useRef)(null);
    var conversionGaugeRef = (0, react_1.useRef)(null);
    var customerRef = (0, react_1.useRef)(null);
    var totalCustomerRef = (0, react_1.useRef)(null);
    var years = [2023, 2024, 2025];
    var months = [
        { text: 'All (Yearly)', value: 0 },
        { text: 'January', value: 1 },
        { text: 'February', value: 2 },
        { text: 'March', value: 3 },
        { text: 'April', value: 4 },
        { text: 'May', value: 5 },
        { text: 'June', value: 6 },
        { text: 'July', value: 7 },
        { text: 'August', value: 8 },
        { text: 'September', value: 9 },
        { text: 'October', value: 10 },
        { text: 'November', value: 11 },
        { text: 'December', value: 12 },
    ];
    React.useEffect(function () {
        var timer;
        var refreshAll = function () {
            clearTimeout(timer);
            timer = setTimeout(function () {
                var _a, _b, _c, _d, _e, _f, _g;
                (_a = customerRef.current) === null || _a === void 0 ? void 0 : _a.refresh();
                (_b = ratingRef.current) === null || _b === void 0 ? void 0 : _b.refresh();
                (_c = paymentChartRef.current) === null || _c === void 0 ? void 0 : _c.refresh();
                (_d = returnChartRef.current) === null || _d === void 0 ? void 0 : _d.refresh();
                (_e = soldVsReturnChartRef.current) === null || _e === void 0 ? void 0 : _e.refresh();
                (_f = conversionGaugeRef.current) === null || _f === void 0 ? void 0 : _f.refresh();
                (_g = totalCustomerRef.current) === null || _g === void 0 ? void 0 : _g.refresh();
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
    var onCreated = function (e) {
        setTimeout(function () {
            var _a;
            (_a = customerRef.current) === null || _a === void 0 ? void 0 : _a.refresh();
        }, 500);
    };
    var getMonthShort = function (m) { return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][Math.max(0, m - 1)] || ''; };
    var getNewVisitors = function (year, month) {
        var _a;
        var rows = HealthCare.CustomerInfo.filter(function (r) { return r.Year === year; });
        if (month === 0)
            return rows.reduce(function (s, r) { var _a; return s + ((_a = r.NewVisitors) !== null && _a !== void 0 ? _a : 0); }, 0);
        var row = rows.find(function (r) { return r.Month === month; });
        return (_a = row === null || row === void 0 ? void 0 : row.NewVisitors) !== null && _a !== void 0 ? _a : 0;
    };
    var getConvertedVisitors = function (year, month) {
        var _a;
        var rows = HealthCare.CustomerInfo.filter(function (r) { return r.Year === year; });
        if (month === 0)
            return rows.reduce(function (s, r) { var _a; return s + ((_a = r.ConvertedCustomer) !== null && _a !== void 0 ? _a : 0); }, 0);
        var row = rows.find(function (r) { return r.Month === month; });
        return (_a = row === null || row === void 0 ? void 0 : row.ConvertedCustomer) !== null && _a !== void 0 ? _a : 0;
    };
    var getTotalCustomer = function (year, month) {
        var initialCustomerValue = 1850;
        var sum = HealthCare.CustomerInfo.reduce(function (accumulation, item) {
            var _a;
            var include = item.Year < year || (item.Year === year && (month === 0 ? true : item.Month <= month));
            return include ? accumulation + ((_a = item.ConvertedCustomer) !== null && _a !== void 0 ? _a : 0) : accumulation;
        }, 0);
        return initialCustomerValue + sum;
    };
    var getCustomerLoyality = function (year, month) {
        var _a, _b;
        var rowsForYear = (_b = (_a = HealthCare.CustomerInfo) === null || _a === void 0 ? void 0 : _a.filter(function (r) { return r.Year === year; })) !== null && _b !== void 0 ? _b : [];
        if (!rowsForYear.length)
            return 0;
        // Helper to compute the score for a single row
        var score = function (r) {
            var _a, _b;
            var total = Number((_a = r.TotalOrder) !== null && _a !== void 0 ? _a : 0);
            var converted = Number((_b = r.ConvertedCustomer) !== null && _b !== void 0 ? _b : 0);
            return (total - converted) / 10;
        };
        if (month === 0) {
            // Average across all months available for the year
            var sum = rowsForYear.reduce(function (accumulation, r) { return accumulation + score(r); }, 0);
            var average = sum / rowsForYear.length;
            return Math.round(average * 100) / 100;
        }
        else {
            // CustomerInfo uses numeric Month (1..12)
            var row = rowsForYear.find(function (r) { return r.Month === month; });
            if (!row)
                return 0;
            var val = score(row);
            return Math.round(val * 100) / 100;
        }
    };
    var totalCustGrowth = React.useMemo(function () {
        var previousYear = selectedYear - 1;
        var current = getTotalCustomer(selectedYear, selectedMonth);
        var previous = getTotalCustomer(previousYear, selectedMonth === 0 ? 0 : selectedMonth);
        if (!previous || previous <= 0)
            return { percentage: 0, positive: current >= 0, previousYear: previousYear };
        var percentage = ((current - previous) / previous) * 100;
        return { percentage: percentage, positive: percentage >= 0, previousYear: previousYear };
    }, [selectedYear, selectedMonth]);
    var newCustGrowth = React.useMemo(function () {
        var previousYear = selectedYear - 1;
        var current = getConvertedVisitors(selectedYear, selectedMonth);
        var previous = getConvertedVisitors(previousYear, selectedMonth === 0 ? 0 : selectedMonth);
        if (!previous || previous <= 0)
            return { percentage: 0, positive: current >= 0, previousYear: previousYear };
        var percentage = ((current - previous) / previous) * 100;
        return { percentage: percentage, positive: percentage >= 0, previousYear: previousYear };
    }, [selectedYear, selectedMonth]);
    var newVisitorGrowth = React.useMemo(function () {
        var previousYear = selectedYear - 1;
        var current = getNewVisitors(selectedYear, selectedMonth);
        var previous = getNewVisitors(previousYear, selectedMonth === 0 ? 0 : selectedMonth);
        if (!previous || previous <= 0)
            return { percentage: 0, positive: current >= 0, previousYear: previousYear };
        var percentage = ((current - previous) / previous) * 100;
        return { percentage: percentage, positive: percentage >= 0, previousYear: previousYear };
    }, [selectedYear, selectedMonth]);
    var loyaltyGrowth = React.useMemo(function () {
        var previousYear = selectedYear - 1;
        var current = getCustomerLoyality(selectedYear, selectedMonth);
        var previous = getCustomerLoyality(previousYear, selectedMonth === 0 ? 0 : selectedMonth);
        if (!previous || previous <= 0)
            return { percentage: 0, positive: current >= 0, previousYear: previousYear };
        var percentage = ((current - previous) / previous) * 100;
        return { percentage: percentage, positive: percentage >= 0, previousYear: previousYear };
    }, [selectedYear, selectedMonth]);
    var totalCustomerSpark = React.useMemo(function () {
        var YEARS = [2023, 2024, 2025];
        return YEARS.map(function (yy) { return ({ x: String(yy), y: getTotalCustomer(yy, 0) }); });
    }, []);
    var totalCustomer = function () {
        var _a;
        return React.createElement("div", { className: "kpi-total-card" },
            React.createElement("div", { className: "spark-container" },
                React.createElement("div", { className: "card-label" }, "Total Customer"),
                React.createElement("div", { className: "card-totalvalue" }, kpis.totalCustomer),
                React.createElement("div", { className: "growth-indicator" },
                    React.createElement("span", { style: { color: totalCustGrowth.positive ? '#16a34a' : '#dc2626', fontWeight: 600 } },
                        totalCustGrowth.positive ? '▲' : '▼',
                        " ",
                        Math.abs(totalCustGrowth.percentage).toFixed(1),
                        "%"),
                    React.createElement("span", { className: "growth-indicator-label" },
                        "vs ",
                        selectedMonth === 0
                            ? totalCustGrowth.previousYear
                            : "".concat((_a = months.find(function (m) { return m.value === selectedMonth; })) === null || _a === void 0 ? void 0 : _a.text, " ").concat(totalCustGrowth.previousYear)))),
            React.createElement("div", { style: { height: '50%' } },
                React.createElement("div", null,
                    React.createElement(ej2_react_charts_1.SparklineComponent, { id: "total-customer-spark", ref: totalCustomerRef, type: "Pie", dataSource: totalCustomerSpark, xName: "x", yName: "y", valueType: "Category", width: "60px", height: "85px", lineWidth: 2, palette: sparklinePalette, tooltipSettings: { visible: true, format: 'Year: ${x}<br/>Customer: ${y}' } },
                        React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.SparklineTooltip] })))));
    };
    var newVisitors = function () {
        var _a;
        return (React.createElement("div", { id: "main-div" },
            React.createElement("div", { id: 'title-card' }, "New Visitors"),
            React.createElement("div", { id: "card-value" }, kpis.newVisitors),
            React.createElement("div", { className: "growth-indicator" },
                React.createElement("span", { style: { color: newVisitorGrowth.positive ? '#16a34a' : '#dc2626', fontWeight: 600 } },
                    newVisitorGrowth.positive ? '▲' : '▼',
                    " ",
                    Math.abs(newVisitorGrowth.percentage).toFixed(1),
                    "%"),
                React.createElement("span", { className: "growth-indicator-label" },
                    "vs ",
                    selectedMonth === 0
                        ? newVisitorGrowth.previousYear
                        : "".concat((_a = months.find(function (m) { return m.value === selectedMonth; })) === null || _a === void 0 ? void 0 : _a.text, " ").concat(newVisitorGrowth.previousYear)))));
    };
    var customerLoyality = function () {
        var _a;
        return (React.createElement("div", { id: "main-div" },
            React.createElement("div", { id: 'title-card' }, "Customer Loyality Score"),
            React.createElement("div", { id: "card-value" }, kpis.customerLoyality),
            React.createElement("div", { className: "growth-indicator" },
                React.createElement("span", { style: { color: loyaltyGrowth.positive ? '#16a34a' : '#dc2626', fontWeight: 600 } },
                    loyaltyGrowth.positive ? '▲' : '▼',
                    " ",
                    Math.abs(loyaltyGrowth.percentage).toFixed(1),
                    "%"),
                React.createElement("span", { className: "growth-indicator-label" },
                    "vs ",
                    selectedMonth === 0
                        ? loyaltyGrowth.previousYear
                        : "".concat((_a = months.find(function (m) { return m.value === selectedMonth; })) === null || _a === void 0 ? void 0 : _a.text, " ").concat(loyaltyGrowth.previousYear)))));
    };
    var newCustomers = function () {
        var _a;
        return (React.createElement("div", { id: "main-div" },
            React.createElement("div", { id: 'title-card' }, "New Customers"),
            React.createElement("div", { id: "card-value" }, kpis.newCustomers),
            React.createElement("div", { className: "growth-indicator" },
                React.createElement("span", { style: { color: newCustGrowth.positive ? '#16a34a' : '#dc2626', fontWeight: 600 } },
                    newCustGrowth.positive ? '▲' : '▼',
                    " ",
                    Math.abs(newCustGrowth.percentage).toFixed(1),
                    "%"),
                React.createElement("span", { className: "growth-indicator-label" },
                    "vs ",
                    selectedMonth === 0
                        ? newCustGrowth.previousYear
                        : "".concat((_a = months.find(function (m) { return m.value === selectedMonth; })) === null || _a === void 0 ? void 0 : _a.text, " ").concat(newCustGrowth.previousYear)))));
    };
    var kpis = React.useMemo(function () {
        var year = selectedYear;
        var month = selectedMonth;
        return {
            totalCustomer: getTotalCustomer(year, month),
            newVisitors: getNewVisitors(year, month),
            customerLoyality: getCustomerLoyality(year, month),
            newCustomers: getConvertedVisitors(year, month)
        };
    }, [selectedYear, selectedMonth]);
    var filterContent = function () { return (React.createElement("div", { style: { display: 'flex', gap: 12, alignItems: 'center', paddingLeft: 12, paddingRight: 12 } },
        React.createElement("div", { className: 'dropdown-minwidth' },
            React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { dataSource: years, value: selectedYear, placeholder: "Select year", change: onYearChange, popupHeight: "200px", width: 100 })),
        React.createElement("div", { className: 'dropdown-minwidth' },
            React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { ref: monthRef, dataSource: months, fields: { text: 'text', value: 'value' }, value: selectedMonth, placeholder: "Select month", change: onMonthChange, popupHeight: "240px", width: 140 })))); };
    var RatingInfo = function () {
        var _a;
        var dataSource = ((_a = HealthCare) === null || _a === void 0 ? void 0 : _a.RatingInfo) || [];
        if (!dataSource.length) {
            return React.createElement("div", { style: { padding: 15 } }, "No rating data");
        }
        var RatingInfoColors = ['#F7EC09', '#14C38E', '#CDC733', '#77E4D4', '#E48900', '#EFF48E'];
        var STAR_KEYS = ['5 Star', '4 Star', '3 Star', '2 Star', '1 Star', 'No Ratings'];
        var colorByStar = {
            '5 Star': RatingInfoColors[0],
            '4 Star': RatingInfoColors[1],
            '3 Star': RatingInfoColors[2],
            '2 Star': RatingInfoColors[3],
            '1 Star': RatingInfoColors[4],
            'No Ratings': RatingInfoColors[5],
        };
        var monthShort = selectedMonth === 0 ? null : getMonthShort(selectedMonth);
        var rowsForYear = dataSource.filter(function (r) { return Number(r === null || r === void 0 ? void 0 : r.Year) === Number(selectedYear); });
        var data = (function () {
            if (!rowsForYear.length)
                return [];
            if (selectedMonth === 0) {
                var sums_5 = {};
                STAR_KEYS.forEach(function (k) { return (sums_5[k] = 0); });
                rowsForYear.forEach(function (r) {
                    STAR_KEYS.forEach(function (k) {
                        var _a;
                        sums_5[k] += Number((_a = r === null || r === void 0 ? void 0 : r[k]) !== null && _a !== void 0 ? _a : 0);
                    });
                });
                return STAR_KEYS.map(function (k) { return ({ x: k, y: sums_5[k] }); });
            }
            else {
                var row_7 = rowsForYear.find(function (r) { return String(r === null || r === void 0 ? void 0 : r.Month).toLowerCase() === String(monthShort).toLowerCase(); });
                if (!row_7)
                    return [];
                return STAR_KEYS.map(function (k) { var _a; return ({ x: k, y: Number((_a = row_7 === null || row_7 === void 0 ? void 0 : row_7[k]) !== null && _a !== void 0 ? _a : 0) }); });
            }
        })();
        var coloredData = data.map(function (d) {
            var _a;
            return (__assign(__assign({}, d), { color: (_a = colorByStar[d.x]) !== null && _a !== void 0 ? _a : '#999999' }));
        });
        var onLabelText = function (args) {
            var _a, _b;
            var y = Number((_b = (_a = args.point) === null || _a === void 0 ? void 0 : _a.y) !== null && _b !== void 0 ? _b : 0);
            args.text = String(y);
        };
        var onTooltip = function (args) {
            var _a, _b, _c, _d;
            var x = String((_b = (_a = args.point) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : '');
            var y = Number((_d = (_c = args.point) === null || _c === void 0 ? void 0 : _c.y) !== null && _d !== void 0 ? _d : 0);
            var name = selectedMonth === 0 ? "All Months \u2022 ".concat(selectedYear) : "".concat(selectedYear, " - ").concat(monthShort);
            args.text = "<b>".concat(name, "</b><br/>").concat(x, ": <b>").concat(y, "</b>");
        };
        var seriesName = selectedMonth === 0 ? "All Months \u2022 ".concat(selectedYear) : "".concat(selectedYear, " - ").concat(monthShort);
        return (React.createElement("div", { className: 'layout-container' },
            React.createElement(ej2_react_charts_1.AccumulationChartComponent, { id: "ratings-donut", ref: ratingRef, load: onAccumulationLoad, legendSettings: { visible: true, position: 'Bottom' }, tooltip: { enable: true }, tooltipRender: onTooltip, textRender: onLabelText, enableSmartLabels: true, center: { x: '50%', y: '50%' }, width: "100%", height: "100%" },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.PieSeries, ej2_react_charts_1.AccumulationLegend, ej2_react_charts_1.AccumulationTooltip, ej2_react_charts_1.AccumulationDataLabel] }),
                React.createElement(ej2_react_charts_1.AccumulationSeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.AccumulationSeriesDirective, { dataSource: coloredData, xName: "x", yName: "y", pointColorMapping: "color", innerRadius: "60%", startAngle: 0, endAngle: 360, explode: false, name: seriesName, dataLabel: { visible: true, position: 'Outside', connectorStyle: { length: '10px', width: 1 } }, animation: { enable: false }, borderRadius: 10, border: { width: 4, color: '#ffffff' } })))));
    };
    var PaymentMethods = function () {
        var _a;
        var dataSource = ((_a = HealthCare) === null || _a === void 0 ? void 0 : _a.PaymentMethods) || [];
        if (!dataSource.length) {
            return React.createElement("div", { style: { padding: 15 } }, "No payment methods data");
        }
        var PaymentColors = ['#EFF48E', '#E48900', '#CDC733', '#14C38E', '#028A02', '#77E4D4'];
        var KEYS = ['Credit Card', 'Debit Card', 'Digital Wallet', 'Mobile Payment', 'Cash', 'Others'];
        var colorByPayment = {
            'Credit Card': PaymentColors[0],
            'Debit Card': PaymentColors[1],
            'Digital Wallet': PaymentColors[2],
            'Mobile Payment': PaymentColors[3],
            'Cash': PaymentColors[4],
            'Others': PaymentColors[5],
        };
        var monthShort = selectedMonth === 0 ? null : getMonthShort(selectedMonth);
        var data = (function () {
            var rowsForYear = dataSource.filter(function (r) { return Number(r === null || r === void 0 ? void 0 : r.Year) === Number(selectedYear); });
            if (!rowsForYear.length)
                return [];
            if (selectedMonth === 0) {
                var sums_6 = {};
                KEYS.forEach(function (k) { return (sums_6[k] = 0); });
                rowsForYear.forEach(function (r) {
                    KEYS.forEach(function (k) {
                        var _a;
                        sums_6[k] += Number((_a = r === null || r === void 0 ? void 0 : r[k]) !== null && _a !== void 0 ? _a : 0);
                    });
                });
                return KEYS.map(function (k) { return ({ x: k, y: sums_6[k] }); });
            }
            else {
                var row_8 = rowsForYear.find(function (r) { return String(r === null || r === void 0 ? void 0 : r.Month).toLowerCase() === String(monthShort).toLowerCase(); });
                if (!row_8)
                    return [];
                return KEYS.map(function (k) { var _a; return ({ x: k, y: Number((_a = row_8 === null || row_8 === void 0 ? void 0 : row_8[k]) !== null && _a !== void 0 ? _a : 0) }); });
            }
        })();
        var coloredData = data.map(function (d) {
            var _a;
            return (__assign(__assign({}, d), { color: (_a = colorByPayment[d.x]) !== null && _a !== void 0 ? _a : '#999999' }));
        });
        var onLabelText = function (args) {
            var _a, _b;
            var y = Number((_b = (_a = args.point) === null || _a === void 0 ? void 0 : _a.y) !== null && _b !== void 0 ? _b : 0);
            args.text = formatCurrency(y);
        };
        var onTooltip = function (args) {
            var _a, _b, _c, _d;
            var x = String((_b = (_a = args.point) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : '');
            var y = Number((_d = (_c = args.point) === null || _c === void 0 ? void 0 : _c.y) !== null && _d !== void 0 ? _d : 0);
            var title = selectedMonth === 0 ? "All Months \u2022 ".concat(selectedYear) : "".concat(selectedYear, " - ").concat(monthShort);
            args.text = "<b>".concat(title, "</b><br/>").concat(x, ": <b>").concat(formatCurrency(y), "</b>");
        };
        var seriesName = selectedMonth === 0 ? "All Months \u2022 ".concat(selectedYear) : "".concat(selectedYear, " - ").concat(monthShort);
        return (React.createElement("div", { className: 'layout-container' },
            React.createElement(ej2_react_charts_1.AccumulationChartComponent, { id: "payment-methods-donut", load: onAccumulationLoad, ref: paymentChartRef, legendSettings: { visible: true, position: 'Bottom' }, tooltip: { enable: true }, tooltipRender: onTooltip, textRender: onLabelText, enableSmartLabels: true, center: { x: '50%', y: '50%' }, width: "100%", height: "100%" },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.PieSeries, ej2_react_charts_1.AccumulationLegend, ej2_react_charts_1.AccumulationTooltip, ej2_react_charts_1.AccumulationDataLabel] }),
                React.createElement(ej2_react_charts_1.AccumulationSeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.AccumulationSeriesDirective, { dataSource: coloredData, xName: "x", yName: "y", startAngle: 0, endAngle: 360, explode: false, name: seriesName, pointColorMapping: 'color', dataLabel: { visible: true, position: 'Outside', connectorStyle: { length: '10px', width: 1 } }, animation: { enable: false } })))));
    };
    var returnMethod = function () {
        // Return reasons we care about (exact keys from JSON)
        var REASONS = [
            'Defective or Damaged Product',
            'Wrong Item Shipped',
            'Size or Fit Issues',
            "Product Doesn't Match Description",
            'Late Delivery',
            'Product Performance Issues',
            'Packaging Dissatisfaction'
        ];
        var dataSource = HealthCare.ReturnInfo || [];
        if (!dataSource.length) {
            return React.createElement("div", { style: { padding: 15 } }, "No return reason data");
        }
        var monthName = selectedMonth === 0 ? null : monthShort[selectedMonth - 1];
        // Build chart data
        var buildData = function () {
            var rowsForYear = dataSource.filter(function (r) { return r.Year === selectedYear; });
            if (!rowsForYear.length)
                return [];
            if (selectedMonth === 0) {
                // Average across all available months for the selected year
                var count_3 = rowsForYear.length;
                var sums_7 = {
                    'Defective or Damaged Product': 0,
                    'Wrong Item Shipped': 0,
                    'Size or Fit Issues': 0,
                    "Product Doesn't Match Description": 0,
                    'Late Delivery': 0,
                    'Product Performance Issues': 0,
                    'Packaging Dissatisfaction': 0
                };
                rowsForYear.forEach(function (r) {
                    REASONS.forEach(function (k) {
                        var _a;
                        sums_7[k] += Number((_a = r[k]) !== null && _a !== void 0 ? _a : 0);
                    });
                });
                return REASONS
                    .map(function (k) { return ({ x: k, y: +(sums_7[k] / count_3).toFixed(2) }); }) // average and keep 2 decimals
                    .sort(function (a, b) { return b.y - a.y; });
            }
            else {
                // Specific month
                var row_9 = rowsForYear.find(function (r) { return r.Month === monthName; });
                if (!row_9)
                    return [];
                return REASONS
                    .map(function (k) { var _a; return ({ x: k, y: +Number((_a = row_9[k]) !== null && _a !== void 0 ? _a : 0).toFixed(2) }); })
                    .sort(function (a, b) { return b.y - a.y; });
            }
        };
        var data = buildData();
        // Format data labels as percentages
        var onLabelText = function (args) {
            var _a, _b;
            var y = (_b = (_a = args.point) === null || _a === void 0 ? void 0 : _a.y) !== null && _b !== void 0 ? _b : 0;
            args.text = "".concat(Number(y).toFixed(2), "%");
        };
        return (React.createElement("div", { className: 'layout-container' },
            React.createElement(ej2_react_charts_1.ChartComponent, { id: "return-reasons-bar", ref: returnChartRef, load: onChartLoad, primaryXAxis: {
                    valueType: 'Category',
                    majorGridLines: { width: 0 },
                    labelIntersectAction: 'Trim',
                    labelStyle: { size: '11px' }
                }, primaryYAxis: {
                    labelFormat: '{value}',
                    minimum: 0,
                    maximum: 100,
                    interval: 10,
                    lineStyle: { width: 0 },
                    majorTickLines: { width: 0 },
                    minorTickLines: { width: 0 }
                }, chartArea: { border: { width: 0 } }, margin: { left: 10, right: 10, top: 10, bottom: 10 }, tooltip: { enable: true, header: '' }, tooltipRender: function (args) {
                    var _a, _b;
                    var p = args.point;
                    var reason = String((_a = p === null || p === void 0 ? void 0 : p.x) !== null && _a !== void 0 ? _a : '');
                    var y = Number((_b = p === null || p === void 0 ? void 0 : p.y) !== null && _b !== void 0 ? _b : 0);
                    args.text = "<b>".concat(reason, "</b><br/>").concat(y.toFixed(2), "%");
                }, textRender: onLabelText, legendSettings: { visible: false }, width: "100%", height: "100%" },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.BarSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Tooltip, ej2_react_charts_1.DataLabel, ej2_react_charts_1.Legend] }),
                React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.SeriesDirective, { type: "Bar", dataSource: data, xName: "x", yName: "y", name: selectedMonth === 0
                            ? "Avg Return Reasons \u2022 ".concat(selectedYear)
                            : "".concat(selectedYear, " - ").concat(monthName), marker: { dataLabel: { visible: true, position: 'Outer' } }, cornerRadius: { topLeft: 6, topRight: 6, bottomLeft: 6, bottomRight: 6 }, opacity: 0.9, fill: "#61c5ceff", animation: { enable: false } })))));
    };
    var conversionRate = function () {
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
        var getConversionRate = function (year, month) {
            var _a, _b, _c;
            var rows = (_b = (_a = HealthCare.CustomerInfo) === null || _a === void 0 ? void 0 : _a.filter(function (r) { return r.Year === year; })) !== null && _b !== void 0 ? _b : [];
            if (!rows.length)
                return 0;
            if (month === 0) {
                var average = rows.reduce(function (sum, r) { var _a; return sum + Number((_a = r.ConversionRate) !== null && _a !== void 0 ? _a : 0); }, 0) /
                    rows.length;
                return Math.round(average * 100) / 100; // 2 decimals
            }
            else {
                var row = rows.find(function (r) { return r.Month === month; });
                var val = Number((_c = row === null || row === void 0 ? void 0 : row.ConversionRate) !== null && _c !== void 0 ? _c : 0);
                return Math.round(val * 100) / 100;
            }
        };
        var value = getConversionRate(selectedYear, selectedMonth);
        var valueText = "".concat(value.toFixed(2), "%");
        var annotation = "<div style=\"font-size:16px;margin-top:5px;font-family:inherit;\">".concat(valueText, "</div>");
        return (React.createElement("div", { className: "gauge-center" },
            React.createElement(ej2_react_circulargauge_1.CircularGaugeComponent, { id: "nps-gauge", ref: conversionGaugeRef, background: "transparent", height: "100%", width: "100%", centerX: "50%", centerY: "70%", allowMargin: false, tooltip: { enable: true }, load: onGaugeLoad, legendSettings: { visible: true, position: 'Bottom', width: '70%', textStyle: { fontFamily: 'inherit', size: '12px' } } },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_circulargauge_1.Annotations, ej2_react_circulargauge_1.GaugeTooltip, ej2_react_circulargauge_1.Legend] }),
                React.createElement(ej2_react_circulargauge_1.AxesDirective, null,
                    React.createElement(ej2_react_circulargauge_1.AxisDirective, { startAngle: 270, endAngle: 90, radius: "100%", minimum: 0, maximum: 100, majorTicks: { width: 1.5, height: 12, interval: 20, offset: 35 }, lineStyle: { width: 0 }, minorTicks: { width: 0 }, labelStyle: { font: { size: '14px', fontFamily: 'inherit' }, position: 'Outside', offset: -40 } },
                        React.createElement(ej2_react_circulargauge_1.AnnotationsDirective, null,
                            React.createElement(ej2_react_circulargauge_1.AnnotationDirective, { content: annotation, angle: 0, radius: "-25%", zIndex: "1" })),
                        React.createElement(ej2_react_circulargauge_1.PointersDirective, null,
                            React.createElement(ej2_react_circulargauge_1.PointerDirective, { value: value, radius: "70%", pointerWidth: 5, needleEndWidth: 2, cap: { radius: 8, border: { width: 2 } } })),
                        React.createElement(ej2_react_circulargauge_1.RangesDirective, null,
                            React.createElement(ej2_react_circulargauge_1.RangeDirective, { start: 0, end: 40, radius: "80%", color: "#FF3B30", startWidth: 40, endWidth: 40, legendText: "Poor" }),
                            React.createElement(ej2_react_circulargauge_1.RangeDirective, { start: 40, end: 60, radius: "80%", color: "#EFA006", startWidth: 40, endWidth: 40, legendText: "Fair" }),
                            React.createElement(ej2_react_circulargauge_1.RangeDirective, { start: 60, end: 75, radius: "80%", color: "#FFE700", startWidth: 40, endWidth: 40, legendText: "Good" }),
                            React.createElement(ej2_react_circulargauge_1.RangeDirective, { start: 75, end: 100, radius: "80%", color: "#1DC060", startWidth: 40, endWidth: 40, legendText: "Excellent" })))))));
    };
    var SoldVsReturnTrend = function () {
        var _a, _b, _c;
        var src = ((_a = HealthCare) === null || _a === void 0 ? void 0 : _a.ReturnInfo) || [];
        if (!src.length) {
            return React.createElement("div", { style: { padding: 15 } }, "No return data");
        }
        var monthShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var monthName = selectedMonth === 0 ? null : monthShort[selectedMonth - 1];
        var soldSeries = [];
        var returnSeries = [];
        var rowsForYear = src.filter(function (r) { return Number(r.Year) === Number(selectedYear); });
        if (selectedMonth === 0) {
            // All months for the year
            var rows = rowsForYear.slice(); // already ordered by month in your data
            soldSeries = rows.map(function (r) { var _a; return ({ x: String(r.Month), y: Number((_a = r.SoldPct) !== null && _a !== void 0 ? _a : 0) }); });
            returnSeries = rows.map(function (r) { var _a; return ({ x: String(r.Month), y: Number((_a = r.ReturnPct) !== null && _a !== void 0 ? _a : 0) }); });
        }
        else {
            // One month only (two bars)
            var row = rowsForYear.find(function (r) { return String(r.Month) === monthName; });
            if (row) {
                soldSeries = [{ x: String(row.Month), y: Number((_b = row.SoldPct) !== null && _b !== void 0 ? _b : 0) }];
                returnSeries = [{ x: String(row.Month), y: Number((_c = row.ReturnPct) !== null && _c !== void 0 ? _c : 0) }];
            }
        }
        // Format data-label text as percentages
        var onDataLabelText = function (args) {
            var _a, _b;
            var y = Number((_b = (_a = args.point) === null || _a === void 0 ? void 0 : _a.y) !== null && _b !== void 0 ? _b : 0);
            args.text = "".concat(y.toFixed(0), "%");
        };
        return (React.createElement("div", { style: { width: '100%', height: '100%', padding: 15, boxSizing: 'border-box' } },
            React.createElement(ej2_react_charts_1.ChartComponent, { id: "sold-vs-return-trend", ref: soldVsReturnChartRef, load: onChartLoad, primaryXAxis: {
                    valueType: 'Category',
                    labelIntersectAction: 'Trim',
                    majorGridLines: { width: 0 },
                    labelStyle: { size: '11px' }
                }, primaryYAxis: {
                    minimum: 0,
                    maximum: 100,
                    interval: 20,
                    labelFormat: '{value}%',
                    lineStyle: { width: 0 },
                    majorTickLines: { width: 0 },
                    minorTickLines: { width: 0 },
                    majorGridLines: { width: 1 }
                }, chartArea: { border: { width: 0 } }, tooltip: { enable: true, header: '' }, legendSettings: { visible: true, position: 'Bottom' }, width: "100%", height: "100%", textRender: onDataLabelText },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.ColumnSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Tooltip, ej2_react_charts_1.DataLabel, ej2_react_charts_1.Legend] }),
                React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.SeriesDirective, { name: "Sold %", type: "Column", dataSource: soldSeries, xName: "x", yName: "y", fill: "#CDC733", marker: { dataLabel: { visible: true, position: 'Outer' } }, animation: { enable: false } }),
                    React.createElement(ej2_react_charts_1.SeriesDirective, { name: "Return %", type: "Column", dataSource: returnSeries, xName: "x", yName: "y", fill: "#E48900", marker: { dataLabel: { visible: true, position: 'Outer' } }, animation: { enable: false } })))));
    };
    return (React.createElement("div", null,
        React.createElement("div", { className: "Container" },
            React.createElement("div", { className: 'e-card layout-header' },
                React.createElement("div", { className: 'layout-title' }, "Customer Analysis"),
                React.createElement("div", null, filterContent())),
            React.createElement("div", null,
                React.createElement(ej2_react_layouts_1.DashboardLayoutComponent, { id: "dashboard_customer", ref: customerRef, style: { height: '85vh', width: '100%', zIndex: 1 }, columns: 8, cellAspectRatio: 90 / 100, cellSpacing: cellSpacing, allowResizing: false, allowDragging: false, mediaQuery: "(max-width:950px)", created: onCreated },
                    React.createElement(ej2_react_layouts_1.PanelsDirective, null,
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 0, col: 0, content: totalCustomer }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 0, col: 2, content: newVisitors }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 0, col: 4, content: newCustomers }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 0, col: 6, content: customerLoyality }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 8, sizeY: 3, row: 2, col: 0, header: "<div>Sold vs Return Analysis</div>", content: SoldVsReturnTrend }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 4, sizeY: 3, row: 5, col: 0, header: "<div>Conversion Rate</div>", content: conversionRate }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 4, sizeY: 3, row: 5, col: 4, header: "<div>Reason for Return</div>", content: returnMethod }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 4, sizeY: 3, row: 8, col: 0, header: "<div>Customer Satisfaction Analysis</div>", content: RatingInfo }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 4, sizeY: 3, row: 8, col: 4, header: "<div>Transactional Sources</div>", content: PaymentMethods })))))));
};
var HealthcareDashboard = /** @class */ (function (_super) {
    __extends(HealthcareDashboard, _super);
    function HealthcareDashboard(props) {
        var _this = _super.call(this, props) || this;
        _this.TOOLBAR_HEIGHT = 50;
        _this.DOCK_SIZE = 60;
        _this.OPEN_WIDTH = 240;
        _this.allowSidebarOpen = false;
        _this.onSidebarCreated = function () {
            if (_this.sidebarRef.current) {
                _this.sidebarRef.current.hide(); // ensure hidden
            }
        };
        _this.onYearChange = function (e) {
            var newYear = Number(e.value);
            if (!Number.isNaN(newYear)) {
                _this.setState({
                    selectedYear: newYear,
                    selectedMonth: 0,
                });
            }
        };
        _this.onMonthChange = function (e) {
            var newMonth = Number(e.value);
            if (!Number.isNaN(newMonth)) {
                _this.setState({ selectedMonth: newMonth });
            }
        };
        _this.titleTemplate = '<div class="dashboard-title">Healthcare Sales Dashboard</div>';
        _this.onToolbarClicked = function (args) {
            var _a;
            if (args.item.tooltipText === 'Menu') {
                _this.allowSidebarOpen = true;
                (_a = _this.sidebarRef.current) === null || _a === void 0 ? void 0 : _a.toggle();
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
            var _a = _this.state, selectedId = _a.selectedId, selectedYear = _a.selectedYear, selectedMonth = _a.selectedMonth;
            var commonProps = {
                selectedYear: selectedYear,
                selectedMonth: selectedMonth,
                onYearChange: _this.onYearChange,
                onMonthChange: _this.onMonthChange
            };
            switch (selectedId) {
                case 'Overview':
                    return React.createElement(Dashboard1, __assign({}, commonProps));
                case 'Product-Performance':
                    return React.createElement(Dashboard2, __assign({}, commonProps));
                case 'Regional-Insights':
                    return React.createElement(Dashboard3, __assign({}, commonProps));
                case 'Customer':
                    return React.createElement(Dashboard4, __assign({}, commonProps));
                default:
                    return React.createElement(Dashboard1, __assign({}, commonProps));
            }
        };
        _this.sidebarRef = React.createRef();
        _this.state = {
            selectedId: 'Overview',
            selectedYear: 2025,
            selectedMonth: 0,
            isDocked: true,
        };
        return _this;
    }
    HealthcareDashboard.prototype.withTooltip = function (title, node) {
        return (React.createElement(ej2_react_popups_1.TooltipComponent, { content: title, position: this.state.isDocked ? 'RightCenter' : 'BottomCenter', openDelay: 250, closeDelay: 0, showTipPointer: true }, node));
    };
    HealthcareDashboard.prototype.render = function () {
        var _this = this;
        var isActive = function (id) { return (_this.state.selectedId === id ? 'active' : ''); };
        return (React.createElement("div", null,
            React.createElement("div", { className: "control-section" },
                React.createElement("div", { className: "hc-root" },
                    React.createElement("div", { className: 'dockToolbar' },
                        React.createElement(ej2_react_navigations_2.ToolbarComponent, { cssClass: "dockToolbar", id: "dockToolbar", height: "".concat(this.TOOLBAR_HEIGHT, "px"), clicked: this.onToolbarClicked },
                            React.createElement(ej2_react_navigations_2.ItemsDirective, null,
                                React.createElement(ej2_react_navigations_2.ItemDirective, { prefixIcon: "e-menu", tooltipText: "Menu" }),
                                React.createElement(ej2_react_navigations_2.ItemDirective, { template: this.titleTemplate })))),
                    React.createElement("div", { className: "hc-workarea" },
                        React.createElement(ej2_react_navigations_1.SidebarComponent, { id: "dockHealthcareSideDash", ref: this.sidebarRef, enableDock: true, width: "".concat(this.OPEN_WIDTH, "px"), dockSize: "".concat(this.DOCK_SIZE, "px"), closeOnDocumentClick: false, enableGestures: false, className: "cs-sidebar", type: "Push", target: ".hc-content", open: this.onSidebarOpen, close: this.onSidebarClose, created: this.onSidebarCreated },
                            React.createElement("div", { className: "sidebar-content" },
                                this.withTooltip('Overview Analysis', React.createElement("div", { className: "hc-nav-item ".concat(isActive('Overview')), onClick: function () { return _this.setState({ selectedId: 'Overview' }); } },
                                    React.createElement("span", { className: "e-icons e-home", "aria-hidden": "true" }),
                                    React.createElement("span", { className: "hc-nav-text" }, "Overview Analysis"))),
                                this.withTooltip('Product Performance', React.createElement("div", { className: "hc-nav-item ".concat(isActive('Product-Performance')), onClick: function () { return _this.setState({ selectedId: 'Product-Performance' }); } },
                                    React.createElement("span", { className: "e-icons e-chart", "aria-hidden": "true" }),
                                    React.createElement("span", { className: "hc-nav-text" }, "Product Performance"))),
                                this.withTooltip('Regional and Channel', React.createElement("div", { className: "hc-nav-item ".concat(isActive('Regional-Insights')), onClick: function () { return _this.setState({ selectedId: 'Regional-Insights' }); } },
                                    React.createElement("span", { className: "e-icons e-location", "aria-hidden": "true" }),
                                    React.createElement("span", { className: "hc-nav-text" }, "Regional and Channel"))),
                                this.withTooltip('Customer Analysis', React.createElement("div", { className: "hc-nav-item ".concat(isActive('Customer')), onClick: function () { return _this.setState({ selectedId: 'Customer' }); } },
                                    React.createElement("span", { className: "e-icons e-people", "aria-hidden": "true" }),
                                    React.createElement("span", { className: "hc-nav-text" }, "Customer Analysis"))))),
                        React.createElement("div", { className: "hc-content" },
                            React.createElement("div", { className: "healthcare-page", style: { padding: '16px', background: '#ffffff' } }, this.renderDashboard()))))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "The Health Care Sales Analytics Dashboard provides a complete view of revenue, product performance, customer behavior, and operational efficiency. It delivers real\u2011time insights into sales trends, category growth, regional performance, and customer engagement. With interactive filters and intuitive visualizations, teams can easily explore KPIs, identify opportunities, and make data\u2011driven decisions. Built specifically for healthcare retail and distribution, it transforms complex datasets into clear, actionable intelligence."))));
    };
    return HealthcareDashboard;
}(sample_base_1.SampleBase));
exports.HealthcareDashboard = HealthcareDashboard;
