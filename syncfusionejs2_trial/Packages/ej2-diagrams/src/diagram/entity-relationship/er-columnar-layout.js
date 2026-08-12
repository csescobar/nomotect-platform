/**
 * ER Columnar Layout Utilities
 *
 * Handles dynamic column-based annotation layout for ER entity fields.
 * Columns are determined by what's actually needed across all fields.
 * Each field renders only the columns that contain data.
 */
import { cloneObject } from '../utility/base-util';
import { AnnotationConstraints } from '../enum/enum';
import { TextElement } from '../core/elements/text-element';
import { measureText } from '../utility/dom-util';
/**
 * Column layout constants (in pixels)
 * @private
 */
var MARGIN_LEFT = 5;
var MARGIN_RIGHT = 5;
var SEPARATOR_WIDTH = 8;
var NAME_WIDTH = 55;
/**
 * Special layout configuration for specific column scenarios
 * Allows easy customization of positioning for two-column layouts
 * Modify these values to adjust spacing without changing the logic
 * @private
 */
var STATIC_KEY_WIDTH = 15;
var STATIC_TYPE_WIDTH = 50;
var STATIC_CONSTRAINT_WIDTH = 25;
var BUFFER_VALUE = -60; // Extra padding for name column
var DUAL_KEY_EXTRA = 12; // Extra width when a field can be both PK and FK
/**
 * Measure the name column width dynamically based on field names
 *
 * Examines all field names in the entity and computes the maximum
 * text width needed, adding padding. This allows the name column
 * to adapt to long or short field names while keeping other columns fixed.
 *
 * @param {ErShapeModel} entityShape - The ER entity shape model
 * @returns {number} Measured name column width in pixels
 * @private
 */
function measureNameColumnWidth(entityShape) {
    var fields = entityShape.fields || [];
    if (fields.length === 0) {
        return NAME_WIDTH; // Use default if no fields
    }
    var maxNameWidth = 0;
    // Measure each field name
    for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
        var field = fields_1[_i];
        if (field.name) {
            // Use TextElement measurement for consistent sizing
            var tempTextElement = new TextElement();
            tempTextElement.style = {
                fontSize: 11,
                fontFamily: 'Arial'
            };
            tempTextElement.content = field.name;
            // Measure the field name text
            var measuredSize = measureText(tempTextElement, tempTextElement.style, field.name, 200);
            maxNameWidth = Math.max(maxNameWidth, measuredSize.width);
        }
    }
    // Return measured width with padding, but ensure minimum
    var MIN_NAME_WIDTH = 45;
    return Math.max(maxNameWidth + BUFFER_VALUE, MIN_NAME_WIDTH);
}
/**
 * Analyze all fields in an entity to determine which columns are needed
 *
 * Returns what data exists across all fields:
 * - hasKey: true if ANY field has isPrimaryKey or isForeignKey
 * - hasName: always true (required column)
 * - hasType: true if ANY field has dataType
 * - hasNotNull: true if ANY field has constraints including 'NotNull'
 * - hasUnique: true if ANY field has constraints including 'Unique'
 *
 * @param {ErShapeModel} entityShape - The ER entity shape model
 * @returns {ColumnConfig} Column configuration for the entity
 * @private
 */
function analyzeColumns(entityShape) {
    var fields = entityShape.fields || [];
    var config = {
        hasKey: fields.some(function (f) { return f.isPrimaryKey === true || f.isForeignKey === true; }),
        hasName: true,
        hasType: fields.some(function (f) { return !!f.dataType; }),
        hasNotNull: fields.some(function (f) { return f.constraints && f.constraints.indexOf('NotNull') !== -1; }),
        hasUnique: fields.some(function (f) { return f.constraints && f.constraints.indexOf('Unique') !== -1; }),
        hasDualKey: fields.some(function (f) { return f.isPrimaryKey === true && f.isForeignKey === true; })
    };
    //config.hasNotNull = entityShape.showFieldConstraints ? config.hasNotNull : false;
    //config.hasUnique = entityShape.showFieldConstraints ? config.hasUnique : false;
    return config;
}
/**
 * Calculates X positions for each column using measured widths.
 * Applies margin, spacing, and sequential layout.
 *
 * Position rules:
 * - Margin: 5px left, 5px right
 * - Key column: static 25px (only if hasKey is true)
 * - Name column: dynamic measured width (from field names + padding)
 * - Type column: static 55px (only if hasType is true)
 * - Constraint column (NN/U): static 35px, right-aligned
 * - Separator: 8px (only between columns that exist)
 *
 * Special cases (for name + type or key + name only):
 * - Compute positions sequentially from measured widths
 * - Maintain proper spacing between columns
 *
 * @param {ColumnConfig} config - Column configuration flags
 * @param {ColumnWidths} columnWidths - Measured widths for each column
 * @param {number} fieldWidth - Total available width for the field (used for right-aligned constraint)
 * @returns {ColumnPositions} Calculated X positions for each column in pixels
 * @private
 */
