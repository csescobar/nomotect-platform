import { enableRipple } from '@syncfusion/ej2-base';
enableRipple((window as any).ripple);

/**
 * Rich Text Editor Quick format toolbar sample
 */
import { RichTextEditor, Toolbar, Link, Image, ToolbarType, HtmlEditor, QuickToolbar, FormatPainter, PasteCleanup, Table, Video, Audio, ClipBoardCleanup, AutoFormat } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor, QuickToolbar, FormatPainter, PasteCleanup, Table, Video, Audio, ClipBoardCleanup, AutoFormat);


    
    let defaultRTE: RichTextEditor = new RichTextEditor({
        quickToolbarSettings: {
            text: ['Formats', '|', 'Bold', 'Italic', 'Fontcolor', 'BackgroundColor', '|', 'CreateLink', 'Image', 'CreateTable', 'Blockquote', '|' , 'Unorderedlist', 'Orderedlist', 'Indent', 'Outdent'],
        },
        toolbarSettings: {
            type: ToolbarType.MultiRow,
            enableFloating: false,
        },
    });
    defaultRTE.appendTo("#quickRTE");

 
