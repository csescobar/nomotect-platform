"use strict";
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
var data_source_1 = require("./data-source");
require("./interactive-pivot-table.css");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var sample_base_1 = require("../common/sample-base");
/**
 * PivotView Toolbar Sample
 */
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
function InteractivePivotTable() {
    var _this = this;
    React.useEffect(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var connectFileRef = (0, react_1.useRef)(null);
    var reportFileRef = (0, react_1.useRef)(null);
    var _a = (0, react_1.useState)(false), isDialogOpen = _a[0], setDialogOpen = _a[1];
    var _b = (0, react_1.useState)(''), dialogType = _b[0], setDialogType = _b[1]; // 'csv' | 'json' | 'report' | 'olap'
    var _c = (0, react_1.useState)(''), remoteUrl = _c[0], setRemoteUrl = _c[1];
    var shouldAutoConfigRef = (0, react_1.useRef)(false);
    // Add these state variables at the top with other states
    var _d = (0, react_1.useState)(false), isErrorDialogOpen = _d[0], setIsErrorDialogOpen = _d[1];
    var _e = (0, react_1.useState)(''), errorMessage = _e[0], setErrorMessage = _e[1];
    // Save confirmation dialog state
    // Current data state (global variable equivalent)
    var _f = (0, react_1.useState)(data_source_1.Pivot_Data), currentData = _f[0], setCurrentData = _f[1];
    // OLAP dialog state (UI only)
    var _g = (0, react_1.useState)('https://bi.syncfusion.com/olap/msmdpump.dll'), olapProxyUrl = _g[0], setOlapProxyUrl = _g[1];
    var _h = (0, react_1.useState)(''), proxyBaseUrl = _h[0], setProxyBaseUrl = _h[1]; // optional simple proxy base, e.g. /proxy?url=
    var _j = (0, react_1.useState)(false), olapConnected = _j[0], setOlapConnected = _j[1];
    var _k = (0, react_1.useState)([]), olapDataSources = _k[0], setOlapDataSources = _k[1];
    var _l = (0, react_1.useState)([]), olapCatalogs = _l[0], setOlapCatalogs = _l[1];
    var _m = (0, react_1.useState)([]), olapCubes = _m[0], setOlapCubes = _m[1];
    var _o = (0, react_1.useState)(''), selectedDataSource = _o[0], setSelectedDataSource = _o[1];
    var _p = (0, react_1.useState)(''), selectedCatalog = _p[0], setSelectedCatalog = _p[1];
    var _q = (0, react_1.useState)(''), selectedCube = _q[0], setSelectedCube = _q[1];
    // Loading states for dropdowns
    var _r = (0, react_1.useState)(false), loadingSources = _r[0], setLoadingSources = _r[1];
    var _s = (0, react_1.useState)(false), loadingCatalogs = _s[0], setLoadingCatalogs = _s[1];
    var _t = (0, react_1.useState)(false), loadingCubes = _t[0], setLoadingCubes = _t[1];
    // Visible message inside OLAP dialog
    var _u = (0, react_1.useState)(''), olapUiMessage = _u[0], setOlapUiMessage = _u[1];
    var connectMenuRef = (0, react_1.useRef)(null);
    var openMenuRef = (0, react_1.useRef)(null);
    var pivotObj;
    // Updated default URLs to valid Syncfusion sample files
    var defaultUrls = {
        CSV: 'https://cdn.syncfusion.com/data/sales-analysis.csv',
        JSON: 'https://cdn.syncfusion.com/data/sales-analysis.json',
    };
    // Simple CSV parser: converts CSV string to 2D array (array of arrays)
    // Note: This is a basic parser; if your CSV contains quoted commas/newlines,
    // replace with a robust CSV parser library.
    var parseCSV = function (csvString) {
        var lines = csvString.split(/\r?\n|\r/).filter(function (line) { return line.trim(); });
        return lines.map(function (line) {
            return line.split(',').map(function (cell) { return cell.trim().replace(/^"|"$/g, '').replace(/""/g, '"'); });
        });
    };
    // Detect if OLAP engine is active
    var isOlapActive = function () {
        var pivot = pivotObj;
        if (!pivot)
            return false;
        var ds = pivot.dataSourceSettings || {};
        return pivot.dataType === 'olap' || !!pivot.olapEngineModule || ds.providerType === 'SSAS';
    };
    // Cleanly switch to relational mode by tearing down OLAP artifacts
    var cleanOlapForRelational = function () {
        var pivot = pivotObj;
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
    // Helper to bind data to Pivot in one place and request auto-config
    var setPivotData = function (type, data) {
        var pivot = pivotObj;
        if (!pivot)
            return;
        if (isOlapActive())
            cleanOlapForRelational();
        pivot.dataSourceSettings.type = type;
        pivot.dataSourceSettings.dataSource = data;
        delete pivot.dataSourceSettings.url;
        setCurrentData(data);
        shouldAutoConfigRef.current = true; // request auto-config after binding
        pivot.refresh();
    };
    // Helper function to apply report settings with data source injection if needed
    var applyReportSettings = function (pivot, reportSettings, isOlapReport) { return __awaiter(_this, void 0, void 0, function () {
        var maybeDataUrl, maybeCsvUrl, res, jsonData, arr, res, csvString, csvArray, e_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!isOlapReport) return [3 /*break*/, 1];
                    // For OLAP reports, dataSource is always empty; no injection needed
                    setCurrentData([]);
                    pivot.olapEngineModule = new ej2_react_pivotview_1.OlapEngine();
                    pivot.dataType = 'olap';
                    return [3 /*break*/, 11];
                case 1:
                    // Relational reports: allow specifying remote dataset URLs inside the report
                    // Supported keys: dataUrl (JSON), csvUrl (CSV), or url (treated as JSON)
                    cleanOlapForRelational();
                    maybeDataUrl = reportSettings.dataUrl || reportSettings.url;
                    maybeCsvUrl = reportSettings.csvUrl;
                    if (!(!reportSettings.dataSource || reportSettings.dataSource.length === 0)) return [3 /*break*/, 11];
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 10, , 11]);
                    if (!maybeDataUrl) return [3 /*break*/, 5];
                    return [4 /*yield*/, fetch(maybeDataUrl, { cache: 'no-store' })];
                case 3:
                    res = _b.sent();
                    if (!res.ok)
                        throw new Error("HTTP ".concat(res.status, ": ").concat(res.statusText));
                    return [4 /*yield*/, res.json()];
                case 4:
                    jsonData = _b.sent();
                    arr = Array.isArray(jsonData) ? jsonData : ((_a = jsonData === null || jsonData === void 0 ? void 0 : jsonData.data) !== null && _a !== void 0 ? _a : jsonData);
                    if (!Array.isArray(arr) || arr.length === 0 || typeof arr[0] !== 'object') {
                        throw new Error('Invalid JSON at dataUrl: expected an array of objects (or under "data").');
                    }
                    reportSettings.type = 'JSON';
                    reportSettings.dataSource = arr;
                    setCurrentData(arr);
                    return [3 /*break*/, 9];
                case 5:
                    if (!maybeCsvUrl) return [3 /*break*/, 8];
                    return [4 /*yield*/, fetch(maybeCsvUrl, { cache: 'no-store' })];
                case 6:
                    res = _b.sent();
                    if (!res.ok)
                        throw new Error("HTTP ".concat(res.status, ": ").concat(res.statusText));
                    return [4 /*yield*/, res.text()];
                case 7:
                    csvString = _b.sent();
                    csvArray = parseCSV(csvString);
                    if (!csvArray.length)
                        throw new Error('CSV at csvUrl appears empty.');
                    reportSettings.type = 'CSV';
                    reportSettings.dataSource = csvArray;
                    setCurrentData(csvArray);
                    return [3 /*break*/, 9];
                case 8:
                    // Fallback to previously loaded data
                    reportSettings.dataSource = currentData;
                    reportSettings.type = pivot.dataSourceSettings.type || 'JSON';
                    _b.label = 9;
                case 9: return [3 /*break*/, 11];
                case 10:
                    e_1 = _b.sent();
                    // On fetch/parse failure, keep existing behavior to avoid breaking the app
                    reportSettings.dataSource = currentData;
                    reportSettings.type = pivot.dataSourceSettings.type || 'JSON';
                    return [3 /*break*/, 11];
                case 11:
                    pivot.dataSourceSettings = reportSettings;
                    shouldAutoConfigRef.current = false; // respect saved layout
                    pivot.refresh();
                    return [2 /*return*/];
            }
        });
    }); };
    // File input change handler for local CSV/JSON
    var handleConnectFileChange = function (e) {
        var _a;
        var file = (_a = e.target.files) === null || _a === void 0 ? void 0 : _a[0];
        if (!file)
            return;
        // Detect CSV by either the pre-set dataset.type (used by existing menu)
        // or by the selected file extension (used by Local Report menu)
        var isCsv = e.target.dataset.type === 'csv' || /\.csv$/i.test(file.name);
        var reader = new FileReader();
        reader.onload = function (evt) { return __awaiter(_this, void 0, void 0, function () {
            var pivot, csvString, csvArray, raw, parsed, unwrappedData, looksLikeReport, reportSettings, isOlapReport, dataArray, err_1;
            var _a, _b, _c, _d, _e, _f, _g;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        _h.trys.push([0, 6, , 7]);
                        pivot = pivotObj;
                        if (pivot && pivot.engineModule) {
                            pivot.engineModule.fieldList = {};
                        }
                        // Always clear axes for a clean start
                        if (pivot) {
                            pivot.dataSourceSettings.rows = [];
                            pivot.dataSourceSettings.columns = [];
                            pivot.dataSourceSettings.values = [];
                            pivot.dataSourceSettings.filters = [];
                        }
                        if (!isCsv) return [3 /*break*/, 1];
                        csvString = String((_b = (_a = evt.target) === null || _a === void 0 ? void 0 : _a.result) !== null && _b !== void 0 ? _b : '');
                        csvArray = parseCSV(csvString);
                        if (!csvArray.length) {
                            alert('CSV appears empty.');
                            return [2 /*return*/];
                        }
                        setPivotData('CSV', csvArray);
                        return [3 /*break*/, 5];
                    case 1:
                        raw = String((_d = (_c = evt.target) === null || _c === void 0 ? void 0 : _c.result) !== null && _d !== void 0 ? _d : '');
                        parsed = JSON.parse(raw);
                        unwrappedData = (parsed && typeof parsed === 'object' && 'record' in parsed) ? parsed.record : parsed;
                        looksLikeReport = !Array.isArray(unwrappedData)
                            && ((unwrappedData === null || unwrappedData === void 0 ? void 0 : unwrappedData.dataSourceSettings)
                                || (unwrappedData === null || unwrappedData === void 0 ? void 0 : unwrappedData.rows) || (unwrappedData === null || unwrappedData === void 0 ? void 0 : unwrappedData.columns) || (unwrappedData === null || unwrappedData === void 0 ? void 0 : unwrappedData.values)
                                || (unwrappedData === null || unwrappedData === void 0 ? void 0 : unwrappedData.url) || (unwrappedData === null || unwrappedData === void 0 ? void 0 : unwrappedData.providerType));
                        if (!looksLikeReport) return [3 /*break*/, 4];
                        reportSettings = (_e = unwrappedData.dataSourceSettings) !== null && _e !== void 0 ? _e : unwrappedData;
                        isOlapReport = ((_f = reportSettings) === null || _f === void 0 ? void 0 : _f.providerType) === 'SSAS';
                        // Reset and apply the saved report settings
                        if (pivot)
                            resetPivot();
                        if (!pivot) return [3 /*break*/, 3];
                        return [4 /*yield*/, applyReportSettings(pivot, reportSettings, isOlapReport)];
                    case 2:
                        _h.sent();
                        _h.label = 3;
                    case 3: return [2 /*return*/];
                    case 4:
                        dataArray = Array.isArray(unwrappedData) ? unwrappedData : ((_g = unwrappedData === null || unwrappedData === void 0 ? void 0 : unwrappedData.data) !== null && _g !== void 0 ? _g : unwrappedData);
                        if (!Array.isArray(dataArray) || dataArray.length === 0 || typeof dataArray[0] !== 'object') {
                            alert('Invalid JSON: Provide a saved report or a non-empty array of objects (or under "data").');
                            return [2 /*return*/];
                        }
                        setPivotData('JSON', dataArray);
                        _h.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        err_1 = _h.sent();
                        alert("Failed to load file: ".concat(err_1.message));
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        }); };
        reader.readAsText(file);
        // Reset the input so selecting the same file again will trigger change
        e.target.value = '';
    };
    function toolbarRender(args) {
        var connectMenu = {
            template: '<ul id="connect_menu"></ul>',
            id: 'custom_toolbar',
        };
        args.customToolbar.splice(0, 0, connectMenu);
        var openMenu = {
            template: '<ul id="open_menu"></ul>',
            id: 'open_toolbar',
        };
        args.customToolbar.splice(1, 0, openMenu);
        var saveItem = {
            prefixIcon: 'e-save-report e-btn-icon e-icons',
            tooltipText: 'Save Pivot Report as JSON',
            click: toolbarClicked,
        };
        args.customToolbar.splice(2, 0, saveItem);
        var separator3 = {
            type: 'Separator'
        };
        args.customToolbar.splice(3, 0, separator3);
    }
    ;
    var onDataBound = function () {
        var _a;
        var pivot = pivotObj;
        if (ej2_base_1.Browser.isDevice && pivot && pivot.enableRtl) {
            (_a = document.querySelector('.control-section')) === null || _a === void 0 ? void 0 : _a.classList.add('e-rtl');
        }
        // Initialize or re-initialize connect menu safely (destroy-before-create)
        var connectEl = document.getElementById('connect_menu');
        if (connectEl) {
            var menuItems = [
                {
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
                        { text: 'OLAP (XMLA)', id: 'olap', iconCss: 'e-olap-icon e-icons' },
                    ],
                },
            ];
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
                                { text: 'Local (JSON)', id: 'local_report', iconCss: 'e-local-report-icon e-icons' },
                                { text: 'Remote (JSON)', id: 'remote_report', iconCss: 'e-remote-report-icon e-icons' },
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
    };
    var onEnginePopulated = function () {
        var _a;
        // Open Field List only after engine is populated so it reflects latest fields
        if (shouldAutoConfigRef.current && pivotObj) {
            shouldAutoConfigRef.current = false;
            if (((_a = pivotObj.dataSourceSettings.values) === null || _a === void 0 ? void 0 : _a.length) === 0) {
                pivotObj.pivotFieldListModule.dialogRenderer.onShowFieldList();
            }
        }
    };
    var toolbarClicked = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // Directly save without confirmation dialog
                return [4 /*yield*/, saveReport()];
                case 1:
                    // Directly save without confirmation dialog
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    // Execute actual save after user confirms
    var saveReport = function () { return __awaiter(_this, void 0, void 0, function () {
        var pivot, download, persisted, dataSourceSettingsOnly, parsed, json;
        var _a, _b, _c;
        return __generator(this, function (_d) {
            pivot = pivotObj;
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
                dataSourceSettingsOnly = {};
                try {
                    parsed = JSON.parse(persisted);
                    parsed.dataSourceSettings.dataSource = [];
                    parsed.pivotValues = [];
                    dataSourceSettingsOnly = (_b = (_a = parsed === null || parsed === void 0 ? void 0 : parsed.dataSourceSettings) !== null && _a !== void 0 ? _a : pivot.dataSourceSettings) !== null && _b !== void 0 ? _b : {};
                }
                catch (_e) {
                    dataSourceSettingsOnly = (_c = pivot.dataSourceSettings) !== null && _c !== void 0 ? _c : {};
                }
                json = JSON.stringify(dataSourceSettingsOnly, null, 2);
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
            // Reuse the existing local CSV/JSON flow. Allow both types.
            var input = connectFileRef.current;
            if (input) {
                // Guard against stacked handlers and stale values
                input.onchange = null;
                input.value = '';
                input.accept = '.json';
                // Do not preset dataset.type; let the change handler infer by extension
                delete input.dataset.type;
                input.onchange = handleConnectFileChange;
                input.click();
            }
            return;
        }
        if (itemId === 'remote_report') {
            // Open the same URL dialog as Remote JSON, prefilled with default JSON link
            setDialogType('JSON Report');
            setRemoteUrl("https://api.jsonbin.io/v3/b/6912d9ecd0ea881f40e12335");
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
                // Guard against stacked handlers and stale values
                input.onchange = null;
                input.value = '';
                input.accept = ext === 'CSV' ? '.csv' : '.json';
                input.dataset.type = ext;
                input.onchange = handleConnectFileChange;
                input.click();
            }
            return; // Do not affect other menu items
        }
        if (itemId === 'remote_csv' || itemId === 'remote_json') {
            var type = itemId === 'remote_csv' ? 'CSV' : 'JSON';
            setDialogType(type);
            // Pre-fill with default URL. User may edit this value.
            setRemoteUrl(defaultUrls[type] || '');
            setDialogOpen(true);
            return; // Only handle this case; other menu items remain untouched
        }
        if (itemId === 'olap') {
            // Open OLAP dialog
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
        // Leave other menu items untouched so their existing behavior remains
    };
    // Helper to reset engine cache and clear axes before switching data source
    var resetPivot = function () {
        var pivot = pivotObj;
        if (pivot && pivot.engineModule) {
            pivot.engineModule.fieldList = {}; // Clear field list cache
        }
        if (pivot) {
            pivot.dataSourceSettings.rows = [];
            pivot.dataSourceSettings.columns = [];
            pivot.dataSourceSettings.values = [];
            pivot.dataSourceSettings.filters = [];
        }
    };
    // Apply/refresh OLAP binding on the Pivot with current selections
    var applyOlapBinding = function (opts) { return __awaiter(_this, void 0, void 0, function () {
        var pivot, url, catalog, cube, olapDataSourceSettings;
        var _a, _b, _c;
        return __generator(this, function (_d) {
            pivot = pivotObj;
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
                localeIdentifier: 1033,
                dataSource: [],
                rows: [],
                columns: [],
                values: []
            };
            pivot.engineModule = null;
            pivot.olapEngineModule = new ej2_react_pivotview_1.OlapEngine();
            pivot.dataType = 'olap';
            pivot.dataSourceSettings = olapDataSourceSettings;
            setCurrentData([]);
            shouldAutoConfigRef.current = true;
            pivot.refresh();
            return [2 /*return*/];
        });
    }); };
    // ========== XMLA helper functions (Discover over HTTP) ==========
    var xmlaSoapEnvelope = function (requestType, restrictions, properties) {
        if (restrictions === void 0) { restrictions = {}; }
        if (properties === void 0) { properties = {}; }
        var restrXml = Object.keys(restrictions).length
            ? "<Restrictions><RestrictionList>".concat(Object.entries(restrictions)
                .map(function (_a) {
                var k = _a[0], v = _a[1];
                return "<".concat(k, ">").concat(String(v), "</").concat(k, ">");
            }) // simple string content
                .join(''), "</RestrictionList></Restrictions>")
            : '<Restrictions />';
        var propXml = "<Properties><PropertyList>".concat(Object.entries(properties)
            .map(function (_a) {
            var k = _a[0], v = _a[1];
            return "<".concat(k, ">").concat(String(v), "</").concat(k, ">");
        })
            .join(''), "</PropertyList></Properties>");
        return "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">\n  <soap:Header />\n  <soap:Body>\n    <Discover xmlns=\"urn:schemas-microsoft-com:xml-analysis\">\n      <RequestType>".concat(requestType, "</RequestType>\n      ").concat(restrXml, "\n      ").concat(propXml, "\n    </Discover>\n  </soap:Body>\n</soap:Envelope>");
    };
    var resolveEndpoint = function (endpoint) {
        var trimmed = endpoint.trim();
        if (!proxyBaseUrl)
            return trimmed; // direct
        // simple proxy pattern: proxyBaseUrl?url=encoded
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
                    // console.log('[XMLA][RAW]', text);
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
            Array.from(r.children).forEach(function (c) {
                var _a;
                obj[c.localName] = ((_a = c.textContent) !== null && _a !== void 0 ? _a : '').trim();
            });
            return obj;
        });
        // console.log('[XMLA][PARSED]', result);
        // Basic SOAP fault detection
        var fault = xml.getElementsByTagNameNS('*', 'Fault')[0];
        if (fault) {
            var faultStr = fault.textContent || 'SOAP Fault';
            throw new Error(faultStr.trim());
        }
        return result;
    };
    var discoverDataSources = function (endpoint) { return __awaiter(_this, void 0, void 0, function () {
        var body, xml, rows, names;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    body = xmlaSoapEnvelope('DISCOVER_DATASOURCES');
                    return [4 /*yield*/, postXMLA(endpoint, body)];
                case 1:
                    xml = _a.sent();
                    rows = parseRowset(xml);
                    names = rows.map(function (r) { return r.DataSourceName; }).filter(Boolean);
                    // console.log('[XMLA][DataSources]', names);
                    return [2 /*return*/, names];
            }
        });
    }); };
    var discoverCatalogs = function (endpoint, _dataSource) { return __awaiter(_this, void 0, void 0, function () {
        var body, xml, rows, cats;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    body = xmlaSoapEnvelope('DBSCHEMA_CATALOGS');
                    return [4 /*yield*/, postXMLA(endpoint, body)];
                case 1:
                    xml = _a.sent();
                    rows = parseRowset(xml);
                    cats = rows.map(function (r) { return r.CATALOG_NAME; }).filter(Boolean);
                    // console.log('[XMLA][Catalogs]', cats);
                    return [2 /*return*/, cats];
            }
        });
    }); };
    var discoverCubes = function (endpoint, catalog) { return __awaiter(_this, void 0, void 0, function () {
        var body, xml, rows, cubes;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    body = xmlaSoapEnvelope('MDSCHEMA_CUBES', { CATALOG_NAME: catalog });
                    return [4 /*yield*/, postXMLA(endpoint, body)];
                case 1:
                    xml = _a.sent();
                    rows = parseRowset(xml);
                    cubes = rows
                        .filter(function (r) { return r.CUBE_SOURCE === '1'; })
                        .map(function (r) { return r.CUBE_NAME; })
                        .filter(Boolean);
                    // console.log('[XMLA][Cubes]', cubes);
                    return [2 /*return*/, cubes];
            }
        });
    }); };
    // Unified remote loader for CSV/JSON. Keeps local/remote flows isolated.
    var loadRemoteAndBind = function (kind, url) { return __awaiter(_this, void 0, void 0, function () {
        var cleanUrl, res, csvString, csvArray, res, jsonData, unwrappedData, looksLikeReport, reportSettings, isOlapReport, pivot, arr;
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    cleanUrl = url.trim();
                    if (!cleanUrl)
                        throw new Error('Empty URL');
                    resetPivot();
                    if (!(kind === 'CSV')) return [3 /*break*/, 3];
                    return [4 /*yield*/, fetch(cleanUrl, { cache: 'no-store' })];
                case 1:
                    res = _d.sent();
                    if (!res.ok)
                        throw new Error("HTTP ".concat(res.status, ": ").concat(res.statusText));
                    return [4 /*yield*/, res.text()];
                case 2:
                    csvString = _d.sent();
                    csvArray = parseCSV(csvString);
                    if (!csvArray.length)
                        throw new Error('CSV appears empty.');
                    setPivotData('CSV', csvArray);
                    return [3 /*break*/, 8];
                case 3: return [4 /*yield*/, fetch(cleanUrl, { cache: 'no-store' })];
                case 4:
                    res = _d.sent();
                    if (!res.ok)
                        throw new Error("HTTP ".concat(res.status, ": ").concat(res.statusText));
                    return [4 /*yield*/, res.json()];
                case 5:
                    jsonData = _d.sent();
                    unwrappedData = (jsonData && typeof jsonData === 'object' && 'record' in jsonData) ? jsonData.record : jsonData;
                    looksLikeReport = !Array.isArray(unwrappedData)
                        && ((unwrappedData === null || unwrappedData === void 0 ? void 0 : unwrappedData.dataSourceSettings)
                            || (unwrappedData === null || unwrappedData === void 0 ? void 0 : unwrappedData.rows) || (unwrappedData === null || unwrappedData === void 0 ? void 0 : unwrappedData.columns) || (unwrappedData === null || unwrappedData === void 0 ? void 0 : unwrappedData.values)
                            || (unwrappedData === null || unwrappedData === void 0 ? void 0 : unwrappedData.url) || (unwrappedData === null || unwrappedData === void 0 ? void 0 : unwrappedData.providerType));
                    if (!looksLikeReport) return [3 /*break*/, 7];
                    reportSettings = (_a = unwrappedData.dataSourceSettings) !== null && _a !== void 0 ? _a : unwrappedData;
                    isOlapReport = ((_b = reportSettings) === null || _b === void 0 ? void 0 : _b.providerType) === 'SSAS';
                    resetPivot();
                    pivot = pivotObj;
                    if (!pivot) return [3 /*break*/, 7];
                    return [4 /*yield*/, applyReportSettings(pivot, reportSettings, isOlapReport)];
                case 6:
                    _d.sent();
                    return [2 /*return*/];
                case 7:
                    arr = Array.isArray(unwrappedData) ? unwrappedData : ((_c = unwrappedData === null || unwrappedData === void 0 ? void 0 : unwrappedData.data) !== null && _c !== void 0 ? _c : unwrappedData);
                    if (!Array.isArray(arr) || arr.length === 0 || typeof arr[0] !== 'object') {
                        throw new Error('Invalid JSON: Provide a saved report or a non-empty array of objects (or under "data").');
                    }
                    setPivotData('JSON', arr);
                    _d.label = 8;
                case 8: return [2 /*return*/];
            }
        });
    }); };
    // Update handleOpenRemote function (replace the existing one)
    var handleOpenRemote = function () { return __awaiter(_this, void 0, void 0, function () {
        var err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!remoteUrl.trim()) {
                        setErrorMessage('Please enter a valid URL.');
                        setDialogOpen(false); // Close input dialog
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
                    setErrorMessage("Failed to load remote ".concat(dialogType, ": ").concat(err_2.message, "\n\n") +
                        "Tip: Ensure the URL is accessible and allows CORS for your origin.");
                    setDialogOpen(false);
                    setIsErrorDialogOpen(true);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("meta", { name: "referrer", content: "never" }),
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
            isDialogOpen && dialogType === 'OLAP' && (React.createElement(ej2_react_popups_1.DialogComponent, { visible: isDialogOpen, isModal: true, showCloseIcon: true, width: "620px", header: "Connect to OLAP (XMLA)", close: function () { return setDialogOpen(false); }, target: ".control-pane", closeOnEscape: true, overlayClick: function () { return setDialogOpen(false); }, position: { X: 'center', Y: 'center' }, animationSettings: { effect: 'Zoom', duration: 150 } },
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
                        React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { value: selectedDataSource, dataSource: olapDataSources, fields: { text: 'value', value: 'value' }, placeholder: loadingSources ? 'Loading…' : 'Select data source', disabled: !olapConnected || loadingSources, change: function (e) { return __awaiter(_this, void 0, void 0, function () {
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
                                            return [4 /*yield*/, discoverCatalogs(olapProxyUrl, v)];
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
                            }); }, cssClass: "e-input", style: { width: '100%' } })),
                    React.createElement("div", { className: "olap-row" },
                        React.createElement("label", { style: { display: 'block', marginBottom: 4, fontWeight: '500' } }, "Catalogs"),
                        React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { value: selectedCatalog, dataSource: olapCatalogs, fields: { text: 'value', value: 'value' }, placeholder: loadingCatalogs ? 'Loading…' : 'Select catalog', disabled: !selectedDataSource || loadingCatalogs, change: function (e) { return __awaiter(_this, void 0, void 0, function () {
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
                            }); }, cssClass: "e-input", style: { width: '100%' } })),
                    React.createElement("div", { className: "olap-row" },
                        React.createElement("label", { style: { display: 'block', marginBottom: 4, fontWeight: '500' } }, "Cubes"),
                        React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { value: selectedCube, dataSource: olapCubes, fields: { text: 'value', value: 'value' }, placeholder: loadingCubes ? 'Loading…' : 'Select cube', disabled: !selectedCatalog || loadingCubes, change: function (e) { return __awaiter(_this, void 0, void 0, function () {
                                var v, pivot, isOlap;
                                var _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            v = e.value;
                                            setSelectedCube(v);
                                            pivot = pivotObj;
                                            isOlap = pivot && ((_a = pivot.dataSourceSettings) === null || _a === void 0 ? void 0 : _a.providerType) === 'SSAS';
                                            if (!(isOlap && v)) return [3 /*break*/, 2];
                                            return [4 /*yield*/, applyOlapBinding({ cube: v })];
                                        case 1:
                                            _b.sent();
                                            _b.label = 2;
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); }, cssClass: "e-input", style: { width: '100%' } })),
                    olapUiMessage && React.createElement("div", { style: { color: 'var(--e-error, #b00020)', fontSize: '14px' } }, olapUiMessage),
                    React.createElement("div", { style: { display: 'flex', justifyContent: 'flex-end', gap: 8 } },
                        React.createElement(ej2_react_buttons_1.ButtonComponent, { cssClass: 'e-primary', onClick: function () { return __awaiter(_this, void 0, void 0, function () {
                                var pivot;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            pivot = pivotObj;
                                            if (!pivot) {
                                                setDialogOpen(false);
                                                return [2 /*return*/];
                                            }
                                            if (!olapConnected || !selectedCatalog || !selectedCube) {
                                                alert('Please connect and select a Catalog and Cube.');
                                                return [2 /*return*/];
                                            }
                                            return [4 /*yield*/, applyOlapBinding({
                                                    url: resolveEndpoint(olapProxyUrl),
                                                    catalog: selectedCatalog,
                                                    cube: selectedCube,
                                                })];
                                        case 1:
                                            _a.sent();
                                            setDialogOpen(false);
                                            return [2 /*return*/];
                                    }
                                });
                            }); }, disabled: !olapConnected }, "OK"),
                        React.createElement(ej2_react_buttons_1.ButtonComponent, { onClick: function () { return setDialogOpen(false); } }, "Cancel"))))),
            React.createElement("div", { className: 'control-section' },
                React.createElement(ej2_react_pivotview_1.PivotViewComponent, { id: 'PivotView', ref: function (scope) { pivotObj = scope; }, dataSourceSettings: dataSourceSettings, width: '100%', height: 500, showFieldList: true, showToolbar: true, allowCalculatedField: true, allowPdfExport: true, allowExcelExport: true, allowNumberFormatting: true, allowConditionalFormatting: true, toolbar: toolbarOptions, toolbarRender: toolbarRender, dataBound: onDataBound, enginePopulated: onEnginePopulated, displayOption: { view: 'Both' }, gridSettings: { columnWidth: ej2_base_1.Browser.isDevice ? 100 : 120 } },
                    React.createElement(ej2_react_pivotview_1.Inject, { services: [ej2_react_pivotview_1.FieldList, ej2_react_pivotview_1.Toolbar, ej2_react_pivotview_1.CalculatedField, ej2_react_pivotview_1.PDFExport, ej2_react_pivotview_1.ExcelExport, ej2_react_pivotview_1.ConditionalFormatting, ej2_react_pivotview_1.NumberFormatting] })))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This sample showcases how to dynamically load data from multiple sources in the Pivot Table, including local and remote JSON/CSV files, as well as OLAP (XMLA) databases via a customized toolbar menu options. It highlights powerful analysis features such as drilling, filtering, formatting, and chart toggling. Additionally, you can save and reload pivot table reports as JSON files for future analysis.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null, "This sample demonstrates how to dynamically load data from various sources\u2014local and remote JSON/CSV files, and OLAP (XMLA) databases\u2014using a customized toolbar menu. The Pivot Table component automatically binds to these sources at runtime, recalculating aggregations and field configurations as data changes. The intuitive toolbar provides user-friendly options to connect to data sources without code changes."),
            React.createElement("b", null, "Loading JSON and CSV Data (Local and Remote)"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    "Hover over ",
                    React.createElement("b", null, "Data Binding \u2192 JSON"),
                    ", then select ",
                    React.createElement("b", null, "Local"),
                    " to choose and load a JSON file from your system."),
                React.createElement("li", null,
                    "For remote JSON, select ",
                    React.createElement("b", null, "Remote"),
                    " to enter the URL and load data into the pivot table. Similarly, CSV data can be loaded from both local files and remote URLs.")),
            React.createElement("b", null, "Loading OLAP (XMLA) Data"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    "Hover over ",
                    React.createElement("b", null, "Data Binding \u2192 OLAP (XMLA)"),
                    " to open the connection popup."),
                React.createElement("li", null,
                    "Enter the OLAP server URL and click ",
                    React.createElement("b", null, "Connect"),
                    "."),
                React.createElement("li", null, "Select a data source, then a catalog, then a cube from the respective dropdowns."),
                React.createElement("li", null,
                    "Click ",
                    React.createElement("b", null, "OK"),
                    " to load the selected cube and start your analysis.")),
            React.createElement("b", null, "Saving and Reloading Reports"),
            React.createElement("p", null, "You can save pivot table reports as JSON files to preserve configurations (sorting, filtering, field arrangements, formatting, aggregations). Load saved or remote JSON reports anytime to restore the exact analysis state."))));
}
exports.default = InteractivePivotTable;
