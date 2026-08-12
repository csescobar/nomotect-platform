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
exports.Timeline = void 0;
var React = require("react");
var ej2_react_gantt_1 = require("@syncfusion/ej2-react-gantt");
var data_1 = require("./data");
var sample_base_1 = require("../common/sample-base");
var property_pane_1 = require("../common/property-pane");
var ej2_react_inputs_1 = require("@syncfusion/ej2-react-inputs");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var ej2_react_calendars_1 = require("@syncfusion/ej2-react-calendars");
var ej2_base_1 = require("@syncfusion/ej2-base");
var Timeline = /** @class */ (function (_super) {
    __extends(Timeline, _super);
    function Timeline() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.taskFields = {
            id: 'taskID',
            name: 'taskName',
            startDate: 'startDate',
            endDate: 'endDate',
            duration: 'duration',
            progress: 'progress',
            dependency: 'predecessor',
            child: 'subtasks'
        };
        _this.timelineSettings = {
            topTier: {
                format: 'MMM dd, yyyy',
                unit: 'Week',
            },
            bottomTier: {
                unit: 'Day',
            },
            viewStartDate: new Date('02/09/2025'),
            viewEndDate: new Date('03/23/2025')
        };
        _this.labelSettings = {
            rightLabel: 'taskName'
        };
        _this.splitterSettings = {
            columnIndex: 1
        };
        _this.yearformat = [
            { id: 'MMM "yy', format: 'Jan "18' },
            { id: 'y', format: '2018' },
            { id: 'MMMM, y', format: 'January, 18' },
        ];
        _this.monthformat = [
            { id: 'MMM dd, yyyy', format: 'Jan 01, 2018' },
            { id: 'MMMM', format: 'January' },
            { id: 'MMM', format: 'Jan' },
        ];
        _this.weekformat = [
            { id: 'MMM dd, yyyy', format: 'Jan 01, 2019' },
            { id: 'EEE MMM dd, "yy', format: 'Mon Jan 01, "19' },
            { id: 'EEE MMM dd', format: 'Mon Jan 01' },
        ];
        _this.dayformat = [
            { id: '', format: 'M' },
            { id: 'EEE', format: 'Mon' },
            { id: 'dd', format: '01' },
        ];
        _this.hourformat = [
            { id: 'hh', format: '00' },
            { id: 'hh : mm a', format: '00 : 00 AM' },
            { id: 'h : mm a', format: '0 : 00 AM' },
        ];
        _this.unit = [
            { id: 'Year', unit: 'Year' },
            { id: 'Month', unit: 'Month' },
            { id: 'Week', unit: 'Week' },
            { id: 'Day', unit: 'Day' },
            { id: 'Hour', unit: 'Hour' }
        ];
        _this.unitField = { text: 'unit', value: 'id' };
        _this.formatField = { text: 'format', value: 'id' };
        _this.startDateValue = new Date('02/05/2025');
        _this.endDateValue = new Date('03/23/2025');
        _this.changeDateRange = function (args) {
            _this.ganttInstance.timelineSettings.viewStartDate = (0, ej2_base_1.isNullOrUndefined)(args.startDate) ? _this.startDateValue : args.startDate;
            _this.ganttInstance.timelineSettings.viewEndDate = (0, ej2_base_1.isNullOrUndefined)(args.endDate) ? _this.endDateValue : args.endDate;
        };
        return _this;
    }
    Timeline.prototype.topTierCountchange = function (e) {
        var count = e.value;
        this.ganttInstance.timelineSettings.topTier.count = count;
    };
    Timeline.prototype.bottomTierCountchange = function (e) {
        var count = e.value;
        this.ganttInstance.timelineSettings.bottomTier.count = count;
    };
    Timeline.prototype.topUnitChange = function (e) {
        var unit = e.value;
        this.ganttInstance.timelineSettings.topTier.unit = unit;
        if (unit === 'Year') {
            this.topTierformat.dataSource = this.yearformat;
        }
        else if (unit === 'Month') {
            this.topTierformat.dataSource = this.monthformat;
        }
        else if (unit === 'Week') {
            this.topTierformat.dataSource = this.weekformat;
        }
        else if (unit === 'Day') {
            this.topTierformat.dataSource = this.dayformat;
        }
        else {
            this.topTierformat.dataSource = this.hourformat;
        }
        this.topTierformat.value = this.topTierformat.dataSource[0].id;
        this.updateUnitWidth(unit, 'top');
        this.ganttInstance.timelineSettings.topTier.unit = unit;
    };
    Timeline.prototype.bottomUnitChange = function (e) {
        var unit = e.value;
        this.ganttInstance.timelineSettings.bottomTier.unit = unit;
        if (unit === 'Year') {
            this.bottomTierformat.dataSource = this.yearformat;
        }
        else if (unit === 'Month') {
            this.bottomTierformat.dataSource = this.monthformat;
        }
        else if (unit === 'Week') {
            this.bottomTierformat.dataSource = this.weekformat;
        }
        else if (unit === 'Day') {
            this.bottomTierformat.dataSource = this.dayformat;
        }
        else {
            this.bottomTierformat.dataSource = this.hourformat;
        }
        this.bottomTierformat.value = this.bottomTierformat.dataSource[0].id;
        this.updateUnitWidth(unit, 'bottom');
        this.ganttInstance.timelineSettings.bottomTier.unit = unit;
    };
    Timeline.prototype.bottomFormatChange = function (e) {
        var format = e.value;
        this.ganttInstance.timelineSettings.bottomTier.format = format.toString();
    };
    Timeline.prototype.topFormatChange = function (e) {
        var format = e.value;
        this.ganttInstance.timelineSettings.topTier.format = format.toString();
    };
    Timeline.prototype.unitWidth = function (e) {
        var width = e.value;
        this.ganttInstance.timelineSettings.timelineUnitSize = width;
    };
    Timeline.prototype.multitaskbarCheck = function (props) {
        if (this.multitaskbarcheckbox.checked) {
            this.ganttInstance.enableMultiTaskbar = true;
        }
        else {
            this.ganttInstance.enableMultiTaskbar = false;
        }
    };
    Timeline.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement("div", { className: 'col-lg-8' },
                    React.createElement(ej2_react_gantt_1.GanttComponent, { id: 'Timeline', ref: function (gantt) { return _this.ganttInstance = gantt; }, dataSource: data_1.projectData, renderBaseline: true, allowSorting: true, treeColumnIndex: 1, allowSelection: true, taskFields: this.taskFields, timelineSettings: this.timelineSettings, highlightWeekends: true, height: '650px', taskbarHeight: 25, rowHeight: 46, labelSettings: this.labelSettings, splitterSettings: this.splitterSettings },
                        React.createElement(ej2_react_gantt_1.ColumnsDirective, null,
                            React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'taskID', visible: false }),
                            React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'taskName', headerText: 'Name', width: '250' }),
                            React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'startDate', headerText: 'Start Date' }),
                            React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'endDate', headerText: 'End Date' }),
                            React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'duration', headerText: 'Duration' }),
                            React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'predecessor', headerText: 'Dependency' }),
                            React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'progress', headerText: 'Progress' })),
                        React.createElement(ej2_react_gantt_1.Inject, { services: [ej2_react_gantt_1.Selection, ej2_react_gantt_1.Sort, ej2_react_gantt_1.DayMarkers] }))),
                React.createElement("div", { className: 'col-lg-4 property-section' },
                    React.createElement(property_pane_1.PropertyPane, { title: 'Properties' },
                        React.createElement("table", { id: "property", className: "property-panel-table", title: "Properties", style: { width: '100%' } },
                            React.createElement("tbody", null,
                                React.createElement("tr", null,
                                    React.createElement("td", { style: { width: '30%' } },
                                        React.createElement("div", null, "Timeline Range")),
                                    React.createElement("td", { style: { width: '70%' } },
                                        React.createElement("div", null,
                                            React.createElement(ej2_react_calendars_1.DateRangePickerComponent, { startDate: this.startDateValue, endDate: this.endDateValue, change: this.changeDateRange.bind(this) })))),
                                React.createElement("tr", null,
                                    React.createElement("td", { style: { width: '35%', paddingBottom: '10px', display: 'flex', alignItems: 'center' } },
                                        React.createElement("div", null, "Timeline Unit Size")),
                                    React.createElement("td", { style: { width: '65%', paddingBottom: '10px', display: 'flex', alignItems: 'center' } },
                                        React.createElement("div", null,
                                            React.createElement(ej2_react_inputs_1.NumericTextBoxComponent, { ref: function (NumericTextBox) { return _this.timelineUnitSize = NumericTextBox; }, format: 'n', value: 33, min: 10, change: this.unitWidth.bind(this) })))),
                                React.createElement("tr", null),
                                React.createElement("tr", null),
                                React.createElement("tr", null,
                                    React.createElement("td", { style: { width: '35%', paddingBottom: '10px', display: 'flex', alignItems: 'center' } },
                                        React.createElement("div", null,
                                            React.createElement("b", null, "Top tier")))),
                                React.createElement("tr", null,
                                    React.createElement("td", { style: { width: '35%', paddingBottom: '10px', display: 'flex', alignItems: 'center' } },
                                        React.createElement("div", null, "Count")),
                                    React.createElement("td", { style: { width: '65%', paddingBottom: '10px', display: 'flex', alignItems: 'center' } },
                                        React.createElement("div", null,
                                            React.createElement(ej2_react_inputs_1.NumericTextBoxComponent, { ref: function (NumericTextBox) { return _this.topTierCount = NumericTextBox; }, id: "count", format: 'n', min: 1, max: 50, value: 1, className: "form-control", change: this.topTierCountchange.bind(this) })))),
                                React.createElement("tr", null,
                                    React.createElement("td", { style: { width: '35%', paddingBottom: '10px', display: 'flex', alignItems: 'center' } },
                                        React.createElement("div", null, "Unit")),
                                    React.createElement("td", { style: { width: '65%', paddingBottom: '10px', display: 'flex', alignItems: 'center' } },
                                        React.createElement("div", null,
                                            React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { ref: function (DropDownList) { return _this.topTierUnit = DropDownList; }, id: 'unit', tabIndex: 1, dataSource: this.unit, fields: this.unitField, value: 'Week', change: this.topUnitChange.bind(this) })))),
                                React.createElement("tr", null,
                                    React.createElement("td", { style: { width: '35%', paddingBottom: '10px', display: 'flex', alignItems: 'center' } },
                                        React.createElement("div", null, "Format")),
                                    React.createElement("td", { style: { width: '65%', paddingBottom: '10px', display: 'flex', alignItems: 'center' } },
                                        React.createElement("div", null,
                                            React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { ref: function (DropDownList) { return _this.topTierformat = DropDownList; }, id: 'topformat', tabIndex: 1, dataSource: this.weekformat, fields: this.formatField, value: 'MMM dd, yyyy', change: this.topFormatChange.bind(this) })))),
                                React.createElement("tr", null,
                                    React.createElement("td", { style: { width: '35%', paddingBottom: '10px', display: 'flex', alignItems: 'center' } },
                                        React.createElement("div", null,
                                            React.createElement("b", null, "Bottom tier")))),
                                React.createElement("tr", null,
                                    React.createElement("td", { style: { width: '35%', paddingBottom: '10px', display: 'flex', alignItems: 'center' } },
                                        React.createElement("div", null, "Count")),
                                    React.createElement("td", { style: { width: '65%', paddingBottom: '10px', display: 'flex', alignItems: 'center' } },
                                        React.createElement("div", null,
                                            React.createElement(ej2_react_inputs_1.NumericTextBoxComponent, { ref: function (NumericTextBox) { return _this.bottomTierCount = NumericTextBox; }, id: "count", format: 'n', min: 1, max: 50, value: 1, className: "form-control", change: this.bottomTierCountchange.bind(this) })))),
                                React.createElement("tr", null,
                                    React.createElement("td", { style: { width: '35%', paddingBottom: '10px', display: 'flex', alignItems: 'center' } },
                                        React.createElement("div", null, "Unit")),
                                    React.createElement("td", { style: { width: '65%', paddingBottom: '10px', display: 'flex', alignItems: 'center' } },
                                        React.createElement("div", null,
                                            React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { ref: function (DropDownList) { return _this.bottomTierUnit = DropDownList; }, id: 'unit', tabIndex: 1, dataSource: this.unit, fields: this.unitField, value: 'Day', change: this.bottomUnitChange.bind(this) })))),
                                React.createElement("tr", null,
                                    React.createElement("td", { style: { width: '35%', paddingBottom: '10px', display: 'flex', alignItems: 'center' } },
                                        React.createElement("div", null, "Format")),
                                    React.createElement("td", { style: { width: '65%', paddingBottom: '10px', display: 'flex', alignItems: 'center' } },
                                        React.createElement("div", null,
                                            React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { ref: function (DropDownList) { return _this.bottomTierformat = DropDownList; }, id: 'btFormat', tabIndex: 1, dataSource: this.dayformat, fields: this.formatField, value: '', change: this.bottomFormatChange.bind(this) })))),
                                React.createElement("tr", null,
                                    React.createElement("td", { style: { width: '35%', paddingBottom: '10px', display: 'flex', alignItems: 'center' } },
                                        React.createElement("div", null, "Multiple Taskbars")))))))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample allows you to customize the Gantt Chart timeline by adjusting the timeline unit size, header text format, and count for both the top and bottom tiers, and provides an option to enable the multitaskbar feature.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null, "This demo illustrates how to customize the timeline settings in a Gantt Chart. It covers:"),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement("b", null, "Timeline Cell Width:"),
                        " Adjusted using the ",
                        React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/gantt/timelineSettingsModel/#timelineunitsize" }, "timelineUnitSize"),
                        " property."),
                    React.createElement("li", null,
                        React.createElement("b", null, "Timeline Units:"),
                        " Supports minutes, hours, days, weeks, months, and years. Units can be configured for both top and bottom tiers."),
                    React.createElement("li", null,
                        React.createElement("b", null, "Timeline Format:"),
                        " Customizable by modifying the ",
                        React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/gantt/timelineTierSettings/#format" }, "format"),
                        " value for each tier."),
                    React.createElement("li", null,
                        React.createElement("b", null, "Cell Combination:"),
                        " Merge multiple timeline cells using the ",
                        React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/gantt/timelineTierSettings/#count" }, "count"),
                        " property."),
                    React.createElement("li", null,
                        React.createElement("b", null, "Tooltip Visibility:"),
                        " Controlled with the ",
                        React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/gantt/timelineSettings/#showtooltip" }, "showTooltip"),
                        " property (enabled by default)."),
                    React.createElement("li", null,
                        React.createElement("b", null, "Multiple Taskbars:"),
                        " Enabled with ",
                        React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/gantt/#enablemultitaskbar" }, "enableMultiTaskbar"),
                        " to display multiple taskbars within a parent row."),
                    React.createElement("li", null,
                        React.createElement("b", null, "Timeline Date Range:"),
                        " Define the timeline view's start and end dates using ",
                        React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/gantt/timelinesettings#viewstartdate" }, "viewStartDate"),
                        " and ",
                        React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/gantt/timelinesettings#viewenddate" }, "viewEndDate"),
                        ".")),
                React.createElement("br", null),
                React.createElement("p", null, "These settings highlight how the timeline can be customized to support different tiers, unit sizes, and ranges, while also enabling multiple task visualization within the same view."),
                React.createElement("p", null,
                    "Gantt component features are segregated into individual feature-wise modules. To use selection, sorting and marker features, we need to inject the ",
                    React.createElement("code", null, "Selection"),
                    ", ",
                    React.createElement("code", null, "Sort"),
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
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/gantt/time-line/time-line" }, "documentation section"),
                    "."))));
    };
    Timeline.prototype.updateUnitWidth = function (unit, tier) {
        var topUnit = tier === 'top' ? unit : this.ganttInstance.timelineSettings.topTier.unit;
        var bottomUnit = tier === 'bottom' ? unit : this.ganttInstance.timelineSettings.bottomTier.unit;
        var units = ['None', 'Hour', 'Day', 'Week', 'Month', 'Year'];
        var bottomCellUnit;
        var unitWidth;
        if (units.indexOf(topUnit) === 0 && units.indexOf(bottomUnit) === 0) {
            bottomCellUnit = 'Day';
        }
        else if (units.indexOf(topUnit) === 0 && units.indexOf(bottomUnit) > 0) {
            bottomCellUnit = bottomUnit;
        }
        else if (units.indexOf(topUnit) > 0 && units.indexOf(bottomUnit) === 0) {
            bottomCellUnit = topUnit;
        }
        else if (units.indexOf(topUnit) <= units.indexOf(bottomUnit)) {
            bottomCellUnit = topUnit;
        }
        else {
            bottomCellUnit = bottomUnit;
        }
        if (bottomCellUnit === 'Year') {
            unitWidth = 2000;
        }
        else if (bottomCellUnit === 'Month') {
            unitWidth = 300;
        }
        else if (bottomCellUnit === 'Week') {
            unitWidth = 150;
        }
        else if (bottomCellUnit === 'Day') {
            unitWidth = 33;
        }
        else if (bottomCellUnit === 'Hour') {
            unitWidth = 25;
        }
        this.timelineUnitSize.value = unitWidth;
    };
    return Timeline;
}(sample_base_1.SampleBase));
exports.Timeline = Timeline;
