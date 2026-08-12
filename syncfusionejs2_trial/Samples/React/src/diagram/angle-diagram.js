"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AngleDiagram = void 0;
// angle-diagram.tsx
var React = require("react");
var ej2_react_diagrams_1 = require("@syncfusion/ej2-react-diagrams");
var ej2_dropdowns_1 = require("@syncfusion/ej2-dropdowns");
var ej2_circulargauge_1 = require("@syncfusion/ej2-circulargauge");
var ej2_notifications_1 = require("@syncfusion/ej2-notifications");
var ej2_inputs_1 = require("@syncfusion/ej2-inputs");
var sample_base_1 = require("../common/sample-base");
ej2_circulargauge_1.CircularGauge.Inject(ej2_circulargauge_1.Annotations);
// References
var diagram;
var locationDropdown;
var efficiencyGauge;
var performanceMessage;
var angleNumeric;
// Guards
var suppressAngleChange = false;
var lastValidRelativeAngle = 0;
// Model
var solarData;
// Location data
var locationData = [
    { name: 'New York', latitude: 40.7128, longitude: -74.006, angle: 0 },
    { name: 'Los Angeles', latitude: 34.0522, longitude: -118.2437, angle: 25 },
    { name: 'Chicago', latitude: 41.8781, longitude: -87.6298, angle: 50 },
    { name: 'Houston', latitude: 29.7604, longitude: -95.3698, angle: 75 },
    { name: 'Phoenix', latitude: 33.4484, longitude: -112.074, angle: 100 },
];
// SVGs
var centerSunSvg = "<svg width=\"76\" height=\"76\" viewBox=\"0 0 76 76\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">            <g filter=\"url(#filter0_d_1423_96)\">                <circle cx=\"37.9998\" cy=\"38\" r=\"17.2727\" fill=\"url(#paint0_radial_1423_96)\" />            </g>            <g filter=\"url(#filter1_d_1423_96)\">                <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M38.0001 6.33331C36.4102 6.33331 35.1213 7.62219 35.1213 9.2121V14.9697C35.1213 16.5596 36.4102 17.8485 38.0001 17.8485C39.59 17.8485 40.8788 16.5596 40.8788 14.9697V9.2121C40.8788 7.62219 39.59 6.33331 38.0001 6.33331ZM60.3915 15.6082C59.2672 14.484 57.4445 14.484 56.3202 15.6082L52.249 19.6794C51.1248 20.8037 51.1248 22.6264 52.249 23.7507C53.3733 24.8749 55.196 24.8749 56.3203 23.7507L60.3915 19.6794C61.5157 18.5552 61.5157 16.7325 60.3915 15.6082ZM66.7877 35.1212C68.3776 35.1212 69.6665 36.41 69.6665 38C69.6665 39.5899 68.3776 40.8787 66.7877 40.8787H61.0301C59.4402 40.8787 58.1513 39.5899 58.1513 38C58.1513 36.41 59.4402 35.1212 61.0301 35.1212H66.7877ZM15.6077 15.6083C14.4834 16.7326 14.4834 18.5553 15.6077 19.6796L19.6789 23.7508C20.8031 24.875 22.6259 24.875 23.7501 23.7508C24.8744 22.6265 24.8744 20.8038 23.7501 19.6796L19.6789 15.6083C18.5547 14.4841 16.7319 14.4841 15.6077 15.6083ZM35.1213 61.0302C35.1213 59.4403 36.4102 58.1514 38.0001 58.1514C39.59 58.1514 40.8788 59.4403 40.8788 61.0302V66.7878C40.8788 68.3777 39.59 69.6666 38.0001 69.6666C36.4102 69.6666 35.1213 68.3777 35.1213 66.7878V61.0302ZM23.7511 52.2492C22.6269 51.125 20.8041 51.125 19.6799 52.2492L15.6087 56.3204C14.4844 57.4447 14.4844 59.2674 15.6087 60.3917C16.7329 61.5159 18.5557 61.5159 19.6799 60.3917L23.7511 56.3204C24.8754 55.1962 24.8754 53.3735 23.7511 52.2492ZM14.9696 35.1212C16.5595 35.1212 17.8484 36.41 17.8484 38C17.8484 39.5899 16.5595 40.8787 14.9696 40.8787H9.21204C7.62213 40.8787 6.33325 39.5899 6.33325 38C6.33325 36.41 7.62213 35.1212 9.21204 35.1212H14.9696ZM52.2491 52.2492C51.1248 53.3734 51.1248 55.1962 52.2491 56.3204L56.3203 60.3916C57.4445 61.5159 59.2673 61.5159 60.3915 60.3916C61.5157 59.2674 61.5157 57.4447 60.3915 56.3204L56.3203 52.2492C55.196 51.125 53.3733 51.125 52.2491 52.2492Z\" fill=\"url(#paint1_linear_1423_96)\" />            </g>            <defs>                <filter id=\"filter0_d_1423_96\" x=\"16.9271\" y=\"16.9272\" width=\"42.9899\" height=\"42.9899\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">                    <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\" />                    <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\" />                    <feOffset dx=\"0.422222\" dy=\"0.422222\" />                    <feGaussianBlur stdDeviation=\"2.11111\" />                    <feComposite in2=\"hardAlpha\" operator=\"out\" />                    <feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0.156863 0 0 0 0 0.305882 0 0 0 0.25 0\" />                    <feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_1423_96\" />                    <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_1423_96\" result=\"shape\" />                </filter>                <filter id=\"filter1_d_1423_96\" x=\"2.53325\" y=\"2.53331\" width=\"71.7777\" height=\"71.7777\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">                    <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\" />                    <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\" />                    <feOffset dx=\"0.422222\" dy=\"0.422222\" />                    <feGaussianBlur stdDeviation=\"2.11111\" />                    <feComposite in2=\"hardAlpha\" operator=\"out\" />                    <feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0.156863 0 0 0 0 0.305882 0 0 0 0.25 0\" />                    <feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_1423_96\" />                    <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_1423_96\" result=\"shape\" />                </filter>                <radialGradient id=\"paint0_radial_1423_96\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(41.9506 27.1674) rotate(180) scale(32.7949)\">                    <stop stop-color=\"#FFF4C3\" />                    <stop offset=\"0.16\" stop-color=\"#FFE036\" />                    <stop offset=\"1\" stop-color=\"#FA761C\" />                </radialGradient>                <linearGradient id=\"paint1_linear_1423_96\" x1=\"66.8754\" y1=\"5.38557\" x2=\"10.5535\" y2=\"67.6553\" gradientUnits=\"userSpaceOnUse\">                    <stop stop-color=\"#FFBA24\" />                    <stop offset=\"1\" stop-color=\"#FF5500\" />                </linearGradient>            </defs>        </svg>";
var eastSunSvg = "<svg width=\"76\" height=\"76\" viewBox=\"0 0 76 76\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">            <g clip-path=\"url(#clip0_7964_371)\">                <g filter=\"url(#filter0_d_7964_371)\">                    <path d=\"M14.9707 35.1214C16.5606 35.1214 17.8496 36.4104 17.8496 38.0003C17.8494 39.59 16.5605 40.8792 14.9707 40.8792H9.21289C7.62318 40.8791 6.33416 39.59 6.33398 38.0003C6.33398 36.4105 7.62307 35.1215 9.21289 35.1214H14.9707ZM66.7881 35.1214C68.3778 35.1216 69.666 36.4105 69.666 38.0003C69.6658 39.5899 68.3777 40.879 66.7881 40.8792H61.0303C59.4405 40.8792 58.1515 39.5901 58.1514 38.0003C58.1514 36.4104 59.4404 35.1214 61.0303 35.1214H66.7881ZM15.6074 15.6087C16.7317 14.4845 18.5545 14.4845 19.6787 15.6087L23.75 19.68C24.8737 20.8041 24.8737 22.6262 23.75 23.7503C22.6259 24.8744 20.803 24.8751 19.6787 23.7513L15.6074 19.68C14.4832 18.5558 14.4832 16.7329 15.6074 15.6087ZM56.3203 15.6087C57.4445 14.4845 59.2674 14.4845 60.3916 15.6087C61.5158 16.7329 61.5158 18.5558 60.3916 19.68L56.3203 23.7513C55.1962 24.8749 53.3741 24.8749 52.25 23.7513C51.1258 22.627 51.1258 20.8042 52.25 19.68L56.3203 15.6087ZM38.001 6.33331C39.5907 6.33352 40.8789 7.62244 40.8789 9.21222V14.97C40.8787 16.5597 39.5906 17.8487 38.001 17.8489C36.4112 17.8489 35.1222 16.5598 35.1221 14.97V9.21222C35.1221 7.62231 36.4111 6.33331 38.001 6.33331Z\" fill=\"url(#paint0_linear_7964_371)\" />                </g>                <g filter=\"url(#filter1_d_7964_371)\">                    <path d=\"M56.9995 63.3337C58.1653 63.3337 59.1106 64.2783 59.1108 65.444C59.1108 66.61 58.1654 67.5554 56.9995 67.5554H23.2222C22.0562 67.5554 21.1108 66.61 21.1108 65.444C21.1111 64.2783 22.0564 63.3337 23.2222 63.3337H56.9995ZM37.9995 50.6667C39.1654 50.6667 40.1108 51.6121 40.1108 52.778C40.1107 53.9438 39.1654 54.8893 37.9995 54.8893H4.22217C3.05631 54.8893 2.11097 53.9438 2.11084 52.778C2.11084 51.6121 3.05623 50.6667 4.22217 50.6667H37.9995ZM71.7778 50.6667C72.9437 50.6668 73.8892 51.6122 73.8892 52.778C73.889 53.9438 72.9436 54.8892 71.7778 54.8893H46.4438C45.2782 54.8891 44.3336 53.9437 44.3335 52.778C44.3335 51.6122 45.2781 50.6669 46.4438 50.6667H71.7778Z\" fill=\"url(#paint1_radial_7964_371)\" />                </g>                <g filter=\"url(#filter2_d_7964_371)\">                    <path d=\"M38 20.7271C47.5394 20.7271 55.2733 28.4602 55.2734 37.9996C55.2734 39.4562 55.0924 40.8709 54.7529 42.2222H21.248C20.9085 40.8709 20.7275 39.4562 20.7275 37.9996C20.7277 28.4603 28.4607 20.7273 38 20.7271Z\" fill=\"url(#paint2_radial_7964_371)\" />                </g>            </g>            <defs>                <filter id=\"filter0_d_7964_371\" x=\"2.53398\" y=\"2.53331\" width=\"71.7765\" height=\"42.9903\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">                    <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\" />                    <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\" />                    <feOffset dx=\"0.422222\" dy=\"0.422222\" />                    <feGaussianBlur stdDeviation=\"2.11111\" />                    <feComposite in2=\"hardAlpha\" operator=\"out\" />                    <feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0.156863 0 0 0 0 0.305882 0 0 0 0.25 0\" />                    <feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_7964_371\" />                    <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_7964_371\" result=\"shape\" />                </filter>                <filter id=\"filter1_d_7964_371\" x=\"-1.68916\" y=\"46.8667\" width=\"80.2228\" height=\"25.3331\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">                    <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\" />                    <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\" />                    <feOffset dx=\"0.422222\" dy=\"0.422222\" />                    <feGaussianBlur stdDeviation=\"2.11111\" />                    <feComposite in2=\"hardAlpha\" operator=\"out\" />                    <feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0.156863 0 0 0 0 0.305882 0 0 0 0.25 0\" />                    <feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_7964_371\" />                    <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_7964_371\" result=\"shape\" />                </filter>                <filter id=\"filter2_d_7964_371\" x=\"16.9275\" y=\"16.9271\" width=\"42.9903\" height=\"29.9396\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">                    <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\" />                    <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\" />                    <feOffset dx=\"0.422222\" dy=\"0.422222\" />                    <feGaussianBlur stdDeviation=\"2.11111\" />                    <feComposite in2=\"hardAlpha\" operator=\"out\" />                    <feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0.156863 0 0 0 0 0.305882 0 0 0 0.25 0\" />                    <feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_7964_371\" />                    <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_7964_371\" result=\"shape\" />                </filter>                <linearGradient id=\"paint0_linear_7964_371\" x1=\"66.875\" y1=\"5.81636\" x2=\"42.3723\" y2=\"55.4803\" gradientUnits=\"userSpaceOnUse\">                    <stop stop-color=\"#FFBA24\" />                    <stop offset=\"1\" stop-color=\"#FF5500\" />                </linearGradient>                <radialGradient id=\"paint1_radial_7964_371\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(49.6112 64.3887) rotate(-168.69) scale(48.441 24.199)\">                    <stop stop-color=\"#FFBA24\" />                    <stop offset=\"1\" stop-color=\"#FF5500\" />                </radialGradient>                <radialGradient id=\"paint2_radial_7964_371\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(41.9513 27.1673) rotate(180) scale(32.7953 32.7951)\">                    <stop stop-color=\"#FFF4C3\" />                    <stop offset=\"0.16\" stop-color=\"#FFE036\" />                    <stop offset=\"1\" stop-color=\"#FA761C\" />                </radialGradient>                <clipPath id=\"clip0_7964_371\">                    <rect width=\"76\" height=\"76\" fill=\"white\" />                </clipPath>            </defs>        </svg>";
var westSunSvg = "<svg width=\"76\" height=\"76\" viewBox=\"0 0 76 76\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">            <g clip-path=\"url(#clip0_7964_385)\">                <g filter=\"url(#filter0_d_7964_385)\">                    <path d=\"M56.9998 61.2225C58.1655 61.2225 59.1108 62.1672 59.1111 63.3329C59.1111 64.4988 58.1657 65.4442 56.9998 65.4442H23.2224C22.0565 65.4442 21.1111 64.4988 21.1111 63.3329C21.1113 62.1672 22.0566 61.2225 23.2224 61.2225H56.9998ZM37.9998 48.5555C39.1657 48.5555 40.1111 49.5009 40.1111 50.6669C40.111 51.8327 39.1656 52.7782 37.9998 52.7782H4.22241C3.05655 52.7782 2.11119 51.8327 2.11108 50.6669C2.11108 49.5009 3.05648 48.5555 4.22241 48.5555H37.9998ZM71.7781 48.5555C72.9438 48.5557 73.8884 49.5011 73.8884 50.6669C73.8883 51.8326 72.9438 52.778 71.7781 52.7782H48.5554C47.3896 52.7782 46.4442 51.8327 46.4441 50.6669C46.4441 49.501 47.3895 48.5556 48.5554 48.5555H71.7781Z\" fill=\"url(#paint0_radial_7964_385)\" />                </g>                <g filter=\"url(#filter1_d_7964_385)\">                    <path d=\"M37.7803 8.17151C51.8926 8.17156 63.333 19.6119 63.333 33.7242C63.333 35.8791 63.0648 37.9713 62.5625 39.9703H12.998C12.4958 37.9713 12.2275 35.8791 12.2275 33.7242C12.2275 19.6119 23.6679 8.17151 37.7803 8.17151Z\" fill=\"url(#paint1_radial_7964_385)\" />                </g>            </g>            <defs>                <filter id=\"filter0_d_7964_385\" x=\"-1.68892\" y=\"44.7555\" width=\"80.2218\" height=\"25.3331\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">                    <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\" />                    <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\" />                    <feOffset dx=\"0.422222\" dy=\"0.422222\" />                    <feGaussianBlur stdDeviation=\"2.11111\" />                    <feComposite in2=\"hardAlpha\" operator=\"out\" />                    <feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0.156863 0 0 0 0 0.305882 0 0 0 0.25 0\" />                    <feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_7964_385\" />                    <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_7964_385\" result=\"shape\" />                </filter>                <filter id=\"filter1_d_7964_385\" x=\"8.42754\" y=\"4.37151\" width=\"59.5499\" height=\"40.2433\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">                    <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\" />                    <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\" />                    <feOffset dx=\"0.422222\" dy=\"0.422222\" />                    <feGaussianBlur stdDeviation=\"2.11111\" />                    <feComposite in2=\"hardAlpha\" operator=\"out\" />                    <feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0.156863 0 0 0 0 0.305882 0 0 0 0.25 0\" />                    <feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_7964_385\" />                    <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_7964_385\" result=\"shape\" />                </filter>                <radialGradient id=\"paint0_radial_7964_385\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(39.8314 62.2776) rotate(-165.864) scale(38.8982 23.931)\">                    <stop stop-color=\"#FFBA24\" />                    <stop offset=\"1\" stop-color=\"#FF5500\" />                </radialGradient>                <radialGradient id=\"paint1_radial_7964_385\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(46.0737 36.9531) rotate(-153.435) scale(41.1658 41.1657)\">                    <stop stop-color=\"#FFF4C3\" />                    <stop offset=\"0.28125\" stop-color=\"#FFE036\" />                    <stop offset=\"0.598958\" stop-color=\"#FA761C\" />                </radialGradient>                <clipPath id=\"clip0_7964_385\">                    <rect width=\"76\" height=\"76\" fill=\"white\" />                </clipPath>            </defs>        </svg>";
// Helper factories and HTML builders for nodes/connectors
function createTextNode(id, width, height, offsetX, offsetY, content, style, constraints) {
    if (constraints === void 0) { constraints = ej2_react_diagrams_1.NodeConstraints.None; }
    return { id: id, width: width, height: height, offsetX: offsetX, offsetY: offsetY, constraints: constraints, shape: { type: 'Text', content: content }, style: style };
}
function createNativeNode(id, width, height, offsetX, offsetY, svgContent, constraints) {
    if (constraints === void 0) { constraints = ej2_react_diagrams_1.NodeConstraints.None; }
    return { id: id, width: width, height: height, offsetX: offsetX, offsetY: offsetY, constraints: constraints, shape: { type: 'Native', content: svgContent } };
}
function createImageNode(id, width, height, offsetX, offsetY, source, rotateAngle, constraints, pivotX, pivotY) {
    var node = { id: id, width: width, height: height, offsetX: offsetX, offsetY: offsetY, shape: { type: 'Image', source: source }, style: { fill: 'transparent', strokeColor: 'transparent' } };
    if (typeof rotateAngle === 'number')
        node.rotateAngle = rotateAngle;
    if (typeof constraints === 'number')
        node.constraints = constraints;
    if (typeof pivotX === 'number' && typeof pivotY === 'number')
        node.pivot = { x: pivotX, y: pivotY };
    if (!node.constraints)
        node.constraints = ej2_react_diagrams_1.NodeConstraints.None;
    return node;
}
function createEllipseNode(id, width, height, offsetX, offsetY, fill, strokeColor, strokeWidth, constraints) {
    if (constraints === void 0) { constraints = ej2_react_diagrams_1.NodeConstraints.None; }
    return { id: id, width: width, height: height, offsetX: offsetX, offsetY: offsetY, constraints: constraints, shape: { type: 'Basic', shape: 'Ellipse' }, style: { fill: fill, strokeColor: strokeColor, strokeWidth: strokeWidth } };
}
function createHtmlNode(id, width, height, offsetX, offsetY, html, constraints) {
    if (constraints === void 0) { constraints = ej2_react_diagrams_1.NodeConstraints.None; }
    return { id: id, width: width, height: height, offsetX: offsetX, offsetY: offsetY, constraints: constraints, shape: { type: 'HTML', content: html } };
}
function createRectNode(id, width, height, offsetX, offsetY, fill, strokeColor, strokeWidth, constraints) {
    if (constraints === void 0) { constraints = ej2_react_diagrams_1.NodeConstraints.None; }
    return { id: id, width: width, height: height, offsetX: offsetX, offsetY: offsetY, constraints: constraints, style: { fill: fill, strokeColor: strokeColor, strokeWidth: strokeWidth } };
}
function createConnectorBezier(id, spx, spy, tpx, tpy, c1x, c1y, c2x, c2y, strokeColor, strokeWidth, dash, opacity) {
    return { id: id, zIndex: 1, type: 'Bezier', constraints: ej2_react_diagrams_1.ConnectorConstraints.None, sourcePoint: { x: spx, y: spy }, targetPoint: { x: tpx, y: tpy }, segments: [{ type: 'Bezier', point1: { x: c1x, y: c1y }, point2: { x: c2x, y: c2y } }], style: { strokeColor: strokeColor, strokeWidth: strokeWidth, strokeDashArray: dash, opacity: opacity }, sourceDecorator: { shape: 'None' }, targetDecorator: { shape: 'None' } };
}
function getLocationHtml() {
    return "\n          <div class=\"angle-control-section\" style=\"height:150px; width:300px\">\n            <div class=\"angle-control-label\" style=\"font-size:18px; font-weight:600\">\n              Select location\n            </div>\n            <div id=\"locationDropdown\"></div>\n          </div>";
}
function getEfficiencyHtml() {
    return "\n          <div class=\"efficiency-section\" style=\"width:300px; height:345px;\">\n            <h3 class=\"angle-control-label\" style=\"font-size:18px; font-weight:600\">System Efficiency</h3>\n            <div style=\"width: 210px; height:180px; margin:auto;\">\n              <div id=\"efficiencyGauge\"></div>\n            </div>\n            <div style=\"width:250px;\">\n              <div id=\"performanceMessage\"></div>\n            </div>\n          </div>";
}
function getAngleHtml() {
    return "\n          <div class=\"angle-control-section\" style=\"width: 300px; height: 185px;\">\n            <div class=\"angle-control-label\" style=\"font-size:18px; font-weight:600\">\n              Tilt Angle\n            </div>\n            <div>\n              <input id=\"angleValue\" style=\"height:40px !important;font-size:large\" />\n            </div>\n            <div class=\"angle-description\" id=\"angleDescription\">".concat(getAngleDescription(), "</div>\n          </div>");
}
function initializeDiagram() {
    var nodes = [
        createTextNode('title', 450, 80, 485, 135, 'SMART SOLAR PANEL TILT SYSTEM', { color: '#2c3e50', fill: 'transparent', fontFamily: 'Segoe UI', fontSize: 26, bold: true }),
        createNativeNode('eastSun', 60, 60, 221, 422, eastSunSvg),
        createNativeNode('centerSun', 60, 60, 483, 293, centerSunSvg),
        createNativeNode('westSun', 60, 45, 731, 422, westSunSvg),
        createTextNode('eastLabel', 60, 30, 238, 365, 'EAST', { color: '#34495e', fill: 'transparent', fontFamily: 'Segoe UI', fontSize: 14, bold: true }),
        createTextNode('westLabel', 60, 30, 725, 365, 'WEST', { color: '#34495e', fill: 'transparent', fontFamily: 'Segoe UI', fontSize: 14, bold: true }),
        createRectNode('groundLine', 500, 5, 489, 657, '#2E485F', '#2E485F', 2),
        createImageNode('supportPost', 215, 185, 465, 565, 'https://ej2.syncfusion.com/react/demos/src/diagram/Images/angle/panelSupport.png'),
        createImageNode('solarPanelFrame', 260, 50, 478.25, 485, 'https://ej2.syncfusion.com/react/demos/src/diagram/Images/angle/solarPanel.png', solarData.currentAngle, (ej2_react_diagrams_1.NodeConstraints.Default | ej2_react_diagrams_1.NodeConstraints.ReadOnly) & ~ej2_react_diagrams_1.NodeConstraints.Drag, 0.5, 0.8),
        createEllipseNode('pivotPoint', 16, 16, 478.5, 488, '#FF5F1F', '#2E485F', 1),
        createHtmlNode('location', 300, 150, 1130, 100, getLocationHtml()),
        createHtmlNode('efficiency', 300, 350, 1130, 383, getEfficiencyHtml()),
        createHtmlNode('angle', 300, 185, 1130, 680, getAngleHtml()),
    ];
    var connectors = [
        createConnectorBezier('sunPath', 221, 422, 731, 422, 350, 260, 610, 260, '#3498db', 3, '10,5', 0.8),
    ];
    return { nodes: nodes, connectors: connectors };
}
// Rotation handling
function onRotationChange(args) {
    var _a, _b, _c, _d, _e, _f;
    if (args.state === 'Completed') {
        if (((_c = (_b = (_a = args.source) === null || _a === void 0 ? void 0 : _a.nodes) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.id) === 'solarPanelFrame') {
            solarData.currentAngle = parseInt(args.newValue.rotateAngle.toString());
            angleCalculation();
            calculateSolarPosition();
            calculateEfficiency();
            updateUI();
        }
    }
    else if (args.state === 'Progress') {
        if (((_f = (_e = (_d = args.source) === null || _d === void 0 ? void 0 : _d.nodes) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.id) === 'solarPanelFrame') {
            var proposedAngle = args.newValue.rotateAngle;
            var normalizedAngle = proposedAngle % 360;
            if (normalizedAngle < 0)
                normalizedAngle += 360;
            if (!((normalizedAngle >= 303 && normalizedAngle <= 360) || (normalizedAngle >= 0 && normalizedAngle <= 44))) {
                args.cancel = true;
            }
        }
    }
}
// Initialize Location
function initializeLocationDropdown() {
    var locationOptions = locationData.map(function (location) { return ({ text: location.name, value: location.name }); });
    if (locationDropdown)
        locationDropdown.destroy();
    locationDropdown = new ej2_dropdowns_1.DropDownList({
        dataSource: locationOptions,
        fields: { text: 'text', value: 'value' },
        value: solarData.selectedLocation,
        placeholder: 'Select a location',
        change: onLocationChanged,
        popupWidth: '212px',
    });
    locationDropdown.appendTo('#locationDropdown');
}
function onLocationChanged(args) {
    solarData.selectedLocation = args.value;
    var loc = getLocationData(solarData.selectedLocation);
    if (!loc)
        return;
    var locationAngle = Math.min(100, loc.angle);
    if (locationAngle <= 57) {
        solarData.currentAngle = 303 + locationAngle;
    }
    else {
        solarData.currentAngle = locationAngle - 57;
    }
    angleCalculation();
    calculateSolarPosition();
    calculateEfficiency();
    updateDiagram();
    updateUI();
}
// Initialize Gauge
function initializeEfficiencyGauge() {
    if (efficiencyGauge)
        efficiencyGauge.destroy();
    efficiencyGauge = new ej2_circulargauge_1.CircularGauge({
        width: '200px',
        height: '200px',
        background: 'transparent',
        axes: [
            {
                startAngle: 225,
                endAngle: 45,
                minimum: 0,
                maximum: 100,
                radius: '95%',
                lineStyle: { width: 15, color: '#F2F4F6' },
                majorTicks: { height: 0 },
                minorTicks: { height: 0 },
                labelStyle: { font: { size: '0px' } },
                ranges: [
                    { start: 0, end: 40, color: '#EF5B2E', startWidth: 18, endWidth: 18 },
                    { start: 40, end: 60, color: '#FEA714', startWidth: 18, endWidth: 18 },
                    { start: 60, end: 90, color: '#3ABA47', startWidth: 18, endWidth: 18 },
                ],
                pointers: [
                    {
                        type: 'Marker',
                        value: solarData.efficiency,
                        markerShape: 'Triangle',
                        markerHeight: 25,
                        markerWidth: 6,
                        radius: '85%',
                        color: '#111',
                        animation: { enable: false },
                    },
                ],
                annotations: [
                    {
                        angle: 90,
                        radius: '0%',
                        zIndex: '1',
                        content: "\n              <div style=\"text-align: center;\">\n                <div style=\"font-size: 20px; font-weight: bold; color: #1A2A3B;\" id=\"gaugeEfficiencyValue\">\n                  ".concat(Math.round(solarData.efficiency), "<span style=\"font-size:20px; font-weight:500;\">%</span>\n                </div>\n                <div style=\"font-size: 14px; font-weight: 500; color: #888; margin-top: 5px; text-align: right; padding-left: 10px; text-transform: uppercase;\">\n                  EFFICIENCY\n                </div>\n              </div>"),
                    },
                ],
            },
        ],
    });
    efficiencyGauge.appendTo('#efficiencyGauge');
}
// Initialize Performance Message
function initializePerformanceMessage() {
    var efficiencyMsg = getPerformanceMessage();
    if (performanceMessage)
        performanceMessage.destroy();
    performanceMessage = new ej2_notifications_1.Message({
        content: efficiencyMsg.message,
        severity: efficiencyMsg.severity,
        showIcon: true,
        cssClass: 'performance-message',
        visible: true,
        showCloseIcon: false,
    });
    performanceMessage.appendTo('#performanceMessage');
}
// Initialize Angle Controls (NumericTextBox)
function initializeAngleControls() {
    if (angleNumeric)
        angleNumeric.destroy();
    var relativeAngle = solarData.intPanelAngleDeg - 57;
    lastValidRelativeAngle = relativeAngle;
    angleNumeric = new ej2_inputs_1.NumericTextBox({
        min: -57,
        max: 43,
        strictMode: true,
        step: 1,
        decimals: 0,
        format: 'n0',
        value: relativeAngle,
        showSpinButton: true,
        change: function (args) {
            if (suppressAngleChange)
                return;
            var val = typeof args.value === 'number' ? args.value : angleNumeric.value;
            if (typeof val === 'number')
                applyRelativeAngle(val);
        },
    });
    angleNumeric.appendTo('#angleValue');
    // Prevent Diagram interactions while typing
    var inputEl = document.getElementById('angleValue');
    if (inputEl) {
        ['pointerdown', 'mousedown', 'touchstart', 'click'].forEach(function (evt) {
            return inputEl.addEventListener(evt, function (e) { return e.stopPropagation(); });
        });
        inputEl.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                inputEl.blur();
                setTimeout(function () { return inputEl.focus(); }, 0);
            }
            e.stopPropagation();
        });
    }
    // If user types digits while diagram focused, redirect to input
    document.addEventListener('keydown', function onDocKeydown(e) {
        var input = document.getElementById('angleValue');
        var active = document.activeElement;
        if (active && (active === input || (active === null || active === void 0 ? void 0 : active.closest('.e-input-group')) === (input === null || input === void 0 ? void 0 : input.closest('.e-input-group'))))
            return;
        var key = e.key;
        var isEditKey = (key >= '0' && key <= '9') || key === '+' || key === '-' || key === 'Backspace' || key === 'Delete';
        if (isEditKey) {
            e.stopPropagation();
            e.preventDefault();
            if (input) {
                input.focus();
                setTimeout(function () {
                    try {
                        input.select();
                    }
                    catch (_a) { }
                }, 0);
            }
        }
    }, { capture: true });
}
// Map relative angle (-57..43) -> rotateAngle ([303..360] U [0..43])
function applyRelativeAngle(val) {
    if (typeof val !== 'number')
        return;
    var r = Math.round(val);
    if (r < -57)
        r = -57;
    if (r > 43)
        r = 43;
    lastValidRelativeAngle = r;
    var rotateAngle = r < 0 ? r + 360 : r;
    solarData.currentAngle = rotateAngle % 360;
    updateDiagram();
    angleCalculation();
    calculateSolarPosition();
    calculateEfficiency();
    updateUI();
}
// Calculations
function angleCalculation() {
    var normalizedAngle = solarData.currentAngle;
    if (normalizedAngle >= 303 && normalizedAngle <= 360) {
        solarData.intPanelAngleDeg = normalizedAngle - 303; // 303->0, 360->57
    }
    else if (normalizedAngle >= 0 && normalizedAngle <= 43) {
        solarData.intPanelAngleDeg = 57 + normalizedAngle; // 0->57, 43->100
    }
    else {
        solarData.intPanelAngleDeg = Math.max(0, Math.min(100, solarData.intPanelAngleDeg));
    }
}
function calculateSolarPosition() {
    var location = getLocationData(solarData.selectedLocation);
    if (!location)
        return;
    var lat = (location.latitude * Math.PI) / 180.0;
    var selectedDateForCalculation = new Date(solarData.selectedDateTime);
    var startOfYearForCalculation = new Date(selectedDateForCalculation.getFullYear(), 0, 1);
    var dayOfYear = Math.ceil((selectedDateForCalculation.getTime() - startOfYearForCalculation.getTime()) / (1000 * 60 * 60 * 24)) + 1;
    var declination = (23.45 * Math.PI) / 180.0 * Math.sin((2 * Math.PI * (284 + dayOfYear)) / 365.0);
    var hourAngle = 0;
    var elevation = Math.asin(Math.sin(declination) * Math.sin(lat) + Math.cos(declination) * Math.cos(lat) * Math.cos(hourAngle));
    solarData.sunElevation = Math.max(0, (elevation * 180.0) / Math.PI);
    solarData.sunAzimuth = 180.0;
    solarData.optimalTilt = Math.max(0, Math.min(60, Math.abs(location.latitude)));
    if (solarData.sunElevation > 0) {
        var elevationRad = elevation;
        var airMass = 1.0 / Math.sin(elevationRad);
        airMass = Math.max(1.0, Math.min(40.0, airMass));
        solarData.solarIrradiance = 1353 * Math.pow(0.7, Math.pow(airMass, 0.678)) * Math.sin(elevationRad);
        solarData.solarIrradiance = Math.max(0, solarData.solarIrradiance);
    }
    else {
        solarData.solarIrradiance = 0;
    }
}
function calculateEfficiency() {
    if (solarData.sunElevation <= 0) {
        solarData.efficiency = 0;
        solarData.incidenceAngle = 90;
        return;
    }
    // Base calculations
    var panelTiltRad = (solarData.intPanelAngleDeg * Math.PI) / 180.0;
    var sunElevRad = (solarData.sunElevation * Math.PI) / 180.0;
    var azimuthDiff = 0;
    var cosIncidence = Math.sin(sunElevRad) * Math.cos(panelTiltRad) +
        Math.cos(sunElevRad) * Math.sin(panelTiltRad) * Math.cos(azimuthDiff);
    cosIncidence = Math.max(0, Math.min(1, cosIncidence));
    solarData.incidenceAngle = (Math.acos(cosIncidence) * 180.0) / Math.PI;
    var irradianceFactor = Math.min(1.0, solarData.solarIrradiance / 900.0);
    var temperatureFactor = 0.95;
    var systemLossFactor = 0.95;
    var optimalAngleDiff = Math.abs(solarData.intPanelAngleDeg - solarData.optimalTilt);
    var optimalAngleFactor = Math.max(0.9, 1.0 - (optimalAngleDiff / 90.0) * 0.2);
    var eff = 100.0 *
        cosIncidence *
        irradianceFactor *
        temperatureFactor *
        systemLossFactor *
        optimalAngleFactor;
    if (optimalAngleDiff < 5)
        eff = Math.min(100, eff * 1.08);
    // Gradual noon uplift
    var noonAngle = solarData.currentAngle;
    var d = Math.min(noonAngle, 360 - noonAngle);
    var strongFloorWindowDeg = 10;
    var noonWindowDeg = 15;
    if (d <= noonWindowDeg) {
        var weight = 0.5 * (1 + Math.cos((Math.PI * d) / noonWindowDeg));
        var t = Math.min(1, d / strongFloorWindowDeg);
        var minAtD = 65 + (60 - 65) * t;
        var maxAtD = 75 + (68 - 75) * t;
        var noonTarget = minAtD + (maxAtD - minAtD) * irradianceFactor;
        var blended = eff + (noonTarget - eff) * weight;
        var uplifted = Math.max(eff, blended);
        if (d <= strongFloorWindowDeg)
            uplifted = Math.max(uplifted, irradianceFactor);
        eff = Math.min(100, uplifted);
    }
    solarData.efficiency = Math.max(0, Math.min(100, eff));
}
// UI
function updateDiagram() {
    if (!diagram)
        return;
    var solarPanelNode = diagram.getObject('solarPanelFrame');
    if (solarPanelNode) {
        solarPanelNode.rotateAngle = solarData.currentAngle;
        diagram.dataBind();
    }
}
function syncAngleInputFromModel() {
    if (!angleNumeric)
        return;
    var relativeAngle = solarData.intPanelAngleDeg - 57;
    suppressAngleChange = true;
    angleNumeric.value = relativeAngle;
    angleNumeric.dataBind();
    suppressAngleChange = false;
    lastValidRelativeAngle = relativeAngle;
}
function updateUI() {
    syncAngleInputFromModel();
    var angleDescElement = document.getElementById('angleDescription');
    if (angleDescElement)
        angleDescElement.textContent = getAngleDescription();
    if (efficiencyGauge) {
        efficiencyGauge.axes[0].pointers[0].value = solarData.efficiency;
        efficiencyGauge.axes[0].annotations[0].content = "\n      <div style=\"text-align: center;\">\n        <div style=\"font-size: 20px; font-weight: bold; color: #1A2A3B;\" id=\"gaugeEfficiencyValue\">\n          ".concat(Math.round(solarData.efficiency), "<span style=\"font-size:20px; font-weight:500;\">%</span>\n        </div>\n        <div style=\"font-size: 14px; font-weight: 500; color: #888; margin-top: 5px; text-align: right; padding-left: 10px; text-transform: uppercase;\">\n          EFFICIENCY\n        </div>\n      </div>");
        efficiencyGauge.dataBind();
    }
    if (performanceMessage) {
        var messageData = getPerformanceMessage();
        performanceMessage.content = messageData.message;
        performanceMessage.severity = messageData.severity;
        performanceMessage.dataBind();
    }
    setTimeout(function () {
        diagram.select([diagram.getObject('solarPanelFrame')]);
    }, 10);
}
// Utilities
function getAngleDescription() {
    var relative = Math.abs(solarData.intPanelAngleDeg - 57);
    if (relative <= 5)
        return 'Horizontal';
    if (relative < 15)
        return 'Low Tilt';
    if (relative < 25)
        return 'Medium Tilt';
    if (relative < 40)
        return 'High Tilt';
    return 'Steep Tilt';
}
function getPerformanceMessage() {
    if (solarData.efficiency > 60)
        return { message: 'Excellent Performance', severity: ej2_notifications_1.Severity.Success };
    if (solarData.efficiency > 40)
        return { message: 'Fair Performance', severity: ej2_notifications_1.Severity.Warning };
    return { message: 'Poor Performance', severity: ej2_notifications_1.Severity.Error };
}
function getLocationData(locationName) {
    return locationData.find(function (loc) { return loc.name.toLowerCase() === locationName.toLowerCase(); });
}
var AngleDiagram = /** @class */ (function (_super) {
    __extends(AngleDiagram, _super);
    function AngleDiagram() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.diagramCreated = false;
        return _this;
    }
    AngleDiagram.prototype.render = function () {
        var _this = this;
        // Initialize model
        solarData = {
            currentAngle: 303,
            efficiency: 78,
            selectedLocation: 'New York',
            selectedDateTime: new Date(),
            sunElevation: 0,
            sunAzimuth: 0,
            optimalTilt: 0,
            solarIrradiance: 0,
            incidenceAngle: 0,
            intPanelAngleDeg: 0,
        };
        var _a = initializeDiagram(), nodes = _a.nodes, connectors = _a.connectors;
        return (React.createElement("div", { className: "control-pane diagram-control-pane" },
            React.createElement("style", null, sampleCss),
            React.createElement("div", { className: "control-section angle-diagram-container", style: { width: '100%', opacity: 0 } },
                React.createElement(ej2_react_diagrams_1.DiagramComponent, { id: "diagram", ref: function (diagramref) { return (diagram = diagramref); }, width: '100%', height: '750px', snapSettings: { constraints: ej2_react_diagrams_1.SnapConstraints.None }, selectedItems: { constraints: ej2_react_diagrams_1.SelectorConstraints.Rotate }, scrollChange: function () {
                        var _a;
                        if ((_a = locationDropdown) === null || _a === void 0 ? void 0 : _a.isPopupOpen)
                            locationDropdown.hidePopup();
                    }, nodes: nodes, connectors: connectors, pageSettings: {
                        width: 1300,
                        height: 820,
                        background: { source: 'https://ej2.syncfusion.com/react/demos/src/diagram/Images/angle/background.png', scale: 'Meet' },
                    }, rotateChange: onRotationChange, created: function () {
                        _this.diagramCreated = true;
                        initializeLocationDropdown();
                        initializeEfficiencyGauge();
                        initializePerformanceMessage();
                        initializeAngleControls();
                        calculateSolarPosition();
                        angleCalculation();
                        calculateEfficiency();
                        updateUI();
                        diagram.fitToPage();
                        setTimeout(function () {
                            var container = document.querySelector('.angle-diagram-container');
                            if (container)
                                container.style.opacity = '1';
                        }, 10);
                    }, click: function () {
                        // Prevent losing selection of the solar panel node
                        var solarPanelNode = diagram.getObject('solarPanelFrame');
                        if (solarPanelNode)
                            diagram.select([solarPanelNode]);
                    }, load: function () {
                        if (_this.diagramCreated && diagram) {
                            setTimeout(function () {
                                initializeLocationDropdown();
                                initializeEfficiencyGauge();
                                initializePerformanceMessage();
                                initializeAngleControls();
                                calculateSolarPosition();
                                angleCalculation();
                                calculateEfficiency();
                                updateUI();
                                diagram.fitToPage();
                            });
                        }
                    } })),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null,
                    "This sample demonstrates an interactive solar panel tilt system built with the ",
                    React.createElement("a", { href: "https://www.syncfusion.com/react-components/react-diagram", target: "_blank" }, "React Diagram"),
                    ". Adjust the panel angle to see real-time changes in system efficiency based on the sun's position and location.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null, "This interactive diagram visualizes a solar panel system. The sun's path is represented by a curved connector, and users can adjust the panel's tilt angle using a numeric input. The system provides immediate feedback through a dynamic efficiency gauge and performance messages. Users can also select different locations to observe how regional variations impact overall solar efficiency."))));
    };
    return AngleDiagram;
}(sample_base_1.SampleBase));
exports.AngleDiagram = AngleDiagram;
var sampleCss = "\n.angle-diagram-container .e-ddl.e-input-group .e-input-group-icon, .e-ddl.e-input-group.e-control-wrapper .e-input-group-icon:hover { color: #9CA3AF; }\n.angle-diagram-container .e-ddl.e-input-group.e-control-wrapper .e-input { color: #9CA3AF; font-size: 16px; font-weight : 500; }\n.angle-diagram-container .angle-control-section { margin-bottom: 25px; background: linear-gradient(145deg, #ffffff, #f8f9fa); border-radius: 15px; padding: 25px; box-shadow: 0 5px 20px rgba(0,0,0,0.06); transition: transform 0.2s ease, box-shadow 0.2s ease; }\n.angle-diagram-container .angle-control-label { display: flex; align-items: center; font-weight: 600; font-size: 18px; color: #2c3e50; margin-bottom: 15px; text-transform: uppercase; letter-spacing: 0.5px; }\n.angle-diagram-container .angle-description { font-size: 14px; color: #7f8c8d; font-weight: 500; margin-top: 10px; }\n.angle-diagram-container .efficiency-section { text-align: center; margin-bottom: 30px; background: linear-gradient(145deg, #ffffff, #f1f3f4); border-radius: 20px; padding: 25px; box-shadow: 0 8px 25px rgba(0,0,0,0.08); }\n.angle-diagram-container .e-diagram-selector { stroke-width: 0; }\n";
