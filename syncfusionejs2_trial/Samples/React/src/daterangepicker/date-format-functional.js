"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var sample_base_1 = require("../common/sample-base");
require("./format-style.css");
var ej2_react_calendars_1 = require("@syncfusion/ej2-react-calendars");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var startValue = new Date(new Date().setDate(1));
var endValue = new Date(new Date().setDate(20));
var Format = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var dateRangePickerRef = (0, react_1.useRef)(null);
    var dataTypes = [
        { value: 'dd-MMM-yy' },
        { value: 'yyyy-MM-dd' },
        { value: 'dd-MMMM' },
        { value: 'dd/MMM/yy hh:mm a' },
    ];
    var inputFormatData = [
        { text: 'dd/MM/yyyy', value: 'dd/MM/yyyy' },
        { text: 'ddMMMyy', value: 'ddMMMyy' },
        { text: 'yyyyMMdd', value: 'yyyyMMdd' },
        { text: 'dd.MM.yy', value: 'dd.MM.yy' },
        { text: 'MM/dd/yyyy', value: 'MM/dd/yyyy' },
        { text: 'yyyy/MMM/dd', value: 'yyyy/MMM/dd' },
        { text: 'dd-MM-yyyy', value: 'dd-MM-yyyy' },
    ];
    var fields = { value: 'value' };
    var checkFields = { text: 'text', value: 'value' };
    var waterMark = 'Format';
    var floatLabelType = 'Auto';
    var index = 3;
    var _a = (0, react_1.useState)('dd/MMM/yy hh:mm a'), format = _a[0], setFormat = _a[1];
    var _b = (0, react_1.useState)(['dd/MM/yyyy', 'yyyyMMdd']), inputFormats = _b[0], setInputFormats = _b[1];
    var _c = (0, react_1.useState)('-'), separator = _c[0], setSeparator = _c[1];
    /*Apply selected format to the component*/
    var onChange = function (args) {
        var selectedFormat = args.value;
        setFormat(selectedFormat);
        setSeparator(args.value.toString() === 'yyyy/MM/dd HH:mm' ? 'to' : '-');
    };
    var onChangeInputFormat = function (args) {
        var selectedValues = args.value || [];
        setInputFormats(selectedValues);
        // Directly update the DateRangePicker instance
        if (dateRangePickerRef.current) {
            dateRangePickerRef.current.inputFormats = selectedValues;
        }
    };
    // Use effect to update inputFormats when state changes
    (0, react_1.useEffect)(function () {
        if (dateRangePickerRef.current) {
            dateRangePickerRef.current.inputFormats = inputFormats;
        }
    }, [inputFormats]);
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: 'control-section row' },
            React.createElement("div", { className: 'col-lg-7' },
                React.createElement("div", { className: 'daterangepicker-control-section format' },
                    React.createElement(ej2_react_calendars_1.DateRangePickerComponent, { ref: dateRangePickerRef, format: format, separator: separator, startDate: startValue, endDate: endValue, inputFormats: inputFormats }))),
            React.createElement("div", { id: "format", className: 'col-lg-4 property-section' },
                React.createElement("div", { className: "property-panel-header" }, "Properties"),
                React.createElement("div", null,
                    React.createElement("label", { className: 'example-label' }, "Choose a display format"),
                    React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { id: "dateFormats", dataSource: dataTypes, fields: fields, index: index, placeholder: waterMark, change: onChange }))),
            React.createElement("div", { id: "format", className: 'col-lg-4 property-section' },
                React.createElement("div", null,
                    React.createElement("label", { className: "example-label", style: { marginTop: '40px' } }, "Choose input formats"),
                    React.createElement(ej2_react_dropdowns_1.MultiSelectComponent, { id: "inputFormatsDatePicker", dataSource: inputFormatData, allowFiltering: false, fields: checkFields, placeholder: "e.g. MM/dd/yyyy", value: inputFormats, mode: "CheckBox", showSelectAll: true, showDropDownIcon: true, enableSelectionOrder: false, change: onChangeInputFormat },
                        React.createElement(ej2_react_dropdowns_1.Inject, { services: [ej2_react_dropdowns_1.CheckBoxSelection] }))))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null,
                "In this sample, the DateRangePicker has been configured with the ",
                React.createElement("code", null, "dd-MMM-yy hh:mm a"),
                " date time format. To change this current date time format, go to the properties panel at the right side and select a date format from the dropdown options. For mobile mode touch the icon at the right side and select a date time format from the dropdown options.")),
        React.createElement("div", { id: 'description' },
            React.createElement("p", null,
                "Format sample illustrates the support of custom date format in the DateRangePicker component by using the ",
                React.createElement("code", null, "format"),
                " property. You can also change the date format by selecting it from the format options in the properties panel."),
            React.createElement("p", null,
                "Furthermore, this example showcases the flexible date value parsing functionality available in DateRangePicker component. By utilizing the ",
                React.createElement("code", null, "inputFormats"),
                " property, users can enter dates in various formats, which will be automatically parsed and formatted according to the chosen date format."),
            React.createElement("p", null,
                "More information on the date format configuration can be found in the ",
                React.createElement("a", { href: "https://ej2.syncfusion.com/react/documentation/daterangepicker/globalization/#date-format", target: "_blank" }, " documentation section"),
                "."))));
};
exports.default = Format;
