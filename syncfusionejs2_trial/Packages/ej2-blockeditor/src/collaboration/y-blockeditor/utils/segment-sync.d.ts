import * as Y from '../yjs-types';
import { ContentModel } from '../../../models/content/content-model';
import { Collaboration } from '../base/collaboration';
import { BlockEditorBinding } from '../plugins/sync-plugin';
/**
 * Synchronizes block editor segments with Yjs text and attributes.
 *
 * @hidden
 */
export declare class SegmentSync {
    private parent;
    private collabManager;
    private YRuntime;
    constructor(parent: BlockEditorBinding, manager: Collaboration);
    /**
     * Incrementally updates a Y.XmlText from BlockEditor segments.
     *
     * @param {Y.XmlText} yText - The Y.XmlText to update
     * @param {ContentModel[]} newSegments - The new contents from BlockEditor
     * @returns {void} - No return value
     * @hidden
     */
    syncSegmentsToYText(yText: Y.XmlText, newSegments: ContentModel[]): void;
    private broadcastPropertiesChanges;
    private buildSegmentOffsetMap;
    private buildAttributesWithNulls;
    /**
     * Parses a Y.TextEvent into structured change descriptors.
     *
     * @param {Y.TextEvent} event - The Yjs text event to parse
     * @returns {object} - Parsed change summary
     * @hidden
     */
    parseYTextEvent(event: Y.TextEvent): {
        isTextChange: boolean;
        isPropChange: boolean;
        changes: Array<{
            type: 'insert' | 'delete' | 'retain';
            index: number;
            length: number;
            text?: string;
            attributes?: Record<string, any>;
        }>;
    };
    /**
     * Returns the Yjs attributes of the character immediately to the left
     * of `insertOffset` by walking the current YText delta.
     * Returns `{}` when inserting at position 0 or the delta is empty.
     *
     * @param {Y.XmlText | Y.Text} yText - The ytext
     * @param {number} insertOffset - Offset to insert
     * @returns {Record<string, null>} - Left neighbouring attrs
     */
    private getLeftNeighborAttrs;
    /**
     * Returns a Yjs attribute map that neutralizes any atomic identity
     * attributes (`userId`, `labelId`) inherited from the left neighbor,
     * preventing plain-text insertions from being absorbed into a Mention
     * or Label run.
     *
     * Returns `undefined` when no neutralization is needed so that
     * `yText.insert()` is called without a third argument in the normal case.
     *
     * @param {Y.XmlText | Y.Text} yText - The ytext
     * @param {number} insertOffset - Offset to insert
     * @returns {Record<string, null>} - Safe attrs to insert
     */
    private buildInsertSafeAttrs;
    private isAtomicSegment;
    private getAtomicIdentity;
    private buildAtomicSet;
    private buildFullText;
    /**
     * Builds the plain-text string used as the "new" side of simpleDiff.
     *
     * @param {ContentModel[]} segments - The new segment array
     * @param {Set<string>} existingAtomicSet - Identity set built from preEditSegments
     * @returns {string} - The diff text
     */
    private buildDiffText;
}
