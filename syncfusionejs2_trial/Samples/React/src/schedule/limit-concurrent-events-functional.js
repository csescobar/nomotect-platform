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
var ej2_base_1 = require("@syncfusion/ej2-base");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var ej2_react_inputs_1 = require("@syncfusion/ej2-react-inputs");
var sample_base_1 = require("../common/sample-base");
var property_pane_1 = require("../common/property-pane");
var dataSource = require("./datasource.json");
require("./limit-concurrent-events.css");
var LimitConcurrentEvents = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var scheduleObj = (0, react_1.useRef)(null);
    var data = (0, ej2_base_1.extend)([], dataSource.overlappingData, null, true);
    var _a = (0, react_1.useState)('limited'), displayMode = _a[0], setDisplayMode = _a[1];
    var _b = (0, react_1.useState)(1), maxEventsLimit = _b[0], setMaxEventsLimit = _b[1];
    var getMaxStack = function () {
        return displayMode === 'all' ? 0 : maxEventsLimit;
    };
    var getEventDataSource = function () {
        var _a;
        var scheduleData = ((_a = scheduleObj.current) === null || _a === void 0 ? void 0 : _a.getEvents()) || [];
        return scheduleData.length > 0 ? scheduleData : data;
    };
    var onDisplayModeChange = function (mode) {
        setDisplayMode(mode);
        if (mode === 'all') {
            scheduleObj.current.activeViewOptions.maxEventStack = 0;
        }
        else {
            scheduleObj.current.activeViewOptions.maxEventStack = maxEventsLimit;
        }
        scheduleObj.current.refreshEvents();
    };
    var onLimitChange = function (value) {
        setMaxEventsLimit(value);
        scheduleObj.current.activeViewOptions.maxEventStack = value;
        scheduleObj.current.refreshEvents();
    };
    var applyMaxStackToAllViews = function (value) {
        if (!scheduleObj.current)
            return;
        var currentViews = scheduleObj.current.views;
        var updatedViews = currentViews.map(function (view) { return (__assign(__assign({}, view), { maxEventStack: value })); });
        scheduleObj.current.setProperties({ views: updatedViews }, true);
        scheduleObj.current.dataBind();
        scheduleObj.current.refreshEvents();
    };
    var onNavigating = function (args) {
        if (args.action == "view") {
            var value = displayMode === 'all' ? 0 : maxEventsLimit;
            applyMaxStackToAllViews(value);
        }
    };
    return (React.createElement("div", { className: 'schedule-control-section' },
        React.createElement("div", { className: 'col-lg-8 control-section' },
            React.createElement("div", { className: 'control-wrapper' },
                React.createElement(ej2_react_schedule_1.ScheduleComponent, { cssClass: 'schedule-limit-concurrent', ref: scheduleObj, width: '100%', height: '650px', currentView: 'Week', selectedDate: new Date(2026, 4, 29), eventSettings: { dataSource: getEventDataSource() }, navigating: onNavigating },
                    React.createElement(ej2_react_schedule_1.ViewsDirective, null,
                        React.createElement(ej2_react_schedule_1.ViewDirective, { option: 'Day', maxEventStack: getMaxStack() }),
                        React.createElement(ej2_react_schedule_1.ViewDirective, { option: 'Week', maxEventStack: getMaxStack() }),
                        React.createElement(ej2_react_schedule_1.ViewDirective, { option: 'WorkWeek', maxEventStack: getMaxStack() })),
                    React.createElement(ej2_react_schedule_1.Inject, { services: [ej2_react_schedule_1.Day, ej2_react_schedule_1.Week, ej2_react_schedule_1.WorkWeek, ej2_react_schedule_1.Resize, ej2_react_schedule_1.DragAndDrop] })))),
        React.createElement("div", { className: 'col-lg-4 property-section', style: { padding: '15px' } },
            React.createElement(property_pane_1.PropertyPane, { title: 'Properties' },
                React.createElement("div", { style: { display: 'flex', alignItems: 'center', height: '70px' } },
                    React.createElement("label", { style: { display: 'flex', alignItems: 'center', cursor: 'pointer' } },
                        React.createElement(ej2_react_buttons_1.RadioButtonComponent, { cssClass: "schedule-radio-button", name: "eventDisplay", value: "all", checked: displayMode === 'all', change: function () { return onDisplayModeChange('all'); } }),
                        React.createElement("span", { style: { fontSize: '16px', marginLeft: '30px' } },
                            React.createElement("b", null, "Show all events")))),
                React.createElement("div", { style: { display: 'flex', alignItems: 'center', height: '70px' } },
                    React.createElement("div", { style: { display: 'flex', alignItems: 'center' } },
                        React.createElement(ej2_react_buttons_1.RadioButtonComponent, { cssClass: "schedule-radio-button", name: "eventDisplay", value: "limited", checked: displayMode === 'limited', change: function () { return onDisplayModeChange('limited'); } })),
                    React.createElement("div", { style: {
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: '16px',
                            marginLeft: '30px',
                            gap: '6px'
                        } },
                        React.createElement("b", null, "Show up to"),
                        React.createElement(ej2_react_inputs_1.NumericTextBoxComponent, { value: maxEventsLimit, min: 1, width: "110px", format: "n0", enabled: displayMode === 'limited', change: function (e) { return onLimitChange(e.value); } }),
                        React.createElement("b", null, "labels"))))),
        React.createElement("div", { id: 'action-description' },
            React.createElement("p", null, "This demo illustrates how to limit the number of concurrent events displayed within a single time slot on the Scheduler component.")),
        React.createElement("div", { id: 'description' },
            React.createElement("p", null,
                "In this demo, the ",
                React.createElement("code", null, "maxEventStack"),
                " property allows you to control how many events are visible at a time within each time slot. When multiple events overlap and exceed the specified limit, a \"+N\" indicator appears, showing how many additional events exist. Users can click on this indicator to view remaining events in a popup window."),
            React.createElement("p", null, "Use the options below to customize the event display:"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    "Select ",
                    React.createElement("strong", null, "\"Show all events\""),
                    " to display all events"),
                React.createElement("li", null,
                    "Select ",
                    React.createElement("strong", null, "\"Show up to N labels\""),
                    " to set a maximum limit for visible events per time slot"),
                React.createElement("li", null, "Modify the numeric value to adjust how many events display before the \"+N\" indicator appears")),
            React.createElement("p", null,
                "The ",
                React.createElement("code", null, "maxEventStack"),
                " property is applicable only with Day, Week, and WorkWeek views when the timeScale option is enabled."),
            React.createElement("p", null,
                "Looking for the full React Scheduler component overview, features, pricing, and documentation? Visit our ",
                React.createElement("a", { target: "_blank", href: "https://www.syncfusion.com/react-components/react-scheduler" }, "React Scheduler"),
                " component page."))));
};
exports.default = LimitConcurrentEvents;
