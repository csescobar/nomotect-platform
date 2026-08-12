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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Views = void 0;
var React = require("react");
var ej2_react_interactive_chat_1 = require("@syncfusion/ej2-react-interactive-chat");
var sample_base_1 = require("../common/sample-base");
require("./views.css");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var ej2_react_inputs_1 = require("@syncfusion/ej2-react-inputs");
var Views = /** @class */ (function (_super) {
    __extends(Views, _super);
    function Views() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.promptsData = [];
        _this.footerTemplate = "<div class=\"custom-footer\">\n    <textarea id=\"textarea\"></textarea>\n    <button id=\"btn\" style=\"margin-top: 10px\">Generate Prompt</button>\n  </div>";
        _this.viewTemplate = '<div id="custom-view"></div>';
        _this.button = new ej2_react_buttons_1.Button({ cssClass: "generate-btn e-primary", content: 'Generate Prompt' });
        _this.textareaObj = new ej2_react_inputs_1.TextArea({
            placeholder: "Enter your prompt...",
            rows: 4,
            cols: 35,
            width: '100%',
            resizeMode: 'None'
        });
        _this.created = function () {
            _this.textareaObj.appendTo('#textarea');
            _this.button.appendTo('#btn');
            _this.button.element.addEventListener('click', function () { _this.buttonClicked(); });
        };
        _this.buttonClicked = function () {
            var promptValue = _this.textareaObj.value.trim();
            if (promptValue) {
                _this.promptsData.unshift(promptValue);
                _this.assistInstance.activeView = 1;
                _this.assistInstance.dataBind();
                _this.textareaObj.value = "";
                _this.updateViewTemplate();
            }
            else {
                _this.assistInstance.activeView = 0;
            }
        };
        _this.updateViewTemplate = function () {
            var viewTemplate = document.getElementById('custom-view');
            var templateItem = '';
            _this.promptsData.forEach(function (prompt, index) {
                templateItem += "\n            <div class=\"custom-view-container\">\n                <div class=\"prompt-header\">".concat(prompt, "</div>\n                <div class=\"prompt-response\">\n                    <div class=\"response-text\">").concat("For real-time prompt processing, connect the AI AssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services.", "</div>\n                    <button class=\"e-btn\" id=\"copy-btn-").concat(index, "\"><span class=\"e-icons e-aiassist-copy\" style=\"padding: 4px;\"></span>Copy</button>\n                </div>\n            </div>\n        ");
            });
            viewTemplate.innerHTML = templateItem;
            var copyButton = viewTemplate.querySelector('button');
            copyButton.addEventListener('click', function () {
                var copyButtonElement = viewTemplate.querySelector('.e-aiassist-copy');
                _this.copyClick(copyButtonElement);
            });
        };
        _this.copyClick = function (copyButtonEle) {
            var textToCopy = "For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services.";
            navigator.clipboard.writeText(textToCopy);
            copyButtonEle.classList.remove('e-aiassist-copy');
            copyButtonEle.classList.add('e-aiassist-check');
            setTimeout(function () {
                copyButtonEle.classList.remove('e-aiassist-check');
                copyButtonEle.classList.add('e-aiassist-copy');
            }, 1000);
        };
        return _this;
    }
    Views.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: "control-section" },
                React.createElement("div", { className: "views-container" },
                    React.createElement(ej2_react_interactive_chat_1.AIAssistViewComponent, { id: "aiAssist_views", footerTemplate: this.footerTemplate, ref: function (aiassistView) { return (_this.assistInstance = aiassistView); }, created: this.created },
                        React.createElement(ej2_react_interactive_chat_1.ViewsDirective, null,
                            React.createElement(ej2_react_interactive_chat_1.ViewDirective, { type: 'Assist', name: 'Prompt' }),
                            React.createElement(ej2_react_interactive_chat_1.ViewDirective, { type: 'Custom', name: 'Response', iconCss: 'e-icons e-comment-show', viewTemplate: this.viewTemplate }))))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample showcases the AIAssistView component with all of its default combinations.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null, "This sample showcases the AIAssistView component with its prompts, promptSuggestions and promptRequest."))));
    };
    return Views;
}(sample_base_1.SampleBase));
exports.Views = Views;
