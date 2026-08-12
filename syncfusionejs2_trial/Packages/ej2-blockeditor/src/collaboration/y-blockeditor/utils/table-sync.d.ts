import * as Y from '../yjs-types';
import { BlockManager } from '../../../block-manager/base/block-manager';
import { TableCellModel, TableColumnModel, TableRowModel } from '../../../models/block/block-props';
import { BlockModel } from '../../../models/block/block-model';
import { TableSnapshot } from '../base/interface';
import { Collaboration } from '../base/collaboration';
import { BlockEditorBinding } from '../plugins/sync-plugin';
/**
 * Utilities for synchronizing table structures between editor and Yjs.
 *
 * @hidden
 */
export declare class TableAction {
    private parent;
    private collabManager;
    private YRuntime;
    constructor(parent: BlockEditorBinding, manager: Collaboration);
    /**
     * Returns column elements from a Y table element.
     *
     * @param {Y.XmlElement} yTable - The Y table element
     * @returns {Y.XmlElement[]} - Array of column elements
     * @hidden
     */
    getYColumns(yTable: Y.XmlElement): Y.XmlElement[];
    /**
     * Returns row elements from a Y table element.
     *
     * @param {Y.XmlElement} yTable - The Y table element
     * @returns {Y.XmlElement[]} - Array of row elements
     * @hidden
     */
    getYRows(yTable: Y.XmlElement): Y.XmlElement[];
    /**
     * Returns cell elements from a Y table row element.
     *
     * @param {Y.XmlElement} yRow - The Y table row element
     * @returns {Y.XmlElement[]} - Array of cell elements
     * @hidden
     */
    getYCells(yRow: Y.XmlElement): Y.XmlElement[];
    /**
     * Finds a column element by its id attribute.
     *
     * @param {Y.XmlElement} yTable - The Y table element
     * @param {string} colId - Column id to find
     * @returns {Y.XmlElement | null} - The found column or null
     * @hidden
     */
    findYColumnById(yTable: Y.XmlElement, colId: string): Y.XmlElement | null;
    /**
     * Finds a row element by its id attribute.
     *
     * @param {Y.XmlElement} yTable - The Y table element
     * @param {string} rowId - Row id to find
     * @returns {Y.XmlElement | null} - The found row or null
     * @hidden
     */
    findYRowById(yTable: Y.XmlElement, rowId: string): Y.XmlElement | null;
    /**
     * Finds a cell element by its id attribute.
     *
     * @param {Y.XmlElement} yRow - The Y table row element
     * @param {string} cellId - Cell id to find
     * @returns {Y.XmlElement | null} - The found cell or null
     * @hidden
     */
    findYCellById(yRow: Y.XmlElement, cellId: string): Y.XmlElement | null;
    /**
     * Creates a Y.XmlElement representing a table column.
     *
     * @param {TableColumnModel} col - Column model to convert
     * @returns {Y.XmlElement} - The created column element
     * @hidden
     */
    createYColumn(col: TableColumnModel): Y.XmlElement;
    /**
     * Creates a Y.XmlElement representing a table cell.
     *
     * @param {TableCellModel} cell - Cell model to convert
     * @returns {Y.XmlElement} - The created cell element
     * @hidden
     */
    createYCell(cell: TableCellModel): Y.XmlElement;
    /**
     * Creates a Y.XmlElement representing a table row.
     *
     * @param {TableRowModel} row - Row model to convert
     * @returns {Y.XmlElement} - The created row element
     * @hidden
     */
    createYRow(row: TableRowModel): Y.XmlElement;
    /**
     * Syncs table block updates from editor to Yjs representation.
     *
     * @param {Y.XmlElement} yTable - Target Y table element
     * @param {BlockModel} prevBlock - Previous block model
     * @param {BlockModel} block - Current block model
     * @param {Y.Doc} doc - Yjs document context
     * @returns {void} - No return value
     * @hidden
     */
    syncTableUpdateToYjs(yTable: Y.XmlElement, prevBlock: BlockModel, block: BlockModel, doc: Y.Doc): void;
    /**
     * Reconciles column additions/removals between previous and current models.
     *
     * @param {Y.XmlElement} yTable - Target Y table element
     * @param {TableColumnModel[]} prevCols - Previous column models
     * @param {TableColumnModel[]} currCols - Current column models
     * @param {TableRowModel[]} prevRows - Previous row models
     * @param {TableRowModel[]} currRows - Current row models
     * @returns {void} - No return value
     * @hidden
     */
    syncColumnStructure(yTable: Y.XmlElement, prevCols: TableColumnModel[], currCols: TableColumnModel[], prevRows: TableRowModel[], currRows: TableRowModel[]): void;
    /**
     * Reconciles row additions/removals between previous and current models.
     *
     * @param {Y.XmlElement} yTable - Target Y table element
     * @param {TableRowModel[]} prevRows - Previous row models
     * @param {TableRowModel[]} currRows - Current row models
     * @param {number} colCount - Number of column elements present
     * @returns {void} - No return value
     * @hidden
     */
    syncRowStructure(yTable: Y.XmlElement, prevRows: TableRowModel[], currRows: TableRowModel[], colCount: number): void;
    /**
     * Updates Y column attributes when column properties change.
     *
     * @param {Y.XmlElement} yTable - Target Y table element
     * @param {TableColumnModel[]} prevCols - Previous column models
     * @param {TableColumnModel[]} currCols - Current column models
     * @returns {void} - No return value
     * @hidden
     */
    syncColumnProperties(yTable: Y.XmlElement, prevCols: TableColumnModel[], currCols: TableColumnModel[]): void;
    /**
     * Synchronizes block structure inside table cells between versions.
     *
     * @param {Y.XmlElement} yTable - Target Y table element
     * @param {TableRowModel[]} prevRows - Previous row models
     * @param {TableRowModel[]} currRows - Current row models
     * @returns {void} - No return value
     * @hidden
     */
    syncCellBlockStructure(yTable: Y.XmlElement, prevRows: TableRowModel[], currRows: TableRowModel[]): void;
    /**
     * Reconciles blocks within a Y cell: inserts and deletes as needed.
     *
     * @param {Y.XmlElement} yCell - The target Y cell element
     * @param {BlockModel[]} prevBlocks - Previous blocks in the cell
     * @param {BlockModel[]} currBlocks - Current blocks in the cell
     * @returns {void} - No return value
     * @hidden
     */
    reconcileCellBlocks(yCell: Y.XmlElement, prevBlocks: BlockModel[], currBlocks: BlockModel[]): void;
    /**
     * Applies structural table changes originating from remote Yjs updates.
     *
     * @param {Y.XmlEvent} event - The Y event describing changes
     * @param {string} tableBlockId - Local block id for the table
     * @param {BlockManager} blockManager - Block manager instance
     * @param {TableSnapshot | null} snapshot - Pre-transaction snapshot
     * @returns {void} - No return value
     * @hidden
     */
    applyRemoteTableStructuralChange(event: Y.XmlEvent, tableBlockId: string, blockManager: BlockManager, snapshot: TableSnapshot | null): void;
    /**
     * Applies remote column attribute changes to local DOM and models.
     *
     * @param {Y.XmlEvent} event - The Y event containing attribute changes
     * @param {string} tableBlockId - Local block id for the table
     * @param {BlockManager} blockManager - Block manager instance
     * @returns {void} - No return value
     * @hidden
     */
    applyRemoteColumnPropertyChange(event: Y.XmlEvent, tableBlockId: string, blockManager: BlockManager): void;
    /**
     * Applies remote changes to blocks inside a table cell.
     *
     * @param {Y.XmlEvent} event - The Y event for the cell
     * @param {string} tableBlockId - Local block id for the table
     * @param {string} cellId - The id of the affected cell
     * @param {BlockManager} blockManager - Block manager instance
     * @returns {void} - No return value
     * @hidden
     */
    applyRemoteCellBlockChange(event: Y.XmlEvent, tableBlockId: string, cellId: string, blockManager: BlockManager): void;
    /**
     * Builds a TableColumnModel from a Y column element.
     *
     * @param {Y.XmlElement} yCol - The Y column element
     * @returns {TableColumnModel} - The reconstructed column model
     * @hidden
     */
    reconstructColumnModel(yCol: Y.XmlElement): TableColumnModel;
    /**
     * Builds a TableCellModel from a Y cell element.
     *
     * @param {Y.XmlElement} yCell - The Y cell element
     * @returns {TableCellModel} - The reconstructed cell model
     * @hidden
     */
    reconstructCellModel(yCell: Y.XmlElement): TableCellModel;
    /**
     * Builds a TableRowModel from a Y row element.
     *
     * @param {Y.XmlElement} yRow - The Y row element
     * @returns {TableRowModel} - The reconstructed row model
     * @hidden
     */
    reconstructRowModel(yRow: Y.XmlElement): TableRowModel;
}
