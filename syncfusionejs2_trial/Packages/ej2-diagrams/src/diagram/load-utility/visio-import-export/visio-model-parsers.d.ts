import { ParsingContext } from './visio-import-export';
import { VisioDocumentSettings, VisioMaster, VisioNodeShadow, VisioNodeStyle, VisioPage, VisioRelationship, VisioShape, VisioTheme, VisioWindow } from './visio-models';
import { CellMapValue, ColorRef, MasterElement, MasterDefaultValues, // Added for setDefaultData and parseVisioNodeStyle
OneOrMany, OrderEntry, // Added for buildFmtSchemeFill/Stroke
ParsedXmlObject, ProcessedColor, ShapeAttributes, VisioShapeNode, ThemeElements, VisioPageSheet, VisioPort, WindowRootElement, XmlRelationship, RgbColor } from './visio-types';
/**
 * Finds the default master data for a given shape from its master ID.
 * This function searches through a collection of master shape definitions to locate
 * the master that corresponds to the given shape's master ID attribute.
 *
 * @param {MasterDefaultValues[]} defaultDataValue - The collection of all master shape definitions, each with a masterID property.
 * @param {ShapeAttributes} attributes - The attributes of the current shape, containing the Master property with the master ID reference.
 * @returns {MasterDefaultValues} The default data object containing shape properties (dimensions, pins, geometry, ports, styles, etc.)
 *                or an empty object if no matching master is found.
 *
 * @example
 * const defaultData = setDefaultData(allMasters, shapeAttributes);
 * const width = defaultData.Width; // Shape width from master definition
 *
 * @private
 */
export declare function setDefaultData(defaultDataValue: any[], attributes: ShapeAttributes): MasterDefaultValues;
/**
 * Extracts connection points (ports) from a Visio shape definition.
 * Parses the Connection section from the raw shape XML object to identify all ports
 * where connectors can attach. Adjusts port Y-coordinates based on shape height.
 *
 * @param {VisioShapeNode} shape - The raw shape object from the parsed XML, containing Section and Cell data.
 * @param {MasterDefaultValues} [defaultData] - Optional default data from the shape's master definition containing pre-computed port positions.
 * @param {number} [width] - Optional node width measurement that may override calculated shape width.
 * @param {number} [height] - Optional node height measurement that may override calculated shape height.
 * @returns {VisioPort[]} An array of VisioPort objects with id, coordinates (x, y), direction vectors (dirX, dirY),
 *                        port type, auto-generation flag, and prompt text. Returns empty array if no Connection section exists.
 *
 * @example
 * const ports = getVisioPorts(shapeData, masterData, 100);
 * ports.forEach(port => console.log(`Port ${port.id} at (${port.x}, ${port.y})`));
 *
 * @private
 */
export declare function getVisioPorts(shape: VisioShapeNode, defaultData?: MasterDefaultValues, width?: number, height?: number): VisioPort[];
/**
 * Parses document-level settings from the DocumentSettings XML element.
 * Extracts configuration values for glue behavior, snap settings, grid options,
 * and document protection flags from the parsed Visio XML structure.
 *
 * @param {any} obj - The source DocumentSettings element from the parsed VSDX file.
 * @returns {VisioDocumentSettings} A populated VisioDocumentSettings instance with parsed numeric, boolean,
 *                                  and configuration values. Returns a new empty instance if input is null/undefined.
 *
 * @example
 * const settings = parseVisioDocumentSettings(docSettingsElement);
 * console.log(settings.glueSettings); // 0-3 (connection behavior)
 * console.log(settings.dynamicGridEnabled); // true or false
 *
 * @private
 */
export declare function parseVisioDocumentSettings(obj: any): VisioDocumentSettings;
/**
 * Parses a Visio master shape definition from the XML element.
 * Extracts master metadata including ID, name, type, and keywords from the
 * master element's attributes and PageSheet cell data.
 *
 * @param {MasterElement} obj - The source master element from the VSDX (includes $ attributes and optional PageSheet).
 * @returns {VisioMaster} A populated VisioMaster instance containing id, name, shapeType, and shape keywords.
 *                        Returns an empty instance if input is null or missing attributes.
 *
 * @example
 * const master = parseVisioMaster(masterElement);
 * console.log(`Master: ${master.name} (${master.id})`);
 * console.log(`Type: ${master.shapeType}`);
 *
 * @private
 */
