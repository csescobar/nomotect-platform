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
exports.PasteSettings = void 0;
var React = require("react");
var ej2_react_blockeditor_1 = require("@syncfusion/ej2-react-blockeditor");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var ej2_react_inputs_1 = require("@syncfusion/ej2-react-inputs");
var sample_base_1 = require("../common/sample-base");
require("./pasteSettings.css");
var data = require("./blockData.json");
var PasteSettings = /** @class */ (function (_super) {
    __extends(PasteSettings, _super);
    function PasteSettings() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.blockEditorRef = React.createRef();
        _this.formatOptionRef = React.createRef();
        _this.deniedTagsRef = React.createRef();
        _this.pasteSettings = {
            deniedTags: ['script', 'iframe'],
            plainText: false,
            keepFormat: true,
            allowedStyles: []
        };
        _this.formatData = [
            { Id: 'plainText', Format: 'Plain Text' },
            { Id: 'keepFormat', Format: 'Keep Format' }
        ];
        _this.fields = { text: 'Format', value: 'Id' };
        _this.height = '200px';
        _this.value = 'keepFormat';
        _this.formatChange = function () {
            var _a, _b;
            if (!_this.blockEditorRef.current) {
                return;
            }
            var newPasteSettings = __assign({}, _this.pasteSettings);
            if (((_a = _this.formatOptionRef.current) === null || _a === void 0 ? void 0 : _a.value) === 'plainText') {
                newPasteSettings.plainText = true;
                newPasteSettings.keepFormat = false;
            }
            else if (((_b = _this.formatOptionRef.current) === null || _b === void 0 ? void 0 : _b.value) === 'keepFormat') {
                newPasteSettings.plainText = false;
                newPasteSettings.keepFormat = true;
            }
            _this.pasteSettings = newPasteSettings;
            _this.blockEditorRef.current.dataBind();
        };
        _this.deniedTagChange = function () {
            var _a;
            if (!((_a = _this.deniedTagsRef.current) === null || _a === void 0 ? void 0 : _a.value))
                return;
            _this.onPasteCleanupSettingsChange(_this.deniedTagsRef.current.value);
        };
        _this.onPasteCleanupSettingsChange = function (value) {
            if (!_this.blockEditorRef.current) {
                return;
            }
            if (value) {
                var arrayValue = value.split(',').map(function (item) { return item.trim().replace(/^['"]|['"]$/g, ''); });
                _this.pasteSettings.deniedTags = arrayValue.filter(function (prop) { return prop !== ''; });
                _this.blockEditorRef.current.dataBind();
            }
        };
        return _this;
    }
    PasteSettings.prototype.render = function () {
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: "col-lg-8 control-section" },
                React.createElement("div", { className: "blockeditor-paste" },
                    React.createElement(ej2_react_blockeditor_1.BlockEditorComponent, { ref: this.blockEditorRef, id: 'block-editor', height: "600px", blocks: data["blockDataPaste"], pasteCleanupSettings: this.pasteSettings }))),
            React.createElement("div", { className: "col-lg-4 property-section" },
                React.createElement("div", { className: "property-panel-header" },
                    React.createElement("div", { id: "property", title: "Properties", className: "property-panel-table" },
                        React.createElement("table", { id: "property", title: "Properties" },
                            React.createElement("tbody", null,
                                React.createElement("tr", null,
                                    React.createElement("td", null,
                                        React.createElement("div", null, "Format Option")),
                                    React.createElement("td", null,
                                        React.createElement("div", null,
                                            React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { id: 'formatOption', ref: this.formatOptionRef, dataSource: this.formatData, change: this.formatChange, value: this.value, fields: this.fields, popupHeight: this.height })))),
                                React.createElement("tr", null,
                                    React.createElement("td", null,
                                        React.createElement("div", null, "Denied Tags")),
                                    React.createElement("td", null,
                                        React.createElement("div", null,
                                            React.createElement(ej2_react_inputs_1.TextBoxComponent, { ref: this.deniedTagsRef, cssClass: "e-input", placeholder: "'img[!href]', 'h1'", blur: this.deniedTagChange }))))))))),
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
    return PasteSettings;
}(sample_base_1.SampleBase));
exports.PasteSettings = PasteSettings;
