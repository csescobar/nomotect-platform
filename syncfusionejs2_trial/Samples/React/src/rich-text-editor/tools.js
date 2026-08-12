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
var ej2_base_1 = require("@syncfusion/ej2-base");
var ej2_react_richtexteditor_1 = require("@syncfusion/ej2-react-richtexteditor");
var ej2_react_richtexteditor_2 = require("@syncfusion/ej2-react-richtexteditor");
var ej2_base_2 = require("@syncfusion/ej2-base");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var sample_base_1 = require("../common/sample-base");
var CodeMirror = require("codemirror");
require("codemirror/mode/javascript/javascript");
require("codemirror/mode/css/css.js");
require("codemirror/mode/htmlmixed/htmlmixed.js");
require("./tools.css");
var Overview = /** @class */ (function (_super) {
    __extends(Overview, _super);
    function Overview() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hostUrl = 'https://services.syncfusion.com/react/production/';
        // Rich Text Editor items list
        _this.items = [
            'Undo', 'Redo', '|', 'ImportWord', 'ExportWord', 'ExportPdf', '|',
            'Bold', 'Italic', 'Underline', 'StrikeThrough', 'InlineCode', '|', 'CreateLink', 'Image', 'CreateTable', 'CodeBlock',
            'HorizontalLine', 'Blockquote', '|', 'LineHeight', 'Formats', 'Alignments', '|', 'BulletFormatList', 'NumberFormatList', 'Checklist', '|', 'Outdent', 'Indent', '|',
            'FontColor', 'BackgroundColor', 'FontName', 'FontSize', '|', 'LowerCase', 'UpperCase', '|', 'SuperScript', 'SubScript', '|',
            'EmojiPicker', 'FileManager', 'Video', 'Audio', '|', 'FormatPainter', 'ClearFormat',
            '|', 'Print', 'FullScreen', '|', 'SourceCode'
        ];
        _this.rteValue = '<h2>Welcome to the React Rich Text Editor</h2> <p> The Rich Text Editor, a WYSIWYG (what you see is what you get) editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here. </p> <h3>Do you know the key features of the editor?</h3> <ul> <li> Basic features include headings, block quotes, numbered lists, bullet lists, and support to insert images, tables, audio, and video. </li> <li> Inline styles include <b>bold</b>, <em>italic</em>, <span style="text-decoration: underline">underline</span>, <span style="text-decoration: line-through">strikethrough</span>, <a class="e-rte-anchor" href="https://ej2.syncfusion.com/demos/#/material/rich-text-editor/tools.html" title="https://ej2.syncfusion.com/demos/#/material/rich-text-editor/tools.html" aria-label="Open in new window">hyperlinks</a>,<code>InlineCode</code>, 😀 and more. </li> <li> The toolbar has multi-row, expandable, and scrollable modes. The Editor supports an inline toolbar, a floating toolbar, and custom toolbar items. </li> <li> Integration with Syncfusion<sup>®</sup> Mention control lets users tag other users. To learn more, check out the <a class="e-rte-anchor" href="https://ej2.syncfusion.com/documentation/rich-text-editor/mention-integration" title="Mention Documentation" aria-label="Open in new window">documentation</a> and <a class="e-rte-anchor" href="https://ej2.syncfusion.com/demos/#/material/rich-text-editor/mention-integration.html" title="Mention Demos" aria-label="Open in new window">demos</a>. </li> <li><b>Paste from MS Word</b> - helps to reduce the effort while converting the Microsoft Word content to HTML format with format and styles. To learn more, check out the documentation <a class="e-rte-anchor" href="https://ej2.syncfusion.com/documentation/rich-text-editor/paste-cleanup" title="Paste from MS Word Documentation" aria-label="Open in new window">here</a>. </li> <li> Other features: placeholder text, character count, form validation, enter key configuration, resizable editor, IFrame rendering, tooltip, source code view, RTL mode, persistence, HTML Sanitizer, autosave, and <a class="e-rte-anchor" href="https://ej2.syncfusion.com/documentation/api/rich-text-editor/" title="Rich Text Editor API" aria-label="Open in new window">more</a>. </li> </ul> <h3>Auto Formatting – Write Faster, Format Smarter</h3> <p> Boost your productivity with Auto Formatting, a powerful feature that lets you style content instantly using simple, familiar Markdown-style shortcuts. No need to reach for the toolbar — just type and watch your content transform in real time. </p> <h4>Effortless Formatting Shortcuts</h4> <table class="e-rte-table"> <thead> <tr> <th>Action</th> <th>Shortcut</th> </tr> </thead> <tbody> <tr> <td>Bulleted List</td> <td> Start a line with <code>*</code> or <code>-</code> followed by a space </td> </tr> <tr> <td>Numbered List</td> <td> Start a line with <code>1.</code> or <code>i.</code> followed by a space </td> </tr> <tr> <td>Checklist / To-do</td> <td> Start a line with <code>[ ]</code> or <code>[x]</code> followed by a space </td> </tr> <tr> <td>Headings (H1 to H6)</td> <td> Use <code>#</code>, <code>##</code>, <code>###</code>, <code>####</code>, <code>#####</code>, or <code>######</code> followed by a space </td> </tr> <tr> <td>Block Quote</td> <td> Start a line with <code>></code> followed by a space </td> </tr> <tr> <td>Code Block</td> <td> Start a line with <code>```</code> followed by a space </td> </tr> <tr> <td>Horizontal Line</td> <td> Start a line with <code>---</code> followed by a space </td> </tr> <tr> <td>Bold Text</td> <td>Type <code>**text**</code> or <code>__text__</code></td> </tr> <tr> <td>Italic Text</td> <td>Type <code>*text*</code> or <code>_text_</code></td> </tr> <tr> <td>Inline Code</td> <td>Type <code>`text`</code></td> </tr> <tr> <td>Strikethrough</td> <td>Type <code>~~text~~</code></td> </tr> </tbody> </table> <h3>Elevating Your Content with Images</h3> <p> Images can be added to the editor by pasting or dragging into the editing area, using the toolbar to insert one as a URL, or uploading directly from the File Browser. Easily manage your images on the server by configuring the <a class="e-rte-anchor" href="https://ej2.syncfusion.com/documentation/api/rich-text-editor/#insertimagesettings" title="Insert Image Settings API" aria-label="Open in new window">insertImageSettings</a> to upload, save, or remove them. </p> <p> The Editor can integrate with the Syncfusion<sup>®</sup> Image Editor to crop, rotate, annotate, and apply filters to images. Check out the demos <a class="e-rte-anchor" href="https://ej2.syncfusion.com/demos/#/material/rich-text-editor/image-editor-integration.html" title="Image Editor Demo" aria-label="Open in new window">here</a>. </p> <p><img alt="Sky with sun" src="https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Overview.png" style="width: 440px" class="e-rte-image e-imginline"/></p> <blockquote> <p><em>Easily access Audio, Image, Link, Video, and Table operations through the quick toolbar by right-clicking on the corresponding element with your mouse.</em></p> </blockquote>';
        _this.emailData = [
            { name: "Selma Rose", initial: 'SR', email: "selma@gmail.com", color: '#FAFDFF', bgColor: '#01579B' },
            { name: "Maria", initial: 'MA', email: "maria@gmail.com", color: '#004378', bgColor: '#ADDBFF' },
            { name: "Russo Kay", initial: 'RK', email: "russo@gmail.com", color: '#F9DEDC', bgColor: '#8C1D18' },
            { name: "Robert", initial: 'RO', email: "robert@gmail.com", color: '#FFD6F7', bgColor: '#37003A' },
            { name: "Camden Kate", initial: 'CK', email: "camden@gmail.com", color: '#FFFFFF', bgColor: '#464ECF' },
            { name: "Garth", initial: 'GA', email: "garth@gmail.com", color: '#FFFFFF', bgColor: '#008861' },
            { name: "Andrew James", initial: 'AJ', email: "james@gmail.com", color: '#FFFFFF', bgColor: '#53CA17' },
            { name: "Olivia", initial: 'OL', email: "olivia@gmail.com", color: '#FFFFFF', bgColor: '#8C1D18' },
            { name: "Sophia", initial: 'SO', email: "sophia@gmail.com", color: '#000000', bgColor: '#D0BCFF' },
            { name: "Margaret", initial: 'MA', email: "margaret@gmail.com", color: '#000000', bgColor: '#F2B8B5' },
            { name: "Ursula Ann", initial: 'UA', email: "ursula@gmail.com", color: '#000000', bgColor: '#47ACFB' },
            { name: "Laura Grace", initial: 'LG', email: "laura@gmail.com", color: '#000000', bgColor: '#FFE088' },
            { name: "Albert", initial: 'AL', email: "albert@gmail.com", color: '#FFFFFF', bgColor: '#00335B' },
            { name: "William", initial: 'WA', email: "william@gmail.com", color: '#FFFFFF', bgColor: '#163E02' }
        ];
        _this.fileManagerSettings = {
            enable: true,
            ajaxSettings: {
                url: _this.hostUrl + 'api/RichTextEditor/FileOperations',
                getImageUrl: _this.hostUrl + 'api/RichTextEditor/GetImage',
                uploadUrl: _this.hostUrl + 'api/RichTextEditor/Upload',
                downloadUrl: _this.hostUrl + 'api/RichTextEditor/Download'
            }
        };
        _this.quickToolbarSettings = {
            table: ['Tableheader', 'TableRemove', '|', 'TableRows', 'TableColumns', 'TableCell', '|', 'TableEditProperties', 'TableCellProperties', 'Styles', 'BackgroundColor', 'Alignments', 'TableCellVerticalAlign'],
            text: ['Formats', '|', 'Bold', 'Italic', 'Fontcolor', 'BackgroundColor', '|', 'CreateLink', 'Image', 'CreateTable', 'Blockquote', '|', 'Unorderedlist', 'Orderedlist', 'Indent', 'Outdent'],
            showOnRightClick: true,
        };
        _this.insertImageSettings = {
            saveUrl: _this.hostUrl + 'api/RichTextEditor/SaveFile',
            removeUrl: _this.hostUrl + 'api/RichTextEditor/DeleteFile',
            path: _this.hostUrl + 'RichTextEditor/'
        };
        //Rich Text Editor ToolbarSettings
        _this.toolbarSettings = {
            items: _this.items
        };
        _this.slashMenuSettings = {
            enable: true,
            items: ['Paragraph', 'Heading 1', 'Heading 2', 'Heading 3', 'Heading 4', 'OrderedList', 'UnorderedList',
                'CodeBlock', 'Blockquote', 'Link', 'Image', 'Video', 'Audio', 'Table', 'Emojipicker',
            ]
        };
        _this.importWord = {
            serviceUrl: _this.hostUrl + 'api/RichTextEditor/ImportFromWord',
        };
        _this.exportWord = {
            serviceUrl: _this.hostUrl + 'api/RichTextEditor/ExportToDocx',
            fileName: 'RichTextEditor.docx',
            stylesheet: "\n        .e-rte-content {\n            font-size: 1em;\n            font-weight: 400;\n            margin: 0;\n        }\n    "
        };
        _this.exportPdf = {
            serviceUrl: _this.hostUrl + 'api/RichTextEditor/ExportToPdf',
            fileName: 'RichTextEditor.pdf',
            stylesheet: "\n        .e-rte-content{\n            font-size: 1em;\n            font-weight: 400;\n            margin: 0;\n        }\n    "
        };
        return _this;
    }
    Overview.prototype.mirrorConversion = function (e) {
        var id = this.editor.getID() + 'mirror-view';
        var rteContainer = this.editor.element.querySelector('.e-rte-container');
        var mirrorView = this.editor.element.querySelector('#' + id);
        if (e.targetItem === 'Preview') {
            this.editor.value = this.codeMirror.getValue();
            this.editor.dataBind();
            rteContainer.classList.remove('e-rte-code-mirror-enabled');
            this.editor.focusIn();
        }
        else {
            rteContainer.classList.add('e-rte-code-mirror-enabled');
            rteContainer.classList.remove('e-source-code-enabled');
            var editorVlaue = this.editor.element.querySelector('.e-rte-srctextarea').value;
            if (!mirrorView) {
                mirrorView = (0, ej2_base_2.createElement)('div', { className: 'rte-code-mirror', id: id, styles: 'display: none;' });
                rteContainer.appendChild(mirrorView);
                this.renderCodeMirror(mirrorView, editorVlaue === null ? '' : editorVlaue);
            }
            else {
                this.codeMirror.setValue(editorVlaue);
            }
            this.codeMirror.focus();
        }
    };
    Overview.prototype.renderCodeMirror = function (mirrorView, content) {
        this.codeMirror = CodeMirror(mirrorView, {
            value: content,
            lineNumbers: true,
            mode: 'text/html',
            lineWrapping: true,
        });
    };
    Overview.prototype.actionCompleteHandler = function (e) {
        if (e.targetItem && (e.targetItem === 'SourceCode' || e.targetItem === 'Preview')) {
            this.mirrorConversion(e);
        }
    };
    Overview.prototype.actionBeginHandler = function (e) {
        if (e.requestType === 'EnterAction' && this.mention && this.mention.element.classList.contains('e-popup-open')) {
            e.cancel = true;
        }
        if (e.requestType === 'Maximize' || e.requestType === 'Minimize') {
            this.handleFullScreen(e);
        }
    };
    Overview.prototype.handleFullScreen = function (e) {
        var sbCntEle = document.querySelector('.sb-content.e-view');
        var sbHdrEle = document.querySelector('.sb-header.e-view');
        var sideBarElem = document.body.querySelector('#left-sidebar');
        var sideBar = (0, ej2_base_1.getComponent)(sideBarElem, 'sidebar');
        var leftBar;
        var transformElement;
        if (ej2_base_1.Browser.isDevice) {
            leftBar = document.querySelector('#right-sidebar');
            transformElement = document.querySelector('.sample-browser.e-view.e-content-animation');
        }
        else {
            leftBar = document.querySelector('#left-sidebar');
            transformElement = document.querySelector('#right-pane');
        }
        if (e.targetItem === 'Maximize') {
            if (ej2_base_1.Browser.isDevice && ej2_base_1.Browser.isIos) {
                (0, ej2_base_1.addClass)([sbCntEle, sbHdrEle], ['hide-header']);
            }
            sideBar.hide();
            if (!ej2_base_1.Browser.isDevice) {
                transformElement.style.marginLeft = '0px';
            }
            transformElement.style.transform = 'inherit';
        }
        else if (e.targetItem === 'Minimize') {
            if (ej2_base_1.Browser.isDevice && ej2_base_1.Browser.isIos) {
                (0, ej2_base_1.removeClass)([sbCntEle, sbHdrEle], ['hide-header']);
            }
            sideBar.show();
            if (!ej2_base_1.Browser.isDevice) {
                (0, ej2_base_1.addClass)([leftBar], ['e-open']);
                transformElement.style.marginLeft = leftBar.offsetWidth + 'px';
            }
            transformElement.style.transform = 'translateX(0px)';
        }
    };
    Overview.prototype.itemTemplate = function (data) {
        return (React.createElement("div", { className: "editor-mention-item-template" },
            React.createElement("div", { className: "em-header" },
                React.createElement("div", { className: "em-avatar", style: { backgroundColor: data.bgColor, color: data.color } },
                    React.createElement("div", { className: "em-initial" }, data.initial))),
            React.createElement("div", { className: "em-content" },
                React.createElement("div", { className: "em-name" }, data.name),
                React.createElement("div", { className: "em-email" }, data.email))));
    };
    Overview.prototype.displayTemplate = function (data) {
        return (React.createElement("a", { href: "mailto:" + data.email, title: data.email },
            "@",
            data.name));
    };
    Overview.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section', id: "rteTools" },
                React.createElement("div", { className: 'rte-control-section' },
                    React.createElement(ej2_react_richtexteditor_1.RichTextEditorComponent, { id: "toolsRTE", ref: function (richtexteditor) { _this.editor = richtexteditor; }, value: this.rteValue, showCharCount: true, actionBegin: this.actionBeginHandler.bind(this), actionComplete: this.actionCompleteHandler.bind(this), toolbarSettings: this.toolbarSettings, fileManagerSettings: this.fileManagerSettings, quickToolbarSettings: this.quickToolbarSettings, enableTabKey: true, insertImageSettings: this.insertImageSettings, enableXhtml: true, placeholder: 'Type something or use @ to tag a user...', importWord: this.importWord, exportPdf: this.exportPdf, exportWord: this.exportWord, slashMenuSettings: this.slashMenuSettings },
                        React.createElement(ej2_react_richtexteditor_1.Inject, { services: [ej2_react_richtexteditor_1.Toolbar, ej2_react_richtexteditor_1.Image, ej2_react_richtexteditor_1.Link, ej2_react_richtexteditor_1.HtmlEditor, ej2_react_richtexteditor_1.Count, ej2_react_richtexteditor_1.QuickToolbar, ej2_react_richtexteditor_1.Table, ej2_react_richtexteditor_2.FileManager, ej2_react_richtexteditor_1.EmojiPicker, ej2_react_richtexteditor_1.Video, ej2_react_richtexteditor_1.Audio, ej2_react_richtexteditor_1.FormatPainter, ej2_react_richtexteditor_1.PasteCleanup, ej2_react_richtexteditor_1.SlashMenu, ej2_react_richtexteditor_1.ImportExport, ej2_react_richtexteditor_1.CodeBlock, ej2_react_richtexteditor_1.ClipBoardCleanup, ej2_react_richtexteditor_1.AutoFormat] })),
                    React.createElement(ej2_react_dropdowns_1.MentionComponent, { id: 'editorMention', ref: function (mention) { _this.mention = mention; }, dataSource: this.emailData, displayTemplate: this.displayTemplate, itemTemplate: this.itemTemplate, target: "#toolsRTE_rte-edit-view", fields: { text: 'name' }, popupWidth: '250px', popupHeight: '200px', sortOrder: 'Ascending', allowSpaces: true, suffixText: '&nbsp;' }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates the full features of Rich Text Editor that includes all the tools and functionalities.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "This sample used ",
                    React.createElement("code", null, "Code mirror"),
                    " plugins helps to highlight the HTML content and when changes happens in code view, the same has been reflected in preview mode. "),
                React.createElement("p", null,
                    "The quick toolbar provides a convenient way to customize Image, Video, Audio, Table, and Link elements. Simply right-click on the desired element, utilizing the ",
                    React.createElement("code", null, "showOnRightClick"),
                    " property, and the quick toolbar will appear, providing an easy way for customization."),
                React.createElement("p", null, "The editor's toolbar includes tools for formatting content. The toolbar consists of:"),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement("code", null, "Lists"),
                        " - NumberFormat list and BulletFormat list types."),
                    React.createElement("li", null,
                        React.createElement("code", null, "Links"),
                        " - A hyperlink can be inserted into the this.editor for quick access to related information."),
                    React.createElement("li", null,
                        React.createElement("code", null, "Image"),
                        " - Inserts and manages images."),
                    React.createElement("li", null,
                        React.createElement("code", null, "Table"),
                        " - Inserts and manages Tables."),
                    React.createElement("li", null,
                        React.createElement("code", null, "Alignment"),
                        " - Aligns the content with left, center, and right margins."),
                    React.createElement("li", null,
                        React.createElement("code", null, "Line Height"),
                        " - Adjusts the vertical spacing between lines of text."),
                    React.createElement("li", null,
                        React.createElement("code", null, "Undo/Redo"),
                        " - Allows undo/redo operations."),
                    React.createElement("li", null,
                        React.createElement("code", null, "Indent/ Outdent"),
                        " - Increases/decreases the indent level of the content."),
                    React.createElement("li", null,
                        React.createElement("code", null, "Font"),
                        " - Able to do styling on text like font family, size, fore color and background color."),
                    React.createElement("li", null,
                        React.createElement("code", null, "Lower / Upper case"),
                        " \u2013 Changes the casing of the selected text."),
                    React.createElement("li", null,
                        React.createElement("code", null, "Subscript / Superscript"),
                        " - Makes the selected text as subscript (lower)/superscript(upper)."),
                    React.createElement("li", null,
                        React.createElement("code", null, "FullScreen"),
                        " - Stretches the this.editor to the maximum width and height of the browser window."),
                    React.createElement("li", null,
                        React.createElement("code", null, "Format"),
                        " \u2013 Formats the sentence in different ways such as heading level, quotation, and code snippet"),
                    React.createElement("li", null,
                        React.createElement("code", null, "Styles"),
                        " \u2013 Allows you to apply inline styles to the selected content like bold, italic, and more."),
                    React.createElement("li", null,
                        React.createElement("code", null, "Insert Code"),
                        " - Allows you to apply code format to the selected parent nodes. In the above sample, the style for the code format ('pre' tag) is applied by adding the background color."),
                    React.createElement("li", null,
                        React.createElement("code", null, "Insert Emoticon"),
                        " - Inserts the emoticon to the this.editor"),
                    React.createElement("li", null,
                        React.createElement("code", null, "Audio"),
                        " - Inserts and manages audios."),
                    React.createElement("li", null,
                        React.createElement("code", null, "Video"),
                        " - Inserts and manages videos."),
                    React.createElement("li", null,
                        React.createElement("code", null, "Format Painter"),
                        " - The Format Painter feature allows you to copy the formats and apply them to content without formatting thus saving time to reformat the content."),
                    React.createElement("li", null,
                        React.createElement("code", null, "Slash Menu"),
                        " - The Slash Menu feature lets users apply formats, open dialogs by typing \"/\" in the editor."),
                    React.createElement("li", null,
                        React.createElement("code", null, "Import / Export"),
                        " - The Import/Export feature enables users to import content from Word documents into the editor and export the editor's content into Word and PDF files."),
                    React.createElement("li", null,
                        React.createElement("code", null, "Code Block"),
                        " - The Code Block feature allows you to insert and display blocks of code with preserved formatting and syntax highlighting, making it ideal for sharing code snippets clearly and accurately."),
                    React.createElement("li", null,
                        React.createElement("code", null, "Horizontal Line"),
                        " - A horizontal line can be inserted into the editor to visually separate sections of content."),
                    React.createElement("li", null,
                        React.createElement("code", null, "Inline Code"),
                        " - Formats selected text as inline code, highlighting code snippets within the text."),
                    React.createElement("li", null,
                        React.createElement("code", null, "Checklist"),
                        " - Creates interactive lists with checkable items that users can mark as complete or incomplete.")),
                React.createElement("p", null,
                    React.createElement("b", null, "Injecting Module")),
                React.createElement("p", null,
                    "Rich Text Editor component features are segregated into individual feature-wise modules. To use Rich Text Editor feature, we need to inject ",
                    React.createElement("code", null, "Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar, Table, EmojiPicker, Video, Audio, FormatPainter, PasteCleanup, SlashMenu, ImportExport, CodeBlock"),
                    " modules into the services."),
                React.createElement("blockquote", null,
                    React.createElement("p", null,
                        "Looking for the full React Rich Text Editor component overview, features, pricing, and documentation? Visit the ",
                        React.createElement("a", { href: "https://www.syncfusion.com/react-components/react-rich-text-editor", target: "_blank", rel: "noopener" }, "React Rich Text Editor"),
                        " page.")))));
    };
    return Overview;
}(sample_base_1.SampleBase));
exports.Overview = Overview;
