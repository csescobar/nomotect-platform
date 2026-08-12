"use strict";
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
var React = require("react");
var react_1 = require("react");
var ej2_react_blockeditor_1 = require("@syncfusion/ej2-react-blockeditor");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var ej2_react_inputs_1 = require("@syncfusion/ej2-react-inputs");
var sample_base_1 = require("../common/sample-base");
require("./pasteSettings.css");
var data = require("./blockData.json");
var PasteSettings = function () {
    var blockEditorRef = (0, react_1.useRef)(null);
    var formatOptionRef = (0, react_1.useRef)(null);
    var deniedTagsRef = (0, react_1.useRef)(null);
    var _a = (0, react_1.useState)({
        deniedTags: ['script', 'iframe'],
        plainText: false,
        keepFormat: true,
        allowedStyles: []
    }), pasteSettings = _a[0], setPasteSettings = _a[1];
    var formatData = [
        { Id: 'plainText', Format: 'Plain Text' },
        { Id: 'keepFormat', Format: 'Keep Format' }
    ];
    var fields = { text: 'Format', value: 'Id' };
    var height = '200px';
    var _b = (0, react_1.useState)('keepFormat'), value = _b[0], setValue = _b[1];
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var formatChange = function () {
        if (!blockEditorRef.current) {
            return;
        }
        var newPasteSettings = __assign({}, pasteSettings);
        if (formatOptionRef.current.value === 'plainText') {
            newPasteSettings.plainText = true;
            newPasteSettings.keepFormat = false;
        }
        else if (formatOptionRef.current.value === 'keepFormat') {
            newPasteSettings.plainText = false;
            newPasteSettings.keepFormat = true;
        }
        setPasteSettings(newPasteSettings);
        blockEditorRef.current.dataBind();
    };
    var deniedTagChange = function () {
        var _a;
        if (!((_a = deniedTagsRef.current) === null || _a === void 0 ? void 0 : _a.value))
            return;
        onPasteCleanupSettingsChange(deniedTagsRef.current.value);
    };
    var onPasteCleanupSettingsChange = function (value) {
        if (!blockEditorRef.current) {
            return;
        }
        if (value) {
            var arrayValue = value.split(',').map(function (item) { return item.trim().replace(/^['"]|['"]$/g, ''); });
            var newPasteSettings = __assign(__assign({}, pasteSettings), { deniedTags: arrayValue.filter(function (prop) { return prop !== ''; }) });
            setPasteSettings(newPasteSettings);
            blockEditorRef.current.dataBind();
        }
    };
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: "col-lg-8 control-section" },
            React.createElement("div", { className: "blockeditor-paste" },
                React.createElement("div", { id: 'paste-blockeditor' }),
                React.createElement(ej2_react_blockeditor_1.BlockEditorComponent, { ref: blockEditorRef, id: 'block-editor', height: "600px", blocks: data["blockDataPaste"], pasteCleanupSettings: pasteSettings }))),
        React.createElement("div", { className: "col-lg-4 property-section" },
            React.createElement("div", { id: "property", title: "Properties", className: "property-panel-table" },
                React.createElement("table", { id: "property", title: "Properties" },
                    React.createElement("tbody", null,
                        React.createElement("tr", null,
                            React.createElement("td", null,
                                React.createElement("div", null, "Format Option")),
                            React.createElement("td", null,
                                React.createElement("div", null,
                                    React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { id: 'formatOption', ref: formatOptionRef, dataSource: formatData, change: formatChange, value: value, fields: fields, popupHeight: height })))),
                        React.createElement("tr", null,
                            React.createElement("td", null,
                                React.createElement("div", null, "Denied Tags")),
                            React.createElement("td", null,
                                React.createElement("div", null,
                                    React.createElement(ej2_react_inputs_1.TextBoxComponent, { ref: deniedTagsRef, cssClass: "e-input", placeholder: "'img[!href]', 'h1'", blur: deniedTagChange })))))))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null,
                "This sample demonstrates the Block Editor ",
                React.createElement("code", null, "pasteCleanupSettings"),
                " property allows you to define various options to control how content is pasted into the editor.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null, "The following settings are available to cleanup the content in pasteCleanup settings property:"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    "Select any option in ",
                    React.createElement("code", null, "Format Option"),
                    " drop down list for the paste content."),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        "Select the ",
                        React.createElement("code", null, "Plain Text"),
                        " option to paste the content as plain text."),
                    React.createElement("li", null,
                        "Select the ",
                        React.createElement("code", null, "Keep Format"),
                        " option to keep the same format in the copied content.")),
                React.createElement("li", null,
                    "Fill the ",
                    React.createElement("code", null, "denied tags"),
                    " text box to ignore the tags when pasting HTML content."),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement("code", null, "['a[!href]']"),
                        " - paste the content by filtering anchor tags that don\u2019t have the 'href' attribute."),
                    React.createElement("li", null,
                        React.createElement("code", null, "['a[href, target]']"),
                        " - paste the content by filtering anchor tags that have the 'href' and 'target' attributes"))))));
};
exports.default = PasteSettings;
