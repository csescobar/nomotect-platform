/**
 * ER Node Rendering Utilities
 *
 * Handles ER Entity shape rendering using child node pattern
 * (similar to UML nodes). Each field is rendered as a child NodeModel
 * with annotations containing the combined field data.
 */
import { DiagramElement } from '../core/elements/diagram-element';
import { TextElement } from '../core/elements/text-element';
import { DiagramAction, NodeConstraints } from '../enum/enum';
import { Node } from '../objects/node';
import { Size } from '../primitives/size';
import { cloneObject, randomId } from '../utility/base-util';
import { ERColumnarLayoutFactory, generateFieldRowAnnotations, areFieldRowPositionsEqual } from './er-columnar-layout';
import { updateErFieldColors } from './er-field-reorder-util';
/**
 * Get ER Entity child nodes for rendering
 *
 * Creates header, divider, and field child nodes for the ER entity.
 * Follows the same pattern as UML classifier rendering.
 *
 * @param {DiagramElement} content - The SVG/Canvas element for the node
 * @param {any} node - The parent ER entity node
 * @param {Diagram} diagram - The diagram instance
 * @returns {DiagramElement} The updated content element
 * @private
 */
export function getErShapes(content, node, diagram) {
    var erEntity = node.shape;
    if (!erEntity) {
        return content;
    }
    var fields = erEntity.fields || [];
    var textWrap = node.maxWidth ? 'Wrap' : 'NoWrap';
    // Set up node container as vertical stack (like UML)
    node.container = { type: 'Stack', orientation: 'Vertical' };
    // Parent: allow horizontal resize only, hide thumbs, no rotation (same as UML)
    node.constraints = (NodeConstraints.Default | NodeConstraints.HideThumbs) &
        ~(NodeConstraints.Rotate | NodeConstraints.Resize) |
        NodeConstraints.ResizeEast | NodeConstraints.ResizeWest;
    node.children = [];
    // Calculate minimum width needed based on entity fields
    var minWidth = ERColumnarLayoutFactory.calculateMinimumWidth(erEntity);
    // Set minimum node dimensions
    if (!node.width || node.width < minWidth) {
        node.minWidth = minWidth * 2;
        if (diagram.nodes.length === 0 || diagram.nodes.indexOf(node) === -1) {
            node.offsetX += node.minWidth * 0.5;
        }
    }
    // Create header child node (uses header property from shape if configured)
    createErHeaderNode(node, diagram, erEntity, textWrap);
    // Create field nodes if there are fields, or create a placeholder if none exist
    if (!erEntity.collapsed) {
        if (fields.length > 0) {
            // Create field child nodes
            fields.forEach(function (field, index) {
                createErFieldNode(node, diagram, field, index, textWrap);
            });
        }
        else {
            // Create placeholder field when no fields are defined
            var placeholdErField = {
                id: 'placeholder',
                name: 'Attribute',
                dataType: undefined,
                isPrimaryKey: false,
                isForeignKey: false,
                constraints: []
            };
            erEntity.fields = erEntity.fields || [];
            erEntity.fields.push(placeholdErField);
            createErFieldNode(node, diagram, placeholdErField, 0, textWrap);
        }
    }
    /* eslint-disable */
    diagram.initObject(node);
    /* eslint-enable */
    return content;
}
/**
 * Creates a header child node for an ER entity.
 * Uses header configuration from `shape.header` if provided, including
 * annotation content, height, and style. Merges user-provided styles
 * with ER smart defaults and applies hyperlink support via
 * `initAnnotationWrapper`.
 *
 * Header style uses ShapeStyleModel to support full stroke properties:
 * strokeColor, strokeWidth, strokeDashArray, and overrides parent node styling.
 *
 * @param {NodeModel} parentNode - Parent ER entity node
 * @param {Diagram} diagram - Diagram instance used for rendering
 * @param {ErShapeModel} erEntity - ER entity shape model containing header config
 * @param {TextWrap} textWrap - Text wrapping mode for header annotation
 * @returns {void} No return value
 * @private
 */
