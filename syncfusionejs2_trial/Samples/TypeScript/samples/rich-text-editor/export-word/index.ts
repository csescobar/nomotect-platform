import { enableRipple } from '@syncfusion/ej2-base';
enableRipple((window as any).ripple);

import { RichTextEditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar, Table, PasteCleanup, ImportExport, ClipBoardCleanup, AutoFormat } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor, QuickToolbar, Table, PasteCleanup, ImportExport, ClipBoardCleanup, AutoFormat);


    

    const hostUrl: string = 'https://services.syncfusion.com/js/production/';

    const exportEditor: RichTextEditor = new RichTextEditor({
        toolbarSettings: {
            items: [
                'Undo', 'Redo', '|', 'ExportWord', 'ExportPdf', '|',
                'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
                'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
                'Formats', 'Alignments', 'Blockquote', '|', 'NumberFormatList', 'BulletFormatList', '|', 'CreateLink', 'Image', 'CreateTable', '|', 'ClearFormat', 'SourceCode']
        },
        insertImageSettings: {
            saveUrl: hostUrl + 'api/RichTextEditor/SaveFile',
            removeUrl: hostUrl + 'api/RichTextEditor/DeleteFile',
            path: hostUrl + 'RichTextEditor/'
        },
        exportWord: {
            serviceUrl: hostUrl + 'api/RichTextEditor/ExportToDocx',
            fileName: 'RichTextEditor.docx',
            stylesheet: `
        .e-rte-content {
            font-size: 1em;
            font-weight: 400;
            margin: 0;
        }
    `
        },
        exportPdf: {
            serviceUrl: hostUrl + 'api/RichTextEditor/ExportToPdf',
            fileName: 'RichTextEditor.pdf',
            stylesheet: `
        .e-rte-content{
            font-size: 1em;
            font-weight: 400;
            margin: 0;
        }
    `
        },
        enableXhtml: true,
    });
    exportEditor.appendTo('#exportEditor');

