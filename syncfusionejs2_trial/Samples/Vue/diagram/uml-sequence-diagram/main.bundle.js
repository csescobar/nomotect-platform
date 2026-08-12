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

/***/ "./Samples/diagram/uml-sequence-diagram/main.js":
/*!******************************************************!*\
  !*** ./Samples/diagram/uml-sequence-diagram/main.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/diagram/uml-sequence-diagram/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-diagrams-vue-samples/./Samples/diagram/uml-sequence-diagram/main.js?");

/***/ }),

/***/ "./Samples/diagram/uml-sequence-diagram/App.vue":
/*!******************************************************!*\
  !*** ./Samples/diagram/uml-sequence-diagram/App.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_0024867c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=0024867c */ \"./Samples/diagram/uml-sequence-diagram/App.vue?vue&type=template&id=0024867c\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./Samples/diagram/uml-sequence-diagram/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_0024867c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/diagram/uml-sequence-diagram/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-diagrams-vue-samples/./Samples/diagram/uml-sequence-diagram/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/uml-sequence-diagram/App.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/uml-sequence-diagram/App.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-vue-diagrams */ \"./node_modules/@syncfusion/ej2-vue-diagrams/index.js\");\n\n\n\n// Define the sequence diagram model with participants, messages, and fragments\n    let sequenceModel = {\n        // Space between each participant in the diagram\n        spaceBetweenParticipants: 250,\n        // List of participants in the sequence diagram\n        participants: [\n            {\n                id: \"User\",\n                content: \"User\",\n                // Indicates that User is an actor\n                stereotype: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.UmlSequenceParticipantStereotype.Actor\n            },\n            {\n                id: \"Transaction\",\n                content: \"Transaction\",\n                // Activation periods for the Transaction participant\n                stereotype: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.UmlSequenceParticipantStereotype.Control,\n                activationBoxes: [\n                    { id: \"act1\", startMessageID: 'msg1', endMessageID: 'msg4' }\n                ]\n            },\n            {\n                id: \"FraudDetectionSystem\",\n                content: \"Fraud Detection System\",\n                // Activation periods for the Fraud Detection System participant\n                stereotype: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.UmlSequenceParticipantStereotype.Entity,\n                activationBoxes: [\n                    { id: \"act2\", startMessageID: 'msg2', endMessageID: 'msg3' },\n                    { id: \"act3\", startMessageID: 'msg5', endMessageID: 'msg6' }\n                ]\n            }\n        ],\n        // List of messages exchanged between participants\n        messages: [\n            { id: 'msg1', content: \"Initiate Transaction\", fromParticipantID: \"User\", toParticipantID: \"Transaction\", type: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.UmlSequenceMessageType.Synchronous },\n            { id: 'msg2', content: \"Send Transaction Data\", fromParticipantID: \"Transaction\", toParticipantID: \"FraudDetectionSystem\", type: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.UmlSequenceMessageType.Synchronous },\n            { id: 'msg3', content: \"Validate Transaction\", fromParticipantID: \"FraudDetectionSystem\", toParticipantID: \"Transaction\", type: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.UmlSequenceMessageType.Reply },\n            { id: 'msg4', content: \"Transaction Approved\", fromParticipantID: \"Transaction\", toParticipantID: \"User\", type: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.UmlSequenceMessageType.Asynchronous },\n            { id: 'msg5', content: \"Flag Transaction\", fromParticipantID: \"Transaction\", toParticipantID: \"FraudDetectionSystem\", type: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.UmlSequenceMessageType.Synchronous },\n            { id: 'msg6', content: \"Fraud Detected\", fromParticipantID: \"FraudDetectionSystem\", toParticipantID: \"User\", type: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.UmlSequenceMessageType.Reply },\n            { id: 'msg7', content: \"Cancel Transaction\", fromParticipantID: \"User\", toParticipantID: \"Transaction\", type: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.UmlSequenceMessageType.Synchronous },\n            { id: 'msg8', content: \"Complete Transaction\", fromParticipantID: \"User\", toParticipantID: \"Transaction\", type: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.UmlSequenceMessageType.Synchronous }\n        ],\n        // Conditional fragments within the sequence\n        fragments: [\n            {\n                id: 1,\n                // Represents alternative fragment\n                type: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.UmlSequenceFragmentType.Alternative,\n                conditions: [\n                    // Condition when fraud is detected\n                    {\n                        // Content of condition\n                        content: \"Fraud Detected\",\n                        // Messages part of this condition\n                        messageIds: ['msg5', 'msg6', 'msg7']\n                    },\n                    {\n                        content: \"No Fraud Detected\",\n                        messageIds: ['msg8']\n                    }\n                ]\n            }\n        ]\n    };\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  components: {\n    'ejs-diagram': _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.DiagramComponent\n  },\n  data: function() {\n    return {\n      width: \"100%\",\n      height: \"800px\",\n      model: sequenceModel,\n      tool: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.DiagramTools.ZoomPan,\n      snapSettings: {\n                constraints: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SnapConstraints.None\n            },\n      getNodeDefaults: (node) => {\n        // activation node\n        if (node.data instanceof _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.UmlSequenceActivationBox) {\n            node.style = { fill: 'orange', strokeColor: 'orange' };\n        }\n      },\n      //Sets the default values of a connector\n      getConnectorDefaults: (connector) => {\n       var message = sequenceModel.messages.find(function(message) {\n            return message.id === connector.id;\n        });\n        // Style the connector if it corresponds to a message\n        if (message) {\n            connector.targetDecorator.style = { fill: '#489ECC', strokeColor: '#489ECC' };\n        connector.style = {strokeColor:'#489ECC',strokeWidth:2};\n        }\n        return connector;\n      },\n    }\n  },\n  mounted: function() {\n       let diagram = this.$refs.diagramObj.ej2Instances;\n        diagram.fitToPage();\n  }\n});\n\n\n\n//# sourceURL=webpack://ej2-diagrams-vue-samples/./Samples/diagram/uml-sequence-diagram/App.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/diagram/uml-sequence-diagram/App.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./Samples/diagram/uml-sequence-diagram/App.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/uml-sequence-diagram/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2-diagrams-vue-samples/./Samples/diagram/uml-sequence-diagram/App.vue?");

