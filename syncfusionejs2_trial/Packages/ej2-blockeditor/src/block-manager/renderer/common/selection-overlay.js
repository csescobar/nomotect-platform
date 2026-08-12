import * as constants from '../../../common/constant';
import { createElement, detach } from '@syncfusion/ej2-base';
/**
 * Selection overlay to visually indicate a selection over a target content element.
 * It draws an absolutely positioned box inside the editor root, without affecting layout.
 */
var SelectionOverlay = /** @class */ (function () {
    function SelectionOverlay(manager) {
        this.overlayEl = null;
        this.selectionOverlayInfo = null;
        this.parent = manager;
        this.wireGlobalEvents();
    }
    SelectionOverlay.prototype.wireGlobalEvents = function () {
        this.parent.observer.on(constants.events.destroy, this.destroy, this);
    };
    SelectionOverlay.prototype.unWireGlobalEvents = function () {
        this.parent.observer.off(constants.events.destroy, this.destroy);
    };
    SelectionOverlay.prototype.show = function (targetId) {
        var el = this.ensureOverlay();
        this.positionTo(targetId);
        el.style.display = 'block';
    };
    SelectionOverlay.prototype.hide = function () {
        if (this.overlayEl) {
            this.overlayEl.style.display = 'none';
        }
    };
    SelectionOverlay.prototype.reposition = function () {
        if (!this.overlayEl || this.overlayEl.style.display === 'none') {
            return;
        }
        var targetId = this.overlayEl.getAttribute('data-target-id');
        this.positionTo(targetId);
    };
    SelectionOverlay.prototype.clearSelectionOverlay = function () {
        if (this.parent.floatingIconAction && this.parent.floatingIconAction.floatingIconContainer) {
            var dragIcon = this.parent.floatingIconAction.floatingIconContainer.querySelector('.e-block-drag-icon');
            if (dragIcon) {
                dragIcon.classList.remove('e-drag-icon-selected');
            }
            this.selectionOverlayInfo = null;
            this.hide();
        }
    };
    SelectionOverlay.prototype.ensureOverlay = function () {
        if (this.overlayEl && this.overlayEl.parentElement) {
            return this.overlayEl;
        }
        var overlay = createElement('div', {
            className: 'e-be-selection-overlay'
        });
        overlay.id = this.parent.rootEditorElement.id + '_softSelOverlay';
        overlay.style.display = 'none';
        this.parent.rootEditorElement.appendChild(overlay);
        this.overlayEl = overlay;
        return overlay;
    };
    SelectionOverlay.prototype.positionTo = function (targetId) {
        var isMultipleBlockSelected = this.parent.editorMethods.getSelectedBlocks() && this.parent.editorMethods.getSelectedBlocks().length > 1;
        var targetBlock = this.parent.getBlockElementById(targetId);
        if (this.overlayEl && !isMultipleBlockSelected && targetBlock) {
            var rootRect = this.parent.rootEditorElement.getBoundingClientRect();
            var targetRect = targetBlock.getBoundingClientRect();
            var isRtl = this.parent.rootEditorElement.classList.contains('e-rtl');
            var styles = getComputedStyle(targetBlock);
            var paddingLeft = styles.getPropertyValue('padding-left');
            var marginLeft = styles.getPropertyValue('margin-left');
            var paddingRight = styles.getPropertyValue('padding-right');
            var marginRight = styles.getPropertyValue('margin-right');
            var scrollbarWidth = this.parent.rootEditorElement.offsetWidth - this.parent.rootEditorElement.clientWidth;
            var left = (targetRect.left - rootRect.left + parseInt(paddingLeft, 10) - parseInt(marginLeft, 10) +
                (!isRtl ? -3 : parseInt(paddingRight, 10) - 6.5 + parseInt(marginRight, 10) - scrollbarWidth)) +
                this.parent.rootEditorElement.scrollLeft;
            var top_1 = (targetRect.top - rootRect.top) + this.parent.rootEditorElement.scrollTop;
            this.overlayEl.style.left = left + 'px';
            this.overlayEl.style.top = top_1 + 'px';
            this.overlayEl.style.width = targetRect.width - 50 - (parseInt(targetBlock.style.getPropertyValue('--block-indent'), 10)) + 'px';
            this.overlayEl.style.height = targetRect.height + 'px';
            this.overlayEl.setAttribute('data-target-id', targetId);
        }
    };
    SelectionOverlay.prototype.destroy = function () {
        this.unWireGlobalEvents();
        this.clearSelectionOverlay();
        detach(this.overlayEl);
        this.overlayEl = null;
    };
    return SelectionOverlay;
}());
export { SelectionOverlay };
