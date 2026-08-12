"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ej2_react_pivotview_1 = require("@syncfusion/ej2-react-pivotview");
var ej2_react_calendars_1 = require("@syncfusion/ej2-react-calendars");
var sample_base_1 = require("../common/sample-base");
var rData = require("./pivot-data/pivotData.json");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var ej2_data_1 = require("@syncfusion/ej2-data");
require("./external-data-based-filtering.css");
/**
 * PivotView ExternalDataBasedFiltering Sample.
 */
var Pivot_Data = rData.data;
function ExternalDataBasedFiltering() {
    var startDate = new Date('2024-01-01');
    var endDate = new Date('2024-12-01');
    var _a = React.useState({
        enableSorting: true,
        expandAll: true,
        columns: [
            { name: 'Country' },
            { name: 'Product' }
        ],
        rows: [
            { name: 'OrderDate' }
        ],
        values: [
            { name: 'Amount', caption: 'Total Sales' }
        ],
        drilledMembers: [{ name: 'Country', items: ['Canada'] }],
        formatSettings: [{ name: 'Amount', format: 'C0' }, { name: 'OrderDate', format: 'dd/MM/yyyy', type: 'date' }],
        filters: [],
        groupSettings: [{ name: 'OrderDate', groupInterval: ['Years', 'Months'] }]
    }), dataSourceSettings = _a[0], setDataSourceSettings = _a[1];
    React.useEffect(function () {
        (0, sample_base_1.updateSampleSection)();
        applyDateFilter();
    }, []);
    var pivotObj;
    function setStartDate(args) {
        startDate = args.value;
    }
    function setEndDate(args) {
        endDate = args.value;
    }
    function applyDateFilter() {
        if (startDate && endDate) {
            startDate = new Date(startDate.getFullYear(), startDate.getMonth(), 1);
            endDate = new Date(endDate.getFullYear(), endDate.getMonth() + 1, 0, 23, 59, 59, 999);
            var pivotData = Pivot_Data.map(function (item) { return (__assign(__assign({}, item), { OrderDate: new Date(item.OrderDate) })); });
            new ej2_data_1.DataManager({ json: pivotData, adaptor: new ej2_data_1.JsonAdaptor() }).executeQuery(new ej2_data_1.Query()
                .where('OrderDate', 'greaterthanorequal', startDate)
                .where('OrderDate', 'lessthanorequal', endDate))
                .then(function (e) {
                setDataSourceSettings(function (prevSettings) { return (__assign(__assign({}, prevSettings), { dataSource: e.result })); });
            });
        }
    }
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: 'control-section' },
            React.createElement("div", { style: { padding: '0px 10px' } },
                React.createElement("strong", { style: { display: 'inline-block', fontSize: '14px', marginRight: '5px' } }, "Start Date:"),
                React.createElement(ej2_react_calendars_1.DatePickerComponent, { id: 'start-datepicker', placeholder: 'Choose a start date', min: new Date(2019, 0, 1), max: new Date(2024, 10, 31), value: startDate, width: 200, format: 'MMM yyyy', start: 'Year', depth: 'Year', change: function (args) { return setStartDate(args); }, cssClass: 'pivot-datepicker' }),
                React.createElement("strong", { style: { display: 'inline-block', fontSize: '14px', marginRight: '5px' } }, "End Date:"),
                React.createElement(ej2_react_calendars_1.DatePickerComponent, { id: 'end-datepicker', placeholder: 'Choose an end date', min: new Date(2019, 1, 1), max: new Date(2024, 11, 31), value: endDate, width: 200, format: 'MMM yyyy', start: 'Year', depth: 'Year', change: function (args) { return setEndDate(args); }, cssClass: 'pivot-datepicker' }),
                React.createElement(ej2_react_buttons_1.ButtonComponent, { id: 'apply', cssClass: 'e-primary', style: { width: '80px' }, onClick: applyDateFilter.bind(this) }, "Apply")),
            React.createElement(ej2_react_pivotview_1.PivotViewComponent, { id: 'PivotView', ref: function (pivotview) { pivotObj = pivotview; }, dataSourceSettings: dataSourceSettings, width: '100%', height: '500', gridSettings: { columnWidth: 140 } })),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This sample demonstrates how to apply an external date range filter to the Pivot Table data source, enhancing performance and responsiveness when working with large datasets.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null,
                "In this sample, date filtering is performed externally by updating the Pivot Table's data source based on a selected date range. Users can choose a ",
                React.createElement("b", null, "Start Date"),
                " and ",
                React.createElement("b", null, "End Date"),
                " using date pickers, and the table updates to show only the records that fall within that range."),
            React.createElement("p", null,
                "This external filtering method improves performance by avoiding in-component filtering. Instead, the data is pre-filtered at runtime using a custom ",
                React.createElement("code", null, "applyDateFilter"),
                " function, which compares the selected date range with each record's date in the original dataset. This reduces the processing load on the Pivot Table and results in a more responsive user experience"),
            React.createElement("p", null,
                React.createElement("b", null, " Note:"),
                " Aggregation in the Pivot Table is performed only on the filtered data. Any records outside the selected date range are excluded from the summary calculations."),
            React.createElement("p", null,
                "More information on the Essential",
                React.createElement("sup", null, "\u00AE"),
                " JS2 Pivot Table can be found in this ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/pivotview/getting-started#adding-pivot-table-component" }, "documentation section"),
                "."))));
}
exports.default = ExternalDataBasedFiltering;
