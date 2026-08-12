var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
import { BlockType } from '../../../models/enums';
import { events } from '../../../common/constant';
import * as constants from '../../../common/constant';
import { getNormalizedKey } from '../../../common/utils/common';
import { getAdjacentBlock, getBlockContentElement, getBlockModelById } from '../../../common/utils/block';
import { getSelectedRange, setCursorPosition } from '../../../common/utils/selection';
import { getDefaultTableItems, getDefaultLinkItems } from '../../../common/utils/data';
/**
 * `ContextMenuModule` is used to handle the context menu actions in the BlockEditor.
 *
 * @hidden
 */
var ContextMenuModule = /** @class */ (function () {
    function ContextMenuModule(manager) {
        this.isPopupOpened = false;
        this.isClipboardEmptyCache = true;
        this.shortcutMap = new Map();
        this.isHeaderCell = false;
        this.pendingFocusRestore = null;
        this.parent = manager;
        this.addEventListeners();
    }
    ContextMenuModule.prototype.addEventListeners = function () {
        this.parent.observer.on(events.keydown, this.onKeyDown, this);
        this.parent.observer.on('contextMenuCreated', this.handleContextMenuCreated, this);
        this.parent.observer.on('contextMenuBeforeOpen', this.handleContextMenuBeforeOpen, this);
        this.parent.observer.on('contextMenuAfterClose', this.handleContextMenuAfterClose, this);
        this.parent.observer.on('updateContextMenuState', this.updateContextMenuPopupState, this);
        this.parent.observer.on('contextMenuSelection', this.handleContextMenuSelection, this);
        this.parent.observer.on(events.destroy, this.destroy, this);
    };
    ContextMenuModule.prototype.removeEventListeners = function () {
        this.parent.observer.off(events.keydown, this.onKeyDown);
        this.parent.observer.off('contextMenuCreated', this.handleContextMenuCreated);
        this.parent.observer.off('contextMenuBeforeOpen', this.handleContextMenuBeforeOpen);
        this.parent.observer.off('contextMenuAfterClose', this.handleContextMenuAfterClose);
        this.parent.observer.off('updateContextMenuState', this.updateContextMenuPopupState);
        this.parent.observer.off('contextMenuSelection', this.handleContextMenuSelection);
        this.parent.observer.off(events.destroy, this.destroy);
    };
    ContextMenuModule.prototype.handleContextMenuCreated = function () {
        this.buildShortcutMap();
    };
    ContextMenuModule.prototype.buildShortcutMap = function () {
        var _this = this;
        this.shortcutMap.clear();
        this.parent.contextMenuSettings.items.forEach(function (item) {
            _this.shortcutMap.set(item.shortcut.toLowerCase(), item);
        });
    };
    ContextMenuModule.prototype.onKeyDown = function (e) {
        var normalizedKey = getNormalizedKey(e);
        if (!normalizedKey) {
            return;
        }
        var menuItem = this.shortcutMap.get(normalizedKey);
        if (menuItem && menuItem.id !== 'cut' && menuItem.id !== 'copy' && menuItem.id !== 'paste') {
            e.preventDefault();
            this.handleContextMenuActions(menuItem, e);
        }
    };
    ContextMenuModule.prototype.handleContextMenuBeforeOpen = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var target, tableBlock, cell, table, rowIndex, linkElement;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.parent.currentFocusedBlock) {
                            this.parent.setFocusAndUIForNewBlock(this.parent.currentHoveredBlock);
                        }
                        this.isHeaderCell = false;
                        this.clickedLinkElement = null;
                        if (args.event && args.event.target) {
                            target = args.event.target;
                            tableBlock = target.closest("." + constants.TABLE_BLOCK_CLS);
                            if (tableBlock && this.parent.currentFocusedBlock !== tableBlock) {
                                this.parent.setFocusToBlock(tableBlock);
                            }
                            cell = target.closest('td, th');
                            if (cell) {
                                table = cell.closest('table');
                                if (table) {
                                    rowIndex = Array.from(table.rows).indexOf(cell.parentElement);
                                    this.cellInfo = {
                                        rowIndex: rowIndex,
                                        colIndex: cell.cellIndex
                                    };
                                    // Check if the cell is a header cell
                                    this.isHeaderCell = cell.tagName.toLowerCase() === 'th';
                                }
                            }
                            linkElement = target.closest('a');
                            if (linkElement) {
                                this.clickedLinkElement = linkElement;
                            }
                        }
                        return [4 /*yield*/, this.toggleDisabledItems()];
                    case 1:
                        _a.sent();
                        this.parent.blockActionMenuModule.toggleBlockActionPopup(true);
                        this.parent.linkModule.hideLinkPopup();
                        setTimeout(function () {
                            if (_this.parent.inlineToolbarModule) {
                                _this.parent.inlineToolbarModule.hideInlineToolbar(args.event);
                            }
                        }, 50);
                        return [2 /*return*/];
                }
            });
        });
    };
    ContextMenuModule.prototype.updateContextMenuPopupState = function (value) {
        this.isPopupOpened = value.isOpen;
    };
    ContextMenuModule.prototype.handleContextMenuAfterClose = function () {
        var _this = this;
        // Restore focus after the menu has fully closed
        if (this.pendingFocusRestore) {
            var _a = this.pendingFocusRestore, tableBlockId_1 = _a.tableBlockId, colIndex_1 = _a.colIndex, rowIndex_1 = _a.rowIndex, operation_1 = _a.operation;
            // Use requestAnimationFrame to ensure the menu DOM is fully detached
            requestAnimationFrame(function () {
                _this.restoreCellFocusAfterTableOperation(tableBlockId_1, colIndex_1, rowIndex_1, operation_1);
                _this.pendingFocusRestore = null;
            });
        }
    };
    ContextMenuModule.prototype.handleContextMenuSelection = function (args) {
        this.handleContextMenuActions(args.item, args.event);
    };
    ContextMenuModule.prototype.handleIndentationAction = function (shouldDecrease) {
        var savedRange = null;
        var sel = window.getSelection();
        if (sel && sel.rangeCount > 0) {
            savedRange = sel.getRangeAt(0).cloneRange();
        }
        this.parent.execCommand({
            command: 'IndentBlock',
            state: {
                blockIDs: this.parent.editorMethods.getSelectedBlocks().map(function (block) { return block.id; }),
                shouldDecrease: shouldDecrease
            }
        });
        requestAnimationFrame(function () {
            if (savedRange) {
                var selection = window.getSelection();
                if (selection) {
                    selection.removeAllRanges();
                    selection.addRange(savedRange);
                }
            }
        });
    };
    ContextMenuModule.prototype.handleTableOperation = function (operationId) {
        if (!this.cellInfo) {
            return;
        }
        var tableBlock = this.parent.currentFocusedBlock.closest("." + constants.TABLE_BLOCK_CLS);
        if (!tableBlock) {
            return;
        }
        var blockModel = getBlockModelById(tableBlock.id, this.parent.getEditorBlocks());
        if (!blockModel.id) {
            return;
        }
        var settings = blockModel.properties;
        var _a = this.cellInfo, domRowIndex = _a.rowIndex, domColIndex = _a.colIndex;
        var modelRowIndex = settings.enableHeader ? domRowIndex - 1 : domRowIndex;
        var modelColIndex = settings.enableRowNumbers ? domColIndex - 1 : domColIndex;
        switch (operationId) {
            case 'table-insert-column-left':
                this.parent.tableService.addColumnAt({ blockId: blockModel.id, colIndex: modelColIndex });
                this.pendingFocusRestore = { tableBlockId: blockModel.id, colIndex: modelColIndex, rowIndex: 0, operation: 'column' };
                break;
            case 'table-insert-column-right':
                this.parent.tableService.addColumnAt({ blockId: blockModel.id, colIndex: modelColIndex + 1 });
                this.pendingFocusRestore = { tableBlockId: blockModel.id, colIndex: modelColIndex + 1, rowIndex: 0, operation: 'column' };
                break;
            case 'table-insert-row-above':
                this.parent.tableService.addRowAt({ blockId: blockModel.id, rowIndex: modelRowIndex });
                this.pendingFocusRestore = { tableBlockId: blockModel.id, colIndex: 0, rowIndex: modelRowIndex, operation: 'row' };
                break;
            case 'table-insert-row-below':
                this.parent.tableService.addRowAt({ blockId: blockModel.id, rowIndex: modelRowIndex + 1 });
                this.pendingFocusRestore = { tableBlockId: blockModel.id, colIndex: 0, rowIndex: modelRowIndex + 1, operation: 'row' };
                break;
            case 'table-delete-column':
                if (settings.columns.length > 1) {
                    this.parent.tableService.deleteColumnAt({ blockId: blockModel.id, colIndex: modelColIndex });
                }
                break;
            case 'table-delete-row':
                if (settings.rows.length > 1) {
                    this.parent.tableService.deleteRowAt({ blockId: blockModel.id, modelIndex: modelRowIndex });
                }
                break;
            case 'table-delete-table': {
                var blockElement = this.parent.getBlockElementById(blockModel.id);
                var nextBlock = getAdjacentBlock(blockElement, 'next');
                this.parent.execCommand({ command: 'DeleteBlock', state: { blockElement: blockElement } });
                if (nextBlock) {
                    setCursorPosition(getBlockContentElement(nextBlock), 0);
                    this.parent.setFocusToBlock(nextBlock);
                }
                break;
            }
        }
        this.cellInfo = null;
    };
    ContextMenuModule.prototype.restoreCellFocusAfterTableOperation = function (tableBlockId, colIndex, rowIndex, operation) {
        var tableBlock = this.parent.getBlockElementById(tableBlockId);
        if (!tableBlock) {
            return;
        }
        var table = tableBlock.querySelector('table.e-table-element');
        if (!table) {
            return;
        }
        var blockModel = getBlockModelById(tableBlockId, this.parent.getEditorBlocks());
        if (!blockModel) {
            return;
        }
        var settings = blockModel.properties;
        var tbody = table.tBodies[0];
        if (!tbody || tbody.rows.length === 0) {
            return;
        }
        if (operation === 'column') {
            var firstBodyRow = tbody.rows[0];
            var domColIndex = settings.enableRowNumbers ? colIndex + 1 : colIndex;
            var focusCell = firstBodyRow.cells[domColIndex];
            if (focusCell) {
                this.parent.tableService.removeCellFocus(table);
                this.parent.tableService.addCellFocus(focusCell, true);
            }
        }
        else {
            var rowEl = tbody.rows[rowIndex];
            if (rowEl && rowEl.cells.length > 0) {
                var focusCell = rowEl.cells[settings.enableRowNumbers ? 1 : 0];
                if (focusCell) {
                    this.parent.tableService.removeCellFocus(table);
                    this.parent.tableService.addCellFocus(focusCell, true);
                }
            }
        }
    };
    ContextMenuModule.prototype.handleContextMenuActions = function (menuItem, e) {
        var prop = menuItem.id.toLowerCase();
        switch (prop) {
            case 'undo':
                this.parent.undoRedoAction.undo();
                break;
            case 'redo':
                this.parent.undoRedoAction.redo();
                break;
            case 'cut':
                this.parent.clipboardAction.handleContextCut();
                break;
            case 'copy':
                this.parent.clipboardAction.handleContextCopy();
                break;
            case 'paste':
                this.parent.clipboardAction.handleContextPaste();
                break;
            case 'link':
                this.parent.linkModule.showLinkPopup(e);
                break;
            case 'increaseindent':
            case 'decreaseindent':
                this.handleIndentationAction(prop === 'decreaseindent');
                break;
            case 'table-insert-column-left':
            case 'table-insert-column-right':
            case 'table-insert-row-above':
            case 'table-insert-row-below':
            case 'table-delete-column':
            case 'table-delete-row':
            case 'table-delete-table':
                this.handleTableOperation(prop);
                break;
            case 'link-edit':
                this.parent.linkModule.showLinkPopup(e);
                break;
            case 'link-copy':
                if (this.clickedLinkElement && this.clickedLinkElement.href) {
                    this.parent.clipboardAction.handleContextCopy(this.clickedLinkElement.href);
                }
                break;
            case 'link-open':
                if (this.clickedLinkElement) {
                    this.parent.linkModule.handleLinkClick(this.clickedLinkElement);
                }
                break;
            case 'link-remove':
                this.parent.linkModule.handleLinkInsertDeletion(e, true, this.clickedLinkElement);
                break;
        }
    };
    ContextMenuModule.prototype.toggleDisabledItems = function () {
        return __awaiter(this, void 0, void 0, function () {
            var blockModel, tableBlk, notAllowedTypes, isNotAllowedType, previousBlockElement, previousBlockModel, canIndent, canOutdent, isSelection, selectedBlocks, canAllowLink, isEmpty, menuState;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!getSelectedRange() || !this.parent.currentFocusedBlock) {
                            return [2 /*return*/];
                        }
                        blockModel = getBlockModelById(this.parent.currentFocusedBlock.id, this.parent.getEditorBlocks());
                        tableBlk = this.parent.currentFocusedBlock.closest("." + constants.TABLE_BLOCK_CLS);
                        notAllowedTypes = [BlockType.Image, BlockType.Code];
                        isNotAllowedType = notAllowedTypes.indexOf(blockModel.blockType) !== -1;
                        previousBlockElement = getAdjacentBlock(this.parent.currentFocusedBlock, 'previous');
                        previousBlockModel = previousBlockElement
                            ? getBlockModelById(previousBlockElement.id, this.parent.getEditorBlocks())
                            : null;
                        canIndent = (!tableBlk && (!previousBlockModel ||
                            (previousBlockModel && blockModel.indent <= previousBlockModel.indent) && !isNotAllowedType));
                        canOutdent = !tableBlk && (blockModel.indent > 0 && !isNotAllowedType);
                        isSelection = getSelectedRange().toString().trim().length > 0;
                        selectedBlocks = this.parent.editorMethods.getSelectedBlocks();
                        canAllowLink = this.clickedLinkElement
                            ? false
                            : isSelection && !isNotAllowedType && (selectedBlocks && selectedBlocks.length === 1);
                        return [4 /*yield*/, this.parent.clipboardAction.isClipboardEmpty()];
                    case 1:
                        isEmpty = _a.sent();
                        menuState = {
                            'increaseindent': canIndent,
                            'decreaseindent': canOutdent,
                            'undo': this.parent.undoRedoAction.canUndo(),
                            'redo': this.parent.undoRedoAction.canRedo(),
                            'link': canAllowLink,
                            'cut': isSelection,
                            'copy': isSelection,
                            'paste': !isEmpty
                        };
                        this.parent.observer.notify('enableDisableContextMenuItems', menuState);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Resolves custom table items from contextMenuSettings into a normalized ContextMenuItemModel array.
     *
     * @param {Array} items - The raw table items.
     * @returns {Array} Returns the resolved table items.
     * @hidden
     */
    ContextMenuModule.prototype.resolveTableItems = function (items) {
        if (!items.length) {
            return getDefaultTableItems(this.parent.localeJson);
        }
        var defaultTableItems = getDefaultTableItems(this.parent.localeJson);
        return items
            .map(function (item) {
            return typeof item === 'object' ? item :
                defaultTableItems.find(function (m) { return (m.text.toLowerCase() === String(item).toLowerCase() ||
                    m.id.toLowerCase() === String(item).toLowerCase()); });
        })
            .filter(function (item) { return !!item; });
    };
    /**
     * Resolves custom link items from contextMenuSettings into a normalized ContextMenuItemModel array.
     *
     * @param {(string | LinkCommandName | ContextMenuItemModel)[]} items - The raw link items.
     * @returns {ContextMenuItemModel[]} - The resolved link items.
     * @hidden
     */
    ContextMenuModule.prototype.resolveLinkItems = function (items) {
        if (!items.length) {
            return getDefaultLinkItems(this.parent.localeJson);
        }
        var defaultLinkItems = getDefaultLinkItems(this.parent.localeJson);
        return items
            .map(function (item) {
            return typeof item === 'object' ? item :
                defaultLinkItems.find(function (m) { return (m.text.toLowerCase() === String(item).toLowerCase() ||
                    m.id.toLowerCase() === String(item).toLowerCase()); });
        })
            .filter(function (item) { return !!item; });
    };
    /**
     * Checks whether the context menu is opened or not.
     *
     * @returns {boolean} - Returns true if the context menu is opened, otherwise false.
     * @hidden
     */
    ContextMenuModule.prototype.isPopupOpen = function () {
        return !!this.isPopupOpened;
    };
    /**
     * Checks whether the currently focused cell is a header cell.
     *
     * @returns {boolean} - Returns true if the cell is a header cell, otherwise false.
     * @hidden
     */
    ContextMenuModule.prototype.isHeaderCellActive = function () {
        return this.isHeaderCell;
    };
    /**
     * Destroys the ContextMenu module.
     *
     * @returns {void}
     */
    ContextMenuModule.prototype.destroy = function () {
        this.removeEventListeners();
        this.shortcutMap = null;
        this.cellInfo = null;
        this.isHeaderCell = false;
        this.clickedLinkElement = null;
    };
    return ContextMenuModule;
}());
export { ContextMenuModule };
