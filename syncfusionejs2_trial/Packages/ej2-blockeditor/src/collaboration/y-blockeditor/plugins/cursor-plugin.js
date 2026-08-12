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
import { detach, createElement, addClass, removeClass } from '@syncfusion/ej2-base';
import { throttle } from '../utils/mutex';
import { findClosestParent } from '../../../common/utils/dom';
import { getBlockContentElement } from '../../../common/utils/block';
import { deriveCursorColors } from '../utils/color';
/** Throttle window for local selection broadcasts (ms) */
var SELECTION_THROTTLE_MS = 50;
/** Throttle window for scroll/resize re-renders (ms ≈ 60 fps) */
var RENDER_THROTTLE_MS = 16;
var CursorPlugin = /** @class */ (function () {
    function CursorPlugin(yFragment, options) {
        var _this = this;
        this.overlayContainer = null;
        this.decorations = new Map();
        this.isDestroyed = false;
        this.onAwarenessChange = function (changes) {
            // Remove disconnected clients
            for (var _i = 0, _a = changes.removed; _i < _a.length; _i++) {
                var clientId = _a[_i];
                _this.decorations.delete(clientId);
            }
            var states = _this.awareness.getStates();
            var localClientId = _this.awareness.clientID;
            // Upsert active remote clients
            for (var _b = 0, _c = changes.added.concat(changes.updated); _b < _c.length; _b++) {
                var clientId = _c[_b];
                if (clientId === localClientId) {
                    continue;
                }
                var state = states.get(clientId);
                if (!state || !state.user) {
                    // Peer exists but hasn't set user info yet — remove stale entry
                    _this.decorations.delete(clientId);
                    continue;
                }
                _this.decorations.set(clientId, {
                    clientId: clientId,
                    user: state.user,
                    // cursor may be null when peer has no active selection
                    cursor: state.cursor
                });
            }
            _this.renderRemoteCursors();
            _this.syncUsersToEditor();
        };
        this.parent = options.parent;
        this.blockManager = options.blockManager;
        this.syncPlugin = this.parent.syncBinding;
        this.yFragment = yFragment;
        this.yDoc = yFragment.doc;
        this.awareness = options.awareness;
        this.YRuntime = this.parent.getYRuntime();
        this.localUser = this.blockManager.getCurrentUserModel();
        this.throttledSelectionUpdate = throttle(function () { return _this.updateLocalCursor(); }, SELECTION_THROTTLE_MS);
        this.throttledRerender = throttle(function () { return _this.renderRemoteCursors(); }, RENDER_THROTTLE_MS);
        this.boundSelectionChange = function () { _this.throttledSelectionUpdate(); };
        this.boundScrollResize = function () { _this.throttledRerender(); };
        // Only re-render cursor overlays for layout/scroll changes; awareness
        // change events already handle cursor-position updates synchronously.
        this.yjsDeepObserver = function (_events) {
            requestAnimationFrame(function () { _this.throttledRerender(); });
        };
        this.resizeObserver = new window.ResizeObserver(function () {
            requestAnimationFrame(function () {
                _this.throttledRerender();
            });
        });
        this.initAwareness();
        this.init();
    }
    CursorPlugin.prototype.init = function () {
        this.createOverlayContainer();
        this.blockManager.observer.on('selectionchange', this.boundSelectionChange, this);
        window.addEventListener('scroll', this.boundScrollResize, true /* capture */);
        window.addEventListener('resize', this.boundScrollResize);
        this.yFragment.observeDeep(this.yjsDeepObserver);
        this.resizeObserver.observe(this.blockManager.rootEditorElement);
        this.renderRemoteCursors();
        this.syncUsersToEditor();
    };
    CursorPlugin.prototype.initAwareness = function () {
        this.awareness.setLocalStateField('user', this.localUser);
        this.awareness.setLocalStateField('cursor', null);
        this.awareness.on('change', this.onAwarenessChange);
    };
    CursorPlugin.prototype.updateLocalCursor = function () {
        var sel = this.getEditorSelection();
        if (!sel) {
            this.awareness.setLocalStateField('cursor', null);
            return;
        }
        var anchor = this.parent.syncBinding.yjsPosition.absolutePositionToRelativePosition(sel.anchor, this.yFragment);
        var head = this.parent.syncBinding.yjsPosition.absolutePositionToRelativePosition(sel.head, this.yFragment);
        if (!anchor || !head) {
            this.awareness.setLocalStateField('cursor', null);
            return;
        }
        var cursor = { anchor: anchor, head: head };
        this.awareness.setLocalStateField('cursor', cursor);
    };
    CursorPlugin.prototype.getEditorSelection = function () {
        var domSel = document.getSelection();
        if (!domSel || domSel.rangeCount === 0) {
            return null;
        }
        var editorEl = this.blockManager.rootEditorElement;
        var anchorInEditor = editorEl.contains(domSel.anchorNode);
        var focusInEditor = editorEl.contains(domSel.focusNode);
        if (!anchorInEditor && !focusInEditor) {
            return null;
        }
        var anchor = this.domNodeToAbsPos(domSel.anchorNode, domSel.anchorOffset);
        var head = this.domNodeToAbsPos(domSel.focusNode, domSel.focusOffset);
        if (!anchor || !head) {
            return null;
        }
        return { anchor: anchor, head: head };
    };
    CursorPlugin.prototype.domNodeToAbsPos = function (node, offset) {
        var blockEl = findClosestParent(node, '.e-block');
        if (!blockEl) {
            return null;
        }
        var contentEl = getBlockContentElement(blockEl);
        if (!contentEl) {
            return null;
        }
        var absoluteOffset = this.cumulativeTextOffset(contentEl, node, offset);
        return {
            blockIndex: this.syncPlugin.yBlockHelper.findBlockIndex(blockEl.id, this.yFragment),
            blockId: blockEl.id,
            offset: absoluteOffset
        };
    };
    CursorPlugin.prototype.cumulativeTextOffset = function (container, targetNode, targetOffset) {
        var accumulated = 0;
        var walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
        var node = walker.nextNode();
        while (node) {
            if (node === targetNode) {
                return accumulated + targetOffset;
            }
            accumulated += node.textContent.length;
            node = walker.nextNode();
        }
        // targetNode not found inside container (e.g. collapsed at container end)
        return accumulated;
    };
    CursorPlugin.prototype.createOverlayContainer = function () {
        this.overlayContainer = createElement('div', {
            className: 'e-be-cursor-overlay'
        });
        this.blockManager.rootEditorElement.appendChild(this.overlayContainer);
    };
    CursorPlugin.prototype.renderRemoteCursors = function () {
        var _this = this;
        // Wipe previous render
        this.overlayContainer.innerHTML = '';
        var editorEl = this.blockManager.rootEditorElement;
        // Editor rect used to convert viewport-relative DOMRects to editor-relative offsets
        var editorRect = editorEl.getBoundingClientRect();
        var scrollTop = editorEl.scrollTop;
        var scrollLeft = editorEl.scrollLeft;
        this.decorations.forEach(function (decoration) {
            var user = decoration.user, cursor = decoration.cursor;
            if (!cursor || !cursor.head) {
                return;
            } // peer connected but no selection
            // ── 1. Resolve head relative position → absolute position ─────
            var headAbs = _this.parent.syncBinding.yjsPosition.relativePositionToAbsolutePosition(cursor.head, _this.yDoc, _this.yFragment);
            if (!headAbs) {
                return;
            }
            var colors = deriveCursorColors(user.avatarBgColor);
            // ── 2. Selection highlight (rendered below caret in z-order) ──
            var hasRange = cursor.anchor &&
                !_this.parent.syncBinding.yjsPosition.compareRelativePositions(cursor.anchor, cursor.head);
            if (hasRange) {
                var anchorAbs = _this.parent.syncBinding.yjsPosition.relativePositionToAbsolutePosition(cursor.anchor, _this.yDoc, _this.yFragment);
                if (anchorAbs) {
                    _this.paintSelectionHighlight(user, colors, anchorAbs, headAbs, editorRect, scrollTop, scrollLeft);
                }
            }
            // ── 3. Caret ──────────────────────────────────────────────────
            _this.paintCaret(user, colors, headAbs, editorRect, scrollTop, scrollLeft);
        });
    };
    CursorPlugin.prototype.paintCaret = function (user, colors, absPos, editorRect, scrollTop, scrollLeft) {
        var caretRect = this.caretRectForAbsPos(absPos);
        if (!caretRect) {
            return;
        }
        var el = this.buildDefaultCaret(user, colors, caretRect, editorRect, scrollTop, scrollLeft);
        this.overlayContainer.appendChild(el);
    };
    CursorPlugin.prototype.buildDefaultCaret = function (user, color, caretRect, editorRect, scrollTop, scrollLeft) {
        var _a = this.toEditorRelative(caretRect, editorRect, scrollTop, scrollLeft), left = _a.left, top = _a.top, height = _a.height;
        var caretHeight = Math.max(height, 16);
        // ── Outer wrapper ── position only; all other styles via e-be-cursor
        var wrapper = createElement('div', {
            className: 'e-be-cursor',
            styles: "left: " + left + "px; top: " + top + "px"
        });
        // ── Vertical line ── height and colour are runtime-computed
        var line = createElement('div', {
            className: 'e-be-cursor-line',
            styles: "height: " + caretHeight + "px; background: " + color.caret
        });
        wrapper.appendChild(line);
        // ── Head (dot + label row) ── pointer-events:auto punch-through via class
        var head = createElement('div', {
            className: 'e-be-cursor-head'
        });
        wrapper.appendChild(head);
        // ── Dot ── colour is runtime-computed
        var dot = createElement('div', {
            className: 'e-be-cursor-dot',
            styles: "background: " + color.caret
        });
        head.appendChild(dot);
        // ── Label ── colour is runtime-computed; visibility toggled via e-active
        var label = createElement('div', {
            className: 'e-be-cursor-label',
            styles: "background: " + color.caret
        });
        label.textContent = user.user;
        head.appendChild(label);
        // ── Hover logic ── 80 ms enter-delay, 1000 ms leave-delay
        var hoverTimer = null;
        head.addEventListener('mouseenter', function () {
            if (hoverTimer) {
                clearTimeout(hoverTimer);
                hoverTimer = null;
            }
            hoverTimer = setTimeout(function () {
                hoverTimer = null;
                addClass([label], 'e-active');
            }, 80);
        });
        head.addEventListener('mouseleave', function () {
            if (hoverTimer) {
                clearTimeout(hoverTimer);
                hoverTimer = null;
            }
            hoverTimer = setTimeout(function () {
                hoverTimer = null;
                removeClass([label], 'e-active');
            }, 1000);
        });
        return wrapper;
    };
    CursorPlugin.prototype.paintSelectionHighlight = function (user, colors, anchorAbs, headAbs, editorRect, scrollTop, scrollLeft) {
        var range = this.buildRangeForSelection(anchorAbs, headAbs);
        var rects = Array.from(range.getClientRects());
        for (var _i = 0, rects_1 = rects; _i < rects_1.length; _i++) {
            var rect = rects_1[_i];
            if (rect.width < 1 || rect.height < 1) {
                continue;
            }
            if (this.syncPlugin.yBlockHelper.isBlockLevelRect(rect, range)) {
                continue;
            }
            var rel = this.toEditorRelative(rect, editorRect, scrollTop, scrollLeft);
            var highlight = createElement('div', {
                className: 'e-be-sel-highlight',
                styles: "\n                left: " + rel.left + "px;\n                top: " + rel.top + "px;\n                width: " + rel.width + "px;\n                height: " + rel.height + "px;\n                background: " + colors.selection
            });
            this.overlayContainer.appendChild(highlight);
        }
    };
    CursorPlugin.prototype.buildRangeForSelection = function (anchorAbs, headAbs) {
        var anchorDom = this.resolveAbsPosToDom(anchorAbs);
        var headDom = this.resolveAbsPosToDom(headAbs);
        if (!anchorDom || !headDom) {
            return null;
        }
        var range = document.createRange();
        var position = anchorDom.node.compareDocumentPosition(headDom.node);
        var anchorFirst = position & Node.DOCUMENT_POSITION_FOLLOWING ||
            (anchorDom.node === headDom.node && anchorDom.offset <= headDom.offset);
        if (anchorFirst) {
            range.setStart(anchorDom.node, anchorDom.offset);
            range.setEnd(headDom.node, headDom.offset);
        }
        else {
            range.setStart(headDom.node, headDom.offset);
            range.setEnd(anchorDom.node, anchorDom.offset);
        }
        return range;
    };
    CursorPlugin.prototype.resolveAbsPosToDom = function (absPos) {
        if (!absPos.blockId) {
            return null;
        }
        var blockEl = this.blockManager.getBlockElementById(absPos.blockId);
        var contentEl = getBlockContentElement(blockEl);
        var targetOffset = absPos.offset;
        var accumulated = 0;
        var lastNode = null;
        var walker = document.createTreeWalker(contentEl, NodeFilter.SHOW_TEXT);
        var node = walker.nextNode();
        while (node) {
            var textNode = node;
            var len = textNode.length;
            lastNode = textNode;
            if (accumulated + len >= targetOffset) {
                return { node: textNode, offset: targetOffset - accumulated };
            }
            accumulated += len;
            node = walker.nextNode();
        }
        // Clamp: offset is past the end of all text
        if (lastNode) {
            return { node: lastNode, offset: lastNode.length };
        }
        // No text nodes at all — use content element
        return { node: contentEl, offset: contentEl.childNodes.length };
    };
    CursorPlugin.prototype.caretRectForAbsPos = function (absPos) {
        var dom = this.resolveAbsPosToDom(absPos);
        if (!dom) {
            return null;
        }
        var range = document.createRange();
        range.setStart(dom.node, Math.min(dom.offset, dom.node.length));
        range.collapse(true);
        var rect = range.getBoundingClientRect();
        if (rect.width === 0 && rect.height === 0) {
            var element = dom.node instanceof HTMLElement ? dom.node : dom.node.parentElement;
            return element.getBoundingClientRect();
        }
        return rect;
    };
    CursorPlugin.prototype.toEditorRelative = function (rect, editorRect, scrollTop, scrollLeft) {
        return {
            left: rect.left - editorRect.left + scrollLeft,
            top: rect.top - editorRect.top + scrollTop,
            width: rect.width,
            height: rect.height
        };
    };
    CursorPlugin.prototype.syncUsersToEditor = function () {
        var states = this.awareness.getStates();
        var users = [];
        states.forEach(function (state) {
            if (state.user) {
                users.push(state.user);
            }
        });
        this.blockManager.users = users;
        this.blockManager.stateManager.updateEditorContext();
    };
    // ─────────────────────────────────────────────────────────────────────────
    // Public API
    // ─────────────────────────────────────────────────────────────────────────
    /**
     * Returns the list of all active remote users in the session
     *
     * @returns {UserModel[]} Array of active user models
     * @hidden
     */
    CursorPlugin.prototype.getUsers = function () {
        var states = this.awareness.getStates();
        var users = [];
        states.forEach(function (s) { if (s.user) {
            users.push(s.user);
        } });
        return users;
    };
    /**
     * Returns the current local user model
     *
     * @returns {UserModel} Local user model
     * @hidden
     */
    CursorPlugin.prototype.getLocalUser = function () {
        return __assign({}, this.localUser);
    };
    /**
     * Updates the local user model with partial properties
     *
     * @param {Partial<UserModel>} user - Partial user properties to update
     * @hidden
     * @returns {void}
     */
    CursorPlugin.prototype.setLocalUser = function (user) {
        this.localUser = __assign({}, this.localUser, user);
        this.awareness.setLocalStateField('user', this.localUser);
        this.syncUsersToEditor();
    };
    /**
     * Forces a re-render of all remote cursor decorations
     *
     * @hidden
     * @returns {void}
     */
    CursorPlugin.prototype.forceRerender = function () {
        this.renderRemoteCursors();
    };
    CursorPlugin.prototype.destroy = function () {
        if (this.isDestroyed) {
            return;
        }
        this.isDestroyed = true;
        this.blockManager.observer.off('selectionchange', this.boundSelectionChange);
        window.removeEventListener('scroll', this.boundScrollResize, true);
        window.removeEventListener('resize', this.boundScrollResize);
        this.yFragment.unobserveDeep(this.yjsDeepObserver);
        this.resizeObserver.disconnect();
        this.awareness.off('change', this.onAwarenessChange);
        this.awareness.setLocalState(null);
        detach(this.overlayContainer);
        this.decorations.clear();
    };
    return CursorPlugin;
}());
export { CursorPlugin };
