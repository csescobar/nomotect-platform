/**
 * Represents the model to create a sequence diagram.
 */
import { Diagram } from '../diagram';
import { ChildProperty } from '@syncfusion/ej2-base';
import { UmlSequenceParticipantModel, UmlSequenceMessageModel, UmlSequenceFragmentModel, UmlSequenceFragmentConditionModel, UmlSequenceActivationBoxModel } from './sequence-diagram-model';
/**
 * Defines the types of messages used in UML sequence diagrams.
 * Each type determines the style and semantics of the message line.
 */
export declare enum UmlSequenceMessageType {
    /** A synchronous message, typically a method call that waits for a response. */
    Synchronous = "Synchronous",
    /** An asynchronous message, such as an event or signal that does not wait for a response. */
    Asynchronous = "Asynchronous",
    /** A reply message, representing the return from a synchronous call. */
    Reply = "Reply",
    /** A create message, used to indicate the instantiation of a new participant. */
    Create = "Create",
    /** A delete message, indicating the termination of a participant's lifeline. */
    Delete = "Delete",
    /** A self-message, where the sender and receiver are the same participant. */
    Self = "Self"
}
/**
 * Defines the types of fragments supported in a UML sequence diagram.
 */
export declare enum UmlSequenceFragmentType {
    /** Represents a conditional alternative (e.g., if/else branches). */
    Alternative = "Alternative",
    /** Represents a loop fragment (e.g., for, while). */
    Loop = "Loop",
    /** Represents an optional interaction (e.g., an optional message flow). */
    Optional = "Optional"
}
/**
 * Specifies the visual stereotype used to represent a participant in a UML sequence diagram.
 *
 * The stereotype determines the shape and semantic meaning of the participant
 * header (for example, actor, boundary, control, entity, or database).
 *
 */
export declare enum UmlSequenceParticipantStereotype {
    /**
     * Represents a standard object participant.
     *
     * The participant is rendered as a labelled rectangular box.
     */
    Default = "Default",
    /**
     * Represents an actor that interacts with the system.
     *
     * The participant is rendered as a UML actor, typically shown as a stick
     * figure above the lifeline. This is equivalent to the Mermaid `actor`
     * participant type.
     */
    Actor = "Actor",
    /**
     * Represents a boundary object or system interface.
     *
     * Use this stereotype for elements such as user interfaces, API gateways,
     * or external-facing system boundaries. The participant is rendered using
     * the UML boundary symbol.
     *
     * This is equivalent to Mermaid `@{ type: "boundary" }`.
     */
    Boundary = "Boundary",
    /**
     * Represents a control object.
     *
     * Use this stereotype for coordinator, controller, or workflow objects that
     * manage interactions between participants. The participant is rendered
     * using the UML control symbol.
     *
     * This is equivalent to Mermaid `@{ type: "control" }`.
     */
    Control = "Control",
    /**
     * Represents an entity object.
     *
     * Use this stereotype for passive data, domain, or persistent objects.
     * The participant is rendered using the UML entity symbol.
     *
     * This is equivalent to Mermaid `@{ type: "entity" }`.
     */
    Entity = "Entity",
    /**
     * Represents a database or persistent storage system.
     *
     * The participant is rendered as a cylindrical database shape,
     * commonly used for storage services or data repositories.
     *
     * Equivalent to Mermaid syntax: `@{ type: "database" }`.
     */
    Database = "Database"
}
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
export declare enum UmlSequenceMessageLineStyle {
    /**
     * A continuous solid line.
     * Typical for synchronous method calls and activation messages.
     */
    Solid = "Solid",
    /**
     * A dashed (dotted) line.
     * Typical for reply messages and asynchronous responses.
     */
    Dashed = "Dashed"
}
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
export declare enum UmlSequenceMessageArrowShape {
    /** No arrowhead. When both source and target are `None`, a plain line is rendered. */
    None = "None",
    /**
     * Standard filled arrowhead (`>>`).
     * When set on both source and target, renders a bidirectional arrow (`<<->>`).
     */
    Arrow = "Arrow",
    /**
     * Open (outline) arrowhead — rendered as a parenthesis `)`.
     * Equivalent to Mermaid `--)` for asynchronous/open messages.
     */
    OpenArrow = "OpenArrow",
    /**
     * Cross/X terminator — rendered at the endpoint as a crossing mark.
     * Typically used to indicate message loss or termination.
     * Equivalent to Mermaid `-x`.
     */
    Cross = "Cross",
    /**
     * Top-half filled arrowhead — a filled triangle occupying the upper half of the arrow space.
     * Equivalent to Mermaid `-|\`.
     */
    TopHalfArrow = "TopHalfArrow",
    /**
     * Bottom-half filled arrowhead — a filled triangle occupying the lower half of the arrow space.
     * Equivalent to Mermaid `-|/`.
     */
    BottomHalfArrow = "BottomHalfArrow",
    /**
     * Top-half open (stick) arrowhead — an open line occupying the upper half of the arrow space.
     * Equivalent to Mermaid `-\\` (single backslash in the rendered arrow).
     */
    TopStickHalfArrow = "TopStickHalfArrow",
    /**
     * Bottom-half open (stick) arrowhead — an open line occupying the lower half of the arrow space.
     * Equivalent to Mermaid `-//`.
     */
    BottomStickHalfArrow = "BottomStickHalfArrow"
}
/**
 * Represents an activation box (focus of control) in the UML sequence diagram.
 * Activation boxes indicate the duration a participant is actively processing messages.
 */
