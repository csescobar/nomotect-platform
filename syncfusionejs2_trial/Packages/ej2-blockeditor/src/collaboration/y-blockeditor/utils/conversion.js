var __assign = (this && this.__assign) || function () {
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
import { ContentType } from '../../../models/enums';
import { flattenObj, unflatten } from './dom-offset';
import { BlockFactory } from '../../../block-manager/services/block-factory';
import { isChildrenTypeBlock } from '../../../common/utils/block';
// ============================================================================
// BlockEditor → Yjs Conversion
// ============================================================================
/**
 * Converts between BlockEditor and Yjs data structures
 *
 * @hidden
 */
var Conversion = /** @class */ (function () {
    function Conversion(manager) {
        this.collabManager = manager;
        this.YRuntime = this.collabManager.getYRuntime();
    }
    /**
     * Converts a BlockEditor BlockModel to a Y.XmlElement
     *
     * @param {BlockModel} block - The BlockModel to convert
     * @returns {Y.XmlElement} Y.XmlElement representing the block
     * @hidden
     */
    Conversion.prototype.blockModelToYElement = function (block) {
        var yBlock = new this.YRuntime.XmlElement(block.blockType);
        yBlock.setAttribute('id', block.id);
        if (block.indent) {
            yBlock.setAttribute('indent', String(block.indent));
        }
        if (block.properties) {
            var props = __assign({}, block.properties);
            delete props.children;
            delete props.rows;
            delete props.columns;
            for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
                var key = _a[_i];
                var value = props["" + key];
                yBlock.setAttribute(key, typeof value === 'object' ? JSON.stringify(value) : String(value));
            }
        }
        if (this.isStructuralBlock(block.blockType)) {
            this.convertStructuralContent(block, yBlock);
        }
        else {
            var yText = this.contentToYXmlText(block.content);
            yBlock.insert(0, [yText]);
        }
        return yBlock;
    };
    /**
     * Converts array of content models to Y.XmlText
     *
     * @param {ContentModel[]} content - Array of content models to convert
     * @returns {Y.XmlText} Y.XmlText with formatted content
     * @hidden
     */
    Conversion.prototype.contentToYXmlText = function (content) {
        var _this = this;
        var yText = new this.YRuntime.XmlText();
        var delta = content.map(function (content) {
            var op = { insert: content.content };
            if (content.properties) {
                op.attributes = _this.segmentPropertiesToAttributes(content.properties);
            }
            return op;
        });
        if (delta.length > 0) {
            yText.applyDelta(delta);
        }
        return yText;
    };
    /**
     * Converts content properties to Y.Text attributes
     *
     * @param {Record<string, any>} properties - Properties to convert
     * @returns {Record<string, any>} Flattened attributes object
     * @hidden
     */
    Conversion.prototype.segmentPropertiesToAttributes = function (properties) {
        var flattenedProps = flattenObj(properties);
        var attrs = {};
        for (var _i = 0, _a = Object.keys(flattenedProps); _i < _a.length; _i++) {
            var key = _a[_i];
            var value = flattenedProps["" + key];
            attrs["" + key] = value;
        }
        return attrs;
    };
    Conversion.prototype.convertStructuralContent = function (block, yBlock) {
        var blockType = block.blockType;
        if (isChildrenTypeBlock(blockType) && block.properties.children) {
            if (blockType.toString().startsWith('Collapsible')) {
                yBlock.insert(0, [this.contentToYXmlText(block.content)]);
            }
            // Callout and Quote children are direct child elements
            for (var _i = 0, _a = block.properties.children; _i < _a.length; _i++) {
                var child = _a[_i];
                var yChild = this.blockModelToYElement(child);
                yBlock.push([yChild]);
            }
        }
        else if (blockType === 'Table') {
            // Columns first (tableColumn elements), then rows
            for (var _b = 0, _c = (block.properties.columns); _b < _c.length; _b++) {
                var col = _c[_b];
                var yCol = new this.YRuntime.XmlElement('tableColumn');
                if (col.id) {
                    yCol.setAttribute('id', col.id);
                }
                if (col.type) {
                    yCol.setAttribute('type', String(col.type));
                }
                if (col.headerText !== undefined) {
                    yCol.setAttribute('headerText', col.headerText);
                }
                if (col.width !== undefined) {
                    yCol.setAttribute('width', String(col.width));
                }
                yBlock.push([yCol]);
            }
            // Rows: table > row > cell > blocks
            for (var _d = 0, _e = (block.properties.rows); _d < _e.length; _d++) {
                var row = _e[_d];
                var yRow = new this.YRuntime.XmlElement('tableRow');
                if (row.id) {
                    yRow.setAttribute('id', row.id);
                }
                for (var _f = 0, _g = row.cells; _f < _g.length; _f++) {
                    var cell = _g[_f];
                    var yCell = new this.YRuntime.XmlElement('tableCell');
                    if (cell.id) {
                        yCell.setAttribute('id', cell.id);
                    }
                    if (cell.columnId) {
                        yCell.setAttribute('columnId', cell.columnId);
                    }
                    for (var _h = 0, _j = cell.blocks; _h < _j.length; _h++) {
                        var cellBlock = _j[_h];
                        yCell.push([this.blockModelToYElement(cellBlock)]);
                    }
                    yRow.push([yCell]);
                }
                yBlock.push([yRow]);
            }
        }
    };
    // ============================================================================
    // Yjs → BlockEditor Conversion
    // ============================================================================
    /**
     * Converts Y.XmlElement to BlockEditor BlockModel
     *
     * @param {Y.XmlElement} yBlock - Y.XmlElement to convert
     * @param {string} parentId - Optional parent block ID
     * @returns {BlockModel} BlockModel representation
     * @hidden
     */
    Conversion.prototype.yElementToBlockModel = function (yBlock, parentId) {
        var blockType = yBlock.nodeName;
        var id = yBlock.getAttribute('id');
        var indent = parseInt(yBlock.getAttribute('indent'), 10) || 0;
        var properties = {};
        var attrs = yBlock.getAttributes();
        for (var _i = 0, _a = Object.keys(attrs); _i < _a.length; _i++) {
            var key = _a[_i];
            var value = attrs["" + key];
            // Skip internal attributes
            if (key === 'id' || key === 'indent') {
                continue;
            }
            try {
                properties["" + key] = JSON.parse(value);
            }
            catch (_b) {
                properties["" + key] = value;
            }
        }
        var content = [];
        if (this.isStructuralBlockType(blockType)) {
            this.convertYStructuralContent(yBlock, properties);
            if (blockType.toString().startsWith('Collapsible')) {
                var yText = yBlock.get(0);
                if (yText instanceof this.YRuntime.XmlText) {
                    content = this.yTextToContentModel(yText);
                }
            }
        }
        else {
            // Convert inline content from Y.XmlText
            var yText = yBlock.get(0);
            if (yText instanceof this.YRuntime.XmlText) {
                content = this.yTextToContentModel(yText);
            }
        }
        var block = {
            id: id,
            blockType: blockType,
            content: content,
            indent: indent
        };
        if (parentId) {
            block.parentId = parentId;
        }
        if (Object.keys(properties).length > 0) {
            block.properties = properties;
        }
        return block;
    };
    /**
     * Converts Y.XmlText to array of content models
     *
     * @param {Y.XmlText} yText - Y.XmlText to convert
     * @returns {ContentModel[]} Array of content models
     * @hidden
     */
    Conversion.prototype.yTextToContentModel = function (yText) {
        var delta = yText.toDelta();
        var segments = [];
        for (var _i = 0, delta_1 = delta; _i < delta_1.length; _i++) {
            var op = delta_1[_i];
            var segment = BlockFactory.createContentFromPartial({
                contentType: 'Text',
                content: op.insert
            });
            if (op.attributes) {
                var flattenedProps = {};
                for (var _a = 0, _b = Object.keys(op.attributes); _a < _b.length; _a++) {
                    var key = _b[_a];
                    var value = op.attributes["" + key];
                    flattenedProps["" + key] = value;
                    if (key === 'url') {
                        segment.contentType = ContentType.Link;
                    }
                    else if (key === 'labelId') {
                        segment.contentType = ContentType.Label;
                    }
                    else if (key === 'userId') {
                        segment.contentType = ContentType.Mention;
                    }
                }
                segment.properties = unflatten(flattenedProps);
            }
            segments.push(segment);
        }
        return segments;
    };
    Conversion.prototype.convertYStructuralContent = function (yBlock, properties) {
        var _this = this;
        var blockType = yBlock.nodeName;
        var blockId = yBlock.getAttribute('id');
        if (isChildrenTypeBlock(blockType)) {
            var children_1 = [];
            yBlock.toArray().forEach(function (child) {
                if (child instanceof _this.YRuntime.XmlElement && child.nodeName !== '_text') {
                    children_1.push(_this.yElementToBlockModel(child, blockId));
                }
            });
            if (children_1.length > 0) {
                properties.children = children_1;
            }
        }
        else if (blockType === 'Table') {
            var columns_1 = [];
            var rows_1 = [];
            yBlock.toArray().forEach(function (child) {
                if (child.nodeName === 'tableColumn') {
                    var col = {};
                    var id = child.getAttribute('id');
                    var type = child.getAttribute('type');
                    var headerText = child.getAttribute('headerText');
                    var width = child.getAttribute('width');
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
                    columns_1.push(col);
                }
                else if (child.nodeName === 'tableRow') {
                    var row = {};
                    var rowId = child.getAttribute('id');
                    if (rowId) {
                        row.id = rowId;
                    }
                    var cells_1 = [];
                    child.toArray().forEach(function (yCell) {
                        var cell = {};
                        var cellId = yCell.getAttribute('id');
                        var columnId = yCell.getAttribute('columnId');
                        if (cellId) {
                            cell.id = cellId;
                        }
                        if (columnId) {
                            cell.columnId = columnId;
                        }
                        var cellBlocks = [];
                        yCell.toArray().forEach(function (yCellContent) {
                            cellBlocks.push(_this.yElementToBlockModel(yCellContent, cellId));
                        });
                        if (cellBlocks.length > 0) {
                            cell.blocks = cellBlocks;
                        }
                        cells_1.push(cell);
                    });
                    if (cells_1.length > 0) {
                        row.cells = cells_1;
                    }
                    rows_1.push(row);
                }
            });
            if (columns_1.length > 0) {
                properties.columns = columns_1;
            }
            else if (Array.isArray(properties['columns'])) {
                // Migration fallback: honour legacy JSON attribute written before this change
            }
            else {
                properties.columns = [];
            }
            if (rows_1.length > 0) {
                properties.rows = rows_1;
            }
        }
    };
    /**
     * Converts Y.XmlFragment to array of BlockModels
     *
     * @param {Y.XmlFragment} yFragment - Fragment to convert
     * @returns {BlockModel[]} Array of block models
     * @hidden
     */
    Conversion.prototype.yFragmentToBlocks = function (yFragment) {
        var _this = this;
        var blocks = [];
        yFragment.toArray().forEach(function (child) {
            if (child instanceof _this.YRuntime.XmlElement) {
                blocks.push(_this.yElementToBlockModel(child));
            }
        });
        return blocks;
    };
    /**
     * Checks if block type is structural (has children or special layout)
     *
     * @param {string} blockType - Block type name to check
     * @returns {boolean} True if block is structural
     * @hidden
     */
    Conversion.prototype.isStructuralBlock = function (blockType) {
        var type = blockType.toLowerCase();
        return type === 'callout' || type === 'table' || type.startsWith('collapsible') || type === 'quote';
    };
    Conversion.prototype.isStructuralBlockType = function (blockType) {
        return this.isStructuralBlock(blockType);
    };
    return Conversion;
}());
export { Conversion };
