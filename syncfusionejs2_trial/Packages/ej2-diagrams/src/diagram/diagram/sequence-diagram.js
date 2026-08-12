/**
 * Represents the model to create a sequence diagram.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ConnectorConstraints, NodeConstraints, PortVisibility } from '../enum/enum';
import { Rect } from '../primitives/rect';
import { Node } from '../objects/node';
import { Connector } from '../objects/connector';
import { ShapeAnnotation, PathPort, PointPort, randomId } from '../index';
import { ChildProperty, Collection, Property } from '@syncfusion/ej2-base';
/**
 * Defines the types of messages used in UML sequence diagrams.
 * Each type determines the style and semantics of the message line.
 */
export var UmlSequenceMessageType;
(function (UmlSequenceMessageType) {
    /** A synchronous message, typically a method call that waits for a response. */
    UmlSequenceMessageType["Synchronous"] = "Synchronous";
    /** An asynchronous message, such as an event or signal that does not wait for a response. */
    UmlSequenceMessageType["Asynchronous"] = "Asynchronous";
    /** A reply message, representing the return from a synchronous call. */
    UmlSequenceMessageType["Reply"] = "Reply";
    /** A create message, used to indicate the instantiation of a new participant. */
    UmlSequenceMessageType["Create"] = "Create";
    /** A delete message, indicating the termination of a participant's lifeline. */
    UmlSequenceMessageType["Delete"] = "Delete";
    /** A self-message, where the sender and receiver are the same participant. */
    UmlSequenceMessageType["Self"] = "Self";
})(UmlSequenceMessageType || (UmlSequenceMessageType = {}));
/**
 * Defines the types of fragments supported in a UML sequence diagram.
 */
export var UmlSequenceFragmentType;
(function (UmlSequenceFragmentType) {
    /** Represents a conditional alternative (e.g., if/else branches). */
    UmlSequenceFragmentType["Alternative"] = "Alternative";
    /** Represents a loop fragment (e.g., for, while). */
    UmlSequenceFragmentType["Loop"] = "Loop";
    /** Represents an optional interaction (e.g., an optional message flow). */
    UmlSequenceFragmentType["Optional"] = "Optional";
})(UmlSequenceFragmentType || (UmlSequenceFragmentType = {}));
/**
 * Specifies the visual stereotype used to represent a participant in a UML sequence diagram.
 *
 * The stereotype determines the shape and semantic meaning of the participant
 * header (for example, actor, boundary, control, entity, or database).
 *
 */
export var UmlSequenceParticipantStereotype;
(function (UmlSequenceParticipantStereotype) {
    /**
     * Represents a standard object participant.
     *
     * The participant is rendered as a labelled rectangular box.
     */
    UmlSequenceParticipantStereotype["Default"] = "Default";
    /**
     * Represents an actor that interacts with the system.
     *
     * The participant is rendered as a UML actor, typically shown as a stick
     * figure above the lifeline. This is equivalent to the Mermaid `actor`
     * participant type.
     */
    UmlSequenceParticipantStereotype["Actor"] = "Actor";
    /**
     * Represents a boundary object or system interface.
     *
     * Use this stereotype for elements such as user interfaces, API gateways,
     * or external-facing system boundaries. The participant is rendered using
     * the UML boundary symbol.
     *
     * This is equivalent to Mermaid `@{ type: "boundary" }`.
     */
    UmlSequenceParticipantStereotype["Boundary"] = "Boundary";
    /**
     * Represents a control object.
     *
     * Use this stereotype for coordinator, controller, or workflow objects that
     * manage interactions between participants. The participant is rendered
     * using the UML control symbol.
     *
     * This is equivalent to Mermaid `@{ type: "control" }`.
     */
    UmlSequenceParticipantStereotype["Control"] = "Control";
    /**
     * Represents an entity object.
     *
     * Use this stereotype for passive data, domain, or persistent objects.
     * The participant is rendered using the UML entity symbol.
     *
     * This is equivalent to Mermaid `@{ type: "entity" }`.
     */
    UmlSequenceParticipantStereotype["Entity"] = "Entity";
    /**
     * Represents a database or persistent storage system.
     *
     * The participant is rendered as a cylindrical database shape,
     * commonly used for storage services or data repositories.
     *
     * Equivalent to Mermaid syntax: `@{ type: "database" }`.
     */
    UmlSequenceParticipantStereotype["Database"] = "Database";
})(UmlSequenceParticipantStereotype || (UmlSequenceParticipantStereotype = {}));
/**
 * Defines the line style for a message connector in a UML sequence diagram.
 *
 * @remarks
 * When `UmlSequenceMessage.lineStyle` is set, it overrides the line style that
 * would normally be derived from `UmlSequenceMessage.type`. When not set,
 * the default line style for the message type is used:
 * - Synchronous, Asynchronous, Create, Delete → Solid
 * - Reply → Dashed
 *
 * @private
 */
export var UmlSequenceMessageLineStyle;
(function (UmlSequenceMessageLineStyle) {
    /**
     * A continuous solid line.
     * Typical for synchronous method calls and activation messages.
     */
    UmlSequenceMessageLineStyle["Solid"] = "Solid";
    /**
     * A dashed (dotted) line.
     * Typical for reply messages and asynchronous responses.
     */
    UmlSequenceMessageLineStyle["Dashed"] = "Dashed";
})(UmlSequenceMessageLineStyle || (UmlSequenceMessageLineStyle = {}));
/**
 * Defines the arrowhead shape at one end of a message line in a UML sequence diagram.
 *
 * Used by `UmlSequenceMessage.sourceArrow` and `UmlSequenceMessage.targetArrow`.
 *
 * @remarks
 * - `sourceArrow` controls the arrowhead at the **sending** end of the message.
 * - `targetArrow` controls the arrowhead at the **receiving** end.
 *
 * ### Mermaid target-side mappings
 *
 * - None: `->`
 * - Arrow: `->>`
 * - OpenArrow: `-)`
 * - Cross: `-x`
 * - TopHalfArrow: `-|\`
 * - BottomHalfArrow: `-|/`
 * - TopStickHalfArrow: `-\`
 * - BottomStickHalfArrow: `-//`
 *
 * ### Mermaid source-side mappings
 *
 * - TopHalfArrow: `/|-`
 * - BottomHalfArrow: `\|-`
 * - TopStickHalfArrow: `//-`
 * - BottomStickHalfArrow: `\\-`
 *
 * @private
 */
export var UmlSequenceMessageArrowShape;
(function (UmlSequenceMessageArrowShape) {
    /** No arrowhead. When both source and target are `None`, a plain line is rendered. */
    UmlSequenceMessageArrowShape["None"] = "None";
    /**
     * Standard filled arrowhead (`>>`).
     * When set on both source and target, renders a bidirectional arrow (`<<->>`).
     */
    UmlSequenceMessageArrowShape["Arrow"] = "Arrow";
    /**
     * Open (outline) arrowhead — rendered as a parenthesis `)`.
     * Equivalent to Mermaid `--)` for asynchronous/open messages.
     */
    UmlSequenceMessageArrowShape["OpenArrow"] = "OpenArrow";
    /**
     * Cross/X terminator — rendered at the endpoint as a crossing mark.
     * Typically used to indicate message loss or termination.
     * Equivalent to Mermaid `-x`.
     */
    UmlSequenceMessageArrowShape["Cross"] = "Cross";
    /**
     * Top-half filled arrowhead — a filled triangle occupying the upper half of the arrow space.
     * Equivalent to Mermaid `-|\`.
     */
    UmlSequenceMessageArrowShape["TopHalfArrow"] = "TopHalfArrow";
    /**
     * Bottom-half filled arrowhead — a filled triangle occupying the lower half of the arrow space.
     * Equivalent to Mermaid `-|/`.
     */
    UmlSequenceMessageArrowShape["BottomHalfArrow"] = "BottomHalfArrow";
    /**
     * Top-half open (stick) arrowhead — an open line occupying the upper half of the arrow space.
     * Equivalent to Mermaid `-\\` (single backslash in the rendered arrow).
     */
    UmlSequenceMessageArrowShape["TopStickHalfArrow"] = "TopStickHalfArrow";
    /**
     * Bottom-half open (stick) arrowhead — an open line occupying the lower half of the arrow space.
     * Equivalent to Mermaid `-//`.
     */
    UmlSequenceMessageArrowShape["BottomStickHalfArrow"] = "BottomStickHalfArrow";
})(UmlSequenceMessageArrowShape || (UmlSequenceMessageArrowShape = {}));
var MermaidConnectorType;
(function (MermaidConnectorType) {
    MermaidConnectorType["Solid"] = "Solid";
    MermaidConnectorType["Dashed"] = "Dashed";
    MermaidConnectorType["SolidArrow"] = "SolidArrow";
    MermaidConnectorType["DashedArrow"] = "DashedArrow";
    MermaidConnectorType["Bidirectional"] = "Bidirectional";
    MermaidConnectorType["DashedBidirectional"] = "DashedBidirectional";
    MermaidConnectorType["OpenArrow"] = "OpenArrow";
    MermaidConnectorType["DashedOpenArrow"] = "DashedOpenArrow";
    MermaidConnectorType["SolidCross"] = "SolidCross";
    MermaidConnectorType["DashedCross"] = "DashedCross";
    // Half-arrow types
    MermaidConnectorType["SolidHalfArrowTop"] = "SolidHalfArrowTop";
    MermaidConnectorType["DashedHalfArrowTop"] = "DashedHalfArrowTop";
    MermaidConnectorType["SolidHalfArrowBottom"] = "SolidHalfArrowBottom";
    MermaidConnectorType["DashedHalfArrowBottom"] = "DashedHalfArrowBottom";
    MermaidConnectorType["SolidReverseHalfArrowTop"] = "SolidReverseHalfArrowTop";
    MermaidConnectorType["DashedReverseHalfArrowTop"] = "DashedReverseHalfArrowTop";
    MermaidConnectorType["SolidStickHalfArrowTop"] = "SolidStickHalfArrowTop";
    MermaidConnectorType["DashedStickHalfArrowTop"] = "DashedStickHalfArrowTop";
    MermaidConnectorType["SolidStickHalfArrowBottom"] = "SolidStickHalfArrowBottom";
    MermaidConnectorType["DashedStickHalfArrowBottom"] = "DashedStickHalfArrowBottom";
    MermaidConnectorType["SolidReverseStickHalfArrowTop"] = "SolidReverseStickHalfArrowTop";
    MermaidConnectorType["DashedReverseStickHalfArrowTop"] = "DashedReverseStickHalfArrowTop";
    MermaidConnectorType["SolidReverseStickHalfArrowBottom"] = "SolidReverseStickHalfArrowBottom";
    MermaidConnectorType["DashedReverseStickHalfArrowBottom"] = "DashedReverseStickHalfArrowBottom";
})(MermaidConnectorType || (MermaidConnectorType = {}));
/**
 * Registry mapping participant stereotypes to their visual configurations.
 *
 * Contains entries for:
 * - 6 UML stereotypes: boundary, control, entity, database, collections, queue
 * - 2 legacy shapes: __actor (stick figure), __rectangle (default object)
 *
 * The registry is used by the shape selection logic to determine how to render
 * each participant based on its stereotype type.
 */
var SHAPE_REGISTRY = new Map([
    ['boundary', {
            svgPath: 'M1.5 16L14.5 16M1.5 16L1.5 12M1.5 16L1.5 20M14.5 16C14.5 20.4183 18.0818 24 22.5001 24C26.9184 24 30.5001 20.4183 30.5001 16C30.5001 11.5817 26.9184 8 22.5001 8C18.0818 8 14.5 11.5817 14.5 16Z',
            width: 100,
            height: 50
        }],
    ['control', {
            svgPath: 'M14 6.5L13.7572 6.06292C13.5984 6.15111 13.5 6.31842 13.5 6.5C13.5 6.68158 13.5984 6.84889 13.7572 6.93708L14 6.5ZM23 1.5L23.4287 1.75725C23.5452 1.56317 23.5167 1.31507 23.3594 1.15239C23.202 0.9897 22.955 0.953005 22.7572 1.06292L23 1.5ZM23 11.5L22.7572 11.9371C22.955 12.047 23.202 12.0103 23.3594 11.8476C23.5167 11.6849 23.5452 11.4368 23.4287 11.2428L23 11.5ZM20 6.5L19.5713 6.24275C19.4762 6.40109 19.4762 6.59891 19.5713 6.75725L20 6.5ZM29 18H28.5C28.5 24.3513 23.3513 29.5 17 29.5V30V30.5C23.9036 30.5 29.5 24.9036 29.5 18H29ZM17 30V29.5C10.6487 29.5 5.5 24.3513 5.5 18H5H4.5C4.5 24.9036 10.0964 30.5 17 30.5V30ZM5 18H5.5C5.5 12.5468 9.29614 7.97896 14.3905 6.79723L14.2775 6.31016L14.1645 5.82309C8.62709 7.1076 4.5 12.0712 4.5 18H5ZM20.2473 6.44455L20.1123 6.92598C24.9519 8.28321 28.5 12.7279 28.5 18H29H29.5C29.5 12.268 25.6422 7.43823 20.3823 5.96313L20.2473 6.44455ZM14 6.5L14.2428 6.93708L23.2428 1.93708L23 1.5L22.7572 1.06292L13.7572 6.06292L14 6.5ZM14 6.5L13.7572 6.93708L22.7572 11.9371L23 11.5L23.2428 11.0629L14.2428 6.06292L14 6.5ZM23 11.5L23.4287 11.2428L20.4287 6.24275L20 6.5L19.5713 6.75725L22.5713 11.7572L23 11.5ZM20 6.5L20.4287 6.75725L23.4287 1.75725L23 1.5L22.5713 1.24275L19.5713 6.24275L20 6.5Z'
        }],
    ['entity', {
            svgPath: 'M2 29L30 29M29 16C29 23.1797 23.1797 29 16 29C8.8203 29 3 23.1797 3 16C3 8.8203 8.8203 3 16 3C23.1797 3 29 8.8203 29 16Z'
        }],
    ['database', {
            svgPath: 'M29 5C29 6.65685 23.1797 8 16 8C8.8203 8 3 6.65685 3 5M29 5C29 3.34315 23.1797 2 16 2C8.8203 2 3 3.34315 3 5M29 5V27C29 28.6569 23.1797 30 16 30C8.8203 30 3 28.6569 3 27V5M29 15C29 16.6569 23.1797 18 16 18C8.8203 18 3 16.6569 3 15'
        }],
    ['collections', {
            svgPath: 'M4.5 10.5V7.5H30.5V21.5H27.5M1.5 24.5V10.5H27.5V24.5H1.5Z'
        }],
    ['queue', {
            svgPath: 'M28 8L4 8C2.61929 8 1.5 11.5817 1.5 16C1.5 20.4183 2.61929 24 4 24H28M28 8C29.3807 8 30.5 11.5817 30.5 16C30.5 20.4183 29.3807 24 28 24M28 8C26.6193 8 25.5 11.5817 25.5 16C25.5 20.4183 26.6193 24 28 24'
        }]
]);
//#region UmlSequenceDiagram
/**
 * Represents an activation box (focus of control) in the UML sequence diagram.
 * Activation boxes indicate the duration a participant is actively processing messages.
 */
var UmlSequenceActivationBox = /** @class */ (function (_super) {
    __extends(UmlSequenceActivationBox, _super);
    function UmlSequenceActivationBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Property(undefined)
    ], UmlSequenceActivationBox.prototype, "id", void 0);
    __decorate([
        Property(undefined)
    ], UmlSequenceActivationBox.prototype, "startMessageID", void 0);
    __decorate([
        Property(undefined)
    ], UmlSequenceActivationBox.prototype, "endMessageID", void 0);
    return UmlSequenceActivationBox;
}(ChildProperty));
export { UmlSequenceActivationBox };
/**
 * Represents a participant (lifeline) in a UML sequence diagram.
 *
 * A participant is any entity that takes part in a message exchange,
 * such as an object, actor, or external system.
 */
var UmlSequenceParticipant = /** @class */ (function (_super) {
    __extends(UmlSequenceParticipant, _super);
    function UmlSequenceParticipant() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * @private
         * @default 100
         */
        _this.width = 100;
        /**
         * @private
         * @default 100
         */
        _this.height = 50;
        return _this;
    }
    __decorate([
        Property(undefined)
    ], UmlSequenceParticipant.prototype, "id", void 0);
    __decorate([
        Property('')
    ], UmlSequenceParticipant.prototype, "content", void 0);
    __decorate([
        Property(false)
    ], UmlSequenceParticipant.prototype, "isActor", void 0);
    __decorate([
        Property(undefined)
    ], UmlSequenceParticipant.prototype, "stereotype", void 0);
    __decorate([
        Property(false)
    ], UmlSequenceParticipant.prototype, "showDestructionMarker", void 0);
    __decorate([
        Collection([], UmlSequenceActivationBox)
    ], UmlSequenceParticipant.prototype, "activationBoxes", void 0);
    return UmlSequenceParticipant;
}(ChildProperty));
export { UmlSequenceParticipant };
/**
 * Represents a message (interaction) between two participants in a UML sequence diagram.
 * Messages define the communication flow, such as method calls or replies, between lifelines.
 */
var UmlSequenceMessage = /** @class */ (function (_super) {
    __extends(UmlSequenceMessage, _super);
    function UmlSequenceMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Property(undefined)
    ], UmlSequenceMessage.prototype, "id", void 0);
    __decorate([
        Property(undefined)
    ], UmlSequenceMessage.prototype, "fromParticipantID", void 0);
    __decorate([
        Property(undefined)
    ], UmlSequenceMessage.prototype, "toParticipantID", void 0);
    __decorate([
        Property('')
    ], UmlSequenceMessage.prototype, "content", void 0);
    __decorate([
        Property('Synchronous')
    ], UmlSequenceMessage.prototype, "type", void 0);
    return UmlSequenceMessage;
}(ChildProperty));
export { UmlSequenceMessage };
/**
 * Represents a single condition within a UML sequence fragment.
 * Each condition includes a description and references to the messages or sub-fragments it controls.
 */
var UmlSequenceFragmentCondition = /** @class */ (function (_super) {
    __extends(UmlSequenceFragmentCondition, _super);
    function UmlSequenceFragmentCondition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Property('')
    ], UmlSequenceFragmentCondition.prototype, "content", void 0);
    __decorate([
        Property([])
    ], UmlSequenceFragmentCondition.prototype, "messageIds", void 0);
    __decorate([
        Property(undefined)
    ], UmlSequenceFragmentCondition.prototype, "fragmentIds", void 0);
    return UmlSequenceFragmentCondition;
}(ChildProperty));
export { UmlSequenceFragmentCondition };
/**
 * Represents a fragment in a UML sequence diagram.
 * Fragments define conditional or grouped interactions, such as alternatives or loops.
 */
var UmlSequenceFragment = /** @class */ (function (_super) {
    __extends(UmlSequenceFragment, _super);
    function UmlSequenceFragment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Property(undefined)
    ], UmlSequenceFragment.prototype, "id", void 0);
    __decorate([
        Property('Optional')
    ], UmlSequenceFragment.prototype, "type", void 0);
    __decorate([
        Collection([], UmlSequenceFragmentCondition)
    ], UmlSequenceFragment.prototype, "conditions", void 0);
    return UmlSequenceFragment;
}(ChildProperty));
export { UmlSequenceFragment };
/**
 * Defines the model for the diagram.
 */
