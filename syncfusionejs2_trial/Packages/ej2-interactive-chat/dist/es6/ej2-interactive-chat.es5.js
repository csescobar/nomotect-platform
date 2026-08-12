import { Property, ChildProperty, Collection, Event, isNullOrUndefined, formatUnit, removeClass, addClass, attributes, EventHandler, append, remove, select, compile, NotifyPropertyChanges, Component, Complex, getUniqueID, L10n, SanitizeHtmlHelper, Internationalization, createElement } from '@syncfusion/ej2-base';
import { Toolbar } from '@syncfusion/ej2-navigations';
import { ButtonSettings, TooltipSettings, SpeechToText, Uploader } from '@syncfusion/ej2-inputs';
import { MarkdownConverter } from '@syncfusion/ej2-markdown-converter';
import { Fab } from '@syncfusion/ej2-buttons';
import { createSpinner, showSpinner, hideSpinner, Popup } from '@syncfusion/ej2-popups';
import { DropDownButton } from '@syncfusion/ej2-splitbuttons';
import { Mention } from '@syncfusion/ej2-dropdowns';
import { Timeline, TimelineOrientation } from '@syncfusion/ej2-layouts';

var __extends = (undefined && undefined.__extends) || (function () {
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Represents a toolbar item model in the component.
 */
var ToolbarItem = /** @__PURE__ @class */ (function (_super) {
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
/**
 * Represents the settings for the toolbar in the component.
 */
var ToolbarSettings = /** @__PURE__ @class */ (function (_super) {
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
/**
 * ChatBase component act as base class.
 */
var InterActiveChatBase = /** @__PURE__ @class */ (function (_super) {
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
        element.style.width = !isNullOrUndefined(width) ? formatUnit(width) : element.style.width;
        element.style.height = !isNullOrUndefined(height) ? formatUnit(height) : element.style.height;
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
        if (isNullOrUndefined(textareaObj)) {
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
        if (isNullOrUndefined(this.editableTextarea)) {
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
            if (!isNullOrUndefined(element.parentNode)) {
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

var __extends$1 = (undefined && undefined.__extends) || (function () {
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
var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Specifies the type of footer.
 */
var ToolbarPosition;
(function (ToolbarPosition) {
    /**
     * Displays the toolbar inline with the content.
     */
    ToolbarPosition["Inline"] = "Inline";
    /**
     * Displays the toolbar at the bottom of the edit area.
     */
    ToolbarPosition["Bottom"] = "Bottom";
})(ToolbarPosition || (ToolbarPosition = {}));
/**
 * AIBase component act as base class.
 */
var AIAssistBase = /** @__PURE__ @class */ (function (_super) {
    __extends$1(AIAssistBase, _super);
    function AIAssistBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This method is abstract member of the Component<HTMLElement>.
     *
     * @private
     * @returns {void}
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    AIAssistBase.prototype.preRender = function () {
    };
    /**
     * This method is abstract member of the Component<HTMLElement>.
     *
     * @private
     * @returns {string} - It returns the current module name.
     */
    AIAssistBase.prototype.getModuleName = function () {
        return 'aiAssistBase';
    };
    /**
     * This method is abstract member of the Component<HTMLElement>.
     *
     * @private
     * @returns {string} - It returns the persisted data.
     */
    AIAssistBase.prototype.getPersistData = function () {
        return this.addOnPersist([]);
    };
    /**
     * This method is abstract member of the Component<HTMLElement>.
     *
     * @private
     * @returns {void}
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    AIAssistBase.prototype.render = function () {
    };
    // Blur only when focus truly leaves the wrapper subtree.
    // Use FocusEvent for focusout. Do NOT blur on icon interaction if you want the caret to stay.
    AIAssistBase.prototype.onFooterIconsFocusOut = function (e) {
        var wrapper = e.currentTarget;
        var editable = this.editableTextarea;
        var next = e.relatedTarget;
        if (!editable) {
            return;
        }
        // Only blur when focus moves outside the entire wrapper
        if (!next || !wrapper.contains(next)) {
            // If you want the caret to remain even when leaving, remove this blur.
            editable.blur();
        }
    };
    // Focus the editable when clicking/tapping the empty area of the wrapper.
    // Do not cancel the event; do not use pointer capture, so toolbar icon clicks work.
    AIAssistBase.prototype.onFooterIconsPointerDown = function (e) {
        var _this = this;
        var editable = this.editableTextarea;
        var target = e.target;
        if (!editable) {
            return;
        }
        var selectors = '';
        if (this.getModuleName() === 'aiassistview') {
            selectors = '.e-tbar-btn, .e-assist-send, .e-assist-attachment-icon, .e-assist-clear-icon, button, [role="button"], input, [contenteditable="false"]';
        }
        else {
            selectors = '.e-tbar-btn, .e-send, button, [role="button"], input';
        }
        // If the press is on actionable elements (toolbar buttons/icons), let them handle it.
        if (target.closest(selectors)) {
            return;
        }
        // Focus and place caret at end
        requestAnimationFrame(function () {
            editable.focus();
            _this.setFocusAtEnd(editable);
        });
    };
    // Optional: support click as a fallback (some environments may not dispatch pointer events)
    AIAssistBase.prototype.onFooterIconsClick = function (e) {
        var _this = this;
        var editable = this.editableTextarea;
        var target = e.target;
        if (!editable) {
            return;
        }
        var selectors = '';
        if (this.getModuleName() === 'aiassistview') {
            selectors = '.e-tbar-btn, .e-assist-send, .e-assist-attachment-icon, .e-assist-clear-icon, button, [role="button"], input, [contenteditable="false"]';
        }
        else {
            selectors = '.e-tbar-btn, .e-send, .e-stop-rectangle, button, [role="button"], input';
        }
        if (target.closest(selectors)) {
            return;
        }
        if (document.activeElement !== editable) {
            requestAnimationFrame(function () {
                editable.focus();
                _this.setFocusAtEnd(editable);
            });
        }
    };
    AIAssistBase.prototype.updateFooterType = function (toolbarPosition) {
        if (toolbarPosition.toLocaleLowerCase() === 'bottom') {
            this.footer.classList.remove('e-toolbar-inline');
            this.footer.classList.add('e-toolbar-bottom');
        }
        else {
            this.footer.classList.remove('e-toolbar-bottom');
            this.footer.classList.add('e-toolbar-inline');
        }
    };
    AIAssistBase.prototype.updateFooterClass = function (footerTemplate) {
        var footerClass = "e-footer " + (footerTemplate ? 'e-footer-template' : '');
        this.footer.className = footerClass;
    };
    /**
     * Called if any of the property value is changed.
     *
     * @param  {AIAssistBaseModel} newProp - Specifies new properties
     * @param  {AIAssistBaseModel} oldProp - Specifies old properties
     * @returns {void}
     * @private
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
    AIAssistBase.prototype.onPropertyChanged = function (newProp, oldProp) {
    };
    __decorate$1([
        Property(false)
    ], AIAssistBase.prototype, "enableStreaming", void 0);
    AIAssistBase = __decorate$1([
        NotifyPropertyChanges
    ], AIAssistBase);
    return AIAssistBase;
}(InterActiveChatBase));

var __extends$2 = (undefined && undefined.__extends) || (function () {
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
var __assign = (undefined && undefined.__assign) || function () {
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
var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ASSISTHEADER = 'e-aiassist-header-text e-assist-view-header';
/* eslint-enable @typescript-eslint/no-misused-new, no-redeclare */
/**
 * The prompts property maps the list of the prompts and binds the data to the suggestions.
 */
var Prompt = /** @__PURE__ @class */ (function (_super) {
    __extends$2(Prompt, _super);
    function Prompt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate$2([
        Property(null)
    ], Prompt.prototype, "prompt", void 0);
    __decorate$2([
        Property('')
    ], Prompt.prototype, "response", void 0);
    __decorate$2([
        Property(null)
    ], Prompt.prototype, "isResponseHelpful", void 0);
    __decorate$2([
        Property(null)
    ], Prompt.prototype, "attachedFiles", void 0);
    __decorate$2([
        Property(null)
    ], Prompt.prototype, "regeneratedResponses", void 0);
    __decorate$2([
        Property(null)
    ], Prompt.prototype, "blocks", void 0);
    return Prompt;
}(ChildProperty));
/**
 * Specifies the type of assist view.
 */
var AssistViewType;
(function (AssistViewType) {
    /**
     * Represents the default assist view type.
     */
    AssistViewType["Assist"] = "Assist";
    /**
     * Represents a custom assist view type.
     */
    AssistViewType["Custom"] = "Custom";
})(AssistViewType || (AssistViewType = {}));
/**
 * The assistView property maps the customized AiAssistView.
 */
var AssistView = /** @__PURE__ @class */ (function (_super) {
    __extends$2(AssistView, _super);
    function AssistView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate$2([
        Property('Assist')
    ], AssistView.prototype, "type", void 0);
    __decorate$2([
        Property('')
    ], AssistView.prototype, "name", void 0);
    __decorate$2([
        Property()
    ], AssistView.prototype, "iconCss", void 0);
    __decorate$2([
        Property()
    ], AssistView.prototype, "viewTemplate", void 0);
    return AssistView;
}(ChildProperty));
/**
 * Configuration settings for rendering Syncfusion Speech-to-Text in the AssistView footer.
 * This property holds the settings required to initialize and display the Speech-to-Text component.
 *
 */
var SpeechToTextSettings = /** @__PURE__ @class */ (function (_super) {
    __extends$2(SpeechToTextSettings, _super);
    function SpeechToTextSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate$2([
        Property(false)
    ], SpeechToTextSettings.prototype, "enable", void 0);
    __decorate$2([
        Property(true)
    ], SpeechToTextSettings.prototype, "allowInterimResults", void 0);
    __decorate$2([
        Property('en-US')
    ], SpeechToTextSettings.prototype, "lang", void 0);
    __decorate$2([
        Property(false)
    ], SpeechToTextSettings.prototype, "disabled", void 0);
    __decorate$2([
        Complex({}, ButtonSettings)
    ], SpeechToTextSettings.prototype, "buttonSettings", void 0);
    __decorate$2([
        Property(true)
    ], SpeechToTextSettings.prototype, "showTooltip", void 0);
    __decorate$2([
        Complex({}, TooltipSettings)
    ], SpeechToTextSettings.prototype, "tooltipSettings", void 0);
    __decorate$2([
        Property('')
    ], SpeechToTextSettings.prototype, "cssClass", void 0);
    __decorate$2([
        Property('')
    ], SpeechToTextSettings.prototype, "transcript", void 0);
    __decorate$2([
        Property('Inactive')
    ], SpeechToTextSettings.prototype, "listeningState", void 0);
    __decorate$2([
        Event()
    ], SpeechToTextSettings.prototype, "onStart", void 0);
    __decorate$2([
        Event()
    ], SpeechToTextSettings.prototype, "onStop", void 0);
    __decorate$2([
        Event()
    ], SpeechToTextSettings.prototype, "transcriptChanged", void 0);
    __decorate$2([
        Event()
    ], SpeechToTextSettings.prototype, "onError", void 0);
    return SpeechToTextSettings;
}(ChildProperty));
/**
 * Configuration settings for rendering Text-to-Speech in the AssistView.
 * This property holds the settings required to control speech synthesis behavior.
 *
 */
var TextToSpeechSettings = /** @__PURE__ @class */ (function (_super) {
    __extends$2(TextToSpeechSettings, _super);
    function TextToSpeechSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate$2([
        Property('en-US')
    ], TextToSpeechSettings.prototype, "language", void 0);
    __decorate$2([
        Property(1)
    ], TextToSpeechSettings.prototype, "speechPitch", void 0);
    __decorate$2([
        Property(1)
    ], TextToSpeechSettings.prototype, "speechRate", void 0);
    __decorate$2([
        Property('')
    ], TextToSpeechSettings.prototype, "inputText", void 0);
    __decorate$2([
        Property(null)
    ], TextToSpeechSettings.prototype, "voice", void 0);
    __decorate$2([
        Property(1)
    ], TextToSpeechSettings.prototype, "volume", void 0);
    return TextToSpeechSettings;
}(ChildProperty));
/**
 * Represents settings for managing file attachments in the AI Assist View.
 * Includes configuration for URLs, file types, and size limitations.
 */
var AttachmentSettings = /** @__PURE__ @class */ (function (_super) {
    __extends$2(AttachmentSettings, _super);
    function AttachmentSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate$2([
        Property('')
    ], AttachmentSettings.prototype, "saveUrl", void 0);
    __decorate$2([
        Property('')
    ], AttachmentSettings.prototype, "removeUrl", void 0);
    __decorate$2([
        Property('')
    ], AttachmentSettings.prototype, "allowedFileTypes", void 0);
    __decorate$2([
        Property(2000000)
    ], AttachmentSettings.prototype, "maxFileSize", void 0);
    __decorate$2([
        Property(10)
    ], AttachmentSettings.prototype, "maximumCount", void 0);
    __decorate$2([
        Property('')
    ], AttachmentSettings.prototype, "attachmentTemplate", void 0);
    __decorate$2([
        Event()
    ], AttachmentSettings.prototype, "attachmentClick", void 0);
    return AttachmentSettings;
}(ChildProperty));
/**
 * The promptToolbarSettings property maps the list of the promptToolbarSettings and binds the data to the prompt.
 */
var PromptToolbarSettings = /** @__PURE__ @class */ (function (_super) {
    __extends$2(PromptToolbarSettings, _super);
    function PromptToolbarSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate$2([
        Property('100%')
    ], PromptToolbarSettings.prototype, "width", void 0);
    __decorate$2([
        Collection([], ToolbarItem)
    ], PromptToolbarSettings.prototype, "items", void 0);
    __decorate$2([
        Event()
    ], PromptToolbarSettings.prototype, "itemClicked", void 0);
    return PromptToolbarSettings;
}(ChildProperty));
/**
 * The responseToolbarSettings property maps the list of the responseToolbarSettings and binds the data to the output items.
 */
var ResponseToolbarSettings = /** @__PURE__ @class */ (function (_super) {
    __extends$2(ResponseToolbarSettings, _super);
    function ResponseToolbarSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate$2([
        Property('100%')
    ], ResponseToolbarSettings.prototype, "width", void 0);
    __decorate$2([
        Collection([], ToolbarItem)
    ], ResponseToolbarSettings.prototype, "items", void 0);
    __decorate$2([
        Event()
    ], ResponseToolbarSettings.prototype, "itemClicked", void 0);
    return ResponseToolbarSettings;
}(ChildProperty));
/**
 * Represents a toolbar item model in the AIAssistview component.
 */
var FooterToolbarSettings = /** @__PURE__ @class */ (function (_super) {
    __extends$2(FooterToolbarSettings, _super);
    function FooterToolbarSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate$2([
        Property('Inline')
    ], FooterToolbarSettings.prototype, "toolbarPosition", void 0);
    __decorate$2([
        Collection([], ToolbarItem)
    ], FooterToolbarSettings.prototype, "items", void 0);
    __decorate$2([
        Event()
    ], FooterToolbarSettings.prototype, "itemClick", void 0);
    return FooterToolbarSettings;
}(ChildProperty));
/**
 * The `AIAssistView` component is designed to enhance user interaction by integrating AI driven assistance features.
 * It provides a seamless interface for incorporating suggestions & AI responses.
 *
 * ```html
 *  <div id='defaultAIAssistView'></div>
 * ```
 * ```typescript
 *  let aiAssistObj: AIAssistView = new AIAssistView();
 *  aiAssistObj.appendTo('#defaultAIAssistView');
 * ```
 */
var AIAssistView = /** @__PURE__ @class */ (function (_super) {
    __extends$2(AIAssistView, _super);
    /**
     * Constructor for creating the component
     *
     * @param {AIAssistViewModel} options - Specifies the AIAssistViewModel model.
     * @param {string | HTMLElement} element - Specifies the element to render as component.
     * @private
     */
    function AIAssistView(options, element) {
        var _this = _super.call(this, options, element) || this;
        _this.toolbarItems = [];
        _this.displayContents = [];
        _this.preTagElements = [];
        _this.uploadedFiles = [];
        _this.sendToolbarItem = null;
        _this.clearToolbarItem = null;
        _this.attachmentToolbarItem = null;
        _this.speechToTextToolbarItem = null;
        _this.latestResponseMinHeight = null;
        _this.currentUtterance = null;
        _this.regeneratedResponses = new Map();
        _this.regeneratedBlocks = new Map();
        _this.currentRegeneratedIndex = new Map();
        _this.originalResponses = new Map();
        _this.originalBlocks = new Map();
        _this.isRegenerating = false;
        _this.regeneratingPromptIndex = -1;
        _this.blockIndex = 0;
        _this.lastRenderedBlockCount = 0;
        _this.registeredTools = new Map();
        return _this;
    }
    /**
     * Enhanced setup: Enforce viewport on .e-content + dynamic min-height on latest .e-output-container.
     * Preserves structure; only inline styles on existing elements. Scrolls to prompt top.
     * Also applies during loading by sizing the skeleton container when the final response item
     * isn't rendered yet.
     *
     * @private
     * @returns {void}
     */
    AIAssistView.prototype.setupViewportFilling = function () {
        if (!this.contentWrapper || this.prompts.length === 0) {
            return;
        }
        var lastIndex = this.prompts.length - 1;
        var allResponseItems = Array.from(this.contentWrapper.querySelectorAll('.e-output-container[id^="e-response-item_"]'));
        // Set auto for all previous .e-output-container (as in example)
        for (var i = 0; i < allResponseItems.length; i++) {
            var index = parseInt(allResponseItems[i].id.split('_')[1], 10);
            if (index < lastIndex) {
                allResponseItems[i].style.minHeight = 'auto';
                var footerEle = allResponseItems[i].querySelector('.e-content-footer');
                if (footerEle) {
                    footerEle.classList.remove('e-assist-toolbar-active');
                }
            }
        }
        // Compute dynamic min-height based on viewport and fixed chrome (header/footer/paddings)
        var contentWrapperHeight = this.contentWrapper.clientHeight;
        var promptEle = this.contentWrapper.querySelector("#e-prompt-item_" + lastIndex);
        var promptHeight = promptEle ? promptEle.offsetHeight : 0;
        // Get the actual height of uploaded files if they exist
        var promptFilesEle = promptEle ? promptEle.querySelector('.e-prompt-uploaded-files') : null;
        var promptFilesHeight = promptFilesEle ? promptFilesEle.offsetHeight : 0;
        // Get the actual height of prompt toolbar if it exists
        var promptToolbarEle = promptEle ? promptEle.querySelector('.e-prompt-toolbar') : null;
        var promptToolbarHeight = promptToolbarEle ? promptToolbarEle.offsetHeight : 0;
        // Get the actual height of response toolbar if it exists
        var lastResponseEle = this.contentWrapper.querySelector("#e-response-item_" + lastIndex);
        var responseToolbarEle = lastResponseEle ? lastResponseEle.querySelector('.e-response-toolbar') : null;
        var responseToolbarHeight = responseToolbarEle ? responseToolbarEle.offsetHeight : 0;
        // Check if suggestions are visible - if so, reserve space for them
        var suggestionsHeight = (this.suggestionsElement && !this.suggestionsElement.hidden) ?
            this.suggestionsElement.offsetHeight : 0;
        var scrollToBottomBtnHeight = 0;
        if (this.downArrowIcon.element) {
            scrollToBottomBtnHeight = this.downArrowIcon.element.offsetHeight;
        }
        // Calculate minHeight to fill the content wrapper viewport completely
        var dynamicMinHeight = Math.max(160, contentWrapperHeight - promptHeight - promptFilesHeight - promptToolbarHeight -
            responseToolbarHeight - suggestionsHeight - scrollToBottomBtnHeight);
        this.latestResponseMinHeight = dynamicMinHeight;
        // Apply to the actual latest response container if available; otherwise apply to loading skeleton
        if (lastResponseEle) {
            lastResponseEle.style.minHeight = dynamicMinHeight + "px";
        }
        else if (this.skeletonContainer) {
            // Ensure the loader occupies the viewport so previous chats don't remain visible while loading
            this.skeletonContainer.style.minHeight = dynamicMinHeight + "px";
        }
    };
    AIAssistView.prototype.renderContentElement = function () {
        if (this.enableScrollToBottom) {
            var scrollDownButton = this.createElement('button', { id: this.element.id + "-scrollDownButton", className: 'e-scroll-down-btn' });
            this.downArrowIcon = new Fab({
                iconCss: 'e-icons e-assist-scroll-down',
                position: 'BottomCenter',
                target: this.outputElement.parentElement,
                isPrimary: false,
                visible: false
            });
            this.downArrowIcon.appendTo(scrollDownButton);
        }
    };
    AIAssistView.prototype.handleScroll = function () {
        var atBottom = this.checkScrollAtBottom(this.contentWrapper, 50);
        this.toggleScrollIcon(atBottom);
    };
    // Toggle button visibility (show if not at bottom and enableScrollToBottom=true)
    AIAssistView.prototype.toggleScrollIcon = function (atBottom) {
        if (this.isResponseRequested || !this.enableScrollToBottom || !this.downArrowIcon) {
            return;
        }
        this.downArrowIcon.visible = !atBottom;
        this.downArrowIcon.dataBind();
    };
    // Click handler to scroll to bottom
    AIAssistView.prototype.scrollBtnClick = function () {
        if (this.enableScrollToBottom) {
            this.scrollToBottom();
        }
    };
    /**
     * Initialize the event handler
     *
     * @private
     * @returns {void}
     */
    AIAssistView.prototype.preRender = function () {
        if (!this.element.id) {
            this.element.id = getUniqueID('e-' + this.getModuleName());
        }
    };
    AIAssistView.prototype.getDirective = function () {
        return 'EJS-AIASSISTVIEW';
    };
    /**
     * To get component name.
     *
     * @returns {string} - It returns the current module name.
     * @private
     */
    AIAssistView.prototype.getModuleName = function () {
        return 'aiassistview';
    };
    /**
     * Get the properties to be maintained in the persisted state.
     *
     * @private
     * @returns {string} - It returns the persisted data.
     */
    AIAssistView.prototype.getPersistData = function () {
        return this.addOnPersist([]);
    };
    AIAssistView.prototype.render = function () {
        this.initializeLocale();
        this.renderPromptView();
    };
    AIAssistView.prototype.renderPromptView = function () {
        this.setDimension(this.element, this.width, this.height);
        this.renderViews();
        this.renderToolbar();
        this.updateFooterElementClass();
        this.wireEvents();
    };
    AIAssistView.prototype.renderToolbar = function () {
        this.updateHeaderToolbar();
        if (this.assistViewTemplateIndex < 0) {
            this.displayContents.unshift(this.contentWrapper);
        }
        else {
            this.displayContents.unshift(this.assistCustomSection);
        }
        this.previousElement = this.displayContents[this.activeView];
        this.renderHeaderToolbar();
        this.viewWrapper = this.element.querySelector('.e-view-content');
        this.updateActiveView();
        this.addCssClass(this.element, this.cssClass);
        this.updateHeader(this.showHeader, this.toolbarHeader, this.viewWrapper);
        this.aiAssistViewRendered = true;
        this.addRtlClass(this.element, this.enableRtl);
    };
    AIAssistView.prototype.renderViews = function () {
        this.assistViewTemplateIndex = -1;
        this.aiAssistViewRendered = false;
        this.isAssistView = false;
        this.isOutputRenderingStop = false;
        this.isResponseRequested = false;
        this.renderViewSections(this.element, 'e-view-header', 'e-view-content');
        var isAssistViewAssigned = false;
        var assistView;
        var customViewTemplate;
        var customViewCount = 1;
        if (this.views.length > 0) {
            for (var index = 0; index < this.views.length; index++) {
                if (this.views[parseInt(index.toString(), 10)].type.toLocaleLowerCase() === 'assist' && !isAssistViewAssigned) {
                    assistView = {
                        text: this.views[parseInt(index.toString(), 10)].name || 'AI Assist',
                        prefixIcon: this.views[parseInt(index.toString(), 10)].iconCss || 'e-icons e-assistview-icon',
                        cssClass: ASSISTHEADER,
                        htmlAttributes: { 'data-index': this.element.id + '_view_0' }
                    };
                    this.toolbarItems.unshift(assistView);
                    if (this.views[parseInt(index.toString(), 10)].viewTemplate) {
                        this.assistViewTemplateIndex = index;
                    }
                    isAssistViewAssigned = true;
                    this.isAssistView = true;
                }
                else if (this.views[parseInt(index.toString(), 10)].type.toLocaleLowerCase() === 'custom') {
                    customViewTemplate = this.createElement('div', { className: 'e-customview-content-section-' + customViewCount + ' e-custom-view' });
                    this.getContextObject('customViewTemplate', customViewTemplate, -1, index);
                    this.displayContents.push(customViewTemplate);
                    this.toolbarItems.push({
                        text: this.views[parseInt(index.toString(), 10)].name || '',
                        prefixIcon: this.views[parseInt(index.toString(), 10)].iconCss || '',
                        cssClass: 'e-aiassist-header-text e-custom-view-header',
                        htmlAttributes: { 'data-index': this.element.id + '_view_' + customViewCount.toString() }
                    });
                    customViewCount++;
                }
            }
        }
        if (this.views.length === 0 || !isAssistViewAssigned) {
            assistView = {
                text: 'AI Assist',
                prefixIcon: 'e-icons e-assistview-icon',
                cssClass: ASSISTHEADER,
                htmlAttributes: { 'data-index': this.element.id + '_view_0' }
            };
            this.toolbarItems.unshift(assistView);
            isAssistViewAssigned = true;
        }
        if (this.assistViewTemplateIndex >= 0 && this.views[this.assistViewTemplateIndex].viewTemplate) {
            this.assistCustomSection = this.createElement('div', { attrs: { class: 'e-assistview-content-section', 'data-index': this.element.id + '_view_0' } });
            this.getContextObject('assistViewTemplate', this.assistCustomSection, -1, this.assistViewTemplateIndex);
        }
        else {
            this.renderDefaultView();
        }
    };
    AIAssistView.prototype.renderHeaderToolbar = function () {
        var _this = this;
        this.toolbar = new Toolbar({
            items: this.toolbarItems,
            height: '100%',
            enableRtl: this.enableRtl,
            clicked: function (args) {
                var eventItemArgs = {
                    type: args.item.type,
                    text: args.item.text,
                    iconCss: args.item.prefixIcon,
                    cssClass: args.item.cssClass,
                    tooltip: args.item.tooltipText,
                    template: args.item.template,
                    disabled: args.item.disabled,
                    visible: args.item.visible,
                    align: args.item.align,
                    tabIndex: args.item.tabIndex
                };
                var eventArgs = {
                    item: eventItemArgs,
                    event: args.originalEvent,
                    cancel: false
                };
                if (_this.toolbarSettings.itemClicked) {
                    _this.toolbarSettings.itemClicked.call(_this, eventArgs);
                }
                if (!eventArgs.cancel) {
                    if (args.item.htmlAttributes) {
                        var currentIndex = parseInt(args.item.htmlAttributes['data-index'].split(_this.element.id + '_view_')[1], 10);
                        if (currentIndex !== _this.activeView) {
                            var prevOnChange = _this.isProtectedOnChange;
                            _this.isProtectedOnChange = true;
                            var previousIndex = _this.getIndex(_this.activeView);
                            _this.activeView = parseInt(args.item.htmlAttributes['data-index'].split(_this.element.id + '_view_')[1], 10);
                            _this.updateActiveView(previousIndex);
                            _this.isProtectedOnChange = prevOnChange;
                        }
                    }
                }
            }
        });
        this.toolbarHeader = this.element.querySelector('.e-view-header');
        var toolbarEle = this.createElement('div');
        this.toolbar.appendTo(toolbarEle);
        this.toolbar.element.setAttribute('aria-label', 'assist-view-toolbar-header');
        this.toolbarHeader.appendChild(toolbarEle);
    };
    AIAssistView.prototype.updateHeaderToolbar = function () {
        if (this.toolbarSettings.items.length > 0) {
            /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
            var pushToolbar = this.toolbarSettings.items.map(function (item) { return ({
                type: item.type,
                template: item.template,
                disabled: item.disabled,
                cssClass: item.cssClass,
                visible: item.visible,
                tooltipText: item.tooltip,
                prefixIcon: item.iconCss,
                text: item.text,
                align: item.align,
                tabIndex: item.tabIndex
            }); });
            this.toolbarItems = this.toolbarItems.concat(pushToolbar);
        }
    };
    AIAssistView.prototype.getIndex = function (currentIndex) {
        return (((currentIndex) > (this.views.length - (this.isAssistView ? 1 : 0))) || (currentIndex < 0)) ?
            0 : currentIndex;
    };
    AIAssistView.prototype.updateActiveView = function (previousIndex) {
        var activeViewIndex = this.getIndex(this.activeView);
        if (!this.aiAssistViewRendered) {
            this.appendView(activeViewIndex);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if (this.toolbar.tbarEle[parseInt(activeViewIndex.toString(), 10)]) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                this.toolbar.tbarEle[parseInt(activeViewIndex.toString(), 10)].classList.add('e-active');
            }
        }
        else if (previousIndex !== activeViewIndex) {
            this.removePreviousView(previousIndex, activeViewIndex);
            this.appendView(activeViewIndex);
        }
        this.previousElement = this.displayContents[parseInt(activeViewIndex.toString(), 10)];
    };
    AIAssistView.prototype.appendView = function (activeViewIndex) {
        //updating the new view section according to the activeView property
        if (activeViewIndex === 0 && this.assistViewTemplateIndex < 0) {
            this.viewWrapper.append(this.contentWrapper, this.footer);
        }
        else if (activeViewIndex === 0 && this.assistViewTemplateIndex >= 0) {
            this.viewWrapper.append(this.assistCustomSection);
        }
        else {
            this.viewWrapper.append(this.displayContents[parseInt(activeViewIndex.toString(), 10)]);
        }
    };
    AIAssistView.prototype.removePreviousView = function (previousIndex, activeViewIndex) {
        // removing the previously binded element
        this.viewWrapper.removeChild(this.previousElement);
        if (previousIndex === 0 && this.assistViewTemplateIndex < 0) {
            this.viewWrapper.removeChild(this.footer);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (this.toolbar.tbarEle[parseInt(activeViewIndex.toString(), 10)]) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.toolbar.tbarEle[parseInt(activeViewIndex.toString(), 10)].classList.add('e-active');
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (previousIndex >= 0 && this.toolbar.tbarEle[parseInt(previousIndex.toString(), 10)]) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.toolbar.tbarEle[parseInt(previousIndex.toString(), 10)].classList.remove('e-active');
        }
    };
    AIAssistView.prototype.renderDefaultView = function () {
        var viewWrapper = this.element.querySelector('.e-view-content');
        this.createViewComponents(viewWrapper);
        this.contentWrapper = this.element.querySelector('.e-views');
        this.contentWrapper.setAttribute('data-index', this.element.id + '_view_0');
        var contentContainer = this.element.querySelector('.e-view-container');
        this.content = this.getElement('contentContainer');
        this.getFooter();
        this.updateFooterClass(this.footerTemplate);
        this.renderContent();
        this.renderAssistViewFooter();
        this.updateBannerView(contentContainer);
        contentContainer.append(this.content);
        this.checkIsScrollable();
    };
    AIAssistView.prototype.checkIsScrollable = function () {
        if (this.enableScrollToBottom) {
            this.downArrowIcon.visible = this.contentWrapper.scrollHeight > this.contentWrapper.clientHeight;
        }
    };
    AIAssistView.prototype.initializeLocale = function () {
        this.l10n = new L10n('aiassistview', {
            stopResponseText: 'Stop Responding',
            fileSizeFailure: 'Upload failed: {0} files exceeded the maximum size',
            fileCountFailure: 'Upload limit reached: Maximum {0} files allowed. Remove extra files to proceed uploading',
            send: 'Send',
            attachments: 'Attach File',
            clear: 'Clear',
            readAloud: 'Read Aloud',
            stopAudio: 'Stop',
            previousResponse: 'Previous',
            nextResponse: 'Next'
        }, this.locale);
        this.l10n.setLocale(this.locale);
    };
    AIAssistView.prototype.toggleStopRespondingButton = function (show) {
        var sendIconClass = 'e-assist-send';
        var stopIconClass = 'e-assist-stop';
        var stopTooltip = this.l10n.getConstant('stopResponseText');
        if (!this.footerTemplate) {
            var currentIconClass_1 = show ? sendIconClass : stopIconClass;
            var newIconClass = show ? stopIconClass : sendIconClass;
            var currentItem = this.footerToolbarEle.items.find(function (item) { return item.prefixIcon === "e-icons " + currentIconClass_1; });
            var itemIndex = this.footerToolbarEle.items.indexOf(currentItem);
            var currentToolbarItemElement = this.footerToolbarEle.element.querySelector(".e-tbar-btn ." + currentIconClass_1) ?
                this.footerToolbarEle.element.querySelector(".e-tbar-btn ." + currentIconClass_1).closest('.e-toolbar-item') : null;
            if (itemIndex !== -1 && currentItem && currentToolbarItemElement) {
                var newItem = {
                    prefixIcon: "e-icons " + newIconClass,
                    align: 'Right',
                    tooltipText: show ? stopTooltip : undefined
                };
                this.footerToolbarEle.addItems([newItem], itemIndex);
                this.footerToolbarEle.removeItems(currentToolbarItemElement);
            }
            this.refreshTextareaUI();
        }
        else {
            var currentIcon = this.footer.querySelector("." + (show ? sendIconClass : stopIconClass));
            if (currentIcon) {
                currentIcon.classList.replace(show ? sendIconClass : stopIconClass, show ? stopIconClass : sendIconClass);
                if (show) {
                    currentIcon.title = stopTooltip;
                    EventHandler.add(currentIcon, 'click', this.respondingStopper, this);
                }
                else {
                    currentIcon.removeAttribute('title');
                    EventHandler.remove(currentIcon, 'click', this.respondingStopper);
                }
            }
        }
    };
    AIAssistView.prototype.hasStopResponseButton = function () {
        if (!this.footerToolbarEle && this.footerTemplate) {
            return this.footer.querySelector('.e-assist-stop') ? true : false;
        }
        else if (this.footerToolbarEle) {
            return this.footerToolbarEle.element.querySelector('.e-assist-stop') ? true : false;
        }
        return false;
    };
    AIAssistView.prototype.finalizeIncompleteThinkingBlocks = function () {
        var prevOnChange = this.isProtectedOnChange;
        this.isProtectedOnChange = true;
        // Step 1: Get last prompt index
        var lastPromptIndex = this.prompts.length - 1;
        if (lastPromptIndex < 0) {
            return;
        } // No prompts yet
        var lastPrompt = this.prompts[parseInt(lastPromptIndex.toString(), 10)];
        if (!lastPrompt.blocks || lastPrompt.blocks.length === 0) {
            return;
        } // No blocks
        // Step 2: Single-pass transform + check for incomplete thinking blocks
        var hasIncompleteThinking = false;
        var finalizedBlocks = lastPrompt.blocks.map(function (block) {
            if (block.blockType === 'thinking') {
                var thinkingBlock = block;
                // Track if this block is incomplete
                if (thinkingBlock.isActive ||
                    (thinkingBlock.stages && thinkingBlock.stages.some(function (s) { return s.status === 'inprogress'; }))) {
                    hasIncompleteThinking = true;
                }
                // Transform block
                return __assign({}, thinkingBlock, { isActive: false, stages: (thinkingBlock.stages || []).map(function (stage) { return (__assign({}, stage, { 
                        // Only change inProgress → failed; keep others
                        status: stage.status.toLowerCase() === 'inprogress' ? 'failed' : stage.status, iconCss: stage.status.toLowerCase() === 'inprogress'
                            ? 'e-icons e-close' // Error icon instead of progress
                            : stage.iconCss })); }) });
            }
            // Non-thinking blocks pass through unchanged
            return block;
        });
        if (!hasIncompleteThinking) {
            this.isProtectedOnChange = prevOnChange;
            return; // Nothing to finalize
        }
        // Step 3: Replace blocks in last prompt (immutable update)
        lastPrompt.blocks = finalizedBlocks;
        this.isProtectedOnChange = prevOnChange;
        // Step 4: Re-render existing response without adding new response
        // This updates the existing response with finalized blocks
        this.addPromptResponse({ blocks: finalizedBlocks });
    };
    AIAssistView.prototype.renderContent = function () {
        this.renderOutputContent();
        this.renderSuggestions(this.promptSuggestions, this.promptSuggestionsHeader, this.promptSuggestionItemTemplate, 'promptSuggestion', 'promptSuggestionItemTemplate', this.onSuggestionClick);
        this.renderContentElement();
        if (this.outputElement) {
            this.renderSkeleton();
        }
    };
    AIAssistView.prototype.renderOutputContent = function (isMethodCall) {
        var _this = this;
        this.outputElement = this.getElement('outputElement');
        if (this.responseToolbarSettings.items.length === 0) {
            var prevOnChange = this.isProtectedOnChange;
            this.isProtectedOnChange = true;
            this.responseToolbarSettings.items = [
                { iconCss: 'e-icons e-assist-copy', tooltip: 'Copy', cssClass: 'check' },
                { iconCss: 'e-icons e-assist-like', tooltip: 'Like' },
                { iconCss: 'e-icons e-assist-dislike', tooltip: 'Dislike' }
            ];
            this.isProtectedOnChange = prevOnChange;
        }
        if (this.prompts) {
            this.prompts.forEach(function (prompt, i) {
                if (!_this.originalResponses.has(i)) {
                    _this.originalResponses.set(i, prompt.response || '');
                    _this.originalBlocks.set(i, prompt.blocks || []);
                }
                if (prompt.regeneratedResponses && prompt.regeneratedResponses.length > 0) {
                    var responseStack = [_this.originalResponses.get(i)].concat(prompt.regeneratedResponses);
                    _this.regeneratedResponses.set(i, responseStack);
                    var blocksStack = [_this.originalBlocks.get(i) || []];
                    for (var j = 0; j < prompt.regeneratedResponses.length; j++) {
                        blocksStack.push([]);
                    }
                    _this.regeneratedBlocks.set(i, blocksStack);
                    _this.currentRegeneratedIndex.set(i, responseStack.length - 1);
                    var prevOnChange = _this.isProtectedOnChange;
                    _this.isProtectedOnChange = true;
                    prompt.response = responseStack[responseStack.length - 1];
                    prompt.blocks = [];
                    _this.isProtectedOnChange = prevOnChange;
                }
                _this.renderOutputContainer(SanitizeHtmlHelper.sanitize(prompt.prompt), SanitizeHtmlHelper.sanitize(prompt.response), prompt.attachedFiles, i, undefined, true, prompt.blocks);
            });
        }
        if (this.suggestionsElement && this.content.contains(this.suggestionsElement)) {
            this.content.insertBefore(this.outputElement, this.suggestionsElement);
        }
        else {
            this.content.appendChild(this.outputElement);
        }
        if (isMethodCall) {
            this.aiAssistViewRendered = true;
        }
    };
    AIAssistView.prototype.updateBannerView = function (contentContainer) {
        if (this.prompts.length === 0) {
            this.renderBannerView(this.bannerTemplate, contentContainer, 'bannerTemplate');
        }
    };
    AIAssistView.prototype.renderAssistViewFooter = function () {
        var textareaAndIconsWrapper = this.createElement('div', { attrs: { class: 'e-textarea-icons-wrapper' } });
        if (this.footerTemplate) {
            this.updateContent(this.footerTemplate, this.footer, {}, 'footerTemplate');
        }
        else {
            this.editableTextarea = this.createElement('div', {
                attrs: {
                    class: 'e-assist-textarea',
                    contenteditable: 'true',
                    placeholder: this.promptPlaceholder,
                    role: 'textbox',
                    'aria-multiline': 'true'
                },
                innerHTML: this.prompt
            });
            var hiddenTextarea = this.createElement('textarea', {
                attrs: {
                    class: 'e-hidden-textarea',
                    name: 'userPrompt',
                    value: this.prompt
                }
            });
            this.appendChildren(textareaAndIconsWrapper, this.editableTextarea, hiddenTextarea);
            this.footer.append(textareaAndIconsWrapper);
        }
        if (!this.footerTemplate) {
            var footerIconsWrapper = this.createElement('div', { attrs: { class: 'e-footer-icons-wrapper' } });
            this.renderFooterToolbar(footerIconsWrapper);
            textareaAndIconsWrapper.appendChild(footerIconsWrapper);
            this.footer.appendChild(textareaAndIconsWrapper);
            this.footer.classList.add('e-footer-focus-wave-effect');
            this.refreshTextareaUI();
            this.pushToUndoStack(this.prompt);
        }
    };
    AIAssistView.prototype.renderFooterToolbar = function (container) {
        var _this = this;
        var toolbarItems = [];
        var customItems = this.footerToolbarSettings.items || [];
        for (var _i = 0, customItems_1 = customItems; _i < customItems_1.length; _i++) {
            var customItem = customItems_1[_i];
            var isSttToolbarItem = customItem.iconCss.indexOf('e-assist-speech-to-text') !== -1;
            var mappedItem = {
                type: customItem.type,
                template: isSttToolbarItem && isNullOrUndefined(customItem.template) ? '<button class="e-assistview-speech-to-text e-tbar-btn"></button>' : customItem.template,
                disabled: customItem.disabled,
                cssClass: customItem.cssClass,
                visible: customItem.visible,
                tooltipText: customItem.tooltip,
                prefixIcon: customItem.iconCss,
                text: customItem.text,
                align: customItem.align,
                tabIndex: customItem.disabled ? -1 : (customItem.tabIndex >= 0 ? customItem.tabIndex : 0)
            };
            toolbarItems.push(mappedItem);
        }
        if (this.enableAttachments && !this.isDuplicatedItem('e-icons e-assist-attachment-icon', toolbarItems)) {
            this.attachmentToolbarItem = {
                prefixIcon: 'e-icons e-assist-attachment-icon',
                tooltipText: this.l10n.getConstant('attachments'),
                align: 'Right'
            };
            toolbarItems.push(this.attachmentToolbarItem);
        }
        if (this.speechToTextSettings.enable && !this.isDuplicatedItem('e-icons e-assist-speech-to-text', toolbarItems)) {
            this.speechToTextToolbarItem = {
                id: this.element.id + '_speechtotext',
                template: '<button class="e-assistview-speech-to-text e-tbar-btn"></button>',
                prefixIcon: 'e-icons e-assist-speech-to-text',
                align: 'Right'
            };
            toolbarItems.push(this.speechToTextToolbarItem);
        }
        if (this.showClearButton && !this.isDuplicatedItem('e-icons e-assist-clear-icon', toolbarItems)) {
            this.clearToolbarItem = {
                prefixIcon: 'e-icons e-assist-clear-icon',
                tooltipText: this.l10n.getConstant('clear'),
                align: 'Right'
            };
            toolbarItems.push(this.clearToolbarItem);
        }
        if (!this.isDuplicatedItem('e-icons e-assist-send', toolbarItems)) {
            this.sendToolbarItem = {
                prefixIcon: 'e-icons e-assist-send',
                align: 'Right'
            };
            toolbarItems.push(this.sendToolbarItem);
        }
        this.footerToolbarEle = new Toolbar({
            items: toolbarItems,
            enableRtl: this.enableRtl,
            width: '100%',
            clicked: function (args) {
                var eventItemArgs = {
                    type: args.item.type,
                    text: args.item.text,
                    iconCss: args.item.prefixIcon,
                    cssClass: args.item.cssClass,
                    tooltip: args.item.tooltipText,
                    template: args.item.template,
                    disabled: args.item.disabled,
                    visible: args.item.visible,
                    align: args.item.align,
                    tabIndex: args.item.tabIndex
                };
                var eventArgs = {
                    item: eventItemArgs,
                    event: args.originalEvent,
                    cancel: false
                };
                if (_this.footerToolbarSettings.itemClick) {
                    _this.footerToolbarSettings.itemClick.call(_this, eventArgs);
                }
                if (!eventArgs.cancel) {
                    switch (args.item.prefixIcon) {
                        case 'e-icons e-assist-send':
                            if (!_this.isResponseRequested && !args.item.disabled) {
                                _this.onSendIconClick();
                            }
                            break;
                        case 'e-icons e-assist-stop':
                            _this.respondingStopper(args.originalEvent);
                            break;
                        case 'e-icons e-assist-clear-icon':
                            _this.clearIconHandler();
                            break;
                        case 'e-icons e-assist-attachment-icon':
                            if (_this.uploaderObj && _this.attachmentToolbarItem) {
                                var uploaderElement = _this.footerToolbarEle.element.querySelector('.e-assist-file-upload');
                                if (!uploaderElement) {
                                    _this.updateAttachmentElement();
                                    uploaderElement = _this.footerToolbarEle.element.querySelector('.e-assist-file-upload');
                                }
                                if (uploaderElement) {
                                    uploaderElement.click();
                                }
                            }
                            break;
                    }
                }
            }
        });
        var toolbarContainer = this.createElement('div');
        this.footerToolbarEle.appendTo(toolbarContainer);
        this.footerToolbarEle.element.setAttribute('aria-label', 'assist-footer-toolbar');
        container.appendChild(toolbarContainer);
        this.updateAttachmentElement();
        this.renderSpeechToText();
    };
    AIAssistView.prototype.isDuplicatedItem = function (iconCss, toolbarItems) {
        for (var _i = 0, toolbarItems_1 = toolbarItems; _i < toolbarItems_1.length; _i++) {
            var item = toolbarItems_1[_i];
            if ((item.prefixIcon || '') === iconCss) {
                switch (iconCss) {
                    case 'e-icons e-assist-send':
                        this.sendToolbarItem = item;
                        break;
                    case 'e-icons e-assist-clear-icon':
                        this.clearToolbarItem = item;
                        break;
                    case 'e-icons e-assist-attachment-icon':
                        this.attachmentToolbarItem = item;
                        break;
                }
                return true;
            }
        }
        return false;
    };
    AIAssistView.prototype.updateAttachmentElement = function () {
        if (this.enableAttachments && this.attachmentToolbarItem) {
            this.renderAttachmentIcon();
        }
        else {
            if (this.uploaderObj) {
                this.uploaderObj.destroy();
                this.dropArea.innerHTML = '';
                remove(this.dropArea);
            }
        }
    };
    AIAssistView.prototype.renderSpeechToText = function () {
        var _this = this;
        if (this.speechToTextObj) {
            this.speechToTextObj.destroy();
            this.speechToTextObj = null;
        }
        if (this.speechToTextSettings.enable) {
            this.speechToTextObj = new SpeechToText({
                allowInterimResults: this.speechToTextSettings.allowInterimResults,
                transcript: this.speechToTextSettings.transcript,
                lang: this.speechToTextSettings.lang,
                listeningState: this.speechToTextSettings.listeningState,
                disabled: this.speechToTextSettings.disabled,
                buttonSettings: this.speechToTextSettings.buttonSettings,
                showTooltip: this.speechToTextSettings.showTooltip,
                tooltipSettings: this.speechToTextSettings.tooltipSettings,
                cssClass: this.speechToTextSettings.cssClass,
                onStart: function (args) {
                    if (_this.speechToTextSettings.onStart) {
                        _this.speechToTextSettings.onStart.call(_this, args);
                    }
                },
                onStop: function (args) {
                    if (_this.speechToTextSettings.onStop) {
                        _this.speechToTextSettings.onStop.call(_this, args);
                    }
                },
                transcriptChanged: function (args) {
                    var prevOnChange = _this.isProtectedOnChange;
                    _this.isProtectedOnChange = true;
                    var value = _this.prompt.length > 0 ? _this.prompt + ' ' : '';
                    if (args.isInterimResult) {
                        _this.editableTextarea.innerHTML = value + SanitizeHtmlHelper.sanitize(args.transcript);
                    }
                    else {
                        var prevPrompt = _this.prompt;
                        _this.prompt = value + SanitizeHtmlHelper.sanitize(args.transcript);
                        _this.editableTextarea.innerHTML = _this.prompt;
                        _this.speechToTextObj.transcript = '';
                        _this.editableTextarea.focus();
                        _this.setFocusAtEnd(_this.editableTextarea);
                        _this.triggerPromptChanged(event, prevPrompt);
                    }
                    _this.refreshTextareaUI();
                    // Debounced push to undo stack
                    _this.scheduleUndoPush();
                    _this.redoStack = [];
                    _this.speechToTextSettings.transcript = args.transcript;
                    if (_this.speechToTextSettings.transcriptChanged) {
                        _this.speechToTextSettings.transcriptChanged.call(_this, args);
                    }
                    _this.isProtectedOnChange = prevOnChange;
                },
                onError: function (args) {
                    if (_this.speechToTextSettings.onError) {
                        _this.speechToTextSettings.onError.call(_this, args);
                    }
                }
            });
            var speechToTextButton = this.footerToolbarEle.element.querySelector('.e-assistview-speech-to-text');
            if (speechToTextButton) {
                this.speechToTextObj.appendTo(speechToTextButton);
            }
        }
    };
    AIAssistView.prototype.renderAttachmentIcon = function () {
        var _this = this;
        this.dropArea = this.createElement('div', { attrs: { class: 'e-assist-drop-area' } });
        this.footer.prepend(this.dropArea);
        var attachmentIcon = this.footerToolbarEle.element.querySelector('.e-assist-attachment-icon');
        var uploaderElement = this.createElement('input', { attrs: { class: 'e-assist-file-upload', type: 'file', name: 'UploadFiles', id: 'fileUpload' } });
        attachmentIcon.appendChild(uploaderElement);
        this.uploaderObj = new Uploader({
            asyncSettings: {
                saveUrl: this.attachmentSettings.saveUrl,
                removeUrl: this.attachmentSettings.removeUrl
            },
            maxFileSize: this.attachmentSettings.maxFileSize,
            allowedExtensions: this.attachmentSettings.allowedFileTypes,
            progress: this.onUploadProgress.bind(this),
            success: this.onUploadSuccess.bind(this),
            failure: this.onUploadFailure.bind(this),
            uploading: this.onUploadStart.bind(this),
            multiple: true,
            dropArea: this.footer,
            selected: function (args) {
                var oversized = args.filesData.filter(function (file) {
                    return file.status === _this.uploaderObj.l10n.getConstant('invalidMaxFileSize') && file.statusCode === '0';
                });
                if (oversized.length) {
                    _this.showFailureAlert('fileSizeFailure', oversized.length, 'e-size-failure');
                    uploaderElement.value = '';
                }
                var totalSelected = args.filesData.length + _this.uploadedFiles.length;
                if (totalSelected > _this.attachmentSettings.maximumCount) {
                    args.cancel = true;
                    _this.showFailureAlert('fileCountFailure', _this.attachmentSettings.maximumCount, 'e-count-failure');
                    uploaderElement.value = '';
                    return;
                }
            }
        });
        this.uploaderObj.appendTo(uploaderElement);
    };
    AIAssistView.prototype.showFailureAlert = function (localeConstantKey, fileCount, failureType) {
        var failureMessage = this.l10n.getConstant(localeConstantKey).replace('{0}', fileCount.toString());
        if (fileCount === 1) {
            failureMessage = failureMessage.replace('files', 'file');
        }
        this.createFailureAlert(failureMessage, failureType);
    };
    AIAssistView.prototype.createFailureAlert = function (failureMessage, failureType) {
        var _this = this;
        var failureAlert = this.renderFailureAlert(this.viewWrapper, failureMessage, failureType, 'e-assist-circle-close', 'e-assist-clear-icon');
        if (this.viewWrapper.contains(this.footer)) {
            this.viewWrapper.insertBefore(failureAlert, this.footer);
        }
        failureAlert.classList.add('e-show');
        setTimeout(function () {
            _this.handleFailureAlertRemove(_this.viewWrapper, failureAlert);
        }, 3000);
    };
    AIAssistView.prototype.onUploadStart = function (args) {
        this.trigger('beforeAttachmentUpload', args);
        this.uploadedFiles.push(args.fileData);
        var fileItem = this.createFileItem(args.fileData, true);
        this.dropArea.appendChild(fileItem);
    };
    AIAssistView.prototype.onUploadProgress = function (args) {
        var uploadProgress = args.e.loaded / args.e.total * 100;
        var progressFill = this.footer.querySelector("#e-assist-progress-" + CSS.escape(args.file.name));
        if (progressFill) {
            progressFill.style.width = uploadProgress + "%";
        }
    };
    AIAssistView.prototype.onUploadSuccess = function (args) {
        if (args.operation === 'upload') {
            this.trigger('attachmentUploadSuccess', args);
            var progressFill = this.footer.querySelector("#e-assist-progress-" + CSS.escape(args.file.name));
            if (progressFill) {
                progressFill.style.width = '100%';
                this.cleanupFileItem(args.file.name);
            }
            var progressBar = this.footer.querySelector('.e-assist-progress-fill');
            if (!progressBar) {
                this.checkAndActivateSendIcon();
            }
        }
        else if (args.operation === 'remove') {
            this.trigger('attachmentRemoved', args);
        }
    };
    AIAssistView.prototype.cleanupFileItem = function (fileName) {
        var fileItem = this.footer.querySelector("#e-assist-progress-" + CSS.escape(fileName));
        if (fileItem) {
            fileItem.parentElement.remove();
        }
    };
    AIAssistView.prototype.onUploadFailure = function (args) {
        if (args.operation === 'remove') {
            this.trigger('attachmentRemoved', args);
        }
        else {
            this.trigger('attachmentUploadFailure', args);
            this.uploaderObj.remove(args.file);
            this.uploadedFiles = this.uploadedFiles.filter(function (file) { return file.name !== args.file.name; });
            var progressFill = this.footer.querySelector("#e-assist-progress-" + CSS.escape(args.file.name));
            if (progressFill) {
                progressFill.style.width = '100%';
                progressFill.classList.add('e-assist-upload-failed');
            }
        }
    };
    AIAssistView.prototype.createFileItem = function (fileData, isForFooter) {
        var _this = this;
        var fileItem = this.createElement('div', { className: 'e-assist-uploaded-file-item' });
        if (this.attachmentSettings.attachmentTemplate) {
            var introContainer = this.createElement('div', { className: 'e-attachment-template' });
            fileItem.appendChild(introContainer);
            this.getContextObject('attachmenttemplate', introContainer, -1, -1, fileData);
        }
        else {
            var fileIcon = this.createElement('div', {
                className: 'e-assist-file-icon-svg'
            });
            fileIcon.appendChild(this.createFileTypeIcon(fileData.name));
            var fileDetails = this.createElement('div', { className: 'e-assist-file-details' });
            var fileName = this.createElement('span', { className: 'e-assist-file-name', innerHTML: fileData.name });
            var fileSize = this.createElement('span', { className: 'e-assist-file-size', innerHTML: (fileData.size / 1024).toFixed(2) + " KB" });
            fileDetails.append(fileName, fileSize);
            fileItem.append(fileIcon, fileDetails);
        }
        var progressBar = this.createElement('div', { className: 'e-assist-progress-bar' });
        var progressFill = this.createElement('div', { id: "e-assist-progress-" + fileData.name, className: 'e-assist-progress-fill' });
        progressBar.appendChild(progressFill);
        var closeButton;
        if (isForFooter) {
            closeButton = this.createElement('span', { attrs: { class: 'e-icons e-assist-clear-icon', role: 'button', 'aria-label': 'Clear file', tabindex: '-1' } });
            EventHandler.add(closeButton, 'click', function () { return _this.handleRemoveUploadedFile(closeButton, fileData, fileItem); });
            fileItem.append(closeButton);
        }
        fileItem.append(progressBar);
        EventHandler.add(fileItem, 'click', function (event) {
            if (closeButton && (event.target === closeButton || event.target.classList.contains('e-assist-clear-icon'))) {
                return;
            }
            _this.handleAttachmentPreview(fileData);
        });
        return fileItem;
    };
    AIAssistView.prototype.handleAttachmentPreview = function (file) {
        var eventArgs = {};
        if (this.attachmentSettings.attachmentClick) {
            this.attachmentSettings.attachmentClick.call(this, eventArgs);
        }
    };
    AIAssistView.prototype.handleRemoveUploadedFile = function (closeButton, fileData, fileItem) {
        this.uploaderObj.remove(fileData);
        this.uploadedFiles = this.uploadedFiles.filter(function (file) { return file.name !== fileData.name; });
        EventHandler.remove(closeButton, 'click', this.handleRemoveUploadedFile);
        fileItem.remove();
        this.checkAndActivateSendIcon();
    };
    AIAssistView.prototype.applyPromptChange = function (newState, oldState, event) {
        var prevOnChange = this.isProtectedOnChange;
        this.isProtectedOnChange = true;
        this.prompt = this.editableTextarea.innerHTML = newState.content;
        this.isProtectedOnChange = prevOnChange;
        this.refreshTextareaUI();
        this.setCursorPosition(newState.selectionStart, newState.selectionEnd);
        this.triggerPromptChanged(event, oldState.content);
    };
    AIAssistView.prototype.handleInput = function (event) {
        var textareaEle = event.target;
        var isEmpty = textareaEle.innerHTML === '<br>';
        if (isEmpty) {
            this.clearBreakTags(textareaEle);
        }
        var textContent = textareaEle.innerHTML;
        var prevOnChange = this.isProtectedOnChange;
        this.isProtectedOnChange = true;
        var prevPrompt = this.prompt;
        this.prompt = SanitizeHtmlHelper.sanitize(textContent);
        this.isProtectedOnChange = prevOnChange;
        this.refreshTextareaUI();
        this.editableTextarea.focus();
        // Debounced push to undo stack
        this.scheduleUndoPush();
        this.redoStack = [];
        this.triggerPromptChanged(event, prevPrompt);
    };
    AIAssistView.prototype.triggerPromptChanged = function (event, prevPrompt) {
        var eventArgs = {
            value: this.prompt,
            previousValue: prevPrompt,
            event: event,
            element: (event && event.currentTarget) || this.editableTextarea
        };
        this.trigger('promptChanged', eventArgs);
    };
    AIAssistView.prototype.footerKeyHandler = function (e) {
        var targetElement = e.target;
        if (targetElement.classList.contains('e-tbar-btn') && targetElement.querySelector('.e-assist-attachment-icon')) {
            return;
        }
        this.keyHandler(e, 'footer');
    };
    AIAssistView.prototype.bindScroll = function () {
        if (this.contentWrapper) {
            EventHandler.add(this.contentWrapper, 'scroll', this.handleScroll, this);
        }
        if (this.enableScrollToBottom && this.downArrowIcon && this.downArrowIcon.element) {
            EventHandler.add(this.downArrowIcon.element, 'click', this.scrollBtnClick, this);
        }
    };
    AIAssistView.prototype.unBindScroll = function () {
        if (this.contentWrapper) {
            EventHandler.remove(this.contentWrapper, 'scroll', this.handleScroll);
        }
        if (this.enableScrollToBottom && this.downArrowIcon && this.downArrowIcon.element) {
            EventHandler.remove(this.downArrowIcon.element, 'click', this.scrollBtnClick);
        }
    };
    AIAssistView.prototype.wireEvents = function () {
        this.wireFooterEvents(this.footerTemplate);
        if (this.editableTextarea) {
            var footerIconsWrapper = this.footer.querySelector('.e-footer-icons-wrapper');
            if (footerIconsWrapper) {
                EventHandler.add(footerIconsWrapper, 'pointerdown', this.onFooterIconsPointerDown, this);
                // Optional fallback for environments without Pointer Events
                EventHandler.add(footerIconsWrapper, 'click', this.onFooterIconsClick, this);
                EventHandler.add(footerIconsWrapper, 'focusout', this.onFooterIconsFocusOut, this);
            }
        }
        if (this.enableScrollToBottom) {
            this.bindScroll();
        }
    };
    AIAssistView.prototype.unWireEvents = function () {
        this.unWireFooterEvents(this.footerTemplate);
        if (this.editableTextarea) {
            var footerIconsWrapper = this.footer.querySelector('.e-footer-icons-wrapper');
            if (footerIconsWrapper) {
                EventHandler.remove(footerIconsWrapper, 'pointerdown', this.onFooterIconsPointerDown);
                EventHandler.remove(footerIconsWrapper, 'click', this.onFooterIconsClick);
                EventHandler.remove(footerIconsWrapper, 'focusout', this.onFooterIconsFocusOut);
            }
        }
        this.detachCodeCopyEventHandler();
        this.unBindScroll();
    };
    AIAssistView.prototype.onFocusEditableTextarea = function () {
        if (this.footer) {
            this.footer.classList.add('e-footer-focused');
        }
        this.toggleClearIcon();
    };
    AIAssistView.prototype.onBlurEditableTextarea = function (e) {
        var relatedTargetEle = e.relatedTarget;
        if (relatedTargetEle && relatedTargetEle.closest('.e-toolbar')) {
            return;
        }
        if (!relatedTargetEle) {
            if (this.footer) {
                this.footer.classList.remove('e-footer-focused');
            }
            if (this.clearToolbarItem) {
                this.toggleClearIcon();
            }
        }
        else {
            if (this.clearToolbarItem) {
                if (relatedTargetEle && !(relatedTargetEle.querySelector('.e-assist-clear-icon'))) {
                    this.toggleClearIcon();
                }
            }
            if (this.footer) {
                this.footer.classList.remove('e-footer-focused');
            }
        }
    };
    AIAssistView.prototype.detachCodeCopyEventHandler = function () {
        this.preTagElements.forEach(function (_a) {
            var preTag = _a.preTag, handler = _a.handler;
            var copyIcon = preTag.querySelector('.e-code-copy');
            EventHandler.remove(copyIcon, 'click', handler);
        });
        this.preTagElements = [];
    };
    AIAssistView.prototype.keyHandler = function (event, value) {
        if (event.key === 'Enter' && !event.shiftKey) {
            switch (value) {
                case 'footer':
                    this.pushToUndoStack(this.editableTextarea.innerText);
                    event.preventDefault();
                    if (!this.isResponseRequested) {
                        this.onSendIconClick();
                    }
                    else if (this.isResponseRequested && this.hasStopResponseButton()) {
                        this.respondingStopper(event);
                    }
                    break;
            }
        }
        else if (event.key === 'Backspace' || event.key === 'Delete') {
            if (this.speechToTextObj) {
                this.speechToTextObj.transcript = '';
            }
        }
        else {
            this.handleUndoRedo(event);
        }
    };
    AIAssistView.prototype.clearIconHandler = function () {
        var prevOnChange = this.isProtectedOnChange;
        this.isProtectedOnChange = true;
        this.editableTextarea.innerText = this.prompt = '';
        if (this.speechToTextObj) {
            this.speechToTextObj.transcript = '';
        }
        this.isProtectedOnChange = prevOnChange;
        this.refreshTextareaUI();
        this.editableTextarea.focus();
        this.pushToUndoStack(this.prompt);
        this.checkAndActivateSendIcon();
    };
    AIAssistView.prototype.respondingStopper = function (event) {
        // Finalize incomplete thinking blocks to error state before stopping output
        var prevOnChange = this.isProtectedOnChange;
        this.isProtectedOnChange = true;
        this.finalizeIncompleteThinkingBlocks();
        this.isProtectedOnChange = prevOnChange;
        this.isOutputRenderingStop = true;
        this.isResponseRequested = false;
        this.lastStreamPrompt = '';
        if (this.outputElement.hasChildNodes) {
            var skeletonElement = this.element.querySelector('.e-loading-body');
            if (skeletonElement) {
                this.outputElement.removeChild(this.skeletonContainer);
            }
        }
        this.toggleStopRespondingButton(false);
        var promptIndex = this.prompts ? this.prompts.length - 1 : -1;
        var eventArgs = {
            event: event,
            prompt: promptIndex >= 0 ? this.prompts[parseInt(promptIndex.toString(), 10)].prompt : '',
            dataIndex: this.prompts ? this.prompts.length - 1 : -1
        };
        this.trigger('stopRespondingClick', eventArgs);
        var outputContainer = this.element.querySelector("#e-response-item_" + promptIndex);
        if (outputContainer) {
            var outputContentBodyEle = this.element.querySelector("#e-response-item_" + (this.prompts.length - 1)).querySelector('.e-content-body');
            if (outputContentBodyEle) {
                this.renderPreTag(outputContentBodyEle);
            }
        }
    };
    AIAssistView.prototype.onSuggestionClick = function (e, suggestion) {
        this.suggestionsElement.hidden = true;
        var prevOnChange = this.isProtectedOnChange;
        this.isProtectedOnChange = true;
        // Prefer the passed-in canonical suggestion; fall back to event target text if absent
        this.prompt = !isNullOrUndefined(suggestion) ? suggestion : e.target.innerText;
        this.isProtectedOnChange = prevOnChange;
        this.onSendIconClick();
    };
    AIAssistView.prototype.onSendIconClick = function () {
        if (this.isResponseRequested || !(this.prompt.trim() || this.uploadedFiles.length)) {
            return;
        }
        if (!isNullOrUndefined(this.speechToTextObj)) {
            this.speechToTextObj.stopListening();
        }
        this.isResponseRequested = true;
        this.lastStreamPrompt = '';
        if (this.suggestionsElement) {
            this.suggestionsElement.hidden = true;
        }
        this.isOutputRenderingStop = false;
        this.toggleStopRespondingButton(true);
        this.addPrompt();
        if (this.prompts.length === 1) {
            this.updateBannerTemplate('');
        }
        this.createOutputElement();
        var eventArgs = {
            cancel: false,
            responseToolbarItems: this.responseToolbarSettings.items,
            prompt: this.prompt,
            promptSuggestions: this.promptSuggestions,
            attachedFiles: this.uploadedFiles.slice()
        };
        this.clearUploadedFiles();
        if (!this.footerTemplate) {
            var prevOnChange = this.isProtectedOnChange;
            this.isProtectedOnChange = true;
            this.prompt = this.editableTextarea.innerText = '';
            this.isProtectedOnChange = prevOnChange;
            this.refreshTextareaUI();
            this.pushToUndoStack(this.prompt);
        }
        this.setupViewportFilling();
        this.trigger('promptRequest', eventArgs);
        if (this.contentWrapper) {
            this.scrollToBottom();
        }
    };
    AIAssistView.prototype.clearUploadedFiles = function () {
        this.uploadedFiles = [];
        if (this.dropArea) {
            this.dropArea.innerHTML = '';
        }
    };
    AIAssistView.prototype.addPrompt = function () {
        var prevOnChange = this.isProtectedOnChange;
        this.isProtectedOnChange = true;
        this.prompts = this.prompts.concat([{ prompt: this.prompt, response: '', isResponseHelpful: null, attachedFiles: this.uploadedFiles, blocks: null }]);
        this.isProtectedOnChange = prevOnChange;
    };
    AIAssistView.prototype.getContextObject = function (templateName, contentElement, index, arrayPosition, file) {
        var template;
        var context = {};
        var contextIndex = index >= 0 ? index : -1;
        var contextPrompt = index >= 0 ? this.prompts[parseInt(contextIndex.toString(), 10)].prompt : '';
        var contextOutput = index >= 0 ? this.prompts[parseInt(contextIndex.toString(), 10)].response : '';
        switch (templateName.toLowerCase()) {
            case 'promptitemtemplate': {
                template = this.promptItemTemplate;
                context = {
                    prompt: contextPrompt,
                    toolbarItems: this.promptToolbarSettings.items,
                    index: contextIndex,
                    attachedFiles: this.uploadedFiles
                };
                break;
            }
            case 'responseitemtemplate': {
                template = this.responseItemTemplate;
                context = {
                    prompt: contextPrompt,
                    response: contextOutput,
                    index: contextIndex,
                    toolbarItems: this.responseToolbarSettings.items,
                    blocks: index >= 0 ? this.prompts[parseInt(contextIndex.toString(), 10)].blocks : null
                };
                break;
            }
            case 'customviewtemplate':
            case 'assistviewtemplate': {
                template = this.views[parseInt(arrayPosition.toString(), 10)].viewTemplate || '';
                break;
            }
            case 'attachmenttemplate': {
                template = this.attachmentSettings.attachmentTemplate;
                context = { selectedFile: file };
                break;
            }
        }
        this.updateContent(template, contentElement, context, templateName);
    };
    AIAssistView.prototype.createOutputElement = function () {
        this.outputSuggestionEle = this.createElement('div', { attrs: { id: "e-prompt-item_" + (this.prompts.length - 1), class: "e-prompt-container " + (this.promptItemTemplate ? 'e-prompt-item-template' : '') } });
        this.renderPrompt(this.prompt, this.prompts.length - 1, this.uploadedFiles);
        this.outputElement.append(this.outputSuggestionEle, this.skeletonContainer);
        this.skeletonContainer.hidden = false;
    };
    AIAssistView.prototype.renderOutputContainer = function (promptText, outputText, attachedFiles, index, isMethodCall, isFinalUpdate, blocks) {
        var outputContainer = this.createElement('div', { attrs: __assign({ id: "e-response-item_" + index, class: "e-output-container " + (this.responseItemTemplate ? 'e-response-item-template' : '') }, (this.latestResponseMinHeight != null ?
                { style: "min-height:" + this.latestResponseMinHeight + "px" } : {})) });
        this.renderOutput(outputContainer, promptText, outputText, attachedFiles, isMethodCall, index, isFinalUpdate, blocks);
        if (promptText) {
            this.outputElement.append(this.outputSuggestionEle);
        }
        this.outputElement.append(outputContainer);
        if (this.hasStopResponseButton() && isFinalUpdate && !this.isToolResponse) {
            this.toggleStopRespondingButton(false);
        }
        if (!this.isOutputRenderingStop && !this.content.contains(this.suggestionsElement) && this.suggestionsElement) {
            this.content.append(this.suggestionsElement);
        }
    };
    AIAssistView.prototype.requiredModules = function () {
        var modules = [];
        modules.push({ member: 'assistThinking', args: [this] });
        return modules;
    };
    AIAssistView.prototype.renderOutput = function (outputContainer, promptText, outputText, attachedFiles, isMethodCall, index, isFinalUpdate, blocks) {
        var promptIcon = this.createElement('span', {
            className: 'e-output-icon e-icons ' + (this.responseIconCss || (this.isAssistView && this.views[0].iconCss) || 'e-assistview-icon')
        });
        var aiOutputEle = this.createElement('div', { className: 'e-output' });
        if (!this.aiAssistViewRendered || isMethodCall) {
            if (!isNullOrUndefined(promptText) || (attachedFiles && attachedFiles.length > 0)) {
                this.outputSuggestionEle = this.createElement('div', { attrs: { id: "e-prompt-item_" + index, class: "e-prompt-container " + (this.promptItemTemplate ? 'e-prompt-item-template' : '') } });
                this.renderPrompt(promptText, index, attachedFiles);
            }
        }
        var lastPrompt = { prompt: promptText, response: outputText, blocks: blocks };
        var hasToolBlocks = Array.isArray(lastPrompt.blocks) && lastPrompt.blocks.length > 0;
        if (lastPrompt.response || hasToolBlocks) {
            if (this.responseItemTemplate) {
                this.getContextObject('responseItemTemplate', aiOutputEle, index);
                if (this.outputElement.querySelector('.e-skeleton')) {
                    this.outputElement.removeChild(this.skeletonContainer);
                }
                if (this.contentFooterEle) {
                    this.contentFooterEle.classList.remove('e-assist-toolbar-active');
                }
                if (isFinalUpdate && this.hasStopResponseButton()) {
                    this.toggleStopRespondingButton(false);
                }
                this.renderOutputToolbarItems(index, isFinalUpdate);
                aiOutputEle.append(this.contentFooterEle);
                outputContainer.append(aiOutputEle);
            }
            else {
                this.renderOutputTextContainer(lastPrompt.response, aiOutputEle, index, false, isFinalUpdate, lastPrompt.blocks);
                outputContainer.append(promptIcon, aiOutputEle);
            }
        }
        else if (this.aiAssistViewRendered) {
            if (this.outputElement.querySelector('.e-skeleton')) {
                this.outputElement.removeChild(this.skeletonContainer);
            }
            if (this.suggestionsElement) {
                this.suggestionsElement.hidden = false;
            }
        }
    };
    AIAssistView.prototype.renderResponseSegments = function (outputEle, blocks, isFinalUpdate) {
        if (blocks.length === 0) {
            return;
        }
        if (!this.lastRenderedBlockCount) {
            this.lastRenderedBlockCount = 0;
        }
        if (blocks.length > this.lastRenderedBlockCount) {
            // NEW BLOCKS: Update already-rendered blocks state, then render new blocks
            this.updateExistingBlocksState(blocks, this.lastRenderedBlockCount);
            this.blockIndex = this.lastRenderedBlockCount;
            this.renderNextSegment(outputEle, blocks, isFinalUpdate);
            this.lastRenderedBlockCount = blocks.length;
        }
        else if (blocks.length === this.lastRenderedBlockCount) {
            // SAME COUNT: Update state of all already-rendered blocks
            this.updateExistingBlocksState(blocks, this.lastRenderedBlockCount);
            if (blocks[this.lastRenderedBlockCount - 1].blockType === 'text') {
                var block = blocks[this.lastRenderedBlockCount - 1];
                var responseItem = this.element.querySelector("#e-response-item_" + (this.prompts.length - 1));
                this.updateResponse('', this.prompts.length - 1, isFinalUpdate, responseItem, block);
            }
            this.updateLastThinkingBlock(blocks);
        }
        if (isFinalUpdate) {
            if (this.blockIndex >= blocks.length && this.hasStopResponseButton()) {
                this.toggleStopRespondingButton(false);
                this.isResponseRequested = false;
            }
        }
    };
    AIAssistView.prototype.updateExistingBlocksState = function (blocks, renderedCount) {
        var responseItem = this.element.querySelector("#e-response-item_" + (this.prompts.length - 1));
        if (responseItem) {
            // Check and update only the blocks that were already rendered (0 to renderedCount-1)
            for (var index = 0; index < renderedCount; index++) {
                var block = blocks[parseInt(index.toString(), 10)];
                // Only thinking blocks have state that can change (isActive, stages status)
                if (block.blockType === 'thinking') {
                    var thinkingBlock = block;
                    var blockWrapper = responseItem.querySelector(".e-response-block-item-" + index);
                    if (blockWrapper) {
                        // Update isActive state (spinner/check icon)
                        var isActiveChanged = thinkingBlock.isActive !== (blockWrapper.classList.contains('e-thinking-active'));
                        if (isActiveChanged) {
                            if (thinkingBlock.isActive) {
                                // Block becoming active: replace check icon with spinner
                                blockWrapper.classList.add('e-thinking-active');
                                blockWrapper.classList.remove('e-thinking-finished');
                                // Find the check icon span and replace with spinner span
                                var headerButton = blockWrapper.querySelector('.e-aiassist-thinking-toggle');
                                if (headerButton) {
                                    var checkIconSpan = headerButton.querySelector('.e-icons.e-check');
                                    if (checkIconSpan) {
                                        // Create new spinner span
                                        var spinnerSpan = this.createElement('span', {
                                            attrs: { class: 'e-active-spinner' }
                                        });
                                        // Create and show spinner
                                        createSpinner({ target: spinnerSpan, type: 'Bootstrap' });
                                        // Replace check icon with spinner
                                        checkIconSpan.replaceWith(spinnerSpan);
                                        showSpinner(spinnerSpan);
                                    }
                                }
                            }
                            else {
                                // Block becoming inactive: replace spinner with check icon
                                blockWrapper.classList.remove('e-thinking-active');
                                blockWrapper.classList.add('e-thinking-finished');
                                // Find the spinner span and replace with check icon span
                                var headerButton = blockWrapper.querySelector('.e-aiassist-thinking-toggle');
                                if (headerButton) {
                                    var spinnerSpan = headerButton.querySelector('.e-active-spinner');
                                    if (spinnerSpan) {
                                        // Hide and destroy spinner
                                        hideSpinner(spinnerSpan);
                                        // Create new check icon span
                                        var checkIconSpan = this.createElement('span', {
                                            attrs: { class: 'e-icons e-check' }
                                        });
                                        // Replace spinner with check icon
                                        spinnerSpan.replaceWith(checkIconSpan);
                                    }
                                }
                            }
                        }
                        // Update stages if they changed
                        if (thinkingBlock.stages && thinkingBlock.stages.length > 0) {
                            // Determine if this is single stage or timeline rendering
                            var isSingleStage = thinkingBlock.stages.length === 1;
                            if (isSingleStage) {
                                // Single stage rendering uses .e-single-stage-container
                                var stage = thinkingBlock.stages[0];
                                var stageElement = blockWrapper.querySelector('.e-single-stage-container');
                                if (stageElement) {
                                    // Get current stage status from DOM
                                    var statusMatch = stageElement.className.match(/e-stage-(\w+)/);
                                    var currentStatus = statusMatch ? statusMatch[1] : '';
                                    var statusChanged = stage.status !== currentStatus;
                                    if (statusChanged) {
                                        // Update stage status class (replace old status with new)
                                        stageElement.className = stageElement.className.replace(/e-stage-\w+/g, "e-stage-" + stage.status);
                                        // Update stage status icon when status changes
                                        var stageIconElement = stageElement.querySelector('.e-stage-icon');
                                        if (stageIconElement && stage.iconCss) {
                                            // Replace all icon classes with new one
                                            var iconClassList = stageIconElement.className.split(' ').filter(function (c) {
                                                return !c.includes('e-') || c === 'e-icons' || c === 'e-stage-icon';
                                            });
                                            stageIconElement.className = (iconClassList.join(' ') + " " + stage.iconCss).trim();
                                        }
                                        // Add visual indicator when transitioning to completed
                                        if (stage.status === 'completed') {
                                            stageElement.classList.add('e-stage-completed');
                                            // Hide any spinners in this stage
                                            var stageSpinners = stageElement.querySelectorAll('.e-active-spinner');
                                            stageSpinners.forEach(function (spinner) {
                                                hideSpinner(spinner);
                                            });
                                        }
                                        // Remove completed indicator and show spinners if status reverts to inprogress
                                        else if (stage.status === 'inprogress') {
                                            stageElement.classList.remove('e-stage-completed');
                                            // Show spinners when transitioning back to inprogress
                                            var stageSpinners = stageElement.querySelectorAll('.e-active-spinner');
                                            stageSpinners.forEach(function (spinner) {
                                                spinner.style.display = ''; // Restore display
                                                showSpinner(spinner);
                                            });
                                        }
                                    }
                                }
                            }
                            else {
                                // Multiple stages: Timeline rendering uses .e-timeline-wrapper with Timeline component
                                var timelineWrapper = blockWrapper.querySelector('.e-timeline-wrapper');
                                if (timelineWrapper) {
                                    // Query timeline item elements and update their states
                                    var timelineItems = timelineWrapper.querySelectorAll('.e-timeline-item');
                                    for (var stageIndex = 0; stageIndex < thinkingBlock.stages.length; stageIndex++) {
                                        var stage = thinkingBlock.stages[parseInt(stageIndex.toString(), 10)];
                                        var timelineItem = timelineItems[parseInt(stageIndex.toString(), 10)];
                                        if (timelineItem) {
                                            // Get current stage status from DOM
                                            var statusMatch = timelineItem.className.match(/e-stage-(\w+)/);
                                            var currentStatus = statusMatch ? statusMatch[1] : '';
                                            var statusChanged = stage.status !== currentStatus;
                                            if (statusChanged) {
                                                // Update timeline item status class (replace old status with new)
                                                timelineItem.className = timelineItem.className.replace(/e-stage-\w+/g, "e-stage-" + stage.status);
                                                // Update stage status icon when status changes
                                                var dotElement = timelineItem.querySelector('.e-timeline-dot');
                                                if (dotElement && stage.iconCss) {
                                                    // Update dot CSS (for status icon)
                                                    dotElement.className = "e-timeline-dot " + stage.iconCss;
                                                }
                                                // Add visual indicator when transitioning to completed
                                                if (stage.status === 'completed') {
                                                    timelineItem.classList.add('e-stage-completed');
                                                    // Hide any spinners in this timeline item
                                                    var stageSpinners = timelineItem.querySelectorAll('.e-stage-spinner');
                                                    stageSpinners.forEach(function (spinner) {
                                                        hideSpinner(spinner);
                                                    });
                                                }
                                                // Remove completed indicator and show spinners if status reverts to inprogress
                                                else if (stage.status === 'inprogress') {
                                                    timelineItem.classList.remove('e-stage-completed');
                                                    // Show spinners when transitioning back to inprogress
                                                    var stageSpinners = timelineItem.querySelectorAll('.e-stage-spinner');
                                                    stageSpinners.forEach(function (spinner) {
                                                        spinner.style.display = ''; // Restore display
                                                        showSpinner(spinner);
                                                    });
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    AIAssistView.prototype.updateLastThinkingBlock = function (blocks) {
        var responseItem = this.element.querySelector("#e-response-item_" + (this.prompts.length - 1));
        if (responseItem) {
            for (var index = 0; index < blocks.length; index++) {
                if (blocks[parseInt(index.toString(), 10)].blockType === 'thinking') {
                    var thinkingBlock = blocks[parseInt(index.toString(), 10)];
                    var existingThinkingWrapper = responseItem.querySelector('.e-response-block-item-' + (index));
                    if (existingThinkingWrapper) {
                        // Clear spinnerInstances Map for this block
                        var oldSpinners = existingThinkingWrapper.querySelectorAll('.e-active-spinner');
                        oldSpinners.forEach(function (spinner) {
                            hideSpinner(spinner);
                        });
                        // Clear existing thinking content and re-render with new block data
                        existingThinkingWrapper.innerHTML = '';
                    }
                    else {
                        var outputContentBodyEle = responseItem.querySelector('.e-content-body');
                        existingThinkingWrapper = this.createElement('div', { attrs: { class: "e-response e-response-block-item-" + index } });
                        outputContentBodyEle.append(existingThinkingWrapper);
                    }
                    this.assistThinkingModule.createThinkingWrapper(thinkingBlock, existingThinkingWrapper, this.lastRenderedBlockCount - 1);
                }
            }
        }
    };
    AIAssistView.prototype.renderNextSegment = function (outputEle, blocks, isFinalUpdate) {
        var _this = this;
        if (this.blockIndex >= blocks.length) {
            if (this.enableStreaming) {
                isFinalUpdate = true;
            }
            if (isFinalUpdate) {
                if (this.hasStopResponseButton()) {
                    this.toggleStopRespondingButton(false);
                }
                var responseIndex = this.prompts.length - 1;
                var responseItem = this.element.querySelector('#e-response-item_' + (responseIndex));
                if (!this.responseItemTemplate && responseItem) {
                    var outputContainer = responseItem.querySelector('.e-output');
                    if (isFinalUpdate && this.suggestionsElement) {
                        this.suggestionsElement.hidden = false;
                    }
                    if (isFinalUpdate && outputContainer.querySelector('.e-content-footer') === null) {
                        this.renderOutputToolbarItems(responseIndex, isFinalUpdate);
                        this.appendChildren(outputContainer, this.contentFooterEle);
                    }
                }
                this.isResponseRequested = false;
            }
            return;
        }
        var responseBlock = blocks[parseInt(this.blockIndex.toString(), 10)];
        var responseWrapper = this.createElement('div', { attrs: { class: "e-response e-response-block-item-" + this.blockIndex } });
        this.blockIndex++;
        // TEXT SEGMENT
        if (responseBlock.blockType === 'text') {
            var responseText_1 = this.createElement('div', {
                attrs: { class: 'e-text' }
            });
            responseWrapper.append(responseText_1);
            outputEle.appendChild(responseWrapper);
            var htmlResponse = MarkdownConverter.toHtml(responseBlock.content);
            if (this.enableStreaming && !isFinalUpdate) {
                this.streamToolResponse(htmlResponse, responseText_1, function () {
                    if (isFinalUpdate) {
                        _this.renderPreTag(responseText_1);
                    }
                    _this.renderNextSegment(outputEle, blocks, isFinalUpdate);
                });
            }
            else {
                responseText_1.innerHTML = htmlResponse;
                this.renderNextSegment(outputEle, blocks, isFinalUpdate);
            }
            return;
        }
        // TOOL SEGMENT
        if (responseBlock.blockType === 'tool') {
            var tool = this.registeredTools.get(responseBlock.toolName.toLowerCase());
            if (tool) {
                var toolContainer = this.createElement('div', {
                    attrs: {
                        class: 'e-assist-tool'
                    }
                });
                responseWrapper.append(toolContainer);
                outputEle.appendChild(responseWrapper);
                this.renderToolUI(responseBlock, tool, toolContainer);
            }
            this.renderNextSegment(outputEle, blocks, isFinalUpdate);
            return;
        }
        //Thinking SEGMENT
        if (responseBlock.blockType === 'thinking') {
            this.assistThinkingModule.createThinkingWrapper(responseBlock, responseWrapper, this.blockIndex - 1);
            outputEle.appendChild(responseWrapper);
            this.renderNextSegment(outputEle, blocks, isFinalUpdate);
            return;
        }
    };
    AIAssistView.prototype.renderToolUI = function (toolBlock, tool, container) {
        var toolArgs = toolBlock.props || {};
        try {
            this.updateContent(tool.template, container, toolArgs, 'toolTemplate');
            if (tool.handler) {
                tool.handler(container, toolArgs);
            }
        }
        catch (error) {
            //error statement
        }
    };
    AIAssistView.prototype.renderOutputTextContainer = function (response, aiOutputEle, index, isMethodCall, isFinalUpdate, blocks) {
        if (this.contentFooterEle) {
            this.contentFooterEle.classList.remove('e-assist-toolbar-active');
        }
        this.outputContentBodyEle = this.createElement('div', { attrs: { class: 'e-content-body', tabindex: '0' } });
        if (!isMethodCall && blocks && blocks.length > 0) {
            this.lastRenderedBlockCount = 0;
            this.renderResponseSegments(this.outputContentBodyEle, blocks, isFinalUpdate);
        }
        if (!isMethodCall && !isNullOrUndefined(response) && response !== '') {
            this.updateDynamicResponse(this.outputContentBodyEle, isFinalUpdate, response, isNullOrUndefined(blocks) ? 0 : blocks.length);
        }
        if (this.outputElement.querySelector('.e-skeleton')) {
            this.outputElement.removeChild(this.skeletonContainer);
        }
        this.appendChildren(aiOutputEle, this.outputContentBodyEle);
        if (isFinalUpdate) {
            this.renderOutputToolbarItems(index, isFinalUpdate);
            this.appendChildren(aiOutputEle, this.contentFooterEle);
        }
    };
    AIAssistView.prototype.updateDynamicResponse = function (outputContentBodyEle, isFinalUpdate, response, blocksLength) {
        // Method used for updating the response value from prompt collection
        var responseWrapper = outputContentBodyEle.querySelector(".e-response.e-response-block-item-" + blocksLength);
        var existingResponseWrapper = responseWrapper === null;
        if (existingResponseWrapper) {
            responseWrapper = this.createElement('div', { attrs: { class: "e-response e-response-block-item-" + blocksLength } });
        }
        if (!this.enableStreaming || isFinalUpdate) {
            var htmlResponse = MarkdownConverter.toHtml(response);
            responseWrapper.innerHTML = htmlResponse;
        }
        else {
            responseWrapper.innerHTML = response;
        }
        if (isFinalUpdate) {
            this.renderPreTag(responseWrapper);
        }
        if (existingResponseWrapper) {
            outputContentBodyEle.append(responseWrapper);
        }
    };
    AIAssistView.prototype.renderPreTag = function (outputContentEle) {
        var _this = this;
        var preTags = Array.from(outputContentEle.querySelectorAll('pre'));
        preTags.forEach(function (preTag) {
            var copyIcon = document.createElement('span');
            copyIcon.className = 'e-icons e-code-copy e-assist-copy';
            preTag.insertBefore(copyIcon, preTag.firstChild);
            _this.preTagElements.push({ preTag: preTag, handler: _this.getCopyHandler(preTag) });
            EventHandler.add(copyIcon, 'click', _this.preTagElements[_this.preTagElements.length - 1].handler);
        });
    };
    AIAssistView.prototype.getCopyHandler = function (preTag) {
        return function () {
            var preText = preTag.innerText;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            window.navigator.clipboard.writeText(preText);
            var copyIcon = preTag.querySelector('.e-code-copy');
            copyIcon.className = 'e-icons e-code-copy e-assist-check';
            setTimeout(function () {
                copyIcon.className = 'e-icons e-code-copy e-assist-copy';
            }, 1000);
        };
    };
    AIAssistView.prototype.renderOutputToolbarItems = function (index, isFinalUpdate) {
        this.contentFooterEle = this.createElement('div', {
            className: 'e-content-footer e-assist-toolbar-active'
        });
        if (this.aiAssistViewRendered) {
            if (this.outputElement.querySelector('.e-skeleton')) {
                this.outputElement.removeChild(this.skeletonContainer);
            }
            if (isFinalUpdate && this.suggestionsElement) {
                this.suggestionsElement.hidden = false;
            }
        }
        var navigationUI = this.renderResponseNavigation(index);
        if (navigationUI) {
            this.contentFooterEle.appendChild(navigationUI);
        }
        this.renderResponseToolbar(index);
        var toolbarContainer = this.createElement('div', {
            attrs: { class: 'e-response-toolbar-wrapper' }
        });
        this.responseToolbarEle.appendTo(toolbarContainer);
        this.responseToolbarEle.element.setAttribute('aria-label', "response-toolbar-" + index);
        this.contentFooterEle.appendChild(toolbarContainer);
    };
    AIAssistView.prototype.renderResponseNavigation = function (promptIndex) {
        var _this = this;
        var regeneratedResponses = this.regeneratedResponses.get(promptIndex);
        if (!regeneratedResponses || regeneratedResponses.length <= 1) {
            return this.createElement('div', {});
        }
        var navigationContainer = this.createElement('div', {
            attrs: { class: 'e-response-navigation-container' }
        });
        var currentIndex = this.currentRegeneratedIndex.get(promptIndex) || 0;
        var totalCount = regeneratedResponses.length;
        var prevButtonAttrs = {
            class: 'e-btn e-icons e-assist-previous',
            'aria-label': this.l10n.getConstant('previousResponse'),
            title: this.l10n.getConstant('previousResponse')
        };
        if (currentIndex === 0) {
            prevButtonAttrs['class'] += ' e-disabled';
        }
        var prevButton = this.createElement('button', { attrs: prevButtonAttrs });
        var indexIndicator = this.createElement('span', {
            attrs: { class: 'e-response-index-indicator' },
            innerHTML: currentIndex + 1 + " / " + totalCount
        });
        var nextButtonAttrs = {
            class: 'e-btn e-icons e-assist-next',
            'aria-label': this.l10n.getConstant('nextResponse'),
            title: this.l10n.getConstant('nextResponse')
        };
        if (currentIndex === totalCount - 1) {
            nextButtonAttrs['class'] += ' e-disabled';
        }
        var nextButton = this.createElement('button', { attrs: nextButtonAttrs });
        if (prevButton.classList.contains('e-disabled')) {
            prevButton.tabIndex = -1;
        }
        else {
            prevButton.tabIndex = 0;
        }
        if (nextButton.classList.contains('e-disabled')) {
            nextButton.tabIndex = -1;
        }
        else {
            nextButton.tabIndex = 0;
        }
        navigationContainer.appendChild(prevButton);
        navigationContainer.appendChild(indexIndicator);
        navigationContainer.appendChild(nextButton);
        EventHandler.add(prevButton, 'click', function () {
            if (prevButton.classList.contains('e-disabled')) {
                return;
            }
            _this.navigateRegeneratedResponse(promptIndex, -1);
        });
        EventHandler.add(nextButton, 'click', function () {
            if (nextButton.classList.contains('e-disabled')) {
                return;
            }
            _this.navigateRegeneratedResponse(promptIndex, 1);
        });
        return navigationContainer;
    };
    AIAssistView.prototype.navigateRegeneratedResponse = function (promptIndex, direction) {
        var regeneratedResponses = this.regeneratedResponses.get(promptIndex);
        var regeneratedBlocksArr = this.regeneratedBlocks.get(promptIndex);
        var currentIndex = this.currentRegeneratedIndex.get(promptIndex) || 0;
        var newIndex = currentIndex + direction;
        if (newIndex < 0 || newIndex >= regeneratedResponses.length) {
            return;
        }
        this.currentRegeneratedIndex.set(promptIndex, newIndex);
        var prevOnChange = this.isProtectedOnChange;
        this.isProtectedOnChange = true;
        // eslint-disable-next-line security/detect-object-injection
        this.prompts[promptIndex].response = regeneratedResponses[newIndex];
        var blocksAtIndex = regeneratedBlocksArr && newIndex < regeneratedBlocksArr.length
            ? regeneratedBlocksArr[newIndex] : [];
        this.prompts[promptIndex].blocks = blocksAtIndex;
        this.isProtectedOnChange = prevOnChange;
        var responseContainer = this.element.querySelector("#e-response-item_" + promptIndex);
        if (responseContainer) {
            if (this.responseItemTemplate) {
                // For custom template: preserve footer during navigation
                var outputEle_1 = responseContainer.querySelector('.e-output');
                var footer_1 = responseContainer.querySelector('.e-content-footer');
                if (outputEle_1 && footer_1) {
                    var childrenToRemove = Array.from(outputEle_1.children).filter(function (child) { return child !== footer_1; });
                    childrenToRemove.forEach(function (child) {
                        outputEle_1.removeChild(child);
                    });
                    this.getContextObject('responseItemTemplate', outputEle_1, promptIndex);
                    outputEle_1.appendChild(footer_1);
                }
            }
            else {
                var contentBody = responseContainer.querySelector('.e-content-body');
                if (contentBody) {
                    contentBody.innerHTML = '';
                    this.lastRenderedBlockCount = 0;
                    this.blockIndex = 0;
                    if (blocksAtIndex && blocksAtIndex.length > 0) {
                        this.renderResponseSegments(contentBody, blocksAtIndex, true);
                    }
                    var responseText = regeneratedResponses[newIndex];
                    if (!isNullOrUndefined(responseText) && responseText !== '') {
                        this.updateDynamicResponse(contentBody, true, responseText, blocksAtIndex ? blocksAtIndex.length : 0);
                    }
                    if ((!blocksAtIndex || blocksAtIndex.length === 0) && (isNullOrUndefined(responseText) || responseText === '')) {
                        var newResponse = MarkdownConverter.toHtml(regeneratedResponses[newIndex]);
                        contentBody.innerHTML = newResponse;
                        this.renderPreTag(contentBody);
                    }
                }
            }
            var existingNav = responseContainer.querySelector('.e-response-navigation-container');
            if (existingNav) {
                this.updateNavigationUI(promptIndex, existingNav);
            }
        }
    };
    AIAssistView.prototype.updateNavigationUI = function (promptIndex, existingNav) {
        var regeneratedResponses = this.regeneratedResponses.get(promptIndex);
        var currentIndex = this.currentRegeneratedIndex.get(promptIndex) || 0;
        var totalCount = regeneratedResponses.length;
        var prevButton = existingNav.querySelector('.e-assist-previous');
        var nextButton = existingNav.querySelector('.e-assist-next');
        var indexIndicator = existingNav.querySelector('.e-response-index-indicator');
        if (prevButton) {
            if (currentIndex === 0) {
                addClass([prevButton], 'e-disabled');
                prevButton.tabIndex = -1;
            }
            else {
                removeClass([prevButton], 'e-disabled');
                prevButton.tabIndex = 0;
            }
        }
        if (nextButton) {
            if (currentIndex === totalCount - 1) {
                addClass([nextButton], 'e-disabled');
                nextButton.tabIndex = -1;
            }
            else {
                removeClass([nextButton], 'e-disabled');
                nextButton.tabIndex = 0;
            }
        }
        if (indexIndicator) {
            indexIndicator.innerHTML = currentIndex + 1 + " / " + totalCount;
        }
    };
    AIAssistView.prototype.renderResponseToolbar = function (index) {
        var _this = this;
        var pushToolbar = this.responseToolbarSettings.items.map(function (item) {
            var toolbarItem = {
                type: item.type,
                visible: item.visible,
                disabled: item.disabled,
                tooltipText: item.tooltip,
                template: item.template,
                prefixIcon: item.iconCss,
                text: item.text,
                cssClass: item.cssClass,
                align: item.align,
                width: _this.responseToolbarSettings.width,
                tabIndex: item.tabIndex
            };
            if (toolbarItem.prefixIcon === 'e-icons e-assist-like' && _this.prompts[parseInt(index.toString(), 10)].isResponseHelpful) {
                toolbarItem.prefixIcon = 'e-icons e-assist-like-filled';
            }
            else if (toolbarItem.prefixIcon === 'e-icons e-assist-dislike' && _this.prompts[parseInt(index.toString(), 10)].isResponseHelpful === false) {
                toolbarItem.prefixIcon = 'e-icons e-assist-dislike-filled';
            }
            return toolbarItem;
        });
        this.responseToolbarEle = new Toolbar({
            items: pushToolbar,
            clicked: function (args) {
                var eventItemArgs = {
                    type: args.item.type,
                    text: args.item.text,
                    iconCss: args.item.prefixIcon,
                    cssClass: args.item.cssClass,
                    tooltip: args.item.tooltipText,
                    template: args.item.template,
                    disabled: args.item.disabled,
                    visible: args.item.visible,
                    align: args.item.align,
                    tabIndex: args.item.tabIndex
                };
                var eventArgs = {
                    item: eventItemArgs,
                    event: args.originalEvent,
                    cancel: false,
                    dataIndex: index
                };
                if (_this.responseToolbarSettings.itemClicked) {
                    _this.responseToolbarSettings.itemClicked.call(_this, eventArgs);
                }
                if (!eventArgs.cancel) {
                    _this.handleItemClick(args, index);
                }
            }
        });
    };
    AIAssistView.prototype.extractResponseText = function (output) {
        if (typeof output === 'string') {
            return output;
        }
        if (typeof output === 'object') {
            return output.response;
        }
        return '';
    };
    AIAssistView.prototype.handleRegenerateClick = function (promptIndex) {
        // eslint-disable-next-line security/detect-object-injection
        var currentResponse = this.prompts[promptIndex].response;
        // eslint-disable-next-line security/detect-object-injection
        var currentBlocks = this.prompts[promptIndex].blocks;
        if (!this.regeneratedResponses.has(promptIndex)) {
            this.regeneratedResponses.set(promptIndex, [currentResponse]);
            this.regeneratedBlocks.set(promptIndex, [currentBlocks || []]);
            this.currentRegeneratedIndex.set(promptIndex, 0);
        }
        this.isRegenerating = true;
        this.regeneratingPromptIndex = promptIndex;
        this.isResponseRequested = true;
        this.isOutputRenderingStop = false;
        this.toggleStopRespondingButton(true);
        this.resetResponse(promptIndex);
        // eslint-disable-next-line security/detect-object-injection
        var promptText = this.prompts[promptIndex].prompt;
        var eventArgs = {
            cancel: false,
            prompt: promptText,
            // eslint-disable-next-line security/detect-object-injection
            attachedFiles: this.prompts[promptIndex].attachedFiles || []
        };
        this.trigger('promptRequest', eventArgs);
    };
    AIAssistView.prototype.resetResponse = function (promptIndex) {
        var responseContainer = this.element.querySelector("#e-response-item_" + promptIndex);
        var loadingBody = this.skeletonContainer.querySelector('.e-loading-body');
        loadingBody.classList.remove('e-loading-body');
        if (this.responseItemTemplate) {
            var outputEle_2 = responseContainer.querySelector('.e-output');
            var footer_2 = outputEle_2.querySelector('.e-content-footer');
            var childrenToRemove = Array.from(outputEle_2.children).filter(function (child) { return child !== footer_2; });
            childrenToRemove.forEach(function (child) {
                outputEle_2.removeChild(child);
            });
            outputEle_2.insertBefore(loadingBody, footer_2);
            this.hideResponseToolbar(responseContainer);
        }
        else {
            var contentBody = responseContainer.querySelector('.e-content-body');
            contentBody.innerHTML = '';
            contentBody.appendChild(loadingBody);
            this.hideResponseToolbar(responseContainer);
        }
        this.renderSkeleton();
    };
    AIAssistView.prototype.hideResponseToolbar = function (responseContainer) {
        var navigationContainer = responseContainer.querySelector('.e-response-navigation-container');
        if (navigationContainer) {
            navigationContainer.classList.add('e-response-hidden');
        }
        var toolbarWrapper = responseContainer.querySelector('.e-response-toolbar-wrapper');
        if (toolbarWrapper) {
            toolbarWrapper.classList.add('e-response-hidden');
        }
    };
    AIAssistView.prototype.handleItemClick = function (args, index) {
        var _this = this;
        if (args.item.prefixIcon === 'e-icons e-assist-copy') {
            var currentPrompt = this.prompts[parseInt(index.toString(), 10)];
            var contentToCopy = currentPrompt.response;
            if (!contentToCopy && currentPrompt.blocks && currentPrompt.blocks.length > 0) {
                var blocks = currentPrompt.blocks;
                for (var i = blocks.length - 1; i >= 0; i--) {
                    if (blocks[parseInt(i.toString(), 10)].blockType === 'text') {
                        contentToCopy = blocks[parseInt(i.toString(), 10)].content;
                        break;
                    }
                }
            }
            this.getClipBoardContent(SanitizeHtmlHelper.sanitize(contentToCopy));
            args.item.prefixIcon = 'e-icons e-assist-check';
            this.responseToolbarEle.dataBind();
            setTimeout(function () {
                args.item.prefixIcon = 'e-icons e-assist-copy';
                _this.responseToolbarEle.dataBind();
            }, 1000);
        }
        var icon = args.item.prefixIcon;
        var isLikeInteracted = icon === 'e-icons e-assist-like-filled' || icon === 'e-icons e-assist-like';
        var isDislikeInteracted = icon === 'e-icons e-assist-dislike-filled' || icon === 'e-icons e-assist-dislike';
        if (isLikeInteracted || isDislikeInteracted) {
            var isHelpful = null;
            if (isLikeInteracted) {
                isHelpful = this.prompts[parseInt(index.toString(), 10)].isResponseHelpful === true ? null : true;
            }
            else if (isDislikeInteracted) {
                isHelpful = this.prompts[parseInt(index.toString(), 10)].isResponseHelpful === false ? null : false;
            }
            var prevOnChange = this.isProtectedOnChange;
            this.isProtectedOnChange = true;
            this.prompts[parseInt(index.toString(), 10)].isResponseHelpful = isHelpful;
            var promptItem = this.prompts[parseInt(index.toString(), 10)];
            // eslint-disable-next-line  @typescript-eslint/no-explicit-any
            var controlParentItems = args.item.controlParent.items;
            var likeIndex = controlParentItems.findIndex(function (it) {
                return it.prefixIcon === 'e-icons e-assist-like' || it.prefixIcon === 'e-icons e-assist-like-filled';
            });
            var dislikeIndex = controlParentItems.findIndex(function (it) {
                return it.prefixIcon === 'e-icons e-assist-dislike' || it.prefixIcon === 'e-icons e-assist-dislike-filled';
            });
            if (isLikeInteracted) {
                if (promptItem.isResponseHelpful === true) {
                    args.item.prefixIcon = 'e-icons e-assist-like-filled';
                    if (controlParentItems && controlParentItems.length > 2) {
                        controlParentItems[parseInt(dislikeIndex.toString(), 10)].prefixIcon = 'e-icons e-assist-dislike';
                    }
                }
                else {
                    args.item.prefixIcon = 'e-icons e-assist-like';
                }
            }
            else if (isDislikeInteracted) {
                if (promptItem.isResponseHelpful === false) {
                    args.item.prefixIcon = 'e-icons e-assist-dislike-filled';
                    if (controlParentItems && controlParentItems.length > 1) {
                        controlParentItems[parseInt(likeIndex.toString(), 10)].prefixIcon = 'e-icons e-assist-like';
                    }
                }
                else {
                    args.item.prefixIcon = 'e-icons e-assist-dislike';
                }
            }
            this.responseToolbarEle.dataBind();
            this.isProtectedOnChange = prevOnChange;
        }
        // Built-in Text-to-Speech
        if (args.item.prefixIcon === 'e-icons e-assist-audio' ||
            args.item.prefixIcon === 'e-icons e-assist-stop') {
            if (this.currentUtterance) {
                speechSynthesis.cancel();
                this.currentUtterance = null;
                args.item.prefixIcon = 'e-icons e-assist-audio';
                args.item.tooltipText = this.l10n.getConstant('readAloud');
            }
            else {
                var contentBody = this.element.querySelector("#e-response-item_" + index + " .e-content-body");
                var cleanText = (contentBody && contentBody.innerText) ? contentBody.innerText.trim() : '';
                this.speakText(cleanText, args.item);
            }
            this.responseToolbarEle.dataBind();
        }
        // Built-in Regenerate Support
        if (args.item.prefixIcon === 'e-icons e-assist-regenerate') {
            this.handleRegenerateClick(index);
        }
    };
    AIAssistView.prototype.speakText = function (cleanText, item) {
        var _this = this;
        if (!cleanText) {
            return;
        }
        var utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.lang = this.textToSpeechSettings.language;
        utterance.pitch = this.textToSpeechSettings.speechPitch;
        utterance.rate = this.textToSpeechSettings.speechRate;
        utterance.volume = this.textToSpeechSettings.volume;
        if (this.textToSpeechSettings.voice) {
            utterance.voice = this.textToSpeechSettings.voice;
        }
        utterance.onend = function () {
            _this.currentUtterance = null;
            item.prefixIcon = 'e-icons e-assist-audio';
            item.tooltipText = _this.l10n.getConstant('readAloud');
            if (_this.responseToolbarEle) {
                _this.responseToolbarEle.dataBind();
            }
        };
        speechSynthesis.speak(utterance);
        this.currentUtterance = utterance;
        item.prefixIcon = 'e-icons e-assist-stop';
        item.tooltipText = this.l10n.getConstant('stopAudio');
    };
    AIAssistView.prototype.renderPrompt = function (promptText, promptIndex, attachedFiles) {
        var _this = this;
        var outputPrompt = this.createElement('div', { attrs: { class: 'e-prompt-text', tabindex: '0' } });
        var promptFiles = this.createElement('div', { attrs: { class: 'e-prompt-uploaded-files' } });
        var promptContent = this.createElement('div', { className: 'e-prompt-content' });
        var promptDetails = this.createElement('div', { className: 'e-prompt-details' });
        var promptToolbarContainer = this.createElement('div', { className: 'e-prompt-toolbar' });
        var promptToolbar = this.createElement('div');
        var userIcon = this.createElement('span', { className: this.promptIconCss ? 'e-prompt-icon e-icons '
                + this.promptIconCss : '' });
        if (this.promptItemTemplate) {
            this.getContextObject('promptItemTemplate', this.outputSuggestionEle, promptIndex);
        }
        else {
            outputPrompt.innerHTML = promptText;
            var uploadedFiles = attachedFiles || this.uploadedFiles;
            if (uploadedFiles.length > 0) {
                uploadedFiles.forEach(function (file) {
                    promptFiles.appendChild(_this.createFileItem(file, false));
                });
                promptDetails.appendChild(promptFiles);
            }
            if (promptText.length > 0) {
                promptDetails.appendChild(outputPrompt);
            }
            promptContent.appendChild(promptDetails);
            if (this.promptIconCss) {
                promptContent.appendChild(userIcon);
            }
            this.outputSuggestionEle.append(promptContent);
        }
        this.renderPromptToolbar(promptToolbar, promptIndex);
        promptToolbarContainer.append(promptToolbar);
        this.appendChildren(this.outputSuggestionEle, promptToolbarContainer);
    };
    AIAssistView.prototype.renderPromptToolbar = function (element, promptIndex) {
        var _this = this;
        var pushToolbar = [];
        if (this.promptToolbarSettings.items.length === 0) {
            pushToolbar = [
                { prefixIcon: 'e-icons e-assist-edit', tooltipText: 'Edit' },
                { prefixIcon: 'e-icons e-assist-copy', tooltipText: 'Copy' }
            ];
            var prevOnChange = this.isProtectedOnChange;
            this.isProtectedOnChange = true;
            this.promptToolbarSettings.items = [
                { iconCss: 'e-icons e-assist-edit', tooltip: 'Edit' },
                { iconCss: 'e-icons e-assist-copy', tooltip: 'Copy' }
            ];
            this.isProtectedOnChange = prevOnChange;
        }
        else {
            pushToolbar = this.promptToolbarSettings.items.map(function (item) { return ({
                type: item.type,
                template: item.template,
                disabled: item.disabled,
                cssClass: item.cssClass,
                visible: item.visible,
                tooltipText: item.tooltip,
                prefixIcon: item.iconCss,
                text: item.text,
                align: item.align,
                width: _this.promptToolbarSettings.width,
                tabIndex: item.tabIndex
            }); });
        }
        this.promptToolbarEle = new Toolbar({
            items: pushToolbar,
            clicked: function (args) {
                var eventItemArgs = {
                    type: args.item.type,
                    text: args.item.text,
                    iconCss: args.item.prefixIcon,
                    cssClass: args.item.cssClass,
                    tooltip: args.item.tooltipText,
                    template: args.item.template,
                    disabled: args.item.disabled,
                    visible: args.item.visible,
                    align: args.item.align,
                    tabIndex: args.item.tabIndex
                };
                var eventArgs = {
                    item: eventItemArgs,
                    event: args.originalEvent,
                    cancel: false,
                    dataIndex: promptIndex
                };
                if (_this.promptToolbarSettings.itemClicked) {
                    _this.promptToolbarSettings.itemClicked.call(_this, eventArgs);
                }
                if (!eventArgs.cancel) {
                    if (args.item.prefixIcon === 'e-icons e-assist-edit') {
                        _this.onEditIconClick(promptIndex);
                    }
                    if (args.item.prefixIcon === 'e-icons e-assist-copy') {
                        _this.getClipBoardContent(SanitizeHtmlHelper.sanitize(_this.prompts[parseInt(promptIndex.toString(), 10)].prompt));
                        args.item.prefixIcon = 'e-icons e-assist-check';
                        _this.promptToolbarEle.dataBind();
                        setTimeout(function () {
                            args.item.prefixIcon = 'e-icons e-assist-copy';
                            _this.promptToolbarEle.dataBind();
                        }, 1000);
                    }
                }
            }
        });
        this.promptToolbarEle.appendTo(element);
        this.promptToolbarEle.element.setAttribute('aria-label', "prompt-toolbar-" + promptIndex);
    };
    AIAssistView.prototype.renderSkeleton = function () {
        this.skeletonContainer = this.createElement('div', { className: 'e-output-container' });
        var outputViewWrapper = this.createElement('div', { className: 'e-output', styles: 'width: 70%;' });
        var skeletonIconEle = this.createElement('span', { className: 'e-output-icon e-skeleton e-skeleton-text e-shimmer-wave' });
        var skeletonBodyEle = this.createElement('div', { className: 'e-loading-body' });
        var skeletonFooterEle = this.createElement('div', { className: 'e-loading-footer' });
        var _a = [
            this.createElement('div', { className: 'e-skeleton e-skeleton-text e-shimmer-wave', styles: 'width: 100%; height: 15px;' }),
            this.createElement('div', { className: 'e-skeleton e-skeleton-text e-shimmer-wave', styles: 'width: 75%; height: 15px;' }),
            this.createElement('div', { className: 'e-skeleton e-skeleton-text e-shimmer-wave', styles: 'width: 50%; height: 15px;' })
        ], skeletonLine1 = _a[0], skeletonLine2 = _a[1], skeletonLine3 = _a[2];
        var footerSkeleton = [
            this.createElement('div', { className: 'e-skeleton e-skeleton-text e-shimmer-wave', styles: 'width: 100%; height: 30px;' })
        ][0];
        this.appendChildren(skeletonBodyEle, skeletonLine1, skeletonLine2, skeletonLine3);
        skeletonFooterEle.append(footerSkeleton);
        this.appendChildren(outputViewWrapper, skeletonBodyEle, skeletonFooterEle);
        this.appendChildren(this.skeletonContainer, skeletonIconEle, outputViewWrapper);
    };
    AIAssistView.prototype.onEditIconClick = function (promptIndex) {
        if (this.editableTextarea) {
            if (this.suggestionsElement) {
                this.suggestionsElement.hidden = true;
            }
            var prevOnChange = this.isProtectedOnChange;
            this.isProtectedOnChange = true;
            this.editableTextarea.innerHTML = this.prompt =
                SanitizeHtmlHelper.sanitize(this.prompts[parseInt(promptIndex.toString(), 10)].prompt);
            this.isProtectedOnChange = prevOnChange;
            this.refreshTextareaUI();
            this.editableTextarea.focus();
            this.setFocusAtEnd(this.editableTextarea);
            this.pushToUndoStack(this.prompt);
            this.redoStack = [];
        }
    };
    AIAssistView.prototype.refreshTextareaUI = function () {
        this.updateHiddenTextarea(this.prompt);
        this.checkAndActivateSendIcon();
        this.updateFooterElementClass();
        this.updateFooterType(this.footerToolbarSettings.toolbarPosition);
        this.toggleClearIcon();
    };
    AIAssistView.prototype.checkAndActivateSendIcon = function () {
        if (!this.footerToolbarEle) {
            return;
        }
        var length = this.prompt.length > 0 ? this.prompt.length : this.uploadedFiles.length;
        if (this.sendToolbarItem.prefixIcon === 'e-icons e-assist-send') {
            var sendItem = this.footerToolbarEle.element.querySelector('.e-assist-send');
            if (sendItem) {
                if (length > 0) {
                    removeClass([sendItem], 'disabled');
                    sendItem.setAttribute('title', this.l10n.getConstant('send'));
                }
                else {
                    addClass([sendItem], 'disabled');
                }
            }
        }
    };
    AIAssistView.prototype.toggleClearIcon = function () {
        if (this.clearToolbarItem && this.footerToolbarEle) {
            var isFocused = document.activeElement === this.editableTextarea;
            var hasContent = this.editableTextarea.textContent.length > 0;
            var clearItemElement = this.footerToolbarEle.element.querySelector('.e-toolbar-item .e-icons.e-assist-clear-icon')
                .closest('.e-toolbar-item');
            if (clearItemElement) {
                if (isFocused && hasContent) {
                    this.footerToolbarEle.hideItem(clearItemElement, false);
                }
                else {
                    this.footerToolbarEle.hideItem(clearItemElement, true);
                }
            }
        }
    };
    AIAssistView.prototype.updateIcons = function (newCss, isPromptIconCss) {
        if (isPromptIconCss === void 0) { isPromptIconCss = false; }
        var elements;
        if (this.outputElement) {
            if (isPromptIconCss) {
                newCss = 'e-prompt-icon e-icons ' + newCss;
                elements = this.outputElement.querySelectorAll('.e-prompt-icon');
            }
            else {
                newCss = ' e-output-icon e-icons ' + newCss;
                elements = this.outputElement.querySelectorAll('.e-output-icon');
            }
        }
        for (var index = 0; index < (elements && elements.length); index++) {
            removeClass([elements[parseInt(index.toString(), 10)]], elements[parseInt(index.toString(), 10)].classList.toString().trim().split(' '));
            addClass([elements[parseInt(index.toString(), 10)]], newCss.trim().split(' '));
        }
    };
    AIAssistView.prototype.updateToolbarSettings = function (previousToolbar) {
        var previousToolbarIndex = 0;
        for (var index = this.views.length; index < this.toolbarItems.length; index++) {
            if (previousToolbar.items[parseInt(previousToolbarIndex.toString(), 10)] === this.toolbarItems[parseInt(index.toString(), 10)]) {
                this.toolbarItems.splice(index, 1);
            }
        }
        this.updateHeaderToolbar();
        this.toolbar.items = this.toolbarItems;
    };
    AIAssistView.prototype.updateAttachmentToolbarItemInSettings = function () {
        var prevOnChange = this.isProtectedOnChange;
        this.isProtectedOnChange = true;
        var items = this.footerToolbarSettings.items;
        var attachmentItemIndex = items.findIndex(function (item) { return item.iconCss === 'e-icons e-assist-attachment-icon'; });
        if (this.enableAttachments && attachmentItemIndex === -1) {
            var attachmentItem = {
                iconCss: 'e-icons e-assist-attachment-icon',
                tooltip: this.l10n.getConstant('attachments'),
                align: 'Right'
            };
            var sendItemIndex = items.findIndex(function (item) { return item.iconCss === 'e-icons e-assist-send'; });
            items.splice(sendItemIndex !== -1 ? sendItemIndex : items.length, 0, attachmentItem);
        }
        else if (!this.enableAttachments && attachmentItemIndex !== -1) {
            items.splice(attachmentItemIndex, 1);
        }
        this.isProtectedOnChange = prevOnChange;
    };
    AIAssistView.prototype.updateClearToolbarItemInSettings = function () {
        var prevOnChange = this.isProtectedOnChange;
        this.isProtectedOnChange = true;
        var items = this.footerToolbarSettings.items;
        var clearItemIndex = items.findIndex(function (item) { return item.iconCss === 'e-icons e-assist-clear-icon'; });
        if (this.showClearButton && clearItemIndex === -1) {
            var clearItem = {
                iconCss: 'e-icons e-assist-clear-icon',
                tooltip: this.l10n.getConstant('clear'),
                align: 'Right'
            };
            var sendItemIndex = items.findIndex(function (item) { return item.iconCss === 'e-icons e-assist-send'; });
            items.splice(sendItemIndex !== -1 ? sendItemIndex : items.length, 0, clearItem);
        }
        else if (!this.showClearButton && clearItemIndex !== -1) {
            items.splice(clearItemIndex, 1);
        }
        this.isProtectedOnChange = prevOnChange;
    };
    AIAssistView.prototype.updateFooterToolbar = function () {
        var footerIconsWrapper = this.footer.querySelector('.e-footer-icons-wrapper');
        if (footerIconsWrapper) {
            footerIconsWrapper.innerHTML = '';
            this.footerToolbarEle = null;
            this.sendToolbarItem = null;
            this.clearToolbarItem = null;
            this.attachmentToolbarItem = null;
            this.renderFooterToolbar(footerIconsWrapper);
            this.refreshTextareaUI();
        }
    };
    AIAssistView.prototype.updateResponse = function (response, index, isFinalUpdate, responseItem, block, blocksLength) {
        if (!this.responseItemTemplate && responseItem) {
            var outputEle = responseItem.querySelector('.e-output');
            var outputContentBodyEle = responseItem.querySelector('.e-content-body');
            if (response && !this.isToolResponse) {
                if (outputContentBodyEle) {
                    //outputContentBodyEle.innerHTML = response;
                    this.updateDynamicResponse(outputContentBodyEle, isFinalUpdate, response, blocksLength);
                }
            }
            else if (this.isToolResponse) {
                var textContainers = outputContentBodyEle.querySelectorAll('.e-text');
                var textContainer = textContainers[textContainers.length - 1];
                if (textContainer) {
                    textContainer.innerHTML = block.content;
                }
            }
            if (isFinalUpdate && this.suggestionsElement) {
                this.suggestionsElement.hidden = false;
            }
            if (isFinalUpdate) {
                this.renderPreTag(outputContentBodyEle);
            }
            if (isFinalUpdate && outputEle.querySelector('.e-content-footer') === null) {
                this.renderOutputToolbarItems(index, isFinalUpdate);
                this.appendChildren(outputEle, this.contentFooterEle);
            }
        }
        else if (this.responseItemTemplate && responseItem) {
            // Template is configured AND container exists: update it instead of creating duplicate
            var prevOnChange = this.isProtectedOnChange;
            this.isProtectedOnChange = true;
            // Update the prompt model with accumulated response
            if (index < this.prompts.length) {
                this.prompts[parseInt(index.toString(), 10)].response = response;
            }
            this.isProtectedOnChange = prevOnChange;
            // Re-render template with updated data
            var outputEle = responseItem.querySelector('.e-output');
            if (outputEle) {
                outputEle.innerHTML = '';
                this.getContextObject('responseItemTemplate', outputEle, index);
                // Remove skeleton if present
                if (this.outputElement.querySelector('.e-skeleton')) {
                    this.outputElement.removeChild(this.skeletonContainer);
                }
                // Handle final update: toolbar and suggestions
                if (isFinalUpdate) {
                    if (this.suggestionsElement) {
                        this.suggestionsElement.hidden = false;
                    }
                    if (this.contentFooterEle) {
                        this.contentFooterEle.classList.remove('e-assist-toolbar-active');
                    }
                    if (this.hasStopResponseButton()) {
                        this.toggleStopRespondingButton(false);
                    }
                    this.renderOutputToolbarItems(index, isFinalUpdate);
                    this.appendChildren(outputEle, this.contentFooterEle);
                }
            }
        }
        else {
            // Template is configured BUT container doesn't exist yet: create it
            this.renderOutputContainer(undefined, response, undefined, index, false, isFinalUpdate);
        }
    };
    AIAssistView.prototype.streamText = function (text, onUpdate, onComplete) {
        var _this = this;
        if (!text || !text.trim()) {
            if (onComplete) {
                onComplete();
            }
            return;
        }
        var i = 0;
        var words = text.split(' ');
        var lastResponse = '';
        var streamingText = function () {
            if (_this.isOutputRenderingStop) {
                if (onComplete) {
                    onComplete();
                }
                return;
            }
            if (i < words.length) {
                lastResponse += (i === 0 ? '' : ' ') + words[i++];
                onUpdate(lastResponse, false);
                if (!_this.isRegenerating) {
                    _this.scrollToBottom();
                }
                setTimeout(streamingText, 15);
            }
            else {
                onUpdate(lastResponse, true);
                if (onComplete) {
                    onComplete();
                }
            }
        };
        streamingText();
    };
    AIAssistView.prototype.resetRegeneratingState = function () {
        this.isRegenerating = false;
        this.regeneratingPromptIndex = -1;
    };
    AIAssistView.prototype.streamResponse = function (response, index, blocksLength) {
        var _this = this;
        var prevOnChange = this.isProtectedOnChange;
        this.isProtectedOnChange = true;
        this.streamText(response, function (lastResponse, isComplete) {
            if (index >= _this.prompts.length) {
                _this.isResponseRequested = false;
                return;
            }
            var responseItem = _this.element.querySelector("#e-response-item_" + index);
            if (_this.isRegenerating) {
                if (responseItem) {
                    var contentBody = responseItem.querySelector('.e-content-body');
                    if (contentBody && contentBody.firstChild && contentBody.children.length === 1
                        && contentBody.querySelector('.e-skeleton')) {
                        contentBody.removeChild(contentBody.firstChild);
                    }
                }
            }
            else if (_this.outputElement.querySelector('.e-skeleton')) {
                _this.outputElement.removeChild(_this.skeletonContainer);
            }
            _this.updateResponse(lastResponse, index, isComplete, responseItem, null, blocksLength);
            _this.setupViewportFilling();
            if (isComplete) {
                if (_this.hasStopResponseButton()) {
                    _this.toggleStopRespondingButton(false);
                }
                _this.isResponseRequested = false;
                if (_this.isRegenerating) {
                    _this.resetRegeneratingState();
                }
            }
        });
        this.isProtectedOnChange = prevOnChange;
    };
    AIAssistView.prototype.streamToolResponse = function (response, element, streamingCompleted) {
        var prevOnChange = this.isProtectedOnChange;
        this.isProtectedOnChange = true;
        this.streamText(response, function (lastResponse) {
            element.innerHTML = lastResponse;
        }, streamingCompleted);
        this.isProtectedOnChange = prevOnChange;
    };
    AIAssistView.prototype.updateBannerTemplate = function (newTemplate) {
        if (!isNullOrUndefined(newTemplate)) {
            var contentContainer = this.element.querySelector('.e-view-container');
            var existingTemplate = contentContainer.querySelector('.e-banner-view');
            if (existingTemplate) {
                existingTemplate.remove();
            }
            this.updateBannerView(contentContainer);
        }
    };
    AIAssistView.prototype.updatePromptSuggestionTemplate = function () {
        if (this.suggestionsElement) {
            this.suggestionsElement.remove();
        }
        if (!this.isOutputRenderingStop) {
            this.renderSuggestions(this.promptSuggestions, this.promptSuggestionsHeader, this.promptSuggestionItemTemplate, 'promptSuggestion', 'promptSuggestionItemTemplate', this.onSuggestionClick);
        }
    };
    AIAssistView.prototype.updateFooterTemplate = function () {
        this.footer.innerHTML = '';
        this.updateFooterClass(this.footerTemplate);
        this.unWireFooterEvents(this.footerTemplate);
        this.renderAssistViewFooter();
        if (!this.footerTemplate) {
            this.wireFooterEvents(this.footerTemplate);
        }
    };
    AIAssistView.prototype.updateAttachmentSettings = function (newAttachment) {
        if (!isNullOrUndefined(newAttachment.allowedFileTypes)) {
            this.uploaderObj.allowedExtensions = newAttachment.allowedFileTypes;
        }
        if (!isNullOrUndefined(newAttachment.maxFileSize)) {
            this.uploaderObj.maxFileSize = newAttachment.maxFileSize;
        }
        this.uploaderObj.asyncSettings = {
            saveUrl: !isNullOrUndefined(newAttachment.saveUrl) ? newAttachment.saveUrl : this.uploaderObj.asyncSettings.saveUrl,
            removeUrl: !isNullOrUndefined(newAttachment.removeUrl) ? newAttachment.removeUrl : this.uploaderObj.asyncSettings.removeUrl
        };
    };
    AIAssistView.prototype.handleSTTDynamicChange = function (newProp, oldProp) {
        if (oldProp.enable !== newProp.enable) {
            this.updateFooterToolbar();
            this.updateSpeechToTextSettings(newProp);
        }
        if (isNullOrUndefined(this.speechToTextObj)) {
            return;
        }
        if (oldProp.allowInterimResults !== newProp.allowInterimResults) {
            this.speechToTextObj.allowInterimResults = newProp.allowInterimResults;
        }
        if (oldProp.buttonSettings !== newProp.buttonSettings) {
            this.speechToTextObj.buttonSettings = newProp.buttonSettings;
        }
        if (oldProp.tooltipSettings !== newProp.tooltipSettings) {
            this.speechToTextObj.tooltipSettings = newProp.tooltipSettings;
        }
        if (oldProp.showTooltip !== newProp.showTooltip) {
            this.speechToTextObj.showTooltip = newProp.showTooltip;
        }
        if (oldProp.cssClass !== newProp.cssClass) {
            this.speechToTextObj.cssClass = newProp.cssClass;
        }
        if (oldProp.disabled !== newProp.disabled) {
            this.speechToTextObj.disabled = newProp.disabled;
        }
        if (oldProp.lang !== newProp.lang) {
            this.speechToTextObj.lang = newProp.lang;
        }
        if (oldProp.listeningState !== newProp.listeningState) {
            this.speechToTextObj.listeningState = newProp.listeningState;
        }
        this.speechToTextObj.dataBind();
    };
    AIAssistView.prototype.updateSpeechToTextSettings = function (newProps) {
        this.renderSpeechToText();
        if (this.speechToTextObj == null) {
            return;
        }
        this.speechToTextObj.allowInterimResults = newProps.allowInterimResults;
        this.speechToTextObj.transcript = newProps.transcript;
        this.speechToTextObj.lang = newProps.lang || 'en-US';
        this.speechToTextObj.disabled = newProps.disabled;
        this.speechToTextObj.buttonSettings = newProps.buttonSettings;
        this.speechToTextObj.showTooltip = newProps.showTooltip;
        this.speechToTextObj.tooltipSettings = newProps.tooltipSettings;
        this.speechToTextObj.cssClass = newProps.cssClass;
    };
    AIAssistView.prototype.updateLocale = function () {
        // Update file upload failure locale
        this.l10n.setLocale(this.locale);
        var failureElement = this.viewWrapper.querySelector('.e-upload-failure-alert');
        if (failureElement) {
            var failureMessageEle = failureElement.querySelector('.e-failure-message');
            if (failureMessageEle.classList.contains('e-size-failure')) {
                failureMessageEle.textContent = this.l10n.getConstant('fileSizeFailure');
            }
            else {
                var failureText = this.l10n.getConstant('fileCountFailure');
                failureText = failureText.replace('{0}', this.attachmentSettings.maximumCount.toString());
                if (this.attachmentSettings.maximumCount === 1) {
                    failureText = failureText.replace('files', 'file');
                }
                failureMessageEle.textContent = failureText;
            }
        }
    };
    AIAssistView.prototype.destroy = function () {
        if (this.currentUtterance) {
            speechSynthesis.cancel();
            this.currentUtterance = null;
        }
        _super.prototype.destroy.call(this);
        this.unWireEvents();
        this.destroyAndNullify(this.responseToolbarEle);
        this.destroyAndNullify(this.promptToolbarEle);
        this.destroyAndNullify(this.footerToolbarEle);
        this.destroyAndNullify(this.downArrowIcon);
        this.destroyAndNullify(this.toolbar);
        this.destroyAndNullify(this.speechToTextObj);
        this.destroyAssistView();
        //private html elements nullify
        remove(this.viewWrapper);
        this.viewWrapper = null;
        this.aiAssistViewRendered = null;
        this.assistViewTemplateIndex = null;
        this.toolbarItems = [];
        this.displayContents = [];
        this.isOutputRenderingStop = null;
        this.isResponseRequested = null;
        this.suggestionHeader = null;
        this.previousElement = null;
        this.assistCustomSection = null;
        this.speechToTextToolbarItem = null;
        this.preTagElements = [];
        this.regeneratedResponses.clear();
        this.regeneratedBlocks.clear();
        this.currentRegeneratedIndex.clear();
        this.originalBlocks.clear();
        this.isRegenerating = false;
        this.regeneratingPromptIndex = -1;
        this.registeredTools.clear();
        // properties nullify
        this.toolbarSettings = this.promptToolbarSettings = this.responseToolbarSettings = {};
        if (this.cssClass) {
            removeClass([this.element], this.cssClass.split(' '));
        }
        this.element.classList.remove('e-rtl');
    };
    AIAssistView.prototype.destroyAssistView = function () {
        var properties = [
            'toolbarHeader',
            'sendIcon',
            'clearIcon',
            'suggestions',
            'skeletonContainer',
            'outputElement',
            'outputSuggestionEle',
            'contentFooterEle',
            'editableTextarea',
            'footer',
            'speechToTextToolbarItem',
            'assistCustomSection',
            'content',
            'stopResponding',
            'contentWrapper'
        ];
        for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
            var prop = properties_1[_i];
            var element = prop;
            this.removeAndNullify(this[element]);
            this[element] = null;
        }
    };
    /**
     * Executes the specified prompt in the AIAssistView component. The method accepts a string representing the prompt.
     *
     * @param {string} prompt - The prompt text to be executed. It must be a non-empty string.
     *
     * @returns {void}
     */
    AIAssistView.prototype.executePrompt = function (prompt) {
        if (!isNullOrUndefined(prompt) && prompt.trim().length > 0) {
            var prevOnChange = this.isProtectedOnChange;
            this.isProtectedOnChange = true;
            this.prompt = prompt;
            this.isProtectedOnChange = prevOnChange;
            this.onSendIconClick();
        }
    };
    /**
     * Registers a custom tool UI for rendering AI-generated tool responses.
     * Use this method to define how specific tool blocks should be rendered in the AIAssistView.
     *
     * @param {ToolUIConfig} tool - Configuration object containing toolName, template, and optional handler callback
     * @returns {void}
     *
     */
    AIAssistView.prototype.registerToolUI = function (tool) {
        if (tool.toolName) {
            var name_1 = tool.toolName.toLowerCase();
            this.registeredTools.set(name_1, { toolName: name_1, template: tool.template, handler: tool.handler });
        }
    };
    /**
     * Adds a response to the last prompt or appends a new prompt data in the AIAssistView component.
     *
     * @param {string | Object} outputResponse - The response to be added. Can be a string representing the response or an object containing both the prompt and the response.
     * - If `outputResponse` is a string, it updates the response for the last prompt in the prompts collection.
     * - If `outputResponse` is an object, it can either update the response of an existing prompt if the prompt matches or append a new prompt data.
     * @param {boolean} isFinalUpdate - Indicates whether this response is the final one, to hide the stop response button.
     * @returns {void}
     */
    AIAssistView.prototype.addPromptResponse = function (outputResponse, isFinalUpdate) {
        var _this = this;
        if (isFinalUpdate === void 0) { isFinalUpdate = true; }
        var prevOnChange = this.isProtectedOnChange;
        this.isProtectedOnChange = true;
        if (this.isRegenerating && this.regeneratingPromptIndex >= 0 && this.regeneratingPromptIndex < this.prompts.length) {
            var regenerateIndex = this.regeneratingPromptIndex;
            var responseText = this.extractResponseText(outputResponse);
            var blocks = typeof outputResponse === 'object' && outputResponse !== null && !isNullOrUndefined(outputResponse.blocks)
                ? outputResponse.blocks
                : [];
            // eslint-disable-next-line security/detect-object-injection
            var responseHistory = this.regeneratedResponses.get(regenerateIndex) || [this.prompts[regenerateIndex].response];
            responseHistory.push(responseText);
            this.regeneratedResponses.set(regenerateIndex, responseHistory);
            // Store corresponding blocks
            var blocksHistory = this.regeneratedBlocks.get(regenerateIndex) ||
                [this.prompts[regenerateIndex].blocks || []];
            blocksHistory.push(blocks);
            this.regeneratedBlocks.set(regenerateIndex, blocksHistory);
            this.currentRegeneratedIndex.set(regenerateIndex, responseHistory.length - 1);
            // eslint-disable-next-line security/detect-object-injection
            this.prompts[regenerateIndex].response = responseText;
            this.prompts[regenerateIndex].blocks = blocks;
            var responseContainer = this.element.querySelector("#e-response-item_" + regenerateIndex);
            if (responseContainer) {
                if (this.responseItemTemplate) {
                    this.updateResponse(responseText, regenerateIndex, isFinalUpdate, responseContainer);
                }
                else {
                    var contentBody = responseContainer.querySelector('.e-content-body');
                    if (contentBody) {
                        if (this.enableStreaming) {
                            var blocksLength = typeof outputResponse === 'object' && outputResponse !== null && !isNullOrUndefined(outputResponse.blocks)
                                ? outputResponse.blocks.length
                                : 0;
                            this.streamResponse(responseText, regenerateIndex, blocksLength);
                        }
                        else {
                            var htmlResponse = MarkdownConverter.toHtml(responseText);
                            contentBody.innerHTML = htmlResponse;
                            this.renderPreTag(contentBody);
                        }
                        var navigationContainer = responseContainer.querySelector('.e-response-navigation-container');
                        if (navigationContainer) {
                            navigationContainer.classList.remove('e-response-hidden');
                        }
                    }
                }
                var toolbarWrapper = responseContainer.querySelector('.e-response-toolbar-wrapper');
                if (toolbarWrapper) {
                    toolbarWrapper.classList.remove('e-response-hidden');
                }
                var oldNav = responseContainer.querySelector('.e-response-navigation-container');
                var footer = responseContainer.querySelector('.e-content-footer');
                if (oldNav) {
                    this.updateNavigationUI(regenerateIndex, oldNav);
                }
                else if (responseHistory.length >= 2 && footer) {
                    var newNav = this.renderResponseNavigation(regenerateIndex);
                    if (newNav && newNav.children.length > 0) {
                        footer.insertBefore(newNav, footer.firstChild);
                    }
                }
            }
            if (isFinalUpdate) {
                if (!this.enableStreaming) {
                    this.resetRegeneratingState();
                    if (this.hasStopResponseButton()) {
                        this.toggleStopRespondingButton(false);
                    }
                }
            }
            this.isResponseRequested = false;
            this.isProtectedOnChange = prevOnChange;
            if (this.enableScrollToBottom && this.downArrowIcon && this.outputContentBodyEle && this.contentWrapper) {
                this.downArrowIcon.visible = this.outputContentBodyEle.scrollHeight > this.contentWrapper.clientHeight;
            }
            return;
        }
        if (!this.isOutputRenderingStop) {
            var responseItem_1 = this.element.querySelector("#e-response-item_" + (this.prompts.length - 1));
            var lastPrompt_1 = this.prompts[this.prompts.length - 1];
            // If lastPrompt is undefined, initialize a new prompt entry
            if (!lastPrompt_1) {
                this.prompts = this.prompts.concat([{
                        prompt: null,
                        response: null,
                        isResponseHelpful: null,
                        attachedFiles: null,
                        blocks: []
                    }]);
                lastPrompt_1 = this.prompts[this.prompts.length - 1];
                this.lastRenderedBlockCount = 0;
            }
            var processResponse = function (rawResponse, blocks) {
                if (_this.enableStreaming && !_this.isToolResponse) {
                    if (_this.prompts.length === 0) {
                        _this.isResponseRequested = false;
                        return;
                    }
                    isFinalUpdate = false;
                    var htmlResponse = MarkdownConverter.toHtml(rawResponse);
                    lastPrompt_1.response = htmlResponse;
                    _this.streamResponse(lastPrompt_1.response, _this.prompts.length - 1, isNullOrUndefined(blocks) ? 0 : blocks.length);
                }
                else {
                    if (_this.prompts.length === 0) {
                        _this.isResponseRequested = false;
                        return;
                    }
                    lastPrompt_1.response = rawResponse ? MarkdownConverter.toHtml(rawResponse) : rawResponse;
                    if (!_this.isToolResponse) {
                        _this.updateResponse(lastPrompt_1.response, _this.prompts.length - 1, isFinalUpdate, responseItem_1, null, isNullOrUndefined(blocks) ? 0 : blocks.length);
                    }
                    else {
                        if (!blocks) {
                            return;
                        }
                        blocks.forEach(function (block) {
                            if (block.blockType === 'text') {
                                _this.updateResponse(lastPrompt_1.response, _this.prompts.length - 1, isFinalUpdate, responseItem_1, block);
                            }
                        });
                        _this.updateLastThinkingBlock(blocks);
                        if (rawResponse) {
                            _this.isToolResponse = false;
                            if (_this.enableStreaming) {
                                _this.streamResponse(lastPrompt_1.response, _this.prompts.length - 1, isNullOrUndefined(blocks) ? 0 : blocks.length);
                            }
                            else {
                                _this.updateResponse(lastPrompt_1.response, _this.prompts.length - 1, isFinalUpdate, responseItem_1, null, isNullOrUndefined(blocks) ? 0 : blocks.length);
                            }
                        }
                    }
                }
            };
            if (typeof outputResponse === 'string') {
                if (!this.isResponseRequested) {
                    this.prompts = this.prompts.concat([{ prompt: null, response: null, isResponseHelpful: null, attachedFiles: null,
                            blocks: [] }]);
                    lastPrompt_1 = this.prompts[this.prompts.length - 1];
                    this.lastRenderedBlockCount = 0;
                }
                this.isToolResponse = false;
                processResponse(outputResponse);
            }
            if (typeof outputResponse === 'object') {
                if (this.enableStreaming) {
                    isFinalUpdate = false;
                }
                var tPrompt = {
                    prompt: outputResponse.prompt,
                    attachedFiles: outputResponse.attachedFiles,
                    response: outputResponse.response,
                    isResponseHelpful: isNullOrUndefined(outputResponse.isResponseHelpful) ? null :
                        outputResponse.isResponseHelpful,
                    blocks: outputResponse.blocks
                };
                this.isToolResponse = tPrompt.blocks ? tPrompt.blocks.length > 0 ? true : false : false;
                if (this.prompt === tPrompt.prompt || this.lastStreamPrompt === tPrompt.prompt) {
                    lastPrompt_1.attachedFiles = tPrompt.attachedFiles;
                    lastPrompt_1.isResponseHelpful = tPrompt.isResponseHelpful;
                    lastPrompt_1.blocks = tPrompt.blocks;
                    var hasBlocksOnly = Array.isArray(tPrompt.blocks) && tPrompt.blocks.length > 0 && (isNullOrUndefined(tPrompt.response) || tPrompt.response === '');
                    // Check if this is a newly created prompt (when blocks-only called with no existing prompts)
                    var isNewlyCreatedPrompt = lastPrompt_1.prompt === null && lastPrompt_1.response === null;
                    // Render blocks only if: hasBlocksOnly AND responseItem exists AND (existing prompt OR template exists for new prompt)
                    if (hasBlocksOnly && responseItem_1 && !this.responseItemTemplate && !isNewlyCreatedPrompt) {
                        var outputEle = responseItem_1.querySelector('.e-output');
                        var outputContentBodyEle = responseItem_1.querySelector('.e-content-body');
                        if (!outputContentBodyEle) {
                            outputContentBodyEle = this.createElement('div', { attrs: { class: 'e-content-body', tabindex: '0' } });
                            if (outputEle) {
                                outputEle.appendChild(outputContentBodyEle);
                            }
                        }
                        this.renderResponseSegments(outputContentBodyEle, tPrompt.blocks, isFinalUpdate);
                        if (this.outputElement.querySelector('.e-skeleton')) {
                            this.outputElement.removeChild(this.skeletonContainer);
                        }
                    }
                    else {
                        processResponse(tPrompt.response, tPrompt.blocks);
                    }
                }
                else {
                    if (!this.isResponseRequested) {
                        this.prompts = this.prompts.concat([tPrompt]);
                        lastPrompt_1 = this.prompts[this.prompts.length - 1];
                    }
                    lastPrompt_1.blocks = tPrompt.blocks;
                    this.lastRenderedBlockCount = 0;
                    this.renderOutputContainer(tPrompt.prompt, tPrompt.response, tPrompt.attachedFiles, this.prompts.length - 1, true, isFinalUpdate, tPrompt.blocks);
                }
                if (!isFinalUpdate) {
                    this.lastStreamPrompt = tPrompt.prompt;
                }
            }
            if (isFinalUpdate) {
                this.setupViewportFilling();
            }
            if (!this.enableStreaming && !this.isToolResponse) {
                if (isFinalUpdate && this.hasStopResponseButton()) {
                    this.toggleStopRespondingButton(false);
                }
                this.isResponseRequested = !isFinalUpdate;
            }
        }
        this.isProtectedOnChange = prevOnChange;
        if (this.enableScrollToBottom && this.downArrowIcon && this.outputContentBodyEle && this.contentWrapper) {
            this.downArrowIcon.visible = this.outputContentBodyEle.scrollHeight > this.contentWrapper.clientHeight;
        }
    };
    /**
     * Scrolls the view to the bottom to display the most recent response in the AIAssistView component.
     *
     * This method programmatically scrolls the view to the bottom,
     * typically used when new responses are added or to refocus on the latest response.
     *
     * @returns {void}
     */
    AIAssistView.prototype.scrollToBottom = function () {
        this.updateScroll(this.contentWrapper);
    };
    /**
     * Called if any of the property value is changed.
     *
     * @param  {AIAssistViewModel} newProp - Specifies new properties
     * @param  {AIAssistViewModel} oldProp - Specifies old properties
     * @returns {void}
     * @private
     */
    AIAssistView.prototype.onPropertyChanged = function (newProp, oldProp) {
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'width':
                case 'height':
                    this.setDimension(this.element, this.width, this.height);
                    break;
                case 'cssClass':
                    this.updateCssClass(this.element, newProp.cssClass, oldProp.cssClass);
                    break;
                case 'promptIconCss':
                    this.updateIcons(newProp.promptIconCss, true);
                    break;
                case 'responseIconCss':
                    this.updateIcons(newProp.responseIconCss);
                    break;
                case 'showHeader':
                    this.updateHeader(this.showHeader, this.toolbarHeader, this.viewWrapper);
                    break;
                case 'promptSuggestions':
                    this.updatePromptSuggestionTemplate();
                    break;
                case 'showClearButton':
                    if (this.footerTemplate) {
                        return;
                    }
                    else {
                        this.updateClearToolbarItemInSettings();
                        this.updateFooterToolbar();
                    }
                    break;
                case 'promptPlaceholder':
                    this.updatePlaceholder(this.promptPlaceholder);
                    break;
                case 'promptSuggestionsHeader': {
                    this.suggestionHeader.innerHTML = this.promptSuggestionsHeader;
                    var suggestionHeaderElem = this.element.querySelector('.e-suggestions .e-suggestion-header');
                    if (!suggestionHeaderElem) {
                        this.suggestionsElement.append(this.suggestionHeader);
                    }
                    break;
                }
                case 'activeView': {
                    var previousViewIndex = this.getIndex(oldProp.activeView);
                    this.updateActiveView(previousViewIndex);
                    break;
                }
                case 'enableRtl':
                    this.element.classList[this.enableRtl ? 'add' : 'remove']('e-rtl');
                    if (!isNullOrUndefined(this.toolbar)) {
                        this.toolbar.enableRtl = this.enableRtl;
                        this.toolbar.dataBind();
                    }
                    break;
                case 'toolbarSettings':
                    this.updateToolbarSettings(oldProp.toolbarSettings);
                    break;
                case 'footerToolbarSettings':
                    if (newProp.footerToolbarSettings.items) {
                        this.updateFooterToolbar();
                    }
                    if (newProp.footerToolbarSettings.toolbarPosition) {
                        this.updateFooterType(newProp.footerToolbarSettings.toolbarPosition);
                    }
                    break;
                case 'promptToolbarSettings':
                case 'responseToolbarSettings':
                case 'prompts':
                    this.isOutputRenderingStop = false;
                    if (this.outputElement) {
                        remove(this.outputElement);
                    }
                    if (this.hasStopResponseButton()) {
                        this.toggleStopRespondingButton(false);
                    }
                    this.aiAssistViewRendered = false;
                    this.latestResponseMinHeight = null;
                    this.regeneratedResponses.clear();
                    this.regeneratedBlocks.clear();
                    this.currentRegeneratedIndex.clear();
                    this.originalResponses.clear();
                    this.originalBlocks.clear();
                    this.isRegenerating = false;
                    this.regeneratingPromptIndex = -1;
                    this.renderOutputContent(true);
                    this.detachCodeCopyEventHandler();
                    if (this.bannerTemplate) {
                        this.updateBannerTemplate(this.bannerTemplate);
                    }
                    this.checkIsScrollable();
                    this.setupViewportFilling();
                    break;
                case 'prompt':
                    if (!this.footerTemplate) {
                        this.editableTextarea.innerText = this.prompt;
                        this.refreshTextareaUI();
                        this.pushToUndoStack(this.prompt);
                    }
                    break;
                case 'locale':
                    this.updateLocale();
                    break;
                case 'bannerTemplate': {
                    this.updateBannerTemplate(newProp.bannerTemplate);
                    break;
                }
                case 'promptSuggestionItemTemplate': {
                    if (!isNullOrUndefined(newProp.promptSuggestionItemTemplate)) {
                        this.updatePromptSuggestionTemplate();
                    }
                    break;
                }
                case 'footerTemplate': {
                    this.updateFooterTemplate();
                    break;
                }
                case 'enableStreaming': {
                    this.enableStreaming = newProp.enableStreaming;
                    break;
                }
                case 'enableAttachments': {
                    if (!this.footerTemplate) {
                        this.updateAttachmentToolbarItemInSettings();
                        this.updateFooterToolbar();
                    }
                    break;
                }
                case 'enableScrollToBottom': {
                    if (this.enableScrollToBottom) {
                        this.bindScroll();
                    }
                    else {
                        this.unBindScroll();
                    }
                    break;
                }
                case 'attachmentSettings':
                    this.updateAttachmentSettings(newProp.attachmentSettings);
                    break;
                case 'speechToTextSettings':
                    this.handleSTTDynamicChange(newProp.speechToTextSettings, oldProp.speechToTextSettings);
                    break;
            }
        }
    };
    __decorate$2([
        Property('')
    ], AIAssistView.prototype, "prompt", void 0);
    __decorate$2([
        Property('Type prompt for assistance...')
    ], AIAssistView.prototype, "promptPlaceholder", void 0);
    __decorate$2([
        Collection([], Prompt)
    ], AIAssistView.prototype, "prompts", void 0);
    __decorate$2([
        Property([])
    ], AIAssistView.prototype, "promptSuggestions", void 0);
    __decorate$2([
        Property('')
    ], AIAssistView.prototype, "promptSuggestionsHeader", void 0);
    __decorate$2([
        Property(true)
    ], AIAssistView.prototype, "showHeader", void 0);
    __decorate$2([
        Complex({ items: [] }, ToolbarSettings)
    ], AIAssistView.prototype, "toolbarSettings", void 0);
    __decorate$2([
        Property(0)
    ], AIAssistView.prototype, "activeView", void 0);
    __decorate$2([
        Property(null)
    ], AIAssistView.prototype, "promptIconCss", void 0);
    __decorate$2([
        Property(null)
    ], AIAssistView.prototype, "responseIconCss", void 0);
    __decorate$2([
        Property('100%')
    ], AIAssistView.prototype, "width", void 0);
    __decorate$2([
        Property('100%')
    ], AIAssistView.prototype, "height", void 0);
    __decorate$2([
        Property('')
    ], AIAssistView.prototype, "cssClass", void 0);
    __decorate$2([
        Collection([], AssistView)
    ], AIAssistView.prototype, "views", void 0);
    __decorate$2([
        Complex({ width: null, items: [] }, PromptToolbarSettings)
    ], AIAssistView.prototype, "promptToolbarSettings", void 0);
    __decorate$2([
        Complex({ width: null, items: [] }, ResponseToolbarSettings)
    ], AIAssistView.prototype, "responseToolbarSettings", void 0);
    __decorate$2([
        Complex({ toolbarPosition: 'Inline', items: [] }, FooterToolbarSettings)
    ], AIAssistView.prototype, "footerToolbarSettings", void 0);
    __decorate$2([
        Complex({ enable: false }, SpeechToTextSettings)
    ], AIAssistView.prototype, "speechToTextSettings", void 0);
    __decorate$2([
        Complex({}, TextToSpeechSettings)
    ], AIAssistView.prototype, "textToSpeechSettings", void 0);
    __decorate$2([
        Property(false)
    ], AIAssistView.prototype, "enableAttachments", void 0);
    __decorate$2([
        Complex({ saveUrl: '', removeUrl: '', maxFileSize: 2000000, allowedFileTypes: '', maximumCount: 10, attachmentTemplate: '' }, AttachmentSettings)
    ], AIAssistView.prototype, "attachmentSettings", void 0);
    __decorate$2([
        Property(false)
    ], AIAssistView.prototype, "showClearButton", void 0);
    __decorate$2([
        Property(true)
    ], AIAssistView.prototype, "enableScrollToBottom", void 0);
    __decorate$2([
        Property('')
    ], AIAssistView.prototype, "footerTemplate", void 0);
    __decorate$2([
        Property('')
    ], AIAssistView.prototype, "promptItemTemplate", void 0);
    __decorate$2([
        Property('')
    ], AIAssistView.prototype, "responseItemTemplate", void 0);
    __decorate$2([
        Property('')
    ], AIAssistView.prototype, "promptSuggestionItemTemplate", void 0);
    __decorate$2([
        Property('')
    ], AIAssistView.prototype, "bannerTemplate", void 0);
    __decorate$2([
        Property('')
    ], AIAssistView.prototype, "blockTemplate", void 0);
    __decorate$2([
        Property('')
    ], AIAssistView.prototype, "itemTemplate", void 0);
    __decorate$2([
        Event()
    ], AIAssistView.prototype, "promptRequest", void 0);
    __decorate$2([
        Event()
    ], AIAssistView.prototype, "promptChanged", void 0);
    __decorate$2([
        Event()
    ], AIAssistView.prototype, "stopRespondingClick", void 0);
    __decorate$2([
        Event()
    ], AIAssistView.prototype, "beforeAttachmentUpload", void 0);
    __decorate$2([
        Event()
    ], AIAssistView.prototype, "attachmentUploadSuccess", void 0);
    __decorate$2([
        Event()
    ], AIAssistView.prototype, "attachmentUploadFailure", void 0);
    __decorate$2([
        Event()
    ], AIAssistView.prototype, "attachmentRemoved", void 0);
    __decorate$2([
        Event()
    ], AIAssistView.prototype, "editableContextClicked", void 0);
    AIAssistView = __decorate$2([
        NotifyPropertyChanges
    ], AIAssistView);
    return AIAssistView;
}(AIAssistBase));

/**
 * Specifies type for thinking context items.
 * Categorizes metadata associated with thinking stages to provide semantic context about processed resources.
 *
 */
var ThinkingContextType;
(function (ThinkingContextType) {
    /**
     * Specifies the default type of context item.
     */
    ThinkingContextType["File"] = "file";
    /**
     * Specifies the variable type of context item.
     */
    ThinkingContextType["Variable"] = "variable";
    /**
     * Specifies the search type of context item.
     */
    ThinkingContextType["Search"] = "search";
    /**
     * Specifies the tool type of context item.
     */
    ThinkingContextType["Tool"] = "tool";
    /**
     * Specifies the result type of context item.
     */
    ThinkingContextType["Result"] = "result";
    /**
     * Specifies the context type of context item.
     */
    ThinkingContextType["Context"] = "context";
})(ThinkingContextType || (ThinkingContextType = {}));
/**
 * Specifies badge types for thinking context items.
 * Visual indicators representing status or outcome of contextual metadata in thinking stages.
 *
 */
var ThinkingContextBadge;
(function (ThinkingContextBadge) {
    /**
     * Specifies the default badge of context item.
     */
    ThinkingContextBadge["None"] = "none";
    /**
     * Specifies the success badge of context item.
     */
    ThinkingContextBadge["Success"] = "success";
    /**
     * Specifies the warning badge of context item.
     */
    ThinkingContextBadge["Warning"] = "warning";
    /**
     * Specifies the failed badge of context item.
     */
    ThinkingContextBadge["Failed"] = "failed";
})(ThinkingContextBadge || (ThinkingContextBadge = {}));
/**
 * Specifies the status of thinking stages during AI processing.
 * Represents lifecycle states indicating whether stage processing is complete, ongoing, or encountered errors.
 *
 */
var ThinkingStageStatus;
(function (ThinkingStageStatus) {
    /**
     * Represents the default status.
     */
    ThinkingStageStatus["Completed"] = "completed";
    /**
     * Represents the in-progress status.
     */
    ThinkingStageStatus["InProgress"] = "inProgress";
    /**
     * Represents the failed status.
     */
    ThinkingStageStatus["Failed"] = "failed";
})(ThinkingStageStatus || (ThinkingStageStatus = {}));

var __extends$3 = (undefined && undefined.__extends) || (function () {
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
var __assign$1 = (undefined && undefined.__assign) || function () {
    __assign$1 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
};
var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var MessageStatus = /** @__PURE__ @class */ (function (_super) {
    __extends$3(MessageStatus, _super);
    function MessageStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate$3([
        Property('')
    ], MessageStatus.prototype, "iconCss", void 0);
    __decorate$3([
        Property('')
    ], MessageStatus.prototype, "text", void 0);
    __decorate$3([
        Property('')
    ], MessageStatus.prototype, "tooltip", void 0);
    return MessageStatus;
}(ChildProperty));
/**
 * Represents a user model for a messages in the chatUI component.
 */
var User = /** @__PURE__ @class */ (function (_super) {
    __extends$3(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate$3([
        Property('')
    ], User.prototype, "id", void 0);
    __decorate$3([
        Property('Default')
    ], User.prototype, "user", void 0);
    __decorate$3([
        Property('')
    ], User.prototype, "avatarUrl", void 0);
    __decorate$3([
        Property('')
    ], User.prototype, "avatarBgColor", void 0);
    __decorate$3([
        Property('')
    ], User.prototype, "cssClass", void 0);
    __decorate$3([
        Property('')
    ], User.prototype, "statusIconCss", void 0);
    return User;
}(ChildProperty));
/**
 * Configures the toolbar displayed on each message in the Chat UI component.
 */
var MessageToolbarSettings = /** @__PURE__ @class */ (function (_super) {
    __extends$3(MessageToolbarSettings, _super);
    function MessageToolbarSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate$3([
        Property('100%')
    ], MessageToolbarSettings.prototype, "width", void 0);
    __decorate$3([
        Collection([], ToolbarItem)
    ], MessageToolbarSettings.prototype, "items", void 0);
    __decorate$3([
        Event()
    ], MessageToolbarSettings.prototype, "itemClicked", void 0);
    return MessageToolbarSettings;
}(ChildProperty));
/**
 *  Represents a model for a reply messages in the chatUI component.
 */
var MessageReply = /** @__PURE__ @class */ (function (_super) {
    __extends$3(MessageReply, _super);
    function MessageReply() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate$3([
        Complex({}, User)
    ], MessageReply.prototype, "user", void 0);
    __decorate$3([
        Property('')
    ], MessageReply.prototype, "text", void 0);
    __decorate$3([
        Property([])
    ], MessageReply.prototype, "mentionUsers", void 0);
    __decorate$3([
        Property('')
    ], MessageReply.prototype, "messageID", void 0);
    __decorate$3([
        Property('')
    ], MessageReply.prototype, "timestamp", void 0);
    __decorate$3([
        Property('')
    ], MessageReply.prototype, "timestampFormat", void 0);
    __decorate$3([
        Property(null)
    ], MessageReply.prototype, "attachedFile", void 0);
    return MessageReply;
}(ChildProperty));
/**
 *  Represents a model for a messages in the chatUI component.
 */
var Message = /** @__PURE__ @class */ (function (_super) {
    __extends$3(Message, _super);
    function Message() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate$3([
        Property('')
    ], Message.prototype, "id", void 0);
    __decorate$3([
        Property('')
    ], Message.prototype, "text", void 0);
    __decorate$3([
        Complex({}, User)
    ], Message.prototype, "author", void 0);
    __decorate$3([
        Property('')
    ], Message.prototype, "timeStamp", void 0);
    __decorate$3([
        Property('')
    ], Message.prototype, "timeStampFormat", void 0);
    __decorate$3([
        Complex({}, MessageStatus)
    ], Message.prototype, "status", void 0);
    __decorate$3([
        Property(false)
    ], Message.prototype, "isPinned", void 0);
    __decorate$3([
        Complex({}, MessageReply)
    ], Message.prototype, "replyTo", void 0);
    __decorate$3([
        Property(false)
    ], Message.prototype, "isForwarded", void 0);
    __decorate$3([
        Property(null)
    ], Message.prototype, "attachedFile", void 0);
    __decorate$3([
        Property([])
    ], Message.prototype, "mentionUsers", void 0);
    return Message;
}(ChildProperty));
var FileAttachmentSettings = /** @__PURE__ @class */ (function (_super) {
    __extends$3(FileAttachmentSettings, _super);
    function FileAttachmentSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate$3([
        Property('')
    ], FileAttachmentSettings.prototype, "saveUrl", void 0);
    __decorate$3([
        Property('')
    ], FileAttachmentSettings.prototype, "removeUrl", void 0);
    __decorate$3([
        Property('')
    ], FileAttachmentSettings.prototype, "path", void 0);
    __decorate$3([
        Property(Blob)
    ], FileAttachmentSettings.prototype, "saveFormat", void 0);
    __decorate$3([
        Property('')
    ], FileAttachmentSettings.prototype, "allowedFileTypes", void 0);
    __decorate$3([
        Property(30000000)
    ], FileAttachmentSettings.prototype, "maxFileSize", void 0);
    __decorate$3([
        Property(true)
    ], FileAttachmentSettings.prototype, "enableDragAndDrop", void 0);
    __decorate$3([
        Property(10)
    ], FileAttachmentSettings.prototype, "maximumCount", void 0);
    __decorate$3([
        Property('')
    ], FileAttachmentSettings.prototype, "previewTemplate", void 0);
    __decorate$3([
        Property('')
    ], FileAttachmentSettings.prototype, "attachmentTemplate", void 0);
    __decorate$3([
        Event()
    ], FileAttachmentSettings.prototype, "attachmentClick", void 0);
    return FileAttachmentSettings;
}(ChildProperty));
var ChatUI = /** @__PURE__ @class */ (function (_super) {
    __extends$3(ChatUI, _super);
    /**
     * Constructor for creating the component
     *
     * @param {ChatUIModel} options - Specifies the ChatUIModel model.
     * @param {string | HTMLElement} element - Specifies the element to render as component.
     * @private
     */
    function ChatUI(options, element) {
        var _this = _super.call(this, options, element) || this;
        _this.multiplier = 3;
        _this.uploadedFiles = [];
        return _this;
    }
    /**
     * Initialize the event handler
     *
     * @private
     * @returns {void}
     */
    ChatUI.prototype.preRender = function () {
        if (!this.element.id) {
            this.element.id = getUniqueID('e-' + this.getModuleName());
        }
    };
    ChatUI.prototype.getDirective = function () {
        return 'EJS-CHATUI';
    };
    /**
     * To get component name.
     *
     * @returns {string} - It returns the current module name.
     * @private
     */
    ChatUI.prototype.getModuleName = function () {
        return 'chat-ui';
    };
    /**
     * Get the properties to be maintained in the persisted state.
     *
     * @private
     * @returns {string} - It returns the persisted data.
     */
    ChatUI.prototype.getPersistData = function () {
        return this.addOnPersist([]);
    };
    ChatUI.prototype.render = function () {
        this.renderChatUIView();
    };
    ChatUI.prototype.renderChatUIView = function () {
        this.intl = new Internationalization();
        this.setDimension(this.element, this.width, this.height);
        this.renderViewSections(this.element, 'e-chat-header', 'e-chat-content');
        this.viewWrapper = this.element.querySelector('.e-chat-content');
        this.chatHeader = this.element.querySelector('.e-chat-header');
        this.initializeLocale();
        this.renderChatHeader();
        this.renderChatContentElement();
        this.renderChatSuggestionsElement();
        this.renderChatFooterContent();
        this.addCssClass(this.element, this.cssClass);
        this.addRtlClass(this.element, this.enableRtl);
        this.updateHeader(this.showHeader, this.chatHeader, this.viewWrapper);
        this.updateEmptyChatTemplate();
        this.updateFooterElementClass();
        this.wireEvents();
        this.renderTypingIndicator();
        this.updateScrollPosition(false, 0);
        this.initializeCompactMode();
    };
    ChatUI.prototype.initializeLocale = function () {
        this.l10n = new L10n('chat-ui', {
            oneUserTyping: '{0} is typing',
            twoUserTyping: '{0} and {1} are typing',
            threeUserTyping: '{0}, {1}, and {2} other are typing',
            multipleUsersTyping: '{0}, {1}, and {2} others are typing',
            noRecordsTemplate: 'No records found',
            forwarded: 'Forwarded',
            send: 'Send',
            attachments: 'Attach File',
            close: 'Close',
            download: 'Download',
            filePreview: 'No Preview Available',
            fileCountFailure: 'Upload limit reached: Maximum {0} files allowed. Remove extra files to proceed uploading',
            fileSizeFailure: 'Upload failed: {0} files exceeded the maximum size',
            unpin: 'Unpin',
            viewChat: 'View in Chat'
        }, this.locale);
        this.l10n.setLocale(this.locale);
    };
    ChatUI.prototype.updateScrollPosition = function (isMethodCall, timeDelay) {
        var _this = this;
        var action = function () { return isMethodCall ? _this.handleAutoScroll() : _this.scrollToBottom(); };
        if (this.isReact || this.isAngular) {
            setTimeout(action, timeDelay);
        }
        else {
            action();
        }
    };
    ChatUI.prototype.renderChatHeader = function () {
        if (this.headerText) {
            var headerContainer = this.createElement('div', { className: 'e-header' });
            if (this.headerIconCss) {
                var iconElement = this.createElement('span', { className: "e-header-icon e-icons " + this.headerIconCss });
                if (this.user.statusIconCss) {
                    iconElement.appendChild(this.chatStatus(this.user.statusIconCss));
                }
                headerContainer.appendChild(iconElement);
            }
            var headerTextElement = this.createElement('div', { className: 'e-header-text' });
            headerTextElement.innerHTML = this.headerText;
            headerContainer.appendChild(headerTextElement);
            this.chatHeader.appendChild(headerContainer);
            this.renderChatHeaderToolbar(headerContainer);
        }
    };
    ChatUI.prototype.renderChatHeaderToolbar = function (headerContainer) {
        var _this = this;
        if (!isNullOrUndefined(this.headerToolbar) && this.headerToolbar.items.length > 0) {
            var toolbarEle = this.createElement('div', { className: 'e-chat-toolbar' });
            /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
            var pushToolbar = this.headerToolbar.items.map(function (item) { return ({
                type: item.type,
                template: item.template,
                disabled: item.disabled,
                cssClass: item.cssClass,
                visible: item.visible,
                tooltipText: item.tooltip,
                prefixIcon: item.iconCss,
                text: item.text,
                align: item.align,
                tabIndex: item.tabIndex
            }); });
            this.toolbar = new Toolbar({
                items: pushToolbar,
                height: '100%',
                enableRtl: this.enableRtl,
                clicked: function (args) {
                    var eventItemArgs = {
                        type: args.item.type,
                        text: args.item.text,
                        iconCss: args.item.prefixIcon,
                        cssClass: args.item.cssClass,
                        tooltip: args.item.tooltipText,
                        template: args.item.template,
                        disabled: args.item.disabled,
                        visible: args.item.visible,
                        align: args.item.align,
                        tabIndex: args.item.tabIndex
                    };
                    var eventArgs = {
                        item: eventItemArgs,
                        event: args.originalEvent,
                        cancel: false
                    };
                    if (_this.headerToolbar.itemClicked) {
                        _this.headerToolbar.itemClicked.call(_this, eventArgs);
                    }
                }
            });
            if (this.isReact) {
                this.toolbar.isReact = this.isReact;
                this.toolbar.on('render-react-toolbar-template', this.addReactToolbarPortals, this);
            }
            this.toolbar.appendTo(toolbarEle);
            headerContainer.appendChild(toolbarEle);
        }
    };
    ChatUI.prototype.addReactToolbarPortals = function (args) {
        if (this.isReact && args) {
            this.portals = this.portals.concat(args);
        }
    };
    ChatUI.prototype.updateHeaderToolbar = function () {
        var headerContainer = this.chatHeader.querySelector('.e-header');
        if (!isNullOrUndefined(this.toolbar)) {
            var pushToolbar = this.headerToolbar.items.map(function (item) { return ({
                type: item.type,
                template: item.template,
                disabled: item.disabled,
                cssClass: item.cssClass,
                visible: item.visible,
                tooltipText: item.tooltip,
                prefixIcon: item.iconCss,
                text: item.text,
                align: item.align,
                tabIndex: item.tabIndex
            }); });
            this.toolbar.items = pushToolbar;
        }
        else {
            this.renderChatHeaderToolbar(headerContainer);
        }
    };
    ChatUI.prototype.renderChatContentElement = function () {
        this.messageWrapper = this.createElement('div', { className: 'e-message-wrapper', attrs: { 'tabindex': '0' } });
        this.pinnedMessageWrapper = this.createElement('div', { className: 'e-pinned-message-wrapper' });
        this.renderPinnedMessage();
        this.viewWrapper.prepend(this.pinnedMessageWrapper, this.messageWrapper);
        this.content = this.createElement('div', { className: 'e-typing-suggestions' });
        this.viewWrapper.append(this.content);
        this.renderScrollDown();
        this.setChatMsgId();
        this.renderMessageGroup(this.messageWrapper);
    };
    ChatUI.prototype.updateEmptyChatTemplate = function () {
        if (isNullOrUndefined(this.messages) || this.messages.length <= 0) {
            this.renderBannerView(this.emptyChatTemplate, this.messageWrapper, 'emptyChatTemplate');
            this.isEmptyChatTemplateRendered = isNullOrUndefined(this.messageWrapper.querySelector('.e-empty-chat-template')) ? false : true;
            if (this.pinnedMessageWrapper) {
                this.pinnedMessageWrapper.style.display = 'none';
            }
        }
    };
    ChatUI.prototype.renderChatMessageToolbar = function (messageItem, msg) {
        var _this = this;
        var messageOptionsToolbar = this.createElement('div', { className: 'e-chat-message-toolbar' });
        var pushToolbar = [];
        if (this.messageToolbarSettings.items.length > 0) {
            var items = this.messageToolbarSettings.items.filter(function (item) {
                var isCopyIcon = item.iconCss.includes('e-chat-copy');
                var hasFileAttachment = _this.hasAttachment(msg) && !(_this.isImageFile(msg.attachedFile.rawFile));
                if (isCopyIcon && hasFileAttachment) {
                    return false;
                }
                return (item.iconCss !== '' ||
                    item.text !== undefined ||
                    item.type !== 'Button' ||
                    item.align !== 'Left' ||
                    item.visible !== true ||
                    item.disabled !== false ||
                    item.tooltip !== '' ||
                    item.cssClass !== '' ||
                    item.template !== null ||
                    item.tabIndex !== -1);
            });
            pushToolbar = items.map(function (item) { return ({
                type: item.type,
                template: item.template,
                disabled: item.disabled,
                cssClass: item.cssClass,
                visible: item.visible,
                tooltipText: item.tooltip,
                prefixIcon: item.iconCss,
                text: item.text,
                align: item.align,
                width: _this.messageToolbarSettings.width,
                tabIndex: item.tabIndex
            }); });
        }
        var messageToolbar = new Toolbar({
            items: pushToolbar,
            clicked: function (args) {
                _this.handleMessageToolbarClick(args, messageToolbar, messageItem);
            }
        });
        messageToolbar.appendTo(messageOptionsToolbar);
        this.updatePinnedMessage(msg, messageToolbar);
        return messageOptionsToolbar;
    };
    ChatUI.prototype.triggerMsgClickedEvent = function (item, event, message) {
        var eventArgs = {
            item: item,
            event: event,
            cancel: false,
            message: message
        };
        if (this.messageToolbarSettings.itemClicked) {
            this.messageToolbarSettings.itemClicked.call(this, eventArgs);
        }
        return eventArgs;
    };
    ChatUI.prototype.handleMessageToolbarClick = function (args, messageToolbar, messageItem) {
        var messageID = messageItem.id;
        var message = this.messages.find(function (msg) { return msg.id === messageID; });
        var eventArgs = this.triggerMsgClickedEvent(args.item, args.originalEvent, message);
        if (!eventArgs.cancel) {
            switch (args.item.prefixIcon) {
                case 'e-icons e-chat-copy':
                    this.handleCopyAction(args, messageToolbar, message);
                    break;
                case 'e-icons e-chat-reply':
                    this.handleReplyAction(message);
                    break;
                case 'e-icons e-chat-trash':
                    this.handleDeleteAction(messageID);
                    break;
                case 'e-icons e-chat-pin':
                case 'e-icons e-chat-unpin':
                    this.togglePin(message, args, messageToolbar);
                    break;
            }
        }
    };
    ChatUI.prototype.togglePin = function (message, args, messageToolbar) {
        var pinnedText = this.pinnedMessageWrapper.querySelector('.e-pinned-message-text');
        var currentlyPinnedId = pinnedText.getAttribute('data-index');
        var prevOnChange = this.isProtectedOnChange;
        this.isProtectedOnChange = true;
        if (message.isPinned) {
            message.isPinned = false;
        }
        else {
            if (currentlyPinnedId && currentlyPinnedId !== message.id) {
                this.unpinMessage(currentlyPinnedId);
            }
            message.isPinned = true;
        }
        this.isProtectedOnChange = prevOnChange;
        args.item.prefixIcon = message.isPinned ? 'e-icons e-chat-unpin' : 'e-icons e-chat-pin';
        args.item.tooltipText = message.isPinned ? 'Unpin' : 'Pin';
        messageToolbar.dataBind();
        this.updatePinnedMessage(message, messageToolbar);
    };
    ChatUI.prototype.handleDeleteAction = function (messageID) {
        var prevOnChange = this.isProtectedOnChange;
        this.isProtectedOnChange = true;
        var messageToDelete = this.messages.find(function (msg) { return msg.id === messageID; });
        if (messageToDelete && messageToDelete.isPinned) {
            this.unpinMessage(messageID);
        }
        this.messages = this.messages.filter(function (msg) { return msg.id !== messageID; });
        this.isProtectedOnChange = prevOnChange;
        var messageItem = this.messageWrapper.querySelector("#" + messageID);
        if (!messageItem) {
            return;
        }
        var messageGroup = messageItem.closest('.e-message-group');
        if (!messageGroup) {
            return;
        }
        messageGroup.removeChild(messageItem);
        if (messageGroup.querySelector('.e-message-item') === null) {
            this.messageWrapper.removeChild(messageGroup);
        }
        this.cleanupTimeBreaks();
        this.updateEmptyChatTemplate();
    };
    ChatUI.prototype.cleanupTimeBreaks = function () {
        var _this = this;
        var timeBreaks = Array.from(this.messageWrapper.querySelectorAll('.e-timebreak'));
        var consecutiveBreaks = [];
        timeBreaks.forEach(function (timeBreak, index) {
            var nextElement = timeBreak.nextElementSibling;
            // Check if the current time break is the last element or if it's consecutive
            if ((!nextElement || !nextElement.classList.contains('e-timebreak')) && index === timeBreaks.length - 1) {
                _this.messageWrapper.removeChild(timeBreak);
            }
            else if (!nextElement || !nextElement.classList.contains('e-timebreak')) {
                if (consecutiveBreaks.length > 0) {
                    consecutiveBreaks.forEach(function (breakElem) {
                        _this.messageWrapper.removeChild(breakElem);
                    });
                }
                consecutiveBreaks = [];
            }
            else {
                consecutiveBreaks.push(timeBreak);
            }
        });
    };
    ChatUI.prototype.handleCopyAction = function (args, messageToolbar, msg) {
        if (msg.text) {
            this.getClipBoardContent(this.getMessageText(msg));
        }
        if (this.hasAttachment(msg)) {
            var file = msg.attachedFile.rawFile;
            this.writeFileToClipboard(file);
        }
        // Provide feedback to user
        args.item.prefixIcon = 'e-icons e-chat-check';
        messageToolbar.dataBind();
        setTimeout(function () {
            args.item.prefixIcon = 'e-icons e-chat-copy';
            messageToolbar.dataBind();
        }, 1000);
    };
    ChatUI.prototype.handleReplyAction = function (message) {
        var replyWrapper = this.footer.querySelector('.e-reply-wrapper');
        if (!replyWrapper) {
            replyWrapper = this.renderReplyElement(message, true);
            this.footer.prepend(replyWrapper);
        }
        else {
            var userElement = replyWrapper.querySelector('.e-reply-message-user');
            var timeElement = replyWrapper.querySelector('.e-reply-message-time');
            var textElement = replyWrapper.querySelector('.e-reply-message-text');
            if (userElement && textElement) {
                userElement.textContent = message.author.user;
                timeElement.textContent = this.showTimeStamp ? this.getFormattedTime(message.timeStamp, message.timeStampFormat) : '';
                textElement.innerHTML = this.getMessageText(message);
            }
            var previewContainer = replyWrapper.querySelector('.e-reply-media-preview');
            if (previewContainer) {
                previewContainer.remove();
            }
            if (this.hasAttachment(message)) {
                var file = message.attachedFile;
                if (file) {
                    var newReplyContent = this.createFileReplyContent(message);
                    var replyContent = replyWrapper.querySelector('.e-reply-content');
                    if (replyContent) {
                        if (textElement) {
                            replyContent.insertBefore(newReplyContent, textElement);
                        }
                    }
                }
            }
        }
        if (this.editableTextarea) {
            this.setFocusAtEnd(this.editableTextarea);
        }
        this.currentReplyTo = message;
    };
    ChatUI.prototype.renderReplyElement = function (message, withClearIcon) {
        var _this = this;
        if (withClearIcon === void 0) { withClearIcon = false; }
        if ((!message.replyTo || !message.replyTo.user || (!message.replyTo.text && !message.replyTo.attachedFile)
            || !message.replyTo.messageID) && !withClearIcon) {
            return null;
        }
        var replyWrapper = this.createElement('div', { className: 'e-reply-wrapper' });
        var time;
        var timeStampFormat;
        if (withClearIcon) {
            time = message.timeStamp ? message.timeStamp : new Date();
            timeStampFormat = message.timeStampFormat ? message.timeStampFormat : this.timeStampFormat;
        }
        else {
            time = message.replyTo.timestamp ? message.replyTo.timestamp : new Date();
            timeStampFormat = message.replyTo.timestampFormat ? message.replyTo.timestampFormat : this.timeStampFormat;
        }
        var formattedTime = this.getFormattedTime(time, timeStampFormat);
        var replyContent = this.createElement('div', {
            className: 'e-reply-content',
            innerHTML: "<span class='e-reply-message-text'>" + (withClearIcon ? this.getMessageText(message) : this.getMessageText(message.replyTo)) + "</span>"
        });
        var messageDetails = this.createElement('div', {
            className: 'e-reply-message-details',
            innerHTML: "\n                <span class='e-reply-message-user'>" + (withClearIcon ? message.author.user : message.replyTo.user.user) + "</span>\n                <span class='e-reply-message-time'>" + (this.showTimeStamp ? formattedTime : '') + "</span>"
        });
        if (this.hasAttachment(message.replyTo) || this.hasAttachment(message)) {
            var file = withClearIcon ? (this.hasAttachment(message) ? message.attachedFile : null)
                : (this.hasAttachment(message.replyTo) ? message.replyTo.attachedFile : null);
            var sourceMessage = withClearIcon ? message : message.replyTo;
            if (file) {
                var fileReplyContent = this.createFileReplyContent(sourceMessage);
                var textElement = replyContent.querySelector('.e-reply-message-text');
                if (textElement) {
                    replyContent.insertBefore(fileReplyContent, textElement);
                }
            }
        }
        replyContent.prepend(messageDetails);
        if (withClearIcon) {
            var clearIcon = this.createElement('span', {
                className: 'e-chat-close e-icons',
                attrs: { title: this.l10n.getConstant('close') }
            });
            EventHandler.add(clearIcon, 'click', this.clearReplyWrapper.bind(this));
            messageDetails.appendChild(clearIcon);
        }
        else {
            EventHandler.add(replyWrapper, 'click', function () { _this.scrollToMessage(message.replyTo.messageID); }, this);
        }
        replyWrapper.prepend(replyContent);
        return replyWrapper;
    };
    ChatUI.prototype.createFileReplyContent = function (message) {
        var fileReplyContent = this.createElement('div', { className: 'e-reply-media-preview' });
        var messageText = this.getMessageText(message);
        var hasText = messageText.trim() !== '';
        var file = message.attachedFile;
        if (this.isImageFile(file.rawFile)) {
            var thumbnailImage = this.createImageContent(file, 'e-reply-media-thumb');
            fileReplyContent.appendChild(thumbnailImage);
        }
        else if (this.isVideoFile(file.rawFile)) {
            var thumbnailvideo = this.createElement('video', {
                attrs: {
                    src: file.fileSource,
                    alt: file.name,
                    disablepictureinpicture: 'true',
                    playsinline: 'true'
                },
                className: 'e-reply-media-thumb'
            });
            fileReplyContent.appendChild(thumbnailvideo);
        }
        else {
            var fileIcon = this.createElement('div', { className: 'e-chat-file-icon-svg' });
            fileIcon.appendChild(this.createFileTypeIcon(file.name));
            fileReplyContent.appendChild(fileIcon);
        }
        if (!hasText) {
            var labelElement = this.createElement('span', {
                className: 'e-reply-file-name',
                innerHTML: file.name,
                attrs: { title: file.name }
            });
            fileReplyContent.appendChild(labelElement);
        }
        return fileReplyContent;
    };
    ChatUI.prototype.renderPinnedMessage = function () {
        var _this = this;
        var pinnedMessage = this.createElement('div', { className: 'e-pinned-message' });
        var pinIcon = this.createElement('span', { className: 'e-icons e-chat-pin' });
        var messageText = this.createElement('span', { className: 'e-pinned-message-text' });
        var pinDropdownButtonEle = this.createElement('button', { id: 'pinnedMessageDropdown' });
        this.dropDownButton = new DropDownButton({
            items: [
                { text: this.l10n.getConstant('viewChat'), iconCss: 'e-icons e-chat-view' },
                { text: this.l10n.getConstant('unpin'), iconCss: 'e-icons e-chat-unpin' }
            ],
            cssClass: 'e-pinned-dropdown-popup e-caret-hide',
            iconCss: 'e-icons e-more-vertical-1',
            select: function (args) {
                var messageId = _this.pinnedMessageWrapper.querySelector('.e-pinned-message-text').getAttribute('data-index');
                var message = _this.messages.find(function (msg) { return msg.id === messageId; });
                // Normalize MenuItem from DropDownButton to ItemModel for consistent event args type
                // This ensures event args always contain ItemModel (matching toolbar item type)
                // and maintains type consistency with handleMessageToolbarClick pattern
                var toolbarItemModel = {
                    text: args.item.text || '',
                    prefixIcon: args.item.iconCss || '',
                    id: args.item.id || ''
                };
                // Fire itemClicked event with normalized ItemModel for consistent event-driven tracking
                var eventArgs = _this.triggerMsgClickedEvent(toolbarItemModel, args.event, message);
                // Only execute action if event was not cancelled
                if (!eventArgs.cancel) {
                    if (args.item.text === _this.l10n.getConstant('viewChat')) {
                        _this.scrollToMessage(messageId);
                    }
                    else if (args.item.text === _this.l10n.getConstant('unpin')) {
                        _this.unpinMessage(messageId);
                    }
                }
            }
        });
        this.dropDownButton.appendTo(pinDropdownButtonEle);
        pinnedMessage.append(pinIcon, messageText);
        this.pinnedMessageWrapper.append(pinnedMessage, pinDropdownButtonEle);
    };
    ChatUI.prototype.updatePinnedMessage = function (message, messageToolbar) {
        var pinnedText = this.pinnedMessageWrapper.querySelector('.e-pinned-message-text');
        var currentlyPinnedId = pinnedText.getAttribute('data-index');
        if (message.isPinned) {
            if (currentlyPinnedId && currentlyPinnedId !== message.id) {
                var previousMessage = this.messages.find(function (msg) { return msg.id === currentlyPinnedId; });
                if (previousMessage) {
                    previousMessage.isPinned = false;
                }
            }
            this.togglePinnedIcon(messageToolbar);
            if (pinnedText) {
                if (this.hasAttachment(message)) {
                    pinnedText.innerHTML = '';
                    this.pinAttachmentMessage(pinnedText, message);
                }
                else {
                    pinnedText.innerHTML = this.getMessageText(message);
                }
                pinnedText.setAttribute('data-index', message.id);
            }
            this.pinnedMessageWrapper.style.display = 'flex';
            this.lastPinnedToolbar = messageToolbar;
        }
        else if (currentlyPinnedId === message.id) {
            this.pinnedMessageWrapper.style.display = 'none';
            this.togglePinnedIcon();
        }
    };
    ChatUI.prototype.pinAttachmentMessage = function (container, message) {
        var file = message.attachedFile;
        if (!file) {
            return;
        }
        var mediaElement;
        if (this.isImageFile(file.rawFile)) {
            mediaElement = this.createImageContent(file, 'e-pinned-img-thumb');
        }
        else if (this.isVideoFile(file.rawFile)) {
            mediaElement = this.createElement('video', {
                attrs: {
                    src: file.fileSource,
                    alt: file.name,
                    disablepictureinpicture: 'true',
                    playsinline: 'true'
                },
                className: 'e-pinned-img-thumb'
            });
        }
        else {
            mediaElement = this.createElement('div', { className: 'e-chat-file-icon-svg' });
            mediaElement.appendChild(this.createFileTypeIcon(file.name));
        }
        var messageText = this.getMessageText(message);
        var hasText = messageText.trim() !== '';
        var labelAttrs = {};
        if (!hasText) {
            labelAttrs.title = file.name;
        }
        var pinContent = this.createElement('span', {
            className: hasText ? 'e-pinned-message-content' : 'e-pinned-file-name',
            innerHTML: hasText ? messageText : file.name,
            attrs: labelAttrs
        });
        this.appendChildren(container, mediaElement, pinContent);
    };
    ChatUI.prototype.togglePinnedIcon = function (messageToolbar) {
        if (this.lastPinnedToolbar) {
            this.lastPinnedToolbar.items.forEach(function (item) {
                if (item.prefixIcon === 'e-icons e-chat-unpin') {
                    item.prefixIcon = 'e-icons e-chat-pin';
                    item.tooltipText = 'Pin';
                }
            });
            this.lastPinnedToolbar.dataBind();
        }
        if (messageToolbar) {
            messageToolbar.items.forEach(function (item) {
                if (item.prefixIcon === 'e-icons e-chat-pin') {
                    item.prefixIcon = 'e-icons e-chat-unpin';
                    item.tooltipText = 'Unpin';
                }
            });
            messageToolbar.dataBind();
            this.lastPinnedToolbar = messageToolbar;
        }
        else {
            this.lastPinnedToolbar = null;
        }
    };
    ChatUI.prototype.unpinMessage = function (messageID) {
        this.pinnedMessageWrapper.style.display = 'none';
        this.togglePinnedIcon();
        var prevOnChange = this.isProtectedOnChange;
        this.isProtectedOnChange = true;
        var message = this.messages.find(function (msg) { return msg.id === messageID; });
        if (message) {
            message.isPinned = false;
        }
        this.isProtectedOnChange = prevOnChange;
    };
    ChatUI.prototype.wireMessageToolbarEvents = function (messageItem, toolbarEle) {
        var _this = this;
        EventHandler.add(messageItem, 'mouseover', function () { _this.handleMessageMouseEvents(true, messageItem, toolbarEle); }, this);
        EventHandler.add(messageItem, 'mouseleave', function () { _this.handleMessageMouseEvents(false, messageItem, toolbarEle); }, this);
    };
    ChatUI.prototype.handleMessageMouseEvents = function (isMouseOver, messageItem, toolbarEle) {
        if (isMouseOver) {
            var isLeftMessage = messageItem.parentElement.classList.contains('e-left');
            toolbarEle.style.visibility = 'hidden';
            toolbarEle.style.display = 'block';
            var toolbarRect = toolbarEle.getBoundingClientRect();
            toolbarEle.style.visibility = '';
            toolbarEle.style.display = 'none';
            var messageContent = this.messageTemplate
                ? messageItem
                : isLeftMessage
                    ? messageItem.querySelector('.e-message-content')
                    : messageItem.querySelector('.e-status-wrapper');
            var messageItemRect = messageItem.getBoundingClientRect();
            var messageContentRect = messageContent.getBoundingClientRect();
            var topPosition = messageContentRect.top - messageItemRect.top - toolbarRect.height;
            if (!isLeftMessage) {
                topPosition += 4; // margin top
            }
            var messageWrapperRect = this.messageWrapper.getBoundingClientRect();
            if (messageContentRect.top - messageWrapperRect.top < toolbarRect.height) {
                topPosition = messageContentRect.bottom - messageItemRect.top;
            }
            toolbarEle.style.top = topPosition + "px";
            if (messageContentRect.width < toolbarRect.width && isLeftMessage) {
                if (this.enableRtl) {
                    // In RTL, anchor the toolbar from the right for small received messages
                    toolbarEle.style.right = '0';
                    toolbarEle.style.left = 'auto';
                }
                else {
                    // LTR behavior: anchor from the left
                    toolbarEle.style.left = '0';
                    toolbarEle.style.right = 'auto';
                }
            }
            else {
                var statusIconElement = messageContent.querySelector('.e-status-icon');
                var statusIconWidth = statusIconElement ? statusIconElement.getBoundingClientRect().width + 2 : 0;
                if (this.enableRtl) {
                    // Mirror positioning for RTL: compute left offset instead of right
                    var leftPosition = messageItemRect.left - messageContentRect.left + statusIconWidth;
                    toolbarEle.style.left = leftPosition + "px";
                    toolbarEle.style.right = 'auto';
                }
                else {
                    var rightPosition = messageItemRect.right - messageContentRect.right + statusIconWidth;
                    toolbarEle.style.right = rightPosition + "px";
                    toolbarEle.style.left = 'auto';
                }
            }
            toolbarEle.style.display = '';
            toolbarEle.classList.add('e-show');
        }
        else {
            toolbarEle.classList.remove('e-show');
        }
    };
    ChatUI.prototype.setChatMsgId = function () {
        var _this = this;
        if (this.messages && this.messages.length > 0) {
            var prevOnChange = this.isProtectedOnChange;
            this.isProtectedOnChange = true;
            this.messages = this.messages.map(function (msg, index) {
                return __assign$1({}, msg, { id: msg.id || _this.element.id + "-message-" + (index + 1) });
            });
            this.isProtectedOnChange = prevOnChange;
        }
    };
    ChatUI.prototype.renderScrollDown = function () {
        var scrollDownButton = this.createElement('button', { id: 'scrollDownButton' });
        this.downArrowIcon = new Fab({
            iconCss: 'e-icons e-chat-scroll-down',
            position: 'BottomRight',
            target: this.content,
            isPrimary: false
        });
        this.downArrowIcon.appendTo(scrollDownButton);
    };
    ChatUI.prototype.loadBatch = function () {
        for (var i = this.startIndex - 1; i >= 0; i--) {
            var currIndex = i; // To pass the actual index of the reversed item.
            var prevIndex = i === this.messages.length - 1 ? -1 : currIndex + 1;
            this.updateMessageTimeFormats(this.messages[parseInt(i.toString(), 10)], currIndex);
            var currentMessageDate = this.getMessageDate(currIndex);
            currentMessageDate.setHours(0, 0, 0, 0);
            if (Math.min(currIndex, prevIndex) >= 0) {
                var lastMessageDate = this.getMessageDate(prevIndex);
                lastMessageDate.setHours(0, 0, 0, 0);
                if (currentMessageDate.getTime() === lastMessageDate.getTime()) {
                    var prevTimeBreak = this.messageWrapper.querySelectorAll('.e-timebreak')[0];
                    if (prevTimeBreak) {
                        prevTimeBreak.remove();
                    }
                }
            }
            this.renderGroup(this.messageWrapper, this.messages[parseInt(i.toString(), 10)], true, currIndex, prevIndex);
            if (this.showTimeBreak) {
                this.messageWrapper.prepend(this.createTimebreakElement(currentMessageDate));
            }
            var viewportHeight = window.innerHeight;
            var loadHeight = viewportHeight * this.multiplier;
            this.startIndex = i;
            if (this.messageWrapper.scrollHeight > loadHeight) {
                break;
            }
        }
    };
    ChatUI.prototype.renderMessageGroup = function (chatContentWrapper) {
        var _this = this;
        if (this.loadOnDemand) {
            if (this.messages && this.messages.length <= 0) {
                return;
            }
            createSpinner({ target: this.messageWrapper });
            this.startIndex = this.messages.length;
            this.loadBatch();
        }
        else {
            this.messages.forEach(function (msg, i) {
                _this.renderGroup(chatContentWrapper, msg, false, i, i - 1);
            });
        }
    };
    ChatUI.prototype.isTimeBreakAdded = function (chatContentWrapper, loadOldChat) {
        return loadOldChat ?
            chatContentWrapper.firstElementChild.classList.contains('e-timebreak') :
            chatContentWrapper.lastElementChild.classList.contains('e-timebreak');
    };
    ChatUI.prototype.getLastUser = function (prevIndex) {
        if (prevIndex >= 0) {
            return this.messages[parseInt(prevIndex.toString(), 10)].author.id;
        }
        return '';
    };
    ChatUI.prototype.initializeCompactMode = function () {
        this.element.classList.toggle('e-compact-mode', this.enableCompactMode);
    };
    ChatUI.prototype.renderGroup = function (chatContentWrapper, msg, loadOldChat, index, prevIndex, isPrependMessages) {
        var messageGroup;
        if (!loadOldChat) {
            this.updateMessageTimeFormats(msg, index);
            this.handleTimeBreak(prevIndex, index, loadOldChat);
        }
        if (!this.enableCompactMode && msg.author.id === this.user.id) {
            var hasTimeBreak = this.showTimeBreak && this.isTimeBreakAdded(chatContentWrapper, loadOldChat);
            if ((msg.author.id !== this.getLastUser(prevIndex)) || hasTimeBreak) {
                messageGroup = this.createElement('div', { className: "e-message-group e-right " + (this.messageTemplate ? 'e-message-item-template' : '') });
                this.manageChatContent(loadOldChat, chatContentWrapper, messageGroup);
                this.addGroupItems(msg, messageGroup, false, true, index, loadOldChat);
            }
            else {
                var length_1 = this.element.querySelectorAll('.e-message-group.e-right').length;
                messageGroup = this.element.querySelectorAll('.e-message-group.e-right')[loadOldChat ? 0 : length_1 - 1];
                this.addGroupItems(msg, messageGroup, false, true, index, loadOldChat);
            }
        }
        else {
            if (this.getLastUser(prevIndex) !== msg.author.id || this.isTimeVaries(index, prevIndex)) {
                messageGroup = this.createElement('div', { className: "e-message-group e-left " + (this.messageTemplate ? 'e-message-item-template' : '') });
                var avatarElement = this.createAvatarIcon(msg.author, false);
                if (!this.messageTemplate) {
                    messageGroup.prepend(avatarElement);
                }
                this.manageChatContent(loadOldChat, chatContentWrapper, messageGroup);
                if (this.loadOnDemand || isPrependMessages) {
                    this.loadLeftGroupOnDemand(msg, loadOldChat, index, messageGroup);
                }
                else {
                    this.createLeftGroupItems(messageGroup, msg);
                    this.addGroupItems(msg, messageGroup, true, false, index, loadOldChat);
                }
            }
            else {
                var length_2 = this.element.querySelectorAll('.e-message-group.e-left').length;
                messageGroup = this.element.querySelectorAll('.e-message-group.e-left')[loadOldChat ? 0 : length_2 - 1];
                if (!loadOldChat) {
                    this.addGroupItems(msg, messageGroup, false, false, index, loadOldChat);
                }
                else {
                    this.loadLeftGroupOnDemand(msg, loadOldChat, index, messageGroup);
                }
            }
        }
    };
    ChatUI.prototype.isTimeVaries = function (index, prevIndex) {
        var currentMessageDate = this.getMessageDate(index);
        currentMessageDate.setHours(0, 0, 0, 0);
        var lastMessageDate = this.getMessageDate(prevIndex);
        lastMessageDate.setHours(0, 0, 0, 0);
        return currentMessageDate.getTime() !== lastMessageDate.getTime();
    };
    ChatUI.prototype.loadLeftGroupOnDemand = function (msg, loadOldChat, index, messageGroup) {
        // To check if the previous author is the same as the current author. If not, create a group header.
        var isAnyMsgPresent = this.messages[parseInt((index - 1).toString(), 10)] ? true : false;
        var prevAuthorId = isAnyMsgPresent ? this.messages[parseInt((index - 1).toString(), 10)].author.id : '';
        var shouldCreateHeader = prevAuthorId !== msg.author.id ? true : false;
        if (shouldCreateHeader || this.isTimeVaries(index, index - 1)) {
            this.addGroupItems(msg, messageGroup, true, false, index, loadOldChat);
            this.createLeftGroupItems(messageGroup, msg);
        }
        else {
            this.addGroupItems(msg, messageGroup, false, false, index, loadOldChat);
        }
    };
    ChatUI.prototype.createLeftGroupItems = function (messageGroup, msg) {
        if (this.messageTemplate) {
            return;
        }
        var userHeaderContainer = this.createElement('div', {
            className: 'e-message-header-container'
        });
        var userHeader = this.createElement('div', {
            className: 'e-message-header'
        });
        userHeader.innerHTML = msg.author.user;
        var timeSpan = this.getTimeStampElement(msg.timeStamp
            ? msg.timeStamp
            : new Date(), msg.timeStampFormat ? msg.timeStampFormat : this.timeStampFormat);
        this.appendChildren(userHeaderContainer, userHeader, timeSpan);
        this.insertBeforeChildren(messageGroup, userHeaderContainer);
    };
    ChatUI.prototype.getInitials = function (name) {
        var nameParts = name.split(' ');
        var initials = nameParts.length > 1
            ? "" + nameParts[0][0] + nameParts[nameParts.length - 1][0]
            : name[0];
        return initials;
    };
    ChatUI.prototype.createAvatarIcon = function (author, isTypingUser) {
        var userName = author.user.trim();
        var initials = this.getInitials(userName);
        var iconClassName = !isTypingUser ? 'e-message-icon' : 'e-user-icon';
        var avatarIcon;
        if (iconClassName === 'e-message-icon') {
            avatarIcon = this.createElement('span', { className: " " + 'e-message-icon' + " " + author.cssClass });
            if (!isNullOrUndefined(author.avatarUrl) && author.avatarUrl !== '') {
                var imgElement = this.createElement('img', {
                    attrs: { src: author.avatarUrl, alt: 'Avatar' }
                });
                avatarIcon.appendChild(imgElement);
            }
        }
        else {
            avatarIcon = this.createElement((!isNullOrUndefined(author.avatarUrl) && author.avatarUrl !== '') ? 'img' : 'span', { className: " " + 'e-user-icon' + " " + author.cssClass });
        }
        if (author.avatarBgColor) {
            avatarIcon.style.backgroundColor = author.avatarBgColor;
        }
        if (!isNullOrUndefined(author.avatarUrl) && author.avatarUrl !== '') {
            avatarIcon.src = author.avatarUrl;
            avatarIcon.alt = userName;
        }
        else {
            avatarIcon.innerHTML = initials;
        }
        if (author.statusIconCss && !isTypingUser) {
            avatarIcon.appendChild(this.chatStatus(author.statusIconCss));
        }
        return avatarIcon;
    };
    ChatUI.prototype.chatStatus = function (statusIconCss) {
        var statusTitle;
        // Determine the title based on the statusIconCss
        if (statusIconCss.includes('e-user-online')) {
            statusTitle = 'Available';
        }
        else if (statusIconCss.includes('e-user-away')) {
            statusTitle = 'Away';
        }
        else if (statusIconCss.includes('e-user-busy')) {
            statusTitle = 'Busy';
        }
        else if (statusIconCss.includes('e-user-offline')) {
            statusTitle = 'Offline';
        }
        return this.createElement('span', { className: "e-user-status-icon " + statusIconCss,
            attrs: {
                'title': statusTitle
            }
        });
    };
    ChatUI.prototype.getTimeStampElement = function (timeStamp, timeStampFormat) {
        var formattedTime = this.getFormattedTime(timeStamp, timeStampFormat);
        return this.createElement('div', {
            className: 'e-time',
            innerHTML: this.showTimeStamp ? formattedTime : ''
        });
    };
    ChatUI.prototype.updateTimeFormats = function (timeStampFormat, fullTime, index) {
        if (this.messages[parseInt(index.toString(), 10)]) {
            var prevOnChange = this.isProtectedOnChange;
            this.isProtectedOnChange = true;
            this.messages[parseInt(index.toString(), 10)].timeStamp = this.intl.parseDate(fullTime, { format: 'dd/MM/yyyy hh:mm a' });
            this.messages[parseInt(index.toString(), 10)].timeStampFormat = timeStampFormat;
            this.isProtectedOnChange = prevOnChange;
        }
    };
    ChatUI.prototype.getFormattedTime = function (timeStamp, timeStampFormat) {
        timeStamp = typeof timeStamp === 'string' ? new Date(timeStamp) : timeStamp;
        return this.intl.formatDate(timeStamp, { format: this.getFormat(timeStampFormat) });
    };
    ChatUI.prototype.getFormat = function (timeStampFormat) {
        var hasValue = !isNullOrUndefined(timeStampFormat) && timeStampFormat.length > 0;
        return hasValue ? timeStampFormat
            : (!isNullOrUndefined(this.timeStampFormat) && this.timeStampFormat.length) ? this.timeStampFormat : 'dd/MM/yyyy hh:mm a';
    };
    ChatUI.prototype.renderForwardElement = function (msg, textElement) {
        if (msg.isForwarded) {
            var forwardedIndicator = this.createElement('div', {
                className: 'e-forwarded-indicator'
            });
            var forwardedMessage = this.createElement('div', {
                className: 'e-forward-message',
                innerHTML: this.l10n.getConstant('forwarded')
            });
            var forwardIcon = this.createElement('span', { className: 'e-icons e-chat-forward' });
            this.appendChildren(forwardedIndicator, forwardIcon, forwardedMessage);
            textElement.prepend(forwardedIndicator);
        }
    };
    ChatUI.prototype.getMessageText = function (msg) {
        var mentionedUsers = msg.mentionUsers;
        if (!isNullOrUndefined(mentionedUsers) && mentionedUsers.length > 0) {
            // Regular expression to find placeholders like {0}, {10}, {-1}
            var placeholderRegex = /\{(-?\d+)\}/g;
            var messageText = msg.text;
            var match = void 0;
            // Find all placeholders in the text
            var placeholders = [];
            // eslint-disable-next-line no-cond-assign
            while ((match = placeholderRegex.exec(messageText)) !== null) {
                placeholders.push({
                    fullMatch: match[0],
                    index: parseInt(match[1], 10)
                });
            }
            // Replace placeholders with user names if the index exists in mentionedUsers
            for (var _i = 0, placeholders_1 = placeholders; _i < placeholders_1.length; _i++) {
                var placeholder = placeholders_1[_i];
                var userIndex = placeholder.index;
                // Check if there's a user at this index in the array
                if (userIndex < mentionedUsers.length || (mentionedUsers.length + userIndex) < mentionedUsers.length) {
                    var user = mentionedUsers[parseInt(userIndex.toString(), 10)];
                    if (user) {
                        messageText = messageText.replace(placeholder.fullMatch, this.getMentionChipElement(user));
                    }
                }
            }
            return SanitizeHtmlHelper.sanitize(messageText);
        }
        return SanitizeHtmlHelper.sanitize(msg.text);
    };
    ChatUI.prototype.getMentionChipElement = function (user) {
        var mentionChip = this.createElement('span', { className: 'e-mention-chip' });
        var mentionDisplayEle = this.createElement('span', { className: 'e-chat-mention-user-chip', innerHTML: user.user });
        mentionDisplayEle.setAttribute('data-user-id', user.id);
        mentionChip.append(mentionDisplayEle);
        return mentionChip.outerHTML;
    };
    ChatUI.prototype.addGroupItems = function (msg, messageGroup, isUserTimeStampRendered, showStatus, index, loadOldChat) {
        var messageItem = this.createElement('div', { className: 'e-message-item', id: "" + msg.id });
        var messageStatusWrapper = this.createElement('div', { className: 'e-status-wrapper' });
        var timeSpan = this.getTimeStampElement(msg.timeStamp ? msg.timeStamp : new Date(), msg.timeStampFormat ? msg.timeStampFormat : this.timeStampFormat);
        var messageContent = this.createElement('div', { className: 'e-message-content' });
        var textElement = this.createElement('div', {
            className: 'e-text',
            innerHTML: this.getMessageText(msg)
        });
        if (this.hasAttachment(msg)) {
            var fileElement = this.createAttachmentContent(msg);
            messageContent.appendChild(fileElement);
        }
        if (!isNullOrUndefined(textElement) && textElement.innerHTML !== '') {
            messageContent.appendChild(textElement);
        }
        this.updateForwardAndReplyElement(msg, messageContent);
        if (this.messageTemplate) {
            this.getContextObject('messageTemplate', messageItem, index, msg);
        }
        else {
            if (!isUserTimeStampRendered) {
                messageItem.appendChild(timeSpan);
            }
            if (showStatus) {
                var messageElement = this.createElement('div', { className: 'e-status-item' });
                var statusIcon = this.createElement('span', { attrs: { class: "e-status-icon " + (msg.status ? msg.status.iconCss : ''), title: "" + (msg.status ? msg.status.tooltip : '') } });
                var statusText = this.createElement('div', { innerHTML: msg.status ? msg.status.text : '', className: 'e-status-text' });
                this.appendChildren(messageElement, messageContent, statusIcon);
                this.appendChildren(messageStatusWrapper, messageElement, statusText);
                messageItem.appendChild(messageStatusWrapper);
            }
            else {
                messageItem.appendChild(messageContent);
            }
        }
        this.manageChatContent(loadOldChat, messageGroup, messageItem);
        var toolbarEle = this.renderChatMessageToolbar(messageItem, msg);
        this.wireMessageToolbarEvents(messageItem, toolbarEle);
        messageItem.prepend(toolbarEle);
    };
    ChatUI.prototype.createAttachmentContent = function (msg) {
        var _this = this;
        var fileElement = this.createElement('div', {
            className: 'e-attached-file'
        });
        var file = msg.attachedFile;
        var wrapper;
        if (this.isImageFile(file.rawFile)) {
            wrapper = this.createElement('div', {
                className: 'e-image-wrapper'
            });
            wrapper.appendChild(this.createImageContent(file, 'e-image'));
            fileElement.appendChild(wrapper);
        }
        else if (this.isVideoFile(file.rawFile)) {
            wrapper = this.createVideoContent(file);
            fileElement.appendChild(wrapper);
        }
        else {
            wrapper = this.createFileItem(msg.attachedFile, false);
            fileElement.appendChild(wrapper);
        }
        EventHandler.add(fileElement, 'click', function () { return _this.handleAttachmentPreview(file, true); });
        return fileElement;
    };
    ChatUI.prototype.createVideoContent = function (file) {
        var videoWrapper = this.createElement('div', {
            className: 'e-video-wrapper'
        });
        var videoElement = this.createElement('video', {
            attrs: {
                disablepictureinpicture: 'true',
                playsinline: 'true',
                preload: 'metadata',
                title: file.name
            },
            className: 'e-video'
        });
        var source = this.createElement('source', {
            attrs: {
                src: file.fileSource,
                type: file.rawFile.type
            }
        });
        videoElement.appendChild(source);
        var playIconWrapper = this.createElement('div', {
            className: 'e-play-icon-wrapper'
        });
        var playButton = this.createElement('span', {
            className: 'e-chat-video-play e-icons',
            attrs: {
                role: 'button',
                tabindex: '0',
                'aria-label': 'Play video',
                title: 'Play'
            }
        });
        playIconWrapper.appendChild(playButton);
        videoWrapper.appendChild(videoElement);
        videoWrapper.appendChild(playIconWrapper);
        return videoWrapper;
    };
    ChatUI.prototype.updateForwardAndReplyElement = function (msg, messageContent) {
        if (!msg.isForwarded) {
            var replyElement = this.renderReplyElement(msg, false);
            if (replyElement) {
                messageContent.prepend(replyElement);
            }
        }
        else {
            this.renderForwardElement(msg, messageContent);
        }
    };
    ChatUI.prototype.manageChatContent = function (loadOldChat, parentItem, ChildItem) {
        if (loadOldChat) {
            parentItem.prepend(ChildItem);
        }
        else {
            parentItem.appendChild(ChildItem);
        }
    };
    ChatUI.prototype.createTimebreakElement = function (date) {
        var timebreakDiv = this.createElement('div', { className: "e-timebreak " + (this.timeBreakTemplate ? 'e-timebreak-template' : '') });
        var formattedTime = this.getFormattedTime(date, 'MMMM d, yyyy');
        if (this.timeBreakTemplate) {
            this.getContextObject('timeBreakTemplate', timebreakDiv, null, null, date);
        }
        else {
            var timeStampEle = this.createElement('span', { className: 'e-timestamp' });
            timeStampEle.innerHTML = formattedTime;
            timebreakDiv.appendChild(timeStampEle);
        }
        return timebreakDiv;
    };
    ChatUI.prototype.handleTimeBreak = function (lastMsgIndex, index, loadOldChat) {
        if (!this.showTimeBreak) {
            return;
        }
        var currentMessageDate = this.getMessageDate(index);
        currentMessageDate.setHours(0, 0, 0, 0);
        if (lastMsgIndex === -1) {
            this.messageWrapper.appendChild(this.createTimebreakElement(currentMessageDate));
        }
        else if (index > 0) {
            var lastMessageDate = this.getMessageDate(lastMsgIndex);
            lastMessageDate.setHours(0, 0, 0, 0);
            if ((currentMessageDate.getTime() !== lastMessageDate.getTime()) && !loadOldChat) {
                this.messageWrapper.appendChild(this.createTimebreakElement(currentMessageDate));
            }
        }
    };
    ChatUI.prototype.renderNewMessage = function (msg, index) {
        if (this.isEmptyChatTemplateRendered) {
            var introContainer = this.messageWrapper.querySelector('.e-empty-chat-template');
            this.messageWrapper.removeChild(introContainer);
            this.isEmptyChatTemplateRendered = false;
        }
        this.renderGroup(this.messageWrapper, msg, false, index, index - 1);
    };
    ChatUI.prototype.loadMoreMessages = function () {
        var _this = this;
        if (this.startIndex <= 0) {
            return;
        }
        var currentScrollOffset = this.messageWrapper.scrollHeight - this.messageWrapper.scrollTop;
        showSpinner(this.messageWrapper);
        setTimeout(function () {
            hideSpinner(_this.messageWrapper);
            _this.loadBatch();
            _this.messageWrapper.scrollTop = _this.messageWrapper.scrollHeight - currentScrollOffset;
        }, 1000);
    };
    ChatUI.prototype.updateMessageTimeFormats = function (msg, index) {
        var fullTime = this.getFormattedTime(msg.timeStamp
            ? msg.timeStamp
            : new Date(), 'dd/MM/yyyy hh:mm a');
        this.updateTimeFormats(msg.timeStampFormat, fullTime, index);
    };
    ChatUI.prototype.getMessageDate = function (index) {
        return new Date(this.messages[parseInt(index.toString(), 10)].timeStamp);
    };
    ChatUI.prototype.renderChatSuggestionsElement = function () {
        if (!isNullOrUndefined(this.suggestions) && this.suggestions.length > 0) {
            this.renderSuggestions(this.suggestions, null, this.suggestionTemplate, 'suggestion', 'suggestionTemplate', this.onSuggestionClick);
        }
    };
    ChatUI.prototype.handleSuggestionUpdate = function () {
        if (this.suggestionsElement) {
            this.suggestionsElement.remove();
        }
        if (!isNullOrUndefined(this.suggestions) && this.suggestions.length > 0) {
            this.renderSuggestions(this.suggestions, null, this.suggestionTemplate, 'suggestion', 'suggestionTemplate', this.onSuggestionClick);
        }
        this.toggleScrollIcon();
    };
    ChatUI.prototype.onSuggestionClick = function (e) {
        this.suggestionsElement.hidden = true;
        this.editableTextarea.innerText = e.target.innerText;
        this.onSendIconClick(e);
    };
    ChatUI.prototype.renderChatFooterContent = function () {
        this.getFooter();
        var footerClass = "e-footer " + (this.footerTemplate ? 'e-footer-template' : '');
        this.footer.className = footerClass;
        this.renderChatFooter();
        this.viewWrapper.append(this.footer);
        this.updateFooter(this.showFooter, this.footer);
    };
    ChatUI.prototype.renderChatFooter = function () {
        this.renderFooterContent(this.footerTemplate, '', this.placeholder, false, 'e-chat-textarea');
        var sendIconClass = 'e-chat-send e-icons disabled';
        if (!this.footerTemplate) {
            this.renderFooterIcons(sendIconClass, false, '');
            var footerIconsWrapper = this.footer.querySelector('.e-footer-icons-wrapper');
            if (footerIconsWrapper) {
                this.sendIcon.setAttribute('title', this.l10n.getConstant('send'));
                this.updateAttachmentElement(footerIconsWrapper);
            }
            this.refreshTextareaUI();
            this.pushToUndoStack(this.editableTextarea.innerText);
            this.updateMentionObj();
        }
    };
    ChatUI.prototype.getMentionDataSource = function (mentionUsers) {
        var _this = this;
        var dataSource = mentionUsers.map(function (user) {
            var name = user.user.trim();
            var initials = _this.getInitials(name);
            return {
                id: user.id,
                user: name,
                avatarUrl: user.avatarUrl || '',
                avatarBgColor: user.avatarBgColor || '',
                cssClass: user.cssClass || '',
                statusIconCss: user.statusIconCss || '',
                initials: initials
            };
        });
        return dataSource;
    };
    ChatUI.prototype.initializeMention = function () {
        // Map UserModel to format expected by Mention component
        var dataSource = this.getMentionDataSource(this.mentionUsers);
        var cssClass = 'e-chat-mention';
        if (this.enableRtl) {
            cssClass += ' e-rtl';
        }
        if (dataSource.length > 0) {
            // Initialize Mention component
            this.mentionObj = new Mention({
                dataSource: dataSource,
                cssClass: cssClass,
                requireLeadingSpace: false,
                suffixText: '&nbsp;',
                noRecordsTemplate: this.l10n.getConstant('noRecordsTemplate'),
                fields: { text: 'user', value: 'id' },
                popupWidth: '250px',
                popupHeight: '200px',
                allowSpaces: true,
                mentionChar: this.mentionTriggerChar,
                displayTemplate: '<span class="e-chat-mention-user-chip" data-user-id="${id}">${user}</span>',
                itemTemplate: '<div class="e-chat-mention-item-template"><span class="e-chat-mention-user-icon ${cssClass}" style="background-color: ${avatarBgColor};">${if(avatarUrl)} <img src="${avatarUrl}" alt="${user}" class="em-img" /> ${else}${initials}${/if} </span><div class="e-chat-mention-user-name">${user}</div></div>',
                select: this.onMentionSelect.bind(this)
            }, this.editableTextarea);
        }
    };
    // Add method to handle mention selection
    ChatUI.prototype.onMentionSelect = function (args) {
        var eventArgs = {
            cancel: false,
            event: args.e,
            isInteracted: args.isInteracted,
            itemData: args.itemData
        };
        this.trigger('mentionSelect', eventArgs);
        args.cancel = eventArgs.cancel;
        this.activateSendIcon(this.editableTextarea.innerText.length);
    };
    ChatUI.prototype.hasAttachment = function (message) {
        return message.attachedFile !== undefined && message.attachedFile !== null;
    };
    ChatUI.prototype.isImageFile = function (file) {
        if (!file) {
            return false;
        }
        return file.type && typeof file.type === 'string' && file.type.startsWith('image/');
    };
    ChatUI.prototype.isVideoFile = function (file) {
        if (!file) {
            return false;
        }
        return file.type && typeof file.type === 'string' && file.type.startsWith('video/');
    };
    ChatUI.prototype.updateAttachmentElement = function (footerIconsWrapper) {
        if (this.enableAttachments) {
            this.renderAttachmentIcon(footerIconsWrapper);
        }
        else {
            if (this.uploaderObj) {
                this.uploaderObj.destroy();
                EventHandler.remove(this.attachmentIcon, 'keydown', this.triggerUploaderAction);
                this.attachmentIcon.innerHTML = '';
                this.dropArea.innerHTML = '';
                this.attachmentIcon.remove();
                remove(this.dropArea);
            }
            this.removeFilesPreview();
        }
    };
    ChatUI.prototype.renderAttachmentIcon = function (footerIconsWrapper) {
        var _this = this;
        this.dropArea = this.createElement('div', { attrs: { class: 'e-chat-drop-area' } });
        this.footer.prepend(this.dropArea);
        this.attachmentIcon = this.createElement('span', { attrs: { class: 'e-chat-attachment-icon e-icons', role: 'button', 'aria-label': 'Attach files', tabindex: '0', title: this.l10n.getConstant('attachments') } });
        var uploaderElement = this.createElement('input', { attrs: { class: 'e-chat-file-upload', type: 'file', name: 'UploadFiles', id: 'fileUpload' } });
        var dropAreaTarget;
        if (this.attachmentSettings.enableDragAndDrop) {
            dropAreaTarget = this.footer;
        }
        this.uploaderObj = new Uploader({
            asyncSettings: {
                saveUrl: this.attachmentSettings.saveUrl,
                removeUrl: this.attachmentSettings.removeUrl
            },
            maxFileSize: this.attachmentSettings.maxFileSize,
            allowedExtensions: this.attachmentSettings.allowedFileTypes,
            success: this.onUploadSuccess.bind(this),
            failure: this.onUploadFailure.bind(this),
            uploading: this.onUploadStart.bind(this),
            progress: this.onUploadProgress.bind(this),
            multiple: true,
            dropArea: dropAreaTarget,
            selected: function (args) {
                if (args.filesData.some(function (file) { return file.status === _this.uploaderObj.l10n.getConstant('invalidFileType'); })) {
                    args.cancel = true;
                    return;
                }
                var totalSelected = args.filesData.length + _this.uploadedFiles.length;
                if (totalSelected > _this.attachmentSettings.maximumCount) {
                    args.cancel = true;
                    _this.showFailureAlert('fileCountFailure', _this.attachmentSettings.maximumCount, 'e-count-failure');
                    uploaderElement.value = '';
                    return;
                }
                var oversized = args.filesData.filter(function (file) {
                    return file.status === _this.uploaderObj.l10n.getConstant('invalidMaxFileSize') && file.statusCode === '0';
                });
                if (oversized.length) {
                    _this.showFailureAlert('fileSizeFailure', oversized.length, 'e-size-failure');
                    uploaderElement.value = '';
                }
                _this.handleFileSelection(args);
            }
        });
        this.attachmentIcon.appendChild(uploaderElement);
        this.uploaderObj.appendTo(uploaderElement);
        this.attachmentIcon.addEventListener('click', function () { return uploaderElement.click(); });
        footerIconsWrapper.prepend(this.attachmentIcon);
        EventHandler.add(this.attachmentIcon, 'keydown', this.triggerUploaderAction, this);
    };
    ChatUI.prototype.triggerUploaderAction = function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            var uploaderElement = this.footer.querySelector('.e-chat-file-upload');
            if (uploaderElement) {
                uploaderElement.click();
            }
        }
    };
    ChatUI.prototype.showFailureAlert = function (localeConstantKey, fileCount, failureType) {
        var failureMessage = this.l10n.getConstant(localeConstantKey).replace('{0}', fileCount.toString());
        if (fileCount === 1) {
            failureMessage = failureMessage.replace('files', 'file');
        }
        this.createFailureAlert(failureMessage, failureType);
    };
    ChatUI.prototype.createFailureAlert = function (failureMessage, failureType) {
        var _this = this;
        var failureAlert = this.renderFailureAlert(this.viewWrapper, failureMessage, failureType, 'e-chat-circle-close', 'e-chat-close');
        if (this.viewWrapper.contains(this.footer)) {
            this.viewWrapper.insertBefore(failureAlert, this.footer);
        }
        failureAlert.classList.add('e-show');
        setTimeout(function () {
            _this.handleFailureAlertRemove(_this.viewWrapper, failureAlert);
        }, 3000);
    };
    ChatUI.prototype.handleFileSelection = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, fileData, file, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _i = 0, _a = args.filesData;
                        _c.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 6];
                        fileData = _a[_i];
                        file = fileData.rawFile;
                        if (!this.attachmentSettings.path) return [3 /*break*/, 2];
                        fileData.fileSource = this.attachmentSettings.path + "/" + fileData.name;
                        return [3 /*break*/, 5];
                    case 2:
                        if (!(this.attachmentSettings.saveFormat === 'Base64')) return [3 /*break*/, 4];
                        _b = fileData;
                        return [4 /*yield*/, this.readFileAsBase64(file)];
                    case 3:
                        _b.fileSource = _c.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        fileData.fileSource = URL.createObjectURL(file);
                        _c.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 1];
                    case 6:
                        this.element.querySelector('#fileUpload').value = '';
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatUI.prototype.readFileAsBase64 = function (file) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.onload = function () { return resolve(reader.result); };
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    };
    ChatUI.prototype.onUploadStart = function (args) {
        this.trigger('beforeAttachmentUpload', args);
        this.uploadedFiles.push(args.fileData);
        var fileItem = this.createFileItem(args.fileData, true);
        this.dropArea.appendChild(fileItem);
    };
    ChatUI.prototype.onUploadProgress = function (args) {
        var uploadProgress = args.e.loaded / args.e.total * 100;
        var progressFill = this.element.querySelector("#e-chat-progress-" + CSS.escape(args.file.name));
        if (progressFill) {
            progressFill.style.width = uploadProgress + "%";
        }
    };
    ChatUI.prototype.onUploadSuccess = function (args) {
        if (args.operation === 'upload') {
            this.trigger('attachmentUploadSuccess', args);
            var progressFill = this.element.querySelector("#e-chat-progress-" + CSS.escape(args.file.name));
            if (progressFill) {
                progressFill.style.width = '100%';
                this.cleanupFileItem(args.file.name);
            }
            var progressBar = this.element.querySelector('.e-chat-progress-fill');
            if (!progressBar) {
                this.activateSendIcon(1);
            }
        }
        else if (args.operation === 'remove') {
            this.trigger('attachmentRemoved', args);
        }
    };
    ChatUI.prototype.cleanupFileItem = function (fileName) {
        var fileItem = this.element.querySelector("#e-chat-progress-" + CSS.escape(fileName));
        if (fileItem) {
            fileItem.parentElement.remove();
        }
    };
    ChatUI.prototype.onUploadFailure = function (args) {
        if (args.operation === 'remove') {
            this.trigger('attachmentRemoved', args);
        }
        else {
            this.trigger('attachmentUploadFailure', args);
            this.uploaderObj.remove(args.file);
            this.uploadedFiles = this.uploadedFiles.filter(function (file) { return file.name !== args.file.name; });
            var progressFill = this.footer.querySelector("#e-chat-progress-" + CSS.escape(args.file.name));
            if (progressFill) {
                progressFill.style.width = '100%';
                progressFill.classList.add('e-chat-upload-failed');
            }
        }
    };
    ChatUI.prototype.createFileItem = function (fileData, isForFooter) {
        var _this = this;
        var fileItem = this.createElement('div', { className: isForFooter ? 'e-chat-uploaded-file-item' : 'e-file-wrapper' });
        if (this.attachmentSettings.attachmentTemplate && isForFooter) {
            var introContainer = this.createElement('div', { className: 'e-attachment-template' });
            fileItem.appendChild(introContainer);
            this.getContextObject('attachmenttemplate', introContainer, null, null, null, fileData);
        }
        else {
            var fileIcon = this.createElement('div', { className: 'e-chat-file-icon-svg' });
            fileIcon.appendChild(this.createFileTypeIcon(fileData.name));
            var fileDetails = this.createElement('div', { className: 'e-chat-file-details' });
            var fileName = this.createElement('span', { className: 'e-chat-file-name', innerHTML: fileData.name });
            var fileSize = this.createElement('span', { className: 'e-chat-file-size', innerHTML: (fileData.size / 1024).toFixed(2) + " KB" });
            fileDetails.append(fileName, fileSize);
            fileItem.append(fileIcon, fileDetails);
        }
        if (isForFooter) {
            var closeButton_1 = this.createElement('span', { attrs: { class: 'e-icons e-chat-close', role: 'button', 'aria-label': 'Clear file', tabindex: '-1' } });
            EventHandler.add(closeButton_1, 'click', function () { return _this.handleRemoveUploadedFile(closeButton_1, fileData, fileItem); });
            fileItem.append(closeButton_1);
            var progressBar = this.createElement('div', { className: 'e-chat-progress-bar' });
            var progressFill = this.createElement('div', { id: "e-chat-progress-" + fileData.name, className: 'e-chat-progress-fill' });
            progressBar.appendChild(progressFill);
            fileItem.append(progressBar);
            EventHandler.add(fileItem, 'click', function (event) {
                if (closeButton_1 && (event.target === closeButton_1 || event.target.classList.contains('e-chat-close'))) {
                    return;
                }
                _this.handleAttachmentPreview(fileData, false);
            });
        }
        return fileItem;
    };
    ChatUI.prototype.handleRemoveUploadedFile = function (closeButton, fileData, fileItem) {
        this.uploaderObj.remove(fileData);
        this.uploadedFiles = this.uploadedFiles.filter(function (file) { return file.name !== fileData.name; });
        EventHandler.remove(closeButton, 'click', this.handleRemoveUploadedFile);
        fileItem.remove();
        var textLength = this.editableTextarea.innerText.length;
        var totalLength = textLength + this.uploadedFiles.length;
        this.activateSendIcon(totalLength);
    };
    ChatUI.prototype.handleAttachmentPreview = function (file, isAfterPreview) {
        var eventArgs = { cancel: false };
        if (this.attachmentSettings.attachmentClick) {
            this.attachmentSettings.attachmentClick.call(this, eventArgs);
        }
        else if (!eventArgs.cancel) {
            this.showMediaPreview(file, isAfterPreview);
        }
    };
    ChatUI.prototype.getFilePreview = function (file) {
        var sizeInKB = file.size / 1024;
        var sizeDisplay = sizeInKB < 1024 ? sizeInKB.toFixed(2) + " KB" : (sizeInKB / 1024).toFixed(2) + " MB";
        var filePreview = this.createElement('div', {
            className: 'e-file-preview'
        });
        var fileIcon = this.createElement('div', {
            className: 'e-chat-file-icon-svg'
        });
        fileIcon.appendChild(this.createFileTypeIcon(file.name));
        var previewText = this.createElement('div', {
            className: 'e-preview-file-text',
            innerHTML: this.l10n.getConstant('filePreview')
        });
        var filedetails = this.createElement('div', {
            className: 'e-file-details',
            innerHTML: '' + file.type + ' - ' + sizeDisplay
        });
        this.appendChildren(filePreview, fileIcon, previewText, filedetails);
        return filePreview;
    };
    ChatUI.prototype.removeFilesPreview = function () {
        var previewWrapper = this.messageWrapper.querySelector('.e-preview-overlay');
        if (previewWrapper) {
            previewWrapper.remove();
        }
    };
    ChatUI.prototype.renderPreviewTemplate = function (selectedFile, isAfterPreview) {
        var introContainer = this.createElement('div', { className: 'e-preview-template' });
        var fileIndex;
        if (isAfterPreview) {
            fileIndex = this.messages.findIndex(function (msg) { return msg.attachedFile === selectedFile; });
        }
        else {
            fileIndex = Array.isArray(this.uploadedFiles) && selectedFile ?
                this.uploadedFiles.findIndex(function (fileData) { return fileData.id === selectedFile.id; }) : -1;
        }
        this.getContextObject('previewtemplate', introContainer, fileIndex, null, null, selectedFile);
        return introContainer;
    };
    ChatUI.prototype.showMediaPreview = function (file, isAfterPreview) {
        var previewOverlay = this.createElement('div', {
            className: 'e-preview-overlay',
            attrs: {
                tabindex: '0'
            }
        });
        var previewHeader = this.createElement('div', {
            className: 'e-preview-header'
        });
        var closeButton = this.createElement('span', {
            className: 'e-chat-back-icon e-icons',
            attrs: {
                title: this.l10n.getConstant('close')
            }
        });
        previewHeader.appendChild(closeButton);
        var fileNameLabel = this.createElement('span', {
            className: 'e-preview-file-name',
            innerHTML: file.name
        });
        previewHeader.appendChild(fileNameLabel);
        if (isAfterPreview) {
            var downloadButton = this.createElement('a', {
                className: 'e-chat-download e-icons',
                attrs: {
                    href: file.fileSource,
                    download: file.name,
                    target: '_blank',
                    title: this.l10n.getConstant('download')
                }
            });
            previewHeader.appendChild(downloadButton);
        }
        var previewContent;
        if (this.attachmentSettings.previewTemplate) {
            previewContent = this.renderPreviewTemplate(file, isAfterPreview);
        }
        else {
            if (this.isImageFile(file.rawFile)) {
                previewContent = this.createImageContent(file, 'e-image-preview');
            }
            else if (this.isVideoFile(file.rawFile)) {
                previewContent = this.createElement('video', {
                    attrs: {
                        autoplay: 'true',
                        muted: 'true',
                        controls: 'true',
                        controlsList: 'nodownload noplaybackrate',
                        disablepictureinpicture: 'true',
                        preload: 'metadata',
                        title: file.name
                    },
                    className: 'e-video-preview'
                });
                var source = this.createElement('source', {
                    attrs: {
                        src: file.fileSource,
                        type: file.rawFile.type
                    }
                });
                previewContent.appendChild(source);
            }
            else {
                previewContent = this.getFilePreview(file);
            }
        }
        this.appendChildren(previewOverlay, previewHeader, previewContent);
        this.messageWrapper.appendChild(previewOverlay);
        previewOverlay.focus();
        var escKeyHandler = function (event) {
            if (event.key === 'Escape') {
                closePreview();
            }
        };
        var overlayClickHandler = function (event) {
            if (event.currentTarget === event.target) {
                closePreview();
            }
        };
        var closeClickHandler = function () {
            closePreview();
        };
        var closePreview = function () {
            EventHandler.remove(previewOverlay, 'keydown', escKeyHandler);
            EventHandler.remove(previewOverlay, 'click', overlayClickHandler);
            EventHandler.remove(closeButton, 'click', closeClickHandler);
            previewOverlay.remove();
        };
        EventHandler.add(previewOverlay, 'keydown', escKeyHandler);
        EventHandler.add(previewOverlay, 'click', overlayClickHandler);
        EventHandler.add(closeButton, 'click', closeClickHandler);
    };
    ChatUI.prototype.createImageContent = function (file, imageClass) {
        var imageElement = this.createElement('img', {
            attrs: {
                src: file.fileSource,
                alt: file.name
            },
            className: imageClass
        });
        return imageElement;
    };
    ChatUI.prototype.updateAttachmentSettings = function (newAttachment) {
        this.removeFilesPreview();
        this.uploaderObj.allowedExtensions = !isNullOrUndefined(newAttachment.allowedFileTypes) ? newAttachment.allowedFileTypes
            : this.attachmentSettings.allowedFileTypes;
        this.uploaderObj.maxFileSize = !isNullOrUndefined(newAttachment.maxFileSize) ? newAttachment.maxFileSize : this.attachmentSettings.maxFileSize;
        this.uploaderObj.asyncSettings = {
            saveUrl: !isNullOrUndefined(newAttachment.saveUrl) ? newAttachment.saveUrl : this.attachmentSettings.saveUrl,
            removeUrl: !isNullOrUndefined(newAttachment.removeUrl) ? newAttachment.removeUrl : this.attachmentSettings.removeUrl
        };
        if (!isNullOrUndefined(newAttachment.path)) {
            this.attachmentSettings.path = newAttachment.path;
        }
        if (!isNullOrUndefined(newAttachment.enableDragAndDrop)) {
            this.attachmentSettings.enableDragAndDrop = newAttachment.enableDragAndDrop;
        }
        this.uploaderObj.dropArea = this.attachmentSettings.enableDragAndDrop ? this.footer : '';
        if (!isNullOrUndefined(newAttachment.saveFormat)) {
            if (newAttachment.saveFormat === 'Base64' || newAttachment.saveFormat === 'Blob') {
                this.attachmentSettings.saveFormat = newAttachment.saveFormat;
            }
        }
        if (!isNullOrUndefined(newAttachment.maximumCount)) {
            this.attachmentSettings.maximumCount = newAttachment.maximumCount;
        }
    };
    ChatUI.prototype.clearUploadedFiles = function () {
        this.uploadedFiles = [];
        if (this.dropArea) {
            this.dropArea.innerHTML = '';
        }
        this.refreshTextareaUI();
    };
    ChatUI.prototype.refreshTextareaUI = function () {
        var textLength = this.editableTextarea.innerText.length;
        var previewCount = this.uploadedFiles && this.uploadedFiles.length ? this.uploadedFiles.length : 0;
        var totalContent = textLength + previewCount;
        this.updateHiddenTextarea(this.editableTextarea.innerText);
        this.activateSendIcon(totalContent);
        this.updateFooterElementClass();
    };
    ChatUI.prototype.handleInput = function (event) {
        var textareaEle = event.target;
        var isEmpty = textareaEle.innerHTML === '<br>';
        if (isEmpty) {
            this.clearBreakTags(textareaEle);
        }
        var textContent = textareaEle.innerText;
        this.refreshTextareaUI();
        this.editableTextarea.focus();
        // Debounced push to undo stack
        this.scheduleUndoPush();
        this.redoStack = [];
        this.triggerUserTyping(event, textContent);
    };
    ChatUI.prototype.onFocusEditableTextarea = function () {
        if (this.footer) {
            this.footer.classList.add('e-footer-focused');
        }
    };
    ChatUI.prototype.onBlurEditableTextarea = function (e) {
        if (this.footer) {
            this.footer.classList.remove('e-footer-focused');
        }
        this.triggerUserTyping(e, e.target.innerText);
    };
    ChatUI.prototype.triggerUserTyping = function (event, value) {
        var eventArgs = {
            event: event,
            message: value,
            user: this.user,
            isTyping: event.type === 'blur' ? false : value.length > 0 ? true : false
        };
        this.trigger('userTyping', eventArgs);
    };
    ChatUI.prototype.renderTypingIndicator = function () {
        var _this = this;
        if (this.indicatorWrapper) {
            this.indicatorWrapper.remove();
        }
        if (!this.typingUsers || this.typingUsers.length === 0) {
            return;
        }
        this.indicatorWrapper = this.createElement('div', {
            className: "e-typing-indicator " + (this.typingUsersTemplate ? 'e-typing-indicator-template' : '')
        });
        if (this.typingUsersTemplate) {
            this.getContextObject('typingUsersTemplate', this.indicatorWrapper, null, null, null);
        }
        else {
            this.typingUsers.slice(0, 3).forEach(function (user) {
                var avatarElement = _this.createAvatarIcon(user, true);
                _this.indicatorWrapper.appendChild(avatarElement);
            });
            var typingMessage = this.createElement('span', { className: 'e-user-text' });
            this.indicatorWrapper.appendChild(typingMessage);
            this.updateUserText();
            var indicatorContainer = this.createElement('div', { className: 'e-indicator-wrapper' });
            for (var i = 0; i < 3; i++) {
                var indicator = this.createElement('span', {
                    className: 'e-indicator'
                });
                this.appendChildren(indicatorContainer, indicator);
            }
            this.indicatorWrapper.appendChild(indicatorContainer);
        }
        this.content.prepend(this.indicatorWrapper);
    };
    ChatUI.prototype.updateUserText = function () {
        var _this = this;
        if (this.typingUsersTemplate) {
            return;
        }
        var userNames = this.typingUsers.filter(function (user) { return user.user !== _this.user.user; })
            .map(function (user) { return user.user; });
        var displayText = this.getTypingMessage(userNames);
        var typingMessage = this.indicatorWrapper.querySelector('.e-user-text');
        typingMessage.innerHTML = displayText;
    };
    ChatUI.prototype.getTypingMessage = function (userNames) {
        if (userNames.length >= 3) {
            return this.l10n.getConstant(userNames.length > 3 ? 'multipleUsersTyping' : 'threeUserTyping')
                .replace('{0}', userNames[0].toString())
                .replace('{1}', userNames[1].toString())
                .replace('{2}', (userNames.length - 2).toString());
        }
        else {
            var userTemplate = this.l10n.getConstant(userNames.length === 2 ? 'twoUserTyping' : 'oneUserTyping');
            return userNames.length === 2
                ? userTemplate.replace('{0}', userNames[0].toString()).replace('{1}', userNames[1].toString())
                : userTemplate.replace('{0}', userNames[0].toString());
        }
    };
    ChatUI.prototype.updateTypingUsers = function (users) {
        var prevOnChange = this.isProtectedOnChange;
        this.isProtectedOnChange = true;
        this.typingUsers = users;
        this.isProtectedOnChange = prevOnChange;
        this.renderTypingIndicator();
    };
    ChatUI.prototype.updateHeaderIcon = function () {
        var existingIconElement = this.element.querySelector('.e-header-icon');
        if (existingIconElement) {
            existingIconElement.className = "e-header-icon e-icons " + this.headerIconCss;
        }
        else {
            var headerContainer = this.element.querySelector('.e-header');
            if (headerContainer) {
                var iconElement = this.createElement('span', {
                    className: "e-header-icon e-icons " + this.headerIconCss
                });
                headerContainer.prepend(iconElement);
            }
        }
    };
    ChatUI.prototype.updateHeaderText = function () {
        if (this.headerText) {
            var headerTextEle = this.element.querySelector('.e-header-text');
            if (headerTextEle) {
                headerTextEle.innerHTML = this.headerText;
            }
        }
    };
    ChatUI.prototype.renderUpdatedMessage = function () {
        this.messageWrapper.innerHTML = '';
        this.setChatMsgId();
        this.renderMessageGroup(this.messageWrapper);
        this.updateEmptyChatTemplate();
    };
    ChatUI.prototype.getUserMentionFromContent = function () {
        var _this = this;
        var mentionChips = this.editableTextarea.querySelectorAll('.e-chat-mention-user-chip');
        var updatedMentionedUsers = [];
        mentionChips.forEach(function (chip) {
            var userId = chip.getAttribute('data-user-id');
            var mentionUser = _this.mentionUsers.find(function (user) { return user.id === userId; });
            if (mentionUser) {
                updatedMentionedUsers.push(mentionUser);
            }
            else {
                var mentionedUser = {
                    id: userId,
                    user: chip.textContent
                };
                updatedMentionedUsers.push(mentionedUser);
            }
        });
        return updatedMentionedUsers;
    };
    ChatUI.prototype.onSendIconClick = function (event) {
        var _this = this;
        if (this.editableTextarea && this.uploadedFiles.length === 0 && !this.editableTextarea.innerText.trim()) {
            return;
        }
        var repliedTO = this.currentReplyTo ? {
            user: this.currentReplyTo.author,
            text: this.currentReplyTo.text,
            timestamp: this.currentReplyTo.timeStamp,
            timestampFormat: this.currentReplyTo.timeStampFormat,
            messageID: this.currentReplyTo.id,
            mentionUsers: this.currentReplyTo.mentionUsers,
            attachedFile: this.currentReplyTo.attachedFile
        } : null;
        var messageText = this.replaceMentionChipsWithPlaceholders();
        var mentionUsers = this.getUserMentionFromContent();
        var prevOnChange = this.isProtectedOnChange;
        this.editableTextarea.innerText = '';
        this.clearReplyWrapper();
        this.refreshTextareaUI();
        this.pushToUndoStack(this.editableTextarea.innerText);
        this.triggerUserTyping(event, '');
        if (this.uploadedFiles && this.uploadedFiles.length > 0) {
            var filesCount_1 = this.uploadedFiles.length;
            this.uploadedFiles.forEach(function (file, index) {
                var newMessageObj = {
                    id: _this.element.id + "-message-" + (_this.messages.length + 1),
                    author: _this.user,
                    text: index === filesCount_1 - 1 ? messageText : '',
                    mentionUsers: index === filesCount_1 - 1 ? mentionUsers : [],
                    replyTo: index === filesCount_1 - 1 ? repliedTO : null,
                    attachedFile: file,
                    timeStamp: new Date(),
                    timeStampFormat: _this.timeStampFormat || 'dd/MM/yyyy hh:mm a',
                    status: null,
                    isPinned: false,
                    isForwarded: false
                };
                var eventArgs = {
                    cancel: false,
                    message: newMessageObj
                };
                _this.trigger('messageSend', eventArgs, function (args) {
                    if (args.cancel) {
                        return;
                    }
                    newMessageObj = args.message;
                    _this.isProtectedOnChange = true;
                    _this.messages = _this.messages.concat([newMessageObj]);
                    _this.isProtectedOnChange = prevOnChange;
                    _this.renderNewMessage(newMessageObj, _this.messages.length - 1);
                });
            });
        }
        else {
            var newMessageObj_1 = {
                id: this.element.id + "-message-" + (this.messages.length + 1),
                author: this.user,
                text: messageText,
                mentionUsers: mentionUsers,
                replyTo: repliedTO,
                attachedFile: null,
                timeStamp: new Date(),
                timeStampFormat: this.timeStampFormat || 'dd/MM/yyyy hh:mm a',
                status: null,
                isPinned: false,
                isForwarded: false
            };
            var eventArgs = {
                cancel: false,
                message: newMessageObj_1
            };
            this.trigger('messageSend', eventArgs, function (args) {
                if (args.cancel) {
                    return;
                }
                newMessageObj_1 = args.message;
                _this.isProtectedOnChange = true;
                _this.messages = _this.messages.concat([newMessageObj_1]);
                _this.isProtectedOnChange = prevOnChange;
                _this.renderNewMessage(newMessageObj_1, _this.messages.length - 1);
            });
        }
        if (this.suggestionsElement) {
            this.suggestionsElement.hidden = false;
        }
        // To prevent the issue where scrolling does not move to the bottom in the `messageTemplate` case on Angular and React platforms.
        this.updateScrollPosition(false, 5);
        this.clearUploadedFiles();
    };
    ChatUI.prototype.replaceMentionChipsWithPlaceholders = function () {
        if (!this.editableTextarea.innerHTML) {
            return this.editableTextarea.innerHTML;
        }
        var tempEle = this.createElement('div');
        tempEle.innerHTML = this.editableTextarea.innerHTML;
        var mentionChips = tempEle.querySelectorAll('span.e-mention-chip');
        var mentionIndex = 0;
        mentionChips.forEach(function (chip) {
            var placeholder = document.createTextNode("{" + mentionIndex++ + "}");
            chip.replaceWith(placeholder);
        });
        return tempEle.innerHTML || '';
    };
    ChatUI.prototype.clearReplyWrapper = function () {
        var replyWrapper = this.footer.querySelector('.e-reply-wrapper');
        if (replyWrapper) {
            var clearIcon = replyWrapper.querySelector('.e-chat-close.e-icons');
            EventHandler.remove(clearIcon, 'click', this.clearReplyWrapper);
            this.footer.removeChild(replyWrapper);
            replyWrapper.remove();
        }
        this.currentReplyTo = null;
    };
    ChatUI.prototype.getContextObject = function (templateName, contentElement, index, message, currentMessagedate, file) {
        var template;
        var context = {};
        switch (templateName.toLowerCase()) {
            case 'messagetemplate': {
                template = this.messageTemplate;
                context = { message: message, index: index };
                break;
            }
            case 'timebreaktemplate': {
                template = this.timeBreakTemplate;
                context = { messageDate: currentMessagedate };
                break;
            }
            case 'typinguserstemplate': {
                template = this.typingUsersTemplate;
                context = { users: this.typingUsers };
                break;
            }
            case 'previewtemplate': {
                template = this.attachmentSettings.previewTemplate;
                context = { selectedFile: file, index: index };
                break;
            }
            case 'attachmenttemplate': {
                template = this.attachmentSettings.attachmentTemplate;
                context = { selectedFile: file };
                break;
            }
        }
        this.updateContent(template, contentElement, context, templateName);
    };
    ChatUI.prototype.handleAutoScroll = function () {
        if (this.isScrollAtBottom) {
            this.updateScroll(this.messageWrapper);
        }
        if (this.autoScrollToBottom) {
            this.updateScroll(this.messageWrapper);
        }
        this.toggleScrollIcon();
    };
    ChatUI.prototype.footerKeyHandler = function (e) {
        var targetElement = e.target;
        if (targetElement.classList.contains('e-chat-attachment-icon')) {
            return;
        }
        this.keyHandler(e, 'footer');
    };
    ChatUI.prototype.scrollBottomKeyHandler = function (e) {
        this.keyHandler(e, 'scrollBottom');
    };
    ChatUI.prototype.keyHandler = function (event, value) {
        if (event.key === 'Enter' && !event.shiftKey) {
            var mentionPopup = document.querySelector('.e-chat-mention.e-mention');
            if (mentionPopup && mentionPopup.classList.contains('e-popup-open')) {
                return;
            }
            switch (value) {
                case 'footer':
                    this.pushToUndoStack(this.editableTextarea.innerText);
                    event.preventDefault();
                    this.onSendIconClick(event);
                    break;
                case 'scrollBottom':
                    this.scrollToBottom();
                    break;
            }
        }
        else {
            this.handleUndoRedo(event);
        }
    };
    ChatUI.prototype.applyPromptChange = function (newState, oldState, event) {
        this.editableTextarea.innerHTML = newState.content;
        this.refreshTextareaUI();
        this.setCursorPosition(newState.selectionStart, newState.selectionEnd);
        this.triggerUserTyping(event, oldState.content);
    };
    ChatUI.prototype.updateFooter = function (showFooter, footerElement) {
        if (!showFooter) {
            footerElement.hidden = true;
        }
        else {
            footerElement.hidden = false;
        }
    };
    ChatUI.prototype.handleScroll = function () {
        this.messageWrapper.querySelectorAll('.e-chat-message-toolbar.e-show').forEach(function (toolbar) {
            toolbar.classList.remove('e-show');
        });
        var atBottom = this.checkScrollAtBottom(this.messageWrapper, 0);
        if (atBottom) {
            this.toggleClassName(this.downArrowIcon.element, atBottom, 'downArrow');
            var suggestionEle = this.element.querySelector('.e-suggestions');
            if (suggestionEle) {
                this.toggleClassName(suggestionEle, atBottom, 'suggestion');
                if (!atBottom || !this.isScrollAtBottom) {
                    this.updateScroll(this.messageWrapper);
                }
            }
        }
        if (this.loadOnDemand && this.messageWrapper.scrollTop === 0) {
            this.multiplier += this.multiplier;
            this.loadMoreMessages();
        }
        this.isScrollAtBottom = atBottom;
    };
    ChatUI.prototype.toggleClassName = function (element, atBottom, name) {
        switch (name) {
            case 'downArrow':
                element.classList.toggle('e-arrowdown-hide', atBottom);
                element.classList.toggle('e-arrowdown-show', !atBottom);
                break;
            case 'suggestion':
                element.classList.toggle('e-show-suggestions', atBottom);
                element.classList.toggle('e-hide-suggestions', !atBottom);
                break;
            case 'scroll':
                element.classList.toggle('e-scroll-smooth', !atBottom);
                break;
        }
    };
    ChatUI.prototype.toggleScrollIcon = function () {
        var atBottom = this.checkScrollAtBottom(this.messageWrapper, 0);
        this.toggleClassName(this.downArrowIcon.element, atBottom, 'downArrow');
        var suggestionEle = this.element.querySelector('.e-suggestions');
        if (suggestionEle) {
            this.toggleClassName(suggestionEle, atBottom, 'suggestion');
            if (atBottom) {
                this.updateScroll(this.messageWrapper);
            }
        }
        this.isScrollAtBottom = atBottom;
    };
    ChatUI.prototype.scrollBtnClick = function () {
        this.toggleClassName(this.messageWrapper, false, 'scroll');
        this.scrollToBottom();
        this.toggleClassName(this.messageWrapper, true, 'scroll');
    };
    ChatUI.prototype.updateMessageItem = function (message, msgId) {
        if (message.author || message.timeStamp || this.messageTemplate) {
            this.renderUpdatedMessage();
            return;
        }
        var messageItem = this.messageWrapper.querySelector("#" + msgId);
        if (!messageItem) {
            return;
        }
        if (message.id) {
            messageItem.id = message.id;
        }
        var messageContent = messageItem.querySelector('.e-message-content');
        if (messageContent && message.text) {
            var textElement = messageItem.querySelector('.e-text');
            if (textElement) {
                textElement.innerHTML = this.getMessageText(message);
            }
            this.updateForwardAndReplyElement(message, messageContent);
        }
        if (message.status) {
            var statusTextElement = messageItem.querySelector('.e-status-text');
            if (statusTextElement && message.status.text) {
                statusTextElement.innerHTML = message.status.text;
            }
            var statusIconElement = messageItem.querySelector('.e-status-icon');
            if (statusIconElement && message.status.iconCss) {
                var iconCss = message.status.iconCss;
                statusIconElement.className = "e-status-icon " + iconCss;
                if (message.status.tooltip) {
                    statusIconElement.title = message.status.tooltip;
                }
            }
        }
    };
    ChatUI.prototype.updateMentionObj = function () {
        if (isNullOrUndefined(this.mentionObj)) {
            this.initializeMention();
        }
        else {
            if (this.mentionUsers.length > 0) {
                this.mentionObj.dataSource = this.getMentionDataSource(this.mentionUsers);
            }
            else {
                this.destroyAndNullify(this.mentionObj);
                this.mentionObj = null;
            }
        }
    };
    ChatUI.prototype.updateLocale = function () {
        var _this = this;
        // Updated locale for forward message text.
        this.l10n.setLocale(this.locale);
        var messages = this.messageWrapper.querySelectorAll('.e-message-item');
        messages.forEach(function (message) {
            var forwardEle = message.querySelector('.e-forwarded-indicator');
            if (forwardEle) {
                forwardEle.querySelector('.e-forward-message').innerHTML = _this.l10n.getConstant('forwarded');
            }
        });
        if (this.mentionObj) {
            this.mentionObj.noRecordsTemplate = this.l10n.getConstant('noRecordsTemplate');
        }
        //update locale for icons
        if (this.sendIcon) {
            this.sendIcon.setAttribute('title', this.l10n.getConstant('send'));
        }
        if (this.attachmentIcon) {
            this.attachmentIcon.setAttribute('title', this.l10n.getConstant('attachments'));
        }
        var closeIcon = this.viewWrapper.querySelector('.e-chat-close');
        if (closeIcon) {
            closeIcon.setAttribute('title', this.l10n.getConstant('close'));
        }
        // Update locale for file preview
        var attachmentPreview = this.viewWrapper.querySelector('.e-preview-overlay');
        if (attachmentPreview) {
            var downloadIcon = attachmentPreview.querySelector('.e-chat-download');
            if (downloadIcon) {
                downloadIcon.setAttribute('title', this.l10n.getConstant('download'));
            }
            var backIcon = attachmentPreview.querySelector('.e-chat-back-icon');
            if (backIcon) {
                backIcon.setAttribute('title', this.l10n.getConstant('close'));
            }
            var filePreviewText = attachmentPreview.querySelector('.e-preview-file-text');
            if (filePreviewText) {
                filePreviewText.textContent = this.l10n.getConstant('filePreview');
            }
        }
        //update locale for failure message
        var failureMessageElem = this.viewWrapper.querySelector('.e-failure-message');
        if (failureMessageElem) {
            if (failureMessageElem.classList.contains('e-size-failure')) {
                failureMessageElem.textContent = this.l10n.getConstant('fileSizeFailure');
            }
            else {
                var failureText = this.l10n.getConstant('fileCountFailure');
                failureText = failureText.replace('{0}', this.attachmentSettings.maximumCount.toString());
                if (this.attachmentSettings.maximumCount === 1) {
                    failureText = failureText.replace('files', 'file');
                }
                failureMessageElem.textContent = failureText;
            }
        }
        // Update locale for typing users text.
        if (!this.typingUsers || this.typingUsers.length === 0) {
            return;
        }
        this.updateUserText();
    };
    ChatUI.prototype.wireEvents = function () {
        this.wireFooterEvents(this.footerTemplate);
        EventHandler.add(this.messageWrapper, 'scroll', this.handleScroll, this);
        EventHandler.add(this.downArrowIcon.element, 'click', this.scrollBtnClick, this);
        EventHandler.add(this.downArrowIcon.element, 'keydown', this.scrollBottomKeyHandler, this);
    };
    ChatUI.prototype.unwireEvents = function () {
        this.unWireFooterEvents(this.footerTemplate);
        EventHandler.remove(this.messageWrapper, 'scroll', this.handleScroll);
        EventHandler.remove(this.downArrowIcon.element, 'click', this.scrollBtnClick);
        EventHandler.remove(this.downArrowIcon.element, 'keydown', this.scrollBottomKeyHandler);
        if (this.attachmentIcon) {
            EventHandler.clearEvents(this.attachmentIcon);
        }
    };
    ChatUI.prototype.destroyAttachments = function () {
        if (this.uploaderObj) {
            this.uploaderObj.destroy();
            this.uploaderObj = null;
        }
        if (this.attachmentIcon) {
            this.attachmentIcon.innerHTML = '';
            this.attachmentIcon.remove();
            this.attachmentIcon = null;
        }
        if (this.dropArea) {
            this.dropArea.innerHTML = '';
            this.dropArea.remove();
            this.dropArea = null;
        }
        if (this.messageWrapper) {
            var previewOverlay = this.messageWrapper.querySelector('.e-preview-overlay');
            if (previewOverlay) {
                previewOverlay.remove();
            }
        }
        this.uploadedFiles = [];
    };
    ChatUI.prototype.destroyChatUI = function () {
        var properties = [
            'content',
            'sendIcon',
            'clearIcon',
            'editableTextarea',
            'footer',
            'indicatorWrapper',
            'messageWrapper',
            'viewWrapper',
            'chatHeader'
        ];
        for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
            var prop = properties_1[_i];
            var element = prop;
            this.removeAndNullify(this[element]);
            this[element] = null;
        }
    };
    /**
     * Scrolls to the last message in the conversation area of the Chat UI component.
     * This method allows programmatic control to ensure the chat view is scrolled to the bottom, typically used when new messages are added or to refocus on the most recent conversation.
     *
     * @returns {void}
     */
    ChatUI.prototype.scrollToBottom = function () {
        this.updateScroll(this.messageWrapper);
        this.toggleScrollIcon();
    };
    /**
     * Appends a new message to the end of the Chat UI conversation area.
     * This method adds the specified message as the latest entry in the chat:
     *
     * @function addMessage
     * @param {string | MessageModel} message - The message to be added to the conversation. Accepts either a plain text string or a `MessageModel` object.
     * - If `message` is a string, a `MessageModel` will be automatically created with the current user’s details, and the message will be appended.
     * - If `message` is an instance of `MessageModel`, it can represent a message from either the current user or another participant and will be appended directly.
     * @returns {void} No return value.
     */
    ChatUI.prototype.addMessage = function (message) {
        if (isNullOrUndefined(message)) {
            return;
        }
        var prevOnChange = this.isProtectedOnChange;
        this.isProtectedOnChange = true;
        if (typeof message === 'string') {
            var newMessageObj = {
                id: this.element.id + "-message-" + (this.messages.length + 1),
                author: this.user,
                text: message,
                timeStamp: new Date(),
                timeStampFormat: this.timeStampFormat,
                attachedFile: null
            };
            this.messages = this.messages.concat([newMessageObj]);
            this.renderNewMessage(newMessageObj, (this.messages.length - 1));
        }
        else {
            var newMessageObj = __assign$1({}, message, { id: message.id || this.element.id + "-message-" + (this.messages.length + 1), author: message.author || this.user, text: message.text || '', timeStamp: message.timeStamp || new Date(), timeStampFormat: message.timeStampFormat || this.timeStampFormat, status: message.status, mentionUsers: message.mentionUsers || [], isPinned: message.isPinned || false, replyTo: message.replyTo, isForwarded: message.isForwarded || false, attachedFile: message.attachedFile });
            this.messages = this.messages.concat([newMessageObj]);
            this.renderNewMessage(newMessageObj, (this.messages.length - 1));
        }
        // To prevent the issue where scrolling does not move to the bottom in the `messageTemplate` case on Angular and React platforms.
        this.updateScrollPosition(true, 5);
        this.isProtectedOnChange = prevOnChange;
    };
    /**
     * prepends messages to the beginning of the Chat UI conversation area.
     * This method adds the specified messages as the first entries in the chat:
     *
     * @function prependMessages
     * @param {string[] | MessageModel[]} messages - The messages to be added to the conversation. Accepts an array of plain text strings or `MessageModel` objects.
     * - If an element is a string, a `MessageModel` will be automatically created with the current user's details, and the message will be prepended.
     * - If an element is an instance of `MessageModel`, it can represent a message from either the current user or another participant and will be prepended directly.
     * @returns {void} No return value.
     */
    ChatUI.prototype.prependMessages = function (messages) {
        if (isNullOrUndefined(messages) || messages.length === 0) {
            return;
        }
        var prevOnChange = this.isProtectedOnChange;
        this.isProtectedOnChange = true;
        var isEmptyChat = this.messages.length > 0 ? false : true;
        var newMessageObjs = [];
        for (var i = 0; i < messages.length; i++) {
            var message = messages[parseInt(i.toString(), 10)];
            var newMessageObj = void 0;
            if (typeof message === 'string') {
                newMessageObj = {
                    id: this.element.id + "-message-" + (this.messages.length + i + 1),
                    author: this.user,
                    text: message,
                    timeStamp: new Date(),
                    timeStampFormat: this.timeStampFormat,
                    attachedFile: null
                };
            }
            else {
                newMessageObj = __assign$1({}, message, { id: message.id || this.element.id + "-message-" + (this.messages.length + i + 1), author: message.author || this.user, text: message.text || '', timeStamp: message.timeStamp || new Date(), timeStampFormat: message.timeStampFormat || this.timeStampFormat, status: message.status, mentionUsers: message.mentionUsers || [], isPinned: message.isPinned || false, replyTo: message.replyTo, isForwarded: message.isForwarded || false, attachedFile: message.attachedFile });
            }
            newMessageObjs.push(newMessageObj);
        }
        this.messages = newMessageObjs.concat(this.messages);
        if (isEmptyChat) {
            for (var i = 0; i < newMessageObjs.length; i++) {
                this.renderNewMessage(newMessageObjs[parseInt(i.toString(), 10)], i);
            }
        }
        else {
            for (var i = newMessageObjs.length - 1; i >= 0; i--) {
                this.renderGroup(this.messageWrapper, newMessageObjs[parseInt(i.toString(), 10)], true, i, -1, true);
            }
        }
        this.isProtectedOnChange = prevOnChange;
    };
    /**
     * Updates an existing message in the Chat UI component.
     * This method allows for modifying a message that has already been added to the conversation.
     * It requires the unique identifier of the message to be updated and the new message content as a `MessageModel`.
     *
     * @function updateMessage
     * @param {MessageModel} message - The updated message content represented as a `MessageModel`.
     * @param {string} msgId - The unique identifier of the message to be updated.
     * @returns {void} No return value.
     */
    ChatUI.prototype.updateMessage = function (message, msgId) {
        var prevOnChange = this.isProtectedOnChange;
        this.isProtectedOnChange = true;
        this.messages = this.messages.map(function (messageItem) {
            return messageItem.id === msgId ? __assign$1({}, messageItem, message) : messageItem;
        });
        this.updateMessageItem(message, msgId);
        this.isProtectedOnChange = prevOnChange;
    };
    /**
     * Scrolls to a specific message in the Chat UI component based on the provided message ID.
     * Locates the message with the specified ID and scrolls it to the view.
     *
     * @function scrollToMessage
     * @param {string} messageId - The unique identifier of the message to navigate to the corresponding message rendered in the chat UI.
     * @returns {void}.
     */
    ChatUI.prototype.scrollToMessage = function (messageId) {
        var messageElement = this.messageWrapper.querySelector("#" + messageId);
        if (!messageElement) {
            return;
        }
        messageElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };
    /**
     * Sets focus for the input textarea in the Chat UI component.
     * Ensures that user input is directed to the chat input field.
     *
     * @function focus
     * @returns {void}.
     */
    ChatUI.prototype.focus = function () {
        if (this.editableTextarea) {
            this.setFocusAtEnd(this.editableTextarea);
        }
    };
    ChatUI.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.unwireEvents();
        if (this.toolbar) {
            this.toolbar.off('render-react-toolbar-template', this.addReactToolbarPortals);
        }
        if (this.cssClass) {
            removeClass([this.element], this.cssClass.split(' '));
        }
        this.element.classList.remove('e-rtl');
        this.destroyAndNullify(this.downArrowIcon);
        this.destroyAndNullify(this.toolbar);
        this.destroyAndNullify(this.dropDownButton);
        this.destroyAndNullify(this.mentionObj);
        this.destroyChatUI();
        this.destroyAttachments();
        this.intl = null;
    };
    /**
     * Called if any of the property value is changed.
     *
     * @param  {ChatUIModel} newProp - Specifies new properties
     * @param  {ChatUIModel} oldProp - Specifies old properties
     * @returns {void}
     * @private
     */
    ChatUI.prototype.onPropertyChanged = function (newProp, oldProp) {
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'width':
                case 'height':
                    this.setDimension(this.element, this.width, this.height);
                    break;
                case 'placeholder':
                    this.updatePlaceholder(this.placeholder);
                    break;
                case 'cssClass':
                    this.updateCssClass(this.element, newProp.cssClass, oldProp.cssClass);
                    break;
                case 'enableRtl':
                    this.element.classList[this.enableRtl ? 'add' : 'remove']('e-rtl');
                    if (!isNullOrUndefined(this.toolbar)) {
                        this.toolbar.enableRtl = this.enableRtl;
                        this.toolbar.dataBind();
                    }
                    break;
                case 'showHeader':
                    this.updateHeader(this.showHeader, this.chatHeader, this.viewWrapper);
                    break;
                case 'enableCompactMode':
                    this.initializeCompactMode();
                    this.renderUpdatedMessage();
                    this.updateScrollPosition(true, 5);
                    break;
                case 'headerText':
                    this.updateHeaderText();
                    break;
                case 'headerIconCss':
                    this.updateHeaderIcon();
                    break;
                case 'messageToolbarSettings':
                case 'messages': {
                    this.renderUpdatedMessage();
                    // To prevent the issue where scrolling does not move to the bottom in the `messageTemplate` case on Angular and React platforms.
                    this.updateScrollPosition(true, 5);
                    break;
                }
                case 'user': {
                    var newUser = {
                        id: newProp.user.id ? newProp.user.id : this.user.id,
                        user: newProp.user.user ? newProp.user.user : this.user.user,
                        avatarUrl: newProp.user.avatarUrl ? newProp.user.avatarUrl : this.user.avatarUrl,
                        avatarBgColor: newProp.user.avatarBgColor ? newProp.user.avatarBgColor : this.user.avatarBgColor,
                        cssClass: newProp.user.cssClass ? newProp.user.cssClass : this.user.cssClass,
                        statusIconCss: newProp.user.statusIconCss ? newProp.user.statusIconCss : this.user.statusIconCss
                    };
                    this.user = __assign$1({}, this.user, newUser);
                    break;
                }
                case 'showTimeStamp':
                case 'timeStampFormat':
                case 'showTimeBreak':
                    if (this.messages.length > 0) {
                        this.renderUpdatedMessage();
                    }
                    break;
                case 'showFooter':
                    this.updateFooter(this.showFooter, this.footer);
                    break;
                case 'autoScrollToBottom':
                    this.handleAutoScroll();
                    break;
                case 'suggestions':
                    this.handleSuggestionUpdate();
                    break;
                case 'typingUsers':
                    this.updateTypingUsers(this.typingUsers);
                    break;
                case 'locale':
                    this.updateLocale();
                    break;
                case 'currencyCode':
                    this.refresh();
                    break;
                case 'mentionTriggerChar':
                    this.mentionObj.mentionChar = newProp.mentionTriggerChar;
                    break;
                case 'mentionUsers':
                    this.updateMentionObj();
                    break;
                case 'enableAttachments':
                    if (!this.footerTemplate) {
                        var footerIconsWrapper = this.element.querySelector('.e-footer-icons-wrapper');
                        this.updateAttachmentElement(footerIconsWrapper);
                    }
                    break;
                case 'attachmentSettings':
                    this.updateAttachmentSettings(newProp.attachmentSettings);
                    break;
            }
        }
    };
    __decorate$3([
        Property('100%')
    ], ChatUI.prototype, "width", void 0);
    __decorate$3([
        Property('100%')
    ], ChatUI.prototype, "height", void 0);
    __decorate$3([
        Complex({}, User)
    ], ChatUI.prototype, "user", void 0);
    __decorate$3([
        Property('Chat')
    ], ChatUI.prototype, "headerText", void 0);
    __decorate$3([
        Property('')
    ], ChatUI.prototype, "headerIconCss", void 0);
    __decorate$3([
        Property('Type your message…')
    ], ChatUI.prototype, "placeholder", void 0);
    __decorate$3([
        Property('')
    ], ChatUI.prototype, "cssClass", void 0);
    __decorate$3([
        Property(true)
    ], ChatUI.prototype, "showHeader", void 0);
    __decorate$3([
        Property(true)
    ], ChatUI.prototype, "showFooter", void 0);
    __decorate$3([
        Complex({ items: [] }, ToolbarSettings)
    ], ChatUI.prototype, "headerToolbar", void 0);
    __decorate$3([
        Property([])
    ], ChatUI.prototype, "suggestions", void 0);
    __decorate$3([
        Property(false)
    ], ChatUI.prototype, "showTimeBreak", void 0);
    __decorate$3([
        Collection([], Message)
    ], ChatUI.prototype, "messages", void 0);
    __decorate$3([
        Collection([], User)
    ], ChatUI.prototype, "typingUsers", void 0);
    __decorate$3([
        Property('dd/MM/yyyy hh:mm a')
    ], ChatUI.prototype, "timeStampFormat", void 0);
    __decorate$3([
        Property(true)
    ], ChatUI.prototype, "showTimeStamp", void 0);
    __decorate$3([
        Property(false)
    ], ChatUI.prototype, "autoScrollToBottom", void 0);
    __decorate$3([
        Property(false)
    ], ChatUI.prototype, "loadOnDemand", void 0);
    __decorate$3([
        Collection([], User)
    ], ChatUI.prototype, "mentionUsers", void 0);
    __decorate$3([
        Property('@')
    ], ChatUI.prototype, "mentionTriggerChar", void 0);
    __decorate$3([
        Property('')
    ], ChatUI.prototype, "suggestionTemplate", void 0);
    __decorate$3([
        Property('')
    ], ChatUI.prototype, "footerTemplate", void 0);
    __decorate$3([
        Property('')
    ], ChatUI.prototype, "emptyChatTemplate", void 0);
    __decorate$3([
        Property('')
    ], ChatUI.prototype, "messageTemplate", void 0);
    __decorate$3([
        Property('')
    ], ChatUI.prototype, "timeBreakTemplate", void 0);
    __decorate$3([
        Property('')
    ], ChatUI.prototype, "typingUsersTemplate", void 0);
    __decorate$3([
        Property(false)
    ], ChatUI.prototype, "enableCompactMode", void 0);
    __decorate$3([
        Complex({ width: '100%', items: [{ iconCss: 'e-icons e-chat-copy', tooltip: 'Copy' }, { iconCss: 'e-icons e-chat-reply', tooltip: 'Reply' }, { iconCss: 'e-icons e-chat-pin', tooltip: 'Pin' }, { iconCss: 'e-icons e-chat-trash', tooltip: 'Delete' }] }, MessageToolbarSettings)
    ], ChatUI.prototype, "messageToolbarSettings", void 0);
    __decorate$3([
        Event()
    ], ChatUI.prototype, "messageSend", void 0);
    __decorate$3([
        Event()
    ], ChatUI.prototype, "userTyping", void 0);
    __decorate$3([
        Event()
    ], ChatUI.prototype, "mentionSelect", void 0);
    __decorate$3([
        Property(false)
    ], ChatUI.prototype, "enableAttachments", void 0);
    __decorate$3([
        Complex({ saveUrl: '', removeUrl: '', maxFileSize: 30000000, allowedFileTypes: '', saveFormat: 'Blob', path: '', enableDragAndDrop: true, maximumCount: 10, previewTemplate: '', attachmentTemplate: '' }, FileAttachmentSettings)
    ], ChatUI.prototype, "attachmentSettings", void 0);
    __decorate$3([
        Event()
    ], ChatUI.prototype, "beforeAttachmentUpload", void 0);
    __decorate$3([
        Event()
    ], ChatUI.prototype, "attachmentUploadSuccess", void 0);
    __decorate$3([
        Event()
    ], ChatUI.prototype, "attachmentUploadFailure", void 0);
    __decorate$3([
        Event()
    ], ChatUI.prototype, "attachmentRemoved", void 0);
    ChatUI = __decorate$3([
        NotifyPropertyChanges
    ], ChatUI);
    return ChatUI;
}(InterActiveChatBase));

var __extends$4 = (undefined && undefined.__extends) || (function () {
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
var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Specifies the mode of inline ai assist.
 */
var ResponseMode;
(function (ResponseMode) {
    /**
     * Represents the inline response updates for the component.
     */
    ResponseMode["Inline"] = "Inline";
    /**
     * Represents a popup based response update for the component.
     */
    ResponseMode["Popup"] = "Popup";
})(ResponseMode || (ResponseMode = {}));
/**
 * Represents a model for a prompt and its associated response in the Inline AI Assist component.
 */
var PromptResponse = /** @__PURE__ @class */ (function (_super) {
    __extends$4(PromptResponse, _super);
    function PromptResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate$4([
        Property('')
    ], PromptResponse.prototype, "prompt", void 0);
    __decorate$4([
        Property('')
    ], PromptResponse.prototype, "response", void 0);
    return PromptResponse;
}(ChildProperty));
/**
 * Represents a command item model in the inline AI assist component.
 */
var CommandItem = /** @__PURE__ @class */ (function (_super) {
    __extends$4(CommandItem, _super);
    function CommandItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate$4([
        Property('')
    ], CommandItem.prototype, "id", void 0);
    __decorate$4([
        Property(false)
    ], CommandItem.prototype, "disabled", void 0);
    __decorate$4([
        Property('')
    ], CommandItem.prototype, "iconCss", void 0);
    __decorate$4([
        Property('')
    ], CommandItem.prototype, "label", void 0);
    __decorate$4([
        Property('')
    ], CommandItem.prototype, "prompt", void 0);
    __decorate$4([
        Property('')
    ], CommandItem.prototype, "groupBy", void 0);
    __decorate$4([
        Property('')
    ], CommandItem.prototype, "tooltip", void 0);
    return CommandItem;
}(ChildProperty));
/**
 * Represents a response item model in the inline AI assist component.
 */
var ResponseItem = /** @__PURE__ @class */ (function (_super) {
    __extends$4(ResponseItem, _super);
    function ResponseItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate$4([
        Property('')
    ], ResponseItem.prototype, "id", void 0);
    __decorate$4([
        Property(false)
    ], ResponseItem.prototype, "disabled", void 0);
    __decorate$4([
        Property('')
    ], ResponseItem.prototype, "iconCss", void 0);
    __decorate$4([
        Property('')
    ], ResponseItem.prototype, "label", void 0);
    __decorate$4([
        Property('')
    ], ResponseItem.prototype, "groupBy", void 0);
    __decorate$4([
        Property('')
    ], ResponseItem.prototype, "tooltip", void 0);
    return ResponseItem;
}(ChildProperty));
/**
 * Represents the settings for the command options in the InlineAIAssist component.
 */
var CommandSettings = /** @__PURE__ @class */ (function (_super) {
    __extends$4(CommandSettings, _super);
    function CommandSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate$4([
        Event()
    ], CommandSettings.prototype, "itemSelect", void 0);
    __decorate$4([
        Collection([], CommandItem)
    ], CommandSettings.prototype, "commands", void 0);
    __decorate$4([
        Property('')
    ], CommandSettings.prototype, "popupHeight", void 0);
    __decorate$4([
        Property('')
    ], CommandSettings.prototype, "popupWidth", void 0);
    return CommandSettings;
}(ChildProperty));
/**
 * Represents the settings for the response toolbar in the InlineAIAssist component.
 */
var ResponseSettings = /** @__PURE__ @class */ (function (_super) {
    __extends$4(ResponseSettings, _super);
    function ResponseSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate$4([
        Event()
    ], ResponseSettings.prototype, "itemSelect", void 0);
    __decorate$4([
        Collection([], ResponseItem)
    ], ResponseSettings.prototype, "items", void 0);
    return ResponseSettings;
}(ChildProperty));
/**
 * Represents the settings for the response toolbar in the InlineAIAssist component.
 */
var InlineToolbarSettings = /** @__PURE__ @class */ (function (_super) {
    __extends$4(InlineToolbarSettings, _super);
    function InlineToolbarSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate$4([
        Property('Inline')
    ], InlineToolbarSettings.prototype, "toolbarPosition", void 0);
    __decorate$4([
        Collection([], ToolbarItem)
    ], InlineToolbarSettings.prototype, "items", void 0);
    __decorate$4([
        Event()
    ], InlineToolbarSettings.prototype, "itemClick", void 0);
    return InlineToolbarSettings;
}(ChildProperty));
var InlineAIAssist = /** @__PURE__ @class */ (function (_super) {
    __extends$4(InlineAIAssist, _super);
    /**
     * Constructor for creating the component
     *
     * @param {InlineAIAssistModel} options - Specifies the InlineAIAssistModel.
     * @param {string | HTMLElement} element - Specifies the element to render as component.
     * @private
     */
    function InlineAIAssist(options, element) {
        var _this = _super.call(this, options, element) || this;
        _this.sendToolbarItem = null;
        _this.isResponseRequested = false;
        _this.responseContainerCreated = false;
        _this.isStopRequested = false;
        _this.commandOptionsData = [];
        _this.responseOptionsData = [];
        _this.typingIndicatorEl = null;
        return _this;
    }
    /**
     * Initialize the event handler
     *
     * @private
     * @returns {void}
     */
    InlineAIAssist.prototype.preRender = function () {
        if (!this.element.id) {
            this.element.id = getUniqueID('e-' + this.getModuleName());
        }
    };
    InlineAIAssist.prototype.getDirective = function () {
        return 'EJS-INLINEAIASSIST';
    };
    /**
     * To get component name.
     *
     * @returns {string} - It returns the current module name.
     * @private
     */
    InlineAIAssist.prototype.getModuleName = function () {
        return 'inlineaiassist';
    };
    /**
     * Get the properties to be maintained in the persisted state.
     *
     * @private
     * @returns {string} - It returns the persisted data.
     */
    InlineAIAssist.prototype.getPersistData = function () {
        return this.addOnPersist([]);
    };
    /**
     * Renders the component
     *
     * @returns {void}
     */
    InlineAIAssist.prototype.render = function () {
        this.initializeLocale();
        // Ensure target element is resolved before creating the popup
        this.resolveTargetElement();
        this.resolveRelateToElement();
        this.renderPopup();
        this.addRtlClass(this.element, this.enableRtl);
        this.wireEvents();
    };
    InlineAIAssist.prototype.initializeLocale = function () {
        this.l10n = new L10n('inline-ai-assist', {
            stopResponseText: 'Stop Responding',
            send: 'Send',
            thinkingIndicator: 'Thinking',
            editingIndicator: 'Editing'
        }, this.locale);
        this.l10n.setLocale(this.locale);
    };
    InlineAIAssist.prototype.renderPopup = function () {
        var _this = this;
        this.element.classList.add('e-inline-ai-assist');
        if (this.cssClass) {
            this.element.classList.add(this.cssClass);
        }
        this.contentWrapper = this.createElement('div', { className: 'e-inline-assist-container' });
        var content = this.createElement('div', { className: 'e-content' });
        this.contentWrapper.appendChild(content);
        this.footer = this.createElement('div', { className: 'e-footer' });
        this.updateFooterClass(this.editorTemplate);
        this.renderInlineFooter();
        this.contentWrapper.appendChild(this.footer);
        this.element.appendChild(this.contentWrapper);
        if (this.targetEl && this.targetEl !== document.body) {
            this.targetEl.appendChild(this.element);
        }
        this.popupObj = new Popup(this.element, {
            height: this.popupHeight ? formatUnit(this.popupHeight) : 'auto',
            width: this.popupWidth ? formatUnit(this.popupWidth) : '400px',
            relateTo: this.relateToEl,
            position: { X: 'left', Y: 'bottom' },
            collision: { X: 'flip', Y: 'flip' },
            targetType: 'relative',
            close: function () {
                _this.trigger('close', {});
                _this.onPopupClose();
            },
            open: function () {
                _this.trigger('open', {});
                _this.attachPopupEventHandlers();
            },
            zIndex: this.zIndex
        });
        this.popupObj.hide();
    };
    InlineAIAssist.prototype.showPopupWithData = function (dataSource, width, height) {
        if (width === void 0) { width = '200px'; }
        if (height === void 0) { height = '400px'; }
        this.mentionPopupObj.dataSource = dataSource;
        this.mentionPopupObj.popupWidth = width;
        this.mentionPopupObj.popupHeight = height;
        this.mentionPopupObj.fields = this.getMentionFields(dataSource);
        this.mentionPopupObj.dataBind();
        this.mentionPopupObj.showPopup();
    };
    InlineAIAssist.prototype.showResponsePopup = function () {
        if (this.popupObj.element.classList.contains('e-popup-open')) {
            this.showPopupWithData(this.responseOptionsData, 'auto', '400px');
        }
    };
    InlineAIAssist.prototype.showCommandMenuPopup = function () {
        this.showPopupWithData(this.commandOptionsData, this.commandSettings.popupWidth || '200px', this.commandSettings.popupHeight || '400px');
    };
    InlineAIAssist.prototype.setCommandPopupData = function () {
        this.commandOptionsData = this.commandSettings.commands.map(function (cmd) { return ({
            label: cmd.label,
            iconCss: cmd.iconCss,
            id: cmd.id,
            disabled: cmd.disabled,
            groupBy: cmd.groupBy,
            tooltip: cmd.tooltip
        }); });
    };
    InlineAIAssist.prototype.setResponsePopupData = function () {
        var acceptItem = {
            label: 'Accept',
            iconCss: 'e-icons e-inline-accept'
        };
        var rejectItem = {
            label: 'Discard',
            iconCss: 'e-icons e-inline-discard'
        };
        var mentionDataSource = [acceptItem, rejectItem];
        if (this.responseSettings.items && this.responseSettings.items.length > 0) {
            var customItems = this.responseSettings.items.map(function (item) { return ({
                label: item.label,
                iconCss: item.iconCss,
                id: item.id,
                groupBy: item.groupBy,
                disabled: item.disabled,
                tooltip: item.tooltip
            }); });
            mentionDataSource = mentionDataSource.concat(customItems);
        }
        var prevOnChange = this.isProtectedOnChange;
        this.isProtectedOnChange = true;
        this.responseSettings.items = mentionDataSource;
        this.isProtectedOnChange = prevOnChange;
        this.responseOptionsData = mentionDataSource;
    };
    InlineAIAssist.prototype.getMentionFields = function (dataSource) {
        var hasGroupBy = dataSource && dataSource.length > 0 && dataSource.some(function (item) { return item.groupBy; });
        var fields = { text: 'label', iconCss: 'iconCss', disabled: 'disabled' };
        if (hasGroupBy) {
            fields.groupBy = 'groupBy';
        }
        return fields;
    };
    InlineAIAssist.prototype.renderMentionPopup = function () {
        var _this = this;
        var mentionEl = this.createElement('div', { attrs: { class: 'e-mention-container' } });
        this.element.appendChild(mentionEl);
        if (this.commandSettings.commands) {
            this.setCommandPopupData();
        }
        this.setResponsePopupData();
        var mentionDataSource = this.responseOptionsData;
        if (this.commandSettings.commands.length > 0) {
            mentionDataSource = this.commandOptionsData;
        }
        var mentionFields = this.getMentionFields(mentionDataSource);
        this.mentionPopupObj = new Mention({
            mentionChar: '',
            target: this.editableTextarea,
            dataSource: mentionDataSource,
            fields: mentionFields,
            popupWidth: this.commandSettings.commands.length > 0 ? this.commandSettings.popupWidth : '200px',
            popupHeight: this.commandSettings.commands.length > 0 ? this.commandSettings.popupHeight : '400px',
            select: function (args) {
                args.cancel = true;
                _this.onMentionCommandSelect(args);
            },
            locale: this.locale,
            opened: function () {
                _this.positionMentionPopup();
            }
        }, mentionEl);
    };
    InlineAIAssist.prototype.positionMentionPopup = function () {
        if (this.mentionPopupObj) {
            var mainPopupElement = this.popupObj.element;
            var mainRect = mainPopupElement.getBoundingClientRect();
            var popupObj = this.mentionPopupObj.popupObj;
            if (popupObj && this.element) {
                popupObj.actionOnScroll = 'reposition';
                popupObj.offsetX = 0;
                popupObj.offsetY = mainRect.height;
                popupObj.position = { X: 'left', Y: 'top' };
                popupObj.relateTo = this.element;
                popupObj.targetType = 'relative';
                popupObj.collision = { X: 'flip', Y: 'flip' };
                popupObj.refreshPosition();
                this.mentionPopupObj.element.style.display = 'block';
                this.mentionPopupObj.element.style.display = '';
            }
        }
    };
    InlineAIAssist.prototype.onMentionCommandSelect = function (args) {
        var selectedItem = args.itemData;
        var matchedCommand = this.commandSettings.commands.find(function (cmd) { return cmd.label === selectedItem.label; });
        if (matchedCommand) {
            var commandItemSelectEventArgs = {
                command: selectedItem,
                event: args.e,
                cancel: false,
                element: args.item
            };
            if (this.commandSettings.itemSelect) {
                this.commandSettings.itemSelect.call(this, commandItemSelectEventArgs);
            }
            if (!commandItemSelectEventArgs.cancel && matchedCommand.prompt) {
                this.executePrompt(matchedCommand.prompt);
            }
        }
        else {
            var responseItemSelectEventArgs = {
                command: selectedItem,
                event: args.e,
                cancel: false,
                element: args.item
            };
            if (this.responseSettings.itemSelect) {
                this.responseSettings.itemSelect.call(this, responseItemSelectEventArgs);
            }
        }
        this.mentionPopupObj.hidePopup();
    };
    InlineAIAssist.prototype.resolveTargetElement = function () {
        this.targetEl = typeof this.target === 'string'
            ? document.querySelector(this.target)
            : this.target instanceof HTMLElement ? this.target : document.body;
    };
    InlineAIAssist.prototype.resolveRelateToElement = function () {
        if (this.relateTo === '' || isNullOrUndefined(this.relateTo)) {
            return;
        }
        this.relateToEl = (typeof this.relateTo === 'string'
            ? document.querySelector(this.relateTo)
            : this.relateTo);
    };
    InlineAIAssist.prototype.onPopupClose = function () {
        this.clearResponses();
        this.isResponseRequested = false;
        this.toggleStopRespondingButton(false);
        if (this.editableTextarea) {
            this.editableTextarea.setAttribute('contenteditable', 'true');
        }
        this.detachPopupEventHandlers();
        if (this.mentionPopupObj && this.mentionPopupObj.element) {
            this.mentionPopupObj.hidePopup();
        }
    };
    InlineAIAssist.prototype.renderInlineFooter = function () {
        var textareaAndIconsWrapper = this.createElement('div', { attrs: { class: 'e-textarea-icons-wrapper' } });
        if (this.editorTemplate) {
            this.updateContent(this.editorTemplate, this.footer, {}, 'editorTemplate');
        }
        else {
            this.editableTextarea = this.createElement('div', {
                attrs: {
                    class: 'e-assist-textarea',
                    contenteditable: 'true',
                    placeholder: this.placeholder,
                    role: 'textbox',
                    'aria-multiline': 'true'
                },
                innerHTML: this.prompt
            });
            var hiddenTextarea = this.createElement('textarea', {
                attrs: {
                    class: 'e-hidden-textarea',
                    name: 'userPrompt',
                    value: this.prompt
                }
            });
            textareaAndIconsWrapper.appendChild(this.editableTextarea);
            textareaAndIconsWrapper.appendChild(hiddenTextarea);
            var footerIconsWrapper = this.createElement('div', { attrs: { class: 'e-footer-icons-wrapper' } });
            this.renderFooterToolbar(footerIconsWrapper);
            textareaAndIconsWrapper.appendChild(footerIconsWrapper);
            this.footer.appendChild(textareaAndIconsWrapper);
            this.footer.classList.add('e-footer-focus-wave-effect');
            this.refreshTextareaUI();
            this.pushToUndoStack(this.prompt);
            EventHandler.add(this.editableTextarea, 'keyup', this.keyUpHandler, this);
            this.editableTextarea.addEventListener('keydown', this.keyDownHandler.bind(this), true);
            this.renderMentionPopup();
        }
    };
    InlineAIAssist.prototype.keyDownHandler = function (e) {
        if (e.shiftKey && e.key === 'Enter') {
            e.stopPropagation();
            e.stopImmediatePropagation();
        }
    };
    InlineAIAssist.prototype.updateEditorTemplate = function () {
        this.footer.innerHTML = '';
        this.updateFooterClass(this.editorTemplate);
        this.renderInlineFooter();
    };
    InlineAIAssist.prototype.renderFooterToolbar = function (container) {
        var _this = this;
        var toolbarItems = [];
        var customItems = this.inlineToolbarSettings.items || [];
        for (var _i = 0, customItems_1 = customItems; _i < customItems_1.length; _i++) {
            var customItem = customItems_1[_i];
            var mappedItem = {
                type: customItem.type,
                template: customItem.template,
                disabled: customItem.disabled,
                cssClass: customItem.cssClass,
                visible: customItem.visible,
                tooltipText: customItem.tooltip,
                prefixIcon: customItem.iconCss,
                text: customItem.text,
                align: customItem.align,
                tabIndex: customItem.tabIndex
            };
            toolbarItems.push(mappedItem);
        }
        if (!this.isDuplicatedItem('e-icons e-inline-send', toolbarItems)) {
            this.sendToolbarItem = {
                prefixIcon: 'e-icons e-inline-send',
                align: 'Right'
            };
            toolbarItems.push(this.sendToolbarItem);
        }
        var prevOnChange = this.isProtectedOnChange;
        this.isProtectedOnChange = true;
        var footerToolbarItems = toolbarItems.map(function (item) { return ({
            type: item.type,
            text: item.text,
            iconCss: item.prefixIcon,
            cssClass: item.cssClass,
            tooltip: item.tooltipText,
            template: item.template,
            disabled: item.disabled,
            visible: item.visible,
            align: item.align,
            tabIndex: item.tabIndex
        }); });
        this.inlineToolbarSettings.items = footerToolbarItems;
        this.isProtectedOnChange = prevOnChange;
        this.footerToolbarEle = new Toolbar({
            items: toolbarItems,
            enableRtl: this.enableRtl,
            width: '100%',
            clicked: function (args) {
                var eventItemArgs = {
                    type: args.item.type,
                    text: args.item.text,
                    iconCss: args.item.prefixIcon,
                    cssClass: args.item.cssClass,
                    tooltip: args.item.tooltipText,
                    template: args.item.template,
                    disabled: args.item.disabled,
                    visible: args.item.visible,
                    align: args.item.align,
                    tabIndex: args.item.tabIndex
                };
                var eventArgs = {
                    item: eventItemArgs,
                    event: args.originalEvent,
                    cancel: false
                };
                if (_this.inlineToolbarSettings.itemClick) {
                    _this.inlineToolbarSettings.itemClick.call(_this, eventArgs);
                }
                if (!eventArgs.cancel) {
                    switch (args.item.prefixIcon) {
                        case 'e-icons e-inline-send':
                            if (!_this.isResponseRequested && !args.item.disabled) {
                                _this.onSendIconClick();
                            }
                            break;
                        case 'e-icons e-inline-stop':
                            if (_this.isResponseRequested) {
                                _this.respondingStopper();
                            }
                            break;
                    }
                }
            }
        });
        var toolbarContainer = this.createElement('div', { attrs: { class: 'e-footer-toolbar-wrapper' } });
        this.footerToolbarEle.appendTo(toolbarContainer);
        this.footerToolbarEle.element.setAttribute('aria-label', 'assist-footer-toolbar');
        container.appendChild(toolbarContainer);
    };
    InlineAIAssist.prototype.isDuplicatedItem = function (iconCss, toolbarItems) {
        for (var _i = 0, toolbarItems_1 = toolbarItems; _i < toolbarItems_1.length; _i++) {
            var item = toolbarItems_1[_i];
            if ((item.prefixIcon || '') === iconCss) {
                switch (iconCss) {
                    case 'e-icons e-inline-send':
                        this.sendToolbarItem = item;
                        break;
                }
                return true;
            }
        }
        return false;
    };
    InlineAIAssist.prototype.keyUpHandler = function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
    };
    InlineAIAssist.prototype.wireEvents = function () {
        this.wireFooterEvents(this.editorTemplate);
        // Ensure editableTextarea and footer are available in the DOM
        if (this.editableTextarea && this.footer) {
            var footerIconsWrapper = this.footer.querySelector('.e-footer-icons-wrapper');
            if (footerIconsWrapper) {
                EventHandler.add(footerIconsWrapper, 'pointerdown', this.onFooterIconsPointerDown, this);
                // Optional fallback for environments without Pointer Events
                EventHandler.add(footerIconsWrapper, 'click', this.onFooterIconsClick, this);
                EventHandler.add(footerIconsWrapper, 'focusout', this.onFooterIconsFocusOut, this);
            }
        }
    };
    InlineAIAssist.prototype.unWireEvents = function () {
        this.unWireFooterEvents(this.editorTemplate);
        if (this.editableTextarea) {
            EventHandler.remove(this.editableTextarea, 'keyup', this.keyUpHandler);
            this.editableTextarea.removeEventListener('keydown', this.keyDownHandler.bind(this), true);
            var footerIconsWrapper = this.footer.querySelector('.e-footer-icons-wrapper');
            if (footerIconsWrapper) {
                EventHandler.remove(footerIconsWrapper, 'pointerdown', this.onFooterIconsPointerDown);
                EventHandler.remove(footerIconsWrapper, 'click', this.onFooterIconsClick);
                EventHandler.remove(footerIconsWrapper, 'focusout', this.onFooterIconsFocusOut);
            }
        }
    };
    InlineAIAssist.prototype.attachPopupEventHandlers = function () {
        EventHandler.add(document, 'keydown', this.onPopupKeyDown, this);
        EventHandler.add(document, 'mousedown', this.onPopupOutsideClick, this);
    };
    InlineAIAssist.prototype.detachPopupEventHandlers = function () {
        EventHandler.remove(document, 'keydown', this.onPopupKeyDown);
        EventHandler.remove(document, 'mousedown', this.onPopupOutsideClick);
    };
    InlineAIAssist.prototype.onPopupKeyDown = function (e) {
        if (e.key === 'Escape' && this.popupObj && this.popupObj.element.offsetParent !== null) {
            e.preventDefault();
            this.hidePopup();
        }
    };
    InlineAIAssist.prototype.onPopupOutsideClick = function (e) {
        e.stopImmediatePropagation();
        if (!this.popupObj || this.popupObj.element.offsetParent === null) {
            return;
        }
        var target = e.target;
        var popupElement = this.popupObj.element;
        if (this.mentionPopupObj && this.mentionPopupObj.element) {
            var mentionPopupElement = this.mentionPopupObj.element;
            if (mentionPopupElement.contains(target)) {
                return;
            }
        }
        if (!popupElement.contains(target)) {
            this.hidePopup();
        }
    };
    InlineAIAssist.prototype.handleInput = function (event) {
        var textareaEle = event.target;
        var isEmpty = textareaEle.innerHTML === '<br>';
        if (isEmpty) {
            this.clearBreakTags(textareaEle);
        }
        var textContent = textareaEle.innerHTML;
        var prevOnChange = this.isProtectedOnChange;
        this.isProtectedOnChange = true;
        this.prompt = SanitizeHtmlHelper.sanitize(textContent);
        this.isProtectedOnChange = prevOnChange;
        this.refreshTextareaUI();
        this.scheduleUndoPush();
        this.redoStack = [];
        if (this.prompt && this.prompt.trim().length > 0) {
            this.hideCommandPopup();
        }
        else {
            if (this.commandSettings.commands && this.commandSettings.commands.length > 0 && !this.hasResponse) {
                this.showCommandMenuPopup();
            }
        }
    };
    InlineAIAssist.prototype.onFocusEditableTextarea = function () {
        if (this.footer) {
            this.footer.classList.add('e-footer-focused');
        }
    };
    InlineAIAssist.prototype.onBlurEditableTextarea = function () {
        if (this.footer) {
            this.footer.classList.remove('e-footer-focused');
        }
    };
    InlineAIAssist.prototype.showTypingIndicator = function (text) {
        if (!this.editableTextarea) {
            return;
        }
        this.editableTextarea.setAttribute('contenteditable', 'false');
        this.editableTextarea.classList.add('e-response-indicator-active');
        if (!this.typingIndicatorEl) {
            this.typingIndicatorEl = this.createElement('span', { className: 'e-assist-response-indicator' });
        }
        this.typingIndicatorEl.innerHTML =
            '<span class="e-assist-indicator-text">' + text + '</span>' +
                '<span class="e-assist-indicator"></span>' +
                '<span class="e-assist-indicator"></span>' +
                '<span class="e-assist-indicator"></span>';
        this.editableTextarea.innerHTML = '';
        this.editableTextarea.appendChild(this.typingIndicatorEl);
    };
    InlineAIAssist.prototype.hideTypingIndicator = function () {
        if (!this.editableTextarea) {
            return;
        }
        this.editableTextarea.setAttribute('contenteditable', 'true');
        this.editableTextarea.classList.remove('e-response-indicator-active');
        if (this.typingIndicatorEl && this.typingIndicatorEl.parentElement === this.editableTextarea) {
            this.editableTextarea.removeChild(this.typingIndicatorEl);
        }
        this.editableTextarea.innerHTML = '';
    };
    InlineAIAssist.prototype.onSendIconClick = function () {
        if (this.isResponseRequested || !this.prompt.trim()) {
            return;
        }
        this.isResponseRequested = true;
        this.isStopRequested = false;
        this.hasResponse = false;
        var prevOnChange = this.isProtectedOnChange;
        this.clearResponses();
        this.toggleStopRespondingButton(true);
        if (this.responseMode.toLowerCase() === 'inline') {
            this.showTypingIndicator(this.l10n.getConstant('thinkingIndicator'));
        }
        else {
            this.responseContainerCreated = false;
            this.createResponseContainer();
            this.renderSkeleton();
            if (this.responseContainer && this.skeletonContainer) {
                this.responseContainer.appendChild(this.skeletonContainer);
            }
        }
        var eventArgs = {
            cancel: false,
            prompt: this.prompt
        };
        if (!this.editorTemplate) {
            this.isProtectedOnChange = true;
            if (this.responseMode.toLowerCase() !== 'inline') {
                this.editableTextarea.innerText = '';
            }
            this.isProtectedOnChange = prevOnChange;
            this.pushToUndoStack('');
            this.refreshTextareaUI();
        }
        this.trigger('promptRequest', eventArgs);
    };
    InlineAIAssist.prototype.respondingStopper = function () {
        this.isResponseRequested = false;
        this.isStopRequested = true;
        var hasGeneratedResponse = false;
        if (this.responseMode.toLowerCase() === 'inline') {
            this.hideTypingIndicator();
            hasGeneratedResponse = this.hasResponse;
        }
        else {
            this.removeSkeleton();
            var responseTextElement = this.element.querySelector('.e-response-text');
            if (responseTextElement && responseTextElement.innerText && responseTextElement.innerText.trim().length > 0) {
                hasGeneratedResponse = true;
            }
        }
        this.toggleStopRespondingButton(false);
        if (hasGeneratedResponse) {
            this.showResponsePopup();
        }
    };
    InlineAIAssist.prototype.createResponseContainer = function () {
        if (!this.responseContainerCreated) {
            this.responseContainer = this.createElement('div', { className: "e-output-container " + (this.responseTemplate ? 'e-response-item-template' : '') });
            var responseText = this.createElement('div', { className: 'e-response-text' });
            this.responseContainer.appendChild(responseText);
            var content = this.element.querySelector('.e-content');
            if (content) {
                content.appendChild(this.responseContainer);
            }
            this.responseContainerCreated = true;
        }
    };
    InlineAIAssist.prototype.renderSkeleton = function () {
        this.skeletonContainer = this.createElement('div', { className: 'e-output-container' });
        var outputViewWrapper = this.createElement('div', { className: 'e-output', styles: 'width: 70%;' });
        var skeletonIconEle = this.createElement('span', { className: 'e-output-icon e-skeleton e-skeleton-text e-shimmer-wave' });
        var skeletonBodyEle = this.createElement('div', { className: 'e-loading-body' });
        var _a = [
            this.createElement('div', { className: 'e-skeleton e-skeleton-text e-shimmer-wave', styles: 'width: 100%; height: 15px;' }),
            this.createElement('div', { className: 'e-skeleton e-skeleton-text e-shimmer-wave', styles: 'width: 75%; height: 15px;' }),
            this.createElement('div', { className: 'e-skeleton e-skeleton-text e-shimmer-wave', styles: 'width: 50%; height: 15px;' })
        ], skeletonLine1 = _a[0], skeletonLine2 = _a[1], skeletonLine3 = _a[2];
        skeletonBodyEle.append(skeletonLine1, skeletonLine2, skeletonLine3);
        outputViewWrapper.append(skeletonBodyEle);
        this.skeletonContainer.append(skeletonIconEle, outputViewWrapper);
    };
    InlineAIAssist.prototype.removeSkeleton = function () {
        if (this.responseContainer && this.responseContainer.querySelector('.e-skeleton')) {
            this.skeletonContainer.remove();
        }
    };
    InlineAIAssist.prototype.applyPromptChange = function (newState, oldState, event) {
        var prevOnChange = this.isProtectedOnChange;
        this.isProtectedOnChange = true;
        this.prompt = this.editableTextarea.innerHTML = newState.content;
        this.isProtectedOnChange = prevOnChange;
        this.refreshTextareaUI();
        this.setCursorPosition(newState.selectionStart, newState.selectionEnd);
    };
    InlineAIAssist.prototype.refreshTextareaUI = function () {
        this.updateHiddenTextarea(this.prompt);
        this.checkAndActivateSendIcon();
        this.updateFooterElementClass();
        this.updateFooterType(this.inlineToolbarSettings.toolbarPosition);
    };
    InlineAIAssist.prototype.checkAndActivateSendIcon = function () {
        if (!this.footerToolbarEle) {
            return;
        }
        var length = this.editableTextarea.innerText.length;
        if (this.sendToolbarItem && this.sendToolbarItem.prefixIcon === 'e-icons e-inline-send') {
            var sendItem = this.footerToolbarEle.element.querySelector('.e-inline-send');
            if (sendItem) {
                if (length > 0 && !this.isResponseRequested) {
                    removeClass([sendItem], 'disabled');
                    sendItem.setAttribute('title', this.l10n.getConstant('send'));
                }
                else {
                    addClass([sendItem], 'disabled');
                }
            }
        }
    };
    InlineAIAssist.prototype.toggleStopRespondingButton = function (show) {
        var sendIconClass = 'e-inline-send';
        var stopIconClass = 'e-inline-stop';
        var stopTooltip = this.l10n.getConstant('stopResponseText');
        if (!this.editorTemplate) {
            var currentIconClass_1 = show ? sendIconClass : stopIconClass;
            var newIconClass = show ? stopIconClass : sendIconClass;
            var currentItem = this.footerToolbarEle.items.find(function (item) { return item.prefixIcon === "e-icons " + currentIconClass_1; });
            var itemIndex = this.footerToolbarEle.items.indexOf(currentItem);
            var currentToolbarItemElement = this.footerToolbarEle.element.querySelector(".e-tbar-btn ." + currentIconClass_1) ?
                this.footerToolbarEle.element.querySelector(".e-tbar-btn ." + currentIconClass_1).closest('.e-toolbar-item') : null;
            if (itemIndex !== -1 && currentItem && currentToolbarItemElement) {
                var newItem = {
                    prefixIcon: "e-icons " + newIconClass,
                    align: 'Right',
                    tooltipText: show ? stopTooltip : undefined
                };
                this.footerToolbarEle.addItems([newItem], itemIndex);
                this.footerToolbarEle.removeItems(currentToolbarItemElement);
            }
            this.refreshTextareaUI();
        }
        else {
            var currentIcon = this.footer.querySelector("." + (show ? sendIconClass : stopIconClass));
            if (currentIcon) {
                currentIcon.classList.replace(show ? sendIconClass : stopIconClass, show ? stopIconClass : sendIconClass);
                if (show) {
                    currentIcon.title = stopTooltip;
                    EventHandler.add(currentIcon, 'click', this.respondingStopper, this);
                }
                else {
                    currentIcon.removeAttribute('title');
                    EventHandler.remove(currentIcon, 'click', this.respondingStopper);
                }
            }
        }
    };
    InlineAIAssist.prototype.updateFooterToolbar = function () {
        var footerIconsWrapper = this.footer.querySelector('.e-footer-icons-wrapper');
        if (footerIconsWrapper) {
            footerIconsWrapper.innerHTML = '';
            this.footerToolbarEle = null;
            this.sendToolbarItem = null;
            this.renderFooterToolbar(footerIconsWrapper);
            this.refreshTextareaUI();
        }
    };
    InlineAIAssist.prototype.keyHandler = function (e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            this.pushToUndoStack(this.editableTextarea.innerText);
            e.preventDefault();
            if (!this.isResponseRequested) {
                this.onSendIconClick();
            }
        }
        else {
            this.handleUndoRedo(e);
        }
    };
    InlineAIAssist.prototype.footerKeyHandler = function (e) {
        e.stopPropagation();
        var targetElement = e.target;
        if (targetElement.classList.contains('e-tbar-btn')) {
            return;
        }
        else if (e.key === 'Escape') {
            this.onPopupKeyDown(e);
            return;
        }
        this.keyHandler(e);
    };
    /**
     * Appends or sets the generated response content in the component.
     * Use this method to manually inject a response from cache, non-streaming APIs, or custom logic.
     *
     * @method addResponse
     * @param {string} response - The response content (plain text or Markdown) to render.
     * @param {boolean} isFinalUpdate - Indicates whether this response is the final one, to hide the stop response button.
     * @returns {void}
     */
    InlineAIAssist.prototype.addResponse = function (response, isFinalUpdate) {
        if (isFinalUpdate === void 0) { isFinalUpdate = true; }
        var prevOnChange = this.isProtectedOnChange;
        this.isProtectedOnChange = true;
        if (this.isStopRequested) {
            this.isStopRequested = false;
            this.isResponseRequested = false;
            if (this.responseMode.toLowerCase() === 'inline') {
                this.hideTypingIndicator();
                this.toggleStopRespondingButton(false);
            }
            return;
        }
        var htmlResponse = MarkdownConverter.toHtml(response);
        this.prompts = this.prompts.concat([{ prompt: this.prompt, response: htmlResponse }]);
        this.prompt = '';
        this.hasResponse = true;
        if (this.responseMode.toLowerCase() === 'inline') {
            if (isFinalUpdate) {
                this.hideTypingIndicator();
                this.isResponseRequested = false;
                this.toggleStopRespondingButton(false);
                this.showResponsePopup();
            }
            else {
                if (!this.typingIndicatorEl) {
                    this.showTypingIndicator(this.l10n.getConstant('editingIndicator'));
                }
                else {
                    var indicatorTextElement = this.typingIndicatorEl.querySelector('.e-assist-indicator-text');
                    indicatorTextElement.innerHTML = this.l10n.getConstant('editingIndicator');
                }
            }
        }
        else {
            if (!this.responseContainerCreated) {
                this.responseContainerCreated = false;
                this.createResponseContainer();
            }
            if (this.enableStreaming && !this.responseTemplate) {
                this.streamResponse(htmlResponse);
                return;
            }
            else {
                if (this.responseTemplate) {
                    this.renderResponseWithTemplate(response);
                }
                else {
                    this.removeSkeleton();
                    var responseItem = this.element.querySelector('.e-response-text');
                    if (!responseItem) {
                        return;
                    }
                    responseItem.innerHTML = htmlResponse;
                }
                if (isFinalUpdate) {
                    this.isResponseRequested = false;
                    this.toggleStopRespondingButton(false);
                    this.showResponsePopup();
                }
            }
        }
        this.isProtectedOnChange = prevOnChange;
    };
    InlineAIAssist.prototype.streamResponse = function (response) {
        var _this = this;
        var prevOnChange = this.isProtectedOnChange;
        this.isProtectedOnChange = true;
        var i = 0;
        var words = response.split(' ');
        var wordCount = words.length;
        var lastResponse = '';
        var responseItem = this.element.querySelector('.e-response-text');
        var streamingResponse = function () {
            if (_this.isStopRequested) {
                return;
            }
            lastResponse += (i === 0 ? '' : ' ') + words[parseInt(i.toString(), 10)];
            i++;
            _this.removeSkeleton();
            if (responseItem) {
                responseItem.innerHTML = lastResponse;
            }
            if (i < wordCount) {
                setTimeout(function () {
                    streamingResponse();
                }, 15);
            }
            else {
                var isFinalUpdate = lastResponse.length === response.length;
                if (isFinalUpdate) {
                    _this.isResponseRequested = false;
                    _this.toggleStopRespondingButton(false);
                    _this.showResponsePopup();
                }
                _this.isProtectedOnChange = prevOnChange;
            }
        };
        streamingResponse();
    };
    /**
     * Executes the specified prompt as if the user typed and submitted it.
     * TUse this to run predefined commands, slash-menu actions, or external triggers.
     *
     * @method executePrompt
     * @param {string} prompt - The prompt text to execute; dispatched to the AI backend or via the promptRequest event.
     * @returns {void}
     */
    InlineAIAssist.prototype.executePrompt = function (prompt) {
        if (!isNullOrUndefined(prompt) && prompt.trim().length > 0) {
            var prevOnChange = this.isProtectedOnChange;
            this.isProtectedOnChange = true;
            this.prompt = prompt;
            this.isProtectedOnChange = prevOnChange;
            this.onSendIconClick();
        }
    };
    /**
     * Opens the popup UI and optionally positions it at the given screen coordinates.
     * When not provided, default positioning (caret/selection/target) is applied.
     *
     * @method showPopup
     * @param {number} [x] - X coordinate in pixels or CSS units (e.g., 300, '300px', '50%').
     * @param {number} [y] - Y coordinate in pixels or CSS units (e.g., 200, '200px', '50%').
     * @returns {void}
     */
    InlineAIAssist.prototype.showPopup = function (x, y) {
        if (this.popupObj) {
            // Determine positioning element: use target if provided, otherwise use selected text
            var positioningElement = this.relateToEl || document.body;
            this.popupObj.setProperties({ relateTo: positioningElement, targetType: 'relative', offsetX: x ? x : 0, offsetY: y ? y : 0 }, true);
            this.popupObj.refreshPosition();
            this.popupObj.show();
            if (this.editableTextarea) {
                this.editableTextarea.focus();
            }
            this.hasResponse = false;
            if (this.mentionPopupObj && this.commandSettings.commands.length > 0) {
                this.showCommandMenuPopup();
            }
        }
    };
    /**
     * Closes/hides the popup UI or collapses the inline response area.
     * Triggers the close event after the popup is hidden.
     *
     * @method hidePopup
     * @returns {void}
     */
    InlineAIAssist.prototype.hidePopup = function () {
        var prevOnChange = this.isProtectedOnChange;
        this.isProtectedOnChange = true;
        if (this.mentionPopupObj) {
            this.mentionPopupObj.dataSource = this.commandOptionsData;
            this.mentionPopupObj.dataBind();
        }
        if (this.popupObj) {
            this.clearResponses();
            this.prompts = [];
            this.editableTextarea.innerHTML = '';
            this.refreshTextareaUI();
            this.popupObj.hide();
        }
        this.isProtectedOnChange = prevOnChange;
    };
    /**
     * Opens the command popup below the prompt input area.
     * Use to display available commands or suggestions for quick selection.
     *
     * @method showCommandPopup
     * @returns {void}
     */
    InlineAIAssist.prototype.showCommandPopup = function () {
        if (this.popupObj.element.classList.contains('e-popup-open')) {
            this.showCommandMenuPopup();
        }
    };
    /**
     * Hides the command popup displayed below the prompt input area.
     * Call this to dismiss the command chooser without selection.
     *
     * @method hideCommandPopup
     * @returns {void}
     */
    InlineAIAssist.prototype.hideCommandPopup = function () {
        if (this.mentionPopupObj && this.mentionPopupObj.element.classList.contains('e-popup-open')) {
            this.mentionPopupObj.hidePopup();
        }
    };
    InlineAIAssist.prototype.renderResponseWithTemplate = function (response) {
        var outputContainer = this.element.querySelector('.e-output-container');
        if (!outputContainer) {
            return;
        }
        outputContainer.innerHTML = '';
        var context = {
            response: response,
            responseItems: this.responseSettings.items
        };
        this.updateContent(this.responseTemplate, outputContainer, context, 'responseTemplate');
    };
    InlineAIAssist.prototype.clearResponses = function () {
        if (this.responseContainer) {
            this.responseContainer.remove();
        }
    };
    InlineAIAssist.prototype.destroy = function () {
        this.unWireEvents();
        this.destroyAndNullify(this.popupObj);
        this.destroyAndNullify(this.footerToolbarEle);
        this.destroyAndNullify(this.mentionPopupObj);
        this.removeAndNullify(this.responseContainer);
        this.removeAndNullify(this.skeletonContainer);
        this.removeAndNullify(this.contentWrapper);
        this.removeAndNullify(this.footer);
        this.removeAndNullify(this.editableTextarea);
        this.removeAndNullify(this.typingIndicatorEl);
        _super.prototype.destroy.call(this);
        if (this.mentionPopupObj) {
            this.mentionPopupObj.element.remove();
        }
        this.responseContainer = null;
        this.skeletonContainer = null;
        this.contentWrapper = null;
        this.footer = null;
        this.editableTextarea = null;
        this.typingIndicatorEl = null;
        this.sendToolbarItem = null;
        this.responseOptionsData = [];
        this.commandOptionsData = [];
        this.prompts = [];
        this.responseContainerCreated = false;
        this.isResponseRequested = false;
        this.isStopRequested = false;
        this.inlineToolbarSettings = this.responseSettings = this.commandSettings = {};
        if (this.cssClass) {
            removeClass([this.element], this.cssClass.split(' '));
        }
        removeClass([this.element], ['e-inline-ai-assist']);
        this.element.classList.remove('e-rtl');
    };
    /**
     * Called if any of the property value is changed.
     *
     * @param {InlineAIAssistModel} newProp - Specifies new properties
     * @param {InlineAIAssistModel} oldProp - Specifies old properties
     * @returns {void}
     * @private
     */
    InlineAIAssist.prototype.onPropertyChanged = function (newProp, oldProp) {
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'popupWidth':
                case 'popupHeight':
                    if (this.popupObj) {
                        this.popupObj.width = formatUnit(this.popupWidth);
                        this.popupObj.height = formatUnit(this.popupHeight);
                    }
                    break;
                case 'prompt':
                    if (!this.editorTemplate) {
                        this.editableTextarea.innerText = this.prompt;
                        this.refreshTextareaUI();
                        this.pushToUndoStack(this.prompt);
                    }
                    break;
                case 'locale':
                    this.l10n.setLocale(this.locale);
                    break;
                case 'placeholder':
                    if (this.editableTextarea) {
                        this.editableTextarea.setAttribute('placeholder', this.placeholder);
                    }
                    break;
                case 'cssClass':
                    this.updateCssClass(this.element, newProp.cssClass, oldProp.cssClass);
                    break;
                case 'target':
                    this.resolveTargetElement();
                    break;
                case 'relateTo':
                    this.resolveRelateToElement();
                    if (this.popupObj) {
                        this.popupObj.setProperties({ relateTo: this.relateToEl }, true);
                        this.popupObj.refreshPosition();
                    }
                    break;
                case 'inlineToolbarSettings':
                    if (newProp.inlineToolbarSettings.items) {
                        this.updateFooterToolbar();
                    }
                    if (newProp.inlineToolbarSettings.toolbarPosition) {
                        this.updateFooterType(newProp.inlineToolbarSettings.toolbarPosition);
                    }
                    break;
                case 'responseSettings':
                    if (newProp.responseSettings.items) {
                        this.setResponsePopupData();
                    }
                    break;
                case 'commandSettings':
                    if (newProp.commandSettings) {
                        this.setCommandPopupData();
                        if (this.mentionPopupObj && this.mentionPopupObj.element.classList.contains('e-popup-open')) {
                            this.showCommandMenuPopup();
                        }
                    }
                    break;
                case 'responseTemplate': {
                    if (this.responseContainerCreated && this.prompts.length > 0) {
                        var outputContainer = this.element.querySelector('.e-output-container');
                        if (outputContainer) {
                            outputContainer.innerHTML = '';
                            this.renderResponseWithTemplate(this.prompts[this.prompts.length - 1].response);
                        }
                    }
                    break;
                }
                case 'editorTemplate': {
                    this.updateEditorTemplate();
                    break;
                }
                case 'enableStreaming': {
                    this.enableStreaming = newProp.enableStreaming;
                    break;
                }
                case 'zIndex':
                    if (this.popupObj) {
                        this.popupObj.zIndex = newProp.zIndex;
                        this.popupObj.dataBind();
                    }
                    break;
                case 'enableRtl':
                    this.element.classList[this.enableRtl ? 'add' : 'remove']('e-rtl');
                    if (this.footerToolbarEle) {
                        this.footerToolbarEle.enableRtl = this.enableRtl;
                        this.footerToolbarEle.dataBind();
                    }
                    break;
            }
        }
    };
    __decorate$4([
        Property('body')
    ], InlineAIAssist.prototype, "target", void 0);
    __decorate$4([
        Property('')
    ], InlineAIAssist.prototype, "relateTo", void 0);
    __decorate$4([
        Property('Popup')
    ], InlineAIAssist.prototype, "responseMode", void 0);
    __decorate$4([
        Property('')
    ], InlineAIAssist.prototype, "cssClass", void 0);
    __decorate$4([
        Property('')
    ], InlineAIAssist.prototype, "prompt", void 0);
    __decorate$4([
        Collection([], PromptResponse)
    ], InlineAIAssist.prototype, "prompts", void 0);
    __decorate$4([
        Property('Ask or generate AI content..')
    ], InlineAIAssist.prototype, "placeholder", void 0);
    __decorate$4([
        Property('en-US')
    ], InlineAIAssist.prototype, "locale", void 0);
    __decorate$4([
        Property('auto')
    ], InlineAIAssist.prototype, "popupHeight", void 0);
    __decorate$4([
        Property('400px')
    ], InlineAIAssist.prototype, "popupWidth", void 0);
    __decorate$4([
        Complex({ commands: [], popupHeight: '', popupWidth: '' }, CommandSettings)
    ], InlineAIAssist.prototype, "commandSettings", void 0);
    __decorate$4([
        Complex({ items: [] }, ResponseSettings)
    ], InlineAIAssist.prototype, "responseSettings", void 0);
    __decorate$4([
        Complex({ toolbarPosition: 'Inline', items: [] }, InlineToolbarSettings)
    ], InlineAIAssist.prototype, "inlineToolbarSettings", void 0);
    __decorate$4([
        Property('')
    ], InlineAIAssist.prototype, "responseTemplate", void 0);
    __decorate$4([
        Property('')
    ], InlineAIAssist.prototype, "editorTemplate", void 0);
    __decorate$4([
        Property(1000)
    ], InlineAIAssist.prototype, "zIndex", void 0);
    __decorate$4([
        Property(false)
    ], InlineAIAssist.prototype, "enableRtl", void 0);
    __decorate$4([
        Event()
    ], InlineAIAssist.prototype, "promptRequest", void 0);
    __decorate$4([
        Event()
    ], InlineAIAssist.prototype, "open", void 0);
    __decorate$4([
        Event()
    ], InlineAIAssist.prototype, "close", void 0);
    InlineAIAssist = __decorate$4([
        NotifyPropertyChanges
    ], InlineAIAssist);
    return InlineAIAssist;
}(AIAssistBase));

var CONTEXT_TYPE_META = {
    'file': {
        iconCss: 'e-icons e-file-document',
        cssClass: 'e-context-file'
    },
    'variable': {
        iconCss: '',
        cssClass: 'e-context-variable'
    },
    'search': {
        iconCss: 'e-icons e-search',
        cssClass: 'e-context-search'
    },
    'tool': {
        iconCss: 'e-icons e-settings',
        cssClass: 'e-context-tool'
    },
    'result': {
        iconCss: 'e-icons e-circle-info',
        cssClass: 'e-context-result'
    },
    'context': {
        iconCss: '',
        cssClass: 'e-context-generic'
    }
};
/**
 * Defines the Thinking of AIAssist.
 * @hidden
 */
var AssistThinking = /** @__PURE__ @class */ (function () {
    function AssistThinking(parent) {
        this.collapsedStates = new Map();
        this.timelineInstances = new Map();
        this.spinnerInstances = new Map();
        this.parent = parent;
    }
    AssistThinking.prototype.getModuleName = function () {
        return 'assistThinking';
    };
    AssistThinking.prototype.destroy = function () {
        //this.parent = null;
        this.collapsedStates.clear();
        // Destroy all timeline instances
        this.timelineInstances.forEach(function (timeline) {
            if (timeline) {
                timeline.destroy();
            }
        });
        this.timelineInstances.clear();
        // Hide and cleanup all spinner instances
        this.spinnerInstances.forEach(function (spinnerElement) {
            if (spinnerElement && spinnerElement.parentElement) {
                hideSpinner(spinnerElement);
            }
        });
        this.spinnerInstances.clear();
    };
    /**
     * Creates thinking wrapper for all thinking items.
     *
     * @param {ThinkingBlock} item - Gets the thinking item model.
     * @param {HTMLElement} responseWrapper - The response wrapper element.
     * @param {number} blockIndex - Index of thinking block in blocks array.
     * @returns {void} Nothing returned.
     * @hidden
     */
    AssistThinking.prototype.createThinkingWrapper = function (item, responseWrapper, blockIndex) {
        this.renderThinkingItemEle(item, responseWrapper, blockIndex);
    };
    AssistThinking.prototype.renderThinkingItemEle = function (item, responseWrapper, blockIndex) {
        var itemId = item.id || getUniqueID('e-thinking-item');
        // Store initial collapsed state - default to true (collapsed) if not specified
        var isInitiallyCollapsed = item.collapsed !== false; // true by default
        this.collapsedStates.set(itemId, isInitiallyCollapsed);
        responseWrapper.classList.add("" + (item.isActive ? 'e-thinking-active' : 'e-thinking-finished'));
        responseWrapper.id = itemId;
        // Check if blockTemplate is provided - if yes, use custom template rendering
        if (this.parent.blockTemplate) {
            this.renderThinkingWithTemplate(item, responseWrapper, blockIndex);
        }
        else {
            // Default hardcoded rendering
            // Render header with icon, title, and toggle button (spec: item first, then containerId)
            var headerEle = this.renderThinkingHeader(item, itemId);
            responseWrapper.append(headerEle);
            // Render stages body
            if (item.stages && item.stages.length > 0) {
                if (item.stages.length === 1) {
                    // Single stage: render directly as child of thinking container (no timeline wrapper)
                    var singleStageElement = this.renderSingleStageContainerElement(item.stages[0], itemId, isInitiallyCollapsed);
                    responseWrapper.append(singleStageElement);
                }
                else {
                    // Multiple stages: use Timeline component wrapped in timeline container (spec: item first, then containerId)
                    var bodyEle = this.renderThinkingBody(item, itemId, isInitiallyCollapsed);
                    responseWrapper.append(bodyEle);
                }
            }
            // Render description if present (always visible, separate from stages)
            var descEle = this.renderThinkingDescription(item);
            if (descEle) {
                responseWrapper.append(descEle);
            }
        }
        // Show spinner after DOM is fully rendered and element is attached to document
        if ((isNullOrUndefined(this.parent.blockTemplate) || this.parent.blockTemplate === '') && item.isActive) {
            var activeSpanElement = responseWrapper.querySelector('.e-active-spinner');
            if (activeSpanElement && activeSpanElement.parentElement) {
                showSpinner(activeSpanElement);
            }
        }
    };
    AssistThinking.prototype.renderThinkingHeader = function (item, containerId) {
        var _this = this;
        var header = createElement('div', {
            attrs: { class: 'e-aiassist-thinking-header' }
        });
        var isDisabled = !item.collapsible || isNullOrUndefined(item.stages);
        if (item.stages) {
            isDisabled = isDisabled || item.stages.length === 0;
        }
        // Default collapsed state to true (start collapsed) if not specified
        var isCollapsed = item.collapsed !== false;
        // Native button element
        var toggleButton = createElement('button', {
            attrs: {
                id: containerId + "-toggle-button",
                type: 'button',
                class: 'e-aiassist-thinking-toggle',
                'aria-expanded': (!isCollapsed).toString(),
                'aria-disabled': isDisabled.toString()
            }
        });
        if (isDisabled) {
            toggleButton.disabled = true;
        }
        // Active span
        var activeSpan = createElement('span', {
            attrs: { class: "" + (item.isActive ? 'e-active-spinner' : 'e-icons e-check') }
        });
        // Initialize Spinner component when isActive is true
        if (item.isActive) {
            // Create Syncfusion spinner using utility function (do NOT show yet - DOM not ready)
            createSpinner({ target: activeSpan, type: 'Bootstrap' });
            // Store reference for lifecycle management and cleanup
            this.spinnerInstances.set(containerId, activeSpan);
        }
        toggleButton.append(activeSpan);
        // Text span
        var textSpan = createElement('span', {
            attrs: { class: 'e-toggle-text' }
        });
        textSpan.innerHTML = item.title || 'Thinking...';
        toggleButton.append(textSpan);
        // Icon span
        var toggleIconSpan = createElement('span', {
            attrs: {
                class: "e-icons " + (isCollapsed ? 'e-chevron-right' : 'e-chevron-down') + " e-toggle-icon"
            }
        });
        if (!isDisabled) {
            toggleButton.append(toggleIconSpan);
        }
        header.append(toggleButton);
        // Click handler
        EventHandler.add(toggleButton, 'click', function () { _this.toggleCollapse(containerId, toggleButton); }, this);
        return header;
    };
    AssistThinking.prototype.renderThinkingWithTemplate = function (item, responseWrapper, blockIndex) {
        var template = this.parent.blockTemplate;
        var context = {
            block: item,
            blockIndex: blockIndex !== undefined ? blockIndex : -1
        };
        this.parent.updateContent(template, responseWrapper, context, 'blockTemplate');
    };
    AssistThinking.prototype.getMarkdownContent = function (response) {
        var htmlResponse = MarkdownConverter.toHtml(response);
        return htmlResponse;
    };
    AssistThinking.prototype.renderThinkingBody = function (item, containerId, isCollapsed) {
        // Spec: renderThinkingBody handles 2+ stages only
        if (!item.stages || item.stages.length < 2) {
            return createElement('div');
        }
        var bodyContainer = createElement('div', {
            attrs: {
                class: "e-aiassist-thinking-timeline " + (isCollapsed ? 'e-timeline-collapsed' : 'e-timeline-expanded'),
                'data-thinking-id': containerId,
                id: "e-thinking-timeline-" + containerId
            }
        });
        // Multiple stages: use Timeline component
        this.renderTimelineComponent(containerId, item.stages, bodyContainer);
        return bodyContainer;
    };
    AssistThinking.prototype.renderThinkingDescription = function (item) {
        // Spec: Extract description rendering as separate method
        if (!item.content) {
            return null;
        }
        var descEle = createElement('div', {
            attrs: {
                class: 'e-thinking-response-content'
            }
        });
        descEle.innerHTML = this.getMarkdownContent(item.content);
        return descEle;
    };
    AssistThinking.prototype.renderContentWithContextPlaceholders = function (content, editableContext) {
        var _this = this;
        if (!content || !editableContext || editableContext.length === 0) {
            return this.getMarkdownContent(content);
        }
        // Clone so we can track which context items were consumed
        var usedContextIndexes = new Set();
        var sanitizedContent = this.getMarkdownContent(content);
        var replacedContent = sanitizedContent.replace(/\{(\d+)\}/g, function (match, indexStr) {
            var index = Number(indexStr);
            var context = editableContext[parseInt(index.toString(), 10)];
            if (!context) {
                // No matching context → keep placeholder
                return match;
            }
            usedContextIndexes.add(index);
            return _this.renderInlineContextItem(context);
        });
        return replacedContent;
    };
    AssistThinking.prototype.renderInlineContextItem = function (context) {
        var typeMeta = context.type ? CONTEXT_TYPE_META[context.type] : undefined;
        var tooltipAttr = context.tooltipText ? context.tooltipText : '';
        var badge = this.renderBadgeElement(context);
        var clickableClass = context.clickable ? 'e-context-clickable' : '';
        var typeClass = !isNullOrUndefined(typeMeta) ? typeMeta.cssClass : '';
        var iconHtml = createElement('span', { attrs: {
                class: "e-context-icon " + (!isNullOrUndefined(typeMeta) ? typeMeta.iconCss : '')
            } });
        var contextItem = createElement('span', { attrs: {
                class: "e-inline-context-item " + typeClass + " " + clickableClass,
                title: tooltipAttr,
                'data-clickable': context.clickable ? 'true' : 'false'
            } });
        var contextName = createElement('span', { attrs: {
                class: 'e-inline-context-name'
            } });
        contextName.innerText = context.name || '';
        contextItem.append(iconHtml, contextName);
        if (badge) {
            contextItem.append(badge);
        }
        return contextItem.outerHTML;
    };
    AssistThinking.prototype.attachContextItemClickHandlers = function (container, contexts) {
        var _this = this;
        var contextItems = container.querySelectorAll('.e-inline-context-item.e-context-clickable');
        var contextMap = new Map();
        // Build context map by name (since we don't have direct reference after innerHTML)
        contexts.forEach(function (ctx) {
            if (ctx.name) {
                contextMap.set(ctx.name, ctx);
            }
        });
        contextItems.forEach(function (item) {
            var contextName = !isNullOrUndefined(item.textContent) ? item.textContent.trim() : null;
            var context = contextName ? contextMap.get(contextName) : undefined;
            EventHandler.add(item, 'click', function (e) {
                if (context && context.clickable) {
                    var eventArgs = {
                        event: e,
                        contextItem: context
                    };
                    _this.parent.trigger('editableContextClicked', eventArgs);
                }
            }, _this.parent);
        });
    };
    AssistThinking.prototype.renderBadgeElement = function (context) {
        var badge = createElement('span', {
            attrs: { class: 'e-context-badge' }
        });
        if (context.badge && context.badge !== ThinkingContextBadge.None) {
            var iconName = '';
            switch (context.badge) {
                case 'success':
                    iconName = 'e-check';
                    break;
                case 'warning':
                    iconName = 'e-warning';
                    break;
                case 'failed':
                    iconName = 'e-error-treeview';
                    break;
                case 'pending':
                    iconName = 'e-pending';
                    break;
                case 'info':
                    iconName = 'e-circle-info';
                    break;
                default:
                    iconName = context.badge;
                    break;
            }
            badge.className += " e-icons " + iconName;
            return badge;
        }
        return null;
    };
    AssistThinking.prototype.renderSingleStageContainerElement = function (stage, containerId, isCollapsed) {
        var stageContainer = createElement('div', {
            attrs: {
                class: "e-single-stage-container e-stage-" + (stage.status || 'pending') + " " + (isCollapsed ? 'e-timeline-collapsed' : 'e-timeline-expanded'),
                'data-thinking-id': containerId,
                id: "e-thinking-timeline-" + containerId
            }
        });
        if (stage.iconCss) {
            var icon = createElement('span', {
                attrs: { class: "e-stage-icon " + stage.iconCss }
            });
            stageContainer.append(icon);
        }
        // Stage content
        if (stage.content) {
            var content = createElement('div', {
                attrs: { class: 'e-single-stage-content' }
            });
            content.innerHTML = this.renderContentWithContextPlaceholders(stage.content, stage.editableContext);
            stageContainer.append(content);
            // Attach click handlers to context items after DOM insertion
            if (stage.editableContext && stage.editableContext.length > 0) {
                this.attachContextItemClickHandlers(content, stage.editableContext);
            }
        }
        return stageContainer;
    };
    AssistThinking.prototype.renderTimelineComponent = function (containerId, stages, container) {
        var _this = this;
        // Create timeline wrapper element
        var timelineWrapper = createElement('div', {
            attrs: {
                class: 'e-timeline-wrapper',
                id: "timeline-" + containerId
            }
        });
        container.append(timelineWrapper);
        // Map thinking stages to Timeline items
        var timelineItems = stages.map(function (stage, index) {
            // Build detailed HTML content for timeline item
            var itemContent = '';
            // Stage content
            if (stage.content) {
                var processedContent = _this.renderContentWithContextPlaceholders(stage.content, stage.editableContext);
                itemContent += "\n                <div class=\"e-timeline-content\">\n                    " + processedContent + "\n                </div>";
            }
            return {
                content: itemContent,
                dotCss: stage.iconCss || _this.getStatusIcon(stage.status),
                cssClass: 'e-timeline-stage',
                lastIndex: stages.length,
                stage: stage,
                stageIndex: index,
                isStageInProgress: !isNullOrUndefined(stage.status) ? stage.status.toLowerCase() === 'inprogress' : ''
            };
        });
        var timelineTemplate;
        if (isNullOrUndefined(this.parent.itemTemplate) || this.parent.itemTemplate === '') {
            timelineTemplate = this.renderTimelineTemplate.bind(this);
        }
        else {
            timelineTemplate = this.parent.itemTemplate;
        }
        // Create and initialize Timeline component
        var timeline = new Timeline({
            items: timelineItems,
            template: timelineTemplate,
            orientation: TimelineOrientation.Vertical,
            align: 'After'
        });
        // Render Timeline into the wrapper
        timeline.appendTo(timelineWrapper);
        // Initialize spinners for inProgress stages after timeline render
        this.initializeStageSpinners(timelineWrapper, timelineItems);
        // Attach click handlers to context items after timeline render
        stages.forEach(function (stage) {
            if (stage.editableContext && stage.editableContext.length > 0) {
                // Find the content containers for this stage and attach handlers
                var contentElements = timelineWrapper.querySelectorAll('.e-timeline-content');
                contentElements.forEach(function (contentEl) {
                    _this.attachContextItemClickHandlers(contentEl, stage.editableContext);
                });
            }
        });
        // Store reference for lifecycle management and updates
        this.timelineInstances.set(containerId, timeline);
    };
    AssistThinking.prototype.renderTimelineTemplate = function (data) {
        var item = data.item;
        var itemIndex = data.itemIndex || 0;
        var stage = item.stage;
        var stageIndex = item.stageIndex !== undefined ? item.stageIndex : itemIndex;
        var isStageInProgress = item.isStageInProgress || false;
        // Get total items from the timeline (data.itemsCount should be available)
        var isLastItem = itemIndex === item.lastIndex - 1;
        // Build indicator element: spinner for inProgress, icon otherwise
        var indicatorElement = isStageInProgress
            ? "<span class=\"indicator e-stage-spinner\" id=\"e-stage-spinner-" + itemIndex + "\"></span>"
            : "<span class=\"indicator " + item.dotCss + "\"></span>";
        // Default hardcoded template
        var templateHtml = "\n            <div class='e-thinking-timeline-item-container " + (isLastItem ? 'e-timeline-last-item' : '') + "'>\n                <div class=\"progress-line\">\n                    " + indicatorElement + "\n                </div>\n                <div class=\"content\">\n                    <div class=\"content-container\">\n                        " + item.content + "\n                    </div>\n                </div>\n            </div>\n        ";
        return templateHtml;
    };
    AssistThinking.prototype.toggleCollapse = function (containerId, toggleBtn) {
        var container = this.parent.element.querySelector("#" + containerId);
        // Try to find either timeline wrapper or single stage container
        var stageElement = container.querySelector('.e-aiassist-thinking-timeline');
        if (!stageElement) {
            // No timeline wrapper found, check for direct single stage container
            stageElement = container.querySelector('.e-single-stage-container');
        }
        var currentState = this.isCollapsed(container.id);
        var newState = !currentState;
        // Update state map
        this.collapsedStates.set(container.id, newState);
        var toggleIconSpan = container.querySelector('.e-aiassist-thinking-toggle .e-toggle-icon');
        if (isNullOrUndefined(toggleIconSpan)) {
            return;
        }
        // Update aria-expanded attribute (inverse of newState: newState is collapsed, aria-expanded is expanded)
        if (toggleBtn) {
            toggleBtn.setAttribute('aria-expanded', (!newState).toString());
        }
        // Toggle CSS class for animation (smooth max-height transition)
        if (newState) {
            stageElement.classList.remove('e-timeline-expanded');
            stageElement.classList.add('e-timeline-collapsed');
            toggleIconSpan.classList.remove('e-chevron-down');
            toggleIconSpan.classList.add('e-chevron-right');
        }
        else {
            stageElement.classList.remove('e-timeline-collapsed');
            stageElement.classList.add('e-timeline-expanded');
            toggleIconSpan.classList.remove('e-chevron-right');
            toggleIconSpan.classList.add('e-chevron-down');
        }
    };
    AssistThinking.prototype.isCollapsed = function (containerId) {
        return this.collapsedStates.get(containerId) != null ? this.collapsedStates.get(containerId) : false;
    };
    AssistThinking.prototype.getStatusIcon = function (status) {
        // Map stage status to appropriate icon CSS
        // If status not provided, default to check icon (Completed state)
        if (!status) {
            return 'e-icons e-check'; // Default: check icon for completed
        }
        var normalizedStatus = status.toLowerCase();
        switch (normalizedStatus) {
            case 'completed':
                return 'e-icons e-check'; // Check icon for completed
            case 'inprogress':
                return ''; // Empty - spinner will be rendered instead
            case 'failed':
                return 'e-icons e-error-treeview'; // Error/cross icon for failed
            default:
                return 'e-icons e-check'; // Fallback to check icon
        }
    };
    AssistThinking.prototype.initializeStageSpinners = function (timelineWrapper, timelineItems) {
        var _this = this;
        // Single CSS selector query for all spinner elements - O(n) but batched
        var spinnerElements = timelineWrapper.querySelectorAll('.e-stage-spinner');
        if (spinnerElements.length === 0) {
            return; // No spinners to initialize
        }
        // Synchronous batch processing - no RAF/setTimeout overhead
        spinnerElements.forEach(function (element, index) {
            // Create spinner (synchronous DOM operation)
            createSpinner({ target: element, type: 'Bootstrap' });
            // Remove hide class immediately - spinner pane created synchronously by createSpinner
            // Use non-null assertion since we just created the pane above
            var spinnerPane = element.querySelector('.e-spinner-pane');
            // Sync call to showSpinner - already batched in single forEach
            showSpinner(element);
            // Store for lifecycle cleanup
            _this.spinnerInstances.set("e-stage-spinner-" + index, element);
        });
    };
    return AssistThinking;
}());

export { AIAssistBase, AIAssistView, AssistThinking, AssistView, AssistViewType, AttachmentSettings, CONTEXT_TYPE_META, ChatUI, CommandItem, CommandSettings, FileAttachmentSettings, FooterToolbarSettings, InlineAIAssist, InlineToolbarSettings, InterActiveChatBase, Message, MessageReply, MessageStatus, MessageToolbarSettings, Prompt, PromptResponse, PromptToolbarSettings, ResponseItem, ResponseMode, ResponseSettings, ResponseToolbarSettings, SpeechToTextSettings, TextToSpeechSettings, ThinkingContextBadge, ThinkingContextType, ThinkingStageStatus, ToolbarItem, ToolbarPosition, ToolbarSettings, User };
//# sourceMappingURL=ej2-interactive-chat.es5.js.map
