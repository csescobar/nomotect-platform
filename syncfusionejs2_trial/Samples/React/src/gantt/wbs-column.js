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
exports.EnableWbs = void 0;
var React = require("react");
var ej2_react_gantt_1 = require("@syncfusion/ej2-react-gantt");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var data_1 = require("./data");
var sample_base_1 = require("../common/sample-base");
require("./wbs-column.css");
var EnableWbs = /** @class */ (function (_super) {
    __extends(EnableWbs, _super);
    function EnableWbs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.taskFields = {
            id: "TaskID",
            name: "TaskName",
            startDate: "StartDate",
            endDate: "EndDate",
            duration: "Duration",
            progress: "Progress",
            dependency: "Predecessor",
            parentID: 'ParentId'
        };
        _this.editSettings = {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true,
        };
        _this.toolbar = ["Add", "Edit", "Update", "Delete", "Cancel", "ExpandAll", "CollapseAll"];
        _this.eventMarkerDay1 = new Date('04/02/2025');
        _this.timelineSettings = {
            showTooltip: true,
            topTier: { unit: "Week", format: "dd/MM/yyyy" },
            bottomTier: { unit: "Day", count: 1 },
        };
        _this.labelSettings = {
            taskLabel: '${Progress}%'
        };
        _this.selectionSettings = {
            mode: "Row",
            type: "Single",
            enableToggle: false,
        };
        _this.splitterSettings = {
            columnIndex: 4,
        };
        _this.filterSettings = {
            type: "Menu",
        };
        _this.tooltipSettings = {
            showTooltip: true,
        };
        _this.projectStartDate = new Date("03/30/2025");
        _this.projectEndDate = new Date("05/30/2025");
        return _this;
    }
    EnableWbs.prototype.dataBound = function () {
        this.ganttInstance.element.getElementsByClassName('e-span-label')[0].style.top = '125px';
        this.ganttInstance.element.getElementsByClassName('e-gantt-right-arrow')[0].style.top = '131px';
    };
    EnableWbs.prototype.handleAutoUpdateWBSChange = function (args) {
        if (this.ganttInstance) {
            this.ganttInstance.enableAutoWbsUpdate = args.checked;
        }
    };
    EnableWbs.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "control-pane" },
            React.createElement("div", { className: "control-section" },
                React.createElement("div", { className: "col-lg-12" },
                    React.createElement("div", { style: { display: "flex" } },
                        React.createElement("div", { id: 'wbsswitch', style: { display: "flex", alignItems: "center" } },
                            React.createElement("label", { htmlFor: "autoUpdateWBS", style: { fontSize: "15px", marginRight: "5px", marginTop: "5px" } }, "Auto Update WBS"),
                            React.createElement(ej2_react_buttons_1.SwitchComponent, { id: "autoUpdateWBS", checked: true, change: this.handleAutoUpdateWBSChange.bind(this) }))),
                    React.createElement("div", null,
                        React.createElement(ej2_react_gantt_1.GanttComponent, { id: "EnableWbs", ref: function (gantt) { return (_this.ganttInstance = gantt); }, dataSource: data_1.WBSData, taskFields: this.taskFields, enableWBS: true, enableAutoWbsUpdate: true, editSettings: this.editSettings, treeColumnIndex: 2, toolbar: this.toolbar, dataBound: this.dataBound.bind(this), selectionSettings: this.selectionSettings, splitterSettings: this.splitterSettings, filterSettings: this.filterSettings, tooltipSettings: this.tooltipSettings, labelSettings: this.labelSettings, timelineSettings: this.timelineSettings, highlightWeekends: true, allowFiltering: true, allowSorting: true, allowPdfExport: true, allowSelection: true, enableContextMenu: true, gridLines: "Both", height: '650px', taskbarHeight: 25, rowHeight: 46, projectStartDate: this.projectStartDate, projectEndDate: this.projectEndDate, allowUnscheduledTasks: true },
                            React.createElement(ej2_react_gantt_1.ColumnsDirective, null,
                                React.createElement(ej2_react_gantt_1.ColumnDirective, { field: "TaskID", visible: false }),
                                React.createElement(ej2_react_gantt_1.ColumnDirective, { field: "WBSCode", headerText: "WBS Code", width: '130px' }),
                                React.createElement(ej2_react_gantt_1.ColumnDirective, { field: "TaskName", headerText: "Task Name", allowReordering: false, width: '280px' }),
                                React.createElement(ej2_react_gantt_1.ColumnDirective, { field: "StartDate", headerText: "Start Date", width: '140px' }),
                                React.createElement(ej2_react_gantt_1.ColumnDirective, { field: "WBSPredecessor", headerText: "WBS Predecessor", width: '190px' }),
                                React.createElement(ej2_react_gantt_1.ColumnDirective, { field: "Duration", headerText: "Duration", allowEditing: false, width: '130px' }),
                                React.createElement(ej2_react_gantt_1.ColumnDirective, { field: "Progress", headerText: "Progress" })),
                            React.createElement(ej2_react_gantt_1.EventMarkersDirective, null,
                                React.createElement(ej2_react_gantt_1.EventMarkerDirective, { day: this.eventMarkerDay1, label: 'Project Initiation' })),
                            React.createElement(ej2_react_gantt_1.Inject, { services: [ej2_react_gantt_1.Selection, ej2_react_gantt_1.Toolbar, ej2_react_gantt_1.Edit, ej2_react_gantt_1.Filter, ej2_react_gantt_1.Sort, ej2_react_gantt_1.ContextMenu, ej2_react_gantt_1.DayMarkers,
                                ] }))))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates how the Gantt Chart supports Work Breakdown Structure (WBS) codes, including automatic updates to WBS codes and predecessors. It ensures data consistency during common operations like sorting, filtering, editing, and drag-and-drop\u2014making project tracking more structured and reliable.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "The ",
                    React.createElement("strong", null, "Work Breakdown Structure (WBS)"),
                    " is a hierarchical numbering system used to represent each tasks position within the overall project structure. By enabling the ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/gantt/#enablewbs" }, "enableWBS "),
                    " ",
                    " property, the Gantt Chart generates WBS codes and WBS predecessors for all tasks."),
                React.createElement("p", null,
                    "By default, the ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/gantt/#enableautowbsupdate" }, "enableAutoWbsUpdate"),
                    " ",
                    " property is set to ",
                    React.createElement("code", null, "false"),
                    ". To ensure WBS codes remain accurate after actions such as sorting, filtering, editing, or drag and drop, set this property to ",
                    React.createElement("code", null, "true"),
                    "."),
                React.createElement("p", null,
                    "When ",
                    React.createElement("code", null, "enableAutoWbsUpdate"),
                    " is enabled, WBS codes are recalculated automatically whenever the task hierarchy changes. This maintains consistency and structural clarity throughout the project lifecycle."),
                React.createElement("p", null, "This example showcases how enabling WBS along with automatic updates enhances task tracking and provides a clear, organized project view."),
                React.createElement("br", null),
                React.createElement("p", null,
                    "Gantt component features are segregated into individual feature-wise modules. To use a Filter, contextMenu, Edit, Toolbar, Sorting, Selection and markers features, we need to inject the ",
                    React.createElement("code", null, "Filter"),
                    ", ",
                    React.createElement("code", null, "ContextMenu"),
                    ", ",
                    React.createElement("code", null, "Edit"),
                    ", ",
                    React.createElement("code", null, "Toolbar"),
                    ", ",
                    React.createElement("code", null, "Sort"),
                    ", ",
                    React.createElement("code", null, "Selection"),
                    " and ",
                    React.createElement("code", null, "DayMarkers"),
                    " by into the ",
                    React.createElement("code", null, "Inject Services"),
                    " section."),
                React.createElement("br", null),
                React.createElement("p", null,
                    "More information on the Essential",
                    React.createElement("sup", null, "\u00AE"),
                    " React Gantt Chart can be found in this ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/gantt/columns/wbs-column" }, "documentation section"),
                    "."))));
    };
    return EnableWbs;
}(sample_base_1.SampleBase));
exports.EnableWbs = EnableWbs;
