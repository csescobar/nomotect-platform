"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var data_1 = require("./data");
var react_2 = require("react");
var sample_base_1 = require("../common/sample-base");
var ej2_react_gantt_1 = require("@syncfusion/ej2-react-gantt");
require("./wbs-column.css");
var EnableWbs = function () {
    (0, react_2.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var taskFields = {
        id: "TaskID",
        name: "TaskName",
        startDate: "StartDate",
        endDate: "EndDate",
        duration: "Duration",
        progress: "Progress",
        dependency: "Predecessor",
        parentID: 'ParentId'
    };
    var ganttInstance = (0, react_1.useRef)(null);
    var eventMarkerDay1 = new Date('04/02/2025');
    var handleAutoUpdateWBSChange = function (args) {
        if (args.checked) {
            ganttInstance.current.enableAutoWbsUpdate = true;
        }
        else {
            ganttInstance.current.enableAutoWbsUpdate = false;
        }
    };
    var editSettings = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true,
    };
    var toolbar = ["Add", "Edit", "Update", "Delete", "Cancel", "ExpandAll", "CollapseAll"];
    var timelineSettings = {
        showTooltip: true,
        topTier: {
            unit: "Week",
            format: "dd/MM/yyyy",
        },
        bottomTier: {
            unit: "Day",
            count: 1,
        },
    };
    var labelSettings = {
        taskLabel: '${Progress}%'
    };
    var projectStartDate = new Date("03/30/2025");
    var projectEndDate = new Date("05/30/2025");
    var splitterSettings = {
        columnIndex: 4
    };
    var dataBound = function () {
        var gantt = document.getElementsByClassName('e-gantt')[0].ej2_instances[0];
        gantt.element.getElementsByClassName('e-span-label')[0].style.top = '125px';
        gantt.element.getElementsByClassName('e-gantt-right-arrow')[0].style.top = '131px';
    };
    var selectionSettings = {
        mode: "Row",
        type: "Single",
        enableToggle: false,
    };
    var tooltipSettings = {
        showTooltip: true,
    };
    var filterSettings = {
        type: "Menu",
    };
    return (React.createElement("div", { className: "control-pane" },
        React.createElement("div", { className: "control-section" },
            React.createElement("div", { className: "col-lg-12" },
                React.createElement("div", { style: { display: "flex" } },
                    React.createElement("div", { id: 'wbsswitch', style: { display: "flex", alignItems: "center" } },
                        React.createElement("label", { htmlFor: "autoUpdateWBS", style: { fontSize: "15px", marginRight: "5px", marginTop: "5px" } }, "Auto Update WBS"),
                        React.createElement(ej2_react_buttons_1.SwitchComponent, { id: "autoUpdateWBS", checked: true, change: handleAutoUpdateWBSChange }))),
                React.createElement("div", null,
                    React.createElement(ej2_react_gantt_1.GanttComponent, { id: "EnableWbs", taskFields: taskFields, ref: ganttInstance, toolbar: toolbar, treeColumnIndex: 2, dataSource: data_1.WBSData, allowSorting: true, enableContextMenu: true, enableWBS: true, dataBound: dataBound.bind(_this), enableAutoWbsUpdate: true, editSettings: editSettings, allowSelection: true, allowPdfExport: true, splitterSettings: splitterSettings, selectionSettings: selectionSettings, tooltipSettings: tooltipSettings, filterSettings: filterSettings, timelineSettings: timelineSettings, highlightWeekends: true, allowFiltering: true, gridLines: "Both", labelSettings: labelSettings, height: '650px', taskbarHeight: 25, rowHeight: 46, allowUnscheduledTasks: true, projectStartDate: projectStartDate, projectEndDate: projectEndDate },
                        React.createElement(ej2_react_gantt_1.ColumnsDirective, null,
                            React.createElement(ej2_react_gantt_1.ColumnDirective, { field: "TaskID", visible: false }),
                            React.createElement(ej2_react_gantt_1.ColumnDirective, { field: "WBSCode", headerText: "WBS Code", width: '130px' }),
                            React.createElement(ej2_react_gantt_1.ColumnDirective, { field: "TaskName", headerText: "Task Name", allowReordering: false, width: '280px' }),
                            React.createElement(ej2_react_gantt_1.ColumnDirective, { field: "StartDate", headerText: "Start Date", width: '140px' }),
                            React.createElement(ej2_react_gantt_1.ColumnDirective, { field: "WBSPredecessor", headerText: "WBS Predecessor", width: '190px' }),
                            React.createElement(ej2_react_gantt_1.ColumnDirective, { field: "Duration", headerText: "Duration", allowEditing: false, width: '130px' }),
                            React.createElement(ej2_react_gantt_1.ColumnDirective, { field: "Progress", headerText: "Progress" })),
                        React.createElement(ej2_react_gantt_1.EventMarkersDirective, null,
                            React.createElement(ej2_react_gantt_1.EventMarkerDirective, { day: eventMarkerDay1, label: 'Project Initiation' })),
                        React.createElement(ej2_react_gantt_1.Inject, { services: [ej2_react_gantt_1.Selection, ej2_react_gantt_1.DayMarkers, ej2_react_gantt_1.Toolbar, ej2_react_gantt_1.Edit, ej2_react_gantt_1.Filter, ej2_react_gantt_1.Sort, ej2_react_gantt_1.ContextMenu,] }))))),
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
exports.default = EnableWbs;
