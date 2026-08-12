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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var ej2_react_pivotview_1 = require("@syncfusion/ej2-react-pivotview");
var ej2_navigations_1 = require("@syncfusion/ej2-navigations");
var ej2_react_popups_1 = require("@syncfusion/ej2-react-popups");
var ej2_base_1 = require("@syncfusion/ej2-base");
var sample_base_1 = require("../common/sample-base");
var data_source_1 = require("./data-source");
require("./dynamic-binding.css");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var dataSourceSettings = {
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    type: 'JSON',
    dataSource: data_source_1.Pivot_Data,
    expandAll: false,
    filters: [],
    drilledMembers: [{ name: 'Country', items: ['France'] }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
};
var toolbarOptions = ['Grid', 'Chart', 'Export', 'SubTotal', 'GrandTotal', 'Formatting', 'FieldList'];
function DynamicBindingComponent() {
    var _this = this;
    var connectFileRef = (0, react_1.useRef)(null);
    var reportFileRef = (0, react_1.useRef)(null);
    var _a = (0, react_1.useState)(false), isDialogOpen = _a[0], setDialogOpen = _a[1];
    var _b = (0, react_1.useState)(''), dialogType = _b[0], setDialogType = _b[1];
    var _c = (0, react_1.useState)(''), remoteUrl = _c[0], setRemoteUrl = _c[1];
    var shouldAutoConfigRef = (0, react_1.useRef)(false);
    var _d = (0, react_1.useState)(false), isErrorDialogOpen = _d[0], setIsErrorDialogOpen = _d[1];
    var _e = (0, react_1.useState)(''), errorMessage = _e[0], setErrorMessage = _e[1];
    var _f = (0, react_1.useState)(data_source_1.Pivot_Data), currentData = _f[0], setCurrentData = _f[1];
    var _g = (0, react_1.useState)('https://bi.syncfusion.com/olap/msmdpump.dll'), olapProxyUrl = _g[0], setOlapProxyUrl = _g[1];
    var lastRemoteRef = (0, react_1.useRef)({ kind: null, url: null });
    var proxyBaseUrl = (0, react_1.useState)('')[0];
    var _h = (0, react_1.useState)(false), olapConnected = _h[0], setOlapConnected = _h[1];
    var _j = (0, react_1.useState)([]), olapDataSources = _j[0], setOlapDataSources = _j[1];
    var _k = (0, react_1.useState)([]), olapCatalogs = _k[0], setOlapCatalogs = _k[1];
    var _l = (0, react_1.useState)([]), olapCubes = _l[0], setOlapCubes = _l[1];
    var _m = (0, react_1.useState)(''), selectedDataSource = _m[0], setSelectedDataSource = _m[1];
    var _o = (0, react_1.useState)(''), selectedCatalog = _o[0], setSelectedCatalog = _o[1];
    var _p = (0, react_1.useState)(''), selectedCube = _p[0], setSelectedCube = _p[1];
    var _q = (0, react_1.useState)(false), loadingSources = _q[0], setLoadingSources = _q[1];
    var _r = (0, react_1.useState)(false), loadingCatalogs = _r[0], setLoadingCatalogs = _r[1];
    var _s = (0, react_1.useState)(false), loadingCubes = _s[0], setLoadingCubes = _s[1];
    var _t = (0, react_1.useState)(''), olapUiMessage = _t[0], setOlapUiMessage = _t[1];
    var connectMenuRef = (0, react_1.useRef)(null);
    var openMenuRef = (0, react_1.useRef)(null);
    var defaultUrls = {
        CSV: 'https://cdn.syncfusion.com/data/sales-analysis.csv',
        JSON: 'https://cdn.syncfusion.com/data/sales-analysis.json',
    };
    var dataSource;
    var pivotObj = (0, react_1.useRef)(null);
    var parseCSV = function (csvString) {
        var lines = csvString.split(/\r?\n|\r/).filter(function (line) { return line.trim(); });
        return lines.map(function (line) { return line.split(',').map(function (cell) { return cell.trim().replace(/^"|"$/g, '').replace(/""/g, '"'); }); });
    };
    var isOlapActive = function () {
        var pivot = pivotObj.current;
        if (!pivot)
            return false;
        var ds = pivot.dataSourceSettings || {};
        return pivot.dataType === 'olap' || !!pivot.olapEngineModule || ds.providerType === 'SSAS';
    };
    var cleanOlapForRelational = function () {
        var pivot = pivotObj.current;
        if (!pivot)
            return;
        pivot.olapEngineModule = null;
        pivot.dataType = 'pivot';
        pivot.engineModule = new ej2_react_pivotview_1.PivotEngine();
        if (pivot.dataSourceSettings) {
            pivot.dataSourceSettings.providerType = undefined;
            pivot.dataSourceSettings.catalog = undefined;
            pivot.dataSourceSettings.cube = undefined;
            pivot.dataSourceSettings.url = undefined;
        }
        pivot.refresh();
    };
    var setPivotData = function (type, data) {
        var pivot = pivotObj.current;
        if (!pivot)
            return;
        if (isOlapActive())
            cleanOlapForRelational();
        pivot.dataSourceSettings.type = type;
        pivot.dataSourceSettings.dataSource = data;
        delete pivot.dataSourceSettings.url;
        setCurrentData(data);
        shouldAutoConfigRef.current = true;
        pivot.refresh();
    };
    var applyReportSettings = function (pivot, reportSettings, isOlapReport, entireReportSettings) { return __awaiter(_this, void 0, void 0, function () {
        var maybeDataUrl, maybeCsvUrl, isRemoteLoad, ensureReportDataLoaded, hasInlineIncoming, hasGlobalData;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (isOlapReport) {
                        setCurrentData([]);
                        pivot.engineModule = null;
                        pivot.olapEngineModule = new ej2_react_pivotview_1.OlapEngine();
                        pivot.dataType = 'olap';
                        pivot.loadPersistData(JSON.stringify(entireReportSettings));
                        shouldAutoConfigRef.current = false;
                        pivot.refresh();
                        pivot.engineModule = new ej2_react_pivotview_1.PivotEngine();
                        if (reportSettings.type)
                            delete reportSettings.type;
                        return [2 /*return*/];
                    }
                    // ---------- Relational path ----------
                    cleanOlapForRelational();
                    maybeDataUrl = reportSettings.dataUrl || reportSettings.url;
                    maybeCsvUrl = reportSettings.csvUrl;
                    isRemoteLoad = !!maybeDataUrl || !!maybeCsvUrl;
                    ensureReportDataLoaded = function () { return __awaiter(_this, void 0, void 0, function () {
                        var res, jsonData, arr, res, csvString, csvArray, e_1;
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    if (!(!reportSettings.dataSource ||
                                        reportSettings.dataSource.length === 0)) return [3 /*break*/, 11];
                                    _b.label = 1;
                                case 1:
                                    _b.trys.push([1, 9, , 10]);
                                    if (!maybeDataUrl) return [3 /*break*/, 4];
                                    return [4 /*yield*/, fetch(maybeDataUrl, { cache: 'no-store' })];
                                case 2:
                                    res = _b.sent();
                                    if (!res.ok)
                                        throw new Error("HTTP ".concat(res.status, ": ").concat(res.statusText));
                                    return [4 /*yield*/, res.json()];
                                case 3:
                                    jsonData = _b.sent();
                                    arr = Array.isArray(jsonData)
                                        ? jsonData
                                        : (_a = jsonData === null || jsonData === void 0 ? void 0 : jsonData.data) !== null && _a !== void 0 ? _a : jsonData;
                                    if (!Array.isArray(arr) ||
                                        arr.length === 0 ||
                                        typeof arr[0] !== 'object') {
                                        throw new Error('Invalid JSON at dataUrl: expected an array of objects (or under "data").');
                                    }
                                    reportSettings.type = 'JSON';
                                    reportSettings.dataSource = arr;
                                    setCurrentData(arr);
                                    return [3 /*break*/, 8];
                                case 4:
                                    if (!maybeCsvUrl) return [3 /*break*/, 7];
                                    return [4 /*yield*/, fetch(maybeCsvUrl, { cache: 'no-store' })];
                                case 5:
                                    res = _b.sent();
                                    if (!res.ok)
                                        throw new Error("HTTP ".concat(res.status, ": ").concat(res.statusText));
                                    return [4 /*yield*/, res.text()];
                                case 6:
                                    csvString = _b.sent();
                                    csvArray = parseCSV(csvString);
                                    if (!csvArray.length)
                                        throw new Error('CSV at csvUrl appears empty.');
                                    reportSettings.type = 'CSV';
                                    reportSettings.dataSource = csvArray;
                                    setCurrentData(csvArray);
                                    return [3 /*break*/, 8];
                                case 7:
                                    // No inline and no URL → fall back to currentData
                                    if (reportSettings.type === 'JSON' && !reportSettings.url) {
                                        reportSettings.dataSource = data_source_1.Pivot_Data;
                                    }
                                    else {
                                        reportSettings.dataSource = currentData;
                                        reportSettings.type = pivot.dataSourceSettings.type || 'JSON';
                                    }
                                    _b.label = 8;
                                case 8: return [3 /*break*/, 10];
                                case 9:
                                    e_1 = _b.sent();
                                    // Fallback on any error
                                    if (!(reportSettings.url !== '' && reportSettings.type === 'CSV')) {
                                        reportSettings.dataSource = currentData;
                                        reportSettings.type = pivot.dataSourceSettings.type || 'JSON';
                                    }
                                    return [3 /*break*/, 10];
                                case 10: return [3 /*break*/, 12];
                                case 11:
                                    setCurrentData(reportSettings.dataSource);
                                    reportSettings.type = reportSettings.type || 'JSON';
                                    _b.label = 12;
                                case 12: return [2 /*return*/];
                            }
                        });
                    }); };
                    return [4 /*yield*/, ensureReportDataLoaded()];
                case 1:
                    _a.sent();
                    hasInlineIncoming = Array.isArray(reportSettings.dataSource) &&
                        reportSettings.dataSource.length > 0;
                    hasGlobalData = Array.isArray(dataSource)
                        ? dataSource.length > 0
                        : !!dataSource;
                    if (!isRemoteLoad && !hasInlineIncoming && hasGlobalData) {
                        if (reportSettings) {
                            reportSettings.dataSource = dataSource;
                        }
                        if (entireReportSettings === null || entireReportSettings === void 0 ? void 0 : entireReportSettings.dataSourceSettings) {
                            entireReportSettings.dataSourceSettings.dataSource = dataSource;
                        }
                    }
                    try {
                        if (entireReportSettings === null || entireReportSettings === void 0 ? void 0 : entireReportSettings.dataSourceSettings) {
                            pivot.loadPersistData(JSON.stringify(entireReportSettings));
                        }
                        else {
                            // Fallback: only have the settings
                            pivot.dataSourceSettings = reportSettings;
                        }
                    }
                    catch (_b) {
                        pivot.dataSourceSettings = reportSettings;
                    }
                    shouldAutoConfigRef.current = false;
                    pivot.refresh();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleConnectFileChange = function (e) {
        var _a;
        var file = (_a = e.target.files) === null || _a === void 0 ? void 0 : _a[0];
        if (!file)
            return;
        var mode = (e.target.dataset.type || '').toLowerCase();
        var isCsvMode = mode === 'csv';
        // Enforce CSV-only when CSV mode is requested, regardless of browser file filter behavior
        if (isCsvMode && !/\.csv$/i.test(file.name)) {
            setErrorMessage("Failed to load file as CSV. Please select a valid CSV file.");
            setIsErrorDialogOpen(true);
            e.target.value = '';
            return;
        }
        var isCsv = isCsvMode || /\.csv$/i.test(file.name);
        var reader = new FileReader();
        reader.onload = function (evt) { return __awaiter(_this, void 0, void 0, function () {
            var csvString, arr, headerLen_1, inconsistent, raw, parsed, unwrappedData, looksLikeReport, reportSettings, isOlapReport, pivot, dataArray, err_1;
            var _a, _b, _c, _d, _e, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        _g.trys.push([0, 6, , 7]);
                        if (!isCsv) return [3 /*break*/, 1];
                        csvString = String((_b = (_a = evt.target) === null || _a === void 0 ? void 0 : _a.result) !== null && _b !== void 0 ? _b : '');
                        arr = parseCSV(csvString);
                        if (!arr.length || arr.length <= 1) {
                            setErrorMessage('CSV appears empty or has only headers.');
                            setIsErrorDialogOpen(true);
                            return [2 /*return*/];
                        }
                        headerLen_1 = arr[0].length;
                        inconsistent = arr.slice(1).some(function (r) { return r.length !== headerLen_1; });
                        if (inconsistent) {
                            setErrorMessage('Malformed CSV: inconsistent number of columns.');
                            setIsErrorDialogOpen(true);
                            return [2 /*return*/];
                        }
                        resetPivot();
                        setPivotData('CSV', arr);
                        return [3 /*break*/, 5];
                    case 1:
                        raw = String((_d = (_c = evt.target) === null || _c === void 0 ? void 0 : _c.result) !== null && _d !== void 0 ? _d : '');
                        parsed = void 0;
                        try {
                            parsed = JSON.parse(raw);
                        }
                        catch (parseErr) {
                            setErrorMessage("Failed to parse file as JSON: ".concat(parseErr.message, ". Please select a valid JSON file."));
                            setIsErrorDialogOpen(true);
                            return [2 /*return*/];
                        }
                        unwrappedData = parsed && typeof parsed === 'object' && 'record' in parsed
                            ? parsed.record
                            : parsed;
                        looksLikeReport = !Array.isArray(unwrappedData) &&
                            ((unwrappedData === null || unwrappedData === void 0 ? void 0 : unwrappedData.dataSourceSettings) ||
                                (unwrappedData === null || unwrappedData === void 0 ? void 0 : unwrappedData.rows) ||
                                (unwrappedData === null || unwrappedData === void 0 ? void 0 : unwrappedData.columns) ||
                                (unwrappedData === null || unwrappedData === void 0 ? void 0 : unwrappedData.values) ||
                                (unwrappedData === null || unwrappedData === void 0 ? void 0 : unwrappedData.url) ||
                                (unwrappedData === null || unwrappedData === void 0 ? void 0 : unwrappedData.providerType));
                        if (!looksLikeReport) return [3 /*break*/, 4];
                        reportSettings = (_e = unwrappedData.dataSourceSettings) !== null && _e !== void 0 ? _e : unwrappedData;
                        isOlapReport = (reportSettings === null || reportSettings === void 0 ? void 0 : reportSettings.providerType) === 'SSAS';
                        pivot = pivotObj.current;
                        if (pivot)
                            resetPivot();
                        if (!pivot) return [3 /*break*/, 3];
                        return [4 /*yield*/, applyReportSettings(pivot, reportSettings, isOlapReport, unwrappedData)];
                    case 2:
                        _g.sent();
                        _g.label = 3;
                    case 3: return [2 /*return*/];
                    case 4:
                        dataArray = Array.isArray(unwrappedData)
                            ? unwrappedData
                            : (_f = unwrappedData === null || unwrappedData === void 0 ? void 0 : unwrappedData.data) !== null && _f !== void 0 ? _f : unwrappedData;
                        if (!Array.isArray(dataArray) ||
                            dataArray.length === 0 ||
                            typeof dataArray[0] !== 'object') {
                            setErrorMessage('Invalid JSON: Provide a saved report or a non-empty array of objects (or under "data").');
                            setIsErrorDialogOpen(true);
                            return [2 /*return*/];
                        }
                        resetPivot();
                        setPivotData('JSON', dataArray);
                        _g.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        err_1 = _g.sent();
                        setErrorMessage("Failed to load file: ".concat(err_1.message));
                        setIsErrorDialogOpen(true);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        }); };
        reader.readAsText(file);
        e.target.value = '';
    };
    function toolbarRender(args) {
        var connectMenu = { template: '<ul id="connect_menu"></ul>', id: 'custom_toolbar' };
        args.customToolbar.splice(0, 0, connectMenu);
        var openMenu = { template: '<ul id="open_menu"></ul>', id: 'open_toolbar' };
        args.customToolbar.splice(1, 0, openMenu);
        var saveItem = {
            prefixIcon: 'e-save-report e-btn-icon e-icons',
            tooltipText: 'Save Pivot Report as JSON',
            click: toolbarClicked,
        };
        args.customToolbar.splice(2, 0, saveItem);
        var separator3 = { type: 'Separator' };
        args.customToolbar.splice(3, 0, separator3);
    }
    var onDataBound = function () {
        var _a, _b, _c, _d;
        var pivot = pivotObj.current;
        if (ej2_base_1.Browser.isDevice && pivot && pivot.enableRtl) {
            (_a = document.querySelector('.control-section')) === null || _a === void 0 ? void 0 : _a.classList.add('e-rtl');
        }
        var connectEl = document.getElementById('connect_menu');
        if (connectEl) {
            var menuItems = [{
                    iconCss: 'e-connect-report e-btn-icon e-icons',
                    items: [
                        {
                            text: 'JSON', iconCss: 'e-json-icon e-icons',
                            items: [
                                { text: 'Local', id: 'local_json' },
                                { text: 'Remote', id: 'remote_json' }
                            ]
                        },
                        {
                            text: 'CSV', iconCss: 'e-csv-icon e-icons',
                            items: [
                                { text: 'Local', id: 'local_csv' },
                                { text: 'Remote', id: 'remote_csv' }
                            ]
                        },
                        { text: 'OLAP(XMLA)', id: 'olap', iconCss: 'e-olap-icon e-icons' },
                    ],
                }];
            if (connectMenuRef.current) {
                connectMenuRef.current.destroy();
                connectMenuRef.current = null;
            }
            connectMenuRef.current = new ej2_navigations_1.Menu({ items: menuItems, select: gridToolbarClicked, cssClass: 'e-pivot-toolbar-menu' }, '#connect_menu');
        }
        var openEl = document.getElementById('open_menu');
        if (openEl) {
            var openMenuItems = [
                {
                    iconCss: 'e-open-report e-btn-icon e-icons',
                    items: [
                        {
                            text: 'Load Pivot Report',
                            items: [
                                { text: 'Local JSON', id: 'local_report', iconCss: 'e-local-report-icon e-icons' },
                                { text: 'Remote JSON', id: 'remote_report', iconCss: 'e-remote-report-icon e-icons' },
                            ],
                        },
                    ],
                },
            ];
            if (openMenuRef.current) {
                openMenuRef.current.destroy();
                openMenuRef.current = null;
            }
            openMenuRef.current = new ej2_navigations_1.Menu({ items: openMenuItems, select: openToolbarClicked, cssClass: 'e-pivot-toolbar-menu' }, '#open_menu');
        }
        if (shouldAutoConfigRef.current && pivot) {
            var hasValues = !!((_c = (_b = pivot.dataSourceSettings) === null || _b === void 0 ? void 0 : _b.values) === null || _c === void 0 ? void 0 : _c.length);
            if (!hasValues && ((_d = (pivot).pivotFieldListModule) === null || _d === void 0 ? void 0 : _d.dialogRenderer)) {
                shouldAutoConfigRef.current = false;
                setTimeout(function () { return (pivot).pivotFieldListModule.dialogRenderer.onShowFieldList(); }, 0);
            }
            else {
                shouldAutoConfigRef.current = false;
            }
        }
    };
    var onEnginePopulated = function () {
        var _a;
        if (shouldAutoConfigRef.current && pivotObj.current) {
            pivotObj.current.displayOption = { view: 'Both', primary: 'Table' };
            shouldAutoConfigRef.current = false;
            if (((_a = pivotObj.current.dataSourceSettings.values) === null || _a === void 0 ? void 0 : _a.length) === 0) {
                pivotObj.current.pivotFieldListModule.dialogRenderer.onShowFieldList();
            }
        }
    };
    var toolbarClicked = function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, saveReport()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    }); }); };
    var saveReport = function () { return __awaiter(_this, void 0, void 0, function () {
        var pivot, download, persisted, reportSettings, parsed, isOlapReport, hasInline, json;
        return __generator(this, function (_a) {
            pivot = pivotObj.current;
            if (!pivot) {
                return [2 /*return*/];
            }
            download = function (content, mime, filename) {
                var blob = new Blob([content], { type: mime });
                var url = URL.createObjectURL(blob);
                var a = document.createElement('a');
                a.href = url;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            };
            try {
                persisted = pivot.getPersistData();
                reportSettings = {};
                try {
                    parsed = JSON.parse(persisted);
                    isOlapReport = parsed && parsed.dataSourceSettings && parsed.dataSourceSettings.providerType === 'SSAS';
                    if (!isOlapReport && parsed && parsed.dataSourceSettings) {
                        dataSource = parsed.dataSourceSettings.dataSource;
                        parsed.dataSourceSettings.dataSource = [];
                    }
                    if (parsed && typeof parsed === 'object') {
                        delete parsed.pivotValues;
                    }
                    reportSettings = parsed;
                }
                catch (_b) {
                    reportSettings = {
                        dataSourceSettings: pivot.dataSourceSettings || {},
                        gridSettings: pivot.gridSettings || {},
                        chartSettings: pivot.chartSettings || {},
                        displayOption: pivot.displayOption || {}
                    };
                }
                hasInline = Array.isArray(reportSettings.dataSource) && reportSettings.dataSource.length > 0;
                if (!hasInline && lastRemoteRef.current.url && !reportSettings.dataUrl && !reportSettings.csvUrl) {
                    if (lastRemoteRef.current.kind === 'JSON') {
                        reportSettings.dataUrl = lastRemoteRef.current.url;
                        reportSettings.type = 'JSON';
                    }
                    if (lastRemoteRef.current.kind === 'CSV') {
                        reportSettings.csvUrl = lastRemoteRef.current.url;
                        reportSettings.type = 'CSV';
                    }
                }
                json = JSON.stringify(reportSettings, null, 2);
                download(json, 'application/json', 'pivot.json');
            }
            catch (err) {
                console.error('Save failed:', err);
                alert("Failed to save: ".concat(err.message));
            }
            return [2 /*return*/];
        });
    }); };
    var openToolbarClicked = function (args) {
        var _a;
        var itemId = (_a = args === null || args === void 0 ? void 0 : args.item) === null || _a === void 0 ? void 0 : _a.id;
        if (!itemId)
            return;
        if (itemId === 'local_report') {
            var input = connectFileRef.current;
            if (input) {
                input.onchange = null;
                input.value = '';
                input.accept = '.json';
                delete input.dataset.type;
                input.onchange = handleConnectFileChange;
                input.click();
            }
            return;
        }
        if (itemId === 'remote_report') {
            setDialogType('JSON Report');
            setRemoteUrl('https://cdn.syncfusion.com/data/report.json');
            setDialogOpen(true);
            return;
        }
    };
    var gridToolbarClicked = function (args) {
        var _a;
        var itemId = (_a = args === null || args === void 0 ? void 0 : args.item) === null || _a === void 0 ? void 0 : _a.id;
        if (!itemId)
            return;
        if (itemId === 'local_csv' || itemId === 'local_json') {
            var ext = itemId === 'local_csv' ? 'CSV' : 'JSON';
            var input = connectFileRef.current;
            if (input) {
                input.onchange = null;
                input.value = '';
                input.accept = ext === 'CSV' ? '.csv' : '.json';
                input.dataset.type = ext;
                input.onchange = handleConnectFileChange;
                input.click();
            }
            return;
        }
        if (itemId === 'remote_csv' || itemId === 'remote_json') {
            var type = itemId === 'remote_csv' ? 'CSV' : 'JSON';
            setDialogType(type);
            setRemoteUrl(defaultUrls[type] || '');
            setDialogOpen(true);
            return;
        }
        if (itemId === 'olap') {
            setDialogType('OLAP');
            setDialogOpen(true);
            setOlapConnected(false);
            setOlapUiMessage('');
            setLoadingSources(false);
            setLoadingCatalogs(false);
            setLoadingCubes(false);
            setOlapDataSources([]);
            setOlapCatalogs([]);
            setOlapCubes([]);
            setSelectedDataSource('');
            setSelectedCatalog('');
            setSelectedCube('');
            return;
        }
    };
    var resetPivot = function () {
        var pivot = pivotObj.current;
        if (pivot && pivot.engineModule) {
            pivot.engineModule.fieldList = {};
        }
        if (pivot) {
            pivot.dataSourceSettings.rows = [];
            pivot.dataSourceSettings.columns = [];
            pivot.dataSourceSettings.values = [];
            pivot.dataSourceSettings.filters = [];
            pivot.dataSourceSettings.conditionalFormatSettings = [];
            pivot.dataSourceSettings.formatSettings = [];
            pivot.dataSourceSettings.drilledMembers = [];
            pivot.dataSourceSettings.fieldMapping = [];
            pivot.dataSourceSettings.excludeFields = [];
            pivot.dataSourceSettings.filterSettings = [];
            pivot.dataSourceSettings.sortSettings = [];
            pivot.dataSourceSettings.valueSortSettings = {};
            pivot.dataSourceSettings.calculatedFieldSettings = [];
            pivot.dataSourceSettings.groupSettings = [];
            pivot.dataSourceSettings.expandAll = false;
            pivot.dataSourceSettings.showGrandTotals = true;
            pivot.dataSourceSettings.showRowGrandTotals = true;
            pivot.dataSourceSettings.showColumnGrandTotals = true;
            pivot.dataSourceSettings.showSubTotals = true;
            pivot.dataSourceSettings.showRowSubTotals = true;
            pivot.dataSourceSettings.showColumnSubTotals = true;
            pivot.dataSourceSettings.type = undefined;
        }
    };
    var xmlaSoapEnvelope = function (requestType, restrictions, properties) {
        if (restrictions === void 0) { restrictions = {}; }
        if (properties === void 0) { properties = {}; }
        var restrXml = Object.keys(restrictions).length
            ? "<Restrictions><RestrictionList>".concat(Object.entries(restrictions).map(function (_a) {
                var k = _a[0], v = _a[1];
                return "<".concat(k, ">").concat(String(v), "</").concat(k, ">");
            }).join(''), "</RestrictionList></Restrictions>")
            : '<Restrictions />';
        var propXml = "<Properties><PropertyList>".concat(Object.entries(properties).map(function (_a) {
            var k = _a[0], v = _a[1];
            return "<".concat(k, ">").concat(String(v), "</").concat(k, ">");
        }).join(''), "</PropertyList></Properties>");
        return "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">\n  <soap:Header />\n  <soap:Body>\n    <Discover xmlns=\"urn:schemas-microsoft-com:xml-analysis\">\n      <RequestType>".concat(requestType, "</RequestType>\n      ").concat(restrXml, "\n      ").concat(propXml, "\n    </Discover>\n  </soap:Body>\n</soap:Envelope>");
    };
    var resolveEndpoint = function (endpoint) {
        var trimmed = endpoint.trim();
        if (!proxyBaseUrl)
            return trimmed;
        var sep = proxyBaseUrl.includes('?') ? '&' : '?';
        return "".concat(proxyBaseUrl).concat(sep, "url=").concat(encodeURIComponent(trimmed));
    };
    var postXMLA = function (endpoint, bodyXml) { return __awaiter(_this, void 0, void 0, function () {
        var url, res, text;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = resolveEndpoint(endpoint);
                    return [4 /*yield*/, fetch(url, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'text/xml; charset=utf-8',
                                'Accept': 'text/xml, application/xml, */*;q=0.1',
                            },
                            body: bodyXml,
                        })];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.text()];
                case 2:
                    text = _a.sent();
                    if (!res.ok)
                        throw new Error("HTTP ".concat(res.status, ": ").concat(res.statusText));
                    return [2 /*return*/, text];
            }
        });
    }); };
    var parseRowset = function (xmlText) {
        var parser = new DOMParser();
        var xml = parser.parseFromString(xmlText, 'text/xml');
        var rows = Array.from(xml.getElementsByTagNameNS('*', 'row'));
        var result = rows.map(function (r) {
            var obj = {};
            Array.from(r.children).forEach(function (c) { var _a; obj[c.localName] = ((_a = c.textContent) !== null && _a !== void 0 ? _a : '').trim(); });
            return obj;
        });
        var fault = xml.getElementsByTagNameNS('*', 'Fault')[0];
        if (fault) {
            throw new Error((fault.textContent || 'SOAP Fault').trim());
        }
        return result;
    };
    var discoverDataSources = function (endpoint) { return __awaiter(_this, void 0, void 0, function () {
        var body, xml, rows;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    body = xmlaSoapEnvelope('DISCOVER_DATASOURCES');
                    return [4 /*yield*/, postXMLA(endpoint, body)];
                case 1:
                    xml = _a.sent();
                    rows = parseRowset(xml);
                    return [2 /*return*/, rows.map(function (r) { return r.DataSourceName; }).filter(Boolean)];
            }
        });
    }); };
    var discoverCatalogs = function (endpoint) { return __awaiter(_this, void 0, void 0, function () {
        var body, xml, rows;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    body = xmlaSoapEnvelope('DBSCHEMA_CATALOGS');
                    return [4 /*yield*/, postXMLA(endpoint, body)];
                case 1:
                    xml = _a.sent();
                    rows = parseRowset(xml);
                    return [2 /*return*/, rows.map(function (r) { return r.CATALOG_NAME; }).filter(Boolean)];
            }
        });
    }); };
    var discoverCubes = function (endpoint, catalog) { return __awaiter(_this, void 0, void 0, function () {
        var body, xml, rows;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    body = xmlaSoapEnvelope('MDSCHEMA_CUBES', { CATALOG_NAME: catalog });
                    return [4 /*yield*/, postXMLA(endpoint, body)];
                case 1:
                    xml = _a.sent();
                    rows = parseRowset(xml);
                    return [2 /*return*/, rows.filter(function (r) { return r.CUBE_SOURCE === '1'; }).map(function (r) { return r.CUBE_NAME; }).filter(Boolean)];
            }
        });
    }); };
    var applyOlapBinding = function (opts) { return __awaiter(_this, void 0, void 0, function () {
        var pivot, url, catalog, cube, olapDataSourceSettings;
        var _a, _b, _c;
        return __generator(this, function (_d) {
            pivot = pivotObj.current;
            if (!pivot)
                return [2 /*return*/];
            url = (_a = opts === null || opts === void 0 ? void 0 : opts.url) !== null && _a !== void 0 ? _a : resolveEndpoint(olapProxyUrl);
            catalog = (_b = opts === null || opts === void 0 ? void 0 : opts.catalog) !== null && _b !== void 0 ? _b : selectedCatalog;
            cube = (_c = opts === null || opts === void 0 ? void 0 : opts.cube) !== null && _c !== void 0 ? _c : selectedCube;
            if (!url || !catalog || !cube)
                return [2 /*return*/];
            olapDataSourceSettings = {
                url: url,
                catalog: catalog,
                providerType: 'SSAS',
                cube: cube,
                localeIdentifier: 1033, rows: [], columns: [], values: []
            };
            pivot.engineModule = null;
            pivot.olapEngineModule = new ej2_react_pivotview_1.OlapEngine();
            pivot.dataType = 'olap';
            pivot.dataSourceSettings = olapDataSourceSettings;
            if (pivot.dataSourceSettings.type) {
                pivot.dataSourceSettings.type = undefined;
            }
            setCurrentData([]);
            shouldAutoConfigRef.current = true;
            pivot.refresh();
            return [2 /*return*/];
        });
    }); };
    var loadRemoteAndBind = function (kind, url) { return __awaiter(_this, void 0, void 0, function () {
        var cleanUrl, res_1, csvString, arr, headerLen_2, inconsistent, res, jsonData, unwrappedData, looksLikeReport, reportSettings, isOlapReport, pivot, arr;
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    cleanUrl = url.trim();
                    if (!cleanUrl)
                        throw new Error('Empty URL');
                    if (!(kind === 'CSV')) return [3 /*break*/, 3];
                    return [4 /*yield*/, fetch(cleanUrl, { cache: 'no-store' })];
                case 1:
                    res_1 = _d.sent();
                    if (!res_1.ok)
                        return [2 /*return*/, res_1.text().then(function () { throw new Error("HTTP ".concat(res_1.status, ": ").concat(res_1.statusText)); })];
                    return [4 /*yield*/, res_1.text()];
                case 2:
                    csvString = _d.sent();
                    if (csvString.trim().startsWith('<!DOCTYPE html') ||
                        csvString.trim().startsWith('<html')) {
                        throw new Error('Invalid CSV: Received HTML error page instead of CSV.');
                    }
                    arr = [];
                    try {
                        arr = parseCSV(csvString);
                    }
                    catch (err) {
                        throw new Error("CSV parsing error: ".concat(err.message));
                    }
                    if (!arr.length || arr.length <= 1)
                        throw new Error('CSV appears empty or has only headers.');
                    headerLen_2 = arr[0].length;
                    inconsistent = arr.slice(1).some(function (r) { return r.length !== headerLen_2; });
                    if (inconsistent)
                        throw new Error('Malformed CSV: inconsistent number of columns.');
                    lastRemoteRef.current = { kind: 'CSV', url: cleanUrl };
                    resetPivot();
                    setPivotData('CSV', arr);
                    return [3 /*break*/, 8];
                case 3: return [4 /*yield*/, fetch(cleanUrl, { cache: 'no-store' })];
                case 4:
                    res = _d.sent();
                    if (!res.ok)
                        throw new Error("HTTP ".concat(res.status, ": ").concat(res.statusText));
                    return [4 /*yield*/, res.json()];
                case 5:
                    jsonData = _d.sent();
                    unwrappedData = jsonData && typeof jsonData === 'object' && 'record' in jsonData
                        ? jsonData.record
                        : jsonData;
                    if ((_a = jsonData === null || jsonData === void 0 ? void 0 : jsonData.chartSettings) === null || _a === void 0 ? void 0 : _a.zoomSettings) {
                        jsonData.chartSettings.zoomSettings.toolbarPosition = {};
                        jsonData.chartSettings.zoomSettings.accessibility = {};
                    }
                    looksLikeReport = !Array.isArray(unwrappedData) &&
                        ((unwrappedData === null || unwrappedData === void 0 ? void 0 : unwrappedData.dataSourceSettings) ||
                            (unwrappedData === null || unwrappedData === void 0 ? void 0 : unwrappedData.rows) ||
                            (unwrappedData === null || unwrappedData === void 0 ? void 0 : unwrappedData.columns) ||
                            (unwrappedData === null || unwrappedData === void 0 ? void 0 : unwrappedData.values) ||
                            (unwrappedData === null || unwrappedData === void 0 ? void 0 : unwrappedData.url) ||
                            (unwrappedData === null || unwrappedData === void 0 ? void 0 : unwrappedData.providerType));
                    if (!looksLikeReport) return [3 /*break*/, 7];
                    reportSettings = (_b = unwrappedData.dataSourceSettings) !== null && _b !== void 0 ? _b : unwrappedData;
                    isOlapReport = (reportSettings === null || reportSettings === void 0 ? void 0 : reportSettings.providerType) === 'SSAS';
                    reportSettings.dataSource = data_source_1.Pivot_Data;
                    pivot = pivotObj.current;
                    if (!pivot) return [3 /*break*/, 7];
                    resetPivot();
                    return [4 /*yield*/, applyReportSettings(pivot, reportSettings, isOlapReport, unwrappedData)];
                case 6:
                    _d.sent();
                    return [2 /*return*/];
                case 7:
                    arr = Array.isArray(unwrappedData)
                        ? unwrappedData
                        : (_c = unwrappedData === null || unwrappedData === void 0 ? void 0 : unwrappedData.data) !== null && _c !== void 0 ? _c : unwrappedData;
                    if (!Array.isArray(arr) ||
                        arr.length === 0 ||
                        typeof arr[0] !== 'object') {
                        throw new Error('Invalid JSON: Provide a saved report or a non-empty array of objects (or under "data").');
                    }
                    lastRemoteRef.current = { kind: 'JSON', url: cleanUrl };
                    resetPivot();
                    setPivotData('JSON', arr);
                    _d.label = 8;
                case 8: return [2 /*return*/];
            }
        });
    }); };
    var handleOpenRemote = function () { return __awaiter(_this, void 0, void 0, function () {
        var err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!remoteUrl.trim()) {
                        setErrorMessage('Please enter a valid URL.');
                        setDialogOpen(false);
                        setIsErrorDialogOpen(true);
                        return [2 /*return*/];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, loadRemoteAndBind(dialogType, remoteUrl)];
                case 2:
                    _a.sent();
                    setDialogOpen(false);
                    return [3 /*break*/, 4];
                case 3:
                    err_2 = _a.sent();
                    setErrorMessage("Failed to load remote ".concat(dialogType, ": ").concat(err_2.message, "\n\nTip: Ensure the URL is accessible and allows CORS for your origin."));
                    setDialogOpen(false);
                    setIsErrorDialogOpen(true);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: 'control-section', id: 'pivot-table-section', style: { overflow: 'initial' } },
            React.createElement("input", { ref: connectFileRef, type: "file", id: "connectFile", style: { display: 'none' } }),
            React.createElement("input", { ref: reportFileRef, type: "file", id: "reportFile", style: { display: 'none' } }),
            isDialogOpen && dialogType !== 'OLAP' && (React.createElement(ej2_react_popups_1.DialogComponent, { visible: isDialogOpen, isModal: true, showCloseIcon: true, width: "480px", header: dialogType === 'JSON Report' ? "Load Pivot Report" : ("Connect to ".concat(dialogType)), close: function () { return setDialogOpen(false); }, target: ".control-pane", closeOnEscape: true, overlayClick: function () { return setDialogOpen(false); }, position: { X: 'center', Y: 'center' }, animationSettings: { effect: 'Zoom', duration: 150 } },
                React.createElement("div", { style: { display: 'flex', flexDirection: 'column', gap: 12 } },
                    React.createElement("input", { type: "text", placeholder: "Enter ".concat(dialogType, " URL"), value: remoteUrl, className: 'e-input', onChange: function (e) { return setRemoteUrl(e.target.value); }, onKeyDown: function (e) { if (e.key === 'Enter') {
                            e.preventDefault();
                            handleOpenRemote();
                        } }, autoFocus: true }),
                    React.createElement("div", { style: { display: 'flex', justifyContent: 'flex-end', gap: 8 } },
                        React.createElement(ej2_react_buttons_1.ButtonComponent, { cssClass: 'e-primary', onClick: handleOpenRemote }, "Open"),
                        React.createElement(ej2_react_buttons_1.ButtonComponent, { onClick: function () { return setDialogOpen(false); } }, "Cancel"))))),
            isErrorDialogOpen && (React.createElement(ej2_react_popups_1.DialogComponent, { visible: isErrorDialogOpen, isModal: true, showCloseIcon: true, width: "420px", header: "Error", close: function () { return setIsErrorDialogOpen(false); }, target: ".control-pane", closeOnEscape: true, overlayClick: function () { return setIsErrorDialogOpen(false); }, position: { X: 'center', Y: 'center' }, animationSettings: { effect: 'Fade', duration: 120 } },
                React.createElement("div", { style: { display: 'flex', flexDirection: 'column', gap: 12 } },
                    React.createElement("p", { className: "error-message" }, errorMessage),
                    React.createElement("div", { style: { display: 'flex', justifyContent: 'flex-end' } },
                        React.createElement(ej2_react_buttons_1.ButtonComponent, { cssClass: 'e-primary', onClick: function () { return setIsErrorDialogOpen(false); } }, "OK"))))),
            isDialogOpen && dialogType === 'OLAP' && (React.createElement(ej2_react_popups_1.DialogComponent, { visible: isDialogOpen, isModal: true, showCloseIcon: true, width: "620px", header: "Connect to OLAP(XMLA)", close: function () { return setDialogOpen(false); }, target: ".control-pane", closeOnEscape: true, overlayClick: function () { return setDialogOpen(false); }, position: { X: 'center', Y: 'center' }, animationSettings: { effect: 'Zoom', duration: 150 } },
                React.createElement("div", { style: { display: 'flex', flexDirection: 'column', gap: 12 } },
                    React.createElement("div", { className: "olap-row" },
                        React.createElement("label", { style: { minWidth: '80px', fontWeight: '500' } }, "URL"),
                        React.createElement("div", { style: { display: 'flex', flex: 1, gap: 8, alignItems: 'center' } },
                            React.createElement("input", { type: "text", className: 'e-input', value: olapProxyUrl, onChange: function (e) { return setOlapProxyUrl(e.target.value); }, placeholder: "Enter OLAP endpoint URL (e.g., https://bi.syncfusion.com/olap/msmdpump.dll)", style: { flex: 1 } }),
                            React.createElement(ej2_react_buttons_1.ButtonComponent, { cssClass: 'e-primary', onClick: function () { return __awaiter(_this, void 0, void 0, function () {
                                    var sources, e_2, corsHint;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                setOlapUiMessage('');
                                                setLoadingSources(true);
                                                _a.label = 1;
                                            case 1:
                                                _a.trys.push([1, 3, 4, 5]);
                                                return [4 /*yield*/, discoverDataSources(olapProxyUrl)];
                                            case 2:
                                                sources = _a.sent();
                                                setOlapDataSources(sources);
                                                setSelectedDataSource('');
                                                setOlapConnected(true);
                                                setOlapUiMessage(sources.length ? '' : 'No data sources found.');
                                                return [3 /*break*/, 5];
                                            case 3:
                                                e_2 = _a.sent();
                                                corsHint = ' If the browser blocks this due to CORS, configure a proxy base URL below and try again.';
                                                setOlapUiMessage("Connect failed: ".concat(e_2.message, ".").concat(corsHint));
                                                setOlapConnected(false);
                                                setOlapDataSources([]);
                                                return [3 /*break*/, 5];
                                            case 4:
                                                setLoadingSources(false);
                                                return [7 /*endfinally*/];
                                            case 5: return [2 /*return*/];
                                        }
                                    });
                                }); } }, loadingSources ? 'Connecting…' : 'Connect'))),
                    React.createElement("div", { className: "olap-row" },
                        React.createElement("label", { style: { display: 'block', marginBottom: 4, fontWeight: '500' } }, "Data Sources"),
                        React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { value: selectedDataSource, dataSource: olapDataSources, fields: { text: 'value', value: 'value' }, placeholder: loadingSources ? 'Loading…' : 'Select data source', enabled: olapConnected || loadingSources, change: function (e) { return __awaiter(_this, void 0, void 0, function () {
                                var v, cats, err_3;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            v = e.value;
                                            setSelectedDataSource(v);
                                            setSelectedCatalog('');
                                            setSelectedCube('');
                                            setOlapCatalogs([]);
                                            setOlapCubes([]);
                                            if (!v)
                                                return [2 /*return*/];
                                            setLoadingCatalogs(true);
                                            _a.label = 1;
                                        case 1:
                                            _a.trys.push([1, 3, 4, 5]);
                                            return [4 /*yield*/, discoverCatalogs(olapProxyUrl)];
                                        case 2:
                                            cats = _a.sent();
                                            setOlapCatalogs(cats);
                                            setSelectedCatalog('');
                                            return [3 /*break*/, 5];
                                        case 3:
                                            err_3 = _a.sent();
                                            setOlapUiMessage("Load catalogs failed: ".concat(err_3.message));
                                            return [3 /*break*/, 5];
                                        case 4:
                                            setLoadingCatalogs(false);
                                            return [7 /*endfinally*/];
                                        case 5: return [2 /*return*/];
                                    }
                                });
                            }); }, style: { width: '100%' } })),
                    React.createElement("div", { className: "olap-row" },
                        React.createElement("label", { style: { display: 'block', marginBottom: 4, fontWeight: '500' } }, "Catalogs"),
                        React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { value: selectedCatalog, dataSource: olapCatalogs, fields: { text: 'value', value: 'value' }, placeholder: loadingCatalogs ? 'Loading…' : 'Select catalog', enabled: !!selectedDataSource || loadingCatalogs, change: function (e) { return __awaiter(_this, void 0, void 0, function () {
                                var v, cubes, err_4;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            v = e.value;
                                            setSelectedCatalog(v);
                                            setSelectedCube('');
                                            setOlapCubes([]);
                                            if (!v)
                                                return [2 /*return*/];
                                            setLoadingCubes(true);
                                            _a.label = 1;
                                        case 1:
                                            _a.trys.push([1, 3, 4, 5]);
                                            return [4 /*yield*/, discoverCubes(olapProxyUrl, v)];
                                        case 2:
                                            cubes = _a.sent();
                                            setOlapCubes(cubes);
                                            setSelectedCube('');
                                            return [3 /*break*/, 5];
                                        case 3:
                                            err_4 = _a.sent();
                                            setOlapUiMessage("Load cubes failed: ".concat(err_4.message));
                                            return [3 /*break*/, 5];
                                        case 4:
                                            setLoadingCubes(false);
                                            return [7 /*endfinally*/];
                                        case 5: return [2 /*return*/];
                                    }
                                });
                            }); }, style: { width: '100%' } })),
                    React.createElement("div", { className: "olap-row" },
                        React.createElement("label", { style: { display: 'block', marginBottom: 4, fontWeight: '500' } }, "Cubes"),
                        React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { value: selectedCube, dataSource: olapCubes, fields: { text: 'value', value: 'value' }, placeholder: loadingCubes ? 'Loading…' : 'Select cube', enabled: !!selectedCatalog || loadingCubes, change: function (e) { return __awaiter(_this, void 0, void 0, function () {
                                var v;
                                return __generator(this, function (_a) {
                                    v = e.value;
                                    setSelectedCube(v);
                                    return [2 /*return*/];
                                });
                            }); }, style: { width: '100%' } })),
                    olapUiMessage && React.createElement("div", { style: { color: 'var(--e-error, #b00020)', fontSize: '14px' } }, olapUiMessage),
                    React.createElement("div", { style: { display: 'flex', justifyContent: 'flex-end', gap: 8 } },
                        React.createElement(ej2_react_buttons_1.ButtonComponent, { cssClass: 'e-primary', onClick: function () { return __awaiter(_this, void 0, void 0, function () {
                                var pivot;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            pivot = pivotObj.current;
                                            if (!pivot) {
                                                setDialogOpen(false);
                                                return [2 /*return*/];
                                            }
                                            if (!olapConnected || !selectedCatalog || !selectedCube) {
                                                alert('Please connect and select a Catalog and Cube.');
                                                return [2 /*return*/];
                                            }
                                            return [4 /*yield*/, applyOlapBinding({ url: resolveEndpoint(olapProxyUrl), catalog: selectedCatalog, cube: selectedCube })];
                                        case 1:
                                            _a.sent();
                                            setDialogOpen(false);
                                            return [2 /*return*/];
                                    }
                                });
                            }); }, disabled: !olapConnected }, "OK"),
                        React.createElement(ej2_react_buttons_1.ButtonComponent, { onClick: function () { return setDialogOpen(false); } }, "Cancel"))))),
            React.createElement("div", { className: 'pivot-table-control-section' },
                React.createElement(ej2_react_pivotview_1.PivotViewComponent, { id: 'PivotView', ref: pivotObj, dataSourceSettings: dataSourceSettings, width: '100%', height: 500, showFieldList: true, showToolbar: true, allowCalculatedField: true, allowPdfExport: true, allowExcelExport: true, allowNumberFormatting: true, allowConditionalFormatting: true, toolbar: toolbarOptions, toolbarRender: toolbarRender, dataBound: onDataBound, enginePopulated: onEnginePopulated, displayOption: { view: 'Both' }, gridSettings: { columnWidth: ej2_base_1.Browser.isDevice ? 100 : 120 } },
                    React.createElement(ej2_react_pivotview_1.Inject, { services: [ej2_react_pivotview_1.FieldList, ej2_react_pivotview_1.Toolbar, ej2_react_pivotview_1.CalculatedField, ej2_react_pivotview_1.PDFExport, ej2_react_pivotview_1.ExcelExport, ej2_react_pivotview_1.ConditionalFormatting, ej2_react_pivotview_1.NumberFormatting] })))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This sample showcases how to dynamically load data from multiple data sources in the Pivot Table, including local and remote JSON/CSV files, as well as an OLAP(XMLA) data source via customized toolbar menu options. Additionally, you can save and reload Pivot Table report(s) as JSON files for future analysis.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null, "This sample demonstrates how to dynamically load data from various sources into the Pivot Table at runtime. You can load one data source at a time using the custom toolbar option. You can also save and load Pivot Table report(s) using the custom toolbar options, which are explained below one by one."),
            React.createElement("h4", null, "Open a Data Source:"),
            React.createElement("b", null, "JSON"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement("strong", null, "Local JSON Data:"),
                    " Hover over the first toolbar option, then hover over the ",
                    React.createElement("strong", null, "JSON"),
                    " menu option and select the ",
                    React.createElement("strong", null, "Local"),
                    " submenu option. This allows you choose and load a JSON data source file from your machine."),
                React.createElement("li", null,
                    React.createElement("strong", null, "Remote JSON Data:"),
                    " Hover over the first toolbar option, then hover over the ",
                    React.createElement("strong", null, "JSON"),
                    " menu option and select the ",
                    React.createElement("strong", null, "Remote"),
                    " submenu option. A popup will appear where you can enter the remote JSON data source file URL in the input box to load data into the Pivot Table.")),
            React.createElement("b", null, "CSV"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement("strong", null, "Local CSV Data:"),
                    " Hover over the first toolbar option, then hover over the ",
                    React.createElement("strong", null, "CSV"),
                    " menu option and select the ",
                    React.createElement("strong", null, "Local"),
                    " submenu option. This allows you choose and load a CSV data source file from your machine."),
                React.createElement("li", null,
                    React.createElement("strong", null, "Remote CSV Data:"),
                    " Hover over the first toolbar option, then hover over the ",
                    React.createElement("strong", null, "CSV"),
                    " menu option and select the ",
                    React.createElement("strong", null, "Remote"),
                    " submenu option. A popup will appear where you can enter the remote CSV data source file URL in the input box to load data into the Pivot Table.")),
            React.createElement("b", null, "OLAP(XMLA)"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    "Hover over the first toolbar option and click the ",
                    React.createElement("strong", null, "OLAP(XMLA)"),
                    " menu option to open the connection popup."),
                React.createElement("li", null,
                    "Enter the OLAP server URL in the ",
                    React.createElement("strong", null, "URL"),
                    " input box and click ",
                    React.createElement("strong", null, "Connect"),
                    ". This will load the available data sources from the OLAP server."),
                React.createElement("li", null,
                    "Select a data source from the ",
                    React.createElement("strong", null, "Data Sources"),
                    " dropdown. This will load the available catalogs for that data source."),
                React.createElement("li", null,
                    "Select a catalog from the ",
                    React.createElement("strong", null, "Catalogs"),
                    " dropdown. This will load the available cubes for that catalog."),
                React.createElement("li", null,
                    "Select a cube from the ",
                    React.createElement("strong", null, "Cubes"),
                    " dropdown, then click ",
                    React.createElement("strong", null, "OK"),
                    " to load the selected cube and begin your analysis.")),
            React.createElement("h4", null, "Load a Pivot Report:"),
            React.createElement("p", null, "You can load previously saved Pivot Report(s), which are in JSON file format, at any time to restore the exact analysis state."),
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement("strong", null, "Local JSON Pivot Report:"),
                    " Hover over the second toolbar option, then hover over the ",
                    React.createElement("strong", null, "Load Pivot Report"),
                    " menu option and select the ",
                    React.createElement("strong", null, "Local JSON"),
                    " submenu option to choose and load a JSON Pivot Report file from your machine."),
                React.createElement("li", null,
                    React.createElement("strong", null, "Remote JSON Pivot Report:"),
                    " Hover over the second toolbar option, then hover over the ",
                    React.createElement("strong", null, "Load Pivot Report"),
                    " menu option and select the ",
                    React.createElement("strong", null, "Remote JSON"),
                    " submenu option. A popup will appear where you can enter the remote JSON Pivot Report file URL in the input box to load the report into the Pivot Table.")),
            React.createElement("h4", null, "Save a Pivot Report:"),
            React.createElement("p", null,
                "You can save the Pivot Table report as a JSON file by clicking the third toolbar option (",
                React.createElement("strong", null, "Save Pivot Report as JSON"),
                ") to preserve configurations such as filtering, sorting, field arrangements, formatting, aggregations, and more. In this example, the report configurations are saved excluding the data source, but you can customize this behavior as needed."),
            React.createElement("br", null),
            React.createElement("p", null,
                "More information on the Essential\u00AE JS2 Pivot Table can be found in these ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/pivotview/data-binding" }, "Data Binding"),
                " and",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/pivotview/tool-bar#save-and-load-report-as-a-json-file" }, "Save and load report as a JSON file"),
                " documentation sections."))));
}
var DynamicBinding = /** @class */ (function (_super) {
    __extends(DynamicBinding, _super);
    function DynamicBinding() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DynamicBinding.prototype.render = function () {
        return React.createElement(DynamicBindingComponent, null);
    };
    return DynamicBinding;
}(sample_base_1.SampleBase));
exports.default = DynamicBinding;
