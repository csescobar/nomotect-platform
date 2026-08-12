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
import { detach } from '@syncfusion/ej2-base';
/**
 * Walks through all text nodes in a container with cumulative offsets
 *
 * @param {HTMLElement} container - Container element to walk
 * @returns {Array} Array of tuples with text nodes and their cumulative offsets
 * @hidden
 */
export function walkTextNodes(container) {
    var walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null);
    var result = [];
    var cumulativeOffset = 0;
    var node = walker.nextNode();
    while (node) {
        var textNode = node;
        result.push([textNode, cumulativeOffset]);
        cumulativeOffset += textNode.textContent.length;
        node = walker.nextNode();
    }
    return result;
}
/**
 * Calculates total text length in a container element
 *
 * @param {HTMLElement} container - Container element
 * @returns {number} Total text character count
 * @hidden
 */
export function getTotalTextLength(container) {
    var total = 0;
    for (var _i = 0, _a = walkTextNodes(container); _i < _a.length; _i++) {
        var node = _a[_i][0];
        total += node.textContent.length;
    }
    return total;
}
/**
 * Finds text node at specified absolute offset in container
 *
 * @param {HTMLElement} container - Container element
 * @param {number} absoluteOffset - Absolute character offset
 * @returns {TextNodePosition|null} Text node position or null
 * @hidden
 */
export function findTextNodeAtOffset(container, absoluteOffset) {
    for (var _i = 0, _a = walkTextNodes(container); _i < _a.length; _i++) {
        var _b = _a[_i], node = _b[0], nodeOffset = _b[1];
        var nodeLength = node.length;
        var nodeEndOffset = nodeOffset + nodeLength;
        if (absoluteOffset >= nodeOffset && absoluteOffset <= nodeEndOffset) {
            return {
                node: node,
                offsetInContainer: nodeOffset,
                offsetInNode: absoluteOffset - nodeOffset
            };
        }
    }
    return null;
}
/**
 * Walks up the DOM from `startNode` to `boundary`, returning the first
 * ancestor that has `contenteditable="false"` — i.e. an atomic/non-editable
 * chip element such as a Mention or Label.
 * Returns null when `startNode` is not inside any non-editable subtree.
 *
 * @param {Node} startNode - The start node
 * @param {HTMLElement} boundary - The boundary element
 * @returns {Element} - The ancestor of non editable element
 *
 * @hidden
 */
function getNonEditableAncestor(startNode, boundary) {
    var current = startNode.parentNode;
    while (current && current !== boundary) {
        if (current.nodeType === Node.ELEMENT_NODE &&
            current.getAttribute('contenteditable') === 'false') {
            return current;
        }
        current = current.parentNode;
    }
    return null;
}
/**
 * Inserts text at specified absolute offset in container
 *
 * @param {HTMLElement} container - Container element
 * @param {number} absoluteOffset - Absolute offset to insert at
 * @param {string} textToInsert - Text to insert
 * @returns {Text|null} Text node containing insertion or null
 * @hidden
 */
export function insertTextAtOffset(container, absoluteOffset, textToInsert) {
    var pos = findTextNodeAtOffset(container, absoluteOffset);
    if (!pos) {
        var totalLength = getTotalTextLength(container);
        if (absoluteOffset !== totalLength) {
            return null;
        }
        var newNode = document.createTextNode(textToInsert);
        container.appendChild(newNode);
        return newNode;
    }
    var node = pos.node, offsetInNode = pos.offsetInNode;
    // Guard: if the resolved text node sits inside a contenteditable="false"
    // chip (Mention / Label), we must NOT mutate it with insertData.
    // Instead, redirect the insert to a text node adjacent to the chip.
    var chip = getNonEditableAncestor(node, container);
    if (chip) {
        if (offsetInNode === 0) {
            // Insertion is at the left boundary of the chip → insert before it.
            var prevSibling = chip.previousSibling;
            if (prevSibling && prevSibling.nodeType === Node.TEXT_NODE) {
                var prev = prevSibling;
                prev.insertData(prev.length, textToInsert);
                return prev;
            }
            var newNode = document.createTextNode(textToInsert);
            chip.parentNode.insertBefore(newNode, chip);
            return newNode;
        }
        else {
            // Insertion is at or past the right boundary of the chip → insert after it.
            var nextSibling = chip.nextSibling;
            if (nextSibling && nextSibling.nodeType === Node.TEXT_NODE) {
                nextSibling.insertData(0, textToInsert);
                return nextSibling;
            }
            var newNode = document.createTextNode(textToInsert);
            chip.parentNode.insertBefore(newNode, nextSibling);
            return newNode;
        }
    }
    // insertData mutates the existing node buffer in place. The C++ DOM pointer stays alive, preventing cursor eviction.
    node.insertData(offsetInNode, textToInsert);
    return node;
}
/**
 * Deletes text at specified absolute offset and length
 *
 * @param {HTMLElement} container - Container element
 * @param {number} absoluteOffset - Absolute offset to start deletion
 * @param {number} length - Number of characters to delete
 * @returns {number} Number of characters deleted
 * @hidden
 */
