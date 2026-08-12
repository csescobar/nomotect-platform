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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import { AnnotationConstraints, FlipDirection, NodeConstraints } from '../../enum/enum';
import { VisioToSyncfusionTextBinder } from './visio-annotations';
import { createCellMap, createPathFromGeometry, createPathFromGeometrySections, ensureArray, formatPathData, getAttrString, getCellMapStringValue, getTrimmedOrEmpty, inchToPoint, inchToPx, mapCellValues, radiansToDegrees, safeNumber } from './visio-core';
import { getNodeStyle, setAnnotationStyle } from './visio-theme';
/**
 * Global shape index counter used during parsing to track shape position.
 * Incremented for each shape processed and used to look up master data.
 *
 * @type {{ value: number }}
 */
export var shapeIndex = { value: 0 };
/**
 * Constant representing the 'Property' section name in Visio shapes.
 * Used to locate property definitions in shape sections.
 *
 * @type {string}
 */
var PROPERTY_SECTION = 'Property';
/**
 * Constant representing the 'User' section name in Visio shapes.
 * Used to locate user-defined properties in shape sections.
 *
 * @type {string}
 */
var USER_SECTION = 'User';
/**
 * Constant representing the 'Relationships' cell name.
 * Used to locate relationship/connection formulas in shape cells.
 *
 * @type {string}
 */
var RELATIONSHIPS_CELL = 'Relationships';
/**
 * Constant representing the 'Value' cell name.
 * Used to locate value properties within section rows.
 *
 * @type {string}
 */
var VALUE_CELL = 'Value';
/**
 * Constant representing the 'Actions' section name in Visio shapes.
 * Used to locate action/behavioral definitions in shape sections.
 *
 * @type {string}
 */
var ACTIONS_SECTION = 'Actions';
/**
 * Converts a Visio shape object into a Syncfusion diagram node format.
 * This is the main transformation function that takes parsed Visio data
 * and converts it to the EJ2 diagram format.
 *
 * Handles:
 * - Coordinate system conversion (inches to pixels)
 * - Text binding and positioning
 * - Port/connection point mapping
 * - Styling and constraints application
 * - Shape type determination
 * - Group shape padding
 *
 * @param {any} node - The VisioShape object to convert.
 * @param {ParsingContext} context - Parser context with theme and configuration data.
 * @param {VisioNodeInput[]} shapeGroup - Array of all shapes (used for group processing).
 * @returns {any} A Syncfusion diagram node object with all properties transformed.
 *
 * @example
 * const diagramNode = convertVisioShapeToNode(visioShape, context, allShapes);
 * console.log(diagramNode.id); // Shape ID
 * console.log(diagramNode.width); // Width in pixels
 * console.log(diagramNode.annotations); // Text annotations
 *
 * @private
 */
export function convertVisioShapeToNode(node, context, shapeGroup) {
    // Compute EJ2 pivot by mapping Visio LocPin to top-origin pivot
    var pivot = { x: 0.5, y: 0.5 };
    var hasSize = node && node.width != null && node.height != null;
    var hasPivot = node && node.pivotX != null && node.pivotY != null;
    if (hasSize && hasPivot) {
        var widthInches = Number(node.width);
        var heightInches = Number(node.height);
        if (widthInches > 0 && heightInches > 0) {
            pivot = normalizePivotForEJ2(Number(node.pivotX), Number(node.pivotY), widthInches, heightInches);
        }
    }
    // Convert Visio ports into Syncfusion diagram port format
    var diagramPorts = (node.ports || []).map(function (port) { return ({
        id: port.id,
        offset: { x: port.x, y: port.y },
        shape: 'Circle',
        style: { strokeColor: '#757575', strokeWidth: 1 }
    }); });
    // Resolve annotation style for text rendering
    var annotation = node.annotation;
    var annotationStyle = setAnnotationStyle(node, context);
    // Initialize text binding (handles text positioning relative to shape bounds)
    var textBinding = null;
    // Process text annotation positioning if annotation data is available
    if (annotation && annotation.txtPinX !== undefined) {
        var shapeTransform = {
            pinX: node.offsetX,
            pinY: node.pinY / 96,
            width: node.width,
            height: node.height,
            verticalAlignment: setVerticalAlignment(node)
        };
        var textTransform = {
            txtWidth: annotation.txtWidth,
            txtHeight: annotation.txtHeight,
            txtPinX: annotation.txtPinX,
            txtPinY: annotation.txtPinY,
            txtLocPinX: annotation.txtLocPinX,
            txtLocPinY: annotation.txtLocPinY,
            txtAngle: (annotation.rotateAngle || 0) * (Math.PI / 180),
            txtMargin: annotation.margin
        };
        textBinding = VisioToSyncfusionTextBinder.bindVisioTextToSyncfusion(shapeTransform, textTransform);
    }
    // Resolve alignment and offset for annotation rendering
    var alignmentConfig = resolveAnnotationAlignmentAndOffset(node, textBinding);
    // Determine if this is a group node (contains child shapes)
    var isGroup = Array.isArray(node.children) && node.children.length > 0;
    // Build group-specific node object
    if (isGroup) {
        return {
            id: node.id,
            addInfo: node.addInfo,
            shape: setNodeShape(node, context, isGroup),
            style: getNodeStyle(node, context, isGroup),
            children: node.children,
            parentId: node.parentId,
            pivot: pivot,
            constraints: setConstraints(node, context),
            shadow: undefined,
            rotateAngle: (360 - radiansToDegrees(node.rotateAngle)) % 360 || 0,
            annotations: createAnnotationArray(node, alignmentConfig, annotationStyle)
        };
    }
    // Build standard non-group node object
    return {
        id: node.id,
        width: inchToPx(node.width),
        height: inchToPx(node.height),
        offsetX: inchToPx(node.offsetX),
        offsetY: node.offsetY,
        shape: setNodeShape(node, context, isGroup),
        addInfo: node.addInfo,
        style: getNodeStyle(node, context, isGroup),
        constraints: setConstraints(node, context),
        shadow: setShadow(node),
        flip: setFlip(node),
        visible: setVisibility(node),
        tooltip: { content: node.tooltip || '' },
        pivot: pivot,
        rotateAngle: (360 - radiansToDegrees(node.rotateAngle)) % 360 || 0,
        children: node.children,
        parentId: node.parentId,
        padding: setPadding(isGroup),
        ports: diagramPorts,
        margin: node.calculatedMargin ? node.calculatedMargin : undefined,
        annotations: createAnnotationArray(node, alignmentConfig, annotationStyle)
    };
}
/**
 * Determines the visibility state of a shape.
 * TextAnnotation shapes are always visible; other shapes use the visibility flag.
 *
 * @param {VisioNodeInput} node - The VisioShape object to check.
 * @returns {boolean} True if shape should be visible, false otherwise.
 *
 * @example
 * const visible = setVisibility(shape);
 * // Returns true for TextAnnotation, inverse of visibility for others
 *
 * @private
 */
function setVisibility(node) {
    // TextAnnotations are always visible
    return node.shape && node.shape.shape === 'TextAnnotation' ? true : node.visibility !== undefined ? !node.visibility : true;
}
/**
 * Sets padding for a shape based on whether it's a group or regular shape.
 * Group shapes have internal padding to accommodate child shapes;
 * regular shapes have no padding.
 *
 * @param {boolean} isGroup - Whether the shape is a group/container.
 * @returns {Padding} A padding object with all sides set uniformly.
 *
 * @example
 * const padding = setPadding(true);  // { left: 12, right: 12, top: 12, bottom: 12 }
 * const padding = setPadding(false); // { left: 0, right: 0, top: 0, bottom: 0 }
 *
 * @private
 */
function setPadding(isGroup) {
    var value = isGroup ? 12 : 0;
    return { left: value, right: value, top: value, bottom: value };
}
/**
 * Converts a Visio text decoration model to EJ2 text decoration format.
 * Maps underline and strikethrough properties to EJ2 supported values.
 *
 * @param {VisioTextDecorationModel | undefined} textDecoration - The Visio text decoration model.
 * @returns {'None' | 'Underline' | 'LineThrough'} The EJ2 text decoration value.
 *
 * @example
 * const decoration = getTextDecoration(visioModel);
 * // Returns 'Underline', 'LineThrough', or 'None'
 *
 * @private
 */
export function getTextDecoration(textDecoration) {
    if (!textDecoration) {
        return 'None';
    }
    if (textDecoration.underline) {
        return 'Underline';
    }
    if (textDecoration.strikethrough) {
        return 'LineThrough';
    }
    return 'None';
}
/**
 * Calculates the rotation angle for text annotations.
 * Handles segment angles for connector text and applies 360-degree normalization.
 *
 * @param {VisioNodeInput} node - The VisioShape with annotation data.
 * @returns {number} The rotation angle in degrees (0-360).
 *
 * @example
 * const angle = setRotateAngle(shape);
 * // Returns adjusted rotation angle with segment angle if applicable
 *
 * @private
 */
function setRotateAngle(node) {
    var rotateAngle = 0;
    if (node.annotation && node.annotation.rotateAngle) {
        // Normalize angle to 0-360 range (inverse for EJ2)
        rotateAngle = (360 - (node.annotation.rotateAngle)) % 360;
        // Add 90 degrees for segment angle (used for connector text)
        // if (node.annotation && node.annotation.segmentAngle) {
        //     rotateAngle += 90;
        // }
        return rotateAngle;
    }
    else if (node.annotation && node.annotation.segmentAngle) {
        rotateAngle += 90;
    }
    return rotateAngle;
}
/**
 * Extracts horizontal text alignment from a shape's annotation.
 *
 * @param {VisioNodeInput} node - The VisioShape with annotation data.
 * @returns {string} The horizontal alignment value ('Left', 'Right', 'Center', 'Justify').
 *
 * @example
 * const align = setHorizontalAlignment(shape);
 *
 * @private
 */
function setHorizontalAlignment(node) {
    return node.annotation && node.annotation.horizontalAlignment;
}
/**
 * Extracts vertical text alignment from a shape's annotation.
 *
 * @param {VisioNodeInput} node - The VisioShape with annotation data.
 * @returns {string} The vertical alignment value ('Top', 'Middle', 'Bottom').
 *
 * @example
 * const align = setVerticalAlignment(shape);
 *
 * @private
 */
function setVerticalAlignment(node) {
    return node.annotation && node.annotation.verticalAlignment;
}
/**
 * Resolves effective text alignment and offset for EJ2 annotation emission.
 * Consolidates orientation-aware alignment logic to handle vertical text, explicit pins, and defaults.
 * Eliminates code duplication between group and non-group node paths.
 *
 * @param {VisioNodeInput} node - The Visio node being converted
 * @param {SyncfusionTextBinding | null} textBinding - Pre-computed text binding from VisioToSyncfusionTextBinder
 * @returns {AnnotationAlignmentConfig} Resolved alignment values and offset for annotation rendering
 * @private
 */
function resolveAnnotationAlignmentAndOffset(node, textBinding) {
    // Extract base alignment from annotation
    var baseVerticalAlign = setVerticalAlignment(node);
    var baseHorizontalAlign = setHorizontalAlignment(node);
    var isVerticalText = isVerticalTextAnnotation(node);
    // Check if explicit text positioning should be preserved
    var annotation = node.annotation;
    var hasExplicitTextPosition = false;
    if (annotation) {
        var hasExplicitFlag = annotation.hasExplicitTextPosition === true;
        hasExplicitTextPosition = hasExplicitFlag;
    }
    // Calculate node dimensions in pixels
    var nodeWidthPx = inchToPx(node.width);
    var nodeHeightPx = inchToPx(node.height);
    var annotationWidthInches = node.width;
    if (annotation && annotation.txtWidth) {
        annotationWidthInches = annotation.txtWidth;
    }
    var annotationWidthPx = inchToPx(annotationWidthInches);
    // Compute annotation offset using existing logic
    var annotationOffset = calculateAnnotationOffset(textBinding, baseVerticalAlign, baseHorizontalAlign, nodeHeightPx, nodeHeightPx, annotationWidthPx, nodeWidthPx, isVerticalText, hasExplicitTextPosition);
    // Determine effective alignment based on text orientation
    var effectiveVerticalAlign = baseVerticalAlign;
    var effectiveHorizontalAlign = baseHorizontalAlign;
    if (isVerticalText) {
        // Vertical text: center both alignments; offset + rotation already position content
        effectiveVerticalAlign = 'Center';
        effectiveHorizontalAlign = 'Center';
    }
    else {
        if (hasExplicitTextPosition) {
            // Non-vertical with explicit pins: derive vertical anchor from TxtPinY, center horizontal
            effectiveHorizontalAlign = 'Center';
            var nodeHeightInches = typeof node.height === 'number' ? node.height : 0;
            var derived = deriveVerticalAlignForExplicitPins(annotation, nodeHeightInches);
            effectiveVerticalAlign = derived;
        }
        // Otherwise, preserve computed alignments as-is
    }
    return {
        verticalAlign: effectiveVerticalAlign,
        horizontalAlign: effectiveHorizontalAlign,
        annotationOffset: annotationOffset
    };
}
/**
 * Creates annotation array for Syncfusion diagram node.
 * Consolidates annotation properties including content, styling, alignment, and offset.
 * Shared by both group and non-group node paths.
 *
 * @param {VisioNodeInput} node - The Visio node being converted
 * @param {AnnotationAlignmentConfig} alignmentConfig - Resolved alignment and offset configuration
 * @param {ResolvedAnnotationStyle} annotationStyle - Resolved style for annotation rendering
 * @returns {any[]} Array containing single annotation object with all properties
 * @private
 */
