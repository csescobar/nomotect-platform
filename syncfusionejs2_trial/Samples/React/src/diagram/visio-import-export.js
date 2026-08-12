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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisioImportExport = void 0;
var React = require("react");
var ej2_react_diagrams_1 = require("@syncfusion/ej2-react-diagrams");
var sample_base_1 = require("../common/sample-base");
require("./font-icons.css");
var ej2_react_navigations_1 = require("@syncfusion/ej2-react-navigations");
var ej2_react_splitbuttons_1 = require("@syncfusion/ej2-react-splitbuttons");
var ej2_react_notifications_1 = require("@syncfusion/ej2-react-notifications");
/**
 * Visio Import/Export
 */
// Helper method to create a process node
function createNode(id, content, offsetY, shape, offsetX, width, height, ports) {
    if (shape === void 0) { shape = 'Process'; }
    if (offsetX === void 0) { offsetX = 400; }
    if (width === void 0) { width = 100; }
    if (height === void 0) { height = 50; }
    var node = __assign({ id: id, shape: { type: 'Flow', shape: shape }, style: { fill: '#357BD2', strokeColor: 'white' }, annotations: [{ content: content, style: { color: 'white' } }], offsetX: offsetX, offsetY: offsetY, width: width, height: height }, (ports && { ports: ports }));
    return node;
}
// Helper method to create a connector
function createConnector(id, sourceID, targetID, annotation, sourcePortID, targetPortID) {
    return __assign(__assign(__assign({ id: id, sourceID: sourceID, targetID: targetID, type: 'Orthogonal' }, (annotation && {
        annotations: [{
                content: annotation,
                alignment: annotation === 'Yes' ? 'After' : 'Before',
                displacement: annotation === 'Yes' ? { x: 5, y: 0 } : { x: 5, y: 5 },
            }],
    })), (sourcePortID && { sourcePortID: sourcePortID })), (targetPortID && { targetPortID: targetPortID }));
}
// Define the nodes using helper method
var nodes = [
    createNode('start', 'Start', 80, 'Terminator'),
    createNode('draft', 'Draft', 180, 'Process', 400, 100, 50, [
        { id: 'rightport', offset: { x: 1, y: 0.5 } },
    ]),
    createNode('approvedDecision', 'Approved?', 280, 'Decision', 400, 120, 60),
    createNode('revise', 'Revise', 280, 'Process', 600, 100, 50, [
        { id: 'rightport', offset: { x: 1, y: 0.5 } },
    ]),
    createNode('copyedit', 'Copyedit', 400),
    createNode('proof', 'Proof', 500),
    createNode('finalrevise', 'Revise', 600),
    createNode('finalize', 'Finalize', 700),
    createNode('publish', 'Publish', 800, 'Terminator')
];
// Define the connectors using helper method
var connectors = [
    createConnector('connector1', 'start', 'draft'),
    createConnector('connector2', 'draft', 'approvedDecision'),
    createConnector('connector3', 'approvedDecision', 'copyedit', 'Yes'),
    createConnector('connector4', 'approvedDecision', 'revise', 'No'),
    createConnector('connector5', 'revise', 'draft', undefined, 'rightport', 'rightport'),
    createConnector('connector6', 'copyedit', 'proof'),
    createConnector('connector7', 'proof', 'finalrevise'),
    createConnector('connector8', 'finalrevise', 'finalize'),
    createConnector('connector9', 'finalize', 'publish'),
];
// Define the palette nodes for "Flow Shapes"
var flowShapes = [
    { id: 'Process', shape: { type: 'Flow', shape: 'Process' } },
    { id: 'Decision', shape: { type: 'Flow', shape: 'Decision' } },
    { id: 'Document', shape: { type: 'Flow', shape: 'Document' } },
    { id: 'Terminator', shape: { type: 'Flow', shape: 'Terminator' } },
    { id: 'PredefinedProcess', shape: { type: 'Flow', shape: 'PreDefinedProcess' } },
    { id: 'Data', shape: { type: 'Flow', shape: 'Data' } },
    { id: 'DirectData', shape: { type: 'Flow', shape: 'DirectData' } },
    { id: 'InternalStorage', shape: { type: 'Flow', shape: 'InternalStorage' } },
    { id: 'ManualInput', shape: { type: 'Flow', shape: 'ManualInput' } },
    { id: 'ManualOperation', shape: { type: 'Flow', shape: 'ManualOperation' } },
];
// Define the palette nodes for "Basic Shapes"
var basicShapes = [
    { id: 'Rectangle', shape: { type: 'Basic', shape: 'Rectangle' } },
    { id: 'Ellipse', shape: { type: 'Basic', shape: 'Ellipse' } },
    { id: 'Hexagon', shape: { type: 'Basic', shape: 'Hexagon' } },
    { id: 'Parallelogram', shape: { type: 'Basic', shape: 'Parallelogram' } },
    { id: 'Pentagon', shape: { type: 'Basic', shape: 'Pentagon' } },
    { id: 'Heptagon', shape: { type: 'Basic', shape: 'Heptagon' } },
    { id: 'Octagon', shape: { type: 'Basic', shape: 'Octagon' } },
    { id: 'Triangle', shape: { type: 'Basic', shape: 'Triangle' } },
    { id: 'Star', shape: { type: 'Basic', shape: 'Star' } },
    { id: 'Plus', shape: { type: 'Basic', shape: 'Plus' } },
];
// Define the palette connectors for "Connectors"
var paletteConnectors = [
    {
        id: 'Link1', type: 'Orthogonal',
        targetDecorator: { shape: 'Arrow', style: { strokeColor: '#757575', fill: '#757575' } },
    },
    {
        id: 'Link2', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
        targetDecorator: { shape: 'None' }
    },
    {
        id: 'Link3', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
        targetDecorator: { shape: 'Arrow', style: { strokeColor: '#757575', fill: '#757575' } },
    },
    {
        id: 'Link4', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
        targetDecorator: { shape: 'None' }
    },
    {
        id: 'Link5', type: 'Bezier', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
        targetDecorator: { shape: 'None' }
    },
];
var selectedItems;
var diagramInstance;
var uploaderInstance;
var toolbarEditor;
var toastInstance;
var connectorData = [
    { text: 'Straight', iconCss: 'e-icons e-line' },
    { text: 'Orthogonal', iconCss: 'sf-diagram-icon-orthogonal' },
    { text: 'Bezier', iconCss: 'sf-diagram-icon-bezier' }
];
var shapeData = [
    { text: 'Rectangle', iconCss: 'e-rectangle e-icons' },
    { text: 'Ellipse', iconCss: ' e-circle e-icons' },
];
var VisioImportExport = /** @class */ (function (_super) {
    __extends(VisioImportExport, _super);
    function VisioImportExport() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.connector = function () {
            return (React.createElement("div", null,
                React.createElement(ej2_react_splitbuttons_1.DropDownButtonComponent, { items: connectorData, cssClass: "tb-item-middle", iconCss: "e-diagram-icons1 e-diagram-connector e-icons", select: onConnectorSelect })));
        };
        _this.shapes = function () {
            return (React.createElement("div", null,
                React.createElement(ej2_react_splitbuttons_1.DropDownButtonComponent, { items: shapeData, cssClass: "tb-item-middle", iconCss: "e-shapes e-icons", select: onShapesSelect })));
        };
        return _this;
    }
    VisioImportExport.prototype.rendereComplete = function () {
        addEvents();
        setTimeout(function () {
            // show diagram
            var container = document.querySelector('.visio-import-container');
            if (container) {
                container.style.opacity = '1';
            }
        }, 10);
        diagramInstance.fitToPage();
    };
    VisioImportExport.prototype.render = function () {
        return (React.createElement("div", { className: "control-pane" },
            React.createElement("div", { className: "control-section visio-import-container", style: { opacity: 0 } },
                React.createElement("div", { style: { width: "100%" } },
                    React.createElement("div", null,
                        React.createElement("input", { id: "vsdxInput", type: "file", accept: ".vsdx", style: { display: 'none', position: 'absolute', left: '-9999px', width: 0, height: 0, opacity: 0 } })),
                    React.createElement("div", { className: "db-toolbar-container" },
                        React.createElement(ej2_react_navigations_1.ToolbarComponent, { ref: function (toolbar) { return (toolbarEditor = toolbar); }, id: "toolbar_diagram", clicked: toolbarClick, overflowMode: 'Scrollable', width: '100%' },
                            React.createElement(ej2_react_navigations_1.ItemsDirective, null,
                                React.createElement(ej2_react_navigations_1.ItemDirective, { prefixIcon: 'e-icons e-circle-add', tooltipText: 'New Diagram', align: "Left", id: "New_Diagram" }),
                                React.createElement(ej2_react_navigations_1.ItemDirective, { prefixIcon: 'e-icons e-import', tooltipText: 'Import Visio (.vsdx)', align: "Left", id: "Import" }),
                                React.createElement(ej2_react_navigations_1.ItemDirective, { prefixIcon: 'e-icons e-export', tooltipText: 'Export as Visio (.vsdx)', align: "Left", id: "Export" }),
                                React.createElement(ej2_react_navigations_1.ItemDirective, { type: 'Separator' }),
                                React.createElement(ej2_react_navigations_1.ItemDirective, { type: "Input", tooltipText: 'Draw Connectors', align: "Left", id: "Draw_con", template: this.connector }),
                                React.createElement(ej2_react_navigations_1.ItemDirective, { type: "Input", tooltipText: 'Draw Shapes', align: "Left", id: "Draw_shapes", template: this.shapes }),
                                React.createElement(ej2_react_navigations_1.ItemDirective, { type: 'Separator' }),
                                React.createElement(ej2_react_navigations_1.ItemDirective, { disabled: true, prefixIcon: 'e-cut e-icons', tooltipText: 'Cut', cssClass: 'tb-item-middle tb-item-lock-category', align: "Left", id: "Cut" }),
                                React.createElement(ej2_react_navigations_1.ItemDirective, { disabled: true, prefixIcon: 'e-copy e-icons', tooltipText: 'Copy', cssClass: 'tb-item-middle tb-item-lock-category', align: "Left", id: "Copy" }),
                                React.createElement(ej2_react_navigations_1.ItemDirective, { disabled: true, prefixIcon: 'e-icons e-paste', tooltipText: 'Paste', cssClass: 'tb-item-middle tb-item-lock-category', align: "Left", id: "Paste" }),
                                React.createElement(ej2_react_navigations_1.ItemDirective, { type: 'Separator' }),
                                React.createElement(ej2_react_navigations_1.ItemDirective, { disabled: true, prefixIcon: 'e-icons e-undo', tooltipText: 'Undo', align: "Left", id: "Undo" }),
                                React.createElement(ej2_react_navigations_1.ItemDirective, { disabled: true, prefixIcon: 'e-icons e-redo', tooltipText: 'Redo', align: "Left", id: "Redo" }),
                                React.createElement(ej2_react_navigations_1.ItemDirective, { type: 'Separator' }),
                                React.createElement(ej2_react_navigations_1.ItemDirective, { disabled: true, prefixIcon: 'e-trash e-icons', tooltipText: 'Delete', cssClass: 'tb-item-middle tb-item-lock-category', align: "Left", id: "Delete" })))),
                    React.createElement("div", { className: "sb-mobile-palette-bar" },
                        React.createElement("div", { id: "palette-icon", style: { float: "right" }, className: "e-ddb-icons1 e-toggle-palette" })),
                    React.createElement("div", { id: "palette-space", className: "sb-mobile-palette" },
                        React.createElement(ej2_react_diagrams_1.SymbolPaletteComponent, { id: "symbolpalette", expandMode: "Multiple", palettes: [
                                {
                                    id: 'flowShapesPalette',
                                    expanded: true,
                                    symbols: flowShapes,
                                    title: 'Flow Shapes',
                                    iconCss: 'e-ddb-icons e-flow'
                                },
                                {
                                    id: 'basicShapesPalette',
                                    expanded: false,
                                    symbols: basicShapes,
                                    title: 'Basic Shapes',
                                    iconCss: 'e-ddb-icons e-basic'
                                },
                                {
                                    id: 'connectorsPalette',
                                    expanded: false,
                                    symbols: paletteConnectors,
                                    title: 'Connectors',
                                    iconCss: 'e-ddb-icons e-diagram-connector'
                                },
                            ], width: "100%", height: "700px", symbolHeight: 50, symbolWidth: 50, getSymbolInfo: function (symbol) {
                                return { fit: true };
                            }, getNodeDefaults: function (symbol) {
                                symbol.style = { fill: '#357BD2', strokeColor: 'white' };
                                symbol.width = 40;
                                symbol.height = 40;
                            }, getConnectorDefaults: function (connector) {
                                connector.sourcePoint = { x: 0, y: 0 };
                                connector.targetPoint = { x: 60, y: 60 };
                                connector.style = { strokeWidth: 1, strokeColor: '#757575' };
                            } })),
                    React.createElement("div", { id: "diagram-space", className: "sb-mobile-diagram" },
                        React.createElement(ej2_react_diagrams_1.DiagramComponent, { id: "diagram", ref: function (diagram) { return (diagramInstance = diagram); }, width: "100%", height: "700px", nodes: nodes, connectors: connectors, diagramImporting: diagramImporting, diagramExporting: diagramExporting, historyChange: historyChange, selectionChange: function (args) {
                                if (args.state === 'Changed') {
                                    selectedItems = diagramInstance.selectedItems.nodes;
                                    selectedItems = selectedItems.concat(diagramInstance.selectedItems.connectors);
                                    if (selectedItems.length === 0) {
                                        updateToolbarItems(['Cut', 'Copy', 'Delete'], true);
                                    }
                                    else {
                                        updateToolbarItems(['Cut', 'Copy', 'Delete'], false);
                                    }
                                }
                            }, 
                            //Sets the Node style for DragEnter element.
                            dragEnter: function (args) {
                                var obj = args.element;
                                if (obj instanceof ej2_react_diagrams_1.Node) {
                                    var objWidth = obj.width;
                                    var objHeight = obj.height;
                                    var ratio = 100 / obj.width;
                                    obj.width = 100;
                                    obj.height *= ratio;
                                    obj.offsetX += (obj.width - objWidth) / 2;
                                    obj.offsetY += (obj.height - objHeight) / 2;
                                }
                            } },
                            React.createElement(ej2_react_diagrams_1.Inject, { services: [ej2_react_diagrams_1.BpmnDiagrams, ej2_react_diagrams_1.UndoRedo, ej2_react_diagrams_1.ImportAndExportVisio] }))),
                    React.createElement(ej2_react_notifications_1.ToastComponent, { ref: function (toast) { return toastInstance = toast; }, id: "toast", position: { X: "Right", Y: "Bottom" } }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null,
                    "This sample demonstrates how to import and export Visio diagrams using the ",
                    React.createElement("a", { href: "https://www.syncfusion.com/react-components/react-diagram", target: "_blank" }, "React Diagram"),
                    ". Any Visio file (.vsdx) can be imported to visualize and edit workflows, and the customized diagram can then be exported back to Visio format (.vsdx) for seamless collaboration and interoperability."),
                React.createElement("p", null,
                    React.createElement("b", null,
                        "NOTE: This feature is currently experimental. Some functionalities may be limited or may not work as expected. We welcome you to try it out and share your ",
                        React.createElement("a", { href: "https://www.syncfusion.com/feedback", target: "_blank" }, "feedback"),
                        " as we continue to refine and improve it."))),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "The Visio file (.vsdx) can be imported through the \"Import Visio\" option in the toolbar using the ",
                    React.createElement("code", null, "importFromVisio"),
                    " method, and the customized file can be exported back to Visio format (.vsdx) through the \"Export as Visio\" option in the toolbar using the ",
                    React.createElement("code", null, "exportToVisio"),
                    " method. Once the file is imported, elements on the canvas can be edited using features such as ",
                    React.createElement("b", null, "Cut"),
                    ", ",
                    React.createElement("b", null, "Copy"),
                    ", ",
                    React.createElement("b", null, "Paste"),
                    ", ",
                    React.createElement("b", null, "Drag"),
                    ", ",
                    React.createElement("b", null, "Resize"),
                    ", ",
                    React.createElement("b", null, "Delete"),
                    ", ",
                    React.createElement("b", null, "Draw Connectors and Shapes"),
                    ", ",
                    React.createElement("b", null, "Undo"),
                    ", ",
                    React.createElement("b", null, "Redo"),
                    ", and other advanced options for complete customization.",
                    React.createElement("br", null),
                    "Toast notifications are displayed during Visio file import and export operations to indicate statuses such as ",
                    React.createElement("b", null, "started"),
                    ", ",
                    React.createElement("b", null, "completed"),
                    ", or ",
                    React.createElement("b", null, "failed"),
                    ", using events like ",
                    React.createElement("code", null, "diagramImporting"),
                    " and ",
                    React.createElement("code", null, "diagramExporting"),
                    "."))));
    };
    return VisioImportExport;
}(sample_base_1.SampleBase));
exports.VisioImportExport = VisioImportExport;
var isMobile;
//Adds EventListener based on device's viewport width.
function addEvents() {
    isMobile = window.matchMedia('(max-width:550px)').matches;
    if (isMobile) {
        var paletteIcon = document.getElementById('palette-icon');
        if (paletteIcon) {
            paletteIcon.addEventListener('click', openPalette, false);
        }
    }
}
//Toggles the visibility of the palette space on mobile devices when the palette icon is clicked.
function openPalette() {
    var paletteSpace = document.getElementById('palette-space');
    isMobile = window.matchMedia('(max-width:550px)').matches;
    if (isMobile) {
        if (!paletteSpace.classList.contains('sb-mobile-palette-open')) {
            paletteSpace.classList.add('sb-mobile-palette-open');
        }
        else {
            paletteSpace.classList.remove('sb-mobile-palette-open');
        }
    }
}
//To handle toolbar click
function toolbarClick(args) {
    var _this = this;
    var item = args.item.tooltipText;
    switch (item) {
        case 'Undo':
            diagramInstance.undo();
            break;
        case 'Redo':
            diagramInstance.redo();
            break;
        case 'Cut':
            diagramInstance.cut();
            updateToolbarItems(["Paste"], false);
            break;
        case 'Copy':
            diagramInstance.copy();
            updateToolbarItems(["Paste"], false);
            break;
        case 'Paste':
            diagramInstance.paste();
            break;
        case 'Delete':
            diagramInstance.remove();
            break;
        case 'New Diagram':
            diagramInstance.clear();
            historyChange();
            break;
        case 'Export as Visio (.vsdx)':
            diagramInstance.exportToVisio();
            break;
        case 'Import Visio (.vsdx)':
            var vsdxInput_1 = document.getElementById('vsdxInput');
            if (vsdxInput_1) {
                vsdxInput_1.click();
                //When a user chooses a .vsdx file, this function imports it into the diagram
                vsdxInput_1.addEventListener('change', function (event) { return __awaiter(_this, void 0, void 0, function () {
                    var file;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
                                if (!file)
                                    return [2 /*return*/];
                                return [4 /*yield*/, diagramInstance.importFromVisio(file)];
                            case 1:
                                _b.sent();
                                diagramInstance.width = '100%';
                                diagramInstance.height = '700px';
                                vsdxInput_1.value = '';
                                return [2 /*return*/];
                        }
                    });
                }); });
            }
            break;
    }
    diagramInstance.dataBind();
}
//To handle selection of drawing connectors.
function onConnectorSelect(args) {
    diagramInstance.clearSelection();
    diagramInstance.drawingObject = { type: args.item.text };
    diagramInstance.tool = ej2_react_diagrams_1.DiagramTools.DrawOnce;
    diagramInstance.dataBind();
}
//To handle selection of drawing shapes.
function onShapesSelect(args) {
    diagramInstance.clearSelection();
    diagramInstance.drawingObject = {
        shape: { shape: args.item.text },
        style: { fill: '#357BD2', strokeColor: 'white' }
    };
    diagramInstance.tool = ej2_react_diagrams_1.DiagramTools.DrawOnce;
    diagramInstance.dataBind();
}
// Enable or disable specific toolbar items
function updateToolbarItems(itemIds, disabled) {
    itemIds.forEach(function (itemId) {
        var item = toolbarEditor.items.find(function (item) { return item.id === itemId; });
        if (item) {
            item.disabled = disabled;
        }
    });
}
var asyncSettings = {
    saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save',
    removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove'
};
//set up uploaded file
function onUploadSuccess(args) {
    return __awaiter(this, void 0, void 0, function () {
        var fileObj, rawFile;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fileObj = args.file;
                    rawFile = fileObj.rawFile;
                    return [4 /*yield*/, diagramInstance.importFromVisio(rawFile)];
                case 1:
                    _a.sent();
                    diagramInstance.width = '100%';
                    diagramInstance.height = '700px';
                    uploaderInstance.clearAll();
                    return [2 /*return*/];
            }
        });
    });
}
//To enable and disable undo/redo button.
function historyChange() {
    updateToolbarItems(["Undo"], diagramInstance.historyManager.undoStack.length === 0);
    updateToolbarItems(["Redo"], diagramInstance.historyManager.redoStack.length === 0);
}
function diagramImporting(args) {
    toastInstance.timeOut = 0;
    toastInstance.showCloseButton = false;
    if (args.status === "started") {
        updateToolbarItems(['Export', 'Import'], true); // Disable buttons
        toastInstance.hide();
        toastInstance.timeOut = 1000;
        toastInstance.title = 'Importing Diagram';
        toastInstance.content = 'The Visio diagram is being imported. Please wait...';
        toastInstance.cssClass = 'e-toast-info';
        toastInstance.show();
    }
    else if (args.status === "completed") {
        toastInstance.showCloseButton = true;
        toastInstance.timeOut = 3000;
        toastInstance.title = 'Import Complete';
        toastInstance.content = 'The Visio diagram has been imported successfully.';
        toastInstance.cssClass = 'e-toast-success';
        toastInstance.show();
        updateToolbarItems(['Export', 'Import'], false); // Enable buttons
    }
    else if (args.status === "failed") {
        toastInstance.showCloseButton = true;
        toastInstance.timeOut = 3000;
        toastInstance.title = 'Import Failed';
        toastInstance.content = 'There was an error importing the Visio diagram.';
        toastInstance.cssClass = 'e-toast-danger';
        toastInstance.show();
        updateToolbarItems(['Export', 'Import'], false); // Enable buttons
    }
}
function diagramExporting(args) {
    toastInstance.timeOut = 0;
    toastInstance.showCloseButton = false;
    if (args.status === "started") {
        updateToolbarItems(['Export', 'Import'], true); // Disable buttons
        toastInstance.hide();
        toastInstance.timeOut = 1000;
        toastInstance.title = 'Exporting Diagram';
        toastInstance.content = 'The diagram is being exported to Visio format. Please wait...';
        toastInstance.cssClass = 'e-toast-info';
        toastInstance.show();
    }
    else if (args.status === "completed") {
        toastInstance.showCloseButton = true;
        toastInstance.timeOut = 3000;
        toastInstance.title = 'Export Complete';
        toastInstance.content = 'The diagram has been exported to Visio format successfully.';
        toastInstance.cssClass = 'e-toast-success';
        toastInstance.show();
        updateToolbarItems(['Export', 'Import'], false); // Enable buttons
    }
    else if (args.status === "failed") {
        toastInstance.showCloseButton = true;
        toastInstance.timeOut = 3000;
        toastInstance.title = 'Export Failed';
        toastInstance.content = 'There was an error exporting the diagram to Visio format.';
        toastInstance.cssClass = 'e-toast-danger';
        toastInstance.show();
        updateToolbarItems(['Export', 'Import'], false); // Enable buttons
    }
}