/***/ }),

/***/ "./Samples/diagram/uml-sequence-diagram/App.vue?vue&type=template&id=0024867c":
/*!************************************************************************************!*\
  !*** ./Samples/diagram/uml-sequence-diagram/App.vue?vue&type=template&id=0024867c ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_0024867c__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_0024867c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=0024867c */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/uml-sequence-diagram/App.vue?vue&type=template&id=0024867c\");\n\n\n//# sourceURL=webpack://ej2-diagrams-vue-samples/./Samples/diagram/uml-sequence-diagram/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/uml-sequence-diagram/App.vue?vue&type=template&id=0024867c":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/uml-sequence-diagram/App.vue?vue&type=template&id=0024867c ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _hoisted_1 = { class: \"control-section\" }\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_ejs_diagram = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-diagram\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_diagram, {\n        id: \"diagram\",\n        ref: \"diagramObj\",\n        width: _ctx.width,\n        height: _ctx.height,\n        model: _ctx.model,\n        tool: _ctx.tool,\n        snapSettings: _ctx.snapSettings,\n        getNodeDefaults: _ctx.getNodeDefaults,\n        getConnectorDefaults: _ctx.getConnectorDefaults\n      }, null, 8 /* PROPS */, [\"width\", \"height\", \"model\", \"tool\", \"snapSettings\", \"getNodeDefaults\", \"getConnectorDefaults\"])\n    ]),\n    _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div id=\\\"action-description\\\"><p> This sample presents a UML sequence diagram created with the <a href=\\\"https://www.syncfusion.com/vue-components/vue-diagram\\\" target=\\\"_blank\\\">Vue Diagram</a> to visualize interactions in a secure transaction process involving a user, transaction system, and fraud detection system. </p></div><div id=\\\"description\\\"><p>This sample demonstrates how to build a UML sequence diagram using the diagram&#39;s <code>model</code> property. The <code>UmlSequenceDiagramModel</code> type provides a structured approach to defining key elements such as participants, messages, activation boxes, and interaction fragments. The diagram highlights interactions between key participants such as the User, Transaction and Fraud Detection System. Each participant is represented using <code>stereotype</code> such as <strong>Actor</strong>, <strong>Control</strong> and <strong>Entity</strong> to clearly convey its role within the system.</p><br></div>\", 2))\n  ]))\n}\n\n//# sourceURL=webpack://ej2-diagrams-vue-samples/./Samples/diagram/uml-sequence-diagram/App.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

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
/******/ 			"diagram/uml-sequence-diagram/main": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/diagram/uml-sequence-diagram/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;