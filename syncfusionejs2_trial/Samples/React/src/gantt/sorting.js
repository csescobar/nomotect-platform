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
exports.Sorting = void 0;
var React = require("react");
var ej2_react_gantt_1 = require("@syncfusion/ej2-react-gantt");
var data_1 = require("./data");
var sample_base_1 = require("../common/sample-base");
var Sorting = /** @class */ (function (_super) {
    __extends(Sorting, _super);
    function Sorting() {
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
        _this.labelSettings = {
            leftLabel: 'TaskName'
        };
        _this.splitterSettings = {
            columnIndex: 2
        };
        _this.sortSettings = {
            columns: [{ field: 'TaskName', direction: 'Ascending' }, { field: 'TaskID', direction: 'Ascending' }]
        };
        _this.projectStartDate = new Date('03/26/2025');
        _this.projectEndDate = new Date('09/01/2025');
        return _this;
    }
    Sorting.prototype.render = function () {
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement(ej2_react_gantt_1.GanttComponent, { id: 'Sorting', dataSource: data_1.editingData, highlightWeekends: true, allowSelection: true, taskFields: this.taskFields, splitterSettings: this.splitterSettings, treeColumnIndex: 1, labelSettings: this.labelSettings, height: '650px', taskbarHeight: 25, rowHeight: 46, selectedRowIndex: 0, sortSettings: this.sortSettings, allowSorting: true, projectStartDate: this.projectStartDate, projectEndDate: this.projectEndDate },
                    React.createElement(ej2_react_gantt_1.ColumnsDirective, null,
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'TaskID', visible: false, width: '80' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'TaskName', width: '250' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'StartDate' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'EndDate' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Duration' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Progress' })),
                    React.createElement(ej2_react_gantt_1.Inject, { services: [ej2_react_gantt_1.Selection, ej2_react_gantt_1.DayMarkers, ej2_react_gantt_1.Sort] }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates the Gantt multi-sorting feature. To sort two or more columns, hold the CTRL key, and click the column header.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "The sorting feature enables you to order data in a particular direction. It can be enabled by setting ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/gantt#allowsorting" }, "allowSorting"),
                    " to true."),
                React.createElement("p", null, "To sort a Gantt column, click the column header. The icons (ascending) and (descending) specify the sort direction of a column."),
                React.createElement("p", null,
                    "By default, the multi-sorting feature is enabled in Gantt. To sort multiple columns, hold the ",
                    React.createElement("strong", null, "CTRL"),
                    " key, and then click the column header. To clear sort for a column, hold the ",
                    React.createElement("strong", null, "SHIFT"),
                    " key, and then click the column header."),
                React.createElement("p", null,
                    "In this demo, multiple sorting enabled on load time by assigning multiple columns into ",
                    React.createElement("code", null, "sortSettings"),
                    " property."),
                React.createElement("p", null,
                    "Gantt component features are segregated into individual feature-wise modules. To use a selection, markers and sorting features, we need to inject the ",
                    React.createElement("code", null, "Selection"),
                    ", ",
                    React.createElement("code", null, "DayMarkers"),
                    " and ",
                    React.createElement("code", null, "Sort"),
                    " into the ",
                    React.createElement("code", null, "Inject Services"),
                    " section."),
                React.createElement("br", null),
                React.createElement("p", null,
                    "More information on the Essential",
                    React.createElement("sup", null, "\u00AE"),
                    " React Gantt Chart can be found in this ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/gantt/sorting" }, "documentation section"),
                    "."))));
    };
    return Sorting;
}(sample_base_1.SampleBase));
exports.Sorting = Sorting;
