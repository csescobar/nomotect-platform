/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./Samples/block-editor/markdown/main.js":
/*!***********************************************!*\
  !*** ./Samples/block-editor/markdown/main.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/block-editor/markdown/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-blockeditor-vue-samples/./Samples/block-editor/markdown/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/block-editor/markdown/App.vue?vue&type=style&index=0&id=5a75a782&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/block-editor/markdown/App.vue?vue&type=style&index=0&id=5a75a782&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.id, \"\\n.blockeditor-marked .sidebar-content {\\n  overflow: visible;\\n  margin-top: 20px;\\n  border: 1px solid #dee2e6;\\n  height: 95%;\\n  z-index: 20 !important;\\n}\\n.blockeditor-marked {\\n  height: 680px;\\n  overflow: hidden;\\n}\\n.blockeditor-marked .block-content {\\n  border: 1px solid #dee2e6;\\n  border-left: none;\\n}\\n.blockeditor-marked .main-menu .e-list-parent.e-ul {\\n  overflow: hidden;\\n}\\n.blockeditor-marked .block-content .downloadbutton {\\n  box-shadow: none;\\n}\\n.blockeditor-marked .e-sidebar.e-left.e-transition.e-close {\\n  transition: transform 2.5s ease, visibility 1200ms;\\n}\\n.blockeditor-marked .sidebar-content .main-menu .closebutton {\\n  position: fixed;\\n  width: 30px;\\n  height: 30px;\\n  border-radius: 100%;\\n  z-index: 9;\\n  display: flex;\\n  align-items: center;\\n  top: 28px;\\n  cursor: pointer;\\n}\\n.blockeditor-marked .sidebar-content .main-menu #main-treeview {\\n  border: none;\\n}\\n.blockeditor-marked .sb-rightpane-collapsed {\\n  width: 33px;\\n  height: 200px;\\n  position: absolute;\\n  z-index: 1001;\\n  pointer-events: none;\\n}\\n.blockeditor-marked .sb-rightpane-collapsed .labelchoose {\\n  transform: translate(-50%, -50%) rotate(-90deg);\\n  margin-top: 180px;\\n  margin-left: 16px;\\n  white-space: nowrap;\\n  font-size: 14px;\\n  pointer-events: none;\\n}\\n.blockeditor-marked .sidebar-content .main-menu .closebutton.expand-mode {\\n  transform: rotate(180deg);\\n}\\n.blockeditor-marked .block-content .breadcrumbcontent {\\n  pointer-events: none;\\n}\\n.blockeditor-marked .block-content .stick {\\n  position: sticky;\\n  top: 0;\\n  z-index: 10;\\n  height: 48px;\\n  background: var(--color-sf-content-bg-color-alt1);\\n}\\n.blockeditor-marked .stick .block-content .e-chevron-right {\\n  font-size: 10px;\\n}\\n.blockeditor-marked .e-content-animation {\\n  transition: none;\\n  transform: none;\\n}\\n.blockeditor-marked .sidebar-content .sidebar-header {\\n  background-color: #f8f9fa;\\n  padding: 12px 16px;\\n  border-bottom: 1px solid #dee2e6;\\n  z-index: 8;\\n  font-size: 14px;\\n  font-weight: 600;\\n  color: #495057;\\n  user-select: none;\\n  height: 44px;\\n  display: flex;\\n  align-items: center;\\n}\\nbody[class*=\\\"dark\\\"] .blockeditor-marked .sidebar-content .sidebar-header,\\nbody[class*=\\\"high\\\"] .blockeditor-marked .sidebar-content .sidebar-header {\\n  background-color: unset;\\n  color: unset;\\n}\\n.blockeditor-marked .sidebar-content .sidebar-header span {\\n  pointer-events: none;\\n}\\n.blockeditor-marked #sidebar-treeview.e-dock.e-close .sidebar-header {\\n  display: none;\\n}\\n.blockeditor-marked #sidebar-treeview:not(.e-close) .labelchoose {\\n  display: none;\\n}\\n.tailwind3-dark .blockeditor-marked .sidebar-content #left-toc-closebtn {\\n    background: rgb(73 76 80);\\n}\\n.toolbar-row {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 6px 10px;\\n  background: #fff;\\n  border-bottom: 1px solid #eee;\\n}\\n.e-bigger.material3 .e-treeview .e-list-item .e-text-content,\\n.e-bigger.fluent2 .e-treeview .e-list-item .e-ul,\\n.e-bigger.fluent2 .e-treeview .e-list-item .e-text-content,\\n.e-bigger.fluent2-highcontrast .e-treeview .e-list-item .e-ul,\\n.e-bigger.fluent2-highcontrast .e-treeview .e-list-item .e-text-content{\\n  padding-left: 20px;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"App.vue\"],\"names\":[],\"mappings\":\";AACA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,yBAAyB;EACzB,WAAW;EACX,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,gBAAgB;AAClB;AACA;EACE,yBAAyB;EACzB,iBAAiB;AACnB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,kDAAkD;AACpD;AACA;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,UAAU;EACV,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,eAAe;AACjB;AACA;EACE,YAAY;AACd;AACA;EACE,WAAW;EACX,aAAa;EACb,kBAAkB;EAClB,aAAa;EACb,oBAAoB;AACtB;AACA;EACE,+CAA+C;EAC/C,iBAAiB;EACjB,iBAAiB;EACjB,mBAAmB;EACnB,eAAe;EACf,oBAAoB;AACtB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,oBAAoB;AACtB;AACA;EACE,gBAAgB;EAChB,MAAM;EACN,WAAW;EACX,YAAY;EACZ,iDAAiD;AACnD;AACA;EACE,eAAe;AACjB;AACA;EACE,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,gCAAgC;EAChC,UAAU;EACV,eAAe;EACf,gBAAgB;EAChB,cAAc;EACd,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;AACA;;EAEE,uBAAuB;EACvB,YAAY;AACd;AACA;EACE,oBAAoB;AACtB;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;IACI,yBAAyB;AAC7B;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,iBAAiB;EACjB,gBAAgB;EAChB,6BAA6B;AAC/B;AACA;;;;;EAKE,kBAAkB;AACpB\",\"file\":\"App.vue\",\"sourcesContent\":[\"\\n.blockeditor-marked .sidebar-content {\\n  overflow: visible;\\n  margin-top: 20px;\\n  border: 1px solid #dee2e6;\\n  height: 95%;\\n  z-index: 20 !important;\\n}\\n.blockeditor-marked {\\n  height: 680px;\\n  overflow: hidden;\\n}\\n.blockeditor-marked .block-content {\\n  border: 1px solid #dee2e6;\\n  border-left: none;\\n}\\n.blockeditor-marked .main-menu .e-list-parent.e-ul {\\n  overflow: hidden;\\n}\\n.blockeditor-marked .block-content .downloadbutton {\\n  box-shadow: none;\\n}\\n.blockeditor-marked .e-sidebar.e-left.e-transition.e-close {\\n  transition: transform 2.5s ease, visibility 1200ms;\\n}\\n.blockeditor-marked .sidebar-content .main-menu .closebutton {\\n  position: fixed;\\n  width: 30px;\\n  height: 30px;\\n  border-radius: 100%;\\n  z-index: 9;\\n  display: flex;\\n  align-items: center;\\n  top: 28px;\\n  cursor: pointer;\\n}\\n.blockeditor-marked .sidebar-content .main-menu #main-treeview {\\n  border: none;\\n}\\n.blockeditor-marked .sb-rightpane-collapsed {\\n  width: 33px;\\n  height: 200px;\\n  position: absolute;\\n  z-index: 1001;\\n  pointer-events: none;\\n}\\n.blockeditor-marked .sb-rightpane-collapsed .labelchoose {\\n  transform: translate(-50%, -50%) rotate(-90deg);\\n  margin-top: 180px;\\n  margin-left: 16px;\\n  white-space: nowrap;\\n  font-size: 14px;\\n  pointer-events: none;\\n}\\n.blockeditor-marked .sidebar-content .main-menu .closebutton.expand-mode {\\n  transform: rotate(180deg);\\n}\\n.blockeditor-marked .block-content .breadcrumbcontent {\\n  pointer-events: none;\\n}\\n.blockeditor-marked .block-content .stick {\\n  position: sticky;\\n  top: 0;\\n  z-index: 10;\\n  height: 48px;\\n  background: var(--color-sf-content-bg-color-alt1);\\n}\\n.blockeditor-marked .stick .block-content .e-chevron-right {\\n  font-size: 10px;\\n}\\n.blockeditor-marked .e-content-animation {\\n  transition: none;\\n  transform: none;\\n}\\n.blockeditor-marked .sidebar-content .sidebar-header {\\n  background-color: #f8f9fa;\\n  padding: 12px 16px;\\n  border-bottom: 1px solid #dee2e6;\\n  z-index: 8;\\n  font-size: 14px;\\n  font-weight: 600;\\n  color: #495057;\\n  user-select: none;\\n  height: 44px;\\n  display: flex;\\n  align-items: center;\\n}\\nbody[class*=\\\"dark\\\"] .blockeditor-marked .sidebar-content .sidebar-header,\\nbody[class*=\\\"high\\\"] .blockeditor-marked .sidebar-content .sidebar-header {\\n  background-color: unset;\\n  color: unset;\\n}\\n.blockeditor-marked .sidebar-content .sidebar-header span {\\n  pointer-events: none;\\n}\\n.blockeditor-marked #sidebar-treeview.e-dock.e-close .sidebar-header {\\n  display: none;\\n}\\n.blockeditor-marked #sidebar-treeview:not(.e-close) .labelchoose {\\n  display: none;\\n}\\n.tailwind3-dark .blockeditor-marked .sidebar-content #left-toc-closebtn {\\n    background: rgb(73 76 80);\\n}\\n.toolbar-row {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 6px 10px;\\n  background: #fff;\\n  border-bottom: 1px solid #eee;\\n}\\n.e-bigger.material3 .e-treeview .e-list-item .e-text-content,\\n.e-bigger.fluent2 .e-treeview .e-list-item .e-ul,\\n.e-bigger.fluent2 .e-treeview .e-list-item .e-text-content,\\n.e-bigger.fluent2-highcontrast .e-treeview .e-list-item .e-ul,\\n.e-bigger.fluent2-highcontrast .e-treeview .e-list-item .e-text-content{\\n  padding-left: 20px;\\n}\\n\"]}]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://ej2-blockeditor-vue-samples/./Samples/block-editor/markdown/App.vue?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/block-editor/markdown/App.vue":
/*!***********************************************!*\
  !*** ./Samples/block-editor/markdown/App.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_5a75a782__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=5a75a782 */ \"./Samples/block-editor/markdown/App.vue?vue&type=template&id=5a75a782\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./Samples/block-editor/markdown/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _App_vue_vue_type_style_index_0_id_5a75a782_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=5a75a782&lang=css */ \"./Samples/block-editor/markdown/App.vue?vue&type=style&index=0&id=5a75a782&lang=css\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_5a75a782__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/block-editor/markdown/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-blockeditor-vue-samples/./Samples/block-editor/markdown/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/block-editor/markdown/App.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/block-editor/markdown/App.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _syncfusion_ej2_vue_blockeditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-vue-blockeditor */ \"./node_modules/@syncfusion/ej2-vue-blockeditor/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-navigations */ \"./node_modules/@syncfusion/ej2-vue-navigations/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n/* harmony import */ var _syncfusion_ej2_markdown_converter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-markdown-converter */ \"./node_modules/@syncfusion/ej2-markdown-converter/index.js\");\n/* harmony import */ var turndown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! turndown */ \"./node_modules/turndown/lib/turndown.browser.es.js\");\n/* harmony import */ var turndown_plugin_gfm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! turndown-plugin-gfm */ \"./node_modules/turndown-plugin-gfm/lib/turndown-plugin-gfm.es.js\");\n\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  components: {\n    'ejs-blockeditor': _syncfusion_ej2_vue_blockeditor__WEBPACK_IMPORTED_MODULE_0__.BlockEditorComponent,\n    'ejs-sidebar': _syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__.SidebarComponent,\n    'ejs-treeview': _syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__.TreeViewComponent,\n    'ejs-breadcrumb': _syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent,\n    'ejs-button': _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__.ButtonComponent\n  },\n  data() {\n    return {\n      // Sidebar settings\n      width: '240px',\n      enableDock: true,\n      dockSize: '33px',\n      mediaQuery: '(min-width: 600px)',\n      target: '.blockeditor-marked',\n      sidebarHeaderText: 'Markdown Templates',\n\n      // Breadcrumb\n      breadcrumbItems: [{ text: 'Team' }],\n\n      // Editor and toolbar\n      editorBlocks: [],\n      commandMenu: {\n        popupWidth: '298px',\n        popupHeight: '400px',\n        // Custom command items\n        commands: [\n            {\n        id: 'bullet-list-command',\n        type: 'BulletList',\n        groupBy: 'General',\n        label: 'Bullet List',\n        tooltip: 'Create a bullet list',\n        iconCss: 'e-icons e-list-unordered',\n        shortcut: `Ctrl+Shift+8`\n      },\n      {\n        id: 'numbered-list-command',\n        type: 'NumberedList',\n        groupBy: 'General',\n        label: 'Numbered List',\n        tooltip: 'Create a numbered list',\n        iconCss: 'e-icons e-list-ordered',\n        shortcut: `Ctrl+Shift+9`\n      },\n      {\n        id: 'divider-command',\n        type: 'Divider',\n        groupBy: 'General',\n        label: 'Divider',\n        tooltip: 'Add a horizontal line',\n        iconCss: 'e-icons e-be-divider',\n        shortcut: `Ctrl+Shift+-`\n      },\n      {\n        id: 'code-command',\n        type: 'Code',\n        groupBy: 'Insert',\n        label: 'Code',\n        tooltip: 'Insert a code block',\n        iconCss: 'e-icons e-insert-code',\n        shortcut: `Ctrl+Alt+k`\n      },\n      {\n        id: 'table-command',\n        type: 'Table',\n        groupBy: 'Insert',\n        label: 'Table',\n        tooltip: 'Insert a table block',\n        iconCss: 'e-icons e-table-2',\n        shortcut: `Ctrl+Alt+T`\n      },\n      {\n        id: 'paragraph-command',\n        type: 'Paragraph',\n        groupBy: 'Text Styles',\n        label: 'Paragraph',\n        tooltip: 'Add a paragraph',\n        iconCss: 'e-icons e-be-paragraph',\n        shortcut: `Ctrl+Alt+P`\n      },\n      {\n        id: 'heading1-command',\n        type: 'Heading',\n        groupBy: 'Text Styles',\n        label: 'Heading 1',\n        tooltip: 'Page title or main heading',\n        iconCss: 'e-icons e-be-h1',\n        shortcut: `Ctrl+Alt+1`\n      },\n      {\n        id: 'heading2-command',\n        type: 'Heading',\n        groupBy: 'Text Styles',\n        label: 'Heading 2',\n        tooltip: 'Section heading',\n        iconCss: 'e-icons e-be-h2',\n        shortcut: `Ctrl+Alt+2`\n\n      },\n      {\n        id: 'heading3-command',\n        type: 'Heading',\n        groupBy: 'Text Styles',\n        label: 'Heading 3',\n        tooltip: 'Subsection heading',\n        iconCss: 'e-icons e-be-h3',\n        shortcut: `Ctrl+Alt+3`\n      },\n      {\n        id: 'heading4-command',\n        type: 'Heading',\n        groupBy: 'Text Styles',\n        label: 'Heading 4',\n        tooltip: 'Smaller heading for nested content',\n        iconCss: 'e-icons e-be-h4',\n        shortcut: `Ctrl+Alt+4`\n      },\n      {\n        id: 'quote-command',\n        type: 'Quote',\n        groupBy: 'Text Styles',\n        label: 'Quote',\n        tooltip: 'Insert a quote block',\n        iconCss: 'e-icons e-blockquote',\n        shortcut: `Ctrl+Alt+Q`\n      }\n        ]\n      },\n      inlineToolbarSettings: {\n        enable: true,\n        items: [\n          'Bold', 'Italic', 'Underline', 'Strikethrough'\n        ]        \n      },\n\n      // Markdown conversion\n      turndownService: null,\n\n      // Tree data (pointing to your existing repo paths)\n      data: [\n        {\n          id: 'Team_Sessions',\n          name: 'Team Sessions',\n          mdFile: 'https://ej2.syncfusion.com/vue/demos/./../../source/block-editor/mdfiles/Team%20Sessions.md',\n          selected: true,\n          expanded: true,\n          children: [\n            { id: '1', name: 'Meeting minutes.md', mdFile: 'https://ej2.syncfusion.com/vue/demos/./../../source/block-editor/mdfiles/Meeting%20minutes.md' },\n            { id: '2', name: 'Brain storming.md', mdFile: 'https://ej2.syncfusion.com/vue/demos/./../../source/block-editor/mdfiles/Brain%20storming.md' },\n            { id: '3', name: 'Retrospective.md', mdFile: 'https://ej2.syncfusion.com/vue/demos/./../../source/block-editor/mdfiles/Retrospective.md' }\n          ]\n        }\n      ],\n      treeFields: {\n        dataSource: [],\n        id: 'id',\n        text: 'name',\n        child: 'children'\n      }\n    };\n  },\n  created() {\n    // Bind data to tree view fields\n    this.treeFields.dataSource = this.data;\n\n    // Initialize TurndownService (Vue equivalent of React.useMemo setup)\n    const service = new turndown__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n      codeBlockStyle: 'fenced',\n      emDelimiter: '_',\n      bulletListMarker: '-',\n      headingStyle: 'atx'\n    });\n    service.use(turndown_plugin_gfm__WEBPACK_IMPORTED_MODULE_5__.gfm);\n    this.turndownService = service;\n  },\n  mounted() {\n    setTimeout(() => {\n      this.loadContent('https://ej2.syncfusion.com/vue/demos/./../../source/block-editor/mdfiles/Team%20Sessions.md');\n      this.breadcrumbItems = [{ text: 'Team' }, { text: 'Team Sessions' }];\n      if (this.$refs.closeBtn?.ej2Instances?.element && window.innerWidth < 600) {\n        this.$refs.closeBtn.ej2Instances.element.style.left = '18px';\n        this.$refs.closeBtn.ej2Instances.element.classList.add('expand-mode');\n      }\n    }, 100);\n  },\n  methods: {\n    createdblock() {\n      // hook after editor created (optional)\n    },\n\n    async loadContent(mdFile) {\n      try {\n        // Load the markdown file as text\n        const res = await fetch(mdFile, { cache: 'no-cache' });\n        if (!res.ok) throw new Error(`HTTP ${res.status}`);\n        const md = await res.text();\n\n        // Convert Markdown -> HTML via Syncfusion MarkdownConverter\n        const html = _syncfusion_ej2_markdown_converter__WEBPACK_IMPORTED_MODULE_3__.MarkdownConverter.toHtml(md);\n\n        // Convert HTML -> Blocks and render\n        const editor = this.$refs.blockEditor?.ej2Instances;\n        if (editor && html) {\n          try {\n            const blocks = editor.parseHtmlToBlocks(html);\n            this.editorBlocks = blocks; // prop-driven render\n            // Alternatively, also force render to match the Angular flow:\n            editor.renderBlocksFromJson(blocks, true);\n          } catch (parseErr) {\n            console.error('Parse error:', parseErr);\n            this.renderFallbackBlocks(`Parsed content from ${mdFile} failed.`);\n          }\n        }\n      } catch (err) {\n        console.error(`Failed to load ${mdFile}:`, err);\n        this.renderFallbackBlocks(`Error loading ${mdFile}. Make sure the file exists.`);\n      }\n    },\n\n    renderFallbackBlocks(message) {\n      const fallback = [\n        {\n          id: 'fallback-block',\n          blockType: 'Paragraph',\n          content: [{ id: 'fallback-t', contentType: 'Text', content: message }],\n          properties: { placeholder: 'Fallback content' },\n          indent: 0\n        }\n      ];\n      this.editorBlocks = fallback;\n      const editor = this.$refs.blockEditor?.ej2Instances;\n      if (editor) editor.renderBlocksFromJson(fallback, true);\n    },\n\n    // Sidebar controls\n    onOpen() {\n      const closeBtn = this.$refs.closeBtn?.ej2Instances?.element;\n      if (closeBtn) {\n        closeBtn.style.left = '225px';\n        closeBtn.classList.remove('expand-mode');\n      }\n      const tv = this.$refs.treeview?.ej2Instances;\n      if (tv) {\n        tv.expandAll();\n        tv.element.style.display = 'block';\n      }\n    },\n    onClose() {\n      const closeBtn = this.$refs.closeBtn?.ej2Instances?.element;\n      if (closeBtn) {\n        closeBtn.style.left = '18px';\n        closeBtn.classList.add('expand-mode');\n      }\n      const tv = this.$refs.treeview?.ej2Instances;\n      if (tv) {\n        tv.element.style.display = 'none';\n      }\n    },\n    openClick() {\n      this.$refs.sidebarTreeview?.ej2Instances?.toggle();\n    },\n\n    // Tree node selection\n    onNodeSelected(args) {\n      const selectedId = args?.nodeData?.id;\n      if (!selectedId) return;\n\n      if (selectedId === 'Team_Sessions') {\n        this.breadcrumbItems = [{ text: 'Team' }, { text: 'Team Sessions' }];\n        this.loadContent('https://ej2.syncfusion.com/vue/demos/./../../source/block-editor/mdfiles/Team%20Sessions.md');\n        return;\n      }\n\n      const findNodeById = (nodes, id) => {\n        for (const n of nodes) {\n          if (n.id === id) return n;\n          if (n.children?.length) {\n            const found = findNodeById(n.children, id);\n            if (found) return found;\n          }\n        }\n        return undefined;\n      };\n\n      const node = findNodeById(this.data, selectedId);\n      if (node?.mdFile) {\n        this.loadContent(node.mdFile);\n\n        const isUnderTeam = !!args.nodeData.parentID && args.nodeData.parentID === 'Team_Sessions';\n        if (isUnderTeam) {\n          this.breadcrumbItems = [\n            { text: 'Team' },\n            { text: 'Team Sessions' },\n            { text: this.formatBreadcrumbText(node.name) }\n          ];\n        } else {\n          this.breadcrumbItems = [{ text: 'Team' }, { text: this.formatBreadcrumbText(node.name) }];\n        }\n      }\n    },\n\n    // Helpers\n    formatBreadcrumbText(name) {\n      return name?.endsWith('.md') ? name.replace(/\\.md$/i, '') : name;\n    },\n\n    downloadMarkdown() {\n      const editor = this.$refs.blockEditor?.ej2Instances;\n      if (!editor) {\n        console.warn('BlockEditor instance is not available.');\n        return;\n      }\n      let htmlContent = '';\n      try {\n        htmlContent = editor.getDataAsHtml(); // Ensure your BlockEditor version supports this API\n      } catch (e) {\n        console.error('Failed to retrieve HTML from BlockEditor:', e);\n        return;\n      }\n      const markdownContent = this.turndownService.turndown(htmlContent || '');\n\n      // Derive a safe filename from the last breadcrumb\n      let fileName = 'document.md';\n      const lastCrumb = this.breadcrumbItems?.[this.breadcrumbItems.length - 1]?.text;\n      if (lastCrumb) {\n        const safe = lastCrumb.replace(/[\\\\/:*?\"<>|]+/g, '').trim() || 'document';\n        fileName = `${safe}.md`;\n      }\n\n      // Trigger download\n      const blob = new Blob([markdownContent], { type: 'text/markdown;charset=utf-8' });\n      const url = URL.createObjectURL(blob);\n      const a = document.createElement('a');\n      try {\n        a.href = url;\n        a.download = fileName;\n        document.body.appendChild(a);\n        a.click();\n      } finally {\n        document.body.removeChild(a);\n        URL.revokeObjectURL(url);\n      }\n    }\n  }\n});\n\n\n//# sourceURL=webpack://ej2-blockeditor-vue-samples/./Samples/block-editor/markdown/App.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/block-editor/markdown/App.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./Samples/block-editor/markdown/App.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/block-editor/markdown/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2-blockeditor-vue-samples/./Samples/block-editor/markdown/App.vue?");

