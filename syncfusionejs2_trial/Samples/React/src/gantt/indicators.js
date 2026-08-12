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
exports.Indicators = void 0;
var React = require("react");
var ej2_react_gantt_1 = require("@syncfusion/ej2-react-gantt");
var data_1 = require("./data");
var sample_base_1 = require("../common/sample-base");
require("./indicators.css");
var Indicators = /** @class */ (function (_super) {
    __extends(Indicators, _super);
    function Indicators() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.taskFields = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            parentID: 'ParentId',
            indicators: 'Indicators'
        };
        _this.labelSettings = {
            leftLabel: 'TaskName'
        };
        _this.splitterSettings = {
            columnIndex: 2
        };
        _this.projectStartDate = new Date('03/26/2025');
        _this.projectEndDate = new Date('07/20/2025');
        return _this;
    }
    Indicators.prototype.render = function () {
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement(ej2_react_gantt_1.GanttComponent, { id: 'Indicators', dataSource: data_1.projectNewData, highlightWeekends: true, treeColumnIndex: 1, taskFields: this.taskFields, labelSettings: this.labelSettings, height: '650px', taskbarHeight: 25, rowHeight: 46, projectStartDate: this.projectStartDate, projectEndDate: this.projectEndDate, splitterSettings: this.splitterSettings },
                    React.createElement(ej2_react_gantt_1.ColumnsDirective, null,
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'TaskID', width: '80' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'TaskName', width: '300' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'StartDate' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'EndDate' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Duration' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Predecessor' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Progress' })),
                    React.createElement(ej2_react_gantt_1.Inject, { services: [ej2_react_gantt_1.Selection, ej2_react_gantt_1.DayMarkers] }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample visualizes how to mention special moment in any mentioned day for a particular task with different icon and label.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "In this example, ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/gantt/taskFieldsModel/#indicators" }, "indicators"),
                    " are displayed with some custom text in specified day of task, which are defined in dataSource. You can define the indicators with the following properties for tasks:"),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement("code", null, "date"),
                        ": Defines the date value to where we want to display the indicators."),
                    React.createElement("li", null,
                        React.createElement("code", null, "iconClass"),
                        ": Defines the icon to highlight the indicator."),
                    React.createElement("li", null,
                        React.createElement("code", null, "name"),
                        ": Defines text to be displayed in the mentioned date."),
                    React.createElement("li", null,
                        React.createElement("code", null, "tooltip"),
                        ": The text to be displayed when hover the mouse over the indicator.")),
                React.createElement("p", null,
                    "Gantt component features are segregated into individual feature-wise modules. To use a selection support and event marker features, we need to inject the ",
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
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/gantt/data-markers" }, "documentation section"),
                    "."))));
    };
    return Indicators;
}(sample_base_1.SampleBase));
exports.Indicators = Indicators;
