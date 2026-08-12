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
exports.Preview = void 0;
/**
 * Rich Text Editor markdown preview sample
 */
var ej2_base_1 = require("@syncfusion/ej2-base");
var ej2_react_richtexteditor_1 = require("@syncfusion/ej2-react-richtexteditor");
var ej2_react_layouts_1 = require("@syncfusion/ej2-react-layouts");
var ej2_markdown_converter_1 = require("@syncfusion/ej2-markdown-converter");
var React = require("react");
var sample_base_1 = require("../common/sample-base");
require("./overview.css");
var Preview = /** @class */ (function (_super) {
    __extends(Preview, _super);
    function Preview() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // set the value to Rich Text Editor
        _this.value = "## Welcome to the Syncfusion\u00AE EJ2 Markdown Editor\n\nThe **Syncfusion Rich Text Editor** in **Markdown** mode delivers a lightweight, distraction-free editing experience with full Markdown syntax support \u2014 powered natively by Syncfusion\u2019s own **MarkdownConverter**.\n\nWrite beautiful documents faster using simple, readable Markdown syntax and see the formatted result instantly with live preview.\n\n### Why Choose Markdown Mode?\n\n- Clean, plain-text syntax that is easy to read and write \u2014 even in raw form\n- Input or modify text, apply formatting, and view the Markdown preview side-by-side using the splitter control.\n- Toolbar + keyboard shortcuts for rapid formatting\n- Easy to convert content to HTML or other formats\n- Ideal for documentation, notes, and developer-focused content\n- Reduces clutter and keeps the writing experience distraction-free\n\n### Supported Markdown Features in Action\n\n# Headings\n## Markdown Editor Demo\n### Create Clean, Structured Content\n#### Organize Sections Effortlessly\n##### Add Subheadings for Clarity\n###### Provide Notes or Additional Info\n\nHeadings help structure your content, making it easier to read, scan, and organize information within the Markdown editor.\n\n#### Text Formatting\n**Bold text highlights important information.**\n\n*Markdown makes writing simple and clean.*\n\n**_You can also combine bold and italic for emphasis._**\n\n~~Use strikethrough to indicate removed or outdated content.~~\n\n`Inline code is perfect for short code snippets like commands or variables.`\n\n### Table\nCreate simple tables to organize information clearly and quickly.\n\n| Feature | Description |\n|---------|-------------|\n| Markdown   | Lightweight, easy-to-read formatting syntax |\n| Preview    | Shows formatted output side-by-side |\n\n#### Lists\n\n**Unordered**\n- Explore the editor features\n- Add content with simple syntax\n    - Insert nested bullet points\n    - Organize topics hierarchically\n- Keep your notes clear and readable\n\n**Ordered**\n1. Start writing your content\n2. Apply Markdown formatting\n    1. Add sub-steps for detailed tasks\n    2. Improve clarity with structure\n3. Review and finalize your document\n\n**Task List**\n- [x] Completed task\n- [ ] Write documentation\n- [ ] Release new version\n\n#### Blockquotes\n\n> Markdown makes writing on the web beautiful and readable.\n>\n> \u2014 John Gruber, Creator of Markdown\n\n#### Code Blocks\nInline code: Use `npm install @syncfusion/ej2-richtexteditor`";
        // Rich Text Editor items list
        _this.items = ['Bold', 'Italic', 'StrikeThrough', '|', 'Formats', 'Blockquote', 'OrderedList',
            'UnorderedList', '|', 'CreateLink', 'Image', 'CreateTable', '|', 'Undo', 'Redo'];
        _this.placeholder = 'Enter your text here...';
        _this.formatter = new ej2_react_richtexteditor_1.MarkdownFormatter({ listTags: { 'OL': '1., 2., 3.' } });
        //Rich Text Editor ToolbarSettings
        _this.toolbarSettings = {
            items: _this.items,
            type: ej2_react_richtexteditor_1.ToolbarType.Expand,
            enableFloating: false
        };
        return _this;
    }
    Preview.prototype.onCreate = function () {
        this.textArea = this.rteObj.contentModule.getEditPanel();
        this.srcArea = document.querySelector('.source-code');
        this.updateValue();
    };
    Preview.prototype.onChange = function () {
        this.updateValue();
    };
    Preview.prototype.onResizing = function () {
        this.rteObj.refreshUI();
    };
    Preview.prototype.updateValue = function () {
        this.srcArea.innerHTML = ej2_markdown_converter_1.MarkdownConverter.toHtml(this.rteObj.contentModule.getEditPanel().value, { lineBreak: true });
    };
    Preview.prototype.updateOrientation = function () {
        if (ej2_base_1.Browser.isDevice) {
            this.splitterInstance.orientation = 'Vertical';
            document.body.querySelector('.heading').style.width = 'auto';
        }
    };
    Preview.prototype.content1 = function () {
        var _this = this;
        return (React.createElement("div", { className: "content" },
            React.createElement(ej2_react_richtexteditor_1.RichTextEditorComponent, { id: 'defaultRTE', ref: function (richtexteditor) { _this.rteObj = richtexteditor; }, editorMode: 'Markdown', toolbarSettings: this.toolbarSettings, height: '447px', formatter: this.formatter, saveInterval: 1, created: this.onCreate.bind(this), change: this.onChange.bind(this), actionComplete: this.updateValue.bind(this), value: this.value },
                React.createElement(ej2_react_richtexteditor_1.Inject, { services: [ej2_react_richtexteditor_1.MarkdownEditor, ej2_react_richtexteditor_1.Toolbar, ej2_react_richtexteditor_1.Image, ej2_react_richtexteditor_1.Link, ej2_react_richtexteditor_1.HtmlEditor, ej2_react_richtexteditor_1.Table] }))));
    };
    ;
    Preview.prototype.content2 = function () {
        return (React.createElement("div", { className: "heading right" },
            React.createElement("h6", { className: "title" },
                React.createElement("b", null, "Markdown Preview")),
            React.createElement("div", { className: "splitter-default-content source-code pane2", style: { padding: "20px" } })));
    };
    ;
    Preview.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section markdown-preview', id: "rtePreview" },
                React.createElement("div", { className: "content-wrapper" },
                    React.createElement(ej2_react_layouts_1.SplitterComponent, { id: 'splitter-rte-markdown-preview', ref: function (splitter) { return (_this.splitterInstance = splitter); }, height: '450px', width: '100%', resizing: this.onResizing.bind(this), created: this.updateOrientation.bind(this) },
                        React.createElement(ej2_react_layouts_1.PanesDirective, null,
                            React.createElement(ej2_react_layouts_1.PaneDirective, { resizable: true, size: '50%', min: "40%", cssClass: 'pane1', content: this.content1.bind(this) }),
                            React.createElement(ej2_react_layouts_1.PaneDirective, { min: "40%", cssClass: 'pane2', content: this.content2.bind(this) }))))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This example illustrates how to preview Markdown changes within the Rich Text Editor. You can input or modify the display text, apply formatting, and observe the Markdown preview alongside. This capability is enabled by utilizing the splitter component, which effectively separates the Rich Text Editor from the preview section.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "The Rich Text Editor provides the ability to instantly ",
                    React.createElement("code", null, "preview"),
                    " Markdown changes through the preview functionality. To achieve this, the sample uses Syncfusion's Markdown Converter to convert Markdown into HTML content."))));
    };
    return Preview;
}(sample_base_1.SampleBase));
exports.Preview = Preview;
