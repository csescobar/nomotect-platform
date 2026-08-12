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
exports.API = void 0;
var React = require("react");
var ej2_react_blockeditor_1 = require("@syncfusion/ej2-react-blockeditor");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
require("./events.css");
var data = require("./blockData.json");
var sample_base_1 = require("../common/sample-base");
var API = /** @class */ (function (_super) {
    __extends(API, _super);
    function API() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Triggers after the Block Editor is rendered completely
        _this.created = function () {
            _this.appendElement('BlockEditor <b>created</b> event called<hr>');
        };
        _this.inlineToolbar = {
            itemClick: function (args) {
                // Log specific inline toolbar item click event to event log
                _this.appendElement("BlockEditor inline toolbar <b>".concat(args.item.command, "</b> clicked<hr>"));
            }
        };
        // Handles the blockChange event by logging details of changes made to the blocks, including insertions, deletions, movements, and updates
        _this.blockChangeEvent = function (args) {
            var changesCount = args.changes.length;
            if (changesCount === 0)
                return;
            var actionCounts = {};
            args.changes.forEach(function (change) {
                actionCounts[change.action] = (actionCounts[change.action] || 0) + 1;
            });
            var messages = [];
            var plural = function (count, noun) { return (count === 1 ? "".concat(count, " ").concat(noun) : "".concat(count, " ").concat(noun, "s")); };
            if (actionCounts.Insertion)
                messages.push("".concat(plural(actionCounts.Insertion, 'block'), " inserted"));
            if (actionCounts.Deletion)
                messages.push("".concat(plural(actionCounts.Deletion, 'block'), " deleted"));
            if (actionCounts.Moved)
                messages.push("".concat(plural(actionCounts.Moved, 'block'), " moved"));
            if (actionCounts.Update)
                messages.push("".concat(plural(actionCounts.Update, 'block'), " updated"));
            var logMessage = "BlockEditor <b>blockChanged</b> event called: ".concat(messages.join(', '), "<hr>");
            _this.appendElement(logMessage);
        };
        // Triggers when the selection in the block editor changes
        _this.selectionChanged = function () {
            _this.appendElement('BlockEditor <b>selectionChanged</b> event called<hr>');
        };
        // Triggers when the drag operation for a block starts
        _this.blockDragStart = function () {
            _this.appendElement('BlockEditor <b>blockDragStart</b> event called<hr>');
        };
        // Triggers during the dragging operation of a block
        _this.blockDragging = function () {
            _this.appendElement('BlockEditor <b>blockDragging</b> event called<hr>');
        };
        // Triggers when a block is dropped after a drag operation
        _this.blockDropped = function () {
            _this.appendElement('BlockEditor <b>blockDropped</b> event called<hr>');
        };
        // Triggers when the block editor gains focus
        _this.focusEvent = function () {
            _this.appendElement('BlockEditor <b>focus</b> event called<hr>');
        };
        // Triggers when the block editor loses focus
        _this.blurEvent = function () {
            _this.appendElement('BlockEditor <b>blur</b> event called<hr>');
        };
        // Triggers before pasting the content in the block editor
        _this.beforePaste = function () {
            _this.appendElement('BlockEditor <b>beforePaste</b> event called<hr>');
        };
        // Triggers after pasting the content in the block editor
        _this.afterPaste = function () {
            _this.appendElement('BlockEditor <b>afterPaste</b> event called<hr>');
        };
        // Appends an HTML element to the event log panel
        _this.appendElement = function (html) {
            var span = document.createElement('span');
            span.innerHTML = html;
            var log = document.getElementById('eventLog');
            if (log)
                log.insertBefore(span, log.firstChild);
        };
        return _this;
    }
    // Sets up the clear button event listener after the component mounts
    API.prototype.componentDidMount = function () {
        var _a;
        (_a = document.getElementById('clear')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
            var el = document.getElementById('eventLog');
            if (el)
                el.innerHTML = '';
        });
    };
    API.prototype.render = function () {
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: "col-lg-8 control-section" },
                React.createElement("div", { className: "blockeditor-events" },
                    React.createElement("div", { id: "events-blockeditor" }),
                    React.createElement(ej2_react_blockeditor_1.BlockEditorComponent, { id: 'events-blockeditor', height: "600px", blocks: data["blockDataEvents"], created: this.created.bind(this), blockChanged: this.blockChangeEvent.bind(this), blockDragStart: this.blockDragStart.bind(this), blockDragging: this.blockDragging.bind(this), blockDropped: this.blockDropped.bind(this), focus: this.focusEvent.bind(this), blur: this.blurEvent.bind(this), selectionChanged: this.selectionChanged.bind(this), beforePasteCleanup: this.beforePaste.bind(this), afterPasteCleanup: this.afterPaste.bind(this), inlineToolbarSettings: this.inlineToolbar }))),
            React.createElement("div", { className: "col-lg-4 property-section" },
                React.createElement("table", { id: "property", title: "Event Trace", className: "property-panel-table" },
                    React.createElement("tbody", null,
                        React.createElement("tr", null,
                            React.createElement("td", null,
                                React.createElement("div", { className: "eventarea", style: { height: "245px", overflow: "auto" } },
                                    React.createElement("span", { id: "eventLog", style: { wordBreak: "normal" } })))),
                        React.createElement("tr", null,
                            React.createElement("td", null,
                                React.createElement("div", { className: "evtbtn", style: { paddingBottom: "10px" } },
                                    React.createElement(ej2_react_buttons_1.ButtonComponent, { id: 'clear', content: 'Clear' }))))))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates the events that trigger on every action of the Block Editor. The event details are showcased in the event trace panel.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null, "The Block Editor triggers events based on its actions. These events can be used as extension points to perform custom operations."),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement("code", null, "created"),
                        " - Triggers after the Block Editor is rendered completely."),
                    React.createElement("li", null,
                        React.createElement("code", null, "blockChanged"),
                        " - Triggers when the editor blocks are changed. This event provides details about the changes made to the blocks, including insertions, deletions, movements, and updates."),
                    React.createElement("li", null,
                        React.createElement("code", null, "selectionChanged"),
                        " - Triggers when the selection in the block editor changes."),
                    React.createElement("li", null,
                        React.createElement("code", null, "blockDragging"),
                        " - Triggers during the dragging operation of a block."),
                    React.createElement("li", null,
                        React.createElement("code", null, "blockDragStart"),
                        " - Triggers when the drag operation for a block starts."),
                    React.createElement("li", null,
                        React.createElement("code", null, "blockDropped"),
                        " - Triggers when a block is dropped after a drag operation."),
                    React.createElement("li", null,
                        React.createElement("code", null, "focus"),
                        " - Triggers when the block editor gains focus."),
                    React.createElement("li", null,
                        React.createElement("code", null, "blur"),
                        " - Triggers when the block editor loses focus."),
                    React.createElement("li", null,
                        React.createElement("code", null, "beforePasteCleanup"),
                        " - Triggers before pasting the content in the block editor."),
                    React.createElement("li", null,
                        React.createElement("code", null, "afterPasteCleanup"),
                        " - Triggers after pasting the content in the block editor.")))));
    };
    return API;
}(sample_base_1.SampleBase));
exports.API = API;