function calculateColumnPositions(config, columnWidths, fieldWidth) {
    var positions = {
        key: 0,
        name: 0,
        type: 0,
        constraint: 0
    };
    var currentX = MARGIN_LEFT;
    // Key column (only if it has data)
    if (config.hasKey) {
        positions.key = currentX;
        currentX += columnWidths.keyWidth;
        // Add separator after key if other columns follow
        if (config.hasName || config.hasType || config.hasNotNull || config.hasUnique) {
            currentX += SEPARATOR_WIDTH;
        }
    }
    // Name column (always present)
    if (config.hasName) {
        positions.name = currentX;
        currentX += columnWidths.nameWidth;
        // Add separator after name if more columns follow
        if (config.hasType || config.hasNotNull || config.hasUnique) {
            currentX += SEPARATOR_WIDTH;
        }
    }
    // Type column
    if (config.hasType) {
        positions.type = currentX;
        currentX += columnWidths.typeWidth;
        // Add separator before constraint column if it exists
        if (config.hasNotNull || config.hasUnique) {
            currentX += SEPARATOR_WIDTH;
        }
    }
    // Single constraint column positioned from the right edge
    if (config.hasNotNull || config.hasUnique) {
        // Position constraint column from right edge (negative means from right)
        positions.constraint = -columnWidths.constraintWidth;
    }
    return positions;
}
/**
 * Calculate minimum width needed for an entity based on columns and measured content
 *
 * Returns the total width required to display all columns without clipping.
 * - Static columns (key, type, constraint) use fixed widths
 * - Name column uses measured width from field names
 * - Constraint columns are right-aligned and factored into total width
 *
 * @param {ColumnConfig} config - Column configuration
 * @param {ColumnWidths} columnWidths - Measured column widths
 * @returns {number} Minimum width in pixels
 * @private
 */
export function calculateMinimumEntityWidth(config, columnWidths) {
    var MARGIN = MARGIN_LEFT + MARGIN_RIGHT;
    var totalWidth = MARGIN;
    var hasContentColumns = 0;
    // Add column widths for non-empty columns
    if (config.hasKey) {
        totalWidth += columnWidths.keyWidth;
        hasContentColumns++;
    }
    if (config.hasName) {
        totalWidth += columnWidths.nameWidth;
        hasContentColumns++;
    }
    if (config.hasType) {
        totalWidth += columnWidths.typeWidth;
        hasContentColumns++;
    }
    // Add constraint column width if needed
    if (config.hasNotNull || config.hasUnique) {
        totalWidth += columnWidths.constraintWidth;
        hasContentColumns++;
    }
    // Add separators only between columns that have content
    // If we have N columns, we need N-1 separators
    if (hasContentColumns > 1) {
        totalWidth += SEPARATOR_WIDTH * (hasContentColumns - 1);
    }
    return totalWidth;
}
/**
 * Get key indicator for a field
 *
 * Returns:
 * - 'PK, FK' if both primary and foreign key
 * - 'PK' if primary key
 * - 'FK' if foreign key
 * - '' (empty) if neither
 *
 * @param {ErFieldModel} field - The ER field model
 * @returns {string} Key indicator string
 * @private
 */
