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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.API = void 0;
var React = require("react");
var ej2_react_interactive_chat_1 = require("@syncfusion/ej2-react-interactive-chat");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var sample_base_1 = require("../common/sample-base");
require("./api.css");
var data = require("./messageData.json");
var property_pane_1 = require("../common/property-pane");
var API = /** @class */ (function (_super) {
    __extends(API, _super);
    function API() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mentionUsersData = {
            "Alice Brown": data["communityMessageAdmin"],
            "Michale Suyama": data["communityMessageUser1"],
            "Charlie": data["communityMessageUser2"],
            "Janet": data["communityMessageUser3"],
            "Jordan Peele": data["communityMessageUser4"],
        };
        _this.handleSwitchChange = function (property, checked) {
            _this.chatUiInst[property] = checked;
        };
        _this.handleDropDownChange = function (property, value) {
            _this.chatUiInst[property] = value;
        };
        _this.handleMultiSelectChange = function (args, action, type) {
            if (type === 'typingUsers') {
                var user = { user: args.itemData, avatarBgColor: '#87cefa' };
                if (['Laura', 'Charlie'].includes(args.itemData)) {
                    user.avatarBgColor = args.itemData === 'Charlie' ? '#e6cdde' : '#dec287';
                    user.avatarUrl = "https://ej2.syncfusion.com/react/demos/src/chat-ui/images/".concat(args.itemData.toLowerCase(), ".png");
                }
                if (action === 'select') {
                    _this.chatUiInst.typingUsers = __spreadArray(__spreadArray([], _this.chatUiInst.typingUsers, true), [user], false);
                }
                else {
                    _this.chatUiInst.typingUsers = _this.chatUiInst.typingUsers.filter(function (user) { return user.user !== args.itemData; });
                }
            }
            else if (type === 'mentionUsers') {
                var user = _this.mentionUsersData[args.itemData.value];
                if (action === 'select') {
                    _this.chatUiInst.mentionUsers = __spreadArray(__spreadArray([], _this.chatUiInst.mentionUsers, true), [user], false);
                    _this.chatUiInst.dataBind();
                }
                else if (action === 'removed') {
                    _this.chatUiInst.mentionUsers = _this.chatUiInst.mentionUsers.filter(function (user) { return user.user !== args.itemData.value; });
                    _this.chatUiInst.dataBind();
                }
            }
        };
        return _this;
    }
    API.prototype.render = function () {
        var _this = this;
        // Parse the date strings in the JSON data to Date objects
        var messages = data["communityMessagedata"].map(function (message) { return (__assign(__assign({}, message), { timeStamp: (message.timeStamp ? new Date(message.timeStamp) : new Date()) })); });
        var messageToolbarSettings = {
            items: [
                { type: 'Button', iconCss: 'e-icons e-chat-forward', tooltip: 'Forward' },
                { type: 'Button', iconCss: 'e-icons e-chat-copy', tooltip: 'Copy' },
                { type: 'Button', iconCss: 'e-icons e-chat-reply', tooltip: 'Reply' },
                { type: 'Button', iconCss: 'e-icons e-chat-pin', tooltip: 'Pin' },
                { type: 'Button', iconCss: 'e-icons e-chat-trash', tooltip: 'Delete' }
            ],
            itemClicked: function (args) {
                var _a, _b;
                if (args.item.prefixIcon === 'e-icons e-chat-forward') {
                    var newMessageObj = {
                        id: 'chat-message-' + (((_a = _this.chatUiInst) === null || _a === void 0 ? void 0 : _a.messages.length) + 1).toString(),
                        isForwarded: true,
                        isPinned: args.message.isPinned,
                        author: args.message.author,
                        mentionUsers: args.message.mentionUsers,
                        text: args.message.text,
                        timeStamp: args.message.timeStamp,
                        timeStampFormat: args.message.timeStampFormat,
                        status: args.message.status,
                        replyTo: args.message.replyTo
                    };
                    (_b = _this.chatUiInst) === null || _b === void 0 ? void 0 : _b.addMessage(newMessageObj);
                }
            }
        };
        var initialMentionUsers = Object.values(this.mentionUsersData);
        // Data source for mentionUsers dropdown
        var mentionUsersList = Object.keys(this.mentionUsersData);
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: "col-lg-8 control-section" },
                React.createElement("div", { className: "api-chatui" },
                    React.createElement(ej2_react_interactive_chat_1.ChatUIComponent, { messages: messages, user: { user: 'Alice', id: 'admin' }, mentionUsers: initialMentionUsers, headerIconCss: "chat_header_icon", headerText: "Design Community", showTimeBreak: true, timeStampFormat: "MM/dd hh:mm a", messageToolbarSettings: messageToolbarSettings, ref: function (chatUI) { return (_this.chatUiInst = chatUI); } }))),
            React.createElement("div", { className: "col-lg-4 property-section chat-property-section" },
                React.createElement(property_pane_1.PropertyPane, { title: 'Properties' },
                    React.createElement("table", { id: "property", title: "Properties" },
                        React.createElement("tbody", null,
                            React.createElement("tr", null,
                                React.createElement("td", null,
                                    React.createElement("div", null, "Timestamp format")),
                                React.createElement("td", { style: { paddingRight: "10px" } },
                                    React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { id: "chat_dateformats", dataSource: ['MM/dd hh:mm a', 'dd/MM/yy hh:mm a', 'hh:mm a', 'MMMM hh:mm a'], placeholder: "Format", width: "180px", change: function (e) { return _this.handleDropDownChange('timeStampFormat', e.itemData.value); } }))),
                            React.createElement("tr", null,
                                React.createElement("td", null,
                                    React.createElement("div", null, "Show timeStamp")),
                                React.createElement("td", { style: { paddingRight: "10px" } },
                                    React.createElement(ej2_react_buttons_1.SwitchComponent, { id: "chatTimestamp", checked: true, change: function (e) { return _this.handleSwitchChange('showTimeStamp', e.checked); } }))),
                            React.createElement("tr", null,
                                React.createElement("td", null,
                                    React.createElement("div", null, "Show timeBreak")),
                                React.createElement("td", { style: { paddingRight: "10px" } },
                                    React.createElement(ej2_react_buttons_1.SwitchComponent, { id: "chatTimebreak", checked: true, change: function (e) { return _this.handleSwitchChange('showTimeBreak', e.checked); } }))),
                            React.createElement("tr", null,
                                React.createElement("td", null,
                                    React.createElement("div", null, "Show header")),
                                React.createElement("td", { style: { paddingRight: "10px" } },
                                    React.createElement(ej2_react_buttons_1.SwitchComponent, { id: "chatHeader", checked: true, change: function (e) { return _this.handleSwitchChange('showHeader', e.checked); } }))),
                            React.createElement("tr", null,
                                React.createElement("td", null,
                                    React.createElement("div", null, "Show footer")),
                                React.createElement("td", { style: { paddingRight: "10px" } },
                                    React.createElement(ej2_react_buttons_1.SwitchComponent, { id: "chatFooter", checked: true, change: function (e) { return _this.handleSwitchChange('showFooter', e.checked); } }))),
                            React.createElement("tr", null,
                                React.createElement("td", null,
                                    React.createElement("div", null, "Compact mode")),
                                React.createElement("td", { style: { paddingRight: "10px" } },
                                    React.createElement(ej2_react_buttons_1.SwitchComponent, { id: "compactmode", checked: false, change: function (e) { return _this.handleSwitchChange('enableCompactMode', e.checked); } }))),
                            React.createElement("tr", null,
                                React.createElement("td", null,
                                    React.createElement("div", null, "Typing users")),
                                React.createElement("td", { style: { paddingRight: "10px" } },
                                    React.createElement(ej2_react_dropdowns_1.MultiSelectComponent, { id: "chat_typingUsers", dataSource: ['Michale', 'Laura', 'Charlie'], placeholder: "Typing users...", select: function (e) { return _this.handleMultiSelectChange(e, 'select', 'typingUsers'); }, removed: function (e) { return _this.handleMultiSelectChange(e, 'removed', 'typingUsers'); } }))),
                            React.createElement("tr", null,
                                React.createElement("td", null,
                                    React.createElement("div", null, "Mention users")),
                                React.createElement("td", { style: { paddingRight: "10px" } },
                                    React.createElement(ej2_react_dropdowns_1.MultiSelectComponent, { id: "chat_mentionUsers", dataSource: mentionUsersList, placeholder: "Mention users...", value: mentionUsersList, select: function (e) { return _this.handleMultiSelectChange(e, 'select', 'mentionUsers'); }, removed: function (e) { return _this.handleMultiSelectChange(e, 'removed', 'mentionUsers'); } }))))))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates the properties available in the Chat UI component, showcasing how various features can be customized through the property pane. It highlights the flexibility of the control, allowing users to adjust timestamps, headers, footers, time breaks, and more.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null, "In this sample, the following APIs and properties are demonstrated for customization:"),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/chat-ui/#timestampformat" }, "timeStampFormat"),
                        ": Allows users to change the timestamp format by selecting an option from the property pane."),
                    React.createElement("li", null,
                        React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/chat-ui/#showtimestamp" }, "showTimeStamp"),
                        ": Controls whether the timestamp is displayed in the chat, toggled via the property pane ",
                        React.createElement("code", null, "showTimeStamp"),
                        " property."),
                    React.createElement("li", null,
                        React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/chat-ui/#showtimebreak" }, "showTimeBreak"),
                        ": Enables or disables the display of time breaks in the chat interface."),
                    React.createElement("li", null,
                        React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/chat-ui/#showheader" }, "showHeader"),
                        ": Lets users toggle the visibility of the chat header."),
                    React.createElement("li", null,
                        React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/chat-ui/#showfooter" }, "showFooter"),
                        ": Toggles the visibility of the chat footer."),
                    React.createElement("li", null,
                        React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/chat-ui/#enablecompactmode" }, "enableCompactMode"),
                        ": Reduces spacing and left-aligns all messages to display more content within the visible chat area. "),
                    React.createElement("li", null,
                        React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/chat-ui/#typingusers" }, "typingUsers"),
                        ": Allows users to manage the list of users who are typing, updated through the multi-select options in the property pane."),
                    React.createElement("li", null,
                        React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/chat-ui/#mentionusers" }, "mentionUsers"),
                        ": Configurable list of users that can be tagged using '@' in chat messages."),
                    React.createElement("li", null,
                        React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/chat-ui/#statusiconcss" }, "statusIconCss"),
                        ": Defines a CSS class for the status bar icon, with built-in styles for Online, Offline, Away, and Busy statuses, while allowing further customization."),
                    React.createElement("li", null,
                        React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/chat-ui/#messagetoolbarsettings" }, "messageToolbarSettings"),
                        ": Configures the toolbar that appears on individual messages, allowing customization such as copy, forward, reply, pin and delete. Supports adding, removing, or reordering toolbar items based on application needs.")),
                React.createElement("p", null, "These properties can be adjusted via the property pane for a highly flexible and customizable chat experience."))));
    };
    return API;
}(sample_base_1.SampleBase));
exports.API = API;
