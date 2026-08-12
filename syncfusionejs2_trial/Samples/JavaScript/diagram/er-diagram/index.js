ej.base.enableRipple(window.ripple)
/**
 * ER Diagram
 */
ej.diagrams.Diagram.Inject(ej.diagrams.ERDiagrams, ej.diagrams.SymbolPalette);

    // Define cardinalities for ER relationships
    var CARDINALITY_MAP = {
        'One': ej.diagrams.ERCardinality.One,
        'Many': ej.diagrams.ERCardinality.Many,
        'OneAndOnlyOne': ej.diagrams.ERCardinality.OneAndOnlyOne,
        'OneOrMany': ej.diagrams.ERCardinality.OneOrMany,
        'ZeroOrOne': ej.diagrams.ERCardinality.ZeroOrOne,
        'ZeroOrMany': ej.diagrams.ERCardinality.ZeroOrMany
    };

    // Define color tokens for entity themes
    var COLOR_TOKENS = {
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


    // Define the ER diagram schema
    var schema = {
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

    // Define color tokens for entity themes
    function toFieldModel(field) {
        return {
            id: field.id,
            name: field.name,
            isPrimaryKey: field.isPrimaryKey,
            isForeignKey: field.isForeignKey,
        };
    }

    function toNode(entity) {
        var theme = COLOR_TOKENS[entity.color];
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
            }
        };
    }

    function toConnector(relationship) {
        var color = relationship.color || '#64748b';
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
            }
        };
    }

    var nodes = schema.entities.map(toNode);
    var connectors = schema.relationships.map(toConnector);
    var diagramCreated = false;

    var diagram = new ej.diagrams.Diagram({
        width: '100%',
        height: '500px',
        nodes: nodes,
        connectors: connectors,
        constraints: ej.diagrams.DiagramConstraints.Default | ej.diagrams.DiagramConstraints.LineRouting | ej.diagrams.DiagramConstraints.AvoidLineOverlapping,
        snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
        getConnectorDefaults: function (connector) {
            connector.cornerRadius = 10;
            return connector;
        },
        selectedItems: { userHandles: [] },
        onUserHandleMouseDown: function (args) {
            var handle = args.element;
            if (!handle) { return; }

            var handleName = handle.name;

            var node = getSelectedErEntity();
            if (handleName === 'AddField') {
                if (!node) { return; }

                var newField = {
                    id: node.id + '_field_' + new Date().getTime(),
                    name: 'NewField'
                };
                diagram.addField(node, newField);
            } else if (handleName === 'RemoveField') {
                if (!node) { return; }

                var fieldToRemove = getSelectedFieldToRemove(node);
                if (!fieldToRemove) { return; }

                diagram.removeField(node, fieldToRemove);
            }
        },

        selectionChange: function () {
            var selectedNodes = diagram.selectedItems.nodes;
            // hide handles for everything by default
            diagram.selectedItems.userHandles = [];
            if (selectedNodes.length === 1) {
                var node = selectedNodes[0];
                if (node && node.shape && node.shape.type === 'Er' && node.style && node.style.strokeColor) {
                    diagram.selectedItems.userHandles = [{
                        name: 'AddField',
                        offset: 1,
                        side: 'Bottom',
                        content: '<g class="insert-handle"><circle class="bg" cx="8" cy="8" r="7" fill="' + node.style.strokeColor + '"/><path class="plus" d="M8 5 V11 M5 8 H11" stroke="white" stroke-width="1.2" stroke-linecap="round"/><style>.insert-handle { cursor: pointer; } .insert-handle:hover .bg { fill: ' + node.style.strokeColor + '; }</style></g>',
                        tooltip: { content: 'Add Field' },
                        size: 24,
                        margin: { left: 20, bottom: 36 }
                    }];
                } else if (node && node.shape && node.style && node.style.strokeColor) {
                    var isPKField = node.annotations && node.annotations.length > 0 && node.annotations[0].content === 'PK';

                    if (!isPKField) {
                        diagram.selectedItems.userHandles = [{
                            name: 'RemoveField',
                            offset: 1,
                            side: 'Bottom',
                            content: '<g class="minus-handle"><circle class="bg" cx="8" cy="8" r="7" fill="' + node.style.strokeColor + '"/><path class="minus" d="M5 8 H11" stroke="white" stroke-width="1.2" stroke-linecap="round"/><style>.minus-handle { cursor: pointer; } .minus-handle:hover .bg { fill: ' + node.style.strokeColor + '; }</style></g>',
                            tooltip: { content: 'Remove Field' },
                            size: 24,
                            margin: { left: 20, bottom: 36 }
                        }];
                    }
                }
            }
            diagram.dataBind();
        },
        created: function () {
            diagramCreated = true;
            diagram.fitToPage();
        },
        load: function () {
            if (diagramCreated) {
                setTimeout(function () { diagram.fitToPage(); }, 10);
            }
        }
    });

    diagram.appendTo('#diagram');

    // Define entity symbols for the palette - 4 types with single default field and placeholder text
    var entityNoFields = {
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

    var commonHeader = {
        annotation: {
            content: 'Entity Name',
            style: {
                fontSize: 12,
                bold: true,
                color: '#111827'
            }
        },
        height: 34,
        style: {
            fill: '#ddd6fe',
            fontSize: 12,
            bold: true,
            color: 'white'
        }
    };

    var entityKeyName = {
        id: 'entity_key_name',
        width: 80,
        height: 110,
        shape: {
            type: 'Er',
            shape: 'Entity',
            header: commonHeader,
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

    var entityKeyNameType = {
        id: 'entity_key_name_type',
        width: 80,
        height: 125,
        shape: {
            type: 'Er',
            shape: 'Entity',
            header: commonHeader,
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

    var entityKeyNameTypeConstraints = {
        id: 'entity_key_name_type_constraints',
        width: 80,
        height: 140,
        shape: {
            type: 'Er',
            shape: 'Entity',
            header: commonHeader,
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

    var connectorSymbols = [
        { id: 'link1', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 30, y: 30 } },
        {
            id: 'link2', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 30, y: 30 },
            targetDecorator: { shape: 'None' }
        },
        { id: 'link3', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 30, y: 30 } },
        {
            id: 'link4', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 30, y: 30 },
            targetDecorator: { shape: 'None' }
        },
        {
            id: 'link5', type: 'Bezier', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 30, y: 30 },
            targetDecorator: { shape: 'None' }
        },
    ];

    var erPalettes = [
        {
            id: 'entities',
            expanded: true,
            title: 'ER Entities',
            symbols: [entityNoFields, entityKeyName, entityKeyNameType, entityKeyNameTypeConstraints]
        },
        { id: 'connectors', symbols: connectorSymbols, title: 'Connectors' },
    ];


    // Initialize Symbol Palette
    var symbolPalette = new ej.diagrams.SymbolPalette({
        palettes: erPalettes,
        width: '100%', height: '500px',
        symbolWidth: 50,
        symbolHeight: 50,
        enableAnimation: false,
        symbolMargin: { left: 8, right: 8, top: 8, bottom: 8 }
    });

    symbolPalette.appendTo('#symbolpalette');

    function getSelectedErEntity() {
        if (diagram.selectedItems && diagram.selectedItems.nodes && diagram.selectedItems.nodes.length === 0) {
            return undefined;
        }
        var selectedNode = diagram.selectedItems.nodes[0];
        selectedNode = diagram.nameTable[selectedNode.id] || selectedNode;
        if (selectedNode.shape && selectedNode.shape.type === 'Er' && selectedNode.shape.shape === 'Entity') {
            return selectedNode;
        }
        if (selectedNode.parentId) {
            var parentNode = diagram.nameTable[selectedNode.parentId];
            if (parentNode && parentNode.shape && parentNode.shape.type === 'Er' && parentNode.shape.shape === 'Entity') {
                return parentNode;
            }
        }
        return undefined;
    }

    function getSelectedFieldToRemove(entityNode) {
        var erEntity = entityNode.shape;
        if (!erEntity || !erEntity.fields || erEntity.fields.length === 0) {
            return undefined;
        }

        var selectedNodes = diagram.selectedItems.nodes;
        if (!selectedNodes || selectedNodes.length === 0) {
            return erEntity.fields[erEntity.fields.length - 1];
        }

        var selectedNode = selectedNodes[0];
        var parentId = selectedNode.parentId || '';
        if (parentId === entityNode.id && entityNode.children) {
            var selectedChildIndex = entityNode.children.indexOf(selectedNode.id);
            if (selectedChildIndex > 0 && selectedChildIndex <= erEntity.fields.length) {
                return erEntity.fields[selectedChildIndex - 1];
            }
        }

        return erEntity.fields[erEntity.fields.length - 1];
    }
