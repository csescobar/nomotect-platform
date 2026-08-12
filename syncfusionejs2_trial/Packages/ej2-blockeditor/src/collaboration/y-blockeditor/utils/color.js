function parseColorToRGB(color) {
    if (color.startsWith('#')) {
        var hex = color.replace('#', '');
        if (hex.length === 3) {
            hex = hex.split('').map(function (c) { return c + c; }).join('');
        }
        if (hex.length !== 6) {
            return null;
        }
        var bigint = parseInt(hex, 16);
        return {
            r: (bigint >> 16) & 255,
            g: (bigint >> 8) & 255,
            b: bigint & 255
        };
    }
    var rgbMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (rgbMatch) {
        return {
            r: parseInt(rgbMatch[1], 10),
            g: parseInt(rgbMatch[2], 10),
            b: parseInt(rgbMatch[3], 10)
        };
    }
    return null;
}
/**
 * Calculates relative luminance of an RGB color for contrast analysis
 *
 * @param {Object} param - Object with r, g, b properties (0-255)
 * @returns {number} Relative luminance value (0-1)
 * @hidden
 */
export function getRelativeLuminance(_a) {
    var r = _a.r, g = _a.g, b = _a.b;
    var _b = [r, g, b].map(function (channel) {
        var c = channel / 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    }), R = _b[0], G = _b[1], B = _b[2];
    return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}
/**
 * Derives caret and selection colors for contrast visibility from base color
 *
 * @param {string} baseColor - Base color in hex or rgb format
 * @returns {Object} Object with caret and selection color strings
 * @hidden
 */
export function deriveCursorColors(baseColor) {
    var rgb = parseColorToRGB(baseColor);
    if (!rgb) {
        return { caret: baseColor, selection: baseColor };
    }
    var luminance = getRelativeLuminance(rgb);
    var visibilityThreshold = 0.15; //0.15–0.25 is sweet spot
    var caret = luminance > 0.9
        ? "rgb(" + rgb.r * 0.6 + ", " + rgb.g * 0.6 + ", " + rgb.b * 0.6 + ")"
        : "rgb(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ")";
    var selection = "rgba(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ", " + visibilityThreshold + ")";
    return { caret: caret, selection: selection };
}
