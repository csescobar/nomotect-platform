"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var sample_base_1 = require("../common/sample-base");
var ej2_react_blockeditor_1 = require("@syncfusion/ej2-react-blockeditor");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
require("./events.css");
var data = require("./blockData.json");
var API = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
        var clearBtn = document.getElementById('clear');
        var handler = function () {
            var log = document.getElementById('eventLog');
            if (log)
                log.innerHTML = '';
        };
        clearBtn === null || clearBtn === void 0 ? void 0 : clearBtn.addEventListener('click', handler);
        return function () { return clearBtn === null || clearBtn === void 0 ? void 0 : clearBtn.removeEventListener('click', handler); };
    }, []);
    // Triggers after the Block Editor is rendered completely
    var created = function () {
        appendElement('BlockEditor <b>created</b> event called<hr>');
    };
    var inlineToolbar = {
        itemClick: function (args) {
            // Log specific inline toolbar item click event to event log
            appendElement("BlockEditor inline toolbar <b>".concat(args.item.command, "</b> clicked<hr>"));
        }
    };
    // Handles the blockChange event by logging details of changes made to the blocks, including insertions, deletions, movements, and updates
    var blockChangeEvent = function (args) {
        var changesCount = args.changes.length;
        if (changesCount === 0)
            return;
        var actionCounts = {};
        args.changes.forEach(function (change) {
            actionCounts[change.action] = (actionCounts[change.action] || 0) + 1;
        });
        var messages = [];
        var plural = function (count, noun) {
            return count === 1 ? "".concat(count, " ").concat(noun) : "".concat(count, " ").concat(noun, "s");
        };
        if (actionCounts.Insertion)
            messages.push("".concat(plural(actionCounts.Insertion, 'block'), " inserted"));
        if (actionCounts.Deletion)
            messages.push("".concat(plural(actionCounts.Deletion, 'block'), " deleted"));
        if (actionCounts.Moved)
            messages.push("".concat(plural(actionCounts.Moved, 'block'), " moved"));
        if (actionCounts.Update)
            messages.push("".concat(plural(actionCounts.Update, 'block'), " updated"));
        appendElement("BlockEditor <b>blockChanged</b> event called: ".concat(messages.join(', '), "<hr>"));
    };
    // Triggers when the selection in the block editor changes
    var selectionChanged = function () {
        appendElement('BlockEditor <b>selectionChanged</b> event called<hr>');
    };
    // Triggers during the dragging operation of a block
    var blockDragging = function () {
        appendElement('BlockEditor <b>blockDragging</b> event called<hr>');
    };
    // Triggers when the drag operation for a block starts
    var blockDragStart = function () {
        appendElement('BlockEditor <b>blockDragStart</b> event called<hr>');
    };
    // Triggers when a block is dropped after a drag operation
    var blockDropped = function () {
        appendElement('BlockEditor <b>blockDropped</b> event called<hr>');
    };
    // Triggers when the block editor gains focus
    var focusEvent = function () {
        appendElement('BlockEditor <b>focus</b> event called<hr>');
    };
    // Triggers when the block editor loses focus
    var blurEvent = function () {
        appendElement('BlockEditor <b>blur</b> event called<hr>');
    };
    // Triggers before pasting the content in the block editor
    var beforePaste = function () {
        appendElement('BlockEditor <b>beforePaste</b> event called<hr>');
    };
    // Triggers after pasting the content in the block editor
    var afterPaste = function () {
        appendElement('BlockEditor <b>afterPaste</b> event called<hr>');
    };
    // Appends an HTML element to the event log panel
    var appendElement = function (html) {
        var span = document.createElement('span');
        span.innerHTML = html;
        var log = document.getElementById('eventLog');
        if (log)
            log.insertBefore(span, log.firstChild);
    };
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: "col-lg-8 control-section" },
            React.createElement("div", { className: "blockeditor-events" },
                React.createElement("div", { id: "events-blockeditor" }),
                React.createElement(ej2_react_blockeditor_1.BlockEditorComponent, { id: 'events-blockeditor', blocks: data["blockDataEvents"], height: "600px", created: created, blockChanged: blockChangeEvent, blockDragStart: blockDragStart, blockDragging: blockDragging, blockDropped: blockDropped, focus: focusEvent, blur: blurEvent, selectionChanged: selectionChanged, beforePasteCleanup: beforePaste, afterPasteCleanup: afterPaste, inlineToolbarSettings: inlineToolbar }))),
        React.createElement("div", { className: "col-lg-4 property-section" },
            React.createElement("div", { className: "property-panel-header" }, " Properties "),
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
exports.default = API;
