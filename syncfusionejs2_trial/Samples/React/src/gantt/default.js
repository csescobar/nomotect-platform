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
exports.Default = void 0;
var React = require("react");
var ej2_react_gantt_1 = require("@syncfusion/ej2-react-gantt");
var data_1 = require("./data");
var sample_base_1 = require("../common/sample-base");
var Default = /** @class */ (function (_super) {
    __extends(Default, _super);
    function Default() {
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
        _this.onCreated = function () {
            if (document.querySelector('.e-bigger')) {
                _this.ganttInstance.rowHeight = 48;
                _this.ganttInstance.taskbarHeight = 28;
            }
        };
        _this.projectStartDate = new Date('03/26/2025');
        _this.projectEndDate = new Date('07/20/2025');
        return _this;
    }
    Default.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement(ej2_react_gantt_1.GanttComponent, { id: 'Default', ref: function (gantt) { return _this.ganttInstance = gantt; }, dataSource: data_1.projectNewData, treeColumnIndex: 1, taskFields: this.taskFields, splitterSettings: this.splitterSettings, labelSettings: this.labelSettings, height: '650px', taskbarHeight: 25, rowHeight: 46, projectStartDate: this.projectStartDate, projectEndDate: this.projectEndDate, created: this.onCreated },
                    React.createElement(ej2_react_gantt_1.ColumnsDirective, null,
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'TaskID', width: '80' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'TaskName', headerText: 'Job Name', width: '250', clipMode: 'EllipsisWithTooltip' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'StartDate' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Duration' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Progress' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Predecessor' })),
                    React.createElement(ej2_react_gantt_1.Inject, { services: [ej2_react_gantt_1.Selection] }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample visualizes the various phases involved in a manufacturing process of a product which transforms from a conceptual model to a sellable product.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null, "In this example, you can see how to render a Gantt Chart with the provided data source. The default timeline view week-day mode is applied to Gantt Chart. The dependency lines are enabled in this example to represent the execution order or the hierarchy between the phases."),
                React.createElement("p", null, "Tooltip is enabled for all the UI in this example. To see the tooltip in action, hover the mouse over or tap taskbars, timeline units and dependency lines in touch enabled devices."),
                React.createElement("p", null,
                    "Gantt component features are segregated into individual feature-wise modules. To use selection feature, inject the ",
                    React.createElement("code", null, "Selection"),
                    " into the ",
                    React.createElement("code", null, "Inject Services"),
                    " section."),
                React.createElement("br", null),
                React.createElement("p", null,
                    "More information on the Essential",
                    React.createElement("sup", null, "\u00AE"),
                    " React Gantt Chart can be found in this ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/gantt/getting-started" }, "documentation section"),
                    "."),
                React.createElement("br", null),
                React.createElement("p", null,
                    "Looking for the full React Gantt Chart component overview, features, pricing, and documentation? Visit the ",
                    React.createElement("a", { target: "_blank", href: "https://www.syncfusion.com/react-components/react-gantt-chart" }, "React Gantt Chart"),
                    " page."))));
    };
    return Default;
}(sample_base_1.SampleBase));
exports.Default = Default;
