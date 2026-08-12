import { simpleDiff } from './diff';
import { flattenObj } from './dom-offset';
/**
 * Synchronizes block editor segments with Yjs text and attributes.
 *
 * @hidden
 */
var SegmentSync = /** @class */ (function () {
    function SegmentSync(parent, manager) {
        this.parent = parent;
        this.collabManager = manager;
        this.YRuntime = this.collabManager.getYRuntime();
    }
    /**
     * Incrementally updates a Y.XmlText from BlockEditor segments.
     *
     * @param {Y.XmlText} yText - The Y.XmlText to update
     * @param {ContentModel[]} newSegments - The new contents from BlockEditor
     * @returns {void} - No return value
     * @hidden
     */
    SegmentSync.prototype.syncSegmentsToYText = function (yText, newSegments) {
        // Capture the pre-edit state for plain-text diffing and atomic classification.
        var preEditSegments = this.parent.conversion.yTextToContentModel(yText);
        // Build the set of atomic identities currently in YText.
        var existingAtomicSet = this.buildAtomicSet(preEditSegments);
        /* Build diff texts:
          currentText — full plain text of the current YText state.
          newDiffText — full plain text of newSegments, but with content of NEW atomics replaced by ''
          so simpleDiff never inserts atomic content as plain text. */
        var currentText = this.buildFullText(preEditSegments);
        var newDiffText = this.buildDiffText(newSegments, existingAtomicSet);
        if (currentText !== newDiffText) {
            var diff = simpleDiff(currentText, newDiffText);
            if (diff.remove > 0) {
                yText.delete(diff.index, diff.remove);
            }
            if (diff.insert.length > 0) {
                var safeAttrs = this.buildInsertSafeAttrs(yText, diff.index);
                yText.insert(diff.index, diff.insert, safeAttrs);
            }
        }
        // Re-read yText after the plain-text diff so that postEditSegments
        // shares the same coordinate space as newSegments.
        var postEditSegments = this.parent.conversion.yTextToContentModel(yText);
        this.broadcastPropertiesChanges(yText, postEditSegments, newSegments);
    };
    SegmentSync.prototype.broadcastPropertiesChanges = function (yText, oldSegments, newSegments) {
        var oldOffsetMap = this.buildSegmentOffsetMap(oldSegments);
        var newOffsetMap = this.buildSegmentOffsetMap(newSegments);
        var totalLength = newOffsetMap.reduce(function (sum, info) { return sum + info.length; }, 0);
        var currentOffset = 0;
        var oldSegmentIndex = 0;
        var newSegmentIndex = 0;
        while (currentOffset < totalLength) {
            var oldSegment = null;
            var oldAttrs = {};
            if (oldSegmentIndex < oldSegments.length) {
                var oldInfo = oldOffsetMap[oldSegmentIndex];
                if (currentOffset >= oldInfo.startOffset && currentOffset < oldInfo.endOffset) {
                    oldSegment = oldSegments[oldSegmentIndex];
                    oldAttrs = this.parent.conversion.segmentPropertiesToAttributes(oldSegment.properties);
                }
                else {
                    // Move to next old segment
                    oldSegmentIndex++;
                    if (oldSegmentIndex < oldSegments.length) {
                        oldSegment = oldSegments[oldSegmentIndex];
                        oldAttrs = this.parent.conversion.segmentPropertiesToAttributes(oldSegment.properties);
                    }
                }
            }
            // Find which segment this offset belongs to in NEW segments
            var newSegment = null;
            var newAttrs = {};
            if (newSegmentIndex < newSegments.length) {
                var newInfo = newOffsetMap[newSegmentIndex];
                if (currentOffset >= newInfo.startOffset && currentOffset < newInfo.endOffset) {
                    newSegment = newSegments[newSegmentIndex];
                    newAttrs = this.parent.conversion.segmentPropertiesToAttributes(newSegment.properties);
                }
                else {
                    // Move to next new segment
                    newSegmentIndex++;
                    if (newSegmentIndex < newSegments.length) {
                        newSegment = newSegments[newSegmentIndex];
                        newAttrs = this.parent.conversion.segmentPropertiesToAttributes(newSegment.properties);
                    }
                }
            }
            var oldAttrsStr = JSON.stringify(oldAttrs);
            var newAttrsStr = JSON.stringify(newAttrs);
            if (oldAttrsStr !== newAttrsStr) {
                // props changed! Find the range where this props applies
                var rangeEndOffset = currentOffset + 1;
                // Extend range until props changes again
                while (rangeEndOffset < totalLength) {
                    // Get props at rangeEndOffset
                    var checkNewAttrs = {};
                    for (var i = 0; i < newSegments.length; i++) {
                        var info = newOffsetMap[i];
                        if (rangeEndOffset >= info.startOffset && rangeEndOffset < info.endOffset) {
                            checkNewAttrs = this.parent.conversion.segmentPropertiesToAttributes(newSegments[i].properties);
                            break;
                        }
                    }
                    if (JSON.stringify(checkNewAttrs) !== newAttrsStr) {
                        break;
                    }
                    rangeEndOffset++;
                }
                var rangeLength = rangeEndOffset - currentOffset;
                var yTextAttrs = this.buildAttributesWithNulls(oldAttrs, newAttrs);
                var isAtomicInsert = !!newAttrs['userId'] || !!newAttrs['labelId'];
                if (isAtomicInsert) {
                    yText.insert(currentOffset, newSegment.content, yTextAttrs);
                }
                else {
                    yText.format(currentOffset, rangeLength, yTextAttrs);
                }
                currentOffset = rangeEndOffset;
            }
            else {
                currentOffset++;
            }
        }
    };
    SegmentSync.prototype.buildSegmentOffsetMap = function (segments) {
        var map = [];
        var offset = 0;
        for (var _i = 0, segments_1 = segments; _i < segments_1.length; _i++) {
            var seg = segments_1[_i];
            var length_1 = (seg.content).length;
            map.push({
                startOffset: offset,
                endOffset: offset + length_1,
                length: length_1
            });
            offset += length_1;
        }
        return map;
    };
    SegmentSync.prototype.buildAttributesWithNulls = function (oldAttrs, newAttrs) {
        var attrs = {};
        var oldFlattened = flattenObj(oldAttrs);
        var newFlattened = flattenObj(newAttrs);
        for (var _i = 0, _a = Object.keys(newFlattened); _i < _a.length; _i++) {
            var key = _a[_i];
            var value = newFlattened["" + key];
            if (value !== undefined && value !== null) {
                attrs["" + key] = value;
            }
        }
        for (var _b = 0, _c = Object.keys(oldFlattened); _b < _c.length; _b++) {
            var key = _c[_b];
            var oldValue = oldFlattened["" + key];
            if (!(key in newFlattened) && oldValue !== undefined && oldValue !== null) {
                attrs["" + key] = null;
            }
        }
        return attrs;
    };
    /**
     * Parses a Y.TextEvent into structured change descriptors.
     *
     * @param {Y.TextEvent} event - The Yjs text event to parse
     * @returns {object} - Parsed change summary
     * @hidden
     */
    SegmentSync.prototype.parseYTextEvent = function (event) {
        var delta = event.delta;
        var changes = [];
        var isTextChange = false;
        var isPropChange = false;
        var index = 0;
        for (var _i = 0, delta_1 = delta; _i < delta_1.length; _i++) {
            var op = delta_1[_i];
            if (op.insert !== undefined) {
                isTextChange = true;
                var text = op.insert;
                changes.push({
                    type: 'insert',
                    index: index,
                    length: text.length,
                    text: text,
                    attributes: op.attributes
                });
                index += text.length;
            }
            else if (op.delete !== undefined) {
                isTextChange = true;
                changes.push({
                    type: 'delete',
                    index: index,
                    length: op.delete
                });
            }
            else {
                // op.retain case
                if (op.attributes) {
                    isPropChange = true;
                }
                changes.push({
                    type: 'retain',
                    index: index,
                    length: op.retain,
                    attributes: op.attributes
                });
                index += op.retain;
            }
        }
        return { isTextChange: isTextChange, isPropChange: isPropChange, changes: changes };
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
    SegmentSync.prototype.getLeftNeighborAttrs = function (yText, insertOffset) {
        if (insertOffset <= 0) {
            return {};
        }
        var delta = yText.toDelta();
        var targetIndex = insertOffset - 1;
        var pos = 0;
        for (var _i = 0, delta_2 = delta; _i < delta_2.length; _i++) {
            var op = delta_2[_i];
            var len = op.insert.length;
            if (targetIndex >= pos && targetIndex < pos + len) {
                return op.attributes;
            }
            pos += len;
        }
        return {};
    };
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
    SegmentSync.prototype.buildInsertSafeAttrs = function (yText, insertOffset) {
        var ATOMIC_KEYS = ['userId', 'labelId'];
        var leftAttrs = this.getLeftNeighborAttrs(yText, insertOffset);
        var neutralize = {};
        for (var _i = 0, ATOMIC_KEYS_1 = ATOMIC_KEYS; _i < ATOMIC_KEYS_1.length; _i++) {
            var key = ATOMIC_KEYS_1[_i];
            if (leftAttrs && leftAttrs["" + key] != null) {
                neutralize["" + key] = null;
            }
        }
        return Object.keys(neutralize).length > 0 ? neutralize : undefined;
    };
    SegmentSync.prototype.isAtomicSegment = function (segment) {
        return segment.contentType === 'Mention' || segment.contentType === 'Label';
    };
    SegmentSync.prototype.getAtomicIdentity = function (segment) {
        switch (segment.contentType) {
            case 'Mention':
                return "mention:" + segment.properties.userId;
            case 'Label':
                return "label:" + segment.properties.labelId;
            default:
                return '';
        }
    };
    SegmentSync.prototype.buildAtomicSet = function (segments) {
        var set = new Set();
        for (var _i = 0, segments_2 = segments; _i < segments_2.length; _i++) {
            var segment = segments_2[_i];
            if (this.isAtomicSegment(segment)) {
                set.add(this.getAtomicIdentity(segment));
            }
        }
        return set;
    };
    SegmentSync.prototype.buildFullText = function (segments) {
        return segments
            .map(function (segment) { return segment.content; })
            .join('');
    };
    /**
     * Builds the plain-text string used as the "new" side of simpleDiff.
     *
     * @param {ContentModel[]} segments - The new segment array
     * @param {Set<string>} existingAtomicSet - Identity set built from preEditSegments
     * @returns {string} - The diff text
     */
    SegmentSync.prototype.buildDiffText = function (segments, existingAtomicSet) {
        var _this = this;
        return segments
            .map(function (segment) {
            // New atomic: exclude its content from the diff so that
            // broadcastPropertiesChanges remains the sole owner of insertion.
            if (_this.isAtomicSegment(segment) &&
                !existingAtomicSet.has(_this.getAtomicIdentity(segment))) {
                return '';
            }
            return segment.content;
        })
            .join('');
    };
    return SegmentSync;
}());
export { SegmentSync };
