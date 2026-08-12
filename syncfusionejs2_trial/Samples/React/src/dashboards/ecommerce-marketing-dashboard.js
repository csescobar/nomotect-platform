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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
exports.EcommerceMarketingDashboard = exports.CAMPAIGN_LABEL = exports.CAMPAIGN_KEYS = exports.refreshCommonSparks = void 0;
var React = require("react");
var sample_base_1 = require("../common/sample-base");
var ej2_react_layouts_1 = require("@syncfusion/ej2-react-layouts");
var ej2_react_navigations_1 = require("@syncfusion/ej2-react-navigations");
var ej2_react_maps_1 = require("@syncfusion/ej2-react-maps");
require("./ecommerce-marketing-dashboard.css");
var ej2_react_charts_1 = require("@syncfusion/ej2-react-charts");
var ej2_react_circulargauge_1 = require("@syncfusion/ej2-react-circulargauge");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var ej2_react_grids_1 = require("@syncfusion/ej2-react-grids");
var ej2_react_heatmap_1 = require("@syncfusion/ej2-react-heatmap");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var ej2_react_popups_1 = require("@syncfusion/ej2-react-popups");
var ej2_react_navigations_2 = require("@syncfusion/ej2-react-navigations");
require("./dashboard-bold-icon.css");
require("./dashboard-light-icon.css");
var Palettes = {
    categorical: ["#B9005B", "#FF5858", "#850E35", "#F5C6A5", "#FE8F8F", "#554994", "#90AACB", "#554994", "#BD4B4B", "#E97777"],
    salesMix: ['#850E35', '#FF5858', '#B9005B', '#554994', '#FE8F8F', '#90AACB', '#E97777'],
    productTop: ["#850E35", "#FF5858", "#FE8F8F"],
    categorySalesTrend: ["#F5C6A5", "#90AACB", "#B9005B", "#FF5858", "#850E35", "#BD4B4B"],
    productMixTotal: ["#554994", "#90AACB", "#850E35", "#FF5858", "#E97777", "#BD4B4B"],
    revenueByCampaign: ["#554994", "#850E35", "#FF5858", "#E97777", "#90AACB", "#F5C6A5"]
};
var pickPalette = function (arr, count) { return arr.slice(0, Math.max(0, Math.min(arr.length, count))); };
var monthlyRev2022 = [
    { m: 'Jan', actual: 355000, target: 360000 },
    { m: 'Feb', actual: 372000, target: 370000 },
    { m: 'Mar', actual: 378000, target: 380000 },
    { m: 'Apr', actual: 395000, target: 390000 },
    { m: 'May', actual: 402000, target: 400000 },
    { m: 'Jun', actual: 408000, target: 410000 },
    { m: 'Jul', actual: 420000, target: 415000 },
    { m: 'Aug', actual: 418000, target: 420000 },
    { m: 'Sep', actual: 435000, target: 430000 },
    { m: 'Oct', actual: 438000, target: 440000 },
    { m: 'Nov', actual: 455000, target: 450000 },
    { m: 'Dec', actual: 468000, target: 460000 },
];
var monthlyRev2023 = [
    { m: 'Jan', actual: 392000, target: 388000 },
    { m: 'Feb', actual: 405000, target: 399000 },
    { m: 'Mar', actual: 415000, target: 410000 },
    { m: 'Apr', actual: 418000, target: 421000 },
    { m: 'May', actual: 440000, target: 432000 },
    { m: 'Jun', actual: 446000, target: 443000 },
    { m: 'Jul', actual: 455000, target: 449000 },
    { m: 'Aug', actual: 460000, target: 455000 },
    { m: 'Sep', actual: 472000, target: 466000 },
    { m: 'Oct', actual: 470000, target: 475000 },
    { m: 'Nov', actual: 495000, target: 486000 },
    { m: 'Dec', actual: 505000, target: 497000 },
];
var monthlyRev2024 = [
    { m: 'Jan', actual: 420000, target: 415000 },
    { m: 'Feb', actual: 430000, target: 427000 },
    { m: 'Mar', actual: 445000, target: 439000 },
    { m: 'Apr', actual: 448000, target: 450000 },
    { m: 'May', actual: 470000, target: 463000 },
    { m: 'Jun', actual: 478000, target: 474000 },
    { m: 'Jul', actual: 485000, target: 481000 },
    { m: 'Aug', actual: 492000, target: 488000 },
    { m: 'Sep', actual: 508000, target: 500000 },
    { m: 'Oct', actual: 505000, target: 511000 },
    { m: 'Nov', actual: 530000, target: 523000 },
    { m: 'Dec', actual: 540000, target: 535000 },
];
var monthlyRev2025 = [
    { m: 'Jan', actual: 445000, target: 440000 },
    { m: 'Feb', actual: 458000, target: 452000 },
    { m: 'Mar', actual: 470000, target: 465000 },
    { m: 'Apr', actual: 480000, target: 477000 },
    { m: 'May', actual: 498000, target: 491000 },
    { m: 'Jun', actual: 506000, target: 503000 },
    { m: 'Jul', actual: 515000, target: 511000 },
    { m: 'Aug', actual: 525000, target: 520000 },
    { m: 'Sep', actual: 540000, target: 533000 },
    { m: 'Oct', actual: 542000, target: 545000 },
    { m: 'Nov', actual: 565000, target: 558000 },
    { m: 'Dec', actual: 580000, target: 571000 },
];
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
var onHeatMapLoad = function (args) {
    // derive Syncfusion theme from URL (same approach as other charts)
    var selectedTheme = location.hash.split('/')[1] || 'Tailwind3';
    var theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1))
        .replace(/-dark/i, 'Dark')
        .replace(/light/i, 'Light')
        .replace(/contrast/i, 'Contrast')
        .replace(/-highContrast/i, 'HighContrast');
    var isDark = /dark/i.test(selectedTheme) || /highcontrast/i.test(selectedTheme);
    // palettes for light vs dark
    var lightPalette = [
        { color: '#FEEBF4' },
        { color: '#F679B7' },
        { color: '#CF3883' },
        { color: '#BF196B' } // high
    ];
    var darkPalette = [
        { color: '#2A1130' },
        { color: '#6E2A57' },
        { color: '#B23A7D' },
        { color: '#FF4FA8' }
    ];
    // apply theme + palette + readable text/borders
    args.heatmap.theme = theme;
    args.heatmap.paletteSettings = {
        palette: isDark ? darkPalette : lightPalette,
        type: 'Gradient'
    };
    args.heatmap.cellSettings = __assign(__assign({}, (args.heatmap.cellSettings || {})), { border: { width: 0.6, color: isDark ? '#374151' : '#E5E7EB' }, textStyle: { color: isDark ? '#F3F4F6' : '#111827' }, format: 'c0' });
    args.heatmap.legendSettings = __assign(__assign({}, (args.heatmap.legendSettings || {})), { textStyle: { color: isDark ? '#E5E7EB' : '#374151' } });
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
var onBulletLoad = function (args) {
    var selectedTheme = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Tailwind3';
    args.bulletChart.theme = ((selectedTheme.charAt(0).toUpperCase() +
        selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/light/i, 'Light').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast'));
};
var Mapload = function (args) {
    var selectedTheme = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.maps.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/contrast/i, 'Contrast').replace(/-dark/i, "Dark").replace(/-highContrast/i, 'HighContrast');
};
var formatCurrency = function (n) {
    return new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 0, notation: "compact" }).format(n !== null && n !== void 0 ? n : 0);
};
var cardformatCurrency = function (n) {
    return new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 2, notation: "compact" }).format(n !== null && n !== void 0 ? n : 0);
};
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
var n0 = function (v) { return (typeof v === 'number' && isFinite(v) ? v : 0); };
function buildSeasonalityWeights(base) {
    var total = base.reduce(function (s, r) { return s + n0(r.actual); }, 0);
    var denom = total > 0 ? total : 1;
    return base.map(function (r) { return ({
        m: r.m,
        w: n0(r.actual) / denom
    }); });
}
function buildRevenueYearFromBase(opts) {
    var baseYearRows = opts.baseYearRows, newYearTotalActual = opts.newYearTotalActual, targetUpliftPct = opts.targetUpliftPct, _a = opts.noisePct, noisePct = _a === void 0 ? 0 : _a;
    var season = buildSeasonalityWeights(baseYearRows);
    var jitter = function (i) {
        if (!noisePct)
            return 1;
        var seq = [0.6, -0.3, 0.2, -0.4, 0.1, 0.25, -0.15, 0.35, -0.2, 0.3, -0.1, 0.05];
        return 1 + (seq[i % seq.length] * noisePct);
    };
    var actualRows = season.map(function (s, i) {
        var a = Math.round(newYearTotalActual * s.w * jitter(i));
        return { m: s.m, actual: a, target: 0 };
    });
    var actualSum = actualRows.reduce(function (s, r) { return s + r.actual; }, 0);
    var delta = Math.round(newYearTotalActual - actualSum);
    var idx = 0;
    while (delta !== 0 && idx < 5000) {
        var k = idx % actualRows.length;
        if (delta > 0) {
            actualRows[k].actual += 1;
            delta -= 1;
        }
        else if (delta < 0 && actualRows[k].actual > 0) {
            actualRows[k].actual -= 1;
            delta += 1;
        }
        idx++;
    }
    actualRows.forEach(function (r, i) {
        var t = Math.round(r.actual * (1 + targetUpliftPct));
        actualRows[i].target = t;
    });
    return actualRows;
}
var base2025 = monthlyRev2025;
var total2025 = base2025.reduce(function (s, r) { return s + n0(r.actual); }, 0);
var growth2026 = 1.10;
var growth2027 = 1.08;
var total2026 = Math.round(total2025 * growth2026);
var total2027 = Math.round(total2026 * growth2027);
var monthlyRev2026 = buildRevenueYearFromBase({
    baseYearRows: base2025,
    newYearTotalActual: total2026,
    targetUpliftPct: 0.012,
    noisePct: 0.004
});
var monthlyRev2027 = buildRevenueYearFromBase({
    baseYearRows: base2025,
    newYearTotalActual: total2027,
    targetUpliftPct: 0.015,
    noisePct: 0.004
});
var monthlyRevenueByYear = {
    2022: monthlyRev2022,
    2023: monthlyRev2023,
    2024: monthlyRev2024,
    2025: monthlyRev2025,
    2026: monthlyRev2026,
    2027: monthlyRev2027
};
var spendByYear = {
    2022: [
        { m: 'Jan', Paid: 90000, Organic: 12000, Email: 6000, Social: 20000 },
        { m: 'Feb', Paid: 88000, Organic: 12500, Email: 6200, Social: 20000 },
        { m: 'Mar', Paid: 92000, Organic: 13000, Email: 6400, Social: 21000 },
        { m: 'Apr', Paid: 95000, Organic: 13500, Email: 6600, Social: 21000 },
        { m: 'May', Paid: 94000, Organic: 14000, Email: 6800, Social: 22000 },
        { m: 'Jun', Paid: 97000, Organic: 14000, Email: 7000, Social: 22000 },
        { m: 'Jul', Paid: 100000, Organic: 14500, Email: 7200, Social: 23000 },
        { m: 'Aug', Paid: 102000, Organic: 15000, Email: 7400, Social: 24000 },
        { m: 'Sep', Paid: 105000, Organic: 15500, Email: 7600, Social: 24000 },
        { m: 'Oct', Paid: 108000, Organic: 16000, Email: 7800, Social: 25000 },
        { m: 'Nov', Paid: 110000, Organic: 16500, Email: 8000, Social: 26000 },
        { m: 'Dec', Paid: 112000, Organic: 17000, Email: 8200, Social: 27000 },
    ],
    2023: [
        { m: 'Jan', Paid: 98000, Organic: 13000, Email: 6500, Social: 22000 },
        { m: 'Feb', Paid: 96000, Organic: 13500, Email: 6700, Social: 22000 },
        { m: 'Mar', Paid: 101000, Organic: 14000, Email: 6900, Social: 23000 },
        { m: 'Apr', Paid: 104000, Organic: 14500, Email: 7100, Social: 23000 },
        { m: 'May', Paid: 103000, Organic: 15000, Email: 7300, Social: 24000 },
        { m: 'Jun', Paid: 106000, Organic: 15000, Email: 7500, Social: 24000 },
        { m: 'Jul', Paid: 110000, Organic: 15500, Email: 7700, Social: 25000 },
        { m: 'Aug', Paid: 112000, Organic: 16000, Email: 7900, Social: 26000 },
        { m: 'Sep', Paid: 115000, Organic: 16500, Email: 8100, Social: 26000 },
        { m: 'Oct', Paid: 118000, Organic: 17000, Email: 8300, Social: 27000 },
        { m: 'Nov', Paid: 121000, Organic: 17500, Email: 8500, Social: 28000 },
        { m: 'Dec', Paid: 124000, Organic: 18000, Email: 8700, Social: 29000 },
    ],
    2024: [
        { m: 'Jan', Paid: 105000, Organic: 14000, Email: 7200, Social: 24000 },
        { m: 'Feb', Paid: 103000, Organic: 14500, Email: 7400, Social: 24000 },
        { m: 'Mar', Paid: 108000, Organic: 15000, Email: 7600, Social: 25000 },
        { m: 'Apr', Paid: 111000, Organic: 15500, Email: 7800, Social: 25000 },
        { m: 'May', Paid: 110000, Organic: 16000, Email: 8000, Social: 26000 },
        { m: 'Jun', Paid: 113000, Organic: 16000, Email: 8200, Social: 26000 },
        { m: 'Jul', Paid: 118000, Organic: 16500, Email: 8400, Social: 27000 },
        { m: 'Aug', Paid: 120000, Organic: 17000, Email: 8600, Social: 28000 },
        { m: 'Sep', Paid: 123000, Organic: 17500, Email: 8800, Social: 28000 },
        { m: 'Oct', Paid: 126000, Organic: 18000, Email: 9000, Social: 29000 },
        { m: 'Nov', Paid: 129000, Organic: 18500, Email: 9200, Social: 30000 },
        { m: 'Dec', Paid: 132000, Organic: 19000, Email: 9400, Social: 31000 },
    ],
    2025: [
        { m: 'Jan', Paid: 115000, Organic: 15000, Email: 8000, Social: 26000 },
        { m: 'Feb', Paid: 113000, Organic: 15500, Email: 8200, Social: 26000 },
        { m: 'Mar', Paid: 118000, Organic: 16000, Email: 8400, Social: 27000 },
        { m: 'Apr', Paid: 121000, Organic: 16500, Email: 8600, Social: 27000 },
        { m: 'May', Paid: 120000, Organic: 17000, Email: 8800, Social: 28000 },
        { m: 'Jun', Paid: 123000, Organic: 17000, Email: 9000, Social: 28000 },
        { m: 'Jul', Paid: 128000, Organic: 17500, Email: 9200, Social: 29000 },
        { m: 'Aug', Paid: 130000, Organic: 18000, Email: 9400, Social: 30000 },
        { m: 'Sep', Paid: 133000, Organic: 18500, Email: 9600, Social: 30000 },
        { m: 'Oct', Paid: 136000, Organic: 19000, Email: 9800, Social: 31000 },
        { m: 'Nov', Paid: 140000, Organic: 19500, Email: 10000, Social: 32000 },
        { m: 'Dec', Paid: 145000, Organic: 20000, Email: 10200, Social: 34000 },
    ],
};
// Helper to uplift spend year-over-year with deterministic scaling
function upliftSpendYear(base, mul) {
    return (base !== null && base !== void 0 ? base : []).map(function (r) {
        var _a, _b, _c, _d;
        return ({
            m: r.m,
            Paid: Math.round(((_a = r.Paid) !== null && _a !== void 0 ? _a : 0) * mul.Paid),
            Organic: Math.round(((_b = r.Organic) !== null && _b !== void 0 ? _b : 0) * mul.Organic),
            Email: Math.round(((_c = r.Email) !== null && _c !== void 0 ? _c : 0) * mul.Email),
            Social: Math.round(((_d = r.Social) !== null && _d !== void 0 ? _d : 0) * mul.Social),
        });
    });
}
// Derive 2026 spend from 2025 spend
spendByYear[2026] = upliftSpendYear(spendByYear[2025], {
    Paid: 1.08,
    Organic: 1.05,
    Email: 1.05,
    Social: 1.06, // +6% Social
});
// Derive 2027 spend from 2026 spend
spendByYear[2027] = upliftSpendYear(spendByYear[2026], {
    Paid: 1.07,
    Organic: 1.04,
    Email: 1.04,
    Social: 1.05, // +5% Social
});
var mixedProducts = [
    { name: 'Noise-Cancel Headphones', category: 'Technology & Gadgets', sales: [120, 135, 150, 142, 160, 168], brand: 'SoundMax', warehouse: 'WH-SEA' },
    { name: 'Smartwatch X', category: 'Technology & Gadgets', sales: [98, 104, 112, 115, 120, 126], brand: 'TechPro', warehouse: 'WH-SEA' },
    { name: '4K TV 55"', category: 'Technology & Gadgets', sales: [87, 90, 94, 96, 101, 103], brand: 'VisionX', warehouse: 'WH-SEA' },
    { name: 'Laptop Pro 14', category: 'Technology & Gadgets', sales: [76, 84, 92, 88, 95, 102], brand: 'TechPro', warehouse: 'WH-SEA' },
    { name: 'Bluetooth Speaker', category: 'Technology & Gadgets', sales: [64, 70, 75, 78, 82, 85], brand: 'SoundMax', warehouse: 'WH-SEA' },
    { name: 'Hoodie Essential', category: 'Fashion & Lifestyle', sales: [52, 58, 60, 62, 65, 67], brand: 'StyleCo', warehouse: 'WH-NYC' },
    { name: 'Running Shoes', category: 'Fashion & Lifestyle', sales: [68, 72, 76, 74, 78, 81], brand: 'FitLife', warehouse: 'WH-NYC' },
    { name: 'Classic T-Shirt', category: 'Fashion & Lifestyle', sales: [45, 49, 52, 54, 56, 58], brand: 'StyleCo', warehouse: 'WH-NYC' },
    { name: 'Air Fryer', category: 'Home & Living', sales: [38, 42, 46, 45, 49, 52], brand: 'HomeEase', warehouse: 'WH-DAL' },
    { name: 'Vacuum Cleaner', category: 'Home & Living', sales: [30, 34, 36, 37, 39, 41], brand: 'HomeEase', warehouse: 'WH-DAL' },
    { name: 'Coffee Maker Pro', category: 'Home & Living', sales: [34, 37, 40, 41, 44, 46], brand: 'HomeEase', warehouse: 'WH-DAL' },
    { name: 'Smart LED Bulb Pack', category: 'Home & Living', sales: [22, 25, 28, 29, 31, 33], brand: 'HomeEase', warehouse: 'WH-DAL' },
    { name: 'Home Decor Set', category: 'General Merchandise', sales: [26, 28, 30, 31, 32, 34], brand: 'HomeEase', warehouse: 'WH-DAL' },
    { name: 'Face Serum', category: 'Personal Care & Wellness', sales: [28, 30, 33, 35, 36, 38], brand: 'WellnessLab', warehouse: 'WH-LAX' },
    { name: 'Yoga Mat Pro', category: 'Personal Care & Wellness', sales: [22, 24, 26, 27, 29, 31], brand: 'WellnessLab', warehouse: 'WH-LAX' },
    { name: 'Gift Card Pack', category: 'General Merchandise', sales: [40, 44, 48, 50, 53, 55], brand: 'Giftify', warehouse: 'WH-LAX' },
    { name: 'Stationery Bundle', category: 'General Merchandise', sales: [18, 20, 22, 23, 24, 26], brand: 'OfficePro', warehouse: 'WH-DAL' },
];
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var ALL_MONTH = -1;
var yearGrowth = {
    2022: 1.00,
    2023: 1.03,
    2024: 1.06,
    2025: 1.09,
    2026: 1.12,
    2027: 1.15
};
var REGION_OPTIONS = [
    { text: 'All Regions', value: 'ALL' },
    { text: 'Asia-Pacific', value: 'AsiaPacific' },
    { text: 'Europe', value: 'Europe' },
    { text: 'North America', value: 'NorthAmerica' },
    { text: 'Latin America', value: 'LatinAmerica' },
    { text: 'Middle East & Africa', value: 'MiddleEastAfrica' }
];
var CAMPAIGN_OPTIONS = [
    { text: 'All Campaigns', value: 'ALL' },
    { text: 'Awareness Campaigns', value: 'BrandAwareness' },
    { text: 'Performance Campaigns', value: 'Performance' },
    { text: 'Retargeting Campaigns', value: 'Retargeting' },
    { text: 'Acquisition Campaigns', value: 'Acquisition' },
    { text: 'Loyalty Campaigns', value: 'Loyalty' }
];
var CATEGORY_OPTIONS = Array.from(new Set(mixedProducts.map(function (p) { return p.category; }))).sort();
var DROPDOWN_CATEGORY_OPTIONS = __spreadArray([
    { text: 'All Categories', value: 'ALL' }
], Array.from(new Set(mixedProducts.map(function (p) { return p.category; })))
    .sort()
    .map(function (b) { return ({ text: b, value: b }); }), true);
var BRAND_OPTIONS = __spreadArray([
    { text: 'All Brands', value: 'ALL' }
], Array.from(new Set(mixedProducts.map(function (p) { return p.brand; })))
    .sort()
    .map(function (b) { return ({ text: b, value: b }); }), true);
var WAREHOUSE_OPTIONS = __spreadArray([
    { text: 'All Warehouses', value: 'ALL' }
], Array.from(new Set(mixedProducts.map(function (p) { return p.warehouse; })))
    .sort()
    .map(function (w) { return ({ text: w, value: w }); }), true);
var DROPDOWN_CHANNEL_OPTIONS = [
    { text: 'All Channels', value: 'ALL' },
    { text: 'Paid', value: 'Paid' },
    { text: 'Organic', value: 'Organic' },
    { text: 'Email', value: 'Email' },
    { text: 'Social', value: 'Social' }
];
var MARKETING_DROPDOWN_CHANNEL_OPTIONS = [
    { text: 'All Channels', value: 'ALL' },
    { text: 'Paid', value: 'Paid' },
    { text: 'Email', value: 'Email' }
];
var scenarioOptions = ['Baseline', 'Optimistic', 'Conservative'];
function buildYearProductSales(year, upToMonthIndex) {
    var _a, _b, _c;
    var upliftH2 = 1.05;
    var yrMul = (_a = yearGrowth[year]) !== null && _a !== void 0 ? _a : 1.0;
    var base = mixedProducts.map(function (p) {
        var h1 = p.sales.map(function (v) { return Math.round(v * yrMul); });
        var h2 = p.sales.map(function (v) { return Math.round(v * upliftH2 * yrMul); });
        var fullYear = __spreadArray(__spreadArray([], h1, true), h2, true);
        return { name: p.name, category: p.category, fullYear: fullYear };
    });
    var regionYear = buildRegionMonthlyByYear(year);
    var targetTotals = months.map(function (_, i) {
        var _a, _b, _c, _d, _e;
        var r = regionYear[i];
        return ((_a = r === null || r === void 0 ? void 0 : r.AsiaPacific) !== null && _a !== void 0 ? _a : 0) + ((_b = r === null || r === void 0 ? void 0 : r.Europe) !== null && _b !== void 0 ? _b : 0) + ((_c = r === null || r === void 0 ? void 0 : r.NorthAmerica) !== null && _c !== void 0 ? _c : 0) + ((_d = r === null || r === void 0 ? void 0 : r.LatinAmerica) !== null && _d !== void 0 ? _d : 0) + ((_e = r === null || r === void 0 ? void 0 : r.MiddleEastAfrica) !== null && _e !== void 0 ? _e : 0);
    });
    var scaled = Object.fromEntries(base.map(function (b) { return [b.name, Array(12).fill(0)]; }));
    var _loop_1 = function (m) {
        var rawTotal = base.reduce(function (s, b) { var _a; return s + ((_a = b.fullYear[m]) !== null && _a !== void 0 ? _a : 0); }, 0);
        var target = Math.max(0, (_b = targetTotals[m]) !== null && _b !== void 0 ? _b : 0);
        if (rawTotal <= 0 || target <= 0) {
            return "continue";
        }
        var scale = target / rawTotal;
        base.forEach(function (b) { var _a; scaled[b.name][m] = Math.max(0, Math.round(((_a = b.fullYear[m]) !== null && _a !== void 0 ? _a : 0) * scale)); });
        var delta = target - base.reduce(function (s, b) { var _a; return s + ((_a = scaled[b.name][m]) !== null && _a !== void 0 ? _a : 0); }, 0);
        if (delta !== 0) {
            var order = __spreadArray([], base, true).sort(function (a, b) { var _a, _b; return ((_a = b.fullYear[m]) !== null && _a !== void 0 ? _a : 0) - ((_b = a.fullYear[m]) !== null && _b !== void 0 ? _b : 0); });
            var idx = 0;
            while (delta !== 0 && idx < order.length * 5) {
                var b = order[idx % order.length];
                var cur = (_c = scaled[b.name][m]) !== null && _c !== void 0 ? _c : 0;
                if (delta > 0) {
                    scaled[b.name][m] = cur + 1;
                    delta -= 1;
                }
                else if (delta < 0 && cur > 0) {
                    scaled[b.name][m] = cur - 1;
                    delta += 1;
                }
                idx++;
            }
        }
    };
    for (var m = 0; m < 12; m++) {
        _loop_1(m);
    }
    return base.map(function (b) {
        var fullYear = scaled[b.name];
        var cut = (typeof upToMonthIndex === 'number') ? fullYear.slice(0, upToMonthIndex + 1) : fullYear;
        return { name: b.name, category: b.category, monthly: cut };
    });
}
var regionMonthlyBase = [
    { m: 'Jan', AsiaPacific: 180, Europe: 110, NorthAmerica: 95, LatinAmerica: 70, MiddleEastAfrica: 60 },
    { m: 'Feb', AsiaPacific: 200, Europe: 125, NorthAmerica: 105, LatinAmerica: 78, MiddleEastAfrica: 65 },
    { m: 'Mar', AsiaPacific: 230, Europe: 135, NorthAmerica: 120, LatinAmerica: 85, MiddleEastAfrica: 70 },
    { m: 'Apr', AsiaPacific: 260, Europe: 150, NorthAmerica: 130, LatinAmerica: 92, MiddleEastAfrica: 75 },
    { m: 'May', AsiaPacific: 240, Europe: 145, NorthAmerica: 128, LatinAmerica: 90, MiddleEastAfrica: 73 },
    { m: 'Jun', AsiaPacific: 255, Europe: 160, NorthAmerica: 140, LatinAmerica: 98, MiddleEastAfrica: 78 },
    { m: 'Jul', AsiaPacific: 270, Europe: 170, NorthAmerica: 150, LatinAmerica: 105, MiddleEastAfrica: 85 },
    { m: 'Aug', AsiaPacific: 280, Europe: 175, NorthAmerica: 155, LatinAmerica: 110, MiddleEastAfrica: 88 },
    { m: 'Sep', AsiaPacific: 300, Europe: 185, NorthAmerica: 165, LatinAmerica: 120, MiddleEastAfrica: 95 },
    { m: 'Oct', AsiaPacific: 310, Europe: 190, NorthAmerica: 170, LatinAmerica: 125, MiddleEastAfrica: 100 },
    { m: 'Nov', AsiaPacific: 335, Europe: 205, NorthAmerica: 185, LatinAmerica: 140, MiddleEastAfrica: 115 },
    { m: 'Dec', AsiaPacific: 360, Europe: 220, NorthAmerica: 200, LatinAmerica: 150, MiddleEastAfrica: 125 },
];
var channelsByRegionBase = {
    AsiaPacific: [
        { m: 'Jan', Paid: 70, Organic: 60, Email: 30, Social: 20 },
        { m: 'Feb', Paid: 85, Organic: 65, Email: 30, Social: 20 },
        { m: 'Mar', Paid: 95, Organic: 75, Email: 35, Social: 25 },
        { m: 'Apr', Paid: 110, Organic: 85, Email: 40, Social: 25 },
        { m: 'May', Paid: 100, Organic: 80, Email: 35, Social: 25 },
        { m: 'Jun', Paid: 105, Organic: 85, Email: 40, Social: 25 },
        { m: 'Jul', Paid: 115, Organic: 90, Email: 42, Social: 28 },
        { m: 'Aug', Paid: 120, Organic: 95, Email: 42, Social: 28 },
        { m: 'Sep', Paid: 130, Organic: 100, Email: 45, Social: 30 },
        { m: 'Oct', Paid: 135, Organic: 105, Email: 47, Social: 30 },
        { m: 'Nov', Paid: 150, Organic: 115, Email: 50, Social: 35 },
        { m: 'Dec', Paid: 165, Organic: 125, Email: 55, Social: 40 },
    ],
    Europe: [
        { m: 'Jan', Paid: 40, Organic: 40, Email: 20, Social: 10 },
        { m: 'Feb', Paid: 48, Organic: 43, Email: 22, Social: 12 },
        { m: 'Mar', Paid: 52, Organic: 47, Email: 24, Social: 12 },
        { m: 'Apr', Paid: 60, Organic: 55, Email: 25, Social: 10 },
        { m: 'May', Paid: 58, Organic: 52, Email: 23, Social: 12 },
        { m: 'Jun', Paid: 65, Organic: 60, Email: 25, Social: 10 },
        { m: 'Jul', Paid: 68, Organic: 62, Email: 26, Social: 12 },
        { m: 'Aug', Paid: 70, Organic: 64, Email: 26, Social: 12 },
        { m: 'Sep', Paid: 74, Organic: 68, Email: 28, Social: 15 },
        { m: 'Oct', Paid: 76, Organic: 70, Email: 28, Social: 16 },
        { m: 'Nov', Paid: 82, Organic: 74, Email: 30, Social: 19 },
        { m: 'Dec', Paid: 88, Organic: 78, Email: 32, Social: 22 },
    ],
    NorthAmerica: [
        { m: 'Jan', Paid: 35, Organic: 30, Email: 18, Social: 12 },
        { m: 'Feb', Paid: 40, Organic: 35, Email: 18, Social: 12 },
        { m: 'Mar', Paid: 45, Organic: 40, Email: 20, Social: 15 },
        { m: 'Apr', Paid: 50, Organic: 42, Email: 22, Social: 16 },
        { m: 'May', Paid: 48, Organic: 40, Email: 22, Social: 18 },
        { m: 'Jun', Paid: 52, Organic: 45, Email: 23, Social: 20 },
        { m: 'Jul', Paid: 55, Organic: 48, Email: 24, Social: 18 },
        { m: 'Aug', Paid: 56, Organic: 50, Email: 25, Social: 19 },
        { m: 'Sep', Paid: 60, Organic: 52, Email: 26, Social: 20 },
        { m: 'Oct', Paid: 62, Organic: 54, Email: 27, Social: 21 },
        { m: 'Nov', Paid: 68, Organic: 58, Email: 30, Social: 24 },
        { m: 'Dec', Paid: 74, Organic: 62, Email: 32, Social: 26 },
    ],
    LatinAmerica: [
        { m: 'Jan', Paid: 25, Organic: 22, Email: 12, Social: 11 },
        { m: 'Feb', Paid: 28, Organic: 25, Email: 13, Social: 12 },
        { m: 'Mar', Paid: 31, Organic: 27, Email: 14, Social: 13 },
        { m: 'Apr', Paid: 34, Organic: 30, Email: 15, Social: 13 },
        { m: 'May', Paid: 33, Organic: 29, Email: 15, Social: 13 },
        { m: 'Jun', Paid: 36, Organic: 31, Email: 16, Social: 15 },
        { m: 'Jul', Paid: 38, Organic: 33, Email: 17, Social: 17 },
        { m: 'Aug', Paid: 39, Organic: 34, Email: 18, Social: 19 },
        { m: 'Sep', Paid: 43, Organic: 37, Email: 19, Social: 21 },
        { m: 'Oct', Paid: 45, Organic: 39, Email: 20, Social: 21 },
        { m: 'Nov', Paid: 50, Organic: 43, Email: 22, Social: 25 },
        { m: 'Dec', Paid: 53, Organic: 45, Email: 23, Social: 29 },
    ],
    MiddleEastAfrica: [
        { m: 'Jan', Paid: 22, Organic: 18, Email: 10, Social: 10 },
        { m: 'Feb', Paid: 24, Organic: 20, Email: 10, Social: 11 },
        { m: 'Mar', Paid: 26, Organic: 21, Email: 11, Social: 12 },
        { m: 'Apr', Paid: 28, Organic: 23, Email: 12, Social: 12 },
        { m: 'May', Paid: 27, Organic: 22, Email: 12, Social: 12 },
        { m: 'Jun', Paid: 29, Organic: 24, Email: 12, Social: 13 },
        { m: 'Jul', Paid: 31, Organic: 26, Email: 13, Social: 15 },
        { m: 'Aug', Paid: 32, Organic: 27, Email: 13, Social: 16 },
        { m: 'Sep', Paid: 34, Organic: 28, Email: 14, Social: 19 },
        { m: 'Oct', Paid: 36, Organic: 30, Email: 15, Social: 19 },
        { m: 'Nov', Paid: 40, Organic: 33, Email: 16, Social: 26 },
        { m: 'Dec', Paid: 44, Organic: 36, Email: 17, Social: 28 },
    ],
};
function buildRegionMonthlyByYear(year) {
    var _a;
    var yrMul = (_a = yearGrowth[year]) !== null && _a !== void 0 ? _a : 1.0;
    return regionMonthlyBase.map(function (r) { return ({
        m: r.m,
        AsiaPacific: Math.round(r.AsiaPacific * yrMul),
        Europe: Math.round(r.Europe * yrMul),
        NorthAmerica: Math.round(r.NorthAmerica * yrMul),
        LatinAmerica: Math.round(r.LatinAmerica * yrMul),
        MiddleEastAfrica: Math.round(r.MiddleEastAfrica * yrMul),
    }); });
}
function buildChannelsByRegionYear(year, region) {
    var base = channelsByRegionBase[region];
    var regionYear = buildRegionMonthlyByYear(year);
    var regionTotals = regionYear.map(function (r) { return r[region]; });
    return base.map(function (row, idx) {
        var _a;
        var totalBase = row.Paid + row.Organic + row.Email + row.Social;
        var target = (_a = regionTotals[idx]) !== null && _a !== void 0 ? _a : 1;
        var scale = totalBase ? target / totalBase : 1;
        return {
            m: row.m,
            Paid: Math.round(row.Paid * scale),
            Organic: Math.round(row.Organic * scale),
            Email: Math.round(row.Email * scale),
            Social: Math.round(row.Social * scale),
        };
    });
}
var monthlyMarketBase = [
    { m: 'Jan', market: 900000 }, { m: 'Feb', market: 980000 }, { m: 'Mar', market: 1040000 },
    { m: 'Apr', market: 1080000 }, { m: 'May', market: 1090000 }, { m: 'Jun', market: 1100000 },
    { m: 'Jul', market: 1130000 }, { m: 'Aug', market: 1150000 }, { m: 'Sep', market: 1200000 },
    { m: 'Oct', market: 1240000 }, { m: 'Nov', market: 1350000 }, { m: 'Dec', market: 1480000 }
];
function buildMonthlyMarketByYear(year) {
    var _a;
    var yrMul = (_a = yearGrowth[year]) !== null && _a !== void 0 ? _a : 1.0;
    return monthlyMarketBase.map(function (r) { return ({ m: r.m, market: Math.round(r.market * yrMul) }); });
}
var regionMarketSplit = {
    AsiaPacific: 0.36,
    Europe: 0.30,
    NorthAmerica: 0.22,
    LatinAmerica: 0.07,
    MiddleEastAfrica: 0.05
};
var marketChannelSplitByRegion = {
    AsiaPacific: { Paid: 0.42, Organic: 0.32, Email: 0.16, Social: 0.10 },
    Europe: { Paid: 0.40, Organic: 0.36, Email: 0.14, Social: 0.10 },
    NorthAmerica: { Paid: 0.38, Organic: 0.38, Email: 0.16, Social: 0.08 },
    LatinAmerica: { Paid: 0.46, Organic: 0.30, Email: 0.14, Social: 0.10 },
    MiddleEastAfrica: { Paid: 0.48, Organic: 0.28, Email: 0.14, Social: 0.10 }
};
var regionDisplay = {
    AsiaPacific: 'Asia-Pacific',
    Europe: 'Europe',
    NorthAmerica: 'North America',
    LatinAmerica: 'Latin America',
    MiddleEastAfrica: 'Middle East & Africa'
};
var channelCR_2024 = [
    { m: 'Jan', Paid: 2.1, Organic: 3.0, Email: 4.2, Social: 1.8 },
    { m: 'Feb', Paid: 2.2, Organic: 3.1, Email: 4.1, Social: 1.9 },
    { m: 'Mar', Paid: 2.3, Organic: 3.2, Email: 4.3, Social: 2.0 },
    { m: 'Apr', Paid: 2.4, Organic: 3.3, Email: 4.5, Social: 2.1 },
    { m: 'May', Paid: 2.3, Organic: 3.2, Email: 4.4, Social: 2.0 },
    { m: 'Jun', Paid: 2.5, Organic: 3.4, Email: 4.6, Social: 2.2 },
    { m: 'Jul', Paid: 2.6, Organic: 3.5, Email: 4.7, Social: 2.3 },
    { m: 'Aug', Paid: 2.6, Organic: 3.5, Email: 4.7, Social: 2.3 },
    { m: 'Sep', Paid: 2.7, Organic: 3.6, Email: 4.8, Social: 2.4 },
    { m: 'Oct', Paid: 2.8, Organic: 3.7, Email: 4.9, Social: 2.5 },
    { m: 'Nov', Paid: 2.9, Organic: 3.8, Email: 5.0, Social: 2.6 },
    { m: 'Dec', Paid: 3.0, Organic: 3.9, Email: 5.1, Social: 2.7 },
];
function shiftCR(base, delta) {
    return base.map(function (r) { return ({
        m: r.m,
        Paid: Math.max(0, +(r.Paid + delta).toFixed(2)),
        Organic: Math.max(0, +(r.Organic + delta).toFixed(2)),
        Email: Math.max(0, +(r.Email + delta).toFixed(2)),
        Social: Math.max(0, +(r.Social + delta).toFixed(2)),
    }); });
}
var channelCR_2022 = shiftCR(channelCR_2024, -0.20);
var channelCR_2023 = shiftCR(channelCR_2024, -0.10);
var channelCR_2025 = shiftCR(channelCR_2024, +0.10);
var channelCRByYear = {
    2022: channelCR_2022,
    2023: channelCR_2023,
    2024: channelCR_2024,
    2025: channelCR_2025,
};
function buildChannelCRByYear(year) {
    var _a;
    return ((_a = channelCRByYear[year]) !== null && _a !== void 0 ? _a : channelCR_2024).map(function (r) { return (__assign({}, r)); });
}
function buildOrdersByChannelYear(year) {
    var ap = buildChannelsByRegionYear(year, 'AsiaPacific');
    var eu = buildChannelsByRegionYear(year, 'Europe');
    var na = buildChannelsByRegionYear(year, 'NorthAmerica');
    var la = buildChannelsByRegionYear(year, 'LatinAmerica');
    var mea = buildChannelsByRegionYear(year, 'MiddleEastAfrica');
    return months.map(function (m, i) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _o, _p, _q, _r, _s, _t, _u, _v, _w;
        var a = ap[i], e = eu[i], n = na[i], l = la[i], me = mea[i];
        return {
            m: m,
            Paid: ((_a = a === null || a === void 0 ? void 0 : a.Paid) !== null && _a !== void 0 ? _a : 0) + ((_b = e === null || e === void 0 ? void 0 : e.Paid) !== null && _b !== void 0 ? _b : 0) + ((_c = n === null || n === void 0 ? void 0 : n.Paid) !== null && _c !== void 0 ? _c : 0) + ((_d = l === null || l === void 0 ? void 0 : l.Paid) !== null && _d !== void 0 ? _d : 0) + ((_e = me === null || me === void 0 ? void 0 : me.Paid) !== null && _e !== void 0 ? _e : 0),
            Organic: ((_f = a === null || a === void 0 ? void 0 : a.Organic) !== null && _f !== void 0 ? _f : 0) + ((_g = e === null || e === void 0 ? void 0 : e.Organic) !== null && _g !== void 0 ? _g : 0) + ((_h = n === null || n === void 0 ? void 0 : n.Organic) !== null && _h !== void 0 ? _h : 0) + ((_j = l === null || l === void 0 ? void 0 : l.Organic) !== null && _j !== void 0 ? _j : 0) + ((_k = me === null || me === void 0 ? void 0 : me.Organic) !== null && _k !== void 0 ? _k : 0),
            Email: ((_l = a === null || a === void 0 ? void 0 : a.Email) !== null && _l !== void 0 ? _l : 0) + ((_o = e === null || e === void 0 ? void 0 : e.Email) !== null && _o !== void 0 ? _o : 0) + ((_p = n === null || n === void 0 ? void 0 : n.Email) !== null && _p !== void 0 ? _p : 0) + ((_q = l === null || l === void 0 ? void 0 : l.Email) !== null && _q !== void 0 ? _q : 0) + ((_r = me === null || me === void 0 ? void 0 : me.Email) !== null && _r !== void 0 ? _r : 0),
            Social: ((_s = a === null || a === void 0 ? void 0 : a.Social) !== null && _s !== void 0 ? _s : 0) + ((_t = e === null || e === void 0 ? void 0 : e.Social) !== null && _t !== void 0 ? _t : 0) + ((_u = n === null || n === void 0 ? void 0 : n.Social) !== null && _u !== void 0 ? _u : 0) + ((_v = l === null || l === void 0 ? void 0 : l.Social) !== null && _v !== void 0 ? _v : 0) + ((_w = me === null || me === void 0 ? void 0 : me.Social) !== null && _w !== void 0 ? _w : 0),
        };
    });
}
function buildPromoNonPromoNetSales(year) {
    var _a;
    var orders = buildOrdersByChannelYear(year);
    var revenueRows = (_a = monthlyRevenueByYear[year]) !== null && _a !== void 0 ? _a : [];
    return months.map(function (m, i) {
        var _a, _b, _c, _d, _e, _f;
        var o = orders[i];
        var rev = (_b = (_a = revenueRows[i]) === null || _a === void 0 ? void 0 : _a.actual) !== null && _b !== void 0 ? _b : 0;
        var promoOrders = ((_c = o === null || o === void 0 ? void 0 : o.Paid) !== null && _c !== void 0 ? _c : 0) + ((_d = o === null || o === void 0 ? void 0 : o.Email) !== null && _d !== void 0 ? _d : 0);
        var nonPromoOrders = ((_e = o === null || o === void 0 ? void 0 : o.Organic) !== null && _e !== void 0 ? _e : 0) + ((_f = o === null || o === void 0 ? void 0 : o.Social) !== null && _f !== void 0 ? _f : 0);
        var total = promoOrders + nonPromoOrders;
        if (total <= 0 || rev <= 0)
            return { m: m, promo: 0, nonPromo: 0 };
        var promo = rev * (promoOrders / total);
        var nonPromo = rev * (nonPromoOrders / total);
        return { m: m, promo: promo, nonPromo: nonPromo };
    });
}
var ProductPricing = {
    'Noise-Cancel Headphones': { price: 199, marginPct: 0.35 },
    'Smartwatch X': { price: 249, marginPct: 0.32 },
    '4K TV 55"': { price: 699, marginPct: 0.22 },
    'Laptop Pro 14': { price: 1299, marginPct: 0.18 },
    'Bluetooth Speaker': { price: 99, marginPct: 0.38 },
    'Hoodie Essential': { price: 49, marginPct: 0.45 },
    'Running Shoes': { price: 89, marginPct: 0.40 },
    'Classic T-Shirt': { price: 19, marginPct: 0.50 },
    'Air Fryer': { price: 149, marginPct: 0.30 },
    'Vacuum Cleaner': { price: 199, marginPct: 0.28 },
    'Coffee Maker Pro': { price: 129, marginPct: 0.33 },
    'Smart LED Bulb Pack': { price: 29, marginPct: 0.55 },
    'Face Serum': { price: 39, marginPct: 0.60 },
    'Yoga Mat Pro': { price: 35, marginPct: 0.50 },
    'Gift Card Pack': { price: 50, marginPct: 0.02 },
    'Home Decor Set': { price: 79, marginPct: 0.45 },
    'Stationery Bundle': { price: 25, marginPct: 0.55 },
};
var monthCoverage = [1.30, 1.30, 1.25, 1.30, 1.35, 1.40, 1.40, 1.35, 1.25, 1.15, 1.05, 1.05];
var supplyCoverByMonth = [1.05, 0.85, 1.10, 0.95, 0.80, 0.75, 0.90, 0.70, 1.00, 0.95, 0.85, 1.05];
var computeStockStatus = function (units, monthIdx) {
    var _a;
    var cov = (_a = monthCoverage[monthIdx]) !== null && _a !== void 0 ? _a : 1.3;
    var onhand = Math.round(units * cov);
    var remaining = onhand - units;
    if (remaining <= 0)
        return 'Out of Stock';
    if (remaining <= Math.max(5, Math.round(units * 0.10)))
        return 'Low';
    return 'In Stock';
};
var TargetVsActualBulletPanel = /** @class */ (function (_super) {
    __extends(TargetVsActualBulletPanel, _super);
    function TargetVsActualBulletPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.TargetActualBulletchartRef = React.createRef();
        _this.state = { metric: 'revenue' };
        _this.refreshTargetActualBulletPanelChart = function () {
            var _a;
            (_a = _this.TargetActualBulletchartRef.current) === null || _a === void 0 ? void 0 : _a.refresh();
        };
        _this.setMetric = function (metric) {
            if (metric === _this.state.metric)
                return;
            _this.setState({ metric: metric }, function () { var _a; return (_a = _this.TargetActualBulletchartRef.current) === null || _a === void 0 ? void 0 : _a.refresh(); });
        };
        _this.onBulletTooltipRender = function (args) {
            // Compact currency that works across browsers (currency+compact is unreliable)
            var compactUSD = function (n) {
                var abs = Math.abs(n);
                var txt = new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 0 }).format(abs);
                return (n < 0 ? '-' : '') + '$' + txt; // e.g., $542K, $1.2M
            };
            var v = args === null || args === void 0 ? void 0 : args.value;
            var achievedText = typeof v === 'number' ? formatCurrency(v) : String(v !== null && v !== void 0 ? v : '');
            var t = Array.isArray(args === null || args === void 0 ? void 0 : args.target) ? args.target[0] : args === null || args === void 0 ? void 0 : args.target;
            var targetText = typeof t === 'number' ? formatCurrency(t) : String(t !== null && t !== void 0 ? t : '');
            args.text = "Achieved: ".concat(achievedText, "<br/>Target: ").concat(targetText);
        };
        return _this;
    }
    TargetVsActualBulletPanel.prototype.componentDidMount = function () {
        var _a, _b;
        (_b = (_a = this.props).onReady) === null || _b === void 0 ? void 0 : _b.call(_a, { refreshTargetActualBulletPanelChart: this.refreshTargetActualBulletPanelChart });
    };
    TargetVsActualBulletPanel.prototype.componentDidUpdate = function (prevProps, prevState) {
        var _a;
        var propsChanged = prevProps.year !== this.props.year ||
            !arrayEqual(prevProps.monthIdxs, this.props.monthIdxs) ||
            prevProps.region !== this.props.region ||
            !arrayEqual(prevProps.channels, this.props.channels) ||
            !arrayEqual(prevProps.categories, this.props.categories);
        var metricChanged = prevState.metric !== this.state.metric;
        if (propsChanged || metricChanged) {
            (_a = this.TargetActualBulletchartRef.current) === null || _a === void 0 ? void 0 : _a.refresh();
        }
    };
    TargetVsActualBulletPanel.prototype.getIncludedRegions = function () {
        var r = this.props.region;
        if (r === 'ALL') {
            return ['AsiaPacific', 'Europe', 'NorthAmerica', 'LatinAmerica', 'MiddleEastAfrica'];
        }
        return isRegionKey(r) ? [r] : ['AsiaPacific', 'Europe', 'NorthAmerica', 'LatinAmerica', 'MiddleEastAfrica'];
    };
    TargetVsActualBulletPanel.prototype.computeCategoryShareForMonth = function (year, monthIdx) {
        var _a, _b, _c, _d;
        var products = buildYearProductSales(year);
        var totals = {};
        var totalUnits = 0;
        for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
            var p = products_1[_i];
            var units = (_b = (_a = p.monthly) === null || _a === void 0 ? void 0 : _a[monthIdx]) !== null && _b !== void 0 ? _b : 0;
            totalUnits += units;
            totals[p.category] = ((_c = totals[p.category]) !== null && _c !== void 0 ? _c : 0) + units;
        }
        var shareByCat = {};
        for (var _e = 0, _f = Object.keys(totals); _e < _f.length; _e++) {
            var k = _f[_e];
            shareByCat[k] = totalUnits > 0 ? totals[k] / totalUnits : 0;
        }
        var selectedCats = (_d = this.props.categories) !== null && _d !== void 0 ? _d : [];
        var shareSum = selectedCats.length
            ? selectedCats.reduce(function (s, c) { var _a; return s + ((_a = shareByCat[c]) !== null && _a !== void 0 ? _a : 0); }, 0)
            : 1;
        return { shareSum: shareSum, shareByCat: shareByCat };
    };
    TargetVsActualBulletPanel.prototype.computeIncludedOrdersForMonth = function (year, monthIdx) {
        var _a, _b;
        var regions = this.getIncludedRegions();
        var selectedChannels = asChannelKeys((_a = this.props.channels) !== null && _a !== void 0 ? _a : []);
        var channels = selectedChannels.length ? selectedChannels : ALL_CHANNELS;
        var orders = 0;
        for (var _i = 0, regions_1 = regions; _i < regions_1.length; _i++) {
            var region = regions_1[_i];
            var chRows = buildChannelsByRegionYear(year, region); // by month
            var row = chRows[monthIdx];
            if (!row)
                continue;
            for (var _c = 0, channels_1 = channels; _c < channels_1.length; _c++) {
                var ch = channels_1[_c];
                orders += ((_b = row[ch]) !== null && _b !== void 0 ? _b : 0);
            }
        }
        var shareSum = this.computeCategoryShareForMonth(year, monthIdx).shareSum;
        return orders * shareSum;
    };
    TargetVsActualBulletPanel.prototype.computeRevenueSliceForMonth = function (year, monthIdx) {
        var _this = this;
        var _a, _b, _c;
        var master = ((_a = monthlyRevenueByYear[year]) !== null && _a !== void 0 ? _a : [])[monthIdx];
        var masterActual = (_b = master === null || master === void 0 ? void 0 : master.actual) !== null && _b !== void 0 ? _b : 0;
        var masterTarget = (_c = master === null || master === void 0 ? void 0 : master.target) !== null && _c !== void 0 ? _c : 0;
        var denomOrders = (function () {
            var _a, _b, _c, _d;
            var allRegions = ['AsiaPacific', 'Europe', 'NorthAmerica', 'LatinAmerica', 'MiddleEastAfrica'];
            var sum = 0;
            for (var _i = 0, allRegions_1 = allRegions; _i < allRegions_1.length; _i++) {
                var region = allRegions_1[_i];
                var chRows = buildChannelsByRegionYear(year, region);
                var row = chRows[monthIdx];
                if (!row)
                    continue;
                sum += ((_a = row.Paid) !== null && _a !== void 0 ? _a : 0) + ((_b = row.Organic) !== null && _b !== void 0 ? _b : 0) + ((_c = row.Email) !== null && _c !== void 0 ? _c : 0) + ((_d = row.Social) !== null && _d !== void 0 ? _d : 0);
            }
            return sum;
        })();
        var shareSum = this.computeCategoryShareForMonth(year, monthIdx).shareSum;
        var includedOrdersNoCat = (function () {
            var _a, _b;
            var regions = _this.getIncludedRegions();
            var selectedChannels = asChannelKeys((_a = _this.props.channels) !== null && _a !== void 0 ? _a : []);
            var channels = selectedChannels.length ? selectedChannels : ALL_CHANNELS;
            var orders = 0;
            for (var _i = 0, regions_2 = regions; _i < regions_2.length; _i++) {
                var region = regions_2[_i];
                var chRows = buildChannelsByRegionYear(year, region);
                var row = chRows[monthIdx];
                if (!row)
                    continue;
                for (var _c = 0, channels_2 = channels; _c < channels_2.length; _c++) {
                    var ch = channels_2[_c];
                    orders += ((_b = row[ch]) !== null && _b !== void 0 ? _b : 0);
                }
            }
            return orders;
        })();
        var regionChannelFactor = denomOrders > 0 ? includedOrdersNoCat / denomOrders : 0;
        var sliceFactor = regionChannelFactor * shareSum;
        return {
            actual: masterActual * sliceFactor,
            target: masterTarget * sliceFactor
        };
    };
    TargetVsActualBulletPanel.prototype.computeOrdersTargetForMonth = function (year, monthIdx, actualOrders) {
        var _a, _b, _c;
        var master = ((_a = monthlyRevenueByYear[year]) !== null && _a !== void 0 ? _a : [])[monthIdx];
        var actualRev = (_b = master === null || master === void 0 ? void 0 : master.actual) !== null && _b !== void 0 ? _b : 0;
        var targetRev = (_c = master === null || master === void 0 ? void 0 : master.target) !== null && _c !== void 0 ? _c : 0;
        if (actualRev <= 0)
            return Math.round(actualOrders);
        var ratio = targetRev / actualRev;
        var safeRatio = Math.max(0.5, Math.min(1.8, ratio));
        return Math.round(actualOrders * safeRatio);
    };
    TargetVsActualBulletPanel.prototype.buildRows = function () {
        var _this = this;
        var _a = this.props, year = _a.year, monthIdxs = _a.monthIdxs;
        var metric = this.state.metric;
        return monthIdxs.map(function (i) {
            var _a, _b;
            if (metric === 'revenue') {
                var _c = _this.computeRevenueSliceForMonth(year, i), actual = _c.actual, target = _c.target;
                var ach_1 = safePct(actual, target);
                return {
                    category: (_a = months[i]) !== null && _a !== void 0 ? _a : '',
                    value: actual,
                    target: target,
                    valueColor: BulletColors.actual,
                    targetColor: BulletColors.target,
                    achievementPct: Math.round(ach_1),
                    actualText: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(actual),
                    targetText: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(target),
                };
            }
            // orders
            var actualOrders = _this.computeIncludedOrdersForMonth(year, i);
            var targetOrders = _this.computeOrdersTargetForMonth(year, i, actualOrders);
            var ach = safePct(actualOrders, targetOrders);
            return {
                category: (_b = months[i]) !== null && _b !== void 0 ? _b : '',
                value: Math.round(actualOrders),
                target: targetOrders,
                valueColor: '#2563EB',
                targetColor: BulletColors.target,
                achievementPct: Math.round(ach),
                actualText: new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(actualOrders),
                targetText: new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(targetOrders),
            };
        });
    };
    TargetVsActualBulletPanel.prototype.computeScale = function (data) {
        var maxValue = Math.max.apply(Math, __spreadArray([0], data.map(function (d) { var _a, _b; return Math.max((_a = d.value) !== null && _a !== void 0 ? _a : 0, (_b = d.target) !== null && _b !== void 0 ? _b : 0); }), false));
        var pad = maxValue * 0.15;
        var max = Math.ceil((maxValue + pad) / 10) * 10 || 10;
        var interval = Math.max(1, Math.round(max / 5));
        var maxTarget = Math.max.apply(Math, __spreadArray([1], data.map(function (d) { var _a; return (_a = d.target) !== null && _a !== void 0 ? _a : 0; }), false));
        var poorEnd = Math.round(maxTarget * 0.80);
        var okEnd = Math.round(maxTarget * 1.00);
        var goodEnd = Math.max(okEnd + 1, Math.round(maxTarget * 1.25));
        return { min: 0, max: Math.max(max, goodEnd), interval: interval, poorEnd: poorEnd, okEnd: okEnd, goodEnd: goodEnd };
    };
    TargetVsActualBulletPanel.prototype.render = function () {
        var _this = this;
        var metric = this.state.metric;
        var data = this.buildRows();
        var scale = this.computeScale(data);
        var labelFormat = metric === 'revenue' ? '${value}' : '{value}';
        return (React.createElement("div", { style: { height: '100%', width: '100%', padding: 8, boxSizing: 'border-box' } },
            React.createElement("div", { style: { height: 'calc(100% - 50px)', width: '100%' } },
                React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'end' } },
                    React.createElement("div", { className: "e-btn-group", style: { marginLeft: 10 } },
                        React.createElement(ej2_react_buttons_1.ButtonComponent, { cssClass: metric === 'revenue' ? 'e-primary' : 'e-outline', onClick: function () { return _this.setMetric('revenue'); } }, "Revenue"),
                        React.createElement(ej2_react_buttons_1.ButtonComponent, { cssClass: metric === 'orders' ? 'e-primary' : 'e-outline', onClick: function () { return _this.setMetric('orders'); } }, "Orders"))),
                React.createElement(ej2_react_charts_1.BulletChartComponent, { id: "targetVsActualBullet", ref: this.TargetActualBulletchartRef, dataSource: data, valueField: "value", targetField: "target", categoryField: "category", enableGroupSeparator: true, labelFormat: labelFormat, minimum: scale.min, maximum: scale.max, interval: scale.interval, valueFill: BulletColors.actual, targetColor: BulletColors.target, targetWidth: 6, tooltip: { enable: true }, tooltipRender: this.onBulletTooltipRender, majorTickLines: { width: 0 }, minorTickLines: { width: 0 }, animation: { enable: false }, load: onBulletLoad },
                    React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.BulletTooltip] }),
                    React.createElement(ej2_react_charts_1.BulletRangeCollectionDirective, null,
                        React.createElement(ej2_react_charts_1.BulletRangeDirective, { end: scale.poorEnd, color: BulletColors.poor, opacity: 0.14 }),
                        React.createElement(ej2_react_charts_1.BulletRangeDirective, { end: scale.okEnd, color: BulletColors.ok, opacity: 0.14 }),
                        React.createElement(ej2_react_charts_1.BulletRangeDirective, { end: scale.goodEnd, color: BulletColors.good, opacity: 0.14 }))))));
    };
    TargetVsActualBulletPanel.defaultProps = {
        year: 2025,
        monthIdxs: Array.from({ length: 12 }, function (_, i) { return i; }),
        region: 'ALL',
        channels: [],
        categories: []
    };
    return TargetVsActualBulletPanel;
}(React.PureComponent));
var ChannelColors = {
    Paid: '#850E35',
    Organic: '#FF5858',
    Email: '#FE8F8F',
    Social: '#DBA39A'
};
var SalesMixGrowthPanel = /** @class */ (function (_super) {
    __extends(SalesMixGrowthPanel, _super);
    function SalesMixGrowthPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.SalesMixGrowthChartRef = React.createRef();
        _this.state = { drill: null, activeTab: 'mix' };
        _this.refreshSalesMixGrowthChart = function () {
            var _a;
            (_a = _this.SalesMixGrowthChartRef.current) === null || _a === void 0 ? void 0 : _a.refresh();
        };
        _this.onChannelChartMouseClick = function (args) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _o, _p, _q;
            var target = String((args === null || args === void 0 ? void 0 : args.target) || '');
            if (target.startsWith('smg_channel_donut_datalabel_Series_0_text_') ||
                target.startsWith('smg_channel_donut_datalabel_Series_0_shape_')) {
                var idx = parseInt(target.split('_').pop() || '-1', 10);
                if (idx >= 0) {
                    var chart = _this.SalesMixGrowthChartRef.current;
                    var pt = (_h = (_d = (_c = (_b = (_a = chart === null || chart === void 0 ? void 0 : chart.visibleSeries) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.points) === null || _c === void 0 ? void 0 : _c[idx]) !== null && _d !== void 0 ? _d : (_g = (_f = (_e = chart === null || chart === void 0 ? void 0 : chart.accumulationSeries) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.points) === null || _g === void 0 ? void 0 : _g[idx]) !== null && _h !== void 0 ? _h : null;
                    var raw = (_q = (_o = (_j = pt === null || pt === void 0 ? void 0 : pt.x) !== null && _j !== void 0 ? _j : (_l = (_k = pt === null || pt === void 0 ? void 0 : pt.args) === null || _k === void 0 ? void 0 : _k.point) === null || _l === void 0 ? void 0 : _l.x) !== null && _o !== void 0 ? _o : (_p = pt === null || pt === void 0 ? void 0 : pt.data) === null || _p === void 0 ? void 0 : _p.x) !== null && _q !== void 0 ? _q : '';
                    var ch = String(raw).trim();
                    if (ch === 'Paid' || ch === 'Organic' || ch === 'Email' || ch === 'Social') {
                        _this.setState({ drill: { type: 'channel', key: ch } });
                    }
                }
            }
        };
        _this.setTab = function (tab) {
            if (tab === _this.state.activeTab)
                return;
            _this.setState(function (s) { return ({
                activeTab: tab,
                drill: tab === 'trend' ? null : s.drill
            }); });
        };
        _this.isAllMonths = function () { return _this.props.monthIndex === ALL_MONTH; };
        _this.onChannelDonutPointClick = function (args) {
            var _a, _b, _c, _d, _e;
            var raw = ((_e = (_c = (_b = (_a = args === null || args === void 0 ? void 0 : args.point) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.x) !== null && _c !== void 0 ? _c : (_d = args === null || args === void 0 ? void 0 : args.point) === null || _d === void 0 ? void 0 : _d.x) !== null && _e !== void 0 ? _e : '');
            var ch = String(raw).replace(/\s*\(\s*\d+%?\s*\)\s*$/, '').trim();
            if (ch === 'Paid' || ch === 'Organic' || ch === 'Email' || ch === 'Social') {
                _this.setState({ drill: { type: 'channel', key: ch } });
            }
        };
        _this.onCurrencyTooltip = function (args) {
            var _a, _b, _c, _d, _e, _f;
            var y = Number((_b = (_a = args === null || args === void 0 ? void 0 : args.point) === null || _a === void 0 ? void 0 : _a.y) !== null && _b !== void 0 ? _b : 0);
            var x = String((_d = (_c = args === null || args === void 0 ? void 0 : args.point) === null || _c === void 0 ? void 0 : _c.x) !== null && _d !== void 0 ? _d : '');
            var series = String((_f = (_e = args === null || args === void 0 ? void 0 : args.series) === null || _e === void 0 ? void 0 : _e.name) !== null && _f !== void 0 ? _f : '');
            args.text = series ? "".concat(x, " : ").concat(formatCurrency(y)) : "".concat(x, ": ").concat(formatCurrency(y));
        };
        _this.onBack = function () { return _this.setState({ drill: null }); };
        _this.clampMonth = function (m) { return Math.max(0, Math.min(11, m)); };
        _this.buildRollingWindow = function (year, monthIndex, windowSize) {
            if (windowSize === void 0) { windowSize = 3; }
            var out = [];
            var DATA_FLOOR_YEAR = 2022;
            for (var back = windowSize - 1; back >= 0; back--) {
                var y = year;
                var m = monthIndex - back;
                while (m < 0) {
                    y -= 1;
                    m += 12;
                }
                if (y < DATA_FLOOR_YEAR)
                    continue;
                var monthIdx = _this.clampMonth(m);
                out.push({ year: y, monthIdx: monthIdx, label: "".concat(months[monthIdx], " ").concat(y) });
            }
            if (out.length < 2) {
                var start_1 = Math.max(0, monthIndex - (windowSize - 1));
                return Array.from({ length: monthIndex - start_1 + 1 }, function (_, i) {
                    var idx = start_1 + i;
                    return { year: year, monthIdx: idx, label: "".concat(months[idx], " ").concat(year) };
                });
            }
            return out;
        };
        _this.pctChange = function (current, base) { return (base > 0 ? ((current - base) / base) * 100 : null); };
        _this.fmtPct = function (v) {
            if (v === null || !isFinite(v))
                return '—';
            var sign = v > 0 ? '+' : '';
            return "".concat(sign).concat(v.toFixed(1), "%");
        };
        _this.getPrevMonth = function (year, monthIndex) {
            if (monthIndex > 0)
                return { year: year, monthIdx: monthIndex - 1 };
            return { year: year - 1, monthIdx: 11 };
        };
        _this.onTrendsViewAxisLabelRender = function (args) {
            var _a;
            if (args.axis && args.axis.name === 'percentAxis')
                return;
            if (((_a = args === null || args === void 0 ? void 0 : args.axis) === null || _a === void 0 ? void 0 : _a.valueType) !== 'Category') {
                args.text = formatCurrency(Number(args.value || 0));
            }
        };
        return _this;
    }
    SalesMixGrowthPanel.prototype.componentDidMount = function () {
        var _a, _b;
        (_b = (_a = this.props).onReady) === null || _b === void 0 ? void 0 : _b.call(_a, { refreshSalesMixGrowthChart: this.refreshSalesMixGrowthChart });
    };
    SalesMixGrowthPanel.prototype.getIncludedRegions = function () {
        var r = this.props.region;
        if (r === 'ALL')
            return ['AsiaPacific', 'Europe', 'NorthAmerica', 'LatinAmerica', 'MiddleEastAfrica'];
        return isRegionKey(r) ? [r] : ['AsiaPacific', 'Europe', 'NorthAmerica', 'LatinAmerica', 'MiddleEastAfrica'];
    };
    SalesMixGrowthPanel.prototype.getIncludedChannels = function () {
        var _a;
        var sel = asChannelKeys((_a = this.props.channels) !== null && _a !== void 0 ? _a : []);
        return sel.length ? sel : ALL_CHANNELS;
    };
    SalesMixGrowthPanel.prototype.categoryShareForMonth = function (year, monthIdx) {
        var _a, _b, _c, _d;
        var products = buildYearProductSales(year);
        var totals = {};
        var totalUnits = 0;
        for (var _i = 0, products_2 = products; _i < products_2.length; _i++) {
            var p = products_2[_i];
            var u = (_b = (_a = p.monthly) === null || _a === void 0 ? void 0 : _a[monthIdx]) !== null && _b !== void 0 ? _b : 0;
            totalUnits += u;
            totals[p.category] = ((_c = totals[p.category]) !== null && _c !== void 0 ? _c : 0) + u;
        }
        var shareByCat = {};
        Object.keys(totals).forEach(function (c) {
            var _a;
            shareByCat[c] = totalUnits > 0 ? ((_a = totals[c]) !== null && _a !== void 0 ? _a : 0) / totalUnits : 0;
        });
        var selectedCats = (_d = this.props.categories) !== null && _d !== void 0 ? _d : [];
        var catFactor = selectedCats.length
            ? selectedCats.reduce(function (s, c) { var _a; return s + ((_a = shareByCat[c]) !== null && _a !== void 0 ? _a : 0); }, 0)
            : 1;
        return { shareByCat: shareByCat, catFactor: catFactor };
    };
    SalesMixGrowthPanel.prototype.revenueByCategoryWithinChannelMonth = function (year, monthIdx, channel) {
        var _a, _b, _c;
        var cats = ((_a = this.props.categories) === null || _a === void 0 ? void 0 : _a.length) ? this.props.categories : CATEGORY_OPTIONS;
        var master = ((_b = monthlyRevenueByYear[year]) !== null && _b !== void 0 ? _b : [])[monthIdx];
        var masterActual = (_c = master === null || master === void 0 ? void 0 : master.actual) !== null && _c !== void 0 ? _c : 0;
        var shareByCat = this.categoryShareForMonth(year, monthIdx).shareByCat;
        var denom = this.denomOrdersAllRegionsAllChannels(year, monthIdx) || 1;
        var chOrders = this.ordersForChannelMonth(year, monthIdx, channel);
        var rcFactor = chOrders / denom;
        return cats.map(function (c) { var _a; return ({ x: c, y: masterActual * rcFactor * ((_a = shareByCat[c]) !== null && _a !== void 0 ? _a : 0) }); });
    };
    SalesMixGrowthPanel.prototype.ordersForChannelMonth = function (year, monthIdx, ch) {
        var _a;
        var sum = 0;
        for (var _i = 0, _b = this.getIncludedRegions(); _i < _b.length; _i++) {
            var region = _b[_i];
            var rows = buildChannelsByRegionYear(year, region);
            var r = rows[monthIdx];
            if (r)
                sum += ((_a = r[ch]) !== null && _a !== void 0 ? _a : 0);
        }
        return sum;
    };
    SalesMixGrowthPanel.prototype.denomOrdersAllRegionsAllChannels = function (year, monthIdx) {
        var _a, _b, _c, _d;
        var sum = 0;
        for (var _i = 0, _e = ['AsiaPacific', 'Europe', 'NorthAmerica', 'LatinAmerica', 'MiddleEastAfrica']; _i < _e.length; _i++) {
            var region = _e[_i];
            var rows = buildChannelsByRegionYear(year, region);
            var r = rows[monthIdx];
            if (!r)
                continue;
            sum += ((_a = r.Paid) !== null && _a !== void 0 ? _a : 0) + ((_b = r.Organic) !== null && _b !== void 0 ? _b : 0) + ((_c = r.Email) !== null && _c !== void 0 ? _c : 0) + ((_d = r.Social) !== null && _d !== void 0 ? _d : 0);
        }
        return sum;
    };
    SalesMixGrowthPanel.prototype.revenueByChannelForMonth = function (year, monthIdx) {
        var _a, _b;
        var master = ((_a = monthlyRevenueByYear[year]) !== null && _a !== void 0 ? _a : [])[monthIdx];
        var masterActual = (_b = master === null || master === void 0 ? void 0 : master.actual) !== null && _b !== void 0 ? _b : 0;
        var catFactor = this.categoryShareForMonth(year, monthIdx).catFactor;
        var denom = this.denomOrdersAllRegionsAllChannels(year, monthIdx) || 1;
        var channels = this.getIncludedChannels();
        var byCh = { Paid: 0, Organic: 0, Email: 0, Social: 0 };
        for (var _i = 0, channels_3 = channels; _i < channels_3.length; _i++) {
            var ch = channels_3[_i];
            var chOrders = this.ordersForChannelMonth(year, monthIdx, ch);
            byCh[ch] = masterActual * (chOrders / denom) * catFactor;
        }
        return byCh;
    };
    SalesMixGrowthPanel.prototype.revenueByChannelForYear = function (year) {
        var monthsIdx = Array.from({ length: 12 }, function (_, i) { return i; });
        var agg = { Paid: 0, Organic: 0, Email: 0, Social: 0 };
        var _loop_2 = function (i) {
            var m = this_1.revenueByChannelForMonth(year, i);
            Object.keys(m).forEach(function (k) { return (agg[k] += m[k]); });
        };
        var this_1 = this;
        for (var _i = 0, monthsIdx_1 = monthsIdx; _i < monthsIdx_1.length; _i++) {
            var i = monthsIdx_1[_i];
            _loop_2(i);
        }
        var sel = this.getIncludedChannels();
        Object.keys(agg).forEach(function (k) {
            if (!sel.includes(k))
                delete agg[k];
        });
        return agg;
    };
    SalesMixGrowthPanel.prototype.revenueByCategoryForMonth = function (year, monthIdx) {
        var _a, _b, _c;
        var master = ((_a = monthlyRevenueByYear[year]) !== null && _a !== void 0 ? _a : [])[monthIdx];
        var masterActual = (_b = master === null || master === void 0 ? void 0 : master.actual) !== null && _b !== void 0 ? _b : 0;
        var _d = this.categoryShareForMonth(year, monthIdx), shareByCat = _d.shareByCat, catFactor = _d.catFactor;
        var denom = this.denomOrdersAllRegionsAllChannels(year, monthIdx) || 1;
        var channels = this.getIncludedChannels();
        var included = 0;
        for (var _i = 0, channels_4 = channels; _i < channels_4.length; _i++) {
            var ch = channels_4[_i];
            included += this.ordersForChannelMonth(year, monthIdx, ch);
        }
        var rcFactor = included / denom;
        var cats = ((_c = this.props.categories) === null || _c === void 0 ? void 0 : _c.length) ? this.props.categories : Object.keys(shareByCat);
        var out = cats.map(function (c) {
            var _a;
            return ({
                x: c,
                y: masterActual * rcFactor * ((_a = shareByCat[c]) !== null && _a !== void 0 ? _a : 0)
            });
        });
        return out;
    };
    SalesMixGrowthPanel.prototype.revenueByCategoryForYear = function (year) {
        var _a, _b;
        var cats = ((_a = this.props.categories) === null || _a === void 0 ? void 0 : _a.length) ? this.props.categories : CATEGORY_OPTIONS;
        var agg = Object.fromEntries(cats.map(function (c) { return [c, 0]; }));
        for (var i = 0; i < 12; i++) {
            for (var _i = 0, _c = this.revenueByCategoryForMonth(year, i); _i < _c.length; _i++) {
                var row = _c[_i];
                if (row && typeof row.y === 'number')
                    agg[row.x] = ((_b = agg[row.x]) !== null && _b !== void 0 ? _b : 0) + row.y;
            }
        }
        return Object.keys(agg).map(function (k) { return ({ x: k, y: agg[k] }); });
    };
    SalesMixGrowthPanel.prototype.revenueByCategoryWithinChannelYear = function (year, channel) {
        var _a, _b, _c, _d;
        var cats = ((_a = this.props.categories) === null || _a === void 0 ? void 0 : _a.length) ? this.props.categories : CATEGORY_OPTIONS;
        var agg = Object.fromEntries(cats.map(function (c) { return [c, 0]; }));
        for (var i = 0; i < 12; i++) {
            var master = ((_b = monthlyRevenueByYear[year]) !== null && _b !== void 0 ? _b : [])[i];
            var masterActual = (_c = master === null || master === void 0 ? void 0 : master.actual) !== null && _c !== void 0 ? _c : 0;
            var shareByCat = this.categoryShareForMonth(year, i).shareByCat;
            var denom = this.denomOrdersAllRegionsAllChannels(year, i) || 1;
            var chOrders = this.ordersForChannelMonth(year, i, channel);
            var rcFactor = chOrders / denom;
            for (var _i = 0, cats_1 = cats; _i < cats_1.length; _i++) {
                var c = cats_1[_i];
                agg[c] += masterActual * rcFactor * ((_d = shareByCat[c]) !== null && _d !== void 0 ? _d : 0);
            }
        }
        return Object.keys(agg).map(function (k) { return ({ x: k, y: agg[k] }); });
    };
    SalesMixGrowthPanel.prototype.roundSeriesToTotal = function (data) {
        var items = data.map(function (d) { return ({ x: d.x, y: Number(d.y || 0) }); });
        var total = items.reduce(function (s, d) { return s + d.y; }, 0);
        if (!isFinite(total) || items.length === 0)
            return items.map(function (d) { return ({ x: d.x, y: Math.round(d.y) }); });
        var target = Math.round(total);
        var floors = items.map(function (d) { return Math.floor(Math.max(0, d.y)); });
        var rem = target - floors.reduce(function (s, v) { return s + v; }, 0);
        var order = items
            .map(function (d, i) { return ({ i: i, frac: d.y - floors[i] }); })
            .sort(function (a, b) { return b.frac - a.frac; });
        var out = items.map(function (d, i) { return ({ x: d.x, y: floors[i] }); });
        for (var k = 0; rem > 0 && k < order.length; k++) {
            out[order[k].i].y += 1;
            rem--;
        }
        for (var k = 0; rem < 0 && k < order.length; k++) {
            var idx = order[order.length - 1 - k].i;
            if (out[idx].y > 0) {
                out[idx].y -= 1;
                rem++;
            }
        }
        return out;
    };
    SalesMixGrowthPanel.prototype.renderMixView = function () {
        var _a;
        var _b = this.props, year = _b.year, monthIndex = _b.monthIndex;
        var isAll = this.isAllMonths();
        var drill = this.state.drill;
        var chartId = drill ? 'smg_channel_donut_drill' : 'smg_channel_donut';
        // your existing donut data building stays the same:
        var byChannel = isAll ? this.revenueByChannelForYear(year) : this.revenueByChannelForMonth(year, monthIndex);
        var chDataRaw = Object.keys(byChannel)
            .map(function (k) { return ({ x: k, y: byChannel[k] }); })
            .filter(function (d) { var _a; return ((_a = d.y) !== null && _a !== void 0 ? _a : 0) > 0; });
        var chData = this.roundSeriesToTotal(chDataRaw);
        var totalCh = chData.reduce(function (s, p) { return s + (p.y || 0); }, 0) || 1;
        // Keep legend text plain; attach pct for data labels
        var chDataForChart = chData.map(function (d) {
            var pct = totalCh > 0 ? Math.round(((d.y || 0) / totalCh) * 100) : 0;
            return __assign(__assign({}, d), { legendText: String(d.x), pct: pct });
        });
        var chColors = chData.map(function (d) { var _a; return (_a = ChannelColors[d.x]) !== null && _a !== void 0 ? _a : '#999'; });
        var byCategoryRaw = (isAll ? this.revenueByCategoryForYear(year) : this.revenueByCategoryForMonth(year, monthIndex)).filter(function (d) { return d.y > 0; });
        var byCategory = this.roundSeriesToTotal(byCategoryRaw);
        var catPalette = pickPalette(Palettes.salesMix, byCategory.length);
        // Drilldown data
        var drillTitle = '';
        var drillData = [];
        var drillColors = [];
        if ((drill === null || drill === void 0 ? void 0 : drill.type) === 'channel') {
            drillTitle = "Categories \u2022 ".concat(drill.key);
            var rows = isAll
                ? this.revenueByCategoryWithinChannelYear(year, drill.key)
                : this.revenueByCategoryWithinChannelMonth(year, monthIndex, drill.key);
            var drillDataRounded = this.roundSeriesToTotal(rows.filter(function (r) { var _a; return ((_a = r === null || r === void 0 ? void 0 : r.y) !== null && _a !== void 0 ? _a : 0) > 0; }));
            var drillTotal_1 = drillDataRounded.reduce(function (s, p) { return s + (p.y || 0); }, 0) || 1;
            // legendText plain; attach pct for labels
            var drillDataForChart = drillDataRounded.map(function (d) {
                var pct = Math.round(((d.y || 0) / drillTotal_1) * 100);
                return __assign(__assign({}, d), { legendText: String(d.x), pct: pct });
            });
            drillData = drillDataRounded;
            drillColors = pickPalette(Palettes.salesMix, drillData.length);
            drillData._forChart = drillDataForChart;
        }
        var revenueCurrency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
        // Show "$value (pct%)" on labels; prefer pct from data, else derive
        var onTextRender = function (args) {
            var _a, _b, _c, _d, _e;
            var y = Number((_b = (_a = args.point) === null || _a === void 0 ? void 0 : _a.y) !== null && _b !== void 0 ? _b : 0);
            var pctFromData = Number((_d = (_c = args === null || args === void 0 ? void 0 : args.point) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.pct);
            var pct = Number.isFinite(pctFromData) ? Math.round(pctFromData) : NaN;
            if (!Number.isFinite(pct)) {
                var pts = Array.isArray((_e = args === null || args === void 0 ? void 0 : args.series) === null || _e === void 0 ? void 0 : _e.points) ? args.series.points : [];
                var sum = pts.reduce(function (s, p) { return s + (Number(p === null || p === void 0 ? void 0 : p.y) || 0); }, 0);
                pct = sum > 0 ? Math.round((y / sum) * 100) : 0;
            }
            args.text = "".concat(formatCurrency(y), " (").concat(pct, "%)");
        };
        return (React.createElement("div", { style: { height: '100%', width: '100%', minHeight: 0 } },
            React.createElement(ej2_react_charts_1.AccumulationChartComponent, { id: chartId, ref: this.SalesMixGrowthChartRef, legendSettings: { visible: true, position: "Right" }, tooltip: { enable: true }, tooltipRender: this.onCurrencyTooltip, textRender: onTextRender, pointClick: drill ? undefined : this.onChannelDonutPointClick, chartMouseClick: !drill ? this.onChannelChartMouseClick : undefined, load: onAccumulationLoad },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.PieSeries, ej2_react_charts_1.AccumulationLegend, ej2_react_charts_1.AccumulationTooltip, ej2_react_charts_1.AccumulationDataLabel] }),
                React.createElement(ej2_react_charts_1.AccumulationSeriesCollectionDirective, null,
                    !drill && (React.createElement(ej2_react_charts_1.AccumulationSeriesDirective, { type: "Pie", dataSource: chDataForChart, xName: "legendText", yName: "y", innerRadius: "65%", palettes: chColors, dataLabel: { visible: true, position: 'Outside', connectorStyle: { length: '10px' }, name: 'y', font: { size: '12px' } }, animation: { enable: false }, borderRadius: 10, border: { width: 4, color: '#ffffff' } })),
                    drill && drill.type === 'channel' && (React.createElement(ej2_react_charts_1.AccumulationSeriesDirective, { type: "Pie", dataSource: (_a = drillData._forChart) !== null && _a !== void 0 ? _a : drillData, xName: "legendText", yName: "y", innerRadius: "65%", palettes: drillColors, dataLabel: { visible: true, position: 'Outside', connectorStyle: { length: '10px' }, name: 'y', font: { size: '12px' } }, animation: { enable: false }, borderRadius: 10, border: { width: 4, color: '#ffffff' } }))))));
    };
    SalesMixGrowthPanel.prototype.renderTrendView = function () {
        var _this = this;
        var _a = this.props, year = _a.year, monthIndex = _a.monthIndex;
        var isAll = this.isAllMonths();
        var includedChannels = this.getIncludedChannels();
        var points = isAll
            ? Array.from({ length: 12 }, function (_, i) { return ({ year: year, monthIdx: i, label: months[i] }); })
            : this.buildRollingWindow(year, monthIndex, 3);
        var trendSeriesByChannel = {};
        includedChannels.forEach(function (ch) {
            trendSeriesByChannel[ch] = points.map(function (p) {
                var _a;
                var byCh = _this.revenueByChannelForMonth(p.year, p.monthIdx);
                return { m: p.label, y: (_a = byCh[ch]) !== null && _a !== void 0 ? _a : 0 };
            });
        });
        var currByCh = this.revenueByChannelForMonth(year, monthIndex);
        var prev = this.getPrevMonth(year, monthIndex);
        var prevByCh = prev.year >= 2022 ? this.revenueByChannelForMonth(prev.year, prev.monthIdx) : null;
        var yoyByCh = (year - 1) >= 2022 ? this.revenueByChannelForMonth(year - 1, monthIndex) : null;
        var growthRows = includedChannels.map(function (ch) {
            var _a, _b, _c;
            var curr = (_a = currByCh[ch]) !== null && _a !== void 0 ? _a : 0;
            var pm = prevByCh ? ((_b = prevByCh[ch]) !== null && _b !== void 0 ? _b : 0) : 0;
            var ly = yoyByCh ? ((_c = yoyByCh[ch]) !== null && _c !== void 0 ? _c : 0) : 0;
            return { ch: ch, mom: _this.pctChange(curr, pm), yoy: _this.pctChange(curr, ly) };
        });
        return (React.createElement("div", { style: { height: '100%', minHeight: 0, display: 'flex', flexDirection: 'column', gap: 10 } },
            !isAll && (React.createElement("div", { style: { display: 'flex', gap: 10, flexWrap: 'wrap' } }, growthRows.map(function (g) {
                var _a, _b, _c;
                return (React.createElement("div", { key: g.ch, style: {
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        padding: '4px 10px',
                        border: '1px solid #E2E8F0',
                        borderRadius: 999,
                        background: '#F8FAFC'
                    } },
                    React.createElement("span", { style: { width: 8, height: 8, borderRadius: 999, background: (_a = ChannelColors[g.ch]) !== null && _a !== void 0 ? _a : '#64748B' } }),
                    React.createElement("span", { style: { fontSize: 12, fontWeight: 800, color: '#0F172A' } }, g.ch),
                    React.createElement("span", { style: { fontSize: 12, color: '#64748B', fontWeight: 700 } }, "MoM"),
                    React.createElement("span", { style: { fontSize: 12, fontWeight: 800, color: ((_b = g.mom) !== null && _b !== void 0 ? _b : 0) >= 0 ? '#16A34A' : '#DC2626' } }, _this.fmtPct(g.mom)),
                    React.createElement("span", { style: { fontSize: 12, color: '#64748B', fontWeight: 700 } }, "YoY"),
                    React.createElement("span", { style: { fontSize: 12, fontWeight: 800, color: ((_c = g.yoy) !== null && _c !== void 0 ? _c : 0) >= 0 ? '#16A34A' : '#DC2626' } }, _this.fmtPct(g.yoy))));
            }))),
            React.createElement("div", { style: { flex: 1, minHeight: 0, height: '100%', width: '100%' } },
                React.createElement(ej2_react_charts_1.ChartComponent, { id: "salesMixGrowthTrendTab", height: "100%", width: "100%", primaryXAxis: { valueType: 'Category', majorGridLines: { width: 0 }, majorTickLines: { width: 0 }, labelStyle: { size: '10px' } }, primaryYAxis: { labelFormat: 'c0', lineStyle: { width: 0 }, majorTickLines: { width: 0 }, majorGridLines: { width: 0 }, labelStyle: { size: '10px' } }, chartArea: { border: { width: 0 } }, tooltip: { enable: true }, legendSettings: { visible: true }, axisLabelRender: this.onTrendsViewAxisLabelRender, load: onChartLoad, tooltipRender: this.onCurrencyTooltip },
                    React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.SplineSeries, ej2_react_charts_1.Legend, ej2_react_charts_1.Tooltip, ej2_react_charts_1.Category] }),
                    React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null, includedChannels.map(function (ch) {
                        var _a;
                        return (React.createElement(ej2_react_charts_1.SeriesDirective, { key: ch, type: "Spline", name: ch, dataSource: trendSeriesByChannel[ch], xName: "m", yName: "y", width: 2, marker: { visible: true, width: 8, height: 8 }, fill: (_a = ChannelColors[ch]) !== null && _a !== void 0 ? _a : '#64748B' }));
                    }))))));
    };
    SalesMixGrowthPanel.prototype.render = function () {
        var _this = this;
        var activeTab = this.state.activeTab;
        return (React.createElement("div", { style: { height: '100%', width: '100%', padding: 8, boxSizing: 'border-box', minHeight: 0 } },
            React.createElement("div", { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, marginBottom: 10 } },
                React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 8, minHeight: 36 } }, this.state.drill ? (React.createElement(React.Fragment, null,
                    React.createElement("button", { onClick: this.onBack, className: "e-btn e-outline" }, "Back"),
                    React.createElement("div", { style: {
                            fontSize: 12,
                            color: '#64748B',
                            fontWeight: 600,
                            whiteSpace: 'nowrap'
                        } }, this.state.drill.type === 'channel'
                        ? "Categories \u2022 ".concat(this.state.drill.key)
                        : "Products \u2022 ".concat(this.state.drill.key)))) : (
                // Keep line height stable when not drilled
                React.createElement("div", { style: { height: 0 } }))),
                React.createElement("div", { className: "e-btn-group" },
                    React.createElement(ej2_react_buttons_1.ButtonComponent, { cssClass: this.state.activeTab === 'mix' ? 'e-primary' : 'e-outline', onClick: function () { return _this.setTab('mix'); } }, "Mix"),
                    React.createElement(ej2_react_buttons_1.ButtonComponent, { cssClass: this.state.activeTab === 'trend' ? 'e-primary' : 'e-outline', onClick: function () { return _this.setTab('trend'); } }, "Trend"))),
            React.createElement("div", { style: { height: 'calc(100% - 60px)', minHeight: 0, width: '100%' } }, activeTab === 'mix' ? this.renderMixView() : this.renderTrendView())));
    };
    return SalesMixGrowthPanel;
}(React.PureComponent));
var TOP_N_PRODUCTS = 6;
var worldMap = {
    type: 'FeatureCollection',
    features: [
        // North America
        {
            type: 'Feature',
            properties: { continent: 'North America', name: 'North America' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                        [-170, 5], [-52, 5], [-52, 83], [-170, 83], [-170, 5]
                    ]]
            }
        },
        // South America
        {
            type: 'Feature',
            properties: { continent: 'South America', name: 'South America' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                        [-82, -56], [-34, -56], [-34, 12], [-82, 12], [-82, -56]
                    ]]
            }
        },
        // Europe
        {
            type: 'Feature',
            properties: { continent: 'Europe', name: 'Europe' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                        [-10, 35], [60, 35], [60, 72], [-10, 72], [-10, 35]
                    ]]
            }
        },
        // Africa
        {
            type: 'Feature',
            properties: { continent: 'Africa', name: 'Africa' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                        [-20, -35], [50, -35], [50, 38], [-20, 38], [-20, -35]
                    ]]
            }
        },
        // Asia
        {
            type: 'Feature',
            properties: { continent: 'Asia', name: 'Asia' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                        [25, 5], [180, 5], [180, 80], [25, 80], [25, 5]
                    ]]
            }
        },
        // Oceania
        {
            type: 'Feature',
            properties: { continent: 'Oceania', name: 'Oceania' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                        [110, -50], [180, -50], [180, 0], [110, 0], [110, -50]
                    ]]
            }
        }
    ]
};
var DemandOriginsPanel = /** @class */ (function (_super) {
    __extends(DemandOriginsPanel, _super);
    function DemandOriginsPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.RegionChartRef = React.createRef();
        _this.RegionMapRef = React.createRef();
        _this.state = { demandRegion: null, worldShape: null, channelDrill: null };
        _this.refreshRegionChart = function () {
            var _a, _b;
            (_a = _this.RegionMapRef.current) === null || _a === void 0 ? void 0 : _a.refresh();
            (_b = _this.RegionChartRef.current) === null || _b === void 0 ? void 0 : _b.refresh();
        };
        _this.continentWeights = {
            AsiaPacific: { 'Asia': 0.85, 'Oceania': 0.15 },
            Europe: { 'Europe': 1.0 },
            NorthAmerica: { 'North America': 1.0 },
            LatinAmerica: { 'South America': 1.0 },
            MiddleEastAfrica: { 'Africa': 0.75, 'Asia': 0.25 } // Middle East approximated into Asia
        };
        _this.onMapShapeSelected = function (args) {
            var _a;
            var continent = (_a = args === null || args === void 0 ? void 0 : args.shapeData) === null || _a === void 0 ? void 0 : _a.continent;
            if (!continent)
                return;
            var key = _this.mapRegionNameToKeyFromContinent(continent || '');
            if (!key)
                return;
            var allowedRegions = _this.getIncludedRegions();
            if (!allowedRegions.includes(key))
                return;
            _this.setState({ demandRegion: key });
        };
        _this.onDemandBack = function () { return _this.setState({ demandRegion: null, channelDrill: null }); };
        _this.onChannelBack = function () { return _this.setState({ channelDrill: null }); };
        _this.onChannelPointClick = function (args) {
            var _a, _b;
            var name = ((_b = (_a = args === null || args === void 0 ? void 0 : args.series) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : '').trim();
            if (name === 'Paid' || name === 'Organic' || name === 'Email' || name === 'Social') {
                _this.setState({ channelDrill: name });
            }
        };
        _this.displayRegion = function (rk) {
            switch (rk) {
                case 'AsiaPacific': return 'Asia-Pacific';
                case 'NorthAmerica': return 'North America';
                case 'LatinAmerica': return 'Latin America';
                case 'MiddleEastAfrica': return 'Middle East & Africa';
                default: return rk;
            }
        };
        _this.tooltipRender = function (args) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _o, _p, _q;
            if (!args.options['data'] || args.options['data'].value === 0) {
                args.cancel = true;
            }
            var shape = (_d = (_c = (_a = args === null || args === void 0 ? void 0 : args.shapeData) !== null && _a !== void 0 ? _a : (_b = args === null || args === void 0 ? void 0 : args.options) === null || _b === void 0 ? void 0 : _b.data) !== null && _c !== void 0 ? _c : args === null || args === void 0 ? void 0 : args.options) !== null && _d !== void 0 ? _d : {};
            var continent = String(_this.getShapeProp(shape, 'continent') || '').trim();
            var name = String(_this.getShapeProp(shape, 'name') || continent || '—').trim();
            var optData = (_g = (_f = (_e = args === null || args === void 0 ? void 0 : args.options) === null || _e === void 0 ? void 0 : _e.data) !== null && _f !== void 0 ? _f : args === null || args === void 0 ? void 0 : args.options) !== null && _g !== void 0 ? _g : null;
            var rawValue = (_p = (_o = (_k = (_h = optData === null || optData === void 0 ? void 0 : optData.value) !== null && _h !== void 0 ? _h : (_j = optData === null || optData === void 0 ? void 0 : optData.properties) === null || _j === void 0 ? void 0 : _j.value) !== null && _k !== void 0 ? _k : (_l = args === null || args === void 0 ? void 0 : args.data) === null || _l === void 0 ? void 0 : _l.value) !== null && _o !== void 0 ? _o : args === null || args === void 0 ? void 0 : args._args$data$value) !== null && _p !== void 0 ? _p : 0;
            var num = Number(rawValue) || 0;
            var primaryRegion = String((_q = optData === null || optData === void 0 ? void 0 : optData.primaryRegion) !== null && _q !== void 0 ? _q : '') || '';
            var primaryRegionLabel = primaryRegion ? "<div>Region: ".concat(_this.displayRegion(primaryRegion), "</div>") : '';
            args.content = "<div><div><b>".concat(name, "</b></div><br/>").concat(continent ? "<div>Continent: ".concat(continent, "</div><br/>") : '').concat(primaryRegionLabel, "<br/><div>Demand: ").concat(Math.round(num).toLocaleString(), "</div></div>");
        };
        return _this;
    }
    // ADD: load Syncfusion world countries shape (with continent property)
    DemandOriginsPanel.prototype.loadWorldShape = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tryUrls, _i, tryUrls_1, url, res, json, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        tryUrls = [
                            'https://cdn.syncfusion.com/maps/map-data/world-map.json',
                            'https://cdn.syncfusion.com/production/maps/map-data/world-map.json'
                        ];
                        _i = 0, tryUrls_1 = tryUrls;
                        _b.label = 1;
                    case 1:
                        if (!(_i < tryUrls_1.length)) return [3 /*break*/, 8];
                        url = tryUrls_1[_i];
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 6, , 7]);
                        return [4 /*yield*/, fetch(url)];
                    case 3:
                        res = _b.sent();
                        if (!res.ok) return [3 /*break*/, 5];
                        return [4 /*yield*/, res.json()];
                    case 4:
                        json = _b.sent();
                        this.setState({ worldShape: json });
                        return [2 /*return*/];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        _a = _b.sent();
                        return [3 /*break*/, 7];
                    case 7:
                        _i++;
                        return [3 /*break*/, 1];
                    case 8:
                        this.setState({ worldShape: null });
                        return [2 /*return*/];
                }
            });
        });
    };
    DemandOriginsPanel.prototype.componentDidMount = function () {
        var _a, _b;
        (_b = (_a = this.props).onReady) === null || _b === void 0 ? void 0 : _b.call(_a, { refreshRegionChart: this.refreshRegionChart });
        this.loadWorldShape();
    };
    DemandOriginsPanel.prototype.componentDidUpdate = function (prevProps) {
        var _this = this;
        var _a;
        var filtersChanged = prevProps.year !== this.props.year ||
            prevProps.monthIndex !== this.props.monthIndex ||
            prevProps.region !== this.props.region ||
            !arrayEqual(prevProps.channels, this.props.channels) ||
            !arrayEqual(prevProps.categories, this.props.categories);
        if (filtersChanged) {
            if (this.state.demandRegion && this.props.region !== 'ALL') {
                var rk = isRegionKey(this.props.region) ? this.props.region : null;
                this.setState({ demandRegion: rk }, function () { var _a; return (_a = _this.RegionChartRef.current) === null || _a === void 0 ? void 0 : _a.refresh(); });
            }
            else if (this.state.demandRegion && this.props.region === 'ALL') {
                this.setState({ demandRegion: null }, function () { var _a; return (_a = _this.RegionChartRef.current) === null || _a === void 0 ? void 0 : _a.refresh(); });
            }
            else {
                (_a = this.RegionChartRef.current) === null || _a === void 0 ? void 0 : _a.refresh();
            }
        }
    };
    Object.defineProperty(DemandOriginsPanel.prototype, "monthIdxs", {
        get: function () {
            return this.props.monthIndex === ALL_MONTH
                ? Array.from({ length: 12 }, function (_, i) { return i; })
                : [Math.max(0, Math.min(11, this.props.monthIndex))];
        },
        enumerable: false,
        configurable: true
    });
    DemandOriginsPanel.prototype.getIncludedRegions = function () {
        var r = this.props.region;
        if (r === 'ALL')
            return ['AsiaPacific', 'Europe', 'NorthAmerica', 'LatinAmerica', 'MiddleEastAfrica'];
        return isRegionKey(r) ? [r] : ['AsiaPacific', 'Europe', 'NorthAmerica', 'LatinAmerica', 'MiddleEastAfrica'];
    };
    DemandOriginsPanel.prototype.getIncludedChannels = function () {
        var _a;
        var sel = asChannelKeys((_a = this.props.channels) !== null && _a !== void 0 ? _a : []);
        return sel.length ? sel : ALL_CHANNELS;
    };
    DemandOriginsPanel.prototype.categoryShareForMonth = function (year, monthIdx) {
        var _a, _b, _c, _d, _e;
        var products = buildYearProductSales(year);
        var totals = {};
        var totalUnits = 0;
        for (var _i = 0, products_3 = products; _i < products_3.length; _i++) {
            var p = products_3[_i];
            var u = (_b = (_a = p.monthly) === null || _a === void 0 ? void 0 : _a[monthIdx]) !== null && _b !== void 0 ? _b : 0;
            totalUnits += u;
            totals[p.category] = ((_c = totals[p.category]) !== null && _c !== void 0 ? _c : 0) + u;
        }
        var selectedCats = (_d = this.props.categories) !== null && _d !== void 0 ? _d : [];
        if (!selectedCats.length)
            return 1;
        var shareSum = 0;
        for (var _f = 0, selectedCats_1 = selectedCats; _f < selectedCats_1.length; _f++) {
            var c = selectedCats_1[_f];
            shareSum += totalUnits > 0 ? ((_e = totals[c]) !== null && _e !== void 0 ? _e : 0) / totalUnits : 0;
        }
        return shareSum || 0;
    };
    DemandOriginsPanel.prototype.ordersForRegionFiltered = function (region) {
        var _a;
        var y = this.props.year;
        var channels = this.getIncludedChannels();
        var monthsSel = this.monthIdxs;
        var total = 0;
        for (var _i = 0, monthsSel_1 = monthsSel; _i < monthsSel_1.length; _i++) {
            var i = monthsSel_1[_i];
            var rows = buildChannelsByRegionYear(y, region);
            var r = rows[i];
            if (!r)
                continue;
            var sum = 0;
            for (var _b = 0, channels_5 = channels; _b < channels_5.length; _b++) {
                var ch = channels_5[_b];
                sum += ((_a = r[ch]) !== null && _a !== void 0 ? _a : 0);
            }
            var catShare = this.categoryShareForMonth(y, i);
            total += sum * catShare;
        }
        return total;
    };
    DemandOriginsPanel.prototype.ordersByChannelForRegion = function (region) {
        var _this = this;
        var y = this.props.year;
        var monthsSel = this.monthIdxs;
        return monthsSel.map(function (i) {
            var _a, _b, _c, _d;
            var rows = buildChannelsByRegionYear(y, region);
            var r = rows[i];
            var catShare = _this.categoryShareForMonth(y, i);
            return {
                m: months[i],
                Paid: (((_a = r === null || r === void 0 ? void 0 : r.Paid) !== null && _a !== void 0 ? _a : 0) * catShare),
                Organic: (((_b = r === null || r === void 0 ? void 0 : r.Organic) !== null && _b !== void 0 ? _b : 0) * catShare),
                Email: (((_c = r === null || r === void 0 ? void 0 : r.Email) !== null && _c !== void 0 ? _c : 0) * catShare),
                Social: (((_d = r === null || r === void 0 ? void 0 : r.Social) !== null && _d !== void 0 ? _d : 0) * catShare)
            };
        });
    };
    DemandOriginsPanel.prototype.continentDemandRows = function () {
        var _this = this;
        var _a;
        var includedRegions = this.getIncludedRegions();
        var regionVals = {
            AsiaPacific: 0, Europe: 0, NorthAmerica: 0, LatinAmerica: 0, MiddleEastAfrica: 0
        };
        for (var _i = 0, includedRegions_1 = includedRegions; _i < includedRegions_1.length; _i++) {
            var r = includedRegions_1[_i];
            regionVals[r] = this.ordersForRegionFiltered(r);
        }
        var continents = ['Asia', 'Oceania', 'Europe', 'North America', 'South America', 'Africa'];
        var out = continents.map(function (c) { return ({ continent: c, value: 0, primaryRegion: null }); });
        var _loop_3 = function (c) {
            var primary = null;
            var primaryContribution = 0;
            var totalContribution = 0;
            Object.keys(regionVals).forEach(function (rk) {
                var _a, _b;
                var regionValue = regionVals[rk] || 0;
                var weight = (_b = (_a = _this.continentWeights[rk]) === null || _a === void 0 ? void 0 : _a[c]) !== null && _b !== void 0 ? _b : 0;
                var contrib = regionValue * weight;
                totalContribution += contrib;
                if (contrib > primaryContribution) {
                    primaryContribution = contrib;
                    primary = rk;
                }
            });
            var row = out.find(function (x) { return x.continent === c; });
            if (row) {
                row.value = primary ? ((_a = regionVals[primary]) !== null && _a !== void 0 ? _a : totalContribution) : totalContribution;
                row.primaryRegion = primary;
            }
        };
        for (var _b = 0, continents_1 = continents; _b < continents_1.length; _b++) {
            var c = continents_1[_b];
            _loop_3(c);
        }
        return out;
    };
    DemandOriginsPanel.prototype.mapRegionNameToKeyFromContinent = function (continent) {
        var rows = this.continentDemandRows();
        var row = rows.find(function (r) { return r.continent === continent; });
        if (row && row.primaryRegion)
            return row.primaryRegion;
        switch (continent) {
            case 'Europe': return 'Europe';
            case 'North America': return 'NorthAmerica';
            case 'South America': return 'LatinAmerica';
            case 'Oceania': return 'AsiaPacific';
            case 'Asia': return 'AsiaPacific';
            case 'Africa': return 'MiddleEastAfrica';
            default: return null;
        }
    };
    DemandOriginsPanel.prototype.productsByChannelForRegionYear = function (year, region, channel) {
        var products = buildYearProductSales(year);
        var denomAllOrdersForMonth = function (monthIdx) {
            var sum = 0;
            ['AsiaPacific', 'Europe', 'NorthAmerica', 'LatinAmerica', 'MiddleEastAfrica'].forEach(function (r) {
                var _a, _b, _c, _d;
                var row = buildChannelsByRegionYear(year, r)[monthIdx];
                if (!row)
                    return;
                sum += ((_a = row.Paid) !== null && _a !== void 0 ? _a : 0) + ((_b = row.Organic) !== null && _b !== void 0 ? _b : 0) + ((_c = row.Email) !== null && _c !== void 0 ? _c : 0) + ((_d = row.Social) !== null && _d !== void 0 ? _d : 0);
            });
            return sum || 1;
        };
        var regionChannelOrdersForMonth = function (monthIdx) {
            var _a;
            var row = buildChannelsByRegionYear(year, region)[monthIdx];
            return row ? ((_a = row[channel]) !== null && _a !== void 0 ? _a : 0) : 0;
        };
        var monthRows = [];
        var _loop_4 = function (i) {
            var denom = denomAllOrdersForMonth(i);
            var num = regionChannelOrdersForMonth(i);
            var share = num / denom;
            var perProduct = products.map(function (p) {
                var _a, _b;
                return ({
                    name: p.name,
                    units: Math.max(0, Math.round(((_b = (_a = p.monthly) === null || _a === void 0 ? void 0 : _a[i]) !== null && _b !== void 0 ? _b : 0) * share))
                });
            });
            var ytdByProduct = {};
            var _loop_5 = function (m) {
                var denomM = denomAllOrdersForMonth(m);
                var numM = regionChannelOrdersForMonth(m);
                var shareM = numM / denomM;
                products.forEach(function (p) {
                    var _a, _b, _c;
                    ytdByProduct[p.name] = ((_a = ytdByProduct[p.name]) !== null && _a !== void 0 ? _a : 0) + Math.max(0, Math.round(((_c = (_b = p.monthly) === null || _b === void 0 ? void 0 : _b[m]) !== null && _c !== void 0 ? _c : 0) * shareM));
                });
            };
            for (var m = 0; m < 12; m++) {
                _loop_5(m);
            }
            var top_1 = Object.entries(ytdByProduct)
                .sort(function (a, b) { return (b[1] - a[1]); })
                .slice(0, TOP_N_PRODUCTS)
                .map(function (x) { return x[0]; });
            var row = { m: months[i] };
            var other = 0;
            perProduct.forEach(function (pp) {
                var _a;
                if (top_1.includes(pp.name))
                    row[pp.name] = ((_a = row[pp.name]) !== null && _a !== void 0 ? _a : 0) + pp.units;
                else
                    other += pp.units;
            });
            if (other > 0)
                row['Other'] = other;
            monthRows.push(row);
        };
        for (var i = 0; i < 12; i++) {
            _loop_4(i);
        }
        return monthRows;
    };
    DemandOriginsPanel.prototype.getShapeProp = function (shapeData, key) {
        var _a, _b, _c;
        return (_c = (_a = shapeData === null || shapeData === void 0 ? void 0 : shapeData[key]) !== null && _a !== void 0 ? _a : (_b = shapeData === null || shapeData === void 0 ? void 0 : shapeData.properties) === null || _b === void 0 ? void 0 : _b[key]) !== null && _c !== void 0 ? _c : '';
    };
    DemandOriginsPanel.prototype.render = function () {
        var _a;
        var _b = this.props, monthIndex = _b.monthIndex, year = _b.year;
        var drilled = !!this.state.demandRegion;
        var drilledRegion = !!this.state.demandRegion;
        var drilledChannel = drilledRegion && !!this.state.channelDrill;
        var ds = this.continentDemandRows();
        var maxVal = Math.max.apply(Math, __spreadArray([0], ds.map(function (d) { return d.value; }), false));
        var colorStops = [
            { from: 1, to: Math.round(maxVal * 0.25), color: '#DBA39A' },
            { from: Math.round(maxVal * 0.25) + 1, to: Math.round(maxVal * 0.5), color: '#FE8F8F' },
            { from: Math.round(maxVal * 0.5) + 1, to: Math.round(maxVal * 0.75), color: '#FF5858' },
            { from: Math.round(maxVal * 0.75) + 1, to: Math.round(maxVal), color: '#850E35' }
        ];
        var regionFilterIsSpecific = this.props.region !== 'ALL';
        var filteredDs = ds;
        if (regionFilterIsSpecific) {
            var rk = isRegionKey(this.props.region) ? this.props.region : null;
            if (rk) {
                var allowedContinents_1 = Object.keys(this.continentWeights[rk]);
                filteredDs = ds.map(function (r) { return (__assign(__assign({}, r), { value: allowedContinents_1.includes(r.continent) ? r.value : 0 })); });
            }
        }
        var seriesData = [];
        var selChannels = this.getIncludedChannels();
        if (drilled && this.state.demandRegion) {
            seriesData = this.ordersByChannelForRegion(this.state.demandRegion);
        }
        var isSingleMonth = monthIndex !== ALL_MONTH;
        var chartType = 'StackingColumn';
        var stackedMax = (seriesData.length && selChannels.length)
            ? Math.max.apply(Math, seriesData.map(function (s) { return selChannels.reduce(function (acc, ch) { return acc + s[ch]; }, 0); })) : 100;
        var yAxisMax = Math.max(10, Math.ceil(stackedMax * 1.1));
        var productStackRows = [];
        var productKeys = [];
        if (drilledChannel && this.state.demandRegion && this.state.channelDrill) {
            productStackRows = this.productsByChannelForRegionYear(year, this.state.demandRegion, this.state.channelDrill);
            productKeys = Array.from(new Set(productStackRows.flatMap(function (r) { return Object.keys(r).filter(function (k) { return k !== 'm'; }); })));
        }
        var productColors = pickPalette(Palettes.salesMix, Math.max(3, productKeys.length));
        return (React.createElement("div", { style: { height: '100%', width: '100%', padding: 8, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 8 } },
            React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 8 } },
                drilledRegion && !drilledChannel && (React.createElement(React.Fragment, null,
                    React.createElement("button", { className: "e-btn e-outline", onClick: this.onDemandBack }, "Back"),
                    React.createElement("div", { style: { fontWeight: 600 } },
                        "Demand Origins \u2022 ",
                        this.displayRegion(this.state.demandRegion)))),
                drilledChannel && (React.createElement(React.Fragment, null,
                    React.createElement("button", { className: "e-btn e-outline", onClick: this.onChannelBack }, "Back"),
                    React.createElement("div", { style: { fontWeight: 600 } },
                        "Demand Products \u2022 ",
                        this.displayRegion(this.state.demandRegion),
                        " \u2022 ",
                        this.state.channelDrill)))),
            !drilled && (React.createElement(ej2_react_maps_1.MapsComponent, { id: "demandOriginsMap", ref: this.RegionMapRef, legendSettings: { visible: true, mode: 'Interactive', position: 'Left', orientation: 'Vertical' }, shapeSelected: this.onMapShapeSelected, tooltipRender: this.tooltipRender, load: Mapload },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_maps_1.MapsTooltip, ej2_react_maps_1.Legend] }),
                React.createElement(ej2_react_maps_1.LayersDirective, null,
                    React.createElement(ej2_react_maps_1.LayerDirective, { shapeData: ((_a = this.state.worldShape) !== null && _a !== void 0 ? _a : worldMap), shapePropertyPath: "continent", shapeDataPath: "continent", dataSource: filteredDs, shapeSettings: {
                            colorValuePath: 'value',
                            fill: '#E5E7EB',
                            border: { color: '#9CA3AF', width: 0.6 },
                            colorMapping: __spreadArray([
                                { from: 0, to: 0, color: '#E5E7EB' }
                            ], colorStops, true)
                        }, highlightSettings: { enable: true }, selectionSettings: { enable: true }, tooltipSettings: { visible: true, valuePath: 'continent' } })))),
            drilledRegion && !drilledChannel && (React.createElement(ej2_react_charts_1.ChartComponent, { ref: this.RegionChartRef, id: "demandOriginsDrillChart", primaryXAxis: { valueType: 'Category', title: isSingleMonth ? '' : 'Month', majorGridLines: { width: 0 }, majorTickLines: { width: 0 } }, primaryYAxis: { labelFormat: '{value}', lineStyle: { width: 0 }, majorGridLines: { width: 0 }, majorTickLines: { width: 0 }, minimum: 0, maximum: yAxisMax }, tooltip: { enable: true, shared: true }, legendSettings: { visible: true }, pointClick: this.onChannelPointClick, load: onChartLoad },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.StackingColumnSeries, ej2_react_charts_1.Legend, ej2_react_charts_1.Tooltip, ej2_react_charts_1.Category, ej2_react_charts_1.DataLabel] }),
                React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                    (selChannels.includes('Paid') ? ['Paid'] : []).map(function (k) { return (React.createElement(ej2_react_charts_1.SeriesDirective, { key: k, type: chartType, name: "Paid", xName: "m", yName: "Paid", dataSource: seriesData, columnWidth: 0.5, fill: ChannelColors.Paid, marker: { dataLabel: { visible: true } }, animation: { enable: false } })); }),
                    (selChannels.includes('Organic') ? ['Organic'] : []).map(function (k) { return (React.createElement(ej2_react_charts_1.SeriesDirective, { key: k, type: chartType, name: "Organic", xName: "m", yName: "Organic", dataSource: seriesData, columnWidth: 0.5, fill: ChannelColors.Organic, marker: { dataLabel: { visible: true } }, animation: { enable: false } })); }),
                    (selChannels.includes('Email') ? ['Email'] : []).map(function (k) { return (React.createElement(ej2_react_charts_1.SeriesDirective, { key: k, type: chartType, name: "Email", xName: "m", yName: "Email", dataSource: seriesData, columnWidth: 0.5, fill: ChannelColors.Email, marker: { dataLabel: { visible: true } }, animation: { enable: false } })); }),
                    (selChannels.includes('Social') ? ['Social'] : []).map(function (k) { return (React.createElement(ej2_react_charts_1.SeriesDirective, { key: k, type: chartType, name: "Social", xName: "m", yName: "Social", dataSource: seriesData, columnWidth: 0.5, fill: ChannelColors.Social, marker: { dataLabel: { visible: true } }, animation: { enable: false } })); }),
                    this.props.channels.length === 0 && (React.createElement(React.Fragment, null,
                        React.createElement(ej2_react_charts_1.SeriesDirective, { type: chartType, name: "Paid", xName: "m", yName: "Paid", dataSource: seriesData, columnWidth: 0.5, fill: ChannelColors.Paid, animation: { enable: false } }),
                        React.createElement(ej2_react_charts_1.SeriesDirective, { type: chartType, name: "Organic", xName: "m", yName: "Organic", dataSource: seriesData, columnWidth: 0.5, fill: ChannelColors.Organic, animation: { enable: false } }),
                        React.createElement(ej2_react_charts_1.SeriesDirective, { type: chartType, name: "Email", xName: "m", yName: "Email", dataSource: seriesData, columnWidth: 0.5, fill: ChannelColors.Email, animation: { enable: false } }),
                        React.createElement(ej2_react_charts_1.SeriesDirective, { type: chartType, name: "Social", xName: "m", yName: "Social", dataSource: seriesData, columnWidth: 0.5, fill: ChannelColors.Social, animation: { enable: false } })))))),
            drilledChannel && (React.createElement(ej2_react_charts_1.ChartComponent, { id: "demandProductsByChannel", primaryXAxis: { valueType: 'Category', majorGridLines: { width: 0 }, majorTickLines: { width: 0 } }, primaryYAxis: { labelFormat: '{value}', lineStyle: { width: 0 }, majorGridLines: { width: 0 }, majorTickLines: { width: 0 }, minimum: 0 }, tooltip: { enable: true, shared: true }, legendSettings: { visible: true, position: 'Bottom' }, load: onChartLoad },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.StackingColumnSeries, ej2_react_charts_1.Legend, ej2_react_charts_1.Tooltip, ej2_react_charts_1.Category, ej2_react_charts_1.DataLabel] }),
                React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null, productKeys.map(function (pName, i) { return (React.createElement(ej2_react_charts_1.SeriesDirective, { key: pName, type: "StackingColumn", name: pName, xName: "m", yName: pName, dataSource: productStackRows, columnWidth: 0.5, fill: productColors[i % productColors.length], marker: { dataLabel: { visible: true, font: { size: "9px", fontWeight: 'Bold' } } }, animation: { enable: false } })); }))))));
    };
    return DemandOriginsPanel;
}(React.Component));
var asChannelKeys = function (arr) {
    return (arr !== null && arr !== void 0 ? arr : []).filter(function (x) {
        return x === 'Paid' || x === 'Organic' || x === 'Email' || x === 'Social';
    });
};
var arrayEqual = function (a, b) {
    if (a === void 0) { a = []; }
    if (b === void 0) { b = []; }
    return a.length === b.length && a.every(function (v, i) { return v === b[i]; });
};
var safePct = function (actual, target) { return (target > 0 ? (actual / target) * 100 : 0); };
var isRegionKey = function (r) {
    return r === 'AsiaPacific' || r === 'Europe' || r === 'NorthAmerica' || r === 'LatinAmerica' || r === 'MiddleEastAfrica';
};
var ALL_CHANNELS = ['Paid', 'Organic', 'Email', 'Social'];
var PES_AD_CHANNELS = ['Paid', 'Email', 'Social'];
var BulletColors = {
    actual: '#554994',
    target: '#850E35',
    poor: '#FE8F8F',
    ok: '#F5C6A5',
    good: '#90AACB',
    subtleText: '#64748B',
    grid: '#90AACB'
};
function buildSparkSeries(year, getValueForMonth) {
    return Array.from({ length: 12 }, function (_, i) { return ({
        x: months[i],
        y: getValueForMonth(year, i)
    }); });
}
function getAdChannelsFromFilter(selected) {
    var sel = asChannelKeys(selected !== null && selected !== void 0 ? selected : []);
    var raw = selected !== null && selected !== void 0 ? selected : [];
    var hasAll = raw.includes('ALL');
    if (sel.length === 0 || hasAll)
        return PES_AD_CHANNELS;
    var inter = PES_AD_CHANNELS.filter(function (ch) { return sel.includes(ch); });
    if (inter.length > 0)
        return inter;
    return PES_AD_CHANNELS;
}
function calcTrend(current, previous) {
    var c = typeof current === 'number' ? current : null;
    var p = typeof previous === 'number' ? previous : null;
    if (c === null || p === null || p === 0) {
        return { delta: null, deltaPct: null, dir: 'flat' };
    }
    var delta = c - p;
    var deltaPct = (delta / Math.abs(p)) * 100;
    var dir = Math.abs(deltaPct) < 0.05 ? 'flat' : (delta > 0 ? 'up' : 'down');
    return { delta: delta, deltaPct: deltaPct, dir: dir };
}
// For each KPI, define whether "higher is better"
var KPI_POLARITY = {
    revenue: 'higher',
    orders: 'higher',
    aov: 'higher',
    conversion: 'higher',
    roas: 'higher',
    cac: 'lower',
    customerGrowth: 'higher'
};
function toneForTrend(metricKey, dir) {
    var polarity = KPI_POLARITY[metricKey];
    if (dir === 'flat')
        return 'neutral';
    // lower is better: CAC down is good, up is bad
    if (polarity === 'lower')
        return dir === 'down' ? 'good' : 'bad';
    // higher is better
    return dir === 'up' ? 'good' : 'bad';
}
function formatDeltaPct(deltaPct) {
    if (deltaPct === null || !isFinite(deltaPct))
        return '—';
    var sign = deltaPct > 0 ? '+' : '';
    return "".concat(sign).concat(deltaPct.toFixed(1), "%");
}
var commonSparkRefs = {};
function getCommonSparkRef(id) {
    if (!commonSparkRefs[id])
        commonSparkRefs[id] = React.createRef();
    return commonSparkRefs[id];
}
function refreshCommonSparks() {
    Object.values(commonSparkRefs).forEach(function (r) { var _a; return (_a = r.current) === null || _a === void 0 ? void 0 : _a.refresh(); });
}
exports.refreshCommonSparks = refreshCommonSparks;
function renderCommonKpiTile(opts) {
    var label = opts.label, valueText = opts.valueText, badge = opts.badge, sparkData = opts.sparkData, _a = opts.sparkColor, sparkColor = _a === void 0 ? '#10B981' : _a, _b = opts.sparkId, sparkId = _b === void 0 ? "kpi-spark-".concat(label.replace(/\s+/g, '-').toLowerCase()) : _b, _c = opts.hideHeader, hideHeader = _c === void 0 ? false : _c, _d = opts.isMonthSelected, isMonthSelected = _d === void 0 ? false : _d;
    // Badge styles (UI only; tone decided by caller)
    var badgeBase = {
        fontSize: 12,
        fontWeight: 700,
        color: "#6b7280",
        padding: '2px 8px',
        borderRadius: 999,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6
    };
    var badgeStyle = (badge === null || badge === void 0 ? void 0 : badge.tone) === 'good'
        ? __assign(__assign({}, badgeBase), { background: '#ECFDF5', color: '#065F46', borderColor: '#A7F3D0' }) : (badge === null || badge === void 0 ? void 0 : badge.tone) === 'bad'
        ? __assign(__assign({}, badgeBase), { background: '#FEF2F2', color: '#991B1B', borderColor: '#FECACA' }) : __assign(__assign({}, badgeBase), { background: '#F1F5F9', color: '#334155', borderColor: '#E2E8F0' });
    var showSpark = Array.isArray(sparkData) && sparkData.length > 0 && !isMonthSelected;
    return (React.createElement("div", { className: "e-card kpi-commerce-card" },
        hideHeader && (React.createElement("div", { className: "e-card-header" },
            React.createElement("div", { className: "e-card-header-caption" },
                React.createElement("div", { className: "e-card-header-title" }, label)))),
        React.createElement("div", { className: "e-card-content kpi-commerce-card-content" },
            showSpark ? (React.createElement("div", null,
                React.createElement("div", { className: "kpi-text", style: { display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '4px' } }, label),
                React.createElement("div", { style: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 } },
                    React.createElement("div", { className: "kpi-commerce-value" }, valueText),
                    badge && (React.createElement("span", { style: badgeStyle },
                        badge.icon ? React.createElement("span", { style: { marginRight: 4 } }, badge.icon) : null,
                        React.createElement("span", null, badge.text)))))) : (React.createElement(React.Fragment, null,
                React.createElement("div", { className: 'card-content-padding', style: { display: 'flex', alignItems: 'center', flexDirection: 'column', marginBottom: 8 } },
                    React.createElement("div", { className: "kpi-text" }, label),
                    React.createElement("div", { className: "kpi-commerce-value" }, valueText),
                    badge && (React.createElement("span", { style: badgeStyle },
                        badge.icon ? React.createElement("span", { style: { marginRight: 4 } }, badge.icon) : null,
                        React.createElement("span", null, badge.text)))))),
            showSpark && (React.createElement("div", null,
                React.createElement(ej2_react_charts_1.SparklineComponent, { id: sparkId, ref: getCommonSparkRef(sparkId), height: '40px', width: "100%", type: "Area", valueType: "Category", dataSource: sparkData, xName: "x", yName: "y", lineWidth: 2, fill: sparkColor, border: { color: sparkColor, width: 2 }, markerSettings: {
                        size: 5,
                        fill: '#FFFFFF',
                        border: { width: 2, color: sparkColor }
                    }, tooltipSettings: { visible: true, format: '${x}: ${y}' } },
                    React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.SparklineTooltip] })))))));
}
var OverviewClass = /** @class */ (function (_super) {
    __extends(OverviewClass, _super);
    function OverviewClass() {
        var _a, _b, _c, _d, _e;
        var _this = _super.apply(this, arguments) || this;
        // Refs
        _this.OverviewRef = React.createRef();
        _this.roasSummaryChartRef = React.createRef();
        _this.MarketShareChartRef = React.createRef();
        _this.RegionShareGridRef = React.createRef();
        _this.MarketShareGaugeRef = React.createRef();
        _this.yearOptions = [2023, 2024, 2025];
        _this.monthOptions = __spreadArray([{ text: 'All (Yearly)', value: ALL_MONTH }], months.map(function (m, idx) { return ({ text: m, value: idx }); }), true);
        _this.state = {
            year: (_a = _this.props.year) !== null && _a !== void 0 ? _a : 2025,
            monthIndex: (_b = _this.props.monthIndex) !== null && _b !== void 0 ? _b : ALL_MONTH,
            region: (_c = _this.props.region) !== null && _c !== void 0 ? _c : 'ALL',
            channels: (_d = _this.props.channels) !== null && _d !== void 0 ? _d : [],
            categories: (_e = _this.props.categories) !== null && _e !== void 0 ? _e : []
        };
        _this.OverviewDashboardCreated = function () {
            // Mimic created hook: refresh after mount
            setTimeout(function () {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                (_a = _this.OverviewRef.current) === null || _a === void 0 ? void 0 : _a.refresh();
                refreshCommonSparks();
                (_b = _this.roasSummaryChartRef.current) === null || _b === void 0 ? void 0 : _b.refresh();
                (_c = _this.targetActualMixPanelApi) === null || _c === void 0 ? void 0 : _c.refreshTargetActualBulletPanelChart();
                (_d = _this.salesMixPanelApi) === null || _d === void 0 ? void 0 : _d.refreshSalesMixGrowthChart();
                (_e = _this.MarketShareChartRef.current) === null || _e === void 0 ? void 0 : _e.refresh();
                (_f = _this.MarketShareGaugeRef.current) === null || _f === void 0 ? void 0 : _f.refresh();
                (_g = _this.demandOriginsApi) === null || _g === void 0 ? void 0 : _g.refreshRegionChart();
                (_h = _this.RegionShareGridRef.current) === null || _h === void 0 ? void 0 : _h.refresh();
            }, 500);
        };
        /* ===== KPI Calculations ===== */
        _this.currency = function (v) { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(v); };
        _this.currency2 = function (v) { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(v); };
        _this.integer = function (v) { return new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(v); };
        _this.pct = function (v) { return "".concat(v.toFixed(2), "%"); };
        // Local header tooltip helper for Grid headers (tooltip = header text)
        _this.headerWithTooltip = function (label, _tip) {
            return function () { return (React.createElement("div", { title: label, style: { display: 'inline-block', cursor: 'default' } }, label)); };
        };
        _this.onCurrencyTooltip = function (args) {
            var _a, _b, _c, _d, _e, _f;
            var y = Number((_b = (_a = args === null || args === void 0 ? void 0 : args.point) === null || _a === void 0 ? void 0 : _a.y) !== null && _b !== void 0 ? _b : 0);
            var x = String((_d = (_c = args === null || args === void 0 ? void 0 : args.point) === null || _c === void 0 ? void 0 : _c.x) !== null && _d !== void 0 ? _d : '');
            var seriesName = String((_f = (_e = args === null || args === void 0 ? void 0 : args.series) === null || _e === void 0 ? void 0 : _e.name) !== null && _f !== void 0 ? _f : '');
            if (seriesName === 'Market Share %') {
                var pct = isFinite(y) ? "".concat(y.toFixed(1), "%") : '0%';
                args.text = "".concat(x, ": ").concat(pct);
            }
            else {
                args.text = "".concat(x, ": ").concat(formatCurrency(y));
            }
        };
        _this.renderBulletChart = function () {
            return (React.createElement(TargetVsActualBulletPanel, { year: _this.props.year, monthIdxs: _this.selectedMonthIdxs, region: _this.props.region, channels: _this.props.channels, categories: _this.props.categories, onReady: function (api) { return (_this.targetActualMixPanelApi = api); } }));
        };
        _this.renderSalesMixGrowth = function () {
            return (React.createElement(SalesMixGrowthPanel, { year: _this.props.year, monthIndex: _this.props.monthIndex, region: _this.props.region, channels: _this.props.channels, categories: _this.props.categories, onReady: function (api) { return (_this.salesMixPanelApi = api); } }));
        };
        _this.renderDemandOrigins = function () {
            return (React.createElement(DemandOriginsPanel, { year: _this.props.year, monthIndex: _this.props.monthIndex, region: _this.props.region, channels: _this.props.channels, categories: _this.props.categories, onReady: function (api) { return (_this.demandOriginsApi = api); } }));
        };
        _this.onMarketTrendsAxisLabelRender = function (args) {
            var _a;
            if (args.axis && args.axis.name === 'percentAxis')
                return;
            if (((_a = args === null || args === void 0 ? void 0 : args.axis) === null || _a === void 0 ? void 0 : _a.valueType) !== 'Category') {
                args.text = formatCurrency(Number(args.value || 0));
            }
        };
        _this.renderMarketTrends = function () {
            var isSingleMonth = _this.props.monthIndex !== ALL_MONTH;
            var y = _this.props.year;
            if (isSingleMonth) {
                var share = _this.singleMonthGrowthVsPrev(y, _this.props.monthIndex).share;
                return (React.createElement("div", { style: { height: '100%', width: '100%', padding: 8, boxSizing: 'border-box' } },
                    React.createElement(ej2_react_circulargauge_1.CircularGaugeComponent, { id: 'marketShareGauge', ref: _this.MarketShareGaugeRef, tooltip: { enable: true, type: ['Pointer'] }, load: onGaugeLoad },
                        React.createElement(ej2_react_circulargauge_1.Inject, { services: [ej2_react_circulargauge_1.GaugeTooltip, ej2_react_circulargauge_1.Annotations] }),
                        React.createElement(ej2_react_circulargauge_1.AxesDirective, null,
                            React.createElement(ej2_react_circulargauge_1.AxisDirective, { minimum: 0, maximum: 100, majorTicks: { interval: 20, height: 0 }, minorTicks: { height: 0 }, labelStyle: { font: { size: '12px' }, position: 'Outside', offset: 10 } },
                                React.createElement(ej2_react_circulargauge_1.PointersDirective, null,
                                    React.createElement(ej2_react_circulargauge_1.PointerDirective, { value: +share.toFixed(2), radius: "75%", color: "#7107DC", pointerWidth: 10, cap: { radius: 7, color: '#111827' }, needleEndWidth: 4 })),
                                React.createElement(ej2_react_circulargauge_1.RangesDirective, null,
                                    React.createElement(ej2_react_circulargauge_1.RangeDirective, { start: 0, end: 40, color: "#FECACA", startWidth: 18, endWidth: 18, position: 'Outside' }),
                                    React.createElement(ej2_react_circulargauge_1.RangeDirective, { start: 40, end: 70, color: "#FDE68A", startWidth: 18, endWidth: 18, position: 'Outside' }),
                                    React.createElement(ej2_react_circulargauge_1.RangeDirective, { start: 70, end: 100, color: "#A7F3D0", startWidth: 18, endWidth: 18, position: 'Outside' })),
                                React.createElement(ej2_react_circulargauge_1.AnnotationsDirective, null,
                                    React.createElement(ej2_react_circulargauge_1.AnnotationDirective, { content: "<div style=\"text-align:center;\"><div style=\"font-weight:800;font-size:24px;\">".concat(share.toFixed(1), "%</div></div>"), angle: 0, radius: "-20%", zIndex: "1" })))))));
            }
            // Yearly: Multi-series Line/Area
            var seriesData = _this.marketTrendSeriesForYear(y);
            var percentAxis = {
                name: 'percentAxis',
                opposedPosition: true,
                minimum: 0,
                maximum: 100,
                interval: 20,
                majorGridLines: { width: 0 },
                majorTickLines: { width: 0 },
                labelFormat: '{value}%'
            };
            return (React.createElement("div", { style: { height: '100%', width: '100%', padding: 8, boxSizing: 'border-box' } },
                React.createElement("div", { style: { height: "calc(100% - 10px)", width: '100%' } },
                    React.createElement(ej2_react_charts_1.ChartComponent, { id: "marketTrendsChart", ref: _this.MarketShareChartRef, primaryXAxis: { valueType: 'Category', majorGridLines: { width: 0 }, majorTickLines: { width: 0 } }, primaryYAxis: { labelFormat: 'c0', lineStyle: { width: 0 }, majorTickLines: { width: 0 } }, axes: [percentAxis], chartArea: { border: { width: 0 } }, tooltip: { enable: true }, legendSettings: { visible: true }, axisLabelRender: _this.onMarketTrendsAxisLabelRender, tooltipRender: _this.onCurrencyTooltip, load: onChartLoad },
                        React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.SplineAreaSeries, ej2_react_charts_1.SplineSeries, ej2_react_charts_1.Legend, ej2_react_charts_1.Tooltip, ej2_react_charts_1.Category, ej2_react_charts_1.DataLabel] }),
                        React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                            React.createElement(ej2_react_charts_1.SeriesDirective, { type: "SplineArea", name: "Market Sales", xName: "m", yName: "market", dataSource: seriesData, opacity: 0.6, fill: "#F2B6D1", border: { width: 2, color: '#B9005B' }, marker: { visible: true, width: 6, height: 6 }, animation: { enable: false } }),
                            React.createElement(ej2_react_charts_1.SeriesDirective, { type: "Spline", name: "Company Sales", xName: "m", yName: "your", dataSource: seriesData, width: 3, marker: { visible: true, width: 7, height: 7 }, fill: "#554994", animation: { enable: false } }),
                            React.createElement(ej2_react_charts_1.SeriesDirective, { type: "Spline", name: "Market Share %", xName: "m", yName: "share", yAxisName: "percentAxis", dataSource: seriesData, width: 2, marker: { visible: true, shape: 'Diamond', width: 8, height: 8, fill: '#38BE09' }, fill: "#850E35", animation: { enable: false } }))))));
        };
        _this.renderRegionShareGrid = function () {
            var toolbarOptions = ['ExcelExport', 'PdfExport'];
            var _a = _this.buildRegionShareGridData2Level(), parentRows = _a.parentRows, channelRows = _a.channelRows, categoryRows = _a.categoryRows;
            var includedChannels = _this.getIncludedChannelsForRegionGrid();
            var growthTemplate = function (props) {
                var g = props.growthPct;
                if (g === null || !isFinite(g))
                    return React.createElement("span", null, "\u2014");
                var tone = g > 0 ? '#16A34A' : g < 0 ? '#DC2626' : '#64748B';
                var sign = g > 0 ? '+' : '';
                return React.createElement("span", { style: { color: tone, fontWeight: 700 } },
                    sign,
                    g.toFixed(1),
                    "%");
            };
            var totalRevenueTemplate = function (props) {
                var _a;
                var v = (_a = props === null || props === void 0 ? void 0 : props.totalRevenue) !== null && _a !== void 0 ? _a : 0;
                return React.createElement("span", { style: { fontWeight: 700 } }, _this.currency(Math.round(v)));
            };
            // Only show split columns for selected channels (or all if none selected)
            var channelSplitColumns = [
                includedChannels.includes('Organic') && (React.createElement(ej2_react_grids_1.ColumnDirective, { key: "online", field: "online", headerText: "Paid", headerTemplate: _this.headerWithTooltip('Paid', ''), width: "110", textAlign: "Right", format: "C0" })),
                includedChannels.includes('Paid') && (React.createElement(ej2_react_grids_1.ColumnDirective, { key: "ads", field: "ads", headerText: "Organic", headerTemplate: _this.headerWithTooltip('Organic', ''), width: "110", textAlign: "Right", format: "C0" })),
                includedChannels.includes('Email') && (React.createElement(ej2_react_grids_1.ColumnDirective, { key: "email", field: "email", headerText: "Email", headerTemplate: _this.headerWithTooltip('Email', ''), width: "110", textAlign: "Right", format: "C0" })),
                includedChannels.includes('Social') && (React.createElement(ej2_react_grids_1.ColumnDirective, { key: "social", field: "social", headerText: "Social", headerTemplate: _this.headerWithTooltip('Social', ''), width: "110", textAlign: "Right", format: "C0" })),
            ].filter(Boolean);
            var toolbarClick = function (args) {
                var _a, _b;
                switch (args.item.id) {
                    case 'regionShareGrid_pdfexport':
                        (_a = _this.RegionShareGridRef.current) === null || _a === void 0 ? void 0 : _a.pdfExport({ hierarchyExportMode: 'All' });
                        break;
                    case 'regionShareGrid_excelexport':
                        (_b = _this.RegionShareGridRef.current) === null || _b === void 0 ? void 0 : _b.excelExport({ hierarchyExportMode: 'All' });
                        break;
                }
            };
            // --- Grandchild grid: Category rows under a Channel row ---
            var categoryChildGridModel = {
                dataSource: categoryRows,
                queryString: 'rcKey',
                gridLines: 'Horizontal',
                columns: [
                    { field: 'category', headerText: 'Product Category', headerTemplate: _this.headerWithTooltip('Product Category', ''), textAlign: 'Left', width: 220 },
                    { field: 'revenue', headerText: 'Revenue', headerTemplate: _this.headerWithTooltip('Revenue', ''), textAlign: 'Right', width: 140, format: 'C0' },
                    { field: 'sharePct', headerText: 'Share %', headerTemplate: _this.headerWithTooltip('Share %', ''), textAlign: 'Right', width: 120, format: 'N1' },
                ]
            };
            // --- Child grid: Channel rows under a Region row ---
            var channelChildGridModel = {
                dataSource: channelRows,
                queryString: 'region',
                gridLines: 'Horizontal',
                childGrid: categoryChildGridModel,
                columns: [
                    { field: 'channel', headerText: 'Channel', headerTemplate: _this.headerWithTooltip('Channel', ''), textAlign: 'Left', width: 160 },
                    { field: 'revenue', headerText: 'Revenue', headerTemplate: _this.headerWithTooltip('Revenue', ''), textAlign: 'Right', width: 140, format: 'C0' },
                    { field: 'sharePct', headerText: 'Share %', headerTemplate: _this.headerWithTooltip('Share %', ''), textAlign: 'Right', width: 120, format: 'N1' },
                ]
            };
            return (React.createElement("div", { style: { height: '100%', width: '100%', padding: 8, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', overflow: 'hidden' } },
                React.createElement("div", { style: { height: '100%', width: '100%', minHeight: 0 } },
                    React.createElement(ej2_react_grids_1.GridComponent, { id: "regionShareGrid", ref: _this.RegionShareGridRef, dataSource: parentRows, enableHover: true, allowPaging: false, allowSorting: true, allowResizing: true, allowExcelExport: true, allowPdfExport: true, toolbar: toolbarOptions, toolbarClick: toolbarClick, childGrid: channelChildGridModel, height: "100%", width: "100%" },
                        React.createElement(ej2_react_grids_1.ColumnsDirective, null,
                            React.createElement(ej2_react_grids_1.ColumnDirective, { field: "region", headerText: "Region", headerTemplate: _this.headerWithTooltip('Region', ''), width: "140", textAlign: "Left", isPrimaryKey: true }),
                            channelSplitColumns,
                            React.createElement(ej2_react_grids_1.ColumnDirective, { field: "totalRevenue", headerText: "Total Revenue", headerTemplate: _this.headerWithTooltip('Total Revenue', ''), width: "130", textAlign: "Right", template: totalRevenueTemplate }),
                            React.createElement(ej2_react_grids_1.ColumnDirective, { field: "growthPct", headerText: "Growth %", headerTemplate: _this.headerWithTooltip('Growth %', ''), width: "100", textAlign: "Right", template: growthTemplate })),
                        React.createElement(ej2_react_grids_1.Inject, { services: [ej2_react_grids_1.DetailRow, ej2_react_grids_1.ExcelExport, ej2_react_grids_1.PdfExport, ej2_react_grids_1.Toolbar, ej2_react_grids_1.Sort] })))));
        };
        /* ===== KPI Tiles ===== */
        _this.totalRevenueContent = function () {
            var y = _this.props.year;
            var idxs = _this.selectedMonthIdxs;
            var current = Math.round(_this.totalRevenueFilteredForRange(y, idxs));
            var previous = (y > 2022) ? Math.round(_this.totalRevenueFilteredForRange(_this.prevYear, idxs)) : null;
            var deltaPct = (previous && previous > 0) ? ((current - previous) / previous) * 100 : null;
            var tone = deltaPct == null ? 'neutral' : deltaPct > 0 ? 'good' : 'bad';
            var badgeText = deltaPct == null ? '—' : "".concat(deltaPct > 0 ? '+' : '').concat(deltaPct.toFixed(1), "% vs ").concat(_this.prevYear);
            var spark = buildSparkSeries(y, function (yy, mm) { return Math.round(_this.revenueFilteredForMonth(yy, mm)); });
            return renderCommonKpiTile({
                hideHeader: false,
                label: 'Total Revenue',
                valueText: cardformatCurrency(current),
                badge: { text: badgeText, tone: tone },
                sparkData: spark,
                sparkColor: '#850E35',
                sparkId: "kpi-total-rev-".concat(y, "-").concat(idxs.join('_')),
                isMonthSelected: _this.props.monthIndex !== ALL_MONTH
            });
        };
        _this.totalOrdersContent = function () {
            var y = _this.props.year;
            var idxs = _this.selectedMonthIdxs;
            var current = _this.totalOrdersFilteredForRange(y, idxs);
            var previous = (y > 2022) ? _this.totalOrdersFilteredForRange(_this.prevYear, idxs) : null;
            var deltaPct = (previous && previous > 0) ? ((current - previous) / previous) * 100 : null;
            var tone = deltaPct == null ? 'neutral' : deltaPct > 0 ? 'good' : 'bad';
            var badgeText = deltaPct == null ? '—' : "".concat(deltaPct > 0 ? '+' : '').concat(deltaPct.toFixed(1), "% vs ").concat(_this.prevYear);
            return renderCommonKpiTile({
                hideHeader: false,
                label: 'Total Orders',
                valueText: _this.integer(current),
                badge: { text: badgeText, tone: tone },
                isMonthSelected: _this.props.monthIndex !== ALL_MONTH
            });
        };
        _this.aovContent = function () {
            var y = _this.props.year;
            var idxs = _this.selectedMonthIdxs;
            var rev = _this.totalRevenueFilteredForRange(y, idxs);
            var ord = _this.totalOrdersFilteredForRange(y, idxs);
            var current = ord > 0 ? (rev / ord) : 0;
            var py = y - 1;
            var previous = null;
            if (py >= 2022) {
                var revP = _this.totalRevenueFilteredForRange(py, idxs);
                var ordP = _this.totalOrdersFilteredForRange(py, idxs);
                previous = (ordP > 0) ? (revP / ordP) : null;
            }
            var deltaPct = (previous && previous > 0) ? ((current - previous) / previous) * 100 : null;
            var tone = deltaPct == null ? 'neutral' : deltaPct > 0 ? 'good' : 'bad';
            var badgeText = deltaPct == null ? '—' : "".concat(deltaPct > 0 ? '+' : '').concat(deltaPct.toFixed(1), "% vs ").concat(_this.prevYear);
            return renderCommonKpiTile({
                hideHeader: false,
                label: 'Average Order Value',
                valueText: _this.currency2(current),
                badge: { text: badgeText, tone: tone },
                isMonthSelected: _this.props.monthIndex !== ALL_MONTH
            });
        };
        _this.convRateContent = function () {
            var y = _this.props.year;
            var idxs = _this.selectedMonthIdxs;
            var current = _this.conversionRateForRange(y, idxs);
            var py = y - 1;
            var previous = (py >= 2022) ? _this.conversionRateForRange(py, idxs) : null;
            var deltaPct = (previous && previous > 0) ? ((current - previous) / previous) * 100 : null;
            var tone = deltaPct == null ? 'neutral' : deltaPct > 0 ? 'good' : 'bad';
            var badgeText = deltaPct == null ? '—' : "".concat(deltaPct > 0 ? '+' : '').concat(deltaPct.toFixed(1), "% vs ").concat(_this.prevYear);
            return renderCommonKpiTile({
                hideHeader: false,
                label: 'Conversion Rate',
                valueText: _this.pct(current),
                badge: { text: badgeText, tone: tone },
                isMonthSelected: _this.props.monthIndex !== ALL_MONTH
            });
        };
        _this.roasContent = function () {
            var y = _this.props.year;
            var idxs = _this.selectedMonthIdxs;
            // Spend and revenue attributed to advertising (filtered, channels = selected or default to Paid)
            var spend = _this.totalAdSpendFilteredForRange(y, idxs);
            var adRev = _this.totalAdAttributedRevenueFilteredForRange(y, idxs);
            var current = spend > 0 ? (adRev / spend) : null;
            var spendP = _this.totalAdSpendFilteredForRange(_this.prevYear, idxs);
            var adRevP = _this.totalAdAttributedRevenueFilteredForRange(_this.prevYear, idxs);
            var previous = spendP > 0 ? (adRevP / spendP) : null;
            // Build delta badge content (vs previous year or vs previous year's same month)
            var t = calcTrend(current, previous);
            var tone = toneForTrend('roas', t.dir);
            var arrow = t.dir === 'up' ? '▲' : t.dir === 'down' ? '▼' : '•';
            var compPeriod = (_this.props.monthIndex === ALL_MONTH)
                ? "".concat(_this.prevYear)
                : "".concat(months[Math.max(0, Math.min(11, _this.props.monthIndex))], " ").concat(_this.prevYear);
            var badgeText = "".concat(formatDeltaPct(t.deltaPct), "  vs ").concat(compPeriod);
            var badgeStyleBase = {
                fontSize: 11,
                fontWeight: 700,
                padding: '2px 8px',
                borderRadius: 999,
                background: '#F1F5F9',
                color: '#111827'
            };
            var badgeStyle = tone === 'good'
                ? __assign(__assign({}, badgeStyleBase), { background: '#ECFDF5', color: '#065F46', borderColor: '#A7F3D0' }) : tone === 'bad'
                ? __assign(__assign({}, badgeStyleBase), { background: '#FEF2F2', color: '#991B1B', borderColor: '#FECACA' }) : __assign(__assign({}, badgeStyleBase), { background: '#F1F5F9', color: '#334155', borderColor: '#E2E8F0' });
            // Two-section layout with vertical separator — improved vertical alignment
            return _this.renderKpiTile({
                metricKey: 'roas',
                label: 'Total ROAS',
                description: "Total ROAS (Return on Ad Spend) shows how much revenue was generated for every currency unit spent on advertising. It is calculated using only Paid, Email, and Social channels, regardless of the selected Channel filter.",
                valueText: '',
                current: current,
                previous: previous,
                hideMainValue: true,
                hideHeader: true,
                showTrendBadge: false,
                extraContent: (React.createElement("div", { style: { display: 'grid', gridTemplateColumns: '1fr 1px 0.9fr', gap: 12, alignItems: 'center' } },
                    React.createElement("div", { style: { paddingRight: 8, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8 } },
                        React.createElement("div", null,
                            React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between', marginBottom: 8 } },
                                React.createElement("span", { className: 'ecommerce-meta', style: { fontSize: 12, fontWeight: 600 } }, "Ad Spend"),
                                React.createElement("span", { className: 'revenue-font', style: { fontSize: 14, fontWeight: 600 } }, cardformatCurrency(spend))),
                            React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between' } },
                                React.createElement("span", { className: 'ecommerce-meta', style: { fontSize: 12, fontWeight: 600 } }, "Attributed Revenue"),
                                React.createElement("span", { className: 'revenue-font', style: { fontSize: 14, fontWeight: 600 } }, cardformatCurrency(adRev))))),
                    React.createElement("div", { style: { width: 1, background: '#E2E8F0', height: '100%', alignSelf: 'stretch' } }),
                    React.createElement("div", { style: { paddingLeft: 8, display: 'grid', justifyContent: 'center', alignItems: 'center', gap: 8 } },
                        React.createElement("div", { style: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, flexDirection: "column" } },
                            React.createElement("div", { className: 'kpi-commerce-value' }, current === null ? 'N/A' : "".concat(current.toFixed(2), "x")),
                            React.createElement("span", { style: badgeStyle },
                                React.createElement("span", { style: { marginRight: 6 } }, arrow),
                                React.createElement("span", null, badgeText))))))
            });
        };
        _this.customerGrowthContent = function () {
            var y = _this.props.year;
            var idxs = _this.selectedMonthIdxs;
            var py = y - 1;
            var currentOrders = _this.totalOrdersFilteredForRange(y, idxs);
            var prevOrders = (py >= 2022) ? _this.totalOrdersFilteredForRange(py, idxs) : 0;
            var currentGrowthPct = (py >= 2022 && prevOrders > 0) ? ((currentOrders - prevOrders) / prevOrders) * 100 : 0;
            var tone = currentGrowthPct == null ? 'neutral' : currentGrowthPct > 0 ? 'good' : currentGrowthPct < 0 ? 'bad' : 'neutral';
            var sign = currentGrowthPct >= 0 ? '+' : '';
            var badgeText = "".concat(sign).concat(currentGrowthPct.toFixed(1), "% vs ").concat(_this.prevYear);
            return renderCommonKpiTile({
                hideHeader: false,
                label: 'Customer Growth %',
                valueText: "".concat(sign).concat(currentGrowthPct.toFixed(1), "%"),
                badge: { text: badgeText, tone: tone },
                isMonthSelected: _this.props.monthIndex !== ALL_MONTH
            });
        };
        return _this;
    }
    OverviewClass.prototype.componentDidMount = function () {
        window.addEventListener('sidebar-toggled', this.OverviewDashboardCreated);
        window.addEventListener('resize', this.OverviewDashboardCreated);
    };
    OverviewClass.prototype.componentWillUnmount = function () {
        window.removeEventListener('sidebar-toggled', this.OverviewDashboardCreated);
        window.removeEventListener('resize', this.OverviewDashboardCreated);
    };
    OverviewClass.prototype.componentDidUpdate = function (prevProps, prevState) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var propsChanged = prevProps.year !== this.props.year ||
            prevProps.monthIndex !== this.props.monthIndex ||
            prevProps.region !== this.props.region ||
            !arrayEqual(prevProps.channels, this.props.channels) ||
            !arrayEqual(prevProps.categories, this.props.categories);
        var stateOutOfSync = this.state.year !== this.props.year ||
            this.state.monthIndex !== this.props.monthIndex ||
            this.state.region !== this.props.region ||
            !arrayEqual(this.state.channels, this.props.channels) ||
            !arrayEqual(this.state.categories, this.props.categories);
        if (propsChanged && stateOutOfSync) {
            this.setState({
                year: this.props.year,
                monthIndex: this.props.monthIndex,
                region: this.props.region,
                channels: (_a = this.props.channels) !== null && _a !== void 0 ? _a : [],
                categories: (_b = this.props.categories) !== null && _b !== void 0 ? _b : []
            });
            return;
        }
        var yearChanged = prevState.year !== this.state.year;
        var monthChanged = prevState.monthIndex !== this.state.monthIndex;
        var regionChanged = prevState.region !== this.state.region;
        var channelsChanged = !arrayEqual(prevState.channels, this.state.channels);
        var categoriesChanged = !arrayEqual(prevState.categories, this.state.categories);
        if (yearChanged || monthChanged) {
            (_c = this.MarketShareChartRef.current) === null || _c === void 0 ? void 0 : _c.refresh();
            (_d = this.RegionShareGridRef.current) === null || _d === void 0 ? void 0 : _d.refresh();
        }
        if (yearChanged || monthChanged || regionChanged || channelsChanged || categoriesChanged) {
            (_e = this.salesMixPanelApi) === null || _e === void 0 ? void 0 : _e.refreshSalesMixGrowthChart();
            (_f = this.MarketShareChartRef.current) === null || _f === void 0 ? void 0 : _f.refresh();
            (_g = this.MarketShareGaugeRef.current) === null || _g === void 0 ? void 0 : _g.refresh();
            (_h = this.demandOriginsApi) === null || _h === void 0 ? void 0 : _h.refreshRegionChart();
            (_j = this.RegionShareGridRef.current) === null || _j === void 0 ? void 0 : _j.refresh();
        }
    };
    Object.defineProperty(OverviewClass.prototype, "isAllSelected", {
        get: function () { return this.props.monthIndex === ALL_MONTH; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OverviewClass.prototype, "bulletData", {
        get: function () {
            var _a;
            var rows = (_a = monthlyRevenueByYear[this.props.year]) !== null && _a !== void 0 ? _a : [];
            return rows.map(function (d) { return ({ category: d.m, value: d.actual, target: d.target }); });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OverviewClass.prototype, "bulletDataForView", {
        get: function () {
            if (this.isAllSelected)
                return this.bulletData;
            var monthName = months[this.props.monthIndex];
            return this.bulletData.filter(function (d) { return d.category === monthName; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OverviewClass.prototype, "selectedMonthIdxs", {
        get: function () {
            if (this.props.monthIndex === ALL_MONTH) {
                return Array.from({ length: 12 }, function (_, i) { return i; });
            }
            return [Math.max(0, Math.min(11, this.props.monthIndex))];
        },
        enumerable: false,
        configurable: true
    });
    OverviewClass.prototype.getIncludedRegions = function () {
        var r = this.props.region;
        if (r === 'ALL')
            return ['AsiaPacific', 'Europe', 'NorthAmerica', 'LatinAmerica', 'MiddleEastAfrica'];
        return isRegionKey(r) ? [r] : ['AsiaPacific', 'Europe', 'NorthAmerica', 'LatinAmerica', 'MiddleEastAfrica'];
    };
    OverviewClass.prototype.computeCategoryShareForMonth = function (year, monthIdx) {
        var _a, _b, _c, _d, _e;
        var products = buildYearProductSales(year); // full year, scaled to totals already
        var totals = {};
        var totalUnits = 0;
        for (var _i = 0, products_4 = products; _i < products_4.length; _i++) {
            var p = products_4[_i];
            var units = (_b = (_a = p.monthly) === null || _a === void 0 ? void 0 : _a[monthIdx]) !== null && _b !== void 0 ? _b : 0;
            totalUnits += units;
            totals[p.category] = ((_c = totals[p.category]) !== null && _c !== void 0 ? _c : 0) + units;
        }
        var selectedCats = (_d = this.props.categories) !== null && _d !== void 0 ? _d : [];
        if (!selectedCats.length)
            return 1;
        var shareSum = 0;
        for (var _f = 0, selectedCats_2 = selectedCats; _f < selectedCats_2.length; _f++) {
            var c = selectedCats_2[_f];
            shareSum += totalUnits > 0 ? ((_e = totals[c]) !== null && _e !== void 0 ? _e : 0) / totalUnits : 0;
        }
        return shareSum;
    };
    OverviewClass.prototype.computeIncludedOrdersForMonth = function (year, monthIdx) {
        var _a, _b;
        var regions = this.getIncludedRegions();
        var selectedChannels = asChannelKeys((_a = this.props.channels) !== null && _a !== void 0 ? _a : []);
        var channels = selectedChannels.length ? selectedChannels : ALL_CHANNELS;
        var orders = 0;
        for (var _i = 0, regions_3 = regions; _i < regions_3.length; _i++) {
            var region = regions_3[_i];
            var chRows = buildChannelsByRegionYear(year, region);
            var row = chRows[monthIdx];
            if (!row)
                continue;
            for (var _c = 0, channels_6 = channels; _c < channels_6.length; _c++) {
                var ch = channels_6[_c];
                orders += ((_b = row[ch]) !== null && _b !== void 0 ? _b : 0);
            }
        }
        var share = this.computeCategoryShareForMonth(year, monthIdx);
        return orders * share;
    };
    OverviewClass.prototype.computeRevenueSliceForMonth = function (year, monthIdx) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var master = ((_a = monthlyRevenueByYear[year]) !== null && _a !== void 0 ? _a : [])[monthIdx];
        var masterActual = (_b = master === null || master === void 0 ? void 0 : master.actual) !== null && _b !== void 0 ? _b : 0;
        var allRegions = ['AsiaPacific', 'Europe', 'NorthAmerica', 'LatinAmerica', 'MiddleEastAfrica'];
        var denomOrders = 0;
        for (var _i = 0, allRegions_2 = allRegions; _i < allRegions_2.length; _i++) {
            var region = allRegions_2[_i];
            var chRows = buildChannelsByRegionYear(year, region);
            var row = chRows[monthIdx];
            if (!row)
                continue;
            denomOrders += ((_c = row.Paid) !== null && _c !== void 0 ? _c : 0) + ((_d = row.Organic) !== null && _d !== void 0 ? _d : 0) + ((_e = row.Email) !== null && _e !== void 0 ? _e : 0) + ((_f = row.Social) !== null && _f !== void 0 ? _f : 0);
        }
        var regions = this.getIncludedRegions();
        var selectedChannels = asChannelKeys((_g = this.props.channels) !== null && _g !== void 0 ? _g : []);
        var channels = selectedChannels.length ? selectedChannels : ALL_CHANNELS;
        var includedOrdersNoCat = 0;
        for (var _j = 0, regions_4 = regions; _j < regions_4.length; _j++) {
            var region = regions_4[_j];
            var chRows = buildChannelsByRegionYear(year, region);
            var row = chRows[monthIdx];
            if (!row)
                continue;
            for (var _k = 0, channels_7 = channels; _k < channels_7.length; _k++) {
                var ch = channels_7[_k];
                includedOrdersNoCat += ((_h = row[ch]) !== null && _h !== void 0 ? _h : 0);
            }
        }
        var regionChannelFactor = denomOrders > 0 ? includedOrdersNoCat / denomOrders : 0;
        var share = this.computeCategoryShareForMonth(year, monthIdx);
        var sliceFactor = regionChannelFactor * share;
        return masterActual * sliceFactor;
    };
    OverviewClass.prototype.totalRevenueFilteredForRange = function (y, monthIdxs) {
        var _this = this;
        return monthIdxs.reduce(function (s, idx) { return s + _this.computeRevenueSliceForMonth(y, idx); }, 0);
    };
    OverviewClass.prototype.totalOrdersFilteredForRange = function (y, monthIdxs) {
        var _this = this;
        return monthIdxs.reduce(function (s, idx) { return s + _this.computeIncludedOrdersForMonth(y, idx); }, 0);
    };
    OverviewClass.prototype.revenueFilteredForMonth = function (y, monthIdx) {
        return this.computeRevenueSliceForMonth(y, monthIdx);
    };
    OverviewClass.prototype.conversionRateForRange = function (y, monthIdxs) {
        var _a, _b, _c, _d;
        var crRows = buildChannelCRByYear(y);
        var regions = this.getIncludedRegions();
        var selectedChannels = asChannelKeys((_a = this.props.channels) !== null && _a !== void 0 ? _a : []);
        var channels = selectedChannels.length ? selectedChannels : ALL_CHANNELS;
        var totalOrdersSel = 0;
        var totalVisitsSel = 0;
        for (var _i = 0, monthIdxs_1 = monthIdxs; _i < monthIdxs_1.length; _i++) {
            var i = monthIdxs_1[_i];
            var catShare = this.computeCategoryShareForMonth(y, i);
            // accumulate orders and visits for selected slice
            for (var _e = 0, regions_5 = regions; _e < regions_5.length; _e++) {
                var region = regions_5[_e];
                var row = buildChannelsByRegionYear(y, region)[i];
                if (!row)
                    continue;
                for (var _f = 0, channels_8 = channels; _f < channels_8.length; _f++) {
                    var ch = channels_8[_f];
                    var chOrders = (_b = row[ch]) !== null && _b !== void 0 ? _b : 0;
                    var ordersSlice = chOrders * catShare; // category slice
                    totalOrdersSel += ordersSlice;
                    var cr = (_d = (_c = crRows[i]) === null || _c === void 0 ? void 0 : _c[ch]) !== null && _d !== void 0 ? _d : 0;
                    if (cr > 0) {
                        totalVisitsSel += ordersSlice / (cr / 100);
                    }
                }
            }
        }
        return totalVisitsSel <= 0 ? 0 : (totalOrdersSel / totalVisitsSel) * 100;
    };
    /** Market revenue filtered by Region, Channel, and Category for a month. */
    OverviewClass.prototype.filteredMarketForMonth = function (year, monthIdx) {
        var _a, _b, _c;
        var base = ((_b = (_a = buildMonthlyMarketByYear(year)[monthIdx]) === null || _a === void 0 ? void 0 : _a.market) !== null && _b !== void 0 ? _b : 0);
        var regions = this.getIncludedRegions();
        var selectedChannels = asChannelKeys((_c = this.props.channels) !== null && _c !== void 0 ? _c : []);
        var channelSelected = selectedChannels.length > 0;
        // Region+Channel allocation using published market splits
        var regionChannelFactor = regions.reduce(function (sum, r) {
            var _a;
            var rSplit = (_a = regionMarketSplit[r]) !== null && _a !== void 0 ? _a : 0;
            var chFactor = channelSelected
                ? selectedChannels.reduce(function (s, ch) { var _a; return s + ((_a = marketChannelSplitByRegion[r][ch]) !== null && _a !== void 0 ? _a : 0); }, 0)
                : 1;
            return sum + (rSplit * chFactor);
        }, 0);
        var catShare = this.computeCategoryShareForMonth(year, monthIdx);
        return base * regionChannelFactor * catShare;
    };
    /** Company revenue (already filter-aware) for a month. */
    OverviewClass.prototype.companyRevenueFilteredForMonth = function (year, monthIdx) {
        return this.computeRevenueSliceForMonth(year, monthIdx);
    };
    /** Build monthly series for the selected year (All months). */
    OverviewClass.prototype.marketTrendSeriesForYear = function (year) {
        var _this = this;
        return months.map(function (m, i) {
            var your = _this.companyRevenueFilteredForMonth(year, i);
            var market = _this.filteredMarketForMonth(year, i);
            var share = market > 0 ? (your / market) * 100 : 0;
            return { m: m, your: your, market: market, share: share };
        });
    };
    /** Single-month growth comparison vs previous year. */
    OverviewClass.prototype.singleMonthGrowthVsPrev = function (year, monthIdx) {
        var prevY = Math.max(2022, year - 1);
        var yourNow = this.companyRevenueFilteredForMonth(year, monthIdx);
        var yourPrev = this.companyRevenueFilteredForMonth(prevY, monthIdx);
        var mkNow = this.filteredMarketForMonth(year, monthIdx);
        var mkPrev = this.filteredMarketForMonth(prevY, monthIdx);
        var yourGrowth = (yourPrev > 0) ? ((yourNow - yourPrev) / yourPrev) * 100 : 0;
        var marketGrowth = (mkPrev > 0) ? ((mkNow - mkPrev) / mkPrev) * 100 : 0;
        var share = mkNow > 0 ? (yourNow / mkNow) * 100 : 0;
        return { share: share, yourGrowth: yourGrowth, marketGrowth: marketGrowth };
    };
    OverviewClass.prototype.getAdChannels = function () {
        return getAdChannelsFromFilter(this.props.channels);
    };
    /** Spend for a month summed only for provided channels. */
    OverviewClass.prototype.spendForMonthByChannels = function (year, monthIdx, channels) {
        var _a;
        var rows = (_a = spendByYear[year]) !== null && _a !== void 0 ? _a : [];
        var r = rows[monthIdx];
        if (!r)
            return 0;
        return channels.reduce(function (sum, ch) { var _a; return sum + ((_a = r[ch]) !== null && _a !== void 0 ? _a : 0); }, 0);
    };
    /** Denominator orders for provided channels across ALL regions. */
    OverviewClass.prototype.denomOrdersForChannels = function (year, monthIdx, channels) {
        var _a;
        var allRegions = ['AsiaPacific', 'Europe', 'NorthAmerica', 'LatinAmerica', 'MiddleEastAfrica'];
        var denom = 0;
        for (var _i = 0, allRegions_3 = allRegions; _i < allRegions_3.length; _i++) {
            var region = allRegions_3[_i];
            var chRows = buildChannelsByRegionYear(year, region);
            var row = chRows[monthIdx];
            if (!row)
                continue;
            for (var _b = 0, channels_9 = channels; _b < channels_9.length; _b++) {
                var ch = channels_9[_b];
                denom += ((_a = row[ch]) !== null && _a !== void 0 ? _a : 0);
            }
        }
        return denom;
    };
    OverviewClass.prototype.computeAdSpendSliceForMonth = function (year, monthIdx) {
        var _a;
        var adCh = this.getAdChannels();
        var monthSpend = this.spendForMonthByChannels(year, monthIdx, adCh);
        // numerator: selected regions + ad channels (orders, no category)
        var regions = this.getIncludedRegions();
        var includedOrdersNoCat = 0;
        for (var _i = 0, regions_6 = regions; _i < regions_6.length; _i++) {
            var region = regions_6[_i];
            var chRows = buildChannelsByRegionYear(year, region);
            var row = chRows[monthIdx];
            if (!row)
                continue;
            for (var _b = 0, adCh_1 = adCh; _b < adCh_1.length; _b++) {
                var ch = adCh_1[_b];
                includedOrdersNoCat += ((_a = row[ch]) !== null && _a !== void 0 ? _a : 0);
            }
        }
        // denominator: all regions + ad channels
        var denomOrders = this.denomOrdersForChannels(year, monthIdx, adCh);
        var regionChannelFactor = denomOrders > 0 ? (includedOrdersNoCat / denomOrders) : 0;
        var categoryShare = this.computeCategoryShareForMonth(year, monthIdx);
        return monthSpend * regionChannelFactor * categoryShare;
    };
    /** Sum filtered Ad Spend across selected months. */
    OverviewClass.prototype.totalAdSpendFilteredForRange = function (year, monthIdxs) {
        var _this = this;
        return monthIdxs.reduce(function (sum, idx) { return sum + _this.computeAdSpendSliceForMonth(year, idx); }, 0);
    };
    OverviewClass.prototype.computeAdAttributedRevenueSliceForMonth = function (year, monthIdx) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var masterActual = (_c = (_b = ((_a = monthlyRevenueByYear[year]) !== null && _a !== void 0 ? _a : [])[monthIdx]) === null || _b === void 0 ? void 0 : _b.actual) !== null && _c !== void 0 ? _c : 0;
        var adCh = this.getAdChannels();
        // Numerator: orders from selected Regions in ad channels (no category yet)
        var regions = this.getIncludedRegions();
        var adOrdersSelectedRegions = 0;
        for (var _i = 0, regions_7 = regions; _i < regions_7.length; _i++) {
            var region = regions_7[_i];
            var chRows = buildChannelsByRegionYear(year, region);
            var row = chRows[monthIdx];
            if (!row)
                continue;
            for (var _j = 0, adCh_2 = adCh; _j < adCh_2.length; _j++) {
                var ch = adCh_2[_j];
                adOrdersSelectedRegions += ((_d = row[ch]) !== null && _d !== void 0 ? _d : 0);
            }
        }
        // Denominator: all orders across ALL regions and ALL channels
        var denomAllOrders = 0;
        for (var _k = 0, _l = ['AsiaPacific', 'Europe', 'NorthAmerica', 'LatinAmerica', 'MiddleEastAfrica']; _k < _l.length; _k++) {
            var region = _l[_k];
            var row = buildChannelsByRegionYear(year, region)[monthIdx];
            if (!row)
                continue;
            denomAllOrders += ((_e = row.Paid) !== null && _e !== void 0 ? _e : 0) + ((_f = row.Organic) !== null && _f !== void 0 ? _f : 0) + ((_g = row.Email) !== null && _g !== void 0 ? _g : 0) + ((_h = row.Social) !== null && _h !== void 0 ? _h : 0);
        }
        var rcShare = denomAllOrders > 0 ? (adOrdersSelectedRegions / denomAllOrders) : 0;
        var categoryShare = this.computeCategoryShareForMonth(year, monthIdx);
        return masterActual * rcShare * categoryShare;
    };
    /** Attributed revenue over selected month range. */
    OverviewClass.prototype.totalAdAttributedRevenueFilteredForRange = function (year, monthIdxs) {
        var _this = this;
        return monthIdxs.reduce(function (s, idx) { return s + _this.computeAdAttributedRevenueSliceForMonth(year, idx); }, 0);
    };
    Object.defineProperty(OverviewClass.prototype, "prevYear", {
        get: function () {
            return Math.max(2022, this.props.year - 1);
        },
        enumerable: false,
        configurable: true
    });
    OverviewClass.prototype.renderKpiTile = function (opts) {
        var metricKey = opts.metricKey, label = opts.label, valueText = opts.valueText, current = opts.current, previous = opts.previous, sparkData = opts.sparkData, sparkColor = opts.sparkColor, hero = opts.hero, description = opts.description;
        var t = calcTrend(current, previous);
        var defaultTone = toneForTrend(metricKey, t.dir);
        var arrowDefault = t.dir === 'up' ? '▲' : t.dir === 'down' ? '▼' : '•';
        var highlightIndex = this.props.monthIndex === ALL_MONTH ? -1 : this.props.monthIndex;
        // Default comparison label
        var compPeriodDefault = (previous === null)
            ? 'vs —'
            : (this.props.monthIndex === ALL_MONTH
                ? "vs ".concat(this.prevYear)
                : "vs ".concat(months[Math.max(0, Math.min(11, this.props.monthIndex))], " ").concat(this.prevYear));
        // Show YoY growth itself in the badge (not “change of growth”).
        var badgeText = "".concat(formatDeltaPct(t.deltaPct), "  ").concat(compPeriodDefault);
        var badgeTone = defaultTone;
        var badgeArrow = arrowDefault;
        // Badge styling (reuse tones)
        var badgeStyleBase = {
            fontSize: 12,
            fontWeight: 700,
            padding: '2px 8px',
            borderRadius: 999,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            border: '1px solid #E2E8F0'
        };
        var badgeStyle = badgeTone === 'good'
            ? __assign(__assign({}, badgeStyleBase), { background: '#ECFDF5', color: '#065F46', borderColor: '#A7F3D0' }) : badgeTone === 'bad'
            ? __assign(__assign({}, badgeStyleBase), { background: '#FEF2F2', color: '#991B1B', borderColor: '#FECACA' }) : __assign(__assign({}, badgeStyleBase), { background: '#F1F5F9', color: '#334155', borderColor: '#E2E8F0' });
        var cardClass = "e-card kpi-commerce-card ".concat(metricKey);
        var showTrendBadge = opts.showTrendBadge !== false;
        var hideHeader = opts.hideHeader === true;
        return (React.createElement("div", { className: cardClass },
            !hideHeader && (React.createElement("div", { className: "e-card-header" },
                React.createElement("div", { className: "e-card-header-caption" },
                    React.createElement("div", { className: "e-card-header-title" }, label)))),
            React.createElement("div", { className: "e-card-content kpi-commerce-card-content" },
                React.createElement("div", null,
                    React.createElement("div", { style: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 } },
                        React.createElement("div", { className: "kpi-text", style: { display: 'flex', alignItems: 'center', justifyContent: 'center' } }, label),
                        description && (React.createElement(ej2_react_popups_1.TooltipComponent, { content: description, position: "TopCenter" },
                            React.createElement("div", { className: 'ecommerce-exclamation-container' },
                                React.createElement("span", { className: 'e-icons e-circle-info kpi-commerce-info-icon', "aria-label": 'Info About Total ROAS in Overview', role: 'button' }))))),
                    React.createElement("div", { style: { display: 'flex', alignItems: 'center', justifyContent: 'left', gap: 12, marginBottom: 8 } },
                        React.createElement("div", { className: "kpi-commerce-value ".concat(hero ? 'kpi-commerce-value--hero' : ''), style: { margin: 0 } }, !opts.hideMainValue ? valueText : null),
                        showTrendBadge && (React.createElement("div", { style: { display: 'flex', alignItems: 'center' } },
                            React.createElement("span", { style: badgeStyle },
                                React.createElement("span", null, badgeArrow),
                                React.createElement("span", null, badgeText))))),
                    opts.extraContent && React.createElement("div", null, opts.extraContent)))));
    };
    OverviewClass.prototype.getIncludedChannelsForRegionGrid = function () {
        var _a;
        var sel = asChannelKeys((_a = this.props.channels) !== null && _a !== void 0 ? _a : []);
        return sel.length ? sel : ALL_CHANNELS;
    };
    OverviewClass.prototype.getSelectedMonthIdxsForGrid = function () {
        return this.props.monthIndex === ALL_MONTH
            ? Array.from({ length: 12 }, function (_, i) { return i; })
            : [Math.max(0, Math.min(11, this.props.monthIndex))];
    };
    OverviewClass.prototype.categoryShareMapForMonth = function (year, monthIdx) {
        var _a, _b, _c, _d;
        var products = buildYearProductSales(year); // already scaled to match totals
        var totals = {};
        var totalUnits = 0;
        for (var _i = 0, products_5 = products; _i < products_5.length; _i++) {
            var p = products_5[_i];
            var units = (_b = (_a = p.monthly) === null || _a === void 0 ? void 0 : _a[monthIdx]) !== null && _b !== void 0 ? _b : 0;
            totalUnits += units;
            totals[p.category] = ((_c = totals[p.category]) !== null && _c !== void 0 ? _c : 0) + units;
        }
        var shareByCat = {};
        for (var _e = 0, _f = Object.keys(totals); _e < _f.length; _e++) {
            var cat = _f[_e];
            shareByCat[cat] = totalUnits > 0 ? ((_d = totals[cat]) !== null && _d !== void 0 ? _d : 0) / totalUnits : 0;
        }
        return shareByCat;
    };
    OverviewClass.prototype.revenueSliceForRegionChannelMonthNoCategory = function (year, monthIdx, region, channel) {
        var _a, _b, _c, _d, _e, _f, _g;
        var master = ((_a = monthlyRevenueByYear[year]) !== null && _a !== void 0 ? _a : [])[monthIdx];
        var masterActual = (_b = master === null || master === void 0 ? void 0 : master.actual) !== null && _b !== void 0 ? _b : 0;
        if (!masterActual)
            return 0;
        // Denominator: all orders across all regions & channels
        var allRegions = ['AsiaPacific', 'Europe', 'NorthAmerica', 'LatinAmerica', 'MiddleEastAfrica'];
        var denomOrders = 0;
        for (var _i = 0, allRegions_4 = allRegions; _i < allRegions_4.length; _i++) {
            var r = allRegions_4[_i];
            var row = buildChannelsByRegionYear(year, r)[monthIdx];
            if (!row)
                continue;
            denomOrders += ((_c = row.Paid) !== null && _c !== void 0 ? _c : 0) + ((_d = row.Organic) !== null && _d !== void 0 ? _d : 0) + ((_e = row.Email) !== null && _e !== void 0 ? _e : 0) + ((_f = row.Social) !== null && _f !== void 0 ? _f : 0);
        }
        if (denomOrders <= 0)
            return 0;
        // Numerator: orders for this region+channel
        var regRow = buildChannelsByRegionYear(year, region)[monthIdx];
        var chOrders = ((_g = regRow === null || regRow === void 0 ? void 0 : regRow[channel]) !== null && _g !== void 0 ? _g : 0);
        return masterActual * (chOrders / denomOrders);
    };
    OverviewClass.prototype.buildRegionShareGridData2Level = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var year = this.props.year;
        var monthIdxs = this.getSelectedMonthIdxsForGrid();
        var includedRegions = this.getIncludedRegions();
        var includedChannels = this.getIncludedChannelsForRegionGrid();
        var selectedCats = (_a = this.props.categories) !== null && _a !== void 0 ? _a : [];
        var allCats = CATEGORY_OPTIONS;
        var catsToShow = selectedCats.length ? selectedCats : allCats;
        var displayChannel = function (ch) {
            return ch;
        };
        var parentRows = [];
        var channelRows = [];
        var categoryRows = [];
        var _loop_6 = function (rk) {
            var regionName = regionDisplay[rk];
            // -------- Channel totals per region (filtered by category factor) --------
            var chTotalsFiltered = { Paid: 0, Organic: 0, Email: 0, Social: 0 };
            for (var _j = 0, monthIdxs_2 = monthIdxs; _j < monthIdxs_2.length; _j++) {
                var m = monthIdxs_2[_j];
                var catFactor = this_2.computeCategoryShareForMonth(year, m);
                for (var _k = 0, includedChannels_1 = includedChannels; _k < includedChannels_1.length; _k++) {
                    var ch = includedChannels_1[_k];
                    var base = this_2.revenueSliceForRegionChannelMonthNoCategory(year, m, rk, ch);
                    chTotalsFiltered[ch] += base * catFactor;
                }
            }
            var totalRevenue = Object.keys(chTotalsFiltered)
                .reduce(function (sum, k) { var _a; return sum + ((_a = chTotalsFiltered[k]) !== null && _a !== void 0 ? _a : 0); }, 0);
            // -------- Growth vs prev year (same slice) --------
            var prevYear = Math.max(2022, year - 1);
            var prevTotal = 0;
            if (prevYear !== year) {
                for (var _l = 0, monthIdxs_3 = monthIdxs; _l < monthIdxs_3.length; _l++) {
                    var m = monthIdxs_3[_l];
                    var catFactorPrev = this_2.computeCategoryShareForMonth(prevYear, m);
                    for (var _o = 0, includedChannels_2 = includedChannels; _o < includedChannels_2.length; _o++) {
                        var ch = includedChannels_2[_o];
                        var basePrev = this_2.revenueSliceForRegionChannelMonthNoCategory(prevYear, m, rk, ch);
                        prevTotal += basePrev * catFactorPrev;
                    }
                }
            }
            var growthPct = prevTotal > 0 ? ((totalRevenue - prevTotal) / prevTotal) * 100 : null;
            // -------- Parent Row (Region) --------
            parentRows.push({
                regionKey: rk,
                region: regionName,
                totalRevenue: totalRevenue,
                growthPct: growthPct,
                online: (_b = chTotalsFiltered.Organic) !== null && _b !== void 0 ? _b : 0,
                ads: (_c = chTotalsFiltered.Paid) !== null && _c !== void 0 ? _c : 0,
                email: (_d = chTotalsFiltered.Email) !== null && _d !== void 0 ? _d : 0,
                social: (_e = chTotalsFiltered.Social) !== null && _e !== void 0 ? _e : 0
            });
            var _loop_7 = function (ch) {
                var rcKey = "".concat(regionName, "|").concat(ch); // stable join key
                var channelRevenue = (_f = chTotalsFiltered[ch]) !== null && _f !== void 0 ? _f : 0;
                var sharePct = totalRevenue > 0 ? (channelRevenue / totalRevenue) * 100 : 0;
                channelRows.push({
                    region: regionName,
                    rcKey: rcKey,
                    channelKey: ch,
                    channel: displayChannel(ch),
                    revenue: channelRevenue,
                    sharePct: sharePct
                });
                // --- Category drilldown for this region+channel ---
                // Build base revenue per month (no category), then split by category shares
                var catAgg = Object.fromEntries(catsToShow.map(function (c) { return [c, 0]; }));
                for (var _q = 0, monthIdxs_4 = monthIdxs; _q < monthIdxs_4.length; _q++) {
                    var m = monthIdxs_4[_q];
                    var baseNoCat = this_2.revenueSliceForRegionChannelMonthNoCategory(year, m, rk, ch);
                    var shareByCat = this_2.categoryShareMapForMonth(year, m);
                    for (var _r = 0, catsToShow_1 = catsToShow; _r < catsToShow_1.length; _r++) {
                        var cat = catsToShow_1[_r];
                        var s = (_g = shareByCat[cat]) !== null && _g !== void 0 ? _g : 0;
                        catAgg[cat] += baseNoCat * s;
                    }
                }
                var catTotal = catsToShow.reduce(function (sum, c) { var _a; return sum + ((_a = catAgg[c]) !== null && _a !== void 0 ? _a : 0); }, 0) || 0;
                for (var _s = 0, catsToShow_2 = catsToShow; _s < catsToShow_2.length; _s++) {
                    var cat = catsToShow_2[_s];
                    var rev = (_h = catAgg[cat]) !== null && _h !== void 0 ? _h : 0;
                    var catSharePct = catTotal > 0 ? (rev / catTotal) * 100 : 0;
                    categoryRows.push({
                        rcKey: rcKey,
                        category: cat,
                        revenue: rev,
                        sharePct: catSharePct
                    });
                }
            };
            // -------- Child Rows (Channel) + Grandchild Rows (Category) --------
            for (var _p = 0, includedChannels_3 = includedChannels; _p < includedChannels_3.length; _p++) {
                var ch = includedChannels_3[_p];
                _loop_7(ch);
            }
        };
        var this_2 = this;
        for (var _i = 0, includedRegions_2 = includedRegions; _i < includedRegions_2.length; _i++) {
            var rk = includedRegions_2[_i];
            _loop_6(rk);
        }
        // Helpful ordering: top regions first
        parentRows.sort(function (a, b) { var _a, _b; return ((_a = b.totalRevenue) !== null && _a !== void 0 ? _a : 0) - ((_b = a.totalRevenue) !== null && _b !== void 0 ? _b : 0); });
        return { parentRows: parentRows, channelRows: channelRows, categoryRows: categoryRows };
    };
    OverviewClass.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "Container" },
            React.createElement("div", { className: "sidebar-content" },
                React.createElement(ej2_react_layouts_1.DashboardLayoutComponent, { ref: this.OverviewRef, id: "ecommerce_marketing_overview_dashboard", columns: 8, cellAspectRatio: 1, cellSpacing: [12, 12], allowResizing: false, allowDragging: false, created: this.OverviewDashboardCreated, mediaQuery: "(max-width:950px)" },
                    React.createElement(ej2_react_layouts_1.PanelsDirective, null,
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 4, sizeY: 1, row: 0, col: 0, content: function () { return _this.totalRevenueContent(); } }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 4, sizeY: 1, row: 0, col: 4, content: function () { return _this.roasContent(); } }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 2, col: 0, content: function () { return _this.totalOrdersContent(); } }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 2, col: 2, content: function () { return _this.aovContent(); } }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 2, col: 4, content: function () { return _this.convRateContent(); } }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 2, col: 6, content: function () { return _this.customerGrowthContent(); } }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 4, sizeY: 3, row: 3, col: 0, header: "<div>Target vs Achievement Analysis</div>", content: function () { return _this.renderBulletChart(); } }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 4, sizeY: 3, row: 3, col: 4, header: "<div>Market Trends</div>", content: function () { return _this.renderMarketTrends(); } }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 8, sizeY: 4, row: 7, col: 0, header: "<div>Revenue By Channel</div>", content: function () { return _this.renderSalesMixGrowth(); } }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 8, sizeY: 4, row: 11, col: 0, header: "<div>Demand Origins</div>", content: function () { return _this.renderDemandOrigins(); } }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 8, sizeY: 3, row: 15, col: 0, header: "<div>Region Share</div>", content: function () { return _this.renderRegionShareGrid(); } }))))));
    };
    return OverviewClass;
}(React.Component));
// Build unique category list from mixedProducts
var allCategories = Array.from(new Set(mixedProducts.map(function (p) { return p.category; }))).sort();
var CategoryColorByName = Object.fromEntries(allCategories.map(function (cat, i) { return [cat, Palettes.categorySalesTrend[i % Palettes.categorySalesTrend.length]]; }));
var getCategoryColor = function (name) { var _a; return (_a = CategoryColorByName[name]) !== null && _a !== void 0 ? _a : Palettes.categorySalesTrend[0]; };
var MarkerShapes = ['Circle', 'Diamond', 'Triangle', 'InvertedTriangle', 'Rectangle', 'Pentagon'];
var CategoryMarkerByName = Object.fromEntries(allCategories.map(function (cat, i) { return [cat, MarkerShapes[i % MarkerShapes.length]]; }));
function buildCategoryMonthlyTotalsByYear(year, endMonthIndex) {
    var products = buildYearProductSales(year);
    var endIdx = typeof endMonthIndex === 'number' ? endMonthIndex : months.length - 1;
    var byCat = {};
    var _loop_8 = function (cat) {
        var series = [];
        var _loop_9 = function (i) {
            var total = products
                .filter(function (p) { return p.category === cat; })
                .reduce(function (sum, p) { var _a; return sum + ((_a = p.monthly[i]) !== null && _a !== void 0 ? _a : 0); }, 0);
            series.push({ m: months[i], value: total });
        };
        for (var i = 0; i <= endIdx; i++) {
            _loop_9(i);
        }
        byCat[cat] = series;
    };
    for (var _i = 0, allCategories_1 = allCategories; _i < allCategories_1.length; _i++) {
        var cat = allCategories_1[_i];
        _loop_8(cat);
    }
    return byCat;
}
// build only the selected month (not YTD)
function buildCategoryTotalsForSingleMonth(year, monthIndex) {
    var products = buildYearProductSales(year);
    var byCat = {};
    var _loop_10 = function (cat) {
        var total = products
            .filter(function (p) { return p.category === cat; })
            .reduce(function (sum, p) { var _a; return sum + ((_a = p.monthly[monthIndex]) !== null && _a !== void 0 ? _a : 0); }, 0);
        byCat[cat] = [{ m: months[monthIndex], value: total }];
    };
    for (var _i = 0, allCategories_2 = allCategories; _i < allCategories_2.length; _i++) {
        var cat = allCategories_2[_i];
        _loop_10(cat);
    }
    return byCat;
}
var formatCurrencyAxis = {
    labelFormat: 'c0',
    majorGridLines: { width: 1, color: '#e5e7eb' },
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 }
};
var MarketingClass = /** @class */ (function (_super) {
    __extends(MarketingClass, _super);
    function MarketingClass() {
        var _a, _b, _c, _d;
        var _this = _super.apply(this, arguments) || this;
        _this.MarketingRef = React.createRef();
        _this.promoVsNonPromoChartRef = React.createRef();
        _this.discountWaterfallChartRef = React.createRef();
        _this.promoEfficiencyBarRef = React.createRef();
        _this.campaignPerfGridRef = React.createRef();
        _this.campaignRevenueChartRef = React.createRef();
        _this.funnelChartRef = React.createRef();
        _this.state = {
            year: (_a = _this.props.year) !== null && _a !== void 0 ? _a : 2025,
            monthIndex: (_b = _this.props.monthIndex) !== null && _b !== void 0 ? _b : ALL_MONTH,
            campaign: (_c = _this.props.campaign) !== null && _c !== void 0 ? _c : 'ALL',
            region: (_d = _this.props.region) !== null && _d !== void 0 ? _d : 'ALL',
            channels: Array.isArray(_this.props.channels) ? _this.props.channels : [],
            categories: Array.isArray(_this.props.categories) ? _this.props.categories : [],
            selectedCategory: 'All Categories',
            productMixDrillCategory: null,
            topItemsCategory: 'All Categories',
        };
        _this.yearOptions = [2023, 2024, 2025];
        _this.monthOptions = __spreadArray([{ text: 'All (Yearly)', value: ALL_MONTH }], months.map(function (m, idx) { return ({ text: m, value: idx }); }), true);
        _this.categoryOptions = __spreadArray(['All Categories'], allCategories, true);
        _this.MarketingDashboardCreated = function () {
            setTimeout(function () {
                var _a, _b, _c, _d, _e, _f, _g;
                (_a = _this.MarketingRef.current) === null || _a === void 0 ? void 0 : _a.refresh();
                refreshCommonSparks();
                (_b = _this.promoVsNonPromoChartRef.current) === null || _b === void 0 ? void 0 : _b.refresh();
                (_c = _this.discountWaterfallChartRef.current) === null || _c === void 0 ? void 0 : _c.refresh();
                (_d = _this.promoEfficiencyBarRef.current) === null || _d === void 0 ? void 0 : _d.refresh();
                (_e = _this.campaignPerfGridRef.current) === null || _e === void 0 ? void 0 : _e.refresh();
                (_f = _this.campaignRevenueChartRef.current) === null || _f === void 0 ? void 0 : _f.refresh();
                (_g = _this.funnelChartRef.current) === null || _g === void 0 ? void 0 : _g.refresh();
            }, 500);
        };
        // Local header tooltip helper for Grid headers (tooltip = header text)
        _this.headerWithTooltip = function (label, _tip) {
            return function () { return (React.createElement("div", { title: label, style: { display: 'inline-block', cursor: 'default' } }, label)); };
        };
        // Map campaigns to active channels, then intersect with Promo channels (Paid + Email)
        _this.CAMPAIGN_PROMO_CHANNELS = {
            ALL: ['Paid', 'Email', 'Organic', 'Social'],
            BrandAwareness: ['Paid', 'Social'],
            Performance: ['Paid', 'Organic'],
            Retargeting: ['Paid', 'Email'],
            Acquisition: ['Paid', 'Organic'],
            Loyalty: ['Email']
        };
        // CTR assumptions by channel to derive Impressions from Clicks (Clicks = Visits by assumption)
        _this.CTR_ASSUMPTION = {
            Paid: 0.020,
            Organic: 0.030,
            Email: 0.060,
            Social: 0.015 // 1.5%
        };
        // ===== Discount Waterfall helpers (filter-aware) =====
        // Attractive, consistent colors (positive, negative, summary)
        _this.wfPositive = '#90AACB';
        _this.wfNegative = '#FF5858';
        _this.wfSummary = '#554994';
        // Discount assumptions (Promo vs Non‑Promo)
        _this.promoDiscountPct = 0.18; // 18% avg promo discount
        _this.nonPromoDiscountPct = 0.04; // 4% base/returns
        _this.promoRevenueContent = function () {
            var y = _this.props.year;
            var idxs = _this.selectedMonthIdxs;
            var current = _this.totalPromoRevenueForRange(y, idxs);
            var py = y - 1;
            var hasPY = py >= 2022;
            var prev = hasPY ? _this.totalPromoRevenueForRange(py, idxs) : null;
            var deltaPct = (prev && prev > 0) ? ((current - prev) / prev) * 100 : null;
            var compareLabel = _this.props.monthIndex === ALL_MONTH
                ? "vs ".concat(hasPY ? py : '—')
                : "vs ".concat(months[Math.max(0, Math.min(11, _this.props.monthIndex))], " ").concat(hasPY ? py : '—');
            var spark = _this.buildPromoSparkSeries(y);
            var tone = deltaPct == null ? 'neutral' : deltaPct > 0 ? 'good' : 'bad';
            var badgeText = deltaPct == null ? '—' : "".concat(deltaPct > 0 ? '+' : '').concat(deltaPct.toFixed(1), "% ").concat(compareLabel);
            return renderCommonKpiTile({
                label: 'Promotion Revenue',
                valueText: cardformatCurrency(current),
                badge: { text: badgeText, tone: tone },
                sparkData: spark,
                sparkColor: '#850E35',
                sparkId: "kpi-spark-promoRevenue-".concat(y, "-").concat(idxs.join('_')),
                isMonthSelected: _this.props.monthIndex !== ALL_MONTH
            });
        };
        _this.roasContent = function () {
            var _a;
            var y = _this.props.year;
            var idxs = _this.selectedMonthIdxs;
            var cur = _this.metricsForRange(y, idxs);
            var py = y - 1;
            var hasPY = py >= 2022;
            var prev = hasPY ? _this.metricsForRange(py, idxs) : null;
            var currentRoas = cur.roas;
            var prevRoas = (_a = prev === null || prev === void 0 ? void 0 : prev.roas) !== null && _a !== void 0 ? _a : null;
            // Trend badge content
            var deltaPct = (prevRoas != null && isFinite(prevRoas) && prevRoas > 0 && currentRoas != null && isFinite(currentRoas))
                ? ((currentRoas - prevRoas) / prevRoas) * 100
                : null;
            var compareLabel = _this.props.monthIndex === ALL_MONTH
                ? "vs ".concat(hasPY ? py : '—')
                : "vs ".concat(months[Math.max(0, Math.min(11, _this.props.monthIndex))], " ").concat(hasPY ? py : '—');
            // Badge tone and label
            var dir = (deltaPct == null || !isFinite(deltaPct) || Math.abs(deltaPct) < 0.05) ? 'flat' : (deltaPct > 0 ? 'up' : 'down');
            var tone = _this.trendTone(dir);
            var arrow = dir === 'up' ? '▲' : dir === 'down' ? '▼' : '•';
            var text = (deltaPct == null || !isFinite(deltaPct)) ? '—' : "".concat(deltaPct > 0 ? '+' : '').concat(deltaPct.toFixed(1), "%");
            var badgeStyleBase = {
                fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 999,
                background: '#F1F5F9', color: '#111827'
            };
            var badgeStyle = tone === 'good'
                ? __assign(__assign({}, badgeStyleBase), { background: '#ECFDF5', color: '#065F46', borderColor: '#A7F3D0' }) : tone === 'bad'
                ? __assign(__assign({}, badgeStyleBase), { background: '#FEF2F2', color: '#991B1B', borderColor: '#FECACA' }) : __assign(__assign({}, badgeStyleBase), { background: '#F1F5F9', color: '#334155', borderColor: '#E2E8F0' });
            // Left: spend + attributed revenue. Right: ROAS big + badge
            var spendText = cardformatCurrency(cur.spend);
            var revText = cardformatCurrency(cur.revenue);
            var roasText = currentRoas == null ? 'N/A' : "".concat(currentRoas.toFixed(2), "x");
            var description = "ROAS (Return on Ad Spend) shows how effectively your promotion campaigns convert advertising spend into revenue. It is calculated using only the channels associated with the selected campaign (Paid, Email), even if other channels are selected in the filter.";
            return (React.createElement("div", { className: "e-card kpi-commerce-card" },
                React.createElement("div", { className: "e-card-content kpi-commerce-card-content" },
                    React.createElement("div", { style: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 } },
                        React.createElement("div", { className: "kpi-text", style: { display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '4px' } }, "ROAS"),
                        description && (React.createElement(ej2_react_popups_1.TooltipComponent, { content: description, position: "TopCenter" },
                            React.createElement("div", { className: 'exclamation-roas-container' },
                                React.createElement("span", { className: 'e-icons e-circle-info kpi-commerce-info-icon', "aria-label": 'Info About Total ROAS in Overview', role: 'button' }))))),
                    React.createElement("div", { style: { display: 'grid', gridTemplateColumns: '1fr 1px 0.9fr', gap: 12, alignItems: 'center' } },
                        React.createElement("div", { style: { paddingRight: 8, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8 } },
                            React.createElement("div", null,
                                React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between', marginBottom: 8 } },
                                    React.createElement("span", { className: 'ecommerce-meta', style: { fontSize: 12, fontWeight: 600 } }, "Spend"),
                                    React.createElement("span", { className: 'revenue-font', style: { fontSize: 14, fontWeight: 600 } }, spendText)),
                                React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between' } },
                                    React.createElement("span", { className: 'ecommerce-meta', style: { fontSize: 12, fontWeight: 600 } }, "Attributed Revenue"),
                                    React.createElement("span", { className: 'revenue-font', style: { fontSize: 14, fontWeight: 600 } }, revText)))),
                        React.createElement("div", { style: { width: 1, background: '#E2E8F0', height: '100%', alignSelf: 'stretch' } }),
                        React.createElement("div", { style: { paddingLeft: 8, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 8 } },
                            React.createElement("div", { className: 'kpi-commerce-value' }, roasText),
                            React.createElement("span", { style: badgeStyle },
                                React.createElement("span", { style: { marginRight: 6 } }, arrow),
                                React.createElement("span", null,
                                    text,
                                    "  ",
                                    compareLabel)))))));
        };
        _this.impressionsContent = function () {
            var _a;
            var y = _this.props.year;
            var idxs = _this.selectedMonthIdxs;
            var cur = _this.metricsForRange(y, idxs);
            var py = y - 1;
            var prev = py >= 2022 ? _this.metricsForRange(py, idxs) : null;
            var current = Math.round((_a = cur.impressions) !== null && _a !== void 0 ? _a : 0);
            var previous = (prev === null || prev === void 0 ? void 0 : prev.impressions) ? Math.round(prev.impressions) : null;
            var deltaPct = previous && previous > 0 ? ((current - previous) / previous) * 100 : null;
            var tone = deltaPct == null ? 'neutral' : deltaPct > 0 ? 'good' : 'bad';
            var compareLabel = _this.props.monthIndex === ALL_MONTH ? "vs ".concat(py >= 2022 ? py : '—') : "vs ".concat(months[Math.max(0, Math.min(11, _this.props.monthIndex))], " ").concat(py >= 2022 ? py : '—');
            var badgeText = deltaPct == null ? '—' : "".concat(deltaPct > 0 ? '+' : '').concat(deltaPct.toFixed(1), "% ").concat(compareLabel);
            return renderCommonKpiTile({
                label: 'Impressions',
                valueText: _this.integer(current),
                badge: { text: badgeText, tone: tone },
                isMonthSelected: _this.props.monthIndex !== ALL_MONTH
            });
        };
        _this.clicksContent = function () {
            var _a;
            var y = _this.props.year;
            var idxs = _this.selectedMonthIdxs;
            var cur = _this.metricsForRange(y, idxs);
            var py = y - 1;
            var prev = py >= 2022 ? _this.metricsForRange(py, idxs) : null;
            var current = Math.round((_a = cur.clicks) !== null && _a !== void 0 ? _a : 0);
            var previous = (prev === null || prev === void 0 ? void 0 : prev.clicks) ? Math.round(prev.clicks) : null;
            var deltaPct = previous && previous > 0 ? ((current - previous) / previous) * 100 : null;
            var tone = deltaPct == null ? 'neutral' : deltaPct > 0 ? 'good' : 'bad';
            var compareLabel = _this.props.monthIndex === ALL_MONTH ? "vs ".concat(py >= 2022 ? py : '—') : "vs ".concat(months[Math.max(0, Math.min(11, _this.props.monthIndex))], " ").concat(py >= 2022 ? py : '—');
            var badgeText = deltaPct == null ? '—' : "".concat(deltaPct > 0 ? '+' : '').concat(deltaPct.toFixed(1), "% ").concat(compareLabel);
            return renderCommonKpiTile({
                label: 'Clicks',
                valueText: _this.integer(current),
                badge: { text: badgeText, tone: tone },
                isMonthSelected: _this.props.monthIndex !== ALL_MONTH
            });
        };
        _this.ctrContent = function () {
            var y = _this.props.year;
            var idxs = _this.selectedMonthIdxs;
            var cur = _this.metricsForRange(y, idxs);
            var py = y - 1;
            var prev = py >= 2022 ? _this.metricsForRange(py, idxs) : null;
            var current = +(isFinite(cur.ctrPct) ? cur.ctrPct : 0);
            var previous = prev ? +(isFinite(prev.ctrPct) ? prev.ctrPct : 0) : null;
            var deltaPct = previous && previous > 0 ? ((current - previous) / previous) * 100 : null;
            var tone = deltaPct == null ? 'neutral' : deltaPct > 0 ? 'good' : 'bad';
            var compareLabel = _this.props.monthIndex === ALL_MONTH ? "vs ".concat(py >= 2022 ? py : '—') : "vs ".concat(months[Math.max(0, Math.min(11, _this.props.monthIndex))], " ").concat(py >= 2022 ? py : '—');
            var badgeText = deltaPct == null ? '—' : "".concat(deltaPct > 0 ? '+' : '').concat(deltaPct.toFixed(1), "% ").concat(compareLabel);
            return renderCommonKpiTile({
                label: 'Click‑Through Rate',
                valueText: "".concat(current.toFixed(2), "%"),
                badge: { text: badgeText, tone: tone },
                isMonthSelected: _this.props.monthIndex !== ALL_MONTH
            });
        };
        _this.cpcOnlyContent = function () {
            var y = _this.props.year;
            var idxs = _this.selectedMonthIdxs;
            var cur = _this.metricsForRange(y, idxs);
            var cpc = cur.clicks > 0 ? (cur.spend / cur.clicks) : null;
            // Previous year comparison (same months)
            var py = y - 1;
            var hasPY = py >= 2022;
            var prev = hasPY ? _this.metricsForRange(py, idxs) : null;
            var cpcPrev = prev && prev.clicks > 0 ? (prev.spend / prev.clicks) : null;
            // Delta % (lower CPC is better)
            var deltaPct = (cpc != null && isFinite(cpc) && cpcPrev != null && isFinite(cpcPrev) && Math.abs(cpcPrev) > 0)
                ? ((cpc - cpcPrev) / Math.abs(cpcPrev)) * 100
                : null;
            // Badge tone: CPC lower is good; higher is bad; unchanged is neutral
            var tone = 'neutral';
            if (deltaPct != null && isFinite(deltaPct)) {
                tone = deltaPct < 0 ? 'good' : deltaPct > 0 ? 'bad' : 'neutral';
            }
            // Badge label (YoY or month YoY)
            var compareLabel = _this.props.monthIndex === ALL_MONTH
                ? "vs ".concat(hasPY ? py : '—')
                : "vs ".concat(months[Math.max(0, Math.min(11, _this.props.monthIndex))], " ").concat(hasPY ? py : '—');
            var badgeText = (deltaPct == null || !isFinite(deltaPct))
                ? '—'
                : "".concat(deltaPct > 0 ? '+' : '').concat(deltaPct.toFixed(1), "% ").concat(compareLabel);
            // Format currency with 2 decimals (you already use currency2 elsewhere)
            var currency2 = function (v) {
                return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(v);
            };
            var valueText = (cpc == null || !isFinite(cpc)) ? 'N/A' : currency2(cpc);
            // Render single KPI tile via your shared helper
            return renderCommonKpiTile({
                label: 'Cost per click',
                valueText: valueText,
                badge: { text: badgeText, tone: tone },
                isMonthSelected: _this.props.monthIndex !== ALL_MONTH
            });
        };
        _this.onPromoAxisLabelRender = function (args) {
            var _a;
            if (args.axis && args.axis.name === 'percentAxis')
                return;
            if (((_a = args === null || args === void 0 ? void 0 : args.axis) === null || _a === void 0 ? void 0 : _a.valueType) !== 'Category') {
                args.text = formatCurrency(Number(args.value || 0));
            }
        };
        _this.onPromoDataLabelRender = function (args) {
            var _a;
            var val = (_a = args === null || args === void 0 ? void 0 : args.point) === null || _a === void 0 ? void 0 : _a.y;
            if (typeof val === 'number' && isFinite(val)) {
                args.text = formatCurrency(Number(val));
            }
        };
        _this.renderPromoVsNonPromo = function () {
            var y = _this.props.year;
            var isYearly = _this.props.monthIndex === ALL_MONTH;
            var promoChs = _this.getFinalPromoChannels();
            var nonPromoChs = _this.getFinalNonPromoChannels();
            // Colors (attractive, consistent with palette)
            var colorPromo = '#FF5858';
            var colorNonPromo = '#DBA39A';
            if (isYearly) {
                // Build monthly series for stacked columns
                var monthsData = months.map(function (m, i) {
                    var promo = _this.revenueForMonthByChannels(y, i, promoChs);
                    var nonPromo = _this.revenueForMonthByChannels(y, i, nonPromoChs);
                    return { m: m, promo: promo, nonPromo: nonPromo };
                });
                var seriesPromo = monthsData.map(function (r) { return ({ x: r.m, y: Math.max(0, Math.round(r.promo)) }); });
                var seriesNonPromo = monthsData.map(function (r) { return ({ x: r.m, y: Math.max(0, Math.round(r.nonPromo)) }); });
                return (React.createElement("div", { style: { height: '100%', width: '100%', padding: 8, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 8 } },
                    React.createElement("div", { style: { flex: 1, minHeight: 0, height: "calc(100% - 5px)" } },
                        React.createElement(ej2_react_charts_1.ChartComponent, { id: "promoVsNonPromoYearlyFiltered", ref: _this.promoVsNonPromoChartRef, height: "100%", primaryXAxis: { valueType: 'Category', majorGridLines: { width: 0 }, majorTickLines: { width: 0 } }, primaryYAxis: { labelFormat: 'c0', lineStyle: { width: 0 }, majorTickLines: { width: 0 }, minorTickLines: { width: 0 } }, legendSettings: { visible: true }, tooltip: { enable: true }, chartArea: { border: { width: 0 } }, textRender: _this.onPromoDataLabelRender, axisLabelRender: _this.onPromoAxisLabelRender, tooltipRender: onCurrencyTooltip, load: onChartLoad },
                            React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.StackingBarSeries, ej2_react_charts_1.Legend, ej2_react_charts_1.Tooltip, ej2_react_charts_1.Category, ej2_react_charts_1.DataLabel] }),
                            React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                                React.createElement(ej2_react_charts_1.SeriesDirective, { type: "StackingBar", name: "Non\u2011Promo", xName: "x", yName: "y", dataSource: seriesNonPromo, fill: colorNonPromo, columnWidth: 0.7, marker: { dataLabel: { visible: true, font: { fontWeight: "Bold" } } }, animation: { enable: false } }),
                                React.createElement(ej2_react_charts_1.SeriesDirective, { type: "StackingBar", name: "Promo", xName: "x", yName: "y", dataSource: seriesPromo, fill: colorPromo, columnWidth: 0.7, marker: { dataLabel: { visible: true, font: { fontWeight: "Bold" } } }, animation: { enable: false } }))))));
            }
            // Single month view (stacked column with one category)
            var i = _this.props.monthIndex;
            var promo = _this.revenueForMonthByChannels(y, i, promoChs);
            var nonPromo = _this.revenueForMonthByChannels(y, i, nonPromoChs);
            var monthTitle = "Promo vs Non\u2011Promo Sales";
            var points = [{ x: 'Revenue', promo: Math.round(promo), nonPromo: Math.round(nonPromo) }];
            return (React.createElement("div", { style: { height: '100%', width: '100%', padding: 8, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 8 } },
                React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 10 } },
                    React.createElement("div", { style: { fontWeight: 600, fontSize: 14 } }, monthTitle)),
                React.createElement("div", { style: { flex: 1, minHeight: 0, height: "calc(100% - 5px)" } },
                    React.createElement(ej2_react_charts_1.ChartComponent, { id: "promoVsNonPromoMonthlyFiltered", ref: _this.promoVsNonPromoChartRef, height: "100%", primaryXAxis: { valueType: 'Category', majorGridLines: { width: 0 }, majorTickLines: { width: 0 } }, primaryYAxis: { labelFormat: 'c0', lineStyle: { width: 0 }, majorTickLines: { width: 0 }, minorTickLines: { width: 0 }, minimum: 0 }, legendSettings: { visible: true }, tooltip: { enable: true, shared: true }, chartArea: { border: { width: 0 } }, textRender: _this.onPromoDataLabelRender, axisLabelRender: _this.onPromoAxisLabelRender, load: onChartLoad },
                        React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.StackingColumnSeries, ej2_react_charts_1.Legend, ej2_react_charts_1.Tooltip, ej2_react_charts_1.Category, ej2_react_charts_1.DataLabel] }),
                        React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                            React.createElement(ej2_react_charts_1.SeriesDirective, { type: "StackingColumn", name: "Non\u2011Promo", xName: "x", yName: "nonPromo", dataSource: points, fill: colorNonPromo, columnWidth: 0.5, marker: { dataLabel: { visible: true } }, animation: { enable: false } }),
                            React.createElement(ej2_react_charts_1.SeriesDirective, { type: "StackingColumn", name: "Promo", xName: "x", yName: "promo", dataSource: points, fill: colorPromo, columnWidth: 0.5, marker: { dataLabel: { visible: true } }, animation: { enable: false } }))))));
        };
        _this.onDiscountWaterfallAxisLabelRender = function (args) {
            var _a;
            if (args.axis && args.axis.name === 'percentAxis')
                return;
            if (((_a = args === null || args === void 0 ? void 0 : args.axis) === null || _a === void 0 ? void 0 : _a.valueType) !== 'Category') {
                args.text = formatCurrency(Number(args.value || 0));
            }
        };
        // Render: Discount Waterfall (Gross → Net → COGS → Profit)
        _this.renderDiscountWaterfall = function () {
            var y = _this.props.year;
            var isYearly = _this.props.monthIndex === ALL_MONTH;
            var idxs = isYearly ? Array.from({ length: 12 }, function (_, i) { return i; }) : [Math.max(0, Math.min(11, _this.props.monthIndex))];
            var agg = _this.discountWaterfallForRange(y, idxs);
            var title = "Discount Waterfall";
            // Waterfall points: [Gross, Discounts, Net Sales (intermediate), COGS, Gross Margin (summary)]
            var data = [
                { x: 'Gross Sales', y: Math.round(agg.gross) },
                { x: 'Discounts', y: -Math.round(agg.discounts) },
                { x: 'Net Sales' },
                { x: 'COGS', y: -Math.round(agg.cogs) },
                { x: 'Gross Margin' } // final summary
            ];
            var intermediateSumIndexes = [2];
            var sumIndexes = [4];
            var C = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
            var onLabelCurrency = function (args) {
                var _a;
                var val = (_a = args === null || args === void 0 ? void 0 : args.point) === null || _a === void 0 ? void 0 : _a.y;
                if (typeof val === 'number')
                    args.text = C.format(val);
            };
            return (React.createElement("div", { style: { height: '100%', width: '100%', padding: 8, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 8 } },
                React.createElement("div", { style: { flex: 1, minHeight: 0, height: '100%', width: '100%' } },
                    React.createElement(ej2_react_charts_1.ChartComponent, { id: "discountWaterfall", ref: _this.discountWaterfallChartRef, height: "100%", primaryXAxis: { valueType: 'Category', majorGridLines: { width: 0 }, majorTickLines: { width: 0 } }, primaryYAxis: { labelFormat: 'c0', lineStyle: { width: 0 }, majorTickLines: { width: 0 }, minorTickLines: { width: 0 } }, tooltip: { enable: true }, legendSettings: { visible: false }, chartArea: { border: { width: 0 } }, textRender: onTextRender, tooltipRender: onCurrencyTooltip, axisLabelRender: _this.onDiscountWaterfallAxisLabelRender, load: onChartLoad },
                        React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.WaterfallSeries, ej2_react_charts_1.DataLabel, ej2_react_charts_1.Legend, ej2_react_charts_1.Tooltip, ej2_react_charts_1.Category] }),
                        React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                            React.createElement(ej2_react_charts_1.SeriesDirective, { type: "Waterfall", name: "Discount Waterfall", dataSource: data, xName: "x", yName: "y", intermediateSumIndexes: intermediateSumIndexes, sumIndexes: sumIndexes, negativeFillColor: _this.wfNegative, summaryFillColor: _this.wfSummary, columnWidth: 0.6, marker: { dataLabel: { visible: true, position: 'Outer' } }, connector: { color: '#9CA3AF', width: 1 }, fill: _this.wfPositive, animation: { enable: false } }))))));
        };
        _this.onPromoEfficiencyAxisLabelRender = function (args) {
            var _a;
            if (args.axis && args.axis.name === 'percentAxis')
                return;
            if (((_a = args === null || args === void 0 ? void 0 : args.axis) === null || _a === void 0 ? void 0 : _a.valueType) !== 'Category') {
                args.text = formatCurrency(Number(args.value || 0));
            }
        };
        _this.onPromoEfficiencyDataLabelRender = function (args) {
            var _a;
            var val = (_a = args === null || args === void 0 ? void 0 : args.point) === null || _a === void 0 ? void 0 : _a.y;
            if (typeof val === 'number' && isFinite(val)) {
                args.text = formatCurrency(Number(val));
            }
        };
        _this.renderPromoEfficiency = function () {
            var y = _this.props.year;
            var colorGross = '#90AACB'; // blue-ish (your current gross margin color fits well)
            var colorCosts = '#FF5858'; // red-ish (you used for discounts
            var idxs = _this.selectedMonthIdxs;
            var data = _this.promoEfficiencyGrossVsCostsSeries(y, idxs);
            return (React.createElement("div", { style: { height: '100%', width: '100%', padding: 8, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 8 } },
                React.createElement("div", { style: { minHeight: 0, flex: 1, height: "calc(100% - 10px)" } },
                    React.createElement(ej2_react_charts_1.ChartComponent, { id: "promoEfficiencyChart", ref: _this.promoEfficiencyBarRef, primaryXAxis: { valueType: 'Category', majorGridLines: { width: 0 }, majorTickLines: { width: 0 } }, primaryYAxis: { labelFormat: 'c0', lineStyle: { width: 0 }, majorTickLines: { width: 0 }, minorTickLines: { width: 0 } }, tooltip: { enable: true }, legendSettings: { visible: true }, chartArea: { border: { width: 0 } }, axisLabelRender: _this.onPromoEfficiencyAxisLabelRender, textRender: _this.onPromoEfficiencyDataLabelRender, tooltipRender: onCurrencyTooltip, load: onChartLoad },
                        React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.ColumnSeries, ej2_react_charts_1.Legend, ej2_react_charts_1.Tooltip, ej2_react_charts_1.Category, ej2_react_charts_1.DataLabel] }),
                        React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                            React.createElement(ej2_react_charts_1.SeriesDirective, { type: "Column", name: "Gross Sales", dataSource: data, xName: "m", yName: "gross", columnWidth: 0.85, fill: colorGross, marker: { dataLabel: { visible: true } }, animation: { enable: false } }),
                            React.createElement(ej2_react_charts_1.SeriesDirective, { type: "Column", name: "Discounts + COGS", dataSource: data, xName: "m", yName: "costs", columnWidth: 0.85, fill: colorCosts, marker: { dataLabel: { visible: true } }, animation: { enable: false } }))))));
        };
        // Render Campaign Performance Table (DataGrid with Excel/PDF export)
        _this.renderCampaignPerformanceTable = function () {
            var toolbarOptions = ['ExcelExport', 'PdfExport'];
            var data = _this.buildCampaignPerformanceRows();
            var toolbarClick = function (args) {
                var _a, _b;
                switch (args.item.id) {
                    case 'campaignPerfGrid_pdfexport':
                        (_a = _this.campaignPerfGridRef.current) === null || _a === void 0 ? void 0 : _a.pdfExport();
                        break;
                    case 'campaignPerfGrid_excelexport':
                        (_b = _this.campaignPerfGridRef.current) === null || _b === void 0 ? void 0 : _b.excelExport();
                        break;
                }
            };
            var roasTemplate = function (props) {
                var v = props.roas;
                if (v === null || v === undefined || !isFinite(v))
                    return React.createElement("span", null, "\u2014");
                return React.createElement("span", { style: { fontWeight: 700 } },
                    v.toFixed(2),
                    "x");
            };
            return (React.createElement("div", { style: { height: '100%', width: '100%', padding: 8, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 8 } },
                React.createElement("div", { style: { flex: 1, minHeight: 0 } },
                    React.createElement(ej2_react_grids_1.GridComponent, { id: "campaignPerfGrid", ref: _this.campaignPerfGridRef, dataSource: data, allowPaging: false, toolbar: toolbarOptions, toolbarClick: toolbarClick, allowExcelExport: true, allowPdfExport: true, allowResizing: true, height: "100%" },
                        React.createElement(ej2_react_grids_1.ColumnsDirective, null,
                            React.createElement(ej2_react_grids_1.ColumnDirective, { field: "campaign", headerText: "Campaign", headerTemplate: _this.headerWithTooltip('Campaign', ''), width: "130", textAlign: "Left", isPrimaryKey: true }),
                            React.createElement(ej2_react_grids_1.ColumnDirective, { field: "cost", headerText: "Cost", headerTemplate: _this.headerWithTooltip('Cost', ''), width: "110", textAlign: "Right", format: "C0" }),
                            React.createElement(ej2_react_grids_1.ColumnDirective, { field: "revenue", headerText: "Revenue", headerTemplate: _this.headerWithTooltip('Revenue', ''), width: "110", textAlign: "Right", format: "C0" }),
                            React.createElement(ej2_react_grids_1.ColumnDirective, { field: "profit", headerText: "Profit", headerTemplate: _this.headerWithTooltip('Profit', ''), width: "110", textAlign: "Right", format: "C0" }),
                            React.createElement(ej2_react_grids_1.ColumnDirective, { field: "roas", headerText: "ROAS", headerTemplate: _this.headerWithTooltip('ROAS', ''), width: "110", textAlign: "Right", template: roasTemplate }),
                            React.createElement(ej2_react_grids_1.ColumnDirective, { field: "conversions", headerText: "Conversions", headerTemplate: _this.headerWithTooltip('Conversions', ''), width: "110", textAlign: "Right", format: "N0" })),
                        React.createElement(ej2_react_grids_1.Inject, { services: [ej2_react_grids_1.ExcelExport, ej2_react_grids_1.PdfExport, ej2_react_grids_1.Toolbar] })))));
        };
        _this.onRevenueCamapignAxisLabelRender = function (args) {
            var _a;
            if (args.axis && args.axis.name === 'percentAxis')
                return;
            if (((_a = args === null || args === void 0 ? void 0 : args.axis) === null || _a === void 0 ? void 0 : _a.valueType) !== 'Category') {
                args.text = formatCurrency(Number(args.value || 0));
            }
        };
        _this.onRevenueCamapignDataLabelRender = function (args) {
            var _a;
            var val = (_a = args === null || args === void 0 ? void 0 : args.point) === null || _a === void 0 ? void 0 : _a.y;
            if (typeof val === 'number' && isFinite(val)) {
                args.text = formatCurrency(Number(val));
            }
        };
        _this.renderRevenueByCampaign = function () {
            var _a;
            var year = _this.props.year;
            var idxs = _this.selectedMonthIdxs;
            var allCampaigns = CAMPAIGN_OPTIONS.map(function (c) { return ({ key: c.value, label: c.text }); });
            var campaignList = _this.props.campaign && _this.props.campaign !== 'ALL'
                ? allCampaigns.filter(function (c) { return c.key === _this.props.campaign; })
                : allCampaigns;
            var userSelectedChannels = asChannelKeys((_a = _this.props.channels) !== null && _a !== void 0 ? _a : []);
            var hasUserSelectedChannels = userSelectedChannels.length > 0;
            var rows = campaignList.map(function (c) {
                var _a;
                var campaignAllowed = ((_a = _this.CAMPAIGN_PROMO_CHANNELS[c.key]) !== null && _a !== void 0 ? _a : ALL_CHANNELS);
                var channelsUsed = hasUserSelectedChannels ? campaignAllowed.filter(function (ch) { return userSelectedChannels.includes(ch); }) : campaignAllowed;
                var totalRev = 0;
                for (var _i = 0, idxs_1 = idxs; _i < idxs_1.length; _i++) {
                    var mi = idxs_1[_i];
                    totalRev += _this.computeRevenueSliceForMonthByChannels(year, mi, channelsUsed);
                }
                return { key: c.key, x: c.label, y: Math.round(totalRev || 0) };
            });
            rows.sort(function (a, b) { return b.y - a.y; });
            var palette = pickPalette(Palettes.revenueByCampaign, Math.max(3, rows.length));
            var dataWithColor = rows.map(function (r, i) { return (__assign(__assign({}, r), { color: palette[i % palette.length] })); });
            return (React.createElement("div", { style: { height: '100%', width: '100%', padding: 8, boxSizing: 'border-box' } },
                React.createElement(ej2_react_charts_1.ChartComponent, { id: "revenueByCampaignChart", ref: _this.campaignRevenueChartRef, primaryXAxis: {
                        valueType: 'Category',
                        labelIntersectAction: 'Rotate45',
                        majorGridLines: { width: 0 },
                        majorTickLines: { width: 0 },
                        minorTickLines: { width: 0 },
                        labelStyle: { size: '11px' }
                    }, primaryYAxis: {
                        labelFormat: 'c0',
                        majorGridLines: { width: 0 },
                        majorTickLines: { width: 0 },
                        minorTickLines: { width: 0 },
                        lineStyle: { width: 0 },
                        labelStyle: { size: '11px' }
                    }, chartArea: { border: { width: 0 } }, tooltip: { enable: true, shared: false, format: '${series.name}: ${point.y}' }, legendSettings: { visible: false }, textRender: _this.onRevenueCamapignDataLabelRender, axisLabelRender: _this.onRevenueCamapignAxisLabelRender, tooltipRender: onCurrencyTooltip, load: onChartLoad },
                    React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.BarSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Tooltip, ej2_react_charts_1.DataLabel] }),
                    React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                        React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: dataWithColor, type: "Bar", xName: "x", yName: "y", name: "Revenue", columnWidth: 0.6, pointColorMapping: "color", marker: { dataLabel: { visible: true, position: 'Outer', format: 'C0' } }, animation: { enable: false } })))));
        };
        _this.renderFunnelAdClickToPurchase = function () {
            var _a, _b, _c, _d, _e;
            var year = _this.props.year;
            var monthIdxs = _this.selectedMonthIdxs; // handles ALL_MONTH vs single month
            var channels = _this.getFinalCampaignChannels(); // campaign-aware channels
            var regions = _this.getIncludedRegions();
            // Assumed funnel stage rates (adjust if you want a different shape)
            var VIEW_RATE_BY_CHANNEL = {
                Paid: 0.85,
                Organic: 0.65,
                Email: 0.60,
                Social: 0.55
            };
            var ATC_RATE_BY_CHANNEL = {
                Paid: 0.20,
                Organic: 0.12,
                Email: 0.10,
                Social: 0.08
            };
            var totalClicks = 0;
            var totalViews = 0;
            var totalAtc = 0;
            var totalPurchases = 0;
            for (var _i = 0, monthIdxs_5 = monthIdxs; _i < monthIdxs_5.length; _i++) {
                var mi = monthIdxs_5[_i];
                var crRow = ((_a = channelCRByYear[year]) !== null && _a !== void 0 ? _a : [])[mi]; // channel conversion rates (percent)
                for (var _f = 0, channels_10 = channels; _f < channels_10.length; _f++) {
                    var ch = channels_10[_f];
                    // Sum orders for this channel across selected regions for the month
                    var channelOrders = 0;
                    for (var _g = 0, regions_8 = regions; _g < regions_8.length; _g++) {
                        var rk = regions_8[_g];
                        var row = buildChannelsByRegionYear(year, rk)[mi];
                        if (!row)
                            continue;
                        channelOrders += (_b = row[ch]) !== null && _b !== void 0 ? _b : 0;
                    }
                    // Apply category share filter (same approach used across the dashboard)
                    var categoryShare = _this.computeCategoryShareForMonth(year, mi);
                    var purchasesForChannel = channelOrders * categoryShare;
                    totalPurchases += purchasesForChannel;
                    // Back out visits/clicks from purchases using channel conversion rate (cr % = purchases / visits * 100)
                    var crPct = crRow ? ((_c = crRow[ch]) !== null && _c !== void 0 ? _c : 0) : 0;
                    var visitsForChannel = crPct > 0 ? purchasesForChannel / (crPct / 100) : 0;
                    var clicksForChannel = visitsForChannel; // clicks == visits in this model
                    totalClicks += clicksForChannel;
                    // Product views and ATC derived from clicks by assumed channel rates
                    var viewRate = (_d = VIEW_RATE_BY_CHANNEL[ch]) !== null && _d !== void 0 ? _d : 0.6;
                    var atcRate = (_e = ATC_RATE_BY_CHANNEL[ch]) !== null && _e !== void 0 ? _e : 0.1;
                    var viewsForChannel = clicksForChannel * viewRate;
                    var atcForChannel = viewsForChannel * atcRate;
                    totalViews += viewsForChannel;
                    totalAtc += atcForChannel;
                }
            }
            // Round nicely for display
            var rows = [
                { x: 'Clicks', y: Math.round(totalClicks) },
                { x: 'Product Views', y: Math.round(totalViews) },
                { x: 'Add to Cart', y: Math.round(totalAtc) },
                { x: 'Purchases', y: Math.round(totalPurchases) }
            ];
            // Attractive palette (picked to be clear & accessible)
            var funnelColors = ['#B9005B', '#E97777', '#FF5858', '#554994'];
            return (React.createElement("div", { style: { height: '100%', width: '100%', padding: 8, boxSizing: 'border-box' } },
                React.createElement(ej2_react_charts_1.AccumulationChartComponent, { id: "funnelAdClickToPurchase", ref: _this.funnelChartRef, legendSettings: { visible: true, position: 'Bottom' }, tooltip: { enable: true }, enableBorderOnMouseMove: false, load: onAccumulationLoad, textRender: onTextRender, tooltipRender: onCurrencyTooltip },
                    React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.PyramidSeries, ej2_react_charts_1.AccumulationLegend, ej2_react_charts_1.AccumulationTooltip, ej2_react_charts_1.AccumulationDataLabel] }),
                    React.createElement(ej2_react_charts_1.AccumulationSeriesCollectionDirective, null,
                        React.createElement(ej2_react_charts_1.AccumulationSeriesDirective, { type: "Pyramid", dataSource: rows, xName: "x", yName: "y", neckWidth: "20%", gapRatio: 0.03, palettes: funnelColors, dataLabel: {
                                visible: true,
                                position: 'Outside'
                            }, animation: { enable: false } })))));
        };
        // Ensure shared tooltip shows absolute values (k) instead of % for StackingColumn100
        _this.onStockSharedTooltipRender = function (args) {
            var _a;
            var label = String((_a = args.headerText) !== null && _a !== void 0 ? _a : '');
            var row = (_this.stockCompositionData || []).find(function (d) { return d.m === label; }) || _this.stockCompositionData[0];
            if (!row)
                return;
            args.text = [
                "On-hand: ".concat(Math.round(row.onhand), " units"),
                "Committed: ".concat(Math.round(row.committed), " units")
            ];
        };
        _this.handleCategoryChange = function (e) { return _this.setState({ selectedCategory: String(e.value) }); };
        _this.handleTopItemsCategoryChange = function (e) { return _this.setState({ topItemsCategory: String(e.value) }); };
        // ===========================
        // Product Mix (Share of Total)
        // ===========================
        // palette for product mix
        _this.ProductMixPalette = __spreadArray([], Palettes.productMixTotal, true);
        // stable mapping for category colors (uses productMixTotal)
        _this.ProductMixCategoryColorByName = Object.fromEntries(allCategories.map(function (cat, i) { return [cat, _this.ProductMixPalette[i % _this.ProductMixPalette.length]]; }));
        // stable markers for categories (reuse MarkerShapes)
        _this.ProductMixCategoryMarkerByName = Object.fromEntries(allCategories.map(function (cat, i) { return [cat, MarkerShapes[i % MarkerShapes.length]]; }));
        _this.pmGetCategoryColor = function (cat) { var _a; return (_a = _this.ProductMixCategoryColorByName[cat]) !== null && _a !== void 0 ? _a : _this.ProductMixPalette[0]; };
        _this.pmGetCategoryMarker = function (cat) {
            var _a;
            var shape = (_a = _this.ProductMixCategoryMarkerByName[cat]) !== null && _a !== void 0 ? _a : 'Circle';
            var color = _this.pmGetCategoryColor(cat);
            return {
                visible: true,
                shape: shape,
                width: 8,
                height: 8,
                border: { width: 2, color: color },
                fill: '#ffffff'
            };
        };
        return _this;
    }
    MarketingClass.prototype.componentDidMount = function () {
        window.addEventListener('sidebar-toggled', this.MarketingDashboardCreated);
        window.addEventListener('resize', this.MarketingDashboardCreated);
    };
    MarketingClass.prototype.componentWillUnmount = function () {
        window.removeEventListener('sidebar-toggled', this.MarketingDashboardCreated);
        window.removeEventListener('resize', this.MarketingDashboardCreated);
    };
    MarketingClass.prototype.componentDidUpdate = function (prevProps, prevState) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _o, _p, _q, _r, _s, _t;
        var propsChanged = prevProps.year !== this.props.year ||
            prevProps.monthIndex !== this.props.monthIndex ||
            prevProps.region !== this.props.region ||
            prevProps.campaign !== this.props.campaign ||
            !arrayEqual((_a = prevProps.channels) !== null && _a !== void 0 ? _a : [], (_b = this.props.channels) !== null && _b !== void 0 ? _b : []) ||
            !arrayEqual((_c = prevProps.categories) !== null && _c !== void 0 ? _c : [], (_d = this.props.categories) !== null && _d !== void 0 ? _d : []);
        var stateOutOfSync = this.state.year !== this.props.year ||
            this.state.monthIndex !== this.props.monthIndex ||
            this.state.region !== this.props.region ||
            this.state.campaign !== this.props.campaign ||
            !arrayEqual((_e = this.state.channels) !== null && _e !== void 0 ? _e : [], (_f = this.props.channels) !== null && _f !== void 0 ? _f : []) ||
            !arrayEqual((_g = this.state.categories) !== null && _g !== void 0 ? _g : [], (_h = this.props.categories) !== null && _h !== void 0 ? _h : []);
        if (propsChanged && stateOutOfSync) {
            this.setState({
                year: this.props.year,
                monthIndex: this.props.monthIndex,
                region: this.props.region,
                campaign: (_j = this.props.campaign) !== null && _j !== void 0 ? _j : 'ALL',
                channels: (_k = this.props.channels) !== null && _k !== void 0 ? _k : [],
                categories: (_l = this.props.categories) !== null && _l !== void 0 ? _l : []
            });
            return;
        }
        var anyStateChanged = prevState.year !== this.state.year ||
            prevState.monthIndex !== this.state.monthIndex ||
            prevState.campaign !== this.state.campaign ||
            prevState.region !== this.state.region ||
            !arrayEqual(prevState.channels, this.state.channels) ||
            !arrayEqual(prevState.categories, this.state.categories);
        if (anyStateChanged) {
            (_o = this.promoVsNonPromoChartRef.current) === null || _o === void 0 ? void 0 : _o.refresh();
            (_p = this.discountWaterfallChartRef.current) === null || _p === void 0 ? void 0 : _p.refresh();
            (_q = this.promoEfficiencyBarRef.current) === null || _q === void 0 ? void 0 : _q.refresh();
            (_r = this.campaignPerfGridRef.current) === null || _r === void 0 ? void 0 : _r.refresh();
            (_s = this.campaignRevenueChartRef.current) === null || _s === void 0 ? void 0 : _s.refresh();
            (_t = this.funnelChartRef.current) === null || _t === void 0 ? void 0 : _t.refresh();
        }
    };
    // ===== Formatting helpers =====
    MarketingClass.prototype.currency = function (v) {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(v);
    };
    MarketingClass.prototype.integer = function (v) {
        return new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(v);
    };
    Object.defineProperty(MarketingClass.prototype, "selectedMonthIdxs", {
        // Helper: selected months
        get: function () {
            return this.props.monthIndex === ALL_MONTH
                ? Array.from({ length: 12 }, function (_, i) { return i; })
                : [Math.max(0, Math.min(11, this.props.monthIndex))];
        },
        enumerable: false,
        configurable: true
    });
    // Helpers: regions/channels from filters
    MarketingClass.prototype.getIncludedRegions = function () {
        var r = this.props.region;
        if (r === 'ALL')
            return ['AsiaPacific', 'Europe', 'NorthAmerica', 'LatinAmerica', 'MiddleEastAfrica'];
        return isRegionKey(r) ? [r] : ['AsiaPacific', 'Europe', 'NorthAmerica', 'LatinAmerica', 'MiddleEastAfrica'];
    };
    MarketingClass.prototype.getSelectedChannels = function () {
        var _a;
        var sel = asChannelKeys((_a = this.props.channels) !== null && _a !== void 0 ? _a : []);
        return sel.length ? sel : ALL_CHANNELS;
    };
    MarketingClass.prototype.getFinalPromoChannels = function () {
        var _a, _b;
        var PROMO = ['Paid', 'Email'];
        var campaign = String(this.props.campaign || 'ALL');
        var campaignChs = ((_a = this.CAMPAIGN_PROMO_CHANNELS[campaign]) !== null && _a !== void 0 ? _a : PROMO);
        var selected = asChannelKeys((_b = this.props.channels) !== null && _b !== void 0 ? _b : []);
        var inter = campaignChs.filter(function (ch) { return PROMO.includes(ch) && (selected.length ? selected.includes(ch) : true); });
        if (inter.length > 0)
            return inter; // valid user selection
        var allowedPromo = campaignChs.filter(function (ch) { return PROMO.includes(ch); });
        return allowedPromo.length ? allowedPromo : PROMO; // fallback to promo set
    };
    MarketingClass.prototype.getFinalNonPromoChannels = function () {
        var _a, _b;
        var NONPROMO = ['Organic', 'Social'];
        var campaign = String(this.props.campaign || 'ALL');
        var campaignChs = ((_a = this.CAMPAIGN_PROMO_CHANNELS[campaign]) !== null && _a !== void 0 ? _a : NONPROMO);
        var selected = asChannelKeys((_b = this.props.channels) !== null && _b !== void 0 ? _b : []);
        var inter = campaignChs.filter(function (ch) { return NONPROMO.includes(ch) && (selected.length ? selected.includes(ch) : true); });
        if (inter.length > 0)
            return inter; // valid user selection
        var allowedNonPromo = campaignChs.filter(function (ch) { return NONPROMO.includes(ch); });
        return allowedNonPromo.length ? allowedNonPromo : NONPROMO; // fallback to non‑promo set
    };
    // Helpers to get revenue for given channels (filters: region + categories applied inside)
    MarketingClass.prototype.revenueForMonthByChannels = function (year, monthIdx, channels) {
        return this.computeRevenueSliceForMonthByChannels(year, monthIdx, channels);
    };
    // Category share for a month (sum of selected categories proportion of units)
    MarketingClass.prototype.computeCategoryShareForMonth = function (year, monthIdx) {
        var _a, _b, _c, _d, _e;
        var products = buildYearProductSales(year);
        var totalUnits = 0;
        var byCat = {};
        for (var _i = 0, products_6 = products; _i < products_6.length; _i++) {
            var p = products_6[_i];
            var u = (_b = (_a = p.monthly) === null || _a === void 0 ? void 0 : _a[monthIdx]) !== null && _b !== void 0 ? _b : 0;
            totalUnits += u;
            byCat[p.category] = ((_c = byCat[p.category]) !== null && _c !== void 0 ? _c : 0) + u;
        }
        var selectedCats = (_d = this.props.categories) !== null && _d !== void 0 ? _d : [];
        if (!selectedCats.length)
            return 1;
        var sum = 0;
        for (var _f = 0, selectedCats_3 = selectedCats; _f < selectedCats_3.length; _f++) {
            var c = selectedCats_3[_f];
            sum += totalUnits > 0 ? ((_e = byCat[c]) !== null && _e !== void 0 ? _e : 0) / totalUnits : 0;
        }
        return sum || 0;
    };
    // Denominator orders: all regions, all channels
    MarketingClass.prototype.denomOrdersAllRegionsAllChannels = function (year, monthIdx) {
        var _a, _b, _c, _d;
        var sum = 0;
        for (var _i = 0, _e = ['AsiaPacific', 'Europe', 'NorthAmerica', 'LatinAmerica', 'MiddleEastAfrica']; _i < _e.length; _i++) {
            var r = _e[_i];
            var row = buildChannelsByRegionYear(year, r)[monthIdx];
            if (!row)
                continue;
            sum += ((_a = row.Paid) !== null && _a !== void 0 ? _a : 0) + ((_b = row.Organic) !== null && _b !== void 0 ? _b : 0) + ((_c = row.Email) !== null && _c !== void 0 ? _c : 0) + ((_d = row.Social) !== null && _d !== void 0 ? _d : 0);
        }
        return sum;
    };
    // Included orders (regions + final promo channels), before category share
    MarketingClass.prototype.includedPromoOrdersForMonth = function (year, monthIdx) {
        var _a;
        var regions = this.getIncludedRegions();
        var promoChs = this.getFinalPromoChannels();
        var sum = 0;
        for (var _i = 0, regions_9 = regions; _i < regions_9.length; _i++) {
            var r = regions_9[_i];
            var row = buildChannelsByRegionYear(year, r)[monthIdx];
            if (!row)
                continue;
            for (var _b = 0, promoChs_1 = promoChs; _b < promoChs_1.length; _b++) {
                var ch = promoChs_1[_b];
                sum += (_a = row[ch]) !== null && _a !== void 0 ? _a : 0;
            }
        }
        return sum;
    };
    // Promo revenue for a month = master revenue * (included orders / denom orders) * category share
    MarketingClass.prototype.promoRevenueForMonth = function (year, monthIdx) {
        var _a, _b;
        var master = ((_a = monthlyRevenueByYear[year]) !== null && _a !== void 0 ? _a : [])[monthIdx];
        var actual = (_b = master === null || master === void 0 ? void 0 : master.actual) !== null && _b !== void 0 ? _b : 0;
        if (actual <= 0)
            return 0;
        var denom = this.denomOrdersAllRegionsAllChannels(year, monthIdx) || 1;
        var includedNoCat = this.includedPromoOrdersForMonth(year, monthIdx);
        var rcFactor = includedNoCat / denom;
        var catFactor = this.computeCategoryShareForMonth(year, monthIdx);
        return actual * rcFactor * catFactor;
    };
    MarketingClass.prototype.totalPromoRevenueForRange = function (year, idxs) {
        var _this = this;
        return idxs.reduce(function (s, i) { return s + _this.promoRevenueForMonth(year, i); }, 0);
    };
    MarketingClass.prototype.buildPromoSparkSeries = function (year) {
        var _this = this;
        return months.map(function (m, i) { return ({ x: m, y: Math.round(_this.promoRevenueForMonth(year, i)) }); });
    };
    // Badge tone helper
    MarketingClass.prototype.trendTone = function (dir) {
        return dir === 'up' ? 'good' : dir === 'down' ? 'bad' : 'neutral';
    };
    // Channels for metrics: campaign channels ∩ user-selected channels (or sensible defaults)
    MarketingClass.prototype.getFinalCampaignChannels = function () {
        var _a, _b;
        var campaign = String(this.props.campaign || 'ALL');
        var campaignChs = ((_a = this.CAMPAIGN_PROMO_CHANNELS[campaign]) !== null && _a !== void 0 ? _a : ALL_CHANNELS);
        var selected = asChannelKeys((_b = this.props.channels) !== null && _b !== void 0 ? _b : []);
        if (selected.length === 0) {
            return campaign === 'ALL' ? ALL_CHANNELS : campaignChs;
        }
        return campaignChs.filter(function (ch) { return selected.includes(ch); });
    };
    // Orders across ALL regions but only for given channels (denominator helper)
    MarketingClass.prototype.denomOrdersForChannels = function (year, monthIdx, channels) {
        var _a;
        var denom = 0;
        for (var _i = 0, _b = ['AsiaPacific', 'Europe', 'NorthAmerica', 'LatinAmerica', 'MiddleEastAfrica']; _i < _b.length; _i++) {
            var region = _b[_i];
            var row = buildChannelsByRegionYear(year, region)[monthIdx];
            if (!row)
                continue;
            for (var _c = 0, channels_11 = channels; _c < channels_11.length; _c++) {
                var ch = channels_11[_c];
                denom += (_a = row[ch]) !== null && _a !== void 0 ? _a : 0;
            }
        }
        return denom;
    };
    // Included orders for selected Regions and Channels (optionally apply Category share)
    MarketingClass.prototype.includedOrdersForMonthByChannels = function (year, monthIdx, channels, withCategory) {
        var _a;
        var sum = 0;
        for (var _i = 0, _b = this.getIncludedRegions(); _i < _b.length; _i++) {
            var region = _b[_i];
            var row = buildChannelsByRegionYear(year, region)[monthIdx];
            if (!row)
                continue;
            for (var _c = 0, channels_12 = channels; _c < channels_12.length; _c++) {
                var ch = channels_12[_c];
                sum += (_a = row[ch]) !== null && _a !== void 0 ? _a : 0;
            }
        }
        if (!withCategory)
            return sum;
        var catShare = this.computeCategoryShareForMonth(year, monthIdx);
        return sum * catShare;
    };
    // Revenue slice for selected channels (region+channels factor vs ALL orders) * category share
    MarketingClass.prototype.computeRevenueSliceForMonthByChannels = function (year, monthIdx, channels) {
        var _a, _b, _c;
        var masterActual = (_c = (_b = ((_a = monthlyRevenueByYear[year]) !== null && _a !== void 0 ? _a : [])[monthIdx]) === null || _b === void 0 ? void 0 : _b.actual) !== null && _c !== void 0 ? _c : 0;
        if (masterActual <= 0)
            return 0;
        var denomAll = this.denomOrdersAllRegionsAllChannels(year, monthIdx) || 1;
        var includedNoCat = this.includedOrdersForMonthByChannels(year, monthIdx, channels, false);
        var rcFactor = includedNoCat / denomAll;
        var catFactor = this.computeCategoryShareForMonth(year, monthIdx);
        return masterActual * rcFactor * catFactor;
    };
    // Spend slice for selected channels (use region allocation via orders share within those channels) * category share
    MarketingClass.prototype.computeSpendSliceForMonthByChannels = function (year, monthIdx, channels) {
        var _a;
        var rows = (_a = spendByYear[year]) !== null && _a !== void 0 ? _a : [];
        var r = rows[monthIdx];
        if (!r)
            return 0;
        var monthSpend = channels.reduce(function (s, ch) { var _a; return s + ((_a = r[ch]) !== null && _a !== void 0 ? _a : 0); }, 0);
        // Allocation by region share of orders within provided channels
        var includedNoCat = this.includedOrdersForMonthByChannels(year, monthIdx, channels, false);
        var denomCh = this.denomOrdersForChannels(year, monthIdx, channels) || 1;
        var rcFactor = includedNoCat / denomCh;
        var catFactor = this.computeCategoryShareForMonth(year, monthIdx);
        return monthSpend * rcFactor * catFactor;
    };
    // Per-month metrics for current filters
    MarketingClass.prototype.metricsForMonth = function (year, monthIdx) {
        var _a, _b, _c, _d;
        var channels = this.getFinalCampaignChannels();
        // Orders (with category)
        var orders = this.includedOrdersForMonthByChannels(year, monthIdx, channels, true);
        // Spend and revenue slices (filtered)
        var spend = this.computeSpendSliceForMonthByChannels(year, monthIdx, channels);
        var revenue = this.computeRevenueSliceForMonthByChannels(year, monthIdx, channels);
        // Visits/Clicks (derive from orders and channel CR) and Impressions (via CTR assumptions)
        var crRow = ((_a = channelCRByYear[year]) !== null && _a !== void 0 ? _a : [])[monthIdx];
        var visits = 0;
        var clicks = 0;
        var impressions = 0;
        if (crRow) {
            // Distribute orders by channel (with category) to back out visits
            for (var _i = 0, channels_13 = channels; _i < channels_13.length; _i++) {
                var ch = channels_13[_i];
                // Orders for this channel (with category)
                var chOrders = 0;
                for (var _e = 0, _f = this.getIncludedRegions(); _e < _f.length; _e++) {
                    var region = _f[_e];
                    var row = buildChannelsByRegionYear(year, region)[monthIdx];
                    if (!row)
                        continue;
                    chOrders += ((_b = row[ch]) !== null && _b !== void 0 ? _b : 0);
                }
                // Apply category filter
                chOrders *= this.computeCategoryShareForMonth(year, monthIdx);
                var crPct = (_c = crRow[ch]) !== null && _c !== void 0 ? _c : 0; // conversion rate %
                var chVisits = crPct > 0 ? (chOrders / (crPct / 100)) : 0;
                var chClicks = chVisits; // assume 1:1 click→visit
                var ctr = (_d = this.CTR_ASSUMPTION[ch]) !== null && _d !== void 0 ? _d : 0.02;
                var chImpr = ctr > 0 ? (chClicks / ctr) : 0;
                visits += chVisits;
                clicks += chClicks;
                impressions += chImpr;
            }
        }
        var roas = spend > 0 ? (revenue / spend) : null;
        var ctrPct = impressions > 0 ? (clicks / impressions) * 100 : 0;
        var cpc = clicks > 0 ? (spend / clicks) : null;
        var cpa = orders > 0 ? (spend / orders) : null;
        return { spend: spend, revenue: revenue, orders: orders, visits: visits, clicks: clicks, impressions: impressions, roas: roas, ctrPct: ctrPct, cpc: cpc, cpa: cpa };
    };
    // Aggregate metrics across a range of months (yearly or single month)
    MarketingClass.prototype.metricsForRange = function (year, idxs) {
        var spend = 0, revenue = 0, orders = 0, visits = 0, clicks = 0, impressions = 0;
        for (var _i = 0, idxs_2 = idxs; _i < idxs_2.length; _i++) {
            var i = idxs_2[_i];
            var m = this.metricsForMonth(year, i);
            spend += m.spend;
            revenue += m.revenue;
            orders += m.orders;
            visits += m.visits;
            clicks += m.clicks;
            impressions += m.impressions;
        }
        var roas = spend > 0 ? (revenue / spend) : null;
        var ctrPct = impressions > 0 ? (clicks / impressions) * 100 : 0;
        var cpc = clicks > 0 ? (spend / clicks) : null;
        var cpa = orders > 0 ? (spend / orders) : null;
        return { spend: spend, revenue: revenue, orders: orders, visits: visits, clicks: clicks, impressions: impressions, roas: roas, ctrPct: ctrPct, cpc: cpc, cpa: cpa };
    };
    // Blended COGS rate based on selected product categories for a month
    MarketingClass.prototype.blendedCogsRateForSelectionMonth = function (year, monthIdx) {
        var _a, _b, _c;
        var products = buildYearProductSales(year);
        var selCats = (_a = this.props.categories) !== null && _a !== void 0 ? _a : [];
        var filtered = selCats.length ? products.filter(function (p) { return selCats.includes(p.category); }) : products;
        var rev = 0;
        var cogs = 0;
        for (var _i = 0, filtered_1 = filtered; _i < filtered_1.length; _i++) {
            var p = filtered_1[_i];
            var units = Math.max(0, (_b = p.monthly[monthIdx]) !== null && _b !== void 0 ? _b : 0);
            var _d = (_c = ProductPricing[p.name]) !== null && _c !== void 0 ? _c : { price: 50, marginPct: 0.30 }, price = _d.price, marginPct = _d.marginPct;
            var sales = units * price;
            var cost = sales * (1 - marginPct);
            rev += sales;
            cogs += cost;
        }
        if (rev <= 0)
            return 0.65; // fallback
        return Math.min(0.95, Math.max(0.10, cogs / rev));
    };
    // Month-level waterfall components under filters
    MarketingClass.prototype.discountWaterfallForMonth = function (year, monthIdx) {
        var includedChs = this.getFinalCampaignChannels();
        // Gross = revenue slice (region + channels + category)
        var gross = Math.max(0, this.computeRevenueSliceForMonthByChannels(year, monthIdx, includedChs));
        // Discounts split by Promo vs Non‑Promo (using campaign-aware intersections)
        var promoChsAll = this.getFinalPromoChannels();
        var nonPromoChsAll = this.getFinalNonPromoChannels();
        var promoChs = includedChs.filter(function (c) { return promoChsAll.includes(c); });
        var nonPromoChs = includedChs.filter(function (c) { return nonPromoChsAll.includes(c); });
        var promoRev = promoChs.length ? this.computeRevenueSliceForMonthByChannels(year, monthIdx, promoChs) : 0;
        var nonPromoRev = nonPromoChs.length ? this.computeRevenueSliceForMonthByChannels(year, monthIdx, nonPromoChs) : 0;
        var discounts = Math.max(0, (promoRev * this.promoDiscountPct) + (nonPromoRev * this.nonPromoDiscountPct));
        var netSales = Math.max(0, gross - discounts);
        // COGS from blended rate (selected categories)
        var cogsRate = this.blendedCogsRateForSelectionMonth(year, monthIdx);
        var cogs = Math.max(0, netSales * cogsRate);
        var grossMargin = Math.max(0, netSales - cogs);
        return { gross: gross, discounts: discounts, netSales: netSales, cogs: cogs, grossMargin: grossMargin };
    };
    // Range (year or single month) aggregation
    MarketingClass.prototype.discountWaterfallForRange = function (year, idxs) {
        var gross = 0, discounts = 0, netSales = 0, cogs = 0, grossMargin = 0;
        for (var _i = 0, idxs_3 = idxs; _i < idxs_3.length; _i++) {
            var i = idxs_3[_i];
            var r = this.discountWaterfallForMonth(year, i);
            gross += r.gross;
            discounts += r.discounts;
            netSales += r.netSales;
            cogs += r.cogs;
            grossMargin += r.grossMargin;
        }
        return { gross: gross, discounts: discounts, netSales: netSales, cogs: cogs, grossMargin: grossMargin };
    };
    // Add helper to build campaign performance rows (filter-aware)
    MarketingClass.prototype.buildCampaignPerformanceRows = function () {
        var _this = this;
        var _a, _b;
        var year = this.props.year;
        var idxs = this.selectedMonthIdxs;
        // Selected channels filter (if user selected)
        var selectedChannels = asChannelKeys((_a = this.props.channels) !== null && _a !== void 0 ? _a : []);
        var hasChannelSelection = selectedChannels.length > 0;
        var rows = [];
        // iterate campaigns from CAMPAIGN_OPTIONS (value keys match CAMPAIGN_PROMO_CHANNELS)
        var campaigns = CAMPAIGN_OPTIONS.map(function (c) { return ({ key: c.value, text: c.text }); });
        var pickCampaigns = this.props.campaign && this.props.campaign !== 'ALL'
            ? campaigns.filter(function (c) { return c.key === _this.props.campaign; })
            : campaigns;
        for (var _i = 0, pickCampaigns_1 = pickCampaigns; _i < pickCampaigns_1.length; _i++) {
            var c = pickCampaigns_1[_i];
            var spendSum = 0;
            var revSum = 0;
            var convSum = 0;
            // campaign allowed channels (campaign mapping)
            var campaignAllowed = ((_b = this.CAMPAIGN_PROMO_CHANNELS[c.key]) !== null && _b !== void 0 ? _b : ALL_CHANNELS);
            for (var _c = 0, idxs_4 = idxs; _c < idxs_4.length; _c++) {
                var mi = idxs_4[_c];
                // channels to use = campaignAllowed ∩ (selectedChannels || campaignAllowed)
                var channelsUsed = hasChannelSelection ? campaignAllowed.filter(function (ch) { return selectedChannels.includes(ch); }) : campaignAllowed;
                if (channelsUsed.length === 0)
                    continue;
                // spend / revenue / conversions for month for those channels (filter-aware: region + category applied inside)
                var monthSpend = this.computeSpendSliceForMonthByChannels(year, mi, channelsUsed);
                var monthRevenue = this.computeRevenueSliceForMonthByChannels(year, mi, channelsUsed);
                var monthConversions = this.includedOrdersForMonthByChannels(year, mi, channelsUsed, true);
                spendSum += monthSpend;
                revSum += monthRevenue;
                convSum += monthConversions;
            }
            var profit = revSum - spendSum;
            var roas = spendSum > 0 ? (revSum / spendSum) : null;
            rows.push({
                campaignKey: c.key,
                campaign: c.text,
                cost: Math.round(spendSum),
                revenue: Math.round(revSum),
                profit: Math.round(profit),
                roas: roas === null ? null : +(roas),
                conversions: Math.round(convSum)
            });
        }
        // sort by revenue desc by default
        rows.sort(function (a, b) { var _a, _b; return ((_a = b.revenue) !== null && _a !== void 0 ? _a : 0) - ((_b = a.revenue) !== null && _b !== void 0 ? _b : 0); });
        return rows;
    };
    MarketingClass.prototype.promoEfficiencyGrossVsCostsForMonth = function (year, monthIdx) {
        var _a, _b;
        var w = this.discountWaterfallForMonth(year, monthIdx);
        var gross = Math.max(0, w.gross);
        var totalCosts = Math.max(0, ((_a = w.discounts) !== null && _a !== void 0 ? _a : 0) + ((_b = w.cogs) !== null && _b !== void 0 ? _b : 0));
        return { gross: gross, totalCosts: totalCosts };
    };
    MarketingClass.prototype.promoEfficiencyGrossVsCostsSeries = function (year, idxs) {
        var _this = this;
        return idxs.map(function (i) {
            var v = _this.promoEfficiencyGrossVsCostsForMonth(year, i);
            return { m: months[i], gross: v.gross, costs: v.totalCosts };
        });
    };
    Object.defineProperty(MarketingClass.prototype, "catSeriesData", {
        get: function () {
            var byCat = this.props.monthIndex === ALL_MONTH
                ? buildCategoryMonthlyTotalsByYear(this.props.year)
                : buildCategoryTotalsForSingleMonth(this.props.year, this.props.monthIndex);
            var cats = this.state.selectedCategory === 'All Categories'
                ? allCategories.slice()
                : [this.state.selectedCategory];
            var series = cats.map(function (cat) { var _a; return ({ name: cat, data: (_a = byCat[cat]) !== null && _a !== void 0 ? _a : [] }); });
            var total = function (s) { return s.data.reduce(function (a, p) { return a + (p.value || 0); }, 0); };
            series.sort(function (a, b) { return total(b) - total(a); });
            return series;
        },
        enumerable: false,
        configurable: true
    });
    // Build monthly total orders across all regions (Paid+Organic+Email+Social)
    MarketingClass.prototype.buildOrdersTotalsByMonth = function (year) {
        var ap = buildChannelsByRegionYear(year, 'AsiaPacific');
        var eu = buildChannelsByRegionYear(year, 'Europe');
        var na = buildChannelsByRegionYear(year, 'NorthAmerica');
        var la = buildChannelsByRegionYear(year, 'LatinAmerica');
        var mea = buildChannelsByRegionYear(year, 'MiddleEastAfrica');
        return months.map(function (m, i) {
            var sumFor = function (r) { var _a, _b, _c, _d; return ((_a = r === null || r === void 0 ? void 0 : r.Paid) !== null && _a !== void 0 ? _a : 0) + ((_b = r === null || r === void 0 ? void 0 : r.Organic) !== null && _b !== void 0 ? _b : 0) + ((_c = r === null || r === void 0 ? void 0 : r.Email) !== null && _c !== void 0 ? _c : 0) + ((_d = r === null || r === void 0 ? void 0 : r.Social) !== null && _d !== void 0 ? _d : 0); };
            var total = sumFor(ap[i]) + sumFor(eu[i]) + sumFor(na[i]) + sumFor(la[i]) + sumFor(mea[i]);
            return { m: m, total: total };
        });
    };
    Object.defineProperty(MarketingClass.prototype, "stockCompositionData", {
        // Stock composition dataset (On-hand vs Committed)
        get: function () {
            var year = this.props.year;
            var orders = this.buildOrdersTotalsByMonth(year); // committed = total demand
            var all = months.map(function (m, i) {
                var _a, _b, _c;
                var committed = Math.max((_b = (_a = orders[i]) === null || _a === void 0 ? void 0 : _a.total) !== null && _b !== void 0 ? _b : 0, 0);
                var coverRatio = (_c = supplyCoverByMonth[i]) !== null && _c !== void 0 ? _c : 1.0;
                var onhand = Math.max(committed * Math.max(coverRatio, 0), 0); // same supply model
                return { m: m, onhand: onhand, committed: committed };
            });
            if (this.props.monthIndex === ALL_MONTH)
                return all;
            var i = this.props.monthIndex;
            return all[i] ? [all[i]] : [];
        },
        enumerable: false,
        configurable: true
    });
    MarketingClass.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "Container" },
            React.createElement("div", { className: "sidebar-content" },
                React.createElement(ej2_react_layouts_1.DashboardLayoutComponent, { ref: this.MarketingRef, id: "ecommerce_marketing_promo_dashboard", columns: 8, cellAspectRatio: 1, cellSpacing: [12, 12], allowResizing: false, allowDragging: false, created: this.MarketingDashboardCreated, mediaQuery: "(max-width:950px)" },
                    React.createElement(ej2_react_layouts_1.PanelsDirective, null,
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 4, sizeY: 1, row: 0, col: 0, content: function () { return _this.promoRevenueContent(); } }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 4, sizeY: 1, row: 0, col: 4, content: function () { return _this.roasContent(); } }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 2, col: 0, content: function () { return _this.impressionsContent(); } }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 2, col: 2, content: function () { return _this.clicksContent(); } }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 2, col: 4, content: function () { return _this.ctrContent(); } }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 2, col: 6, content: function () { return _this.cpcOnlyContent(); } }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 4, sizeY: 3, row: 4, col: 0, header: "<div>Promotion vs Non\u2011Promotion Sales Analysis</div>", content: function () { return _this.renderPromoVsNonPromo(); } }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 4, sizeY: 3, row: 4, col: 4, header: "<div>Discount Impact Breakdown</div>", content: function () { return _this.renderDiscountWaterfall(); } }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 8, sizeY: 3, row: 7, col: 0, header: "<div>Promotion Efficiency Analysis</div>", content: function () { return _this.renderPromoEfficiency(); } }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 8, sizeY: 4, row: 10, col: 0, header: "<div>Campaign Performance Analysis</div>", content: function () { return _this.renderCampaignPerformanceTable(); } }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 3, sizeY: 3, row: 15, col: 0, header: "<div>Campaign Revenue Analysis</div>", content: function () { return _this.renderRevenueByCampaign(); } }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 5, sizeY: 3, row: 15, col: 3, header: "<div>Ad\u2011to\u2011Purchase Funnel Analysis</div>", content: function () { return _this.renderFunnelAdClickToPurchase(); } }))))));
    };
    return MarketingClass;
}(React.Component));
var ProductMixPanel = /** @class */ (function (_super) {
    __extends(ProductMixPanel, _super);
    function ProductMixPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.donutRef = React.createRef();
        _this.state = { drillCategory: null };
        _this.refreshProductMixDonut = function () { var _a; return (_a = _this.donutRef.current) === null || _a === void 0 ? void 0 : _a.refresh(); };
        _this.clearLingeringTooltip = function (chartId) {
            var _a;
            try {
                var id = chartId !== null && chartId !== void 0 ? chartId : (_this.state.drillCategory ? 'productMixDonutFiltered_drill' : 'productMixDonutFiltered');
                // Common Syncfusion chart tooltip id pattern
                var t1 = document.getElementById("".concat(id, "_tooltip"));
                if (t1 && t1.parentElement)
                    t1.parentElement.removeChild(t1);
                // Fallback: remove any tooltip nodes inside this chart host
                var host = (_a = _this.donutRef.current) === null || _a === void 0 ? void 0 : _a.element;
                if (host) {
                    host.querySelectorAll('.e-tooltip-wrap, .e-chart-tooltip').forEach(function (n) { var _a; return (_a = n.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(n); });
                }
            }
            catch (_b) { }
        };
        _this.onPointClick = function (args) {
            var _a, _b, _c, _d, _e;
            var raw = (_e = (_c = (_b = (_a = args === null || args === void 0 ? void 0 : args.point) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.x) !== null && _c !== void 0 ? _c : (_d = args === null || args === void 0 ? void 0 : args.point) === null || _d === void 0 ? void 0 : _d.x) !== null && _e !== void 0 ? _e : '';
            var key = String(raw).replace(/\s*\(\s*\d+%?\s*\)\s*$/, '').trim();
            if (!key)
                return;
            // Clear tooltip from base view before switching to drill
            _this.clearLingeringTooltip('productMixDonutFiltered');
            _this.setState(function (s) { return ({ drillCategory: s.drillCategory === key ? null : key }); });
        };
        _this.onBack = function () {
            // Clear tooltip from drill view before returning
            _this.clearLingeringTooltip('productMixDonutFiltered_drill');
            _this.setState({ drillCategory: null });
        };
        _this.productMixDataLabelRender = function (args) {
            var _a, _b, _c, _d;
            var val = Number((_a = args === null || args === void 0 ? void 0 : args.point) === null || _a === void 0 ? void 0 : _a.y);
            if (!isFinite(val))
                return;
            // Prefer precomputed pct on the data object; else derive from series points
            var pctFromData = Number((_c = (_b = args === null || args === void 0 ? void 0 : args.point) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.pct);
            var pct = isFinite(pctFromData) ? Math.round(pctFromData) : NaN;
            if (!isFinite(pct)) {
                var pts = Array.isArray((_d = args === null || args === void 0 ? void 0 : args.series) === null || _d === void 0 ? void 0 : _d.points) ? args.series.points : [];
                var sum = pts.reduce(function (s, p) { return s + (Number(p === null || p === void 0 ? void 0 : p.y) || 0); }, 0);
                pct = sum > 0 ? Math.round((val / sum) * 100) : 0;
            }
            args.text = "".concat(_this.currency0(val), " (").concat(pct, "%)");
        };
        _this.currency0 = function (v) {
            return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
                .format(Math.round(Number(v || 0)));
        };
        return _this;
    }
    ProductMixPanel.prototype.componentDidMount = function () {
        var _a, _b;
        (_b = (_a = this.props).onReady) === null || _b === void 0 ? void 0 : _b.call(_a, { refreshProductMixDonut: this.refreshProductMixDonut });
    };
    ProductMixPanel.prototype.componentDidUpdate = function (prev, prevState) {
        var _a;
        var propsChanged = prev.year !== this.props.year ||
            prev.monthIndex !== this.props.monthIndex ||
            prev.categories !== this.props.categories ||
            prev.brand !== this.props.brand ||
            prev.region !== this.props.region ||
            prev.warehouse !== this.props.warehouse;
        var drillChanged = prevState.drillCategory !== this.state.drillCategory;
        if (propsChanged || drillChanged) {
            if (drillChanged)
                this.clearLingeringTooltip(); // ensure old tooltip is gone when view switches
            (_a = this.donutRef.current) === null || _a === void 0 ? void 0 : _a.refresh();
        }
    };
    ProductMixPanel.prototype.filteredProducts = function () {
        var _this = this;
        return mixedProducts.filter(function (p) {
            var cats = _this.props.categories;
            var catOk = cats === 'ALL' ||
                (Array.isArray(cats) ? (cats.length === 0 || cats.includes('ALL') || cats.includes(p.category)) : p.category === cats);
            var brandOk = _this.props.brand === 'ALL' || p.brand === _this.props.brand;
            var whOk = _this.props.warehouse === 'ALL' || p.warehouse === _this.props.warehouse;
            return catOk && brandOk && whOk;
        });
    };
    ProductMixPanel.prototype.regionFactor = function (year, monthIdx) {
        var _a, _b, _c, _d, _e, _f;
        var r = this.props.region;
        if (r === 'ALL' || !isRegionKey(r))
            return 1;
        var regions = buildRegionMonthlyByYear(year)[monthIdx];
        if (!regions)
            return 1;
        var sum = ((_a = regions.AsiaPacific) !== null && _a !== void 0 ? _a : 0) + ((_b = regions.Europe) !== null && _b !== void 0 ? _b : 0) + ((_c = regions.NorthAmerica) !== null && _c !== void 0 ? _c : 0) + ((_d = regions.LatinAmerica) !== null && _d !== void 0 ? _d : 0) + ((_e = regions.MiddleEastAfrica) !== null && _e !== void 0 ? _e : 0);
        var part = (_f = regions[r]) !== null && _f !== void 0 ? _f : 0;
        return sum > 0 ? (part / sum) : 1;
    };
    ProductMixPanel.prototype.unitsForProductMonth = function (year, monthIdx, productName) {
        var _a, _b;
        var prods = buildYearProductSales(year);
        var row = prods.find(function (p) { return p.name === productName; });
        var baseUnits = Math.max(0, (_b = (_a = row === null || row === void 0 ? void 0 : row.monthly) === null || _a === void 0 ? void 0 : _a[monthIdx]) !== null && _b !== void 0 ? _b : 0);
        var rf = this.regionFactor(year, monthIdx);
        return baseUnits * rf;
    };
    ProductMixPanel.prototype.buildData = function () {
        var _this = this;
        var _a, _b, _c, _d;
        var _e = this.props, year = _e.year, monthIndex = _e.monthIndex;
        var isYearly = monthIndex === ALL_MONTH;
        var monthIdxs = isYearly ? Array.from({ length: 12 }, function (_, i) { return i; }) : [Math.max(0, Math.min(11, monthIndex))];
        var products = this.filteredProducts();
        var prodRevenue = {};
        for (var _i = 0, products_7 = products; _i < products_7.length; _i++) {
            var p = products_7[_i];
            var rev = 0;
            for (var _f = 0, monthIdxs_6 = monthIdxs; _f < monthIdxs_6.length; _f++) {
                var mi = monthIdxs_6[_f];
                // price * units (region factor already applied in unitsForProductMonth)
                var units = this.unitsForProductMonth(year, mi, p.name);
                var price = (_b = (_a = ProductPricing[p.name]) === null || _a === void 0 ? void 0 : _a.price) !== null && _b !== void 0 ? _b : 50;
                rev += units * price;
            }
            prodRevenue[p.name] = rev;
        }
        var catAgg = {};
        for (var _g = 0, products_8 = products; _g < products_8.length; _g++) {
            var p = products_8[_g];
            catAgg[p.category] = ((_c = catAgg[p.category]) !== null && _c !== void 0 ? _c : 0) + ((_d = prodRevenue[p.name]) !== null && _d !== void 0 ? _d : 0);
        }
        var catDataRaw = Object.keys(catAgg)
            .map(function (k) { return ({ x: k, y: Math.round(catAgg[k] || 0) }); })
            .filter(function (d) { return d.y > 0; })
            .sort(function (a, b) { return b.y - a.y; });
        var total = catDataRaw.reduce(function (s, d) { return s + d.y; }, 0);
        // attach pct for data label; legendText now only the category name
        var catData = catDataRaw.map(function (d) {
            var pct = total > 0 ? Math.round(((d.y || 0) / total) * 100) : 0;
            return __assign(__assign({}, d), { legendText: String(d.x), pct: pct });
        });
        // Drill to top products within selected category
        var drillTitle = '';
        var drillData = [];
        if (this.state.drillCategory) {
            drillTitle = "Top Products \u2022 ".concat(this.state.drillCategory);
            drillData = products
                .filter(function (p) { return p.category === _this.state.drillCategory; })
                .map(function (p) { return ({ x: p.name, y: Math.round(prodRevenue[p.name] || 0) }); })
                .filter(function (r) { return r.y > 0; })
                .sort(function (a, b) { return b.y - a.y; })
                .slice(0, 10);
            var drillTotal_2 = drillData.reduce(function (s, d) { return s + (d.y || 0); }, 0) || 1;
            // attach pct for labels; legend shows only product name
            drillData = drillData.map(function (d) {
                var pct = drillTotal_2 > 0 ? Math.round(((d.y || 0) / drillTotal_2) * 100) : 0;
                return __assign(__assign({}, d), { legendText: String(d.x), pct: pct });
            });
        }
        return { catData: catData, drillData: drillData, total: total };
    };
    ProductMixPanel.prototype.render = function () {
        var _a = this.props, year = _a.year, monthIndex = _a.monthIndex;
        var isYearly = monthIndex === ALL_MONTH;
        var title = "Product Mix";
        var _b = this.buildData(), catData = _b.catData, drillData = _b.drillData, total = _b.total;
        var drilled = !!this.state.drillCategory;
        var dataSource = drilled ? drillData : catData;
        var chartId = drilled ? 'productMixDonutFiltered_drill' : 'productMixDonutFiltered';
        if (!drilled && catData.length === 0) {
            return (React.createElement("div", { style: { padding: 12, background: '#fff', borderRadius: 10 } },
                React.createElement("div", { className: 'commerce-section-title' }, title),
                React.createElement("div", { style: { marginTop: 18, color: '#6b7280' } }, "No data for selected filters")));
        }
        var basePalette = pickPalette(Palettes.productMixTotal, Math.max(1, dataSource.length));
        var drillPalette = pickPalette(Palettes.categorical, Math.max(1, dataSource.length));
        return (React.createElement("div", { style: { height: '100%', width: '100%', padding: 8, boxSizing: 'border-box' } },
            React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 } },
                drilled && React.createElement("button", { className: "e-btn e-outline", onClick: this.onBack }, "Back"),
                drilled && (React.createElement("div", { style: { fontWeight: 600, marginLeft: "8px" } },
                    "Top Products \u2022 ",
                    this.state.drillCategory))),
            React.createElement("div", { style: { height: 'calc(100% - 10px)' } },
                React.createElement(ej2_react_charts_1.AccumulationChartComponent, { key: chartId, id: chartId, ref: this.donutRef, tooltip: { enable: true }, pointClick: !drilled ? this.onPointClick : undefined, legendSettings: { visible: true, position: 'Right' }, textRender: onTextRender, tooltipRender: onCurrencyTooltip, load: onAccumulationLoad },
                    React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.PieSeries, ej2_react_charts_1.AccumulationLegend, ej2_react_charts_1.AccumulationTooltip, ej2_react_charts_1.AccumulationDataLabel] }),
                    React.createElement(ej2_react_charts_1.AccumulationSeriesCollectionDirective, null,
                        React.createElement(ej2_react_charts_1.AccumulationSeriesDirective, { type: "Pie", dataSource: dataSource, xName: "legendText", yName: "y", innerRadius: "60%", palettes: (drilled ? drillPalette : basePalette), dataLabel: { visible: true, position: 'Outside', connectorStyle: { length: '10px' }, name: 'y', font: { size: '12px' } }, animation: { enable: false }, borderRadius: 10, border: { width: 4, color: '#ffffff' } }))))));
    };
    return ProductMixPanel;
}(React.PureComponent));
var COLOR_ONHAND = '#FF9AA2'; // match your red-tint palette
var COLOR_COMMITTED = '#F5C6A5'; // beige-tint
var COLOR_STOCKOUTS = '#FF5858'; // bars in drill
var COLOR_COVER = '#90AACB'; // line in drill
var nz = function (v) { return Number.isFinite(+v) ? +v : 0; };
var StockCompositionPanel = /** @class */ (function (_super) {
    __extends(StockCompositionPanel, _super);
    function StockCompositionPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mainRef = React.createRef();
        _this.drillRef = React.createRef();
        _this.state = { drillCategory: null };
        _this.onMainChartMouseClick = function (args) {
            var _a, _b, _c, _d, _e, _f, _g;
            if (_this.state.drillCategory)
                return;
            var target = String((args === null || args === void 0 ? void 0 : args.target) || '');
            // e.g., "currentStockComposition0_AxisLabel_2"
            if (target.startsWith('currentStockComposition0_AxisLabel_')) {
                var idx = parseInt(target.split('_').pop() || '-1', 10);
                if (idx >= 0) {
                    var chart = _this.mainRef.current;
                    var txt = (_g = (_d = (_c = (_b = (_a = chart === null || chart === void 0 ? void 0 : chart.primaryXAxis) === null || _a === void 0 ? void 0 : _a.visibleLabels) === null || _b === void 0 ? void 0 : _b[idx]) === null || _c === void 0 ? void 0 : _c.text) !== null && _d !== void 0 ? _d : (_f = (_e = document.getElementById(target)) === null || _e === void 0 ? void 0 : _e.textContent) === null || _f === void 0 ? void 0 : _f.trim()) !== null && _g !== void 0 ? _g : '';
                    var label_1 = String(txt || '').trim();
                    if (!label_1)
                        return;
                    _this.setState(function (s) { return ({ drillCategory: s.drillCategory === label_1 ? null : label_1 }); });
                }
            }
        };
        // ===== Handlers =====
        _this.onMainChartPointClick = function (args) {
            var _a, _b;
            var cat = String((_b = (_a = args === null || args === void 0 ? void 0 : args.point) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : '').trim();
            if (cat)
                _this.setState({ drillCategory: cat }, function () { var _a; return (_a = _this.drillRef.current) === null || _a === void 0 ? void 0 : _a.refresh(); });
        };
        _this.onBack = function () { return _this.setState({ drillCategory: null }, function () { var _a; return (_a = _this.mainRef.current) === null || _a === void 0 ? void 0 : _a.refresh(); }); };
        return _this;
    }
    StockCompositionPanel.prototype.componentDidMount = function () {
        var _this = this;
        var _a, _b;
        (_b = (_a = this.props).onReady) === null || _b === void 0 ? void 0 : _b.call(_a, { refreshCurrentStockComposition: function () { return _this.refreshCurrentStockComposition(); } });
    };
    StockCompositionPanel.prototype.componentDidUpdate = function (prev) {
        var _a, _b;
        var changed = prev.year !== this.props.year ||
            prev.monthIndex !== this.props.monthIndex ||
            prev.region !== this.props.region ||
            prev.brand !== this.props.brand ||
            prev.warehouse !== this.props.warehouse ||
            JSON.stringify((_a = prev.categories) !== null && _a !== void 0 ? _a : []) !== JSON.stringify((_b = this.props.categories) !== null && _b !== void 0 ? _b : []);
        if (changed)
            this.refreshCurrentStockComposition();
    };
    StockCompositionPanel.prototype.refreshCurrentStockComposition = function () {
        var _a, _b;
        if (this.state.drillCategory) {
            (_a = this.drillRef.current) === null || _a === void 0 ? void 0 : _a.refresh();
        }
        else {
            (_b = this.mainRef.current) === null || _b === void 0 ? void 0 : _b.refresh();
        }
    };
    // ===== Data builders =====
    StockCompositionPanel.prototype.selectedMonthIdxs = function () {
        return this.props.monthIndex === ALL_MONTH
            ? Array.from({ length: 12 }, function (_, i) { return i; })
            : [Math.max(0, Math.min(11, this.props.monthIndex))];
    };
    /** Category totals for On‑hand vs Committed */
    StockCompositionPanel.prototype.buildCompositionRows = function () {
        var _a, _b, _c;
        var y = this.props.year;
        var idxs = this.selectedMonthIdxs();
        var prods = this.filteredProducts(y); // <-- use filtered list
        var byCat = {};
        for (var _i = 0, prods_1 = prods; _i < prods_1.length; _i++) {
            var p = prods_1[_i];
            for (var _d = 0, idxs_5 = idxs; _d < idxs_5.length; _d++) {
                var i = idxs_5[_d];
                // apply region factor per month and keep integer units
                var rf = this.regionFactor(y, i);
                var baseUnits = Math.max(0, (_b = (_a = p.monthly) === null || _a === void 0 ? void 0 : _a[i]) !== null && _b !== void 0 ? _b : 0);
                var units = Math.round(baseUnits * rf);
                // ALIGN: use supplyCoverByMonth for on‑hand (same as grids)
                var coverRatio = (_c = supplyCoverByMonth[i]) !== null && _c !== void 0 ? _c : 1.0;
                var onH = Math.round(units * Math.max(0, coverRatio));
                if (!byCat[p.category])
                    byCat[p.category] = { onhand: 0, committed: 0 };
                byCat[p.category].onhand = nz(byCat[p.category].onhand) + nz(onH);
                byCat[p.category].committed = nz(byCat[p.category].committed) + nz(units);
            }
        }
        return Object.keys(byCat).map(function (k) { return ({ x: k, onhand: nz(byCat[k].onhand), committed: nz(byCat[k].committed) }); });
    };
    StockCompositionPanel.prototype.filteredProducts = function (year) {
        var prods = buildYearProductSales(year);
        var catsProp = this.props.categories;
        var categoriesSelected = Array.isArray(catsProp)
            ? (catsProp.length === 0 || catsProp.includes('ALL') ? null : catsProp)
            : (catsProp === 'ALL' ? null : [String(catsProp)]);
        var brandSelected = this.props.brand === 'ALL' ? null : this.props.brand;
        var warehouseSelected = this.props.warehouse === 'ALL' ? null : this.props.warehouse;
        // Use mixedProducts metadata (brand/warehouse) to filter the scaled product rows
        return prods.filter(function (p) {
            var _a, _b;
            var meta = mixedProducts.find(function (mp) { return mp.name === p.name; });
            if (!meta)
                return false;
            if (categoriesSelected && !categoriesSelected.includes(meta.category))
                return false;
            if (brandSelected && String((_a = meta.brand) !== null && _a !== void 0 ? _a : '') !== String(brandSelected))
                return false;
            if (warehouseSelected && String((_b = meta.warehouse) !== null && _b !== void 0 ? _b : '') !== String(warehouseSelected))
                return false;
            return true;
        });
    };
    // Add helper: compute region factor for a month (fraction of global orders in selected region)
    StockCompositionPanel.prototype.regionFactor = function (year, monthIdx) {
        var _a, _b, _c, _d, _e, _f;
        var r = this.props.region;
        if (!r || r === 'ALL')
            return 1;
        if (!isRegionKey(r))
            return 1;
        var regions = buildRegionMonthlyByYear(year)[monthIdx];
        if (!regions)
            return 1;
        var sum = ((_a = regions.AsiaPacific) !== null && _a !== void 0 ? _a : 0) + ((_b = regions.Europe) !== null && _b !== void 0 ? _b : 0) + ((_c = regions.NorthAmerica) !== null && _c !== void 0 ? _c : 0) + ((_d = regions.LatinAmerica) !== null && _d !== void 0 ? _d : 0) + ((_e = regions.MiddleEastAfrica) !== null && _e !== void 0 ? _e : 0);
        var part = (_f = regions[r]) !== null && _f !== void 0 ? _f : 0;
        return sum > 0 ? (part / sum) : 1;
    };
    StockCompositionPanel.prototype.computeBadges = function (rows) {
        var over = 0, short = 0;
        for (var _i = 0, rows_1 = rows; _i < rows_1.length; _i++) {
            var r = rows_1[_i];
            if ((r.onhand - r.committed) > 0)
                over += (r.onhand - r.committed);
            if ((r.committed - r.onhand) > 0)
                short += (r.committed - r.onhand);
        }
        return { over: over, short: short };
    };
    /** Drill series: per‑month Stockouts & Cover(days) for a chosen category */
    StockCompositionPanel.prototype.coverStockoutsDrill = function (category) {
        var _a, _b;
        var y = this.props.year;
        var prods = buildYearProductSales(y);
        var demand = Array(12).fill(0);
        for (var _i = 0, prods_2 = prods; _i < prods_2.length; _i++) {
            var p = prods_2[_i];
            if (p.category !== category)
                continue;
            for (var i = 0; i < 12; i++) {
                // ALIGN: include region factor and round per‑month committed
                var rf = this.regionFactor(y, i);
                var u = Number((_b = (_a = p.monthly) === null || _a === void 0 ? void 0 : _a[i]) !== null && _b !== void 0 ? _b : 0) * rf;
                var units = Math.max(0, Math.round(Number.isFinite(u) ? u : 0));
                demand[i] += units;
            }
        }
        return demand.map(function (committed, i) {
            var _a;
            // ALIGN: use supplyCoverByMonth for on‑hand
            var coverRatio = (_a = supplyCoverByMonth[i]) !== null && _a !== void 0 ? _a : 1.0;
            var onH = Math.max(0, Math.round(committed * Math.max(0, coverRatio)));
            var stockouts = Math.max(0, Math.round(committed - onH));
            var coverDays = committed > 0 ? Math.max(0, Math.round((onH / committed) * 30)) : 0;
            return { m: months[i], stockouts: stockouts, coverDays: coverDays };
        });
    };
    // ===== Renderers =====
    StockCompositionPanel.prototype.renderBadges = function (over, short) {
        var fmt = function (n) { return new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(n); };
        return (React.createElement("div", { style: { display: 'flex', gap: 10, justifyContent: 'flex-end', marginBottom: 6 } },
            React.createElement("span", { style: { background: '#ECFDF5', color: '#065F46', border: '1px solid #A7F3D0', borderRadius: 999, padding: '2px 8px', fontWeight: 700 } },
                "Overstock: ",
                fmt(over)),
            React.createElement("span", { style: { background: '#FEF2F2', color: '#991B1B', border: '1px solid #FECACA', borderRadius: 999, padding: '2px 8px', fontWeight: 700 } },
                "Shortage: ",
                fmt(short))));
    };
    StockCompositionPanel.prototype.renderMain = function () {
        var rows = this.buildCompositionRows();
        var hasRows = Array.isArray(rows) && rows.length > 0;
        // Compute badges only when rows exist
        var overShort = hasRows ? this.computeBadges(rows) : { over: 0, short: 0 };
        // Compute Y axis limits so small stacks (e.g. Personal Care & Wellness) are visible
        var stackedTotals = rows.map(function (r) { return (Number(r.onhand) || 0) + (Number(r.committed) || 0); });
        var maxStack = stackedTotals.length ? Math.max.apply(Math, stackedTotals) : 100;
        var yAxisMax = Math.max(10, Math.ceil(maxStack * 1.1)); // 10% headroom
        var yInterval = Math.max(1, Math.ceil(yAxisMax / 5));
        return (React.createElement("div", { style: { height: '100%', width: '100%', borderRadius: 10, padding: 8, display: 'flex', flexDirection: 'column', gap: 8, boxSizing: 'border-box' } },
            hasRows && this.renderBadges(overShort.over, overShort.short),
            React.createElement(ej2_react_charts_1.ChartComponent, { id: "currentStockComposition", ref: this.mainRef, primaryXAxis: { valueType: 'Category', majorGridLines: { width: 0 }, majorTickLines: { width: 0 } }, primaryYAxis: { labelFormat: '{value}', lineStyle: { width: 0 }, majorTickLines: { width: 0 }, minimum: 0, maximum: yAxisMax, interval: yInterval }, tooltip: { enable: true, shared: true }, legendSettings: { visible: true }, pointClick: this.onMainChartPointClick, chartMouseClick: this.onMainChartMouseClick, load: onChartLoad },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.StackingColumnSeries, ej2_react_charts_1.Legend, ej2_react_charts_1.Tooltip, ej2_react_charts_1.Category, ej2_react_charts_1.DataLabel] }),
                React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.SeriesDirective, { type: "StackingColumn", name: "On hand", dataSource: rows, xName: "x", yName: "onhand", columnWidth: 0.5, fill: COLOR_ONHAND, marker: { dataLabel: { visible: true, position: 'Bottom', font: { fontWeight: 'Bold', size: '9px' } } }, emptyPointSettings: { mode: 'Zero' } }),
                    React.createElement(ej2_react_charts_1.SeriesDirective, { type: "StackingColumn", name: "Committed", dataSource: rows, xName: "x", yName: "committed", columnWidth: 0.5, fill: COLOR_COMMITTED, marker: { dataLabel: { visible: true, position: 'Bottom', font: { fontWeight: 'Bold', size: '9px' } } }, emptyPointSettings: { mode: 'Zero' } })))));
    };
    StockCompositionPanel.prototype.renderDrill = function (category) {
        var raw = this.coverStockoutsDrill(category) || [];
        // sanitize; keep only finite numbers
        var data = raw
            .map(function (r) {
            var _a;
            return ({
                m: String((_a = r === null || r === void 0 ? void 0 : r.m) !== null && _a !== void 0 ? _a : ''),
                stockouts: Math.round(Number.isFinite(+(r === null || r === void 0 ? void 0 : r.stockouts)) ? Math.max(0, +r.stockouts) : 0),
                coverDays: Math.round(Number.isFinite(+(r === null || r === void 0 ? void 0 : r.coverDays)) ? Math.max(0, +r.coverDays) : 0)
            });
        })
            .filter(function (r) { return r.m.length > 0; });
        // Spline needs at least 2 valid, non-zero points
        var validSplinePts = data.filter(function (d) { return Number.isFinite(d.coverDays) && d.coverDays > 0; });
        var canSpline = validSplinePts.length >= 2;
        return (React.createElement("div", { style: { height: '100%', width: '100%', borderRadius: 10, padding: 8, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 8 } },
            React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 8 } },
                React.createElement("button", { className: "e-btn e-outline", onClick: this.onBack }, "Back"),
                React.createElement("div", { style: { fontWeight: 600 } },
                    category,
                    " \u2022 Cover vs Stockouts")),
            React.createElement(ej2_react_charts_1.ChartComponent, { key: "drill-".concat(category), id: "stockCoverDrill", ref: this.drillRef, primaryXAxis: { valueType: 'Category', majorGridLines: { width: 0 }, majorTickLines: { width: 0 } }, 
                // integer ticks and labels
                primaryYAxis: { title: 'Stockouts (units)', labelFormat: 'n0', minimum: 0, rangePadding: 'None', lineStyle: { width: 0 }, majorTickLines: { width: 0 } }, axes: [{ name: 'coverAxis', opposedPosition: true, title: 'Cover (days)', minimum: 0, rangePadding: 'None', majorGridLines: { width: 0 }, majorTickLines: { width: 0 } }], tooltip: { enable: true, shared: true }, legendSettings: { visible: true }, load: onChartLoad },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.ColumnSeries, ej2_react_charts_1.SplineSeries, ej2_react_charts_1.Legend, ej2_react_charts_1.Tooltip, ej2_react_charts_1.Category, ej2_react_charts_1.DataLabel] }),
                React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.SeriesDirective, { type: "Column", name: "Stockouts", dataSource: data, xName: "m", yName: "stockouts", columnWidth: 0.5, fill: COLOR_STOCKOUTS, marker: { dataLabel: { visible: true, font: { fontWeight: 'Bold' } } } }),
                    canSpline && (React.createElement(ej2_react_charts_1.SeriesDirective, { type: "Spline", name: "Cover (days)", dataSource: data, xName: "m", yName: "coverDays", yAxisName: "coverAxis", width: 2, marker: { visible: true, width: 7, height: 7 }, fill: COLOR_COVER }))))));
    };
    StockCompositionPanel.prototype.render = function () {
        return this.state.drillCategory ? this.renderDrill(this.state.drillCategory) : this.renderMain();
    };
    return StockCompositionPanel;
}(React.PureComponent));
/* Lightweight placeholders (no hooks needed) */
var ProductClass = /** @class */ (function (_super) {
    __extends(ProductClass, _super);
    function ProductClass() {
        var _a, _b, _c, _d, _e;
        var _this = _super.apply(this, arguments) || this;
        _this.ProductRef = React.createRef();
        _this.totalSalesSparkRef = React.createRef();
        _this.lowStockSparkRef = React.createRef();
        _this.turnoverSparkRef = React.createRef();
        _this.categoryRevenueChartRef = React.createRef();
        _this.topItemsGridRef = React.createRef();
        _this.lowItemsGridRef = React.createRef();
        _this.state = {
            year: (_a = _this.props.year) !== null && _a !== void 0 ? _a : 2025,
            monthIndex: (_b = _this.props.monthIndex) !== null && _b !== void 0 ? _b : ALL_MONTH,
            categories: Array.isArray(_this.props.categories) ? _this.props.categories : [],
            brand: (_c = _this.props.brand) !== null && _c !== void 0 ? _c : 'ALL',
            region: (_d = _this.props.region) !== null && _d !== void 0 ? _d : 'ALL',
            warehouse: (_e = _this.props.warehouse) !== null && _e !== void 0 ? _e : 'ALL',
            productMixDrillCategory: null
        };
        _this.yearOptions = [2023, 2024, 2025];
        _this.monthOptions = __spreadArray([{ text: 'All (Yearly)', value: ALL_MONTH }], months.map(function (m, idx) { return ({ text: m, value: idx }); }), true);
        _this.ProductDashboardCreated = function () {
            setTimeout(function () {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                (_a = _this.ProductRef.current) === null || _a === void 0 ? void 0 : _a.refresh();
                refreshCommonSparks();
                (_b = _this.totalSalesSparkRef.current) === null || _b === void 0 ? void 0 : _b.refresh();
                (_c = _this.lowStockSparkRef.current) === null || _c === void 0 ? void 0 : _c.refresh();
                (_d = _this.turnoverSparkRef.current) === null || _d === void 0 ? void 0 : _d.refresh();
                (_e = _this.categoryRevenueChartRef.current) === null || _e === void 0 ? void 0 : _e.refresh();
                (_f = _this.productMixApi) === null || _f === void 0 ? void 0 : _f.refreshProductMixDonut();
                _this.currentStockCompositionApi.refreshCurrentStockComposition();
                (_g = _this.topItemsGridRef.current) === null || _g === void 0 ? void 0 : _g.refresh();
                (_h = _this.lowItemsGridRef.current) === null || _h === void 0 ? void 0 : _h.refresh();
            }, 500);
        };
        _this.TOP_ITEMS_COUNT = 10;
        _this.LOW_PCT = 0.20; // bottom 20% by revenue/units
        _this.LOW_MARGIN_PCT = 0.10; // <=10% margin considered weak
        // ===== Filtered data helpers =====
        _this.isAllMonths = function () { return _this.props.monthIndex === ALL_MONTH; };
        // ===== KPI tiles (now using renderKpiCard) =====
        _this.totalSalesContent = function () {
            var y = _this.props.year;
            var idxs = _this.selectedMonthIdxs();
            var cur = _this.rangeMetrics(y, idxs);
            var prev = _this.prevRangeMetrics();
            var delta = (prev && prev.totalSales > 0) ? ((cur.totalSales - prev.totalSales) / prev.totalSales) * 100 : null;
            var tone = delta == null ? 'neutral' : delta > 0 ? 'good' : 'bad';
            var badgeText = delta == null ? '—' : "".concat(delta > 0 ? '+' : '').concat(delta.toFixed(1), "% ").concat(_this.compareLabel());
            var spark = _this.sparkTotalSales(y);
            return renderCommonKpiTile({
                label: 'Total Sales',
                valueText: cardformatCurrency(cur.totalSales),
                badge: { text: badgeText, tone: tone },
                sparkData: spark,
                sparkColor: '#850E35',
                sparkId: "kpi-total-sales-".concat(y, "-").concat(idxs.join('_')),
                isMonthSelected: _this.props.monthIndex !== ALL_MONTH
            });
        };
        _this.unitSoldContent = function () {
            var y = _this.props.year;
            var idxs = _this.selectedMonthIdxs();
            var cur = _this.rangeMetrics(y, idxs);
            var prev = _this.prevRangeMetrics();
            var current = Math.round(cur.totalUnits);
            var previous = prev ? Math.round(prev.totalUnits) : null;
            var deltaPct = previous && previous > 0 ? ((current - previous) / previous) * 100 : null;
            var tone = deltaPct == null ? 'neutral' : deltaPct > 0 ? 'good' : 'bad';
            var badgeText = deltaPct == null ? '—' : "".concat(deltaPct > 0 ? '+' : '').concat(deltaPct.toFixed(1), "% ").concat(_this.compareLabel());
            return renderCommonKpiTile({
                label: 'Units Sold',
                valueText: _this.integer(current),
                badge: { text: badgeText, tone: tone },
                isMonthSelected: _this.props.monthIndex !== ALL_MONTH
            });
        };
        _this.aspContent = function () {
            var _a;
            var y = _this.props.year;
            var idxs = _this.selectedMonthIdxs();
            var cur = _this.rangeMetrics(y, idxs);
            var prev = _this.prevRangeMetrics();
            var current = cur.asp || 0;
            var previous = (_a = prev === null || prev === void 0 ? void 0 : prev.asp) !== null && _a !== void 0 ? _a : null;
            var deltaPct = previous && previous > 0 ? ((current - previous) / previous) * 100 : null;
            var tone = deltaPct == null ? 'neutral' : deltaPct > 0 ? 'good' : 'bad';
            var badgeText = deltaPct == null ? '—' : "".concat(deltaPct > 0 ? '+' : '').concat(deltaPct.toFixed(1), "% ").concat(_this.compareLabel());
            return renderCommonKpiTile({
                label: 'Average Selling Price',
                valueText: _this.currency2(current),
                badge: { text: badgeText, tone: tone },
                isMonthSelected: _this.props.monthIndex !== ALL_MONTH
            });
        };
        _this.categorySalesTrendAxisLabelRender = function (args) {
            var _a;
            if (((_a = args === null || args === void 0 ? void 0 : args.axis) === null || _a === void 0 ? void 0 : _a.valueType) !== 'Category') {
                args.text = formatCurrency(Number(args.value || 0));
            }
        };
        // ===== Category Sales Trend (redesigned: yearly = line, month = 3‑point comparison line) =====
        _this.categorySalesTrendContent = function () {
            // Build series from current filters (yearly or 3‑month rolling window)
            var isYearly = _this.props.monthIndex === ALL_MONTH;
            var series = _this.buildCategoryRevenueSeries();
            // Dominant series that usually dwarfs others
            var DOMINANT = 'Technology & Gadgets';
            var hasDominant = series.some(function (s) { return s.name === DOMINANT; });
            var useSplitAxis = hasDominant && series.length > 1;
            // Helpers to compute axis maxima with headroom
            var maxY = function (data) { return Math.max.apply(Math, __spreadArray([0], data.map(function (p) { return Number(p.y) || 0; }), false)); };
            var roundUp = function (v) {
                var x = Math.ceil((v * 1.15) / 10000) * 10000; // 15% headroom, round to 10k
                return Math.max(10000, x || 10000);
            };
            // Left (others) and right (dominant) axis ranges
            var leftMax = 0, rightMax = 0;
            if (useSplitAxis) {
                rightMax = roundUp(maxY(series.find(function (s) { return s.name === DOMINANT; }).data));
                leftMax = roundUp(Math.max.apply(Math, __spreadArray([0], series
                    .filter(function (s) { return s.name !== DOMINANT; })
                    .map(function (s) { return maxY(s.data); }), false)));
            }
            else {
                // Single axis (either only one series or no dominant)
                leftMax = roundUp(Math.max.apply(Math, __spreadArray([0], series.map(function (s) { return maxY(s.data); }), false)));
            }
            var title = 'Category Sales Trend';
            return (React.createElement("div", { style: { height: '100%', width: '100%', padding: 8, boxSizing: 'border-box' } },
                React.createElement("div", { style: { height: "calc(100% - 30px)", width: '100%' } },
                    React.createElement(ej2_react_charts_1.ChartComponent, { ref: _this.categoryRevenueChartRef, id: "categorySalesTrendChart", chartArea: { border: { width: 0 } }, primaryXAxis: { valueType: 'Category', majorGridLines: { width: 0 }, majorTickLines: { width: 0 } }, primaryYAxis: __assign(__assign({}, formatCurrencyAxis), { title: useSplitAxis ? 'Sales (Others)' : 'Sales', maximum: leftMax }), axes: useSplitAxis
                            ? [{
                                    name: 'domAxis',
                                    opposedPosition: true,
                                    title: "Sales (".concat(DOMINANT, ")"),
                                    labelFormat: 'c0',
                                    maximum: rightMax,
                                    lineStyle: { width: 0 },
                                    majorTickLines: { width: 0 },
                                    majorGridLines: { width: 0 }
                                }]
                            : [], tooltip: { enable: true }, legendSettings: { visible: true, toggleVisibility: true }, highlightMode: "Series", axisLabelRender: _this.categorySalesTrendAxisLabelRender, tooltipRender: onCurrencyTooltip, load: onChartLoad },
                        React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.LineSeries, ej2_react_charts_1.Legend, ej2_react_charts_1.Tooltip, ej2_react_charts_1.Category, ej2_react_charts_1.Highlight] }),
                        React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null, series.map(function (s) {
                            var isDom = useSplitAxis && s.name === DOMINANT;
                            return (React.createElement(ej2_react_charts_1.SeriesDirective, { key: s.name, type: "Line", name: s.name, xName: "x", yName: "y", dataSource: s.data, width: isDom ? 3 : 2, marker: {
                                    visible: true,
                                    width: isDom ? 9 : 7,
                                    height: isDom ? 9 : 7,
                                    border: { width: 2, color: getCategoryColor(s.name) }
                                }, yAxisName: isDom ? 'domAxis' : undefined, fill: getCategoryColor(s.name), animation: { enable: false } }));
                        }))))));
        };
        _this.headerWithTooltip = function (label, tip) {
            return function () { return (React.createElement("div", { title: tip, style: { display: 'inline-block', cursor: 'default' } }, label)); };
        };
        _this.topPerformingItemsContent = function () {
            var _a, _b;
            var isSingleMonth = _this.props.monthIndex !== ALL_MONTH;
            var monthIdxs = isSingleMonth
                ? [Math.max(0, Math.min(11, _this.props.monthIndex))]
                : Array.from({ length: 12 }, function (_, i) { return i; });
            var year = _this.props.year;
            // Purely inventory-based aggregation
            var full = _this.aggregateProductMetricsForSelection()
                .sort(function (a, b) {
                // Sort by absolute shortage desc, then shortage ratio desc, then committed desc
                var aRatio = (a.shortageUnits || 0) / Math.max(1, a.committedUnits || 0);
                var bRatio = (b.shortageUnits || 0) / Math.max(1, b.committedUnits || 0);
                return (b.shortageUnits - a.shortageUnits) ||
                    (bRatio - aRatio) ||
                    ((b.committedUnits || 0) - (a.committedUnits || 0));
            });
            var topCount = _this.getTopCount(full.length);
            var agg = full.slice(0, topCount);
            if (agg.length === 0) {
                return (React.createElement("div", { style: { padding: 12, background: '#fff', borderRadius: 10 } },
                    React.createElement("div", { style: { fontWeight: 600, fontSize: 14 } }, "Top Performing Items"),
                    React.createElement("div", { style: { marginTop: 12, color: '#6b7280' } }, "No products match the selected filters.")));
            }
            var parentRows = agg.map(function (r) {
                var shortagePct = (r.shortageUnits || 0) / Math.max(1, r.committedUnits || 0);
                var overstockPct = (r.overstockUnits || 0) / Math.max(1, r.committedUnits || 0);
                return {
                    product: r.product,
                    category: r.category,
                    committed: r.committedUnits,
                    onhand: r.onhandUnits,
                    shortage: r.shortageUnits,
                    overstock: r.overstockUnits,
                    shortagePct: shortagePct,
                    overstockPct: overstockPct
                };
            });
            // Child rows: monthly breakdown (inventory only)
            var childRows = [];
            for (var _i = 0, agg_1 = agg; _i < agg_1.length; _i++) {
                var r = agg_1[_i];
                if (isSingleMonth) {
                    var mi = monthIdxs[0];
                    var committed = Math.max(0, Math.round(_this.unitsForProductMonth(year, mi, r.product)));
                    var coverRatio = (_a = supplyCoverByMonth[mi]) !== null && _a !== void 0 ? _a : 1;
                    var onhand = Math.max(0, Math.round(committed * Math.max(0, coverRatio)));
                    var shortage = Math.max(0, committed - onhand);
                    var overstock = Math.max(0, onhand - committed);
                    childRows.push({
                        product: r.product,
                        month: months[mi],
                        committed: committed,
                        onhand: onhand,
                        shortage: shortage,
                        overstock: overstock
                    });
                }
                else {
                    for (var mi = 0; mi < 12; mi++) {
                        var committed = Math.max(0, Math.round(_this.unitsForProductMonth(year, mi, r.product)));
                        var coverRatio = (_b = supplyCoverByMonth[mi]) !== null && _b !== void 0 ? _b : 1;
                        var onhand = Math.max(0, Math.round(committed * Math.max(0, coverRatio)));
                        var shortage = Math.max(0, committed - onhand);
                        var overstock = Math.max(0, onhand - committed);
                        childRows.push({
                            product: r.product,
                            month: months[mi],
                            committed: committed,
                            onhand: onhand,
                            shortage: shortage,
                            overstock: overstock
                        });
                    }
                }
            }
            var childGridModel = {
                dataSource: childRows,
                queryString: 'product',
                gridLines: 'Horizontal',
                columns: [
                    { field: 'month', headerText: 'Month', width: 100, textAlign: 'Left' },
                    { field: 'committed', headerText: 'Committed', width: 110, textAlign: 'Right', format: 'N0' },
                    { field: 'onhand', headerText: 'On-hand', width: 110, textAlign: 'Right', format: 'N0' },
                    { field: 'shortage', headerText: 'Shortage', width: 110, textAlign: 'Right', format: 'N0' },
                    { field: 'overstock', headerText: 'Overstock', width: 110, textAlign: 'Right', format: 'N0' }
                ]
            };
            return (React.createElement("div", { style: { height: '100%', width: '100%', padding: 8, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', overflow: 'hidden' } },
                React.createElement("div", { style: { minHeight: 0, flex: 1 } },
                    React.createElement(ej2_react_grids_1.GridComponent, { id: "productTopItemsGrid", ref: _this.topItemsGridRef, dataSource: parentRows, allowSorting: true, allowPaging: false, allowResizing: true, gridLines: "Horizontal", height: "100%", childGrid: childGridModel, sortSettings: { columns: [{ field: 'shortage', direction: 'Descending' }] } },
                        React.createElement(ej2_react_grids_1.ColumnsDirective, null,
                            React.createElement(ej2_react_grids_1.ColumnDirective, { field: "product", headerTemplate: _this.headerWithTooltip('Product', 'Click to expand for monthly breakdown'), width: "200", textAlign: "Left", isPrimaryKey: true }),
                            React.createElement(ej2_react_grids_1.ColumnDirective, { field: "category", headerTemplate: _this.headerWithTooltip('Category', 'Product category'), width: "170", textAlign: "Left" }),
                            React.createElement(ej2_react_grids_1.ColumnDirective, { field: "committed", headerTemplate: _this.headerWithTooltip('Committed', 'Committed (demand) units'), width: "100", textAlign: "Right", format: "N0" }),
                            React.createElement(ej2_react_grids_1.ColumnDirective, { field: "onhand", headerTemplate: _this.headerWithTooltip('On-hand', 'Estimated on‑hand units (supply cover applied)'), width: "110", textAlign: "Right", format: "N0" }),
                            React.createElement(ej2_react_grids_1.ColumnDirective, { field: "shortage", headerTemplate: _this.headerWithTooltip('Shortage', 'Units short vs on‑hand'), width: "110", textAlign: "Right", format: "N0" }),
                            React.createElement(ej2_react_grids_1.ColumnDirective, { field: "shortagePct", headerTemplate: _this.headerWithTooltip('Shortage %', 'Shortage as percentage of committed units'), width: "100", textAlign: "Right", format: "P1" }),
                            React.createElement(ej2_react_grids_1.ColumnDirective, { field: "overstock", headerTemplate: _this.headerWithTooltip('Overstock', 'Excess on‑hand units'), width: "90", textAlign: "Right", format: "N0" }),
                            React.createElement(ej2_react_grids_1.ColumnDirective, { field: "overstockPct", headerTemplate: _this.headerWithTooltip('Overstock %', 'Overstock as percentage of committed units'), width: "105", textAlign: "Right", format: "P1" })),
                        React.createElement(ej2_react_grids_1.Inject, { services: [ej2_react_grids_1.DetailRow, ej2_react_grids_1.Toolbar, ej2_react_grids_1.Sort] })))));
        };
        _this.lowPerformingItemsContent = function () {
            // Base data (inventory only)
            var agg = _this.aggregateProductMetricsForSelection();
            if (agg.length === 0) {
                return (React.createElement("div", { style: { padding: 12, background: '#fff', borderRadius: 10 } },
                    React.createElement("div", { style: { fontWeight: 600, fontSize: 14 } }, "Low Performing Items"),
                    React.createElement("div", { style: { marginTop: 12, color: '#6b7280' } }, "No products match the selected filters.")));
            }
            // Exclude items already in "Top" (by shortage)
            var sortedByShortage = __spreadArray([], agg, true).sort(function (a, b) {
                var aRatio = (a.shortageUnits || 0) / Math.max(1, a.committedUnits || 0);
                var bRatio = (b.shortageUnits || 0) / Math.max(1, b.committedUnits || 0);
                return (b.shortageUnits - a.shortageUnits) || (bRatio - aRatio) || ((b.committedUnits || 0) - (a.committedUnits || 0));
            });
            var topCount = _this.getTopCount(sortedByShortage.length);
            var topShortageSet = new Set(sortedByShortage.slice(0, topCount).map(function (r) { return r.product; }));
            // Low performers by Overstock (absolute), then overstock ratio desc, then committed asc
            var low = agg
                .filter(function (r) { return !topShortageSet.has(r.product); })
                .sort(function (a, b) {
                var aRatio = (a.overstockUnits || 0) / Math.max(1, a.committedUnits || 0);
                var bRatio = (b.overstockUnits || 0) / Math.max(1, b.committedUnits || 0);
                return (b.overstockUnits - a.overstockUnits) ||
                    (bRatio - aRatio) ||
                    ((a.committedUnits || 0) - (b.committedUnits || 0));
            })
                .slice(0, _this.TOP_ITEMS_COUNT);
            if (low.length === 0) {
                return (React.createElement("div", { style: { padding: 12, background: '#fff', borderRadius: 10 } },
                    React.createElement("div", { style: { fontWeight: 600, fontSize: 14 } }, "Low Performing Items"),
                    React.createElement("div", { style: { marginTop: 12, color: '#6b7280' } }, "No low-performing products for the selected period.")));
            }
            var rows = low.map(function (r) {
                var overstockPct = (r.overstockUnits || 0) / Math.max(1, r.committedUnits || 0);
                var shortagePct = (r.shortageUnits || 0) / Math.max(1, r.committedUnits || 0);
                return {
                    product: r.product,
                    category: r.category,
                    committed: r.committedUnits,
                    onhand: r.onhandUnits,
                    overstock: r.overstockUnits,
                    overstockPct: overstockPct,
                    shortage: r.shortageUnits,
                    shortagePct: shortagePct
                };
            });
            return (React.createElement("div", { style: { height: '100%', width: '100%', padding: 8, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', overflow: 'hidden' } },
                React.createElement("div", { style: { flex: 1, minHeight: 0 } },
                    React.createElement(ej2_react_grids_1.GridComponent, { id: "lowPerformingItemsGrid", ref: _this.lowItemsGridRef, dataSource: rows, allowPaging: false, allowSorting: true, allowResizing: true, height: "100%", sortSettings: { columns: [{ field: 'overstock', direction: 'Descending' }] } },
                        React.createElement(ej2_react_grids_1.ColumnsDirective, null,
                            React.createElement(ej2_react_grids_1.ColumnDirective, { field: "product", headerTemplate: _this.headerWithTooltip('Product', 'Product name'), width: "170", textAlign: "Left", isPrimaryKey: true }),
                            React.createElement(ej2_react_grids_1.ColumnDirective, { field: "category", headerTemplate: _this.headerWithTooltip('Category', 'Product category'), width: "180", textAlign: "Left" }),
                            React.createElement(ej2_react_grids_1.ColumnDirective, { field: "committed", headerTemplate: _this.headerWithTooltip('Committed', 'Committed (demand) units'), width: "100", textAlign: "Right", format: "N0" }),
                            React.createElement(ej2_react_grids_1.ColumnDirective, { field: "onhand", headerTemplate: _this.headerWithTooltip('On-hand', 'Estimated on‑hand units (supply cover applied)'), width: "110", textAlign: "Right", format: "N0" }),
                            React.createElement(ej2_react_grids_1.ColumnDirective, { field: "overstock", headerTemplate: _this.headerWithTooltip('Overstock', 'Excess on‑hand units'), width: "110", textAlign: "Right", format: "N0" }),
                            React.createElement(ej2_react_grids_1.ColumnDirective, { field: "overstockPct", headerTemplate: _this.headerWithTooltip('Overstock %', 'Overstock as percentage of committed units'), width: "110", textAlign: "Right", format: "P1" }),
                            React.createElement(ej2_react_grids_1.ColumnDirective, { field: "shortage", headerTemplate: _this.headerWithTooltip('Shortage', 'Units short vs on‑hand'), width: "100", textAlign: "Right", format: "N0" }),
                            React.createElement(ej2_react_grids_1.ColumnDirective, { field: "shortagePct", headerTemplate: _this.headerWithTooltip('Shortage %', 'Shortage as percentage of committed units'), width: "110", textAlign: "Right", format: "P1" })),
                        React.createElement(ej2_react_grids_1.Inject, { services: [ej2_react_grids_1.Toolbar, ej2_react_grids_1.Page, ej2_react_grids_1.Sort] })))));
        };
        return _this;
    }
    ProductClass.prototype.componentDidMount = function () {
        window.addEventListener('sidebar-toggled', this.ProductDashboardCreated);
        window.addEventListener('resize', this.ProductDashboardCreated);
    };
    ProductClass.prototype.componentWillUnmount = function () {
        window.removeEventListener('sidebar-toggled', this.ProductDashboardCreated);
        window.removeEventListener('resize', this.ProductDashboardCreated);
    };
    ProductClass.prototype.componentDidUpdate = function (prevProps, prevState) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _o, _p;
        var propsChanged = prevProps.year !== this.props.year ||
            prevProps.monthIndex !== this.props.monthIndex ||
            prevProps.region !== this.props.region ||
            prevProps.brand !== this.props.brand ||
            prevProps.warehouse !== this.props.warehouse ||
            !arrayEqual((_a = prevProps.categories) !== null && _a !== void 0 ? _a : [], (_b = this.props.categories) !== null && _b !== void 0 ? _b : []);
        var stateOutOfSync = this.state.year !== this.props.year ||
            this.state.monthIndex !== this.props.monthIndex ||
            this.state.region !== this.props.region ||
            this.state.brand !== this.props.brand ||
            this.state.warehouse !== this.props.warehouse ||
            !arrayEqual((_c = this.state.categories) !== null && _c !== void 0 ? _c : [], (_d = this.props.categories) !== null && _d !== void 0 ? _d : []);
        if (propsChanged && stateOutOfSync) {
            this.setState({
                year: this.props.year,
                monthIndex: this.props.monthIndex,
                region: this.props.region,
                brand: this.props.brand,
                warehouse: this.props.warehouse,
                categories: (_e = this.props.categories) !== null && _e !== void 0 ? _e : []
            });
            return; // charts will refresh on the next pass below
        }
        // Existing refresh when local state changes
        var changed = prevState.year !== this.state.year ||
            prevState.monthIndex !== this.state.monthIndex ||
            prevState.categories !== this.state.categories ||
            prevState.brand !== this.state.brand ||
            prevState.region !== this.state.region ||
            prevState.warehouse !== this.state.warehouse;
        if (changed) {
            (_f = this.totalSalesSparkRef.current) === null || _f === void 0 ? void 0 : _f.refresh();
            (_g = this.lowStockSparkRef.current) === null || _g === void 0 ? void 0 : _g.refresh();
            (_h = this.turnoverSparkRef.current) === null || _h === void 0 ? void 0 : _h.refresh();
            (_j = this.categoryRevenueChartRef.current) === null || _j === void 0 ? void 0 : _j.refresh();
            (_k = this.productMixApi) === null || _k === void 0 ? void 0 : _k.refreshProductMixDonut();
            (_l = this.currentStockCompositionApi) === null || _l === void 0 ? void 0 : _l.refreshCurrentStockComposition();
            (_o = this.topItemsGridRef.current) === null || _o === void 0 ? void 0 : _o.refresh();
            (_p = this.lowItemsGridRef.current) === null || _p === void 0 ? void 0 : _p.refresh();
        }
    };
    // Helper: pick Top N dynamically so low grid has room after strong filters
    ProductClass.prototype.getTopCount = function (total) {
        return Math.min(this.TOP_ITEMS_COUNT, Math.max(1, Math.floor(total * 0.6)));
    };
    // Aggregate metrics per product for current selection (Category/Brand/Warehouse/Region, Month)
    ProductClass.prototype.aggregateProductMetricsForSelection = function () {
        var _this = this;
        var isSingleMonth = this.props.monthIndex !== ALL_MONTH;
        var monthIdxs = isSingleMonth
            ? [Math.max(0, Math.min(11, this.props.monthIndex))]
            : Array.from({ length: 12 }, function (_, i) { return i; });
        var year = this.props.year;
        var products = this.filteredProducts();
        var rows = products.map(function (p) {
            var _a, _b, _c;
            var price = _this.getPrice(p.name);
            var mPct = (_b = (_a = ProductPricing[p.name]) === null || _a === void 0 ? void 0 : _a.marginPct) !== null && _b !== void 0 ? _b : 0.30;
            var units = 0;
            var onhandUnits = 0;
            for (var _i = 0, monthIdxs_7 = monthIdxs; _i < monthIdxs_7.length; _i++) {
                var mi = monthIdxs_7[_i];
                // ALIGN: round per‑month committed before summing (prevents drift)
                var uRaw = Math.max(0, _this.unitsForProductMonth(year, mi, p.name));
                var u = Math.round(uRaw);
                units += u;
                // ALIGN: on‑hand = committed * supplyCoverByMonth
                var coverRatio = (_c = supplyCoverByMonth[mi]) !== null && _c !== void 0 ? _c : 1;
                onhandUnits += Math.round(u * Math.max(0, coverRatio));
            }
            var committedUnits = units;
            var revenue = committedUnits * price;
            var margin = committedUnits * price * mPct;
            var marginPct = revenue > 0 ? (margin / revenue) : mPct;
            var shortageUnits = Math.max(0, Math.round(committedUnits - onhandUnits));
            var overstockUnits = Math.max(0, Math.round(onhandUnits - committedUnits));
            return {
                product: p.name,
                category: p.category,
                units: Math.round(committedUnits),
                revenue: Math.round(revenue),
                margin: Math.round(margin),
                marginPct: +(marginPct || 0),
                committedUnits: Math.round(committedUnits),
                onhandUnits: Math.round(onhandUnits),
                shortageUnits: shortageUnits,
                overstockUnits: overstockUnits
            };
        });
        var filteredRows = rows.filter(function (r) { return (r.committedUnits || 0) > 0 || (r.revenue || 0) > 0; });
        return filteredRows;
    };
    // ===== Formatting helpers =====
    ProductClass.prototype.currency = function (v) {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(v || 0);
    };
    ProductClass.prototype.currency2 = function (v) {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(isFinite(v) ? v : 0);
    };
    ProductClass.prototype.integer = function (v) {
        return new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(Math.round(v || 0));
    };
    ProductClass.prototype.compareLabel = function () {
        var py = this.props.year - 1;
        if (this.props.monthIndex === ALL_MONTH) {
            return "vs ".concat(py >= 2022 ? py : '—');
        }
        var i = Math.max(0, Math.min(11, this.props.monthIndex));
        return "vs ".concat(months[i], " ").concat(py >= 2022 ? py : '—');
    };
    ProductClass.prototype.selectedMonthIdxs = function () {
        return this.isAllMonths()
            ? Array.from({ length: 12 }, function (_, i) { return i; })
            : [Math.max(0, Math.min(11, this.props.monthIndex))];
    };
    ProductClass.prototype.filteredProducts = function () {
        var _this = this;
        return mixedProducts.filter(function (p) {
            var cats = _this.props.categories;
            var catOk = Array.isArray(cats)
                ? (cats.length === 0 || cats.includes('ALL') || cats.includes(p.category))
                : (cats === 'ALL' || p.category === cats);
            var brandOk = _this.props.brand === 'ALL' || p.brand === _this.props.brand;
            var whOk = _this.props.warehouse === 'ALL' || p.warehouse === _this.props.warehouse;
            return catOk && brandOk && whOk;
        });
    };
    ProductClass.prototype.regionFactor = function (year, monthIdx) {
        var _a, _b, _c, _d, _e, _f;
        var r = this.props.region;
        if (r === 'ALL')
            return 1;
        if (!isRegionKey(r))
            return 1;
        var regions = buildRegionMonthlyByYear(year)[monthIdx];
        if (!regions)
            return 1;
        var sum = ((_a = regions.AsiaPacific) !== null && _a !== void 0 ? _a : 0) + ((_b = regions.Europe) !== null && _b !== void 0 ? _b : 0) + ((_c = regions.NorthAmerica) !== null && _c !== void 0 ? _c : 0) + ((_d = regions.LatinAmerica) !== null && _d !== void 0 ? _d : 0) + ((_e = regions.MiddleEastAfrica) !== null && _e !== void 0 ? _e : 0);
        var part = (_f = regions[r]) !== null && _f !== void 0 ? _f : 0;
        return sum > 0 ? (part / sum) : 1;
    };
    ProductClass.prototype.unitsForProductMonth = function (year, monthIdx, productName) {
        var _a, _b;
        var prods = buildYearProductSales(year);
        var row = prods.find(function (p) { return p.name === productName; });
        var baseUnits = Math.max(0, (_b = (_a = row === null || row === void 0 ? void 0 : row.monthly) === null || _a === void 0 ? void 0 : _a[monthIdx]) !== null && _b !== void 0 ? _b : 0);
        var rf = this.regionFactor(year, monthIdx);
        return baseUnits * rf;
    };
    ProductClass.prototype.monthMetrics = function (year, monthIdx) {
        var _a, _b, _c;
        var list = this.filteredProducts();
        var units = 0;
        var sales = 0;
        var onhand = 0; // estimate for turnover
        var lowSet = new Set();
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var p = list_1[_i];
            var u = this.unitsForProductMonth(year, monthIdx, p.name);
            var price = (_b = (_a = ProductPricing[p.name]) === null || _a === void 0 ? void 0 : _a.price) !== null && _b !== void 0 ? _b : 50;
            units += u;
            sales += u * price;
            var cov = (_c = monthCoverage[monthIdx]) !== null && _c !== void 0 ? _c : 1.3;
            onhand += u * cov;
            var st = computeStockStatus(Math.round(u), monthIdx);
            if (st === 'Low' || st === 'Out of Stock') {
                lowSet.add(p.name);
            }
        }
        return { units: units, sales: sales, onhand: onhand, lowCount: lowSet.size };
    };
    ProductClass.prototype.rangeMetrics = function (year, idxs) {
        var _a, _b, _c, _d, _e;
        var totalUnits = 0;
        var totalSales = 0;
        var onhandSum = 0;
        var lowProducts = new Set();
        var list = this.filteredProducts();
        for (var _i = 0, idxs_6 = idxs; _i < idxs_6.length; _i++) {
            var i = idxs_6[_i];
            var rf = this.regionFactor(year, i);
            var _loop_11 = function (p) {
                var row = buildYearProductSales(year).find(function (x) { return x.name === p.name; });
                var u = Math.max(0, (_b = (_a = row === null || row === void 0 ? void 0 : row.monthly) === null || _a === void 0 ? void 0 : _a[i]) !== null && _b !== void 0 ? _b : 0) * rf;
                var price = (_d = (_c = ProductPricing[p.name]) === null || _c === void 0 ? void 0 : _c.price) !== null && _d !== void 0 ? _d : 50;
                totalUnits += u;
                totalSales += u * price;
                var cov = (_e = monthCoverage[i]) !== null && _e !== void 0 ? _e : 1.3;
                onhandSum += u * cov;
                var st = computeStockStatus(Math.round(u), i);
                if (st === 'Low' || st === 'Out of Stock')
                    lowProducts.add(p.name);
            };
            for (var _f = 0, list_2 = list; _f < list_2.length; _f++) {
                var p = list_2[_f];
                _loop_11(p);
            }
        }
        var avgOnhand = idxs.length > 0 ? (onhandSum / idxs.length) : 0;
        var turnover = avgOnhand > 0 ? (totalUnits / avgOnhand) : null;
        return {
            totalUnits: totalUnits,
            totalSales: totalSales,
            asp: totalUnits > 0 ? (totalSales / totalUnits) : 0,
            lowCount: lowProducts.size,
            turnover: turnover
        };
    };
    ProductClass.prototype.prevRangeMetrics = function () {
        var py = this.props.year - 1;
        if (py < 2022)
            return null;
        var idxs = this.selectedMonthIdxs();
        return this.rangeMetrics(py, idxs);
    };
    // ===== Sparks (12 months of selected year) =====
    ProductClass.prototype.sparkTotalSales = function (year) {
        var _this = this;
        return months.map(function (m, i) { return ({ x: m, y: Math.round(_this.monthMetrics(year, i).sales) }); });
    };
    ProductClass.prototype.getPrice = function (name) {
        var _a, _b;
        return (_b = (_a = ProductPricing[name]) === null || _a === void 0 ? void 0 : _a.price) !== null && _b !== void 0 ? _b : 50;
    };
    // Active categories for the chart based on the Category filter and filtered product list
    ProductClass.prototype.getActiveCategoriesForTrend = function () {
        var list = this.filteredProducts();
        var present = Array.from(new Set(list.map(function (p) { return p.category; }))).sort();
        var cats = this.props.categories;
        if (Array.isArray(cats)) {
            // no selection or explicit 'ALL' in array => return all present categories
            if (cats.length === 0 || cats.includes('ALL'))
                return present;
            // return intersection of selected categories and present categories
            return present.filter(function (c) { return cats.includes(c); });
        }
        // fallback for string value (e.g. 'ALL' or single category)
        if (cats === 'ALL')
            return present;
        return present.includes(String(cats)) ? [String(cats)] : [];
    };
    // Build a rolling window of (year, monthIdx, label) for month view (previous two months + selected)
    ProductClass.prototype.buildRollingWindow = function (year, monthIndex, windowSize) {
        if (windowSize === void 0) { windowSize = 3; }
        var out = [];
        var DATA_FLOOR_YEAR = 2022;
        for (var back = windowSize - 1; back >= 0; back--) {
            var y = year;
            var m = monthIndex - back;
            while (m < 0) {
                y -= 1;
                m += 12;
            }
            if (y < DATA_FLOOR_YEAR)
                continue;
            var monthIdx = Math.max(0, Math.min(11, m));
            out.push({ year: y, monthIdx: monthIdx, label: "".concat(months[monthIdx], " ").concat(y) });
        }
        if (out.length === 0) {
            // fallback to the single selected month
            out.push({ year: year, monthIdx: Math.max(0, Math.min(11, monthIndex)), label: "".concat(months[Math.max(0, Math.min(11, monthIndex))], " ").concat(year) });
        }
        return out;
    };
    // Build revenue by category series points for the selected year and month scope
    ProductClass.prototype.buildCategoryRevenueSeries = function () {
        var _this = this;
        var _a = this.props, year = _a.year, monthIndex = _a.monthIndex;
        var cats = this.getActiveCategoriesForTrend();
        if (cats.length === 0)
            return [];
        // months to produce: full year (12 months) OR rolling 3-month window ending at selected month
        var monthWindows = (monthIndex === ALL_MONTH)
            ? Array.from({ length: 12 }, function (_, i) { return ({ year: year, monthIdx: i, label: months[i] }); })
            : this.buildRollingWindow(year, monthIndex, 3);
        // Filtered products (Category, Brand, Warehouse)
        var list = this.filteredProducts();
        // Build per-category series
        var series = cats.map(function (cat) {
            var catProducts = list.filter(function (p) { return p.category === cat; });
            var points = monthWindows.map(function (mw) {
                var rev = 0;
                for (var _i = 0, catProducts_1 = catProducts; _i < catProducts_1.length; _i++) {
                    var p = catProducts_1[_i];
                    var units = _this.unitsForProductMonth(mw.year, mw.monthIdx, p.name); // includes Region factor
                    rev += Math.max(0, units) * _this.getPrice(p.name);
                }
                return { x: mw.label, y: Math.round(rev) };
            });
            return { name: cat, data: points };
        });
        return series;
    };
    ProductClass.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "Container" },
            React.createElement("div", { className: "sidebar-content" },
                React.createElement(ej2_react_layouts_1.DashboardLayoutComponent, { ref: this.ProductRef, id: "ecommerce_marketing_product_dashboard", columns: 8, cellAspectRatio: 1, cellSpacing: [12, 12], allowResizing: false, allowDragging: false, created: this.ProductDashboardCreated, mediaQuery: "(max-width:950px)" },
                    React.createElement(ej2_react_layouts_1.PanelsDirective, null,
                        React.createElement(ej2_react_layouts_1.PanelDirective, { row: 0, col: 0, sizeX: 4, sizeY: 1, content: function () { return _this.totalSalesContent(); } }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { row: 0, col: 4, sizeX: 2, sizeY: 1, content: function () { return _this.unitSoldContent(); } }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { row: 0, col: 6, sizeX: 2, sizeY: 1, content: function () { return _this.aspContent(); } }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { row: 1, col: 0, sizeX: 8, sizeY: 3, header: "<div>Category Sales Trend</div>", content: function () { return _this.categorySalesTrendContent(); } }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { row: 4, col: 0, sizeX: 8, sizeY: 3, header: "<div>Product Mix Breakdown</div>", content: function () { return (React.createElement(ProductMixPanel, { year: _this.props.year, monthIndex: _this.props.monthIndex, categories: _this.props.categories, brand: _this.props.brand, region: _this.props.region, warehouse: _this.props.warehouse, onReady: function (api) { _this.productMixApi = api; } })); } }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { row: 7, col: 0, sizeX: 8, sizeY: 3, header: "<div>Current Stock Composition</div>", content: function () { return (React.createElement(StockCompositionPanel, { year: _this.props.year, monthIndex: _this.props.monthIndex, categories: _this.props.categories, brand: _this.props.brand, region: _this.props.region, warehouse: _this.props.warehouse, onReady: function (api) { _this.currentStockCompositionApi = api; } })); } }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { row: 10, col: 0, sizeX: 8, sizeY: 5, header: "<div>Top Performing Items</div>", content: function () { return _this.topPerformingItemsContent(); } }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { row: 15, col: 0, sizeX: 8, sizeY: 4, header: "<div>Low Performing Items</div>", content: function () { return _this.lowPerformingItemsContent(); } }))))));
    };
    return ProductClass;
}(React.Component));
// ===== Campaign typing (TOP-LEVEL) =====
exports.CAMPAIGN_KEYS = [
    'brandAwareness',
    'performance',
    'retargeting',
    'acquisition',
    'loyalty'
];
exports.CAMPAIGN_LABEL = {
    brandAwareness: 'Awareness Campaigns',
    performance: 'Performance Campaigns',
    retargeting: 'Retargeting Campaigns',
    acquisition: 'Acquisition Campaigns',
    loyalty: 'Loyalty Campaigns'
};
var ForecastClass = /** @class */ (function (_super) {
    __extends(ForecastClass, _super);
    function ForecastClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Layout & chart refs
        _this.ForecastRef = React.createRef();
        _this.revenueWaterfallRef = React.createRef();
        _this.scenarioSplineRangeAreaRef = React.createRef();
        _this.channelHeatmapRef = React.createRef();
        _this.state = {
            includeSeasonality: true,
            includeCampaigns: true
        };
        /* --------- Lifecycle --------- */
        _this.ForecastDashboardCreated = function () {
            setTimeout(function () {
                var _a, _b, _c, _d;
                (_a = _this.ForecastRef.current) === null || _a === void 0 ? void 0 : _a.refresh();
                refreshCommonSparks();
                (_b = _this.revenueWaterfallRef.current) === null || _b === void 0 ? void 0 : _b.refresh();
                (_c = _this.scenarioSplineRangeAreaRef.current) === null || _c === void 0 ? void 0 : _c.refresh();
                (_d = _this.channelHeatmapRef.current) === null || _d === void 0 ? void 0 : _d.refresh();
            }, 500);
        };
        /* --------- Formatting helpers --------- */
        _this.clamp = function (v, min, max) {
            if (min === void 0) { min = -1e15; }
            if (max === void 0) { max = 1e15; }
            return Math.max(min, Math.min(max, v));
        };
        /* --------- Scenario & growth assumptions (Revenue model) --------- */
        _this.ScenarioAssumptions = {
            // Keep Baseline neutral
            Baseline: { growthMultiplier: 1.00, campaignMultiplier: 1.00, channelMultiplier: 1.00 },
            // Soften multipliers (we'll add an explicit absolute delta below for ~25k gap)
            Optimistic: { growthMultiplier: 1.02, campaignMultiplier: 1.05, channelMultiplier: 1.04 },
            Conservative: { growthMultiplier: 0.98, campaignMultiplier: 0.95, channelMultiplier: 0.96 }
        };
        _this.ForecastGrowth = { 2026: 1.12, 2027: 1.15 };
        _this.ScenarioAbsoluteDelta = {
            Baseline: 0,
            Optimistic: 25000,
            Conservative: -25000
        };
        /* --------- Scenario assumptions (Funnel model) --------- */
        _this.FunnelScenario = {
            Baseline: { visitsLift: 1.00, convLift: 1.00 },
            Optimistic: { visitsLift: 1.08, convLift: 1.04 },
            Conservative: { visitsLift: 0.96, convLift: 0.96 }
        };
        /* ===========================
           Projected Revenue KPI
           =========================== */
        _this.projectedRevenueContent = function () {
            var year = _this.props.year;
            var monthIndex = _this.props.monthIndex;
            var scenario = _this.props.scenario;
            // Use the SAME summed components as the waterfall
            var currentTotal = _this.projectedTotalForSelection(year, monthIndex, scenario);
            var prevYear = Math.max(2025, year - 1);
            var previousTotal = _this.projectedTotalForSelection(prevYear, monthIndex, scenario);
            var deltaPct = previousTotal > 0 ? ((currentTotal - previousTotal) / previousTotal) * 100 : null;
            // Sparkline uses the same component-sum per month to stay aligned
            var sparkFull = months.map(function (m, i) {
                var c = _this.buildAdjustedMonthComponents(year, i, scenario);
                return { x: m, y: _this.sumComponentsWithToggles(c) };
            });
            var sparkData = monthIndex === ALL_MONTH ? sparkFull : [sparkFull[Math.max(0, Math.min(11, monthIndex))]];
            var tone = (deltaPct == null) ? 'neutral' : (deltaPct > 0 ? 'good' : (deltaPct < 0 ? 'bad' : 'neutral'));
            return renderCommonKpiTile({
                label: 'Projected Revenue',
                valueText: cardformatCurrency(currentTotal),
                badge: { text: (deltaPct == null ? '—' : "".concat(deltaPct > 0 ? '+' : '').concat(deltaPct.toFixed(1), "% vs ").concat(prevYear)), tone: tone },
                isMonthSelected: monthIndex !== ALL_MONTH
            });
        };
        _this.growthPercentageContent = function () {
            var year = _this.props.year;
            var monthIndex = _this.props.monthIndex;
            var scenario = _this.props.scenario;
            var currentTotal = _this.projectedTotalForSelection(year, monthIndex, scenario);
            var prevYear = Math.max(2025, year - 1);
            var previousTotal = _this.projectedTotalForSelection(prevYear, monthIndex, scenario);
            var growthPct = previousTotal > 0 ? ((currentTotal - previousTotal) / previousTotal) * 100 : null;
            var tone = growthPct == null ? 'neutral' : (growthPct > 0 ? 'good' : 'bad');
            var valueText = growthPct == null ? '—' : "".concat(growthPct > 0 ? '+' : '').concat(growthPct.toFixed(1), "%");
            return renderCommonKpiTile({
                label: 'Growth %',
                valueText: valueText,
                badge: { text: monthIndex === ALL_MONTH ? "YoY vs ".concat(prevYear) : "YoY vs ".concat(months[Math.max(0, Math.min(11, monthIndex))], " ").concat(prevYear), tone: tone },
                isMonthSelected: monthIndex !== ALL_MONTH
            });
        };
        _this.projectedConversionRateContent = function () {
            var _a, _b, _c;
            // -----------------------------
            // Inputs from GLOBAL FILTERS
            // -----------------------------
            var year = Number(_this.props.year);
            var monthIndex = Number(_this.props.monthIndex);
            var region = String((_a = _this.props.region) !== null && _a !== void 0 ? _a : 'ALL');
            var scenario = ((_b = _this.props.scenario) !== null && _b !== void 0 ? _b : 'Baseline');
            var selectedChannels = ((_c = _this.props.channels) !== null && _c !== void 0 ? _c : []);
            var ALL_MONTH = -1; // (matches app constant)
            var monthsArr = months;
            // -----------------------------
            // Region + Channel scope
            // -----------------------------
            var isRegionKeyLocal = function (r) {
                return r === 'AsiaPacific' || r === 'Europe' || r === 'NorthAmerica' || r === 'LatinAmerica' || r === 'MiddleEastAfrica';
            };
            var getIncludedRegions = function () {
                if (region === 'ALL')
                    return ['AsiaPacific', 'Europe', 'NorthAmerica', 'LatinAmerica', 'MiddleEastAfrica'];
                return isRegionKeyLocal(region) ? [region] : ['AsiaPacific', 'Europe', 'NorthAmerica', 'LatinAmerica', 'MiddleEastAfrica'];
            };
            var asChannelKeysLocal = function (arr) {
                return (arr !== null && arr !== void 0 ? arr : []).filter(function (x) { return x === 'Paid' || x === 'Organic' || x === 'Email' || x === 'Social'; });
            };
            var getIncludedChannels = function () {
                var ch = asChannelKeysLocal(selectedChannels);
                return ch.length ? ch : ['Paid', 'Organic', 'Email', 'Social'];
            };
            var selectedMonthIdxs = function () {
                if (monthIndex === ALL_MONTH)
                    return Array.from({ length: 12 }, function (_, i) { return i; });
                return [Math.max(0, Math.min(11, monthIndex))];
            };
            var scenarioDeltaPP = {
                Baseline: 0,
                Optimistic: 0.25,
                Conservative: -0.25
            };
            var buildProjectedCRTable = function (y) {
                var _a;
                var baseYear = Math.min(y, 2025);
                var drift = y > 2025 ? (y - 2025) * 0.05 : 0; // +0.05pp per year beyond 2025
                var base = buildChannelCRByYear(baseYear);
                var delta = drift + ((_a = scenarioDeltaPP[scenario]) !== null && _a !== void 0 ? _a : 0);
                return base.map(function (r) { return ({
                    m: r.m,
                    Paid: Math.max(0, +(r.Paid + delta).toFixed(2)),
                    Organic: Math.max(0, +(r.Organic + delta).toFixed(2)),
                    Email: Math.max(0, +(r.Email + delta).toFixed(2)),
                    Social: Math.max(0, +(r.Social + delta).toFixed(2))
                }); });
            };
            var projectedCRForMonth = function (y, mIdx) {
                var _a, _b;
                var crRows = buildProjectedCRTable(y);
                var cr = crRows[mIdx];
                if (!cr)
                    return 0;
                var totalOrders = 0;
                var totalVisits = 0;
                for (var _i = 0, _c = getIncludedRegions(); _i < _c.length; _i++) {
                    var r = _c[_i];
                    var row = buildChannelsByRegionYear(y, r)[mIdx];
                    if (!row)
                        continue;
                    for (var _d = 0, _e = getIncludedChannels(); _d < _e.length; _d++) {
                        var ch = _e[_d];
                        var orders = (_a = row[ch]) !== null && _a !== void 0 ? _a : 0;
                        var crPct = (_b = cr[ch]) !== null && _b !== void 0 ? _b : 0;
                        totalOrders += orders;
                        if (crPct > 0)
                            totalVisits += orders / (crPct / 100);
                    }
                }
                return totalVisits <= 0 ? 0 : (totalOrders / totalVisits) * 100;
            };
            // Current value (selected month or all-months aggregation)
            var idxs = selectedMonthIdxs();
            var current = idxs.length === 1
                ? projectedCRForMonth(year, idxs[0])
                : (function () {
                    var _a, _b;
                    // weighted aggregation across months
                    var orders = 0;
                    var visits = 0;
                    for (var _i = 0, idxs_7 = idxs; _i < idxs_7.length; _i++) {
                        var i = idxs_7[_i];
                        var crRows = buildProjectedCRTable(year);
                        var cr = crRows[i];
                        if (!cr)
                            continue;
                        for (var _c = 0, _d = getIncludedRegions(); _c < _d.length; _c++) {
                            var r = _d[_c];
                            var row = buildChannelsByRegionYear(year, r)[i];
                            if (!row)
                                continue;
                            for (var _e = 0, _f = getIncludedChannels(); _e < _f.length; _e++) {
                                var ch = _f[_e];
                                var o = (_a = row[ch]) !== null && _a !== void 0 ? _a : 0;
                                var c = (_b = cr[ch]) !== null && _b !== void 0 ? _b : 0;
                                orders += o;
                                if (c > 0)
                                    visits += o / (c / 100);
                            }
                        }
                    }
                    return visits <= 0 ? 0 : (orders / visits) * 100;
                })();
            // Previous year comparison (same months selection)
            var prevYear = year - 1;
            var previous = prevYear >= 2022
                ? (idxs.length === 1
                    ? projectedCRForMonth(prevYear, idxs[0])
                    : (function () {
                        var _a, _b;
                        var orders = 0;
                        var visits = 0;
                        for (var _i = 0, idxs_8 = idxs; _i < idxs_8.length; _i++) {
                            var i = idxs_8[_i];
                            var crRows = buildProjectedCRTable(prevYear);
                            var cr = crRows[i];
                            if (!cr)
                                continue;
                            for (var _c = 0, _d = getIncludedRegions(); _c < _d.length; _c++) {
                                var r = _d[_c];
                                var row = buildChannelsByRegionYear(prevYear, r)[i];
                                if (!row)
                                    continue;
                                for (var _e = 0, _f = getIncludedChannels(); _e < _f.length; _e++) {
                                    var ch = _f[_e];
                                    var o = (_a = row[ch]) !== null && _a !== void 0 ? _a : 0;
                                    var c = (_b = cr[ch]) !== null && _b !== void 0 ? _b : 0;
                                    orders += o;
                                    if (c > 0)
                                        visits += o / (c / 100);
                                }
                            }
                        }
                        return visits <= 0 ? 0 : (orders / visits) * 100;
                    })())
                : null;
            var deltaPct = previous && previous > 0 ? ((current - previous) / previous) * 100 : null;
            var badgeText = deltaPct === null
                ? '—'
                : "".concat(deltaPct > 0 ? '+' : '').concat(deltaPct.toFixed(1), "% vs ").concat(monthIndex === ALL_MONTH ? prevYear : "".concat(monthsArr[idxs[0]], " ").concat(prevYear));
            var badgeTone = deltaPct === null ? 'neutral' : deltaPct > 0 ? 'good' : deltaPct < 0 ? 'bad' : 'neutral';
            // Sparkline: 12 months for selected year
            var sparkData = Array.from({ length: 12 }, function (_, i) { return ({
                x: monthsArr[i],
                y: +projectedCRForMonth(year, i).toFixed(2)
            }); });
            return renderCommonKpiTile({
                label: 'Projected Conversion Rate',
                valueText: "".concat(current.toFixed(2), "%"),
                badge: { text: badgeText, tone: badgeTone, icon: deltaPct === null ? '•' : deltaPct > 0 ? '▲' : deltaPct < 0 ? '▼' : '•' },
                isMonthSelected: monthIndex !== ALL_MONTH
            });
        };
        // Update forecastAccuracyContent to use the shared calculation
        _this.forecastAccuracyContent = function () {
            var _a = _this.props, year = _a.year, monthIndex = _a.monthIndex;
            var monthsArr = months;
            // Use the shared accuracy calculation
            var current = _this.calculateForecastAccuracy();
            var prevYear = year - 1;
            var previous = prevYear >= 2022
                ? (function () {
                    var _a, _b;
                    // Calculate accuracy for previous year using same method
                    var prevMonthIdxs = monthIndex === ALL_MONTH
                        ? Array.from({ length: 12 }, function (_, i) { return i; })
                        : [Math.max(0, Math.min(11, monthIndex))];
                    var totalAbsErr = 0;
                    var totalActual = 0;
                    for (var _i = 0, prevMonthIdxs_1 = prevMonthIdxs; _i < prevMonthIdxs_1.length; _i++) {
                        var mi = prevMonthIdxs_1[_i];
                        var forecast = _this.computeFinalFor(prevYear, mi, 'Baseline');
                        var refRow = ((_a = monthlyRevenueByYear[prevYear]) !== null && _a !== void 0 ? _a : [])[mi];
                        var actual = (_b = refRow === null || refRow === void 0 ? void 0 : refRow.actual) !== null && _b !== void 0 ? _b : _this.computeFinalFor(prevYear, mi, 'Baseline');
                        var factor = _this.computeSelectionOrderFactor(prevYear, mi);
                        var actualSliced = actual * factor;
                        if (actualSliced <= 0)
                            continue;
                        totalAbsErr += Math.abs(actualSliced - forecast);
                        totalActual += actualSliced;
                    }
                    if (totalActual <= 0)
                        return 0;
                    var mape = (totalAbsErr / totalActual) * 100;
                    return Math.max(0, Math.min(100, 100 - mape));
                })()
                : null;
            var deltaPct = previous && previous > 0 ? ((current - previous) / previous) * 100 : null;
            var badgeText = deltaPct === null
                ? '—'
                : "".concat(deltaPct > 0 ? '+' : '').concat(deltaPct.toFixed(1), "% vs ").concat(monthIndex === ALL_MONTH ? prevYear : "".concat(monthsArr[Math.max(0, Math.min(11, monthIndex))], " ").concat(prevYear));
            var badgeTone = deltaPct === null ? 'neutral' : deltaPct > 0 ? 'good' : deltaPct < 0 ? 'bad' : 'neutral';
            return renderCommonKpiTile({
                label: 'Forecast Accuracy',
                valueText: "".concat(current.toFixed(1), "%"),
                badge: { text: badgeText, tone: badgeTone, icon: deltaPct === null ? '•' : deltaPct > 0 ? '▲' : deltaPct < 0 ? '▼' : '•' },
                isMonthSelected: monthIndex !== ALL_MONTH
            });
        };
        _this.axisformatCurrency = function (n) {
            return new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 2, notation: "compact" }).format(n !== null && n !== void 0 ? n : 0);
        };
        _this.revenueWaterfallAxisLabelRender = function (args) {
            var _a;
            if (args.axis && args.axis.name === 'percentAxis')
                return;
            if (((_a = args === null || args === void 0 ? void 0 : args.axis) === null || _a === void 0 ? void 0 : _a.valueType) !== 'Category') {
                args.text = _this.axisformatCurrency(args.value);
            }
        };
        // UPDATED: Revenue Waterfall — redesigned per spec
        _this.revenueWaterfallContent = function () {
            var _a = _this.props, year = _a.year, monthIndex = _a.monthIndex, scenario = _a.scenario;
            var _b = _this.state, includeSeasonality = _b.includeSeasonality, includeCampaigns = _b.includeCampaigns;
            var isYearly = monthIndex === ALL_MONTH;
            var sumBase = 0, sumSeason = 0, sumCamp = 0;
            var loopIdxs = isYearly ? Array.from({ length: 12 }, function (_, i) { return i; }) : [Math.max(0, Math.min(11, monthIndex))];
            for (var _i = 0, loopIdxs_1 = loopIdxs; _i < loopIdxs_1.length; _i++) {
                var i = loopIdxs_1[_i];
                var c = _this.buildAdjustedMonthComponents(year, i, scenario);
                sumBase += (c.base || 0);
                sumSeason += (c.seasonality || 0);
                sumCamp += (c.campaigns || 0);
            }
            // Net computed exactly like the tile
            var net = _this.sumComponentsWithToggles({ base: sumBase, seasonality: sumSeason, campaigns: sumCamp });
            var data = [];
            data.push({ x: isYearly ? 'Base (Sum)' : 'Base', y: sumBase });
            if (includeSeasonality)
                data.push({ x: isYearly ? 'Seasonality (Sum)' : 'Seasonality', y: sumSeason });
            if (includeCampaigns)
                data.push({ x: isYearly ? 'Campaign Impact (Sum)' : 'Campaign Impact', y: sumCamp });
            data.push({ x: isYearly ? 'Net Revenue (Year)' : 'Net Revenue (Month)' /* summary */ });
            var sumIndex = data.length - 1;
            var colors = { pos: '#554994', neg: '#FF5858', sum: '#850E35' };
            var title = "Revenue Waterfall";
            // Tooltip shows currency; Net bar will equal the tile
            var currency0 = function (v) {
                return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(Math.round(v || 0));
            };
            var onTooltipRender = function (args) {
                var _a, _b, _c, _d;
                var x = String((_b = (_a = args === null || args === void 0 ? void 0 : args.point) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : '');
                var y = Number((_d = (_c = args === null || args === void 0 ? void 0 : args.point) === null || _c === void 0 ? void 0 : _c.y) !== null && _d !== void 0 ? _d : 0);
                if (x.startsWith('Net Revenue')) {
                    args.text = "".concat(x, ": ").concat(currency0(net));
                }
                else {
                    args.text = "".concat(x, ": ").concat(currency0(y));
                }
            };
            var onaxisCurrencyTooltip = function (args) {
                var _a, _b, _c, _d, _e, _f;
                var y = Number((_b = (_a = args === null || args === void 0 ? void 0 : args.point) === null || _a === void 0 ? void 0 : _a.y) !== null && _b !== void 0 ? _b : 0);
                var x = String((_d = (_c = args === null || args === void 0 ? void 0 : args.point) === null || _c === void 0 ? void 0 : _c.x) !== null && _d !== void 0 ? _d : '');
                var series = String((_f = (_e = args === null || args === void 0 ? void 0 : args.series) === null || _e === void 0 ? void 0 : _e.name) !== null && _f !== void 0 ? _f : '');
                args.text = series ? "".concat(x, " : ").concat(_this.axisformatCurrency(y)) : "".concat(x, ": ").concat(_this.axisformatCurrency(y));
            };
            var onaxisTextRender = function (args) {
                // only modify series data labels (args.point exists for data-label rendering)
                if (args.point && typeof args.point.y === 'number') {
                    args.text = _this.axisformatCurrency(Number(args.point.y));
                }
            };
            return (React.createElement("div", { style: { height: '100%', width: '100%', padding: 8, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 8 } },
                React.createElement("div", { style: { flex: 1, minHeight: 0, height: '100%' } },
                    React.createElement(ej2_react_charts_1.ChartComponent, { id: "revenue-waterfall", ref: _this.revenueWaterfallRef, primaryXAxis: { valueType: 'Category', majorGridLines: { width: 0 }, labelIntersectAction: 'Trim' }, primaryYAxis: { labelFormat: 'c0', majorGridLines: { width: 1, color: '#e5e7eb' }, lineStyle: { width: 0 } }, tooltip: { enable: true }, textRender: onaxisTextRender, tooltipRender: onaxisCurrencyTooltip, axisLabelRender: _this.revenueWaterfallAxisLabelRender, load: onChartLoad },
                        React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.WaterfallSeries, ej2_react_charts_1.Tooltip, ej2_react_charts_1.DataLabel, ej2_react_charts_1.Category] }),
                        React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                            React.createElement(ej2_react_charts_1.SeriesDirective, { type: 'Waterfall', dataSource: data, xName: 'x', yName: 'y', intermediateSumIndexes: [], sumIndexes: [sumIndex], negativeFillColor: colors.neg, columnWidth: 0.6, fill: colors.pos, summaryFillColor: colors.sum, marker: { dataLabel: { visible: true, position: 'Outer', format: 'c0' } }, animation: { enable: false } }))))));
        };
        _this.revenueForecastAxisLabelRender = function (args) {
            var _a;
            if (args.axis && args.axis.name === 'percentAxis')
                return;
            if (((_a = args === null || args === void 0 ? void 0 : args.axis) === null || _a === void 0 ? void 0 : _a.valueType) !== 'Category') {
                args.text = formatCurrency(Number(args.value || 0));
            }
        };
        _this.onScenarioSharedTooltipRender = function (args) {
            var _a;
            var toNumber = function (s, abbr) {
                var n = Number(s.replace(/,/g, '')) || 0;
                if (abbr) {
                    var A = abbr.toUpperCase();
                    n *= A === 'K' ? 1e3 : A === 'M' ? 1e6 : A === 'B' ? 1e9 : 1;
                }
                return n;
            };
            // Replace any [$]<number>[K|M|B] with formatted currency (single $)
            var fmtLine = function (line) {
                return line.replace(/\$?\s*(-?\d[\d,]*)(\.\d+)?\s*([KMB])?/gi, function (_m, intPart, frac, abbr) {
                    if (frac === void 0) { frac = ''; }
                    var n = toNumber("".concat(intPart).concat(frac), abbr);
                    return formatCurrency(n);
                });
            };
            if (Array.isArray(args.text)) {
                args.text = args.text.map(function (t) { return fmtLine(String(t)); });
            }
            else {
                var single = fmtLine(String((_a = args.text) !== null && _a !== void 0 ? _a : ''));
                args.text = [single];
            }
        };
        _this.scenarioForecastContent = function () {
            var _a, _b;
            var scenario = _this.props.scenario;
            var _c = _this.buildScenarioRangeAndLines(), range = _c.range, baseline = _c.baseline, optimistic = _c.optimistic, conservative = _c.conservative, yMax = _c.yMax, windowMode = _c.windowMode, firstLabel = _c.firstLabel, lastLabel = _c.lastLabel;
            var title = windowMode
                ? "Revenue Forecast (Next 6 months) \u2022 from ".concat(firstLabel, " \u2192 ").concat(lastLabel)
                : "Revenue Forecast (12 months) \u2022 Year ".concat((_b = (_a = baseline === null || baseline === void 0 ? void 0 : baseline[0]) === null || _a === void 0 ? void 0 : _a.year) !== null && _b !== void 0 ? _b : '');
            var colorRangeFill = '#F5C6A5';
            var colorRangeBorder = '#05B3DA';
            var colorBaseline = '#B9005B'; // Baseline
            var colorOptimistic = '#FF5858'; // Optimistic
            var colorConservative = '#554994'; // Conservative
            var marker = function (fill, shape) { return ({
                visible: true,
                shape: shape,
                width: 8,
                height: 8,
                border: { width: 2, color: fill }
            }); };
            return (React.createElement("div", { style: { height: '100%', width: '100%', padding: 8, boxSizing: 'border-box' } },
                React.createElement("div", { style: { height: "calc(100% - 10px)" } },
                    React.createElement(ej2_react_charts_1.ChartComponent, { id: "scenarioSplineRangeArea", ref: _this.scenarioSplineRangeAreaRef, primaryXAxis: { valueType: 'Category', majorGridLines: { width: 0 }, majorTickLines: { width: 0 }, labelIntersectAction: 'Trim' }, primaryYAxis: {
                            title: '', labelFormat: 'c0', minimum: 0, maximum: yMax,
                            majorGridLines: { width: 1, color: '#e5e7eb' },
                            lineStyle: { width: 0 }, majorTickLines: { width: 0 }
                        }, legendSettings: { visible: true }, tooltip: { enable: true, shared: true }, sharedTooltipRender: _this.onScenarioSharedTooltipRender, chartArea: { border: { width: 0 } }, width: "100%", height: "100%", axisLabelRender: _this.revenueForecastAxisLabelRender, load: onChartLoad },
                        React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.SplineRangeAreaSeries, ej2_react_charts_1.SplineSeries, ej2_react_charts_1.Legend, ej2_react_charts_1.Tooltip, ej2_react_charts_1.Category] }),
                        React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                            React.createElement(ej2_react_charts_1.SeriesDirective, { type: "SplineRangeArea", name: "Range: Conservative \u2194 Optimistic", xName: "x", high: "high", low: "low", dataSource: range, opacity: 0.35, fill: colorRangeFill, border: { width: 1, color: colorRangeBorder }, animation: { enable: false } }),
                            React.createElement(ej2_react_charts_1.SeriesDirective, { type: "Spline", name: "Optimistic", xName: "x", yName: "y", dataSource: optimistic, width: 2, fill: colorOptimistic, marker: marker(colorOptimistic, 'Triangle'), animation: { enable: false } }),
                            React.createElement(ej2_react_charts_1.SeriesDirective, { type: "Spline", name: "Baseline", xName: "x", yName: "y", dataSource: baseline, width: 2, fill: colorBaseline, marker: marker(colorBaseline, 'Circle'), animation: { enable: false } }),
                            React.createElement(ej2_react_charts_1.SeriesDirective, { type: "Spline", name: "Conservative", xName: "x", yName: "y", dataSource: conservative, width: 2, fill: colorConservative, marker: marker(colorConservative, 'Diamond'), animation: { enable: false } }))))));
        };
        // --- Palette (light -> dark) for the heatmap values
        _this.HeatmapGradient = [
            { color: '#FEEBF4' },
            { color: '#F679B7' },
            { color: '#CF3883' },
            { color: '#BF196B' } // high
        ];
        _this.HeatMapChannels = [
            'Paid', 'Organic', 'Email', 'Social'
        ];
        _this.renderChannelWeekHeatmap = function () {
            var _a = _this.props, year = _a.year, monthIndex = _a.monthIndex, scenario = _a.scenario;
            var data = _this.buildChannelRevenueHeatMapData(year, monthIndex, scenario);
            return (React.createElement("div", { style: { height: '100%', width: '100%', padding: 8, boxSizing: 'border-box' } },
                React.createElement(ej2_react_heatmap_1.HeatMapComponent, { id: "channelRevenueHeatmap", ref: _this.channelHeatmapRef, dataSource: data, dataSourceSettings: {
                        isJsonData: true,
                        adaptorType: 'Cell',
                        xDataMapping: 'month',
                        yDataMapping: 'channel',
                        valueMapping: 'value',
                    }, legendSettings: { position: 'Bottom' }, cellSettings: {
                        border: { width: 0.5, color: '#e5e7eb' },
                        format: 'c0' // show currency in tooltip; cell text will be hidden by default
                    }, load: onHeatMapLoad },
                    React.createElement(ej2_react_heatmap_1.Inject, { services: [ej2_react_heatmap_1.Adaptor, ej2_react_heatmap_1.Legend, ej2_react_heatmap_1.Tooltip] }))));
        };
        _this.calculateForecastAccuracy = function () {
            var _a, _b;
            var _c = _this.props, year = _c.year, monthIndex = _c.monthIndex, scenario = _c.scenario;
            var monthIdxs = _this.getMonthIdxs();
            var totalAbsErr = 0;
            var totalActual = 0;
            for (var _i = 0, monthIdxs_8 = monthIdxs; _i < monthIdxs_8.length; _i++) {
                var mi = monthIdxs_8[_i];
                // Forecast for current scenario
                var forecast = _this.computeFinalFor(year, mi, scenario);
                // Actual/baseline reference (use 2025 actuals if forecasting 2026/2027)
                var refYear = year <= 2025 ? year : 2025;
                var refRow = ((_a = monthlyRevenueByYear[refYear]) !== null && _a !== void 0 ? _a : [])[mi];
                var actual = (_b = refRow === null || refRow === void 0 ? void 0 : refRow.actual) !== null && _b !== void 0 ? _b : _this.computeFinalFor(refYear, mi, 'Baseline');
                // Apply region/channel slice factor to actual for fair comparison
                var factor = _this.computeSelectionOrderFactor(refYear, mi);
                var actualSliced = actual * factor;
                if (actualSliced <= 0)
                    continue;
                totalAbsErr += Math.abs(actualSliced - forecast);
                totalActual += actualSliced;
            }
            if (totalActual <= 0)
                return 0;
            // MAPE-based accuracy: 100 - (error%)
            var mape = (totalAbsErr / totalActual) * 100;
            return Math.max(0, Math.min(100, 100 - mape));
        };
        return _this;
    }
    ForecastClass.prototype.componentDidMount = function () {
        window.addEventListener('sidebar-toggled', this.ForecastDashboardCreated);
        window.addEventListener('resize', this.ForecastDashboardCreated);
    };
    ForecastClass.prototype.componentWillUnmount = function () {
        window.removeEventListener('sidebar-toggled', this.ForecastDashboardCreated);
        window.removeEventListener('resize', this.ForecastDashboardCreated);
    };
    ForecastClass.prototype.componentDidUpdate = function (prevProps) {
        var _a, _b, _c;
        var changed = prevProps.year !== this.props.year ||
            prevProps.monthIndex !== this.props.monthIndex ||
            prevProps.scenario !== this.props.scenario ||
            prevProps.region !== this.props.region ||
            !arrayEqual(prevProps.channels, this.props.channels);
        if (changed) {
            //this.ForecastRef.current?.refresh();
            (_a = this.revenueWaterfallRef.current) === null || _a === void 0 ? void 0 : _a.refresh();
            (_b = this.scenarioSplineRangeAreaRef.current) === null || _b === void 0 ? void 0 : _b.refresh();
            (_c = this.channelHeatmapRef.current) === null || _c === void 0 ? void 0 : _c.refresh();
        }
    };
    ForecastClass.computeSeasonalityIndex = function () {
        var _a, _b, _c;
        var years = [2022, 2023, 2024, 2025]; // present in your dataset
        var totals = Array(12).fill(0);
        var n = 0;
        for (var _i = 0, years_1 = years; _i < years_1.length; _i++) {
            var yr = years_1[_i];
            var rows = (_a = monthlyRevenueByYear[yr]) !== null && _a !== void 0 ? _a : [];
            if (!rows || rows.length < 12)
                continue;
            for (var i = 0; i < 12; i++)
                totals[i] += (_c = (_b = rows[i]) === null || _b === void 0 ? void 0 : _b.actual) !== null && _c !== void 0 ? _c : 0;
            n++;
        }
        var avg = totals.map(function (t) { return (n > 0 ? t / n : 0); });
        var yearAvg = avg.reduce(function (s, v) { return s + v; }, 0) / (avg.length || 1);
        if (yearAvg <= 0)
            return Array(12).fill(1);
        return avg.map(function (v) { return (v / yearAvg) || 1; });
    };
    ForecastClass.getSeasonalityIndex = function () {
        if (!this._seasonalityCache) {
            this._seasonalityCache = ForecastClass.computeSeasonalityIndex();
        }
        return this._seasonalityCache;
    };
    ForecastClass.prototype.avgActualForMonthOverHistory = function (monthIndex) {
        var _a;
        var sum = 0, cnt = 0;
        for (var _i = 0, _b = [2022, 2023, 2024, 2025]; _i < _b.length; _i++) {
            var yr = _b[_i];
            var r = ((_a = monthlyRevenueByYear[yr]) !== null && _a !== void 0 ? _a : [])[monthIndex];
            if ((r === null || r === void 0 ? void 0 : r.actual) != null) {
                sum += r.actual;
                cnt++;
            }
        }
        return cnt > 0 ? sum / cnt : 0;
    };
    ForecastClass.prototype.avgMonthlyActualForYear = function (year) {
        var _a;
        var rows = (_a = monthlyRevenueByYear[year]) !== null && _a !== void 0 ? _a : [];
        if (!rows.length)
            return 0;
        var total = rows.reduce(function (s, r) { var _a; return s + ((_a = r === null || r === void 0 ? void 0 : r.actual) !== null && _a !== void 0 ? _a : 0); }, 0);
        return total / Math.max(rows.length, 1);
    };
    ForecastClass.prototype.avgPromoShareForMonth = function (monthIndex) {
        var _a, _b, _c, _d;
        var promo = 0, total = 0;
        for (var _i = 0, _e = [2022, 2023, 2024, 2025]; _i < _e.length; _i++) {
            var yr = _e[_i];
            var row = ((_a = buildPromoNonPromoNetSales(yr)) !== null && _a !== void 0 ? _a : [])[monthIndex];
            if (!row)
                continue;
            promo += (_b = row.promo) !== null && _b !== void 0 ? _b : 0;
            total += ((_c = row.promo) !== null && _c !== void 0 ? _c : 0) + ((_d = row.nonPromo) !== null && _d !== void 0 ? _d : 0);
        }
        return total > 0 ? promo / total : NaN;
    };
    ForecastClass.prototype.avgPaidShareForMonth = function (monthIndex) {
        var _a, _b, _c, _d, _e, _f;
        var paid = 0, total = 0;
        for (var _i = 0, _g = [2022, 2023, 2024, 2025]; _i < _g.length; _i++) {
            var yr = _g[_i];
            var o = ((_a = buildOrdersByChannelYear(yr)) !== null && _a !== void 0 ? _a : [])[monthIndex];
            if (!o)
                continue;
            paid += (_b = o.Paid) !== null && _b !== void 0 ? _b : 0;
            total += ((_c = o.Paid) !== null && _c !== void 0 ? _c : 0) + ((_d = o.Organic) !== null && _d !== void 0 ? _d : 0) + ((_e = o.Email) !== null && _e !== void 0 ? _e : 0) + ((_f = o.Social) !== null && _f !== void 0 ? _f : 0);
        }
        return total > 0 ? paid / total : NaN;
    };
    ForecastClass.prototype.getLastYearActual = function (year, monthIndex) {
        var _a;
        var prev = year - 1;
        var prevRow = ((_a = monthlyRevenueByYear[prev]) !== null && _a !== void 0 ? _a : [])[monthIndex];
        if ((prevRow === null || prevRow === void 0 ? void 0 : prevRow.actual) && prevRow.actual > 0)
            return prevRow.actual;
        var histAvg = this.avgActualForMonthOverHistory(monthIndex);
        if (histAvg > 0)
            return histAvg;
        var prevYearAvgMonth = this.avgMonthlyActualForYear(prev);
        var floor = Math.max(prevYearAvgMonth * 0.5, 10000); // tune as needed
        return floor;
    };
    ForecastClass.prototype.campaignImpact = function (base, year, monthIndex, scenario) {
        var _a, _b, _c;
        var prev = year - 1;
        var row = ((_a = buildPromoNonPromoNetSales(prev)) !== null && _a !== void 0 ? _a : [])[monthIndex];
        var promo = (_b = row === null || row === void 0 ? void 0 : row.promo) !== null && _b !== void 0 ? _b : 0;
        var nonPromo = (_c = row === null || row === void 0 ? void 0 : row.nonPromo) !== null && _c !== void 0 ? _c : 0;
        var promoShare = (promo + nonPromo) > 0 ? (promo / (promo + nonPromo)) : NaN;
        if (!isFinite(promoShare))
            promoShare = this.avgPromoShareForMonth(monthIndex);
        if (!isFinite(promoShare))
            promoShare = 0.25;
        var baseImpact = base * (promoShare * 0.05);
        return baseImpact * this.ScenarioAssumptions[scenario].campaignMultiplier;
    };
    ForecastClass.prototype.channelImpact = function (base, year, monthIndex, scenario) {
        var _a, _b, _c, _d, _e;
        var prev = year - 1;
        var o = ((_a = buildOrdersByChannelYear(prev)) !== null && _a !== void 0 ? _a : [])[monthIndex];
        var paid = (_b = o === null || o === void 0 ? void 0 : o.Paid) !== null && _b !== void 0 ? _b : 0, org = (_c = o === null || o === void 0 ? void 0 : o.Organic) !== null && _c !== void 0 ? _c : 0, em = (_d = o === null || o === void 0 ? void 0 : o.Email) !== null && _d !== void 0 ? _d : 0, so = (_e = o === null || o === void 0 ? void 0 : o.Social) !== null && _e !== void 0 ? _e : 0;
        var tot = paid + org + em + so;
        var paidShare = tot > 0 ? (paid / tot) : NaN;
        if (!isFinite(paidShare))
            paidShare = this.avgPaidShareForMonth(monthIndex);
        if (!isFinite(paidShare))
            paidShare = 0.30;
        var baseImpact = base * (paidShare * 0.04);
        return baseImpact * this.ScenarioAssumptions[scenario].channelMultiplier;
    };
    ForecastClass.prototype.buildMonthComponents = function (year, monthIndex, scenario) {
        var _a, _b;
        var seasonIdx = (_a = ForecastClass.getSeasonalityIndex()[monthIndex]) !== null && _a !== void 0 ? _a : 1;
        var lastYearActual = this.getLastYearActual(year, monthIndex);
        var growthBase = ((_b = this.ForecastGrowth[year]) !== null && _b !== void 0 ? _b : 1) * lastYearActual;
        var rawGrowth = growthBase * (this.ScenarioAssumptions[scenario].growthMultiplier - 1);
        var rawSeasonality = growthBase * (seasonIdx - 1);
        var rawCampaigns = this.campaignImpact(growthBase, year, monthIndex, scenario);
        var rawChannels = this.channelImpact(growthBase, year, monthIndex, scenario);
        var targetFinal = growthBase + rawGrowth + rawSeasonality + rawCampaigns + rawChannels;
        var base = Math.max(growthBase, 1);
        var minComp = Math.max(base * 0.005, 1000);
        var applyFloor = function (v) {
            if (v === 0)
                return minComp;
            if (v > 0)
                return Math.max(v, minComp);
            return Math.min(v, -minComp);
        };
        var growth = applyFloor(rawGrowth);
        var seasonality = applyFloor(rawSeasonality);
        var campaigns = applyFloor(rawCampaigns);
        var channels = applyFloor(rawChannels);
        var compSum = growth + seasonality + campaigns + channels;
        var final = base + compSum;
        var delta = targetFinal - final;
        if (isFinite(delta) && Math.abs(delta) > 1e-6) {
            var weights = [Math.abs(growth), Math.abs(seasonality), Math.abs(campaigns), Math.abs(channels)];
            var wSum = weights.reduce(function (s, v) { return s + v; }, 0) || 1;
            growth += delta * (weights[0] / wSum);
            seasonality += delta * (weights[1] / wSum);
            campaigns += delta * (weights[2] / wSum);
            channels += delta * (weights[3] / wSum);
            final = base + growth + seasonality + campaigns + channels;
        }
        return {
            base: this.clamp(base),
            growth: this.clamp(growth),
            seasonality: this.clamp(seasonality),
            campaigns: this.clamp(campaigns),
            channels: this.clamp(channels),
            final: this.clamp(final)
        };
    };
    /* ===========================
       Conversion Funnel (Pyramid)
       =========================== */
    // compute selection factor (region+channels) for a given month/year
    ForecastClass.prototype.computeSelectionOrderFactor = function (year, monthIdx) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        // denom = total orders across all regions & channels for that year/month
        var denom = 0;
        var allRegions = ['AsiaPacific', 'Europe', 'NorthAmerica', 'LatinAmerica', 'MiddleEastAfrica'];
        for (var _i = 0, allRegions_5 = allRegions; _i < allRegions_5.length; _i++) {
            var r = allRegions_5[_i];
            var row = buildChannelsByRegionYear(year, r)[monthIdx];
            if (!row)
                continue;
            denom += ((_a = row.Paid) !== null && _a !== void 0 ? _a : 0) + ((_b = row.Organic) !== null && _b !== void 0 ? _b : 0) + ((_c = row.Email) !== null && _c !== void 0 ? _c : 0) + ((_d = row.Social) !== null && _d !== void 0 ? _d : 0);
        }
        if (denom <= 0)
            return 1;
        // numerator: orders for included regions & included channels (from App props)
        var includedRegions = (this.props && this.props.region === 'ALL') ? allRegions
            : (isRegionKey((_f = (_e = this.props) === null || _e === void 0 ? void 0 : _e.region) !== null && _f !== void 0 ? _f : '') ? [this.props.region] : allRegions);
        var selectedChannels = asChannelKeys((_h = (_g = this.props) === null || _g === void 0 ? void 0 : _g.channels) !== null && _h !== void 0 ? _h : []);
        var channels = selectedChannels.length ? selectedChannels : ALL_CHANNELS;
        var numer = 0;
        for (var _k = 0, includedRegions_3 = includedRegions; _k < includedRegions_3.length; _k++) {
            var r = includedRegions_3[_k];
            var row = buildChannelsByRegionYear(year, r)[monthIdx];
            if (!row)
                continue;
            for (var _l = 0, channels_14 = channels; _l < channels_14.length; _l++) {
                var ch = channels_14[_l];
                numer += (_j = row[ch]) !== null && _j !== void 0 ? _j : 0;
            }
        }
        return denom > 0 ? (numer / denom) : 1;
    };
    // sum components consistently (respect panel toggles)
    ForecastClass.prototype.sumComponentsWithToggles = function (c) {
        var s = this.state.includeSeasonality ? (c.seasonality || 0) : 0;
        var k = this.state.includeCampaigns ? (c.campaigns || 0) : 0;
        return Math.max(0, (c.base || 0) + s + k);
    };
    // single source of truth for “Projected Revenue” total (year or month)
    ForecastClass.prototype.projectedTotalForSelection = function (year, monthIndex, scenario) {
        var idxs = (monthIndex === ALL_MONTH)
            ? Array.from({ length: 12 }, function (_, i) { return i; })
            : [Math.max(0, Math.min(11, monthIndex))];
        var total = 0;
        for (var _i = 0, idxs_9 = idxs; _i < idxs_9.length; _i++) {
            var i = idxs_9[_i];
            var c = this.buildAdjustedMonthComponents(year, i, scenario); // base/seasonality/campaigns already region+channel sliced
            total += this.sumComponentsWithToggles(c);
        }
        return Math.round(total);
    };
    ForecastClass.prototype.buildAdjustedMonthComponents = function (year, monthIdx, scenario) {
        var _a, _b, _c, _d, _e;
        // Use base engine
        var c = this.buildMonthComponents(year, monthIdx, scenario);
        // Region + Channel slice factor (make scenario delta filter-aware too)
        var factor = this.computeSelectionOrderFactor(year <= 2027 ? year : 2027, monthIdx);
        var base = Math.max(0, ((_a = c.base) !== null && _a !== void 0 ? _a : 0) * factor);
        var seasonality = ((_b = c.seasonality) !== null && _b !== void 0 ? _b : 0) * factor;
        var campaigns = ((_c = c.campaigns) !== null && _c !== void 0 ? _c : 0) * factor;
        // Add explicit scenario delta (scaled by selection factor)
        var scenAdj = ((_d = this.ScenarioAbsoluteDelta[scenario]) !== null && _d !== void 0 ? _d : 0) * factor;
        campaigns += scenAdj;
        return { base: base, seasonality: seasonality, campaigns: campaigns, final: Math.max(0, ((_e = c.final) !== null && _e !== void 0 ? _e : 0) * factor) };
    };
    ForecastClass.prototype.getIncludedRegions = function () {
        var r = this.props.region;
        if (r === 'ALL')
            return ['AsiaPacific', 'Europe', 'NorthAmerica', 'LatinAmerica', 'MiddleEastAfrica'];
        return isRegionKey(r) ? [r] : ['AsiaPacific', 'Europe', 'NorthAmerica', 'LatinAmerica', 'MiddleEastAfrica'];
    };
    ForecastClass.prototype.getIncludedChannels = function () {
        var _a;
        var sel = asChannelKeys((_a = this.props.channels) !== null && _a !== void 0 ? _a : []);
        return sel.length ? sel : ['Paid', 'Organic', 'Email', 'Social'];
    };
    ForecastClass.prototype.getMonthIdxs = function () {
        return this.props.monthIndex === ALL_MONTH
            ? Array.from({ length: 12 }, function (_, i) { return i; })
            : [Math.max(0, Math.min(11, this.props.monthIndex))];
    };
    // Channel shares from prior-year orders, restricted to selected Regions + Channels (month/year aware)
    ForecastClass.prototype.getChannelSharesFromPriorYear = function (year, monthIndex) {
        var _a;
        var py = Math.max(2022, year - 1);
        var monthsSel = (monthIndex === ALL_MONTH) ? Array.from({ length: 12 }, function (_, i) { return i; }) : [Math.max(0, Math.min(11, monthIndex))];
        var agg = { Paid: 0, Organic: 0, Email: 0, Social: 0 };
        for (var _i = 0, monthsSel_2 = monthsSel; _i < monthsSel_2.length; _i++) {
            var mi = monthsSel_2[_i];
            for (var _b = 0, _c = this.getIncludedRegions(); _b < _c.length; _b++) {
                var r = _c[_b];
                var row = buildChannelsByRegionYear(py, r)[mi];
                if (!row)
                    continue;
                for (var _d = 0, _e = this.getIncludedChannels(); _d < _e.length; _d++) {
                    var ch = _e[_d];
                    agg[ch] += (_a = row[ch]) !== null && _a !== void 0 ? _a : 0;
                }
            }
        }
        var total = Object.keys(agg).reduce(function (s, k) { var _a; return s + ((_a = agg[k]) !== null && _a !== void 0 ? _a : 0); }, 0) || 1;
        return {
            Paid: agg.Paid / total,
            Organic: agg.Organic / total,
            Email: agg.Email / total,
            Social: agg.Social / total
        };
    };
    // ---------- Helpers (Region/Channel slices for Spend/Orders) ----------
    ForecastClass.prototype.computeFinalFor = function (year, monthIdx, scenario) {
        var _a;
        var clampToNonNeg = function (v) { return Math.max(0, Math.round(v)); };
        if (year <= 2027) {
            var comps = this.buildAdjustedMonthComponents(year, monthIdx, scenario);
            return clampToNonNeg(this.sumComponentsWithToggles(comps));
        }
        var base2027 = this.computeFinalFor(2027, monthIdx, scenario);
        var yearsAhead = year - 2027;
        var perYearGrowth = (_a = this.ForecastGrowth[2027]) !== null && _a !== void 0 ? _a : 1.15;
        var factor = Math.pow(perYearGrowth, yearsAhead);
        return clampToNonNeg(base2027 * factor);
    };
    // 12-month series for a given year & scenario (now uses computeFinalFor -> unified)
    ForecastClass.prototype.buildScenarioMonthlyForecast = function (year, scenario) {
        var _this = this;
        return months.map(function (m, idx) {
            var y = _this.computeFinalFor(year, idx, scenario);
            return { x: "".concat(m, " ").concat(year), m: m, idx: idx, y: y, year: year };
        });
    };
    ForecastClass.prototype.buildScenarioWindowForecast = function (year, startIdx, count, scenario) {
        var out = [];
        var y = year;
        var i = startIdx;
        while (out.length < count) {
            if (i > 11) {
                i = 0;
                y += 1;
            } // roll to next year (computeFinalFor handles y>2027)
            var val = this.computeFinalFor(y, i, scenario);
            out.push({ x: "".concat(months[i], " ").concat(y), m: months[i], idx: i, y: val, year: y });
            i++;
        }
        return out;
    };
    ForecastClass.prototype.buildScenarioRangeAndLines = function () {
        var _a, _b, _c, _d;
        var _e = this.props, year = _e.year, monthIndex = _e.monthIndex;
        var windowMode = monthIndex !== ALL_MONTH;
        var count = windowMode ? 6 : 12;
        var baseline = windowMode
            ? this.buildScenarioWindowForecast(year, monthIndex, count, 'Baseline')
            : this.buildScenarioMonthlyForecast(year, 'Baseline');
        var optimistic = windowMode
            ? this.buildScenarioWindowForecast(year, monthIndex, count, 'Optimistic')
            : this.buildScenarioMonthlyForecast(year, 'Optimistic');
        var conservative = windowMode
            ? this.buildScenarioWindowForecast(year, monthIndex, count, 'Conservative')
            : this.buildScenarioMonthlyForecast(year, 'Conservative');
        var range = baseline.map(function (p, i) {
            var _a, _b, _c, _d;
            var hi = (_b = (_a = optimistic[i]) === null || _a === void 0 ? void 0 : _a.y) !== null && _b !== void 0 ? _b : p.y;
            var lo = (_d = (_c = conservative[i]) === null || _c === void 0 ? void 0 : _c.y) !== null && _d !== void 0 ? _d : p.y;
            return { x: p.x, high: Math.max(hi, lo), low: Math.min(hi, lo) };
        });
        var maxVal = Math.max.apply(Math, __spreadArray(__spreadArray(__spreadArray(__spreadArray([0], range.map(function (r) { return r.high || 0; }), false), baseline.map(function (d) { return d.y || 0; }), false), optimistic.map(function (d) { return d.y || 0; }), false), conservative.map(function (d) { return d.y || 0; }), false));
        var yMax = Math.max(10000, Math.ceil(maxVal * 1.12 / 10000) * 10000);
        // also return first/last labels for subtitle
        var firstLabel = (_b = (_a = baseline[0]) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : '';
        var lastLabel = (_d = (_c = baseline[baseline.length - 1]) === null || _c === void 0 ? void 0 : _c.x) !== null && _d !== void 0 ? _d : '';
        return { range: range, baseline: baseline, optimistic: optimistic, conservative: conservative, yMax: yMax, windowMode: windowMode, firstLabel: firstLabel, lastLabel: lastLabel };
    };
    ForecastClass.prototype.getPriorYearChannelShares = function () {
        var byMonth = buildOrdersByChannelYear(2025); // already defined at top-level utilities 
        var sum = function (k) {
            return byMonth.reduce(function (s, r) { return s + (Number(r[k]) || 0); }, 0);
        };
        var paid = sum('Paid');
        var org = sum('Organic');
        var em = sum('Email');
        var soc = sum('Social');
        var total = paid + org + em + soc;
        if (total <= 0) {
            return { Paid: 0.25, Organic: 0.25, Email: 0.25, Social: 0.25 };
        }
        return {
            Paid: paid / total,
            Organic: org / total,
            Email: em / total,
            Social: soc / total
        };
    };
    ForecastClass.prototype.buildChannelRevenueHeatMapData = function (year, monthIndex, scenario) {
        var _this = this;
        if (year !== 2026 && year !== 2027)
            return [];
        var buildForMonth = function (mIdx) {
            var monthlyFinal = Math.max(0, Math.round(_this.computeFinalFor(year, mIdx, scenario) || 0));
            var sharesRaw = _this.getChannelSharesFromPriorYear(year, mIdx) || { Paid: 0, Organic: 0, Email: 0, Social: 0 };
            var shareSum = _this.HeatMapChannels.reduce(function (s, ch) { return s + sharesRaw[ch]; }, 0);
            if (shareSum <= 0) {
                shareSum = 4; // 4 channels
                _this.HeatMapChannels.forEach(function (ch) { return (sharesRaw[ch] = 1); });
            }
            var alloc = {};
            var allocated = 0;
            for (var _i = 0, _a = _this.HeatMapChannels; _i < _a.length; _i++) {
                var ch = _a[_i];
                var frac = sharesRaw[ch] / shareSum;
                var v = Math.round(monthlyFinal * frac);
                alloc[ch] = Math.max(0, v);
                allocated += alloc[ch];
            }
            var delta = monthlyFinal - allocated;
            if (delta !== 0) {
                // Distribute +/-1 across channels by descending share weight
                var ordered = __spreadArray([], _this.HeatMapChannels, true).sort(function (a, b) { var _a, _b; return ((_a = sharesRaw[b]) !== null && _a !== void 0 ? _a : 0) - ((_b = sharesRaw[a]) !== null && _b !== void 0 ? _b : 0); });
                var i = 0;
                while (delta !== 0 && i < ordered.length * 3) {
                    var ch = ordered[i % ordered.length];
                    if (delta > 0) {
                        alloc[ch] += 1;
                        delta -= 1;
                    }
                    else if (delta < 0 && alloc[ch] > 0) {
                        alloc[ch] -= 1;
                        delta += 1;
                    }
                    i++;
                }
            }
            var monthName = months[mIdx];
            return _this.HeatMapChannels.map(function (ch) { return ({
                month: monthName,
                channel: ch,
                value: alloc[ch] // <- valueMapping will use this
            }); });
        };
        if (monthIndex === ALL_MONTH) {
            // All months for the selected year
            var out = [];
            for (var i = 0; i < months.length; i++)
                out.push.apply(out, buildForMonth(i));
            return out;
        }
        // Single selected month
        if (monthIndex >= 0 && monthIndex < months.length) {
            return buildForMonth(monthIndex);
        }
        return [];
    };
    ForecastClass.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "Container" },
            React.createElement("div", { className: "sidebar-content" },
                React.createElement(ej2_react_layouts_1.DashboardLayoutComponent, { ref: this.ForecastRef, id: "ecommerce_marketing_forecast_dashboard", columns: 8, cellAspectRatio: 1, cellSpacing: [12, 12], allowResizing: false, allowDragging: false, created: this.ForecastDashboardCreated, mediaQuery: "(max-width:950px)" },
                    React.createElement(ej2_react_layouts_1.PanelsDirective, null,
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 0, col: 0, content: function () { return _this.projectedRevenueContent(); } }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 0, col: 2, content: function () { return _this.growthPercentageContent(); } }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 0, col: 4, content: function () { return _this.projectedConversionRateContent(); } }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 2, sizeY: 1, row: 0, col: 6, content: function () { return _this.forecastAccuracyContent(); } }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 8, sizeY: 3, row: 1, col: 0, header: "<div>Revenue Flow Breakdown</div>", content: function () { return _this.revenueWaterfallContent(); } }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 8, sizeY: 3, row: 4, col: 0, header: "<div>Projected Revenue</div>", content: function () { return _this.scenarioForecastContent(); } }),
                        React.createElement(ej2_react_layouts_1.PanelDirective, { sizeX: 8, sizeY: 4, row: 7, col: 0, header: "<div>Channel Contribution Overview</div>", content: function () { return _this.renderChannelWeekHeatmap(); } }))))));
    };
    return ForecastClass;
}(React.Component));
/* ===========================
   Marketing Dashboard Shell
   =========================== */
var EcommerceMarketingDashboard = /** @class */ (function (_super) {
    __extends(EcommerceMarketingDashboard, _super);
    function EcommerceMarketingDashboard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            selectedId: 'overview',
            year: 2025,
            monthIndex: ALL_MONTH,
            region: 'ALL',
            channels: 'ALL',
            categories: 'ALL',
            campaign: 'ALL',
            brand: "ALL",
            warehouse: "ALL",
            scenario: 'Baseline',
            isDocked: true
        };
        _this.sidebarRef = React.createRef();
        _this.allowSidebarOpen = false;
        _this.items = [
            { id: 'overview', iconCss: 'e-icons home', text: 'Overview' },
            { id: 'promotion', iconCss: 'e-icons filter', text: 'Promotion' },
            { id: 'performance', iconCss: 'e-icons analyticsChart', text: 'Product and Sales' },
            { id: 'forecast_revenue', iconCss: 'e-icons analytics', text: 'Revenue Forecasting' }
        ];
        _this.onMenuClicked = function (event) {
            var _a;
            _this.allowSidebarOpen = true;
            (_a = _this.sidebarRef.current) === null || _a === void 0 ? void 0 : _a.toggle();
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
        };
        _this.onSidebarClose = function () {
            // Ensure future opens require Menu click again
            _this.allowSidebarOpen = false;
            setTimeout(_this.notifyResize, 400);
            _this.setState({ isDocked: true });
        };
        // Helper: current channels as ChannelKey[]
        _this.getChannelsArray = function () {
            var raw = _this.state.channels;
            if (Array.isArray(raw))
                return asChannelKeys(raw);
            if (raw === 'ALL' || raw == null)
                return [];
            return asChannelKeys([String(raw)]);
        };
        // If entering Promotion with a non‑promo selection (e.g., Organic/Social), fallback to ALL
        _this.normalizeChannelsForPromotion = function () {
            var sel = _this.getChannelsArray(); // [] means ALL
            var hasPromo = sel.length === 0 || sel.includes('Paid') || sel.includes('Email');
            return hasPromo ? _this.state.channels : 'ALL';
        };
        _this.handleNavClick = function (id) {
            if (id === 'forecast_revenue') {
                _this.setState({ selectedId: id, year: 2026 });
                return;
            }
            if (id === 'promotion') {
                var fixedChannels = _this.normalizeChannelsForPromotion();
                var patch = { selectedId: id };
                if (fixedChannels !== _this.state.channels)
                    patch.channels = fixedChannels;
                _this.setState(patch);
                return;
            }
            // other tabs: keep year sane if coming from forecast years
            if (_this.state.year === 2026 || _this.state.year === 2027) {
                _this.setState({ selectedId: id, year: 2025 });
            }
            else {
                _this.setState({ selectedId: id });
            }
        };
        _this.handleCategoriesChange = function (e) {
            var _a, _b, _c;
            var v = (_c = (_a = e.value) !== null && _a !== void 0 ? _a : (_b = e.target) === null || _b === void 0 ? void 0 : _b.value) !== null && _c !== void 0 ? _c : null;
            if (Array.isArray(v)) {
                _this.setState({ categories: v.length ? v : 'ALL' });
            }
            else if (v === null || v === undefined) {
                _this.setState({ categories: 'ALL' });
            }
            else {
                var s = String(v);
                _this.setState({ categories: s === 'ALL' ? 'ALL' : [s] });
            }
        };
        _this.handleCampaignChange = function (e) {
            var _a;
            var v = String((_a = e.value) !== null && _a !== void 0 ? _a : 'ALL');
            _this.setState({ campaign: v });
        };
        _this.handleBrandChange = function (e) {
            var _a;
            var v = String((_a = e.value) !== null && _a !== void 0 ? _a : 'ALL');
            _this.setState({ brand: v });
        };
        _this.handleWarehouseChange = function (e) {
            var _a;
            var v = String((_a = e.value) !== null && _a !== void 0 ? _a : 'ALL');
            _this.setState({ warehouse: v });
        };
        _this.handleScenarioChange = function (e) {
            var _a;
            var v = String((_a = e.value) !== null && _a !== void 0 ? _a : 'Baseline');
            _this.setState({ scenario: v });
        };
        _this.handleYearChange = function (e) {
            var v = Number(e.value);
            _this.setState({ year: v });
        };
        _this.renderGlobalFilters = function () {
            var showCategoryFilter = _this.state.selectedId === 'overview' ||
                _this.state.selectedId === 'promotion' ||
                _this.state.selectedId === 'performance';
            var showChannelFilter = _this.state.selectedId === 'overview' ||
                _this.state.selectedId === 'promotion' ||
                _this.state.selectedId === 'forecast_revenue';
            var showCampaignFilter = _this.state.selectedId === 'promotion';
            var showBrandFilter = _this.state.selectedId === 'performance';
            var showWarehouseFilter = _this.state.selectedId === 'performance';
            var showScenarioFilter = _this.state.selectedId === 'forecast_revenue';
            var isForecast = _this.state.selectedId === 'forecast_revenue';
            var yearOptions = isForecast ? [2026, 2027] : [2023, 2024, 2025];
            // Ensure current year is valid for the active tab
            var displayYear = _this.state.year;
            if (!isForecast && (_this.state.year === 2026 || _this.state.year === 2027)) {
                displayYear = 2025;
                // Update state asynchronously to avoid render issues
                setTimeout(function () {
                    if (_this.state.year !== 2025) {
                        _this.setState({ year: 2025 });
                    }
                }, 0);
            }
            else if (isForecast && (_this.state.year < 2026)) {
                displayYear = 2026;
                setTimeout(function () {
                    if (_this.state.year !== 2026) {
                        _this.setState({ year: 2026 });
                    }
                }, 0);
            }
            var itemTemplateWithTitle = function (data) { var _a, _b; return React.createElement("div", { title: (_a = data === null || data === void 0 ? void 0 : data.text) !== null && _a !== void 0 ? _a : data, className: 'commerce-commerce-item-template-title' }, (_b = data === null || data === void 0 ? void 0 : data.text) !== null && _b !== void 0 ? _b : data); };
            return (React.createElement("div", { className: 'commerce-toolbar', style: { display: 'flex', alignItems: 'center', justifyContent: 'end', flexDirection: 'row', gap: 12, marginBottom: 16 } },
                React.createElement("div", { style: { display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' } },
                    React.createElement("div", { className: 'commerce-dropdown', style: { minWidth: 100, width: 100 } },
                        React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { id: "globalYear", dataSource: yearOptions, key: "".concat(isForecast ? 'yr-forecast' : 'yr-historic', "-").concat(displayYear), value: _this.state.year, change: _this.handleYearChange, placeholder: "Year", popupHeight: "220px" })),
                    React.createElement("div", { className: 'commerce-dropdown', style: { minWidth: 100, width: 120 } },
                        React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { id: "globalMonth", dataSource: __spreadArray([{ text: 'All (Yearly)', value: ALL_MONTH }], months.map(function (m, idx) { return ({ text: m, value: idx }); }), true), fields: { text: 'text', value: 'value' }, value: _this.state.monthIndex, change: function (e) { return _this.setState({ monthIndex: Number(e.value) }); }, popupHeight: "260px" })),
                    React.createElement("div", { className: 'commerce-dropdown', style: { minWidth: 100, width: 140 } },
                        React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { id: "globalRegion", dataSource: REGION_OPTIONS, fields: { text: 'text', value: 'value' }, value: _this.state.region, change: function (e) { var _a; return _this.setState({ region: String((_a = e.value) !== null && _a !== void 0 ? _a : 'ALL') }); }, popupHeight: "260px", itemTemplate: itemTemplateWithTitle })),
                    showChannelFilter && (React.createElement("div", { className: 'commerce-dropdown', style: { minWidth: 100, width: 130 } },
                        React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { id: "ChannelsTop", dataSource: _this.state.selectedId === 'promotion' ? MARKETING_DROPDOWN_CHANNEL_OPTIONS : DROPDOWN_CHANNEL_OPTIONS, fields: { text: 'text', value: 'value' }, value: _this.state.channels, popupHeight: "260px", change: _this.handleChannelsChange }))),
                    showCategoryFilter && (React.createElement("div", { className: 'commerce-dropdown', style: { minWidth: 100, width: 200 } },
                        React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { id: "categoriesTop", dataSource: DROPDOWN_CATEGORY_OPTIONS, fields: { text: 'text', value: 'value' }, value: _this.state.categories, change: _this.handleCategoriesChange, popupHeight: "260px", itemTemplate: itemTemplateWithTitle }))),
                    showCampaignFilter && (React.createElement("div", { className: 'commerce-dropdown', style: { minWidth: 100, width: 190 } },
                        React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { id: "campaignFilterTop", dataSource: CAMPAIGN_OPTIONS, fields: { text: 'text', value: 'value' }, value: _this.state.campaign, change: _this.handleCampaignChange, popupHeight: "260px", itemTemplate: itemTemplateWithTitle }))),
                    showBrandFilter && (React.createElement("div", { className: 'commerce-dropdown', style: { minWidth: 100, width: 130 } },
                        React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { id: "brandFilter", dataSource: BRAND_OPTIONS, fields: { text: 'text', value: 'value' }, value: _this.state.brand, change: _this.handleBrandChange, popupHeight: "260px" }))),
                    showWarehouseFilter && (React.createElement("div", { className: 'commerce-dropdown', style: { minWidth: 100, width: 150 } },
                        React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { id: "warehouseFilter", dataSource: WAREHOUSE_OPTIONS, fields: { text: 'text', value: 'value' }, value: _this.state.warehouse, change: _this.handleWarehouseChange, popupHeight: "260px" }))),
                    showScenarioFilter && (React.createElement("div", { className: 'commerce-dropdown', style: { minWidth: 100, width: 120 } },
                        React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { id: "scenarioFilter", dataSource: scenarioOptions, value: _this.state.scenario, change: _this.handleScenarioChange, popupHeight: "260px" }))))));
        };
        _this.handleChannelsChange = function (e) {
            var _a, _b, _c;
            // Support MultiSelect or DropDown: e.value may be an array or single value
            var v = (_c = (_a = e.value) !== null && _a !== void 0 ? _a : (_b = e.target) === null || _b === void 0 ? void 0 : _b.value) !== null && _c !== void 0 ? _c : null;
            if (Array.isArray(v)) {
                _this.setState({ channels: v.length ? v : 'ALL' });
            }
            else if (v === null || v === undefined) {
                _this.setState({ channels: 'ALL' });
            }
            else {
                // single selection -> normalize to string or array depending on intent
                var s = String(v);
                _this.setState({ channels: s === 'ALL' ? 'ALL' : [s] });
            }
        };
        _this.toolbarTitleTemplate = function () {
            var _a;
            var titleMap = {
                overview: 'Overview',
                promotion: 'Promotion Analysis',
                performance: 'Product and Sales Analysis',
                forecast_revenue: 'Revenue Forecasting and Analysis'
            };
            var subtitle = (_a = titleMap[_this.state.selectedId]) !== null && _a !== void 0 ? _a : '';
            return (React.createElement("div", { className: 'header' },
                React.createElement("div", { className: "searchContent" },
                    React.createElement("div", { className: "dashboard-commerce-title" }, "E-Commerce Marketing Dashboard"),
                    React.createElement("div", { className: 'dashboard-commerce-subtitle' }, subtitle))));
        };
        _this.onToolbarClicked = function (args) {
            var _a, _b;
            var isMenu = (_b = (_a = args === null || args === void 0 ? void 0 : args.item) === null || _a === void 0 ? void 0 : _a.prefixIcon) === null || _b === void 0 ? void 0 : _b.includes('e-menu');
            if (isMenu)
                _this.onMenuClicked();
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
        return _this;
    }
    EcommerceMarketingDashboard.prototype.renderDashboard = function () {
        switch (this.state.selectedId) {
            case 'overview':
                return (React.createElement(OverviewClass, { year: this.state.year, monthIndex: this.state.monthIndex, region: this.state.region, channels: Array.isArray(this.state.channels)
                        ? this.state.channels
                        : (this.state.channels === 'ALL' ? [] : [String(this.state.channels)]), categories: Array.isArray(this.state.categories)
                        ? this.state.categories
                        : (this.state.categories === 'ALL' ? [] : [String(this.state.categories)]) }));
            case 'promotion': return React.createElement(MarketingClass, { year: this.state.year, monthIndex: this.state.monthIndex, region: this.state.region, channels: Array.isArray(this.state.channels)
                    ? this.state.channels
                    : (this.state.channels === 'ALL' ? [] : [String(this.state.channels)]), categories: Array.isArray(this.state.categories)
                    ? this.state.categories
                    : (this.state.categories === 'ALL' ? [] : [String(this.state.categories)]), campaign: this.state.campaign });
            case 'performance': return React.createElement(ProductClass, { year: this.state.year, monthIndex: this.state.monthIndex, region: this.state.region, categories: Array.isArray(this.state.categories)
                    ? this.state.categories
                    : (this.state.categories === 'ALL' ? [] : [String(this.state.categories)]), brand: this.state.brand, warehouse: this.state.warehouse });
            case 'forecast_revenue':
                return React.createElement(ForecastClass, { year: this.state.year, monthIndex: this.state.monthIndex, region: this.state.region, channels: Array.isArray(this.state.channels) ? this.state.channels : (this.state.channels === 'ALL' ? [] : [String(this.state.channels)]), scenario: this.state.scenario });
            default: return React.createElement(OverviewClass, { year: this.state.year, monthIndex: this.state.monthIndex, region: this.state.region, channels: Array.isArray(this.state.channels)
                    ? this.state.channels
                    : (this.state.channels === 'ALL' ? [] : [String(this.state.channels)]), categories: Array.isArray(this.state.categories)
                    ? this.state.categories
                    : (this.state.categories === 'ALL' ? [] : [String(this.state.categories)]) });
        }
    };
    EcommerceMarketingDashboard.prototype.withTooltip = function (title, node) {
        return (React.createElement(ej2_react_popups_1.TooltipComponent, { content: title, position: this.state.isDocked ? 'RightCenter' : 'BottomCenter', openDelay: 250, closeDelay: 0, showTipPointer: true }, node));
    };
    EcommerceMarketingDashboard.prototype.render = function () {
        var _this = this;
        var isActive = function (id) { return (_this.state.selectedId === id ? 'active' : ''); };
        return (React.createElement("div", null,
            React.createElement("div", { className: "control-section", id: "target_marketing_dash" },
                React.createElement("div", { className: "col-lg-12 col-sm-12 col-md-12", id: "marketing_dashboard_sidebar_section" },
                    React.createElement("div", { id: "analytic_head" },
                        React.createElement(ej2_react_navigations_2.ToolbarComponent, { cssClass: "ecommerce-dockToolbar", id: "ecommerce-dockToolbar", height: '65px', clicked: this.onToolbarClicked, key: this.state.selectedId },
                            React.createElement(ej2_react_navigations_2.ItemsDirective, null,
                                React.createElement(ej2_react_navigations_2.ItemDirective, { prefixIcon: "e-menu", tooltipText: "Menu" }),
                                React.createElement(ej2_react_navigations_2.ItemDirective, { template: this.toolbarTitleTemplate })))),
                    React.createElement("div", { className: "commerce-workarea" },
                        React.createElement(ej2_react_navigations_1.SidebarComponent, { id: "dockMarketingSideDash", ref: this.sidebarRef, width: "240px", enableDock: true, closeOnDocumentClick: false, enableGestures: false, dockSize: "60px", type: "Push", target: ".commerce-content", open: this.onSidebarOpen, close: this.onSidebarClose, created: this.onSidebarCreated },
                            React.createElement("div", { className: "sidebar-content" },
                                this.withTooltip('Overview', React.createElement("div", { className: "commerce-nav-item ".concat(isActive('overview')), onClick: function () { return _this.handleNavClick('overview'); } },
                                    React.createElement("span", { className: "e-icons e-home", "aria-hidden": "true" }),
                                    React.createElement("span", { className: "commerce-nav-text" }, "Overview"))),
                                this.withTooltip('Promotion', React.createElement("div", { className: "commerce-nav-item ".concat(isActive('promotion')), onClick: function () { return _this.handleNavClick('promotion'); } },
                                    React.createElement("span", { className: this.icon('promotion'), "aria-hidden": "true" }),
                                    React.createElement("span", { className: "commerce-nav-text" }, "Promotion"))),
                                this.withTooltip('Product and Sales', React.createElement("div", { className: "commerce-nav-item ".concat(isActive('performance')), onClick: function () { return _this.handleNavClick('performance'); } },
                                    React.createElement("span", { className: this.icon('performance'), "aria-hidden": "true" }),
                                    React.createElement("span", { className: "commerce-nav-text" }, "Product and Sales"))),
                                this.withTooltip('Revenue Forecasting', React.createElement("div", { className: "commerce-nav-item ".concat(isActive('forecast_revenue')), onClick: function () { return _this.handleNavClick('forecast_revenue'); } },
                                    React.createElement("span", { className: this.icon('monitoring'), "aria-hidden": "true" }),
                                    React.createElement("span", { className: "commerce-nav-text" }, "Revenue Forecasting"))))),
                        React.createElement("div", { className: "commerce-content" },
                            React.createElement("div", { className: "app-commerce-page", style: { padding: '16px', background: '#ffffff' } },
                                this.renderGlobalFilters(),
                                this.renderDashboard()))))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "The E\u2011Commerce Marketing Dashboard delivers a unified, interactive view of revenue, channel performance, product mix, promotional effectiveness, and supply health. It provides real\u2011time KPIs (revenue, orders, AOV, conversion, ROAS), drillable visualizations (sales mix, demand origins, product mix, stock composition), campaign and discount impact analyses, and scenario\u2011based revenue forecasts \u2014 all filterable by year, month, region, channel, campaign, category, brand and warehouse to support fast, data\u2011driven decisions for marketing and merchandising teams."))));
    };
    return EcommerceMarketingDashboard;
}(sample_base_1.SampleBase));
exports.EcommerceMarketingDashboard = EcommerceMarketingDashboard;
exports.default = EcommerceMarketingDashboard;
