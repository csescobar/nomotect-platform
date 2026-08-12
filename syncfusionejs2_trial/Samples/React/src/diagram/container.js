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
exports.ContainerSample = void 0;
var React = require("react");
var ej2_react_diagrams_1 = require("@syncfusion/ej2-react-diagrams");
var ej2_react_navigations_1 = require("@syncfusion/ej2-react-navigations");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var ej2_react_inputs_1 = require("@syncfusion/ej2-react-inputs");
var sample_base_1 = require("../common/sample-base");
var diagramInstance;
var toolbarEditor;
var node;
var fontFamily;
var fontSize;
var fontColor;
var selectedItems;
function createNode(id, offsetX, offsetY, height, width, content, marginX, marginY) {
    if (marginX === void 0) { marginX = 0; }
    if (marginY === void 0) { marginY = 0; }
    var ports = [];
    if (id == "node5") {
        ports = [
            { id: "port1", offset: { x: 0.9, y: 0 } },
        ];
    }
    if (id == "node6") {
        ports = [
            { id: "port1", offset: { x: 0.9, y: 0 } },
        ];
    }
    if (id == "node13") {
        ports = [
            { id: "port2", offset: { x: 1, y: 0.5 } },
        ];
    }
    if (id == "node15") {
        ports = [
            { id: "port2", offset: { x: 1, y: 0.5 } },
        ];
    }
    if (id == "node3") {
        ports = [
            { id: "port3", offset: { x: 0.25, y: 1 } },
            { id: "port4", offset: { x: 0.5, y: 1 } },
            { id: "port5", offset: { x: 0.75, y: 1 } },
        ];
    }
    if (id == "node7") {
        ports = [
            { id: "port1", offset: { x: 0, y: 0.5 } },
            { id: "port2", offset: { x: 1, y: 0.5 } },
        ];
    }
    if (id == "node8") {
        ports = [
            { id: "port3", offset: { x: 0.25, y: 1 } },
            { id: "port5", offset: { x: 0.75, y: 1 } },
        ];
    }
    return {
        id: id,
        offsetX: offsetX,
        offsetY: offsetY,
        margin: { left: marginX || 0, top: marginY || 0 },
        width: width,
        height: height,
        style: { fill: 'white', strokeColor: '#2546BB', strokeWidth: 1 },
        shape: {
            type: 'Basic', shape: 'Rectangle',
            cornerRadius: 4
        },
        annotations: [{
                content: content,
                style: { color: '#343434' },
                horizontalAlignment: 'Center',
            }],
        ports: ports
    };
}
// Initialize the nodes
var nodes = [
    createNode("node1", 300, 300, 60, 100, "HTTP Traffic"),
    createNode("node2", 500, 300, 60, 100, "Ingestion service", 50, 30),
    createNode("node3", 650, 300, 60, 100, "Workflow service", 200, 30),
    createNode("node4", 500, 415, 60, 100, "Package service", 50, 150),
    createNode("node5", 650, 415, 60, 150, "Drone Scheduler service", 175, 150),
    createNode("node6", 800, 415, 60, 100, "Delivery service", 350, 150),
    createNode("node7", 580, 130, 60, 90, "Azure Service Bus"),
    createNode("node8", 815, 130, 60, 100, "Managed Identities"),
    createNode("node9", 1000, 130, 60, 100, "Azure Key Vault"),
    createNode("node10", 500, 550, 60, 100, "Azure Cosmos DB for MongoDB API"),
    createNode("node11", 650, 550, 60, 100, "Azure Cosmos DB"),
    createNode("node12", 800, 550, 60, 100, "Azure Cache for Redis"),
    createNode("node13", 1040, 255, 60, 100, "Azure Application Insights"),
    createNode("node14", 1140, 350, 60, 100, "Azure Monitor"),
    createNode("node15", 1040, 445, 60, 100, "Azure Log Analytics workspace"),
    {
        id: 'container', width: 520, height: 300, offsetX: 660, offsetY: 350,
        shape: {
            type: 'Container',
            header: {
                annotation: {
                    content: 'Azure Container Apps Environment',
                    style: { fontSize: 18, bold: true, fill: 'transparent', strokeColor: 'transparent' },
                },
                height: 40,
                style: { fontSize: 18, bold: true, fill: 'transparent', strokeColor: 'transparent' },
            },
            children: ["node2", "node3", "node4", "node5", "node6"]
        },
        style: { fill: '#E9EEFF', strokeColor: '#2546BB', strokeWidth: 1 }
    },
];
// Helper function to create connectors with consistent styling
function createConnector(id, sourceID, targetID, sourcePortID, targetPortID, sourceDecorator) {
    if (sourcePortID === void 0) { sourcePortID = ''; }
    if (targetPortID === void 0) { targetPortID = ''; }
    if (sourceDecorator === void 0) { sourceDecorator = null; }
    return {
        id: id,
        type: 'Orthogonal',
        sourceID: sourceID,
        targetID: targetID,
        sourcePortID: sourcePortID,
        targetPortID: targetPortID,
        style: { strokeColor: "#5E5E5E", strokeWidth: 1 },
        sourceDecorator: sourceDecorator,
        targetDecorator: {
            style: {
                fill: "#5E5E5E",
                strokeColor: "#5E5E5E",
                strokeWidth: 1
            }
        }
    };
}
;
var connectors = [
    createConnector("connector1", "node1", "node2"),
    createConnector("connector2", "node4", "node10"),
    createConnector("connector3", "node5", "node11"),
    createConnector("connector4", "node6", "node12"),
    createConnector("connector5", "node8", "node9"),
    createConnector("connector6", "container", "node13"),
    createConnector("connector7", "container", "node15"),
    createConnector("connector8", "node3", "node4", 'port3'),
    createConnector("connector9", "node3", "node5", 'port4'),
    createConnector("connector10", "node3", "node6", 'port5'),
    createConnector("connector11", "node2", "node7", "", 'port1'),
    createConnector("connector12", "node7", "node3", 'port2'),
    createConnector("connector13", "node13", "node14", 'port2'),
    createConnector("connector14", "node15", "node14", 'port2'),
    createConnector("connector16", "node8", "node5", 'port3', 'port1', { style: { fill: "#5E5E5E", strokeColor: "#5E5E5E", strokeWidth: 1 } }),
    createConnector("connector17", "node8", "node6", 'port5', 'port1', { style: { fill: "#5E5E5E", strokeColor: "#5E5E5E", strokeWidth: 1 } })
];
//Font dropdown option
var fontType = [
    { type: 'Arial', text: 'Arial' },
    { type: 'Aharoni', text: 'Aharoni' },
    { type: 'Bell MT', text: 'Bell MT' },
    { type: 'Fantasy', text: 'Fantasy' },
    { type: 'Segoe UI', text: 'Segoe UI' },
    { type: 'Times New Roman', text: 'Times New Roman' },
    { type: 'Verdana', text: 'Verdana' }
];
var fields = { value: 'type', text: 'text' };
// Initialize toolbar items with icons, tooltips, and other properties.
var toolbarItems = [
    { id: 'FontStyle', tooltipText: 'Font Style', type: 'Input', align: 'Left', disabled: true, template: renderFontFamilyDropdown },
    { id: 'FontSize', tooltipText: 'Font Size', align: 'Left', disabled: true, template: renderFontSizeNumericBox },
    { id: 'Bold', tooltipText: 'Bold', prefixIcon: 'e-icons e-bold', disabled: true, cssClass: 'tb-item-start' },
    { id: 'Italic', tooltipText: 'Italic', prefixIcon: 'e-icons e-italic', disabled: true, cssClass: 'tb-item-middle' },
    { id: 'Underline', tooltipText: 'Underline', prefixIcon: 'e-icons e-underline', disabled: true, cssClass: 'tb-item-end' },
];
var ContainerSample = /** @class */ (function (_super) {
    __extends(ContainerSample, _super);
    function ContainerSample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Function to complete rendering actions
    ContainerSample.prototype.rendereComplete = function () {
        // Fit the diagram instance to the page
        diagramInstance.fitToPage();
    };
    ContainerSample.prototype.render = function () {
        return (React.createElement("div", { className: "control-pane diagram-control-pane" },
            React.createElement("div", { style: { width: "100%" } },
                React.createElement(ej2_react_navigations_1.ToolbarComponent, { ref: function (toolbar) { return (toolbarEditor = toolbar); }, id: "toolbar_diagram", clicked: handleToolbarClick, items: toolbarItems }),
                React.createElement(ej2_react_diagrams_1.DiagramComponent, { id: "diagram", ref: function (diagram) { return (diagramInstance = diagram); }, width: '100%', height: '700px', nodes: nodes, connectors: connectors, selectionChange: selectionChange, constraints: ej2_react_diagrams_1.DiagramConstraints.Default | ej2_react_diagrams_1.DiagramConstraints.Bridging, rulerSettings: { showRulers: true, dynamicGrid: true } },
                    React.createElement(ej2_react_diagrams_1.Inject, { services: [ej2_react_diagrams_1.UndoRedo, ej2_react_diagrams_1.Snapping, ej2_react_diagrams_1.ConnectorBridging] }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample visualizes a structured process flow by grouping related elements using built-in container shapes.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "This sample demonstrates how a process can be organized using containers that group related elements together. Setting the ",
                    React.createElement("code", null, "type"),
                    "  property of a shape to Container enables the grouping behavior. Nodes can be added inside the container using the ",
                    React.createElement("code", null, "children"),
                    " property. Additionally, containers can be created interactively by dragging container shapes from the symbol palette into the diagram."),
                React.createElement("br", null),
                React.createElement("p", null,
                    "Looking for the full React Diagram component overview, features, pricing, and documentation? Visit the ",
                    React.createElement("a", { href: "https://www.syncfusion.com/react-components/react-diagram", target: "_blank" }, "React Diagram"),
                    " page."))));
    };
    return ContainerSample;
}(sample_base_1.SampleBase));
exports.ContainerSample = ContainerSample;
// selection change method to update toolar items
function selectionChange(args) {
    if (args.state === 'Changed') {
        selectedItems = this.selectedItems.nodes.concat(this.selectedItems.connectors);
        var hasAnnotation_1;
        selectedItems.forEach(function (item) {
            if (item.shape.type === 'Container') {
                hasAnnotation_1 = item.shape.header.annotation ? true : false;
            }
            else {
                hasAnnotation_1 = selectedItems.some(function (item) { return item.annotations && item.annotations.length > 0; });
            }
        });
        var toolbarItems_1 = ['FontStyle', 'FontSize', 'Bold', 'Italic', 'Underline', 'FontColor'];
        toolbarItems_1.forEach(function (id) {
            var item = toolbarEditor.items.find(function (item) { return item.id === id; });
            if (item) {
                item.disabled = !hasAnnotation_1;
            }
        });
    }
}
// Executes actions based on the toolbar item clicked.
function handleToolbarClick(args) {
    // Switch based on the tooltip text of the item
    switch (args.item.tooltipText) {
        // Toggle bold style for selected annotation(s)
        case 'Bold':
            updateAnnotationValue('bold', args.value, null);
            break;
        // Toggle italic style for selected annotation(s)
        case 'Italic':
            updateAnnotationValue('italic', args.value, null);
            break;
        // Toggle underline style for selected annotation(s)
        case 'Underline':
            updateAnnotationValue('underline', args.value, null);
            break;
    }
    diagramInstance.dataBind();
}
// Updates annotation style attributes based on the provided value.
function updateAnnotationValue(value, fontSize, fontFamily) {
    // Iterate through selected nodes and connectors in the diagram
    for (var i = 0; i < selectedItems.length; i++) {
        var object = selectedItems[i];
        var annotations = (object.shape.type === 'Container') ? [object.shape.header.annotation] : object.annotations || [];
        // Iterate through annotations of each node
        for (var j = 0; j < annotations.length; j++) {
            var annotationStyle = annotations[j].style;
            // Update style attributes based on the provided value
            if (value === 'fontsize') {
                annotationStyle.fontSize = fontSize;
            }
            else if (value === 'fontfamily') {
                annotationStyle.fontFamily = fontFamily.toString();
            }
            else if (value === 'bold') {
                annotationStyle.bold = !annotationStyle.bold;
            }
            else if (value === 'italic') {
                annotationStyle.italic = !annotationStyle.italic;
            }
            else if (value === 'underline') {
                annotationStyle.textDecoration = annotationStyle.textDecoration === 'None' ? 'Underline' : 'None';
            }
        }
    }
    diagramInstance.dataBind();
}
// Renders a dropdown for font family selection.
function renderFontFamilyDropdown() {
    return (React.createElement("div", { className: "col-xs-4 column-style", style: { marginLeft: '4px' } },
        React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { id: "fontfamily", popupWidth: 150, width: '150px', fields: fields, placeholder: 'select a font type', index: 0, dataSource: fontType, change: function (args) {
                updateAnnotationValue('fontfamily', null, args.value.toString());
            }, ref: function (fontfamily) { return (fontFamily = fontfamily); } })));
}
// Renders a numeric textbox for font size selection.
function renderFontSizeNumericBox() {
    return (React.createElement("div", { className: "col-xs-4 column-style" },
        React.createElement(ej2_react_inputs_1.NumericTextBoxComponent, { id: "fontSize", width: '110px', value: 12, min: 1, max: 30, step: 2, format: "##.##", change: function (args) {
                updateAnnotationValue('fontsize', args.value);
            }, ref: function (fontsize) { return (fontSize = fontsize); } })));
}
// Renders a color picker for font color selection.
function renderFontColorPicker() {
    return (React.createElement("div", { className: "col-xs-4 column-style" },
        React.createElement(ej2_react_inputs_1.ColorPickerComponent, { id: "fontcolor", value: "#000", mode: "Palette", change: function (arg) {
                selectedItems.forEach(function (object) {
                    if (object.shape.type === 'Container') {
                        object.shape.header.annotation.style.color = arg.currentValue.rgba;
                    }
                    else {
                        object.annotations.forEach(function (annotation) {
                            annotation.style.color = arg.currentValue.rgba;
                        });
                    }
                });
                diagramInstance.dataBind();
            }, ref: function (fontcolor) { return (fontColor = fontcolor); } })));
}
