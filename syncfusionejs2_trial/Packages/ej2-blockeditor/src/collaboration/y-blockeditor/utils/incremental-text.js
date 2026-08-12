var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { insertTextAtOffset, deleteTextAtOffset, findTextNodeAtOffset, walkTextNodes } from './dom-offset';
import { ContentType } from '../../../models/enums';
import { findClosestParent } from '../../../common/utils/dom';
import { detectFormatsForTextNode } from '../../../common/utils/html-parser';
/**
 * Applies incremental text changes from Yjs deltas to DOM
 *
 * @hidden
 */
var IncrementalSync = /** @class */ (function () {
    function IncrementalSync(parent, manager) {
        this.parent = parent;
        this.collabManager = manager;
        this.YRuntime = this.collabManager.getYRuntime();
    }
    /**
     * Applies delta operations to update DOM content
     *
     * @param {HTMLElement} container - Container element to update
     * @param {DeltaOp[]} delta - Array of delta operations
     * @param {Y.TextEvent} event - Y.Text event that triggered change
     * @returns {void}
     * @hidden
     */
    IncrementalSync.prototype.applyDelta = function (container, delta, event) {
        var currentOffset = 0;
        var isPropChange = this.parent.segmentSync.parseYTextEvent(event).isPropChange;
        for (var _i = 0, delta_1 = delta; _i < delta_1.length; _i++) {
            var op = delta_1[_i];
            if (op.retain !== undefined) {
                var retainLength = op.retain;
                if (isPropChange && op.attributes) {
                    var startOffset = currentOffset;
                    var endOffset = startOffset + op.retain;
                    var absolutePos = 0;
                    for (var _a = 0, _b = walkTextNodes(container); _a < _b.length; _a++) {
                        var node = _b[_a][0];
                        var nodeLength = node.textContent.length;
                        var nodeStart = absolutePos;
                        var nodeEnd = absolutePos + nodeLength;
                        // Skip nodes before range
                        if (nodeEnd <= startOffset) {
                            absolutePos += nodeLength;
                            continue;
                        }
                        // Stop after range
                        if (nodeStart >= endOffset) {
                            break;
                        }
                        var overlapStart = Math.max(nodeStart, startOffset);
                        var overlapEnd = Math.min(nodeEnd, endOffset);
                        var applyLen = overlapEnd - overlapStart;
                        if (applyLen <= 0) {
                            absolutePos += nodeLength;
                            continue;
                        }
                        var formats = detectFormatsForTextNode(node);
                        if (!this.shouldApplyFormatChange(formats, op.attributes)) {
                            absolutePos += nodeLength;
                            continue;
                        }
                        this.applyPropertyChanges(container, overlapStart, applyLen, op.attributes);
                        absolutePos += nodeLength;
                    }
                }
                currentOffset += retainLength;
            }
            else if (op.insert !== undefined) {
                var text = op.insert;
                var incomingAttrs = op.attributes;
                /* Process Inline content insertions */
                var inlineItemId = incomingAttrs ? (incomingAttrs.labelId || incomingAttrs.userId) : null;
                if (inlineItemId) {
                    this.processInlineInsertion(container, currentOffset, incomingAttrs);
                }
                else {
                    insertTextAtOffset(container, currentOffset, text);
                }
                currentOffset += text.length;
            }
            else {
                // op.delete case
                var deleteLength = op.delete;
                deleteTextAtOffset(container, currentOffset, deleteLength);
            }
        }
    };
    /**
     * Checks if format change should be applied
     *
     * @param {Object} existing - Existing format properties
     * @param {Object} incoming - Incoming format properties
     * @returns {boolean} True if change should be applied
     * @hidden
     */
    IncrementalSync.prototype.shouldApplyFormatChange = function (existing, incoming) {
        for (var _i = 0, _a = Object.keys(incoming); _i < _a.length; _i++) {
            var key = _a[_i];
            var value = incoming["" + key];
            // REMOVE format (bold:null)
            if (value === null) {
                if (existing["" + key]) {
                    return true; // only remove if it exists
                }
            }
            // APPLY format (bold:true / color etc.)
            else {
                // Even if existing has same key, if it is valueBasedFormat then format should be applied
                var valueBasedFormats = ['color', 'backgroundColor', 'url'];
                var isValueBasedFormat = valueBasedFormats.indexOf(key) !== -1;
                if (!existing["" + key] || isValueBasedFormat) {
                    return true; // only apply if not already present
                }
            }
        }
        return false;
    };
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
    IncrementalSync.prototype.applyPropertyChanges = function (container, absoluteOffset, length, incomingAttrs) {
        var range = document.createRange();
        var selection = window.getSelection();
        this.collabManager.blockManager.formattingAction.nodeSelection.saveSelection();
        var startPos = findTextNodeAtOffset(container, absoluteOffset);
        if (!startPos) {
            return;
        }
        var endPos = findTextNodeAtOffset(container, absoluteOffset + length);
        if (!endPos) {
            return;
        }
        range.setStart(startPos.node, startPos.offsetInNode);
        range.setEnd(endPos.node, endPos.offsetInNode);
        selection.removeAllRanges();
        selection.addRange(range);
        /* Process formatting actions */
        this.applyFormattingsToEditor(incomingAttrs, range);
        this.collabManager.blockManager.formattingAction.nodeSelection.restoreSelection();
    };
    /**
     * Applies formatting actions based on attributes
     *
     * @param {YTextAttributes} properties - Text attributes to apply
     * @param {Range} range - DOM range to apply to
     * @returns {void}
     * @hidden
     */
    IncrementalSync.prototype.applyFormattingsToEditor = function (properties, range) {
        // Compare old with new
        var currentAttrs = this.collabManager.blockManager.inlineToolbarModule.detectFormatsFromSelection(range);
        for (var _i = 0, _a = Object.keys(properties); _i < _a.length; _i++) {
            var key = _a[_i];
            var val = properties["" + key];
            if (key in currentAttrs && val !== null && (currentAttrs["" + key] === val)) {
                continue; //skip
            }
            var state = __assign({ isRemoteChanges: true }, (key === 'url'
                ? { subCommand: 'link', value: { url: val } }
                : { command: key, value: val }));
            this.collabManager.blockManager.execCommand({
                command: 'FormattingAction',
                state: state
            });
        }
    };
    /**
     * Processes inline content insertion (labels, mentions)
     *
     * @param {HTMLElement} container - Container element
     * @param {number} absoluteOffset - Offset to insert at
     * @param {YTextAttributes} properties - Inline content attributes
     * @returns {void}
     * @hidden
     */
    IncrementalSync.prototype.processInlineInsertion = function (container, absoluteOffset, properties) {
        var blockEle = findClosestParent(container, '.e-block');
        var contentType = properties.labelId ? ContentType.Label : ContentType.Mention;
        var inlineItemId = properties.labelId || properties.userId;
        this.collabManager.blockManager.inlineContentInsertionModule.insertInlineContentAtOffset(blockEle.id, absoluteOffset, contentType, inlineItemId);
    };
    /**
     * Extracts delta operations from Y.TextEvent
     *
     * @param {Y.TextEvent} event - Y.Text event
     * @returns {DeltaOp[]} Array of delta operations
     * @hidden
     */
    IncrementalSync.prototype.extractDeltaFromEvent = function (event) {
        return (event.delta);
    };
    return IncrementalSync;
}());
export { IncrementalSync };
