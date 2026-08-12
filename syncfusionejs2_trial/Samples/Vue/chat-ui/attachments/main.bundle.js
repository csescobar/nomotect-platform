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

/***/ "./Samples/chat-ui/attachments/main.js":
/*!*********************************************!*\
  !*** ./Samples/chat-ui/attachments/main.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/chat-ui/attachments/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-interactive-chat-vue-samples/./Samples/chat-ui/attachments/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chat-ui/attachments/App.vue?vue&type=style&index=0&id=d617fc10&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chat-ui/attachments/App.vue?vue&type=style&index=0&id=d617fc10&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./images/paul_wilson.png */ \"./Samples/chat-ui/attachments/images/paul_wilson.png\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\n// Module\nexports.push([module.id, \"\\n.attachment-chatui {\\n        height: 500px;\\n        width: 40%;\\n        margin: 0 auto;\\n        display: flex;\\n        flex-direction: row;\\n        gap: 50px;\\n}\\n.attachment-chatui .chat_user_avatar {\\n        background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n        background-color: unset;\\n}\\n.attachment-chatui .emptyChatText {\\n        font-size: 16px;\\n        font-style: italic;\\n}\\n.attachment-chatui .emptychat-content {\\n        display: flex;\\n        flex-direction: column;\\n        justify-content: center;\\n        text-align: center;\\n        align-items: center;\\n        padding: 10px;\\n}\\n.attachment-chatui .chat-text-content {\\n        display: flex;\\n        align-items: center;\\n}\\n.attachment-chatui .emptyChatText {\\n        font-size: 14px;\\n        font-weight: 500;\\n        margin-left: 10px;\\n}\\n.attachment-chatui .emptyChatMessage {\\n        font-size: 14px;\\n        text-align: center;\\n}\\n@media only screen and (max-width: 850px) {\\n.attachment-chatui {\\n            flex-direction: column;\\n            height: 500px;\\n            width: 70%;\\n}\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"App.vue\"],\"names\":[],\"mappings\":\";AACA;QACQ,aAAa;QACb,UAAU;QACV,cAAc;QACd,aAAa;QACb,mBAAmB;QACnB,SAAS;AACjB;AACA;QACQ,yDAAiD;QACjD,uBAAuB;AAC/B;AACA;QACQ,eAAe;QACf,kBAAkB;AAC1B;AACA;QACQ,aAAa;QACb,sBAAsB;QACtB,uBAAuB;QACvB,kBAAkB;QAClB,mBAAmB;QACnB,aAAa;AACrB;AACA;QACQ,aAAa;QACb,mBAAmB;AAC3B;AACA;QACQ,eAAe;QACf,gBAAgB;QAChB,iBAAiB;AACzB;AACA;QACQ,eAAe;QACf,kBAAkB;AAC1B;AACA;AACA;YACY,sBAAsB;YACtB,aAAa;YACb,UAAU;AACtB;AACA\",\"file\":\"App.vue\",\"sourcesContent\":[\"\\n.attachment-chatui {\\n        height: 500px;\\n        width: 40%;\\n        margin: 0 auto;\\n        display: flex;\\n        flex-direction: row;\\n        gap: 50px;\\n}\\n.attachment-chatui .chat_user_avatar {\\n        background-image: url('./images/paul_wilson.png');\\n        background-color: unset;\\n}\\n.attachment-chatui .emptyChatText {\\n        font-size: 16px;\\n        font-style: italic;\\n}\\n.attachment-chatui .emptychat-content {\\n        display: flex;\\n        flex-direction: column;\\n        justify-content: center;\\n        text-align: center;\\n        align-items: center;\\n        padding: 10px;\\n}\\n.attachment-chatui .chat-text-content {\\n        display: flex;\\n        align-items: center;\\n}\\n.attachment-chatui .emptyChatText {\\n        font-size: 14px;\\n        font-weight: 500;\\n        margin-left: 10px;\\n}\\n.attachment-chatui .emptyChatMessage {\\n        font-size: 14px;\\n        text-align: center;\\n}\\n@media only screen and (max-width: 850px) {\\n.attachment-chatui {\\n            flex-direction: column;\\n            height: 500px;\\n            width: 70%;\\n}\\n}\\n\"]}]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://ej2-interactive-chat-vue-samples/./Samples/chat-ui/attachments/App.vue?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/chat-ui/attachments/images/paul_wilson.png":