function createAnnotationArray(node, alignmentConfig, annotationStyle) {
    // Calculate annotation width in pixels from Visio inches
    var annotationInputWidthInches = node.width;
    var nodeAnnotation = node.annotation;
    if (nodeAnnotation.txtWidth) {
        annotationInputWidthInches = nodeAnnotation.txtWidth;
    }
    var annotationWidthPx = inchToPx(annotationInputWidthInches);
    var annotation = {
        content: node.annotation.content,
        width: annotationWidthPx,
        visibility: node.annotation.visible,
        hyperlink: setHyperLink(node, annotationStyle),
        rotateAngle: setRotateAngle(node),
        constraints: setAnnotationConstraints(node.annotation),
        verticalAlignment: alignmentConfig.verticalAlign,
        horizontalAlignment: alignmentConfig.horizontalAlign,
        offset: alignmentConfig.annotationOffset,
        style: annotationStyle
    };
    return [annotation];
}
/**
 * Calculates the final annotation offset after applying alignment rules.
 * If explicit text pins exist, preserves binder offsets. For vertical text (TextDirection=1),
 * swaps axes so Visio VerticalAlign maps to X and HorzAlign maps to Y.
 *
 * @param {SyncfusionTextBinding|null} textBinding - Binder-computed base offset (null => default center).
 * @param {'Top'|'Center'|'Bottom'} verticalAlignment - From Visio VerticalAlign.
 * @param {'Left'|'Center'|'Right'} horizontalAlignment - From Visio HorzAlign.
 * @param {number} annotationHeight - Annotation height (pixels). Not used; kept for signature stability.
 * @param {number} nodeHeight - Node height (pixels). Not used; kept for signature stability.
 * @param {number} annotationWidth - Annotation width (pixels). Not used; kept for signature stability.
 * @param {number} nodeWidth - Node width (pixels). Not used; kept for signature stability.
 * @param {boolean} isVerticalText - True if TextDirection=1 (rotated/vertical text).
 * @param {boolean} preserveExplicit - True when page-level text pins/dimensions define explicit position.
 * @returns {{x:number, y:number}} Final normalized offset in [0..1]×[0..1].
 */
function calculateAnnotationOffset(textBinding, verticalAlignment, horizontalAlignment, annotationHeight, nodeHeight, annotationWidth, nodeWidth, isVerticalText, preserveExplicit) {
    // Get base offset from binder or default to center
    var baseOffsetX = 0.5;
    var baseOffsetY = 0.5;
    if (textBinding !== null && textBinding.offset) {
        baseOffsetX = textBinding.offset.x;
        baseOffsetY = textBinding.offset.y;
    }
    // Clamp helper to ensure normalized range
    function clamp01(value) {
        if (value < 0) {
            return 0;
        }
        if (value > 1) {
            return 1;
        }
        return value;
    }
    // Preserve explicit page-level text pins: do not snap to alignment edges
    if (preserveExplicit) {
        return { x: clamp01(baseOffsetX), y: clamp01(baseOffsetY) };
    }
    // Start with base offsets
    var finalX = baseOffsetX;
    var finalY = baseOffsetY;
    // Orientation-aware alignment snapping
    if (isVerticalText) {
        // For vertical text, Visio VerticalAlign controls the X edge.
        if (typeof verticalAlignment === 'string') {
            if (verticalAlignment === 'Top') {
                finalX = 1;
            }
            else if (verticalAlignment === 'Bottom') {
                finalX = 0;
            }
            else {
                // Center: keep binder X
            }
        }
        // For vertical text, Visio HorzAlign controls the Y edge.
        if (typeof horizontalAlignment === 'string') {
            if (horizontalAlignment === 'Left') {
                finalY = 0;
            }
            else if (horizontalAlignment === 'Right') {
                finalY = 1;
            }
            else {
                // Center: keep binder Y
            }
        }
    }
    else {
        // For horizontal text, HorzAlign controls X
        if (typeof horizontalAlignment === 'string') {
            if (horizontalAlignment === 'Left') {
                finalX = 0;
            }
            else if (horizontalAlignment === 'Right') {
                finalX = 1;
            }
            else {
                // Center: keep binder X
            }
        }
        // For horizontal text, VerticalAlign controls Y
        if (typeof verticalAlignment === 'string') {
            if (verticalAlignment === 'Top') {
                finalY = 0;
            }
            else if (verticalAlignment === 'Bottom') {
                finalY = 1;
            }
            else {
                // Center: keep binder Y
            }
        }
    }
    // Clamp and return
    finalX = clamp01(finalX);
    finalY = clamp01(finalY);
    return { x: finalX, y: finalY };
}
/**
 * Determines if a node's annotation should be treated as vertical text.
 * Considers both TextDirection=1 (segmentAngle flag) and TxtAngle approximates 90 or 270 degrees.
 * @param {VisioNodeInput} node - The node whose annotation is being emitted.
 * @returns {boolean} True if text is vertical; otherwise false.
 */
function isVerticalTextAnnotation(node) {
    // Guard: missing annotation cannot be vertical
    if (!node || !node.annotation) {
        return false;
    }
    // Use existing TextDirection mapping (segmentAngle flag)
    if (node.annotation.segmentAngle === true) {
        return true;
    }
    // Consider raw rotate angle (from TxtAngle in degrees) as a vertical detector
    // Treat angles close to 90 or 270 (within a small tolerance) as vertical.
    var rawAngle = 0;
    if (typeof node.annotation.rotateAngle === 'number') {
        rawAngle = node.annotation.rotateAngle;
    }
    // Normalize to [0..360)
    var normalized = rawAngle % 360;
    if (normalized < 0) {
        normalized = normalized + 360;
    }
    // Apply tolerance for numerical stability
    var tolerance = 0.5;
    var nearNinety = Math.abs(normalized - 90) <= tolerance;
    var nearTwoSeventy = Math.abs(normalized - 270) <= tolerance;
    if (nearNinety || nearTwoSeventy) {
        return true;
    }
    return false;
}
/**
 * Derives EJ2 vertical alignment for shapes that have explicit page-level text pins
 * and are NOT vertical text. Uses Visio's local Y (0=bottom, 1=top) to choose the
 * opposing EJ2 anchor so the binder's offset lands the block exactly like Visio.
 *
 * Rules:
 * - TxtPinY near top (>= ~0.67 of Height)  -> EJ2 'Bottom'
 * - TxtPinY near bottom (<= ~0.33 of Height) -> EJ2 'Top'
 * - Otherwise -> 'Center'
 *
 * If TxtPinY is unavailable, falls back to the emitted offsetY (normalized 0..1).
 *
 * @param {VisioAnnotationInput} annotation - Parsed annotation object (with txtPinY if present).
 * @param {number} nodeHeightInches - Node height in inches (Visio units).
 * @returns {'Top' | 'Center' | 'Bottom'} Vertical alignment to emit into EJ2.
 */
function deriveVerticalAlignForExplicitPins(annotation, nodeHeightInches) {
    // Read TxtPinY (inches from bottom)
    var hasTxtPinY = false;
    var txtPinYInches = 0;
    if (annotation &&
        typeof annotation.txtPinY === 'number' &&
        isFinite(annotation.txtPinY)) {
        txtPinYInches = annotation.txtPinY;
        hasTxtPinY = true;
    }
    // Read TxtHeight (used for full-height detection)
    var hasTxtHeight = false;
    var txtHeightInches = 0;
    if (annotation &&
        typeof annotation.txtHeight === 'number' &&
        isFinite(annotation.txtHeight)) {
        txtHeightInches = annotation.txtHeight;
        hasTxtHeight = true;
    }
    // Read TxtLocPinY (needed to detect origin pin case)
    var hasTxtLocPinY = false;
    var txtLocPinYInches = 0;
    if (annotation &&
        typeof annotation.txtLocPinY === 'number' &&
        isFinite(annotation.txtLocPinY)) {
        txtLocPinYInches = annotation.txtLocPinY;
        hasTxtLocPinY = true;
    }
    // ---------------------------------------------------------------------
    // Implicit-center fallback
    // Visio renders centered when:
    //   - VerticalAlign is not authored,
    //   - the text block spans the full node height,
    //   - TxtPinY == 0 and TxtLocPinY == 0.
    //
    // This scenario appears visually centered in Visio and needs to map
    // to EJ2 'Center' to match output.
    // ---------------------------------------------------------------------
    var hasNodeHeight = typeof nodeHeightInches === 'number' &&
        isFinite(nodeHeightInches) && nodeHeightInches > 0;
    var isFullHeightBlock = hasTxtHeight &&
        hasNodeHeight &&
        Math.abs(txtHeightInches - nodeHeightInches) < 1e-6;
    var pinsAtOrigin = hasTxtPinY &&
        hasTxtLocPinY &&
        txtPinYInches === 0 &&
        txtLocPinYInches === 0;
    if (isFullHeightBlock && pinsAtOrigin) {
        return 'Center';
    }
    // Normalize TxtPinY to [0..1] (0 = bottom, 1 = top)
    var normalizedFromBottom = 0.5;
    if (hasTxtPinY && nodeHeightInches > 0 && isFinite(nodeHeightInches)) {
        normalizedFromBottom = txtPinYInches / nodeHeightInches;
        if (normalizedFromBottom < 0) {
            normalizedFromBottom = 0;
        }
        if (normalizedFromBottom > 1) {
            normalizedFromBottom = 1;
        }
    }
    else {
        // Fallback: derive from offsetY if TxtPinY is not present
        if (annotation &&
            annotation.offset &&
            typeof annotation.offset.y === 'number') {
            var topOriginOffsetY = annotation
                .offset.y;
            var flipped = 1 - topOriginOffsetY;
            if (flipped < 0) {
                flipped = 0;
            }
            if (flipped > 1) {
                flipped = 1;
            }
            normalizedFromBottom = flipped;
        }
    }
    // Map normalized pin position to EJ2 vertical alignment
    var nearTopThreshold = 0.67; // closer to top
    var nearBottomThreshold = 0.33; // closer to bottom
    if (normalizedFromBottom >= nearTopThreshold) {
        return 'Bottom';
    }
    if (normalizedFromBottom <= nearBottomThreshold) {
        return 'Top';
    }
    return 'Center';
}
/**
 * Converts a Visio text alignment model to EJ2 text alignment format.
 * Maps left, right, justify properties to EJ2 supported values.
 *
 * @param {VisioTextAlignmentModel} alignment - The Visio text alignment model.
 * @returns {'Left' | 'Right' | 'Center' | 'Justify'} The EJ2 text alignment value.
 *
 * @example
 * const align = getTextAlign(visioAlignment);
 * // Returns 'Left', 'Right', 'Center', or 'Justify'
 *
 * @private
 */
export function getTextAlign(alignment) {
    if (alignment.left) {
        return 'Left';
    }
    if (alignment.right) {
        return 'Right';
    }
    if (alignment.justify) {
        return 'Justify';
    }
    return 'Center';
}
/**
 * Sets annotation constraints based on shape lock properties.
 * Applies various constraints that control text editing, rotation, and selection.
 *
 * @param {VisioAnnotationInput} shape - The annotation/shape object with lock properties.
 * @returns {AnnotationConstraints} The EJ2 annotation constraints value.
 *
 * @example
 * const constraints = setAnnotationConstraints(annotation);
 *
 * @private
 */
function setAnnotationConstraints(shape) {
    var constraints = shape.constraints;
    if (shape.lockTextEdit) {
        constraints = AnnotationConstraints.InheritReadOnly;
    }
    if (shape.lockRotate) {
        constraints &= ~AnnotationConstraints.Rotate;
    }
    if (shape.lockSelect) {
        constraints &= ~AnnotationConstraints.Select;
    }
    return constraints;
}
/**
 * Extracts hyperlink information from a shape's annotation.
 * Returns a hyperlink object if present, or undefined if no hyperlink exists.
 *
 * @param {VisioNodeInput} NodeData - The VisioShape with annotation data.
 * @param {ResolvedAnnotationStyle} nodeStyle - The VisioShape annotation style info.
 * @returns {DiagramHyperlink} The hyperlink object or undefined.
 *
 * @example
 * const hyperlink = setHyperLink(shape);
 * // Returns { link: '...', content: '...', hyperlinkOpenState: 'NewWindow' } or undefined
 *
 * @private
 */
