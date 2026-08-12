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
exports.SequenceDiagram = void 0;
// Import necessary modules and components from Syncfusion and React libraries.
var React = require("react");
var ej2_react_diagrams_1 = require("@syncfusion/ej2-react-diagrams");
var sample_base_1 = require("../common/sample-base");
// Enable Undo and Redo functionality in the Diagram component.
ej2_react_diagrams_1.Diagram.Inject(ej2_react_diagrams_1.UndoRedo);
// Declare a variable to hold the instance of the DiagramComponent.
var diagramInstance;
var sequenceModel = {
    // Space between each participant in the diagram
    spaceBetweenParticipants: 250,
    // List of participants in the sequence diagram
    participants: [
        {
            id: "User",
            content: "User",
            // Indicates that User is an actor
            stereotype: ej2_react_diagrams_1.UmlSequenceParticipantStereotype.Actor
        },
        {
            id: "Transaction",
            content: "Transaction",
            // Activation periods for the Transaction participant
            stereotype: ej2_react_diagrams_1.UmlSequenceParticipantStereotype.Control,
            activationBoxes: [
                { id: "act1", startMessageID: 'msg1', endMessageID: 'msg4' }
            ]
        },
        {
            id: "FraudDetectionSystem",
            content: "Fraud Detection System",
            // Activation periods for the Fraud Detection System participant
            stereotype: ej2_react_diagrams_1.UmlSequenceParticipantStereotype.Entity,
            activationBoxes: [
                { id: "act2", startMessageID: 'msg2', endMessageID: 'msg3' },
                { id: "act3", startMessageID: 'msg5', endMessageID: 'msg6' }
            ]
        }
    ],
    // List of messages exchanged between participants
    messages: [
        { id: 'msg1', content: "Initiate Transaction", fromParticipantID: "User", toParticipantID: "Transaction", type: ej2_react_diagrams_1.UmlSequenceMessageType.Synchronous },
        { id: 'msg2', content: "Send Transaction Data", fromParticipantID: "Transaction", toParticipantID: "FraudDetectionSystem", type: ej2_react_diagrams_1.UmlSequenceMessageType.Synchronous },
        { id: 'msg3', content: "Validate Transaction", fromParticipantID: "FraudDetectionSystem", toParticipantID: "Transaction", type: ej2_react_diagrams_1.UmlSequenceMessageType.Reply },
        { id: 'msg4', content: "Transaction Approved", fromParticipantID: "Transaction", toParticipantID: "User", type: ej2_react_diagrams_1.UmlSequenceMessageType.Asynchronous },
        { id: 'msg5', content: "Flag Transaction", fromParticipantID: "Transaction", toParticipantID: "FraudDetectionSystem", type: ej2_react_diagrams_1.UmlSequenceMessageType.Synchronous },
        { id: 'msg6', content: "Fraud Detected", fromParticipantID: "FraudDetectionSystem", toParticipantID: "User", type: ej2_react_diagrams_1.UmlSequenceMessageType.Reply },
        { id: 'msg7', content: "Cancel Transaction", fromParticipantID: "User", toParticipantID: "Transaction", type: ej2_react_diagrams_1.UmlSequenceMessageType.Synchronous },
        { id: 'msg8', content: "Complete Transaction", fromParticipantID: "User", toParticipantID: "Transaction", type: ej2_react_diagrams_1.UmlSequenceMessageType.Synchronous }
    ],
    // Conditional fragments within the sequence
    fragments: [
        {
            id: 1,
            // Represents alternative fragment
            type: ej2_react_diagrams_1.UmlSequenceFragmentType.Alternative,
            conditions: [
                // Condition when fraud is detected
                {
                    // Content of condition
                    content: "Fraud Detected",
                    // Messages part of this condition
                    messageIds: ['msg5', 'msg6', 'msg7']
                },
                {
                    content: "No Fraud Detected",
                    messageIds: ['msg8']
                }
            ]
        }
    ]
};
// SequenceDiagram component renders a UML sequence diagram using React Diagram.
var SequenceDiagram = /** @class */ (function (_super) {
    __extends(SequenceDiagram, _super);
    function SequenceDiagram() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SequenceDiagram.prototype.render = function () {
        return (React.createElement("div", { className: "control-pane diagram-control-pane" },
            React.createElement("div", null,
                React.createElement(ej2_react_diagrams_1.DiagramComponent, { id: "diagram", ref: function (diagram) { return (diagramInstance = diagram); }, width: '100%', height: '700px', model: sequenceModel, tool: ej2_react_diagrams_1.DiagramTools.ZoomPan, created: function () {
                        // Fit the diagram to the page on creation.
                        diagramInstance.fitToPage();
                    }, getNodeDefaults: function (node) {
                        // activation node
                        if (node.data instanceof ej2_react_diagrams_1.UmlSequenceActivationBox) {
                            node.style = { fill: 'orange', strokeColor: 'orange' };
                        }
                    }, getConnectorDefaults: function (connector) {
                        var message = sequenceModel.messages.find(function (message) {
                            return message.id === connector.id;
                        });
                        // Style the connector if it corresponds to a message
                        if (message) {
                            connector.targetDecorator.style = { fill: '#489ECC', strokeColor: '#489ECC' };
                            connector.style = { strokeColor: '#489ECC', strokeWidth: 2 };
                        }
                    }, snapSettings: { constraints: ej2_react_diagrams_1.SnapConstraints.None } },
                    React.createElement(ej2_react_diagrams_1.Inject, { services: [ej2_react_diagrams_1.UndoRedo] }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null,
                    "This sample presents a UML sequence diagram created with the ",
                    React.createElement("a", { href: "https://www.syncfusion.com/react-components/react-diagram", target: "_blank" }, "React Diagram"),
                    " component to visualize interactions in a secure transaction process involving a user, transaction system, and fraud detection system.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "This sample demonstrates how to build a UML sequence diagram using the diagram's ",
                    React.createElement("code", null, "model"),
                    " property. The ",
                    React.createElement("code", null, "UmlSequenceDiagramModel"),
                    " type provides a structured approach to defining key elements such as participants, messages, activation boxes, and interaction fragments. The diagram highlights interactions between key participants such as the User, Transaction and Fraud Detection System. Each participant is represented using ",
                    React.createElement("code", null, "stereotype"),
                    " such as ",
                    React.createElement("strong", null, "Actor"),
                    ",",
                    React.createElement("strong", null, "Control"),
                    " and ",
                    React.createElement("strong", null, "Entity"),
                    " to clearly convey its role within the system."),
                React.createElement("br", null))));
    };
    return SequenceDiagram;
}(sample_base_1.SampleBase));
exports.SequenceDiagram = SequenceDiagram;
