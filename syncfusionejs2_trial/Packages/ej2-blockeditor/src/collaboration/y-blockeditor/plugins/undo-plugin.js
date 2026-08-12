import { ySyncPluginKey } from './keys';
import { decoupleReference, getAbsoluteOffset } from '../../../common/utils/common';
import { getNodeFromPath } from '../../../common/utils/selection';
import { getBlockContentElement } from '../../../common/utils/block';
import { findTextNodeAtOffset } from '../utils/dom-offset';
import { findClosestParent } from '../../../common/utils/dom';
var UndoPlugin = /** @class */ (function () {
    function UndoPlugin(options) {
        var _this = this;
        this.isDestroyed = false;
        this.maxStackSize = 30;
        this.preActionSelection = null;
        this.onStackItemAdded = function (event) {
            _this.notifyStateChange();
            _this.saveSelection(event);
            _this.preActionSelection = null;
        };
        this.onStackItemPopped = function (event) {
            _this.notifyStateChange();
            _this.restoreSelection(event);
        };
        this.onStackChange = function () {
            _this.notifyStateChange();
        };
        this.parent = options.parent;
        this.blockManager = options.blockManager;
        this.syncPlugin = this.parent.syncBinding;
        this.yFragment = options.yXmlFragment;
        this.maxStackSize = options.maxStackSize;
        this.YRuntime = this.parent.getYRuntime();
        this.undoManager = new this.YRuntime.UndoManager(options.yXmlFragment, {
            trackedOrigins: options.trackedOrigins || new Set([ySyncPluginKey])
        });
        // Listen for stack changes to notify UI and enforce size limits
        this.undoManager.on('stack-item-added', this.onStackItemAdded);
        this.undoManager.on('stack-item-popped', this.onStackItemPopped);
        this.undoManager.on('stack-cleared', this.onStackChange);
        // Expose plugin to undo action for UI integration
        this.blockManager.undoRedoAction.setYjsUndoPlugin(this);
    }
    UndoPlugin.prototype.notifyStateChange = function () {
        // Notify any registered callbacks of the new state
    };
    /**
     * Performs undo operation if available
     *
     * @returns {boolean} True if undo was performed, false otherwise
     * @hidden
     */
    UndoPlugin.prototype.undo = function () {
        if (!this.undoManager.canUndo()) {
            return false;
        }
        this.undoManager.undo();
        return true;
    };
    /**
     * Performs redo operation if available
     *
     * @returns {boolean} True if redo was performed, false otherwise
     * @hidden
     */
    UndoPlugin.prototype.redo = function () {
        if (!this.undoManager.canRedo()) {
            return false;
        }
        this.undoManager.redo();
        return true;
    };
    /**
     * Checks if undo operation is available
     *
     * @returns {boolean} True if undo is available
     * @hidden
     */
    UndoPlugin.prototype.canUndo = function () {
        return this.undoManager.canUndo();
    };
    /**
     * Checks if redo operation is available
     *
     * @returns {boolean} True if redo is available
     * @hidden
     */
    UndoPlugin.prototype.canRedo = function () {
        return this.undoManager.canRedo();
    };
    /**
     * Clears all undo and redo history
     *
     * @hidden
     * @returns {void}
     */
    UndoPlugin.prototype.clear = function () {
        this.undoManager.clear();
        this.notifyStateChange();
    };
    /**
     * Stops capturing undo/redo transactions
     *
     * @hidden
     * @returns {void}
     */
    UndoPlugin.prototype.stopCapturing = function () {
        this.undoManager.stopCapturing();
    };
    /**
     * Capture current selection state before any action tekes place(eg: cut)
     *
     * @param {IBlockSelectionState} prevSelection - current selection before any action takes place
     * @returns {void}
     * @hidden
     */
    UndoPlugin.prototype.capturePreActionSelection = function (prevSelection) {
        this.previousSelection = decoupleReference(prevSelection);
        this.preActionSelection = this.captureSelectionSnapshot('before');
    };
    /**
     * Captures selection snapshot before or after undo/redo
     *
     * @param {string} state - 'before' for undo selection, 'after' for redo selection
     * @returns {Object|null} Relative position for anchor and focus, or null if unavailable
     * @hidden
     */
    UndoPlugin.prototype.captureSelectionSnapshot = function (state) {
        // Fetch the last captured state in editor's undostack
        var stack = this.blockManager.undoRedoAction.undoRedoStack;
        var lastState = stack.length > 0 ? stack[stack.length - 1] : null;
        if ((state === 'before' && (!lastState && !this.previousSelection)) || (state === 'after' && !lastState)) {
            return null;
        }
        var selection = state === 'before' ? this.previousSelection ? this.previousSelection : lastState.undoSelection : lastState.redoSelection;
        if (!selection) {
            return null;
        }
        var startBlock = this.blockManager.rootEditorElement.querySelector('#' + selection.startBlockId);
        var endBlock = this.blockManager.rootEditorElement.querySelector('#' + selection.endBlockId);
        if (!startBlock || !endBlock) {
            return null;
        }
        var startNode = getNodeFromPath(startBlock, selection.startContainerPath);
        var endNode = getNodeFromPath(endBlock, selection.endContainerPath);
        var startOffset = selection.startOffset;
        var endOffset = selection.endOffset;
        var anchor = this.mapDOMToYText(startNode, startOffset);
        var focus = this.mapDOMToYText(endNode, endOffset);
        this.previousSelection = null;
        if (!anchor || !focus) {
            return null;
        }
        return {
            anchor: this.YRuntime.createRelativePositionFromTypeIndex(anchor.yText, anchor.index),
            focus: this.YRuntime.createRelativePositionFromTypeIndex(focus.yText, focus.index)
        };
    };
    /**
     * Saves current selection to undo manager metadata
     *
     * @param {YUndoManagerEvent} event - Undo manager event with stack item metadata
     * @hidden
     * @returns {void}
     */
    UndoPlugin.prototype.saveSelection = function (event) {
        var beforeSel = this.preActionSelection || this.captureSelectionSnapshot('before');
        var afterSel = this.captureSelectionSnapshot('after');
        if (beforeSel) {
            event.stackItem.meta.set('selectionBefore', beforeSel);
        }
        if (afterSel) {
            event.stackItem.meta.set('selectionAfter', afterSel);
        }
    };
    UndoPlugin.prototype.restoreSelection = function (event) {
        var isUndo = event.type === 'undo';
        var metaKey = isUndo ? 'selectionBefore' : 'selectionAfter';
        var meta = event.stackItem.meta.get(metaKey);
        if (!meta) {
            return;
        }
        var anchor = meta.anchor, focus = meta.focus;
        var anchorAbs = this.YRuntime.createAbsolutePositionFromRelativePosition(anchor, this.yFragment.doc);
        var focusAbs = this.YRuntime.createAbsolutePositionFromRelativePosition(focus, this.yFragment.doc);
        if (!anchorAbs || !focusAbs) {
            return;
        }
        var anchorDom = this.mapYTextToDOM(anchorAbs.type, anchorAbs.index);
        var focusDom = this.mapYTextToDOM(focusAbs.type, focusAbs.index);
        if (!anchorDom || !focusDom) {
            return;
        }
        var sel = window.getSelection();
        var range = document.createRange();
        range.setStart(anchorDom.node, anchorDom.offset);
        range.setEnd(focusDom.node, focusDom.offset);
        sel.removeAllRanges();
        sel.addRange(range);
    };
    UndoPlugin.prototype.mapDOMToYText = function (node, offset) {
        var blockEl = findClosestParent(node, '.e-block');
        if (!blockEl) {
            return null;
        }
        var contentEl = getBlockContentElement(blockEl);
        if (!contentEl) {
            return null;
        }
        var yText = this.syncPlugin.yBlockHelper.getYTextByBlockId(blockEl.id, this.yFragment);
        if (!yText) {
            return null;
        }
        return {
            yText: yText,
            index: getAbsoluteOffset(contentEl, node, offset)
        };
    };
    UndoPlugin.prototype.mapYTextToDOM = function (yText, index) {
        var blockId = this.syncPlugin.yBlockHelper.findBlockIdForYText(yText, this.yFragment);
        if (!blockId) {
            return null;
        }
        var blockEl = this.blockManager.getBlockElementById(blockId);
        if (!blockEl) {
            return null;
        }
        var contentEl = getBlockContentElement(blockEl);
        if (!contentEl) {
            return null;
        }
        var pos = findTextNodeAtOffset(contentEl, index);
        return pos ? { node: pos.node, offset: pos.offsetInNode } : null;
    };
    UndoPlugin.prototype.destroy = function () {
        if (this.isDestroyed) {
            return;
        }
        this.isDestroyed = true;
        // Remove all listeners
        this.undoManager.off('stack-item-added', this.onStackItemAdded);
        this.undoManager.off('stack-item-popped', this.onStackItemPopped);
        this.undoManager.off('stack-cleared', this.onStackChange);
        // Destroy undo manager
        this.undoManager.destroy();
    };
    return UndoPlugin;
}());
export { UndoPlugin };
