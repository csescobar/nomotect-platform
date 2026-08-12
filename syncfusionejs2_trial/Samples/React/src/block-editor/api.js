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
Object.defineProperty(exports, "__esModule", { value: true });
exports.API = void 0;
var React = require("react");
var ej2_react_blockeditor_1 = require("@syncfusion/ej2-react-blockeditor");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var ej2_react_popups_1 = require("@syncfusion/ej2-react-popups");
require("./api.css");
var data = require("./blockData.json");
var sample_base_1 = require("../common/sample-base");
var API = /** @class */ (function (_super) {
    __extends(API, _super);
    function API() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.readOnlyChange = function (args) {
            _this.apiBlockEditor.readOnly = args.checked;
        };
        _this.enableDragDropChange = function (args) {
            _this.apiBlockEditor.enableDragAndDrop = args.checked;
        };
        _this.focus = function (args) {
            _this.id = args.blockId;
        };
        _this.componentDidMount = function () {
            var _a, _b, _c, _d, _e;
            // Helper: escape HTML to display raw content safely inside dialog
            var escapeHtml = function (html) {
                return html
                    .replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                    .replace(/"/g, '&quot;')
                    .replace(/'/g, '&#39;');
            };
            // Reusable predefined dialog helper (single place to show alerts)
            var openDialog = function (title, content, isHtml) {
                var updatedContent = isHtml ? escapeHtml(content) : content;
                var dlg = ej2_react_popups_1.DialogUtility.alert({
                    title: title,
                    content: "<pre style=\"white-space: pre-wrap;\">".concat(updatedContent, "</pre>"),
                    okButton: { text: 'OK', click: function () { return dlg.close(); } },
                    isModal: true,
                    position: { X: 'center', Y: 'center' },
                    height: "400px",
                    width: "500px",
                    closeOnEscape: true
                });
            };
            (_a = document.getElementById("getJson")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
                var jsonData = _this.apiBlockEditor.getDataAsJson();
                openDialog('JSON Data', JSON.stringify(jsonData, null, 2));
            });
            (_b = document.getElementById('getHtml')) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
                var htmlData = _this.apiBlockEditor.getDataAsHtml();
                openDialog('Editor HTML', htmlData, true);
            });
            // Repeat for other buttons
            (_c = document.getElementById("getBlockCount")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
                var blockCount = _this.apiBlockEditor.getBlockCount();
                var dialog = ej2_react_popups_1.DialogUtility.alert({
                    title: "Block Count",
                    content: "<div>Total blocks: <b>".concat(blockCount, "</b></div>"),
                    okButton: { text: 'OK', click: function () { return dialog.close(); } },
                    isModal: true,
                    position: { X: 'center', Y: 'center' },
                    width: "250px",
                    closeOnEscape: true
                });
            });
            (_d = document.getElementById("selectall")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () {
                _this.apiBlockEditor.selectAllBlocks();
            });
            (_e = document.getElementById("print")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", function () {
                _this.apiBlockEditor.print();
            });
        };
        return _this;
    }
    API.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: "col-lg-8 control-section" },
                React.createElement("div", { className: "blockeditor-api" },
                    React.createElement(ej2_react_blockeditor_1.BlockEditorComponent, { ref: function (blockEditor) { return (_this.apiBlockEditor = blockEditor); }, id: 'api-blockeditor', blocks: data["blockDataAPI"], focus: this.focus.bind(this), height: "600px" }))),
            React.createElement("div", { className: "col-lg-4 property-section" },
                React.createElement("div", { id: "property", title: "Properties", className: 'property-panel-table' },
                    React.createElement("table", { id: "property", title: "Properties" },
                        React.createElement("tbody", null,
                            React.createElement("tr", null,
                                React.createElement("td", null,
                                    React.createElement("div", null, "ReadOnly ")),
                                React.createElement("td", null,
                                    React.createElement("div", { style: { paddingTop: "0", paddingLeft: "0" } },
                                        React.createElement(ej2_react_buttons_1.CheckBoxComponent, { id: 'readonly', checked: false, change: this.readOnlyChange.bind(this), "aria-label": "Readonly" })))),
                            React.createElement("tr", null,
                                React.createElement("td", null,
                                    React.createElement("div", null, "Drag and Drop ")),
                                React.createElement("td", null,
                                    React.createElement("div", { style: { paddingTop: "0", paddingLeft: "0" } },
                                        React.createElement(ej2_react_buttons_1.CheckBoxComponent, { id: 'enableDragDrop', checked: true, change: this.enableDragDropChange.bind(this), "aria-label": "Enable Drag and Drop" })))),
                            React.createElement("tr", null,
                                React.createElement("td", null,
                                    React.createElement("div", null, "Get Data")),
                                React.createElement("td", null,
                                    React.createElement("div", { className: 'e-btn-group', style: { paddingTop: "0", paddingLeft: "0", margin: "10px 0 0 10px" } },
                                        React.createElement("button", { className: "e-btn", id: "getJson" }, "JSON"),
                                        React.createElement("button", { className: "e-btn", id: "getHtml" }, "HTML")))),
                            React.createElement("tr", null,
                                React.createElement("td", null),
                                React.createElement("td", null,
                                    React.createElement("div", null,
                                        React.createElement("button", { id: "getBlockCount", className: "btn btn-default" }, "Get Block Count")))),
                            React.createElement("tr", null,
                                React.createElement("td", null),
                                React.createElement("td", null,
                                    React.createElement("div", null,
                                        React.createElement("button", { id: "selectall", className: "btn btn-default" }, "Select All Blocks")))),
                            React.createElement("tr", null,
                                React.createElement("td", null),
                                React.createElement("td", null,
                                    React.createElement("div", null,
                                        React.createElement("button", { id: "print", className: "btn btn-default" }, "Print")))))))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates the usage of API in Block Editor. Use the properties panel to change read-only mode, enable/disable drag and drop, get JSON data, get HTML data, get block count and select all blocks")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null, "In this demo, you can explore the API behaviors by:"),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        "Click the ",
                        React.createElement("code", null, "readOnly"),
                        " checkbox to enable/disable editable and non-editable mode of the Block Editor."),
                    React.createElement("li", null,
                        "Click the ",
                        React.createElement("code", null, "enableDragDrop"),
                        " checkbox to enable/disable drag and drop functionality."),
                    React.createElement("li", null,
                        "Use the grouped buttons:",
                        React.createElement("ul", null,
                            React.createElement("li", null,
                                React.createElement("code", null, "JSON"),
                                ": Shows the editor\u2019s data as JSON in a predefined dialog."),
                            React.createElement("li", null,
                                React.createElement("code", null, "HTML"),
                                ": Shows the editor\u2019s HTML output as text in a predefined dialog."))),
                    React.createElement("li", null,
                        "Click the ",
                        React.createElement("code", null, "getBlockCount"),
                        " button to display the total number of blocks in an predefined dialog."),
                    React.createElement("li", null,
                        "Click the ",
                        React.createElement("code", null, "selectAllBlocks"),
                        " button to select all content in the editor."),
                    React.createElement("li", null,
                        "Click the ",
                        React.createElement("code", null, "print"),
                        " button to preview the content before printing from the editor.")))));
    };
    return API;
}(sample_base_1.SampleBase));
exports.API = API;
