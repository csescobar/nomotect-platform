/**
 * Er Diagram Module - Injectable EJ2 Module
 * Handles Er entity and relationship rendering through delegated renderers
 */
import { Diagram, DiagramElement, ErConnectorShapeModel, HistoryEntry, PointModel } from '..';
import { ConnectorModel } from '../objects/connector-model';
import { Node } from '../objects/node';
import { State } from '../enum/enum';
import { ErShapeModel } from '../objects/node-model';
import { ErConnectorRenderer } from './er-connector-renderer';
/**
 * EREventManager - Manages ER-specific event firing with proper context and state tracking
 * Prevents duplicate events, validates arguments, and ensures synchronous behavior for validation events
 *
 * @constructor EREventManager
 * @private
 */
export declare class EREventManager {
    /**
     * Fires the erEntityChanged event when an ER entity model changes.
     * Called with proper state by the caller (Start, Progress, or Completed).
     * Caller controls the lifecycle; this method fires once per call.
     * Returns a boolean indicating whether the update should proceed (not cancelled).
     *
     * @param {Diagram} diagram - The diagram instance.
     * @param {Node} entity - The entity node that changed.
     * @param {ErShapeModel} oldEntityState - Old entity state (only changed properties).
     * @param {ErShapeModel} newEntityState - New entity state (only changed properties).
     * @param {State} state - The current state (Start, Progress, or Completed).
     * @returns {boolean} `true` if update should proceed; `false` if cancelled by event handler.
     * @private
     */
    fireEREntityChanged(diagram: Diagram, entity: Node, oldEntityState: ErShapeModel, newEntityState: ErShapeModel, state: State): boolean;
    /**
     * Determines the type of entity change based on which properties have changed.
     * Identifies whether the change is to entityName, fields, collapsed state, or other properties.
     *
     * @param {ErShapeModel} oldState - Old entity state object with previous property values.
     * @param {ErShapeModel} newState - New entity state object with updated property values.
     * @returns {string} The type of change: 'EntityName', 'Fields', 'Collapsed', or 'Other'.
     * @private
     */
    private determineEntityChangeType;
    private isFieldOrderEqual;
}
/**
 * Get or create the global ER Event Manager instance
 * @returns {EREventManager} The global event manager
 * @private
 */
export declare function getEREventManager(): EREventManager;
/**
 * ErDiagrams - Injectable module for Er diagram support
 *
 * Simple class (no Base inheritance) matching BpmnDiagrams architecture.
 * Renders Er entities and relationships with specialized decorators.
 * Called via diagram.erModule when injected.
 *
 * @example
 * import { Diagram, ErDiagrams } from '@syncfusion/ej2-diagrams';
 *
 * Diagram.Inject(ErDiagrams);
 * const diagram = new Diagram({
 *   nodes: [{ id: 'entity', shape: { type: 'Er', entityName: 'Customer' } }]
 * });
 *
 * @public
 */
export declare class ErDiagrams {
    /** @private */
    connectorRenderer: ErConnectorRenderer;
    /** @private */
    eventManager: EREventManager;
    /**
     * initErContent method
     *
     * @returns { DiagramElement } initErContent method.
     * @param {DiagramElement} content - provide the content value.
     * @param {Node} node - provide the node value.
     * @param {Diagram} diagram - provide the diagram value.
     *
     * @private
     */
    initErContent(content: DiagramElement, node: Node, diagram: Diagram): DiagramElement;
    /**
     * initErConnector method
     *
     * @returns { void } initErConnector method.
     * @param { ConnectorModel } connector - provide the connector value.
     *
     * @private
     */
    initErConnector(connector: ConnectorModel): void;
    /**
     * Updates the ER connector when relationship changes occur.
     *
     * @param {ConnectorModel} connector - The connector model to update.
     * @param {ErConnectorShapeModel} erRelationship - The new ER relationship configuration.
     * @param {ErConnectorShapeModel} oldRelationship - The previous ER relationship configuration.
     * @param {Diagram} diagram - The diagram instance containing the connector.
     * @returns {boolean} `true` if the connector was successfully updated; otherwise, `false`.
     *
     * @private
     */
    updateErConnector(connector: ConnectorModel, erRelationship: ErConnectorShapeModel, oldRelationship: ErConnectorShapeModel, diagram: Diagram): boolean;
    /**
     * Validates whether a field reorder operation is valid based on source/target nodes and cursor position.
     *
     * @param {Node} source - The source node.
     * @param {Node} target - The target node.
     * @param {PointModel} cursorPosition - The cursor position during reorder.
     * @param {Diagram} diagram - The diagram instance.
     * @returns {boolean} `true` if the reorder is valid; otherwise, `false`.
     *
     * @private
     */
    validateFieldReorder(source: Node, target: Node, cursorPosition: PointModel, diagram: Diagram): boolean;
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
    reorderErField(entityNode: any, sourceFieldIndex: number, targetFieldIndex: number, diagram: Diagram): HistoryEntry | null;
    /**
     * getModuleName method
     *
     * @returns { string } getModuleName method.
     * @private
     */
    getModuleName(): string;
    /**
     * destroy method
     *
     * @returns { void } destroy method.
     * @private
     */
    destroy(): void;
}
