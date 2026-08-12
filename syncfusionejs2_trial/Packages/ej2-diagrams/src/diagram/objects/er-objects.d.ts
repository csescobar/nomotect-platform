import { ChildProperty } from '@syncfusion/ej2-base';
import { ShapeStyleModel } from '../core/appearance-model';
import { ShapeAnnotationModel } from './annotation-model';
/**
 * Defines the additional constraints supported for an ER entity field.
 *
 * Supported values are:
 * - `'NotNull'`: Indicates that the field does not allow null values.
 * - `'Unique'`: Indicates that the field value must be unique.
 */
export declare type ErFieldConstraint = 
/** `'NotNull'`: Indicates that the field does not allow null values. */
'NotNull'
/** `'Unique'`: Indicates that the field value must be unique. */
 | 'Unique';
/**
 * Defines the semantic type of an ER relationship connector.
 *
 * `'Identifying'` relationships are typically rendered as solid lines.
 * `'NonIdentifying'` relationships are typically rendered as dashed lines.
 */
export declare type ErRelationshipTypes = 
/**
 * Indicates an identifying relationship.
 *
 * Identifying relationships are typically rendered as solid lines.
 */
'Identifying'
/**
 * Indicates a non-identifying relationship.
 *
 * Non-identifying relationships are typically rendered as dashed lines.
 */
 | 'NonIdentifying';
/**
 * Defines the Crow's Foot cardinality notation rendered at either end of an ER
 * relationship connector.
 *
 * Supported values:
 * - `'One'`: Single mandatory occurrence.
 * - `'OneAndOnlyOne'`: Exactly one occurrence.
 * - `'Many'`: Many occurrences.
 * - `'ZeroOrOne'`: Optional single occurrence.
 * - `'OneOrMany'`: One or more occurrences.
 * - `'ZeroOrMany'`: Zero or more occurrences.
 */
export declare type ErMultiplicityTypes = 
/**
 * Indicates mandatory one cardinality and renders a single mandatory marker.
 *
 * Symbol: `|`
 */
'One'
/**
 * Indicates exactly one cardinality and renders an exact-one marker.
 *
 * Symbol: `||`
 */
 | 'OneAndOnlyOne'
/**
 * Indicates many cardinality.
 */
 | 'Many'
/**
 * Indicates optional single cardinality.
 */
 | 'ZeroOrOne'
/**
 * Indicates one or more cardinality.
 */
 | 'OneOrMany'
/**
 * Indicates zero or more cardinality.
 */
 | 'ZeroOrMany';
/**
 * Defines the header row configuration for an ER entity shape.
 */
export declare class ErHeader extends ChildProperty<ErHeader> {
    /**
     * Defines the annotation displayed in the ER entity header row.
     *
     * Use `annotation.content` to specify the entity or table name.
     *
     * @default { content: 'Entity' }
     */
    annotation: ShapeAnnotationModel;
    /**
     * Defines the visual style of the ER entity header row.
     *
     * Supports standard shape style properties such as fill, stroke color,
     * stroke width, opacity, and other supported diagram style values.
     *
     * @default { fill: 'none', strokeColor: 'none', strokeWidth: 0 }
     */
    style: ShapeStyleModel;
    /**
     * Defines the height of the ER entity header row.
     *
     * @default 30
     */
    height: number;
    /**
     * getClassName method
     *
     * @returns { string } getClassName method.
     *
     * @private
     */
    getClassName(): string;
}
/**
 * Defines a single field within an ER entity.
 *
 * A field can represent a database column or a logical entity attribute. Each
 * field supports independent primary key and foreign key indicators, optional
 * data type display text, supported constraints, visual row style, and field
 * text styling.
 */
export declare class ErField extends ChildProperty<ErField> {
    /**
     * Defines the unique identifier of the field within its parent entity.
     *
     * This identifier is used by runtime APIs such as `removeErField`. The value
     * must be unique within the parent ER entity.
     *
     * @default ''
     */
    id: string;
    /**
     * Defines the display name of the field.
     *
     * This typically represents the database column name or logical attribute
     * name shown in the ER entity field row.
     *
     * @default ''
     */
    name: string;
    /**
     * Defines the data type label displayed for the field.
     *
     * This value is treated as display text by the diagram component. Examples
     * include `INT`, `VARCHAR(255)`, and `DECIMAL(10,2)`.
     *
     * @default ''
     */
    dataType: string;
    /**
     * Indicates whether the field is a primary key.
     *
     * When enabled, a primary key indicator is rendered for the field. A field
     * can be both a primary key and a foreign key.
     *
     * @default false
     */
    isPrimaryKey: boolean;
    /**
     * Indicates whether the field is a foreign key.
     *
     * When enabled, a foreign key indicator is rendered for the field. A field
     * can be both a primary key and a foreign key.
     *
     * @default false
     */
    isForeignKey: boolean;
    /**
     * Defines additional constraints applied to the field.
     *
     * Accepts one or more `ErFieldConstraint` values.
     *
     * @default []
     */
    constraints: ErFieldConstraint[];
    /**
     * Defines the visual style of the ER field row.
     *
     * Supports standard shape style properties such as fill, stroke color,
     * stroke width, opacity, and other supported diagram style values.
     * Field-level style values override applicable values from field defaults.
     *
     * @default { fill: 'none', strokeColor: 'none', strokeWidth: 0 }
     */
    style: ShapeStyleModel;
    /**
     * Defines text styling for the ER field row.
     *
     * Only `annotation.style` is applicable. The `annotation.content`
     * property is ignored — the `name` property is always used as the
     * field display text.
     *
     * @default {}
     */
    annotation: ShapeAnnotationModel;
    /**
     * getClassName method
     *
     * @returns { string } getClassName method.
     *
     * @private
     */
    getClassName(): string;
}
/**
 * Defines visual default options for ER entity field rows.
 */
export declare class ErFieldDefaults extends ChildProperty<ErFieldDefaults> {
    /**
     * Defines exactly two colors cycled across field rows in alternating order.
     *
     * Row 0 uses `alternateRowColors[0]`, row 1 uses
     * `alternateRowColors[1]`, row 2 uses `alternateRowColors[0]`, and so on.
     *
     * @default []
     */
    alternateRowColors: [string, string];
    /**
     * Defines the default height of each ER entity field row.
     *
     * @default 25
     */
    height: number;
    /**
     * getClassName method
     *
     * @returns { string } getClassName method.
     *
     * @private
     */
    getClassName(): string;
}
/**
 * Defines a Crow's Foot multiplicity descriptor for one end of an ER connector.
 */
export declare class ErMultiplicity extends ChildProperty<ErMultiplicity> {
    /**
     * Defines the Crow's Foot cardinality notation rendered at an ER connector
     * endpoint.
     *
     * @default 'One'
     */
    type: ErMultiplicityTypes;
    /**
     * getClassName method
     *
     * @returns { string } getClassName method.
     *
     * @private
     */
    getClassName(): string;
}
