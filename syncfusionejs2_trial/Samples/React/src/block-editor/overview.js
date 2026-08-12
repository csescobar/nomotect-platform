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
exports.Overview = void 0;
var React = require("react");
var ej2_react_blockeditor_1 = require("@syncfusion/ej2-react-blockeditor");
require("./overview.css");
var data = require("./blockData.json");
var sample_base_1 = require("../common/sample-base");
var Overview = /** @class */ (function (_super) {
    __extends(Overview, _super);
    function Overview() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.customToolbarItems = [
            'Transform', 'Bold', 'Italic', 'Underline', 'Strikethrough', 'Uppercase', 'Lowercase', 'Subscript', 'Superscript', 'InlineCode', 'Link', 'Color', 'Backgroundcolor'
        ];
        _this.inlineToolbar = {
            items: _this.customToolbarItems,
        };
        _this.imageBlockSettings = {
            saveUrl: 'https://services.syncfusion.com/react/production/api/RichTextEditor/SaveFile',
            path: 'https://services.syncfusion.com/react/production/RichTextEditor/'
        };
        return _this;
    }
    Overview.prototype.render = function () {
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: "control-section overview-blockeditor" },
                React.createElement(ej2_react_blockeditor_1.BlockEditorComponent, { id: 'block-editor', blocks: data["blockDataOverview"], users: data["users"], inlineToolbarSettings: this.inlineToolbar, imageBlockSettings: this.imageBlockSettings })),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null,
                    "This sample demonstrates the features of the ",
                    React.createElement("code", null, "Block Editor"),
                    " component. It showcases various block types, content formatting options, and interactive editing capabilities.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "The ",
                    React.createElement("code", null, "Block Editor"),
                    " is a modern, block-based content editing solution. It offers a powerful and intuitive interface for creating structured documents using discrete, interactive content blocks."),
                React.createElement("p", null, "Key features demonstrated in this sample:"),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        "Multiple block types including ",
                        React.createElement("code", null, "Heading1-4"),
                        ", ",
                        React.createElement("code", null, "Paragraph"),
                        ", ",
                        React.createElement("code", null, "Table"),
                        ", ",
                        React.createElement("code", null, "BulletList"),
                        ", ",
                        React.createElement("code", null, "NumberedList"),
                        ", ",
                        React.createElement("code", null, "Checklist"),
                        ", ",
                        React.createElement("code", null, "Quote"),
                        ", ",
                        React.createElement("code", null, "Callout"),
                        ", ",
                        React.createElement("code", null, "Divider"),
                        ", ",
                        React.createElement("code", null, "Code"),
                        ", ",
                        React.createElement("code", null, "ToggleParagraph"),
                        ", and more."),
                    React.createElement("li", null,
                        "Rich text formatting with styles like ",
                        React.createElement("code", null, "Bold"),
                        ", ",
                        React.createElement("code", null, "Italic"),
                        ", ",
                        React.createElement("code", null, "Underline"),
                        ", ",
                        React.createElement("code", null, "Strikethrough"),
                        ", ",
                        React.createElement("code", null, "Uppercase"),
                        ", and more."),
                    React.createElement("li", null,
                        "Interactive ",
                        React.createElement("code", null, "Slash (\"/\") commands"),
                        " for quick block insertion and transformation."),
                    React.createElement("li", null,
                        "Hierarchical organization with expandable ",
                        React.createElement("code", null, "Toggle Blocks"),
                        "."),
                    React.createElement("li", null,
                        "Support for inline special content such as ",
                        React.createElement("code", null, "Links"),
                        " and ",
                        React.createElement("code", null, "Labels"),
                        "."),
                    React.createElement("li", null,
                        "Interactive ",
                        React.createElement("code", null, "label (\"$\") options"),
                        " for quick insertion of the labels."),
                    React.createElement("li", null,
                        "Block manipulation with ",
                        React.createElement("code", null, "Action menu"),
                        ", allowing move, delete, and duplicate operations."),
                    React.createElement("li", null, "Keyboard shortcuts for fast, accessible editing workflows.")))));
    };
    return Overview;
}(sample_base_1.SampleBase));
exports.Overview = Overview;
