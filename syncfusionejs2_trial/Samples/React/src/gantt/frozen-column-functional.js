"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var ej2_react_gantt_1 = require("@syncfusion/ej2-react-gantt");
var data_1 = require("./data");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var sample_base_1 = require("../common/sample-base");
require("./frozen-column.css");
var FrozenColumns = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var ganttInstance = (0, react_1.useRef)(null);
    var columnDropDown = (0, react_1.useRef)(null);
    var directionDropDown = (0, react_1.useRef)(null);
    var columnValue = 'TaskID';
    var directionValue = 'Left';
    var leftColumns = [{ id: 'TaskID', name: 'Task ID' },
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
    var directions = [
        { id: 'Left', name: 'Left' },
        { id: 'Right', name: 'Right' },
        { id: 'Fixed', name: 'Fixed' },
        { id: 'None', name: 'None' },
    ];
    var refresh = true;
    var columnChange = function (e) {
        var columnName = e.value;
        columnValue = columnName;
        var column = ganttInstance.current.getColumnByField(columnName, ganttInstance.current.columns);
        var value = column.freeze === undefined ? 'None' : column.freeze;
        refresh = directionDropDown.current.value === value;
        directionDropDown.current.value = value;
    };
    var directionChange = function (e) {
        if (refresh) {
            var columnName_1 = columnDropDown.current.value;
            directionValue = e.value;
            var columns = ganttInstance.current.getGanttColumns();
            var column = columns.find(function (col) { return col.field === columnName_1; });
            if (column) {
                column.freeze = e.value === 'None' ? 'None' : e.value;
                ganttInstance.current.columns = columns;
            }
        }
        refresh = true;
    };
    var taskFields = {
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
    var labelSettings = {
        taskLabel: 'Progress'
    };
    var resourceFields = {
        id: 'resourceId',
        name: 'resourceName',
    };
    var timelineSettings = {
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
    var toolbar = [
        {
            align: 'Left',
            template: '<div class="left-label"><label>Columns:</label></div>'
        },
        {
            align: 'Left',
            template: function () { return (React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { id: "columnDD", ref: columnDropDown, value: columnValue, change: columnChange, dataSource: leftColumns, fields: { value: 'id', text: 'name' } })); },
        },
        {
            align: 'Left',
            template: '<div class="right-label"><label>Freeze Direction:</label></div>'
        },
        {
            align: 'Left',
            template: function () { return (React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { id: "directionDD", ref: directionDropDown, value: directionValue, change: directionChange, dataSource: directions, fields: { value: 'id', text: 'name' } })); }
        },
    ];
    var projectStartDate = new Date('02/27/2025');
    var projectEndDate = new Date('05/04/2025');
    var splitterSettings = {
        position: '70%'
    };
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: 'control-section' },
            React.createElement(ej2_react_gantt_1.GanttComponent, { id: 'frozenColumns', ref: ganttInstance, dataSource: data_1.frozenColumnsData, treeColumnIndex: 1, splitterSettings: splitterSettings, taskFields: taskFields, labelSettings: labelSettings, height: '650px', taskbarHeight: 25, rowHeight: 46, timelineSettings: timelineSettings, resources: data_1.resourceCollection, projectStartDate: projectStartDate, projectEndDate: projectEndDate, allowSelection: false, toolbar: toolbar, resourceFields: resourceFields },
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
                "The freezing feature allows users to freeze a specified number of columns while scrolling the remaining content. The freezing behavior can be configured using the ",
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
exports.default = FrozenColumns;
