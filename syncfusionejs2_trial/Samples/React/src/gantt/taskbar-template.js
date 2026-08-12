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
exports.Taskbar = void 0;
var React = require("react");
var ej2_react_gantt_1 = require("@syncfusion/ej2-react-gantt");
var data_1 = require("./data");
var sample_base_1 = require("../common/sample-base");
require("./taskbar-template.css");
var Taskbar = /** @class */ (function (_super) {
    __extends(Taskbar, _super);
    function Taskbar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.taskFields = {
            id: 'TaskId',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            dependency: 'Predecessor',
            child: 'subtasks'
        };
        _this.splitterSettings = {
            columnIndex: 1
        };
        _this.dayWorkingTime = [{ from: 0, to: 24 }];
        _this.timelineSettings = {
            timelineUnitSize: 70,
            topTier: {
                unit: 'Hour',
                format: 'MMM dd, yyyy'
            },
            bottomTier: {
                unit: 'Minutes',
                count: 2,
                format: 'h:mm a'
            },
        };
        _this.eventMarkerDay1 = new Date('03/05/2025 07:09:00 PM');
        _this.eventMarkerDay2 = new Date('03/05/2025 07:46:00 PM');
        _this.eventMarkerDay3 = new Date('03/05/2025 07:59:00 PM');
        _this.eventMarkerDay4 = new Date('03/05/2025 08:08:00 PM');
        _this.eventMarkerDay5 = new Date('03/05/2025 08:24:00 PM');
        _this.eventMarkerDay6 = new Date('03/05/2025 08:31:00 PM');
        _this.eventMarkerDay7 = new Date('03/05/2025 08:47:00 PM');
        _this.labelSettings = {
            leftLabel: 'TaskName',
        };
        _this.template = _this.tooltipTemplate;
        _this.tooltipSettings = {
            taskbar: _this.template.bind(_this),
        };
        _this.childTaskbarTemplate = _this.taskbarTemplate.bind(_this);
        _this.milestone = _this.milestoneTemplate.bind(_this);
        _this.projectStartDate = new Date('03/05/2025 06:00 PM');
        _this.projectEndDate = new Date('03/05/2025 09:50 PM');
        return _this;
    }
    Taskbar.prototype.tooltipTemplate = function (props) {
        if (props.Winner && props.Movie) {
            return (React.createElement("div", null,
                props.Winner,
                " wins oscar award for ",
                props.Movie));
        }
        else if (props.Movie) {
            return (React.createElement("div", null,
                props.Winner,
                " wins oscar award for ",
                props.Movie));
        }
        else {
            return (React.createElement("div", null, props.Performance));
        }
    };
    ;
    Taskbar.prototype.taskbarTemplate = function (props) {
        if (props.TaskName === 'Oscar moments') {
            return (React.createElement("div", { className: "e-gantt-child-taskbar e-custom-moments", style: { height: "100%", borderRadius: "5px" } }, props.ganttProperties.duration < 4 ?
                React.createElement("img", { className: "moments", src: "src/gantt/images/moments.svg", height: "32", width: "32", alt: 'Oscar Moment svg' }) :
                React.createElement("div", null,
                    React.createElement("img", { className: "moments", src: "src/gantt/images/moments.svg", height: "32", width: "32", alt: 'Oscar Moment svg' }),
                    React.createElement("span", { className: "e-task-label", style: {
                            position: "absolute",
                            top: "15px",
                            left: "40px",
                            right: "5px",
                            fontSize: "12px",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            height: "90%",
                            lineHeight: "1.2",
                        } }, props.Performance))));
        }
        else if (props.TaskName === 'Oscar performance') {
            return (React.createElement("div", { className: "e-gantt-child-taskbar e-custom-performance", style: { height: "100%", borderRadius: "5px" } }, props.ganttProperties.duration <= 5 ?
                React.createElement("img", { className: "face-mask", src: "src/gantt/images/face-mask.svg", height: "32", width: "32", alt: 'Oscar Performance svg' }) :
                React.createElement("div", null,
                    React.createElement("img", { className: "face-mask", src: "src/gantt/images/face-mask.svg", height: "32", width: "32", alt: 'Oscar Performance svg' }),
                    React.createElement("span", { className: "e-task-label e-oscar-performance", style: {
                            position: "absolute",
                            top: "15px",
                            left: "40px",
                            right: "5px",
                            fontSize: "12px",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            height: "90%",
                            lineHeight: "1.2",
                        } }, props.Performance))));
        }
        else {
            return (React.createElement("div", { className: "e-gantt-parent-taskbar e-custom-parent", style: { height: "100%", borderRadius: "5px", textOverflow: "ellipsis" } }, props.ganttProperties.duration < 4 ?
                React.createElement("img", { className: "oscar", src: "src/gantt/images/oscar.svg", height: "32", width: "32", alt: 'Oscar svg' }) :
                props.Winner && props.Movie ?
                    React.createElement("div", null,
                        React.createElement("img", { className: "oscar", src: "src/gantt/images/oscar.svg", height: "32", width: "32", alt: 'Oscar svg' }),
                        React.createElement("span", { className: "e-task-label", style: {
                                position: "absolute",
                                top: "8px",
                                left: "40px",
                                right: "5px",
                                fontSize: "14px",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            } }, props.Winner),
                        React.createElement("span", { className: "e-task-label", style: {
                                position: "absolute",
                                top: "28px",
                                left: "40px",
                                right: "5px",
                                fontSize: "10px",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            } }, props.Movie)) : props.Movie ?
                    React.createElement("div", null,
                        React.createElement("img", { className: "oscar", src: "src/gantt/images/oscar.svg", height: "32", width: "32", alt: 'Oscar svg' }),
                        React.createElement("span", { className: "e-task-label e-oscar-movie", style: {
                                position: "absolute",
                                top: "15px",
                                left: "40px",
                                right: "5px",
                                fontSize: "12px",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            } }, props.Movie)) :
                    React.createElement("span", { className: "e-task-label" })));
        }
    };
    ;
    Taskbar.prototype.milestoneTemplate = function (props) {
        return (React.createElement("div", { className: "e-gantt-milestone", style: {
                marginTop: "3px", width: "41px",
                height: "41px", backgroundColor: "#7ab748", border: "0", position: "absolute", left: "-2px", top: "4px"
            } },
            React.createElement("div", { style: { position: "absolute", top: "4px" } },
                React.createElement("img", { className: "moments", src: "src/gantt/images/moments.svg", height: "24", width: "48", style: { zIndex: 1, top: '1.5px', left: '-3px', transform: 'rotate(-45deg)', position: "absolute" }, alt: "Moments svg" }))));
    };
    Taskbar.prototype.render = function () {
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement(ej2_react_gantt_1.GanttComponent, { id: 'TaskbarTemplate', dataSource: data_1.customizedData, dateFormat: 'hh:mm a', taskFields: this.taskFields, height: '650px', splitterSettings: this.splitterSettings, treeColumnIndex: 1, rowHeight: 75, taskbarHeight: 65, dayWorkingTime: this.dayWorkingTime, durationUnit: 'Minute', timelineSettings: this.timelineSettings, labelSettings: this.labelSettings, tooltipSettings: this.tooltipSettings, milestoneTemplate: this.milestone, taskbarTemplate: this.childTaskbarTemplate, projectStartDate: this.projectStartDate, projectEndDate: this.projectEndDate, allowSelection: true },
                    React.createElement(ej2_react_gantt_1.ColumnsDirective, null,
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'TaskId', headerText: 'Event Id', width: 130 }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'TaskName', headerText: 'Event Name', width: '250', clipMode: 'EllipsisWithTooltip' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'StartDate', headerText: 'Start time' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'EndDate', headerText: 'End time' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Winner', headerText: 'Winner' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Movie', headerText: 'Movie' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Performance', headerText: 'Moments / Performance Details', width: 250 })),
                    React.createElement(ej2_react_gantt_1.EventMarkersDirective, null,
                        React.createElement(ej2_react_gantt_1.EventMarkerDirective, { day: this.eventMarkerDay1, label: 'Performance' }),
                        React.createElement(ej2_react_gantt_1.EventMarkerDirective, { day: this.eventMarkerDay2, label: 'Moments' }),
                        React.createElement(ej2_react_gantt_1.EventMarkerDirective, { day: this.eventMarkerDay3, label: 'Performance' }),
                        React.createElement(ej2_react_gantt_1.EventMarkerDirective, { day: this.eventMarkerDay4, label: 'Moments' }),
                        React.createElement(ej2_react_gantt_1.EventMarkerDirective, { day: this.eventMarkerDay5, label: 'Moments' }),
                        React.createElement(ej2_react_gantt_1.EventMarkerDirective, { day: this.eventMarkerDay6, label: 'Performance' }),
                        React.createElement(ej2_react_gantt_1.EventMarkerDirective, { day: this.eventMarkerDay7, label: 'Moments' })),
                    React.createElement(ej2_react_gantt_1.Inject, { services: [ej2_react_gantt_1.DayMarkers, ej2_react_gantt_1.Selection] })),
                React.createElement("div", { style: { float: 'right', margin: '10px' } },
                    "Source:",
                    React.createElement("a", { href: "https://en.wikipedia.org/wiki/90th_Academy_Awards", target: '_blank' }, "https://en.wikipedia.org/"))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample visualizes the complete event schedule of the 90th Academy awards. Taskbars are customized using template support and timeline header is customized for a better view of the data.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "The Gantt Chart provides support for customizing taskbar UI using taskbar template feature. The",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/gantt#taskbartemplate" }, "taskbarTemplate"),
                    "property accepts either string or HTML element`s ID value, which will be used as the template for the taskbars. The summary tasks and the milestone items can also customized using the ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/gantt#parenttaskbartemplate" }, "parentTaskbarTemplate"),
                    " and",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/gantt#milestonetemplate" }, "milestoneTemplate"),
                    " properties. In this demo, we have customized the taskbar UI to display the data from custom columns and the taskbarTemplate is assigned with the ID of a SCRIPT element whose content is used as the template."),
                React.createElement("p", null,
                    "Gantt component features are segregated into individual feature-wise modules. To use markers and selection features, we need to inject the ",
                    React.createElement("code", null, "DayMarkers"),
                    " and ",
                    React.createElement("code", null, "Selection"),
                    " into the ",
                    React.createElement("code", null, "Inject Services"),
                    " section."),
                React.createElement("br", null),
                React.createElement("p", null,
                    "More information on the Essential",
                    React.createElement("sup", null, "\u00AE"),
                    " React Gantt Chart can be found in this ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/gantt/taskbar#customize-taskbar-templates" }, "documentation section"),
                    "."))));
    };
    return Taskbar;
}(sample_base_1.SampleBase));
exports.Taskbar = Taskbar;
