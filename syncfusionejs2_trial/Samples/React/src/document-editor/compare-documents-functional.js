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
var ej2_react_documenteditor_1 = require("@syncfusion/ej2-react-documenteditor");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
require("./default.component.css");
var sample_base_1 = require("../common/sample-base");
var CompareDocumentsFunctional = function () {
    var editorRef1 = (0, react_1.useRef)(null);
    var editorRef2 = (0, react_1.useRef)(null);
    var _a = (0, react_1.useState)(null), originalFile = _a[0], setOriginalFile = _a[1];
    var _b = (0, react_1.useState)(null), revisedFile = _b[0], setRevisedFile = _b[1];
    var _c = (0, react_1.useState)(true), showResult = _c[0], setShowResult = _c[1];
    var _d = (0, react_1.useState)(false), compareClicked = _d[0], setCompareClicked = _d[1];
    var serviceUrl = 'https://services.syncfusion.com/react/production/api/documenteditor/';
    (0, react_1.useEffect)(function () {
        var _a, _b;
        (0, sample_base_1.updateSampleSection)();
        // Set up synced scrolling between editors
        var editor1 = (_a = editorRef1.current) === null || _a === void 0 ? void 0 : _a.documentEditor;
        var editor2 = (_b = editorRef2.current) === null || _b === void 0 ? void 0 : _b.documentEditor;
        if (editor1 && editor2) {
            editor1.viewChange = function () {
                var pos = editor1.selection.getScrollPosition();
                editor2.selection.setScrollPosition(pos);
            };
            editor2.viewChange = function () {
                var pos = editor2.selection.getScrollPosition();
                editor1.selection.setScrollPosition(pos);
            };
        }
    }, []);
    var isSupportedFormatType = function (formatType) {
        switch (formatType) {
            case '.docx':
            case '.dotx':
            case '.docm':
            case '.dotm':
            case '.doc':
            case '.dot':
            case '.rtf':
            case '.txt':
            case '.xml':
            case '.html':
                return true;
            default:
                return false;
        }
    };
    var openFileInEditor = function (file, editorRef) { return __awaiter(void 0, void 0, void 0, function () {
        var formatType, reader, formData, response, sfdtString, sfdtObject, e_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    formatType = file.name.slice(file.name.lastIndexOf('.')).toLowerCase();
                    if (!(formatType === '.sfdt')) return [3 /*break*/, 1];
                    reader = new FileReader();
                    reader.onload = function (e) {
                        var _a, _b;
                        var docData = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
                        if (docData && ((_b = editorRef.current) === null || _b === void 0 ? void 0 : _b.documentEditor)) {
                            editorRef.current.documentEditor.open(docData);
                        }
                    };
                    reader.readAsText(file);
                    return [3 /*break*/, 8];
                case 1:
                    if (!isSupportedFormatType(formatType)) return [3 /*break*/, 7];
                    formData = new FormData();
                    formData.append('file', file);
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 5, , 6]);
                    return [4 /*yield*/, fetch(serviceUrl + 'Import', {
                            method: 'POST',
                            body: formData
                        })];
                case 3:
                    response = _b.sent();
                    return [4 /*yield*/, response.text()];
                case 4:
                    sfdtString = _b.sent();
                    sfdtObject = null;
                    try {
                        sfdtObject = JSON.parse(sfdtString);
                    }
                    catch (e) {
                        alert("Failed to parse SFDT JSON string from backend.");
                    }
                    if (sfdtObject && ((_a = editorRef.current) === null || _a === void 0 ? void 0 : _a.documentEditor)) {
                        editorRef.current.documentEditor.open(JSON.stringify(sfdtObject));
                    }
                    else {
                        alert("SFDT object missing or editor not ready.");
                    }
                    return [3 /*break*/, 6];
                case 5:
                    e_1 = _b.sent();
                    alert('Failed to import document file. Please check if the server supports this format.');
                    return [3 /*break*/, 6];
                case 6: return [3 /*break*/, 8];
                case 7:
                    alert('Unsupported file type. Please use .docx, .dotx, .docm, .dotm, .doc, .dot, .rtf, .txt, .xml, .html, or .sfdt files.');
                    _b.label = 8;
                case 8: return [2 /*return*/];
            }
        });
    }); };
    function loadComparedDocumentAndOpen(editorRef2, originalFile, revisedFile) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var formData, response, sfdtString, sfdtObject, e_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        formData = new FormData();
                        formData.append("original", originalFile);
                        formData.append("revised", revisedFile);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, fetch(serviceUrl + 'CompareDocuments', {
                                method: 'POST',
                                body: formData
                            })];
                    case 2:
                        response = _b.sent();
                        if (!response.ok) {
                            alert('Failed to fetch compared document.');
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, response.text()];
                    case 3:
                        sfdtString = _b.sent();
                        sfdtObject = null;
                        try {
                            sfdtObject = JSON.parse(sfdtString);
                        }
                        catch (_c) {
                            alert("Compare API did not return valid JSON.");
                            return [2 /*return*/];
                        }
                        if (sfdtObject && ((_a = editorRef2.current) === null || _a === void 0 ? void 0 : _a.documentEditor)) {
                            editorRef2.current.documentEditor.open(JSON.stringify(sfdtObject));
                        }
                        else {
                            alert("Compare API did not return SFDT document or editor2 not ready");
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        e_2 = _b.sent();
                        alert('Error comparing documents: ' + e_2);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    }
    var onCompare = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            setCompareClicked(false);
            setTimeout(function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            setCompareClicked(true);
                            if (!showResult) return [3 /*break*/, 5];
                            if (!originalFile) return [3 /*break*/, 2];
                            return [4 /*yield*/, openFileInEditor(originalFile, editorRef1)];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2:
                            if (!(originalFile && revisedFile)) return [3 /*break*/, 4];
                            return [4 /*yield*/, loadComparedDocumentAndOpen(editorRef2, originalFile, revisedFile)];
                        case 3:
                            _a.sent();
                            _a.label = 4;
                        case 4: return [3 /*break*/, 9];
                        case 5:
                            if (!originalFile) return [3 /*break*/, 7];
                            return [4 /*yield*/, openFileInEditor(originalFile, editorRef1)];
                        case 6:
                            _a.sent();
                            _a.label = 7;
                        case 7:
                            if (!revisedFile) return [3 /*break*/, 9];
                            return [4 /*yield*/, openFileInEditor(revisedFile, editorRef2)];
                        case 8:
                            _a.sent();
                            _a.label = 9;
                        case 9: return [2 /*return*/];
                    }
                });
            }); }, 0);
            return [2 /*return*/];
        });
    }); };
    var onDownload = function () {
        var _a;
        if ((_a = editorRef2.current) === null || _a === void 0 ? void 0 : _a.documentEditor) {
            editorRef2.current.documentEditor.save('Result', 'Docx');
        }
    };
    return (React.createElement("div", { className: "control-section" },
        React.createElement("div", { style: {
                display: 'flex',
                flexDirection: 'column',
                width: 900,
                gap: 12,
                padding: 18,
                margin: '20px auto 24px auto',
                border: '1.5px solid #d4dbf9',
                background: '#f6f9fe',
                borderRadius: 10,
                boxShadow: '0 2px 8px rgba(80,120,220,0.06)'
            } },
            React.createElement("div", { style: { display: 'flex', flexDirection: 'row', gap: 60 } },
                React.createElement("label", null,
                    "Original Document :",
                    React.createElement("input", { style: { marginLeft: 10 }, type: "file", accept: ".docx,.dotx,.docm,.dotm,.doc,.dot,.rtf,.txt,.xml,.html,.sfdt", onChange: function (e) { return setOriginalFile(e.target.files ? e.target.files[0] : null); } })),
                React.createElement("label", null,
                    "Revised Document :",
                    React.createElement("input", { style: { marginLeft: 10 }, type: "file", accept: ".docx,.dotx,.docm,.dotm,.doc,.dot,.rtf,.txt,.xml,.html,.sfdt", onChange: function (e) { return setRevisedFile(e.target.files ? e.target.files[0] : null); } }))),
            React.createElement("div", { style: { display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 20 } },
                React.createElement("label", { style: { flex: 1 } },
                    React.createElement("input", { type: "checkbox", checked: showResult, onChange: function (e) { return setShowResult(e.target.checked); }, style: { marginRight: 8 } }),
                    "Show comparison result with tracked changes"),
                React.createElement(ej2_react_buttons_1.ButtonComponent, { cssClass: "e-primary", style: {
                        padding: '8px 30px',
                        fontWeight: 600,
                        fontSize: '1em',
                        borderRadius: 6,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                    }, disabled: !originalFile || !revisedFile, onClick: onCompare }, "Compare Documents"),
                React.createElement(ej2_react_buttons_1.ButtonComponent, { cssClass: "e-outline e-flat e-primary", style: {
                        padding: '8px 30px',
                        fontWeight: 600,
                        fontSize: '1em',
                        borderRadius: 6,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                    }, onClick: onDownload, disabled: !compareClicked }, "Download Result"))),
        React.createElement("div", { style: {
                display: 'flex',
                flexDirection: 'row',
                gap: 10,
                width: '100%',
                height: '600px',
                overflow: 'hidden',
                padding: '10px'
            } },
            React.createElement("div", { style: { width: '50%', minWidth: 0, height: '100%', display: 'flex', flexDirection: 'column' } },
                React.createElement("div", { style: { fontWeight: 500, marginBottom: 4 } }, "Original Document"),
                React.createElement(ej2_react_documenteditor_1.DocumentEditorContainerComponent, { id: "editor1", ref: editorRef1, serviceUrl: serviceUrl, height: '100%', width: '100%', enableToolbar: false, showPropertiesPane: false })),
            React.createElement("div", { style: { width: '50%', minWidth: 0, height: '100%', display: 'flex', flexDirection: 'column' } },
                React.createElement("div", { style: { display: 'flex', alignItems: 'center', marginBottom: 4 } },
                    React.createElement("div", { style: { fontWeight: 500 } }, showResult ? 'Result Document with tracked changes' : 'Revised Document')),
                React.createElement(ej2_react_documenteditor_1.DocumentEditorContainerComponent, { id: "editor2", ref: editorRef2, serviceUrl: serviceUrl, height: '100%', width: '100%', enableToolbar: false, showPropertiesPane: false }))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "The Document Editor component supports comparing two documents with the help of sycnfusion DocIO and displays the differences between them.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null, "In this example, you can:"),
            React.createElement("ul", null,
                React.createElement("li", null, "Upload original and revised documents (.docx or .sfdt formats)"),
                React.createElement("li", null, "Compare the documents to see the differences"),
                React.createElement("li", null, "View the differences with or without tracked changes"),
                React.createElement("li", null, "Download the compared result document")),
            React.createElement("p", { style: { 'display': 'block' } },
                " More information about the document editor features can be found in this ",
                React.createElement("a", { target: "_blank", href: "https://help.syncfusion.com/document-processing/word/word-library/net/word-document/compare-word-documents/" }, "documentation section.")))));
};
exports.default = CompareDocumentsFunctional;
