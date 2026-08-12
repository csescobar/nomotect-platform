/**
 * ER Field Reordering Utilities
 *
 * Handles field reordering within ER entities with insertion index calculation
 * and field array manipulation (similar to swimlane lane reordering).
 */
import { Size } from '../primitives/size';
import { cloneObject } from '../utility/base-util';
import { DiagramAction } from '../enum/enum';
function getErFieldChildIndex(fieldIndex) {
    return fieldIndex + 1;
}
/**
 * Get all field nodes for an ER entity in order
 *
 * @param {NodeModel} entityNode - ER entity parent node
 * @param {Diagram} diagram - Diagram instance
 * @returns {NodeModel[]} Array of field NodeModels in display order
 * @private
 */
export function getErFieldNodes(entityNode, diagram) {
    var fields = [];
    if (!entityNode.children) {
        return fields;
    }
    return entityNode.children
        .map(function (childId) { return diagram.nameTable["" + childId]; })
        .filter(function (child) { return child && child.isErField === true; });
}
/**
 * Calculate insertion index based on cursor Y position
 *
 * Matches swimlane's approach: check cursor position vs field center.
 * - If cursor is BELOW field center → insert AFTER (next position)
 * - If cursor is ABOVE field center → insert BEFORE (current position)
 *
 * @param {NodeModel} entityNode - ER entity parent node
 * @param {NodeModel} sourceField - Field being dragged
 * @param {NodeModel} targetField - Field cursor is over
 * @param {number} cursorY - Current cursor Y coordinate
 * @param {Diagram} diagram - Diagram instance
 * @returns {number} Target insertion index in shape.fields[]
 * @private
 */
export function calculateFieldDropIndex(entityNode, sourceField, targetField, cursorY, diagram) {
    var fields = getErFieldNodes(entityNode, diagram);
    var sourceIndex = fields.findIndex(function (f) { return f.id === sourceField.id; });
    var targetIndex = fields.findIndex(function (f) { return f.id === targetField.id; });
    if (targetIndex === -1) {
        return sourceIndex;
    }
    var targetBounds = targetField.wrapper.bounds;
    var fieldCenter = targetBounds.y + (targetBounds.height / 2);
    // If cursor is below field center, insert AFTER (position + 1)
    // If cursor is above field center, insert BEFORE (same position)
    var dropIndex;
    if (cursorY >= fieldCenter) {
        // Cursor below center: insert AFTER this field
        dropIndex = targetIndex + 1;
    }
    else {
        // Cursor above center: insert BEFORE this field
        dropIndex = targetIndex;
    }
    return dropIndex;
}
/**
 * Get field index by node ID
 *
 * @param {string} nodeId - Field node ID
 * @param {NodeModel} entityNode - ER entity parent node
 * @param {Diagram} diagram - Diagram instance
 * @returns {number} Field index in shape.fields[] or -1 if not found
 * @private
 */
export function getErFieldIndexByNodeId(nodeId, entityNode, diagram) {
    var fields = getErFieldNodes(entityNode, diagram);
    var index = fields.findIndex(function (f) { return f.id === nodeId; });
    return index;
}
/**
 * Update field colors based on position
 *
 * Updates fill color for alternating pattern: even=white, odd=grey
 *
 * @param {NodeModel} entityNode - ER entity parent node
 * @param {Diagram} diagram - Diagram instance
 * @returns {void}
 * @private
 */
export function updateErFieldColors(entityNode, diagram) {
    var fields = getErFieldNodes(entityNode, diagram);
    var shape = entityNode.shape;
    var alternateRowColors = shape.fieldDefaults.alternateRowColors;
    // Update fill color for each field based on its position
    // Respects the style cascade: explicit field override > alternateRowColors pattern > default
    for (var i = 0; i < fields.length; i++) {
        var fieldNode = fields[parseInt(i.toString(), 10)];
        var fieldShape = (shape.fields && shape.fields[parseInt(i.toString(), 10)])
            ? shape.fields[parseInt(i.toString(), 10)]
            : null;
        // Priority 1: Field-level style.fill (explicit override)
        // If field has explicit style.fill, PRESERVE it - never update during reorder
        if (fieldShape && fieldShape.style && fieldShape.style.fill !== 'none') {
            // Keep the existing color, update the field node to match
            fieldNode.style.fill = fieldShape.style.fill;
        }
        // Priority 2: Node-level alternateRowColors pattern
        // Update based on new position after reorder
        else if (alternateRowColors && alternateRowColors.length >= 2) {
            var patternColor = alternateRowColors[i % 2];
            fieldNode.style.fill = patternColor;
        }
        // Priority 3 & 4: Node-level style.fill or default white
        // Don't update - keep existing color
    }
    return;
}
/**
 * Perform field reordering when drop occurs
 *
 * PRESERVES existing child nodes and only reorders them.
 *
 * @param {any} entityNode - ER entity parent node
 * @param {number} sourceFieldIndex - Current field index in shape.fields[]
 * @param {number} targetFieldIndex - Target insertion index in shape.fields[]
 * @param {Diagram} diagram - Diagram instance
 * @returns {HistoryEntry | null} History entry for undo/redo
 * @private
 */
