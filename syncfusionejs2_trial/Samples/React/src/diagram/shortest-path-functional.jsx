import * as React from "react";
import { useEffect } from 'react';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { DiagramComponent, Node, NodeConstraints, AnnotationConstraints, ConnectorConstraints, SnapConstraints, DiagramConstraints } from "@syncfusion/ej2-react-diagrams";
import { updateSampleSection } from "../common/sample-base";
// Constants for colors and styles
const NodeHighlightFill = '#6495ED';
const NodeHighlightStroke = '#4472C4';
const NodeDefaultFill = 'white';
const NodeDefaultStroke = '#333333';
const NodeErrorFill = '#FF6565';
const NodeErrorStroke = '#EE3636';
const ConnectorHighlightStroke = '#4472C4';
const ConnectorDefaultStroke = '#333333';
let diagram;
const dashIntervals = new Map();
let graph = new Map();
let selectedNode = 'A';
let highlightedNodes = [];
let highlightedConnectors = [];
let isDirectedGraph = true;
let previousNode = null;
let diagramCreated = false;
const snapSettings = { constraints: SnapConstraints.None };
function createNode(id, x, y) {
    const isSelected = id === 'A';
    return {
        id: id,
        offsetX: x,
        offsetY: y,
        width: 50,
        height: 50,
        constraints: (NodeConstraints.Default | NodeConstraints.Tooltip) & ~NodeConstraints.Select,
        tooltip: {
            openOn: 'Custom',
            relativeMode: 'Object'
        },
        shape: {
            type: 'Basic',
            shape: 'Ellipse'
        },
        style: isSelected ? {
            strokeColor: NodeHighlightStroke,
            strokeWidth: 3,
            fill: NodeHighlightFill
        } : {
            fill: NodeDefaultFill,
        },
        annotations: [{
                content: id,
                constraints: AnnotationConstraints.ReadOnly,
                style: {
                    color: 'black',
                    fontSize: 16
                }
            }]
    };
}
const nodes = [
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
        id: `${sourceId}${targetId}`,
        sourceID: sourceId,
        targetID: targetId,
        type: 'Straight',
        style: {
            strokeColor: ConnectorDefaultStroke,
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
                constraints: AnnotationConstraints.ReadOnly,
                alignment: 'Center',
                width: 20,
                height: 20
            }],
        constraints: ConnectorConstraints.ReadOnly,
        targetDecorator: {
            shape: 'Arrow'
        }
    };
}
const connectors = [
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
    const nodeIds = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'X', 'Y'];
    // Initialize graph
    nodeIds.forEach(nodeId => {
        graph.set(nodeId, []);
    });
    const edges = [
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
    edges.forEach(edge => {
        graph.get(edge.from)?.push(edge.to);
        graph.get(edge.to)?.push(edge.from);
    });
}
function onGraphTypeChanged(args) {
    isDirectedGraph = args.checked;
    diagram.connectors.forEach((connector) => {
        // Update stroke style & decorator
        if (isDirectedGraph) {
            connector.targetDecorator.shape = 'Arrow';
            connector.style.strokeWidth = 2;
            connector.style.strokeDashArray = '5,5';
            connector.style.strokeColor = ConnectorDefaultStroke;
        }
        else {
            connector.targetDecorator.shape = 'None';
            connector.style.strokeColor = ConnectorDefaultStroke;
            connector.style.strokeDashArray = '';
            connector.style.strokeWidth = 2;
            // Stop animation for undirected graph
            removeConnectorDash(connector.id + '_path');
        }
    });
    diagram.dataBind();
}
function onMouseEnter(args) {
    if (args.actualObject && args.actualObject instanceof Node) {
        const hoverNode = args.actualObject;
        previousNode = hoverNode;
        if (hoverNode.id !== selectedNode) {
            removeStepNumbers();
            resetStyles();
            const { path, distance } = findShortestPath(selectedNode, hoverNode.id);
            if (path.length > 0) {
                const pathString = path.map(p => getNodeLabel(p)).join(" → ");
                // Update tooltip
                hoverNode.tooltip.content = pathString;
                diagram.showTooltip(hoverNode);
                highlightNodes(path);
                addStepNumbersToConnectors(path);
                highlightPath(path);
            }
            else {
                hoverNode.tooltip.content = 'No path found';
                diagram.showTooltip(hoverNode);
                // Show error state
                hoverNode.style.fill = NodeErrorFill;
                hoverNode.style.strokeColor = NodeErrorStroke;
                if (!highlightedNodes.some((node) => node.id === hoverNode.id)) {
                    highlightedNodes.push(hoverNode);
                }
                const rootNode = diagram.getObject(selectedNode);
                if (rootNode) {
                    rootNode.style.fill = NodeErrorFill;
                    rootNode.style.strokeColor = NodeErrorStroke;
                }
            }
            diagram.dataBind();
        }
    }
}
function onMouseLeave() {
    if (previousNode) {
        diagram.hideTooltip(previousNode);
        const selectedNodeObj = diagram.getObject(selectedNode);
        if (selectedNodeObj) {
            selectedNodeObj.style.strokeColor = NodeHighlightStroke;
            selectedNodeObj.style.fill = NodeHighlightFill;
            selectedNodeObj.style.strokeWidth = 4;
        }
        resetStyles();
        removeStepNumbers();
        diagram.dataBind();
    }
}
function onNodeClicked(args) {
    if (args.element && args.element instanceof Node) {
        const clickedNode = args.element;
        previousSelectedNodeUpdated();
        selectedNode = clickedNode.id;
        clickedNode.style.strokeColor = NodeHighlightStroke;
        clickedNode.style.strokeWidth = 3;
        resetStyles();
        removeStepNumbers();
        diagram.dataBind();
    }
}
function previousSelectedNodeUpdated() {
    const previousSelectedNode = diagram.nodes.find((node) => node.id === selectedNode);
    if (previousSelectedNode) {
        previousSelectedNode.style.strokeColor = NodeDefaultStroke;
        previousSelectedNode.style.strokeWidth = 2;
        previousSelectedNode.style.fill = NodeDefaultFill;
    }
}
function resetStyles() {
    // Reset highlighted connectors
    highlightedConnectors.forEach(connector => {
        connector.style.strokeColor = ConnectorDefaultStroke;
        connector.style.strokeWidth = 2;
        if (isDirectedGraph) {
            connector.style.strokeDashArray = '5,5';
            removeMovingDash(connector.id + '_path');
        }
    });
    highlightedConnectors = [];
    // Reset highlighted nodes
    highlightedNodes.forEach(node => {
        if (node.id !== selectedNode) {
            node.style.fill = NodeDefaultFill;
            node.style.strokeColor = NodeDefaultStroke;
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
        const neighbors = [];
        const outgoingConnectors = diagram.connectors.filter((connector) => connector.sourceID === nodeId);
        outgoingConnectors.forEach(connector => {
            if (connector.targetID) {
                neighbors.push(connector.targetID);
            }
        });
        return neighbors;
    }
}
function findShortestPath(start, end) {
    if (!graph.has(start) || !graph.has(end)) {
        return { path: [], distance: 0 };
    }
    if (start === end) {
        return { path: [start], distance: 0 };
    }
    const queue = [start];
    const visited = new Set([start]);
    const previous = new Map();
    const distances = new Map();
    distances.set(start, 0);
    while (queue.length > 0) {
        const current = queue.shift();
        const neighbors = getNeighbors(current, isDirectedGraph);
        for (const neighbor of neighbors) {
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
    const path = [];
    if (visited.has(end)) {
        let currentNode = end;
        while (currentNode !== undefined) {
            path.unshift(currentNode);
            currentNode = previous.get(currentNode);
        }
    }
    return { path, distance: path.length > 0 ? path.length - 1 : 0 };
}
function highlightNodes(path) {
    path.forEach(nodeId => {
        const node = diagram.getObject(nodeId);
        if (node) {
            node.style.fill = NodeHighlightFill;
            node.style.strokeColor = NodeHighlightStroke;
            node.style.strokeWidth = 3;
            highlightedNodes.push(node);
        }
    });
}
function findConnector(sourceId, targetId) {
    return diagram.connectors.find((connector) => (connector.sourceID === sourceId && connector.targetID === targetId) ||
        (!isDirectedGraph && connector.sourceID === targetId && connector.targetID === sourceId));
}
function highlightPath(path) {
    for (let i = 0; i < path.length - 1; i++) {
        const connector = findConnector(path[i], path[i + 1]);
        if (connector) {
            connector.style.strokeColor = ConnectorHighlightStroke;
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
    for (let i = 0; i < path.length - 1; i++) {
        const connector = findConnector(path[i], path[i + 1]);
        if (connector && connector.annotations && connector.annotations.length > 0) {
            connector.annotations[0].content = (i + 1).toString();
            connector.annotations[0].style.fill = NodeHighlightStroke;
        }
    }
}
function removeStepNumbers() {
    diagram.connectors.forEach(connector => {
        if (connector.annotations && connector.annotations.length > 0) {
            connector.annotations[0].content = '';
            connector.annotations[0].style.fill = 'transparent';
        }
    });
}
function getNodeLabel(nodeId) {
    const node = diagram.nodes.find(n => n.id === nodeId);
    return node?.annotations?.[0]?.content ?? nodeId;
}
function applyMovingDash(pathId) {
    // Wait for the path to exist in the DOM
    const applyAnimationInterval = setInterval(() => {
        const element = document.getElementById(pathId);
        if (element) {
            let offset = 0;
            // Store the interval reference for this pathId
            const interval = setInterval(() => {
                offset -= 1;
                element.setAttribute('stroke-dashoffset', offset.toString());
            }, 50);
            dashIntervals.set(pathId, interval);
            clearInterval(applyAnimationInterval);
        }
    }, 10);
}
function removeMovingDash(pathId) {
    // Wait for the path to exist in the DOM for cleanup
    const removeAnimationInterval = setInterval(() => {
        const element = document.getElementById(pathId);
        if (element) {
            // Clear dash animation interval if it exists
            const interval = dashIntervals.get(pathId);
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
    const element = document.querySelector(`[id='${pathId}']`);
    if (element) {
        const interval = dashIntervals.get(pathId);
        if (interval) {
            clearInterval(interval);
            dashIntervals.delete(pathId);
        }
        element.removeAttribute('stroke-dashoffset');
    }
}
const handleCreated = () => {
    isDirectedGraph = true;
    if (diagram) {
        diagram.fitToPage();
    }
};
const handleLoad = () => {
    if (diagramCreated && diagram) {
        diagram.fitToPage();
    }
};
function ShortestPathDiagram() {
    // Initialize graph data structure
    useEffect(() => {
        updateSampleSection();
        buildGraph();
        return () => {
            // Cleanup intervals on unmount
            dashIntervals.forEach(interval => clearInterval(interval));
            dashIntervals.clear();
        };
    }, []);
    return (<div className="shortest-path-container">
            <div className="control-section" style={{ width: "100%" }}>
                <div className="switch-container" style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "20px" }}>
                    <SwitchComponent id="graphSwitch" checked={true} change={onGraphTypeChanged}/>
                    <label htmlFor="graphSwitch" className="switch-label" style={{ fontSize: "18px", fontWeight: "500", marginLeft: "10px" }}>    Directed Graph  </label>
                </div>

                <DiagramComponent id="diagram" ref={(diagramref) => (diagram = diagramref)} width="100%" height="700px" nodes={nodes} connectors={connectors} constraints={DiagramConstraints.Default & ~DiagramConstraints.UndoRedo} snapSettings={snapSettings} mouseEnter={onMouseEnter} mouseLeave={onMouseLeave} click={onNodeClicked} created={handleCreated} load={handleLoad}>
                </DiagramComponent>
            </div>

            <div id="action-description">
                <p>
                    This sample demonstrates an interactive shortest path algorithm visualization using the Syncfusion<sup>®</sup> EJ2 Diagram component, featuring a dynamic graph where users select source and destination nodes to view animated optimal paths.
                </p>
            </div>

            <div id="description">
                <p>
                    Users interactively find the shortest path by selecting a <b>source</b> node and hovering over a <b>destination.</b> The optimal path dynamically highlights with animated, dashed connectors and numerical labels. Tooltip instantly display the path sequence, or provide <b>"No path found"</b> warnings. A toggle seamlessly switches between directed and undirected graph modes.
                </p>
            </div>
        </div>);
}
export default ShortestPathDiagram;
