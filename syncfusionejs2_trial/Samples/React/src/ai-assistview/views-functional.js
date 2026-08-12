"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var sample_base_1 = require("../common/sample-base");
require("./views.css");
var ej2_react_interactive_chat_1 = require("@syncfusion/ej2-react-interactive-chat");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var ej2_react_inputs_1 = require("@syncfusion/ej2-react-inputs");
var Views = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var promptsData = [];
    var assistInstance = (0, react_1.useRef)(null);
    var footerTemplate = "<div class=\"custom-footer\">\n        <textarea id=\"textarea\"></textarea>\n        <button id=\"btn\" style=\"margin-top: 10px\">Generate Prompt</button>\n    </div>";
    var viewTemplate = '<div id="custom-view"></div>';
    var button = new ej2_react_buttons_1.Button({ cssClass: "generate-btn e-primary", content: 'Generate Prompt' });
    var textareaObj = new ej2_react_inputs_1.TextArea({
        placeholder: "Enter your prompt...",
        rows: 4,
        cols: 35,
        width: '100%',
        resizeMode: 'None'
    });
    var created = function () {
        textareaObj.appendTo('#textarea');
        button.appendTo('#btn');
        button.element.addEventListener('click', function () { buttonClicked(); });
    };
    var buttonClicked = function () {
        var promptValue = textareaObj.value.trim();
        if (promptValue) {
            promptsData.unshift(promptValue);
            assistInstance.current.activeView = 1;
            assistInstance.current.dataBind();
            textareaObj.value = "";
            updateViewTemplate();
        }
        else {
            assistInstance.current.activeView = 0;
        }
    };
    var updateViewTemplate = function () {
        var viewTemplate = document.getElementById('custom-view');
        var templateItem = '';
        promptsData.forEach(function (prompt, index) {
            templateItem += "\n                <div class=\"custom-view-container\">\n                    <div class=\"prompt-header\">".concat(prompt, "</div>\n                    <div class=\"prompt-response\">\n                        <div class=\"response-text\">").concat("For real-time prompt processing, connect the AI AssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services.", "</div>\n                        <button class=\"e-btn\" id=\"copy-btn-").concat(index, "\"><span class=\"e-icons e-aiassist-copy\" style=\"padding: 4px;\"></span>Copy</button>\n                    </div>\n                </div>\n            ");
        });
        viewTemplate.innerHTML = templateItem;
        var copyButton = viewTemplate.querySelector('button');
        copyButton.addEventListener('click', function () {
            var copyButtonElement = viewTemplate.querySelector('.e-aiassist-copy');
            copyClick(copyButtonElement);
        });
    };
    var copyClick = function (copyButtonEle) {
        var textToCopy = "For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services.";
        navigator.clipboard.writeText(textToCopy);
        copyButtonEle.classList.remove('e-aiassist-copy');
        copyButtonEle.classList.add('e-aiassist-check');
        setTimeout(function () {
            copyButtonEle.classList.remove('e-aiassist-check');
            copyButtonEle.classList.add('e-aiassist-copy');
        }, 1000);
    };
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: "control-section" },
            React.createElement("div", { className: "views-container" },
                React.createElement(ej2_react_interactive_chat_1.AIAssistViewComponent, { id: "aiAssist_views", footerTemplate: footerTemplate, ref: assistInstance, created: created },
                    React.createElement(ej2_react_interactive_chat_1.ViewsDirective, null,
                        React.createElement(ej2_react_interactive_chat_1.ViewDirective, { type: 'Assist', name: 'Prompt' }),
                        React.createElement(ej2_react_interactive_chat_1.ViewDirective, { type: 'Custom', name: 'Response', iconCss: 'e-icons e-comment-show', viewTemplate: viewTemplate }))))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This sample showcases the AIAssistView component with all of its default combinations.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null, "This sample showcases the AIAssistView component with its prompts, promptSuggestions and promptRequest."))));
};
exports.default = Views;
