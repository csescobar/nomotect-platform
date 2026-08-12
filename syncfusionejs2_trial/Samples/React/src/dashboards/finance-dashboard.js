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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinanceDashboard = void 0;
var React = require("react");
var financeDataSource = require("./data.json");
var ej2_react_navigations_1 = require("@syncfusion/ej2-react-navigations");
var ej2_react_layouts_1 = require("@syncfusion/ej2-react-layouts");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
require("./finance-dashboard.css");
var ej2_react_charts_1 = require("@syncfusion/ej2-react-charts");
var react_1 = require("react");
var ej2_react_circulargauge_1 = require("@syncfusion/ej2-react-circulargauge");
var sample_base_1 = require("../common/sample-base");
var ej2_react_popups_1 = require("@syncfusion/ej2-react-popups");
require("./dashboard-bold-icon.css");
require("./dashboard-light-icon.css");
var financeData = financeDataSource;
var cellSpacing = [10, 10];
var items = [
    { id: 'overview', text: 'Overview', iconCss: 'e-icons e-chart' },
    { id: 'profitloss', text: 'Financial Performance', iconCss: 'e-icons e-agenda-date-range' },
    { id: 'cashflow', text: 'Cash Flow and Liquidity', iconCss: 'e-icons e-people' },
];
var financialAvailableYears = [2021, 2022, 2023, 2024, 2025];
var formatCurrency = function (n) {
    return new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 2, notation: "compact" }).format(n !== null && n !== void 0 ? n : 0);
};
var companyShareData = (_b = (_a = financeData === null || financeData === void 0 ? void 0 : financeData.companyshares) === null || _a === void 0 ? void 0 : _a.companyshares_quarterly) !== null && _b !== void 0 ? _b : [];
var profitShareData = (_c = financeData === null || financeData === void 0 ? void 0 : financeData.incomeStatement.series) !== null && _c !== void 0 ? _c : [];
var currentAssetIds = ["cash", "ar", "inventory"];
var currentLiabilityIds = ["ap", "accrued", "shortDebt"];
var debtIds = ["shortDebt", "longDebt"];
var companyShareGroupedByYear = companyShareData.reduce(function (acc, item) {
    var _a;
    var _b;
    ((_a = acc[_b = item.year]) !== null && _a !== void 0 ? _a : (acc[_b] = [])).push(item);
    return acc;
}, {});
var companyIncomeByYear = profitShareData.reduce(function (acc, item) {
    acc[item.year] = item;
    return acc;
}, {});
var quartersData = companyShareGroupedByYear[2025];
var sumItems = function (items) {
    if (items === void 0) { items = []; }
    return items.reduce(function (s, x) { var _a; return s + ((_a = x.amount) !== null && _a !== void 0 ? _a : 0); }, 0);
};
var sumOneQuarter = function (q) { return sumItems(q); };
var sumCurrentAssetItems = function (items) {
    if (items === void 0) { items = []; }
    return items.filter(function (a) { return currentAssetIds.includes(a.id); }).reduce(function (s, x) { var _a; return s + ((_a = x.amount) !== null && _a !== void 0 ? _a : 0); }, 0);
};
var sumCurrentAssetQuarter = function (q) { return sumCurrentAssetItems(q); };
var sumCurrentLiabilitiesItems = function (items) {
    if (items === void 0) { items = []; }
    return items.filter(function (a) { return currentLiabilityIds.includes(a.id); }).reduce(function (s, x) { var _a; return s + ((_a = x.amount) !== null && _a !== void 0 ? _a : 0); }, 0);
};
var sumCurrentLiabilitiesQuarter = function (q) { return sumCurrentLiabilitiesItems(q); };
var sumDebtItems = function (items) {
    if (items === void 0) { items = []; }
    return items.filter(function (a) { return debtIds.includes(a.id); }).reduce(function (s, x) { var _a; return s + ((_a = x.amount) !== null && _a !== void 0 ? _a : 0); }, 0);
};
var sumDebtQuarter = function (q) { return sumDebtItems(q); };
var sumInvesmentItems = function (items) {
    if (items === void 0) { items = []; }
    return items.reduce(function (s, x) { var _a; return s + ((_a = x.amount) !== null && _a !== void 0 ? _a : 0); }, 0);
};
var sumInvesmentQuarter = function (q) { return sumInvesmentItems(q); };
var sumInventoryItems = function (items) {
    var _a, _b;
    if (items === void 0) { items = []; }
    return (_b = (_a = items.find(function (a) { return a.id === "inventory"; })) === null || _a === void 0 ? void 0 : _a.amount) !== null && _b !== void 0 ? _b : 0;
};
var sumInventoryQuarter = function (q) { return sumInventoryItems(q); };
//stored the total amount based on the each year.
var quarterAllSharesByYear = Object.fromEntries(Object.entries(companyShareGroupedByYear).map(function (_a) {
    var year = _a[0], qObj = _a[1];
    var totals = {
        Assets: Math.round(qObj.reduce(function (s, q) { return s + sumOneQuarter(q.assets); }, 0)),
        Liabilities: Math.round(qObj.reduce(function (s, q) { return s + sumOneQuarter(q.liabilities); }, 0)),
        Equity: Math.round(qObj.reduce(function (s, q) { return s + sumOneQuarter(q.equity); }, 0)),
        Debt: Math.round(qObj.reduce(function (s, q) { return s + sumDebtQuarter(q.liabilities); }, 0)),
        CurrentAssets: Math.round(qObj.reduce(function (s, q) { return s + sumCurrentAssetQuarter(q.assets); }, 0)),
        CurrentLiabilities: Math.round(qObj.reduce(function (s, q) { return s + sumCurrentLiabilitiesQuarter(q.liabilities); }, 0)),
        InitialInvestment: Math.round(qObj.reduce(function (s, q) { return s + sumInvesmentQuarter(q.equity); }, 0)),
        InventoryAmount: Math.round(qObj.reduce(function (s, q) { return s + sumInventoryQuarter(q.assets); }, 0)),
    };
    return [Number(year), totals];
}));
// accessing the cash inflow data from json file
var cashInflowData = ((_e = (_d = financeData.cashInFlows) === null || _d === void 0 ? void 0 : _d.series) !== null && _e !== void 0 ? _e : [])
    .flatMap(function (s) {
    var _a;
    return ((_a = s.monthlyseries) !== null && _a !== void 0 ? _a : []).map(function (m) { return ({
        yearAmount: Number(s.amount) || 0,
        year: m.year,
        month: m.month,
        monthamount: Number(m.amount) || 0,
        monthlabel: m.label,
        yearlabel: s.label
    }); });
});
var cashInFlowGroupCollection = cashInflowData.reduce(function (acc, item) {
    var _a;
    var idx = Number(item.year) - 1;
    ((_a = acc[idx]) !== null && _a !== void 0 ? _a : (acc[idx] = [])).push(item);
    return acc;
}, []);
var cashInFlowTotals = cashInFlowGroupCollection.map(function (group) {
    var _a, _b;
    var sum = 0;
    for (var i = 0; i < 12; i++) {
        sum += (_b = (_a = group[i]) === null || _a === void 0 ? void 0 : _a.monthamount) !== null && _b !== void 0 ? _b : 0;
    }
    return Math.round(sum);
});
// accessing the cash outflow data from json file
var cashOutflowData = ((_g = (_f = financeData.cashOutFlows) === null || _f === void 0 ? void 0 : _f.series) !== null && _g !== void 0 ? _g : [])
    .flatMap(function (s) {
    var _a;
    return ((_a = s.monthlyseries) !== null && _a !== void 0 ? _a : []).map(function (m) { return ({
        yearAmount: Number(s.amount) || 0,
        year: m.year,
        month: m.month,
        monthamount: Number(m.amount) || 0,
        monthlabel: m.label,
        yearlabel: s.label
    }); });
});
var cashOutFlowGroupCollection = cashOutflowData.reduce(function (acc, item) {
    var _a;
    var idx = Number(item.year) - 1;
    ((_a = acc[idx]) !== null && _a !== void 0 ? _a : (acc[idx] = [])).push(item);
    return acc;
}, []);
var cashOutFlowTotals = cashOutFlowGroupCollection.map(function (group) {
    var _a, _b;
    var sum = 0;
    for (var i = 0; i < 12; i++) {
        sum += (_b = (_a = group[i]) === null || _a === void 0 ? void 0 : _a.monthamount) !== null && _b !== void 0 ? _b : 0;
    }
    return Math.round(sum);
});
// calculate the total amount of assests, liabilities and equities and represent in the chart.
var getAmount = function (items, id) { var _a, _b; return (_b = (_a = items === null || items === void 0 ? void 0 : items.find(function (x) { return x.id === id; })) === null || _a === void 0 ? void 0 : _a.amount) !== null && _b !== void 0 ? _b : 0; };
var sum = function (o) {
    return Object.values(o).reduce(function (a, b) { return a + b; }, 0);
};
var buildChartData = function (quarters) {
    return quarters.map(function (q) {
        var assets = {
            cash: getAmount(q.assets, "cash"),
            ar: getAmount(q.assets, "ar"),
            inventory: getAmount(q.assets, "inventory"),
            ppe: getAmount(q.assets, "ppe"),
            otherAssets: getAmount(q.assets, "otherAssets"),
        };
        var liabilities = {
            ap: getAmount(q.liabilities, "ap"),
            accrued: getAmount(q.liabilities, "accrued"),
            shortDebt: getAmount(q.liabilities, "shortDebt"),
            longDebt: getAmount(q.liabilities, "longDebt"),
        };
        var equity = {
            commonStock: getAmount(q.equity, "commonStock"),
            apic: getAmount(q.equity, "apic"),
            retained: getAmount(q.equity, "retained"),
        };
        return {
            // create a nice x-axis label
            x: "".concat(q.quarter, " ").concat(q.year),
            period: q.quarter,
            year: q.year,
            assets: sum(assets),
            liabilities: sum(liabilities),
            equity: sum(equity)
        };
    });
};
function getYearEndCashFromShares(year) {
    var _a, _b, _c, _d, _e, _f;
    var quarters = (_a = companyShareGroupedByYear[year]) !== null && _a !== void 0 ? _a : [];
    if (!quarters || quarters.length === 0)
        return null;
    // pick the quarter with the highest quarter number (handles "Quarter 1", "Q1", etc.)
    var qNum = function (qLabel) {
        var m = String(qLabel).match(/(\d+)/);
        return m ? Number(m[1]) : 0;
    };
    var best = quarters[0];
    var bestN = qNum((_c = (_b = best.quarter) !== null && _b !== void 0 ? _b : best.period) !== null && _c !== void 0 ? _c : '');
    for (var _i = 0, quarters_1 = quarters; _i < quarters_1.length; _i++) {
        var q = quarters_1[_i];
        var n = qNum((_e = (_d = q.quarter) !== null && _d !== void 0 ? _d : q.period) !== null && _e !== void 0 ? _e : '');
        if (n > bestN) {
            best = q;
            bestN = n;
        }
    }
    var val = getAmount((_f = best.assets) !== null && _f !== void 0 ? _f : [], 'cash');
    return typeof val === 'number' ? Math.round(val) : null;
}
var cashBalances = [];
for (var i = 0; i < financialAvailableYears.length; i++) {
    var year = financialAvailableYears[i];
    var yearEndCash = getYearEndCashFromShares(year);
    if (yearEndCash !== null && !Number.isNaN(yearEndCash)) {
        // Use the Q4 / last-quarter cash from companyshares as the canonical year-end balance
        cashBalances.push(Math.round(yearEndCash));
        continue;
    }
    // Fallback: compute closing by aggregating monthly nets (older logic)
    var openingYearAmount = (_k = (_j = (_h = cashInFlowGroupCollection[i]) === null || _h === void 0 ? void 0 : _h[0]) === null || _j === void 0 ? void 0 : _j.yearAmount) !== null && _k !== void 0 ? _k : 0;
    var running = (i === 0 ? 0 : ((_l = cashBalances[i - 1]) !== null && _l !== void 0 ? _l : 0)) + openingYearAmount;
    for (var j = 0; j < 12; j++) {
        var inflow = (_p = (_o = (_m = cashInFlowGroupCollection[i]) === null || _m === void 0 ? void 0 : _m[j]) === null || _o === void 0 ? void 0 : _o.monthamount) !== null && _p !== void 0 ? _p : 0;
        var outflow = (_s = (_r = (_q = cashOutFlowGroupCollection[i]) === null || _q === void 0 ? void 0 : _q[j]) === null || _r === void 0 ? void 0 : _r.monthamount) !== null && _s !== void 0 ? _s : 0;
        running += inflow - outflow;
    }
    cashBalances.push(Math.round(running));
}
function formatCompactCurrencySignificant(n, significantDigits) {
    if (significantDigits === void 0) { significantDigits = 3; }
    return new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: 'USD',
        notation: 'compact',
        maximumSignificantDigits: significantDigits,
    }).format(n !== null && n !== void 0 ? n : 0);
}
var getAxisLabelFromTarget = function (targetId) {
    if (!targetId)
        return { text: '', year: null };
    // 1) try direct element lookup by id
    var el = document.getElementById(String(targetId));
    if (el) {
        var text = (el.textContent || el.innerText || '').trim();
        var m = text.match(/(\d{4})/);
        return { text: text, year: m ? Number(m[1]) : null };
    }
    // 2) fallback: if id encodes label index (e.g. "..._AxisLabel_1"), pick element by index
    var idxMatch = String(targetId).match(/_AxisLabel_(\d+)/i);
    if (idxMatch) {
        var idx = Number(idxMatch[1]);
        var labels = Array.from(document.querySelectorAll("#income-expense-year-column .e-axis-label, #income-expense-year-column .e-text"));
        var found = labels[idx];
        if (found) {
            var text = (found.textContent || found.innerText || '').trim();
            var m = text.match(/(\d{4})/);
            return { text: text, year: m ? Number(m[1]) : null };
        }
    }
    return { text: '', year: null };
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
var sparklinePalette = ["#05B3DA", "#E77A16", "#9204EA", "#6200EE", "#B1212D", "#82C100"];
// Dashboard 1 (Overview) with title + droddown with years
var OverviewDashboard = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    var selectedYear = _a.selectedYear, onYearChange = _a.onYearChange;
    var overviewRef = React.useRef(null);
    var sparkPieRef = React.useRef(null);
    var debtAssetRatioChartRef = React.useRef(null);
    var assetLiabilitiesPieChartRef = React.useRef(null);
    var assetLiabilitiesQuaterlyChartRef = React.useRef(null);
    React.useEffect(function () {
        var timer;
        var refreshAll = function () {
            clearTimeout(timer);
            timer = setTimeout(function () {
                var _a, _b, _c, _d, _e;
                (_a = overviewRef.current) === null || _a === void 0 ? void 0 : _a.refresh();
                (_b = sparkPieRef.current) === null || _b === void 0 ? void 0 : _b.refresh();
                (_c = debtAssetRatioChartRef.current) === null || _c === void 0 ? void 0 : _c.refresh();
                (_d = assetLiabilitiesPieChartRef.current) === null || _d === void 0 ? void 0 : _d.refresh();
                (_e = assetLiabilitiesQuaterlyChartRef.current) === null || _e === void 0 ? void 0 : _e.refresh();
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
    var selectedDropdownYear = selectedYear;
    var _o = React.useState('root'), drillLevel = _o[0], setDrillLevel = _o[1];
    var _p = React.useState([]), pieData = _p[0], setPieData = _p[1];
    var _q = React.useState(''), title = _q[0], setTitle = _q[1];
    var debtValues = [
        { value: 'Debt by Asset Ratio' },
        { value: 'Debt by Equity Ratio' },
    ];
    var _r = (0, react_1.useState)([
        'Debt by Asset Ratio',
        'Debt by Equity Ratio'
    ]), selectedRatio = _r[0], setSelectedRatio = _r[1];
    var debtRatiosData = [
        { year: '2021', debtToAsset: quarterAllSharesByYear[2021].Debt / quarterAllSharesByYear[2021].Assets, debtToEquity: quarterAllSharesByYear[2021].Debt / quarterAllSharesByYear[2021].Equity },
        { year: '2022', debtToAsset: quarterAllSharesByYear[2022].Debt / quarterAllSharesByYear[2022].Assets, debtToEquity: quarterAllSharesByYear[2022].Debt / quarterAllSharesByYear[2022].Equity },
        { year: '2023', debtToAsset: quarterAllSharesByYear[2023].Debt / quarterAllSharesByYear[2023].Assets, debtToEquity: quarterAllSharesByYear[2023].Debt / quarterAllSharesByYear[2023].Equity },
        { year: '2024', debtToAsset: quarterAllSharesByYear[2024].Debt / quarterAllSharesByYear[2024].Assets, debtToEquity: quarterAllSharesByYear[2024].Debt / quarterAllSharesByYear[2024].Equity },
        { year: '2025', debtToAsset: quarterAllSharesByYear[2025].Debt / quarterAllSharesByYear[2025].Assets, debtToEquity: quarterAllSharesByYear[2025].Debt / quarterAllSharesByYear[2025].Equity },
    ];
    var quickSeries = [
        { period: '2021', value: 1.90 },
        { period: '2022', value: 2.29 },
        { period: '2023', value: 2.29 },
        { period: '2024', value: 2.28 },
        { period: '2025', value: 2.28 }
    ];
    var currentSeries = [
        { period: '2021', value: 2.74 },
        { period: '2022', value: 3.32 },
        { period: '2023', value: 3.31 },
        { period: '2024', value: 3.3 },
        { period: '2025', value: 3.3 }
    ];
    var equitySeries = [
        { period: '2021', value: 0.7 },
        { period: '2022', value: 0.7 },
        { period: '2023', value: 0.7 },
        { period: '2024', value: 0.7 },
        { period: '2025', value: 0.7 }
    ];
    var chartData = React.useMemo(function () { return buildChartData(quartersData); }, [quartersData]);
    var availableQuarters = (0, react_1.useMemo)(function () { return Array.from(new Set(chartData.map(function (d) { return d.period; }))); }, [chartData]);
    var _s = (0, react_1.useState)(availableQuarters), selectedQuarters = _s[0], setSelectedQuarters = _s[1];
    var financialFilteredData = (0, react_1.useMemo)(function () { return selectedQuarters.length ? chartData.filter(function (d) { return selectedQuarters.includes(d.period); }) : chartData; }, [selectedQuarters, chartData]);
    var debtAssetEquityMaxValue = Math.max.apply(Math, debtRatiosData.flatMap(function (d) { return [d.debtToAsset, d.debtToEquity]; }));
    var npvCurrent = ((cashInFlowTotals[financialAvailableYears.indexOf(selectedDropdownYear)]
        - cashOutFlowTotals[financialAvailableYears.indexOf(selectedDropdownYear)]) / Math.pow(1 + 0.10, financialAvailableYears.indexOf(selectedDropdownYear) + 1));
    var npvPrevious = ((cashInFlowTotals[financialAvailableYears.indexOf(selectedDropdownYear - 1)]
        - cashOutFlowTotals[financialAvailableYears.indexOf(selectedDropdownYear - 1)]) / Math.pow(1 + 0.10, financialAvailableYears.indexOf(selectedDropdownYear) + 1));
    var npvPctChange = (npvCurrent - npvPrevious) / (npvPrevious) * 100;
    var npvPctFormatted = npvPctChange === null ? '—' : (npvPctChange === Infinity ? '∞' : "".concat(npvPctChange.toFixed(1), "%"));
    var npvIsUp = npvPrevious !== null ? npvCurrent > npvPrevious : false;
    // build NPV pie data for all years (keeps existing logic)
    var paletteAll = ['#73467D', '#D989B5', '#7DE5ED', '#F675A8', '#FFADBC', '#87A2FB', '#EF9A53', '#C539B4', '#645CAA'];
    var smallPieData = financialAvailableYears.map(function (y, i) {
        var idx = financialAvailableYears.indexOf(y);
        var pv = Math.round((cashInFlowTotals[idx]
            - cashOutFlowTotals[idx]) / Math.pow(1 + 0.10, idx + 1)).toFixed(2);
        return { x: String(y), y: Math.max(0, Number(pv)), color: paletteAll[i % paletteAll.length] };
    }).filter(function (d) { return d.y > 0; });
    var computeIRR = function (cashFlows, guess, maxIter, tol) {
        if (guess === void 0) { guess = 0.1; }
        if (maxIter === void 0) { maxIter = 100; }
        if (tol === void 0) { tol = 1e-6; }
        var rate = guess;
        for (var i = 0; i < maxIter; i++) {
            var npv = 0;
            var der = 0;
            for (var t = 0; t < cashFlows.length; t++) {
                npv += cashFlows[t] / Math.pow(1 + rate, t);
                if (t > 0)
                    der += -t * cashFlows[t] / Math.pow(1 + rate, t + 1);
            }
            if (Math.abs(npv) < tol)
                return rate;
            if (Math.abs(der) < 1e-12)
                break;
            rate = rate - npv / der;
            if (!isFinite(rate) || rate <= -0.9999)
                break;
        }
        // fallback: simple binary search
        var lo = -0.9999, hi = 10;
        var _loop_1 = function (i) {
            var mid = (lo + hi) / 2;
            var npvMid = cashFlows.reduce(function (s, cf, t) { return s + cf / Math.pow(1 + mid, t); }, 0);
            if (Math.abs(npvMid) < tol)
                return { value: mid };
            var npvLo = cashFlows.reduce(function (s, cf, t) { return s + cf / Math.pow(1 + lo, t); }, 0);
            if (npvLo * npvMid <= 0)
                hi = mid;
            else
                lo = mid;
        };
        for (var i = 0; i < maxIter; i++) {
            var state_1 = _loop_1(i);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        return (lo + hi) / 2;
    };
    var selIdx = financialAvailableYears.indexOf(selectedDropdownYear);
    var selIdxPrevious = financialAvailableYears.indexOf(selectedDropdownYear) - 1;
    // use a stable initial investment (first year or top-level value)
    var initialInvestment = Math.abs((_e = (_c = (_b = quarterAllSharesByYear[financialAvailableYears[selectedDropdownYear]]) === null || _b === void 0 ? void 0 : _b.InitialInvestment) !== null && _c !== void 0 ? _c : (_d = financeData === null || financeData === void 0 ? void 0 : financeData.companyshares) === null || _d === void 0 ? void 0 : _d.initialInvestment) !== null && _e !== void 0 ? _e : 0);
    var initialInvestPrevious = Math.abs((_j = (_g = (_f = quarterAllSharesByYear[financialAvailableYears[selectedDropdownYear - 1]]) === null || _f === void 0 ? void 0 : _f.InitialInvestment) !== null && _g !== void 0 ? _g : (_h = financeData === null || financeData === void 0 ? void 0 : financeData.companyshares) === null || _h === void 0 ? void 0 : _h.initialInvestment) !== null && _j !== void 0 ? _j : 0);
    var netAnnualFlows = financialAvailableYears.map(function (y, i) {
        var _a, _b;
        var inflow = Number((_a = cashInFlowTotals[i]) !== null && _a !== void 0 ? _a : 0);
        var outflow = Number((_b = cashOutFlowTotals[i]) !== null && _b !== void 0 ? _b : 0);
        return Math.round(inflow - outflow);
    });
    var cashFlows = __spreadArray([-initialInvestment], netAnnualFlows, true);
    // build cashFlows up to the selected year (year 1 => [-init, y1], year 2 => [-init, y1, y2], ...)
    var flowsUpToSelected = selIdx >= 0
        ? __spreadArray([-initialInvestment], netAnnualFlows.slice(0, selIdx + 1), true) : __spreadArray([-initialInvestment], netAnnualFlows, true);
    var flowsUpToSelectedPrevious = selIdxPrevious >= 0
        ? __spreadArray([-initialInvestment], netAnnualFlows.slice(0, (selIdxPrevious + 1)), true) : __spreadArray([-initialInvestment], netAnnualFlows, true);
    // compute IRR (decimal)
    var irrRate = computeIRR(flowsUpToSelected, 0.1);
    var irrRatePrevious = computeIRR(flowsUpToSelectedPrevious, 0.1);
    var irrPctLabel = irrRate === null ? null : irrRate * 100;
    var irrArrowUp = irrRatePrevious > irrRate;
    var irrFormatLabel = ((irrRate - irrRatePrevious) / (irrRatePrevious) * 100).toFixed(2);
    // build pie datasource: discounted contribution of each year's net flow at the IRR
    var paletteIRRAll = ['#87A2FB', '#EF9A53', '#C539B4', '#645CAA'];
    var cumulativeIrrPercents = financialAvailableYears.map(function (y, i) {
        var flows = __spreadArray([-initialInvestment], netAnnualFlows.slice(0, i + 1), true);
        var r = computeIRR(flows);
        return r === null ? null : Number((r * 100).toFixed()); // percent (can be negative)
    });
    var irrPieData = cumulativeIrrPercents
        .map(function (p, i) {
        if (p === null || !isFinite(p))
            return null;
        var absPct = Math.abs(p); // use absolute % to size pie slices (or keep sign if you prefer)
        return {
            x: String(financialAvailableYears[i]),
            y: absPct,
            text: "".concat(p.toFixed(), "%"),
            tooltipText: "IRR: ".concat(p.toFixed(), "%"),
            irrPercent: p,
            color: paletteIRRAll[i % paletteIRRAll.length]
        };
    })
        .filter(Boolean);
    var workingCapitalValue = quarterAllSharesByYear[selectedDropdownYear].CurrentAssets - quarterAllSharesByYear[selectedDropdownYear].CurrentLiabilities;
    var workingCapitalPreValue = quarterAllSharesByYear[selectedDropdownYear - 1].CurrentAssets - quarterAllSharesByYear[selectedDropdownYear - 1].CurrentLiabilities;
    var workingPctChange = ((workingCapitalValue - workingCapitalPreValue) / Math.abs(workingCapitalPreValue)) * 100;
    var workingPctFormatted = workingPctChange === null ? '—' : (workingPctChange === Infinity ? '∞' : "".concat(workingPctChange.toFixed(1), "%"));
    var workingIsUp = workingCapitalPreValue !== null ? workingCapitalValue > workingCapitalPreValue : false;
    var workingCapitalPerYear = financialAvailableYears.map(function (y, i) {
        var _a, _b, _c;
        var totals = (_a = quarterAllSharesByYear[y]) !== null && _a !== void 0 ? _a : { CurrentAssets: 0, CurrentLiabilities: 0 };
        var wc = Math.round(((_b = totals.CurrentAssets) !== null && _b !== void 0 ? _b : 0) - ((_c = totals.CurrentLiabilities) !== null && _c !== void 0 ? _c : 0));
        return { x: String(y), y: wc };
    });
    // pie datasource (only positive slices) with palette
    var paletteWC = ['#73467D', '#87A2FB', '#D989B5', '#7DE5ED', '#EF9A53'];
    var workingCapitalPieData = workingCapitalPerYear
        .map(function (d, i) { return ({ x: d.x, y: Math.max(0, d.y), color: paletteWC[i % paletteWC.length] }); })
        .filter(function (p) { return p.y > 0; });
    var quickRatioValue = (quarterAllSharesByYear[selectedDropdownYear].CurrentAssets - quarterAllSharesByYear[selectedDropdownYear].InventoryAmount) / quarterAllSharesByYear[selectedDropdownYear].CurrentLiabilities;
    var currentRatioValue = quarterAllSharesByYear[selectedDropdownYear].CurrentAssets / quarterAllSharesByYear[selectedDropdownYear].CurrentLiabilities;
    var equityRatioValue = quarterAllSharesByYear[selectedDropdownYear].Equity / quarterAllSharesByYear[selectedDropdownYear].Assets;
    var initialInvestmentValue = quarterAllSharesByYear[selectedDropdownYear].InitialInvestment;
    var initialInvestmentPrevious = quarterAllSharesByYear[selectedDropdownYear - 1].InitialInvestment;
    var initialArrowUp = initialInvestmentValue > initialInvestmentPrevious;
    var initialComparison = ((initialInvestmentValue - initialInvestmentPrevious) / initialInvestmentValue * 100).toFixed(2);
    var initialInvestmentCard = function () { return MetricInvestmentCard("Initial Investment", formatCurrency(initialInvestmentValue), initialComparison + "%", initialArrowUp); };
    var npvCard = function () { return IRRCard("Net Present Value", false, '', formatCompactCurrencySignificant(npvCurrent, 2), npvIsUp, npvPctFormatted, "npvspark", npvPrevious, npvCurrent, "#87A2FB", smallPieData, 'Year: ${x}<br/>Amount: $${y}'); };
    var irrCard = function () { return IRRCard("Internal Rate of Return", true, "Internal Rate of Return", Math.round(Number(irrPctLabel)) + '%', irrArrowUp, irrFormatLabel + '%', "irrspark", irrRatePrevious, irrRate, "#F8E9F6", irrPieData, 'Year: ${x}<br/>IRR Value: ${y} %'); };
    var networkingcapital = function () { return IRRCard("Working Capital", false, '', formatCurrency(workingCapitalValue), workingIsUp, workingPctFormatted, "networkspark", workingCapitalPreValue, workingCapitalValue, "#C539B4", workingCapitalPieData, 'Year: ${x}<br/>Amount: $${y}'); };
    // compute % change vs previous FY for a selected year
    var getPctChange = function (data, year) {
        var _a, _b, _c, _d;
        var cur = (_b = (_a = data.find(function (d) { return Number(d.period) === year; })) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : null;
        var prev = (_d = (_c = data.find(function (d) { return Number(d.period) === year - 1; })) === null || _c === void 0 ? void 0 : _c.value) !== null && _d !== void 0 ? _d : null;
        if (prev === null || cur === null || Math.abs(prev) < 1e-9) {
            return { pct: null, cur: cur, prev: prev, isGreater: null };
        }
        var diff = cur - prev;
        var pct = (diff / Math.abs(prev)) * 100;
        var EPS = 1e-6;
        var isGreater = null;
        if (diff > EPS)
            isGreater = true;
        else if (diff < -EPS)
            isGreater = false;
        else
            isGreater = null; // treat equal as neutral
        return { pct: pct, cur: cur, prev: prev, isGreater: isGreater };
    };
    var quickPctChange = getPctChange(quickSeries, selectedDropdownYear);
    var currentPctChange = getPctChange(currentSeries, selectedDropdownYear);
    var equityPctChange = getPctChange(equitySeries, selectedDropdownYear);
    var quickComparisonLabel = "".concat((_k = quickPctChange === null || quickPctChange === void 0 ? void 0 : quickPctChange.pct) === null || _k === void 0 ? void 0 : _k.toFixed(1), "%");
    var currentComparisonLabel = "".concat((_l = currentPctChange === null || currentPctChange === void 0 ? void 0 : currentPctChange.pct) === null || _l === void 0 ? void 0 : _l.toFixed(1), "%");
    var equityComparisonLabel = "".concat((_m = currentPctChange === null || currentPctChange === void 0 ? void 0 : currentPctChange.pct) === null || _m === void 0 ? void 0 : _m.toFixed(1), "%");
    var gaugeEquity = function () {
        var _a;
        return RatioCardEquity("Equity Ratio", formatCurrency(equityRatioValue), "#87A2FB", "#87A2FB", equitySeries, equityComparisonLabel, ((_a = equityPctChange === null || equityPctChange === void 0 ? void 0 : equityPctChange.isGreater) !== null && _a !== void 0 ? _a : false));
    };
    var gaugeQuick = function () {
        var _a;
        return RatioCard("Quick Ratio", formatCurrency(quickRatioValue), "#EF9A53", "#EF9A53", quickSeries, quickComparisonLabel, ((_a = quickPctChange === null || quickPctChange === void 0 ? void 0 : quickPctChange.isGreater) !== null && _a !== void 0 ? _a : false));
    };
    var gaugeCurrent = function () {
        var _a;
        return RatioCard("Current Ratio", formatCurrency(currentRatioValue), "#7DE5ED", "#7DE5ED", currentSeries, currentComparisonLabel, ((_a = currentPctChange === null || currentPctChange === void 0 ? void 0 : currentPctChange.isGreater) !== null && _a !== void 0 ? _a : false));
    };
    var RatioCardEquity = function (title, value, color, bgFill, data, comparisonvalue, isGood) {
        var chipBg = isGood ? "#dcfce7" : "#fee2e2";
        var chipText = isGood ? "#16a34a" : "#991b1b";
        var arrow = isGood ? '▲' : '▼';
        return (React.createElement("div", { id: 'main-finance-div' },
            React.createElement("div", { id: 'title-finance-card' }, title),
            React.createElement("div", { id: 'card-finance-value' }, value)));
    };
    var RatioCard = function (title, value, color, bgFill, data, comparisonvalue, isGood) {
        var chipText = isGood ? "#16a34a" : "#991b1b";
        return (React.createElement("div", { id: 'main-finance-div' },
            React.createElement("div", { id: 'title-finance-card' }, title),
            React.createElement("div", { id: 'card-finance-value' }, value),
            React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 5, marginTop: 4 } },
                React.createElement("span", { style: {
                        color: isGood ? '#16a34a' : '#dc2626',
                        fontWeight: 600
                    } },
                    isGood ? '▲' : '▼',
                    " ",
                    comparisonvalue),
                React.createElement("span", { style: { fontSize: 12 } },
                    "vs ",
                    selectedDropdownYear - 1))));
    };
    var MetricInvestmentCard = function (title, value, comparisonValue, arrowUp) {
        // const chipBg = arrowUp ? '#dcfce7' : '#fee2e2';
        var chipText = arrowUp ? '#16a34a' : '#991b1b';
        var arrow = arrowUp ? '▲' : '▼';
        return (React.createElement("div", { className: "kpi-totalcard" },
            React.createElement("div", { className: "spark-header" },
                React.createElement("div", { className: "kpi-label" }, title),
                React.createElement("div", { className: "kpi-value" }, value),
                React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 5, marginTop: 4 } },
                    React.createElement("span", { style: { color: chipText, fontWeight: 600 } },
                        arrow,
                        " ",
                        comparisonValue),
                    React.createElement("span", { style: { fontSize: 12 } },
                        "vs ",
                        selectedDropdownYear - 1)))));
    };
    var IRRCard = function (title, showtooltip, tooltipValue, value, updownarrow, comparisonvalue, sparkId, previousValue, currentValue, color, pieData, tooltipFormatValue) {
        // const chipBg = updownarrow ? '#dcfce7' : '#fee2e2';
        var chipText = updownarrow ? '#16a34a' : '#991b1b';
        var arrow = updownarrow ? '▲' : '▼';
        return (React.createElement("div", { className: "kpi-totalcard" },
            React.createElement("div", { className: "spark-header" },
                React.createElement("div", { className: "kpi-label" }, title),
                React.createElement("div", { className: "kpi-value" }, value),
                React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 5 } },
                    React.createElement("span", { style: { display: 'inline-flex', alignItems: 'center', gap: 4, color: chipText, fontSize: 12, fontWeight: 600 } },
                        React.createElement("span", { style: { fontSize: 12 } }, arrow),
                        React.createElement("span", null, comparisonvalue)),
                    React.createElement("div", { style: { fontSize: 12 } }, "vs ".concat(selectedDropdownYear - 1)))),
            React.createElement("div", { className: "spark-content", style: { width: '50%', height: '50%' } },
                React.createElement("div", { style: { marginTop: 0, width: '100%' } },
                    React.createElement(ej2_react_charts_1.SparklineComponent, { id: "".concat(sparkId, "-pie"), ref: sparkPieRef, type: "Pie", dataSource: pieData, xName: "x", yName: "y", width: "100%", height: "68px", lineWidth: 2, palette: sparklinePalette, markerSettings: { visible: ['All'], size: 2, fill: '#05B3DA' }, tooltipSettings: { visible: true, format: tooltipFormatValue } },
                        React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.SparklineTooltip] }))))));
    };
    var assetliabilities = function () {
        quartersData = companyShareGroupedByYear[selectedDropdownYear];
        var onAxisLabelRender = function (args) {
            if (args.axis && args.axis.name === 'primaryYAxis') {
                args.text = formatCurrency(Number(args.text));
            }
        };
        var computeYAxis = function (data) {
            var _a;
            if (!data || data.length === 0)
                return { minimum: 0, maximum: 100, interval: 25 };
            // pick the largest series value (safe for stacked or individual series)
            var maxVal = Math.max.apply(Math, data.map(function (d) { var _a, _b, _c; return Math.max((_a = d.assets) !== null && _a !== void 0 ? _a : 0, (_b = d.liabilities) !== null && _b !== void 0 ? _b : 0, (_c = d.equity) !== null && _c !== void 0 ? _c : 0); }));
            if (!isFinite(maxVal) || maxVal <= 0)
                return { minimum: 0, maximum: 1, interval: 1 };
            // "Nice" rounding: round max up to 1,2,5 × 10^n
            var mag = Math.pow(10, Math.floor(Math.log10(maxVal)));
            var candidates = [1, 2, 5, 10].map(function (m) { return m * mag; });
            var niceMax = (_a = candidates.find(function (c) { return c >= maxVal; })) !== null && _a !== void 0 ? _a : candidates[candidates.length - 1];
            // choose interval as a quarter of niceMax (adjustable)
            var interval = niceMax / 4;
            return { minimum: 0, maximum: niceMax, interval: interval };
        };
        var yAxisCfg = computeYAxis(financialFilteredData);
        var onTextRender = function (args) {
            // only modify series data labels (args.point exists for data-label rendering)
            if (args.point && typeof args.point.y === 'number') {
                args.text = formatCurrency(Number(args.point.y));
            }
        };
        return (React.createElement("div", { style: { height: '100%', width: '100%', padding: 8 } },
            React.createElement(ej2_react_charts_1.ChartComponent, { id: "stacked-column-chart", ref: assetLiabilitiesQuaterlyChartRef, load: onChartLoad, textRender: onTextRender, axisLabelRender: onAxisLabelRender, tooltipRender: onCurrencyTooltip, chartArea: { border: { width: 0 } }, primaryXAxis: {
                    valueType: 'Category',
                    majorGridLines: { width: 0 }
                }, primaryYAxis: {
                    labelFormat: '{value}',
                    majorGridLines: { width: 1 }
                }, tooltip: { enable: true }, legendSettings: { visible: true } },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.ColumnSeries, ej2_react_charts_1.StackingColumnSeries, ej2_react_charts_1.DataLabel, ej2_react_charts_1.Category, ej2_react_charts_1.Legend, ej2_react_charts_1.Tooltip] }),
                React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: financialFilteredData, xName: "period", yName: "assets", name: "Assets", fill: rootPalette.assets, type: "Column", stackingGroup: "assets", marker: { visible: true, dataLabel: { visible: true } }, animation: { enable: false } }),
                    React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: financialFilteredData, xName: "period", yName: "liabilities", name: "Liabilities", fill: rootPalette.liabilities, type: "Column", stackingGroup: "liabilities", marker: { visible: true, dataLabel: { visible: true } }, animation: { enable: false } }),
                    React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: financialFilteredData, xName: "period", yName: "equity", name: "Equity", fill: rootPalette.equity, type: "Column", stackingGroup: "equity", marker: { visible: true, dataLabel: { visible: true } }, animation: { enable: false } })))));
    };
    var rootPalette = {
        assets: '#C539B4',
        liabilities: '#87A2FB',
        equity: '#F675A8'
    };
    // root uses numeric totals from quarterAllSharesByYear (these have Assets, Liabilities, Equity)
    var buildRootDataWithColors = React.useCallback(function () {
        var _a;
        var totals = (_a = quarterAllSharesByYear[selectedDropdownYear]) !== null && _a !== void 0 ? _a : { Assets: 0, Liabilities: 0, Equity: 0 };
        setPieData([
            { x: 'Assets', y: totals.Assets, color: rootPalette.assets, key: 'assets' },
            { x: 'Liabilities', y: totals.Liabilities, color: rootPalette.liabilities, key: 'liabilities' },
            { x: 'Equity', y: totals.Equity, color: rootPalette.equity, key: 'equity' }
        ]);
        setTitle('');
        setDrillLevel('root');
    }, [selectedDropdownYear]);
    React.useEffect(function () { buildRootDataWithColors(); }, [buildRootDataWithColors]);
    var onCurrencyTooltip = function (args) {
        var _a, _b, _c, _d, _e, _f;
        var y = Number((_b = (_a = args === null || args === void 0 ? void 0 : args.point) === null || _a === void 0 ? void 0 : _a.y) !== null && _b !== void 0 ? _b : 0);
        var x = String((_d = (_c = args === null || args === void 0 ? void 0 : args.point) === null || _c === void 0 ? void 0 : _c.x) !== null && _d !== void 0 ? _d : '');
        var series = String((_f = (_e = args === null || args === void 0 ? void 0 : args.series) === null || _e === void 0 ? void 0 : _e.name) !== null && _f !== void 0 ? _f : '');
        args.text = series ? "".concat(x, " : ").concat(formatCurrency(y)) : "".concat(x, ": ").concat(formatCurrency(y));
    };
    var assetliabilitiesPie = function () {
        var detailPalettes = {
            assets: ['#d674cb', '#87a2fb', '#f1a86a', '#aaeef3', '#f18a9a'],
            liabilities: ['#d674cb', '#87a2fb', '#f1a86a', '#aaeef3', '#f18a9a'],
            equity: ['#d674cb', '#87a2fb', '#f1a86a', '#aaeef3', '#f18a9a']
        };
        var onTextRender = function (args) {
            // only modify series data labels (args.point exists for data-label rendering)
            if (args.point && typeof args.point.y === 'number') {
                args.text = formatCurrency(Number(args.point.y));
            }
        };
        var drillPieChart = function (key, breakdownLabel) {
            var _a, _b, _c, _d, _e;
            var quarters = (_a = companyShareGroupedByYear[selectedDropdownYear]) !== null && _a !== void 0 ? _a : [];
            var items = quarters.flatMap(function (q) { var _a; return ((_a = q[key]) !== null && _a !== void 0 ? _a : []); });
            if (!items || items.length === 0)
                return;
            // aggregate by item name
            var agg = {};
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var it = items_1[_i];
                agg[(_b = it.name) !== null && _b !== void 0 ? _b : 'Unknown'] = (agg[(_c = it.name) !== null && _c !== void 0 ? _c : 'Unknown'] || 0) + ((_d = it.amount) !== null && _d !== void 0 ? _d : 0);
            }
            var palette = (_e = detailPalettes[key]) !== null && _e !== void 0 ? _e : ['#cccccc'];
            var subData = Object.entries(agg).map(function (_a, idx) {
                var name = _a[0], amount = _a[1];
                return ({
                    x: name,
                    y: amount,
                    color: palette[idx % palette.length] // assign color from detail palette
                });
            });
            setPieData(subData);
            setTitle("".concat(breakdownLabel, " breakdown"));
            setDrillLevel(key);
        };
        var getPieBreakdownFromTarget = function (targetId) {
            if (!targetId)
                return null;
            // try direct element lookup first (preferred)
            var el = document.getElementById(String(targetId));
            if (el) {
                var txt = (el.textContent || el.innerText || '').trim();
                if (txt) {
                    // if element contains numeric index (e.g. "0") map to Assets/Liabilities/Equity
                    if (/^\d+$/.test(txt)) {
                        var idx = Number(txt);
                        var keys = ['assets', 'liabilities', 'equity'];
                        var labels = ['Assets', 'Liabilities', 'Equity'];
                        if (idx >= 0 && idx < keys.length)
                            return { key: keys[idx], label: labels[idx] };
                    }
                    // otherwise treat the text as the label/key
                    return { key: String(txt).toLowerCase(), label: txt };
                }
            }
            // fallback: parse encoded id like 'asset-liability-equity-pie_datalabel_Series_0_text_0'
            var m = String(targetId).match(/_datalabel_Series_\d+_text_(\d+)/i) || String(targetId).match(/_text_(\d+)/i);
            if (m) {
                var idx = Number(m[1]);
                var keys = ['assets', 'liabilities', 'equity'];
                var labels = ['Assets', 'Liabilities', 'Equity'];
                if (!Number.isNaN(idx) && idx >= 0 && idx < keys.length)
                    return { key: keys[idx], label: labels[idx] };
            }
            // last-resort: take last underscore token if numeric
            var parts = String(targetId).split('_');
            var last = parts[parts.length - 1];
            if (/^\d+$/.test(last)) {
                var idx = Number(last);
                var keys = ['assets', 'liabilities', 'equity'];
                var labels = ['Assets', 'Liabilities', 'Equity'];
                if (idx >= 0 && idx < keys.length)
                    return { key: keys[idx], label: labels[idx] };
            }
            return null;
        };
        var onChartMouseClick = function (args) {
            var _a, _b;
            var targetId = args.target || ((_b = (_a = args.event) === null || _a === void 0 ? void 0 : _a.target) === null || _b === void 0 ? void 0 : _b.id);
            var found = getPieBreakdownFromTarget(targetId);
            if (!found)
                return;
            // only allow drill when at root level
            if (drillLevel !== 'root')
                return;
            drillPieChart(found.key, found.label);
        };
        var onPointClick = function (args) {
            if (drillLevel !== 'root')
                return;
            var key = (args.point && args.point.key) || (args.point && String(args.point.x).toLowerCase()) || null;
            var breakdownLabel = args.point.x;
            if (!key)
                return;
            drillPieChart(key, breakdownLabel);
        };
        var onAxisLabelRender = function (args) {
            if (args.axis && args.axis.name === 'primaryYAxis') {
                args.text = formatCurrency(Number(args.text));
            }
        };
        return (React.createElement("div", { style: { height: '100%', width: '100%', position: 'relative' }, onClick: function () { if (drillLevel !== 'root')
                buildRootDataWithColors(); } },
            drillLevel !== 'root' && (React.createElement("button", { onClick: function (e) { e.stopPropagation(); buildRootDataWithColors(); }, style: { background: 'transparent', position: 'absolute', top: 8, right: 8, zIndex: 5 } }, "Back")),
            React.createElement("div", { style: { paddingTop: 8, textAlign: 'center', fontWeight: 600 } }, title),
            drillLevel === 'root' ? (React.createElement(ej2_react_charts_1.AccumulationChartComponent, { ref: assetLiabilitiesPieChartRef, id: "asset-liability-equity-pie", load: onAccumulationLoad, legendSettings: { visible: true, position: 'Bottom' }, tooltip: { enable: true, format: '${point.x} : ${point.y}' }, height: '100%', width: '100%', textRender: onTextRender, chartMouseClick: onChartMouseClick, pointClick: onPointClick, tooltipRender: onCurrencyTooltip },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.PieSeries, ej2_react_charts_1.AccumulationLegend, ej2_react_charts_1.AccumulationTooltip, ej2_react_charts_1.AccumulationDataLabel] }),
                React.createElement(ej2_react_charts_1.AccumulationSeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.AccumulationSeriesDirective, { dataSource: pieData, xName: "x", yName: "y", type: "Pie", pointColorMapping: "color", innerRadius: '40%', dataLabel: {
                            visible: true,
                            format: '${value}',
                            name: 'y',
                            position: 'Outside',
                            connectorStyle: { length: '10px' },
                            font: { size: '12px' }
                        }, animation: { enable: false }, borderRadius: 10, border: { width: 4, color: '#ffffff' } })))) : (
            // Drill: show a column chart of the breakdown (pieData) for the selected slice
            React.createElement("div", { style: { height: '100%', width: '100%', padding: 8 } },
                React.createElement(ej2_react_charts_1.ChartComponent, { id: "drill-column-chart", load: onChartLoad, textRender: onTextRender, axisLabelRender: onAxisLabelRender, tooltipRender: onCurrencyTooltip, height: '85%', width: '90%', primaryXAxis: { valueType: 'Category' }, tooltip: { enable: true, format: '${point.x} : $${point.y}' } },
                    React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.BarSeries, ej2_react_charts_1.Tooltip, ej2_react_charts_1.Category, ej2_react_charts_1.DataLabel] }),
                    React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                        React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: pieData, xName: "x", yName: "y", type: "Bar", pointColorMapping: "color", marker: { dataLabel: { visible: true, format: '${value}', position: 'Outer' } }, animation: { enable: false } })))))));
    };
    var stripLines = (0, react_1.useMemo)(function () {
        var lines = [];
        if (selectedRatio.length === 1 && selectedRatio.includes('Debt by Equity Ratio')) {
            lines.push({ start: 0, end: 0.15, text: 'Equity Low', color: '#e5dcf6', opacity: 0.5, visible: true, textStyle: { color: 'black', size: '12px' } }, { start: 0.15, end: 0.210, text: 'Equity Medium', color: '#c4b3f8', opacity: 0.5, visible: true, textStyle: { color: 'black', size: '12px' } }, { start: 0.210, end: 0.25, text: 'Equity High', color: '#9d84f2', opacity: 0.5, visible: true, textStyle: { color: 'black', size: '12px' } });
        }
        if (selectedRatio.length === 1 && selectedRatio.includes('Debt by Asset Ratio')) {
            lines.push({ start: 0, end: 0.14, text: 'Asset Low', color: '#cffafe', textStyle: { size: 12, color: 'black' }, opacity: 0.5, visible: true }, { start: 0.14, end: 0.22, text: 'Asset Medium', textStyle: { size: 12, color: 'black' }, color: '#67e8f9', opacity: 0.5, visible: true }, { start: 0.22, end: 0.25, text: 'Asset High', textStyle: { size: 12, color: 'black' }, color: '#14b8a6', opacity: 0.5, visible: true });
        }
        return lines;
    }, [selectedRatio]);
    var renderAssetHeader = function () { return (React.createElement("div", { className: "finance-panel-header" },
        React.createElement("div", null, "Quarterly Comparison of Assets, Liabilities, and Equity"),
        React.createElement(ej2_react_dropdowns_1.MultiSelectComponent, { id: "quarterelement", mode: "CheckBox", width: '30%', placeholder: "Select Quarter", dataSource: availableQuarters, value: selectedQuarters, fields: { text: 'value', value: 'value' }, change: function (args) { var _a; return setSelectedQuarters((_a = args === null || args === void 0 ? void 0 : args.value) !== null && _a !== void 0 ? _a : []); } },
            React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_dropdowns_1.CheckBoxSelection] })))); };
    var renderRatioHeader = function () { return (React.createElement("div", { className: "finance-panel-header" },
        React.createElement("div", null, "Debt Asset and Equity Ratio"),
        React.createElement(ej2_react_dropdowns_1.MultiSelectComponent, { id: "dbtelement", mode: "CheckBox", width: '40%', placeholder: "Select Ratio", dataSource: debtValues, value: selectedRatio, fields: { text: 'value', value: 'value' }, change: function (args) {
                var _a;
                var vals = ((_a = args === null || args === void 0 ? void 0 : args.value) !== null && _a !== void 0 ? _a : []);
                setSelectedRatio(vals);
            } },
            React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_dropdowns_1.CheckBoxSelection] })))); };
    var debtEquityRatio = function () {
        return (React.createElement("div", { style: { height: "100%", width: "100%", padding: 8 } },
            React.createElement(ej2_react_charts_1.ChartComponent, { id: 'debtratio', ref: debtAssetRatioChartRef, load: onChartLoad, primaryXAxis: {
                    valueType: 'Category', labelPlacement: 'OnTicks', majorGridLines: { width: 0 }
                }, primaryYAxis: {
                    minimum: 0,
                    maximum: debtAssetEquityMaxValue,
                    interval: 0.1,
                    lineStyle: { width: 0 },
                    majorTickLines: { width: 0 },
                    stripLines: stripLines
                }, tooltip: {
                    enable: true,
                    header: 'Year: <b>${point.x}</b>', // Custom tooltip header
                }, chartArea: { border: { width: 0 } } },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.SplineSeries, ej2_react_charts_1.Legend, ej2_react_charts_1.Tooltip, ej2_react_charts_1.DataLabel, ej2_react_charts_1.Category, ej2_react_charts_1.StripLine] }),
                React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: debtRatiosData, xName: 'year', yName: 'debtToAsset', fill: '#87A2FB', name: 'Debt by Asset Ratio', type: 'Spline', visible: selectedRatio.length === 0 || selectedRatio.includes('Debt by Asset Ratio'), marker: { dataLabel: { visible: true, format: 'n3' }, visible: true, width: 8, height: 8, shape: 'Circle' }, tooltipFormat: 'Debt by Asset Ratio: ${point.y}', animation: { enable: false } }),
                    React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: debtRatiosData, xName: 'year', yName: 'debtToEquity', fill: '#C539B4', name: 'Debt by Equity Ratio', type: 'Spline', visible: selectedRatio.length === 0 || selectedRatio.includes('Debt by Equity Ratio'), marker: { dataLabel: { visible: true, format: 'n3' }, visible: true, width: 8, height: 8, shape: 'Circle' }, tooltipFormat: 'Debt by Equity Ratio: ${point.y}', animation: { enable: false } })))));
    };
    return (React.createElement("div", { className: "Container" },
        React.createElement("div", { className: "e-card cs-toolbar" },
            React.createElement("div", { className: "cs-toolbar-left" },
                React.createElement("div", { className: "cs-title" }, "Overview")),
            React.createElement("div", { className: "cs-toolbar-right" },
                React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { dataSource: financialAvailableYears.filter(function (y) { return y !== 2021; }), value: selectedDropdownYear, placeholder: "Select year", change: onYearChange }))),
        React.createElement(ej2_react_layouts_1.DashboardLayoutComponent, { ref: overviewRef, id: "overview_dashboard", style: { height: '100%', width: '100%' }, columns: 8, cellAspectRatio: 1, cellSpacing: cellSpacing, allowResizing: false, allowDragging: false, mediaQuery: "(max-width:950px)" },
            React.createElement(ej2_react_layouts_1.PanelsDirective, null,
                React.createElement(ej2_react_layouts_1.PanelDirective, { id: "investmentcard", sizeX: 2, sizeY: 1, row: 0, col: 0, content: initialInvestmentCard }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { id: "npvcard", sizeX: 3, sizeY: 1, row: 1, col: 0, content: npvCard }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { id: "irrcard", sizeX: 3, sizeY: 1, row: 1, col: 3, content: irrCard }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { id: "workingcapitalcard", sizeX: 2, sizeY: 1, row: 1, col: 6, content: networkingcapital }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { id: "equityCard", sizeX: 2, sizeY: 1, row: 0, col: 6, content: gaugeEquity }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { id: "quickcard", sizeX: 2, sizeY: 1, row: 0, col: 2, content: gaugeQuick }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { id: "currentcard", sizeX: 2, sizeY: 1, row: 0, col: 4, content: gaugeCurrent }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { id: "ratiocard", sizeX: 4, sizeY: 3, row: 3, col: 0, header: renderRatioHeader, content: debtEquityRatio }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { id: "piecard", sizeX: 4, sizeY: 3, row: 3, col: 4, header: "<div style='margin-top:5px'>Assets, Liabilities, and Equity Breakdown</div>", content: assetliabilitiesPie }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { id: "quarterlycard", sizeX: 8, sizeY: 3, row: 6, col: 0, header: renderAssetHeader, content: assetliabilities })))));
};
// Dashboard 2 (Profit Loss Performance) with title + droddown with years
var ProfitLossDashboard = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var selectedYear = _a.selectedYear, onYearChange = _a.onYearChange;
    var selectedDropdownYear = selectedYear;
    var _l = (0, react_1.useState)(false), detailMode = _l[0], setDetailMode = _l[1];
    var _m = (0, react_1.useState)([]), incomePieData = _m[0], setIncomePieData = _m[1];
    var _o = (0, react_1.useState)([]), expensePieData = _o[0], setExpensePieData = _o[1];
    var _p = (0, react_1.useState)(''), detailTitle = _p[0], setDetailTitle = _p[1];
    var profitlossRef = React.useRef(null);
    var incomePieRef = React.useRef(null);
    var expensePieRef = React.useRef(null);
    var incomeexpensechartRef = React.useRef(null);
    var operatingProfitRef = React.useRef(null);
    React.useEffect(function () {
        var timer;
        var refreshAll = function () {
            clearTimeout(timer);
            timer = setTimeout(function () {
                var _a, _b, _c, _d;
                (_a = profitlossRef.current) === null || _a === void 0 ? void 0 : _a.refresh();
                (_b = incomePieRef.current) === null || _b === void 0 ? void 0 : _b.refresh();
                (_c = expensePieRef.current) === null || _c === void 0 ? void 0 : _c.refresh();
                (_d = incomeexpensechartRef.current) === null || _d === void 0 ? void 0 : _d.refresh();
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
    var onTextRender = function (args) {
        // only modify series data labels (args.point exists for data-label rendering)
        if (args.point && typeof args.point.y === 'number') {
            args.text = formatCurrency(Number(args.point.y));
        }
    };
    var onCurrencyTooltip = function (args) {
        var _a, _b, _c, _d, _e, _f;
        var y = Number((_b = (_a = args === null || args === void 0 ? void 0 : args.point) === null || _a === void 0 ? void 0 : _a.y) !== null && _b !== void 0 ? _b : 0);
        var x = String((_d = (_c = args === null || args === void 0 ? void 0 : args.point) === null || _c === void 0 ? void 0 : _c.x) !== null && _d !== void 0 ? _d : '');
        var series = String((_f = (_e = args === null || args === void 0 ? void 0 : args.series) === null || _e === void 0 ? void 0 : _e.name) !== null && _f !== void 0 ? _f : '');
        args.text = series ? "".concat(x, " : ").concat(formatCurrency(y)) : "".concat(x, ": ").concat(formatCurrency(y));
    };
    var buildDetailPies = function (year) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
        var idx = financialAvailableYears.indexOf(year);
        var incomeVal = Number((_a = cashInFlowTotals[idx]) !== null && _a !== void 0 ? _a : 0);
        var expenseVal = Number((_b = cashOutFlowTotals[idx]) !== null && _b !== void 0 ? _b : 0);
        // prefer income statement P&L if present
        var inc = (_c = companyIncomeByYear[year]) !== null && _c !== void 0 ? _c : {};
        // find matching cash flow series for the year (period is 1..n)
        var inflowSeries = (_f = ((_e = (_d = financeData.cashInFlows) === null || _d === void 0 ? void 0 : _d.series) !== null && _e !== void 0 ? _e : []).find(function (s) { return Number(s.period) === (idx + 1); })) !== null && _f !== void 0 ? _f : null;
        var outflowSeries = (_j = ((_h = (_g = financeData.cashOutFlows) === null || _g === void 0 ? void 0 : _g.series) !== null && _h !== void 0 ? _h : []).find(function (s) { return Number(s.period) === (idx + 1); })) !== null && _j !== void 0 ? _j : null;
        var paletteIn = ['#F675A8', '#87A2FB', '#C539B4', '#73467D', '#D989B5'];
        var paletteOut = ['#E94560', '#FFADBC', '#C539B4', '#87A2FB', '#73467D'];
        var mapBreakdown = function (arr, palettes) {
            return (arr !== null && arr !== void 0 ? arr : []).map(function (b, ii) {
                var _a, _b, _c, _d, _e, _f;
                return ({
                    x: (_b = (_a = b.name) !== null && _a !== void 0 ? _a : b.id) !== null && _b !== void 0 ? _b : "Item ".concat(ii + 1),
                    y: Math.round(Math.abs(Number((_d = (_c = b.amount) !== null && _c !== void 0 ? _c : b.value) !== null && _d !== void 0 ? _d : 0) || 0)),
                    color: palettes[ii % palettes.length],
                    id: String(((_f = (_e = b.id) !== null && _e !== void 0 ? _e : b.name) !== null && _f !== void 0 ? _f : ii)).toLowerCase()
                });
            }).filter(function (d) { return d.y > 0; });
        };
        // build income pie (priority: explicit P&L -> annual breakdown -> monthly aggregate -> sensible fallback)
        var incomePie = [];
        if (inc && inc.incomeBreakdown && inc.incomeBreakdown.length) {
            incomePie = inc.incomeBreakdown.map(function (it, ii) {
                var _a, _b;
                return ({
                    x: it.name || "Item ".concat(ii + 1),
                    y: Math.round(Number((_b = (_a = it.amount) !== null && _a !== void 0 ? _a : it.value) !== null && _b !== void 0 ? _b : 0) || 0),
                    color: paletteIn[ii % paletteIn.length]
                });
            }).filter(function (d) { return d.y > 0; });
        }
        else if (Array.isArray(inflowSeries === null || inflowSeries === void 0 ? void 0 : inflowSeries.breakdown) && inflowSeries.breakdown.length) {
            incomePie = mapBreakdown(inflowSeries.breakdown, paletteIn);
        }
        else if (Array.isArray(inflowSeries === null || inflowSeries === void 0 ? void 0 : inflowSeries.monthlyseries) && inflowSeries.monthlyseries.some(function (m) { return Array.isArray(m.breakdown) && m.breakdown.length; })) {
            var agg = {};
            for (var _i = 0, _v = inflowSeries.monthlyseries; _i < _v.length; _i++) {
                var m = _v[_i];
                if (!Array.isArray(m.breakdown))
                    continue;
                for (var _w = 0, _x = m.breakdown; _w < _x.length; _w++) {
                    var b = _x[_w];
                    var key = (_l = (_k = b.name) !== null && _k !== void 0 ? _k : b.id) !== null && _l !== void 0 ? _l : 'Other';
                    agg[key] = (agg[key] || 0) + Math.abs(Number((_o = (_m = b.amount) !== null && _m !== void 0 ? _m : b.value) !== null && _o !== void 0 ? _o : 0) || 0);
                }
            }
            incomePie = Object.entries(agg).map(function (_a, ii) {
                var k = _a[0], v = _a[1];
                return ({ x: k, y: Math.round(v), color: paletteIn[ii % paletteIn.length] });
            }).filter(function (d) { return d.y > 0; });
        }
        else {
            var total = Math.round(incomeVal || Number((_p = inflowSeries === null || inflowSeries === void 0 ? void 0 : inflowSeries.amount) !== null && _p !== void 0 ? _p : 0));
            if (total > 0) {
                var sales = Math.round(total * 0.70);
                var services = Math.round(total * 0.20);
                var other = Math.max(0, total - (sales + services));
                incomePie = [
                    { x: 'Sales', y: sales, color: paletteIn[0] },
                    { x: 'Services', y: services, color: paletteIn[1] },
                    { x: 'Other', y: other, color: paletteIn[2] }
                ].filter(function (s) { return s.y > 0; });
            }
            else {
                incomePie = [];
            }
        }
        // build expense pie (priority: explicit expenseBreakdown -> annual breakdown -> monthly aggregate -> sensible fallback)
        var expensePie = [];
        if (companyIncomeByYear[year] && companyIncomeByYear[year].expenseBreakdown && companyIncomeByYear[year].expenseBreakdown.length) {
            expensePie = companyIncomeByYear[year].expenseBreakdown.map(function (it, ii) {
                var _a, _b;
                return ({
                    x: it.name || "Item ".concat(ii + 1),
                    y: Math.round(Number((_b = (_a = it.amount) !== null && _a !== void 0 ? _a : it.value) !== null && _b !== void 0 ? _b : 0) || 0),
                    color: paletteOut[ii % paletteOut.length]
                });
            }).filter(function (d) { return d.y > 0; });
        }
        else if (Array.isArray(outflowSeries === null || outflowSeries === void 0 ? void 0 : outflowSeries.breakdown) && outflowSeries.breakdown.length) {
            expensePie = mapBreakdown(outflowSeries.breakdown, paletteOut);
        }
        else if (Array.isArray(outflowSeries === null || outflowSeries === void 0 ? void 0 : outflowSeries.monthlyseries) && outflowSeries.monthlyseries.some(function (m) { return Array.isArray(m.breakdown) && m.breakdown.length; })) {
            var agg = {};
            for (var _y = 0, _z = outflowSeries.monthlyseries; _y < _z.length; _y++) {
                var m = _z[_y];
                if (!Array.isArray(m.breakdown))
                    continue;
                for (var _0 = 0, _1 = m.breakdown; _0 < _1.length; _0++) {
                    var b = _1[_0];
                    var key = (_r = (_q = b.name) !== null && _q !== void 0 ? _q : b.id) !== null && _r !== void 0 ? _r : 'Other';
                    agg[key] = (agg[key] || 0) + Math.abs(Number((_t = (_s = b.amount) !== null && _s !== void 0 ? _s : b.value) !== null && _t !== void 0 ? _t : 0) || 0);
                }
            }
            expensePie = Object.entries(agg).map(function (_a, ii) {
                var k = _a[0], v = _a[1];
                return ({ x: k, y: Math.round(v), color: paletteOut[ii % paletteOut.length] });
            }).filter(function (d) { return d.y > 0; });
        }
        else {
            var total = Math.round(expenseVal || Number((_u = outflowSeries === null || outflowSeries === void 0 ? void 0 : outflowSeries.amount) !== null && _u !== void 0 ? _u : 0));
            if (total > 0) {
                var payroll = Math.round(total * 0.40);
                var opex = Math.round(total * 0.35);
                var taxes = Math.round(total * 0.10);
                var capex = Math.round(total * 0.08);
                var other = Math.max(0, total - (payroll + opex + taxes + capex));
                expensePie = [
                    { x: 'Payroll & Benefits', y: payroll, color: paletteOut[0] },
                    { x: 'Operating Expenses', y: opex, color: paletteOut[1] },
                    { x: 'Taxes', y: taxes, color: paletteOut[2] },
                    { x: 'Capex', y: capex, color: paletteOut[3] },
                    { x: 'Other', y: other, color: paletteOut[4] }
                ].filter(function (s) { return s.y > 0; });
            }
            else {
                expensePie = [];
            }
        }
        setIncomePieData(incomePie);
        setExpensePieData(expensePie);
        setDetailTitle(" FY".concat(year, " \u2014 Income and Expense Breakdown"));
    };
    // show drilled pie initially for the selected year and keep in sync when year changes
    (0, react_1.useEffect)(function () {
        buildDetailPies(Number(selectedDropdownYear));
        setDetailMode(false);
    }, [selectedDropdownYear]);
    var incomeExpenseProfit = function () {
        // build column data across all years using breakdown totals when available
        var columnData = financialAvailableYears.map(function (y, i) {
            var _a, _b;
            var income = (_a = cashInFlowTotals[i]) !== null && _a !== void 0 ? _a : 0;
            var expenses = (_b = cashOutFlowTotals[i]) !== null && _b !== void 0 ? _b : 0;
            var profit = Math.round(income - expenses);
            return {
                year: String(y),
                income: income,
                expenses: expenses,
                profit: profit,
                color: profit >= 0 ? '#EF9A53' : '#FB2B2B'
            };
        });
        var drillDownPie = function (yearStr) {
            var _a, _b, _c, _d, _e, _f;
            var year = Number(yearStr);
            if (!year || !financialAvailableYears.includes(year))
                return;
            var idx = financialAvailableYears.indexOf(year);
            var inflowSeries = (_c = ((_b = (_a = financeData.cashInFlows) === null || _a === void 0 ? void 0 : _a.series) !== null && _b !== void 0 ? _b : []).find(function (s) { return Number(s.period) === (idx + 1); })) !== null && _c !== void 0 ? _c : {};
            var outflowSeries = (_f = ((_e = (_d = financeData.cashOutFlows) === null || _d === void 0 ? void 0 : _d.series) !== null && _e !== void 0 ? _e : []).find(function (s) { return Number(s.period) === (idx + 1); })) !== null && _f !== void 0 ? _f : {};
            // use breakdowns for pie if present, otherwise derive sensible buckets
            var incomePie = Array.isArray(inflowSeries.breakdown) && inflowSeries.breakdown.length
                ? inflowSeries.breakdown.map(function (b, ii) { var _a, _b, _c, _d; return ({ x: (_b = (_a = b.name) !== null && _a !== void 0 ? _a : b.id) !== null && _b !== void 0 ? _b : "Item ".concat(ii + 1), y: Math.round(Number((_d = (_c = b.amount) !== null && _c !== void 0 ? _c : b.value) !== null && _d !== void 0 ? _d : 0)), color: ['#F675A8', '#87A2FB', '#C539B4'][ii % 3] }); })
                : (function () {
                    var _a, _b;
                    var total = Math.round((_a = cashInFlowTotals[idx]) !== null && _a !== void 0 ? _a : Number((_b = inflowSeries.amount) !== null && _b !== void 0 ? _b : 0));
                    var sales = Math.round(total * 0.70);
                    var services = Math.round(total * 0.20);
                    var other = Math.max(0, total - (sales + services));
                    return [{ x: 'Sales', y: sales, color: '#F675A8' }, { x: 'Services', y: services, color: '#87A2FB' }, { x: 'Other', y: other, color: '#C539B4' }].filter(function (s) { return s.y > 0; });
                })();
            var expensePie = Array.isArray(outflowSeries.breakdown) && outflowSeries.breakdown.length
                ? outflowSeries.breakdown.map(function (b, ii) { var _a, _b, _c, _d; return ({ x: (_b = (_a = b.name) !== null && _a !== void 0 ? _a : b.id) !== null && _b !== void 0 ? _b : "Item ".concat(ii + 1), y: Math.round(Math.abs(Number((_d = (_c = b.amount) !== null && _c !== void 0 ? _c : b.value) !== null && _d !== void 0 ? _d : 0))), color: ['#E94560', '#FFADBC', '#C539B4'][ii % 3] }); })
                : (function () {
                    var _a, _b;
                    var total = Math.round((_a = cashOutFlowTotals[idx]) !== null && _a !== void 0 ? _a : Number((_b = outflowSeries.amount) !== null && _b !== void 0 ? _b : 0));
                    var payroll = Math.round(total * 0.40);
                    var opex = Math.round(total * 0.35);
                    var other = Math.max(0, total - (payroll + opex));
                    return [{ x: 'Payroll', y: payroll, color: '#E94560' }, { x: 'Operating', y: opex, color: '#FFADBC' }, { x: 'Other', y: other, color: '#C539B4' }].filter(function (s) { return s.y > 0; });
                })();
            setIncomePieData(incomePie);
            setExpensePieData(expensePie);
            setDetailTitle(" FY".concat(year, " \u2014 Income & Expense Breakdown"));
            setDetailMode(true);
        };
        var onChartMouseClick = function (args) {
            var _a, _b;
            var targetId = args.target || ((_b = (_a = args.event) === null || _a === void 0 ? void 0 : _a.target) === null || _b === void 0 ? void 0 : _b.id);
            var _c = getAxisLabelFromTarget(targetId), text = _c.text, year = _c.year;
            if (year) {
                drillDownPie(String(year)); // call existing drill function with the year
            }
            else if (text) {
                drillDownPie(text);
            }
        };
        var onColumnPointClick = function (args) {
            var _a, _b, _c;
            var yearStr = (_b = (_a = args.point) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : (_c = args.point) === null || _c === void 0 ? void 0 : _c.category;
            drillDownPie(yearStr);
        };
        var onAxisLabelRenderLocal = function (args) {
            if (args.axis && args.axis.name === 'primaryYAxis') {
                args.text = formatCurrency(Number(args.text));
            }
        };
        if (detailMode) {
            // existing detail UI (unchanged)
            return (React.createElement("div", { style: { height: '100%', width: '100%', display: 'flex', flexDirection: 'column', gap: 8 } },
                React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' } },
                    React.createElement("div", { style: { fontWeight: 600 } }, detailTitle),
                    React.createElement("button", { onClick: function () { setDetailMode(false); setIncomePieData([]); setExpensePieData([]); }, style: { background: 'transparent', padding: '6px 10px', borderRadius: 6 } }, "Back")),
                React.createElement("div", { style: { display: 'flex', gap: 12, height: '100%', width: '100%' } },
                    React.createElement("div", { style: { flex: 1 } },
                        React.createElement("div", { style: { height: '100%', width: '100%' } },
                            React.createElement(ej2_react_charts_1.AccumulationChartComponent, { id: "income-breakdown", ref: incomePieRef, load: onAccumulationLoad, textRender: onTextRender, tooltipRender: onCurrencyTooltip, legendSettings: { visible: true, position: 'Bottom' }, tooltip: { enable: true } },
                                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.PieSeries, ej2_react_charts_1.AccumulationLegend, ej2_react_charts_1.AccumulationTooltip, ej2_react_charts_1.AccumulationDataLabel] }),
                                React.createElement(ej2_react_charts_1.AccumulationSeriesCollectionDirective, null,
                                    React.createElement(ej2_react_charts_1.AccumulationSeriesDirective, { dataSource: incomePieData, xName: "x", yName: "y", type: "Pie", pointColorMapping: "color", dataLabel: { visible: true, format: '${value}', name: 'y', position: 'Outside' }, animation: { enable: false } }))))),
                    React.createElement("div", { style: { flex: 1 } },
                        React.createElement("div", { style: { height: '100%', width: '100%' } },
                            React.createElement(ej2_react_charts_1.AccumulationChartComponent, { id: "expense-breakdown", ref: expensePieRef, load: onAccumulationLoad, textRender: onTextRender, tooltipRender: onCurrencyTooltip, legendSettings: { visible: true, position: 'Bottom' }, tooltip: { enable: true } },
                                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.PieSeries, ej2_react_charts_1.AccumulationLegend, ej2_react_charts_1.AccumulationTooltip, ej2_react_charts_1.AccumulationDataLabel] }),
                                React.createElement(ej2_react_charts_1.AccumulationSeriesCollectionDirective, null,
                                    React.createElement(ej2_react_charts_1.AccumulationSeriesDirective, { dataSource: expensePieData, xName: "x", yName: "y", type: "Pie", pointColorMapping: "color", dataLabel: { visible: true, format: '${value}', name: 'y', position: 'Outside' }, animation: { enable: false } }))))))));
        }
        // Default: show year-over-year Income vs Expenses columns
        return (React.createElement("div", { className: 'finance-chart-wrap', style: { padding: 8 } },
            React.createElement(ej2_react_charts_1.ChartComponent, { ref: incomeexpensechartRef, id: "income-expense-year-column", load: onChartLoad, width: "100%", height: "100%", primaryXAxis: { valueType: 'Category', majorGridLines: { width: 0 } }, chartArea: { border: { width: 0 } }, tooltip: { enable: true, shared: false, format: '${series.name} : ${point.y}' }, axisLabelRender: onAxisLabelRenderLocal, pointClick: onColumnPointClick, chartMouseClick: onChartMouseClick, textRender: onTextRender, tooltipRender: onCurrencyTooltip },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.ColumnSeries, ej2_react_charts_1.Legend, ej2_react_charts_1.Tooltip, ej2_react_charts_1.DataLabel, ej2_react_charts_1.Category] }),
                React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: columnData, xName: "year", yName: "income", name: "Income", type: "Column", fill: "#F675A8", marker: { dataLabel: { visible: true, position: 'Outer' } }, animation: { enable: false } }),
                    React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: columnData, xName: "year", yName: "expenses", name: "Expenses", type: "Column", fill: "#FFADBC", marker: { dataLabel: { visible: true, position: 'Outer' } }, animation: { enable: false } })))));
    };
    var operatingProfitBreakdown = function () {
        var _a, _b, _c, _d;
        var income = (_a = companyIncomeByYear[selectedDropdownYear]) !== null && _a !== void 0 ? _a : {};
        var idx = financialAvailableYears.indexOf(selectedDropdownYear);
        var revenue = Number((_c = (_b = income.revenue) !== null && _b !== void 0 ? _b : cashInFlowTotals[idx]) !== null && _c !== void 0 ? _c : 0);
        var cogs = Number((_d = income.cogs) !== null && _d !== void 0 ? _d : 0);
        var opEx = calculateOperatingExpenses(selectedDropdownYear);
        var operatingProfit = Math.round(revenue - cogs - opEx);
        var waterfallData = [
            { category: 'Total Income', change: revenue, color: '#C539B4' },
            { category: 'COGS', change: -cogs, color: '#E94560' },
            { category: 'Operating Expense', change: -opEx, color: '#E94560' },
            { category: 'Operating Profit', change: operatingProfit, color: '#87A2FB' } // value ignored; marked as total via sumIndexes
        ];
        var cornerRadius = { topLeft: 3, bottomLeft: 3, bottomRight: 3, topRight: 3 };
        var onAxisLabelRender = function (args) {
            if (args.axis && args.axis.name === 'primaryYAxis') {
                args.text = formatCurrency(Number(args.text));
            }
        };
        return (React.createElement("div", { style: { width: '100%', height: '100%', padding: 8 } },
            React.createElement(ej2_react_charts_1.ChartComponent, { id: 'waterfall', ref: operatingProfitRef, load: onChartLoad, chartArea: { border: { width: 0 } }, axisLabelRender: onAxisLabelRender, textRender: onTextRender, primaryXAxis: { valueType: 'Category', majorGridLines: { width: 0 } } },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.WaterfallSeries, ej2_react_charts_1.DataLabel, ej2_react_charts_1.Category] }),
                React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: waterfallData, type: 'Waterfall', xName: "category", yName: "change", intermediateSumIndexes: [4], sumIndexes: [3], columnWidth: 0.7, cornerRadius: cornerRadius, connector: { color: '#5F6A6A', width: 0.8, dashArray: '1,2' }, pointColorMapping: "color", border: { width: 0.2, color: '#000000' }, negativeFillColor: '#E94560', marker: {
                            dataLabel: {
                                visible: true,
                                font: { color: '#FFFFFF' },
                            },
                        }, animation: { enable: false } })))));
    };
    var totalIncomeValue = cashInFlowTotals[financialAvailableYears.indexOf(selectedDropdownYear)];
    var totalIncomePrevious = cashInFlowTotals[financialAvailableYears.indexOf(selectedDropdownYear - 1)];
    var totalIncomePctChange = ((totalIncomeValue - totalIncomePrevious) / Math.abs(totalIncomePrevious)) * 100;
    var totalIncomeFormatted = "".concat(totalIncomePctChange.toFixed(1));
    var totalIncomeIsUp = totalIncomePrevious !== null ? totalIncomeValue > totalIncomePrevious : false;
    function calculateNetProfit(year) {
        var _a, _b, _c, _d, _e, _f, _g;
        var idx = financialAvailableYears.indexOf(year);
        var income = (_a = companyIncomeByYear[year]) !== null && _a !== void 0 ? _a : {}; // <- cast to CompanyIncome
        // prefer income statement values if available
        var revenue = Number((_b = income.revenue) !== null && _b !== void 0 ? _b : 0);
        var cogs = Number((_c = income.cogs) !== null && _c !== void 0 ? _c : 0);
        var operatingExpenses = Number((_e = (_d = income.operatingExpenses) !== null && _d !== void 0 ? _d : income.opex) !== null && _e !== void 0 ? _e : 0);
        var interest = Number((_f = income.interest) !== null && _f !== void 0 ? _f : 0);
        var taxes = Number((_g = income.taxes) !== null && _g !== void 0 ? _g : 0);
        // primary calculation from P&L
        var net = revenue - cogs - operatingExpenses - (interest + taxes);
        return Math.round(net);
    }
    var netProfitValue = calculateNetProfit(selectedDropdownYear);
    var netProfitPrevious = selectedDropdownYear && financialAvailableYears.indexOf(selectedDropdownYear) > 0
        ? calculateNetProfit(financialAvailableYears[financialAvailableYears.indexOf(selectedDropdownYear) - 1])
        : null;
    var netProfitPctChange = netProfitPrevious !== null && Math.abs(netProfitPrevious) > 0
        ? ((netProfitValue - netProfitPrevious) / Math.abs(netProfitPrevious)) * 100
        : null;
    var netProfitFormatted = "".concat(netProfitPctChange === null || netProfitPctChange === void 0 ? void 0 : netProfitPctChange.toFixed(1));
    var netProfitIsUp = netProfitPrevious !== null ? netProfitValue > netProfitPrevious : false;
    function calculateGrossProfit(year) {
        var _a, _b, _c, _d;
        var idx = financialAvailableYears.indexOf(year);
        var income = (_a = companyIncomeByYear[year]) !== null && _a !== void 0 ? _a : {};
        var revenue = Number((_c = (_b = income.revenue) !== null && _b !== void 0 ? _b : cashInFlowTotals[idx]) !== null && _c !== void 0 ? _c : 0);
        var cogs = Number((_d = income.cogs) !== null && _d !== void 0 ? _d : 0);
        return Math.round(revenue - cogs);
    }
    // usage (place after calculateNetProfit / where you build cards)
    var grossProfitValue = calculateGrossProfit(selectedDropdownYear);
    var grossProfitPrevious = selectedDropdownYear && financialAvailableYears.indexOf(selectedDropdownYear) > 0
        ? calculateGrossProfit(financialAvailableYears[financialAvailableYears.indexOf(selectedDropdownYear) - 1])
        : null;
    var grossProfitPctChange = grossProfitPrevious !== null && Math.abs(grossProfitPrevious) > 0
        ? ((grossProfitValue - grossProfitPrevious) / Math.abs(grossProfitPrevious)) * 100
        : null;
    var grossProfitFormatted = "".concat(grossProfitPctChange === null || grossProfitPctChange === void 0 ? void 0 : grossProfitPctChange.toFixed(1));
    var grossProfitIsUp = grossProfitPrevious !== null ? grossProfitValue > grossProfitPrevious : false;
    var idx = financialAvailableYears.indexOf(selectedDropdownYear);
    var prevIdx = idx > 0 ? idx - 1 : -1;
    var revenueCurrent = Number((_d = (_c = (_b = companyIncomeByYear[selectedDropdownYear]) === null || _b === void 0 ? void 0 : _b.revenue) !== null && _c !== void 0 ? _c : cashInFlowTotals[idx]) !== null && _d !== void 0 ? _d : 0);
    var revenuePrev = prevIdx >= 0 ? Number((_g = (_f = (_e = companyIncomeByYear[financialAvailableYears[prevIdx]]) === null || _e === void 0 ? void 0 : _e.revenue) !== null && _f !== void 0 ? _f : cashInFlowTotals[prevIdx]) !== null && _g !== void 0 ? _g : 0) : null;
    var grossMarginCurrent = revenueCurrent > 0 ? (grossProfitValue / revenueCurrent) * 100 : 0;
    var grossMarginPrevious = revenuePrev !== null && revenuePrev > 0 ? (grossProfitPrevious / revenuePrev) * 100 : null;
    var profitMarginCurrent = revenueCurrent > 0 ? (netProfitValue / revenueCurrent) * 100 : 0;
    var profitMarginPrevious = revenuePrev !== null && revenuePrev > 0 ? (netProfitPrevious / revenuePrev) * 100 : null;
    var calcPctChangeLabel = function (cur, prev) {
        if (prev === null || Math.abs(prev) < 1e-9)
            return '—';
        var change = ((cur - prev) / Math.abs(prev)) * 100;
        return "".concat(change.toFixed(1), "% vs FY").concat((selectedDropdownYear - 1));
    };
    var grossIsUp = grossMarginPrevious !== null ? grossMarginCurrent > grossMarginPrevious : false;
    var grossChangeLabel = calcPctChangeLabel(grossMarginCurrent, grossMarginPrevious);
    var profitIsUp = profitMarginPrevious !== null ? profitMarginCurrent > profitMarginPrevious : false;
    var profitChangeLabel = calcPctChangeLabel(profitMarginCurrent, profitMarginPrevious);
    function calculateOperatingExpenses(year) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var idx = financialAvailableYears.indexOf(year);
        var inc = (_a = companyIncomeByYear[year]) !== null && _a !== void 0 ? _a : {};
        // 1) explicit field if present
        var explicit = Number((_c = (_b = inc.operatingExpenses) !== null && _b !== void 0 ? _b : inc.opex) !== null && _c !== void 0 ? _c : 0);
        if (explicit > 0)
            return Math.round(explicit);
        // 2) estimate from P&L if grossProfit is available:
        // operatingExpenses = (revenue - cogs) - grossProfit
        var revenue = Number((_e = (_d = inc.revenue) !== null && _d !== void 0 ? _d : cashInFlowTotals[idx]) !== null && _e !== void 0 ? _e : 0);
        var cogs = Number((_f = inc.cogs) !== null && _f !== void 0 ? _f : 0);
        if (typeof inc.grossProfit === 'number') {
            var est = (revenue - cogs) - Number((_g = inc.grossProfit) !== null && _g !== void 0 ? _g : 0);
            if (!Number.isNaN(est))
                return Math.round(est);
        }
        // 3) fallback to otherExpenses or cash outflows for that year
        return Math.round(Number((_j = (_h = inc.otherExpenses) !== null && _h !== void 0 ? _h : cashOutFlowTotals[idx]) !== null && _j !== void 0 ? _j : 0));
    }
    function calculateOperatingProfit(year) {
        var _a, _b, _c, _d;
        var idx = financialAvailableYears.indexOf(year);
        var inc = (_a = companyIncomeByYear[year]) !== null && _a !== void 0 ? _a : {};
        // prefer explicit operatingProfit if present
        if (typeof inc.operatingProfit === 'number')
            return Math.round(inc.operatingProfit);
        var revenue = Number((_c = (_b = inc.revenue) !== null && _b !== void 0 ? _b : cashInFlowTotals[idx]) !== null && _c !== void 0 ? _c : 0);
        var cogs = Number((_d = inc.cogs) !== null && _d !== void 0 ? _d : 0);
        var opEx = calculateOperatingExpenses(year);
        return Math.round(revenue - cogs - opEx);
    }
    // compute values + previous year comparisons and formatted strings
    var operatingExpensesValue = calculateOperatingExpenses(selectedDropdownYear);
    var operatingExpensesPrev = financialAvailableYears.indexOf(selectedDropdownYear) > 0
        ? calculateOperatingExpenses(financialAvailableYears[financialAvailableYears.indexOf(selectedDropdownYear) - 1])
        : null;
    var operatingExpensesPct = operatingExpensesPrev !== null && Math.abs(operatingExpensesPrev) > 0
        ? ((operatingExpensesValue - operatingExpensesPrev) / Math.abs(operatingExpensesPrev)) * 100
        : null;
    var operatingExpensesFormatted = "".concat(operatingExpensesPct === null || operatingExpensesPct === void 0 ? void 0 : operatingExpensesPct.toFixed(1));
    var operatingExpensesIsUp = operatingExpensesPrev !== null ? operatingExpensesValue > operatingExpensesPrev : false;
    var operatingProfitValue = calculateOperatingProfit(selectedDropdownYear);
    var operatingProfitPrev = financialAvailableYears.indexOf(selectedDropdownYear) > 0
        ? calculateOperatingProfit(financialAvailableYears[financialAvailableYears.indexOf(selectedDropdownYear) - 1])
        : null;
    var operatingProfitPct = operatingProfitPrev !== null && Math.abs(operatingProfitPrev) > 0
        ? ((operatingProfitValue - operatingProfitPrev) / Math.abs(operatingProfitPrev)) * 100
        : null;
    var operatingProfitFormatted = "".concat(operatingProfitPct === null || operatingProfitPct === void 0 ? void 0 : operatingProfitPct.toFixed(1));
    var operatingProfitIsUp = operatingProfitPrev !== null ? operatingProfitValue > operatingProfitPrev : false;
    var income = (_h = companyIncomeByYear[selectedDropdownYear]) !== null && _h !== void 0 ? _h : {};
    var cogsVal = Number((_j = income.cogs) !== null && _j !== void 0 ? _j : 0);
    var revenueVal = Number((_k = cashInFlowTotals[idx]) !== null && _k !== void 0 ? _k : 0);
    var progressValue = revenueVal > 0 ? Number(((cogsVal / revenueVal) * 100).toFixed(2)) : 0;
    // const checkGreater = selectedDropdownYear != 2021 ? cashInFlowTotals[financialAvailableYears.indexOf(selectedDropdownYear)] > cashInFlowTotals[financialAvailableYears.indexOf(selectedDropdownYear) - 1] : true;
    // const incomePercentDifference = ((Math.abs(cashInFlowTotals[financialAvailableYears.indexOf(selectedDropdownYear) - 1] - cashInFlowTotals[financialAvailableYears.indexOf(selectedDropdownYear)]) / cashInFlowTotals[financialAvailableYears.indexOf(selectedDropdownYear)]) * 100).toFixed(1);
    var goodsSoldCard = function () { return MetricGoodsCard("Cost of Goods Sold", formatCurrency(cogsVal), true, progressValue, 'costgoods', "", "", "#000000"); };
    var totalIncomeCard = function () { return MetricCard("Total Income", formatCurrency(totalIncomeValue), totalIncomeFormatted, totalIncomeIsUp); };
    var netProfit = function () { return MetricCard("Net Profit", formatCurrency(netProfitValue), netProfitFormatted, netProfitIsUp); };
    var grossProfit = function () { return MetricCard("Gross Profit", formatCurrency(grossProfitValue), grossProfitFormatted, grossProfitIsUp); };
    var operatingExpenses = function () { return MetricCard("Operating Expenses", formatCurrency(operatingExpensesValue), operatingExpensesFormatted, operatingExpensesIsUp); };
    var operatingProfit = function () { return MetricCard("Operating Profit", formatCurrency(operatingProfitValue), operatingProfitFormatted, operatingProfitIsUp); };
    var profitMargin = function () { return gaugeProfitRatio(Math.min(Math.max(Math.round(profitMarginCurrent), 0), 100), // pointerValue
    'Profit Margin', // title
    "".concat(profitMarginCurrent.toFixed(1), "%"), // value shown
    Math.round(profitMarginCurrent), // percentageValue (gauge)
    profitChangeLabel, // yearComparisonText
    '#EF9A53', // pointerColor
    'profitmargin', // id
    profitIsUp); };
    var grossMargin = function () { return gaugeProfitRatio(Math.min(Math.max(Math.round(grossMarginCurrent), 0), 100), 'Gross Margin', "".concat(grossMarginCurrent.toFixed(1), "%"), Math.round(grossMarginCurrent), grossChangeLabel, '#863A6F', 'grossmargin', grossIsUp); };
    var MetricGoodsCard = function (title, value, showProgress, progressValue, id, context, text, color) { return (React.createElement("div", { id: 'main-finance-div' },
        React.createElement("div", { id: 'title-finance-card' }, title),
        React.createElement("div", { id: 'card-finance-value' }, value))); };
    var MetricCard = function (title, value, comparisonValue, arrowUp) {
        var chipBg = arrowUp ? '#dcfce7' : '#fee2e2';
        var chipText = arrowUp ? '#166534' : '#991b1b';
        return (React.createElement("div", { id: 'main-finance-div' },
            React.createElement("div", { id: 'title-finance-card' }, title),
            React.createElement("div", { id: 'card-finance-value' }, value),
            React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 } },
                React.createElement("span", { style: {
                        color: arrowUp ? '#16a34a' : '#dc2626',
                        fontWeight: 600
                    } },
                    arrowUp ? '▲' : '▼',
                    " ",
                    comparisonValue,
                    "%"),
                React.createElement("span", { style: { fontSize: 12 } },
                    "vs ",
                    selectedDropdownYear - 1))));
    };
    var gaugeProfitRatio = function (pointerValue, title, value, percentageValue, yearComparisonText, pointerColor, id, arrowUp) {
        // Light track color from the same hue
        var toRGBA = function (hex, a) {
            if (a === void 0) { a = 0.20; }
            var m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            if (!m)
                return "rgba(0,0,0,".concat(a, ")");
            var r = parseInt(m[1], 16), g = parseInt(m[2], 16), b = parseInt(m[3], 16);
            return "rgba(".concat(r, ",").concat(g, ",").concat(b, ",").concat(a, ")");
        };
        var trackColor = toRGBA(pointerColor, 0.20);
        var chipBg = arrowUp ? '#dcfce7' : '#fee2e2';
        var chipText = arrowUp ? '#166534' : '#991b1b';
        var chipArrow = arrowUp ? '▲' : '▼';
        return (React.createElement("div", { className: 'gauge-center' },
            React.createElement(ej2_react_circulargauge_1.CircularGaugeComponent, { id: id, background: "transparent", load: onGaugeLoad, title: title, titleStyle: { fontWeight: '400', size: '14px' }, height: "100%", width: "100%", allowMargin: false },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_circulargauge_1.Annotations] }),
                React.createElement(ej2_react_circulargauge_1.AxesDirective, null,
                    React.createElement(ej2_react_circulargauge_1.AxisDirective, { radius: '82%', startAngle: 270, endAngle: 90, minimum: 0, maximum: 100, majorTicks: { interval: 10, height: 0, width: 0 }, minorTicks: { interval: 1, height: 0, width: 0 }, labelStyle: { format: 'n1', font: { size: '0px' } }, lineStyle: { width: 0 } },
                        React.createElement(ej2_react_circulargauge_1.PointersDirective, null,
                            React.createElement(ej2_react_circulargauge_1.PointerDirective, { value: 100, radius: "100%", type: "RangeBar", color: trackColor, pointerWidth: 35, roundedCornerRadius: 16, animation: { enable: false } }),
                            React.createElement(ej2_react_circulargauge_1.PointerDirective, { value: percentageValue, radius: "100%", type: "RangeBar", color: pointerColor, pointerWidth: 35, roundedCornerRadius: 16, animation: { enable: false } })),
                        React.createElement(ej2_react_circulargauge_1.AnnotationsDirective, null,
                            React.createElement(ej2_react_circulargauge_1.AnnotationDirective, { content: "<div><div><span style=\"font-size:28px;font-weight:500;\"><b> ".concat(percentageValue, "% </b></span></div></div>"), zIndex: "1", angle: 0, radius: "20%" }),
                            React.createElement(ej2_react_circulargauge_1.AnnotationDirective, { content: "\n                  <div><div>\n                    <div class=\"irr-chip-block\">\n                      <span class=\"irr-chip\" style=\"background:".concat(chipBg, ";color:").concat(chipText, ";padding:6px 8px;border-radius:6px;margin-right:6px;\">\n                        ").concat(chipArrow, "  <span class=\"irr-vs\"> ").concat(yearComparisonText, "</span>\n                      </span>\n                    </div>\n                  </div></div>\n                "), zIndex: "1", angle: 155, radius: "35%" })))))));
    };
    return (React.createElement("div", { className: "Container" },
        React.createElement("div", { className: "e-card cs-toolbar" },
            React.createElement("div", { className: "cs-toolbar-left" },
                React.createElement("span", { className: "cs-title" }, "Financial Performance")),
            React.createElement("div", { className: "cs-toolbar-right" },
                React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { dataSource: financialAvailableYears.filter(function (y) { return y !== 2021; }), value: selectedDropdownYear, placeholder: "Select year", change: onYearChange }))),
        React.createElement(ej2_react_layouts_1.DashboardLayoutComponent, { ref: profitlossRef, id: "profitloss_dashboard", style: { height: '100%', width: '100%' }, columns: 8, cellAspectRatio: 1, cellSpacing: cellSpacing, allowResizing: false, allowDragging: false, mediaQuery: "(max-width:950px)" },
            React.createElement(ej2_react_layouts_1.PanelsDirective, null,
                React.createElement(ej2_react_layouts_1.PanelDirective, { id: "goodssold", sizeX: 2, sizeY: 1, row: 0, col: 0, content: goodsSoldCard }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { id: "totalincome", sizeX: 2, sizeY: 1, row: 0, col: 2, content: totalIncomeCard }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { id: "operatingexpensecard", sizeX: 2, sizeY: 1, row: 0, col: 4, content: operatingExpenses }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { id: "operatingprofitcard", sizeX: 2, sizeY: 1, row: 0, col: 6, content: operatingProfit }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { id: "netprofitcard", sizeX: 2, sizeY: 1, row: 2, col: 0, content: netProfit }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { id: "grossprofitcard", sizeX: 2, sizeY: 1, row: 3, col: 0, content: grossProfit }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { id: "profitmargincard", sizeX: 3, sizeY: 2, row: 2, col: 2, content: profitMargin }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { id: "grossmargincard", sizeX: 3, sizeY: 2, row: 2, col: 5, content: grossMargin }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 8, sizeY: 3, row: 5, col: 0, header: "<div>Operating Profit Breakdown</div>", content: operatingProfitBreakdown }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 8, sizeY: 4, row: 8, col: 2, header: "<div>Income and Expenses Breakdown Over Year</div>", content: incomeExpenseProfit })))));
};
// Dashboard 3 (Cash Flow and Liquidity) with title + droddown with years
var CashFlowDashboard = function (_a) {
    var selectedYear = _a.selectedYear, onYearChange = _a.onYearChange;
    var selectedDropdownYear = selectedYear;
    var _b = (0, react_1.useState)({ type: null }), cashDrill = _b[0], setCashDrill = _b[1];
    var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var cashflowRef = React.useRef(null);
    var debtChartRef = React.useRef(null);
    var burnchartRef = React.useRef(null);
    var inventoryChartRef = React.useRef(null);
    var turnoverChartRef = React.useRef(null);
    var monthlyCashRef = React.useRef(null);
    var overallcashRef = React.useRef(null);
    React.useEffect(function () {
        var timer;
        var refreshAll = function () {
            clearTimeout(timer);
            timer = setTimeout(function () {
                var _a, _b, _c, _d, _e, _f, _g;
                (_a = cashflowRef.current) === null || _a === void 0 ? void 0 : _a.refresh();
                (_b = debtChartRef.current) === null || _b === void 0 ? void 0 : _b.refresh();
                (_c = burnchartRef.current) === null || _c === void 0 ? void 0 : _c.refresh();
                (_d = inventoryChartRef.current) === null || _d === void 0 ? void 0 : _d.refresh();
                (_e = turnoverChartRef.current) === null || _e === void 0 ? void 0 : _e.refresh();
                (_f = monthlyCashRef.current) === null || _f === void 0 ? void 0 : _f.refresh();
                (_g = overallcashRef.current) === null || _g === void 0 ? void 0 : _g.refresh();
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
    var overallCashData = [
        { year: '2020', cash: 20000 },
        { year: '2021', cash: 18900 },
        { year: '2022', cash: 25400 },
        { year: '2023', cash: 26400 },
        { year: '2024', cash: 24400 },
        { year: '2025', cash: 27400 }, // $27.4K
    ];
    var debtData = [
        { month: 'Jan', value: 49000 },
        { month: 'Feb', value: 55000 },
        { month: 'Mar', value: 130000 },
        { month: 'Apr', value: 30000 },
        { month: 'May', value: 50000 },
        { month: 'Jun', value: 80000 },
        { month: 'Jul', value: 7000 },
        { month: 'Aug', value: 1000 },
        { month: 'Sep', value: 8000 },
        { month: 'Oct', value: 7000 },
        { month: 'Nov', value: 4000 },
        { month: 'Dec', value: 2000 },
    ];
    var onTextRender = function (args) {
        // only modify series data labels (args.point exists for data-label rendering)
        if (args.point && typeof args.point.y === 'number') {
            args.text = formatCurrency(Number(args.point.y));
        }
    };
    var onCurrencyTooltip = function (args) {
        var _a, _b, _c, _d, _e, _f;
        var y = Number((_b = (_a = args === null || args === void 0 ? void 0 : args.point) === null || _a === void 0 ? void 0 : _a.y) !== null && _b !== void 0 ? _b : 0);
        var x = String((_d = (_c = args === null || args === void 0 ? void 0 : args.point) === null || _c === void 0 ? void 0 : _c.x) !== null && _d !== void 0 ? _d : '');
        var series = String((_f = (_e = args === null || args === void 0 ? void 0 : args.series) === null || _e === void 0 ? void 0 : _e.name) !== null && _f !== void 0 ? _f : '');
        args.text = series ? "".concat(x, " : ").concat(formatCurrency(y)) : "".concat(x, ": ").concat(formatCurrency(y));
    };
    var formatYAxisDollar = function (args) {
        var _a;
        if (((_a = args.axis) === null || _a === void 0 ? void 0 : _a.name) === 'primaryYAxis') {
            var v = Number(args.value || 0);
            args.text = formatCurrency(v);
        }
    };
    var inventoryTurnOverData = (0, react_1.useMemo)(function () {
        return financialAvailableYears.map(function (y) {
            var _a, _b, _c, _d, _e, _f;
            var i = financialAvailableYears.indexOf(y);
            var quarters = (_a = companyShareGroupedByYear[y]) !== null && _a !== void 0 ? _a : [];
            // average inventory across quarters (fallback to last quarter or 0)
            var invValues = quarters.map(function (q) { var _a; return getAmount((_a = q.assets) !== null && _a !== void 0 ? _a : [], 'inventory'); });
            var avgInventory = invValues.length ? (invValues.reduce(function (s, v) { return s + v; }, 0) / invValues.length) : 0;
            // prefer explicit COGS from income statement, else estimate as 60% of revenue, else use outflows
            var inc = (_b = companyIncomeByYear[y]) !== null && _b !== void 0 ? _b : {};
            var cogs = Number((_c = inc.cogs) !== null && _c !== void 0 ? _c : 0);
            if (!cogs) {
                var revenue = Number((_e = (_d = inc.revenue) !== null && _d !== void 0 ? _d : cashInFlowTotals[i]) !== null && _e !== void 0 ? _e : 0);
                cogs = revenue ? Math.round(revenue * 0.6) : Math.round((_f = cashOutFlowTotals[i]) !== null && _f !== void 0 ? _f : 0);
            }
            var turnover = avgInventory > 0 ? (cogs / avgInventory) : 0;
            return { year: String(y), turnover: Number(turnover.toFixed(2)) };
        });
    }, [financialAvailableYears, companyShareGroupedByYear, companyIncomeByYear, cashInFlowTotals, cashOutFlowTotals]);
    var availableYears = (0, react_1.useMemo)(function () { return Array.from(new Set(overallCashData.map(function (d) { return d.year; }))); }, []);
    var _c = (0, react_1.useState)(availableYears), selectedYears = _c[0], setSelectedYears = _c[1];
    var turnoverData = (0, react_1.useMemo)(function () {
        return financialAvailableYears.map(function (y) {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            var idx = financialAvailableYears.indexOf(y);
            var revenue = Number((_c = (_b = (_a = companyIncomeByYear[y]) === null || _a === void 0 ? void 0 : _a.revenue) !== null && _b !== void 0 ? _b : cashInFlowTotals[idx]) !== null && _c !== void 0 ? _c : 0);
            // prefer explicit COGS; fallback to a sensible estimate (60% of revenue)
            var cogs = Number((_e = (_d = companyIncomeByYear[y]) === null || _d === void 0 ? void 0 : _d.cogs) !== null && _e !== void 0 ? _e : 0);
            if (!cogs && revenue)
                cogs = Math.round(revenue * 0.6);
            var quarters = (_f = companyShareGroupedByYear[y]) !== null && _f !== void 0 ? _f : [];
            var avg = function (arr) { return arr.length ? arr.reduce(function (s, v) { return s + v; }, 0) / arr.length : 0; };
            // average Accounts Receivable and Accounts Payable across quarters for the year
            var avgAR = avg(quarters.map(function (q) { var _a; return getAmount((_a = q.assets) !== null && _a !== void 0 ? _a : [], 'ar'); }));
            var avgAP = avg(quarters.map(function (q) { var _a; return getAmount((_a = q.liabilities) !== null && _a !== void 0 ? _a : [], 'ap'); }));
            var arTurnover = avgAR > 0 ? revenue / avgAR : 0; // times per year
            var apTurnover = avgAP > 0 ? cogs / avgAP : 0; // times per year
            // present as percentage-like value if you want percent (e.g. convert to % of 1)
            // here we keep times-per-year and also provide percent-format helper below in chart labels
            return {
                year: String(y),
                arTurnover: Number(arTurnover.toFixed(1)),
                apTurnover: Number(apTurnover.toFixed(1)),
                // keep inventoryTurnover placeholder if used elsewhere
                inventoryTurnover: Number(((revenue && getAmount((_h = (_g = quarters[0]) === null || _g === void 0 ? void 0 : _g.assets) !== null && _h !== void 0 ? _h : [], 'inventory')) ? (revenue / Math.max(1, getAmount(quarters[0].assets, 'inventory'))) : 0).toFixed(2))
            };
        });
    }, [financialAvailableYears, companyIncomeByYear, companyShareGroupedByYear, cashInFlowTotals]);
    // filteredTurnOverData should use the computed turnoverData
    var filteredTurnOverData = (0, react_1.useMemo)(function () {
        return selectedYears.length
            ? turnoverData.filter(function (d) { return selectedYears.includes(d.year); })
            : turnoverData;
    }, [selectedYears, turnoverData]);
    var filteredInventoryData = (0, react_1.useMemo)(function () {
        return selectedYears.length
            ? inventoryTurnOverData.filter(function (d) { return selectedYears.includes(d.year); })
            : inventoryTurnOverData;
    }, [selectedYears]);
    var buildBurnSeriesFromData = function (year) {
        var _a, _b, _c, _d, _e;
        var periodIndex = financialAvailableYears.indexOf(Number(year)) + 1;
        var outflowSeries = (_c = ((_b = (_a = financeData.cashOutFlows) === null || _a === void 0 ? void 0 : _a.series) !== null && _b !== void 0 ? _b : []).find(function (s) { return s.period === periodIndex; })) !== null && _c !== void 0 ? _c : null;
        var months = MONTHS;
        // monthly raw amounts (fallback to cashOutFlowGroupCollection monthamounts)
        var monthlyRaw = ((_e = (_d = outflowSeries === null || outflowSeries === void 0 ? void 0 : outflowSeries.monthlyseries) !== null && _d !== void 0 ? _d : cashOutFlowGroupCollection[financialAvailableYears.indexOf(year)]) !== null && _e !== void 0 ? _e : []).map(function (m, i) {
            var _a, _b;
            return ({
                monthIndex: i,
                month: months[i],
                amount: Number((_b = (_a = m === null || m === void 0 ? void 0 : m.amount) !== null && _a !== void 0 ? _a : m === null || m === void 0 ? void 0 : m.monthamount) !== null && _b !== void 0 ? _b : 0),
                breakdown: Array.isArray(m === null || m === void 0 ? void 0 : m.breakdown) ? m.breakdown : undefined
            });
        });
        // ensure length 12
        while (monthlyRaw.length < 12)
            monthlyRaw.push({ monthIndex: monthlyRaw.length, month: months[monthlyRaw.length], amount: 0 });
        // category list (from annual breakdown if present, otherwise common outflow ids)
        var categoriesFromAnnual = Array.isArray(outflowSeries === null || outflowSeries === void 0 ? void 0 : outflowSeries.breakdown) ? outflowSeries.breakdown : [];
        var defaultCats = [
            { id: 'payroll', name: 'Payroll' },
            { id: 'opex', name: 'Operating Expenses' },
            { id: 'taxes', name: 'Taxes' },
            { id: 'capex', name: 'Capex' },
            { id: 'rent', name: 'Rent / Facilities' },
            { id: 'interest', name: 'Interest' },
            { id: 'other', name: 'Other' }
        ];
        var cats = categoriesFromAnnual.length ? categoriesFromAnnual.map(function (c) { var _a, _b, _c, _d; return ({ id: String((_a = c.id) !== null && _a !== void 0 ? _a : c.name).toLowerCase(), name: (_b = c.name) !== null && _b !== void 0 ? _b : c.id, annual: Number((_d = (_c = c.amount) !== null && _c !== void 0 ? _c : c.value) !== null && _d !== void 0 ? _d : 0) }); }) : defaultCats.map(function (c) { return ({ id: c.id, name: c.name, annual: 0 }); });
        // if we have annual breakdown but no monthly breakdown, distribute proportionally to monthlyRaw amounts
        var totalMonthlySum = monthlyRaw.reduce(function (s, m) { return s + m.amount; }, 0) || 0;
        return cats.map(function (cat, ci) {
            var monthly = monthlyRaw.map(function (m) {
                var _a, _b;
                // priority: per-month breakdown if present
                var md = Array.isArray(m.breakdown) ? m.breakdown.find(function (b) { var _a; return String((_a = b.id) !== null && _a !== void 0 ? _a : b.name).toLowerCase() === cat.id; }) : null;
                if (md)
                    return { month: m.month, value: Number((_b = (_a = md.amount) !== null && _a !== void 0 ? _a : md.value) !== null && _b !== void 0 ? _b : 0) };
                // else if annual known, distribute by month weight
                if (cat.annual && totalMonthlySum > 0) {
                    var v = Math.round((m.amount / totalMonthlySum) * cat.annual);
                    return { month: m.month, value: v };
                }
                // else fallback: if no annual or breakdown, try to infer by tag in monthly breakdown items
                return { month: m.month, value: 0 };
            });
            return { id: cat.id || "cat".concat(ci), name: cat.name || "Category ".concat(ci + 1), monthly: monthly };
        });
    };
    // build monthly debt data (shortDebt / longDebt) for a given year from companyshares
    var buildMonthlyDebtFromCompanyShares = function (year) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var quarters = (_a = companyShareGroupedByYear[year]) !== null && _a !== void 0 ? _a : [];
        // map quarter name -> aggregated debt amounts (if multiple entries per quarter sum them)
        var qMap = {};
        for (var _i = 0, quarters_2 = quarters; _i < quarters_2.length; _i++) {
            var q = quarters_2[_i];
            var qKey = ((_b = q.quarter) !== null && _b !== void 0 ? _b : '').toLowerCase(); // e.g., "quarter 1"
            (_c = qMap[qKey]) !== null && _c !== void 0 ? _c : (qMap[qKey] = { shortDebt: 0, longDebt: 0 });
            qMap[qKey].shortDebt += getAmount((_d = q.liabilities) !== null && _d !== void 0 ? _d : [], 'shortDebt');
            qMap[qKey].longDebt += getAmount((_e = q.liabilities) !== null && _e !== void 0 ? _e : [], 'longDebt');
        }
        // default to 0 if quarter missing
        var qValues = [
            (_f = qMap['quarter 1']) !== null && _f !== void 0 ? _f : { shortDebt: 0, longDebt: 0 },
            (_g = qMap['quarter 2']) !== null && _g !== void 0 ? _g : { shortDebt: 0, longDebt: 0 },
            (_h = qMap['quarter 3']) !== null && _h !== void 0 ? _h : { shortDebt: 0, longDebt: 0 },
            (_j = qMap['quarter 4']) !== null && _j !== void 0 ? _j : { shortDebt: 0, longDebt: 0 },
        ];
        // assign quarter values to months in that quarter (use same balance for each month in quarter)
        var monthly = [];
        for (var q = 0; q < 4; q++) {
            var start = q * 3;
            for (var m = 0; m < 3; m++) {
                monthly.push({
                    month: MONTHS[start + m],
                    shortDebt: qValues[q].shortDebt,
                    longDebt: qValues[q].longDebt
                });
            }
        }
        return monthly;
    };
    var _d = (0, react_1.useState)(null), yearDrill = _d[0], setYearDrill = _d[1]; // <-- new state for overallCashByYear drill
    var overallCashByYear = function () {
        var data = financialAvailableYears.map(function (y, i) {
            var _a, _b;
            var inflow = Number((_a = cashInFlowTotals[i]) !== null && _a !== void 0 ? _a : 0);
            var outflow = Number((_b = cashOutFlowTotals[i]) !== null && _b !== void 0 ? _b : 0);
            var balance = typeof cashBalances[i] === 'number' ? cashBalances[i] : (inflow - outflow);
            var val = Math.round(balance);
            var label = val >= 1000000 ? "".concat((val / 1000000).toFixed(1), "M") : formatCurrency(val);
            return { year: Number(y), yearStr: String(y), cash: val, label: label };
        });
        var shown = selectedYears && selectedYears.length ? data.filter(function (d) { return selectedYears.includes(d.yearStr); }) : data;
        var onAxisLabelRender = function (args) {
            if (args.axis && args.axis.name === 'primaryYAxis') {
                args.text = formatCurrency(Number(args.text));
            }
        };
        var onChartMouseClick = function (args) {
            var _a, _b;
            var targetId = args.target || ((_b = (_a = args.event) === null || _a === void 0 ? void 0 : _a.target) === null || _b === void 0 ? void 0 : _b.id);
            var _c = getAxisLabelFromTarget(targetId), text = _c.text, year = _c.year;
            if (year) {
                setYearDrill(year); // call existing drill function with the year
            }
        };
        // handle clicking a year column -> drill to monthly view
        var onPointClick = function (args) {
            var _a, _b, _c, _d, _e;
            var yearNum = Number((_d = (_b = (_a = args === null || args === void 0 ? void 0 : args.point) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : (_c = args === null || args === void 0 ? void 0 : args.point) === null || _c === void 0 ? void 0 : _c.category) !== null && _d !== void 0 ? _d : (_e = args === null || args === void 0 ? void 0 : args.point) === null || _e === void 0 ? void 0 : _e.label);
            if (!isNaN(yearNum))
                setYearDrill(yearNum);
        };
        // build monthly datasource for a drilled year (net and cumulative)
        var buildMonthlyForYear = function (year) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
            var idx = financialAvailableYears.indexOf(year);
            var inflowGroup = (_a = cashInFlowGroupCollection[idx]) !== null && _a !== void 0 ? _a : [];
            var outflowGroup = (_b = cashOutFlowGroupCollection[idx]) !== null && _b !== void 0 ? _b : [];
            var months = MONTHS;
            // 1) compute monthly net values
            var nets = [];
            for (var i = 0; i < 12; i++) {
                var inflow = Number((_d = (_c = inflowGroup[i]) === null || _c === void 0 ? void 0 : _c.monthamount) !== null && _d !== void 0 ? _d : 0);
                var outflow = Number((_f = (_e = outflowGroup[i]) === null || _e === void 0 ? void 0 : _e.monthamount) !== null && _f !== void 0 ? _f : 0);
                nets.push(inflow - outflow);
            }
            var annualNet = nets.reduce(function (s, n) { return s + n; }, 0);
            // 2) determine canonical year-end cash from company shares (Q4 closing). If present, use it to derive starting cash.
            var yearEndCash = getYearEndCashFromShares(year);
            var startingCash;
            if (yearEndCash !== null) {
                // starting such that starting + annualNet = yearEndCash
                startingCash = Math.round(yearEndCash - annualNet);
            }
            else {
                // fallback: use opening cash from companyshares first quarter if available, else previous year balance or 0
                var yearQuarters = (_g = companyShareGroupedByYear[year]) !== null && _g !== void 0 ? _g : [];
                var openingCash = Number((_k = getAmount((_j = (_h = yearQuarters[0]) === null || _h === void 0 ? void 0 : _h.assets) !== null && _j !== void 0 ? _j : [], 'cash')) !== null && _k !== void 0 ? _k : 0);
                var prevBalance = (_l = cashBalances[financialAvailableYears.indexOf(year) - 1]) !== null && _l !== void 0 ? _l : 0;
                startingCash = openingCash || prevBalance || 0;
            }
            // 3) build running balances month-by-month (closing after each month)
            var running = startingCash;
            var cumulativeNet = 0;
            var monthly = [];
            for (var i = 0; i < 12; i++) {
                var net = (_m = nets[i]) !== null && _m !== void 0 ? _m : 0;
                cumulativeNet += net; // running total of monthly nets
                running += net;
                monthly.push({ month: months[i], net: Math.round(net), cumulativeNet: Math.round(cumulativeNet), balance: Math.round(running) });
            }
            // If we had a yearEndCash from shares, ensure last month matches it (small rounding corrections)
            if (yearEndCash !== null && monthly.length === 12) {
                var diff = yearEndCash - monthly[11].balance;
                if (diff !== 0) {
                    // apply adjustment to December balance (and month) to preserve totals
                    monthly[11].balance = Math.round(monthly[11].balance + diff);
                }
            }
            return monthly;
        };
        // back to year view
        var clearDrill = function () { return setYearDrill(null); };
        // render monthly drill (if set)
        if (yearDrill !== null) {
            var monthlyData = buildMonthlyForYear(yearDrill);
            return (React.createElement("div", { style: { height: '100%', width: '100%', display: 'flex', flexDirection: 'column', gap: 8 } },
                React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' } },
                    React.createElement("div", { style: { fontWeight: 600, padding: '10px' } }, "Cash by Month \u2014 FY".concat(yearDrill)),
                    React.createElement("div", { style: { display: 'flex', gap: 8 } },
                        React.createElement("button", { onClick: clearDrill, style: { background: 'transparent', padding: '6px 10px', borderRadius: 6 } }, "Back"))),
                React.createElement(ej2_react_charts_1.ChartComponent, { id: 'monthly-cash-drill', ref: monthlyCashRef, load: onChartLoad, chartArea: { border: { width: 0 } }, primaryXAxis: { valueType: 'Category', majorGridLines: { width: 0 } }, tooltip: { enable: true }, legendSettings: { visible: false }, axisLabelRender: onAxisLabelRender, textRender: onTextRender, tooltipRender: onCurrencyTooltip },
                    React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.ColumnSeries, ej2_react_charts_1.SplineSeries, ej2_react_charts_1.Legend, ej2_react_charts_1.Tooltip, ej2_react_charts_1.DataLabel, ej2_react_charts_1.Category] }),
                    React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                        React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: monthlyData, xName: 'month', yName: 'balance', name: 'Cash', type: 'Column', fill: '#F675A8', marker: { dataLabel: { visible: true, position: 'Outer', format: '${value}' } }, animation: { enable: false } }),
                        React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: monthlyData, xName: 'month', yName: 'cumulativeNet', name: 'Net Cash Flow', type: 'Spline', fill: '#87A2FB', marker: { visible: true }, animation: { enable: false } })))));
        }
        // default: year-level column chart with pointClick to drill
        return (React.createElement("div", { style: { height: "100%", width: "100%", padding: 8 } },
            React.createElement(ej2_react_charts_1.ChartComponent, { id: 'areachart', ref: overallcashRef, load: onChartLoad, axisLabelRender: onAxisLabelRender, tooltip: { enable: true }, chartArea: { border: { width: 0 } }, legendSettings: { visible: false }, primaryXAxis: { valueType: 'Category', majorGridLines: { width: 0 } }, pointClick: onPointClick, chartMouseClick: onChartMouseClick, tooltipRender: onCurrencyTooltip },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.ColumnSeries, ej2_react_charts_1.LineSeries, ej2_react_charts_1.Legend, ej2_react_charts_1.Tooltip, ej2_react_charts_1.DataLabel, ej2_react_charts_1.Category] }),
                React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: shown, fill: "#87A2FB", xName: 'yearStr', yName: 'cash', type: 'Column', marker: { dataLabel: { visible: true, position: 'Top', name: 'label' }, visible: true, width: 8, height: 8 }, animation: { enable: false } })))));
    };
    var inventoryTurnover = function () {
        var TARGET = 1.1;
        var targetLabel = "Target (".concat(TARGET.toFixed(1), ")");
        // Build a matching array for the target line (one point per category)
        var targetData = inventoryTurnOverData.map(function (d) { return ({ year: d.year, target: TARGET }); });
        return (React.createElement("div", { style: { height: "100%", width: "100%", padding: 8 } },
            React.createElement(ej2_react_charts_1.ChartComponent, { id: "inventory-turnover", ref: inventoryChartRef, load: onChartLoad, primaryXAxis: {
                    valueType: 'Category',
                    majorGridLines: { width: 0 },
                    labelIntersectAction: 'Rotate45', // keeps labels readable
                }, primaryYAxis: {
                    minimum: 0,
                    maximum: 1.5,
                    interval: 0.2,
                    lineStyle: { width: 0 },
                    majorTickLines: { width: 0 },
                    stripLines: [
                        {
                            start: 0,
                            end: 1.5,
                            text: '',
                            color: '#e5dcf6',
                            opacity: 0.5,
                            visible: true,
                            textStyle: { color: '#6840d8', size: '12px' },
                        },
                    ],
                }, chartArea: { border: { width: 0 } }, tooltip: {
                    enable: true,
                    header: 'Inventory Turnover',
                    format: 'Year: ${point.x} <br/> Turnover: ${point.y} <br/> Target: 1.1',
                }, legendSettings: { visible: true } },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.ColumnSeries, ej2_react_charts_1.LineSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Tooltip, ej2_react_charts_1.Legend, ej2_react_charts_1.StripLine, ej2_react_charts_1.DataLabel] }),
                React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.SeriesDirective, { type: "Column", dataSource: filteredInventoryData, xName: "year", yName: "turnover", name: "Higher turnover - faster inventory movement", columnSpacing: 0.25, marker: { visible: true, dataLabel: { visible: true } }, fill: "#C539B4" // reddish as in your image
                        , border: { width: 0 }, animation: { enable: false } }),
                    React.createElement(ej2_react_charts_1.SeriesDirective, { type: "Line", dataSource: targetData, xName: "year", yName: "target", name: targetLabel, width: 3, dashArray: "8 6", fill: "#73467D", marker: { visible: false }, animation: { enable: false } })))));
    };
    var turnoverChart = function () {
        var AR_TARGET = 2.6;
        var AP_TARGET = 1.5;
        var arTargetLabel = "AR Target \u2265 ".concat(AR_TARGET, "x");
        var apTargetLabel = "AP Target \u2264 ".concat(AP_TARGET, "x");
        // build horizontal target series that match the visible categories
        var arTargetData = filteredTurnOverData.map(function (d) { return ({ year: d.year, target: AR_TARGET }); });
        var apTargetData = filteredTurnOverData.map(function (d) { return ({ year: d.year, target: AP_TARGET }); });
        return (React.createElement("div", { style: { height: "100%", width: "100%", padding: 8 } },
            React.createElement(ej2_react_charts_1.ChartComponent, { id: "turnover-chart", load: onChartLoad, ref: turnoverChartRef, chartArea: { border: { width: 0 } }, primaryXAxis: {
                    valueType: 'Category',
                    majorGridLines: { width: 0 },
                }, primaryYAxis: {
                    minimum: 0,
                    maximum: 4,
                    interval: 0.5
                }, tooltip: { enable: true, format: 'Year: ${point.x} <br/> Turnover: ${point.y}' }, legendSettings: { visible: true, position: 'Bottom' } },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.ColumnSeries, ej2_react_charts_1.LineSeries, ej2_react_charts_1.Legend, ej2_react_charts_1.Tooltip, ej2_react_charts_1.DataLabel, ej2_react_charts_1.Category] }),
                React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: filteredTurnOverData, xName: "year", yName: "arTurnover", name: "Higher AR Turnover - faster customer collections", type: "Column", marker: { dataLabel: { visible: true, position: 'Middle', format: '{value}' } }, fill: "#87A2FB", animation: { enable: false } }),
                    React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: filteredTurnOverData, xName: "year", yName: "apTurnover", name: "Lower AP Turnover - slower supplier payments", type: "Column", marker: { dataLabel: { visible: true, position: 'Middle', format: '{value}' } }, fill: "#F675A8", animation: { enable: false } }),
                    React.createElement(ej2_react_charts_1.SeriesDirective, { type: "Line", dataSource: arTargetData, xName: "year", yName: "target", width: 2, dashArray: "6 6", fill: "#888", marker: { visible: false }, animation: { enable: false } }),
                    React.createElement(ej2_react_charts_1.SeriesDirective, { type: "Line", dataSource: apTargetData, xName: "year", yName: "target", width: 2, dashArray: "4 4", fill: "#888", marker: { visible: false }, animation: { enable: false } })))));
    };
    var burnLineChart = function () {
        var selYear = Number(selectedDropdownYear) || financialAvailableYears[financialAvailableYears.length - 1];
        var burnSeries = buildBurnSeriesFromData(selYear);
        var palette = ['#7DE5ED', '#D989B5', '#F675A8', '#73467D', '#FFADBC', '#87A2FB', '#EF9A53', '#C539B4', '#645CAA'];
        // compute stacked totals for axis bounds
        var monthlyTotals = MONTHS.map(function (m, mi) {
            return burnSeries.reduce(function (s, bs) { var _a, _b; return s + ((_b = (_a = bs.monthly[mi]) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : 0); }, 0);
        });
        var maxTotal = monthlyTotals.length ? Math.max.apply(Math, monthlyTotals) : 0;
        var yPadding = Math.max(1, Math.round(maxTotal * 0.12));
        var yMin = 0;
        var yMax = Math.ceil(maxTotal + yPadding);
        var yInterval = Math.max(1, Math.round((yMax - yMin) / 4));
        return (React.createElement("div", { style: { height: '100%', width: '100%', padding: 8 } },
            React.createElement(ej2_react_charts_1.ChartComponent, { id: 'burnline', load: onChartLoad, ref: burnchartRef, chartArea: { border: { width: 0 } }, primaryXAxis: { valueType: 'Category', majorGridLines: { width: 0 } }, primaryYAxis: {
                    majorGridLines: { width: 0.5 }
                }, tooltip: { enable: true, header: '${series.name}' }, legendSettings: { visible: false, position: 'Bottom' }, axisLabelRender: formatYAxisDollar, tooltipRender: onCurrencyTooltip },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.StackingColumnSeries, ej2_react_charts_1.DataLabel, ej2_react_charts_1.Category, ej2_react_charts_1.Legend, ej2_react_charts_1.Tooltip] }),
                React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null, burnSeries.map(function (bs, i) { return (React.createElement(ej2_react_charts_1.SeriesDirective, { key: bs.id, dataSource: bs.monthly, xName: 'month', yName: 'value', type: 'StackingColumn', name: bs.name, fill: palette[i % palette.length], columnWidth: 0.6, marker: { dataLabel: { visible: false } }, animation: { enable: false } })); })))));
    };
    var debtHeader = function () {
        return (React.createElement("div", { className: "finance-panel-header" },
            React.createElement("div", null, "Long\u2011term vs Short\u2011term Debt Trend")));
    };
    var burnHeader = function () {
        return (React.createElement("div", { className: "finance-panel-header" },
            React.createElement("div", null, "Expense Burn by Month")));
    };
    var overallCashHeader = function () {
        return (React.createElement("div", { className: "finance-panel-header" },
            React.createElement("div", null, "Overall Cash by Years")));
    };
    var turnOverHeader = function () {
        return (React.createElement("div", { className: "finance-panel-header" },
            React.createElement("div", null, "Annual Account Receivable and Account Payable Turnover Comparison"),
            " ",
            React.createElement("br", null)));
    };
    var inventoryHeader = function () {
        return (React.createElement("div", { className: "finance-panel-header" },
            React.createElement("div", null, "Inventory Turnover Trend vs Target")));
    };
    var debtLineChart = function () {
        // build monthly debt for selected year (fallback to latest)
        var selYear = Number(selectedDropdownYear) || financialAvailableYears[financialAvailableYears.length - 1];
        var monthlyDebt = buildMonthlyDebtFromCompanyShares(selYear);
        // compute min/max across both series and add padding so smaller series remains visible
        var shortVals = monthlyDebt.map(function (d) { var _a; return (_a = d.shortDebt) !== null && _a !== void 0 ? _a : 0; });
        var longVals = monthlyDebt.map(function (d) { var _a; return (_a = d.longDebt) !== null && _a !== void 0 ? _a : 0; });
        var maxVal = Math.max.apply(Math, __spreadArray(__spreadArray(__spreadArray([], shortVals, false), longVals, false), [0], false));
        var minVal = 0;
        var padding = Math.max(1, Math.round((maxVal - minVal) * 0.12)); // 12% padding
        var yMin = Math.max(0, Math.floor(minVal - padding));
        var yMax = Math.ceil(maxVal + padding);
        var yInterval = Math.max(1, Math.round((yMax - yMin) / 4));
        // colors
        var shortColor = '#F675A8';
        var longColor = '#7DE5ED';
        return (React.createElement("div", { style: { height: '100%', width: '100%', padding: 8 } },
            React.createElement(ej2_react_charts_1.ChartComponent, { id: 'debtline', ref: debtChartRef, load: onChartLoad, chartArea: { border: { width: 0 } }, primaryXAxis: { valueType: 'Category', majorGridLines: { width: 0 } }, primaryYAxis: {
                    majorGridLines: { width: 0.5 }
                }, tooltip: { enable: true, header: '${series.name}' }, legendSettings: { visible: true, position: 'Bottom' }, axisLabelRender: formatYAxisDollar, tooltipRender: onCurrencyTooltip },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.SplineAreaSeries, ej2_react_charts_1.SplineSeries, ej2_react_charts_1.DataLabel, ej2_react_charts_1.Category, ej2_react_charts_1.Legend, ej2_react_charts_1.Tooltip] }),
                React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: monthlyDebt, xName: 'month', yName: 'longDebt', type: 'SplineArea', name: "Long-term Debt", fill: longColor, opacity: 0.35, marker: {
                            visible: true,
                            shape: 'Circle',
                            width: 10,
                            height: 10,
                            border: { width: 1, color: '#ffffff' },
                            fill: longColor
                        }, border: { width: 1, color: longColor }, animation: { enable: false } }),
                    React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: monthlyDebt, xName: 'month', yName: 'shortDebt', type: 'SplineArea', name: "Short-term Debt", fill: shortColor, opacity: 0.45, marker: {
                            visible: true,
                            shape: 'Circle',
                            width: 10,
                            height: 10,
                            border: { width: 1, color: '#ffffff' },
                            fill: shortColor
                        }, border: { width: 1, color: shortColor }, animation: { enable: false } }),
                    React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: monthlyDebt, xName: 'month', yName: 'longDebt', type: 'Spline', fill: "transparent", width: 2, marker: {
                            visible: false
                        }, border: { width: 2, color: longColor }, animation: { enable: false } }),
                    React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: monthlyDebt, xName: 'month', yName: 'shortDebt', type: 'Spline', fill: "transparent", width: 2, marker: {
                            visible: false,
                        }, border: { width: 2, color: shortColor }, animation: { enable: false } })))));
    };
    var cashFlowCard = function () {
        var _a, _b, _c, _d, _e;
        // determine selected year (use first selectedDropdownYears value if set, otherwise latest available)
        var selectedYearStr = (_a = (selectedDropdownYear)) !== null && _a !== void 0 ? _a : String(financialAvailableYears[financialAvailableYears.length - 1]);
        var selectedYear = Number(selectedYearStr);
        var idx = financialAvailableYears.indexOf(selectedYear);
        if (idx < 0)
            idx = financialAvailableYears.length - 1; // fallback to latest
        var prevIdx = idx > 0 ? idx - 1 : -1;
        var balanceCurrent = (cashBalances && cashBalances[idx] != null)
            ? cashBalances[idx]
            : (((_b = cashInFlowTotals[idx]) !== null && _b !== void 0 ? _b : 0) - ((_c = cashOutFlowTotals[idx]) !== null && _c !== void 0 ? _c : 0));
        var balancePrev = prevIdx >= 0
            ? ((cashBalances && cashBalances[prevIdx] != null)
                ? cashBalances[prevIdx]
                : (((_d = cashInFlowTotals[prevIdx]) !== null && _d !== void 0 ? _d : 0) - ((_e = cashOutFlowTotals[prevIdx]) !== null && _e !== void 0 ? _e : 0)))
            : null;
        var pctChange = (balancePrev === null || Math.abs(balancePrev) < 1e-9)
            ? null
            : ((balanceCurrent - balancePrev) / Math.abs(balancePrev)) * 100;
        var comparisonLabel = "".concat(pctChange === null || pctChange === void 0 ? void 0 : pctChange.toFixed(1));
        var isUp = pctChange === null ? true : pctChange >= 0;
        return MetricCard("Cash in Bank", formatCurrency(balanceCurrent !== null && balanceCurrent !== void 0 ? balanceCurrent : 0), comparisonLabel, isUp);
    };
    var runwaymonthCard = function () {
        var _a;
        var selectedYearStr = (_a = (selectedDropdownYear)) !== null && _a !== void 0 ? _a : String(financialAvailableYears[financialAvailableYears.length - 1]);
        var selectedYear = Number(selectedYearStr);
        var idx = financialAvailableYears.indexOf(selectedYear);
        if (idx < 0)
            idx = financialAvailableYears.length - 1;
        var prevIdx = idx > 0 ? idx - 1 : -1;
        var getCashInBankForIndex = function (i) {
            var _a, _b, _c, _d;
            // prefer explicit cashBalances; fallback to cash item in company shares (first quarter), then inflow-outflow
            if (Array.isArray(cashBalances) && typeof cashBalances[i] === 'number')
                return cashBalances[i];
            var quarters = (_a = companyShareGroupedByYear[financialAvailableYears[i]]) !== null && _a !== void 0 ? _a : [];
            var q0 = (_b = quarters[0]) !== null && _b !== void 0 ? _b : null;
            var cashFromShares = q0 ? getAmount(q0.assets, 'cash') : null;
            if (typeof cashFromShares === 'number' && isFinite(cashFromShares) && cashFromShares > 0)
                return cashFromShares;
            var inflow = Number((_c = cashInFlowTotals[i]) !== null && _c !== void 0 ? _c : 0);
            var outflow = Number((_d = cashOutFlowTotals[i]) !== null && _d !== void 0 ? _d : 0);
            return (inflow - outflow);
        };
        var getMonthlyBurnForIndex = function (i) {
            var _a, _b, _c;
            // use monthly data when available to compute average monthly burn (only count months with net outflow)
            var inflowMonthly = ((_a = cashInFlowGroupCollection[i]) !== null && _a !== void 0 ? _a : []).map(function (m) { var _a; return Number((_a = m === null || m === void 0 ? void 0 : m.monthamount) !== null && _a !== void 0 ? _a : 0); });
            var outflowMonthly = ((_b = cashOutFlowGroupCollection[i]) !== null && _b !== void 0 ? _b : []).map(function (m) { var _a; return Number((_a = m === null || m === void 0 ? void 0 : m.monthamount) !== null && _a !== void 0 ? _a : 0); });
            if (outflowMonthly.length === 12) {
                var nets = Array.from({ length: 12 }).map(function (_, m) { var _a; return ((_a = outflowMonthly[m]) !== null && _a !== void 0 ? _a : 0); });
                // monthly burn = average of positive net months (conservative) else average of all (if no positive months)
                var positiveSum = nets.reduce(function (s, v) { return s + (v > 0 ? v : 0); }, 0);
                var positiveCount = nets.reduce(function (c, v) { return c + (v > 0 ? 1 : 0); }, 0);
                if (positiveCount > 0)
                    return positiveSum / 12; // spread annual positive burn over 12 months
                var annualNet_1 = nets.reduce(function (s, v) { return s + v; }, 0);
                return Math.max(0, annualNet_1 / 12);
            }
            // fallback: compute from annual totals (outflow - inflow) / 12
            var annualNet = Math.max(((_c = cashOutFlowTotals[i]) !== null && _c !== void 0 ? _c : 0), 0);
            return Math.max(0, annualNet / 12);
        };
        var computeRunwayMonthsForIndex = function (i) {
            if (i < 0 || i >= financialAvailableYears.length)
                return null;
            var cashInBank = getCashInBankForIndex(i);
            if (typeof cashInBank !== 'number' || !isFinite(cashInBank))
                return null;
            var monthlyBurn = getMonthlyBurnForIndex(i);
            // if no burn (monthlyBurn === 0) then runway is effectively infinite (no burn); return null to indicate not applicable
            if (!monthlyBurn || monthlyBurn <= 1e-9)
                return null;
            var months = cashInBank / monthlyBurn;
            if (!isFinite(months) || months < 0)
                return null;
            return months;
        };
        var displayRunwayMonths = computeRunwayMonthsForIndex(idx);
        var prevDisplayRunway = prevIdx >= 0 ? computeRunwayMonthsForIndex(prevIdx) : null;
        var formatRunwayLabel = function (months) {
            if (months === null || !isFinite(months) || months < 0)
                return '—';
            if (months === Infinity)
                return '∞';
            var yrs = Math.floor(months / 12);
            var remMonths = Math.round(months % 12);
            if (yrs >= 1) {
                return remMonths === 0 ? "".concat(yrs, " y").concat(yrs > 1 ? 's' : '') : "".concat(yrs, " y ").concat(remMonths, " m");
            }
            return "".concat(Math.round(months), " m");
        };
        var runwayLabel = formatRunwayLabel(displayRunwayMonths);
        // compute pct using displayed values (null-safe)
        var pct = (prevDisplayRunway === null || prevDisplayRunway === 0 || displayRunwayMonths === null)
            ? null
            : ((displayRunwayMonths - prevDisplayRunway) / Math.abs(prevDisplayRunway)) * 100;
        var comparison = "".concat(pct === null || !isFinite(pct) ? '—' : pct.toFixed(1));
        var isUp = pct === null ? true : pct >= 0;
        return MetricCard("Runway in Months", runwayLabel, comparison, isUp);
    };
    var operatingCashFlow = function () {
        var _a, _b, _c, _d, _e;
        var selectedYearStr = (_a = (selectedDropdownYear)) !== null && _a !== void 0 ? _a : String(financialAvailableYears[financialAvailableYears.length - 1]);
        var selectedYear = Number(selectedYearStr);
        var idx = financialAvailableYears.indexOf(selectedYear);
        if (idx < 0)
            idx = financialAvailableYears.length - 1;
        var prevIdx = idx > 0 ? idx - 1 : -1;
        // per-year operating cash = inflow - outflow
        var inflowVal = Number((_b = cashInFlowTotals[idx]) !== null && _b !== void 0 ? _b : 0);
        var outflowVal = Number((_c = cashOutFlowTotals[idx]) !== null && _c !== void 0 ? _c : 0);
        var opCash = inflowVal - outflowVal;
        var opCashPrev = prevIdx >= 0 ? (Number((_d = cashInFlowTotals[prevIdx]) !== null && _d !== void 0 ? _d : 0) - Number((_e = cashOutFlowTotals[prevIdx]) !== null && _e !== void 0 ? _e : 0)) : null;
        var pct = (opCashPrev === null || Math.abs(opCashPrev) < 1e-9) ? null : ((opCash - opCashPrev) / Math.abs(opCashPrev)) * 100;
        var comparisonLabel = pct === null ? '—' : "".concat(pct.toFixed(1), "%");
        var isUp = pct === null ? true : pct >= 0;
        // build yearly series for sparkline (one point per year)
        var yearlySeries = financialAvailableYears.map(function (y) {
            var _a, _b;
            var i = financialAvailableYears.indexOf(y);
            var val = Number((_a = cashInFlowTotals[i]) !== null && _a !== void 0 ? _a : 0) - Number((_b = cashOutFlowTotals[i]) !== null && _b !== void 0 ? _b : 0);
            return { x: String(y), y: val };
        });
        return (React.createElement("div", { style: {
                padding: 14,
                boxSizing: 'border-box',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                overflow: 'hidden'
            } },
            React.createElement("div", { style: { display: 'flex', gap: 20, alignItems: 'center', width: '100%' } },
                React.createElement("div", { style: { flex: '1 1 40%', minWidth: 125, display: 'flex', flexDirection: 'column', gap: 8 } },
                    React.createElement("div", { style: { fontSize: 14, lineHeight: 1.15, whiteSpace: 'nowrap' } }, "Operating Cash Flow"),
                    React.createElement("div", { style: { fontSize: 28, fontWeight: 600, lineHeight: 1.05 } }, formatCurrency(opCash)),
                    React.createElement("div", { style: { display: 'flex', gap: 5, alignItems: 'center' } },
                        React.createElement("span", { style: {
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 8,
                                color: isUp ? '#16a34a' : '#991b1b',
                                fontWeight: 600,
                                fontSize: 12,
                                whiteSpace: 'nowrap'
                            } },
                            React.createElement("span", { style: { fontSize: 12 } }, isUp ? '▲' : '▼'),
                            React.createElement("span", null, comparisonLabel)),
                        React.createElement("div", { style: { fontSize: 12, whiteSpace: 'nowrap' } }, "vs ".concat(selectedDropdownYear - 1)))),
                React.createElement("div", { style: { flex: '0 0 100px', minWidth: 180, display: 'flex', alignItems: 'center', justifyContent: 'center' } },
                    React.createElement("div", { style: { width: '100%', maxWidth: 260 } },
                        React.createElement(ej2_react_charts_1.SparklineComponent, { id: "operating-cash-year-spark", height: "56px", width: "100%", type: "Area", axisSettings: {
                                minY: 17200, maxY: 22800
                            }, dataSource: yearlySeries, xName: "x", yName: "y", fill: "#d9890aff" // semi-transparent area fill
                            , border: { color: '#84e7be', width: 4 }, lineWidth: 3, valueType: "Category", markerSettings: {
                                size: 6,
                                fill: '#ffffff',
                                border: { color: '#7DE5ED', width: 2 }
                            }, tooltipSettings: { visible: true, format: ' Year: ${x} <br/> Amount: $${y}' } },
                            React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.SplineSeries, ej2_react_charts_1.AreaSeries, ej2_react_charts_1.SparklineTooltip] })))),
                React.createElement("div", { style: { flex: '0 0 60px', minWidth: 60, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6, textAlign: 'right' } },
                    React.createElement("div", { style: { fontSize: 12 } }, "Inflow"),
                    React.createElement("div", { style: { fontWeight: 700 } }, formatCurrency(inflowVal)),
                    React.createElement("div", { style: { height: 8 } }),
                    React.createElement("div", { style: { fontSize: 12 } }, "Outflow"),
                    React.createElement("div", { style: { fontWeight: 700 } }, formatCurrency(outflowVal))))));
    };
    var MetricCard = function (title, value, comparisonValue, arrowUp) {
        var chipBg = arrowUp ? '#dcfce7' : '#fee2e2';
        var chipText = arrowUp ? '#166534' : '#991b1b';
        return (React.createElement("div", { id: 'main-finance-div' },
            React.createElement("div", { id: 'title-finance-card' }, title),
            React.createElement("div", { id: 'card-finance-value' }, value),
            React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 } },
                React.createElement("span", { style: {
                        color: arrowUp ? '#16a34a' : '#dc2626',
                        fontWeight: 600
                    } },
                    arrowUp ? '▲' : '▼',
                    " ",
                    comparisonValue,
                    "%"),
                React.createElement("span", { style: { fontSize: 12 } },
                    "vs ",
                    selectedDropdownYear - 1))));
    };
    return (React.createElement("div", { className: "Container" },
        React.createElement("div", { className: "e-card cs-toolbar" },
            React.createElement("div", { className: "cs-toolbar-left" },
                React.createElement("span", { className: "cs-title" }, "Cash Flow and Liquidity")),
            React.createElement("div", { className: "cs-toolbar-right" },
                React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { dataSource: financialAvailableYears.filter(function (y) { return y !== 2021; }), value: selectedDropdownYear, placeholder: "Select year", change: onYearChange }))),
        React.createElement(ej2_react_layouts_1.DashboardLayoutComponent, { ref: cashflowRef, id: "cashflow_dashboard", style: { height: '100%', width: '100%' }, columns: 8, cellAspectRatio: 1, cellSpacing: cellSpacing, allowResizing: false, allowDragging: false, mediaQuery: "(max-width:950px)" },
            React.createElement(ej2_react_layouts_1.PanelsDirective, null,
                React.createElement(ej2_react_layouts_1.PanelDirective, { id: "cashcard", sizeX: 2, sizeY: 1, row: 0, col: 0, content: cashFlowCard }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { id: "runwaymonthcard", sizeX: 2, sizeY: 1, row: 0, col: 2, content: runwaymonthCard }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { id: "cashbalancecard", sizeX: 4, sizeY: 1, row: 0, col: 4, content: operatingCashFlow }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { id: "debtheader", sizeX: 4, sizeY: 3, row: 1, col: 0, header: debtHeader, content: debtLineChart }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { id: "burnheader", sizeX: 4, sizeY: 3, row: 1, col: 4, header: burnHeader, content: burnLineChart }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { id: "inventoryheader", sizeX: 8, sizeY: 4, row: 5, col: 0, header: inventoryHeader, content: inventoryTurnover }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { id: "turnoverheader", sizeX: 8, sizeY: 4, row: 9, col: 0, header: turnOverHeader, content: turnoverChart }),
                React.createElement(ej2_react_layouts_1.PanelDirective, { id: "overallcashheader", sizeX: 8, sizeY: 4, row: 17, col: 0, header: overallCashHeader, content: overallCashByYear })))));
};
var FinanceDashboard = /** @class */ (function (_super) {
    __extends(FinanceDashboard, _super);
    function FinanceDashboard(props) {
        var _this = _super.call(this, props) || this;
        _this.allowSidebarOpen = false;
        _this.toolbarTitleTemplate = function () { return (React.createElement("span", { className: "finance-header-title" }, "Finance Dashboard")); };
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
                var el = document.getElementById('overview_dashboard');
                (_d = (_c = (_b = (_a = el) === null || _a === void 0 ? void 0 : _a.ej2_instances) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.refresh) === null || _d === void 0 ? void 0 : _d.call(_c);
            }, 500);
        };
        _this.onSidebarClose = function () {
            _this.allowSidebarOpen = false;
            setTimeout(_this.notifyResize, 400);
            _this.setState({ isDocked: true });
            setTimeout(function () {
                var _a, _b, _c, _d;
                var el = document.getElementById('overview_dashboard');
                (_d = (_c = (_b = (_a = el) === null || _a === void 0 ? void 0 : _a.ej2_instances) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.refresh) === null || _d === void 0 ? void 0 : _d.call(_c);
            }, 700);
        };
        _this.onYearChange = function (e) {
            var newYear = Number(e.value);
            if (!Number.isNaN(newYear)) {
                _this.setState({
                    selectedYear: newYear
                });
            }
        };
        _this.onSidebarCreated = function () {
            if (_this.sidebarRef.current) {
                _this.sidebarRef.current.hide(); // ensure hidden
            }
        };
        _this.renderDashboard = function () {
            var _a = _this.state, selectedId = _a.selectedId, selectedYear = _a.selectedYear;
            var commonProps = {
                selectedYear: selectedYear,
                onYearChange: _this.onYearChange,
            };
            switch (selectedId) {
                case 'overview':
                    return React.createElement(OverviewDashboard, __assign({}, commonProps));
                case 'profitloss':
                    return React.createElement(ProfitLossDashboard, __assign({}, commonProps));
                case 'cashflow':
                    return React.createElement(CashFlowDashboard, __assign({}, commonProps));
                default:
                    return React.createElement(OverviewDashboard, __assign({}, commonProps));
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
        _this.state = {
            selectedId: 'overview',
            selectedYear: 2025,
            isDocked: true
        };
        _this.sidebarRef = React.createRef();
        return _this;
    }
    FinanceDashboard.prototype.withTooltip = function (title, node) {
        return (React.createElement(ej2_react_popups_1.TooltipComponent, { content: title, position: this.state.isDocked ? 'RightCenter' : 'BottomCenter', openDelay: 250, closeDelay: 0, showTipPointer: true }, node));
    };
    FinanceDashboard.prototype.render = function () {
        var _this = this;
        var isActive = function (id) { return (_this.state.selectedId === id ? 'active' : ''); };
        return (React.createElement("div", null,
            React.createElement("div", { className: "control-section", id: "target_finance_dash" },
                React.createElement("div", { id: 'finance-dashboard_sidebar_section' },
                    React.createElement("div", { className: "header" },
                        React.createElement(ej2_react_navigations_1.ToolbarComponent, { cssClass: "app-toolbar", id: "app-toolbar", height: "50px", clicked: this.onToolbarClicked },
                            React.createElement(ej2_react_navigations_1.ItemsDirective, null,
                                React.createElement(ej2_react_navigations_1.ItemDirective, { prefixIcon: "e-menu", tooltipText: "Menu" }),
                                React.createElement(ej2_react_navigations_1.ItemDirective, { template: this.toolbarTitleTemplate })))),
                    React.createElement("div", { className: "cs-workarea" },
                        React.createElement(ej2_react_navigations_1.SidebarComponent, { id: "dockFinanceSideDash", ref: this.sidebarRef, width: "240px", enableDock: true, closeOnDocumentClick: false, enableGestures: false, dockSize: "60px", type: "Push", target: ".cs-content", open: this.onSidebarOpen, close: this.onSidebarClose, created: this.onSidebarCreated },
                            React.createElement("div", { className: "sidebar-content" },
                                this.withTooltip('Overview', React.createElement("div", { className: "finance-nav-item ".concat(isActive('overview')), onClick: function () { return _this.setState({ selectedId: 'overview' }); } },
                                    React.createElement("span", { className: "e-icons e-home", "aria-hidden": "true" }),
                                    React.createElement("span", { className: "finance-nav-text" }, "Overview"))),
                                this.withTooltip('Financial Performance', React.createElement("div", { className: "finance-nav-item ".concat(isActive('profitloss')), onClick: function () { return _this.setState({ selectedId: 'profitloss' }); } },
                                    React.createElement("span", { className: this.icon('profit-loss'), "aria-hidden": "true" }),
                                    React.createElement("span", { className: "finance-nav-text" }, "Financial Performance"))),
                                this.withTooltip('Cash Flow and Liquidity', React.createElement("div", { className: "finance-nav-item ".concat(isActive('cashflow')), onClick: function () { return _this.setState({ selectedId: 'cashflow' }); } },
                                    React.createElement("span", { className: this.icon('cash-flow'), "aria-hidden": "true" }),
                                    React.createElement("span", { className: "finance-nav-text" }, "Cash Flow and Liquidity"))))),
                        React.createElement("div", { className: "cs-content" },
                            React.createElement("div", { className: "app-finance-page", style: { padding: '16px', background: '#ffffff' } }, this.renderDashboard()))))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "A balance sheet provides a snapshot of a company\u2019s financial position by detailing its assets, liabilities, and equity at a specific point in time, while the Profit and Loss section highlights financial performance over a period by summarizing revenues, expenses, and net income. Together with cash flow analysis\u2014which tracks the movement of money through operating, investing, and financing activities\u2014these components offer a comprehensive view of the organization\u2019s stability, profitability, liquidity, and overall financial health."))));
    };
    return FinanceDashboard;
}(sample_base_1.SampleBase));
exports.FinanceDashboard = FinanceDashboard;
exports.default = FinanceDashboard;
