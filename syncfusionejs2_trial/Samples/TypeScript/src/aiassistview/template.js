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
/******/ 		"src/aiassistview/template": 0
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
/******/ 	deferredModules.push(["./src/aiassistview/template.js","src/common.min"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/aiassistview/template.js":
/*!**************************************!*\
  !*** ./src/aiassistview/template.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @syncfusion/ej2-interactive-chat */ "./node_modules/@syncfusion/ej2-interactive-chat/index.js"), __webpack_require__(/*! @syncfusion/ej2-splitbuttons */ "./node_modules/@syncfusion/ej2-splitbuttons/index.js"), __webpack_require__(/*! @syncfusion/ej2-navigations */ "./node_modules/@syncfusion/ej2-navigations/index.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, ej2_interactive_chat_1, ej2_splitbuttons_1, ej2_navigations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var templateAIAssistView = new ej2_interactive_chat_1.AIAssistView({
        bannerTemplate: '#bannerContent',
        promptItemTemplate: promptItemContent,
        responseItemTemplate: responseItemContent,
        promptSuggestionItemTemplate: suggestionItemContent,
        promptSuggestionsHeader: 'Hello! Ask Questions, to better understand how your prompt interacts with AI AssistView!',
        promptSuggestions: window.defaultSuggestions,
        toolbarSettings: {
            items: [
                { type: 'Input', template: '<button id="ddMenu"></button>', align: 'Right' }
            ]
        },
        promptRequest: onPromptRequest
    });
    templateAIAssistView.appendTo('#aiAssistView');
    function onPromptRequest(args) {
        setTimeout(function () {
            var foundPrompt = window.defaultPromptResponseData.find(function (promptObj) { return promptObj.prompt === args.prompt; });
            var defaultResponse = 'For real-time prompt processing, connect the AI AssistView control to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            templateAIAssistView.addPromptResponse(foundPrompt ? foundPrompt.response : defaultResponse);
            templateAIAssistView.promptSuggestions = (foundPrompt === null || foundPrompt === void 0 ? void 0 : foundPrompt.suggestions) || window.defaultSuggestions;
        }, 2000);
    }
    function promptItemContent(ctx) {
        var prompt = ctx.prompt.replace('<span class="e-icons e-circle-info"></span>', '');
        return "<div class=\"promptItemContent\">\n                <div class=\"prompt-header\">You\n                    <span class=\"e-icons e-user\"></span>\n                </div>\n                <div class=\"content\">".concat(prompt, "</div>\n            </div>");
    }
    function responseItemContent(ctx) {
        return "<div class=\"responseItemContent\">\n                <div class=\"response-header\">\n                    <span class=\"e-icons e-assist-icon\"></span>\n                    AI AssistView\n                </div>\n                <div class=\"content\">".concat(ctx.response, "</div>\n            </div>");
    }
    function suggestionItemContent(ctx) {
        return "<div class='suggestion-item active'>\n                <span class=\"e-icons e-circle-info\"></span>\n                <div class=\"content\">".concat(ctx.promptSuggestion, "</div>\n            </div>");
    }
    var carouselObj = new ej2_navigations_1.Carousel({
        width: '100%',
        height: '60%',
        showIndicators: false,
        partialVisible: true,
        buttonsVisibility: 'Visible',
        dataSource: [
            { imagePath: 'src/ai-assistview/images/moscow.jpg', suggestion: 'How do I prioritize tasks effectively?' },
            { imagePath: 'src/ai-assistview/images/bridge.jpg', suggestion: 'How do I set daily goals in my work day?' },
            { imagePath: 'src/ai-assistview/images/london.jpg', suggestion: 'Steps to publish a e-book with marketing strategy' },
            { imagePath: 'src/ai-assistview/images/tokyo.jpg', suggestion: 'What tools or apps can help me prioritize tasks?' }
        ],
        itemTemplate: '#carouselTemplate'
    });
    carouselObj.appendTo('#bannerCarousel');
    carouselObj.element.addEventListener('click', function (e) {
        var target = e.target;
        var prompt = '';
        if (target.tagName === 'IMG') {
            prompt = e.target.nextElementSibling.textContent;
        }
        else if (target.className === 'e-card-header') {
            prompt = e.target.textContent;
        }
        if (prompt)
            templateAIAssistView.executePrompt(prompt);
    });
    new ej2_splitbuttons_1.DropDownButton({
        items: [
            { text: 'Settings', iconCss: 'e-icons e-settings' },
            { separator: true },
            { text: 'Log out' }
        ],
        iconCss: 'e-icons e-user',
        cssClass: 'e-caret-hide',
    }, '#ddMenu');
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

/******/ });