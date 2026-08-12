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
exports.WorkWeek = void 0;
var React = require("react");
var ej2_base_1 = require("@syncfusion/ej2-base");
var ej2_react_gantt_1 = require("@syncfusion/ej2-react-gantt");
var data_1 = require("./data");
var sample_base_1 = require("../common/sample-base");
var property_pane_1 = require("../common/property-pane");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var emptyCss = "\n.property-panel-table div {\n  padding-top: 0px}";
var WorkWeek = /** @class */ (function (_super) {
    __extends(WorkWeek, _super);
    function WorkWeek() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.workDays = [
            { id: 'Sunday', day: 'Sunday' },
            { id: 'Monday', day: 'Monday' },
            { id: 'Tuesday', day: 'Tuesday' },
            { id: 'Wednesday', day: 'Wednesday' },
            { id: 'Thursday', day: 'Thursday' },
            { id: 'Friday', day: 'Friday' },
            { id: 'Saturday', day: 'Saturday' },
        ];
        _this.defaultValue = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
        _this.taskFields = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            parentID: 'ParentId'
        };
        _this.labelSettings = {
            leftLabel: 'TaskName'
        };
        _this.workWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
        _this.projectStartDate = new Date('03/26/2025');
        _this.projectEndDate = new Date('07/20/2025');
        _this.splitterSettings = {
            columnIndex: 1
        };
        return _this;
    }
    WorkWeek.prototype.select = function (args) {
        var workingDays = (0, ej2_base_1.extend)([], this.multiselectObj.value, [], true);
        workingDays.push(args.itemData.day);
        this.ganttInstance.workWeek = workingDays;
    };
    ;
    WorkWeek.prototype.removed = function (args) {
        var index = this.ganttInstance.workWeek.indexOf(args.itemData.day);
        if (index !== -1) {
            this.ganttInstance.workWeek = this.multiselectObj.value;
        }
    };
    ;
    WorkWeek.prototype.showWeekendCheck = function (props) {
        if (this.showWeekendCheckbox.checked) {
            this.ganttInstance.timelineSettings.showWeekend = true;
        }
        else {
            this.ganttInstance.timelineSettings.showWeekend = false;
        }
    };
    WorkWeek.prototype.highlightWeekendsCheck = function (props) {
        if (this.highlightWeekendsCheckbox.checked) {
            this.ganttInstance.highlightWeekends = true;
        }
        else {
            this.ganttInstance.highlightWeekends = false;
        }
    };
    WorkWeek.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement("div", { className: 'col-lg-8' },
                    React.createElement(ej2_react_gantt_1.GanttComponent, { id: 'WorkWeek', ref: function (gantt) { return _this.ganttInstance = gantt; }, dataSource: data_1.projectNewData, treeColumnIndex: 1, highlightWeekends: true, taskFields: this.taskFields, labelSettings: this.labelSettings, height: '650px', taskbarHeight: 25, rowHeight: 46, splitterSettings: this.splitterSettings, projectStartDate: this.projectStartDate, projectEndDate: this.projectEndDate },
                        React.createElement(ej2_react_gantt_1.ColumnsDirective, null,
                            React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'TaskID', visible: false, width: '80' }),
                            React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'TaskName', width: '250' }),
                            React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'StartDate' }),
                            React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'EndDate' }),
                            React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Duration' }),
                            React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Predecessor' }),
                            React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Progress' })),
                        React.createElement(ej2_react_gantt_1.Inject, { services: [ej2_react_gantt_1.Selection, ej2_react_gantt_1.DayMarkers] }))),
                React.createElement("div", { className: 'col-lg-4 property-section' },
                    React.createElement(property_pane_1.PropertyPane, { title: 'Properties' },
                        React.createElement("table", { id: "property", className: "property-panel-table", title: "Properties", style: { width: '100%' } },
                            React.createElement("colgroup", null,
                                React.createElement("col", { style: { width: '30%' } }),
                                React.createElement("col", { style: { width: '70%' } })),
                            React.createElement("tbody", null,
                                React.createElement("tr", null,
                                    React.createElement("td", { style: { width: '30%' } },
                                        React.createElement("div", null,
                                            React.createElement("label", { htmlFor: "WorkWeek" }, "Working Days"))),
                                    React.createElement("td", { style: { width: '70%', paddingBottom: '10px', } },
                                        React.createElement("div", { style: { paddingTop: '0px' } },
                                            React.createElement(ej2_react_dropdowns_1.MultiSelectComponent, { ref: function (multiselect) { return _this.multiselectObj = multiselect; }, id: "WorkWeek", style: { padding: '2px' }, mode: "CheckBox", value: this.defaultValue, dataSource: this.workDays, showDropDownIcon: true, popupHeight: '350px', fields: { text: 'day', value: 'id' }, select: this.select.bind(this), removed: this.removed.bind(this) },
                                                React.createElement(ej2_react_gantt_1.Inject, { services: [ej2_react_dropdowns_1.CheckBoxSelection] }))))),
                                React.createElement("tr", null,
                                    React.createElement("td", { style: { width: '42%', paddingBottom: '10px', paddingTop: '10px' } },
                                        React.createElement("div", null, "Show Weekend")),
                                    React.createElement("td", { style: { width: '70%' } },
                                        React.createElement("div", null,
                                            React.createElement(ej2_react_buttons_1.CheckBoxComponent, { ref: function (CheckBox) { return _this.showWeekendCheckbox = CheckBox; }, id: "showWeekendCheck", onClick: this.showWeekendCheck.bind(this), className: "checkbox", checked: true })))),
                                React.createElement("tr", null,
                                    React.createElement("td", { style: { width: '30%', paddingBottom: '10px', paddingTop: '10px' } },
                                        React.createElement("div", null, "Highlight Weekends")),
                                    React.createElement("td", { style: { width: '70%' } },
                                        React.createElement("div", null,
                                            React.createElement(ej2_react_buttons_1.CheckBoxComponent, { ref: function (CheckBox) { return _this.highlightWeekendsCheckbox = CheckBox; }, id: "highlightWeekendsCheck", onClick: this.highlightWeekendsCheck.bind(this), className: "checkbox", checked: true }))))))))),
            React.createElement("style", null, emptyCss),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates how to adjust the working days within a week and manage the visibility of non-working days in the timeline, enabling customized project scheduling.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "In this example, you can customize which days of the week are considered working days using the ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/gantt/#workweek" }, "workWeek"),
                    " property. Simply select your preferred working days from the dropdown list in the property panel, and they will be applied to the Gantt Chart. Weekends can be highlighted using the ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/gantt/#highlightweekends" }, "highlightweekends"),
                    " property for easy identification."),
                React.createElement("p", null,
                    "Non-working days are visible by default in the Gantt Chart timeline, their visibility can be customized using the ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/gantt/timelineSettingsModel/#showweekend" }, "timelineSettings.showWeekend"),
                    " property. Setting this to false will hide non-working days from the timeline."),
                React.createElement("p", null,
                    "Gantt component features are segregated into individual feature-wise modules. To use a selection support and event marker features, we need to inject the ",
                    React.createElement("code", null, "Selection"),
                    " and ",
                    React.createElement("code", null, "DayMarkers"),
                    " into the ",
                    React.createElement("code", null, "Inject Services"),
                    " section."),
                React.createElement("br", null),
                React.createElement("p", null,
                    "More information on the Essential",
                    React.createElement("sup", null, "\u00AE"),
                    " React Gantt Chart can be found in this ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/gantt/scheduling-tasks#configure-work-week" }, "documentation section"),
                    "."))));
    };
    return WorkWeek;
}(sample_base_1.SampleBase));
exports.WorkWeek = WorkWeek;
