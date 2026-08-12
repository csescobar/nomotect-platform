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
exports.Timezone = void 0;
var React = require("react");
var ej2_react_gantt_1 = require("@syncfusion/ej2-react-gantt");
var sample_base_1 = require("../common/sample-base");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
require("./timezone.css");
var Timezone = /** @class */ (function (_super) {
    __extends(Timezone, _super);
    function Timezone() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.timezoneData = [
            { taskID: 1, taskName: 'Project schedule', startDate: new Date('02/04/2025 08:00'), endDate: new Date('03/10/2025') },
            { taskID: 2, taskName: 'Planning', startDate: new Date('02/04/2025 08:00'), endDate: new Date('02/10/2025'), parentID: 1 },
            { taskID: 3, taskName: 'Plan timeline', startDate: new Date('02/04/2025 08:00'), endDate: new Date('02/10/2025'), duration: 6, progress: '60', parentID: 2 },
            { taskID: 4, taskName: 'Plan budget', startDate: new Date('02/04/2025 08:00'), endDate: new Date('02/10/2025'), duration: 6, progress: '90', parentID: 2 },
            { taskID: 5, taskName: 'Allocate resources', startDate: new Date('02/04/2025 08:00'), endDate: new Date('02/10/2025'), duration: 6, progress: '75', parentID: 2 },
            { taskID: 6, taskName: 'Planning complete', startDate: new Date('02/06/2025 08:00'), endDate: new Date('02/10/2025'), duration: 0, predecessor: '3FS,4FS,5FS', parentID: 2 },
            { taskID: 7, taskName: 'Design', startDate: new Date('02/13/2025 08:00'), endDate: new Date('02/17/2025 08:00'), parentID: 1, },
            { taskID: 8, taskName: 'Software specification', startDate: new Date('02/13/2025 08:00'), endDate: new Date('02/15/2025'), duration: 3, progress: '60', predecessor: '6FS', parentID: 7, },
            { taskID: 9, taskName: 'Develop prototype', startDate: new Date('02/13/2025 08:00'), endDate: new Date('02/15/2025'), duration: 3, progress: '100', predecessor: '6FS', parentID: 7, },
            { taskID: 10, taskName: 'Get approval from customer', startDate: new Date('02/16/2025 08:00'), endDate: new Date('02/17/2025 08:00'), duration: 2, progress: '100', predecessor: '9FS', parentID: 7 },
            { taskID: 11, taskName: 'Design complete', startDate: new Date('02/17/2025 08:00'), endDate: new Date('02/17/2025 08:00'), duration: 0, predecessor: '10FS', parentID: 7 },
            { taskID: 12, taskName: 'Implementation', startDate: new Date('02/18/2025 08:00'), endDate: new Date('02/25/2025 08:00'), parentID: 1 },
            { taskID: 13, taskName: 'Develop core modules', startDate: new Date('02/18/2025 08:00'), endDate: new Date('02/22/2025'), duration: 5, progress: '80', predecessor: '11FS', parentID: 12 },
            { taskID: 14, taskName: 'Integrate modules', startDate: new Date('02/19/2025 08:00'), endDate: new Date('02/23/2025'), duration: 5, progress: '70', predecessor: '13FS', parentID: 12 },
            { taskID: 15, taskName: 'Implementation complete', startDate: new Date('02/25/2025 08:00'), endDate: new Date('02/25/2025 08:00'), duration: 0, predecessor: '14FS', parentID: 12 },
            { taskID: 16, taskName: 'Testing', startDate: new Date('02/26/2025 08:00'), endDate: new Date('03/02/2025 08:00'), parentID: 1 },
            { taskID: 17, taskName: 'Unit testing', startDate: new Date('02/26/2025 08:00'), endDate: new Date('02/28/2025'), duration: 3, progress: '50', predecessor: '15FS', parentID: 16 },
            { taskID: 18, taskName: 'Integration testing', startDate: new Date('02/27/2025 08:00'), endDate: new Date('03/01/2025'), duration: 4, progress: '40', predecessor: '17FS', parentID: 16 },
            { taskID: 19, taskName: 'Test report', startDate: new Date('03/02/2025 08:00'), endDate: new Date('03/02/2025 08:00'), duration: 0, predecessor: '18FS', parentID: 16 },
            { taskID: 20, taskName: 'Deployment', startDate: new Date('03/03/2025 08:00'), endDate: new Date('03/06/2025 08:00'), parentID: 1 },
            { taskID: 21, taskName: 'Configure environment', startDate: new Date('03/03/2025 08:00'), endDate: new Date('03/04/2025'), duration: 2, progress: '30', predecessor: '19FS', parentID: 20 },
            { taskID: 22, taskName: 'Deploy application', startDate: new Date('03/04/2025 08:00'), endDate: new Date('03/05/2025'), duration: 2, progress: '20', predecessor: '21FS', parentID: 20 },
            { taskID: 23, taskName: 'Deployment verification', startDate: new Date('03/06/2025 08:00'), endDate: new Date('03/06/2025 08:00'), duration: 0, predecessor: '22FS', parentID: 20 },
            { taskID: 24, taskName: 'Training', startDate: new Date('03/07/2025 08:00'), endDate: new Date('03/08/2025 08:00'), parentID: 1 },
            { taskID: 25, taskName: 'User training', startDate: new Date('03/07/2025 08:00'), endDate: new Date('03/07/2025'), duration: 1, progress: '10', predecessor: '23FS', parentID: 24 },
            { taskID: 26, taskName: 'Admin training', startDate: new Date('03/07/2025 08:00'), endDate: new Date('03/08/2025'), duration: 2, progress: '10', predecessor: '23FS', parentID: 24 },
            { taskID: 27, taskName: 'Training complete', startDate: new Date('03/08/2025 08:00'), endDate: new Date('03/08/2025 08:00'), duration: 0, predecessor: '25FS,26FS', parentID: 24 },
            { taskID: 28, taskName: 'Client review', startDate: new Date('03/09/2025 08:00'), endDate: new Date('03/09/2025'), duration: 1, progress: '0', predecessor: '27FS', parentID: 1 },
            { taskID: 29, taskName: 'Project handover', startDate: new Date('03/10/2025 08:00'), endDate: new Date('03/10/2025'), duration: 0, predecessor: '28FS', parentID: 1 },
            { taskID: 30, taskName: 'Post-Project Review', startDate: new Date('03/10/2025 08:00'), endDate: new Date('03/10/2025 08:00'), duration: 0, progress: '0', predecessor: '29FS', parentID: 1 }
        ];
        _this.taskFields = {
            id: 'taskID',
            name: 'taskName',
            startDate: 'startDate',
            duration: 'duration',
            progress: 'progress',
            dependency: 'predecessor',
            parentID: 'parentID'
        };
        _this.timelineSettings = {
            timelineUnitSize: 70,
            topTier: {
                unit: 'Day',
                format: 'MMM dd, yyyy'
            },
            bottomTier: {
                unit: 'Hour',
                format: 'hh:mm a'
            }
        };
        _this.dayWorkingTime = [{ from: 0, to: 24 }];
        _this.getTimeZonesWithOffsets = function () {
            var now = new Date();
            var zones = Intl.supportedValuesOf ? Intl.supportedValuesOf('timeZone') : [
                'UTC', 'Asia/Calcutta', 'America/New_York', 'America/Los_Angeles', 'Europe/London',
                'Australia/Sydney', 'Asia/Tokyo', 'America/Chicago', 'America/Denver', 'America/Sao_Paulo'
            ];
            return zones.map(function (tz) {
                var formatter = new Intl.DateTimeFormat('en-US', {
                    timeZone: tz,
                    timeZoneName: 'longOffset'
                });
                // Use type assertion to bypass missing formatToParts in ES5 lib
                var parts = formatter.formatToParts(now);
                var offsetPart = parts.filter(function (part) { return part.type === 'timeZoneName'; })[0];
                var offset = offsetPart ? offsetPart.value : 'UTC+00:00';
                offset = offset.replace('GMT', 'UTC');
                return { id: tz, text: tz + ' (' + offset + ')' };
            });
        };
        _this.getLocalTimeZoneWithOffset = function () {
            var timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            var timeZonesWithOffsets = _this.getTimeZonesWithOffsets();
            return timeZonesWithOffsets.find(function (zone) {
                return zone.id === timeZone;
            });
        };
        _this.localTimezone = _this.getLocalTimeZoneWithOffset().text;
        _this.timeZones = _this.getTimeZonesWithOffsets();
        _this.timeZoneList = function (args) {
            if (args.value) {
                _this.ganttInstance.timezone = args.value.toString().split(' (')[0];
                _this.ganttInstance.refresh();
            }
            else {
                _this.ganttInstance.timezone = null;
                _this.ganttInstance.refresh();
            }
        };
        _this.timelineUnit = function (args) {
            var unit = args.value;
            if (_this.ganttInstance) {
                if (unit === 'Day') {
                    _this.ganttInstance.timelineSettings.topTier.unit = unit;
                    _this.ganttInstance.timelineSettings.bottomTier.unit = 'Hour';
                    _this.ganttInstance.timelineSettings.bottomTier.format = 'hh:mm a';
                }
                else if (unit === 'Week') {
                    _this.ganttInstance.timelineSettings.topTier.unit = unit;
                    _this.ganttInstance.timelineSettings.bottomTier.unit = 'Day';
                    _this.ganttInstance.timelineSettings.bottomTier.format = 'dd MMM';
                }
                else {
                    _this.ganttInstance.timelineSettings.topTier.unit = unit;
                    _this.ganttInstance.timelineSettings.bottomTier.unit = 'Day';
                    _this.ganttInstance.timelineSettings.bottomTier.format = 'dd';
                }
                _this.ganttInstance.refresh();
            }
        };
        _this.getPreviousTimeSpan = function () {
            return _this.ganttInstance.previousTimeSpan();
        };
        _this.getNextTimeSpan = function () {
            return _this.ganttInstance.nextTimeSpan();
        };
        _this.timelineData = ['Day', 'Week', 'Month'];
        return _this;
    }
    Timezone.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "control-pane" },
            React.createElement("div", { className: "control-section" },
                React.createElement("div", { className: "content-wrapper" },
                    React.createElement("div", { className: "input-container", style: { display: 'flex', flexWrap: 'wrap', alignItems: 'center', position: 'relative' } },
                        React.createElement("div", { className: 'timezone-label', style: { display: 'flex', padding: '2px', alignItems: 'center' } },
                            React.createElement("label", { htmlFor: "timezonelist", style: { fontSize: '15px', marginRight: '5px' } }, "Time Zone:"),
                            React.createElement("div", { style: { padding: '2px', marginBottom: '5px' } },
                                React.createElement(ej2_react_dropdowns_1.ComboBoxComponent, { id: "timezonelist", value: this.localTimezone, placeholder: "Select Time Zone", change: this.timeZoneList, allowFiltering: true, filterType: 'Contains', dataSource: this.timeZones, style: { width: '250px' }, popupWidth: '350px', fields: { value: 'id', text: 'text' } }))),
                        React.createElement("div", { className: 'timeline-input', style: { display: 'flex', alignItems: 'center', position: 'absolute', right: '14px', } },
                            React.createElement("div", { style: { marginTop: '-5px', padding: '0 5px 0 5px' } },
                                React.createElement(ej2_react_buttons_1.ButtonComponent, { id: 'left-timespan-btn', onClick: this.getPreviousTimeSpan, className: 'timespan-btn' },
                                    React.createElement("span", { className: 'e-icons e-chevron-left-fill' }))),
                            React.createElement("div", { style: { marginBottom: '5px' } },
                                React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { id: "timeline", value: this.timelineSettings.topTier.unit, placeholder: "Select timeline", change: this.timelineUnit, dataSource: this.timelineData })),
                            React.createElement("div", { style: { marginTop: '-5px', padding: '0 5px 0 5px' } },
                                React.createElement(ej2_react_buttons_1.ButtonComponent, { id: 'right-timespan-btn', onClick: this.getNextTimeSpan, className: 'timespan-btn' },
                                    React.createElement("span", { className: 'e-icons e-chevron-right-fill' })))))),
                React.createElement(ej2_react_gantt_1.GanttComponent, { id: 'Timezone', dataSource: this.timezoneData, ref: function (gantt) { return _this.ganttInstance = gantt; }, timelineSettings: this.timelineSettings, height: '650px', taskbarHeight: 25, rowHeight: 46, timezone: this.localTimezone.split(' (')[0], durationUnit: 'Hour', includeWeekend: true, treeColumnIndex: 1, dateFormat: 'hh:mm a', dayWorkingTime: this.dayWorkingTime, taskFields: this.taskFields },
                    React.createElement(ej2_react_gantt_1.ColumnsDirective, null,
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'taskID', visible: false, width: '80' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'taskName', width: '250' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'startDate' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'duration' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'predecessor' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'progress' })),
                    React.createElement(ej2_react_gantt_1.Inject, { services: [ej2_react_gantt_1.Selection] }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates how the React Gantt Chart schedules project tasks using the UTC timezone, ensuring consistent date and time handling across global teams.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "For example, in this demo, the timezone of Gantt is set to UTC, and the task named ",
                    React.createElement("code", null, "Plan timeline"),
                    " has start time as ",
                    React.createElement("code", null, "08:00 am"),
                    " but converted based on UTC and rendered at ",
                    React.createElement("code", null, "2.30 am")),
                React.createElement("p", null,
                    "When a user sets any timezone, dates are converted based on the value set to ",
                    React.createElement("code", null,
                        React.createElement("a", { target: "_blank", className: 'code', href: "https://ej2.syncfusion.com/react/documentation/api/gantt#timezone" }, "timezone")),
                    " property of Gantt control."),
                React.createElement("p", null,
                    "Gantt component features are segregated into individual feature-wise modules. To use selection and toolbar features, we need to inject the ",
                    React.createElement("code", null, "Selection"),
                    " and ",
                    React.createElement("code", null, "Toolbar"),
                    " into the ",
                    React.createElement("code", null, "Inject Services"),
                    " section."),
                React.createElement("br", null),
                React.createElement("p", null,
                    "More information on the Essential",
                    React.createElement("sup", null, "\u00AE"),
                    " React Gantt Chart can be found in this ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/gantt/timezone" }, "documentation section"),
                    "."))));
    };
    return Timezone;
}(sample_base_1.SampleBase));
exports.Timezone = Timezone;
