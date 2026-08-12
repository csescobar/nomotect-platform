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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ej2_react_diagrams_1 = require("@syncfusion/ej2-react-diagrams");
var ej2_data_1 = require("@syncfusion/ej2-data");
var diagram_data_1 = require("./diagram-data");
var sample_base_1 = require("../common/sample-base");
var NODE_WIDTH = 140;
var NODE_HEIGHT = 180;
var HOVER_WIDTH = 320;
var CONNECTOR_COLORS = {
    baseConnector: '#85736E',
    highlightedConnector: '#723523',
};
var FamilyTreeDiagram = /** @class */ (function (_super) {
    __extends(FamilyTreeDiagram, _super);
    function FamilyTreeDiagram() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.diagramRef = React.createRef();
        // Mutable helpers (not React state)
        _this.nodeState = new Map();
        _this.originalSize = new Map();
        _this.hoveredId = null;
        // Data and relations
        _this.DATA_SOURCE = diagram_data_1.familyTreeData;
        // Static diagram settings
        _this.layout = {
            type: 'ComplexHierarchicalTree',
            orientation: 'TopToBottom',
            horizontalAlignment: 'Center',
            verticalAlignment: 'Top',
            horizontalSpacing: 150,
            verticalSpacing: 50
        };
        _this.dataSourceSettings = {
            id: 'Id',
            parentId: 'Parents',
            dataSource: new ej2_data_1.DataManager(_this.DATA_SOURCE),
            doBinding: function (node, raw) {
                node.id = String(raw.Id);
                node.data = raw;
                if (raw.Type === 'Union') {
                    node.width = 0;
                    node.height = 0;
                    node.shape = { type: 'Basic', shape: 'Rectangle' };
                    node.style = { fill: 'transparent', strokeColor: 'transparent' };
                    node.visible = false;
                }
                else {
                    raw.ImageUrl = "https://ej2.syncfusion.com/react/demos/src/diagram/Images/family-tree/".concat(raw.Name, ".png");
                    node.shape = { type: 'HTML' };
                    node.width = NODE_WIDTH;
                    node.height = NODE_HEIGHT;
                }
            }
        };
        // HTML node template
        _this.setNodeTemplate = function (node) {
            var _a;
            var data = node.data;
            if (!data || data.Type === 'Union')
                return;
            var UI = (_a = _this.nodeState.get(data.Id)) !== null && _a !== void 0 ? _a : {};
            node.shape = { type: 'HTML', content: _this.getUpdatedTemplate(data, UI) };
        };
        // Connector Defaults
        _this.getConnectorDefaults = function (connector) {
            connector.type = 'Orthogonal';
            connector.style = { strokeColor: CONNECTOR_COLORS.baseConnector, strokeWidth: 2 };
            connector.targetDecorator = { shape: 'None' };
            connector.cornerRadius = 5;
            return connector;
        };
        _this.clearHover = function () {
            var diagram = _this.diagramRef.current;
            if (!diagram)
                return;
            if (_this.hoveredId) {
                _this.restoreNodeSize(_this.hoveredId);
                _this.hoveredId = null;
            }
            diagram.nodes.forEach(function (n) {
                var _a;
                if (((_a = n.data) === null || _a === void 0 ? void 0 : _a.Type) === 'Union')
                    return;
                var nodeId = String(n.id);
                _this.nodeState.set(nodeId, { isOpen: false, isDimmed: false });
                _this.renderNode(nodeId);
            });
            diagram.connectors.forEach(function (connector) {
                connector.style = {
                    strokeColor: CONNECTOR_COLORS.baseConnector,
                    strokeWidth: 2,
                    opacity: 1
                };
            });
            diagram.dataBind();
        };
        /* ===================== Events ===================== */
        _this.onMouseEnter = function (args) {
            var node = (args === null || args === void 0 ? void 0 : args.actualObject) || null;
            if (!node || node.sourceID || node.targetID || (node.data && node.data.Type === 'Union'))
                return;
            _this.focusHover(String(node.id));
        };
        _this.onMouseLeave = function () {
            _this.clearHover();
        };
        _this.ondataLoaded = function () {
            setTimeout(function () {
                var diagram = _this.diagramRef.current;
                if (!diagram)
                    return;
                diagram.fitToPage();
                // show diagram
                var container = document.querySelector('.family-tree');
                if (container) {
                    container.style.opacity = '1';
                }
            }, 10);
        };
        return _this;
    }
    FamilyTreeDiagram.prototype.rendereComplete = function () {
        this.RELATIONS = this.buildRelations(this.DATA_SOURCE);
    };
    /* ===================== Relations ===================== */
    FamilyTreeDiagram.prototype.buildRelations = function (data) {
        var unions = data.filter(function (d) { return d.Type === 'Union'; });
        var spouseOf = new Map();
        var unionOf = new Map();
        var parentsByChild = new Map();
        var childrenByParent = new Map();
        unions.forEach(function (u) {
            var _a;
            var _b = ((_a = u.Parents) !== null && _a !== void 0 ? _a : []), a = _b[0], b = _b[1];
            if (!a || !b)
                return;
            unionOf.set(u.Id, [a, b]);
            spouseOf.set(a, b);
            spouseOf.set(b, a);
        });
        data.forEach(function (n) {
            if (Array.isArray(n.Parents)) {
                parentsByChild.set(n.Id, n.Parents.slice());
                n.Parents.forEach(function (ref) {
                    var pr = unionOf.get(ref);
                    if (!pr)
                        return;
                    var pa = pr[0], pb = pr[1];
                    if (!childrenByParent.has(pa))
                        childrenByParent.set(pa, new Set());
                    if (!childrenByParent.has(pb))
                        childrenByParent.set(pb, new Set());
                    childrenByParent.get(pa).add(n.Id);
                    childrenByParent.get(pb).add(n.Id);
                });
            }
        });
        return { spouseOf: spouseOf, unionOf: unionOf, parentsByChild: parentsByChild, childrenByParent: childrenByParent };
    };
    FamilyTreeDiagram.prototype.relatedSet = function (personId) {
        var _this = this;
        var _a;
        var people = new Set([personId]);
        var spouse = this.RELATIONS.spouseOf.get(personId);
        if (spouse)
            people.add(spouse);
        // parents via unions
        var parentUnions = new Set((_a = this.RELATIONS.parentsByChild.get(personId)) !== null && _a !== void 0 ? _a : []);
        parentUnions.forEach(function (u) { var _a; return ((_a = _this.RELATIONS.unionOf.get(u)) !== null && _a !== void 0 ? _a : []).forEach(function (p) { return people.add(p); }); });
        // children
        var kids = this.RELATIONS.childrenByParent.get(personId);
        if (kids)
            kids.forEach(function (k) { return people.add(k); });
        // unions tying hovered/spouse to children
        var unions = new Set(parentUnions);
        var spouseOrSelf = new Set(__spreadArray([personId], (spouse ? [spouse] : []), true));
        (kids !== null && kids !== void 0 ? kids : new Set()).forEach(function (childId) {
            var _a;
            var parents = (_a = _this.RELATIONS.parentsByChild.get(childId)) !== null && _a !== void 0 ? _a : [];
            parents.forEach(function (u) {
                var pair = _this.RELATIONS.unionOf.get(u);
                if (pair && (spouseOrSelf.has(pair[0]) || spouseOrSelf.has(pair[1]))) {
                    unions.add(u);
                }
            });
        });
        var nodeSet = new Set(people);
        unions.forEach(function (u) { return nodeSet.add(u); });
        return { people: people, nodeSet: nodeSet };
    };
    /* ===================== Template ===================== */
    FamilyTreeDiagram.prototype.getUpdatedTemplate = function (data, UI) {
        var _a, _b, _c, _d;
        var isOpen = !!UI.isOpen;
        var isDim = !!UI.isDimmed;
        var containerCls = [
            'person-node-container',
            isOpen ? 'is-open' : '',
            isDim ? 'is-dim' : ''
        ].filter(Boolean).join(' ');
        var name = (_a = data.Name) !== null && _a !== void 0 ? _a : '';
        var first = (_b = data.FirstName) !== null && _b !== void 0 ? _b : '';
        var tenure = (_c = data.Tenure) !== null && _c !== void 0 ? _c : '';
        var desc = (_d = data.Description) !== null && _d !== void 0 ? _d : '';
        return "\n<div class=\"".concat(containerCls, "\">\n  <div class=\"person-card\">\n    <div class=\"person-image-circle\">\n      ").concat(data.ImageUrl ? "<img src=\"".concat(data.ImageUrl, "\" class=\"person-image\" alt=\"").concat(name, "\" />") : '', "\n    </div>\n    <div class=\"person-header\">\n      <div class=\"person-full-name\">").concat(name, "</div>\n      <div class=\"person-first-name\">").concat(first, "</div>\n      <div class=\"person-tenure\">").concat(tenure, "</div>\n    </div>\n    <div class=\"person-bio\">").concat(desc, "</div>\n  </div>\n</div>");
    };
    /* ===================== Node Sizing ===================== */
    FamilyTreeDiagram.prototype.expandNodeWidth = function (id) {
        var _a;
        var diagram = this.diagramRef.current;
        if (!diagram)
            return;
        var node = diagram.getObject(id);
        if (!node || ((_a = node.data) === null || _a === void 0 ? void 0 : _a.Type) === 'Union')
            return;
        if (!this.originalSize.has(id)) {
            this.originalSize.set(id, { width: node.width, height: node.height });
        }
        node.width = HOVER_WIDTH;
    };
    FamilyTreeDiagram.prototype.restoreNodeSize = function (id) {
        var diagram = this.diagramRef.current;
        if (!diagram)
            return;
        var node = diagram.getObject(id);
        if (!node)
            return;
        var orig = this.originalSize.get(id);
        if (orig) {
            node.width = orig.width;
            node.height = orig.height;
        }
    };
    FamilyTreeDiagram.prototype.renderNode = function (id) {
        var _a, _b;
        var diagram = this.diagramRef.current;
        if (!diagram)
            return;
        var node = diagram.getObject(id);
        if (!node || ((_a = node.data) === null || _a === void 0 ? void 0 : _a.Type) === 'Union')
            return;
        var data = node.data;
        var UI = (_b = this.nodeState.get(id)) !== null && _b !== void 0 ? _b : {};
        node.shape = { type: 'HTML', content: this.getUpdatedTemplate(data, UI) };
    };
    /* ===================== Highlight Connectors ===================== */
    FamilyTreeDiagram.prototype.paintConnectors = function (nodeSet) {
        var diagram = this.diagramRef.current;
        if (!diagram)
            return;
        diagram.connectors.forEach(function (connector) {
            var sourceConn = connector.sourceID;
            var targetConn = connector.targetID;
            var hasRelations = !!(sourceConn && targetConn && nodeSet.has(sourceConn) && nodeSet.has(targetConn));
            connector.style = {
                strokeColor: hasRelations ? CONNECTOR_COLORS.highlightedConnector : CONNECTOR_COLORS.baseConnector,
                opacity: hasRelations ? 1 : 0.2
            };
        });
    };
    /* ===================== Hover logic ===================== */
    FamilyTreeDiagram.prototype.focusHover = function (id) {
        var _this = this;
        var diagram = this.diagramRef.current;
        if (!diagram)
            return;
        var _a = this.relatedSet(id), people = _a.people, nodeSet = _a.nodeSet;
        if (this.hoveredId && this.hoveredId !== id) {
            this.restoreNodeSize(this.hoveredId);
        }
        // Compute UI state for all person nodes
        diagram.nodes.forEach(function (n) {
            var _a;
            if (((_a = n.data) === null || _a === void 0 ? void 0 : _a.Type) === 'Union')
                return;
            var nodeId = String(n.id);
            var isDimmed = nodeId !== id && !people.has(nodeId);
            var isOpen = nodeId === id;
            _this.nodeState.set(nodeId, { isDimmed: isDimmed, isOpen: isOpen });
            _this.renderNode(nodeId); // rebuild HTML with classes baked in
        });
        this.expandNodeWidth(id);
        this.paintConnectors(nodeSet);
        this.hoveredId = id;
        diagram.dataBind();
    };
    FamilyTreeDiagram.prototype.render = function () {
        return (React.createElement("div", { className: "control-pane" },
            React.createElement("style", null, familytreeCss),
            React.createElement("div", { className: "control-section family-tree", style: { opacity: 0 } },
                React.createElement(ej2_react_diagrams_1.DiagramComponent, { id: "diagram", ref: this.diagramRef, width: '100%', height: '600px', snapSettings: { constraints: ej2_react_diagrams_1.SnapConstraints.None }, tool: ej2_react_diagrams_1.DiagramTools.ZoomPan, layout: this.layout, dataSourceSettings: this.dataSourceSettings, setNodeTemplate: this.setNodeTemplate, getConnectorDefaults: this.getConnectorDefaults, mouseEnter: this.onMouseEnter, mouseLeave: this.onMouseLeave, dataLoaded: this.ondataLoaded },
                    React.createElement(ej2_react_diagrams_1.Inject, { services: [ej2_react_diagrams_1.DataBinding, ej2_react_diagrams_1.ComplexHierarchicalTree] })),
                React.createElement("div", { id: "action-description" },
                    React.createElement("p", null,
                        "This sample showcases a family tree built with the ",
                        React.createElement("a", { href: "https://www.syncfusion.com/react-components/react-diagram", target: "_blank" }, "React Diagram"),
                        ", illustrating complex hierarchical relationships through customizable node templates, interactive hover details, and relation-based highlighting.")),
                React.createElement("div", { id: "description" },
                    React.createElement("p", null, "The diagram uses a complex hierarchical tree layout to automatically arrange family members in a clear, top-to-bottom structure. Each node is rendered using a custom HTML template that displays the individual\u2019s photo, name, and lifespan. On hover, the node expands to reveal relationship details, while related members are highlighted and all other nodes are dimmed to enhance focus.")))));
    };
    return FamilyTreeDiagram;
}(sample_base_1.SampleBase));
exports.default = FamilyTreeDiagram;
var familytreeCss = "\n/* Diagram surface */\n.family-tree {\n    background: #FFFFFF;\n}\n\n.family-tree .e-diagram {\n    background: transparent;\n}\n\n.family-tree #diagramcontent {\n    overflow: hidden !important;\n}\n\n/* ===================== Node base ===================== */\n.family-tree .person-node-container {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background: #FFDBD1;\n    border-radius: 10px;\n    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, .16);\n    box-sizing: border-box;\n    position: relative;\n    transition: opacity 0.5s ease;\n    will-change: transform;\n    user-select: none;\n}\n\n.family-tree .person-node-container:hover {\n    cursor: default !important;\n    background: #f5e1a7;\n}\n\n/* Dim state driven by template */\n.family-tree .person-node-container.is-dim {\n    opacity: 0.25;\n    filter: grayscale(50%);\n    transition: opacity 0.2s ease-out, filter 0.3s ease;\n}\n\n/* ===================== Open state driven by template ===================== */\n.family-tree .person-node-container.is-open .person-image-circle {\n    position: absolute;\n    top: 10px;\n    left: 10px;\n    margin: 0;\n    width: 80px;\n    height: 80px;\n}\n\n.family-tree .person-node-container.is-open .person-header {\n    text-align: left;\n    margin-left: 90px;\n}\n\n.family-tree .person-node-container.is-open .person-bio {\n    max-height: 200px;\n    opacity: 1;\n}\n\n.family-tree .person-node-container.is-open .person-full-name {\n    display: block;\n    font-size: 20px;\n    text-align: left;\n}\n\n.family-tree .person-node-container.is-open .person-first-name {\n    display: none;\n}\n\n.family-tree .person-node-container.is-open .person-tenure {\n    font-size: 16px;\n    text-align: left;\n}\n\n/* ===================== Card layout ===================== */\n.family-tree .person-card {\n    display: grid;\n    grid-template-rows: auto auto 1fr;\n    gap: 8.5px;\n    padding: 12px 8px 3px;\n    border-radius: 10px;\n    border: 2px solid #85736E;\n    height: 100%;\n    width: 100%;\n    position: relative;\n}\n\n/* ===================== Avatar ===================== */\n.family-tree .person-image-circle {\n    width: 98px;\n    height: 98px;\n    border-radius: 50%;\n    margin: 0 auto;\n    background: #f0f0f0;\n    border: 3px solid #FFFFFF;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n}\n\n.family-tree .person-image {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n\n/* ===================== Header/Text ===================== */\n.family-tree .person-header {\n    text-align: center;\n    line-height: 1.2;\n    position: relative;\n    z-index: 1;\n}\n\n.family-tree .person-first-name,\n.family-tree .person-full-name {\n    font-weight: 600;\n    font-size: 21px;\n    line-height: 1.2;\n    text-align: center;\n    color: #723523;\n}\n\n/* By default show first name only; full name appears when is-open */\n.family-tree .person-full-name {\n    display: none;\n}\n\n.family-tree .person-tenure {\n    font-size: 15px;\n    color: #53433F;\n    opacity: 0.85;\n    margin-top: 4px;\n    text-align: center;\n}\n\n/* ===================== Bio ===================== */\n.family-tree .person-bio {\n    color: #723523;\n    font-size: 18px;\n    line-height: 1.35;\n    max-height: 0;\n    overflow: hidden;\n    opacity: 0;\n    margin-left: 90px;\n    transition: opacity 0.2s ease;\n}\n\n/* ===================== Diagram visuals ===================== */\n\n/* Node width transition (diagram updates width on hover) */\n.family-tree [id$='_html_element'] {\n    transition: all 80ms ease;\n}\n\n/* Connector animation */\n.family-tree [id$='_path'] {\n    transition: opacity 0.4s ease, stroke 0.4s ease, stroke-width 0.4s ease;\n}";
