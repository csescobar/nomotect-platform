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

/***/ "./Samples/diagram/neural-network/main.js":
/*!************************************************!*\
  !*** ./Samples/diagram/neural-network/main.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/diagram/neural-network/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-diagrams-vue-samples/./Samples/diagram/neural-network/main.js?");

/***/ }),

/***/ "./Samples/diagram/neural-network/App.vue":
/*!************************************************!*\
  !*** ./Samples/diagram/neural-network/App.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_1fdbc042__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=1fdbc042 */ \"./Samples/diagram/neural-network/App.vue?vue&type=template&id=1fdbc042\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./Samples/diagram/neural-network/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_1fdbc042__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/diagram/neural-network/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-diagrams-vue-samples/./Samples/diagram/neural-network/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/neural-network/App.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/neural-network/App.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-vue-diagrams */ \"./node_modules/@syncfusion/ej2-vue-diagrams/index.js\");\n\n\n\n\n// --- Neural net diagram utility functions ---\n\nconst layerSizes = [3, 5, 4, 2];\nconst layerNames = [\n  \"Input Layer\",\n  \"Hidden Layer 1\",\n  \"Hidden Layer 2\",\n  \"Output Layer\",\n];\nconst layerColors = [\"#0087EA\", \"#FE871F\", \"#7925E5\", \"#04AE45\"];\nconst strokeColors = layerColors;\nconst nodeLabels = [\n  [\"Feature 1\", \"Feature 2\", \"Feature 3\"],\n  [\"H1-1\", \"H1-2\", \"H1-3\", \"H1-4\", \"H1-5\"],\n  [\"H2-1\", \"H2-2\", \"H2-3\", \"H2-4\"],\n  [\"Output 1\", \"Output 2\"],\n];\n\n// Utility for connection styling based on weight\nfunction getConnectionColor(weight) {\n  return weight >= 0 ? \"#2196f3\" : \"#f44336\";\n}\nfunction getConnectionWidth(absWeight) {\n  return Math.max(1, Math.min(3, absWeight * 3));\n}\n\n// Returns array of label panel nodes\nfunction makeLayerLabelNode(i) {\n  var color = layerColors[i];\n  return {\n    id: \"label_\" + i,\n    offsetX: 100 + i * 250,\n    offsetY: 50,\n    width: 150,\n    height: 40,\n    style: { fill: \"transparent\", strokeColor: \"transparent\" },\n    annotations: [\n      {\n        template:\n          `<div style=\"display:flex;align-items:center;justify-content:center;width:100%;height:100%;\">` +\n          `<div style=\"width:12px;height:12px;border-radius:6px;background:${color};margin-right:10px;\"></div>` +\n          `<span style=\"font-weight:bold;font-size:14px;color:#495057;\">${layerNames[i]}</span>` +\n          `</div>`,\n      },\n    ],\n    constraints: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.NodeConstraints.Default & ~_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.NodeConstraints.Select,\n  };\n}\n\n// Returns a single neuron node (ellipse)\nfunction makeNeuronNode(l, n) {\n  var layerName = layerNames[l];\n  var nodeLabel = nodeLabels[l][n];\n  return {\n    id: \"neuron_\" + l + \"_\" + n,\n    width: 70,\n    height: 70,\n    offsetX: 100 + l * 250,\n    offsetY: 120 + ((5 - layerSizes[l]) * 100) / 2 + n * 100,\n    style: { fill: layerColors[l], strokeColor: strokeColors[l], strokeWidth: 2 },\n    shape: { type: \"Basic\", shape: \"Ellipse\" },\n    annotations: [\n      {\n        content: nodeLabel,\n        style: { fontSize: 12, color: \"white\", bold: true },\n      },\n    ],\n    tooltip: {\n      content:\n        `<div style=\"padding:8px 12px; border-radius:6px; font-family:'Segoe UI',sans-serif; min-width:160px;\">\n          <div style=\"font-weight:bold;font-size:13px;margin-bottom:4px;\">\n            🧠 Neuron Information\n          </div>\n          <hr style=\"margin:2px 0 5px 0;\"/>\n          <div style=\"font-size:13px;margin-bottom:2px;\">\n            <span style=\"font-weight:bold;\">Layer:</span>\n            <span>${layerName}</span>\n          </div>\n          <div style=\"font-size:13px;\">\n            <span style=\"font-weight:bold;\">Neuron:</span>\n            <span>${nodeLabel}</span>\n          </div>\n        </div>`,\n      position: \"TopCenter\",\n    },\n    constraints: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.NodeConstraints.Default | _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.NodeConstraints.Tooltip,\n  };\n}\n\n// Returns a single connector with tooltip\nfunction makeConnector(l, n, m, weight) {\n  var absWeight = Math.abs(weight);\n  var weightColor = weight >= 0 ? \"#2ecc71\" : \"#e74c3c\";\n  var src = \"neuron_\" + l + \"_\" + n;\n  var tgt = \"neuron_\" + (l + 1) + \"_\" + m;\n  return {\n    id: \"conn_\" + l + \"_\" + n + \"_\" + m,\n    sourceID: src,\n    targetID: tgt,\n    type: \"Straight\",\n    style: {\n      strokeColor: getConnectionColor(weight),\n      strokeWidth: getConnectionWidth(absWeight),\n      opacity: 0.7,\n    },\n    targetDecorator: {\n      shape: \"Arrow\",\n      style: {\n        fill: getConnectionColor(weight),\n        strokeColor: getConnectionColor(weight),\n      },\n    },\n    annotations: [\n      {\n        content: String(weight),\n        style: { fontSize: 13, color: \"#495057\", fill: \"white\" },\n      },\n    ],\n    tooltip: {\n      content:\n        `<div style=\"padding:8px 12px; border-radius:6px; font-family:'Segoe UI',sans-serif; min-width:160px;\">\n          <div style=\"font-weight:bold;font-size:13px;margin-bottom:4px;\">\n            🔗 Connection Details\n          </div>\n          <hr style=\"margin:2px 0 5px 0;\"/>\n          <div style=\"font-size:13px;margin-bottom:2px;\">\n            <span style=\"font-weight:bold;\">Weight:</span>\n            <span style=\"color:${weightColor};font-weight:bold;\">${weight}</span>\n          </div>\n          <div style=\"font-size:13px;margin-bottom:1px;\">\n            <span style=\"font-weight:bold;\">From:</span>\n            <span>${src}</span>\n          </div>\n          <div style=\"font-size:13px;\">\n            <span style=\"font-weight:bold;\">To:</span>\n            <span>${tgt}</span>\n          </div>\n        </div>`,\n      position: \"TopCenter\",\n    },\n    constraints: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.ConnectorConstraints.Default | _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.ConnectorConstraints.Tooltip,\n  };\n}\n\n// Deterministic random for demo weights\nfunction seededRandom() {\n  let s = 42;\n  return function () {\n    s = Math.sin(s) * 10000;\n    return s - Math.floor(s);\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  components: {\n    \"ejs-diagram\": _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.DiagramComponent,\n  },\n  data: function () {\n    // Build neural net node and connector arrays\n    let nodes = [];\n    let connectors = [];\n\n    // Layer labels\n    for (let i = 0; i < layerNames.length; i++) nodes.push(makeLayerLabelNode(i));\n    // Neurons\n    for (let l = 0; l < layerSizes.length; l++)\n      for (let n = 0; n < layerSizes[l]; n++) nodes.push(makeNeuronNode(l, n));\n\n    // Reproducible weights\n    let random = seededRandom();\n    for (let l = 0; l < layerSizes.length - 1; l++) {\n      for (let n = 0; n < layerSizes[l]; n++) {\n        for (let m = 0; m < layerSizes[l + 1]; m++) {\n          let weight = Math.round((random() * 2 - 1) * 100) / 100;\n          connectors.push(makeConnector(l, n, m, weight));\n        }\n      }\n    }\n\n    return {\n      width: \"100%\",\n      height: 590,\n      nodes: nodes,\n      connectors: connectors,\n      snapSettings: { constraints: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SnapConstraints.None },\n      tool: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.DiagramTools.ZoomPan,\n      diagramCreated: false,\n    };\n  },\n  methods:{\n    created() {\n      this.diagramCreated = true;\n    },\n    load() {\n      if (this.diagramCreated) {\n        let diagram = this.$refs.diagramObject.ej2Instances;\n        diagram.fitToPage();\n      }\n    },\n  },\n  mounted () {\n    // Diagram fit-to-page on mount\n    this.$nextTick(() => {\n        let diagram = this.$refs.diagramObject.ej2Instances;\n        diagram.fitToPage();\n    });\n  },\n});\n\n\n//# sourceURL=webpack://ej2-diagrams-vue-samples/./Samples/diagram/neural-network/App.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/diagram/neural-network/App.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./Samples/diagram/neural-network/App.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/neural-network/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2-diagrams-vue-samples/./Samples/diagram/neural-network/App.vue?");

