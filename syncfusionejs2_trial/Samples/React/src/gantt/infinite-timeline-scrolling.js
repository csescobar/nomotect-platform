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
exports.InfiniteTimelineScroll = void 0;
var React = require("react");
var ej2_react_gantt_1 = require("@syncfusion/ej2-react-gantt");
var data_1 = require("./data");
var sample_base_1 = require("../common/sample-base");
var InfiniteTimelineScroll = /** @class */ (function (_super) {
    __extends(InfiniteTimelineScroll, _super);
    function InfiniteTimelineScroll() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.taskFields = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            child: 'subtasks'
        };
        _this.editSettings = {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true
        };
        _this.splitterSettings = {
            columnIndex: 3
        };
        _this.gridLines = 'Both';
        _this.timelineSettings = {
            topTier: {
                unit: 'Week',
                format: 'MMM dd, y',
            },
            bottomTier: {
                unit: 'Day',
            },
            viewStartDate: new Date('12/29/2025'),
            viewEndDate: new Date('04/05/2026')
        };
        _this.labelSettings = {
            leftLabel: 'TaskID',
            rightLabel: 'TaskName',
            taskLabel: '${Progress}%'
        };
        return _this;
    }
    InfiniteTimelineScroll.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement(ej2_react_gantt_1.GanttComponent, { id: 'InfiniteScrolling', ref: function (gantt) { return _this.ganttInstance = gantt; }, dataSource: data_1.infiniteTimelineScrollData, enableInfiniteTimelineScroll: true, treeColumnIndex: 1, allowSelection: true, highlightWeekends: true, splitterSettings: this.splitterSettings, rowHeight: 46, taskFields: this.taskFields, timelineSettings: this.timelineSettings, labelSettings: this.labelSettings, height: '650px', editSettings: this.editSettings, gridLines: this.gridLines },
                    React.createElement(ej2_react_gantt_1.ColumnsDirective, null,
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'TaskID', width: '80' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'TaskName', headerText: 'Job Name', width: '250', clipMode: 'EllipsisWithTooltip' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'StartDate' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Duration' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Progress' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Predecessor' })),
                    React.createElement(ej2_react_gantt_1.Inject, { services: [ej2_react_gantt_1.Edit, ej2_react_gantt_1.Selection] }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates the infinite timeline scrolling feature in the Gantt Chart, allowing users to navigate across project timelines without fixed date boundaries.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "By enabling the ",
                    React.createElement("a", { target: "_blank", rel: "noopener noreferrer", href: "https://ej2.syncfusion.com/react/documentation/api/gantt/#enableinfinitetimelinescroll" }, "enableInfiniteTimelineScroll"),
                    " property, the timeline dynamically generates additional date ranges as you scroll horizontally. When the scroll position reaches the edges of the visible timeline, new segments are rendered automatically, ensuring uninterrupted navigation in either direction."),
                React.createElement("p", null,
                    "More information on the Essential",
                    React.createElement("sup", null, "\u00AE"),
                    " React Gantt Chart can be found in the ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/gantt/timeline/timeline" }, "timeline"),
                    " documentation section."))));
    };
    return InfiniteTimelineScroll;
}(sample_base_1.SampleBase));
exports.InfiniteTimelineScroll = InfiniteTimelineScroll;