function setHyperLink(NodeData, nodeStyle) {
    if (NodeData.annotation && NodeData.annotation.hyperlink && NodeData.annotation.hyperlink.link) {
        var textDecoration = 'None';
        if (NodeData.annotation.style.textDecoration.underline) {
            textDecoration = 'Underline';
        }
        else if (NodeData.annotation.style.textDecoration.strikethrough) {
            textDecoration = 'LineThrough';
        }
        return {
            link: NodeData.annotation.hyperlink.link,
            content: NodeData.annotation.content || '',
            hyperlinkOpenState: NodeData.annotation.hyperlink.newWindow ? 'NewWindow' : 'NewTab',
            color: nodeStyle.color || 'black',
            textDecoration: nodeStyle.textDecoration || 'None'
        };
    }
    return undefined;
}
/**
 * Sets the shape object for a Syncfusion diagram node.
 * Handles different shape types (Basic, Flow, Path, Image, BPMN, UML).
 * Converts Visio shape properties to EJ2 format with proper type mapping.
 *
 * @param {VisioNodeInput} shape - The VisioShape object with shape type information.
 * @param {ParsingContext} context - Parser context for warnings and configuration.
 * @param {boolean} isGroup - Whether the shape is a group/container (has children).
 * @returns {NodeShapeConfig} A shape object with type and type-specific properties.
 *
 * @example
 * const shapeObj = setNodeShape(visioShape, context);
 * // Returns { type: 'Basic', shape: 'Rectangle', cornerRadius: 0 }
 *
 * @private
 */
function setNodeShape(shape, context, isGroup) {
    if (!shape || !shape.shape || isGroup) {
        return {
            type: 'Basic',
            shape: 'Rectangle',
            cornerRadius: 0
        };
    }
    // ==================== Extract Shape Type ====================
    var type = shape.shape.type;
    var mainShapeObject = shape && shape.shape;
    // ==================== Log Rounding Limitations ====================
    if (shape.cornerRadius) {
        context.addWarning('[WARNING] :: In EJ2, cap type and rounding can only be adjusted for rectangles; there is no support for adjusting these properties for all shapes.');
    }
    // ==================== Handle BPMN Shapes ====================
    if (type === 'Bpmn') {
        var bpmnType = mainShapeObject.type, bpmnProperties = __rest(mainShapeObject, ["type"]);
        return __assign({ type: 'Bpmn' }, bpmnProperties, { cornerRadius: shape.cornerRadius ? inchToPoint(shape.cornerRadius) : 0 });
    }
    // ==================== Handle UML Activity Shapes ====================
    if (type === 'UmlActivity') {
        return {
            type: 'UmlActivity',
            shape: mainShapeObject.shape,
            cornerRadius: shape.cornerRadius ? inchToPoint(shape.cornerRadius) : 0
        };
    }
    // ==================== Default Shape Type Handling ====================
    return __assign({ type: type }, (type === 'Basic' || type === 'Flow'
        ? { shape: shape.shape.shape } // Basic/Flow shapes have 'shape' property
        : type === 'Path'
            ? { data: shape.shape.data } // Path shapes have 'data' property
            : type === 'Image'
                ? { source: shape.shape.source } // Image shapes have 'source' property
                : {}), { cornerRadius: shape.cornerRadius ? inchToPoint(shape.cornerRadius) : 0 });
}
/**
 * Sets node constraints based on shape lock properties.
 * Applies constraints that control resizing, rotation, selection, and other interactions.
 *
 * @param {VisioNodeInput} shape - The VisioShape object with lock properties.
 * @param {ParsingContext} context - Parser context for warnings.
 * @returns {NodeConstraints} The EJ2 node constraints value.
 *
 * @example
 * const constraints = setConstraints(shape, context);
 *
 * @private
 */
function setConstraints(shape, context) {
    var constraints = shape.constraints;
    constraints = NodeConstraints.Default;
    // ==================== Size Constraints ====================
    if (shape.lockHeight) {
        constraints &= ~(NodeConstraints.ResizeNorth | NodeConstraints.ResizeSouth);
    }
    if (shape.lockWidth) {
        constraints &= ~(NodeConstraints.ResizeWest | NodeConstraints.ResizeEast);
    }
    if (shape.lockHeight && shape.lockWidth) {
        constraints &= ~NodeConstraints.Resize;
    }
    // ==================== Position Constraints ====================
    if (shape.lockMoveX || shape.lockMoveY) {
        context.addWarning('[WARNING] :: In EJ2, individual disabling of drag constraints for X and Y positions is not supported. Therefore, if enabled, a node cannot be dragged.');
        constraints &= ~NodeConstraints.Drag;
    }
    // ==================== Rotation Constraints ====================
    if (shape.lockRotate) {
        constraints &= ~NodeConstraints.Rotate;
    }
    // ==================== Deletion Constraints ====================
    if (shape.lockDelete) {
        constraints &= ~NodeConstraints.Delete;
    }
    // ==================== Selection Constraints ====================
    if (shape.lockSelect) {
        constraints &= ~NodeConstraints.Select;
    }
    // ==================== Aspect Ratio Constraints ====================
    if (shape.lockAspect) {
        constraints |= NodeConstraints.AspectRatio;
    }
    // ==================== Text Edit Constraints ====================
    if (shape.lockTextEdit) {
        constraints |= NodeConstraints.ReadOnly;
    }
    // ==================== Shadow Constraints ====================
    if (shape.shadow && shape.shadow.shadowPattern) {
        constraints |= NodeConstraints.Shadow;
    }
    // ==================== Tooltip Constraints ====================
    if (shape.comment) {
        constraints |= NodeConstraints.Tooltip;
    }
    // ==================== Connection Constraints ====================
    if (shape.glueType && shape.glueValue === '8') {
        constraints &= ~(NodeConstraints.InConnect | NodeConstraints.OutConnect);
    }
    // ==================== Drop Target Constraints ====================
    if (shape.AllowDrop) {
        constraints |= NodeConstraints.AllowDrop;
    }
    return constraints;
}
/**
 * Normalizes Visio LocPin to EJ2 pivot with Y-axis flip.
 * EJ2 expects pivot in [0..1] from the top-left; Visio's LocPinY=0 is bottom.
 * @param {number} pivotXInches - Visio LocPinX in inches
 * @param {number} pivotYInches - Visio LocPinY in inches
 * @param {number} widthInches  - Shape width in inches
 * @param {number} heightInches - Shape height in inches
 * @returns {{ x: number, y: number }} Normalized EJ2 pivot (0..1)
 */
function normalizePivotForEJ2(pivotXInches, pivotYInches, widthInches, heightInches) {
    // Clamp helper to keep values within [0,1]
    function clamp01(v) {
        if (v < 0) {
            return 0;
        }
        if (v > 1) {
            return 1;
        }
        return v;
    }
    // Compute normalized X from left (no flip needed on X)
    var xNormalized = 0.5;
    if (typeof widthInches === 'number' && isFinite(widthInches) && widthInches !== 0) {
        xNormalized = clamp01(pivotXInches / widthInches);
    }
    // Compute normalized Y from top; flip Visio's bottom-origin LocPinY
    var yNormalized = 0.5;
    if (typeof heightInches === 'number' && isFinite(heightInches) && heightInches !== 0) {
        yNormalized = clamp01(1 - (pivotYInches / heightInches));
    }
    return { x: xNormalized, y: yNormalized };
}
/**
 * Sets shadow properties for a shape if shadow is enabled.
 *
 * @param {VisioNodeInput} node - The VisioShape with shadow data.
 * @returns {ShadowProps} Shadow properties or undefined if no shadow.
 *
 * @example
 * const shadow = setShadow(shape);
 * // Returns { color: '#000000', opacity: 0.8, angle: 45, distance: 500 } or undefined
 *
 * @private
 */
function setShadow(node) {
    if (node.shadow.shadowPattern && node.shadow.shapeShadowShow) {
        var shadow = {
            color: node.shadow.shadowcolor,
            opacity: node.shadow.shadowOpacity,
            angle: node.shadow.shadow.angle,
            distance: (node.shadow.shadow.distance) * 100 // Scale distance
        };
        return shadow;
    }
    return undefined;
}
/**
 * Determines flip/mirroring direction for a shape.
 * Handles horizontal, vertical, or both directions.
 *
 * @param {FlippableShape} shape - The shape with flipX and flipY properties.
 * @returns {FlipDirection} The flip direction enum value.
 *
 * @example
 * const flip = setFlip(shape);
 * // Returns FlipDirection.Both, Horizontal, Vertical, or None
 *
 * @private
 */
function setFlip(shape) {
    if (shape.flipX && shape.flipY) {
        return FlipDirection.Both;
    }
    if (shape.flipX) {
        return FlipDirection.Horizontal;
    }
    if (shape.flipY) {
        return FlipDirection.Vertical;
    }
    return FlipDirection.None;
}
/**
 * Determines the shape type and properties based on shape attributes and master data.
 * Maps Visio shape names to EJ2 diagram shape types (Basic, Flow, BPMN, UML, etc.).
 * Handles shape transformations and generates path data for custom shapes.
 *
 * @param {Attributes} attributes - The shape's XML attributes (Name, Type, etc.).
 * @param {VisioSection} defaultData - Default/master data containing geometry information.
 * @param {VisioShapeNode} shapes - The raw shape XML object with Cell and Section data.
 * @param {VisioNodeInput} [Node] - Optional: The VisioShape node being processed.
 * @param {ParsingContext} [context] - Optional: Parser context for warnings.
 * @returns {DetermineShapeResult} Shape type and type-specific properties.
 *
 * @example
 * const shapeResult = determineShapeType(attributes, defaultData, shapes, node, context);
 * // Returns { type: 'Basic', shape: 'Rectangle' } or other shape type
 *
 * @private
 */
export function determineShapeType(attributes, defaultData, shapes, Node, context) {
    // ==================== Define Shape Category Sets ====================
    var basicShapes = new Set([
        'Rectangle', 'Ellipse', 'Triangle', 'Pentagon', 'Heptagon', 'Octagon', 'Trapezoid',
        'Decagon', 'RightTriangle', 'Parallelogram', 'Hexagon', 'Cylinder', 'Diamond',
        'Polygon', 'Star', 'Plus'
    ]);
    var flowShapes = new Set([
        'Terminator', 'Process', 'Decision', 'Document', 'Data', 'Or', 'Collate', 'Merge',
        'Extract', 'Sort', 'SummingJunction', 'MultiDocument', 'OffPageReference',
        'PreDefinedProcess', 'DirectData', 'SequentialData', 'PaperTap', 'Card',
        'ManualOperation', 'StoredData', 'Preparation', 'Display', 'Delay', 'InternalStorage'
    ]);
    var bpmnShapes = new Set([
        'StartEvent', 'EndEvent', 'IntermediateEvent', 'Gateway', 'DataStore', 'DataObject',
        'TextAnnotation', 'Task', 'CollapsedSubProcess', 'ExpandedSubProcess', 'Group', 'Message'
    ]);
    var umlActivityShapes = new Set([
        'Action', 'Decision', 'MergeNode', 'InitialNode', 'FinalNode', 'ForkNode', 'JoinNode', 'Note'
    ]);
    var umlClassShapes = new Set([
        'Class', 'Member', 'Separator', 'Interface', 'Enumeration'
    ]);
    // ==================== Define Shape Transformation Maps ====================
    // Maps Visio shape names to EJ2 equivalents
    var shapeTransformations = new Map([
        ['Subprocess', 'PreDefinedProcess'],
        ['MagneticTape', 'SequentialData'],
        ['Database', 'DirectData'],
        ['Microform', 'PaperTap'],
        ['custom3', 'Card'],
        ['custom2', 'ManualOperation'],
        ['Start/End', 'Terminator'],
        ['ExternalData', 'StoredData'],
        ['Custom4', 'Preparation']
    ]);
    // Maps for basic shape name normalization
    var basicTrans = new Map([
        ['Cross', 'Plus'],
        ['5PointStar', 'Star'],
        ['Circle', 'Ellipse'],
        ['Can', 'Cylinder'],
        ['Square', 'Rectangle'],
        ['OnPageReference', 'Ellipse']
    ]);
    // ==================== Extract and Normalize Shape Name ====================
    var name = attributes.Name;
    var finalShape;
    if (name !== undefined) {
        // ==================== Normalize Shape Name ====================
        // Convert camelCase and remove hyphens/spaces
        var trimmedName = name.replace(/[-\s](.)/g, function (match, letter) { return letter.toUpperCase(); })
            .replace(/[-\s]/g, '');
        trimmedName = trimmedName.replace(/\.\d+$/, '').trim(); // Remove .digits suffix
        // ==================== Log Shape Appearance Warnings ====================
        if (name === 'Parallelogram' || name === 'Trapezoid' || name === 'Hexagon' ||
            name === 'Data' || name === 'Off-page reference' || name === 'Preparation' || name === 'Multi document') {
            context.addWarning("[WARNING] :: In the Visio to EJ2 Basic import, the " + name + " exist in the EJ2 diagram but their appearance differs.");
        }
        // ==================== Apply Shape Transformations ====================
        var fromBasic = basicTrans.get(trimmedName);
        var fromTransform = shapeTransformations.get(trimmedName);
        finalShape = fromBasic !== undefined
            ? fromBasic
            : (fromTransform !== undefined ? fromTransform : trimmedName);
        // ==================== Special Handling for Decision Shape ====================
        // Decision could be UML or Flowchart - check master keywords
        if (finalShape === 'Decision') {
            var keywordsRaw = getShapeKeywordsFromMaster(shapes, context);
            var kw = (keywordsRaw || '').toLowerCase();
            var hasUml = kw.includes('uml');
            var hasFlow = kw.includes('flow') || kw.includes('flowchart');
            if (hasUml && !hasFlow) {
                if (finalShape === 'Decision') {
                    var shape = getUMLActivityShapes(shapes, finalShape);
                    return shape;
                }
            }
        }
        // ==================== Determine Final Shape Type ====================
        if (basicShapes.has(finalShape) || basicTrans.has(finalShape)) {
            return { type: 'Basic', shape: finalShape };
        }
        else if ((flowShapes.has(finalShape)) || shapeTransformations.has(finalShape)) {
            return { type: 'Flow', shape: finalShape };
        }
        else if (finalShape === 'Path') {
            // ==================== Generate Path Data for Custom Shapes ====================
            var drawpathData = createPathFromGeometry(attributes, undefined, undefined, { useLocalScaling: true });
            var drawformattedPath = formatPathData(drawpathData);
            return { type: 'Path', data: drawformattedPath };
        }
        else if (bpmnShapes.has(finalShape)) {
            var shape = getBPMNShapes(shapes, finalShape, Node, context);
            return shape;
        }
        else if (finalShape === 'Image') {
            return { type: 'Image', source: '' };
        }
        else if (umlActivityShapes.has(finalShape)) {
            var shape = getUMLActivityShapes(shapes, finalShape);
            return shape;
        }
    }
    // ==================== Default Shape ====================
    return undefined;
}
/**
 * Retrieves shape keywords from the shape's master definition.
 * Keywords are used for shape categorization and UML/BPMN detection.
 *
 * @param {VisioShapeNode} shape - The shape XML object with Master reference.
 * @param {ParsingContext} context - Parser context containing master data.
 * @returns {string} The shape keywords as a space-separated string, or empty string if not found.
 *
 * @example
 * const keywords = getShapeKeywordsFromMaster(shapeObj, context);
 * // Returns "uml flow diagram" or similar
 *
 * @private
 */
