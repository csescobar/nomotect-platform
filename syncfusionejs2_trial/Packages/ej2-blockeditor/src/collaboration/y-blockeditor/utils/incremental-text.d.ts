import * as Y from '../yjs-types';
import { DeltaOp } from '../base/interface';
import { Collaboration } from '../base/collaboration';
import { YTextAttributes } from '../base/interface';
import { BlockEditorBinding } from '../plugins/sync-plugin';
/**
 * Applies incremental text changes from Yjs deltas to DOM
 *
 * @hidden
 */
export declare class IncrementalSync {
    private parent;
    private collabManager;
    private YRuntime;
    constructor(parent: BlockEditorBinding, manager: Collaboration);
    /**
     * Applies delta operations to update DOM content
     *
     * @param {HTMLElement} container - Container element to update
     * @param {DeltaOp[]} delta - Array of delta operations
     * @param {Y.TextEvent} event - Y.Text event that triggered change
     * @returns {void}
     * @hidden
     */
    applyDelta(container: HTMLElement, delta: DeltaOp[], event: Y.TextEvent): void;
    /**
     * Checks if format change should be applied
     *
     * @param {Object} existing - Existing format properties
     * @param {Object} incoming - Incoming format properties
     * @returns {boolean} True if change should be applied
     * @hidden
     */
    shouldApplyFormatChange(existing: any, incoming: any): boolean;
    /**
     * Applies property changes to specified range
     *
     * @param {HTMLElement} container - Container element
     * @param {number} absoluteOffset - Start offset of range
     * @param {number} length - Length of range
     * @param {YTextAttributes} incomingAttrs - Attributes to apply
     * @returns {void}
     * @hidden
     */
    applyPropertyChanges(container: HTMLElement, absoluteOffset: number, length: number, incomingAttrs: YTextAttributes): void;
    /**
     * Applies formatting actions based on attributes
     *
     * @param {YTextAttributes} properties - Text attributes to apply
     * @param {Range} range - DOM range to apply to
     * @returns {void}
     * @hidden
     */
    applyFormattingsToEditor(properties: YTextAttributes, range: Range): void;
    /**
     * Processes inline content insertion (labels, mentions)
     *
     * @param {HTMLElement} container - Container element
     * @param {number} absoluteOffset - Offset to insert at
     * @param {YTextAttributes} properties - Inline content attributes
     * @returns {void}
     * @hidden
     */
    processInlineInsertion(container: HTMLElement, absoluteOffset: number, properties: YTextAttributes): void;
    /**
     * Extracts delta operations from Y.TextEvent
     *
     * @param {Y.TextEvent} event - Y.Text event
     * @returns {DeltaOp[]} Array of delta operations
     * @hidden
     */
    extractDeltaFromEvent(event: Y.TextEvent): DeltaOp[];
}
