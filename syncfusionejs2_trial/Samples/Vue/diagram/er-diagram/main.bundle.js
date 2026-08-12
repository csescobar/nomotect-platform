/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Samples/diagram/er-diagram/main.js":
/*!********************************************!*\
  !*** ./Samples/diagram/er-diagram/main.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/diagram/er-diagram/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-vue-samples/./Samples/diagram/er-diagram/main.js?");

/***/ }),

/***/ "./Samples/diagram/er-diagram/App.vue":
/*!********************************************!*\
  !*** ./Samples/diagram/er-diagram/App.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_98a04656__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=98a04656 */ \"./Samples/diagram/er-diagram/App.vue?vue&type=template&id=98a04656\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./Samples/diagram/er-diagram/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_98a04656__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/diagram/er-diagram/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-vue-samples/./Samples/diagram/er-diagram/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/er-diagram/App.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/er-diagram/App.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-vue-diagrams */ \"./node_modules/@syncfusion/ej2-vue-diagrams/index.js\");\n\n\n\n_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.Diagram.Inject(_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.DataBinding, _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.UndoRedo, _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.LineRouting, _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.AvoidLineOverlapping, _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.ERDiagrams);\n_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SymbolPalette.Inject(_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.ERDiagrams);\n\nconst CARDINALITY_MAP = {\n  One: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.ERCardinality.One,\n  Many: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.ERCardinality.Many,\n  OneAndOnlyOne: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.ERCardinality.OneAndOnlyOne,\n  OneOrMany: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.ERCardinality.OneOrMany,\n  ZeroOrOne: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.ERCardinality.ZeroOrOne,\n  ZeroOrMany: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.ERCardinality.ZeroOrMany\n};\n\nconst COLOR_TOKENS = {\n    primary: {\n        headerFill: '#bfdbfe',\n        bodyFill: '#eff6ff',\n        strokeColor: '#2563eb',\n        connectorColor: '#2563eb'\n    },\n    secondary: {\n        headerFill: '#bbf7d0',\n        bodyFill: '#f0fdf4',\n        strokeColor: '#16a34a',\n        connectorColor: '#16a34a'\n    },\n    tertiary: {\n        headerFill: '#ddd6fe',\n        bodyFill: '#f5f3ff',\n        strokeColor: '#7c3aed',\n        connectorColor: '#7c3aed'\n    },\n    accent: {\n        headerFill: '#fdba74',\n        bodyFill: '#fff7ed',\n        strokeColor: '#ea580c',\n        connectorColor: '#ea580c'\n    },\n    neutral: {\n        headerFill: '#d1d5db',\n        bodyFill: '#f9fafb',\n        strokeColor: '#6b7280',\n        connectorColor: '#6b7280'\n    },\n    warning: {\n        headerFill: '#fde68a',\n        bodyFill: '#fffbeb',\n        strokeColor: '#d97706',\n        connectorColor: '#d97706'\n    }\n};\n\nconst schema = {\n    title: 'Hospital Patient Management ER Diagram',\n\n    entities: [\n      {\n        id: 'Doctors',\n        title: 'Doctors',\n        color: 'secondary',\n        position: { x: 10, y: 15 },\n        fields: [\n          { id: 'doctor_id', name: 'Doctor_ID', isPrimaryKey: true },\n          { id: 'doctor_name', name: 'Doctor_Name' },\n          { id: 'doctor_department', name: 'Doctor_Department' },\n          { id: 'patient_id', name: 'Patient_ID', isForeignKey: true }\n        ]\n      },\n      {\n        id: 'Patient',\n        title: 'Patient',\n        color: 'primary',\n        position: { x: 312, y: 32 },\n        fields: [\n          { id: 'patient_id', name: 'Patient_ID', isPrimaryKey: true },\n          { id: 'patient_address', name: 'Patient_Address' },\n          { id: 'patient_name', name: 'Patient_Name' },\n          { id: 'date_admitted', name: 'Date_Admitted' },\n          { id: 'patient_sex', name: 'Patient_Sex' }\n        ]\n      },\n      {\n        id: 'Visit',\n        title: 'Visit',\n        color: 'tertiary',\n        position: { x: 868, y: 15 },\n        fields: [\n          { id: 'visit_id', name: 'Visit_ID', isPrimaryKey: true },\n          { id: 'patient_id', name: 'Patient_ID', isForeignKey: true },\n          { id: 'visit_datetime', name: 'Visit_DateTime' },\n          { id: 'visit_reason', name: 'Visit_Reason' },\n          { id: 'visit_comments', name: 'Visit_Comments' }\n        ]\n      },\n      {\n        id: 'Medication',\n        title: 'Medication',\n        color: 'neutral',\n        position: { x: 313, y: 260 },\n        fields: [\n          { id: 'medication_id', name: 'Medication_ID', isPrimaryKey: true },\n          { id: 'medication_name', name: 'Medication_Name' },\n          { id: 'patient_id', name: 'Patient_ID', isForeignKey: true }\n        ]\n      },\n      {\n        id: 'Diagnosis',\n        title: 'Diagnosis',\n        color: 'accent',\n        position: { x: 572, y: 218 },\n        fields: [\n          { id: 'diagnosis_id', name: 'Diagnosis_ID', isPrimaryKey: true },\n          { id: 'patient_id', name: 'Patient_ID', isForeignKey: true },\n          { id: 'diag_code', name: 'Diag_Code' },\n          { id: 'diag_text', name: 'Diag_Text' },\n          { id: 'diag_state', name: 'Diag_State' },\n          { id: 'diag_datetime', name: 'Diag_DateTime' }\n        ]\n      },\n      {\n        id: 'Samples',\n        title: 'Samples',\n        color: 'warning',\n        position: { x: 572, y: 510 },\n        fields: [\n          { id: 'sample_id', name: 'Sample_ID', isPrimaryKey: true },\n          { id: 'sample_type', name: 'Sample_Type' },\n          { id: 'sample_date', name: 'Sample_Date' },\n          { id: 'diagnosis_id', name: 'Diagnosis_ID', isForeignKey: true },\n          { id: 'sample_result', name: 'Sample_Result' }\n        ]\n      }\n    ],\n\n    relationships: [\n      {\n        id: 'rel_patient_doctors',\n        source: 'Patient',\n        target: 'Doctors',\n        sourceCardinality: 'OneAndOnlyOne',\n        targetCardinality: 'ZeroOrMany',\n        relationshipType: 'NonIdentifying',\n        color: COLOR_TOKENS.secondary.connectorColor\n      },\n      {\n        id: 'rel_patient_visit',\n        source: 'Patient',\n        target: 'Visit',\n        sourceCardinality: 'OneAndOnlyOne',\n        targetCardinality: 'ZeroOrMany',\n        relationshipType: 'NonIdentifying',\n        color: COLOR_TOKENS.tertiary.connectorColor\n      },\n      {\n        id: 'rel_patient_medication',\n        source: 'Patient',\n        target: 'Medication',\n        sourceCardinality: 'OneAndOnlyOne',\n        targetCardinality: 'ZeroOrMany',\n        relationshipType: 'NonIdentifying',\n        color: COLOR_TOKENS.neutral.connectorColor\n      },\n      {\n        id: 'rel_patient_diagnosis',\n        source: 'Patient',\n        target: 'Diagnosis',\n        sourceCardinality: 'OneAndOnlyOne',\n        targetCardinality: 'ZeroOrMany',\n        relationshipType: 'NonIdentifying',\n        color: COLOR_TOKENS.accent.connectorColor\n      },\n      {\n        id: 'rel_diagnosis_samples',\n        source: 'Diagnosis',\n        target: 'Samples',\n        sourceCardinality: 'OneAndOnlyOne',\n        targetCardinality: 'ZeroOrMany',\n        relationshipType: 'NonIdentifying',\n        color: COLOR_TOKENS.warning.connectorColor\n      }\n    ]\n  };\n\nconst entityNoFields = {\n  id: 'entity_no_fields',\n  width: 80,\n  height: 80,\n  shape: {\n    type: 'Er',\n    shape: 'Entity',\n    header: {\n      annotation: {\n        content: 'Entity Name',\n        style: {\n          fontSize: 12,\n          bold: true,\n          color: '#111827'\n        }\n      },\n      height: 34,\n      style: { fill: '#ddd6fe' }\n    },\n    fields: [],\n    style: {\n      fill: '#f5f3ff',\n      strokeColor: '#7c3aed',\n      strokeWidth: 1.5\n    }\n  }\n};\n\nconst entityKeyName = {\n  id: 'entity_key_name',\n  width: 80,\n  height: 110,\n  shape: {\n    type: 'Er',\n    shape: 'Entity',\n    header: {\n      annotation: {\n        content: 'Entity Name',\n        style: {\n          fontSize: 12,\n          bold: true,\n          color: '#111827'\n        }\n      },\n      height: 34,\n      style: { fill: '#ddd6fe' }\n    },\n    fields: [\n      { id: 'field_id', name: 'Attribute', isPrimaryKey: true }\n    ],\n    style: {\n      fill: '#f5f3ff',\n      strokeColor: '#7c3aed',\n      strokeWidth: 1.5\n    }\n  }\n};\n\nconst entityKeyNameType = {\n  id: 'entity_key_name_type',\n  width: 80,\n  height: 125,\n  shape: {\n    type: 'Er',\n    shape: 'Entity',\n    header: {\n      annotation: {\n        content: 'Entity Name',\n        style: {\n          fontSize: 12,\n          bold: true,\n          color: '#111827'\n        }\n      },\n      height: 34,\n      style: { fill: '#ddd6fe' }\n    },\n    fields: [\n      { id: 'field_id', name: 'Attribute', isPrimaryKey: true, dataType: 'INT' }\n    ],\n    style: {\n      fill: '#f5f3ff',\n      strokeColor: '#7c3aed',\n      strokeWidth: 1.5\n    }\n  }\n};\n\nconst entityKeyNameTypeConstraints = {\n  id: 'entity_key_name_type_constraints',\n  width: 80,\n  height: 140,\n  shape: {\n    type: 'Er',\n    shape: 'Entity',\n    header: {\n      annotation: {\n        content: 'Entity Name',\n        style: {\n          fontSize: 12,\n          bold: true,\n          color: '#111827'\n        }\n      },\n      height: 34,\n      style: { fill: '#ddd6fe' }\n    },\n    fields: [\n      { id: 'field_id', name: 'Attribute', isPrimaryKey: true, dataType: 'INT', isNotNull: true }\n    ],\n    style: {\n      fill: '#ffffff',\n      strokeColor: '#7c3aed',\n      strokeWidth: 1.5,\n      dataType: 'INT',\n      isUnique: true,\n      isNotNull: true\n    }\n  }\n};\n\nconst connectorSymbols = [\n  { id: 'Link1', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 30, y: 30 } },\n  { id: 'link3', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 30, y: 30 }, targetDecorator: { shape: 'None' } },\n  { id: 'Link21', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 30, y: 30 } },\n  { id: 'link23', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 30, y: 30 }, targetDecorator: { shape: 'None' } },\n  { id: 'link33', type: 'Bezier', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 30, y: 30 }, targetDecorator: { shape: 'None' } }\n];\n\nconst erPalettes = [\n  {\n    id: 'entities',\n    expanded: true,\n    title: 'ER Entities',\n    symbols: [entityNoFields, entityKeyName, entityKeyNameType, entityKeyNameTypeConstraints]\n  },\n  {\n    id: 'connectors',\n    symbols: connectorSymbols,\n    title: 'Connectors'\n  }\n];\n\nfunction toFieldModel(field) {\n  return {\n    id: field.id,\n    name: field.name,\n    isPrimaryKey: field.isPrimaryKey,\n    isForeignKey: field.isForeignKey\n  };\n}\n\nfunction toNode(entity) {\n  const theme = COLOR_TOKENS[entity.color];\n  return {\n    id: entity.id,\n    offsetX: entity.position.x,\n    offsetY: entity.position.y,\n    shape: {\n      type: 'Er',\n      shape: 'Entity',\n      header: {\n        annotation: {\n          content: entity.title,\n          style: {\n            fontSize: 12,\n            bold: true,\n            color: '#111827'\n          }\n        },\n        height: 34,\n        style: {\n          fill: theme.headerFill\n        }\n      },\n      fields: entity.fields.map(toFieldModel),\n      style: {\n        fill: theme.bodyFill,\n        strokeColor: theme.strokeColor,\n        strokeWidth: 1.75,\n        alternateRowColors: [theme.bodyFill, '#ffffff']\n      }\n    }\n  };\n}\n\nfunction toConnector(relationship) {\n  const color = relationship.color || '#64748b';\n  return {\n    id: relationship.id,\n    sourceID: relationship.source,\n    targetID: relationship.target,\n    type: 'Orthogonal',\n    cornerRadius: 6,\n    style: {\n      strokeColor: color,\n      strokeWidth: 1.75\n    },\n    sourceDecorator: {\n      style: {\n        strokeColor: color,\n        strokeWidth: 1.75\n      }\n    },\n    targetDecorator: {\n      style: {\n        strokeColor: color,\n        strokeWidth: 1.75\n      }\n    },\n    shape: {\n      type: 'Er',\n      relationship: {\n        relationshipType: relationship.relationshipType,\n        sourceCardinality: CARDINALITY_MAP[relationship.sourceCardinality],\n        targetCardinality: CARDINALITY_MAP[relationship.targetCardinality]\n      }\n    }\n  };\n}\n\nconst nodes = schema.entities.map(toNode);\nconst connectors = schema.relationships.map(toConnector);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  components: {\n    'ejs-diagram': _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.DiagramComponent,\n    'ejs-symbolpalette': _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SymbolPaletteComponent\n  },\n  data() {\n    return {\n      width: '100%',\n      height: '500px',\n      nodes,\n      connectors,\n      erPalettes,\n      paletteHeight: '500px',\n      symbolMargin: { left: 8, right: 8, top: 8, bottom: 8 },\n      constraints: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.DiagramConstraints.Default | _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.DiagramConstraints.LineRouting | _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.DiagramConstraints.AvoidLineOverlapping,\n      snapSettings: { constraints: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SnapConstraints.None },\n      selectedItems: { userHandles: [] },\n      diagramCreated: false\n    };\n  },\n  methods: {\n    getConnectorDefaults(connector) {\n      connector.cornerRadius = 10;\n      return connector;\n    },\n    onUserHandleMouseDown(args) {\n      const diagram = this.$refs.diagramObj.ej2Instances;\n      const handle = (args.element);\n      if (!handle) { return; }\n\n      const handleName = handle.name;\n      const node = this.getSelectedErEntity();\n      if (handleName === 'AddField') {\n        if (!node) { return; }\n\n        const newField = {\n          id: `${node.id}_field_${new Date().getTime()}`,\n          name: 'NewField'\n        };\n\n        diagram.addField(node, newField);\n      } else if (handleName === 'RemoveField') {\n        if (!node) { return; }\n\n        const fieldToRemove = this.getSelectedFieldToRemove(node);\n        if (!fieldToRemove) { return; }\n\n        diagram.removeField(node, fieldToRemove);\n      }\n    },\n    selectionChange() {\n      const diagram = this.$refs.diagramObj.ej2Instances;\n      // hide handles for everything by default\n      diagram.selectedItems.userHandles = [];\n      const selectedNodes = diagram.selectedItems.nodes || [];\n      if (selectedNodes.length === 1) {\n        const node = selectedNodes[0];\n        // if an ER entity is selected show the AddField handle\n        if (node && node.shape && node.shape.type === 'Er' && node.shape.shape === 'Entity' && node.style && node.style.strokeColor) {\n          diagram.selectedItems.userHandles = [{\n            name: 'AddField',\n            offset: 1,\n            side: 'Bottom',\n            content: `\n              <g class=\"insert-handle\">\n                  <circle class=\"bg\" cx=\"8\" cy=\"8\" r=\"7\" fill=\"${node.style.strokeColor}\"/>\n                  <path class=\"plus\" d=\"M8 5 V11 M5 8 H11\" stroke=\"white\" stroke-width=\"1.2\" stroke-linecap=\"round\"/>\n                  <style>\n                      .insert-handle { cursor: pointer; }\n                      .insert-handle:hover .bg { fill: ${node.style.strokeColor}; }\n                  </style>\n              </g>\n              `,\n            tooltip: { content: 'Add Field' },\n            size: 24,\n            margin: { left: 20, bottom: 36 }\n          }];\n        // if a child/field is selected show the RemoveField handle\n        } else if (node && node.shape && node.style && node.style.strokeColor) {\n          const isPKField = node.annotations && node.annotations.length > 0 && node.annotations[0].content === 'PK';\n\n          if (!isPKField) {\n            diagram.selectedItems.userHandles = [{\n              name: 'RemoveField',\n              offset: 1,\n              side: 'Bottom',\n              content: `\n                            <g class=\"minus-handle\">\n                                <circle class=\"bg\" cx=\"8\" cy=\"8\" r=\"7\" fill=\"${node.style.strokeColor}\"/>\n                                <path class=\"minus\" d=\"M5 8 H11\" stroke=\"white\" stroke-width=\"1.2\" stroke-linecap=\"round\"/>\n                                <style>\n                                    .minus-handle { cursor: pointer; }\n                                    .minus-handle:hover .bg { fill: ${node.style.strokeColor}; }\n                                </style>\n                            </g>\n                        `,\n              tooltip: { content: 'Remove Field' },\n              size: 24,\n              margin: { left: 20, bottom: 36 }\n            }];\n          }\n        }\n      }\n      diagram.dataBind();\n    },\n    created() {\n      this.diagramCreated = true;\n      this.$refs.diagramObj.ej2Instances.fitToPage();\n    },\n    load() {\n      if (this.diagramCreated) {\n        setTimeout(() => this.$refs.diagramObj.ej2Instances.fitToPage(), 10);\n      }\n    },\n    getSelectedFieldToRemove(entityNode) {\n      const diagram = this.$refs.diagramObj.ej2Instances;\n      const erEntity = entityNode.shape;\n      if (!erEntity || !erEntity.fields || erEntity.fields.length === 0) {\n        return undefined;\n      }\n\n      const selectedNodes = diagram.selectedItems.nodes || [];\n      if (!selectedNodes || selectedNodes.length === 0) {\n        return erEntity.fields[erEntity.fields.length - 1];\n      }\n\n      const selectedNode = selectedNodes[0];\n      const parentId = (selectedNode.parentId || '');\n      if (parentId === entityNode.id && entityNode.children) {\n        const selectedChildIndex = entityNode.children.indexOf(selectedNode.id);\n        if (selectedChildIndex > 0 && selectedChildIndex <= erEntity.fields.length) {\n          return erEntity.fields[selectedChildIndex - 1];\n        }\n      }\n\n      return erEntity.fields[erEntity.fields.length - 1];\n    },\n    getSelectedErEntity() {\n      const diagram = this.$refs.diagramObj.ej2Instances;\n      if (!diagram.selectedItems || !diagram.selectedItems.nodes || diagram.selectedItems.nodes.length === 0) {\n        return undefined;\n      }\n\n      let selectedNode = diagram.selectedItems.nodes[0];\n      selectedNode = diagram.nameTable[selectedNode.id] || selectedNode;\n\n      if (selectedNode.shape && selectedNode.shape.type === 'Er' && selectedNode.shape.shape === 'Entity') {\n        return selectedNode;\n      }\n\n      if (selectedNode.parentId) {\n        const parentNode = diagram.nameTable[selectedNode.parentId];\n        if (parentNode && parentNode.shape && parentNode.shape.type === 'Er' && parentNode.shape.shape === 'Entity') {\n          return parentNode;\n        }\n      }\n      return undefined;\n    }\n  }\n});\n\n\n//# sourceURL=webpack://ej2-vue-samples/./Samples/diagram/er-diagram/App.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/diagram/er-diagram/App.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./Samples/diagram/er-diagram/App.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/er-diagram/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2-vue-samples/./Samples/diagram/er-diagram/App.vue?");