export function getShapeKeywordsFromMaster(shape, context) {
    // ==================== Extract Master ID ====================
    var masterId = (shape && shape.$ && shape.$.Master != null)
        ? shape.$.Master
        : undefined;
    if (masterId == null) {
        return '';
    }
    // ==================== Search Masters ====================
    var masters = (context.data.masters) || [];
    if (!Array.isArray(masters)) {
        return '';
    }
    var master = masters.find(function (m) {
        var mid = (m && m.id != null) ? m.id : undefined;
        return String(mid) === String(masterId);
    });
    // ==================== Return Keywords ====================
    if (!master || !master.shapeKeywords) {
        return '';
    }
    return String(master.shapeKeywords);
}
/**
 * Retrieves UML activity shapes (Action, Decision, etc.).
 * Returns a UML Activity shape definition.
 *
 * @param {VisioShapeNode} shapes - The shape XML object.
 * @param {string} shapeName - The name of the UML activity shape.
 * @returns {UMLActivityShapeResult} A UML Activity shape definition.
 *
 * @example
 * const umlShape = getUMLActivityShapes(shapeXml, 'Decision');
 * // Returns { type: 'UmlActivity', shape: 'Decision' }
 *
 * @private
 */
function getUMLActivityShapes(shapes, shapeName) {
    return {
        type: 'UmlActivity',
        shape: shapeName
    };
}
/**
 * Main dispatcher for BPMN shape type determination.
 * Identifies specific BPMN shape subtypes and returns appropriate shape definitions.
 *
 * @param {VisioShapeNode} shapes - The shape XML object with Property section and cells.
 * @param {string} shapeName - The base BPMN shape name to categorize.
 * @param {VisioNodeInput} Node - The diagram node being processed.
 * @param {ParsingContext} context - Parser context for logging.
 * @returns {BPMNShapeResult} BPMN shape definition with type and subtype-specific properties.
 *
 * @example
 * const bpmnShape = getBPMNShapes(shapeObj, 'Event', node, context);
 * // Returns complete BPMN shape definition
 *
 * @private
 */
function getBPMNShapes(shapes, shapeName, Node, context) {
    // ==================== Extract Property Map ====================
    var sections = ensureArray(shapes.Section);
    var propertySection = sections.find(function (sec) { return sec.$ && sec.$.N === PROPERTY_SECTION; });
    var propertyMap = createPropertyMap(propertySection);
    // ==================== Dispatch to Specific Shape Handler ====================
    if (shapeName.toLowerCase().includes('event')) {
        return getEventShape(shapes, propertyMap, Node);
    }
    else if (shapeName.toLowerCase().includes('gateway')) {
        return getGatewayShape(shapes, propertyMap, sections);
    }
    else if (shapeName.toLowerCase().includes('datastore')) {
        return getDataSourceShape();
    }
    else if (shapeName.toLowerCase().includes('dataobject')) {
        return getDataObjectShape(shapes, propertyMap, Node);
    }
    else if (shapeName.toLowerCase().includes('textannotation')) {
        return getTextAnnotationShape(shapes);
    }
    else if (shapeName.toLowerCase().includes('task') || shapeName.toLowerCase().includes('collapsedsubprocess')) {
        return getActivityShape(shapes, propertyMap);
    }
    else if (shapeName.toLowerCase().includes('expandedsubprocess')) {
        return getExpandedSubProcessShape(shapes, propertyMap, Node, context);
    }
    else if (shapeName.toLowerCase().includes('group')) {
        return getGroupShape(shapes);
    }
    else if (shapeName.toLowerCase().includes('message')) {
        return getMessageShape();
    }
    // ==================== Default to Event ====================
    return getEventShape(shapes, propertyMap, Node);
}
/**
 * Retrieves and processes BPMN flow shape (connector) types.
 * Identifies Association, Sequence, and Message flows.
 *
 * @param {VisioShapeNode} shapes - The shape XML object.
 * @param {string} shapeName - The flow shape name.
 * @param {VisioNodeInput} Node - The diagram node being processed.
 * @returns {BPMNFlowShapeResult | undefined} BPMN flow shape definition or undefined.
 *
 * @example
 * const flow = getBPMNFlowShapes(shapeObj, 'Association', node);
 *
 * @private
 */
export function getBPMNFlowShapes(shapes, shapeName, Node) {
    var name = shapeName;
    // ==================== Extract BPMN Type from Properties ====================
    var sections = ensureArray(shapes.Section);
    var propertySection = sections.find(function (sec) { return sec.$ && sec.$.N === PROPERTY_SECTION; });
    var propertyMap = createPropertyMap(propertySection);
    var bpmnConnectingObjectType = propertyMap.get('BpmnConnectingObjectType');
    if (bpmnConnectingObjectType) {
        name = bpmnConnectingObjectType;
    }
    // ==================== Normalize Name and Dispatch ====================
    var cleanedBpmnType = name.replace(/\s+/g, '').toLowerCase();
    if (cleanedBpmnType.includes('association')) {
        return getBPMNAssociationFlow(propertyMap);
    }
    else if (cleanedBpmnType.includes('sequenceflow')) {
        return getBPMNSequenceFlow(propertyMap);
    }
    else if (cleanedBpmnType.includes('messageflow')) {
        return getBPMNMessageFlow();
    }
    return undefined;
}
/**
 * Processes BPMN Association flow shapes.
 * Determines flow direction (None, BiDirectional, Directional).
 *
 * @param {BPMNPropertyMapType} propertyMap - Property map from shape.
 * @returns {BPMNFlowShapeResult} Association flow definition.
 *
 * @example
 * const flow = getBPMNAssociationFlow(propMap);
 * // Returns { type: 'Bpmn', flow: 'Association', association: 'BiDirectional' }
 *
 * @private
 */
function getBPMNAssociationFlow(propertyMap) {
    var direction = 'Default';
    // ==================== Direction Mapping ====================
    var associationDirectionMap = {
        'none': 'Default',
        'both': 'BiDirectional',
        'one': 'Directional'
    };
    // ==================== Extract Direction ====================
    var bpmnAssociationDirection = propertyMap.get('BpmnDirection');
    if (bpmnAssociationDirection) {
        var lookupKey = bpmnAssociationDirection.replace(/\s+/g, '').toLowerCase();
        direction = associationDirectionMap["" + lookupKey] || 'Default';
    }
    return {
        type: 'Bpmn',
        flow: 'Association',
        association: direction
    };
}
/**
 * Processes BPMN Sequence flow shapes.
 * Determines flow condition type (Normal, Conditional, Default).
 *
 * @param {BPMNPropertyMapType} propertyMap - Property map from shape.
 * @returns {BPMNFlowShapeResult} Sequence flow definition.
 *
 * @example
 * const flow = getBPMNSequenceFlow(propMap);
 * // Returns { type: 'Bpmn', flow: 'Sequence', sequence: 'Conditional' }
 *
 * @private
 */
function getBPMNSequenceFlow(propertyMap) {
    var sequence = 'Normal';
    // ==================== Condition Type Mapping ====================
    var associationDirectionMap = {
        'default': 'Default',
        'none': 'Normal',
        'conditional': 'Conditional'
    };
    // ==================== Extract Condition Type ====================
    var bpmnAssociationDirection = propertyMap.get('BpmnConditionType');
    if (bpmnAssociationDirection) {
        var lookupKey = bpmnAssociationDirection.replace(/\s+/g, '').toLowerCase();
        sequence = associationDirectionMap["" + lookupKey] || 'Normal';
    }
    return {
        type: 'Bpmn',
        flow: 'Sequence',
        sequence: sequence
    };
}
/**
 * Processes BPMN Message flow shapes.
 * Returns a generic Message flow definition.
 *
 * @returns {BPMNFlowShapeResult} Message flow definition.
 *
 * @example
 * const flow = getBPMNMessageFlow();
 * // Returns { type: 'Bpmn', flow: 'Message', message: 'Default' }
 *
 * @private
 */
function getBPMNMessageFlow() {
    return {
        type: 'Bpmn',
        flow: 'Message',
        message: 'Default'
    };
}
/**
 * Retrieves UML connector relationship types.
 * Identifies Inheritance, Association, Composition, etc.
 *
 * @param {VisioShapeNode} shapes - The shape XML object with Action section.
 * @param {string} shapeName - The connector name.
 * @param {VisioNodeInput} Node - The diagram node being processed.
 * @returns {UMLConnectorResult | undefined} UML connector definition with multiplicity.
 *
 * @example
 * const umlConnector = getUMLConnectors(shapeObj, 'Inheritance', node);
 *
 * @private
 */
export function getUMLConnectors(shapes, shapeName, Node) {
    var multiplicity;
    // ==================== Type Mapping ====================
    var typeMapping = {
        'Row_3': 'Aggregation',
        'Row_4': 'Association',
        'Row_5': 'Composition',
        'Row_6': 'Dependency',
        'Row_7': 'DirectedAssociation',
        'Row_8': 'Inheritance',
        'Row_9': 'Realization'
    };
    // ==================== Check if UML Connector ====================
    var sections = ensureArray(shapes.Section);
    if (shapeName.includes('Inheritance') || shapeName.includes('Association') || shapeName.includes('Dependency')
        || shapeName.includes('Composition') || shapeName.includes('Aggregation') || shapeName.includes('InterfaceRealization') || shapeName.includes('DirectedAssociation')) {
        var shapeType = shapeName;
        // ==================== Extract Type from Actions Section ====================
        var actionsSection = sections.find(function (sec) { return sec.$ && sec.$.N === ACTIONS_SECTION; });
        if (actionsSection && actionsSection.Row) {
            var rows = ensureArray(actionsSection.Row);
            for (var _i = 0, rows_1 = rows; _i < rows_1.length; _i++) {
                var row = rows_1[_i];
                if (row && row.$ && row.Cell) {
                    var cells = ensureArray(row.Cell);
                    var checkedCell = cells.find(function (cell) {
                        return cell.$ && cell.$.N === 'Checked' && cell.$.V === '1';
                    });
                    if (checkedCell) {
                        var rowName = row.$.N;
                        // ==================== Build Multiplicity for First Row ====================
                        if (rowName === 'Row_1') {
                            multiplicity = buildMultiplicity(shapes);
                        }
                        // ==================== Map Row to Type ====================
                        if (rowName in typeMapping) {
                            shapeType = typeMapping["" + rowName];
                            break;
                        }
                    }
                }
            }
        }
        // ==================== Normalize Interface Realization ====================
        if (shapeType === 'InterfaceRealization') {
            shapeType = 'Realization';
        }
        return {
            type: 'UmlClassifier',
            relationship: shapeType,
            multiplicity: multiplicity
        };
    }
    return undefined;
}
/**
 * Extracts text content from a shape XML object.
 * Looks for Text cell value.
 *
 * @param {VisioShapeNode | undefined} shape - The shape XML object.
 * @returns {string} The shape text content or empty string.
 *
 * @example
 * const text = getShapeText(shapeObj);
 *
 * @private
 */