function createErHeaderNode(parentNode, diagram, erEntity, textWrap) {
    var header = (erEntity.header || {});
    // Resolve header dimensions
    var headerHeight = header.height ? header.height : 30;
    var headerStyle = header.style || {};
    var parentStyle = getParentNodeStyle(parentNode);
    var headerAnnotation = header.annotation || {};
    headerAnnotation.content = headerAnnotation.content ? headerAnnotation.content : 'Entity';
    headerAnnotation.style = headerAnnotation.style || {};
    headerAnnotation.style.textWrapping = textWrap;
    var id = parentNode.id + 'ErEntityHeader';
    if (diagram.nameTable["" + id]) {
        id += randomId();
    }
    var headerNode = new Node(diagram, 'nodes', {
        id: id,
        annotations: [headerAnnotation],
        height: headerHeight,
        constraints: (NodeConstraints.Default | NodeConstraints.HideThumbs) &
            ~(NodeConstraints.Rotate | NodeConstraints.Drag | NodeConstraints.Resize),
        style: getHeaderStyle(headerStyle, parentStyle)
    }, true);
    erEntity.hasHeader = true;
    headerNode.parentId = parentNode.id;
    headerNode.isErHeader = true;
    headerNode.umlIndex = 0;
    if (diagram.nodes.length && diagram.nodes.indexOf(parentNode) !== -1) {
        diagram.nodes.push(headerNode);
    }
    diagram.initObject(headerNode);
    if (headerNode.wrapper.children.length > 0) {
        for (var i = 0; i < headerNode.wrapper.children.length; i++) {
            var child = headerNode.wrapper.children[parseInt(i.toString(), 10)];
            if (child instanceof DiagramElement) {
                child.isCalculateDesiredSize = false;
            }
            if (child instanceof TextElement) {
                child.canConsiderBounds = false;
            }
        }
        headerNode.wrapper.measure(new Size(undefined, undefined));
        headerNode.wrapper.arrange(headerNode.wrapper.desiredSize);
    }
    parentNode.children = getChildernCollection(parentNode);
    parentNode.children.push(headerNode.id);
}
/**
 * Create a field child node for the ER entity
 *
 * Applies style cascade for field color:
 * 1. Field-level style.fill (if provided) - highest priority
 * 2. Node-level alternateRowColors pattern (if configured)
 * 3. Node-level style.fill (if provided)
 * 4. Default white (#ffffff)
 *
 * Uses columnar layout with dynamic annotations for name, type, and constraints.
 * Only includes columns that have data (e.g., if no NotNull/Unique flags, those columns omitted).
 *
 * Each annotation is positioned with proper separators (|) between columns.
 * Child nodes stretch to fill parent width with resolved fill color.
 * Children cannot be dragged independently but are fully selectable.
 *
 * @param {any} parentNode - The parent ER entity node
 * @param {Diagram} diagram - The diagram instance
 * @param {ErFieldModel} field - The ER field model
 * @param {number} index - The field index
 * @param {TextWrap} textWrap - Text wrapping mode
 * @param {boolean} addToParent - Add to parent flag
 * @param {string} fieldId - Entity Field ID
 * @returns {void}
 * @private
 */
