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

/***/ "./Samples/diagram/crud/main.js":
/*!**************************************!*\
  !*** ./Samples/diagram/crud/main.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/diagram/crud/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-diagrams-vue-samples/./Samples/diagram/crud/main.js?");

/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/crud/App.vue?vue&type=script&lang=ts":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/crud/App.vue?vue&type=script&lang=ts ***!
  \*************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs */ \"./node_modules/@syncfusion/ej2-vue-inputs/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_popups__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-popups */ \"./node_modules/@syncfusion/ej2-vue-popups/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-navigations */ \"./node_modules/@syncfusion/ej2-vue-navigations/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-diagrams */ \"./node_modules/@syncfusion/ej2-vue-diagrams/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _crud_template_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./crud-template.vue */ \"./Samples/diagram/crud/crud-template.vue\");\n\n\n\n\n\n\n\n\nvar diagram;\nvar dialog;\nvar toolbarObj;\nvar sourceDropdown;\nvar targetDropdown;\nvar sourceID;\nvar targetID;\nvar nodeData = [];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    components: {\n        'ejs-diagram': _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_3__.DiagramComponent,\n        'ejs-toolbar': _syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_2__.ToolbarComponent,\n        'ejs-dialog': _syncfusion_ej2_vue_popups__WEBPACK_IMPORTED_MODULE_1__.DialogComponent,\n        'ejs-textbox': _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_0__.TextBoxComponent,\n        'ejs-dropdownlist': _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_4__.DropDownListComponent,\n        'ejs-button': _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_5__.ButtonComponent\n    },\n    data: function () {\n        return {\n            width: '100%',\n            height: '600px',\n            snapSettings: { constraints: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_3__.SnapConstraints.None },\n            dataSourceSettings: {\n                id: 'Name',\n                //set an URL to perform CRUD operations with node in database\n                crudAction: {\n                    read: 'https://js.syncfusion.com/demos/ejServices/api/Diagram/GetNodes',\n                    create: 'https://js.syncfusion.com/demos/ejServices/api/Diagram/AddNodes',\n                    update: 'https://js.syncfusion.com/demos/ejServices/api/Diagram/UpdateNodes',\n                    destroy: 'https://js.syncfusion.com/demos/ejServices/api/Diagram/DeleteNodes',\n                    customFields: ['Id', 'Description', 'Color']\n                },\n                connectionDataSource: {\n                    id: 'Name',\n                    sourceID: 'SourceNode',\n                    targetID: 'TargetNode',\n                    //set an URL to perform CRUD operations with connector in database\n                    crudAction: {\n                        read: 'https://js.syncfusion.com/demos/ejServices/api/Diagram/GetConnectors',\n                        create: 'https://js.syncfusion.com/demos/ejServices/api/Diagram/AddConnectors',\n                        update: 'https://js.syncfusion.com/demos/ejServices/api/Diagram/UpdateConnectors',\n                        destroy: 'https://js.syncfusion.com/demos/ejServices/api/Diagram/DeleteConnectors',\n                        customFields: ['Id']\n                    }\n                }\n            },\n            layout: {\n                type: 'HierarchicalTree',\n                verticalSpacing: 40\n            },\n            getNodeDefaults: function (obj, diagram) {\n                obj.width = 100;\n                obj.height = 50;\n                obj.shape = { type: 'Basic', shape: 'Rectangle' };\n                obj.style = { strokeWidth: 1, strokeColor: '#DDDDDD' };\n                return obj;\n            },\n            getConnectorDefaults: function (connector, diagram) {\n                connector.type = 'Orthogonal';\n                if (connector.style)\n                    connector.style.fill = '#707070';\n                if (connector.style)\n                    connector.style.strokeColor = '#707070';\n                connector.targetDecorator = {\n                    style: {\n                        strokeColor: '#707070',\n                        fill: '#707070'\n                    }\n                };\n                return connector;\n            },\n            //set an label style for nodes\n            setNodeTemplate: function (obj) {\n                obj.annotations = [{ style: { color: 'black' } }];\n                obj.annotations[0].content = obj.Description;\n                obj.style = { fill: obj.Color };\n                if (obj.Id === 1) {\n                    //delete constraints for an root node\n                    obj.constraints = _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_3__.NodeConstraints.Default & ~_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_3__.NodeConstraints.Delete;\n                }\n            },\n            crudTemplate: function () {\n                return { template: _crud_template_vue__WEBPACK_IMPORTED_MODULE_7__[\"default\"] };\n            },\n            dlgButtons: [{ click: dlgButtonClick, buttonModel: { isPrimary: 'true', content: 'Update' } }],\n            fields: { text: 'Label', value: 'Name' },\n            popupHeight: '220px',\n            showCloseIcon: true,\n            isModal: true,\n            dialogWidth: '300px',\n            toolbarClick: toolbarClickEvent,\n            toolbarCreate: toolbarCreate,\n            sourceDropdownCreate: sourceDropdownCreate,\n            targetDropdownCreate: targetDropdownCreate,\n            sourceDropdownChange: sourceDropdownChange,\n            targetDropdownChange: targetDropdownChange,\n            selectionChange: selectionChange,\n            connectionChange: connectionChange\n        };\n    },\n    provide: {\n        diagram: [_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_3__.DataBinding, _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_3__.HierarchicalTree]\n    },\n    mounted: function () {\n        var diagramObj = document.getElementById('diagram');\n        diagram = diagramObj.ej2_instances[0];\n        var dialogObj = document.getElementById('editDialog');\n        dialog = dialogObj.ej2_instances[0];\n        var sourceDropdownObj = document.getElementById('SourceId');\n        sourceDropdown = sourceDropdownObj.ej2_instances[0];\n        var targetDropdownObj = document.getElementById('TargetId');\n        targetDropdown = targetDropdownObj.ej2_instances[0];\n    }\n});\nfunction dlgButtonClick(evt) {\n    var selectedItem = {};\n    var dialogHeader = dialog.header;\n    var description = document.getElementById('Description').value;\n    var color = document.getElementById('Color').value;\n    if (diagram.selectedItems && diagram.selectedItems.nodes && diagram.selectedItems.nodes.length > 0) {\n        selectedItem = diagram.selectedItems.nodes[0];\n    }\n    if (diagram.selectedItems && diagram.selectedItems.connectors && diagram.selectedItems.connectors.length > 0) {\n        selectedItem = diagram.selectedItems.connectors[0];\n    }\n    if (dialogHeader === 'Add') {\n        var node = {\n            id: 'node' + (0,_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_3__.randomId)(),\n            style: { fill: color },\n            Description: description,\n            Color: color,\n            Id: Math.floor(Math.random() * 1000 + 100)\n        };\n        var connector = {\n            id: 'connector' + (0,_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_3__.randomId)(),\n            sourceID: selectedItem.id,\n            targetID: node.id,\n            Id: Math.floor(Math.random() * 1000 + 100)\n        };\n        diagram.add(node);\n        diagram.add(connector);\n        diagram.doLayout();\n        diagram.insertData();\n        nodeData.push({ Name: node.id, Label: description });\n        sourceDropdown.dataSource = getDataSource();\n        sourceDropdown.dataBind();\n        targetDropdown.dataSource = getDataSource();\n        targetDropdown.dataBind();\n    }\n    else {\n        if (selectedItem instanceof _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_3__.Connector) {\n            //set an sourceNode and targetNode updated at runtime\n            selectedItem.sourceID = sourceID ? sourceID : selectedItem.sourceID;\n            selectedItem.targetID = targetID ? targetID : selectedItem.targetID;\n            diagram.dataBind();\n            diagram.doLayout();\n        }\n        else {\n            //update an node text and background color.\n            selectedItem.Description = description;\n            selectedItem.Color = color;\n            selectedItem.annotations[0].content = description;\n            selectedItem.style.fill = color;\n            diagram.dataBind();\n        }\n        diagram.updateData();\n    }\n    dialog.hide();\n}\nfunction toolbarCreate(args) {\n    enableToolbarItems(false);\n}\n//set an sourceNode name in dropdown\nfunction sourceDropdownCreate(args) {\n    var obj = document.getElementById('SourceId');\n    sourceDropdown = obj.ej2_instances[0];\n    sourceDropdown.dataSource = getDataSource();\n    sourceDropdown.dataBind();\n}\n//set an targetNode name in dropdown\nfunction targetDropdownCreate(args) {\n    var obj = document.getElementById('TargetId');\n    targetDropdown = obj.ej2_instances[0];\n    targetDropdown.dataSource = getDataSource();\n    targetDropdown.dataBind();\n}\n//set an sourceNode Id of an selected Connector\nfunction sourceDropdownChange(args) {\n    sourceID = args.value;\n}\n//set an targetNode Id of an selected Connector\nfunction targetDropdownChange(args) {\n    targetID = args.value;\n}\n//In this event, we disable/enable the toolbar items based on selected elements\nfunction selectionChange(args) {\n    var obj = document.getElementById('toolbar');\n    toolbarObj = obj.ej2_instances[0];\n    if (args.state === 'Changing') {\n        if (args.newValue.length > 0) {\n            if (args.newValue[0] instanceof _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_3__.Node) {\n                enableToolbarItems(true);\n            }\n            else {\n                toolbarObj.enableItems(document.getElementById(toolbarObj.items[0].id).parentElement, false);\n                toolbarObj.enableItems(document.getElementById(toolbarObj.items[2].id).parentElement, true);\n                toolbarObj.enableItems(document.getElementById(toolbarObj.items[4].id).parentElement, false);\n            }\n        }\n        else {\n            enableToolbarItems(false);\n        }\n    }\n}\n//enable/disable the toolbar items\nfunction enableToolbarItems(isEnableItem) {\n    var obj = document.getElementById('toolbar');\n    toolbarObj = obj.ej2_instances[0];\n    toolbarObj.enableItems(document.getElementById(toolbarObj.items[0].id).parentElement, isEnableItem);\n    toolbarObj.enableItems(document.getElementById(toolbarObj.items[2].id).parentElement, isEnableItem);\n    toolbarObj.enableItems(document.getElementById(toolbarObj.items[4].id).parentElement, isEnableItem);\n}\nfunction connectionChange(args) {\n    if (args.state === 'Completed') {\n        if (!args.connector.targetID || !args.connector.sourceID) {\n            args.cancel = true;\n        }\n    }\n}\nfunction toolbarClickEvent(args) {\n    var selectedItem = {};\n    if (diagram.selectedItems && diagram.selectedItems.nodes && diagram.selectedItems.nodes.length > 0) {\n        selectedItem = diagram.selectedItems.nodes[0];\n    }\n    if (diagram.selectedItems && diagram.selectedItems.connectors && diagram.selectedItems.connectors.length > 0) {\n        selectedItem = diagram.selectedItems.connectors[0];\n    }\n    if (selectedItem) {\n        switch (args.item.tooltipText) {\n            case 'Add':\n                openDialog('Add', '', '', true);\n                break;\n            case 'Edit':\n                if (selectedItem instanceof _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_3__.Connector) {\n                    var sourceNode = diagram.getObject(selectedItem.sourceID);\n                    var targetNode = diagram.getObject(selectedItem.targetID);\n                    openDialog('Edit', sourceNode.id, targetNode.id, false);\n                }\n                else {\n                    openDialog('Edit', selectedItem.Description, selectedItem.Color, true);\n                }\n                break;\n            case 'Delete':\n                diagram.remove(selectedItem);\n                diagram.doLayout();\n                diagram.removeData();\n                var element = { Name: selectedItem.id, Label: selectedItem.Description };\n                var index = nodeData.indexOf(element);\n                nodeData.splice(index, 1);\n                sourceDropdown.dataSource = getDataSource();\n                sourceDropdown.dataBind();\n                targetDropdown.dataSource = getDataSource();\n                targetDropdown.dataBind();\n        }\n    }\n    switch (args.item.tooltipText) {\n        case 'Reset':\n            var callback = new _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_6__.Ajax(\"https://js.syncfusion.com/demos/ejServices/api/Diagram/ResetData\", 'POST');\n            callback.send().then();\n            diagram.refreshDiagram();\n            diagram.refresh();\n    }\n}\n//open a dialog control on clicking the toolbar items\nfunction openDialog(title, description, color, isNode) {\n    dialog.header = title;\n    if (isNode) {\n        hideClassElement('.showDropdown', 'none');\n        hideClassElement('.showLabel', 'block');\n        document.getElementById('Description').value = description;\n        document.getElementById('Color').value = color;\n    }\n    else {\n        hideClassElement('.showDropdown', 'block');\n        hideClassElement('.showLabel', 'none');\n        document.getElementById('SourceId').value = description;\n        document.getElementById('TargetId').value = color;\n    }\n    //open a dialog\n    dialog.show();\n}\n//method to show/hide the textbox/dropdown in dialog control\nfunction hideClassElement(className, display) {\n    var i;\n    var showDropdown = document.querySelectorAll(className);\n    for (i = 0; i < showDropdown.length; i++) {\n        showDropdown[i].style.display = display;\n    }\n}\n//Iterate an node text in diagram element to set it in dropdown datasource\nfunction getDataSource() {\n    var diagramObj = document.getElementById('diagram');\n    var diagram = diagramObj.ej2_instances[0];\n    var i;\n    nodeData = [];\n    for (i = 0; i < diagram.nodes.length; i++) {\n        var node = diagram.nodes[i];\n        var element = { Name: node.id, Label: node.Description };\n        nodeData.push(element);\n    }\n    return nodeData;\n}\n\n\n//# sourceURL=webpack://ej2-diagrams-vue-samples/./Samples/diagram/crud/App.vue?./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/crud/App.vue?vue&type=template&id=dd52a940&ts=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/crud/App.vue?vue&type=template&id=dd52a940&ts=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nvar _hoisted_1 = { class: \"control-section\" };\nvar _hoisted_2 = { style: { \"width\": \"100%\", \"height\": \"10%\" } };\nvar _hoisted_3 = { style: { \"width\": \"100%\", \"height\": \"80%\", \"border-width\": \"0 1px 1px 1px\", \"border-style\": \"solid\", \"border-color\": \"#D7D7D7\" } };\nvar _hoisted_4 = {\n    id: \"diagram-space\",\n    class: \"sb-mobile-diagram\"\n};\nvar _hoisted_5 = { class: \"showLabel\" };\nvar _hoisted_6 = {\n    class: \"showLabel\",\n    style: { \"padding-top\": \"14px\" }\n};\nvar _hoisted_7 = { class: \"showDropdown\" };\nvar _hoisted_8 = {\n    class: \"showDropdown\",\n    style: { \"padding-top\": \"14px\" }\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n    var _component_e_item = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-item\");\n    var _component_e_items = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-items\");\n    var _component_ejs_toolbar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-toolbar\");\n    var _component_ejs_diagram = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-diagram\");\n    var _component_ejs_textbox = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-textbox\");\n    var _component_ejs_dropdownlist = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-dropdownlist\");\n    var _component_ejs_dialog = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-dialog\");\n    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_toolbar, {\n                    id: \"toolbar\",\n                    clicked: _ctx.toolbarClick,\n                    created: _ctx.toolbarCreate\n                }, {\n                    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () { return [\n                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_items, null, {\n                            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () { return [\n                                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_item, {\n                                    id: \"Add\",\n                                    tooltipText: \"Add\",\n                                    prefixIcon: \"e-ddb-icons e-add\",\n                                    text: \"Add\"\n                                }),\n                                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_item, { type: \"Separator\" }),\n                                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_item, {\n                                    id: \"Edit\",\n                                    tooltipText: \"Edit\",\n                                    prefixIcon: \"e-ddb-icons e-update\",\n                                    text: \"Edit\"\n                                }),\n                                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_item, { type: \"Separator\" }),\n                                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_item, {\n                                    id: \"Delete\",\n                                    tooltipText: \"Delete\",\n                                    prefixIcon: \"e-ddb-icons e-delete\",\n                                    text: \"Delete\"\n                                }),\n                                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_item, { type: \"Separator\" }),\n                                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_item, {\n                                    id: \"Reset\",\n                                    tooltipText: \"Reset\",\n                                    prefixIcon: \"e-ddc-icons e-reset\",\n                                    text: \"Reset\"\n                                })\n                            ]; }),\n                            _: 1 /* STABLE */\n                        })\n                    ]; }),\n                    _: 1 /* STABLE */\n                }, 8 /* PROPS */, [\"clicked\", \"created\"])\n            ]),\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [\n                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_diagram, {\n                        id: \"diagram\",\n                        width: _ctx.width,\n                        height: _ctx.height,\n                        getNodeDefaults: _ctx.getNodeDefaults,\n                        getConnectorDefaults: _ctx.getConnectorDefaults,\n                        snapSettings: _ctx.snapSettings,\n                        selectionChange: _ctx.selectionChange,\n                        sourcePointChange: _ctx.connectionChange,\n                        targetPointChange: _ctx.connectionChange,\n                        setNodeTemplate: _ctx.setNodeTemplate,\n                        layout: _ctx.layout,\n                        dataSourceSettings: _ctx.dataSourceSettings\n                    }, null, 8 /* PROPS */, [\"width\", \"height\", \"getNodeDefaults\", \"getConnectorDefaults\", \"snapSettings\", \"selectionChange\", \"sourcePointChange\", \"targetPointChange\", \"setNodeTemplate\", \"layout\", \"dataSourceSettings\"])\n                ])\n            ])\n        ]),\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_dialog, {\n            id: \"editDialog\",\n            buttons: _ctx.dlgButtons,\n            width: _ctx.dialogWidth,\n            visible: false,\n            isModal: _ctx.isModal,\n            showCloseIcon: _ctx.showCloseIcon\n        }, {\n            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () { return [\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, [\n                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_5, [\n                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_textbox, {\n                            id: \"Description\",\n                            placeholder: \"Enter Description\"\n                        })\n                    ]),\n                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_6, [\n                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_textbox, {\n                            id: \"Color\",\n                            placeholder: \"Enter Color\"\n                        })\n                    ]),\n                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_7, [\n                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_dropdownlist, {\n                            id: \"SourceId\",\n                            created: _ctx.sourceDropdownCreate,\n                            popupHeight: _ctx.popupHeight,\n                            change: _ctx.sourceDropdownChange,\n                            fields: _ctx.fields\n                        }, null, 8 /* PROPS */, [\"created\", \"popupHeight\", \"change\", \"fields\"])\n                    ]),\n                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_8, [\n                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_dropdownlist, {\n                            id: \"TargetId\",\n                            created: _ctx.targetDropdownCreate,\n                            popupHeight: _ctx.popupHeight,\n                            change: _ctx.targetDropdownChange,\n                            fields: _ctx.fields\n                        }, null, 8 /* PROPS */, [\"created\", \"popupHeight\", \"change\", \"fields\"])\n                    ])\n                ])\n            ]; }),\n            _: 1 /* STABLE */\n        }, 8 /* PROPS */, [\"buttons\", \"width\", \"isModal\", \"showCloseIcon\"]),\n        _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div id=\\\"action-description\\\"><p> This sample demonstrates generating a diagram by reading data from the database, and updating it with newly inserted/updated/deleted nodes and connectors through web services. </p></div><div id=\\\"description\\\"><p> This example shows how the user reads the data source and performs add, edit, delete of data in the data source at runtime. The <code>crudAction</code> property of the <code>dataSourceSettings</code> and <code>crudAction</code> property of the <code>connectionDataSource</code> allow you to define the server-side method name for <code>create</code>, <code>read</code>, <code>update</code>, and <code>delete</code> operations. </p><p> The <code>insertData</code> method is used to send the newly added/inserted data from client to server side. Likewise, <code>updateData</code> and <code>removeData</code> are used to send the updated and deleted diagram elements to the server. </p><p style=\\\"font-weight:500;\\\">Injecting Module</p><p> The diagram component’s features are segregated into individual feature-wise modules. To generate diagrams from an external data source, inject <code>DataBinding</code> module using <code>provide: { diagram: [DataBinding] }</code> method. To automatically arrange the objects in an Hierarchical chart, inject <code>HierarchicalTree</code> module using <code>provide: { diagram: [HierarchicalTree] }</code> method. </p><br><p>Looking for the full Vue Diagram component overview, features, pricing, and documentation? Visit the <a href=\\\"https://www.syncfusion.com/vue-components/vue-diagram\\\" target=\\\"_blank\\\">Vue Diagram</a> page.</p></div>\", 2))\n    ]));\n}\n\n\n//# sourceURL=webpack://ej2-diagrams-vue-samples/./Samples/diagram/crud/App.vue?./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/diagram/crud/App.vue":
