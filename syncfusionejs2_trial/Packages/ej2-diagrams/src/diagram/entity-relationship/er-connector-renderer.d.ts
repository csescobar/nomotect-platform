/**
 * Er Connector Renderer
 * Renders Er Relationship connectors with orthogonal routing and Crow's Foot decorators.
 * Implements full connector rendering with decorators and line routing
 */
import { Diagram } from '..';
import { ConnectorModel, DecoratorModel, ErConnectorShapeModel } from '../objects/connector-model';
import { ErMultiplicityModel } from '../objects/er-objects-model';
/**
 * ER Connector Renderer class.
 *
 * @constructor
 *
 * @private
 */
export declare class ErConnectorRenderer {
    /**
     * Renders the ER connector.
     *
     * @param {ConnectorModel} connector - Connector model.
     * @returns {void}
     *
     * @private
     */
    render(connector: ConnectorModel): void;
    /**
     * Returns decorator configuration for the given ER cardinality.
     *
     * @param {ErMultiplicityModel} cardinality - ER cardinality.
     * @returns {DecoratorModel} Decorator model.
     *
     * @private
     */
    getDecoratorForCardinality(cardinality: ErMultiplicityModel): DecoratorModel;
    /**
     * updateCardinality method
     *
     * @returns {boolean} updateCardinality method.
     * @param {Connector} connector - provide the connector value (Connector type).
     * @param {ErConnectorShapeModel} erRelationship - provide the current relationship value.
     * @param {ErConnectorShapeModel} oldRelationship - provide the old relationship value.
     * @param {Diagram} diagram - provide the diagram instance for event firing.
     *
     * @private
     */
    update(connector: ConnectorModel, erRelationship: ErConnectorShapeModel, oldRelationship: ErConnectorShapeModel, diagram: Diagram): boolean;
    private updateDecorators;
    private applyRelationshipStyle;
    private getPath;
}
