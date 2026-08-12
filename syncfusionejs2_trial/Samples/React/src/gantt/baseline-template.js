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
exports.BaselineTemplate = void 0;
var React = require("react");
var ej2_react_gantt_1 = require("@syncfusion/ej2-react-gantt");
var data_1 = require("./data");
var sample_base_1 = require("../common/sample-base");
require("./baseline.css");
var BaselineTemplate = /** @class */ (function (_super) {
    __extends(BaselineTemplate, _super);
    function BaselineTemplate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.taskFields = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            baselineStartDate: 'BaselineStartDate',
            baselineDuration: 'BaselineDuration',
            dependency: 'Predecessor',
            child: 'subtasks'
        };
        _this.projectStartDate = new Date('2024-05-01');
        _this.projectEndDate = new Date('2024-05-30');
        _this.timelineSettings = {
            topTier: {
                unit: 'Month',
                format: 'MMMM yyyy'
            },
            bottomTier: {
                unit: 'Day',
                count: 1
            }
        };
        _this.tooltipSettings = {
            showTooltip: false
        };
        _this.splitterSettings = {
            columnIndex: 3,
        };
        _this.labelSettings = {
            rightLabel: 'TaskName'
        };
        _this.baselineTemplate = function (props) {
            if (props.hasChildRecords || (props.data && props.data.hasChildRecords)) {
                return '';
            }
            var g = props;
            var gp = g.ganttProperties;
            var chart = _this.ganttInstance.chartRowsModule;
            var baselineTop = chart.baselineTop;
            var baselineHeight = chart.baselineHeight;
            var taskBarHeight = chart.taskBarHeight;
            var milestoneHeight = chart.milestoneHeight;
            var milestoneMarginTop = chart.milestoneMarginTop;
            var rowHeight = _this.ganttInstance.rowHeight;
            var renderBaseline = _this.ganttInstance.renderBaseline;
            var enableRtl = _this.ganttInstance.enableRtl;
            var gap = 9;
            var baselineGap = 4;
            var getLeft = function (date) {
                return _this.ganttInstance.dataOperation.getTaskLeft(new Date(date), false, gp.calendarContext);
            };
            var getWidth = function (start, duration) {
                if (!start || duration == null || duration === 0)
                    return 0;
                var end = new Date(start);
                end.setDate(end.getDate() + duration);
                var leftStart = _this.ganttInstance.dataOperation.getTaskLeft(new Date(start), false, gp.calendarContext);
                var leftEnd = _this.ganttInstance.dataOperation.getTaskLeft(end, false, gp.calendarContext);
                return leftEnd - leftStart;
            };
            var render = function (start, duration, index) {
                if (!start)
                    return '';
                var left = getLeft(start);
                var width = getWidth(start, duration);
                // Milestone baseline
                if (duration === 0) {
                    var size = renderBaseline ? taskBarHeight : (taskBarHeight - 10);
                    var baselineMilestoneHeight = renderBaseline ? 5 : 2;
                    var leftPos = enableRtl
                        ? (left - (milestoneHeight / 2) + 3)
                        : (left - (milestoneHeight / 2) + 1);
                    var marginTop = (-Math.floor(rowHeight - milestoneMarginTop) + baselineMilestoneHeight) + 2 + (index * baselineGap);
                    return '<div class="e-baseline-gantt-milestone-container" style="position:absolute;' +
                        'width:' + size + 'px;' +
                        'height:' + size + 'px;' +
                        'transform:rotate(45deg);' +
                        (enableRtl ? 'right:' : 'left:') + leftPos + 'px;' +
                        'margin-top:' + marginTop + 'px;">' +
                        '</div>';
                }
                // Normal baseline bar
                return '<div class="e-baseline-bar" role="term" style="position:absolute;' +
                    (enableRtl ? 'right:' : 'left:') + left + 'px;' +
                    'margin-top:' + (baselineTop + (index * gap)) + 'px;' +
                    'width:' + width + 'px;' +
                    'height:' + baselineHeight + 'px;"></div>';
            };
            return ('<div class="custom-multi-baseline">' +
                render(g.BaselineStartDate, g.BaselineDuration, 0) +
                render(g.BaselineStartDate1, g.BaselineDuration1, 1) +
                render(g.BaselineStartDate2, g.BaselineDuration2, 2) +
                '</div>');
        };
        return _this;
    }
    BaselineTemplate.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement(ej2_react_gantt_1.GanttComponent, { id: 'BaselineTemplate', ref: function (gantt) { return _this.ganttInstance = gantt; }, dataSource: data_1.baselineTemplateData, taskFields: this.taskFields, baselineTemplate: this.baselineTemplate, renderBaseline: true, labelSettings: this.labelSettings, splitterSettings: this.splitterSettings, projectStartDate: this.projectStartDate, projectEndDate: this.projectEndDate, allowSelection: true, gridLines: "Both", highlightWeekends: true, timelineSettings: this.timelineSettings, tooltipSettings: this.tooltipSettings, height: '550px', rowHeight: 60, taskbarHeight: 20 },
                    React.createElement(ej2_react_gantt_1.ColumnsDirective, null,
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'TaskID', headerText: 'ID', textAlign: 'Left' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'TaskName', width: 270, headerText: 'Name' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'BaselineStartDate', headerText: 'Baseline Start Date', width: 180 }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'BaselineDuration', headerText: 'Baseline Duration', width: 180 }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'BaselineStartDate1', format: { skeleton: 'yMd', type: 'date' }, headerText: 'Baseline1 Start Date', width: 180 }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'BaselineDuration1', headerText: 'Baseline1 Duration', width: 180 }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'BaselineStartDate2', format: { skeleton: 'yMd', type: 'date' }, headerText: 'Baseline2 Start Date', width: 180 }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'BaselineDuration2', headerText: 'Baseline2 Duration', width: 180 })),
                    React.createElement(ej2_react_gantt_1.Inject, { services: [ej2_react_gantt_1.Selection] }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates how multiple baselines can be displayed within a single task to highlight variations across different planning stages and improve visibility into project changes.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "In this example, the Gantt Chart visualizes a product workflow where each task includes multiple baseline bars using custom baseline fields. This allows users to view different planned schedules such as initial, revised, and final plans together.The ",
                    React.createElement("a", { target: "_blank", rel: "noopener noreferrer", href: "https://ej2.syncfusion.com/react/documentation/api/gantt/index-default#baselinetemplate" }, "baselineTemplate"),
                    " property is used to customize the appearance of each baseline bar. It provides control over styling, colors, and positioning, making it easy to distinguish between baseline representations."),
                React.createElement("br", null),
                React.createElement("p", null,
                    "More information on the Essential\u00AE React Gantt Chart can be found in the ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/javascript/documentation/gantt/baseline" }, "baseline"),
                    " documentation section."))));
    };
    return BaselineTemplate;
}(sample_base_1.SampleBase));
exports.BaselineTemplate = BaselineTemplate;
