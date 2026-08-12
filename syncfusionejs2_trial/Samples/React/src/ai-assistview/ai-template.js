"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Template = void 0;
var React = require("react");
var ej2_react_interactive_chat_1 = require("@syncfusion/ej2-react-interactive-chat");
var sample_base_1 = require("../common/sample-base");
var ai_service_1 = require("../common/ai-service");
require("./ai-template.css");
var ej2_react_navigations_1 = require("@syncfusion/ej2-react-navigations");
var ej2_react_splitbuttons_1 = require("@syncfusion/ej2-react-splitbuttons");
var data = require("./promptResponseData.json");
var Template = /** @class */ (function (_super) {
    __extends(Template, _super);
    function Template() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prompts = data["defaultPromptResponseData"];
        _this.suggestion = data["defaultSuggestions"];
        _this.buttonVisible = 'Visible';
        _this.dataSource = [
            { imagePath: 'src/ai-assistview/images/moscow.jpg', title: 'Moscow', suggestion: 'How do I prioritize tasks effectively?' },
            { imagePath: 'src/ai-assistview/images/bridge.jpg', title: 'Bridge', suggestion: 'How do I set daily goals in my work day?' },
            { imagePath: 'src/ai-assistview/images/london.jpg', title: 'London', suggestion: 'Steps to publish a e-book with marketing strategy' },
            { imagePath: 'src/ai-assistview/images/tokyo.jpg', title: 'Tokyo', suggestion: 'What tools or apps can help me prioritize tasks?' }
        ];
        _this.productTemplate = function (data) {
            return (React.createElement("div", { className: "carousel-template" },
                React.createElement("img", { src: data.imagePath, alt: data.title }),
                React.createElement("div", { className: "e-card" },
                    React.createElement("div", { className: "e-card-header" }, data.suggestion))));
        };
        _this.bannerViewTemplate = function () {
            return (React.createElement("div", { className: "banner-content" },
                React.createElement("h3", null,
                    React.createElement("span", { className: "e-icons e-assistview-icon" }),
                    "AI Assistance"),
                React.createElement(ej2_react_navigations_1.CarouselComponent, { id: "bannerCarousel", ref: function (carousel) { return (_this.assistViewCarousel = carousel); }, width: '100%', height: '60%', showIndicators: false, partialVisible: false, dataSource: _this.dataSource, itemTemplate: _this.productTemplate, buttonsVisibility: _this.buttonVisible })));
        };
        _this.promptItemTemplate = function (props) {
            var prompt = props.prompt.replace('<span class="e-icons e-circle-info"></span>', '');
            return (React.createElement("div", { className: "promptItemContent" },
                React.createElement("div", { className: "prompt-header" },
                    "You",
                    React.createElement("span", { className: "e-icons e-user" })),
                React.createElement("div", { className: "assist-prompt-content" }, prompt)));
        };
        _this.responseItemTemplate = function (props) {
            return (React.createElement("div", { className: "responseItemContent" },
                React.createElement("div", { className: "response-header" },
                    React.createElement("span", { className: "e-icons e-assistview-icon" }),
                    "AI Assist"),
                React.createElement("div", { className: "assist-response-content", dangerouslySetInnerHTML: { __html: props.response } })));
        };
        _this.promptSuggestionItemTemplate = function (props) {
            return (React.createElement("div", { className: 'suggestion-item active' },
                React.createElement("span", { className: "e-icons e-circle-info" }),
                React.createElement("div", { className: "assist-suggestion-content" }, props.promptSuggestion)));
        };
        _this.toolbarSettings = {
            items: [
                { type: 'Input', template: '<button id="ddMenu"></button>', align: 'Right' }
            ]
        };
        _this.handleAction = function (e) {
            var target = e.target;
            var prompt = '';
            if (target.tagName === 'IMG') {
                prompt = target.nextElementSibling.textContent;
            }
            else if (target.className === 'e-card-header') {
                prompt = target.textContent;
            }
            if (prompt) {
                _this.templateAiAssistView.executePrompt(prompt);
            }
        };
        _this.created = function () {
            setTimeout(function () {
                _this.assistViewCarousel.element.addEventListener('click', function (e) {
                    _this.handleAction(e);
                });
                _this.assistViewCarousel.element.addEventListener('touchstart', function (e) {
                    _this.handleAction(e);
                });
            });
            new ej2_react_splitbuttons_1.DropDownButton({
                items: [
                    { text: 'Settings', iconCss: 'e-icons e-settings' },
                    { separator: true },
                    { text: 'Log out' }
                ],
                iconCss: 'e-icons e-user',
                cssClass: 'e-caret-hide',
            }, '#ddMenu');
        };
        _this.promptRequest = function (args) { return __awaiter(_this, void 0, void 0, function () {
            var foundPrompt, response, aiResponse, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.abortController = new AbortController();
                        foundPrompt = this.prompts.find(function (promptObj) { return promptObj.prompt === args.prompt; });
                        response = 'For real-time prompt processing, connect the AI AssistView control to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
                        if (!foundPrompt) return [3 /*break*/, 1];
                        response = foundPrompt.response;
                        return [3 /*break*/, 4];
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, (0, ai_service_1.getAIResponse)(args, this.abortController)];
                    case 2:
                        aiResponse = _a.sent();
                        if (aiResponse && typeof aiResponse === 'string') {
                            response = aiResponse;
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.error('Error getting AI response:', error_1);
                        return [3 /*break*/, 4];
                    case 4:
                        this.templateAiAssistView.addPromptResponse(response);
                        this.templateAiAssistView.promptSuggestions = (foundPrompt === null || foundPrompt === void 0 ? void 0 : foundPrompt.suggestions) || this.suggestion;
                        return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    Template.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: "control-section" },
                React.createElement("div", { className: "template-aiassistview" },
                    React.createElement(ej2_react_interactive_chat_1.AIAssistViewComponent, { id: "aiAssistView", bannerTemplate: this.bannerViewTemplate, promptItemTemplate: this.promptItemTemplate, responseItemTemplate: this.responseItemTemplate, promptSuggestionItemTemplate: this.promptSuggestionItemTemplate, promptSuggestions: this.suggestion, enableStreaming: true, promptRequest: this.promptRequest, ref: function (aiassistView) { return (_this.templateAiAssistView = aiassistView); }, created: this.created, promptSuggestionsHeader: this.promptSuggestionsHeader, toolbarSettings: this.toolbarSettings }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates the template functionality of the AI AssistView component.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "In this example, the AI AssistView component uses customizable templates for the banner, prompts, responses, and suggestions. We have used the  ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview#bannertemplate" }, "bannerTemplate"),
                    ",  ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview#promptitemtemplate" }, "promptItemTemplate"),
                    ",  ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview#responseitemtemplate" }, "responseItemTemplate"),
                    " and  ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview#promptsuggestionitemtemplate" }, "promptSuggestionItemTemplate"),
                    " to define the structure and appearance of these elements."),
                React.createElement("p", null,
                    "By using the  ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview#executeprompt" }, "executePrompt"),
                    " method you can trigger the prompt request externally and generate the output based on the  ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview#promptrequest" }, "promptRequest"),
                    " data returned. If found, the response will be displayed and suggestions updated."))));
    };
    return Template;
}(sample_base_1.SampleBase));
exports.Template = Template;
