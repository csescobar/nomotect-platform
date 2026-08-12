import { BlockModel } from '../../models/index';
import { IClipboardPayloadOptions } from '../../common/interface';
import { ClipboardCleanupModule } from '../plugins/common/clipboard-cleanup';
import { BlockManager } from '../base/block-manager';
import { TableClipboardPayload, TableContext } from '../base/interface';
/**
 * Handles clipboard operations (copy, cut, paste) for the Block Editor.
 */
export declare class ClipboardAction {
    private parent;
    private isSelectivePaste;
    /** @hidden */
    clipboardCleanupModule: ClipboardCleanupModule;
    constructor(manager: BlockManager);
    private wireEvents;
    private unwireEvents;
    /**
     * Handles the cut operation.
     *
     * @param {ClipboardEvent} e - The clipboard event.
     * @returns {void}
     * @hidden
     */
    handleCut(e: ClipboardEvent): void;
    /**
     * Handles the copy operation.
     *
     * @param {ClipboardEvent} e - The clipboard event.
     * @returns {void}
     * @hidden
     */
    handleCopy(e: ClipboardEvent): void;
    /**
     * Handles the paste operation.
     *
     * @param {ClipboardEvent} e - The clipboard event.
     * @returns {void}
     * @hidden
     */
    handlePaste(e: ClipboardEvent): void;
    private extractFileFromClipboard;
    /**
     * Filters out nested child blocks that are already represented in their parent's properties.children.
     * Prevents duplication when copying container blocks (Quote, Callout, Collapsible*, Toggle, etc.)
     * along with their children.
     *
     * @param {BlockModel[]} blocks - The selected blocks to filter.
     * @returns {BlockModel[]} - Filtered blocks excluding children of selected containers.
     * @private
     */
    private filterChildrenOfSelectedContainers;
    /**
     * Gets the clipboard payload for the current selection.
     *
     * @returns {IClipboardPayloadOptions} - The clipboard payload containing HTML, text, and Block Editor data.
     * @hidden
     */
    getClipboardPayload(): IClipboardPayloadOptions;
    getTablePayload(tableBlockEl: HTMLElement): {
        payload: TableClipboardPayload;
        html: string;
        plainText: string;
    };
    private createPartialBlockModels;
    private createPartialContentModels;
    performCutOperation(): void;
    performPasteOperation(args: IClipboardPayloadOptions): void;
    private performDeletionOperation;
    private handleBlockEditorPaste;
    private handleContentPasteWithinBlock;
    /**
     * Handles multi-block paste operation.
     *
     * @param {BlockModel[]} blocks - The blocks to be pasted.
     * @param {boolean} isUndoRedoAction - Indicates if the action is part of an undo/redo operation.
     * @returns {void}
     * @hidden
     */
    handleMultiBlocksPaste(blocks: BlockModel[], isUndoRedoAction?: boolean): void;
    /**
     * Normalizes image block source formats to match the editor's saveFormat setting.
     * For HTML clipboard paste, images always come as base64 format, so:
     * - If saveFormat is 'Blob': converts base64 → blob
     * - If saveFormat is 'Base64': no conversion needed (already in target format)
     *
     * Recursively searches for Image blocks in:
     * - Direct block array
     * - Children blocks (Callout, Quote, Collapsible blocks)
     * - Table cell blocks
     *
     * @param {BlockModel[]} blocks - The blocks to normalize (can be root blocks or nested).
     * @returns {void}
     */
    private updateImageBlockSrc;
    private handleCodeBlockContentPaste;
    private handleHtmlPaste;
    private handlePlainTextPaste;
    handleCellPasteInsideTable(tableCtx: TableContext, html: string, text?: string): void;
    private performCellPaste;
    private performCellCut;
    private triggerAfterPasteEvent;
    /**
     * Checks if the clipboard is empty.
     *
     * @returns {Promise<boolean>} - A promise that resolves to true if the clipboard is empty, false otherwise.
     * @hidden
     */
    isClipboardEmpty(): Promise<boolean>;
    /**
     * Handles the context copy operation.
     *
     * @param {string} [plainText] - Specifies the plain text content to copy.
     * @returns {Promise<void>} - A promise that resolves when the copy operation is complete.
     * @hidden
     */
    handleContextCopy(plainText?: string): Promise<void>;
    /**
     * Handles the context cut operation.
     *
     * @returns {Promise<void>} - A promise that resolves when the cut operation is complete.
     * @hidden
     */
    handleContextCut(): Promise<void>;
    /**
     * Handles the context paste operation.
     *
     * @returns {Promise<void>} - A promise that resolves when the paste operation is complete.
     * @hidden
     */
    handleContextPaste(): Promise<void>;
    /**
     * Detects if all pasted blocks are image-only blocks.
     *
     * @param {BlockModel[]} blocks - The blocks to check
     * @returns {boolean} True if all blocks are Image type
     * @hidden
     */
    private isImageOnlyPaste;
    /**
     * Checks if a block has a following block in the editor.
     *
     * @param {BlockModel} block - The block to check
     * @returns {boolean} True if block has a next sibling block
     * @hidden
     */
    private hasNextBlock;
    /**
     * Creates an empty Paragraph block and adds it after the image block.
     *
     * @param {BlockModel[]} pastedBlocks - The blocks that were pasted
     * @returns {void}
     * @hidden
     */
    handleAutoFocusAfterImagePaste(pastedBlocks: BlockModel[]): void;
    destroy(): void;
}
