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
exports.Attachments = void 0;
var ej2_react_interactive_chat_1 = require("@syncfusion/ej2-react-interactive-chat");
var React = require("react");
var sample_base_1 = require("../common/sample-base");
require("./attachments.css");
var Attachments = /** @class */ (function (_super) {
    __extends(Attachments, _super);
    function Attachments(props) {
        var _this = _super.call(this, props) || this;
        _this.chatRef = React.createRef();
        // Toolbar for the header with clear button (must use align: 'Right' as const to match required type)
        _this.headerToolbar = {
            items: [
                {
                    iconCss: 'e-icons e-refresh',
                    align: 'Right',
                    tooltip: 'Clear Chat'
                }
            ],
            itemClicked: function () {
                _this.chatRef.current.messages = [];
            }
        };
        _this.state = {
            user: {
                id: 'user1',
                user: 'Paul Wilson',
                avatarUrl: './src/chat-ui/images/paul_wilson.png'
            },
            messages: [] // Now the chat can be cleared!
        };
        return _this;
    }
    Attachments.prototype.render = function () {
        return (React.createElement("div", { className: "control-pane" },
            React.createElement("div", { className: "control-section chat-ui" },
                React.createElement("div", { className: "attachment-chatui" },
                    React.createElement(ej2_react_interactive_chat_1.ChatUIComponent, { ref: this.chatRef, headerText: "Paul Wilson (You)", headerIconCss: "chat_user_avatar", user: this.state.user, messages: this.state.messages, headerToolbar: this.headerToolbar, emptyChatTemplate: "\n                <div class=\"emptychat-content\">\n                  <div class=\"chat-text-content\">\n                    <h5><span class=\"e-icons e-multiple-comment\"></span></h5>\n                    <div class=\"emptyChatText\">No conversations yet.</div>\n                  </div>\n                  <div class=\"emptyChatMessage\" >Type to begin or attach images, videos or files.</div>\n                </div>\n              ", enableAttachments: true, attachmentSettings: {
                            saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save',
                            removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove'
                        } }))),
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
    return Attachments;
}(sample_base_1.SampleBase));
exports.Attachments = Attachments;
