import { toDomCol } from '../../../common/utils/table-utils';
import { BlockFactory } from '../../../block-manager/services/block-factory';
/**
 * Utilities for synchronizing table structures between editor and Yjs.
 *
 * @hidden
 */
var TableAction = /** @class */ (function () {
    function TableAction(parent, manager) {
        this.parent = parent;
        this.collabManager = manager;
        this.YRuntime = this.collabManager.getYRuntime();
    }
    /**
     * Returns column elements from a Y table element.
     *
     * @param {Y.XmlElement} yTable - The Y table element
     * @returns {Y.XmlElement[]} - Array of column elements
     * @hidden
     */
    TableAction.prototype.getYColumns = function (yTable) {
        var _this = this;
        return yTable.toArray().filter(function (c) { return c instanceof _this.YRuntime.XmlElement && c.nodeName === 'tableColumn'; });
    };
    /**
     * Returns row elements from a Y table element.
     *
     * @param {Y.XmlElement} yTable - The Y table element
     * @returns {Y.XmlElement[]} - Array of row elements
     * @hidden
     */
    TableAction.prototype.getYRows = function (yTable) {
        var _this = this;
        return yTable.toArray().filter(function (c) { return c instanceof _this.YRuntime.XmlElement && c.nodeName === 'tableRow'; });
    };
    /**
     * Returns cell elements from a Y table row element.
     *
     * @param {Y.XmlElement} yRow - The Y table row element
     * @returns {Y.XmlElement[]} - Array of cell elements
     * @hidden
     */
    TableAction.prototype.getYCells = function (yRow) {
        var _this = this;
        return yRow.toArray().filter(function (c) { return c instanceof _this.YRuntime.XmlElement && c.nodeName === 'tableCell'; });
    };
    /**
     * Finds a column element by its id attribute.
     *
     * @param {Y.XmlElement} yTable - The Y table element
     * @param {string} colId - Column id to find
     * @returns {Y.XmlElement | null} - The found column or null
     * @hidden
     */
    TableAction.prototype.findYColumnById = function (yTable, colId) {
        return this.getYColumns(yTable).find(function (yCol) { return yCol.getAttribute('id') === colId; });
    };
    /**
     * Finds a row element by its id attribute.
     *
     * @param {Y.XmlElement} yTable - The Y table element
     * @param {string} rowId - Row id to find
     * @returns {Y.XmlElement | null} - The found row or null
     * @hidden
     */
    TableAction.prototype.findYRowById = function (yTable, rowId) {
        return this.getYRows(yTable).find(function (yRow) { return yRow.getAttribute('id') === rowId; });
    };
    /**
     * Finds a cell element by its id attribute.
     *
     * @param {Y.XmlElement} yRow - The Y table row element
     * @param {string} cellId - Cell id to find
     * @returns {Y.XmlElement | null} - The found cell or null
     * @hidden
     */
    TableAction.prototype.findYCellById = function (yRow, cellId) {
        return this.getYCells(yRow).find(function (yCell) { return yCell.getAttribute('id') === cellId; });
    };
    /**
     * Creates a Y.XmlElement representing a table column.
     *
     * @param {TableColumnModel} col - Column model to convert
     * @returns {Y.XmlElement} - The created column element
     * @hidden
     */
    TableAction.prototype.createYColumn = function (col) {
        var yCol = new this.YRuntime.XmlElement('tableColumn');
        if (col.id) {
            yCol.setAttribute('id', col.id);
        }
        if (col.type) {
            yCol.setAttribute('type', String(col.type));
        }
        if (col.headerText) {
            yCol.setAttribute('headerText', col.headerText);
        }
        if (col.width) {
            yCol.setAttribute('width', String(col.width));
        }
        return yCol;
    };
    /**
     * Creates a Y.XmlElement representing a table cell.
     *
     * @param {TableCellModel} cell - Cell model to convert
     * @returns {Y.XmlElement} - The created cell element
     * @hidden
     */
    TableAction.prototype.createYCell = function (cell) {
        var yCell = new this.YRuntime.XmlElement('tableCell');
        if (cell.id) {
            yCell.setAttribute('id', cell.id);
        }
        if (cell.columnId) {
            yCell.setAttribute('columnId', cell.columnId);
        }
        for (var _i = 0, _a = cell.blocks; _i < _a.length; _i++) {
            var cellBlock = _a[_i];
            yCell.push([this.parent.conversion.blockModelToYElement(cellBlock)]);
        }
        return yCell;
    };
    /**
     * Creates a Y.XmlElement representing a table row.
     *
     * @param {TableRowModel} row - Row model to convert
     * @returns {Y.XmlElement} - The created row element
     * @hidden
     */
    TableAction.prototype.createYRow = function (row) {
        var yRow = new this.YRuntime.XmlElement('tableRow');
        if (row.id) {
            yRow.setAttribute('id', row.id);
        }
        for (var _i = 0, _a = row.cells; _i < _a.length; _i++) {
            var cell = _a[_i];
            yRow.push([this.createYCell(cell)]);
        }
        return yRow;
    };
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
    TableAction.prototype.syncTableUpdateToYjs = function (yTable, prevBlock, block, doc) {
        var prevProps = prevBlock.properties;
        var props = block.properties;
        if (!prevProps || !props) {
            return;
        }
        var prevCols = prevProps.columns;
        var currCols = props.columns;
        var prevRows = prevProps.rows;
        var currRows = props.rows;
        if (currCols.length !== prevCols.length) {
            this.syncColumnStructure(yTable, prevCols, currCols, prevRows, currRows);
        }
        if (currRows.length !== prevRows.length) {
            this.syncRowStructure(yTable, prevRows, currRows, currCols.length);
        }
        this.syncColumnProperties(yTable, prevCols, currCols);
        this.syncCellBlockStructure(yTable, prevRows, currRows);
    };
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
    TableAction.prototype.syncColumnStructure = function (yTable, prevCols, currCols, prevRows, currRows) {
        var _this = this;
        var prevColIds = new Set(prevCols.map(function (c) { return c.id; }));
        var currColIds = new Set(currCols.map(function (c) { return c.id; }));
        var _loop_1 = function (col) {
            if (prevColIds.has(col.id)) {
                return "continue";
            }
            var colIndex = currCols.indexOf(col);
            // Insert tableColumn element at correct position (after preceding columns)
            var yCol = this_1.createYColumn(col);
            yTable.insert(colIndex, [yCol]);
            // Insert a cell into every existing row at the same column index
            var yRows = this_1.getYRows(yTable);
            yRows.forEach(function (yRow, rIdx) {
                var newCell = currRows[rIdx].cells[colIndex];
                if (newCell) {
                    yRow.insert(colIndex, [_this.createYCell(newCell)]);
                }
            });
        };
        var this_1 = this;
        // Columns added
        for (var _i = 0, currCols_1 = currCols; _i < currCols_1.length; _i++) {
            var col = currCols_1[_i];
            _loop_1(col);
        }
        var _loop_2 = function (col) {
            if (currColIds.has(col.id)) {
                return "continue";
            }
            var yCol = this_2.findYColumnById(yTable, col.id);
            if (yCol) {
                var idx = yTable.toArray().indexOf(yCol);
                yTable.delete(idx, 1);
            }
            // Remove corresponding cell from every row
            this_2.getYRows(yTable).forEach(function (yRow) {
                var yCell = _this.getYCells(yRow).find(function (c) { return c.getAttribute('columnId') === col.id; });
                if (yCell) {
                    var idx = yRow.toArray().indexOf(yCell);
                    yRow.delete(idx, 1);
                }
            });
        };
        var this_2 = this;
        // Columns removed
        for (var _a = 0, prevCols_1 = prevCols; _a < prevCols_1.length; _a++) {
            var col = prevCols_1[_a];
            _loop_2(col);
        }
    };
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
    TableAction.prototype.syncRowStructure = function (yTable, prevRows, currRows, colCount) {
        var prevRowIds = new Set(prevRows.map(function (r) { return r.id; }));
        var currRowIds = new Set(currRows.map(function (r) { return r.id; }));
        // Rows added
        for (var _i = 0, currRows_1 = currRows; _i < currRows_1.length; _i++) {
            var row = currRows_1[_i];
            if (prevRowIds.has(row.id)) {
                continue;
            }
            var rowIndex = currRows.indexOf(row);
            var yRow = this.createYRow(row);
            // Rows are positioned after all column elements
            yTable.insert(colCount + rowIndex, [yRow]);
        }
        // Rows removed
        for (var _a = 0, prevRows_1 = prevRows; _a < prevRows_1.length; _a++) {
            var row = prevRows_1[_a];
            if (currRowIds.has(row.id)) {
                continue;
            }
            var yRow = this.findYRowById(yTable, row.id);
            if (yRow) {
                var idx = yTable.toArray().indexOf(yRow);
                yTable.delete(idx, 1);
            }
        }
    };
    /**
     * Updates Y column attributes when column properties change.
     *
     * @param {Y.XmlElement} yTable - Target Y table element
     * @param {TableColumnModel[]} prevCols - Previous column models
     * @param {TableColumnModel[]} currCols - Current column models
     * @returns {void} - No return value
     * @hidden
     */
    TableAction.prototype.syncColumnProperties = function (yTable, prevCols, currCols) {
        var _loop_3 = function (col) {
            var prev = prevCols.find(function (p) { return p.id === col.id; });
            if (!prev) {
                return "continue";
            }
            var yCol = this_3.findYColumnById(yTable, col.id);
            if (!yCol) {
                return "continue";
            }
            yCol.setAttribute('width', col.width ? String(col.width) : '');
            if (col.headerText !== prev.headerText) {
                yCol.setAttribute('headerText', col.headerText);
            }
            if (col.type !== prev.type) {
                yCol.setAttribute('type', col.type ? String(col.type) : '');
            }
        };
        var this_3 = this;
        for (var _i = 0, currCols_2 = currCols; _i < currCols_2.length; _i++) {
            var col = currCols_2[_i];
            _loop_3(col);
        }
    };
    /**
     * Synchronizes block structure inside table cells between versions.
     *
     * @param {Y.XmlElement} yTable - Target Y table element
     * @param {TableRowModel[]} prevRows - Previous row models
     * @param {TableRowModel[]} currRows - Current row models
     * @returns {void} - No return value
     * @hidden
     */
    TableAction.prototype.syncCellBlockStructure = function (yTable, prevRows, currRows) {
        var yRows = this.getYRows(yTable);
        var _loop_4 = function (row) {
            var prevRow = prevRows.find(function (r) { return r.id === row.id; });
            if (!prevRow) {
                return "continue";
            }
            var yRow = yRows.find(function (yr) { return yr.getAttribute('id') === row.id; });
            if (!yRow) {
                return "continue";
            }
            var _loop_5 = function (cell) {
                var prevCell = prevRow.cells.find(function (c) { return c.id === cell.id; });
                if (!prevCell) {
                    return "continue";
                }
                var currBlocks = cell.blocks;
                var prevBlocks = prevCell.blocks;
                var yCell = this_4.findYCellById(yRow, cell.id);
                if (!yCell) {
                    return "continue";
                }
                this_4.reconcileCellBlocks(yCell, prevBlocks, currBlocks);
            };
            for (var _i = 0, _a = row.cells; _i < _a.length; _i++) {
                var cell = _a[_i];
                _loop_5(cell);
            }
        };
        var this_4 = this;
        for (var _i = 0, currRows_2 = currRows; _i < currRows_2.length; _i++) {
            var row = currRows_2[_i];
            _loop_4(row);
        }
    };
    /**
     * Reconciles blocks within a Y cell: inserts and deletes as needed.
     *
     * @param {Y.XmlElement} yCell - The target Y cell element
     * @param {BlockModel[]} prevBlocks - Previous blocks in the cell
     * @param {BlockModel[]} currBlocks - Current blocks in the cell
     * @returns {void} - No return value
     * @hidden
     */
    TableAction.prototype.reconcileCellBlocks = function (yCell, prevBlocks, currBlocks) {
        var _this = this;
        var prevIds = new Set(prevBlocks.map(function (b) { return b.id; }));
        var currIds = new Set(currBlocks.map(function (b) { return b.id; }));
        // Blocks added
        for (var _i = 0, currBlocks_1 = currBlocks; _i < currBlocks_1.length; _i++) {
            var block = currBlocks_1[_i];
            if (prevIds.has(block.id)) {
                continue;
            }
            var insertIndex = currBlocks.indexOf(block);
            yCell.insert(insertIndex, [this.parent.conversion.blockModelToYElement(block)]);
        }
        var _loop_6 = function (block) {
            if (currIds.has(block.id)) {
                return "continue";
            }
            var yCellChildren = yCell.toArray();
            var target = yCellChildren.find(function (c) { return c instanceof _this.YRuntime.XmlElement && c.getAttribute('id') === block.id; });
            if (target) {
                yCell.delete(yCellChildren.indexOf(target), 1);
            }
        };
        // Blocks removed
        for (var _a = 0, prevBlocks_1 = prevBlocks; _a < prevBlocks_1.length; _a++) {
            var block = prevBlocks_1[_a];
            _loop_6(block);
        }
    };
    // ============================================================================
    // Inbound: Yjs → local editor
    // ============================================================================
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
    TableAction.prototype.applyRemoteTableStructuralChange = function (event, tableBlockId, blockManager, snapshot) {
        var _this = this;
        var yTable = event.target;
        var delta = event.changes.delta;
        if (!delta || delta.length === 0 || !snapshot) {
            return;
        }
        // Build a flat pre-transaction ordered list of (id, nodeName) from snapshot
        var preColumnIds = snapshot.columnIds;
        var preRowIds = snapshot.rowIds;
        var colDeltaIdx = 0;
        var rowDeltaIdx = 0;
        for (var _i = 0, delta_1 = delta; _i < delta_1.length; _i++) {
            var op = delta_1[_i];
            if (op.retain !== undefined) {
                // Advance both cursors by retain count across mixed children
                // Determine how many are columns vs rows from the snapshot
                var retaining = op.retain;
                var remaining = retaining;
                while (remaining > 0 && colDeltaIdx < preColumnIds.length) {
                    colDeltaIdx++;
                    remaining--;
                }
                while (remaining > 0 && rowDeltaIdx < preRowIds.length) {
                    rowDeltaIdx++;
                    remaining--;
                }
            }
            else if (op.insert && Array.isArray(op.insert)) {
                var _loop_7 = function (yEl) {
                    if (!(yEl instanceof this_5.YRuntime.XmlElement)) {
                        return "continue";
                    }
                    if (yEl.nodeName === 'tableColumn') {
                        var colModel_1 = this_5.reconstructColumnModel(yEl);
                        var colIndex_1 = colDeltaIdx;
                        var currYRows = this_5.getYRows(yTable);
                        var columnCells = currYRows.map(function (yRow) {
                            var yCells = _this.getYCells(yRow);
                            var yCell = yCells[colIndex_1];
                            return yCell ? _this.reconstructCellModel(yCell) : blockManager.tableService.createTableCell(colModel_1.id);
                        });
                        blockManager.tableService.addColumnAt({
                            blockId: tableBlockId,
                            colIndex: colIndex_1,
                            columnModel: colModel_1,
                            columnCells: columnCells,
                            preventTracking: true
                        });
                        colDeltaIdx++;
                    }
                    else if (yEl.nodeName === 'tableRow') {
                        var rowModel = this_5.reconstructRowModel(yEl);
                        var rowIndex = rowDeltaIdx;
                        blockManager.tableService.addRowAt({
                            blockId: tableBlockId,
                            rowIndex: rowIndex,
                            rowModel: rowModel,
                            preventTracking: true
                        });
                        rowDeltaIdx++;
                    }
                };
                var this_5 = this;
                for (var _a = 0, _b = op.insert; _a < _b.length; _a++) {
                    var yEl = _b[_a];
                    _loop_7(yEl);
                }
            }
            else if (op.delete !== undefined) {
                var deleteCount = op.delete;
                // Determine from snapshot whether these were columns or rows
                for (var i = 0; i < deleteCount; i++) {
                    if (colDeltaIdx < preColumnIds.length) {
                        // Deleting a column
                        blockManager.tableService.deleteColumnAt({
                            blockId: tableBlockId,
                            colIndex: colDeltaIdx,
                            preventTracking: true
                        });
                        // Don't advance colDeltaIdx — after deletion, same index points to next col
                    }
                    else {
                        // Deleting a row
                        blockManager.tableService.deleteRowAt({
                            blockId: tableBlockId,
                            modelIndex: rowDeltaIdx,
                            preventTracking: true
                        });
                    }
                }
            }
        }
    };
    /**
     * Applies remote column attribute changes to local DOM and models.
     *
     * @param {Y.XmlEvent} event - The Y event containing attribute changes
     * @param {string} tableBlockId - Local block id for the table
     * @param {BlockManager} blockManager - Block manager instance
     * @returns {void} - No return value
     * @hidden
     */
    TableAction.prototype.applyRemoteColumnPropertyChange = function (event, tableBlockId, blockManager) {
        var yColumn = event.target;
        var colId = yColumn.getAttribute('id');
        var blockElement = blockManager.getBlockElementById(tableBlockId);
        var table = blockElement.querySelector('table.e-table-element');
        var block = blockManager.editorMethods.getBlock(tableBlockId);
        if (!table || !block || !colId) {
            return;
        }
        var props = block.properties;
        var colIndex = (props.columns).findIndex(function (c) { return c.id === colId; });
        var changedKeys = event.changes.keys;
        changedKeys.forEach(function (_change, key) {
            var newValue = yColumn.getAttribute(key);
            if (key === 'width') {
                var colgroup = table.querySelector('colgroup');
                var domColIndex = toDomCol(colIndex, props.enableRowNumbers);
                var colEl = colgroup.children[domColIndex];
                if (colEl) {
                    colEl.style.width = newValue;
                }
                props.columns[colIndex].width = newValue;
            }
            else if (key === 'headerText') {
                blockManager.tableService.setHeaderText(table, colIndex, newValue);
            }
            else if (key === 'type') {
                props.columns[colIndex].type = newValue;
            }
        });
    };
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
    TableAction.prototype.applyRemoteCellBlockChange = function (event, tableBlockId, cellId, blockManager) {
        var _this = this;
        var yCell = event.target;
        var block = blockManager.editorMethods.getBlock(tableBlockId);
        var blockElement = blockManager.getBlockElementById(tableBlockId);
        var table = blockElement.querySelector('table.e-table-element');
        var props = block.properties;
        // Locate the row and column indices for this cell
        var dataRowIndex = -1;
        var dataColIndex = -1;
        for (var r = 0; r < (props.rows).length; r++) {
            var row = props.rows[r];
            for (var c = 0; c < (row.cells).length; c++) {
                if (row.cells[c].id === cellId) {
                    dataRowIndex = r;
                    dataColIndex = c;
                    break;
                }
            }
            if (dataRowIndex >= 0) {
                break;
            }
        }
        // Reconstruct blocks from the current Yjs cell state
        var newBlocks = yCell.toArray()
            .filter(function (c) { return c instanceof _this.YRuntime.XmlElement; })
            .map(function (yCellBlock) { return BlockFactory.createBlockFromPartial(_this.parent.conversion.yElementToBlockModel(yCellBlock, cellId)); });
        blockManager.tableService.setCellBlocks(table, dataRowIndex, dataColIndex, newBlocks);
    };
    /**
     * Builds a TableColumnModel from a Y column element.
     *
     * @param {Y.XmlElement} yCol - The Y column element
     * @returns {TableColumnModel} - The reconstructed column model
     * @hidden
     */
    TableAction.prototype.reconstructColumnModel = function (yCol) {
        var col = {};
        var id = yCol.getAttribute('id');
        var type = yCol.getAttribute('type');
        var headerText = yCol.getAttribute('headerText');
        var width = yCol.getAttribute('width');
        if (id) {
            col.id = id;
        }
        if (type) {
            col.type = type;
        }
        if (headerText) {
            col.headerText = headerText;
        }
        if (width) {
            col.width = width;
        }
        return col;
    };
    /**
     * Builds a TableCellModel from a Y cell element.
     *
     * @param {Y.XmlElement} yCell - The Y cell element
     * @returns {TableCellModel} - The reconstructed cell model
     * @hidden
     */
    TableAction.prototype.reconstructCellModel = function (yCell) {
        var _this = this;
        var cell = {};
        var id = yCell.getAttribute('id');
        var columnId = yCell.getAttribute('columnId');
        if (id) {
            cell.id = id;
        }
        if (columnId) {
            cell.columnId = columnId;
        }
        cell.blocks = yCell.toArray()
            .filter(function (c) { return c instanceof _this.YRuntime.XmlElement; })
            .map(function (yCellBlock) { return BlockFactory.createBlockFromPartial(_this.parent.conversion.yElementToBlockModel(yCellBlock, id)); });
        return cell;
    };
    /**
     * Builds a TableRowModel from a Y row element.
     *
     * @param {Y.XmlElement} yRow - The Y row element
     * @returns {TableRowModel} - The reconstructed row model
     * @hidden
     */
    TableAction.prototype.reconstructRowModel = function (yRow) {
        var _this = this;
        var row = {};
        var rowId = yRow.getAttribute('id');
        if (rowId) {
            row.id = rowId;
        }
        row.cells = this.getYCells(yRow).map(function (yCell) { return _this.reconstructCellModel(yCell); });
        return row;
    };
    return TableAction;
}());
export { TableAction };