function getShapeText(shape) {
    if (!shape) {
        return '';
    }
    if (shape.Text && typeof shape.Text.value === 'string') {
        return shape.Text.value;
    }
    return '';
}
/**
 * Builds multiplicity information from child shapes of a connector.
 * Extracts multiplicity bounds from child shape text.
 *
 * @param {VisioShapeNode} groupShape - The connector group containing multiplicity child shapes.
 * @returns {UMLConnectorResult} Multiplicity object with source and target bounds.
 *
 * @example
 * const mult = buildMultiplicity(connectorShape);
 * // Returns { type: 'ManyToMany', source: {...}, target: {...} }
 *
 * @private
 */
function buildMultiplicity(groupShape) {
    // ==================== Extract Child Shapes ====================
    var children = ensureArray(groupShape && groupShape.Shapes && groupShape.Shapes.Shape);
    // ==================== Extract Multiplicity Values ====================
    var t0 = getShapeText(children[0]) || 'M1';
    var t1 = getShapeText(children[1]) || 'M2';
    var t2 = getShapeText(children[2]) || 'M3';
    var t3 = getShapeText(children[3]) || 'M4';
    var sourceLower = t0;
    var sourceUpper = t1;
    var targetLower = t2;
    var targetUpper = t3;
    var sourceOptional = true;
    var targetOptional = true;
    var type = 'ManyToMany';
    return {
        type: type,
        source: { optional: sourceOptional, lowerBounds: sourceLower, upperBounds: sourceUpper },
        target: { optional: targetOptional, lowerBounds: targetLower, upperBounds: targetUpper }
    };
}
/**
 * Safely extracts property value from a section row's cell.
 * Looks for the Value cell within the row.
 *
 * @param {VisioRow} row - The property section row.
 * @param {string} propertyName - The expected property name.
 * @returns {string | undefined} The cell value or undefined if not found.
 *
 * @example
 * const value = getPropertyValue(row, 'BpmnEventType');
 *
 * @private
 */
function getPropertyValue(row, propertyName) {
    if (!row || !row.$ || row.$.N !== propertyName || !row.Cell) {
        return undefined;
    }
    var cells = ensureArray(row.Cell);
    var valueCell = cells.find(function (c) { return c && c.$ && c.$.N === VALUE_CELL; });
    return valueCell && valueCell.$ && valueCell.$.V != null ? String(valueCell.$.V).replace(/\s+/g, '') : undefined;
}
/**
 * Creates a property map from a Property or User section.
 * Converts rows into a Map for efficient property lookup.
 *
 * @param {VisioSection} section - The Property or User section from shape.
 * @returns {BPMNPropertyMapType} Map of property name -> value.
 *
 * @example
 * const propMap = createPropertyMap(propertySection);
 *
 * @private
 */
function createPropertyMap(section) {
    var propertyMap = new Map();
    if (section && section.Row) {
        var propertyRows = ensureArray(section.Row);
        propertyRows.forEach(function (row) {
            if (row && row.$ && row.$.N) {
                var value = getPropertyValue(row, row.$.N);
                if (value !== undefined) {
                    propertyMap.set(row.$.N, value);
                }
            }
        });
    }
    return propertyMap;
}
/**
 * Processes BPMN Event shapes.
 * Determines event type (Start, End, Intermediate) and trigger/result.
 *
 * @param {VisioShapeNode} shapes - The event shape XML object.
 * @param {BPMNPropertyMapType} propertyMap - Property map from shape.
 * @param {VisioNodeInput} node - The diagram node being processed.
 * @returns {BPMNEventShapeResult} BPMN Event shape definition.
 *
 * @example
 * const event = getEventShape(shapeObj, propMap, node);
 * // Returns { type: 'Bpmn', shape: 'Event', event: {...} }
 *
 * @private
 */
function getEventShape(shapes, propertyMap, node) {
    var eventName = 'Start';
    var trigger = 'None';
    // ==================== Event Type Mapping ====================
    var eventNameMap = {
        'start(non-interrupting)': 'NonInterruptingStart',
        'intermediate(non-interrupting)': 'NonInterruptingIntermediate',
        'intermediate(throwing)': 'ThrowingIntermediate'
    };
    var triggerMap = {
        'parallelmultiple': 'Parallel'
    };
    // ==================== Extract Event Type from Shape Name ====================
    if (shapes.$.Name) {
        var nameParts = shapes.$.Name.split(' ').map(function (p) { return p.trim().toLowerCase(); });
        eventName = nameParts[0];
    }
    // ==================== Extract from Properties ====================
    var bpmnEventType = propertyMap.get('BpmnEventType');
    if (bpmnEventType) {
        eventName = bpmnEventType;
    }
    var bpmnTriggerOrResult = propertyMap.get('BpmnTriggerOrResult');
    if (bpmnTriggerOrResult) {
        trigger = bpmnTriggerOrResult;
    }
    // ==================== Normalize Names ====================
    eventName = toCapitalizedWords(eventName);
    trigger = toCapitalizedWords(trigger);
    eventName = eventNameMap[eventName.toLowerCase()] || eventName;
    trigger = triggerMap[trigger.toLowerCase()] || trigger;
    // ==================== Extract Colors from Child Shapes ====================
    var childShapes = shapes.Shapes && shapes.Shapes.Shape && ensureArray(shapes.Shapes.Shape);
    if (childShapes && childShapes.length > 0) {
        var fillColorFound = false;
        var strokeColorFound = false;
        for (var _i = 0, childShapes_1 = childShapes; _i < childShapes_1.length; _i++) {
            var childShape = childShapes_1[_i];
            if (childShape && childShape.Cell) {
                var childCell = mapCellValues(childShape.Cell);
                if (!fillColorFound) {
                    var fillColor = getCellMapStringValue(childCell, 'FillForegnd');
                    if (fillColor !== undefined) {
                        if (node.style && node.style.fillColor === undefined) {
                            node.style.fillColor = fillColor;
                        }
                        fillColorFound = true;
                    }
                }
                if (!strokeColorFound) {
                    var strokeColor = getCellMapStringValue(childCell, 'LineColor');
                    if (strokeColor !== undefined) {
                        if (node.style && node.style.strokeColor === undefined) {
                            node.style.strokeColor = strokeColor;
                        }
                        strokeColorFound = true;
                    }
                }
                if (fillColorFound && strokeColorFound) {
                    break;
                }
            }
        }
    }
    return {
        type: 'Bpmn',
        shape: 'Event',
        event: {
            event: eventName,
            trigger: trigger
        }
    };
}
/**
 * Processes BPMN Gateway shapes.
 * Determines gateway type (Exclusive, Inclusive, Parallel, etc.).
 *
 * @param {VisioShapeNode} shapes - The gateway shape XML object.
 * @param {BPMNPropertyMapType} propertyMap - Property map from shape.
 * @param {VisioSection[]} sections - All sections from the shape.
 * @returns {BPMNGatewayShapeResult} BPMN Gateway shape definition.
 *
 * @example
 * const gateway = getGatewayShape(shapeObj, propMap, sections);
 * // Returns { type: 'Bpmn', shape: 'Gateway', gateway: {...} }
 *
 * @private
 */
function getGatewayShape(shapes, propertyMap, sections) {
    var gatewayType = 'None'; // Default gateway type
    // ==================== Gateway Type Mapping ====================
    var gatewayMap = {
        'exclusive': 'None',
        'inclusive': 'Inclusive',
        'parallel': 'Parallel',
        'complex': 'Complex',
        'event': 'EventBased',
        'eventbased': 'Exclusive',
        'exclusiveevent(instantiate)': 'ExclusiveEventBased',
        'parallelevent(instantiate)': 'ParallelEventBased'
    };
    // ==================== Extract Gateway Type ====================
    var bpmnGatewayType = propertyMap.get('BpmnGatewayType');
    if (bpmnGatewayType) {
        gatewayType = bpmnGatewayType;
    }
    else {
        var bpmnExclusiveType = propertyMap.get('BpmnExclusiveType');
        if (bpmnExclusiveType) {
            gatewayType = bpmnExclusiveType;
        }
    }
    // ==================== Check for Event-Based Gateway Marker ====================
    var actionsSection = sections.find(function (sec) { return sec.$ && sec.$.N === ACTIONS_SECTION; });
    if (actionsSection && actionsSection.Row) {
        var actionRows = ensureArray(actionsSection.Row);
        var exclusiveDataWithMarkerRow = actionRows.find(function (row) { return row && row.$ && row.$.N === 'ExclusiveDataWithMarker'; });
        if (exclusiveDataWithMarkerRow && exclusiveDataWithMarkerRow.Cell) {
            var checkedCell = ensureArray(exclusiveDataWithMarkerRow.Cell).find(function (cell) { return cell && cell.$ && cell.$.N === 'Checked'; });
            if (checkedCell && checkedCell.$.V === '1') {
                gatewayType = 'eventbased';
            }
        }
    }
    // ==================== Map to EJ2 Gateway Type ====================
    var lookupKey = gatewayType.toLowerCase().replace(/\s/g, '');
    var GatewayType = gatewayMap["" + lookupKey] || 'None';
    return {
        type: 'Bpmn',
        shape: 'Gateway',
        gateway: {
            type: GatewayType
        }
    };
}
/**
 * Returns a DataSource shape definition for BPMN.
 *
 * @returns {BPMNSimpleShapeResult} DataSource shape definition.
 *
 * @example
 * const dataStore = getDataSourceShape();
 *
 * @private
 */
function getDataSourceShape() {
    return {
        type: 'Bpmn',
        shape: 'DataSource'
    };
}
/**
 * Returns a Message shape definition for BPMN.
 *
 * @returns {BPMNSimpleShapeResult} Message shape definition.
 *
 * @example
 * const message = getMessageShape();
 *
 * @private
 */
function getMessageShape() {
    return {
        type: 'Bpmn',
        shape: 'Message'
    };
}
/**
 * Processes BPMN DataObject shapes.
 * Determines if collection flag is set.
 *
 * @param {VisioShapeNode} shapes - The data object shape XML object.
 * @param {BPMNPropertyMapType} propertyMap - Property map from shape.
 * @param {VisioNodeInput} node - The diagram node being processed.
 * @returns {BPMNDataObjectShapeResult} BPMN DataObject shape definition.
 *
 * @example
 * const dataObj = getDataObjectShape(shapeObj, propMap, node);
 *
 * @private
 */
function getDataObjectShape(shapes, propertyMap, node) {
    var isCollection = false;
    // ==================== Extract Collection Flag ====================
    var bpmnCollection = propertyMap.get('BpmnCollection');
    if (bpmnCollection === '1') {
        isCollection = true;
    }
    // ==================== Extract Colors from Child Shapes ====================
    var childShapes = shapes.Shapes && shapes.Shapes.Shape && ensureArray(shapes.Shapes.Shape);
    if (childShapes && childShapes.length > 0) {
        var fillColorFound = false;
        var strokeColorFound = false;
        for (var _i = 0, childShapes_2 = childShapes; _i < childShapes_2.length; _i++) {
            var childShape = childShapes_2[_i];
            if (childShape && childShape.Cell) {
                var childCell = mapCellValues(childShape.Cell);
                if (!fillColorFound) {
                    var fillColor = getCellMapStringValue(childCell, 'FillForegnd');
                    if (fillColor !== undefined) {
                        if (node.style && node.style.fillColor === undefined) {
                            node.style.fillColor = fillColor;
                        }
                        fillColorFound = true;
                    }
                }
                if (!strokeColorFound) {
                    var strokeColor = getCellMapStringValue(childCell, 'LineColor');
                    if (strokeColor !== undefined) {
                        if (node.style && node.style.strokeColor === undefined) {
                            node.style.strokeColor = strokeColor;
                        }
                        strokeColorFound = true;
                    }
                }
                if (fillColorFound && strokeColorFound) {
                    break;
                }
            }
        }
    }
    return {
        type: 'Bpmn',
        shape: 'DataObject',
        dataObject: {
            collection: isCollection,
            type: 'None'
        }
    };
}
/**
 * Processes BPMN TextAnnotation shapes.
 * Determines annotation direction and target relationship.
 *
 * @param {VisioShapeNode} shapes - The text annotation shape XML object.
 * @returns {BPMNTextAnnotationShapeResult} BPMN TextAnnotation shape definition.
 *
 * @example
 * const textAnnot = getTextAnnotationShape(shapeObj);
 *
 * @private
 */
function getTextAnnotationShape(shapes) {
    var direction = 'Left';
    var targetId = '';
    // ==================== Direction Mapping ====================
    var orientationMap = {
        '1': 'Right',
        '2': 'Top',
        '3': 'Left',
        '4': 'Bottom'
    };
    // ==================== Extract Direction from User Section ====================
    var sections = ensureArray(shapes.Section);
    var userSection = sections.find(function (sec) { return sec.$ && sec.$.N === USER_SECTION; });
    var propertyMap = createPropertyMap(userSection);
    var orientation = propertyMap.get('Orientation');
    if (orientation && orientationMap["" + orientation]) {
        direction = orientationMap["" + orientation];
    }
    // ==================== Extract Target from Relationships ====================
    var shapeCells = ensureArray(shapes.Cell);
    var relationshipCell = shapeCells.find(function (cell) { return cell && cell.$ && cell.$.N === RELATIONSHIPS_CELL; });
    if (relationshipCell && relationshipCell.$.F) {
        targetId = getTextAnnotationTargetID(relationshipCell.$.F) || '';
    }
    return {
        type: 'Bpmn',
        shape: 'TextAnnotation',
        textAnnotation: {
            textAnnotationDirection: direction,
            textAnnotationTarget: targetId || ''
        }
    };
}
/**
 * Processes BPMN Activity (Task or SubProcess) shapes.
 * Determines activity type and delegates to appropriate handler.
 *
 * @param {VisioShapeNode} shapes - The activity shape XML object.
 * @param {BPMNPropertyMapType} propertyMap - Property map from shape.
 * @returns {BPMNActivityShapeResult} BPMN Activity shape definition.
 *
 * @example
 * const activity = getActivityShape(shapeObj, propMap);
 *
 * @private
 */
