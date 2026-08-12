"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var ej2_react_gantt_1 = require("@syncfusion/ej2-react-gantt");
var data_1 = require("./data");
var sample_base_1 = require("../common/sample-base");
var Critical = function () {
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
    var editSettings = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    };
    var toolbar = ['Add', 'Edit', 'Delete', 'CriticalPath'];
    var labelSettings = {
        rightLabel: 'TaskName'
    };
    var eventMarkers = new Date('04/02/2025');
    var splitterSettings = {
        columnIndex: 2
    };
    var timelineSettings = {
        topTier: {
            format: 'MMM dd, yyyy',
            unit: 'Week',
        },
        bottomTier: {
            unit: 'Day',
        },
        viewEndDate: new Date('06/07/2025')
    };
    var projectStartDate = new Date('03/30/2025');
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: 'control-section' },
            React.createElement(ej2_react_gantt_1.GanttComponent, { id: 'Critical', dataSource: data_1.criticalPathData, treeColumnIndex: 1, taskFields: taskFields, labelSettings: labelSettings, height: '650px', taskbarHeight: 25, rowHeight: 46, timelineSettings: timelineSettings, projectStartDate: projectStartDate, splitterSettings: splitterSettings, enableCriticalPath: true, editSettings: editSettings, toolbar: toolbar },
                React.createElement(ej2_react_gantt_1.ColumnsDirective, null,
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'TaskID', width: '80' }),
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'TaskName', headerText: 'Job Name', width: '250', clipMode: 'EllipsisWithTooltip' }),
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'StartDate' }),
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Duration' }),
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Progress' }),
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Predecessor' })),
                React.createElement(ej2_react_gantt_1.EventMarkersDirective, null,
                    React.createElement(ej2_react_gantt_1.EventMarkerDirective, { day: eventMarkers, cssClass: "e-custom-event-marker", label: "Project planning and kickoff", top: "138px" })),
                React.createElement(ej2_react_gantt_1.Inject, { services: [ej2_react_gantt_1.Selection, ej2_react_gantt_1.Toolbar, ej2_react_gantt_1.CriticalPath, ej2_react_gantt_1.Edit, ej2_react_gantt_1.DayMarkers] }))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This sample demonstrates the rendering of critical path to the Gantt control.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null, "In this example, you can see how to render a Gantt Chart with critical path. The default timeline view week-day mode is applied to Gantt Chart. The dependency lines are enabled in this example to represent the execution order or the hierarchy between the phases."),
            React.createElement("p", null, "The critical path is a series of tasks (or sometimes only a single task) that controls the calculated finish date of the project. If a task in a critical path is delayed, then the entire project will be delayed."),
            React.createElement("p", null,
                "Gantt component features are segregated into individual feature-wise modules. To use Critical path, selection, edit, and toolbar features, we need to inject ",
                React.createElement("code", null, "CriticalPath"),
                ", ",
                React.createElement("code", null, "Selection"),
                ", ",
                React.createElement("code", null, "Edit"),
                ", ",
                React.createElement("code", null, "DayMarkers"),
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
                React.createElement("a", { target: "_blank", rel: "noopener noreferrer", href: "https://ej2.syncfusion.com/react/documentation/gantt/critical-path/" }, "documentation section"),
                "."))));
};
exports.default = Critical;
