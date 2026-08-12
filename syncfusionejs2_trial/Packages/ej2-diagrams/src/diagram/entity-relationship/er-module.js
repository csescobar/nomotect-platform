/**
 * Er Diagram Module - Injectable EJ2 Module
 * Handles Er entity and relationship rendering through delegated renderers
 */
import { ErConnectorRenderer } from './er-connector-renderer';
import { getErShapes } from './er-util';
import { getErFieldIndexByNodeId, calculateFieldDropIndex, reorderErField as reorderErFieldUtil } from './er-field-reorder-util';
/**
 * EREventManager - Manages ER-specific event firing with proper context and state tracking
 * Prevents duplicate events, validates arguments, and ensures synchronous behavior for validation events
 *
 * @constructor EREventManager
 * @private
 */
var EREventManager = /** @class */ (function () {
    function EREventManager() {
    }
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
    EREventManager.prototype.fireEREntityChanged = function (diagram, entity, oldEntityState, newEntityState, state) {
        // Determine the type of change based on which properties are present
        var cause = this.determineEntityChangeType(oldEntityState, newEntityState);
        var element = entity;
        // Create event arguments with cancel flag
        var eventArgs = {
            diagram: diagram,
            element: element,
            oldValue: oldEntityState,
            newValue: newEntityState,
            cause: cause,
            state: state,
            cancel: false
        };
        // Fire event once with the provided state
        diagram.trigger('erEntityChanged', eventArgs);
        // If cancelled during Start state, prevent update immediately
        if (state === 'Start' && eventArgs.cancel) {
            return false;
        }
        // Return whether update should proceed (not cancelled)
        return !eventArgs.cancel;
    };
    /**
     * Determines the type of entity change based on which properties have changed.
     * Identifies whether the change is to entityName, fields, collapsed state, or other properties.
     *
     * @param {ErShapeModel} oldState - Old entity state object with previous property values.
     * @param {ErShapeModel} newState - New entity state object with updated property values.
     * @returns {string} The type of change: 'EntityName', 'Fields', 'Collapsed', or 'Other'.
     * @private
     */
    EREventManager.prototype.determineEntityChangeType = function (oldState, newState) {
        if (oldState && newState) {
            var oldFields = (oldState && oldState.fields) || [];
            var newFields = (newState && newState.fields) || [];
            // If lengths differ, fields were added/removed
            if (oldFields.length !== newFields.length) {
                if (oldFields.length < newFields.length) {
                    return 'FieldsAdd';
                }
                if (oldFields.length > newFields.length) {
                    return 'FieldsRemove';
                }
            }
            if (!this.isFieldOrderEqual(oldFields, newFields)) {
                return 'FieldsReorder';
            }
            //if ((oldState && oldState.collapsed) !== (newState && newState.collapsed)) {
            //    return 'Collapsed';
            //}
        }
        return 'Other';
    };
    // Check if fields are in the same order by id
    EREventManager.prototype.isFieldOrderEqual = function (fields1, fields2) {
        if (fields1.length !== fields2.length) {
            return false;
        }
        for (var i = 0; i < fields1.length; i++) {
            var field1 = fields1[parseInt(i.toString(), 10)];
            var field2 = fields2[parseInt(i.toString(), 10)];
            var idA = field1 && field1.id;
            var idB = field2 && field2.id;
            if (idA !== idB) {
                return false;
            }
        }
        return true;
    };
    return EREventManager;
}());
export { EREventManager };
/**
 * Global ER Event Manager instance
 * Singleton to ensure consistent event state tracking
 * @private
 */
var erEventManager;
/**
 * Get or create the global ER Event Manager instance
 * @returns {EREventManager} The global event manager
 * @private
 */
export function getEREventManager() {
    if (!erEventManager) {
        erEventManager = new EREventManager();
    }
    return erEventManager;
}
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
var ErDiagrams = /** @class */ (function () {
    function ErDiagrams() {
        /** @private */
        this.connectorRenderer = new ErConnectorRenderer();
        /** @private */
        this.eventManager = getEREventManager();
    }
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
    ErDiagrams.prototype.initErContent = function (content, node, diagram) {
        return getErShapes(content, node, diagram);
    };
    /**
     * initErConnector method
     *
     * @returns { void } initErConnector method.
     * @param { ConnectorModel } connector - provide the connector value.
     *
     * @private
     */
    ErDiagrams.prototype.initErConnector = function (connector) {
        this.connectorRenderer.render(connector);
    };
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
    ErDiagrams.prototype.updateErConnector = function (connector, erRelationship, oldRelationship, diagram) {
        return this.connectorRenderer.update(connector, erRelationship, oldRelationship, diagram);
    };
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
    ErDiagrams.prototype.validateFieldReorder = function (source, target, cursorPosition, diagram) {
        var sourceEntity = diagram.getObject(source.parentId);
        var targetEntity = diagram.getObject(target.parentId);
        if (sourceEntity && targetEntity && sourceEntity.id === targetEntity.id &&
            sourceEntity.container && sourceEntity.container.type === 'Stack') {
            // Get field indices to validate insertion position (match swimlane logic)
            var sourceIndex = getErFieldIndexByNodeId(source.id, sourceEntity, diagram);
            var targetIndex = getErFieldIndexByNodeId(target.id, sourceEntity, diagram);
            // Calculate the insertion position to validate it
            var insertionIndex = calculateFieldDropIndex(sourceEntity, source, target, cursorPosition.y || 0, diagram);
            // Only render indicator if:
            // 1. Indices are valid (source and target both found)
            // 2. Insertion would change the field position (not same as source)
            // 3. Insertion position is at or after the first field (not before position 0)
            // 4. Not inserting at first position when source is already first (no reorder)
            var isValidInsertion = sourceIndex >= 0 && targetIndex >= 0 &&
                insertionIndex !== sourceIndex &&
                (insertionIndex > 0 || (insertionIndex === 0 && sourceIndex > 0));
            return isValidInsertion;
        }
        return false;
    };
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
    ErDiagrams.prototype.reorderErField = function (entityNode, sourceFieldIndex, targetFieldIndex, diagram) {
        return reorderErFieldUtil(entityNode, sourceFieldIndex, targetFieldIndex, diagram);
    };
    /**
     * getModuleName method
     *
     * @returns { string } getModuleName method.
     * @private
     */
    ErDiagrams.prototype.getModuleName = function () {
        return 'ErDiagrams';
    };
    /**
     * destroy method
     *
     * @returns { void } destroy method.
     * @private
     */
    ErDiagrams.prototype.destroy = function () {
        /**
         * Destroys the ErDiagrams module
         */
        this.connectorRenderer = null;
    };
    return ErDiagrams;
}());
export { ErDiagrams };
