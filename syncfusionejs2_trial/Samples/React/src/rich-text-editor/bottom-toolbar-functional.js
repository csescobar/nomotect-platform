"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BottomToolbar = void 0;
var React = require("react");
require("./bottom-toolbar.css");
var ej2_react_interactive_chat_1 = require("@syncfusion/ej2-react-interactive-chat");
var sample_base_1 = require("../common/sample-base");
var ej2_react_richtexteditor_1 = require("@syncfusion/ej2-react-richtexteditor");
var BottomToolbar = function () {
    React.useEffect(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var chatRTERef = React.useRef(null);
    var chatUIRef = React.useRef(null);
    var currentUserModel = {
        id: 'user1',
        user: 'Albert',
    };
    var michaleUserModel = {
        id: 'user2',
        user: 'Michale Suyama',
        avatarUrl: '//ej2.syncfusion.com/demos/src/chat-ui/images/andrew.png',
    };
    var chatMessages = [
        {
            author: currentUserModel,
            text: 'Hi Michale, are we on track for the deadline?',
        },
        {
            author: michaleUserModel,
            text: 'Yes, the design phase is complete.',
        },
        {
            author: currentUserModel,
            text: 'I will review it and send feedback by today.',
        },
        {
            author: michaleUserModel,
            text: 'Okay.',
        },
    ];
    var isValidContent = function (html) {
        if (!html || html.trim().length === 0)
            return false;
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        // Check for meaningful text
        var textContent = tempDiv.innerHTML.replace(/<br\s*\/?>/gi, '').replace(/&nbsp;/gi, '').replace(/<[^>]*>/g, '').trim();
        if (textContent.length > 0)
            return true;
        // Check for media elements
        var mediaTags = ['img', 'table', 'audio', 'video', 'iframe'];
        for (var _i = 0, mediaTags_1 = mediaTags; _i < mediaTags_1.length; _i++) {
            var tag = mediaTags_1[_i];
            if (tempDiv.getElementsByTagName(tag).length > 0)
                return true;
        }
        return false;
    };
    var sendMessage = function () {
        var _a;
        var chatRTE = chatRTERef.current;
        if (chatRTE && chatRTE.value && chatRTE.value.length > 0) {
            var message = chatRTE.value;
            if (isValidContent(message)) {
                chatRTE.value = '';
                chatRTE.dataBind();
                (_a = chatUIRef.current) === null || _a === void 0 ? void 0 : _a.addMessage({
                    author: currentUserModel,
                    text: message,
                });
                chatRTE.clearUndoRedo();
                chatRTE.focusIn();
            }
        }
    };
    var cancelMessage = function () {
        var chatRTE = chatRTERef.current;
        if (chatRTE) {
            chatRTE.value = '';
            chatRTE.dataBind();
            chatRTE.clearUndoRedo();
            chatRTE.focusIn();
        }
    };
    var footerTemplate = function () { return (React.createElement("div", { className: "custom-footer" },
        React.createElement(ej2_react_richtexteditor_1.RichTextEditorComponent, { ref: chatRTERef, placeholder: "Type something...", toolbarSettings: {
                position: 'Bottom',
                items: [
                    'Bold',
                    'Italic',
                    'Underline',
                    'InlineCode',
                    '|',
                    'FontColor',
                    'BackgroundColor',
                    '|',
                    'Alignments',
                    'Blockquote',
                    '|',
                    'OrderedList',
                    'UnorderedList',
                    '|',
                    'CreateLink',
                    'Image',
                    'CreateTable',
                    'EmojiPicker',
                ],
            } },
            React.createElement(ej2_react_richtexteditor_1.Inject, { services: [ej2_react_richtexteditor_1.Toolbar, ej2_react_richtexteditor_1.Link, ej2_react_richtexteditor_1.Image, ej2_react_richtexteditor_1.HtmlEditor, ej2_react_richtexteditor_1.QuickToolbar, ej2_react_richtexteditor_1.Table, ej2_react_richtexteditor_1.EmojiPicker, ej2_react_richtexteditor_1.ClipBoardCleanup, ej2_react_richtexteditor_1.AutoFormat] })),
        React.createElement("button", { id: "sendMessage", className: "e-btn e-primary e-icons e-send e-send-1 e-icon-btn e-small", style: { float: 'right', margin: '4px' }, onClick: sendMessage }),
        React.createElement("button", { id: "cancelMessage", className: "e-btn e-secondary e-icons e-trash e-icon-btn e-small", style: { float: 'right', margin: '4px' }, onClick: cancelMessage }))); };
    return (React.createElement("div", { className: "control-section" },
        React.createElement("div", { className: "sample-container" },
            React.createElement("div", { className: "chat-section" },
                React.createElement(ej2_react_interactive_chat_1.ChatUIComponent, { ref: chatUIRef, headerText: "Michale Suyama", headerIconCss: "chat_user2_avatar", messages: chatMessages, user: currentUserModel, showTimeBreak: true, loadOnDemand: true, messageToolbarSettings: {
                        items: [
                            { type: 'Button', iconCss: 'e-icons e-chat-copy', tooltip: 'Copy' },
                            { type: 'Button', iconCss: 'e-icons e-chat-trash', tooltip: 'Delete' }
                        ]
                    }, footerTemplate: footerTemplate })))));
};
exports.BottomToolbar = BottomToolbar;
exports.default = exports.BottomToolbar;