function getActivityShape(shapes, propertyMap) {
    var activityType = 'Task';
    // ==================== Extract Activity Type ====================
    if (shapes.$.Name) {
        activityType = shapes.$.Name.replace(/[^a-zA-Z]/g, '');
    }
    var bpmnActivityType = propertyMap.get('BpmnActivityType');
    if (bpmnActivityType) {
        if (bpmnActivityType === 'Sub-Process') {
            activityType = 'SubProcess';
        }
        else if (bpmnActivityType === 'Task') {
            activityType = 'Task';
        }
    }
    // ==================== Delegate to Appropriate Handler ====================
    if (activityType === 'SubProcess' || activityType === 'CollapsedSubProcess') {
        return getSubProcessShape(shapes, propertyMap);
    }
    else {
        return getTaskShape(shapes, propertyMap);
    }
}
/**
 * Processes BPMN Task shapes.
 * Determines task type, loop type, compensation, and call flags.
 *
 * @param {VisioShapeNode} shapes - The task shape XML object.
 * @param {BPMNPropertyMapType} propertyMap - Property map from shape.
 * @returns {BPMNActivityShapeResult} BPMN Task activity definition.
 *
 * @example
 * const task = getTaskShape(shapeObj, propMap);
 *
 * @private
 */
function getTaskShape(shapes, propertyMap) {
    var task = {
        type: 'None',
        loop: 'None',
        compensation: false,
        call: false
    };
    // ==================== Loop Type Mapping ====================
    var loopTypeMap = {
        'none': 'None',
        'standard': 'Standard',
        'parallelmultiinstance': 'ParallelMultiInstance',
        'sequentialmultiinstance': 'SequenceMultiInstance'
    };
    // ==================== Extract Task Properties ====================
    task.type = propertyMap.get('BpmnTaskType') || 'None';
    task.compensation = propertyMap.get('BpmnIsForCompensation') === '1';
    task.call = propertyMap.get('BpmnBoundaryType') === 'Call';
    // ==================== Extract Loop Type ====================
    var visioLoopValue = propertyMap.get('BpmnLoopType') || 'none';
    var visioLoopKey = visioLoopValue.toLowerCase();
    task.loop = loopTypeMap["" + visioLoopKey] || visioLoopValue;
    return {
        type: 'Bpmn',
        shape: 'Activity',
        activity: {
            activity: 'Task',
            task: task
        }
    };
}
/**
 * Processes BPMN SubProcess shapes (collapsed).
 * Determines subprocess properties including loop, compensation, and boundary type.
 *
 * @param {VisioShapeNode} shapes - The subprocess shape XML object.
 * @param {BPMNPropertyMapType} propertyMap - Property map from shape.
 * @returns {BPMNActivityShapeResult} BPMN SubProcess activity definition.
 *
 * @example
 * const subProc = getSubProcessShape(shapeObj, propMap);
 *
 * @private
 */
function getSubProcessShape(shapes, propertyMap) {
    var subProcess = {
        type: 'None', loop: 'None', compensation: false, adhoc: false,
        collapsed: true, boundary: 'Default'
    };
    // ==================== Loop Type Mapping ====================
    var loopTypeMap = {
        'none': 'None', 'standard': 'Standard', 'parallelmultiinstance': 'ParallelMultiInstance',
        'sequentialmultiinstance': 'SequenceMultiInstance'
    };
    // ==================== Extract SubProcess Properties ====================
    subProcess.type = 'None';
    subProcess.compensation = propertyMap.get('BpmnIsForCompensation') === '1';
    subProcess.adhoc = propertyMap.get('BpmnAdHoc') === '1';
    // ==================== Extract Collapse State ====================
    var isCollapsedValue = propertyMap.get('BpmnIsCollapsed');
    subProcess.collapsed = isCollapsedValue !== '0';
    // ==================== Extract Loop Type ====================
    var visioLoopValue = propertyMap.get('BpmnLoopType') || 'none';
    var visioLoopKey = visioLoopValue.toLowerCase();
    subProcess.loop = loopTypeMap["" + visioLoopKey] || visioLoopValue;
    // ==================== Extract Boundary Type ====================
    subProcess.boundary = propertyMap.get('BpmnBoundaryType') || 'Default';
    return {
        type: 'Bpmn',
        shape: 'Activity',
        activity: {
            activity: 'SubProcess',
            subProcess: subProcess
        }
    };
}
/**
 * Processes BPMN ExpandedSubProcess shapes.
 * Determines subprocess properties and extracts child process IDs.
 *
 * @param {VisioShapeNode} shapes - The expanded subprocess shape XML object.
 * @param {BPMNPropertyMapType} propertyMap - Property map from shape.
 * @param {VisioNodeInput} Node - The diagram node being processed.
 * @param {ParsingContext} context - Parser context for tracking expanded processes.
 * @returns {BPMNActivityShapeResult} BPMN ExpandedSubProcess activity definition.
 *
 * @example
 * const expandedSubProc = getExpandedSubProcessShape(shapeObj, propMap, node, context);
 *
 * @private
 */
function getExpandedSubProcessShape(shapes, propertyMap, Node, context) {
    var subProcess = {
        loop: 'None',
        compensation: false,
        adhoc: false,
        collapsed: false,
        boundary: 'Default',
        processes: []
    };
    // ==================== Loop Type Mapping ====================
    var loopTypeMap = {
        'none': 'None', 'standard': 'Standard', 'parallelmultiinstance': 'ParallelMultiInstance',
        'sequentialmultiinstance': 'SequenceMultiInstance'
    };
    // ==================== Extract SubProcess Properties ====================
    subProcess.compensation = propertyMap.get('BpmnIsForCompensation') === '1';
    subProcess.adhoc = propertyMap.get('BpmnAdHoc') === '1';
    subProcess.boundary = propertyMap.get('BpmnBoundaryType') || 'Default';
    // ==================== Extract Loop Type ====================
    var visioLoopValue = propertyMap.get('BpmnLoopType') || 'none';
    var visioLoopKey = visioLoopValue.toLowerCase();
    subProcess.loop = loopTypeMap["" + visioLoopKey] || visioLoopValue;
    // ==================== Mark as Drop Target ====================
    Node.AllowDrop = true;
    // ==================== Extract Child Process IDs ====================
    var shapeCells = ensureArray(shapes.Cell);
    var relationshipCell = shapeCells.find(function (cell) { return cell && cell.$ && cell.$.N === RELATIONSHIPS_CELL; });
    if (relationshipCell && relationshipCell.$.F) {
        var processIDs = getProcessIDs(shapes);
        if (processIDs.length > 0) {
            subProcess.processes = processIDs;
        }
    }
    // ==================== Track Expanded Process ====================
    var shapeID = getShapeId(shapes);
    if (shapeID) {
        context.data.expandedSubprocessCollection.push(shapeID);
    }
    return {
        type: 'Bpmn',
        shape: 'Activity',
        activity: {
            activity: 'SubProcess',
            subProcess: subProcess
        }
    };
}
/**
 * Extracts shape ID from shape XML attributes.
 *
 * @param {VisioShapeNode} shapes - The shape XML object.
 * @returns {string} The shape ID or empty string.
 *
 * @example
 * const id = getShapeId(shapeObj);
 *
 * @private
 */
function getShapeId(shapes) {
    return shapes && shapes.$ && shapes.$.ID != null ? String(shapes.$.ID) : '';
}
/**
 * Processes BPMN Group shapes.
 * Returns a group shape definition.
 *
 * @param {VisioShapeNode} shapes - The group shape XML object.
 * @returns {BPMNSimpleShapeResult} BPMN Group shape definition.
 *
 * @example
 * const group = getGroupShape(shapeObj);
 *
 * @private
 */
function getGroupShape(shapes) {
    var shapeCells = ensureArray(shapes.Cell);
    var relationshipCell = shapeCells.find(function (cell) { return cell && cell.$ && cell.$.N === RELATIONSHIPS_CELL; });
    return {
        type: 'Bpmn',
        shape: 'Group'
    };
}
/**
 * Extracts child process IDs from a subprocess Relationships cell formula.
 * Parses complex DEPENDSON formulas to extract Sheet references.
 *
 * @param {VisioShapeNode} shape - The subprocess shape with Relationships cell.
 * @returns {string[]} Array of process IDs extracted from formula.
 *
 * @example
 * const processIds = getProcessIDs(subprocessShape);
 * // Returns ['1', '2', '3'] etc.
 *
 * @private
 */
function getProcessIDs(shape) {
    var processIDs = [];
    // ==================== Extract Relationships Cell ====================
    var relationsCell = ensureArray(shape.Cell).find(function (c) { return c.$.N === RELATIONSHIPS_CELL; });
    if (relationsCell && relationsCell.$.F) {
        var formula = relationsCell.$.F;
        // ==================== Parse SUM Formula ====================
        var sumArgsRegex = /SUM\((.*)\)/;
        var sumMatch = formula.match(sumArgsRegex);
        if (sumMatch && sumMatch[1]) {
            var argsString = sumMatch[1];
            // ==================== Split by DEPENDSON Calls ====================
            var dependsonCallSplitter = /,(?=\s*DEPENDSON\()/g;
            var individualDependsonCalls = argsString.split(dependsonCallSplitter);
            // ==================== Extract Sheet IDs ====================
            for (var _i = 0, individualDependsonCalls_1 = individualDependsonCalls; _i < individualDependsonCalls_1.length; _i++) {
                var call = individualDependsonCalls_1[_i];
                if (call.startsWith('DEPENDSON(1,')) {
                    var sheetIdExtractorRegex = /Sheet\.(\d+)!SheetRef\(\)/g;
                    var sheetIdExtractMatch = void 0;
                    sheetIdExtractMatch = sheetIdExtractorRegex.exec(call);
                    while (sheetIdExtractMatch !== null) {
                        if (sheetIdExtractMatch[1]) {
                            processIDs.push(sheetIdExtractMatch[1]);
                        }
                        sheetIdExtractMatch = sheetIdExtractorRegex.exec(call);
                    }
                }
            }
        }
    }
    return processIDs;
}
/**
 * Extracts target shape ID from a TextAnnotation Relationships formula.
 * Parses Sheet reference to identify the connected shape.
 *
 * @param {string} formula - The Relationships cell formula.
 * @returns {string | null} The target shape ID or null if not found.
 *
 * @example
 * const targetId = getTextAnnotationTargetID('DEPENDSON(1,Sheet.5!SheetRef())');
 * // Returns '5'
 *
 * @private
 */
function getTextAnnotationTargetID(formula) {
    if (!formula) {
        return null;
    }
    // ==================== Extract Sheet ID ====================
    var match = formula.match(/Sheet\.(\d+)!/);
    if (match && match.length > 1) {
        return match[1];
    }
    return null;
}
/**
 * Converts a string to capitalized words format.
 * Capitalizes first letter of each word, lowercases the rest.
 *
 * @param {string} str - The input string.
 * @returns {string} The capitalized words string.
 *
 * @example
 * const result = toCapitalizedWords('hello world');
 * // Returns 'HelloWorld'
 *
 * @private
 */
function toCapitalizedWords(str) {
    return str.split(' ').map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); }).join('');
}
/**
 * Retrieves the `__Index` value from a visio parsing context.
 * Returns `null` if no entries or index is found.
 *
 * @param {ParsingContext} context - Current parsing context containing entries
 * @returns {any} The index value if present, otherwise null
 */
function getIndex(context) {
    var entries = context.entries;
    return entries && entries.__Index ? entries.__Index : null;
}
/**
 * Resolves the master source node for a given page shape.
 * Looks up the appropriate master or master-shape reference
 * from the parsing context and returns the corresponding node.
 *
 * @param {VisioShapeNode} pageNode - Current page shape node
 * @param {ParsingContext} context - Parsing context containing master maps
 * @param {string} [parentMasterId] - Optional parent master ID for nested shapes
 * @returns {VisioShapeNode|null} The resolved master node, or null if not found
 */
