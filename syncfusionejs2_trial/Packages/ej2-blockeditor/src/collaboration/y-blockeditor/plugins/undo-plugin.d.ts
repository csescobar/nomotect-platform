import * as Y from '../yjs-types';
import { UndoPluginOptions, YUndoManagerEvent } from '../base/interface';
import { IBlockSelectionState } from '../../../common/interface';
export declare class UndoPlugin {
    /** @hidden */
    undoManager: Y.UndoManager;
    private parent;
    private syncPlugin;
    private yFragment;
    private blockManager;
    private isDestroyed;
    private maxStackSize;
    private YRuntime;
    private previousSelection;
    private preActionSelection;
    constructor(options: UndoPluginOptions);
    private onStackItemAdded;
    private onStackItemPopped;
    private onStackChange;
    private notifyStateChange;
    /**
     * Performs undo operation if available
     *
     * @returns {boolean} True if undo was performed, false otherwise
     * @hidden
     */
    undo(): boolean;
    /**
     * Performs redo operation if available
     *
     * @returns {boolean} True if redo was performed, false otherwise
     * @hidden
     */
    redo(): boolean;
    /**
     * Checks if undo operation is available
     *
     * @returns {boolean} True if undo is available
     * @hidden
     */
    canUndo(): boolean;
    /**
     * Checks if redo operation is available
     *
     * @returns {boolean} True if redo is available
     * @hidden
     */
    canRedo(): boolean;
    /**
     * Clears all undo and redo history
     *
     * @hidden
     * @returns {void}
     */
    clear(): void;
    /**
     * Stops capturing undo/redo transactions
     *
     * @hidden
     * @returns {void}
     */
    stopCapturing(): void;
    /**
     * Capture current selection state before any action tekes place(eg: cut)
     *
     * @param {IBlockSelectionState} prevSelection - current selection before any action takes place
     * @returns {void}
     * @hidden
     */
    capturePreActionSelection(prevSelection: IBlockSelectionState): void;
    /**
     * Captures selection snapshot before or after undo/redo
     *
     * @param {string} state - 'before' for undo selection, 'after' for redo selection
     * @returns {Object|null} Relative position for anchor and focus, or null if unavailable
     * @hidden
     */
    captureSelectionSnapshot(state: 'before' | 'after'): {
        anchor: Y.RelativePosition;
        focus: Y.RelativePosition;
    } | null;
    /**
     * Saves current selection to undo manager metadata
     *
     * @param {YUndoManagerEvent} event - Undo manager event with stack item metadata
     * @hidden
     * @returns {void}
     */
    saveSelection(event: YUndoManagerEvent): void;
    private restoreSelection;
    private mapDOMToYText;
    private mapYTextToDOM;
    destroy(): void;
}
