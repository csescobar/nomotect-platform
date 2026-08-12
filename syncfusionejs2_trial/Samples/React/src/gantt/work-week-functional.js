"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var ej2_base_1 = require("@syncfusion/ej2-base");
var ej2_react_gantt_1 = require("@syncfusion/ej2-react-gantt");
var data_1 = require("./data");
var sample_base_1 = require("../common/sample-base");
var property_pane_1 = require("../common/property-pane");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var emptyCss = "\n.property-panel-table div {\n  padding-top: 0px}";
var WorkWeek = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var ganttInstance = (0, react_1.useRef)(null);
    var showWeekendCheckbox = (0, react_1.useRef)(null);
    var highlightWeekendsCheckbox = (0, react_1.useRef)(null);
    var multiselectObj = (0, react_1.useRef)(null);
    var workDays = [
        { id: 'Sunday', day: 'Sunday' },
        { id: 'Monday', day: 'Monday' },
        { id: 'Tuesday', day: 'Tuesday' },
        { id: 'Wednesday', day: 'Wednesday' },
        { id: 'Thursday', day: 'Thursday' },
        { id: 'Friday', day: 'Friday' },
        { id: 'Saturday', day: 'Saturday' },
    ];
    var defaultValue = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    var select = function (args) {
        var workingDays = (0, ej2_base_1.extend)([], multiselectObj.current.value, [], true);
        workingDays.push(args.itemData.day);
        ganttInstance.current.workWeek = workingDays;
    };
    var removed = function (args) {
        var index = ganttInstance.current.workWeek.indexOf(args.itemData.day);
        if (index !== -1) {
            ganttInstance.current.workWeek = multiselectObj.current.value;
        }
    };
    var showWeekendCheck = function (props) {
        if (showWeekendCheckbox.current.checked) {
            ganttInstance.current.timelineSettings.showWeekend = true;
            ganttInstance.current.timelineModule.refreshTimeline();
        }
        else {
            ganttInstance.current.timelineSettings.showWeekend = false;
            ganttInstance.current.timelineModule.refreshTimeline();
        }
    };
    var highlightWeekendsCheck = function (props) {
        if (highlightWeekendsCheckbox.current.checked) {
            ganttInstance.current.highlightWeekends = true;
            ganttInstance.current.timelineModule.refreshTimeline();
        }
        else {
            ganttInstance.current.highlightWeekends = false;
            ganttInstance.current.timelineModule.refreshTimeline();
        }
    };
    var taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentId'
    };
    var labelSettings = {
        leftLabel: 'TaskName'
    };
    var workWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    var projectStartDate = new Date('03/26/2025');
    var projectEndDate = new Date('07/20/2025');
    var splitterSettings = {
        columnIndex: 1
    };
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: 'control-section' },
            React.createElement("div", { className: 'col-lg-8' },
                React.createElement(ej2_react_gantt_1.GanttComponent, { id: 'WorkWeek', ref: ganttInstance, dataSource: data_1.projectNewData, treeColumnIndex: 1, highlightWeekends: true, taskFields: taskFields, labelSettings: labelSettings, splitterSettings: splitterSettings, height: '650px', taskbarHeight: 25, rowHeight: 46, projectStartDate: projectStartDate, projectEndDate: projectEndDate },
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
                                React.createElement("td", { style: { width: '70%', paddingBottom: '10px' } },
                                    React.createElement("div", { style: { paddingTop: '0px' } },
                                        React.createElement(ej2_react_dropdowns_1.MultiSelectComponent, { ref: multiselectObj, id: "WorkWeek", style: { padding: '2px' }, mode: "CheckBox", value: defaultValue, dataSource: workDays, showDropDownIcon: true, popupHeight: '350px', fields: { text: 'day', value: 'id' }, select: select.bind(_this), removed: removed.bind(_this) },
                                            React.createElement(ej2_react_gantt_1.Inject, { services: [ej2_react_dropdowns_1.CheckBoxSelection] }))))),
                            React.createElement("tr", null,
                                React.createElement("td", { style: { width: '42%', paddingBottom: '10px', paddingTop: '10px' } },
                                    React.createElement("div", null, "Show Weekend")),
                                React.createElement("td", { style: { width: '70%' } },
                                    React.createElement("div", null,
                                        React.createElement(ej2_react_buttons_1.CheckBoxComponent, { ref: showWeekendCheckbox, id: "showWeekendCheck", onClick: showWeekendCheck.bind(_this), className: "checkbox", checked: true })))),
                            React.createElement("tr", null,
                                React.createElement("td", { style: { width: '30%', paddingBottom: '10px', paddingTop: '10px' } },
                                    React.createElement("div", null, "Highlight Weekends")),
                                React.createElement("td", { style: { width: '70%' } },
                                    React.createElement("div", null,
                                        React.createElement(ej2_react_buttons_1.CheckBoxComponent, { ref: highlightWeekendsCheckbox, id: "highlightWeekendsCheck", onClick: highlightWeekendsCheck.bind(_this), className: "checkbox", checked: true }))))))))),
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
exports.default = WorkWeek;
