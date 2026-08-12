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
exports.Holidays = void 0;
var React = require("react");
var ej2_react_gantt_1 = require("@syncfusion/ej2-react-gantt");
var data_1 = require("./data");
var sample_base_1 = require("../common/sample-base");
var Holidays = /** @class */ (function (_super) {
    __extends(Holidays, _super);
    function Holidays() {
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
            rightLabel: 'TaskName'
        };
        _this.splitterSettings = {
            columnIndex: 1
        };
        _this.projectStartDate = new Date('03/25/2025');
        _this.projectEndDate = new Date('07/20/2025');
        return _this;
    }
    Holidays.prototype.render = function () {
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement(ej2_react_gantt_1.GanttComponent, { id: 'Holidays', dataSource: data_1.projectNewData, highlightWeekends: true, treeColumnIndex: 1, taskFields: this.taskFields, labelSettings: this.labelSettings, height: '650px', taskbarHeight: 25, rowHeight: 46, projectStartDate: this.projectStartDate, projectEndDate: this.projectEndDate, splitterSettings: this.splitterSettings },
                    React.createElement(ej2_react_gantt_1.ColumnsDirective, null,
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'TaskID', visible: false, width: '80' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'TaskName', width: '280' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'StartDate' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'EndDate' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Duration' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Predecessor' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Progress' })),
                    React.createElement(ej2_react_gantt_1.HolidaysDirective, null,
                        React.createElement(ej2_react_gantt_1.HolidayDirective, { from: '03/28/2025', to: '03/28/2025', label: 'Good Friday' }),
                        React.createElement(ej2_react_gantt_1.HolidayDirective, { from: '03/30/2025', to: '03/30/2025', label: 'Easter Sunday' }),
                        React.createElement(ej2_react_gantt_1.HolidayDirective, { from: '05/26/2025', to: '05/26/2025', label: 'Memorial Day' }),
                        React.createElement(ej2_react_gantt_1.HolidayDirective, { from: '07/04/2025', to: '07/04/2025', label: 'Independence Day' })),
                    React.createElement(ej2_react_gantt_1.Inject, { services: [ej2_react_gantt_1.Selection, ej2_react_gantt_1.DayMarkers] }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample visualizes how to define the holidays in between the project timeline. ")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "In this example,",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/gantt#holidays" }, "holidays"),
                    " are displayed with vertical bar with the desired text using the ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/gantt/holidayModel/#label" }, "label"),
                    " property. You can also mention the continuous holidays by specifying the ",
                    React.createElement("code", null, "from"),
                    " and ",
                    React.createElement("code", null, "to"),
                    " range. For single holiday, you can define from value alone. Holidays are defined as an array of object collection, so that we can display more than one holiday in the project."),
                React.createElement("p", null,
                    "You can even assign the ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/gantt/holidayModel/#cssclass" }, "cssClass"),
                    " to each holiday to change the default color of label and background."),
                React.createElement("p", null,
                    "Gantt component features are segregated into individual feature-wise modules. To use a selection support and holiday features, we need to inject the ",
                    React.createElement("code", null, "Selection"),
                    " and ",
                    React.createElement("code", null, "DayMarkers"),
                    " into the ",
                    React.createElement("code", null, "Inject Services"),
                    " section."),
                React.createElement("br", null),
                React.createElement("p", null,
                    "More information on the Essential",
                    React.createElement("sup", null, "\u00AE"),
                    " React Gantt Chart can be found in this ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/gantt/holidays" }, "documentation section"),
                    "."))));
    };
    return Holidays;
}(sample_base_1.SampleBase));
exports.Holidays = Holidays;
