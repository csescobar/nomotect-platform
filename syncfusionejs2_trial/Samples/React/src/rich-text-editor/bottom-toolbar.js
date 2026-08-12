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
exports.BottomToolbar = void 0;
var React = require("react");
var sample_base_1 = require("../common/sample-base");
require("./bottom-toolbar.css");
var ej2_react_interactive_chat_1 = require("@syncfusion/ej2-react-interactive-chat");
var ej2_react_richtexteditor_1 = require("@syncfusion/ej2-react-richtexteditor");
var BottomToolbar = /** @class */ (function (_super) {
    __extends(BottomToolbar, _super);
    function BottomToolbar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.chatRTE = null;
        _this.chatUIRef = React.createRef();
        _this.currentUserModel = {
            id: 'user1',
            user: 'Albert',
        };
        _this.michaleUserModel = {
            id: 'user2',
            user: 'Michale Suyama',
            avatarUrl: '//ej2.syncfusion.com/demos/src/chat-ui/images/andrew.png',
        };
        _this.chatMessages = [
            { author: _this.currentUserModel, text: 'Hi Michale, are we on track for the deadline?' },
            { author: _this.michaleUserModel, text: 'Yes, the design phase is complete.' },
            { author: _this.currentUserModel, text: 'I will review it and send feedback by today.' },
            { author: _this.michaleUserModel, text: 'Okay.' },
        ];
        _this.footerTemplate = function () {
            return (React.createElement("div", { className: "custom-footer" },
                React.createElement(ej2_react_richtexteditor_1.RichTextEditorComponent, { ref: function (rte) { return (_this.chatRTE = rte); }, toolbarSettings: {
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
                    }, placeholder: "Type something..." },
                    React.createElement(ej2_react_richtexteditor_1.Inject, { services: [ej2_react_richtexteditor_1.Toolbar, ej2_react_richtexteditor_1.Link, ej2_react_richtexteditor_1.Image, ej2_react_richtexteditor_1.HtmlEditor, ej2_react_richtexteditor_1.QuickToolbar, ej2_react_richtexteditor_1.Table, ej2_react_richtexteditor_1.EmojiPicker, ej2_react_richtexteditor_1.ClipBoardCleanup, ej2_react_richtexteditor_1.AutoFormat] })),
                React.createElement("button", { id: "sendMessage", className: "e-btn e-primary e-icons e-send e-send-1 e-icon-btn e-small", style: { float: 'right', margin: '4px' }, onClick: _this.sendMessage }),
                React.createElement("button", { id: "cancelMessage", className: "e-btn e-secondary e-icons e-trash e-icon-btn e-small", style: { float: 'right', margin: '4px' }, onClick: _this.cancelMessage })));
        };
        _this.isValidContent = function (html) {
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
        _this.sendMessage = function () {
            var _a;
            if (_this.chatRTE && _this.chatRTE.value && _this.chatRTE.value.length > 0) {
                var message = _this.chatRTE.value;
                if (_this.isValidContent(message)) {
                    _this.chatRTE.value = '';
                    _this.chatRTE.dataBind();
                    (_a = _this.chatUIRef.current) === null || _a === void 0 ? void 0 : _a.addMessage({
                        author: _this.currentUserModel,
                        text: message,
                    });
                    _this.chatRTE.clearUndoRedo();
                    _this.chatRTE.focusIn();
                }
            }
        };
        _this.cancelMessage = function () {
            if (_this.chatRTE) {
                _this.chatRTE.value = '';
                _this.chatRTE.dataBind();
                _this.chatRTE.clearUndoRedo();
                _this.chatRTE.focusIn();
            }
        };
        return _this;
    }
    BottomToolbar.prototype.render = function () {
        return (React.createElement("div", { className: "control-section" },
            React.createElement("div", { className: "sample-container" },
                React.createElement("div", { className: "chat-section" },
                    React.createElement(ej2_react_interactive_chat_1.ChatUIComponent, { ref: this.chatUIRef, headerText: "Michale Suyama", headerIconCss: "chat_user2_avatar", messages: this.chatMessages, user: this.currentUserModel, showTimeBreak: true, loadOnDemand: true, messageToolbarSettings: {
                            items: [
                                { type: 'Button', iconCss: 'e-icons e-chat-copy', tooltip: 'Copy' },
                                { type: 'Button', iconCss: 'e-icons e-chat-trash', tooltip: 'Delete' }
                            ]
                        }, footerTemplate: this.footerTemplate })))));
    };
    return BottomToolbar;
}(sample_base_1.SampleBase));
exports.BottomToolbar = BottomToolbar;
