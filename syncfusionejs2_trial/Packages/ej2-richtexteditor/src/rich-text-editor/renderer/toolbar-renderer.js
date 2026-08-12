import { addClass, Browser, removeClass, isNullOrUndefined, isNullOrUndefined as isNOU, EventHandler, detach } from '@syncfusion/ej2-base';
import { closest } from '@syncfusion/ej2-base';
import { Toolbar, Menu } from '@syncfusion/ej2-navigations';
import { DropDownButton, SplitButton } from '@syncfusion/ej2-splitbuttons';
import { Tooltip } from '@syncfusion/ej2-popups';
import * as classes from '../base/classes';
import * as events from '../base/constant';
import { CLS_TOOLBAR, CLS_DROPDOWN_BTN, CLS_RTE_ELEMENTS, CLS_INLINE_DROPDOWN, CLS_CUSTOM_TILE, CLS_NOCOLOR_ITEM } from '../base/classes';
import { ColorPicker } from '@syncfusion/ej2-inputs';
import { ToolbarStatus } from '../../editor-manager/plugin/toolbar-status';
import { ToolbarType } from '../../common/enum';
/**
 * `Toolbar renderer` module is used to render toolbar in RichTextEditor.
 *
 * @hidden
 * @deprecated
 */
var ToolbarRenderer = /** @class */ (function () {
    /**
     * Constructor for toolbar renderer module
     *
     * @param {IRichTextEditor} parent - specifies the parent element.
     * @param {ServiceLocator} serviceLocator - specifies the serviceLocator
     */
    function ToolbarRenderer(parent, serviceLocator) {
        this.isEscapeKey = false;
        this.rangeStore = false;
        // Mapping of item names to their display labels for accessibility
        this.itemNameMap = {
            'fontcolor': 'Font Color',
            'backgroundcolor': 'Background Color',
            'codeblock': 'Code Block',
            'lineheight': 'Line Height',
            'alignments': 'Alignments',
            'bulletformatlist': 'Bullet Format List',
            'numberformatlist': 'Number Format List',
            'aicommands': 'Ai Commands',
            'fontname': 'Font Name',
            'fontsize': 'Font Size'
        };
        this.parent = parent;
        this.isDestroyed = false;
        if (serviceLocator) {
            this.l10n = serviceLocator.getService('rteLocale');
        }
        this.wireEvent();
    }
    ToolbarRenderer.prototype.wireEvent = function () {
        this.parent.on(events.destroy, this.destroy, this);
        this.parent.on(events.destroyTooltip, this.closeTooltips, this);
    };
    ToolbarRenderer.prototype.unWireEvent = function () {
        this.parent.off(events.destroy, this.destroy);
        this.parent.off(events.destroyTooltip, this.closeTooltips);
    };
    ToolbarRenderer.prototype.toolbarBeforeCreate = function (e) {
        if (this.mode === 'Extended') {
            e.enableCollision = false;
        }
    };
    ToolbarRenderer.prototype.toolbarCreated = function () {
        this.parent.notify(events.toolbarCreated, this);
        if (this.mode === 'Extended') {
            var extendedToolbarElement = this.toolbarPanel.querySelector('.e-expended-nav');
            if (extendedToolbarElement) {
                EventHandler.add(extendedToolbarElement, 'mousedown', this.extendedToolbarMouseDownHandler, this);
            }
        }
    };
    ToolbarRenderer.prototype.extendedToolbarMouseDownHandler = function () {
        if (this.parent.userAgentData.isSafari()) {
            this.parent.notify(events.selectionSave, {});
        }
    };
    ToolbarRenderer.prototype.mouseOutHandler = function () {
        if (!isNOU(this.tooltipTargetEle)) {
            this.tooltipTargetEle.setAttribute('title', this.tooltipTargetEle.getAttribute('data-title'));
        }
        else {
            var currentDocument = this.parent.iframeSettings.enable ? this.parent.contentModule.getPanel().ownerDocument :
                this.parent.contentModule.getDocument();
            this.tooltipTargetEle = currentDocument.querySelector('[data-title]');
            this.tooltipTargetEle.setAttribute('title', this.tooltipTargetEle.getAttribute('data-title'));
        }
        this.tooltipTargetEle.removeAttribute('data-title');
        EventHandler.remove(this.tooltipTargetEle, 'mouseout', this.mouseOutHandler);
    };
    ToolbarRenderer.prototype.tooltipAfterClose = function (args) {
        var target = args.target ? args.target :
            args.originalEvent.target;
        if (this.parent.showTooltip && target) {
            this.tooltipTargetEle = target.getAttribute('title') ? target : target.closest('[title]');
            if (!isNOU(this.tooltipTargetEle)) {
                this.tooltipTargetEle.setAttribute('data-title', this.tooltipTargetEle.getAttribute('title'));
                this.tooltipTargetEle.removeAttribute('title');
                EventHandler.add(this.tooltipTargetEle, 'mouseout', this.mouseOutHandler, this);
            }
        }
    };
    ToolbarRenderer.prototype.toolbarClicked = function (args) {
        var _this = this;
        if (!this.parent.enabled) {
            return;
        }
        this.closeTooltips();
        if (!isNOU(args.originalEvent) && args.originalEvent.pointerType === 'mouse') {
            this.tooltipAfterClose(args);
        }
        if (this.parent.toolbarSettings.type === ToolbarType.Popup) {
            var command = void 0;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if (args.item && args.item.command) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                command = args.item.command;
            }
            var commandsArray = ['Formats', 'Font', 'Alignments', 'EmojiPicker', 'Table', 'BulletFormatList', 'NumberFormatList', 'CodeBlock'];
            var isPresent = !isNOU(command) && commandsArray.indexOf(command) !== -1;
            if (isPresent) {
                args.cancel = true;
            }
        }
        var toolbarClickEventArgs = { item: args.item, originalEvent: args.originalEvent, cancel: false };
        this.parent.trigger('toolbarClick', toolbarClickEventArgs, function (clickEventArgs) {
            if ((!_this.parent.readonly || isNullOrUndefined(args.item)) && !clickEventArgs.cancel) {
                _this.parent.notify(events.toolbarClick, clickEventArgs);
            }
        });
    };
    ToolbarRenderer.prototype.dropDownSelected = function (args) {
        this.parent.notify(events.dropDownSelect, { element: args.element, item: args.item, originalEvent: args.event });
    };
    ToolbarRenderer.prototype.beforeDropDownItemRender = function (args) {
        if (this.parent.readonly || !this.parent.enabled) {
            return;
        }
        this.parent.notify(events.beforeDropDownItemRender, args);
    };
    ToolbarRenderer.prototype.tooltipBeforeRender = function (args) {
        if (!isNOU(args.target.getAttribute('title'))) {
            var tooltipTarget = args.target.getAttribute('title');
            var tooltipText = void 0;
            switch (tooltipTarget) {
                case 'Minimize':
                    tooltipText = this.l10n.getConstant('minimize');
                    args.target.setAttribute('title', tooltipText + ' (Esc)');
                    break;
                case 'Maximize':
                    tooltipText = this.l10n.getConstant('maximize');
                    args.target.setAttribute('title', tooltipText + ' (Ctrl+Shift+F)');
                    break;
            }
        }
        if (args.target.querySelector('.e-active')) {
            if (args.target.querySelector('.e-rte-dropdown-menu') || args.target.querySelector('.e-rte-dropdown')) {
                this.tooltipAfterClose(args);
            }
            args.cancel = true;
        }
    };
    ToolbarRenderer.prototype.dropDownOpen = function (args) {
        var istableEditDialog = this.parent.tableModule && this.parent.tableModule.editdlgObj
            && !isNOU(this.parent.tableModule.editdlgObj.element) && !isNOU(this.parent.tableModule.editdlgObj.element.querySelector('.e-rte-edit-tablecell-dialog,.e-rte-edit-table-content'));
        if (args.element.parentElement.getAttribute('id').indexOf('TableCell') > -1 && !isNOU(args.element.parentElement.querySelector('.e-cell-merge'))) {
            var listEle = args.element.querySelectorAll('li');
            var selectedEles_1 = this.parent.inputElement.querySelectorAll('.e-cell-select');
            if (selectedEles_1.length === 1) {
                addClass([listEle[0]], 'e-disabled');
                removeClass([listEle[1], listEle[2]], 'e-disabled');
            }
            else if (selectedEles_1.length > 1) {
                if (!Array.from(selectedEles_1).every(function (element) {
                    return element.tagName.toLowerCase() === selectedEles_1[0].tagName.toLowerCase();
                })) {
                    addClass([listEle[0]], 'e-disabled');
                }
                else {
                    removeClass([listEle[0]], 'e-disabled');
                }
                addClass([listEle[1], listEle[2]], 'e-disabled');
            }
        }
        if (!istableEditDialog) {
            this.parent.notify(events.selectionSave, args);
        }
    };
    ToolbarRenderer.prototype.dropDownClose = function (args) {
        if (this.parent.lineHeight.supportAllValues && this.lineHeightDropDown) {
            this.lineHeightDropDown.items = this.itemValue;
            this.lineHeightDropDown.dataBind();
        }
        var istableEditDialog = this.parent.tableModule && this.parent.tableModule.editdlgObj &&
            !isNOU(this.parent.tableModule.editdlgObj.element)
            && !isNOU(this.parent.tableModule.editdlgObj.element.querySelector('.e-rte-edit-tablecell-dialog,.e-rte-edit-table-content'));
        if (!this.isEscapeKey && !istableEditDialog) {
            this.parent.notify(events.selectionRestore, args);
        }
        this.isEscapeKey = false;
    };
    ToolbarRenderer.prototype.dropDownBeforeClose = function (args) {
        if (!isNOU(args.event) && args.event.key === 'Escape' && args.event.keyCode === 27) {
            this.isEscapeKey = true;
            this.parent.notify(events.preventQuickToolbarClose, args);
        }
    };
    /**
     * renderToolbar method
     *
     * @param {IToolbarOptions} args - specifies the arguments.
     * @returns {void}
     * @hidden
     * @deprecated
     */
    ToolbarRenderer.prototype.renderToolbar = function (args) {
        var _this = this;
        var isBottomToolbar = this.parent.toolbarSettings && this.parent.toolbarSettings.position === 'Bottom';
        this.setPanel(args.target);
        this.renderPanel();
        this.mode = args.overflowMode;
        args.rteToolbarObj.toolbarObj = new Toolbar({
            items: args.items,
            width: '100%',
            overflowMode: args.overflowMode,
            beforeCreate: this.toolbarBeforeCreate.bind(this),
            created: function () {
                _this.positionToolbar(isBottomToolbar);
                _this.toolbarCreated();
            },
            clicked: this.toolbarClicked.bind(this),
            enablePersistence: args.enablePersistence,
            enableRtl: args.enableRtl,
            cssClass: args.cssClass
        });
        args.rteToolbarObj.toolbarObj.isStringTemplate = true;
        args.rteToolbarObj.toolbarObj.createElement = this.parent.createElement;
        args.rteToolbarObj.toolbarObj.appendTo(args.target);
        if (this.parent.showTooltip && args.type === 'toolbar') {
            this.tooltip = new Tooltip({
                target: '#' + this.parent.getID() + '_toolbar_wrapper [title]',
                showTipPointer: true,
                openDelay: 400,
                opensOn: 'Hover',
                beforeRender: this.tooltipBeforeRender.bind(this),
                beforeOpen: this.tooltipBeforeOpen.bind(this),
                cssClass: this.parent.getCssClass(),
                windowCollision: true,
                position: isBottomToolbar ? 'TopCenter' : 'BottomCenter'
            });
            this.tooltip.isAngular = this.parent.isModalDialog;
            this.tooltip.appendTo(args.target.parentElement);
        }
    };
    ToolbarRenderer.prototype.positionToolbar = function (isBottomToolbar) {
        var rteContainer = this.parent.element.querySelector('.e-rte-container');
        var toolbarWrapper = this.parent.element.querySelector('.e-toolbar-wrapper');
        if (isBottomToolbar && rteContainer && toolbarWrapper) {
            addClass([toolbarWrapper], 'e-rte-tb-bottom');
        }
    };
    ToolbarRenderer.prototype.tooltipBeforeOpen = function (args) {
        if (args.element) {
            args.element.setAttribute('data-rte-id', this.parent.getID());
        }
    };
    /**
     * renderDropDownButton method
     *
     * @param {IDropDownModel} args - specifies the the arguments.
     * @returns {void}
     * @hidden
     * @deprecated
     */
    ToolbarRenderer.prototype.renderDropDownButton = function (args) {
        var _this = this;
        var css;
        var targetEle = args.activeElement;
        args.element.classList.add(CLS_DROPDOWN_BTN);
        css = args.cssClass + ' ' + CLS_RTE_ELEMENTS + ' ' + classes.CLS_DROPDOWN_MENU;
        if (this.parent.inlineMode.enable && Browser.isDevice) {
            css = css + ' ' + CLS_INLINE_DROPDOWN;
        }
        var editTableBorder = false;
        if (args.itemName === 'BorderStyle') {
            editTableBorder = true;
        }
        var isTesting = this.parent.element && this.parent.element.dataset && this.parent.element.dataset.rteUnitTesting === 'true';
        // eslint-disable-next-line
        var proxy = this;
        var dropDown = new DropDownButton({
            items: args.items,
            iconCss: args.iconCss,
            cssClass: css,
            content: args.content,
            enablePersistence: this.parent.enablePersistence,
            enableRtl: this.parent.enableRtl,
            select: this.dropDownSelected.bind(this),
            animationSettings: isTesting ? { effect: 'None', duration: 0 } : { effect: 'None', duration: 400, easing: 'ease' },
            beforeOpen: function (args) {
                _this.closeTooltips();
                args.preventScroll = true;
                if (proxy.parent.readonly || !proxy.parent.enabled) {
                    args.cancel = true;
                    return;
                }
                if (_this.parent.userAgentData.isSafari() && args.event.type === 'keydown' && _this.parent.formatter.editorManager.nodeSelection &&
                    !_this.parent.inputElement.contains(_this.parent.getRange().startContainer) && !editTableBorder) {
                    _this.parent.notify(events.selectionRestore, args);
                }
                // Table styles dropdown preselect
                if (proxy.parent.editorMode !== 'Markdown') {
                    var startNode = proxy.parent.getRange().startContainer.parentElement;
                    var tableEle = startNode.closest('table');
                    var trow = startNode.closest('tr');
                    if (!isNOU(tableEle) && tableEle.classList.contains('e-dashed-border')) {
                        for (var index = 0; index < args.element.childNodes.length; index++) {
                            if (args.element.childNodes[index].classList.contains('e-dashed-borders')) {
                                addClass([args.element.childNodes[index]], 'e-active');
                            }
                        }
                    }
                    if (!isNOU(tableEle) && tableEle.classList.contains('e-alternate-rows') && window.getComputedStyle(trow).backgroundColor !== '') {
                        for (var index = 0; index < args.element.childNodes.length; index++) {
                            if (args.element.childNodes[index].classList.contains('e-alternate-rows')) {
                                addClass([args.element.childNodes[index]], 'e-active');
                            }
                        }
                    }
                    // Table border styles dropdown preselect
                    if (!isNOU(args.element.parentElement) && args.element.parentElement.classList.contains('e-border-style-btn')) {
                        var borderStyleValue = proxy.parent.contentModule.getDocument().activeElement.innerText.toLowerCase();
                        for (var i = 0; i < args.items.length; i++) {
                            if (args.items[i].text.toLowerCase() === borderStyleValue) {
                                addClass([args.element.childNodes[i]], 'e-active');
                                break;
                            }
                            else {
                                removeClass([args.element.childNodes[i]], 'e-active');
                            }
                        }
                    }
                    //Alignments preselect
                    var alignEle = proxy.parent.getRange().startContainer;
                    var selectedCell = trow && trow.querySelector('.e-cell-select');
                    var isTbalePopUpdropdown = proxy.parent.contentModule.getDocument() &&
                        proxy.parent.quickToolbarModule && proxy.parent.quickToolbarModule.tableQTBar
                        && proxy.parent.quickToolbarModule.tableQTBar.element &&
                        (proxy.parent.contentModule.getDocument()
                            .contains(proxy.parent.quickToolbarModule.tableQTBar.element));
                    if (isTbalePopUpdropdown && !isNOU(tableEle) && !isNOU(selectedCell)) {
                        alignEle = selectedCell;
                    }
                    while (alignEle !== proxy.parent.inputElement && !isNOU(alignEle.parentElement)) {
                        alignEle = _this.parent.formatter.editorManager.domNode.getImmediateBlockNode(alignEle);
                        var alignStyle = window.getComputedStyle(alignEle).textAlign;
                        if (!isNOU(args.items[0]) && args.items[0].command === 'Alignments') {
                            if ((args.items[0].text === 'Align Left' && (alignStyle === 'left') || alignStyle === 'start')) {
                                addClass([args.element.childNodes[0]], 'e-active');
                                break;
                            }
                            else if (args.items[1].text === 'Align Center' && alignStyle === 'center') {
                                addClass([args.element.childNodes[1]], 'e-active');
                                break;
                            }
                            else if (args.items[2].text === 'Align Right' && alignStyle === 'right') {
                                addClass([args.element.childNodes[2]], 'e-active');
                                break;
                            }
                            else if (args.items[3].text === 'Align Justify' && alignStyle === 'justify') {
                                addClass([args.element.childNodes[3]], 'e-active');
                                break;
                            }
                        }
                        alignEle = alignEle.parentElement;
                    }
                    //image preselect
                    var closestNode = startNode.closest('img');
                    var imageEle = closestNode ? closestNode : (targetEle ? targetEle : startNode.querySelector('img'));
                    var isItemCommandImage = !isNOU(args.items[0]) && args.items[0].command === 'Images';
                    if (isItemCommandImage && !isNOU(imageEle)) {
                        // If the image is wrapped in a caption container, use that container for class checks
                        var classCheckEle = imageEle;
                        var captionWrapper = imageEle.closest('.e-img-caption-container');
                        if (!isNOU(captionWrapper)) {
                            classCheckEle = captionWrapper;
                        }
                        var index = void 0;
                        if (args.items[0].subCommand === 'Inline' ||
                            args.items[0].subCommand === 'Break') {
                            if (classCheckEle.classList.contains(classes.CLS_IMG_INLINE) ||
                                classCheckEle.classList.contains(classes.CLS_IMAGE_LEFT_WRAP) ||
                                classCheckEle.classList.contains(classes.CLS_IMAGE_RIGHT_WRAP)) {
                                index = 0;
                            }
                            else if (classCheckEle.classList.contains(classes.CLS_IMG_CENTER) ||
                                classCheckEle.classList.contains(classes.CLS_IMG_BREAK) ||
                                classCheckEle.classList.contains(classes.CLS_IMG_LEFT) ||
                                classCheckEle.classList.contains(classes.CLS_IMG_RIGHT)) {
                                index = 1;
                            }
                        }
                        else if (args.items[0].subCommand === 'LeftWrap' ||
                            args.items[0].subCommand === 'RightWrap') {
                            if (classCheckEle.classList.contains(classes.CLS_IMAGE_LEFT_WRAP)) {
                                index = 0;
                            }
                            else if (classCheckEle.classList.contains(classes.CLS_IMAGE_RIGHT_WRAP)) {
                                index = 1;
                            }
                        }
                        else {
                            if (classCheckEle.classList.contains(classes.CLS_IMG_LEFT)) {
                                // need to check and remove the default left active adding use case
                                index = 0;
                            }
                            else if (classCheckEle.classList.contains(classes.CLS_IMG_CENTER) ||
                                classCheckEle.classList.contains(classes.CLS_IMG_BREAK)) {
                                index = 1;
                            }
                            else if (classCheckEle.classList.contains(classes.CLS_IMG_RIGHT)) {
                                index = 2;
                            }
                        }
                        if (!isNOU(args.element.childNodes[index])) {
                            addClass([args.element.childNodes[index]], 'e-active');
                        }
                    }
                    //Video preselect
                    var videoClosestNode = startNode.closest('.e-video-wrap');
                    var videoEle = videoClosestNode ? videoClosestNode : (targetEle ? targetEle : startNode.querySelector('video'));
                    if (!isNOU(args.items[0]) && args.items[0].command === 'Videos') {
                        if (!isNOU(videoEle)) {
                            var index = void 0;
                            if (videoEle.classList.contains('e-video-left') || videoEle.classList.contains('e-video-inline')) {
                                index = 0;
                            }
                            else if (videoEle.classList.contains('e-video-center') || videoEle.classList.contains('e-video-break')) {
                                index = 1;
                            }
                            else if (videoEle.classList.contains('e-video-right')) {
                                index = 2;
                            }
                            if (!isNOU(args.element.childNodes[index])) {
                                addClass([args.element.childNodes[index]], 'e-active');
                            }
                        }
                    }
                    // Audio preselect
                    var audioClosestNode = startNode.closest('.e-audio-wrap');
                    var audioEle = audioClosestNode ? audioClosestNode.querySelector('audio') : (targetEle ? targetEle.querySelector('audio') : startNode.querySelector('audio'));
                    if (!isNOU(args.items[0]) && args.items[0].command === 'Audios') {
                        if (!isNOU(audioEle)) {
                            var index = void 0;
                            if (audioEle.classList.contains('e-audio-inline')) {
                                index = 0;
                            }
                            else if (audioEle.classList.contains('e-audio-break')) {
                                index = 1;
                            }
                            if (!isNOU(args.element.childNodes[index])) {
                                addClass([args.element.childNodes[index]], 'e-active');
                            }
                        }
                    }
                    //Formats preselect
                    if (!isNOU(args.items[0]) && (args.items[0].command === 'Formats' || args.items[0].command === 'Font' || args.items[0].command === 'LineHeight')) {
                        var fontName_1 = [];
                        var formats_1 = [];
                        var hasUpdatedActive = false;
                        _this.parent.format.types.forEach(function (item) {
                            formats_1.push(item.value.toLocaleLowerCase());
                        });
                        _this.parent.fontFamily.items.forEach(function (item) {
                            fontName_1.push(item.value);
                        });
                        var toolbarStatus = ToolbarStatus.get(_this.parent.contentModule.getDocument(), _this.parent.contentModule.getEditPanel(), formats_1, null, fontName_1);
                        for (var index = 0; index < args.element.childNodes.length; index++) {
                            var htmlString = dropDown.content.trim();
                            var styleMatch = htmlString.match(/style="([^"]*)"/);
                            var styleValue = '';
                            if (styleMatch) {
                                styleValue = styleMatch[1];
                            }
                            var updatedHtml = htmlString.replace(/ style="([^"]*)"/, '');
                            var divNode = _this.parent.createElement('div');
                            divNode.innerHTML = updatedHtml;
                            var spanElement = divNode.querySelector('span');
                            if (spanElement) {
                                spanElement.style.cssText = styleValue;
                            }
                            if (!hasUpdatedActive && ((divNode.textContent.trim() !== ''
                                && args.element.childNodes[index].textContent.trim() === divNode.textContent.trim()) ||
                                ((args.items[0].command === 'Formats' && !isNOU(toolbarStatus.formats) && _this.parent.format.types[index].value.toLowerCase() === toolbarStatus.formats.toLowerCase() && args.element.childNodes[index].classList.contains(_this.parent.format.types[index].cssClass))
                                    || (args.items[0].subCommand === 'FontName' && args.items[0].command === 'Font' && !isNOU(toolbarStatus.fontname) && !isNOU(_this.parent.fontFamily.items[index]) && _this.parent.fontFamily.items[index].value.toLowerCase() === toolbarStatus.fontname.toLowerCase() && args.element.childNodes[index].classList.contains(_this.parent.fontFamily.items[index].cssClass)))
                                || (((args.items[0].subCommand === 'FontName') && _this.parent.fontFamily.items[index].value === '' && isNullOrUndefined(toolbarStatus.fontname) && args.element.childNodes[index].classList.contains(_this.parent.fontFamily.items[index].cssClass)) ||
                                    ((args.items[0].subCommand === 'FontSize') && args.element.childNodes[index].textContent === 'Default' && divNode.textContent === 'Font Size' && _this.parent.fontSize.items[index].value === '' && !isNullOrUndefined(toolbarStatus.fontsize))))) {
                                if (!args.element.childNodes[index].classList.contains('e-active')) {
                                    addClass([args.element.childNodes[index]], 'e-active');
                                    hasUpdatedActive = true;
                                }
                            }
                            else {
                                removeClass([args.element.childNodes[index]], 'e-active');
                            }
                            if (args.items[0].command === 'LineHeight') {
                                var targetElement = _this.findFirstBlockElement();
                                if (targetElement) {
                                    var lineHeightStyle = targetElement.style.lineHeight;
                                    var numericLineHeight = parseFloat(lineHeightStyle);
                                    var dropdownVSelectedValue = args.items[index].value;
                                    var dummyItem = args.items;
                                    _this.itemValue = dummyItem;
                                    if (numericLineHeight === parseFloat(dropdownVSelectedValue)) {
                                        addClass([args.element.childNodes[index]], 'e-active');
                                        hasUpdatedActive = true;
                                    }
                                }
                                else {
                                    removeClass([args.element.childNodes[index]], 'e-active');
                                }
                            }
                        }
                        if (args.items[0].command === 'LineHeight') {
                            var targetElement = _this.findFirstBlockElement();
                            if (_this.parent.lineHeight.supportAllValues && !hasUpdatedActive && !isNOU(targetElement) && targetElement.style.lineHeight !== '') {
                                _this.lineHeightDropDown = dropDown;
                                hasUpdatedActive = true;
                                var items = [
                                    { text: 'Custom: ' + targetElement.style.lineHeight, value: targetElement.style.lineHeight }
                                ];
                                dropDown.items = args.items.concat(items);
                                dropDown.dataBind();
                                addClass([args.element.childNodes[(args.element.childNodes.length - 1)]], 'e-active');
                            }
                            else if (!hasUpdatedActive) {
                                dropDown.items.forEach(function (item, index) {
                                    var itemValue = parseFloat(item.value);
                                    if (itemValue === parseFloat(_this.parent.lineHeight.default)) {
                                        var matchingChild = args.element.childNodes[index];
                                        addClass([matchingChild], 'e-active');
                                    }
                                });
                                if (isNOU(_this.parent.lineHeight.default)) {
                                    addClass([args.element.childNodes[(0)]], 'e-active');
                                }
                            }
                        }
                    }
                }
                else if (proxy.parent.editorMode === 'Markdown') {
                    if (args.items[0].command === 'Formats') {
                        var formats_2 = [];
                        var hasUpdatedActive = false;
                        _this.parent.format.types.forEach(function (item) {
                            formats_2.push(item.value.toLocaleLowerCase());
                        });
                        var childNodes = args.element.childNodes;
                        for (var index = 0; index < childNodes.length; index++) {
                            var divNode = _this.parent.createElement('div');
                            divNode.innerHTML = dropDown.content.trim();
                            if (!hasUpdatedActive && ((divNode.textContent.trim() !== '' && childNodes[index].textContent.trim() === divNode.textContent.trim()))) {
                                if (!childNodes[index].classList.contains('e-active')) {
                                    addClass([childNodes[index]], 'e-active');
                                    hasUpdatedActive = true;
                                }
                            }
                            else {
                                removeClass([childNodes[index]], 'e-active');
                            }
                        }
                    }
                }
                proxy.parent.notify(events.beforeDropDownOpen, args);
            },
            close: this.dropDownClose.bind(this),
            beforeClose: this.dropDownBeforeClose.bind(this),
            open: this.dropDownOpen.bind(this),
            beforeItemRender: this.beforeDropDownItemRender.bind(this)
        });
        dropDown.isStringTemplate = true;
        dropDown.createElement = proxy.parent.createElement;
        dropDown.isAngular = proxy.parent.isModalDialog;
        dropDown.appendTo(args.element);
        args.element.tabIndex = -1;
        var popupElement = document.getElementById(dropDown.element.id + '-popup');
        this.setAriaLabel(dropDown.element, args.itemName, popupElement);
        popupElement.setAttribute('aria-owns', this.parent.getID());
        return dropDown;
    };
    ToolbarRenderer.prototype.setAriaLabel = function (dropDownElement, itemName, popupElement) {
        var displayLabel = this.itemNameMap[itemName.toLowerCase()] || itemName;
        if (dropDownElement) {
            var currentLabel = dropDownElement.getAttribute('aria-label') || '';
            var dropdownPlaceholders = ['', 'dropdownbutton'];
            var splitPlaceholders = ['', 'splitbutton', 'colorpicker'];
            if (dropdownPlaceholders.indexOf(currentLabel) !== -1) {
                var specialDropdownItems = new Set([
                    'backgroundcolor',
                    'fontcolor',
                    'bulletformatlist',
                    'numberformatlist',
                    'codeblock'
                ]);
                var ariaLabel = specialDropdownItems.has(itemName.toLowerCase())
                    ? "More " + displayLabel + " Options"
                    : "" + displayLabel;
                dropDownElement.setAttribute('aria-label', ariaLabel);
            }
            else if (splitPlaceholders.indexOf(currentLabel) !== -1) {
                dropDownElement.setAttribute('aria-label', "" + displayLabel);
            }
        }
        if (popupElement) {
            var currentPopupLabel = popupElement.getAttribute('aria-label') || '';
            var popupPlaceholders = ['', 'dropdown menu'];
            if (popupPlaceholders.indexOf(currentPopupLabel) !== -1) {
                popupElement.setAttribute('aria-label', displayLabel + " Menu");
            }
        }
    };
    ToolbarRenderer.prototype.findFirstBlockElement = function () {
        var range = this.parent.getRange();
        var targetElement = range.startContainer.nodeType === Node.ELEMENT_NODE
            ? range.startContainer
            : range.startContainer.parentElement;
        // Traverse up to find the closest non-inline element
        while (!this.parent.formatter.editorManager.domNode.isBlockNode(targetElement)) {
            targetElement = targetElement.parentElement;
        }
        return targetElement;
    };
    // Manages code block dropdown menu by detecting if selection is in a code block and highlighting the active language option
    ToolbarRenderer.prototype.handleCodeBlockDropdown = function (args) {
        var range = this.parent.getRange();
        var startContainer = this.parent.formatter.editorManager.codeBlockObj
            .isValidCodeBlockStructure(range.startContainer);
        var endContainer = this.parent.formatter.editorManager.codeBlockObj.
            isValidCodeBlockStructure(range.endContainer);
        var codeBlock = !isNOU(startContainer) || !isNOU(endContainer);
        var codeBlockElement = startContainer || endContainer;
        var currentLanguage = '';
        if (codeBlock) {
            currentLanguage = codeBlockElement.getAttribute('data-language') || '';
            var listItems = args.element.querySelectorAll('li');
            for (var i = 0; i < listItems.length; i++) {
                var itemLanguage = listItems[i].getAttribute('data-language') || listItems[i].textContent.toLowerCase();
                if (currentLanguage.toLowerCase() === itemLanguage) {
                    addClass([listItems[i]], 'e-active');
                }
                else {
                    removeClass([listItems[i]], 'e-active');
                }
            }
        }
    };
    // Handles list formatting dropdown menu by checking current list type and highlighting the active list style option
    ToolbarRenderer.prototype.handleListsDropdown = function (args) {
        // eslint-disable-next-line
        var proxy = this;
        if (proxy.parent.readonly || !proxy.parent.enabled) {
            args.cancel = true;
            return;
        }
        if (Browser.info.name === 'safari' && !proxy.parent.inputElement.contains(proxy.parent.getRange().startContainer)) {
            proxy.parent.notify(events.selectionRestore, {});
        }
        if (proxy.parent.editorMode !== 'Markdown') {
            var range = proxy.parent.getRange();
            if (isNOU(range)) {
                return;
            }
            // Resolve element for start/end (account for text nodes)
            var startEl = (range.startContainer.nodeType === Node.ELEMENT_NODE
                ? range.startContainer : range.startContainer.parentElement);
            var endEl = (range.endContainer.nodeType === Node.ELEMENT_NODE
                ? range.endContainer : range.endContainer.parentElement);
            if (isNOU(startEl) || isNOU(endEl)) {
                return;
            }
            var isCaret = range.startOffset === range.endOffset && range.startContainer === range.endContainer;
            var commonNode = range.commonAncestorContainer;
            var commonIsListish = ['LI', 'UL', 'OL'].indexOf(commonNode.nodeName) >= 0;
            var inSameLi = startEl.closest('li') === endEl.closest('li');
            // Only proceed if the selection context is within a list or within a single LI or a cursor position
            if (!(isCaret || commonIsListish || inSameLi)) {
                return;
            }
            var currentLiElem = void 0;
            if (startEl.nodeName === 'UL' || startEl.nodeName === 'OL') {
                currentLiElem = startEl;
            }
            else {
                var listElem = startEl.closest('LI');
                currentLiElem = !isNOU(listElem) ? listElem.parentElement : null;
            }
            var currentAction = args.items[0].subCommand;
            if (!isNOU(currentLiElem)) {
                // Checks if current action matches the list type (numbered or bulleted)
                var validNumberFormatAction = (currentAction === 'NumberFormatList' && currentLiElem.nodeName === 'OL');
                var validBulletFormatAction = (currentAction === 'BulletFormatList' && currentLiElem.nodeName === 'UL');
                if (validNumberFormatAction || validBulletFormatAction) {
                    var currentListStyle = currentLiElem.style.listStyleType.split('-').join('').toLocaleLowerCase();
                    // Match by item value (CSS list-style-type) not by rendered text, to support custom types.
                    for (var index = 0; index < args.element.childNodes.length; index++) {
                        var itemValue = (args.items[index].value || '').split('-').join('').toLocaleLowerCase();
                        if (currentListStyle !== '' && currentListStyle === itemValue) {
                            // Marks the active list style in the dropdown by value match
                            addClass([args.element.childNodes[index]], 'e-active');
                            break;
                        }
                        else if (currentListStyle === '' && ((validNumberFormatAction && itemValue === 'decimal') ||
                            (validBulletFormatAction && itemValue === 'disc'))) {
                            // Handles default list style case (no explicit list-style-type set)
                            addClass([args.element.childNodes[index]], 'e-active');
                            break;
                        }
                        else {
                            removeClass([args.element.childNodes[index]], 'e-active');
                        }
                    }
                }
            }
        }
    };
    /**
     * renderSplitButton method
     *
     * @param {ISplitButtonModel} args - specifies the the arguments.
     * @returns {void}
     * @hidden
     * @deprecated
     */
    ToolbarRenderer.prototype.renderSplitButton = function (args) {
        var _this = this;
        var css = args.cssClass;
        var splitButton = new SplitButton({
            items: args.items,
            cssClass: css,
            iconCss: args.iconCss,
            enablePersistence: this.parent.enablePersistence,
            enableRtl: this.parent.enableRtl,
            select: this.dropDownSelected.bind(this),
            created: function () {
                var splitBtnDiv = args.element.parentElement;
                if (!splitBtnDiv) {
                    return;
                }
                splitBtnDiv.tabIndex = -1;
            },
            beforeOpen: function (args) {
                _this.closeTooltips();
                args.preventScroll = true;
                if (_this.parent.readonly || !_this.parent.enabled) {
                    args.cancel = true;
                    return;
                }
                if (isNOU(args.items) || args.items.length === 0) {
                    return;
                }
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                if (args.items[0].command === 'CodeBlock') {
                    _this.handleCodeBlockDropdown(args);
                }
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                if (args.items[0].command === 'Lists') {
                    _this.handleListsDropdown(args);
                }
                _this.currentElement = splitButton.element;
                _this.currentDropdown = splitButton;
            },
            close: this.dropDownClose.bind(this),
            beforeClose: this.dropDownBeforeClose.bind(this),
            open: this.dropDownOpen.bind(this),
            beforeItemRender: this.beforeDropDownItemRender.bind(this)
        });
        splitButton.isAngular = this.parent.isModalDialog;
        splitButton.appendTo(args.element);
        var popupElement = document.getElementById(splitButton.element.id + '_dropdownbtn-popup');
        if (splitButton.element && splitButton.element.parentElement) {
            var dropdownElement = splitButton.element.parentElement.querySelectorAll('button')[1];
            if (dropdownElement) {
                this.setAriaLabel(dropdownElement, args.itemName);
            }
        }
        this.setAriaLabel(splitButton.element, args.itemName, popupElement);
        popupElement.setAttribute('aria-owns', this.parent.getID());
        return splitButton;
    };
    /**
     * renderColorPicker method
     *
     * @param {IColorPickerModel} args - specifies the arguments
     * @param {string} item - specifies the string values
     * @param {string} toolbarType - Specifies the type of toolbar triggering the color picker.
     * @returns {void}
     * @hidden
     * @deprecated
     */
    ToolbarRenderer.prototype.renderColorPicker = function (args, item, toolbarType) {
        var _this = this;
        // eslint-disable-next-line
        var proxy = this;
        var colorValue;
        var editTablecolorpicker = false;
        if (item === 'bordercolor' || item === 'tablebackgroundcolor') {
            colorValue = args.value;
            editTablecolorpicker = true;
        }
        else {
            colorValue = (isNullOrUndefined(this.defaultColorPicker)) ?
                (item === 'backgroundcolor') ? proxy.parent.backgroundColor.default : proxy.parent.fontColor.default : this.defaultColorPicker;
        }
        var colorPicker = new ColorPicker({
            enableRtl: this.parent.enableRtl,
            inline: false,
            value: colorValue,
            showButtons: false,
            cssClass: args.cssClass,
            disabled: !this.parent.enabled,
            created: function () {
                var _a, _b, _c;
                var colorPickerDiv = args.element.parentElement;
                if (!colorPickerDiv) {
                    return;
                }
                colorPickerDiv.tabIndex = -1;
                var colorPickerSplitDiv = colorPickerDiv.childNodes[1];
                if (!colorPickerSplitDiv) {
                    return;
                }
                (_a = colorPickerSplitDiv.classList).add.apply(_a, args.cssClass.split(' '));
                var colorPickerElem = colorPickerDiv.querySelector('.e-split-colorpicker');
                if (!colorPickerElem) {
                    return;
                }
                (_b = colorPickerElem.classList).add.apply(_b, args.cssClass.split(' '));
                var dropdownBtn = colorPickerDiv.querySelector('.e-dropdown-btn');
                if (dropdownBtn) {
                    (_c = dropdownBtn.classList).add.apply(_c, args.cssClass.split(' '));
                }
            },
            mode: ((item === 'backgroundcolor') ? proxy.parent.backgroundColor.mode : proxy.parent.fontColor.mode),
            modeSwitcher: ((item === 'backgroundcolor') ? proxy.parent.backgroundColor.modeSwitcher : proxy.parent.fontColor.modeSwitcher),
            showRecentColors: ((toolbarType === 'quick' && !editTablecolorpicker) ? false : (editTablecolorpicker) ? true : ((item === 'backgroundcolor') ? proxy.parent.backgroundColor.showRecentColors : proxy.parent.fontColor.showRecentColors)),
            presetColors: (item === 'backgroundcolor') ? this.parent.backgroundColor.colorCode : this.parent.fontColor.colorCode,
            columns: (item === 'backgroundcolor') ? this.parent.backgroundColor.columns : this.parent.fontColor.columns,
            beforeTileRender: function (args) {
                args.element.classList.add(classes.CLS_COLOR_PALETTE);
                args.element.classList.add(CLS_CUSTOM_TILE);
                if (!isNullOrUndefined(_this.parent.cssClass)) {
                    var allClassName = _this.parent.getCssClass().split(' ');
                    for (var i = 0; i < allClassName.length; i++) {
                        if (allClassName[i].trim() !== '') {
                            args.element.classList.add(allClassName[i]);
                        }
                    }
                }
                if (args.value === '') {
                    args.element.classList.add(CLS_NOCOLOR_ITEM);
                }
            },
            beforeOpen: function () {
                _this.closeTooltips();
                if ((proxy.parent.userAgentData.isSafari() || !proxy.parent.userAgentData.isSafari()) &&
                    _this.parent.formatter.editorManager.nodeSelection &&
                    _this.parent.inputElement.contains(_this.parent.getRange().startContainer) && !editTablecolorpicker) {
                    proxy.parent.notify(events.selectionSave, {});
                    _this.rangeStore = true;
                }
                colorPicker.showButtons = colorPicker.mode === 'Picker' ? true : false;
            },
            change: function (colorPickerArgs) {
                if (_this.rangeStore && !editTablecolorpicker) {
                    proxy.parent.notify(events.selectionRestore, {});
                    _this.rangeStore = false;
                }
                if ((!proxy.parent.userAgentData.isSafari() ||
                    (proxy.parent.userAgentData.isSafari() && _this.parent.formatter.editorManager.nodeSelection &&
                        _this.parent.inputElement.contains(_this.parent.getRange().startContainer))) && !editTablecolorpicker) {
                    proxy.parent.notify(events.selectionSave, {});
                }
                var colorpickerValue = colorPickerArgs.currentValue.rgba;
                colorPickerArgs.item = {
                    command: args.command,
                    subCommand: args.subCommand,
                    value: colorpickerValue
                };
                if (!editTablecolorpicker) {
                    proxy.parent.notify(events.selectionRestore, {});
                }
                var range = proxy.parent.formatter.editorManager.nodeSelection.getRange(proxy.parent.contentModule.getDocument());
                var closestElement = closest(range.startContainer.parentNode, 'table');
                if (!editTablecolorpicker && (range.startContainer.nodeName === 'TD' || range.startContainer.nodeName === 'TH' || range.startContainer.nodeName === 'BODY' ||
                    (range.startContainer.parentNode && closest(range.startContainer.parentNode, 'td,th'))) && range.collapsed && args.subCommand === 'BackgroundColor' && (closestElement && closest(closestElement, '.' + classes.CLS_RTE) || proxy.parent.iframeSettings.enable)
                    && toolbarType === 'quick') {
                    _this.defaultColorPicker = colorPickerArgs.currentValue.hex;
                    colorPickerArgs.name = 'tableColorPickerChanged';
                    colorPickerArgs.item.command = 'Table';
                    proxy.parent.formatter.process(_this.parent, colorPickerArgs, colorPickerArgs.event, colorPickerArgs.item.value);
                }
                else {
                    proxy.parent.notify(events.colorPickerChanged, colorPickerArgs);
                }
            },
            beforeModeSwitch: function (args) {
                colorValue = colorPicker.value;
                if (colorValue === '') {
                    colorPicker.setProperties({ value: ((args.mode === 'Picker') ? '#008000ff' : '') }, true);
                }
                colorPicker.showButtons = args.mode === 'Palette' ? false : true;
            },
            beforeClose: this.dropDownClose.bind(this)
        });
        colorPicker.isAngular = this.parent.isModalDialog;
        colorPicker.isStringTemplate = true;
        colorPicker.createElement = this.parent.createElement;
        colorPicker.appendTo(args.element);
        if (colorPicker.element && colorPicker.element.parentElement) {
            var splitButton = colorPicker.element.parentElement.querySelectorAll('button')[0];
            var dropDownButton = colorPicker.element.parentElement.querySelectorAll('button')[1];
            if (splitButton) {
                this.setAriaLabel(splitButton, item);
            }
            if (dropDownButton) {
                var popupElement = document.getElementById(dropDownButton.id + '-popup');
                this.setAriaLabel(dropDownButton, item, popupElement);
            }
        }
        this.setAriaLabel(colorPicker.element, item);
        args.element.setAttribute('role', 'button');
        return colorPicker;
    };
    ToolbarRenderer.prototype.renderMenu = function (args) {
        var dropDown = new DropDownButton({
            target: args.dropDownItems.target,
            iconCss: !isNOU(args.dropDownItems.iconCss) ? args.dropDownItems.iconCss : '',
            content: !isNOU(args.dropDownItems.content) ? args.dropDownItems.content : '',
            cssClass: args.dropDownItems.cssClass,
            enableRtl: this.parent.enableRtl,
            beforeOpen: this.menueDropDownBeforeOpen.bind(this),
            beforeClose: this.menueDropDownBeforeClose.bind(this),
            select: this.menuItemSelected.bind(this)
        });
        dropDown.isAngular = this.parent.isModalDialog;
        dropDown.appendTo(args.dropDownRoot);
        var menu = new Menu({
            orientation: 'Vertical',
            items: args.menuItems.items,
            cssClass: 'e-rte-' + args.name + '-menu' + ' e-rte-menu ' + classes.CLS_RTE_ELEMENTS + this.parent.getCssClass(true),
            enableRtl: this.parent.enableRtl,
            beforeOpen: this.menuBeforeOpen.bind(this),
            beforeClose: this.menuBeforeClose.bind(this),
            select: this.menuItemSelected.bind(this),
            enablePersistence: this.parent.enablePersistence
        });
        if (this.parent.element.dataset.rteUnitTesting === 'true') {
            menu.animationSettings = { effect: 'None', duration: 0 };
            dropDown.animationSettings = { effect: 'None', duration: 0 };
        }
        menu.isAngular = this.parent.isModalDialog;
        menu.appendTo(args.menuRoot);
        var popupElement = document.getElementById(dropDown.element.id + '-popup');
        this.setAriaLabel(dropDown.element, args.name, popupElement);
        return { menu: menu, dropDownButton: dropDown };
    };
    ToolbarRenderer.prototype.menuItemSelected = function (args) {
        this.parent.notify(events.menuItemselected, { element: args.element, item: args.item, originalEvent: args.event });
    };
    ToolbarRenderer.prototype.menuBeforeOpen = function (args) {
        if (!(args.element.classList.contains('e-menu-parent') && args.element.parentElement.id.indexOf(this.parent.getID() + '_QueryPopupCommandsMenu-popup') !== -1)) {
            this.parent.notify(events.selectionSave, args);
        }
        this.parent.notify(events.menuBeforeOpen, args);
    };
    ToolbarRenderer.prototype.menuBeforeClose = function (args) {
        if (!(args.element.classList.contains('e-menu-parent') && args.element.parentElement.id.indexOf(this.parent.getID() + '_QueryPopupCommandsMenu-popup') !== -1)) {
            this.parent.notify(events.selectionRestore, args);
        }
        this.parent.notify(events.menuBeforeClose, args);
    };
    ToolbarRenderer.prototype.menueDropDownBeforeOpen = function (args) {
        this.closeTooltips();
        if (!(args.element.classList.contains('e-rte-aicommands-menu') && args.element.parentElement.id === this.parent.getID() + '_QueryPopupCommandsDropDown-popup')) {
            this.parent.notify(events.selectionSave, args);
        }
        this.parent.notify(events.menuBeforeOpen, args);
    };
    ToolbarRenderer.prototype.menueDropDownBeforeClose = function (args) {
        if (!(args.element.classList.contains('e-rte-aicommands-menu') && args.element.parentElement.id === this.parent.getID() + '_QueryPopupCommandsDropDown-popup')) {
            this.parent.notify(events.selectionRestore, args);
        }
        this.parent.notify(events.menuBeforeClose, args);
    };
    /**
     * The function is used to render Rich Text Editor toolbar
     *
     * @returns {void}
     * @hidden
     * @deprecated
     */
    ToolbarRenderer.prototype.renderPanel = function () {
        this.getPanel().classList.add(CLS_TOOLBAR);
    };
    /**
     * Get the toolbar element of RichTextEditor
     *
     * @returns {Element} - specifies the element.
     * @hidden
     * @deprecated
     */
    ToolbarRenderer.prototype.getPanel = function () {
        return this.toolbarPanel;
    };
    /**
     * Set the toolbar element of RichTextEditor
     *
     * @returns {void}
     * @param  {Element} panel - specifies the element.
     * @hidden
     * @deprecated
     */
    ToolbarRenderer.prototype.setPanel = function (panel) {
        this.toolbarPanel = panel;
    };
    ToolbarRenderer.prototype.closeTooltips = function () {
        if (this.parent.showTooltip) {
            if (!isNOU(this.tooltip)) {
                var closeAnimation = { effect: 'None', duration: 0, delay: 0 };
                this.tooltip.close(closeAnimation);
            }
            if (!isNOU(this.parent.quickToolbarModule)) {
                this.parent.quickToolbarModule.closeTooltip();
            }
        }
    };
    ToolbarRenderer.prototype.destroy = function () {
        if (this.isDestroyed) {
            return;
        }
        if (this.tooltip && !this.tooltip.isDestroyed) {
            this.tooltip.destroy();
            var tooltipElements = document.querySelectorAll('[data-rte-id="' + this.parent.getID() + '"]');
            for (var i = 0; i < tooltipElements.length; i++) {
                var tooltipEle = tooltipElements[i];
                if (this.parent.getID() === tooltipEle.getAttribute('data-rte-id')) {
                    detach(tooltipEle);
                }
            }
        }
        if (this.mode === 'Extended') {
            var extendedToolbarElement = this.toolbarPanel.querySelector('.e-expended-nav');
            if (extendedToolbarElement) {
                EventHandler.remove(extendedToolbarElement, 'mousedown', this.extendedToolbarMouseDownHandler);
            }
        }
        this.unWireEvent();
        this.mode = null;
        this.defaultColorPicker = null;
        this.toolbarPanel = null;
        this.currentElement = null;
        this.currentDropdown = null;
        this.tooltip = null;
        this.tooltipTargetEle = null;
        this.isDestroyed = true;
    };
    return ToolbarRenderer;
}());
export { ToolbarRenderer };