export declare class UmlSequenceActivationBox extends ChildProperty<UmlSequenceActivationBox> {
    /**
     * A unique identifier for the activation box.
     * @default undefined
     */
    id: string | number;
    /**
     * The ID of the message that marks the start of the activation.
     * This must match the `id` of a message defined in the model.
     *
     * @default undefined
     */
    startMessageID: string | number;
    /**
     * The ID of the message that marks the end of the activation.
     * This must match the `id` of a message defined in the model.
     *
     * @default undefined
     */
    endMessageID: string | number;
}
/**
 * Represents a participant (lifeline) in a UML sequence diagram.
 *
 * A participant is any entity that takes part in a message exchange,
 * such as an object, actor, or external system.
 */
export declare class UmlSequenceParticipant extends ChildProperty<UmlSequenceParticipant> {
    /**
     * @private
     * @default 100
     */
    width: number;
    /**
     * @private
     * @default 100
     */
    height: number;
    /**
     * A unique identifier for this participant.
     *
     * Used to reference this participant from messages, activation boxes, and fragments.
     * Must be unique within the diagram.
     *
     * @default undefined
     */
    id: string | number;
    /**
     * The display label shown in the participant's header box.
     *
     * Corresponds to the `as <content>` clause in Mermaid syntax.
     * When omitted, the `id` value is used as the display label.
     *
     * @default ''
     */
    content: string;
    /**
     * Indicates whether this participant is rendered as a stick-figure actor.
     *
     * @deprecated Use `stereotype = UmlSequenceParticipantStereotype.Actor` instead.
     * This property is maintained for backward compatibility and will be removed in a future release.
     * When `stereotype` is defined, this property is ignored.
     *
     * @default false
     */
    isActor: boolean;
    /**
     * The visual stereotype that determines how this participant is rendered.
     *
     * When specified, this property takes precedence over the legacy `isActor`
     * property. To render a participant as an actor, use
     * `UmlSequenceParticipantStereotype.Actor` instead of setting `isActor` to `true`.
     *
     * If this property is not set, rendering falls back to `isActor`. If neither
     * `stereotype` nor `isActor` is set, the participant is rendered as a standard
     * rectangular lifeline header.
     *
     * @default undefined
     *
     * @example
     * ```typescript
     * // Render the participant as a database stereotype.
     * {
     *   id: 'DB',
     *   content: 'UserStore',
     *   stereotype: UmlSequenceParticipantStereotype.Database
     * }
     * ```
     */
    stereotype: UmlSequenceParticipantStereotype;
    /**
     * Specifies whether to show a destruction marker (X) at the end of the participant's lifeline.
     *
     * When `true`, a destruction marker (×) is rendered at the bottom of this lifeline,
     * indicating the participant is terminated during the sequence.
     *
     * @default false
     */
    showDestructionMarker: boolean;
    /**
     * The activation boxes (focus-of-control rectangles) drawn on this participant's lifeline.
     *
     * Each entry defines a time range during which the participant is actively processing a message.
     *
     * @default []
     *
     * @example
     * ```typescript
     * activationBoxes: [
     *   { id: 'act1', startMessageID: 'msg1', endMessageID: 'msg3' }
     * ]
     * ```
     */
    activationBoxes: UmlSequenceActivationBoxModel[];
}
/**
 * Represents a message (interaction) between two participants in a UML sequence diagram.
 * Messages define the communication flow, such as method calls or replies, between lifelines.
 */
