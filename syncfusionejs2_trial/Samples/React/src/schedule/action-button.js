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
exports.ActionButton = void 0;
var React = require("react");
require("./action-button.css");
var ej2_react_navigations_1 = require("@syncfusion/ej2-react-navigations");
var ej2_react_schedule_1 = require("@syncfusion/ej2-react-schedule");
var ej2_react_calendars_1 = require("@syncfusion/ej2-react-calendars");
var ej2_react_lists_1 = require("@syncfusion/ej2-react-lists");
var dataSource = require("./datasource.json");
var ej2_react_popups_1 = require("@syncfusion/ej2-react-popups");
var ej2_react_inputs_1 = require("@syncfusion/ej2-react-inputs");
var base_1 = require("@syncfusion/ej2/base");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var sample_base_1 = require("../common/sample-base");
var ActionButton = /** @class */ (function (_super) {
    __extends(ActionButton, _super);
    function ActionButton(props) {
        var _this = _super.call(this, props) || this;
        _this.scheduleObj = React.createRef();
        _this.calendarSidebarObj = React.createRef();
        _this.colorPickerObj = React.createRef();
        _this.calendarObj = React.createRef();
        _this.calendarsListObj = React.createRef();
        _this.dialogObj = React.createRef();
        _this.toolbarObj = React.createRef();
        _this.calendarNameObj = React.createRef();
        _this.saveButtonRef = React.createRef();
        _this.calendars = [
            { name: "My Calendar", id: 1, color: "#c43081", isSelected: true },
            { name: "Company", id: 2, color: "#ff7f50", isSelected: true },
            { name: "Birthday", id: 3, color: "#AF27CD", isSelected: true },
            { name: "Holiday", id: 4, color: "#808000", isSelected: true }
        ];
        _this.fields = { text: "name", value: "id" };
        _this.currentDate = new Date();
        _this.resourceData = [
            { name: 'Nancy', id: 1, color: '#df5286' },
            { name: 'Steven', id: 2, color: '#7fa900' },
            { name: 'Robert', id: 3, color: '#ea7a57' },
            { name: 'Smith', id: 4, color: '#5978ee' },
            { name: 'Micheal', id: 5, color: '#df5286' },
            { name: 'Root', id: 6, color: '#00bdae' }
        ];
        _this.onCalendarListChange = function (args) {
            var _a;
            if ((_a = args === null || args === void 0 ? void 0 : args.event) === null || _a === void 0 ? void 0 : _a.target) {
                var target = args.event.target;
                if (target.classList.contains('e-edit')) {
                    args.cancel = true;
                    _this.openDialog(args, 'Save');
                }
                else if (target.classList.contains('e-trash')) {
                    args.cancel = true;
                    _this.removeCalendar(args);
                }
                else {
                    _this.calendarSelection(args);
                }
            }
            else {
                _this.calendarSelection(args);
            }
        };
        _this.openDialog = function (args, action) {
            if (_this.calendarNameObj.current) {
                _this.calendarNameObj.current.value = args.data.name;
                _this.colorPickerObj.current.value = args.data.color;
                _this.saveButtonRef.current.innerHTML = action;
                _this.dialogObj.current.header = "Edit Calendar";
                _this.dialogObj.current.show();
                _this.saveButtonRef.current.onclick = function () {
                    if (_this.calendarNameObj.current) {
                        var newValue_1 = _this.calendarNameObj.current.value.trim();
                        var newColor_1 = _this.colorPickerObj.current.value.trim();
                        if (newValue_1.length > 0) {
                            _this.calendars = _this.calendars.map(function (item) {
                                if (item.name === args.data.name) {
                                    return __assign(__assign({}, item), { name: newValue_1, color: newColor_1 });
                                }
                                return item;
                            });
                            _this.selectedCalendars = _this.getSelectedCalendars();
                            _this.calendarsListObj.current.dataSource = (0, base_1.extend)([], _this.calendars, null, true);
                            _this.scheduleObj.current.refreshEvents();
                            _this.dialogObj.current.hide();
                        }
                    }
                };
            }
        };
        _this.removeCalendar = function (args) {
            _this.calendarsListObj.current.removeItem(args.item);
            _this.calendars = _this.calendars.filter(function (item) { return item.id !== args.data.id; });
            _this.appointmentData = _this.appointmentData.filter(function (item) { return item.CalendarId !== args.data.id; });
            _this.selectedCalendars = _this.getSelectedCalendars();
            _this.filteredData = _this.getFilteredData();
            _this.scheduleObj.current.eventSettings.dataSource = (0, base_1.extend)([], _this.filteredData.planned, null, true);
        };
        _this.updateTextValue = function () {
            if (_this.isAdd) {
                if (_this.calendarNameObj.current) {
                    var newValue = _this.calendarNameObj.current.value.trim();
                    newValue = newValue === "" ? "New Calendar" : newValue;
                    var newId = (_this.calendars.length + 1);
                    var newItem = { name: newValue, id: newId, color: _this.colorPickerObj.current.value, isSelected: true };
                    _this.calendars.push(newItem);
                    _this.selectedCalendars = _this.getSelectedCalendars();
                    _this.calendarsListObj.current.dataSource = (0, base_1.extend)([], _this.calendars, null, true);
                    _this.dialogObj.current.hide();
                }
                _this.isAdd = false;
            }
        };
        _this.onListActionComplete = function () {
            setTimeout(function () {
                if (_this.calendarsListObj.current) {
                    var iconAdd = _this.calendarsListObj.current.element.querySelector(".e-plus");
                    _this.applyBackgroundColors();
                    if (iconAdd) {
                        iconAdd.addEventListener("click", function () {
                            _this.isAdd = true;
                            _this.calendarNameObj.current.value = '';
                            _this.colorPickerObj.current.value = "#008000ff";
                            _this.saveButtonRef.current.innerHTML = "Add";
                            _this.dialogObj.current.show();
                        });
                    }
                }
            }, 200);
        };
        _this.calendarSelection = function (args) {
            var idFromArgs = Number(args.data.id);
            _this.calendars[args.index].isSelected = args.isChecked;
            _this.selectedCalendars = _this.getSelectedCalendars();
            if (args.isChecked) {
                _this.changeCheckboxBackgroundColor(idFromArgs);
            }
            _this.filteredData = _this.getFilteredData();
            _this.scheduleObj.current.eventSettings.dataSource = (0, base_1.extend)([], _this.filteredData.planned, null, true);
        };
        _this.applyBackgroundColors = function () {
            _this.calendars.forEach(function (calendar) {
                var listItem = _this.calendarsListObj.current.element.querySelector("[data-uid=\"".concat(calendar.id, "\"]"));
                if (listItem) {
                    var checkboxFrame = listItem.querySelector(".e-checkbox-wrapper .e-frame.e-check,\n                    .e-css.e-checkbox-wrapper .e-frame.e-check,.e-checkbox-wrapper .e-frame,.e-css.e-checkbox-wrapper .e-frame");
                    if (checkboxFrame) {
                        checkboxFrame.style.backgroundColor = calendar.color;
                        checkboxFrame.style.borderColor = calendar.color;
                    }
                }
            });
        };
        _this.changeCheckboxBackgroundColor = function (idFromArgs) {
            var listItem = document.querySelector("[data-uid=\"".concat(idFromArgs, "\"]"));
            if (listItem) {
                var checkboxFrame = listItem.querySelector('.e-checkbox-wrapper .e-frame.e-check');
                var selectedItem = _this.calendars.find(function (item) { return item.id === idFromArgs; });
                if (checkboxFrame && (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.color)) {
                    checkboxFrame.style.backgroundColor = selectedItem.color;
                    checkboxFrame.style.borderColor = selectedItem.color;
                }
            }
        };
        _this.onToolbarItemClicked = function (args) {
            var _a, _b;
            if (!args.item) {
                return;
            }
            switch (args.item.cssClass) {
                case 'e-menu-btn':
                    _this.calendarSidebarObj.current.toggle();
                    break;
                case 'e-create':
                    if (_this.scheduleObj && _this.calendars.length > 0) {
                        var data = {
                            StartTime: (0, ej2_react_schedule_1.resetTime)(new Date()),
                            EndTime: (0, ej2_react_schedule_1.resetTime)((0, ej2_react_schedule_1.addDays)(new Date(), 1)),
                            ResourceId: ((_a = _this.selectedCalendars) === null || _a === void 0 ? void 0 : _a.ids[0]) || ((_b = _this.calendars[0]) === null || _b === void 0 ? void 0 : _b.id)
                        };
                        _this.scheduleObj.current.openEditor(data, 'Add', true);
                    }
                    break;
                case 'e-previous':
                    _this.scheduleObj.current.changeDate(_this.scheduleObj.current.activeView.getNextPreviousDate('Previous'));
                    break;
                case 'e-next':
                    _this.scheduleObj.current.changeDate(_this.scheduleObj.current.activeView.getNextPreviousDate('Next'));
                    break;
                case 'e-today':
                    _this.scheduleObj.current.selectedDate = new Date();
                    break;
                case 'e-day':
                    _this.scheduleObj.current.currentView = 'Day';
                    break;
                case 'e-week':
                    _this.scheduleObj.current.currentView = 'Week';
                    break;
                default:
                    break;
            }
        };
        _this.onScheduleActionComplete = function (args) {
            var _a;
            if (args.requestType === 'dateNavigate' || args.requestType === 'viewNavigate') {
                _this.updateDateRange();
                if (args.requestType === 'dateNavigate' && (0, ej2_react_schedule_1.resetTime)((_a = _this.calendarObj.current) === null || _a === void 0 ? void 0 : _a.value) !== (0, ej2_react_schedule_1.resetTime)(_this.scheduleObj.current.selectedDate)) {
                    _this.calendarObj.current.value = _this.scheduleObj.current.selectedDate;
                }
            }
            else if (args.requestType === "eventCreated" || args.requestType === "eventChanged" || args.requestType === "eventRemoved") {
                for (var _i = 0, _b = args.addedRecords; _i < _b.length; _i++) {
                    var event_1 = _b[_i];
                    event_1.IsPlanned = true;
                    _this.appointmentData.push(event_1);
                }
                var _loop_1 = function (event_2) {
                    var index = _this.appointmentData.findIndex(function (item) { return item.Id === event_2.Id; });
                    _this.appointmentData[index] = event_2;
                };
                for (var _c = 0, _d = args.changedRecords; _c < _d.length; _c++) {
                    var event_2 = _d[_c];
                    _loop_1(event_2);
                }
                var _loop_2 = function (event_3) {
                    var index = _this.appointmentData.findIndex(function (item) { return item.Id === event_3.Id; });
                    _this.appointmentData.splice(index, 1);
                };
                for (var _e = 0, _f = args.deletedRecords; _e < _f.length; _e++) {
                    var event_3 = _f[_e];
                    _loop_2(event_3);
                }
                var events = args.addedRecords.concat(args.changedRecords);
                var _loop_3 = function (event_4) {
                    var calendar = _this.selectedCalendars.items.find(function (item) { return item.id === event_4.CalendarId; });
                    if ((0, base_1.isNullOrUndefined)(calendar)) {
                        calendar = _this.calendars.find(function (item) { return item.id === event_4.CalendarId; });
                        calendar.isSelected = true;
                        _this.selectedCalendars = _this.getSelectedCalendars();
                        _this.filteredData = _this.getFilteredData();
                        _this.calendarsListObj.current.dataSource = (0, base_1.extend)([], _this.calendars, null, true);
                        _this.scheduleObj.current.eventSettings.dataSource = (0, base_1.extend)([], _this.filteredData.planned, null, true);
                    }
                };
                for (var _g = 0, events_1 = events; _g < events_1.length; _g++) {
                    var event_4 = events_1[_g];
                    _loop_3(event_4);
                }
            }
        };
        _this.updateDateRange = function () {
            var dateRange = '';
            if (_this.scheduleObj.current) {
                var dateCollection = _this.scheduleObj.current.getCurrentViewDates();
                dateRange = _this.scheduleObj.current.getDateRangeText(dateCollection);
                if (dateRange !== '' && _this.toolbarObj) {
                    var dateRangeElement = _this.toolbarObj.current.element.querySelector('.e-date-range .e-tbar-btn-text');
                    _this.toolbarObj.current.element.querySelector('.e-date-range .e-tbar-btn').setAttribute('aria-label', dateRange);
                    dateRangeElement.textContent = dateRange;
                }
            }
        };
        _this.valueChange = function (args) {
            if ((args === null || args === void 0 ? void 0 : args.isInteracted) && _this.scheduleObj) {
                _this.scheduleObj.current.selectedDate = args.value;
            }
        };
        _this.listTemplate = function (data) {
            return (React.createElement("div", { className: "calendar-list-item" },
                React.createElement("div", { className: "calendar-name", title: data.name }, data.name),
                data.id !== 1 && (React.createElement("div", { className: "calendar-buttons" },
                    React.createElement("span", { id: "calendar-edit-btn", className: "e-icons e-edit", "data-calendar-id": data.id }),
                    React.createElement("span", { id: "calendar-delete-btn", className: "e-icons e-trash", "data-calendar-id": data.id })))));
        };
        _this.listHeaderTemplate = function () {
            return (React.createElement("div", { className: "calendars-list-header" },
                React.createElement("div", { className: "header-text" }, "Calendars"),
                React.createElement("div", { className: "header-icon e-icons e-plus" })));
        };
        _this.schedulePopupClose = function (args) {
            if (args.type === "Editor" && args.element) {
                args.element.classList.remove('action-event-dialog');
            }
        };
        _this.schedulePopupOpen = function (args) {
            var _a, _b, _c, _d, _e, _f;
            if (args.type === "Editor") {
                if (args.type === 'Editor' && args.element) {
                    args.element.classList.add('action-event-dialog');
                }
                if (!args.element.querySelector(".custom-field-row")) {
                    var row = document.createElement('div');
                    row.className = 'custom-field-row';
                    var formElement = args.element.querySelector(".e-schedule-form");
                    formElement.firstChild.insertBefore(row, args.element.querySelector(".e-resources-row"));
                    var container = document.createElement('div');
                    container.className = 'custom-field-container';
                    var inputEle = document.createElement('input');
                    inputEle.className = 'e-field';
                    inputEle.name = 'CalendarId';
                    container.appendChild(inputEle);
                    row.appendChild(container);
                    var dropDownList = new ej2_react_dropdowns_1.DropDownList({
                        dataSource: (0, base_1.extend)([], _this.calendars, null, true),
                        cssClass: "calendar-ddl",
                        fields: { text: "name", value: "id" },
                        value: ((_a = args.data) === null || _a === void 0 ? void 0 : _a.CalendarId) || ((_b = _this.selectedCalendars) === null || _b === void 0 ? void 0 : _b.ids[0]) || ((_c = _this.calendars[0]) === null || _c === void 0 ? void 0 : _c.id),
                        floatLabelType: "Always", placeholder: "Calendar"
                    });
                    dropDownList.appendTo(inputEle);
                    inputEle.setAttribute("name", "CalendarId");
                }
                else {
                    var calendarDDL = args.element.querySelector(".calendar-ddl input").ej2_instances[0];
                    calendarDDL.dataSource = (0, base_1.extend)([], _this.calendars, null, true);
                    calendarDDL.value = ((_d = args.data) === null || _d === void 0 ? void 0 : _d.CalendarId) || ((_e = _this.selectedCalendars) === null || _e === void 0 ? void 0 : _e.ids[0]) || ((_f = _this.calendars[0]) === null || _f === void 0 ? void 0 : _f.id);
                }
            }
            else if (args.type === "QuickInfo" && (0, base_1.isNullOrUndefined)(args.data.Id)) {
                args.cancel = true;
            }
        };
        _this.eventRendered = function (args) {
            var categoryColor = _this.selectedCalendars.items[_this.selectedCalendars.ids.indexOf(args.data.CalendarId)].color;
            if (!args.element || !categoryColor) {
                return;
            }
            args.element.style.backgroundColor = categoryColor;
        };
        _this.dialogContent = function () {
            return (React.createElement("div", { className: "dialogContent" },
                React.createElement("div", null, "Calendar Name"),
                React.createElement("div", { className: "dialog-content" },
                    React.createElement(ej2_react_inputs_1.TextBoxComponent, { ref: _this.calendarNameObj, id: "text-box", placeholder: "Enter the calender name" }),
                    React.createElement(ej2_react_inputs_1.ColorPickerComponent, { ref: _this.colorPickerObj, id: "color-picker" }))));
        };
        _this.dialogFooterTemplate = function () {
            return (React.createElement("button", { id: "saveButton", ref: _this.saveButtonRef, className: "e-control e-btn e-primary", "data-ripple": "true", onClick: _this.updateTextValue }));
        };
        _this.isAllDayEvent = function (props) {
            if ((props === null || props === void 0 ? void 0 : props.IsAllDay) === true)
                return true;
            var start = new Date(props.StartTime);
            var end = new Date(props.EndTime);
            var startMidnight = new Date(start.getFullYear(), start.getMonth(), start.getDate());
            var endMidnight = new Date(end.getFullYear(), end.getMonth(), end.getDate());
            var diffDays = Math.round((endMidnight.getTime() - startMidnight.getTime()) / (1000 * 60 * 60 * 24));
            return diffDays >= 1 &&
                start.getHours() === 0 &&
                start.getMinutes() === 0 &&
                (end.getHours() === 0 || (end.getHours() === 23 && end.getMinutes() === 59));
        };
        _this.cloneEvent = function (event) { return JSON.parse(JSON.stringify(event)); };
        _this.isShortEvent = function (props, isAllDay) {
            var start = new Date(props.StartTime);
            var end = new Date(props.EndTime);
            var diffMinutes = (end.getTime() - start.getTime()) / (1000 * 60);
            return diffMinutes <= 45 || isAllDay;
        };
        _this.isSpannedEvent = function (props) {
            if (!_this.scheduleObj.current)
                return false;
            var viewDates = _this.scheduleObj.current.getCurrentViewDates();
            if (!viewDates || viewDates.length === 0)
                return false;
            var viewStart = new Date(viewDates[0]);
            var viewEnd = new Date(viewDates[viewDates.length - 1]);
            var start = new Date(props.StartTime);
            var end = new Date(props.EndTime);
            var nextDay = new Date(viewEnd.getFullYear(), viewEnd.getMonth(), viewEnd.getDate() + 1);
            return start < viewStart || end > nextDay;
        };
        _this.getActionButtonStyle = function (isAllDay) {
            if (isAllDay === void 0) { isAllDay = false; }
            return (__assign(__assign({ position: 'absolute', top: isAllDay ? '0px' : '6px' }, (_this.scheduleObj.current.enableRtl
                ? { left: '6px' }
                : { right: '6px' })), { display: 'flex', gap: '4px' }));
        };
        _this.dayEventTemplate = function (props) {
            var start = new Date(props.StartTime);
            var end = new Date(props.EndTime);
            var startTimeStr = start.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
            });
            var endTimeStr = end.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
            });
            var handleEdit = function (e) {
                e.stopPropagation();
                if (_this.scheduleObj.current) {
                    _this.scheduleObj.current.openEditor(_this.cloneEvent(props), 'Save');
                }
            };
            var handleDelete = function (e) {
                e.stopPropagation();
                if (_this.scheduleObj.current) {
                    _this.scheduleObj.current.deleteEvent(props.Id);
                }
            };
            var isAllDay = _this.isAllDayEvent(props);
            var isSpanned = _this.isSpannedEvent(props);
            var showOnlyText = isAllDay || isSpanned;
            var showIcons = !isSpanned;
            return (React.createElement("div", null,
                React.createElement("div", null,
                    React.createElement("div", null, props.Subject),
                    !showOnlyText && (React.createElement("div", null,
                        startTimeStr,
                        " - ",
                        endTimeStr))),
                showIcons && (React.createElement("div", { style: _this.getActionButtonStyle(isAllDay) },
                    React.createElement("div", { className: "e-icons e-edit", onClick: handleEdit, style: {
                            width: '24px',
                            height: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '4px',
                            cursor: 'pointer',
                        }, title: "Edit" }),
                    React.createElement("div", { className: "e-icons e-trash", onClick: handleDelete, style: {
                            width: '24px',
                            height: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '4px',
                            cursor: 'pointer',
                        }, title: "Delete" })))));
        };
        _this.weekEventTemplate = function (props) {
            var start = new Date(props.StartTime);
            var startTimeStr = start.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
            });
            var handleEdit = function (e) {
                e.stopPropagation();
                if (_this.scheduleObj.current) {
                    _this.scheduleObj.current.openEditor(_this.cloneEvent(props), 'Save');
                }
            };
            var handleDelete = function (e) {
                e.stopPropagation();
                if (_this.scheduleObj.current) {
                    _this.scheduleObj.current.deleteEvent(props.Id);
                }
            };
            var isAllDay = _this.isAllDayEvent(props);
            var shortEvent = _this.isShortEvent(props, isAllDay);
            var isSpanned = _this.isSpannedEvent(props);
            var showOnlyText = isAllDay || isSpanned;
            var showIcons = !isSpanned;
            return (React.createElement("div", null,
                !shortEvent && (React.createElement("div", null,
                    React.createElement("div", { style: {
                            fontWeight: '600',
                            fontSize: '13.2px',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        } }, props.Subject),
                    !showOnlyText && (React.createElement("div", null, startTimeStr)))),
                shortEvent ? ((showIcons && React.createElement("div", { style: _this.getActionButtonStyle(isAllDay) },
                    React.createElement("div", { className: "e-icons e-edit", onClick: handleEdit, style: {
                            width: '24px',
                            height: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '4px',
                            cursor: 'pointer',
                        }, title: "Edit" }),
                    React.createElement("div", { className: "e-icons e-trash", onClick: handleDelete, style: {
                            width: '24px',
                            height: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '4px',
                            cursor: 'pointer',
                        }, title: "Delete" })))) : ((showIcons && React.createElement("div", { style: {
                        display: 'flex',
                        gap: '6px',
                        marginTop: 'auto',
                        paddingTop: '6px',
                    } },
                    React.createElement("div", { className: "e-icons e-edit", onClick: handleEdit, style: {
                            width: '24px',
                            height: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '4px',
                            cursor: 'pointer',
                        }, title: "Edit" }),
                    React.createElement("div", { className: "e-icons e-trash", onClick: handleDelete, style: {
                            width: '24px',
                            height: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '4px',
                            cursor: 'pointer',
                        }, title: "Delete" }))))));
        };
        _this.selectedCalendars = _this.getSelectedCalendars();
        _this.appointmentData = _this.generateCalendarData();
        _this.filteredData = _this.getFilteredData();
        _this.eventSettings = { dataSource: (0, base_1.extend)([], _this.filteredData.planned, null, true) };
        return _this;
    }
    ActionButton.prototype.getSelectedCalendars = function () {
        var selectedIds = [];
        var selectedItems = [];
        for (var _i = 0, _a = this.calendars; _i < _a.length; _i++) {
            var calendar = _a[_i];
            if (calendar.isSelected) {
                selectedIds.push(calendar.id);
                selectedItems.push(calendar);
            }
        }
        return { ids: selectedIds, items: selectedItems };
    };
    ActionButton.prototype.generateCalendarData = function () {
        var collections = (0, base_1.extend)([], __spreadArray(__spreadArray(__spreadArray(__spreadArray([], dataSource.personalData, true), dataSource.companyData, true), dataSource.birthdayData, true), dataSource.holidayData, true), null, true);
        var oldTime = new Date(2021, 3, 1).getTime();
        var newTime = (0, ej2_react_schedule_1.resetTime)(new Date()).getTime();
        for (var _i = 0, collections_1 = collections; _i < collections_1.length; _i++) {
            var data = collections_1[_i];
            data.IsPlanned = !(data.Id % 2);
            data.IsAllDay = [1, 2].indexOf(data.CalendarId) <= -1;
            var diff = oldTime - new Date(data.StartTime).getTime();
            var hour = Math.floor(Math.random() * (13 - 9) + 9);
            data.StartTime = new Date(newTime - diff + (data.IsAllDay ? 0 : (hour * 60 * 60 * 1000)));
            data.EndTime = new Date(data.StartTime.getTime() + (data.IsAllDay ? 24 * 60 * 60 * 1000 : 60 * 60 * 1000));
            data.ResourceId = Math.floor(Math.random() * 6) + 1;
        }
        return collections;
    };
    ActionButton.prototype.getFilteredData = function () {
        var planned = [];
        for (var _i = 0, _a = this.appointmentData; _i < _a.length; _i++) {
            var data = _a[_i];
            if (this.selectedCalendars.ids.indexOf(data.CalendarId) > -1) {
                if (data.IsPlanned) {
                    planned.push(data);
                }
            }
        }
        return { planned: planned };
    };
    ActionButton.prototype.render = function () {
        return (React.createElement("div", { id: "event-calendar-sample", className: "control-section event-calendar-control-section" },
            React.createElement("div", { className: "control-wrapper" },
                React.createElement("div", null,
                    React.createElement(ej2_react_navigations_1.ToolbarComponent, { ref: this.toolbarObj, id: 'toolbar', clicked: this.onToolbarItemClicked, cssClass: "event-calendar-toolbar", style: { border: '1px solid #e5e5e5', marginBottom: '8px' } },
                        React.createElement(ej2_react_navigations_1.ItemsDirective, null,
                            React.createElement(ej2_react_navigations_1.ItemDirective, { tooltipText: "Menu", prefixIcon: "e-menu", cssClass: 'e-menu-btn' }),
                            React.createElement(ej2_react_navigations_1.ItemDirective, { prefixIcon: "e-chevron-left", tooltipText: 'Previous Week', cssClass: 'e-previous' }),
                            React.createElement(ej2_react_navigations_1.ItemDirective, { prefixIcon: "e-chevron-right", tooltipText: 'Next Week', cssClass: 'e-next' }),
                            React.createElement(ej2_react_navigations_1.ItemDirective, { text: new Date().toLocaleDateString(), cssClass: 'e-date-range' }),
                            React.createElement(ej2_react_navigations_1.ItemDirective, { text: "Create", align: 'Right', prefixIcon: "e-plus", cssClass: 'e-create', visible: !base_1.Browser.isDevice }),
                            React.createElement(ej2_react_navigations_1.ItemDirective, { type: 'Separator', align: 'Right', visible: !base_1.Browser.isDevice }),
                            React.createElement(ej2_react_navigations_1.ItemDirective, { text: 'Today', align: 'Right', cssClass: 'e-today', visible: !base_1.Browser.isDevice }),
                            React.createElement(ej2_react_navigations_1.ItemDirective, { type: 'Separator', align: 'Right', visible: !base_1.Browser.isDevice }),
                            React.createElement(ej2_react_navigations_1.ItemDirective, { text: 'Day', align: 'Right', cssClass: 'e-day', visible: !base_1.Browser.isDevice }),
                            React.createElement(ej2_react_navigations_1.ItemDirective, { text: 'Week', align: 'Right', cssClass: 'e-week', visible: !base_1.Browser.isDevice })))),
                React.createElement("div", { className: "leftside" }),
                React.createElement(ej2_react_navigations_1.SidebarComponent, { id: "sidebar-left", className: "sidebar-treeview", ref: this.calendarSidebarObj, width: '255px', height: '550px', target: '.main-content', mediaQuery: '(min-width: 600px)', isOpen: true },
                    React.createElement("div", { className: "table-content" },
                        React.createElement(ej2_react_calendars_1.CalendarComponent, { ref: this.calendarObj, id: "calendar", value: this.currentDate, change: this.valueChange, cssClass: 'selected-date-calendar' }),
                        React.createElement("div", { className: "calendar-list-container" },
                            React.createElement(ej2_react_lists_1.ListViewComponent, { ref: this.calendarsListObj, id: 'listview-def', dataSource: this.calendars, showCheckBox: true, fields: { id: 'id', text: 'name', isChecked: 'isSelected' }, showHeader: true, headerTemplate: this.listHeaderTemplate, template: this.listTemplate, select: this.onCalendarListChange, actionComplete: this.onListActionComplete })))),
                React.createElement("div", { className: "main-content", id: "main-text" },
                    React.createElement("div", { className: "sidebar-content" },
                        React.createElement("div", { className: "schedule-container" },
                            React.createElement(ej2_react_schedule_1.ScheduleComponent, { id: "Schedule", ref: this.scheduleObj, height: '550px', selectedDate: this.currentDate, currentView: base_1.Browser.isDevice ? 'Day' : 'Week', showHeaderBar: false, eventSettings: this.eventSettings, eventRendered: this.eventRendered, popupClose: this.schedulePopupClose.bind(this), popupOpen: this.schedulePopupOpen, created: this.updateDateRange, allowDragAndDrop: false, actionComplete: this.onScheduleActionComplete },
                                React.createElement(ej2_react_schedule_1.ResourcesDirective, null,
                                    React.createElement(ej2_react_schedule_1.ResourceDirective, { field: 'ResourceId', title: 'Resources', name: 'Resources', dataSource: this.resourceData, textField: 'name', idField: 'id', colorField: 'color' })),
                                React.createElement(ej2_react_schedule_1.ViewsDirective, null,
                                    React.createElement(ej2_react_schedule_1.ViewDirective, { option: 'Day', eventTemplate: this.dayEventTemplate, allowOverlap: false }),
                                    !base_1.Browser.isDevice && (React.createElement(ej2_react_schedule_1.ViewDirective, { option: 'Week', eventTemplate: this.weekEventTemplate, allowOverlap: false }))),
                                React.createElement(ej2_react_schedule_1.Inject, { services: [ej2_react_schedule_1.Day, ej2_react_schedule_1.Week, ej2_react_schedule_1.Resize] }))))),
                React.createElement(ej2_react_popups_1.DialogComponent, { ref: this.dialogObj, id: 'dialog', className: 'calendar-edit-dialog', header: "New Calender", width: '320px', content: this.dialogContent, footerTemplate: this.dialogFooterTemplate, showCloseIcon: true, isModal: true, animationSettings: { effect: 'Zoom' }, visible: false }, " ")),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This demo showcases the event action buttons for editing and deleting events in day and week views. Click the edit or delete icons to manage your events.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null, "In this demo, we have implemented custom event templates with action buttons for each event displayed in the scheduler. The action buttons allow users to edit or delete events directly from the event cells."),
                React.createElement("p", null, "The events are displayed with different time durations and the action buttons are positioned intelligently based on event duration:"),
                React.createElement("ul", null,
                    React.createElement("li", null, "For short events (\u226445 minutes), the action buttons are displayed in the top-right corner."),
                    React.createElement("li", null, "For longer events, the action buttons are displayed at the bottom of the event."),
                    React.createElement("li", null, "Click the edit icon to open the event editor dialog."),
                    React.createElement("li", null, "Click the delete icon to remove the event from the schedule.")),
                React.createElement("p", null, "Use the toolbar to switch between day and week views and the sidebar to navigate dates and filter calendars."))));
    };
    return ActionButton;
}(sample_base_1.SampleBase));
exports.ActionButton = ActionButton;
exports.default = ActionButton;
