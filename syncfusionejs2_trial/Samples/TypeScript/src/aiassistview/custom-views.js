/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"src/aiassistview/custom-views": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/aiassistview/custom-views.js","src/common.min"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/aiassistview/custom-views.js":
/*!******************************************!*\
  !*** ./src/aiassistview/custom-views.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @syncfusion/ej2-interactive-chat */ "./node_modules/@syncfusion/ej2-interactive-chat/index.js"), __webpack_require__(/*! @syncfusion/ej2-buttons */ "./node_modules/@syncfusion/ej2-buttons/index.js"), __webpack_require__(/*! @syncfusion/ej2-inputs */ "./node_modules/@syncfusion/ej2-inputs/index.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, ej2_interactive_chat_1, ej2_buttons_1, ej2_inputs_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var viewsAIAssistView = new ej2_interactive_chat_1.AIAssistView({
        views: [
            {
                type: 'Assist',
                name: "Prompt",
                viewTemplate: promptViewContent
            },
            {
                type: 'Custom',
                name: 'Response',
                iconCss: 'e-icons e-comment-show',
                viewTemplate: responseViewContent
            },
            {
                type: 'Custom',
                name: 'Custom',
                viewTemplate: '<div class="view-container"><h5>Custom view content</h5></div>'
            }
        ],
        created: onCreate
    });
    viewsAIAssistView.appendTo('#aiAssistView');
    function promptViewContent() {
        var suggestionsElem = '';
        window.defaultSuggestions.forEach(function (suggestion) {
            suggestionsElem += "<li class=\"suggestion-item e-card\">".concat(suggestion, "</li>");
        });
        return "<div class=\"view-container\">\n               <textarea id=\"promptTextarea\"></textarea>\n               <button id=\"generateBtn\"></button>\n               <ul class=\"suggestions\">".concat(suggestionsElem, "</ul>\n            </div>");
    }
    function responseViewContent() {
        return "<div class=\"view-container response-view\">\n               <div class=\"responseItemContent default-response e-card\">\n               <span class=\"e-icons e-circle-info\"></span>\n               No prompt provided. Please enter a prompt and click 'Generate Prompt' to see the response.</div>\n            </div>";
    }
    function updateResponseView(prompt) {
        var responseView = viewsAIAssistView.element.querySelector('.view-container');
        var separatorElem = '<hr style="height: 1px;margin: 0;">';
        var responseItemElem = "<div class=\"responseItemContent e-card\">\n                                <div class=\"response-header\"><b>Prompt:</b> ".concat(prompt, "</div>").concat(separatorElem, "\n                                <div class=\"content\">\n                                    <div class=\"e-skeleton e-shimmer-wave\" style=\"width: 100%; height: 20px;\"></div>\n                                    <div class=\"e-skeleton e-shimmer-wave\" style=\"width: 80%; height: 20px;\"></div>\n                                    <div class=\"e-skeleton e-shimmer-wave\" style=\"width: 100%; height: 20px;\"></div>\n                                </div>\n                                ").concat(separatorElem, "\n                                <div class=\"options\">\n                                    <button id=\"copyBtn\" class=\"e-btn e-normal e-skeleton e-shimmer-wave\">Copy</button>\n                                </div>\n                            </div>");
        var defaultResponse = responseView.querySelector('.default-response');
        if (defaultResponse) {
            defaultResponse.remove();
        }
        responseView.innerHTML = responseItemElem + responseView.innerHTML;
        setTimeout(function () {
            var foundPrompt = window.defaultPromptResponseData.find(function (promptObj) { return promptObj.prompt === prompt; });
            var defaultResponse = 'For real-time prompt processing, connect the AI AssistView control to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            var response = foundPrompt ? foundPrompt.response : defaultResponse;
            responseView.children[0].querySelector('.content').innerHTML = response;
            var copyBtn = responseView.children[0].querySelector('#copyBtn');
            copyBtn.classList.remove('e-skeleton', 'e-shimmer-wave');
            copyBtn.addEventListener('click', function (e) {
                var textToCopy = e.target.parentElement.parentElement.querySelector('.content').textContent;
                navigator.clipboard.writeText(textToCopy).then(function () {
                    copyBtn.textContent = 'Copied!';
                    setTimeout(function () {
                        copyBtn.textContent = 'Copy';
                    }, 1000);
                });
            });
        }, 2000);
    }
    function onCreate() {
        var textareaObj = new ej2_inputs_1.TextArea({
            placeholder: "Enter your prompt...",
            rows: 5,
            resizeMode: 'None',
            input: function (e) {
                generateBtn.disabled = !e.value;
            }
        });
        textareaObj.appendTo('#promptTextarea');
        var generateBtn = new ej2_buttons_1.Button({ cssClass: 'e-primary generate-btn', content: 'Generate Prompt', disabled: true });
        generateBtn.appendTo('#generateBtn');
        generateBtn.element.addEventListener('click', function () {
            var promptValue = textareaObj.value;
            if (promptValue) {
                textareaObj.value = '';
                generateBtn.disabled = true;
                viewsAIAssistView.activeView = 1;
                viewsAIAssistView.dataBind();
                updateResponseView(promptValue);
            }
        });
        viewsAIAssistView.element.querySelector('.view-container .suggestions').addEventListener('click', function (e) {
            if (e.target.classList.contains('suggestion-item')) {
                textareaObj.value = e.target.textContent;
                generateBtn.disabled = false;
            }
        });
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

/******/ });