export declare class UmlSequenceMessage extends ChildProperty<UmlSequenceMessage> {
    /**
     * A unique identifier for the message.
     *
     * @default undefined
     */
    id: string | number;
    /**
     * The ID of the participant that sends the message.
     *
     * This should match the `id` of a participant defined in the model.
     *
     * @default undefined
     */
    fromParticipantID: string | number;
    /**
     * The ID of the participant that receives the message.
     *
     * This should match the `id` of a participant defined in the model.
     *
     * @default undefined
     */
    toParticipantID: string | number;
    /**
     * Defines the text content or label displayed for the message in the sequence diagram.
     * This typically represents a operation name, or descriptive response.
     *
     * @default ''
     */
    content: string;
    /**
     * The semantic type of this message.
     *
     * Determines the default line style and arrowhead unless overridden by
     * `lineStyle`, `sourceArrow`, or `targetArrow`.
     *
     * | Type          | Default line | Default target arrow |
     * |---------------|--------------|----------------------|
     * | Synchronous   | Solid        | Arrow (`>>`)         |
     * | Asynchronous  | Solid        | OpenArrow (`)`)      |
     * | Reply         | Dashed       | Arrow (`>>`)         |
     * | Create        | Solid        | OpenArrow (`)`)      |
     * | Delete        | Solid        | Arrow (`>>`)         |
     * | Self          | Solid        | Arrow (`>>`)         |
     *
     * @default UmlSequenceMessageType.Synchronous
     */
    type: UmlSequenceMessageType;
    /**
     * Overrides the line style of this message connector.
     *
     * @private
     */
    lineStyle: UmlSequenceMessageLineStyle;
    /**
     * Overrides the arrowhead shape at the **source** (sending) end of the message.
     *
     * @private
     */
    sourceArrow: UmlSequenceMessageArrowShape;
    /**
     * Overrides the arrowhead shape at the **target** (receiving) end of the message.
     *
     * @private
     */
    targetArrow: UmlSequenceMessageArrowShape;
}
/**
 * Represents a single condition within a UML sequence fragment.
 * Each condition includes a description and references to the messages or sub-fragments it controls.
 */
export declare class UmlSequenceFragmentCondition extends ChildProperty<UmlSequenceFragmentCondition> {
    /**
     * The textual description of the condition (e.g., a Boolean expression or case label).
     *
     * @default ''
     */
    content: string;
    /**
     * The IDs of messages that are included under this condition.
     *
     * @default []
     */
    messageIds: (string | number)[];
    /**
     * The IDs of nested fragments that are included under this condition.
     *
     * @default undefined
     */
    fragmentIds: string[];
}
/**
 * Represents a fragment in a UML sequence diagram.
 * Fragments define conditional or grouped interactions, such as alternatives or loops.
 */
export declare class UmlSequenceFragment extends ChildProperty<UmlSequenceFragment> {
    /**
     * A unique identifier for the fragment.
     *
     * @default undefined
     */
    id: string | number;
    /**
     * Specifies the type of the fragment, such as 'Alternative', 'Loop', or 'Optional'.
     *
     * Determines how the fragment is interpreted and rendered in the diagram.
     *
     * @default UmlSequenceFragmentType.Optional
     */
    type: UmlSequenceFragmentType;
    /**
     * Defines the conditions and corresponding message/fragment references associated with this fragment.
     *
     * Each condition can represent a branch or case in the fragment (e.g., if-else, loop iteration).
     *
     * ```typescript
     * conditions: [
     *   {
     *     content: 'Condition 1',
     *     messageIds: ['MSG1', 'MSG2'],
     *     fragmentIds: ['frag2']
     *   }
     * ]
     * ```
     *
     * @default []
     */
    conditions: UmlSequenceFragmentConditionModel[];
}
/**
 * Defines the model for the diagram.
 */