function createErFieldNode(parentNode, diagram, field, index, textWrap, addToParent, fieldId) {
    if (addToParent === void 0) { addToParent = true; }
    var erEntity = parentNode.shape;
    var erFieldDefaults = erEntity.fieldDefaults || {};
    var erFieldStyle = cloneObject(field.style || {});
    var parentStyle = getParentNodeStyle(parentNode);
    // Priority 1: Field-level style.fill (highest priority)
    // Priority 2: Node-level alternateRowColors pattern
    var hasValidFill = erFieldStyle && erFieldStyle.fill !== undefined && erFieldStyle.fill != null &&
        erFieldStyle.fill !== '' && erFieldStyle.fill !== 'none';
    if (!hasValidFill && erFieldDefaults && erFieldDefaults.alternateRowColors && erFieldDefaults.alternateRowColors.length >= 2) {
        erFieldStyle.fill = erFieldDefaults.alternateRowColors[index % 2];
    }
    var separatorColor = parentStyle.strokeColor;
    var annotations = generateFieldRowAnnotations(parentNode, field, diagram, separatorColor);
    field.id = field.id || (parentNode.id + 'ErField' + index);
    if (diagram.nameTable["" + field.id]) {
        field.id += randomId();
    }
    var fieldNode = new Node(diagram, 'nodes', {
        id: field.id,
        annotations: annotations,
        height: erFieldDefaults.height || 25,
        verticalAlignment: 'Stretch',
        horizontalAlignment: 'Stretch',
        constraints: (NodeConstraints.Default | NodeConstraints.HideThumbs) &
            ~(NodeConstraints.Rotate | NodeConstraints.Resize),
        style: getFieldStyle(erFieldStyle, parentStyle)
    }, true);
    fieldNode.parentId = parentNode.id;
    fieldNode.isErField = true;
    // Calculate index: header=0, fields start at 1
    fieldNode.umlIndex = index + 1;
    if (diagram.nodes.length && diagram.nodes.indexOf(parentNode) !== -1) {
        diagram.nodes.push(fieldNode);
        diagram.UpdateBlazorDiagramModel(fieldNode, 'Node');
    }
    diagram.initObject(fieldNode);
    var effectiveFieldWidth = parentNode.width ||
        (parentNode.wrapper && parentNode.wrapper.actualSize ? parentNode.wrapper.actualSize.width : undefined) ||
        parentNode.minWidth;
    if (effectiveFieldWidth !== undefined && effectiveFieldWidth !== null) {
        fieldNode.width = effectiveFieldWidth;
        if (fieldNode.wrapper) {
            fieldNode.wrapper.width = effectiveFieldWidth;
        }
    }
    if (addToParent) {
        parentNode.children = getChildernCollection(parentNode);
        parentNode.children.push(fieldNode.id);
    }
    return fieldNode;
}
function getParentNodeStyle(parentNode) {
    return parentNode.style || {};
}
function getChildernCollection(parentNode) {
    return parentNode.children || [];
}
function getHeaderStyle(headerStyle, parentStyle) {
    //default style: { fill: 'white', strokeColor: 'black', strokeWidth: 1 }
    if ((!headerStyle.fill || headerStyle.fill === 'none') && parentStyle.fill) {
        headerStyle.fill = parentStyle.fill;
    }
    if ((!headerStyle.strokeColor || headerStyle.strokeColor === 'none') && parentStyle.strokeColor) {
        headerStyle.strokeColor = parentStyle.strokeColor;
    }
    if ((!headerStyle.strokeWidth || headerStyle.strokeWidth === 0) && parentStyle.strokeWidth !== 0) {
        headerStyle.strokeWidth = parentStyle.strokeWidth;
    }
    if (headerStyle.strokeDashArray === '' && parentStyle.strokeDashArray !== '') {
        headerStyle.strokeDashArray = parentStyle.strokeDashArray;
    }
    if (headerStyle.opacity === 1 && parentStyle.opacity !== 1) {
        headerStyle.opacity = parentStyle.opacity;
    }
    if (headerStyle.gradient === undefined && parentStyle.gradient !== undefined) {
        headerStyle.gradient = parentStyle.gradient;
    }
    return headerStyle;
}
function getFieldStyle(fieldStyle, parentStyle) {
    if ((!fieldStyle.fill || fieldStyle.fill === 'none') && parentStyle.fill) {
        fieldStyle.fill = parentStyle.fill;
    }
    if ((!fieldStyle.strokeColor || fieldStyle.strokeColor === 'none') && parentStyle.strokeColor) {
        fieldStyle.strokeColor = parentStyle.strokeColor;
    }
    // Check for undefined or 0, inherit from parent if not explicitly set
    if ((fieldStyle.strokeWidth === undefined || fieldStyle.strokeWidth === 0)
        && parentStyle.strokeWidth !== undefined && parentStyle.strokeWidth !== 0) {
        fieldStyle.strokeWidth = parentStyle.strokeWidth;
    }
    // Check for undefined or empty string, inherit from parent if not explicitly set
    if ((fieldStyle.strokeDashArray === undefined || fieldStyle.strokeDashArray === '') && parentStyle.strokeDashArray !== undefined && parentStyle.strokeDashArray !== '') {
        fieldStyle.strokeDashArray = parentStyle.strokeDashArray;
    }
    if (parentStyle.opacity !== 1 && fieldStyle.opacity === 1) {
        fieldStyle.opacity = parentStyle.opacity;
    }
    if (fieldStyle.gradient === undefined && parentStyle.gradient !== undefined) {
        fieldStyle.gradient = parentStyle.gradient;
    }
    return fieldStyle;
}
function getErFieldChildIndex(fieldIndex) {
    return fieldIndex + 1;
}
function updateErFieldIndices(parentNode, diagram) {
    var nameTable = diagram.nameTable;
    var fields = parentNode.children ? parentNode.children
        .map(function (childId) { return nameTable["" + childId]; })
        .filter(function (child) { return child && child.id.includes('ErField'); }) : [];
    for (var i = 0; i < fields.length; i++) {
        var fieldNode = fields[parseInt(i.toString(), 10)];
        if (fieldNode) {
            fieldNode.umlIndex = i + 1;
        }
    }
}
function refreshERFieldAnnotations(parentNode, diagram) {
    var nameTable = diagram.nameTable;
    var erEntity = parentNode.shape;
    var fields = erEntity.fields || [];
    var fieldNodes = parentNode.children ? parentNode.children
        .map(function (childId) { return nameTable["" + childId]; })
        .filter(function (child) { return child && child.id.includes('ErField'); }) : [];
    var nodeStrokeColor = (parentNode.style && parentNode.style.strokeColor) ? parentNode.style.strokeColor : '#cccccc';
    for (var i = 0; i < fieldNodes.length && i < fields.length; i++) {
        var fieldNode = fieldNodes[parseInt(i.toString(), 10)];
        if (fieldNode) {
            fieldNode.annotations = generateFieldRowAnnotations(parentNode, fields[parseInt(i.toString(), 10)], diagram, nodeStrokeColor);
            diagram.updateDiagramObject(fieldNode);
        }
    }
}
function refreshERParentSize(parentNode, diagram) {
    if (!parentNode.wrapper) {
        return;
    }
    var explicitWidth = parentNode.width;
    if (explicitWidth !== undefined) {
        parentNode.wrapper.width = explicitWidth;
        parentNode.width = explicitWidth;
    }
    else {
        delete parentNode.wrapper.width;
        parentNode.width = undefined;
    }
    delete parentNode.wrapper.height;
    parentNode.height = undefined;
    var availableSize = explicitWidth !== undefined ? new Size(explicitWidth, undefined) : new Size();
    parentNode.wrapper.measure(availableSize);
    parentNode.wrapper.arrange(parentNode.wrapper.desiredSize);
    parentNode.height = parentNode.wrapper.actualSize.height;
    parentNode.offsetX = parentNode.wrapper.offsetX;
    parentNode.offsetY = parentNode.wrapper.offsetY;
    diagram.updateDiagramObject(parentNode);
    diagram.updateDiagramElementQuad();
}
export function addErField(parentNode, diagram, field, index, fieldNodeId) {
    if (!parentNode || !parentNode.shape) {
        return null;
    }
    var erEntity = parentNode.shape;
    erEntity.fields = erEntity.fields || [];
    var explicitWidth = parentNode.width;
    var fieldIndex = (index !== undefined && index >= 0 && index <= erEntity.fields.length)
        ? index : erEntity.fields.length;
    if (!field.id) {
        field.id = 'ErField' + randomId();
    }
    // Get event manager from diagram's erDiagramsModule
    var eventManager = diagram.erDiagramsModule.eventManager;
    var oldValue = { fields: erEntity.fields ? erEntity.fields.slice() : [] };
    var newValue = { fields: oldValue.fields.slice() };
    newValue.fields.splice(fieldIndex, 0, field);
    if (eventManager) {
        var startAllowed = eventManager.fireEREntityChanged(diagram, parentNode, oldValue, newValue, 'Start');
        if (!startAllowed) {
            return null;
        }
    }
    erEntity.fields.splice(fieldIndex, 0, field);
    var textWrap = parentNode.maxWidth ? 'Wrap' : 'NoWrap';
    var fieldNodeIdToUse = fieldNodeId || parentNode.id + 'ErField' + randomId();
    var fieldNode = createErFieldNode(parentNode, diagram, field, fieldIndex, textWrap, false, fieldNodeIdToUse);
    var childIndex = getErFieldChildIndex(fieldIndex);
    diagram.addChild(parentNode, fieldNode.id, childIndex);
    if (explicitWidth !== undefined && explicitWidth !== null) {
        parentNode.width = explicitWidth;
        if (parentNode.wrapper) {
            parentNode.wrapper.width = explicitWidth;
        }
    }
    updateErFieldIndices(parentNode, diagram);
    updateErFieldColors(parentNode, diagram);
    var shouldRefreshFields = false;
    if (parentNode.children) {
        var diagramNameTable = diagram.nameTable;
        for (var i = 1; i < parentNode.children.length; i++) {
            var childId = parentNode.children[parseInt(i.toString(), 10)];
            if (childId !== fieldNode.id) {
                var existingFieldNode = diagramNameTable["" + childId];
                if (existingFieldNode && !areFieldRowPositionsEqual(existingFieldNode, parentNode, diagram)) {
                    shouldRefreshFields = true;
                    break;
                }
            }
        }
    }
    if (shouldRefreshFields) {
        refreshERFieldAnnotations(parentNode, diagram);
    }
    if (parentNode.wrapper) {
        refreshERParentSize(parentNode, diagram);
    }
    if (eventManager) {
        eventManager.fireEREntityChanged(diagram, parentNode, oldValue, { fields: erEntity.fields.slice() }, 'Completed');
    }
    if (!(diagram.diagramActions & DiagramAction.UndoRedo)) {
        var historyEntry = {
            type: 'ErFieldCollectionChanged', changeType: 'Insert', category: 'Internal',
            undoObject: { parentId: parentNode.id, field: cloneObject(field), fieldNodeId: fieldNode.id, index: fieldIndex },
            redoObject: { parentId: parentNode.id, field: cloneObject(field), fieldNodeId: fieldNode.id, index: fieldIndex }
        };
        diagram.addHistoryEntry(historyEntry);
    }
    return fieldNode;
}
export function removeErField(parentNode, diagram, field) {
    if (!parentNode || !parentNode.shape || !field) {
        return false;
    }
    var erEntity = parentNode.shape;
    if (!erEntity || erEntity.type !== 'Er' || !erEntity.fields || erEntity.fields.length === 0) {
        return false;
    }
    diagram.endEdit();
    // Get event manager from diagram's erDiagramsModule
    var eventManager = diagram.erDiagramsModule.eventManager;
    var oldValue = { fields: erEntity.fields ? erEntity.fields.slice() : [] };
    var fieldIndex = erEntity.fields.findIndex(function (existingField) {
        return existingField === field ||
            (existingField.id && field.id && existingField.id === field.id);
    });
    if (fieldIndex < 0) {
        return false;
    }
    var newValue = { fields: oldValue.fields.slice() };
    newValue.fields.splice(fieldIndex, 1);
    if (eventManager) {
        var startAllowed = eventManager.fireEREntityChanged(diagram, parentNode, oldValue, newValue, 'Start');
        if (!startAllowed) {
            return false;
        }
    }
    var childIndex = getErFieldChildIndex(fieldIndex);
    var childId = parentNode.children ? parentNode.children[parseInt(childIndex.toString(), 10)] : undefined;
    if (!(diagram.diagramActions & DiagramAction.UndoRedo)) {
        var historyEntry = {
            type: 'ErFieldCollectionChanged', changeType: 'Remove', category: 'Internal',
            undoObject: { parentId: parentNode.id, field: cloneObject(field), fieldNodeId: childId, index: fieldIndex },
            redoObject: { parentId: parentNode.id, field: cloneObject(field), fieldNodeId: childId, index: fieldIndex }
        };
        diagram.addHistoryEntry(historyEntry);
    }
    erEntity.fields.splice(fieldIndex, 1);
    if (!parentNode.children) {
        parentNode.children = [];
    }
    var diagramNameTable = diagram.nameTable;
    if (childId && diagramNameTable["" + childId]) {
        var childNode = diagramNameTable["" + childId];
        diagram.removeFromAQuad(childNode);
        diagram.deleteChild(childNode, parentNode, true);
        diagram.removeObjectsFromLayer(childNode);
        diagram.removeElements(childNode);
        var nodeIndex = diagram.nodes.indexOf(childNode);
        if (nodeIndex !== -1) {
            diagram.nodes.splice(nodeIndex, 1);
        }
        delete diagramNameTable["" + childId];
    }
    // No placeholder is needed when the last ER field is removed;
    // the entity height will shrink naturally.
    updateErFieldIndices(parentNode, diagram);
    updateErFieldColors(parentNode, diagram);
    if (parentNode.wrapper) {
        refreshERParentSize(parentNode, diagram);
    }
    if (eventManager) {
        eventManager.fireEREntityChanged(diagram, parentNode, oldValue, { fields: erEntity.fields.slice() }, 'Completed');
    }
    return true;
}
