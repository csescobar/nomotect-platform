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
exports.PipelineInstrumentationDiagram = void 0;
// Import necessary modules and components from Syncfusion and React libraries.
var React = require("react");
var ej2_react_diagrams_1 = require("@syncfusion/ej2-react-diagrams");
var ej2_buttons_1 = require("@syncfusion/ej2-buttons");
var ej2_inputs_1 = require("@syncfusion/ej2-inputs");
var ej2_lineargauge_1 = require("@syncfusion/ej2-lineargauge");
var sample_base_1 = require("../common/sample-base");
// Enable required functionalities in the Diagram component.
ej2_lineargauge_1.LinearGauge.Inject(ej2_lineargauge_1.Annotations);
ej2_react_diagrams_1.Diagram.Inject(ej2_react_diagrams_1.UndoRedo, ej2_react_diagrams_1.ConnectorBridging);
// Declare variables to hold instances of the components.
var diagramInstance;
var numericBox;
var gauge;
var checkbox;
var checkValve1CloseBtn;
var checkValve2CloseBtn;
var checkValve3CloseBtn;
var diagramCreated = false;
// Global state variables
var tankFlow1 = true;
var tankFlow2 = true;
var tankFlow3 = true;
var pumpFlow = true;
var autoStopped = false;
var pressureInterval;
var inputTankOn = false;
var animationIntervals = {};
var gradualStopIntervals = {};
// System states - NEW ADDITIONS FROM JS SAMPLE
var isSystemLocked = false; // When pump is off, lock tank valves
var isStorageShutdown = false; // When storage is off but pump can still be controlled
// Gradient definitions for tanks
var tank1RadialGradient = {
    cx: 50, cy: 50, fx: 25, fy: 25, r: 50,
    stops: [{ color: 'white', offset: 0 }, { color: '#e88a25', offset: 100 }],
    type: 'Radial'
};
var tank2RadialGradient = {
    cx: 50, cy: 50, fx: 25, fy: 25, r: 50,
    stops: [{ color: 'white', offset: 0 }, { color: 'purple', offset: 100 }],
    type: 'Radial'
};
var tankGradientColor = {
    cx: 50, cy: 50, fx: 25, fy: 25, r: 50,
    stops: [{ color: 'white', offset: 0 }, { color: '#76b5c5', offset: 100 }],
    type: 'Radial'
};
var storagetankGradientColor = {
    cx: 50, cy: 50, fx: 50, fy: 50, r: 80,
    stops: [{ color: 'white', offset: 0 }, { color: '#CECECE', offset: 100 }],
    type: 'Radial'
};
// Main function to initialize the pipeline diagram
function initPipelineDiagram() {
    var nodes = [
        {
            id: 'Chemical', offsetX: 720, offsetY: 20,
            annotations: [{ content: 'Chemical Reactor System P&ID', style: { fontSize: 18, bold: true } }],
            shape: { type: 'Text' },
            constraints: ej2_react_diagrams_1.NodeConstraints.Default & ~ej2_react_diagrams_1.NodeConstraints.Select
        },
        {
            id: 'tank1Top', offsetX: 200, offsetY: 225, height: 50, width: 100,
            shape: { type: 'Basic', shape: 'Ellipse' },
            style: { gradient: tank1RadialGradient },
            constraints: ej2_react_diagrams_1.NodeConstraints.Default & ~ej2_react_diagrams_1.NodeConstraints.Select
        },
        {
            id: 'tank1Bottom', offsetX: 200, offsetY: 375, height: 50, width: 100,
            shape: { type: 'Basic', shape: 'Ellipse' },
            style: { gradient: tank1RadialGradient }
        },
        {
            id: 'tank1container', offsetX: 200, offsetY: 300, height: 150, width: 100,
            shape: { type: 'Basic', shape: 'Rectangle' },
            style: { gradient: tank1RadialGradient },
            annotations: [{ content: 'Tank1', style: { color: 'black' } }]
        },
        {
            id: 'Tank1Group',
            children: ['tank1Top', 'tank1Bottom', 'tank1container'],
            style: { fill: 'transparent', strokeColor: 'transparent', strokeWidth: 0 }
        },
        {
            id: 'tank2Top', offsetX: 370, offsetY: 225, height: 50, width: 100,
            shape: { type: 'Basic', shape: 'Ellipse' },
            style: { gradient: tank2RadialGradient }
        },
        {
            id: 'tank2Bottom', offsetX: 370, offsetY: 375, height: 50, width: 100,
            shape: { type: 'Basic', shape: 'Ellipse' },
            style: { gradient: tank2RadialGradient }
        },
        {
            id: 'tank2container', offsetX: 370, offsetY: 300, height: 150, width: 100,
            shape: { type: 'Basic', shape: 'Rectangle' },
            style: { gradient: tank2RadialGradient },
            annotations: [{ content: 'Tank2', style: { color: 'black' } }]
        },
        {
            id: 'Tank2Group',
            children: ['tank2Top', 'tank2Bottom', 'tank2container'],
            style: { fill: 'transparent', strokeColor: 'transparent', strokeWidth: 0 }
        },
        {
            id: 'tank3Top', offsetX: 750, offsetY: 325, height: 70, width: 170,
            shape: { type: 'Basic', shape: 'Ellipse' },
            style: { gradient: tankGradientColor }
        },
        {
            id: 'tank3Bottom', offsetX: 750, offsetY: 575, height: 70, width: 170,
            shape: { type: 'Basic', shape: 'Ellipse' },
            style: { gradient: tankGradientColor }
        },
        {
            id: 'reacterInletThread1', offsetX: 810, offsetY: 290,
            shape: { type: 'Flow', shape: 'Data' }, height: 25, width: 35,
            rotateAngle: 10, style: { fill: '#469A22' }
        },
        {
            id: 'reacterInletThread2', offsetX: 750, offsetY: 278,
            shape: { type: 'Basic', shape: 'Rectangle' }, height: 25, width: 15,
            style: { fill: '#656764' }
        },
        {
            id: 'reacterInletThread3', offsetX: 750, offsetY: 268,
            shape: { type: 'Basic', shape: 'Rectangle' }, height: 10, width: 25,
            style: { fill: '#656764' }
        },
        {
            id: 'pressureGuageNode', offsetX: 600, offsetY: 130, style: { fill: 'green' }, height: 70, width: 70,
            shape: {
                type: 'HTML',
                content: "<div class=\"pressure-container\" style=\"width:100%;height:100%\">\n                    <div class=\"pressure-indicator\">\n                        <div class=\"pressure-gauge\">\n                            <div class=\"needle\" id=\"needle\"></div>\n                        </div>\n                        <div class=\"pressure-value\" id=\"pressureValue\"> 0 PSI</div>\n                    </div>\n                </div>"
            }
        },
        {
            id: 'pumpBase', offsetX: 750, offsetY: 110,
            shape: { type: 'Flow', shape: 'SequentialAccessStorage' }, height: 100, width: 100,
            rotateAngle: 90, flip: ej2_react_diagrams_1.FlipDirection.Vertical, style: { fill: '#E2EAF4' }
        },
        {
            id: 'pumpBody', offsetX: 750, offsetY: 110,
            shape: { type: 'Flow', shape: 'SequentialAccessStorage' }, height: 90, width: 90,
            rotateAngle: 90, style: { fill: '#E2EAF4' }
        },
        {
            id: 'pumpRotator', offsetX: 750, offsetY: 110, height: 50, width: 50,
            shape: {
                type: 'HTML',
                content: "<div style=\"display:flex;left: -25px;position: absolute;\">\n                    <div class=\"pump-container\">\n                        <div class=\"pump-body\"></div>\n                        <div class=\"fan-blades\" id=\"fan\">\n                            <div class=\"blade\"></div>\n                            <div class=\"blade\"></div>\n                            <div class=\"hub\"></div>\n                        </div>\n                    </div>\n                    <div id=\"pumpCheckBoxContainer\">\n                        <input id=\"pumpCheckBox\" type=\"checkbox\"/>\n                    </div>\n                </div>"
            }
        },
        {
            id: 'pumpGroup',
            children: ['pumpBase', 'pumpBody', 'pumpRotator'],
            style: { fill: 'transparent', strokeColor: 'transparent', strokeWidth: 0 }
        },
        {
            id: 'tank3container', offsetX: 750, offsetY: 450, height: 250, width: 170,
            shape: { type: 'Basic', shape: 'Rectangle' },
            style: { gradient: tankGradientColor },
            annotations: [{ content: 'STIRRED TANK \nREACTOR (STR)', style: { color: 'black', fontSize: 20, bold: true, italic: true } }]
        },
        {
            id: 'tank3cooler', offsetX: 750, offsetY: 490, height: 250, width: 185,
            shape: { type: 'Basic', shape: 'Rectangle', cornerRadius: 50 },
            style: { fill: "#3D58B0" }
        },
        {
            id: 'Tank3Group',
            children: ['tank3cooler', 'tank3Top', 'tank3Bottom', 'tank3container'],
            style: { fill: 'transparent', strokeColor: 'transparent', strokeWidth: 0 }
        },
        {
            id: 'coolantcontroller', offsetX: 500, offsetY: 650, height: 70, width: 150,
            annotations: [{
                    content: 'Coolant Controller',
                    style: { color: 'Orange', fontSize: 15, italic: true, bold: true },
                    offset: { x: 0.5, y: 0.8 }
                }],
            shape: { type: 'Flow', shape: 'Card' },
            style: { fill: "#656874" }
        },
        {
            id: 'coolantValue', offsetX: 500, offsetY: 650, height: 60, width: 100,
            shape: {
                type: 'HTML',
                content: "<div><input id=\"numeric\" type=\"text\"/></div>"
            },
            style: { fill: "#656874" }
        },
        {
            id: 'thermometerNode', offsetX: 920, offsetY: 600, height: 100, width: 100,
            shape: {
                type: 'HTML',
                content: "<div style=\"width:100%;height:100%\"><div id=\"thermometer\"></div></div>"
            },
            style: { fill: "#656874" }
        },
        {
            id: 'controlvalve1', offsetX: 450, offsetY: 100,
            shape: { type: 'Flow', shape: 'Process' }, height: 20, width: 10,
            style: { fill: '#65B091' }
        },
        {
            id: 'controlvalve2', offsetX: 420, offsetY: 115,
            shape: { type: 'Flow', shape: 'Process' }, height: 25, width: 10,
            style: { fill: '#65B091' }
        },
        {
            id: 'controlvalve3', offsetX: 450, offsetY: 115,
            shape: { type: 'Flow', shape: 'Process' }, height: 20, width: 50,
            style: { fill: '#65B091' }
        },
        {
            id: 'controlvalve4', offsetX: 480, offsetY: 115,
            shape: { type: 'Flow', shape: 'Process' }, height: 25, width: 10,
            style: { fill: '#65B091' }
        },
        {
            id: 'controlvalve5', offsetX: 450, offsetY: 90,
            shape: { type: 'Basic', shape: 'Ellipse' }, height: 5, width: 35,
            style: { fill: '#65B091' }
        },
        {
            id: 'controlvalveBox1', offsetX: 450, offsetY: 115, height: 15, width: 35,
            shape: {
                type: 'HTML',
                content: "<div style=\"height:100%;width:100%\">\n                    <div id=\"showFlowContainer1\" style=\"background:#ffb734;height:100%;width:100%;border-radius: 3px;border:1px solid\">\n                    </div>\n                    <div class=\"switch-container\">\n                        <div id=\"switch-buttons1\">\n                        </div>\n                    </div>\n                </div>"
            },
            style: { fill: '#65B091' }
        },
        {
            id: 'controlValveGroup1',
            children: ['controlvalve1', 'controlvalve2', 'controlvalve3', 'controlvalve4', 'controlvalve5', 'controlvalveBox1'],
            offsetX: 270, offsetY: 500,
            style: { fill: 'transparent', strokeColor: 'transparent', strokeWidth: 0 }
        },
        {
            id: 'controlvalve6', offsetX: 450, offsetY: 100,
            shape: { type: 'Flow', shape: 'Process' }, height: 20, width: 10,
            style: { fill: '#65B091' }
        },
        {
            id: 'controlvalve7', offsetX: 420, offsetY: 115,
            shape: { type: 'Flow', shape: 'Process' }, height: 25, width: 10,
            style: { fill: '#65B091' }
        },
        {
            id: 'controlvalve8', offsetX: 450, offsetY: 115,
            shape: { type: 'Flow', shape: 'Process' }, height: 20, width: 50,
            style: { fill: '#65B091' }
        },
        {
            id: 'controlvalve9', offsetX: 480, offsetY: 115,
            shape: { type: 'Flow', shape: 'Process' }, height: 25, width: 10,
            style: { fill: '#65B091' }
        },
        {
            id: 'controlvalve10', offsetX: 450, offsetY: 90,
            shape: { type: 'Basic', shape: 'Ellipse' }, height: 5, width: 35,
            style: { fill: '#65B091' }
        },
        {
            id: 'controlvalveBox2', offsetX: 450, offsetY: 115, height: 15, width: 35,
            shape: {
                type: 'HTML',
                content: "<div style=\"height:100%;width:100%\">\n                   <div id=\"showFlowContainer2\" style=\"background:#7C099C;height:100%;width:100%;border-radius: 3px;border:1px solid\">\n                   </div>\n                   <div class=\"switch-container\">\n                        <div id=\"switch-buttons2\">  </div>\n                   </div>\n               </div>"
            },
            style: { fill: '#65B091' }
        },
        {
            id: 'controlValveGroup2',
            children: ['controlvalve6', 'controlvalve7', 'controlvalve8', 'controlvalve9', 'controlvalve10', 'controlvalveBox2'],
            offsetX: 450, offsetY: 130,
            style: { fill: 'transparent', strokeColor: 'transparent', strokeWidth: 0 }
        },
        {
            id: 'reacterOutletThread1', offsetX: 855, offsetY: 407.5,
            shape: { type: 'Basic', shape: 'Rectangle' }, height: 25, width: 15,
            style: { fill: '#C9B100' }
        },
        {
            id: 'reacterOutletThread2', offsetX: 845, offsetY: 407.5,
            shape: { type: 'Basic', shape: 'Rectangle' }, height: 35, width: 25,
            style: { fill: '#C9B100' }
        },
        {
            id: 'controlvalve11', offsetX: 450, offsetY: 100,
            shape: { type: 'Flow', shape: 'Process' }, height: 20, width: 10,
            style: { fill: '#65B091' }
        },
        {
            id: 'controlvalve12', offsetX: 420, offsetY: 115,
            shape: { type: 'Flow', shape: 'Process' }, height: 25, width: 10,
            style: { fill: '#65B091' }
        },
        {
            id: 'controlvalve13', offsetX: 450, offsetY: 115,
            shape: { type: 'Flow', shape: 'Process' }, height: 20, width: 50,
            style: { fill: '#65B091' }
        },
        {
            id: 'controlvalve14', offsetX: 480, offsetY: 115,
            shape: { type: 'Flow', shape: 'Process' }, height: 25, width: 10,
            style: { fill: '#65B091' }
        },
        {
            id: 'controlvalve15', offsetX: 450, offsetY: 90,
            shape: { type: 'Basic', shape: 'Ellipse' }, height: 5, width: 35,
            style: { fill: '#65B091' }
        },
        {
            id: 'controlvalveBox3', offsetX: 450, offsetY: 115, height: 15, width: 35,
            shape: {
                type: 'HTML',
                content: "<div style=\"height:100%;width:100%\">\n                   <div id=\"showFlowContainer3\" style=\"background:red;height:100%;width:100%;border-radius: 3px;border:1px solid\">\n                   </div>\n                   <div class=\"switch-container\"> \n                        <div id=\"switch-buttons3\">\n                        </div>\n                   </div>\n               </div>"
            },
            style: { fill: '#65B091' }
        },
        {
            id: 'controlValveGroup3',
            children: ['controlvalve11', 'controlvalve12', 'controlvalve13', 'controlvalve14', 'controlvalve15', 'controlvalveBox3'],
            offsetX: 970, offsetY: 400,
            style: { fill: 'transparent', strokeColor: 'transparent', strokeWidth: 0 }
        },
        {
            id: 'mixer1', shape: { type: 'Basic', shape: 'Octagon' },
            offsetX: 550, offsetY: 230, height: 70, width: 70,
            annotations: [{ content: 'Mixer' }],
            style: {
                gradient: {
                    cx: 50, cy: 50, fx: 25, fy: 25, r: 50,
                    stops: [{ color: 'white', offset: 0 }, { color: '#415086', offset: 100 }],
                    type: 'Radial'
                }
            }
        },
        {
            id: 'temperatureAlarm', offsetX: 680, offsetY: 292, height: 30, width: 30,
            annotations: [{ content: "TA", rotationReference: 'Page', style: { bold: true } }],
            shape: { type: 'Flow', shape: 'DirectData' }, rotateAngle: 245,
            style: {
                gradient: {
                    cx: 50, cy: 50, fx: 25, fy: 25, r: 50,
                    stops: [{ color: 'white', offset: 0 }, { color: '#EA8257', offset: 100 }],
                    type: 'Radial'
                }
            }
        },
        {
            id: 'leveltransmitter', offsetX: 800, offsetY: 350, height: 30, width: 50,
            shape: { type: 'Flow', shape: 'Process' }, style: { fill: '#79247D' },
            annotations: [{ content: '54 L', style: { color: 'gold', bold: true } }]
        },
        {
            id: 'productInletThread1', offsetX: 1200, offsetY: 500,
            shape: { type: 'Basic', shape: 'Rectangle' }, height: 10, width: 30,
            style: { fill: '#D47A39' }
        },
        {
            id: 'ProductTank', offsetX: 1200, offsetY: 600, height: 200, width: 200,
            shape: { type: 'Flow', shape: 'PreDefinedProcess' },
            style: { gradient: storagetankGradientColor },
            annotations: [
                { content: "Storage", offset: { x: 0.5, y: 0.1 } },
                { content: 'Tank', offset: { x: 0.5, y: 0.9 } }
            ]
        },
        {
            id: 'ProductTankQuantity', offsetX: 1200, offsetY: 600, height: 130, width: 100,
            shape: {
                type: "HTML",
                content: "<div class=\"product-container\"><div class=\"product\" id=\"productStorage\"></div></div>"
            }
        },
        {
            id: 'pressureguage', offsetX: 1000, offsetY: 115, height: 10, width: 10,
            shape: {
                type: 'HTML',
                content: "<div style:\"height:50px;width:50px\"><div id=\"gauge1\"></div></div>"
            },
            style: { fill: '#65B091' }
        }
    ];
    var connectors = [
        {
            id: 'Connector1', sourceID: 'Tank1Group', targetID: 'controlvalve2',
            sourcePortID: "bottomPort", targetPortID: "inletLeftPort",
            style: { strokeColor: 'orange', strokeDashArray: '5,5' },
            addInfo: { animate: true }
        },
        {
            id: 'Connector2', sourceID: 'Tank2Group', targetID: 'controlvalve7',
            sourcePortID: "topPort", targetPortID: "inletLeftPort",
            style: { strokeColor: '#7C099C' },
            addInfo: { animate: true }
        },
        {
            id: 'Connector3', sourceID: 'controlvalve4', targetID: 'mixer1',
            sourcePortID: "outletRightPort", targetPortID: "bottomPort",
            style: { strokeColor: 'orange' },
            addInfo: { animate: true }
        },
        {
            id: 'Connector4', sourceID: 'controlvalve9', targetID: 'mixer1',
            sourcePortID: "outletRightPort", targetPortID: "topPort",
            style: { strokeColor: '#7C099C' },
            addInfo: { animate: true }
        },
        {
            id: 'Connector5', sourceID: 'coolantcontroller', targetID: 'tank3cooler',
            sourcePortID: "outletRightPort", targetPortID: "inletLeftPort",
            style: { strokeColor: 'blue' }
        },
        {
            id: 'Connector6', sourceID: 'coolantcontroller', targetID: 'tank3cooler',
            sourcePortID: "inletLeftPort", targetPortID: "bottomPort",
            style: { strokeColor: '#d6185bff' }
        },
        {
            id: 'Connector9', sourceID: 'reacterOutletThread1', targetID: 'controlvalve12',
            sourcePortID: "outletRightPort", targetPortID: "inletLeftPort",
            style: { strokeColor: 'red' },
            addInfo: { animate: true }
        },
        {
            id: 'Connector10', sourceID: 'controlvalve14', targetID: 'productInletThread1',
            sourcePortID: "outletRightPort", targetPortID: "topPort",
            style: { strokeColor: 'red' },
            addInfo: { animate: true }
        },
        {
            id: 'Connector11', sourceID: 'mixer1', targetID: 'pumpBase',
            sourcePortID: "outletRightPort", targetPortID: "pumpPort1",
            style: { strokeColor: '#8DC276' },
            addInfo: { animate: true }
        },
        {
            id: 'Connector12', sourceID: 'pumpBase', targetID: 'reacterInletThread1',
            sourcePortID: "pumpPort2", targetPortID: "topPort",
            style: { strokeColor: '#8DC276' },
            addInfo: { animate: true }
        },
        {
            id: 'Connector13', sourceID: 'mixer1', targetID: 'pressureGuageNode',
            sourcePortID: "mixertopressureport", targetPortID: "pressuretomixerport",
            style: { strokeColor: 'black', strokeWidth: 1, strokeDashArray: '5,1' }
        },
        {
            id: 'Connector14', sourceID: 'Tank3Group', targetID: 'thermometerNode',
            sourcePortID: "tankport10", targetPortID: "thermoPort",
            style: { strokeColor: 'black', strokeWidth: 1, strokeDashArray: '5,1' }
        }
    ];
    return { nodes: nodes, connectors: connectors };
}
// Function to set default values for nodes in the diagram
function getNodeDefaults(node) {
    node.ports = getPorts(node.id);
    node.constraints = (ej2_react_diagrams_1.NodeConstraints.Default | ej2_react_diagrams_1.NodeConstraints.ReadOnly) & ~ej2_react_diagrams_1.NodeConstraints.Select;
    node.addInfo = { valve: true };
    return node;
}
// Function to get ports based on node ID
function getPorts(nodeId) {
    var ports = [];
    if (nodeId !== "controlvalveBox1") {
        var stacticPorts = [
            { id: 'inletLeftPort', offset: { x: 0, y: 0.5 }, visibility: ej2_react_diagrams_1.PortVisibility.Hidden },
            { id: 'outletRightPort', offset: { x: 1, y: 0.5 }, visibility: ej2_react_diagrams_1.PortVisibility.Hidden },
            { id: 'topPort', offset: { x: 0.5, y: 0 }, visibility: ej2_react_diagrams_1.PortVisibility.Hidden },
            { id: 'bottomPort', offset: { x: 0.5, y: 1 }, visibility: ej2_react_diagrams_1.PortVisibility.Hidden }
        ];
        ports = stacticPorts;
        if (nodeId === "tank1") {
            ports.push({ id: 'tankPort1', offset: { x: 1, y: 0.2 }, visibility: ej2_react_diagrams_1.PortVisibility.Visible }, { id: 'tankPort2', offset: { x: 1, y: 0.8 }, visibility: ej2_react_diagrams_1.PortVisibility.Visible });
        }
        else if (nodeId === "mixer1") {
            ports.push({ id: 'mixertopressureport', offset: { x: 0.94, y: 0.1 }, visibility: ej2_react_diagrams_1.PortVisibility.Hidden });
        }
        else if (nodeId === "pressureGuageNode") {
            ports.push({ id: 'pressuretomixerport', offset: { x: 0.7, y: 0.5 }, visibility: ej2_react_diagrams_1.PortVisibility.Hidden });
        }
        else if (nodeId === "thermometerNode") {
            ports.push({ id: 'thermoPort', offset: { x: 0.2, y: 0.3 }, visibility: ej2_react_diagrams_1.PortVisibility.Hidden });
        }
        else if (nodeId === "Tank3Group") {
            ports.push({ id: 'tankport10', offset: { x: 0.97, y: 0.8 }, visibility: ej2_react_diagrams_1.PortVisibility.Hidden });
        }
        else if (nodeId === "pumpBase") {
            ports.push({ id: 'pumpPort1', offset: { x: 0.94, y: 0.1 }, visibility: ej2_react_diagrams_1.PortVisibility.Hidden }, { id: 'pumpPort2', offset: { x: 0.97, y: 0.95 }, visibility: ej2_react_diagrams_1.PortVisibility.Hidden });
        }
    }
    return ports;
}
// Function to set default values for connectors in the diagram
function getConnectorDefaults(connector) {
    connector.type = 'Orthogonal';
    connector.cornerRadius = 3;
    if (connector.id === "Connector5" || connector.id === "Connector6") {
        connector.style = { strokeWidth: 5, strokeDashArray: "10,1" };
    }
    else {
        connector.style = { strokeWidth: 10 };
    }
    connector.targetDecorator = { shape: "None" };
    if (connector.id === "Connector13" || connector.id === "Connector14") {
        connector.style = { strokeWidth: 2, strokeDashArray: "10,1" };
        connector.type = "Straight";
    }
    return connector;
}
// Function to append HTML elements for controls
function appendHTMLElements() {
    appendTemperatureControl();
    setTimeout(function () {
        appendvalveControls();
    }, 10);
    addPumpCheckBox();
    appendCollantValue();
}
// Function to append valve controls
function appendvalveControls() {
    var valveButtons = ['valveButton1', 'valveButton2', 'valveButton3'];
    var switchContainers = ['switch-buttons1', 'switch-buttons2', 'switch-buttons3'];
    // Cleanup existing components
    valveButtons.forEach(function (id, index) {
        var _a;
        var existingInput = document.getElementById(id);
        if (existingInput) {
            var switchInstance = (_a = existingInput.ej2_instances) === null || _a === void 0 ? void 0 : _a[0];
            if (switchInstance && switchInstance instanceof ej2_buttons_1.Switch) {
                switchInstance.destroy();
            }
            existingInput.remove();
        }
        var switchContainer = document.getElementById(switchContainers[index]);
        if (switchContainer) {
            while (switchContainer.firstChild) {
                switchContainer.firstChild.remove();
            }
        }
    });
    // Valve 1
    var newInput1 = document.createElement('input');
    newInput1.type = 'checkbox';
    newInput1.id = 'valveButton1';
    var container1 = document.getElementById('switch-buttons1');
    if (container1)
        container1.appendChild(newInput1);
    checkValve1CloseBtn = new ej2_buttons_1.Switch({
        checked: true,
        change: function (args) {
            if (isSystemLocked && args.checked) {
                isSystemLocked = false;
                inputTankOn = true;
                setTimeout(function () { return inputTankOn = false; }, 2000);
                startUpPump();
                startUpStorage();
            }
            valveStateClick1(args.checked ? 'Open' : 'Close');
        }
    });
    checkValve1CloseBtn.appendTo('#valveButton1');
    // Valve 2
    var newInput2 = document.createElement('input');
    newInput2.type = 'checkbox';
    newInput2.id = 'valveButton2';
    var container2 = document.getElementById('switch-buttons2');
    if (container2)
        container2.appendChild(newInput2);
    checkValve2CloseBtn = new ej2_buttons_1.Switch({
        checked: true,
        change: function (args) {
            if (isSystemLocked && args.checked) {
                isSystemLocked = false;
                inputTankOn = true;
                setTimeout(function () { return inputTankOn = false; }, 2000);
                startUpPump();
                startUpStorage();
            }
            valveStateClick2(args.checked ? 'Open' : 'Close');
        }
    });
    checkValve2CloseBtn.appendTo('#valveButton2');
    // Valve 3
    var newInput3 = document.createElement('input');
    newInput3.type = 'checkbox';
    newInput3.id = 'valveButton3';
    var container3 = document.getElementById('switch-buttons3');
    if (container3)
        container3.appendChild(newInput3);
    checkValve3CloseBtn = new ej2_buttons_1.Switch({
        checked: true,
        change: function (args) {
            if (!args.checked) {
                // Storage valve manually closed - shut down pump if running
                if (checkbox && checkbox.checked) {
                    checkbox.toggle(); // This will trigger shutDownPump()
                }
                shutDownStorage();
            }
            else {
                // Storage valve manually opened
                if (isSystemLocked || isStorageShutdown) {
                    // If system was locked, restart the entire system
                    startUpSystemFromStorage();
                }
                else if (pumpFlow && !isSystemLocked) {
                    // Normal operation - just start storage
                    startUpStorage();
                }
            }
            valveStateClick3(args.checked ? 'Open' : 'Close');
        }
    });
    checkValve3CloseBtn.appendTo('#valveButton3');
}
// Function to update valve state with enhanced logic
function updateValveState(flow, text, valveNumber) {
    if (!flow)
        return;
    if (text === "Close") {
        flow.style.background = "#e5e7eb";
        switch (flow.id) {
            case 'showFlowContainer1':
                tankFlow1 = false;
                animatePathFlow("Connector1_path", false, '#ffb734', true);
                setTimeout(function () {
                    animatePathFlow("Connector3_path", false, "#A7A2A2", true);
                }, 500);
                break;
            case 'showFlowContainer2':
                tankFlow2 = false;
                animatePathFlow("Connector2_path", false, '#7C099C', true);
                setTimeout(function () {
                    animatePathFlow("Connector4_path", false, "#A7A2A2", true);
                }, 500);
                break;
            case 'showFlowContainer3':
                tankFlow3 = false;
                animatePathFlow("Connector9_path", false, 'red', true);
                setTimeout(function () {
                    animatePathFlow("Connector10_path", false, "#A7A2A2", true);
                }, 500);
                startStorageAnimation(false);
                break;
        }
        // Check if both tank valves are closed
        if (valveNumber && valveNumber <= 2) {
            checkTankValveShutdown();
        }
    }
    else if (text === "Open") {
        // Check conditions for opening valves
        var canOpen = false;
        var valveNum = valveNumber || (flow.id === 'showFlowContainer1' ? 1 :
            flow.id === 'showFlowContainer2' ? 2 : 3);
        if (valveNum <= 2) {
            // Tank valves can only open if pump is running and system is not locked
            canOpen = pumpFlow && !isSystemLocked && !isStorageShutdown;
        }
        else if (valveNum === 3) {
            // Storage valve can open if pump is running and system is not locked
            canOpen = pumpFlow && !isSystemLocked;
        }
        if (canOpen) {
            switch (flow.id) {
                case 'showFlowContainer1':
                    tankFlow1 = true;
                    flow.style.background = "#ffb734";
                    animatePathFlow("Connector1_path", true, '#ffb734');
                    setTimeout(function () {
                        animatePathFlow("Connector3_path", true, "#ffb734");
                    }, 100);
                    break;
                case 'showFlowContainer2':
                    tankFlow2 = true;
                    flow.style.background = "#7C099C";
                    animatePathFlow("Connector2_path", true, '#7C099C');
                    setTimeout(function () {
                        animatePathFlow("Connector4_path", true, "#7C099C");
                    }, 100);
                    break;
                case 'showFlowContainer3':
                    tankFlow3 = true;
                    flow.style.background = "red";
                    animatePathFlow("Connector9_path", true, 'red');
                    setTimeout(function () {
                        animatePathFlow("Connector10_path", true, "red");
                    }, 100);
                    startStorageAnimation(true);
                    break;
            }
        }
    }
    checkFlowState();
}
// Valve control functions
function valveStateClick1(action) {
    var flow = document.getElementById("showFlowContainer1");
    updateValveState(flow, action, 1);
}
function valveStateClick2(action) {
    var flow = document.getElementById("showFlowContainer2");
    updateValveState(flow, action, 2);
}
function valveStateClick3(action) {
    var flow = document.getElementById("showFlowContainer3");
    updateValveState(flow, action, 3);
}
// Function to run animations
function runAnimation() {
    addFlowAnimationClass();
    startConnectorAnimation();
    startPumpAnimation(true);
    startStorageAnimation(true);
    updatePressureAnimation(false);
}
// Function to add flow animation class
function addFlowAnimationClass() {
    var style = document.createElement('style');
    style.textContent = "\n        @keyframes dashFlow {\n            to { stroke-dashoffset: -15; }\n        }\n        .flow-animation {\n            stroke-dasharray: 10, 10 !important;\n            stroke-dashoffset: 0 !important;\n            animation: dashFlow 1s linear infinite !important;\n        }\n    ";
    document.head.appendChild(style);
}
// Function to start pump animation
function startPumpAnimation(start) {
    var pumpElement = document.getElementById('fan');
    if (pumpElement) {
        if (start) {
            pumpElement.classList.add('rotate-animation');
        }
        else {
            pumpElement.classList.remove('rotate-animation');
        }
    }
}
// Function to start storage animation
function startStorageAnimation(on) {
    var storageElement = document.getElementById('productStorage');
    if (!storageElement)
        return;
    if (on) {
        storageElement.classList.remove('fill-animation', 'paused');
        void storageElement.offsetWidth;
        storageElement.classList.add('fill-animation');
    }
    else {
        storageElement.classList.add('paused');
    }
}
// Function to convert hex to RGB
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) }
        : { r: 0, g: 0, b: 0 };
}
// Function to animate path flow - ENHANCED WITH BETTER CLEANUP
function animatePathFlow(pathId, animate, color, slow) {
    var dashArray = "10,5";
    var speed = 30;
    var path = document.getElementById(pathId);
    if (!path)
        return;
    // **FIRST: Clean up any existing intervals for this path**
    if (animationIntervals[pathId]) {
        clearInterval(animationIntervals[pathId]);
        delete animationIntervals[pathId];
    }
    if (gradualStopIntervals[pathId]) {
        clearInterval(gradualStopIntervals[pathId]);
        delete gradualStopIntervals[pathId];
    }
    if (animate) {
        var offsetAnim_1 = 0;
        path.setAttribute("stroke", color);
        path.setAttribute("stroke-dasharray", dashArray);
        var intervalId = window.setInterval(function () {
            offsetAnim_1 = (offsetAnim_1 - 1) % 1000;
            path.setAttribute("stroke-dashoffset", offsetAnim_1.toString());
        }, speed);
        animationIntervals[pathId] = intervalId;
    }
    else {
        if (slow) {
            var currentColor = path.getAttribute('stroke') || color;
            var offsetStop_1 = parseFloat(path.getAttribute("stroke-dashoffset") || "0");
            var step_1 = 0;
            var steps_1 = 30;
            var duration = 1000;
            var interval = duration / steps_1;
            var startColor_1 = hexToRgb(currentColor);
            var endColor_1 = hexToRgb(currentColor);
            gradualStopIntervals[pathId] = window.setInterval(function () {
                step_1++;
                offsetStop_1 = (offsetStop_1 - 1) % 1000;
                path.setAttribute("stroke-dashoffset", offsetStop_1.toString());
                var progress = step_1 / steps_1;
                var r = Math.round(startColor_1.r + (endColor_1.r - startColor_1.r) * progress);
                var g = Math.round(startColor_1.g + (endColor_1.g - startColor_1.g) * progress);
                var b = Math.round(startColor_1.b + (endColor_1.b - startColor_1.b) * progress);
                path.setAttribute("stroke", color);
                if (step_1 >= steps_1) {
                    // **CRITICAL: Complete cleanup when animation finishes**
                    clearInterval(gradualStopIntervals[pathId]);
                    delete gradualStopIntervals[pathId];
                    path.setAttribute("stroke", color); // Final color
                    path.setAttribute("stroke-dasharray", "none");
                    path.setAttribute("stroke-dashoffset", "0"); // Reset offset
                }
            }, interval);
        }
        else {
            // Immediate stop
            path.setAttribute("stroke", color || "black");
            path.setAttribute("stroke-dasharray", "none");
            path.setAttribute("stroke-dashoffset", "0");
        }
    }
}
// Function to start connector animation
function startConnectorAnimation() {
    var diagramConnectors = diagramInstance.connectors;
    for (var i = 0; i < diagramConnectors.length; i++) {
        var currentConnector = diagramConnectors[i];
        var sourceNode = diagramInstance.getObject(currentConnector.sourceID);
        if (sourceNode && sourceNode.addInfo) {
            var isValveOpen = sourceNode.addInfo.valve;
            if (isValveOpen && currentConnector.addInfo && (currentConnector).addInfo.animate) {
                animatePathFlow(currentConnector.id + "_path", true, currentConnector.style.strokeColor);
            }
        }
    }
}
// Function to append coolant value control
function appendCollantValue() {
    if (numericBox) {
        numericBox.destroy();
    }
    numericBox = new ej2_inputs_1.NumericTextBox({
        min: -50,
        max: 75,
        value: 12,
        step: 2,
        format: '##.##',
        change: function (args) {
            gauge.axes[0].pointers[0].value = 28 + args.value;
            gauge.axes[0].pointers[0].color = getColorFromTemperature(28 + args.value);
        }
    });
    numericBox.appendTo('#numeric');
}
// Function to add pump checkbox
function addPumpCheckBox() {
    if (checkbox) {
        checkbox.destroy();
    }
    checkbox = new ej2_buttons_1.Switch({
        checked: true,
        change: onCheckBoxChange
    });
    checkbox.appendTo('#pumpCheckBox');
}
// Function to append temperature control
function appendTemperatureControl() {
    if (gauge) {
        gauge.destroy();
    }
    gauge = new ej2_lineargauge_1.LinearGauge({
        height: "120px",
        container: {
            width: 4,
            height: 100,
            roundedCornerRadius: 5,
            type: 'Thermometer',
            border: { width: 1 }
        },
        background: 'transparent',
        axes: [{
                minimum: -20,
                maximum: 100,
                pointers: [{
                        value: 40,
                        height: 10,
                        width: 4,
                        placement: 'Center',
                        offset: 0,
                        markerType: 'Triangle',
                        color: '#2674a5ff',
                        type: 'Bar'
                    }],
                line: { width: 0 },
                majorTicks: { height: 7, interval: 30 },
                minorTicks: { height: 0, interval: 5 },
                labelStyle: { font: { fontFamily: 'inherit' } }
            }],
        annotations: [{
                content: '<div style="font-size:13px;margin-left: 30px;margin-top: -50px;"> ^C </div>',
                axisIndex: 0,
                axisValue: 50,
                x: 0,
                y: 0,
                zIndex: '1'
            }]
    });
    gauge.appendTo('#thermometer');
}
// Function to get color from temperature
function getColorFromTemperature(value) {
    if (value < 30)
        return 'cyan';
    if (value < 60)
        return 'blue';
    if (value < 80)
        return 'orange';
    return 'red';
}
// Function to handle checkbox change - ENHANCED WITH SYSTEM LOGIC
function onCheckBoxChange(args) {
    if (args.checked) {
        startUpPump();
    }
    else {
        // Pump manually turned OFF
        shutDownPump();
    }
}
// ===== CORE SYSTEM LOGIC FUNCTIONS - FROM JS SAMPLE =====
function shutDownPump() {
    isSystemLocked = true;
    pumpFlow = false;
    // Stop pump animations
    startPumpAnimation(false);
    updatePressureAnimation(true);
    animatePathFlow("Connector11_path", false, '#A7A2A2', true);
    setTimeout(function () {
        animatePathFlow("Connector12_path", false, "#A7A2A2", true);
    }, 500);
    setTimeout(function () {
        if (checkValve3CloseBtn && checkValve3CloseBtn.checked) {
            checkValve3CloseBtn.toggle();
        }
    }, 600);
    setTimeout(function () {
        // Close all valves including storage valve when pump shuts down
        if (checkValve1CloseBtn && checkValve1CloseBtn.checked) {
            checkValve1CloseBtn.toggle();
        }
        if (checkValve2CloseBtn && checkValve2CloseBtn.checked) {
            checkValve2CloseBtn.toggle();
        }
    }, 700);
}
function startUpPump() {
    isSystemLocked = false; // Important: Reset system lock when pump starts
    isStorageShutdown = false; // Reset storage shutdown state
    pumpFlow = true;
    // Start pump animations
    startPumpAnimation(true);
    updatePressureAnimation(false);
    animatePathFlow("Connector11_path", true, '#8DC276');
    setTimeout(function () {
        animatePathFlow("Connector12_path", true, "#8DC276", true);
    }, 500);
    setTimeout(function () {
        if (checkValve1CloseBtn && !checkValve1CloseBtn.checked && !inputTankOn) {
            checkValve1CloseBtn.toggle();
        }
        if (checkValve2CloseBtn && !checkValve2CloseBtn.checked && !inputTankOn) {
            checkValve2CloseBtn.toggle();
        }
    }, 600);
    setTimeout(function () {
        if (checkValve3CloseBtn && !checkValve3CloseBtn.checked) {
            checkValve3CloseBtn.toggle();
        }
        if (checkbox && !checkbox.checked) {
            checkbox.toggle();
        }
    }, 700);
    autoStopped = false;
}
function shutDownStorage() {
    isStorageShutdown = true;
    // Stop storage animations
    animatePathFlow("Connector9_path", false, 'red', true);
    setTimeout(function () {
        animatePathFlow("Connector10_path", false, "#A7A2A2", true);
    }, 500);
    startStorageAnimation(false);
}
function startUpStorage() {
    isStorageShutdown = false;
    animatePathFlow("Connector9_path", true, 'red');
    setTimeout(function () {
        animatePathFlow("Connector10_path", true, "red");
    }, 500);
    startStorageAnimation(true);
}
// NEW FUNCTION: Start entire system from storage valve
function startUpSystemFromStorage() {
    if (checkbox && !checkbox.checked) {
        checkbox.toggle();
    }
    if (checkValve1CloseBtn && !checkValve1CloseBtn.checked) {
        checkValve1CloseBtn.toggle();
    }
    if (checkValve2CloseBtn && !checkValve2CloseBtn.checked) {
        checkValve2CloseBtn.toggle();
    }
    animatePathFlow("Connector9_path", true, 'red');
    setTimeout(function () {
        animatePathFlow("Connector10_path", true, "red");
    }, 500);
    startStorageAnimation(true);
    isSystemLocked = false;
    isStorageShutdown = false;
}
function checkTankValveShutdown() {
    // If both tank valves are manually closed, shut down entire system
    if (!tankFlow1 && !tankFlow2 && pumpFlow) {
        if (checkbox && checkbox.checked) {
            checkbox.toggle();
        }
        if (checkValve3CloseBtn && checkValve3CloseBtn.checked) {
            checkValve3CloseBtn.toggle();
        }
    }
}
// Function to check flow state
function checkFlowState() {
    if (!pumpFlow && tankFlow1 && tankFlow2) {
        autoStopped = true;
        setTimeout(function () {
            var flow1 = document.getElementById("showFlowContainer1");
            updateValveState(flow1, "Close");
            var flow2 = document.getElementById("showFlowContainer2");
            updateValveState(flow2, "Close");
        }, 3000);
    }
}
// Function to update pressure animation
function updatePressureAnimation(highPressureMode) {
    if (pressureInterval) {
        clearInterval(pressureInterval);
    }
    pressureInterval = setInterval(function () {
        var randomPressure;
        if (highPressureMode) {
            randomPressure = Math.floor(Math.random() * 16) + 90;
        }
        else {
            randomPressure = Math.floor(Math.random() * 21) + 20;
        }
        updatePressure(randomPressure);
    }, 2000);
}
// Function to update pressure
function updatePressure(psi) {
    var needle = document.getElementById('needle');
    var valueDisplay = document.getElementById('pressureValue');
    if (needle && valueDisplay) {
        psi = Math.max(0, Math.min(psi, 100));
        var angle = -90 + (psi / 100) * 90;
        needle.style.transform = "rotate(".concat(angle, "deg)");
        valueDisplay.textContent = "".concat(psi, " PSI");
    }
}
// PipelineInstrumentationDiagram component renders a pipeline diagram using React Diagram.
var PipelineInstrumentationDiagram = /** @class */ (function (_super) {
    __extends(PipelineInstrumentationDiagram, _super);
    function PipelineInstrumentationDiagram() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pipelineModel = initPipelineDiagram();
        _this.getNodeDefaults = function (node) {
            return getNodeDefaults(node);
        };
        _this.getConnectorDefaults = function (connector) {
            return getConnectorDefaults(connector);
        };
        return _this;
    }
    PipelineInstrumentationDiagram.prototype.render = function () {
        return (React.createElement("div", { className: "control-pane" },
            React.createElement("div", { className: "control-section diagram-pipeline", style: { width: "100%", opacity: 0 } },
                React.createElement("style", null, "\n                            .diagram-pipeline .product-container {\n                                width: 100px;\n                                height: 130px;\n                                border: 2px solid #000;\n                                position: relative;\n                                overflow: hidden;\n                            }\n\n                            .diagram-pipeline .product {\n                                background-color: red;\n                                width: 100%;\n                                height: 0;\n                                position: absolute;\n                                bottom: 0;\n                                animation-fill-mode: forwards;\n                            }\n\n                            .diagram-pipeline .fill-animation {\n                                animation: fillStorage 40s ease-in infinite forwards;\n                                animation-play-state: running;\n                            }\n\n                            .diagram-pipeline .fill-animation.paused {\n                                animation-play-state: paused;\n                            }\n\n                            @keyframes fillStorage {\n                                from {\n                                    height: 0;\n                                }\n                                to {\n                                    height: 100%;\n                                }\n                            }\n\n                            .diagram-pipeline .pump-container {\n                                width: 100%;\n                                height: 100%;\n                                position: relative;\n                                left: 25px;\n                            }\n\n                            .diagram-pipeline .pump-body {\n                                width: 60px;\n                                height: 60px;\n                                background: radial-gradient(circle, #5c5c5c 0%, #2c2c2c 100%);\n                                border-radius: 50%;\n                                position: absolute;\n                                top: -5px;\n                                left: -5px;\n                                border: 5px solid #4a4a4a;\n                                box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.8);\n                            }\n\n                            .diagram-pipeline .fan-blades {\n                                position: relative;\n                                margin-top: 43%;\n                                left: 40%;\n                                transform: translate(-50%, -50%);\n                                width: 60px;\n                                height: 40px;\n                            }\n\n                            .diagram-pipeline .rotate-animation {\n                                animation: rotateFanBlade 2s linear infinite;\n                            }\n\n                            .diagram-pipeline .blade {\n                                position: absolute;\n                                width: 15px;\n                                height: 50px;\n                                background: linear-gradient(to bottom, #bbb 0%, #888 100%);\n                                top: calc(50% - 25px);\n                                left: calc(50% - 7.5px);\n                                border-radius: 8px;\n                                transform-origin: center calc(100% - 25px);\n                            }\n\n                            .diagram-pipeline .blade:nth-child(1) {\n                                transform: rotate(0deg);\n                            }\n\n                            .diagram-pipeline .blade:nth-child(2) {\n                                transform: rotate(90deg);\n                            }\n\n                            .diagram-pipeline .blade:nth-child(3) {\n                                transform: rotate(180deg);\n                            }\n\n                            .diagram-pipeline .blade:nth-child(4) {\n                                transform: rotate(270deg);\n                            }\n\n                            .diagram-pipeline .hub {\n                                position: absolute;\n                                top: 50%;\n                                left: 50%;\n                                transform: translate(-50%, -50%);\n                                width: 20px;\n                                height: 20px;\n                                background: radial-gradient(circle, #aaa 0%, #666 100%);\n                                border-radius: 50%;\n                                z-index: 10;\n                            }\n\n                            @keyframes rotateFanBlade {\n                                0% {\n                                    transform: translate(-50%, -50%) rotate(0deg);\n                                }\n                                100% {\n                                    transform: translate(-50%, -50%) rotate(360deg);\n                                }\n                            }\n\n                            .diagram-pipeline .pressure-container {\n                                display: flex;\n                            }\n\n                            .diagram-pipeline .pressure-indicator {\n                                text-align: center;\n                            }\n\n                            .diagram-pipeline .pressure-gauge {\n                                position: relative;\n                                width: 70px;\n                                height: 40px;\n                                background: #ddd;\n                                border-top-left-radius: 100px;\n                                border-top-right-radius: 100px;\n                                border: 1px solid black;\n                                margin: auto;\n                                overflow: hidden;\n                            }\n\n                            .diagram-pipeline .needle {\n                                width: 4px;\n                                height: 70px;\n                                background: red;\n                                transition: transform 0.5s ease-in-out;\n                                margin-left: 33px;\n                                margin-top: 5px;\n                            }\n\n                            .diagram-pipeline .pressure-value {\n                                font-size: 12px;\n                                margin-top: 10px;\n                                margin-left: 20px;\n                                color: #111827 !important;\n                            }\n\n                            .diagram-pipeline .switch-buttons {\n                                display: block;\n                                margin-top: 3px;\n                            }\n\n                            .diagram-pipeline .switch-container {\n                                left: -10px;\n                                top: 20px;\n                                position: absolute;\n                            }\n\n                            .diagram-pipeline #pumpCheckBoxContainer {\n                                position: relative;\n                                top: 80px;\n                                left: -35px;\n                            }\n                        "),
                React.createElement(ej2_react_diagrams_1.DiagramComponent, { id: "diagram", ref: function (diagram) { return (diagramInstance = diagram); }, width: '100%', height: '700px', nodes: this.pipelineModel.nodes, connectors: this.pipelineModel.connectors, tool: ej2_react_diagrams_1.DiagramTools.ZoomPan, snapSettings: { constraints: ej2_react_diagrams_1.SnapConstraints.None }, getNodeDefaults: this.getNodeDefaults, getConnectorDefaults: this.getConnectorDefaults, created: function () {
                        diagramCreated = true;
                        appendHTMLElements();
                        diagramInstance.fitToPage({ canZoomOut: true });
                        // show diagram
                        setTimeout(function () {
                            var container = document.querySelector('.diagram-pipeline');
                            if (container) {
                                container.style.opacity = '1';
                            }
                        }, 10);
                        setTimeout(function () {
                            runAnimation();
                            diagramCreated = true;
                        }, 500);
                    }, load: function () {
                        if (diagramCreated && diagramInstance) {
                            setTimeout(function () {
                                diagramInstance.fitToPage({ canZoomOut: true });
                                appendHTMLElements();
                                runAnimation();
                            });
                        }
                    } },
                    React.createElement(ej2_react_diagrams_1.Inject, { services: [ej2_react_diagrams_1.UndoRedo, ej2_react_diagrams_1.ConnectorBridging] }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null,
                    "This sample visualizes a real-time chemical reactor system as an interactive Pipeline and Instrumentation Diagram (P&ID) using the ",
                    React.createElement("a", { href: "https://www.syncfusion.com/react-components/react-diagram", target: "_blank" }, "React Diagram"),
                    ", showcasing dynamic fluid flows, tank levels, pressure, and temperature.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null, "Users actively control valve operations and pump states to observe real-time fluid flow, tank level changes, dynamic pressure and temperature visualizations. Interactive toggles manage fluid flow between tanks, simulating operational conditions within an industrial process environment."),
                React.createElement("br", null))));
    };
    return PipelineInstrumentationDiagram;
}(sample_base_1.SampleBase));
exports.PipelineInstrumentationDiagram = PipelineInstrumentationDiagram;
