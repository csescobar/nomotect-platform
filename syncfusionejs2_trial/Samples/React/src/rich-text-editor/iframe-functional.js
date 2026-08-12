"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Rich Text Editor Iframe sample
 */
var React = require("react");
var ej2_react_richtexteditor_1 = require("@syncfusion/ej2-react-richtexteditor");
var ej2_react_richtexteditor_2 = require("@syncfusion/ej2-react-richtexteditor");
var sample_base_1 = require("../common/sample-base");
var ej2_base_1 = require("@syncfusion/ej2-base");
require("./iframe.css");
function IFrame() {
    React.useEffect(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var rteObj;
    var hostUrl = 'https://services.syncfusion.com/react/production/';
    var iframeSetting = {
        enable: true
    };
    // Rich Text Editor items list
    var items = ['Undo', 'Redo', '|', 'ImportWord', 'ExportWord', 'ExportPdf', '|',
        'Bold', 'Italic', 'Underline', 'StrikeThrough', 'InlineCode', '|', 'CreateLink', 'Image', 'CreateTable', 'CodeBlock',
        'HorizontalLine', 'Blockquote', '|', 'LineHeight', 'Formats', 'Alignments', '|', 'BulletFormatList', 'NumberFormatList', 'Checklist', '|', 'Outdent', 'Indent', '|',
        'FontColor', 'BackgroundColor', 'FontName', 'FontSize', '|', 'LowerCase', 'UpperCase', '|', 'SuperScript', 'SubScript', '|',
        'EmojiPicker', 'FileManager', 'Video', 'Audio', '|', 'FormatPainter', 'ClearFormat',
        '|', 'Print', 'FullScreen', '|', 'SourceCode'];
    var rteValue = '<h2>Welcome to the React Rich Text Editor</h2> <p> The Rich Text Editor, a WYSIWYG (what you see is what you get) editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here. </p> <h3>Do you know the key features of the editor?</h3> <ul> <li> Basic features include headings, block quotes, numbered lists, bullet lists, and support to insert images, tables, audio, and video. </li> <li> Inline styles include <b>bold</b>, <em>italic</em>, <span style="text-decoration: underline">underline</span>, <span style="text-decoration: line-through">strikethrough</span>, <a class="e-rte-anchor" href="https://ej2.syncfusion.com/demos/#/material/rich-text-editor/tools.html" title="https://ej2.syncfusion.com/demos/#/material/rich-text-editor/tools.html" aria-label="Open in new window">hyperlinks</a>,<code>InlineCode</code>, 😀 and more. </li> <li> The toolbar has multi-row, expandable, and scrollable modes. The Editor supports an inline toolbar, a floating toolbar, and custom toolbar items. </li> <li> Integration with Syncfusion<sup>®</sup> Mention control lets users tag other users. To learn more, check out the <a class="e-rte-anchor" href="https://ej2.syncfusion.com/documentation/rich-text-editor/mention-integration" title="Mention Documentation" aria-label="Open in new window">documentation</a> and <a class="e-rte-anchor" href="https://ej2.syncfusion.com/demos/#/material/rich-text-editor/mention-integration.html" title="Mention Demos" aria-label="Open in new window">demos</a>. </li> <li><b>Paste from MS Word</b> - helps to reduce the effort while converting the Microsoft Word content to HTML format with format and styles. To learn more, check out the documentation <a class="e-rte-anchor" href="https://ej2.syncfusion.com/documentation/rich-text-editor/paste-cleanup" title="Paste from MS Word Documentation" aria-label="Open in new window">here</a>. </li> <li> Other features: placeholder text, character count, form validation, enter key configuration, resizable editor, IFrame rendering, tooltip, source code view, RTL mode, persistence, HTML Sanitizer, autosave, and <a class="e-rte-anchor" href="https://ej2.syncfusion.com/documentation/api/rich-text-editor/" title="Rich Text Editor API" aria-label="Open in new window">more</a>. </li> </ul> <h3>Auto Formatting – Write Faster, Format Smarter</h3> <p> Boost your productivity with Auto Formatting, a powerful feature that lets you style content instantly using simple, familiar Markdown-style shortcuts. No need to reach for the toolbar — just type and watch your content transform in real time. </p> <h4>Effortless Formatting Shortcuts</h4> <table class="e-rte-table"> <thead> <tr> <th>Action</th> <th>Shortcut</th> </tr> </thead> <tbody> <tr> <td>Bulleted List</td> <td> Start a line with <code>*</code> or <code>-</code> followed by a space </td> </tr> <tr> <td>Numbered List</td> <td> Start a line with <code>1.</code> or <code>i.</code> followed by a space </td> </tr> <tr> <td>Checklist / To-do</td> <td> Start a line with <code>[ ]</code> or <code>[x]</code> followed by a space </td> </tr> <tr> <td>Headings (H1 to H6)</td> <td> Use <code>#</code>, <code>##</code>, <code>###</code>, <code>####</code>, <code>#####</code>, or <code>######</code> followed by a space </td> </tr> <tr> <td>Block Quote</td> <td> Start a line with <code>></code> followed by a space </td> </tr> <tr> <td>Code Block</td> <td> Start a line with <code>```</code> followed by a space </td> </tr> <tr> <td>Horizontal Line</td> <td> Start a line with <code>---</code> followed by a space </td> </tr> <tr> <td>Bold Text</td> <td>Type <code>**text**</code> or <code>__text__</code></td> </tr> <tr> <td>Italic Text</td> <td>Type <code>*text*</code> or <code>_text_</code></td> </tr> <tr> <td>Inline Code</td> <td>Type <code>`text`</code></td> </tr> <tr> <td>Strikethrough</td> <td>Type <code>~~text~~</code></td> </tr> </tbody> </table> <h3>Elevating Your Content with Images</h3> <p> Images can be added to the editor by pasting or dragging into the editing area, using the toolbar to insert one as a URL, or uploading directly from the File Browser. Easily manage your images on the server by configuring the <a class="e-rte-anchor" href="https://ej2.syncfusion.com/documentation/api/rich-text-editor/#insertimagesettings" title="Insert Image Settings API" aria-label="Open in new window">insertImageSettings</a> to upload, save, or remove them. </p> <p> The Editor can integrate with the Syncfusion<sup>®</sup> Image Editor to crop, rotate, annotate, and apply filters to images. Check out the demos <a class="e-rte-anchor" href="https://ej2.syncfusion.com/demos/#/material/rich-text-editor/image-editor-integration.html" title="Image Editor Demo" aria-label="Open in new window">here</a>. </p> <p><img alt="Sky with sun" src="https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Overview.png" style="width: 440px" class="e-rte-image e-imginline"/></p> <blockquote> <p><em>Easily access Audio, Image, Link, Video, and Table operations through the quick toolbar by right-clicking on the corresponding element with your mouse.</em></p> </blockquote>';
    var fileManagerSettings = {
        enable: true,
        ajaxSettings: {
            url: hostUrl + 'api/RichTextEditor/FileOperations',
            getImageUrl: hostUrl + 'api/RichTextEditor/GetImage',
            uploadUrl: hostUrl + 'api/RichTextEditor/Upload',
            downloadUrl: hostUrl + 'api/RichTextEditor/Download'
        }
    };
    var quickToolbarSettings = {
        table: ['Tableheader', 'TableRemove', '|', 'TableRows', 'TableColumns', 'TableCell', '|', 'TableEditProperties', 'TableCellProperties', 'Styles', 'BackgroundColor', 'Alignments', 'TableCellVerticalAlign'],
        text: ['Formats', '|', 'Bold', 'Italic', 'Fontcolor', 'BackgroundColor', '|', 'CreateLink', 'Image', 'CreateTable', 'Blockquote', '|', 'Unorderedlist', 'Orderedlist', 'Indent', 'Outdent'],
        showOnRightClick: true,
    };
    //Rich Text Editor ToolbarSettings
    var toolbarSettings = {
        items: items
    };
    var importWord = {
        serviceUrl: 'https://services.syncfusion.com/react/production/api/RichTextEditor/ImportFromWord',
    };
    var exportWord = {
        serviceUrl: 'https://services.syncfusion.com/react/production/api/RichTextEditor/ExportToDocx',
        fileName: 'RichTextEditor.docx',
        stylesheet: "\n            .e-rte-content {\n                font-size: 1em;\n                font-weight: 400;\n                margin: 0;\n            }\n        "
    };
    var exportPdf = {
        serviceUrl: 'https://services.syncfusion.com/react/production/api/RichTextEditor/ExportToPdf',
        fileName: 'RichTextEditor.pdf',
        stylesheet: "\n            .e-rte-content{\n                font-size: 1em;\n                font-weight: 400;\n                margin: 0;\n            }\n        "
    };
    function handleFullScreen(e) {
        var sbCntEle = document.querySelector('.sb-content.e-view');
        var sbHdrEle = document.querySelector('.sb-header.e-view');
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
            (0, ej2_base_1.addClass)([leftBar], ['e-close']);
            (0, ej2_base_1.removeClass)([leftBar], ['e-open']);
            if (!ej2_base_1.Browser.isDevice) {
                transformElement.style.marginLeft = '0px';
            }
            transformElement.style.transform = 'inherit';
        }
        else if (e.targetItem === 'Minimize') {
            if (ej2_base_1.Browser.isDevice && ej2_base_1.Browser.isIos) {
                (0, ej2_base_1.removeClass)([sbCntEle, sbHdrEle], ['hide-header']);
            }
            (0, ej2_base_1.removeClass)([leftBar], ['e-close']);
            if (!ej2_base_1.Browser.isDevice) {
                (0, ej2_base_1.addClass)([leftBar], ['e-open']);
                transformElement.style.marginLeft = leftBar.offsetWidth + 'px';
            }
            transformElement.style.transform = 'translateX(0px)';
        }
    }
    function actionCompleteHandler() {
        setTimeout(function () { rteObj.toolbarModule.refreshToolbarOverflow(); }, 400);
    }
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: 'control-section', id: 'rteIFrame' },
            React.createElement("div", { className: "content-wrapper" },
                React.createElement(ej2_react_richtexteditor_1.RichTextEditorComponent, { id: "iframeRTE", ref: function (richtexteditor) { rteObj = richtexteditor; }, value: rteValue, actionBegin: handleFullScreen.bind(this), actionComplete: actionCompleteHandler.bind(this), toolbarSettings: toolbarSettings, iframeSettings: iframeSetting, fileManagerSettings: fileManagerSettings, quickToolbarSettings: quickToolbarSettings, exportPdf: exportPdf, exportWord: exportWord, importWord: importWord },
                    React.createElement(ej2_react_richtexteditor_1.Inject, { services: [ej2_react_richtexteditor_1.Toolbar, ej2_react_richtexteditor_1.Image, ej2_react_richtexteditor_1.Link, ej2_react_richtexteditor_1.HtmlEditor, ej2_react_richtexteditor_1.Table, ej2_react_richtexteditor_1.QuickToolbar, ej2_react_richtexteditor_2.FileManager, ej2_react_richtexteditor_1.Audio, ej2_react_richtexteditor_1.Video, ej2_react_richtexteditor_1.FormatPainter, ej2_react_richtexteditor_1.EmojiPicker, ej2_react_richtexteditor_1.PasteCleanup, ej2_react_richtexteditor_1.CodeBlock, ej2_react_richtexteditor_1.ImportExport, ej2_react_richtexteditor_1.ClipBoardCleanup, ej2_react_richtexteditor_1.AutoFormat] })))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null,
                "This sample demonstrates the default rendering of the Rich Text Editor in ",
                React.createElement("code", null, "iframe mode"),
                ".")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null, "The Rich Text Editor is WYSIWYG (\"what you see is what you get\") editor that is used to create and edit content, and return valid HTML markup. The editor provides a standard toolbar to format content using its commands. The toolbar contains commands to align the text, insert link, insert image, insert list, undo/redo the operation, HTML view, and more."),
            React.createElement("p", null,
                React.createElement("b", null, "Injecting Module")),
            React.createElement("p", null,
                "Rich Text Editor component features are segregated into individual feature-wise modules. To use Rich Text Editor feature, we need to inject ",
                React.createElement("code", null, "Toolbar, Link, Image, HtmlEditor, QuickToolbar, Table, Audio, Video, FormatPainter, EmojiPicker, PasteCleanup, CodeBlock"),
                " modules into the services."))));
}
exports.default = IFrame;