export function reorderErField(entityNode, sourceFieldIndex, targetFieldIndex, diagram) {
    var shape = entityNode.shape;
    // Validate indices
    if (sourceFieldIndex < 0 || sourceFieldIndex >= shape.fields.length) {
        return null;
    }
    if (targetFieldIndex < 0 || targetFieldIndex > shape.fields.length) {
        return null;
    }
    // Don't reorder if same position
    if (sourceFieldIndex === targetFieldIndex) {
        return null;
    }
    // Store original state for undo
    var isUndoRedo = false;
    if (diagram.diagramActions & DiagramAction.UndoRedo) {
        isUndoRedo = true;
    }
    // Get event manager from diagram's erDiagramsModule
    var eventManager = diagram && diagram.erDiagramsModule ? diagram.erDiagramsModule.eventManager : null;
    var oldValue = { fields: shape.fields ? shape.fields.slice() : [] };
    var adjustedInsertIndex = (sourceFieldIndex < targetFieldIndex) && !isUndoRedo ? targetFieldIndex - 1 : targetFieldIndex;
    var newFields = shape.fields ? shape.fields.slice() : [];
    var previewMovedField = newFields.splice(sourceFieldIndex, 1)[0];
    newFields.splice(adjustedInsertIndex, 0, previewMovedField);
    if (eventManager) {
        var startAllowed = eventManager.fireEREntityChanged(diagram, entityNode, oldValue, { fields: newFields }, 'Start');
        if (!startAllowed) {
            return null;
        }
        var progressAllowed = eventManager.fireEREntityChanged(diagram, entityNode, oldValue, { fields: newFields }, 'Progress');
        if (!progressAllowed) {
            return null;
        }
    }
    // STEP 1: Reorder shape.fields[] (model array)
    var movedField = shape.fields.splice(sourceFieldIndex, 1)[0];
    shape.fields.splice(adjustedInsertIndex, 0, movedField);
    // Create undo element with ACTUAL indices after the move
    // This ensures undo/redo work correctly when sourceFieldIndex < targetFieldIndex
    // The undo-redo handler will call: reorderERField(parent, undoElement.targetIndex, undoElement.sourceIndex)
    // So we need undoElement.targetIndex to be where the field ended up (adjustedInsertIndex)
    var undoElement = {
        source: cloneObject(entityNode), sourceIndex: sourceFieldIndex,
        targetIndex: adjustedInsertIndex
    };
    // STEP 2: Reorder entityNode.children[] (child ID references)
    // +1 offset because children[0] is header
    var sourceChildIndex = getErFieldChildIndex(sourceFieldIndex);
    var targetChildIndex = getErFieldChildIndex(adjustedInsertIndex);
    var movedChildId = entityNode.children.splice(sourceChildIndex, 1)[0];
    entityNode.children.splice(targetChildIndex, 0, movedChildId);
    // STEP 3: Reorder entityNode.wrapper.children[] (rendered wrapper elements)
    // This ensures visual reordering in the DOM/rendering tree
    if (sourceChildIndex < entityNode.wrapper.children.length && targetChildIndex <= entityNode.wrapper.children.length) {
        var movedWrapperChild = entityNode.wrapper.children.splice(sourceChildIndex, 1)[0];
        entityNode.wrapper.children.splice(targetChildIndex, 0, movedWrapperChild);
    }
    // STEP 4: Measure & arrange wrapper (apply layout changes)
    // This causes the layout engine to recalculate positions based on new order
    entityNode.wrapper.measure(new Size(entityNode.width, entityNode.height));
    entityNode.wrapper.arrange(entityNode.wrapper.desiredSize);
    // Auto-resize entity node to fit new content (similar to swimlane)
    if (entityNode.wrapper.desiredSize) {
        entityNode.width = entityNode.wrapper.desiredSize.width;
        entityNode.height = entityNode.wrapper.desiredSize.height;
    }
    // STEP 4.5: Update field colors for alternating pattern (white/grey)
    // After reordering, colors need to match new positions
    updateErFieldColors(entityNode, diagram);
    // STEP 5: Update diagram state (critical for visual refresh)
    diagram.updateDiagramObject(entityNode);
    diagram.updateDiagramElementQuad();
    if (eventManager) {
        eventManager.fireEREntityChanged(diagram, entityNode, oldValue, { fields: shape.fields.slice() }, 'Completed');
    }
    // Select the moved field in its new position
    var movedFieldNode = diagram.nameTable["" + movedChildId];
    if (movedFieldNode) {
        diagram.commandHandler.select(movedFieldNode);
    }
    // Create redo element with indices swapped for proper undo/redo replay
    // The undo-redo handler will call: reorderERField(parent, redoElement.targetIndex, redoElement.sourceIndex)
    // We want to re-apply the move from sourceFieldIndex to adjustedInsertIndex
    // So we need redoElement.targetIndex=sourceFieldIndex and redoElement.sourceIndex=adjustedInsertIndex
    var redoElement = {
        source: cloneObject(entityNode), sourceIndex: adjustedInsertIndex,
        targetIndex: sourceFieldIndex
    };
    // Create history entry for undo/redo
    var entry = {
        type: 'ErFieldPositionChanged',
        undoObject: undoElement,
        redoObject: redoElement,
        category: 'Internal'
    };
    return entry;
}
