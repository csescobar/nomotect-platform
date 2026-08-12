import { ContentType } from '../../../models/enums';
import { BlockManager } from '../../base/block-manager';
export declare class InlineContentInsertionModule {
    private parent;
    constructor(manager: BlockManager);
    private addEventListeners;
    private removeEventListeners;
    /**
     * Inserts a Mention or Label inline content at a specific character offset in a block.
     * Used for both local insertion and remote collaborative insertion.
     *
     * @param {string} blockId - ID of the target block
     * @param {number} startOffset - 0-based character offset in the concatenated text content
     * @param {string} contentType - ContentType.Mention or ContentType.Label
     * @param {string} itemId - userId (for Mention) or labelId (for Label)
     * @param {boolean} isRemote - Optional: true if this is from collab sync (avoids duplicate events)
     * @returns {void}
     */
    insertInlineContentAtOffset(blockId: string, startOffset: number, contentType: ContentType.Mention | ContentType.Label, itemId: string, isRemote?: boolean): void;
    private handleInlineContentInsertion;
    private processInsertion;
    private splitAndReorganizeContent;
    private createInlineContentModel;
    private getRangeParent;
    private findInsertedNode;
    /**
     * Destroys the inline content module.
     *
     * @returns {void}
     */
    destroy(): void;
}
