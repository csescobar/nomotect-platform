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
exports.FrozenColumns = void 0;
var React = require("react");
var ej2_react_gantt_1 = require("@syncfusion/ej2-react-gantt");
var data_1 = require("./data");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var sample_base_1 = require("../common/sample-base");
require("./frozen-column.css");
var FrozenColumns = /** @class */ (function (_super) {
    __extends(FrozenColumns, _super);
    function FrozenColumns() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.columnValue = "TaskID";
        _this.directionValue = "Left";
        _this.leftColumns = [{ id: 'TaskID', name: 'Task ID' },
            { id: 'TaskName', name: 'Task Name' },
            { id: 'StartDate', name: 'Start Date' },
            { id: 'EndDate', name: 'End Date' },
            { id: 'Duration', name: 'Duration' },
            { id: 'Progress', name: 'Progress' },
            { id: 'Predecessor', name: 'Dependency' },
            { id: 'Resources', name: 'Assignee' },
            { id: 'Designation', name: 'Designation' },
            { id: 'Status', name: 'Status' },
        ];
        _this.directions = [
            { id: 'Left', name: 'Left' },
            { id: 'Right', name: 'Right' },
            { id: 'Fixed', name: 'Fixed' },
            { id: 'None', name: 'None' },
        ];
        _this.refresh = true;
        _this.columnChange = function (e) {
            var columnName = e.value;
            _this.columnValue = columnName;
            var column = _this.ganttInstance.getColumnByField(columnName, _this.ganttInstance.columns);
            var value = column.freeze === undefined ? 'None' : column.freeze;
            _this.refresh = _this.directionDropDown.value === value;
            _this.directionDropDown.value = value;
        };
        _this.directionChange = function (e) {
            if (_this.refresh) {
                var columnName_1 = _this.columnDropDown.value;
                _this.directionValue = e.value;
                var columns = _this.ganttInstance.getGanttColumns();
                var column = columns.find(function (col) { return col.field === columnName_1; });
                if (column) {
                    column.freeze = e.value === 'None' ? 'None' : e.value;
                    _this.ganttInstance.columns = columns;
                }
            }
            _this.refresh = true;
        };
        _this.taskFields = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            parentID: 'ParentID',
            resourceInfo: 'Resources',
        };
        _this.labelSettings = {
            taskLabel: 'Progress'
        };
        _this.resourceFields = {
            id: 'resourceId',
            name: 'resourceName',
        };
        _this.timelineSettings = {
            showTooltip: true,
            topTier: {
                unit: 'Week',
                format: 'dd/MM/yyyy'
            },
            bottomTier: {
                unit: 'Day',
                count: 1
            }
        };
        _this.toolbar = [
            {
                align: 'Left',
                template: '<div class="left-label"><label>Columns:</label></div>'
            },
            {
                align: 'Left',
                template: function () { return (React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { id: "columnDD", ref: function (cd) { return _this.columnDropDown = cd; }, value: _this.columnValue, change: _this.columnChange, dataSource: _this.leftColumns, fields: { value: 'id', text: 'name' } })); },
            },
            {
                align: 'Left',
                template: '<div class="right-label"><label>Freeze Direction:</label></div>'
            },
            {
                align: 'Left',
                template: function () { return (React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { id: "directionDD", ref: function (d) { return _this.directionDropDown = d; }, value: _this.directionValue, change: _this.directionChange, dataSource: _this.directions, fields: { value: 'id', text: 'name' } })); }
            },
        ];
        _this.projectStartDate = new Date('02/27/2025');
        _this.projectEndDate = new Date('05/04/2025');
        _this.splitterSettings = {
            position: '70%'
        };
        return _this;
    }
    FrozenColumns.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement(ej2_react_gantt_1.GanttComponent, { id: 'frozenColumns', ref: function (g) { return _this.ganttInstance = g; }, dataSource: data_1.frozenColumnsData, treeColumnIndex: 1, splitterSettings: this.splitterSettings, taskFields: this.taskFields, labelSettings: this.labelSettings, height: '650px', taskbarHeight: 25, rowHeight: 46, timelineSettings: this.timelineSettings, resources: data_1.resourceCollection, projectStartDate: this.projectStartDate, projectEndDate: this.projectEndDate, allowSelection: false, toolbar: this.toolbar, resourceFields: this.resourceFields },
                    React.createElement(ej2_react_gantt_1.ColumnsDirective, null,
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'TaskID', freeze: 'Left', width: '50' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'TaskName', headerText: 'Task Name', width: '200', freeze: 'Left' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'StartDate', headerText: 'Start Date' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Duration', headerText: 'Duration' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'EndDate', headerText: 'End Date' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Progress', headerText: 'Progress' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Predecessor', headerText: 'Dependency' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Resources', headerText: 'Assignee', freeze: 'Right', width: '200' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Designation', headerText: 'Designation' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Status', headerText: 'Status' })),
                    React.createElement(ej2_react_gantt_1.Inject, { services: [ej2_react_gantt_1.Selection, ej2_react_gantt_1.Freeze, ej2_react_gantt_1.Toolbar] }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates the column freezing feature in the Gantt Chart. Frozen columns remain fixed while other columns scroll horizontally, improving readability.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "The freezing feature allows users to freeze specified number of columns while scrolling the remaining content. The freezing behavior can be configured using the ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/gantt/#frozencolumns" }, "frozenColumns"),
                    " property. Additionally, to keep specific columns visible during horizontal scrolling, use the ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/gantt/columnmodel#freeze" }, "column.freeze"),
                    " property on the relevant columns to freeze them to the ",
                    React.createElement("code", null, "Left"),
                    ", ",
                    React.createElement("code", null, "Right"),
                    " or ",
                    React.createElement("code", null, "Fixed"),
                    "."),
                React.createElement("p", null,
                    "In this example, the ",
                    React.createElement("b", null, "Task ID"),
                    " and ",
                    React.createElement("b", null, "Task Name"),
                    " columns are frozen on the left, and the ",
                    React.createElement("b", null, "Assignee"),
                    " column is frozen on the right using the ",
                    React.createElement("code", { className: "code" }, "column.freeze"),
                    " property. Gantt component features are segregated into individual feature-wise modules. To use column freezing, selection and toolbar, inject the ",
                    React.createElement("code", { className: "code" }, "Freeze"),
                    ", ",
                    React.createElement("code", null, "Selection"),
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
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/gantt/columns/frozen-column" }, "documentation section"),
                    "."))));
    };
    return FrozenColumns;
}(sample_base_1.SampleBase));
exports.FrozenColumns = FrozenColumns;
