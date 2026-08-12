import { ContextMenuItemModel } from '../../../models/index';
import { BlockManager } from '../../base/block-manager';
import { TableCommandName, LinkCommandName } from '../../../models/types';
/**
 * `ContextMenuModule` is used to handle the context menu actions in the BlockEditor.
 *
 * @hidden
 */
export declare class ContextMenuModule {
    private parent;
    private isPopupOpened;
    private isClipboardEmptyCache;
    private shortcutMap;
    private cellInfo;
    private isHeaderCell;
    private clickedLinkElement;
    private pendingFocusRestore;
    constructor(manager: BlockManager);
    private addEventListeners;
    private removeEventListeners;
    private handleContextMenuCreated;
    private buildShortcutMap;
    private onKeyDown;
    private handleContextMenuBeforeOpen;
    private updateContextMenuPopupState;
    private handleContextMenuAfterClose;
    private handleContextMenuSelection;
    private handleIndentationAction;
    private handleTableOperation;
    private restoreCellFocusAfterTableOperation;
    private handleContextMenuActions;
    private toggleDisabledItems;
    /**
     * Resolves custom table items from contextMenuSettings into a normalized ContextMenuItemModel array.
     *
     * @param {Array} items - The raw table items.
     * @returns {Array} Returns the resolved table items.
     * @hidden
     */
    resolveTableItems(items: (string | TableCommandName | ContextMenuItemModel)[]): ContextMenuItemModel[];
    /**
     * Resolves custom link items from contextMenuSettings into a normalized ContextMenuItemModel array.
     *
     * @param {(string | LinkCommandName | ContextMenuItemModel)[]} items - The raw link items.
     * @returns {ContextMenuItemModel[]} - The resolved link items.
     * @hidden
     */
    resolveLinkItems(items: (string | LinkCommandName | ContextMenuItemModel)[]): ContextMenuItemModel[];
    /**
     * Checks whether the context menu is opened or not.
     *
     * @returns {boolean} - Returns true if the context menu is opened, otherwise false.
     * @hidden
     */
    isPopupOpen(): boolean;
    /**
     * Checks whether the currently focused cell is a header cell.
     *
     * @returns {boolean} - Returns true if the cell is a header cell, otherwise false.
     * @hidden
     */
    isHeaderCellActive(): boolean;
    /**
     * Destroys the ContextMenu module.
     *
     * @returns {void}
     */
    destroy(): void;
}
