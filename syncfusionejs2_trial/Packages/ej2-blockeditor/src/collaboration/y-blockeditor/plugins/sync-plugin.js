var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import { BlockFactory } from '../../../block-manager/services/block-factory';
import { getBlockContentElement, getBlockModelById, isChildrenTypeBlock } from '../../../common/utils/block';
import { YBlockHelper } from '../utils/yBlock-helper';
import { Conversion } from '../utils/conversion';
import { TableAction } from '../utils/table-sync';
import { YjsPosition } from '../utils/position';
import { IncrementalSync } from '../utils/incremental-text';
import { createMutex } from '../utils/mutex';
import { SegmentSync } from '../utils/segment-sync';
import { ySyncPluginKey, yExcludedOrigin } from './keys';
var BlockEditorBinding = /** @class */ (function () {
    function BlockEditorBinding(options) {
        var _this = this;
        /** @hidden */
        this.isDestroyed = false;
        this.observedYTexts = new WeakSet();
        /** @hidden */
        this.isApplyingRemote = false;
        this.preTransactionBlockSnapshots = new Map();
        this.preTransactionTableSnapshots = new Map();
        this.handledYTextInTransaction = new Set();
        this.beforeAllTransactions = function () {
            _this.preTransactionBlockSnapshots.clear();
            _this.preTransactionTableSnapshots.clear();
            _this.captureBlockIdsSnapshot(_this.yBlocks, '');
            for (var _i = 0, _a = _this.yBlocks.toArray(); _i < _a.length; _i++) {
                var child = _a[_i];
                if (child instanceof _this.YRuntime.XmlElement && child.nodeName === 'Table') {
                    _this.captureTableSnapshot(child);
                }
            }
        };
        this.afterAllTransactions = function () {
            _this.preTransactionBlockSnapshots.clear();
            _this.preTransactionTableSnapshots.clear();
            _this.handledYTextInTransaction.clear();
        };
        this.onEditorChange = function (changes) {
            _this.mux(function () {
                _this.doc.transact(function () {
                    _this.applyEditorChanges(changes);
                }, ySyncPluginKey);
            });
        };
        this.blockManager = options.blockManager;
        this.parent = options.parent;
        this.yBlocks = options.yBlocks;
        this.doc = options.yBlocks.doc;
        this.mux = createMutex();
        // Runtime
        this.YRuntime = this.parent.getYRuntime();
        // Helpers
        this.tableAction = new TableAction(this, this.parent);
        this.yjsPosition = new YjsPosition(this, this.parent);
        this.conversion = new Conversion(this.parent);
        this.incrementalSync = new IncrementalSync(this, this.parent);
        this.segmentSync = new SegmentSync(this, this.parent);
        this.yBlockHelper = new YBlockHelper(this, this.parent);
        // Bind the observer function
        this._observeFunction = this.onYjsChange.bind(this);
        // Set up Yjs observers
        this.setupYjsObservers();
        this.init();
    }
    BlockEditorBinding.prototype.init = function () {
        this.renderFromYjs();
        this.setupEditorObserver();
    };
    BlockEditorBinding.prototype.setupYjsObservers = function () {
        this.yBlocks.observeDeep(this._observeFunction);
        this.doc.on('beforeAllTransactions', this.beforeAllTransactions);
        this.doc.on('afterAllTransactions', this.afterAllTransactions);
    };
    BlockEditorBinding.prototype.setupEditorObserver = function () {
        this.blockManager.observer.on('triggerBlockChange', this.onEditorChange, this);
    };
    BlockEditorBinding.prototype.captureBlockIdsSnapshot = function (container, containerId) {
        var _this = this;
        var blockIds = container.toArray().map(function (child) {
            return (child instanceof _this.YRuntime.XmlElement) ? child.getAttribute('id') : '';
        });
        this.preTransactionBlockSnapshots.set(containerId, blockIds);
        for (var _i = 0, _a = container.toArray(); _i < _a.length; _i++) {
            var child = _a[_i];
            if (!(child instanceof this.YRuntime.XmlElement)) {
                continue;
            }
            var nodeName = child.nodeName;
            var childId = child.getAttribute('id');
            // For Callout/Quote/Collapsible: capture their children
            if ((nodeName === 'Callout' || nodeName === 'Quote' || nodeName.startsWith('Collapsible')) && childId) {
                this.captureBlockIdsSnapshot(child, childId);
            }
            // For Table cells: capture blocks inside each cell
            if (nodeName === 'Table' && childId) {
                // Walk through table structure: Table -> tableRow -> tableCell
                for (var _b = 0, _c = child.toArray(); _b < _c.length; _b++) {
                    var row = _c[_b];
                    if (!(row instanceof this.YRuntime.XmlElement) || row.nodeName !== 'tableRow') {
                        continue;
                    }
                    for (var _d = 0, _e = row.toArray(); _d < _e.length; _d++) {
                        var cell = _e[_d];
                        var cellId = cell.getAttribute('id');
                        this.captureBlockIdsSnapshot(cell, cellId);
                    }
                }
            }
        }
    };
    BlockEditorBinding.prototype.captureTableSnapshot = function (yTable) {
        var tableBlockId = yTable.getAttribute('id');
        var columnIds = [];
        var rowIds = [];
        for (var _i = 0, _a = yTable.toArray(); _i < _a.length; _i++) {
            var child = _a[_i];
            child = child;
            if (child.nodeName === 'tableColumn') {
                columnIds.push(child.getAttribute('id'));
            }
            else {
                // 'tableRow'
                rowIds.push(child.getAttribute('id'));
            }
        }
        this.preTransactionTableSnapshots.set(tableBlockId, { columnIds: columnIds, rowIds: rowIds });
    };
    BlockEditorBinding.prototype.onYjsChange = function (events, transaction) {
        var _this = this;
        var localOrigins = new Set([ySyncPluginKey, yExcludedOrigin]);
        if (this.isDestroyed || localOrigins.has(transaction.origin)) {
            return;
        }
        this.mux(function () {
            _this.applyYjsChanges(events, transaction);
        });
    };
    BlockEditorBinding.prototype.applyYjsChanges = function (events, transaction) {
        // Categorize events
        var structuralEvents = [];
        var textEvents = [];
        var propertyEvents = [];
        for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
            var event_1 = events_1[_i];
            if (event_1.target === this.yBlocks) {
                // Root level change (block add/remove/move)
                structuralEvents.push(event_1);
            }
            else if (event_1.target instanceof this.YRuntime.XmlText) {
                var yText = event_1.target;
                // If this yText was already handled by its own observer, skip it
                if (this.handledYTextInTransaction.has(yText)) {
                    continue;
                }
                // Text content change - handle incrementally
                textEvents.push(event_1);
            }
            else if (event_1.target instanceof this.YRuntime.XmlElement) {
                // Check if this is a structural change or property change
                var xmlEvent = event_1;
                if (xmlEvent.childListChanged) {
                    structuralEvents.push(xmlEvent);
                }
                else {
                    propertyEvents.push(xmlEvent);
                }
            }
        }
        if (structuralEvents.length > 0) {
            this.handleStructuralEvents(structuralEvents, transaction);
        }
        for (var _a = 0, propertyEvents_1 = propertyEvents; _a < propertyEvents_1.length; _a++) {
            var propEvent = propertyEvents_1[_a];
            this.handlePropertyEvent(propEvent);
        }
        for (var _b = 0, textEvents_1 = textEvents; _b < textEvents_1.length; _b++) {
            var textEvent = textEvents_1[_b];
            this.handleTextEventIncremental(textEvent);
        }
    };
    BlockEditorBinding.prototype.applyEditorChanges = function (changes) {
        // Group changes
        var insertions = [];
        var deletions = [];
        var updates = [];
        var moves = [];
        for (var _i = 0, changes_1 = changes; _i < changes_1.length; _i++) {
            var change = changes_1[_i];
            var action = (change.action).toLowerCase();
            switch (action) {
                case 'insertion':
                    insertions.push(change);
                    break;
                case 'deletion':
                    deletions.push(change);
                    break;
                case 'moved':
                    moves.push(change);
                    break;
                case 'update':
                default:
                    updates.push(change);
                    break;
            }
        }
        // Process moves first (to avoid order issues)
        if (moves.length > 0) {
            this.handleBlockMove(moves[0]);
        }
        // Updates
        for (var _a = 0, updates_1 = updates; _a < updates_1.length; _a++) {
            var change = updates_1[_a];
            var prevBlock = change.data.prevBlock;
            var block = change.data.block;
            if ((prevBlock && block) && (prevBlock.blockType !== block.blockType)) {
                this.handleBlockTransformation(change);
            }
            else {
                this.handleBlockUpdateIncremental(change);
            }
        }
        // Insertions
        for (var _b = 0, insertions_1 = insertions; _b < insertions_1.length; _b++) {
            var change = insertions_1[_b];
            this.handleBlockInsertion(change);
        }
        // Deletions
        for (var _c = 0, deletions_1 = deletions; _c < deletions_1.length; _c++) {
            var change = deletions_1[_c];
            this.handleBlockDeletion(change);
        }
    };
    BlockEditorBinding.prototype.handleBlockMove = function (change) {
        var _a = change.data, currentParent = _a.currentParent, prevParent = _a.prevParent, fromBlockIds = _a.fromBlockIds, toBlockId = _a.toBlockId, isMovingUp = _a.isMovingUp;
        this.moveBlocksYjs(fromBlockIds, toBlockId, isMovingUp, currentParent, prevParent);
    };
    BlockEditorBinding.prototype.moveBlocksYjs = function (blockIds, toBlockId, isMovingUp, currentParent, prevParent) {
        var yBlocks = [];
        // Adjustment is only needed if moving across different parents to account for the shift caused by removal
        // (For ex. moving from root to callout child)
        var adjustmentValue = (currentParent !== prevParent) ? (isMovingUp ? 0 : 1) : 0;
        var dropIndex = (this.yBlockHelper.findBlockIndex(toBlockId, this.yBlocks) + adjustmentValue) || 0;
        var parentMap = new Map();
        // 1. Collect indices grouped by parent
        for (var _i = 0, blockIds_1 = blockIds; _i < blockIds_1.length; _i++) {
            var id = blockIds_1[_i];
            var block = getBlockModelById(id, this.blockManager.getEditorBlocks());
            var found = this.yBlockHelper.findYBlockById(id, this.yBlocks);
            var parentY = found.parent;
            var index = found.index;
            if (index < 0) {
                continue;
            }
            yBlocks.push(this.conversion.blockModelToYElement(block));
            if (!parentMap.has(parentY)) {
                parentMap.set(parentY, []);
            }
            parentMap.get(parentY).push(index);
        }
        parentMap.forEach(function (indices, parentY) {
            indices.sort(function (a, b) { return a - b; });
            var ranges = [];
            var start = indices[0];
            var prev = indices[0];
            for (var i = 1; i < indices.length; i++) {
                var curr = indices[i];
                if (curr === prev + 1) {
                    prev = curr;
                }
                else {
                    ranges.push({ start: start, length: prev - start + 1 });
                    start = curr;
                    prev = curr;
                }
            }
            ranges.push({ start: start, length: prev - start + 1 });
            // Delete in reverse order
            for (var i = ranges.length - 1; i >= 0; i--) {
                var r = ranges[i];
                parentY.delete(r.start, r.length);
            }
        });
        // Insert all at new position
        var targetParentY = this.yBlocks;
        if (currentParent && currentParent.id) {
            targetParentY = this.yBlockHelper.findYBlockById(currentParent.id, this.yBlocks).node;
        }
        targetParentY.insert(dropIndex, yBlocks);
    };
    BlockEditorBinding.prototype.renderFromYjs = function () {
        var editorBlocks = this.conversion.yFragmentToBlocks(this.yBlocks);
        if (editorBlocks.length === 0) {
            // Sync the default block to Yjs if Yjs is empty on first load
            this.broadcastBlocksToYjs(this.yBlocks, this.blockManager.getEditorBlocks());
            return;
        }
        var populatedBlocks = BlockFactory.populateBlockProperties(editorBlocks, this.blockManager);
        this.blockManager.setEditorBlocks(populatedBlocks);
        this.blockManager.stateManager.updateManagerBlocks();
        this.attachYTextObserversToAll();
    };
    BlockEditorBinding.prototype.handleStructuralEvents = function (events, transaction) {
        var _this = this;
        this.isApplyingRemote = true;
        try {
            for (var _i = 0, events_2 = events; _i < events_2.length; _i++) {
                var event_2 = events_2[_i];
                if (event_2.target === this.yBlocks) {
                    this.handleStructuralChange(event_2, transaction, { yContainer: this.yBlocks });
                }
                else {
                    this.handleNestedStructuralChange(event_2, transaction);
                }
            }
        }
        finally {
            // Use setTimeout to allow the editor to process changes
            setTimeout(function () { _this.isApplyingRemote = false; }, 0);
        }
    };
    BlockEditorBinding.prototype.handleNestedStructuralChange = function (event, transaction) {
        var yElement = event.target;
        var yElementType = yElement.nodeName;
        if (yElementType === 'Table') {
            var tableBlockId = yElement.getAttribute('id');
            var snapshot = this.preTransactionTableSnapshots.get(tableBlockId);
            this.tableAction.applyRemoteTableStructuralChange(event, tableBlockId, this.blockManager, snapshot);
            return;
        }
        if (yElementType === 'tableCell') {
            // A block was added or removed inside a cell (e.g. Enter key in cell)
            var tableBlockId = this.getTableBlockIdFromCell(yElement);
            var cellId = yElement.getAttribute('id');
            this.tableAction.applyRemoteCellBlockChange(event, tableBlockId, cellId, this.blockManager);
            return;
        }
        // Get parent block context
        var context = this.getParentBlockContext(yElement);
        if (context && isChildrenTypeBlock(yElementType)) {
            this.handleStructuralChange(event, transaction, {
                yContainer: yElement,
                parentBlockId: context.parentBlockId
            });
        }
    };
    BlockEditorBinding.prototype.handleStructuralChange = function (event, transaction, context) {
        var delta = event.changes.delta;
        var snapshotKey = context.parentBlockId || '';
        var snapshot = Array.from(this.preTransactionBlockSnapshots.get(snapshotKey));
        var analysis = this.analyzeDelta(delta, snapshot);
        this.applyDeltaOps(analysis, transaction, context, snapshot);
    };
    BlockEditorBinding.prototype.analyzeDelta = function (delta, snapshot) {
        var newIndex = 0;
        var snapshotIndex = 0;
        var inserts = [];
        var deletes = [];
        // Step 1: Collect raw inserts & deletes
        for (var _i = 0, delta_1 = delta; _i < delta_1.length; _i++) {
            var op = delta_1[_i];
            if (op.retain !== undefined) {
                newIndex += op.retain;
                snapshotIndex += op.retain;
            }
            else if (op.insert !== undefined && Array.isArray(op.insert)) {
                for (var i = 0; i < op.insert.length; i++) {
                    var el = op.insert[i];
                    inserts.push({
                        id: el.getAttribute('id'),
                        yElement: el,
                        index: newIndex + i
                    });
                }
                newIndex += op.insert.length;
            }
            else if (op.delete !== undefined) {
                for (var i = 0; i < op.delete; i++) {
                    var id = snapshot[snapshotIndex + i];
                    deletes.push({
                        id: id,
                        index: snapshotIndex + i
                    });
                }
                snapshotIndex += op.delete;
            }
        }
        // Step 2: Detect MOVE (same id in insert + delete)
        var deleteMap = new Map();
        deletes.forEach(function (d) { return deleteMap.set(d.id, d.index); });
        var moves = [];
        var transforms = [];
        var finalInserts = [];
        var finalDeletes = [];
        for (var _a = 0, inserts_1 = inserts; _a < inserts_1.length; _a++) {
            var ins = inserts_1[_a];
            if (deleteMap.has(ins.id)) {
                var deleteIndex = deleteMap.get(ins.id);
                // Same index → TRANSFORM
                if (deleteIndex === ins.index) {
                    transforms.push(ins);
                }
                else {
                    // Different index → MOVE
                    moves.push({
                        id: ins.id,
                        toIndex: ins.index
                    });
                }
                deleteMap.delete(ins.id); // consume
            }
            else {
                finalInserts.push(ins);
            }
        }
        // Remaining deletes = actual deletes
        deleteMap.forEach(function (index, id) {
            finalDeletes.push({ id: id, index: index });
        });
        return {
            inserts: finalInserts,
            deletes: finalDeletes,
            moves: moves,
            transforms: transforms
        };
    };
    BlockEditorBinding.prototype.applyDeltaOps = function (analysis, transaction, context, snapshot) {
        // 1. TRANSFORMS (highest priority)
        for (var _i = 0, _a = analysis.transforms; _i < _a.length; _i++) {
            var t = _a[_i];
            this.handleRemoteTransformation(t.id, t.yElement, t.index, transaction);
        }
        // 2. MOVES
        if (analysis.moves.length > 0) {
            var moveIds = analysis.moves.map(function (m) { return m.id; });
            var firstMove = analysis.moves[0];
            var toBlockId = snapshot[firstMove.toIndex];
            this.blockManager.execCommand({
                command: 'MoveBlock',
                state: {
                    fromBlockIds: moveIds,
                    toBlockId: toBlockId
                }
            });
            // Attach observers
            for (var _b = 0, _c = analysis.moves; _b < _c.length; _b++) {
                var m = _c[_b];
                var node = this.yBlockHelper.findYBlockById(m.id, this.yBlocks).node;
                this.attachYTextObserverToBlock(node);
            }
        }
        // 3. INSERTS
        var workingOrder = snapshot.slice();
        for (var _d = 0, _e = analysis.inserts; _d < _e.length; _d++) {
            var ins = _e[_d];
            var targetId = null;
            var isAfter = false;
            var blockModel = this.conversion.yElementToBlockModel(ins.yElement, context.parentBlockId);
            if (ins.index >= workingOrder.length) {
                // append at end
                targetId = workingOrder[workingOrder.length - 1] || null;
                isAfter = true;
            }
            else {
                // insert before existing item
                targetId = workingOrder[ins.index];
                isAfter = false;
            }
            this.blockManager.editorMethods.addBlock(blockModel, targetId, isAfter, true);
            workingOrder.splice(ins.index, 0, blockModel.id);
            this.attachYTextObserverToBlock(ins.yElement);
        }
        // 4. DELETES (only real deletes now)
        for (var _f = 0, _g = analysis.deletes; _f < _g.length; _f++) {
            var del = _g[_f];
            this.blockManager.editorMethods.removeBlock(del.id, context.parentBlockId);
        }
    };
    BlockEditorBinding.prototype.handleRemoteTransformation = function (deletedId, newYBlock, index, transaction) {
        var _this = this;
        this.isApplyingRemote = true;
        try {
            var newBlockModel = this.conversion.yElementToBlockModel(newYBlock);
            var currentBlock = getBlockModelById(deletedId, this.blockManager.getEditorBlocks());
            newBlockModel = BlockFactory.createBlockFromPartial(newBlockModel);
            var blockElement = this.blockManager.blockContainer.querySelector("#" + deletedId);
            this.parent.blockManager.blockService.updateContent(deletedId, newBlockModel.content);
            this.blockManager.blockCommand.handleBlockTransformation({
                block: currentBlock,
                blockElement: blockElement,
                newBlockType: newBlockModel.blockType,
                props: newBlockModel.properties,
                indent: newBlockModel.indent,
                isUndoRedoAction: true,
                shouldPreventUpdates: !transaction.local
            });
        }
        finally {
            setTimeout(function () { _this.isApplyingRemote = false; }, 0);
        }
    };
    BlockEditorBinding.prototype.getParentBlockContext = function (yElement) {
        var current = yElement;
        while (current) {
            if (current instanceof this.YRuntime.XmlElement) {
                var nodeName = current.nodeName;
                var id = current.getAttribute('id');
                // For Callout/Quote/Collapsible: these directly contain child blocks
                if (id && (nodeName === 'Callout' || nodeName === 'Quote' || nodeName.startsWith('Collapsible'))) {
                    return {
                        parentBlockId: id,
                        yContainer: yElement,
                        containerType: nodeName.toLowerCase()
                    };
                }
                // Skip internal structures like tableRow (no id, structural only)
            }
            current = current.parent;
        }
        return null;
    };
    BlockEditorBinding.prototype.getTableBlockIdFromCell = function (yCell) {
        var yRow = yCell.parent;
        var yTable = yRow.parent;
        return yTable.getAttribute('id');
    };
    BlockEditorBinding.prototype.handlePropertyEvent = function (event) {
        var yElement = event.target;
        // tableColumn property changes (width, headerText, type)
        if (yElement.nodeName === 'tableColumn') {
            var yTable = yElement.parent;
            var tableBlockId = yTable.getAttribute('id');
            this.tableAction.applyRemoteColumnPropertyChange(event, tableBlockId, this.blockManager);
            return;
        }
        var blockId = yElement.getAttribute('id');
        // Get the changed keys
        var changedKeys = event.changes.keys;
        var block = getBlockModelById(blockId, this.blockManager.getEditorBlocks());
        changedKeys.forEach(function (change, key) {
            var newValue = yElement.getAttribute(key);
            if (key === 'indent') {
                block.indent = parseInt(newValue || '0', 10);
            }
            else {
                try {
                    block.properties["" + key] = JSON.parse(newValue);
                }
                catch (_a) {
                    block.properties["" + key] = newValue;
                }
            }
        });
        this.blockManager.blockService.replaceBlock(blockId, block);
        this.blockManager.stateManager.updateManagerBlocks();
        this.blockManager.observer.notify('modelChanged', {
            type: 'ReplaceBlock',
            state: {
                targetBlockId: block.id,
                block: block,
                oldBlock: null,
                preventEventTrigger: true
            }
        });
    };
    BlockEditorBinding.prototype.handleTextEventIncremental = function (event) {
        var yText = event.target;
        var blockId = this.yBlockHelper.findBlockIdForYText(yText, this.yBlocks);
        // Get current block
        var block = getBlockModelById(blockId, this.blockManager.getEditorBlocks());
        var blockElement = this.blockManager.getBlockElementById(blockId);
        var contentContainer = getBlockContentElement(blockElement);
        // Extract delta operations from the Y.XmlText event
        var delta = this.incrementalSync.extractDeltaFromEvent(event);
        // Apply delta to DOM using offset-based mutations
        this.incrementalSync.applyDelta(contentContainer, delta, event);
        // Update the block content in the model
        var newContent = this.conversion.yTextToContentModel(yText);
        this.blockManager.blockService.updateContent(block.id, newContent);
    };
    BlockEditorBinding.prototype.attachYTextObserverToBlock = function (yBlock) {
        for (var _i = 0, _a = yBlock.toArray(); _i < _a.length; _i++) {
            var child = _a[_i];
            if (child instanceof this.YRuntime.XmlText) {
                this.observeYText(child);
            }
            else if (child instanceof this.YRuntime.XmlElement) {
                // Recursively attach to nested blocks
                this.attachYTextObserverToBlock(child);
            }
        }
    };
    BlockEditorBinding.prototype.observeYText = function (yText) {
        var _this = this;
        if (this.observedYTexts.has(yText)) {
            return;
        }
        this.observedYTexts.add(yText);
        yText.observe(function (event, transaction) {
            // Skip if this is our own local change
            var localOrigins = new Set([ySyncPluginKey, yExcludedOrigin]);
            if (localOrigins.has(transaction.origin)) {
                return;
            }
            if (_this.isApplyingRemote) {
                return;
            }
            // Mark this yText as handled so we don't process it again in applyYjsChanges
            _this.handledYTextInTransaction.add(yText);
            _this.handleTextEventIncremental(event);
        });
    };
    BlockEditorBinding.prototype.attachYTextObserversToAll = function () {
        for (var _i = 0, _a = this.yBlocks.toArray(); _i < _a.length; _i++) {
            var child = _a[_i];
            if (child instanceof this.YRuntime.XmlElement) {
                this.attachYTextObserverToBlock(child);
            }
        }
    };
    BlockEditorBinding.prototype.handleBlockInsertion = function (change) {
        var block = change.data.block;
        var targetId = change.data.targetId;
        var place = change.data.isAfter ? 'after' : 'before';
        var parentId = block.parentId;
        var yBlock = this.conversion.blockModelToYElement(block);
        if (parentId) {
            this.insertIntoParent(yBlock, parentId, targetId, place);
        }
        else {
            var targetIndex = this.yBlockHelper.findBlockIndex(targetId, this.yBlocks);
            var insertIndex = targetIndex >= 0
                ? (place === 'after' ? targetIndex + 1 : targetIndex)
                : this.yBlocks.length;
            this.yBlocks.insert(insertIndex, [yBlock]);
        }
    };
    BlockEditorBinding.prototype.handleBlockDeletion = function (change) {
        var blockId = change.data.block.id;
        var result = this.yBlockHelper.findYBlockById(blockId, this.yBlocks);
        if (result) {
            var node = result.node, parent_1 = result.parent;
            var index = parent_1.toArray().indexOf(node);
            if (index >= 0) {
                parent_1.delete(index, 1);
            }
        }
    };
    BlockEditorBinding.prototype.handleBlockTransformation = function (change) {
        var block = change.data.block;
        var container = block.parentId
            ? this.yBlockHelper.getParentContainer(block.parentId)
            : this.yBlocks;
        var newNode = this.conversion.blockModelToYElement(block);
        this.transformNode(container, block.id, newNode);
    };
    BlockEditorBinding.prototype.transformNode = function (container, targetId, newNode) {
        var index = this.yBlockHelper.findBlockIndex(targetId, container);
        container.delete(index, 1);
        container.insert(index, [newNode]);
    };
    BlockEditorBinding.prototype.handleBlockUpdateIncremental = function (change) {
        var block = change.data.block;
        var found = this.yBlockHelper.findYBlockById(block.id, this.yBlocks);
        if (!found) {
            return;
        }
        if (block.blockType === 'Table') {
            var prevBlock = change.data.prevBlock;
            if (prevBlock) {
                this.tableAction.syncTableUpdateToYjs(found.node, prevBlock, block, this.doc);
            }
        }
        this.updateYBlockAttributesIfChanged(found.node, block);
        if (found.node.get(0) instanceof this.YRuntime.XmlText) {
            var yText = found.node.get(0);
            this.segmentSync.syncSegmentsToYText(yText, block.content);
        }
    };
    BlockEditorBinding.prototype.updateYBlockAttributesIfChanged = function (yBlock, block) {
        // Update indent only if changed
        var newIndent = block.indent;
        var currentIndent = parseInt(yBlock.getAttribute('indent'), 10) || 0;
        if (newIndent !== currentIndent) {
            if (newIndent > 0) {
                yBlock.setAttribute('indent', String(newIndent));
            }
            else {
                yBlock.removeAttribute('indent');
            }
        }
        if (block.properties) {
            var _a = block.properties, children = _a.children, rows = _a.rows, columns = _a.columns, props = __rest(_a, ["children", "rows", "columns"]);
            for (var _i = 0, _b = Object.keys(props); _i < _b.length; _i++) {
                var key = _b[_i];
                var currentValue = yBlock.getAttribute(key);
                var newValue = typeof props["" + key] === 'object' ? JSON.stringify(props["" + key]) : String(props["" + key]);
                if (currentValue !== newValue) {
                    yBlock.setAttribute(key, newValue);
                }
            }
        }
    };
    BlockEditorBinding.prototype.insertIntoParent = function (yBlock, parentId, targetId, place) {
        var parentYBlock = this.yBlockHelper.findYBlockById(parentId, this.yBlocks).node;
        var childIndex = this.yBlockHelper.findChildIndex(parentYBlock, targetId);
        var insertIndex = place === 'after' ? childIndex + 1 : childIndex;
        parentYBlock.insert(insertIndex, [yBlock]);
    };
    BlockEditorBinding.prototype.broadcastBlocksToYjs = function (yBlocks, blocks) {
        var _this = this;
        yBlocks.doc.transact(function () {
            // Insert new blocks
            var yElements = blocks.map(function (block) { return _this.conversion.blockModelToYElement(block); });
            yBlocks.insert(0, yElements);
        }, ySyncPluginKey);
        for (var _i = 0, _a = this.yBlocks.toArray(); _i < _a.length; _i++) {
            var block = _a[_i];
            var yText = block.get(0);
            if (yText instanceof this.YRuntime.XmlText) {
                this.observeYText(yText);
            }
        }
    };
    /**
     * Removes a mention character (e.g., "/") from Yjs at the specified position with excluded origin.
     * This prevents the removal from appearing in the undo/redo history.
     *
     * @param {BlockModel} block - The block model with content information
     * @param {ContentModel} affectedContent - The content model where "/" is located
     * @param {number} offsetInContent - Offset position within the affectedContent
     * @returns {void}
     * @hidden
     */
    BlockEditorBinding.prototype.removeMentionCharFromYjs = function (block, affectedContent, offsetInContent) {
        var yBlockLocation = this.yBlockHelper.findYBlockById(block.id, this.yBlocks);
        if (!yBlockLocation || !yBlockLocation.node) {
            return;
        }
        var yBlock = yBlockLocation.node;
        var yText = this.yBlockHelper.getYTextByBlock(yBlock);
        if (!yText || offsetInContent <= 0) {
            return;
        }
        // Calculate absolute offset in yText by summing all preceding content models
        // offsetInContent is offset within affectedContent, but yText contains the full block content
        var absoluteOffset = 0;
        for (var _i = 0, _a = block.content; _i < _a.length; _i++) {
            var content = _a[_i];
            if (content === affectedContent) {
                // Found the target content model, add its local offset
                absoluteOffset += offsetInContent - 1;
                break;
            }
            // Add length of preceding content models
            absoluteOffset += content.content ? content.content.length : 0;
        }
        // Delete "/" with excluded origin so it doesn't appear in undo history
        // This removal is PERMANENT and will persist even after undo/redo cycles
        yBlock.doc.transact(function () {
            yText.delete(absoluteOffset, 1);
        }, yExcludedOrigin);
    };
    BlockEditorBinding.prototype.destroy = function () {
        if (this.isDestroyed) {
            return;
        }
        this.isDestroyed = true;
        this.yBlocks.unobserveDeep(this._observeFunction);
        this.doc.off('beforeAllTransactions', this.beforeAllTransactions);
        this.doc.off('afterAllTransactions', this.afterAllTransactions);
        this.blockManager.observer.off('triggerBlockChange', this.onEditorChange);
        this.preTransactionBlockSnapshots.clear();
        this.tableAction = null;
        this.yjsPosition = null;
        this.conversion = null;
        this.incrementalSync = null;
        this.segmentSync = null;
        this.yBlockHelper = null;
    };
    return BlockEditorBinding;
}());
export { BlockEditorBinding };