export declare class UmlSequenceDiagram extends ChildProperty<UmlSequenceDiagram> {
    /**
     * @private
     */
    diagram: Diagram;
    /**
     * @private
     */
    mermaidData: string;
    /**
     * @private
     */
    isLoadedFromMermaid: boolean;
    /**
     * @private
     */
    hideFootBox: boolean;
    /**
     * @private
     */
    activationWidth: number;
    /**
     * @private
     */
    initialLifelineLength: number;
    /**
     * @private
     */
    messageSpacing: number;
    /**
     * @private
     */
    participantWidth: number;
    /**
     * @private
     */
    participantHeight: number;
    /**
     * @private
     */
    margin: number;
    /**
     * Defines the list of participants involved in the UML sequence diagram.
     * Each participant represents a lifeline, such as an actor or an object, that sends or receives messages.
     *
     * ```typescript
     * participants: [
     *     {
     *         id: 'User',
     *         content: 'User',
     *         width: 100,
     *         height: 50,
     *         showDestructionMarker: true,
     *         isActor: true,
     *         activationBoxes: [
     *             { id: 'act1', startMessageID: 'MSG1', endMessageID: 'MSG3' }
     *         ]
     *     },
     *     {
     *         id: 'Server',
     *         content: 'Server',
     *         width: 100,
     *         height: 50,
     *         showDestructionMarker: true,
     *         isActor: false,
     *         activationBoxes: [
     *             { id: 'act2', startMessageID: 'MSG1', endMessageID: 'MSG3' }
     *         ]
     *     }
     * ]
     * ```
     *
     * @aspDefaultValueIgnore
     * @default []
     */
    participants: UmlSequenceParticipantModel[];
    /**
     * Defines the list of messages exchanged between participants in the UML sequence diagram.
     * Messages represent interactions such as method calls or responses between lifelines.
     *
     * ```typescript
     * messages: [
     *     {
     *         id: 'MSG1',
     *         content: 'User sends request',
     *         fromParticipantID: 'User',
     *         toParticipantID: 'Server'
     *     },
     *     {
     *         id: 'MSG2',
     *         content: 'Processing',
     *         fromParticipantID: 'Server',
     *         toParticipantID: 'Server'
     *     },
     *     {
     *         id: 'MSG3',
     *         content: 'Server sends response',
     *         fromParticipantID: 'Server',
     *         toParticipantID: 'User'
     *     }
     * ]
     * ```
     *
     * @aspDefaultValueIgnore
     * @default []
     */
    messages: UmlSequenceMessageModel[];
    /**
     * Defines the interaction fragments in the UML sequence diagram.
     * Fragments are used to group messages under specific control structures such as loops, alternatives, or options.
     *
     * ```typescript
     * fragments: [
     *     {
     *         id: 'frag1',
     *         type: 'Optional',
     *         conditions: [
     *             {
     *                 content: 'Interactions',
     *                 messageIds: ['MSG1', 'MSG2', 'MSG3']
     *             }
     *         ]
     *     }
     * ]
     * ```
     *
     * @aspDefaultValueIgnore
     * @default []
     */
    fragments: UmlSequenceFragmentModel[];
    /**
     * Defines the horizontal spacing between each participant (lifeline) in the UML sequence diagram.
     *
     * This spacing determines how far apart the participant boxes are placed,
     * which affects the overall layout and readability of the diagram.
     *
     * ```typescript
     * const model: UmlSequenceDiagramModel = {
     *     spaceBetweenParticipants: 120,
     *     participants: [ ... ],
     *     messages: [ ... ],
     *     fragments: [ ... ]
     * };
     * ```
     *
     * - A higher value increases the distance between participants.
     * - A lower value makes participants appear closer together.
     *
     * @default 100
     */
    spaceBetweenParticipants: number;
    private model;
    /**
     *
     * @param {string} mermaidText - mermaid text
     * @param {Diagram} diagram - diagram
     * @returns {void}
     * @private
     */
    parse(mermaidText: string, diagram: Diagram): void;
    /**
     * Positon nodes and Connect connectors to draw sequence diagram
     * based on internal model SequenceDiagramModel object obtained from mermaid data
     * @param {string} mermaidText - mermaid data
     * @param {Diagram} diagram - Diagram
     * @returns {void}
     * @private
     */
    loadDiagramFromMermaid(mermaidText: string, diagram: Diagram): void;
    /**
     * Generates mermaid data from the sequence diagram
     * @returns {string} - mermaid data
     * @private
     */
    generateMermaidFromModel(): string;
    /**
     * Updates the sequence diagram at runtime.
     * @param {Diagram} diagram - Diagram instance
     * @returns {void}
     * @private
     */
    updateUmlSequenceDiagram(diagram: Diagram): void;
    /**
     * update activations and fragments after nodes & connector initialization
     * @returns {void}
     * @private
     */
    render(): void;
}