export declare function parseVisioMaster(obj: MasterElement): VisioMaster;
/**
 * Parses a Visio page configuration from PageSheet data.
 * Extracts page-level properties including dimensions, scale settings, shadow configuration,
 * drawing settings, and layer definitions from the PageSheet's Cell and Section data.
 *
 * @param {VisioPageSheet | undefined} pageSheet - The Visio PageSheet object containing Cell array and optional Section array.
 * @returns {VisioPage} A VisioPage instance populated with parsed settings. Returns instance with empty layers if input is undefined.
 *
 * @example
 * const page = parseVisioPage(pageSheetData);
 * console.log(`Page dimensions: ${page.pageWidth} x ${page.pageHeight}`);
 * console.log(`Layers: ${page.layers.length}`);
 *
 * @private
 */
export declare function parseVisioPage(pageSheet: VisioPageSheet | undefined): VisioPage;
/**
 * Parses Visio window/view configuration and display settings.
 * Extracts viewport dimensions, zoom level, view center, and display toggle flags
 * (rulers, grid, guides, connection points, etc.) from the Window XML element.
 *
 * @param {WindowRootElement} root - The root Window element containing window configuration and child Window elements.
 * @returns {VisioWindow} A VisioWindow instance with parsed view settings. Returns instance with defaults if input is missing.
 *
 * @example
 * const window = parseVisioWindow(windowElement);
 * console.log(`View Scale: ${window.viewScale * 100}%`);
 * console.log(`Show Grid: ${window.showGrid}`);
 *
 * @private
 */
export declare function parseVisioWindow(root: WindowRootElement): VisioWindow;
/**
 * Ensures the value is returned as a ReadonlyArray.
 * Converts single values to single-element arrays, passes through existing arrays,
 * and returns undefined for undefined input.
 *
 * @template T - The type of array elements.
 * @param {ReadonlyArray<T> | T | undefined} value - The value to normalize (single item, array, or undefined).
 * @returns {ReadonlyArray<T> | undefined} The value as a ReadonlyArray, or undefined if input was undefined.
 *
 * @example
 * toReadonlyArray(5); // Returns [5]
 * toReadonlyArray([1, 2, 3]); // Returns [1, 2, 3]
 * toReadonlyArray(undefined); // Returns undefined
 *
 * @private
 */
export declare function toReadonlyArray<T>(value: ReadonlyArray<T> | T | undefined): ReadonlyArray<T> | undefined;
/**
 * Extracts known theme color hex strings from an a:clrScheme object.
 * Parses standard theme color definitions (dk1, lt1, dk2, lt2, accent1-6, hlink, folHlink)
 * and returns them as normalized hex strings with '#' prefix.
 *
 * @param {ParsedXmlObject} clrScheme - The raw a:clrScheme object (typically parsed XML converted to JS object).
 * @returns {Record<string, string | undefined> | undefined} An object mapping color names to hex strings (e.g., { dk1: "#FF0000", accent1: "#00FF00" }),
 *                                                            or undefined if input is not a valid object.
 *
 * @example
 * const colors = extractAndFormatColors(clrSchemeObj);
 * console.log(colors.accent1); // "#FF00AA"
 * console.log(colors.dk1); // "#000000"
 *
 * @private
 */
export declare function extractAndFormatColors(clrScheme: ParsedXmlObject): Record<string, string | undefined> | undefined;
/**
 * Builds an ordered list of fill style definitions from an a:fmtScheme's a:fillStyleLst.
 * Extracts the __order__ array from the fill style list to maintain the sequence of fill styles.
 *
 * @param {ParsedXmlObject} fmtScheme - The a:fmtScheme object (parsed XML to JS) that may contain a:fillStyleLst.
 * @returns {ReadonlyArray<OrderEntry> | undefined} Ordered array of fill style objects with name and value,
 *                                                                        or undefined if not found or fmtScheme is not an object.
 *
 * @private
 */
export declare function buildFmtSchemeFill(fmtScheme: ParsedXmlObject): ReadonlyArray<OrderEntry> | undefined;
/**
 * Builds an ordered list of line (stroke) style definitions from an a:fmtScheme's a:lnStyleLst.
 * Extracts the __order__ array from the line style list to maintain the sequence of stroke styles.
 *
 * @param {ParsedXmlObject} fmtScheme - The a:fmtScheme object (parsed XML to JS) that may contain a:lnStyleLst.
 * @returns {ReadonlyArray<OrderEntry> | undefined} Ordered array of line style objects with name and value,
 *                                                                        or undefined if not found or fmtScheme is not an object.
 *
 * @private
 */
