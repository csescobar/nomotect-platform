import { ParsingContext, VisioStyle } from './visio-import-export';
import { VisioShape } from './visio-models';
import { VisioShapeNode, OneOrMany, QuickStyleValues } from './visio-types';
import { NodeInput } from './visio-theme';
/**
 * Parses Visio shape elements into EJ2 diagram shapes.
 * Iterates through shape nodes, delegates parsing to `parserVisioShapeNode`,
 * and collects the resulting VisioShape objects.
 *
 * @param {object} shapeObj - Input object containing shape nodes
 * @param {OneOrMany<VisioShapeNode>} [shapeObj.Shape] - Shape node(s) to parse
 * @param {ParsingContext} context - Parsing context with master index
 * @returns {VisioShape[]} Array of parsed VisioShape objects
 */
export declare function parserVisioShape(shapeObj: {
    Shape?: OneOrMany<VisioShapeNode>;
}, context: ParsingContext): VisioShape[];
/**
 * Builds a parent VisioStyle for a shape if its <StyleSheet> DOM element is available.
 * @param {VisioShapeNode} visioShape - The shape object containing xmlShapeData
 * @param {ParsingContext} context - Parsing context
 * @returns {VisioStyle | null} Built parent style or null if unavailable
 * @private
 */
export declare function getParentStyle(visioShape: VisioShapeNode, context: ParsingContext): VisioStyle | null;
/**
 * Computes numeric quick style values by reading and parsing relevant cells.
 * Inheritance and master fallback are honored by getCellElement().
 * @param {VisioStyle} parentStyle - Parent style to read from
 * @param {VisioShapeNode} visioShapeData - Shape used for master fallback
 * @param {ParsingContext} context - Parsing context
 * @returns {QuickStyleValues} Populated quick style values
 * @private
 */
export declare function getQuickStyleValues(parentStyle: VisioStyle, visioShapeData: VisioShapeNode, context: ParsingContext): QuickStyleValues;
/**
 * Reads the 'V' attribute from a <Cell> element with a safe default.
 * @param {Element | null | undefined} cellElement - The Cell element
 * @param {string} defaultValue - The default to return if missing/empty
 * @returns {string} The attribute value or the default
 * @private
 */
export declare function getValue(cellElement: Element | null, defaultValue: string): string;
/**
 * Resolves a <Cell> element by name from a style, or from the master’s parent style as a fallback.
 * @param {VisioStyle} shape - The starting style shape for lookup
 * @param {VisioShapeNode | NodeInput} visioShapeData - Shape used to resolve the master fallback
 * @param {ParsingContext} context - Parsing context
 * @param {string} cellName - Cell name to find
 * @param {string} sectionCellName - Cell from Section to find
 * @returns {Element | null} Resolved Cell element or null
 * @private
 */
export declare function getCellElement(shape: VisioStyle, visioShapeData: VisioShapeNode | NodeInput, context: ParsingContext, cellName: string, sectionCellName?: string): Element;
