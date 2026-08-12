"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var ej2_react_gantt_1 = require("@syncfusion/ej2-react-gantt");
var data_1 = require("./data");
var sample_base_1 = require("../common/sample-base");
var property_pane_1 = require("../common/property-pane");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var ej2_react_inputs_1 = require("@syncfusion/ej2-react-inputs");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var ej2_react_calendars_1 = require("@syncfusion/ej2-react-calendars");
var ej2_base_1 = require("@syncfusion/ej2-base");
var Timeline = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var taskFields = {
        id: 'taskID',
        name: 'taskName',
        startDate: 'startDate',
        endDate: 'endDate',
        duration: 'duration',
        progress: 'progress',
        dependency: 'predecessor',
        child: 'subtasks'
    };
    var ganttInstance = (0, react_1.useRef)(null);
    var topTierformat = (0, react_1.useRef)(null);
    var bottomTierformat = (0, react_1.useRef)(null);
    var topTierCheckbox = (0, react_1.useRef)(null);
    var bottomTierCheckbox = (0, react_1.useRef)(null);
    var topTierUnit = (0, react_1.useRef)(null);
    var bottomTierUnit = (0, react_1.useRef)(null);
    var topTierCount = (0, react_1.useRef)(null);
    var bottomTierCount = (0, react_1.useRef)(null);
    var timelineUnitSize = (0, react_1.useRef)(null);
    var multitaskbarcheckbox = (0, react_1.useRef)(null);
    var timelineSettings = {
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
    var labelSettings = {
        rightLabel: 'taskName'
    };
    var splitterSettings = {
        columnIndex: 1
    };
    var yearformat = [
        { id: 'MMM "yy', format: 'Jan "18' },
        { id: 'y', format: '2018' },
        { id: 'MMMM, y', format: 'January, 18' },
    ];
    var monthformat = [
        { id: 'MMM dd, yyyy', format: 'Jan 01, 2018' },
        { id: 'MMMM', format: 'January' },
        { id: 'MMM', format: 'Jan' },
    ];
    var weekformat = [
        { id: 'MMM dd, yyyy', format: 'Jan 01, 2019' },
        { id: 'EEE MMM dd, "yy', format: 'Mon Jan 01, "19' },
        { id: 'EEE MMM dd', format: 'Mon Jan 01' },
    ];
    var dayformat = [
        { id: '', format: 'M' },
        { id: 'EEE', format: 'Mon' },
        { id: 'dd', format: '01' },
    ];
    var hourformat = [
        { id: 'hh', format: '00' },
        { id: 'hh : mm a', format: '00 : 00 AM' },
        { id: 'h : mm a', format: '0 : 00 AM' },
    ];
    var unit = [
        { id: 'Year', unit: 'Year' },
        { id: 'Month', unit: 'Month' },
        { id: 'Week', unit: 'Week' },
        { id: 'Day', unit: 'Day' },
        { id: 'Hour', unit: 'Hour' }
    ];
    var multitaskbarCheck = function (props) {
        if (multitaskbarcheckbox.current.checked) {
            ganttInstance.current.enableMultiTaskbar = true;
        }
        else {
            ganttInstance.current.enableMultiTaskbar = false;
        }
    };
    var topTierCountchange = function (e) {
        var count = e.value;
        ganttInstance.current.timelineSettings.topTier.count = count;
    };
    var bottomTierCountchange = function (e) {
        var count = e.value;
        ganttInstance.current.timelineSettings.bottomTier.count = count;
    };
    var topUnitChange = function (e) {
        var unit = e.value;
        ganttInstance.current.timelineSettings.topTier.unit = unit;
        if (unit === 'Year') {
            topTierformat.current.dataSource = yearformat;
        }
        else if (unit === 'Month') {
            topTierformat.current.dataSource = monthformat;
        }
        else if (unit === 'Week') {
            topTierformat.current.dataSource = weekformat;
        }
        else if (unit === 'Day') {
            topTierformat.current.dataSource = dayformat;
        }
        else {
            topTierformat.current.dataSource = hourformat;
        }
        topTierformat.current.value = topTierformat.current.dataSource[0].id;
        updateUnitWidth(unit, 'top');
        ganttInstance.current.timelineSettings.topTier.unit = unit;
    };
    var bottomUnitChange = function (e) {
        var unit = e.value;
        ganttInstance.current.timelineSettings.bottomTier.unit = unit;
        if (unit === 'Year') {
            bottomTierformat.current.dataSource = yearformat;
        }
        else if (unit === 'Month') {
            bottomTierformat.current.dataSource = monthformat;
        }
        else if (unit === 'Week') {
            bottomTierformat.current.dataSource = weekformat;
        }
        else if (unit === 'Day') {
            bottomTierformat.current.dataSource = dayformat;
        }
        else {
            bottomTierformat.current.dataSource = hourformat;
        }
        bottomTierformat.current.value = bottomTierformat.current.dataSource[0].id;
        updateUnitWidth(unit, 'bottom');
        ganttInstance.current.timelineSettings.bottomTier.unit = unit;
    };
    var bottomFormatChange = function (e) {
        var format = e.value;
        ganttInstance.current.timelineSettings.bottomTier.format = format.toString();
    };
    var topFormatChange = function (e) {
        var format = e.value;
        ganttInstance.current.timelineSettings.topTier.format = format.toString();
    };
    var unitWidth = function (e) {
        var width = e.value;
        ganttInstance.current.timelineSettings.timelineUnitSize = width;
    };
    var unitField = { text: 'unit', value: 'id' };
    var formatField = { text: 'format', value: 'id' };
    var updateUnitWidth = function (unit, tier) {
        var topUnit = tier === 'top' ? unit : ganttInstance.current.timelineSettings.topTier.unit;
        var bottomUnit = tier === 'bottom' ? unit : ganttInstance.current.timelineSettings.bottomTier.unit;
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
        timelineUnitSize.current.value = unitWidth;
    };
    var startDateValue = new Date('02/05/2025');
    var endDateValue = new Date('03/23/2025');
    var changeDateRange = function (args) {
        ganttInstance.current.timelineSettings.viewStartDate = (0, ej2_base_1.isNullOrUndefined)(args.startDate) ? startDateValue : args.startDate;
        ganttInstance.current.timelineSettings.viewEndDate = (0, ej2_base_1.isNullOrUndefined)(args.endDate) ? endDateValue : args.endDate;
    };
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: 'control-section' },
            React.createElement("div", { className: 'col-lg-8' },
                React.createElement(ej2_react_gantt_1.GanttComponent, { id: 'Timeline', ref: ganttInstance, dataSource: data_1.projectData, renderBaseline: true, allowSorting: true, treeColumnIndex: 1, allowSelection: true, taskFields: taskFields, timelineSettings: timelineSettings, highlightWeekends: true, height: '650px', taskbarHeight: 25, rowHeight: 46, labelSettings: labelSettings, splitterSettings: splitterSettings },
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
                React.createElement(property_pane_1.PropertyPane, { title: "Properties" },
                    React.createElement("table", { id: "property", className: "property-panel-table", title: "Properties", style: { width: '100%' } },
                        React.createElement("colgroup", null,
                            React.createElement("col", { style: { width: '35%' } }),
                            React.createElement("col", { style: { width: '65%' } })),
                        React.createElement("tbody", null,
                            React.createElement("tr", null,
                                React.createElement("td", { style: { width: '35%' } },
                                    React.createElement("div", null, "Timeline Range")),
                                React.createElement("td", { style: { width: '65%' } },
                                    React.createElement("div", null,
                                        React.createElement(ej2_react_calendars_1.DateRangePickerComponent, { startDate: startDateValue, endDate: endDateValue, change: changeDateRange.bind(_this) })))),
                            React.createElement("tr", null,
                                React.createElement("td", { style: { width: '35%' } },
                                    React.createElement("div", null, "Timeline Unit Size")),
                                React.createElement("td", { style: { width: '65%' } },
                                    React.createElement("div", null,
                                        React.createElement(ej2_react_inputs_1.NumericTextBoxComponent, { ref: timelineUnitSize, format: "n", value: 33, min: 10, change: unitWidth.bind(_this) })))),
                            React.createElement("tr", null,
                                React.createElement("td", { colSpan: 2, style: { width: '35%' } },
                                    React.createElement("div", null,
                                        React.createElement("b", null, "Top Tier")))),
                            React.createElement("tr", null,
                                React.createElement("td", { style: { width: '35%' } },
                                    React.createElement("div", null, "Count")),
                                React.createElement("td", { style: { width: '65%' } },
                                    React.createElement("div", null,
                                        React.createElement(ej2_react_inputs_1.NumericTextBoxComponent, { ref: topTierCount, id: "count", format: "n", min: 1, max: 50, value: 1, className: "form-control", change: topTierCountchange.bind(_this) })))),
                            React.createElement("tr", null,
                                React.createElement("td", { style: { width: '35%' } },
                                    React.createElement("div", null, "Unit")),
                                React.createElement("td", { style: { width: '65%' } },
                                    React.createElement("div", null,
                                        React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { ref: topTierUnit, id: "unit", tabIndex: 1, dataSource: unit, fields: unitField, value: "Week", change: topUnitChange.bind(_this) })))),
                            React.createElement("tr", null,
                                React.createElement("td", { style: { width: '35%' } },
                                    React.createElement("div", null, "Format")),
                                React.createElement("td", { style: { width: '65%' } },
                                    React.createElement("div", null,
                                        React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { ref: topTierformat, id: "topformat", tabIndex: 1, dataSource: weekformat, fields: formatField, value: "MMM dd, yyyy", change: topFormatChange.bind(_this) })))),
                            React.createElement("tr", null,
                                React.createElement("td", { colSpan: 2, style: { width: '35%' } },
                                    React.createElement("div", null,
                                        React.createElement("b", null, "Bottom Tier")))),
                            React.createElement("tr", null,
                                React.createElement("td", { style: { width: '35%' } },
                                    React.createElement("div", null, "Count")),
                                React.createElement("td", { style: { width: '65%' } },
                                    React.createElement("div", null,
                                        React.createElement(ej2_react_inputs_1.NumericTextBoxComponent, { ref: bottomTierCount, id: "count", format: "n", min: 1, max: 50, value: 1, className: "form-control", change: bottomTierCountchange.bind(_this) })))),
                            React.createElement("tr", null,
                                React.createElement("td", { style: { width: '35%' } },
                                    React.createElement("div", null, "Unit")),
                                React.createElement("td", { style: { width: '65%' } },
                                    React.createElement("div", null,
                                        React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { ref: bottomTierUnit, id: "unit", tabIndex: 1, dataSource: unit, fields: unitField, value: "Day", change: bottomUnitChange.bind(_this) })))),
                            React.createElement("tr", null,
                                React.createElement("td", { style: { width: '35%' } },
                                    React.createElement("div", null, "Format")),
                                React.createElement("td", { style: { width: '65%' } },
                                    React.createElement("div", null,
                                        React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { ref: bottomTierformat, id: "btFormat", tabIndex: 1, dataSource: dayformat, fields: formatField, value: "", change: bottomFormatChange.bind(_this) })))),
                            React.createElement("tr", null,
                                React.createElement("td", { style: { width: '35%' } },
                                    React.createElement("div", null, "Multiple Taskbars")),
                                React.createElement("td", { style: { width: '65%' } },
                                    React.createElement("div", { id: 'multitaskbar', style: { paddingTop: '0px', paddingLeft: '0px' } },
                                        React.createElement(ej2_react_buttons_1.CheckBoxComponent, { ref: multitaskbarcheckbox, id: "multitaskbarCheck", onClick: multitaskbarCheck.bind(_this), className: "checkbox", checked: false }))))))))),
        React.createElement("style", null, ".fluent2-dark #multitaskbar .e-frame, .fluent2 #multitaskbar .e-frame, .fluent2-highcontrast #multitaskbar .e-frame{\n              margin: 0px;\n          }"),
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
                "Gantt component features are segregated into individual feature-wise modules. To use selection, sorting and markers features, we need to inject the ",
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
exports.default = Timeline;