export declare function buildFmtSchemeStroke(fmtScheme: ParsedXmlObject): ReadonlyArray<OrderEntry> | undefined;
/**
 * Parses a Visio theme definition from theme elements.
 * Comprehensive extraction of theme colors, fonts, gradients, and variation schemes
 * from a:clrScheme, a:fmtScheme, a:fontScheme, and extension elements.
 *
 * @param {ThemeElements} obj - The theme elements root parsed from VSDX (contains a:clrScheme, a:fmtScheme, a:fontScheme, a:extLst, etc.).
 * @param {ParsingContext} context - Parser utilities and environment for logging warnings and accessing parsing state (current page, page data).
 * @returns {VisioTheme} The parsed VisioTheme object containing colors, fonts, fills, strokes, gradients, and variation schemes.
 *
 * @example
 * const theme = parseVisioTheme(themeElements, context);
 * console.log(theme.fontFamily); // "Calibri"
 * console.log(theme.fontColor.accent1); // "#0563C1"
 * console.log(theme.hexColors); // ["#FF0000", "#00FF00", ...]
 *
 * @private
 */
export declare function parseVisioTheme(obj: ThemeElements, context: ParsingContext): VisioTheme;
/**
 * Converts a hexadecimal color string to RGB components.
 * Strips the '#' prefix if present and extracts red, green, and blue values using bitwise operations.
 *
 * @param {string} hex - A hexadecimal color string (e.g., '#FF0000' or 'FF0000').
 * @returns {{red: number, green: number, blue: number}} Object containing RGB components in range [0, 255].
 *
 * @example
 * const rgb = hexToRgb('#FF0000');
 * console.log(rgb); // { red: 255, green: 0, blue: 0 }
 *
 * @private
 */
export declare function hexToRgb(hex: string): {
    red: number;
    green: number;
    blue: number;
};
/**
 * Creates a fully initialized ProcessedColor object from a hexadecimal color value.
 * Initializes all color modifier fields to 0 and sets the resolved RGB color.
 *
 * @param {string} hexColor - A hexadecimal color string (e.g., '#FF0000').
 * @returns {ProcessedColor} A ProcessedColor object with all fields initialized and RGB resolved.
 *
 * @private
 */
export declare function createProcessedColor(hexColor: string): ProcessedColor;
/**
 * Determines whether a Visio theme is applied for the current document/page.
 *
 * @param {ParsingContext} context - Parser utilities for logging warnings and accessing parsing state.
 * @returns {boolean} True when a theme is considered applied (themes array present or currentTheme schemeEnum matches page.theme), otherwise false.
 *
 * @private
 */
export declare function isThemeApplied(context?: ParsingContext): boolean;
/**
 * Parses node styling properties (fills, strokes, gradients) from a shape's raw XML object.
 * Extracts fill colors, stroke properties, gradient settings, patterns, and opacity
 * from the shape's Cell and Section data.
 *
 * @param {VisioShapeNode} shapeData - The raw shape XML object containing Cell array and optional Section array.
 * @param {ParsingContext} context - Parser utilities for logging warnings and accessing parsing state.
 * @param {MasterDefaultValues | undefined} defaultStyle - Optional default style data to fall back to for undefined properties.
 * @param {VisioShape} shape -  Parsed Visio shape(s) for the vertex node
 * @param {string} attributeName - The attribute name of the shape (e.g., 'Image', 'Shape') used to determine opacity handling.
 * @returns {VisioNodeStyle} A VisioNodeStyle object containing parsed fill, stroke, gradient, and opacity properties.
 *
 * @example
 * const nodeStyle = parseVisioNodeStyle(shapeData, context, defaultStyle, 'Shape');
 * console.log(`Stroke Width: ${nodeStyle.strokeWidth}px`);
 * console.log(`Fill Color: ${nodeStyle.fillColor}`);
 * console.log(`Gradient Angle: ${nodeStyle.gradientAngle}°`);
 *
 * @private
 */
export declare function parseVisioNodeStyle(shapeData: VisioShapeNode, context: ParsingContext, defaultStyle: MasterDefaultValues | undefined, shape: VisioShape, attributeName: string): VisioNodeStyle;
/**
 * Converts an RGB color object to a hexadecimal string representation.
 * Pads single-digit components with leading zeros.
 *
 * @param {RgbColor} color - The color object with red, green, and blue properties.
 * @returns {string} A hexadecimal color string in format "#RRGGBB" (e.g., "#FF0000").
 *
 * @private
 */
