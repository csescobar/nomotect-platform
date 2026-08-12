/**
 * Helper utilities for locating and manipulating Yjs block elements.
 *
 * @hidden
 */
var YBlockHelper = /** @class */ (function () {
    function YBlockHelper(parent, manager) {
        this.parent = parent;
        this.collabManager = manager;
        this.YRuntime = this.collabManager.getYRuntime();
    }
    /**
     * Finds the block id that contains a given Y.XmlText node.
     *
     * @param {Y.XmlText} yText - The Y text node to locate
     * @param {Y.XmlFragment} yBlocks - The root fragment of Y blocks
     * @returns {string | null} - The containing block id or null
     * @hidden
     */
    YBlockHelper.prototype.findBlockIdForYText = function (yText, yBlocks) {
        var result = this.findBlockContainingText(yText, yBlocks);
        return result ? result.getAttribute('id') : null;
    };
    YBlockHelper.prototype.findBlockContainingText = function (target, container) {
        var children = container.toArray();
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var child = children_1[_i];
            if (child === target && container instanceof this.YRuntime.XmlElement) {
                return container;
            }
            if (child instanceof this.YRuntime.XmlElement) {
                var found = this.findBlockContainingText(target, child);
                if (found) {
                    return found;
                }
            }
        }
        return null;
    };
    /**
     * Finds the index of a block within a Y container by id.
     *
     * @param {string | undefined} targetBlockId - The block id to find
     * @param {Y.XmlFragment | Y.XmlElement} container - The Y container to search
     * @returns {number} - The index of the block or -1 if not found
     * @hidden
     */
    YBlockHelper.prototype.findBlockIndex = function (targetBlockId, container) {
        if (!targetBlockId) {
            return -1;
        }
        var children = container.toArray();
        for (var index = 0; index < children.length; index++) {
            var child = children[index];
            if (!(child instanceof this.YRuntime.XmlElement)) {
                continue;
            }
            var childId = child.getAttribute('id');
            // Direct match at this level
            if (childId === targetBlockId) {
                return index;
            }
            // Recursive search inside this child
            var nestedIndex = this.findBlockIndex(targetBlockId, child);
            if (nestedIndex !== -1) {
                return nestedIndex;
            }
        }
        return -1;
    };
    /**
     * Locates a Y block node and its parent by block id.
     *
     * @param {string} blockId - The block id to locate
     * @param {Y.XmlFragment} yBlocks - The root fragment to search
     * @returns {object} - Found node and parent or null
     * @hidden
     */
    YBlockHelper.prototype.findYBlockById = function (blockId, yBlocks) {
        for (var _i = 0, _a = yBlocks.toArray(); _i < _a.length; _i++) {
            var child = _a[_i];
            if (child instanceof this.YRuntime.XmlElement) {
                var found = this.searchYBlockById(child, blockId, yBlocks);
                if (found) {
                    return found;
                }
            }
        }
        return null;
    };
    /**
     * Recursively searches for a Y block by id and returns node with parent.
     *
     * @param {Y.XmlElement} element - Element to search within
     * @param {string} blockId - Block id to match
     * @param {Y.XmlFragment | Y.XmlElement | null} parent - Optional parent reference
     * @returns {object} - Found node and parent or null
     * @hidden
     */
    YBlockHelper.prototype.searchYBlockById = function (element, blockId, parent) {
        if (parent === void 0) { parent = null; }
        if (element.getAttribute('id') === blockId) {
            return parent ? { node: element, parent: parent, index: parent.toArray().indexOf(element) } : null;
        }
        var children = element.toArray();
        for (var _i = 0, children_2 = children; _i < children_2.length; _i++) {
            var child = children_2[_i];
            if (child instanceof this.YRuntime.XmlElement) {
                var found = this.searchYBlockById(child, blockId, element);
                if (found) {
                    return found;
                }
            }
        }
        return null;
    };
    /**
     * Retrieves the first Y.XmlText child for a given block id.
     *
     * @param {string} blockId - The id of the block to inspect
     * @param {Y.XmlFragment} yFragment - Root fragment containing blocks
     * @returns {Y.XmlText | null} - The found Y.XmlText or null
     * @hidden
     */
    YBlockHelper.prototype.getYTextByBlockId = function (blockId, yFragment) {
        var found = this.findYBlockById(blockId, yFragment);
        if (!found) {
            return null;
        }
        for (var _i = 0, _a = found.node.toArray(); _i < _a.length; _i++) {
            var child = _a[_i];
            if (child instanceof this.YRuntime.XmlText) {
                return child;
            }
        }
        return null;
    };
    /**
     * Returns the first Y.XmlText child of a Y block element.
     *
     * @param {Y.XmlElement} yBlock - The Y block element to inspect
     * @returns {Y.XmlText | null} - The found text node or null
     * @hidden
     */
    YBlockHelper.prototype.getYTextByBlock = function (yBlock) {
        for (var _i = 0, _a = yBlock.toArray(); _i < _a.length; _i++) {
            var child = _a[_i];
            if (child instanceof this.YRuntime.XmlText) {
                return child;
            }
        }
        return null;
    };
    /**
     * Determines whether a selection rectangle targets a block-level element.
     *
     * @param {DOMRect} rect - The rectangle of the selection
     * @param {Range} range - The DOM Range of the selection
     * @returns {boolean} - True if selection is block-level, otherwise false
     * @hidden
     */
    YBlockHelper.prototype.isBlockLevelRect = function (rect, range) {
        var common = range.commonAncestorContainer;
        if (!(common instanceof Element)) {
            return false;
        }
        var blocks = Array.from(common.querySelectorAll('.e-block'));
        for (var _i = 0, blocks_1 = blocks; _i < blocks_1.length; _i++) {
            var block = blocks_1[_i];
            var blockRect = block.getBoundingClientRect();
            var widthRatio = rect.width / blockRect.width;
            if (widthRatio > 0.8 && Math.abs(rect.left - blockRect.left) < 5) {
                return true;
            }
        }
        return false;
    };
    /**
     * Returns the Y element that corresponds to a parent block id.
     *
     * @param {string} parentId - The parent block id to locate
     * @returns {Y.XmlElement | null} - The parent Y element or null
     * @hidden
     */
    YBlockHelper.prototype.getParentContainer = function (parentId) {
        var entry = this.findYBlockById(parentId, this.parent.yBlocks);
        return entry ? entry.node : null;
    };
    /**
     * Finds the index of a given child id inside a Y element.
     *
     * @param {Y.XmlElement} parent - The parent Y element to search
     * @param {string | undefined} targetId - The child id to find
     * @returns {number} - The child index or parent.length if not found
     * @hidden
     */
    YBlockHelper.prototype.findChildIndex = function (parent, targetId) {
        var children = parent.toArray();
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            if (child instanceof this.YRuntime.XmlElement && child.getAttribute('id') === targetId) {
                return i;
            }
        }
        return parent.length;
    };
    return YBlockHelper;
}());
export { YBlockHelper };
