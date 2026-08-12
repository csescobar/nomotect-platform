import { Formatter } from './formatter';
import { IEditorModel, IHtmlFormatterModel } from './../../common/interface';
import { FormatPainterSettingsModel } from '../../models';
import { EnterKey } from '../../common';
/**
 * HTML adapter
 *
 * @hidden
 * @deprecated
 */
export declare class HTMLFormatter extends Formatter {
    keyConfig: {
        [key: string]: string;
    };
    currentDocument: Document;
    element: Element;
    editorManager: IEditorModel;
    private toolbarUpdate;
    constructor(options?: IHtmlFormatterModel);
    private initialize;
    /**
     * Update the formatter of RichTextEditor
     *
     * @param {Element} editElement - specifies the edit element.
     * @param {Document} doc - specifies the doucment
     * @param {number} options - specifies the options
     * @param {FormatPainterSettingsModel} formatPainterSettings - specifies the format painter settings
     * @param {EnterKey} enterAction - Specifies the enter key configuration of editor
     * @returns {void}
     * @hidden
     * @deprecated
     */
    updateFormatter(editElement: Element, doc?: Document, options?: {
        [key: string]: number;
    }, formatPainterSettings?: FormatPainterSettingsModel, enterAction?: EnterKey): void;
}
