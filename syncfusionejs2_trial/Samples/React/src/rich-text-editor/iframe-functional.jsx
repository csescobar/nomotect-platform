/**
 * Rich Text Editor Iframe sample
 */
import * as React from 'react';
import { RichTextEditorComponent, Toolbar, Inject, Image, Table, Link, HtmlEditor, QuickToolbar, Audio, Video, FormatPainter, EmojiPicker, PasteCleanup, CodeBlock, ImportExport, ClipBoardCleanup, AutoFormat } from '@syncfusion/ej2-react-richtexteditor';
import { FileManager } from '@syncfusion/ej2-react-richtexteditor';
import { updateSampleSection } from '../common/sample-base';
import { addClass, removeClass, Browser } from '@syncfusion/ej2-base';
import './iframe.css';
function IFrame() {
    React.useEffect(() => {
        updateSampleSection();
    }, []);
    let rteObj;
    const hostUrl = 'https://services.syncfusion.com/react/production/';
    const iframeSetting = {
        enable: true
    };
    // Rich Text Editor items list
    const items = ['Undo', 'Redo', '|', 'ImportWord', 'ExportWord', 'ExportPdf', '|',
        'Bold', 'Italic', 'Underline', 'StrikeThrough', 'InlineCode', '|', 'CreateLink', 'Image', 'CreateTable', 'CodeBlock',
        'HorizontalLine', 'Blockquote', '|', 'LineHeight', 'Formats', 'Alignments', '|', 'BulletFormatList', 'NumberFormatList', 'Checklist', '|', 'Outdent', 'Indent', '|',
        'FontColor', 'BackgroundColor', 'FontName', 'FontSize', '|', 'LowerCase', 'UpperCase', '|', 'SuperScript', 'SubScript', '|',
        'EmojiPicker', 'FileManager', 'Video', 'Audio', '|', 'FormatPainter', 'ClearFormat',
        '|', 'Print', 'FullScreen', '|', 'SourceCode'];
    const rteValue = '<h2>Welcome to the React Rich Text Editor</h2> <p> The Rich Text Editor, a WYSIWYG (what you see is what you get) editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here. </p> <h3>Do you know the key features of the editor?</h3> <ul> <li> Basic features include headings, block quotes, numbered lists, bullet lists, and support to insert images, tables, audio, and video. </li> <li> Inline styles include <b>bold</b>, <em>italic</em>, <span style="text-decoration: underline">underline</span>, <span style="text-decoration: line-through">strikethrough</span>, <a class="e-rte-anchor" href="https://ej2.syncfusion.com/demos/#/material/rich-text-editor/tools.html" title="https://ej2.syncfusion.com/demos/#/material/rich-text-editor/tools.html" aria-label="Open in new window">hyperlinks</a>,<code>InlineCode</code>, 😀 and more. </li> <li> The toolbar has multi-row, expandable, and scrollable modes. The Editor supports an inline toolbar, a floating toolbar, and custom toolbar items. </li> <li> Integration with Syncfusion<sup>®</sup> Mention control lets users tag other users. To learn more, check out the <a class="e-rte-anchor" href="https://ej2.syncfusion.com/documentation/rich-text-editor/mention-integration" title="Mention Documentation" aria-label="Open in new window">documentation</a> and <a class="e-rte-anchor" href="https://ej2.syncfusion.com/demos/#/material/rich-text-editor/mention-integration.html" title="Mention Demos" aria-label="Open in new window">demos</a>. </li> <li><b>Paste from MS Word</b> - helps to reduce the effort while converting the Microsoft Word content to HTML format with format and styles. To learn more, check out the documentation <a class="e-rte-anchor" href="https://ej2.syncfusion.com/documentation/rich-text-editor/paste-cleanup" title="Paste from MS Word Documentation" aria-label="Open in new window">here</a>. </li> <li> Other features: placeholder text, character count, form validation, enter key configuration, resizable editor, IFrame rendering, tooltip, source code view, RTL mode, persistence, HTML Sanitizer, autosave, and <a class="e-rte-anchor" href="https://ej2.syncfusion.com/documentation/api/rich-text-editor/" title="Rich Text Editor API" aria-label="Open in new window">more</a>. </li> </ul> <h3>Auto Formatting – Write Faster, Format Smarter</h3> <p> Boost your productivity with Auto Formatting, a powerful feature that lets you style content instantly using simple, familiar Markdown-style shortcuts. No need to reach for the toolbar — just type and watch your content transform in real time. </p> <h4>Effortless Formatting Shortcuts</h4> <table class="e-rte-table"> <thead> <tr> <th>Action</th> <th>Shortcut</th> </tr> </thead> <tbody> <tr> <td>Bulleted List</td> <td> Start a line with <code>*</code> or <code>-</code> followed by a space </td> </tr> <tr> <td>Numbered List</td> <td> Start a line with <code>1.</code> or <code>i.</code> followed by a space </td> </tr> <tr> <td>Checklist / To-do</td> <td> Start a line with <code>[ ]</code> or <code>[x]</code> followed by a space </td> </tr> <tr> <td>Headings (H1 to H6)</td> <td> Use <code>#</code>, <code>##</code>, <code>###</code>, <code>####</code>, <code>#####</code>, or <code>######</code> followed by a space </td> </tr> <tr> <td>Block Quote</td> <td> Start a line with <code>></code> followed by a space </td> </tr> <tr> <td>Code Block</td> <td> Start a line with <code>```</code> followed by a space </td> </tr> <tr> <td>Horizontal Line</td> <td> Start a line with <code>---</code> followed by a space </td> </tr> <tr> <td>Bold Text</td> <td>Type <code>**text**</code> or <code>__text__</code></td> </tr> <tr> <td>Italic Text</td> <td>Type <code>*text*</code> or <code>_text_</code></td> </tr> <tr> <td>Inline Code</td> <td>Type <code>`text`</code></td> </tr> <tr> <td>Strikethrough</td> <td>Type <code>~~text~~</code></td> </tr> </tbody> </table> <h3>Elevating Your Content with Images</h3> <p> Images can be added to the editor by pasting or dragging into the editing area, using the toolbar to insert one as a URL, or uploading directly from the File Browser. Easily manage your images on the server by configuring the <a class="e-rte-anchor" href="https://ej2.syncfusion.com/documentation/api/rich-text-editor/#insertimagesettings" title="Insert Image Settings API" aria-label="Open in new window">insertImageSettings</a> to upload, save, or remove them. </p> <p> The Editor can integrate with the Syncfusion<sup>®</sup> Image Editor to crop, rotate, annotate, and apply filters to images. Check out the demos <a class="e-rte-anchor" href="https://ej2.syncfusion.com/demos/#/material/rich-text-editor/image-editor-integration.html" title="Image Editor Demo" aria-label="Open in new window">here</a>. </p> <p><img alt="Sky with sun" src="https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Overview.png" style="width: 440px" class="e-rte-image e-imginline"/></p> <blockquote> <p><em>Easily access Audio, Image, Link, Video, and Table operations through the quick toolbar by right-clicking on the corresponding element with your mouse.</em></p> </blockquote>';
    const fileManagerSettings = {
        enable: true,
        ajaxSettings: {
            url: hostUrl + 'api/RichTextEditor/FileOperations',
            getImageUrl: hostUrl + 'api/RichTextEditor/GetImage',
            uploadUrl: hostUrl + 'api/RichTextEditor/Upload',
            downloadUrl: hostUrl + 'api/RichTextEditor/Download'
        }
    };
    const quickToolbarSettings = {
        table: ['Tableheader', 'TableRemove', '|', 'TableRows', 'TableColumns', 'TableCell', '|', 'TableEditProperties', 'TableCellProperties', 'Styles', 'BackgroundColor', 'Alignments', 'TableCellVerticalAlign'],
        text: ['Formats', '|', 'Bold', 'Italic', 'Fontcolor', 'BackgroundColor', '|', 'CreateLink', 'Image', 'CreateTable', 'Blockquote', '|', 'Unorderedlist', 'Orderedlist', 'Indent', 'Outdent'],
        showOnRightClick: true,
    };
    //Rich Text Editor ToolbarSettings
    const toolbarSettings = {
        items: items
    };
    const importWord = {
        serviceUrl: 'https://services.syncfusion.com/react/production/api/RichTextEditor/ImportFromWord',
    };
    const exportWord = {
        serviceUrl: 'https://services.syncfusion.com/react/production/api/RichTextEditor/ExportToDocx',
        fileName: 'RichTextEditor.docx',
        stylesheet: `
            .e-rte-content {
                font-size: 1em;
                font-weight: 400;
                margin: 0;
            }
        `
    };
    const exportPdf = {
        serviceUrl: 'https://services.syncfusion.com/react/production/api/RichTextEditor/ExportToPdf',
        fileName: 'RichTextEditor.pdf',
        stylesheet: `
            .e-rte-content{
                font-size: 1em;
                font-weight: 400;
                margin: 0;
            }
        `
    };
    function handleFullScreen(e) {
        let sbCntEle = document.querySelector('.sb-content.e-view');
        let sbHdrEle = document.querySelector('.sb-header.e-view');
        let leftBar;
        let transformElement;
        if (Browser.isDevice) {
            leftBar = document.querySelector('#right-sidebar');
            transformElement = document.querySelector('.sample-browser.e-view.e-content-animation');
        }
        else {
            leftBar = document.querySelector('#left-sidebar');
            transformElement = document.querySelector('#right-pane');
        }
        if (e.targetItem === 'Maximize') {
            if (Browser.isDevice && Browser.isIos) {
                addClass([sbCntEle, sbHdrEle], ['hide-header']);
            }
            addClass([leftBar], ['e-close']);
            removeClass([leftBar], ['e-open']);
            if (!Browser.isDevice) {
                transformElement.style.marginLeft = '0px';
            }
            transformElement.style.transform = 'inherit';
        }
        else if (e.targetItem === 'Minimize') {
            if (Browser.isDevice && Browser.isIos) {
                removeClass([sbCntEle, sbHdrEle], ['hide-header']);
            }
            removeClass([leftBar], ['e-close']);
            if (!Browser.isDevice) {
                addClass([leftBar], ['e-open']);
                transformElement.style.marginLeft = leftBar.offsetWidth + 'px';
            }
            transformElement.style.transform = 'translateX(0px)';
        }
    }
    function actionCompleteHandler() {
        setTimeout(() => { rteObj.toolbarModule.refreshToolbarOverflow(); }, 400);
    }
    return (<div className='control-pane'>
            <div className='control-section' id='rteIFrame'>
                <div className="content-wrapper">
                    <RichTextEditorComponent id="iframeRTE" ref={(richtexteditor) => { rteObj = richtexteditor; }} value={rteValue} actionBegin={handleFullScreen.bind(this)} actionComplete={actionCompleteHandler.bind(this)} toolbarSettings={toolbarSettings} iframeSettings={iframeSetting} fileManagerSettings={fileManagerSettings} quickToolbarSettings={quickToolbarSettings} exportPdf={exportPdf} exportWord={exportWord} importWord={importWord}>
                        <Inject services={[Toolbar, Image, Link, HtmlEditor, Table, QuickToolbar, FileManager, Audio, Video, FormatPainter, EmojiPicker, PasteCleanup, CodeBlock, ImportExport, ClipBoardCleanup, AutoFormat]}/>
                    </RichTextEditorComponent>
                </div>
            </div>
            <div id="action-description">
                <p>This sample demonstrates the default rendering of the Rich Text Editor in <code>iframe mode</code>.</p>
            </div>

            <div id="description">
                <p>The Rich Text Editor is WYSIWYG ("what you see is what you get") editor that is used to create and edit content, and return valid HTML markup. The editor provides a standard toolbar to format content using its commands. The toolbar contains commands to align the text, insert link, insert image,
                    insert list, undo/redo the operation, HTML view, and more.</p>
                <p><b>Injecting Module</b></p>
                <p>Rich Text Editor component features are segregated into individual feature-wise modules. To use Rich Text Editor feature, we need to inject <code>Toolbar, Link, Image, HtmlEditor, QuickToolbar, Table, Audio, Video, FormatPainter, EmojiPicker, PasteCleanup, CodeBlock</code> modules into the services.</p>
            </div>
        </div>);
}
export default IFrame;
