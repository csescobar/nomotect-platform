var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, select, compile, NotifyPropertyChanges, isNullOrUndefined as isNOU, formatUnit, Event, append, addClass, removeClass, Property, ChildProperty, Collection } from '@syncfusion/ej2-base';
import { attributes, EventHandler, remove } from '@syncfusion/ej2-base';
/**
 * Represents a toolbar item model in the component.
 */
var ToolbarItem = /** @class */ (function (_super) {
    __extends(ToolbarItem, _super);
    function ToolbarItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Property('')
    ], ToolbarItem.prototype, "iconCss", void 0);
    __decorate([
        Property()
    ], ToolbarItem.prototype, "text", void 0);
    __decorate([
        Property('Button')
    ], ToolbarItem.prototype, "type", void 0);
    __decorate([
        Property('Left')
    ], ToolbarItem.prototype, "align", void 0);
    __decorate([
        Property(true)
    ], ToolbarItem.prototype, "visible", void 0);
    __decorate([
        Property(false)
    ], ToolbarItem.prototype, "disabled", void 0);
    __decorate([
        Property('')
    ], ToolbarItem.prototype, "tooltip", void 0);
    __decorate([
        Property('')
    ], ToolbarItem.prototype, "cssClass", void 0);
    __decorate([
        Property(null)
    ], ToolbarItem.prototype, "template", void 0);
    __decorate([
        Property(-1)
    ], ToolbarItem.prototype, "tabIndex", void 0);
    return ToolbarItem;
}(ChildProperty));
export { ToolbarItem };
/**
 * Represents the settings for the toolbar in the component.
 */
var ToolbarSettings = /** @class */ (function (_super) {
    __extends(ToolbarSettings, _super);
    function ToolbarSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Collection([], ToolbarItem)
    ], ToolbarSettings.prototype, "items", void 0);
    __decorate([
        Event()
    ], ToolbarSettings.prototype, "itemClicked", void 0);
    return ToolbarSettings;
}(ChildProperty));
export { ToolbarSettings };
/**
 * ChatBase component act as base class.
 */