/***/ }),

/***/ "./Samples/diagram/er-diagram/App.vue?vue&type=template&id=98a04656":
/*!**************************************************************************!*\
  !*** ./Samples/diagram/er-diagram/App.vue?vue&type=template&id=98a04656 ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_98a04656__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_98a04656__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=98a04656 */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/er-diagram/App.vue?vue&type=template&id=98a04656\");\n\n\n//# sourceURL=webpack://ej2-vue-samples/./Samples/diagram/er-diagram/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/er-diagram/App.vue?vue&type=template&id=98a04656":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/er-diagram/App.vue?vue&type=template&id=98a04656 ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _hoisted_1 = { class: \"control-section\" }\nconst _hoisted_2 = { style: {\"display\":\"flex\",\"width\":\"100%\",\"height\":\"100%\"} }\nconst _hoisted_3 = { style: {\"width\":\"150px\",\"height\":\"100%\",\"margin-right\":\"10px\"} }\nconst _hoisted_4 = {\n  class: \"content-wrapper\",\n  style: {\"flex\":\"1\"}\n}\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_ejs_symbolpalette = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-symbolpalette\")\n  const _component_ejs_diagram = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-diagram\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_symbolpalette, {\n            id: \"symbolpalette\",\n            palettes: $data.erPalettes,\n            width: \"100%\",\n            height: $data.paletteHeight,\n            enableAnimation: false,\n            symbolMargin: $data.symbolMargin\n          }, null, 8 /* PROPS */, [\"palettes\", \"height\", \"symbolMargin\"])\n        ]),\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_diagram, {\n            id: \"diagram\",\n            ref: \"diagramObj\",\n            width: $data.width,\n            height: $data.height,\n            nodes: $data.nodes,\n            connectors: $data.connectors,\n            constraints: $data.constraints,\n            snapSettings: $data.snapSettings,\n            getConnectorDefaults: $options.getConnectorDefaults,\n            selectedItems: $data.selectedItems,\n            onUserHandleMouseDown: $options.onUserHandleMouseDown,\n            selectionChange: $options.selectionChange,\n            created: $options.created,\n            load: $options.load\n          }, null, 8 /* PROPS */, [\"width\", \"height\", \"nodes\", \"connectors\", \"constraints\", \"snapSettings\", \"getConnectorDefaults\", \"selectedItems\", \"onUserHandleMouseDown\", \"selectionChange\", \"created\", \"load\"])\n        ])\n      ])\n    ]),\n    _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div id=\\\"action-description\\\"><p> This sample demonstrates a <b>E-commerce Order Management ER diagram</b> created using the Syncfusion<sup>®</sup> EJ2 Vue Diagram. It visualizes how core entities such as users, orders, products, order items, addresses, and order history are structured and interconnected in a real-world database system. </p></div><div id=\\\"description\\\"><p> This sample showcases how to create and interact with an ER diagram using the Syncfusion<sup>®</sup> EJ2 Vue Diagram. The diagram is built using nodes of <code>type</code> <b>Er</b> to represent database entities and their fields, while connectors define relationships with cardinality between entities. </p><p> Interactive features such as user handles allow users to add or remove fields from entities. When an entity node is selected, a “+” user handle is displayed to add new fields. The added fields can then be interactively reordered using drag-and-drop actions. When an individual field is selected, a “−” user handle is shown to remove that specific field. </p><p> The diagram includes built-in interactions such as selecting entities and editing their fields. </p><br></div>\", 2))\n  ]))\n}\n\n//# sourceURL=webpack://ej2-vue-samples/./Samples/diagram/er-diagram/App.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"diagram/er-diagram/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkej2_vue_samples"] = self["webpackChunkej2_vue_samples"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/diagram/er-diagram/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;