export function deleteTextAtOffset(container, absoluteOffset, length) {
    var deletedCount = 0;
    var endOffset = absoluteOffset + length;
    var nodesToClean = [];
    var ops = [];
    var parentsToCleanup = new Set();
    var inlineChipsToCleanup = new Set();
    for (var _i = 0, _a = walkTextNodes(container); _i < _a.length; _i++) {
        var _b = _a[_i], node = _b[0], nodeOffset = _b[1];
        var nodeLength = node.length;
        var nodeEndOffset = nodeOffset + nodeLength;
        if (nodeEndOffset <= absoluteOffset || nodeOffset >= endOffset) {
            continue;
        }
        var deleteStart = Math.max(0, absoluteOffset - nodeOffset);
        var deleteEnd = Math.min(nodeLength, endOffset - nodeOffset);
        var deleteLength = deleteEnd - deleteStart;
        // Collect all deletions without mutating DOM
        ops.push({ node: node, localStart: deleteStart, localLength: deleteLength });
        deletedCount += deleteLength;
    }
    // Apply deletions in reverse order (safer for DOM mutations)
    for (var i = ops.length - 1; i >= 0; i--) {
        var _c = ops[i], node = _c.node, localStart = _c.localStart, localLength = _c.localLength;
        // deleteData runs fine-grained memmove operations. It slices out characters without creating a brand new node.
        node.deleteData(localStart, localLength);
        if (node.length === 0) {
            nodesToClean.push(node);
        }
    }
    // Remove empty text nodes immediately
    for (var _d = 0, nodesToClean_1 = nodesToClean; _d < nodesToClean_1.length; _d++) {
        var node = nodesToClean_1[_d];
        var chip = getAtomicChip(node, container);
        if (chip) {
            inlineChipsToCleanup.add(chip);
            continue;
        }
        var parent_1 = node.parentElement;
        if (!parent_1) {
            continue;
        }
        if (parent_1 !== container && ['STRONG', 'EM', 'U', 'S', 'SPAN', 'A', 'CODE'].indexOf(parent_1.tagName) !== -1) {
            parentsToCleanup.add(parent_1);
        }
        parent_1.removeChild(node);
    }
    // Defer structural cleanup until current sync cycle completes
    if (parentsToCleanup.size > 0 || inlineChipsToCleanup.size > 0) {
        queueMicrotask(function () {
            inlineChipsToCleanup.forEach(function (chip) {
                detach(chip);
            });
            parentsToCleanup.forEach(function (parent) {
                if (parent.isConnected &&
                    parent.childNodes.length === 0 &&
                    parent.parentElement) {
                    parent.parentElement.removeChild(parent);
                }
            });
        });
    }
    return deletedCount;
}
function getAtomicChip(node, container) {
    var current = node.parentNode;
    while (current && current !== container) {
        if (current instanceof HTMLElement &&
            current.classList.contains('e-mention-chip')) {
            return current;
        }
        current = current.parentNode;
    }
    return null;
}
/**
 * Flattens nested object into flat key-value pairs
 *
 * @param {Object} obj - Object to flatten
 * @returns {Object} Flattened object
 * @hidden
 */
export function flattenObj(obj) {
    var res = {};
    for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
        var key = _a[_i];
        var value = obj["" + key];
        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            res = __assign({}, res, flattenObj(value));
        }
        else {
            res["" + key] = value;
        }
    }
    return res;
}
/**
 * Unflattens object separating style properties into nested structure
 *
 * @param {Record<string, any>} flat - Flattened object
 * @returns {Record<string, any>} Unflattened object with styles nested
 * @hidden
 */
export function unflatten(flat) {
    var styleKeys = new Set([
        'bold', 'italic', 'underline', 'strikethrough', 'inlineCode',
        'color', 'backgroundColor', 'uppercase', 'lowercase', 'subscript', 'superscript'
    ]);
    var result = {};
    var styles = {};
    for (var _i = 0, _a = Object.keys(flat); _i < _a.length; _i++) {
        var key = _a[_i];
        var value = flat["" + key];
        if (styleKeys.has(key)) {
            // Style-related → put inside styles
            styles["" + key] = value;
        }
        else {
            // Structural/special → keep at top level
            result["" + key] = value;
        }
    }
    // Only add styles if it has content
    if (Object.keys(styles).length > 0) {
        result.styles = styles;
    }
    return result;
}