var InterActiveChatBase = /** @class */ (function (_super) {
    __extends(InterActiveChatBase, _super);
    /**
     * * Constructor for Base class
     *
     * @param {InterActiveChatBaseModel} options - Specifies the Base model.
     * @param {string | HTMLElement} element - Specifies the element to render as component.
     * @private
     */
    function InterActiveChatBase(options, element) {
        var _this = _super.call(this, options, element) || this;
        _this.undoStack = [];
        _this.redoStack = [];
        _this.undoDelayTimer = null;
        return _this;
    }
    /**
     * This method is abstract member of the Component<HTMLElement>.
     *
     * @private
     * @returns {void}
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    InterActiveChatBase.prototype.preRender = function () {
    };
    /**
     * This method is abstract member of the Component<HTMLElement>.
     *
     * @private
     * @returns {string} - It returns the current module name.
     */
    InterActiveChatBase.prototype.getModuleName = function () {
        return 'interactivechatBase';
    };
    /**
     * This method is abstract member of the Component<HTMLElement>.
     *
     * @private
     * @returns {string} - It returns the persisted data.
     */
    InterActiveChatBase.prototype.getPersistData = function () {
        return this.addOnPersist([]);
    };
    /**
     * This method is abstract member of the Component<HTMLElement>.
     *
     * @private
     * @returns {void}
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    InterActiveChatBase.prototype.render = function () {
    };
    /* To calculate the width when change via set model */
    InterActiveChatBase.prototype.setDimension = function (element, width, height) {
        element.style.width = !isNOU(width) ? formatUnit(width) : element.style.width;
        element.style.height = !isNOU(height) ? formatUnit(height) : element.style.height;
    };
    InterActiveChatBase.prototype.addCssClass = function (element, cssClass) {
        if (cssClass) {
            element.classList.add(cssClass);
        }
    };
    InterActiveChatBase.prototype.addRtlClass = function (element, isRtl) {
        if (isRtl) {
            element.classList.add('e-rtl');
        }
    };
    InterActiveChatBase.prototype.updateCssClass = function (element, newClass, oldClass) {
        if (oldClass) {
            removeClass([element], oldClass.trim().split(' '));
        }
        if (newClass) {
            addClass([element], newClass.trim().split(' '));
        }
    };
    InterActiveChatBase.prototype.updateHeader = function (showHeader, headerElement, viewWrapper) {
        if (!showHeader) {
            headerElement.hidden = true;
            viewWrapper.style.height = '100%';
        }
        else {
            headerElement.hidden = false;
            viewWrapper.style.height = '';
        }
    };
    InterActiveChatBase.prototype.renderViewSections = function (element, headerClassName, viewClassName) {
        var headerWrapper = this.createElement('div', { className: headerClassName });
        element.appendChild(headerWrapper);
        var viewWrapper = this.createElement('div', { className: viewClassName });
        element.appendChild(viewWrapper);
    };
    InterActiveChatBase.prototype.createViewComponents = function (viewWrapper) {
        var contentWrapper = this.createElement('div', { className: 'e-views' });
        var viewContainer = this.createElement('div', { className: 'e-view-container' });
        contentWrapper.appendChild(viewContainer);
        viewWrapper.appendChild(contentWrapper);
    };
    InterActiveChatBase.prototype.updateScroll = function (scrollElement) {
        scrollElement.scrollTo(0, scrollElement.scrollHeight);
    };
    InterActiveChatBase.prototype.getElement = function (element) {
        var className;
        switch (element) {
            case 'footer':
                className = 'e-footer';
                break;
            case 'contentContainer':
                className = 'e-content-container';
                break;
            case 'outputElement':
                className = 'e-content';
                break;
            default:
                className = '';
                break;
        }
        return this.createElement('div', { className: className });
    };
    InterActiveChatBase.prototype.getClipBoardContent = function (value) {
        var tempElement = document.createElement('div');
        tempElement.innerHTML = value;
        tempElement.style.top = '0';
        tempElement.style.left = '0';
        tempElement.style.position = 'fixed';
        tempElement.style.opacity = '0';
        document.body.appendChild(tempElement);
        navigator.clipboard.write([
            new ClipboardItem({
                'text/html': new Blob([tempElement.innerHTML], { type: 'text/html' }),
                'text/plain': new Blob([tempElement.innerText], { type: 'text/plain' })
            })
        ]);
        document.body.removeChild(tempElement);
    };
    InterActiveChatBase.prototype.writeFileToClipboard = function (file) {
        var _a;
        if (!document.hasFocus() || !('clipboard' in navigator)) {
            return;
        }
        var mimeType = file.type;
        var supportedTypes = ['image/png'];
        if (supportedTypes.includes(mimeType)) {
            void navigator.clipboard.write([
                new ClipboardItem((_a = {}, _a[mimeType] = file, _a))
            ]);
            return;
        }
        var img = new Image();
        img.onload = function () {
            var canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            canvas.toBlob(function (blob) {
                var _a;
                if (blob) {
                    void navigator.clipboard.write([
                        new ClipboardItem((_a = {}, _a[blob.type] = blob, _a))
                    ]);
                }
            }, 'image/png');
        };
        img.src = URL.createObjectURL(file);
    };
    InterActiveChatBase.prototype.getFooter = function () {
        this.footer = this.getElement('footer');
    };
    InterActiveChatBase.prototype.createSuggestionElement = function (suggestionHeader) {
        var suggestionContainer = this.createElement('div', { className: 'e-suggestions' });
        var suggestionHeaderElement = this.createElement('div', { className: 'e-suggestion-header' });
        var suggestionListElement = this.createElement('div', { className: 'e-suggestion-list' });
        if (suggestionHeader) {
            suggestionContainer.appendChild(suggestionHeaderElement);
        }
        suggestionContainer.appendChild(suggestionListElement);
        return { suggestionContainer: suggestionContainer, suggestionHeaderElement: suggestionHeaderElement, suggestionListElement: suggestionListElement };
    };
    InterActiveChatBase.prototype.renderSuggestions = function (suggestionsArray, suggestionHeader, suggestionTemplate, contextName, templateName, onSuggestionClick) {
        var isSuggestionTemplate = suggestionTemplate ? true : false;
        if (suggestionsArray && suggestionsArray.length > 0) {
            var _a = this.createSuggestionElement(suggestionHeader), suggestionContainer = _a.suggestionContainer, suggestionHeaderElement = _a.suggestionHeaderElement, suggestionListElement = _a.suggestionListElement;
            this.suggestionsElement = suggestionContainer;
            var suggestionContainerClass = "e-suggestions " + (isSuggestionTemplate ? 'e-suggestion-item-template' : '');
            this.suggestionsElement.className = suggestionContainerClass;
            this.suggestionHeader = suggestionHeaderElement;
            var suggestionList = suggestionListElement;
            this.renderSuggestionList(suggestionsArray, suggestionList, isSuggestionTemplate, contextName, suggestionTemplate, templateName, onSuggestionClick);
            if (suggestionHeader) {
                this.suggestionHeader.innerHTML = suggestionHeader;
            }
            this.suggestionsElement.append(suggestionList);
            this.content.append(this.suggestionsElement);
        }
    };
    InterActiveChatBase.prototype.renderSuggestionList = function (suggestionsArray, suggestionWrapper, isSuggestionTemplate, contextName, suggestionTemplate, templateName, onSuggestionClick) {
        var _this = this;
        var suggestionsListElement = this.createElement('ul', { attrs: { 'tabindex': '-1' } });
        suggestionsArray.forEach(function (suggestion, i) {
            var _a;
            var suggestionList = _this.createElement('li');
            attributes(suggestionList, { 'tabindex': '0' });
            EventHandler.add(suggestionList, 'click', function (event) { onSuggestionClick.call(_this, event, suggestion); }, _this);
            EventHandler.add(suggestionList, 'keydown', function (event) { return _this.suggestionItemHandler(event, suggestion); }, _this);
            if (isSuggestionTemplate) {
                var suggestionContext = (_a = { index: i }, _a[contextName] = suggestionsArray[parseInt(i.toString(), 10)], _a);
                _this.updateContent(suggestionTemplate, suggestionList, suggestionContext, templateName);
            }
            else {
                suggestionList.innerHTML = suggestion;
            }
            suggestionsListElement.append(suggestionList);
        });
        suggestionWrapper.appendChild(suggestionsListElement);
    };
    InterActiveChatBase.prototype.suggestionItemHandler = function (event, suggestionText) {
        if (event.key === 'Enter' && !event.shiftKey) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.onSuggestionClick(event, suggestionText);
        }
    };
    InterActiveChatBase.prototype.renderBannerView = function (bannerTemplate, parentElement, templateName) {
        if (bannerTemplate) {
            var className = templateName === 'emptyChatTemplate' ? 'e-empty-chat-template' : 'e-banner-view';
            var introContainer = this.createElement('div', { className: className });
            this.updateContent(bannerTemplate, introContainer, {}, templateName);
            parentElement.prepend(introContainer);
        }
    };
    InterActiveChatBase.prototype.updateContent = function (template, contentElement, context, templateName) {
        // For the internal use of AI assist banner template within the Spreadsheet component.
        // Directly invokes the template function instead of relying on a compiled string.
        if (this.isInternalTemplate) {
            append(template(context, this), contentElement);
            return;
        }
        if (this.isReact) {
            this.clearTemplate([templateName]);
        }
        var notCompile = !(this.isReact || this.isVue);
        var ctn = this.getTemplateFunction(template, notCompile);
        if (typeof ctn === 'string') {
            contentElement.innerHTML = ctn;
        }
        else {
            append(ctn(context, this), contentElement);
        }
        this.renderReactTemplates();
    };
    InterActiveChatBase.prototype.renderFooterContent = function (footerTemplate, prompt, promptPlaceholder, showClearButton, className) {
        if (footerTemplate) {
            this.updateContent(footerTemplate, this.footer, {}, 'footerTemplate');
        }
        else {
            this.renderFooter(className, prompt, promptPlaceholder, showClearButton);
        }
    };
    InterActiveChatBase.prototype.renderFooter = function (className, prompt, promptPlaceholder, showClearButton) {
        if (showClearButton === void 0) { showClearButton = false; }
        this.editableTextarea = this.createElement('div', {
            attrs: {
                class: className,
                contenteditable: 'true',
                placeholder: promptPlaceholder,
                role: 'textbox',
                'aria-multiline': 'true'
            },
            innerHTML: prompt
        });
        var hiddenTextarea = this.createElement('textarea', {
            attrs: {
                class: 'e-hidden-textarea',
                name: 'userPrompt',
                value: prompt
            }
        });
        var textAreaIconsWrapper = this.createElement('div', { className: 'e-textarea-icons-wrapper' });
        this.appendChildren(textAreaIconsWrapper, this.editableTextarea, hiddenTextarea);
        this.footer.appendChild(textAreaIconsWrapper);
    };
    InterActiveChatBase.prototype.updateTextAreaObject = function (textareaObj) {
        if (isNOU(textareaObj)) {
            return;
        }
        var textarea = textareaObj.element;
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
    };
    InterActiveChatBase.prototype.renderSendIcon = function (sendIconClass) {
        var sendIcon = this.createElement('span', { attrs: { class: sendIconClass, role: 'button', 'aria-label': 'Submit', tabindex: '0' } });
        this.footer.appendChild(sendIcon);
        return sendIcon;
    };
    InterActiveChatBase.prototype.appendChildren = function (target) {
        var children = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            children[_i - 1] = arguments[_i];
        }
        target.append.apply(target, children);
    };
    InterActiveChatBase.prototype.insertBeforeChildren = function (target) {
        var children = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            children[_i - 1] = arguments[_i];
        }
        target.prepend.apply(target, children);
    };
    InterActiveChatBase.prototype.renderFooterIcons = function (sendIconClass, showClearButton, clearIconClass) {
        var footerIconsWrapper = this.createElement('div', { attrs: { class: 'e-footer-icons-wrapper' } });
        this.sendIcon = this.createElement('span', { attrs: { class: sendIconClass, role: 'button', 'aria-label': 'Submit', tabindex: '0' } });
        footerIconsWrapper.appendChild(this.sendIcon);
        if (showClearButton) {
            this.renderClearIcon(footerIconsWrapper, clearIconClass);
        }
        this.footer.firstChild.appendChild(footerIconsWrapper);
        this.footer.classList.add('e-footer-focus-wave-effect');
    };
    InterActiveChatBase.prototype.renderClearIcon = function (footerIconsWrapper, clearIconClass) {
        this.clearIcon = this.createElement('span', { attrs: { class: clearIconClass, role: 'button', 'aria-label': 'Close', tabindex: '-1' } });
        if (footerIconsWrapper) {
            footerIconsWrapper.prepend(this.clearIcon);
        }
    };
    InterActiveChatBase.prototype.checkScrollAtBottom = function (Element, fabHeight) {
        var scrollThreshold = 5;
        var scrollTop = Math.floor(Element.scrollTop);
        var scrollHeight = Math.floor(Element.scrollHeight);
        var clientHeight = Math.floor(Element.clientHeight);
        return scrollHeight - scrollTop <= clientHeight + scrollThreshold + fabHeight;
    };
    InterActiveChatBase.prototype.updateHiddenTextarea = function (prompt) {
        var hiddenTextarea = this.footer.querySelector('.e-hidden-textarea');
        hiddenTextarea.value = prompt;
    };
    InterActiveChatBase.prototype.activateSendIcon = function (value) {
        this.sendIcon.classList.toggle('disabled', value === 0);
        this.sendIcon.classList.toggle('enabled', value > 0);
    };
    InterActiveChatBase.prototype.updateFooterElementClass = function () {
        if (isNOU(this.editableTextarea)) {
            return;
        }
        var textarea = this.editableTextarea;
        textarea.style.height = 'auto';
        this.footer.classList.remove('e-footer-expanded');
        this.footer.classList[textarea.scrollHeight > parseInt(getComputedStyle(textarea).minHeight, 10) ? 'add' : 'remove']('e-footer-expanded');
    };
    InterActiveChatBase.prototype.updatePlaceholder = function (placeholder) {
        if (this.editableTextarea) {
            this.editableTextarea.setAttribute('placeholder', placeholder);
        }
    };
    InterActiveChatBase.prototype.pushToUndoStack = function (value) {
        var _a = this.getCursorPosition(), start = _a.start, end = _a.end;
        var state = {
            content: value,
            selectionStart: start,
            selectionEnd: end
        };
        if (this.undoStack.length === 0 || this.undoStack[this.undoStack.length - 1].content !== value) {
            this.undoStack.push(state);
            if (this.undoStack.length > 100) {
                this.undoStack.shift();
            }
        }
    };
    InterActiveChatBase.prototype.handleUndoRedo = function (event) {
        var isUndo = (event.ctrlKey || event.metaKey) && event.key === 'z' && !event.shiftKey;
        var isRedo = (event.ctrlKey || event.metaKey) && (event.key === 'y' || (event.key === 'z' && event.shiftKey));
        if (isUndo) {
            event.preventDefault();
            this.undo(event);
        }
        else if (isRedo) {
            event.preventDefault();
            this.redo(event);
        }
    };
    InterActiveChatBase.prototype.undo = function (event) {
        if (this.undoStack.length <= 1) {
            return;
        }
        var current = this.undoStack.pop();
        var previous = this.undoStack[this.undoStack.length - 1];
        this.redoStack.push(current);
        this.applyPromptChange(previous, current, event);
    };
    InterActiveChatBase.prototype.redo = function (event) {
        if (this.redoStack.length === 0) {
            return;
        }
        var current = {
            content: this.editableTextarea.textContent,
            selectionStart: this.getCursorPosition().start,
            selectionEnd: this.getCursorPosition().end
        };
        var next = this.redoStack.pop();
        this.undoStack.push(next);
        this.applyPromptChange(next, current, event);
    };
    InterActiveChatBase.prototype.setFocusAtEnd = function (textArea) {
        var range = document.createRange();
        var selection = window.getSelection();
        range.selectNodeContents(textArea);
        range.collapse(false);
        if (selection) {
            selection.removeAllRanges();
            selection.addRange(range);
        }
    };
    InterActiveChatBase.prototype.getCursorPosition = function () {
        var selection = window.getSelection();
        if (!selection || selection.rangeCount === 0) {
            return { start: 0, end: 0 };
        }
        var range = selection.getRangeAt(0);
        var startContainer = range.startContainer, startOffset = range.startOffset, endContainer = range.endContainer, endOffset = range.endOffset;
        var charCount = 0;
        var start = -1;
        var end = -1;
        if (this.editableTextarea !== null) {
            var walker = document.createTreeWalker(this.editableTextarea, NodeFilter.SHOW_TEXT, null);
            var currentNode = walker.nextNode();
            while (currentNode !== null) {
                if (currentNode === startContainer) {
                    start = charCount + startOffset;
                }
                if (currentNode === endContainer) {
                    end = charCount + endOffset;
                }
                if (start !== -1 && end !== -1) {
                    break;
                }
                charCount += currentNode.textContent.length;
                currentNode = walker.nextNode();
            }
        }
        if (start === -1) {
            start = 0;
        }
        if (end === -1) {
            end = 0;
        }
        return { start: start, end: end };
    };
    InterActiveChatBase.prototype.findTextNodeAndOffset = function (element, targetOffset) {
        // TreeWalker is a robust way to traverse all text nodes in the element's subtree
        var walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null);
        var currentNode = walker.nextNode();
        var cumulativeOffset = 0;
        while (currentNode !== null) {
            var nodeLength = currentNode.textContent.length;
            if (cumulativeOffset + nodeLength >= targetOffset) {
                return { node: currentNode, offset: targetOffset - cumulativeOffset };
            }
            cumulativeOffset += nodeLength;
            currentNode = walker.nextNode();
        }
        walker.currentNode = element;
        var lastNode = walker.lastChild();
        if (lastNode) {
            return { node: lastNode, offset: lastNode.textContent.length };
        }
        return null; // Should not happen if the element is not empty
    };
    InterActiveChatBase.prototype.setCursorPosition = function (start, end) {
        var selection = window.getSelection();
        if (!selection) {
            return;
        }
        var startNodeInfo = this.findTextNodeAndOffset(this.editableTextarea, start);
        var endNodeInfo = this.findTextNodeAndOffset(this.editableTextarea, end);
        if (startNodeInfo && endNodeInfo) {
            var range = document.createRange();
            range.setStart(startNodeInfo.node, startNodeInfo.offset);
            range.setEnd(endNodeInfo.node, endNodeInfo.offset);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    };
    InterActiveChatBase.prototype.clearBreakTags = function (element) {
        element.innerHTML = element.innerHTML.replace(/<br>/g, '').trim();
    };
    InterActiveChatBase.prototype.handlePaste = function (event) {
        event.preventDefault(); // Prevent default paste behavior
        var pasteContent = event.clipboardData.getData('text/plain') || '';
        var selection = window.getSelection();
        if (!selection || selection.rangeCount === 0) {
            return;
        }
        var range = selection.getRangeAt(0);
        range.deleteContents(); // Delete any selected text
        // Handle line breaks with proper typing
        var lines = pasteContent.split(/\r?\n/);
        var fragment = document.createDocumentFragment();
        lines.forEach(function (line, index) {
            if (line) { // Only add non-empty lines
                fragment.appendChild(document.createTextNode(line));
            }
            if (index < lines.length - 1) {
                fragment.appendChild(document.createElement('br'));
            }
        });
        range.insertNode(fragment);
        this.setFocusAtEnd(this.editableTextarea);
        // Clear redo stack on new input
        this.redoStack = [];
        var inputEvent = new CustomEvent('input', {
            bubbles: true,
            cancelable: true,
            detail: {
                inputType: 'insertFromPaste',
                data: this.editableTextarea.innerText,
                isComposing: false
            }
        });
        this.editableTextarea.dispatchEvent(inputEvent);
        this.pushToUndoStack(this.editableTextarea.innerHTML);
        this.updateScroll(this.editableTextarea);
    };
    InterActiveChatBase.prototype.getCurrentState = function () {
        var position = this.getCursorPosition();
        return {
            content: this.editableTextarea !== null ? this.editableTextarea.innerHTML : '',
            selectionStart: position.start,
            selectionEnd: position.end
        };
    };
    InterActiveChatBase.prototype.scheduleUndoPush = function () {
        var _this = this;
        if (this.undoDelayTimer) {
            clearTimeout(this.undoDelayTimer);
        }
        this.undoDelayTimer = setTimeout(function () {
            var lastState = _this.undoStack[_this.undoStack.length - 1];
            var currentState = _this.getCurrentState();
            if (!lastState || lastState.content !== currentState.content) {
                _this.undoStack.push(currentState);
            }
        }, 400);
    };
    InterActiveChatBase.prototype.getFileTypeIcon = function (fileName) {
        var extension = fileName.split('.').pop().toLowerCase();
        switch (extension) {
            case 'pdf':
                return "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\">\n                            <path d=\"M19.5 20V9.12132C19.5 8.7235 19.342 8.34196 19.0607 8.06066L13.9393 2.93934C13.658 2.65804 13.2765 2.5 12.8787 2.5H6C5.17157 2.5 4.5 3.17157 4.5 4V20C4.5 20.8284 5.17157 21.5 6 21.5H18C18.8284 21.5 19.5 20.8284 19.5 20Z\" fill=\"white\"/>\n                            <path d=\"M12.8789 2C13.4093 2.00006 13.9179 2.21092 14.293 2.58594L19.4141 7.70703C19.7891 8.08205 19.9999 8.59074 20 9.12109V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2H12.8789ZM6 3C5.44772 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V9.12109C19 9.08039 18.9971 9.03999 18.9922 9H15C13.8954 9 13 8.10457 13 7V3.00781C12.96 3.00292 12.9196 3.00001 12.8789 3H6ZM14 7C14 7.55228 14.4477 8 15 8H18.293L14 3.70703V7Z\" fill=\"#707070\"/>\n                            <path d=\"M7.05859 15.0645C6.71875 15.0645 6.51953 14.8623 6.51953 14.5049V11.335C6.51953 10.9775 6.71875 10.7725 7.05859 10.7725H8.35059C9.25879 10.7725 9.87402 11.3613 9.87402 12.2695C9.87402 13.1719 9.22656 13.7607 8.28613 13.7607H7.59473V14.5049C7.59473 14.8623 7.39844 15.0645 7.05859 15.0645ZM7.59473 12.9521H8.06055C8.51758 12.9521 8.78711 12.7148 8.78711 12.2725C8.78711 11.833 8.51758 11.5957 8.06641 11.5957H7.59473V12.9521ZM10.8906 15C10.5508 15 10.3516 14.7949 10.3516 14.4375V11.335C10.3516 10.9775 10.5508 10.7725 10.8906 10.7725H12.0684C13.3457 10.7725 14.0957 11.5137 14.0957 12.8613C14.0957 14.2119 13.3428 15 12.0684 15H10.8906ZM11.4268 14.1328H11.9277C12.6279 14.1328 13.0029 13.708 13.0029 12.8643C13.0029 12.0703 12.6074 11.6396 11.9277 11.6396H11.4268V14.1328ZM15.1562 15.0645C14.8164 15.0645 14.6172 14.8623 14.6172 14.5049V11.335C14.6172 10.9775 14.8164 10.7725 15.1562 10.7725H17.0723C17.3623 10.7725 17.5498 10.9307 17.5498 11.2061C17.5498 11.4814 17.3564 11.6396 17.0723 11.6396H15.6924V12.6006H16.9346C17.207 12.6006 17.3828 12.7529 17.3828 13.0137C17.3828 13.2715 17.2129 13.4238 16.9346 13.4238H15.6924V14.5049C15.6924 14.8623 15.4961 15.0645 15.1562 15.0645Z\" fill=\"#D20112\"/>\n                            <path d=\"M16.5 18C16.7761 18 17 18.2239 17 18.5C17 18.7761 16.7761 19 16.5 19H7.5C7.22386 19 7 18.7761 7 18.5C7 18.2239 7.22386 18 7.5 18H16.5ZM16.5 16C16.7761 16 17 16.2239 17 16.5C17 16.7761 16.7761 17 16.5 17H7.5C7.22386 17 7 16.7761 7 16.5C7 16.2239 7.22386 16 7.5 16H16.5Z\" fill=\"#0F2F56\"/>\n                        </svg>";
            case 'doc':
            case 'docx':
                return "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\">\n                            <path d=\"M19.5 20V9.12132C19.5 8.7235 19.342 8.34196 19.0607 8.06066L13.9393 2.93934C13.658 2.65804 13.2765 2.5 12.8787 2.5H6C5.17157 2.5 4.5 3.17157 4.5 4V20C4.5 20.8284 5.17157 21.5 6 21.5H18C18.8284 21.5 19.5 20.8284 19.5 20Z\" fill=\"white\"/>\n                            <path d=\"M12.8789 2C13.4093 2.00006 13.9179 2.21092 14.293 2.58594L19.4141 7.70703C19.7891 8.08205 19.9999 8.59074 20 9.12109V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2H12.8789ZM6 3C5.44772 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V9.12109C19 9.08039 18.9971 9.03999 18.9922 9H15C13.8954 9 13 8.10457 13 7V3.00781C12.96 3.00292 12.9196 3.00001 12.8789 3H6ZM14 7C14 7.55228 14.4477 8 15 8H18.293L14 3.70703V7Z\" fill=\"#707070\"/>\n                            <path d=\"M16.5 14C16.7761 14 17 14.2239 17 14.5C17 14.7761 16.7761 15 16.5 15H13.5C13.2239 15 13 14.7761 13 14.5C13 14.2239 13.2239 14 13.5 14H16.5ZM16.5 11C16.7761 11 17 11.2239 17 11.5C17 11.7761 16.7761 12 16.5 12H7.5C7.22386 12 7 11.7761 7 11.5C7 11.2239 7.22386 11 7.5 11H16.5Z\" fill=\"#0F2F56\"/>\n                            <path d=\"M10 13H4C2.89543 13 2 13.8954 2 15V21C2 22.1046 2.89543 23 4 23H10C11.1046 23 12 22.1046 12 21V15C12 13.8954 11.1046 13 10 13Z\" fill=\"#255CD9\"/>\n                            <path d=\"M10.6004 15L9.30839 21H7.76339L7.00039 17.4L6.20039 21H4.64039L3.40039 15H4.67439L5.44039 18.96L6.20039 15H7.76239L8.55939 18.96L9.30739 15H10.6004Z\" fill=\"white\"/>\n                        </svg>";
            case 'xls':
            case 'xlsx':
                return "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\">\n                            <path d=\"M19.5 20V9.12132C19.5 8.7235 19.342 8.34196 19.0607 8.06066L13.9393 2.93934C13.658 2.65804 13.2765 2.5 12.8787 2.5H6C5.17157 2.5 4.5 3.17157 4.5 4V20C4.5 20.8284 5.17157 21.5 6 21.5H18C18.8284 21.5 19.5 20.8284 19.5 20Z\" fill=\"white\"/>\n                            <path d=\"M12.8789 2C13.4093 2.00006 13.9179 2.21092 14.293 2.58594L19.4141 7.70703C19.7891 8.08205 19.9999 8.59074 20 9.12109V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2H12.8789ZM6 3C5.44772 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V9.12109C19 9.08039 18.9971 9.03999 18.9922 9H15C13.8954 9 13 8.10457 13 7V3.00781C12.96 3.00292 12.9196 3.00001 12.8789 3H6ZM14 7C14 7.55228 14.4477 8 15 8H18.293L14 3.70703V7Z\" fill=\"#707070\"/>\n                            <path d=\"M16.5 14C16.7761 14 17 14.2239 17 14.5C17 14.7761 16.7761 15 16.5 15H13.5C13.2239 15 13 14.7761 13 14.5C13 14.2239 13.2239 14 13.5 14H16.5ZM16.5 11C16.7761 11 17 11.2239 17 11.5C17 11.7761 16.7761 12 16.5 12H7.5C7.22386 12 7 11.7761 7 11.5C7 11.2239 7.22386 11 7.5 11H16.5Z\" fill=\"#0F2F56\"/>\n                            <path d=\"M10 13H4C2.89543 13 2 13.8954 2 15V21C2 22.1046 2.89543 23 4 23H10C11.1046 23 12 22.1046 12 21V15C12 13.8954 11.1046 13 10 13Z\" fill=\"#199F59\"/>\n                            <path d=\"M10 21H8.24091L7.13637 19.0879C7.09697 19.021 7.06666 18.9679 7.04545 18.9289C7.02728 18.887 7.00758 18.8396 6.98637 18.7866H6.96818C6.94092 18.8536 6.91515 18.9079 6.89091 18.9498C6.86667 18.9917 6.83788 19.0433 6.80455 19.1046L5.65909 21H4L5.99091 17.9958L4.13637 15H5.87273L6.85454 16.7071C6.89394 16.7769 6.92727 16.8382 6.95455 16.8912C6.98484 16.9414 7.01515 17.0014 7.04545 17.0711H7.06364C7.10606 16.9902 7.13939 16.9261 7.16363 16.8787C7.19091 16.8312 7.22727 16.7685 7.27272 16.6904L8.2909 15H9.94546L8.06363 17.9498L10 21Z\" fill=\"white\"/>\n                        </svg>";
            case 'png':
            case 'jpg':
            case 'jpeg':
                return "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\">\n                            <path d=\"M19.5 20V9.12132C19.5 8.7235 19.342 8.34196 19.0607 8.06066L13.9393 2.93934C13.658 2.65804 13.2765 2.5 12.8787 2.5H6C5.17157 2.5 4.5 3.17157 4.5 4V20C4.5 20.8284 5.17157 21.5 6 21.5H18C18.8284 21.5 19.5 20.8284 19.5 20Z\" fill=\"white\"/>\n                            <path d=\"M12.8789 2C13.4093 2.00006 13.9179 2.21092 14.293 2.58594L19.4141 7.70703C19.7891 8.08205 19.9999 8.59074 20 9.12109V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2H12.8789ZM6 3C5.44772 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V9.12109C19 9.08039 18.9971 9.03999 18.9922 9H15C13.8954 9 13 8.10457 13 7V3.00781C12.96 3.00292 12.9196 3.00001 12.8789 3H6ZM14 7C14 7.55228 14.4477 8 15 8H18.293L14 3.70703V7Z\" fill=\"#707070\"/>\n                            <path d=\"M13.2637 11.1133C13.7166 10.0575 15.2349 10.1202 15.5986 11.21L17.9746 18.3389C18.0254 18.4912 17.999 18.6587 17.9053 18.7891C17.8113 18.9194 17.6607 18.9971 17.5 18.9971H6.5C6.32506 18.9971 6.16285 18.9055 6.07227 18.7559C5.98198 18.6064 5.97585 18.4204 6.05664 18.2656L8.61914 13.3691C8.99155 12.6588 10.0076 12.6544 10.3867 13.3613L11.4502 15.3447L13.2637 11.1133ZM14.6494 11.5264C14.5765 11.3091 14.2734 11.2964 14.1826 11.5068L12.3691 15.7393C12.0388 16.5093 10.9642 16.5559 10.5684 15.8174L9.50488 13.833L7.32617 17.9971H16.8057L14.6494 11.5264Z\" fill=\"#0F2F56\"/>\n                            <circle cx=\"9.25\" cy=\"8.75\" r=\"1.25\" stroke=\"#0F2F56\"/>\n                        </svg>";
            case 'html':
                return "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\">\n                            <path d=\"M19.5 20V9.12132C19.5 8.7235 19.342 8.34196 19.0607 8.06066L13.9393 2.93934C13.658 2.65804 13.2765 2.5 12.8787 2.5H6C5.17157 2.5 4.5 3.17157 4.5 4V20C4.5 20.8284 5.17157 21.5 6 21.5H18C18.8284 21.5 19.5 20.8284 19.5 20Z\" fill=\"white\"/>\n                            <path d=\"M12.8789 2C13.4093 2.00006 13.9179 2.21092 14.293 2.58594L19.4141 7.70703C19.7891 8.08205 19.9999 8.59074 20 9.12109V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2H12.8789ZM6 3C5.44772 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V9.12109C19 9.08039 18.9971 9.03999 18.9922 9H15C13.8954 9 13 8.10457 13 7V3.00781C12.96 3.00292 12.9196 3.00001 12.8789 3H6ZM14 7C14 7.55228 14.4477 8 15 8H18.293L14 3.70703V7Z\" fill=\"#707070\"/>\n                            <path d=\"M12 10C14.4853 10 16.5 12.0147 16.5 14.5C16.5 16.9853 14.4853 19 12 19C9.51472 19 7.5 16.9853 7.5 14.5C7.5 12.0147 9.51472 10 12 10ZM11.0156 15C11.0661 15.9228 11.2511 16.7152 11.5 17.2754C11.647 17.6062 11.796 17.8123 11.9111 17.9219C11.9513 17.9601 11.9814 17.9794 12 17.9902C12.0186 17.9794 12.0487 17.9601 12.0889 17.9219C12.204 17.8123 12.353 17.6062 12.5 17.2754C12.7489 16.7152 12.9339 15.9228 12.9844 15H11.0156ZM8.53613 15C8.71013 16.2162 9.50928 17.2293 10.5977 17.7061C10.2789 16.9998 10.0655 16.055 10.0137 15H8.53613ZM13.9863 15C13.9345 16.0552 13.7202 16.9997 13.4014 17.7061C14.4902 17.2295 15.2898 16.2165 15.4639 15H13.9863ZM10.5977 11.293C9.50909 11.7696 8.71015 12.7837 8.53613 14H10.0137C10.0655 12.9446 10.2787 11.9993 10.5977 11.293ZM11.9111 11.0781C11.796 11.1877 11.647 11.3938 11.5 11.7246C11.2511 12.2848 11.0661 13.0772 11.0156 14H12.9844C12.9339 13.0772 12.7489 12.2848 12.5 11.7246C12.353 11.3938 12.204 11.1877 12.0889 11.0781C12.0483 11.0396 12.0185 11.0196 12 11.0088C11.9815 11.0196 11.9517 11.0396 11.9111 11.0781ZM13.4014 11.293C13.7204 11.9994 13.9345 12.9444 13.9863 14H15.4639C15.2898 12.7834 14.4903 11.7695 13.4014 11.293Z\" fill=\"#0F2F56\"/>\n                        </svg>";
            case 'json':
                return "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\">\n                            <path d=\"M19.5 20V9.12132C19.5 8.7235 19.342 8.34196 19.0607 8.06066L13.9393 2.93934C13.658 2.65804 13.2765 2.5 12.8787 2.5H6C5.17157 2.5 4.5 3.17157 4.5 4V20C4.5 20.8284 5.17157 21.5 6 21.5H18C18.8284 21.5 19.5 20.8284 19.5 20Z\" fill=\"white\"/>\n                            <path d=\"M12.8789 2C13.4093 2.00006 13.9179 2.21092 14.293 2.58594L19.4141 7.70703C19.7891 8.08205 19.9999 8.59074 20 9.12109V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2H12.8789ZM6 3C5.44772 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V9.12109C19 9.08039 18.9971 9.03999 18.9922 9H15C13.8954 9 13 8.10457 13 7V3.00781C12.96 3.00292 12.9196 3.00001 12.8789 3H6ZM14 7C14 7.55228 14.4477 8 15 8H18.293L14 3.70703V7Z\" fill=\"#707070\"/>\n                            <path d=\"M8.64697 16.7231V16.0156C8.64697 15.4883 8.47559 15.229 7.99219 15.1455C7.68457 15.0884 7.54395 14.8687 7.54395 14.5039C7.54395 14.1172 7.68896 13.9238 7.99219 13.8711C8.4668 13.7832 8.64697 13.5283 8.64697 13.001V12.2979C8.64697 11.1509 9.19629 10.6587 10.3477 10.6587C10.4795 10.6587 10.5894 10.6719 10.6816 10.7026C10.9277 10.7773 11.042 10.9487 11.042 11.1465C11.042 11.3706 10.9409 11.5068 10.73 11.564C10.6816 11.5771 10.6289 11.5859 10.5718 11.5947C10.0664 11.6475 9.86865 11.8584 9.86865 12.4473V13.3438C9.86865 13.9766 9.46436 14.3545 8.71729 14.438V14.5786C9.46436 14.6577 9.86865 15.0356 9.86865 15.6729V16.5737C9.86865 17.1582 10.0664 17.3735 10.5718 17.4263C10.6289 17.4307 10.6816 17.4395 10.7256 17.4526C10.9365 17.5098 11.042 17.646 11.042 17.8701C11.042 18.0811 10.9189 18.2568 10.6421 18.3271C10.5586 18.3491 10.4619 18.3623 10.3477 18.3623C9.19629 18.3623 8.64697 17.8701 8.64697 16.7231Z\" fill=\"#0F2F56\"/>\n                            <path d=\"M15.353 16.7231V16.0156C15.353 15.4883 15.5244 15.229 16.0078 15.1455C16.3154 15.0884 16.4561 14.8687 16.4561 14.5039C16.4561 14.1172 16.311 13.9238 16.0078 13.8711C15.5332 13.7832 15.353 13.5283 15.353 13.001V12.2979C15.353 11.1509 14.8037 10.6587 13.6523 10.6587C13.5205 10.6587 13.4106 10.6719 13.3184 10.7026C13.0723 10.7773 12.958 10.9487 12.958 11.1465C12.958 11.3706 13.0591 11.5068 13.27 11.564C13.3184 11.5771 13.3711 11.5859 13.4282 11.5947C13.9336 11.6475 14.1313 11.8584 14.1313 12.4473V13.3438C14.1313 13.9766 14.5356 14.3545 15.2827 14.438V14.5786C14.5356 14.6577 14.1313 15.0356 14.1313 15.6729V16.5737C14.1313 17.1582 13.9336 17.3735 13.4282 17.4263C13.3711 17.4307 13.3184 17.4395 13.2744 17.4526C13.0635 17.5098 12.958 17.646 12.958 17.8701C12.958 18.0811 13.0811 18.2568 13.3579 18.3271C13.4414 18.3491 13.5381 18.3623 13.6523 18.3623C14.8037 18.3623 15.353 17.8701 15.353 16.7231Z\" fill=\"#0F2F56\"/>\n                        </svg>";
            case 'md':
                return "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\">\n                            <path d=\"M19.5 20V9.12132C19.5 8.7235 19.342 8.34196 19.0607 8.06066L13.9393 2.93934C13.658 2.65804 13.2765 2.5 12.8787 2.5H6C5.17157 2.5 4.5 3.17157 4.5 4V20C4.5 20.8284 5.17157 21.5 6 21.5H18C18.8284 21.5 19.5 20.8284 19.5 20Z\" fill=\"white\"/>\n                            <path d=\"M12.8789 2C13.4093 2.00006 13.9179 2.21092 14.293 2.58594L19.4141 7.70703C19.7891 8.08205 19.9999 8.59074 20 9.12109V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2H12.8789ZM6 3C5.44772 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V9.12109C19 9.08039 18.9971 9.03999 18.9922 9H15C13.8954 9 13 8.10457 13 7V3.00781C12.96 3.00292 12.9196 3.00001 12.8789 3H6ZM14 7C14 7.55228 14.4477 8 15 8H18.293L14 3.70703V7Z\" fill=\"#707070\"/>\n                            <path d=\"M7.5 17.5H16.5\" stroke=\"#0F2F56\" stroke-linecap=\"round\"/>\n                            <path d=\"M14.499 10.5C14.7751 10.5 14.9989 10.7239 14.999 11L15 13H16.0518C16.5862 13 16.8544 13.6464 16.4766 14.0244L14.9248 15.5762C14.6905 15.8102 14.3104 15.8102 14.0762 15.5762L12.5244 14.0244C12.1466 13.6464 12.4147 13 12.9492 13H14L13.999 11C13.999 10.7241 14.2231 10.5003 14.499 10.5ZM10.7656 10.708C11.208 10.708 11.46 10.96 11.46 11.4053V14.5664C11.46 14.8828 11.2871 15.0645 10.9854 15.0645C10.6865 15.0645 10.5137 14.8828 10.5137 14.5664V12.3604H10.4932L9.55273 14.6865C9.47363 14.8857 9.34766 14.9766 9.14258 14.9766C8.9375 14.9766 8.80273 14.8857 8.72656 14.6865L7.78906 12.3604H7.76562V14.5664C7.76562 14.8828 7.59277 15.0645 7.29395 15.0645C6.99219 15.0645 6.81934 14.8828 6.81934 14.5664V11.4053C6.81934 10.9629 7.07129 10.708 7.5166 10.708C7.8916 10.708 8.09375 10.8604 8.24609 11.2559L9.12793 13.4883H9.15137L10.0303 11.2559C10.1855 10.8604 10.3877 10.708 10.7656 10.708Z\" fill=\"#0F2F56\"/>\n                        </svg>";
            case 'txt':
                return "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\">\n                            <path d=\"M19.5 20V9.12132C19.5 8.7235 19.342 8.34196 19.0607 8.06066L13.9393 2.93934C13.658 2.65804 13.2765 2.5 12.8787 2.5H6C5.17157 2.5 4.5 3.17157 4.5 4V20C4.5 20.8284 5.17157 21.5 6 21.5H18C18.8284 21.5 19.5 20.8284 19.5 20Z\" fill=\"white\"/>\n                            <path d=\"M12.8789 2C13.4093 2.00006 13.9179 2.21092 14.293 2.58594L19.4141 7.70703C19.7891 8.08205 19.9999 8.59074 20 9.12109V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2H12.8789ZM6 3C5.44772 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V9.12109C19 9.08039 18.9971 9.03999 18.9922 9H15C13.8954 9 13 8.10457 13 7V3.00781C12.96 3.00292 12.9196 3.00001 12.8789 3H6ZM14 7C14 7.55228 14.4477 8 15 8H18.293L14 3.70703V7Z\" fill=\"#707070\"/>\n                            <path d=\"M16.5 17C16.7761 17 17 17.2239 17 17.5C17 17.7761 16.7761 18 16.5 18H7.5C7.22386 18 7 17.7761 7 17.5C7 17.2239 7.22386 17 7.5 17H16.5ZM16.5 14C16.7761 14 17 14.2239 17 14.5C17 14.7761 16.7761 15 16.5 15H7.5C7.22386 15 7 14.7761 7 14.5C7 14.2239 7.22386 14 7.5 14H16.5ZM16.5 11C16.7761 11 17 11.2239 17 11.5C17 11.7761 16.7761 12 16.5 12H7.5C7.22386 12 7 11.7761 7 11.5C7 11.2239 7.22386 11 7.5 11H16.5Z\" fill=\"#0F2F56\"/>\n                        </svg>";
            case 'js':
            case 'ts':
            case 'css':
            case 'scss':
                return "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\">\n                            <path d=\"M19.5 20V9.12132C19.5 8.7235 19.342 8.34196 19.0607 8.06066L13.9393 2.93934C13.658 2.65804 13.2765 2.5 12.8787 2.5H6C5.17157 2.5 4.5 3.17157 4.5 4V20C4.5 20.8284 5.17157 21.5 6 21.5H18C18.8284 21.5 19.5 20.8284 19.5 20Z\" fill=\"white\"/>\n                            <path d=\"M12.8789 2C13.4093 2.00006 13.9179 2.21092 14.293 2.58594L19.4141 7.70703C19.7891 8.08205 19.9999 8.59074 20 9.12109V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2H12.8789ZM6 3C5.44772 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V9.12109C19 9.08039 18.9971 9.03999 18.9922 9H15C13.8954 9 13 8.10457 13 7V3.00781C12.96 3.00292 12.9196 3.00001 12.8789 3H6ZM14 7C14 7.55228 14.4477 8 15 8H18.293L14 3.70703V7Z\" fill=\"#707070\"/>\n                            <path d=\"M10.5 11.5L8 14L10.5 16.5\" stroke=\"#0F2F56\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                            <path d=\"M13.5 11.5L16 14L13.5 16.5\" stroke=\"#0F2F56\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                        </svg>";
            case 'mp3':
            case 'wma':
            case 'flac':
            case 'wav':
            case 'm4a':
                return "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\">\n                            <path d=\"M19.5 20V9.12132C19.5 8.7235 19.342 8.34196 19.0607 8.06066L13.9393 2.93934C13.658 2.65804 13.2765 2.5 12.8787 2.5H6C5.17157 2.5 4.5 3.17157 4.5 4V20C4.5 20.8284 5.17157 21.5 6 21.5H18C18.8284 21.5 19.5 20.8284 19.5 20Z\" fill=\"white\"/>\n                            <path d=\"M12.8789 2C13.4093 2.00006 13.9179 2.21092 14.293 2.58594L19.4141 7.70703C19.7891 8.08205 19.9999 8.59074 20 9.12109V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2H12.8789ZM6 3C5.44772 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V9.12109C19 9.08039 18.9971 9.03999 18.9922 9H15C13.8954 9 13 8.10457 13 7V3.00781C12.96 3.00292 12.9196 3.00001 12.8789 3H6ZM14 7C14 7.55228 14.4477 8 15 8H18.293L14 3.70703V7Z\" fill=\"#707070\"/>\n                            <path d=\"M11 16.9908V11.8195C11 11.4623 11 11.2837 11.0752 11.1762C11.1409 11.0823 11.2424 11.0196 11.3558 11.0028C11.4856 10.9836 11.6453 11.0635 11.9648 11.2232L13.1315 11.8066C13.2653 11.8734 13.3321 11.9069 13.381 11.9568C13.4242 12.0009 13.4571 12.0541 13.4772 12.1125C13.5 12.1785 13.5 12.2533 13.5 12.4028V14.9912M11 16.9908C11 17.6812 10.4404 18.2408 9.75 18.2408C9.05964 18.2408 8.5 17.6812 8.5 16.9908C8.5 16.3005 9.05964 15.7408 9.75 15.7408C10.4404 15.7408 11 16.3005 11 16.9908Z\" stroke=\"#0F2F56\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                        </svg>";
            case 'mp4':
            case 'webm':
                return "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\">\n                            <path d=\"M19.5 20V9.12132C19.5 8.7235 19.342 8.34196 19.0607 8.06066L13.9393 2.93934C13.658 2.65804 13.2765 2.5 12.8787 2.5H6C5.17157 2.5 4.5 3.17157 4.5 4V20C4.5 20.8284 5.17157 21.5 6 21.5H18C18.8284 21.5 19.5 20.8284 19.5 20Z\" fill=\"white\"/>\n                            <path d=\"M12.8789 2C13.4093 2.00006 13.9179 2.21092 14.293 2.58594L19.4141 7.70703C19.7891 8.08205 19.9999 8.59074 20 9.12109V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2H12.8789ZM6 3C5.44772 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V9.12109C19 9.08039 18.9971 9.03999 18.9922 9H15C13.8954 9 13 8.10457 13 7V3.00781C12.96 3.00292 12.9196 3.00001 12.8789 3H6ZM14 7C14 7.55228 14.4477 8 15 8H18.293L14 3.70703V7Z\" fill=\"#707070\"/>\n                            <path d=\"M13.4961 14.3688V15.9919C13.4961 16.8193 12.8262 17.4904 11.9988 17.4919L9.0027 17.4973C8.17322 17.4988 7.5 16.8268 7.5 15.9973V12.9966C7.5 12.1695 8.16949 11.4985 8.99658 11.4966L11.9927 11.4898C12.8224 11.4879 13.4961 12.16 13.4961 12.9898V14.3688ZM13.4961 14.3688L15.6547 12.3073C15.9728 12.0035 16.5 12.229 16.5 12.6689V16.2566C16.5 16.707 15.951 16.9278 15.6392 16.6027L13.4961 14.3688Z\" stroke=\"#0F2F56\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                        </svg>";
            case 'ppt':
            case 'pptx':
                return "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\">\n                            <path d=\"M19.5 20V9.12132C19.5 8.7235 19.342 8.34196 19.0607 8.06066L13.9393 2.93934C13.658 2.65804 13.2765 2.5 12.8787 2.5H6C5.17157 2.5 4.5 3.17157 4.5 4V20C4.5 20.8284 5.17157 21.5 6 21.5H18C18.8284 21.5 19.5 20.8284 19.5 20Z\" fill=\"white\"/>\n                            <path d=\"M12.8789 2C13.4093 2.00006 13.9179 2.21092 14.293 2.58594L19.4141 7.70703C19.7891 8.08205 19.9999 8.59074 20 9.12109V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2H12.8789ZM6 3C5.44772 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V9.12109C19 9.08039 18.9971 9.03999 18.9922 9H15C13.8954 9 13 8.10457 13 7V3.00781C12.96 3.00292 12.9196 3.00001 12.8789 3H6ZM14 7C14 7.55228 14.4477 8 15 8H18.293L14 3.70703V7Z\" fill=\"#707070\"/>\n                            <path d=\"M16.5 14C16.7761 14 17 14.2239 17 14.5C17 14.7761 16.7761 15 16.5 15H13.5C13.2239 15 13 14.7761 13 14.5C13 14.2239 13.2239 14 13.5 14H16.5ZM16.5 11C16.7761 11 17 11.2239 17 11.5C17 11.7761 16.7761 12 16.5 12H7.5C7.22386 12 7 11.7761 7 11.5C7 11.2239 7.22386 11 7.5 11H16.5Z\" fill=\"#0F2F56\"/>\n                            <path d=\"M10 13H4C2.89543 13 2 13.8954 2 15V21C2 22.1046 2.89543 23 4 23H10C11.1046 23 12 22.1046 12 21V15C12 13.8954 11.1046 13 10 13Z\" fill=\"#BD2D13\"/>\n                            <path d=\"M6.23283 19.046V21H5V15H6.90459C7.58652 15 8.10559 15.1632 8.46183 15.4895C8.82061 15.8159 9 16.2999 9 16.9414C9 17.6025 8.79898 18.1185 8.39695 18.4895C7.99746 18.8605 7.46056 19.046 6.78626 19.046H6.23283ZM6.23283 16.0377V18.0084H6.7481C7.05344 18.0084 7.28881 17.9205 7.4542 17.7448C7.6196 17.569 7.70229 17.3166 7.70229 16.9875C7.70229 16.6834 7.62087 16.4491 7.45801 16.2845C7.29771 16.1199 7.06744 16.0377 6.76717 16.0377H6.23283Z\" fill=\"white\"/>\n                        </svg>";
            default:
                return "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\">\n                            <path d=\"M19.5 20V9.12132C19.5 8.7235 19.342 8.34196 19.0607 8.06066L13.9393 2.93934C13.658 2.65804 13.2765 2.5 12.8787 2.5H6C5.17157 2.5 4.5 3.17157 4.5 4V20C4.5 20.8284 5.17157 21.5 6 21.5H18C18.8284 21.5 19.5 20.8284 19.5 20Z\" fill=\"white\"/>\n                            <path d=\"M12.8789 2C13.4093 2.00006 13.9179 2.21092 14.293 2.58594L19.4141 7.70703C19.7891 8.08205 19.9999 8.59074 20 9.12109V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2H12.8789ZM6 3C5.44772 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V9.12109C19 9.08039 18.9971 9.03999 18.9922 9H15C13.8954 9 13 8.10457 13 7V3.00781C12.96 3.00292 12.9196 3.00001 12.8789 3H6ZM14 7C14 7.55228 14.4477 8 15 8H18.293L14 3.70703V7Z\" fill=\"#707070\"/>\n                        </svg>";
        }
    };
    InterActiveChatBase.prototype.createFileTypeIcon = function (fileName) {
        var wrapper = this.createElement('div');
        wrapper.innerHTML = this.getFileTypeIcon(fileName);
        return wrapper.firstElementChild;
    };
    InterActiveChatBase.prototype.renderFailureAlert = function (viewWrapper, failureMessage, failureType, circleCloseIconClass, closeIconClass) {
        var _this = this;
        var alertElement = this.createElement('div', {
            className: 'e-upload-failure-alert',
            innerHTML: "\n                <span class=\"e-icons " + circleCloseIconClass + "\" aria-label=\"Upload failure\"></span>\n                <div class=\"e-failure-message " + failureType + "\">" + failureMessage + "</div>\n                <span class=\"e-icons " + closeIconClass + "\" role=\"button\" tabindex=\"0\" aria-label=\"Close\"></span>\n            "
        });
        EventHandler.add(alertElement, 'click', function () { _this.handleFailureAlertRemove(viewWrapper, alertElement); }, this);
        return alertElement;
    };
    InterActiveChatBase.prototype.handleFailureAlertRemove = function (viewWrapper, alertElement) {
        alertElement.classList.remove('e-show');
        EventHandler.remove(alertElement, 'click', this.handleFailureAlertRemove);
        if (viewWrapper && viewWrapper.contains(alertElement)) {
            viewWrapper.removeChild(alertElement);
        }
    };
    InterActiveChatBase.prototype.wireFooterEvents = function (footerTemplate) {
        if (this.sendIcon) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            EventHandler.add(this.sendIcon, 'click', this.onSendIconClick, this);
        }
        if (this.footer && !footerTemplate) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            EventHandler.add(this.footer, 'keydown', this.footerKeyHandler, this);
        }
        if (this.editableTextarea) {
            EventHandler.add(this.editableTextarea, 'focus', this.onFocusEditableTextarea, this);
            EventHandler.add(this.editableTextarea, 'blur', this.onBlurEditableTextarea, this);
            EventHandler.add(this.editableTextarea, 'paste', this.handlePaste, this);
            EventHandler.add(this.editableTextarea, 'input', this.handleInput, this);
            EventHandler.add(window, 'resize', this.updateFooterElementClass, this);
        }
    };
    InterActiveChatBase.prototype.unWireFooterEvents = function (footerTemplate) {
        if (this.sendIcon) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            EventHandler.remove(this.sendIcon, 'click', this.onSendIconClick);
        }
        if (this.footer && !footerTemplate) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            EventHandler.remove(this.footer, 'keydown', this.footerKeyHandler);
        }
        if (this.editableTextarea) {
            EventHandler.remove(this.editableTextarea, 'focus', this.onFocusEditableTextarea);
            EventHandler.remove(this.editableTextarea, 'blur', this.onBlurEditableTextarea);
            EventHandler.remove(this.editableTextarea, 'paste', this.handlePaste);
            EventHandler.remove(this.editableTextarea, 'input', this.handleInput);
            EventHandler.remove(window, 'resize', this.updateFooterElementClass);
        }
    };
    InterActiveChatBase.prototype.removeAndNullify = function (element) {
        if (element) {
            if (!isNOU(element.parentNode)) {
                remove(element);
            }
            else {
                element.innerHTML = '';
            }
        }
    };
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    InterActiveChatBase.prototype.destroyAndNullify = function (obj) {
        if (obj) {
            obj.destroy();
            obj = null;
        }
    };
    /**
     * Gets template content based on the template property value.
     *
     * @param {string | Function} template - Template property value.
     * @param {boolean} notCompile - Compile property value.
     * @returns {Function} - Return template function.
     * @hidden
     */
    InterActiveChatBase.prototype.getTemplateFunction = function (template, notCompile) {
        if (typeof template === 'string') {
            var content = '';
            try {
                var tempEle = select(template);
                if (tempEle) {
                    //Return innerHTML incase of jsrenderer script else outerHTML
                    content = tempEle.tagName === 'SCRIPT' ? tempEle.innerHTML : tempEle.outerHTML;
                    notCompile = false;
                }
                else {
                    content = template;
                }
            }
            catch (e) {
                content = template;
            }
            return notCompile ? content : compile(content);
        }
        else {
            /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
            return compile(template);
        }
    };
    /**
     * This method is abstract member of the Component<HTMLElement>.
     *
     * @param  {InterActiveChatBaseModel} newProp - Specifies new properties
     * @param  {InterActiveChatBaseModel} oldProp - Specifies old properties
     * @private
     * @returns {void}
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
    InterActiveChatBase.prototype.onPropertyChanged = function (newProp, oldProp) {
    };
    __decorate([
        Event()
    ], InterActiveChatBase.prototype, "created", void 0);
    InterActiveChatBase = __decorate([
        NotifyPropertyChanges
    ], InterActiveChatBase);
    return InterActiveChatBase;
}(Component));
export { InterActiveChatBase };
