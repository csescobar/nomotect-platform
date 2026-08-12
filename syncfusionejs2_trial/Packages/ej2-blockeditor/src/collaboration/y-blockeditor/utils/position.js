/**
 * Converts between absolute and relative positions in Yjs structures
 *
 * @hidden
 */
var YjsPosition = /** @class */ (function () {
    function YjsPosition(parent, manager) {
        this.parent = parent;
        this.collabManager = manager;
        this.YRuntime = this.collabManager.getYRuntime();
    }
    /**
     * Converts absolute DOM position to relative position in Yjs
     *
     * @param {AbsolutePosition} pos - Absolute position in DOM
     * @param {Y.XmlFragment} yFragment - Yjs fragment for context
     * @returns {Y.RelativePosition|null} Relative position or null
     * @hidden
     */
    YjsPosition.prototype.absolutePositionToRelativePosition = function (pos, yFragment) {
        var yBlocks = yFragment.toArray();
        if (pos.blockIndex < 0 || pos.blockIndex >= yBlocks.length) {
            return this.YRuntime.createRelativePositionFromTypeIndex(yFragment, yFragment.length, -1);
        }
        var yBlock = this.parent.yBlockHelper.findYBlockById(pos.blockId, yFragment).node;
        var yText = this.parent.yBlockHelper.getYTextByBlock(yBlock);
        if (yText) {
            // Clamp to [0, yText.length] to guard against stale DOM measurements
            var charOffset = Math.max(0, Math.min(pos.offset, yText.length));
            // Anchor the relative position to the Y.XmlText, not the fragment
            return this.YRuntime.createRelativePositionFromTypeIndex(yText, charOffset, 0);
        }
        // ── Block has no XmlText (structural block) → block-level anchor ─────
        return this.YRuntime.createRelativePositionFromTypeIndex(yFragment, pos.blockIndex, 0);
    };
    /**
     * Converts relative position from Yjs to absolute DOM position
     *
     * @param {Y.RelativePosition} relPos - Relative position in Yjs
     * @param {Y.Doc} yDoc - Yjs document
     * @param {Y.XmlFragment} yFragment - Yjs fragment
     * @returns {AbsolutePosition|null} Absolute position or null
     * @hidden
     */
    YjsPosition.prototype.relativePositionToAbsolutePosition = function (relPos, yDoc, yFragment) {
        var absPos = this.YRuntime.createAbsolutePositionFromRelativePosition(relPos, yDoc);
        if (!absPos) {
            return null;
        }
        var type = absPos.type, index = absPos.index;
        // ── Anchored in a Y.XmlText ─────────────────────────────────
        if (type instanceof this.YRuntime.XmlText) {
            var yBlockId = this.parent.yBlockHelper.findBlockIdForYText(type, yFragment);
            var yBlockIdx = this.parent.yBlockHelper.findBlockIndex(yBlockId, yFragment);
            return {
                blockIndex: yBlockIdx,
                blockId: yBlockId,
                offset: index
            };
        }
        return null;
    };
    YjsPosition.prototype.compareIDs = function (a, b) {
        if (a === b) {
            return true;
        }
        if (!a || !b) {
            return false;
        }
        return a.client === b.client && a.clock === b.clock;
    };
    YjsPosition.prototype.compareRelativePositions = function (a, b) {
        if (a === b) {
            return true;
        }
        if (!a || !b) {
            return false;
        }
        return (a.tname === b.tname &&
            this.compareIDs(a.item, b.item) &&
            this.compareIDs(a.type, b.type) &&
            a.assoc === b.assoc);
    };
    return YjsPosition;
}());
export { YjsPosition };
