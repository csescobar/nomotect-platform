/**
 * Calculates relative luminance of an RGB color for contrast analysis
 *
 * @param {Object} param - Object with r, g, b properties (0-255)
 * @returns {number} Relative luminance value (0-1)
 * @hidden
 */
export declare function getRelativeLuminance({ r, g, b }: any): number;
/**
 * Derives caret and selection colors for contrast visibility from base color
 *
 * @param {string} baseColor - Base color in hex or rgb format
 * @returns {Object} Object with caret and selection color strings
 * @hidden
 */
export declare function deriveCursorColors(baseColor: string): {
    caret: string;
    selection: string;
};