/*!**************************************!*\
  !*** ./Samples/diagram/crud/App.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_dd52a940_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=dd52a940&ts=true */ \"./Samples/diagram/crud/App.vue?vue&type=template&id=dd52a940&ts=true\");\n/* harmony import */ var _App_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=ts */ \"./Samples/diagram/crud/App.vue?vue&type=script&lang=ts\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_App_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_dd52a940_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/diagram/crud/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-diagrams-vue-samples/./Samples/diagram/crud/App.vue?");

/***/ }),

/***/ "./Samples/diagram/crud/crud-template.vue":
/*!************************************************!*\
  !*** ./Samples/diagram/crud/crud-template.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _crud_template_vue_vue_type_template_id_56bf82c8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crud-template.vue?vue&type=template&id=56bf82c8 */ \"./Samples/diagram/crud/crud-template.vue?vue&type=template&id=56bf82c8\");\n/* harmony import */ var _crud_template_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crud-template.vue?vue&type=script&lang=js */ \"./Samples/diagram/crud/crud-template.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_crud_template_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_crud_template_vue_vue_type_template_id_56bf82c8__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/diagram/crud/crud-template.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-diagrams-vue-samples/./Samples/diagram/crud/crud-template.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/crud/crud-template.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/crud/crud-template.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  data() {\n    return {\n      data: {}\n    };\n  }\n});\n\n\n//# sourceURL=webpack://ej2-diagrams-vue-samples/./Samples/diagram/crud/crud-template.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/diagram/crud/App.vue?vue&type=script&lang=ts":