/***/ }),

/***/ "./Samples/diagram/neural-network/App.vue?vue&type=template&id=1fdbc042":
/*!******************************************************************************!*\
  !*** ./Samples/diagram/neural-network/App.vue?vue&type=template&id=1fdbc042 ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_1fdbc042__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_1fdbc042__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=1fdbc042 */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/neural-network/App.vue?vue&type=template&id=1fdbc042\");\n\n\n//# sourceURL=webpack://ej2-diagrams-vue-samples/./Samples/diagram/neural-network/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/neural-network/App.vue?vue&type=template&id=1fdbc042":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/neural-network/App.vue?vue&type=template&id=1fdbc042 ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _hoisted_1 = { class: \"col-lg-12 control-section\" }\nconst _hoisted_2 = {\n  id: \"wrapper-diagram\",\n  style: {\"width\":\"100%\"}\n}\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_ejs_diagram = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-diagram\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_diagram, {\n        ref: \"diagramObject\",\n        id: \"diagram\",\n        width: _ctx.width,\n        height: _ctx.height,\n        nodes: _ctx.nodes,\n        connectors: _ctx.connectors,\n        snapSettings: _ctx.snapSettings,\n        tool: _ctx.tool,\n        load: $options.load,\n        created: $options.created\n      }, null, 8 /* PROPS */, [\"width\", \"height\", \"nodes\", \"connectors\", \"snapSettings\", \"tool\", \"load\", \"created\"])\n    ]),\n    _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { id: \"action-description\" }, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" This sample provides an interactive visualization of a neural network architecture using the \"),\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"a\", {\n          href: \"https://www.syncfusion.com/vue-components/vue-diagram\",\n          target: \"_blank\"\n        }, \"Vue Diagram\"),\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" component. It displays multi-layered networks with configurable neurons, connections, and data flow patterns. \")\n      ])\n    ], -1 /* HOISTED */)),\n    _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { id: \"description\" }, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \" This multi-layered neural network visualizer allows users to explore input, hidden, and output layers with configurable neurons. Connections clearly display weight values—positive in blue, negative in red—with thickness indicating magnitude. Interactive tooltip provide detailed information. \")\n    ], -1 /* HOISTED */))\n  ]))\n}\n\n//# sourceURL=webpack://ej2-diagrams-vue-samples/./Samples/diagram/neural-network/App.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

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
/******/ 			"diagram/neural-network/main": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/diagram/neural-network/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;