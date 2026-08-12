"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var ej2_react_gantt_1 = require("@syncfusion/ej2-react-gantt");
var data_1 = require("./data");
var sample_base_1 = require("../common/sample-base");
var Holidays = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
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
        rightLabel: 'TaskName'
    };
    var splitterSettings = {
        columnIndex: 1
    };
    var projectStartDate = new Date('03/25/2025');
    var projectEndDate = new Date('07/20/2025');
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: 'control-section' },
            React.createElement(ej2_react_gantt_1.GanttComponent, { id: 'Holidays', dataSource: data_1.projectNewData, highlightWeekends: true, treeColumnIndex: 1, taskFields: taskFields, labelSettings: labelSettings, height: '650px', taskbarHeight: 25, rowHeight: 46, projectStartDate: projectStartDate, projectEndDate: projectEndDate, splitterSettings: splitterSettings },
                React.createElement(ej2_react_gantt_1.ColumnsDirective, null,
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'TaskID', visible: false, width: '80' }),
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'TaskName', width: '280' }),
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'StartDate' }),
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'EndDate' }),
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Duration' }),
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Predecessor' }),
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Progress' })),
                React.createElement(ej2_react_gantt_1.HolidaysDirective, null,
                    React.createElement(ej2_react_gantt_1.HolidayDirective, { from: '03/28/2025', to: '03/28/2025', label: 'Good Friday' }),
                    React.createElement(ej2_react_gantt_1.HolidayDirective, { from: '03/30/2025', to: '03/30/2025', label: 'Easter Sunday' }),
                    React.createElement(ej2_react_gantt_1.HolidayDirective, { from: '05/26/2025', to: '05/26/2025', label: 'Memorial Day' }),
                    React.createElement(ej2_react_gantt_1.HolidayDirective, { from: '07/04/2025', to: '07/04/2025', label: 'Independence Day' })),
                React.createElement(ej2_react_gantt_1.Inject, { services: [ej2_react_gantt_1.Selection, ej2_react_gantt_1.DayMarkers] }))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This sample visualizes how to define the holidays in between the project timeline. ")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null,
                "In this example,",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/gantt#holidays" }, "holidays"),
                " are displayed with vertical bar with the desired text using the ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/gantt/holidayModel/#label" }, "label"),
                " property. You can also mention the continuous holidays by specifying the ",
                React.createElement("code", null, "from"),
                " and ",
                React.createElement("code", null, "to"),
                " range. For single holiday, you can define from value alone. Holidays are defined as an array of object collection, so that we can display more than one holiday in the project."),
            React.createElement("p", null,
                "You can even assign the ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/gantt/holidayModel/#cssclass" }, "cssClass"),
                " to each holiday to change the default color of label and background."),
            React.createElement("p", null,
                "Gantt component features are segregated into individual feature-wise modules. To use a selection support and holiday features, we need to inject the ",
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
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/gantt/holidays" }, "documentation section"),
                "."))));
};
exports.default = Holidays;
