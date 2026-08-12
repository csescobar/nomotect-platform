"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var ej2_react_gantt_1 = require("@syncfusion/ej2-react-gantt");
var data_1 = require("./data");
var sample_base_1 = require("../common/sample-base");
var GanttColumnMenu = function () {
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
    var labelSettings = {
        leftLabel: 'TaskName'
    };
    var splitterSettings = {
        columnIndex: 4
    };
    var projectStartDate = new Date('03/26/2025');
    var projectEndDate = new Date('07/20/2025');
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: 'control-section' },
            React.createElement(ej2_react_gantt_1.GanttComponent, { id: 'ColumnMenu', treeColumnIndex: 1, showColumnMenu: true, allowFiltering: true, allowSorting: true, allowResizing: true, dataSource: data_1.projectNewData, highlightWeekends: true, splitterSettings: splitterSettings, taskFields: taskFields, labelSettings: labelSettings, height: '650px', taskbarHeight: 25, rowHeight: 46, projectStartDate: projectStartDate, projectEndDate: projectEndDate },
                React.createElement(ej2_react_gantt_1.ColumnsDirective, null,
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'TaskID', headerText: 'ID', width: '100' }),
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'TaskName', headerText: 'Name', width: '250' }),
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'StartDate' }),
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'EndDate' }),
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Duration' }),
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Progress' }),
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Predecessor', headerText: 'Dependency', width: 190 })),
                React.createElement(ej2_react_gantt_1.Inject, { services: [ej2_react_gantt_1.Selection, ej2_react_gantt_1.Filter, ej2_react_gantt_1.Sort, ej2_react_gantt_1.Resize, ej2_react_gantt_1.ColumnMenu] }))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This sample demonstrates the default functionalities of the column menu. Click on the menu icon of each column to open the column menu.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null,
                "Gantt has an option to show column menu while clicking the menu icon of each column. The column menu has an integrated option to interact with the features such as sorting, filtering, column chooser, and autoFit. This feature can be enabled by setting ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/gantt/#showcolumnmenu" }, "showColumnMenu"),
                " to true. The default menu items are:"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement("code", null, "SortAscending"),
                    " - Sorts the current column in ascending order."),
                React.createElement("li", null,
                    React.createElement("code", null, "SortDescending"),
                    " - Sorts the current column in descending order."),
                React.createElement("li", null,
                    React.createElement("code", null, "AutoFit"),
                    " - Auto-fits the current column."),
                React.createElement("li", null,
                    React.createElement("code", null, "AutoFitAll"),
                    " - Auto-fits all columns."),
                React.createElement("li", null,
                    React.createElement("code", null, "ColumnChooser"),
                    " - Toogles the visibility of columns."),
                React.createElement("li", null,
                    React.createElement("code", null, "Filter"),
                    " - Filters the current column.")),
            React.createElement("p", null,
                "In this demo, the column menu feature is enabled by setting ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/gantt/#showcolumnmenu" }, "showColumnMenu"),
                " to true with sorting, filtering, column chooser, and autoFit options."),
            React.createElement("p", null,
                "Gantt component features are segregated into individual feature-wise modules. To use Column Menu, selection, filter, resize and sort features, we need to inject the ",
                React.createElement("code", null, "ColumnMenu"),
                ", ",
                React.createElement("code", null, "Selection"),
                ", ",
                React.createElement("code", null, "Resize"),
                ", ",
                React.createElement("code", null, "Filter"),
                ", and ",
                React.createElement("code", null, "Sort"),
                " into the ",
                React.createElement("code", null, "Inject Services"),
                " section."),
            React.createElement("br", null),
            React.createElement("p", null,
                "More information on the Essential",
                React.createElement("sup", null, "\u00AE"),
                " React Gantt Chart can be found in this ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/gantt/columns/column-menu" }, "documentation section"),
                "."))));
};
exports.default = GanttColumnMenu;
