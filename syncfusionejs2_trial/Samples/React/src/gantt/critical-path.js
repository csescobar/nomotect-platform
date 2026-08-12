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
exports.Critical = void 0;
var React = require("react");
var ej2_react_gantt_1 = require("@syncfusion/ej2-react-gantt");
var data_1 = require("./data");
var sample_base_1 = require("../common/sample-base");
var Critical = /** @class */ (function (_super) {
    __extends(Critical, _super);
    function Critical() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
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
        _this.editSettings = {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true
        };
        _this.toolbar = ['Add', 'Edit', 'Delete', 'CriticalPath'];
        _this.splitterSettings = {
            columnIndex: 2
        };
        _this.labelSettings = {
            rightLabel: 'TaskName'
        };
        _this.timelineSettings = {
            topTier: {
                format: 'MMM dd, yyyy',
                unit: 'Week',
            },
            bottomTier: {
                unit: 'Day',
            },
            viewEndDate: new Date('06/07/2025')
        };
        _this.eventMarkers = new Date('04/02/2025');
        _this.projectStartDate = new Date('03/30/2025');
        return _this;
    }
    Critical.prototype.render = function () {
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement(ej2_react_gantt_1.GanttComponent, { id: 'Critical', dataSource: data_1.criticalPathData, treeColumnIndex: 1, taskFields: this.taskFields, splitterSettings: this.splitterSettings, labelSettings: this.labelSettings, height: '650px', taskbarHeight: 25, rowHeight: 46, projectStartDate: this.projectStartDate, enableCriticalPath: true, editSettings: this.editSettings, toolbar: this.toolbar, timelineSettings: this.timelineSettings },
                    React.createElement(ej2_react_gantt_1.ColumnsDirective, null,
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'TaskID', width: '80' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'TaskName', headerText: 'Job Name', width: '250', clipMode: 'EllipsisWithTooltip' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'StartDate' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Duration' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Progress' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Predecessor' })),
                    React.createElement(ej2_react_gantt_1.EventMarkersDirective, null,
                        React.createElement(ej2_react_gantt_1.EventMarkerDirective, { day: this.eventMarkers, cssClass: "e-custom-event-marker", label: "Project planning and kickoff", top: "138px" })),
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
    return Critical;
}(sample_base_1.SampleBase));
exports.Critical = Critical;