/*!************************************************************!*\
  !*** ./Samples/chat-ui/attachments/images/paul_wilson.png ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"./../../source/chat-ui/images/paul_wilson.png\");\n\n//# sourceURL=webpack://ej2-interactive-chat-vue-samples/./Samples/chat-ui/attachments/images/paul_wilson.png?");

/***/ }),

/***/ "./Samples/chat-ui/attachments/App.vue":
/*!*********************************************!*\
  !*** ./Samples/chat-ui/attachments/App.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_d617fc10__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=d617fc10 */ \"./Samples/chat-ui/attachments/App.vue?vue&type=template&id=d617fc10\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./Samples/chat-ui/attachments/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _App_vue_vue_type_style_index_0_id_d617fc10_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=d617fc10&lang=css */ \"./Samples/chat-ui/attachments/App.vue?vue&type=style&index=0&id=d617fc10&lang=css\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_d617fc10__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/chat-ui/attachments/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-interactive-chat-vue-samples/./Samples/chat-ui/attachments/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chat-ui/attachments/App.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chat-ui/attachments/App.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _syncfusion_ej2_vue_interactive_chat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-vue-interactive-chat */ \"./node_modules/@syncfusion/ej2-vue-interactive-chat/index.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    components: {\n        'ejs-chatui': _syncfusion_ej2_vue_interactive_chat__WEBPACK_IMPORTED_MODULE_0__.ChatUIComponent\n    },\n    setup() {\n        const chatRef = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null);\n        const messages = (0,vue__WEBPACK_IMPORTED_MODULE_1__.reactive)([]);\n        const headerText = 'Paul Wilson (You)';\n        const headerIconCss = 'chat_user_avatar';\n        const user = (0,vue__WEBPACK_IMPORTED_MODULE_1__.reactive)({\n            id: 'user1',\n            user: 'Paul Wilson',\n            avatarUrl: './images/paul_wilson.png'\n        });\n        const emptyChatTemplate = `<div class=\"emptychat-content\">\n            <div class=\"chat-text-content\">\n                <h5><span class=\"e-icons e-multiple-comment\"></span></h5>\n                <div class=\"emptyChatText\">No conversations yet.</div>\n            </div>\n            <div class=\"emptyChatMessage\" >Type to begin or attach images, videos or files.</div>\n        </div>`;\n        const enableAttachments = true;\n        const attachmentSettings = {\n            saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',\n            removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'\n        };\n        const headerToolbar = {\n            items: [\n                {\n                    iconCss: 'e-icons e-refresh',\n                    align: 'Right',\n                    tooltip: 'Clear Chat'\n                }\n            ],\n            itemClicked: () => {\n                    chatRef.value.ej2Instances.messages = [];\n            }\n        };\n\n        return {\n            chatRef,\n            headerText,\n            headerIconCss,\n            user,\n            messages,\n            emptyChatTemplate,\n            enableAttachments,\n            attachmentSettings,\n            headerToolbar\n        };\n    }\n});\n\n\n//# sourceURL=webpack://ej2-interactive-chat-vue-samples/./Samples/chat-ui/attachments/App.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/chat-ui/attachments/App.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./Samples/chat-ui/attachments/App.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chat-ui/attachments/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2-interactive-chat-vue-samples/./Samples/chat-ui/attachments/App.vue?");

/***/ }),

/***/ "./Samples/chat-ui/attachments/App.vue?vue&type=template&id=d617fc10":
/*!***************************************************************************!*\
  !*** ./Samples/chat-ui/attachments/App.vue?vue&type=template&id=d617fc10 ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_d617fc10__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_d617fc10__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=d617fc10 */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chat-ui/attachments/App.vue?vue&type=template&id=d617fc10\");\n\n\n//# sourceURL=webpack://ej2-interactive-chat-vue-samples/./Samples/chat-ui/attachments/App.vue?");

/***/ }),

