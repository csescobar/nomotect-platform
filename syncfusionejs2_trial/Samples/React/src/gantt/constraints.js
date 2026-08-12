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
exports.Constraints = void 0;
var React = require("react");
var ej2_react_gantt_1 = require("@syncfusion/ej2-react-gantt");
var data_1 = require("./data");
var sample_base_1 = require("../common/sample-base");
var Constraints = /** @class */ (function (_super) {
    __extends(Constraints, _super);
    function Constraints() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.taskFields = {
            id: "TaskID",
            name: "TaskName",
            startDate: "StartDate",
            endDate: "EndDate",
            duration: "Duration",
            progress: "Progress",
            constraintType: "ConstraintType",
            constraintDate: "ConstraintDate",
            dependency: "Predecessor",
            parentID: "parentID",
            notes: "info",
        };
        _this.editSettings = {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true,
        };
        _this.toolbar = [
            "Add",
            "Edit",
            "Update",
            "Delete",
            "Cancel",
            "ExpandAll",
            "CollapseAll",
            "Indent",
            "Outdent",
        ];
        _this.templateRight = _this.RightLabelTemplate;
        _this.labelSettings = {
            leftLabel: "TaskName",
            rightLabel: _this.templateRight.bind(_this)
        };
        _this.splitterSettings = {
            columnIndex: 4,
        };
        _this.projectStartDate = new Date("03/25/2025");
        _this.projectEndDate = new Date("09/06/2025");
        _this.eventMarkers = [
            { day: new Date("03/25/2025"), label: "Project StartDate" },
            { day: new Date("08/28/2025"), label: "Project EndDate" },
        ];
        return _this;
    }
    Constraints.prototype.RightLabelTemplate = function (props) {
        var value = props.ganttProperties.constraintType;
        var map = {
            0: "As Soon As Possible",
            1: "As Late As Possible",
            2: "Must Start On",
            3: "Must Finish On",
            4: "Start No Earlier Than",
            5: "Start No Later Than",
            6: "Finish No Earlier Than",
            7: "Finish No Later Than",
        };
        return map[value] || "Unknown";
    };
    ;
    Constraints.prototype.render = function () {
        return (React.createElement("div", { className: "control-pane" },
            React.createElement("div", { className: "control-section" },
                React.createElement(ej2_react_gantt_1.GanttComponent, { id: "Constraint", dataSource: data_1.constraintData, taskFields: this.taskFields, editSettings: this.editSettings, toolbar: this.toolbar, allowSelection: true, gridLines: "Both", highlightWeekends: true, height: '650px', taskbarHeight: 25, rowHeight: 46, treeColumnIndex: 1, labelSettings: this.labelSettings, splitterSettings: this.splitterSettings, projectStartDate: this.projectStartDate, projectEndDate: this.projectEndDate, eventMarkers: this.eventMarkers },
                    React.createElement(ej2_react_gantt_1.ColumnsDirective, null,
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: "TaskID", visible: false }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: "TaskName", headerText: "Job Name", width: "230", clipMode: "EllipsisWithTooltip" }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: "StartDate" }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: "Duration" }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: "ConstraintType", width: "180" }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: "ConstraintDate", width: 200 }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: "EndDate" }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: "Predecessor" }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: "Progress" })),
                    React.createElement(ej2_react_gantt_1.Inject, { services: [ej2_react_gantt_1.Edit, ej2_react_gantt_1.Selection, ej2_react_gantt_1.Toolbar, ej2_react_gantt_1.DayMarkers] })),
                React.createElement("div", { style: { float: 'right', margin: '10px' } },
                    "Source:",
                    React.createElement("a", { href: "https://en.wikipedia.org/wiki/Construction", target: "_blank", rel: "noopener noreferrer" }, "https://en.wikipedia.org/wiki/Construction"))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample illustrates how to apply and visualize task constraints in a Gantt Chart. Task constraints define specific scheduling rules that determine when a task can start or finish, based on project requirements or dependencies.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null, "In Gantt Chart, task constraints define the rules that limit a task's start or end date based on project scheduling needs. The following constraint types are supported:"),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement("code", null, "As Soon As Possible"),
                        " - Task starts as early as possible. This is the default constraint type for auto-scheduled tasks."),
                    React.createElement("li", null,
                        React.createElement("code", null, "As Late As Possible"),
                        " - Task finishes as late as possible without delaying dependent tasks."),
                    React.createElement("li", null,
                        React.createElement("code", null, "Must Start On"),
                        " - Task must start on the specified date."),
                    React.createElement("li", null,
                        React.createElement("code", null, "Must Finish On"),
                        " - Task must finish on the specified date."),
                    React.createElement("li", null,
                        React.createElement("code", null, "Start No Earlier Than"),
                        " - Task cannot start before the specified date."),
                    React.createElement("li", null,
                        React.createElement("code", null, "Start No Later Than"),
                        " - Task must start on or before the specified date."),
                    React.createElement("li", null,
                        React.createElement("code", null, "Finish No Earlier Than"),
                        " - Task cannot finish before the specified date."),
                    React.createElement("li", null,
                        React.createElement("code", null, "Finish No Later Than"),
                        " - Task must finish on or before the specified date.")),
                React.createElement("br", null),
                React.createElement("p", null,
                    "You can assign constraints to a task using the ",
                    React.createElement("code", null,
                        React.createElement("a", { target: "_blank", rel: "noopener noreferrer", href: "https://ej2.syncfusion.com/react/documentation/api/gantt/taskfieldsmodel#constrainttype" }, "taskFields.constraintType")),
                    " and ",
                    React.createElement("code", null,
                        React.createElement("a", { target: "_blank", rel: "noopener noreferrer", href: "https://ej2.syncfusion.com/react/documentation/api/gantt/taskfieldsmodel#constraintdate" }, "taskFields.constraintDate")),
                    " properties. Constraints can also be updated interactively through the task edit dialog."),
                React.createElement("p", null,
                    React.createElement("strong", null, "Handling constraint violation popup:")),
                React.createElement("p", null,
                    "To control or suppress the constraint violation dialog, handle the ",
                    React.createElement("code", null, "actionBegin"),
                    " event with ",
                    React.createElement("code", null, "requestType"),
                    " as ",
                    React.createElement("code", null, "validateTaskViolation"),
                    ". Use ",
                    React.createElement("code", null, "args.validateMode"),
                    " to specify how to respond to constraint conflicts. Available properties include:"),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement("code", null, "respectMustStartOn")),
                    React.createElement("li", null,
                        React.createElement("code", null, "respectMustFinishOn")),
                    React.createElement("li", null,
                        React.createElement("code", null, "respectStartNoLaterThan")),
                    React.createElement("li", null,
                        React.createElement("code", null, "respectFinishNoLaterThan"))),
                React.createElement("p", null,
                    "These options are false by default, which means the violation popup appears. To suppress the popup and cancel conflicting changes silently, set the relevant flag(s) to ",
                    React.createElement("strong", null, "true"),
                    "."),
                React.createElement("p", null,
                    "Gantt component features are segregated into individual feature-wise modules. To use editing, toolbar, day markers and selection features, we need to inject ",
                    React.createElement("code", null, "Edit"),
                    ", ",
                    React.createElement("code", null, "Toolbar"),
                    ", ",
                    React.createElement("code", null, "DayMarkers"),
                    " and ",
                    React.createElement("code", null, "Selection"),
                    " into the ",
                    React.createElement("code", null, "Inject Services"),
                    " section."),
                React.createElement("br", null),
                React.createElement("p", null,
                    "More information on the Essential",
                    React.createElement("sup", null, "\u00AE"),
                    " React Gantt Chart can be found in this ",
                    React.createElement("a", { target: "_blank", rel: "noopener noreferrer", href: "https://ej2.syncfusion.com/react/documentation/gantt/task-constraints" }, "documentation section"),
                    "."))));
    };
    return Constraints;
}(sample_base_1.SampleBase));
exports.Constraints = Constraints;
