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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionEventButtons = void 0;
var React = require("react");
var ej2_react_schedule_1 = require("@syncfusion/ej2-react-schedule");
require("./action-event-buttons.css");
var ej2_base_1 = require("@syncfusion/ej2-base");
var sample_base_1 = require("../common/sample-base");
var dataSource = require("./datasource.json");
var ActionEventButtons = /** @class */ (function (_super) {
    __extends(ActionEventButtons, _super);
    function ActionEventButtons() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.instance = new ej2_base_1.Internationalization();
        _this.data = (0, ej2_base_1.extend)([], dataSource.actionEventData, null, true);
        _this.editEvent = function (eventData) {
            if (_this.scheduleObj) {
                var eventCopy = __assign({}, eventData);
                _this.scheduleObj.openEditor(eventCopy, 'Save', true);
            }
        };
        _this.deleteEvent = function (eventData) {
            if (_this.scheduleObj) {
                _this.scheduleObj.deleteEvent(eventData);
            }
        };
        _this.eventTemplate = function (props) {
            return (React.createElement("div", null,
                React.createElement("div", { className: "custom-event" },
                    React.createElement("div", { className: "event-subject" },
                        React.createElement("span", { className: "event-title" }, props.Subject)),
                    React.createElement("div", { className: "event-actions" },
                        React.createElement("button", { className: "icon-btn", onClick: function (e) {
                                e.stopPropagation();
                                _this.editEvent(props);
                            } },
                            React.createElement("span", { className: "e-icons e-edit" })),
                        React.createElement("button", { className: "icon-btn", onClick: function (e) {
                                e.stopPropagation();
                                _this.deleteEvent(props);
                            } },
                            React.createElement("span", { className: "e-icons e-trash" })))),
                React.createElement("div", { className: "event-time" },
                    "Time: ",
                    _this.getTimeString(props.StartTime),
                    " - ",
                    _this.getTimeString(props.EndTime))));
        };
        _this.onEventRendered = function (args) {
            var eventData = args.data;
            var categoryColor = eventData.CategoryColor;
            _this.applyCategoryColor(categoryColor, args, 'Week');
        };
        return _this;
    }
    ActionEventButtons.prototype.getTimeString = function (value) {
        return this.instance.formatDate(value, { format: 'HH:mm' });
    };
    ActionEventButtons.prototype.applyCategoryColor = function (categoryColor, args, currentView) {
        if (!args.element || !categoryColor) {
            return;
        }
        if (currentView === 'Agenda') {
            args.element.firstChild.style.borderLeftColor = categoryColor;
        }
        else {
            args.element.style.backgroundColor = categoryColor;
        }
    };
    ActionEventButtons.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'schedule-control-section' },
            React.createElement("div", { className: 'col-lg-12 control-section' },
                React.createElement("div", { className: 'control-wrapper action-button' },
                    React.createElement(ej2_react_schedule_1.ScheduleComponent, { cssClass: 'action-event-buttons', ref: function (schedule) { return _this.scheduleObj = schedule; }, width: '100%', height: '650px', selectedDate: new Date(new Date().getFullYear(), 0, 16), eventSettings: { dataSource: this.data, template: this.eventTemplate.bind(this) }, eventRendered: this.onEventRendered },
                        React.createElement(ej2_react_schedule_1.ViewsDirective, null,
                            React.createElement(ej2_react_schedule_1.ViewDirective, { option: 'Day' }),
                            React.createElement(ej2_react_schedule_1.ViewDirective, { option: 'Week' })),
                        React.createElement(ej2_react_schedule_1.Inject, { services: [ej2_react_schedule_1.Day, ej2_react_schedule_1.Week, ej2_react_schedule_1.Resize, ej2_react_schedule_1.DragAndDrop] })))),
            React.createElement("div", { id: 'action-description' },
                React.createElement("p", null, "This demo showcases the event action buttons for editing and deleting events in day and week views. Click the edit or delete icons to manage your events.")),
            React.createElement("div", { id: 'description' },
                React.createElement("p", null,
                    "In this demo, we have implemented custom event templates with action buttons for each event displayed in the Scheduler. These action buttons allow users to edit or delete events directly from the event cells. When the Edit button is clicked, the event editor is opened using the ",
                    React.createElement("code", null, "openEditor"),
                    " method. When the Delete button is clicked, the selected event is removed using the ",
                    React.createElement("code", null, "deleteEvent"),
                    " method."),
                React.createElement("p", null,
                    "Looking for the full React Scheduler component overview, features, pricing, and documentation? Visit our ",
                    React.createElement("a", { target: "_blank", href: "https://www.syncfusion.com/react-components/react-scheduler" }, "React Scheduler"),
                    " component page."))));
    };
    return ActionEventButtons;
}(sample_base_1.SampleBase));
exports.ActionEventButtons = ActionEventButtons;