/***/ }),

/***/ "./Samples/block-editor/markdown/App.vue?vue&type=template&id=5a75a782":
/*!*****************************************************************************!*\
  !*** ./Samples/block-editor/markdown/App.vue?vue&type=template&id=5a75a782 ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_5a75a782__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_5a75a782__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=5a75a782 */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/block-editor/markdown/App.vue?vue&type=template&id=5a75a782\");\n\n\n//# sourceURL=webpack://ej2-blockeditor-vue-samples/./Samples/block-editor/markdown/App.vue?");

/***/ }),

/***/ "./Samples/block-editor/markdown/App.vue?vue&type=style&index=0&id=5a75a782&lang=css":
/*!*******************************************************************************************!*\
  !*** ./Samples/block-editor/markdown/App.vue?vue&type=style&index=0&id=5a75a782&lang=css ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_5a75a782_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=style&index=0&id=5a75a782&lang=css */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/block-editor/markdown/App.vue?vue&type=style&index=0&id=5a75a782&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_5a75a782_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_5a75a782_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_5a75a782_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_5a75a782_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://ej2-blockeditor-vue-samples/./Samples/block-editor/markdown/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/block-editor/markdown/App.vue?vue&type=template&id=5a75a782":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/block-editor/markdown/App.vue?vue&type=template&id=5a75a782 ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _hoisted_1 = { class: \"control-section blockeditor-marked\" }\nconst _hoisted_2 = { class: \"sidebar-header\" }\nconst _hoisted_3 = { class: \"main-menu\" }\nconst _hoisted_4 = {\n  id: \"content_container\",\n  class: \"block-content\"\n}\nconst _hoisted_5 = { class: \"stick\" }\nconst _hoisted_6 = { class: \"toolbar-row\" }\nconst _hoisted_7 = { class: \"breadcrumbcontent\" }\nconst _hoisted_8 = { class: \"toolbar-actions\" }\nconst _hoisted_9 = { class: \"markeditor\" }\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_ejs_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-button\")\n  const _component_ejs_treeview = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-treeview\")\n  const _component_ejs_sidebar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-sidebar\")\n  const _component_ejs_breadcrumb = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-breadcrumb\")\n  const _component_ejs_blockeditor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-blockeditor\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Sidebar \"),\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_sidebar, {\n      id: \"sidebar-treeview\",\n      class: \"sidebar-content\",\n      ref: \"sidebarTreeview\",\n      enableDock: $data.enableDock,\n      width: $data.width,\n      dockSize: $data.dockSize,\n      mediaQuery: $data.mediaQuery,\n      target: $data.target,\n      isOpen: false,\n      onOpen: $options.onOpen,\n      onClose: $options.onClose\n    }, {\n      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"span\", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.sidebarHeaderText), 1 /* TEXT */)\n        ]),\n        _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { class: \"sb-rightpane-collapsed\" }, [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { class: \"labelchoose\" }, \"Markdown Templates\")\n        ], -1 /* HOISTED */)),\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_button, {\n            id: \"left-toc-closebtn\",\n            ref: \"closeBtn\",\n            iconCss: \"e-icons e-chevron-left\",\n            cssClass: \"e-btn e-round closebutton\",\n            onClick: $options.openClick\n          }, null, 8 /* PROPS */, [\"onClick\"]),\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_treeview, {\n            id: \"main-treeview\",\n            ref: \"treeview\",\n            fields: $data.treeFields,\n            expandOn: 'Click',\n            onNodeSelected: $options.onNodeSelected\n          }, null, 8 /* PROPS */, [\"fields\", \"onNodeSelected\"])\n        ])\n      ]),\n      _: 1 /* STABLE */\n    }, 8 /* PROPS */, [\"enableDock\", \"width\", \"dockSize\", \"mediaQuery\", \"target\", \"onOpen\", \"onClose\"]),\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Main content \"),\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Sticky toolbar area \"),\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_5, [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_6, [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_7, [\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_breadcrumb, { items: $data.breadcrumbItems }, {\n              separatorTemplate: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => _cache[1] || (_cache[1] = [\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"span\", { class: \"e-icons e-chevron-right\" }, null, -1 /* HOISTED */)\n              ])),\n              _: 1 /* STABLE */\n            }, 8 /* PROPS */, [\"items\"])\n          ]),\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_8, [\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_button, {\n              ref: \"downloadBtn\",\n              iconCss: \"e-icons e-download\",\n              class: \"downloadbutton\",\n              title: \"Download Markdown\",\n              onClick: $options.downloadMarkdown\n            }, null, 8 /* PROPS */, [\"onClick\"])\n          ])\n        ])\n      ]),\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_9, [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_blockeditor, {\n          id: \"markdown-blockeditor\",\n          ref: \"blockEditor\",\n          height: \"597px\",\n          created: $options.createdblock,\n          commandMenuSettings: $data.commandMenu,\n          inlineToolbarSettings: $data.inlineToolbarSettings,\n          blocks: $data.editorBlocks\n        }, null, 8 /* PROPS */, [\"created\", \"commandMenuSettings\", \"inlineToolbarSettings\", \"blocks\"])\n      ])\n    ]),\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Action/Description \"),\n    _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div id=\\\"action-description\\\"><p> This sample demonstrates the Markdown templates viewer built with Block Editor, complete with a sidebar navigation tree, breadcrumb, and Markdown loading, editing, and Download as Markdown capabilities. </p></div><div id=\\\"description\\\"><p> The Block Editor Documentation Preview is a powerful, interactive documentation system that combines Block Editor with a collapsible sidebar, tree navigation, and Markdown rendering. It allows users to view, edit, and download documentation articles written in Markdown format. </p><p>Key features demonstrated in this sample:</p><ul><li><strong>Sidebar with TreeView Navigation</strong>: Hierarchical menu using ejs-treeview to browse documentation sections.</li><li><strong>Markdown Loading</strong>: Loads .md files from the local mdfiles folder via fetch.</li><li><strong>Markdown to BlockEditor Conversion</strong>: Uses MarkdownConverter and parseHtmlToBlocks() to convert Markdown to rich editable blocks.</li><li><strong>Download as Markdown</strong>: Export current editor content back to clean Markdown using TurndownService.</li><li><strong>Dockable &amp; Responsive Sidebar</strong>: Collapsible sidebar with smooth open/close animation and mobile-friendly behavior.</li><li><strong>Real-time Editing</strong>: Full Block Editor experience—formatting, lists, code blocks, mentions, slash commands, and more.</li><li><strong>Clean UI with Toolbar</strong>: Professional layout with breadcrumb and download button.</li></ul><p> This sample serves as a complete template for building internal documentation portals, knowledge bases, technical wikis, or product guides using the Block Editor. </p></div>\", 2))\n  ]))\n}\n\n//# sourceURL=webpack://ej2-blockeditor-vue-samples/./Samples/block-editor/markdown/App.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/block-editor/markdown/App.vue?vue&type=style&index=0&id=5a75a782&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/block-editor/markdown/App.vue?vue&type=style&index=0&id=5a75a782&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=style&index=0&id=5a75a782&lang=css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/block-editor/markdown/App.vue?vue&type=style&index=0&id=5a75a782&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"b951efd0\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://ej2-blockeditor-vue-samples/./Samples/block-editor/markdown/App.vue?./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 			"block-editor/markdown/main": 0
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkej2_blockeditor_vue_samples"] = self["webpackChunkej2_blockeditor_vue_samples"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/block-editor/markdown/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;