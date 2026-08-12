/**
 * ER Field Reordering Utilities
 *
 * Handles field reordering within ER entities with insertion index calculation
 * and field array manipulation (similar to swimlane lane reordering).
 */
import { NodeModel } from '../objects/node-model';
import { Diagram } from '../diagram';
import { HistoryEntry } from '../diagram/history';
/**
 * Get all field nodes for an ER entity in order
 *
 * @param {NodeModel} entityNode - ER entity parent node
 * @param {Diagram} diagram - Diagram instance
 * @returns {NodeModel[]} Array of field NodeModels in display order
 * @private
 */
export declare function getErFieldNodes(entityNode: NodeModel, diagram: Diagram): NodeModel[];
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
export declare function calculateFieldDropIndex(entityNode: NodeModel, sourceField: NodeModel, targetField: NodeModel, cursorY: number, diagram: Diagram): number;
/**
 * Get field index by node ID
 *
 * @param {string} nodeId - Field node ID
 * @param {NodeModel} entityNode - ER entity parent node
 * @param {Diagram} diagram - Diagram instance
 * @returns {number} Field index in shape.fields[] or -1 if not found
 * @private
 */
export declare function getErFieldIndexByNodeId(nodeId: string, entityNode: NodeModel, diagram: Diagram): number;
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
export declare function updateErFieldColors(entityNode: NodeModel, diagram: Diagram): void;
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
export declare function reorderErField(entityNode: any, sourceFieldIndex: number, targetFieldIndex: number, diagram: Diagram): HistoryEntry | null;
