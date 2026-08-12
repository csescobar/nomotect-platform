/**
 * ER Node Rendering Utilities
 *
 * Handles ER Entity shape rendering using child node pattern
 * (similar to UML nodes). Each field is rendered as a child NodeModel
 * with annotations containing the combined field data.
 */
import { Diagram } from '..';
import { DiagramElement } from '../core/elements/diagram-element';
import { ErFieldModel } from '../objects/er-objects-model';
import { Node } from '../objects/node';
import { NodeModel } from '../objects/node-model';
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
export declare function getErShapes(content: DiagramElement, node: Node, diagram: Diagram): DiagramElement;
export declare function addErField(parentNode: NodeModel, diagram: Diagram, field: ErFieldModel, index?: number, fieldNodeId?: string): NodeModel | null;
export declare function removeErField(parentNode: NodeModel, diagram: Diagram, field: ErFieldModel): boolean;
