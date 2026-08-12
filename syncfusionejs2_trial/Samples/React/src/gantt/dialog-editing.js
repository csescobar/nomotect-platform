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
exports.GanttDialogEditing = void 0;
var React = require("react");
var ej2_react_gantt_1 = require("@syncfusion/ej2-react-gantt");
var ej2_dropdowns_1 = require("@syncfusion/ej2-dropdowns");
var ej2_data_1 = require("@syncfusion/ej2-data");
var ej2_base_1 = require("@syncfusion/ej2-base");
var data_1 = require("./data");
var sample_base_1 = require("../common/sample-base");
var GanttDialogEditing = /** @class */ (function (_super) {
    __extends(GanttDialogEditing, _super);
    function GanttDialogEditing() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.taskFields = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            dependency: 'Predecessor',
            child: 'subtasks',
            progress: 'Progress',
            segments: 'Segments',
            constraintType: 'ConstraintType',
            constraintDate: 'ConstraintDate',
            resourceInfo: 'Resources',
            manual: 'isManual',
            work: 'Work',
        };
        _this.resourceFields = {
            id: 'resourceId',
            name: 'resourceName',
        };
        _this.editSettings = {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true,
            mode: 'Dialog',
        };
        _this.toolbar = ['Add', 'Edit', 'Delete', 'ExpandAll', 'CollapseAll'];
        _this.splitterSettings = {
            columnIndex: 4
        };
        _this.timelineSettings = {
            showTooltip: true,
            topTier: {
                unit: 'Week',
                format: 'dd/MM/yyyy',
            },
            bottomTier: {
                unit: 'Day',
                count: 1,
            },
        };
        _this.labelSettings = {
            rightLabel: 'TaskName',
        };
        _this.actionComplete = function (args) {
            var _a, _b;
            if (args.requestType === 'openAddDialog' || args.requestType === 'openEditDialog') {
                var gantt_1 = (_a = document.getElementById('Dialog')) === null || _a === void 0 ? void 0 : _a.ej2_instances[0];
                var tabObj_1 = (_b = document.getElementById("".concat(gantt_1.element.id, "_Tab"))) === null || _b === void 0 ? void 0 : _b.ej2_instances[0];
                var selectedTab_1 = tabObj_1.selected;
                if (tabObj_1) {
                    tabObj_1.selected = function (args) {
                        var _a;
                        if (args.selectedIndex === 1) {
                            var gridObj = (_a = document.getElementById("".concat(gantt_1.element.id, "DependencyTabContainer"))) === null || _a === void 0 ? void 0 : _a.ej2_instances[0];
                            if (gridObj) {
                                gridObj.queryCellInfo = function (args) {
                                    if (args.column.field === 'name') {
                                        args.cell.innerText = args.data.name.substring(args.data.id.length + 1);
                                    }
                                };
                                var cols = gridObj.columns;
                                cols[1].edit.write = function (args) {
                                    if (args.requestType === 'add') {
                                        args.rowData.uniqueId = (0, ej2_base_1.getUniqueID)('gantt');
                                    }
                                    var field = 'name';
                                    var dependencygridData = (gantt_1 === null || gantt_1 === void 0 ? void 0 : gantt_1.editModule.dialogModule.idCollection) || [];
                                    for (var i = 0; i < dependencygridData.length; i++) {
                                        dependencygridData[i].text = dependencygridData[i].text.substring(dependencygridData[i].id.length + 1);
                                    }
                                    var comboValue = '';
                                    if (args.rowData[field]) {
                                        comboValue = args.rowData[field].substring(0, args.rowData.id.length);
                                    }
                                    var autoObj = new ej2_dropdowns_1.ComboBox({
                                        dataSource: new ej2_data_1.DataManager(dependencygridData),
                                        popupHeight: '180px',
                                        allowCustom: false,
                                        enableRtl: gantt_1 === null || gantt_1 === void 0 ? void 0 : gantt_1.enableRtl,
                                        fields: { value: 'value', text: 'text' },
                                        value: comboValue,
                                        change: function (arg) {
                                            var tr = arg.element.closest('tr');
                                            var idInput = tr.querySelector("#".concat(gantt_1 === null || gantt_1 === void 0 ? void 0 : gantt_1.element.id, "DependencyTabContainerid"));
                                            if (idInput) {
                                                if (!(0, ej2_base_1.isNullOrUndefined)(arg.itemData) && !(0, ej2_base_1.isNullOrUndefined)(arg.item)) {
                                                    idInput.value = arg.itemData.value;
                                                }
                                                else {
                                                    idInput.value = '';
                                                }
                                            }
                                        },
                                        autofill: true,
                                    });
                                    autoObj.appendTo(args.element);
                                };
                                cols[1].edit.read = function (args) {
                                    var ej2Instance = args.ej2_instances[0];
                                    return ej2Instance.value + '-' + ej2Instance.text;
                                };
                                gridObj.refresh();
                            }
                        }
                        if (selectedTab_1) {
                            selectedTab_1.call(tabObj_1, args);
                        }
                    };
                }
            }
        };
        return _this;
    }
    GanttDialogEditing.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement(ej2_react_gantt_1.GanttComponent, { id: "Dialog", ref: function (gantt) { return _this.ganttInstance = gantt; }, dataSource: data_1.dialogData, taskFields: this.taskFields, resourceFields: this.resourceFields, resources: data_1.dataResources, editSettings: this.editSettings, toolbar: this.toolbar, renderBaseline: true, treeColumnIndex: 1, taskMode: "Custom", allowSelection: true, showColumnMenu: true, splitterSettings: this.splitterSettings, gridLines: "Both", highlightWeekends: true, timelineSettings: this.timelineSettings, labelSettings: this.labelSettings, allowResizing: true, taskbarHeight: 25, rowHeight: 46, height: "650px", projectStartDate: new Date('03/30/2025'), projectEndDate: new Date('07/19/2025'), actionComplete: this.actionComplete },
                    React.createElement(ej2_react_gantt_1.ColumnsDirective, null,
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: "TaskID", headerText: "Task ID", width: "110" }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: "TaskName", headerText: "Task Name", width: "200" }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: "StartDate", headerText: "Start Date" }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: "Duration", headerText: "Duration" }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: "ConstraintType", width: "173" }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: "ConstraintDate", width: "176" }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: "isManual", width: "150" }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: "Work" })),
                    React.createElement(ej2_react_gantt_1.AddDialogFieldsDirective, null,
                        React.createElement(ej2_react_gantt_1.AddDialogFieldDirective, { type: "General", fields: ['TaskID', 'TaskName', 'StartDate', 'Duration', 'EndDate', 'Progress'] }),
                        React.createElement(ej2_react_gantt_1.AddDialogFieldDirective, { type: "Dependency" }),
                        React.createElement(ej2_react_gantt_1.AddDialogFieldDirective, { type: "Resources", additionalParams: {
                                allowFiltering: true,
                                allowSorting: true,
                                allowResizing: true,
                                showColumnMenu: true,
                                columns: [
                                    { field: 'resourceId', width: 80 },
                                    {
                                        field: 'resourceName',
                                        headerText: 'Resource Name',
                                        width: 180,
                                        template: '<div><img src="src/gantt/images/${resourceName}.png" style="height:25px;width:25px" /><div style="display:inline-block;width:100%;position:relative;left:5px">${resourceName}</div></div>',
                                    },
                                    { field: 'unit', width: 92 },
                                    {
                                        field: 'role',
                                        headerText: 'Role',
                                        allowEditing: false,
                                        width: 120,
                                    },
                                ],
                                filterSettings: { type: 'Menu' },
                            } }),
                        React.createElement(ej2_react_gantt_1.AddDialogFieldDirective, { type: "Segments" }),
                        React.createElement(ej2_react_gantt_1.AddDialogFieldDirective, { type: "Advanced", fields: ['ConstraintType', 'ConstraintDate', 'isManual', 'Work'] })),
                    React.createElement(ej2_react_gantt_1.EditDialogFieldsDirective, null,
                        React.createElement(ej2_react_gantt_1.EditDialogFieldDirective, { type: "General", fields: ['TaskID', 'TaskName', 'StartDate', 'Duration', 'EndDate', 'Progress'] }),
                        React.createElement(ej2_react_gantt_1.EditDialogFieldDirective, { type: "Dependency", additionalParams: {
                                allowSorting: true,
                                toolbar: ['Add', 'Edit', 'Delete', 'Search'],
                                editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
                                searchSettings: { fields: ['name'], ignoreCase: true },
                            } }),
                        React.createElement(ej2_react_gantt_1.EditDialogFieldDirective, { type: "Resources", additionalParams: {
                                allowFiltering: true,
                                allowSorting: true,
                                allowResizing: true,
                                showColumnMenu: true,
                                columns: [
                                    { field: 'resourceId', width: 80 },
                                    {
                                        field: 'resourceName',
                                        headerText: 'Resource Name',
                                        width: 180,
                                        template: '<div><img src="src/gantt/images/${resourceName}.png" style="height:25px;width:25px" /><div style="display:inline-block;width:100%;position:relative;left:5px">${resourceName}</div></div>',
                                    },
                                    { field: 'unit', width: 92 },
                                    {
                                        field: 'role',
                                        headerText: 'Role',
                                        allowEditing: false,
                                        width: 120,
                                    },
                                ],
                                filterSettings: { type: 'Menu' },
                            } }),
                        React.createElement(ej2_react_gantt_1.EditDialogFieldDirective, { type: "Segments", additionalParams: {
                                allowFiltering: true,
                                allowSorting: true,
                                allowReordering: true,
                                allowResizing: true,
                                toolbar: ['Add', 'Edit', 'Delete'],
                                editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
                                filterSettings: { type: 'Menu' },
                            } }),
                        React.createElement(ej2_react_gantt_1.EditDialogFieldDirective, { type: "Advanced", fields: ['ConstraintType', 'ConstraintDate', 'isManual', 'Work'] })),
                    React.createElement(ej2_react_gantt_1.Inject, { services: [ej2_react_gantt_1.Selection, ej2_react_gantt_1.Edit, ej2_react_gantt_1.DayMarkers, ej2_react_gantt_1.ColumnMenu, ej2_react_gantt_1.Toolbar, ej2_react_gantt_1.Filter, ej2_react_gantt_1.Reorder, ej2_react_gantt_1.Sort, ej2_react_gantt_1.Resize] }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample illustrates the phases of a software development project, with tasks like analysis, design, development, testing, and documentation. This also demonstrates CRUD operations in a Gantt Chart.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "This sample demonstrates how to fully customize the dialog editing interface in the React Gantt Chart using the ",
                    React.createElement("code", null,
                        React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/gantt/addDialogFieldSettings/" }, "addDialogFields")),
                    " and ",
                    React.createElement("code", null,
                        React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/gantt/editDialogFieldSettings/" }, "editDialogFields")),
                    " properties along with ",
                    React.createElement("code", null,
                        React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/gantt/editDialogFieldSettings/#additionalparams" }, "additionalParams")),
                    ". It showcases how to override default input and grid components within each tab and organize custom fields across multiple tabs for a structured editing experience. The following tab-level customizations are included:"),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement("b", null, "Dependency Tab"),
                        " - Includes additional toolbar items and improved task naming to simplify task relationship management."),
                    React.createElement("li", null,
                        React.createElement("b", null, "Resource Tab"),
                        " - Combines resource images and names, introduces a Role column, and supports column menu options for flexible configuration."),
                    React.createElement("li", null,
                        React.createElement("b", null, "Segments Tab"),
                        " - Enhanced with extra toolbar options for efficient segment editing and control."),
                    React.createElement("li", null,
                        React.createElement("b", null, "Advanced Tab"),
                        " - Organizes Work and Task Mode input fields for quick access and improved clarity.")),
                React.createElement("p", null,
                    "Gantt component features are segregated into individual feature-wise modules. To use edit, columnMenu, filter, reorder, sort, resize, toolbar, markers and selection features, we need to inject ",
                    React.createElement("code", null, "Edit"),
                    ", ",
                    React.createElement("code", null, "ColumnMenu"),
                    ", ",
                    React.createElement("code", null, "Filter"),
                    ", ",
                    React.createElement("code", null, "Reorder"),
                    ", ",
                    React.createElement("code", null, "Sort"),
                    ", ",
                    React.createElement("code", null, "Resize"),
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
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/gantt/managing-tasks/editing-tasks#edit-tasks-via-dialog" }, "documentation section"),
                    "."))));
    };
    return GanttDialogEditing;
}(sample_base_1.SampleBase));
exports.GanttDialogEditing = GanttDialogEditing;
