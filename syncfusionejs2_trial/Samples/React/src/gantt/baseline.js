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
exports.Baseline = void 0;
var React = require("react");
var ej2_react_gantt_1 = require("@syncfusion/ej2-react-gantt");
var data_1 = require("./data");
var sample_base_1 = require("../common/sample-base");
require("./baseline.css");
var Baseline = /** @class */ (function (_super) {
    __extends(Baseline, _super);
    function Baseline() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.themeColors = {
            'material3': {
                onTime: '#F0FDF4',
                delayed: '#FFF7ED',
                baseline: '#DAA520',
                onTimeProgress: '#15803D',
                delayedProgress: '#C2410C'
            },
            'material3-dark': {
                onTime: '#122A2C',
                delayed: '#282125',
                baseline: '#9CA3AF',
                onTimeProgress: '#22C55E',
                delayedProgress: '#FB923C'
            },
            'tailwind3': {
                onTime: '#F0FDF4',
                delayed: '#FFF7ED',
                baseline: '#DAA520',
                onTimeProgress: '#15803D',
                delayedProgress: '#C2410C'
            },
            'tailwind3-dark': {
                onTime: '#122A2C',
                delayed: '#282125',
                baseline: '#9CA3AF',
                onTimeProgress: '#22C55E',
                delayedProgress: '#FB923C'
            },
            'bootstrap5_3': {
                onTime: '#F0FDF4',
                delayed: '#FFF7ED',
                baseline: '#DAA520',
                onTimeProgress: '#15803D',
                delayedProgress: '#C2410C'
            },
            'bootstrap5_3-dark': {
                onTime: '#122A2C',
                delayed: '#282125',
                baseline: '#9CA3AF',
                onTimeProgress: '#22C55E',
                delayedProgress: '#FB923C'
            },
            'fluent2': {
                onTime: '#F0FDF4',
                delayed: '#FFF7ED',
                baseline: '#DAA520',
                onTimeProgress: '#15803D',
                delayedProgress: '#C2410C'
            },
            'fluent2-dark': {
                onTime: '#122A2C',
                delayed: '#282125',
                baseline: '#9CA3AF',
                onTimeProgress: '#22C55E',
                delayedProgress: '#FB923C'
            },
            'fluent2-highcontrast': {
                onTime: '#122A2C',
                delayed: '#282125',
                baseline: '#9CA3AF',
                onTimeProgress: '#22C55E',
                delayedProgress: '#FB923C'
            }
        };
        _this.state = { currentTheme: 'material3' };
        _this.taskFields = {
            id: 'TaskId',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            baselineStartDate: 'BaselineStartDate',
            baselineEndDate: 'BaselineEndDate',
            baselineDuration: 'baselineDur',
            parentID: 'ParentId',
            duration: 'Duration',
            dependency: 'Predecessor',
            progress: 'Progress'
        };
        _this.projectStartDate = new Date('07/02/2025');
        _this.projectEndDate = new Date('09/15/2025');
        _this.timelineSettings = {
            topTier: {
                unit: 'Month',
                format: 'MMMM yyyy'
            },
            bottomTier: {
                unit: 'Day'
            }
        };
        _this.getCurrentTheme = function () {
            var themeClasses = Object.keys(_this.themeColors); // Extract theme names from themeColors
            var currentTheme = themeClasses.find(function (theme) { return document.body.classList.contains(theme); });
            return currentTheme || 'material3'; // Default theme
        };
        _this.parentTaskbarTemplate = function (props) { return (React.createElement("div", { className: "e-gantt-parent-taskbar e-row-expand e-custom-parent", style: { height: '10px', marginTop: '17px', background: '#F3F4F6', border: '1px solid #9CA3AF', borderRadius: '5px', textOverflow: 'ellipsis' } },
            React.createElement("div", { className: "e-gantt-parent-progressbar e-custom-progress", style: { height: '100%', width: "".concat(props.ganttProperties.progressWidth, "px"), background: '#9CA3AF', borderRadius: '5px' } }),
            React.createElement("span", { className: "e-label", style: { position: 'absolute', top: '0px', right: '6px', fontSize: '12px', textOverflow: 'ellipsis', whiteSpace: 'nowrap', margin: '0px' } },
                props.TaskName,
                " | ",
                _this.ganttInstance.getFormatedDate(props.ganttProperties.startDate),
                " - ",
                _this.ganttInstance.getFormatedDate(props.ganttProperties.endDate),
                " | ",
                props.ganttProperties.duration,
                " days"))); };
        _this.rightLabelTemplate = function (props) {
            if (props.ganttProperties.parentId) {
                return React.createElement("span", { className: "e-label" }, props.TaskName);
            }
            return null;
        };
        _this.splitterSettings = {
            columnIndex: 4,
        };
        _this.tooltipTemplate = function (props) { return (React.createElement("table", null,
            React.createElement("tbody", null,
                React.createElement("tr", null,
                    React.createElement("td", { colSpan: 3 }, props.TaskName)),
                React.createElement("tr", null,
                    React.createElement("td", null, "Start Time"),
                    React.createElement("td", null, ":"),
                    React.createElement("td", null, _this.ganttInstance.getFormatedDate(props.StartDate))),
                React.createElement("tr", null,
                    React.createElement("td", null, "End Time"),
                    React.createElement("td", null, ":"),
                    React.createElement("td", null, _this.ganttInstance.getFormatedDate(props.EndDate))),
                React.createElement("tr", null,
                    React.createElement("td", null, "Planned start time"),
                    React.createElement("td", null, ":"),
                    React.createElement("td", null, _this.ganttInstance.getFormatedDate(props.BaselineStartDate))),
                React.createElement("tr", null,
                    React.createElement("td", null, "Planned end time"),
                    React.createElement("td", null, ":"),
                    React.createElement("td", null, _this.ganttInstance.getFormatedDate(props.BaselineEndDate)))))); };
        _this.template = _this.tooltipTemplate;
        _this.queryTaskbarInfo = function (args) {
            var _a, _b, _c;
            var newTheme = _this.getCurrentTheme();
            if (newTheme !== _this.state.currentTheme) {
                _this.setState({ currentTheme: newTheme });
            }
            var colors = _this.themeColors[_this.state.currentTheme];
            var taskbarColor = !args.data.ganttProperties.baselineStartDate ||
                !args.data.ganttProperties.baselineEndDate ||
                args.data.ganttProperties.startDate <= args.data.ganttProperties.baselineStartDate
                ? colors.onTime : colors.delayed;
            var progressColor = !args.data.ganttProperties.baselineStartDate ||
                !args.data.ganttProperties.baselineEndDate ||
                args.data.ganttProperties.startDate <= args.data.ganttProperties.baselineStartDate
                ? colors.onTimeProgress : colors.delayedProgress;
            if (args.taskbarType !== 'ParentTask') {
                if (_this.state.currentTheme === 'material3' || _this.state.currentTheme === 'material3-dark') {
                    if (args.taskbarType !== 'Milestone') {
                        (_a = args.taskbarElement.querySelectorAll('.e-gantt-child-taskbar-inner-div')[0]) === null || _a === void 0 ? void 0 : _a.style.setProperty('background', taskbarColor, 'important');
                    }
                    else {
                        (_b = args.taskbarElement.querySelectorAll('.e-gantt-milestone')[0]) === null || _b === void 0 ? void 0 : _b.style.setProperty('border', progressColor, 'important');
                        (_c = args.rowElement.querySelectorAll('.e-baseline-gantt-milestone-container')[0]) === null || _c === void 0 ? void 0 : _c.style.setProperty('border', colors.baseline, 'important');
                    }
                }
                args.taskbarBgColor = taskbarColor;
                args.milestoneColor = progressColor;
                args.taskbarBorderColor = progressColor;
                args.progressBarBgColor = progressColor;
            }
            args.baselineColor = colors.baseline;
        };
        _this.queryCellInfo = function (args) {
            if (args.column.field === 'variance') {
                var start = args.data.ganttProperties.startDate;
                var baselineStart = args.data.ganttProperties.baselineStartDate;
                var baselineEnd = args.data.ganttProperties.baselineEndDate;
                if (!baselineStart || !baselineEnd || !start || start <= baselineStart) {
                    args.data.variance = 0;
                    args.data.taskData.variance = 0;
                    args.cell.innerText = '0 days';
                    return;
                }
                var diffInDays = (start - baselineStart) / (1000 * 60 * 60 * 24);
                var roundedDiff = Math.round(diffInDays);
                args.data.variance = roundedDiff;
                args.data.taskData.variance = roundedDiff;
                args.cell.innerText = roundedDiff + ' days';
            }
        };
        _this.labelSettings = {
            rightLabel: _this.rightLabelTemplate
        };
        _this.tooltipSettings = {
            taskbar: _this.template.bind(_this),
        };
        return _this;
    }
    Baseline.prototype.componentDidMount = function () {
        this.setState({ currentTheme: this.getCurrentTheme() });
    };
    Baseline.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement(ej2_react_gantt_1.GanttComponent, { id: 'Baseline', ref: function (gantt) { return _this.ganttInstance = gantt; }, dataSource: data_1.baselineData, renderBaseline: true, labelSettings: this.labelSettings, parentTaskbarTemplate: this.parentTaskbarTemplate, treeColumnIndex: 0, allowSelection: true, projectStartDate: this.projectStartDate, projectEndDate: this.projectEndDate, splitterSettings: this.splitterSettings, taskFields: this.taskFields, timelineSettings: this.timelineSettings, includeWeekend: true, queryCellInfo: this.queryCellInfo, queryTaskbarInfo: this.queryTaskbarInfo, height: '650px', taskbarHeight: 25, rowHeight: 46, tooltipSettings: this.tooltipSettings },
                    React.createElement(ej2_react_gantt_1.ColumnsDirective, null,
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'TaskName', headerText: 'Task Name', width: '200' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'StartDate', width: '130' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Duration', width: '125' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'BaselineStartDate', headerText: 'Baseline StartDate', width: '195' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'baselineDur', headerText: 'Baseline Duration', type: 'string', editType: 'stringedit', width: '195' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'variance', headerText: 'Variance', allowEditing: false, width: '130' })),
                    React.createElement(ej2_react_gantt_1.Inject, { services: [ej2_react_gantt_1.Selection] })),
                React.createElement("div", { style: { float: 'right', margin: '10px' } },
                    "Source:",
                    React.createElement("a", { href: "https://en.wikipedia.org/wiki/Service_(motor_vehicle)", target: '_blank' }, "https://en.wikipedia.org/"))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample visualizes the complete car service schedule using the React Gantt Chart. Baselines are enabled to highlight deviations between planned and actual service dates, helping track schedule accuracy across all tasks and milestones.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null, " In this demo sample, the baseline feature in the React Gantt Chart helps visualize the variance between planned and actual task schedules. Baselines provide a clear reference for tracking project deviations and are rendered for all task types including child tasks, parent tasks, and milestones."),
                React.createElement("p", null,
                    "To enable baselines in the React Gantt Chart, set the ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/gantt/#renderbaseline" }, "renderBaseline"),
                    " property to ",
                    React.createElement("code", null, "true"),
                    " and define the planned schedule using the",
                    React.createElement("code", null, "baselineStartDate"),
                    " field. You can either specify the ",
                    React.createElement("code", null, "baselineEndDate"),
                    " directly or use the ",
                    React.createElement("code", null, "baselineDuration"),
                    " property to calculate it automatically. Setting ",
                    React.createElement("code", null, "baselineDuration"),
                    " to zero is particularly useful for milestones, as it clearly marks a planned point in time. The appearance of baselines can be customized using the ",
                    React.createElement("code", null,
                        React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/gantt/#baselinecolor" }, "baselineColor")),
                    " property to visually distinguish planned timelines from actual task progress."),
                React.createElement("p", null,
                    "Gantt component features are segregated into individual feature-wise modules. To use Selection feature, we need to inject the ",
                    React.createElement("code", null, "Selection"),
                    " into the ",
                    React.createElement("code", null, "Inject Services"),
                    " section."),
                React.createElement("br", null),
                React.createElement("p", null,
                    "More information on the Essential",
                    React.createElement("sup", null, "\u00AE"),
                    " React Gantt Chart can be found in this ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/gantt/baseline" }, "documentation section"),
                    "."))));
    };
    return Baseline;
}(sample_base_1.SampleBase));
exports.Baseline = Baseline;
