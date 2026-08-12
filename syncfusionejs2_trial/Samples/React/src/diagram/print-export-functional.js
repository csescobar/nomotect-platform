"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ej2_react_diagrams_1 = require("@syncfusion/ej2-react-diagrams");
var sample_base_1 = require("../common/sample-base");
var ej2_react_navigations_1 = require("@syncfusion/ej2-react-navigations");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var ej2_react_splitbuttons_1 = require("@syncfusion/ej2-react-splitbuttons");
require("./font-icons.css");
// Helper function to create a node with common properties
function createNode(id, width, height, offsetX, offsetY, strokeColor, fillColor, content, shape) {
    if (shape === void 0) { shape = "Rectangle"; }
    return {
        id: id,
        width: width,
        height: height,
        offsetX: offsetX,
        offsetY: offsetY,
        shape: { type: "Basic", shape: shape },
        style: { strokeColor: strokeColor, fill: fillColor },
        annotations: [{ content: content }]
    };
}
// Initialize Diagram Nodes
var nodes = [
    createNode("sourceNode1", 100, 50, 120, 100, "#868686", "#d5f5d5", "Source Document"),
    createNode("censusNode2", 100, 75, 120, 200, "#8f908f", "#e2f3fa", "Census Record", "Diamond"),
    createNode("booksNode3", 100, 75, 120, 325, "#8f908f", "#e2f3fa", "Books and Magazine", "Diamond"),
    createNode("recordNode4", 125, 50, 320, 200, "#868686", "#d5f5d5", "Record Template"),
    createNode("traditionalNode5", 125, 50, 320, 325, "#868686", "#d5f5d5", "Traditional Template"),
    createNode("nontraditionalNode6", 135, 50, 120, 425, "#a8a8a8", "#faebee", "Nontraditional"),
    createNode("Radial1", 125, 50, 850, 225, "#a8a8a8", "#fef0db", "Health Fitness", "Ellipse"),
    createNode("Radial2", 125, 75, 850, 100, "#a8a8a8", "#faebee", "Diet", "Ellipse"),
    createNode("Radial3", 125, 75, 1025, 175, "#a8a8a8", "#faebee", "Flexibility", "Ellipse"),
    createNode("Radial4", 125, 75, 1000, 350, "#a8a8a8", "#faebee", "Muscular Endurance", "Ellipse"),
    createNode("Radial5", 125, 75, 675, 175, "#a8a8a8", "#faebee", "Cardiovascular Strength", "Ellipse"),
    createNode("Radial6", 125, 75, 770, 350, "#a8a8a8", "#faebee", "Muscular Strength", "Ellipse")
];
// Helper function to create a connector
function createConnector(id, sourceID, targetID, content) {
    if (content === void 0) { content = "Yes"; }
    return {
        id: id,
        sourceID: sourceID,
        targetID: targetID,
        annotations: content ? [{ content: content, style: { fill: "White" } }] : []
    };
}
// Initialize Diagram Connectors
var connectors = [
    createConnector("flowChartConnector1", "sourceNode1", "censusNode2", ""),
    createConnector("flowChartConnector2", "censusNode2", "booksNode3", "No"),
    createConnector("flowChartConnector3", "booksNode3", "nontraditionalNode6", "No"),
    createConnector("flowChartConnector4", "censusNode2", "recordNode4"),
    createConnector("flowChartConnector5", "booksNode3", "traditionalNode5"),
    createConnector("RadialConnector1", "Radial1", "Radial2"),
    createConnector("RadialConnector2", "Radial1", "Radial3"),
    createConnector("RadialConnector3", "Radial1", "Radial4"),
    createConnector("RadialConnector4", "Radial1", "Radial5"),
    createConnector("RadialConnector5", "Radial1", "Radial6")
];
var exportItems = [{ text: "JPG" }, { text: "PNG" }, { text: "SVG" }];
// CSS styles specific to this sample
var SAMPLE_CSS = "\n.e-bigger #toolbar_diagram .e-icons.e-caret,\n#toolbar_diagram .e-icons.e-caret {\n  font-size: 12px;\n  margin-right: 0;\n}\n";
function PrintExport() {
    React.useEffect(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    // Use refs instead of globals
    var diagramRef = React.useRef(null);
    var checkBoxRef = React.useRef(null);
    // Handlers
    var onItemClick = React.useCallback(function (args) {
        if (args.item.text === "Print" && diagramRef.current && checkBoxRef.current) {
            var printOptions = {
                mode: "Data",
                region: "PageSettings",
                multiplePage: checkBoxRef.current.checked,
                margin: { left: 0, top: 0, bottom: 0, right: 0 }
            };
            diagramRef.current.print(printOptions);
        }
    }, []);
    var onSelectExportFormat = React.useCallback(function (args) {
        if (!diagramRef.current || !checkBoxRef.current)
            return;
        var exportOptions = {
            format: args.item.text,
            mode: "Download",
            region: "PageSettings",
            multiplePage: checkBoxRef.current.checked,
            fileName: "Export",
            margin: { left: 0, top: 0, bottom: 0, right: 0 }
        };
        diagramRef.current.exportDiagram(exportOptions);
    }, []);
    // Templates memoized to avoid re-creation churn
    var contentTemplate = React.useCallback(function () {
        return (React.createElement(ej2_react_splitbuttons_1.DropDownButtonComponent, { items: exportItems, iconCss: "e-diagram-icons e-diagram-export", content: "Export", select: onSelectExportFormat }));
    }, [onSelectExportFormat]);
    var checkboxTemplate = React.useCallback(function () {
        return (React.createElement(ej2_react_buttons_1.CheckBoxComponent, { id: "checkBox", checked: false, label: "Multiple Page", ref: function (checkBox) { return (checkBoxRef.current = checkBox); } }));
    }, []);
    return (React.createElement("div", { className: "control-pane" },
        React.createElement("style", null, SAMPLE_CSS),
        React.createElement("div", { className: "control-section" },
            React.createElement("div", { style: { width: "100%" } },
                React.createElement(ej2_react_navigations_1.ToolbarComponent, { style: { width: "100%", height: "10%", marginTop: "10px" }, id: "toolbar_diagram", clicked: onItemClick },
                    React.createElement(ej2_react_navigations_1.ItemsDirective, null,
                        React.createElement(ej2_react_navigations_1.ItemDirective, { type: "Input", text: "Export", template: contentTemplate }),
                        React.createElement(ej2_react_navigations_1.ItemDirective, { type: "Button", text: "Print", prefixIcon: "e-diagram-icons e-diagram-print" }),
                        React.createElement(ej2_react_navigations_1.ItemDirective, { type: "Input", template: checkboxTemplate }))),
                React.createElement(ej2_react_diagrams_1.DiagramComponent, { id: "diagram_print_export", ref: function (diagram) { return (diagramRef.current = diagram); }, width: "100%", height: "580px", nodes: nodes, connectors: connectors, snapSettings: { constraints: ej2_react_diagrams_1.SnapConstraints.None }, pageSettings: { width: 550, height: 500, multiplePage: true }, getConnectorDefaults: function (connector, _diagram) {
                        connector.style.strokeColor = "#6d6d6d";
                        return connector;
                    }, created: function () { var _a; return (_a = diagramRef.current) === null || _a === void 0 ? void 0 : _a.fitToPage(); } },
                    React.createElement(ej2_react_diagrams_1.Inject, { services: [ej2_react_diagrams_1.PrintAndExport] })))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This sample demonstrates printing and exporting the diagram as images.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null,
                "This example shows how to print the diagram and how to export the diagram as image (*.jpg, *.png, and *bmp) and in SVG format. The ",
                " ",
                React.createElement("code", null, "exportDiagram"),
                " method can be used to export the diagram. The ",
                React.createElement("code", null, "exportDiagram"),
                " method takes the exporting options (file formats, mode of export, and the region to export) as input. The ",
                React.createElement("code", null, "print"),
                " method can be used to print the diagrams."),
            React.createElement("br", null),
            React.createElement("p", null,
                "Looking for the full React Diagram component overview, features, pricing, and documentation? Visit the ",
                React.createElement("a", { href: "https://www.syncfusion.com/react-components/react-diagram", target: "_blank" }, "React Diagram"),
                " page."))));
}
exports.default = PrintExport;
