import { ContextMenu } from '@syncfusion/ej2-navigations';
import { BlockEditor } from '../base/blockeditor';
import { BlockEditorModel } from '../base/blockeditor-model';
/**
 * `ContextMenuModule` is used to handle the context menu actions in the BlockEditor.
 *
 * @hidden
 */
export declare class ContextMenuModule {
    private editor;
    contextMenuObj: ContextMenu;
    private menuElement;
    private isTableContextActive;
    private isLinkContextActive;
    constructor(editor: BlockEditor);
    private addEventListeners;
    private removeEventListeners;
    private init;
    private getMenuItems;
    /**
     * Builds default menu items only (no table items).
     * Table items are injected dynamically in handleContextMenuBeforeOpen when in table context.
     *
     * @returns {ContextMenuItemModel[]} - Default menu items only.
     * @private
     */
    private buildAllMenuItems;
    /**
     * Resolves table items from contextMenuSettings or falls back to defaults.
     *
     * @returns {ContextMenuItemModel[]} - Resolved table menu items.
     * @private
     */
    private getResolvedTableItems;
    /**
     * Checks whether table items are currently present in the context menu.
     *
     * @returns {boolean} - True if table items exist in menu, false otherwise.
     * @private
     */
    private hasTableItems;
    /**
     * Dynamically adds table items to the context menu before the link item.
     *
     * @returns {void}
     * @private
     */
    private addTableItemsToMenu;
    /**
     * Dynamically removes table items and their associated separator from the context menu.
     *
     * @returns {void}
     * @private
     */
    private removeTableItemsFromMenu;
    /**
     * Removes consecutive or trailing separators that may be left after table items are removed.
     *
     * @returns {void}
     * @private
     */
    private cleanDanglingSeperators;
    /**
     * Returns the IDs of all known table menu items.
     *
     * @returns {string[]} - Array of table item IDs.
     * @private
     */
    private getTableItemIds;
    /**
     * Returns the IDs of all known link context menu items.
     *
     * @returns {string[]} - Array of link item IDs.
     * @private
     */
    private getLinkItemIds;
    /**
     * Resolves link items from contextMenuSettings or falls back to defaults.
     *
     * @returns {ContextMenuItemModel[]} - Resolved link menu items.
     * @private
     */
    private getResolvedLinkItems;
    /**
     * Checks whether link items are currently present in the context menu.
     *
     * @returns {boolean} - True if link items exist in menu, false otherwise.
     * @private
     */
    private hasLinkItems;
    /**
     * Dynamically adds link items to the context menu.
     * Link items replace the default items so only link options are shown when right-clicking a link.
     *
     * @returns {void}
     * @private
     */
    private addLinkItemsToMenu;
    /**
     * Dynamically removes link items and their associated separator from the context menu.
     *
     * @returns {void}
     * @private
     */
    private removeLinkItemsFromMenu;
    private handleContextMenuBeforeOpen;
    /**
     * Filters insert submenu items dynamically based on header cell context.
     * Only called when in table context.
     *
     * @returns {void}
     * @private
     */
    private filterTableMenuItems;
    /**
     * Checks if the context menu was triggered on a table block.
     * Only returns true when right-clicking directly on table cells (td/th), not just anywhere in the table.
     * Reads directly from the event target DOM — no dependency on focus state.
     *
     * @param {Event} event - The event that triggered the context menu.
     * @returns {boolean} - True if on a table cell (td/th), false otherwise.
     * @private
     */
    private isClickOnTable;
    /**
     * Checks if the context menu was triggered on a link element.
     *
     * @param {Event} event - The event that triggered the context menu.
     * @returns {boolean} - True if on a link, false otherwise.
     * @private
     */
    private isClickOnLink;
    private handleContextMenuBeforeClose;
    private handleContextMenuOpen;
    private handleContextMenuClose;
    private handleContextMenuSelection;
    private enableMenuItems;
    /**
     * For internal use only - Get the module name.
     *
     * @returns {void}
     * @hidden
     */
    private getModuleName;
    /**
     * Destroys the ContextMenu module.
     *
     * @returns {void}
     */
    destroy(): void;
    /**
     * Called internally if any of the property value changed.
     *
     * @param {BlockEditorModel} e - specifies the element.
     * @returns {void}
     * @hidden
     */
    protected onPropertyChanged(e: {
        [key: string]: BlockEditorModel;
    }): void;
}
