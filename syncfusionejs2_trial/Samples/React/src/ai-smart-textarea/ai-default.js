"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ej2_react_inputs_1 = require("@syncfusion/ej2-react-inputs");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
require("./default.css");
var ai_service_1 = require("../common/ai-service");
function DefaultTextArea() {
    var textareaObj;
    var phrasesData = [
        "Please find the attached report.",
        "Let's schedule a meeting to discuss this further.",
        "Can you provide an update on this task?",
        "I appreciate your prompt response.",
        "Let's collaborate on this project to ensure timely delivery."
    ];
    var rolesData = [
        "Maintainer of an open-source project replying to GitHub issues",
        "Employee communicating with internal team",
        "Customer support representative responding to customer queries",
        "Sales representative responding to client inquiries"
    ];
    var presets = [
        {
            userRole: "Maintainer of an open-source project replying to GitHub issues",
            userPhrases: [
                "Thank you for contacting us.",
                "To investigate, we'll need a repro as a public Git repo.",
                "Could you please post a screenshot of NEED_INFO?",
                "This sounds like a usage question. This issue tracker is intended for bugs and feature proposals. Unfortunately, we don't have the capacity to answer general usage questions and would recommend StackOverflow for a faster response.",
                "We don't accept ZIP files as repros."
            ]
        },
        {
            userRole: "Customer support representative responding to customer queries",
            userPhrases: [
                "Thank you for reaching out to us.",
                "Can you please provide your order number?",
                "We apologize for the inconvenience.",
                "Our team is looking into this issue and will get back to you shortly.",
                "For urgent matters, please call our support line."
            ]
        },
        {
            userRole: "Employee communicating with internal team",
            userPhrases: [
                "Please find the attached report.",
                "Let's schedule a meeting to discuss this further.",
                "Can you provide an update on this task?",
                "I appreciate your prompt response.",
                "Let's collaborate on this project to ensure timely delivery."
            ]
        },
        {
            userRole: "Sales representative responding to client inquiries",
            userPhrases: [
                "Thank you for your interest in our product.",
                "Can I schedule a demo for you?",
                "Please find the pricing details attached.",
                "Our team is excited to work with you.",
                "Let me know if you have any further questions."
            ]
        }
    ];
    function onChange(args) {
        var selectedRole = args.value;
        var selectedPreset = presets.find(function (preset) { return preset.userRole === selectedRole; });
        textareaObj.userRole = selectedRole;
        textareaObj.UserPhrases = selectedPreset.userPhrases;
    }
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: 'control-section' },
            React.createElement("div", { className: "ai-content-wrapper" },
                React.createElement("div", { className: "ai-example-label" }, "Select a role"),
                React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { type: "text", id: 'user-role', dataSource: rolesData, width: '75%', placeholder: "Select a role", value: "Maintainer of an open-source project replying to GitHub issues", popupHeight: "200px", change: onChange }),
                React.createElement("div", { style: { width: "75%" } },
                    React.createElement(ej2_react_inputs_1.SmartTextAreaComponent, { cols: 150, id: 'smart-textarea', ref: function (textarea) { textareaObj = textarea; }, placeholder: 'Enter your queries here', floatLabelType: 'Auto', rows: 5, userRole: 'Employee communicating with internal team', UserPhrases: phrasesData, aiSuggestionHandler: ai_service_1.serverAIRequest }))))));
}
exports.default = DefaultTextArea;
