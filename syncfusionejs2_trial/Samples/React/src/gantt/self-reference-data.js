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
exports.SelfReferenceData = void 0;
var React = require("react");
var ej2_react_gantt_1 = require("@syncfusion/ej2-react-gantt");
var data_1 = require("./data");
var sample_base_1 = require("../common/sample-base");
var SelfReferenceData = /** @class */ (function (_super) {
    __extends(SelfReferenceData, _super);
    function SelfReferenceData() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.taskFields = {
            id: 'taskID',
            name: 'taskName',
            startDate: 'startDate',
            endDate: 'endDate',
            duration: 'duration',
            progress: 'progress',
            dependency: 'predecessor',
            parentID: 'parentID'
        };
        _this.labelSettings = {
            leftLabel: 'taskName'
        };
        _this.splitterSettings = {
            columnIndex: 2
        };
        _this.projectStartDate = new Date('01/28/2025');
        _this.projectEndDate = new Date('03/30/2025');
        return _this;
    }
    SelfReferenceData.prototype.render = function () {
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement(ej2_react_gantt_1.GanttComponent, { id: 'SelfReferenceData', dataSource: data_1.selfData, highlightWeekends: true, allowSelection: true, treeColumnIndex: 1, splitterSettings: this.splitterSettings, taskFields: this.taskFields, labelSettings: this.labelSettings, height: '650px', taskbarHeight: 25, rowHeight: 46, projectStartDate: this.projectStartDate, projectEndDate: this.projectEndDate },
                    React.createElement(ej2_react_gantt_1.ColumnsDirective, null,
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'taskID', width: '80' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'taskName', width: '250' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'startDate' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'endDate' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'duration' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'predecessor' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'progress' })),
                    React.createElement(ej2_react_gantt_1.Inject, { services: [ej2_react_gantt_1.Selection, ej2_react_gantt_1.DayMarkers] }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates the way of binding self-referential flat data to the Gantt component.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "This sample demonstrates how to bind self-referential flat data to the Gantt component. Self-referential data uses a ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/gantt/taskFieldsModel/#parentid" }, "parentID"),
                    "field to establish hierarchical relationships between tasks, allowing flat data structures to be displayed as hierarchical task trees."),
                React.createElement("p", null,
                    "In this example, an array of JavaScript objects with ",
                    React.createElement("code", null, "ParentID"),
                    " relationships is assigned as the data source to the Gantt. The ",
                    React.createElement("code", null, "dataSource"),
                    " property accepts array of objects or a ",
                    React.createElement("code", null, "DataManager"),
                    " instance for both local and remote data scenarios."),
                React.createElement("p", null,
                    "Gantt component features are segregated into individual feature-wise modules. To use a selection and marker features, we need to inject the ",
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
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/gantt/data-binding#self-referential-data-binding-flat-data" }, "documentation section"),
                    "."))));
    };
    return SelfReferenceData;
}(sample_base_1.SampleBase));
exports.SelfReferenceData = SelfReferenceData;
