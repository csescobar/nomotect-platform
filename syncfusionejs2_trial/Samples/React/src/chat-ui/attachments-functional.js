"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ej2_react_interactive_chat_1 = require("@syncfusion/ej2-react-interactive-chat");
var React = require("react");
var react_1 = require("react");
require("./attachments.css");
var sample_base_1 = require("../common/sample-base");
var Attachments = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var user = (0, react_1.useState)({
        id: 'user1',
        user: 'Paul Wilson',
        avatarUrl: './src/chat-ui/images/paul_wilson.png'
    })[0];
    // The chat message history state (for controlled chat)
    var _a = (0, react_1.useState)([]), messages = _a[0], setMessages = _a[1];
    var chatRef = (0, react_1.useRef)(null);
    // Toolbar setup, with a single Clear Chat button
    var headerToolbar = {
        items: [
            {
                iconCss: 'e-icons e-refresh',
                align: 'Right',
                tooltip: 'Clear Chat'
            }
        ],
        itemClicked: function () {
            chatRef.current.messages = [];
        }
    };
    return (React.createElement("div", { className: "control-pane" },
        React.createElement("div", { className: "control-section chat-ui" },
            React.createElement("div", { className: "attachment-chatui" },
                React.createElement(ej2_react_interactive_chat_1.ChatUIComponent, { ref: chatRef, headerText: "Paul Wilson (You)", headerIconCss: "chat_user_avatar", user: user, messages: messages, emptyChatTemplate: "\n              <div class=\"emptychat-content\">\n                <div class=\"chat-text-content\">\n                  <h5><span class=\"e-icons e-multiple-comment\"></span></h5>\n                  <div class=\"emptyChatText\">No conversations yet.</div>\n                </div>\n                <div class=\"emptyChatMessage\" >Type to begin or attach images, videos or files.</div>\n              </div>\n            ", enableAttachments: true, attachmentSettings: {
                        saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save',
                        removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save'
                    }, headerToolbar: headerToolbar }))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This example demonstrates the ability for users to attach files during chat interactions, which helps provide additional context to the conversation.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null,
                "In this example, the ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/chat-ui/#enableattachments" }, "enableAttachments"),
                " property is set to ",
                React.createElement("code", null, "true"),
                " to allow users to attach files in the chat interface. The ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/chat-ui/#attachmentsettings" }, "attachmentSettings"),
                " property is used to configure the ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/chat-ui/attachmentSettings/#saveurl" }, "saveUrl"),
                " and ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/chat-ui/attachmentSettings/#removeurl" }, "removeUrl"),
                ", enabling file upload functionality."),
            React.createElement("p", null,
                "Various file types such as images, videos, and documents can be attached. You can use the ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/chat-ui/attachmentSettings/#allowedfiletypes" }, "allowedFileTypes"),
                " property within ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/chat-ui/#attachmentsettings" }, "attachmentSettings"),
                " to restrict uploads to specific file types. Additionally, the ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/chat-ui/#emptychattemplate" }, "emptyChatTemplate"),
                " property is used to customize the banner displayed before starting a conversation."))));
};
exports.default = Attachments;
