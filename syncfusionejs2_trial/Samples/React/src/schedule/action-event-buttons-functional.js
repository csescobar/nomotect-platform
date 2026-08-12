"use strict";
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
var React = require("react");
var react_1 = require("react");
var ej2_react_schedule_1 = require("@syncfusion/ej2-react-schedule");
require("./action-event-buttons.css");
var ej2_base_1 = require("@syncfusion/ej2-base");
var sample_base_1 = require("../common/sample-base");
var dataSource = require("./datasource.json");
var ActionEventButtons = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var scheduleRef = (0, react_1.useRef)(null);
    var instance = new ej2_base_1.Internationalization();
    var data = (0, ej2_base_1.extend)([], dataSource.actionEventData, null, true);
    var getTimeString = function (value) {
        return instance.formatDate(value, { format: 'HH:mm' });
    };
    var applyCategoryColor = function (categoryColor, args, currentView) {
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
    var editEvent = function (eventData) {
        if (scheduleRef.current) {
            var eventCopy = __assign({}, eventData);
            scheduleRef.current.openEditor(eventCopy, 'Save', true);
        }
    };
    var deleteEvent = function (eventData) {
        if (scheduleRef.current) {
            scheduleRef.current.deleteEvent(eventData);
        }
    };
    var eventTemplate = function (props) {
        return (React.createElement("div", null,
            React.createElement("div", { className: "custom-event" },
                React.createElement("div", { className: "event-subject" },
                    React.createElement("span", { className: "event-title" }, props.Subject)),
                React.createElement("div", { className: "event-actions" },
                    React.createElement("button", { className: "icon-btn", onClick: function (e) {
                            e.stopPropagation();
                            editEvent(props);
                        } },
                        React.createElement("span", { className: "e-icons e-edit" })),
                    React.createElement("button", { className: "icon-btn", onClick: function (e) {
                            e.stopPropagation();
                            deleteEvent(props);
                        } },
                        React.createElement("span", { className: "e-icons e-trash" })))),
            React.createElement("div", { className: "event-time" },
                "Time: ",
                getTimeString(props.StartTime),
                " - ",
                getTimeString(props.EndTime))));
    };
    var onEventRendered = function (args) {
        var eventData = args.data;
        var categoryColor = eventData.CategoryColor;
        applyCategoryColor(categoryColor, args, 'Week');
    };
    return (React.createElement("div", { className: 'schedule-control-section' },
        React.createElement("div", { className: 'col-lg-12 control-section' },
            React.createElement("div", { className: 'control-wrapper action-button' },
                React.createElement(ej2_react_schedule_1.ScheduleComponent, { cssClass: 'action-event-buttons', ref: scheduleRef, width: '100%', height: '650px', selectedDate: new Date(new Date().getFullYear(), 0, 16), eventSettings: { dataSource: data, template: eventTemplate }, eventRendered: onEventRendered },
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
exports.default = ActionEventButtons;
