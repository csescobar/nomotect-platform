/**
 * ER Columnar Layout Utilities
 *
 * Handles dynamic column-based annotation layout for ER entity fields.
 * Columns are determined by what's actually needed across all fields.
 * Each field renders only the columns that contain data.
 */
import { ErShapeModel, AnnotationModel, NodeModel, Diagram } from '..';
import { ErFieldModel } from '../objects/er-objects-model';
/**
 * Represents the layout metadata for annotations
 * @private
 */
interface ColumnConfig {
    hasKey: boolean;
    hasName: boolean;
    hasType: boolean;
    hasNotNull: boolean;
    hasUnique: boolean;
    hasDualKey: boolean;
}
/**
 * Represents calculated positions for each column
 * @private
 */
interface ColumnPositions {
    key: number;
    name: number;
    type: number;
    constraint: number;
}
/**
 * Represents measured widths for each column
 * Key, Type, and Constraint have static widths.
 * Name column is measured dynamically from field names.
 * @private
 */
interface ColumnWidths {
    keyWidth: number;
    nameWidth: number;
    typeWidth: number;
    constraintWidth: number;
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
export declare function calculateMinimumEntityWidth(config: ColumnConfig, columnWidths: ColumnWidths): number;
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
export declare function createFieldAnnotations(field: ErFieldModel, config: ColumnConfig, positions: ColumnPositions, fieldWidth: number, columnWidths?: ColumnWidths, separatorColor?: string): AnnotationModel[];
export declare function areFieldRowPositionsEqual(fieldNode: NodeModel, parentEntity: NodeModel, diagram: Diagram): boolean;
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
export declare function generateFieldRowAnnotations(parentEntity: NodeModel, field: ErFieldModel, diagram: Diagram, separatorColor?: string): AnnotationModel[];
/**
 * Factory for ER columnar layout utilities
 * @constructor ERColumnarLayoutFactory
 * @private
 */
export declare class ERColumnarLayoutFactory {
    /**
     * Get column configuration for an entity
     *
     * @param {ErShapeModel} entityShape - The ER entity shape model
     * @returns {ColumnConfig} Column configuration
     * @private
     */
    static getColumnConfig(entityShape: ErShapeModel): ColumnConfig;
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
    static getColumnPositions(entityShape: ErShapeModel, fieldWidth?: number): ColumnPositions;
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
    static calculateMinimumWidth(entityShape: ErShapeModel): number;
}
export {};