export function resolveMasterSourceForNode(pageNode, context, parentMasterId) {
    var attributes = (pageNode && pageNode.$) ? pageNode.$ : {};
    var masterShapeId = (attributes && attributes.MasterShape != null) ? String(attributes.MasterShape) : '';
    var masterId = (attributes && attributes.Master != null) ? String(attributes.Master) : '';
    var idx = getIndex(context);
    if (!idx) {
        return null;
    }
    var owningMaster = '';
    if (masterShapeId && parentMasterId && parentMasterId.length > 0) {
        owningMaster = parentMasterId;
    }
    else if (masterId) {
        owningMaster = masterId;
    }
    else if (masterShapeId) {
        // Fallback: if the instance only specifies a MasterShape but no Master,
        // search masterChildByMasterId to find which master contains this child id.
        var masterChildIndex = idx.masterChildByMasterId;
        if (masterChildIndex && typeof masterChildIndex.forEach === 'function') {
            masterChildIndex.forEach(function (childMap, masterKey) {
                if (!owningMaster && childMap && typeof childMap.has === 'function' && childMap.has(String(masterShapeId))) {
                    owningMaster = String(masterKey);
                }
            });
        }
    }
    if (masterShapeId && owningMaster) {
        var childMap = idx.masterChildByMasterId && idx.masterChildByMasterId.get
            ? idx.masterChildByMasterId.get(String(owningMaster)) : null;
        if (childMap && childMap.get) {
            var node = childMap.get(String(masterShapeId));
            if (node) {
                return node;
            }
        }
    }
    if (masterId) {
        var roots = idx.masterRootIdsByMasterId && idx.masterRootIdsByMasterId.get
            ? idx.masterRootIdsByMasterId.get(String(masterId)) : [];
        var childMap2 = idx.masterChildByMasterId && idx.masterChildByMasterId.get
            ? idx.masterChildByMasterId.get(String(masterId)) : null;
        if (childMap2 && roots && roots.length > 0) {
            var rootNode = childMap2.get(String(roots[0]));
            if (rootNode) {
                return rootNode;
            }
        }
    }
    return null;
}
/**
 * Resolves the semantic shape name for mapping to EJ2 diagram nodes.
 * Checks instance attributes, master source attributes, and master index
 * definitions to determine the most appropriate shape name.
 *
 * @param {VisioShapeNode} pageNode - Current page shape node
 * @param {VisioShapeNode|null} masterSource - Master source node if available
 * @param {ParsingContext} context - Parsing context with master index
 * @param {string} [parentMasterId] - Optional parent master ID for nested shapes
 * @returns {string} Resolved shape name or empty string if not found
 */
export function resolveShapeNameForMapping(pageNode, masterSource, context, parentMasterId) {
    var attributes = pageNode && pageNode.$ ? pageNode.$ : {};
    // Foreign shapes must map to Image (existing behavior)
    var typeStr = getAttrString(attributes, 'Type');
    if (typeStr && typeStr.toLowerCase() === 'foreign') {
        return 'Image';
    }
    // 1) instance attributes
    var instNameU = getTrimmedOrEmpty(getAttrString(attributes, 'NameU'));
    if (instNameU) {
        return instNameU;
    }
    var instName = getTrimmedOrEmpty(getAttrString(attributes, 'Name'));
    if (instName) {
        return instName;
    }
    // Detect MasterShape-only child (do NOT use owning master semantic name for these)
    var hasMasterShape = getTrimmedOrEmpty(getAttrString(attributes, 'MasterShape')).length > 0;
    var hasMaster = getTrimmedOrEmpty(getAttrString(attributes, 'Master')).length > 0;
    // 2) master child/root node attributes (specific to that shape)
    if (masterSource && masterSource.$) {
        var msAttrs = masterSource.$;
        var msNameU = getTrimmedOrEmpty(getAttrString(msAttrs, 'NameU'));
        if (msNameU) {
            return msNameU;
        }
        var msName = getTrimmedOrEmpty(getAttrString(msAttrs, 'Name'));
        if (msName) {
            return msName;
        }
    }
    // If it's a MasterShape-only child and we couldn't get a specific name, stop here.
    // Falling back to the owning master's name would mislabel sub-shapes as "Task", etc.
    if (hasMasterShape && !hasMaster) {
        return '';
    }
    // 3) masters.xml index nameU (semantic name for top-level master instances)
    var masterId = hasMaster ? getTrimmedOrEmpty(getAttrString(attributes, 'Master'))
        : (parentMasterId ? getTrimmedOrEmpty(String(parentMasterId)) : '');
    if (!masterId) {
        return '';
    }
    var idx = getIndex(context);
    if (!idx || !idx.mastersById || !idx.mastersById.get) {
        return '';
    }
    var masterInfo = idx.mastersById.get(String(masterId));
    if (!masterInfo) {
        return '';
    }
    var nameU = getTrimmedOrEmpty(masterInfo.nameU ? String(masterInfo.nameU) : '');
    if (nameU) {
        return nameU;
    }
    return '';
}
/**
 * Builds a path shape from Visio geometry sections.
 * Converts geometry rows into SVG path data, applying local scaling
 * to produce a path representation of the shape.
 *
 * @param {VisioSection[]} geomSections - Geometry sections of the shape
 * @param {VisioShape} node - Shape node with width and height
 * @returns {DetermineShapeResult} Path shape result with type and data
 */
function buildPathShapeFromGeometrySections(geomSections, node) {
    var finalPath = '';
    if (geomSections && geomSections.length > 1) {
        finalPath = formatPathData(createPathFromGeometrySections(geomSections, { pinX: 0, pinY: 0, Width: node.width, Height: node.height }, { useLocalScaling: true }));
    }
    else {
        var pathData = '';
        var sectionsArr = ensureArray(geomSections);
        for (var _i = 0, sectionsArr_1 = sectionsArr; _i < sectionsArr_1.length; _i++) {
            var section = sectionsArr_1[_i];
            if (!section || !section.Row) {
                continue;
            }
            var part = createPathFromGeometry({ Row: ensureArray(section.Row), width: node.width, height: node.height }, { pinX: 0, pinY: 0, Width: node.width, Height: node.height }, undefined, { useLocalScaling: true });
            if (part && part.length > 0) {
                pathData += part.trim() + ' ';
            }
        }
        finalPath = formatPathData(pathData.trim());
    }
    return { type: 'Path', data: finalPath };
}
/**
 * Determines the default EJ2 node shape for a Visio shape.
 * Resolves semantic name, attempts mapping to supported EJ2 types,
 * and falls back to geometry-based path if no supported type is found.
 *
 * @param {VisioShapeNode} pageNode - Current page shape node
 * @param {VisioShapeNode|null} masterSource - Master source node if available
 * @param {VisioSection[]} geomSections - Geometry sections of the shape
 * @param {VisioShape} node - Shape node with dimensions
 * @param {ParsingContext} context - Parsing context with master index
 * @param {string} [parentMasterId] - Optional parent master ID for nested shapes
 * @returns {DetermineShapeResult} Determined shape result (mapped or path)
 */
export function determineDefaultNodeShape(pageNode, masterSource, geomSections, node, context, parentMasterId) {
    // Resolve the best semantic name
    var resolvedName = resolveShapeNameForMapping(pageNode, masterSource, context, parentMasterId);
    // Feed mapper with a stable Attributes object; keep empty string if unknown (do not use undefined)
    var attributes = pageNode && pageNode.$ ? pageNode.$ : {};
    var mappingAttrs = {
        Name: (resolvedName !== undefined && resolvedName !== null) ? String(resolvedName) : '',
        Type: getAttrString(attributes, 'Type')
    };
    // Let existing mapper decide if EJ2 already supports it (Basic/Flow/Bpmn/UML/Image)
    var mapped = determineShapeType(mappingAttrs, undefined, masterSource ? masterSource : pageNode, node, context);
    // If mapper produced a supported non-Path type, use it.
    if (mapped && mapped.type && mapped.type !== 'Path') {
        return mapped;
    }
    // Otherwise, fall back to geometry-based path
    return buildPathShapeFromGeometrySections(geomSections, node);
}
/**
 * Attempts to determine a semantic group shape for a Visio group node.
 * Resolves the group's name, runs the shape type mapper, and only collapses
 * into semantic families (BPMN, UML, Image) to avoid losing visuals for generic groups.
 *
 * @param {VisioShapeNode} groupNode - Current group shape node
 * @param {VisioShapeNode|null} groupMasterNode - Master source node for the group
 * @param {VisioShape} groupShape - Group shape with dimensions
 * @param {ParsingContext} context - Parsing context with master index
 * @param {string} [parentMasterId] - Optional parent master ID for nested groups
 * @returns {DetermineShapeResult|null} Semantic group shape result, or null if not applicable
 */
export function tryDetermineSemanticGroupShape(groupNode, groupMasterNode, groupShape, context, parentMasterId) {
    var attrs = groupNode && groupNode.$ ? groupNode.$ : {};
    // Collapse ONLY for true master instances (not MasterShape-only children)
    var masterId = getTrimmedOrEmpty(getAttrString(attrs, 'Master'));
    if (!masterId) {
        return null;
    }
    var resolvedName = resolveShapeNameForMapping(groupNode, groupMasterNode, context, parentMasterId);
    if (!resolvedName) {
        return null;
    }
    // Run mapper with resolved name; defaultData is not needed for BPMN/UML/Image.
    var mapped = determineShapeType({ Name: String(resolvedName), Type: 'Group' }, undefined, groupNode, groupShape, context);
    if (!mapped || !mapped.type) {
        return null;
    }
    // Safety: only collapse semantic families (prevents losing visuals for generic grouped stencils)
    var t = String(mapped.type);
    if (t === 'Bpmn' || t === 'UmlClassifier' || t === 'UmlActivity' || t === 'Image') {
        // Never collapse if mapper still fell back to Path
        return mapped;
    }
    return null;
}
/**
 * Collects geometry sections from a Visio shape node, keyed by IX.
 * If IX is missing, generates a synthetic key to ensure uniqueness.
 * @param {VisioShapeNode} node - Shape node containing Section elements
 * @returns {Map<string, VisioSection>} Map of section keys to geometry sections
 */
function getGeometrySectionsByIX(node) {
    var geometrySectionsByIX = new Map();
    if (!node) {
        return geometrySectionsByIX;
    }
    var sections = ensureArray(node.Section);
    var syntheticKeyCounter = 0;
    for (var sectionIndex = 0; sectionIndex < sections.length; sectionIndex += 1) {
        var section = sections[parseInt(sectionIndex.toString(), 10)];
        if (!section || !section.$ || section.$.N !== 'Geometry') {
            continue;
        }
        var sectionKey = '';
        var sectionAttributes = section.$;
        var ixValue = sectionAttributes.IX;
        if (ixValue !== null && ixValue !== undefined) {
            sectionKey = String(ixValue);
        }
        else {
            sectionKey = 'g' + String(syntheticKeyCounter);
            syntheticKeyCounter += 1;
        }
        geometrySectionsByIX.set(sectionKey, section);
    }
    return geometrySectionsByIX;
}
/**
 * Merges Geometry sections by IX with Visio precedence (instance > master).
 * Instance values take baseline; master provides defaults for missing values.
 * When IX matches, cells merge with numeric-only override strategy.
 * @param {VisioShapeNode} masterNode - Master shape node with default geometry
 * @param {VisioShapeNode} instNode - Instance shape node with overrides
 * @returns {VisioSection[]} Deep-merged Geometry sections
 */
