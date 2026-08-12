import { ContentType } from '../../../models/enums';
import { convertInlineElementsToContentModels, decoupleReference, getBlockContentElement, getBlockModelById, getSelectedRange, setCursorPosition } from '../../../common/utils/index';
import * as constants from '../../../common/constant';
import { BlockFactory } from '../../../block-manager/services/block-factory';
import { events } from '../../../common/constant';
/* Collaboration Start */
import { findTextNodeAtOffset } from '../../../collaboration/y-blockeditor/utils/dom-offset';
/* Collaboration End */
var InlineContentInsertionModule = /** @class */ (function () {
    function InlineContentInsertionModule(manager) {
        this.parent = manager;
        this.addEventListeners();
    }
    InlineContentInsertionModule.prototype.addEventListeners = function () {
        this.parent.observer.on('inlineContentInsertion', this.handleInlineContentInsertion, this);
        this.parent.observer.on(events.destroy, this.destroy, this);
    };
    InlineContentInsertionModule.prototype.removeEventListeners = function () {
        this.parent.observer.off('inlineContentInsertion', this.handleInlineContentInsertion);
        this.parent.observer.off(events.destroy, this.destroy);
    };
    /* Collaboration Start */
    /**
     * Inserts a Mention or Label inline content at a specific character offset in a block.
     * Used for both local insertion and remote collaborative insertion.
     *
     * @param {string} blockId - ID of the target block
     * @param {number} startOffset - 0-based character offset in the concatenated text content
     * @param {string} contentType - ContentType.Mention or ContentType.Label
     * @param {string} itemId - userId (for Mention) or labelId (for Label)
     * @param {boolean} isRemote - Optional: true if this is from collab sync (avoids duplicate events)
     * @returns {void}
     */
    InlineContentInsertionModule.prototype.insertInlineContentAtOffset = function (blockId, startOffset, contentType, itemId, isRemote) {
        if (isRemote === void 0) { isRemote = false; }
        var block = getBlockModelById(blockId, this.parent.getEditorBlocks());
        var contentElement = getBlockContentElement(this.parent.getBlockElementById(blockId));
        // Step 3: Create the new inline content model
        var insertedContent;
        if (contentType === ContentType.Mention) {
            var user = this.parent.users.find(function (u) { return u.id === itemId; });
            if (!user) {
                return;
            }
            insertedContent = BlockFactory.createMentionContent({ content: user.user }, { userId: user.id });
        }
        else if (contentType === ContentType.Label) {
            var label = this.parent.labelSettings.items.find(function (l) { return l.id === itemId; });
            if (!label) {
                return;
            }
            insertedContent = BlockFactory.createLabelContent({ content: label.text }, { labelId: label.id });
        }
        var newInlineNode = this.parent.blockRenderer.contentRenderer.invokeContentRenderer(block, insertedContent);
        var found = findTextNodeAtOffset(contentElement, startOffset);
        var childLength = contentElement ? contentElement.childNodes.length : 0;
        var isEmpty = childLength === 0 || (childLength === 1 && contentElement.childNodes[0].textContent === '');
        if (!found && isEmpty) {
            // On a table, if a cell is empty, we need to replace the <br> tag with the new inline content.
            if (contentElement.firstChild && contentElement.firstChild.nodeName === 'BR') {
                contentElement.firstChild.replaceWith(newInlineNode);
            }
            else {
                contentElement.appendChild(newInlineNode);
            }
        }
        else {
            var range = document.createRange();
            range.setStart(found.node, found.offsetInNode);
            var splitNode = this.parent.nodeCutter.getSpliceNode(range, found.node);
            splitNode.parentElement.insertBefore(newInlineNode, splitNode);
        }
        var newContents = convertInlineElementsToContentModels(contentElement, true);
        this.parent.blockService.updateContent(block.id, newContents);
    };
    /* Collaboration End */
    InlineContentInsertionModule.prototype.handleInlineContentInsertion = function (args) {
        var contentType = (args.value.toString().indexOf('e-user-mention-item-template')) > 0
            ? ContentType.Mention
            : ContentType.Label;
        var options = {
            block: getBlockModelById(this.parent.currentFocusedBlock.id, this.parent.getEditorBlocks()),
            blockElement: this.parent.currentFocusedBlock,
            range: getSelectedRange().cloneRange(),
            contentType: contentType,
            itemData: args.itemData,
            mentionChar: contentType === ContentType.Mention ? '@' : this.parent.labelSettings.triggerChar
        };
        this.processInsertion(options);
    };
    InlineContentInsertionModule.prototype.processInsertion = function (options) {
        var range = options.range, contentType = options.contentType, blockElement = options.blockElement, mentionChar = options.mentionChar;
        if (!range || !blockElement) {
            return;
        }
        var rangeParent = this.getRangeParent(range);
        var insertedNode = this.findInsertedNode(contentType, rangeParent);
        // Remove the trigger char from the block model first
        this.parent.mentionAction.removeMentionQueryKeysFromModel(mentionChar);
        // Split the DOM and update model
        this.splitAndReorganizeContent(insertedNode, contentType, rangeParent, options);
    };
    InlineContentInsertionModule.prototype.splitAndReorganizeContent = function (insertedNode, contentType, rangeParent, options) {
        var block = options.block;
        var blockContentElement = rangeParent.closest('.' + constants.CONTENT_CLS);
        if (!blockContentElement || !insertedNode) {
            return null;
        }
        var oldBlock = decoupleReference(block);
        var isCurrBlkEmpty = blockContentElement.textContent === '';
        var insertedContent = this.createInlineContentModel(insertedNode, contentType, options);
        // DOM Update
        var newInlineNode = this.parent.blockRenderer.contentRenderer.invokeContentRenderer(block, insertedContent);
        insertedNode.replaceWith(newInlineNode);
        // Normalize empty nodes
        var validNodes = Array.from(blockContentElement.childNodes).slice().filter(function (n) { return n.textContent.trim(); });
        var isAtEnd = validNodes.indexOf(newInlineNode) === validNodes.length - 1;
        if (!isAtEnd && !isCurrBlkEmpty) {
            blockContentElement.normalize();
        }
        // Model update
        var newContents = convertInlineElementsToContentModels(blockContentElement, true);
        this.parent.blockService.updateContent(block.id, newContents);
        this.parent.stateManager.updateManagerBlocks();
        this.parent.observer.notify('modelChanged', { type: 'ReRenderBlockContent', state: {
                data: [{ block: block, oldBlock: oldBlock }],
                excludeDomUpdate: true
            } });
        this.parent.undoRedoAction.trackContentChangedForUndoRedo(oldBlock, decoupleReference(block));
        /* Utilize suffix node appended by mention control for cursor, if null-create and append */
        var nextSibling = newInlineNode.nextSibling;
        if (!nextSibling) {
            nextSibling = document.createTextNode('');
            newInlineNode.parentNode.appendChild(nextSibling);
        }
        setCursorPosition(nextSibling, 0);
    };
    InlineContentInsertionModule.prototype.createInlineContentModel = function (element, contentType, options) {
        var user = options.itemData;
        var labelItem = options.itemData;
        var contentValue = contentType === ContentType.Mention ? user.user : element.innerText;
        var newContent;
        if (contentType === ContentType.Mention) {
            newContent = BlockFactory.createMentionContent({ content: contentValue }, { userId: user.id });
        }
        else if (contentType === ContentType.Label) {
            newContent = BlockFactory.createLabelContent({ content: contentValue }, { labelId: labelItem.id });
        }
        return newContent;
    };
    InlineContentInsertionModule.prototype.getRangeParent = function (range) {
        return range.startContainer.nodeType === Node.TEXT_NODE
            ? range.startContainer.parentElement
            : range.startContainer;
    };
    InlineContentInsertionModule.prototype.findInsertedNode = function (contentType, rangeParent) {
        var _a;
        var contentClassMap = (_a = {},
            _a[ContentType.Mention] = 'e-mention-chip',
            _a[ContentType.Label] = 'e-mention-chip',
            _a);
        return rangeParent.querySelector("span[class='" + contentClassMap["" + contentType]);
    };
    /**
     * Destroys the inline content module.
     *
     * @returns {void}
     */
    InlineContentInsertionModule.prototype.destroy = function () {
        this.removeEventListeners();
    };
    return InlineContentInsertionModule;
}());
export { InlineContentInsertionModule };