/***/ "./Samples/chat-ui/attachments/App.vue?vue&type=style&index=0&id=d617fc10&lang=css":
/*!*****************************************************************************************!*\
  !*** ./Samples/chat-ui/attachments/App.vue?vue&type=style&index=0&id=d617fc10&lang=css ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_d617fc10_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=style&index=0&id=d617fc10&lang=css */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chat-ui/attachments/App.vue?vue&type=style&index=0&id=d617fc10&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_d617fc10_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_d617fc10_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_d617fc10_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_d617fc10_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://ej2-interactive-chat-vue-samples/./Samples/chat-ui/attachments/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chat-ui/attachments/App.vue?vue&type=template&id=d617fc10":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chat-ui/attachments/App.vue?vue&type=template&id=d617fc10 ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _hoisted_1 = { class: \"control-pane\" }\nconst _hoisted_2 = { class: \"control-section chat-ui\" }\nconst _hoisted_3 = { class: \"attachment-chatui\" }\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_ejs_chatui = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-chatui\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_chatui, {\n            id: \"chatAttachment\",\n            ref: \"chatRef\",\n            headerText: $setup.headerText,\n            headerIconCss: $setup.headerIconCss,\n            user: $setup.user,\n            messages: $setup.messages,\n            emptyChatTemplate: $setup.emptyChatTemplate,\n            enableAttachments: $setup.enableAttachments,\n            attachmentSettings: $setup.attachmentSettings,\n            headerToolbar: $setup.headerToolbar\n          }, null, 8 /* PROPS */, [\"headerText\", \"headerIconCss\", \"user\", \"messages\", \"emptyChatTemplate\", \"enableAttachments\", \"attachmentSettings\", \"headerToolbar\"])\n        ])\n      ])\n    ]),\n    _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div id=\\\"action-description\\\"><p>This example demonstrates the ability for users to attach files during chat interactions, which helps provide additional context to the conversation.</p></div><div id=\\\"description\\\"><p> In this example, the <a target=\\\"_blank\\\" href=\\\"https://ej2.syncfusion.com/vue/documentation/api/chat-ui/#enableattachments\\\">enableAttachments</a> property is set to <code>true</code> to allow users to attach files in the chat interface. The <a target=\\\"_blank\\\" href=\\\"https://ej2.syncfusion.com/vue/documentation/api/chat-ui/#attachmentsettings\\\">attachmentSettings</a> property is used to configure the <a target=\\\"_blank\\\" href=\\\"https://ej2.syncfusion.com/vue/documentation/api/chat-ui/attachmentSettings/#saveurl\\\">saveUrl</a> and <a target=\\\"_blank\\\" href=\\\"https://ej2.syncfusion.com/vue/documentation/api/chat-ui/attachmentSettings/#removeurl\\\">removeUrl</a>, enabling file upload functionality. </p><p> Various file types such as images, videos, and documents can be attached. You can use the <a target=\\\"_blank\\\" href=\\\"https://ej2.syncfusion.com/vue/documentation/api/chat-ui/attachmentSettings/#allowedfiletypes\\\">allowedFileTypes</a> property within <a target=\\\"_blank\\\" href=\\\"https://ej2.syncfusion.com/vue/documentation/api/chat-ui/#attachmentsettings\\\">attachmentSettings</a> to restrict uploads to specific file types. Additionally, the <a target=\\\"_blank\\\" href=\\\"https://ej2.syncfusion.com/vue/documentation/api/chat-ui/#emptychattemplate\\\">emptyChatTemplate</a> property is used to customize the banner displayed before starting a conversation. </p></div>\", 2))\n  ], 64 /* STABLE_FRAGMENT */))\n}\n\n//# sourceURL=webpack://ej2-interactive-chat-vue-samples/./Samples/chat-ui/attachments/App.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chat-ui/attachments/App.vue?vue&type=style&index=0&id=d617fc10&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chat-ui/attachments/App.vue?vue&type=style&index=0&id=d617fc10&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=style&index=0&id=d617fc10&lang=css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chat-ui/attachments/App.vue?vue&type=style&index=0&id=d617fc10&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"51628357\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://ej2-interactive-chat-vue-samples/./Samples/chat-ui/attachments/App.vue?./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

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
/******/ 			"chat-ui/attachments/main": 0
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkej2_interactive_chat_vue_samples"] = self["webpackChunkej2_interactive_chat_vue_samples"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/chat-ui/attachments/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;