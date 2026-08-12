import { detach, isNullOrUndefined } from '@syncfusion/ej2-base';
import { getContextMenuItems, getDefaultTableItems, getDefaultLinkItems } from '../../common/utils/data';
import { events } from '../../common/constant';
import { sanitizeContextMenuItems } from '../../common/utils/transform';
import * as constants from '../../common/constant';
/**
 * `ContextMenuModule` is used to handle the context menu actions in the BlockEditor.
 *
 * @hidden
 */
var ContextMenuModule = /** @class */ (function () {
    function ContextMenuModule(editor) {
        this.isTableContextActive = false;
        this.isLinkContextActive = false;
        this.editor = editor;
        this.init();
        this.addEventListeners();
    }
    ContextMenuModule.prototype.addEventListeners = function () {
        this.editor.on(events.moduleChanged, this.onPropertyChanged, this);
        this.editor.blockManager.observer.on('enableDisableContextMenuItems', this.enableMenuItems, this);
        this.editor.on(events.destroy, this.destroy, this);
    };
    ContextMenuModule.prototype.removeEventListeners = function () {
        this.editor.off(events.moduleChanged, this.onPropertyChanged);
        this.editor.blockManager.observer.off('enableDisableContextMenuItems', this.enableMenuItems);
        this.editor.off(events.destroy, this.destroy);
    };
    ContextMenuModule.prototype.init = function () {
        this.menuElement = this.editor.createElement('ul', {
            id: (this.editor.element.id + constants.BLOCKEDITOR_CONTEXTMENU_ID)
        });
        document.body.appendChild(this.menuElement);
        var itemTemplate = '${if(!separator)}' +
            '<div class="e-ctmenu-item-template">' +
            '<div class="e-ctmenu-content">' +
            '<span class="e-ctmenu-icon ${iconCss}"></span>' +
            '<span class="e-ctmenu-text">${text}</span>' +
            '</div>' +
            '${if(shortcut)}' +
            '<div class="e-ctmenu-shortcut">${shortcut}</div>' +
            '${/if}' +
            '</div>' +
            '${/if}';
        this.contextMenuObj = this.editor.menubarRenderer.renderContextMenu({
            target: '#' + this.editor.element.id,
            cssClass: constants.BLOCKEDITOR_CONTEXTMENU_CLS,
            element: this.menuElement,
            items: this.getMenuItems(),
            showItemOnClick: this.editor.contextMenuSettings.showItemOnClick,
            itemTemplate: itemTemplate,
            fields: { text: 'text', iconCss: 'iconCss', itemId: 'id' },
            select: this.handleContextMenuSelection.bind(this),
            beforeOpen: this.handleContextMenuBeforeOpen.bind(this),
            beforeClose: this.handleContextMenuBeforeClose.bind(this),
            open: this.handleContextMenuOpen.bind(this),
            close: this.handleContextMenuClose.bind(this)
        });
        this.removeTableItemsFromMenu();
        this.editor.blockManager.observer.notify('contextMenuCreated');
    };
    ContextMenuModule.prototype.getMenuItems = function () {
        // Return only default items; table items are added/removed dynamically in beforeOpen
        var defaultItems = this.editor.contextMenuSettings.items.length > 0
            ? sanitizeContextMenuItems(this.editor.contextMenuSettings.items)
            : this.buildAllMenuItems();
        if (this.editor.contextMenuSettings.items.length <= 0) {
            var prevOnChange = this.editor.isProtectedOnChange;
            this.editor.isProtectedOnChange = true;
            this.editor.contextMenuSettings.items = defaultItems;
            this.editor.isProtectedOnChange = prevOnChange;
        }
        return defaultItems;
    };
    /**
     * Builds default menu items only (no table items).
     * Table items are injected dynamically in handleContextMenuBeforeOpen when in table context.
     *
     * @returns {ContextMenuItemModel[]} - Default menu items only.
     * @private
     */
    ContextMenuModule.prototype.buildAllMenuItems = function () {
        return getContextMenuItems();
    };
    /**
     * Resolves table items from contextMenuSettings or falls back to defaults.
     *
     * @returns {ContextMenuItemModel[]} - Resolved table menu items.
     * @private
     */
    ContextMenuModule.prototype.getResolvedTableItems = function () {
        var tableItems = [];
        if (this.editor.contextMenuSettings.table && this.editor.contextMenuSettings.table.length > 0 &&
            this.editor.blockManager.contextMenuModule) {
            tableItems = this.editor.blockManager.contextMenuModule.resolveTableItems(this.editor.contextMenuSettings.table);
        }
        else {
            tableItems = getDefaultTableItems(this.editor.blockManager.localeJson);
        }
        return tableItems.filter(function (item) { return item !== undefined && item !== null; });
    };
    /**
     * Checks whether table items are currently present in the context menu.
     *
     * @returns {boolean} - True if table items exist in menu, false otherwise.
     * @private
     */
    ContextMenuModule.prototype.hasTableItems = function () {
        if (!this.contextMenuObj || !this.contextMenuObj.items) {
            return false;
        }
        return this.contextMenuObj.items.some(function (item) { return item.id === 'table-insert' || item.id === 'table-delete'; });
    };
    /**
     * Dynamically adds table items to the context menu before the link item.
     *
     * @returns {void}
     * @private
     */
    ContextMenuModule.prototype.addTableItemsToMenu = function () {
        if (!this.contextMenuObj || !this.contextMenuObj.items || this.hasTableItems()) {
            return;
        }
        var tableItems = this.getResolvedTableItems();
        if (tableItems.length === 0) {
            return;
        }
        var separator = { id: 'table-separator', separator: true };
        var linkItem = this.contextMenuObj.items.find(function (item) { return item.id === 'link'; });
        if (linkItem) {
            this.contextMenuObj.insertBefore(tableItems.concat([separator]), 'link', true);
        }
        else {
            var lastItem = this.contextMenuObj.items[this.contextMenuObj.items.length - 1];
            this.contextMenuObj.insertAfter([separator].concat(tableItems), lastItem.id, true);
        }
    };
    /**
     * Dynamically removes table items and their associated separator from the context menu.
     *
     * @returns {void}
     * @private
     */
    ContextMenuModule.prototype.removeTableItemsFromMenu = function () {
        if (!this.contextMenuObj || !this.contextMenuObj.items || !this.hasTableItems()) {
            return;
        }
        var tableItemIds = this.getTableItemIds();
        var presentIds = this.contextMenuObj.items
            .filter(function (item) { return tableItemIds.indexOf(item.id) !== -1; })
            .map(function (item) { return item.id; });
        if (presentIds.length > 0) {
            this.contextMenuObj.removeItems(presentIds.concat(['table-separator']), true);
        }
        this.cleanDanglingSeperators();
    };
    /**
     * Removes consecutive or trailing separators that may be left after table items are removed.
     *
     * @returns {void}
     * @private
     */
    ContextMenuModule.prototype.cleanDanglingSeperators = function () {
        if (!this.contextMenuObj || !this.contextMenuObj.items) {
            return;
        }
        var lastWasSeparator = true;
        var newItems = this.contextMenuObj.items.filter(function (item) {
            var isSep = item.separator === true;
            if (isSep && lastWasSeparator) {
                return false;
            }
            lastWasSeparator = isSep;
            return true;
        });
        var last = newItems[newItems.length - 1];
        if (last && last.separator === true) {
            newItems = newItems.slice(0, -1);
        }
        this.contextMenuObj.items = newItems;
    };
    /**
     * Returns the IDs of all known table menu items.
     *
     * @returns {string[]} - Array of table item IDs.
     * @private
     */
    ContextMenuModule.prototype.getTableItemIds = function () {
        return [
            'table-separator',
            'table-insert',
            'table-insert-column-left',
            'table-insert-column-right',
            'table-insert-row-above',
            'table-insert-row-below',
            'table-delete',
            'table-delete-column',
            'table-delete-row',
            'table-delete-table'
        ];
    };
    /**
     * Returns the IDs of all known link context menu items.
     *
     * @returns {string[]} - Array of link item IDs.
     * @private
     */
    ContextMenuModule.prototype.getLinkItemIds = function () {
        return ['link-separator', 'link-edit', 'link-copy', 'link-open', 'link-remove'];
    };
    /**
     * Resolves link items from contextMenuSettings or falls back to defaults.
     *
     * @returns {ContextMenuItemModel[]} - Resolved link menu items.
     * @private
     */
    ContextMenuModule.prototype.getResolvedLinkItems = function () {
        var linkItems = [];
        if (this.editor.contextMenuSettings.link && this.editor.contextMenuSettings.link.length > 0 &&
            this.editor.blockManager.contextMenuModule) {
            linkItems = this.editor.blockManager.contextMenuModule.resolveLinkItems(this.editor.contextMenuSettings.link);
        }
        else {
            linkItems = getDefaultLinkItems(this.editor.blockManager.localeJson);
        }
        return linkItems.filter(function (item) { return item !== undefined && item !== null; });
    };
    /**
     * Checks whether link items are currently present in the context menu.
     *
     * @returns {boolean} - True if link items exist in menu, false otherwise.
     * @private
     */
    ContextMenuModule.prototype.hasLinkItems = function () {
        var _this = this;
        if (!this.contextMenuObj || !this.contextMenuObj.items) {
            return false;
        }
        return this.contextMenuObj.items.some(function (item) { return _this.getLinkItemIds().indexOf(item.id) !== -1; });
    };
    /**
     * Dynamically adds link items to the context menu.
     * Link items replace the default items so only link options are shown when right-clicking a link.
     *
     * @returns {void}
     * @private
     */
    ContextMenuModule.prototype.addLinkItemsToMenu = function () {
        if (!this.contextMenuObj || !this.contextMenuObj.items || this.hasLinkItems()) {
            return;
        }
        var linkItems = this.getResolvedLinkItems();
        if (linkItems.length === 0) {
            return;
        }
        var separator = { id: 'link-separator', separator: true };
        var linkItem = this.contextMenuObj.items.find(function (item) { return item.id === 'link'; });
        if (linkItem) {
            this.contextMenuObj.insertBefore(linkItems.concat([separator]), 'link', true);
        }
        else {
            var lastItem = this.contextMenuObj.items[this.contextMenuObj.items.length - 1];
            this.contextMenuObj.insertAfter([separator].concat(linkItems), lastItem.id, true);
        }
    };
    /**
     * Dynamically removes link items and their associated separator from the context menu.
     *
     * @returns {void}
     * @private
     */
    ContextMenuModule.prototype.removeLinkItemsFromMenu = function () {
        if (!this.contextMenuObj || !this.contextMenuObj.items || !this.hasLinkItems()) {
            return;
        }
        var linkItemIds = this.getLinkItemIds();
        var presentIds = this.contextMenuObj.items
            .filter(function (item) { return linkItemIds.indexOf(item.id) !== -1; })
            .map(function (item) { return item.id; });
        if (presentIds.length > 0) {
            this.contextMenuObj.removeItems(presentIds.concat(['link-separator']), true);
        }
        this.cleanDanglingSeperators();
    };
    ContextMenuModule.prototype.handleContextMenuBeforeOpen = function (args) {
        var isRootOpen = isNullOrUndefined(args.parentItem);
        if (isRootOpen) {
            this.isTableContextActive = false;
            this.isLinkContextActive = false;
            var triggerEvent = args.event;
            if (triggerEvent && triggerEvent.type === 'contextmenu') {
                this.isTableContextActive = this.isClickOnTable(args.event);
                this.isLinkContextActive = this.isClickOnLink(args.event);
            }
        }
        var eventArgs = {
            event: args.event,
            items: this.editor.contextMenuSettings.items,
            parentItem: args.parentItem,
            cancel: !this.editor.contextMenuSettings.enable
        };
        if (this.editor.contextMenuSettings.beforeOpen) {
            this.editor.contextMenuSettings.beforeOpen.call(this, eventArgs);
        }
        args.cancel = eventArgs.cancel;
        if (this.editor.readOnly) {
            args.cancel = true;
        }
        if (!args.cancel) {
            if (isRootOpen) {
                // Always clean up both contexts first to prevent state corruption
                // This ensures proper transition between link and table contexts
                this.removeLinkItemsFromMenu();
                this.removeTableItemsFromMenu();
                // Then add items for the current context
                if (this.isTableContextActive) {
                    this.addTableItemsToMenu();
                }
                if (this.isLinkContextActive) {
                    this.addLinkItemsToMenu();
                }
                this.editor.blockManager.observer.notify('contextMenuBeforeOpen', args);
            }
            if (this.isTableContextActive) {
                this.filterTableMenuItems();
            }
        }
    };
    /**
     * Filters insert submenu items dynamically based on header cell context.
     * Only called when in table context.
     *
     * @returns {void}
     * @private
     */
    ContextMenuModule.prototype.filterTableMenuItems = function () {
        if (!this.contextMenuObj || !this.contextMenuObj.items) {
            return;
        }
        var tableInsertItem = this.contextMenuObj.items.find(function (item) { return item.id === 'table-insert'; });
        if (tableInsertItem && tableInsertItem.items) {
            var contextMenuModule = this.editor.blockManager.contextMenuModule;
            var isHeaderCell = contextMenuModule.isHeaderCellActive();
            var insertItems = [
                {
                    id: 'table-insert-column-left',
                    text: this.editor.l10n.getConstant('insertColumnLeft'),
                    iconCss: 'e-icons e-insert-left'
                },
                {
                    id: 'table-insert-column-right',
                    text: this.editor.l10n.getConstant('insertColumnRight'),
                    iconCss: 'e-icons e-insert-right'
                },
                {
                    id: 'table-insert-row-above',
                    text: this.editor.l10n.getConstant('insertRowAbove'),
                    iconCss: 'e-icons e-insert-above'
                },
                {
                    id: 'table-insert-row-below',
                    text: this.editor.l10n.getConstant('insertRowBelow'),
                    iconCss: 'e-icons e-insert-below'
                }
            ];
            // Hide 'row above' for header cells
            tableInsertItem.items = isHeaderCell
                ? insertItems.filter(function (item) { return item.id !== 'table-insert-row-above'; })
                : insertItems;
        }
    };
    /**
     * Checks if the context menu was triggered on a table block.
     * Only returns true when right-clicking directly on table cells (td/th), not just anywhere in the table.
     * Reads directly from the event target DOM — no dependency on focus state.
     *
     * @param {Event} event - The event that triggered the context menu.
     * @returns {boolean} - True if on a table cell (td/th), false otherwise.
     * @private
     */
    ContextMenuModule.prototype.isClickOnTable = function (event) {
        if (!event || !event.target) {
            return false;
        }
        var target = event.target;
        // Only show table options when clicking directly on cells (td or th), not just anywhere in the table block
        if (target.closest('td') || target.closest('th')) {
            return true;
        }
        return false;
    };
    /**
     * Checks if the context menu was triggered on a link element.
     *
     * @param {Event} event - The event that triggered the context menu.
     * @returns {boolean} - True if on a link, false otherwise.
     * @private
     */
    ContextMenuModule.prototype.isClickOnLink = function (event) {
        if (!event || !event.target) {
            return false;
        }
        var target = event.target;
        return !!target.closest('a');
    };
    ContextMenuModule.prototype.handleContextMenuBeforeClose = function (args) {
        var eventArgs = {
            event: args.event,
            items: this.editor.contextMenuSettings.items,
            parentItem: args.parentItem,
            cancel: false
        };
        if (this.editor.contextMenuSettings.beforeClose) {
            this.editor.contextMenuSettings.beforeClose.call(this, eventArgs);
        }
        args.cancel = eventArgs.cancel;
    };
    ContextMenuModule.prototype.handleContextMenuOpen = function (args) {
        this.editor.blockManager.observer.notify('updateContextMenuState', { value: { isOpen: true } });
    };
    ContextMenuModule.prototype.handleContextMenuClose = function (args) {
        this.isTableContextActive = false;
        this.isLinkContextActive = false;
        this.editor.blockManager.observer.notify('updateContextMenuState', { value: { isOpen: false } });
        this.editor.blockManager.observer.notify('contextMenuAfterClose', {});
    };
    ContextMenuModule.prototype.handleContextMenuSelection = function (args) {
        var clickEventArgs = {
            item: args.item,
            event: args.event,
            cancel: false
        };
        if (this.editor.contextMenuSettings.itemSelect) {
            this.editor.contextMenuSettings.itemSelect.call(this, clickEventArgs);
        }
        if (!clickEventArgs.cancel) {
            this.editor.blockManager.observer.notify('contextMenuSelection', args);
        }
    };
    ContextMenuModule.prototype.enableMenuItems = function (menuState) {
        var _this = this;
        if (this.contextMenuObj) {
            var itemIds = Object.keys(menuState);
            itemIds.forEach(function (item) {
                _this.contextMenuObj.enableItems([item], menuState[item], true);
            });
        }
    };
    /**
     * For internal use only - Get the module name.
     *
     * @returns {void}
     * @hidden
     */
    ContextMenuModule.prototype.getModuleName = function () {
        return 'contextMenuSettings';
    };
    /**
     * Destroys the ContextMenu module.
     *
     * @returns {void}
     */
    ContextMenuModule.prototype.destroy = function () {
        if (this.contextMenuObj) {
            this.removeTableItemsFromMenu();
            this.contextMenuObj.destroy();
            this.contextMenuObj = null;
            detach(this.menuElement);
            this.menuElement = null;
        }
        this.isTableContextActive = false;
        this.isLinkContextActive = false;
        this.removeEventListeners();
    };
    /**
     * Called internally if any of the property value changed.
     *
     * @param {BlockEditorModel} e - specifies the element.
     * @returns {void}
     * @hidden
     */
    ContextMenuModule.prototype.onPropertyChanged = function (e) {
        if (e.module !== this.getModuleName()) {
            return;
        }
        var newProp = e.newProp.contextMenuSettings;
        if (!isNullOrUndefined(newProp)) {
            for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
                var prop = _a[_i];
                switch (prop) {
                    case 'showItemOnClick':
                        this.contextMenuObj.showItemOnClick = this.editor.blockManager.contextMenuSettings.showItemOnClick =
                            newProp.showItemOnClick;
                        break;
                    case 'items':
                        this.contextMenuObj.items = this.editor.blockManager.contextMenuSettings.items =
                            sanitizeContextMenuItems(newProp.items);
                        break;
                    case 'itemTemplate':
                        this.contextMenuObj.itemTemplate = newProp.itemTemplate;
                        break;
                }
            }
        }
    };
    return ContextMenuModule;
}());
export { ContextMenuModule };
