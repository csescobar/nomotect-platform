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

/***/ "./Samples/sankey/orientation/main.js":
/*!********************************************!*\
  !*** ./Samples/sankey/orientation/main.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/sankey/orientation/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sankey/orientation/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sankey/orientation/App.vue?vue&type=style&index=0&id=1a6ccba6&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sankey/orientation/App.vue?vue&type=style&index=0&id=1a6ccba6&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.id, \"\\n#sankey-orientation[data-v-1a6ccba6] {\\n  display: block;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"App.vue\"],\"names\":[],\"mappings\":\";AACA;EACE,cAAc;AAChB\",\"file\":\"App.vue\",\"sourcesContent\":[\"\\n#sankey-orientation[data-v-1a6ccba6] {\\n  display: block;\\n}\\n\"]}]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sankey/orientation/App.vue?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/sankey/orientation/theme-color.ts":
/*!***************************************************!*\
  !*** ./Samples/sankey/orientation/theme-color.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadSankeyChartTheme: () => (/* binding */ loadSankeyChartTheme)\n/* harmony export */ });\nvar loadSankeyChartTheme = function (args) {\n    var selectedTheme = location.hash.split(\"/\")[1];\n    selectedTheme = selectedTheme ? selectedTheme : \"Tailwind3\";\n    var theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1))\n        .replace(/-dark/i, \"Dark\")\n        .replace(/light/i, \"Light\")\n        .replace(/contrast/i, \"Contrast\")\n        .replace(/-highContrast/i, \"HighContrast\");\n    if (args) {\n        args.chart.theme = theme;\n    }\n    return theme;\n};\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sankey/orientation/theme-color.ts?");

/***/ }),

/***/ "./Samples/sankey/orientation/App.vue":
/*!********************************************!*\
  !*** ./Samples/sankey/orientation/App.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_1a6ccba6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=1a6ccba6&scoped=true */ \"./Samples/sankey/orientation/App.vue?vue&type=template&id=1a6ccba6&scoped=true\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./Samples/sankey/orientation/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _App_vue_vue_type_style_index_0_id_1a6ccba6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=1a6ccba6&scoped=true&lang=css */ \"./Samples/sankey/orientation/App.vue?vue&type=style&index=0&id=1a6ccba6&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_1a6ccba6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',\"data-v-1a6ccba6\"],['__file',\"Samples/sankey/orientation/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sankey/orientation/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sankey/orientation/App.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sankey/orientation/App.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _theme_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-color */ \"./Samples/sankey/orientation/theme-color.ts\");\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: 'SankeyOrientation',\n\n  components: {\n    'ejs-sankey': _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_0__.SankeyComponent,\n    'e-sankey-nodes': _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_0__.SankeyNodesCollectionDirective,\n    'e-sankey-node': _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_0__.SankeyNodeDirective,\n    'e-sankey-links': _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_0__.SankeyLinksCollectionDirective,\n    'e-sankey-link': _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_0__.SankeyLinkDirective\n  },\n\n  provide: {\n    sankey: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_0__.SankeyLegend, _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_0__.SankeyTooltip, _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_0__.SankeyExport]\n  },\n\n  data() {\n    return {\n      title: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__.Browser.isDevice\n        ? 'U.S. GHG Emissions'\n        : 'U.S. Greenhouse Gas Emissions by Economic Sector (2022)',\n\n      orientation: 'Vertical',\n\n      width: '90%',\n\n      height: '650px',\n\n      linkStyle: {\n        opacity: 0.5,\n        curvature: 0.55,\n        colorType: 'Source'\n      },\n\n      nodeStyle: {\n        width: 30,\n        padding: 8,\n        opacity: 1\n      },\n\n      labelSettings: {\n        visible: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__.Browser.isDevice ? false : true\n      },\n\n      legendSettings: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__.Browser.isDevice\n        ? { visible: false }\n        : { visible: true, position: 'Right', margin: { left: 100 } },\n\n      tooltip: {\n        enable: true,\n        nodeTemplate: '${name}: ${value} MMT CO₂e',\n        linkTemplate: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__.Browser.isDevice ? \n        '${start.name}: ${start.out} MMT CO₂e → <br/> ${target.name}: ${target.in} MMT CO₂e' : \n        '${start.name}: ${start.out} MMT CO₂e → ${target.name}: ${target.in} MMT CO₂e'\n      }\n    }\n  },\n\n  methods: {\n    load(args) {\n      (0,_theme_color__WEBPACK_IMPORTED_MODULE_2__.loadSankeyChartTheme)(args)\n    }\n  }\n});\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sankey/orientation/App.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/sankey/orientation/App.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./Samples/sankey/orientation/App.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sankey/orientation/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sankey/orientation/App.vue?");

/***/ }),

/***/ "./Samples/sankey/orientation/App.vue?vue&type=template&id=1a6ccba6&scoped=true":
/*!**************************************************************************************!*\
  !*** ./Samples/sankey/orientation/App.vue?vue&type=template&id=1a6ccba6&scoped=true ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_1a6ccba6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_1a6ccba6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=1a6ccba6&scoped=true */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sankey/orientation/App.vue?vue&type=template&id=1a6ccba6&scoped=true\");\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sankey/orientation/App.vue?");

/***/ }),

