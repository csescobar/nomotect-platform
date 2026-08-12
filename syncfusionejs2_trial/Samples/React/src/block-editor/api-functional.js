"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var sample_base_1 = require("../common/sample-base");
var ej2_react_blockeditor_1 = require("@syncfusion/ej2-react-blockeditor");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var ej2_react_popups_1 = require("@syncfusion/ej2-react-popups");
require("./api.css");
var data = require("./blockData.json");
var API = function () {
    (0, react_1.useEffect)(function () {
        var _a, _b, _c, _d, _e;
        (0, sample_base_1.updateSampleSection)();
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
        // Get JSON data (entire editor) and show via predefined dialog
        (_a = document.getElementById("getJson")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
            var jsonData = apiBlockEditor.current.getDataAsJson();
            if (jsonData) {
                openDialog('JSON Data', JSON.stringify(jsonData, null, 2));
            }
        });
        // Get HTML data and show via predefined dialog (render as plain text)
        (_b = document.getElementById("getHtml")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
            var htmlData = apiBlockEditor.current.getDataAsHtml();
            if (htmlData) {
                openDialog('Editor HTML', htmlData, true);
            }
        });
        // Get block count and show via predefined dialog
        (_c = document.getElementById("getBlockCount")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
            var blockCount = apiBlockEditor.current.getBlockCount();
            if (blockCount !== undefined) {
                var dialog_1 = ej2_react_popups_1.DialogUtility.alert({
                    title: "Block Count",
                    content: "<div>Total blocks: <b>".concat(blockCount, "</b></div>"),
                    okButton: { text: 'OK', click: function () { return dialog_1.close(); } },
                    isModal: true,
                    position: { X: 'center', Y: 'center' },
                    width: "250px",
                    closeOnEscape: true
                });
            }
        });
        (_d = document.getElementById("selectall")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () {
            apiBlockEditor.current.selectAllBlocks();
        });
        (_e = document.getElementById("print")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", function () {
            apiBlockEditor.current.print();
        });
    }, []);
    var apiBlockEditor = (0, react_1.useRef)(null);
    var id = (0, react_1.useRef)(null);
    // Handles changes to the read-only checkbox to toggle editable mode
    var readOnlyChange = function (args) {
        apiBlockEditor.current.readOnly = args.checked;
    };
    // Handles changes to the drag and drop checkbox to enable or disable block reordering
    var enableDragDropChange = function (args) {
        apiBlockEditor.current.enableDragAndDrop = args.checked;
    };
    // Captures the block ID when the editor receives focus
    var focus = function (args) {
        id.current = args.blockId;
    };
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: "col-lg-8 control-section" },
            React.createElement("div", { className: "blockeditor-api" },
                React.createElement(ej2_react_blockeditor_1.BlockEditorComponent, { ref: apiBlockEditor, id: 'api-blockeditor', blocks: data["blockDataAPI"], focus: focus, height: "600px" }))),
        React.createElement("div", { className: "col-lg-4 property-section" },
            React.createElement("div", { id: "property", title: "Properties", className: 'property-panel-table' },
                React.createElement("table", { id: "property", title: "Properties" },
                    React.createElement("tbody", null,
                        React.createElement("tr", null,
                            React.createElement("td", null,
                                React.createElement("div", null, "ReadOnly ")),
                            React.createElement("td", null,
                                React.createElement("div", { style: { paddingTop: "0", paddingLeft: "0" } },
                                    React.createElement(ej2_react_buttons_1.CheckBoxComponent, { id: 'readonly', checked: false, change: readOnlyChange, "aria-label": "Readonly" })))),
                        React.createElement("tr", null,
                            React.createElement("td", null,
                                React.createElement("div", null, "Drag and Drop ")),
                            React.createElement("td", null,
                                React.createElement("div", { style: { paddingTop: "0", paddingLeft: "0" } },
                                    React.createElement(ej2_react_buttons_1.CheckBoxComponent, { id: 'enableDragDrop', checked: true, change: enableDragDropChange, "aria-label": "Enable Drag and Drop" })))),
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
exports.default = API;
