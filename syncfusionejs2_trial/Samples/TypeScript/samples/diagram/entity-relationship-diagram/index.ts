import { enableRipple } from '@syncfusion/ej2-base';
enableRipple((window as any).ripple);

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
    SymbolPalette,
    ConnectorConstraints
} from '@syncfusion/ej2-diagrams';

Diagram.Inject(DataBinding, UndoRedo, LineRouting, AvoidLineOverlapping, ERDiagrams);
SymbolPalette.Inject(ERDiagrams);


    

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
        annotation?: string;
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
     * Hospital Appointment Management ER Diagram Schema
     * - Doctors, Patients, Appointments, Diagnoses, and Prescriptions
     * - Demonstrates cardinality and relationship annotations
     */
    const schema: DiagramSchema = {
        title: 'Hospital Appointment ER Diagram',

        entities: [
            {
                id: 'Doctor',
                title: 'DOCTOR',
                color: 'secondary',
                position: { x: 0, y: 94 },
                fields: [
                    { id: 'doctor_id', name: 'DoctorID', isPrimaryKey: true },
                    { id: 'name', name: 'Name' },
                    { id: 'department', name: 'Department' },
                    { id: 'specialization', name: 'Specialization' },
                    { id: 'contact_number', name: 'ContactNumber' }
                ]
            },
            {
                id: 'Patient',
                title: 'PATIENT',
                color: 'primary',
                position: { x: 290, y: 83 },
                fields: [
                    { id: 'patient_id', name: 'PatientID', isPrimaryKey: true },
                    { id: 'name', name: 'Name' },
                    { id: 'date_of_birth', name: 'DateOfBirth' },
                    { id: 'gender', name: 'Gender' },
                    { id: 'blood_group', name: 'BloodGroup' },
                    { id: 'contact_number', name: 'ContactNumber' }
                ]
            },
            {
                id: 'Appointment',
                title: 'APPOINTMENT',
                color: 'tertiary',
                position: { x: 133, y: 355 },
                fields: [
                    { id: 'appointment_id', name: 'AppointmentID', isPrimaryKey: true },
                    { id: 'doctor_id', name: 'DoctorID', isForeignKey: true },
                    { id: 'patient_id', name: 'PatientID', isForeignKey: true },
                    { id: 'appointment_date', name: 'AppointmentDate' },
                    { id: 'status', name: 'Status' }
                ]
            },
            {
                id: 'Diagnosis',
                title: 'DIAGNOSIS',
                color: 'accent',
                position: { x: 549, y: 236 },
                fields: [
                    { id: 'diagnosis_id', name: 'DiagnosisID', isPrimaryKey: true },
                    { id: 'appointment_id', name: 'AppointmentID', isForeignKey: true },
                    { id: 'disease', name: 'Disease' },
                    { id: 'severity', name: 'Severity' },
                    { id: 'notes', name: 'Notes' }
                ]
            },
            {
                id: 'Prescription',
                title: 'PRESCRIPTION',
                color: 'warning',
                position: { x: 384, y: 493 },
                fields: [
                    { id: 'prescription_id', name: 'PrescriptionID', isPrimaryKey: true },
                    { id: 'diagnosis_id', name: 'DiagnosisID', isForeignKey: true },
                    { id: 'medicine', name: 'Medicine' },
                    { id: 'dosage', name: 'Dosage' },
                    { id: 'frequency', name: 'Frequency' },
                    { id: 'duration_days', name: 'DurationDays' }
                ]
            }
        ],

        relationships: [
            {
                id: 'rel_doctor_appointment',
                source: 'Doctor',
                target: 'Appointment',
                sourceCardinality: 'OneAndOnlyOne',
                targetCardinality: 'ZeroOrMany',
                relationshipType: 'NonIdentifying',
                color: '#16a34a',
                annotation: 'attends'
            },
            {
                id: 'rel_patient_appointment',
                source: 'Patient',
                target: 'Appointment',
                sourceCardinality: 'OneAndOnlyOne',
                targetCardinality: 'ZeroOrMany',
                relationshipType: 'NonIdentifying',
                color: '#2563eb',
                annotation: 'books'
            },
            {
                id: 'rel_appointment_diagnosis',
                source: 'Appointment',
                target: 'Diagnosis',
                sourceCardinality: 'OneAndOnlyOne',
                targetCardinality: 'ZeroOrMany',
                relationshipType: 'Identifying',
                color: '#7c3aed',
                annotation: 'leads to'
            },
            {
                id: 'rel_diagnosis_prescription',
                source: 'Diagnosis',
                target: 'Prescription',
                sourceCardinality: 'OneAndOnlyOne',
                targetCardinality: 'ZeroOrMany',
                relationshipType: 'Identifying',
                color: '#ea580c',
                annotation: 'generates'
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

        const connector: ConnectorModel = {
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

        // Add annotation if defined in relationship schema
        if (relationship.annotation) {
            connector.annotations = [{
                content: relationship.annotation,
                style: {
                    color: color,
                    fill: '#ffffff',
                    fontSize: 13
                }
            }];
        }

        return connector;
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
            connector.constraints = ConnectorConstraints.Default & ~ConnectorConstraints.Drag;
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