var UmlSequenceDiagram = /** @class */ (function (_super) {
    __extends(UmlSequenceDiagram, _super);
    function UmlSequenceDiagram() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * @private
         */
        _this.isLoadedFromMermaid = false;
        /**
         * @private
         */
        _this.hideFootBox = true;
        /**
         * @private
         */
        _this.activationWidth = 20;
        /**
         * @private
         */
        _this.initialLifelineLength = 100;
        /**
         * @private
         */
        _this.messageSpacing = 50;
        /**
         * @private
         */
        _this.participantWidth = 100;
        /**
         * @private
         */
        _this.participantHeight = 50;
        /**
         * @private
         */
        _this.margin = 0;
        return _this;
    }
    /**
     *
     * @param {string} mermaidText - mermaid text
     * @param {Diagram} diagram - diagram
     * @returns {void}
     * @private
     */
    UmlSequenceDiagram.prototype.parse = function (mermaidText, diagram) {
        this.diagram = diagram;
        this.diagram.clear();
        LifeLineRenderer.clearLifelines();
        MessageRenderer.clearMessages();
        var parser = new MermaidUmlParser(diagram);
        this.model = parser.parse(mermaidText);
        this.isLoadedFromMermaid = true;
    };
    /**
     * Positon nodes and Connect connectors to draw sequence diagram
     * based on internal model SequenceDiagramModel object obtained from mermaid data
     * @param {string} mermaidText - mermaid data
     * @param {Diagram} diagram - Diagram
     * @returns {void}
     * @private
     */
    UmlSequenceDiagram.prototype.loadDiagramFromMermaid = function (mermaidText, diagram) {
        var sequenceDiagramRenderer = new SequenceDiagramRenderer(diagram);
        sequenceDiagramRenderer.render(this.model, this);
        this.mermaidData = mermaidText;
    };
    /**
     * Generates mermaid data from the sequence diagram
     * @returns {string} - mermaid data
     * @private
     */
    UmlSequenceDiagram.prototype.generateMermaidFromModel = function () {
        var mermaidGenerator = new MermaidGenerator();
        var mermaidText = mermaidGenerator.generateMermaidText(this);
        return mermaidText;
    };
    /**
     * Updates the sequence diagram at runtime.
     * @param {Diagram} diagram - Diagram instance
     * @returns {void}
     * @private
     */
    UmlSequenceDiagram.prototype.updateUmlSequenceDiagram = function (diagram) {
        if (!this.diagram) {
            this.diagram = diagram;
        }
        this.diagram.clear();
        LifeLineRenderer.clearLifelines();
        MessageRenderer.clearMessages();
        this.model = new SequenceDiagramModel(this.diagram);
        this.model.isLoadedFromMermaid = false;
        this.model.updateParticipants(this.participants);
        this.model.updateMessages(this.messages);
        this.model.updateActivations(this.participants);
        this.model.updateFragments(this.fragments);
    };
    /**
     * update activations and fragments after nodes & connector initialization
     * @returns {void}
     * @private
     */
    UmlSequenceDiagram.prototype.render = function () {
        var sequenceDiagramRenderer = new SequenceDiagramRenderer(this.diagram);
        sequenceDiagramRenderer.render(this.model, this);
        this.isLoadedFromMermaid = false;
    };
    __decorate([
        Collection([], UmlSequenceParticipant)
    ], UmlSequenceDiagram.prototype, "participants", void 0);
    __decorate([
        Collection([], UmlSequenceMessage)
    ], UmlSequenceDiagram.prototype, "messages", void 0);
    __decorate([
        Collection([], UmlSequenceFragment)
    ], UmlSequenceDiagram.prototype, "fragments", void 0);
    __decorate([
        Property(100)
    ], UmlSequenceDiagram.prototype, "spaceBetweenParticipants", void 0);
    return UmlSequenceDiagram;
}(ChildProperty));
export { UmlSequenceDiagram };
//#endregion
//#region SequenceDiagramModel
var SequenceDiagramModel = /** @class */ (function () {
    function SequenceDiagramModel(diagram) {
        /**
         * @private
         */
        this.maxParticipantWidth = 100;
        /**
         * @private
         */
        this.maxParticipantHeight = 50;
        /**
         * @private
         */
        this.isLoadedFromMermaid = false;
        this.diagram = diagram;
        UMLHelperClass.clearMessageMapping();
        this.participants = new Map();
        this.messages = [];
        this.activations = [];
        this.fragments = [];
        this.affectedParticipants = [];
        this.destroyedParticipants = [];
        this.destroyAtEndParticipants = [];
        this.aliases = new Map();
    }
    // Helper Methods
    /**
     * @param {Node} participant - participant node
     * @returns {void}
     * @private
     */
    SequenceDiagramModel.prototype.addParticipant = function (participant) {
        // Add default color
        UMLHelperClass.updateNodeColor(participant, '#6495ED'); // cornflowerblue
        this.diagram.nodes.push(participant);
        this.participants.set(participant.id, participant);
        this.addLifeLine(participant);
    };
    /**
     * @param {Node} participant - participant node
     * @returns {void}
     * @private
     */
    SequenceDiagramModel.prototype.addLifeLine = function (participant) {
        var lifeline = new Connector(this.diagram, 'connectors', { id: participant.id + "_Lifeline" }, true);
        UMLHelperClass.updateConnectorStyles(lifeline, 'Dashed');
        this.diagram.connectors.push(lifeline);
        // set participant name as key and lifeline connector as its value
        LifeLineRenderer.lifelines.set(participant.id, lifeline);
    };
    /**
     * @param {Connector} message - message connector
     * @returns {void}
     * @private
     */
    SequenceDiagramModel.prototype.addMessage = function (message) {
        this.diagram.connectors.push(message);
        this.messages.push(message);
    };
    /**
     * @param {ActivationModel} activation - ActivationModel
     * @returns {void}
     * @private
     */
    SequenceDiagramModel.prototype.addActivation = function (activation) {
        // Add default color
        UMLHelperClass.updateNodeColor(activation.node, '#6495ED'); // cornflowerblue
        // Add to the list of activations
        this.activations.push(activation);
    };
    /**
     * @param {FragmentModel} fragment - FragmentModel
     * @returns {void}
     * @private
     */
    SequenceDiagramModel.prototype.addFragment = function (fragment) {
        if (fragment.node) {
            this.diagram.nodes.push(fragment.node);
        }
        this.fragments.push(fragment);
    };
    /**
     * @param {string} alias - alias
     * @param {string} name - name
     * @returns {void}
     * @private
     */
    SequenceDiagramModel.prototype.addAlias = function (alias, name) {
        this.aliases.set(alias, name);
    };
    /**
     * @param {UmlSequenceParticipantModel} participants - Participant model collection
     * @returns {void}
     * @private
     */
    SequenceDiagramModel.prototype.updateParticipants = function (participants) {
        this.participants.clear();
        var maxParticipantWidth = 0;
        var maxParticipantHeight = 0;
        for (var _i = 0, _a = participants; _i < _a.length; _i++) {
            var participant = _a[_i];
            if (!participant.id) {
                console.warn('[WARNING] :: Participant ID cannot be undefined.');
                continue;
            }
            // Compute effective isActor value without mutating the public API property
            // When stereotype is present, it takes precedence over isActor
            var hasStereotype = participant.stereotype && typeof participant.stereotype === 'string' && participant.stereotype.trim() !== '';
            var effectiveIsActor = hasStereotype ? false : participant.isActor;
            var participantNode = new Node(this.diagram, 'nodes', {
                id: participant.id.toString(),
                width: participant.width,
                height: participant.height,
                data: participant
            }, true);
            UMLHelperClass.updateNodeShape(participantNode, effectiveIsActor, participant.stereotype);
            UMLHelperClass.updateAnnotation(participantNode, participant.content, effectiveIsActor, participant.stereotype);
            if (participant.showDestructionMarker) {
                this.destroyAtEndParticipants.push(participant.id.toString());
            }
            this.addParticipant(participantNode);
            // Calculate max width and height
            if (participant.width > maxParticipantWidth) {
                maxParticipantWidth = participant.width;
            }
            if (participant.height > maxParticipantHeight) {
                maxParticipantHeight = participant.height;
            }
        }
        this.maxParticipantWidth = maxParticipantWidth;
        this.maxParticipantHeight = maxParticipantHeight;
    };
    /**
     * @param {UmlSequenceMessageModel[]} messages - Message model collection
     * @returns {void}
     * @private
     */
    SequenceDiagramModel.prototype.updateMessages = function (messages) {
        this.messages = [];
        this.affectedParticipants = [];
        for (var _i = 0, messages_1 = messages; _i < messages_1.length; _i++) {
            var message = messages_1[_i];
            if (!message.id) {
                console.warn('[WARNING] :: Message ID cannot be undefined.');
                continue;
            }
            var sourceParticipant = null;
            var targetParticipant = null;
            if (message.type === UmlSequenceMessageType.Self) {
                // For self message, even if one of the participant id is null, then we can render based on the other participant's id
                sourceParticipant = this.getNodeFromId(message.fromParticipantID || message.toParticipantID);
                targetParticipant = sourceParticipant;
            }
            else {
                sourceParticipant = this.getNodeFromId(message.fromParticipantID);
                targetParticipant = this.getNodeFromId(message.toParticipantID);
            }
            if (!(sourceParticipant && targetParticipant)) {
                continue;
            }
            var connector = new Connector(this.diagram, 'connectors', { id: message.id.toString() }, true);
            UMLHelperClass.addOrUpdateParticipantDetails(connector, sourceParticipant.id, targetParticipant.id, message.type, null);
            // PHASE 3 NEW: Step 1 - ALWAYS apply type-based styling first (provides sensible defaults)
            UMLHelperClass.updateConnectorStyles(connector, message.type.toString());
            // PHASE 3 NEW: Step 2 - Override specific properties if user specified them
            if (message.lineStyle || message.sourceArrow ||
                message.targetArrow) {
                UMLHelperClass.applyMessageArrowOverrides(connector, message.lineStyle, message.sourceArrow, message.targetArrow);
            }
            UMLHelperClass.updateAnnotation(connector, message.content);
            if (message.type === UmlSequenceMessageType.Create) {
                UMLHelperClass.addOrUpdateParticipantDetails(connector, sourceParticipant.id, targetParticipant.id, UmlSequenceMessageType.Create, message.toParticipantID.toString());
                this.affectedParticipants.push(message.toParticipantID.toString());
            }
            else if (message.type === UmlSequenceMessageType.Delete) {
                UMLHelperClass.addOrUpdateParticipantDetails(connector, sourceParticipant.id, targetParticipant.id, UmlSequenceMessageType.Delete, message.toParticipantID.toString());
                if (this.affectedParticipants.indexOf(message.toParticipantID.toString()) === -1) {
                    this.affectedParticipants.push(message.toParticipantID.toString());
                }
                // storing for footbox rendering
                this.destroyedParticipants.push(message.toParticipantID.toString());
            }
            this.addMessage(connector);
        }
    };
    /**
     * @param {UmlSequenceParticipantModel[]} participants - Participant model collection
     * @returns {void}
     * @private
     */
    SequenceDiagramModel.prototype.updateActivations = function (participants) {
        this.activations = [];
        for (var _i = 0, participants_1 = participants; _i < participants_1.length; _i++) {
            var participant = participants_1[_i];
            if (participant.id && participant.activationBoxes && participant.activationBoxes.length > 0) {
                for (var _a = 0, _b = participant.activationBoxes; _a < _b.length; _a++) {
                    var activation = _b[_a];
                    if (activation.startMessageID && activation.endMessageID) {
                        var node = this.getNodeFromId(participant.id);
                        var activationID = activation.id ? activation.id.toString() : randomId();
                        var activationNode = new Node(this.diagram, 'nodes', {
                            id: node.id + "_Activation_" + activationID,
                            minHeight: 10, minWidth: 10,
                            data: activation
                        }, true);
                        UMLHelperClass.updateNodeShape(activationNode, false);
                        var activationConnector = this.getConnectorFromId(activation.startMessageID);
                        var deactivationConnector = this.getConnectorFromId(activation.endMessageID);
                        if (activationConnector && deactivationConnector) {
                            var activationDetails = UMLHelperClass.getParticipantDetails(activationConnector);
                            var deactivationDetails = UMLHelperClass.getParticipantDetails(deactivationConnector);
                            var activate = new ConnectorDetails(activationConnector.id, activationDetails.sourceParticipantName, activationDetails.targetParticipantName, UMLHelperClass.getAnnotation(activationConnector), 0);
                            var deactivate = new ConnectorDetails(deactivationConnector.id, deactivationDetails.sourceParticipantName, deactivationDetails.targetParticipantName, UMLHelperClass.getAnnotation(deactivationConnector), 0);
                            var activationModel = new ActivationModel(activationNode, node.id, activate, deactivate, 0);
                            this.addActivation(activationModel);
                        }
                        else {
                            console.warn('[WARNING] :: Activation or deactivation connector details not found.');
                        }
                    }
                }
            }
        }
    };
    /**
     * @param {UmlSequenceFragmentModel[]} fragments - Fragment model collection
     * @returns {void}
     * @private
     */
    SequenceDiagramModel.prototype.updateFragments = function (fragments) {
        this.fragments = [];
        for (var _i = 0, fragments_1 = fragments; _i < fragments_1.length; _i++) {
            var fragment = fragments_1[_i];
            if (!fragment.id) {
                console.warn('[WARNING] :: Fragment ID cannot be null.');
                continue;
            }
            var fragmentModel = this.processFragment(fragment);
            // Remove fragments that are part of the current fragment's child fragments
            this.removeChildFragmentsFromCollection(fragmentModel);
            this.addFragment(fragmentModel);
        }
    };
    SequenceDiagramModel.prototype.removeChildFragmentsFromCollection = function (fragment) {
        for (var _i = 0, _a = fragment.childFragments; _i < _a.length; _i++) {
            var childFragment = _a[_i];
            var index = this.fragments.indexOf(childFragment);
            if (index !== -1) {
                this.fragments.splice(index, 1);
            }
            // Recursively remove nested child fragments
            this.removeChildFragmentsFromCollection(childFragment);
        }
    };
    SequenceDiagramModel.prototype.processFragment = function (fragment) {
        var fragmentModel = new FragmentModel(fragment.id.toString(), fragment.type, [], [], new Node(this.diagram, 'nodes', { id: fragment.id.toString() + '_Fragment',
            data: fragment, shape: { type: 'Path' },
            style: { fill: 'transparent', strokeColor: '#000000', strokeWidth: 1 } }, true), 0);
        for (var _i = 0, _a = fragment.conditions; _i < _a.length; _i++) {
            var condition = _a[_i];
            var conditionModel = new ConditionModel(condition.content, [], [], new AlternativeBlockDetails());
            if (condition.fragmentIds) {
                var _loop_1 = function (subFragment) {
                    var childFragmentModel = this_1.fragments.find(function (item) { return item.id === subFragment; });
                    if (childFragmentModel) {
                        conditionModel.nestedFragments.push(childFragmentModel);
                        fragmentModel.childFragments.push(childFragmentModel);
                    }
                    else {
                        console.warn('[WARNING] :: Please ensure that all child fragments are defined in the collection before their respective parent fragments.');
                    }
                };
                var this_1 = this;
                for (var _b = 0, _c = condition.fragmentIds; _b < _c.length; _b++) {
                    var subFragment = _c[_b];
                    _loop_1(subFragment);
                }
            }
            this.processSequenceMessageIds(conditionModel, condition.messageIds);
            if (fragment.type === UmlSequenceFragmentType.Alternative) {
                this.populateConditionAltBlockDetails(conditionModel);
            }
            fragmentModel.conditions.push(conditionModel);
        }
        return fragmentModel;
    };
    SequenceDiagramModel.prototype.populateConditionAltBlockDetails = function (condition) {
        var _loop_2 = function (connector) {
            var exists = condition.altBlockDetails.connectors.some(function (existingConnector) {
                return existingConnector.id === connector.id;
            });
            if (!exists) {
                condition.altBlockDetails.connectors.push(new ConnectorWithFragmentDetails(connector.id, connector.source, connector.target, connector.message, -1, '', false, -1));
            }
        };
        for (var _i = 0, _a = condition.connectors; _i < _a.length; _i++) {
            var connector = _a[_i];
            _loop_2(connector);
        }
        for (var _b = 0, _c = condition.nestedFragments; _b < _c.length; _b++) {
            var childFragment = _c[_b];
            this.addChildFragmentConnectors(condition, childFragment);
        }
    };
    SequenceDiagramModel.prototype.addChildFragmentConnectors = function (condition, childFragment) {
        for (var _i = 0, _a = childFragment.conditions; _i < _a.length; _i++) {
            var childCondition = _a[_i];
            var _loop_3 = function (connector) {
                var exists = condition.altBlockDetails.connectors.some(function (existingConnector) {
                    return existingConnector.id === connector.id;
                });
                if (!exists) {
                    condition.altBlockDetails.connectors.push(new ConnectorWithFragmentDetails(connector.id, connector.source, connector.target, connector.message, -1, childFragment.id.toString(), true, -1));
                }
            };
            for (var _b = 0, _c = childCondition.connectors; _b < _c.length; _b++) {
                var connector = _c[_b];
                _loop_3(connector);
            }
            for (var _d = 0, _e = childCondition.nestedFragments; _d < _e.length; _d++) {
                var nestedChildFragment = _e[_d];
                this.addChildFragmentConnectors(condition, nestedChildFragment);
            }
        }
    };
    SequenceDiagramModel.prototype.processSequenceMessageIds = function (conditionModel, sequenceMessageIds) {
        for (var _i = 0, sequenceMessageIds_1 = sequenceMessageIds; _i < sequenceMessageIds_1.length; _i++) {
            var id = sequenceMessageIds_1[_i];
            if (id !== undefined && id !== '') {
                this.processConnector(conditionModel, id);
            }
        }
    };
    SequenceDiagramModel.prototype.processConnector = function (conditionModel, id) {
        var connector = this.getConnectorFromId(id);
        if (connector) {
            var details = UMLHelperClass.getParticipantDetails(connector);
            var connectorDetails = new ConnectorDetails(connector.id.toString(), details.sourceParticipantName, details.targetParticipantName, UMLHelperClass.getAnnotation(connector), 0);
            conditionModel.connectors.push(connectorDetails);
        }
    };
    SequenceDiagramModel.prototype.getNodeFromId = function (participantId) {
        var participantNode;
        if (participantId) {
            if (this.participants.has(participantId.toString())) {
                participantNode = this.participants.get(participantId.toString());
            }
            else {
                console.warn('[WARNING] :: Participant \'' + participantId.toString() + '\' not found.');
            }
        }
        else {
            console.warn('[WARNING] :: ParticipantID is null.');
        }
        return participantNode;
    };
    SequenceDiagramModel.prototype.getConnectorFromId = function (messageId) {
        var message = this.messages.find(function (connector) {
            return connector.id.toString() === messageId.toString();
        });
        if (!message) {
            console.warn('[WARNING] :: Message ID \'' + messageId.toString() + '\' is not found.');
        }
        return message;
    };
    return SequenceDiagramModel;
}());
var UMLHelperClass = /** @class */ (function () {
    function UMLHelperClass() {
    }
    /**
     * @param {Connector} connector - message connector
     * @param {string} sourceName - source participant id
     * @param {string} targetName - target participant id
     * @param {UmlSequenceMessageType} type - sequence message type
     * @param {string} affectedParticipants - id of participant created/destroyed by message
     * @returns {void}
     * @private
     */
    UMLHelperClass.addOrUpdateParticipantDetails = function (connector, sourceName, targetName, type, affectedParticipants) {
        var details = new SequenceMessageDetails(sourceName, targetName, affectedParticipants, type);
        this.messageMapping.set(connector, details);
    };
    /**
     * @param {Connector} connector - message connectors
     * @returns {SequenceMessageDetails} - sequence message details
     * @private
     */
    UMLHelperClass.getParticipantDetails = function (connector) {
        return this.messageMapping.get(connector);
    };
    /**
     * @returns {void}
     * @private
     */
    UMLHelperClass.clearMessageMapping = function () {
        this.messageMapping.clear();
    };
    /**
     * @param {Node|Connector} ele - element to provide annotations
     * @param {string} value - annotation content
     * @param {boolean} isActor - is Actor or Participant
     * @param {string} participantType - stereotype type for positioning
     * @returns {void}
     * @private
     */
    UMLHelperClass.updateAnnotation = function (ele, value, isActor, participantType) {
        var annoContent = value.trim();
        // Node
        if (ele instanceof Node) {
            ele.annotations = [{
                    content: annoContent,
                    horizontalAlignment: 'Center'
                }];
            if (isActor || this.shouldHaveLabelBelow(participantType)) {
                var actorAnnotation = ele.annotations[0];
                actorAnnotation.style.textWrapping = 'NoWrap';
                actorAnnotation.offset = { x: 0.5, y: 1 };
                actorAnnotation.margin = { left: 0, top: 6, right: 0, bottom: 0 };
            }
        }
        // Connector
        else {
            ele.annotations = [{
                    content: annoContent,
                    style: { textWrapping: 'NoWrap' },
                    margin: { left: 0, top: -10, right: 0, bottom: 0 },
                    rotationReference: 'Page'
                }];
        }
    };
    /**
     * @param {Node|Connector} ele - element to fetch annotation from.
     * @returns {string} - annotation content
     * @private
     */
    UMLHelperClass.getAnnotation = function (ele) {
        return ele.annotations[0].content;
    };
    /**
     * @param {Node} node - node to update the shape.
     * @param {boolean} isActor - true if node is actor, false otherwise.
     * @param {string} participantType - PHASE B NEW: stereotype type (boundary, control, entity, etc.)
     * @returns {void}
     * @private
     */
    UMLHelperClass.updateNodeShape = function (node, isActor, participantType) {
        // PHASE B NEW: Precedence logic for shape selection
        if (participantType && participantType !== UmlSequenceParticipantStereotype.Actor &&
            participantType !== UmlSequenceParticipantStereotype.Default) {
            // If stereotype is specified, use shape registry
            var config = UMLHelperClass.getStereotypeShape(participantType);
            if (config) {
                node.shape = { type: 'Path', data: config.svgPath };
            }
        }
        else if (isActor || participantType === UmlSequenceParticipantStereotype.Actor) {
            // Legacy actor shape
            node.shape = { type: 'Path', data: actor };
        }
        else {
            // Legacy rectangle shape
            node.shape = { type: 'Path', data: rectangle };
        }
    };
    /**
     * @param {Node} node - node to check whether its a actor shape.
     * @returns {boolean} whether node is actor shaped.
     * @private
     */
    UMLHelperClass.isActor = function (node) {
        var shape = node.shape;
        if (shape.type === 'Path' && shape.data === actor) {
            return true;
        }
        return false;
    };
    /**
     * Checks if a participant is a special type by comparing path data directly.
     * Special types: actor, boundary, control, entity, database (checked via SVG path comparison).
     * These types require annotation and lifeline adjustments.
     *
     * @param {Node} node - participant node to check
     * @returns {boolean} true if path data matches one of the special participant types
     * @private
     */
    UMLHelperClass.isSpecialParticipantType = function (node) {
        // First check if it's an actor using existing isActor method
        if (this.isActor(node)) {
            return true;
        }
        var shape = node.shape;
        // Check if shape is a Path type
        if (!shape || shape.type !== 'Path' || !shape.data) {
            return false;
        }
        var pathData = shape.data;
        // Check if path matches any of the stereotype shapes: boundary, control, entity, database
        var specialStereotypes = ['boundary', 'control', 'entity', 'database'];
        for (var _i = 0, specialStereotypes_1 = specialStereotypes; _i < specialStereotypes_1.length; _i++) {
            var stereotype = specialStereotypes_1[_i];
            var config = SHAPE_REGISTRY.get(stereotype);
            if (config && pathData === config.svgPath) {
                return true;
            }
        }
        return false;
    };
    /**
     * Checks if a participant type (stereotype) should have label positioned below the shape.
     * This includes: actor, boundary, control, entity, database.
     * Collections and queue have different layout requirements.
     *
     * @param {string} participantType - the stereotype type to check
     * @returns {boolean} true if label should be positioned below, false otherwise
     * @private
     */
    UMLHelperClass.shouldHaveLabelBelow = function (participantType) {
        if (!participantType) {
            return false;
        }
        var typeLower = participantType.toLowerCase();
        var labelBelowStereotypes = ['boundary', 'control', 'entity', 'database'];
        return labelBelowStereotypes.indexOf(typeLower) !== -1;
    };
    /**
     * Calculates the source padding for a participant node's lifeline.
     * Accounts for different participant types and their label positioning.
     *
     * @param {Node} node - participant node
     * @param {boolean} hasLabelBelow - whether label is positioned below the node
     * @returns {number} calculated source padding
     * @private
     */
    UMLHelperClass.calculateSourcePadding = function (node, hasLabelBelow) {
        if (!hasLabelBelow) {
            return node.height / 2;
        }
        // Check if this is an actor or a stereotype with label below
        if (this.isActor(node)) {
            // For actors with label below
            return (node.height / 2) + (node.height / 4);
        }
        else {
            // For stereotypes (boundary, control, entity, database) with label below
            // Padding = half height + fixed label space (15px for margin + text height)
            return (node.height / 2) + 19;
        }
    };
    /**
     * @param {Node} node - node to update the color.
     * @param {string} color - color to be filled with.
     * @returns {void}
     * @private
     */
    UMLHelperClass.updateNodeColor = function (node, color) {
        node.style = {
            fill: color,
            strokeColor: '#000000',
            strokeWidth: 1
        };
    };
    /**
     * @param {Connector} connector - connector to update the styles.
     * @param {Object} options - options to apply half arrow style
     * @returns {void}
     * @private
     */
    UMLHelperClass.applyHalfArrow = function (connector, options) {
        // Define line styles
        var solidStyle = {
            strokeColor: 'black',
            strokeWidth: 1
        };
        var dashedStyle = {
            strokeColor: 'black',
            strokeWidth: 1,
            strokeDashArray: '5,5'
        };
        connector.style = options.style === 'dashed' ? dashedStyle : solidStyle;
        var decorator = options.decorator === 'source'
            ? connector.sourceDecorator
            : connector.targetDecorator;
        decorator.shape = 'Custom';
        decorator.pathData = options.pathData;
        decorator.pivot = options.pivot;
        decorator.width = 10;
        decorator.height = 5;
    };
    /**
     * @param {Connector} connector - connector to update the styles.
     * @param {string} connectorType - connector type
     * @returns {void}
     * @private
     */
    UMLHelperClass.updateConnectorStyles = function (connector, connectorType) {
        connector.segments = [{ type: 'Straight' }];
        // Define decorator style
        var decoratorStyle = {
            fill: 'black',
            strokeColor: 'black',
            strokeWidth: 1
        };
        connector.sourceDecorator = { shape: 'None', style: decoratorStyle };
        connector.targetDecorator = { shape: 'None', style: decoratorStyle };
        // Define line styles
        var solidStyle = {
            strokeColor: 'black',
            strokeWidth: 1
        };
        var dashedStyle = {
            strokeColor: 'black',
            strokeWidth: 1,
            strokeDashArray: '5,5'
        };
        // Try to parse as MermaidConnectorType
        if (this.isMermaidConnectorType(connectorType)) {
            switch (connectorType) {
                case 'Solid':
                    connector.style = solidStyle;
                    break;
                case 'Dashed':
                    connector.style = dashedStyle;
                    break;
                case 'SolidArrow':
                    connector.style = solidStyle;
                    connector.targetDecorator.shape = 'Arrow';
                    break;
                case 'DashedArrow':
                    connector.style = dashedStyle;
                    connector.targetDecorator.shape = 'Arrow';
                    break;
                case 'Bidirectional':
                    connector.style = solidStyle;
                    connector.sourceDecorator.shape = 'Arrow';
                    connector.targetDecorator.shape = 'Arrow';
                    break;
                case 'DashedBidirectional':
                    connector.style = dashedStyle;
                    connector.sourceDecorator.shape = 'Arrow';
                    connector.targetDecorator.shape = 'Arrow';
                    break;
                case 'OpenArrow':
                    connector.style = solidStyle;
                    connector.targetDecorator.shape = 'OpenArrow';
                    break;
                case 'DashedOpenArrow':
                    connector.style = dashedStyle;
                    connector.targetDecorator.shape = 'OpenArrow';
                    break;
                case 'SolidCross':
                    connector.style = solidStyle;
                    connector.targetDecorator.shape = 'Custom';
                    connector.targetDecorator.pathData = 'M 0,0 L 25,25 M 25,0 L 0,25';
                    break;
                case 'DashedCross':
                    connector.style = dashedStyle;
                    connector.targetDecorator.shape = 'Custom';
                    connector.targetDecorator.pathData = 'M 0,0 L 25,25 M 25,0 L 0,25';
                    break;
                case 'SolidHalfArrowTop':
                    this.applyHalfArrow(connector, { style: 'solid', decorator: 'target', pathData: 'M 0 0 L 15 5 L 15 0 Z',
                        pivot: { x: 0, y: 0 } });
                    break;
                case 'DashedHalfArrowTop':
                    this.applyHalfArrow(connector, { style: 'dashed', decorator: 'target', pathData: 'M 0 0 L 15 5 L 15 0 Z',
                        pivot: { x: 0, y: 0 } });
                    break;
                case 'SolidHalfArrowBottom':
                    this.applyHalfArrow(connector, { style: 'solid', decorator: 'target', pathData: 'M 0 0 L 10 -5 L 10 0 Z',
                        pivot: { x: 0, y: 1 } });
                    break;
                case 'DashedHalfArrowBottom':
                    this.applyHalfArrow(connector, { style: 'dashed', decorator: 'target', pathData: 'M 0 0 L 10 -5 L 10 0 Z',
                        pivot: { x: 0, y: 1 } });
                    break;
                case 'SolidReverseHalfArrowTop':
                    this.applyHalfArrow(connector, { style: 'solid', decorator: 'source', pathData: 'M 0 0 L 10 -5 L 10 0 Z',
                        pivot: { x: 0, y: 1 } });
                    break;
                case 'DashedReverseHalfArrowTop':
                    this.applyHalfArrow(connector, { style: 'dashed', decorator: 'source', pathData: 'M 0 0 L 10 -5 L 10 0 Z',
                        pivot: { x: 0, y: 1 } });
                    break;
                case 'SolidStickHalfArrowTop':
                    this.applyHalfArrow(connector, { style: 'solid', decorator: 'target', pathData: 'M 0 0 L 10 5', pivot: { x: 0, y: 0 } });
                    break;
                case 'DashedStickHalfArrowTop':
                    this.applyHalfArrow(connector, { style: 'dashed', decorator: 'target', pathData: 'M 0 0 L 10 5', pivot: { x: 0, y: 0 } });
                    break;
                case 'SolidStickHalfArrowBottom':
                    this.applyHalfArrow(connector, { style: 'solid', decorator: 'target', pathData: 'M 0 10 L 10 5', pivot: { x: 0, y: 1 } });
                    break;
                case 'DashedStickHalfArrowBottom':
                    this.applyHalfArrow(connector, { style: 'dashed', decorator: 'target', pathData: 'M 0 10 L 10 5', pivot: { x: 0, y: 1 } });
                    break;
                case 'SolidReverseStickHalfArrowTop':
                    this.applyHalfArrow(connector, { style: 'solid', decorator: 'source', pathData: 'M 0 10 L 10 5', pivot: { x: 0, y: 1 } });
                    break;
                case 'DashedReverseStickHalfArrowTop':
                    this.applyHalfArrow(connector, { style: 'dashed', decorator: 'source', pathData: 'M 0 10 L 10 5', pivot: { x: 0, y: 1 } });
                    break;
                case 'SolidReverseStickHalfArrowBottom':
                    this.applyHalfArrow(connector, { style: 'solid', decorator: 'source', pathData: 'M 10 0 L 0 -5', pivot: { x: 0, y: 0 } });
                    break;
                case 'DashedReverseStickHalfArrowBottom':
                    this.applyHalfArrow(connector, { style: 'dashed', decorator: 'source', pathData: 'M 10 0 L 0 -5', pivot: { x: 0, y: 0 } });
                    break;
            }
        }
        // Try to parse as UmlSequenceMessageType
        else if (this.isUmlSequenceMessageType(connectorType)) {
            switch (connectorType) {
                case 'Synchronous':
                    connector.style = solidStyle;
                    connector.targetDecorator.shape = 'Arrow';
                    break;
                case 'Asynchronous':
                    connector.style = solidStyle;
                    connector.targetDecorator.shape = 'OpenArrow';
                    break;
                case 'Create':
                    connector.style = solidStyle;
                    connector.targetDecorator.shape = 'OpenArrow';
                    break;
                case 'Delete':
                    connector.style = solidStyle;
                    connector.targetDecorator.shape = 'Arrow';
                    break;
                case 'Reply':
                    connector.style = dashedStyle;
                    connector.targetDecorator.shape = 'OpenArrow';
                    break;
                case 'Self':
                    connector.type = 'Orthogonal';
                    // creating custom segments
                    connector.segments = [
                        {
                            type: 'Orthogonal',
                            length: 20, direction: 'Left'
                        },
                        {
                            type: 'Orthogonal',
                            length: 50, direction: 'Bottom'
                        },
                        {
                            type: 'Orthogonal',
                            length: 20, direction: 'Right'
                        }
                    ];
                    connector.style = solidStyle;
                    connector.targetDecorator.shape = 'Arrow';
                    break;
            }
        }
    };
    /**
     * @param {Node} node - node to remove connectable constraints
     * @returns {void}
     * @private
     */
    UMLHelperClass.removeConnectableConstraintForNode = function (node) {
        if (node) {
            // Remove the Connectable constraint
            node.constraints = NodeConstraints.Default & ~(NodeConstraints.InConnect | NodeConstraints.OutConnect);
        }
    };
    /**
     * Override ONLY the specific arrow properties specified by the user.
     * All other properties keep their values from type-based styling.
     *
     * STRATEGY:
     * 1. Step 1 (already done): Type-based styling applied by updateConnectorStyles()
     * 2. Step 2 (this method): Override ONLY the properties that are explicitly set
     *
     * @param {Connector} connector - Connector with type-based styling already applied
     * @param {UmlSequenceMessageLineStyle | undefined} lineType - Override line style if set
     * @param {UmlSequenceMessageArrowShape | undefined} sourceArrowType - Override source arrow if set
     * @param {UmlSequenceMessageArrowShape | undefined} targetArrowType - Override target arrow if set
     * @returns {void}
     * @private
     */
    UMLHelperClass.applyMessageArrowOverrides = function (connector, lineType, sourceArrowType, targetArrowType) {
        // Define reusable styles
        var solidStyle = {
            strokeColor: 'black',
            strokeWidth: 1,
            strokeDashArray: ''
        };
        var dashedStyle = {
            strokeColor: 'black',
            strokeWidth: 1,
            strokeDashArray: '5,5'
        };
        // Override line type if specified
        if (lineType) {
            connector.style = (lineType === 'Dashed') ? dashedStyle : solidStyle;
        }
        // Override source arrow if specified
        if (sourceArrowType) {
            this.applyArrowDecorator(connector, sourceArrowType, 'source', connector.style);
        }
        // Override target arrow if specified
        if (targetArrowType) {
            this.applyArrowDecorator(connector, targetArrowType, 'target', connector.style);
        }
    };
    /**
     * Map an arrow type to its corresponding decorator shape and apply to connector.
     * Paths are position-specific: source arrows use reversed/opposite paths compared to target arrows.
     *
     * @param {Connector} connector - Connector to apply arrow to
     * @param {UmlSequenceMessageArrowShape} arrowType - Arrow type to apply
     * @param {'source' | 'target'} position - Which end of the message (source or target)
     * @param {StrokeStyleModel} lineStyle - Current line style (used for decorator)
     * @returns {void}
     * @private
     */
    UMLHelperClass.applyArrowDecorator = function (connector, arrowType, position, lineStyle) {
        var decoratorStyle = {
            fill: 'black',
            strokeColor: 'black',
            strokeWidth: 1
        };
        var decorator = position === 'source' ? connector.sourceDecorator : connector.targetDecorator;
        var isSource = position === 'source';
        switch (arrowType) {
            case 'None':
                decorator.shape = 'None';
                break;
            case 'Arrow':
                decorator.shape = 'Arrow';
                decorator.style = decoratorStyle;
                break;
            case 'OpenArrow':
                decorator.shape = 'OpenArrow';
                decorator.style = decoratorStyle;
                break;
            case 'Cross':
                decorator.shape = 'Custom';
                decorator.pathData = 'M 0,0 L 25,25 M 25,0 L 0,25';
                decorator.style = decoratorStyle;
                break;
            case 'TopHalfArrow':
                decorator.shape = 'Custom';
                if (isSource) {
                    // Source: reversed top half arrow
                    decorator.pathData = 'M 0 0 L 10 -5 L 10 0 Z';
                    decorator.pivot = { x: 0, y: 1 };
                }
                else {
                    // Target: standard top half arrow
                    decorator.pathData = 'M 0 0 L 15 5 L 15 0 Z';
                    decorator.pivot = { x: 0, y: 0 };
                }
                decorator.width = 10;
                decorator.height = 5;
                decorator.style = decoratorStyle;
                break;
            case 'BottomHalfArrow':
                decorator.shape = 'Custom';
                if (isSource) {
                    // Source: reversed bottom half arrow
                    decorator.pathData = 'M 0 0 L 15 5 L 15 0 Z';
                    decorator.pivot = { x: 0, y: 0 };
                }
                else {
                    // Target: standard bottom half arrow
                    decorator.pathData = 'M 0 0 L 10 -5 L 10 0 Z';
                    decorator.pivot = { x: 0, y: 1 };
                }
                decorator.width = 10;
                decorator.height = 5;
                decorator.style = decoratorStyle;
                break;
            case 'TopStickHalfArrow':
                decorator.shape = 'Custom';
                if (isSource) {
                    // Source: reversed top stick half arrow
                    decorator.pathData = 'M 0 10 L 10 5';
                    decorator.pivot = { x: 0, y: 1 };
                }
                else {
                    // Target: standard top stick half arrow
                    decorator.pathData = 'M 0 0 L 10 5';
                    decorator.pivot = { x: 0, y: 0 };
                }
                decorator.width = 10;
                decorator.height = 5;
                decorator.style = decoratorStyle;
                break;
            case 'BottomStickHalfArrow':
                decorator.shape = 'Custom';
                if (isSource) {
                    // Source: reversed bottom stick half arrow (from updateConnectorStyles SolidReverseStickHalfArrowBottom)
                    decorator.pathData = 'M 10 0 L 0 -5';
                    decorator.pivot = { x: 0, y: 0 };
                }
                else {
                    // Target: standard bottom stick half arrow
                    decorator.pathData = 'M 0 10 L 10 5';
                    decorator.pivot = { x: 0, y: 1 };
                }
                decorator.width = 10;
                decorator.height = 5;
                decorator.style = decoratorStyle;
                break;
        }
    };
    UMLHelperClass.isMermaidConnectorType = function (type) {
        var mermaidTypes = [
            'Solid', 'Dashed', 'SolidArrow', 'DashedArrow',
            'Bidirectional', 'DashedBidirectional', 'OpenArrow', 'DashedOpenArrow', 'SolidCross', 'DashedCross',
            'SolidHalfArrowTop', 'DashedHalfArrowTop', 'SolidHalfArrowBottom', 'DashedHalfArrowBottom',
            'SolidReverseHalfArrowTop', 'DashedReverseHalfArrowTop',
            'SolidStickHalfArrowTop', 'DashedStickHalfArrowTop', 'SolidStickHalfArrowBottom', 'DashedStickHalfArrowBottom',
            'SolidReverseStickHalfArrowTop', 'DashedReverseStickHalfArrowTop', 'SolidReverseStickHalfArrowBottom', 'DashedReverseStickHalfArrowBottom'
        ];
        return mermaidTypes.indexOf(type) !== -1;
    };
    UMLHelperClass.isUmlSequenceMessageType = function (type) {
        var umlTypes = [
            'Synchronous', 'Asynchronous', 'Create', 'Delete', 'Reply', 'Self'
        ];
        return umlTypes.indexOf(type) !== -1;
    };
    /**
     * Retrieves the shape configuration for a given participant type.
     *
     * @param {string | undefined} participantType - The type of participant (stereotype or legacy shape key)
     * @returns {StereotypeShapeConfig | undefined} The shape configuration, or undefined if type is not found
     * @private
     */
    UMLHelperClass.getStereotypeShape = function (participantType) {
        if (participantType) {
            return SHAPE_REGISTRY.get(participantType.toLowerCase());
        }
        return undefined;
    };
    /**
     * Retrieves the shape configuration for a participant node by matching its SVG path
     * against every entry in SHAPE_REGISTRY.
     *
     * @param {Node} node - participant node
     * @returns {StereotypeShapeConfig | undefined} matching registry entry, or undefined
     * @private
     */
    UMLHelperClass.getShapeConfigForNode = function (node) {
        var shape = node.shape;
        if (!shape || shape.type !== 'Path' || !shape.data) {
            return undefined;
        }
        var pathData = shape.data;
        var result;
        SHAPE_REGISTRY.forEach(function (config) {
            if (!result && config.svgPath === pathData) {
                result = config;
            }
        });
        return result;
    };
    /**
     * Validates whether a participant type is a recognized stereotype.
     *
     * Valid stereotypes are: boundary, control, entity, database, collections, queue
     *
     * @param {string} stereotypeType - The stereotype type to validate
     * @returns {boolean} true if the type is a recognized stereotype, false otherwise
     * @private
     */
    UMLHelperClass.isValidStereotype = function (stereotypeType) {
        var validStereotypes = ['boundary', 'control', 'entity', 'database', 'collections', 'queue'];
        return (validStereotypes.indexOf(stereotypeType.toLowerCase()) !== -1);
    };
    UMLHelperClass.messageMapping = new Map();
    return UMLHelperClass;
}());
var ActivationModel = /** @class */ (function () {
    function ActivationModel(node, participantName, activationConnectorDetails, deactivateConnectorDetails, depth) {
        this._node = null;
        this.node = node;
        this.participantName = participantName;
        this.activateConnectorDetails = activationConnectorDetails;
        this.deactivateConnectorDetails = deactivateConnectorDetails;
        this.depth = depth;
    }
    Object.defineProperty(ActivationModel.prototype, "node", {
        /**
         * @private
         */
        get: function () {
            return this._node;
        },
        /**
         * @param {Node} value - activation node
         * @private
         */
        set: function (value) {
            this._node = value;
            this._node.annotations = null;
            UMLHelperClass.removeConnectableConstraintForNode(this._node);
        },
        enumerable: true,
        configurable: true
    });
    return ActivationModel;
}());
var ConnectorDetails = /** @class */ (function () {
    function ConnectorDetails(id, source, target, message, index) {
        /**
         * @private
         */
        this.id = '';
        /**
         * @private
         */
        this.index = -1;
        /**
         * @private
         */
        this.source = '';
        /**
         * @private
         */
        this.target = '';
        /**
         * @private
         */
        this.message = '';
        this.id = id;
        this.index = index;
        this.source = source;
        this.target = target;
        this.message = message;
    }
    return ConnectorDetails;
}());
var FragmentModel = /** @class */ (function () {
    function FragmentModel(id, type, conditions, childFragments, node, index, depth) {
        /**
         * @private
         */
        this.id = '';
        /**
         * @private
         */
        this.conditions = [];
        /**
         * @private
         */
        this.depth = 0;
        /**
         * @private
         */
        this.index = 0;
        /**
         * @private
         */
        this.childFragments = [];
        this.id = id;
        this.type = type;
        this.conditions = conditions;
        this.childFragments = childFragments;
        this.node = node;
        this.index = index;
        this.depth = depth;
        this.fragmentStartIndex = -1;
        this.fragmentEndIndex = -1;
    }
    Object.defineProperty(FragmentModel.prototype, "node", {
        /**
         * @private
         */
        get: function () {
            return this._node;
        },
        /**
         * @param {Node} value - node
         * @private
         */
        set: function (value) {
            this._node = value;
            UMLHelperClass.removeConnectableConstraintForNode(this._node);
        },
        enumerable: true,
        configurable: true
    });
    return FragmentModel;
}());
var ConditionModel = /** @class */ (function () {
    function ConditionModel(content, nestedFragments, connectors, altBlockDetails) {
        /**
         * @private
         */
        this.content = '';
        /**
         * @private
         */
        this.connectors = [];
        /**
         * @private
         */
        this.altBlockDetails = new AlternativeBlockDetails();
        /**
         * @private
         */
        this.nestedFragments = [];
        /**
         * @private
         */
        this.conditionStartIndex = -1;
        /**
         * @private
         */
        this.conditionEndIndex = -1;
        this.content = content;
        this.nestedFragments = nestedFragments;
        this.connectors = connectors;
        this.altBlockDetails = altBlockDetails;
    }
    return ConditionModel;
}());
var AlternativeBlockDetails = /** @class */ (function () {
    function AlternativeBlockDetails() {
        /**
         * @private
         */
        this.connectors = [];
    }
    return AlternativeBlockDetails;
}());
var ConnectorWithFragmentDetails = /** @class */ (function (_super) {
    __extends(ConnectorWithFragmentDetails, _super);
    function ConnectorWithFragmentDetails(id, source, target, message, index, fragmentID, inFragment, fragmentIndex) {
        var _this = _super.call(this, id, source, target, message, index) || this;
        /**
         * @private
         */
        _this.fragmentID = '';
        /**
         * @private
         */
        _this.inFragment = false;
        /**
         * @private
         */
        _this.fragmentIndex = -1;
        _this.fragmentID = fragmentID;
        _this.inFragment = inFragment;
        _this.fragmentIndex = fragmentIndex;
        return _this;
    }
    return ConnectorWithFragmentDetails;
}(ConnectorDetails));
var SequenceMessageDetails = /** @class */ (function () {
    function SequenceMessageDetails(sourceName, targetName, affectedParticipants, type) {
        this.sourceParticipantName = sourceName;
        this.targetParticipantName = targetName;
        this.affectedParticipantName = affectedParticipants;
        this.messageType = type;
    }
    return SequenceMessageDetails;
}());
//#endregion
//#region Renderer
var SequenceDiagramRenderer = /** @class */ (function () {
    function SequenceDiagramRenderer(diagram) {
        this.diagram = diagram;
    }
    /**
     *
     * @param {SequenceDiagramModel} model - orchestrates the model api for rendering the sequence diagram.
     * @param {UmlSequenceDiagram} settings - model api
     * @returns {void}
     * @private
     */
    SequenceDiagramRenderer.prototype.render = function (model, settings) {
        // Resetting message spacing to default, each time the diagram is rendered
        settings.messageSpacing = 50;
        ParticipantRenderer.render(this.diagram, model, settings);
        MessageRenderer.render(this.diagram, model, settings);
        for (var i = 0; i < this.diagram.nodes.length; i++) {
            var node = this.diagram.nodes[parseInt(i.toString(), 10)];
            this.diagram.preventNodesUpdate = true;
            this.diagram.nodePropertyChange(node, {}, {
                offsetX: node.offsetX, offsetY: node.offsetY, width: node.width, height: node.height,
                annotations: node.annotations, ports: node.ports
            }, true);
            this.diagram.preventNodesUpdate = false;
        }
        for (var i = 0; i < this.diagram.connectors.length; i++) {
            var connector = this.diagram.connectors[parseInt(i.toString(), 10)];
            this.diagram.preventConnectorsUpdate = true;
            this.diagram.connectorPropertyChange(connector, {}, {
                sourcePoint: connector.sourcePoint, targetPoint: connector.targetPoint,
                sourceID: connector.sourceID, targetID: connector.targetID,
                sourcePortID: connector.sourcePortID, targetPortID: connector.targetPortID,
                sourcePadding: connector.sourcePadding, targetPadding: connector.targetPadding,
                sourceDecorator: connector.sourceDecorator, targetDecorator: connector.targetDecorator,
                annotations: connector.annotations, ports: connector.ports, constraints: connector.constraints,
                segments: connector.segments
            }, true);
            this.diagram.preventConnectorsUpdate = false;
        }
        ActivationRenderer.render(this.diagram, model, settings);
        FragmentRenderer.render(this.diagram, model, settings);
    };
    return SequenceDiagramRenderer;
}());
//#region ParticipantRenderer
var ParticipantRenderer = /** @class */ (function () {
    function ParticipantRenderer() {
    }
    /**
     * @param {Diagram} diagram - diagram
     * @param {SequenceDiagramModel} model - orchestrates the model api for rendering the sequence diagram.
     * @param {UmlSequenceDiagram} settings - model api
     * @returns {void}
     * @private
     */
    ParticipantRenderer.render = function (diagram, model, settings) {
        this.diagram = diagram;
        this.model = model;
        this.settings = settings;
        var participants = [];
        model.participants.forEach(function (participant, id) { return participants.push(participant); });
        // Updating Size for all Participants
        this.updateParticipantsSize(participants);
        var margin = this.getUpdatedMargin();
        var currentX = settings.margin + margin.x;
        for (var i = 0; i < participants.length; i++) {
            var participant = participants[parseInt(i.toString(), 10)];
            // Updating Offset for Participant
            participant.offsetX = currentX;
            participant.offsetY = settings.margin + margin.y;
            // Getting next participant width for calculating horizontal spacing
            var nextParticipantWidth = 0;
            if (i < participants.length - 1) {
                var nextParticipant = participants[i + 1];
                // Check if next participant is actor or special stereotype type using path data
                var isActorOrStereotype = UMLHelperClass.isActor(nextParticipant)
                    || UMLHelperClass.isSpecialParticipantType(nextParticipant);
                if (isActorOrStereotype && model.isLoadedFromMermaid) {
                    // For stereotypes, use per-stereotype dimensions from SHAPE_REGISTRY
                    if (!UMLHelperClass.isActor(nextParticipant)) {
                        var nextDims = UMLHelperClass.getShapeConfigForNode(nextParticipant);
                        nextParticipant.width = nextDims && nextDims.width != null ? nextDims.width : 50;
                        nextParticipant.height = nextDims && nextDims.height != null ? nextDims.height : 50;
                    }
                    else {
                        this.resizeWithAspectRatio(nextParticipant, model.maxParticipantHeight);
                    }
                }
                nextParticipantWidth = nextParticipant.width > 0 ? nextParticipant.width : this.model.maxParticipantWidth;
            }
            // Updating the position for next participant based on horizontal spacing
            currentX += (participant.width / 2) + settings.spaceBetweenParticipants + (nextParticipantWidth / 2);
            // Render Lifeline for Participant
            LifeLineRenderer.render(diagram, model, participant, settings);
        }
    };
    ParticipantRenderer.updateParticipantsSize = function (participants) {
        for (var _i = 0, participants_2 = participants; _i < participants_2.length; _i++) {
            var participant = participants_2[_i];
            if (UMLHelperClass.isActor(participant)) {
                // update annotation offset for actor
                var actorAnnotation = participant.annotations[0];
                actorAnnotation.style.textWrapping = 'NoWrap';
                actorAnnotation.offset = { x: 0.5, y: 1 };
                actorAnnotation.margin = { left: 0, top: 10, right: 0, bottom: 0 };
                if (this.model.isLoadedFromMermaid) {
                    this.resizeWithAspectRatio(participant, this.model.maxParticipantHeight);
                }
                else {
                    this.resizeWithAspectRatio(participant, 50);
                }
            }
            else if (UMLHelperClass.isSpecialParticipantType(participant)) {
                // update annotation offset for stereotypes (boundary, control, entity, database)
                var annotation = participant.annotations[0];
                annotation.style.textWrapping = 'NoWrap';
                annotation.offset = { x: 0.5, y: 1 };
                annotation.margin = { left: 0, top: 10, right: 0, bottom: 0 };
                // Use per-stereotype dimensions from SHAPE_REGISTRY (e.g. boundary is 50x25)
                var stereotypeDims = UMLHelperClass.getShapeConfigForNode(participant);
                participant.width = stereotypeDims && stereotypeDims.width != null ? stereotypeDims.width : 50;
                participant.height = stereotypeDims && stereotypeDims.height != null ? stereotypeDims.height : 50;
            }
            else {
                if (!(participant.width > 0)) {
                    participant.width = this.model.maxParticipantWidth;
                }
                if (!(participant.height > 0)) {
                    participant.height = this.model.maxParticipantHeight;
                }
            }
        }
    };
    ParticipantRenderer.resizeWithAspectRatio = function (participant, targetWidth) {
        var originalWidth = 60.0; // Initial width
        var originalHeight = 90.0; // Initial height
        var aspectRatio = originalHeight / originalWidth;
        participant.width = targetWidth;
        participant.height = participant.width * aspectRatio;
    };
    ParticipantRenderer.getUpdatedMargin = function () {
        var firstParticipantMaxHalfWidth = 0;
        var maxHalfHeight = 0;
        var isFirstParticipant = true;
        this.model.participants.forEach(function (participant, id) {
            var halfWidth = participant.width / 2;
            var halfHeight = participant.height / 2;
            // Capture the full width of the first participant
            if (isFirstParticipant) {
                firstParticipantMaxHalfWidth = participant.width / 2;
                isFirstParticipant = false;
            }
            if (halfHeight > maxHalfHeight) {
                maxHalfHeight = halfHeight;
            }
        });
        return { x: firstParticipantMaxHalfWidth, y: maxHalfHeight };
    };
    return ParticipantRenderer;
}());
//#endregion
//#region MessageRenderer
var MessageRenderer = /** @class */ (function () {
    function MessageRenderer() {
    }
    /**
     * @param {Diagram} diagram - diagram.
     * @param {SequenceDiagramModel} model - orchestrates the model api for rendering the sequence diagram.
     * @param {UmlSequenceDiagram} settings - model api
     * @returns {void}
     * @private
     */
    MessageRenderer.render = function (diagram, model, settings) {
        this.diagram = diagram;
        this.model = model;
        this.settings = settings;
        // 1) Baseline pass: assign naive Y positions for each message
        this.messageLayouts = [];
        this.model.participants.forEach(function (participant, id) {
            if (participant.height > model.maxParticipantHeight) {
                model.maxParticipantHeight = participant.height;
            }
        });
        var currentY = settings.messageSpacing + model.maxParticipantHeight;
        this.adjustMessageSpacing(model, settings);
        for (var i = 0; i < model.messages.length; i++) {
            var message = model.messages[parseInt(i.toString(), 10)];
            currentY = this.storeLayoutInfo(currentY, message);
            currentY += settings.messageSpacing;
        }
        // 2) Multi-pass fragment layout: apply nested fragment spacing, alt conditions, etc.
        FragmentLayoutCalculator.adjustMessagePositionsForFragments(model, this.messageLayouts, settings.messageSpacing);
        // 3) Compute final lifeline length from the updated message positions
        var finalLifelineLength = this.calculateRequiredLifelineLength();
        // 4) Update each participant with this final lifeline length
        this.model.participants.forEach(function (participant, id) {
            LifeLineRenderer.updateLifelineLength(participant, finalLifelineLength);
        });
        // 5) Handle create/destroy offsets if needed
        this.updateCreateMessage();
        this.updateDestroyMessage();
        // 6) Render messages onto lifelines using their final Y positions
        this.renderMessagesOnLifeline();
    };
    MessageRenderer.adjustMessageSpacing = function (model, settings) {
        // Compute the base Y position for the first message
        var baseMessageSpacing = settings.messageSpacing;
        if (model.maxParticipantHeight > 100) {
            // Increase message spacing proportionally based on participant height
            baseMessageSpacing += (model.maxParticipantHeight - 100) * 0.5;
        }
        // Ensure message spacing does not go below the default value
        this.settings.messageSpacing = Math.max(baseMessageSpacing, settings.messageSpacing);
    };
    MessageRenderer.storeLayoutInfo = function (currentY, message) {
        this.messageLayouts.push(new MessageLayoutInfo(message.id.toString(), currentY, message));
        if (this.isSelfMessage(message)) {
            currentY += this.settings.messageSpacing;
        }
        if (this.isCreateMessage(message)) {
            currentY += this.settings.messageSpacing / 2;
        }
        return currentY;
    };
    MessageRenderer.calculateRequiredLifelineLength = function () {
        // If there are no messages at all, return top + bottom padding.
        if (!this.messageLayouts || this.messageLayouts.length === 0) {
            return this.getTopAndBottomPadding();
        }
        // Find the maximum Y-position among all messages (after fragment layout).
        var maxY = 0;
        for (var _i = 0, _a = this.messageLayouts; _i < _a.length; _i++) {
            var layoutInfo = _a[_i];
            if (layoutInfo.yPosition > maxY) {
                maxY = layoutInfo.yPosition;
            }
        }
        // Add a bottom padding so the lifeline extends below the last message.
        var bottomPadding = this.settings.messageSpacing;
        return maxY + bottomPadding;
    };
    MessageRenderer.getTopAndBottomPadding = function () {
        return 2 * (this.settings.messageSpacing + this.model.maxParticipantHeight);
    };
    MessageRenderer.isSelfMessage = function (message) {
        var details = UMLHelperClass.getParticipantDetails(message);
        if (details) {
            return details.sourceParticipantName === details.targetParticipantName;
        }
        else {
            return false;
        }
    };
    MessageRenderer.isCreateMessage = function (message) {
        var details = UMLHelperClass.getParticipantDetails(message);
        return details && details.messageType === UmlSequenceMessageType.Create;
    };
    MessageRenderer.updateCreateMessage = function () {
        var _loop_4 = function (message) {
            var details = UMLHelperClass.getParticipantDetails(message);
            if (details && details.messageType === UmlSequenceMessageType.Create) {
                var affectedNode = void 0;
                if (details.affectedParticipantName && this_2.model.participants.has(details.affectedParticipantName)) {
                    affectedNode = this_2.model.participants.get(details.affectedParticipantName);
                    var layoutInfo = this_2.messageLayouts.find(function (ml) {
                        return ml.messageID === message.id.toString();
                    });
                    if (layoutInfo) {
                        affectedNode.offsetY = layoutInfo.yPosition;
                        LifeLineRenderer.updateLifelinePosition(affectedNode, layoutInfo.yPosition);
                    }
                }
            }
        };
        var this_2 = this;
        for (var _i = 0, _a = this.model.messages; _i < _a.length; _i++) {
            var message = _a[_i];
            _loop_4(message);
        }
    };
    MessageRenderer.updateDestroyMessage = function () {
        var _loop_5 = function (message) {
            var details = UMLHelperClass.getParticipantDetails(message);
            if (details && details.messageType === UmlSequenceMessageType.Delete) {
                var affectedNode = void 0;
                if (details.affectedParticipantName && this_3.model.participants.has(details.affectedParticipantName)) {
                    affectedNode = this_3.model.participants.get(details.affectedParticipantName);
                    var layoutInfo = this_3.messageLayouts.find(function (ml) {
                        return ml.messageID === message.id.toString();
                    });
                    if (layoutInfo) {
                        LifeLineRenderer.updateLifelineToDestroy(affectedNode, message, layoutInfo.yPosition);
                    }
                }
            }
        };
        var this_3 = this;
        for (var _i = 0, _a = this.model.messages; _i < _a.length; _i++) {
            var message = _a[_i];
            _loop_5(message);
        }
    };
    /**
     * @returns {void}
     * @private
     */
    MessageRenderer.renderMessagesOnLifeline = function () {
        LifeLineRenderer.clearPorts();
        for (var _i = 0, _a = this.messageLayouts; _i < _a.length; _i++) {
            var layout = _a[_i];
            var message = layout.connector;
            var details = UMLHelperClass.getParticipantDetails(message);
            if (details) {
                var senderLifeline = this.getLifeline(this.model.participants, details.sourceParticipantName);
                var receiverLifeline = this.getLifeline(this.model.participants, details.targetParticipantName);
                if (this.isSelfMessage(message)) {
                    this.renderSelfMessage(senderLifeline, message, layout.yPosition);
                }
                else {
                    this.renderNormalMessage(senderLifeline, receiverLifeline, message, layout.yPosition);
                }
            }
        }
    };
    MessageRenderer.renderNormalMessage = function (sender, receiver, message, messageY) {
        var senderPort = this.createPort(sender, messageY, message.sourceCentralConnection);
        var receiverPort = this.createPort(receiver, messageY, message.targetCentralConnection);
        this.applyActivationPadding(senderPort, message, messageY, true);
        this.applyActivationPadding(receiverPort, message, messageY, false);
        this.assignPortOrPoint(message, senderPort, sender, messageY, true);
        this.assignPortOrPoint(message, receiverPort, receiver, messageY, false);
        // 963954: Sequence diagram create & delete message is not straight
        if (!message.sourcePortID) {
            message.sourcePoint.y = messageY;
        }
        if (!message.targetPortID) {
            message.targetPoint.y = messageY;
        }
    };
    MessageRenderer.renderSelfMessage = function (lifeline, message, messageY) {
        // Create ports at the current Y coordinate and one spacing below for self-messages.
        var firstPort = this.createPort(lifeline, messageY);
        var secondPort = this.createPort(lifeline, messageY + this.settings.messageSpacing);
        this.applyActivationPadding(firstPort, message, messageY, true);
        this.applyActivationPadding(secondPort, message, messageY + this.settings.messageSpacing, false);
        message.type = 'Orthogonal';
        message.segments = [
            { type: 'Orthogonal', length: 20, direction: 'Left' },
            { type: 'Orthogonal', length: 50, direction: 'Bottom' },
            { type: 'Orthogonal', length: 20, direction: 'Right' }
        ];
        this.assignPortOrPoint(message, firstPort, lifeline, messageY, true);
        this.assignPortOrPoint(message, secondPort, lifeline, messageY, false);
    };
    MessageRenderer.applyActivationPadding = function (port, message, messageY, isFirstPort) {
        var details = UMLHelperClass.getParticipantDetails(message);
        if (details && this.model.activations) {
            var participantName = isFirstPort ? details.sourceParticipantName : details.targetParticipantName;
            if (this.isWithinActivation(participantName, messageY, message)) {
                if (isFirstPort) {
                    // connector source point considers the port height while providing padding
                    message.sourcePadding = this.settings.activationWidth / 2 - port.height / 2;
                }
                else {
                    // connector target point considers the port height while providing padding
                    message.targetPadding = this.settings.activationWidth / 2 - port.height / 2;
                }
            }
        }
    };
    MessageRenderer.isWithinActivation = function (participantName, messageY, message) {
        // Get the index of the current message.
        var currentIndex = this.model.messages.findIndex(function (connector) {
            return connector.id.toString() === message.id.toString();
        });
        if (currentIndex === -1) {
            return false;
        }
        var _loop_6 = function (activation) {
            if (activation.participantName === participantName &&
                activation.activateConnectorDetails &&
                activation.deactivateConnectorDetails) {
                // Find the start and end indices for this activation.
                var startIndex = this_4.model.messages.findIndex(function (con) {
                    return con.id.toString() === activation.activateConnectorDetails.id;
                });
                var endIndex = this_4.model.messages.findIndex(function (con) {
                    return con.id.toString() === activation.deactivateConnectorDetails.id;
                });
                if (startIndex !== -1 && endIndex !== -1) {
                    var details = UMLHelperClass.getParticipantDetails(this_4.model.messages[parseInt(startIndex.toString(), 10)]);
                    // if message is a self message, and if message is located at start, then don't apply port padding
                    if (details && details.sourceParticipantName === details.targetParticipantName && currentIndex === startIndex) {
                        return { value: false };
                    }
                    if (currentIndex >= startIndex && currentIndex <= endIndex) {
                        return { value: true };
                    }
                }
            }
        };
        var this_4 = this;
        for (var _i = 0, _a = this.model.activations; _i < _a.length; _i++) {
            var activation = _a[_i];
            var state_1 = _loop_6(activation);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        return false;
    };
    MessageRenderer.createPort = function (lifeline, yPosition, centralConnection) {
        var lifelineSourceY = this.getLifelineSourceY(lifeline);
        var lifelineLength = this.calculateLifelineLength(lifeline, lifelineSourceY);
        var lengthFraction = this.calculateLengthFraction(yPosition, lifelineSourceY, lifelineLength);
        lengthFraction = lengthFraction > 1 ? 1 : lengthFraction;
        var port;
        if (centralConnection) {
            port = new PathPort(this.diagram, 'ports', {
                id: randomId(), offset: lengthFraction, visibility: PortVisibility.Visible, shape: 'Circle', pathData: 'M0,6 A6,6,0,1,1,12,6 A6,6,0,1,1,0,6 Z ',
                width: 8, height: 8, style: { fill: '#000000', strokeColor: '#000000' }
            });
        }
        else {
            port = new PathPort(this.diagram, 'ports', { id: randomId(), offset: lengthFraction });
        }
        this.addPortToLifeline(lifeline, port);
        return port;
    };
    MessageRenderer.assignPortOrPoint = function (message, port, lifeLine, y, isSource) {
        var x = lifeLine.sourcePoint.x;
        // If port length is greater than 1, then assign the point.
        if (port.offset === 1) {
            if (isSource) {
                message.sourcePoint = { x: x, y: y };
            }
            else {
                message.targetPoint = { x: x, y: y };
            }
        }
        else {
            if (isSource) {
                message.sourceID = lifeLine.id;
                message.sourcePortID = port.id;
            }
            else {
                // If it's a create message, then connect to the participant directly instead of the port.
                var messageDetails = UMLHelperClass.getParticipantDetails(message);
                var isCreateMessageForAffectedParticipant = messageDetails && messageDetails.messageType === UmlSequenceMessageType.Create &&
                    messageDetails.affectedParticipantName &&
                    messageDetails.targetParticipantName === messageDetails.affectedParticipantName;
                if (isCreateMessageForAffectedParticipant) {
                    var affectedParticipantNode = void 0;
                    if (this.model.participants.has(messageDetails.affectedParticipantName)) {
                        affectedParticipantNode = this.model.participants.get(messageDetails.affectedParticipantName);
                        message.targetID = affectedParticipantNode.id;
                        // set zero to prevent padding infulences the message target point
                        message.targetPadding = 0;
                    }
                }
                if (!message.targetID) {
                    message.targetID = lifeLine.id;
                    message.targetPortID = port.id;
                }
            }
        }
    };
    MessageRenderer.addPortToLifeline = function (lifeline, port) {
        this.diagram.addPorts(lifeline, [port]);
        this.diagram.protectPropertyChange(true);
    };
    MessageRenderer.getLifelineSourceY = function (lifeline) {
        return lifeline.sourcePoint.y;
    };
    MessageRenderer.calculateLifelineLength = function (lifeline, lifelineSourceY) {
        return lifeline.targetPoint.y - lifelineSourceY;
    };
    MessageRenderer.calculateLengthFraction = function (yPosition, lifelineSourceY, lifelineLength) {
        return (yPosition - lifelineSourceY) / lifelineLength;
    };
    MessageRenderer.getLifeline = function (participants, participantName) {
        return LifeLineRenderer.lifelines.get(participantName);
    };
    /**
     * @returns {void}
     * @private
     */
    MessageRenderer.clearMessages = function () {
        this.messageLayouts = [];
    };
    MessageRenderer.messageLayouts = [];
    return MessageRenderer;
}());
var MessageLayoutInfo = /** @class */ (function () {
    function MessageLayoutInfo(messageID, yPosition, connector) {
        this.messageID = messageID;
        this.yPosition = yPosition;
        this.connector = connector;
    }
    return MessageLayoutInfo;
}());
var FragmentLayoutCalculator = /** @class */ (function () {
    function FragmentLayoutCalculator() {
    }
    /**
     * @param {SequenceDiagramModel} model - orchestrates the model api for rendering the sequence diagram.
     * @param {MessageLayoutInfo} messageLayouts - message connector with y position details.
     * @param {number} headerSpacing - header spacing
     * @returns {void}
     * @private
     */
    FragmentLayoutCalculator.adjustMessagePositionsForFragments = function (model, messageLayouts, headerSpacing) {
        // 1) Precompute the message index range for each fragment
        for (var _i = 0, _a = model.fragments; _i < _a.length; _i++) {
            var fragment = _a[_i];
            this.computeFragmentMessageRange(fragment, model);
        }
        // 2) Flatten all fragments (including nested)
        var allFragments = [];
        this.collectAllFragments(model.fragments, allFragments);
        // 3) Sort them by start index so we shift in ascending order
        allFragments.sort(function (f1, f2) { return f1.fragmentStartIndex - f2.fragmentStartIndex; });
        // Extra spacing parameters
        var openingSpaceFactor = 1.5; // Parent fragments get more space
        var closingSpaceFactor = 0.7; // Smaller gap after the fragment
        var altConditionFactor = 0.8; // Gap between alt condition blocks
        // 4) For each fragment in ascending order, shift messages
        for (var _b = 0, allFragments_1 = allFragments; _b < allFragments_1.length; _b++) {
            var fragment = allFragments_1[_b];
            // Skip if fragment has no messages
            if (fragment.fragmentStartIndex < 0) {
                continue;
            }
            var isParent = fragment.childFragments && fragment.childFragments.length > 0;
            var fragmentOpeningSpace = isParent ? (headerSpacing * openingSpaceFactor) : headerSpacing;
            var fragmentClosingSpace = headerSpacing * closingSpaceFactor;
            // 4a) Shift from the fragment's start index (opening gap)
            this.shiftMessages(messageLayouts, fragment.fragmentStartIndex, fragmentOpeningSpace);
            // 4b) Shift from the fragment's end index + 1 (closing gap),
            // but only if endIndex is in range
            if (fragment.fragmentEndIndex >= 0 && fragment.fragmentEndIndex + 1 < messageLayouts.length) {
                this.shiftMessages(messageLayouts, fragment.fragmentEndIndex + 1, fragmentClosingSpace);
            }
            // 5) If it's an alt fragment, also handle alt condition spacing
            if (fragment.type === UmlSequenceFragmentType.Alternative) {
                // For each condition, compute conditionStartIndex & conditionEndIndex
                for (var _c = 0, _d = fragment.conditions; _c < _d.length; _c++) {
                    var cond = _d[_c];
                    this.computeConditionMessageRange(cond, model);
                }
                // Sort conditions by their start index
                var sortedConditions = fragment.conditions
                    .filter(function (condition) { return condition.conditionStartIndex >= 0; })
                    .sort(function (a, b) { return a.conditionStartIndex - b.conditionStartIndex; });
                // For each condition after the first, add spacing so they don't overlap
                var altConditionSpacing = headerSpacing * altConditionFactor;
                for (var i = 1; i < sortedConditions.length; i++) {
                    var condStart = sortedConditions[parseInt(i.toString(), 10)].conditionStartIndex;
                    if (condStart >= 0 && condStart < messageLayouts.length) {
                        this.shiftMessages(messageLayouts, condStart, altConditionSpacing);
                    }
                }
            }
        }
    };
    FragmentLayoutCalculator.collectAllFragments = function (source, result) {
        for (var _i = 0, source_1 = source; _i < source_1.length; _i++) {
            var frag = source_1[_i];
            result.push(frag);
            if (frag.childFragments && frag.childFragments.length > 0) {
                this.collectAllFragments(frag.childFragments, result);
            }
        }
    };
    FragmentLayoutCalculator.computeFragmentMessageRange = function (fragment, model) {
        var minIndex = Number.MAX_SAFE_INTEGER;
        var maxIndex = Number.MIN_SAFE_INTEGER;
        // 1) Gather this fragment’s own connectors
        for (var _i = 0, _a = fragment.conditions; _i < _a.length; _i++) {
            var condition = _a[_i];
            var _loop_7 = function (connector) {
                var idx = model.messages.findIndex(function (connector1) { return connector1.id.toString() === connector.id; });
                if (idx >= 0 && idx < minIndex) {
                    minIndex = idx;
                }
                if (idx > maxIndex) {
                    maxIndex = idx;
                }
            };
            for (var _b = 0, _c = condition.connectors; _b < _c.length; _b++) {
                var connector = _c[_b];
                _loop_7(connector);
            }
        }
        // 2) Recurse for each child fragment
        for (var _d = 0, _e = fragment.childFragments; _d < _e.length; _d++) {
            var child = _e[_d];
            this.computeFragmentMessageRange(child, model);
            // Incorporate child's start/end into the parent's range
            if (child.fragmentStartIndex >= 0) {
                if (child.fragmentStartIndex < minIndex) {
                    minIndex = child.fragmentStartIndex;
                }
            }
            if (child.fragmentEndIndex > maxIndex) {
                maxIndex = child.fragmentEndIndex;
            }
        }
        // 3) If no connectors found, set to -1
        if (minIndex === Number.MAX_SAFE_INTEGER) {
            minIndex = -1;
        }
        if (maxIndex === Number.MIN_SAFE_INTEGER) {
            maxIndex = -1;
        }
        fragment.fragmentStartIndex = minIndex;
        fragment.fragmentEndIndex = maxIndex;
    };
    FragmentLayoutCalculator.computeConditionMessageRange = function (condition, model) {
        var minIndex = Number.MAX_SAFE_INTEGER;
        var maxIndex = Number.MIN_SAFE_INTEGER;
        var _loop_8 = function (connector) {
            var idx = model.messages.findIndex(function (connector1) { return connector1.id.toString() === connector.id; });
            if (idx < 0) {
                return "continue";
            }
            if (idx < minIndex) {
                minIndex = idx;
            }
            if (idx > maxIndex) {
                maxIndex = idx;
            }
        };
        for (var _i = 0, _a = condition.connectors; _i < _a.length; _i++) {
            var connector = _a[_i];
            _loop_8(connector);
        }
        if (minIndex === Number.MAX_SAFE_INTEGER) {
            minIndex = -1;
        }
        if (maxIndex === Number.MIN_SAFE_INTEGER) {
            maxIndex = -1;
        }
        condition.conditionStartIndex = minIndex;
        condition.conditionEndIndex = maxIndex;
    };
    FragmentLayoutCalculator.shiftMessages = function (messageLayouts, startIndex, offset) {
        if (offset === 0) {
            return;
        }
        for (var i = startIndex; i < messageLayouts.length; i++) {
            messageLayouts[parseInt(i.toString(), 10)].yPosition += offset;
        }
    };
    return FragmentLayoutCalculator;
}());
//#endregion
//#region ActivationRenderer
var ActivationRenderer = /** @class */ (function () {
    function ActivationRenderer() {
    }
    // Helper Methods
    /**
     * @param {Diagram} diagram - diagram instance
     * @param {SequenceDiagramModel} model - orchestrates the model api for rendering the sequence diagram.
     * @param {UmlSequenceDiagram} settings - model api
     * @returns {void}
     * @private
     */
    ActivationRenderer.render = function (diagram, model, settings) {
        this.diagram = diagram;
        this.model = model;
        this.settings = settings;
        for (var _i = 0, _a = model.activations; _i < _a.length; _i++) {
            var activation = _a[_i];
            this.renderActivation(activation);
        }
    };
    ActivationRenderer.renderActivation = function (activation) {
        var matchingTopConnector = this.model.messages.find(function (connector) {
            var details = UMLHelperClass.getParticipantDetails(connector);
            return connector.id != null &&
                connector.id === activation.activateConnectorDetails.id.toString() &&
                details != null &&
                details.sourceParticipantName === activation.activateConnectorDetails.source &&
                details.targetParticipantName === activation.activateConnectorDetails.target &&
                UMLHelperClass.getAnnotation(connector) === activation.activateConnectorDetails.message;
        });
        var matchingBottomConnector = this.model.messages.find(function (connector) {
            var details = UMLHelperClass.getParticipantDetails(connector);
            return connector.id != null &&
                connector.id === activation.deactivateConnectorDetails.id.toString() &&
                details != null &&
                details.sourceParticipantName === activation.deactivateConnectorDetails.source &&
                details.targetParticipantName === activation.deactivateConnectorDetails.target &&
                UMLHelperClass.getAnnotation(connector) === activation.deactivateConnectorDetails.message;
        });
        var participant = this.getParticipantByName(activation.participantName);
        // Update the activation node based on the connector's points
        var sourcePoint = matchingTopConnector ?
            { x: matchingTopConnector.sourcePoint.x, y: matchingTopConnector.sourcePoint.y } : { x: 0, y: 0 };
        var targetPoint = matchingBottomConnector ?
            { x: matchingBottomConnector.targetPoint.x, y: matchingBottomConnector.targetPoint.y } : { x: 0, y: 0 };
        activation.depth = this.calculateActivationDepth(activation, sourcePoint, targetPoint);
        var details = UMLHelperClass.getParticipantDetails(matchingTopConnector);
        if (details) {
            // if message is self type then render activations from target point
            if (details.sourceParticipantName === details.targetParticipantName) {
                sourcePoint.y = matchingTopConnector.targetPoint.y;
            }
            else if (details.messageType === UmlSequenceMessageType.Create &&
                details.targetParticipantName === activation.participantName) {
                // if activation is rendered from a self message, then provide 5px gap from the participant
                sourcePoint.y += (participant.height / 2) + (UMLHelperClass.isActor(participant) ? 15 : 5);
            }
        }
        var activationNode = activation.node;
        activationNode.offsetX = participant.offsetX + (activation.depth * (this.settings.activationWidth / 4));
        activationNode.offsetY = sourcePoint.y + (targetPoint.y - sourcePoint.y) / 2;
        activationNode.width = this.settings.activationWidth;
        activationNode.height = Math.abs(sourcePoint.y - targetPoint.y);
        // 969718 - Fill Color Change Not Applied for UML Sequence
        this.diagram.add(activationNode);
    };
    ActivationRenderer.calculateActivationDepth = function (activation, sourcePoint, targetPoint) {
        var _this = this;
        var overlappingActivations = this.model.activations
            .filter(function (a) { return a.participantName === activation.participantName &&
            a !== activation &&
            _this.isOverlapping(activation, a); })
            .sort(function (a, b) { return a.activateConnectorDetails.index - b.activateConnectorDetails.index; });
        var depth = 0;
        for (var _i = 0, overlappingActivations_1 = overlappingActivations; _i < overlappingActivations_1.length; _i++) {
            var act = overlappingActivations_1[_i];
            var actStart = this.getStartPoint(act);
            // Only adjust if this activation is below the overlapping activation
            if (sourcePoint.y > actStart) {
                depth++;
            }
        }
        return depth;
    };
    ActivationRenderer.isOverlapping = function (current, other) {
        var currentStart = this.getStartPoint(current);
        var currentEnd = this.getEndPoint(current);
        var otherStart = this.getStartPoint(other);
        var otherEnd = this.getEndPoint(other);
        // Check if there is any overlap in the vertical range
        return currentStart < otherEnd && otherStart < currentEnd;
    };
    ActivationRenderer.getStartPoint = function (activation) {
        var message = this.model.messages
            .find(function (m) { return m.id.toString() === activation.activateConnectorDetails.id.toString(); });
        return message ? message.sourcePoint.y : 0;
    };
    ActivationRenderer.getEndPoint = function (activation) {
        var message = this.model.messages
            .find(function (m) { return m.id.toString() === activation.deactivateConnectorDetails.id.toString(); });
        return message ? message.targetPoint.y : 0;
    };
    ActivationRenderer.getParticipantByName = function (participantName) {
        if (this.model.participants.has(participantName)) {
            return this.model.participants.get(participantName);
        }
        return null;
    };
    return ActivationRenderer;
}());
//#endregion
//#region FragmentRenderer
var FragmentRenderer = /** @class */ (function () {
    function FragmentRenderer() {
    }
    // Helper Methods
    /**
     * @param {Diagram} diagram - diagram instance
     * @param {SequenceDiagramModel} model - orchestrates the model api for rendering the sequence diagram.
     * @param {UmlSequenceDiagram} settings - model api.
     * @returns {void}
     * @private
     */
    FragmentRenderer.render = function (diagram, model, settings) {
        this.diagram = diagram;
        this.model = model;
        this.settings = settings;
        for (var _i = 0, _a = model.fragments; _i < _a.length; _i++) {
            var fragment = _a[_i];
            this.renderFragment(fragment);
        }
    };
    FragmentRenderer.renderFragment = function (fragment) {
        for (var _i = 0, _a = fragment.childFragments; _i < _a.length; _i++) {
            var childFragment = _a[_i];
            this.renderFragment(childFragment);
        }
        switch (fragment.type) {
            case UmlSequenceFragmentType.Optional:
            case UmlSequenceFragmentType.Loop:
                this.renderGeneralFragment(fragment);
                break;
            case UmlSequenceFragmentType.Alternative:
                this.renderAlternativeFragment(fragment);
                break;
        }
    };
    FragmentRenderer.renderGeneralFragment = function (fragment) {
        for (var _i = 0, _a = fragment.conditions; _i < _a.length; _i++) {
            var condition = _a[_i];
            var boundary = this.calculateFragmentBoundary(condition, fragment);
            if (boundary && boundary.width !== 0 && boundary.height !== 0) {
                this.createFragmentNode(fragment, condition.content, boundary);
                var fragmentNode = fragment.node;
                this.diagram.preventNodesUpdate = true;
                this.diagram.nodePropertyChange(fragmentNode, { shape: { type: 'Path' } }, { shape: fragmentNode.shape }, true);
                this.diagram.preventNodesUpdate = false;
            }
        }
    };
    FragmentRenderer.renderAlternativeFragment = function (fragment) {
        var boundary = this.calculateAltFragmentBoundary(fragment);
        if (boundary && boundary.width !== 0 && boundary.height !== 0) {
            this.createFragmentNode(fragment, fragment.conditions[0].content, boundary);
            var fragmentNode = fragment.node;
            this.updateAlternativeFragmentShape(fragment, fragmentNode);
            this.diagram.preventNodesUpdate = true;
            this.diagram.nodePropertyChange(fragmentNode, { shape: { type: 'Path' } }, { shape: fragmentNode.shape }, true);
            this.diagram.preventNodesUpdate = false;
        }
    };
    FragmentRenderer.updateAlternativeFragmentShape = function (fragment, fragmentNode) {
        var nodeUpdatedBoundary = fragmentNode.wrapper.bounds;
        var fragmentShape = this.getAlternateFragmentShape(nodeUpdatedBoundary);
        fragmentShape = this.appendConditionDottedLines(fragment, fragmentNode, nodeUpdatedBoundary, fragmentShape);
        fragmentNode.shape = { type: 'Path', data: fragmentShape };
    };
    FragmentRenderer.getAlternateFragmentShape = function (nodeUpdatedBoundary) {
        var rectWidth = nodeUpdatedBoundary.width;
        var rectHeight = nodeUpdatedBoundary.height;
        var taperWidth = 40;
        var taperHeight = 19.7;
        var midTaperHeight = taperHeight / 2;
        var taperControlOffset = taperWidth * 0.19;
        // 1) Main bounding rectangle
        var boundingRect = 'M ' + nodeUpdatedBoundary.x + ' ' + nodeUpdatedBoundary.y + ' ' +
            'L ' + (nodeUpdatedBoundary.x + rectWidth) + ' ' + nodeUpdatedBoundary.y + ' ' +
            'L ' + (nodeUpdatedBoundary.x + rectWidth) + ' ' + (nodeUpdatedBoundary.y + rectHeight) + ' ' +
            'L ' + nodeUpdatedBoundary.x + ' ' + (nodeUpdatedBoundary.y + rectHeight) + ' Z';
        // 2) Taper rectangle at top-left
        var taperRectanglePath = 'M ' + nodeUpdatedBoundary.x + ' ' + nodeUpdatedBoundary.y + ' ' +
            'H ' + (nodeUpdatedBoundary.x + taperWidth) + ' ' +
            'V ' + (nodeUpdatedBoundary.y + midTaperHeight + (taperHeight / 6)) + ' ' +
            'C ' + (nodeUpdatedBoundary.x + taperWidth - taperControlOffset) + ' ' + (nodeUpdatedBoundary.y + taperHeight) + ' ' +
            (nodeUpdatedBoundary.x + taperWidth) + ' ' + (nodeUpdatedBoundary.y + midTaperHeight + (taperHeight / 6)) + ' ' +
            (nodeUpdatedBoundary.x + taperWidth - taperControlOffset) + ' ' + (nodeUpdatedBoundary.y + taperHeight) + ' ' +
            'H ' + nodeUpdatedBoundary.x + ' Z';
        // Subpath #1: boundingRect (fill on)
        // Subpath #2: boundingRect again (fill off)
        // Subpath #3: taperRectanglePath (fill on for the taper region)
        return boundingRect + ' ' + boundingRect + ' ' + taperRectanglePath;
    };
    FragmentRenderer.appendConditionDottedLines = function (fragment, fragmentNode, boundary, fragmentShape) {
        for (var i = 0; i < fragment.conditions.length - 1; i++) {
            var firstCondition = fragment.conditions[parseInt(i.toString(), 10)];
            var secondCondition = fragment.conditions[i + 1];
            var centerY = this.calculateCenterYBetweenConditions(firstCondition, secondCondition);
            if (centerY === 0) {
                centerY = boundary.top + (boundary.height / (fragment.conditions.length + 1) * (i + 1));
            }
            fragmentShape += this.createDashedLinePath(fragmentNode, boundary, centerY);
            this.addAnnotationForAlternativeCondition(fragmentNode, centerY, boundary, secondCondition);
        }
        return fragmentShape;
    };
    FragmentRenderer.createDashedLinePath = function (fragmentNode, boundary, centerY) {
        var dottedLinePath = 'M ' + boundary.x + ' ' + centerY + ' ';
        var dashLength = 5;
        var spaceBetweenDash = 5;
        // Calculate number of dots based on the total width
        var numberOfDots = Math.floor(boundary.width / (dashLength + spaceBetweenDash));
        for (var j = 0; j < numberOfDots; j++) {
            dottedLinePath += 'l ' + dashLength + ' 0 ';
            dottedLinePath += 'm ' + spaceBetweenDash + ' 0 ';
        }
        return dottedLinePath;
    };
    FragmentRenderer.addAnnotationForAlternativeCondition = function (fragmentNode, centerY, boundary, condition) {
        var yPoint = this.calculateAnnotationYOffset(centerY, fragmentNode.height, boundary.y);
        var annotation = new ShapeAnnotation(fragmentNode, 'annotations', {
            content: '[' + condition.content + ']',
            offset: { x: 0, y: yPoint },
            horizontalAlignment: 'Left',
            margin: { left: 9, top: 15, right: 5, bottom: 5 },
            style: { bold: true }
        });
        this.diagram.addLabels(fragmentNode, [annotation]);
        this.diagram.protectPropertyChange(true);
    };
    FragmentRenderer.calculateAnnotationYOffset = function (centerY, totalHeight, boundaryTop) {
        var position = centerY - boundaryTop;
        var clampedPosition = Math.max(0, Math.min(position, totalHeight));
        return clampedPosition / totalHeight;
    };
    FragmentRenderer.calculateFragmentBoundary = function (condition, fragment) {
        var messageBoundary = undefined;
        if (condition.connectors && condition.connectors.length > 0) {
            var messages = this.getMessagesFromConnectorDetails(condition.connectors);
            messageBoundary = this.getBoundaryFromMessages(messages);
        }
        var childBoundary = this.calculateChildFragmentBoundary(fragment);
        var extraSpace = this.model.maxParticipantWidth / 4;
        if (!messageBoundary && !childBoundary) {
            return undefined;
        }
        if (!messageBoundary) {
            // Use child boundary with extra spacing
            var combined = new Rect(childBoundary.left - extraSpace, childBoundary.top - extraSpace, childBoundary.width + extraSpace * 2, childBoundary.height + extraSpace * 2);
            return this.adjustCombinedBoundary(combined, messageBoundary, childBoundary);
        }
        if (!childBoundary) {
            return messageBoundary;
        }
        return this.combineBoundaries(messageBoundary, childBoundary);
    };
    FragmentRenderer.getBoundaryFromMessages = function (messages) {
        // 1. Calculate min & max coordinates
        var minCoordinates = this.getMinCoordinates(messages);
        var maxCoordinates = this.getMaxCoordinates(messages);
        // 2. Check conditions
        var hasTargetNode = this.hasCreateMessage(messages);
        var hasSelfMessages = this.hasSelfMessage(messages);
        // 3. Compute base padding
        var paddingX = this.model.maxParticipantWidth / 4;
        if (hasTargetNode) {
            paddingX += this.model.maxParticipantWidth / 3;
        }
        if (hasSelfMessages) {
            // Extra horizontal space for self-message loops
            paddingX += this.model.maxParticipantWidth / 6;
        }
        var paddingY = this.settings.messageSpacing / 3;
        // 4. Initial boundary dimensions
        var offsetX = minCoordinates.x - paddingX;
        var offsetY = minCoordinates.y - paddingY;
        var width = (maxCoordinates.x - minCoordinates.x) + (2 * paddingX);
        var height = (maxCoordinates.y - minCoordinates.y) + (2 * paddingY);
        // 5. Expand boundary if message has a target node
        for (var _i = 0, messages_2 = messages; _i < messages_2.length; _i++) {
            var msg = messages_2[_i];
            if (msg.targetID && this.diagram.getObject(msg.targetID) instanceof Node) {
                var targetNode = this.diagram.getObject(msg.targetID);
                if (targetNode && targetNode instanceof Node && targetNode.wrapper) {
                    var targetBounds = targetNode.wrapper.bounds;
                    var nodeRightEdge = targetBounds.x + targetBounds.width + paddingX;
                    var nodeBottomEdge = targetBounds.y + targetBounds.height + paddingY;
                    width = Math.max(width, nodeRightEdge - offsetX);
                    height = Math.max(height, nodeBottomEdge - offsetY);
                }
            }
        }
        // 6. If the last message is a 'delete', add extra space (25px) for the delete marker
        var lastMessage = messages[messages.length - 1];
        var lastMessageDetail = UMLHelperClass.getParticipantDetails(lastMessage);
        if (lastMessageDetail && lastMessageDetail.messageType === UmlSequenceMessageType.Delete) {
            // We only need extra vertical space to display the 25×25 'X' marker at the end of the lifeline
            height += 25;
        }
        return new Rect(offsetX, offsetY, width, height);
    };
    FragmentRenderer.hasSelfMessage = function (messages) {
        for (var _i = 0, messages_3 = messages; _i < messages_3.length; _i++) {
            var msg = messages_3[_i];
            var detail = UMLHelperClass.getParticipantDetails(msg);
            if (detail && detail.sourceParticipantName === detail.targetParticipantName) {
                return true;
            }
        }
        return false;
    };
    FragmentRenderer.hasCreateMessage = function (messages) {
        for (var _i = 0, messages_4 = messages; _i < messages_4.length; _i++) {
            var msg = messages_4[_i];
            if (msg.targetID && this.diagram.getObject(msg.targetID) instanceof Node) {
                return true;
            }
        }
        return false;
    };
    FragmentRenderer.calculateChildFragmentBoundary = function (fragment) {
        if (!fragment.childFragments || fragment.childFragments.length === 0) {
            return undefined;
        }
        var childBoundaries = [];
        for (var i = 0; i < fragment.childFragments.length; i++) {
            var child = fragment.childFragments[parseInt(i.toString(), 10)];
            var allConditions = [];
            for (var j = 0; j < child.conditions.length; j++) {
                var connectors = child.conditions[parseInt(j.toString(), 10)].connectors;
                for (var k = 0; k < connectors.length; k++) {
                    allConditions.push(connectors[parseInt(k.toString(), 10)]);
                }
            }
            var childMessages = this.getMessagesFromConnectorDetails(allConditions);
            var directChildBoundary = this.getBoundaryFromMessages(childMessages);
            var nestedChildBoundary = this.calculateChildFragmentBoundary(child);
            var combined = this.combineBoundaries(directChildBoundary, nestedChildBoundary);
            if (combined) {
                childBoundaries.push(combined);
            }
        }
        if (childBoundaries.length === 0) {
            return undefined;
        }
        var minLeft = Math.min.apply(null, childBoundaries.map(function (rect) { return rect.left; }));
        var minTop = Math.min.apply(null, childBoundaries.map(function (rect) { return rect.top; }));
        var maxRight = Math.max.apply(null, childBoundaries.map(function (rect) { return rect.right; }));
        var maxBottom = Math.max.apply(null, childBoundaries.map(function (rect) { return rect.bottom; }));
        return new Rect(minLeft, minTop, maxRight - minLeft, maxBottom - minTop);
    };
    FragmentRenderer.combineBoundaries = function (messageBoundary, childBoundary) {
        if (!childBoundary) {
            return messageBoundary;
        }
        var extraSpace = this.model.maxParticipantWidth / 4;
        var combined = new Rect(Math.min(messageBoundary.left, childBoundary.left) - extraSpace, Math.min(messageBoundary.top, childBoundary.top) - extraSpace, Math.max(messageBoundary.right, childBoundary.right) - Math.min(messageBoundary.left, childBoundary.left) + extraSpace * 2, Math.max(messageBoundary.bottom, childBoundary.bottom) - Math.min(messageBoundary.top, childBoundary.top) + extraSpace * 2);
        return this.adjustCombinedBoundary(combined, messageBoundary, childBoundary);
    };
    FragmentRenderer.adjustCombinedBoundary = function (combined, messageBoundary, childBoundary) {
        var margin = this.settings.messageSpacing / 2;
        // If parent's message boundary is missing but we have child boundaries,
        // apply an upward adjustment so that the parent's top is pushed further upward.
        if (!messageBoundary && childBoundary) {
            return new Rect(combined.left, combined.top - margin, combined.width, combined.height + margin);
        }
        // If both boundaries exist and the parent's top is below the child's top, adjust.
        if (messageBoundary && childBoundary && messageBoundary.top > childBoundary.top) {
            return new Rect(combined.left, combined.top - margin, combined.width, combined.height + margin);
        }
        return combined;
    };
    FragmentRenderer.getMinCoordinates = function (messages) {
        var minX = Number.POSITIVE_INFINITY;
        var minY = Number.POSITIVE_INFINITY;
        for (var i = 0; i < messages.length; i++) {
            var connector = messages[parseInt(i.toString(), 10)];
            var x = Math.min(connector.sourcePoint.x, connector.targetPoint.x);
            var y = Math.min(connector.sourcePoint.y, connector.targetPoint.y);
            if (x < minX) {
                minX = x;
            }
            if (y < minY) {
                minY = y;
            }
        }
        return { x: minX, y: minY };
    };
    FragmentRenderer.getMaxCoordinates = function (messages) {
        var maxX = Number.NEGATIVE_INFINITY;
        var maxY = Number.NEGATIVE_INFINITY;
        for (var i = 0; i < messages.length; i++) {
            var connector = messages[parseInt(i.toString(), 10)];
            var x = Math.max(connector.sourcePoint.x, connector.targetPoint.x);
            var y = Math.max(connector.sourcePoint.y, connector.targetPoint.y);
            if (x > maxX) {
                maxX = x;
            }
            if (y > maxY) {
                maxY = y;
            }
        }
        return { x: maxX, y: maxY };
    };
    FragmentRenderer.calculateAltFragmentBoundary = function (fragment) {
        var connectors = [].concat.apply([], fragment.conditions.map(function (condition) {
            return condition.connectors;
        }));
        var messageBoundary = undefined;
        if (connectors.length > 0) {
            var messages = this.getMessagesFromConnectorDetails(connectors);
            messageBoundary = this.getBoundaryFromMessages(messages);
        }
        var childBoundary = this.calculateChildFragmentBoundary(fragment);
        var extraSpace = this.model.maxParticipantWidth / 4;
        if (!messageBoundary && !childBoundary) {
            return undefined;
        }
        if (!messageBoundary) {
            var combined = new Rect(childBoundary.x - extraSpace, childBoundary.y - extraSpace, childBoundary.width + extraSpace * 2, childBoundary.height + extraSpace * 2);
            return this.adjustCombinedBoundary(combined, messageBoundary, childBoundary);
        }
        if (!childBoundary) {
            return messageBoundary;
        }
        return this.combineBoundaries(messageBoundary, childBoundary);
    };
    FragmentRenderer.getMessagesFromConnectorDetails = function (connectors) {
        var result = [];
        for (var i = 0; i < connectors.length; i++) {
            var conDetails = connectors[parseInt(i.toString(), 10)];
            // Filter model messages for each connector detail
            var filtered = [];
            for (var j = 0; j < this.model.messages.length; j++) {
                var connector = this.model.messages[parseInt(j.toString(), 10)];
                var details = UMLHelperClass.getParticipantDetails(connector);
                if (connector.id != null && connector.id.toString() === conDetails.id.toString() &&
                    details != null &&
                    this.stringEquals(details.sourceParticipantName, conDetails.source) &&
                    this.stringEquals(details.targetParticipantName, conDetails.target) &&
                    this.stringEquals(UMLHelperClass.getAnnotation(connector), conDetails.message)) {
                    filtered.push(connector);
                }
            }
            // Flatten into result array
            Array.prototype.push.apply(result, filtered);
        }
        return result;
    };
    // Case-insensitive comparison utility
    FragmentRenderer.stringEquals = function (a, b) {
        return a.toString().toLowerCase() === b.toString().toLowerCase();
    };
    FragmentRenderer.getMessageFromConnectorDetails = function (id, source, target, message) {
        return this.model.messages.find(function (connector) {
            var details = UMLHelperClass.getParticipantDetails(connector);
            return connector.id != null &&
                connector.id.toString().toLowerCase() === id.toLowerCase() &&
                details != null &&
                details.sourceParticipantName.toLowerCase() === source.toLowerCase() &&
                details.targetParticipantName.toLowerCase() === target.toLowerCase() &&
                UMLHelperClass.getAnnotation(connector).toLowerCase() === message.toLowerCase();
        });
    };
    FragmentRenderer.calculateCenterYBetweenConditions = function (firstCondition, secondCondition) {
        var lastYFirstCondition = 0.0;
        var firstYSecondCondition = 0.0;
        if (firstCondition.altBlockDetails.connectors.length > 0) {
            var lastConnectorInFirstConditionDetail = firstCondition.altBlockDetails.connectors[firstCondition.altBlockDetails.connectors.length - 1];
            if (lastConnectorInFirstConditionDetail.inFragment) {
                var firstFragmentNode = void 0;
                if (lastConnectorInFirstConditionDetail.fragmentIndex !== -1) {
                    firstFragmentNode = this.diagram.getObject(lastConnectorInFirstConditionDetail.fragmentIndex.toString() + '_Fragment');
                }
                else {
                    firstFragmentNode = this.diagram.getObject(lastConnectorInFirstConditionDetail.fragmentID + '_Fragment');
                }
                lastYFirstCondition = firstFragmentNode.wrapper.bounds.bottomLeft.y;
            }
            else {
                var lastConnectorInFirstCondition = this.getMessageFromConnectorDetails(lastConnectorInFirstConditionDetail.id, lastConnectorInFirstConditionDetail.source, lastConnectorInFirstConditionDetail.target, lastConnectorInFirstConditionDetail.message);
                if (lastConnectorInFirstCondition) {
                    lastYFirstCondition = lastConnectorInFirstCondition.targetPoint.y;
                }
            }
        }
        if (secondCondition.altBlockDetails.connectors.length > 0) {
            var firstConnectorInSecondConditionDetail = secondCondition.altBlockDetails.connectors[0];
            if (firstConnectorInSecondConditionDetail.inFragment) {
                var secondFragmentNode = void 0;
                if (firstConnectorInSecondConditionDetail.fragmentIndex !== -1) {
                    secondFragmentNode = this.diagram.getObject(firstConnectorInSecondConditionDetail.fragmentIndex.toString() + '_Fragment');
                }
                else {
                    secondFragmentNode = this.diagram.getObject(firstConnectorInSecondConditionDetail.fragmentID + '_Fragment');
                }
                firstYSecondCondition = secondFragmentNode.wrapper.bounds.topLeft.y;
            }
            else {
                var firstConnectorInSecondCondition = this.getMessageFromConnectorDetails(firstConnectorInSecondConditionDetail.id, firstConnectorInSecondConditionDetail.source, firstConnectorInSecondConditionDetail.target, firstConnectorInSecondConditionDetail.message);
                if (firstConnectorInSecondCondition) {
                    firstYSecondCondition = firstConnectorInSecondCondition.targetPoint.y;
                }
            }
        }
        if (lastYFirstCondition !== 0.0 && firstYSecondCondition !== 0.0) {
            return lastYFirstCondition + (firstYSecondCondition - lastYFirstCondition) / 2;
        }
        else if (lastYFirstCondition === 0.0 && firstYSecondCondition !== 0.0) {
            return firstYSecondCondition - 20;
        }
        else if (firstYSecondCondition === 0.0 && lastYFirstCondition !== 0.0) {
            return lastYFirstCondition + 10;
        }
        return 0.0;
    };
    FragmentRenderer.createFragmentNode = function (fragment, label, boundary) {
        var fragType = this.getFragmentType(fragment.type);
        var width = Math.max(boundary.width, this.model.maxParticipantWidth);
        var height = boundary.height + this.settings.messageSpacing;
        var id = fragment.index === 0 ? fragment.id.toString() : fragment.index.toString();
        var offsetX = boundary.x + (boundary.width / 2);
        var offsetY = (boundary.y + (boundary.height / 2)) - (this.settings.messageSpacing / 2);
        var annotations = [
            this.createAnnotation(fragType),
            this.createAnnotation(label ? '[' + label + ']' : '', 30)
        ];
        var fragmentNode = fragment.node;
        if (fragmentNode) {
            fragmentNode.id = id + '_Fragment';
            this.diagram.addLabels(fragmentNode, annotations);
            this.diagram.protectPropertyChange(true);
            fragmentNode.width = width;
            fragmentNode.height = height;
            fragmentNode.offsetX = offsetX;
            fragmentNode.offsetY = offsetY;
            fragmentNode.shape = { type: 'Path', data: this.getGeneralFragmentShape(width, height) };
            this.diagram.preventNodesUpdate = true;
            this.diagram.nodePropertyChange(fragmentNode, {}, {
                offsetX: fragmentNode.offsetX, offsetY: fragmentNode.offsetY, width: fragmentNode.width, height: fragmentNode.height,
                annotations: fragmentNode.annotations
            }, true);
            this.diagram.preventNodesUpdate = false;
        }
        else {
            fragment.node = new Node(this.diagram, 'nodes', {
                id: id + '_Fragment',
                annotations: annotations,
                width: width,
                height: height,
                offsetX: offsetX,
                offsetY: offsetY,
                shape: { type: 'Path', data: this.getGeneralFragmentShape(width, height) },
                style: { fill: 'transparent', strokeColor: '#000000', strokeWidth: 1 }
            }, true);
            fragment.node = this.diagram.add(fragment.node);
        }
    };
    FragmentRenderer.getGeneralFragmentShape = function (rectWidth, rectHeight) {
        var taperWidth = 40;
        var taperHeight = 12;
        // 1) Main bounding rectangle path
        var boundingRect = 'M 0,0 ' +
            'L ' + rectWidth + ',0 ' +
            'L ' + rectWidth + ',' + rectHeight + ' ' +
            'L 0,' + rectHeight + ' Z';
        // 2) Tapered rectangle path at the top-left
        var taperControlOffset = taperWidth * 0.2;
        var taperRect = 'M 0,0 ' +
            'H ' + taperWidth + ' ' +
            'V ' + taperHeight + ' ' +
            'C ' + (taperWidth - taperControlOffset) + ' ' + (taperHeight + taperControlOffset) + ' ' +
            taperWidth + ' ' + taperHeight + ' ' +
            (taperWidth - taperControlOffset) + ' ' + (taperHeight + taperControlOffset) + ' ' +
            'H 0 Z';
        // Use EvenOdd toggling:
        // Subpath #1: boundingRect (fill on)
        // Subpath #2: boundingRect again (fill off)
        // Subpath #3: taperRect (fill on for just the taper area)
        return boundingRect + ' ' + boundingRect + ' ' + taperRect;
    };
    FragmentRenderer.getFragmentType = function (type) {
        switch (type) {
            case UmlSequenceFragmentType.Alternative:
                return 'alt';
            case UmlSequenceFragmentType.Loop:
                return 'loop';
            case UmlSequenceFragmentType.Optional:
                return 'opt';
            default:
                throw new Error('Invalid fragment type');
        }
    };
    FragmentRenderer.createAnnotation = function (content, topOffset) {
        if (topOffset === void 0) { topOffset = 9; }
        return {
            content: content,
            offset: { x: 0, y: 0 },
            horizontalAlignment: 'Left',
            verticalAlignment: 'Top',
            margin: { left: 9, top: topOffset, right: 5, bottom: 5 },
            style: { bold: true }
        };
    };
    return FragmentRenderer;
}());
//#endregion
//#region LifeLineRenderer
var LifeLineRenderer = /** @class */ (function () {
    function LifeLineRenderer() {
    }
    // Helper Methods
    /**
     * @param {Diagram} diagram - diagram instance
     * @param {SequenceDiagramModel} model - orchestrates the model api for rendering the sequence diagram.
     * @param {Node} participant - participant node
     * @param {UmlSequenceDiagram} settings - model api
     * @returns {void}
     * @private
     */
    LifeLineRenderer.render = function (diagram, model, participant, settings) {
        this.diagram = diagram;
        this.model = model;
        this.settings = settings;
        var startPoint = { x: participant.offsetX, y: participant.offsetY + model.maxParticipantHeight };
        var endPoint = { x: startPoint.x, y: startPoint.y + settings.initialLifelineLength };
        var targetNode = null;
        if (!settings.hideFootBox &&
            model.destroyedParticipants.indexOf(participant.id.toString()) === -1 &&
            model.destroyAtEndParticipants.indexOf(participant.id.toString()) === -1) {
            targetNode = this.renderFootBoxNode(participant);
            targetNode.offsetX = endPoint.x;
            targetNode.offsetY = endPoint.y;
        }
        this.createCenterPort(participant);
        this.createLifelineConnector(participant, targetNode, endPoint);
    };
    LifeLineRenderer.createCenterPort = function (participant) {
        var centerPort = new PointPort(this.diagram, 'ports', {
            id: participant.id + "_center_port",
            shape: null
        });
        this.diagram.addPorts(participant, [centerPort]);
        this.diagram.protectPropertyChange(true);
    };
    LifeLineRenderer.createLifelineConnector = function (sourceNode, targetNode, endPoint) {
        // fetch the life line connector using participant name
        var lifeline = this.lifelines.get(sourceNode.id);
        // Connect to footbox node's port if present
        if (targetNode && targetNode.ports && targetNode.ports.length > 0) {
            var port = targetNode.ports[0];
            lifeline.targetPortID = port.id;
            lifeline.targetID = targetNode.id;
            var tarpadding = targetNode.height / 2;
            // compenstate port height to approximate to correct end point - bug to be resolved
            lifeline.targetPadding = -(tarpadding + port.height / 2);
            // Manually update the lifeLine target point with the expected value considering compensated padding value
            lifeline.targetPoint = { x: targetNode.offsetX, y: targetNode.offsetY - tarpadding };
        }
        // Otherwise, position lifeline endpoint
        else {
            lifeline.targetPoint = endPoint;
        }
        // Connect to source node's port
        if (sourceNode && sourceNode.ports && sourceNode.ports.length > 0) {
            var port = sourceNode.ports[0];
            lifeline.sourcePortID = port.id;
            lifeline.sourceID = sourceNode.id;
            // add padding so that lifeline connectors have some gap from participants
            // Calculate padding for stereotypes vs actors/regular participants using path data
            var hasLabelBelow = UMLHelperClass.isActor(sourceNode) || UMLHelperClass.isSpecialParticipantType(sourceNode);
            var srcpadding = UMLHelperClass.calculateSourcePadding(sourceNode, hasLabelBelow);
            // compenstate port height to approximate to correct end point - bug to be resolved
            lifeline.sourcePadding = srcpadding - port.height / 2;
            // Manually update the lifeLine source point with the expected value considering compensated padding value
            lifeline.sourcePoint = { x: sourceNode.offsetX, y: sourceNode.offsetY + srcpadding };
        }
        lifeline.annotations = null;
        lifeline.sourceDecorator = { shape: 'None' };
        lifeline.targetDecorator = { shape: 'None' };
        lifeline.constraints = lifeline.constraints &
            ~(ConnectorConstraints.DragSourceEnd | ConnectorConstraints.Delete);
        return lifeline;
    };
    LifeLineRenderer.renderFootBoxNode = function (participant) {
        var footBoxNode = new Node(this.diagram, 'nodes', {
            id: "FootBox_" + participant.id,
            width: participant.width,
            height: participant.height,
            shape: participant.shape,
            annotations: participant.annotations,
            style: participant.style,
            ports: [{ id: participant.id + '_center_port', shape: null }]
        }, true);
        return this.diagram.add(footBoxNode);
    };
    /**
     * @param {Node} participant - participant node
     * @param {number} lifelineLength - length of lifeline
     * @returns {void}
     * @private
     */
    LifeLineRenderer.updateLifelineLength = function (participant, lifelineLength) {
        // fetch the life line connector using participant name
        var lifelineConnector = this.lifelines.get(participant.id);
        if (this.settings.hideFootBox) {
            lifelineConnector.targetPoint = {
                x: lifelineConnector.targetPoint.x,
                y: participant.offsetY + this.model.maxParticipantHeight + lifelineLength
            };
            if (this.model.destroyAtEndParticipants.indexOf(participant.id.toString()) !== -1 &&
                this.model.destroyedParticipants.indexOf(participant.id.toString()) === -1) {
                this.updateDestroyMark(lifelineConnector);
            }
        }
        else {
            var targetNodeId_1 = lifelineConnector.targetID;
            var offsetY = participant.offsetY + this.model.maxParticipantHeight + lifelineLength;
            if (targetNodeId_1) {
                var targetNode = this.diagram.nodes.find(function (node) { return node.id === targetNodeId_1; });
                // if it is a footbox node
                targetNode.offsetY = offsetY;
            }
            // if not a footbox node, it would be a destroy node
            else {
                if (this.model.destroyAtEndParticipants.indexOf(participant.id.toString()) !== -1 &&
                    this.model.destroyedParticipants.indexOf(participant.id.toString()) === -1) {
                    lifelineConnector.targetPoint = { x: lifelineConnector.targetPoint.x, y: offsetY };
                    this.updateDestroyMark(lifelineConnector);
                }
            }
        }
    };
    /**
     * @param {Node} participant - participant node
     * @param {number} yPosition - yPosition of message
     * @returns {void}
     * @private
     */
    LifeLineRenderer.updateLifelinePosition = function (participant, yPosition) {
        // fetch the life line connector using participant name
        var lifelineConnector = this.lifelines.get(participant.id);
        // Check if participant is actor or one of the special types (boundary, control, entity, database) using path data
        var hasLabelBelow = UMLHelperClass.isActor(participant) || UMLHelperClass.isSpecialParticipantType(participant);
        var padding = UMLHelperClass.calculateSourcePadding(participant, hasLabelBelow);
        lifelineConnector.sourcePoint = {
            x: lifelineConnector.sourcePoint.x, y: yPosition + padding
        };
    };
    /**
     * @param {Node} participant - participant node
     * @param {Connector} destroyMessage - destory message
     * @param {number} destroyYPosition - destroying y position
     * @returns {void}
     * @private
     */
    LifeLineRenderer.updateLifelineToDestroy = function (participant, destroyMessage, destroyYPosition) {
        // fetch the life line connector using participant name
        var lifelineConnector = this.lifelines.get(participant.id);
        // added 20px yOffset before destroying from connector message
        destroyYPosition += 20;
        lifelineConnector.targetPoint = {
            x: lifelineConnector.targetPoint.x,
            y: destroyYPosition
        };
        this.updateDestroyMark(lifelineConnector);
    };
    LifeLineRenderer.updateDestroyMark = function (lifeline) {
        lifeline.targetDecorator = {
            shape: 'Custom',
            pathData: 'M 0,0 L 25,25 M 25,0 L 0,25',
            pivot: { x: 0.5, y: 0.5 },
            style: {
                fill: 'none',
                strokeColor: '#000000',
                strokeWidth: 1
            }
        };
    };
    /**
     * @returns {void}
     * @private
     */
    LifeLineRenderer.clearLifelines = function () {
        this.lifelines.clear();
    };
    /**
     * @returns {void}
     * @private
     */
    LifeLineRenderer.clearPorts = function () {
        this.lifelines.forEach(function (lifeline, id) {
            lifeline.ports = [];
        });
    };
    // Fields
    /**
     * The string key represents the participant's name in the sequence diagram,
     * the value is a Connector object that represents the lifeline associated with that participant.
     * @private
     */
    LifeLineRenderer.lifelines = new Map();
    return LifeLineRenderer;
}());
//#endregion
//#endregion
var actor = 'M4.5000001,12.548 L18.5,12.548 C20.709,12.548 22.5,14.335995 22.5,16.542004 L22.5,32.516996 19.5,32.516996 19.5,24.529997 17.5,24.529997 17.5,43.5 12.5,43.5 12.5,35.512999 C12.5,34.960997 12.052002,34.514006 11.5,34.514006 10.947998,34.514006 10.5,34.960997 10.5,35.512999 L10.5,43.5 5.4999996,43.5 5.4999996,24.529997 3.5000001,24.529997 3.5000001,32.516996 0.5,32.516996 0.5,16.542004 C0.50000012,14.335995 2.2910005,12.548 4.5000001,12.548 z M11.499001,0.5 C14.305002,0.5 16.580004,2.795001 16.580004,5.6260009 16.580004,8.4570012 14.305002,10.752001 11.499001,10.752002 8.6939994,10.752001 6.4189988,8.4570012 6.4189988,5.6260009 6.4189988,2.795001 8.6939994,0.5 11.499001,0.5 z';
var rectangle = 'M242,1078L231,1078L231,1067L242,1067z';
var MermaidUmlParser = /** @class */ (function () {
    function MermaidUmlParser(diagram) {
        this.lines = [];
        this.activationCache = new Map();
        this.fragmentStack = [];
        this.currentCondition = null;
        this.diagram = diagram;
        this.sequenceDiagramModel = new SequenceDiagramModel(diagram);
        this.sequenceDiagramModel.isLoadedFromMermaid = true;
    }
    MermaidUmlParser.prototype.normalizeText = function (text) {
        return text
            ? text.replace(/<br\s*\/?>/gi, '\n')
            : text;
    };
    MermaidUmlParser.prototype.parseFlexibleMetadata = function (metadata) {
        if (!metadata) {
            return {};
        }
        // Remove outer braces and trim
        var content = metadata.trim();
        if (content.startsWith('{') && content.endsWith('}')) {
            content = content.slice(1, -1).trim();
        }
        if (!content) {
            return {};
        }
        try {
            // First try direct JSON parse (handles strict JSON)
            return JSON.parse('{' + content + '}');
        }
        catch (e1) {
            // If strict JSON fails, try to normalize unquoted keys/values
            try {
                // Regex pattern to match key:value pairs
                var normalizedContent = content.replace(/(?:^|,)\s*(?:"([^"]*)"|([a-zA-Z_$][a-zA-Z0-9_$]*))\s*:\s*(?:"([^"]*)"|([a-zA-Z_$][a-zA-Z0-9_$]*)|(\d+)|true|false)/g, function (match, quotedKey, unquotedKey, quotedValue, unquotedValue, numberValue) {
                    var prefix = match.startsWith(',') ? ',' : '';
                    // Use quoted key if present, otherwise use unquoted key
                    var key = quotedKey !== undefined ? quotedKey : unquotedKey;
                    var quotedKeyFinal = "\"" + key + "\"";
                    if (quotedValue !== undefined) {
                        // Value is already quoted
                        return "" + prefix + quotedKeyFinal + ":\"" + quotedValue + "\"";
                    }
                    else if (unquotedValue) {
                        // Value is an unquoted identifier - quote it
                        return "" + prefix + quotedKeyFinal + ":\"" + unquotedValue + "\"";
                    }
                    else if (numberValue !== undefined) {
                        // Value is a number - keep as is
                        return "" + prefix + quotedKeyFinal + ":" + numberValue;
                    }
                    else {
                        // Value is boolean (true/false) - keep as is
                        var booleanMatch = match.match(/true|false/i);
                        if (booleanMatch) {
                            return "" + prefix + quotedKeyFinal + ":" + booleanMatch[0];
                        }
                        return match;
                    }
                });
                return JSON.parse('{' + normalizedContent + '}');
            }
            catch (e2) {
                // If normalization fails, return empty object
                console.warn("[WARNING] :: Failed to parse metadata: '" + metadata + "'. Using defaults.");
                return {};
            }
        }
    };
    /**
     * parse memaidUmlSequenceData into an internal SequenceDiagramModel object model
     * @param {string} mermaidUmlCode - mermaid data
     * @returns {SequenceDiagramModel} - an internal model to render the sequence diagram
     * @private
     */
    MermaidUmlParser.prototype.parse = function (mermaidUmlCode) {
        this.lines = mermaidUmlCode.split(/\r?\n/).filter(function (line) { return line.trim().length > 0; });
        for (var index = 1; index <= this.lines.length; index++) {
            var line = this.lines[index - 1];
            this.parseLine(line.trim(), index);
        }
        return this.sequenceDiagramModel;
    };
    MermaidUmlParser.prototype.parseLine = function (line, index) {
        /* eslint-disable security/detect-unsafe-regex */
        if (/^\s*(create|destroy)\b/i.test(line)) {
            this.parseCreateOrDestroyMessage(line, index);
        }
        else if (/^\s*(participant|actor)\b/i.test(line)) {
            this.parseParticipant(line);
        }
        else if (/([\w/.\-_ ()]+?)\s*(<<-{1,2}|-{1,2}>>?|-{1,2}x|\(-{1,2}\)|-{1,2}\)|<<-{1,2}>>?|-{0,2}\|[/\\]-{0,2}|-{0,2}[/\\]\|-{0,2}|-{0,2}\\\\-{0,2}|-{0,2}\/\/-{0,2}|\/\/-{0,2}|-{0,2}\/-{0,2}|-{1,2}\\\\|--?\\|--?)(?!\s*[+-])\s*([\w/.\-_ ()]+?)\s*:\s*.+/.test(line)) {
            // PHASE 7 FIX: Added negative lookahead (?!\s*[+-]) to connector pattern
            // This prevents matching lines with activation symbols (+/-) immediately after the arrow
            // Lines with activation symbols will now fall through to parseActivation instead
            this.parseConnector(line, index);
        }
        else if (/^(?!\s*(alt|else if|else|opt|loop|end)\b)(?!\w+\s*--?\)\s*\w+\s*:)(?=.*(?:activate|deactivate)\b|.*[+-])/i.test(line)) {
            this.parseActivation(line, index);
        }
        else if (/^\s*(alt|else if|else|opt|loop|end)(?:\s+(.*))?/i.test(line)) {
            this.parseFragment(line, index);
        }
        /* eslint-enable security/detect-unsafe-regex */
    };
    MermaidUmlParser.prototype.parseCreateOrDestroyMessage = function (line, index) {
        // Determine if this is a create or destroy message
        var isCreate = /^\s*create\b/i.test(line);
        if (isCreate) {
            // PHASE 3 FIX: Extended regex to capture @{...} metadata (stereotype type)
            // PHASE 3 FIXED: Removed \s from character class and changed +? to + (participant IDs don't have spaces)
            /* eslint-disable security/detect-unsafe-regex */
            var match = line.match(/create\s+(participant|actor)\s+([A-Za-z0-9._-]+)(?:@(\{[^}]*\}))?(?:\s+as\s+(.+))?/i);
            /* eslint-enable security/detect-unsafe-regex */
            if (!match) {
                console.warn('[WARNING] :: Invalid create syntax: \'' + line + '\'.');
                return;
            }
            var type = match[1];
            var participantName = match[2].trim();
            var metadata = match[3]; // @{...} JSON metadata
            var externalAlias = match[4] ? match[4].trim() : null;
            var affectedParticipant = externalAlias || participantName;
            // PHASE 3 NEW: Parse stereotype from metadata (same logic as parseParticipant)
            var participantType = undefined;
            var inlineAlias = undefined;
            if (metadata) {
                var parsed = this.parseFlexibleMetadata(metadata);
                participantType = parsed.type;
                inlineAlias = parsed.alias;
                // Validate stereotype against enum
                if (participantType && !UMLHelperClass.isValidStereotype(participantType)) {
                    console.warn("[WARNING] :: Unknown stereotype type: '" + participantType + "'. Using default.");
                    participantType = undefined;
                }
            }
            this.createOrGetParticipant(participantName, externalAlias, type.toLowerCase() === 'actor', participantType, inlineAlias);
            var nextIndex = index;
            var nextLine = null;
            while (nextIndex < this.lines.length) {
                nextLine = this.lines[parseInt(nextIndex.toString(), 10)].trim();
                if (nextLine && !nextLine.startsWith('%%')) {
                    break;
                }
                nextIndex++;
            }
            // PHASE 4 FIX: Extended arrow pattern to include all arrow types incl. half-arrows (\\--, -\\, -//, --//, etc.)
            /* eslint-disable security/detect-unsafe-regex */
            if (nextIndex < this.lines.length && /([\w/.\-_ ()]+?)\s*(<<-{1,2}|-{1,2}>>?|-{1,2}x|\(-{1,2}\)|-{1,2}\)|<<-{1,2}>>?|-{0,2}\|[/\\]-{0,2}|-{0,2}[/\\]\|-{0,2}|-{0,2}\\\\-{0,2}|-{0,2}\/\/-{0,2}|\/\/-{0,2}|-{0,2}\/-{0,2}|-{1,2}\\\\|--?\\|--?)\s*([\w/.\-_ ()]+?)\s*:\s*.+/.test(nextLine)) {
                var connectorMatch = nextLine.match(/([\w/.\-_ ()]+?)\s*(<<-{1,2}|-{1,2}>>?|-{1,2}x|\(-{1,2}\)|-{1,2}\)|<<-{1,2}>>?|-{0,2}\|[/\\]-{0,2}|-{0,2}[/\\]\|-{0,2}|-{0,2}\\\\-{0,2}|-{0,2}\/\/-{0,2}|\/\/-{0,2}|-{0,2}\/-{0,2}|-{1,2}\\\\|--?\\|--?)\s*([\w/.\-_ ()]+?)\s*:\s*(.+)/);
                /* eslint-enable security/detect-unsafe-regex */
                if (connectorMatch) {
                    var source = connectorMatch[1];
                    var arrow = connectorMatch[2];
                    var target = connectorMatch[3];
                    var message = connectorMatch[4];
                    if (source.toLowerCase() === participantName.toLowerCase() ||
                        target.toLowerCase() === participantName.toLowerCase()) {
                        //Bug 974517: Error thrown in UML Sequence diagram connectors customization.
                        var createConnector = new Connector(this.diagram, 'connectors', {
                            id: (nextIndex + 1).toString()
                        }, true);
                        UMLHelperClass.addOrUpdateParticipantDetails(createConnector, source, target, UmlSequenceMessageType.Create, participantName);
                        UMLHelperClass.updateAnnotation(createConnector, message);
                        UMLHelperClass.updateConnectorStyles(createConnector, this.getMermaidConnectorTypeFromArrow(arrow).toString());
                        this.sequenceDiagramModel.affectedParticipants.push(participantName);
                        this.sequenceDiagramModel.addMessage(createConnector);
                        this.registerConnectorInCondition(createConnector, nextIndex + 1);
                    }
                }
            }
        }
        else {
            // PHASE 3 FIX: Extended regex to capture @{...} metadata (stereotype type)
            // PHASE 3 FIXED: Removed \s from character class and changed +? to + (participant IDs don't have spaces)
            /* eslint-disable security/detect-unsafe-regex */
            var match = line.match(/destroy\s+([A-Za-z0-9._-]+)(?:@(\{[^}]*\}))?(?:\s+as\s+(.+))?/i);
            /* eslint-enable security/detect-unsafe-regex */
            if (!match) {
                console.warn('[WARNING] :: Invalid destroy syntax: \'' + line + '\'.');
                return;
            }
            var participantName = match[1].trim();
            var metadata = match[2]; // @{...} JSON metadata
            var externalAlias = match[3] ? match[3].trim() : null;
            // PHASE 3 NEW: Parse stereotype from metadata (same logic as parseParticipant)
            var participantType = undefined;
            var inlineAlias = undefined;
            if (metadata) {
                var parsed = this.parseFlexibleMetadata(metadata);
                participantType = parsed.type;
                inlineAlias = parsed.alias;
                // Validate stereotype against enum
                if (participantType && !UMLHelperClass.isValidStereotype(participantType)) {
                    console.warn("[WARNING] :: Unknown stereotype type: '" + participantType + "'. Using default.");
                    participantType = undefined;
                }
            }
            if (!this.sequenceDiagramModel.participants.has(participantName)) {
                console.warn('[WARNING] :: Participant \'' + participantName + '\' not found for destroy.');
                return;
            }
            var nextIndex = index;
            var nextLine = null;
            while (nextIndex < this.lines.length) {
                nextLine = this.lines[parseInt(nextIndex.toString(), 10)].trim();
                if (nextLine && !nextLine.startsWith('%%')) {
                    break;
                }
                nextIndex++;
            }
            // PHASE 4 FIX: Extended arrow pattern to include all arrow types incl. half-arrows (\\--, -\\, -//, --//, etc.)
            /* eslint-disable security/detect-unsafe-regex */
            if (nextIndex < this.lines.length && /([\w/.\-_ ()]+?)\s*(<<-{1,2}|-{1,2}>>?|-{1,2}x|\(-{1,2}\)|-{1,2}\)|<<-{1,2}>>?|-{0,2}\|[/\\]-{0,2}|-{0,2}[/\\]\|-{0,2}|-{0,2}\\\\-{0,2}|-{0,2}\/\/-{0,2}|\/\/-{0,2}|-{0,2}\/-{0,2}|-{1,2}\\\\|--?\\|--?)\s*([\w/.\-_ ()]+?)\s*:\s*.+/.test(nextLine)) {
                var connectorMatch = nextLine.match(/([\w/.\-_ ()]+?)\s*(<<-{1,2}|-{1,2}>>?|-{1,2}x|\(-{1,2}\)|-{1,2}\)|<<-{1,2}>>?|-{0,2}\|[/\\]-{0,2}|-{0,2}[/\\]\|-{0,2}|-{0,2}\\\\-{0,2}|-{0,2}\/\/-{0,2}|\/\/-{0,2}|-{0,2}\/-{0,2}|-{1,2}\\\\|--?\\|--?)\s*([\w/.\-_ ()]+?)\s*:\s*(.+)/);
                /* eslint-enable security/detect-unsafe-regex */
                if (connectorMatch) {
                    var source = connectorMatch[1];
                    var arrow = connectorMatch[2];
                    var target = connectorMatch[3];
                    var message = connectorMatch[4];
                    if (source.toLowerCase() === participantName.toLowerCase() ||
                        target.toLowerCase() === participantName.toLowerCase()) {
                        var destroyConnector = new Connector(this.diagram, 'connectors', {
                            id: (nextIndex + 1).toString()
                        }, true);
                        UMLHelperClass.addOrUpdateParticipantDetails(destroyConnector, source, target, UmlSequenceMessageType.Delete, participantName);
                        UMLHelperClass.updateAnnotation(destroyConnector, message);
                        UMLHelperClass.updateConnectorStyles(destroyConnector, this.getMermaidConnectorTypeFromArrow(arrow).toString());
                        if (this.sequenceDiagramModel.affectedParticipants.indexOf(participantName) === -1) {
                            this.sequenceDiagramModel.affectedParticipants.push(participantName);
                        }
                        this.sequenceDiagramModel.destroyedParticipants.push(participantName);
                        this.sequenceDiagramModel.addMessage(destroyConnector);
                        this.registerConnectorInCondition(destroyConnector, nextIndex + 1);
                    }
                }
            }
        }
    };
    MermaidUmlParser.prototype.parseParticipant = function (line) {
        // PHASE B: Extended regex to support @{...} metadata syntax
        // PHASE 3 FIXED: Removed \s from character class and changed +? to + (participant IDs don't have spaces)
        /* eslint-disable security/detect-unsafe-regex */
        var stereotypeRegex = /^(participant|actor)\s+([A-Za-z0-9._-]+)(?:@(\{[^}]*\}))?(?:\s+as\s+(.+))?$/i;
        var match = stereotypeRegex.exec(line);
        /* eslint-enable security/detect-unsafe-regex */
        if (!match) {
            console.warn('[WARNING] :: Invalid participant syntax: \'' + line + '\'.');
            return;
        }
        var type = match[1]; // 'participant' or 'actor'
        var id = match[2].trim(); // participant ID
        var metadata = match[3]; // @{...} JSON metadata (PHASE B NEW)
        var externalAlias = match[4]; // 'as DisplayName' (PHASE B NEW: inline alias support)
        // PHASE B NEW: Parse stereotype and inline alias from metadata
        var participantType = undefined;
        var inlineAlias = undefined;
        if (metadata) {
            var parsed = this.parseFlexibleMetadata(metadata);
            participantType = parsed.type;
            inlineAlias = parsed.alias; // NEW: inline alias support
            // Validate stereotype against enum
            if (participantType && !UMLHelperClass.isValidStereotype(participantType)) {
                console.warn("[WARNING] :: Unknown stereotype type: '" + participantType + "'. Using default.");
                participantType = undefined;
            }
        }
        var isActor = type.toLowerCase() === 'actor';
        this.createOrGetParticipant(id, externalAlias, isActor, participantType, inlineAlias); // NEW: pass inlineAlias
    };
    MermaidUmlParser.prototype.parseConnector = function (line, index) {
        // Check if the message is already processed
        if (this.sequenceDiagramModel.messages.some(function (message) { return message.id.toString() === index.toString(); })) {
            return;
        }
        line = this.removeActivationSymbols(line);
        // Pattern captures: source (arrow-syntax) target : message
        // Includes support for: solid/dashed, arrows, half-arrows, crosses, etc.
        // Supports central connections with () syntax (e.g., Alice()->>Bob or Alice->>()Bob)
        // NOTE: Longer patterns must be checked before shorter ones to avoid premature matches
        // e.g., "-//" must be checked before "-/", "--//" before "--/", "//-" before "-/"
        /* eslint-disable security/detect-unsafe-regex */
        var pattern = /([\w/.\-_ ()]+?)\s*(<<-{1,2}|-{1,2}>>?|-{1,2}x|\(-{1,2}\)|-{1,2}\)|<<-{1,2}>>?|-{0,2}\|[/\\]-{0,2}|-{0,2}[/\\]\|-{0,2}|-{0,2}\\\\-{0,2}|-{0,2}\/\/-{0,2}|\/\/-{0,2}|-{0,2}\/-{0,2}|-{1,2}\\\\|--?\\|--?)\s*([\w/.\-_ ()]+?)\s*:\s*(.+)/;
        /* eslint-enable security/detect-unsafe-regex */
        var match = line.match(pattern);
        if (!match) {
            console.warn('[WARNING] :: Invalid connector syntax: \'' + line + '\'.');
            return;
        }
        var source = match[1];
        var arrow = match[2];
        var target = match[3];
        var message = match[4];
        message = this.normalizeText(message);
        // Trim whitespace from source and target
        source = source.trim();
        target = target.trim();
        // PHASE C: Detect central connection markers ()
        var centralConnectionSource = false;
        var centralConnectionTarget = false;
        if (source.endsWith('()')) {
            centralConnectionSource = true;
            source = source.slice(0, -2).trim();
        }
        if (target.startsWith('()')) {
            centralConnectionTarget = true;
            target = target.slice(2).trim();
        }
        // Dynamically create participants if not explicitly defined
        this.createOrGetParticipant(source);
        this.createOrGetParticipant(target);
        var connector = new Connector(this.diagram, 'connectors', { id: index.toString() }, true);
        if (centralConnectionSource) {
            connector.sourceCentralConnection = true;
        }
        if (centralConnectionTarget) {
            connector.targetCentralConnection = true;
        }
        UMLHelperClass.addOrUpdateParticipantDetails(connector, source, target, UmlSequenceMessageType.Synchronous, null);
        UMLHelperClass.updateAnnotation(connector, message);
        UMLHelperClass.updateConnectorStyles(connector, this.getMermaidConnectorTypeFromArrow(arrow).toString());
        this.sequenceDiagramModel.addMessage(connector);
        this.registerConnectorInCondition(connector, index);
    };
    MermaidUmlParser.prototype.parseActivation = function (line, index) {
        var participant;
        var source;
        var target;
        var message;
        if (line.startsWith('activate') || line.startsWith('deactivate')) {
            var match = line.match(/(activate|deactivate)\s+(\w+)/i);
            if (!match) {
                console.warn('[WARNING] :: Invalid activation syntax: \'' + line + '\'.');
                return;
            }
            var command = match[1].toLowerCase();
            participant = match[2];
            this.createOrGetParticipant(participant);
            // Attempt to retrieve source, target, and message from the previous line
            if (index > 1) {
                var prevIndex = index - 2;
                while (prevIndex >= 0) {
                    var previousLine = this.lines[parseInt(prevIndex.toString(), 10)].trim();
                    // Skip empty lines or comments
                    if (!previousLine || previousLine.startsWith('%%')) {
                        prevIndex--;
                        continue;
                    }
                    // PHASE 5 FIX: Extended arrow pattern to include half-arrows and all arrow types for activation lookup
                    /* eslint-disable security/detect-unsafe-regex */
                    var connectorMatch = previousLine.match(/([\w/.\-_ ()]+?)\s*(<<-{1,2}|-{1,2}>>?|-{1,2}x|\(-{1,2}\)|-{1,2}\)|<<-{1,2}>>?|-{0,2}\|[/\\]-{0,2}|-{0,2}[/\\]\|-{0,2}|-{0,2}\\\\-{0,2}|-{0,2}\/\/-{0,2}|\/\/-{0,2}|-{0,2}\/-{0,2}|-{1,2}\\\\|--?\|--?)\s*([\w/.\-_ ()]+?)\s*:\s*(.+)/);
                    /* eslint-enable security/detect-unsafe-regex */
                    if (connectorMatch) {
                        source = connectorMatch[1];
                        target = connectorMatch[3];
                        message = connectorMatch[4];
                        index = prevIndex + 2;
                        break;
                    }
                    prevIndex--;
                }
            }
            if (command === 'activate') {
                if (!this.activationCache.has(participant)) {
                    this.activationCache.set(participant, []);
                }
                this.activationCache.get(participant).push(new ConnectorDetails((index - 1).toString(), source, target, message, index));
            }
            else {
                if (this.activationCache.has(participant) && this.activationCache.get(participant).length > 0) {
                    var activation = this.activationCache.get(participant).pop();
                    var activationNode = new Node(this.diagram, 'nodes', {
                        id: participant + '_Activation_' + randomId(),
                        minHeight: 10, minWidth: 10
                    }, true);
                    UMLHelperClass.updateNodeShape(activationNode, false);
                    this.sequenceDiagramModel.addActivation(new ActivationModel(activationNode, participant, activation, new ConnectorDetails((index - 1).toString(), source, target, message, index)));
                    if (this.activationCache.get(participant).length === 0) {
                        this.activationCache.delete(participant);
                    }
                }
            }
        }
        else {
            this.parseConnector(line, index);
            // Handle symbol-based activation syntax with comprehensive arrow type support
            // PHASE 5 FIX: Extended arrow pattern to include half-arrows and all arrow types
            /* eslint-disable security/detect-unsafe-regex */
            var match = line.match(/([\w/.\-_ ()]+?)\s*(<<-{1,2}|-{1,2}>>?|-{1,2}x|\(-{1,2}\)|-{1,2}\)|<<-{1,2}>>?|-{0,2}\|[/\\]-{0,2}|-{0,2}[/\\]\|-{0,2}|-{0,2}\\\\-{0,2}|-{0,2}\/\/-{0,2}|\/\/-{0,2}|-{0,2}\/-{0,2}|-{1,2}\\\\|--?\|--?)\s*(\+|-)\s*([\w/.\-_ ()]+?)\s*:\s*(.+)/);
            /* eslint-enable security/detect-unsafe-regex */
            if (!match) {
                console.warn('[WARNING] :: Invalid activation syntax: \'' + line + '\'.');
                return;
            }
            source = match[1];
            var symbol = match[3];
            target = match[4];
            message = match[5];
            participant = symbol === '+' ? target : source;
            this.createOrGetParticipant(source);
            this.createOrGetParticipant(participant);
            if (symbol === '+') {
                if (!this.activationCache.has(participant)) {
                    this.activationCache.set(participant, []);
                }
                this.activationCache.get(participant).push(new ConnectorDetails(index.toString(), source, target, message, index));
            }
            else if (symbol === '-') {
                if (this.activationCache.has(participant) && this.activationCache.get(participant).length > 0) {
                    var activation = this.activationCache.get(participant).pop();
                    var activationNode = new Node(this.diagram, 'nodes', {
                        id: participant + '_Activation_' + randomId(),
                        minHeight: 10, minWidth: 10
                    }, true);
                    UMLHelperClass.updateNodeShape(activationNode, false);
                    this.sequenceDiagramModel.addActivation(new ActivationModel(activationNode, participant, activation, new ConnectorDetails(index.toString(), source, target, message, index)));
                    if (this.activationCache.get(participant).length === 0) {
                        this.activationCache.delete(participant);
                    }
                }
            }
        }
    };
    MermaidUmlParser.prototype.parseFragment = function (line, index) {
        var _this = this;
        /* eslint-disable security/detect-unsafe-regex */
        var match = line.match(/(alt|else|opt|loop|end)(?:\s+(.*))?/i);
        /* eslint-enable security/detect-unsafe-regex */
        var type = match[1].toLowerCase();
        var conditionContent = match[2] || null;
        if (type === 'end') {
            if (this.fragmentStack.length === 0) {
                console.warn('[WARNING] :: Unmatched \'end\' found.');
                return;
            }
            var completedFragment_1 = this.fragmentStack.pop();
            if (this.currentCondition !== null) {
                if (!completedFragment_1.conditions.some(function (c) { return c.content === _this.currentCondition.content; })) {
                    completedFragment_1.conditions.push(this.currentCondition);
                }
                this.currentCondition = null;
            }
            completedFragment_1.conditions.forEach(function (condition) {
                _this.populateConditionAltBlockDetails(condition, completedFragment_1);
            });
            if (this.fragmentStack.length > 0) {
                var parentFragment = this.fragmentStack[this.fragmentStack.length - 1];
                parentFragment.childFragments.push(completedFragment_1);
                if (parentFragment.type === UmlSequenceFragmentType.Alternative && parentFragment.conditions.length > 0) {
                    parentFragment.conditions[parentFragment.conditions.length - 1].nestedFragments.push(completedFragment_1);
                }
            }
            else {
                this.sequenceDiagramModel.addFragment(completedFragment_1);
            }
        }
        else {
            var currentFragment = null;
            if (this.fragmentStack.length > 0) {
                currentFragment = this.fragmentStack[this.fragmentStack.length - 1];
            }
            if (type === 'alt' || type === 'opt' || type === 'loop') {
                var newFragment = new FragmentModel('', UmlSequenceFragmentType.Optional, [], [], null, index, this.fragmentStack.length);
                switch (type) {
                    case 'alt':
                        newFragment.type = UmlSequenceFragmentType.Alternative;
                        break;
                    case 'opt':
                        newFragment.type = UmlSequenceFragmentType.Optional;
                        break;
                    case 'loop':
                        newFragment.type = UmlSequenceFragmentType.Loop;
                        break;
                }
                this.fragmentStack.push(newFragment);
                currentFragment = newFragment;
            }
            if (currentFragment && (type === 'alt' || type === 'opt' || type === 'loop' || type === 'else if' || type === 'else')) {
                var potentialCondition_1 = new ConditionModel(conditionContent, [], [], new AlternativeBlockDetails());
                if (!currentFragment.conditions.some(function (c) { return c.content === potentialCondition_1.content; })) {
                    this.currentCondition = potentialCondition_1;
                    currentFragment.conditions.push(potentialCondition_1);
                }
                else {
                    this.currentCondition = currentFragment.conditions.find(function (c) {
                        return c.content === potentialCondition_1.content;
                    }) || null;
                }
            }
        }
    };
    MermaidUmlParser.prototype.populateConditionAltBlockDetails = function (condition, fragment) {
        // Only add connectors that belong to this specific condition
        for (var _i = 0, _a = condition.connectors; _i < _a.length; _i++) {
            var connector = _a[_i];
            condition.altBlockDetails.connectors.push(new ConnectorWithFragmentDetails(connector.id, connector.source, connector.target, connector.message, -1, '', false, -1));
        }
        // Sort connectors by ID after adding them
        condition.altBlockDetails.connectors.sort(function (a, b) {
            return parseInt(a.id, 10) - parseInt(b.id, 10);
        });
        // Only process child fragments that belong to this specific condition
        for (var _b = 0, _c = condition.nestedFragments; _b < _c.length; _b++) {
            var childFragment = _c[_b];
            this.addChildFragmentConnectors(condition, childFragment);
        }
    };
    MermaidUmlParser.prototype.addChildFragmentConnectors = function (condition, childFragment) {
        for (var _i = 0, _a = childFragment.conditions; _i < _a.length; _i++) {
            var childCondition = _a[_i];
            // Ensure the child condition belongs to the current condition's block
            if (condition.nestedFragments.indexOf(childFragment) !== -1) {
                for (var _b = 0, _c = childCondition.connectors; _b < _c.length; _b++) {
                    var connector = _c[_b];
                    condition.altBlockDetails.connectors.push(new ConnectorWithFragmentDetails(connector.id, connector.source, connector.target, connector.message, -1, '', true, childFragment.index));
                }
                // Recursively process deeply nested fragments
                for (var _d = 0, _e = childFragment.childFragments; _d < _e.length; _d++) {
                    var nestedChildFragment = _e[_d];
                    this.addChildFragmentConnectors(condition, nestedChildFragment);
                }
            }
        }
        // Sort connectors by ID after adding them from child fragments
        condition.altBlockDetails.connectors.sort(function (a, b) {
            return parseInt(a.id, 10) - parseInt(b.id, 10);
        });
    };
    MermaidUmlParser.prototype.registerConnectorInCondition = function (connector, index) {
        var details = UMLHelperClass.getParticipantDetails(connector);
        // Ensure connectors are added to the appropriate active condition
        if (this.currentCondition) {
            var conDetails = new ConnectorDetails(index.toString(), details.sourceParticipantName, details.targetParticipantName, UMLHelperClass.getAnnotation(connector), index);
            this.currentCondition.connectors.push(conDetails);
        }
        else if (this.fragmentStack.length > 0) {
            // If no current condition, use the last condition in the top fragment stack
            var currentFragment = this.fragmentStack[this.fragmentStack.length - 1];
            if (currentFragment.conditions.length > 0) {
                var lastCondition = currentFragment.conditions[currentFragment.conditions.length - 1];
                var conDetails = new ConnectorDetails(index.toString(), details.sourceParticipantName, details.targetParticipantName, UMLHelperClass.getAnnotation(connector), index);
                lastCondition.connectors.push(conDetails);
            }
        }
    };
    MermaidUmlParser.prototype.getParticipantWidth = function (participantType) {
        if (participantType && participantType !== UmlSequenceParticipantStereotype.Default) {
            var config = UMLHelperClass.getStereotypeShape(participantType);
            return config && config.width != null ? config.width : 100;
        }
        return 100;
    };
    MermaidUmlParser.prototype.getParticipantHeight = function (participantType) {
        if (participantType && participantType !== UmlSequenceParticipantStereotype.Default) {
            var config = UMLHelperClass.getStereotypeShape(participantType);
            return config && config.height != null ? config.height : 50;
        }
        return 50;
    };
    MermaidUmlParser.prototype.createOrGetParticipant = function (id, externalAlias, isActor, participantType, inlineAlias) {
        if (isActor === void 0) { isActor = false; }
        if (!id || id.trim() === '') {
            console.warn('[WARNING] :: Participant name cannot be null or empty.');
            return;
        }
        // Resolve display content with priority: externalAlias > inlineAlias > id
        var displayContent = externalAlias || inlineAlias || id;
        // Node ID should always be the original participant ID (id), not the alias
        if (!this.sequenceDiagramModel.participants.has(id)) {
            var participant = new Node(this.diagram, 'nodes', {
                id: id,
                width: this.getParticipantWidth(participantType),
                height: this.getParticipantHeight(participantType)
            }, true);
            UMLHelperClass.updateNodeShape(participant, isActor, participantType);
            UMLHelperClass.updateAnnotation(participant, displayContent, isActor, participantType);
            this.sequenceDiagramModel.addParticipant(participant);
            // Add alias mapping if external alias was used
            if (externalAlias) {
                this.sequenceDiagramModel.addAlias(externalAlias, id);
            }
        }
    };
    MermaidUmlParser.prototype.getMermaidConnectorTypeFromArrow = function (arrow) {
        switch (arrow) {
            case '->':
                return MermaidConnectorType.Solid;
            case '-->':
                return MermaidConnectorType.Dashed;
            case '->>':
                return MermaidConnectorType.SolidArrow;
            case '-->>':
                return MermaidConnectorType.DashedArrow;
            case '<<->>':
                return MermaidConnectorType.Bidirectional;
            case '<<-->>':
                return MermaidConnectorType.DashedBidirectional;
            case '-)':
                return MermaidConnectorType.OpenArrow;
            case '--)':
                return MermaidConnectorType.DashedOpenArrow;
            case '-x':
                return MermaidConnectorType.SolidCross;
            case '--x':
                return MermaidConnectorType.DashedCross;
            // Half-arrow types: top half with pipe
            case '-|\\':
                return MermaidConnectorType.SolidHalfArrowTop;
            case '--|\\':
                return MermaidConnectorType.DashedHalfArrowTop;
            // Half-arrow types: bottom half with pipe
            case '-|/':
                return MermaidConnectorType.SolidHalfArrowBottom;
            case '--|/':
                return MermaidConnectorType.DashedHalfArrowBottom;
            // Half-arrow types: reverse top with pipe
            case '/|-':
                return MermaidConnectorType.SolidReverseHalfArrowTop;
            case '/|--':
                return MermaidConnectorType.DashedReverseHalfArrowTop;
            // Stick half-arrow types: top stick
            case '-\\\\':
                return MermaidConnectorType.SolidStickHalfArrowTop;
            case '--\\\\':
                return MermaidConnectorType.DashedStickHalfArrowTop;
            // Stick half-arrow types: bottom stick
            case '-//':
                return MermaidConnectorType.SolidStickHalfArrowBottom;
            case '--//':
                return MermaidConnectorType.DashedStickHalfArrowBottom;
            // Stick half-arrow types: reverse top stick
            case '//-':
                return MermaidConnectorType.SolidReverseStickHalfArrowTop;
            case '//--':
                return MermaidConnectorType.DashedReverseStickHalfArrowTop;
            // Stick half-arrow types: reverse bottom stick
            case '\\\\-':
                return MermaidConnectorType.SolidReverseStickHalfArrowBottom;
            case '\\\\--':
                return MermaidConnectorType.DashedReverseStickHalfArrowBottom;
            default:
                return MermaidConnectorType.SolidArrow;
        }
    };
    MermaidUmlParser.prototype.removeActivationSymbols = function (line) {
        // Regex to remove the + or - symbol and any optional spaces after ->>
        var pattern = /(->>\s*)(\+|-)(\s*\w+)/g;
        return line.replace(pattern, function (match, p1, p2, p3) { return p1 + p3; });
    };
    return MermaidUmlParser;
}());
var MermaidGenerator = /** @class */ (function () {
    function MermaidGenerator() {
    }
    /**
     * Generates mermaid text from diagram's model
     * @param {UmlSequenceDiagramModel} settings diagram's model
     * @returns {string} - Mermaid data
     * @private
     */
    MermaidGenerator.prototype.generateMermaidText = function (settings) {
        var sb = 'sequenceDiagram\n';
        var dynamicParticipants = new Set(settings.messages
            .filter(function (message) {
            return message.type === UmlSequenceMessageType.Create;
        })
            .map(function (message) {
            return message.toParticipantID;
        }));
        // Add Participants
        for (var _i = 0, _a = settings.participants; _i < _a.length; _i++) {
            var participant = _a[_i];
            if (participant.id && !dynamicParticipants.has(participant.id)) {
                sb += '    ' + this.getParticipantContent(participant) + '\n';
            }
        }
        // Build activation lookup tables
        var activateLookup = this.buildActivationLookup(settings.participants, true);
        var deactivateLookup = this.buildActivationLookup(settings.participants, false);
        // This list tracks the current open fragment context (from outermost to innermost)
        var openContext = [];
        var _loop_9 = function (message) {
            // Compute the fragment context chain for this message (outermost first)
            var newContext = this_5.getContextChainForMessage(message.id, settings.fragments);
            // --- First: if openContext is deeper than newContext, close extra nested fragments ---
            while (openContext.length > newContext.length) {
                var level = openContext.length;
                var indent = Array(level * 4 + 1).join(' ');
                sb += indent + 'end\n';
                openContext.pop();
            }
            // --- Compare each level in the (equal-depth) open context and new context ---
            var common = 0;
            var k = 0;
            while (k < openContext.length && k < newContext.length) {
                if (openContext[parseInt(k.toString(), 10)].fragment.id.toString() !==
                    newContext[parseInt(k.toString(), 10)].fragment.id.toString()) {
                    break;
                }
                if (openContext[parseInt(k.toString(), 10)].condition.content !==
                    newContext[parseInt(k.toString(), 10)].condition.content) {
                    // Close all fragments nested inside this level.
                    while (openContext.length > k + 1) {
                        var indent = Array((openContext.length) * 4 + 1).join(' ');
                        sb += indent + 'end\n';
                        openContext.pop();
                    }
                    // Output the "else" header at the current level.
                    var indentLevel = Array((k + 1) * 4 + 1).join(' ');
                    sb += indentLevel + 'else ' + newContext[parseInt(k.toString(), 10)].condition.content + '\n';
                    openContext[parseInt(k.toString(), 10)] = newContext[parseInt(k.toString(), 10)];
                }
                k++;
            }
            common = k;
            // Close any fragments that are no longer active.
            for (var i = openContext.length - 1; i >= common; i--) {
                var indent = Array((i + 1) * 4 + 1).join(' ');
                sb += indent + 'end\n';
                openContext.pop();
            }
            // Open new fragments.
            for (var i = common; i < newContext.length; i++) {
                var indent = Array((openContext.length + 1) * 4 + 1).join(' ');
                sb += indent + this_5.getFragmentType(newContext[parseInt(i.toString(), 10)].fragment.type) + ' ' + newContext[parseInt(i.toString(), 10)].condition.content + '\n';
                openContext.push(newContext[parseInt(i.toString(), 10)]);
            }
            // Determine the indent for the current message.
            var messageIndent = Array((openContext.length + 1) * 4 + 1).join(' ');
            // --- Handle Create Participant ---
            if (message.toParticipantID && message.type === UmlSequenceMessageType.Create) {
                var created = settings.participants.find(function (participant) {
                    return participant.id.toString() === message.toParticipantID.toString();
                });
                if (created) {
                    sb += messageIndent + 'create ' + this_5.getParticipantContent(created) + '\n';
                }
            }
            // --- Handle Destroy Participant ---
            if (message.toParticipantID && message.type === UmlSequenceMessageType.Delete) {
                var destroyed = settings.participants.find(function (participant) {
                    return participant.id.toString() === message.toParticipantID.toString();
                });
                if (destroyed) {
                    sb += messageIndent + 'destroy ' + destroyed.id + '\n';
                }
            }
            // Append the message at an indent one level deeper than the open fragments.
            sb += messageIndent +
                this_5.getParticipantContentByID(settings, message.fromParticipantID) +
                this_5.getMermaidArrowSyntax(message) +
                this_5.getParticipantContentByID(settings, message.toParticipantID) +
                ': ' + message.content + '\n';
            sb = this_5.handleActivationsAndDeactivations(sb, message, activateLookup, deactivateLookup, openContext.length + 1);
        };
        var this_5 = this;
        // Iterate messages in order from the SequenceMessageCollection
        for (var _b = 0, _c = settings.messages; _b < _c.length; _b++) {
            var message = _c[_b];
            _loop_9(message);
        }
        // Close any remaining open fragments.
        for (var i = openContext.length - 1; i >= 0; i--) {
            var indent = Array((i + 1) * 4 + 1).join(' ');
            sb += indent + 'end\n';
        }
        return sb;
    };
    MermaidGenerator.prototype.getContextChainForMessage = function (messageId, fragments) {
        var chain = [];
        for (var i = 0; i < fragments.length; i++) {
            var fragment = fragments[parseInt(i.toString(), 10)];
            for (var j = 0; j < fragment.conditions.length; j++) {
                var condition = fragment.conditions[parseInt(j.toString(), 10)];
                // Check if the parent's condition contains the message,
                var parentMatches = this.isMessageIdInCondition(condition, messageId);
                if (parentMatches) {
                    chain.push({
                        fragment: fragment,
                        condition: condition
                    });
                    return chain;
                }
            }
        }
        return chain;
    };
    MermaidGenerator.prototype.isMessageIdInCondition = function (condition, messageId) {
        for (var i = 0; i < condition.messageIds.length; i++) {
            var id = condition.messageIds[parseInt(i.toString(), 10)];
            if (id.toString() === messageId.toString()) {
                return true;
            }
        }
        return false;
    };
    MermaidGenerator.prototype.handleActivationsAndDeactivations = function (sb, message, activateLookup, deactivateLookup, indentLevel) {
        if (indentLevel === void 0) { indentLevel = 1; }
        var indent = ' '.repeat(indentLevel * 4);
        var activateParticipants = activateLookup.get(message.id.toString());
        if (activateParticipants) {
            activateParticipants.forEach(function (participant) {
                sb += indent + "activate " + participant + "\n";
            });
        }
        var deactivateParticipants = deactivateLookup.get(message.id.toString());
        if (deactivateParticipants) {
            deactivateParticipants.forEach(function (participant) {
                sb += indent + "deactivate " + participant + "\n";
            });
        }
        return sb;
    };
    MermaidGenerator.prototype.buildActivationLookup = function (participants, isActivation) {
        var lookup = new Map();
        participants.forEach(function (participant) {
            participant.activationBoxes.forEach(function (activation) {
                var messageId = (isActivation ? activation.startMessageID : activation.endMessageID).toString();
                var participantName = participant.id.toString();
                if (!lookup.has(messageId)) {
                    lookup.set(messageId, []);
                }
                lookup.get(messageId).push(participantName);
            });
        });
        return lookup;
    };
    MermaidGenerator.prototype.resolveArrowsForExport = function (message) {
        var typedMessage = message;
        var lineStyle = typedMessage.lineStyle, sourceArrow = typedMessage.sourceArrow, targetArrow = typedMessage.targetArrow, type = typedMessage.type;
        // Derive defaults from message type (used when explicit values are absent)
        var defaultLine = type === UmlSequenceMessageType.Reply
            ? UmlSequenceMessageLineStyle.Dashed
            : UmlSequenceMessageLineStyle.Solid;
        var defaultTarget = (type === UmlSequenceMessageType.Synchronous || type === UmlSequenceMessageType.Delete || type === UmlSequenceMessageType.Self)
            ? UmlSequenceMessageArrowShape.Arrow
            : UmlSequenceMessageArrowShape.OpenArrow;
        var resolvedLine = lineStyle || defaultLine;
        if (targetArrow === undefined && sourceArrow === UmlSequenceMessageArrowShape.Arrow) {
            return { resolvedLine: resolvedLine, resolvedTarget: defaultTarget, resolvedSource: sourceArrow };
        }
        if (targetArrow === undefined) {
            // No explicit arrows: derive entirely from type
            return { resolvedLine: resolvedLine, resolvedTarget: defaultTarget };
        }
        // Bidirectional: both ends are Arrow
        if (targetArrow === UmlSequenceMessageArrowShape.Arrow &&
            sourceArrow === UmlSequenceMessageArrowShape.Arrow) {
            return { resolvedLine: resolvedLine, resolvedSource: sourceArrow, resolvedTarget: targetArrow };
        }
        // Plain line: both ends are None
        if (targetArrow === UmlSequenceMessageArrowShape.None &&
            sourceArrow === UmlSequenceMessageArrowShape.None) {
            return { resolvedLine: resolvedLine, resolvedSource: sourceArrow, resolvedTarget: targetArrow };
        }
        // Source-only: target is None but source arrow is set
        if (targetArrow === UmlSequenceMessageArrowShape.None && sourceArrow !== undefined) {
            return { resolvedLine: resolvedLine, resolvedSource: sourceArrow };
        }
        if (targetArrow === UmlSequenceMessageArrowShape.None && sourceArrow === undefined) {
            return { resolvedLine: resolvedLine, resolvedTarget: targetArrow, resolvedSource: UmlSequenceMessageArrowShape.None };
        }
        // Normal: target arrow only (source is irrelevant for Mermaid single-end syntax)
        return { resolvedLine: resolvedLine, resolvedTarget: targetArrow };
    };
    MermaidGenerator.prototype.constructMermaidArrow = function (line, source, target) {
        var dashes = (line === UmlSequenceMessageLineStyle.Dashed) ? '--' : '-';
        // Bidirectional: <<->>  /  <<-->>
        if (source === UmlSequenceMessageArrowShape.Arrow && target === UmlSequenceMessageArrowShape.Arrow) {
            return "<<" + dashes + ">>";
        }
        // Plain line: ->  /  -->
        if (source === UmlSequenceMessageArrowShape.None && target === UmlSequenceMessageArrowShape.None) {
            return dashes + ">";
        }
        var sourceChar = source ? (MermaidGenerator.SOURCE_ARROW_MAP["" + source] || '') : '';
        var targetChar = target ? (MermaidGenerator.TARGET_ARROW_MAP["" + target] || '') : '';
        // Source-only arrow: /|-  //--  etc.
        if (sourceChar && !targetChar) {
            return "" + sourceChar + dashes;
        }
        // Target-only arrow: ->>  -x  --|/  etc.
        if (!sourceChar && targetChar) {
            return "" + dashes + targetChar;
        }
        return '';
    };
    MermaidGenerator.prototype.getTypeBasedArrow = function (type, line) {
        var d = (line === UmlSequenceMessageLineStyle.Dashed) ? '--' : '-';
        switch (type) {
            case UmlSequenceMessageType.Synchronous:
            case UmlSequenceMessageType.Delete:
                return d + ">>";
            case UmlSequenceMessageType.Asynchronous:
            case UmlSequenceMessageType.Create:
            case UmlSequenceMessageType.Reply:
                return d + ")";
            default:
                return d + ">>";
        }
    };
    MermaidGenerator.prototype.getMermaidArrowSyntax = function (message) {
        var _a = this.resolveArrowsForExport(message), resolvedLine = _a.resolvedLine, resolvedSource = _a.resolvedSource, resolvedTarget = _a.resolvedTarget;
        var arrow = this.constructMermaidArrow(resolvedLine, resolvedSource, resolvedTarget);
        if (arrow && MermaidGenerator.MERMAID_SUPPORTED_ARROWS.has(arrow)) {
            return arrow;
        }
        return this.getTypeBasedArrow(message.type, resolvedLine);
    };
    MermaidGenerator.prototype.getFragmentType = function (type) {
        switch (type) {
            case UmlSequenceFragmentType.Alternative:
                return 'alt';
            case UmlSequenceFragmentType.Loop:
                return 'loop';
            case UmlSequenceFragmentType.Optional:
                return 'opt';
            default:
                throw new Error('Invalid fragment type');
        }
    };
    MermaidGenerator.prototype.getParticipantContent = function (participant) {
        // PHASE 4 NEW: Check if participant has a stereotype type set
        if (participant.stereotype) {
            var typeValue = participant.stereotype.toLowerCase();
            // Actor uses special Mermaid keyword syntax
            if (typeValue === 'actor') {
                return "actor " + participant.id + " as " + participant.content;
            }
            if (typeValue === 'default') {
                return "participant " + participant.id + " as " + participant.content;
            }
            // Other stereotypes (boundary, entity, database, collections, queue, control) use @{ "type" : "..." } syntax
            return "participant " + participant.id + "@{ \"type\" : \"" + typeValue + "\" } as " + participant.content;
        }
        // Fallback: use isActor or default to participant
        if (participant.isActor) {
            return "actor " + participant.id + " as " + participant.content;
        }
        return "participant " + participant.id + " as " + participant.content;
    };
    MermaidGenerator.prototype.getParticipantContentByID = function (settings, id) {
        var participant = settings.participants.find(function (participant) {
            return participant.id && participant.id.toString() === id.toString();
        });
        return participant.id.toString();
    };
    MermaidGenerator.MERMAID_SUPPORTED_ARROWS = new Set([
        // Plain lines
        '->', '-->',
        // Standard target arrows
        '->>', '-->>', '-x', '--x', '-)', '--)',
        // Bidirectional
        '<<->>', '<<-->>',
        // Target half-arrows (filled pipe)
        '-|\\', '--|\\', '-|/', '--|/',
        // Target stick half-arrows
        '-\\\\', '--\\\\', '-//', '--//',
        // Source-only half-arrows (reverse pipe)
        '/|-', '/|--', '\\|-', '\\|--',
        // Source-only stick half-arrows
        '//-', '//--', '\\\\-', '\\\\--'
    ]);
    MermaidGenerator.TARGET_ARROW_MAP = {
        'None': '',
        'Arrow': '>>',
        'OpenArrow': ')',
        'Cross': 'x',
        'TopHalfArrow': '|\\',
        'BottomHalfArrow': '|/',
        'TopStickHalfArrow': '\\\\',
        'BottomStickHalfArrow': '//' // -//
    };
    MermaidGenerator.SOURCE_ARROW_MAP = {
        'None': '',
        'Arrow': '<<',
        'OpenArrow': '(',
        'Cross': 'x',
        'TopHalfArrow': '/|',
        'BottomHalfArrow': '\\\\',
        'TopStickHalfArrow': '//',
        'BottomStickHalfArrow': '\\\\' // \\-  (two rendered backslashes in Mermaid)
    };
    return MermaidGenerator;
}());
