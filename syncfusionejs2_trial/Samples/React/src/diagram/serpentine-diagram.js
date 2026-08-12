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
exports.SerpentineDiagram = void 0;
var React = require("react");
var ej2_react_diagrams_1 = require("@syncfusion/ej2-react-diagrams");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var sample_base_1 = require("../common/sample-base");
var diagram;
// Domain data: medical breakthroughs displayed as timeline nodes in a serpentine layout
var medicalBreakthroughs = [
    { id: '1', year: '1796', title: 'Smallpox Vaccine', description: 'Edward Jenner develops the first successful vaccine using cowpox, marking a historic milestone in immunology.' },
    { id: '2', year: '1846', title: 'First Use of Anesthesia', description: 'William T. G. Morton demonstrates ether anesthesia publicly, revolutionizing surgical procedures by enabling pain-free operations.' },
    { id: '3', year: '1865', title: 'Germ Theory of Disease', description: 'Louis Pasteur proves microorganisms cause disease, establishing the foundation of modern microbiology.' },
    { id: '4', year: '1882', title: 'Discovery of the Tuberculosis Bacterium', description: 'Robert Koch identifies Mycobacterium tuberculosis, paving the way for accurate TB diagnosis and effective treatment.' },
    { id: '5', year: '1895', title: 'Discovery of X-Rays', description: 'Wilhelm Röntgen discovers X-rays, transforming medical imaging and diagnostic practices worldwide.' },
    { id: '6', year: '1901', title: 'Classification of Blood Types', description: 'Karl Landsteiner classifies major blood groups (A, B, O), enabling safe and reliable blood transfusions.' },
    { id: '7', year: '1921', title: 'Discovery of Insulin', description: 'Frederick Banting and Charles Best isolate insulin, turning diabetes into a manageable chronic condition.' },
    { id: '8', year: '1923', title: 'Diphtheria Vaccine Developed', description: 'Widespread use of the diphtheria toxoid vaccine begins, drastically reducing deaths from the disease.' },
    { id: '9', year: '1928', title: 'Discovery of Penicillin', description: 'Alexander Fleming discovers the first true antibiotic, heralding the antibiotic era.' },
    { id: '10', year: '1935', title: 'Sulfonamides Introduced', description: 'Sulfonamides, the first synthetic antibiotics, are introduced to effectively treat diverse bacterial infections.' },
    { id: '11', year: '1953', title: 'DNA Structure Identified', description: 'James Watson and Francis Crick reveal the double-helix structure of DNA, laying the groundwork for modern genetics.' },
    { id: '12', year: '1955', title: 'Polio Vaccine Approved', description: 'Jonas Salk’s IPV is approved as safe and effective, drastically reducing global polio cases.' },
    { id: '13', year: '1960', title: 'Introduction of Oral Contraceptives', description: 'The FDA approves the first oral contraceptive pill, revolutionizing reproductive health and social norms.' },
    { id: '14', year: '1967', title: 'First Human Heart Transplant', description: 'Dr. Christiaan Barnard performs the first successful human heart transplant, redefining cardiac surgery.' },
    { id: '15', year: '1971', title: 'CT Scan Invented', description: 'Godfrey Hounsfield and Allan Cormack invent CT scanning, dramatically improving internal medical imaging.' },
    { id: '16', year: '1978', title: 'Birth of First IVF Baby', description: 'Louise Brown becomes the first baby born through IVF, marking a breakthrough in reproductive medicine.' },
    { id: '17', year: '1980', title: 'Smallpox Eradicated', description: 'WHO declares smallpox eradicated, a historic triumph of global vaccination efforts.' },
    { id: '18', year: '1983', title: 'HIV Identified', description: 'Luc Montagnier and Robert Gallo identify HIV as the virus responsible for AIDS.' },
    { id: '19', year: '1990', title: 'Launch of Human Genome Project', description: 'The Human Genome Project launches, aiming to map all human genes and revolutionize personalized medicine.' },
    { id: '20', year: '1996', title: 'Introduction of HAART for HIV', description: 'HAART becomes the standard HIV treatment, transforming it into a manageable chronic condition.' }
];
// Layout and visual constants (aligned with TS baseline)
var PALETTE = ['#2E86C1', '#2A6F1C', '#C25107', '#8E44AD', '#C0392B', '#40566d', '#8E7302'];
var NODE_SIZE = 110; // match TS
var H_GAP = 60;
var V_GAP = 150;
var BASE_MARGIN = 50;
var CURVE_RADIUS = H_GAP * 1.5;
var CURVE_BOW_OFFSET = 70;
var CURVE_PADDING = CURVE_RADIUS + (2 * CURVE_BOW_OFFSET);
var TOTAL_MARGIN = BASE_MARGIN + CURVE_PADDING;
var INITIAL_Y = 80;
// Scroll area and padding (match TS)
var SCROLL_AREA = new ej2_react_diagrams_1.Rect(0, 0, 1500, 1500);
var SCROLL_PADDING = { right: 50, bottom: 50 };
// Zoom levels (match HTML/TS)
var ZOOM_FACTORS = {
    'zoom-065': 0.65,
    'zoom-075': 0.75,
    'zoom-085': 0.85,
    'zoom-1': 1
};
var SerpentineDiagram = /** @class */ (function (_super) {
    __extends(SerpentineDiagram, _super);
    function SerpentineDiagram(props) {
        var _this = _super.call(this, props) || this;
        _this.diagramInstance = null;
        _this.handleResize = function () {
            _this.renderSerpentineLayout();
        };
        _this.handleZoom = function (level) {
            var diagram = _this.diagramInstance;
            if (!diagram)
                return;
            var currentZoom = diagram.scrollSettings.currentZoom || 1;
            var zoomFactor = level / currentZoom;
            var focusPoint = {
                x: diagram.scrollSettings.viewPortWidth / 2,
                y: diagram.scrollSettings.viewPortHeight / 2
            };
            diagram.zoom(zoomFactor, focusPoint);
            _this.renderSerpentineLayout();
            diagram.scrollSettings.horizontalOffset = 0;
            diagram.scrollSettings.verticalOffset = 0;
            diagram.dataBind();
            _this.setState({ currentZoom: level });
        };
        _this.renderSerpentineLayout = function () {
            diagram = _this.diagramInstance;
            if (!diagram || !diagram.element)
                return;
            var zoom = diagram.scrollSettings.currentZoom || 1;
            var effectiveWidth = diagram.element.clientWidth / zoom;
            var nodes = [];
            var connectors = [];
            var currentX = TOTAL_MARGIN + (NODE_SIZE / 2);
            var currentY = INITIAL_Y;
            var direction = 1;
            medicalBreakthroughs.forEach(function (breakthrough, index) {
                var exceedsRight = direction === 1 && (currentX + (NODE_SIZE / 2) > effectiveWidth - TOTAL_MARGIN);
                var exceedsLeft = direction === -1 && (currentX - (NODE_SIZE / 2) < TOTAL_MARGIN);
                if (exceedsRight || exceedsLeft) {
                    currentY += V_GAP;
                    direction = direction === 1 ? -1 : 1;
                    currentX = direction === 1
                        ? TOTAL_MARGIN + (NODE_SIZE / 2)
                        : effectiveWidth - TOTAL_MARGIN - (NODE_SIZE / 2);
                }
                var color = PALETTE[index % PALETTE.length];
                var node = {
                    id: "breakthrough_".concat(breakthrough.id),
                    offsetX: currentX,
                    offsetY: currentY,
                    width: NODE_SIZE,
                    height: NODE_SIZE,
                    shape: { type: 'Basic', shape: 'Ellipse' },
                    style: { fill: color, strokeColor: 'white', strokeWidth: 4 },
                    annotations: [
                        { content: breakthrough.year, offset: { y: 0.3 }, style: { color: 'white', fontSize: 16, bold: true } },
                        { content: breakthrough.title, width: 80, offset: { y: 0.65 }, style: { color: 'white', fontSize: 12, textOverflow: 'Wrap', textWrapping: 'WrapWithOverflow' } }
                    ],
                    ports: [
                        { id: 'port_left', offset: { x: 0, y: 0.5 }, visibility: ej2_react_diagrams_1.PortVisibility.Hidden },
                        { id: 'port_right', offset: { x: 1, y: 0.5 }, visibility: ej2_react_diagrams_1.PortVisibility.Hidden }
                    ],
                    constraints: (ej2_react_diagrams_1.NodeConstraints.Default | ej2_react_diagrams_1.NodeConstraints.Tooltip) & ~ej2_react_diagrams_1.NodeConstraints.Select,
                    tooltip: {
                        content: "<p style=\"font-size: small;\"><b>".concat(breakthrough.title, " (").concat(breakthrough.year, ")</b><br/><br/>").concat(breakthrough.description, "</p>"),
                        position: 'BottomCenter',
                        relativeMode: 'Object',
                        width: 200
                    }
                };
                nodes.push(node);
                currentX += direction * (NODE_SIZE + H_GAP);
            });
            for (var i = 0; i < nodes.length - 1; i++) {
                var sourceNode = nodes[i];
                var targetNode = nodes[i + 1];
                var isRowChange = sourceNode.offsetY !== targetNode.offsetY;
                var sourcePortId = void 0;
                var targetPortId = void 0;
                if (isRowChange) {
                    var goingRight = sourceNode.offsetX < targetNode.offsetX;
                    sourcePortId = goingRight ? 'port_right' : 'port_left';
                    targetPortId = sourcePortId;
                }
                else {
                    var leftToRight = sourceNode.offsetX < targetNode.offsetX;
                    sourcePortId = leftToRight ? 'port_right' : 'port_left';
                    targetPortId = leftToRight ? 'port_left' : 'port_right';
                }
                var color = sourceNode.style.fill;
                var connector = {
                    id: "connector_".concat(i + 1),
                    sourceID: sourceNode.id,
                    targetID: targetNode.id,
                    sourcePortID: sourcePortId,
                    targetPortID: targetPortId,
                    style: { strokeColor: color, strokeWidth: 12 },
                    targetDecorator: _this.createDecorator(color, isRowChange ? 0 : 0.25),
                    sourceDecorator: _this.createDecorator(color, 0.25),
                    constraints: ej2_react_diagrams_1.ConnectorConstraints.Default & ~ej2_react_diagrams_1.ConnectorConstraints.Select
                };
                if (isRowChange) {
                    connector.type = 'Bezier';
                    var goingRight = sourceNode.offsetX < targetNode.offsetX;
                    var sign = goingRight ? 1.3 : -1.3;
                    var controlX = sourceNode.offsetX + sign * ((NODE_SIZE / 2) + CURVE_RADIUS + (2 * CURVE_BOW_OFFSET));
                    connector.segments = [{
                            type: 'Bezier',
                            point1: { x: controlX, y: sourceNode.offsetY + 5 },
                            point2: { x: controlX, y: targetNode.offsetY - 15 }
                        }];
                }
                else {
                    connector.type = 'Straight';
                }
                connectors.push(connector);
            }
            diagram = _this.diagramInstance;
            diagram.nodes = nodes;
            diagram.connectors = connectors;
            diagram.dataBind();
        };
        _this.state = { currentZoom: 0.65 };
        return _this;
    }
    SerpentineDiagram.prototype.componentDidMount = function () {
        this.renderComplete();
    };
    SerpentineDiagram.prototype.renderComplete = function () {
        var _this = this;
        window.addEventListener('resize', this.handleResize);
        requestAnimationFrame(function () {
            var diagram = _this.diagramInstance;
            if (!diagram)
                return;
            var current = diagram.scrollSettings.currentZoom || 1;
            var target = _this.state.currentZoom;
            var factor = target / current;
            var focusPoint = {
                x: diagram.scrollSettings.viewPortWidth / 2,
                y: diagram.scrollSettings.viewPortHeight / 2
            };
            if (Math.abs(factor - 1) > 0.001)
                diagram.zoom(factor, focusPoint);
            diagram.scrollSettings.horizontalOffset = 0;
            diagram.scrollSettings.verticalOffset = 0;
            _this.renderSerpentineLayout();
        });
    };
    SerpentineDiagram.prototype.componentWillUnmount = function () {
        window.removeEventListener('resize', this.handleResize);
    };
    SerpentineDiagram.prototype.createDecorator = function (color, pivotX) {
        return {
            shape: 'Custom',
            width: 20,
            height: 30,
            pivot: { x: pivotX },
            pathData: 'M 16 16 c -8 1 -7 1 -11 3 C 7 16 7 13 5 10 c 4 2 3 2 11 3 z',
            style: { fill: color, strokeColor: color }
        };
    };
    SerpentineDiagram.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "control-pane serpentine-diagram-container" },
            React.createElement("style", null, "\n                    .serpentine-diagram-container { padding: 20px; background-color: #f8f9fa; min-height: 600px; }\n                    .diagram-container { border: 1px solid #dee2e6; border-radius: 8px; background-color: white; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }\n                    .diagram-header h3 { color: #495057; font-weight: 600;margin-top:0px; }\n                    @media (max-width: 768px) {\n                        .serpentine-diagram-container { padding: 10px; }\n                        .diagram-container { min-height: 600px; }\n                    }\n                "),
            React.createElement("div", { className: "control-section" },
                React.createElement("div", { className: "content-wrapper", style: { width: "100%" } },
                    React.createElement("div", { className: "diagram-header" },
                        React.createElement("h3", { className: "text-center mb-3" }, "Medical Research Breakthroughs"),
                        React.createElement("p", { className: "text-muted text-center mb-4" }, "A serpentine journey through 20 pivotal medical discoveries that changed healthcare forever")),
                    React.createElement("div", { className: "zoom-controls-container", style: { padding: '0 0 15px 0', textAlign: 'center' } }, Object.keys(ZOOM_FACTORS).map(function (id) {
                        var level = ZOOM_FACTORS[id];
                        return (React.createElement(ej2_react_buttons_1.ButtonComponent, { key: id, id: id, isPrimary: _this.state.currentZoom === level, onClick: function () { return _this.handleZoom(level); } },
                            level,
                            "x"));
                    })),
                    React.createElement("div", null,
                        React.createElement(ej2_react_diagrams_1.DiagramComponent, { id: "serpentineDiagram", ref: function (d) { return (_this.diagramInstance = d); }, width: "100%", height: "600px", className: "diagram-container", snapSettings: { constraints: ej2_react_diagrams_1.SnapConstraints.None }, scrollSettings: { scrollableArea: SCROLL_AREA, padding: SCROLL_PADDING }, tool: ej2_react_diagrams_1.DiagramTools.ZoomPan, nodes: [], connectors: [] })))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null,
                    "This sample visualizes a serpentine layout using the ",
                    React.createElement("a", { href: "https://www.syncfusion.com/react-components/react-diagram", target: "_blank" }, "React Diagram"),
                    " to showcase 20 important medical research breakthroughs that transformed healthcare between 1796 and 1996.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null, "A serpentine layout arranges elements along a zigzagging or winding path. This timeline presents each breakthrough as part of a continuous sequence. When the layout reaches the edge of the view, it wraps to the next line and reverses direction, creating a true serpentine flow."),
                React.createElement("p", null,
                    React.createElement("strong", null, "Key Features:")),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement("strong", null, "Dynamic Serpentine Flow:"),
                        " Nodes are automatically arranged in a winding path that wraps based on the available container width."),
                    React.createElement("li", null,
                        React.createElement("strong", null, "Interactive Nodes:"),
                        " Hover over any node to see a detailed tooltip with information about the medical breakthrough."),
                    React.createElement("li", null,
                        React.createElement("strong", null, "Custom Connectors:"),
                        " The timeline uses straight connectors for nodes in the same row and elegant bezier curves for wrapping between rows."),
                    React.createElement("li", null,
                        React.createElement("strong", null, "Zoom and Pan:"),
                        " Use the buttons to zoom in and out at specific zoom levels.")))));
    };
    return SerpentineDiagram;
}(sample_base_1.SampleBase));
exports.SerpentineDiagram = SerpentineDiagram;
