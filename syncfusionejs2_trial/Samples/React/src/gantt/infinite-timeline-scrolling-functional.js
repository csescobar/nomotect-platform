"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var ej2_react_gantt_1 = require("@syncfusion/ej2-react-gantt");
var data_1 = require("./data");
var sample_base_1 = require("../common/sample-base");
var InfiniteTimelineScroll = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var ganttInstance;
    var taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        child: 'subtasks'
    };
    var editSettings = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    };
    var splitterSettings = {
        columnIndex: 3
    };
    var gridLines = 'Both';
    var timelineSettings = {
        topTier: {
            unit: 'Week',
            format: 'MMM dd, y',
        },
        bottomTier: {
            unit: 'Day',
        },
        viewStartDate: new Date('12/29/2025'),
        viewEndDate: new Date('04/05/2026')
    };
    var labelSettings = {
        leftLabel: 'TaskID',
        rightLabel: 'TaskName',
        taskLabel: '${Progress}%'
    };
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: 'control-section' },
            React.createElement(ej2_react_gantt_1.GanttComponent, { id: 'InfiniteScrolling', ref: function (gantt) { return ganttInstance = gantt; }, dataSource: data_1.infiniteTimelineScrollData, enableInfiniteTimelineScroll: true, treeColumnIndex: 1, allowSelection: true, highlightWeekends: true, taskFields: taskFields, timelineSettings: timelineSettings, labelSettings: labelSettings, splitterSettings: splitterSettings, height: '650px', editSettings: editSettings, gridLines: gridLines, rowHeight: 46 },
                React.createElement(ej2_react_gantt_1.ColumnsDirective, null,
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'TaskID', width: '80' }),
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'TaskName', headerText: 'Job Name', width: '250', clipMode: 'EllipsisWithTooltip' }),
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'StartDate' }),
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Duration' }),
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Progress' }),
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Predecessor' })),
                React.createElement(ej2_react_gantt_1.Inject, { services: [ej2_react_gantt_1.Edit, ej2_react_gantt_1.Selection] }))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This sample demonstrates the infinite timeline scrolling feature in the Gantt Chart, allowing users to navigate across project timelines without fixed date boundaries.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null,
                "By enabling the ",
                React.createElement("a", { target: "_blank", rel: "noopener noreferrer", href: "https://ej2.syncfusion.com/react/documentation/api/gantt/#enableinfinitetimelinescroll" }, "enableInfiniteTimelineScroll"),
                " property, the timeline dynamically generates additional date ranges as you scroll horizontally. When the scroll position reaches the edges of the visible timeline, new segments are rendered automatically, ensuring uninterrupted navigation in either direction."),
            React.createElement("p", null,
                "More information on the Essential",
                React.createElement("sup", null, "\u00AE"),
                " React Gantt Chart can be found in the ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/gantt/timeline/timeline" }, "timeline"),
                " documentation section."))));
};
exports.default = InfiniteTimelineScroll;