/***/ "./Samples/sankey/orientation/App.vue?vue&type=style&index=0&id=1a6ccba6&scoped=true&lang=css":
/*!****************************************************************************************************!*\
  !*** ./Samples/sankey/orientation/App.vue?vue&type=style&index=0&id=1a6ccba6&scoped=true&lang=css ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_1a6ccba6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=style&index=0&id=1a6ccba6&scoped=true&lang=css */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sankey/orientation/App.vue?vue&type=style&index=0&id=1a6ccba6&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_1a6ccba6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_1a6ccba6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_1a6ccba6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_1a6ccba6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sankey/orientation/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sankey/orientation/App.vue?vue&type=template&id=1a6ccba6&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sankey/orientation/App.vue?vue&type=template&id=1a6ccba6&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _hoisted_1 = { class: \"control-section\" }\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_e_sankey_node = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-sankey-node\")\n  const _component_e_sankey_nodes = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-sankey-nodes\")\n  const _component_e_sankey_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-sankey-link\")\n  const _component_e_sankey_links = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-sankey-links\")\n  const _component_ejs_sankey = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-sankey\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_sankey, {\n        id: \"sankey-orientation\",\n        ref: \"sankey\",\n        align: \"center\",\n        title: $data.title,\n        subTitle: \"Source: EPA 2022 GHG Inventory\",\n        orientation: \"Vertical\",\n        width: $data.width,\n        height: $data.height,\n        background: \"transparent\",\n        linkStyle: $data.linkStyle,\n        nodeStyle: $data.nodeStyle,\n        labelSettings: $data.labelSettings,\n        legendSettings: $data.legendSettings,\n        tooltip: $data.tooltip,\n        load: $options.load\n      }, {\n        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_nodes, null, {\n            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Major sectors \"),\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_node, { id: \"Transportation\" }),\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_node, { id: \"Industry\" }),\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_node, { id: \"Commercial\" }),\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_node, { id: \"Residential\" }),\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_node, { id: \"Agriculture\" }),\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Sub-paths \"),\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_node, { id: \"Road (Cars/Trucks)\" }),\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_node, { id: \"Aviation & Other Transport\" }),\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_node, { id: \"Direct Emissions\" }),\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_node, { id: \"Indirect Electricity Use\" }),\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Final sink \"),\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_node, { id: \"Atmosphere (Gross Emissions)\" })\n            ]),\n            _: 1 /* STABLE */\n          }),\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_links, null, {\n            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Sector → Sub-paths \"),\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_link, {\n                \"source-id\": \"Transportation\",\n                \"target-id\": \"Road (Cars/Trucks)\",\n                value: 1482\n              }),\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_link, {\n                \"source-id\": \"Transportation\",\n                \"target-id\": \"Aviation & Other Transport\",\n                value: 326\n              }),\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_link, {\n                \"source-id\": \"Industry\",\n                \"target-id\": \"Direct Emissions\",\n                value: 1416\n              }),\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_link, {\n                \"source-id\": \"Industry\",\n                \"target-id\": \"Indirect Electricity Use\",\n                value: 457\n              }),\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_link, {\n                \"source-id\": \"Commercial\",\n                \"target-id\": \"Indirect Electricity Use\",\n                value: 600\n              }),\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_link, {\n                \"source-id\": \"Residential\",\n                \"target-id\": \"Indirect Electricity Use\",\n                value: 500\n              }),\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_link, {\n                \"source-id\": \"Agriculture\",\n                \"target-id\": \"Direct Emissions\",\n                value: 664\n              }),\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" All paths → Final emissions \"),\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_link, {\n                \"source-id\": \"Road (Cars/Trucks)\",\n                \"target-id\": \"Atmosphere (Gross Emissions)\",\n                value: 1482\n              }),\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_link, {\n                \"source-id\": \"Aviation & Other Transport\",\n                \"target-id\": \"Atmosphere (Gross Emissions)\",\n                value: 326\n              }),\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_link, {\n                \"source-id\": \"Direct Emissions\",\n                \"target-id\": \"Atmosphere (Gross Emissions)\",\n                value: 2080\n              }),\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_sankey_link, {\n                \"source-id\": \"Indirect Electricity Use\",\n                \"target-id\": \"Atmosphere (Gross Emissions)\",\n                value: 1557\n              })\n            ]),\n            _: 1 /* STABLE */\n          })\n        ]),\n        _: 1 /* STABLE */\n      }, 8 /* PROPS */, [\"title\", \"width\", \"height\", \"linkStyle\", \"nodeStyle\", \"labelSettings\", \"legendSettings\", \"tooltip\", \"load\"])\n    ]),\n    _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { id: \"action-description\" }, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \" Explore U.S. greenhouse gas emissions by economic sector (2022) in a vertical Sankey chart measured in MMT CO₂e (million metric tons of CO₂ equivalent). Trace top‑to‑bottom flows from sectors—Transportation, Industry, Commercial, Residential, and Agriculture—through direct and indirect electricity use to total atmospheric emissions. \")\n    ], -1 /* HOISTED */)),\n    _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { id: \"description\" }, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \" This vertical Sankey chart visualizes U.S. GHG emissions in MMT CO₂e, showing how sector sources split into road, aviation, direct emissions, and indirect electricity use before reaching total atmospheric emissions. Hover or tap nodes and links to see precise MMT CO₂e values and relationships. \"),\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"strong\", null, \"Key features:\")\n      ]),\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"ul\", null, [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, \"Break down emissions by sector and pathway (direct vs. indirect electricity)\"),\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, \"Follow top‑to‑bottom flows to the atmosphere for clear attribution\"),\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, \"Interactive tooltips reveal exact MMT CO₂e values per node and link\")\n      ])\n    ], -1 /* HOISTED */))\n  ]))\n}\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sankey/orientation/App.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sankey/orientation/App.vue?vue&type=style&index=0&id=1a6ccba6&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sankey/orientation/App.vue?vue&type=style&index=0&id=1a6ccba6&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=style&index=0&id=1a6ccba6&scoped=true&lang=css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/sankey/orientation/App.vue?vue&type=style&index=0&id=1a6ccba6&scoped=true&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"37f0ae79\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/sankey/orientation/App.vue?./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

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
/******/ 			"sankey/orientation/main": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/sankey/orientation/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;