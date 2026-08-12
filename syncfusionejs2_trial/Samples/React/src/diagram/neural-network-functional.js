"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ej2_react_diagrams_1 = require("@syncfusion/ej2-react-diagrams");
var sample_base_1 = require("../common/sample-base");
// --- Neural net data/configs ---
var layerSizes = [3, 5, 4, 2];
var layerNames = [
    "Input Layer",
    "Hidden Layer 1",
    "Hidden Layer 2",
    "Output Layer"
];
var layerColors = ["#0087EA", "#FE871F", "#7925E5", "#04AE45"];
var strokeColors = layerColors;
var nodeLabels = [
    ["Feature 1", "Feature 2", "Feature 3"],
    ["H1-1", "H1-2", "H1-3", "H1-4", "H1-5"],
    ["H2-1", "H2-2", "H2-3", "H2-4"],
    ["Output 1", "Output 2"]
];
// -- Utility functions for style etc. --
function getConnectionColor(weight) {
    return weight >= 0 ? "#2196f3" : "#f44336";
}
function getConnectionWidth(absWeight) {
    return Math.max(1, Math.min(3, absWeight * 3));
}
function makeLayerLabelNode(i) {
    var color = layerColors[i];
    return {
        id: "label_".concat(i),
        offsetX: 100 + i * 250,
        offsetY: 50,
        width: 150,
        height: 40,
        style: { fill: "transparent", strokeColor: "transparent" },
        annotations: [{
                template: ("<div style=\"display:flex;align-items:center;justify-content:center;width:100%;height:100%;\">\n            <div style=\"width:12px;height:12px;border-radius:6px;background:".concat(color, ";margin-right:10px;\"></div>\n            <span style=\"font-weight:bold;font-size:14px;color:#495057;\">").concat(layerNames[i], "</span>\n        </div>"))
            }],
        constraints: ej2_react_diagrams_1.NodeConstraints.Default & ~ej2_react_diagrams_1.NodeConstraints.Select
    };
}
function makeNeuronNode(l, n) {
    var nodeLabel = nodeLabels[l][n];
    return {
        id: "neuron_".concat(l, "_").concat(n),
        width: 70,
        height: 70,
        offsetX: 100 + l * 250,
        offsetY: 120 + ((5 - layerSizes[l]) * 100 / 2) + n * 100,
        style: { fill: layerColors[l], strokeColor: strokeColors[l], strokeWidth: 2 },
        shape: { type: "Basic", shape: "Ellipse" },
        annotations: [{
                content: nodeLabel,
                style: { fontSize: 12, color: "white", bold: true }
            }],
        tooltip: {
            content: ("<div style=\"padding:8px 12px; border-radius:6px; font-family:'Segoe UI',sans-serif; min-width:160px;\">\n          <div style=\"font-weight:bold;font-size:13px;margin-bottom:4px;\">\n            \uD83E\uDDE0 Neuron Information\n          </div>\n          <hr style=\"margin:2px 0 5px 0;\"/>\n          <div style=\"font-size:13px;margin-bottom:2px;\">\n            <span style=\"font-weight:bold;\">Layer:</span>\n            <span >".concat(layerNames[l], "</span>\n          </div>\n          <div style=\"font-size:13px;\">\n            <span style=\"font-weight:bold;\">Neuron:</span>\n            <span >").concat(nodeLabel, "</span>\n          </div>\n        </div>")),
            position: "TopCenter"
        },
        constraints: ej2_react_diagrams_1.NodeConstraints.Default | ej2_react_diagrams_1.NodeConstraints.Tooltip
    };
}
function makeConnector(l, n, m, weight) {
    var absWeight = Math.abs(weight);
    var weightColor = weight >= 0 ? "#2ecc71" : "#e74c3c";
    return {
        id: "conn_".concat(l, "_").concat(n, "_").concat(m),
        sourceID: "neuron_".concat(l, "_").concat(n),
        targetID: "neuron_".concat(l + 1, "_").concat(m),
        type: "Straight",
        style: {
            strokeColor: getConnectionColor(weight),
            strokeWidth: getConnectionWidth(absWeight),
            opacity: 0.7
        },
        targetDecorator: {
            shape: "Arrow",
            style: {
                fill: getConnectionColor(weight),
                strokeColor: getConnectionColor(weight)
            }
        },
        annotations: [{
                content: String(weight),
                style: { fontSize: 13, color: "#495057", fill: "white" }
            }],
        tooltip: {
            content: ("<div style=\"padding:8px 12px; border-radius:6px; font-family:'Segoe UI',sans-serif; min-width:160px;\">\n          <div style=\"font-weight:bold;font-size:13px;margin-bottom:4px;\">\n            \uD83D\uDD17 Connection Details\n          </div>\n          <hr style=\"margin:2px 0 5px 0;\"/>\n          <div style=\"font-size:13px;margin-bottom:2px;\">\n            <span style=\"font-weight:bold;\">Weight:</span>\n            <span style=\"color:".concat(weightColor, ";font-weight:bold;\">").concat(weight, "</span>\n          </div>\n          <div style=\"font-size:13px;margin-bottom:1px;\">\n            <span style=\"font-weight:bold;\">From:</span>\n            <span >neuron_").concat(l, "_").concat(n, "</span>\n          </div>\n          <div style=\"font-size:13px;\">\n            <span style=\"font-weight:bold;\">To:</span>\n            <span >neuron_").concat(l + 1, "_").concat(m, "</span>\n          </div>\n        </div>")),
            position: "TopCenter"
        },
        constraints: ej2_react_diagrams_1.ConnectorConstraints.Default | ej2_react_diagrams_1.ConnectorConstraints.Tooltip
    };
}
// Deterministic random for demo (seed)
function seededRandom() {
    var s = 42;
    return function () {
        s = Math.sin(s) * 10000;
        return s - Math.floor(s);
    };
}
// --- Build Diagram once (outside render) ---
var nodes = [];
var connectors = [];
(function buildDiagramData() {
    // Layer labels
    for (var i = 0; i < layerNames.length; i++)
        nodes.push(makeLayerLabelNode(i));
    // Neurons
    for (var l = 0; l < layerSizes.length; l++)
        for (var n = 0; n < layerSizes[l]; n++)
            nodes.push(makeNeuronNode(l, n));
    // Connectors
    var random = seededRandom();
    for (var l = 0; l < layerSizes.length - 1; l++) {
        for (var n = 0; n < layerSizes[l]; n++) {
            for (var m = 0; m < layerSizes[l + 1]; m++) {
                var weight = Math.round((random() * 2 - 1) * 100) / 100;
                connectors.push(makeConnector(l, n, m, weight));
            }
        }
    }
})();
function NeuralNetworkDiagram() {
    var diagramRef = React.useRef(null);
    var _a = React.useState(false), showDiagram = _a[0], setShowDiagram = _a[1];
    React.useEffect(function () {
        (0, sample_base_1.updateSampleSection)();
        if (diagramRef.current)
            diagramRef.current.fitToPage();
    }, []);
    return (React.createElement("div", { className: "control-pane" },
        React.createElement("div", { className: "control-section", style: { opacity: showDiagram ? 1 : 0 } },
            React.createElement("div", { style: { width: "100%" } },
                React.createElement(ej2_react_diagrams_1.DiagramComponent, { id: "diagram", ref: diagramRef, width: "100%", height: "600px", nodes: nodes, connectors: connectors, snapSettings: { constraints: ej2_react_diagrams_1.SnapConstraints.None }, tool: ej2_react_diagrams_1.DiagramTools.ZoomPan, created: function () {
                        if (diagramRef.current)
                            diagramRef.current.fitToPage();
                        setTimeout(function () {
                            setShowDiagram(true);
                        }, 10);
                    }, load: function () {
                        setTimeout(function () {
                            if (diagramRef.current) {
                                diagramRef.current.fitToPage({
                                    canZoomIn: true,
                                    margin: { left: 0, right: 20, top: 0, bottom: 90 }
                                });
                            }
                        });
                    } }))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null,
                "This sample provides an interactive visualization of a neural network architecture using the ",
                React.createElement("a", { href: "https://www.syncfusion.com/react-components/react-diagram", target: "_blank" }, "React Diagram"),
                ". It displays multi-layered networks with configurable neurons, connections, and data flow patterns.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null, "This multi-layered neural network visualizer allows users to explore input, hidden, and output layers with configurable neurons. Connections clearly display weight values\u2014positive in blue, negative in red\u2014with thickness indicating magnitude. Interactive tooltip provide detailed information."))));
}
exports.default = NeuralNetworkDiagram;