function getKeyIndicator(field) {
    if (field.isPrimaryKey && field.isForeignKey) {
        return 'PK, FK';
    }
    if (field.isPrimaryKey) {
        return 'PK';
    }
    if (field.isForeignKey) {
        return 'FK';
    }
    return '';
}
/**
 * Creates annotation objects for a single field row in a columnar layout.
 * Generates annotations for key, name, type, NN (not null), and U (unique),
 * including separators ('|') between columns that exist.
 *
 * Constraint columns (NN, U) are right-aligned and positioned from the right edge.
 *
 * Example output for a field with PK, NN, U:
 * - Annotation 0: 'PK' (key)
 * - Annotation 1: '|' (separator)
 * - Annotation 2: 'UnitPrice' (name)
 * - Annotation 3: '|' (separator)
 * - Annotation 4: 'DECIMAL(10,2)' (type)
 * - Annotation 5: '|' (separator)
 * - Annotation 6: 'NN' (notNull, right-aligned)
 * - Annotation 7: 'U' (unique, right-aligned)
 *
 * @param {ErFieldModel} field - ER field model containing metadata for the field
 * @param {ColumnConfig} config - Column configuration flags for the entity
 * @param {ColumnPositions} positions - Calculated X positions for columns (negative = from right)
 * @param {number} fieldWidth - Width of the field node in pixels
 * @param {number[]} columnWidths - Widths of each column in pixels
 * @param {string} [separatorColor='#9c9c9c'] - Color used for separator annotations
 * @returns {AnnotationModel[]} Array of annotation objects for rendering
 * @private
 */
