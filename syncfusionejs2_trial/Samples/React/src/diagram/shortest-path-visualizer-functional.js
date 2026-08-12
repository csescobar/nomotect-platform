"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var ej2_react_diagrams_1 = require("@syncfusion/ej2-react-diagrams");
var sample_base_1 = require("../common/sample-base");
// Constants for colors and styles
var nodeHighlightFill = '#6495ED';
var nodeHighlightStroke = '#4472C4';
var nodeDefaultFill = 'white';
var nodeDefaultStroke = '#333333';
var nodeErrorFill = '#FF6565';
var nodeErrorStroke = '#EE3636';
var connectorHighlightStroke = '#4472C4';
var connectorDefaultStroke = '#333333';
var dashIntervals = new Map();
var diagram;
var graph = new Map();
var selectedNode = 'A';
var highlightedNodes = [];
var highlightedConnectors = [];
var isDirectedGraph = true;
var previousNode = null;
var diagramCreated = false;
var snapSettings = { constraints: ej2_react_diagrams_1.SnapConstraints.None };
function createNode(id, x, y) {
    var isSelected = id === 'A';
    return {
        id: id,
        offsetX: x,
        offsetY: y,
        width: 50,
        height: 50,
        constraints: (ej2_react_diagrams_1.NodeConstraints.Default | ej2_react_diagrams_1.NodeConstraints.Tooltip) & ~ej2_react_diagrams_1.NodeConstraints.Select,
        tooltip: {
            openOn: 'Custom',
            relativeMode: 'Object'
        },
        shape: {
            type: 'Basic',
            shape: 'Ellipse'
        },
        style: isSelected ? {
            strokeColor: nodeHighlightStroke,
            strokeWidth: 3,
            fill: nodeHighlightFill
        } : {
            fill: nodeDefaultFill,
        },
        annotations: [{
                content: id,
                constraints: ej2_react_diagrams_1.AnnotationConstraints.ReadOnly,
                style: {
                    color: 'black',
                    fontSize: 16
                }
            }]
    };
}
var nodes = [
    createNode('A', 75, 75),
    createNode('B', 384, 300),
    createNode('C', 700, 200),
    createNode('D', 100, 300),
    createNode('E', 825, 20),
    createNode('F', 90, 440),
    createNode('G', 460, 660),
    createNode('H', 270, 530),
    createNode('I', 750, 350),
    createNode('J', 1000, 450),
    createNode('K', 750, 450),
    createNode('L', 929, 210),
    createNode('X', 420, 100),
    createNode('Y', 850, 620)
];
function createConnector(sourceId, targetId) {
    return {
        id: "".concat(sourceId).concat(targetId),
        sourceID: sourceId,
        targetID: targetId,
        type: 'Straight',
        style: {
            strokeColor: connectorDefaultStroke,
            strokeWidth: 2,
            strokeDashArray: '5,5'
        },
        annotations: [{
                content: '',
                style: {
                    color: 'white',
                    fontSize: 12,
                    bold: true,
                    fill: 'transparent'
                },
                offset: 0.5,
                constraints: ej2_react_diagrams_1.AnnotationConstraints.ReadOnly,
                alignment: 'Center',
                width: 20,
                height: 20
            }],
        constraints: ej2_react_diagrams_1.ConnectorConstraints.ReadOnly,
        targetDecorator: {
            shape: 'Arrow'
        }
    };
}
var connectors = [
    createConnector('A', 'B'),
    createConnector('A', 'D'),
    createConnector('A', 'X'),
    createConnector('B', 'D'),
    createConnector('B', 'H'),
    createConnector('B', 'X'),
    createConnector('C', 'L'),
    createConnector('C', 'X'),
    createConnector('D', 'F'),
    createConnector('E', 'X'),
    createConnector('G', 'H'),
    createConnector('G', 'Y'),
    createConnector('H', 'F'),
    createConnector('I', 'J'),
    createConnector('I', 'K'),
    createConnector('I', 'L'),
    createConnector('J', 'L'),
    createConnector('K', 'Y'),
    createConnector('B', 'K'),
    createConnector('B', 'C'),
    createConnector('G', 'K'),
    createConnector('H', 'I')
];
function buildGraph() {
    var nodeIds = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'X', 'Y'];
    // Initialize graph
    nodeIds.forEach(function (nodeId) {
        graph.set(nodeId, []);
    });
    var edges = [
        { from: 'A', to: 'B' }, { from: 'A', to: 'D' }, { from: 'A', to: 'X' },
        { from: 'B', to: 'D' }, { from: 'B', to: 'H' }, { from: 'B', to: 'X' },
        { from: 'B', to: 'C' }, { from: 'B', to: 'K' }, { from: 'C', to: 'L' },
        { from: 'C', to: 'X' }, { from: 'D', to: 'F' }, { from: 'E', to: 'X' },
        { from: 'F', to: 'H' }, { from: 'G', to: 'H' }, { from: 'G', to: 'Y' },
        { from: 'G', to: 'K' }, { from: 'H', to: 'I' }, { from: 'I', to: 'J' },
        { from: 'I', to: 'K' }, { from: 'I', to: 'L' }, { from: 'J', to: 'L' },
        { from: 'K', to: 'Y' }
    ];
    // Build bidirectional adjacency list
    edges.forEach(function (edge) {
        var _a, _b;
        (_a = graph.get(edge.from)) === null || _a === void 0 ? void 0 : _a.push(edge.to);
        (_b = graph.get(edge.to)) === null || _b === void 0 ? void 0 : _b.push(edge.from);
    });
}
function onGraphTypeChanged(args) {
    isDirectedGraph = args.checked;
    diagram.connectors.forEach(function (connector) {
        // Update stroke style & decorator
        if (isDirectedGraph) {
            connector.targetDecorator.shape = 'Arrow';
            connector.style.strokeWidth = 2;
            connector.style.strokeDashArray = '5,5';
            connector.style.strokeColor = connectorDefaultStroke;
        }
        else {
            connector.targetDecorator.shape = 'None';
            connector.style.strokeColor = connectorDefaultStroke;
            connector.style.strokeDashArray = '';
            connector.style.strokeWidth = 2;
            // Stop animation for undirected graph
            removeConnectorDash(connector.id + '_path');
        }
    });
    diagram.dataBind();
}
function onMouseEnter(args) {
    if (args.actualObject && args.actualObject instanceof ej2_react_diagrams_1.Node) {
        var hoverNode_1 = args.actualObject;
        previousNode = hoverNode_1;
        if (hoverNode_1.id !== selectedNode) {
            removeStepNumbers();
            resetStyles();
            var _a = findShortestPath(selectedNode, hoverNode_1.id), path = _a.path, distance = _a.distance;
            if (path.length > 0) {
                var pathString = path.map(function (p) { return getNodeLabel(p); }).join(" → ");
                // Update tooltip
                hoverNode_1.tooltip.content = pathString;
                diagram.showTooltip(hoverNode_1);
                highlightNodes(path);
                addStepNumbersToConnectors(path);
                highlightPath(path);
            }
            else {
                hoverNode_1.tooltip.content = 'No path found';
                diagram.showTooltip(hoverNode_1);
                // Show error state
                hoverNode_1.style.fill = nodeErrorFill;
                hoverNode_1.style.strokeColor = nodeErrorStroke;
                if (!highlightedNodes.some(function (node) { return node.id === hoverNode_1.id; })) {
                    highlightedNodes.push(hoverNode_1);
                }
                var rootNode = diagram.getObject(selectedNode);
                if (rootNode) {
                    rootNode.style.fill = nodeErrorFill;
                    rootNode.style.strokeColor = nodeErrorStroke;
                }
            }
            diagram.dataBind();
        }
    }
}
function onMouseLeave() {
    if (previousNode) {
        diagram.hideTooltip(previousNode);
        var selectedNodeObj = diagram.getObject(selectedNode);
        if (selectedNodeObj) {
            selectedNodeObj.style.strokeColor = nodeHighlightStroke;
            selectedNodeObj.style.fill = nodeHighlightFill;
            selectedNodeObj.style.strokeWidth = 4;
        }
        resetStyles();
        removeStepNumbers();
        diagram.dataBind();
    }
}
function onNodeClicked(args) {
    if (args.element && args.element instanceof ej2_react_diagrams_1.Node) {
        var clickedNode = args.element;
        previousSelectedNodeUpdated();
        selectedNode = clickedNode.id;
        clickedNode.style.strokeColor = nodeHighlightStroke;
        clickedNode.style.strokeWidth = 3;
        resetStyles();
        removeStepNumbers();
        diagram.dataBind();
    }
}
function previousSelectedNodeUpdated() {
    var previousSelectedNode = diagram.nodes.find(function (node) { return node.id === selectedNode; });
    if (previousSelectedNode) {
        previousSelectedNode.style.strokeColor = nodeDefaultStroke;
        previousSelectedNode.style.strokeWidth = 2;
        previousSelectedNode.style.fill = nodeDefaultFill;
    }
}
function resetStyles() {
    // Reset highlighted connectors
    highlightedConnectors.forEach(function (connector) {
        connector.style.strokeColor = connectorDefaultStroke;
        connector.style.strokeWidth = 2;
        if (isDirectedGraph) {
            connector.style.strokeDashArray = '5,5';
            removeMovingDash(connector.id + '_path');
        }
    });
    highlightedConnectors = [];
    // Reset highlighted nodes
    highlightedNodes.forEach(function (node) {
        if (node.id !== selectedNode) {
            node.style.fill = nodeDefaultFill;
            node.style.strokeColor = nodeDefaultStroke;
            node.style.strokeWidth = 2;
        }
    });
    highlightedNodes = [];
}
function getNeighbors(nodeId, directed) {
    if (!directed) {
        // For undirected graph, return all connected nodes
        return graph.get(nodeId) || [];
    }
    else {
        // For directed graph, only return nodes that this node points to
        var neighbors_1 = [];
        var outgoingConnectors = diagram.connectors.filter(function (connector) { return connector.sourceID === nodeId; });
        outgoingConnectors.forEach(function (connector) {
            if (connector.targetID) {
                neighbors_1.push(connector.targetID);
            }
        });
        return neighbors_1;
    }
}
function findShortestPath(start, end) {
    if (!graph.has(start) || !graph.has(end)) {
        return { path: [], distance: 0 };
    }
    if (start === end) {
        return { path: [start], distance: 0 };
    }
    var queue = [start];
    var visited = new Set([start]);
    var previous = new Map();
    var distances = new Map();
    distances.set(start, 0);
    while (queue.length > 0) {
        var current = queue.shift();
        var neighbors = getNeighbors(current, isDirectedGraph);
        for (var _i = 0, neighbors_2 = neighbors; _i < neighbors_2.length; _i++) {
            var neighbor = neighbors_2[_i];
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                previous.set(neighbor, current);
                distances.set(neighbor, distances.get(current) + 1);
                queue.push(neighbor);
                if (neighbor === end) {
                    break;
                }
            }
        }
        if (visited.has(end)) {
            break;
        }
    }
    var path = [];
    if (visited.has(end)) {
        var currentNode = end;
        while (currentNode !== undefined) {
            path.unshift(currentNode);
            currentNode = previous.get(currentNode);
        }
    }
    return { path: path, distance: path.length > 0 ? path.length - 1 : 0 };
}
function highlightNodes(path) {
    path.forEach(function (nodeId) {
        var node = diagram.getObject(nodeId);
        if (node) {
            node.style.fill = nodeHighlightFill;
            node.style.strokeColor = nodeHighlightStroke;
            node.style.strokeWidth = 3;
            highlightedNodes.push(node);
        }
    });
}
function findConnector(sourceId, targetId) {
    return diagram.connectors.find(function (connector) {
        return (connector.sourceID === sourceId && connector.targetID === targetId) ||
            (!isDirectedGraph && connector.sourceID === targetId && connector.targetID === sourceId);
    });
}
function highlightPath(path) {
    for (var i = 0; i < path.length - 1; i++) {
        var connector = findConnector(path[i], path[i + 1]);
        if (connector) {
            connector.style.strokeColor = connectorHighlightStroke;
            connector.style.strokeWidth = 4;
            highlightedConnectors.push(connector);
            if (isDirectedGraph) {
                connector.style.strokeDashArray = '8,4';
                applyMovingDash(connector.id + '_path');
            }
        }
    }
}
function addStepNumbersToConnectors(path) {
    for (var i = 0; i < path.length - 1; i++) {
        var connector = findConnector(path[i], path[i + 1]);
        if (connector && connector.annotations && connector.annotations.length > 0) {
            connector.annotations[0].content = (i + 1).toString();
            connector.annotations[0].style.fill = nodeHighlightStroke;
        }
    }
}
function removeStepNumbers() {
    diagram.connectors.forEach(function (connector) {
        if (connector.annotations && connector.annotations.length > 0) {
            connector.annotations[0].content = '';
            connector.annotations[0].style.fill = 'transparent';
        }
    });
}
function getNodeLabel(nodeId) {
    var _a, _b, _c;
    var node = diagram.nodes.find(function (n) { return n.id === nodeId; });
    return (_c = (_b = (_a = node === null || node === void 0 ? void 0 : node.annotations) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.content) !== null && _c !== void 0 ? _c : nodeId;
}
function applyMovingDash(pathId) {
    // Wait for the path to exist in the DOM
    var applyAnimationInterval = setInterval(function () {
        var element = document.getElementById(pathId);
        if (element) {
            var offset_1 = 0;
            // Store the interval reference for this pathId
            var interval = setInterval(function () {
                offset_1 -= 1;
                element.setAttribute('stroke-dashoffset', offset_1.toString());
            }, 50);
            dashIntervals.set(pathId, interval);
            clearInterval(applyAnimationInterval);
        }
    }, 10);
}
function removeMovingDash(pathId) {
    // Wait for the path to exist in the DOM for cleanup
    var removeAnimationInterval = setInterval(function () {
        var element = document.getElementById(pathId);
        if (element) {
            // Clear dash animation interval if it exists
            var interval = dashIntervals.get(pathId);
            if (interval) {
                clearInterval(interval);
                dashIntervals.delete(pathId);
            }
            element.removeAttribute('stroke-dashoffset');
            clearInterval(removeAnimationInterval);
        }
    }, 10);
}
function removeConnectorDash(pathId) {
    var element = document.querySelector("[id='".concat(pathId, "']"));
    if (element) {
        var interval = dashIntervals.get(pathId);
        if (interval) {
            clearInterval(interval);
            dashIntervals.delete(pathId);
        }
        element.removeAttribute('stroke-dashoffset');
    }
}
function ShortestPathVisualizerDiagram() {
    var _a = React.useState(false), showDiagram = _a[0], setShowDiagram = _a[1];
    // Initialize graph data structure
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
        buildGraph();
        return function () {
            // Cleanup intervals on unmount
            dashIntervals.forEach(function (interval) { return clearInterval(interval); });
            dashIntervals.clear();
        };
    }, []);
    return (React.createElement("div", { className: "shortest-path-container", style: { opacity: showDiagram ? 1 : 0 } },
        React.createElement("div", { className: "control-section", style: { width: "100%" } },
            React.createElement("div", { className: "switch-container", style: { display: "flex", justifyContent: "center", alignItems: "center", margin: "20px" } },
                React.createElement(ej2_react_buttons_1.SwitchComponent, { id: "graphSwitch", checked: true, change: onGraphTypeChanged }),
                React.createElement("label", { htmlFor: "graphSwitch", className: "switch-label", style: { fontSize: "18px", fontWeight: "500", marginLeft: "10px" } }, "    Directed Graph  ")),
            React.createElement(ej2_react_diagrams_1.DiagramComponent, { id: "diagram", ref: function (diagramref) { return (diagram = diagramref); }, width: "100%", height: "700px", nodes: nodes, connectors: connectors, constraints: ej2_react_diagrams_1.DiagramConstraints.Default & ~ej2_react_diagrams_1.DiagramConstraints.UndoRedo, snapSettings: snapSettings, mouseEnter: onMouseEnter, mouseLeave: onMouseLeave, click: onNodeClicked, created: function () {
                    isDirectedGraph = true;
                    if (diagram) {
                        diagram.fitToPage();
                        setTimeout(function () {
                            setShowDiagram(true);
                        }, 10);
                    }
                }, load: function () {
                    if (diagramCreated && diagram) {
                        diagram.fitToPage();
                    }
                } })),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null,
                "This sample demonstrates an interactive shortest path algorithm visualization using the ",
                React.createElement("a", { href: "https://www.syncfusion.com/react-components/react-diagram", target: "_blank" }, "React Diagram"),
                ", featuring a dynamic graph where users select source and destination nodes to view animated optimal paths.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null,
                "Users can interactively find the shortest path by selecting a ",
                React.createElement("b", null, "source"),
                " node and hovering over a ",
                React.createElement("b", null, "destination."),
                " The optimal path is dynamically highlighted using animated, dashed connectors and numerical labels. Tooltip instantly display the path sequence or show a ",
                React.createElement("b", null, "\"No path found\""),
                " warning. A toggle allows seamless switching between directed and undirected graph modes."))));
}
exports.default = ShortestPathVisualizerDiagram;
