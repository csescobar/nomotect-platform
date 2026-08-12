"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var ej2_react_gantt_1 = require("@syncfusion/ej2-react-gantt");
var ej2_data_1 = require("@syncfusion/ej2-data");
var sample_base_1 = require("../common/sample-base");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var RemoteData = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var recordCount = (0, react_1.useRef)("1000");
    var dataSource = new ej2_data_1.DataManager({
        url: "https://services.syncfusion.com/react/production/api/GanttWebApiRemoteData?count=".concat(recordCount.current),
        adaptor: new ej2_data_1.WebApiAdaptor(),
        crossDomain: true
    });
    var _a = (0, react_1.useState)(""), loadTime = _a[0], setLoadTime = _a[1];
    var _b = (0, react_1.useState)(new Date()), startLoadTime = _b[0], setStartLoadTime = _b[1];
    var shouldCalculateLoadTime = (0, react_1.useRef)(true);
    var dropdownData = [
        { Text: "1,000 Rows", Value: "1000" },
        { Text: "2,500 Rows", Value: "2500" },
        { Text: "5,000 Rows", Value: "5000" },
    ];
    var dropdownFields = { text: "Text", value: "Value" };
    var taskFields = {
        id: "TaskId",
        name: "TaskName",
        startDate: "StartDate",
        endDate: "EndDate",
        duration: "Duration",
        progress: "Progress",
        parentID: "ParentId",
        dependency: "Predecessor",
    };
    var projectStartDate = new Date("12/29/2024");
    var projectEndDate = new Date("03/19/2025");
    var gridLines = "Horizontal";
    var timelineSettings = {
        timelineUnitSize: 50,
        topTier: {
            unit: 'Week',
            format: 'MMM dd, y',
        },
        bottomTier: {
            unit: 'Day',
            format: 'dd'
        },
    };
    var labelSettings = {
        rightLabel: "TaskName",
        taskLabel: "Progress"
    };
    var loadGanttData = function () {
        setStartLoadTime(new Date());
        shouldCalculateLoadTime.current = true;
    };
    var splitterSettings = {
        columnIndex: 2
    };
    var onDropdownChange = function (e) {
        recordCount.current = e.value;
        loadGanttData();
    };
    var onDataBound = function () {
        if (shouldCalculateLoadTime.current && startLoadTime) {
            shouldCalculateLoadTime.current = false;
            var endLoadTime = new Date();
            var diff = endLoadTime.getTime() - startLoadTime.getTime();
            setLoadTime((diff / 1000).toFixed(2));
        }
    };
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: 'control-section' },
            React.createElement("div", { style: { display: "flex", } },
                React.createElement("div", { style: { width: "130px", paddingBottom: "10px" } },
                    React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { dataSource: dropdownData, fields: dropdownFields, value: recordCount, change: onDropdownChange, placeholder: "1,000 Rows" })),
                React.createElement("span", { style: { paddingLeft: "20px", fontSize: "15px", marginTop: "5px" } },
                    React.createElement("b", null, "Data initial load time:"),
                    " ",
                    loadTime,
                    " sec")),
            React.createElement(ej2_react_gantt_1.GanttComponent, { id: 'RemoteData', dataSource: dataSource, allowSorting: true, dateFormat: 'MMM dd, y', treeColumnIndex: 1, allowSelection: true, highlightWeekends: false, includeWeekend: true, splitterSettings: splitterSettings, allowUnscheduledTasks: true, projectStartDate: projectStartDate, projectEndDate: projectEndDate, enableVirtualization: true, enableTimelineVirtualization: true, taskFields: taskFields, gridLines: gridLines, timelineSettings: timelineSettings, labelSettings: labelSettings, dataBound: onDataBound, height: '650px', rowHeight: 46, taskbarHeight: 25 },
                React.createElement(ej2_react_gantt_1.ColumnsDirective, null,
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'TaskId' }),
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'TaskName', headerText: "Project Activity", width: '250', clipMode: 'EllipsisWithTooltip' }),
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'StartDate', headerText: "Planned Start Date" }),
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: "Duration", headerText: "Duration" }),
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: "Progress", headerText: "Completion (%)" })),
                React.createElement(ej2_react_gantt_1.Inject, { services: [ej2_react_gantt_1.Selection, ej2_react_gantt_1.VirtualScroll] })),
            React.createElement("div", { style: { float: 'right', margin: '10px' } },
                "Source:",
                React.createElement("a", { href: "https://en.wikipedia.org/wiki/Cereal_growth_staging_scales", target: '_blank' }, "https://en.wikipedia.org/"))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This sample demonstrates the way of binding data to Gantt Chart with remote service. The Gantt Chart data source is bound to remote data using DataManager. This sample data helps to visualize the various phases of Barley harvesting.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null,
                "The ",
                React.createElement("code", null, "dataSource"),
                " property in Gantt Chart can be assigned with the instance of",
                React.createElement("code", null, "DataManager"),
                " to bind remote data. The DataManager, which will act as an interface between the service endpoint and the Gantt Chart, will require the below minimal information to interact with service endpoint properly."),
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement("code", null, "DataManager->url"),
                    " - Defines the service endpoint to fetch data"),
                React.createElement("li", null,
                    React.createElement("code", null, "DataManager->adaptor"),
                    " - Defines the adaptor option. By default, ODataAdaptor is used for remote binding.")),
            React.createElement("p", null,
                "Adaptor is responsible for processing response and request from/to the service endpoint. The ",
                React.createElement("code", null, "@syncfusion/ej2-data"),
                " package provides some predefined adaptors which are designed to interact with particular service endpoints. They are:"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement("code", null, "UrlAdaptor"),
                    " - Use this to interact any remote services. This is the base adaptor for all remote based adaptors."),
                React.createElement("li", null,
                    React.createElement("code", null, "ODataAdaptor"),
                    " - Use this to interact with OData endpoints."),
                React.createElement("li", null,
                    React.createElement("code", null, "ODataV4Adaptor"),
                    " - Use this to interact with OData V4 endpoints."),
                React.createElement("li", null,
                    React.createElement("code", null, "WebApiAdaptor"),
                    " - Use this to interact with Web API created under OData standards."),
                React.createElement("li", null,
                    React.createElement("code", null, "WebMethodAdaptor"),
                    " - Use this to interact with web methods.")),
            React.createElement("p", null,
                "In this demo, remote data is bound by assigning service data as an instance of ",
                React.createElement("code", null, "DataManager"),
                " to the ",
                React.createElement("code", null, "dataSource"),
                " property. More information on the data binding can be found in this documentation section."),
            React.createElement("p", null,
                "Gantt component features are segregated into individual feature-wise modules. To use a virtual scroll and selection feature, we need to inject the ",
                React.createElement("code", null, "VirtualScroll"),
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
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/gantt/data-binding#remote-data" }, "documentation section"),
                "."))));
};
exports.default = RemoteData;