export function createFieldAnnotations(field, config, positions, fieldWidth, columnWidths, separatorColor) {
    if (separatorColor === void 0) { separatorColor = '#9c9c9c'; }
    var annotations = [];
    var FONT_SIZE = 11;
    var SEPARATOR_FONT_SIZE = 29;
    // If columnWidths is not provided (legacy calls), fall back to static widths
    if (!columnWidths) {
        columnWidths = {
            keyWidth: STATIC_KEY_WIDTH,
            nameWidth: NAME_WIDTH,
            typeWidth: STATIC_TYPE_WIDTH,
            constraintWidth: STATIC_CONSTRAINT_WIDTH
        };
    }
    var addAnnotation = function (field, content, xPixel, id, isSeparator, isRightAligned, customMargin) {
        if (isSeparator === void 0) { isSeparator = false; }
        if (isRightAligned === void 0) { isRightAligned = false; }
        // Normalize pixel position to 0-1 range based on field width
        var xOffset;
        if (isRightAligned || xPixel < 0) {
            // Right-aligned: negative xPixel means distance from right edge
            xOffset = 1 + (xPixel / fieldWidth); // Negative xPixel moves left from right edge
        }
        else {
            // Left-aligned: positive xPixel is distance from left edge
            xOffset = xPixel / fieldWidth;
        }
        var fieldAnnotationStyle = {};
        if (field.annotation && field.annotation.style) {
            fieldAnnotationStyle = field.annotation.style;
        }
        var margin = customMargin ?
            { left: customMargin.left || 3, right: customMargin.right || 3, top: 0, bottom: 0 } :
            { left: 3, right: 3, top: 0, bottom: 0 };
        var annotationObj = {
            id: "er" + id.charAt(0).toUpperCase() + id.slice(1),
            content: content,
            offset: { x: xOffset, y: 0.5 },
            style: cloneObject(fieldAnnotationStyle),
            horizontalAlignment: isRightAligned ? 'Right' : 'Left',
            verticalAlignment: 'Center',
            margin: margin
        };
        // Mark separator annotations as read-only (non-editable) and apply seperator styles
        if (isSeparator) {
            annotationObj.constraints = AnnotationConstraints.ReadOnly;
            annotationObj.style.fontSize = SEPARATOR_FONT_SIZE;
            annotationObj.style.color = separatorColor;
            annotationObj.style.fontFamily = 'Source Code Pro';
        }
        annotations.push(annotationObj);
    };
    // Key column (only if it has data across any field)
    if (config.hasKey) {
        var keyIndicator = getKeyIndicator(field);
        addAnnotation(field, keyIndicator, positions.key, 'Key', false, false);
        // Separator after key if other columns follow
        if (config.hasName || config.hasType || config.hasNotNull || config.hasUnique) {
            // Place separator exactly after key column
            var separatorPos = positions.key + columnWidths.keyWidth;
            addAnnotation(field, '|', separatorPos, 'SepAfterKey', true, false);
        }
    }
    // Name column (always present)
    if (config.hasName) {
        addAnnotation(field, field.name, positions.name, 'Name', false, false);
        // Separator after name (only if more columns follow)
        if (config.hasType || config.hasNotNull || config.hasUnique) {
            // Place separator exactly after name column
            var separatorPos = positions.name + columnWidths.nameWidth;
            addAnnotation(field, '|', separatorPos, 'SepAfterName', true, false);
        }
    }
    // Type column (only if it has data across any field)
    if (config.hasType) {
        addAnnotation(field, field.dataType || '', positions.type, 'Type', false, false);
        // Separator after type (only if constraint column follows)
        if (config.hasNotNull || config.hasUnique) {
            // Place separator exactly after type column
            var separatorPos = positions.type + columnWidths.typeWidth;
            addAnnotation(field, '|', separatorPos, 'SepAfterType', true, false);
        }
    }
    // Single constraint column combining NN and U (positioned from right edge but text left-aligned)
    if (config.hasNotNull || config.hasUnique) {
        var constraintText = '';
        if (field.constraints && field.constraints.indexOf('NotNull') !== -1 && field.constraints.indexOf('Unique') !== -1) {
            // Both constraints present
            constraintText = 'NN, U';
        }
        else if (field.constraints && field.constraints.indexOf('NotNull') !== -1) {
            // Only NotNull
            constraintText = 'NN';
        }
        else if (field.constraints && field.constraints.indexOf('Unique') !== -1) {
            // Only Unique
            constraintText = 'U';
        }
        // If neither constraint is set on this field, don't show anything but keep the column space
        // Column is positioned from right edge but text is left-aligned for readability
        addAnnotation(field, constraintText, positions.constraint, 'Constraint', false, false, { left: 3, right: 5 });
    }
    return annotations;
}
function getAnnotationOffsetX(annotations, annotationId) {
    if (!annotations) {
        return undefined;
    }
    for (var i = 0; i < annotations.length; i++) {
        var annotation = annotations[parseInt(i.toString(), 10)];
        if (annotation && annotation.id === annotationId && annotation.offset && annotation.offset.x !== undefined) {
            return annotation.offset.x;
        }
    }
    return undefined;
}
function getFieldAnnotationPositions(annotations) {
    return {
        key: getAnnotationOffsetX(annotations, 'erKey') !== undefined ? getAnnotationOffsetX(annotations, 'erKey') : 0,
        name: getAnnotationOffsetX(annotations, 'erName') !== undefined ? getAnnotationOffsetX(annotations, 'erName') : 0,
        type: getAnnotationOffsetX(annotations, 'erType') !== undefined ? getAnnotationOffsetX(annotations, 'erType') : 0,
        constraint: getAnnotationOffsetX(annotations, 'erConstraint') !== undefined ? getAnnotationOffsetX(annotations, 'erConstraint') : 0
    };
}
function arePositionsEqual(positionA, positionB) {
    var TOLERANCE = 0.0001;
    return Math.abs(positionA.key - positionB.key) < TOLERANCE &&
        Math.abs(positionA.name - positionB.name) < TOLERANCE &&
        Math.abs(positionA.type - positionB.type) < TOLERANCE &&
        Math.abs(positionA.constraint - positionB.constraint) < TOLERANCE;
}
export function areFieldRowPositionsEqual(fieldNode, parentEntity, diagram) {
    if (!fieldNode || !fieldNode.annotations || !parentEntity || !parentEntity.shape) {
        return true;
    }
    var erEntity = parentEntity.shape;
    var fieldNodeAsAny = fieldNode;
    var fieldIndex = (fieldNodeAsAny.umlIndex !== undefined && fieldNodeAsAny.umlIndex !== null)
        ? fieldNodeAsAny.umlIndex - 1 : -1;
    var fields = erEntity.fields || [];
    if (fieldIndex < 0 || fieldIndex >= fields.length) {
        return true;
    }
    var expectedAnnotations = generateFieldRowAnnotations(parentEntity, fields[parseInt(fieldIndex.toString(), 10)], diagram, '#cccccc');
    var expectedPositions = getFieldAnnotationPositions(expectedAnnotations);
    var actualPositions = getFieldAnnotationPositions(fieldNode.annotations);
    return arePositionsEqual(expectedPositions, actualPositions);
}
/**
 * Generates all annotation objects for a single ER field row
 * using a columnar layout with measured column widths.
 *
 * Two sizing modes:
 * 1. Explicit width (user-provided): Use static column widths within that width
 * 2. Auto-size (no explicit width): Measure name column dynamically,
 *    allowing entity to size itself based on content
 *
 * Creates annotations for key, name, type, NN (not null), and U (unique),
 * with separators ('|') between columns. Constraint columns are right-aligned.
 *
 * @param {NodeModel} parentEntity - Parent ER entity node containing the field
 * @param {ErFieldModel} field - ER field model with metadata
 * @param {Diagram} diagram - Diagram instance used for rendering
 * @param {string} [separatorColor='#cccccc'] - Color used for separator annotations
 * @returns {AnnotationModel[]} Array of annotation objects for the field row
 * @private
 */