export declare function toHexStr(color: RgbColor): string;
/**
 * Converts an RGB color object to HSL color space for transformation operations.
 * Used as an intermediate step for applying tint, shade, and other color modifiers.
 *
 * @param {RgbColor} color - The RGB color object with red, green, and blue properties (0-255).
 * @returns {HSLColor} An HSLColor object representing the color in HSL space.
 *
 * @private
 */
export declare function toHsl(color: RgbColor): HSLColor;
/**
 * HSLColor class for color space conversion and manipulation.
 * Provides methods to apply tint, shade, and other color transformations.
 *
 * @private
 */
export declare class HSLColor {
    hue: number;
    saturation: number;
    lightness: number;
    constructor(hue: number, saturation: number, lightness: number);
    getLum(): number;
}
/**
 * Applies color modifiers (tint, shade, saturation, lightness, hue) to a fill style color.
 * Converts to HSV space, applies modifications, and converts back to RGB.
 *
 * @param {ColorRef | ProcessedColor} fillStyleColor - The fill style color object with modifiers and RGB color.
 * @returns {void} Modifies the color object in place.
 *
 * @private
 */
export declare function calcColor(fillStyleColor: ColorRef | ProcessedColor): void;
/**
 * Retrieves the fill color for a shape based on quick style settings and theme data.
 * Resolves fill colors from theme fill style matrices, variant colors, or base colors.
 * Applies color modifiers (tint, shade, etc.) to generate the final fill color.
 *
 * @param {VisioShape | VisioShapeNode} shape - Parsed Visio shape(s) for the vertex node
 * @param {ParsingContext} context - Parser context containing theme and shape data.
 * @returns {string | undefined} The resolved fill color in hex format (#RRGGBB), or undefined if not found.
 *
 * @private
 */
export declare function getFillColor(shape: VisioShape | VisioShapeNode, context: ParsingContext): string | undefined;
/**
 * Retrieves the line color for a shape based on quick style settings and theme data.
 * Resolves line colors from theme line style matrices, variant colors, or base colors.
 * Applies color modifiers (tint, shade, etc.) to generate the final line color.
 *
 * @param {VisioShapeNode} shape - Parsed Visio shape(s) for the vertex node
 * @param {ParsingContext} context - Parser context containing theme and shape data.
 * @returns {string | undefined} The resolved line color in hex format (#RRGGBB), or undefined if not found.
 *
 * @private
 */
export declare function getLineColor(shape: VisioShapeNode, context: ParsingContext): string | undefined;
/**
 * Maps a fillColorStyle index to a color key in the theme color scheme.
 *
 * @param {number} colorId - The color ID (1-7).
 * @returns {string | undefined} The color key (e.g., 'dk1', 'accent1'), or undefined if not found.
 *
 * @private
 */
export declare function getColorKeyFromId(colorId: number): string | undefined;
/**
 * Parses node shadow properties (outer shadow effect) from a cell map.
 * Extracts shadow pattern, type, opacity, color, and offset from the provided cell data.
 * Logs warnings about EJ2 shadow limitations during parsing.
 *
 * @param {Map<string, CellMapValue>} cellMap - A Map containing shadow-related cell values (ShdwPattern, ShdwForegnd, etc.).
 * @param {ParsingContext} context - Parser utilities for logging warnings.
 * @returns {VisioNodeShadow} A VisioNodeShadow object containing shadow properties, or default values if shadow is disabled.
 *
 * @example
 * const shadow = parseVisioNodeShadow(cellMap, context);
 * console.log(`Shadow Color: ${shadow.shadowcolor}`);
 * console.log(`Shadow Opacity: ${shadow.shadowOpacity}`);
 *
 * @private
 */
export declare function parseVisioNodeShadow(cellMap: Map<string, CellMapValue>, context: ParsingContext): VisioNodeShadow;
/**
 * Extracts media file relationships found under ../media/ targets.
 * Parses relationship XML elements to identify media resource references
 * (images, files, etc.) embedded in the Visio document.
 *
 * @param {OneOrMany<XmlRelationship>} relationshipInput - A single relationship object or array of relationship objects from the parsed XML.
 * @returns {VisioRelationship | undefined} A VisioRelationship object containing an array of media references with Id and Target,
 *                              or undefined if no media relationships are found.
 *
 * @example
 * const relationships = parserVisioRelationship(relElements);
 * relationships.media.forEach(m => console.log(`${m.Id}: ${m.Target}`));
 *
 * @private
 */
export declare function parserVisioRelationship(relationshipInput: OneOrMany<XmlRelationship>): VisioRelationship | undefined;
