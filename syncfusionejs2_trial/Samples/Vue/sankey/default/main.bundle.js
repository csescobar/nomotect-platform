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

/***/ "./Samples/sankey/default/main.js":
/*!****************************************!*\
  !*** ./Samples/sankey/default/main.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/sankey/default/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sankey/default/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sankey/default/App.vue?vue&type=style&index=0&id=daae1dd2&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sankey/default/App.vue?vue&type=style&index=0&id=daae1dd2&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.id, \"\\n.control-pane[data-v-daae1dd2] {\\n  font-family: 'Segoe UI', 'Roboto', sans-serif;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"App.vue\"],\"names\":[],\"mappings\":\";AACA;EACE,6CAA6C;AAC/C\",\"file\":\"App.vue\",\"sourcesContent\":[\"\\n.control-pane[data-v-daae1dd2] {\\n  font-family: 'Segoe UI', 'Roboto', sans-serif;\\n}\\n\"]}]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sankey/default/App.vue?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/sankey/default/theme-color.ts":
/*!***********************************************!*\
  !*** ./Samples/sankey/default/theme-color.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadSankeyChartTheme: () => (/* binding */ loadSankeyChartTheme)\n/* harmony export */ });\nvar loadSankeyChartTheme = function (args) {\n    var selectedTheme = location.hash.split(\"/\")[1];\n    selectedTheme = selectedTheme ? selectedTheme : \"Tailwind3\";\n    var theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1))\n        .replace(/-dark/i, \"Dark\")\n        .replace(/light/i, \"Light\")\n        .replace(/contrast/i, \"Contrast\")\n        .replace(/-highContrast/i, \"HighContrast\");\n    if (args) {\n        args.chart.theme = theme;\n    }\n    return theme;\n};\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sankey/default/theme-color.ts?");

/***/ }),

/***/ "./Samples/sankey/default/App.vue":
/*!****************************************!*\
  !*** ./Samples/sankey/default/App.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_daae1dd2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=daae1dd2&scoped=true */ \"./Samples/sankey/default/App.vue?vue&type=template&id=daae1dd2&scoped=true\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./Samples/sankey/default/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _App_vue_vue_type_style_index_0_id_daae1dd2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=daae1dd2&scoped=true&lang=css */ \"./Samples/sankey/default/App.vue?vue&type=style&index=0&id=daae1dd2&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_daae1dd2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',\"data-v-daae1dd2\"],['__file',\"Samples/sankey/default/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sankey/default/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sankey/default/App.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sankey/default/App.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _theme_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-color */ \"./Samples/sankey/default/theme-color.ts\");\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: 'SankeyDefault',\n\n  components: {\n    'ejs-sankey': _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_0__.SankeyComponent,\n    'e-sankey-nodes': _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_0__.SankeyNodesCollectionDirective,\n    'e-sankey-node': _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_0__.SankeyNodeDirective,\n    'e-sankey-links': _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_0__.SankeyLinksCollectionDirective,\n    'e-sankey-link': _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_0__.SankeyLinkDirective\n  },\n\n  provide: {\n    sankey: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_0__.SankeyLegend, _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_0__.SankeyTooltip, _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_0__.SankeyExport]\n  },\n\n  data() {\n    return {\n      width: '90%',\n      height: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__.Browser.isDevice ? '600px' : '450px',\n\n      linkStyle: {\n        opacity: 0.6,\n        curvature: 0.55,\n        colorType: 'Source'\n      },\n\n      labelSettings: {\n        visible: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__.Browser.isDevice ? false : true\n      },\n\n      legendSettings: {\n        visible: true,\n        position: 'Bottom',\n        itemPadding: 8\n      },\n\n      tooltip: {\n        enable: true,\n        nodeTemplate: '${name}: ${value} TBtu',\n        linkTemplate: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__.Browser.isDevice ? \n        '${start.name}: ${start.out} TBtu → <br/> ${target.name}: ${target.in} TBtu' :\n        '${start.name}: ${start.out} TBtu → ${target.name}: ${target.in} TBtu'\n      }\n    }\n  },\n\n  methods: {\n    load(args) {\n      (0,_theme_color__WEBPACK_IMPORTED_MODULE_2__.loadSankeyChartTheme)(args)\n    }\n  }\n});\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sankey/default/App.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/sankey/default/App.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./Samples/sankey/default/App.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sankey/default/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sankey/default/App.vue?");

/***/ }),

