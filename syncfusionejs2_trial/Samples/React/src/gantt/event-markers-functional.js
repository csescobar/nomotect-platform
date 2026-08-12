"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var ej2_react_gantt_1 = require("@syncfusion/ej2-react-gantt");
var data_1 = require("./data");
var sample_base_1 = require("../common/sample-base");
var EventMarkers = function () {
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
    var eventMarkerDay1 = new Date("04/01/2025");
    var eventMarkerDay2 = new Date("04/07/2025");
    var eventMarkerDay3 = new Date("04/07/2025");
    var eventMarkerDay4 = new Date("04/17/2025");
    var eventMarkerDay5 = new Date("04/17/2025");
    var eventMarkerDay6 = new Date("05/23/2025");
    var eventMarkerDay7 = new Date("05/29/2025");
    var eventMarkerDay8 = new Date("06/26/2025");
    var labelSettings = {
        leftLabel: 'TaskName'
    };
    var timelineSettings = {
        topTier: {
            unit: 'Week',
            format: 'EEE MMM dd'
        },
        bottomTier: {
            unit: 'Day',
            format: ''
        }
    };
    var splitterSettings = {
        columnIndex: 2,
    };
    var projectStartDate = new Date('03/26/2025');
    var projectEndDate = new Date('07/20/2025');
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: 'control-section' },
            React.createElement(ej2_react_gantt_1.GanttComponent, { id: 'EventMarkers', dataSource: data_1.EventmarkerData, highlightWeekends: true, timelineSettings: timelineSettings, taskFields: taskFields, labelSettings: labelSettings, height: '650px', taskbarHeight: 25, rowHeight: 46, splitterSettings: splitterSettings, projectStartDate: projectStartDate, projectEndDate: projectEndDate, treeColumnIndex: 1 },
                React.createElement(ej2_react_gantt_1.ColumnsDirective, null,
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'TaskID', width: '80' }),
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'TaskName', headerText: 'Job Name', width: '250', clipMode: 'EllipsisWithTooltip' }),
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'StartDate' }),
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Duration' }),
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Progress' }),
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Predecessor' })),
                React.createElement(ej2_react_gantt_1.EventMarkersDirective, null,
                    React.createElement(ej2_react_gantt_1.EventMarkerDirective, { day: eventMarkerDay1, label: 'Product Concept Analysis' }),
                    React.createElement(ej2_react_gantt_1.EventMarkerDirective, { day: eventMarkerDay2, label: 'Research Phase' }),
                    React.createElement(ej2_react_gantt_1.EventMarkerDirective, { day: eventMarkerDay3, label: 'Demand Analysis', top: '150px' }),
                    React.createElement(ej2_react_gantt_1.EventMarkerDirective, { day: eventMarkerDay4, label: 'Design Phase', top: '200px' }),
                    React.createElement(ej2_react_gantt_1.EventMarkerDirective, { day: eventMarkerDay5, label: 'Competitor Analysis', top: '422px' }),
                    React.createElement(ej2_react_gantt_1.EventMarkerDirective, { day: eventMarkerDay6, label: 'Prototype Testing Phase' }),
                    React.createElement(ej2_react_gantt_1.EventMarkerDirective, { day: eventMarkerDay7, label: 'Production Launch', top: '5px' }),
                    React.createElement(ej2_react_gantt_1.EventMarkerDirective, { day: eventMarkerDay8, label: 'Market Deployment' })),
                React.createElement(ej2_react_gantt_1.Inject, { services: [ej2_react_gantt_1.Selection, ej2_react_gantt_1.DayMarkers] }))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This sample demonstrates how to highlight and notify important dates within a project timeline using the Gantt Chart component.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null,
                "In this example, ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/gantt/#eventmarkers" }, "eventMarkers"),
                " act as visual bookmarks to indicate key milestones or stages in the project life cycle. Each marker can display descriptive text on the corresponding date, making it easier to track progress and deadlines."),
            React.createElement("p", null,
                "The ",
                React.createElement("strong", null, "Event Markers"),
                " model provides several properties to customize the appearance and behavior of markers:"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement("code", null, "cssClass"),
                    ": Apply custom CSS styles to a specific marker."),
                React.createElement("li", null,
                    React.createElement("code", null, "day"),
                    ": Define the exact date for the event marker."),
                React.createElement("li", null,
                    React.createElement("code", null, "label"),
                    ": Display text along the vertical line to describe the event."),
                React.createElement("li", null,
                    React.createElement("code", null, "top"),
                    ": Adjust the vertical position of the marker from the chart pane's content top to avoid overlap when multiple markers share the same date.")),
            React.createElement("p", null,
                "Gantt component features are segregated into individual feature-wise modules. To use selection and event marker features, we need to inject the ",
                React.createElement("code", null, "Selection"),
                " and ",
                React.createElement("code", null, "DayMarkers"),
                " into the ",
                React.createElement("code", null, "Inject Services"),
                " section respectively."),
            React.createElement("br", null),
            React.createElement("p", null,
                "More information on the Essential",
                React.createElement("sup", null, "\u00AE"),
                " React Gantt Chart can be found in this ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/gantt/event-markers" }, "documentation section"),
                "."))));
};
exports.default = EventMarkers;