/*!**************************************************************!*\
  !*** ./Samples/diagram/crud/App.vue?vue&type=script&lang=ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=ts */ \"./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/crud/App.vue?vue&type=script&lang=ts\");\n \n\n//# sourceURL=webpack://ej2-diagrams-vue-samples/./Samples/diagram/crud/App.vue?");

/***/ }),

/***/ "./Samples/diagram/crud/App.vue?vue&type=template&id=dd52a940&ts=true":
/*!****************************************************************************!*\
  !*** ./Samples/diagram/crud/App.vue?vue&type=template&id=dd52a940&ts=true ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_dd52a940_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_dd52a940_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=dd52a940&ts=true */ \"./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/crud/App.vue?vue&type=template&id=dd52a940&ts=true\");\n\n\n//# sourceURL=webpack://ej2-diagrams-vue-samples/./Samples/diagram/crud/App.vue?");

/***/ }),

/***/ "./Samples/diagram/crud/crud-template.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./Samples/diagram/crud/crud-template.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_crud_template_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_crud_template_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./crud-template.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/crud/crud-template.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2-diagrams-vue-samples/./Samples/diagram/crud/crud-template.vue?");

/***/ }),

/***/ "./Samples/diagram/crud/crud-template.vue?vue&type=template&id=56bf82c8":
/*!******************************************************************************!*\
  !*** ./Samples/diagram/crud/crud-template.vue?vue&type=template&id=56bf82c8 ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_crud_template_vue_vue_type_template_id_56bf82c8__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_crud_template_vue_vue_type_template_id_56bf82c8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./crud-template.vue?vue&type=template&id=56bf82c8 */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/crud/crud-template.vue?vue&type=template&id=56bf82c8\");\n\n\n//# sourceURL=webpack://ej2-diagrams-vue-samples/./Samples/diagram/crud/crud-template.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/crud/crud-template.vue?vue&type=template&id=56bf82c8":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/crud/crud-template.vue?vue&type=template&id=56bf82c8 ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _hoisted_1 = { class: \"showLabel\" }\nconst _hoisted_2 = {\n  class: \"showLabel\",\n  style: {\"padding-top\":\"14px\"}\n}\nconst _hoisted_3 = { class: \"showDropdown\" }\nconst _hoisted_4 = {\n  class: \"showDropdown\",\n  style: {\"padding-top\":\"14px\"}\n}\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_ejs_textbox = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-textbox\")\n  const _component_ejs_dropdownlist = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-dropdownlist\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_textbox, {\n        id: \"Description\",\n        placeholder: \"Enter Description\"\n      })\n    ]),\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_textbox, {\n        id: \"Color\",\n        placeholder: \"Enter Color\"\n      })\n    ]),\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_dropdownlist, {\n        id: \"SourceId\",\n        created: _ctx.sourceDropdownCreate,\n        popupHeight: _ctx.popupHeight,\n        change: _ctx.sourceDropdownChange,\n        fields: _ctx.fields\n      }, null, 8 /* PROPS */, [\"created\", \"popupHeight\", \"change\", \"fields\"])\n    ]),\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_dropdownlist, {\n        id: \"TargetId\",\n        created: _ctx.targetDropdownCreate,\n        popupHeight: _ctx.popupHeight,\n        change: _ctx.targetDropdownChange,\n        fields: _ctx.fields\n      }, null, 8 /* PROPS */, [\"created\", \"popupHeight\", \"change\", \"fields\"])\n    ])\n  ]))\n}\n\n//# sourceURL=webpack://ej2-diagrams-vue-samples/./Samples/diagram/crud/crud-template.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

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
/******/ 			"diagram/crud/main": 0
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkej2_diagrams_vue_samples"] = self["webpackChunkej2_diagrams_vue_samples"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/diagram/crud/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;