export function generateFieldRowAnnotations(parentEntity, field, diagram, separatorColor) {
    if (separatorColor === void 0) { separatorColor = '#cccccc'; }
    var entityShape = parentEntity.shape;
    // Analyze which columns are needed
    var config = analyzeColumns(entityShape);
    // Mode 2: Auto-size (no existing fields) - measure name column dynamically
    // Measure the name column based on all field names
    var measuredNameWidth = measureNameColumnWidth(entityShape);
    // Use static widths for other columns
    var columnWidths = {
        keyWidth: STATIC_KEY_WIDTH + (config.hasDualKey ? DUAL_KEY_EXTRA : 0),
        nameWidth: measuredNameWidth,
        typeWidth: STATIC_TYPE_WIDTH,
        constraintWidth: STATIC_CONSTRAINT_WIDTH
    };
    // Compute the minimum field width based on measured columns
    var fieldWidth = calculateMinimumEntityWidth(config, columnWidths);
    // Calculate column positions based on measured/static widths
    var positions = calculateColumnPositions(config, columnWidths, fieldWidth);
    // Generate data annotations for this field with measured column widths and separator color
    var annotations = createFieldAnnotations(field, config, positions, fieldWidth, columnWidths, separatorColor);
    return annotations;
}
/**
 * Factory for ER columnar layout utilities
 * @constructor ERColumnarLayoutFactory
 * @private
 */
var ERColumnarLayoutFactory = /** @class */ (function () {
    function ERColumnarLayoutFactory() {
    }
    /**
     * Get column configuration for an entity
     *
     * @param {ErShapeModel} entityShape - The ER entity shape model
     * @returns {ColumnConfig} Column configuration
     * @private
     */
    ERColumnarLayoutFactory.getColumnConfig = function (entityShape) {
        return analyzeColumns(entityShape);
    };
    /**
     * Get column positions for an entity with measured column widths
     *
     * Computes measured name column width and uses static widths for other columns,
     * then calculates positions based on those widths.
     *
     * @param {ErShapeModel} entityShape - The ER entity shape model
     * @param {number} fieldWidth - The available field width (used for constraint positioning)
     * @returns {ColumnPositions} Calculated column positions
     * @private
     */
    ERColumnarLayoutFactory.getColumnPositions = function (entityShape, fieldWidth) {
        if (fieldWidth === void 0) { fieldWidth = 220; }
        var config = analyzeColumns(entityShape);
        // Measure the name column based on all field names
        var measuredNameWidth = measureNameColumnWidth(entityShape);
        // Use static widths for other columns (adjust key width for dual-key fields)
        var columnWidths = {
            keyWidth: STATIC_KEY_WIDTH + (config.hasDualKey ? DUAL_KEY_EXTRA : 0),
            nameWidth: measuredNameWidth,
            typeWidth: STATIC_TYPE_WIDTH,
            constraintWidth: STATIC_CONSTRAINT_WIDTH
        };
        return calculateColumnPositions(config, columnWidths, fieldWidth);
    };
    /**
     * Calculate minimum width for an entity based on measured content
     *
     * Combines column widths (measured name, static for others) to compute
     * the minimum width the entity needs to display all content properly.
     *
     * @param {ErShapeModel} entityShape - The ER entity shape model
     * @returns {number} Minimum width in pixels
     * @private
     */
    ERColumnarLayoutFactory.calculateMinimumWidth = function (entityShape) {
        var config = analyzeColumns(entityShape);
        var measuredNameWidth = measureNameColumnWidth(entityShape);
        var columnWidths = {
            keyWidth: STATIC_KEY_WIDTH + (config.hasDualKey ? DUAL_KEY_EXTRA : 0),
            nameWidth: measuredNameWidth,
            typeWidth: STATIC_TYPE_WIDTH,
            constraintWidth: STATIC_CONSTRAINT_WIDTH
        };
        return calculateMinimumEntityWidth(config, columnWidths);
    };
    return ERColumnarLayoutFactory;
}());
export { ERColumnarLayoutFactory };
