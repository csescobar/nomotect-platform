import { loadCultureFiles } from '../common/culture-loader';
import {
    Diagram,
    DiagramTools,
    SnapConstraints,
    NodeModel,
    ConnectorModel,
    DiagramConstraints,
    DataBinding,
    UndoRedo,
    ERDiagrams,
    EREntityShapeModel,
    ERFieldModel,
    ERConnectorShapeModel,
    ERCardinality,
    UserHandleModel,
    UserHandleEventsArgs,
    LineRouting,
    AvoidLineOverlapping,
    SymbolPalette
} from '@syncfusion/ej2-diagrams';

Diagram.Inject(DataBinding, UndoRedo, LineRouting, AvoidLineOverlapping, ERDiagrams);
SymbolPalette.Inject(ERDiagrams);

(window as any).default = (): void => {
    loadCultureFiles();

    type CardinalityKey = 'One' | 'Many' | 'OneAndOnlyOne' | 'OneOrMany' | 'ZeroOrOne' | 'ZeroOrMany';
    type RelationshipTypeKey = 'Identifying' | 'NonIdentifying';
    type ColorToken = 'primary' | 'secondary' | 'tertiary' | 'accent' | 'neutral' | 'warning';

    interface SchemaField {
        id: string;
        name: string;
        isPrimaryKey?: boolean;
        isForeignKey?: boolean;
    }

    interface SchemaEntity {
        id: string;
        title: string;
        color: ColorToken;
        position: { x: number; y: number };
        fields: SchemaField[];
    }

    interface SchemaRelationship {
        id: string;
        source: string;
        target: string;
        sourceCardinality: CardinalityKey;
        targetCardinality: CardinalityKey;
        relationshipType: RelationshipTypeKey;
        color?: string;
    }

    interface DiagramSchema {
        title: string;
        entities: SchemaEntity[];
        relationships: SchemaRelationship[];
    }

    interface ThemeToken {
        headerFill: string;
        bodyFill: string;
        strokeColor: string;
        connectorColor: string;
    }

    const CARDINALITY_MAP: Record<CardinalityKey, ERCardinality> = {
        One: ERCardinality.One,
        Many: ERCardinality.Many,
        OneAndOnlyOne: ERCardinality.OneAndOnlyOne,
        OneOrMany: ERCardinality.OneOrMany,
        ZeroOrOne: ERCardinality.ZeroOrOne,
        ZeroOrMany: ERCardinality.ZeroOrMany
    };

    const COLOR_TOKENS: Record<ColorToken, ThemeToken> = {
        primary: {
            headerFill: '#bfdbfe',
            bodyFill: '#eff6ff',
            strokeColor: '#2563eb',
            connectorColor: '#2563eb'
        },
        secondary: {
            headerFill: '#bbf7d0',
            bodyFill: '#f0fdf4',
            strokeColor: '#16a34a',
            connectorColor: '#16a34a'
        },
        tertiary: {
            headerFill: '#ddd6fe',
            bodyFill: '#f5f3ff',
            strokeColor: '#7c3aed',
            connectorColor: '#7c3aed'
        },
        accent: {
            headerFill: '#fdba74',
            bodyFill: '#fff7ed',
            strokeColor: '#ea580c',
            connectorColor: '#ea580c'
        },
        neutral: {
            headerFill: '#d1d5db',
            bodyFill: '#f9fafb',
            strokeColor: '#6b7280',
            connectorColor: '#6b7280'
        },
        warning: {
            headerFill: '#fde68a',
            bodyFill: '#fffbeb',
            strokeColor: '#d97706',
            connectorColor: '#d97706'
        }
    };

    /**
     * Simplified core schema:
     * - max 10 nodes
     * - no self-relationships
     * - only keys + field names
     * - explicit relationships only
     */
    const schema: DiagramSchema = {
        title: 'Hospital Patient Management ER Diagram',

        entities: [
            {
                id: 'Doctors',
                title: 'Doctors',
                color: 'secondary',
                position: { x: 10, y: 15 },
                fields: [
                    { id: 'doctor_id', name: 'Doctor_ID', isPrimaryKey: true },
                    { id: 'doctor_name', name: 'Doctor_Name' },
                    { id: 'doctor_department', name: 'Doctor_Department' },
                    { id: 'patient_id', name: 'Patient_ID', isForeignKey: true }
                ]
            },
            {
                id: 'Patient',
                title: 'Patient',
                color: 'primary',
                position: { x: 312, y: 32 },
                fields: [
                    { id: 'patient_id', name: 'Patient_ID', isPrimaryKey: true },
                    { id: 'patient_address', name: 'Patient_Address' },
                    { id: 'patient_name', name: 'Patient_Name' },
                    { id: 'date_admitted', name: 'Date_Admitted' },
                    { id: 'patient_sex', name: 'Patient_Sex' }
                ]
            },
            {
                id: 'Visit',
                title: 'Visit',
                color: 'tertiary',
                position: { x: 868, y: 15 },
                fields: [
                    { id: 'visit_id', name: 'Visit_ID', isPrimaryKey: true },
                    { id: 'patient_id', name: 'Patient_ID', isForeignKey: true },
                    { id: 'visit_datetime', name: 'Visit_DateTime' },
                    { id: 'visit_reason', name: 'Visit_Reason' },
                    { id: 'visit_comments', name: 'Visit_Comments' }
                ]
            },
            {
                id: 'Medication',
                title: 'Medication',
                color: 'neutral',
                position: { x: 313, y: 260 },
                fields: [
                    { id: 'medication_id', name: 'Medication_ID', isPrimaryKey: true },
                    { id: 'medication_name', name: 'Medication_Name' },
                    { id: 'patient_id', name: 'Patient_ID', isForeignKey: true }
                ]
            },
            {
                id: 'Diagnosis',
                title: 'Diagnosis',
                color: 'accent',
                position: { x: 572, y: 218 },
                fields: [
                    { id: 'diagnosis_id', name: 'Diagnosis_ID', isPrimaryKey: true },
                    { id: 'patient_id', name: 'Patient_ID', isForeignKey: true },
                    { id: 'diag_code', name: 'Diag_Code' },
                    { id: 'diag_text', name: 'Diag_Text' },
                    { id: 'diag_state', name: 'Diag_State' },
                    { id: 'diag_datetime', name: 'Diag_DateTime' }
                ]
            },
            {
                id: 'Samples',
                title: 'Samples',
                color: 'warning',
                position: { x: 572, y: 510 },
                fields: [
                    { id: 'sample_id', name: 'Sample_ID', isPrimaryKey: true },
                    { id: 'sample_type', name: 'Sample_Type' },
                    { id: 'sample_date', name: 'Sample_Date' },
                    { id: 'diagnosis_id', name: 'Diagnosis_ID', isForeignKey: true },
                    { id: 'sample_result', name: 'Sample_Result' }
                ]
            }
        ],

        relationships: [
            {
                id: 'rel_patient_doctors',
                source: 'Patient',
                target: 'Doctors',
                sourceCardinality: 'OneAndOnlyOne',
                targetCardinality: 'ZeroOrMany',
                relationshipType: 'NonIdentifying',
                color: COLOR_TOKENS.secondary.connectorColor
            },
            {
                id: 'rel_patient_visit',
                source: 'Patient',
                target: 'Visit',
                sourceCardinality: 'OneAndOnlyOne',
                targetCardinality: 'ZeroOrMany',
                relationshipType: 'NonIdentifying',
                color: COLOR_TOKENS.tertiary.connectorColor
            },
            {
                id: 'rel_patient_medication',
                source: 'Patient',
                target: 'Medication',
                sourceCardinality: 'OneAndOnlyOne',
                targetCardinality: 'ZeroOrMany',
                relationshipType: 'NonIdentifying',
                color: COLOR_TOKENS.neutral.connectorColor
            },
            {
                id: 'rel_patient_diagnosis',
                source: 'Patient',
                target: 'Diagnosis',
                sourceCardinality: 'OneAndOnlyOne',
                targetCardinality: 'ZeroOrMany',
                relationshipType: 'NonIdentifying',
                color: COLOR_TOKENS.accent.connectorColor
            },
            {
                id: 'rel_diagnosis_samples',
                source: 'Diagnosis',
                target: 'Samples',
                sourceCardinality: 'OneAndOnlyOne',
                targetCardinality: 'ZeroOrMany',
                relationshipType: 'NonIdentifying',
                color: COLOR_TOKENS.warning.connectorColor
            }
        ]
    };

    function toFieldModel(field: SchemaField): ERFieldModel {
        return {
            id: field.id,
            name: field.name,
            isPrimaryKey: field.isPrimaryKey,
            isForeignKey: field.isForeignKey
        } as ERFieldModel;
    }

    function toNode(entity: SchemaEntity): NodeModel {
        const theme = COLOR_TOKENS[entity.color];

        return {
            id: entity.id,
            offsetX: entity.position.x,
            offsetY: entity.position.y,
            shape: {
                type: 'Er',
                shape: 'Entity',
                header: {
                    annotation: {
                        content: entity.title,
                        style: {
                            fontSize: 12,
                            bold: true,
                            color: '#111827'
                        }
                    },
                    height: 34,
                    style: {
                        fill: theme.headerFill
                    }
                },
                fields: entity.fields.map(toFieldModel),
                style: {
                    fill: theme.bodyFill,
                    strokeColor: theme.strokeColor,
                    strokeWidth: 1.75,
                    alternateRowColors: [theme.bodyFill, '#ffffff']
                }
            } as EREntityShapeModel
        };
    }

    function toConnector(relationship: SchemaRelationship): ConnectorModel {
        const color = relationship.color || '#64748b';

        return {
            id: relationship.id,
            sourceID: relationship.source,
            targetID: relationship.target,
            type: 'Orthogonal',
            cornerRadius: 6,
            style: {
                strokeColor: color,
                strokeWidth: 1.75
            },
            sourceDecorator: {
                style: {
                    strokeColor: color,
                    strokeWidth: 1.75
                }
            },
            targetDecorator: {
                style: {
                    strokeColor: color,
                    strokeWidth: 1.75
                }
            },
            shape: {
                type: 'Er',
                relationship: {
                    relationshipType: relationship.relationshipType,
                    sourceCardinality: CARDINALITY_MAP[relationship.sourceCardinality],
                    targetCardinality: CARDINALITY_MAP[relationship.targetCardinality]
                }
            } as ERConnectorShapeModel
        };
    }

    const nodes: NodeModel[] = schema.entities.map(toNode);
    const connectors: ConnectorModel[] = schema.relationships.map(toConnector);
    let diagramCreated: boolean = false;
    const diagram = new Diagram({
        width: '100%',
        height: '500px',
        nodes: nodes,
        connectors: connectors,
        constraints: DiagramConstraints.Default | DiagramConstraints.LineRouting | DiagramConstraints.AvoidLineOverlapping,
        snapSettings: { constraints: SnapConstraints.None },
        getConnectorDefaults: (connector: ConnectorModel): ConnectorModel => {
            connector.cornerRadius = 10;
            return connector;
        },
        selectedItems: { userHandles: [] },
        onUserHandleMouseDown: function (args: UserHandleEventsArgs) {
            const handle = (args.element as any);
            if (!handle) { return; }

            const handleName: string = handle.name;

            const node = getSelectedErEntity();
            if (handleName === 'AddField') {
                if (!node) { return; }

                const newField: ERFieldModel = {
                    id: `${node.id}_field_${new Date().getTime()}`,
                    name: 'NewField'
                };

                diagram.addField(node, newField);
            } else if (handleName === 'RemoveField') {
                if (!node) { return; }

                const fieldToRemove = getSelectedFieldToRemove(node);
                if (!fieldToRemove) { return; }

                diagram.removeField(node, fieldToRemove);
            }
        },
        
        selectionChange: function (): void {
            const selectedNodes: NodeModel[] = diagram.selectedItems.nodes as NodeModel[];
            // hide handles for everything by default
            diagram.selectedItems.userHandles = [];
            if (selectedNodes.length === 1) {
                const node: NodeModel = selectedNodes[0];
                if (node && node.shape && node.shape.type === 'Er' && node.style && node.style.strokeColor) {
                    diagram.selectedItems.userHandles = [{
                        name: 'AddField',
                        offset: 1,
                        side: 'Bottom',
                        content: `
                        <g class="insert-handle">
                            <circle class="bg" cx="8" cy="8" r="7" fill="${node.style.strokeColor}"/>
                            <path class="plus" d="M8 5 V11 M5 8 H11" stroke="white" stroke-width="1.2" stroke-linecap="round"/>
                            <style>
                                .insert-handle { cursor: pointer; }
                                .insert-handle:hover .bg { fill: ${node.style.strokeColor}; }
                            </style>
                        </g>
                        `,
                        tooltip: { content: 'Add Field' },
                        size: 24,
                        margin: {left: 20, bottom: 36}
                    }];
                } else if (node && node.shape && node.style && node.style.strokeColor) {
                    const isPKField = node.annotations && node.annotations.length > 0 && node.annotations[0].content === 'PK';

                    if (!isPKField) {
                        diagram.selectedItems.userHandles = [{
                            name: 'RemoveField',
                            offset: 1,
                            side: 'Bottom',
                            content: `
                            <g class="minus-handle">
                                <circle class="bg" cx="8" cy="8" r="7" fill="${node.style.strokeColor}"/>
                                <path class="minus" d="M5 8 H11" stroke="white" stroke-width="1.2" stroke-linecap="round"/>
                                <style>
                                    .minus-handle { cursor: pointer; }
                                    .minus-handle:hover .bg { fill: ${node.style.strokeColor}; }
                                </style>
                            </g>
                        `,
                            tooltip: { content: 'Remove Field' },
                            size: 24,
                            margin: {left: 20, bottom: 36}
                        }];
                    }
                }
            }
            diagram.dataBind();
        },
        created: () => {
            diagramCreated = true;
            diagram.fitToPage();
        },
        load: () => {
            if (diagramCreated) {
            setTimeout(() => diagram.fitToPage(), 10);
            }
        }
    });

    diagram.appendTo('#diagram');

    const entityNoFields: any = {
        id: 'entity_no_fields',
        width: 80,
        height: 80,
        shape: {
            type: 'Er',
            shape: 'Entity',
            header: {
                annotation: {
                    content: 'Entity Name',
                    style: {
                        fontSize: 12,
                        bold: true,
                        color: '#111827'
                    }
                },
                height: 34,
                style: { fill: '#ddd6fe', fontSize: 12, bold: true, color: 'white' }
            },
            fields: [],
            style: {
                fill: '#f5f3ff',
                strokeColor: '#7c3aed',
                strokeWidth: 1.5
            }
        }
    };

    const entityKeyName: any = {
        id: 'entity_key_name',
        width: 80,
        height: 110,
        shape: {
            type: 'Er',
            shape: 'Entity',
            header: {
                annotation: {
                    content: 'Entity Name',
                    style: {
                        fontSize: 12,
                        bold: true,
                        color: '#111827'
                    }
                },
                height: 34,
                style: { fill: '#ddd6fe', fontSize: 12, bold: true, color: 'white' }
            },
            fields: [
                { id: 'field_id', name: 'Attribute', isPrimaryKey: true }
            ],
            style: {
                fill: '#f5f3ff',
                strokeColor: '#7c3aed',
                strokeWidth: 1.5
            }
        }
    };

    const entityKeyNameType: any = {
        id: 'entity_key_name_type',
        width: 80,
        height: 125,
        shape: {
            type: 'Er',
            shape: 'Entity',
            header: {
                annotation: {
                    content: 'Entity Name',
                    style: {
                        fontSize: 12,
                        bold: true,
                        color: '#111827'
                    }
                },
                height: 34,
                style: { fill: '#ddd6fe', fontSize: 12, bold: true, color: 'white' }
            },
            fields: [
                { id: 'field_id', name: 'Attribute', isPrimaryKey: true, dataType: 'INT' }
            ],
            style: {
                fill: '#f5f3ff',
                strokeColor: '#7c3aed',
                strokeWidth: 1.5,
                dataType: 'INT'
            }
        }
    };

    const entityKeyNameTypeConstraints: any = {
        id: 'entity_key_name_type_constraints',
        width: 80,
        height: 140,
        shape: {
            type: 'Er',
            shape: 'Entity',
            header: {
                annotation: {
                    content: 'Entity Name',
                    style: {
                        fontSize: 12,
                        bold: true,
                        color: '#111827'
                    }
                },
                height: 34,
                style: { fill: '#ddd6fe', fontSize: 12, bold: true, color: 'white' }
            },
            fields: [
                { id: 'field_id', name: 'Attribute', isPrimaryKey: true, dataType: 'INT', isNotNull: true }
            ],
            style: {
                fill: '#ffffff',
                strokeColor: '#7c3aed',
                strokeWidth: 1.5,
                dataType: 'INT',
                isUnique: true,
                isNotNull: true
            }
        }
    };

    const connectorSymbols: any[] = [
        { id: 'Link1', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 30, y: 30 } },
        { id: 'link3', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 30, y: 30 }, targetDecorator: { shape: 'None' } },
        { id: 'Link21', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 30, y: 30 } },
        { id: 'link23', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 30, y: 30 }, targetDecorator: { shape: 'None' } },
        { id: 'link33', type: 'Bezier', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 30, y: 30 }, targetDecorator: { shape: 'None' } }
    ];

    const erPalettes: any[] = [
        { id: 'entities', expanded: true, title: 'ER Entities', symbols: [entityNoFields, entityKeyName, entityKeyNameType, entityKeyNameTypeConstraints] },
        { id: 'connectors', symbols: connectorSymbols, title: 'Connectors' }
    ];

    const palette: SymbolPalette = new SymbolPalette({
        palettes: erPalettes,
        width: '100%',
        height: '500px',
        symbolWidth: 50,
        symbolHeight: 50,
        enableAnimation: false,
        symbolMargin: { left: 8, right: 8, top: 8, bottom: 8 }
    });

    palette.appendTo('#symbolpalette');

    function getSelectedFieldToRemove(entityNode: NodeModel): ERFieldModel | undefined {
        const erEntity = entityNode.shape as EREntityShapeModel;
        if (!erEntity || !erEntity.fields || erEntity.fields.length === 0) {
            return undefined;
        }

        const selectedNodes = diagram.selectedItems.nodes as NodeModel[];
        if (!selectedNodes || selectedNodes.length === 0) {
            return erEntity.fields[erEntity.fields.length - 1];
        }

        const selectedNode: any = selectedNodes[0];
        const parentId: string = (selectedNode.parentId || '');
        if (parentId === entityNode.id && entityNode.children) {
            const selectedChildIndex = entityNode.children.indexOf(selectedNode.id);
            if (selectedChildIndex > 0 && selectedChildIndex <= erEntity.fields.length) {
                return erEntity.fields[selectedChildIndex - 1];
            }
        }

        return erEntity.fields[erEntity.fields.length - 1];
    }

    function getSelectedErEntity(): NodeModel | undefined {
        if (diagram.selectedItems && diagram.selectedItems.nodes && diagram.selectedItems.nodes.length === 0) {
            return undefined;
        }

        let selectedNode: NodeModel = diagram.selectedItems.nodes[0];
        selectedNode = diagram.nameTable[selectedNode.id] || selectedNode;

        if (selectedNode.shape && (selectedNode.shape as EREntityShapeModel).type === 'Er' &&
            (selectedNode.shape as EREntityShapeModel).shape === 'Entity') {
            return selectedNode;
        }

        if ((selectedNode as any).parentId) {
            const parentNode: NodeModel = diagram.nameTable[(selectedNode as any).parentId];
            if (parentNode && parentNode.shape && (parentNode.shape as EREntityShapeModel).type === 'Er' &&
                (parentNode.shape as EREntityShapeModel).shape === 'Entity') {
                return parentNode;
            }
        }

        return undefined;
    }
};
