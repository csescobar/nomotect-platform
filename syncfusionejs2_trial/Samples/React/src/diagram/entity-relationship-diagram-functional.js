"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import necessary modules and components from Syncfusion and React libraries.
var React = require("react");
var ej2_react_diagrams_1 = require("@syncfusion/ej2-react-diagrams");
var sample_base_1 = require("../common/sample-base");
require("./font-icons.css");
// Enable services for ER Diagram functionality
ej2_react_diagrams_1.Diagram.Inject(ej2_react_diagrams_1.DataBinding, ej2_react_diagrams_1.UndoRedo, ej2_react_diagrams_1.LineRouting, ej2_react_diagrams_1.AvoidLineOverlapping, ej2_react_diagrams_1.ErDiagrams, ej2_react_diagrams_1.DiagramContextMenu);
// Declare a variable to hold the instance of the DiagramComponent.
var diagramInstance;
var paletteInstance;
var contextMenu = {
    show: true,
    items: [
        {
            text: 'Connector Type',
            id: 'ConnectorType',
            // Sub-menu for Connector Types
            items: [
                { text: 'Straight', id: 'Straight' },
                { text: 'Orthogonal', id: 'Orthogonal' },
                { text: 'Bezier', id: 'Bezier' }
            ]
        },
        {
            text: 'Relationship',
            id: 'Relationship',
            // Sub-menu for Relationship Types
            items: [
                { text: 'Identifying', id: 'Identifying' },
                { text: 'NonIdentifying', id: 'NonIdentifying' }
            ]
        },
        {
            text: 'Source Multiplicity',
            id: 'Source_Multiplicity',
            // Sub-menu for Source Multiplicity
            items: [
                { text: 'One', id: 'One' },
                { text: 'Many', id: 'Many' },
                { text: 'OneAndOnlyOne', id: 'OneAndOnlyOne' },
                { text: 'ZeroOrOne', id: 'ZeroOrOne' },
                { text: 'ZeroOrMany', id: 'ZeroOrMany' },
                { text: 'OneOrMany', id: 'OneOrMany' }
            ]
        },
        {
            text: 'Target Multiplicity',
            id: 'Target_Multiplicity',
            // Sub-menu for Target Multiplicity
            items: [
                { text: 'One', id: 'One_t' },
                { text: 'Many', id: 'Many_t' },
                { text: 'OneAndOnlyOne', id: 'OneAndOnlyOne_t' },
                { text: 'ZeroOrOne', id: 'ZeroOrOne_t' },
                { text: 'ZeroOrMany', id: 'ZeroOrMany_t' },
                { text: 'OneOrMany', id: 'OneOrMany_t' }
            ]
        },
    ],
    showCustomMenuOnly: true,
};
// Color tokens for theming
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
// ER Diagram schema for hospital patient management system
var schema = {
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
                { id: 'patient_name', name: 'Name' },
                { id: 'date_of_birth', name: 'DateOfBirth' },
                { id: 'patient_gender', name: 'Gender' },
                { id: 'patient_blood_group', name: 'BloodGroup' },
                { id: 'patient_contact_number', name: 'ContactNumber' }
            ]
        },
        {
            id: 'Appointment',
            title: 'APPOINTMENT',
            color: 'tertiary',
            position: { x: 133, y: 355 },
            fields: [
                { id: 'appointment_id', name: 'AppointmentID', isPrimaryKey: true },
                { id: 'app_doctor_id', name: 'DoctorID', isForeignKey: true },
                { id: 'app_patient_id', name: 'PatientID', isForeignKey: true },
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
                { id: 'diag_appointment_id', name: 'AppointmentID', isForeignKey: true },
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
                { id: 'pres_diagnosis_id', name: 'DiagnosisID', isForeignKey: true },
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
// Helper function to convert field to ErFieldModel
function toFieldModel(field) {
    return {
        id: field.id,
        name: field.name,
        isPrimaryKey: field.isPrimaryKey,
        isForeignKey: field.isForeignKey
    };
}
// Helper function to convert entity to NodeModel
function toNode(entity) {
    var theme = COLOR_TOKENS[entity.color];
    return {
        id: entity.id,
        offsetX: entity.position.x,
        offsetY: entity.position.y,
        shape: {
            type: 'Er',
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
            fieldDefaults: {
                alternateRowColors: [theme.bodyFill, '#ffffff']
            },
        },
        style: {
            fill: theme.bodyFill,
            strokeColor: theme.strokeColor,
            strokeWidth: 1.75,
        }
    };
}
// Helper function to convert relationship to ConnectorModel
function toConnector(relationship) {
    var color = relationship.color || '#64748b';
    var connector = {
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
            relationship: relationship.relationshipType,
            sourceMultiplicity: { type: relationship.sourceCardinality },
            targetMultiplicity: { type: relationship.targetCardinality }
        }
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
// Generate nodes and connectors
var nodes = schema.entities.map(toNode);
var connectors = schema.relationships.map(toConnector);
// Helper function to get selected field to remove
function getSelectedFieldToRemove(entityNode) {
    var erEntity = entityNode.shape;
    if (!erEntity || !erEntity.fields || erEntity.fields.length === 0) {
        return undefined;
    }
    var selectedNodes = diagramInstance.selectedItems.nodes;
    if (!selectedNodes || selectedNodes.length === 0) {
        return erEntity.fields[erEntity.fields.length - 1];
    }
    var selectedNode = selectedNodes[0];
    var parentId = (selectedNode.parentId || '');
    if (parentId === entityNode.id && entityNode.children) {
        var selectedChildIndex = entityNode.children.indexOf(selectedNode.id);
        if (selectedChildIndex > 0 && selectedChildIndex <= erEntity.fields.length) {
            return erEntity.fields[selectedChildIndex - 1];
        }
    }
    return erEntity.fields[erEntity.fields.length - 1];
}
// Helper function to get selected ER entity
function getSelectedErEntity() {
    if (!diagramInstance || !diagramInstance.selectedItems || !diagramInstance.selectedItems.nodes || diagramInstance.selectedItems.nodes.length === 0) {
        return undefined;
    }
    var selectedNode = diagramInstance.selectedItems.nodes[0];
    selectedNode = diagramInstance.nameTable[selectedNode.id] || selectedNode;
    if (selectedNode.shape && selectedNode.shape.type === 'Er') {
        return selectedNode;
    }
    if (selectedNode.parentId) {
        var parentNode = diagramInstance.nameTable[selectedNode.parentId];
        if (parentNode && parentNode.shape && parentNode.shape.type === 'Er') {
            return parentNode;
        }
    }
    return undefined;
}
function createNewErField(node) {
    var erShape = node.shape;
    var fields = erShape.fields || [];
    var newField = {
        id: "".concat(node.id, "_field_").concat(new Date().getTime()),
        name: 'NewField'
    };
    if (fields.length === 0) {
        return newField;
    }
    var lastField = fields[fields.length - 1];
    if (lastField.dataType && lastField.dataType !== '') {
        newField.dataType = 'VARCHAR(20)';
    }
    if (lastField.constraints && lastField.constraints.length > 0) {
        newField.constraints = ['NotNull'];
    }
    return newField;
}
// Symbol Palette Entity Templates
var entityNoFields = {
    id: 'entity_no_fields',
    width: 80,
    height: 80,
    tooltip: { content: 'Entity With No-Fields' },
    constraints: ej2_react_diagrams_1.NodeConstraints.Tooltip,
    shape: {
        type: 'Er',
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
        fields: []
    },
    style: {
        fill: '#f5f3ff',
        strokeColor: '#7c3aed',
        strokeWidth: 1.5
    }
};
var entityKeyName = {
    id: 'entity_key_name',
    width: 80,
    height: 110,
    tooltip: { content: 'Entity With Key and Name' },
    constraints: ej2_react_diagrams_1.NodeConstraints.Tooltip,
    shape: {
        type: 'Er',
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
        ]
    },
    style: {
        fill: '#f5f3ff',
        strokeColor: '#7c3aed',
        strokeWidth: 1.5
    }
};
var entityKeyNameType = {
    id: 'entity_key_name_type',
    width: 80,
    height: 125,
    tooltip: { content: 'Entity With Key, Name and Type' },
    constraints: ej2_react_diagrams_1.NodeConstraints.Tooltip,
    shape: {
        type: 'Er',
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
            { id: 'field_id_type', name: 'Attribute', isPrimaryKey: true, dataType: 'INT' }
        ]
    },
    style: {
        fill: '#f5f3ff',
        strokeColor: '#7c3aed',
        strokeWidth: 1.5
    }
};
var entityKeyNameTypeConstraints = {
    id: 'entity_key_name_type_constraints',
    width: 80,
    height: 140,
    shape: {
        type: 'Er',
        tooltip: { content: 'Entity With Key, Name, Type and Constraints' },
        constraints: ej2_react_diagrams_1.NodeConstraints.Tooltip,
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
            { id: 'field_id_constraints', name: 'Attribute', isPrimaryKey: true, dataType: 'INT', constraints: ['NotNull'] }
        ]
    },
    style: {
        fill: '#ffffff',
        strokeColor: '#7c3aed',
        strokeWidth: 1.5
    }
};
var connectorSymbols = [
    {
        id: 'Link1',
        tooltip: { content: 'One to One' },
        constraints: ej2_react_diagrams_1.ConnectorConstraints.Tooltip,
        sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 30, y: 30 },
        shape: {
            type: 'Er',
            sourceMultiplicity: { type: 'One' },
            targetMultiplicity: { type: 'One' }
        },
        style: { strokeColor: '#7c3aed', strokeWidth: 1.5 },
        sourceDecorator: {
            style: { strokeColor: '#7c3aed', strokeWidth: 1.5 }
        },
        targetDecorator: {
            style: { strokeColor: '#7c3aed', strokeWidth: 1.5 }
        }
    },
    {
        id: 'Link2',
        tooltip: { content: 'Many to Many' },
        constraints: ej2_react_diagrams_1.ConnectorConstraints.Tooltip,
        sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 30, y: 30 },
        shape: {
            type: 'Er',
            sourceMultiplicity: { type: 'Many' },
            targetMultiplicity: { type: 'Many' }
        },
        style: { strokeColor: '#7c3aed', strokeWidth: 1.5 },
        sourceDecorator: {
            style: { strokeColor: '#7c3aed', strokeWidth: 1.5 }
        },
        targetDecorator: {
            style: { strokeColor: '#7c3aed', strokeWidth: 1.5 }
        }
    },
    {
        id: 'Link3',
        tooltip: { content: 'OneAndOnlyOne to OneAndOnlyOne' },
        constraints: ej2_react_diagrams_1.ConnectorConstraints.Tooltip,
        sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 30, y: 30 },
        shape: {
            type: 'Er',
            sourceMultiplicity: { type: 'OneAndOnlyOne' },
            targetMultiplicity: { type: 'OneAndOnlyOne' }
        },
        style: { strokeColor: '#7c3aed', strokeWidth: 1.5 },
        sourceDecorator: {
            style: { strokeColor: '#7c3aed', strokeWidth: 1.5 }
        },
        targetDecorator: {
            style: { strokeColor: '#7c3aed', strokeWidth: 1.5 }
        }
    },
    {
        id: 'Link4',
        tooltip: { content: 'ZeroOrOne to ZeroOrOne' },
        constraints: ej2_react_diagrams_1.ConnectorConstraints.Tooltip,
        sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 30, y: 30 },
        shape: {
            type: 'Er',
            sourceMultiplicity: { type: 'ZeroOrOne' },
            targetMultiplicity: { type: 'ZeroOrOne' }
        },
        style: { strokeColor: '#7c3aed', strokeWidth: 1.5 },
        sourceDecorator: {
            style: { strokeColor: '#7c3aed', strokeWidth: 1.5 }
        },
        targetDecorator: {
            style: { strokeColor: '#7c3aed', strokeWidth: 1.5 }
        }
    },
    {
        id: 'Link5',
        tooltip: { content: 'OneOrMany to OneOrMany' },
        constraints: ej2_react_diagrams_1.ConnectorConstraints.Tooltip,
        sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 30, y: 30 },
        shape: {
            type: 'Er',
            sourceMultiplicity: { type: 'OneOrMany' },
            targetMultiplicity: { type: 'OneOrMany' }
        },
        style: { strokeColor: '#7c3aed', strokeWidth: 1.5 },
        sourceDecorator: {
            style: { strokeColor: '#7c3aed', strokeWidth: 1.5 }
        },
        targetDecorator: {
            style: { strokeColor: '#7c3aed', strokeWidth: 1.5 }
        }
    },
    {
        id: 'Link6',
        tooltip: { content: 'ZeroOrMany to ZeroOrMany' },
        constraints: ej2_react_diagrams_1.ConnectorConstraints.Tooltip,
        sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 30, y: 30 },
        shape: {
            type: 'Er',
            sourceMultiplicity: { type: 'ZeroOrMany' },
            targetMultiplicity: { type: 'ZeroOrMany' }
        },
        style: { strokeColor: '#7c3aed', strokeWidth: 1.5 },
        sourceDecorator: {
            style: { strokeColor: '#7c3aed', strokeWidth: 1.5 }
        },
        targetDecorator: {
            style: { strokeColor: '#7c3aed', strokeWidth: 1.5 }
        }
    }
];
var erPalettes = [
    { id: 'entities', expanded: true, title: 'ER Entities', symbols: [entityNoFields, entityKeyName, entityKeyNameType, entityKeyNameTypeConstraints] },
    { id: 'connectors', symbols: connectorSymbols, title: 'Connectors' }
];
var SAMPLE_CSS = ".diagram-ERDiagram .sb-mobile-palette {\n  width: 195px;\n  height: 559px;\n  float: left;\n}\n.diagram-ERDiagram #palette-space {\n  border: 1px solid rgba(0, 0, 0, 0.12);\n}";
// ERDiagram component renders an ER diagram using React Diagram.
function ERDiagram() {
    var _a = React.useState(false), diagramCreated = _a[0], setDiagramCreated = _a[1];
    var isMobile;
    React.useEffect(function () {
        (0, sample_base_1.updateSampleSection)();
        addEvents();
    }, []);
    function addEvents() {
        isMobile = window.matchMedia('(max-width:550px)').matches;
        if (isMobile) {
            var paletteIcon = document.getElementById('palette-icon');
            if (paletteIcon) {
                paletteIcon.addEventListener('click', openPalette, false);
            }
            window.addEventListener('resize', function () {
                isMobile = window.matchMedia('(max-width:550px)').matches;
                var paletteSpace = document.getElementById('palette-space');
                if (!isMobile && paletteSpace && paletteSpace.classList.contains('sb-mobile-palette-open')) {
                    paletteSpace.classList.remove('sb-mobile-palette-open');
                }
            });
        }
    }
    function openPalette() {
        var paletteSpace = document.getElementById('palette-space');
        isMobile = window.matchMedia('(max-width:550px)').matches;
        if (!paletteSpace) {
            return;
        }
        if (isMobile) {
            if (!paletteSpace.classList.contains('sb-mobile-palette-open')) {
                paletteSpace.classList.add('sb-mobile-palette-open');
            }
            else {
                paletteSpace.classList.remove('sb-mobile-palette-open');
            }
        }
        else {
            paletteSpace.classList.remove('sb-mobile-palette-open');
        }
    }
    var onUserHandleMouseDown = function (args) {
        if (args.element) {
            var handleName = args.element.name;
            var node = getSelectedErEntity();
            if (!node) {
                return;
            }
            if (handleName === 'AddField') {
                var newField = createNewErField(node);
                diagramInstance.addErField(node, newField);
            }
            else if (handleName === 'RemoveField') {
                var fieldToRemove = getSelectedFieldToRemove(node);
                if (!fieldToRemove) {
                    return;
                }
                diagramInstance.removeErField(node, fieldToRemove);
            }
        }
    };
    var onSelectionChange = function () {
        var selectedNodes = diagramInstance.selectedItems.nodes;
        // hide handles for everything by default
        diagramInstance.selectedItems.userHandles = [];
        if (selectedNodes.length === 1) {
            var node = selectedNodes[0];
            if (node && node.shape && node.shape.type === 'Er' && node.style && node.style.strokeColor) {
                diagramInstance.selectedItems.userHandles = [{
                        name: 'AddField',
                        offset: 1,
                        side: 'Bottom',
                        content: "\n                    <g class=\"insert-handle\">\n                        <circle class=\"bg\" cx=\"8\" cy=\"8\" r=\"7\" fill=\"".concat(node.style.strokeColor, "\"/>\n                        <path class=\"plus\" d=\"M8 5 V11 M5 8 H11\" stroke=\"white\" stroke-width=\"1.2\" stroke-linecap=\"round\"/>\n                        <style>\n                            .insert-handle { cursor: pointer; }\n                            .insert-handle:hover .bg { fill: ").concat(node.style.strokeColor, "; }\n                        </style>\n                    </g>\n                    "),
                        tooltip: { content: 'Add Field' },
                        size: 24,
                        margin: { left: 20, bottom: 36 }
                    }];
            }
            else if (node && node.shape && node.style && node.style.strokeColor) {
                var isPKField = node.annotations && node.annotations.length > 0 && node.annotations[0].content === 'PK';
                if (!isPKField) {
                    diagramInstance.selectedItems.userHandles = [{
                            name: 'RemoveField',
                            offset: 1,
                            side: 'Bottom',
                            content: "\n                        <g class=\"minus-handle\">\n                            <circle class=\"bg\" cx=\"8\" cy=\"8\" r=\"7\" fill=\"".concat(node.style.strokeColor, "\"/>\n                            <path class=\"minus\" d=\"M5 8 H11\" stroke=\"white\" stroke-width=\"1.2\" stroke-linecap=\"round\"/>\n                            <style>\n                                .minus-handle { cursor: pointer; }\n                                .minus-handle:hover .bg { fill: ").concat(node.style.strokeColor, "; }\n                            </style>\n                        </g>\n                        "),
                            tooltip: { content: 'Remove Field' },
                            size: 24,
                            margin: { left: 20, bottom: 36 }
                        }];
                }
            }
        }
        diagramInstance.dataBind();
    };
    var contextMenuClick = function (args) {
        // Check if any connector is selected
        if (diagramInstance.selectedItems.connectors.length > 0) {
            var connector = diagramInstance.selectedItems.connectors[0];
            var erConnector = diagramInstance.selectedItems.connectors[0].shape;
            var itemId = args.item.id;
            if (itemId === 'Straight' || itemId === 'Orthogonal' || itemId === 'Bezier') {
                connector.type = itemId;
            }
            else if (itemId === 'Identifying' || itemId === 'NonIdentifying') {
                erConnector.relationship = itemId;
            }
            else if (itemId === 'One' || itemId === 'Many' || itemId === 'OneAndOnlyOne'
                || itemId === 'ZeroOrOne' || itemId === 'ZeroOrMany' || itemId === 'OneOrMany') {
                erConnector.sourceMultiplicity.type = args.item.text;
            }
            else if (itemId === 'One_t' || itemId === 'Many_t' || itemId === 'OneAndOnlyOne_t'
                || itemId === 'ZeroOrOne_t' || itemId === 'ZeroOrMany_t' || itemId === 'OneOrMany_t') {
                erConnector.targetMultiplicity.type = args.item.text;
            }
            diagramInstance.dataBind();
        }
    };
    var contextMenuOpen = function (args) {
        var hiddenId = [];
        if (args.element.className !== 'e-menu-parent e-ul ') {
            hiddenId = ['ConnectorType', 'Relationship', 'Source_Multiplicity', 'Target_Multiplicity'];
        }
        if (diagramInstance.selectedItems.connectors[0] instanceof ej2_react_diagrams_1.Connector) {
            hiddenId = [];
        }
        args.hiddenItems = hiddenId; // Set the hidden menu items based on the logic above
    };
    return (React.createElement("div", { className: "control-pane diagram-ERDiagram" },
        React.createElement("style", null, SAMPLE_CSS),
        React.createElement("div", { className: "control-section" },
            React.createElement("div", { style: { width: "100%" } },
                React.createElement("div", { className: "sb-mobile-palette-bar" },
                    React.createElement("div", { id: "palette-icon", style: { float: "right" }, className: "e-ddb-icons1 e-toggle-palette" })),
                React.createElement("div", { id: "palette-space", className: "sb-mobile-palette" },
                    React.createElement(ej2_react_diagrams_1.SymbolPaletteComponent, { id: "symbolpalette", ref: function (palette) { return (paletteInstance = palette); }, palettes: erPalettes, width: "100%", height: "560px", symbolWidth: 70, symbolHeight: 70, enableAnimation: false, symbolMargin: { left: 8, right: 8, top: 8, bottom: 8 } },
                        React.createElement(ej2_react_diagrams_1.Inject, { services: [ej2_react_diagrams_1.ErDiagrams] }))),
                React.createElement("div", { id: "diagram-space", className: "sb-mobile-diagram" },
                    React.createElement(ej2_react_diagrams_1.DiagramComponent, { id: "diagram", ref: function (diagram) { return (diagramInstance = diagram); }, width: '100%', height: '560px', nodes: nodes, connectors: connectors, constraints: ej2_react_diagrams_1.DiagramConstraints.Default | ej2_react_diagrams_1.DiagramConstraints.LineRouting | ej2_react_diagrams_1.DiagramConstraints.AvoidLineOverlapping, tool: ej2_react_diagrams_1.DiagramTools.SingleSelect, snapSettings: { constraints: ej2_react_diagrams_1.SnapConstraints.None }, selectedItems: { userHandles: [] }, getConnectorDefaults: function (connector) {
                            connector.cornerRadius = 10;
                            connector.type = 'Orthogonal';
                            connector.constraints = ej2_react_diagrams_1.ConnectorConstraints.Default;
                            return connector;
                        }, onUserHandleMouseDown: onUserHandleMouseDown, selectionChange: onSelectionChange, created: function () {
                            // Fit the diagram to the page on creation.
                            if (diagramInstance) {
                                setDiagramCreated(true);
                                diagramInstance.fitToPage();
                            }
                        }, load: function () {
                            if (diagramCreated) {
                                setTimeout(function () { return diagramInstance.fitToPage(); }, 10);
                            }
                        }, contextMenuSettings: contextMenu, contextMenuClick: contextMenuClick, contextMenuOpen: contextMenuOpen },
                        React.createElement(ej2_react_diagrams_1.Inject, { services: [ej2_react_diagrams_1.DataBinding, ej2_react_diagrams_1.UndoRedo, ej2_react_diagrams_1.LineRouting, ej2_react_diagrams_1.AvoidLineOverlapping, ej2_react_diagrams_1.ErDiagrams, ej2_react_diagrams_1.DiagramContextMenu] }))))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null,
                "This sample demonstrates a ",
                React.createElement("b", null, "healthcare appointment management ER diagram"),
                " created using the ",
                React.createElement("a", { href: "https://www.syncfusion.com/react-components/react-diagram", target: "_blank" }, "React Diagram"),
                ". It visualizes how core entities such as doctors, patients, appointments, diagnoses, and prescriptions are structured and interconnected in a real-world hospital database system.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null,
                "This sample showcases how to create and interact with an ER diagram using the ",
                React.createElement("a", { href: "https://www.syncfusion.com/react-components/react-diagram", target: "_blank" }, "React Diagram"),
                ". The diagram is built using nodes of ",
                React.createElement("code", null, "type: 'Er'"),
                " to represent database entities and their fields, while connectors define relationships with cardinality between entities."),
            React.createElement("p", null,
                React.createElement("b", null, "User handles"),
                " allow adding or removing fields within entities. When an entity node is selected, a \u201C+\u201D handle appears, enabling the addition of new fields. These fields can then be interactively reordered using drag\u2011and\u2011drop actions. When an individual field is selected, a \u201C\u2212\u201D handle is displayed to remove that specific field. The diagram supports built\u2011in interactions such as selecting entities and editing their fields.        ",
                React.createElement("br", null)))));
}
exports.default = ERDiagram;