/***/ "./Samples/sankey/default/App.vue?vue&type=template&id=daae1dd2&scoped=true":
/*!**********************************************************************************!*\
  !*** ./Samples/sankey/default/App.vue?vue&type=template&id=daae1dd2&scoped=true ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_daae1dd2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_daae1dd2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=daae1dd2&scoped=true */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sankey/default/App.vue?vue&type=template&id=daae1dd2&scoped=true\");\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sankey/default/App.vue?");

/***/ }),

/***/ "./Samples/sankey/default/App.vue?vue&type=style&index=0&id=daae1dd2&scoped=true&lang=css":
/*!************************************************************************************************!*\
  !*** ./Samples/sankey/default/App.vue?vue&type=style&index=0&id=daae1dd2&scoped=true&lang=css ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_daae1dd2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=style&index=0&id=daae1dd2&scoped=true&lang=css */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sankey/default/App.vue?vue&type=style&index=0&id=daae1dd2&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_daae1dd2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_daae1dd2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_daae1dd2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_daae1dd2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sankey/default/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sankey/default/App.vue?vue&type=template&id=daae1dd2&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sankey/default/App.vue?vue&type=template&id=daae1dd2&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _hoisted_1 = { class: \"control-pane\" }\nconst _hoisted_2 = { class: \"control-section\" }\nconst _hoisted_3 = { align: \"center\" }\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_e_sankey_node = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-sankey-node\")\n  const _component_e_sankey_nodes = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-sankey-nodes\")\n  const _component_e_sankey_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-sankey-link\")\n  const _component_e_sankey_links = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-sankey-links\")\n  const _component_ejs_sankey = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-sankey\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_sankey, {\n          id: \"sankey-container\",\n          ref: \"sankey\",\n          title: \"California Energy Consumption in 2023\",\n          subTitle: \"Source: Lawrence Livermore National Laboratory\",\n          width: $data.width,\n          height: $data.height,\n          background: \"transparent\",\n          linkStyle: $data.linkStyle,\n          labelSettings: $data.labelSettings,\n          legendSettings: $data.legendSettings,\n          tooltip: $data.tooltip,\n          load: $options.load\n        }, {\n          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_nodes, null, {\n              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_node, {\n                  id: \"Electricity Generation\",\n                  offset: -120\n                }),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_node, {\n                  id: \"Residential\",\n                  offset: 38\n                }),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_node, {\n                  id: \"Commercial\",\n                  offset: 36\n                }),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_node, {\n                  id: \"Industrial\",\n                  offset: 34\n                }),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_node, {\n                  id: \"Transportation\",\n                  offset: 32\n                }),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_node, {\n                  id: \"Rejected Energy\",\n                  offset: -40\n                }),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_node, { id: \"Energy Services\" }),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_node, { id: \"Solar\" }),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_node, { id: \"Nuclear\" }),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_node, { id: \"Wind\" }),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_node, { id: \"Geothermal\" }),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_node, { id: \"Natural Gas\" }),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_node, { id: \"Coal\" }),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_node, { id: \"Biomass\" }),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_node, {\n                  id: \"Petroleum\",\n                  offset: -10\n                })\n              ]),\n              _: 1 /* STABLE */\n            }),\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_links, null, {\n              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Electricity Generation sources \"),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_link, {\n                  \"source-id\": \"Solar\",\n                  \"target-id\": \"Electricity Generation\",\n                  value: 454\n                }),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_link, {\n                  \"source-id\": \"Nuclear\",\n                  \"target-id\": \"Electricity Generation\",\n                  value: 185\n                }),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_link, {\n                  \"source-id\": \"Wind\",\n                  \"target-id\": \"Electricity Generation\",\n                  value: 47.8\n                }),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_link, {\n                  \"source-id\": \"Geothermal\",\n                  \"target-id\": \"Electricity Generation\",\n                  value: 40\n                }),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_link, {\n                  \"source-id\": \"Natural Gas\",\n                  \"target-id\": \"Electricity Generation\",\n                  value: 800\n                }),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_link, {\n                  \"source-id\": \"Coal\",\n                  \"target-id\": \"Electricity Generation\",\n                  value: 28.7\n                }),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_link, {\n                  \"source-id\": \"Biomass\",\n                  \"target-id\": \"Electricity Generation\",\n                  value: 50\n                }),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Sector inflows \"),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_link, {\n                  \"source-id\": \"Electricity Generation\",\n                  \"target-id\": \"Residential\",\n                  value: 182\n                }),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_link, {\n                  \"source-id\": \"Natural Gas\",\n                  \"target-id\": \"Residential\",\n                  value: 400\n                }),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_link, {\n                  \"source-id\": \"Petroleum\",\n                  \"target-id\": \"Residential\",\n                  value: 50\n                }),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_link, {\n                  \"source-id\": \"Electricity Generation\",\n                  \"target-id\": \"Commercial\",\n                  value: 351\n                }),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_link, {\n                  \"source-id\": \"Natural Gas\",\n                  \"target-id\": \"Commercial\",\n                  value: 300\n                }),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_link, {\n                  \"source-id\": \"Electricity Generation\",\n                  \"target-id\": \"Industrial\",\n                  value: 641\n                }),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_link, {\n                  \"source-id\": \"Natural Gas\",\n                  \"target-id\": \"Industrial\",\n                  value: 786\n                }),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_link, {\n                  \"source-id\": \"Biomass\",\n                  \"target-id\": \"Industrial\",\n                  value: 563\n                }),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_link, {\n                  \"source-id\": \"Petroleum\",\n                  \"target-id\": \"Industrial\",\n                  value: 300\n                }),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_link, {\n                  \"source-id\": \"Electricity Generation\",\n                  \"target-id\": \"Transportation\",\n                  value: 20\n                }),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_link, {\n                  \"source-id\": \"Natural Gas\",\n                  \"target-id\": \"Transportation\",\n                  value: 51\n                }),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_link, {\n                  \"source-id\": \"Biomass\",\n                  \"target-id\": \"Transportation\",\n                  value: 71\n                }),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_link, {\n                  \"source-id\": \"Petroleum\",\n                  \"target-id\": \"Transportation\",\n                  value: 2486\n                }),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Rejected Energy \"),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_link, {\n                  \"source-id\": \"Residential\",\n                  \"target-id\": \"Rejected Energy\",\n                  value: 432\n                }),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_link, {\n                  \"source-id\": \"Commercial\",\n                  \"target-id\": \"Rejected Energy\",\n                  value: 351\n                }),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_link, {\n                  \"source-id\": \"Industrial\",\n                  \"target-id\": \"Rejected Energy\",\n                  value: 972\n                }),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_link, {\n                  \"source-id\": \"Transportation\",\n                  \"target-id\": \"Rejected Energy\",\n                  value: 1920\n                }),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Useful Energy Services \"),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_link, {\n                  \"source-id\": \"Residential\",\n                  \"target-id\": \"Energy Services\",\n                  value: 200\n                }),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_link, {\n                  \"source-id\": \"Commercial\",\n                  \"target-id\": \"Energy Services\",\n                  value: 300\n                }),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_link, {\n                  \"source-id\": \"Industrial\",\n                  \"target-id\": \"Energy Services\",\n                  value: 755\n                }),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_link, {\n                  \"source-id\": \"Transportation\",\n                  \"target-id\": \"Energy Services\",\n                  value: 637\n                })\n              ]),\n              _: 1 /* STABLE */\n            })\n          ]),\n          _: 1 /* STABLE */\n        }, 8 /* PROPS */, [\"width\", \"height\", \"linkStyle\", \"labelSettings\", \"legendSettings\", \"tooltip\", \"load\"])\n      ])\n    ]),\n    _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { id: \"action-description\" }, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \" Explore California’s 2023 energy consumption in TBtu (Trillion British Thermal Units) with an interactive Sankey chart based on Lawrence Livermore National Laboratory data. Follow energy flows from generation sources to Residential, Commercial, Industrial, and Transportation sectors, highlighting useful energy services versus rejected energy. \")\n    ], -1 /* HOISTED */)),\n    _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { id: \"description\" }, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \" This Sankey chart illustrates energy flow across sources, carriers, and usage sectors, with labeled nodes and interactive tooltips that reveal detailed link and value information. \"),\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"strong\", null, \"Key features:\")\n      ]),\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"ul\", null, [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, \"Configure nodes to represent energy sources and consumption sectors\"),\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, \"Define links to trace energy flow from generation through end use\"),\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, \"Enable tooltips for exploring individual flow values and relationships\"),\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, \"Hover over nodes or links for deeper insight into the energy distribution pattern\")\n      ])\n    ], -1 /* HOISTED */))\n  ]))\n}\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sankey/default/App.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sankey/default/App.vue?vue&type=style&index=0&id=daae1dd2&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sankey/default/App.vue?vue&type=style&index=0&id=daae1dd2&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=style&index=0&id=daae1dd2&scoped=true&lang=css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sankey/default/App.vue?vue&type=style&index=0&id=daae1dd2&scoped=true&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"002da59b\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sankey/default/App.vue?./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

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
/******/ 			"sankey/default/main": 0
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkej2_charts_vue_samples"] = self["webpackChunkej2_charts_vue_samples"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/sankey/default/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;