export function mergeGeometrySectionsByIndex(masterNode, instNode) {
    var masterSectionMap = getGeometrySectionsByIX(masterNode);
    var instanceSectionMap = getGeometrySectionsByIX(instNode);
    var resultSections = [];
    if (!instanceSectionMap || instanceSectionMap.size === 0) {
        masterSectionMap.forEach(function (section) {
            resultSections.push(section);
        });
        return resultSections;
    }
    if (!masterSectionMap || masterSectionMap.size === 0) {
        instanceSectionMap.forEach(function (section) {
            resultSections.push(section);
        });
        return resultSections;
    }
    var processedSectionKeys = new Set();
    instanceSectionMap.forEach(function (instanceSection, sectionKey) {
        var masterSection = masterSectionMap.get(sectionKey);
        if (masterSection) {
            resultSections.push(mergeOneSectionDeep(masterSection, instanceSection));
        }
        else {
            resultSections.push(instanceSection);
        }
        processedSectionKeys.add(sectionKey);
    });
    masterSectionMap.forEach(function (masterSection, sectionKey) {
        if (!processedSectionKeys.has(sectionKey)) {
            resultSections.push(masterSection);
        }
    });
    return resultSections;
    /**
     * Merges one Geometry section from master and instance definitions.
     * Consolidates section-level and row-level cells with numeric precedence.
     * @param {VisioSection} masterSection - Master section with default cells and rows
     * @param {VisioSection} instanceSection - Instance section with overrides and additions
     * @returns {VisioSection} Merged section preserving master metadata
     */
    function mergeOneSectionDeep(masterSection, instanceSection) {
        var masterSectionCells = masterSection && masterSection.Cell ? ensureArray(masterSection.Cell) : [];
        var instanceSectionCells = instanceSection && instanceSection.Cell ? ensureArray(instanceSection.Cell) : [];
        var mergedSectionCells = mergeCellsNumericOnly(masterSectionCells, instanceSectionCells);
        var masterRowArray = masterSection && masterSection.Row ? ensureArray(masterSection.Row) : [];
        var instanceRowArray = instanceSection && instanceSection.Row ? ensureArray(instanceSection.Row) : [];
        var instanceRowsByIX = new Map();
        var instanceRowsByPosition = new Map();
        var instancePositionCounter = 0;
        for (var instanceRowIndex = 0; instanceRowIndex < instanceRowArray.length; instanceRowIndex += 1) {
            var instanceRow = instanceRowArray[parseInt(instanceRowIndex.toString(), 10)];
            var rowIndexString = '';
            if (instanceRow && instanceRow.$) {
                var rowAttributes = instanceRow.$;
                var ixAttribute = rowAttributes.IX;
                if (ixAttribute !== undefined && ixAttribute !== null) {
                    rowIndexString = String(ixAttribute);
                }
            }
            if (rowIndexString.length > 0) {
                instanceRowsByIX.set(rowIndexString, instanceRow);
            }
            else {
                var positionKey = 'pos_' + String(instancePositionCounter);
                instanceRowsByPosition.set(positionKey, instanceRow);
                instancePositionCounter += 1;
            }
        }
        var mergedRowArray = [];
        var masterKeySet = new Set();
        var masterPositionCounter = 0;
        for (var masterRowIndex = 0; masterRowIndex < masterRowArray.length; masterRowIndex += 1) {
            var masterRow = masterRowArray[parseInt(masterRowIndex.toString(), 10)];
            var masterRowIndexString = '';
            if (masterRow && masterRow.$) {
                var masterRowAttributes = masterRow.$;
                var masterIxAttribute = masterRowAttributes.IX;
                if (masterIxAttribute !== undefined && masterIxAttribute !== null) {
                    masterRowIndexString = String(masterIxAttribute);
                }
            }
            var masterPositionKey = resolveRowPositionKey(masterRow, masterPositionCounter);
            var mergedRow = void 0;
            if (masterRowIndexString.length > 0 && instanceRowsByIX.has(masterRowIndexString)) {
                var matchingInstanceRow = instanceRowsByIX.get(masterRowIndexString);
                mergedRow = mergeRowCellsNumericOnly(masterRow, matchingInstanceRow);
            }
            else {
                var fallbackInstanceRow = instanceRowsByPosition.get(masterPositionKey);
                mergedRow = mergeRowCellsNumericOnly(masterRow, fallbackInstanceRow);
            }
            mergedRowArray.push(mergedRow);
            masterKeySet.add(masterRowIndexString.length > 0 ? masterRowIndexString : masterPositionKey);
            masterPositionCounter += 1;
        }
        instanceRowsByIX.forEach(function (instanceRow, instanceRowIX) {
            if (!masterKeySet.has(instanceRowIX)) {
                mergedRowArray.push(sanitizeRowShallow(instanceRow));
            }
        });
        instanceRowsByPosition.forEach(function (instanceRow, positionKey) {
            if (!masterKeySet.has(positionKey)) {
                mergedRowArray.push(sanitizeRowShallow(instanceRow));
            }
        });
        var mergedSection = { $: masterSection.$ };
        if (mergedSectionCells.length > 0) {
            mergedSection.Cell = mergedSectionCells;
        }
        if (mergedRowArray.length > 0) {
            mergedSection.Row = mergedRowArray;
        }
        return mergedSection;
        /**
         * Resolves position key using IX if present, otherwise uses position index.
         * @param {VisioRow} row - Row to evaluate
         * @param {number} position - Fallback position index
         * @returns {string} Row key (IX or pos_N)
         */
        function resolveRowPositionKey(row, position) {
            if (row && row.$) {
                var rowAttributes = row.$;
                var ixAttribute = rowAttributes.IX;
                if (ixAttribute !== undefined && ixAttribute !== null) {
                    return String(ixAttribute);
                }
            }
            return 'pos_' + String(position);
        }
        /**
         * Merges row cells by name with numeric-only override from instance.
         * @param {VisioRow} masterRow - Master row providing defaults
         * @param {VisioRow|undefined} instanceRow - Instance row providing overrides
         * @returns {VisioRow} Merged row with combined cells
         */
        function mergeRowCellsNumericOnly(masterRow, instanceRow) {
            var masterRowCells = masterRow && masterRow.Cell ? ensureArray(masterRow.Cell) : [];
            var instanceRowCells = instanceRow && instanceRow.Cell ? ensureArray(instanceRow.Cell) : [];
            var mergedCells = mergeCellsNumericOnly(masterRowCells, instanceRowCells);
            var resultRow = { $: masterRow.$ };
            if (mergedCells.length > 0) {
                resultRow.Cell = mergedCells;
            }
            return resultRow;
        }
        /**
         * Creates shallow copy of row with only N and V cell attributes.
         * @param {VisioRow} sourceRow - Row to sanitize
         * @returns {VisioRow} Sanitized row with minimal cell data
         */
        function sanitizeRowShallow(sourceRow) {
            var sanitizedRow = { $: sourceRow.$ };
            var sourceRowCells = sourceRow && sourceRow.Cell ? ensureArray(sourceRow.Cell) : [];
            var sanitizedCells = [];
            for (var cellIndex = 0; cellIndex < sourceRowCells.length; cellIndex += 1) {
                var currentCell = sourceRowCells[parseInt(cellIndex.toString(), 10)];
                sanitizedCells.push(cloneNameV(currentCell));
            }
            if (sanitizedCells.length > 0) {
                sanitizedRow.Cell = sanitizedCells;
            }
            return sanitizedRow;
        }
    }
    /**
     * Maps cells by their N attribute.
     * @param {VisioCell[]} cells - Cell array to map
     * @returns {Map<string, VisioCell>} Cells keyed by name
     */
    function mapCellsByName(cells) {
        var cellsByName = new Map();
        for (var cellIndex = 0; cellIndex < cells.length; cellIndex += 1) {
            var cell = cells[parseInt(cellIndex.toString(), 10)];
            if (cell && cell.$ && cell.$.N) {
                cellsByName.set(String(cell.$.N), cell);
            }
        }
        return cellsByName;
    }
    /**
     * Checks if cell V attribute is numeric.
     * @param {VisioCell} cell - Cell to evaluate
     * @returns {boolean} True if V is numeric
     */
    function hasNumericV(cell) {
        if (!cell || !cell.$) {
            return false;
        }
        var cellAttributes = cell.$;
        var vAttribute = cellAttributes.V;
        if (vAttribute === undefined || vAttribute === null) {
            return false;
        }
        var numericValue = parseFloat(String(vAttribute));
        if (!isFinite(numericValue)) {
            return false;
        }
        return true;
    }
    /**
     * Creates shallow clone of cell with only N and V attributes.
     * @param {VisioCell} sourceCell - Cell to clone
     * @returns {VisioCell} Cloned cell with N and V
     */
    function cloneNameV(sourceCell) {
        var cellName = '';
        if (sourceCell && sourceCell.$ && sourceCell.$.N) {
            cellName = String(sourceCell.$.N);
        }
        var cellValue;
        if (sourceCell && sourceCell.$) {
            var sourceAttributes = sourceCell.$;
            var vAttribute = sourceAttributes.V;
            if (vAttribute !== undefined && vAttribute !== null) {
                if (typeof vAttribute === 'number') {
                    cellValue = vAttribute;
                }
                else {
                    cellValue = String(vAttribute);
                }
            }
        }
        var clonedCell = { $: { N: cellName } };
        if (cellValue !== undefined && cellValue !== null) {
            clonedCell.$.V = cellValue;
        }
        return clonedCell;
    }
    /**
     * Merges cells by name with numeric-only instance override.
     * @param {VisioCell[]} masterCells - Master cell array
     * @param {VisioCell[]} instanceCells - Instance cell array
     * @returns {VisioCell[]} Merged cell array
     */
    function mergeCellsNumericOnly(masterCells, instanceCells) {
        var masterCellsByName = mapCellsByName(masterCells);
        var instanceCellsByName = mapCellsByName(instanceCells);
        var mergedCells = [];
        masterCellsByName.forEach(function (masterCell, cellName) {
            var instanceCell = instanceCellsByName.get(cellName);
            if (instanceCell) {
                if (hasNumericV(instanceCell)) {
                    mergedCells.push(cloneNameV(instanceCell));
                }
                else {
                    mergedCells.push(cloneNameV(masterCell));
                }
            }
            else {
                mergedCells.push(cloneNameV(masterCell));
            }
        });
        return mergedCells;
    }
}
/**
 * Checks if all geometry sections explicitly have NoFill=1.
 * Returns true only if every geometry section has the NoFill cell set to 1,
 * indicating that all geometry sections should not be filled.
 *
 * @param {VisioSection[]} sections - Array of Visio geometry sections to check
 * @returns {boolean} True if all sections have NoFill=1, false otherwise
 * @remarks
 * If any section is missing or has NoFill !== 1, returns false.
 * Empty array or undefined sections also return false.
 *
 * @example
 * // Check if all geometry sections have no fill
 * const hasNoFill = allGeometrySectionsNoFill(geometrySections);
 * // Result: true or false
 */
export function allGeometrySectionsNoFill(sections) {
    var geometrySections = ensureArray(sections);
    if (!geometrySections || geometrySections.length === 0) {
        return false;
    }
    for (var sectionIndex = 0; sectionIndex < geometrySections.length; sectionIndex++) {
        var geometrySection = geometrySections[parseInt(sectionIndex.toString(), 10)];
        if (!geometrySection) {
            return false;
        }
        var noFillValue = 0; // default fill allowed
        if (geometrySection.Cell) {
            var cellMap = createCellMap(ensureArray(geometrySection.Cell));
            var noFillCell = cellMap.get('NoFill');
            noFillValue = safeNumber(noFillCell);
        }
        if (noFillValue !== 1) {
            return false;
        }
    }
    return true;
}
/**
 * Checks if all geometry sections explicitly have NoLine=1.
 * Returns true only if every geometry section has the NoLine cell set to 1,
 * indicating that all geometry sections should not have a border line.
 *
 * @param {VisioSection[]} sections - Array of Visio geometry sections to check
 * @returns {boolean} True if all sections have NoLine=1, false otherwise
 * @remarks
 * If any section is missing or has NoLine !== 1, returns false.
 * Empty array or undefined sections also return false.
 *
 * @example
 * // Check if all geometry sections have no line
 * const hasNoLine = allGeometrySectionsNoLine(geometrySections);
 * // Result: true or false
 */
export function allGeometrySectionsNoLine(sections) {
    var geometrySections = ensureArray(sections);
    if (!geometrySections || geometrySections.length === 0) {
        return false;
    }
    for (var sectionIndex = 0; sectionIndex < geometrySections.length; sectionIndex++) {
        var geometrySection = geometrySections[parseInt(sectionIndex.toString(), 10)];
        if (!geometrySection) {
            return false;
        }
        var noLineValue = 0; // default line allowed
        if (geometrySection.Cell) {
            var cellMap = createCellMap(ensureArray(geometrySection.Cell));
            var noLineCell = cellMap.get('NoLine');
            noLineValue = safeNumber(noLineCell);
        }
        if (noLineValue !== 1) {
            return false;
        }
    }
    return true;
}
/**
 * Determines if a Geometry section is hidden by checking the section-level
 * NoShow cell (1 = hidden). Falls back to visible if the cell is not present.
 *
 * @param {VisioSection} section - The Geometry section to evaluate.
 * @returns {boolean} True if the section is hidden, otherwise false.
 */
export function isGeometrySectionHidden(section) {
    // Guard: invalid section is not hidden
    if (!section) {
        return false;
    }
    // Build a cell map for section-level cells
    if (section.Cell) {
        var cellMap = createCellMap(ensureArray(section.Cell));
        var noShowValue = cellMap.get('NoShow');
        var hidden = safeNumber(noShowValue) === 1;
        if (hidden) {
            return true;
        }
    }
    // Default visible when NoShow is not set
    return false;
}
/**
 * Determines if a Geometry row is hidden by checking a row-level
 * NoShow cell (1 = hidden). If the row lacks NoShow, the row is
 * considered visible.
 *
 * @param {VisioRow} row - The Geometry row to evaluate.
 * @returns {boolean} True if the row is hidden, otherwise false.
 */
export function isGeometryRowHidden(row) {
    // Guard: invalid row is not hidden
    if (!row) {
        return false;
    }
    // Build a cell map for row-level cells
    if (row.Cell) {
        var cellMap = createCellMap(ensureArray(row.Cell));
        var noShowValue = cellMap.get('NoShow');
        if (safeNumber(noShowValue) === 1) {
            return true;
        }
    }
    // Default visible when NoShow is not set
    return false;
}
/**
 * Returns true only if every Geometry section in the array
 * is hidden (NoShow = 1). Empty or invalid input returns false
 * (do not hide the whole shape by default).
 *
 * @param {VisioSection[]} sections - Geometry sections collection.
 * @returns {boolean} True if all sections are hidden, otherwise false.
 */
export function areAllGeometrySectionsHidden(sections) {
    // Guard: no sections means do not hide the whole shape
    var allSections = ensureArray(sections);
    if (!allSections || allSections.length === 0) {
        return false;
    }
    // Check each section for NoShow=1
    for (var i = 0; i < allSections.length; i++) {
        var section = allSections[parseInt(i.toString(), 10)];
        if (!isGeometrySectionHidden(section)) {
            return false;
        }
    }
    return true;
}
