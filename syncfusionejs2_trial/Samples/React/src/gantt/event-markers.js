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
exports.EventMarkers = void 0;
var React = require("react");
var ej2_react_gantt_1 = require("@syncfusion/ej2-react-gantt");
var data_1 = require("./data");
var sample_base_1 = require("../common/sample-base");
var EventMarkers = /** @class */ (function (_super) {
    __extends(EventMarkers, _super);
    function EventMarkers() {
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
        _this.eventMarkerDay1 = new Date("04/01/2025");
        _this.eventMarkerDay2 = new Date("04/07/2025");
        _this.eventMarkerDay3 = new Date("04/07/2025");
        _this.eventMarkerDay4 = new Date("04/17/2025");
        _this.eventMarkerDay5 = new Date("04/17/2025");
        _this.eventMarkerDay6 = new Date("05/23/2025");
        _this.eventMarkerDay7 = new Date("05/29/2025");
        _this.eventMarkerDay8 = new Date("06/26/2025");
        _this.labelSettings = {
            leftLabel: 'TaskName'
        };
        _this.timelineSettings = {
            topTier: {
                unit: 'Week',
                format: 'EEE MMM dd'
            },
            bottomTier: {
                unit: 'Day',
                format: ''
            }
        };
        _this.splitterSettings = {
            columnIndex: 2,
        };
        _this.projectStartDate = new Date('03/26/2025');
        _this.projectEndDate = new Date('07/20/2025');
        return _this;
    }
    EventMarkers.prototype.render = function () {
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement(ej2_react_gantt_1.GanttComponent, { id: 'EventMarkers', dataSource: data_1.EventmarkerData, highlightWeekends: true, timelineSettings: this.timelineSettings, taskFields: this.taskFields, labelSettings: this.labelSettings, height: '650px', taskbarHeight: 25, rowHeight: 46, splitterSettings: this.splitterSettings, projectStartDate: this.projectStartDate, projectEndDate: this.projectEndDate, treeColumnIndex: 1 },
                    React.createElement(ej2_react_gantt_1.ColumnsDirective, null,
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'TaskID', width: '80' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'TaskName', headerText: 'Job Name', width: '250', clipMode: 'EllipsisWithTooltip' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'StartDate' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Duration' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Progress' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Predecessor' })),
                    React.createElement(ej2_react_gantt_1.EventMarkersDirective, null,
                        React.createElement(ej2_react_gantt_1.EventMarkerDirective, { day: this.eventMarkerDay1, label: 'Product Concept Analysis' }),
                        React.createElement(ej2_react_gantt_1.EventMarkerDirective, { day: this.eventMarkerDay2, label: 'Research Phase' }),
                        React.createElement(ej2_react_gantt_1.EventMarkerDirective, { day: this.eventMarkerDay3, label: 'Demand Analysis', top: '150px' }),
                        React.createElement(ej2_react_gantt_1.EventMarkerDirective, { day: this.eventMarkerDay4, label: 'Design Phase', top: '200px' }),
                        React.createElement(ej2_react_gantt_1.EventMarkerDirective, { day: this.eventMarkerDay5, label: 'Competitor Analysis', top: '422px' }),
                        React.createElement(ej2_react_gantt_1.EventMarkerDirective, { day: this.eventMarkerDay6, label: 'Prototype Testing Phase' }),
                        React.createElement(ej2_react_gantt_1.EventMarkerDirective, { day: this.eventMarkerDay7, label: 'Production Launch', top: '5px' }),
                        React.createElement(ej2_react_gantt_1.EventMarkerDirective, { day: this.eventMarkerDay8, label: 'Market Deployment' })),
                    React.createElement(ej2_react_gantt_1.Inject, { services: [ej2_react_gantt_1.Selection, ej2_react_gantt_1.DayMarkers] }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates how to highlight and notify important dates within a project timeline using the Gantt Chart component.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "In this example, ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/gantt/#eventmarkers" }, "eventMarkers"),
                    " act as visual bookmarks to indicate key milestones or stages in the project life cycle. Each marker can display descriptive text on the corresponding date, making it easier to track progress and deadlines."),
                React.createElement("p", null,
                    "The ",
                    React.createElement("strong", null, "Event Markers"),
                    " model provides several properties to customize the appearance and behavior of markers:"),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement("code", null, "cssClass"),
                        ": Apply custom CSS styles to a specific marker."),
                    React.createElement("li", null,
                        React.createElement("code", null, "day"),
                        ": Define the exact date for the event marker."),
                    React.createElement("li", null,
                        React.createElement("code", null, "label"),
                        ": Display text along the vertical line to describe the event."),
                    React.createElement("li", null,
                        React.createElement("code", null, "top"),
                        ": Adjust the vertical position of the marker from the chart pane's content top to avoid overlap when multiple markers share the same date.")),
                React.createElement("p", null,
                    "Gantt component features are segregated into individual feature-wise modules. To use selection and event marker features, we need to inject the ",
                    React.createElement("code", null, "Selection"),
                    " and ",
                    React.createElement("code", null, "DayMarkers"),
                    " into the ",
                    React.createElement("code", null, "Inject Services"),
                    " section respectively."),
                React.createElement("br", null),
                React.createElement("p", null,
                    "More information on the Essential",
                    React.createElement("sup", null, "\u00AE"),
                    " React Gantt Chart can be found in this ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/gantt/event-markers" }, "documentation section"),
                    "."))));
    };
    return EventMarkers;
}(sample_base_1.SampleBase));
exports.EventMarkers = EventMarkers;
