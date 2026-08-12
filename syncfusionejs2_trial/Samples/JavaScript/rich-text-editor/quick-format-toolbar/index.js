ej.base.enableRipple(window.ripple)
/*jshint esversion: 6 */
/**
 * Rich Text Editor text quick toolbar sample
 */

    var defaultRTE = new ej.richtexteditor.RichTextEditor({
        quickToolbarSettings: {
            text: ['Formats', '|', 'Bold', 'Italic', 'Fontcolor', 'BackgroundColor', '|', 'CreateLink', 'Image', 'CreateTable', 'Blockquote', '|' , 'Unorderedlist', 'Orderedlist', 'Indent', 'Outdent'],
        },
        toolbarSettings: {
            type: 'MultiRow',
            enableFloating: false,
        },
    });
    defaultRTE.appendTo("#quickRTE");

